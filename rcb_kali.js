(function () {
  /* ============================================================
     CONFIG
  ============================================================ */
  const BUCKET_FILTER = "O";
  const LOCAL_STORAGE_KEY = "mrt-store";
  const BASE_URL = "https://rcbmpapi.ticketgenie.in";
  const SEAT_SELECTION_POST_URL = `${BASE_URL}/checkout/ticketaddtocart`;
  const STAND_LIST_BASE_URL = `${BASE_URL}/ticket/standslist`;
  const SEAT_LIST_BASE_URL = `${BASE_URL}/ticket/seatlist`;
  const EVENT_LIST_BASE_URL = `${BASE_URL}/ticket/eventlist`;
  const CHECKOUT_PATH = "/checkout";

  const TARGET_TEAMS = ["Chennai"];
  const MAX_PRICE = 5000;
  const MAX_RETRIES = 4;
  const RETRY_DELAY_MS = 1000;
  const POLL_INTERVAL_MS = 5000;
  const MAX_SEAT_SET_ATTEMPTS = 5;

  /* ============================================================
     STATE
  ============================================================ */
  let CHECKOUT_STARTED = false;
  let pollingInterval = null;
  let checkoutInterval = null;

  /* ============================================================
     HELPERS
  ============================================================ */
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  function backoffDelay(attempt, base = RETRY_DELAY_MS) {
    // Full jitter: random value in [0, base * 2^attempt]
    const cap = base * Math.pow(2, attempt);
    return delay(Math.random() * cap);
  }

  function getBearerToken() {
    const match = document.cookie.match(/rtokn=([^;]+)/);
    return match ? `Bearer ${decodeURIComponent(match[1])}` : "";
  }

  function sanitizePrice(p) {
    if (typeof p === "number") return p;
    if (typeof p === "string")
      return Number(p.replace(/[^\d.]/g, "").replace(/,/g, ""));
    return NaN;
  }

  function isHardFail(reason = "") {
    return /seat.*not.*available|already.*booked|unavailable|sold.?out/i.test(
      reason,
    );
  }

  function isNetworkError(err) {
    return (
      err instanceof TypeError || // fetch failed
      (err?.message || "").toLowerCase().includes("network")
    );
  }

  /* ============================================================
     FETCH WITH RETRY
  ============================================================ */
  async function fetchJSONWithRetry(url, options = {}, retries = MAX_RETRIES) {
    let lastErr;
    for (let attempt = 0; attempt < retries; attempt++) {
      if (attempt > 0) await backoffDelay(attempt - 1);
      try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
      } catch (err) {
        lastErr = err;
        console.warn(
          `⚠️ Fetch attempt ${attempt + 1}/${retries} failed [${url}]: ${err.message}`,
        );
      }
    }
    throw lastErr;
  }

  /* ============================================================
     EVENT DISCOVERY
  ============================================================ */
  async function getValidEvents(headers) {
    try {
      const url = `${EVENT_LIST_BASE_URL}/${BUCKET_FILTER}`;
      const res = await fetchJSONWithRetry(url, { headers });
      return (res.result || [])
        .filter((e) =>
          TARGET_TEAMS.some((t) => {
            const tl = t.toLowerCase();
            return (
              (e.team_2 || e.team2 || "").toLowerCase().includes(tl) ||
              (e.team || "").toLowerCase().includes(tl)
            );
          }),
        )
        .map((e) => ({
          eventId: e.event_Code || e.eventCode,
          eventGroupCode: e.event_Group_Code || e.eventGroupCode,
          eventName: e.event_Name || e.eventName,
        }))
        .filter((e) => e.eventId && e.eventGroupCode); // guard incomplete records
    } catch (err) {
      console.warn("❌ Failed to fetch event list:", err);
      return [];
    }
  }

  /* ============================================================
     SEAT HELPERS
  ============================================================ */
  function findBestSeats(seats, count, excludedIds = new Set()) {
    const eligible = seats.filter((s) => !excludedIds.has(s.id));
    eligible.sort((a, b) => a.row.localeCompare(b.row) || a.num - b.num);

    const rowsMap = {};
    for (const seat of eligible) {
      (rowsMap[seat.row] = rowsMap[seat.row] || []).push(seat);
    }
    const sortedRows = Object.keys(rowsMap).sort();

    // 1. Consecutive seats in a single row
    for (const row of sortedRows) {
      const rowSeats = rowsMap[row];
      if (rowSeats.length < count) continue;
      for (let i = 0; i <= rowSeats.length - count; i++) {
        let ok = true;
        for (let j = 1; j < count; j++) {
          if (rowSeats[i + j].num !== rowSeats[i].num + j) {
            ok = false;
            break;
          }
        }
        if (ok) {
          console.log(`✅ Found ${count} consecutive seats in row ${row}`);
          return rowSeats.slice(i, i + count);
        }
      }
    }

    // 2. Any `count` seats from the same row
    for (const row of sortedRows) {
      if (rowsMap[row].length >= count) {
        console.log(
          `⚠️ Non-consecutive fallback: ${count} seats in row ${row}`,
        );
        return rowsMap[row].slice(0, count);
      }
    }

    console.log(`❌ Not enough eligible seats for count=${count}`);
    return [];
  }

  function getCandidateCounts(limit) {
    const max = Math.min(limit, 4);
    const counts = [];
    for (let c = max; c >= 2; c--) counts.push(c);
    return counts;
  }

  async function fetchAvailableSeats(eventMeta, standCode, headers) {
    const seatUrl = `${SEAT_LIST_BASE_URL}/${eventMeta.eventGroupCode}/${eventMeta.eventId}/${standCode}`;
    const seatData = await fetchJSONWithRetry(seatUrl, { headers }, 3);
    return (seatData?.result || [])
      .filter((s) => s.status === "O" && s.bucket === BUCKET_FILTER)
      .map((s) => ({
        seatNo: `${s.row}-${s.seat_No}`,
        id: s.i_Id,
        row: s.row,
        num: parseInt(s.seat_No, 10),
      }));
  }

  /* ============================================================
     ADD-TO-CART  (one stand, full fallback logic)
  ============================================================ */
  async function tryAddToCartForStand(stand, eventMeta, limit, headers) {
    const standCode = stand.stand_Code || stand.standCode;
    const candidateCounts = getCandidateCounts(limit);
    // Track seat IDs that caused confirmed seat-level (not network) failures
    const seatFailedIds = new Set();

    for (const count of candidateCounts) {
      console.log(`\n  🔢 Trying count=${count} for ${stand.stand_Name}`);

      for (
        let setAttempt = 0;
        setAttempt < MAX_SEAT_SET_ATTEMPTS;
        setAttempt++
      ) {
        // --- Re-fetch fresh seat data for every seat-set attempt ---
        let availableSeats;
        try {
          availableSeats = await fetchAvailableSeats(
            eventMeta,
            standCode,
            headers,
          );
        } catch (err) {
          console.warn(`  ⚠️ Could not fetch seat list: ${err.message}`);
          break; // can't proceed for this stand without seat data
        }

        if (availableSeats.length < count) {
          console.log(
            `  ⏭️ Only ${availableSeats.length} seats left — skipping stand`,
          );
          return { booked: false };
        }

        const selectedSeats = findBestSeats(
          availableSeats,
          count,
          seatFailedIds,
        );
        if (selectedSeats.length !== count) {
          console.log(
            `  ❌ findBestSeats returned ${selectedSeats.length}/${count} — no more sets`,
          );
          break; // try next count
        }

        const seatNos = selectedSeats.map((s) => s.seatNo).join(",");
        const seatIds = selectedSeats.map((s) => s.id).join(",");
        console.log(
          `  🎯 set#${setAttempt + 1} count=${count}: seats [${seatNos}]`,
        );

        const postBody = {
          eventGroupId: eventMeta.eventGroupCode,
          eventId: eventMeta.eventId,
          standId: standCode,
          qty: count,
          seatNos,
          seatIds,
        };

        let booked = false;
        let networkFailures = 0;

        for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
          if (attempt > 0) await backoffDelay(attempt - 1);
          console.log(`    ⏳ POST attempt ${attempt + 1}/${MAX_RETRIES}`);

          let res, data;
          try {
            res = await fetch(SEAT_SELECTION_POST_URL, {
              method: "POST",
              headers,
              body: JSON.stringify(postBody),
            });
            if (!res.ok) {
              // 5xx = transient server error → retry; 4xx = likely bad request → break
              if (res.status >= 400 && res.status < 500) {
                console.warn(
                  `    ❌ Client error ${res.status} — aborting POST retries`,
                );
                break;
              }
              console.warn(`    ⚠️ Server error ${res.status} — retrying`);
              continue;
            }
            data = await res.json();
          } catch (err) {
            networkFailures++;
            console.warn(
              `    ⚠️ Network error attempt ${attempt + 1}: ${err.message}`,
            );
            continue;
          }

          if (data?.status && data?.result) {
            booked = true;
            break;
          }

          const reason = data?.message || data?.error || JSON.stringify(data);
          console.warn(`    ❌ API rejected: ${reason}`);

          if (isHardFail(reason)) {
            // Seats are confirmed gone — blacklist them and stop retrying this POST
            console.warn("    🚫 Hard seat failure — blacklisting these seats");
            break;
          }
          // Soft/unknown failure — retry same seats
        }

        if (booked) {
          return { booked: true, count, seatNos, seatIds, standCode };
        }

        // Only blacklist on seat-level failures (not pure network failures)
        if (networkFailures < MAX_RETRIES) {
          selectedSeats.forEach((s) => seatFailedIds.add(s.id));
          console.log(
            `  🔄 Seat set blacklisted (${selectedSeats.length} seats). Network failures: ${networkFailures}`,
          );
        } else {
          console.warn(
            "  ⚠️ All failures were network errors — keeping seats for retry",
          );
        }
      }

      console.log(`  ❌ Exhausted seat sets for count=${count}`);
    }

    return { booked: false };
  }

  /* ============================================================
     BOOKING ORCHESTRATION  (one event)
  ============================================================ */
  async function tryBookingEvent(eventMeta, headers) {
    try {
      const standUrl = `${STAND_LIST_BASE_URL}/${eventMeta.eventId}`;
      const standData = await fetchJSONWithRetry(standUrl, { headers });

      if (!standData?.result || !Array.isArray(standData.result.stands)) {
        console.warn("⚠️ Invalid stand data");
        return false;
      }

      const limit = standData.result.limit ?? 0;
      if (limit < 2) {
        console.warn(`⚠️ Booking limit is ${limit} — skipping event`);
        return false;
      }

      const stands = standData.result.stands
        .map((s) => ({ ...s, price: sanitizePrice(s.price) }))
        .filter((s) => !isNaN(s.price) && s.price <= MAX_PRICE)
        .sort((a, b) => a.price - b.price);

      if (!stands.length) {
        console.warn("⚠️ No stands within budget");
        return false;
      }

      for (const stand of stands) {
        console.log(`\n🏟️  Stand: ${stand.stand_Name} @ ₹${stand.price}`);
        const result = await tryAddToCartForStand(
          stand,
          eventMeta,
          limit,
          headers,
        );

        if (!result.booked) {
          console.log(`⏭️  ${stand.stand_Name} exhausted — next stand`);
          continue;
        }

        // ---- SUCCESS ----
        const total = stand.price * result.count;
        const cart = {
          state: {
            cartCount: result.count,
            ticCount: result.count,
            totalAmount: total,
            tickets: [
              {
                eventId: eventMeta.eventId,
                eventName: eventMeta.eventName,
                standId: result.standCode,
                standName: stand.stand_Name,
                price: stand.price,
                qty: result.count,
                amount: total,
                seatNo: result.seatNos,
                seatId: result.seatIds,
              },
            ],
            merchandise: [],
            products: [],
            addons: [],
          },
          version: 0,
        };

        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(cart));
        console.log(
          `\n🎉 Booked ${result.count} seat(s) in ${stand.stand_Name} — going to checkout`,
        );
        goToCheckout();
        startCheckoutAutomation();
        return true;
      }
    } catch (err) {
      console.error("❌ Booking Error:", err);
    }

    return false;
  }

  /* ============================================================
     SPA NAVIGATION
  ============================================================ */
  function goToCheckout() {
    if (!location.pathname.includes("checkout")) {
      history.pushState({}, "", CHECKOUT_PATH);
      window.dispatchEvent(new Event("popstate"));
    }
  }

  /* ============================================================
     CHECKOUT AUTOMATION  (single interval, stored handle)
  ============================================================ */
  function startCheckoutAutomation() {
    if (CHECKOUT_STARTED) return;
    CHECKOUT_STARTED = true;

    checkoutInterval = setInterval(() => {
      // Accept T&C checkbox if present
      const cb = document.querySelector(
        "input[type='checkbox'], .chakra-checkbox input",
      );
      if (cb && !cb.checked) cb.click();

      // Click the primary CTA (pay / confirm / book)
      const btn = [...document.querySelectorAll("button, .chakra-button")].find(
        (b) => {
          const t = b.innerText.toLowerCase();
          return (
            t.includes("pay now") || t.includes("confirm") || t.includes("book")
          );
        },
      );
      if (btn) {
        console.log(`🟢 Clicking: "${btn.innerText.trim()}"`);
        btn.click();
        // Once the button is successfully clicked, stop hammering
        clearInterval(checkoutInterval);
      }
    }, 1200);
  }

  /* ============================================================
     MAIN BOOKING FLOW
  ============================================================ */
  async function tryBooking() {
    const token = getBearerToken();
    if (!token) {
      console.warn("❌ No bearer token found in cookies");
      return false;
    }

    const headers = {
      Authorization: token,
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    };

    const events = await getValidEvents(headers);
    if (!events.length) {
      console.warn("⚠️ No matching events found");
      return false;
    }

    for (const event of events) {
      console.log(`\n📅 Attempting booking for: ${event.eventName}`);
      const success = await tryBookingEvent(event, headers);
      if (success) return true;
    }

    return false;
  }

  /* ============================================================
     POLL MONITOR
  ============================================================ */
  async function monitor() {
    // Already on checkout — hand off entirely to checkout automation
    if (location.href.includes("checkout")) {
      startCheckoutAutomation();
      clearInterval(pollingInterval);
      return;
    }

    // Cart already populated — go straight to checkout
    try {
      const parsed = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY) || "{}",
      );
      if (parsed?.state?.cartCount >= 2) {
        console.log("🛒 Cart already populated — going to checkout");
        goToCheckout();
        startCheckoutAutomation();
        return;
      }
    } catch {
      /* corrupt storage — ignore */
    }

    const success = await tryBooking();
    if (!success) {
      console.log(
        `🔁 Retry in ${POLL_INTERVAL_MS / 1000}s — ${new Date().toLocaleTimeString()}`,
      );
    }
  }

  pollingInterval = setInterval(monitor, POLL_INTERVAL_MS);
})();
