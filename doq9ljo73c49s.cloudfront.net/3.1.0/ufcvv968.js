/*!
 * Web analytics for Snowplow v3.1.0 (http://bit.ly/sp-js)
 * Copyright 2021 Snowplow Analytics Ltd, 2010 Anthon Pang
 * Licensed under BSD-3-Clause
 */

"use strict";
! function() {
    function e(e, n) {
        var t, o = {};
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && 0 > n.indexOf(t) && (o[t] = e[t]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (t = Object.getOwnPropertySymbols(e); r < t.length; r++) 0 > n.indexOf(t[r]) && Object.prototype.propertyIsEnumerable.call(e, t[r]) && (o[t[r]] = e[t[r]])
        }
        return o
    }

    function n(e, n) {
        for (var t = 0, o = n.length, r = e.length; t < o; t++, r++) e[r] = n[t];
        return e
    }

    function t(e) {
        var n = {
            exports: {}
        };
        return e(n, n.exports), n.exports
    }

    function o(e) {
        if (!e) return e;
        var n = 0,
            t = 0,
            o = [];
        if (e) {
            e = unescape(encodeURIComponent(e));
            do {
                var r = e.charCodeAt(n++),
                    i = e.charCodeAt(n++),
                    a = e.charCodeAt(n++),
                    c = r << 16 | i << 8 | a;
                r = c >> 18 & 63, i = c >> 12 & 63, a = c >> 6 & 63, c &= 63, o[t++] = Ve.charAt(r) + Ve.charAt(i) + Ve.charAt(a) + Ve.charAt(c)
            } while (n < e.length);
            n = o.join(""), e = ((e = e.length % 3) ? n.slice(0, e - 3) : n) + "===".slice(e || 3)
        }
        return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
    }

    function r() {
        var e, n = {},
            t = [],
            o = [],
            r = function(e, t) {
                null != t && "" !== t && (n[e] = t)
            };
        return {
            add: r,
            addDict: function(e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r(n, e[n])
            },
            addJson: function(e, n, r) {
                r && i(r) && (e = {
                    keyIfEncoded: e,
                    keyIfNotEncoded: n,
                    json: r
                }, o.push(e), t.push(e))
            },
            getPayload: function() {
                return n
            },
            getJson: function() {
                return t
            },
            withJsonProcessor: function(n) {
                e = n
            },
            build: function() {
                return null == e || e(this, o), n
            }
        }
    }

    function i(e) {
        if (!a(e)) return !1;
        for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n)) return !0;
        return !1
    }

    function a(e) {
        return null != e && (e.constructor === {}.constructor || e.constructor === [].constructor)
    }

    function c() {
        var e = [],
            n = [];
        return {
            getGlobalPrimitives: function() {
                return e
            },
            getConditionalProviders: function() {
                return n
            },
            addGlobalContexts: function(t) {
                for (var o = [], r = [], i = 0; i < t.length; i++) {
                    var a = t[i];
                    w(a) ? o.push(a) : v(a) && r.push(a)
                }
                e = e.concat(r), n = n.concat(o)
            },
            clearGlobalContexts: function() {
                n = [], e = []
            },
            removeGlobalContexts: function(t) {
                for (var o = function(t) {
                        w(t) ? n = n.filter((function(e) {
                            return JSON.stringify(e) === JSON.stringify(t)
                        })) : v(t) && (e = e.filter((function(e) {
                            return JSON.stringify(e) === JSON.stringify(t)
                        })))
                    }, r = 0; r < t.length; r++) o(t[r])
            },
            getApplicableContexts: function(t) {
                e: {
                    for (var o = 0, r = t.getJson(); o < r.length; o++) {
                        var i = r[o];
                        if ("ue_px" === i.keyIfEncoded && "object" == typeof i.json.data && "string" == typeof(i = i.json.data.schema)) {
                            o = i;
                            break e
                        }
                    }
                    o = ""
                }
                i = "string" == typeof(r = t.getPayload().e) ? r : "",
                r = [];
                var a = T(e, t, i, o);
                return r.push.apply(r, a),
                t = function(e, n, t, o) {
                    var r;
                    return e = A(e).map((function(e) {
                        e: {
                            if (h(e)) {
                                var r = e[0],
                                    i = !1;
                                try {
                                    i = r({
                                        event: n.getPayload(),
                                        eventType: t,
                                        eventSchema: o
                                    })
                                } catch (e) {
                                    i = !1
                                }
                                if (!0 === i) {
                                    e = T(e[1], n, t, o);
                                    break e
                                }
                            } else if (y(e) && function(e, n) {
                                    var t = 0,
                                        o = 0,
                                        r = e.accept;
                                    return Array.isArray(r) ? e.accept.some((function(e) {
                                        return k(e, n)
                                    })) && o++ : "string" == typeof r && k(r, n) && o++, r = e.reject, Array.isArray(r) ? e.reject.some((function(e) {
                                        return k(e, n)
                                    })) && t++ : "string" == typeof r && k(r, n) && t++, 0 < o && 0 === t
                                }(e[0], o)) {
                                e = T(e[1], n, t, o);
                                break e
                            }
                            e = []
                        }
                        if (e && 0 !== e.length) return e
                    })), (r = []).concat.apply(r, e.filter((function(e) {
                        return null != e && e.filter(Boolean)
                    })))
                }(n, t, i, o),
                r.push.apply(r, t),
                r
            }
        }
    }

    function s(e) {
        for (var n, t = [], o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
        return null !== (n = null == e ? void 0 : e.map((function(e) {
            if ("function" != typeof e) return e;
            try {
                return e.apply(void 0, t)
            } catch (e) {}
        })).filter(Boolean)) && void 0 !== n ? n : []
    }

    function u(e) {
        return !!((e = e.split(".")) && 1 < e.length) && function(e) {
            if ("*" === e[0] || "*" === e[1]) return !1;
            if (0 < e.slice(2).length) {
                var n = !1,
                    t = 0;
                for (e = e.slice(2); t < e.length; t++)
                    if ("*" === e[t]) n = !0;
                    else if (n) return !1;
                return !0
            }
            return 2 == e.length
        }(e)
    }

    function l(e) {
        if (null !== (e = /^iglu:((?:(?:[a-zA-Z0-9-_]+|\*).)+(?:[a-zA-Z0-9-_]+|\*))\/([a-zA-Z0-9-_.]+|\*)\/jsonschema\/([1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)-(0|[1-9][0-9]*|\*)$/.exec(e)) && u(e[1])) return e.slice(1, 6)
    }

    function f(e) {
        if (e = l(e)) {
            var n = e[0];
            return 5 === e.length && u(n)
        }
        return !1
    }

    function d(e) {
        return Array.isArray(e) && e.every((function(e) {
            return "string" == typeof e
        }))
    }

    function m(e) {
        return d(e) ? e.every((function(e) {
            return f(e)
        })) : "string" == typeof e && f(e)
    }

    function p(e) {
        return !!(i(e) && "schema" in e && "data" in e) && ("string" == typeof e.schema && "object" == typeof e.data)
    }

    function g(e) {
        return "function" == typeof e && 1 >= e.length
    }

    function v(e) {
        return g(e) || p(e)
    }

    function h(e) {
        return !(!Array.isArray(e) || 2 !== e.length) && (Array.isArray(e[1]) ? g(e[0]) && e[1].every(v) : g(e[0]) && v(e[1]))
    }

    function y(e) {
        return !(!Array.isArray(e) || 2 !== e.length) && (!! function(e) {
            var n = 0;
            if (null != e && "object" == typeof e && !Array.isArray(e)) {
                if (Object.prototype.hasOwnProperty.call(e, "accept")) {
                    if (!m(e.accept)) return !1;
                    n += 1
                }
                if (Object.prototype.hasOwnProperty.call(e, "reject")) {
                    if (!m(e.reject)) return !1;
                    n += 1
                }
                return 0 < n && 2 >= n
            }
            return !1
        }(e[0]) && (Array.isArray(e[1]) ? e[1].every(v) : v(e[1])))
    }

    function w(e) {
        return h(e) || y(e)
    }

    function k(e, n) {
        if (!f(e)) return !1;
        if (e = l(e), n = null !== (n = /^iglu:([a-zA-Z0-9-_.]+)\/([a-zA-Z0-9-_]+)\/jsonschema\/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$/.exec(n)) ? n.slice(1, 6) : void 0, e && n) {
            if (! function(e, n) {
                    if (n = n.split("."), e = e.split("."), n && e) {
                        if (n.length !== e.length) return !1;
                        for (var t = 0; t < e.length; t++)
                            if (!b(n[t], e[t])) return !1;
                        return !0
                    }
                    return !1
                }(e[0], n[0])) return !1;
            for (var t = 1; 5 > t; t++)
                if (!b(e[t], n[t])) return !1;
            return !0
        }
        return !1
    }

    function b(e, n) {
        return e && n && "*" === e || e === n
    }

    function A(e) {
        return Array.isArray(e) ? e : [e]
    }

    function T(e, n, t, o) {
        var r;
        return e = A(e).map((function(e) {
            e: if (p(e)) e = [e];
                else {
                    if (g(e)) {
                        n: {
                            var r = void 0;
                            try {
                                if (r = e({
                                        event: n.getPayload(),
                                        eventType: t,
                                        eventSchema: o
                                    }), Array.isArray(r) && r.every(p) || p(r)) {
                                    var i = r;
                                    break n
                                }
                                i = void 0;
                                break n
                            } catch (e) {}
                            i = void 0
                        }
                        if (p(i)) {
                            e = [i];
                            break e
                        }
                        if (Array.isArray(i)) {
                            e = i;
                            break e
                        }
                    }
                    e = void 0
                }if (e && 0 !== e.length) return e
        })), (r = []).concat.apply(r, e.filter((function(e) {
            return null != e && e.filter(Boolean)
        })))
    }

    function P(e) {
        void 0 === e && (e = {});
        var n = e.base64,
            t = e.corePlugins,
            r = null != t ? t : [];
        e = function(e, n, t) {
            function r(e, n) {
                e = s.getApplicableContexts(e);
                var t = [];
                return n && n.length && t.push.apply(t, n), e && e.length && t.push.apply(t, e), t
            }
            var i = function(e) {
                    return {
                        addPluginContexts: function(n) {
                            var t = null != n ? n : [];
                            return e.forEach((function(e) {
                                try {
                                    e.contexts && t.push.apply(t, e.contexts())
                                } catch (e) {
                                    Re.error("Error adding plugin contexts", e)
                                }
                            })), t
                        }
                    }
                }(n),
                s = c(),
                u = e,
                l = {};
            return {
                track: function(e, a, c) {
                    e.withJsonProcessor(function(e) {
                        return function(n, t) {
                            for (var r = 0; r < t.length; r++) {
                                var i = t[r],
                                    a = JSON.stringify(i.json);
                                e ? n.add(i.keyIfEncoded, o(a)) : n.add(i.keyIfNotEncoded, a)
                            }
                            t.length = 0
                        }
                    }(u)), e.add("eid", Fe.v4()), e.addDict(l), c = function(e) {
                        return null == e ? {
                            type: "dtm",
                            value: (new Date).getTime()
                        } : "number" == typeof e ? {
                            type: "dtm",
                            value: e
                        } : "ttm" === e.type ? {
                            type: "ttm",
                            value: e.value
                        } : {
                            type: "dtm",
                            value: e.value || (new Date).getTime()
                        }
                    }(c), e.add(c.type, c.value.toString()), void 0 !== (a = (a = r(e, i.addPluginContexts(a))) && a.length ? {
                        schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                        data: a
                    } : void 0) && e.addJson("cx", "co", a), n.forEach((function(n) {
                        try {
                            n.beforeTrack && n.beforeTrack(e)
                        } catch (e) {
                            Re.error("Plugin beforeTrack", e)
                        }
                    })), "function" == typeof t && t(e);
                    var s = e.build();
                    return n.forEach((function(e) {
                        try {
                            e.afterTrack && e.afterTrack(s)
                        } catch (e) {
                            Re.error("Plugin afterTrack", e)
                        }
                    })), s
                },
                addPayloadPair: function(e, n) {
                    l[e] = n
                },
                getBase64Encoding: function() {
                    return u
                },
                setBase64Encoding: function(e) {
                    u = e
                },
                addPayloadDict: function(e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (l[n] = e[n])
                },
                resetPayloadPairs: function(e) {
                    l = a(e) ? e : {}
                },
                setTrackerVersion: function(e) {
                    l.tv = e
                },
                setTrackerNamespace: function(e) {
                    l.tna = e
                },
                setAppId: function(e) {
                    l.aid = e
                },
                setPlatform: function(e) {
                    l.p = e
                },
                setUserId: function(e) {
                    l.uid = e
                },
                setScreenResolution: function(e, n) {
                    l.res = e + "x" + n
                },
                setViewport: function(e, n) {
                    l.vp = e + "x" + n
                },
                setColorDepth: function(e) {
                    l.cd = e
                },
                setTimezone: function(e) {
                    l.tz = e
                },
                setLang: function(e) {
                    l.lang = e
                },
                setIpAddress: function(e) {
                    l.ip = e
                },
                setUseragent: function(e) {
                    l.ua = e
                },
                addGlobalContexts: function(e) {
                    s.addGlobalContexts(e)
                },
                clearGlobalContexts: function() {
                    s.clearGlobalContexts()
                },
                removeGlobalContexts: function(e) {
                    s.removeGlobalContexts(e)
                }
            }
        }(null == n || n, r, e.callback);
        var i = Oe(Oe({}, e), {
            addPlugin: function(e) {
                var n, t;
                e = e.plugin, r.push(e), null === (n = e.logger) || void 0 === n || n.call(e, Re), null === (t = e.activateCorePlugin) || void 0 === t || t.call(e, i)
            }
        });
        return null == r || r.forEach((function(e) {
            var n, t;
            null === (n = e.logger) || void 0 === n || n.call(e, Re), null === (t = e.activateCorePlugin) || void 0 === t || t.call(e, i)
        })), i
    }

    function _(e) {
        var n = e.event;
        return e = {
            schema: "iglu:com.snowplowanalytics.snowplow/unstruct_event/jsonschema/1-0-0",
            data: {
                schema: e = n.schema,
                data: n.data
            }
        }, (n = r()).add("e", "ue"), n.addJson("ue_px", "ue_pr", e), n
    }

    function S(e) {
        var n = e.pageUrl,
            t = e.pageTitle;
        e = e.referrer;
        var o = r();
        return o.add("e", "pv"), o.add("url", n), o.add("page", t), o.add("refr", e), o
    }

    function C(e) {
        var n = e.pageUrl,
            t = e.pageTitle,
            o = e.referrer,
            i = e.minXOffset,
            a = e.maxXOffset,
            c = e.minYOffset;
        e = e.maxYOffset;
        var s = r();
        return s.add("e", "pp"), s.add("url", n), s.add("page", t), s.add("refr", o), i && !isNaN(Number(i)) && s.add("pp_mix", i.toString()), a && !isNaN(Number(a)) && s.add("pp_max", a.toString()), c && !isNaN(Number(c)) && s.add("pp_miy", c.toString()), e && !isNaN(Number(e)) && s.add("pp_may", e.toString()), s
    }

    function O(e) {
        var n = e.orderId,
            t = e.sku,
            o = e.price,
            i = e.name,
            a = e.category,
            c = e.quantity;
        e = e.currency;
        var s = r();
        return s.add("e", "ti"), s.add("ti_id", n), s.add("ti_sk", t), s.add("ti_nm", i), s.add("ti_ca", a), s.add("ti_pr", o), s.add("ti_qu", c), s.add("ti_cu", e), s
    }

    function x(e) {
        return _({
            event: e = {
                schema: "iglu:com.snowplowanalytics.snowplow/link_click/jsonschema/1-0-1",
                data: E({
                    targetUrl: e.targetUrl,
                    elementId: e.elementId,
                    elementClasses: e.elementClasses,
                    elementTarget: e.elementTarget,
                    elementContent: e.elementContent
                })
            }
        })
    }

    function E(e, n) {
        void 0 === n && (n = {});
        var t, o = {};
        for (t in e)(n[t] || null !== e[t] && void 0 !== e[t]) && (o[t] = e[t]);
        return o
    }

    function I(e) {
        return Number.isInteger && Number.isInteger(e) || "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }

    function j(e) {
        return !(!e || "function" != typeof e)
    }

    function D(e) {
        if (!e || "string" != typeof e.valueOf()) {
            e = e.text || "";
            var n = document.getElementsByTagName("title");
            n && null != n[0] && (e = n[0].text)
        }
        return e
    }

    function N(e) {
        var n = /^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/.exec(e);
        return n ? n[1] : e
    }

    function L(e) {
        var n = e.length;
        return "." === e.charAt(--n) && (e = e.slice(0, n)), "*." === e.slice(0, 2) && (e = e.slice(1)), e
    }

    function B(e) {
        var n = window,
            t = "",
            o = U("referrer", n.location.href) || U("referer", n.location.href);
        if (o) return o;
        if (e) return e;
        try {
            t = n.top.document.referrer
        } catch (e) {
            if (n.parent) try {
                t = n.parent.document.referrer
            } catch (e) {
                t = ""
            }
        }
        return "" === t && (t = document.referrer), t
    }

    function z(e, n, t, o) {
        return e.addEventListener ? (e.addEventListener(n, t, o), !0) : e.attachEvent ? e.attachEvent("on" + n, t) : void(e["on" + n] = t)
    }

    function U(e, n) {
        return (e = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(n)) ? decodeURIComponent(e[1].replace(/\+/g, " ")) : null
    }

    function M(e, n, t) {
        void 0 === t && (t = 63072e3);
        try {
            var o = window.localStorage,
                r = Date.now() + 1e3 * t;
            return o.setItem(e + ".expires", r.toString()), o.setItem(e, n), !0
        } catch (e) {
            return !1
        }
    }

    function F(e) {
        try {
            var n = window.localStorage;
            return n.removeItem(e), n.removeItem(e + ".expires"), !0
        } catch (e) {
            return !1
        }
    }

    function V(e, n, t, o, r, i, a) {
        return 1 < arguments.length ? document.cookie = e + "=" + encodeURIComponent(null != n ? n : "") + (t ? "; Expires=" + new Date(+new Date + 1e3 * t).toUTCString() : "") + (o ? "; Path=" + o : "") + (r ? "; Domain=" + r : "") + (i ? "; SameSite=" + i : "") + (a ? "; Secure" : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0])
    }

    function H(e) {
        return e = parseInt(e), isNaN(e) ? void 0 : e
    }

    function R(e) {
        return e = parseFloat(e), isNaN(e) ? void 0 : e
    }

    function G(e) {
        if (null == e || "object" != typeof e || Array.isArray(e)) return function() {
            return !0
        };
        var n = Object.prototype.hasOwnProperty.call(e, "allowlist"),
            t = X(e);
        return Y(e, (function(e) {
            e: {
                var o = 0;
                for (e = J(e); o < e.length; o++)
                    if (t[e[o]]) {
                        o = !0;
                        break e
                    }
                o = !1
            }
            return o === n
        }))
    }

    function q(e) {
        if (null == e || "object" != typeof e || Array.isArray(e)) return function() {
            return !0
        };
        var n = e.hasOwnProperty("allowlist"),
            t = X(e);
        return Y(e, (function(e) {
            return e.name in t === n
        }))
    }

    function J(e) {
        return e.className.match(/\S+/g) || []
    }

    function Y(e, n) {
        return e.hasOwnProperty("filter") && e.filter ? e.filter : n
    }

    function X(e) {
        var n = {};
        if (e = e.allowlist || e.denylist) {
            Array.isArray(e) || (e = [e]);
            for (var t = 0; t < e.length; t++) n[e[t]] = !0
        }
        return n
    }

    function K(e, n, t, o, r, i, a, c, s, u, l) {
        function f(e) {
            for (var n = 0, t = 0; t < e.length; t++) {
                var o = e.charCodeAt(t);
                127 >= o ? n += 1 : 2047 >= o ? n += 2 : 55296 <= o && 57343 >= o ? (n += 4, t++) : n = 65535 > o ? n + 3 : n + 4
            }
            return n
        }

        function d(e) {
            for (void 0 === e && (e = !1); w.length && "string" != typeof w[0] && "object" != typeof w[0];) w.shift();
            if (1 > w.length) y = !1;
            else {
                if (!h || "string" != typeof h.valueOf()) throw "No collector configured";
                if (y = !0, P) {
                    var n = function(e) {
                            for (var n = 0, t = 0; n < e.length && !((t += e[n].bytes) >= a);) n += 1;
                            return n
                        },
                        o = void 0;
                    if (x(w)) var r = m(o = h, !0, e),
                        i = n(w);
                    else o = v(w[0]), r = m(o, !1, e), i = 1;
                    var c = setTimeout((function() {
                            r.abort(), y = !1
                        }), u),
                        f = function(e) {
                            for (var n = 0; n < e; n++) w.shift();
                            t && M(C, JSON.stringify(w.slice(0, s))), d()
                        };
                    if (r.onreadystatechange = function() {
                            4 === r.readyState && 200 <= r.status && 400 > r.status ? (clearTimeout(c), f(i)) : 4 === r.readyState && 400 <= r.status && (clearTimeout(c), y = !1)
                        }, x(w)) {
                        if (0 < (n = w.slice(0, i)).length) {
                            if (e = !1, n = n.map((function(e) {
                                    return e.evt
                                })), T) {
                                var k = new Blob([p(g(n))], {
                                    type: "application/json"
                                });
                                try {
                                    e = navigator.sendBeacon(o, k)
                                } catch (n) {
                                    e = !1
                                }
                            }!0 === e ? f(i) : r.send(p(g(n)))
                        }
                    } else r.send()
                } else if (l || x(w)) y = !1;
                else {
                    o = new Image(1, 1);
                    var b = !0;
                    o.onload = function() {
                        b && (b = !1, w.shift(), t && M(C, JSON.stringify(w.slice(0, s))), d())
                    }, o.onerror = function() {
                        b && (y = b = !1)
                    }, o.src = v(w[0]), setTimeout((function() {
                        b && y && (b = !1, d())
                    }), u)
                }
            }
        }

        function m(e, n, t) {
            var o = new XMLHttpRequest;
            return n ? (o.open("POST", e, !t), o.setRequestHeader("Content-Type", "application/json; charset=UTF-8")) : o.open("GET", e, !t), o.withCredentials = !0, l && o.setRequestHeader("SP-Anonymous", "*"), o
        }

        function p(e) {
            return JSON.stringify({
                schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                data: e
            })
        }

        function g(e) {
            for (var n = (new Date).getTime().toString(), t = 0; t < e.length; t++) e[t].stm = n;
            return e
        }

        function v(e) {
            return c ? h + e.replace("?", "?stm=" + (new Date).getTime() + "&") : h + e
        }
        var h, y = !1,
            w = [];
        o = "string" == typeof o ? o.toLowerCase() : o;
        var k = window.localStorage,
            b = window.navigator,
            A = null === o || !0 === o || "beacon" === o || "true" === o,
            T = !(!(A && b && b.sendBeacon) || function(e) {
                return function(e, n) {
                    return !(!(n = n.match("(iP.+; CPU .*OS (d+)[_d]*.*) AppleWebKit/")) || !n.length) && parseInt(n[0]) <= 13
                }(0, e) || function(e, n, t) {
                    return !(!(t = t.match("(Macintosh;.*Mac OS X (d+)_(d+)[_d]*.*) AppleWebKit/")) || !t.length) && (parseInt(t[0]) <= e || parseInt(t[0]) === e && parseInt(t[1]) <= n)
                }(10, 15, e) && function(e) {
                    return e.match("Version/.* Safari/") && !e.match("Chrom(e|ium)")
                }(e)
            }(b.userAgent)) && A,
            P = !(!window.XMLHttpRequest || !("withCredentials" in new XMLHttpRequest)),
            _ = "get" !== o && P && ("post" === o || A),
            S = _ ? r : "/i",
            C = "snowplowOutQueue_" + e + "_" + (_ ? "post2" : "get");
        if (i = function() {
                try {
                    var e = !!window.localStorage
                } catch (n) {
                    e = !0
                }
                if (!e) return !1;
                try {
                    var n = window.localStorage;
                    return n.setItem("modernizr", "modernizr"), n.removeItem("modernizr"), !0
                } catch (e) {
                    return !1
                }
            }() && t && _ && i || 1, t) try {
            var O = k.getItem(C);
            w = O ? JSON.parse(O) : []
        } catch (e) {}
        Array.isArray(w) || (w = []), n.outQueues.push(w), P && 1 < i && n.bufferFlushers.push((function(e) {
            y || d(e)
        }));
        var x = function(e) {
            return "object" == typeof e[0]
        };
        return {
            enqueueRequest: function(e, n) {
                if (h = n + S, _) {
                    if ((e = function(e) {
                            var n = Object.keys(e).map((function(n) {
                                return [n, e[n]]
                            })).reduce((function(e, n) {
                                return e[n[0]] = n[1].toString(), e
                            }), {});
                            return {
                                evt: n,
                                bytes: f(JSON.stringify(n))
                            }
                        }(e)).bytes >= a) return Re.warn("Event (" + e.bytes + "B) too big, max is " + a), void m(h, !0, !1).send(p(g([e.evt])));
                    w.push(e)
                } else w.push(function(e) {
                    var n, t = "?",
                        o = {
                            co: !0,
                            cx: !0
                        },
                        r = !0;
                    for (n in e) e.hasOwnProperty(n) && !o.hasOwnProperty(n) && (r ? r = !1 : t += "&", t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    for (var i in o) e.hasOwnProperty(i) && o.hasOwnProperty(i) && (t += "&" + i + "=" + encodeURIComponent(e[i]));
                    return t
                }(e));
                e = !1, t && (e = M(C, JSON.stringify(w.slice(0, s)))), y || e && !(w.length >= i) || d()
            },
            executeQueue: function() {
                y || d()
            },
            setUseLocalStorage: function(e) {
                t = e
            },
            setAnonymousTracking: function(e) {
                l = e
            },
            setCollectorUrl: function(e) {
                h = e + S
            },
            setBufferSize: function(e) {
                i = e
            }
        }
    }

    function W(e, n, t) {
        return "translate.googleusercontent.com" === e ? ("" === t && (t = n), e = N(n = null != (e = (e = /^(?:https?|ftp)(?::\/*(?:[^?]+))([?][^#]+)/.exec(n)) && 1 < (null == e ? void 0 : e.length) ? U("u", e[1]) : null) ? e : "")) : "cc.bingj.com" !== e && "webcache.googleusercontent.com" !== e || (e = N(n = document.links[0].href)), [e, n, t]
    }

    function Q(e, n, t, o, r, i) {
        var a;
        void 0 === i && (i = {}), e = function(e, n, t, o, r, i) {
            function a() {
                (je = W(window.location.hostname, window.location.href, B()))[1] !== Ne && (Le = B(Ne)), De = L(je[0]), Ne = je[1]
            }

            function c(e) {
                var n = (new Date).getTime();
                if (null != (e = e.target) && e.href) {
                    n = "_sp=" + _e + "." + n;
                    var t = e.href.split("#"),
                        o = t[0].split("?"),
                        r = o.shift();
                    if (o = o.join("?")) {
                        for (var i = !0, a = o.split("&"), c = 0; c < a.length; c++)
                            if ("_sp=" === a[c].substr(0, 4)) {
                                i = !1, a[c] = n, o = a.join("&");
                                break
                            }
                        i && (o = n + "&" + o)
                    } else o = n;
                    t[0] = r + "?" + o, n = t.join("#"), e.href = n
                }
            }

            function s(e) {
                for (var n = 0; n < document.links.length; n++) {
                    var t = document.links[n];
                    !t.spDecorationEnabled && e(t) && (z(t, "click", c, !0), z(t, "mousedown", c, !0), t.spDecorationEnabled = !0)
                }
            }

            function u(e) {
                if (ve) {
                    var n = /#.*/;
                    e = e.replace(n, "")
                }
                return he && (n = /[{}]/g, e = e.replace(n, "")), e
            }

            function l(e) {
                return (e = /^([a-z]+):/.exec(e)) ? e[1] : null
            }

            function f(e) {
                if (e = Ge + e + "." + Pe, "localStorage" == on) {
                    try {
                        var n = window.localStorage,
                            t = n.getItem(e + ".expires");
                        if (null === t || +t > Date.now()) var o = n.getItem(e);
                        else n.removeItem(e), n.removeItem(e + ".expires"), o = void 0
                    } catch (e) {
                        o = void 0
                    }
                    return o
                }
                if ("cookie" == on || "cookieAndLocalStorage" == on) return V(e)
            }

            function d() {
                a(), Pe = Ye((qe || De) + (Je || "/")).slice(0, 4)
            }

            function m() {
                we = (new Date).getTime()
            }

            function p() {
                var e = g(),
                    n = e[0];
                n < ke ? ke = n : n > be && (be = n), (e = e[1]) < Ae ? Ae = e : e > Te && (Te = e), m()
            }

            function g() {
                var e = document.documentElement;
                return e ? [e.scrollLeft || window.pageXOffset, e.scrollTop || window.pageYOffset] : [0, 0]
            }

            function v() {
                var e = g(),
                    n = e[0];
                be = ke = n, Te = Ae = e = e[1]
            }

            function h() {
                w(Ge + "ses." + Pe, "*", $e)
            }

            function y(e, n, t, o, r, i) {
                w(Ge + "id." + Pe, e + "." + n + "." + t + "." + o + "." + r + "." + i, Ze)
            }

            function w(e, n, t) {
                tn && !en || ("localStorage" == on ? M(e, n, t) : ("cookie" == on || "cookieAndLocalStorage" == on) && V(e, n, t, Je, qe, Xe, Ke))
            }

            function k(e) {
                var n = Ge + "id." + Pe,
                    t = Ge + "ses." + Pe;
                F(n), F(t), V(n, "", -1, "/", qe, Xe, Ke), V(t, "", -1, "/", qe, Xe, Ke), null != e && e.preserveSession || (Se = Fe.v4(), an = 0), null != e && e.preserveUser || (_e = Fe.v4(), Ce = null)
            }

            function b(e) {
                e && e.stateStorageStrategy && (i.stateStorageStrategy = e.stateStorageStrategy, on = le(i)), tn = !!i.anonymousTracking, en = fe(i), nn = de(i), cn.setUseLocalStorage("localStorage" == on || "cookieAndLocalStorage" == on), cn.setAnonymousTracking(nn)
            }

            function A() {
                if (!tn || en) {
                    var e = "none" != on && !!f("ses"),
                        n = T();
                    n[1] ? _e = n[1] : (_e = tn ? "" : Fe.v4(), n[1] = _e), Se = n[6], e || (n[3]++, Se = Fe.v4(), n[6] = Se, n[5] = n[4]), "none" != on && (h(), n[4] = Math.round((new Date).getTime() / 1e3), n.shift(), y.apply(null, n))
                }
            }

            function T() {
                if ("none" == on) return [];
                var e = Math.round((new Date).getTime() / 1e3),
                    n = f("id");
                return n ? (e = n.split(".")).unshift("0") : e = ["1", _e, e, 0, e, ""], e[6] || (e[6] = Fe.v4()), e
            }

            function _(e) {
                return 0 === e.indexOf("http") ? e : ("https:" === document.location.protocol ? "https" : "http") + "://" + e
            }

            function O() {
                sn && null != r.pageViewId || (r.pageViewId = Fe.v4())
            }

            function x() {
                return null == r.pageViewId && (r.pageViewId = Fe.v4()), r.pageViewId
            }

            function E(e, n, t) {
                var o = function(e, n) {
                        a(), e({
                            context: n,
                            pageViewId: x(),
                            minXOffset: ke,
                            minYOffset: Ae,
                            maxXOffset: be,
                            maxYOffset: Te
                        }), v()
                    },
                    r = function() {
                        we + e.configHeartBeatTimer > (new Date).getTime() && o(e.callback, (n || []).concat(t ? t() : []))
                    };
                e.activityInterval = 0 != e.configMinimumVisitLength ? window.setTimeout((function() {
                    we + e.configMinimumVisitLength > (new Date).getTime() && o(e.callback, (n || []).concat(t ? t() : [])), e.activityInterval = window.setInterval(r, e.configHeartBeatTimer)
                }), e.configMinimumVisitLength) : window.setInterval(r, e.configHeartBeatTimer)
            }

            function j(e) {
                var n = e.minimumVisitLength,
                    t = e.heartbeatDelay;
                if (e = e.callback, I(n) && I(t)) return {
                    configMinimumVisitLength: 1e3 * n,
                    configHeartBeatTimer: 1e3 * t,
                    callback: e
                };
                Re.warn("Activity tracking not enabled, please provide integer values for minimumVisitLength and heartbeatDelay.")
            }

            function H(e) {
                var n = e.context,
                    t = e.minXOffset,
                    o = e.minYOffset,
                    r = e.maxXOffset;
                e = e.maxYOffset;
                var i = document.title;
                i !== Ve && (Ve = i, ge = void 0), xe.track(C({
                    pageUrl: u(pe || Ne),
                    pageTitle: D(ge || Ve),
                    referrer: u(me || Le),
                    minXOffset: Math.round(t),
                    maxXOffset: Math.round(r),
                    minYOffset: Math.round(o),
                    maxYOffset: Math.round(e)
                }), n)
            }
            var R, G, q, J, Y, X, Q, Z, $, ee, ne, te, oe, re, ie, ae, ce, se, ue;
            i.eventMethod = null !== (R = i.eventMethod) && void 0 !== R ? R : "post";
            var le = function(e) {
                    var n;
                    return null !== (n = e.stateStorageStrategy) && void 0 !== n ? n : "cookieAndLocalStorage"
                },
                fe = function(e) {
                    var n, t;
                    return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withSessionTracking)) && void 0 !== t && t)
                },
                de = function(e) {
                    var n, t;
                    return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withServerAnonymisation)) && void 0 !== t && t)
                };
            i.plugins = null !== (G = i.plugins) && void 0 !== G ? G : [], (null === (J = null === (q = null == i ? void 0 : i.contexts) || void 0 === q ? void 0 : q.webPage) || void 0 === J || J) && i.plugins.push({
                contexts: function() {
                    return [{
                        schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                        data: {
                            id: x()
                        }
                    }]
                }
            });
            var me, pe, ge, ve, he, ye, we, ke, be, Ae, Te, Pe, _e, Se, Ce, xe = P({
                    base64: i.encodeBase64,
                    corePlugins: i.plugins,
                    callback: function(e) {
                        var n = Math.round((new Date).getTime() / 1e3),
                            t = f("ses"),
                            o = T(),
                            r = o[0],
                            i = o[1],
                            c = o[2],
                            s = o[3],
                            l = o[4],
                            d = o[5];
                        o = o[6];
                        var m = !!ye && !!V(ye);
                        Qe || m ? k() : ("0" === r ? (Se = o, t || "none" == on || (s++, d = l, Se = Fe.v4()), an = s) : (new Date).getTime() - rn > 1e3 * $e && (Se = Fe.v4(), an++), e.add("vp", function() {
                            if ("innerWidth" in window) var e = window.innerWidth,
                                n = window.innerHeight;
                            else e = (n = document.documentElement || document.body).clientWidth, n = n.clientHeight;
                            return 0 <= e && 0 <= n ? e + "x" + n : null
                        }()), e.add("ds", function() {
                            var e = document.documentElement,
                                n = document.body,
                                t = Math.max(e.clientWidth, e.offsetWidth, e.scrollWidth);
                            return e = Math.max(e.clientHeight, e.offsetHeight, e.scrollHeight, n ? Math.max(n.offsetHeight, n.scrollHeight) : 0), isNaN(t) || isNaN(e) ? "" : t + "x" + e
                        }()), e.add("vid", en ? an : tn ? null : an), e.add("sid", en ? Se : tn ? null : Se), e.add("duid", tn ? null : i), e.add("uid", tn ? null : Ce), a(), e.add("refr", u(me || Le)), e.add("url", u(pe || Ne)), "none" != on && (y(i, c, an, n, d, Se), h()), rn = (new Date).getTime()), n = !!ye && !!V(ye), Qe || n || cn.enqueueRequest(e.build(), ze)
                    }
                }),
                Ee = navigator.userLanguage || navigator.language,
                Ie = document.characterSet || document.charset,
                je = W(window.location.hostname, window.location.href, B()),
                De = L(je[0]),
                Ne = je[1],
                Le = je[2],
                Be = null !== (Y = i.platform) && void 0 !== Y ? Y : "web",
                ze = _(o),
                Ue = null !== (X = i.postPath) && void 0 !== X ? X : "/com.snowplowanalytics.snowplow/tp2",
                Me = null !== (Q = i.appId) && void 0 !== Q ? Q : "",
                Ve = document.title,
                He = null === (Z = i.resetActivityTrackingOnPageView) || void 0 === Z || Z,
                Ge = null !== ($ = i.cookieName) && void 0 !== $ ? $ : "_sp_",
                qe = null !== (ee = i.cookieDomain) && void 0 !== ee ? ee : void 0,
                Je = "/",
                Xe = null !== (ne = i.cookieSameSite) && void 0 !== ne ? ne : "None",
                Ke = null === (te = i.cookieSecure) || void 0 === te || te,
                We = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack,
                Qe = void 0 !== i.respectDoNotTrack && (i.respectDoNotTrack && ("yes" === We || "1" === We)),
                Ze = null !== (oe = i.cookieLifetime) && void 0 !== oe ? oe : 63072e3,
                $e = null !== (re = i.sessionCookieTimeout) && void 0 !== re ? re : 1800,
                en = fe(i),
                nn = de(i),
                tn = !!i.anonymousTracking,
                on = le(i),
                rn = (new Date).getTime(),
                an = 1,
                cn = K(e, r, "localStorage" == on || "cookieAndLocalStorage" == on, i.eventMethod, Ue, null !== (ie = i.bufferSize) && void 0 !== ie ? ie : 1, null !== (ae = i.maxPostBytes) && void 0 !== ae ? ae : 4e4, null === (ce = i.useStm) || void 0 === ce || ce, null !== (se = i.maxLocalStorageQueueSize) && void 0 !== se ? se : 1e3, null !== (ue = i.connectionTimeout) && void 0 !== ue ? ue : 5e3, nn),
                sn = !1,
                un = !1,
                ln = {
                    enabled: !1,
                    installed: !1,
                    configurations: {}
                };
            return i.hasOwnProperty("discoverRootDomain") && i.discoverRootDomain && (qe = function(e, n) {
                for (var t = window.location.hostname, o = "_sp_root_domain_test_" + (new Date).getTime(), r = "_test_value_" + (new Date).getTime(), i = t.split("."), a = i.length - 1; 0 <= a;) {
                    var c = i.slice(a, i.length).join(".");
                    if (V(o, r, 0, "/", c, e, n), V(o) === r) {
                        for (V(o, "", -1, "/", c, e, n), t = document.cookie.split("; "), o = [], r = 0; r < t.length; r++) "_sp_root_domain_test_" === t[r].substring(0, 21) && o.push(t[r]);
                        for (t = o, o = 0; o < t.length; o++) V(t[o], "", -1, "/", c, e, n);
                        return c
                    }--a
                }
                return t
            }(Xe, Ke)), xe.setTrackerVersion(t), xe.setTrackerNamespace(n), xe.setAppId(Me), xe.setPlatform(Be), xe.addPayloadPair("cookie", navigator.cookieEnabled ? "1" : "0"), xe.addPayloadPair("cs", Ie), xe.addPayloadPair("lang", Ee), xe.addPayloadPair("res", screen.width + "x" + screen.height), xe.addPayloadPair("cd", screen.colorDepth), d(), A(), i.crossDomainLinker && s(i.crossDomainLinker), Oe(Oe({}, {
                getDomainSessionIndex: function() {
                    return an
                },
                getPageViewId: function() {
                    return x()
                },
                newSession: function() {
                    var e = Math.round((new Date).getTime() / 1e3),
                        n = T(),
                        t = n[1],
                        o = n[2],
                        r = n[3],
                        i = n[4],
                        a = n[5],
                        c = n[6];
                    "0" === n[0] ? (Se = c, "none" != on && (r++, a = i, Se = Fe.v4()), an = r, h()) : (Se = Fe.v4(), an++), "none" != on && (y(t, o, an, e, a, Se), h()), rn = (new Date).getTime()
                },
                getCookieName: function(e) {
                    return Ge + e + "." + Pe
                },
                getUserId: function() {
                    return Ce
                },
                getDomainUserId: function() {
                    return T()[1]
                },
                getDomainUserInfo: function() {
                    return T()
                },
                setReferrerUrl: function(e) {
                    me = e
                },
                setCustomUrl: function(e) {
                    a();
                    var n, t = Ne;
                    l(e) ? pe = e : "/" === e.slice(0, 1) ? pe = l(t) + "://" + N(t) + e : (0 <= (n = (t = u(t)).indexOf("?")) && (t = t.slice(0, n)), (n = t.lastIndexOf("/")) !== t.length - 1 && (t = t.slice(0, n + 1)), pe = t + e)
                },
                setDocumentTitle: function(e) {
                    Ve = document.title, ge = e
                },
                discardHashTag: function(e) {
                    ve = e
                },
                discardBrace: function(e) {
                    he = e
                },
                setCookiePath: function(e) {
                    Je = e, d()
                },
                setVisitorCookieTimeout: function(e) {
                    Ze = e
                },
                crossDomainLinker: function(e) {
                    s(e)
                },
                enableActivityTracking: function(e) {
                    ln.enabled = !0, ln.configurations.pagePing = j(Oe(Oe({}, e), {
                        callback: H
                    }))
                },
                enableActivityTrackingCallback: function(e) {
                    ln.enabled = !0, ln.configurations.callback = j(e)
                },
                updatePageActivity: function() {
                    m()
                },
                setOptOutCookie: function(e) {
                    ye = e
                },
                setUserId: function(e) {
                    Ce = e
                },
                setUserIdFromLocation: function(e) {
                    a(), Ce = U(e, Ne)
                },
                setUserIdFromReferrer: function(e) {
                    a(), Ce = U(e, Le)
                },
                setUserIdFromCookie: function(e) {
                    Ce = V(e)
                },
                setCollectorUrl: function(e) {
                    ze = _(e), cn.setCollectorUrl(ze)
                },
                setBufferSize: function(e) {
                    cn.setBufferSize(e)
                },
                flushBuffer: function(e) {
                    void 0 === e && (e = {}), cn.executeQueue(), e.newBufferSize && cn.setBufferSize(e.newBufferSize)
                },
                trackPageView: function(e) {
                    void 0 === e && (e = {}),
                        function(e) {
                            var n = e.title,
                                t = e.context,
                                o = e.timestamp;
                            if (e = e.contextCallback, a(), un && O(), un = !0, Ve = document.title, n = D((ge = n) || Ve), xe.track(S({
                                    pageUrl: u(pe || Ne),
                                    pageTitle: n,
                                    referrer: u(me || Le)
                                }), (t || []).concat(e ? e() : []), o), o = new Date, n = !1, ln.enabled && !ln.installed) {
                                n = ln.installed = !0;
                                var r = {
                                    update: function() {
                                        if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                                            var e = !1,
                                                n = Object.defineProperty({}, "passive", {
                                                    get: function() {
                                                        e = !0
                                                    }
                                                }),
                                                t = function() {};
                                            window.addEventListener("testPassiveEventSupport", t, n), window.removeEventListener("testPassiveEventSupport", t, n), r.hasSupport = e
                                        }
                                    }
                                };
                                r.update();
                                var i = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                                Object.prototype.hasOwnProperty.call(r, "hasSupport") ? z(document, i, m, {
                                    passive: !0
                                }) : z(document, i, m), v(), i = function(e, n) {
                                    return void 0 === n && (n = m),
                                        function(e) {
                                            return z(document, e, n)
                                        }
                                }, "click mouseup mousedown mousemove keypress keydown keyup".split(" ").forEach(i(document)), ["resize", "focus", "blur"].forEach(i(window)), i(window, p)("scroll")
                            }
                            if (ln.enabled && (He || n))
                                for (o in we = o.getTime(), o = void 0, ln.configurations)(n = ln.configurations[o]) && (window.clearInterval(n.activityInterval), E(n, t, e))
                        }(e)
                },
                preservePageViewId: function() {
                    sn = !0
                },
                disableAnonymousTracking: function(e) {
                    i.anonymousTracking = !1, b(e), A(), cn.executeQueue()
                },
                enableAnonymousTracking: function(e) {
                    i.anonymousTracking = e && (null == e ? void 0 : e.options) || !0, b(e), en || O()
                },
                clearUserData: k
            }), {
                id: e,
                namespace: n,
                core: xe,
                sharedState: r
            })
        }(e, n, t, o, r, i);
        var c = Oe(Oe({}, e), {
            addPlugin: function(e) {
                var n, t;
                c.core.addPlugin(e), null === (t = (n = e.plugin).activateBrowserPlugin) || void 0 === t || t.call(n, c)
            }
        });
        return null === (a = i.plugins) || void 0 === a || a.forEach((function(e) {
            var n;
            null === (n = e.activateBrowserPlugin) || void 0 === n || n.call(e, c)
        })), c
    }

    function Z(e, n) {
        try {
            ne(null != e ? e : Object.keys(Xe), Xe).forEach(n)
        } catch (e) {
            Re.error("Function failed", e)
        }
    }

    function $(e, n, t) {
        try {
            ne(null != e ? e : Object.keys(n), n).forEach(t)
        } catch (e) {
            Re.error("Function failed", e)
        }
    }

    function ee(e, n, t, o, r, i) {
        return Xe.hasOwnProperty(e) ? null : (Xe[e] = Q(e, n, t, o, r, i), Xe[e])
    }

    function ne(e, n) {
        for (var t = [], o = 0; o < e.length; o++) {
            var r = e[o];
            n.hasOwnProperty(r) ? t.push(n[r]) : Re.warn(r + " not configured")
        }
        return t
    }

    function te() {
        function e() {
            var e;
            if (!n.hasLoaded)
                for (n.hasLoaded = !0, e = 0; e < n.registeredOnLoadHandlers.length; e++) n.registeredOnLoadHandlers[e]();
            return !0
        }
        var n = new Ke,
            t = document,
            o = window;
        return t.visibilityState && z(t, "visibilitychange", (function() {
            "hidden" == t.visibilityState && n.bufferFlushers.forEach((function(e) {
                e(!1)
            }))
        }), !1), z(o, "beforeunload", (function() {
            n.bufferFlushers.forEach((function(e) {
                e(!1)
            }))
        }), !1), "loading" === document.readyState ? (t.addEventListener ? t.addEventListener("DOMContentLoaded", (function n() {
            t.removeEventListener("DOMContentLoaded", n, !1), e()
        })) : t.attachEvent && t.attachEvent("onreadystatechange", (function n() {
            "complete" === t.readyState && (t.detachEvent("onreadystatechange", n), e())
        })), z(o, "load", e, !1)) : e(), n
    }

    function oe(e) {
        if (Ze.userAgentData) {
            var n = {
                isMobile: Ze.userAgentData.mobile,
                brands: Ze.userAgentData.brands
            };
            e && Ze.userAgentData.getHighEntropyValues && Ze.userAgentData.getHighEntropyValues(["platform", "platformVersion", "architecture", "model", "uaFullVersion"]).then((function(e) {
                n.architecture = e.architecture, n.model = e.model, n.platform = e.platform, n.uaFullVersion = e.uaFullVersion, n.platformVersion = e.platformVersion
            }))
        }
        return {
            contexts: function() {
                return n ? [{
                    schema: "iglu:org.ietf/http_client_hints/jsonschema/1-0-0",
                    data: n
                }] : []
            }
        }
    }

    function re() {
        function e(e, n) {
            if (t && "function" == typeof t.get) {
                var o = t.get(e);
                void 0 !== n && void 0 !== o && (o = o[n])
            }
            return o
        }

        function n() {
            return function() {
                var n = e("state"),
                    t = n && n.getActiveExperimentIds(),
                    o = n && n.getVariationMap(),
                    r = e("visitor");
                return t.map((function(e) {
                    var n = o[e],
                        t = n && n.name && n.name.toString() || null;
                    n = n && n.id;
                    var i = r && r.visitorId && r.visitorId.toString() || null;
                    return {
                        experimentId: H(e) || null,
                        variationName: t,
                        variation: H(n) || null,
                        visitorId: i
                    }
                }))
            }().map((function(e) {
                return {
                    schema: "iglu:com.optimizely.optimizelyx/summary/jsonschema/1-0-0",
                    data: e
                }
            }))
        }
        var t = window.optimizely;
        return {
            contexts: function() {
                return t ? n() : []
            }
        }
    }

    function ie() {
        return {
            contexts: function() {
                var e = window,
                    n = (e = e.performance || e.mozPerformance || e.msPerformance || e.webkitPerformance).timing;
                return e = e ? [{
                    schema: "iglu:org.w3/PerformanceTiming/jsonschema/1-0-0",
                    data: {
                        navigationStart: n.navigationStart,
                        redirectStart: n.redirectStart,
                        redirectEnd: n.redirectEnd,
                        fetchStart: n.fetchStart,
                        domainLookupStart: n.domainLookupStart,
                        domainLookupEnd: n.domainLookupEnd,
                        connectStart: n.connectStart,
                        secureConnectionStart: n.secureConnectionStart,
                        connectEnd: n.connectEnd,
                        requestStart: n.requestStart,
                        responseStart: n.responseStart,
                        responseEnd: n.responseEnd,
                        unloadEventStart: n.unloadEventStart,
                        unloadEventEnd: n.unloadEventEnd,
                        domLoading: n.domLoading,
                        domInteractive: n.domInteractive,
                        domContentLoadedEventStart: n.domContentLoadedEventStart,
                        domContentLoadedEventEnd: n.domContentLoadedEventEnd,
                        domComplete: n.domComplete,
                        loadEventStart: n.loadEventStart,
                        loadEventEnd: n.loadEventEnd,
                        msFirstPaint: n.msFirstPaint,
                        chromeFirstPaint: n.chromeFirstPaint,
                        requestEnd: n.requestEnd,
                        proxyStart: n.proxyStart,
                        proxyEnd: n.proxyEnd
                    }
                }] : []
            }
        }
    }

    function ae() {
        var e;
        return {
            activateBrowserPlugin: function(n) {
                e = n.id, rn[n.id] = n
            },
            contexts: function() {
                return an[e] ? [{
                    schema: "iglu:com.snowplowanalytics.snowplow/gdpr/jsonschema/1-0-0",
                    data: an[e]
                }] : []
            },
            logger: function(e) {
                tn = e
            }
        }
    }

    function ce(e) {
        var n;
        return void 0 === e && (e = !1), {
            activateBrowserPlugin: function(t) {
                n = t.id, un[t.id] = [!1, void 0], e && se([n])
            },
            contexts: function() {
                var e, t = null === (e = un[n]) || void 0 === e ? void 0 : e[1];
                return t ? [t] : []
            }
        }
    }

    function se(e) {
        void 0 === e && (e = Object.keys(un)), e.forEach((function(e) {
            un[e] = [!0, on]
        })), !ln && sn.geolocation && sn.geolocation.getCurrentPosition && (ln = !0, sn.geolocation.getCurrentPosition((function(e) {
            var n = e.coords;
            for (var t in on = {
                    schema: "iglu:com.snowplowanalytics.snowplow/geolocation_context/jsonschema/1-1-0",
                    data: {
                        latitude: n.latitude,
                        longitude: n.longitude,
                        latitudeLongitudeAccuracy: n.accuracy,
                        altitude: n.altitude,
                        altitudeAccuracy: n.altitudeAccuracy,
                        bearing: n.heading,
                        speed: n.speed,
                        timestamp: Math.round(e.timestamp)
                    }
                }, un) Object.prototype.hasOwnProperty.call(un, t) && un[t][0] && (un[t] = [!0, on])
        })))
    }

    function ue() {
        return {
            contexts: function() {
                var e = {
                    schema: "iglu:com.google.analytics/cookies/jsonschema/1-0-0",
                    data: {}
                };
                return "__utma __utmb __utmc __utmv __utmz _ga".split(" ").forEach((function(n) {
                    var t = V(n);
                    t && (e.data[n] = t)
                })), [e]
            }
        }
    }

    function le() {
        return {
            activateBrowserPlugin: function(e) {
                mn[e.id] = e
            }
        }
    }

    function fe(e, n, t) {
        for (var o, r, i, a; null !== (o = n.parentElement) && null != o && "A" !== (r = n.tagName.toUpperCase()) && "AREA" !== r;) n = o;
        if (null != (o = n).href) {
            i = (r = o.hostname || N(o.href)).toLowerCase();
            var c = o.href.replace(r, i);
            /^(javascript|vbscript|jscript|mocha|livescript|ecmascript|mailto):/i.test(c) || (r = o.id, i = J(o), a = o.target, o = pn[e.id].linkTrackingContent ? o.innerHTML : void 0, c = unescape(c), e.core.track(x({
                targetUrl: c,
                elementId: r,
                elementClasses: i,
                elementTarget: a,
                elementContent: o
            }), s(t, n)))
        }
    }

    function de(e, n) {
        return function(t) {
            var o = (t = t || window.event).which || t.button,
                r = t.target || t.srcElement;
            "click" === t.type ? r && fe(mn[e], r, n) : "mousedown" === t.type ? 1 !== o && 2 !== o || !r ? pn[e].lastButton = pn[e].lastTarget = null : (pn[e].lastButton = o, pn[e].lastTarget = r) : "mouseup" === t.type && (o === pn[e].lastButton && r === pn[e].lastTarget && fe(mn[e], r, n), pn[e].lastButton = pn[e].lastTarget = null)
        }
    }

    function me(e, n) {
        e = void 0 === e ? {} : e, pn[n] = {
            linkTrackingContent: e.trackContent,
            linkTrackingContext: e.context,
            linkTrackingPseudoClicks: e.pseudoClicks,
            linkTrackingFilter: G(e.options)
        }
    }

    function pe(e) {
        var n, t, o, r = document.links;
        for (o = 0; o < r.length; o++)
            if (null !== (t = (n = pn[e]).linkTrackingFilter) && void 0 !== t && t.call(n, r[o]) && !r[o][e]) {
                var i = e,
                    a = r[o];
                pn[i].linkTrackingPseudoClicks ? (z(a, "mouseup", de(i, pn[i].linkTrackingContext), !1), z(a, "mousedown", de(i, pn[i].linkTrackingContext), !1)) : z(a, "click", de(i, pn[i].linkTrackingContext), !1), r[o][e] = !0
            }
    }

    function ge(e, n) {
        var t = n.context,
            o = e.id + "form",
            r = function(e) {
                return e ? {
                    formFilter: G(e.forms),
                    fieldFilter: q(e.fields),
                    fieldTransform: ve(e.fields)
                } : {
                    formFilter: function() {
                        return !0
                    },
                    fieldFilter: function() {
                        return !0
                    },
                    fieldTransform: hn
                }
            }(n.options);
        Array.prototype.slice.call(document.getElementsByTagName("form")).forEach((function(n) {
            r.formFilter(n) && !n[o] && (Array.prototype.slice.call(vn).forEach((function(i) {
                Array.prototype.slice.call(n.getElementsByTagName(i)).forEach((function(n) {
                    r.fieldFilter(n) && !n[o] && "password" !== n.type.toLowerCase() && (z(n, "focus", we(e, r, "focus_form", t), !1), z(n, "change", we(e, r, "change_form", t), !1), n[o] = !0)
                }))
            })), z(n, "submit", function(e, n, t, o) {
                return function(r) {
                    var i;
                    r = r.target;
                    var a = function(e, n) {
                        var t = [];
                        return Array.prototype.slice.call(vn).forEach((function(o) {
                            o = Array.prototype.slice.call(n.getElementsByTagName(o)).filter((function(n) {
                                return n.hasOwnProperty(e)
                            })), Array.prototype.slice.call(o).forEach((function(e) {
                                if ("submit" !== e.type) {
                                    var n = {
                                        name: he(e),
                                        value: e.value,
                                        nodeName: e.nodeName
                                    };
                                    e.type && "INPUT" === e.nodeName.toUpperCase() && (n.type = e.type), "checkbox" !== e.type && "radio" !== e.type || e.checked || (n.value = null), t.push(n)
                                }
                            }))
                        })), t
                    }(t, r);
                    a.forEach((function(e) {
                        var t;
                        e.value = null !== (t = n.fieldTransform(e.value, e)) && void 0 !== t ? t : e.value
                    })), e.core.track(function(e) {
                        return _({
                            event: {
                                schema: "iglu:com.snowplowanalytics.snowplow/submit_form/jsonschema/1-0-0",
                                data: E({
                                    formId: e.formId,
                                    formClasses: e.formClasses,
                                    elements: e.elements
                                })
                            }
                        })
                    }({
                        formId: null !== (i = he(r)) && void 0 !== i ? i : "",
                        formClasses: J(r),
                        elements: a
                    }), s(o, r, a))
                }
            }(e, r, o, t)), n[o] = !0)
        }))
    }

    function ve(e) {
        return e && Object.prototype.hasOwnProperty.call(e, "transform") ? e.transform : hn
    }

    function he(e) {
        for (var n = 0, t = ["name", "id", "type", "nodeName"]; n < t.length; n++) {
            var o = t[n];
            if (0 != e[o] && "string" == typeof e[o]) return e[o]
        }
        return null
    }

    function ye(e) {
        for (; e && e.nodeName && "HTML" !== e.nodeName.toUpperCase() && "FORM" !== e.nodeName.toUpperCase();) e = e.parentNode;
        return e && e.nodeName && "FORM" === e.nodeName.toUpperCase() ? he(e) : null
    }

    function we(e, n, t, o) {
        return function(r) {
            var i, a;
            if (r = r.target) {
                var c = r.nodeName && "INPUT" === r.nodeName.toUpperCase() ? r.type : null,
                    u = "checkbox" !== r.type || r.checked ? n.fieldTransform(r.value, r) : null;
                ("change_form" === t || "checkbox" !== c && "radio" !== c) && e.core.track(function(e) {
                    var n = "",
                        t = e.schema,
                        o = e.type;
                    return e = {
                        formId: e.formId,
                        elementId: e.elementId,
                        nodeName: e.nodeName,
                        elementClasses: e.elementClasses,
                        value: e.value
                    }, "change_form" === t ? (n = "iglu:com.snowplowanalytics.snowplow/change_form/jsonschema/1-0-0", e.type = o) : "focus_form" === t && (n = "iglu:com.snowplowanalytics.snowplow/focus_form/jsonschema/1-0-0", e.elementType = o), _({
                        event: {
                            schema: n,
                            data: E(e, {
                                value: !0
                            })
                        }
                    })
                }({
                    schema: t,
                    formId: null !== (i = ye(r)) && void 0 !== i ? i : "",
                    elementId: null !== (a = he(r)) && void 0 !== a ? a : "",
                    nodeName: r.nodeName,
                    type: c,
                    elementClasses: J(r),
                    value: null != u ? u : null
                }), s(o, r, c, u))
            }
        }
    }

    function ke() {
        return {
            activateBrowserPlugin: function(e) {
                yn[e.id] = e
            }
        }
    }

    function be() {
        return {
            activateBrowserPlugin: function(e) {
                kn[e.id] = e
            }
        }
    }

    function Ae(e, n) {
        void 0 === n && (n = Object.keys(kn));
        var t = e.message,
            o = e.filename,
            r = e.lineno,
            i = e.colno,
            a = e.error,
            c = e.context,
            s = e.timestamp,
            u = a && a.stack ? a.stack : null;
        $(n, kn, (function(e) {
            e.core.track(_({
                event: {
                    schema: "iglu:com.snowplowanalytics.snowplow/application_error/jsonschema/1-0-1",
                    data: {
                        programmingLanguage: "JAVASCRIPT",
                        message: null != t ? t : "JS Exception. Browser doesn't support ErrorEvent API",
                        stackTrace: u,
                        lineNumber: r,
                        lineColumn: i,
                        fileName: o
                    }
                }
            }), c, s)
        }))
    }

    function Te() {
        return {
            activateBrowserPlugin: function(e) {
                e.core.setTimezone(An.determine("undefined" != typeof Intl).name())
            }
        }
    }

    function Pe() {
        return {
            activateBrowserPlugin: function(e) {
                Pn[e.id] = e, _n[e.id] = {
                    items: []
                }
            }
        }
    }

    function _e() {
        return {
            activateBrowserPlugin: function(e) {
                Cn[e.id] = e, On[e.id] = []
            }
        }
    }

    function Se() {
        return {
            activateBrowserPlugin: function(e) {
                En[e.id] = e
            }
        }
    }

    function Ce() {
        return {
            activateBrowserPlugin: function(e) {
                jn[e.id] = e
            }
        }
    }
    for (var Oe = function() {
            return (Oe = Object.assign || function(e) {
                for (var n, t = 1, o = arguments.length; t < o; t++)
                    for (var r in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                return e
            }).apply(this, arguments)
        }, xe = t((function(e) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var t = new Uint8Array(16);
                e.exports = function() {
                    return n(t), t
                }
            } else {
                var o = Array(16);
                e.exports = function() {
                    for (var e, n = 0; 16 > n; n++) 0 == (3 & n) && (e = 4294967296 * Math.random()), o[n] = e >>> ((3 & n) << 3) & 255;
                    return o
                }
            }
        })), Ee = [], Ie = 0; 256 > Ie; ++Ie) Ee[Ie] = (Ie + 256).toString(16).substr(1);
    var je, De, Ne = function(e, n) {
            return n = n || 0, [Ee[e[n++]], Ee[e[n++]], Ee[e[n++]], Ee[e[n++]], "-", Ee[e[n++]], Ee[e[n++]], "-", Ee[e[n++]], Ee[e[n++]], "-", Ee[e[n++]], Ee[e[n++]], "-", Ee[e[n++]], Ee[e[n++]], Ee[e[n++]], Ee[e[n++]], Ee[e[n++]], Ee[e[n++]]].join("")
        },
        Le = 0,
        Be = 0,
        ze = function(e, n, t) {
            if (t = n && t || 0, "string" == typeof e && (n = "binary" === e ? Array(16) : null, e = null), (e = (e = e || {}).random || (e.rng || xe)())[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, n)
                for (var o = 0; 16 > o; ++o) n[t + o] = e[o];
            return n || Ne(e)
        };
    ze.v1 = function(e, n, t) {
        t = n && t || 0;
        var o = n || [],
            r = (e = e || {}).node || je,
            i = void 0 !== e.clockseq ? e.clockseq : De;
        if (null == r || null == i) {
            var a = xe();
            null == r && (r = je = [1 | a[0], a[1], a[2], a[3], a[4], a[5]]), null == i && (i = De = 16383 & (a[6] << 8 | a[7]))
        }
        a = void 0 !== e.msecs ? e.msecs : (new Date).getTime();
        var c = void 0 !== e.nsecs ? e.nsecs : Be + 1,
            s = a - Le + (c - Be) / 1e4;
        if (0 > s && void 0 === e.clockseq && (i = i + 1 & 16383), (0 > s || a > Le) && void 0 === e.nsecs && (c = 0), 1e4 <= c) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
        for (Le = a, Be = c, De = i, e = (1e4 * (268435455 & (a += 122192928e5)) + c) % 4294967296, o[t++] = e >>> 24 & 255, o[t++] = e >>> 16 & 255, o[t++] = e >>> 8 & 255, o[t++] = 255 & e, e = a / 4294967296 * 1e4 & 268435455, o[t++] = e >>> 8 & 255, o[t++] = 255 & e, o[t++] = e >>> 24 & 15 | 16, o[t++] = e >>> 16 & 255, o[t++] = i >>> 8 | 128, o[t++] = 255 & i, i = 0; 6 > i; ++i) o[t + i] = r[i];
        return n || Ne(o)
    };
    var Ue, Me, Fe = ze.v4 = ze,
        Ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    (Me = Ue || (Ue = {}))[Me.none = 0] = "none", Me[Me.error = 1] = "error", Me[Me.warn = 2] = "warn", Me[Me.debug = 3] = "debug", Me[Me.info = 4] = "info";
    var He, Re = function(e) {
            return void 0 === e && (e = Ue.warn), {
                setLogLevel: function(n) {
                    e = Ue[n] ? n : Ue.warn
                },
                warn: function(t, o) {
                    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    e >= Ue.warn && "undefined" != typeof console && (i = "Snowplow: " + t, o ? console.warn.apply(console, n([i + "\n", o], r)) : console.warn.apply(console, n([i], r)))
                },
                error: function(t, o) {
                    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                    e >= Ue.error && "undefined" != typeof console && (i = "Snowplow: " + t + "\n", o ? console.error.apply(console, n([i + "\n", o], r)) : console.error.apply(console, n([i], r)))
                },
                debug: function(t) {
                    for (var o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                    e >= Ue.debug && "undefined" != typeof console && console.debug.apply(console, n(["Snowplow: " + t], o))
                },
                info: function(t) {
                    for (var o = [], r = 1; r < arguments.length; r++) o[r - 1] = arguments[r];
                    e >= Ue.info && "undefined" != typeof console && console.info.apply(console, n(["Snowplow: " + t], o))
                }
            }
        }(),
        Ge = t((function(e) {
            var n;
            n = {
                rotl: function(e, n) {
                    return e << n | e >>> 32 - n
                },
                rotr: function(e, n) {
                    return e << 32 - n | e >>> n
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e
                },
                randomBytes: function(e) {
                    for (var n = []; 0 < e; e--) n.push(Math.floor(256 * Math.random()));
                    return n
                },
                bytesToWords: function(e) {
                    for (var n = [], t = 0, o = 0; t < e.length; t++, o += 8) n[o >>> 5] |= e[t] << 24 - o % 32;
                    return n
                },
                wordsToBytes: function(e) {
                    for (var n = [], t = 0; t < 32 * e.length; t += 8) n.push(e[t >>> 5] >>> 24 - t % 32 & 255);
                    return n
                },
                bytesToHex: function(e) {
                    for (var n = [], t = 0; t < e.length; t++) n.push((e[t] >>> 4).toString(16)), n.push((15 & e[t]).toString(16));
                    return n.join("")
                },
                hexToBytes: function(e) {
                    for (var n = [], t = 0; t < e.length; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                    return n
                },
                bytesToBase64: function(e) {
                    for (var n = [], t = 0; t < e.length; t += 3)
                        for (var o = e[t] << 16 | e[t + 1] << 8 | e[t + 2], r = 0; 4 > r; r++) 8 * t + 6 * r <= 8 * e.length ? n.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >>> 6 * (3 - r) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], t = 0, o = 0; t < e.length; o = ++t % 4) 0 != o && n.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(t - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(t)) >>> 6 - 2 * o);
                    return n
                }
            }, e.exports = n
        })),
        qe = {
            utf8: {
                stringToBytes: function(e) {
                    return qe.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(qe.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var n = [], t = 0; t < e.length; t++) n.push(255 & e.charCodeAt(t));
                    return n
                },
                bytesToString: function(e) {
                    for (var n = [], t = 0; t < e.length; t++) n.push(String.fromCharCode(e[t]));
                    return n.join("")
                }
            }
        },
        Je = qe,
        Ye = t((function(e) {
            var n, t, o, r;
            n = Je.utf8, t = Je.bin, o = function(e) {
                e.constructor == String ? e = n.stringToBytes(e) : "undefined" != typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                var t = Ge.bytesToWords(e),
                    o = 8 * e.length;
                e = [];
                var r = 1732584193,
                    i = -271733879,
                    a = -1732584194,
                    c = 271733878,
                    s = -1009589776;
                for (t[o >> 5] |= 128 << 24 - o % 32, t[15 + (o + 64 >>> 9 << 4)] = o, o = 0; o < t.length; o += 16) {
                    for (var u = r, l = i, f = a, d = c, m = s, p = 0; 80 > p; p++) {
                        if (16 > p) e[p] = t[o + p];
                        else {
                            var g = e[p - 3] ^ e[p - 8] ^ e[p - 14] ^ e[p - 16];
                            e[p] = g << 1 | g >>> 31
                        }
                        g = (r << 5 | r >>> 27) + s + (e[p] >>> 0) + (20 > p ? 1518500249 + (i & a | ~i & c) : 40 > p ? 1859775393 + (i ^ a ^ c) : 60 > p ? (i & a | i & c | a & c) - 1894007588 : (i ^ a ^ c) - 899497514), s = c, c = a, a = i << 30 | i >>> 2, i = r, r = g
                    }
                    r += u, i += l, a += f, c += d, s += m
                }
                return [r, i, a, c, s]
            }, (r = function(e, n) {
                return e = Ge.wordsToBytes(o(e)), n && n.asBytes ? e : n && n.asString ? t.bytesToString(e) : Ge.bytesToHex(e)
            })._blocksize = 16, r._digestsize = 20, e.exports = r
        })),
        Xe = {},
        Ke = function() {
            this.outQueues = [], this.bufferFlushers = [], this.hasLoaded = !1, this.registeredOnLoadHandlers = []
        },
        We = "undefined" != typeof window ? te() : void 0,
        Qe = Object.freeze({
            __proto__: null,
            addGlobalContexts: function(e, n) {
                Z(n, (function(n) {
                    n.core.addGlobalContexts(e)
                }))
            },
            addPlugin: function(e, n) {
                Z(n, (function(n) {
                    n.addPlugin(e)
                }))
            },
            clearGlobalContexts: function(e) {
                Z(e, (function(e) {
                    e.core.clearGlobalContexts()
                }))
            },
            clearUserData: function(e, n) {
                Z(n, (function(n) {
                    n.clearUserData(e)
                }))
            },
            crossDomainLinker: function(e, n) {
                Z(n, (function(n) {
                    n.crossDomainLinker(e)
                }))
            },
            disableAnonymousTracking: function(e, n) {
                Z(n, (function(n) {
                    n.disableAnonymousTracking(e)
                }))
            },
            discardBrace: function(e, n) {
                Z(n, (function(n) {
                    n.discardBrace(e)
                }))
            },
            discardHashTag: function(e, n) {
                Z(n, (function(n) {
                    n.discardHashTag(e)
                }))
            },
            enableActivityTracking: function(e, n) {
                Z(n, (function(n) {
                    n.enableActivityTracking(e)
                }))
            },
            enableActivityTrackingCallback: function(e, n) {
                Z(n, (function(n) {
                    n.enableActivityTrackingCallback(e)
                }))
            },
            enableAnonymousTracking: function(e, n) {
                Z(n, (function(n) {
                    n.enableAnonymousTracking(e)
                }))
            },
            flushBuffer: function(e, n) {
                Z(n, (function(n) {
                    n.flushBuffer(e)
                }))
            },
            newSession: function(e) {
                Z(e, (function(e) {
                    e.newSession()
                }))
            },
            newTracker: function(e, n, t) {
                if (void 0 === t && (t = {}), We) return ee(e, e, "js-3.1.0", n, We, t)
            },
            preservePageViewId: function(e) {
                Z(e, (function(e) {
                    e.preservePageViewId()
                }))
            },
            removeGlobalContexts: function(e, n) {
                Z(n, (function(n) {
                    n.core.removeGlobalContexts(e)
                }))
            },
            setBufferSize: function(e, n) {
                Z(n, (function(n) {
                    n.setBufferSize(e)
                }))
            },
            setCollectorUrl: function(e, n) {
                Z(n, (function(n) {
                    n.setCollectorUrl(e)
                }))
            },
            setCookiePath: function(e, n) {
                Z(n, (function(n) {
                    n.setCookiePath(e)
                }))
            },
            setCustomUrl: function(e, n) {
                Z(n, (function(n) {
                    n.setCustomUrl(e)
                }))
            },
            setDocumentTitle: function(e, n) {
                Z(n, (function(n) {
                    n.setDocumentTitle(e)
                }))
            },
            setOptOutCookie: function(e, n) {
                Z(n, (function(n) {
                    n.setOptOutCookie(e)
                }))
            },
            setReferrerUrl: function(e, n) {
                Z(n, (function(n) {
                    n.setReferrerUrl(e)
                }))
            },
            setUserId: function(e, n) {
                Z(n, (function(n) {
                    n.setUserId(e)
                }))
            },
            setUserIdFromCookie: function(e, n) {
                Z(n, (function(n) {
                    n.setUserIdFromCookie(e)
                }))
            },
            setUserIdFromLocation: function(e, n) {
                Z(n, (function(n) {
                    n.setUserIdFromLocation(e)
                }))
            },
            setUserIdFromReferrer: function(e, n) {
                Z(n, (function(n) {
                    n.setUserIdFromReferrer(e)
                }))
            },
            setVisitorCookieTimeout: function(e, n) {
                Z(n, (function(n) {
                    n.setVisitorCookieTimeout(e)
                }))
            },
            trackPageView: function(e, n) {
                Z(n, (function(n) {
                    n.trackPageView(e)
                }))
            },
            trackSelfDescribingEvent: function(e, n) {
                Z(n, (function(n) {
                    n.core.track(_({
                        event: e.event
                    }), e.context, e.timestamp)
                }))
            },
            trackStructEvent: function(e, n) {
                Z(n, (function(n) {
                    n.core.track(function(e) {
                        var n = e.category,
                            t = e.action,
                            o = e.label,
                            i = e.property;
                        e = e.value;
                        var a = r();
                        return a.add("e", "se"), a.add("se_ca", n), a.add("se_ac", t), a.add("se_la", o), a.add("se_pr", i), a.add("se_va", null == e ? void 0 : e.toString()), a
                    }(e), e.context, e.timestamp)
                }))
            },
            updatePageActivity: function(e) {
                Z(e, (function(e) {
                    e.updatePageActivity()
                }))
            },
            version: "3.1.0"
        }),
        Ze = navigator,
        $e = Object.freeze({
            __proto__: null,
            ClientHintsPlugin: oe
        }),
        en = Object.freeze({
            __proto__: null,
            OptimizelyXPlugin: re
        }),
        nn = Object.freeze({
            __proto__: null,
            PerformanceTimingPlugin: ie
        });
    ! function(e) {
        e.consent = "consent", e.contract = "contract", e.legalObligation = "legal_obligation", e.vitalInterests = "vital_interests", e.publicTask = "public_task", e.legitimateInterests = "legitimate_interests"
    }(He || (He = {}));
    var tn, on, rn = {},
        an = {},
        cn = Object.freeze({
            __proto__: null,
            ConsentPlugin: ae,
            enableGdprContext: function(e, n) {
                void 0 === n && (n = Object.keys(rn));
                var t = e.documentId,
                    o = e.documentVersion,
                    r = e.documentDescription,
                    i = He[e.basisForProcessing];
                i ? n.forEach((function(e) {
                    rn[e] && (an[e] = {
                        basisForProcessing: i,
                        documentId: null != t ? t : null,
                        documentVersion: null != o ? o : null,
                        documentDescription: null != r ? r : null
                    })
                })) : tn.warn("enableGdprContext: basisForProcessing must be one of: consent, contract, legalObligation, vitalInterests, publicTask, legitimateInterests")
            },
            get gdprBasis() {
                return He
            },
            trackConsentGranted: function(e, n) {
                void 0 === n && (n = Object.keys(rn)), $(n, rn, (function(n) {
                    var t = e.expiry,
                        o = {
                            schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                            data: E({
                                id: e.id,
                                version: e.version,
                                name: e.name,
                                description: e.description
                            })
                        };
                    t = _({
                        event: {
                            schema: "iglu:com.snowplowanalytics.snowplow/consent_granted/jsonschema/1-0-0",
                            data: E({
                                expiry: t
                            })
                        }
                    }), o = [o], n.core.track(t, e.context ? e.context.concat(o) : o, e.timestamp)
                }))
            },
            trackConsentWithdrawn: function(e, n) {
                void 0 === n && (n = Object.keys(rn)), $(n, rn, (function(n) {
                    var t = e.all,
                        o = {
                            schema: "iglu:com.snowplowanalytics.snowplow/consent_document/jsonschema/1-0-0",
                            data: E({
                                id: e.id,
                                version: e.version,
                                name: e.name,
                                description: e.description
                            })
                        };
                    t = _({
                        event: {
                            schema: "iglu:com.snowplowanalytics.snowplow/consent_withdrawn/jsonschema/1-0-0",
                            data: E({
                                all: t
                            })
                        }
                    }), o = [o], n.core.track(t, e.context ? e.context.concat(o) : o, e.timestamp)
                }))
            }
        }),
        sn = navigator,
        un = {},
        ln = !1,
        fn = Object.freeze({
            __proto__: null,
            GeolocationPlugin: ce,
            enableGeolocationContext: se
        }),
        dn = Object.freeze({
            __proto__: null,
            GaCookiesPlugin: ue
        }),
        mn = {},
        pn = {},
        gn = Object.freeze({
            __proto__: null,
            LinkClickTrackingPlugin: le,
            enableLinkClickTracking: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(mn)), n.forEach((function(n) {
                    mn[n] && (mn[n].sharedState.hasLoaded ? (me(e, n), pe(n)) : mn[n].sharedState.registeredOnLoadHandlers.push((function() {
                        me(e, n), pe(n)
                    })))
                }))
            },
            refreshLinkClickTracking: function(e) {
                void 0 === e && (e = Object.keys(mn)), e.forEach((function(e) {
                    mn[e] && (mn[e].sharedState.hasLoaded ? pe(e) : mn[e].sharedState.registeredOnLoadHandlers.push((function() {
                        pe(e)
                    })))
                }))
            },
            trackLinkClick: function(e, n) {
                void 0 === n && (n = Object.keys(mn)), $(n, mn, (function(n) {
                    n.core.track(x(e), e.context, e.timestamp)
                }))
            }
        }),
        vn = ["textarea", "input", "select"],
        hn = function(e) {
            return e
        },
        yn = {},
        wn = Object.freeze({
            __proto__: null,
            FormTrackingPlugin: ke,
            enableFormTracking: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(yn)), n.forEach((function(n) {
                    yn[n] && (yn[n].sharedState.hasLoaded ? ge(yn[n], e) : yn[n].sharedState.registeredOnLoadHandlers.push((function() {
                        ge(yn[n], e)
                    })))
                }))
            }
        }),
        kn = {},
        bn = Object.freeze({
            __proto__: null,
            ErrorTrackingPlugin: be,
            enableErrorTracking: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(kn));
                var t = e.filter,
                    o = e.contextAdder,
                    r = e.context;
                z(window, "error", (function(e) {
                    if (t && j(t) && t(e) || null == t) {
                        var i = n,
                            a = r || [];
                        o && j(o) && (a = a.concat(o(e))), Ae({
                            message: e.message,
                            filename: e.filename,
                            lineno: e.lineno,
                            colno: e.colno,
                            error: e.error,
                            context: a
                        }, i)
                    }
                }), !0)
            },
            trackError: Ae
        }),
        An = t((function(e) {
            var n;
            (n = function() {
                var e = {
                        "America/Denver": ["America/Mazatlan"],
                        "America/Chicago": ["America/Mexico_City"],
                        "America/Asuncion": ["America/Campo_Grande", "America/Santiago"],
                        "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"],
                        "Asia/Beirut": "Asia/Amman Asia/Jerusalem Europe/Helsinki Asia/Damascus Africa/Cairo Asia/Gaza Europe/Minsk Africa/Windhoek".split(" "),
                        "Pacific/Auckland": ["Pacific/Fiji"],
                        "America/Los_Angeles": ["America/Santa_Isabel"],
                        "America/New_York": ["America/Havana"],
                        "America/Halifax": ["America/Goose_Bay"],
                        "America/Godthab": ["America/Miquelon"],
                        "Asia/Dubai": ["Asia/Yerevan"],
                        "Asia/Jakarta": ["Asia/Krasnoyarsk"],
                        "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"],
                        "Australia/Sydney": ["Australia/Lord_Howe"],
                        "Asia/Tokyo": ["Asia/Yakutsk"],
                        "Asia/Dhaka": ["Asia/Omsk"],
                        "Asia/Baku": ["Asia/Yerevan"],
                        "Australia/Brisbane": ["Asia/Vladivostok"],
                        "Pacific/Noumea": ["Asia/Vladivostok"],
                        "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"],
                        "Pacific/Tongatapu": ["Pacific/Apia"],
                        "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"],
                        "Asia/Karachi": ["Asia/Yekaterinburg"],
                        "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"]
                    },
                    t = function() {
                        for (var e = [], n = 0; 11 >= n; n++)
                            for (var t = 1; 28 >= t; t++) {
                                var o = -new Date(2014, n, t).getTimezoneOffset();
                                o = null !== o ? o : 0, e ? e && e[e.length - 1] !== o && e.push(o) : e.push()
                            }
                        return e
                    },
                    o = function e(n, t, o) {
                        void 0 === t && (t = 864e5, o = 36e5);
                        var r = new Date(n.getTime() - t).getTime();
                        n = n.getTime() + t;
                        for (var i = new Date(r).getTimezoneOffset(), a = null; r < n - o;) {
                            var c = new Date(r);
                            if (c.getTimezoneOffset() !== i) {
                                a = c;
                                break
                            }
                            r += o
                        }
                        return 864e5 === t ? e(a, 36e5, 6e4) : 36e5 === t ? e(a, 6e4, 1e3) : a
                    },
                    r = function(e, n, t, o) {
                        if ("N/A" !== t) return t;
                        if ("Asia/Beirut" === n) {
                            if ("Africa/Cairo" === o.name && 13983768e5 === e[6].s && 14116788e5 === e[6].e || "Asia/Jerusalem" === o.name && 13959648e5 === e[6].s && 14118588e5 === e[6].e) return 0
                        } else if ("America/Santiago" === n) {
                            if ("America/Asuncion" === o.name && 14124816e5 === e[6].s && 1397358e6 === e[6].e || "America/Campo_Grande" === o.name && 14136912e5 === e[6].s && 13925196e5 === e[6].e) return 0
                        } else if ("America/Montevideo" === n) {
                            if ("America/Sao_Paulo" === o.name && 14136876e5 === e[6].s && 1392516e6 === e[6].e) return 0
                        } else if ("Pacific/Auckland" === n && "Pacific/Fiji" === o.name && 14142456e5 === e[6].s && 13961016e5 === e[6].e) return 0;
                        return t
                    },
                    i = function(t, o) {
                        for (var i = {}, a = n.olson.dst_rules.zones, c = a.length, s = e[o], u = 0; u < c; u++) {
                            for (var l = a[u], f = a[u], d = 0, m = 0; m < t.length; m++)
                                if (f.rules[m] && t[m]) {
                                    if (!(t[m].s >= f.rules[m].s && t[m].e <= f.rules[m].e)) {
                                        d = "N/A";
                                        break
                                    }
                                    if (d = 0, d += Math.abs(t[m].s - f.rules[m].s), 864e6 < (d += Math.abs(f.rules[m].e - t[m].e))) {
                                        d = "N/A";
                                        break
                                    }
                                }
                            "N/A" !== (f = r(t, o, d, f)) && (i[l.name] = f)
                        }
                        for (var p in i)
                            if (i.hasOwnProperty(p))
                                for (t = 0; t < s.length; t++)
                                    if (s[t] === p) return p;
                        return o
                    },
                    a = function(e) {
                        var t = function() {
                            for (var e = [], t = 0; t < n.olson.dst_rules.years.length; t++) {
                                var r = n.olson.dst_rules.years[t],
                                    i = new Date(r, 0, 1, 0, 0, 1, 0).getTime();
                                r = new Date(r, 12, 31, 23, 59, 59).getTime();
                                for (var a = new Date(i).getTimezoneOffset(), c = null, s = null; i < r - 864e5;) {
                                    var u = new Date(i),
                                        l = u.getTimezoneOffset();
                                    l !== a && (l < a && (c = u), l > a && (s = u), a = l), i += 864e5
                                }
                                r = !(!c || !s) && {
                                    s: o(c).getTime(),
                                    e: o(s).getTime()
                                }, e.push(r)
                            }
                            return e
                        }();
                        return function(e) {
                            for (var n = 0; n < e.length; n++)
                                if (!1 !== e[n]) return !0;
                            return !1
                        }(t) ? i(t, e) : e
                    };
                return {
                    determine: function(o) {
                        var r = !1,
                            i = function() {
                                var e = 0,
                                    n = t();
                                return 1 < n.length && (e = n[0] - n[1]), 3 < n.length ? n[0] + ",1,weird" : 0 > e ? n[0] + ",1" : 0 < e ? n[1] + ",1,s" : n[0] + ",0"
                            }();
                        return (o || void 0 === o) && (r = function() {
                            var e, n;
                            if (Intl && "undefined" != typeof Intl && void 0 !== Intl.DateTimeFormat && void 0 !== (e = Intl.DateTimeFormat()) && void 0 !== e.resolvedOptions) return (n = e.resolvedOptions().timeZone) && (-1 < n.indexOf("/") || "UTC" === n) ? n : void 0
                        }()), r || (r = n.olson.timezones[i], void 0 !== e[r] && (r = a(r))), {
                            name: function() {
                                return r
                            },
                            using_intl: o || void 0 === o,
                            needle: i,
                            offsets: t()
                        }
                    }
                }
            }()).olson = n.olson || {}, n.olson.timezones = {
                "-720,0": "Etc/GMT+12",
                "-660,0": "Pacific/Pago_Pago",
                "-660,1,s": "Pacific/Apia",
                "-600,1": "America/Adak",
                "-600,0": "Pacific/Honolulu",
                "-570,0": "Pacific/Marquesas",
                "-540,0": "Pacific/Gambier",
                "-540,1": "America/Anchorage",
                "-480,1": "America/Los_Angeles",
                "-480,0": "Pacific/Pitcairn",
                "-420,0": "America/Phoenix",
                "-420,1": "America/Denver",
                "-360,0": "America/Guatemala",
                "-360,1": "America/Chicago",
                "-360,1,s": "Pacific/Easter",
                "-300,0": "America/Bogota",
                "-300,1": "America/New_York",
                "-270,0": "America/Caracas",
                "-240,1": "America/Halifax",
                "-240,0": "America/Santo_Domingo",
                "-240,1,s": "America/Asuncion",
                "-210,1": "America/St_Johns",
                "-180,1": "America/Godthab",
                "-180,0": "America/Buenos_Aires",
                "-180,1,s": "America/Montevideo",
                "-120,0": "America/Noronha",
                "-120,1": "America/Noronha",
                "-60,1": "Atlantic/Azores",
                "-60,0": "Atlantic/Cape_Verde",
                "0,0": "UTC",
                "0,1": "Europe/London",
                "0,1,weird": "Africa/Casablanca",
                "60,1": "Europe/Berlin",
                "60,0": "Africa/Lagos",
                "60,1,weird": "Africa/Casablanca",
                "120,1": "Asia/Beirut",
                "120,1,weird": "Africa/Cairo",
                "120,0": "Africa/Johannesburg",
                "180,0": "Asia/Baghdad",
                "180,1": "Europe/Moscow",
                "210,1": "Asia/Tehran",
                "240,0": "Asia/Dubai",
                "240,1": "Asia/Baku",
                "270,0": "Asia/Kabul",
                "300,1": "Asia/Yekaterinburg",
                "300,0": "Asia/Karachi",
                "330,0": "Asia/Calcutta",
                "345,0": "Asia/Katmandu",
                "360,0": "Asia/Dhaka",
                "360,1": "Asia/Omsk",
                "390,0": "Asia/Rangoon",
                "420,1": "Asia/Krasnoyarsk",
                "420,0": "Asia/Jakarta",
                "480,0": "Asia/Shanghai",
                "480,1": "Asia/Irkutsk",
                "525,0": "Australia/Eucla",
                "525,1,s": "Australia/Eucla",
                "540,1": "Asia/Yakutsk",
                "540,0": "Asia/Tokyo",
                "570,0": "Australia/Darwin",
                "570,1,s": "Australia/Adelaide",
                "600,0": "Australia/Brisbane",
                "600,1": "Asia/Vladivostok",
                "600,1,s": "Australia/Sydney",
                "630,1,s": "Australia/Lord_Howe",
                "660,1": "Asia/Kamchatka",
                "660,0": "Pacific/Noumea",
                "690,0": "Pacific/Norfolk",
                "720,1,s": "Pacific/Auckland",
                "720,0": "Pacific/Majuro",
                "765,1,s": "Pacific/Chatham",
                "780,0": "Pacific/Tongatapu",
                "780,1,s": "Pacific/Apia",
                "840,0": "Pacific/Kiritimati"
            }, n.olson.dst_rules = {
                years: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                zones: [{
                    name: "Africa/Cairo",
                    rules: [{
                        e: 12199572e5,
                        s: 12090744e5
                    }, {
                        e: 1250802e6,
                        s: 1240524e6
                    }, {
                        e: 12858804e5,
                        s: 12840696e5
                    }, !1, !1, !1, {
                        e: 14116788e5,
                        s: 1406844e6
                    }]
                }, {
                    name: "America/Asuncion",
                    rules: [{
                        e: 12050316e5,
                        s: 12243888e5
                    }, {
                        e: 12364812e5,
                        s: 12558384e5
                    }, {
                        e: 12709548e5,
                        s: 12860784e5
                    }, {
                        e: 13024044e5,
                        s: 1317528e6
                    }, {
                        e: 1333854e6,
                        s: 13495824e5
                    }, {
                        e: 1364094e6,
                        s: 1381032e6
                    }, {
                        e: 13955436e5,
                        s: 14124816e5
                    }]
                }, {
                    name: "America/Campo_Grande",
                    rules: [{
                        e: 12032172e5,
                        s: 12243888e5
                    }, {
                        e: 12346668e5,
                        s: 12558384e5
                    }, {
                        e: 12667212e5,
                        s: 1287288e6
                    }, {
                        e: 12981708e5,
                        s: 13187376e5
                    }, {
                        e: 13302252e5,
                        s: 1350792e6
                    }, {
                        e: 136107e7,
                        s: 13822416e5
                    }, {
                        e: 13925196e5,
                        s: 14136912e5
                    }]
                }, {
                    name: "America/Goose_Bay",
                    rules: [{
                        e: 122559486e4,
                        s: 120503526e4
                    }, {
                        e: 125704446e4,
                        s: 123648486e4
                    }, {
                        e: 128909886e4,
                        s: 126853926e4
                    }, {
                        e: 13205556e5,
                        s: 129998886e4
                    }, {
                        e: 13520052e5,
                        s: 13314456e5
                    }, {
                        e: 13834548e5,
                        s: 13628952e5
                    }, {
                        e: 14149044e5,
                        s: 13943448e5
                    }]
                }, {
                    name: "America/Havana",
                    rules: [{
                        e: 12249972e5,
                        s: 12056436e5
                    }, {
                        e: 12564468e5,
                        s: 12364884e5
                    }, {
                        e: 12885012e5,
                        s: 12685428e5
                    }, {
                        e: 13211604e5,
                        s: 13005972e5
                    }, {
                        e: 13520052e5,
                        s: 13332564e5
                    }, {
                        e: 13834548e5,
                        s: 13628916e5
                    }, {
                        e: 14149044e5,
                        s: 13943412e5
                    }]
                }, {
                    name: "America/Mazatlan",
                    rules: [{
                        e: 1225008e6,
                        s: 12074724e5
                    }, {
                        e: 12564576e5,
                        s: 1238922e6
                    }, {
                        e: 1288512e6,
                        s: 12703716e5
                    }, {
                        e: 13199616e5,
                        s: 13018212e5
                    }, {
                        e: 13514112e5,
                        s: 13332708e5
                    }, {
                        e: 13828608e5,
                        s: 13653252e5
                    }, {
                        e: 14143104e5,
                        s: 13967748e5
                    }]
                }, {
                    name: "America/Mexico_City",
                    rules: [{
                        e: 12250044e5,
                        s: 12074688e5
                    }, {
                        e: 1256454e6,
                        s: 12389184e5
                    }, {
                        e: 12885084e5,
                        s: 1270368e6
                    }, {
                        e: 1319958e6,
                        s: 13018176e5
                    }, {
                        e: 13514076e5,
                        s: 13332672e5
                    }, {
                        e: 13828572e5,
                        s: 13653216e5
                    }, {
                        e: 14143068e5,
                        s: 13967712e5
                    }]
                }, {
                    name: "America/Miquelon",
                    rules: [{
                        e: 12255984e5,
                        s: 12050388e5
                    }, {
                        e: 1257048e6,
                        s: 12364884e5
                    }, {
                        e: 12891024e5,
                        s: 12685428e5
                    }, {
                        e: 1320552e6,
                        s: 12999924e5
                    }, {
                        e: 13520016e5,
                        s: 1331442e6
                    }, {
                        e: 13834512e5,
                        s: 13628916e5
                    }, {
                        e: 14149008e5,
                        s: 13943412e5
                    }]
                }, {
                    name: "America/Santa_Isabel",
                    rules: [{
                        e: 12250116e5,
                        s: 1207476e6
                    }, {
                        e: 12564612e5,
                        s: 12389256e5
                    }, {
                        e: 12891204e5,
                        s: 12685608e5
                    }, {
                        e: 132057e7,
                        s: 13000104e5
                    }, {
                        e: 13520196e5,
                        s: 133146e7
                    }, {
                        e: 13834692e5,
                        s: 13629096e5
                    }, {
                        e: 14149188e5,
                        s: 13943592e5
                    }]
                }, {
                    name: "America/Santiago",
                    rules: [{
                        e: 1206846e6,
                        s: 1223784e6
                    }, {
                        e: 1237086e6,
                        s: 12552336e5
                    }, {
                        e: 127035e7,
                        s: 12866832e5
                    }, {
                        e: 13048236e5,
                        s: 13138992e5
                    }, {
                        e: 13356684e5,
                        s: 13465584e5
                    }, {
                        e: 1367118e6,
                        s: 13786128e5
                    }, {
                        e: 13985676e5,
                        s: 14100624e5
                    }]
                }, {
                    name: "America/Sao_Paulo",
                    rules: [{
                        e: 12032136e5,
                        s: 12243852e5
                    }, {
                        e: 12346632e5,
                        s: 12558348e5
                    }, {
                        e: 12667176e5,
                        s: 12872844e5
                    }, {
                        e: 12981672e5,
                        s: 1318734e6
                    }, {
                        e: 13302216e5,
                        s: 13507884e5
                    }, {
                        e: 13610664e5,
                        s: 1382238e6
                    }, {
                        e: 1392516e6,
                        s: 14136876e5
                    }]
                }, {
                    name: "Asia/Amman",
                    rules: [{
                        e: 1225404e6,
                        s: 12066552e5
                    }, {
                        e: 12568536e5,
                        s: 12381048e5
                    }, {
                        e: 12883032e5,
                        s: 12695544e5
                    }, {
                        e: 13197528e5,
                        s: 13016088e5
                    }, !1, !1, {
                        e: 14147064e5,
                        s: 13959576e5
                    }]
                }, {
                    name: "Asia/Damascus",
                    rules: [{
                        e: 12254868e5,
                        s: 120726e7
                    }, {
                        e: 125685e7,
                        s: 12381048e5
                    }, {
                        e: 12882996e5,
                        s: 12701592e5
                    }, {
                        e: 13197492e5,
                        s: 13016088e5
                    }, {
                        e: 13511988e5,
                        s: 13330584e5
                    }, {
                        e: 13826484e5,
                        s: 1364508e6
                    }, {
                        e: 14147028e5,
                        s: 13959576e5
                    }]
                }, {
                    name: "Asia/Dubai",
                    rules: [!1, !1, !1, !1, !1, !1, !1]
                }, {
                    name: "Asia/Gaza",
                    rules: [{
                        e: 12199572e5,
                        s: 12066552e5
                    }, {
                        e: 12520152e5,
                        s: 12381048e5
                    }, {
                        e: 1281474e6,
                        s: 126964086e4
                    }, {
                        e: 1312146e6,
                        s: 130160886e4
                    }, {
                        e: 13481784e5,
                        s: 13330584e5
                    }, {
                        e: 13802292e5,
                        s: 1364508e6
                    }, {
                        e: 1414098e6,
                        s: 13959576e5
                    }]
                }, {
                    name: "Asia/Irkutsk",
                    rules: [{
                        e: 12249576e5,
                        s: 12068136e5
                    }, {
                        e: 12564072e5,
                        s: 12382632e5
                    }, {
                        e: 12884616e5,
                        s: 12697128e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Jerusalem",
                    rules: [{
                        e: 12231612e5,
                        s: 12066624e5
                    }, {
                        e: 1254006e6,
                        s: 1238112e6
                    }, {
                        e: 1284246e6,
                        s: 12695616e5
                    }, {
                        e: 131751e7,
                        s: 1301616e6
                    }, {
                        e: 13483548e5,
                        s: 13330656e5
                    }, {
                        e: 13828284e5,
                        s: 13645152e5
                    }, {
                        e: 1414278e6,
                        s: 13959648e5
                    }]
                }, {
                    name: "Asia/Kamchatka",
                    rules: [{
                        e: 12249432e5,
                        s: 12067992e5
                    }, {
                        e: 12563928e5,
                        s: 12382488e5
                    }, {
                        e: 12884508e5,
                        s: 12696984e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Krasnoyarsk",
                    rules: [{
                        e: 12249612e5,
                        s: 12068172e5
                    }, {
                        e: 12564108e5,
                        s: 12382668e5
                    }, {
                        e: 12884652e5,
                        s: 12697164e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Omsk",
                    rules: [{
                        e: 12249648e5,
                        s: 12068208e5
                    }, {
                        e: 12564144e5,
                        s: 12382704e5
                    }, {
                        e: 12884688e5,
                        s: 126972e7
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Vladivostok",
                    rules: [{
                        e: 12249504e5,
                        s: 12068064e5
                    }, {
                        e: 12564e8,
                        s: 1238256e6
                    }, {
                        e: 12884544e5,
                        s: 12697056e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Yakutsk",
                    rules: [{
                        e: 1224954e6,
                        s: 120681e7
                    }, {
                        e: 12564036e5,
                        s: 12382596e5
                    }, {
                        e: 1288458e6,
                        s: 12697092e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Yekaterinburg",
                    rules: [{
                        e: 12249684e5,
                        s: 12068244e5
                    }, {
                        e: 1256418e6,
                        s: 1238274e6
                    }, {
                        e: 12884724e5,
                        s: 12697236e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Asia/Yerevan",
                    rules: [{
                        e: 1224972e6,
                        s: 1206828e6
                    }, {
                        e: 12564216e5,
                        s: 12382776e5
                    }, {
                        e: 1288476e6,
                        s: 12697272e5
                    }, {
                        e: 13199256e5,
                        s: 13011768e5
                    }, !1, !1, !1]
                }, {
                    name: "Australia/Lord_Howe",
                    rules: [{
                        e: 12074076e5,
                        s: 12231342e5
                    }, {
                        e: 12388572e5,
                        s: 12545838e5
                    }, {
                        e: 12703068e5,
                        s: 12860334e5
                    }, {
                        e: 13017564e5,
                        s: 1317483e6
                    }, {
                        e: 1333206e6,
                        s: 13495374e5
                    }, {
                        e: 13652604e5,
                        s: 1380987e6
                    }, {
                        e: 139671e7,
                        s: 14124366e5
                    }]
                }, {
                    name: "Australia/Perth",
                    rules: [{
                        e: 12068136e5,
                        s: 12249576e5
                    }, !1, !1, !1, !1, !1, !1]
                }, {
                    name: "Europe/Helsinki",
                    rules: [{
                        e: 12249828e5,
                        s: 12068388e5
                    }, {
                        e: 12564324e5,
                        s: 12382884e5
                    }, {
                        e: 12884868e5,
                        s: 1269738e6
                    }, {
                        e: 13199364e5,
                        s: 13011876e5
                    }, {
                        e: 1351386e6,
                        s: 13326372e5
                    }, {
                        e: 13828356e5,
                        s: 13646916e5
                    }, {
                        e: 14142852e5,
                        s: 13961412e5
                    }]
                }, {
                    name: "Europe/Minsk",
                    rules: [{
                        e: 12249792e5,
                        s: 12068352e5
                    }, {
                        e: 12564288e5,
                        s: 12382848e5
                    }, {
                        e: 12884832e5,
                        s: 12697344e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Europe/Moscow",
                    rules: [{
                        e: 12249756e5,
                        s: 12068316e5
                    }, {
                        e: 12564252e5,
                        s: 12382812e5
                    }, {
                        e: 12884796e5,
                        s: 12697308e5
                    }, !1, !1, !1, !1]
                }, {
                    name: "Pacific/Apia",
                    rules: [!1, !1, !1, {
                        e: 13017528e5,
                        s: 13168728e5
                    }, {
                        e: 13332024e5,
                        s: 13489272e5
                    }, {
                        e: 13652568e5,
                        s: 13803768e5
                    }, {
                        e: 13967064e5,
                        s: 14118264e5
                    }]
                }, {
                    name: "Pacific/Fiji",
                    rules: [!1, !1, {
                        e: 12696984e5,
                        s: 12878424e5
                    }, {
                        e: 13271544e5,
                        s: 1319292e6
                    }, {
                        e: 1358604e6,
                        s: 13507416e5
                    }, {
                        e: 139005e7,
                        s: 1382796e6
                    }, {
                        e: 14215032e5,
                        s: 14148504e5
                    }]
                }, {
                    name: "Europe/London",
                    rules: [{
                        e: 12249828e5,
                        s: 12068388e5
                    }, {
                        e: 12564324e5,
                        s: 12382884e5
                    }, {
                        e: 12884868e5,
                        s: 1269738e6
                    }, {
                        e: 13199364e5,
                        s: 13011876e5
                    }, {
                        e: 1351386e6,
                        s: 13326372e5
                    }, {
                        e: 13828356e5,
                        s: 13646916e5
                    }, {
                        e: 14142852e5,
                        s: 13961412e5
                    }]
                }, {
                    name: "Africa/Windhoek",
                    rules: [{
                        e: 12207492e5,
                        s: 120744e7
                    }, {
                        e: 12521988e5,
                        s: 12388896e5
                    }, {
                        e: 12836484e5,
                        s: 12703392e5
                    }, {
                        e: 1315098e6,
                        s: 13017888e5
                    }, {
                        e: 13465476e5,
                        s: 13332384e5
                    }, {
                        e: 13779972e5,
                        s: 13652928e5
                    }, {
                        e: 14100516e5,
                        s: 13967424e5
                    }]
                }]
            }, e.exports = n
        })),
        Tn = Object.freeze({
            __proto__: null,
            TimezonePlugin: Te
        }),
        Pn = {},
        _n = {},
        Sn = Object.freeze({
            __proto__: null,
            EcommercePlugin: Pe,
            addItem: function(e, n) {
                void 0 === n && (n = Object.keys(Pn)), n.forEach((function(n) {
                    _n[n] && _n[n].items.push(e)
                }))
            },
            addTrans: function(e, n) {
                void 0 === n && (n = Object.keys(Pn)), n.forEach((function(n) {
                    _n[n] && (_n[n].transaction = e)
                }))
            },
            trackAddToCart: function(e, n) {
                void 0 === n && (n = Object.keys(Pn)), $(n, Pn, (function(n) {
                    n.core.track(_({
                        event: {
                            schema: "iglu:com.snowplowanalytics.snowplow/add_to_cart/jsonschema/1-0-0",
                            data: E({
                                sku: e.sku,
                                quantity: e.quantity,
                                name: e.name,
                                category: e.category,
                                unitPrice: e.unitPrice,
                                currency: e.currency
                            })
                        }
                    }), e.context, e.timestamp)
                }))
            },
            trackRemoveFromCart: function(e, n) {
                void 0 === n && (n = Object.keys(Pn)), $(n, Pn, (function(n) {
                    n.core.track(_({
                        event: {
                            schema: "iglu:com.snowplowanalytics.snowplow/remove_from_cart/jsonschema/1-0-0",
                            data: E({
                                sku: e.sku,
                                quantity: e.quantity,
                                name: e.name,
                                category: e.category,
                                unitPrice: e.unitPrice,
                                currency: e.currency
                            })
                        }
                    }), e.context, e.timestamp)
                }))
            },
            trackTrans: function(e) {
                void 0 === e && (e = Object.keys(Pn)), $(e, Pn, (function(e) {
                    var n = _n[e.id].transaction;
                    for (n && e.core.track(function(e) {
                            var n = e.orderId,
                                t = e.total,
                                o = e.affiliation,
                                i = e.tax,
                                a = e.shipping,
                                c = e.city,
                                s = e.state,
                                u = e.country;
                            e = e.currency;
                            var l = r();
                            return l.add("e", "tr"), l.add("tr_id", n), l.add("tr_af", o), l.add("tr_tt", t), l.add("tr_tx", i), l.add("tr_sh", a), l.add("tr_ci", c), l.add("tr_st", s), l.add("tr_co", u), l.add("tr_cu", e), l
                        }(n), n.context, n.timestamp), n = 0; n < _n[e.id].items.length; n++) {
                        var t = _n[e.id].items[n];
                        e.core.track(O(t), t.context, t.timestamp)
                    }
                    _n[e.id] = {
                        items: []
                    }
                }))
            }
        }),
        Cn = {},
        On = {},
        xn = Object.freeze({
            __proto__: null,
            EnhancedEcommercePlugin: _e,
            addEnhancedEcommerceActionContext: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(Cn));
                var t = e.id,
                    o = e.affiliation,
                    r = e.revenue,
                    i = e.tax,
                    a = e.shipping,
                    c = e.coupon,
                    s = e.list,
                    u = e.step,
                    l = e.option,
                    f = e.currency;
                n.forEach((function(e) {
                    On[e] && On[e].push({
                        schema: "iglu:com.google.analytics.enhanced-ecommerce/actionFieldObject/jsonschema/1-0-0",
                        data: {
                            id: t,
                            affiliation: o,
                            revenue: R(r),
                            tax: R(i),
                            shipping: R(a),
                            coupon: c,
                            list: s,
                            step: H(u),
                            option: l,
                            currency: f
                        }
                    })
                }))
            },
            addEnhancedEcommerceImpressionContext: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(Cn));
                var t = e.id,
                    o = e.name,
                    r = e.list,
                    i = e.brand,
                    a = e.category,
                    c = e.variant,
                    s = e.position,
                    u = e.price,
                    l = e.currency;
                n.forEach((function(e) {
                    On[e] && On[e].push({
                        schema: "iglu:com.google.analytics.enhanced-ecommerce/impressionFieldObject/jsonschema/1-0-0",
                        data: {
                            id: t,
                            name: o,
                            list: r,
                            brand: i,
                            category: a,
                            variant: c,
                            position: H(s),
                            price: R(u),
                            currency: l
                        }
                    })
                }))
            },
            addEnhancedEcommerceProductContext: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(Cn));
                var t = e.id,
                    o = e.name,
                    r = e.list,
                    i = e.brand,
                    a = e.category,
                    c = e.variant,
                    s = e.price,
                    u = e.quantity,
                    l = e.coupon,
                    f = e.position,
                    d = e.currency;
                n.forEach((function(e) {
                    On[e] && On[e].push({
                        schema: "iglu:com.google.analytics.enhanced-ecommerce/productFieldObject/jsonschema/1-0-0",
                        data: {
                            id: t,
                            name: o,
                            list: r,
                            brand: i,
                            category: a,
                            variant: c,
                            price: R(s),
                            quantity: H(u),
                            coupon: l,
                            position: H(f),
                            currency: d
                        }
                    })
                }))
            },
            addEnhancedEcommercePromoContext: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(Cn));
                var t = e.id,
                    o = e.name,
                    r = e.creative,
                    i = e.position,
                    a = e.currency;
                n.forEach((function(e) {
                    On[e] && On[e].push({
                        schema: "iglu:com.google.analytics.enhanced-ecommerce/promoFieldObject/jsonschema/1-0-0",
                        data: {
                            id: t,
                            name: o,
                            creative: r,
                            position: i,
                            currency: a
                        }
                    })
                }))
            },
            trackEnhancedEcommerceAction: function(e, n) {
                void 0 === e && (e = {}), void 0 === n && (n = Object.keys(Cn)), $(n, Cn, (function(n) {
                    var t = On[n.id].concat(e.context || []);
                    On[n.id].length = 0, n.core.track(_({
                        event: {
                            schema: "iglu:com.google.analytics.enhanced-ecommerce/action/jsonschema/1-0-0",
                            data: {
                                action: e.action
                            }
                        }
                    }), t, e.timestamp)
                }))
            }
        }),
        En = {},
        In = Object.freeze({
            __proto__: null,
            AdTrackingPlugin: Se,
            trackAdClick: function(e, n) {
                void 0 === n && (n = Object.keys(En)), $(n, En, (function(n) {
                    n.core.track(function(e) {
                        return _({
                            event: e = {
                                schema: "iglu:com.snowplowanalytics.snowplow/ad_click/jsonschema/1-0-0",
                                data: E({
                                    targetUrl: e.targetUrl,
                                    clickId: e.clickId,
                                    costModel: e.costModel,
                                    cost: e.cost,
                                    bannerId: e.bannerId,
                                    zoneId: e.zoneId,
                                    impressionId: e.impressionId,
                                    advertiserId: e.advertiserId,
                                    campaignId: e.campaignId
                                })
                            }
                        })
                    }(e), e.context, e.timestamp)
                }))
            },
            trackAdConversion: function(e, n) {
                void 0 === n && (n = Object.keys(En)), $(n, En, (function(n) {
                    n.core.track(function(e) {
                        return _({
                            event: e = {
                                schema: "iglu:com.snowplowanalytics.snowplow/ad_conversion/jsonschema/1-0-0",
                                data: E({
                                    conversionId: e.conversionId,
                                    costModel: e.costModel,
                                    cost: e.cost,
                                    category: e.category,
                                    action: e.action,
                                    property: e.property,
                                    initialValue: e.initialValue,
                                    advertiserId: e.advertiserId,
                                    campaignId: e.campaignId
                                })
                            }
                        })
                    }(e), e.context, e.timestamp)
                }))
            },
            trackAdImpression: function(e, n) {
                void 0 === n && (n = Object.keys(En)), $(n, En, (function(n) {
                    n.core.track(function(e) {
                        return _({
                            event: e = {
                                schema: "iglu:com.snowplowanalytics.snowplow/ad_impression/jsonschema/1-0-0",
                                data: E({
                                    impressionId: e.impressionId,
                                    costModel: e.costModel,
                                    cost: e.cost,
                                    targetUrl: e.targetUrl,
                                    bannerId: e.bannerId,
                                    zoneId: e.zoneId,
                                    advertiserId: e.advertiserId,
                                    campaignId: e.campaignId
                                })
                            }
                        })
                    }(e), e.context, e.timestamp)
                }))
            }
        }),
        jn = {},
        Dn = Object.freeze({
            __proto__: null,
            SiteTrackingPlugin: Ce,
            trackSiteSearch: function(e, n) {
                void 0 === n && (n = Object.keys(jn)), $(n, jn, (function(n) {
                    n.core.track(_({
                        event: {
                            schema: "iglu:com.snowplowanalytics.snowplow/site_search/jsonschema/1-0-0",
                            data: E({
                                terms: e.terms,
                                filters: e.filters,
                                totalResults: e.totalResults,
                                pageResults: e.pageResults
                            })
                        }
                    }), e.context, e.timestamp)
                }))
            },
            trackSocialInteraction: function(e, n) {
                void 0 === n && (n = Object.keys(jn)), $(n, jn, (function(n) {
                    n.core.track(function(e) {
                        return _({
                            event: e = {
                                schema: "iglu:com.snowplowanalytics.snowplow/social_interaction/jsonschema/1-0-0",
                                data: E({
                                    action: e.action,
                                    network: e.network,
                                    target: e.target
                                })
                            }
                        })
                    }(e), e.context, e.timestamp)
                }))
            },
            trackTiming: function(e, n) {
                void 0 === n && (n = Object.keys(jn));
                var t = e.category,
                    o = e.variable,
                    r = e.timing,
                    i = e.label,
                    a = e.context,
                    c = e.timestamp;
                $(n, jn, (function(e) {
                    e.core.track(_({
                        event: {
                            schema: "iglu:com.snowplowanalytics.snowplow/timing/jsonschema/1-0-0",
                            data: {
                                category: t,
                                variable: o,
                                timing: r,
                                label: i
                            }
                        }
                    }), a, c)
                }))
            }
        }),
        Nn = window.GlobalSnowplowNamespace.shift(),
        Ln = window[Nn];
    Ln.q = function(n, t) {
        function o(e) {
            var n = e.split(":");
            return [e = n[0], n = 1 < n.length ? n[1].split(";") : void 0]
        }

        function r(e, n) {
            if (y[e]) try {
                y[e].apply(null, n)
            } catch (n) {
                Re.error(e + " failed", n)
            } else Re.warn(e + " is not an available function")
        }

        function i() {
            0 === Object.keys(g).length && v.forEach((function(e) {
                var n = e[1];
                void 0 !== y[e[0]] && y[e[0]].length > n.length && Array.isArray(n[0]) && (n = [{}, n[0]]), r(e[0], n)
            }))
        }

        function a(e) {
            y = Oe(Oe({}, y), e)
        }

        function c(t) {
            if ("string" != typeof t[0] || "string" != typeof t[1] || void 0 !== t[2] && "object" != typeof t[2]) Re.error("newTracker failed", Error("Invalid parameters"));
            else {
                var o = n + "_" + t[0],
                    r = t[2],
                    i = function(n) {
                        var t, o = null !== (t = null == n ? void 0 : n.contexts) && void 0 !== t ? t : {},
                            r = o.performanceTiming;
                        t = o.gaCookies, n = o.geolocation, o.optimizelyExperiments, o.optimizelyStates, o.optimizelyVariations, o.optimizelyVisitor, o.optimizelyAudiences, o.optimizelyDimensions, o.optimizelySummary;
                        var i = o.optimizelyXSummary;
                        o = o.clientHints;
                        var a = [];
                        return r && (r = e(nn, ["PerformanceTimingPlugin"]), a.push([ie(), r])), i && (r = e(en, ["OptimizelyXPlugin"]), a.push([re(), r])), o && (r = e($e, ["ClientHintsPlugin"]), a.push([oe("object" == typeof o && o.includeHighEntropy), r])), t && (r = e(dn, ["GaCookiesPlugin"]), a.push([ue(), r])), r = e(cn, ["ConsentPlugin"]), a.push([ae(), r]), r = e(fn, ["GeolocationPlugin"]), a.push([ce(n), r]), r = e(gn, ["LinkClickTrackingPlugin"]), a.push([le(), r]), r = e(wn, ["FormTrackingPlugin"]), a.push([ke(), r]), r = e(bn, ["ErrorTrackingPlugin"]), a.push([be(), r]), r = e(Sn, ["EcommercePlugin"]), a.push([Pe(), r]), r = e(xn, ["EnhancedEcommercePlugin"]), a.push([_e(), r]), r = e(In, ["AdTrackingPlugin"]), a.push([Se(), r]), r = e(Dn, ["SiteTrackingPlugin"]), a.push([Ce(), r]), r = e(Tn, ["TimezonePlugin"]), a.push([Te(), r]), a
                    }(r);
                (o = ee(o, t[0], "js-" + h, t[1], m, Oe(Oe({}, r), {
                    plugins: i.map((function(e) {
                        return e[0]
                    }))
                }))) ? (p.push(o.id), i.forEach((function(e) {
                    a(e[1])
                }))) : Re.warn(t[0] + " already exists")
            }
        }

        function s(n, t) {
            function o(e) {
                Object.prototype.hasOwnProperty.call(g, e) && (l.clearTimeout(g[e].timeout), delete g[e], i())
            }
            var r;
            if ("string" == typeof n[0] && d(n[1]) && (void 0 === n[2] || Array.isArray(n[2]))) {
                var c = n[0],
                    s = n[1],
                    u = n[2];
                (null === (r = n[3]) || void 0 === r || r) && (r = l.setTimeout((function() {
                    o(c)
                }), 5e3), g[c] = {
                    timeout: r
                }), (r = f.createElement("script")).setAttribute("src", c), r.setAttribute("async", "1"), z(r, "error", (function() {
                    o(c), Re.warn("Failed to load plugin " + s[0] + " from " + c)
                }), !0), z(r, "load", (function() {
                    var n = s[1],
                        r = l[s[0]];
                    if (r && "object" == typeof r) {
                        var i = r[n];
                        n = e(r, ["symbol" == typeof n ? n : n + ""]), y.addPlugin.apply(null, [{
                            plugin: i.apply(null, u)
                        }, t]), a(n)
                    }
                    o(c)
                }), !0), f.head.appendChild(r)
            } else {
                if ("object" == typeof n[0] && "string" == typeof n[1] && (void 0 === n[2] || Array.isArray(n[2]))) {
                    var m = n[0],
                        p = n[1];
                    if (r = n[2], m) return n = m[p], m = e(m, ["symbol" == typeof p ? p : p + ""]), y.addPlugin.apply(null, [{
                        plugin: n.apply(null, r)
                    }, t]), void a(m)
                }
                Re.warn("Failed to add Plugin: " + n[1])
            }
        }

        function u() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            for (t = 0; t < e.length; t += 1) {
                var i = e[t],
                    a = Array.prototype.shift.call(i);
                if (j(a)) try {
                    for (var u = {}, l = 0, f = ne(p, Xe); l < f.length; l++) {
                        var d = f[l];
                        u[d.id.replace(n + "_", "")] = d
                    }
                    a.apply(u, i)
                } catch (e) {
                    Re.error("Tracker callback failed", e)
                } finally {
                    continue
                }
                a = (u = o(a))[0], u = u[1], "newTracker" === a ? c(i) : (u = u ? u.map((function(e) {
                    return n + "_" + e
                })) : p, "addPlugin" === a ? s(i, u) : (l = void 0, l = void 0 !== i[0] ? [i[0], u] : void 0 !== y[a] && 2 === y[a].length ? [{}, u] : [u], 0 < Object.keys(g).length ? v.push([a, l]) : r(a, l)))
            }
        }
        for (var l = window, f = document, m = te(), p = [], g = {}, v = [], h = "3.1.0", y = e(Qe, ["version"]), w = 0; w < t.length; w++) u(t[w]);
        return {
            push: u
        }
    }(Nn, Ln.q)
}();
//# sourceMappingURL=sp.js.map