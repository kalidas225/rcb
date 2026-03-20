import {j as c, r as P, a as it} from "./react-CNvHvvCs.js";
import {c as QI} from "./react-dom-DWmyUnet.js";
import {d as X} from "./react-compiler-runtime-DPNL7nyB.js";
import {u as kA, a as rI, O as RI, b as ft, c as ut, R as CA, N as eI, d as XI, B as Ae} from "./react-router-B1MJz6UT.js";
import {M as ce, F as pt, a as wt, b as xt, c as nt, d as Wc, e as iI, f as pI, g as ht, h as nI, i as Ht, j as Vt, k as vt, l as te, m as Ie, n as ee, o as se, p as oe, q as lI, r as Ot, s as Qc, t as Ne, u as De, v as re, w as sI, x as oI, y as Re, z as ie, A as aI, B as TI, C as pe, D as LI, E as EI, G as mt, H as HI, I as dI, J as ne, K as MA, L as le, N as ae, O as Te} from "./react-icons-CcLsTyv5.js";
import {u as Le, B as T, I as fA, S as nA, a as U, V as Ee, M as lt, b as _, c as YA, D as oA, H as TA, d as dt, e as Mt, f as WA, g as Nt, T as M, h as VA, i as He, j as ac, k as Xc, l as ic, m as de, C as DA, n as zA, o as fc, p as pc, A as kt, q as Wt, r as Me, s as Ut, t as zt, v as _c, w as Jc, x as MI, y as Dt, z as rt, L as Zc, N as Ue, E as Ke, F as he, G as me, J as Se, K as tA, O as IA, P as at, Q as PA, R as nc, U as Kt, W as Ft, X as pA, Y as Ge, Z as rA, _ as fe, $ as KA, a0 as UI, a1 as Rt, a2 as _t, a3 as ue, a4 as qt, a5 as $t, a6 as Zt, a7 as Qt, a8 as Xt, a9 as xe, aa as Oe, ab as KI, ac as hI, ad as mI, ae as St, af as SI, ag as GI, ah as fI, ai as uI, aj as UA, ak as xI, al as OI, am as PI, an as gI, ao as Pe, ap as ge} from "./@chakra-ui-DBAIIz49.js";
import {u as hA, a as Gc, Q as je, b as Ce} from "./@tanstack-CiXUVw9o.js";
import {a as vA} from "./js-cookie-Cz0CWeBA.js";
import {a as jI} from "./axios-C0Zqfgkc.js";
import {c as Pt, p as AI} from "./zustand-0oqzf2gZ.js";
import {E as ye} from "./react-error-boundary-D0kCSjj6.js";
import {H as be, a as Be} from "./react-helmet-async-TE00VPGj.js";
import {J as Ye} from "./jsencrypt-BceYZi2u.js";
import {u as gt} from "./react-hook-form-B31py9X7.js";
import {R as we} from "./react-confetti-JQb9eiO3.js";
import {_ as _e} from "./react-qr-code-cJbcg-8m.js";
import {S as Je, P as Ve, a as ve} from "./swiper-C7XkBHnf.js";
import {R as CI} from "./react-ga4-BUGuEJah.js";
import "./scheduler-DYLXRpC5.js";
import "./lodash.mergewith-FGtcaps8.js";
import "./copy-to-clipboard-OoPgPABw.js";
import "./toggle-selection-BHUZwh74.js";
import "./color2k-BSHHkqKj.js";
import "./@emotion-q8rumQEZ.js";
import "./hoist-non-react-statics-Buxaj0Kl.js";
import "./react-is-8JwjhRSi.js";
import "./@babel-CiMOpXqq.js";
import "./stylis-YG1R7XFf.js";
import "./framer-motion-P92NDBjl.js";
import "./motion-dom-C8PdgYBP.js";
import "./motion-utils-DBsP9okC.js";
import "./aria-hidden-DvXkyWUv.js";
import "./react-remove-scroll-DQJrVEvg.js";
import "./tslib-De9GV7Vy.js";
import "./react-remove-scroll-bar-Ch3WpPzZ.js";
import "./react-style-singleton-DJ1nwgZS.js";
import "./get-nonce-C-Z93AgS.js";
import "./use-sidecar-DA_6ZNEG.js";
import "./use-callback-ref-BW8TMWju.js";
import "./react-focus-lock-BXx4OcM_.js";
import "./focus-lock-8w9XvAej.js";
import "./react-clientside-effect-DsysaQGB.js";
import "./@popperjs-CMBiYTiD.js";
import "./@zag-js-BbAC0Ngi.js";
import "./react-fast-compare-Cs_AX7TC.js";
import "./invariant-Dcyizxdy.js";
import "./shallowequal-CtzHi0LJ.js";
import "./tween-functions-BVJkDWXl.js";
import "./prop-types-BKNjMPK8.js";
import "./qr.js-BVLGcLt3.js";
(function() {
    const A = document.createElement("link").relList;
    if (A && A.supports && A.supports("modulepreload"))
        return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]'))
        e(s);
    new MutationObserver(s => {
        for (const o of s)
            if (o.type === "childList")
                for (const N of o.addedNodes)
                    N.tagName === "LINK" && N.rel === "modulepreload" && e(N)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function I(s) {
        const o = {};
        return s.integrity && (o.integrity = s.integrity),
        s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy),
        s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function e(s) {
        if (s.ep)
            return;
        s.ep = !0;
        const o = I(s);
        fetch(s.href, o)
    }
}
)();
const ke = () => {
    const t = X.c(52)
      , [A] = Le("(min-width: 1200px)")
      , I = A ? "block" : "none";
    let e;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = ["column", "row"],
    t[0] = e) : e = t[0];
    let s, o;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(T, {
        fontSize: ".8rem",
        w: "100%",
        maxW: "120px",
        py: "0",
        pb: "1",
        children: c.jsxs(T, {
            paddingBottom: "5px",
            children: [c.jsx(fA, {
                src: "/imgs/rcb-logo-new.png",
                width: "100px",
                height: "auto"
            }), c.jsx(T, {
                fontWeight: "bolder",
                fontFamily: "rcbFontB",
                pl: "6px",
                fontSize: "0.95rem",
                children: "#PLAYBOLD"
            })]
        })
    }),
    o = c.jsx(nA, {}),
    t[1] = s,
    t[2] = o) : (s = t[1],
    o = t[2]);
    let N;
    t[3] === Symbol.for("react.memo_cache_sentinel") ? (N = ["column", "row"],
    t[3] = N) : N = t[3];
    let i, D;
    t[4] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(T, {
        mt: 1
    }),
    D = c.jsx(nA, {}),
    t[4] = i,
    t[5] = D) : (i = t[4],
    D = t[5]);
    let n;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx("li", {
        className: "menuLi",
        children: c.jsx("a", {
            href: "https://www.facebook.com/RoyalChallengersBangalore/",
            target: "_blank",
            children: c.jsx(fA, {
                src: "/imgs/facebook-1.svg",
                width: 8,
                height: 20
            })
        })
    }),
    t[6] = n) : n = t[6];
    let a;
    t[7] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx("li", {
        className: "menuLi",
        children: c.jsx("a", {
            href: "https://twitter.com/rcbtweets?lang=en",
            target: "_blank",
            children: c.jsx(fA, {
                src: "https://royalchallengers.com/themes/custom/rcbbase/images/header/top/twitter-1.svg",
                width: 8,
                height: 20
            })
        })
    }),
    t[7] = a) : a = t[7];
    let r;
    t[8] === Symbol.for("react.memo_cache_sentinel") ? (r = c.jsx("li", {
        className: "menuLi",
        children: c.jsx("a", {
            href: "https://www.instagram.com/royalchallengersbangalore/?hl=en",
            target: "_blank",
            children: c.jsx(fA, {
                src: "/imgs/instagram-6.svg",
                width: 8,
                height: 20
            })
        })
    }),
    t[8] = r) : r = t[8];
    let R;
    t[9] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx(T, {
        mt: "-15px",
        children: c.jsxs("ul", {
            className: "menuUl",
            children: [n, a, r, c.jsx("li", {
                className: "menuLi",
                children: c.jsx("a", {
                    href: "https://www.youtube.com/channel/UCCq1xDJMBRF61kiOgU90_kw",
                    target: "_blank",
                    children: c.jsx(fA, {
                        src: "/imgs/youtube-1.svg",
                        width: 8,
                        height: 20
                    })
                })
            })]
        })
    }),
    t[9] = R) : R = t[9];
    let p;
    t[10] === Symbol.for("react.memo_cache_sentinel") ? (p = {
        paddingRight: "12px",
        fontWeight: "600",
        lineHeight: "97%"
    },
    t[10] = p) : p = t[10];
    let l;
    t[11] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsxs("li", {
        className: "menuLi",
        style: p,
        children: ["Download ", c.jsx("br", {}), "Our App"]
    }),
    t[11] = l) : l = t[11];
    let E;
    t[12] === Symbol.for("react.memo_cache_sentinel") ? (E = {
        paddingRight: "12px"
    },
    t[12] = E) : E = t[12];
    let G;
    t[13] === Symbol.for("react.memo_cache_sentinel") ? (G = c.jsx("li", {
        className: "menuLi",
        style: E,
        children: c.jsx("a", {
            href: "https://play.google.com/store/apps/details?id=com.interactech.rcb&hl=en_IN&pli=1",
            target: "_blank",
            children: c.jsx("img", {
                src: "https://royalchallengers.com/themes/custom/rcbbase/images/header/playstore.png",
                width: "18px"
            })
        })
    }),
    t[13] = G) : G = t[13];
    let h;
    t[14] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(T, {
        children: c.jsxs(U, {
            direction: N,
            spacing: "10px",
            children: [i, D, c.jsx(T, {
                w: "190px",
                children: c.jsxs(Ee, {
                    spacing: 1,
                    children: [R, c.jsx(T, {
                        mt: "-20px",
                        children: c.jsxs("ul", {
                            className: "menuUl",
                            children: [l, G, c.jsx("li", {
                                className: "menuLi",
                                children: c.jsx("a", {
                                    href: "https://apps.apple.com/in/app/rcb-official-live-ipl-score/id516455943",
                                    target: "_blank",
                                    children: c.jsx("img", {
                                        src: "https://royalchallengers.com/themes/custom/rcbbase/images/header/applebold.png",
                                        width: "18px"
                                    })
                                })
                            })]
                        })
                    })]
                })
            })]
        })
    }),
    t[14] = h) : h = t[14];
    let m;
    t[15] === Symbol.for("react.memo_cache_sentinel") ? (m = ["none", "flex"],
    t[15] = m) : m = t[15];
    let x;
    t[16] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(T, {
        children: c.jsx("a", {
            href: "https://royalchallengers.com",
            target: "blank",
            children: "HOME"
        })
    }),
    t[16] = x) : x = t[16];
    let L;
    t[17] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx(T, {
        children: c.jsx("a", {
            href: "https://royalchallengers.com/rcb-cricket-news",
            target: "blank",
            children: "NEWS"
        })
    }),
    t[17] = L) : L = t[17];
    let d;
    t[18] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsx(T, {
        children: c.jsx("a", {
            href: "https://royalchallengers.com/videos/rcb-tv",
            target: "blank",
            children: "RCB TV"
        })
    }),
    t[18] = d) : d = t[18];
    let H;
    t[19] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsx(T, {
        children: c.jsx("a", {
            href: "https://royalchallengers.com/rcb-squad-men",
            target: "blank",
            children: "TEAM"
        })
    }),
    t[19] = H) : H = t[19];
    let f;
    t[20] === Symbol.for("react.memo_cache_sentinel") ? (f = c.jsx(T, {
        children: c.jsx("a", {
            href: "https://royalchallengers.com/fixtures",
            target: "blank",
            children: "FIXTURES"
        })
    }),
    t[20] = f) : f = t[20];
    let O;
    t[21] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsx(T, {
        children: c.jsx("a", {
            href: "https://royalchallengers.com/echo-of-fans",
            target: "blank",
            children: "ECHO OF FANS"
        })
    }),
    t[21] = O) : O = t[21];
    let g, K;
    t[22] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsx(T, {
        children: c.jsx("a", {
            href: "https://royalchallengers.com/rcb-bar-cafe",
            target: "blank",
            children: "RCB BAR & CAFE"
        })
    }),
    K = c.jsx(T, {
        color: "gold",
        children: "SHOP"
    }),
    t[22] = g,
    t[23] = K) : (g = t[22],
    K = t[23]);
    let j;
    t[24] === Symbol.for("react.memo_cache_sentinel") ? (j = c.jsx(lt, {
        as: _,
        variant: "link",
        rightIcon: c.jsx(ce, {
            fontSize: "1.3rem"
        }),
        className: "menuButton",
        fontSize: "1.05rem",
        fontWeight: "bold",
        children: "MORE"
    }),
    t[24] = j) : j = t[24];
    let y, u;
    t[25] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/digital",
            target: "blank",
            children: "DIGITAL DAY"
        })
    }),
    u = c.jsx(oA, {}),
    t[25] = y,
    t[26] = u) : (y = t[25],
    u = t[26]);
    let B, S;
    t[27] === Symbol.for("react.memo_cache_sentinel") ? (B = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/sportsreport",
            target: "blank",
            children: "SPORTS REPORT"
        })
    }),
    S = c.jsx(oA, {}),
    t[27] = B,
    t[28] = S) : (B = t[27],
    S = t[28]);
    let b, Y;
    t[29] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/green-initiatives",
            target: "blank",
            children: "GO GREEN"
        })
    }),
    Y = c.jsx(oA, {}),
    t[29] = b,
    t[30] = Y) : (b = t[29],
    Y = t[30]);
    let J, q;
    t[31] === Symbol.for("react.memo_cache_sentinel") ? (J = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/rcb-cricket-photos",
            target: "blank",
            children: "PHOTOS"
        })
    }),
    q = c.jsx(oA, {}),
    t[31] = J,
    t[32] = q) : (J = t[31],
    q = t[32]);
    let v, W;
    t[33] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/about-us",
            target: "blank",
            children: "ABOUT US"
        })
    }),
    W = c.jsx(oA, {}),
    t[33] = v,
    t[34] = W) : (v = t[33],
    W = t[34]);
    let V, $;
    t[35] === Symbol.for("react.memo_cache_sentinel") ? (V = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/privacy-policy",
            target: "blank",
            children: "PRIVACY POLICY"
        })
    }),
    $ = c.jsx(oA, {}),
    t[35] = V,
    t[36] = $) : (V = t[35],
    $ = t[36]);
    let eA, w;
    t[37] === Symbol.for("react.memo_cache_sentinel") ? (eA = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/terms-conditions",
            target: "blank",
            children: "TERMS & CONDITIONS"
        })
    }),
    w = c.jsx(oA, {}),
    t[37] = eA,
    t[38] = w) : (eA = t[37],
    w = t[38]);
    let z, Z;
    t[39] === Symbol.for("react.memo_cache_sentinel") ? (z = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/shop-terms-conditions",
            target: "blank",
            children: "SHOP T&C"
        })
    }),
    Z = c.jsx(oA, {}),
    t[39] = z,
    t[40] = Z) : (z = t[39],
    Z = t[40]);
    let AA, cA;
    t[41] === Symbol.for("react.memo_cache_sentinel") ? (AA = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/csr-policy",
            target: "blank",
            children: "CSR POLICY"
        })
    }),
    cA = c.jsx(oA, {}),
    t[41] = AA,
    t[42] = cA) : (AA = t[41],
    cA = t[42]);
    let Q, F;
    t[43] === Symbol.for("react.memo_cache_sentinel") ? (Q = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/annual-return",
            target: "blank",
            children: "ANNUAL RETURN FY2021-2022"
        })
    }),
    F = c.jsx(oA, {}),
    t[43] = Q,
    t[44] = F) : (Q = t[43],
    F = t[44]);
    let C, k;
    t[45] === Symbol.for("react.memo_cache_sentinel") ? (C = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/annual-return-fy2022-2023",
            target: "blank",
            children: "ANNUAL RETURN FY2022-2023"
        })
    }),
    k = c.jsx(oA, {}),
    t[45] = C,
    t[46] = k) : (C = t[45],
    k = t[46]);
    let NA, RA;
    t[47] === Symbol.for("react.memo_cache_sentinel") ? (NA = c.jsx(YA, {
        className: "menuItem",
        children: c.jsx("a", {
            href: "https://royalchallengers.com/annual-return-fy2023-2024",
            target: "blank",
            children: "ANNUAL RETURN FY2023-2024"
        })
    }),
    RA = c.jsx(oA, {}),
    t[47] = NA,
    t[48] = RA) : (NA = t[47],
    RA = t[48]);
    let EA;
    t[49] === Symbol.for("react.memo_cache_sentinel") ? (EA = c.jsxs(U, {
        direction: e,
        w: "100%",
        maxW: "1500px",
        mx: "auto",
        spacing: 3,
        children: [s, o, c.jsxs(T, {
            textTransform: "uppercase",
            w: "100%",
            maxW: "1300px",
            children: [h, c.jsx(T, {
                mt: "33px",
                maxW: "1260px",
                children: c.jsxs(TA, {
                    spacing: 3,
                    display: m,
                    pt: "0px",
                    justifyContent: "space-between",
                    fontFamily: "rcbFontB",
                    fontSize: "1.05rem",
                    lineHeight: "1.1rem",
                    children: [x, L, d, H, f, O, g, K, c.jsx(T, {
                        children: c.jsxs(dt, {
                            children: [j, c.jsxs(Mt, {
                                zIndex: "299",
                                bg: "red",
                                children: [y, u, B, S, b, Y, J, q, v, W, V, $, eA, w, z, Z, AA, cA, Q, F, C, k, NA, RA, c.jsx(YA, {
                                    className: "menuItem",
                                    children: c.jsx("a", {
                                        href: "https://royalchallengers.com/contact-us",
                                        target: "blank",
                                        children: "CONTACT US"
                                    })
                                })]
                            })]
                        })
                    })]
                })
            })]
        })]
    }),
    t[49] = EA) : EA = t[49];
    let lA;
    return t[50] !== I ? (lA = c.jsx(c.Fragment, {
        children: c.jsx(T, {
            className: "mainhdr",
            px: "50px",
            w: "100%",
            display: I,
            children: EA
        })
    }),
    t[50] = I,
    t[51] = lA) : lA = t[51],
    lA
}
  , yI = "https://rcbscaleapi.ticketgenie.in/"
  , OA = jI.create({
    baseURL: yI
});
OA.interceptors.request.use(t => {
    const A = vA.get("rtokn");
    return A && (t.headers.Authorization = `Bearer ${A}`),
    t
}
, t => Promise.reject(t));
OA.interceptors.response.use(t => t, t => t.response && t.response.status === 401 ? (window.location.href = "/login",
Promise.reject("Unauthorized")) : Promise.reject(t));
const cI = jI.create({
    baseURL: yI
});
cI.interceptors.request.use(t => {
    const A = vA.get("mobtokn");
    return A && (t.headers.Authorization = `Bearer ${A}`),
    t
}
, t => Promise.reject(t));
async function wA(t) {
    t.status == 401 && (console.log("Session Expired"),
    window.location.href = "/auth")
}
const jt = {
    status: "Failed",
    message: "Error",
    result: {}
};
async function Ct(t) {
    try {
        const A = await OA.post("customer/login", t);
        return await wA(A),
        await A.data
    } catch {
        return jt
    }
}
async function yt(t) {
    try {
        const A = await OA.post("customer/resendotp", t);
        return await wA(A),
        await A.data
    } catch {
        return jt
    }
}
async function bt(t) {
    try {
        const A = await OA.post("customer/verify", t);
        return await wA(A),
        await A.data
    } catch {
        return jt
    }
}
async function bI() {
    try {
        return await (await OA.post("customer/logout")).data
    } catch {
        return jt
    }
}
const Tt = {
    status: "Failed",
    message: "Error",
    result: {}
};
async function We() {
    try {
        return await (await OA.get("merchandise")).data
    } catch {
        return Tt.result = [],
        Tt
    }
}
async function ze(t) {
    try {
        return await (await OA.get("merchandise/" + t)).data
    } catch {
        return Tt.result = null,
        Tt
    }
}
async function Fe(t) {
    try {
        const A = await OA.post("checkout/merchandiseaddtocart", t);
        return await wA(A),
        await A.data
    } catch {
        return Tt
    }
}
async function qe(t) {
    try {
        const A = await OA.post("checkout/merchandisedelfromcart", t);
        return await wA(A),
        await A.data
    } catch {
        return Tt
    }
}
const BI = {
    status: "Failed",
    message: "Error",
    result: {}
};
async function $e(t) {
    try {
        const A = await OA.post("checkout/ticketdelfromcart", t);
        return await wA(A),
        await A.data
    } catch {
        return BI
    }
}
async function Ze(t) {
    try {
        const A = await OA.post("checkout/addonsdelfromcart", t);
        return await wA(A),
        await A.data
    } catch {
        return BI
    }
}
const Qe = t => ({
    cartCount: 0,
    ticCount: 0,
    totalAmount: 0,
    tickets: [],
    merchandise: [],
    products: [],
    addons: [],
    addTicket: A => {
        t(I => ({
            tickets: [...I.tickets.filter(e => !(e.eventId == A.eventId && e.standId == A.standId)), A]
        })),
        t(I => ({
            cartCount: vc(I),
            ticCount: Jt(I),
            totalAmount: kc(I)
        }))
    }
    ,
    delTicket: (A, I) => {
        t(e => ({
            tickets: e.tickets.filter(s => !(s.eventId == A && s.standId == I)),
            addons: []
        })),
        t(e => ({
            cartCount: vc(e),
            ticCount: Jt(e),
            totalAmount: kc(e)
        }))
    }
    ,
    addMerchandise: A => {
        t(I => ({
            merchandise: [...I.merchandise.filter(e => !(e.merId === A.merId && e.catId === A.catId && e.size === A.size)), A]
        })),
        t(I => ({
            cartCount: vc(I),
            totalAmount: kc(I)
        }))
    }
    ,
    delMerchandise: (A, I, e) => {
        t(s => ({
            merchandise: s.merchandise.filter(o => !(o.merId === A && o.catId === I && o.size === e))
        })),
        t(s => ({
            cartCount: vc(s),
            totalAmount: kc(s)
        }))
    }
    ,
    addProduct: A => {
        t(I => ({
            products: [...I.products.filter(e => e.pId !== A.pId), A]
        })),
        t(I => ({
            cartCount: vc(I),
            totalAmount: kc(I)
        }))
    }
    ,
    delProduct: A => {
        t(I => ({
            products: I.products.filter(e => e.pId !== A)
        })),
        t(I => ({
            cartCount: vc(I),
            totalAmount: kc(I)
        }))
    }
    ,
    addAddons: A => {
        t(I => ({
            addons: [...I.addons, ...A]
        })),
        t(I => ({
            cartCount: vc(I),
            totalAmount: kc(I)
        }))
    }
    ,
    delAddons: (A, I, e) => {
        t(s => ({
            addons: s.addons.filter(o => !(o.addonId === e && o.standId === I && o.eventId === A))
        })),
        t(s => ({
            cartCount: vc(s),
            totalAmount: kc(s)
        }))
    }
    ,
    clearCart: () => t({
        tickets: [],
        merchandise: [],
        products: [],
        addons: [],
        cartCount: 0,
        cartCount: 0,
        ticCount: 0
    }),
    reloadCart: A => {
        var I, e, s;
        t({
            tickets: (I = A == null ? void 0 : A.tickets) == null ? void 0 : I.map(o => ({
                eventId: o.event_Code,
                eventName: o.event_Name,
                standId: o.stand_Code,
                standName: o.stand_Name,
                price: o.price,
                qty: o.qty,
                amount: o.subtotal,
                seatNo: o.seat_No,
                seatId: o.seat_Id
            })),
            merchandise: (e = A == null ? void 0 : A.merchandises) == null ? void 0 : e.map(o => ({
                merId: o.mer_Id,
                catId: o.cat_Id,
                merName: o.mer_Name,
                size: o.size,
                merCat: o.cat_Name,
                price: o.price,
                qty: o.qty,
                amount: o.subtotal,
                perText: o.perTxt,
                perNo: o.perNo,
                perAmt: o.perAmt
            })),
            addons: (s = A == null ? void 0 : A.addons) == null ? void 0 : s.map(o => ({
                eventId: o.event_Code,
                standId: o.stand_Code,
                addonId: o.item_Id,
                addonName: o.item_Name,
                price: o.price,
                qty: o.qty,
                amount: o.subtotal
            })),
            products: []
        }),
        t(o => ({
            cartCount: vc(o),
            ticCount: Jt(o),
            totalAmount: kc(o)
        }))
    }
})
  , vc = t => {
    const A = t.tickets.reduce( (s, o) => parseInt(s) + parseInt(o.qty), 0)
      , I = t.merchandise.reduce( (s, o) => parseInt(s) + parseInt(o.qty), 0)
      , e = t.products.reduce( (s, o) => parseInt(s) + parseInt(o.qty), 0);
    return parseInt(A) + parseInt(I) + parseInt(e)
}
  , Jt = t => {
    const A = t.tickets.reduce( (I, e) => parseInt(I) + parseInt(e.qty), 0);
    return parseInt(A)
}
  , kc = t => {
    const A = t.tickets.reduce( (o, N) => parseInt(o) + parseInt(N.amount), 0)
      , I = t.merchandise.reduce( (o, N) => parseInt(o) + parseInt(N.amount), 0)
      , e = t.products.reduce( (o, N) => parseInt(o) + parseInt(N.amount), 0)
      , s = t.addons.reduce( (o, N) => parseInt(o) + parseInt(N.amount), 0);
    return parseInt(A) + parseInt(I) + parseInt(e) + parseInt(s)
}
  , Rc = Pt(AI(Qe, {
    name: "mrt-store"
}))
  , Xe = t => ({
    session: {},
    openLogin: !1,
    lastOrderId: "",
    addDetail: A => {
        t( () => ({
            session: A
        }))
    }
    ,
    update: A => {
        t( () => ({
            session: A
        }))
    }
    ,
    delDetail: () => {
        t( () => ({
            session: {},
            lastOrderId: ""
        }))
    }
    ,
    showLogin: A => {
        t( () => ({
            openLogin: A
        }))
    }
    ,
    setOrderId: A => {
        t( () => ({
            lastOrderId: A
        }))
    }
})
  , JA = Pt(AI(Xe, {
    name: "rudtl"
}))
  , YI = () => {
    const t = X.c(49)
      , {tickets: A, delTicket: I, merchandise: e, delMerchandise: s, addons: o, delAddons: N} = Rc(As)
      , {session: i} = JA()
      , D = WA();
    let n;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (n = {
        mutationFn: $e
    },
    t[0] = n) : n = t[0];
    const a = hA(n);
    let r;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (r = {
        mutationFn: Ze
    },
    t[1] = r) : r = t[1];
    const R = hA(r);
    let p;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (p = {
        mutationFn: qe
    },
    t[2] = p) : p = t[2];
    const l = hA(p);
    let E;
    t[3] !== a ? (E = (S, b) => {
        const Y = {
            eventId: S,
            standId: b
        };
        a.mutate(Y)
    }
    ,
    t[3] = a,
    t[4] = E) : E = t[4];
    const G = E;
    let h;
    t[5] !== R ? (h = (S, b, Y) => {
        const J = {
            eventId: S,
            standId: b,
            itemId: Y
        };
        R.mutate(J)
    }
    ,
    t[5] = R,
    t[6] = h) : h = t[6];
    const m = h;
    let x;
    t[7] !== l ? (x = (S, b, Y) => {
        const J = {
            merId: S,
            catId: b,
            size: Y
        };
        l.mutate(J)
    }
    ,
    t[7] = l,
    t[8] = x) : x = t[8];
    const L = x;
    let d;
    t[9] !== a.data || t[10] !== a.isSuccess || t[11] !== I || t[12] !== D ? (d = () => {
        if (a.isSuccess)
            if (a.data.status === "Success") {
                const {eventId: S, standId: b} = a.data.result;
                I(S, b),
                D({
                    title: "Item deleted from the shopping bag.",
                    status: "success",
                    duration: "1500"
                })
            } else if (a.data.status === "Failed" && a.data.message === "NOT EXISTS") {
                const {eventId: S, standId: b} = a.data.result;
                I(S, b),
                D({
                    title: "Item deleted from the shopping bag.",
                    status: "success",
                    duration: "1500"
                })
            } else
                D({
                    title: "Oops, failed to delete item.",
                    status: "error",
                    duration: "1500"
                })
    }
    ,
    t[9] = a.data,
    t[10] = a.isSuccess,
    t[11] = I,
    t[12] = D,
    t[13] = d) : d = t[13];
    let H;
    t[14] !== a.isSuccess ? (H = [a.isSuccess],
    t[14] = a.isSuccess,
    t[15] = H) : H = t[15],
    P.useEffect(d, H);
    let f;
    t[16] !== N || t[17] !== R.data || t[18] !== R.isSuccess || t[19] !== D ? (f = () => {
        if (R.isSuccess)
            if (R.data.status === "Success") {
                const {eventId: S, standId: b, itemId: Y} = R.data.result;
                N(S, b, Y),
                D({
                    title: "Item deleted from the shopping bag.",
                    status: "success",
                    duration: "1500"
                })
            } else if (R.data.status === "Failed" && R.data.message === "NOT EXISTS") {
                const {eventId: S, standId: b, itemId: Y} = R.data.result;
                N(S, b, Y),
                D({
                    title: "Item deleted from the shopping bag.",
                    status: "success",
                    duration: "1500"
                })
            } else
                D({
                    title: "Oops, failed to delete item.",
                    status: "error",
                    duration: "1500"
                })
    }
    ,
    t[16] = N,
    t[17] = R.data,
    t[18] = R.isSuccess,
    t[19] = D,
    t[20] = f) : f = t[20];
    let O;
    t[21] !== R.isSuccess ? (O = [R.isSuccess],
    t[21] = R.isSuccess,
    t[22] = O) : O = t[22],
    P.useEffect(f, O);
    let g;
    t[23] !== l.data || t[24] !== l.isSuccess || t[25] !== s || t[26] !== e || t[27] !== D ? (g = () => {
        if (l.isSuccess)
            if (l.data.status === "Success") {
                const {merId: S, catId: b, size: Y} = l.data.result;
                e.filter(J => J.merId === S && J.catId === b && J.size === Y),
                s(S, b, Y),
                D({
                    title: "Item deleted from the shopping bag.",
                    status: "success",
                    duration: "1500"
                })
            } else if (l.data.status === "Failed" && l.data.message === "NOT EXISTS") {
                const {merId: S, catId: b, size: Y} = l.data.result;
                s(S, b, Y),
                D({
                    title: "Item deleted from the shopping bag.",
                    status: "success",
                    duration: "1500"
                })
            } else
                D({
                    title: "Oops, failed to delete item.",
                    status: "error",
                    duration: "1500"
                })
    }
    ,
    t[23] = l.data,
    t[24] = l.isSuccess,
    t[25] = s,
    t[26] = e,
    t[27] = D,
    t[28] = g) : g = t[28];
    let K;
    t[29] !== l.isSuccess ? (K = [l.isSuccess],
    t[29] = l.isSuccess,
    t[30] = K) : K = t[30],
    P.useEffect(g, K);
    let j;
    t[31] !== o.length || t[32] !== G || t[33] !== a.isLoading || t[34] !== (i == null ? void 0 : i.pool) || t[35] !== A ? (j = A.length > 0 && A.map( (S, b) => c.jsxs(T, {
        children: [c.jsxs(U, {
            direction: "row",
            w: "100%",
            children: [c.jsx(T, {
                w: "50px",
                justifyContent: "center",
                display: "flex",
                children: c.jsx(pt, {
                    color: "#aaa",
                    fontSize: "2rem"
                })
            }), c.jsx(U, {
                direction: ["column", "row"],
                w: "100%",
                children: c.jsxs(U, {
                    spacing: "0px",
                    w: "100%",
                    children: [c.jsx(T, {
                        fontWeight: "bold",
                        children: S.eventName
                    }), c.jsx(T, {
                        mt: "2",
                        fontSize: "1rem",
                        children: S.standName
                    }), c.jsx(T, {
                        children: S.seatNo
                    }), c.jsxs(T, {
                        color: "gray.500",
                        fontSize: ".9rem",
                        children: ["Delivery Mode", c.jsx(Nt, {
                            ml: "2",
                            colorScheme: "green",
                            children: "M-Ticket"
                        })]
                    }), c.jsxs(TA, {
                        w: "100%",
                        children: [c.jsx(nA, {}), c.jsx(T, {
                            children: (i == null ? void 0 : i.pool) == "D" ? c.jsxs(c.Fragment, {
                                children: ["Qty : ", S.qty, " X", " ", c.jsxs(M, {
                                    as: "span",
                                    color: "gray.500",
                                    textDecoration: "line-through",
                                    children: ["₹", S.price]
                                }), " ", "₹", S.price * .9, " = ₹", S.amount]
                            }) : c.jsxs(c.Fragment, {
                                children: ["Qty : ", S.qty, " X ₹", S.price, " = ₹", S.amount]
                            })
                        }), c.jsx(VA, {
                            icon: c.jsx(wt, {
                                fontSize: "1.25rem"
                            }),
                            colorScheme: "red",
                            variant: "ghost",
                            h: "25px",
                            isLoading: a.isLoading,
                            onClick: () => G(S.eventId, S.standId)
                        })]
                    })]
                })
            })]
        }), o.length <= 0 && c.jsx(oA, {
            my: "2"
        })]
    }, b)),
    t[31] = o.length,
    t[32] = G,
    t[33] = a.isLoading,
    t[34] = i == null ? void 0 : i.pool,
    t[35] = A,
    t[36] = j) : j = t[36];
    let y;
    t[37] !== o || t[38] !== m || t[39] !== R.isLoading ? (y = o.length > 0 && c.jsxs(T, {
        mt: "2",
        children: [c.jsxs(U, {
            direction: "row",
            w: "100%",
            children: [c.jsx(T, {
                w: "50px",
                justifyContent: "center",
                display: "flex",
                children: c.jsx(xt, {
                    color: "#aaa",
                    fontSize: "2rem"
                })
            }), c.jsxs(T, {
                w: "100%",
                children: [c.jsx(M, {
                    color: "gray.500",
                    fontWeight: "bold",
                    pb: "10px",
                    children: "Addons"
                }), o.map( (S, b) => c.jsxs(TA, {
                    fontSize: "0.8rem",
                    spacing: 1,
                    children: [c.jsx(M, {
                        flex: 1,
                        children: S.addonName
                    }), c.jsxs(M, {
                        w: "110px",
                        textAlign: "right",
                        children: [S.qty, " X ₹", S.price, " = ₹", S.amount]
                    }), c.jsx(VA, {
                        icon: c.jsx(wt, {
                            fontSize: "1rem"
                        }),
                        colorScheme: "red",
                        variant: "ghost",
                        h: "25px",
                        px: "0",
                        w: "10px",
                        isLoading: R.isLoading,
                        onClick: () => m(S.eventId, S.standId, S.addonId)
                    })]
                }, b)), c.jsxs(T, {
                    color: "gray.500",
                    fontSize: ".9rem",
                    children: ["Delivery Mode", c.jsx(Nt, {
                        ml: "2",
                        colorScheme: "orange",
                        children: "Pickup"
                    })]
                })]
            })]
        }), c.jsx(oA, {
            my: "2"
        })]
    }),
    t[37] = o,
    t[38] = m,
    t[39] = R.isLoading,
    t[40] = y) : y = t[40];
    let u;
    t[41] !== L || t[42] !== l.isLoading || t[43] !== e ? (u = e.length > 0 && e.map( (S, b) => c.jsxs(T, {
        children: [c.jsxs(U, {
            direction: "row",
            w: "100%",
            children: [c.jsx(T, {
                w: "50px",
                justifyContent: "center",
                display: "flex",
                children: c.jsx(nt, {
                    color: "#aaa",
                    fontSize: "2rem"
                })
            }), c.jsx(U, {
                direction: ["column", "row"],
                w: "100%",
                spacing: "1px",
                children: c.jsxs(U, {
                    spacing: "1px",
                    w: "100%",
                    children: [c.jsx(T, {
                        fontWeight: "bold",
                        children: S.merName
                    }), c.jsxs(T, {
                        lineHeight: "0.9rem",
                        mt: "2",
                        children: [S.merCat, " - ", S.size]
                    }), S.perText && c.jsxs(T, {
                        children: ["Personalize", " ", c.jsxs("span", {
                            style: {
                                textTransform: "uppercase",
                                fontWeight: "bold"
                            },
                            children: ["[", S.perNo, " - ", S.perText, " ]"]
                        })]
                    }), c.jsxs(T, {
                        color: "gray.500",
                        fontSize: ".9rem",
                        children: ["Delivery Mode", c.jsx(Nt, {
                            ml: "2",
                            colorScheme: "red",
                            children: "Courier"
                        })]
                    }), c.jsxs(TA, {
                        children: [c.jsx(nA, {}), c.jsxs(T, {
                            children: [S.qty, " X ₹", S.price, " ", S.perText && c.jsxs(c.Fragment, {
                                children: [" + ", S.perAmt]
                            }), " = ₹", S.amount]
                        }), c.jsx(VA, {
                            icon: c.jsx(wt, {
                                fontSize: "1.25rem"
                            }),
                            colorScheme: "red",
                            variant: "ghost",
                            h: "25px",
                            isLoading: l.isLoading,
                            onClick: () => L(S.merId, S.catId, S.size)
                        })]
                    })]
                })
            })]
        }), c.jsx(oA, {
            my: "2"
        })]
    }, b)),
    t[41] = L,
    t[42] = l.isLoading,
    t[43] = e,
    t[44] = u) : u = t[44];
    let B;
    return t[45] !== j || t[46] !== y || t[47] !== u ? (B = c.jsxs(U, {
        spacing: "5px",
        p: "10px",
        w: "100%",
        color: "gray.500",
        children: [j, y, u]
    }),
    t[45] = j,
    t[46] = y,
    t[47] = u,
    t[48] = B) : B = t[48],
    B
}
;
function As(t) {
    return t
}
const cs = t => {
    const A = X.c(15)
      , {opener: I} = t
      , e = kA()
      , {totalAmount: s, cartCount: o} = Rc(ts);
    let N;
    A[0] !== e || A[1] !== I ? (N = () => {
        I.onClose(),
        e("/checkout")
    }
    ,
    A[0] = e,
    A[1] = I,
    A[2] = N) : N = A[2];
    const i = N;
    let D;
    A[3] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(ac, {}),
    A[3] = D) : D = A[3];
    let n, a, r;
    A[4] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx(Xc, {
        bg: "red.500",
        color: "white",
        borderRadius: "full"
    }),
    a = c.jsx(ic, {
        bgGradient: "linear(to-r,#e2d3b9,#e0e5c2,#e2d3b9)",
        py: "10px",
        children: "My Shopping Bag"
    }),
    r = c.jsx(oA, {}),
    A[4] = n,
    A[5] = a,
    A[6] = r) : (n = A[4],
    a = A[5],
    r = A[6]);
    let R;
    A[7] !== o || A[8] !== i || A[9] !== s ? (R = c.jsxs(de, {
        children: [n, a, r, o <= 0 ? c.jsx(DA, {
            w: "100%",
            h: "90vh",
            children: c.jsxs(U, {
                spacing: 6,
                children: [c.jsx(DA, {
                    children: c.jsx(Wc, {
                        fontSize: "6rem",
                        color: "silver"
                    })
                }), c.jsx(M, {
                    children: "Your shopping bag is empty."
                })]
            })
        }) : c.jsxs(c.Fragment, {
            children: [c.jsx(zA, {
                p: "1px",
                children: c.jsx(YI, {})
            }), c.jsxs(fc, {
                children: [c.jsxs(T, {
                    minW: "150px",
                    children: [c.jsx(M, {
                        color: "gray.500",
                        children: "Amount"
                    }), c.jsxs(M, {
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        children: ["₹ ", s]
                    })]
                }), c.jsx(_, {
                    w: "full",
                    colorScheme: "red",
                    size: "lg",
                    rightIcon: c.jsx(iI, {}),
                    onClick: () => i(),
                    children: "CHECKOUT"
                })]
            })]
        })]
    }),
    A[7] = o,
    A[8] = i,
    A[9] = s,
    A[10] = R) : R = A[10];
    let p;
    return A[11] !== I.isOpen || A[12] !== I.onClose || A[13] !== R ? (p = c.jsxs(He, {
        isOpen: I.isOpen,
        placement: "right",
        onClose: I.onClose,
        size: "md",
        children: [D, R]
    }),
    A[11] = I.isOpen,
    A[12] = I.onClose,
    A[13] = R,
    A[14] = p) : p = A[14],
    p
}
;
function ts(t) {
    return t
}
const Bt = {
    status: "Failed",
    message: "Error",
    result: {}
};
async function Is() {
    try {
        const t = await OA.post("checkout/preview");
        return await wA(t),
        await t.data
    } catch {
        return Bt
    }
}
async function es(t) {
    try {
        const A = await OA.post("checkout/proceed", t);
        return await wA(A),
        await A.data
    } catch {
        return Bt
    }
}
async function ss(t) {
    try {
        const A = await OA.post("checkout/jpaycallback", t);
        return await wA(A),
        await A.data
    } catch {
        return Bt
    }
}
async function os() {
    try {
        const t = await OA.get("checkout/ticketcarttimeout");
        return await wA(t),
        await t.data
    } catch {
        return Bt
    }
}
const Ns = t => ({
    cartTimeout: !0,
    stopCartTimeout: () => t( () => ({
        cartTimeout: !1
    }))
})
  , tI = Pt(Ns)
  , Ds = () => {
    var j, y, u, B;
    const t = X.c(31)
      , [A,I] = P.useState();
    let e;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
        mutationFn: bI
    },
    t[0] = e) : e = t[0];
    const s = hA(e)
      , {clearCart: o} = Rc(rs)
      , {cartTimeout: N} = tI(Rs)
      , {isOpen: i, onOpen: D, onClose: n} = pc()
      , a = it.useRef()
      , r = Math.floor(Math.random() * 1e3);
    let R;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (R = {
        queryKey: [r],
        queryFn: is
    },
    t[1] = R) : R = t[1];
    const p = Gc(R);
    let l;
    t[2] !== p ? (l = () => {
        p.refetch()
    }
    ,
    t[2] = p,
    t[3] = l) : l = t[3];
    let E;
    t[4] !== N ? (E = [N],
    t[4] = N,
    t[5] = E) : E = t[5],
    P.useEffect(l, E);
    let G;
    t[6] !== ((j = p.data) == null ? void 0 : j.result) || t[7] !== ((y = p.data) == null ? void 0 : y.status) || t[8] !== p.isSuccess ? (G = () => {
        var S, b;
        if (p.isSuccess && ((S = p.data) == null ? void 0 : S.status) == "Success") {
            const Y = (b = p.data) == null ? void 0 : b.result;
            I(Y)
        }
    }
    ,
    t[6] = (u = p.data) == null ? void 0 : u.result,
    t[7] = (B = p.data) == null ? void 0 : B.status,
    t[8] = p.isSuccess,
    t[9] = G) : G = t[9];
    let h;
    t[10] !== p.isSuccess ? (h = [p.isSuccess],
    t[10] = p.isSuccess,
    t[11] = h) : h = t[11],
    P.useEffect(G, h);
    let m;
    t[12] !== o || t[13] !== s.isSuccess ? (m = () => {
        s.isSuccess && o()
    }
    ,
    t[12] = o,
    t[13] = s.isSuccess,
    t[14] = m) : m = t[14];
    let x;
    t[15] !== s.isSuccess ? (x = [s.isSuccess],
    t[15] = s.isSuccess,
    t[16] = x) : x = t[16],
    P.useEffect(m, x);
    let L;
    t[17] !== s ? (L = () => {
        s.mutate()
    }
    ,
    t[17] = s,
    t[18] = L) : L = t[18];
    const d = L;
    let H;
    t[19] !== d || t[20] !== D || t[21] !== A ? (H = () => {
        let S;
        return A >= 0 && (S = setInterval( () => {
            A <= 0 && (clearInterval(S),
            d()),
            I(ps)
        }
        , 1e3)),
        A == 180 && D(),
        () => {
            clearInterval(S)
        }
    }
    ,
    t[19] = d,
    t[20] = D,
    t[21] = A,
    t[22] = H) : H = t[22];
    let f;
    t[23] !== A ? (f = [A],
    t[23] = A,
    t[24] = f) : f = t[24],
    P.useEffect(H, f);
    const O = ns;
    let g;
    t[25] !== i || t[26] !== n || t[27] !== A ? (g = A > 0 && c.jsxs(c.Fragment, {
        children: [c.jsx(T, {
            p: "1",
            ml: "1",
            w: "60px",
            color: "red.600",
            bg: "red.100",
            fontWeight: "bold",
            border: "1px solid pink",
            borderRadius: "5px",
            textAlign: "center",
            children: O(A)
        }), c.jsx(kt, {
            isOpen: i,
            leastDestructiveRef: a,
            onClose: n,
            children: c.jsx(ac, {
                children: c.jsxs(Wt, {
                    bg: "yellow.100",
                    children: [c.jsx(ic, {
                        fontSize: "1.6rem",
                        color: "red",
                        fontFamily: "rcbFontB",
                        fontWeight: "bold",
                        children: "Alert!"
                    }), c.jsxs(zA, {
                        fontSize: "1.1rem",
                        children: ["You only have", " ", c.jsx("span", {
                            style: {
                                color: "red",
                                fontFamily: "rcbFontB"
                            },
                            children: "3"
                        }), " ", "minutes to complete your booking."]
                    }), c.jsx(oA, {
                        my: "3"
                    }), c.jsx(fc, {
                        children: c.jsx(_, {
                            ref: a,
                            onClick: n,
                            leftIcon: c.jsx(pI, {}),
                            colorScheme: "red",
                            children: "Continue"
                        })
                    })]
                })
            })
        })]
    }),
    t[25] = i,
    t[26] = n,
    t[27] = A,
    t[28] = g) : g = t[28];
    let K;
    return t[29] !== g ? (K = c.jsx(c.Fragment, {
        children: g
    }),
    t[29] = g,
    t[30] = K) : K = t[30],
    K
}
;
function rs(t) {
    return t
}
function Rs(t) {
    return t
}
function is() {
    return os()
}
function ps(t) {
    return t - 1
}
function ns(t) {
    const A = Math.floor(t / 60)
      , I = t % 60;
    return `${String(A).padStart(2, "0")}:${String(I).padStart(2, "0")}`
}
function ls() {
    const t = X.c(2)
      , [A,I] = P.useState(!0);
    let e, s;
    return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = () => {
        const o = () => {
            const i = vA.get("rtokn");
            I(!!i)
        }
        ;
        o();
        const N = setInterval( () => {
            o()
        }
        , 1500);
        return () => clearInterval(N)
    }
    ,
    s = [],
    t[0] = e,
    t[1] = s) : (e = t[0],
    s = t[1]),
    P.useEffect(e, s),
    A
}
const as = () => {
    const t = X.c(24)
      , A = kA()
      , I = rI().pathname
      , e = pc()
      , s = Rc(Ts)
      , o = Rc(Ls)
      , N = Rc(Es)
      , i = tI(Hs)
      , [D,n] = P.useState(0)
      , {session: a, delDetail: r} = JA();
    let R;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (R = {
        mutationFn: bI
    },
    t[0] = R) : R = t[0];
    const p = hA(R)
      , l = ls();
    let E, G;
    t[1] !== s ? (E = () => {
        n(s)
    }
    ,
    G = [s],
    t[1] = s,
    t[2] = E,
    t[3] = G) : (E = t[2],
    G = t[3]),
    P.useLayoutEffect(E, G);
    let h;
    t[4] !== N || t[5] !== r || t[6] !== p.isSuccess || t[7] !== A ? (h = () => {
        p.isSuccess && (N(),
        r(),
        A("/"),
        vA.remove("rtokn"))
    }
    ,
    t[4] = N,
    t[5] = r,
    t[6] = p.isSuccess,
    t[7] = A,
    t[8] = h) : h = t[8];
    let m;
    t[9] !== p.isSuccess ? (m = [p.isSuccess],
    t[9] = p.isSuccess,
    t[10] = m) : m = t[10],
    P.useEffect(h, m);
    let x;
    t[11] !== p ? (x = () => {
        p.mutate()
    }
    ,
    t[11] = p,
    t[12] = x) : x = t[12];
    const L = x;
    let d;
    return t[13] !== e || t[14] !== i || t[15] !== D || t[16] !== l || t[17] !== L || t[18] !== p.isPending || t[19] !== A || t[20] !== I || t[21] !== a || t[22] !== o ? (d = c.jsx(c.Fragment, {
        children: p.isPending ? c.jsx(T, {
            bg: "white",
            textAlign: "center",
            p: "2",
            fontSize: "1.3rem",
            color: "red.500",
            children: "Logging out..."
        }) : c.jsxs(c.Fragment, {
            children: [c.jsxs(T, {
                bg: "white",
                borderBottom: "0px solid #ccc",
                position: "sticky",
                top: "0px",
                zIndex: "99",
                children: [c.jsxs(TA, {
                    spacing: ["10px", "25px"],
                    py: ["5px", "10px"],
                    px: ["5px", "5px"],
                    w: "100%",
                    maxW: "1500px",
                    mx: "auto",
                    children: [c.jsxs(TA, {
                        display: ["none", "flex"],
                        children: [!1, c.jsx(_, {
                            colorScheme: "red",
                            variant: I.toLowerCase().includes("merchandise") ? "solid" : "ghost",
                            onClick: () => A("/merchandise"),
                            leftIcon: c.jsx(nt, {
                                fontSize: "1.5rem"
                            }),
                            children: "MERCHANDISE"
                        })]
                    }), c.jsx(DA, {
                        display: ["flex", "none"],
                        w: "70px",
                        children: c.jsx(fA, {
                            src: "/imgs/rcb-logo-new.png",
                            width: "40px",
                            height: "auto",
                            alt: "Logo"
                        })
                    }), c.jsx(M, {
                        display: ["block", "none"],
                        color: "red.600",
                        fontSize: "1.5rem",
                        fontWeight: "extrabold",
                        children: "SHOP"
                    }), c.jsx(nA, {}), (a == null ? void 0 : a.pool) == "P" ? c.jsx(fA, {
                        alt: "Partner",
                        src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/navi/navi-upi-logo.svg",
                        height: ["23px", "40px"]
                    }) : (a == null ? void 0 : a.pool) == "D" ? c.jsx(fA, {
                        alt: "Diageo",
                        src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/diageoLogo.svg",
                        height: ["15px", "20px"]
                    }) : null, c.jsxs(dt, {
                        children: [l ? c.jsx(lt, {
                            as: VA,
                            "aria-label": "Options",
                            icon: c.jsx(Me, {
                                bg: "white",
                                w: "33px",
                                h: "33px",
                                color: "red.500",
                                size: "md",
                                name: a.name ? a == null ? void 0 : a.name : "Guest"
                            }),
                            variant: "outline",
                            fontSize: "1.2rem",
                            rounded: "full",
                            colorScheme: "red"
                        }) : c.jsx(lt, {
                            as: VA,
                            "aria-label": "Options",
                            icon: c.jsx(ht, {}),
                            variant: "outline",
                            fontSize: "1.2rem",
                            rounded: "full",
                            colorScheme: "red"
                        }), c.jsxs(Mt, {
                            p: "2",
                            zIndex: 9999,
                            fontWeight: "500",
                            children: [l && c.jsxs(c.Fragment, {
                                children: [c.jsxs(M, {
                                    p: "1",
                                    py: "2",
                                    textTransform: "capitalize",
                                    children: ["Hi, ", a.name ? a == null ? void 0 : a.name : "Guest"]
                                }), c.jsx(oA, {})]
                            }), c.jsx(YA, {
                                _hover: {
                                    bg: "red.400",
                                    color: "white"
                                },
                                rounded: "full",
                                icon: c.jsx(nI, {
                                    fontSize: "1.1rem"
                                }),
                                onClick: () => A("/rcbian/mypage"),
                                my: "2",
                                children: "My Account"
                            }), c.jsx(YA, {
                                _hover: {
                                    bg: "red.400",
                                    color: "white"
                                },
                                rounded: "full",
                                icon: c.jsx(Ht, {
                                    fontSize: "1.1rem"
                                }),
                                onClick: () => A("/rcbian/orders"),
                                my: "2",
                                children: "Orders"
                            }), c.jsx(YA, {
                                _hover: {
                                    bg: "red.400",
                                    color: "white"
                                },
                                rounded: "full",
                                icon: c.jsx(Vt, {
                                    fontSize: "1.1rem"
                                }),
                                onClick: () => A("/rcbian/addresses"),
                                my: "2",
                                children: "Addresses"
                            }), c.jsx(YA, {
                                _hover: {
                                    bg: "red.400",
                                    color: "white"
                                },
                                rounded: "full",
                                icon: c.jsx(ht, {
                                    fontSize: "1.1rem"
                                }),
                                onClick: () => A("/rcbian/profile"),
                                my: "2",
                                children: "Profile"
                            }), c.jsx(oA, {}), c.jsx(YA, {
                                _hover: {
                                    bg: "red.400",
                                    color: "white"
                                },
                                rounded: "full",
                                icon: c.jsx(vt, {
                                    fontSize: "1.1rem"
                                }),
                                onClick: () => A("/help"),
                                my: "2",
                                children: "Help Center"
                            }), a && c.jsxs(c.Fragment, {
                                children: [c.jsx(oA, {}), c.jsx(YA, {
                                    color: "red.500",
                                    _hover: {
                                        bg: "red.400",
                                        color: "white"
                                    },
                                    rounded: "full",
                                    icon: c.jsx(te, {
                                        fontSize: "1.1rem"
                                    }),
                                    onClick: () => L(),
                                    my: "2",
                                    children: "Logout"
                                })]
                            })]
                        })]
                    }), c.jsxs(TA, {
                        spacing: "0px",
                        children: [c.jsx(VA, {
                            icon: c.jsx(Wc, {}),
                            variant: "outline",
                            fontSize: "1.2rem",
                            rounded: "full",
                            colorScheme: "red",
                            onClick: () => e.onOpen()
                        }), D > 0 && c.jsx(T, {
                            mt: "-6",
                            ml: "-2",
                            px: "1",
                            pt: "1px",
                            zIndex: "2",
                            fontWeight: "bold",
                            color: "white",
                            bg: "red.600",
                            rounded: "full",
                            h: "25px",
                            minW: "25px",
                            textAlign: "center",
                            fontSize: "0.9rem",
                            children: D
                        }), o > 0 && i && c.jsx(Ds, {})]
                    })]
                }), c.jsx(cs, {
                    opener: e
                })]
            }), c.jsxs(TA, {
                display: ["flex", "none"],
                spacing: "1px",
                py: "2",
                bg: "gray.200",
                children: [c.jsx(nA, {}), !1, c.jsx(_, {
                    colorScheme: "red",
                    variant: I.toLowerCase().includes("merchandise") ? "solid" : "ghost",
                    onClick: () => A("/merchandise"),
                    leftIcon: c.jsx(nt, {
                        fontSize: "1.1rem"
                    }),
                    fontSize: "0.9rem",
                    children: "MERCHANDISE"
                }), c.jsx(nA, {})]
            })]
        })
    }),
    t[13] = e,
    t[14] = i,
    t[15] = D,
    t[16] = l,
    t[17] = L,
    t[18] = p.isPending,
    t[19] = A,
    t[20] = I,
    t[21] = a,
    t[22] = o,
    t[23] = d) : d = t[23],
    d
}
;
function Ts(t) {
    return t.cartCount
}
function Ls(t) {
    return t.ticCount
}
function Es(t) {
    return t.clearCart
}
function Hs(t) {
    return t.cartTimeout
}
const ds = () => {
    const t = X.c(11);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(T, {
        bg: "white",
        display: ["block", "none"],
        h: "45px",
        zIndex: "10",
        w: "full"
    }),
    t[0] = A) : A = t[0];
    let I;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (I = ["none", "block"],
    t[1] = I) : I = t[1];
    let e, s;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = {
        base: "center",
        md: "space-between"
    },
    s = {
        base: "center",
        md: "center"
    },
    t[2] = e,
    t[3] = s) : (e = t[2],
    s = t[3]);
    let o;
    t[4] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(fA, {
        src: "/imgs/rcb-logo-new.png",
        alt: "logo",
        width: "auto",
        height: 90
    }),
    t[4] = o) : o = t[4];
    let N;
    t[5] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx(M, {
        color: "#e0b050",
        fontSize: "md",
        children: "© Royal Challengers Sports Pvt. Ltd."
    }),
    t[5] = N) : N = t[5];
    let i;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(nA, {}),
    t[6] = i) : i = t[6];
    let D;
    t[7] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(VA, {
        p: "0px",
        color: "white",
        fontSize: "1.4rem",
        variant: "ghost",
        _hover: {
            color: "red"
        },
        icon: c.jsx(Ie, {}),
        zIndex: "2"
    }),
    t[7] = D) : D = t[7];
    let n;
    t[8] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx(VA, {
        p: "0px",
        color: "white",
        fontSize: "1.4rem",
        variant: "ghost",
        _hover: {
            color: "blue.400"
        },
        icon: c.jsx(ee, {}),
        zIndex: "2"
    }),
    t[8] = n) : n = t[8];
    let a;
    t[9] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(VA, {
        p: "0px",
        color: "white",
        fontSize: "1.4rem",
        variant: "ghost",
        _hover: {
            color: "red"
        },
        icon: c.jsx(se, {}),
        zIndex: "2"
    }),
    t[9] = a) : a = t[9];
    let r;
    return t[10] === Symbol.for("react.memo_cache_sentinel") ? (r = c.jsxs(c.Fragment, {
        children: [A, c.jsx(T, {
            bg: "#2c2324",
            display: I,
            zIndex: "10",
            w: "full",
            children: c.jsxs(T, {
                as: U,
                py: 2,
                direction: "row",
                spacing: 4,
                justify: e,
                align: s,
                w: "100%",
                maxW: "1200px",
                mx: "auto",
                children: [o, c.jsxs(T, {
                    children: [N, c.jsxs(U, {
                        direction: "row",
                        color: "white",
                        fontSize: "1.4rem",
                        children: [i, D, n, a, c.jsx(VA, {
                            p: "0px",
                            color: "white",
                            fontSize: "1.4rem",
                            variant: "ghost",
                            _hover: {
                                color: "blue.400"
                            },
                            icon: c.jsx(oe, {}),
                            zIndex: "2"
                        }), c.jsx(nA, {})]
                    })]
                })]
            })
        })]
    }),
    t[10] = r) : r = t[10],
    r
}
  , Ms = () => {
    const t = X.c(3);
    let A, I;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(T, {
        fontSize: "16rem",
        children: c.jsx(fA, {
            src: "/imgs/wrong.jpg",
            w: "300px",
            h: "auto"
        })
    }),
    I = c.jsx(T, {
        fontSize: "1.2rem",
        fontWeight: "600",
        textAlign: "center",
        color: "GrayText",
        children: "Something went wrong!"
    }),
    t[0] = A,
    t[1] = I) : (A = t[0],
    I = t[1]);
    let e;
    return t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = c.jsx(T, {
        p: "2",
        children: c.jsx(DA, {
            maxW: "6xl",
            bg: "#f7f7f7",
            my: "3",
            borderRadius: "20px",
            w: "100%",
            mx: "auto",
            minH: "500px",
            children: c.jsxs(U, {
                spacing: "6",
                children: [A, I, c.jsx(T, {
                    textAlign: "center",
                    children: c.jsx(_, {
                        colorScheme: "green",
                        variant: "outline",
                        onClick: Us,
                        children: "Try Again"
                    })
                })]
            })
        })
    }),
    t[2] = e) : e = t[2],
    e
}
;
function Us() {
    return window.location.href = "/"
}
const Ks = () => {
    const t = X.c(4);
    let A, I, e;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(ke, {}),
    I = c.jsx(as, {}),
    e = {
        margin: "auto",
        width: "100%",
        maxWidth: "1500px",
        paddingBottom: "20px",
        minHeight: "80vh"
    },
    t[0] = A,
    t[1] = I,
    t[2] = e) : (A = t[0],
    I = t[1],
    e = t[2]);
    let s;
    return t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsxs(T, {
        minH: "100vh",
        minW: "100wh",
        children: [A, I, c.jsx("div", {
            style: e,
            children: c.jsx(ye, {
                fallback: c.jsx(Ms, {}),
                children: c.jsx(RI, {})
            })
        }), c.jsx(ds, {})]
    }),
    t[3] = s) : s = t[3],
    s
}
  , hs = t => ({
    products: [],
    merchandise: [],
    setProducts: A => {
        t({
            products: A
        })
    }
    ,
    setMerchandise: A => {
        t({
            merchandise: A
        })
    }
})
  , wI = Pt(AI(hs, {
    name: "mrt-prolst"
}))
  , ms = t => {
    const A = X.c(11)
      , {product: I} = t
      , e = wI(Ss);
    let s;
    A[0] !== I || A[1] !== e ? (s = () => {
        e(I.slice(0, 5))
    }
    ,
    A[0] = I,
    A[1] = e,
    A[2] = s) : s = A[2];
    let o;
    A[3] === Symbol.for("react.memo_cache_sentinel") ? (o = [],
    A[3] = o) : o = A[3],
    P.useEffect(s, o);
    let N, i, D;
    A[4] === Symbol.for("react.memo_cache_sentinel") ? (N = [2, 4],
    i = ["10px", "20px"],
    D = ["5px", "5px"],
    A[4] = N,
    A[5] = i,
    A[6] = D) : (N = A[4],
    i = A[5],
    D = A[6]);
    let n;
    A[7] !== I ? (n = I.length > 0 && I.map(Gs),
    A[7] = I,
    A[8] = n) : n = A[8];
    let a;
    return A[9] !== n ? (a = c.jsx(Ut, {
        columns: N,
        spacing: i,
        px: D,
        mt: "20px",
        children: n
    }),
    A[9] = n,
    A[10] = a) : a = A[10],
    a
}
  , _I = t => {
    var h, m, x, L, d, H, f, O, g, K, j, y, u, B, S;
    const A = X.c(29)
      , {mdata: I} = t
      , e = kA();
    let s;
    A[0] !== I.mer_Id || A[1] !== e ? (s = () => {
        e("/merchandise/" + I.mer_Id)
    }
    ,
    A[0] = I.mer_Id,
    A[1] = e,
    A[2] = s) : s = A[2];
    const o = s;
    let N;
    A[3] === Symbol.for("react.memo_cache_sentinel") ? (N = {
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
        transform: "translateY(-4px)",
        borderColor: "#e0e0e0"
    },
    A[3] = N) : N = A[3];
    let i;
    A[4] !== o ? (i = () => o(),
    A[4] = o,
    A[5] = i) : i = A[5];
    let D;
    A[6] !== ((h = I.categories[0]) == null ? void 0 : h.images[0]) || A[7] !== I.mer_Name ? (D = ((m = I == null ? void 0 : I.categories[0]) == null ? void 0 : m.images[0]) && c.jsx(T, {
        minH: ["220px", "356px"],
        bg: "#f8f8f8",
        borderTopRadius: "12px",
        overflow: "hidden",
        position: "relative",
        children: c.jsx(fA, {
            src: (x = I == null ? void 0 : I.categories[0]) == null ? void 0 : x.images[0],
            sizes: "100vw",
            style: {
                width: "100%",
                height: "100%",
                objectFit: "cover"
            },
            alt: I == null ? void 0 : I.mer_Name,
            width: 500,
            height: 300,
            priority: "false",
            className: "fadeInImg",
            loading: "lazy",
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            _hover: {
                transform: "scale(1.08)"
            }
        })
    }),
    A[6] = (L = I.categories[0]) == null ? void 0 : L.images[0],
    A[7] = I.mer_Name,
    A[8] = D) : D = A[8];
    let n;
    A[9] === Symbol.for("react.memo_cache_sentinel") ? (n = ["8px", "12px"],
    A[9] = n) : n = A[9];
    let a;
    A[10] === Symbol.for("react.memo_cache_sentinel") ? (a = ["0.85rem", "1rem"],
    A[10] = a) : a = A[10];
    let r;
    A[11] !== I.mer_Name ? (r = c.jsx(M, {
        fontSize: a,
        fontWeight: "600",
        color: "#1a1a1a",
        noOfLines: 2,
        letterSpacing: "0.3px",
        children: I.mer_Name
    }),
    A[11] = I.mer_Name,
    A[12] = r) : r = A[12];
    let R;
    A[13] !== ((d = I.categories[0]) == null ? void 0 : d.discount_Desc) || A[14] !== ((H = I.categories[0]) == null ? void 0 : H.display_Price) || A[15] !== ((f = I.categories[0]) == null ? void 0 : f.price) ? (R = ((O = I.categories[0]) == null ? void 0 : O.discount_Desc) !== "" ? c.jsxs(TA, {
        spacing: "2",
        children: [c.jsxs(TA, {
            spacing: "2",
            align: "center",
            children: [c.jsxs(M, {
                fontWeight: "700",
                fontSize: ["1rem", "1.25rem"],
                color: "#d8aa52",
                children: ["₹", (g = I.categories[0]) == null ? void 0 : g.price]
            }), c.jsxs(M, {
                color: "#999",
                textDecoration: "line-through",
                fontSize: [".75rem", ".9rem"],
                children: ["₹", (K = I.categories[0]) == null ? void 0 : K.display_Price]
            })]
        }), c.jsx(T, {
            bg: "#e8f5e9",
            px: "8px",
            py: "4px",
            borderRadius: "6px",
            display: "inline-flex",
            width: "fit-content",
            children: c.jsx(M, {
                color: "#2e7d32",
                fontWeight: "600",
                fontSize: [".75rem", ".85rem"],
                children: (j = I.categories[0]) == null ? void 0 : j.discount_Desc
            })
        })]
    }) : c.jsxs(M, {
        fontWeight: "700",
        fontSize: ["1rem", "1.25rem"],
        color: "#d8aa52",
        children: ["₹", (y = I.categories[0]) == null ? void 0 : y.price]
    }),
    A[13] = (u = I.categories[0]) == null ? void 0 : u.discount_Desc,
    A[14] = (B = I.categories[0]) == null ? void 0 : B.display_Price,
    A[15] = (S = I.categories[0]) == null ? void 0 : S.price,
    A[16] = R) : R = A[16];
    let p;
    A[17] !== I.categories ? (p = I.categories.slice(0, 2).map(fs),
    A[17] = I.categories,
    A[18] = p) : p = A[18];
    let l;
    A[19] !== p ? (l = c.jsx(TA, {
        spacing: "2",
        wrap: "wrap",
        pt: "2",
        children: p
    }),
    A[19] = p,
    A[20] = l) : l = A[20];
    let E;
    A[21] !== l || A[22] !== r || A[23] !== R ? (E = c.jsxs(U, {
        spacing: 2,
        py: "12px",
        px: n,
        children: [r, R, l]
    }),
    A[21] = l,
    A[22] = r,
    A[23] = R,
    A[24] = E) : E = A[24];
    let G;
    return A[25] !== E || A[26] !== i || A[27] !== D ? (G = c.jsxs(T, {
        bg: "white",
        borderRadius: "12px",
        border: "1px solid #f0f0f0",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        _hover: N,
        onClick: i,
        overflow: "hidden",
        children: [D, E]
    }),
    A[25] = E,
    A[26] = i,
    A[27] = D,
    A[28] = G) : G = A[28],
    G
}
;
function Ss(t) {
    return t.setMerchandise
}
function Gs(t, A) {
    return c.jsx(_I, {
        mdata: t
    }, A)
}
function fs(t, A) {
    return c.jsx(T, {
        border: "1.5px solid #d8aa52",
        bg: "rgba(216, 170, 82, 0.08)",
        px: ["6px", "8px"],
        py: "2px",
        borderRadius: "10px",
        color: "#8b6600",
        fontSize: [".65rem", ".8rem"],
        fontWeight: "500",
        whiteSpace: "nowrap",
        transition: "all 0.2s",
        _hover: {
            bg: "rgba(216, 170, 82, 0.15)"
        },
        children: t.cat_Name
    }, A)
}
const At = () => {
    const t = X.c(2);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(fA, {
        src: "/imgs/rcb-logo-new.png",
        alt: "",
        width: "80px",
        height: "auto"
    }),
    t[0] = A) : A = t[0];
    let I;
    return t[1] === Symbol.for("react.memo_cache_sentinel") ? (I = c.jsx(DA, {
        w: "100%",
        h: "70vh",
        children: c.jsxs(U, {
            spacing: "25px",
            children: [A, c.jsxs(DA, {
                children: [" ", c.jsx(zt, {
                    color: "red",
                    size: "xl"
                })]
            })]
        })
    }),
    t[1] = I) : I = t[1],
    I
}
  , us = () => {
    var N, i, D;
    const t = X.c(8);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = {
        queryKey: [12],
        queryFn: We
    },
    t[0] = A) : A = t[0];
    const I = Gc(A);
    if (I.isPending) {
        let n;
        return t[1] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx(At, {}),
        t[1] = n) : n = t[1],
        n
    }
    let e;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = c.jsxs(be, {
        children: [c.jsx("title", {
            children: "Royal Challengers Bengaluru Official Merchandise | RCB"
        }), c.jsx("meta", {
            name: "description",
            content: "Royal Challengers Bengaluru Official Merchandise | RCB"
        })]
    }),
    t[2] = e) : e = t[2];
    let s;
    t[3] !== ((N = I.data) == null ? void 0 : N.result) || t[4] !== I.isSuccess ? (s = I.isSuccess && c.jsx(ms, {
        product: (i = I.data) == null ? void 0 : i.result
    }),
    t[3] = (D = I.data) == null ? void 0 : D.result,
    t[4] = I.isSuccess,
    t[5] = s) : s = t[5];
    let o;
    return t[6] !== s ? (o = c.jsxs(c.Fragment, {
        children: [e, s]
    }),
    t[6] = s,
    t[7] = o) : o = t[7],
    o
}
  , xs = t => {
    const A = X.c(10)
      , {opener: I} = t;
    let e;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (e = c.jsx(ac, {}),
    A[0] = e) : e = A[0];
    let s, o;
    A[1] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(ic, {
        children: "Size Chart"
    }),
    o = c.jsx(Xc, {
        bg: "red.500",
        color: "white",
        borderRadius: "full"
    }),
    A[1] = s,
    A[2] = o) : (s = A[1],
    o = A[2]);
    let N;
    A[3] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx(zA, {
        children: c.jsx(fA, {
            alt: "Size Chart",
            src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/SizeChart_for_Apparel.jpg",
            sizes: "100vw",
            style: {
                width: "100%",
                height: "auto"
            },
            width: 800,
            height: 1300
        })
    }),
    A[3] = N) : N = A[3];
    let i;
    A[4] !== I ? (i = c.jsxs(Jc, {
        children: [s, o, N, c.jsx(fc, {
            children: c.jsx(_, {
                onClick: () => I.onClose(),
                variant: "ghost",
                children: "Close"
            })
        })]
    }),
    A[4] = I,
    A[5] = i) : i = A[5];
    let D;
    return A[6] !== I.isOpen || A[7] !== I.onClose || A[8] !== i ? (D = c.jsxs(_c, {
        isOpen: I.isOpen,
        onClose: I.onClose,
        size: "lg",
        children: [e, i]
    }),
    A[6] = I.isOpen,
    A[7] = I.onClose,
    A[8] = i,
    A[9] = D) : D = A[9],
    D
}
  , ct = t => {
    const A = X.c(7)
      , {text: I, icon: e} = t;
    let s;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (s = ["1.1rem", "1.35rem"],
    A[0] = s) : s = A[0];
    let o;
    A[1] === Symbol.for("react.memo_cache_sentinel") ? (o = ["none", "md"],
    A[1] = o) : o = A[1];
    let N;
    A[2] !== I ? (N = c.jsx(T, {
        ml: "10px",
        fontWeight: "bold",
        children: I
    }),
    A[2] = I,
    A[3] = N) : N = A[3];
    let i;
    return A[4] !== e || A[5] !== N ? (i = c.jsxs(TA, {
        fontSize: s,
        bg: "white",
        p: "2",
        px: "5",
        borderRadius: o,
        border: "1px solid #fff",
        bgGradient: "linear(to-r,gray.100,white,gray.100)",
        color: "#b7791f",
        children: [e, " ", N]
    }),
    A[4] = e,
    A[5] = N,
    A[6] = i) : i = A[6],
    i
}
  , Os = t => {
    const A = X.c(13)
      , {curProduct: I} = t;
    let e;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (e = [],
    A[0] = e) : e = A[0];
    const [s,o] = P.useState(e)
      , N = wI(Ps);
    let i;
    A[1] !== I || A[2] !== N ? (i = () => {
        o(N.filter(E => E.mer_Id !== I.mer_Id))
    }
    ,
    A[1] = I,
    A[2] = N,
    A[3] = i) : i = A[3];
    let D;
    A[4] === Symbol.for("react.memo_cache_sentinel") ? (D = [],
    A[4] = D) : D = A[4],
    P.useEffect(i, D);
    let n;
    A[5] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx(T, {
        my: "8",
        mt: "90px",
        px: "2",
        children: c.jsx(ct, {
            text: "YOU MIGHT BE INTERESTED IN",
            icon: c.jsx(nt, {})
        })
    }),
    A[5] = n) : n = A[5];
    let a, r;
    A[6] === Symbol.for("react.memo_cache_sentinel") ? (a = [2, 4],
    r = ["10px", "40px"],
    A[6] = a,
    A[7] = r) : (a = A[6],
    r = A[7]);
    let R;
    A[8] === Symbol.for("react.memo_cache_sentinel") ? (R = ["5px", "5px"],
    A[8] = R) : R = A[8];
    let p;
    A[9] !== s ? (p = s.length > 0 && s.map(gs),
    A[9] = s,
    A[10] = p) : p = A[10];
    let l;
    return A[11] !== p ? (l = c.jsxs(c.Fragment, {
        children: [n, c.jsx(Ut, {
            columns: a,
            spacing: r,
            mt: "5",
            px: R,
            children: p
        })]
    }),
    A[11] = p,
    A[12] = l) : l = A[12],
    l
}
;
function Ps(t) {
    return t.merchandise
}
function gs(t, A) {
    return c.jsx(_I, {
        mdata: t
    }, A)
}
const js = ({product: t}) => {
    const [A,I] = P.useState(t == null ? void 0 : t.categories[0])
      , [e,s] = P.useState({})
      , [o,N] = P.useState(1)
      , [i,D] = P.useState()
      , [n,a] = P.useState()
      , [r,R] = P.useState(!1)
      , p = pc()
      , l = WA()
      , E = pc()
      , {addMerchandise: G, reloadCart: h} = Rc(K => K)
      , m = hA({
        mutationFn: Fe
    })
      , x = kA();
    P.useEffect( () => {
        var K, j;
        try {
            ((K = t.categories[0]) == null ? void 0 : K.sizes[0].size_Name) == "Free Size" && s((j = t.categories[0]) == null ? void 0 : j.sizes[0])
        } catch {}
    }
    , []);
    const L = K => {
        I(t.categories[K]),
        R(!1),
        d({})
    }
      , d = K => {
        s(K)
    }
      , H = () => {
        if (!e.size) {
            l({
                title: "Please select a size.",
                status: "error",
                duration: "1500"
            });
            return
        }
        if (o != 1) {
            l({
                title: "Personalization is available for single quantities only.",
                status: "error",
                duration: "1500"
            });
            return
        }
        a(""),
        D(""),
        E.onOpen()
    }
      , f = () => {
        if (!e.size) {
            l({
                title: "Please select a size",
                status: "error",
                duration: "1500"
            });
            return
        }
        const K = {
            merId: e.mer_Id,
            catId: e.cat_Id,
            size: e.size,
            qty: o,
            perText: "",
            perNo: ""
        };
        m.mutate(K)
    }
      , O = () => {
        x("/checkout")
    }
    ;
    P.useEffect( () => {
        var K;
        m.isSuccess && (m.data.status === "Success" ? (E.onClose(),
        ((K = m.data.result) == null ? void 0 : K.merchandises.length) > 0 && h(m.data.result),
        l({
            title: "Item added to the shopping bag.",
            status: "success",
            duration: "1500"
        }),
        R(!0)) : l({
            title: "Oops, failed to add item.",
            status: "error",
            duration: "1500"
        }))
    }
    , [m.isSuccess]);
    const g = () => {
        if (!e.size) {
            l({
                title: "Please select a size",
                status: "error",
                duration: "1500"
            });
            return
        }
        if (!i) {
            l({
                title: "Please enter a number",
                status: "error",
                duration: "1500"
            });
            return
        }
        if (!n) {
            l({
                title: "Please enter a name",
                status: "error",
                duration: "1500"
            });
            return
        }
        const K = {
            merId: e.mer_Id,
            catId: e.cat_Id,
            size: e.size,
            qty: o,
            perText: n,
            perNo: i
        };
        m.mutate(K)
    }
    ;
    return t != null && t.mer_Name ? c.jsxs(c.Fragment, {
        children: [c.jsx(T, {
            py: "10px",
            pl: "20px",
            fontSize: "1rem",
            children: c.jsxs(MI, {
                spacing: "8px",
                separator: c.jsx(lI, {
                    color: "#ccc"
                }),
                children: [c.jsx(Dt, {
                    children: c.jsx(rt, {
                        as: Zc,
                        color: "yellow.700",
                        href: "/",
                        children: "Shop"
                    })
                }), c.jsx(Dt, {
                    children: c.jsx(rt, {
                        as: Zc,
                        color: "yellow.700",
                        href: "/merchandise",
                        children: "Merchandise"
                    })
                }), c.jsx(Dt, {
                    isCurrentPage: !0,
                    children: c.jsx(rt, {
                        href: "#",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        w: ["150px", "auto"],
                        children: t.mer_Name
                    })
                })]
            })
        }), c.jsxs(U, {
            direction: ["column", "row"],
            position: "relative",
            px: "5px",
            children: [c.jsx(T, {
                width: ["100%", "60%"],
                children: c.jsx(Ut, {
                    columns: [5, 2],
                    spacing: "5px",
                    overflowX: "auto",
                    overflowY: "hidden",
                    display: ["flex", "inline-grid"],
                    flexDirection: "row",
                    p: "3",
                    children: A.image_Name.split(",").map( (K, j) => c.jsx(fA, {
                        alt: "RCB Merchandise",
                        src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/puma-mer/" + t.mer_Id + "/" + K,
                        style: {
                            height: "auto",
                            borderRadius: "5px",
                            border: "1px solid #ddd"
                        },
                        width: [250, 450],
                        height: "auto",
                        priority: "false",
                        className: "fadeInImg"
                    }, j))
                })
            }), c.jsx(T, {
                width: ["100%", "40%"],
                px: "20px",
                children: c.jsxs(U, {
                    w: "100%",
                    spacing: "20px",
                    position: "sticky",
                    top: "80px",
                    children: [c.jsx(M, {
                        fontWeight: "bolder",
                        fontSize: "2rem",
                        children: t.mer_Name
                    }), c.jsxs(T, {
                        children: [(A == null ? void 0 : A.discount_Desc) !== "" ? c.jsxs(TA, {
                            children: [c.jsxs(M, {
                                fontFamily: "rcbFontB",
                                fontSize: ["1.5rem", "1.82rem"],
                                children: ["₹ ", A == null ? void 0 : A.price]
                            }), c.jsxs(M, {
                                color: "gray.500",
                                textDecoration: "line-through",
                                fontSize: [".8rem", "1rem"],
                                children: ["₹ ", A == null ? void 0 : A.display_Price]
                            }), c.jsx(M, {
                                color: "green",
                                fontWeight: "bold",
                                fontSize: [".8rem", "1rem"],
                                children: A == null ? void 0 : A.discount_Desc
                            })]
                        }) : c.jsxs(M, {
                            fontFamily: "rcbFontB",
                            fontSize: ["1.3rem", "1.52rem"],
                            children: ["₹ ", A == null ? void 0 : A.price]
                        }), c.jsx(M, {
                            color: "gray.500",
                            children: "Inclusive of all taxes"
                        })]
                    }), c.jsxs(T, {
                        mt: "2",
                        children: [c.jsx(M, {
                            color: "gray.700",
                            fontWeight: "bold",
                            children: "Category"
                        }), c.jsx(TA, {
                            mt: "2",
                            children: t.categories.map( (K, j) => {
                                var y;
                                return c.jsx(_, {
                                    variant: K.cat_Id == A.cat_Id ? "solid" : "outline",
                                    isDisabled: ((y = t.categories) == null ? void 0 : y.length) == 1,
                                    colorScheme: "red",
                                    onClick: () => L(j),
                                    children: K.cat_Name
                                }, j)
                            }
                            )
                        })]
                    }), c.jsxs(T, {
                        mt: "2",
                        children: [c.jsxs(TA, {
                            children: [c.jsx(M, {
                                color: "gray.700",
                                fontWeight: "bold",
                                children: "Size"
                            }), c.jsx(nA, {}), c.jsx(M, {
                                color: "blue.500",
                                cursor: "pointer",
                                onClick: () => p.onOpen(),
                                children: "See sizing chart"
                            })]
                        }), c.jsx(TA, {
                            mt: "2",
                            children: A.sizes.map( (K, j) => c.jsx(_, {
                                variant: K.size == e.size ? "solid" : "outline",
                                colorScheme: "red",
                                onClick: () => d(K),
                                isDisabled: !!r,
                                children: K.size
                            }, j))
                        })]
                    }), t.personalization == "Y" && c.jsxs(T, {
                        mt: "2",
                        children: [c.jsx(_, {
                            variant: "outline",
                            colorScheme: "blue",
                            onClick: () => H(),
                            isDisabled: !!r,
                            children: "Personalise My Jersey"
                        }), c.jsx(M, {
                            mt: "1",
                            fontSize: "0.78rem",
                            color: "gray.600",
                            children: "Orders for personalised jerseys once successfully processed cannot be cancelled or returned."
                        })]
                    }), c.jsxs(T, {
                        mt: "2",
                        children: [c.jsx(M, {
                            color: "gray.700",
                            fontWeight: "bold",
                            children: "Qty"
                        }), c.jsxs(Ue, {
                            size: "md",
                            mt: "2",
                            maxW: 32,
                            defaultValue: 1,
                            min: 1,
                            max: 10,
                            borderColor: "red.600",
                            colorScheme: "red",
                            onChange: K => N(K),
                            isDisabled: !!r,
                            children: [c.jsx(Ke, {
                                fontSize: "1.3rem",
                                onKeyDown: K => {
                                    K.preventDefault()
                                }
                            }), c.jsxs(he, {
                                children: [c.jsx(me, {}), c.jsx(Se, {})]
                            })]
                        })]
                    }), c.jsx(T, {
                        mt: "3",
                        p: ["4", "0"],
                        w: "100%",
                        bg: "#f5f5f5",
                        bottom: "0px",
                        position: ["sticky", "relative"],
                        children: c.jsx(_, {
                            type: "solid",
                            size: "lg",
                            colorScheme: r ? "green" : "red",
                            w: "100%",
                            leftIcon: r ? null : c.jsx(Wc, {}),
                            rightIcon: r ? c.jsx(iI, {}) : null,
                            onClick: () => r ? O() : f(),
                            isLoading: m.isPending,
                            children: r ? "GO TO BAG" : "ADD TO BAG"
                        })
                    })]
                })
            })]
        }), c.jsx(Os, {
            curProduct: t
        }), c.jsx(xs, {
            opener: p
        }), c.jsxs(_c, {
            isOpen: E.isOpen,
            onClose: E.onClose,
            size: ["full", "2xl"],
            children: [c.jsx(ac, {}), c.jsxs(Jc, {
                children: [c.jsx(ic, {
                    children: "Personalize Your Jersey"
                }), c.jsx(oA, {}), c.jsx(Xc, {
                    bg: "red.500",
                    color: "white",
                    borderRadius: "full"
                }), c.jsx(zA, {
                    p: "0px",
                    children: c.jsxs(U, {
                        bg: "white",
                        direction: ["column", "row"],
                        spacing: "24px",
                        children: [c.jsxs(U, {
                            position: "relative",
                            w: "100%",
                            children: [c.jsx(T, {
                                p: "8px",
                                children: c.jsx(fA, {
                                    src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/jersey.jpg",
                                    style: {
                                        width: "100%",
                                        height: "auto"
                                    },
                                    width: 450,
                                    height: 500,
                                    alt: "Jersey"
                                })
                            }), c.jsxs(T, {
                                position: "absolute",
                                top: ["160px", "130px"],
                                w: "100%",
                                children: [c.jsx(DA, {
                                    w: "100%",
                                    color: "#d4af37",
                                    fontSize: "4rem",
                                    fontWeight: "700",
                                    lineHeight: "3.4rem",
                                    children: i || "00"
                                }), c.jsx(DA, {
                                    w: "100%",
                                    color: "#d4af37",
                                    fontSize: "1.8rem",
                                    textTransform: "uppercase",
                                    fontWeight: "500",
                                    children: n || "Name"
                                })]
                            })]
                        }), c.jsxs(U, {
                            spacing: "25px",
                            px: "30px",
                            bg: "whiteAlpha.300",
                            w: "100%",
                            children: [c.jsxs(tA, {
                                mt: 2,
                                children: [c.jsx(IA, {
                                    children: "Personalise Number"
                                }), c.jsx(TA, {
                                    children: c.jsxs(at, {
                                        value: i,
                                        colorScheme: "red",
                                        onChange: K => {
                                            D(K)
                                        }
                                        ,
                                        children: [c.jsx(PA, {}), c.jsx(PA, {})]
                                    })
                                }), c.jsx(nc, {
                                    children: "Maximum 2 Digits."
                                })]
                            }), c.jsxs(tA, {
                                children: [c.jsx(IA, {
                                    children: "Personalise Name"
                                }), c.jsx(TA, {
                                    spacing: "2px",
                                    children: c.jsxs(at, {
                                        type: "alphanumeric",
                                        colorScheme: "red",
                                        value: n,
                                        onChange: K => {
                                            a(K)
                                        }
                                        ,
                                        children: [c.jsx(PA, {}), c.jsx(PA, {}), c.jsx(PA, {}), c.jsx(PA, {}), c.jsx(PA, {}), c.jsx(PA, {})]
                                    })
                                }), c.jsx(nc, {
                                    children: "Maximum 6 Characters."
                                })]
                            }), c.jsxs(tA, {
                                children: [c.jsx(IA, {
                                    m: "0px",
                                    children: "Personalise Amount"
                                }), c.jsx(M, {
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                    children: "₹ 399"
                                }), c.jsx(M, {
                                    fontSize: ".8rem",
                                    color: "gray.400",
                                    children: "Inclusive of all taxes"
                                })]
                            })]
                        })]
                    })
                }), c.jsx(oA, {}), c.jsx(fc, {
                    children: c.jsx(_, {
                        type: "solid",
                        size: "lg",
                        colorScheme: "red",
                        w: ["100%", "250px"],
                        leftIcon: c.jsx(Wc, {}),
                        onClick: () => g(),
                        isLoading: m.isPending,
                        children: "Add to bag"
                    })
                })]
            })]
        })]
    }) : null
}
  , Cs = () => {
    var s;
    const {id: t} = ft()
      , A = Gc({
        queryKey: [t],
        queryFn: () => ze(t)
    })
      , {session: I} = JA()
      , e = vA.get("rtokn");
    return ((I == null ? void 0 : I.pool) == null || (I == null ? void 0 : I.pool) == "" || (I == null ? void 0 : I.pool) == null || e == null || e == "" || e == null) && (window.location.href = "/auth?callbackUrl=/merchandise/" + t),
    A.isPending ? c.jsx(At, {}) : c.jsx(js, {
        product: (s = A.data) == null ? void 0 : s.result
    })
}
  , ys = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1NBN42X16vAVfkDOKSAu
r2NOQaxpNdqZPE0eheStP6i9IIXPLhb27tdpGPDB8Hn8FE5IkjQ6Gn1tCh8O4Hvo
0JDbpKA664Ain/mnDbzAKHzuK1WL8aAErCFp5ZOE+7siKOhrMLtUnVjB+iciX3Dq
K5bGEPjM/5hGShUv2MDEjJxjRFmOAwjFo85YHKY6iZkUX9ZU6SnV6XuwBLf1VN3W
55NowyESB0AfK6diY6Xkwl+qpOaO/qhVyvj4rQZnRtQTrWJYFvJlFgaj7cOkQjw9
AbE+NmA+Z8Yk+rk0x14Kownbn1dtv6JqUhESkssOvAJIf6NbKsNfrmrrD5NpAbLh
GwIDAQAB
-----END PUBLIC KEY-----`;
function gA(t) {
    const A = new Ye;
    return A.setPublicKey(ys),
    A.encrypt(t)
}
const NI = () => {
    const t = "Online"
      , [A,I] = P.useState("mobile")
      , [e,s] = P.useState("")
      , [o,N] = P.useState("")
      , i = P.useRef()
      , D = WA()
      , n = hA({
        mutationFn: Ct
    })
      , a = hA({
        mutationFn: yt
    })
      , r = hA({
        mutationFn: bt
    })
      , R = Rc(L => L.clearCart)
      , p = JA(L => L.delDetail)
      , l = kA()
      , {addDetail: E} = JA()
      , [G] = ut();
    P.useEffect( () => {
        R(),
        p(),
        vA.remove("rtokn")
    }
    , []),
    P.useEffect( () => {
        var L, d, H;
        n.isSuccess && (((L = n.data) == null ? void 0 : L.status) == "Success" ? (s((d = i.current) == null ? void 0 : d.value),
        N(""),
        I("otp")) : D({
            title: (H = n.data) == null ? void 0 : H.message,
            status: "error",
            duration: "1500"
        }))
    }
    , [n.isSuccess]),
    P.useEffect( () => {
        var L, d;
        a.isSuccess && (((L = a.data) == null ? void 0 : L.status) == "Success" ? D({
            title: "OTP Sent.",
            status: "success",
            duration: "1500"
        }) : D({
            title: (d = a.data) == null ? void 0 : d.message,
            status: "error",
            duration: "1500"
        }))
    }
    , [a.isSuccess]);
    const h = async () => {
        var d, H;
        if (((d = i.current) == null ? void 0 : d.value.length) != 10) {
            D({
                title: "Enter Valid Mobile No.",
                status: "error",
                duration: "1500"
            });
            return
        }
        const L = {
            utype: gA(t),
            mobile: gA((H = i.current) == null ? void 0 : H.value),
            email: ""
        };
        n.mutate(L)
    }
      , m = async () => {
        if (e.length != 10) {
            D({
                title: "Enter Valid Mobile No.",
                status: "error",
                duration: "1500"
            });
            return
        }
        const L = {
            utype: gA(t),
            mobile: gA(e),
            email: ""
        };
        a.mutate(L)
    }
      , x = () => {
        try {
            if (o.length != 5) {
                D({
                    title: "Login Failed.",
                    status: "error",
                    duration: "1500"
                });
                return
            } else {
                const L = {
                    utype: gA(t),
                    mobile: gA(e),
                    email: "",
                    otp: gA(o)
                };
                r.mutate(L)
            }
        } catch {}
    }
    ;
    return P.useEffect( () => {
        var L, d, H, f, O, g, K, j, y;
        if (r.isSuccess)
            if (((L = r.data) == null ? void 0 : L.status) == "Success") {
                R(),
                vA.set("rtokn", (H = (d = r.data) == null ? void 0 : d.result) == null ? void 0 : H.token, {
                    expires: 30,
                    secure: !0,
                    path: "/",
                    sameSite: "strict"
                });
                const u = (f = r.data) == null ? void 0 : f.result;
                u.ml = 6,
                u.tl = 10,
                E(u);
                const B = G.get("callbackUrl");
                l(B || "/ticket")
            } else
                ((g = (O = r.data) == null ? void 0 : O.result) == null ? void 0 : g.msg) == "ATTEMPT EXCEEDED" && I("mobile"),
                D({
                    title: ((K = r.data) == null ? void 0 : K.message) + ". Attempt " + ((y = (j = r.data) == null ? void 0 : j.result) == null ? void 0 : y.attempt),
                    status: "error",
                    duration: "1500"
                })
    }
    , [r.isSuccess]),
    c.jsxs(c.Fragment, {
        children: [c.jsx(T, {
            w: "full",
            h: "80vh",
            children: c.jsx(DA, {
                w: "full",
                p: ["5px", "20px"],
                pt: ["10%", "5%"],
                children: c.jsx(U, {
                    children: c.jsxs(T, {
                        bg: "rgba(255,255,255,0.93)",
                        w: "100%",
                        maxW: "400px",
                        p: "10",
                        px: [5, 10],
                        borderRadius: "lg",
                        shadow: "lg",
                        position: "relative",
                        children: [c.jsx(VA, {
                            onClick: () => l("/"),
                            icon: c.jsx(Ot, {}),
                            fontSize: "1.5rem",
                            variant: "ghost",
                            position: "absolute",
                            left: "30px",
                            colorScheme: "red"
                        }), c.jsx(M, {
                            textAlign: "center",
                            borderRadius: "full",
                            fontSize: "1.4rem",
                            fontWeight: "bold",
                            color: "gray.500",
                            children: "LOGIN"
                        }), c.jsx(oA, {
                            my: "40px"
                        }), A == "mobile" ? c.jsxs(c.Fragment, {
                            children: [c.jsxs(tA, {
                                children: [c.jsx(IA, {
                                    children: "Enter Mobile No."
                                }), c.jsxs(Kt, {
                                    children: [c.jsx(Ft, {
                                        height: "48px",
                                        fontSize: "1.3rem",
                                        children: "+91"
                                    }), c.jsx(pA, {
                                        size: "lg",
                                        bg: "white",
                                        type: "tel",
                                        ref: i,
                                        placeholder: "Mobile No.",
                                        maxLength: 10,
                                        fontSize: "1.3rem",
                                        letterSpacing: "5px",
                                        pattern: "[1-9]{1}[0-9]{9}",
                                        onPaste: L => {
                                            L.preventDefault()
                                        }
                                        ,
                                        onKeyDown: L => {
                                            !/[0-9]/.test(L.key) && L.key !== "Backspace" && L.preventDefault()
                                        }
                                    })]
                                }), c.jsx(nc, {
                                    children: "You will receive OTP, after continue"
                                })]
                            }), c.jsx(U, {
                                py: "30px",
                                textAlign: "center",
                                children: c.jsx(_, {
                                    variant: "solid",
                                    size: "lg",
                                    rightIcon: c.jsx(Qc, {}),
                                    colorScheme: "red",
                                    onClick: () => h(),
                                    isLoading: n.isPending,
                                    children: "Continue"
                                })
                            })]
                        }) : c.jsxs(c.Fragment, {
                            children: [c.jsxs(tA, {
                                children: [c.jsx(IA, {
                                    children: "Enter OTP."
                                }), c.jsxs(TA, {
                                    children: [c.jsx(nA, {}), c.jsxs(at, {
                                        otp: !0,
                                        size: "lg",
                                        value: o,
                                        onChange: L => N(L),
                                        children: [c.jsx(PA, {
                                            bg: "white"
                                        }), c.jsx(PA, {
                                            bg: "white"
                                        }), c.jsx(PA, {
                                            bg: "white"
                                        }), c.jsx(PA, {
                                            bg: "white"
                                        }), c.jsx(PA, {
                                            bg: "white"
                                        })]
                                    }), c.jsx(nA, {})]
                                }), c.jsxs(nc, {
                                    textAlign: "center",
                                    children: ["OTP sent to +91 ", e]
                                })]
                            }), c.jsx(bs, {
                                handleResend: m,
                                isLoading: a.isPending
                            }), c.jsxs(U, {
                                py: "30px",
                                textAlign: "center",
                                children: [c.jsx(_, {
                                    variant: "solid",
                                    size: "lg",
                                    rightIcon: c.jsx(Qc, {}),
                                    colorScheme: "red",
                                    onClick: () => x(),
                                    isLoading: r.isPending,
                                    children: "Validate"
                                }), c.jsx(_, {
                                    colorScheme: "red",
                                    variant: "ghost",
                                    onClick: () => I("mobile"),
                                    children: "Cancel"
                                })]
                            })]
                        })]
                    })
                })
            })
        }), c.jsx(T, {
            backgroundImage: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/stadium-new.png",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            top: "0px",
            left: "0px",
            w: "full",
            h: "100vh",
            zIndex: -1
        })]
    })
}
  , bs = t => {
    const A = X.c(14)
      , {handleResend: I, isLoading: e} = t
      , [s,o] = P.useState(30);
    let N, i;
    A[0] !== s ? (N = () => {
        const E = setInterval( () => {
            o(Bs),
            s <= 0 && clearInterval(E)
        }
        , 1e3);
        return () => clearInterval(E)
    }
    ,
    i = [s],
    A[0] = s,
    A[1] = N,
    A[2] = i) : (N = A[1],
    i = A[2]),
    P.useEffect(N, i);
    let D;
    A[3] !== I ? (D = () => {
        I(),
        o(60)
    }
    ,
    A[3] = I,
    A[4] = D) : D = A[4];
    const n = D;
    let a, r;
    A[5] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(nA, {}),
    r = c.jsx(M, {
        children: "Resend OTP "
    }),
    A[5] = a,
    A[6] = r) : (a = A[5],
    r = A[6]);
    let R;
    A[7] !== n || A[8] !== s || A[9] !== e ? (R = s > 0 ? c.jsxs(M, {
        children: ["in ", s, "sec"]
    }) : c.jsx(_, {
        variant: "ghost",
        size: "sm",
        colorScheme: "blue",
        onClick: () => n(),
        isLoading: e,
        children: "Click Here"
    }),
    A[7] = n,
    A[8] = s,
    A[9] = e,
    A[10] = R) : R = A[10];
    let p;
    A[11] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(nA, {}),
    A[11] = p) : p = A[11];
    let l;
    return A[12] !== R ? (l = c.jsxs(TA, {
        py: "3",
        color: "gray.600",
        children: [a, r, R, p]
    }),
    A[12] = R,
    A[13] = l) : l = A[13],
    l
}
;
function Bs(t) {
    return t - 1
}
const Ys = () => {
    const t = "Diageo"
      , [A,I] = P.useState("email")
      , [e,s] = P.useState("")
      , [o,N] = P.useState("")
      , i = P.useRef()
      , D = P.useRef()
      , n = WA()
      , a = hA({
        mutationFn: Ct
    })
      , r = hA({
        mutationFn: yt
    })
      , R = hA({
        mutationFn: bt
    })
      , p = Rc(d => d.clearCart)
      , l = JA(d => d.delDetail)
      , E = kA()
      , {addDetail: G} = JA()
      , [h] = ut();
    P.useEffect( () => {
        p(),
        l(),
        vA.remove("rtokn")
    }
    , []),
    P.useEffect( () => {
        var d, H, f, O;
        a.isSuccess && (((d = a.data) == null ? void 0 : d.status) == "Success" ? (s(((H = i.current) == null ? void 0 : H.value) + ((f = D.current) == null ? void 0 : f.value)),
        N(""),
        I("otp")) : n({
            title: (O = a.data) == null ? void 0 : O.message,
            status: "error",
            duration: "1500"
        }))
    }
    , [a.isSuccess]),
    P.useEffect( () => {
        var d, H;
        r.isSuccess && (((d = r.data) == null ? void 0 : d.status) == "Success" ? n({
            title: "OTP Sent.",
            status: "success",
            duration: "1500"
        }) : n({
            title: (H = r.data) == null ? void 0 : H.message,
            status: "error",
            duration: "1500"
        }))
    }
    , [r.isSuccess]);
    const m = async () => {
        var O, g, K, j, y;
        if (((O = i.current) == null ? void 0 : O.value.length) <= 5) {
            n({
                title: "Enter Valid Email Id.",
                status: "error",
                duration: "1500"
            });
            return
        }
        const d = ((g = i.current) == null ? void 0 : g.value) + ((K = D.current) == null ? void 0 : K.value);
        if (!/^[a-zA-Z0-9._%+-]+@diageo\.com$/.test(d)) {
            n({
                title: "Invalid characters in email.",
                status: "error",
                duration: "1500"
            });
            return
        }
        const f = {
            utype: gA(t),
            mobile: "",
            email: gA(((j = i.current) == null ? void 0 : j.value) + ((y = D.current) == null ? void 0 : y.value))
        };
        a.mutate(f)
    }
      , x = async () => {
        if (e.length <= 10) {
            n({
                title: "Enter Valid Email Id.",
                status: "error",
                duration: "1500"
            });
            return
        }
        const d = {
            utype: gA(t),
            mobile: "",
            email: gA(e)
        };
        r.mutate(d)
    }
      , L = () => {
        try {
            if (o.length != 5) {
                n({
                    title: "Login Failed.",
                    status: "error",
                    duration: "1500"
                });
                return
            } else {
                const d = {
                    utype: gA(t),
                    mobile: "",
                    email: gA(e),
                    otp: gA(o)
                };
                R.mutate(d)
            }
        } catch {}
    }
    ;
    return P.useEffect( () => {
        var d, H, f, O, g, K, j, y, u;
        if (R.isSuccess)
            if (((d = R.data) == null ? void 0 : d.status) == "Success") {
                p(),
                vA.set("rtokn", (f = (H = R.data) == null ? void 0 : H.result) == null ? void 0 : f.token, {
                    expires: 30,
                    secure: !0,
                    path: "/",
                    sameSite: "strict"
                });
                const B = (O = R.data) == null ? void 0 : O.result;
                B.ml = 6,
                B.tl = 10,
                G(B);
                const S = h.get("callbackUrl");
                E(S || "/ticket")
            } else
                ((K = (g = R.data) == null ? void 0 : g.result) == null ? void 0 : K.msg) == "ATTEMPT EXCEEDED" && I("email"),
                n({
                    title: ((j = R.data) == null ? void 0 : j.message) + ". Attempt " + ((u = (y = R.data) == null ? void 0 : y.result) == null ? void 0 : u.attempt),
                    status: "error",
                    duration: "1500"
                })
    }
    , [R.isSuccess]),
    c.jsxs(c.Fragment, {
        children: [c.jsx(T, {
            w: "full",
            h: "80vh",
            children: c.jsx(DA, {
                w: "full",
                p: "5px",
                pt: ["10%", "5%"],
                children: c.jsxs(T, {
                    bg: "rgba(255,255,255,0.93)",
                    w: "100%",
                    maxW: "450px",
                    p: "10",
                    px: "7",
                    borderRadius: "lg",
                    shadow: "lg",
                    position: "relative",
                    children: [c.jsx(VA, {
                        onClick: () => E("/"),
                        icon: c.jsx(Ot, {}),
                        fontSize: "1.5rem",
                        variant: "ghost",
                        position: "absolute",
                        left: "30px",
                        colorScheme: "red"
                    }), c.jsx(M, {
                        textAlign: "center",
                        borderRadius: "full",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        color: "gray.500",
                        children: "LOGIN"
                    }), c.jsx(oA, {
                        my: "40px"
                    }), A == "email" ? c.jsxs(c.Fragment, {
                        children: [c.jsxs(tA, {
                            isRequired: !0,
                            children: [c.jsx(IA, {
                                children: "Company Email ID without domain."
                            }), c.jsxs(Kt, {
                                children: [c.jsx(pA, {
                                    size: "lg",
                                    bg: "white",
                                    ref: i,
                                    maxLength: 50,
                                    borderEndRadius: "0px",
                                    borderEnd: "none"
                                }), c.jsx(Ge, {
                                    size: "lg",
                                    borderStartRadius: "0px",
                                    minW: "165px",
                                    w: "165px",
                                    px: "0px",
                                    borderStart: "none",
                                    ref: D,
                                    children: c.jsx("option", {
                                        value: "@diageo.com",
                                        children: "@diageo.com"
                                    })
                                })]
                            }), c.jsx(nc, {
                                children: "You will receive OTP, after continue"
                            })]
                        }), c.jsx(U, {
                            py: "30px",
                            textAlign: "center",
                            children: c.jsx(_, {
                                variant: "solid",
                                size: "lg",
                                rightIcon: c.jsx(Qc, {}),
                                colorScheme: "red",
                                onClick: () => m(),
                                isLoading: a.isPending,
                                children: "Continue"
                            })
                        })]
                    }) : c.jsxs(c.Fragment, {
                        children: [c.jsxs(tA, {
                            children: [c.jsx(IA, {
                                children: "Enter OTP."
                            }), c.jsxs(TA, {
                                children: [c.jsx(nA, {}), c.jsxs(at, {
                                    otp: !0,
                                    size: "lg",
                                    value: o,
                                    onChange: d => N(d),
                                    children: [c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    })]
                                }), c.jsx(nA, {})]
                            }), c.jsx(nc, {
                                textAlign: "center",
                                children: "OTP sent to registered mobile number."
                            })]
                        }), c.jsx(ws, {
                            handleResend: x,
                            isLoading: r.isPending
                        }), c.jsxs(U, {
                            py: "30px",
                            textAlign: "center",
                            children: [c.jsx(_, {
                                variant: "solid",
                                size: "lg",
                                rightIcon: c.jsx(Qc, {}),
                                colorScheme: "red",
                                onClick: () => L(),
                                isLoading: R.isPending,
                                children: "Validate"
                            }), c.jsx(_, {
                                colorScheme: "red",
                                variant: "ghost",
                                onClick: () => I("email"),
                                children: "Cancel"
                            })]
                        })]
                    }), c.jsx(T, {
                        w: "100%",
                        pt: "2",
                        children: c.jsx(DA, {
                            children: c.jsx(fA, {
                                src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/diageoLogo.svg",
                                alt: "",
                                width: 200,
                                height: 90
                            })
                        })
                    })]
                })
            })
        }), c.jsx(T, {
            backgroundImage: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/stadium-new.png",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            top: "0px",
            left: "0px",
            w: "full",
            h: "100vh",
            zIndex: -1
        })]
    })
}
  , ws = t => {
    const A = X.c(14)
      , {handleResend: I, isLoading: e} = t
      , [s,o] = P.useState(30);
    let N, i;
    A[0] !== s ? (N = () => {
        const E = setInterval( () => {
            o(_s),
            s <= 0 && clearInterval(E)
        }
        , 1e3);
        return () => clearInterval(E)
    }
    ,
    i = [s],
    A[0] = s,
    A[1] = N,
    A[2] = i) : (N = A[1],
    i = A[2]),
    P.useEffect(N, i);
    let D;
    A[3] !== I ? (D = () => {
        I(),
        o(60)
    }
    ,
    A[3] = I,
    A[4] = D) : D = A[4];
    const n = D;
    let a, r;
    A[5] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(nA, {}),
    r = c.jsx(M, {
        children: "Resend OTP "
    }),
    A[5] = a,
    A[6] = r) : (a = A[5],
    r = A[6]);
    let R;
    A[7] !== n || A[8] !== s || A[9] !== e ? (R = s > 0 ? c.jsxs(M, {
        children: ["in ", s, "sec"]
    }) : c.jsx(_, {
        variant: "ghost",
        size: "sm",
        colorScheme: "blue",
        onClick: () => n(),
        isLoading: e,
        children: "Click Here"
    }),
    A[7] = n,
    A[8] = s,
    A[9] = e,
    A[10] = R) : R = A[10];
    let p;
    A[11] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(nA, {}),
    A[11] = p) : p = A[11];
    let l;
    return A[12] !== R ? (l = c.jsxs(TA, {
        py: "3",
        color: "gray.600",
        children: [a, r, R, p]
    }),
    A[12] = R,
    A[13] = l) : l = A[13],
    l
}
;
function _s(t) {
    return t - 1
}
const Js = () => {
    const t = "Department"
      , [A,I] = P.useState("mobile")
      , [e,s] = P.useState("")
      , [o,N] = P.useState("")
      , i = P.useRef()
      , D = WA()
      , n = hA({
        mutationFn: Ct
    })
      , a = hA({
        mutationFn: yt
    })
      , r = hA({
        mutationFn: bt
    })
      , R = Rc(L => L.clearCart)
      , p = JA(L => L.delDetail)
      , l = kA()
      , {addDetail: E} = JA()
      , [G] = ut();
    P.useEffect( () => {
        R(),
        p(),
        vA.remove("rtokn"),
        G.get("iosNewUser") == "true" && localStorage.setItem("iosNewUser", "true")
    }
    , []),
    P.useEffect( () => {
        var L, d, H;
        n.isSuccess && (((L = n.data) == null ? void 0 : L.status) == "Success" ? (s((d = i.current) == null ? void 0 : d.value),
        N(""),
        I("otp")) : D({
            title: (H = n.data) == null ? void 0 : H.message,
            status: "error",
            duration: "1500"
        }))
    }
    , [n.isSuccess]),
    P.useEffect( () => {
        var L, d;
        a.isSuccess && (((L = a.data) == null ? void 0 : L.status) == "Success" ? D({
            title: "OTP Sent.",
            status: "success",
            duration: "1500"
        }) : D({
            title: (d = a.data) == null ? void 0 : d.message,
            status: "error",
            duration: "1500"
        }))
    }
    , [a.isSuccess]);
    const h = async () => {
        var d, H;
        if (((d = i.current) == null ? void 0 : d.value.length) != 10) {
            D({
                title: "Enter Valid Mobile No.",
                status: "error",
                duration: "1500"
            });
            return
        }
        const L = {
            utype: gA(t),
            mobile: gA((H = i.current) == null ? void 0 : H.value),
            email: ""
        };
        n.mutate(L)
    }
      , m = async () => {
        if (e.length != 10) {
            D({
                title: "Enter Valid Mobile No.",
                status: "error",
                duration: "1500"
            });
            return
        }
        const L = {
            utype: gA(t),
            mobile: gA(e),
            email: ""
        };
        a.mutate(L)
    }
      , x = () => {
        try {
            if (o.length != 5) {
                D({
                    title: "Login Failed.",
                    status: "error",
                    duration: "1500"
                });
                return
            } else {
                const L = {
                    utype: gA(t),
                    mobile: gA(e),
                    email: "",
                    otp: gA(o)
                };
                r.mutate(L)
            }
        } catch {}
    }
    ;
    return P.useEffect( () => {
        var L, d, H, f, O, g, K, j, y;
        if (r.isSuccess)
            if (((L = r.data) == null ? void 0 : L.status) == "Success") {
                R(),
                vA.set("rtokn", (H = (d = r.data) == null ? void 0 : d.result) == null ? void 0 : H.token, {
                    expires: 30,
                    secure: !0,
                    path: "/",
                    sameSite: "strict"
                });
                const u = (f = r.data) == null ? void 0 : f.result;
                u.ml = 6,
                u.tl = 10,
                E(u);
                const B = G.get("callbackUrl");
                l(B || "/ticket")
            } else
                ((g = (O = r.data) == null ? void 0 : O.result) == null ? void 0 : g.msg) == "ATTEMPT EXCEEDED" && I("mobile"),
                D({
                    title: ((K = r.data) == null ? void 0 : K.message) + ". Attempt " + ((y = (j = r.data) == null ? void 0 : j.result) == null ? void 0 : y.attempt),
                    status: "error",
                    duration: "1500"
                })
    }
    , [r.isSuccess]),
    c.jsxs(c.Fragment, {
        children: [c.jsxs(T, {
            w: "full",
            h: "70vh",
            children: [c.jsx(DA, {
                py: "1",
                display: ["none", "flex"],
                children: c.jsx(fA, {
                    borderRadius: "10px",
                    w: "80%",
                    src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/navi/v2/navi-page.png",
                    alt: ""
                })
            }), c.jsx(DA, {
                p: "1",
                display: ["flex", "none"],
                children: c.jsx(fA, {
                    borderRadius: "10px",
                    w: "100%",
                    src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/navi/v2/navi-page-m.png",
                    alt: ""
                })
            }), c.jsx(DA, {
                w: "full",
                p: ["5px", "20px"],
                pt: ["5px", "5px"],
                children: c.jsxs(T, {
                    bg: "rgba(255,255,255,0.93)",
                    w: "100%",
                    maxW: "400px",
                    p: "10",
                    pt: "4",
                    px: [5, 10],
                    borderRadius: "lg",
                    shadow: "lg",
                    position: "relative",
                    children: [c.jsx(VA, {
                        onClick: () => l("/"),
                        icon: c.jsx(Ot, {}),
                        fontSize: "1.5rem",
                        variant: "ghost",
                        position: "absolute",
                        left: "30px",
                        colorScheme: "red"
                    }), c.jsx(M, {
                        textAlign: "center",
                        borderRadius: "full",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        color: "gray.500",
                        children: "LOGIN"
                    }), c.jsx(oA, {
                        my: "20px"
                    }), A == "mobile" ? c.jsxs(c.Fragment, {
                        children: [c.jsxs(tA, {
                            children: [c.jsx(IA, {
                                children: "Enter Mobile No."
                            }), c.jsxs(Kt, {
                                children: [c.jsx(Ft, {
                                    height: "48px",
                                    children: "+91"
                                }), c.jsx(pA, {
                                    size: "lg",
                                    bg: "white",
                                    type: "tel",
                                    ref: i,
                                    placeholder: "Mobile No.",
                                    maxLength: 10,
                                    fontSize: "1.3rem",
                                    letterSpacing: "5px",
                                    pattern: "[1-9]{1}[0-9]{9}",
                                    autoComplete: "off",
                                    onPaste: L => {
                                        L.preventDefault()
                                    }
                                    ,
                                    onKeyDown: L => {
                                        !/[0-9]/.test(L.key) && L.key !== "Backspace" && L.preventDefault()
                                    }
                                })]
                            }), c.jsx(nc, {
                                children: "You will receive OTP, after continue"
                            })]
                        }), c.jsx(U, {
                            py: "30px",
                            textAlign: "center",
                            children: c.jsx(_, {
                                variant: "solid",
                                size: "lg",
                                rightIcon: c.jsx(Qc, {}),
                                colorScheme: "red",
                                onClick: () => h(),
                                isLoading: n.isPending,
                                children: "Continue"
                            })
                        })]
                    }) : c.jsxs(c.Fragment, {
                        children: [c.jsxs(tA, {
                            children: [c.jsx(IA, {
                                children: "Enter OTP."
                            }), c.jsxs(TA, {
                                children: [c.jsx(nA, {}), c.jsxs(at, {
                                    otp: !0,
                                    size: "lg",
                                    value: o,
                                    onChange: L => N(L),
                                    children: [c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    })]
                                }), c.jsx(nA, {})]
                            }), c.jsxs(nc, {
                                textAlign: "center",
                                children: ["OTP sent to +91 ", e]
                            })]
                        }), c.jsx(Vs, {
                            handleResend: m,
                            isLoading: a.isPending
                        }), c.jsxs(U, {
                            py: "30px",
                            textAlign: "center",
                            children: [c.jsx(_, {
                                variant: "solid",
                                size: "lg",
                                rightIcon: c.jsx(Qc, {}),
                                colorScheme: "red",
                                onClick: () => x(),
                                isLoading: r.isPending,
                                children: "Validate"
                            }), c.jsx(_, {
                                colorScheme: "red",
                                variant: "ghost",
                                onClick: () => I("mobile"),
                                children: "Cancel"
                            })]
                        })]
                    }), c.jsx(T, {
                        w: "100%",
                        pt: "2",
                        children: c.jsx(DA, {
                            children: c.jsx(fA, {
                                src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/navi/navi-upi-logo.svg",
                                alt: "",
                                width: "280px"
                            })
                        })
                    })]
                })
            })]
        }), c.jsx(T, {
            backgroundImage: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/stadium-new.png",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
            w: "full",
            h: "100vh",
            zIndex: -1
        })]
    })
}
  , Vs = t => {
    const A = X.c(14)
      , {handleResend: I, isLoading: e} = t
      , [s,o] = P.useState(30);
    let N, i;
    A[0] !== s ? (N = () => {
        const E = setInterval( () => {
            o(vs),
            s <= 0 && clearInterval(E)
        }
        , 1e3);
        return () => clearInterval(E)
    }
    ,
    i = [s],
    A[0] = s,
    A[1] = N,
    A[2] = i) : (N = A[1],
    i = A[2]),
    P.useEffect(N, i);
    let D;
    A[3] !== I ? (D = () => {
        I(),
        o(60)
    }
    ,
    A[3] = I,
    A[4] = D) : D = A[4];
    const n = D;
    let a, r;
    A[5] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(nA, {}),
    r = c.jsx(M, {
        children: "Resend OTP "
    }),
    A[5] = a,
    A[6] = r) : (a = A[5],
    r = A[6]);
    let R;
    A[7] !== n || A[8] !== s || A[9] !== e ? (R = s > 0 ? c.jsxs(M, {
        children: ["in ", s, "sec"]
    }) : c.jsx(_, {
        variant: "ghost",
        size: "sm",
        colorScheme: "blue",
        onClick: () => n(),
        isLoading: e,
        children: "Click Here"
    }),
    A[7] = n,
    A[8] = s,
    A[9] = e,
    A[10] = R) : R = A[10];
    let p;
    A[11] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(nA, {}),
    A[11] = p) : p = A[11];
    let l;
    return A[12] !== R ? (l = c.jsxs(TA, {
        py: "3",
        color: "gray.600",
        children: [a, r, R, p]
    }),
    A[12] = R,
    A[13] = l) : l = A[13],
    l
}
;
function vs(t) {
    return t - 1
}
const ks = [{
    pc: "110001",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110002",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110003",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110004",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110005",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110006",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110007",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110008",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110009",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110010",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110011",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110012",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110013",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110014",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110015",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110016",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110017",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110018",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110019",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110020",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110021",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110022",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110023",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110024",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110025",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110026",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110027",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110028",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110029",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110030",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110031",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110032",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110033",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110034",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110035",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110036",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110037",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110038",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110039",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110040",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110041",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110042",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110043",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110044",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110045",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110046",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110047",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110048",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110049",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110050",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110051",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110052",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110053",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110054",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110055",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110056",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110057",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110058",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110059",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110060",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110061",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110062",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110063",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110064",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110065",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110066",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110067",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110068",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110069",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110070",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110071",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110072",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110073",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110074",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110075",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110076",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110077",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110078",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110080",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110081",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110082",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110083",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110084",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110085",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110086",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110087",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110088",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110089",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110090",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110091",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110092",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110093",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110094",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110095",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110096",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110097",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110110",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110301",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "110505",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "116019",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "120001",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "120002",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121001",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121002",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121003",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121004",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121005",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121006",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121007",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121008",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121009",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121010",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121012",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121013",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121101",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121102",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "121105",
    ct: "FARIDABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122001",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122002",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122003",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122004",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122005",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122006",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122007",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122008",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122009",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122010",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122011",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122012",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122015",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122016",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122017",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122018",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122022",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122026",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122032",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122033",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122050",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122051",
    ct: "MANESAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122052",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122101",
    ct: "MANESAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122102",
    ct: "SOHNA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122103",
    ct: "SOHNA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122105",
    ct: "DHARUHERA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122106",
    ct: "DHARUHERA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122107",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122413",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122414",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122503",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122504",
    ct: "DHARUHERA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122505",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "122506",
    ct: "GURGAON",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "123029",
    ct: "NARNAUL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "123101",
    ct: "REWARI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "123106",
    ct: "DHARUHERA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "123401",
    ct: "REWARI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "123414",
    ct: "REWARI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "123501",
    ct: "REWARI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "124021",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "124103",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "124106",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "124112",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "124113",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "124142",
    ct: "JHAJJAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "124201",
    ct: "JHAJJAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "124501",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "124507",
    ct: "BAHADURGARH",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125001",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125002",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125003",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125004",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125005",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125006",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125011",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125033",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125039",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125046",
    ct: "BHIWANI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125047",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125050",
    ct: "FATEHABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125051",
    ct: "HANSI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125052",
    ct: "FATEHABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125053",
    ct: "FATEHABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125055",
    ct: "SIRSA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125075",
    ct: "SIRSA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125076",
    ct: "SIRSA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125077",
    ct: "SIRSA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125102",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125111",
    ct: "FATEHABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125112",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125120",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125121",
    ct: "HISSAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125133",
    ct: "FATEHABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "125201",
    ct: "SIRSA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "126008",
    ct: "FATEHABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "126101",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "126102",
    ct: "BHIWANI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "126104",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "126112",
    ct: "JIND",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "126115",
    ct: "JIND",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "126116",
    ct: "JIND",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "127021",
    ct: "BHIWANI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "127028",
    ct: "BHIWANI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "127030",
    ct: "BHIWANI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "127040",
    ct: "BHIWANI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "127207",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "127306",
    ct: "CHARKHI DADRI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "127308",
    ct: "ROHTAK",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131001",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131002",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131021",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131023",
    ct: "KUNDLI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131027",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131028",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131029",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131038",
    ct: "PANIPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131101",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131103",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131301",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "131402",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132001",
    ct: "KARNAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132021",
    ct: "SONEPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132022",
    ct: "KARNAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132023",
    ct: "KARNAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132024",
    ct: "KARNAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132036",
    ct: "KURNOOL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132039",
    ct: "KARNAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132041",
    ct: "KARNAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132101",
    ct: "PANIPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132103",
    ct: "PANIPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132104",
    ct: "KARNAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132105",
    ct: "PANIPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132106",
    ct: "PANIPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132107",
    ct: "PANIPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132113",
    ct: "DADRI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132114",
    ct: "PANIPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132116",
    ct: "KARNAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132140",
    ct: "PANIPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "132145",
    ct: "PANIPAT",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133001",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133002",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133003",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133004",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133005",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133102",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133103",
    ct: "SAHA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133104",
    ct: "SAHA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133201",
    ct: "BARARA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133203",
    ct: "SAHA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "133204",
    ct: "YAMUNA NAGAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134001",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134002",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134003",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134004",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134005",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134007",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134101",
    ct: "PINJORE",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134104",
    ct: "PINJORE",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134105",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134107",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134109",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134111",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134112",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134113",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134114",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134116",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134117",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134118",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134126",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134202",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134203",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "134204",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "135001",
    ct: "YAMUNA NAGAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "135002",
    ct: "YAMUNA NAGAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "135003",
    ct: "YAMUNA NAGAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "135102",
    ct: "YAMUNA NAGAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "135133",
    ct: "JAGADHARI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136020",
    ct: "KAITHAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136027",
    ct: "YAMUNA NAGAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136034",
    ct: "FATEHABAD",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136117",
    ct: "KAITHAL",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136118",
    ct: "KURUKSHETRA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136119",
    ct: "PIPLI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136128",
    ct: "KURUKSHETRA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136129",
    ct: "KURUKSHETRA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136131",
    ct: "KURUKSHETRA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136132",
    ct: "LADWA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "136135",
    ct: "KURUKSHETRA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "140118",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "140125",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "140201",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "140501",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "140507",
    ct: "RAJPURA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "140604",
    ct: "MOHALI",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "141401",
    ct: "CHANDIGARH",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "146416",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "147111",
    ct: "PATIALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "160102",
    ct: "CHANDIGARH",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "160104",
    ct: "PANCHKULA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173001",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173021",
    ct: "NAHAN",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173025",
    ct: "PAONTA SAHIB",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173030",
    ct: "YAMUNA NAGAR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173201",
    ct: "SOLAN",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173202",
    ct: "DHARAMPUR",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173204",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173208",
    ct: "SOLAN",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173210",
    ct: "SOLAN",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173211",
    ct: "SOLAN",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173212",
    ct: "SOLAN",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "173233",
    ct: "SOLAN",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "174303",
    ct: "UNA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "174307",
    ct: "UNA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "174315",
    ct: "UNA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "176041",
    ct: "HAMIRPUR (HP)",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "176052",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "176063",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "176206",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "177001",
    ct: "HAMIRPUR (HP)",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "177005",
    ct: "HAMIRPUR (HP)",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "177025",
    ct: "HAMIRPUR (HP)",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "177108",
    ct: "KANGRA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "177113",
    ct: "AMBALA",
    st: "HARYANA",
    co: "INDIA"
}, {
    pc: "185151",
    ct: "DELHI",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "201102",
    ct: "GHAZIABAD",
    st: "DELHI",
    co: "INDIA"
}, {
    pc: "343002",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "348220",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360001",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360002",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360003",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360004",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360005",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360006",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360007",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360021",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360024",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360034",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360050",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360311",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360360",
    ct: "JETPUR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360370",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360375",
    ct: "JETPUR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360380",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360410",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360490",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360530",
    ct: "JAMNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360545",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360575",
    ct: "PORBUNDER",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360576",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360577",
    ct: "PORBUNDER",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360578",
    ct: "PORBUNDER",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "360579",
    ct: "PORBUNDER",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361001",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361002",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361003",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361004",
    ct: "JAMNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361005",
    ct: "JAMNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361006",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361007",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361008",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361010",
    ct: "JAMNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361140",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361142",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361150",
    ct: "JAMNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361160",
    ct: "JAMNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361210",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361305",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361335",
    ct: "DWARKA -GJ",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361345",
    ct: "MITHAPUR(GJ)",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361347",
    ct: "MITHAPUR(BH)",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "361350",
    ct: "OKHA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362001",
    ct: "JUNAGADH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362002",
    ct: "JUNAGADH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362003",
    ct: "JUNAGADH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362004",
    ct: "JUNAGADH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362005",
    ct: "JUNAGADH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362015",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362130",
    ct: "JUNAGADH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362150",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362215",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362220",
    ct: "KESHOD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362225",
    ct: "JUNAGADH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362250",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362265",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362266",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362267",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362268",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362269",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362275",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362276",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362520",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362610",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362630",
    ct: "JUNAGADH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362715",
    ct: "VERAVAL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "362720",
    ct: "JUNAGADH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363001",
    ct: "SURENDRANAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363002",
    ct: "SURENDRANAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363005",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "363030",
    ct: "SURENDRANAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363035",
    ct: "SURENDRANAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363040",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363310",
    ct: "SURENDRANAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363330",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363421",
    ct: "SURENDRANAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363530",
    ct: "SURENDRANAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363610",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363621",
    ct: "WANKANER",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363622",
    ct: "WANKANER",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363630",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363641",
    ct: "MORBI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363642",
    ct: "MORBI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "363646",
    ct: "MORBI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364001",
    ct: "BHAVNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364002",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364003",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364004",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364005",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364006",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364140",
    ct: "BHAVNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364240",
    ct: "BHAVNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364270",
    ct: "BHAVNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364290",
    ct: "BHAVNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364515",
    ct: "AMRELI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "364710",
    ct: "RAJKOT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "365220",
    ct: "AMRELI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "365560",
    ct: "AMRELI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "365601",
    ct: "AMRELI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370001",
    ct: "BHUJ",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370015",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370020",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370030",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370110",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370130",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370140",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370201",
    ct: "GANDHIDHAM",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370203",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370205",
    ct: "GANDHIDHAM",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370210",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370230",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370240",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370410",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370415",
    ct: "MUNDRA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370421",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370427",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370465",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370485",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370601",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370615",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "370627",
    ct: "KUTCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380001",
    ct: "ANAND",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380002",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380003",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380004",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380005",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380006",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380007",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380008",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380009",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380010",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380013",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380014",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380015",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380016",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380018",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380019",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380021",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380022",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380023",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380024",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380025",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380026",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380027",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380028",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380038",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380050",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380051",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380052",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380053",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380054",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380055",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380056",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380058",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380059",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380060",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380061",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380063",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380330",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "380481",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382001",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382002",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382003",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382004",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382005",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382006",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382007",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382008",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382009",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382010",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382011",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382012",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382013",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382014",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382015",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382016",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382017",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382018",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382019",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382020",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382021",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382022",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382023",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382024",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382025",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382026",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382027",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382028",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382029",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382030",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382041",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382042",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382044",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382045",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382110",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382120",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382150",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382170",
    ct: "SANAND",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382210",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382213",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382220",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382260",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382305",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382315",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382316",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382320",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382321",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382325",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382330",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382340",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382345",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382346",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382350",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382355",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382405",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382410",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382415",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382418",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382421",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382422",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382423",
    ct: "KALOL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382424",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382425",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382427",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382428",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382430",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382433",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382435",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382440",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382443",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382445",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382449",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382450",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382455",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382460",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382463",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382465",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382470",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382475",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382480",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382481",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382610",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382620",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382630",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382640",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382650",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382705",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382715",
    ct: "KADI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382721",
    ct: "SANTEJ",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382722",
    ct: "KALOL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382723",
    ct: "KALOL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382724",
    ct: "KALOL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382725",
    ct: "KALOL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382729",
    ct: "GANDHINAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382735",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382740",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382825",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382830",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382845",
    ct: "MANSA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "382870",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383001",
    ct: "HIMMATNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383004",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383006",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383009",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383205",
    ct: "HIMMATNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383220",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383235",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383315",
    ct: "MODASA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383335",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383341",
    ct: "KALOL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383354",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "383430",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384001",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384002",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384003",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384151",
    ct: "SIDDHPUR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384170",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384205",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384210",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384240",
    ct: "PATAN",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384245",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384265",
    ct: "PATAN",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "384315",
    ct: "VISNAGAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385001",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385002",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385110",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385210",
    ct: "CHHAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385310",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385320",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385330",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385340",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385505",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385535",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385545",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385555",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "385565",
    ct: "MEHSANA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "387001",
    ct: "KHEDA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "387002",
    ct: "NADIAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "387130",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "387355",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "387411",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "387810",
    ct: "AHMEDABAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388001",
    ct: "ANAND",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388110",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388120",
    ct: "ANAND",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388121",
    ct: "ANAND",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388220",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388255",
    ct: "KHEDA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388325",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388450",
    ct: "ANAND",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388540",
    ct: "ANAND",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388620",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "388630",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389001",
    ct: "GODHRA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389140",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389151",
    ct: "DAHOD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389155",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389160",
    ct: "DAHOD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389170",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389180",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389230",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389350",
    ct: "HALOL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389351",
    ct: "HALOL",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "389380",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390001",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390002",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390003",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390004",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390005",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390006",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390007",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390008",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390009",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390010",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390011",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390012",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390013",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390014",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390015",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390016",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390017",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390018",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390019",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390020",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390021",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390022",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390023",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390024",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390025",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "390113",
    ct: "BHARUCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391101",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391220",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391240",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391243",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391340",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391350",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391410",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391430",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391440",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391740",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391750",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391760",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391775",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "391780",
    ct: "BARODA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "392001",
    ct: "BHARUCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "392002",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "392005",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "392011",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "392012",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "392015",
    ct: "BHARUCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "392130",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "392150",
    ct: "BHARUCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "393001",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "393002",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "393010",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "393110",
    ct: "BHARUCH",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "393125",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "393145",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394101",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394105",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394107",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394110",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394111",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394116",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394120",
    ct: "ANKLESHWAR",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394125",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394130",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394140",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394150",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394155",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394160",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394163",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394170",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394180",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394185",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394190",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394210",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394220",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394221",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394230",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394235",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394240",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394245",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394248",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394250",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394270",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394305",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394310",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394315",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394317",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394320",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394325",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394326",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394327",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394330",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394335",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394340",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394345",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394350",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394352",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394355",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394405",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394410",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394421",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394430",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394440",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394445",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394510",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394515",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394516",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394517",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394518",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394520",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394530",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394540",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394550",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394601",
    ct: "BARDOLI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394602",
    ct: "BARDOLI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394620",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394650",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "394660",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395001",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395002",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395003",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395004",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395005",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395006",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395007",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395008",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395009",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395010",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395011",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395012",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395013",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395017",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395023",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "395101",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396001",
    ct: "VALSAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396002",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396020",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396030",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396035",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396091",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396105",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396125",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396150",
    ct: "VALSAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396155",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396170",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396171",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396180",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396185",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396191",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396193",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396195",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396197",
    ct: "VASAD",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396210",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396215",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396220",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396230",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396235",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396240",
    ct: "VAPI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396321",
    ct: "BILIMORA",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396424",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396427",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396445",
    ct: "NAVSARI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396510",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "396521",
    ct: "NAVSARI",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "400001",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400002",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400003",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400004",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400005",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400006",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400007",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400008",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400009",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400010",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400011",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400012",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400013",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400014",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400015",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400016",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400017",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400018",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400019",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400020",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400021",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400022",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400023",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400024",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400025",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400026",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400027",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400028",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400029",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400030",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400031",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400032",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400033",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400034",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400035",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400036",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400037",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400038",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400039",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400042",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400043",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400049",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400050",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400051",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400052",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400053",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400054",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400055",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400056",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400057",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400058",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400059",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400060",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400061",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400062",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400063",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400064",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400065",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400066",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400067",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400068",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400069",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400070",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400071",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400072",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400074",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400075",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400076",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400077",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400078",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400079",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400080",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400081",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400082",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400083",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400084",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400085",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400086",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400087",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400088",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400089",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400090",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400091",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400092",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400093",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400094",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400095",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400096",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400097",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400098",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400099",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400101",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400102",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400103",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400104",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400107",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400210",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400401",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400406",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400601",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400602",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400603",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400604",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400605",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400606",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400607",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400608",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400610",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400612",
    ct: "MUMBRA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400614",
    ct: "VASHI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400615",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400701",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400702",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400703",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400704",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400705",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400706",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400707",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400708",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400709",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "400710",
    ct: "VASHI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401101",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401102",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401104",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401105",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401107",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401201",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401202",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401203",
    ct: "VASAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401204",
    ct: "BHIWANDI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401205",
    ct: "VASAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401206",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401207",
    ct: "VASAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401208",
    ct: "PALGHAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401209",
    ct: "PALGHAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401210",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401301",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401302",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401303",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401304",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401305",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401401",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401403",
    ct: "PALGHAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401404",
    ct: "PALGHAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401501",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401503",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401504",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401506",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401601",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401602",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401603",
    ct: "PALGHAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401606",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401608",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "401701",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402103",
    ct: "RAIGARH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402104",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402107",
    ct: "PEN",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402108",
    ct: "ALIBAUG",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402109",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402110",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402116",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402201",
    ct: "ALIBAUG",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402202",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402204",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402209",
    ct: "ALIBAUG",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402301",
    ct: "ROHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402303",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402304",
    ct: "PANVEL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "402401",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "403001",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403002",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403003",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403004",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403005",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403006",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403101",
    ct: "CALANGUTE",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403102",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403103",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403106",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403107",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403108",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403109",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403110",
    ct: "OLD GOA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403114",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403115",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403201",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403202",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403203",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403204",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403206",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403401",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403402",
    ct: "OLD GOA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403403",
    ct: "BICHALAM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403404",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403406",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403407",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403408",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403409",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403501",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403502",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403503",
    ct: "BICHOLIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403504",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403505",
    ct: "BICHOLIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403506",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403507",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403508",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403509",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403510",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403511",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403512",
    ct: "SOLAPUR",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403513",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403515",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403516",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403517",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403518",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403519",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403521",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403523",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403526",
    ct: "MAPUSA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403527",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403529",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403601",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403602",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403603",
    ct: "SALCETE",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403604",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403701",
    ct: "SALCETE",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403702",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403703",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403704",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403705",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403706",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403707",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403708",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403710",
    ct: "ZUARI NAGAR",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403711",
    ct: "ZUARI NAGAR",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403712",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403713",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403714",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403715",
    ct: "SALCETE",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403716",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403717",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403718",
    ct: "PONDA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403719",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403721",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403722",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403724",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403726",
    ct: "ZUARI NAGAR",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403727",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403729",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403731",
    ct: "MARGAO",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403801",
    ct: "ZUARI NAGAR",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403802",
    ct: "VASCO DA GAMA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403803",
    ct: "PANJIM",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403804",
    ct: "VASCO DA GAMA",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "403806",
    ct: "ZUARI NAGAR",
    st: "GOA",
    co: "INDIA"
}, {
    pc: "410005",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410062",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410101",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410201",
    ct: "PANVEL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410202",
    ct: "VASHI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410203",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410205",
    ct: "PALI (MH)",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410206",
    ct: "RAIGAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410207",
    ct: "PANVEL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410208",
    ct: "TALOJA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410209",
    ct: "VASHI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410210",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410218",
    ct: "KALAMBOLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410220",
    ct: "PANVEL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410221",
    ct: "PANVEL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410222",
    ct: "PANVEL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410301",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410302",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410401",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410402",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410403",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410405",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410406",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410501",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410502",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410503",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410504",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410505",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410506",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410507",
    ct: "TALEGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410508",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410509",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410510",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410511",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410512",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410513",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410515",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410516",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "410708",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411001",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411002",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411003",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411004",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411005",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411006",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411007",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411008",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411009",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411011",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411012",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411013",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411014",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411015",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411016",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411017",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411018",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411019",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411020",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411021",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411022",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411023",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411024",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411025",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411026",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411027",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411028",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411029",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411030",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411031",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411032",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411033",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411034",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411035",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411036",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411037",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411038",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411039",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411040",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411041",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411042",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411043",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411044",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411045",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411046",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411047",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411048",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411051",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411052",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411053",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411057",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411058",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411060",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411061",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411062",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "411208",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412042",
    ct: "PIRANGUT",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412101",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412102",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412103",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412104",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412105",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412106",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412107",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412108",
    ct: "PIRANGUT",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412109",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412110",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412111",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412112",
    ct: "PIRANGUT",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412114",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412115",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412201",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412202",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412203",
    ct: "DAUND",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412204",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412205",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412206",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412207",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412208",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412209",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412210",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412211",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412212",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412213",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412214",
    ct: "DAUND",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412215",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412216",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412218",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412219",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412220",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412301",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412303",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412304",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412305",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412306",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412307",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412308",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412311",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412312",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412401",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412402",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412403",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412404",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412405",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412406",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412408",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412409",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412410",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412411",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412412",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412501",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412801",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412802",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412803",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "412805",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413001",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413002",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413003",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413004",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413005",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413007",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413019",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413101",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413102",
    ct: "BARAMATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413103",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413104",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413105",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413106",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413109",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413110",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413111",
    ct: "BARAMATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413113",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413114",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413115",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413116",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413120",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413130",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413132",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413133",
    ct: "BARAMATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413201",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413203",
    ct: "AKLUJ",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413208",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413211",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413213",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413216",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413228",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413255",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413270",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413302",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413304",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413305",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413307",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413401",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413402",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413404",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413411",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413413",
    ct: "BARSI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413501",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413502",
    ct: "OSMANABAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413503",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413507",
    ct: "OSMANABAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413512",
    ct: "LATUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413513",
    ct: "LATUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413515",
    ct: "LATUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413517",
    ct: "LATUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413520",
    ct: "LATUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413521",
    ct: "LATUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413531",
    ct: "LATUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413601",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413606",
    ct: "OMERGA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413608",
    ct: "OMERGA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413623",
    ct: "SOLAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413701",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413702",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413705",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413709",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413717",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413726",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413736",
    ct: "LONI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413801",
    ct: "ZUARI NAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "413802",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414001",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414002",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414003",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414004",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414005",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414006",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414011",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414102",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414106",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414110",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414111",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414202",
    ct: "BEED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414301",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414302",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414402",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414403",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414502",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "414603",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415001",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415002",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415003",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415004",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415012",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415105",
    ct: "KARAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415109",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415110",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415111",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415124",
    ct: "KARAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415206",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415301",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415304",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415305",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415307",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415309",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415311",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415403",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415404",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415408",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415409",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415410",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415413",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415501",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415506",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415508",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415509",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415511",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415515",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415521",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415523",
    ct: "SATARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415539",
    ct: "KARAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415605",
    ct: "CHIPLUN",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415612",
    ct: "RATNAGIRI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415613",
    ct: "RATNAGIRI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415639",
    ct: "CHIPLUN",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415709",
    ct: "KHED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415712",
    ct: "RATNAGIRI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415724",
    ct: "RATNAGIRI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "415801",
    ct: "RATNAGIRI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416001",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416002",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416003",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416004",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416005",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416006",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416007",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416008",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416009",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416010",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416011",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416012",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416013",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416015",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416019",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416101",
    ct: "JAISINGHPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416103",
    ct: "JAISINGHPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416109",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416110",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416112",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416113",
    ct: "WARNA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416114",
    ct: "JAISINGHPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416115",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416116",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416119",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416122",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416123",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416137",
    ct: "GADHINGLAJ",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416144",
    ct: "JAISINGHPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416201",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416203",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416204",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416205",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416209",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416211",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416216",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416220",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416229",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416230",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416234",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416236",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416301",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416303",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416308",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416310",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416312",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416314",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416404",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416405",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416406",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416410",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416412",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416414",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416415",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416416",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416419",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416435",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416436",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416437",
    ct: "SANGLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416502",
    ct: "GADHINGLAJ",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416508",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416509",
    ct: "KOLHAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416519",
    ct: "KANKAVLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416536",
    ct: "GADHINGLAJ",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416602",
    ct: "KANKAVLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416603",
    ct: "KANKAVLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "416810",
    ct: "KANKAVLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421001",
    ct: "ULAHASNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421002",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421003",
    ct: "ULAHASNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421004",
    ct: "ULAHASNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421005",
    ct: "ULAHASNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421101",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421102",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421201",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421202",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421203",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421204",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421301",
    ct: "KALYAN",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421302",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421303",
    ct: "VASAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421304",
    ct: "KALYAN",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421305",
    ct: "BHIWANDI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421306",
    ct: "KALYAN",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421308",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421311",
    ct: "BHIWANDI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421312",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421401",
    ct: "MURBOD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421501",
    ct: "AMBERNATH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421502",
    ct: "AMBERNATH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421503",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421504",
    ct: "AMBERNATH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421505",
    ct: "AMBERNATH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421506",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421601",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421602",
    ct: "SHAHAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421603",
    ct: "SHAHAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421604",
    ct: "MUMBAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "421605",
    ct: "THANE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422001",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422002",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422003",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422004",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422005",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422006",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422007",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422008",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422009",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422010",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422011",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422012",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422013",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422101",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422102",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422103",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422104",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422105",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422112",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422113",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422202",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422206",
    ct: "NIPHAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422207",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422209",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422212",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422221",
    ct: "NIPHAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422303",
    ct: "NIPHAD",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422306",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422401",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422403",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422501",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422502",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422601",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "422605",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423101",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423102",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423104",
    ct: "LONI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423105",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423107",
    ct: "SHIRDI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423109",
    ct: "SHIRDI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423203",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423301",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423401",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423501",
    ct: "NASIK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423601",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423701",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "423702",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424001",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424002",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424003",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424004",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424005",
    ct: "DHULE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424006",
    ct: "DHULE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424101",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424201",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424204",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424206",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424301",
    ct: "DHULE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "424304",
    ct: "DHULE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425001",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425002",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425003",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425004",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425101",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425107",
    ct: "PUNE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425109",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425111",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425201",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425202",
    ct: "BHUSAWAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425301",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425305",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425307",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425401",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425404",
    ct: "DHULE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425405",
    ct: "DHULE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425409",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425412",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425416",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "425417",
    ct: "SURAT",
    st: "GUJARAT",
    co: "INDIA"
}, {
    pc: "425502",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425503",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "425508",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431001",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431002",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431003",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431004",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431005",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431006",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431010",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431101",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431103",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431105",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431107",
    ct: "PAITHAN",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431109",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431111",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431112",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431114",
    ct: "JALNA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431119",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431122",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431123",
    ct: "LATUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431128",
    ct: "PAITHAN",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431133",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431136",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431201",
    ct: "AHMEDNAGAR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431203",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431204",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431210",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431212",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431401",
    ct: "PARBHANI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431402",
    ct: "PARBHANI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431503",
    ct: "PARBHANI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431505",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431512",
    ct: "LATUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431513",
    ct: "HINGOLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431514",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431515",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431517",
    ct: "AMBEJOGAI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431520",
    ct: "BEED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431601",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431602",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431603",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431604",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431605",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431708",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431709",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431717",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431723",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431804",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "431809",
    ct: "NANDED",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440005",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440011",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440015",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440016",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440018",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440019",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440020",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440022",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440023",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440024",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440025",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440027",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440028",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440036",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "440037",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441001",
    ct: "KAMPTEE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441008",
    ct: "BUTIBORI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441103",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441104",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441106",
    ct: "RAMTEK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441108",
    ct: "BUTIBORI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441109",
    ct: "KHAPERKHEDA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441110",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441122",
    ct: "BUTIBORI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441123",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441203",
    ct: "UMRER",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441204",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441205",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441206",
    ct: "BRAMHAPURI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441222",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441224",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441225",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441302",
    ct: "KATOL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441303",
    ct: "KATOL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441401",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441402",
    ct: "KAMPTEE",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441406",
    ct: "RAMTEK",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441501",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441601",
    ct: "GONDIA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441614",
    ct: "GONDIA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441802",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441804",
    ct: "BHANDARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441902",
    ct: "GONDIA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441904",
    ct: "BHANDARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441905",
    ct: "BHANDARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441906",
    ct: "BHANDARA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441911",
    ct: "GONDIA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441912",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "441913",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442001",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442002",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442003",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442004",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442005",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442006",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442101",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442102",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442104",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442111",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442201",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442301",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442302",
    ct: "WARDHA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442401",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442402",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442403",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442404",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442405",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442406",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442502",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442503",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442504",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442505",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442507",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442603",
    ct: "GADCHIROLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442605",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442701",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442703",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442705",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442706",
    ct: "RAJURA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442707",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442708",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442901",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442902",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442903",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442905",
    ct: "RAJURA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442907",
    ct: "WARORA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442908",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442914",
    ct: "WARORA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442916",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "442918",
    ct: "CHANDRAPUR -MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443001",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443101",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443112",
    ct: "BULDANA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443201",
    ct: "CHIKLI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443202",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443204",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443206",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443301",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443302",
    ct: "BULDANA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443401",
    ct: "BULDANA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443402",
    ct: "JALGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "443404",
    ct: "BULDANA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444001",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444002",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444003",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444004",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444005",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444101",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444104",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444105",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444107",
    ct: "MURTIZAPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444108",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444109",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444202",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444203",
    ct: "BULDANA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444302",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444303",
    ct: "KHAMGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444312",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444401",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444403",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444501",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444503",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444505",
    ct: "WASHIM",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444506",
    ct: "AKOLA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444601",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444602",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444603",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444604",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444605",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444606",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444607",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444608",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444609",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444701",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444704",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444705",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444706",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444708",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444709",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444801",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444803",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444805",
    ct: "NAGPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444806",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444809",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444810",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444901",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444902",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444903",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444905",
    ct: "MORSHI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444906",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444907",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "444908",
    ct: "AMARAVATI",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445001",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445002",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445102",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445103",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445202",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445203",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445204",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445205",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445206",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445207",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445216",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445301",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445302",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445303",
    ct: "MARIGAON",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445323",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445401",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "445402",
    ct: "YAVATMAL",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "450001",
    ct: "DEWAS",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "450112",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "450116",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "450119",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "450221",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "450331",
    ct: "BURHANPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "450332",
    ct: "BURHANPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451001",
    ct: "KHARGONE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451111",
    ct: "MANDSAUR / DASPURKUNJ",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451113",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451115",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451224",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451447",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451551",
    ct: "BADWANI",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451556",
    ct: "BADWANI",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451659",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451660",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "451666",
    ct: "SENDWA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452001",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452002",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452003",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452004",
    ct: "IDAR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452005",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452006",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452007",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452008",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452009",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452010",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452011",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452012",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452013",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452014",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452015",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452016",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452017",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452018",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "452020",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "453001",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "453111",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "453115",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "453331",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "453441",
    ct: "MHOW",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "453551",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "453771",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "453777",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "454001",
    ct: "DHAR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "454116",
    ct: "DHAR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "454331",
    ct: "DHAR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "454446",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "454449",
    ct: "DHAR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "454552",
    ct: "DHAR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "454660",
    ct: "DHAR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "454774",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "454775",
    ct: "DHAR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "455001",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "455111",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "455116",
    ct: "DEWAS",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "455118",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "455223",
    ct: "DEWAS",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "455332",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "455336",
    ct: "DEWAS",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "456001",
    ct: "UJJAIN",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "456010",
    ct: "UJJAIN",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "456224",
    ct: "UJJAIN",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "456331",
    ct: "UJJAIN",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "456335",
    ct: "UJJAIN",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "456443",
    ct: "UJJAIN",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "456665",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "456771",
    ct: "UJJAIN",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "457001",
    ct: "RATLAM",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "457114",
    ct: "RATLAM",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "457226",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "457661",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "457773",
    ct: "JHABUA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "457777",
    ct: "RATLAM",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "457779",
    ct: "JHABUA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "457887",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "457990",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458001",
    ct: "MANDSAUR / DASPURKUNJ",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458002",
    ct: "MANDSAUR / DASPURKUNJ",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458110",
    ct: "NEEMUCH",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458116",
    ct: "NEEMUCH",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458336",
    ct: "NEEMUCH",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458441",
    ct: "NEEMUCH",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458468",
    ct: "NEEMUCH",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458470",
    ct: "NEEMUCH",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458664",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458667",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458775",
    ct: "MANDSAUR / DASPURKUNJ",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458880",
    ct: "MANDSAUR / DASPURKUNJ",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458883",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458888",
    ct: "MANDSAUR / DASPURKUNJ",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "458990",
    ct: "MANDSAUR / DASPURKUNJ",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "460001",
    ct: "BETUL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "460220",
    ct: "BETUL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "460440",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "460447",
    ct: "BETUL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "460449",
    ct: "BETUL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "460551",
    ct: "BETUL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "460661",
    ct: "BETUL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461001",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461005",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461109",
    ct: "AURANGABAD MH",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "461111",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461223",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461228",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461251",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461331",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461441",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461771",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461775",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461881",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "461990",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462001",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462002",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462003",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462004",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462007",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462008",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462010",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462011",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462012",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462013",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462014",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462015",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462016",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462020",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462021",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462022",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462023",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462024",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462026",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462027",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462030",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462031",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462032",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462033",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462036",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462038",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462039",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462041",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462042",
    ct: "MANDIDEEP (RAISEN)",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462043",
    ct: "MANDIDEEP (RAISEN)",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462044",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462046",
    ct: "MANDIDEEP (RAISEN)",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462047",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "462066",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464001",
    ct: "VIDISHA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464002",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464221",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464228",
    ct: "VIDISHA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464551",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464651",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464661",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464668",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464881",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464884",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464886",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "464993",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465001",
    ct: "SHAJAPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465333",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465337",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465441",
    ct: "SHAJAPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465447",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465449",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465661",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465667",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465669",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465674",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465679",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465680",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465683",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465693",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "465697",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "466001",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "466116",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "466331",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "470001",
    ct: "SAGAR(MP)",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "470002",
    ct: "SAGAR(KA)",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "470004",
    ct: "SAGAR(MP)",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "470113",
    ct: "BINA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "470117",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "470227",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "470277",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "470661",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "473001",
    ct: "GUNA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "473112",
    ct: "GUNA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "473226",
    ct: "GUNA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "473331",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "473446",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "473551",
    ct: "KHAJURAHO",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474001",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474002",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474003",
    ct: "SAGAR(MP)",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474004",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474005",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474006",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474007",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474008",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474009",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474010",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474011",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474012",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474015",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "474020",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "475005",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "475110",
    ct: "DABRA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "475661",
    ct: "DABRA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "476001",
    ct: "MORENA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "476111",
    ct: "MORENA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "476115",
    ct: "MORENA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "476229",
    ct: "MORENA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "476337",
    ct: "GWALIOR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "476444",
    ct: "MORENA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "477001",
    ct: "MORENA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "477117",
    ct: "MALANPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "480001",
    ct: "CHINDWARA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "480002",
    ct: "CHINDWARA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "480106",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "480334",
    ct: "CHINDWARA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "480337",
    ct: "PANDHURNA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "480338",
    ct: "PANDHURNA",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "480441",
    ct: "NAGPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "480551",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "480661",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "481001",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "481661",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482001",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482002",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482003",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482004",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482005",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482008",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482009",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482010",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482011",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "482021",
    ct: "JHABUA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "483110",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "483225",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "483501",
    ct: "KATNI",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "483504",
    ct: "KATNI",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "483880",
    ct: "KATNI",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "484001",
    ct: "SHAHDOL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "484002",
    ct: "SHAHDOL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "484110",
    ct: "SHAHDOL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "484224",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "484330",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "484334",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "484551",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "484661",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "485001",
    ct: "SATNA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "485005",
    ct: "SATNA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "485501",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "485771",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "485775",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486001",
    ct: "REWA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486002",
    ct: "REWA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486111",
    ct: "REWA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486114",
    ct: "REWA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486226",
    ct: "REWA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486331",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486450",
    ct: "REWA",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486661",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486771",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486881",
    ct: "SIDHI",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "486889",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "487001",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "487221",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "487551",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "487770",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "488001",
    ct: "JABALPUR",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "488333",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "492075",
    ct: "RAIPUR",
    st: "MAHARASHTRA",
    co: "INDIA"
}, {
    pc: "500001",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500002",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500003",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500004",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500005",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500006",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500007",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500008",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500009",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500010",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500011",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500012",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500013",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500014",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500015",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500016",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500017",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500018",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500019",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500020",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500021",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500022",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500023",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500024",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500025",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500026",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500027",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500028",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500029",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500030",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500031",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500032",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500033",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500034",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500035",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500036",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500037",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500038",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500039",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500040",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500041",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500042",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500043",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500044",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500045",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500046",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500047",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500048",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500049",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500050",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500051",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500052",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500053",
    ct: "MOGALPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500054",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500055",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500056",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500057",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500058",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500059",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500060",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500061",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500062",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500063",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500064",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500065",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500066",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500067",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500068",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500069",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500070",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500071",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500072",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500073",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500074",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500075",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500076",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500077",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500078",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500079",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500080",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500081",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500082",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500083",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500084",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500085",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500086",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500087",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500088",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500089",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500090",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500091",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500092",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500093",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500094",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500095",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500096",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500097",
    ct: "MEERPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500098",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500195",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500609",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "500873",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501101",
    ct: "VIKARABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501102",
    ct: "VIKARABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501141",
    ct: "TANDUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501143",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501158",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501203",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501218",
    ct: "SHAMSHABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501301",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501359",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501401",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501403",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501501",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501503",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501504",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501505",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501506",
    ct: "IBRAHIMPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501510",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501511",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501512",
    ct: "HAYATNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "501539",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502001",
    ct: "SANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502032",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502101",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502103",
    ct: "SIDDIPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502108",
    ct: "DUBBAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502110",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502205",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502220",
    ct: "ZAHEERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502230",
    ct: "SANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502255",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502270",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502273",
    ct: "SANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502278",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502279",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502281",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502285",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502286",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502291",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502293",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502294",
    ct: "SANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502295",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502296",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502305",
    ct: "PATANCHERU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502306",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502307",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502313",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502319",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502320",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502321",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502324",
    ct: "PATANCHERU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502325",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502329",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502334",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502336",
    ct: "MEDAK",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "502779",
    ct: "SANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503001",
    ct: "WARANGAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503002",
    ct: "NIZAMABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503003",
    ct: "NIZAMABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503004",
    ct: "NIZAMABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503111",
    ct: "KAMAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503175",
    ct: "NIZAMABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503185",
    ct: "BODHAN",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503187",
    ct: "BANSWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503217",
    ct: "MUPKAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503224",
    ct: "ARMOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503307",
    ct: "BHEEMGHAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503310",
    ct: "NIZAMABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "503501",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504001",
    ct: "ADILABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504002",
    ct: "ADILABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504101",
    ct: "BASAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504103",
    ct: "BHAINSA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504106",
    ct: "NIRMAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504107",
    ct: "BASAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504201",
    ct: "KARIMNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504203",
    ct: "NIRMAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504205",
    ct: "LUXETTIPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504208",
    ct: "MANCHERIAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504209",
    ct: "MANCHERIAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504215",
    ct: "LUXETTIPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504216",
    ct: "JAIPUR (TS)",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504231",
    ct: "MANDAMARRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504251",
    ct: "BELLAMPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504272",
    ct: "TANDUR (TS)",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504296",
    ct: "ASIFABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504301",
    ct: "RAMAKRISHNAPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504302",
    ct: "SRIRAMPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "504307",
    ct: "ICHODA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505001",
    ct: "KARIMNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505002",
    ct: "KARIMNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505122",
    ct: "JAMMIKUNTA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505162",
    ct: "PEDDAPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505172",
    ct: "PEDDAPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505184",
    ct: "MANTHANY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505185",
    ct: "SULTHANABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505187",
    ct: "PEDDAPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505188",
    ct: "CENTENARY COLONY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505208",
    ct: "GODAVARI KHANI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505209",
    ct: "GODAVARI KHANI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505210",
    ct: "KARIMNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505211",
    ct: "EIGHT INC. COLONY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505212",
    ct: "GODAVARI KHANI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505214",
    ct: "GODAVARI KHANI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505215",
    ct: "RAMAGUNDAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505301",
    ct: "SIRCILLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505302",
    ct: "VEMULAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505325",
    ct: "METPALLY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505326",
    ct: "KORATLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505327",
    ct: "JAGTIAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505425",
    ct: "DHARMAPURI - AP",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505445",
    ct: "GANGADHARA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505455",
    ct: "JAGTIAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505460",
    ct: "RAIKAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505467",
    ct: "HUSNABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505468",
    ct: "HUZURABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "505503",
    ct: "KARIMNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506001",
    ct: "WARANGAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506002",
    ct: "WARANGAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506003",
    ct: "HANUMAKONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506004",
    ct: "HANUMAKONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506006",
    ct: "HANUMAKONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506007",
    ct: "WARANGAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506008",
    ct: "WARANGAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506009",
    ct: "WARANGAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506011",
    ct: "HANUMAKONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506012",
    ct: "WARANGAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506013",
    ct: "WARANGAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506015",
    ct: "HASANPARTHY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506122",
    ct: "JAMMIKUNTA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506132",
    ct: "WARANGAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506143",
    ct: "GHANAPUR STATION",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506163",
    ct: "THORRUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506164",
    ct: "PARAKAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506167",
    ct: "JANGAON",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506168",
    ct: "CHELPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506169",
    ct: "BHOOPALPALLY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506223",
    ct: "CHERIAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506343",
    ct: "MULUGU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "506371",
    ct: "HASANPARTHY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "507102",
    ct: "KOTHAGUDEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "507116",
    ct: "KHAMMAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "507124",
    ct: "YELLANDU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "507165",
    ct: "WYRA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "507209",
    ct: "KALLURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "508101",
    ct: "ALAIR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "508115",
    ct: "NALGONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "508116",
    ct: "BHONGIR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "508126",
    ct: "NALGONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "508202",
    ct: "NALGONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "508203",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "508252",
    ct: "NALGONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "508284",
    ct: "NALGONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509001",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509002",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509102",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509103",
    ct: "WANAPARTHY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509104",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509105",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509125",
    ct: "GADWAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509126",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509127",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509131",
    ct: "ATAMAKUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509153",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509202",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509203",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509204",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509207",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509208",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509209",
    ct: "NAGARKURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509210",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509216",
    ct: "HYDERABAD",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509217",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509223",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509228",
    ct: "KOTHUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509301",
    ct: "JEDCHERLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509321",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509324",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509325",
    ct: "KOTHUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509326",
    ct: "SRISAILAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509334",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509338",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509339",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509351",
    ct: "MARIKAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509375",
    ct: "ACHAMPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509381",
    ct: "KOTHA KOTA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509410",
    ct: "MAHABUBNAGAR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "509412",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "510510",
    ct: "RANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "512200",
    ct: "SANGAREDDY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "512501",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "512503",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515001",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515002",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515003",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515004",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515005",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515110",
    ct: "PENUKONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515132",
    ct: "PUTTAPARTHY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515133",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515134",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515201",
    ct: "HINDUPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515202",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515211",
    ct: "HINDUPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515231",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515301",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515401",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515402",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515411",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515415",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515422",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515425",
    ct: "NARPALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515511",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515591",
    ct: "KADIRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515592",
    ct: "KADIRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515601",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515671",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515672",
    ct: "DHARMAVARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515701",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515731",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515761",
    ct: "KALYANDURG",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515775",
    ct: "PAMIDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515801",
    ct: "GUNTAKAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515802",
    ct: "GUNTAKAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515803",
    ct: "GUNTAKAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515804",
    ct: "GUNTAKAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515809",
    ct: "GUNTAKAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515812",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515865",
    ct: "RAYADURGA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515870",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515871",
    ct: "ANANTHPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "515872",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "516001",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516002",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516003",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516004",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516101",
    ct: "KODUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516104",
    ct: "CHITVEL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516106",
    ct: "KODUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516115",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516130",
    ct: "T.SUNDUPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516150",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516162",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516172",
    ct: "MYDUKUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516175",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516193",
    ct: "PORUMAMILLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516203",
    ct: "MYDUKUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516213",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516217",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516227",
    ct: "BADVEL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516257",
    ct: "LAKKIREDDYPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516267",
    ct: "GALIVEEDU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516269",
    ct: "RAYACHOTY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516289",
    ct: "KAMALAPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516297",
    ct: "GALIVEEDU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516309",
    ct: "YERRAGUNTLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516310",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516311",
    ct: "YERRAGUNTLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516312",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516326",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516329",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516330",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516360",
    ct: "PRODDATUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516380",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516390",
    ct: "PULIVENDLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516433",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516434",
    ct: "JAMMALAMADAGU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516439",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516454",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "516503",
    ct: "CUDDAPAH",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517001",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517002",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517003",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517004",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517101",
    ct: "CHANDRAGIRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517102",
    ct: "A.RANGAMPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517112",
    ct: "PAKALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517113",
    ct: "KALLUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517123",
    ct: "PILER",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517124",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517125",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517126",
    ct: "IRALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517127",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517128",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517129",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517130",
    ct: "IRALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517131",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517139",
    ct: "MADANAPALLY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517192",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517194",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517214",
    ct: "PILER",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517234",
    ct: "KALKIRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517235",
    ct: "KALKIRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517236",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517247",
    ct: "PUNGANNUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517257",
    ct: "PUNGANNUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517297",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517299",
    ct: "VAYALPADU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517319",
    ct: "MADANAPALLY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517325",
    ct: "MADANAPALLY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517327",
    ct: "MADANAPALLY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517330",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517351",
    ct: "MULAKALACHERUVU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517352",
    ct: "MADANAPALLY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517370",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517390",
    ct: "MULAKALACHERUVU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517391",
    ct: "MULAKALACHERUVU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517408",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517415",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517416",
    ct: "BANGARUPALEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517418",
    ct: "MADANAPALLY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517419",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517422",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517423",
    ct: "SANTHIPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517424",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517425",
    ct: "KUPPAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517501",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517502",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517503",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517504",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517505",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517506",
    ct: "RENIGUNTA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517507",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517520",
    ct: "RENIGUNTA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517541",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517551",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517569",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517581",
    ct: "PUTTUR -AP",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517582",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517583",
    ct: "PUTTUR -AP",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517585",
    ct: "PUTTUR -AP",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517588",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517589",
    ct: "TIRUPATI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517590",
    ct: "NAGARI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517619",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517640",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "517644",
    ct: "CHITTOOR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518001",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518002",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518003",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518004",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518005",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518006",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518007",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518010",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518101",
    ct: "SRISAILAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518102",
    ct: "SRISAILAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518112",
    ct: "NANDYAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518122",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518124",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518134",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518216",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518218",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518222",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518301",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518302",
    ct: "ADONI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518313",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518345",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518360",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518380",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518395",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518401",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518422",
    ct: "ATAMAKUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518464",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518466",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518501",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518502",
    ct: "NANDYAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518503",
    ct: "NANDYAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518508",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518533",
    ct: "VELUGODE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518543",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518553",
    ct: "CHAGALAMARRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518563",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "518599",
    ct: "KURNOOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520001",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520002",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520003",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520004",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520006",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520007",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520008",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520009",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520010",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520011",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520012",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520013",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520014",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520015",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520016",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "520307",
    ct: "ISNAPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521001",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521002",
    ct: "MACHILIPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521035",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521101",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521102",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521103",
    ct: "GANNAVARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521104",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521105",
    ct: "HANUMAN JUNCTION",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521107",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521108",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521109",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521110",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521120",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521121",
    ct: "AVANIGADDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521123",
    ct: "AVANIGADDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521125",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521126",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521134",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521135",
    ct: "KUCHIPUDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521136",
    ct: "KUCHIPUDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521137",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521139",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521149",
    ct: "GUDUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521151",
    ct: "KANKIPADU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521156",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521157",
    ct: "PAMARRU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521165",
    ct: "VUYYUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521169",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521175",
    ct: "JAGGHAIAPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521178",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521180",
    ct: "KANCHIKACHERLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521182",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521185",
    ct: "NANDIGAMA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521190",
    ct: "PENUGANCHIPROLU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521201",
    ct: "NUZVEEDU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521202",
    ct: "NUZVEEDU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521211",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521212",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521215",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521225",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521227",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521228",
    ct: "TADEPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521229",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521230",
    ct: "MYLAVARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521235",
    ct: "TIRUVUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521241",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521286",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521301",
    ct: "GUDIWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521324",
    ct: "MACHILIPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521325",
    ct: "MUDINEPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521333",
    ct: "KAIKALUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521344",
    ct: "KALIDINDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521345",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521356",
    ct: "GUDLAVALLERU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521366",
    ct: "MACHILIPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521403",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "521456",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522001",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522002",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522003",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522004",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522005",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522006",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522007",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522009",
    ct: "PERECHERLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522017",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522018",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522019",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522020",
    ct: "AMARAVATHI -AP",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522034",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522101",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522102",
    ct: "BAPATLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522111",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522123",
    ct: "PONNUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522124",
    ct: "PONNUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522201",
    ct: "TENALI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522202",
    ct: "TENALI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522212",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522213",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522233",
    ct: "MARTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522234",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522235",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522236",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522237",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522256",
    ct: "BHATTIPROLU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522261",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522265",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522267",
    ct: "BHATTIPROLU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522268",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522304",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522309",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522311",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522314",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522324",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522325",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522329",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522330",
    ct: "DUGGIRALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522402",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522403",
    ct: "SATTENPALLY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522408",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522409",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522410",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522411",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522412",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522413",
    ct: "PIDUGURALLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522414",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522415",
    ct: "GURAZALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522419",
    ct: "DORNAL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522421",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522426",
    ct: "MACHERLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522435",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522438",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522439",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522501",
    ct: "TADEPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522502",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522503",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522505",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522508",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522509",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522510",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522529",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522549",
    ct: "NARASARAOPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522601",
    ct: "NARASARAOPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522602",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522611",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522612",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522613",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522614",
    ct: "KAREMPUDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522615",
    ct: "NAKARIKALLU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522616",
    ct: "CHILAKALURIPETA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522617",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522619",
    ct: "MARTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522646",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522647",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "522658",
    ct: "GUNTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523001",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523002",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523101",
    ct: "SINGARAYAKONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523105",
    ct: "KANDUKUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523108",
    ct: "PAMURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523135",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523155",
    ct: "CHIRALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523156",
    ct: "CHIRALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523157",
    ct: "CHIRALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523165",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523166",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523167",
    ct: "INKOLLU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523169",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523186",
    ct: "UPPUGUNDUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523187",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523201",
    ct: "ADDANKI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523211",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523225",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523226",
    ct: "CHIMAKURTHY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523228",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "523230",
    ct: "KANIGIRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523240",
    ct: "PODILI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523247",
    ct: "DARSI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523254",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523260",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523261",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523262",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523264",
    ct: "MEDARAMETLA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523270",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523271",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523274",
    ct: "TANGUTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523286",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523292",
    ct: "ULAVAPADU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523301",
    ct: "MARTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523302",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523304",
    ct: "DONAKONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523305",
    ct: "DARSI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523316",
    ct: "MARKAPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523320",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523322",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523325",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523326",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523327",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523328",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523331",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523332",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523333",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523334",
    ct: "CUMBUM -AP",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523357",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523373",
    ct: "PRAKASHAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "523502",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524001",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524002",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524003",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524004",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524005",
    ct: "KOVUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524101",
    ct: "GUDUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524102",
    ct: "GUDUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524121",
    ct: "SULLURPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524123",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524124",
    ct: "SULLURPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524126",
    ct: "NAIDUPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524127",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524132",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524137",
    ct: "KOVUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524142",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524201",
    ct: "KAVALI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524202",
    ct: "ONGOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524224",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524226",
    ct: "UDAYAGIRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524228",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524301",
    ct: "PODALKUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524305",
    ct: "BUCHIREDDYPALEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524314",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524315",
    ct: "ALLURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524317",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524319",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524320",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524322",
    ct: "ATAMAKUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524344",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524345",
    ct: "PODALKUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524366",
    ct: "ALLURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524401",
    ct: "TADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524404",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524405",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524408",
    ct: "PODALKUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524411",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524412",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524413",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524415",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524421",
    ct: "NELLORE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "524449",
    ct: "VENKATAGIRI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530001",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530002",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530003",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530004",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530005",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530007",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530008",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530009",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530011",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530012",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530013",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530014",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530015",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530016",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530017",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530018",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530020",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530021",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530022",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530023",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530024",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530026",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530027",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530028",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530029",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530031",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530032",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530040",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530041",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530043",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530044",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530045",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530046",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530047",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530048",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530049",
    ct: "GAJUWAKA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530051",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530052",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530053",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "530331",
    ct: "INDORE",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "531001",
    ct: "ANAKAPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531002",
    ct: "ANAKAPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531011",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531019",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531020",
    ct: "PARAVADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531021",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531024",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531026",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531028",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531030",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531031",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531034",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531035",
    ct: "ANAKAPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531036",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531053",
    ct: "YELLAMANCHILLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531055",
    ct: "YELLAMANCHILLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531081",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531083",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531113",
    ct: "GAJUWAKA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531116",
    ct: "NARSIPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531126",
    ct: "TUNI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531162",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531163",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531173",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531208",
    ct: "VISHAKAPATNAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531211",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531212",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531213",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531214",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "531215",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532001",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532002",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532003",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532004",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532005",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532127",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532168",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532185",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532195",
    ct: "KOTABOMMALI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532201",
    ct: "TEKKALI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532202",
    ct: "TEKKALI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532213",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532216",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532218",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532220",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532221",
    ct: "PALASA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532222",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532242",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532243",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532284",
    ct: "SOMPETA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532290",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532312",
    ct: "ICHAPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532313",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532322",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532401",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532402",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532405",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532407",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532409",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532421",
    ct: "NARASANNAPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532426",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532432",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532440",
    ct: "PALAKONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532455",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532456",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532459",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532460",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "532484",
    ct: "SRIKAKULAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533001",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533002",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533003",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533004",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533005",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533006",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533007",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533008",
    ct: "MANDAPETA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533016",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533101",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533102",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533103",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533104",
    ct: "DEVARAPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533105",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533106",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533107",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533124",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533125",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533126",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533201",
    ct: "TENALI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533211",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533214",
    ct: "AMBAJIPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533215",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533216",
    ct: "AMALAPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533221",
    ct: "AMBAJIPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533223",
    ct: "KOTHAPETA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533233",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533234",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533238",
    ct: "TADEPALIIGUDEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533240",
    ct: "AMBAJIPET",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533242",
    ct: "RAZOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533247",
    ct: "TATIPAKA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533248",
    ct: "TATIPAKA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533249",
    ct: "TATIPAKA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533251",
    ct: "MALKIPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533252",
    ct: "MALKIPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533253",
    ct: "TATIPAKA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533255",
    ct: "RAMACHANDRAPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533261",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533262",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533286",
    ct: "GOKAVARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533287",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533288",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533289",
    ct: "KORUKONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533294",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533296",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533308",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533341",
    ct: "DWARAPUDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533342",
    ct: "ANAPARTI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533343",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533344",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533346",
    ct: "BIKAVOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533401",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533406",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533429",
    ct: "KIRLAMPUDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533431",
    ct: "KIRLAMPUDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533432",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533433",
    ct: "PEDDAPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533435",
    ct: "PEDDAPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533437",
    ct: "PEDDAPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533440",
    ct: "SAMALKOT",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533444",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533445",
    ct: "PITHAMPURAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533448",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533449",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533450",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533457",
    ct: "SAMALKOT",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533462",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533463",
    ct: "KAKINADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "533464",
    ct: "YANAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534001",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534002",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534003",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534004",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534005",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534006",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534007",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534101",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534102",
    ct: "TADEPALIIGUDEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534112",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534122",
    ct: "MARTERU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534123",
    ct: "ACHANTA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534134",
    ct: "ATTLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534166",
    ct: "TADEPALIIGUDEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534197",
    ct: "TADEPALIIGUDEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534198",
    ct: "GANAPAVARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534199",
    ct: "UNDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534201",
    ct: "BHIMAVARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534202",
    ct: "BHIMAVARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534203",
    ct: "BHIMAVARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534204",
    ct: "BHIMAVARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534210",
    ct: "PALAKODERU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534211",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534212",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534213",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534214",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534215",
    ct: "TANUKU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534235",
    ct: "AKIVEEDU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534245",
    ct: "VEERAVASARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534260",
    ct: "PALAKOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534268",
    ct: "ACHANTA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534269",
    ct: "ACHANTA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534272",
    ct: "ACHANTA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534275",
    ct: "NARASAPUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534280",
    ct: "PALAKOL",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534281",
    ct: "MOGALTUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534301",
    ct: "NIDADAVOLU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534312",
    ct: "KOYALAGUDEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534313",
    ct: "DEVARAPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534315",
    ct: "TALLAPUDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534316",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534320",
    ct: "PENUGONDA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534326",
    ct: "SIDDHANTAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534328",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534341",
    ct: "TALLAPUDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534342",
    ct: "CHAGALLU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534343",
    ct: "TALLAPUDI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534350",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534406",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534425",
    ct: "BHIMADOLE",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534426",
    ct: "DWARAKATIRUMALA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534447",
    ct: "JANGAREDDYGUDEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534449",
    ct: "ELURU",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534451",
    ct: "TADEPALIIGUDEM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "534460",
    ct: "VIJAYAWADA",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535001",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535002",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535003",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535004",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535101",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535128",
    ct: "CHEEPURUPALLI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535145",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535183",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535204",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535217",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535270",
    ct: "GAJAPATHINAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535273",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535350",
    ct: "RAJAHMUNDRY",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535501",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535547",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535558",
    ct: "BOBBILI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535573",
    ct: "BOBBILI",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535579",
    ct: "VIZIANAGARAM",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "535591",
    ct: "SALUR",
    st: "TELANGANA",
    co: "INDIA"
}, {
    pc: "538101",
    ct: "BELLARY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "547211",
    ct: "TIPTUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560001",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560002",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560003",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560004",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560005",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560006",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560007",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560008",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560009",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560010",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560011",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560012",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560013",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560014",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560015",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560016",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560017",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560018",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560019",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560020",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560021",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560022",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560023",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560024",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560025",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560026",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560027",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560028",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560029",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560030",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560031",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560032",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560033",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560034",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560035",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560036",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560037",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560038",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560039",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560040",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560041",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560042",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560043",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560044",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560045",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560046",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560047",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560048",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560049",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560050",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560051",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560052",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560053",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560054",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560055",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560056",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560057",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560058",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560059",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560060",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560061",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560062",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560063",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560064",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560065",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560066",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560067",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560068",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560069",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560070",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560071",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560072",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560073",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560074",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560075",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560076",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560077",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560078",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560079",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560080",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560081",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560082",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560083",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560084",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560085",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560086",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560087",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560088",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560089",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560090",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560091",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560092",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560093",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560094",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560095",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560096",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560097",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560098",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560099",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560100",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560101",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560102",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560103",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560104",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560105",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560106",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560107",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560108",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560109",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560110",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560112",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560114",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560122",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560149",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560157",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560203",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560204",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "560300",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561101",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561201",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561202",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561203",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561204",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561205",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561207",
    ct: "BAGEPALLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561208",
    ct: "CHICKBALLAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561209",
    ct: "BAGEPALLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561213",
    ct: "CHICKBALLAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561224",
    ct: "CHICKBALLAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "561230",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562101",
    ct: "CHICKBALLAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562104",
    ct: "CHICKBALLAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562105",
    ct: "SIDLAGATTA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562106",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562107",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562109",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562110",
    ct: "DEVANAHALLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562111",
    ct: "NELAMANGALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562112",
    ct: "KANAKAPURA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562114",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562117",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562119",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562120",
    ct: "RAMANAGAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562121",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562122",
    ct: "GOWRIBIDANUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562123",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562125",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562126",
    ct: "RAMANAGAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562127",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562129",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562130",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562131",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562132",
    ct: "NELAMANGALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562135",
    ct: "DEVANAHALLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562138",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562145",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562149",
    ct: "DEVANAHALLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562152",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562157",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562158",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562159",
    ct: "RAMANAGAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562160",
    ct: "CHANNAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562161",
    ct: "CHANNAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562162",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562163",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562164",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "562203",
    ct: "DODDABALLAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563101",
    ct: "KOLAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563102",
    ct: "KOLAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563113",
    ct: "KOLAR GOLD FIELDS",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563114",
    ct: "BANGARPET",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563115",
    ct: "KOLAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563117",
    ct: "KOLAR GOLD FIELDS",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563118",
    ct: "KOLAR GOLD FIELDS",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563119",
    ct: "KOLAR GOLD FIELDS",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563120",
    ct: "KOLAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563121",
    ct: "KOLAR GOLD FIELDS",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563122",
    ct: "KOLAR GOLD FIELDS",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563123",
    ct: "CHINTAMANI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563125",
    ct: "CHINTAMANI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563128",
    ct: "CHINTAMANI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563130",
    ct: "MALUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563131",
    ct: "MULBAGAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563132",
    ct: "MULBAGAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563133",
    ct: "KOLAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563135",
    ct: "KOLAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563146",
    ct: "CHINTAMANI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563155",
    ct: "KOLAR GOLD FIELDS",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "563162",
    ct: "BANGARPET",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570001",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570002",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570003",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570004",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570005",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570006",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570007",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570008",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570009",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570010",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570011",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570012",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570014",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570015",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570016",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570017",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570018",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570019",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570020",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570021",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570022",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570023",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570024",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570025",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570026",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570027",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570028",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570029",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "570030",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571101",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571102",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571103",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571104",
    ct: "BYALAKUPPE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571105",
    ct: "HUNSUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571107",
    ct: "PERYAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571108",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571109",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571110",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571111",
    ct: "GUNDLUPET",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571114",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571116",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571118",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571119",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571120",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571121",
    ct: "H D KOTE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571122",
    ct: "T NARASIPURA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571124",
    ct: "T NARASIPURA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571125",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571129",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571130",
    ct: "YELWAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571134",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571136",
    ct: "PERYAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571169",
    ct: "T NARASIPURA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571183",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571186",
    ct: "MALAVALLY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571187",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571189",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571201",
    ct: "MADIKERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571213",
    ct: "GONIKOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571214",
    ct: "GONIKOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571215",
    ct: "GONIKOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571216",
    ct: "GONIKOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571217",
    ct: "GONIKOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571218",
    ct: "VIRAJPET",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571225",
    ct: "GONIKOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571232",
    ct: "KUSHALNAGAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571234",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571235",
    ct: "KODAGU",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571236",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571252",
    ct: "GONIKOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571253",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571258",
    ct: "GONIKOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571301",
    ct: "NANJANGUD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571302",
    ct: "NANJANGUD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571311",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571312",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571313",
    ct: "CHAMRAJNAGAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571314",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571315",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571342",
    ct: "NAGAMANGALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571401",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571402",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571403",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571404",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571416",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571418",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571421",
    ct: "MALAVALLY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571422",
    ct: "MALAVALLY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571423",
    ct: "KIKKERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571425",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571426",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571428",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571429",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571431",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571432",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571434",
    ct: "SRIRANGAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571436",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571438",
    ct: "SRIRANGAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571439",
    ct: "KOLLEGAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571440",
    ct: "KOLLEGAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571441",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571445",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571448",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571495",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571501",
    ct: "CHANNAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571502",
    ct: "CHANNAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571511",
    ct: "RAMANAGAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571601",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571602",
    ct: "K.R.NAGARA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571603",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571604",
    ct: "K.R.NAGARA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571608",
    ct: "K.R.NAGARA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571610",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571617",
    ct: "MYSORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571802",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "571812",
    ct: "MANDYA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572101",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572102",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572103",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572104",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572105",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572106",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572107",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572108",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572110",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572111",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572123",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572126",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572130",
    ct: "KUNIGAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572132",
    ct: "MADHUGIRI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572137",
    ct: "SIRA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572138",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572141",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572142",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572143",
    ct: "HIRIYUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572144",
    ct: "HIRIYUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572168",
    ct: "NELAMANGALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572201",
    ct: "TIPTUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572202",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572207",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572214",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572216",
    ct: "GUBBI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572218",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572221",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "572227",
    ct: "TUMKUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573102",
    ct: "ARAKALAGUDU",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573103",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573112",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573113",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573115",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573116",
    ct: "CHANNARAYAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573119",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573120",
    ct: "ARAKALAGUDU",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573121",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573122",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573124",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573125",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573130",
    ct: "ARAKALAGUDU",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573133",
    ct: "ARAKALAGUDU",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573134",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573135",
    ct: "CHANNARAYAPATNA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573136",
    ct: "ARAKALAGUDU",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573164",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573201",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573202",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573211",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573213",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "573214",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574104",
    ct: "KARKALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574105",
    ct: "KARKALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574106",
    ct: "KARKALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574107",
    ct: "KARKALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574108",
    ct: "KARKALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574109",
    ct: "KARKALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574110",
    ct: "KARKALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574111",
    ct: "PADUBIDRI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574116",
    ct: "SHIRVA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574117",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574118",
    ct: "KATAPADI (KA)",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574129",
    ct: "BANTWAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574142",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574144",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574145",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574146",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574149",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574150",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574151",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574154",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574157",
    ct: "SURATKAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574160",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574164",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574170",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574197",
    ct: "MOODABIDRI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574199",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574201",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574202",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574203",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574210",
    ct: "PUTTUR -AP",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574211",
    ct: "BANTWAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574214",
    ct: "BELTHANGADI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574216",
    ct: "BELTHANGADI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574219",
    ct: "BANTWAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574227",
    ct: "MOODABIDRI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574231",
    ct: "BANTWAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574237",
    ct: "SULLIA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574239",
    ct: "SULLIA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574240",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574241",
    ct: "PUTTUR -AP",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574299",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574327",
    ct: "SULLIA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "574339",
    ct: "SULLIA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575001",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575002",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575003",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575004",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575005",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575006",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575007",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575008",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575010",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575011",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575013",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575014",
    ct: "SURATKAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575015",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575017",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575018",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575019",
    ct: "SURATKAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575020",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575025",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575026",
    ct: "SURATKAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575028",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575030",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "575219",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576101",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576102",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576103",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576104",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576105",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576106",
    ct: "MANIPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576108",
    ct: "MALPE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576112",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576115",
    ct: "MANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576118",
    ct: "MALPE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576119",
    ct: "MANIPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576122",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576125",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576143",
    ct: "MALPE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576201",
    ct: "KUNDAPURA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576210",
    ct: "BRAHMAVAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576213",
    ct: "BRAHMAVAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576214",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576218",
    ct: "BRAHMAVAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576222",
    ct: "KUNDAPURA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576225",
    ct: "BRAHMAVAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576226",
    ct: "BRAHMAVAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576228",
    ct: "BHATKAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576229",
    ct: "KOTESHWARA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576232",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576244",
    ct: "UDUPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "576257",
    ct: "KUNDAPURA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577001",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577002",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577003",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577004",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577005",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577006",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577101",
    ct: "CHICKAMAGALUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577102",
    ct: "CHICKAMAGALUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577112",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577114",
    ct: "HOSADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577115",
    ct: "HASSAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577116",
    ct: "BIRUR KA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577123",
    ct: "CHICKAMAGALUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577126",
    ct: "KOPPA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577132",
    ct: "CHICKAMAGALUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577134",
    ct: "KOPPA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577139",
    ct: "CHICKAMAGALUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577166",
    ct: "CHICKAMAGALUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577201",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577202",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577203",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577204",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577205",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577213",
    ct: "CHANNAGIRI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577217",
    ct: "CHITRADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577219",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577221",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577222",
    ct: "BHADRAVATHI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577223",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577224",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577228",
    ct: "TARIKERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577301",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577302",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577303",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577401",
    ct: "SAGAR(KA)",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577412",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577413",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577418",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577422",
    ct: "THIRTHAHALLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577426",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577427",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577428",
    ct: "SHIMOGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577429",
    ct: "SORAB",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577430",
    ct: "SAGAR(KA)",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577432",
    ct: "KOPPA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577452",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577501",
    ct: "CHITRADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577502",
    ct: "CHITRADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577512",
    ct: "CHITRADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577516",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577519",
    ct: "CHITRADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577522",
    ct: "CHALLAKERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577526",
    ct: "HOLALKERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577527",
    ct: "HOSADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577528",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577530",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577535",
    ct: "MOLAKALMURU",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577536",
    ct: "CHITRADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577540",
    ct: "CHITRADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577544",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577547",
    ct: "CHICKAMAGALUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577548",
    ct: "KADUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577551",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577552",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577566",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577588",
    ct: "CHITRADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577599",
    ct: "CHITRADURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "577601",
    ct: "HARIHAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580001",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580002",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580003",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580004",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580005",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580006",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580007",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580008",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580009",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580010",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580011",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580020",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580021",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580022",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580023",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580024",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580025",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580026",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580028",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580029",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580030",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580031",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580032",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580102",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580112",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "580114",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581102",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581103",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581104",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581105",
    ct: "BELLARY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581106",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581108",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581109",
    ct: "HIREKERUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581110",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581111",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581113",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581115",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581116",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581117",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581118",
    ct: "SIDDAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581119",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581120",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581123",
    ct: "HARIHAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581126",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581145",
    ct: "RANEBENNUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581201",
    ct: "NARAGUND",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581202",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581204",
    ct: "KALAGHATAGI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581205",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581208",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581210",
    ct: "HIREKERUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581211",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581212",
    ct: "HAVERI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581301",
    ct: "KARWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581302",
    ct: "KARWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581303",
    ct: "KARWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581304",
    ct: "KARWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581305",
    ct: "KARWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581306",
    ct: "KARWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581307",
    ct: "KARWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581314",
    ct: "ANKOLA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581316",
    ct: "ANKOLA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581318",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581320",
    ct: "BHATKAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581321",
    ct: "ANKOLA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581322",
    ct: "SIDDAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581324",
    ct: "KARWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581325",
    ct: "DANDELI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581326",
    ct: "GOKARN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581328",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581329",
    ct: "HALIYAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581330",
    ct: "KUMTA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581331",
    ct: "SIDDAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581334",
    ct: "HONNAVARA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581340",
    ct: "SIDDAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581343",
    ct: "KUMTA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581348",
    ct: "HONNAVARA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581349",
    ct: "MUNDGOD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581350",
    ct: "MURUDESHWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581352",
    ct: "KARWAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581354",
    ct: "BHATKAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581355",
    ct: "SIRSI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581357",
    ct: "ANKOLA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581359",
    ct: "YELLAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581362",
    ct: "KUMTA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581363",
    ct: "DANDELI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581395",
    ct: "HONNAVARA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581396",
    ct: "MALLAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581400",
    ct: "MALLAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581401",
    ct: "SIRSI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581402",
    ct: "SIRSI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581403",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581411",
    ct: "MUNDGOD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581450",
    ct: "SIDDAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "581453",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582101",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582102",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582103",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582109",
    ct: "HIREKERUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582112",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582114",
    ct: "GAJENDREEGOD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582116",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582118",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582119",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582120",
    ct: "SHIRATTI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582201",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582203",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582205",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582206",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582207",
    ct: "NARAGUND",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582208",
    ct: "DHARWAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582209",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582211",
    ct: "GADAG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "582614",
    ct: "TALIKOTI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583101",
    ct: "BELLARY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583102",
    ct: "BELLARY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583103",
    ct: "BELLARY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583104",
    ct: "BELLARY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583105",
    ct: "BELLARY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583112",
    ct: "DONIMALAI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583115",
    ct: "KUDITHINI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583116",
    ct: "BELLARY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583118",
    ct: "DONIMALAI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583119",
    ct: "DONIMALAI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583121",
    ct: "SIRUGUPPA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583123",
    ct: "THORANAGALLU",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583124",
    ct: "DONIMALAI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583125",
    ct: "DAVANGERE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583126",
    ct: "KUDLIGI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583131",
    ct: "HARAPANAHALLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583132",
    ct: "KAMPLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583134",
    ct: "KOTTUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583135",
    ct: "KUDLIGI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583136",
    ct: "KOTTUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583201",
    ct: "HOSPET",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583202",
    ct: "HOSPET",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583203",
    ct: "HOSPET",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583211",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583212",
    ct: "HAGARI BOMMANAHALLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583216",
    ct: "HUVINAHADAGALI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583219",
    ct: "HUVINAHADAGALI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583221",
    ct: "BELLARY",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583222",
    ct: "HOSPET",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583225",
    ct: "BHADRAVATHI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583227",
    ct: "GANGAVATI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583228",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583229",
    ct: "KARATAGI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583231",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583232",
    ct: "KUKNOOR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583233",
    ct: "MUNIRABAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583234",
    ct: "MUNIRABAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583235",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583236",
    ct: "YELBURGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583237",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583239",
    ct: "HAMPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583268",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583275",
    ct: "THORANAGALLU",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583276",
    ct: "HAMPI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583277",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583280",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583281",
    ct: "HOSPET",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583282",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "583283",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584101",
    ct: "RAICHUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584102",
    ct: "RAICHUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584103",
    ct: "RAICHUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584111",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584121",
    ct: "KUSHTAGI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584122",
    ct: "LINGASUGUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584123",
    ct: "MANVI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584124",
    ct: "RAICHUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584128",
    ct: "SINDHANUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584166",
    ct: "KOPPAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "584170",
    ct: "SHAKTINAGAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585101",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585102",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585103",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585104",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585105",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585106",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585201",
    ct: "YADGIRI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585202",
    ct: "YADGIRI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585211",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585214",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585215",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585216",
    ct: "HUVINAHADAGALI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585221",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585222",
    ct: "SEDAM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585223",
    ct: "SHAHAPUR -KA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585224",
    ct: "SHORAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585225",
    ct: "WADI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585227",
    ct: "BIDAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585228",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585229",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585292",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585302",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585307",
    ct: "CHINCHOLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585310",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585311",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585313",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585317",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585324",
    ct: "SULEPETH",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585326",
    ct: "BIDAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585327",
    ct: "BASAVAKALYAN",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585328",
    ct: "BHALKI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585330",
    ct: "HUMNABAD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585367",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585401",
    ct: "BIDAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585402",
    ct: "BIDAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585403",
    ct: "BIDAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585412",
    ct: "BIDAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585414",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585417",
    ct: "BIDAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "585421",
    ct: "BIDAR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586101",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586102",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586103",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586104",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586109",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586115",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586124",
    ct: "MUDDEBIHAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586128",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586201",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586203",
    ct: "BASAVAN BAGEWADI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586205",
    ct: "GULBARGA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586209",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586210",
    ct: "BIJAPUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586212",
    ct: "MUDDEBIHAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586213",
    ct: "BASAVAN BAGEWADI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586214",
    ct: "TALIKOTI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "586219",
    ct: "MUDDEBIHAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587101",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587102",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587103",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587111",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587112",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587114",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587116",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587118",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587122",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587125",
    ct: "ILKAL",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587155",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587201",
    ct: "BADAMI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587202",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587203",
    ct: "GULEGUDD",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587204",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587205",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587206",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587207",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587301",
    ct: "JAMKHANDI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587302",
    ct: "JAMKHANDI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587303",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587304",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587305",
    ct: "HUBLI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587310",
    ct: "BANHATTI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587311",
    ct: "BANHATTI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587313",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587314",
    ct: "BANHATTI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587315",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "587511",
    ct: "BANHATTI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "589112",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "589301",
    ct: "BAGALKOT",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590001",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590002",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590003",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590004",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590005",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590006",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590007",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590008",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590009",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590010",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590011",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590014",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590016",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "590019",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591001",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591002",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591003",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591004",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591102",
    ct: "BAILAHONGALA",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591108",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591112",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591113",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591115",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591117",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591120",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591123",
    ct: "RAMDURG",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591124",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591126",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591129",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591201",
    ct: "CHIKKODI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591213",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591218",
    ct: "GOKAK",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591220",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591225",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591231",
    ct: "GOKAK",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591235",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591237",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591246",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591302",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591304",
    ct: "ATHNI",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591306",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591307",
    ct: "GOKAK",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591308",
    ct: "GOKAK",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591309",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591310",
    ct: "GOKAK",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591312",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591313",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "591317",
    ct: "BELGAUM",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "600001",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600002",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600003",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600004",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600005",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600006",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600007",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600008",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600009",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600010",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600011",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600012",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600013",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600014",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600015",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600016",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600017",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600018",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600019",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600020",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600021",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600022",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600023",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600024",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600025",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600026",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600027",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600028",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600029",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600030",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600031",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600032",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600033",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600034",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600035",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600036",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600037",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600038",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600039",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600040",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600041",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600042",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600043",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600044",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600045",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600046",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600047",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600048",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600049",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600050",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600051",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600052",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600053",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600054",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600055",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600056",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600057",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600058",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600059",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600060",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600061",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600062",
    ct: "TIRUVALLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600063",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600064",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600065",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600066",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600067",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600068",
    ct: "MANALI -TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600069",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600070",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600071",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600072",
    ct: "AVADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600073",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600074",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600075",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600076",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600077",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600078",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600079",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600080",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600081",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600082",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600083",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600084",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600085",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600086",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600087",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600088",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600089",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600090",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600091",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600092",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600093",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600094",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600095",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600096",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600097",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600098",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600099",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600100",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600101",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600102",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600103",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600104",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600105",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600106",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600107",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600108",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600109",
    ct: "AVADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600110",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600111",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600112",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600113",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600114",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600115",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600116",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600117",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600118",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600119",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600120",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600122",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600123",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600124",
    ct: "THANDALAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600125",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600126",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600127",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600128",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600129",
    ct: "PACHIKAPALLAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "600130",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "601201",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "601203",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "601204",
    ct: "TIRUVALLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "601205",
    ct: "SRIPERUMPUDUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "601206",
    ct: "GUMMIDIPONDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "601301",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "601302",
    ct: "MEDAVAKKAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602001",
    ct: "TIRUVALLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602002",
    ct: "TIRUVALLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602003",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602004",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602024",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602025",
    ct: "TIRUVALLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602087",
    ct: "VEPPAMPATTU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602088",
    ct: "VEPPAMPATTU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602089",
    ct: "VEPPAMPATTU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602101",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602103",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602105",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602106",
    ct: "TIRUVALLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602107",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "602108",
    ct: "TIRUVALLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603001",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603002",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603102",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603103",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603107",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603109",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603110",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603111",
    ct: "CHENGALPATTU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603112",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603201",
    ct: "GUDUVANCHERRY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603202",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603203",
    ct: "KELAMBAKKAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603204",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603209",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603210",
    ct: "GUDUVANCHERRY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603211",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603306",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603308",
    ct: "CHENGALPATTU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603406",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "603603",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604001",
    ct: "TINDIVANAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604002",
    ct: "TINDIVANAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604201",
    ct: "GINGEE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604202",
    ct: "GINGEE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604203",
    ct: "GINGEE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604301",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604303",
    ct: "VILLUPURAM - TN",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "604304",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604401",
    ct: "CHEYYAR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604406",
    ct: "THIRUVANNAMALAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604407",
    ct: "CHEYYAR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "604408",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "605001",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605002",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605003",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605004",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605005",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605006",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605007",
    ct: "PALLIADY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605008",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605009",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605010",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605011",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605012",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605013",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605014",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605101",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605102",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605104",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605106",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605107",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605108",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "605109",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605110",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605111",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605401",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "605402",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "605501",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605502",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605601",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "605602",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "605606",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "605652",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "605757",
    ct: "TIRUKOILUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606001",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606002",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606104",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606105",
    ct: "PENNADAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606106",
    ct: "TITTAGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606107",
    ct: "ULUNDURPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606201",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606202",
    ct: "KALLAKURUCHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606206",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606207",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606306",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606601",
    ct: "THIRUVANNAMALAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606602",
    ct: "THIRUVANNAMALAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606603",
    ct: "THIRUVANNAMALAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606604",
    ct: "THIRUVANNAMALAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606701",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606702",
    ct: "CHENGAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606703",
    ct: "CHENGAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606705",
    ct: "CHENGAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606706",
    ct: "CHENGAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606707",
    ct: "CHENGAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606708",
    ct: "CHENGAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606710",
    ct: "CHENGAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606751",
    ct: "POLUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606754",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606801",
    ct: "THIRUVANNAMALAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606803",
    ct: "POLUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606902",
    ct: "ARNI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606905",
    ct: "POLUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "606906",
    ct: "POLUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607001",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607002",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607003",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607004",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607005",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607103",
    ct: "PANRUTI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607105",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607106",
    ct: "PANRUTI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607107",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607109",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607203",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607301",
    ct: "KURINJIPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607302",
    ct: "KURINJIPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607303",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607308",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607402",
    ct: "PONDICHERRY",
    st: "PONDICHERY",
    co: "INDIA"
}, {
    pc: "607801",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607802",
    ct: "NEYVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607803",
    ct: "NEYVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607804",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "607807",
    ct: "NEYVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "608001",
    ct: "CHIDAMBARAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "608002",
    ct: "CHIDAMBARAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "608301",
    ct: "KATTUMANNARKOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "608502",
    ct: "PARANGIPETTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "608601",
    ct: "CUDDALORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "608702",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "608703",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "608704",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609001",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609003",
    ct: "MYLAPORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609109",
    ct: "SIRKAZHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609110",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609111",
    ct: "SIRKALI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609117",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609118",
    ct: "MAYILADUTHURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609305",
    ct: "MAYILADUTHURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609401",
    ct: "MAYILADUTHURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609404",
    ct: "MAYILADUTHURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609602",
    ct: "KARAIKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609604",
    ct: "KARAIKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609605",
    ct: "KARAIKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609606",
    ct: "KARAIKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609607",
    ct: "KARAIKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609609",
    ct: "KARAIKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "609801",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "610001",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "610003",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "610004",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "610101",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "610109",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "611001",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "611002",
    ct: "NAGAPATTINAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "611003",
    ct: "NAGAPATTINAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "611104",
    ct: "NAGAPATTINAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "611106",
    ct: "NAGAPATTINAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "611111",
    ct: "MANNARGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "612001",
    ct: "KUMBAKONAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "612002",
    ct: "KUMBAKONAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "612101",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "612103",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "612203",
    ct: "NAGAPATTINAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "612204",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "612702",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613001",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613002",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613004",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613005",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613006",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613007",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613009",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613010",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613104",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613105",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613204",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613301",
    ct: "PUDUKKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613401",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613402",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "613403",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614001",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614014",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614018",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614101",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614102",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614103",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614201",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614202",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614205",
    ct: "PAPANASAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614206",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614211",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614404",
    ct: "TIRUVARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614601",
    ct: "PATTUKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614602",
    ct: "PATTUKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614604",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614616",
    ct: "ARANTHANGI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614625",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614701",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614704",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614713",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614804",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614903",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "614904",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620001",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620002",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620003",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620004",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620005",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620006",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620007",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620008",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620010",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620011",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620012",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620013",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620014",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620015",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620017",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620018",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620019",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620020",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620021",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620022",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620023",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620024",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620026",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "620102",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621005",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621010",
    ct: "THURAIYUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621014",
    ct: "THANJAVUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621107",
    ct: "PERAMBALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621108",
    ct: "PERAMBALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621112",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621113",
    ct: "PERAMBALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621115",
    ct: "PERAMBALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621116",
    ct: "VILLUPURAM - TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621203",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621206",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621209",
    ct: "TIRUTTANI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621211",
    ct: "MUSIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621212",
    ct: "PERAMBALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621215",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621216",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621218",
    ct: "LALGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621220",
    ct: "PERAMBALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621302",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621306",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621307",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621310",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621314",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621315",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621316",
    ct: "VIRALIMALAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621601",
    ct: "LALGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621704",
    ct: "ARIYALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621708",
    ct: "PERAMBALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621712",
    ct: "LALGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621713",
    ct: "ARIYALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "621802",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622001",
    ct: "PATTUKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622002",
    ct: "PUDUKKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622003",
    ct: "PUDUKKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622004",
    ct: "PUDUKKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622005",
    ct: "PUDUKKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622101",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622102",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622301",
    ct: "PUDUKKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622302",
    ct: "CHENNAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622407",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622502",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622505",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622506",
    ct: "PUDUKKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622507",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "622515",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623406",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623501",
    ct: "RAMANATHAPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623503",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623504",
    ct: "RAMNAD",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623525",
    ct: "RAMNAD",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623526",
    ct: "RAMNAD",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623527",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623603",
    ct: "RAMANATHAPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623608",
    ct: "RAMNAD",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623701",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623704",
    ct: "MUDUKULATHUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "623707",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624001",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624002",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624003",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624004",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624005",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624101",
    ct: "KODAIKANAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624201",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624202",
    ct: "BATLAGUNDU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624204",
    ct: "BATLAGUNDU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624206",
    ct: "NILAKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624208",
    ct: "NILAKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624301",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624302",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624304",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624308",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624401",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624601",
    ct: "PALANI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624602",
    ct: "PALANI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624610",
    ct: "PALANI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624613",
    ct: "PALANI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624615",
    ct: "PALANI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624618",
    ct: "PALANI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624619",
    ct: "ODDANCHATRAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624622",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624705",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624707",
    ct: "BATLAGUNDU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624708",
    ct: "BATLAGUNDU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624709",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624710",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "624802",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625001",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625002",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625003",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625004",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625005",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625006",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625007",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625008",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625009",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625010",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625011",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625012",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625014",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625015",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625016",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625017",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625018",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625019",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625020",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625021",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625022",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625023",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625101",
    ct: "MELUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625102",
    ct: "MELUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625103",
    ct: "TIRUPATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625104",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625106",
    ct: "MELUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625107",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625108",
    ct: "MELUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625110",
    ct: "MANAMADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625122",
    ct: "MELUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625201",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625205",
    ct: "VADIPATTI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625214",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625218",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625221",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625234",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625301",
    ct: "MELUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625402",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625418",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625501",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625504",
    ct: "RAMANATHAPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625512",
    ct: "AUNDIPATTI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625513",
    ct: "BODINAYAKANUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625515",
    ct: "THENI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625516",
    ct: "CUMBUM -TN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625530",
    ct: "THENI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625531",
    ct: "THENI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625532",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625533",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625535",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625536",
    ct: "AUNDIPATTI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625579",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625601",
    ct: "PERIYAKULAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625602",
    ct: "PERIYAKULAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625603",
    ct: "PERIYAKULAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625605",
    ct: "DINDIGUL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625701",
    ct: "KALLIGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625703",
    ct: "KALLUPATTI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "625706",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626001",
    ct: "VIRUDHUNAGAR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626003",
    ct: "VIRUDHUNAGAR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626101",
    ct: "ARUPPUKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626102",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626104",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626105",
    ct: "ARUPPUKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626106",
    ct: "VIRUDHUNAGAR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626107",
    ct: "ARUPPUKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626108",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626111",
    ct: "SIVAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626112",
    ct: "ARUPPUKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626115",
    ct: "RAJAPALYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626116",
    ct: "WATRAP",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626117",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626121",
    ct: "SIVAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626122",
    ct: "VIRUDHUNAGAR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626123",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626124",
    ct: "SIVAKASI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626125",
    ct: "SRIVILLIPUTTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626126",
    ct: "SIVAKASI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626129",
    ct: "ARUPPUKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626130",
    ct: "SIVAKASI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626132",
    ct: "WATRAP",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626133",
    ct: "WATRAP",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626138",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626141",
    ct: "SIVAKASI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626149",
    ct: "WATRAP",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626189",
    ct: "SIVAKASI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626190",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626203",
    ct: "SATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "626204",
    ct: "SATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627001",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627002",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627003",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627004",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627005",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627006",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627007",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627008",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627009",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627010",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627011",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627012",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627103",
    ct: "VALLIOOR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627104",
    ct: "KOODANKULAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627105",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627106",
    ct: "KOODANKULAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627108",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627109",
    ct: "PANAGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627111",
    ct: "KOODANKULAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627113",
    ct: "ARALVAIMOZHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627116",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627117",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627120",
    ct: "KOODANKULAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627124",
    ct: "KOODANKULAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627201",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627351",
    ct: "PALAYAMKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627352",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627354",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627356",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627357",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627358",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627401",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627413",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627414",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627416",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627418",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627425",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627426",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627501",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627657",
    ct: "TISAIYANVILLAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627751",
    ct: "KADAYANALLUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627755",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627756",
    ct: "SANKARANKOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627757",
    ct: "SIVAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627758",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627759",
    ct: "KADAYANALLUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627802",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627806",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627807",
    ct: "SENCOTTAH",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627808",
    ct: "TENKASI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627809",
    ct: "SENCOTTAH",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627810",
    ct: "SENCOTTAH",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627811",
    ct: "TENKASI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627813",
    ct: "SENCOTTAH",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627818",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627851",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627855",
    ct: "PULIANGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "627859",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628001",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628002",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628003",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628004",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628005",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628006",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628008",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628101",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628102",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628103",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628105",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628151",
    ct: "ATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628202",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628203",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628204",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628215",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628216",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628229",
    ct: "ATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628251",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628501",
    ct: "KOVILPATTI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628502",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628601",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628612",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628616",
    ct: "NAZARETH",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628617",
    ct: "NAZARETH",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628621",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628722",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628902",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628905",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628907",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "628952",
    ct: "TUTICORIN",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629001",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629002",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629003",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629004",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629101",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629102",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629151",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629152",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629153",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629154",
    ct: "NITHIRAVILAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629155",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629156",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629157",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629158",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629159",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629160",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629161",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629162",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629163",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629165",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629167",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629169",
    ct: "PALLIADY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629171",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629172",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629173",
    ct: "MARTHANDAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629175",
    ct: "THUCKALAY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629176",
    ct: "NITHIRAVILAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629177",
    ct: "KANYAKUMARI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629180",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629201",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629251",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629252",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629301",
    ct: "KANYAKUMARI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629302",
    ct: "ARALVAIMOZHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629401",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629704",
    ct: "KANYAKUMARI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629801",
    ct: "NAGERCOIL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629802",
    ct: "KANYAKUMARI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629803",
    ct: "KANYAKUMARI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "629804",
    ct: "MONDAY MARKET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630001",
    ct: "KARAIKUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630002",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630003",
    ct: "KARAIKUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630004",
    ct: "KARAIKUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630005",
    ct: "KARAIKUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630006",
    ct: "KARAIKUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630210",
    ct: "SIVAGANGAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630211",
    ct: "TIRUPATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630302",
    ct: "DEVAKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630303",
    ct: "DEVAKOTTAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630307",
    ct: "KARAIKUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630502",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630551",
    ct: "SIVAGANGAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630561",
    ct: "SIVAGANGAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630562",
    ct: "SIVAGANGAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630606",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630611",
    ct: "MADURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "630702",
    ct: "ILAYANGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631001",
    ct: "ARAKKONAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631002",
    ct: "ARAKKONAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631003",
    ct: "ARAKKONAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631004",
    ct: "ARAKKONAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631102",
    ct: "SHOLINGHUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631201",
    ct: "TIRUTTANI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631203",
    ct: "TIRUVALLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631209",
    ct: "TIRUTTANI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631402",
    ct: "TIRUVALLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631501",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631502",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631503",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631505",
    ct: "SHOLINGHUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631551",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631552",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631561",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631601",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631604",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "631605",
    ct: "KANCHIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632001",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632002",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632003",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632004",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632005",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632006",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632007",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632008",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632009",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632010",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632011",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632012",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632013",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632014",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632055",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632059",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632102",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632106",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632201",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632204",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632301",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632311",
    ct: "THIRUVANNAMALAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632315",
    ct: "THIRUVANNAMALAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632316",
    ct: "POLUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632317",
    ct: "POLUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632401",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632402",
    ct: "RANIPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632403",
    ct: "RANIPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632404",
    ct: "RANIPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632405",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632406",
    ct: "RANIPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632501",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632503",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632504",
    ct: "RANIPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632505",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632509",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632513",
    ct: "RANIPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632515",
    ct: "RANIPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632601",
    ct: "GUDIYATHAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632602",
    ct: "GUDIYATHAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632603",
    ct: "GUDIYATHAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "632604",
    ct: "GUDIYATHAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635001",
    ct: "KRISHNAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635002",
    ct: "KRISHNAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635103",
    ct: "Hosur",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635104",
    ct: "KRISHNAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635105",
    ct: "HOSUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "635107",
    ct: "HOSUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "635109",
    ct: "HOSUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "635110",
    ct: "Hosur",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635111",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635112",
    ct: "KRISHNAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635114",
    ct: "BANGALORE",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "635116",
    ct: "KRISHNAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635117",
    ct: "KRISHNAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635121",
    ct: "KRISHNAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635125",
    ct: "HOSUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "635126",
    ct: "HOSUR",
    st: "KARNATAKA",
    co: "INDIA"
}, {
    pc: "635203",
    ct: "KRISHNAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635206",
    ct: "KRISHNAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635207",
    ct: "UTHANGARAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635303",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635601",
    ct: "TIRUPATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635602",
    ct: "TIRUPATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635635",
    ct: "TIRUPATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635751",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635752",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635753",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635754",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635801",
    ct: "AMBUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635802",
    ct: "AMBUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635809",
    ct: "GUDIYATHAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635810",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635811",
    ct: "AMBUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635812",
    ct: "AMBUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635814",
    ct: "AMBUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635851",
    ct: "KATPADI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635853",
    ct: "VELLORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "635901",
    ct: "TIRUPATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636001",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636002",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636003",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636004",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636005",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636006",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636007",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636008",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636009",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636010",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636011",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636012",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636013",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636014",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636015",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636016",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636030",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636102",
    ct: "ATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636103",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636106",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636108",
    ct: "ATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636109",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636112",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636113",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636115",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636117",
    ct: "ATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636119",
    ct: "ATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636140",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636141",
    ct: "ATTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636201",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636302",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636307",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636308",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636401",
    ct: "METTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636402",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636403",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636406",
    ct: "METTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636451",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636453",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636455",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636457",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636501",
    ct: "METTUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636502",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636601",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636701",
    ct: "DHARMAPURI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636702",
    ct: "DHARMAPURI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636703",
    ct: "DHARMAPURI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636704",
    ct: "DHARMAPURI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636705",
    ct: "DHARMAPURI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636808",
    ct: "DHARMAPURI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636810",
    ct: "PENNAGARAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636811",
    ct: "PENNAGARAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636813",
    ct: "PENNAGARAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636903",
    ct: "HARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636905",
    ct: "DHARMAPURI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "636908",
    ct: "HARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637001",
    ct: "NAMAKKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637002",
    ct: "NAMAKKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637015",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637017",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637018",
    ct: "NAMAKKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637101",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637102",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637105",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637205",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637207",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637208",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637209",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637210",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637211",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637213",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637214",
    ct: "NAMAKKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637215",
    ct: "NAMAKKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637301",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637302",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637303",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637304",
    ct: "NAMAKKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637406",
    ct: "NAMAKKAL",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637408",
    ct: "RASIPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637409",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637501",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637502",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637503",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637504",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "637505",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638001",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638002",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638003",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638004",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638005",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638006",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638007",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638008",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638009",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638010",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638011",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638012",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638051",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638052",
    ct: "PERUNDURAI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638053",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638056",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638102",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638103",
    ct: "KUNNATHUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638105",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638106",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638107",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638109",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638111",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638151",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638181",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638182",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638183",
    ct: "KOMARAPALAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638301",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638315",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638316",
    ct: "CHITHODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638401",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638402",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638451",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638452",
    ct: "GOBICHETTYPALYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638453",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638455",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638458",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638459",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638476",
    ct: "GOBICHETTYPALYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638501",
    ct: "ERODE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638656",
    ct: "DHARAPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638657",
    ct: "DHARAPURAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638701",
    ct: "KANGAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638751",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "638812",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639001",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639002",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639003",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639004",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639005",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639006",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639007",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639008",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639104",
    ct: "TRICHY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639113",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639114",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639117",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639136",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639202",
    ct: "KARUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639205",
    ct: "PALLAPATTI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "639207",
    ct: "PALLAPATTI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "640613",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "641001",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641002",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641003",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641004",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641005",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641006",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641007",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641008",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641009",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641010",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641011",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641012",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641013",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641014",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641015",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641016",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641017",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641018",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641019",
    ct: "METTUPALAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641020",
    ct: "PERIANAICKENPALAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641021",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641022",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641023",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641024",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641025",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641026",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641027",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641028",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641029",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641030",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641031",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641032",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641033",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641034",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641035",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641036",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641037",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641038",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641039",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641041",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641042",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641043",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641044",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641045",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641046",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641047",
    ct: "PERIANAICKENPALAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641048",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641049",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641050",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641062",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641101",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641103",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641104",
    ct: "METTUPALAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641105",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641107",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641108",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641109",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641110",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641111",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641112",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641113",
    ct: "METTUPALAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641114",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641201",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641301",
    ct: "METTUPALAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641302",
    ct: "METTUPALAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641305",
    ct: "METTUPALAYAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641401",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641402",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641406",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641407",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641601",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641602",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641603",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641604",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641605",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641606",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641607",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641652",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641653",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641654",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641658",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641659",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641662",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641663",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641664",
    ct: "PALLADAM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641666",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641668",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641669",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641670",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641671",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641687",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "641697",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642001",
    ct: "POLLACHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642002",
    ct: "POLLACHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642003",
    ct: "POLLACHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642004",
    ct: "POLLACHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642005",
    ct: "POLLACHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642006",
    ct: "POLLACHI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642102",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642103",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642104",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642109",
    ct: "KINATHUKADAVU",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642110",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642112",
    ct: "UDUMALPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642113",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642123",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642126",
    ct: "UDUMALPET",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642127",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642128",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642201",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642203",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642204",
    ct: "TIRUPUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "642205",
    ct: "COIMBATORE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643001",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643002",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643003",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643004",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643005",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643006",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643007",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643101",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643102",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643103",
    ct: "COONOOR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643104",
    ct: "COONOOR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643105",
    ct: "COONOOR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643201",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643202",
    ct: "COONOOR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643207",
    ct: "DEVERSHOLE",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643211",
    ct: "NILGIRIS",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643212",
    ct: "GUDALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643213",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643214",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643215",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643216",
    ct: "SALEM",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643217",
    ct: "KOTAGIRI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643223",
    ct: "MASINAGUDI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643224",
    ct: "COONOOR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643225",
    ct: "GUDALUR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643231",
    ct: "COONOOR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643232",
    ct: "COONOOR",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643233",
    ct: "NILGIRIS",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643237",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "643243",
    ct: "OOTY",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "670001",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670002",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670003",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670004",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670005",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670006",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670007",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670008",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670009",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670010",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670011",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670012",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670013",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670014",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670101",
    ct: "TELLICHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670102",
    ct: "TELLICHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670103",
    ct: "TELLICHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670104",
    ct: "TELLICHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670105",
    ct: "TELLICHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670141",
    ct: "TALIPARAMBA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670142",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670307",
    ct: "PAYYANUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670358",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670501",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670503",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670511",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670561",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670562",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670571",
    ct: "ALAKODE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670594",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670597",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670602",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670613",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670631",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670632",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670633",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670643",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670645",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670674",
    ct: "KELAKAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670702",
    ct: "MATTANUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670703",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "670721",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671121",
    ct: "KASARGOD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671122",
    ct: "KASARGOD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671123",
    ct: "KASARGOD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671313",
    ct: "CHERUVATHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671314",
    ct: "NILESWARAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671315",
    ct: "KASARGOD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671317",
    ct: "KASARGOD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671319",
    ct: "KASARGOD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671321",
    ct: "KASARGOD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671322",
    ct: "KASARGOD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671531",
    ct: "KANHANGAD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "671533",
    ct: "KASARGOD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "672105",
    ct: "TIRUNELVELI",
    st: "TAMIL NADU",
    co: "INDIA"
}, {
    pc: "673001",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673002",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673003",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673004",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673005",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673006",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673007",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673008",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673009",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673010",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673011",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673012",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673014",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673015",
    ct: "CHALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673016",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673017",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673018",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673019",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673020",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673021",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673027",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673028",
    ct: "CHALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673029",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673032",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673101",
    ct: "VATAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673102",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673103",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673104",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673121",
    ct: "KALPETTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673122",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673302",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673303",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673304",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673305",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673309",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673315",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673323",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673504",
    ct: "NADAPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673505",
    ct: "NADAPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673506",
    ct: "NADAPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673507",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673508",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673522",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673525",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673527",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673570",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673571",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673572",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673573",
    ct: "THAMARASSERI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673574",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673576",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673577",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673579",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673582",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673585",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673586",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673591",
    ct: "KALPETTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673592",
    ct: "KALPETTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673593",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673601",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673602",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673608",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673612",
    ct: "BALUSSERY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673620",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673631",
    ct: "FEROKE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673633",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673634",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673635",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673636",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673637",
    ct: "KONDOTTY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673638",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673639",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673641",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673642",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673645",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673647",
    ct: "KONDOTTY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673655",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "673661",
    ct: "CALICUT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676101",
    ct: "TIRUR - MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676104",
    ct: "TIRUR - MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676106",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676107",
    ct: "TIRUR - MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676121",
    ct: "MANJERI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676122",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676123",
    ct: "MANJERI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676301",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676302",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676303",
    ct: "TIRURANGADI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676304",
    ct: "TIRURANGADI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676305",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676306",
    ct: "TIRURANGADI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676307",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676317",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676501",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676503",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676504",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676505",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676506",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676508",
    ct: "TIRURANGADI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676509",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676519",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676521",
    ct: "PANDIKKAD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676541",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "676552",
    ct: "VALANCHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678001",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678002",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678003",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678004",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678005",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678006",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678007",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678008",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678009",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678010",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678011",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678012",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678013",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678014",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678017",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678101",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678102",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678104",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678501",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678506",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678508",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678534",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678541",
    ct: "ALATHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678542",
    ct: "ALATHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678555",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678570",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678581",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678582",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678583",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678596",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678601",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678603",
    ct: "ALANALLUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678611",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678621",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678623",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678624",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678631",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678633",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678642",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678681",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678683",
    ct: "VADAKKENCHERY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678688",
    ct: "ALATHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678701",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678702",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "678705",
    ct: "VADAKKENCHERY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679101",
    ct: "OTTAPALAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679103",
    ct: "OTTAPALAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679104",
    ct: "OTTAPALAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679121",
    ct: "SHORANUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679122",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679303",
    ct: "PATTAMBI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679304",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679305",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679306",
    ct: "PATTAMBI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679307",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679309",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679321",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679322",
    ct: "KOTTAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679324",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679326",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679328",
    ct: "PANDIKKAD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679329",
    ct: "NILAMBUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679330",
    ct: "NILAMBUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679331",
    ct: "EDAKKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679332",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679334",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679336",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679338",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679502",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679503",
    ct: "OTTAPALAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679513",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679531",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679533",
    ct: "PALGHAT",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679562",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679571",
    ct: "VALANCHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679574",
    ct: "CHANGARAMKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679575",
    ct: "CHANGARAMKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679576",
    ct: "EDAPPAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "679577",
    ct: "MALAPPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680001",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680002",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680003",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680004",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680005",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680006",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680007",
    ct: "KOORKANCHERY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680008",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680009",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680010",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680011",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680012",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680014",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680018",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680020",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680021",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680022",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680026",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680027",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680101",
    ct: "GURUVAYOOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680106",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680109",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680121",
    ct: "IRINJALAKUDA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680122",
    ct: "IRINJALAKUDA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680123",
    ct: "IRINJALAKUDA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680125",
    ct: "IRINJALAKUDA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680301",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680302",
    ct: "AMBALLUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680306",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680307",
    ct: "CHALAKUDY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680308",
    ct: "KORATTY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680309",
    ct: "KORATTY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680322",
    ct: "OLLUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680501",
    ct: "KECHERY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680502",
    ct: "KUNNAMKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680503",
    ct: "KECHERY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680506",
    ct: "GURUVAYOOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680507",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680517",
    ct: "KUNNAMKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680519",
    ct: "KUNNAMKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680541",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680542",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680543",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680551",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680553",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680555",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680561",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680566",
    ct: "TRIPRAYAR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680567",
    ct: "TRIPRAYAR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680568",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680569",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680581",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680582",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680584",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680586",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680587",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680588",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680597",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680604",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680609",
    ct: "KORATTY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680611",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680612",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680613",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680614",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680615",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680618",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680641",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680651",
    ct: "MANNUTHY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680652",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680655",
    ct: "MANNUTHY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680664",
    ct: "KODUNGALLUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680667",
    ct: "KODUNGALLUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680681",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680682",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680683",
    ct: "IRINJALAKUDA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680684",
    ct: "KODAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680685",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680686",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680687",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680689",
    ct: "KODAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680702",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680712",
    ct: "IRINJALAKUDA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680722",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680731",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680732",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680733",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680734",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680736",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680741",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680751",
    ct: "MANNUTHY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "680771",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682000",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682001",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682002",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682003",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682004",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682005",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682006",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682007",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682008",
    ct: "KANNAMALY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682009",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682010",
    ct: "KANNAMALY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682011",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682012",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682013",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682014",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682015",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682016",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682017",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682018",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682019",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682020",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682021",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682022",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682023",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682024",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682025",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682026",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682027",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682028",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682029",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682030",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682031",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682032",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682033",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682034",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682035",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682036",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682037",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682038",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682039",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682040",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682041",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682042",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682301",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682302",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682303",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682304",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682305",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682306",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682307",
    ct: "VENNIKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682308",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682309",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682311",
    ct: "KOLENCHERY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682312",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682313",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682314",
    ct: "MULANTHURUTHY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682315",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682317",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682501",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682502",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682503",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682504",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682505",
    ct: "NARAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682506",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682507",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682508",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682509",
    ct: "NARAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "682511",
    ct: "NARAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683101",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683102",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683103",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683104",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683105",
    ct: "VAZHAKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683106",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683107",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683108",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683109",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683110",
    ct: "EDAYAR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683111",
    ct: "ATHANI -COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683112",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683501",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683502",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683503",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683504",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683511",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683512",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683513",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683514",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683516",
    ct: "KODUNGALLUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683517",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683518",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683520",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683522",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683542",
    ct: "PERUMBAVOOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683543",
    ct: "VAZHAKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683544",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683545",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683546",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683547",
    ct: "VAZHAKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683549",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683550",
    ct: "ANGAMALY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683556",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683561",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683562",
    ct: "KOLENCHERY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683565",
    ct: "KOLENCHERY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683571",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683572",
    ct: "ANGAMALY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683573",
    ct: "ANGAMALY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683574",
    ct: "ANGAMALY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683576",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683579",
    ct: "NORTH PAROOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683580",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683585",
    ct: "ATHANI -COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "683594",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685501",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685503",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685505",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685508",
    ct: "KATTAPPANA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685509",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685512",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685515",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685518",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685531",
    ct: "KUTTIKANAM - IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685533",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685537",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685551",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685552",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685553",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685561",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685566",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685571",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685582",
    ct: "THODUPUZHA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685583",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685584",
    ct: "THODUPUZHA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685589",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685602",
    ct: "KARIMBAN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685603",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685606",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685609",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685612",
    ct: "MUNNAR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685613",
    ct: "MUNNAR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "685618",
    ct: "IDUKKI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686001",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686002",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686003",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686004",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686005",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686006",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686008",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686009",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686010",
    ct: "PUTHUPALLY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686011",
    ct: "PUTHUPALLY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686012",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686013",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686014",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686015",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686016",
    ct: "ETTUMANOOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686017",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686018",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686019",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686028",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686029",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686039",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686101",
    ct: "CHANGANACHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686102",
    ct: "CHANGANACHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686103",
    ct: "CHANGANACHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686104",
    ct: "CHANGANACHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686105",
    ct: "CHANGANACHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686106",
    ct: "CHANGANACHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686121",
    ct: "ERATTPETTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686122",
    ct: "ERATTPETTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686141",
    ct: "VAIKOM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686144",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686502",
    ct: "PAMPADY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686503",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686506",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686507",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686509",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686512",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686513",
    ct: "MUNDAKAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686515",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686518",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686531",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686532",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686536",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686537",
    ct: "CHANGANACHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686538",
    ct: "THENGANA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686540",
    ct: "KARUKACHAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686541",
    ct: "KARUKACHAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686542",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686543",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686546",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686562",
    ct: "ETTUMANOOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686563",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686564",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686572",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686573",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686575",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686576",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686577",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686578",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686582",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686601",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686603",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686604",
    ct: "KADUTHURUTHY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686605",
    ct: "THALAYOLAPARAMBU",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686608",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686610",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686615",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686630",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686631",
    ct: "KOTTIYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686632",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686633",
    ct: "KURAVILANGAD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686634",
    ct: "UZHAVOOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686635",
    ct: "KOTTAYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686661",
    ct: "MUVATTUPUZHA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686662",
    ct: "KOOTHATTUKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686664",
    ct: "PIRAVAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686666",
    ct: "KOTHAMANGALAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686667",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686669",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686670",
    ct: "VAZHAKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686671",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686673",
    ct: "ALWAYE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686674",
    ct: "VAZHAKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686691",
    ct: "KOTHAMANGALAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686693",
    ct: "NERIAMANGALAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686702",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "686721",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "687457",
    ct: "BHOPAL",
    st: "MADHYA PRADESH",
    co: "INDIA"
}, {
    pc: "688001",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688002",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688003",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688004",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688005",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688006",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688007",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688008",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688009",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688010",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688011",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688012",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688013",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688014",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688101",
    ct: "CHANGANACHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688502",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688503",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688504",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688505",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688506",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688512",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688521",
    ct: "KOMALAPURAM - ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688522",
    ct: "KOMALAPURAM - ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688523",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688524",
    ct: "CHERTHALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688525",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688526",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688527",
    ct: "ERAMALLORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688529",
    ct: "CHERTHALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688530",
    ct: "ARTHUNKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688531",
    ct: "CHERTHALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688532",
    ct: "CHERTHALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688533",
    ct: "ERAMALLORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688534",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688535",
    ct: "ERAMALLORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688537",
    ct: "ERAMALLORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688538",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688541",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688542",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688544",
    ct: "CHERTHALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688545",
    ct: "CHERTHALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688546",
    ct: "CHERTHALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688547",
    ct: "ERAMALLORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688548",
    ct: "ERAMALLORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688549",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688550",
    ct: "CHERTHALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688554",
    ct: "ARTHUNKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688561",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688563",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688564",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "688567",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689101",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689102",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689103",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689104",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689105",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689106",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689107",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689110",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689111",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689121",
    ct: "CHENGANNUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689124",
    ct: "CHENGANNUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689501",
    ct: "CHENGANNUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689503",
    ct: "TRICHUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689509",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689532",
    ct: "KOZHENCHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689533",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689541",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689544",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689546",
    ct: "KUMBANADU",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689547",
    ct: "KUMBANADU",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689548",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689549",
    ct: "KOZHENCHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689551",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689572",
    ct: "CANNANORE",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689573",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689582",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689584",
    ct: "MALLAPPALLY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689585",
    ct: "MALLAPPALLY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689594",
    ct: "MALLAPPALLY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689595",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689615",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689621",
    ct: "MANNAR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689622",
    ct: "MANNAR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689626",
    ct: "MANNAR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689641",
    ct: "KOZHENCHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689643",
    ct: "KOZHENCHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689645",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689647",
    ct: "KOZHENCHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689653",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689654",
    ct: "KOZHENCHERRY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689662",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689668",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689672",
    ct: "RANNY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689673",
    ct: "RANNY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689676",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689691",
    ct: "KONNI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689692",
    ct: "KONNI",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "689695",
    ct: "PATHANAPURAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690101",
    ct: "MAVELIKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690102",
    ct: "MAVELIKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690103",
    ct: "MAVELIKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690106",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690502",
    ct: "KAYAMKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690503",
    ct: "CHARUMOODU",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690504",
    ct: "CHARUMOODU",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690505",
    ct: "CHARUMOODU",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690506",
    ct: "HARIPAD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690508",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690513",
    ct: "HARIPAD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690514",
    ct: "HARIPAD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690516",
    ct: "HARIPAD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690517",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690518",
    ct: "KARUNAGAPILLY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690519",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690521",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690524",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690525",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690526",
    ct: "OACHIRA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690528",
    ct: "OACHIRA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690533",
    ct: "OACHIRA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690536",
    ct: "KAYAMKULAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690539",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690550",
    ct: "HARIPAD",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690572",
    ct: "ALLEPPEY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "690573",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691001",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691002",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691003",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691004",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691005",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691006",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691007",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691008",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691009",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691010",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691012",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691013",
    ct: "COCHIN",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691014",
    ct: "ANCHAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691017",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691018",
    ct: "THATTAMALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691019",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691020",
    ct: "THATTAMALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691021",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691301",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691303",
    ct: "KOTTIYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691305",
    ct: "PUNALUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691306",
    ct: "ANCHAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691307",
    ct: "PUNALUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691310",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691314",
    ct: "PUNALUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691322",
    ct: "PUNALUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691501",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691502",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691503",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691504",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691505",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691506",
    ct: "KOTTARAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691508",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691512",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691523",
    ct: "ADOOR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691526",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691531",
    ct: "KOTTARAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691532",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691533",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691534",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691535",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691536",
    ct: "KADAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691540",
    ct: "KOTTARAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691542",
    ct: "KOTTARAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691544",
    ct: "KOTTARAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691550",
    ct: "KOTTARAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691554",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691555",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691556",
    ct: "TIRUVALLA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691557",
    ct: "KOTTARAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691559",
    ct: "KADAKKAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691560",
    ct: "KOTTARAKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691566",
    ct: "PARIPPALLY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691571",
    ct: "KOTTIYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691572",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691574",
    ct: "PARIPPALLY",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691576",
    ct: "KOTTIYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691577",
    ct: "KOTTIYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691579",
    ct: "CHATTANNUR",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691581",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691582",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691583",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691584",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691585",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691588",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691589",
    ct: "KOTTIYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "691601",
    ct: "QUILON",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695001",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695002",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695003",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695004",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695005",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695006",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695007",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695008",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695009",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695010",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695011",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695012",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695013",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695014",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695015",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695016",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695017",
    ct: "SREEKARIYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695018",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695019",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695020",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695021",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695022",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695023",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695024",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695025",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695026",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695027",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695028",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695029",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695030",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695031",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695032",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695033",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695034",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695035",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695036",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695037",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695038",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695039",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695040",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695041",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695043",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695099",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695101",
    ct: "ATTINGAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695102",
    ct: "ATTINGAL",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695121",
    ct: "NEYYATTINKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695123",
    ct: "NEYYATTINKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695125",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695141",
    ct: "VARKALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695143",
    ct: "VARKALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695155",
    ct: "PATHANAMTHITTA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695301",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695303",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695304",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695311",
    ct: "VARKALA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695316",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695501",
    ct: "NEYYATTINKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695502",
    ct: "NEYYATTINKARA",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695521",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695524",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695526",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695527",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695541",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695543",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695547",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695551",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695562",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695564",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695572",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695573",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695574",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695581",
    ct: "SREEKARIYAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695582",
    ct: "KAZHAKKUTTAM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695583",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695584",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695585",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695586",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695588",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695601",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695602",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695605",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695607",
    ct: "VENJARAMOODU",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695608",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "695615",
    ct: "TRIVANDRUM",
    st: "KERALA",
    co: "INDIA"
}, {
    pc: "700001",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700002",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700003",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700004",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700005",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700006",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700007",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700008",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700009",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700010",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700011",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700012",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700013",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700014",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700015",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700016",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700017",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700018",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700019",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700020",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700021",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700022",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700023",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700024",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700025",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700026",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700027",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700028",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700029",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700030",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700031",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700032",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700033",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700034",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700035",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700036",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700037",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700038",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700039",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700040",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700041",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700042",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700043",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700044",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700045",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700046",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700047",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700048",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700049",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700050",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700052",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700053",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700054",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700055",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700056",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700057",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700058",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700059",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700060",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700061",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700062",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700063",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700064",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700065",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700066",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700067",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700068",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700069",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700070",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700071",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700072",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700073",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700074",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700075",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700076",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700077",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700078",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700079",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700080",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700082",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700083",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700084",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700085",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700086",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700087",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700088",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700089",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700090",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700091",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700092",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700093",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700094",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700095",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700096",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700097",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700098",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700099",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700100",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700101",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700102",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700104",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700105",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700106",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700107",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "700108",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}, {
    pc: "748706",
    ct: "KOLKATA",
    st: "WEST BENGAL",
    co: "INDIA"
}]
  , lc = {
    status: "Failed",
    message: "Error",
    result: {}
};
async function JI() {
    var t;
    try {
        const A = await OA.get("customer");
        return await wA(A),
        await ((t = A.data) == null ? void 0 : t.result)
    } catch {
        return lc
    }
}
async function VI(t) {
    try {
        const A = await OA.put("customer", t);
        return await wA(A),
        await A.data
    } catch {
        return lc
    }
}
async function vI() {
    try {
        const t = await OA.get("address");
        return await wA(t),
        await t.data
    } catch {
        return lc.result = [],
        lc
    }
}
async function Ws(t) {
    try {
        const A = await OA.post("address", t);
        return await wA(A),
        await A.data
    } catch {
        return lc
    }
}
async function zs(t) {
    try {
        const A = await OA.put("address", t);
        return await wA(A),
        await A.data
    } catch {
        return lc
    }
}
async function Fs(t) {
    try {
        const A = await OA.delete("address", t);
        return await wA(A),
        await A.data
    } catch {
        return lc
    }
}
async function kI() {
    try {
        const t = await OA.post("customer/orderhistory");
        return await wA(t),
        await t.data
    } catch {
        return lc
    }
}
async function WI(t) {
    try {
        const A = await OA.post("customer/resendconfirmation", t);
        return await wA(A),
        await A.data
    } catch {
        return lc
    }
}
async function zI(t) {
    try {
        const A = await OA.post("customer/lockmticket", t);
        return await wA(A),
        await A.data
    } catch {
        return lc
    }
}
async function FI(t) {
    try {
        const A = await OA.post("customer/changemticketpassword", t);
        return await wA(A),
        await A.data
    } catch {
        return lc
    }
}
function Gt(t) {
    try {
        return ks.filter(I => I.pc == t)
    } catch {
        return lc
    }
}
const qs = t => {
    const A = X.c(18)
      , {modPriceAlert: I, difAmt: e} = t;
    let s, o;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(ic, {
        textAlign: "center",
        fontSize: "1.5rem",
        borderTopRadius: "5px",
        bg: "red",
        color: "white",
        fontWeight: "bolder",
        p: "2",
        children: "Price Change Alert"
    }),
    o = c.jsx(oA, {}),
    A[0] = s,
    A[1] = o) : (s = A[0],
    o = A[1]);
    let N;
    A[2] !== e ? (N = c.jsxs(rA, {
        fontWeight: 800,
        children: ["Please note you have to pay an additional amount of ₹", e, " as the price has been revised upwards."]
    }),
    A[2] = e,
    A[3] = N) : N = A[3];
    let i;
    A[4] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(rA, {
        children: "Please also note tickets once booked cannot be cancelled. No refund would be possible."
    }),
    A[4] = i) : i = A[4];
    let D;
    A[5] !== N ? (D = c.jsx(zA, {
        color: "red.600",
        fontSize: "1.2rem",
        children: c.jsxs(fe, {
            children: [N, i]
        })
    }),
    A[5] = N,
    A[6] = D) : D = A[6];
    let n;
    A[7] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx(oA, {}),
    A[7] = n) : n = A[7];
    let a;
    A[8] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(pI, {}),
    A[8] = a) : a = A[8];
    let r;
    A[9] !== I.onClose ? (r = c.jsx(fc, {
        p: "2",
        children: c.jsx(_, {
            onClick: I.onClose,
            leftIcon: a,
            colorScheme: "green",
            children: "Continue"
        })
    }),
    A[9] = I.onClose,
    A[10] = r) : r = A[10];
    let R;
    A[11] !== D || A[12] !== r ? (R = c.jsx(ac, {
        children: c.jsxs(Wt, {
            bg: "white",
            children: [s, o, D, n, r]
        })
    }),
    A[11] = D,
    A[12] = r,
    A[13] = R) : R = A[13];
    let p;
    return A[14] !== I.isOpen || A[15] !== I.onClose || A[16] !== R ? (p = c.jsx(kt, {
        isOpen: I.isOpen,
        onClose: I.onClose,
        size: "xl",
        children: R
    }),
    A[14] = I.isOpen,
    A[15] = I.onClose,
    A[16] = R,
    A[17] = p) : p = A[17],
    p
}
  , $s = () => {
    var V, $, eA, w, z, Z, AA, cA, Q, F;
    const t = Gc({
        queryKey: [103],
        queryFn: vI
    })
      , A = Gc({
        queryKey: [105],
        queryFn: JI
    })
      , {cartCount: I, totalAmount: e, tickets: s, merchandise: o, products: N, addons: i, reloadCart: D} = Rc(C => C)
      , {stopCartTimeout: n} = tI(C => C)
      , a = kA()
      , [r,R] = P.useState(-1)
      , [p,l] = P.useState(0)
      , [E,G] = P.useState("")
      , {session: h, update: m} = JA()
      , x = WA()
      , L = pc()
      , d = hA({
        mutationFn: Is
    })
      , H = hA({
        mutationFn: es
    })
      , f = hA({
        mutationFn: VI
    })
      , O = P.useRef(!0)
      , g = pc()
      , {register: K, handleSubmit: j, reset: y, formState: {errors: u}, setValue: B, watch: S} = gt({
        defaultValues: {
            firstName: (V = A.data) == null ? void 0 : V.firstName,
            lastName: ($ = A.data) == null ? void 0 : $.lastName,
            email: (eA = A.data) == null ? void 0 : eA.email,
            mobile: (w = A.data) == null ? void 0 : w.mobile,
            addLine1: "",
            addLine2: "",
            landmark: "",
            city: "",
            state: "",
            pinCode: ""
        }
    });
    P.useLayoutEffect( () => {
        R(I),
        l(e)
    }
    , [I, e]);
    const b = () => {
        m({
            ...h,
            name: E
        })
    }
    ;
    P.useEffect( () => {
        var C;
        d.isSuccess && D((C = d.data) == null ? void 0 : C.result)
    }
    , [d.isSuccess]),
    P.useEffect( () => {
        f.isSuccess && f.data.status === "Success" && b()
    }
    , [f.isSuccess]),
    P.useEffect( () => {
        var C, k, NA;
        if (H.isSuccess)
            if (((C = H == null ? void 0 : H.data) == null ? void 0 : C.status) === "Success") {
                const RA = H.data.result;
                window.location.href = RA.payment_links.web
            } else
                ((k = H.data) == null ? void 0 : k.status) == "Upgraded" ? (g.onOpen(),
                d.mutate()) : x({
                    title: "Failed to procced.",
                    description: (NA = H.data) == null ? void 0 : NA.message,
                    status: "error"
                })
    }
    , [H.isSuccess]);
    const Y = S("pinCode");
    P.useEffect( () => {
        if ((Y == null ? void 0 : Y.length) == 6) {
            const C = Gt(Y);
            C.length > 0 ? (B("city", C[0].ct),
            B("state", C[0].st)) : (x({
                title: "Oops, Delivery Not Available At Pincode.",
                status: "error"
            }),
            B("city", ""),
            B("state", ""))
        } else
            B("city", ""),
            B("state", "")
    }
    , [Y]),
    P.useLayoutEffect( () => {
        var C, k, NA, RA;
        A.isSuccess && y({
            addLine1: "",
            addLine2: "",
            city: "",
            landmark: "",
            pinCode: "",
            state: "",
            firstName: (C = A.data) == null ? void 0 : C.firstName,
            lastName: (k = A.data) == null ? void 0 : k.lastName,
            email: (NA = A.data) == null ? void 0 : NA.email,
            mobile: (RA = A.data) == null ? void 0 : RA.mobile
        })
    }
    , [A.isSuccess]);
    const J = C => {
        O.current.checked == !0 ? window.grecaptcha.enterprise.execute("6LcSfv8qAAAAAMU5LLBQoRRabXdbOefyM1Li1mMs", {
            action: "checkout"
        }).then(k => {
            if (n(),
            C.netAmount = e,
            C.recaptchaToken = k,
            H.mutate(C),
            !h.name) {
                G(C.firstName);
                const NA = {
                    firstName: C.firstName,
                    lastName: C.lastName,
                    mobile: C.mobile,
                    email: C.email,
                    dob: "",
                    anniversary: "",
                    loyaltyId: "",
                    photo: "",
                    gender: C.gender
                };
                f.mutate(NA)
            }
        }
        ).catch(k => {}
        ) : x({
            title: "Please accept terms & conditions and privacy policy before proceed.",
            status: "error"
        })
    }
      , q = () => {
        a("/")
    }
      , v = C => {
        const k = String.fromCharCode(C.which)
          , NA = /^[a-zA-Z]+$/.test(k);
        C.key === "Backspace" || C.key === "Delete" || C.key === "Tab" || C.key === " " || NA || C.preventDefault()
    }
      , W = C => {
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Home", "End"].includes(C.key) || C.preventDefault()
    }
    ;
    return r == -1 ? c.jsx(At, {}) : c.jsxs(c.Fragment, {
        children: [c.jsx(M, {
            py: ["2px", "10px"],
            px: "2px",
            fontSize: "1.8rem",
            children: "Checkout"
        }), r > 0 ? c.jsxs(U, {
            direction: ["column", "row"],
            spacing: "20px",
            children: [c.jsxs(T, {
                w: ["100%", "60%"],
                children: [c.jsxs(T, {
                    bg: "white",
                    borderRadius: "lg",
                    p: 3,
                    children: [c.jsx(TA, {
                        children: c.jsx(M, {
                            fontSize: "1.2rem",
                            children: "Personal Details"
                        })
                    }), c.jsxs(U, {
                        spacing: "4",
                        p: "3",
                        mt: "3",
                        children: [c.jsxs(U, {
                            direction: ["column", "row"],
                            children: [c.jsxs(tA, {
                                isRequired: !0,
                                isInvalid: u.firstName,
                                children: [c.jsx(IA, {
                                    color: "gray.500",
                                    children: "First name"
                                }), c.jsx(pA, {
                                    placeholder: "First name",
                                    ...K("firstName", {
                                        required: "Enter your first name"
                                    }),
                                    onKeyDown: v
                                }), c.jsx(KA, {
                                    children: u.firstName && u.firstName.message
                                })]
                            }), c.jsxs(tA, {
                                isRequired: !0,
                                isInvalid: u.lastName,
                                children: [c.jsx(IA, {
                                    color: "gray.500",
                                    children: "Last name"
                                }), c.jsx(pA, {
                                    placeholder: "Last name",
                                    ...K("lastName", {
                                        required: "Enter your last name"
                                    }),
                                    onKeyDown: v
                                }), c.jsx(KA, {
                                    children: u.lastName && u.lastName.message
                                })]
                            })]
                        }), c.jsxs(U, {
                            direction: ["column", "row"],
                            children: [c.jsxs(tA, {
                                isRequired: !0,
                                isInvalid: u.mobile,
                                children: [c.jsx(IA, {
                                    color: "gray.500",
                                    children: "Mobile No"
                                }), c.jsx(pA, {
                                    placeholder: "10 digits only",
                                    maxLength: 10,
                                    onKeyDown: W,
                                    ...K("mobile", {
                                        required: "Enter your mobile no"
                                    }),
                                    autoComplete: "off"
                                }), c.jsx(KA, {
                                    children: u.mobile && u.mobile.message
                                })]
                            }), c.jsxs(tA, {
                                isDisabled: (h == null ? void 0 : h.pool) == "D",
                                isRequired: !0,
                                isInvalid: u.email,
                                children: [c.jsx(IA, {
                                    color: "gray.500",
                                    children: "Email"
                                }), c.jsx(pA, {
                                    placeholder: "example@example.com",
                                    ...K("email", {
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email"
                                        },
                                        required: "Enter your email"
                                    }),
                                    autoComplete: "off"
                                }), c.jsx(KA, {
                                    children: u.email && u.email.message
                                })]
                            })]
                        }), !(h != null && h.name) && c.jsxs(tA, {
                            isRequired: !0,
                            isInvalid: u.gender,
                            children: [c.jsx(IA, {
                                color: "gray.500",
                                children: "Gender"
                            }), c.jsx(UI, {
                                name: "gender",
                                children: c.jsxs(U, {
                                    spacing: 5,
                                    direction: "row",
                                    children: [c.jsx(Rt, {
                                        colorScheme: "red",
                                        ...K("gender", {
                                            required: "Enter your gender"
                                        }),
                                        value: "M",
                                        children: "Male"
                                    }), c.jsx(Rt, {
                                        colorScheme: "red",
                                        ...K("gender", {
                                            required: "Enter your gender"
                                        }),
                                        value: "F",
                                        children: "Female"
                                    }), c.jsx(Rt, {
                                        colorScheme: "red",
                                        ...K("gender", {
                                            required: "Enter your gender"
                                        }),
                                        value: "O",
                                        children: "Others"
                                    })]
                                })
                            }), c.jsx(KA, {
                                children: u.gender && u.gender.message
                            })]
                        })]
                    })]
                }), (o.length > 0 || N.length > 0) && c.jsxs(T, {
                    bg: "white",
                    borderRadius: "lg",
                    p: 3,
                    mt: "2",
                    children: [c.jsxs(U, {
                        direction: ["column", "row"],
                        children: [c.jsx(M, {
                            fontSize: "1.2rem",
                            children: "Shipping Address"
                        }), c.jsx(nA, {}), c.jsxs(dt, {
                            children: [c.jsx(lt, {
                                variant: "outline",
                                as: _,
                                rightIcon: c.jsx(Ne, {}),
                                children: "Use Existing Address"
                            }), c.jsx(Mt, {
                                children: ((Z = (z = t.data) == null ? void 0 : z.result) == null ? void 0 : Z.length) > 0 ? (cA = (AA = t.data) == null ? void 0 : AA.result) == null ? void 0 : cA.map( (C, k) => c.jsx(YA, {
                                    onClick: () => y(C),
                                    children: C.addLine1
                                }, k)) : c.jsxs(U, {
                                    spacing: "3",
                                    px: "3",
                                    children: [c.jsx(M, {
                                        px: "3",
                                        color: "gray.400",
                                        textAlign: "center",
                                        children: "No Saved Address"
                                    }), c.jsx(Zc, {
                                        href: "/rcbian/addresses",
                                        children: c.jsx(_, {
                                            w: "100%",
                                            variant: "ghost",
                                            px: "3",
                                            colorScheme: "red",
                                            children: "Add New Address"
                                        })
                                    })]
                                })
                            })]
                        })]
                    }), c.jsx(oA, {
                        mt: "3"
                    }), c.jsxs(U, {
                        spacing: "4",
                        p: "3",
                        mt: "3",
                        children: [c.jsxs(tA, {
                            isRequired: !0,
                            isInvalid: u.addLine1,
                            children: [c.jsx(IA, {
                                color: "gray.500",
                                children: "Address (House no. / Building)"
                            }), c.jsx(pA, {
                                placeholder: "",
                                ...K("addLine1", {
                                    required: "Enter address line 1"
                                })
                            }), c.jsx(KA, {
                                children: u.addLine1 && u.addLine1.message
                            })]
                        }), c.jsxs(tA, {
                            isRequired: !0,
                            isInvalid: u.addLine2,
                            children: [c.jsx(IA, {
                                color: "gray.500",
                                children: "Locality (Area / Street)"
                            }), c.jsx(pA, {
                                placeholder: "",
                                ...K("addLine2", {
                                    required: "Enter address line 2"
                                })
                            }), c.jsx(KA, {
                                children: u.addLine2 && u.addLine2.message
                            })]
                        }), c.jsxs(tA, {
                            isInvalid: u.landmark,
                            children: [c.jsx(IA, {
                                color: "gray.500",
                                children: "Landmark"
                            }), c.jsx(pA, {
                                placeholder: "E.g. near chinnaswamy stadium",
                                ...K("landmark")
                            }), c.jsx(KA, {
                                children: u.landmark && u.landmark.message
                            })]
                        }), c.jsxs(U, {
                            direction: ["column", "row"],
                            children: [c.jsxs(tA, {
                                isRequired: !0,
                                isInvalid: u.pinCode,
                                children: [c.jsx(IA, {
                                    color: "gray.500",
                                    children: "Pincode"
                                }), c.jsx(pA, {
                                    placeholder: "6 digits only",
                                    maxLength: 6,
                                    onKeyDown: W,
                                    autoComplete: "off",
                                    ...K("pinCode", {
                                        required: "Enter any pin code"
                                    })
                                }), c.jsx(KA, {
                                    children: u.pinCode && u.pinCode.message
                                })]
                            }), c.jsxs(tA, {
                                isRequired: !0,
                                isInvalid: u.city,
                                children: [c.jsx(IA, {
                                    color: "gray.500",
                                    children: "City"
                                }), c.jsx(pA, {
                                    placeholder: "City Name",
                                    ...K("city", {
                                        required: "Enter your city"
                                    }),
                                    isReadOnly: !0
                                }), c.jsx(KA, {
                                    children: u.city && u.city.message
                                })]
                            }), c.jsxs(tA, {
                                isRequired: !0,
                                isInvalid: u.state,
                                children: [c.jsx(IA, {
                                    color: "gray.500",
                                    children: "State"
                                }), c.jsx(pA, {
                                    placeholder: "State Name",
                                    ...K("state", {
                                        required: "Enter your state"
                                    }),
                                    isReadOnly: !0
                                }), c.jsx(KA, {
                                    children: u.state && u.state.message
                                })]
                            })]
                        })]
                    })]
                }), s.length > 0 && c.jsxs(T, {
                    bg: "white",
                    my: "7px",
                    fontSize: "1.1rem",
                    borderRadius: "lg",
                    padding: 3,
                    color: "gray.600",
                    children: [c.jsx(Nt, {
                        colorScheme: "green",
                        fontSize: "1rem",
                        children: "M-Ticket"
                    }), c.jsx(T, {
                        fontSize: "0.85rem",
                        fontWeight: "normal",
                        mt: "15px",
                        children: c.jsxs(_t, {
                            children: [c.jsx(rA, {
                                color: "red",
                                children: "Screenshot/Photo of m-ticket is not valid for entry at the stadium. You will have to show the m-ticket by logging in to the rcb web app only."
                            }), c.jsx(rA, {
                                children: "Customers can access their tickets(s) from the My Account - Orders section on the website."
                            }), c.jsxs(rA, {
                                children: ["To access your m-ticket,", c.jsx("br", {}), c.jsx("span", {
                                    style: {
                                        fontFamily: "rcbFontB",
                                        color: "red"
                                    },
                                    children: "Go to My Orders → More Information → Create M-Ticket Password → Unlock M-Ticket → View M-Ticket → Enter New Password"
                                })]
                            }), c.jsx(rA, {
                                children: "It is mandatory to present the entire ticket(s) at the venue."
                            }), c.jsx(rA, {
                                children: "No physical ticket(s) are required to enter the venue."
                            })]
                        })
                    })]
                }), i.length > 0 && c.jsxs(T, {
                    bg: "white",
                    my: "7px",
                    fontSize: "1.1rem",
                    borderRadius: "lg",
                    padding: 3,
                    color: "gray.600",
                    children: [c.jsx(Nt, {
                        colorScheme: "orange",
                        fontSize: "1rem",
                        children: "Pickup"
                    }), " ", c.jsxs(M, {
                        as: "span",
                        color: "gray.500",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        children: [" ", "- Addons"]
                    }), c.jsx(T, {
                        fontSize: "0.85rem",
                        fontWeight: "normal",
                        mt: "15px",
                        children: c.jsxs(_t, {
                            children: [c.jsx(rA, {
                                children: "Addon food/merchandise which you have chosen has to be collected from the respective stands"
                            }), c.jsx(rA, {
                                children: "Food/Merchandise counter will be open one hour prior of the match"
                            }), c.jsx(rA, {
                                children: "You need to show your M Ticket at the counter to collect your addons"
                            })]
                        })
                    })]
                }), (o.length > 0 || N.length > 0) && c.jsxs(T, {
                    bg: "white",
                    my: "7px",
                    fontSize: "1.1rem",
                    borderRadius: "lg",
                    padding: 3,
                    color: "gray.600",
                    children: [c.jsx(Nt, {
                        colorScheme: "red",
                        fontSize: "1rem",
                        children: "Courier"
                    }), c.jsx(T, {
                        fontSize: "0.85rem",
                        fontWeight: "normal",
                        mt: "15px",
                        children: c.jsxs(_t, {
                            children: [c.jsx(rA, {
                                children: "Your order will be shipped soon from our delivery partner."
                            }), c.jsx(rA, {
                                children: "It will be delivered to the address specified at the time of booking."
                            })]
                        })
                    })]
                })]
            }), c.jsx(T, {
                w: ["100%", "40%"],
                children: c.jsxs(T, {
                    bg: "white",
                    borderRadius: "lg",
                    position: "sticky",
                    top: "62px",
                    children: [c.jsx(T, {
                        borderTopRadius: "lg",
                        bgGradient: "linear(to-r,#e2d3b9,#e0e5c2,#e2d3b9)",
                        fontSize: "1.2rem",
                        p: "10px",
                        children: "My Shopping Bag"
                    }), r > 0 && c.jsx(YI, {}), c.jsx(U, {
                        px: "4",
                        children: c.jsxs(ue, {
                            defaultChecked: !0,
                            colorScheme: "red",
                            isInvalid: !0,
                            ref: O,
                            children: ["I accept to the", " ", c.jsx(Zc, {
                                style: {
                                    color: "navy"
                                },
                                target: "blank",
                                href: "/terms-conditions",
                                children: "Ticket T & C"
                            }), ", ", c.jsx(Zc, {
                                style: {
                                    color: "navy"
                                },
                                target: "blank",
                                href: "https://www.royalchallengers.com/shop-terms-conditions",
                                children: "Merchandise T & C"
                            }), " ", "and", " ", c.jsx(Zc, {
                                style: {
                                    color: "navy"
                                },
                                target: "blank",
                                href: "https://www.royalchallengers.com/privacy-policy",
                                children: "Privacy Policy"
                            }), "."]
                        })
                    }), c.jsx(oA, {
                        mt: "3"
                    }), c.jsxs(U, {
                        px: ["1", "3"],
                        pt: "2",
                        mt: "3",
                        bg: "white",
                        direction: "row",
                        w: "100%",
                        position: ["fixed", "sticky"],
                        bottom: "0px",
                        zIndex: 999,
                        children: [c.jsxs(U, {
                            spacing: "0px",
                            width: "100%",
                            direction: "column",
                            children: [c.jsx(M, {
                                textAlign: "center",
                                w: "100%",
                                children: "Total Amount"
                            }), c.jsxs(M, {
                                fontWeight: "bold",
                                fontSize: "1.3rem",
                                textAlign: "center",
                                w: "100%",
                                children: ["₹ ", p]
                            })]
                        }), c.jsx(_, {
                            w: "100%",
                            size: "lg",
                            colorScheme: "red",
                            onClick: j(J),
                            leftIcon: c.jsx(De, {}),
                            isLoading: H.isLoading,
                            children: "PAY NOW"
                        })]
                    }), c.jsx(oA, {
                        mt: "3"
                    }), c.jsx(T, {
                        p: "3",
                        children: c.jsx(_, {
                            variant: "outline",
                            w: "100%",
                            colorScheme: "red",
                            onClick: () => q(),
                            children: "Continue Shopping"
                        })
                    })]
                })
            })]
        }) : c.jsx(DA, {
            w: "100%",
            h: "78vh",
            children: c.jsxs(U, {
                spacing: 6,
                children: [c.jsx(DA, {
                    children: c.jsx(Wc, {
                        fontSize: "6rem",
                        color: "silver"
                    })
                }), c.jsx(M, {
                    children: "Your shopping bag is empty."
                }), c.jsx(T, {
                    textAlign: "center",
                    children: c.jsx(_, {
                        colorScheme: "red",
                        onClick: () => a("/"),
                        children: "Start Shopping"
                    })
                })]
            })
        }), c.jsx(Zs, {
            modWating: L
        }), g.isOpen && c.jsx(qs, {
            modPriceAlert: g,
            difAmt: (F = (Q = H.data) == null ? void 0 : Q.result) == null ? void 0 : F.difAmt
        })]
    })
}
  , Zs = t => {
    const A = X.c(6)
      , {modWating: I} = t;
    let e;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (e = c.jsx(ac, {}),
    A[0] = e) : e = A[0];
    let s;
    A[1] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(DA, {
        children: c.jsx(fA, {
            src: "/imgs/rcb-logo-new.png",
            alt: "",
            width: 60,
            height: 90
        })
    }),
    A[1] = s) : s = A[1];
    let o;
    A[2] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(Jc, {
        bg: "rgba(255,255,255,0.9)",
        children: c.jsx(zA, {
            children: c.jsx(DA, {
                h: "97vh",
                w: "100%",
                children: c.jsxs(U, {
                    spacing: "25px",
                    textAlign: "center",
                    children: [s, c.jsx(DA, {
                        children: c.jsx(zt, {
                            color: "red",
                            size: "xl"
                        })
                    }), c.jsx(M, {
                        fontSize: "2rem",
                        children: "Verifying your payment."
                    }), c.jsx(M, {
                        fontSize: "1.2rem",
                        children: "Don't refresh the page."
                    })]
                })
            })
        })
    }),
    A[2] = o) : o = A[2];
    let N;
    return A[3] !== I.isOpen || A[4] !== I.onClose ? (N = c.jsxs(_c, {
        size: "full",
        isOpen: I.isOpen,
        onClose: I.onClose,
        children: [e, o]
    }),
    A[3] = I.isOpen,
    A[4] = I.onClose,
    A[5] = N) : N = A[5],
    N
}
  , DI = () => {
    const t = X.c(16)
      , A = WA();
    let I, e;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (I = [0, 3],
    e = ["0", "2"],
    t[0] = I,
    t[1] = e) : (I = t[0],
    e = t[1]);
    let s;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(T, {
        my: "3",
        mt: I,
        px: e,
        children: c.jsx(ct, {
            text: "My Account",
            icon: c.jsx(nI, {})
        })
    }),
    t[2] = s) : s = t[2];
    let o, N;
    t[3] === Symbol.for("react.memo_cache_sentinel") ? (o = [1, 2, 3],
    N = ["10px", "40px"],
    t[3] = o,
    t[4] = N) : (o = t[3],
    N = t[4]);
    let i;
    t[5] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(Et, {
        title: "My Orders",
        caption: "Track, return, or buy things again.",
        icon: c.jsx(Ht, {
            fontSize: "2.67rem"
        }),
        url: "/rcbian/orders"
    }),
    t[5] = i) : i = t[5];
    let D;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(Et, {
        title: "My Addresses",
        caption: "Edit addresses for orders and gifts.",
        icon: c.jsx(Vt, {
            fontSize: "2.67rem"
        }),
        url: "/rcbian/addresses"
    }),
    t[6] = D) : D = t[6];
    let n;
    t[7] !== A ? (n = () => A({
        title: "Coming Soon.",
        status: "success"
    }),
    t[7] = A,
    t[8] = n) : n = t[8];
    let a;
    t[9] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(Et, {
        title: "Loyalty Points",
        caption: "Earn Runs, get Rewards.",
        icon: c.jsx(re, {
            fontSize: "2.67rem"
        }),
        url: ""
    }),
    t[9] = a) : a = t[9];
    let r;
    t[10] !== n ? (r = c.jsx(T, {
        w: "100%",
        onClick: n,
        children: a
    }),
    t[10] = n,
    t[11] = r) : r = t[11];
    let R;
    t[12] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx(Et, {
        title: "Profile",
        caption: "View personal details.",
        icon: c.jsx(ht, {
            fontSize: "2.67rem"
        }),
        url: "/rcbian/profile"
    }),
    t[12] = R) : R = t[12];
    let p;
    t[13] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(Et, {
        title: "Help Center",
        caption: "The first help guide for customers.",
        icon: c.jsx(vt, {
            fontSize: "2.67rem"
        }),
        url: "/help"
    }),
    t[13] = p) : p = t[13];
    let l;
    return t[14] !== r ? (l = c.jsxs(c.Fragment, {
        children: [s, c.jsx(U, {
            p: "2",
            children: c.jsxs(Ut, {
                columns: o,
                spacing: N,
                children: [i, D, r, R, p]
            })
        })]
    }),
    t[14] = r,
    t[15] = l) : l = t[15],
    l
}
  , Et = t => {
    const A = X.c(16)
      , {title: I, caption: e, icon: s, url: o} = t
      , N = kA();
    let i;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (i = ["80px", "100px"],
    A[0] = i) : i = A[0];
    let D;
    A[1] !== N || A[2] !== o ? (D = () => N(o),
    A[1] = N,
    A[2] = o,
    A[3] = D) : D = A[3];
    let n;
    A[4] === Symbol.for("react.memo_cache_sentinel") ? (n = {
        boxShadow: "0 0 10px #ccc"
    },
    A[4] = n) : n = A[4];
    let a;
    A[5] !== I ? (a = c.jsx(M, {
        fontSize: "1.15rem",
        children: I
    }),
    A[5] = I,
    A[6] = a) : a = A[6];
    let r;
    A[7] !== e ? (r = c.jsx(M, {
        fontSize: ".9rem",
        fontWeight: "500",
        color: "gray.500",
        children: e
    }),
    A[7] = e,
    A[8] = r) : r = A[8];
    let R;
    A[9] !== a || A[10] !== r ? (R = c.jsxs(U, {
        textAlign: "left",
        ml: "3",
        children: [a, r]
    }),
    A[9] = a,
    A[10] = r,
    A[11] = R) : R = A[11];
    let p;
    return A[12] !== s || A[13] !== D || A[14] !== R ? (p = c.jsx(_, {
        variant: "ghost",
        leftIcon: s,
        minH: i,
        px: "15px",
        justifyContent: "left",
        colorScheme: "yellow",
        bg: "white",
        w: "100%",
        onClick: D,
        _hover: n,
        children: R
    }),
    A[12] = s,
    A[13] = D,
    A[14] = R,
    A[15] = p) : p = A[15],
    p
}
  , Qs = () => {
    const t = X.c(17);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(ct, {
        text: "Help Center",
        icon: c.jsx(vt, {})
    }),
    t[0] = A) : A = t[0];
    let I;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (I = c.jsx(M, {
        p: "3",
        bg: "gray.200",
        bgGradient: "linear(to-r,gray.100,white,gray.100)",
        borderTopRadius: "6px",
        fontWeight: "bold",
        children: "Get In Touch for Query"
    }),
    t[1] = I) : I = t[1];
    let e, s;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = ["10px", "50px"],
    s = ["column", "row"],
    t[2] = e,
    t[3] = s) : (e = t[2],
    s = t[3]);
    let o;
    t[4] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(sI, {}),
    t[4] = o) : o = t[4];
    let N;
    t[5] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsxs(TA, {
        children: [o, c.jsx(M, {
            children: c.jsx("a", {
                href: "tel:+91 8884864040",
                children: "+91 8884864040"
            })
        })]
    }),
    t[5] = N) : N = t[5];
    let i;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(oI, {}),
    t[6] = i) : i = t[6];
    let D;
    t[7] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsxs(T, {
        bg: "white",
        mt: "2",
        borderTopRadius: "6px",
        border: "1px solid #eee",
        children: [I, c.jsxs(U, {
            p: "3",
            px: "6",
            fontWeight: "bold",
            spacing: e,
            direction: s,
            children: [N, c.jsxs(TA, {
                children: [i, " ", c.jsx(M, {
                    children: c.jsx("a", {
                        href: "mailto:rcbtickets@ticketgenie.in",
                        children: "rcbtickets@ticketgenie.in"
                    })
                })]
            })]
        }), c.jsx(M, {
            p: "3",
            px: "6",
            children: "Timing : 10:00AM to 06:00PM"
        })]
    }),
    t[7] = D) : D = t[7];
    let n;
    t[8] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx(M, {
        p: "3",
        bg: "gray.200",
        bgGradient: "linear(to-r,gray.100,white,gray.100)",
        borderTopRadius: "6px",
        fontWeight: "bold",
        children: "Corporate/Bulk Booking"
    }),
    t[8] = n) : n = t[8];
    let a, r;
    t[9] === Symbol.for("react.memo_cache_sentinel") ? (r = ["10px", "50px"],
    a = ["column", "row"],
    t[9] = a,
    t[10] = r) : (a = t[9],
    r = t[10]);
    let R;
    t[11] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx(sI, {}),
    t[11] = R) : R = t[11];
    let p;
    t[12] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsxs(TA, {
        children: [R, c.jsx(M, {
            children: c.jsx("a", {
                href: "tel:+91 8884256665",
                children: "+91 8884256665"
            })
        })]
    }),
    t[12] = p) : p = t[12];
    let l;
    t[13] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx(oI, {}),
    t[13] = l) : l = t[13];
    let E;
    t[14] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsxs(T, {
        bg: "white",
        mt: "2",
        borderTopRadius: "6px",
        border: "1px solid #eee",
        children: [n, c.jsxs(U, {
            p: "3",
            px: "6",
            fontWeight: "bold",
            spacing: r,
            direction: a,
            children: [p, c.jsxs(TA, {
                children: [l, " ", c.jsx(M, {
                    children: c.jsx("a", {
                        href: "mailto:corporatebookings@ticketgenie.in",
                        children: "corporatebookings@ticketgenie.in"
                    })
                })]
            })]
        }), c.jsx(M, {
            p: "3",
            px: "6",
            children: "Timing : 10:00AM to 06:00PM"
        })]
    }),
    t[14] = E) : E = t[14];
    let G;
    t[15] === Symbol.for("react.memo_cache_sentinel") ? (G = c.jsx(M, {
        p: "3",
        bg: "gray.200",
        bgGradient: "linear(to-r,gray.100,white,gray.100)",
        borderTopRadius: "6px",
        fontWeight: "bold",
        children: "FAQ"
    }),
    t[15] = G) : G = t[15];
    let h;
    return t[16] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(c.Fragment, {
        children: c.jsxs(U, {
            mt: "2",
            children: [A, D, E, c.jsxs(T, {
                bg: "white",
                mt: "2",
                borderTopRadius: "6px",
                border: "1px solid #eee",
                children: [G, c.jsx(qt, {
                    allowToggle: !0,
                    children: Xs.map(Ao)
                })]
            })]
        })
    }),
    t[16] = h) : h = t[16],
    h
}
  , Xs = [{
    header: "How do I download M-ticket?",
    text: "Once your booking confirmed, you can download the M ticket from Order Section and no printout is needed is required you can just scan the QR Code at the venue to get the entry."
}, {
    header: "How do I pick my addons?",
    text: "Addon food which you have chosen has to be collected from the respective stands. Food counter will be open one hour prior of the match You need to show your M -Ticket at the counter to collect your addons."
}, {
    header: "How do I get my merchandise?",
    text: "Once your order is confirmed, the merchandise partner will send you the notification updates about the dispatch and the consignment tracking details from where you directly track your consignments"
}, {
    header: "Can we cancel or replace our Tickets/Merchandise/Products?",
    text: "No. As per prevailing regulations, once a transaction has been done, it is deemed sold. It cannot be replaced or cancelled."
}, {
    header: "I accidentally booked my tickets for the incorrect dates, can you change the tickets?",
    text: "No. It is not possible to replace or refund tickets once they have been confirmed."
}, {
    header: "I accidentally booked my merchandise for the incorrect sizes, can you change the merchandise?",
    text: "No. It is not possible to replace or refund merchandise once they have been confirmed."
}, {
    header: "What is the mode of payment once I book my tickets?",
    text: "At Ticketgenie accepts UPI, NET BANKING, VISA & MASTER CREDIT / DEBIT CARDS."
}, {
    header: "When I enter my credit card information, the site asks for a CVV code. What is the CVV code?",
    text: "The CVV (Card Verification Value) is a 3 or 4 digit code embossed or imprinted on the upper right corner of the signature strip on the reverse side of the VISA and Mastercard. This is an additional security measure that also ensures that you have access or in physical possession of the credit card in order to use the CVV code."
}, {
    header: "My booking has been rejected, but my credit card has been charged? What do I do?",
    text: "This is a very rare situation, and can occur in case of a network fluctuation of the customer or the bank payment gateway. Hence, the customers booking will not be successful and no tickets will be issued, but at the same time the amount may be deducted by the bank from the customer's account. In this case, a reverse request for the charge on your credit card will be sent by us to the bank. Please be assured that if the ticket has not been successfully booked, the charges on the card will be reversed within 7 working days."
}, {
    header: "The refund has still not been credited in my credit card account",
    text: "As per our company policy we send a reverse request to the bank by us. Depending on the card issuing bank, it can sometimes take up to 10 - 15 days for the reversal to take effect."
}, {
    header: "In spite of several reminders, the refund is still not reflecting on my card.",
    text: "If it has been longer than 45 days, please contact us on refund@tgipl.com and we will take this up as a priority with the bank to ensure the refund is done, at the earliest."
}, {
    header: "Can I book my tickets without my credit card since I don't want to disclose my credit card details?",
    text: "Currently, Ticketgenie offers Net Banking, credit and debit card bookings. The site is completely secure. However, if you wish to pay by cash, you can check for the nearest off line sales outlet on our website or write to us at info@tgipl.com to book tickets."
}, {
    header: "Why is the speed of this website so slow?",
    text: "We have optimized the website to offer the best user experience. Please check your connection with your Internet Service Provider."
}, {
    header: "Does this site use cookies?",
    text: "We use cookies to help us customize our site to our customer's requirements, offer a more personalized service and recommend events based on your browsing patterns."
}, {
    header: "What do I do if my booking is not completed?",
    text: "In case of timed out transaction we may have received amount from your banker, kindly verify with your bank. If we have received the amount you need not do anything, you will get a confirmation email from info@ticketgenie.in within 2 working days confirming your ticket(s). If the amount is not charged to your account kindly re-book your ticket(s). if you have any further Queries or concerns, you may kindly mail us info@tgipl.com mentioning the transaction details."
}];
function Ao(t, A) {
    return c.jsxs($t, {
        m: "2",
        borderWidth: "0px",
        children: [c.jsxs(Zt, {
            borderRadius: "md",
            bg: "gray.100",
            borderWidth: "0px",
            _expanded: {
                bg: "gray.700",
                color: "white"
            },
            children: [c.jsx(T, {
                as: "span",
                flex: "1",
                textAlign: "left",
                children: t.header
            }), c.jsx(Qt, {})]
        }), c.jsx(Xt, {
            pb: 4,
            color: "gray.600",
            children: t.text
        })]
    }, A)
}
const Yt = t => {
    const A = X.c(5)
      , {path: I} = t;
    let e;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (e = c.jsx(lI, {
        color: "#ccc"
    }),
    A[0] = e) : e = A[0];
    let s;
    A[1] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(Dt, {
        children: c.jsx(rt, {
            as: Zc,
            color: "yellow.700",
            href: "/",
            children: "Shop"
        })
    }),
    A[1] = s) : s = A[1];
    let o;
    A[2] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(Dt, {
        children: c.jsx(rt, {
            as: Zc,
            color: "yellow.700",
            href: "/rcbian/mypage",
            children: "My Account"
        })
    }),
    A[2] = o) : o = A[2];
    let N;
    return A[3] !== I ? (N = c.jsx(T, {
        py: "10px",
        px: "5px",
        fontSize: ".9rem",
        children: c.jsxs(MI, {
            spacing: "8px",
            separator: e,
            children: [s, o, c.jsx(Dt, {
                isCurrentPage: !0,
                children: c.jsx(rt, {
                    href: "#",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    w: "150px",
                    children: I
                })
            })]
        })
    }),
    A[3] = I,
    A[4] = N) : N = A[4],
    N
}
  , co = () => {
    var h, m, x, L;
    const t = X.c(26);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = {
        queryKey: [1001],
        queryFn: vI
    },
    t[0] = A) : A = t[0];
    const I = Gc(A)
      , e = pc();
    let s;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(Yt, {
        path: "Addresses"
    }),
    t[1] = s) : s = t[1];
    let o;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(ct, {
        text: "My Addresses",
        icon: c.jsx(Vt, {})
    }),
    t[2] = o) : o = t[2];
    let N, i, D;
    t[3] === Symbol.for("react.memo_cache_sentinel") ? (N = [1, 2, 3],
    i = ["10px", "25px"],
    D = ["10px", "25px"],
    t[3] = N,
    t[4] = i,
    t[5] = D) : (N = t[3],
    i = t[4],
    D = t[5]);
    let n;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (n = ["80px", "300px"],
    t[6] = n) : n = t[6];
    let a;
    t[7] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(Re, {}),
    t[7] = a) : a = t[7];
    let r;
    t[8] !== e ? (r = c.jsx(_, {
        variant: "outline",
        width: "100%",
        minH: n,
        colorScheme: "red",
        bg: "white",
        fontSize: "1.3rem",
        leftIcon: a,
        borderStyle: "dashed",
        onClick: () => e.onOpen(),
        children: "Add New"
    }),
    t[8] = e,
    t[9] = r) : r = t[9];
    let R;
    t[10] !== I.isPending ? (R = I.isPending && c.jsx(At, {}),
    t[10] = I.isPending,
    t[11] = R) : R = t[11];
    let p;
    t[12] !== ((h = I.data) == null ? void 0 : h.result) || t[13] !== I.isSuccess || t[14] !== I.refetch ? (p = I.isSuccess && c.jsx(c.Fragment, {
        children: (x = (m = I.data) == null ? void 0 : m.result) == null ? void 0 : x.map( (d, H) => c.jsx(to, {
            address: d,
            refetch: I.refetch
        }, H))
    }),
    t[12] = (L = I.data) == null ? void 0 : L.result,
    t[13] = I.isSuccess,
    t[14] = I.refetch,
    t[15] = p) : p = t[15];
    let l;
    t[16] !== p || t[17] !== r || t[18] !== R ? (l = c.jsxs(U, {
        children: [o, c.jsxs(Ut, {
            columns: N,
            spacing: i,
            mt: D,
            children: [r, R, p]
        })]
    }),
    t[16] = p,
    t[17] = r,
    t[18] = R,
    t[19] = l) : l = t[19];
    let E;
    t[20] !== I.refetch || t[21] !== e ? (E = c.jsx(Io, {
        dialogOpener: e,
        refetch: I.refetch
    }),
    t[20] = I.refetch,
    t[21] = e,
    t[22] = E) : E = t[22];
    let G;
    return t[23] !== l || t[24] !== E ? (G = c.jsxs(c.Fragment, {
        children: [s, l, E]
    }),
    t[23] = l,
    t[24] = E,
    t[25] = G) : G = t[25],
    G
}
  , to = t => {
    const A = X.c(49)
      , {address: I, refetch: e} = t
      , s = pc()
      , o = pc();
    let N;
    A[0] !== I.firstName || A[1] !== I.lastName ? (N = c.jsxs(M, {
        fontWeight: "bold",
        fontSize: "1rem",
        children: [I.firstName, " ", I.lastName]
    }),
    A[0] = I.firstName,
    A[1] = I.lastName,
    A[2] = N) : N = A[2];
    let i;
    A[3] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(oA, {
        my: "2"
    }),
    A[3] = i) : i = A[3];
    let D;
    A[4] !== I.addLine1 ? (D = c.jsx(M, {
        children: I.addLine1
    }),
    A[4] = I.addLine1,
    A[5] = D) : D = A[5];
    let n;
    A[6] !== I.addLine2 ? (n = c.jsx(M, {
        children: I.addLine2
    }),
    A[6] = I.addLine2,
    A[7] = n) : n = A[7];
    let a;
    A[8] !== I.landmark ? (a = c.jsx(M, {
        children: I.landmark
    }),
    A[8] = I.landmark,
    A[9] = a) : a = A[9];
    let r;
    A[10] !== I.city || A[11] !== I.state ? (r = c.jsxs(M, {
        children: [I.city, ", ", I.state]
    }),
    A[10] = I.city,
    A[11] = I.state,
    A[12] = r) : r = A[12];
    let R;
    A[13] !== I.pinCode ? (R = c.jsxs(M, {
        children: ["PIN Code : ", I.pinCode]
    }),
    A[13] = I.pinCode,
    A[14] = R) : R = A[14];
    let p;
    A[15] !== I.mobile ? (p = c.jsxs(M, {
        children: ["Mobile No. : ", I.mobile]
    }),
    A[15] = I.mobile,
    A[16] = p) : p = A[16];
    let l;
    A[17] !== I.email ? (l = c.jsxs(M, {
        children: ["Email : ", I.email]
    }),
    A[17] = I.email,
    A[18] = l) : l = A[18];
    let E;
    A[19] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(oA, {
        my: "2"
    }),
    A[19] = E) : E = A[19];
    let G;
    A[20] === Symbol.for("react.memo_cache_sentinel") ? (G = c.jsx(nA, {}),
    A[20] = G) : G = A[20];
    let h;
    A[21] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(ie, {}),
    A[21] = h) : h = A[21];
    let m;
    A[22] !== s ? (m = c.jsx(_, {
        colorScheme: "blue",
        leftIcon: h,
        onClick: () => s.onOpen(),
        children: "Edit"
    }),
    A[22] = s,
    A[23] = m) : m = A[23];
    let x;
    A[24] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(aI, {}),
    A[24] = x) : x = A[24];
    let L;
    A[25] !== o ? (L = c.jsx(_, {
        colorScheme: "red",
        leftIcon: x,
        onClick: () => o.onOpen(),
        children: "Delete"
    }),
    A[25] = o,
    A[26] = L) : L = A[26];
    let d;
    A[27] !== m || A[28] !== L ? (d = c.jsxs(TA, {
        children: [G, m, L]
    }),
    A[27] = m,
    A[28] = L,
    A[29] = d) : d = A[29];
    let H;
    A[30] !== I || A[31] !== s || A[32] !== e ? (H = c.jsx(eo, {
        address: I,
        dialogOpener: s,
        refetch: e
    }),
    A[30] = I,
    A[31] = s,
    A[32] = e,
    A[33] = H) : H = A[33];
    let f;
    A[34] !== I || A[35] !== o ? (f = c.jsx(so, {
        address: I,
        dialogDel: o
    }),
    A[34] = I,
    A[35] = o,
    A[36] = f) : f = A[36];
    let O;
    return A[37] !== N || A[38] !== d || A[39] !== H || A[40] !== f || A[41] !== D || A[42] !== n || A[43] !== a || A[44] !== r || A[45] !== R || A[46] !== p || A[47] !== l ? (O = c.jsxs(T, {
        w: "100%",
        h: "300px",
        bg: "white",
        p: "15px",
        borderRadius: "md",
        shadow: "sm",
        fontSize: "0.9rem",
        color: "gray.600",
        children: [N, i, D, n, a, r, R, p, l, E, d, H, f]
    }),
    A[37] = N,
    A[38] = d,
    A[39] = H,
    A[40] = f,
    A[41] = D,
    A[42] = n,
    A[43] = a,
    A[44] = r,
    A[45] = R,
    A[46] = p,
    A[47] = l,
    A[48] = O) : O = A[48],
    O
}
  , Io = t => {
    const A = X.c(175)
      , {dialogOpener: I, refetch: e} = t;
    JA();
    const s = WA();
    kA();
    let o;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (o = {
        defaultValues: {
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            addLine1: "",
            addLine2: "",
            landmark: "",
            city: "",
            state: "",
            pinCode: "",
            addType: "",
            isDefault: "N"
        }
    },
    A[0] = o) : o = A[0];
    const {register: N, handleSubmit: i, reset: D, formState: n, watch: a, setValue: r} = gt(o)
      , {errors: R} = n;
    let p;
    A[1] === Symbol.for("react.memo_cache_sentinel") ? (p = {
        mutationFn: Ws
    },
    A[1] = p) : p = A[1];
    const l = hA(p);
    let E;
    A[2] !== l ? (E = Yc => {
        l.mutate(Yc)
    }
    ,
    A[2] = l,
    A[3] = E) : E = A[3];
    const G = E;
    let h;
    A[4] !== I || A[5] !== l.data || A[6] !== l.isSuccess || A[7] !== e || A[8] !== D || A[9] !== s ? (h = () => {
        l.isSuccess && l.data.status === "Success" && (e(),
        I.onClose(),
        D(),
        s({
            title: "Address Saved.",
            status: "success",
            duration: "1500"
        }))
    }
    ,
    A[4] = I,
    A[5] = l.data,
    A[6] = l.isSuccess,
    A[7] = e,
    A[8] = D,
    A[9] = s,
    A[10] = h) : h = A[10];
    let m;
    A[11] !== l.isSuccess ? (m = [l.isSuccess],
    A[11] = l.isSuccess,
    A[12] = m) : m = A[12],
    P.useEffect(h, m);
    const x = oo;
    let L;
    A[13] !== a ? (L = a("pinCode"),
    A[13] = a,
    A[14] = L) : L = A[14];
    const d = L;
    let H;
    A[15] !== d || A[16] !== r || A[17] !== s ? (H = () => {
        if ((d == null ? void 0 : d.length) == 6) {
            const Yc = Gt(d);
            Yc.length > 0 ? (r("city", Yc[0].ct),
            r("state", Yc[0].st)) : (s({
                title: "Oops, Delivery Not Available At Pincode.",
                status: "error",
                duration: "1500"
            }),
            r("city", ""),
            r("state", ""))
        } else
            r("city", ""),
            r("state", "")
    }
    ,
    A[15] = d,
    A[16] = r,
    A[17] = s,
    A[18] = H) : H = A[18];
    let f;
    A[19] !== d ? (f = [d],
    A[19] = d,
    A[20] = f) : f = A[20],
    P.useEffect(H, f);
    const O = I.isOpen
      , g = I.onClose;
    let K, j;
    A[21] === Symbol.for("react.memo_cache_sentinel") ? (K = ["full", "xl"],
    j = c.jsx(ac, {}),
    A[21] = K,
    A[22] = j) : (K = A[21],
    j = A[22]);
    let y, u, B;
    A[23] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsx(ic, {
        children: "Add Address"
    }),
    u = c.jsx(Xc, {
        bg: "red.600",
        borderRadius: "full",
        color: "white"
    }),
    B = c.jsx(oA, {}),
    A[23] = y,
    A[24] = u,
    A[25] = B) : (y = A[23],
    u = A[24],
    B = A[25]);
    let S;
    A[26] === Symbol.for("react.memo_cache_sentinel") ? (S = ["column", "row"],
    A[26] = S) : S = A[26];
    const b = R.firstName;
    let Y;
    A[27] === Symbol.for("react.memo_cache_sentinel") ? (Y = c.jsx(IA, {
        color: "gray.500",
        children: "First name"
    }),
    A[27] = Y) : Y = A[27];
    let J;
    A[28] !== N ? (J = N("firstName", {
        required: "Enter your first name"
    }),
    A[28] = N,
    A[29] = J) : J = A[29];
    let q;
    A[30] !== J ? (q = c.jsx(pA, {
        placeholder: "First name",
        ...J
    }),
    A[30] = J,
    A[31] = q) : q = A[31];
    const v = R.firstName && R.firstName.message;
    let W;
    A[32] !== v ? (W = c.jsx(KA, {
        children: v
    }),
    A[32] = v,
    A[33] = W) : W = A[33];
    let V;
    A[34] !== R.firstName || A[35] !== q || A[36] !== W ? (V = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: b,
        children: [Y, q, W]
    }),
    A[34] = R.firstName,
    A[35] = q,
    A[36] = W,
    A[37] = V) : V = A[37];
    const $ = R.lastName;
    let eA;
    A[38] === Symbol.for("react.memo_cache_sentinel") ? (eA = c.jsx(IA, {
        color: "gray.500",
        children: "Last name"
    }),
    A[38] = eA) : eA = A[38];
    let w;
    A[39] !== N ? (w = N("lastName", {
        required: "Enter your last name"
    }),
    A[39] = N,
    A[40] = w) : w = A[40];
    let z;
    A[41] !== w ? (z = c.jsx(pA, {
        placeholder: "Last name",
        ...w
    }),
    A[41] = w,
    A[42] = z) : z = A[42];
    const Z = R.lastName && R.lastName.message;
    let AA;
    A[43] !== Z ? (AA = c.jsx(KA, {
        children: Z
    }),
    A[43] = Z,
    A[44] = AA) : AA = A[44];
    let cA;
    A[45] !== R.lastName || A[46] !== z || A[47] !== AA ? (cA = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: $,
        children: [eA, z, AA]
    }),
    A[45] = R.lastName,
    A[46] = z,
    A[47] = AA,
    A[48] = cA) : cA = A[48];
    let Q;
    A[49] !== V || A[50] !== cA ? (Q = c.jsxs(U, {
        direction: S,
        children: [V, cA]
    }),
    A[49] = V,
    A[50] = cA,
    A[51] = Q) : Q = A[51];
    let F;
    A[52] === Symbol.for("react.memo_cache_sentinel") ? (F = ["column", "row"],
    A[52] = F) : F = A[52];
    const C = R.mobile;
    let k;
    A[53] === Symbol.for("react.memo_cache_sentinel") ? (k = c.jsx(IA, {
        color: "gray.500",
        children: "Mobile No"
    }),
    A[53] = k) : k = A[53];
    let NA;
    A[54] !== N ? (NA = N("mobile", {
        required: "Enter your mobile no"
    }),
    A[54] = N,
    A[55] = NA) : NA = A[55];
    let RA;
    A[56] !== NA ? (RA = c.jsx(pA, {
        placeholder: "10 digits only",
        maxLength: 10,
        onKeyDown: x,
        ...NA
    }),
    A[56] = NA,
    A[57] = RA) : RA = A[57];
    const EA = R.mobile && R.mobile.message;
    let lA;
    A[58] !== EA ? (lA = c.jsx(KA, {
        children: EA
    }),
    A[58] = EA,
    A[59] = lA) : lA = A[59];
    let dA;
    A[60] !== R.mobile || A[61] !== RA || A[62] !== lA ? (dA = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: C,
        children: [k, RA, lA]
    }),
    A[60] = R.mobile,
    A[61] = RA,
    A[62] = lA,
    A[63] = dA) : dA = A[63];
    const mA = R.email;
    let xA;
    A[64] === Symbol.for("react.memo_cache_sentinel") ? (xA = c.jsx(IA, {
        color: "gray.500",
        children: "Email"
    }),
    A[64] = xA) : xA = A[64];
    let aA;
    A[65] !== N ? (aA = N("email", {
        required: "Enter your email"
    }),
    A[65] = N,
    A[66] = aA) : aA = A[66];
    let LA;
    A[67] !== aA ? (LA = c.jsx(pA, {
        placeholder: "example@example.com",
        ...aA
    }),
    A[67] = aA,
    A[68] = LA) : LA = A[68];
    const HA = R.email && R.email.message;
    let SA;
    A[69] !== HA ? (SA = c.jsx(KA, {
        children: HA
    }),
    A[69] = HA,
    A[70] = SA) : SA = A[70];
    let uA;
    A[71] !== R.email || A[72] !== LA || A[73] !== SA ? (uA = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: mA,
        children: [xA, LA, SA]
    }),
    A[71] = R.email,
    A[72] = LA,
    A[73] = SA,
    A[74] = uA) : uA = A[74];
    let GA;
    A[75] !== dA || A[76] !== uA ? (GA = c.jsxs(U, {
        direction: F,
        children: [dA, uA]
    }),
    A[75] = dA,
    A[76] = uA,
    A[77] = GA) : GA = A[77];
    const jA = R.addLine1;
    let _A;
    A[78] === Symbol.for("react.memo_cache_sentinel") ? (_A = c.jsx(IA, {
        color: "gray.500",
        children: "Address (House no. / Building)"
    }),
    A[78] = _A) : _A = A[78];
    let yA;
    A[79] !== N ? (yA = N("addLine1", {
        required: "Enter address line 1"
    }),
    A[79] = N,
    A[80] = yA) : yA = A[80];
    let sA;
    A[81] !== yA ? (sA = c.jsx(pA, {
        placeholder: "",
        ...yA
    }),
    A[81] = yA,
    A[82] = sA) : sA = A[82];
    const iA = R.addLine1 && R.addLine1.message;
    let BA;
    A[83] !== iA ? (BA = c.jsx(KA, {
        children: iA
    }),
    A[83] = iA,
    A[84] = BA) : BA = A[84];
    let bA;
    A[85] !== R.addLine1 || A[86] !== sA || A[87] !== BA ? (bA = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: jA,
        children: [_A, sA, BA]
    }),
    A[85] = R.addLine1,
    A[86] = sA,
    A[87] = BA,
    A[88] = bA) : bA = A[88];
    const FA = R.addLine2;
    let Vc;
    A[89] === Symbol.for("react.memo_cache_sentinel") ? (Vc = c.jsx(IA, {
        color: "gray.500",
        children: "Locality (Area / Street)"
    }),
    A[89] = Vc) : Vc = A[89];
    let Tc;
    A[90] !== N ? (Tc = N("addLine2", {
        required: "Enter address line 2"
    }),
    A[90] = N,
    A[91] = Tc) : Tc = A[91];
    let qA;
    A[92] !== Tc ? (qA = c.jsx(pA, {
        placeholder: "",
        ...Tc
    }),
    A[92] = Tc,
    A[93] = qA) : qA = A[93];
    const uc = R.addLine2 && R.addLine2.message;
    let xc;
    A[94] !== uc ? (xc = c.jsx(KA, {
        children: uc
    }),
    A[94] = uc,
    A[95] = xc) : xc = A[95];
    let $A;
    A[96] !== R.addLine2 || A[97] !== qA || A[98] !== xc ? ($A = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: FA,
        children: [Vc, qA, xc]
    }),
    A[96] = R.addLine2,
    A[97] = qA,
    A[98] = xc,
    A[99] = $A) : $A = A[99];
    const zc = R.landmark;
    let tt;
    A[100] === Symbol.for("react.memo_cache_sentinel") ? (tt = c.jsx(IA, {
        color: "gray.500",
        children: "Landmark"
    }),
    A[100] = tt) : tt = A[100];
    let Lc;
    A[101] !== N ? (Lc = N("landmark"),
    A[101] = N,
    A[102] = Lc) : Lc = A[102];
    let ZA;
    A[103] !== Lc ? (ZA = c.jsx(pA, {
        placeholder: "E.g. near chinnaswamy stadium",
        ...Lc
    }),
    A[103] = Lc,
    A[104] = ZA) : ZA = A[104];
    const Oc = R.landmark && R.landmark.message;
    let Pc;
    A[105] !== Oc ? (Pc = c.jsx(KA, {
        children: Oc
    }),
    A[105] = Oc,
    A[106] = Pc) : Pc = A[106];
    let QA;
    A[107] !== R.landmark || A[108] !== ZA || A[109] !== Pc ? (QA = c.jsxs(tA, {
        isInvalid: zc,
        children: [tt, ZA, Pc]
    }),
    A[107] = R.landmark,
    A[108] = ZA,
    A[109] = Pc,
    A[110] = QA) : QA = A[110];
    let Ec;
    A[111] === Symbol.for("react.memo_cache_sentinel") ? (Ec = ["column", "row"],
    A[111] = Ec) : Ec = A[111];
    const It = R.pinCode;
    let et;
    A[112] === Symbol.for("react.memo_cache_sentinel") ? (et = c.jsx(IA, {
        color: "gray.500",
        children: "Pincode"
    }),
    A[112] = et) : et = A[112];
    let Hc;
    A[113] !== N ? (Hc = N("pinCode", {
        required: "Enter any pin code"
    }),
    A[113] = N,
    A[114] = Hc) : Hc = A[114];
    let XA;
    A[115] !== Hc ? (XA = c.jsx(pA, {
        placeholder: "6 digits only",
        maxLength: 6,
        onKeyDown: x,
        ...Hc
    }),
    A[115] = Hc,
    A[116] = XA) : XA = A[116];
    const gc = R.pinCode && R.pinCode.message;
    let jc;
    A[117] !== gc ? (jc = c.jsx(KA, {
        children: gc
    }),
    A[117] = gc,
    A[118] = jc) : jc = A[118];
    let Ac;
    A[119] !== R.pinCode || A[120] !== XA || A[121] !== jc ? (Ac = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: It,
        children: [et, XA, jc]
    }),
    A[119] = R.pinCode,
    A[120] = XA,
    A[121] = jc,
    A[122] = Ac) : Ac = A[122];
    const Fc = R.city;
    let st;
    A[123] === Symbol.for("react.memo_cache_sentinel") ? (st = c.jsx(IA, {
        color: "gray.500",
        children: "City"
    }),
    A[123] = st) : st = A[123];
    let dc;
    A[124] !== N ? (dc = N("city", {
        required: "Enter your city"
    }),
    A[124] = N,
    A[125] = dc) : dc = A[125];
    let cc;
    A[126] !== dc ? (cc = c.jsx(pA, {
        placeholder: "City Name",
        ...dc,
        readOnly: !0
    }),
    A[126] = dc,
    A[127] = cc) : cc = A[127];
    const Cc = R.city && R.city.message;
    let yc;
    A[128] !== Cc ? (yc = c.jsx(KA, {
        children: Cc
    }),
    A[128] = Cc,
    A[129] = yc) : yc = A[129];
    let tc;
    A[130] !== R.city || A[131] !== cc || A[132] !== yc ? (tc = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: Fc,
        children: [st, cc, yc]
    }),
    A[130] = R.city,
    A[131] = cc,
    A[132] = yc,
    A[133] = tc) : tc = A[133];
    const qc = R.state;
    let ot;
    A[134] === Symbol.for("react.memo_cache_sentinel") ? (ot = c.jsx(IA, {
        color: "gray.500",
        children: "State"
    }),
    A[134] = ot) : ot = A[134];
    let Mc;
    A[135] !== N ? (Mc = N("state", {
        required: "Enter your state"
    }),
    A[135] = N,
    A[136] = Mc) : Mc = A[136];
    let Ic;
    A[137] !== Mc ? (Ic = c.jsx(pA, {
        placeholder: "State Name",
        ...Mc,
        readOnly: !0
    }),
    A[137] = Mc,
    A[138] = Ic) : Ic = A[138];
    const bc = R.state && R.state.message;
    let Bc;
    A[139] !== bc ? (Bc = c.jsx(KA, {
        children: bc
    }),
    A[139] = bc,
    A[140] = Bc) : Bc = A[140];
    let ec;
    A[141] !== R.state || A[142] !== Ic || A[143] !== Bc ? (ec = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: qc,
        children: [ot, Ic, Bc]
    }),
    A[141] = R.state,
    A[142] = Ic,
    A[143] = Bc,
    A[144] = ec) : ec = A[144];
    let sc;
    A[145] !== Ac || A[146] !== tc || A[147] !== ec ? (sc = c.jsxs(U, {
        direction: Ec,
        children: [Ac, tc, ec]
    }),
    A[145] = Ac,
    A[146] = tc,
    A[147] = ec,
    A[148] = sc) : sc = A[148];
    let oc;
    A[149] !== Q || A[150] !== GA || A[151] !== bA || A[152] !== $A || A[153] !== QA || A[154] !== sc ? (oc = c.jsx(zA, {
        pb: 3,
        children: c.jsxs(U, {
            spacing: "4",
            p: "3",
            children: [Q, GA, bA, $A, QA, sc]
        })
    }),
    A[149] = Q,
    A[150] = GA,
    A[151] = bA,
    A[152] = $A,
    A[153] = QA,
    A[154] = sc,
    A[155] = oc) : oc = A[155];
    let Uc;
    A[156] === Symbol.for("react.memo_cache_sentinel") ? (Uc = c.jsx(oA, {}),
    A[156] = Uc) : Uc = A[156];
    let Kc;
    A[157] !== i || A[158] !== G ? (Kc = i(G),
    A[157] = i,
    A[158] = G,
    A[159] = Kc) : Kc = A[159];
    let hc;
    A[160] === Symbol.for("react.memo_cache_sentinel") ? (hc = c.jsx(TI, {}),
    A[160] = hc) : hc = A[160];
    let mc;
    A[161] !== Kc ? (mc = c.jsx(_, {
        colorScheme: "blue",
        mr: 3,
        onClick: Kc,
        leftIcon: hc,
        children: "Save"
    }),
    A[161] = Kc,
    A[162] = mc) : mc = A[162];
    let Nc;
    A[163] !== I.onClose ? (Nc = c.jsx(_, {
        onClick: I.onClose,
        children: "Cancel"
    }),
    A[163] = I.onClose,
    A[164] = Nc) : Nc = A[164];
    let Dc;
    A[165] !== mc || A[166] !== Nc ? (Dc = c.jsxs(fc, {
        children: [mc, Nc]
    }),
    A[165] = mc,
    A[166] = Nc,
    A[167] = Dc) : Dc = A[167];
    let rc;
    A[168] !== oc || A[169] !== Dc ? (rc = c.jsxs(Jc, {
        children: [y, u, B, oc, Uc, Dc]
    }),
    A[168] = oc,
    A[169] = Dc,
    A[170] = rc) : rc = A[170];
    let Sc;
    return A[171] !== I.isOpen || A[172] !== I.onClose || A[173] !== rc ? (Sc = c.jsxs(_c, {
        isOpen: O,
        onClose: g,
        size: K,
        children: [j, rc]
    }),
    A[171] = I.isOpen,
    A[172] = I.onClose,
    A[173] = rc,
    A[174] = Sc) : Sc = A[174],
    Sc
}
  , eo = t => {
    const A = X.c(176)
      , {address: I, dialogOpener: e, refetch: s} = t;
    let o;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (o = {
        mutationFn: Gt
    },
    A[0] = o) : o = A[0],
    hA(o);
    const N = WA();
    let i;
    A[1] !== I ? (i = {
        defaultValues: I
    },
    A[1] = I,
    A[2] = i) : i = A[2];
    const {register: D, handleSubmit: n, formState: a, watch: r, setValue: R} = gt(i)
      , {errors: p} = a;
    let l;
    A[3] === Symbol.for("react.memo_cache_sentinel") ? (l = {
        mutationFn: zs
    },
    A[3] = l) : l = A[3];
    const E = hA(l);
    let G;
    A[4] !== E ? (G = Lt => {
        E.mutate(Lt)
    }
    ,
    A[4] = E,
    A[5] = G) : G = A[5];
    const h = G;
    let m;
    A[6] !== e || A[7] !== E.data || A[8] !== E.isSuccess || A[9] !== s || A[10] !== N ? (m = () => {
        E.isSuccess && E.data.status === "Success" && (s(),
        e.onClose(),
        N({
            title: "Address Saved.",
            status: "success",
            duration: "1500"
        }))
    }
    ,
    A[6] = e,
    A[7] = E.data,
    A[8] = E.isSuccess,
    A[9] = s,
    A[10] = N,
    A[11] = m) : m = A[11];
    let x;
    A[12] !== E.isSuccess ? (x = [E.isSuccess],
    A[12] = E.isSuccess,
    A[13] = x) : x = A[13],
    P.useEffect(m, x);
    const L = No;
    let d;
    A[14] !== r ? (d = r("pinCode"),
    A[14] = r,
    A[15] = d) : d = A[15];
    const H = d;
    let f;
    A[16] !== H || A[17] !== R || A[18] !== N ? (f = () => {
        if ((H == null ? void 0 : H.length) == 6) {
            const Lt = Gt(H);
            Lt.length > 0 ? (R("city", Lt[0].ct),
            R("state", Lt[0].st)) : (N({
                title: "Oops, Delivery Not Available At Pincode.",
                status: "error",
                duration: "1500"
            }),
            R("city", ""),
            R("state", ""))
        } else
            R("city", ""),
            R("state", "")
    }
    ,
    A[16] = H,
    A[17] = R,
    A[18] = N,
    A[19] = f) : f = A[19];
    let O;
    A[20] !== H ? (O = [H],
    A[20] = H,
    A[21] = O) : O = A[21],
    P.useEffect(f, O);
    const g = e.isOpen
      , K = e.onClose;
    let j, y;
    A[22] === Symbol.for("react.memo_cache_sentinel") ? (j = ["full", "xl"],
    y = c.jsx(ac, {}),
    A[22] = j,
    A[23] = y) : (j = A[22],
    y = A[23]);
    let u, B, S;
    A[24] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsx(ic, {
        children: "Edit Address"
    }),
    B = c.jsx(Xc, {
        bg: "red.600",
        borderRadius: "full",
        color: "white"
    }),
    S = c.jsx(oA, {}),
    A[24] = u,
    A[25] = B,
    A[26] = S) : (u = A[24],
    B = A[25],
    S = A[26]);
    let b;
    A[27] === Symbol.for("react.memo_cache_sentinel") ? (b = ["column", "row"],
    A[27] = b) : b = A[27];
    const Y = p.firstName;
    let J;
    A[28] === Symbol.for("react.memo_cache_sentinel") ? (J = c.jsx(IA, {
        color: "gray.500",
        children: "First name"
    }),
    A[28] = J) : J = A[28];
    let q;
    A[29] !== D ? (q = D("firstName", {
        required: "Enter your first name"
    }),
    A[29] = D,
    A[30] = q) : q = A[30];
    let v;
    A[31] !== q ? (v = c.jsx(pA, {
        placeholder: "First name",
        ...q
    }),
    A[31] = q,
    A[32] = v) : v = A[32];
    const W = p.firstName && p.firstName.message;
    let V;
    A[33] !== W ? (V = c.jsx(KA, {
        children: W
    }),
    A[33] = W,
    A[34] = V) : V = A[34];
    let $;
    A[35] !== p.firstName || A[36] !== v || A[37] !== V ? ($ = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: Y,
        children: [J, v, V]
    }),
    A[35] = p.firstName,
    A[36] = v,
    A[37] = V,
    A[38] = $) : $ = A[38];
    const eA = p.lastName;
    let w;
    A[39] === Symbol.for("react.memo_cache_sentinel") ? (w = c.jsx(IA, {
        color: "gray.500",
        children: "Last name"
    }),
    A[39] = w) : w = A[39];
    let z;
    A[40] !== D ? (z = D("lastName", {
        required: "Enter your last name"
    }),
    A[40] = D,
    A[41] = z) : z = A[41];
    let Z;
    A[42] !== z ? (Z = c.jsx(pA, {
        placeholder: "Last name",
        ...z
    }),
    A[42] = z,
    A[43] = Z) : Z = A[43];
    const AA = p.lastName && p.lastName.message;
    let cA;
    A[44] !== AA ? (cA = c.jsx(KA, {
        children: AA
    }),
    A[44] = AA,
    A[45] = cA) : cA = A[45];
    let Q;
    A[46] !== p.lastName || A[47] !== Z || A[48] !== cA ? (Q = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: eA,
        children: [w, Z, cA]
    }),
    A[46] = p.lastName,
    A[47] = Z,
    A[48] = cA,
    A[49] = Q) : Q = A[49];
    let F;
    A[50] !== $ || A[51] !== Q ? (F = c.jsxs(U, {
        direction: b,
        children: [$, Q]
    }),
    A[50] = $,
    A[51] = Q,
    A[52] = F) : F = A[52];
    let C;
    A[53] === Symbol.for("react.memo_cache_sentinel") ? (C = ["column", "row"],
    A[53] = C) : C = A[53];
    const k = p.mobile;
    let NA;
    A[54] === Symbol.for("react.memo_cache_sentinel") ? (NA = c.jsx(IA, {
        color: "gray.500",
        children: "Mobile No"
    }),
    A[54] = NA) : NA = A[54];
    let RA;
    A[55] !== D ? (RA = D("mobile", {
        required: "Enter your mobile no"
    }),
    A[55] = D,
    A[56] = RA) : RA = A[56];
    let EA;
    A[57] !== RA ? (EA = c.jsx(pA, {
        placeholder: "10 digits only",
        maxLength: 6,
        onKeyDown: L,
        ...RA
    }),
    A[57] = RA,
    A[58] = EA) : EA = A[58];
    const lA = p.mobile && p.mobile.message;
    let dA;
    A[59] !== lA ? (dA = c.jsx(KA, {
        children: lA
    }),
    A[59] = lA,
    A[60] = dA) : dA = A[60];
    let mA;
    A[61] !== p.mobile || A[62] !== EA || A[63] !== dA ? (mA = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: k,
        children: [NA, EA, dA]
    }),
    A[61] = p.mobile,
    A[62] = EA,
    A[63] = dA,
    A[64] = mA) : mA = A[64];
    const xA = p.email;
    let aA;
    A[65] === Symbol.for("react.memo_cache_sentinel") ? (aA = c.jsx(IA, {
        color: "gray.500",
        children: "Email"
    }),
    A[65] = aA) : aA = A[65];
    let LA;
    A[66] !== D ? (LA = D("email", {
        required: "Enter your email"
    }),
    A[66] = D,
    A[67] = LA) : LA = A[67];
    let HA;
    A[68] !== LA ? (HA = c.jsx(pA, {
        placeholder: "example@example.com",
        ...LA
    }),
    A[68] = LA,
    A[69] = HA) : HA = A[69];
    const SA = p.email && p.email.message;
    let uA;
    A[70] !== SA ? (uA = c.jsx(KA, {
        children: SA
    }),
    A[70] = SA,
    A[71] = uA) : uA = A[71];
    let GA;
    A[72] !== p.email || A[73] !== HA || A[74] !== uA ? (GA = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: xA,
        children: [aA, HA, uA]
    }),
    A[72] = p.email,
    A[73] = HA,
    A[74] = uA,
    A[75] = GA) : GA = A[75];
    let jA;
    A[76] !== mA || A[77] !== GA ? (jA = c.jsxs(U, {
        direction: C,
        children: [mA, GA]
    }),
    A[76] = mA,
    A[77] = GA,
    A[78] = jA) : jA = A[78];
    const _A = p.addLine1;
    let yA;
    A[79] === Symbol.for("react.memo_cache_sentinel") ? (yA = c.jsx(IA, {
        color: "gray.500",
        children: "Address (House no. / Building)"
    }),
    A[79] = yA) : yA = A[79];
    let sA;
    A[80] !== D ? (sA = D("addLine1", {
        required: "Enter address line 1"
    }),
    A[80] = D,
    A[81] = sA) : sA = A[81];
    let iA;
    A[82] !== sA ? (iA = c.jsx(pA, {
        placeholder: "",
        ...sA
    }),
    A[82] = sA,
    A[83] = iA) : iA = A[83];
    const BA = p.addLine1 && p.addLine1.message;
    let bA;
    A[84] !== BA ? (bA = c.jsx(KA, {
        children: BA
    }),
    A[84] = BA,
    A[85] = bA) : bA = A[85];
    let FA;
    A[86] !== p.addLine1 || A[87] !== iA || A[88] !== bA ? (FA = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: _A,
        children: [yA, iA, bA]
    }),
    A[86] = p.addLine1,
    A[87] = iA,
    A[88] = bA,
    A[89] = FA) : FA = A[89];
    const Vc = p.addLine2;
    let Tc;
    A[90] === Symbol.for("react.memo_cache_sentinel") ? (Tc = c.jsx(IA, {
        color: "gray.500",
        children: "Locality (Area / Street)"
    }),
    A[90] = Tc) : Tc = A[90];
    let qA;
    A[91] !== D ? (qA = D("addLine2", {
        required: "Enter address line 2"
    }),
    A[91] = D,
    A[92] = qA) : qA = A[92];
    let uc;
    A[93] !== qA ? (uc = c.jsx(pA, {
        placeholder: "",
        ...qA
    }),
    A[93] = qA,
    A[94] = uc) : uc = A[94];
    const xc = p.addLine2 && p.addLine2.message;
    let $A;
    A[95] !== xc ? ($A = c.jsx(KA, {
        children: xc
    }),
    A[95] = xc,
    A[96] = $A) : $A = A[96];
    let zc;
    A[97] !== p.addLine2 || A[98] !== uc || A[99] !== $A ? (zc = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: Vc,
        children: [Tc, uc, $A]
    }),
    A[97] = p.addLine2,
    A[98] = uc,
    A[99] = $A,
    A[100] = zc) : zc = A[100];
    const tt = p.landmark;
    let Lc;
    A[101] === Symbol.for("react.memo_cache_sentinel") ? (Lc = c.jsx(IA, {
        color: "gray.500",
        children: "Landmark"
    }),
    A[101] = Lc) : Lc = A[101];
    let ZA;
    A[102] !== D ? (ZA = D("landmark"),
    A[102] = D,
    A[103] = ZA) : ZA = A[103];
    let Oc;
    A[104] !== ZA ? (Oc = c.jsx(pA, {
        placeholder: "E.g. near chinnaswamy stadium",
        ...ZA
    }),
    A[104] = ZA,
    A[105] = Oc) : Oc = A[105];
    const Pc = p.landmark && p.landmark.message;
    let QA;
    A[106] !== Pc ? (QA = c.jsx(KA, {
        children: Pc
    }),
    A[106] = Pc,
    A[107] = QA) : QA = A[107];
    let Ec;
    A[108] !== p.landmark || A[109] !== Oc || A[110] !== QA ? (Ec = c.jsxs(tA, {
        isInvalid: tt,
        children: [Lc, Oc, QA]
    }),
    A[108] = p.landmark,
    A[109] = Oc,
    A[110] = QA,
    A[111] = Ec) : Ec = A[111];
    let It;
    A[112] === Symbol.for("react.memo_cache_sentinel") ? (It = ["column", "row"],
    A[112] = It) : It = A[112];
    const et = p.pinCode;
    let Hc;
    A[113] === Symbol.for("react.memo_cache_sentinel") ? (Hc = c.jsx(IA, {
        color: "gray.500",
        children: "Pincode"
    }),
    A[113] = Hc) : Hc = A[113];
    let XA;
    A[114] !== D ? (XA = D("pinCode", {
        required: "Enter any pin code"
    }),
    A[114] = D,
    A[115] = XA) : XA = A[115];
    let gc;
    A[116] !== XA ? (gc = c.jsx(pA, {
        placeholder: "6 digits only",
        maxLength: 6,
        onKeyDown: L,
        ...XA
    }),
    A[116] = XA,
    A[117] = gc) : gc = A[117];
    const jc = p.pinCode && p.pinCode.message;
    let Ac;
    A[118] !== jc ? (Ac = c.jsx(KA, {
        children: jc
    }),
    A[118] = jc,
    A[119] = Ac) : Ac = A[119];
    let Fc;
    A[120] !== p.pinCode || A[121] !== gc || A[122] !== Ac ? (Fc = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: et,
        children: [Hc, gc, Ac]
    }),
    A[120] = p.pinCode,
    A[121] = gc,
    A[122] = Ac,
    A[123] = Fc) : Fc = A[123];
    const st = p.city;
    let dc;
    A[124] === Symbol.for("react.memo_cache_sentinel") ? (dc = c.jsx(IA, {
        color: "gray.500",
        children: "City"
    }),
    A[124] = dc) : dc = A[124];
    let cc;
    A[125] !== D ? (cc = D("city", {
        required: "Enter your city"
    }),
    A[125] = D,
    A[126] = cc) : cc = A[126];
    let Cc;
    A[127] !== cc ? (Cc = c.jsx(pA, {
        placeholder: "Enter City",
        ...cc,
        readOnly: !0
    }),
    A[127] = cc,
    A[128] = Cc) : Cc = A[128];
    const yc = p.city && p.city.message;
    let tc;
    A[129] !== yc ? (tc = c.jsx(KA, {
        children: yc
    }),
    A[129] = yc,
    A[130] = tc) : tc = A[130];
    let qc;
    A[131] !== p.city || A[132] !== Cc || A[133] !== tc ? (qc = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: st,
        children: [dc, Cc, tc]
    }),
    A[131] = p.city,
    A[132] = Cc,
    A[133] = tc,
    A[134] = qc) : qc = A[134];
    const ot = p.state;
    let Mc;
    A[135] === Symbol.for("react.memo_cache_sentinel") ? (Mc = c.jsx(IA, {
        color: "gray.500",
        children: "State"
    }),
    A[135] = Mc) : Mc = A[135];
    let Ic;
    A[136] !== D ? (Ic = D("state", {
        required: "Enter your state"
    }),
    A[136] = D,
    A[137] = Ic) : Ic = A[137];
    let bc;
    A[138] !== Ic ? (bc = c.jsx(pA, {
        placeholder: "Enter State",
        ...Ic,
        readOnly: !0
    }),
    A[138] = Ic,
    A[139] = bc) : bc = A[139];
    const Bc = p.state && p.state.message;
    let ec;
    A[140] !== Bc ? (ec = c.jsx(KA, {
        children: Bc
    }),
    A[140] = Bc,
    A[141] = ec) : ec = A[141];
    let sc;
    A[142] !== p.state || A[143] !== bc || A[144] !== ec ? (sc = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: ot,
        children: [Mc, bc, ec]
    }),
    A[142] = p.state,
    A[143] = bc,
    A[144] = ec,
    A[145] = sc) : sc = A[145];
    let oc;
    A[146] !== Fc || A[147] !== qc || A[148] !== sc ? (oc = c.jsxs(U, {
        direction: It,
        children: [Fc, qc, sc]
    }),
    A[146] = Fc,
    A[147] = qc,
    A[148] = sc,
    A[149] = oc) : oc = A[149];
    let Uc;
    A[150] !== F || A[151] !== jA || A[152] !== FA || A[153] !== zc || A[154] !== Ec || A[155] !== oc ? (Uc = c.jsx(zA, {
        pb: 3,
        children: c.jsxs(U, {
            spacing: "4",
            p: "3",
            children: [F, jA, FA, zc, Ec, oc]
        })
    }),
    A[150] = F,
    A[151] = jA,
    A[152] = FA,
    A[153] = zc,
    A[154] = Ec,
    A[155] = oc,
    A[156] = Uc) : Uc = A[156];
    let Kc;
    A[157] === Symbol.for("react.memo_cache_sentinel") ? (Kc = c.jsx(oA, {}),
    A[157] = Kc) : Kc = A[157];
    let hc;
    A[158] !== n || A[159] !== h ? (hc = n(h),
    A[158] = n,
    A[159] = h,
    A[160] = hc) : hc = A[160];
    let mc;
    A[161] === Symbol.for("react.memo_cache_sentinel") ? (mc = c.jsx(TI, {}),
    A[161] = mc) : mc = A[161];
    let Nc;
    A[162] !== hc ? (Nc = c.jsx(_, {
        colorScheme: "blue",
        mr: 3,
        onClick: hc,
        leftIcon: mc,
        children: "Save"
    }),
    A[162] = hc,
    A[163] = Nc) : Nc = A[163];
    let Dc;
    A[164] !== e.onClose ? (Dc = c.jsx(_, {
        onClick: e.onClose,
        children: "Cancel"
    }),
    A[164] = e.onClose,
    A[165] = Dc) : Dc = A[165];
    let rc;
    A[166] !== Nc || A[167] !== Dc ? (rc = c.jsxs(fc, {
        children: [Nc, Dc]
    }),
    A[166] = Nc,
    A[167] = Dc,
    A[168] = rc) : rc = A[168];
    let Sc;
    A[169] !== rc || A[170] !== Uc ? (Sc = c.jsxs(Jc, {
        children: [u, B, S, Uc, Kc, rc]
    }),
    A[169] = rc,
    A[170] = Uc,
    A[171] = Sc) : Sc = A[171];
    let Yc;
    return A[172] !== e.isOpen || A[173] !== e.onClose || A[174] !== Sc ? (Yc = c.jsxs(_c, {
        isOpen: g,
        onClose: K,
        size: j,
        children: [y, Sc]
    }),
    A[172] = e.isOpen,
    A[173] = e.onClose,
    A[174] = Sc,
    A[175] = Yc) : Yc = A[175],
    Yc
}
  , so = t => {
    const A = X.c(28)
      , {address: I, dialogDel: e} = t;
    let s;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
        mutationFn: Fs
    },
    A[0] = s) : s = A[0];
    const o = hA(s);
    kA();
    const N = WA();
    let i;
    A[1] !== I || A[2] !== o ? (i = () => {
        o.mutate(I)
    }
    ,
    A[1] = I,
    A[2] = o,
    A[3] = i) : i = A[3];
    const D = i;
    let n;
    A[4] !== e || A[5] !== o.data || A[6] !== o.isSuccess || A[7] !== N ? (n = () => {
        o.isSuccess && o.data.status === "Success" && (e.onClose(),
        N({
            title: "Address Deleted.",
            status: "success",
            duration: "1500"
        }))
    }
    ,
    A[4] = e,
    A[5] = o.data,
    A[6] = o.isSuccess,
    A[7] = N,
    A[8] = n) : n = A[8];
    let a;
    A[9] !== o.isSuccess ? (a = [o.isSuccess],
    A[9] = o.isSuccess,
    A[10] = a) : a = A[10],
    P.useEffect(n, a);
    let r, R;
    A[11] === Symbol.for("react.memo_cache_sentinel") ? (r = c.jsx(ic, {
        fontSize: "lg",
        fontWeight: "bold",
        children: "Delete Address"
    }),
    R = c.jsx(zA, {
        children: "Are you sure? You can't undo this action afterwards."
    }),
    A[11] = r,
    A[12] = R) : (r = A[11],
    R = A[12]);
    let p;
    A[13] !== e.onClose ? (p = c.jsx(_, {
        onClick: e.onClose,
        children: "Cancel"
    }),
    A[13] = e.onClose,
    A[14] = p) : p = A[14];
    let l;
    A[15] !== D ? (l = () => D(),
    A[15] = D,
    A[16] = l) : l = A[16];
    let E;
    A[17] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(aI, {}),
    A[17] = E) : E = A[17];
    let G;
    A[18] !== o.isLoading || A[19] !== l ? (G = c.jsx(_, {
        isLoading: o.isLoading,
        colorScheme: "red",
        onClick: l,
        ml: 3,
        leftIcon: E,
        children: "Delete"
    }),
    A[18] = o.isLoading,
    A[19] = l,
    A[20] = G) : G = A[20];
    let h;
    A[21] !== G || A[22] !== p ? (h = c.jsx(ac, {
        children: c.jsxs(Wt, {
            children: [r, R, c.jsxs(fc, {
                children: [p, G]
            })]
        })
    }),
    A[21] = G,
    A[22] = p,
    A[23] = h) : h = A[23];
    let m;
    return A[24] !== e.isOpen || A[25] !== e.onClose || A[26] !== h ? (m = c.jsx(kt, {
        isOpen: e.isOpen,
        onClose: e.onClose,
        children: h
    }),
    A[24] = e.isOpen,
    A[25] = e.onClose,
    A[26] = h,
    A[27] = m) : m = A[27],
    m
}
;
function oo(t) {
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Home", "End"].includes(t.key) || t.preventDefault()
}
function No(t) {
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "Delete", "ArrowLeft", "ArrowRight", "Home", "End"].includes(t.key) || t.preventDefault()
}
const Do = () => {
    var eA, w, z, Z, AA, cA, Q, F, C, k;
    const t = X.c(55);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = {
        queryKey: ["customer"],
        queryFn: JI
    },
    t[0] = A) : A = t[0];
    const I = Gc(A)
      , e = pc();
    let s;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(Yt, {
        path: "Profile"
    }),
    t[1] = s) : s = t[1];
    let o;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(ct, {
        text: "Profile",
        icon: c.jsx(ht, {})
    }),
    t[2] = o) : o = t[2];
    let N, i;
    t[3] === Symbol.for("react.memo_cache_sentinel") ? (N = ["column", "row"],
    i = [3, 5],
    t[3] = N,
    t[4] = i) : (N = t[3],
    i = t[4]);
    let D;
    t[5] === Symbol.for("react.memo_cache_sentinel") ? (D = ["100%", "420px"],
    t[5] = D) : D = t[5];
    let n;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (n = ["10px", "50px"],
    t[6] = n) : n = t[6];
    let a;
    t[7] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(T, {
        w: D,
        textAlign: "center",
        bg: "white",
        borderRadius: "lg",
        py: n,
        children: c.jsx(DA, {
            w: "100%",
            children: c.jsx(pe, {
                color: "#ccc",
                fontSize: "10rem"
            })
        })
    }),
    t[7] = a) : a = t[7];
    let r;
    t[8] === Symbol.for("react.memo_cache_sentinel") ? (r = ["20px", "30px"],
    t[8] = r) : r = t[8];
    let R;
    t[9] === Symbol.for("react.memo_cache_sentinel") ? (R = ["column", "row"],
    t[9] = R) : R = t[9];
    const p = (eA = I.data) == null ? void 0 : eA.firstName;
    let l;
    t[10] !== p ? (l = c.jsx($c, {
        text: "First Name",
        value: p
    }),
    t[10] = p,
    t[11] = l) : l = t[11];
    const E = (w = I.data) == null ? void 0 : w.lastName;
    let G;
    t[12] !== E ? (G = c.jsx($c, {
        text: "Last Name",
        value: E
    }),
    t[12] = E,
    t[13] = G) : G = t[13];
    let h;
    t[14] !== l || t[15] !== G ? (h = c.jsxs(U, {
        direction: R,
        spacing: "20px",
        children: [l, G]
    }),
    t[14] = l,
    t[15] = G,
    t[16] = h) : h = t[16];
    let m;
    t[17] === Symbol.for("react.memo_cache_sentinel") ? (m = ["column", "row"],
    t[17] = m) : m = t[17];
    const x = (z = I.data) == null ? void 0 : z.mobile;
    let L;
    t[18] !== x ? (L = c.jsx($c, {
        text: "Mobile No.",
        value: x
    }),
    t[18] = x,
    t[19] = L) : L = t[19];
    const d = (Z = I.data) == null ? void 0 : Z.email;
    let H;
    t[20] !== d ? (H = c.jsx($c, {
        text: "Email",
        value: d
    }),
    t[20] = d,
    t[21] = H) : H = t[21];
    let f;
    t[22] !== L || t[23] !== H ? (f = c.jsxs(U, {
        direction: m,
        spacing: "20px",
        children: [L, H]
    }),
    t[22] = L,
    t[23] = H,
    t[24] = f) : f = t[24];
    let O;
    t[25] === Symbol.for("react.memo_cache_sentinel") ? (O = ["column", "row"],
    t[25] = O) : O = t[25];
    const g = (AA = I.data) == null ? void 0 : AA.dob;
    let K;
    t[26] !== g ? (K = c.jsx($c, {
        text: "Date of birth",
        value: g
    }),
    t[26] = g,
    t[27] = K) : K = t[27];
    const j = (cA = I.data) == null ? void 0 : cA.anniversary;
    let y;
    t[28] !== j ? (y = c.jsx($c, {
        text: "Anniversary",
        value: j
    }),
    t[28] = j,
    t[29] = y) : y = t[29];
    let u;
    t[30] !== K || t[31] !== y ? (u = c.jsxs(U, {
        direction: O,
        spacing: "20px",
        children: [K, y]
    }),
    t[30] = K,
    t[31] = y,
    t[32] = u) : u = t[32];
    let B;
    t[33] === Symbol.for("react.memo_cache_sentinel") ? (B = ["column", "row"],
    t[33] = B) : B = t[33];
    const S = ((Q = I.data) == null ? void 0 : Q.gender) == "M" ? "Male" : ((F = I.data) == null ? void 0 : F.gender) == "F" ? "Female" : ((C = I.data) == null ? void 0 : C.gender) == "O" ? "Others" : "";
    let b;
    t[34] !== S ? (b = c.jsx($c, {
        text: "Gender",
        value: S
    }),
    t[34] = S,
    t[35] = b) : b = t[35];
    const Y = (k = I.data) == null ? void 0 : k.loyaltyId;
    let J;
    t[36] !== Y ? (J = c.jsx($c, {
        text: "Loyalty Id",
        value: Y
    }),
    t[36] = Y,
    t[37] = J) : J = t[37];
    let q;
    t[38] !== b || t[39] !== J ? (q = c.jsxs(U, {
        direction: B,
        spacing: "20px",
        children: [b, J]
    }),
    t[38] = b,
    t[39] = J,
    t[40] = q) : q = t[40];
    let v;
    t[41] !== e ? (v = c.jsx(TA, {
        children: c.jsx(_, {
            mt: "3",
            variant: "outline",
            colorScheme: "red",
            onClick: () => e.onOpen(),
            children: "Edit Profile"
        })
    }),
    t[41] = e,
    t[42] = v) : v = t[42];
    let W;
    t[43] !== h || t[44] !== f || t[45] !== u || t[46] !== q || t[47] !== v ? (W = c.jsxs(U, {
        children: [o, c.jsxs(U, {
            direction: N,
            mt: i,
            children: [a, c.jsxs(U, {
                spacing: r,
                w: "100%",
                p: "3",
                children: [h, f, u, q, v]
            })]
        })]
    }),
    t[43] = h,
    t[44] = f,
    t[45] = u,
    t[46] = q,
    t[47] = v,
    t[48] = W) : W = t[48];
    let V;
    t[49] !== e || t[50] !== I.data ? (V = e.isOpen && c.jsx(ro, {
        pData: I.data,
        dialogOpener: e
    }),
    t[49] = e,
    t[50] = I.data,
    t[51] = V) : V = t[51];
    let $;
    return t[52] !== W || t[53] !== V ? ($ = c.jsxs(c.Fragment, {
        children: [s, W, V]
    }),
    t[52] = W,
    t[53] = V,
    t[54] = $) : $ = t[54],
    $
}
  , $c = t => {
    const A = X.c(7)
      , {text: I, value: e} = t;
    let s;
    A[0] !== I ? (s = c.jsx(M, {
        color: "gray.500",
        children: I
    }),
    A[0] = I,
    A[1] = s) : s = A[1];
    let o;
    A[2] !== e ? (o = c.jsx(M, {
        bg: "white",
        borderRadius: "md",
        p: "2",
        minH: "40px",
        children: e
    }),
    A[2] = e,
    A[3] = o) : o = A[3];
    let N;
    return A[4] !== s || A[5] !== o ? (N = c.jsxs(T, {
        w: "100%",
        children: [s, o]
    }),
    A[4] = s,
    A[5] = o,
    A[6] = N) : N = A[6],
    N
}
  , ro = t => {
    const A = X.c(109)
      , {pData: I, dialogOpener: e} = t
      , {session: s} = JA()
      , [,o] = P.useState("")
      , N = WA();
    kA();
    let i;
    A[0] !== I ? (i = {
        defaultValues: I
    },
    A[0] = I,
    A[1] = i) : i = A[1];
    const {register: D, handleSubmit: n, formState: a} = gt(i)
      , {errors: r} = a;
    let R;
    A[2] === Symbol.for("react.memo_cache_sentinel") ? (R = {
        mutationFn: VI
    },
    A[2] = R) : R = A[2];
    const p = hA(R);
    let l;
    A[3] !== p ? (l = Vc => {
        o(Vc.firstName),
        p.mutate(Vc)
    }
    ,
    A[3] = p,
    A[4] = l) : l = A[4];
    const E = l
      , G = Ro;
    let h;
    A[5] !== e || A[6] !== p.data || A[7] !== p.isSuccess || A[8] !== N ? (h = () => {
        p.isSuccess && p.data.status === "Success" && (G(),
        e.onClose(),
        N({
            title: "Profile Saved.",
            status: "success"
        }))
    }
    ,
    A[5] = e,
    A[6] = p.data,
    A[7] = p.isSuccess,
    A[8] = N,
    A[9] = h) : h = A[9];
    let m;
    A[10] !== p.isSuccess ? (m = [p.isSuccess],
    A[10] = p.isSuccess,
    A[11] = m) : m = A[11],
    P.useEffect(h, m);
    const x = io
      , L = e.isOpen
      , d = e.onClose;
    let H, f;
    A[12] === Symbol.for("react.memo_cache_sentinel") ? (f = ["full", "xl"],
    H = c.jsx(ac, {}),
    A[12] = H,
    A[13] = f) : (H = A[12],
    f = A[13]);
    let O, g;
    A[14] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsx(ic, {
        children: "Edit Profile"
    }),
    g = c.jsx(Xc, {}),
    A[14] = O,
    A[15] = g) : (O = A[14],
    g = A[15]);
    let K;
    A[16] !== (s == null ? void 0 : s.name) ? (K = s != null && s.name ? "" : c.jsx(DA, {
        children: c.jsxs(xe, {
            status: "info",
            children: [c.jsx(Oe, {}), "Enhance your shopping experience by completing your profile for a swift and efficient checkout process."]
        })
    }),
    A[16] = s == null ? void 0 : s.name,
    A[17] = K) : K = A[17];
    let j;
    A[18] === Symbol.for("react.memo_cache_sentinel") ? (j = ["column", "row"],
    A[18] = j) : j = A[18];
    const y = r.firstName;
    let u;
    A[19] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsx(IA, {
        color: "gray.500",
        children: "First name"
    }),
    A[19] = u) : u = A[19];
    let B;
    A[20] !== D ? (B = D("firstName", {
        required: "Enter your first name"
    }),
    A[20] = D,
    A[21] = B) : B = A[21];
    let S;
    A[22] !== B ? (S = c.jsx(pA, {
        placeholder: "First name",
        ...B,
        onKeyDown: x
    }),
    A[22] = B,
    A[23] = S) : S = A[23];
    const b = r.firstName && r.firstName.message;
    let Y;
    A[24] !== b ? (Y = c.jsx(KA, {
        children: b
    }),
    A[24] = b,
    A[25] = Y) : Y = A[25];
    let J;
    A[26] !== r.firstName || A[27] !== S || A[28] !== Y ? (J = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: y,
        children: [u, S, Y]
    }),
    A[26] = r.firstName,
    A[27] = S,
    A[28] = Y,
    A[29] = J) : J = A[29];
    const q = r.lastName;
    let v;
    A[30] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsx(IA, {
        color: "gray.500",
        children: "Last name"
    }),
    A[30] = v) : v = A[30];
    let W;
    A[31] !== D ? (W = D("lastName", {
        required: "Enter your last name"
    }),
    A[31] = D,
    A[32] = W) : W = A[32];
    let V;
    A[33] !== W ? (V = c.jsx(pA, {
        placeholder: "Last name",
        ...W,
        onKeyDown: x
    }),
    A[33] = W,
    A[34] = V) : V = A[34];
    const $ = r.lastName && r.lastName.message;
    let eA;
    A[35] !== $ ? (eA = c.jsx(KA, {
        children: $
    }),
    A[35] = $,
    A[36] = eA) : eA = A[36];
    let w;
    A[37] !== r.lastName || A[38] !== V || A[39] !== eA ? (w = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: q,
        children: [v, V, eA]
    }),
    A[37] = r.lastName,
    A[38] = V,
    A[39] = eA,
    A[40] = w) : w = A[40];
    let z;
    A[41] !== J || A[42] !== w ? (z = c.jsxs(U, {
        direction: j,
        children: [J, w]
    }),
    A[41] = J,
    A[42] = w,
    A[43] = z) : z = A[43];
    let Z;
    A[44] !== r.email || A[45] !== r.mobile || A[46] !== D || A[47] !== (s == null ? void 0 : s.pool) ? (Z = (s == null ? void 0 : s.pool) == "D" ? c.jsxs(tA, {
        isRequired: !0,
        isInvalid: r.mobile,
        children: [c.jsx(IA, {
            color: "gray.500",
            children: "Mobile No."
        }), c.jsx(pA, {
            placeholder: "Mobile Number",
            ...D("mobile", {
                required: "Enter mobile number"
            })
        }), c.jsx(KA, {
            children: r.mobile && r.mobile.message
        })]
    }) : c.jsxs(tA, {
        isRequired: !0,
        isInvalid: r.email,
        children: [c.jsx(IA, {
            color: "gray.500",
            children: "Email"
        }), c.jsx(pA, {
            placeholder: "example@example.com",
            ...D("email", {
                required: "Enter your email"
            })
        }), c.jsx(KA, {
            children: r.email && r.email.message
        })]
    }),
    A[44] = r.email,
    A[45] = r.mobile,
    A[46] = D,
    A[47] = s == null ? void 0 : s.pool,
    A[48] = Z) : Z = A[48];
    const AA = r.gender;
    let cA;
    A[49] === Symbol.for("react.memo_cache_sentinel") ? (cA = c.jsx(IA, {
        color: "gray.500",
        children: "Gender"
    }),
    A[49] = cA) : cA = A[49];
    const Q = I == null ? void 0 : I.gender;
    let F;
    A[50] !== D ? (F = D("gender", {
        required: "Enter your gender"
    }),
    A[50] = D,
    A[51] = F) : F = A[51];
    let C;
    A[52] !== F ? (C = c.jsx(Rt, {
        colorScheme: "red",
        ...F,
        value: "M",
        children: "Male"
    }),
    A[52] = F,
    A[53] = C) : C = A[53];
    let k;
    A[54] !== D ? (k = D("gender", {
        required: "Enter your gender"
    }),
    A[54] = D,
    A[55] = k) : k = A[55];
    let NA;
    A[56] !== k ? (NA = c.jsx(Rt, {
        colorScheme: "red",
        ...k,
        value: "F",
        children: "Female"
    }),
    A[56] = k,
    A[57] = NA) : NA = A[57];
    let RA;
    A[58] !== D ? (RA = D("gender", {
        required: "Enter your gender"
    }),
    A[58] = D,
    A[59] = RA) : RA = A[59];
    let EA;
    A[60] !== RA ? (EA = c.jsx(Rt, {
        colorScheme: "red",
        ...RA,
        value: "O",
        children: "Others"
    }),
    A[60] = RA,
    A[61] = EA) : EA = A[61];
    let lA;
    A[62] !== C || A[63] !== NA || A[64] !== EA ? (lA = c.jsxs(U, {
        spacing: 5,
        direction: "row",
        children: [C, NA, EA]
    }),
    A[62] = C,
    A[63] = NA,
    A[64] = EA,
    A[65] = lA) : lA = A[65];
    let dA;
    A[66] !== Q || A[67] !== lA ? (dA = c.jsx(UI, {
        name: "gender",
        defaultValue: Q,
        children: lA
    }),
    A[66] = Q,
    A[67] = lA,
    A[68] = dA) : dA = A[68];
    const mA = r.gender && r.gender.message;
    let xA;
    A[69] !== mA ? (xA = c.jsx(KA, {
        children: mA
    }),
    A[69] = mA,
    A[70] = xA) : xA = A[70];
    let aA;
    A[71] !== r.gender || A[72] !== dA || A[73] !== xA ? (aA = c.jsxs(tA, {
        isRequired: !0,
        isInvalid: AA,
        children: [cA, dA, xA]
    }),
    A[71] = r.gender,
    A[72] = dA,
    A[73] = xA,
    A[74] = aA) : aA = A[74];
    let LA;
    A[75] === Symbol.for("react.memo_cache_sentinel") ? (LA = c.jsx(IA, {
        children: "Date of Birth"
    }),
    A[75] = LA) : LA = A[75];
    let HA;
    A[76] !== D ? (HA = D("dob"),
    A[76] = D,
    A[77] = HA) : HA = A[77];
    let SA;
    A[78] !== HA ? (SA = c.jsxs(tA, {
        children: [LA, c.jsx(pA, {
            type: "date",
            placeholder: "",
            ...HA
        })]
    }),
    A[78] = HA,
    A[79] = SA) : SA = A[79];
    let uA;
    A[80] === Symbol.for("react.memo_cache_sentinel") ? (uA = c.jsx(IA, {
        children: "Anniversary"
    }),
    A[80] = uA) : uA = A[80];
    let GA;
    A[81] !== D ? (GA = D("anniversary"),
    A[81] = D,
    A[82] = GA) : GA = A[82];
    let jA;
    A[83] !== GA ? (jA = c.jsxs(tA, {
        children: [uA, c.jsx(pA, {
            type: "date",
            placeholder: "",
            ...GA
        })]
    }),
    A[83] = GA,
    A[84] = jA) : jA = A[84];
    let _A;
    A[85] !== K || A[86] !== z || A[87] !== Z || A[88] !== aA || A[89] !== SA || A[90] !== jA ? (_A = c.jsx(zA, {
        pb: 6,
        children: c.jsxs(U, {
            spacing: "3",
            children: [K, z, Z, aA, SA, jA]
        })
    }),
    A[85] = K,
    A[86] = z,
    A[87] = Z,
    A[88] = aA,
    A[89] = SA,
    A[90] = jA,
    A[91] = _A) : _A = A[91];
    let yA;
    A[92] !== n || A[93] !== E ? (yA = n(E),
    A[92] = n,
    A[93] = E,
    A[94] = yA) : yA = A[94];
    let sA;
    A[95] !== yA ? (sA = c.jsx(_, {
        colorScheme: "red",
        mr: 3,
        onClick: yA,
        children: "Save"
    }),
    A[95] = yA,
    A[96] = sA) : sA = A[96];
    let iA;
    A[97] !== e.onClose ? (iA = c.jsx(_, {
        onClick: e.onClose,
        children: "Cancel"
    }),
    A[97] = e.onClose,
    A[98] = iA) : iA = A[98];
    let BA;
    A[99] !== sA || A[100] !== iA ? (BA = c.jsxs(fc, {
        children: [sA, iA]
    }),
    A[99] = sA,
    A[100] = iA,
    A[101] = BA) : BA = A[101];
    let bA;
    A[102] !== _A || A[103] !== BA ? (bA = c.jsxs(Jc, {
        children: [O, g, _A, BA]
    }),
    A[102] = _A,
    A[103] = BA,
    A[104] = bA) : bA = A[104];
    let FA;
    return A[105] !== e.isOpen || A[106] !== e.onClose || A[107] !== bA ? (FA = c.jsxs(_c, {
        isOpen: L,
        onClose: d,
        size: f,
        children: [H, bA]
    }),
    A[105] = e.isOpen,
    A[106] = e.onClose,
    A[107] = bA,
    A[108] = FA) : FA = A[108],
    FA
}
;
async function Ro() {}
function io(t) {
    const A = String.fromCharCode(t.which)
      , I = /^[a-zA-Z]+$/.test(A);
    t.key === "Backspace" || t.key === "Delete" || t.key === "Tab" || t.key === " " || I || t.preventDefault()
}
const po = () => {
    var n, a, r, R, p;
    const t = X.c(13);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = {
        queryKey: ["orders"],
        queryFn: kI
    },
    t[0] = A) : A = t[0];
    const I = Gc(A)
      , e = kA();
    let s;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(Yt, {
        path: "My Orders"
    }),
    t[1] = s) : s = t[1];
    let o;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(ct, {
        text: "My Orders",
        icon: c.jsx(Ht, {})
    }),
    t[2] = o) : o = t[2];
    let N;
    t[3] !== I.isPending ? (N = I.isPending && c.jsx(At, {}),
    t[3] = I.isPending,
    t[4] = N) : N = t[4];
    let i;
    t[5] !== ((n = I.data) == null ? void 0 : n.result) || t[6] !== I.isSuccess || t[7] !== I.refetch || t[8] !== e ? (i = I.isSuccess && c.jsx(c.Fragment, {
        children: ((r = (a = I.data) == null ? void 0 : a.result) == null ? void 0 : r.length) > 0 ? c.jsx(no, {
            Orders: (R = I.data) == null ? void 0 : R.result,
            orderRefetch: I.refetch
        }) : c.jsx(DA, {
            w: "100%",
            h: "50vh",
            children: c.jsxs(U, {
                spacing: 6,
                children: [c.jsx(DA, {
                    children: c.jsx(Wc, {
                        fontSize: "6rem",
                        color: "silver"
                    })
                }), c.jsx(M, {
                    children: "Hurry, Act fast - Place your order now."
                }), c.jsx(T, {
                    textAlign: "center",
                    children: c.jsx(_, {
                        colorScheme: "red",
                        onClick: () => e("/"),
                        children: "Start Shopping"
                    })
                })]
            })
        })
    }),
    t[5] = (p = I.data) == null ? void 0 : p.result,
    t[6] = I.isSuccess,
    t[7] = I.refetch,
    t[8] = e,
    t[9] = i) : i = t[9];
    let D;
    return t[10] !== N || t[11] !== i ? (D = c.jsxs(c.Fragment, {
        children: [s, c.jsxs(U, {
            children: [o, N, i]
        })]
    }),
    t[10] = N,
    t[11] = i,
    t[12] = D) : D = t[12],
    D
}
  , no = t => {
    const A = X.c(8)
      , {Orders: I, orderRefetch: e} = t;
    let s;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (s = ["2", "0"],
    A[0] = s) : s = A[0];
    let o;
    if (A[1] !== I || A[2] !== e) {
        let i;
        A[4] !== e ? (i = (D, n) => c.jsx(lo, {
            order: D,
            orderRefetch: e
        }, n),
        A[4] = e,
        A[5] = i) : i = A[5],
        o = I.map(i),
        A[1] = I,
        A[2] = e,
        A[3] = o
    } else
        o = A[3];
    let N;
    return A[6] !== o ? (N = c.jsx(U, {
        p: s,
        spacing: "45px",
        children: o
    }),
    A[6] = o,
    A[7] = N) : N = A[7],
    N
}
  , lo = t => {
    var _A, yA;
    const A = X.c(125)
      , {order: I, orderRefetch: e} = t;
    let s;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
        mutationFn: WI
    },
    A[0] = s) : s = A[0];
    const o = hA(s);
    let N;
    A[1] === Symbol.for("react.memo_cache_sentinel") ? (N = {
        mutationFn: zI
    },
    A[1] = N) : N = A[1];
    const i = hA(N);
    let D;
    A[2] === Symbol.for("react.memo_cache_sentinel") ? (D = {
        mutationFn: FI
    },
    A[2] = D) : D = A[2];
    const n = hA(D)
      , {onCopy: a} = KI("")
      , r = pc()
      , R = it.useRef()
      , p = it.useRef()
      , l = WA()
      , E = JA(ao);
    let G;
    A[3] !== o.isSuccess || A[4] !== l ? (G = () => {
        o.isSuccess && l({
            title: "Sent successfully.",
            status: "success",
            duration: "3500"
        })
    }
    ,
    A[3] = o.isSuccess,
    A[4] = l,
    A[5] = G) : G = A[5];
    let h;
    A[6] !== o.isSuccess ? (h = [o.isSuccess],
    A[6] = o.isSuccess,
    A[7] = h) : h = A[7],
    P.useEffect(G, h);
    let m;
    A[8] !== i.isSuccess || A[9] !== e || A[10] !== l ? (m = () => {
        i.isSuccess && (e(),
        l({
            title: "Saved successfully.",
            status: "success",
            duration: "3500"
        }))
    }
    ,
    A[8] = i.isSuccess,
    A[9] = e,
    A[10] = l,
    A[11] = m) : m = A[11];
    let x;
    A[12] !== i.isSuccess ? (x = [i.isSuccess],
    A[12] = i.isSuccess,
    A[13] = x) : x = A[13],
    P.useEffect(m, x);
    let L;
    A[14] !== r || A[15] !== ((_A = n.data) == null ? void 0 : _A.status) || A[16] !== n.isSuccess || A[17] !== e || A[18] !== l ? (L = () => {
        var sA;
        n.isSuccess && (((sA = n.data) == null ? void 0 : sA.status) == "Success" ? (e(),
        r.onClose(),
        l({
            title: "Password changed successfully.",
            status: "success",
            duration: "3500"
        })) : l({
            title: "Error",
            description: "Password must be 8-15 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
            status: "error",
            duration: "3500"
        }))
    }
    ,
    A[14] = r,
    A[15] = (yA = n.data) == null ? void 0 : yA.status,
    A[16] = n.isSuccess,
    A[17] = e,
    A[18] = l,
    A[19] = L) : L = A[19];
    let d;
    A[20] !== n.isSuccess ? (d = [n.isSuccess],
    A[20] = n.isSuccess,
    A[21] = d) : d = A[21],
    P.useEffect(L, d);
    let H;
    A[22] !== o || A[23] !== I.orderId ? (H = () => {
        const sA = {
            orderNo: I.orderId
        };
        o.mutate(sA)
    }
    ,
    A[22] = o,
    A[23] = I.orderId,
    A[24] = H) : H = A[24];
    const f = H;
    let O;
    A[25] !== n || A[26] !== I.orderId || A[27] !== l ? (O = () => {
        const sA = R.current.value
          , iA = p.current.value;
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$])[A-Za-z\d@#$]{8,}$/.test(sA)) {
            l({
                title: "Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character(@,#,$) and must contain a minimum 8 characters.",
                status: "error",
                duration: 3500,
                position: "top"
            });
            return
        }
        if (sA !== iA) {
            l({
                title: "Password mismatch.",
                status: "error",
                duration: 3500,
                position: "top"
            });
            return
        }
        const bA = {
            orderNo: I.orderId,
            password: sA
        };
        n.mutate(bA)
    }
    ,
    A[25] = n,
    A[26] = I.orderId,
    A[27] = l,
    A[28] = O) : O = A[28];
    const g = O;
    let K;
    A[29] !== I.oPwd || A[30] !== I.orderId || A[31] !== l ? (K = () => {
        if (!(I != null && I.oPwd)) {
            l({
                title: "Please Create M-Ticket Password First.",
                status: "info",
                duration: 3500
            });
            return
        }
        window.open("/mticket/" + I.orderId, "blank")
    }
    ,
    A[29] = I.oPwd,
    A[30] = I.orderId,
    A[31] = l,
    A[32] = K) : K = A[32];
    const j = K;
    let y;
    A[33] === Symbol.for("react.memo_cache_sentinel") ? (y = {
        shadow: "lg"
    },
    A[33] = y) : y = A[33];
    let u;
    A[34] === Symbol.for("react.memo_cache_sentinel") ? (u = ["5px", "10px"],
    A[34] = u) : u = A[34];
    let B;
    A[35] === Symbol.for("react.memo_cache_sentinel") ? (B = c.jsx(dI, {}),
    A[35] = B) : B = A[35];
    let S;
    A[36] !== o.isPending ? (S = c.jsx(lt, {
        as: VA,
        "aria-label": "Options",
        icon: B,
        variant: "ghost",
        colorScheme: "yellow",
        fontSize: "1.42rem",
        rounded: "full",
        isLoading: o.isPending
    }),
    A[36] = o.isPending,
    A[37] = S) : S = A[37];
    let b;
    A[38] !== o.isLoading || A[39] !== o.isSuccess || A[40] !== f ? (b = c.jsx(Mt, {
        p: "2",
        children: o.isLoading ? c.jsx(M, {
            children: "Sending..."
        }) : c.jsx(YA, {
            _hover: {
                bg: "red.400",
                color: "white"
            },
            rounded: "full",
            fontSize: "1.1rem",
            icon: c.jsx(LI, {}),
            isDisabled: o.isSuccess,
            onClick: () => f(),
            children: "Resend Confirmation"
        })
    }),
    A[38] = o.isLoading,
    A[39] = o.isSuccess,
    A[40] = f,
    A[41] = b) : b = A[41];
    let Y;
    A[42] !== S || A[43] !== b ? (Y = c.jsxs(dt, {
        mx: "2",
        children: [S, b]
    }),
    A[42] = S,
    A[43] = b,
    A[44] = Y) : Y = A[44];
    let J;
    A[45] === Symbol.for("react.memo_cache_sentinel") ? (J = ["column", "row"],
    A[45] = J) : J = A[45];
    let q;
    A[46] === Symbol.for("react.memo_cache_sentinel") ? (q = c.jsx(M, {
        color: "gray.500",
        children: "Order id :"
    }),
    A[46] = q) : q = A[46];
    let v;
    A[47] !== I.orderId ? (v = c.jsxs(U, {
        spacing: "0px",
        ml: "3",
        children: [q, c.jsx(M, {
            fontWeight: "500",
            children: I.orderId
        })]
    }),
    A[47] = I.orderId,
    A[48] = v) : v = A[48];
    let W;
    A[49] === Symbol.for("react.memo_cache_sentinel") ? (W = c.jsx(nA, {}),
    A[49] = W) : W = A[49];
    let V;
    A[50] === Symbol.for("react.memo_cache_sentinel") ? (V = ["row", "column"],
    A[50] = V) : V = A[50];
    let $;
    A[51] !== I.orderDate ? ($ = c.jsx(M, {
        color: "gray.800",
        children: I.orderDate
    }),
    A[51] = I.orderDate,
    A[52] = $) : $ = A[52];
    let eA;
    A[53] === Symbol.for("react.memo_cache_sentinel") ? (eA = c.jsx(nA, {}),
    A[53] = eA) : eA = A[53];
    let w;
    A[54] !== I.amount ? (w = c.jsxs(M, {
        fontWeight: "500",
        children: ["Amount : ₹", I.amount]
    }),
    A[54] = I.amount,
    A[55] = w) : w = A[55];
    let z;
    A[56] !== $ || A[57] !== w ? (z = c.jsxs(U, {
        direction: V,
        textAlign: "right",
        spacing: "1px",
        children: [$, eA, w]
    }),
    A[56] = $,
    A[57] = w,
    A[58] = z) : z = A[58];
    let Z;
    A[59] !== v || A[60] !== z ? (Z = c.jsxs(U, {
        direction: J,
        spacing: "1",
        w: "100%",
        children: [v, W, z]
    }),
    A[59] = v,
    A[60] = z,
    A[61] = Z) : Z = A[61];
    let AA;
    A[62] !== Y || A[63] !== Z ? (AA = c.jsxs(U, {
        p: "2",
        px: u,
        bg: "gray.200",
        spacing: "0px",
        borderTopRadius: "6px",
        bgGradient: "linear(to-r,gray.100,white,gray.100)",
        direction: "row",
        w: "100%",
        children: [Y, Z]
    }),
    A[62] = Y,
    A[63] = Z,
    A[64] = AA) : AA = A[64];
    let cA;
    A[65] === Symbol.for("react.memo_cache_sentinel") ? (cA = c.jsx(mI, {
        borderColor: "gray.200"
    }),
    A[65] = cA) : cA = A[65];
    let Q;
    if (A[66] !== I.tickets || A[67] !== (E == null ? void 0 : E.pool)) {
        let sA;
        A[69] !== (E == null ? void 0 : E.pool) ? (sA = (iA, BA) => c.jsx(T, {
            children: c.jsxs(U, {
                direction: "row",
                w: "100%",
                children: [c.jsx(T, {
                    w: ["50px", "50px"],
                    justifyContent: "center",
                    display: "flex",
                    color: "gray.400",
                    children: c.jsx(pt, {
                        fontSize: "1.5rem"
                    })
                }), c.jsxs(U, {
                    direction: ["column", "row"],
                    w: "100%",
                    lineHeight: "110%",
                    children: [c.jsxs(U, {
                        spacing: "0px",
                        children: [c.jsx(T, {
                            fontWeight: "500",
                            children: iA.eventName
                        }), c.jsx(T, {
                            mt: "1",
                            children: iA.standName
                        }), c.jsxs(T, {
                            children: ["[ ", iA.seatNo, " ]"]
                        })]
                    }), c.jsx(nA, {}), c.jsx(U, {
                        textAlign: "right",
                        color: "gray.500",
                        children: (E == null ? void 0 : E.pool) == "D" ? c.jsxs(T, {
                            children: [iA.qty, " X", " ", c.jsxs(M, {
                                as: "span",
                                textDecoration: "line-through",
                                children: [" ", "₹", iA.price, " "]
                            }), " ", "₹", iA.price * .9, " = ₹", iA.amount]
                        }) : c.jsxs(T, {
                            children: [iA.qty, " X ₹", iA.price, " = ₹", iA.amount]
                        })
                    })]
                })]
            })
        }, BA),
        A[69] = E == null ? void 0 : E.pool,
        A[70] = sA) : sA = A[70],
        Q = I.tickets.map(sA),
        A[66] = I.tickets,
        A[67] = E == null ? void 0 : E.pool,
        A[68] = Q
    } else
        Q = A[68];
    let F;
    A[71] !== I.addons ? (F = I.addons.length > 0 && c.jsx(T, {
        children: c.jsxs(U, {
            direction: "row",
            w: "100%",
            children: [c.jsx(T, {
                w: ["50px", "50px"],
                justifyContent: "center",
                display: "flex",
                color: "gray.400",
                children: c.jsx(xt, {
                    fontSize: "1.5rem"
                })
            }), c.jsx(U, {
                spacing: "1px",
                w: "100%",
                children: I.addons.map(To)
            })]
        })
    }),
    A[71] = I.addons,
    A[72] = F) : F = A[72];
    let C;
    A[73] !== I.merchandise ? (C = I.merchandise.map(Lo),
    A[73] = I.merchandise,
    A[74] = C) : C = A[74];
    let k;
    A[75] !== Q || A[76] !== F || A[77] !== C ? (k = c.jsxs(U, {
        spacing: 2,
        p: "10px",
        w: "100%",
        color: "gray.600",
        divider: cA,
        children: [Q, F, C]
    }),
    A[75] = Q,
    A[76] = F,
    A[77] = C,
    A[78] = k) : k = A[78];
    let NA;
    A[79] === Symbol.for("react.memo_cache_sentinel") ? (NA = c.jsxs(Zt, {
        bg: "#fff",
        children: [c.jsx(T, {
            as: "span",
            flex: "1",
            textAlign: "left",
            color: "red.400",
            children: "More Information"
        }), c.jsx(Qt, {
            bg: "red.100",
            borderRadius: "50%",
            color: "red"
        })]
    }),
    A[79] = NA) : NA = A[79];
    let RA;
    A[80] === Symbol.for("react.memo_cache_sentinel") ? (RA = ["column", "row"],
    A[80] = RA) : RA = A[80];
    let EA;
    A[81] === Symbol.for("react.memo_cache_sentinel") ? (EA = c.jsx("span", {
        style: {
            fontWeight: "500 !important",
            color: "#5b6371"
        },
        children: "Name :"
    }),
    A[81] = EA) : EA = A[81];
    let lA;
    A[82] !== I.firstName || A[83] !== I.lastName ? (lA = c.jsxs(M, {
        w: "100%",
        children: [EA, " ", I.firstName, " ", I.lastName]
    }),
    A[82] = I.firstName,
    A[83] = I.lastName,
    A[84] = lA) : lA = A[84];
    let dA;
    A[85] === Symbol.for("react.memo_cache_sentinel") ? (dA = c.jsx("span", {
        style: {
            fontWeight: "500 !important",
            color: "#5b6371"
        },
        children: "Mobile :"
    }),
    A[85] = dA) : dA = A[85];
    let mA;
    A[86] !== I.mob ? (mA = c.jsxs(M, {
        w: "100%",
        children: [dA, " ", I.mob]
    }),
    A[86] = I.mob,
    A[87] = mA) : mA = A[87];
    let xA;
    A[88] === Symbol.for("react.memo_cache_sentinel") ? (xA = c.jsx("span", {
        style: {
            fontWeight: "500 !important",
            color: "#5b6371"
        },
        children: "Email :"
    }),
    A[88] = xA) : xA = A[88];
    let aA;
    A[89] !== I.email ? (aA = c.jsxs(M, {
        w: "100%",
        children: [xA, " ", I.email]
    }),
    A[89] = I.email,
    A[90] = aA) : aA = A[90];
    let LA;
    A[91] !== lA || A[92] !== mA || A[93] !== aA ? (LA = c.jsxs(U, {
        direction: RA,
        w: "100%",
        children: [lA, mA, aA]
    }),
    A[91] = lA,
    A[92] = mA,
    A[93] = aA,
    A[94] = LA) : LA = A[94];
    let HA;
    A[95] !== r || A[96] !== i || A[97] !== a || A[98] !== j || A[99] !== I.oLock || A[100] !== I.oPwd || A[101] !== I.orderId || A[102] !== I.tickets.length || A[103] !== l ? (HA = I.tickets.length > 0 && c.jsxs(c.Fragment, {
        children: [c.jsx(oA, {
            my: "2"
        }), c.jsxs(U, {
            direction: ["column", "row"],
            w: "100%",
            children: [c.jsx(TA, {
                spacing: 3,
                w: "100%",
                children: c.jsx(U, {
                    w: "100%",
                    direction: ["column", "row"],
                    children: I != null && I.oPwd ? c.jsxs(c.Fragment, {
                        children: [c.jsx(_, {
                            leftIcon: c.jsx(EI, {}),
                            colorScheme: "blue",
                            variant: "outline",
                            size: "sm",
                            onClick: () => {
                                l({
                                    title: "Copied",
                                    status: "info",
                                    duration: 1500
                                }),
                                a(I == null ? void 0 : I.oPwd)
                            }
                            ,
                            children: "Copy M-Ticket Password"
                        }), c.jsx(_, {
                            leftIcon: c.jsx(mt, {}),
                            colorScheme: "green",
                            variant: "outline",
                            size: "sm",
                            onClick: () => r.onOpen(),
                            children: "Set New M-Ticket Password"
                        })]
                    }) : c.jsx(_, {
                        leftIcon: c.jsx(mt, {}),
                        colorScheme: "green",
                        variant: "solid",
                        size: "sm",
                        onClick: () => r.onOpen(),
                        children: "Create M-Ticket Password"
                    })
                })
            }), c.jsx(TA, {
                w: "100%",
                children: c.jsxs(U, {
                    w: "100%",
                    direction: ["column", "row"],
                    children: [c.jsxs(TA, {
                        fontFamily: "rcbFontB",
                        children: [c.jsx(DA, {
                            color: "green",
                            children: "Unlock M-Ticket"
                        }), c.jsx(DA, {
                            children: c.jsx(hI, {
                                colorScheme: "red",
                                size: "lg",
                                onChange: sA => {
                                    if (!(I != null && I.oPwd)) {
                                        l({
                                            title: "Please Create M-Ticket Password First.",
                                            status: "info",
                                            duration: 3500
                                        });
                                        return
                                    }
                                    const iA = {
                                        orderNo: I.orderId,
                                        lockingValue: sA.target.checked ? 5 : 0
                                    };
                                    i.mutate(iA)
                                }
                                ,
                                isChecked: (I == null ? void 0 : I.oLock) >= 5
                            })
                        }), c.jsx(DA, {
                            color: "red",
                            children: "Lock M-Ticket"
                        })]
                    }), c.jsx(nA, {}), c.jsx(_, {
                        onClick: () => j(),
                        colorScheme: "red",
                        variant: "outline",
                        size: "sm",
                        leftIcon: c.jsx(pt, {}),
                        children: "View M-Ticket"
                    })]
                })
            })]
        })]
    }),
    A[95] = r,
    A[96] = i,
    A[97] = a,
    A[98] = j,
    A[99] = I.oLock,
    A[100] = I.oPwd,
    A[101] = I.orderId,
    A[102] = I.tickets.length,
    A[103] = l,
    A[104] = HA) : HA = A[104];
    let SA;
    A[105] !== I.addLine1 || A[106] !== I.addLine2 || A[107] !== I.city || A[108] !== I.landmark || A[109] !== I.pincode ? (SA = I.addLine1 ? c.jsxs(c.Fragment, {
        children: [c.jsxs(M, {
            w: "100%",
            mt: "2",
            children: [c.jsx("span", {
                style: {
                    fontWeight: "500 !important",
                    color: "#5b6371"
                },
                children: "Address :"
            }), " ", I.addLine1, ", ", I.addLine2, ", ", I.city]
        }), c.jsxs(U, {
            direction: ["column", "row"],
            w: "100%",
            children: [c.jsxs(M, {
                w: "100%",
                children: [c.jsx("span", {
                    style: {
                        fontWeight: "500 !important",
                        color: "#5b6371"
                    },
                    children: "Landmark :"
                }), " ", I.landmark]
            }), c.jsxs(M, {
                w: "100%",
                children: [c.jsx("span", {
                    style: {
                        fontWeight: "500 !important",
                        color: "#5b6371"
                    },
                    children: "PIN Code :"
                }), " ", I.pincode]
            }), c.jsx(M, {
                w: "100%"
            })]
        })]
    }) : null,
    A[105] = I.addLine1,
    A[106] = I.addLine2,
    A[107] = I.city,
    A[108] = I.landmark,
    A[109] = I.pincode,
    A[110] = SA) : SA = A[110];
    let uA;
    A[111] !== LA || A[112] !== HA || A[113] !== SA ? (uA = c.jsx(qt, {
        allowToggle: !0,
        children: c.jsxs($t, {
            bg: "#fff",
            borderBottomRadius: "5px",
            children: [NA, c.jsxs(Xt, {
                pb: 4,
                borderBottomRadius: "20px",
                fontSize: "0.9rem",
                children: [LA, HA, SA]
            })]
        })
    }),
    A[111] = LA,
    A[112] = HA,
    A[113] = SA,
    A[114] = uA) : uA = A[114];
    let GA;
    A[115] !== g || A[116] !== r.isOpen || A[117] !== r.onClose || A[118] !== n.isLoading ? (GA = r.isOpen && c.jsxs(_c, {
        isOpen: r.isOpen,
        onClose: r.onClose,
        children: [c.jsx(ac, {}), c.jsxs(Jc, {
            children: [c.jsx(ic, {
                children: "Create/Change Password"
            }), c.jsx(oA, {}), c.jsx(Xc, {
                bg: "red",
                borderRadius: "50%",
                color: "white"
            }), c.jsxs(zA, {
                pb: 6,
                children: [c.jsxs(tA, {
                    isRequired: !0,
                    children: [c.jsx(IA, {
                        children: "New Password"
                    }), c.jsx(pA, {
                        fontFamily: "rcbFontB",
                        ref: R,
                        type: "password",
                        placeholder: "Min 8 char",
                        maxLength: 15
                    })]
                }), c.jsxs(tA, {
                    mt: 4,
                    isRequired: !0,
                    children: [c.jsx(IA, {
                        children: "Confirm Password"
                    }), c.jsx(pA, {
                        fontFamily: "rcbFontB",
                        ref: p,
                        type: "password",
                        placeholder: "Min 8 char",
                        maxLength: 15
                    }), c.jsx(nc, {
                        color: "blue.500",
                        children: "Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character(@,#,$) and must contain a minimum 8 characters."
                    })]
                })]
            }), c.jsxs(fc, {
                children: [c.jsx(_, {
                    rightIcon: c.jsx(HI, {}),
                    colorScheme: "red",
                    mr: 3,
                    onClick: () => g(),
                    isLoading: n.isLoading,
                    children: "Save"
                }), c.jsx(_, {
                    colorScheme: "red",
                    variant: "outline",
                    onClick: r.onClose,
                    children: "Cancel"
                })]
            })]
        })]
    }),
    A[115] = g,
    A[116] = r.isOpen,
    A[117] = r.onClose,
    A[118] = n.isLoading,
    A[119] = GA) : GA = A[119];
    let jA;
    return A[120] !== AA || A[121] !== k || A[122] !== uA || A[123] !== GA ? (jA = c.jsxs(T, {
        border: "1px solid #ffdddd",
        bg: "white",
        borderRadius: "md",
        _hover: y,
        fontSize: "0.9rem",
        children: [AA, k, uA, GA]
    }),
    A[120] = AA,
    A[121] = k,
    A[122] = uA,
    A[123] = GA,
    A[124] = jA) : jA = A[124],
    jA
}
;
function ao(t) {
    return t.session
}
function To(t, A) {
    return c.jsx(T, {
        children: c.jsxs(U, {
            spacing: "1px",
            w: "100%",
            direction: ["column", "row"],
            children: [c.jsx(T, {
                fontWeight: "500",
                children: t.itemName
            }), c.jsx(nA, {}), c.jsxs(T, {
                textAlign: "right",
                color: "gray.500",
                children: [t.qty, " X ₹", t.price, " = ₹", t.amount]
            })]
        })
    }, A)
}
function Lo(t, A) {
    return c.jsx(T, {
        children: c.jsxs(U, {
            direction: "row",
            w: "100%",
            lineHeight: "110%",
            children: [c.jsx(T, {
                w: ["50px", "50px"],
                justifyContent: "center",
                display: "flex",
                color: "gray.400",
                children: c.jsx(nt, {
                    fontSize: "1.5rem"
                })
            }), c.jsxs(U, {
                direction: ["column", "row"],
                w: "100%",
                children: [c.jsxs(U, {
                    spacing: "1px",
                    children: [c.jsx(T, {
                        fontWeight: "500",
                        children: t.merName
                    }), c.jsxs(T, {
                        children: [t.merCat, " - ", t.size]
                    }), t.perText && c.jsxs(T, {
                        children: ["Personalize [ ", t.perText, " - ", t.perNo, " ]"]
                    })]
                }), c.jsx(nA, {}), c.jsxs(T, {
                    textAlign: "right",
                    color: "gray.500",
                    children: [t.qty, " X ₹", t.price, " ", t.perText && c.jsxs(c.Fragment, {
                        children: [" + ", t.perAmt]
                    }), " = ₹", t.amount]
                })]
            })]
        })
    }, A)
}
const Eo = () => {
    var n, a, r, R, p;
    const t = X.c(13);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = {
        queryKey: ["orders"],
        queryFn: kI
    },
    t[0] = A) : A = t[0];
    const I = Gc(A)
      , e = kA();
    let s;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(Yt, {
        path: "My Tickets"
    }),
    t[1] = s) : s = t[1];
    let o;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(ct, {
        text: "My Tickets",
        icon: c.jsx(pt, {})
    }),
    t[2] = o) : o = t[2];
    let N;
    t[3] !== I.isPending ? (N = I.isPending && c.jsx(At, {}),
    t[3] = I.isPending,
    t[4] = N) : N = t[4];
    let i;
    t[5] !== ((n = I.data) == null ? void 0 : n.result) || t[6] !== I.isSuccess || t[7] !== I.refetch || t[8] !== e ? (i = I.isSuccess && c.jsx(c.Fragment, {
        children: ((r = (a = I.data) == null ? void 0 : a.result) == null ? void 0 : r.length) > 0 ? c.jsx(Ho, {
            Orders: (R = I.data) == null ? void 0 : R.result,
            orderRefetch: I.refetch
        }) : c.jsx(DA, {
            w: "100%",
            h: "50vh",
            children: c.jsxs(U, {
                spacing: 6,
                children: [c.jsx(DA, {
                    children: c.jsx(Wc, {
                        fontSize: "6rem",
                        color: "silver"
                    })
                }), c.jsx(M, {
                    children: "Hurry, Act fast - Place your order now."
                }), c.jsx(T, {
                    textAlign: "center",
                    children: c.jsx(_, {
                        colorScheme: "red",
                        onClick: () => e("/"),
                        children: "Start Shopping"
                    })
                })]
            })
        })
    }),
    t[5] = (p = I.data) == null ? void 0 : p.result,
    t[6] = I.isSuccess,
    t[7] = I.refetch,
    t[8] = e,
    t[9] = i) : i = t[9];
    let D;
    return t[10] !== N || t[11] !== i ? (D = c.jsxs(c.Fragment, {
        children: [s, c.jsxs(U, {
            children: [o, N, i]
        })]
    }),
    t[10] = N,
    t[11] = i,
    t[12] = D) : D = t[12],
    D
}
  , Ho = t => {
    const A = X.c(8)
      , {Orders: I, orderRefetch: e} = t;
    let s;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (s = ["2", "0"],
    A[0] = s) : s = A[0];
    let o;
    if (A[1] !== I || A[2] !== e) {
        let i;
        A[4] !== e ? (i = (D, n) => c.jsx(Mo, {
            order: D,
            orderRefetch: e
        }, n),
        A[4] = e,
        A[5] = i) : i = A[5],
        o = I.map(i),
        A[1] = I,
        A[2] = e,
        A[3] = o
    } else
        o = A[3];
    let N;
    return A[6] !== o ? (N = c.jsx(U, {
        p: s,
        spacing: "45px",
        children: o
    }),
    A[6] = o,
    A[7] = N) : N = A[7],
    N
}
  , Mo = t => {
    var _A, yA;
    const A = X.c(125)
      , {order: I, orderRefetch: e} = t;
    let s;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (s = {
        mutationFn: WI
    },
    A[0] = s) : s = A[0];
    const o = hA(s);
    let N;
    A[1] === Symbol.for("react.memo_cache_sentinel") ? (N = {
        mutationFn: zI
    },
    A[1] = N) : N = A[1];
    const i = hA(N);
    let D;
    A[2] === Symbol.for("react.memo_cache_sentinel") ? (D = {
        mutationFn: FI
    },
    A[2] = D) : D = A[2];
    const n = hA(D)
      , {onCopy: a} = KI("")
      , r = pc()
      , R = it.useRef()
      , p = it.useRef()
      , l = WA()
      , E = JA(Uo);
    let G;
    A[3] !== o.isSuccess || A[4] !== l ? (G = () => {
        o.isSuccess && l({
            title: "Sent successfully.",
            status: "success",
            duration: "3500"
        })
    }
    ,
    A[3] = o.isSuccess,
    A[4] = l,
    A[5] = G) : G = A[5];
    let h;
    A[6] !== o.isSuccess ? (h = [o.isSuccess],
    A[6] = o.isSuccess,
    A[7] = h) : h = A[7],
    P.useEffect(G, h);
    let m;
    A[8] !== i.isSuccess || A[9] !== e || A[10] !== l ? (m = () => {
        i.isSuccess && (e(),
        l({
            title: "Saved successfully.",
            status: "success",
            duration: "3500"
        }))
    }
    ,
    A[8] = i.isSuccess,
    A[9] = e,
    A[10] = l,
    A[11] = m) : m = A[11];
    let x;
    A[12] !== i.isSuccess ? (x = [i.isSuccess],
    A[12] = i.isSuccess,
    A[13] = x) : x = A[13],
    P.useEffect(m, x);
    let L;
    A[14] !== r || A[15] !== ((_A = n.data) == null ? void 0 : _A.status) || A[16] !== n.isSuccess || A[17] !== e || A[18] !== l ? (L = () => {
        var sA;
        n.isSuccess && (((sA = n.data) == null ? void 0 : sA.status) == "Success" ? (e(),
        r.onClose(),
        l({
            title: "Password changed successfully.",
            status: "success",
            duration: "3500"
        })) : l({
            title: "Error",
            description: "Password must be 8-15 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.",
            status: "error",
            duration: "3500"
        }))
    }
    ,
    A[14] = r,
    A[15] = (yA = n.data) == null ? void 0 : yA.status,
    A[16] = n.isSuccess,
    A[17] = e,
    A[18] = l,
    A[19] = L) : L = A[19];
    let d;
    A[20] !== n.isSuccess ? (d = [n.isSuccess],
    A[20] = n.isSuccess,
    A[21] = d) : d = A[21],
    P.useEffect(L, d);
    let H;
    A[22] !== o || A[23] !== I.orderId ? (H = () => {
        const sA = {
            orderNo: I.orderId
        };
        o.mutate(sA)
    }
    ,
    A[22] = o,
    A[23] = I.orderId,
    A[24] = H) : H = A[24];
    const f = H;
    let O;
    A[25] !== n || A[26] !== I.orderId || A[27] !== l ? (O = () => {
        const sA = R.current.value
          , iA = p.current.value;
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$])[A-Za-z\d@#$]{8,}$/.test(sA)) {
            l({
                title: "Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character(@,#,$) and must contain a minimum 8 characters.",
                status: "error",
                duration: 3500,
                position: "top"
            });
            return
        }
        if (sA !== iA) {
            l({
                title: "Password mismatch.",
                status: "error",
                duration: 3500,
                position: "top"
            });
            return
        }
        const bA = {
            orderNo: I.orderId,
            password: sA
        };
        n.mutate(bA)
    }
    ,
    A[25] = n,
    A[26] = I.orderId,
    A[27] = l,
    A[28] = O) : O = A[28];
    const g = O;
    let K;
    A[29] !== I.oPwd || A[30] !== I.orderId || A[31] !== l ? (K = () => {
        if (!(I != null && I.oPwd)) {
            l({
                title: "Please Create M-Ticket Password First.",
                status: "info",
                duration: 3500
            });
            return
        }
        window.open("/mticket/" + I.orderId, "blank")
    }
    ,
    A[29] = I.oPwd,
    A[30] = I.orderId,
    A[31] = l,
    A[32] = K) : K = A[32];
    const j = K;
    let y;
    A[33] === Symbol.for("react.memo_cache_sentinel") ? (y = {
        shadow: "lg"
    },
    A[33] = y) : y = A[33];
    let u;
    A[34] === Symbol.for("react.memo_cache_sentinel") ? (u = ["5px", "10px"],
    A[34] = u) : u = A[34];
    let B;
    A[35] === Symbol.for("react.memo_cache_sentinel") ? (B = c.jsx(dI, {}),
    A[35] = B) : B = A[35];
    let S;
    A[36] !== o.isPending ? (S = c.jsx(lt, {
        as: VA,
        "aria-label": "Options",
        icon: B,
        variant: "ghost",
        colorScheme: "yellow",
        fontSize: "1.42rem",
        rounded: "full",
        isLoading: o.isPending
    }),
    A[36] = o.isPending,
    A[37] = S) : S = A[37];
    let b;
    A[38] !== o.isLoading || A[39] !== o.isSuccess || A[40] !== f ? (b = c.jsx(Mt, {
        p: "2",
        children: o.isLoading ? c.jsx(M, {
            children: "Sending..."
        }) : c.jsx(YA, {
            _hover: {
                bg: "red.400",
                color: "white"
            },
            rounded: "full",
            fontSize: "1.1rem",
            icon: c.jsx(LI, {}),
            isDisabled: o.isSuccess,
            onClick: () => f(),
            children: "Resend Confirmation"
        })
    }),
    A[38] = o.isLoading,
    A[39] = o.isSuccess,
    A[40] = f,
    A[41] = b) : b = A[41];
    let Y;
    A[42] !== S || A[43] !== b ? (Y = c.jsxs(dt, {
        mx: "2",
        children: [S, b]
    }),
    A[42] = S,
    A[43] = b,
    A[44] = Y) : Y = A[44];
    let J;
    A[45] === Symbol.for("react.memo_cache_sentinel") ? (J = ["column", "row"],
    A[45] = J) : J = A[45];
    let q;
    A[46] === Symbol.for("react.memo_cache_sentinel") ? (q = c.jsx(M, {
        color: "gray.500",
        children: "Order id :"
    }),
    A[46] = q) : q = A[46];
    let v;
    A[47] !== I.orderId ? (v = c.jsxs(U, {
        spacing: "0px",
        ml: "3",
        children: [q, c.jsx(M, {
            fontWeight: "500",
            children: I.orderId
        })]
    }),
    A[47] = I.orderId,
    A[48] = v) : v = A[48];
    let W;
    A[49] === Symbol.for("react.memo_cache_sentinel") ? (W = c.jsx(nA, {}),
    A[49] = W) : W = A[49];
    let V;
    A[50] === Symbol.for("react.memo_cache_sentinel") ? (V = ["row", "column"],
    A[50] = V) : V = A[50];
    let $;
    A[51] !== I.orderDate ? ($ = c.jsx(M, {
        color: "gray.800",
        children: I.orderDate
    }),
    A[51] = I.orderDate,
    A[52] = $) : $ = A[52];
    let eA;
    A[53] === Symbol.for("react.memo_cache_sentinel") ? (eA = c.jsx(nA, {}),
    A[53] = eA) : eA = A[53];
    let w;
    A[54] !== I.amount ? (w = c.jsxs(M, {
        fontWeight: "500",
        children: ["Amount : ₹", I.amount]
    }),
    A[54] = I.amount,
    A[55] = w) : w = A[55];
    let z;
    A[56] !== $ || A[57] !== w ? (z = c.jsxs(U, {
        direction: V,
        textAlign: "right",
        spacing: "1px",
        children: [$, eA, w]
    }),
    A[56] = $,
    A[57] = w,
    A[58] = z) : z = A[58];
    let Z;
    A[59] !== v || A[60] !== z ? (Z = c.jsxs(U, {
        direction: J,
        spacing: "1",
        w: "100%",
        children: [v, W, z]
    }),
    A[59] = v,
    A[60] = z,
    A[61] = Z) : Z = A[61];
    let AA;
    A[62] !== Y || A[63] !== Z ? (AA = c.jsxs(U, {
        p: "2",
        px: u,
        bg: "gray.200",
        spacing: "0px",
        borderTopRadius: "6px",
        bgGradient: "linear(to-r,gray.100,white,gray.100)",
        direction: "row",
        w: "100%",
        children: [Y, Z]
    }),
    A[62] = Y,
    A[63] = Z,
    A[64] = AA) : AA = A[64];
    let cA;
    A[65] === Symbol.for("react.memo_cache_sentinel") ? (cA = c.jsx(mI, {
        borderColor: "gray.200"
    }),
    A[65] = cA) : cA = A[65];
    let Q;
    if (A[66] !== I.tickets || A[67] !== (E == null ? void 0 : E.pool)) {
        let sA;
        A[69] !== (E == null ? void 0 : E.pool) ? (sA = (iA, BA) => c.jsx(T, {
            children: c.jsxs(U, {
                direction: "row",
                w: "100%",
                children: [c.jsx(T, {
                    w: ["50px", "50px"],
                    justifyContent: "center",
                    display: "flex",
                    color: "gray.400",
                    children: c.jsx(pt, {
                        fontSize: "1.5rem"
                    })
                }), c.jsxs(U, {
                    direction: ["column", "row"],
                    w: "100%",
                    lineHeight: "110%",
                    children: [c.jsxs(U, {
                        spacing: "0px",
                        children: [c.jsx(T, {
                            fontWeight: "500",
                            children: iA.eventName
                        }), c.jsx(T, {
                            mt: "1",
                            children: iA.standName
                        }), c.jsxs(T, {
                            children: ["[ ", iA.seatNo, " ]"]
                        })]
                    }), c.jsx(nA, {}), c.jsx(U, {
                        textAlign: "right",
                        color: "gray.500",
                        children: (E == null ? void 0 : E.pool) == "D" ? c.jsxs(T, {
                            children: [iA.qty, " X", " ", c.jsxs(M, {
                                as: "span",
                                textDecoration: "line-through",
                                children: [" ", "₹", iA.price, " "]
                            }), " ", "₹", iA.price * .9, " = ₹", iA.amount]
                        }) : c.jsxs(T, {
                            children: [iA.qty, " X ₹", iA.price, " = ₹", iA.amount]
                        })
                    })]
                })]
            })
        }, BA),
        A[69] = E == null ? void 0 : E.pool,
        A[70] = sA) : sA = A[70],
        Q = I.tickets.map(sA),
        A[66] = I.tickets,
        A[67] = E == null ? void 0 : E.pool,
        A[68] = Q
    } else
        Q = A[68];
    let F;
    A[71] !== I.addons ? (F = I.addons.length > 0 && c.jsx(T, {
        children: c.jsxs(U, {
            direction: "row",
            w: "100%",
            children: [c.jsx(T, {
                w: ["50px", "50px"],
                justifyContent: "center",
                display: "flex",
                color: "gray.400",
                children: c.jsx(xt, {
                    fontSize: "1.5rem"
                })
            }), c.jsx(U, {
                spacing: "1px",
                w: "100%",
                children: I.addons.map(Ko)
            })]
        })
    }),
    A[71] = I.addons,
    A[72] = F) : F = A[72];
    let C;
    A[73] !== I.merchandise ? (C = I.merchandise.map(ho),
    A[73] = I.merchandise,
    A[74] = C) : C = A[74];
    let k;
    A[75] !== Q || A[76] !== F || A[77] !== C ? (k = c.jsxs(U, {
        spacing: 2,
        p: "10px",
        w: "100%",
        color: "gray.600",
        divider: cA,
        children: [Q, F, C]
    }),
    A[75] = Q,
    A[76] = F,
    A[77] = C,
    A[78] = k) : k = A[78];
    let NA;
    A[79] === Symbol.for("react.memo_cache_sentinel") ? (NA = c.jsxs(Zt, {
        bg: "#fff",
        children: [c.jsx(T, {
            as: "span",
            flex: "1",
            textAlign: "left",
            color: "red.400",
            children: "More Information"
        }), c.jsx(Qt, {
            bg: "red.100",
            borderRadius: "50%",
            color: "red"
        })]
    }),
    A[79] = NA) : NA = A[79];
    let RA;
    A[80] === Symbol.for("react.memo_cache_sentinel") ? (RA = ["column", "row"],
    A[80] = RA) : RA = A[80];
    let EA;
    A[81] === Symbol.for("react.memo_cache_sentinel") ? (EA = c.jsx("span", {
        style: {
            fontWeight: "500 !important",
            color: "#5b6371"
        },
        children: "Name :"
    }),
    A[81] = EA) : EA = A[81];
    let lA;
    A[82] !== I.firstName || A[83] !== I.lastName ? (lA = c.jsxs(M, {
        w: "100%",
        children: [EA, " ", I.firstName, " ", I.lastName]
    }),
    A[82] = I.firstName,
    A[83] = I.lastName,
    A[84] = lA) : lA = A[84];
    let dA;
    A[85] === Symbol.for("react.memo_cache_sentinel") ? (dA = c.jsx("span", {
        style: {
            fontWeight: "500 !important",
            color: "#5b6371"
        },
        children: "Mobile :"
    }),
    A[85] = dA) : dA = A[85];
    let mA;
    A[86] !== I.mob ? (mA = c.jsxs(M, {
        w: "100%",
        children: [dA, " ", I.mob]
    }),
    A[86] = I.mob,
    A[87] = mA) : mA = A[87];
    let xA;
    A[88] === Symbol.for("react.memo_cache_sentinel") ? (xA = c.jsx("span", {
        style: {
            fontWeight: "500 !important",
            color: "#5b6371"
        },
        children: "Email :"
    }),
    A[88] = xA) : xA = A[88];
    let aA;
    A[89] !== I.email ? (aA = c.jsxs(M, {
        w: "100%",
        children: [xA, " ", I.email]
    }),
    A[89] = I.email,
    A[90] = aA) : aA = A[90];
    let LA;
    A[91] !== lA || A[92] !== mA || A[93] !== aA ? (LA = c.jsxs(U, {
        direction: RA,
        w: "100%",
        children: [lA, mA, aA]
    }),
    A[91] = lA,
    A[92] = mA,
    A[93] = aA,
    A[94] = LA) : LA = A[94];
    let HA;
    A[95] !== r || A[96] !== i || A[97] !== a || A[98] !== j || A[99] !== I.oLock || A[100] !== I.oPwd || A[101] !== I.orderId || A[102] !== I.tickets.length || A[103] !== l ? (HA = I.tickets.length > 0 && c.jsxs(c.Fragment, {
        children: [c.jsx(oA, {
            my: "2"
        }), c.jsxs(U, {
            direction: ["column", "row"],
            w: "100%",
            children: [c.jsx(TA, {
                spacing: 3,
                w: "100%",
                children: c.jsx(U, {
                    w: "100%",
                    direction: ["column", "row"],
                    children: I != null && I.oPwd ? c.jsxs(c.Fragment, {
                        children: [c.jsx(_, {
                            leftIcon: c.jsx(EI, {}),
                            colorScheme: "blue",
                            variant: "outline",
                            size: "sm",
                            onClick: () => {
                                l({
                                    title: "Copied",
                                    status: "info",
                                    duration: 1500
                                }),
                                a(I == null ? void 0 : I.oPwd)
                            }
                            ,
                            children: "Copy M-Ticket Password"
                        }), c.jsx(_, {
                            leftIcon: c.jsx(mt, {}),
                            colorScheme: "green",
                            variant: "outline",
                            size: "sm",
                            onClick: () => r.onOpen(),
                            children: "Set New M-Ticket Password"
                        })]
                    }) : c.jsx(_, {
                        leftIcon: c.jsx(mt, {}),
                        colorScheme: "green",
                        variant: "solid",
                        size: "sm",
                        onClick: () => r.onOpen(),
                        children: "Create M-Ticket Password"
                    })
                })
            }), c.jsx(TA, {
                w: "100%",
                children: c.jsxs(U, {
                    w: "100%",
                    direction: ["column", "row"],
                    children: [c.jsxs(TA, {
                        fontFamily: "rcbFontB",
                        children: [c.jsx(DA, {
                            color: "green",
                            children: "Unlock M-Ticket"
                        }), c.jsx(DA, {
                            children: c.jsx(hI, {
                                colorScheme: "red",
                                size: "lg",
                                onChange: sA => {
                                    if (!(I != null && I.oPwd)) {
                                        l({
                                            title: "Please Create M-Ticket Password First.",
                                            status: "info",
                                            duration: 3500
                                        });
                                        return
                                    }
                                    const iA = {
                                        orderNo: I.orderId,
                                        lockingValue: sA.target.checked ? 5 : 0
                                    };
                                    i.mutate(iA)
                                }
                                ,
                                isChecked: (I == null ? void 0 : I.oLock) >= 5
                            })
                        }), c.jsx(DA, {
                            color: "red",
                            children: "Lock M-Ticket"
                        })]
                    }), c.jsx(nA, {}), c.jsx(_, {
                        onClick: () => j(),
                        colorScheme: "red",
                        variant: "outline",
                        size: "sm",
                        leftIcon: c.jsx(pt, {}),
                        children: "View M-Ticket"
                    })]
                })
            })]
        })]
    }),
    A[95] = r,
    A[96] = i,
    A[97] = a,
    A[98] = j,
    A[99] = I.oLock,
    A[100] = I.oPwd,
    A[101] = I.orderId,
    A[102] = I.tickets.length,
    A[103] = l,
    A[104] = HA) : HA = A[104];
    let SA;
    A[105] !== I.addLine1 || A[106] !== I.addLine2 || A[107] !== I.city || A[108] !== I.landmark || A[109] !== I.pincode ? (SA = I.addLine1 ? c.jsxs(c.Fragment, {
        children: [c.jsxs(M, {
            w: "100%",
            mt: "2",
            children: [c.jsx("span", {
                style: {
                    fontWeight: "500 !important",
                    color: "#5b6371"
                },
                children: "Address :"
            }), " ", I.addLine1, ", ", I.addLine2, ", ", I.city]
        }), c.jsxs(U, {
            direction: ["column", "row"],
            w: "100%",
            children: [c.jsxs(M, {
                w: "100%",
                children: [c.jsx("span", {
                    style: {
                        fontWeight: "500 !important",
                        color: "#5b6371"
                    },
                    children: "Landmark :"
                }), " ", I.landmark]
            }), c.jsxs(M, {
                w: "100%",
                children: [c.jsx("span", {
                    style: {
                        fontWeight: "500 !important",
                        color: "#5b6371"
                    },
                    children: "PIN Code :"
                }), " ", I.pincode]
            }), c.jsx(M, {
                w: "100%"
            })]
        })]
    }) : null,
    A[105] = I.addLine1,
    A[106] = I.addLine2,
    A[107] = I.city,
    A[108] = I.landmark,
    A[109] = I.pincode,
    A[110] = SA) : SA = A[110];
    let uA;
    A[111] !== LA || A[112] !== HA || A[113] !== SA ? (uA = c.jsx(qt, {
        allowToggle: !0,
        children: c.jsxs($t, {
            bg: "#fff",
            borderBottomRadius: "5px",
            children: [NA, c.jsxs(Xt, {
                pb: 4,
                borderBottomRadius: "20px",
                fontSize: "0.9rem",
                children: [LA, HA, SA]
            })]
        })
    }),
    A[111] = LA,
    A[112] = HA,
    A[113] = SA,
    A[114] = uA) : uA = A[114];
    let GA;
    A[115] !== g || A[116] !== r.isOpen || A[117] !== r.onClose || A[118] !== n.isLoading ? (GA = r.isOpen && c.jsxs(_c, {
        isOpen: r.isOpen,
        onClose: r.onClose,
        children: [c.jsx(ac, {}), c.jsxs(Jc, {
            children: [c.jsx(ic, {
                children: "Create/Change Password"
            }), c.jsx(oA, {}), c.jsx(Xc, {
                bg: "red",
                borderRadius: "50%",
                color: "white"
            }), c.jsxs(zA, {
                pb: 6,
                children: [c.jsxs(tA, {
                    isRequired: !0,
                    children: [c.jsx(IA, {
                        children: "New Password"
                    }), c.jsx(pA, {
                        fontFamily: "rcbFontB",
                        ref: R,
                        type: "password",
                        placeholder: "Min 8 char",
                        maxLength: 15
                    })]
                }), c.jsxs(tA, {
                    mt: 4,
                    isRequired: !0,
                    children: [c.jsx(IA, {
                        children: "Confirm Password"
                    }), c.jsx(pA, {
                        fontFamily: "rcbFontB",
                        ref: p,
                        type: "password",
                        placeholder: "Min 8 char",
                        maxLength: 15
                    }), c.jsx(nc, {
                        color: "blue.500",
                        children: "Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character(@,#,$) and must contain a minimum 8 characters."
                    })]
                })]
            }), c.jsxs(fc, {
                children: [c.jsx(_, {
                    rightIcon: c.jsx(HI, {}),
                    colorScheme: "red",
                    mr: 3,
                    onClick: () => g(),
                    isLoading: n.isLoading,
                    children: "Save"
                }), c.jsx(_, {
                    colorScheme: "red",
                    variant: "outline",
                    onClick: r.onClose,
                    children: "Cancel"
                })]
            })]
        })]
    }),
    A[115] = g,
    A[116] = r.isOpen,
    A[117] = r.onClose,
    A[118] = n.isLoading,
    A[119] = GA) : GA = A[119];
    let jA;
    return A[120] !== AA || A[121] !== k || A[122] !== uA || A[123] !== GA ? (jA = c.jsxs(T, {
        border: "1px solid #ffdddd",
        bg: "white",
        borderRadius: "md",
        _hover: y,
        fontSize: "0.9rem",
        children: [AA, k, uA, GA]
    }),
    A[120] = AA,
    A[121] = k,
    A[122] = uA,
    A[123] = GA,
    A[124] = jA) : jA = A[124],
    jA
}
;
function Uo(t) {
    return t.session
}
function Ko(t, A) {
    return c.jsx(T, {
        children: c.jsxs(U, {
            spacing: "1px",
            w: "100%",
            direction: ["column", "row"],
            children: [c.jsx(T, {
                fontWeight: "500",
                children: t.itemName
            }), c.jsx(nA, {}), c.jsxs(T, {
                textAlign: "right",
                color: "gray.500",
                children: [t.qty, " X ₹", t.price, " = ₹", t.amount]
            })]
        })
    }, A)
}
function ho(t, A) {
    return c.jsx(T, {
        children: c.jsxs(U, {
            direction: "row",
            w: "100%",
            lineHeight: "110%",
            children: [c.jsx(T, {
                w: ["50px", "50px"],
                justifyContent: "center",
                display: "flex",
                color: "gray.400",
                children: c.jsx(nt, {
                    fontSize: "1.5rem"
                })
            }), c.jsxs(U, {
                direction: ["column", "row"],
                w: "100%",
                children: [c.jsxs(U, {
                    spacing: "1px",
                    children: [c.jsx(T, {
                        fontWeight: "500",
                        children: t.merName
                    }), c.jsxs(T, {
                        children: [t.merCat, " - ", t.size]
                    }), t.perText && c.jsxs(T, {
                        children: ["Personalize [ ", t.perText, " - ", t.perNo, " ]"]
                    })]
                }), c.jsx(nA, {}), c.jsxs(T, {
                    textAlign: "right",
                    color: "gray.500",
                    children: [t.qty, " X ₹", t.price, " ", t.perText && c.jsxs(c.Fragment, {
                        children: [" + ", t.perAmt]
                    }), " = ₹", t.amount]
                })]
            })]
        })
    }, A)
}
const mo = () => {
    var R, p;
    const t = X.c(14)
      , {orderId: A} = ft();
    let I;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (I = {
        mutationFn: ss
    },
    t[0] = I) : I = t[0];
    const e = hA(I)
      , s = kA()
      , {setOrderId: o} = JA()
      , N = So;
    let i;
    t[1] !== e || t[2] !== A ? (i = () => {
        (async () => {
            await N(2500),
            e.mutate({
                order_id: A
            })
        }
        )()
    }
    ,
    t[1] = e,
    t[2] = A,
    t[3] = i) : i = t[3];
    let D;
    t[4] === Symbol.for("react.memo_cache_sentinel") ? (D = [],
    t[4] = D) : D = t[4],
    P.useEffect(i, D);
    let n;
    t[5] !== ((R = e.data) == null ? void 0 : R.status) || t[6] !== e.isSuccess || t[7] !== s || t[8] !== A || t[9] !== o ? (n = () => {
        var l;
        e.isSuccess && (((l = e.data) == null ? void 0 : l.status) == "Success" ? (o(A),
        s("/thankyou")) : (o(""),
        s("/failed")))
    }
    ,
    t[5] = (p = e.data) == null ? void 0 : p.status,
    t[6] = e.isSuccess,
    t[7] = s,
    t[8] = A,
    t[9] = o,
    t[10] = n) : n = t[10];
    let a;
    t[11] !== e.isSuccess ? (a = [e.isSuccess],
    t[11] = e.isSuccess,
    t[12] = a) : a = t[12],
    P.useEffect(n, a);
    let r;
    return t[13] === Symbol.for("react.memo_cache_sentinel") ? (r = c.jsx(DA, {
        mx: "auto",
        h: "450px",
        maxW: "5xl",
        my: "3",
        children: c.jsxs(U, {
            spacing: "8",
            textAlign: "center",
            color: "GrayText",
            children: [c.jsx(DA, {
                children: c.jsxs(U, {
                    position: "relative",
                    children: [c.jsx(zt, {
                        thickness: "4px",
                        speed: "4s",
                        emptyColor: "gray.200",
                        color: "red.400",
                        style: {
                            height: "150px",
                            width: "150px"
                        }
                    }), c.jsx(fA, {
                        position: "absolute",
                        top: "25px",
                        left: "40px",
                        src: "/imgs/rcb-logo-new.png",
                        alt: "Logo",
                        mb: 4,
                        width: "70px"
                    })]
                })
            }), c.jsx(St, {
                children: "Please wait! "
            }), c.jsx(St, {
                children: "Your payment is being verifed. "
            })]
        })
    }),
    t[13] = r) : r = t[13],
    r
}
;
function So(t) {
    return new Promise(A => setTimeout(A, t))
}
const Go = t => {
    const A = X.c(26)
      , I = kA()
      , {clearCart: e} = Rc(fo)
      , {lastOrderId: s} = JA()
      , o = window.innerWidth;
    let N;
    A[0] !== e ? (N = () => {
        e()
    }
    ,
    A[0] = e,
    A[1] = N) : N = A[1];
    let i;
    A[2] === Symbol.for("react.memo_cache_sentinel") ? (i = [],
    A[2] = i) : i = A[2],
    P.useEffect(N, i),
    s || I("/");
    let D;
    A[3] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(we, {
        width: o,
        height: 750,
        recycle: !1
    }),
    A[3] = D) : D = A[3];
    let n, a;
    A[4] === Symbol.for("react.memo_cache_sentinel") ? (n = {
        base: 8,
        md: 10
    },
    a = {
        base: 10,
        md: 20
    },
    A[4] = n,
    A[5] = a) : (n = A[4],
    a = A[5]);
    let r;
    A[6] === Symbol.for("react.memo_cache_sentinel") ? (r = ["2rem", "4rem"],
    A[6] = r) : r = A[6];
    let R;
    A[7] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsxs(St, {
        fontWeight: 600,
        fontSize: r,
        lineHeight: "110%",
        color: "goldenrod",
        children: ["Thank you for shopping ", c.jsx("br", {}), "with us."]
    }),
    A[7] = R) : R = A[7];
    let p;
    A[8] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(DA, {
        children: c.jsxs("svg", {
            className: "checkmark",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 52 52",
            children: [c.jsx("circle", {
                className: "checkmark__circle",
                cx: "26",
                cy: "26",
                r: "25",
                fill: "none"
            }), c.jsx("path", {
                className: "checkmark__check",
                fill: "none",
                d: "M14.1 27.2l7.1 7.2 16.7-16.8"
            })]
        })
    }),
    A[8] = p) : p = A[8];
    let l;
    A[9] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx(M, {
        fontSize: "xl",
        color: "gray.500",
        children: "Your order has been completed successfully."
    }),
    A[9] = l) : l = A[9];
    let E;
    A[10] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx("br", {}),
    A[10] = E) : E = A[10];
    let G;
    A[11] !== s ? (G = c.jsxs(U, {
        spacing: 1,
        children: [l, c.jsxs(M, {
            fontSize: "2xl",
            children: ["Order No. :", E, " ", s]
        })]
    }),
    A[11] = s,
    A[12] = G) : G = A[12];
    let h;
    A[13] === Symbol.for("react.memo_cache_sentinel") ? (h = ["column", "row"],
    A[13] = h) : h = A[13];
    let m;
    A[14] === Symbol.for("react.memo_cache_sentinel") ? (m = c.jsx(Wc, {}),
    A[14] = m) : m = A[14];
    let x;
    A[15] !== I ? (x = c.jsx(_, {
        colorScheme: "red",
        leftIcon: m,
        rounded: "full",
        variant: "outline",
        px: 6,
        onClick: () => I("/"),
        children: "Shop More"
    }),
    A[15] = I,
    A[16] = x) : x = A[16];
    let L;
    A[17] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx(Ht, {}),
    A[17] = L) : L = A[17];
    let d;
    A[18] !== I ? (d = c.jsx(_, {
        leftIcon: L,
        colorScheme: "red",
        rounded: "full",
        px: 6,
        onClick: () => I("/rcbian/orders"),
        children: "Manage Order"
    }),
    A[18] = I,
    A[19] = d) : d = A[19];
    let H;
    A[20] !== x || A[21] !== d ? (H = c.jsxs(U, {
        direction: h,
        spacing: 30,
        align: "center",
        alignSelf: "center",
        position: "relative",
        children: [x, d]
    }),
    A[20] = x,
    A[21] = d,
    A[22] = H) : H = A[22];
    let f;
    return A[23] !== G || A[24] !== H ? (f = c.jsxs(c.Fragment, {
        children: [D, c.jsx(T, {
            w: "100%",
            children: c.jsxs(U, {
                as: T,
                textAlign: "center",
                spacing: n,
                py: a,
                children: [R, p, G, H]
            })
        })]
    }),
    A[23] = G,
    A[24] = H,
    A[25] = f) : f = A[25],
    f
}
;
function fo(t) {
    return t
}
const uo = () => {
    const t = X.c(17)
      , A = kA();
    let I, e;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (I = {
        base: 4,
        md: 6
    },
    e = {
        base: 10,
        md: 20
    },
    t[0] = I,
    t[1] = e) : (I = t[0],
    e = t[1]);
    let s;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (s = ["2rem", "3rem"],
    t[2] = s) : s = t[2];
    let o, N;
    t[3] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsxs(St, {
        fontWeight: 600,
        fontSize: s,
        lineHeight: "110%",
        color: "red.500",
        children: ["Sorry! your order", c.jsx("br", {}), " could not be confirmed!"]
    }),
    N = c.jsx(DA, {}),
    t[3] = o,
    t[4] = N) : (o = t[3],
    N = t[4]);
    let i;
    t[5] === Symbol.for("react.memo_cache_sentinel") ? (i = ["1.1rem", "1.4rem"],
    t[5] = i) : i = t[5];
    let D;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(U, {
        spacing: 1,
        children: c.jsxs(M, {
            color: "gray.700",
            fontSize: i,
            children: ["If your payment got deducted for above transaction,", c.jsx("br", {}), " the same shall be credited back to your account in 7 working days"]
        })
    }),
    t[6] = D) : D = t[6];
    let n;
    t[7] === Symbol.for("react.memo_cache_sentinel") ? (n = ["column", "row"],
    t[7] = n) : n = t[7];
    let a;
    t[8] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(Wc, {}),
    t[8] = a) : a = t[8];
    let r;
    t[9] !== A ? (r = c.jsx(_, {
        colorScheme: "red",
        leftIcon: a,
        rounded: "full",
        variant: "outline",
        px: 6,
        onClick: () => A("/checkout"),
        children: "Try Again"
    }),
    t[9] = A,
    t[10] = r) : r = t[10];
    let R;
    t[11] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx(Ht, {}),
    t[11] = R) : R = t[11];
    let p;
    t[12] !== A ? (p = c.jsx(_, {
        leftIcon: R,
        colorScheme: "red",
        rounded: "full",
        px: 6,
        onClick: () => A("/rcbian/orders"),
        children: "Manage Order"
    }),
    t[12] = A,
    t[13] = p) : p = t[13];
    let l;
    return t[14] !== p || t[15] !== r ? (l = c.jsx(T, {
        w: "100%",
        children: c.jsxs(U, {
            as: T,
            textAlign: "center",
            spacing: I,
            py: e,
            children: [o, N, D, c.jsxs(U, {
                direction: n,
                spacing: 30,
                align: "center",
                alignSelf: "center",
                position: "relative",
                mt: "5",
                children: [r, p]
            })]
        })
    }),
    t[14] = p,
    t[15] = r,
    t[16] = l) : l = t[16],
    l
}
  , xo = () => {
    const {session: t} = JA()
      , A = vA.get("rtokn");
    return ((t == null ? void 0 : t.pool) == null || (t == null ? void 0 : t.pool) == "" || (t == null ? void 0 : t.pool) == null || A == null || A == "" || A == null) && (window.location.href = "/auth?callbackUrl=/rcbian"),
    c.jsx(RI, {})
}
  , qI = {
    status: "Failed",
    message: "Error",
    result: {}
};
async function Oo(t) {
    try {
        return await (await cI.post("customer/verifymticket", t)).data
    } catch {
        return qI
    }
}
async function Po(t) {
    try {
        return await (await cI.get("customer/viewmticket/" + t)).data
    } catch {
        return qI
    }
}
const $I = () => {
    const t = X.c(25);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(SI, {
        children: c.jsx(VA, {
            size: "sm",
            fontSize: "1.62rem",
            icon: c.jsx(ne, {}),
            bg: "yellow.300",
            borderColor: "silver",
            color: "red.600"
        })
    }),
    t[0] = A) : A = t[0];
    let I, e;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (I = c.jsx(GI, {}),
    e = c.jsx(fI, {
        bg: "red",
        color: "white",
        borderRadius: "full"
    }),
    t[1] = I,
    t[2] = e) : (I = t[1],
    e = t[2]);
    let s, o;
    t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx("span", {
        style: {
            color: "red"
        },
        children: "BANNED ITEMS"
    }),
    o = c.jsx("br", {}),
    t[3] = s,
    t[4] = o) : (s = t[3],
    o = t[4]);
    let N;
    t[5] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsxs(uI, {
        color: "gray.600",
        fontWeight: "700",
        children: ["LIST OF ", s, o, "INSIDE ", c.jsx("span", {
            style: {
                color: "red"
            },
            children: "THE STADIUM!"
        })]
    }),
    t[5] = N) : N = t[5];
    let i;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Airpods / Earpods"]
    }),
    t[6] = i) : i = t[6];
    let D;
    t[7] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Any bottles"]
    }),
    t[7] = D) : D = t[7];
    let n;
    t[8] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Helmet"]
    }),
    t[8] = n) : n = t[8];
    let a;
    t[9] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Scissors"]
    }),
    t[9] = a) : a = t[9];
    let r;
    t[10] === Symbol.for("react.memo_cache_sentinel") ? (r = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Blade"]
    }),
    t[10] = r) : r = t[10];
    let R;
    t[11] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Weapons"]
    }),
    t[11] = R) : R = t[11];
    let p;
    t[12] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Eatables"]
    }),
    t[12] = p) : p = t[12];
    let l;
    t[13] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Liquor"]
    }),
    t[13] = l) : l = t[13];
    let E;
    t[14] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Any inflammable material (lighters, match box)"]
    }),
    t[14] = E) : E = t[14];
    let G;
    t[15] === Symbol.for("react.memo_cache_sentinel") ? (G = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Bags other than personal purse"]
    }),
    t[15] = G) : G = t[15];
    let h;
    t[16] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Toxic, illegal & hazardous substance."]
    }),
    t[16] = h) : h = t[16];
    let m;
    t[17] === Symbol.for("react.memo_cache_sentinel") ? (m = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Firecrackers"]
    }),
    t[17] = m) : m = t[17];
    let x;
    t[18] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Metal container"]
    }),
    t[18] = x) : x = t[18];
    let L;
    t[19] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Perfumes, Liquid Nail Polish and any other liquids"]
    }),
    t[19] = L) : L = t[19];
    let d;
    t[20] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Cameras, transistors & Laptops etc"]
    }),
    t[20] = d) : d = t[20];
    let H;
    t[21] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Cigarette & tobacco etc."]
    }),
    t[21] = H) : H = t[21];
    let f;
    t[22] === Symbol.for("react.memo_cache_sentinel") ? (f = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Vaping Devices and e-cigarettes"]
    }),
    t[22] = f) : f = t[22];
    let O;
    t[23] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Coins"]
    }),
    t[23] = O) : O = t[23];
    let g;
    return t[24] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsxs(xI, {
        children: [A, c.jsxs(OI, {
            w: "350px",
            borderRadius: "20px",
            children: [I, e, N, c.jsx(PI, {
                children: c.jsxs(gI, {
                    spacing: 0,
                    fontSize: ".9rem",
                    children: [i, D, n, a, r, R, p, l, E, G, h, m, x, L, d, H, f, O, c.jsxs(rA, {
                        children: [c.jsx(UA, {
                            as: MA,
                            color: "red.500"
                        }), "Any hard objects which can be easily thrown to playground /on players which can disturb the play."]
                    })]
                })
            })]
        })]
    }),
    t[24] = g) : g = t[24],
    g
}
  , ZI = t => {
    var k, NA, RA, EA, lA, dA, mA, xA;
    const A = X.c(59)
      , {orderNo: I} = t
      , e = WA()
      , s = P.useRef("");
    let o;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (o = {
        mutationFn: Oo
    },
    A[0] = o) : o = A[0];
    const N = hA(o)
      , [i,D] = it.useState(!1);
    let n;
    A[1] !== i ? (n = () => D(!i),
    A[1] = i,
    A[2] = n) : n = A[2];
    const a = n;
    let r;
    A[3] !== ((k = N.data) == null ? void 0 : k.message) || A[4] !== ((RA = (NA = N.data) == null ? void 0 : NA.result) == null ? void 0 : RA.token) || A[5] !== ((EA = N.data) == null ? void 0 : EA.status) || A[6] !== N.isSuccess || A[7] !== I || A[8] !== e ? (r = () => {
        var aA, LA, HA, SA;
        N.isSuccess == !0 && (((aA = N.data) == null ? void 0 : aA.status) == "Success" ? (vA.set("rono", I, {
            expires: 30
        }),
        vA.set("mobtokn", (HA = (LA = N.data) == null ? void 0 : LA.result) == null ? void 0 : HA.token, {
            expires: 30
        }),
        window.location.reload()) : e({
            title: ((SA = N.data) == null ? void 0 : SA.message) || "Wrong M-Ticket Password.",
            status: "error",
            duration: 5e3,
            isClosable: !0
        }))
    }
    ,
    A[3] = (lA = N.data) == null ? void 0 : lA.message,
    A[4] = (mA = (dA = N.data) == null ? void 0 : dA.result) == null ? void 0 : mA.token,
    A[5] = (xA = N.data) == null ? void 0 : xA.status,
    A[6] = N.isSuccess,
    A[7] = I,
    A[8] = e,
    A[9] = r) : r = A[9];
    let R;
    A[10] !== N.isSuccess ? (R = [N.isSuccess],
    A[10] = N.isSuccess,
    A[11] = R) : R = A[11],
    P.useEffect(r, R);
    let p;
    A[12] !== N || A[13] !== I || A[14] !== e ? (p = () => {
        const aA = s.current.value;
        if (aA && aA.length > 4) {
            const LA = {
                orderNo: I,
                password: aA
            };
            N.mutate(LA)
        } else
            e({
                title: "Access Denied.",
                description: "Invalid M-Ticket Password.",
                status: "error",
                duration: 2e3,
                isClosable: !0
            })
    }
    ,
    A[12] = N,
    A[13] = I,
    A[14] = e,
    A[15] = p) : p = A[15];
    const l = p;
    let E;
    A[16] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsxs(ic, {
        bg: "red.600",
        p: "1",
        display: "flex",
        children: [c.jsx(fA, {
            src: "/imgs/rcb-logo-new.png",
            boxSize: "30px",
            objectFit: "contain"
        }), c.jsx(M, {
            fontWeight: "700",
            color: "white",
            children: "M Ticket"
        }), c.jsx(nA, {}), c.jsx($I, {})]
    }),
    A[16] = E) : E = A[16];
    let G;
    A[17] === Symbol.for("react.memo_cache_sentinel") ? (G = c.jsx(M, {
        fontWeight: "700",
        fontSize: "1.15rem",
        color: "gray.700",
        children: "Enter M-Ticket Password"
    }),
    A[17] = G) : G = A[17];
    const h = i ? "text" : "password";
    let m;
    A[18] !== h ? (m = c.jsx(pA, {
        pr: "4.5rem",
        type: h,
        bg: "white",
        border: "2px solid navy",
        size: "lg",
        ref: s
    }),
    A[18] = h,
    A[19] = m) : m = A[19];
    const x = i ? "Hide" : "Show";
    let L;
    A[20] !== a || A[21] !== x ? (L = c.jsx(Pe, {
        width: "4.5rem",
        children: c.jsx(_, {
            h: "1.75rem",
            size: "sm",
            onClick: a,
            children: x
        })
    }),
    A[20] = a,
    A[21] = x,
    A[22] = L) : L = A[22];
    let d;
    A[23] !== L || A[24] !== m ? (d = c.jsxs(Kt, {
        size: "lg",
        children: [m, L]
    }),
    A[23] = L,
    A[24] = m,
    A[25] = d) : d = A[25];
    let H;
    A[26] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsx(le, {}),
    A[26] = H) : H = A[26];
    let f;
    A[27] !== l ? (f = () => l(),
    A[27] = l,
    A[28] = f) : f = A[28];
    let O;
    A[29] !== N.isLoading || A[30] !== f ? (O = c.jsx(DA, {
        children: c.jsx(_, {
            colorScheme: "blue",
            size: "lg",
            rightIcon: H,
            onClick: f,
            isLoading: N.isLoading,
            children: "SUBMIT"
        })
    }),
    A[29] = N.isLoading,
    A[30] = f,
    A[31] = O) : O = A[31];
    let g;
    A[32] !== d || A[33] !== O ? (g = c.jsxs(U, {
        w: "100%",
        maxW: "400px",
        mx: "auto",
        bg: "gray.100",
        p: "5",
        mt: "1",
        borderRadius: "5px",
        spacing: 5,
        children: [G, d, O]
    }),
    A[32] = d,
    A[33] = O,
    A[34] = g) : g = A[34];
    let K, j;
    A[35] === Symbol.for("react.memo_cache_sentinel") ? (K = c.jsx(T, {
        color: "red",
        fontWeight: "bold",
        textAlign: "center",
        children: "Screenshot/Photo of m-ticket is not valid for entry at the stadium. You will have to show the m-ticket by logging in to the rcb web app only."
    }),
    j = c.jsx(oA, {
        my: "3"
    }),
    A[35] = K,
    A[36] = j) : (K = A[35],
    j = A[36]);
    let y;
    A[37] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsx("span", {
        style: {
            color: "red"
        },
        children: "BANNED ITEMS"
    }),
    A[37] = y) : y = A[37];
    let u;
    A[38] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsxs(M, {
        color: "gray.600",
        fontWeight: "700",
        pb: "3",
        children: ["LIST OF ", y, " INSIDE", " ", c.jsx("span", {
            style: {
                color: "red"
            },
            children: "THE STADIUM!"
        })]
    }),
    A[38] = u) : u = A[38];
    let B;
    A[39] === Symbol.for("react.memo_cache_sentinel") ? (B = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Airpods / Earpods"]
    }),
    A[39] = B) : B = A[39];
    let S;
    A[40] === Symbol.for("react.memo_cache_sentinel") ? (S = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Any bottles"]
    }),
    A[40] = S) : S = A[40];
    let b;
    A[41] === Symbol.for("react.memo_cache_sentinel") ? (b = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Helmet"]
    }),
    A[41] = b) : b = A[41];
    let Y;
    A[42] === Symbol.for("react.memo_cache_sentinel") ? (Y = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Scissors"]
    }),
    A[42] = Y) : Y = A[42];
    let J;
    A[43] === Symbol.for("react.memo_cache_sentinel") ? (J = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Blade"]
    }),
    A[43] = J) : J = A[43];
    let q;
    A[44] === Symbol.for("react.memo_cache_sentinel") ? (q = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Weapons (other than police)"]
    }),
    A[44] = q) : q = A[44];
    let v;
    A[45] === Symbol.for("react.memo_cache_sentinel") ? (v = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Eatables"]
    }),
    A[45] = v) : v = A[45];
    let W;
    A[46] === Symbol.for("react.memo_cache_sentinel") ? (W = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Liquor"]
    }),
    A[46] = W) : W = A[46];
    let V;
    A[47] === Symbol.for("react.memo_cache_sentinel") ? (V = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Any inflammable material (lighters, match box)"]
    }),
    A[47] = V) : V = A[47];
    let $;
    A[48] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Bags other than personal purse"]
    }),
    A[48] = $) : $ = A[48];
    let eA;
    A[49] === Symbol.for("react.memo_cache_sentinel") ? (eA = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Toxic, illegal & hazardous substance."]
    }),
    A[49] = eA) : eA = A[49];
    let w;
    A[50] === Symbol.for("react.memo_cache_sentinel") ? (w = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Firecrackers"]
    }),
    A[50] = w) : w = A[50];
    let z;
    A[51] === Symbol.for("react.memo_cache_sentinel") ? (z = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Metal container"]
    }),
    A[51] = z) : z = A[51];
    let Z;
    A[52] === Symbol.for("react.memo_cache_sentinel") ? (Z = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Perfumes, Liquid Nail Polish and any other liquids"]
    }),
    A[52] = Z) : Z = A[52];
    let AA;
    A[53] === Symbol.for("react.memo_cache_sentinel") ? (AA = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Cameras, transistors & Laptops etc"]
    }),
    A[53] = AA) : AA = A[53];
    let cA;
    A[54] === Symbol.for("react.memo_cache_sentinel") ? (cA = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Cigarette & tobacco etc."]
    }),
    A[54] = cA) : cA = A[54];
    let Q;
    A[55] === Symbol.for("react.memo_cache_sentinel") ? (Q = c.jsxs(rA, {
        children: [c.jsx(UA, {
            as: MA,
            color: "red.500"
        }), "Coins"]
    }),
    A[55] = Q) : Q = A[55];
    let F;
    A[56] === Symbol.for("react.memo_cache_sentinel") ? (F = c.jsxs(T, {
        w: "100%",
        maxW: "400px",
        mx: "auto",
        bg: "gray.100",
        p: "5",
        mt: "1",
        borderRadius: "5px",
        children: [K, j, u, c.jsxs(gI, {
            spacing: 0,
            fontSize: ".8rem",
            fontWeight: "600",
            children: [B, S, b, Y, J, q, v, W, V, $, eA, w, z, Z, AA, cA, Q, c.jsxs(rA, {
                children: [c.jsx(UA, {
                    as: MA,
                    color: "red.500"
                }), "Any hard objects which can be easily thrown to playground /on players which can disturb the play."]
            })]
        })]
    }),
    A[56] = F) : F = A[56];
    let C;
    return A[57] !== g ? (C = c.jsx(_c, {
        isOpen: !0,
        size: "full",
        closeOnEsc: !1,
        closeOnOverlayClick: !1,
        motionPreset: "slideInBottom",
        scrollBehavior: "inside",
        children: c.jsxs(Jc, {
            p: 0,
            children: [E, c.jsxs(zA, {
                p: "1",
                bg: "white",
                children: [g, F]
            })]
        })
    }),
    A[57] = g,
    A[58] = C) : C = A[58],
    C
}
  , go = t => {
    var j, y, u, B, S, b, Y, J, q, v, W, V, $, eA;
    const A = X.c(29)
      , {orderNo: I} = t;
    let e;
    A[0] !== I ? (e = {
        queryKey: [I],
        queryFn: () => {
            const w = vA.get("rono");
            return I && I.length > 16 && w === I ? Po(I) : null
        }
    },
    A[0] = I,
    A[1] = e) : e = A[1];
    const {data: s, isPending: o} = Gc(e)
      , N = P.useRef(null)
      , i = P.useRef(null);
    let D;
    A[2] === Symbol.for("react.memo_cache_sentinel") ? (D = {
        clickable: !0,
        renderBullet: bo
    },
    A[2] = D) : D = A[2];
    const n = D;
    let a;
    A[3] === Symbol.for("react.memo_cache_sentinel") ? (a = w => {
        N.current.scrollTo({
            top: w == "t" ? 0 : i.current.offsetTop,
            behavior: "smooth"
        })
    }
    ,
    A[3] = a) : a = A[3];
    const r = a;
    if (o) {
        let w;
        return A[4] === Symbol.for("react.memo_cache_sentinel") ? (w = c.jsx(At, {}),
        A[4] = w) : w = A[4],
        w
    }
    if (!((j = s == null ? void 0 : s.result) != null && j.tickets)) {
        let w;
        return A[5] !== I ? (w = c.jsx(ZI, {
            orderNo: I
        }),
        A[5] = I,
        A[6] = w) : w = A[6],
        w
    }
    let R, p, l;
    A[7] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx(fA, {
        src: "/imgs/rcb-logo-new.png",
        boxSize: "30px",
        objectFit: "contain"
    }),
    p = c.jsx(M, {
        fontWeight: "700",
        color: "white",
        children: "M Ticket"
    }),
    l = c.jsx(nA, {}),
    A[7] = R,
    A[8] = p,
    A[9] = l) : (R = A[7],
    p = A[8],
    l = A[9]);
    let E;
    A[10] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(VA, {
        size: "sm",
        fontSize: "1.62rem",
        icon: c.jsx(ae, {}),
        bg: "yellow.300",
        borderColor: "silver",
        color: "red.600",
        onClick: Bo
    }),
    A[10] = E) : E = A[10];
    let G, h;
    A[11] === Symbol.for("react.memo_cache_sentinel") ? (G = c.jsx(Te, {
        fontSize: "1.5rem"
    }),
    h = () => r("t"),
    A[11] = G,
    A[12] = h) : (G = A[11],
    h = A[12]);
    const m = (u = (y = s == null ? void 0 : s.result) == null ? void 0 : y.tickets) == null ? void 0 : u.length;
    let x;
    A[13] !== m ? (x = c.jsx(_, {
        size: "sm",
        variant: "outline",
        colorScheme: "red",
        rightIcon: G,
        onClick: h,
        fontSize: "1.1rem",
        p: "1",
        bg: "white",
        borderColor: "silver",
        children: m
    }),
    A[13] = m,
    A[14] = x) : x = A[14];
    let L;
    A[15] !== ((B = s == null ? void 0 : s.result) == null ? void 0 : B.addons) ? (L = ((b = (S = s == null ? void 0 : s.result) == null ? void 0 : S.addons) == null ? void 0 : b.length) > 0 && c.jsx(Co, {
        alist: (Y = s == null ? void 0 : s.result) == null ? void 0 : Y.addons
    }),
    A[15] = (J = s == null ? void 0 : s.result) == null ? void 0 : J.addons,
    A[16] = L) : L = A[16];
    let d;
    A[17] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsx($I, {}),
    A[17] = d) : d = A[17];
    let H;
    A[18] !== x || A[19] !== L ? (H = c.jsxs(TA, {
        bg: "red.600",
        p: "1",
        display: "flex",
        children: [R, p, l, c.jsxs(TA, {
            children: [E, x, L, d]
        })]
    }),
    A[18] = x,
    A[19] = L,
    A[20] = H) : H = A[20];
    let f;
    A[21] === Symbol.for("react.memo_cache_sentinel") ? (f = [Ve],
    A[21] = f) : f = A[21];
    let O;
    A[22] !== ((q = s == null ? void 0 : s.result) == null ? void 0 : q.tickets) ? (O = ((W = (v = s == null ? void 0 : s.result) == null ? void 0 : v.tickets) == null ? void 0 : W.length) > 0 && (($ = (V = s == null ? void 0 : s.result) == null ? void 0 : V.tickets) == null ? void 0 : $.map(Yo)),
    A[22] = (eA = s == null ? void 0 : s.result) == null ? void 0 : eA.tickets,
    A[23] = O) : O = A[23];
    let g;
    A[24] !== O ? (g = c.jsx(T, {
        p: "0",
        pb: "40px",
        bg: "gray.100",
        ref: N,
        children: c.jsx(ve, {
            pagination: n,
            modules: f,
            spaceBetween: 30,
            children: O
        })
    }),
    A[24] = O,
    A[25] = g) : g = A[25];
    let K;
    return A[26] !== H || A[27] !== g ? (K = c.jsxs(T, {
        w: "100%",
        h: "100vh",
        position: "relative",
        children: [H, g]
    }),
    A[26] = H,
    A[27] = g,
    A[28] = K) : K = A[28],
    K
}
  , jo = t => {
    const A = X.c(81)
      , {tkt: I} = t;
    let e;
    A[0] !== (I == null ? void 0 : I.gateNo) ? (e = () => (I == null ? void 0 : I.gateNo) == "6" ? "red.600" : (I == null ? void 0 : I.gateNo) == "20" ? "blue.600" : (I == null ? void 0 : I.gateNo) == "2" ? "green.600" : (I == null ? void 0 : I.gateNo) == "2A" ? "purple.600" : (I == null ? void 0 : I.gateNo) == "3" ? "orange.600" : (I == null ? void 0 : I.gateNo) == "14" ? "pink.600" : "black",
    A[0] = I == null ? void 0 : I.gateNo,
    A[1] = e) : e = A[1];
    const s = e
      , o = (I == null ? void 0 : I.scanStatus) == "N" ? "green.100" : "#ffffff"
      , N = (I == null ? void 0 : I.eventName) == "RCB UNBOX" ? "https://tg3.s3.ap-south-1.amazonaws.com/revents/M-Ticket/Unbox-BG.jpg" : "url(https://tg3.s3.ap-south-1.amazonaws.com/revents/M-Ticket/M-Ticket-BG.png)";
    let i;
    A[2] !== (I == null ? void 0 : I.barcode) || A[3] !== (I == null ? void 0 : I.scanStatus) ? (i = (I == null ? void 0 : I.scanStatus) == "N" ? c.jsx(DA, {
        children: c.jsx(T, {
            className: "qr-bg",
            children: c.jsx(_e, {
                value: I == null ? void 0 : I.barcode,
                bgColor: (I == null ? void 0 : I.scanStatus) == "N" ? "#c6f6d5" : "#f6f6f6",
                fgColor: "navy",
                size: 150
            })
        })
    }) : (I == null ? void 0 : I.scanStatus) == "Y" ? c.jsx(DA, {
        children: c.jsx(fA, {
            src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/M-Ticket/m-scanned.png",
            alt: "",
            w: "300px",
            objectFit: "contain"
        })
    }) : c.jsx(DA, {
        children: c.jsx(fA, {
            src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/M-Ticket/m-before-game.webp",
            alt: "",
            w: "300px",
            objectFit: "contain"
        })
    }),
    A[2] = I == null ? void 0 : I.barcode,
    A[3] = I == null ? void 0 : I.scanStatus,
    A[4] = i) : i = A[4];
    let D;
    A[5] !== (I == null ? void 0 : I.scanDate) || A[6] !== (I == null ? void 0 : I.scanStatus) ? (D = (I == null ? void 0 : I.scanStatus) == "Y" && c.jsxs(DA, {
        fontSize: ".8rem",
        color: "red.500",
        fontWeight: "700",
        children: ["SCANNED AT : ", I == null ? void 0 : I.scanDate]
    }),
    A[5] = I == null ? void 0 : I.scanDate,
    A[6] = I == null ? void 0 : I.scanStatus,
    A[7] = D) : D = A[7];
    let n;
    A[8] !== (I == null ? void 0 : I.basePrice) || A[9] !== (I == null ? void 0 : I.cgst) || A[10] !== (I == null ? void 0 : I.eventName) || A[11] !== (I == null ? void 0 : I.price) || A[12] !== (I == null ? void 0 : I.serialNo) || A[13] !== (I == null ? void 0 : I.team2) || A[14] !== (I == null ? void 0 : I.team2Logo) ? (n = (I == null ? void 0 : I.eventName) == "RCB UNBOX" ? c.jsxs(U, {
        direction: "row",
        mt: "3",
        position: "relative",
        children: [c.jsxs(U, {
            spacing: "0",
            fontWeight: "700",
            textAlign: "right",
            position: "absolute",
            left: "2px",
            top: "2px",
            children: [c.jsxs(M, {
                lineHeight: "1rem",
                children: ["Sl No. ", I == null ? void 0 : I.serialNo]
            }), c.jsx(M, {
                color: "red.600",
                children: "ADMIT ONE"
            })]
        }), c.jsx(DA, {
            w: "100%",
            textAlign: "center",
            children: c.jsx(fA, {
                src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/M-Ticket/unbox-2025-logo.png",
                alt: "RCB",
                h: "400px"
            })
        }), c.jsx(T, {
            position: "absolute",
            right: "2px",
            top: "2px",
            children: c.jsxs(U, {
                spacing: "0",
                textAlign: "right",
                children: [c.jsx(M, {
                    fontSize: "1rem",
                    lineHeight: "1rem",
                    children: "Ticket Price"
                }), c.jsxs(M, {
                    fontSize: "1.4rem",
                    lineHeight: "1.5rem",
                    fontWeight: "700",
                    children: ["₹ ", I == null ? void 0 : I.price]
                }), c.jsxs(M, {
                    fontSize: ".8rem",
                    lineHeight: ".8rem",
                    children: ["Base Price : ₹ ", I == null ? void 0 : I.basePrice]
                }), c.jsxs(M, {
                    fontSize: ".8rem",
                    lineHeight: ".8rem",
                    children: ["SGST : ₹ ", I == null ? void 0 : I.cgst]
                }), c.jsxs(M, {
                    fontSize: ".8rem",
                    lineHeight: ".8rem",
                    children: ["CGST : ₹ ", I == null ? void 0 : I.cgst]
                })]
            })
        })]
    }) : c.jsxs(c.Fragment, {
        children: [c.jsxs(U, {
            direction: "row",
            children: [c.jsxs(U, {
                spacing: "0",
                fontWeight: "700",
                children: [c.jsx(fA, {
                    src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/M-Ticket/IPL-Logo.png",
                    alt: "IPL",
                    objectFit: "contain",
                    boxSize: "80px"
                }), c.jsxs(M, {
                    lineHeight: "1rem",
                    children: ["Sl No. ", I == null ? void 0 : I.serialNo]
                }), c.jsx(M, {
                    color: "red.600",
                    children: "ADMIT ONE"
                })]
            }), c.jsx(nA, {}), c.jsx(T, {
                pt: "3",
                children: c.jsxs(U, {
                    spacing: "0",
                    textAlign: "right",
                    children: [c.jsx(M, {
                        fontSize: "1rem",
                        lineHeight: "1rem",
                        children: "Ticket Price"
                    }), c.jsxs(M, {
                        fontSize: "1.4rem",
                        lineHeight: "1.5rem",
                        fontWeight: "700",
                        children: ["₹ ", I == null ? void 0 : I.price]
                    }), c.jsxs(M, {
                        fontSize: ".8rem",
                        lineHeight: ".8rem",
                        children: ["Base Price : ₹ ", I == null ? void 0 : I.basePrice]
                    }), c.jsxs(M, {
                        fontSize: ".8rem",
                        lineHeight: ".8rem",
                        children: ["SGST : ₹ ", I == null ? void 0 : I.cgst]
                    }), c.jsxs(M, {
                        fontSize: ".8rem",
                        lineHeight: ".8rem",
                        children: ["CGST : ₹ ", I == null ? void 0 : I.cgst]
                    })]
                })
            })]
        }), c.jsxs(U, {
            direction: "row",
            mt: "4",
            children: [c.jsx(DA, {
                w: "100%",
                textAlign: "center",
                children: c.jsx(fA, {
                    src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/M-Ticket/RCB.png",
                    alt: "RCB",
                    objectFit: "contain",
                    boxSize: "80px"
                })
            }), c.jsx(T, {
                w: "80px",
                textAlign: "center"
            }), c.jsx(DA, {
                w: "100%",
                textAlign: "center",
                children: c.jsx(fA, {
                    src: `https://tg3.s3.ap-south-1.amazonaws.com/revents/M-Ticket/${I == null ? void 0 : I.team2Logo}`,
                    alt: "Away Team",
                    objectFit: "contain",
                    boxSize: "80px"
                })
            })]
        }), c.jsxs(U, {
            direction: "row",
            fontSize: ".9rem",
            fontWeight: "700",
            lineHeight: ".9rem",
            mt: "2",
            children: [c.jsx(T, {
                w: "100%",
                textAlign: "center",
                children: "ROYAL CHALLENGERS BENGALURU"
            }), c.jsx(T, {
                w: "80px",
                textAlign: "center",
                children: "VS"
            }), c.jsx(T, {
                w: "100%",
                textAlign: "center",
                textTransform: "uppercase",
                children: I == null ? void 0 : I.team2
            })]
        })]
    }),
    A[8] = I == null ? void 0 : I.basePrice,
    A[9] = I == null ? void 0 : I.cgst,
    A[10] = I == null ? void 0 : I.eventName,
    A[11] = I == null ? void 0 : I.price,
    A[12] = I == null ? void 0 : I.serialNo,
    A[13] = I == null ? void 0 : I.team2,
    A[14] = I == null ? void 0 : I.team2Logo,
    A[15] = n) : n = A[15];
    let a;
    A[16] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(M, {
        textAlign: "center",
        children: "GSTIN : 29AAECT6450G1Z5"
    }),
    A[16] = a) : a = A[16];
    const r = I == null ? void 0 : I.matchNo;
    let R;
    A[17] !== r ? (R = c.jsx(M, {
        textAlign: "center",
        children: r
    }),
    A[17] = r,
    A[18] = R) : R = A[18];
    const p = I == null ? void 0 : I.eventDisplayDate;
    let l;
    A[19] !== p ? (l = c.jsx(M, {
        textAlign: "center",
        fontSize: "1.4rem",
        fontWeight: "700",
        children: p
    }),
    A[19] = p,
    A[20] = l) : l = A[20];
    let E;
    A[21] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(M, {
        textAlign: "center",
        fontSize: "1.1rem",
        children: "M. CHINNASWAMY STADIUM"
    }),
    A[21] = E) : E = A[21];
    const G = s()
      , h = I == null ? void 0 : I.standName;
    let m;
    A[22] !== G || A[23] !== h ? (m = c.jsx(M, {
        textAlign: "center",
        fontSize: "1.2rem",
        fontWeight: "700",
        fontFamily: "rcbFontB",
        color: G,
        children: h
    }),
    A[22] = G,
    A[23] = h,
    A[24] = m) : m = A[24];
    let x;
    A[25] !== l || A[26] !== m || A[27] !== R ? (x = c.jsxs(U, {
        spacing: "0",
        fontWeight: "600",
        mt: "5",
        children: [a, R, l, E, m]
    }),
    A[25] = l,
    A[26] = m,
    A[27] = R,
    A[28] = x) : x = A[28];
    let L;
    A[29] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsx(M, {
        children: "Entry From : "
    }),
    A[29] = L) : L = A[29];
    const d = s()
      , H = I == null ? void 0 : I.entryFrom;
    let f;
    A[30] !== d || A[31] !== H ? (f = c.jsxs(TA, {
        w: "100%",
        fontWeight: "600",
        mt: "3",
        children: [L, c.jsx(M, {
            fontSize: "1.2rem",
            fontWeight: "700",
            fontFamily: "rcbFontB",
            color: d,
            children: H
        })]
    }),
    A[30] = d,
    A[31] = H,
    A[32] = f) : f = A[32];
    let O;
    A[33] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsx(M, {
        children: "GATE NO."
    }),
    A[33] = O) : O = A[33];
    const g = s()
      , K = I == null ? void 0 : I.gateNo;
    let j;
    A[34] !== g || A[35] !== K ? (j = c.jsxs(T, {
        w: "100%",
        children: [O, c.jsx(M, {
            fontSize: "1.6rem",
            fontWeight: "700",
            fontFamily: "rcbFontB",
            color: g,
            children: K
        })]
    }),
    A[34] = g,
    A[35] = K,
    A[36] = j) : j = A[36];
    const y = (I == null ? void 0 : I.box) == 0 ? "ROW" : "BOX/ROW";
    let u;
    A[37] !== y ? (u = c.jsx(M, {
        children: y
    }),
    A[37] = y,
    A[38] = u) : u = A[38];
    const B = s()
      , S = (I == null ? void 0 : I.box) == 0 ? `${I == null ? void 0 : I.row}` : `${I == null ? void 0 : I.box} / ${I == null ? void 0 : I.row}`;
    let b;
    A[39] !== B || A[40] !== S ? (b = c.jsx(M, {
        fontSize: "1.6rem",
        fontWeight: "700",
        fontFamily: "rcbFontB",
        color: B,
        children: S
    }),
    A[39] = B,
    A[40] = S,
    A[41] = b) : b = A[41];
    let Y;
    A[42] !== u || A[43] !== b ? (Y = c.jsxs(T, {
        w: "100%",
        children: [u, b]
    }),
    A[42] = u,
    A[43] = b,
    A[44] = Y) : Y = A[44];
    let J;
    A[45] === Symbol.for("react.memo_cache_sentinel") ? (J = c.jsx(M, {
        children: "SEAT NO."
    }),
    A[45] = J) : J = A[45];
    let q;
    A[46] !== s || A[47] !== (I == null ? void 0 : I.row) || A[48] !== (I == null ? void 0 : I.seatNo) ? (q = c.jsxs(T, {
        w: "100%",
        children: [J, "--,-,.".includes(I == null ? void 0 : I.row) ? c.jsx(M, {
            fontSize: "1.3rem",
            lineHeight: "2.3rem",
            fontWeight: "700",
            children: "FREE SEATED"
        }) : c.jsx(M, {
            fontSize: "1.6rem",
            fontWeight: "700",
            fontFamily: "rcbFontB",
            color: s(),
            children: I == null ? void 0 : I.seatNo
        })]
    }),
    A[46] = s,
    A[47] = I == null ? void 0 : I.row,
    A[48] = I == null ? void 0 : I.seatNo,
    A[49] = q) : q = A[49];
    let v;
    A[50] !== j || A[51] !== Y || A[52] !== q ? (v = c.jsxs(TA, {
        w: "100%",
        fontWeight: "600",
        mt: "3",
        textAlign: "center",
        children: [j, Y, q]
    }),
    A[50] = j,
    A[51] = Y,
    A[52] = q,
    A[53] = v) : v = A[53];
    let W;
    A[54] === Symbol.for("react.memo_cache_sentinel") ? (W = c.jsx(M, {
        color: "red",
        children: "* Re-Entry is not allowed."
    }),
    A[54] = W) : W = A[54];
    let V;
    A[55] !== (I == null ? void 0 : I.eventName) ? (V = (I == null ? void 0 : I.eventName) == "RCB UNBOX" ? c.jsx(M, {
        children: "* Gates open 1 hour prior to the event."
    }) : c.jsx(M, {
        children: "* Gates open 2 and half hours prior to the game."
    }),
    A[55] = I == null ? void 0 : I.eventName,
    A[56] = V) : V = A[56];
    let $, eA;
    A[57] === Symbol.for("react.memo_cache_sentinel") ? ($ = c.jsx(M, {
        children: "* Children above the age of 2 years must possess a valid ticket."
    }),
    eA = c.jsx(M, {
        fontSize: ".8rem",
        lineHeight: ".8rem",
        textAlign: "justify",
        pt: "2",
        children: "The organiser is not responsible for the misuse of this booking confirmation voucher (M-Ticket) Any liability arising out of the misuse of this (M-Ticket) booking confirmation will be the sole responsibility of the purchaser."
    }),
    A[57] = $,
    A[58] = eA) : ($ = A[57],
    eA = A[58]);
    let w;
    A[59] !== V ? (w = c.jsxs(U, {
        w: "100%",
        spacing: 0,
        fontWeight: "500",
        mt: "3",
        fontSize: ".85rem",
        children: [W, V, $, eA]
    }),
    A[59] = V,
    A[60] = w) : w = A[60];
    let z;
    A[61] === Symbol.for("react.memo_cache_sentinel") ? (z = c.jsx(oA, {
        my: "2"
    }),
    A[61] = z) : z = A[61];
    const Z = I == null ? void 0 : I.name;
    let AA;
    A[62] !== Z ? (AA = c.jsx(T, {
        children: Z
    }),
    A[62] = Z,
    A[63] = AA) : AA = A[63];
    let cA;
    A[64] === Symbol.for("react.memo_cache_sentinel") ? (cA = c.jsx(T, {
        px: "10px",
        children: " | "
    }),
    A[64] = cA) : cA = A[64];
    const Q = I == null ? void 0 : I.orderNo;
    let F;
    A[65] !== Q ? (F = c.jsx(T, {
        children: Q
    }),
    A[65] = Q,
    A[66] = F) : F = A[66];
    let C;
    A[67] !== AA || A[68] !== F ? (C = c.jsxs(DA, {
        fontSize: "1rem",
        fontWeight: "bold",
        children: [AA, cA, F]
    }),
    A[67] = AA,
    A[68] = F,
    A[69] = C) : C = A[69];
    let k;
    return A[70] !== x || A[71] !== o || A[72] !== f || A[73] !== N || A[74] !== v || A[75] !== w || A[76] !== i || A[77] !== C || A[78] !== D || A[79] !== n ? (k = c.jsxs(T, {
        bg: o,
        maxW: "400px",
        w: "100%",
        mx: "auto",
        p: "1",
        minH: "93dvh",
        borderRadius: "5px",
        mt: "1px",
        px: "3",
        backgroundImage: N,
        border: "1px solid #d1d1d1",
        backgroundSize: "100% auto",
        children: [i, D, n, x, f, v, w, z, C]
    }),
    A[70] = x,
    A[71] = o,
    A[72] = f,
    A[73] = N,
    A[74] = v,
    A[75] = w,
    A[76] = i,
    A[77] = C,
    A[78] = D,
    A[79] = n,
    A[80] = k) : k = A[80],
    k
}
  , Co = t => {
    const A = X.c(11)
      , {alist: I} = t;
    let e;
    A[0] === Symbol.for("react.memo_cache_sentinel") ? (e = c.jsx(xt, {
        fontSize: "1.5rem"
    }),
    A[0] = e) : e = A[0];
    const s = I == null ? void 0 : I.length;
    let o;
    A[1] !== s ? (o = c.jsx(SI, {
        children: c.jsx(_, {
            size: "sm",
            variant: "outline",
            colorScheme: "red",
            rightIcon: e,
            fontSize: "1.1rem",
            p: "1",
            bg: "yellow.300",
            borderColor: "silver",
            children: s
        })
    }),
    A[1] = s,
    A[2] = o) : o = A[2];
    let N, i;
    A[3] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx(GI, {
        bg: "red.500"
    }),
    i = c.jsx(fI, {
        bg: "white",
        color: "red",
        borderRadius: "full"
    }),
    A[3] = N,
    A[4] = i) : (N = A[3],
    i = A[4]);
    let D;
    A[5] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(uI, {
        color: "gray.200",
        fontWeight: "700",
        children: c.jsx(M, {
            fontWeight: "700",
            textAlign: "center",
            color: "gray.200",
            children: "PRE-BOOKED ADDON'S"
        })
    }),
    A[5] = D) : D = A[5];
    let n;
    A[6] !== I ? (n = c.jsxs(OI, {
        w: "350px",
        bg: "red.500",
        borderRadius: "20px",
        children: [N, i, D, c.jsx(PI, {
            bg: "transparent",
            children: c.jsx(yo, {
                alist: I
            })
        })]
    }),
    A[6] = I,
    A[7] = n) : n = A[7];
    let a;
    return A[8] !== o || A[9] !== n ? (a = c.jsxs(xI, {
        children: [o, n]
    }),
    A[8] = o,
    A[9] = n,
    A[10] = a) : a = A[10],
    a
}
  , yo = t => {
    const A = X.c(7)
      , {alist: I} = t;
    let e;
    A[0] !== I ? (e = I && I.map(wo),
    A[0] = I,
    A[1] = e) : e = A[1];
    let s;
    A[2] !== e ? (s = c.jsx(U, {
        w: "100%",
        mt: "1",
        spacing: "2",
        children: e
    }),
    A[2] = e,
    A[3] = s) : s = A[3];
    let o;
    A[4] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(M, {
        fontSize: ".9rem",
        lineHeight: "1rem",
        textAlign: "justify",
        mt: "3",
        pt: "2",
        color: "white",
        children: "Need to pick-up addons from ITC Master Chef Food Counter located on your stand, (Timing - 7:30PM Onwards)."
    }),
    A[4] = o) : o = A[4];
    let N;
    return A[5] !== s ? (N = c.jsxs(T, {
        bg: "red.500",
        maxW: "400px",
        w: "100%",
        children: [s, o]
    }),
    A[5] = s,
    A[6] = N) : N = A[6],
    N
}
;
function bo(t, A) {
    return '<span class="' + A + '">' + (t + 1) + "</span>"
}
function Bo() {
    return window.location.reload()
}
function Yo(t, A) {
    return c.jsx(Je, {
        children: c.jsx(jo, {
            tkt: t
        })
    }, A)
}
function wo(t, A) {
    return c.jsxs(U, {
        fontWeight: "700",
        p: "2",
        py: "1",
        borderRadius: "5px",
        bg: "white",
        spacing: 0,
        fontSize: "1rem",
        children: [c.jsx(T, {
            children: t == null ? void 0 : t.itemName
        }), c.jsxs(T, {
            children: ["QTY : ", t == null ? void 0 : t.qty]
        })]
    }, A)
}
const _o = () => {
    const t = X.c(2);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsxs(ic, {
        bg: "red.600",
        p: "1",
        display: "flex",
        children: [c.jsx(fA, {
            src: "/imgs/rcb-logo-new.png",
            boxSize: "30px",
            objectFit: "contain"
        }), c.jsx(M, {
            fontWeight: "700",
            color: "white",
            children: "M Ticket"
        }), c.jsx(nA, {})]
    }),
    t[0] = A) : A = t[0];
    let I;
    return t[1] === Symbol.for("react.memo_cache_sentinel") ? (I = c.jsx(_c, {
        isOpen: !0,
        size: "full",
        closeOnEsc: !1,
        closeOnOverlayClick: !1,
        motionPreset: "slideInBottom",
        scrollBehavior: "inside",
        children: c.jsxs(Jc, {
            p: 0,
            children: [A, c.jsx(zA, {
                p: "1",
                bg: "white",
                children: c.jsx(U, {
                    w: "100%",
                    maxW: "400px",
                    mx: "auto",
                    bg: "gray.100",
                    p: "5",
                    mt: "1",
                    borderRadius: "5px",
                    spacing: 5,
                    children: c.jsx(M, {
                        fontWeight: "700",
                        textAlign: "center",
                        fontSize: "1.15rem",
                        color: "gray.700",
                        children: "THERE IS NO UPCOMING MATCH TICKETS."
                    })
                })
            })]
        })
    }),
    t[1] = I) : I = t[1],
    I
}
  , Jo = () => {
    const t = X.c(5)
      , {orderNo: A} = ft()
      , I = vA.get("rono");
    if (A.length < 16) {
        let e;
        return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = c.jsx(_o, {}),
        t[0] = e) : e = t[0],
        e
    } else if (I === A) {
        let e;
        return t[1] !== A ? (e = c.jsx(go, {
            orderNo: A
        }),
        t[1] = A,
        t[2] = e) : e = t[2],
        e
    } else {
        let e;
        return t[3] !== A ? (e = c.jsx(ZI, {
            orderNo: A
        }),
        t[3] = A,
        t[4] = e) : e = t[4],
        e
    }
}
  , Vo = () => {
    const t = X.c(59);
    let A, I;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsxs(T, {
        textAlign: "center",
        fontSize: "1.2rem",
        fontFamily: "rcbFontB",
        children: [c.jsxs(T, {
            as: "span",
            color: "red.500",
            children: [" ", "TATA IPL TICKET"]
        }), " ", "TERMS AND CONDITIONS"]
    }),
    I = c.jsx(oA, {
        mt: "2"
    }),
    t[0] = A,
    t[1] = I) : (A = t[0],
    I = t[1]);
    let e;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = c.jsx("b", {
        children: "(“Holder”)"
    }),
    t[2] = e) : e = t[2];
    let s;
    t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx("b", {
        children: "“Stadium”"
    }),
    t[3] = s) : s = t[3];
    let o;
    t[4] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx("b", {
        children: "“Match”"
    }),
    t[4] = o) : o = t[4];
    let N, i, D, n, a;
    t[5] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsxs("li", {
        children: ["This ticket entitles the holder ", e, " to attend the stadium in respect of the match or matches (if there is more than one match scheduled in the stadium on the same day), details of which are referred to on the ticket (", s, ",", o, " ", "and ", c.jsx("b", {
            children: "“Matches”"
        }), " respectively)."]
    }),
    i = c.jsx("li", {
        children: "This ticket must be produced by the Holder at the time of entry into the Stadium. The entry gates will open approximately 3 (three) hours before the start of the Match or such other time as may be advised / published in respect of the Match, by the BCCI."
    }),
    D = c.jsx("li", {
        children: "Entry will be refused if the barcode has been tampered with or if this ticket has been torn, defaced, damaged or tampered with in any way."
    }),
    n = c.jsx("li", {
        children: "This ticket is valid for one person only and no re-entry will be allowed. If re-entry in any particular Stadium is allowed for any particular Match, then such re-entry will be conditional on and subject to the Holder complying with all relevant re-entry procedures including without limitation, production of this ticket, and any re-entry ticket, out-pass or other proof of prior exit as may be required at the Stadium and the Holder shall remain bound by these terms and conditions and any other Stadium regulations."
    }),
    a = c.jsx("li", {
        children: "The ticket only entitles the Holder to access the area of the Stadium in which the relevant seat is located and no other area of the Stadium."
    }),
    t[5] = N,
    t[6] = i,
    t[7] = D,
    t[8] = n,
    t[9] = a) : (N = t[5],
    i = t[6],
    D = t[7],
    n = t[8],
    a = t[9]);
    let r, R, p, l, E, G, h, m, x;
    t[10] === Symbol.for("react.memo_cache_sentinel") ? (r = c.jsxs("li", {
        children: ["The Holder must retain this ticket at all times whilst in the Stadium. This ticket should be produced whenever demanded by the organiser of the Match ", c.jsx("b", {
            children: "(“Organiser”)"
        }), " and the Organiser's representatives."]
    }),
    R = c.jsx("li", {
        children: "The Organiser reserves the right to search / frisk the Holder (including his/her bags, clothes or other possessions) at any time for security reasons including prior to entry (or any permitted re-entry) to the Stadium. Should the Holder refuse to be searched, the Organiser reserves the right to refuse admission or eject him/her from the Stadium without refund. The Holder must comply with any reasonable instruction from an officer or security officer of the Organiser at the Stadium."
    }),
    p = c.jsx("li", {
        children: "No item including without limitation banners or flags etc, displaying commercial logos which, in the Organiser's view, may conflict with or in any way detract from the rights of any official sponsor related to the Match, will be allowed into the Stadium."
    }),
    l = c.jsx("li", {
        children: "Bottles, lighters, tins or cans, musical instruments, flammable, toxic, illegal or hazardous substances, metal containers, firecrackers, fireworks, weapons, motorcycle helmets, bags or any other article (determined at the discretion of the Organiser) which might endanger or unduly annoy any other person are not allowed inside the Stadium."
    }),
    E = c.jsx("li", {
        children: "No food may be brought into the Stadium. No alcohol may be brought into or taken out of the Stadium. The consumption of alcohol may be permitted only in any authorised designated areas or places in the Stadium (if any) during hours determined by the Organiser, which the Organiser reserves the right to close or restrict entry to any such authorised designated areas at any time."
    }),
    G = c.jsx("li", {
        children: " No smoking is allowed within the Stadium."
    }),
    h = c.jsx("li", {
        children: "The Organiser shall be entitled to seize any prohibited items (as outlined in paragraphs 8, 9 & 10 above) without any liability and without any obligation to return such items or to compensate the Holder in respect thereof."
    }),
    m = c.jsx("li", {
        children: "This ticket is strictly not transferable and is for the sole use of the Holder."
    }),
    x = c.jsx("li", {
        children: "This ticket is for the personal use of the Holder only and shall not be offered for sale, auctioned, exchanged, ceded, sold or transferred, whether in a commercial or promotional context (such as, without limitation, as a prize in a lottery or competition or as part of an advertising or promotional campaign) or otherwise, with or without consideration, unless written permission has been previously obtained from the Organiser. The benefit conferred on the Holder by this ticket is personal to him/her only."
    }),
    t[10] = r,
    t[11] = R,
    t[12] = p,
    t[13] = l,
    t[14] = E,
    t[15] = G,
    t[16] = h,
    t[17] = m,
    t[18] = x) : (r = t[10],
    R = t[11],
    p = t[12],
    l = t[13],
    E = t[14],
    G = t[15],
    h = t[16],
    m = t[17],
    x = t[18]);
    let L;
    t[19] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsxs("li", {
        children: ["Kindly occupy the seat mentioned on your physical ticket. In case it is mentioned ", c.jsx("b", {
            children: "“Free Seating”"
        }), ", choice of seat in respective stand mentioned on ticket will be on first come first serve basis."]
    }),
    t[19] = L) : L = t[19];
    let d;
    t[20] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsxs(T, {
        mt: "3",
        fontSize: "1rem",
        children: [c.jsxs("ol", {
            children: [N, i, D, n, a, r, R, p, l, E, G, h, m, x, L, c.jsxs("li", {
                children: ["The use of any equipment of any kind including without limitation transistors, computers, cameras or any other audio visual recording equipment, for recording and/or communication of Match details, statistics, images etc is strictly prohibited. . Board of Control for Cricket in India ", c.jsx("b", {
                    children: "(“BCCI”)"
                }), " and / or Organiser has a discretion to take appropriate action in this regard, if required."]
            }), c.jsx("li", {
                children: "The Holder acknowledges and consents to the recording of his/her likeness and/or voice and that the BCCI is entitled to use and sub-license all rights in respect of such recordings without compensation of any kind to the Holder"
            }), c.jsx("li", {
                children: "The Holder will not sell or offer for sale any product or service from any part of the Stadium and may not distribute or give away any free item (s) or any political, religious, charitable, commercial, advertising or promotional material(s) from or at any part of the Stadium."
            }), c.jsx("li", {
                children: "Neither BCCI nor the Organiser will be liable to the Holder whether in contract, tort or otherwise for any indirect, incidental, special or consequential loss or damage or for any loss of profit or revenue, loss of reputation, loss of use, loss of business or contracts or loss of opportunity arising out of or in connection with the Match howsoever caused."
            }), c.jsx("li", {
                children: "The Holder shall not engage in any form of “Ambush Marketing” and shall not conduct in any activity that conflicts with or infringes the rights of any official sponsor or commercial partner who has been granted any rights in relation to the Match. The Holder shall not use, alter, copy or otherwise deal with any of the symbols, trademarks, logos and/or other intellectual property appearing on this ticket. If the Holder does any form of “Ambush Marketing”, the Holder may be denied entry to or ejected from the Stadium and they may face possible further action as per applicable law."
            }), c.jsx("li", {
                children: "Foul, abusive or any form of discriminatory language (whether on the grounds of race, sex, religion or otherwise), unruly language or any unruly or threatening behaviour will not be tolerated at the Stadium prior to, during or after the Match and will result in denial of entry to or ejection from the Stadium and possible further action as per applicable law."
            }), c.jsx("li", {
                children: "Entry by the Holder onto the field of play at any time and the throwing of any article within the stands, on to the field of play or otherwise in the Stadium is strictly prohibited."
            }), c.jsx("li", {
                children: "This ticket will be valid until the relevant Match has been completed or is reasonably deemed by the Organiser to have been completed. This ticket may not be exchanged or used for any match or event other than that indicated thereon. If the Match is cancelled or curtailed for any reason, there shall be no obligation on the Organiser to reschedule the Match. The Organiser reserves the right to make alterations to the timings, dates and venues of the Match or to substitute the seat or area to which this ticket refers at its reasonable discretion. The Organiser does not guarantee that the Holder will have an uninterrupted and/or uninhibited view of the Match from the seat provided nor does the Organiser give any warranty as to the quality, content or duration of the Match."
            }), c.jsx("li", {
                children: "Refunds (less any applicable administration fee, if any), will only be made if the Match is cancelled or abandoned without a single ball being bowled in any Match in the stadium on that day. No other refunds will be made."
            }), c.jsx("li", {
                children: "Spectators are reminded that any of the language or behaviour referred to in paragraph 21 above or any action in breach of paragraph 21 will result in ejection from the Stadium and possible further action such as criminal prosecution, identification by way of photographing and/or capturing by video camera of the images of such persons and multi-Match and/or lifebans on entering the Stadiums being imposed on such persons."
            }), c.jsx("li", {
                children: "The Holder is prohibited from entering the playing area under any circumstances whatsoever. Any person who enters the field of play without authorisation will be deemed to be trespassing, shall be ejected from the Stadium, may be banned from entering the Stadium in the future, be liable to pay damages and fines and may face other consequences under applicable law."
            }), c.jsx("li", {
                children: "Neither BCCI nor the Organiser will subject to any limitation imposed by law, be in any way liable to the Holder for any event, occurrences, or other timing the cause of which is beyond the reasonable control of BCCI and the Organiser."
            }), c.jsx("li", {
                children: "Entry into the Stadium constitutes and is evidence of the agreement by the Holder to be bound by these terms and conditions and by any Stadium regulations which may be displayed at the Stadium together with all present and future laws, rules and regulations whilst within the Stadium."
            }), c.jsx("li", {
                children: "No betting of any kind or assistance to anyone betting is permitted in any part of the Stadium."
            }), c.jsx("li", {
                children: "Any property left anywhere at the Stadium remains at the entire risk of the owner of the property or person leaving the same, and neither the BCCI nor the Organiser accepts any liability for the theft or other loss or damage of such property."
            }), c.jsx("li", {
                children: "Neither the BCCI, nor the Organiser nor any other person shall, to the fullest extent allowable by law, be liable to the Holder for death, any injury or any other loss of any kind suffered by the Holder within the Stadium including without limitation as a result of the Holder being hit by a cricket ball or any other ball which has been hit, thrown or otherwise projected from or to the field of play, whether the same occurs before, during, after or otherwise in relation to the Match (including without limitation by any person unconnected with the Match during any breaks between innings or during any innings) and the Holder hereby waives all rights to bring any claim of any kind against the BCCI, the Organiser or any third party in relation to any of the foregoing."
            }), c.jsx("li", {
                children: "Children of two years of age or over must have their own ticket and all persons under the age of 18 must be accompanied by and under the supervision of (in each case constantly) an adult who also has a ticket for the Match."
            }), c.jsx("li", {
                children: "In addition to these terms and conditions, entry shall be subject to any Stadium regulations specific to the Stadium. Further, the Holder expressly acknowledges that entry to any Stadium and attendance of a Match at such Stadium shall be subject to the Holder's compliance with such health and safety directions and regulations as may be issued by the Organiser, the BCCI, the Stadium authorities and/or the applicable local governmental and health authorities."
            }), c.jsx("li", {
                children: "If any provision of these terms and conditions shall be void or unenforceable by reason of any applicable law, it shall be deleted and the remaining provisions hereof shall continue in full force and effect and, if necessary, be so amended as shall be necessary to give effect to the spirit of these terms and conditions so far as possible."
            }), c.jsx("li", {
                children: "These terms and conditions shall be governed by and interpreted in accordance with the laws of India. The Courts at Mumbai shall have exclusive jurisdiction in respect of any dispute arising out of these terms and conditions."
            })]
        }), c.jsx(T, {
            fontFamily: "rcbFontB",
            children: "The Organiser reserves the right, without refund or other recourse, to refuse admission to anyone and/or if necessary, to eject the Holder/s of the ticket from the Stadium after they have entered the Stadium in each case if they are found to be in breach of these terms and conditions or the other above-mentioned regulations or any other regulations issued by the BCCI with regards to the Match/s."
        })]
    }),
    t[20] = d) : d = t[20];
    let H, f;
    t[21] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsxs(T, {
        textAlign: "center",
        fontSize: "1.2rem",
        mt: "50px",
        fontFamily: "rcbFontB",
        children: ["FOOD AND BEVERAGE TERMS AND CONDITIONS FOR", " ", c.jsxs(T, {
            as: "span",
            color: "red.500",
            children: [" ", "HOSPITALITY STANDS", " "]
        })]
    }),
    f = c.jsx(oA, {
        mt: "2"
    }),
    t[21] = H,
    t[22] = f) : (H = t[21],
    f = t[22]);
    let O;
    t[23] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsx(T, {
        mt: "3",
        fontSize: "1rem",
        fontFamily: "rcbFontB",
        children: c.jsxs("ol", {
            children: [c.jsx("li", {
                children: "Liquor will be served from 07:30 PM - 09:30 PM"
            }), c.jsx("li", {
                children: "Dinner will be served from 07:30 PM - 10:00 PM"
            })]
        })
    }),
    t[23] = O) : O = t[23];
    let g, K;
    t[24] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsxs(T, {
        textAlign: "center",
        fontSize: "1.2rem",
        mt: "50px",
        fontFamily: "rcbFontB",
        children: [c.jsxs(T, {
            as: "span",
            color: "red.500",
            children: [" ", "ADD-ONS"]
        }), " ", "TERMS AND CONDITIONS"]
    }),
    K = c.jsx(oA, {
        mt: "2"
    }),
    t[24] = g,
    t[25] = K) : (g = t[24],
    K = t[25]);
    let j;
    t[26] === Symbol.for("react.memo_cache_sentinel") ? (j = c.jsx("li", {
        children: "For Holders who have purchased the additional option of food packet, the food packets are to be collected from the catering area of the designated stand."
    }),
    t[26] = j) : j = t[26];
    let y;
    t[27] === Symbol.for("react.memo_cache_sentinel") ? (y = c.jsx(T, {
        mt: "3",
        fontSize: "1rem",
        children: c.jsxs("ol", {
            children: [j, c.jsxs("li", {
                children: ["Food packets will be available for pickup on the match day as follows:", c.jsxs("ol", {
                    children: [c.jsx("li", {
                        children: "7.30 PM Game : Food packet can be collected from 7 PM to 10 PM."
                    }), c.jsx("li", {
                        children: "3.30 PM Game : Food packet can be collected from 3 PM to 6 PM."
                    })]
                })]
            }), c.jsx("li", {
                children: "Food packets not collected will be discarded and there is no refund applicable under any circumstances including due to cancelation of the match."
            }), c.jsx("li", {
                children: "The Organiser is not responsible for any side effects due to allergies or similar reactions. All issues with regard to the food packets are to be raised directly with the caterer supplying the food packets."
            })]
        })
    }),
    t[27] = y) : y = t[27];
    let u, B;
    t[28] === Symbol.for("react.memo_cache_sentinel") ? (u = c.jsxs(T, {
        textAlign: "center",
        fontSize: "1.2rem",
        mt: "2px",
        fontFamily: "rcbFontB",
        children: [c.jsxs(T, {
            as: "span",
            color: "red.500",
            children: [" ", "UNBOX"]
        }), " ", "TICKET TERMS AND CONDITIONS"]
    }),
    B = c.jsx(oA, {
        mt: "2"
    }),
    t[28] = u,
    t[29] = B) : (u = t[28],
    B = t[29]);
    let S, b, Y, J, q, v, W, V, $, eA, w, z, Z, AA, cA, Q, F, C, k, NA, RA, EA, lA;
    t[30] === Symbol.for("react.memo_cache_sentinel") ? (S = c.jsx("li", {
        children: "By purchasing a ticket to RCB Unbox 2025 (the “Event”), you agree to abide by the terms and conditions outlined below. The Event organizers reserve the right to make changes to the Event details at any time."
    }),
    b = c.jsx("li", {
        children: "Gate Opening: Gates will open 1 hour prior to the start of the event. We strongly recommend arriving early to allow ample time for entry."
    }),
    Y = c.jsx("li", {
        children: "Gate Closing: All gates will close at 8PM, and entry will not be permitted after this time. If you arrive after the gate closing time, you will not be granted access to the Event, and no refunds will be provided."
    }),
    J = c.jsx("li", {
        children: "By purchasing the ticket, you consent to the organizer/its agent processing your personal information (including your name, email id, contact number, gender etc.), for the purposes of marketing, and sending promotional messages to you. You have read and understood the privacy policy available at https://www.royalchallengers.com/privacy-policy"
    }),
    q = c.jsx("li", {
        children: "By attending the Event, you consent to the use of your image, voice, or likeness in any photographs, videos, or other media captured during the Event for promotional or commercial purposes. You waive any rights to compensation for the use of your image or voice in these materials."
    }),
    v = c.jsx("li", {
        children: "Attendees are permitted to take photos and record videos for personal use only, provided that they do not interfere with the experience of other attendees or the Event itself. The Event organizers reserve the right to restrict photography and video recording in certain areas or during specific performances or activities."
    }),
    W = c.jsx("li", {
        children: "Commercial use of personal recordings (e.g., selling or distributing media) is strictly prohibited without prior written consent from the Event organizers. Unauthorized professional-level recording equipment (e.g., cameras with detachable lenses, drones, etc.) is not allowed without explicit permission."
    }),
    V = c.jsx("li", {
        children: "Organiser reserves the right, without refund or other recourse, to refuse admission and/or to eject you from the Stadium if you are found to be in breach of these terms or if you engage in any disruptive behaviour, in the reasonable opinion of the Organiser."
    }),
    $ = c.jsx("li", {
        children: "This Ticket and a valid ID should be produced at the time of entry for validation. Entry will not be allowed if security features / bar code areis tampered/damaged."
    }),
    eA = c.jsx("li", {
        children: "Please keep this ticket accessible and in its workinggood condition till the end of the Event."
    }),
    w = c.jsx("li", {
        children: "This Ticket is valid for one person only. Tickets are for personal use and are non-transferable. Reselling tickets is prohibited."
    }),
    z = c.jsx("li", {
        children: "The organizers reserves the right of admission & frisking for security reasons at any point."
    }),
    Z = c.jsx("li", {
        children: "In the event of an emergency, attendees must follow all instructions provided by Event staff, security, and law enforcement personnel. Failure to comply with emergency procedures may result in immediate removal from the Event."
    }),
    AA = c.jsx("li", {
        children: "First aid stations will be available on-site in case of medical emergencies. For urgent assistance, please contact Event staff or security immediately."
    }),
    cA = c.jsx("li", {
        children: "Helmets, cigarettes, handbags, bottles, lighters, matchboxes, cans, cameras, any audio visual recording equipments & banned substances are strictly prohibited."
    }),
    Q = c.jsx("li", {
        children: "Food and drinks from outside are not permitted."
    }),
    F = c.jsx("li", {
        children: "The organizer does not take any responsibility for injuries, illness, loss or theft of any personal belongings of the Ticket holder."
    }),
    C = c.jsx("li", {
        children: "The Event will feature performances from various artists, and other performers. The Event organizers reserve the right to change/cancel or substitute performers without notice."
    }),
    k = c.jsx("li", {
        children: "The Event may contain flashing lights, loud music, and other potentially triggering content. By attending, you acknowledge that you are aware of these elements and consent to your participation in the Event."
    }),
    NA = c.jsx("li", {
        children: "The Event organizers are not liable for any failure or delay in the Event caused by circumstances beyond their control, including but not limited to natural disasters, public health crises, acts of terrorism, or other unforeseen events."
    }),
    RA = c.jsx("li", {
        children: "In case the event is rescheduled, the existing ticket would be valid for a later date to be announced by the organiser. Refunds will only be made if the event is cancelled with no prospect of rescheduling."
    }),
    EA = c.jsx("li", {
        children: "Smoking and vaping are strictly prohibited on the premises."
    }),
    lA = c.jsx("li", {
        children: "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms and Conditions will be subject to the exclusive jurisdiction of the courts in Bangalore."
    }),
    t[30] = S,
    t[31] = b,
    t[32] = Y,
    t[33] = J,
    t[34] = q,
    t[35] = v,
    t[36] = W,
    t[37] = V,
    t[38] = $,
    t[39] = eA,
    t[40] = w,
    t[41] = z,
    t[42] = Z,
    t[43] = AA,
    t[44] = cA,
    t[45] = Q,
    t[46] = F,
    t[47] = C,
    t[48] = k,
    t[49] = NA,
    t[50] = RA,
    t[51] = EA,
    t[52] = lA) : (S = t[30],
    b = t[31],
    Y = t[32],
    J = t[33],
    q = t[34],
    v = t[35],
    W = t[36],
    V = t[37],
    $ = t[38],
    eA = t[39],
    w = t[40],
    z = t[41],
    Z = t[42],
    AA = t[43],
    cA = t[44],
    Q = t[45],
    F = t[46],
    C = t[47],
    k = t[48],
    NA = t[49],
    RA = t[50],
    EA = t[51],
    lA = t[52]);
    let dA;
    t[53] === Symbol.for("react.memo_cache_sentinel") ? (dA = c.jsx("br", {}),
    t[53] = dA) : dA = t[53];
    let mA;
    t[54] === Symbol.for("react.memo_cache_sentinel") ? (mA = c.jsx("br", {}),
    t[54] = mA) : mA = t[54];
    let xA;
    t[55] === Symbol.for("react.memo_cache_sentinel") ? (xA = c.jsx(T, {
        mt: "3",
        fontSize: "1rem",
        children: c.jsxs("ol", {
            children: [S, b, Y, J, q, v, W, V, $, eA, w, z, Z, AA, cA, Q, F, C, k, NA, RA, EA, lA, c.jsxs("li", {
                children: ["For any questions or inquiries regarding the Event, ticketing, or these Terms and Conditions, please contact us at:", dA, "Email: rcbtickets@ticketgenie.in", mA, "Phone: +91 8884864040", c.jsx("br", {}), "Website: www.royalchallengers.com"]
            })]
        })
    }),
    t[55] = xA) : xA = t[55];
    let aA, LA;
    t[56] === Symbol.for("react.memo_cache_sentinel") ? (aA = c.jsxs(T, {
        textAlign: "center",
        fontSize: "1.2rem",
        mt: "50px",
        fontFamily: "rcbFontB",
        children: ["TICKET", " ", c.jsxs(T, {
            as: "span",
            color: "red.500",
            children: [" ", "REFUND"]
        }), " ", "POLICY"]
    }),
    LA = c.jsx(oA, {
        mt: "2"
    }),
    t[56] = aA,
    t[57] = LA) : (aA = t[56],
    LA = t[57]);
    let HA;
    return t[58] === Symbol.for("react.memo_cache_sentinel") ? (HA = c.jsxs(T, {
        mx: "auto",
        w: "100%",
        maxW: "1200px",
        bg: "white",
        p: "3",
        borderRadius: "10px",
        mt: "2",
        textAlign: "justify",
        children: [A, I, d, H, f, O, g, K, y, u, B, xA, aA, LA, c.jsxs(T, {
            mt: "3",
            fontSize: "1rem",
            children: ["In the unlikely situation if the event is cancelled then", " ", "all valid tickets holders may avail refund, subject to the following terms & conditions.", c.jsxs("ol", {
                children: [c.jsx("li", {
                    children: "All customer's to retain & surrender the original tickets to avail refund."
                }), c.jsx("li", {
                    children: "No refund applicable for tickets issued as complimentary."
                }), c.jsx("li", {
                    children: "Corporate Sale customers to claim refund from respective sale executives on surrender of their original tickets."
                }), c.jsx("li", {
                    children: "Customers who bought tickets online will receive refund through the same payment methods used while booking."
                })]
            })]
        })]
    }),
    t[58] = HA) : HA = t[58],
    HA
}
  , II = {
    status: "Failed",
    message: "Error",
    result: {}
};
async function vo(t) {
    try {
        return await (await OA.get("offlinePayment/order/" + t)).data
    } catch {
        return II
    }
}
async function ko(t) {
    try {
        return await (await OA.post("offlinePayment/proceedvialink", t)).data
    } catch {
        return II
    }
}
async function Wo(t) {
    try {
        return console.log("Payment Verify Data", t),
        await (await OA.post("offlinePayment/verifyrpay", t)).data
    } catch {
        return II
    }
}
const zo = () => {
    var o, N, i, D, n, a, r, R, p, l, E, G, h, m, x, L, d;
    const {pid: t} = ft()
      , A = Gc({
        queryKey: ["payment", t],
        queryFn: () => vo(t)
    })
      , I = hA({
        mutationFn: ko
    })
      , e = hA({
        mutationFn: Wo
    });
    P.useEffect( () => {
        var O;
        if (((O = I.data) == null ? void 0 : O.status) == "Success") {
            var H = {
                key: "rzp_live_FtssIfCKqQhKm9",
                amount: I.data.result.amount,
                currency: "INR",
                name: "RCB Shop",
                description: "Powered by Ticketgenie",
                order_id: I.data.result.pgOrderId,
                prefill: {
                    name: I.data.result.firstName + " " + I.data.result.lastName,
                    email: I.data.result.email,
                    contact: I.data.result.mobile
                },
                handler: function(g) {
                    var j, y;
                    const K = {
                        order_id: (y = (j = A.data) == null ? void 0 : j.result[0]) == null ? void 0 : y.ordeR_NO,
                        razorpay_payment_id: g.razorpay_payment_id,
                        razorpay_order_id: g.razorpay_order_id,
                        razorpay_signature: g.razorpay_signature
                    };
                    e.mutate(K)
                },
                modal: {
                    ondismiss: function() {
                        console.log("Transaction dialogue closed")
                    }
                }
            }
              , f = new Razorpay(H);
            f.open()
        }
    }
    , [I.isSuccess]),
    P.useEffect( () => {
        var H;
        ((H = e.data) == null ? void 0 : H.status) == "Success" && (window.location.href = "/payment/" + t)
    }
    , [e.isSuccess]);
    const s = () => {
        I.mutate({
            encryptedorderno: t
        })
    }
    ;
    return A.isLoading ? c.jsx(At, {}) : c.jsx(U, {
        direction: ["column", "row"],
        w: "100%",
        mt: "2",
        mx: "auto",
        maxW: "1020px",
        children: ((o = A.data) == null ? void 0 : o.status) == "Success" ? ((i = (N = A.data) == null ? void 0 : N.result[0]) == null ? void 0 : i.status) == "P" ? c.jsx(DA, {
            p: 5,
            minH: "100px",
            bg: "green.50",
            borderRadius: "10px",
            w: "100%",
            border: "1px solid green",
            children: c.jsx(M, {
                fontSize: "1.4rem",
                fontFamily: "rcbFontB",
                color: "green.500",
                fontWeight: "bold",
                children: "Payment Completed!"
            })
        }) : c.jsxs(c.Fragment, {
            children: [c.jsxs(U, {
                flex: 1,
                children: [c.jsxs(U, {
                    p: 5,
                    bg: "white",
                    borderRadius: "10px",
                    children: [c.jsx(M, {
                        fontSize: "lg",
                        fontWeight: "bold",
                        children: "Personal Details"
                    }), c.jsx(oA, {}), c.jsxs(U, {
                        direction: ["column", "row"],
                        spacing: 2,
                        children: [c.jsx(wc, {
                            title: "Booking ID",
                            value: (n = (D = A.data) == null ? void 0 : D.result[0]) == null ? void 0 : n.ordeR_NO
                        }), c.jsx(wc, {
                            title: "Booking Date",
                            value: (r = (a = A.data) == null ? void 0 : a.result[0]) == null ? void 0 : r.ordeR_DT
                        })]
                    }), c.jsx(wc, {
                        title: "Name",
                        value: (p = (R = A.data) == null ? void 0 : R.result[0]) == null ? void 0 : p.cusT_NAME
                    }), c.jsxs(U, {
                        direction: ["column", "row"],
                        spacing: 2,
                        children: [c.jsx(wc, {
                            title: "Mobile",
                            value: (E = (l = A.data) == null ? void 0 : l.result[0]) == null ? void 0 : E.contacT_NO
                        }), c.jsx(wc, {
                            title: "Email",
                            value: (h = (G = A.data) == null ? void 0 : G.result[0]) == null ? void 0 : h.emaiL_ID
                        })]
                    })]
                }), c.jsxs(U, {
                    p: 5,
                    bg: "white",
                    borderRadius: "10px",
                    children: [c.jsx(M, {
                        fontSize: "lg",
                        fontWeight: "bold",
                        children: "Ticket Details"
                    }), c.jsx(oA, {}), c.jsx(U, {
                        divider: c.jsx(oA, {}),
                        children: (x = (m = A.data) == null ? void 0 : m.result) == null ? void 0 : x.map( (H, f) => c.jsxs(U, {
                            children: [c.jsx(wc, {
                                title: "Match Name",
                                value: H == null ? void 0 : H.evenT_NAME
                            }), c.jsx(wc, {
                                title: "Stand Name",
                                value: H == null ? void 0 : H.stanD_NAME
                            }), c.jsxs(U, {
                                direction: "row",
                                spacing: 2,
                                children: [c.jsx(wc, {
                                    title: "Ticket Price",
                                    value: H == null ? void 0 : H.price
                                }), c.jsx(wc, {
                                    title: "Qty",
                                    value: H == null ? void 0 : H.qty
                                }), c.jsx(wc, {
                                    title: "Amount",
                                    value: Math.round(H == null ? void 0 : H.amount, 0)
                                })]
                            })]
                        }, f))
                    })]
                })]
            }), c.jsx(T, {
                position: "sticky",
                bottom: "3px",
                w: ["100%", "350px"],
                children: c.jsxs(U, {
                    p: 5,
                    bg: "white",
                    borderRadius: "10px",
                    position: "sticky",
                    top: "70px",
                    children: [c.jsx(M, {
                        fontSize: "lg",
                        fontWeight: "bold",
                        display: ["none", "inherit"],
                        children: "Payment Details"
                    }), c.jsx(oA, {
                        display: ["none", "inherit"]
                    }), c.jsxs(TA, {
                        children: [c.jsx(M, {
                            fontSize: "1.32rem",
                            color: "red.500",
                            children: "Total Payable :"
                        }), c.jsx(nA, {}), c.jsxs(M, {
                            fontSize: "1.32rem",
                            fontFamily: "rcbFontB",
                            color: "red.500",
                            children: ["₹", (d = (L = A.data) == null ? void 0 : L.result[0]) == null ? void 0 : d.neT_AMOUNT.toLocaleString("en-IN")]
                        })]
                    }), c.jsx(_, {
                        mt: 4,
                        colorScheme: "red",
                        variant: "solid",
                        size: "lg",
                        onClick: () => s(),
                        isLoading: I.isLoading || e.isLoading,
                        children: e.isPending ? "Verifing Payment" : "PAY NOW"
                    })]
                })
            })]
        }) : c.jsx(DA, {
            p: 5,
            minH: "100px",
            bg: "red.50",
            border: "1px solid red",
            borderRadius: "10px",
            w: "100%",
            children: c.jsx(M, {
                fontSize: "lg",
                fontFamily: "rcbFontB",
                color: "red.500",
                fontWeight: "bold",
                children: "Booking Details Not Found!"
            })
        })
    })
}
  , wc = t => {
    const A = X.c(7)
      , {title: I, value: e} = t;
    let s;
    A[0] !== I ? (s = c.jsx(M, {
        fontSize: "md",
        color: "gray.500",
        children: I
    }),
    A[0] = I,
    A[1] = s) : s = A[1];
    let o;
    A[2] !== e ? (o = c.jsx(M, {
        fontSize: "md",
        color: "gray.600",
        fontFamily: "rcbFontB",
        fontWeight: "bold",
        children: e
    }),
    A[2] = e,
    A[3] = o) : o = A[3];
    let N;
    return A[4] !== s || A[5] !== o ? (N = c.jsxs(U, {
        spacing: 0,
        w: "100%",
        children: [s, o]
    }),
    A[4] = s,
    A[5] = o,
    A[6] = N) : N = A[6],
    N
}
  , Fo = () => {
    const t = "Department"
      , [A,I] = P.useState("mobile")
      , [e,s] = P.useState("")
      , [o,N] = P.useState("")
      , i = P.useRef()
      , D = WA()
      , n = hA({
        mutationFn: Ct
    })
      , a = hA({
        mutationFn: yt
    })
      , r = hA({
        mutationFn: bt
    })
      , R = Rc(L => L.clearCart)
      , p = JA(L => L.delDetail)
      , l = kA()
      , {addDetail: E} = JA()
      , [G] = ut();
    P.useEffect( () => {
        R(),
        p(),
        vA.remove("rtokn"),
        G.get("iosNewUser") == "true" && localStorage.setItem("iosNewUser", "true")
    }
    , []),
    P.useEffect( () => {
        var L, d, H;
        n.isSuccess && (((L = n.data) == null ? void 0 : L.status) == "Success" ? (s((d = i.current) == null ? void 0 : d.value),
        N(""),
        I("otp")) : D({
            title: (H = n.data) == null ? void 0 : H.message,
            status: "error",
            duration: "1500"
        }))
    }
    , [n.isSuccess]),
    P.useEffect( () => {
        var L, d;
        a.isSuccess && (((L = a.data) == null ? void 0 : L.status) == "Success" ? D({
            title: "OTP Sent.",
            status: "success",
            duration: "1500"
        }) : D({
            title: (d = a.data) == null ? void 0 : d.message,
            status: "error",
            duration: "1500"
        }))
    }
    , [a.isSuccess]);
    const h = async () => {
        var d, H;
        if (((d = i.current) == null ? void 0 : d.value.length) != 10) {
            D({
                title: "Enter Valid Mobile No.",
                status: "error",
                duration: "1500"
            });
            return
        }
        const L = {
            utype: gA(t),
            mobile: gA((H = i.current) == null ? void 0 : H.value),
            email: ""
        };
        n.mutate(L)
    }
      , m = async () => {
        if (e.length != 10) {
            D({
                title: "Enter Valid Mobile No.",
                status: "error",
                duration: "1500"
            });
            return
        }
        const L = {
            utype: gA(t),
            mobile: gA(e),
            email: ""
        };
        a.mutate(L)
    }
      , x = () => {
        try {
            if (o.length != 5) {
                D({
                    title: "Login Failed.",
                    status: "error",
                    duration: "1500"
                });
                return
            } else {
                const L = {
                    utype: gA(t),
                    mobile: gA(e),
                    email: "",
                    otp: gA(o)
                };
                r.mutate(L)
            }
        } catch {}
    }
    ;
    return P.useEffect( () => {
        var L, d, H, f, O, g, K, j, y;
        if (r.isSuccess)
            if (((L = r.data) == null ? void 0 : L.status) == "Success") {
                R(),
                vA.set("rtokn", (H = (d = r.data) == null ? void 0 : d.result) == null ? void 0 : H.token, {
                    expires: 30,
                    secure: !0,
                    path: "/",
                    sameSite: "strict"
                });
                const u = (f = r.data) == null ? void 0 : f.result;
                u.ml = 6,
                u.tl = 10,
                E(u);
                const B = G.get("callbackUrl");
                l(B || "/ticket")
            } else
                ((g = (O = r.data) == null ? void 0 : O.result) == null ? void 0 : g.msg) == "ATTEMPT EXCEEDED" && I("mobile"),
                D({
                    title: ((K = r.data) == null ? void 0 : K.message) + ". Attempt " + ((y = (j = r.data) == null ? void 0 : j.result) == null ? void 0 : y.attempt),
                    status: "error",
                    duration: "1500"
                })
    }
    , [r.isSuccess]),
    c.jsxs(c.Fragment, {
        children: [c.jsxs(T, {
            w: "full",
            h: "70vh",
            children: [c.jsx(DA, {
                py: "1",
                display: ["none", "flex"],
                children: c.jsx(fA, {
                    borderRadius: "10px",
                    w: "80%",
                    src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/navi/v2/navi-page.png",
                    alt: ""
                })
            }), c.jsx(DA, {
                p: "1",
                display: ["flex", "none"],
                children: c.jsx(fA, {
                    borderRadius: "10px",
                    w: "100%",
                    src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/navi/v2/navi-page-m.png",
                    alt: ""
                })
            }), c.jsx(DA, {
                w: "full",
                p: ["5px", "20px"],
                pt: ["5px", "5px"],
                children: c.jsxs(T, {
                    bg: "rgba(255,255,255,0.93)",
                    w: "100%",
                    maxW: "400px",
                    p: "10",
                    pt: "4",
                    px: [5, 10],
                    borderRadius: "lg",
                    shadow: "lg",
                    position: "relative",
                    children: [c.jsx(VA, {
                        onClick: () => l("/"),
                        icon: c.jsx(Ot, {}),
                        fontSize: "1.5rem",
                        variant: "ghost",
                        position: "absolute",
                        left: "30px",
                        colorScheme: "red"
                    }), c.jsx(M, {
                        textAlign: "center",
                        borderRadius: "full",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        color: "gray.500",
                        children: "LOGIN"
                    }), c.jsx(oA, {
                        my: "20px"
                    }), A == "mobile" ? c.jsxs(c.Fragment, {
                        children: [c.jsxs(tA, {
                            children: [c.jsx(IA, {
                                children: "Enter Mobile No."
                            }), c.jsxs(Kt, {
                                children: [c.jsx(Ft, {
                                    height: "48px",
                                    children: "+91"
                                }), c.jsx(pA, {
                                    size: "lg",
                                    bg: "white",
                                    type: "tel",
                                    ref: i,
                                    placeholder: "Mobile No.",
                                    maxLength: 10,
                                    fontSize: "1.3rem",
                                    letterSpacing: "5px",
                                    pattern: "[1-9]{1}[0-9]{9}",
                                    autoComplete: "off",
                                    onPaste: L => {
                                        L.preventDefault()
                                    }
                                    ,
                                    onKeyDown: L => {
                                        !/[0-9]/.test(L.key) && L.key !== "Backspace" && L.preventDefault()
                                    }
                                })]
                            }), c.jsx(nc, {
                                children: "You will receive OTP, after continue"
                            })]
                        }), c.jsx(U, {
                            py: "30px",
                            textAlign: "center",
                            children: c.jsx(_, {
                                variant: "solid",
                                size: "lg",
                                rightIcon: c.jsx(Qc, {}),
                                colorScheme: "red",
                                onClick: () => h(),
                                isLoading: n.isPending,
                                children: "Continue"
                            })
                        })]
                    }) : c.jsxs(c.Fragment, {
                        children: [c.jsxs(tA, {
                            children: [c.jsx(IA, {
                                children: "Enter OTP."
                            }), c.jsxs(TA, {
                                children: [c.jsx(nA, {}), c.jsxs(at, {
                                    otp: !0,
                                    size: "lg",
                                    value: o,
                                    onChange: L => N(L),
                                    children: [c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    }), c.jsx(PA, {
                                        bg: "white"
                                    })]
                                }), c.jsx(nA, {})]
                            }), c.jsxs(nc, {
                                textAlign: "center",
                                children: ["OTP sent to +91 ", e]
                            })]
                        }), c.jsx(qo, {
                            handleResend: m,
                            isLoading: a.isPending
                        }), c.jsxs(U, {
                            py: "30px",
                            textAlign: "center",
                            children: [c.jsx(_, {
                                variant: "solid",
                                size: "lg",
                                rightIcon: c.jsx(Qc, {}),
                                colorScheme: "red",
                                onClick: () => x(),
                                isLoading: r.isPending,
                                children: "Validate"
                            }), c.jsx(_, {
                                colorScheme: "red",
                                variant: "ghost",
                                onClick: () => I("mobile"),
                                children: "Cancel"
                            })]
                        })]
                    }), c.jsx(T, {
                        w: "100%",
                        pt: "2",
                        children: c.jsx(DA, {
                            children: c.jsx(fA, {
                                src: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/navi/navi-upi-logo.svg",
                                alt: "",
                                width: "280px"
                            })
                        })
                    })]
                })
            })]
        }), c.jsx(T, {
            backgroundImage: "https://tg3.s3.ap-south-1.amazonaws.com/revents/banners/stadium-new.png",
            backgroundPosition: "center",
            backgroundSize: "cover",
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
            w: "full",
            h: "100vh",
            zIndex: -1
        })]
    })
}
  , qo = t => {
    const A = X.c(14)
      , {handleResend: I, isLoading: e} = t
      , [s,o] = P.useState(30);
    let N, i;
    A[0] !== s ? (N = () => {
        const E = setInterval( () => {
            o($o),
            s <= 0 && clearInterval(E)
        }
        , 1e3);
        return () => clearInterval(E)
    }
    ,
    i = [s],
    A[0] = s,
    A[1] = N,
    A[2] = i) : (N = A[1],
    i = A[2]),
    P.useEffect(N, i);
    let D;
    A[3] !== I ? (D = () => {
        I(),
        o(60)
    }
    ,
    A[3] = I,
    A[4] = D) : D = A[4];
    const n = D;
    let a, r;
    A[5] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(nA, {}),
    r = c.jsx(M, {
        children: "Resend OTP "
    }),
    A[5] = a,
    A[6] = r) : (a = A[5],
    r = A[6]);
    let R;
    A[7] !== n || A[8] !== s || A[9] !== e ? (R = s > 0 ? c.jsxs(M, {
        children: ["in ", s, "sec"]
    }) : c.jsx(_, {
        variant: "ghost",
        size: "sm",
        colorScheme: "blue",
        onClick: () => n(),
        isLoading: e,
        children: "Click Here"
    }),
    A[7] = n,
    A[8] = s,
    A[9] = e,
    A[10] = R) : R = A[10];
    let p;
    A[11] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(nA, {}),
    A[11] = p) : p = A[11];
    let l;
    return A[12] !== R ? (l = c.jsxs(TA, {
        py: "3",
        color: "gray.600",
        children: [a, r, R, p]
    }),
    A[12] = R,
    A[13] = l) : l = A[13],
    l
}
;
function $o(t) {
    return t - 1
}
const Zo = () => {
    const t = X.c(25);
    let A;
    t[0] === Symbol.for("react.memo_cache_sentinel") ? (A = c.jsx(Ks, {}),
    t[0] = A) : A = t[0];
    let I;
    t[1] === Symbol.for("react.memo_cache_sentinel") ? (I = c.jsx(CA, {
        path: "",
        element: c.jsx(eI, {
            to: "/merchandise"
        })
    }),
    t[1] = I) : I = t[1];
    let e;
    t[2] === Symbol.for("react.memo_cache_sentinel") ? (e = c.jsx(CA, {
        path: "auth",
        element: c.jsx(NI, {})
    }),
    t[2] = e) : e = t[2];
    let s;
    t[3] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(CA, {
        path: "login",
        element: c.jsx(NI, {})
    }),
    t[3] = s) : s = t[3];
    let o;
    t[4] === Symbol.for("react.memo_cache_sentinel") ? (o = c.jsx(CA, {
        path: "diageo",
        element: c.jsx(Ys, {})
    }),
    t[4] = o) : o = t[4];
    let N;
    t[5] === Symbol.for("react.memo_cache_sentinel") ? (N = c.jsx(CA, {
        path: "naviupi",
        element: c.jsx(Js, {})
    }),
    t[5] = N) : N = t[5];
    let i;
    t[6] === Symbol.for("react.memo_cache_sentinel") ? (i = c.jsx(CA, {
        path: "ksca",
        element: c.jsx(Fo, {})
    }),
    t[6] = i) : i = t[6];
    let D;
    t[7] === Symbol.for("react.memo_cache_sentinel") ? (D = c.jsx(CA, {
        path: "merchandise",
        element: c.jsx(us, {})
    }),
    t[7] = D) : D = t[7];
    let n;
    t[8] === Symbol.for("react.memo_cache_sentinel") ? (n = c.jsx(CA, {
        path: "merchandise/:id",
        element: c.jsx(Cs, {})
    }),
    t[8] = n) : n = t[8];
    let a;
    t[9] === Symbol.for("react.memo_cache_sentinel") ? (a = c.jsx(CA, {
        path: "checkout",
        element: c.jsx($s, {})
    }),
    t[9] = a) : a = t[9];
    let r;
    t[10] === Symbol.for("react.memo_cache_sentinel") ? (r = c.jsx(CA, {
        path: "verifyjpay/:orderId",
        element: c.jsx(mo, {})
    }),
    t[10] = r) : r = t[10];
    let R;
    t[11] === Symbol.for("react.memo_cache_sentinel") ? (R = c.jsx(CA, {
        path: "Thankyou",
        element: c.jsx(Go, {})
    }),
    t[11] = R) : R = t[11];
    let p;
    t[12] === Symbol.for("react.memo_cache_sentinel") ? (p = c.jsx(CA, {
        path: "Failed",
        element: c.jsx(uo, {})
    }),
    t[12] = p) : p = t[12];
    let l;
    t[13] === Symbol.for("react.memo_cache_sentinel") ? (l = c.jsx(xo, {}),
    t[13] = l) : l = t[13];
    let E;
    t[14] === Symbol.for("react.memo_cache_sentinel") ? (E = c.jsx(CA, {
        path: "",
        element: c.jsx(DI, {})
    }),
    t[14] = E) : E = t[14];
    let G;
    t[15] === Symbol.for("react.memo_cache_sentinel") ? (G = c.jsx(CA, {
        path: "mypage",
        element: c.jsx(DI, {})
    }),
    t[15] = G) : G = t[15];
    let h;
    t[16] === Symbol.for("react.memo_cache_sentinel") ? (h = c.jsx(CA, {
        path: "addresses",
        element: c.jsx(co, {})
    }),
    t[16] = h) : h = t[16];
    let m;
    t[17] === Symbol.for("react.memo_cache_sentinel") ? (m = c.jsx(CA, {
        path: "profile",
        element: c.jsx(Do, {})
    }),
    t[17] = m) : m = t[17];
    let x;
    t[18] === Symbol.for("react.memo_cache_sentinel") ? (x = c.jsx(CA, {
        path: "orders",
        element: c.jsx(po, {})
    }),
    t[18] = x) : x = t[18];
    let L;
    t[19] === Symbol.for("react.memo_cache_sentinel") ? (L = c.jsxs(CA, {
        path: "rcbian",
        element: l,
        children: [E, G, h, m, x, c.jsx(CA, {
            path: "tickets",
            element: c.jsx(Eo, {})
        })]
    }),
    t[19] = L) : L = t[19];
    let d;
    t[20] === Symbol.for("react.memo_cache_sentinel") ? (d = c.jsx(CA, {
        path: "help",
        element: c.jsx(Qs, {})
    }),
    t[20] = d) : d = t[20];
    let H;
    t[21] === Symbol.for("react.memo_cache_sentinel") ? (H = c.jsx(CA, {
        path: "terms-conditions",
        element: c.jsx(Vo, {})
    }),
    t[21] = H) : H = t[21];
    let f;
    t[22] === Symbol.for("react.memo_cache_sentinel") ? (f = c.jsxs(CA, {
        path: "/",
        element: A,
        children: [I, e, s, o, N, i, D, n, a, r, R, p, L, d, H, c.jsx(CA, {
            path: "payment/:pid",
            element: c.jsx(zo, {})
        })]
    }),
    t[22] = f) : f = t[22];
    let O;
    t[23] === Symbol.for("react.memo_cache_sentinel") ? (O = c.jsx(CA, {
        path: "/mticket/:orderNo",
        element: c.jsx(Jo, {})
    }),
    t[23] = O) : O = t[23];
    let g;
    return t[24] === Symbol.for("react.memo_cache_sentinel") ? (g = c.jsxs(XI, {
        children: [f, O, c.jsx(CA, {
            path: "*",
            element: c.jsx(eI, {
                to: "/"
            })
        })]
    }),
    t[24] = g) : g = t[24],
    g
}
  , Qo = () => {
    CI.initialize("G-47DT5CSCWH")
}
  , Xo = t => {
    CI.send({
        hitType: "pageview",
        page: t
    })
}
;
function AN() {
    const t = X.c(5)
      , A = rI();
    let I;
    t[0] !== A.pathname ? (I = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        }),
        Qo(),
        Xo(A.pathname)
    }
    ,
    t[0] = A.pathname,
    t[1] = I) : I = t[1];
    let e;
    t[2] !== A ? (e = [A],
    t[2] = A,
    t[3] = e) : e = t[3],
    P.useEffect(I, e);
    let s;
    return t[4] === Symbol.for("react.memo_cache_sentinel") ? (s = c.jsx(Zo, {}),
    t[4] = s) : s = t[4],
    s
}
const cN = new je;
QI(document.getElementById("rcb-shop")).render(c.jsx(P.StrictMode, {
    children: c.jsx(ge, {
        children: c.jsx(Ce, {
            client: cN,
            children: c.jsx(Ae, {
                children: c.jsx(Be, {
                    children: c.jsx(AN, {})
                })
            })
        })
    })
}));
