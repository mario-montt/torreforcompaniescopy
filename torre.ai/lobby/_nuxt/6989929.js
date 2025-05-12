! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3c1515e3-46d7-4936-b23b-3ae5af202b50", t._sentryDebugIdIdentifier = "sentry-dbid-3c1515e3-46d7-4936-b23b-3ae5af202b50")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [84], {
        77: function(t, e, n) {
            "use strict";
            (function(t) {
                function r(t) {
                    return t && t.Math == Math ? t : void 0
                }
                n.d(e, "a", (function() {
                    return o
                })), n.d(e, "b", (function() {
                    return c
                }));
                const o = "object" == typeof globalThis && r(globalThis) || "object" == typeof window && r(window) || "object" == typeof self && r(self) || "object" == typeof t && r(t) || function() {
                    return this
                }() || {};

                function c() {
                    return o
                }
            }).call(this, n(76))
        },
        803: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return Oe
            })), n.d(e, "b", (function() {
                return ke
            }));
            var r = n(309),
                o = n(308),
                c = n(14),
                d = n(20),
                l = n(56),
                f = n(106),
                m = n(234),
                h = n(12);
            const v = Object.prototype.toString;

            function y(t, e) {
                return v.call(t) === `[object ${e}]`
            }

            function T(t) {
                return y(t, "String")
            }

            function _(t, base) {
                try {
                    return t instanceof base
                } catch (t) {
                    return !1
                }
            }
            var S = n(77);
            const w = ["debug", "info", "warn", "error", "log", "assert", "trace"];
            ! function() {
                let t = !1;
                const e = {
                    enable: () => {
                        t = !0
                    },
                    disable: () => {
                        t = !1
                    },
                    isEnabled: () => t
                };
                w.forEach((t => {
                    e[t] = () => {}
                }))
            }();
            const O = "baggage",
                k = "sentry-",
                E = /^sentry-/;

            function j(t) {
                if (!T(t) && !Array.isArray(t)) return;
                let e = {};
                if (Array.isArray(t)) e = t.reduce(((t, e) => {
                    const n = x(e);
                    for (const e of Object.keys(n)) t[e] = n[e];
                    return t
                }), {});
                else {
                    if (!t) return;
                    e = x(t)
                }
                const n = Object.entries(e).reduce(((t, [e, n]) => {
                    if (e.match(E)) {
                        t[e.slice(k.length)] = n
                    }
                    return t
                }), {});
                return Object.keys(n).length > 0 ? n : void 0
            }

            function I(t) {
                if (!t) return;
                return function(object) {
                    if (0 === Object.keys(object).length) return;
                    return Object.entries(object).reduce(((t, [e, n], r) => {
                        const o = `${encodeURIComponent(e)}=${encodeURIComponent(n)}`,
                            c = 0 === r ? o : `${t},${o}`;
                        return c.length > 8192 ? t : c
                    }), "")
                }(Object.entries(t).reduce(((t, [e, n]) => (n && (t[`sentry-${e}`] = n), t)), {}))
            }

            function x(t) {
                return t.split(",").map((t => t.split("=").map((t => decodeURIComponent(t.trim()))))).reduce(((t, [e, n]) => (t[e] = n, t)), {})
            }
            const C = Object(S.b)();

            function L(t, e = {}) {
                if (!t) return "<unknown>";
                try {
                    let n = t;
                    const r = 5,
                        o = [];
                    let c = 0,
                        d = 0;
                    const l = " > ",
                        f = l.length;
                    let m;
                    const h = Array.isArray(e) ? e : e.keyAttrs,
                        v = !Array.isArray(e) && e.maxStringLength || 80;
                    for (; n && c++ < r && (m = R(n, h), !("html" === m || c > 1 && d + o.length * f + m.length >= v));) o.push(m), d += m.length, n = n.parentNode;
                    return o.reverse().join(l)
                } catch (t) {
                    return "<unknown>"
                }
            }

            function R(t, e) {
                const n = t,
                    r = [];
                let o, c, d, l, i;
                if (!n || !n.tagName) return "";
                if (C.HTMLElement && n instanceof HTMLElement && n.dataset && n.dataset.sentryComponent) return n.dataset.sentryComponent;
                r.push(n.tagName.toLowerCase());
                const f = e && e.length ? e.filter((t => n.getAttribute(t))).map((t => [t, n.getAttribute(t)])) : null;
                if (f && f.length) f.forEach((t => {
                    r.push(`[${t[0]}="${t[1]}"]`)
                }));
                else if (n.id && r.push(`#${n.id}`), o = n.className, o && T(o))
                    for (c = o.split(/\s+/), i = 0; i < c.length; i++) r.push(`.${c[i]}`);
                const m = ["aria-label", "type", "name", "title", "alt"];
                for (i = 0; i < m.length; i++) d = m[i], l = n.getAttribute(d), l && r.push(`[${d}="${l}"]`);
                return r.join("")
            }

            function $(t) {
                if (!C.HTMLElement) return null;
                let e = t;
                for (let i = 0; i < 5; i++) {
                    if (!e) return null;
                    if (e instanceof HTMLElement && e.dataset.sentryComponent) return e.dataset.sentryComponent;
                    e = e.parentNode
                }
                return null
            }

            function P(t, pattern, e = !1) {
                return !!T(t) && (y(pattern, "RegExp") ? pattern.test(t) : !!T(pattern) && (e ? t === pattern : t.includes(pattern)))
            }

            function A(source, t, e) {
                if (!(t in source)) return;
                const n = source[t],
                    r = e(n);
                "function" == typeof r && function(t, e) {
                    try {
                        const n = e.prototype || {};
                        t.prototype = e.prototype = n, H(t, "__sentry_original__", e)
                    } catch (t) {}
                }(r, n), source[t] = r
            }

            function H(t, e, n) {
                try {
                    Object.defineProperty(t, e, {
                        value: n,
                        writable: !0,
                        configurable: !0
                    })
                } catch (t) {}
            }

            function M() {
                const t = S.a,
                    e = t.crypto || t.msCrypto;
                let n = () => 16 * Math.random();
                try {
                    if (e && e.randomUUID) return e.randomUUID().replace(/-/g, "");
                    e && e.getRandomValues && (n = () => {
                        const t = new Uint8Array(1);
                        return e.getRandomValues(t), t[0]
                    })
                } catch (t) {}
                return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, (t => (t ^ (15 & n()) >> t / 4).toString(16)))
            }
            const D = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");

            function N(t) {
                if (!t) return;
                const e = t.match(D);
                if (!e) return;
                let n;
                return "1" === e[3] ? n = !0 : "0" === e[3] && (n = !1), {
                    traceId: e[1],
                    parentSampled: n,
                    parentSpanId: e[2]
                }
            }

            function B(t = M(), e = M().substring(16), n) {
                let r = "";
                return void 0 !== n && (r = n ? "-1" : "-0"), `${t}-${e}${r}`
            }

            function F() {
                return Date.now() / 1e3
            }! function() {
                const {
                    performance: t
                } = S.a;
                if (!t || !t.now) return F;
                const e = Date.now() - t.now(),
                    n = null == t.timeOrigin ? e : t.timeOrigin
            }();
            let U;
            const X = (() => {
                    const {
                        performance: t
                    } = S.a;
                    if (!t || !t.now) return void(U = "none");
                    const e = 36e5,
                        n = t.now(),
                        r = Date.now(),
                        o = t.timeOrigin ? Math.abs(t.timeOrigin + n - r) : e,
                        c = o < e,
                        d = t.timing && t.timing.navigationStart,
                        l = "number" == typeof d ? Math.abs(d + n - r) : e;
                    return c || l < e ? o <= l ? (U = "timeOrigin", t.timeOrigin) : (U = "navigationStart", d) : (U = "dateNow", r)
                })(),
                z = Object(S.b)();
            const W = {},
                G = {};

            function J(t, e) {
                W[t] = W[t] || [], W[t].push(e)
            }

            function V(t, e) {
                G[t] || (e(), G[t] = !0)
            }

            function Y(t, data) {
                const e = t && W[t];
                if (e)
                    for (const t of e) try {
                        t(data)
                    } catch (t) {}
            }
            const K = S.a;
            let Q;

            function Z() {
                if (! function() {
                        const t = z.chrome,
                            e = t && t.app && t.app.runtime,
                            n = "history" in z && !!z.history.pushState && !!z.history.replaceState;
                        return !e && n
                    }()) return;
                const t = K.onpopstate;

                function e(t) {
                    return function(...e) {
                        const n = e.length > 2 ? e[2] : void 0;
                        if (n) {
                            const t = Q,
                                e = String(n);
                            Q = e;
                            Y("history", {
                                from: t,
                                to: e
                            })
                        }
                        return t.apply(this, e)
                    }
                }
                K.onpopstate = function(...e) {
                    const n = K.location.href,
                        r = Q;
                    Q = n;
                    if (Y("history", {
                            from: r,
                            to: n
                        }), t) try {
                        return t.apply(this, e)
                    } catch (t) {}
                }, A(K.history, "pushState", e), A(K.history, "replaceState", e)
            }
            const tt = S.a;
            const et = (t, e, n) => {
                    let r, o;
                    return c => {
                        e.value >= 0 && (c || n) && (o = e.value - (r || 0), (o || void 0 === r) && (r = e.value, e.delta = o, t(e)))
                    }
                },
                nt = () => tt.__WEB_VITALS_POLYFILL__ ? tt.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || (() => {
                    const t = tt.performance.timing,
                        e = tt.performance.navigation.type,
                        n = {
                            entryType: "navigation",
                            startTime: 0,
                            type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
                        };
                    for (const e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
                    return n
                })()) : tt.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0],
                ot = () => {
                    const t = nt();
                    return t && t.activationStart || 0
                },
                it = (t, e) => {
                    const n = nt();
                    let r = "navigate";
                    return n && (r = tt.document && tt.document.prerendering || ot() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
                        name: t,
                        value: void 0 === e ? -1 : e,
                        rating: "good",
                        delta: 0,
                        entries: [],
                        id: `v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,
                        navigationType: r
                    }
                },
                at = (t, e, n) => {
                    try {
                        if (PerformanceObserver.supportedEntryTypes.includes(t)) {
                            const r = new PerformanceObserver((t => {
                                e(t.getEntries())
                            }));
                            return r.observe(Object.assign({
                                type: t,
                                buffered: !0
                            }, n || {})), r
                        }
                    } catch (t) {}
                },
                st = (t, e) => {
                    const n = r => {
                        "pagehide" !== r.type && "hidden" !== tt.document.visibilityState || (t(r), e && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)))
                    };
                    tt.document && (addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0))
                };
            let ct = -1;
            const ut = () => (ct < 0 && (tt.document && tt.document.visibilityState && (ct = "hidden" !== tt.document.visibilityState || tt.document.prerendering ? 1 / 0 : 0), st((({
                timeStamp: t
            }) => {
                ct = t
            }), !0)), {
                get firstHiddenTime() {
                    return ct
                }
            });
            let pt = 0,
                lt = 1 / 0,
                ft = 0;
            const mt = t => {
                t.forEach((t => {
                    t.interactionId && (lt = Math.min(lt, t.interactionId), ft = Math.max(ft, t.interactionId), pt = ft ? (ft - lt) / 7 + 1 : 0)
                }))
            };
            let ht;
            const gt = () => ht ? pt : performance.interactionCount || 0,
                vt = [],
                yt = {},
                bt = t => {
                    const e = vt[vt.length - 1],
                        n = yt[t.interactionId];
                    if (n || vt.length < 10 || t.duration > e.latency) {
                        if (n) n.entries.push(t), n.latency = Math.max(n.latency, t.duration);
                        else {
                            const e = {
                                id: t.interactionId,
                                latency: t.duration,
                                entries: [t]
                            };
                            yt[e.id] = e, vt.push(e)
                        }
                        vt.sort(((a, b) => b.latency - a.latency)), vt.splice(10).forEach((i => {
                            delete yt[i.id]
                        }))
                    }
                },
                Tt = (t, e) => {
                    e = e || {}, "interactionCount" in performance || ht || (ht = at("event", mt, {
                        type: "event",
                        buffered: !0,
                        durationThreshold: 0
                    }));
                    const n = it("INP");
                    let r;
                    const o = t => {
                            t.forEach((t => {
                                if (t.interactionId && bt(t), "first-input" === t.entryType) {
                                    !vt.some((e => e.entries.some((e => t.duration === e.duration && t.startTime === e.startTime)))) && bt(t)
                                }
                            }));
                            const e = (() => {
                                const t = Math.min(vt.length - 1, Math.floor(gt() / 50));
                                return vt[t]
                            })();
                            e && e.latency !== n.value && (n.value = e.latency, n.entries = e.entries, r())
                        },
                        c = at("event", o, {
                            durationThreshold: e.durationThreshold || 40
                        });
                    r = et(t, n, e.reportAllChanges), c && (c.observe({
                        type: "first-input",
                        buffered: !0
                    }), st((() => {
                        o(c.takeRecords()), n.value < 0 && gt() > 0 && (n.value = 0, n.entries = []), r(!0)
                    })))
                },
                _t = {},
                St = t => {
                    tt.document && (tt.document.prerendering ? addEventListener("prerenderingchange", (() => St(t)), !0) : "complete" !== tt.document.readyState ? addEventListener("load", (() => St(t)), !0) : setTimeout(t, 0))
                },
                wt = {},
                Ot = {};
            let kt, Et, jt, It, xt;

            function Ct(t, e) {
                return Mt(t, e), Ot[t] || (! function(t) {
                    const e = {};
                    "event" === t && (e.durationThreshold = 0);
                    at(t, (e => {
                        Lt(t, {
                            entries: e
                        })
                    }), e)
                }(t), Ot[t] = !0), Dt(t, e)
            }

            function Lt(t, data) {
                const e = wt[t];
                if (e && e.length)
                    for (const t of e) try {
                        t(data)
                    } catch (t) {}
            }

            function Rt() {
                return ((t, e = {}) => {
                    const n = it("CLS", 0);
                    let r, o = 0,
                        c = [];
                    const d = t => {
                            t.forEach((t => {
                                if (!t.hadRecentInput) {
                                    const e = c[0],
                                        d = c[c.length - 1];
                                    o && 0 !== c.length && t.startTime - d.startTime < 1e3 && t.startTime - e.startTime < 5e3 ? (o += t.value, c.push(t)) : (o = t.value, c = [t]), o > n.value && (n.value = o, n.entries = c, r && r())
                                }
                            }))
                        },
                        l = at("layout-shift", d);
                    if (l) {
                        r = et(t, n, e.reportAllChanges);
                        const o = () => {
                            d(l.takeRecords()), r(!0)
                        };
                        return st(o), o
                    }
                })((t => {
                    Lt("cls", {
                        metric: t
                    }), kt = t
                }), {
                    reportAllChanges: !0
                })
            }

            function qt() {
                return (t => {
                    const e = ut(),
                        n = it("FID");
                    let r;
                    const o = t => {
                            t.startTime < e.firstHiddenTime && (n.value = t.processingStart - t.startTime, n.entries.push(t), r(!0))
                        },
                        c = t => {
                            t.forEach(o)
                        },
                        d = at("first-input", c);
                    r = et(t, n), d && st((() => {
                        c(d.takeRecords()), d.disconnect()
                    }), !0)
                })((t => {
                    Lt("fid", {
                        metric: t
                    }), Et = t
                }))
            }

            function $t() {
                return (t => {
                    const e = ut(),
                        n = it("LCP");
                    let r;
                    const o = t => {
                            const o = t[t.length - 1];
                            if (o) {
                                const t = Math.max(o.startTime - ot(), 0);
                                t < e.firstHiddenTime && (n.value = t, n.entries = [o], r())
                            }
                        },
                        c = at("largest-contentful-paint", o);
                    if (c) {
                        r = et(t, n);
                        const e = () => {
                            _t[n.id] || (o(c.takeRecords()), c.disconnect(), _t[n.id] = !0, r(!0))
                        };
                        return ["keydown", "click"].forEach((t => {
                            tt.document && addEventListener(t, e, {
                                once: !0,
                                capture: !0
                            })
                        })), st(e, !0), e
                    }
                })((t => {
                    Lt("lcp", {
                        metric: t
                    }), jt = t
                }))
            }

            function Pt() {
                return ((t, e) => {
                    e = e || {};
                    const n = it("TTFB"),
                        r = et(t, n, e.reportAllChanges);
                    St((() => {
                        const t = nt();
                        if (t) {
                            if (n.value = Math.max(t.responseStart - ot(), 0), n.value < 0 || n.value > performance.now()) return;
                            n.entries = [t], r(!0)
                        }
                    }))
                })((t => {
                    Lt("ttfb", {
                        metric: t
                    }), It = t
                }))
            }

            function At() {
                return Tt((t => {
                    Lt("inp", {
                        metric: t
                    }), xt = t
                }))
            }

            function Ht(t, e, n, r, o = !1) {
                let c;
                return Mt(t, e), Ot[t] || (c = n(), Ot[t] = !0), r && e({
                    metric: r
                }), Dt(t, e, o ? c : void 0)
            }

            function Mt(t, e) {
                wt[t] = wt[t] || [], wt[t].push(e)
            }

            function Dt(t, e, n) {
                return () => {
                    n && n();
                    const r = wt[t];
                    if (!r) return;
                    const o = r.indexOf(e); - 1 !== o && r.splice(o, 1)
                }
            }
            var Nt = n(239),
                Bt = n(562),
                Ft = n(561),
                Ut = n(238),
                Xt = n(313);

            function zt(t) {
                if (!t) return {};
                const e = t.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                if (!e) return {};
                const n = e[6] || "",
                    r = e[8] || "";
                return {
                    host: e[4],
                    path: e[5],
                    protocol: e[2],
                    search: n,
                    hash: r,
                    relative: e[5] + n + r
                }
            }

            function Wt(t) {
                return "number" == typeof t && isFinite(t)
            }

            function Gt(t, {
                startTimestamp: e,
                ...n
            }) {
                return e && t.startTimestamp > e && (t.startTimestamp = e), t.startChild({
                    startTimestamp: e,
                    ...n
                })
            }

            function Jt(time) {
                return time / 1e3
            }

            function Vt() {
                return tt && tt.addEventListener && tt.performance
            }
            let Yt, Kt, Qt = 0,
                Zt = {};

            function te() {
                const t = Vt();
                if (t && X) {
                    t.mark && tt.performance.mark("sentry-tracing-init");
                    const e = Ht("fid", (({
                            metric: t
                        }) => {
                            const e = t.entries[t.entries.length - 1];
                            if (!e) return;
                            const n = Jt(X),
                                r = Jt(e.startTime);
                            Zt.fid = {
                                value: t.value,
                                unit: "millisecond"
                            }, Zt["mark.fid"] = {
                                value: n + r,
                                unit: "second"
                            }
                        }), qt, Et),
                        n = function(t, e = !1) {
                            return Ht("cls", t, Rt, kt, e)
                        }((({
                            metric: t
                        }) => {
                            const e = t.entries[t.entries.length - 1];
                            e && (Zt.cls = {
                                value: t.value,
                                unit: ""
                            }, Kt = e)
                        }), !0),
                        r = function(t, e = !1) {
                            return Ht("lcp", t, $t, jt, e)
                        }((({
                            metric: t
                        }) => {
                            const e = t.entries[t.entries.length - 1];
                            e && (Zt.lcp = {
                                value: t.value,
                                unit: "millisecond"
                            }, Yt = e)
                        }), !0),
                        o = function(t) {
                            return Ht("ttfb", t, Pt, It)
                        }((({
                            metric: t
                        }) => {
                            t.entries[t.entries.length - 1] && (Zt.ttfb = {
                                value: t.value,
                                unit: "millisecond"
                            })
                        }));
                    return () => {
                        e(), n(), r(), o()
                    }
                }
                return () => {}
            }

            function ee(t, e) {
                if (Vt() && X) {
                    const n = function(t, e) {
                        return n = ({
                            metric: n
                        }) => {
                            if (void 0 === n.value) return;
                            const r = n.entries.find((t => t.duration === n.value && void 0 !== ne[t.name])),
                                o = Object(h.k)();
                            if (!r || !o) return;
                            const c = ne[r.name],
                                d = o.getOptions(),
                                l = Jt(X + r.startTime),
                                f = Jt(n.value),
                                m = void 0 !== r.interactionId ? t[r.interactionId] : void 0;
                            if (void 0 === m) return;
                            const {
                                routeName: v,
                                parentContext: y,
                                activeTransaction: T,
                                user: _,
                                replayId: S
                            } = m, w = void 0 !== _ ? _.email || _.id || _.ip_address : void 0, O = void 0 !== T ? T.getProfileId() : void 0, span = new Nt.a({
                                startTimestamp: l,
                                endTimestamp: l + f,
                                op: `ui.interaction.${c}`,
                                name: L(r.target),
                                attributes: {
                                    release: d.release,
                                    environment: d.environment,
                                    transaction: v,
                                    ...void 0 !== w && "" !== w ? {
                                        user: w
                                    } : {},
                                    ...void 0 !== O ? {
                                        profile_id: O
                                    } : {},
                                    ...void 0 !== S ? {
                                        replay_id: S
                                    } : {}
                                },
                                exclusiveTime: n.value,
                                measurements: {
                                    inp: {
                                        value: n.value,
                                        unit: "millisecond"
                                    }
                                }
                            }), k = function(t, e, n) {
                                if (!Object(Ut.a)(e)) return !1;
                                let r;
                                return r = void 0 !== t && "function" == typeof e.tracesSampler ? e.tracesSampler({
                                    transactionContext: t,
                                    name: t.name,
                                    parentSampled: t.parentSampled,
                                    attributes: { ...t.data,
                                        ...t.attributes
                                    },
                                    location: tt.location
                                }) : void 0 !== t && void 0 !== t.sampled ? t.sampled : void 0 !== e.tracesSampleRate ? e.tracesSampleRate : 1, !!Object(Xt.a)(r) && (!0 === r ? n : !1 === r ? 0 : r * n)
                            }(y, d, e);
                            if (k && Math.random() < k) {
                                const t = span ? Object(Bt.a)([span], o.getDsn()) : void 0,
                                    e = o && o.getTransport();
                                e && t && e.send(t).then(null, (t => {}))
                            }
                        }, Ht("inp", n, At, xt);
                        var n
                    }(t, e);
                    return () => {
                        n()
                    }
                }
                return () => {}
            }
            const ne = {
                click: "click",
                pointerdown: "click",
                pointerup: "click",
                mousedown: "click",
                mouseup: "click",
                touchstart: "click",
                touchend: "click",
                mouseover: "hover",
                mouseout: "hover",
                mouseenter: "hover",
                mouseleave: "hover",
                pointerover: "hover",
                pointerout: "hover",
                pointerenter: "hover",
                pointerleave: "hover",
                dragstart: "drag",
                dragend: "drag",
                drag: "drag",
                dragenter: "drag",
                dragleave: "drag",
                dragover: "drag",
                drop: "drag",
                keydown: "press",
                keyup: "press",
                keypress: "press",
                input: "press"
            };

            function re(t) {
                const e = Vt();
                if (!e || !tt.performance.getEntries || !X) return;
                const n = Jt(X),
                    r = e.getEntries(),
                    {
                        op: o,
                        start_timestamp: c
                    } = Object(d.e)(t);
                if (r.slice(Qt).forEach((e => {
                        const r = Jt(e.startTime),
                            o = Jt(e.duration);
                        if (!("navigation" === t.op && c && n + r < c)) switch (e.entryType) {
                            case "navigation":
                                ! function(t, e, n) {
                                    ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach((r => {
                                            oe(t, e, r, n)
                                        })), oe(t, e, "secureConnection", n, "TLS/SSL", "connectEnd"), oe(t, e, "fetch", n, "cache", "domainLookupStart"), oe(t, e, "domainLookup", n, "DNS"),
                                        function(t, e, n) {
                                            e.responseEnd && (Gt(t, {
                                                op: "browser",
                                                origin: "auto.browser.browser.metrics",
                                                description: "request",
                                                startTimestamp: n + Jt(e.requestStart),
                                                endTimestamp: n + Jt(e.responseEnd)
                                            }), Gt(t, {
                                                op: "browser",
                                                origin: "auto.browser.browser.metrics",
                                                description: "response",
                                                startTimestamp: n + Jt(e.responseStart),
                                                endTimestamp: n + Jt(e.responseEnd)
                                            }))
                                        }(t, e, n)
                                }(t, e, n);
                                break;
                            case "mark":
                            case "paint":
                            case "measure":
                                {! function(t, e, n, r, o) {
                                        const c = o + n,
                                            d = c + r;
                                        Gt(t, {
                                            description: e.name,
                                            endTimestamp: d,
                                            op: e.entryType,
                                            origin: "auto.resource.browser.metrics",
                                            startTimestamp: c
                                        })
                                    }(t, e, r, o, n);
                                    const c = ut(),
                                        d = e.startTime < c.firstHiddenTime;
                                    "first-paint" === e.name && d && (Zt.fp = {
                                        value: e.startTime,
                                        unit: "millisecond"
                                    }),
                                    "first-contentful-paint" === e.name && d && (Zt.fcp = {
                                        value: e.startTime,
                                        unit: "millisecond"
                                    });
                                    break
                                }
                            case "resource":
                                ! function(t, e, n, r, o, c) {
                                    if ("xmlhttprequest" === e.initiatorType || "fetch" === e.initiatorType) return;
                                    const d = zt(n),
                                        data = {};
                                    ie(data, e, "transferSize", "http.response_transfer_size"), ie(data, e, "encodedBodySize", "http.response_content_length"), ie(data, e, "decodedBodySize", "http.decoded_response_content_length"), "renderBlockingStatus" in e && (data["resource.render_blocking_status"] = e.renderBlockingStatus);
                                    d.protocol && (data["url.scheme"] = d.protocol.split(":").pop());
                                    d.host && (data["server.address"] = d.host);
                                    data["url.same_origin"] = n.includes(tt.location.origin);
                                    const l = c + r,
                                        f = l + o;
                                    Gt(t, {
                                        description: n.replace(tt.location.origin, ""),
                                        endTimestamp: f,
                                        op: e.initiatorType ? `resource.${e.initiatorType}` : "resource.other",
                                        origin: "auto.resource.browser.metrics",
                                        startTimestamp: l,
                                        data: data
                                    })
                                }(t, e, e.name, r, o, n)
                        }
                    })), Qt = Math.max(r.length - 1, 0), function(t) {
                        const e = tt.navigator;
                        if (!e) return;
                        const n = e.connection;
                        n && (n.effectiveType && t.setTag("effectiveConnectionType", n.effectiveType), n.type && t.setTag("connectionType", n.type), Wt(n.rtt) && (Zt["connection.rtt"] = {
                            value: n.rtt,
                            unit: "millisecond"
                        }));
                        Wt(e.deviceMemory) && t.setTag("deviceMemory", `${e.deviceMemory} GB`);
                        Wt(e.hardwareConcurrency) && t.setTag("hardwareConcurrency", String(e.hardwareConcurrency))
                    }(t), "pageload" === o) {
                    ! function(t) {
                        const e = nt();
                        if (!e) return;
                        const {
                            responseStart: n,
                            requestStart: r
                        } = e;
                        r <= n && (t["ttfb.requestTime"] = {
                            value: n - r,
                            unit: "millisecond"
                        })
                    }(Zt), ["fcp", "fp", "lcp"].forEach((t => {
                        if (!Zt[t] || !c || n >= c) return;
                        const e = Zt[t].value,
                            r = n + Jt(e),
                            o = Math.abs(1e3 * (r - c));
                        Zt[t].value = o
                    }));
                    const e = Zt["mark.fid"];
                    e && Zt.fid && (Gt(t, {
                            description: "first input delay",
                            endTimestamp: e.value + Jt(Zt.fid.value),
                            op: "ui.action",
                            origin: "auto.ui.browser.metrics",
                            startTimestamp: e.value
                        }), delete Zt["mark.fid"]), "fcp" in Zt || delete Zt.cls, Object.keys(Zt).forEach((t => {
                            Object(Ft.a)(t, Zt[t].value, Zt[t].unit)
                        })),
                        function(t) {
                            Yt && (Yt.element && t.setTag("lcp.element", L(Yt.element)), Yt.id && t.setTag("lcp.id", Yt.id), Yt.url && t.setTag("lcp.url", Yt.url.trim().slice(0, 200)), t.setTag("lcp.size", Yt.size));
                            Kt && Kt.sources && Kt.sources.forEach(((source, e) => t.setTag(`cls.source.${e+1}`, L(source.node))))
                        }(t)
                }
                Yt = void 0, Kt = void 0, Zt = {}
            }

            function oe(t, e, n, r, o, c) {
                const d = c ? e[c] : e[`${n}End`],
                    l = e[`${n}Start`];
                l && d && Gt(t, {
                    op: "browser",
                    origin: "auto.browser.browser.metrics",
                    description: o || n,
                    startTimestamp: r + Jt(l),
                    endTimestamp: r + Jt(d)
                })
            }

            function ie(data, t, e, n) {
                const r = t[e];
                null != r && r < 2147483647 && (data[n] = r)
            }
            var ae = n(170),
                se = n(110);
            const ce = Object(S.b)();

            function ue() {
                if (!("fetch" in ce)) return !1;
                try {
                    return new Headers, new Request("http://www.example.com"), new Response, !0
                } catch (t) {
                    return !1
                }
            }

            function de(t) {
                return t && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(t.toString())
            }

            function pe() {
                (function() {
                    if ("string" == typeof EdgeRuntime) return !0;
                    if (!ue()) return !1;
                    if (de(ce.fetch)) return !0;
                    let t = !1;
                    const e = ce.document;
                    if (e && "function" == typeof e.createElement) try {
                        const n = e.createElement("iframe");
                        n.hidden = !0, e.head.appendChild(n), n.contentWindow && n.contentWindow.fetch && (t = de(n.contentWindow.fetch)), e.head.removeChild(n)
                    } catch (t) {}
                    return t
                })() && A(S.a, "fetch", (function(t) {
                    return function(...e) {
                        const {
                            method: n,
                            url: r
                        } = function(t) {
                            if (0 === t.length) return {
                                method: "GET",
                                url: ""
                            };
                            if (2 === t.length) {
                                const [e, n] = t;
                                return {
                                    url: fe(e),
                                    method: le(n, "method") ? String(n.method).toUpperCase() : "GET"
                                }
                            }
                            const e = t[0];
                            return {
                                url: fe(e),
                                method: le(e, "method") ? String(e.method).toUpperCase() : "GET"
                            }
                        }(e), o = {
                            args: e,
                            fetchData: {
                                method: n,
                                url: r
                            },
                            startTimestamp: Date.now()
                        };
                        return Y("fetch", { ...o
                        }), t.apply(S.a, e).then((t => (Y("fetch", { ...o,
                            endTimestamp: Date.now(),
                            response: t
                        }), t)), (t => {
                            throw Y("fetch", { ...o,
                                endTimestamp: Date.now(),
                                error: t
                            }), t
                        }))
                    }
                }))
            }

            function le(t, e) {
                return !!t && "object" == typeof t && !!t[e]
            }

            function fe(t) {
                return "string" == typeof t ? t : t ? le(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
            }
            const me = S.a;

            function he() {
                if (!me.XMLHttpRequest) return;
                const t = XMLHttpRequest.prototype;
                A(t, "open", (function(t) {
                    return function(...e) {
                        const n = Date.now(),
                            r = T(e[0]) ? e[0].toUpperCase() : void 0,
                            o = function(t) {
                                if (T(t)) return t;
                                try {
                                    return t.toString()
                                } catch (t) {}
                                return
                            }(e[1]);
                        if (!r || !o) return t.apply(this, e);
                        this.__sentry_xhr_v3__ = {
                            method: r,
                            url: o,
                            request_headers: {}
                        }, "POST" === r && o.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
                        const c = () => {
                            const t = this.__sentry_xhr_v3__;
                            if (t && 4 === this.readyState) {
                                try {
                                    t.status_code = this.status
                                } catch (t) {}
                                Y("xhr", {
                                    args: [r, o],
                                    endTimestamp: Date.now(),
                                    startTimestamp: n,
                                    xhr: this
                                })
                            }
                        };
                        return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? A(this, "onreadystatechange", (function(t) {
                            return function(...e) {
                                return c(), t.apply(this, e)
                            }
                        })) : this.addEventListener("readystatechange", c), A(this, "setRequestHeader", (function(t) {
                            return function(...e) {
                                const [header, n] = e, r = this.__sentry_xhr_v3__;
                                return r && T(header) && T(n) && (r.request_headers[header.toLowerCase()] = n), t.apply(this, e)
                            }
                        })), t.apply(this, e)
                    }
                })), A(t, "send", (function(t) {
                    return function(...e) {
                        const n = this.__sentry_xhr_v3__;
                        if (!n) return t.apply(this, e);
                        void 0 !== e[0] && (n.body = e[0]);
                        return Y("xhr", {
                            args: [n.method, n.url],
                            startTimestamp: Date.now(),
                            xhr: this
                        }), t.apply(this, e)
                    }
                }))
            }

            function ge(t, e, n, r, o = "auto.http.browser") {
                if (!Object(Ut.a)() || !t.fetchData) return;
                const m = e(t.fetchData.url);
                if (t.endTimestamp && m) {
                    const e = t.fetchData.__span;
                    if (!e) return;
                    const span = r[e];
                    return void(span && (! function(span, t) {
                        if (t.response) {
                            Object(ae.c)(span, t.response.status);
                            const e = t.response && t.response.headers && t.response.headers.get("content-length");
                            if (e) {
                                const t = parseInt(e);
                                t > 0 && span.setAttribute("http.response_content_length", t)
                            }
                        } else t.error && span.setStatus("internal_error");
                        span.end()
                    }(span, t), delete r[e]))
                }
                const v = Object(h.l)(),
                    y = Object(h.k)(),
                    {
                        method: T,
                        url: S
                    } = t.fetchData,
                    w = function(t) {
                        try {
                            return new URL(t).href
                        } catch (t) {
                            return
                        }
                    }(S),
                    k = w ? zt(w).host : void 0,
                    span = m ? Object(f.e)({
                        name: `${T} ${S}`,
                        onlyIfParent: !0,
                        attributes: {
                            url: S,
                            type: "fetch",
                            "http.method": T,
                            "http.url": w,
                            "server.address": k,
                            [l.c]: o
                        },
                        op: "http.client"
                    }) : void 0;
                if (span && (t.fetchData.__span = span.spanContext().spanId, r[span.spanContext().spanId] = span), n(t.fetchData.url) && y) {
                    const e = t.args[0];
                    t.args[1] = t.args[1] || {};
                    const n = t.args[1];
                    n.headers = function(t, e, n, r, o) {
                        const span = o || n.getSpan(),
                            l = Object(c.e)(),
                            {
                                traceId: f,
                                spanId: m,
                                sampled: h,
                                dsc: v
                            } = { ...l.getPropagationContext(),
                                ...n.getPropagationContext()
                            },
                            y = span ? Object(d.g)(span) : B(f, m, h),
                            T = I(v || (span ? Object(se.b)(span) : Object(se.a)(f, e, n))),
                            S = r.headers || ("undefined" != typeof Request && _(t, Request) ? t.headers : void 0);
                        if (S) {
                            if ("undefined" != typeof Headers && _(S, Headers)) {
                                const t = new Headers(S);
                                return t.append("sentry-trace", y), T && t.append(O, T), t
                            }
                            if (Array.isArray(S)) {
                                const t = [...S, ["sentry-trace", y]];
                                return T && t.push([O, T]), t
                            } {
                                const t = "baggage" in S ? S.baggage : void 0,
                                    e = [];
                                return Array.isArray(t) ? e.push(...t) : t && e.push(t), T && e.push(T), { ...S,
                                    "sentry-trace": y,
                                    baggage: e.length > 0 ? e.join(",") : void 0
                                }
                            }
                        }
                        return {
                            "sentry-trace": y,
                            baggage: T
                        }
                    }(e, y, v, n, span)
                }
                return span
            }
            const ve = ["localhost", /^\/(?!\/)/],
                ye = {
                    traceFetch: !0,
                    traceXHR: !0,
                    enableHTTPTimings: !0,
                    tracingOrigins: ve,
                    tracePropagationTargets: ve
                };

            function be(t) {
                const {
                    traceFetch: e,
                    traceXHR: n,
                    tracePropagationTargets: r,
                    tracingOrigins: o,
                    shouldCreateSpanForRequest: m,
                    enableHTTPTimings: v
                } = {
                    traceFetch: ye.traceFetch,
                    traceXHR: ye.traceXHR,
                    ...t
                }, y = "function" == typeof m ? m : t => !0, T = t => function(t, e) {
                    return function(t, e = [], n = !1) {
                        return e.some((pattern => P(t, pattern, n)))
                    }(t, e || ve)
                }(t, r || o), _ = {};
                var S;
                e && function(t) {
                    const e = "fetch";
                    J(e, t), V(e, pe)
                }((t => {
                    const e = ge(t, y, T, _);
                    if (e) {
                        const n = Se(t.fetchData.url),
                            r = n ? zt(n).host : void 0;
                        e.setAttributes({
                            "http.url": n,
                            "server.address": r
                        })
                    }
                    v && e && Te(e)
                })), n && (S = t => {
                    const e = function(t, e, n, r) {
                        const o = t.xhr,
                            m = o && o.__sentry_xhr_v3__;
                        if (!Object(Ut.a)() || !o || o.__sentry_own_request__ || !m) return;
                        const v = e(m.url);
                        if (t.endTimestamp && v) {
                            const t = o.__sentry_xhr_span_id__;
                            if (!t) return;
                            const span = r[t];
                            return void(span && void 0 !== m.status_code && (Object(ae.c)(span, m.status_code), span.end(), delete r[t]))
                        }
                        const y = Object(h.l)(),
                            T = Object(c.e)(),
                            _ = Se(m.url),
                            S = _ ? zt(_).host : void 0,
                            span = v ? Object(f.e)({
                                name: `${m.method} ${m.url}`,
                                onlyIfParent: !0,
                                attributes: {
                                    type: "xhr",
                                    "http.method": m.method,
                                    "http.url": _,
                                    url: m.url,
                                    "server.address": S,
                                    [l.c]: "auto.http.browser"
                                },
                                op: "http.client"
                            }) : void 0;
                        span && (o.__sentry_xhr_span_id__ = span.spanContext().spanId, r[o.__sentry_xhr_span_id__] = span);
                        const w = Object(h.k)();
                        if (o.setRequestHeader && n(m.url) && w) {
                            const {
                                traceId: t,
                                spanId: e,
                                sampled: n,
                                dsc: r
                            } = { ...T.getPropagationContext(),
                                ...y.getPropagationContext()
                            };
                            ! function(t, e, n) {
                                try {
                                    t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(O, n)
                                } catch (t) {}
                            }(o, span ? Object(d.g)(span) : B(t, e, n), I(r || (span ? Object(se.b)(span) : Object(se.a)(t, w, y))))
                        }
                        return span
                    }(t, y, T, _);
                    v && e && Te(e)
                }, J("xhr", S), V("xhr", he))
            }

            function Te(span) {
                const {
                    url: t
                } = Object(d.e)(span).data || {};
                if (!t || "string" != typeof t) return;
                const e = Ct("resource", (({
                    entries: n
                }) => {
                    n.forEach((n => {
                        if (function(t) {
                                return "resource" === t.entryType && "initiatorType" in t && "string" == typeof t.nextHopProtocol && ("fetch" === t.initiatorType || "xmlhttprequest" === t.initiatorType)
                            }(n) && n.name.endsWith(t)) {
                            (function(t) {
                                const {
                                    name: e,
                                    version: n
                                } = function(t) {
                                    let e = "unknown",
                                        n = "unknown",
                                        r = "";
                                    for (const o of t) {
                                        if ("/" === o) {
                                            [e, n] = t.split("/");
                                            break
                                        }
                                        if (!isNaN(Number(o))) {
                                            e = "h" === r ? "http" : r, n = t.split(r)[1];
                                            break
                                        }
                                        r += o
                                    }
                                    r === t && (e = r);
                                    return {
                                        name: e,
                                        version: n
                                    }
                                }(t.nextHopProtocol), r = [];
                                if (r.push(["network.protocol.version", n], ["network.protocol.name", e]), !X) return r;
                                return [...r, ["http.request.redirect_start", _e(t.redirectStart)],
                                    ["http.request.fetch_start", _e(t.fetchStart)],
                                    ["http.request.domain_lookup_start", _e(t.domainLookupStart)],
                                    ["http.request.domain_lookup_end", _e(t.domainLookupEnd)],
                                    ["http.request.connect_start", _e(t.connectStart)],
                                    ["http.request.secure_connection_start", _e(t.secureConnectionStart)],
                                    ["http.request.connection_end", _e(t.connectEnd)],
                                    ["http.request.request_start", _e(t.requestStart)],
                                    ["http.request.response_start", _e(t.responseStart)],
                                    ["http.request.response_end", _e(t.responseEnd)]
                                ]
                            })(n).forEach((data => span.setAttribute(...data))), setTimeout(e)
                        }
                    }))
                }))
            }

            function _e(time = 0) {
                return ((X || performance.timeOrigin) + time) / 1e3
            }

            function Se(t) {
                try {
                    return new URL(t, tt.location.origin).href
                } catch (t) {
                    return
                }
            }
            const we = { ...r.b,
                    instrumentNavigation: !0,
                    instrumentPageLoad: !0,
                    markBackgroundSpan: !0,
                    enableLongTask: !0,
                    enableInp: !1,
                    interactionsSampleRate: 1,
                    _experiments: {},
                    ...ye
                },
                Oe = (t = {}) => {
                    Object(o.a)(), !t.tracePropagationTargets && t.tracingOrigins && (t.tracePropagationTargets = t.tracingOrigins);
                    const e = { ...we,
                            ...t
                        },
                        n = te(),
                        r = {};
                    e.enableInp && ee(r, e.interactionsSampleRate), e.enableLongTask && Ct("longtask", (({
                        entries: t
                    }) => {
                        for (const e of t) {
                            const t = Object(m.b)();
                            if (!t) return;
                            const n = Jt(X + e.startTime),
                                r = Jt(e.duration);
                            t.startChild({
                                description: "Main UI thread blocked",
                                op: "ui.long-task",
                                origin: "auto.ui.browser.metrics",
                                startTimestamp: n,
                                endTimestamp: n + r
                            })
                        }
                    })), e._experiments.enableInteractions && Ct("event", (({
                        entries: t
                    }) => {
                        for (const e of t) {
                            const t = Object(m.b)();
                            if (!t) return;
                            if ("click" === e.name) {
                                const n = Jt(X + e.startTime),
                                    r = Jt(e.duration),
                                    span = {
                                        description: L(e.target),
                                        op: `ui.interaction.${e.name}`,
                                        origin: "auto.ui.browser.metrics",
                                        startTimestamp: n,
                                        endTimestamp: n + r
                                    },
                                    o = $(e.target);
                                o && (span.attributes = {
                                    "ui.component_name": o
                                }), t.startChild(span)
                            }
                        }
                    }));
                    const v = {
                        name: void 0,
                        context: void 0
                    };

                    function y(t) {
                        const r = Object(c.c)(),
                            {
                                beforeStartSpan: d,
                                idleTimeout: l,
                                finalTimeout: f,
                                heartbeatInterval: m
                            } = e,
                            h = "pageload" === t.op;
                        let y;
                        if (h) {
                            const e = h ? Ee("sentry-trace") : "",
                                n = h ? Ee("baggage") : void 0,
                                {
                                    traceId: r,
                                    dsc: o,
                                    parentSpanId: c,
                                    sampled: d
                                } = function(t, e) {
                                    const n = N(t),
                                        r = j(e),
                                        {
                                            traceId: o,
                                            parentSpanId: c,
                                            parentSampled: d
                                        } = n || {};
                                    return n ? {
                                        traceId: o || M(),
                                        parentSpanId: c || M().substring(16),
                                        spanId: M().substring(16),
                                        sampled: d,
                                        dsc: r || {}
                                    } : {
                                        traceId: o || M(),
                                        spanId: M().substring(16)
                                    }
                                }(e, n);
                            y = {
                                traceId: r,
                                parentSpanId: c,
                                parentSampled: d,
                                ...t,
                                metadata: { ...t.metadata,
                                    dynamicSamplingContext: o
                                },
                                trimEnd: !0
                            }
                        } else y = {
                            trimEnd: !0,
                            ...t
                        };
                        const T = d ? d(y) : y;
                        T.metadata = T.name !== y.name ? { ...T.metadata,
                            source: "custom"
                        } : T.metadata, v.name = T.name, v.context = T, T.sampled;
                        const {
                            location: _
                        } = tt, S = Object(o.b)(r, T, l, f, !0, {
                            location: _
                        }, m, h);
                        return h && tt.document && (tt.document.addEventListener("readystatechange", (() => {
                            ["interactive", "complete"].includes(tt.document.readyState) && S.sendAutoFinishSignal()
                        })), ["interactive", "complete"].includes(tt.document.readyState) && S.sendAutoFinishSignal()), S.registerBeforeFinishCallback((t => {
                            n(), re(t)
                        })), S
                    }
                    return {
                        name: "BrowserTracing",
                        setupOnce: () => {},
                        afterAllSetup(t) {
                            const n = t.getOptions(),
                                {
                                    markBackgroundSpan: T,
                                    traceFetch: _,
                                    traceXHR: S,
                                    shouldCreateSpanForRequest: w,
                                    enableHTTPTimings: O,
                                    _experiments: k
                                } = e,
                                E = n && n.tracePropagationTargets,
                                j = E || e.tracePropagationTargets;
                            let I;
                            let x = tt.location && tt.location.href;
                            if (t.on && (t.on("startNavigationSpan", (t => {
                                    I && I.end(), I = y({
                                        op: "navigation",
                                        ...t
                                    })
                                })), t.on("startPageLoadSpan", (t => {
                                    I && I.end(), I = y({
                                        op: "pageload",
                                        ...t
                                    })
                                }))), e.instrumentPageLoad && t.emit && tt.location) {
                                const e = {
                                    name: tt.location.pathname,
                                    startTimestamp: X ? X / 1e3 : void 0,
                                    origin: "auto.pageload.browser",
                                    attributes: {
                                        [l.e]: "url"
                                    }
                                };
                                ! function(t, e) {
                                    if (!t.emit) return;
                                    t.emit("startPageLoadSpan", e);
                                    const span = Object(f.b)();
                                    span && Object(d.e)(span).op
                                }(t, e)
                            }
                            e.instrumentNavigation && t.emit && tt.location && function(t) {
                                const e = "history";
                                J(e, t), V(e, Z)
                            }((({
                                to: e,
                                from: n
                            }) => {
                                if (void 0 === n && x && -1 !== x.indexOf(e)) x = void 0;
                                else if (n !== e) {
                                    x = void 0;
                                    const e = {
                                        name: tt.location.pathname,
                                        origin: "auto.navigation.browser",
                                        attributes: {
                                            [l.e]: "url"
                                        }
                                    };
                                    ke(t, e)
                                }
                            })), T && tt.document && tt.document.addEventListener("visibilitychange", (() => {
                                const t = Object(m.b)();
                                if (tt.document.hidden && t) {
                                    const e = "cancelled",
                                        {
                                            op: n,
                                            status: r
                                        } = Object(d.e)(t);
                                    r || t.setStatus(e), t.setTag("visibilitychange", "document.hidden"), t.end()
                                }
                            })), k.enableInteractions && function(t, e) {
                                let n;
                                const r = () => {
                                    const {
                                        idleTimeout: r,
                                        finalTimeout: d,
                                        heartbeatInterval: f
                                    } = t, h = "ui.action.click", v = Object(m.b)();
                                    if (v && v.op && ["navigation", "pageload"].includes(v.op)) return;
                                    if (n && (n.setFinishReason("interactionInterrupted"), n.end(), n = void 0), !e.name) return;
                                    const {
                                        location: y
                                    } = tt, T = {
                                        name: e.name,
                                        op: h,
                                        trimEnd: !0,
                                        data: {
                                            [l.e]: e.context ? je(e.context) : "url"
                                        }
                                    };
                                    n = Object(o.b)(Object(c.c)(), T, r, d, !0, {
                                        location: y
                                    }, f)
                                };
                                ["click"].forEach((t => {
                                    tt.document && addEventListener(t, r, {
                                        once: !1,
                                        capture: !0
                                    })
                                }))
                            }(e, v), e.enableInp && function(t, e) {
                                const n = ({
                                    entries: n
                                }) => {
                                    const r = Object(h.k)(),
                                        o = void 0 !== r && void 0 !== r.getIntegrationByName ? r.getIntegrationByName("Replay") : void 0,
                                        c = void 0 !== o ? o.getReplayId() : void 0,
                                        d = Object(m.b)(),
                                        l = Object(h.l)(),
                                        f = void 0 !== l ? l.getUser() : void 0;
                                    n.forEach((n => {
                                        if (function(t) {
                                                return "duration" in t
                                            }(n)) {
                                            const r = n.interactionId;
                                            if (void 0 === r) return;
                                            const o = t[r],
                                                l = n.duration,
                                                m = n.startTime,
                                                h = Object.keys(t),
                                                v = h.length > 0 ? h.reduce(((a, b) => t[a].duration < t[b].duration ? a : b)) : void 0;
                                            if ("first-input" === n.entryType) {
                                                if (h.map((e => t[e])).some((t => t.duration === l && t.startTime === m))) return
                                            }
                                            if (!r) return;
                                            if (o) o.duration = Math.max(o.duration, l);
                                            else if (h.length < 10 || void 0 === v || l > t[v].duration) {
                                                const n = e.name,
                                                    o = e.context;
                                                n && o && (v && Object.keys(t).length >= 10 && delete t[v], t[r] = {
                                                    routeName: n,
                                                    duration: l,
                                                    parentContext: o,
                                                    user: f,
                                                    activeTransaction: d,
                                                    replayId: c,
                                                    startTime: m
                                                })
                                            }
                                        }
                                    }))
                                };
                                Ct("event", n), Ct("first-input", n)
                            }(r, v), be({
                                traceFetch: _,
                                traceXHR: S,
                                tracePropagationTargets: j,
                                shouldCreateSpanForRequest: w,
                                enableHTTPTimings: O
                            })
                        },
                        options: e
                    }
                };

            function ke(t, e) {
                if (!t.emit) return;
                t.emit("startNavigationSpan", e);
                const span = Object(f.b)();
                return "navigation" === (span && Object(d.e)(span).op) ? span : void 0
            }

            function Ee(t) {
                const e = (n = `meta[name=${t}]`, C.document && C.document.querySelector ? C.document.querySelector(n) : null);
                var n;
                return e ? e.getAttribute("content") : void 0
            }

            function je(t) {
                const e = t.attributes && t.attributes[l.e],
                    n = t.data && t.data[l.e],
                    r = t.metadata && t.metadata.source;
                return e || n || r
            }
        }
    }
]);