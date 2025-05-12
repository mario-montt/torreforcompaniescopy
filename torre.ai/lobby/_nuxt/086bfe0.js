/*! For license information please see LICENSES */ ! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            n = (new Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f80ad3ea-21de-429e-897d-385006f8a9bb", e._sentryDebugIdIdentifier = "sentry-dbid-f80ad3ea-21de-429e-897d-385006f8a9bb")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        1015: function(e, n, t) {
            (function(n) {
                var r, o, c, f;
                r = t(1016), o = t(896).utf8, c = t(896).bin, (f = function(e, t) {
                    var f = r.wordsToBytes(function(e) {
                        e.constructor == String ? e = o.stringToBytes(e) : void 0 !== n && "function" == typeof n.isBuffer && n.isBuffer(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                        var t = r.bytesToWords(e),
                            c = 8 * e.length,
                            f = [],
                            l = 1732584193,
                            d = -271733879,
                            v = -1732584194,
                            h = 271733878,
                            m = -1009589776;
                        t[c >> 5] |= 128 << 24 - c % 32, t[15 + (c + 64 >>> 9 << 4)] = c;
                        for (var i = 0; i < t.length; i += 16) {
                            for (var a = l, b = d, y = v, w = h, S = m, O = 0; O < 80; O++) {
                                if (O < 16) f[O] = t[i + O];
                                else {
                                    var x = f[O - 3] ^ f[O - 8] ^ f[O - 14] ^ f[O - 16];
                                    f[O] = x << 1 | x >>> 31
                                }
                                var k = (l << 5 | l >>> 27) + m + (f[O] >>> 0) + (O < 20 ? 1518500249 + (d & v | ~d & h) : O < 40 ? 1859775393 + (d ^ v ^ h) : O < 60 ? (d & v | d & h | v & h) - 1894007588 : (d ^ v ^ h) - 899497514);
                                m = h, h = v, v = d << 30 | d >>> 2, d = l, l = k
                            }
                            l += a, d += b, v += y, h += w, m += S
                        }
                        return [l, d, v, h, m]
                    }(e));
                    return t && t.asBytes ? f : t && t.asString ? c.bytesToString(f) : r.bytesToHex(f)
                })._blocksize = 16, f._digestsize = 20, e.exports = f
            }).call(this, t(636).Buffer)
        },
        1016: function(e, n) {
            var t, r;
            t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = {
                rotl: function(e, b) {
                    return e << b | e >>> 32 - b
                },
                rotr: function(e, b) {
                    return e << 32 - b | e >>> b
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & r.rotl(e, 8) | 4278255360 & r.rotl(e, 24);
                    for (var i = 0; i < e.length; i++) e[i] = r.endian(e[i]);
                    return e
                },
                randomBytes: function(e) {
                    for (var n = []; e > 0; e--) n.push(Math.floor(256 * Math.random()));
                    return n
                },
                bytesToWords: function(e) {
                    for (var n = [], i = 0, b = 0; i < e.length; i++, b += 8) n[b >>> 5] |= e[i] << 24 - b % 32;
                    return n
                },
                wordsToBytes: function(e) {
                    for (var n = [], b = 0; b < 32 * e.length; b += 8) n.push(e[b >>> 5] >>> 24 - b % 32 & 255);
                    return n
                },
                bytesToHex: function(e) {
                    for (var n = [], i = 0; i < e.length; i++) n.push((e[i] >>> 4).toString(16)), n.push((15 & e[i]).toString(16));
                    return n.join("")
                },
                hexToBytes: function(e) {
                    for (var n = [], t = 0; t < e.length; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                    return n
                },
                bytesToBase64: function(e) {
                    for (var n = [], i = 0; i < e.length; i += 3)
                        for (var r = e[i] << 16 | e[i + 1] << 8 | e[i + 2], o = 0; o < 4; o++) 8 * i + 6 * o <= 8 * e.length ? n.push(t.charAt(r >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], i = 0, r = 0; i < e.length; r = ++i % 4) 0 != r && n.push((t.indexOf(e.charAt(i - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | t.indexOf(e.charAt(i)) >>> 6 - 2 * r);
                    return n
                }
            }, e.exports = r
        },
        827: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return pe
            })), t.d(n, "b", (function() {
                return ye
            })), t.d(n, "c", (function() {
                return ge
            })), t.d(n, "d", (function() {
                return he
            }));
            var r = function() {
                return r = Object.assign || function(e) {
                    for (var s, i = 1, n = arguments.length; i < n; i++)
                        for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                    return e
                }, r.apply(this, arguments)
            };
            Object.create;

            function o(e, n, t) {
                if (t || 2 === arguments.length)
                    for (var r, i = 0, o = n.length; i < o; i++) !r && i in n || (r || (r = Array.prototype.slice.call(n, 0, i)), r[i] = n[i]);
                return e.concat(r || Array.prototype.slice.call(n))
            }
            Object.create;
            "function" == typeof SuppressedError && SuppressedError;
            var c = t(468);

            function f(data) {
                if (!data) return data;
                switch (4 - data.length % 4) {
                    case 2:
                        data += "==";
                        break;
                    case 3:
                        data += "="
                }
                return function(e) {
                    var n, t, r, h3, h4, o, c = function(e) {
                            return decodeURIComponent(e.split("").map((function(e) {
                                return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                            })).join(""))
                        },
                        i = 0,
                        f = 0,
                        l = "",
                        v = [];
                    if (!e) return e;
                    e += "";
                    do {
                        n = (o = d.indexOf(e.charAt(i++)) << 18 | d.indexOf(e.charAt(i++)) << 12 | (h3 = d.indexOf(e.charAt(i++))) << 6 | (h4 = d.indexOf(e.charAt(i++)))) >> 16 & 255, t = o >> 8 & 255, r = 255 & o, v[f++] = 64 === h3 ? String.fromCharCode(n) : 64 === h4 ? String.fromCharCode(n, t) : String.fromCharCode(n, t, r)
                    } while (i < e.length);
                    return l = v.join(""), c(l.replace(/\0+$/, ""))
                }(data.replace(/-/g, "+").replace(/_/g, "/"))
            }

            function l(data) {
                if (!data) return data;
                var e = function(data) {
                    var h1, h2, h3, h4, e, i = 0,
                        n = 0,
                        t = [];
                    if (!data) return data;
                    data = unescape(encodeURIComponent(data));
                    do {
                        h1 = (e = data.charCodeAt(i++) << 16 | data.charCodeAt(i++) << 8 | data.charCodeAt(i++)) >> 18 & 63, h2 = e >> 12 & 63, h3 = e >> 6 & 63, h4 = 63 & e, t[n++] = d.charAt(h1) + d.charAt(h2) + d.charAt(h3) + d.charAt(h4)
                    } while (i < data.length);
                    var r = t.join(""),
                        o = data.length % 3;
                    return (o ? r.slice(0, o - 3) : r) + "===".slice(o || 3)
                }(data);
                return e.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }
            var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

            function v() {
                var e, n = {},
                    t = [],
                    r = [],
                    o = [],
                    c = function(e, t) {
                        null != t && "" !== t && (n[e] = t)
                    };
                return {
                    add: c,
                    addDict: function(e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && c(n, e[n])
                    },
                    addJson: function(e, n, o) {
                        if (o && m(o)) {
                            var c = {
                                keyIfEncoded: e,
                                keyIfNotEncoded: n,
                                json: o
                            };
                            r.push(c), t.push(c)
                        }
                    },
                    addContextEntity: function(e) {
                        o.push(e)
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
                        return null == e || e(this, r, o), n
                    }
                }
            }

            function h(e) {
                return function(n, t, r) {
                    for (var c = function(t, r, o) {
                            var c = JSON.stringify(t);
                            e ? n.add(r, l(c)) : n.add(o, c)
                        }, d = function(t, r) {
                            var o = t || function() {
                                var t = n.getPayload();
                                if (e ? t.cx : t.co) return JSON.parse(e ? f(t.cx) : t.co)
                            }();
                            return o ? o.data = o.data.concat(r.data) : o = r, o
                        }, v = void 0, h = 0, m = t; h < m.length; h++) {
                        var y = m[h];
                        "cx" === y.keyIfEncoded ? v = d(v, y.json) : c(y.json, y.keyIfEncoded, y.keyIfNotEncoded)
                    }(t.length = 0, r.length) && (v = d(v, {
                        schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                        data: o([], r, !0)
                    }), r.length = 0);
                    v && c(v, "cx", "co")
                }
            }

            function m(e) {
                if (!y(e)) return !1;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) return !0;
                return !1
            }

            function y(e) {
                return null != e && (e.constructor === {}.constructor || e.constructor === [].constructor)
            }
            var w, label = "Snowplow: ";
            ! function(e) {
                e[e.none = 0] = "none", e[e.error = 1] = "error", e[e.warn = 2] = "warn", e[e.debug = 3] = "debug", e[e.info = 4] = "info"
            }(w || (w = {}));
            var S = function(e) {
                void 0 === e && (e = w.warn);
                return {
                    setLogLevel: function(n) {
                        e = w[n] ? n : w.warn
                    },
                    warn: function(n, t) {
                        for (var r = [], c = 2; c < arguments.length; c++) r[c - 2] = arguments[c];
                        if (e >= w.warn && "undefined" != typeof console) {
                            var f = label + n;
                            t ? console.warn.apply(console, o([f + "\n", t], r, !1)) : console.warn.apply(console, o([f], r, !1))
                        }
                    },
                    error: function(n, t) {
                        for (var r = [], c = 2; c < arguments.length; c++) r[c - 2] = arguments[c];
                        if (e >= w.error && "undefined" != typeof console) {
                            var f = label + n + "\n";
                            t ? console.error.apply(console, o([f + "\n", t], r, !1)) : console.error.apply(console, o([f], r, !1))
                        }
                    },
                    debug: function(n) {
                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        e >= w.debug && "undefined" != typeof console && console.debug.apply(console, o([label + n], t, !1))
                    },
                    info: function(n) {
                        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        e >= w.info && "undefined" != typeof console && console.info.apply(console, o([label + n], t, !1))
                    }
                }
            }();

            function O() {
                var e = [],
                    n = [],
                    t = function(t) {
                        var r = function(e) {
                                for (var n = e.getJson(), t = 0, r = n; t < r.length; t++) {
                                    var o = r[t];
                                    if ("ue_px" === o.keyIfEncoded && "object" == typeof o.json.data) {
                                        var c = o.json.data.schema;
                                        if ("string" == typeof c) return c
                                    }
                                }
                                return ""
                            }(t),
                            o = function(e) {
                                var n = e.getPayload().e;
                                return "string" == typeof n ? n : ""
                            }(t),
                            c = [],
                            f = B(e, t, o, r);
                        c.push.apply(c, f);
                        var l = function(e, n, t, r) {
                            var o, c = _(e),
                                f = function(e) {
                                    var o = function(e, n, t, r) {
                                        if (E(e)) {
                                            var filter = e[0],
                                                o = !1;
                                            try {
                                                o = filter({
                                                    event: n.getPayload(),
                                                    eventType: t,
                                                    eventSchema: r
                                                })
                                            } catch (e) {
                                                o = !1
                                            }
                                            if (!0 === o) return B(e[1], n, t, r)
                                        } else if (j(e) && function(e, n) {
                                                var t = 0,
                                                    r = 0,
                                                    o = e.accept;
                                                Array.isArray(o) ? e.accept.some((function(e) {
                                                    return N(e, n)
                                                })) && r++ : "string" == typeof o && N(o, n) && r++;
                                                var c = e.reject;
                                                Array.isArray(c) ? e.reject.some((function(e) {
                                                    return N(e, n)
                                                })) && t++ : "string" == typeof c && N(c, n) && t++;
                                                if (r > 0 && 0 === t) return !0;
                                                if (0 === r && t > 0) return !1;
                                                return !1
                                            }(e[0], r)) return B(e[1], n, t, r);
                                        return []
                                    }(e, n, t, r);
                                    if (o && 0 !== o.length) return o
                                },
                                l = c.map(f);
                            return (o = []).concat.apply(o, l.filter((function(e) {
                                return null != e && e.filter(Boolean)
                            })))
                        }(n, t, o, r);
                        return c.push.apply(c, l), c
                    };
                return {
                    getGlobalPrimitives: function() {
                        return e
                    },
                    getConditionalProviders: function() {
                        return n
                    },
                    addGlobalContexts: function(t) {
                        for (var r = [], o = [], c = 0, f = t; c < f.length; c++) {
                            var l = f[c];
                            D(l) ? r.push(l) : C(l) && o.push(l)
                        }
                        e = e.concat(o), n = n.concat(r)
                    },
                    clearGlobalContexts: function() {
                        n = [], e = []
                    },
                    removeGlobalContexts: function(t) {
                        for (var r = function(t) {
                                D(t) ? n = n.filter((function(e) {
                                    return JSON.stringify(e) !== JSON.stringify(t)
                                })) : C(t) && (e = e.filter((function(e) {
                                    return JSON.stringify(e) !== JSON.stringify(t)
                                })))
                            }, o = 0, c = t; o < c.length; o++) {
                            r(c[o])
                        }
                    },
                    getApplicableContexts: function(e) {
                        return t(e)
                    }
                }
            }

            function x(input) {
                var e = input.split(".");
                return !!(e && e.length > 1) && function(e) {
                    if ("*" === e[0] || "*" === e[1]) return !1;
                    if (e.slice(2).length > 0) {
                        for (var n = !1, t = 0, r = e.slice(2); t < r.length; t++)
                            if ("*" === r[t]) n = !0;
                            else if (n) return !1;
                        return !0
                    }
                    return 2 == e.length
                }(e)
            }

            function k(input) {
                var e = new RegExp("^iglu:((?:(?:[a-zA-Z0-9-_]+|\\*).)+(?:[a-zA-Z0-9-_]+|\\*))/([a-zA-Z0-9-_.]+|\\*)/jsonschema/([1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)-(0|[1-9][0-9]*|\\*)$").exec(input);
                if (null !== e && x(e[1])) return e.slice(1, 6)
            }

            function T(input) {
                var e = k(input);
                if (e) {
                    var n = e[0];
                    return 5 === e.length && x(n)
                }
                return !1
            }

            function A(input) {
                return function(input) {
                    return Array.isArray(input) && input.every((function(e) {
                        return "string" == typeof e
                    }))
                }(input) ? input.every((function(e) {
                    return T(e)
                })) : "string" == typeof input && T(input)
            }

            function I(input) {
                var e = input;
                return !!(m(e) && "schema" in e && "data" in e) && ("string" == typeof e.schema && "object" == typeof e.data)
            }

            function P(input) {
                return "function" == typeof input && input.length <= 1
            }

            function C(input) {
                return P(input) || I(input)
            }

            function E(input) {
                return !(!Array.isArray(input) || 2 !== input.length) && (Array.isArray(input[1]) ? P(input[0]) && input[1].every(C) : P(input[0]) && C(input[1]))
            }

            function j(input) {
                return !(!Array.isArray(input) || 2 !== input.length) && (!! function(input) {
                    var e = input,
                        n = 0;
                    if (null != input && "object" == typeof input && !Array.isArray(input)) {
                        if (Object.prototype.hasOwnProperty.call(e, "accept")) {
                            if (!A(e.accept)) return !1;
                            n += 1
                        }
                        if (Object.prototype.hasOwnProperty.call(e, "reject")) {
                            if (!A(e.reject)) return !1;
                            n += 1
                        }
                        return n > 0 && n <= 2
                    }
                    return !1
                }(input[0]) && (Array.isArray(input[1]) ? input[1].every(C) : C(input[1])))
            }

            function D(input) {
                return E(input) || j(input)
            }

            function N(e, n) {
                if (!T(e)) return !1;
                var t = k(e),
                    r = function(input) {
                        var e = new RegExp("^iglu:([a-zA-Z0-9-_.]+)/([a-zA-Z0-9-_]+)/jsonschema/([1-9][0-9]*)-(0|[1-9][0-9]*)-(0|[1-9][0-9]*)$").exec(input);
                        if (null !== e) return e.slice(1, 6)
                    }(n);
                if (t && r) {
                    if (! function(e, n) {
                            var t = n.split("."),
                                r = e.split(".");
                            if (t && r) {
                                if (t.length !== r.length) return !1;
                                for (var i = 0; i < r.length; i++)
                                    if (!L(t[i], r[i])) return !1;
                                return !0
                            }
                            return !1
                        }(t[0], r[0])) return !1;
                    for (var i = 1; i < 5; i++)
                        if (!L(t[i], r[i])) return !1;
                    return !0
                }
                return !1
            }

            function L(e, n) {
                return e && n && "*" === e || e === n
            }

            function _(input) {
                return Array.isArray(input) ? input : Array.of(input)
            }

            function B(e, n, t, r) {
                var o, c = _(e).map((function(e) {
                    var o = function(e, n, t, r) {
                        if (I(e)) return [e];
                        if (P(e)) {
                            var o = function(e, n, t, r) {
                                var o = void 0;
                                try {
                                    return o = e({
                                        event: n.getPayload(),
                                        eventType: t,
                                        eventSchema: r
                                    }), Array.isArray(o) && o.every(I) || I(o) ? o : void 0
                                } catch (e) {
                                    o = void 0
                                }
                                return o
                            }(e, n, t, r);
                            if (I(o)) return [o];
                            if (Array.isArray(o)) return o
                        }
                        return
                    }(e, n, t, r);
                    if (o && 0 !== o.length) return o
                }));
                return (o = []).concat.apply(o, c.filter((function(e) {
                    return null != e && e.filter(Boolean)
                })))
            }

            function R(e) {
                void 0 === e && (e = {});
                var n = e.base64,
                    t = e.corePlugins,
                    f = e.callback,
                    l = null != t ? t : [],
                    d = function(e, n, t) {
                        var r = function(e) {
                                return {
                                    addPluginContexts: function(n) {
                                        var t = n ? o([], n, !0) : [];
                                        return e.forEach((function(e) {
                                            try {
                                                e.contexts && t.push.apply(t, e.contexts())
                                            } catch (e) {
                                                S.error("Error adding plugin contexts", e)
                                            }
                                        })), t
                                    }
                                }
                            }(n),
                            f = O(),
                            l = e,
                            d = {};

                        function v(e, n) {
                            d[e] = n
                        }
                        return {
                            track: function(e, o, v) {
                                e.withJsonProcessor(h(l)), e.add("eid", Object(c.v4)()), e.addDict(d);
                                var m = function(e) {
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
                                }(v);
                                e.add(m.type, m.value.toString());
                                var y = function(e, n) {
                                        var t = f.getApplicableContexts(e),
                                            r = [];
                                        return n && n.length && r.push.apply(r, n), t && t.length && r.push.apply(r, t), r
                                    }(e, r.addPluginContexts(o)),
                                    w = function(e) {
                                        if (e && e.length) return {
                                            schema: "iglu:com.snowplowanalytics.snowplow/contexts/jsonschema/1-0-0",
                                            data: e
                                        }
                                    }(y);
                                void 0 !== w && e.addJson("cx", "co", w), n.forEach((function(n) {
                                    try {
                                        n.beforeTrack && n.beforeTrack(e)
                                    } catch (e) {
                                        S.error("Plugin beforeTrack", e)
                                    }
                                })), "function" == typeof t && t(e);
                                var O = e.build();
                                return n.forEach((function(e) {
                                    try {
                                        e.afterTrack && e.afterTrack(O)
                                    } catch (e) {
                                        S.error("Plugin afterTrack", e)
                                    }
                                })), O
                            },
                            addPayloadPair: v,
                            getBase64Encoding: function() {
                                return l
                            },
                            setBase64Encoding: function(e) {
                                l = e
                            },
                            addPayloadDict: function(e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (d[n] = e[n])
                            },
                            resetPayloadPairs: function(e) {
                                d = y(e) ? e : {}
                            },
                            setTrackerVersion: function(e) {
                                v("tv", e)
                            },
                            setTrackerNamespace: function(e) {
                                v("tna", e)
                            },
                            setAppId: function(e) {
                                v("aid", e)
                            },
                            setPlatform: function(e) {
                                v("p", e)
                            },
                            setUserId: function(e) {
                                v("uid", e)
                            },
                            setScreenResolution: function(e, n) {
                                v("res", e + "x" + n)
                            },
                            setViewport: function(e, n) {
                                v("vp", e + "x" + n)
                            },
                            setColorDepth: function(e) {
                                v("cd", e)
                            },
                            setTimezone: function(e) {
                                v("tz", e)
                            },
                            setLang: function(e) {
                                v("lang", e)
                            },
                            setIpAddress: function(e) {
                                v("ip", e)
                            },
                            setUseragent: function(e) {
                                v("ua", e)
                            },
                            addGlobalContexts: function(e) {
                                f.addGlobalContexts(e)
                            },
                            clearGlobalContexts: function() {
                                f.clearGlobalContexts()
                            },
                            removeGlobalContexts: function(e) {
                                f.removeGlobalContexts(e)
                            }
                        }
                    }(null == n || n, l, f),
                    v = r(r({}, d), {
                        addPlugin: function(e) {
                            var n, t, r = e.plugin;
                            l.push(r), null === (n = r.logger) || void 0 === n || n.call(r, S), null === (t = r.activateCorePlugin) || void 0 === t || t.call(r, v)
                        }
                    });
                return null == l || l.forEach((function(e) {
                    var n, t;
                    null === (n = e.logger) || void 0 === n || n.call(e, S), null === (t = e.activateCorePlugin) || void 0 === t || t.call(e, v)
                })), v
            }
            var U = function() {
                return U = Object.assign || function(e) {
                    for (var s, i = 1, n = arguments.length; i < n; i++)
                        for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                    return e
                }, U.apply(this, arguments)
            };
            Object.create;
            Object.create;
            "function" == typeof SuppressedError && SuppressedError;
            var M = t(1015),
                H = t.n(M);

            function V() {
                var e = "modernizr";
                if (! function() {
                        try {
                            return !!window.localStorage
                        } catch (e) {
                            return !0
                        }
                    }()) return !1;
                try {
                    var n = window.localStorage;
                    return n.setItem(e, e), n.removeItem(e), !0
                } catch (e) {
                    return !1
                }
            }

            function z(e) {
                return !(!e || "string" != typeof e.valueOf())
            }

            function J(e) {
                return Number.isInteger && Number.isInteger(e) || "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }

            function G(title) {
                if (!z(title)) {
                    title = title.text || "";
                    var e = document.getElementsByTagName("title");
                    e && null != e[0] && (title = e[0].text)
                }
                return title
            }

            function X(e) {
                var n = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)").exec(e);
                return n ? n[1] : e
            }

            function F(e) {
                var dl = e.length;
                return "." === e.charAt(--dl) && (e = e.slice(0, dl)), "*." === e.slice(0, 2) && (e = e.slice(1)), e
            }

            function W(e) {
                var n = window,
                    t = Q("referrer", n.location.href) || Q("referer", n.location.href);
                if (t) return t;
                if (e) return e;
                try {
                    if (n.top) return n.top.document.referrer;
                    if (n.parent) return n.parent.document.referrer
                } catch (e) {}
                return document.referrer
            }

            function Y(element, e, n, t) {
                return element.addEventListener ? (element.addEventListener(e, n, t), !0) : element.attachEvent ? element.attachEvent("on" + e, n) : void(element["on" + e] = n)
            }

            function Q(e, n) {
                var t = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(n);
                return t ? decodeURIComponent(t[1].replace(/\+/g, " ")) : null
            }

            function Z(e, n, t) {
                void 0 === t && (t = 63072e3);
                try {
                    var r = window.localStorage,
                        o = Date.now() + 1e3 * t;
                    return r.setItem("".concat(e, ".expires"), o.toString()), r.setItem(e, n), !0
                } catch (e) {
                    return !1
                }
            }

            function K(e) {
                try {
                    var n = window.localStorage;
                    return n.removeItem(e), n.removeItem(e + ".expires"), !0
                } catch (e) {
                    return !1
                }
            }

            function $(e, n, t, r) {
                ne(e, "", -1, "/", n, t, r)
            }

            function ee(e) {
                for (var n = document.cookie.split("; "), t = [], i = 0; i < n.length; i++) n[i].substring(0, e.length) === e && t.push(n[i]);
                return t
            }

            function ne(e, n, t, path, r, o, c) {
                return arguments.length > 1 ? document.cookie = e + "=" + encodeURIComponent(null != n ? n : "") + (t ? "; Expires=" + new Date(+new Date + 1e3 * t).toUTCString() : "") + (path ? "; Path=" + path : "") + (r ? "; Domain=" + r : "") + (o ? "; SameSite=" + o : "") + (c ? "; Secure" : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0])
            }

            function te(e, n, t, r, o, c, f, l, d, v, h, m, y, w, O, x) {
                var k, T, A = !1,
                    I = [],
                    P = !0 === (r = "string" == typeof r ? r.toLowerCase() : r) || "beacon" === r || "true" === r,
                    C = Boolean(P && window.navigator && window.navigator.sendBeacon && !(function(e, n) {
                        var t = n.match("(iP.+; CPU .*OS (d+)[_d]*.*) AppleWebKit/");
                        return !(!t || !t.length) && parseInt(t[0]) <= e
                    }(13, T = window.navigator.userAgent) || function(e, n, t) {
                        var r = t.match("(Macintosh;.*Mac OS X (d+)_(d+)[_d]*.*) AppleWebKit/");
                        return !(!r || !r.length) && (parseInt(r[0]) <= e || parseInt(r[0]) === e && parseInt(r[1]) <= n)
                    }(10, 15, T) && function(e) {
                        return e.match("Version/.* Safari/") && ! function(e) {
                            return e.match("Chrom(e|ium)")
                        }(e)
                    }(T))) && P,
                    E = "get" === r,
                    j = Boolean(window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest),
                    D = !E && j && ("post" === r || P),
                    path = D ? o : "/i",
                    N = "snowplowOutQueue_".concat(e, "_").concat(D ? "post2" : "get");
                if (P && (y = {}), c = t && V() && D && c || 1, t) try {
                    var L = window.localStorage.getItem(N);
                    I = L ? JSON.parse(L) : []
                } catch (e) {}

                function _(e) {
                    var n = Object.keys(e).map((function(n) {
                        return [n, e[n]]
                    })).reduce((function(e, n) {
                        var t = n[0],
                            r = n[1];
                        return e[t] = r.toString(), e
                    }), {});
                    return {
                        evt: n,
                        bytes: B(JSON.stringify(n))
                    }
                }

                function B(s) {
                    for (var e = 0, i = 0; i < s.length; i++) {
                        var code = s.charCodeAt(i);
                        code <= 127 ? e += 1 : code <= 2047 ? e += 2 : code >= 55296 && code <= 57343 ? (e += 4, i++) : e += code < 65535 ? 3 : 4
                    }
                    return e
                }
                Array.isArray(I) || (I = []), n.outQueues.push(I), j && c > 1 && n.bufferFlushers.push((function(e) {
                    A || M(e)
                }));
                var R = function(e) {
                    return "object" == typeof e[0]
                };

                function U(body, e) {
                    H(e, !0, !1).send(J(G([body.evt])))
                }

                function M(e) {
                    for (void 0 === e && (e = !1); I.length && "string" != typeof I[0] && "object" != typeof I[0];) I.shift();
                    if (I.length < 1) A = !1;
                    else {
                        if (!z(k)) throw "No collector configured";
                        if (A = !0, j) {
                            var n, r, o = void 0;
                            R(I) ? (n = H(o = k, !0, e), r = function(e) {
                                for (var n = 0, t = 0; n < e.length && !((t += e[n].bytes) >= f);) n += 1;
                                return n
                            }(I)) : (o = X(I[0]), n = H(o, !1, e), r = 1);
                            var c = setTimeout((function() {
                                    n.abort(), A = !1
                                }), h),
                                l = function(e) {
                                    for (var n = 0; n < e; n++) I.shift();
                                    t && Z(N, JSON.stringify(I.slice(0, v)))
                                },
                                d = function(e) {
                                    l(e), M()
                                };
                            if (n.onreadystatechange = function() {
                                    4 === n.readyState && n.status >= 200 && (clearTimeout(c), n.status < 300 ? d(r) : (function(e) {
                                        if (e >= 200 && e < 300) return !1;
                                        if (O.includes(e)) return !0;
                                        return !x.includes(e)
                                    }(n.status) || (S.error("Status ".concat(n.status, ", will not retry.")), l(r)), A = !1))
                                }, R(I)) {
                                var y = I.slice(0, r);
                                if (y.length > 0) {
                                    var w = !1,
                                        T = y.map((function(e) {
                                            return e.evt
                                        }));
                                    if (C) {
                                        var P = new Blob([J(G(T))], {
                                            type: "application/json"
                                        });
                                        try {
                                            w = navigator.sendBeacon(o, P)
                                        } catch (e) {
                                            w = !1
                                        }
                                    }!0 === w ? d(r) : n.send(J(G(T)))
                                }
                            } else n.send()
                        } else if (m || R(I)) A = !1;
                        else {
                            var image = new Image(1, 1),
                                E = !0;
                            image.onload = function() {
                                E && (E = !1, I.shift(), t && Z(N, JSON.stringify(I.slice(0, v))), M())
                            }, image.onerror = function() {
                                E && (E = !1, A = !1)
                            }, image.src = X(I[0]), setTimeout((function() {
                                E && A && (E = !1, M())
                            }), h)
                        }
                    }
                }

                function H(e, n, t) {
                    var r = new XMLHttpRequest;
                    for (var header in n ? (r.open("POST", e, !t), r.setRequestHeader("Content-Type", "application/json; charset=UTF-8")) : r.open("GET", e, !t), r.withCredentials = w, m && r.setRequestHeader("SP-Anonymous", "*"), y) Object.prototype.hasOwnProperty.call(y, header) && r.setRequestHeader(header, y[header]);
                    return r
                }

                function J(e) {
                    return JSON.stringify({
                        schema: "iglu:com.snowplowanalytics.snowplow/payload_data/jsonschema/1-0-4",
                        data: e
                    })
                }

                function G(e) {
                    for (var n = (new Date).getTime().toString(), i = 0; i < e.length; i++) e[i].stm = n;
                    return e
                }

                function X(e) {
                    return d ? k + e.replace("?", "?stm=" + (new Date).getTime() + "&") : k + e
                }
                return {
                    enqueueRequest: function(e, n) {
                        k = n + path;
                        var r = function(e, n) {
                            return S.warn("Event (" + e + "B) too big, max is " + n)
                        };
                        if (D) {
                            if ((body = _(e)).bytes >= f) return r(body.bytes, f), void U(body, k);
                            I.push(body)
                        } else {
                            var d = function(e) {
                                var n = "?",
                                    t = {
                                        co: !0,
                                        cx: !0
                                    },
                                    r = !0;
                                for (var o in e) e.hasOwnProperty(o) && !t.hasOwnProperty(o) && (r ? r = !1 : n += "&", n += encodeURIComponent(o) + "=" + encodeURIComponent(e[o]));
                                for (var c in t) e.hasOwnProperty(c) && t.hasOwnProperty(c) && (n += "&" + c + "=" + encodeURIComponent(e[c]));
                                return n
                            }(e);
                            if (l > 0) {
                                var h = B(X(d));
                                if (h >= l) {
                                    var body;
                                    if (r(h, l), j) U(body = _(e), n + o);
                                    return
                                }
                            }
                            I.push(d)
                        }
                        var m = !1;
                        t && (m = Z(N, JSON.stringify(I.slice(0, v)))), A || m && !(I.length >= c) || M()
                    },
                    executeQueue: function() {
                        A || M()
                    },
                    setUseLocalStorage: function(e) {
                        t = e
                    },
                    setAnonymousTracking: function(e) {
                        m = e
                    },
                    setCollectorUrl: function(e) {
                        k = e + path
                    },
                    setBufferSize: function(e) {
                        c = e
                    }
                }
            }

            function re(e, n, t) {
                var r, o, c, f;
                return "translate.googleusercontent.com" === e ? ("" === t && (t = n), e = X(n = null !== (o = n, c = "u", r = (f = new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+))([?][^#]+)").exec(o)) && (null == f ? void 0 : f.length) > 1 ? Q(c, f[1]) : null) && void 0 !== r ? r : "")) : "cc.bingj.com" !== e && "webcache.googleusercontent.com" !== e || (e = X(n = document.links[0].href)), [e, n, t]
            }

            function oe(e, n) {
                void 0 === n && (n = 1), ce(e) ? (e[7] = e[6], e[5] = e[4], e[3]++) : e[3] = n;
                var t = Object(c.v4)();
                return e[6] = t, e[10] = 0, e[8] = "", e[9] = void 0, t
            }

            function ie(e) {
                e[4] = Math.round((new Date).getTime() / 1e3)
            }

            function ae(e) {
                return e[6]
            }

            function ue(e) {
                return e[3]
            }

            function ce(e) {
                return "0" === e[0]
            }

            function se(e, n, t, r, o, f) {
                void 0 === f && (f = {});
                var l = [],
                    d = function(e, n, t, r, o, f) {
                        var d, h, m, y, w, O, x, k, T, A, I, P, C, E, j, D, N, L, _, B, M, V, z, se, fe, le;
                        f.eventMethod = null !== (d = f.eventMethod) && void 0 !== d ? d : "post";
                        var de, ve, pe = function(e) {
                                var n;
                                return null !== (n = e.stateStorageStrategy) && void 0 !== n ? n : "cookieAndLocalStorage"
                            },
                            ge = function(e) {
                                var n, t;
                                return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withSessionTracking)) && void 0 !== t && t)
                            },
                            he = function(e) {
                                var n, t;
                                return "boolean" != typeof e.anonymousTracking && (null !== (t = !0 === (null === (n = e.anonymousTracking) || void 0 === n ? void 0 : n.withServerAnonymisation)) && void 0 !== t && t)
                            },
                            me = function(e) {
                                return !!e.anonymousTracking
                            };
                        l.push((de = function(e) {
                            return on ? null : e
                        }, ve = function(e) {
                            return tn ? e : de(e)
                        }, {
                            beforeTrack: function(e) {
                                var n, t, r, o, c, f = bn("ses"),
                                    l = Nn();
                                Ne = !!xe && !!ne(xe), $e || Ne ? En() : (ce(l) ? (je = f || "none" == an ? ae(l) : oe(l), cn = ue(l)) : (new Date).getTime() - un > 1e3 * nn && (cn++, je = oe(l, cn)), ie(l), function(e, n) {
                                    if (0 === e[10]) {
                                        var t = n.build();
                                        e[8] = t.eid;
                                        var r = t.dtm || t.ttm;
                                        e[9] = r ? parseInt(r) : void 0
                                    }
                                }(l, e), function(e) {
                                    e[10] += 1
                                }(l), e.add("vp", function() {
                                    var e, n;
                                    if ("innerWidth" in window) e = window.innerWidth, n = window.innerHeight;
                                    else {
                                        var t = document.documentElement || document.body;
                                        e = t.clientWidth, n = t.clientHeight
                                    }
                                    return e >= 0 && n >= 0 ? e + "x" + n : null
                                }()), e.add("ds", (n = document.documentElement, t = document.body, r = t ? Math.max(t.offsetHeight, t.scrollHeight) : 0, o = Math.max(n.clientWidth, n.offsetWidth, n.scrollWidth), c = Math.max(n.clientHeight, n.offsetHeight, n.scrollHeight, r), isNaN(o) || isNaN(c) ? "" : o + "x" + c)), e.add("vid", ve(cn)), e.add("sid", ve(je)), e.add("duid", de(function(e) {
                                    return e[1]
                                }(l))), e.add("uid", de(De)), pn(), e.add("refr", mn(ye || He)), e.add("url", mn(we || Me)), !vn || tn || on || function(e, n) {
                                    var t = {
                                        schema: "iglu:com.snowplowanalytics.snowplow/client_session/jsonschema/1-0-2",
                                        data: n
                                    };
                                    e.addContextEntity(t)
                                }(e, function(e, n) {
                                    var t = e[9];
                                    return {
                                        userId: e[1],
                                        sessionId: e[6],
                                        eventIndex: e[10],
                                        sessionIndex: e[3],
                                        previousSessionId: e[7] || null,
                                        storageMechanism: "localStorage" == n ? "LOCAL_STORAGE" : "COOKIE_1",
                                        firstEventId: e[8] || null,
                                        firstEventTimestamp: t ? new Date(t).toISOString() : null
                                    }
                                }(l, an)), "none" != an && (Pn(l), In()), un = (new Date).getTime())
                            }
                        })), (null === (m = null === (h = null == f ? void 0 : f.contexts) || void 0 === h ? void 0 : h.webPage) || void 0 === m || m) && l.push({
                            contexts: function() {
                                return [{
                                    schema: "iglu:com.snowplowanalytics.snowplow/web_page/jsonschema/1-0-0",
                                    data: {
                                        id: Bn()
                                    }
                                }]
                            }
                        }), l.push.apply(l, null !== (y = f.plugins) && void 0 !== y ? y : []);
                        var ye, we, be, Se, Oe, xe, ke, Te, Ae, Ie, Pe, Ce, Ee, je, De, Ne, Le = R({
                                base64: f.encodeBase64,
                                corePlugins: l,
                                callback: function(e) {
                                    $e || Ne || sn.enqueueRequest(e.build(), ze)
                                }
                            }),
                            _e = navigator.userLanguage || navigator.language,
                            Be = document.characterSet || document.charset,
                            Re = re(window.location.hostname, window.location.href, W()),
                            Ue = F(Re[0]),
                            Me = Re[1],
                            He = Re[2],
                            Ve = null !== (w = f.platform) && void 0 !== w ? w : "web",
                            ze = Ln(r),
                            Je = null !== (O = f.postPath) && void 0 !== O ? O : "/com.snowplowanalytics.snowplow/tp2",
                            Ge = null !== (x = f.appId) && void 0 !== x ? x : "",
                            Xe = document.title,
                            qe = null === (k = f.resetActivityTrackingOnPageView) || void 0 === k || k,
                            Fe = null !== (T = f.cookieName) && void 0 !== T ? T : "_sp_",
                            We = null !== (A = f.cookieDomain) && void 0 !== A ? A : void 0,
                            Ye = "/",
                            Qe = null !== (I = f.cookieSameSite) && void 0 !== I ? I : "None",
                            Ze = null === (P = f.cookieSecure) || void 0 === P || P,
                            Ke = navigator.doNotTrack || navigator.msDoNotTrack || window.doNotTrack,
                            $e = void 0 !== f.respectDoNotTrack && (f.respectDoNotTrack && ("yes" === Ke || "1" === Ke)),
                            en = null !== (C = f.cookieLifetime) && void 0 !== C ? C : 63072e3,
                            nn = null !== (E = f.sessionCookieTimeout) && void 0 !== E ? E : 1800,
                            tn = ge(f),
                            rn = he(f),
                            on = me(f),
                            an = pe(f),
                            un = (new Date).getTime(),
                            cn = 1,
                            sn = te(e, o, "localStorage" == an || "cookieAndLocalStorage" == an, f.eventMethod, Je, null !== (j = f.bufferSize) && void 0 !== j ? j : 1, null !== (D = f.maxPostBytes) && void 0 !== D ? D : 4e4, null !== (N = f.maxGetBytes) && void 0 !== N ? N : 0, null === (L = f.useStm) || void 0 === L || L, null !== (_ = f.maxLocalStorageQueueSize) && void 0 !== _ ? _ : 1e3, null !== (B = f.connectionTimeout) && void 0 !== B ? B : 5e3, rn, null !== (M = f.customHeaders) && void 0 !== M ? M : {}, null === (V = f.withCredentials) || void 0 === V || V, null !== (z = f.retryStatusCodes) && void 0 !== z ? z : [], (null !== (se = f.dontRetryStatusCodes) && void 0 !== se ? se : []).concat([400, 401, 403, 410, 422])),
                            fn = !1,
                            ln = !1,
                            dn = {
                                enabled: !1,
                                installed: !1,
                                configurations: {}
                            },
                            vn = null !== (le = null === (fe = f.contexts) || void 0 === fe ? void 0 : fe.session) && void 0 !== le && le;

                        function pn() {
                            (Re = re(window.location.hostname, window.location.href, W()))[1] !== Me && (He = W(Me)), Ue = F(Re[0]), Me = Re[1]
                        }

                        function gn(e) {
                            var n = (new Date).getTime(),
                                t = e.currentTarget;
                            (null == t ? void 0 : t.href) && (t.href = function(e, n, t) {
                                var r = n + "=" + t,
                                    o = e.split("#"),
                                    c = o[0].split("?"),
                                    f = c.shift(),
                                    l = c.join("?");
                                if (l) {
                                    for (var d = !0, v = l.split("&"), i = 0; i < v.length; i++)
                                        if (v[i].substr(0, n.length + 1) === n + "=") {
                                            d = !1, v[i] = r, l = v.join("&");
                                            break
                                        }
                                    d && (l = r + "&" + l)
                                } else l = r;
                                return o[0] = f + "?" + l, o.join("#")
                            }(t.href, "_sp", Ee + "." + n))
                        }

                        function hn(e) {
                            for (var i = 0; i < document.links.length; i++) {
                                var n = document.links[i];
                                !n.spDecorationEnabled && e(n) && (Y(n, "click", gn, !0), Y(n, "mousedown", gn, !0), n.spDecorationEnabled = !0)
                            }
                        }

                        function mn(e) {
                            var n;
                            return Se && (n = new RegExp("#.*"), e = e.replace(n, "")), Oe && (n = new RegExp("[{}]", "g"), e = e.replace(n, "")), e
                        }

                        function yn(e) {
                            var n = new RegExp("^([a-z]+):").exec(e);
                            return n ? n[1] : null
                        }

                        function wn(e) {
                            return Fe + e + "." + Ce
                        }

                        function bn(e) {
                            var n = wn(e);
                            return "localStorage" == an ? function(e) {
                                try {
                                    var n = window.localStorage,
                                        t = n.getItem(e + ".expires");
                                    return null === t || +t > Date.now() ? n.getItem(e) : (n.removeItem(e), void n.removeItem(e + ".expires"))
                                } catch (e) {
                                    return
                                }
                            }(n) : "cookie" == an || "cookieAndLocalStorage" == an ? ne(n) : void 0
                        }

                        function Sn() {
                            pn(), Ce = H()((We || Ue) + (Ye || "/")).slice(0, 4)
                        }

                        function On() {
                            var e = new Date;
                            ke = e.getTime()
                        }

                        function xn() {
                            ! function() {
                                var e = kn(),
                                    n = e[0];
                                n < Te ? Te = n : n > Ae && (Ae = n);
                                var t = e[1];
                                t < Ie ? Ie = t : t > Pe && (Pe = t)
                            }(), On()
                        }

                        function kn() {
                            var e = document.documentElement;
                            return e ? [e.scrollLeft || window.pageXOffset, e.scrollTop || window.pageYOffset] : [0, 0]
                        }

                        function Tn() {
                            var e = kn(),
                                n = e[0];
                            Te = n, Ae = n;
                            var t = e[1];
                            Ie = t, Pe = t
                        }

                        function An(e) {
                            return Math.round(e)
                        }

                        function In() {
                            Cn(wn("ses"), "*", nn)
                        }

                        function Pn(e) {
                            var n = wn("id"),
                                t = function(e) {
                                    return e.shift(), e.join(".")
                                }(e);
                            Cn(n, t, en)
                        }

                        function Cn(e, n, t) {
                            on && !tn || ("localStorage" == an ? Z(e, n, t) : "cookie" != an && "cookieAndLocalStorage" != an || ne(e, n, t, Ye, We, Qe, Ze))
                        }

                        function En(e) {
                            var n = wn("id"),
                                t = wn("ses");
                            K(n), K(t), $(n, We, Qe, Ze), $(t, We, Qe, Ze), (null == e ? void 0 : e.preserveSession) || (je = Object(c.v4)(), cn = 1), (null == e ? void 0 : e.preserveUser) || (Ee = Object(c.v4)(), De = null)
                        }

                        function jn(e) {
                            e && e.stateStorageStrategy && (f.stateStorageStrategy = e.stateStorageStrategy, an = pe(f)), on = me(f), tn = ge(f), rn = he(f), sn.setUseLocalStorage("localStorage" == an || "cookieAndLocalStorage" == an), sn.setAnonymousTracking(rn)
                        }

                        function Dn() {
                            if (!on || tn) {
                                var e = "none" != an && !!bn("ses"),
                                    n = Nn();
                                Ee = function(e, n) {
                                    var t;
                                    return e[1] ? t = e[1] : n ? (t = "", e[1] = t) : (t = Object(c.v4)(), e[1] = t), t
                                }(n, on), je = e ? ae(n) : oe(n), cn = ue(n), "none" != an && (In(), ie(n), Pn(n))
                            }
                        }

                        function Nn() {
                            return "none" == an ? ["1", "", 0, 0, 0, void 0, "", "", "", void 0, 0] : function(e, n, t, r) {
                                var o, f = new Date,
                                    l = Math.round(f.getTime() / 1e3);
                                e ? (o = e.split(".")).unshift("0") : o = ["1", n, l, r, l, "", t], o[6] && "undefined" !== o[6] || (o[6] = Object(c.v4)()), o[7] && "undefined" !== o[7] || (o[7] = ""), o[8] && "undefined" !== o[8] || (o[8] = ""), o[9] && "undefined" !== o[9] || (o[9] = ""), o[10] && "undefined" !== o[10] || (o[10] = 0);
                                var d = function(e, n) {
                                        var t = parseInt(e);
                                        return isNaN(t) ? n : t
                                    },
                                    v = function(e) {
                                        return e ? d(e, void 0) : void 0
                                    };
                                return [o[0], o[1], d(o[2], l), d(o[3], r), d(o[4], l), v(o[5]), o[6], o[7], o[8], v(o[9]), d(o[10], 0)]
                            }(bn("id") || void 0, Ee, je, cn)
                        }

                        function Ln(e) {
                            return 0 === e.indexOf("http") ? e : ("https:" === document.location.protocol ? "https" : "http") + "://" + e
                        }

                        function _n() {
                            fn && null != o.pageViewId || (o.pageViewId = Object(c.v4)())
                        }

                        function Bn() {
                            return null == o.pageViewId && (o.pageViewId = Object(c.v4)()), o.pageViewId
                        }

                        function Rn(e, n) {
                            return (e || []).concat(n ? n() : [])
                        }

                        function Un(e) {
                            var title = e.title,
                                n = e.context,
                                t = e.timestamp,
                                r = e.contextCallback;
                            pn(), ln && _n(), ln = !0, Xe = document.title;
                            var o = G((be = title) || Xe);
                            Le.track(function(e) {
                                var n = e.pageUrl,
                                    t = e.pageTitle,
                                    r = e.referrer,
                                    o = v();
                                return o.add("e", "pv"), o.add("url", n), o.add("page", t), o.add("refr", r), o
                            }({
                                pageUrl: mn(we || Me),
                                pageTitle: o,
                                referrer: mn(ye || He)
                            }), Rn(n, r), t);
                            var c = new Date,
                                f = !1;
                            if (dn.enabled && !dn.installed) {
                                dn.installed = !0, f = !0;
                                var l = {
                                    update: function() {
                                        if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                                            var e = !1,
                                                n = Object.defineProperty({}, "passive", {
                                                    get: function() {
                                                        e = !0
                                                    },
                                                    set: function() {}
                                                }),
                                                t = function() {};
                                            window.addEventListener("testPassiveEventSupport", t, n), window.removeEventListener("testPassiveEventSupport", t, n), l.hasSupport = e
                                        }
                                    }
                                };
                                l.update();
                                var d = "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                                Object.prototype.hasOwnProperty.call(l, "hasSupport") ? Y(document, d, On, {
                                    passive: !0
                                }) : Y(document, d, On), Tn();
                                var h = function(e, n) {
                                    return void 0 === n && (n = On),
                                        function(e) {
                                            return Y(document, e, n)
                                        }
                                };
                                ["click", "mouseup", "mousedown", "mousemove", "keypress", "keydown", "keyup"].forEach(h(document)), ["resize", "focus", "blur"].forEach(h(window)), h(window, xn)("scroll")
                            }
                            if (dn.enabled && (qe || f)) {
                                ke = c.getTime();
                                var m = void 0;
                                for (m in dn.configurations) {
                                    var y = dn.configurations[m];
                                    y && (window.clearInterval(y.activityInterval), Mn(y, n, r))
                                }
                            }
                        }

                        function Mn(e, n, t) {
                            var r = function(e, n) {
                                    pn(), e({
                                        context: n,
                                        pageViewId: Bn(),
                                        minXOffset: Te,
                                        minYOffset: Ie,
                                        maxXOffset: Ae,
                                        maxYOffset: Pe
                                    }), Tn()
                                },
                                o = function() {
                                    var o = new Date;
                                    ke + e.configHeartBeatTimer > o.getTime() && r(e.callback, Rn(n, t))
                                };
                            0 != e.configMinimumVisitLength ? e.activityInterval = window.setTimeout((function() {
                                var c = new Date;
                                ke + e.configMinimumVisitLength > c.getTime() && r(e.callback, Rn(n, t)), e.activityInterval = window.setInterval(o, e.configHeartBeatTimer)
                            }), e.configMinimumVisitLength) : e.activityInterval = window.setInterval(o, e.configHeartBeatTimer)
                        }

                        function Hn(e) {
                            var n = e.minimumVisitLength,
                                t = e.heartbeatDelay,
                                r = e.callback;
                            if (J(n) && J(t)) return {
                                configMinimumVisitLength: 1e3 * n,
                                configHeartBeatTimer: 1e3 * t,
                                callback: r
                            };
                            S.error("Activity tracking minimumVisitLength & heartbeatDelay must be integers")
                        }

                        function Vn(e) {
                            var n = e.context,
                                t = e.minXOffset,
                                r = e.minYOffset,
                                o = e.maxXOffset,
                                c = e.maxYOffset,
                                f = document.title;
                            f !== Xe && (Xe = f, be = void 0), Le.track(function(e) {
                                var n = e.pageUrl,
                                    t = e.pageTitle,
                                    r = e.referrer,
                                    o = e.minXOffset,
                                    c = e.maxXOffset,
                                    f = e.minYOffset,
                                    l = e.maxYOffset,
                                    d = v();
                                return d.add("e", "pp"), d.add("url", n), d.add("page", t), d.add("refr", r), o && !isNaN(Number(o)) && d.add("pp_mix", o.toString()), c && !isNaN(Number(c)) && d.add("pp_max", c.toString()), f && !isNaN(Number(f)) && d.add("pp_miy", f.toString()), l && !isNaN(Number(l)) && d.add("pp_may", l.toString()), d
                            }({
                                pageUrl: mn(we || Me),
                                pageTitle: G(be || Xe),
                                referrer: mn(ye || He),
                                minXOffset: An(t),
                                maxXOffset: An(o),
                                minYOffset: An(r),
                                maxYOffset: An(c)
                            }), n)
                        }
                        f.hasOwnProperty("discoverRootDomain") && f.discoverRootDomain && (We = function(e, n) {
                            for (var t = window.location.hostname, r = "_sp_root_domain_test_", o = r + (new Date).getTime(), c = "_test_value_" + (new Date).getTime(), f = t.split("."), l = f.length - 1; l >= 0;) {
                                var d = f.slice(l, f.length).join(".");
                                if (ne(o, c, 0, "/", d, e, n), ne(o) === c) {
                                    $(o, d, e, n);
                                    for (var v = ee(r), i = 0; i < v.length; i++) $(v[i], d, e, n);
                                    return d
                                }
                                l -= 1
                            }
                            return t
                        }(Qe, Ze)), Le.setTrackerVersion(t), Le.setTrackerNamespace(n), Le.setAppId(Ge), Le.setPlatform(Ve), Le.addPayloadPair("cookie", navigator.cookieEnabled ? "1" : "0"), Le.addPayloadPair("cs", Be), Le.addPayloadPair("lang", _e), Le.addPayloadPair("res", screen.width + "x" + screen.height), Le.addPayloadPair("cd", screen.colorDepth), Sn(), Dn(), f.crossDomainLinker && hn(f.crossDomainLinker);
                        var zn = {
                            getDomainSessionIndex: function() {
                                return cn
                            },
                            getPageViewId: function() {
                                return Bn()
                            },
                            newSession: function() {
                                var e = Nn();
                                ce(e) ? (je = "none" != an ? oe(e) : ae(e), cn = ue(e), In()) : (cn++, je = oe(e, cn)), ie(e), "none" != an && (Pn(e), In()), un = (new Date).getTime()
                            },
                            getCookieName: function(e) {
                                return wn(e)
                            },
                            getUserId: function() {
                                return De
                            },
                            getDomainUserId: function() {
                                return Nn()[1]
                            },
                            getDomainUserInfo: function() {
                                return Nn()
                            },
                            setReferrerUrl: function(e) {
                                ye = e
                            },
                            setCustomUrl: function(e) {
                                pn(), we = function(e, n) {
                                    var i;
                                    return yn(n) ? n : "/" === n.slice(0, 1) ? yn(e) + "://" + X(e) + n : ((i = (e = mn(e)).indexOf("?")) >= 0 && (e = e.slice(0, i)), (i = e.lastIndexOf("/")) !== e.length - 1 && (e = e.slice(0, i + 1)), e + n)
                                }(Me, e)
                            },
                            setDocumentTitle: function(title) {
                                Xe = document.title, be = title
                            },
                            discardHashTag: function(e) {
                                Se = e
                            },
                            discardBrace: function(e) {
                                Oe = e
                            },
                            setCookiePath: function(path) {
                                Ye = path, Sn()
                            },
                            setVisitorCookieTimeout: function(e) {
                                en = e
                            },
                            crossDomainLinker: function(e) {
                                hn(e)
                            },
                            enableActivityTracking: function(e) {
                                dn.configurations.pagePing || (dn.enabled = !0, dn.configurations.pagePing = Hn(U(U({}, e), {
                                    callback: Vn
                                })))
                            },
                            enableActivityTrackingCallback: function(e) {
                                dn.configurations.callback || (dn.enabled = !0, dn.configurations.callback = Hn(e))
                            },
                            updatePageActivity: function() {
                                On()
                            },
                            setOptOutCookie: function(e) {
                                xe = e
                            },
                            setUserId: function(e) {
                                De = e
                            },
                            setUserIdFromLocation: function(e) {
                                pn(), De = Q(e, Me)
                            },
                            setUserIdFromReferrer: function(e) {
                                pn(), De = Q(e, He)
                            },
                            setUserIdFromCookie: function(e) {
                                De = ne(e)
                            },
                            setCollectorUrl: function(e) {
                                ze = Ln(e), sn.setCollectorUrl(ze)
                            },
                            setBufferSize: function(e) {
                                sn.setBufferSize(e)
                            },
                            flushBuffer: function(e) {
                                void 0 === e && (e = {}), sn.executeQueue(), e.newBufferSize && sn.setBufferSize(e.newBufferSize)
                            },
                            trackPageView: function(e) {
                                void 0 === e && (e = {}), Un(e)
                            },
                            preservePageViewId: function() {
                                fn = !0
                            },
                            disableAnonymousTracking: function(e) {
                                f.anonymousTracking = !1, jn(e), Dn(), sn.executeQueue()
                            },
                            enableAnonymousTracking: function(e) {
                                var n;
                                f.anonymousTracking = null === (n = e && (null == e ? void 0 : e.options)) || void 0 === n || n, jn(e), tn || _n()
                            },
                            clearUserData: En
                        };
                        return U(U({}, zn), {
                            id: e,
                            namespace: n,
                            core: Le,
                            sharedState: o
                        })
                    }(e, n, t, r, o, f),
                    h = U(U({}, d), {
                        addPlugin: function(e) {
                            var n, t;
                            h.core.addPlugin(e), null === (t = (n = e.plugin).activateBrowserPlugin) || void 0 === t || t.call(n, h)
                        }
                    });
                return l.forEach((function(p) {
                    var e;
                    null === (e = p.activateBrowserPlugin) || void 0 === e || e.call(p, h)
                })), h
            }
            var fe = {};

            function le(e, n) {
                try {
                    (t = null != e ? e : Object.keys(fe), de(t, fe)).forEach(n)
                } catch (e) {
                    S.error("Function failed", e)
                }
                var t
            }

            function de(e, n) {
                for (var t = [], r = 0, o = e; r < o.length; r++) {
                    var c = o[r];
                    n.hasOwnProperty(c) ? t.push(n[c]) : S.warn(c + " not configured")
                }
                return t
            }
            var ve = function() {
                this.outQueues = [], this.bufferFlushers = [], this.hasLoaded = !1, this.registeredOnLoadHandlers = []
            };

            function pe(e, n) {
                le(n, (function(n) {
                    n.enableActivityTracking(e)
                }))
            }

            function ge(e, n) {
                le(n, (function(n) {
                    n.trackPageView(e)
                }))
            }

            function he(e, n) {
                le(n, (function(n) {
                    n.core.track(function(e) {
                        var n = e.category,
                            t = e.action,
                            label = e.label,
                            r = e.property,
                            o = e.value,
                            c = v();
                        return c.add("e", "se"), c.add("se_ca", n), c.add("se_ac", t), c.add("se_la", label), c.add("se_pr", r), c.add("se_va", null == o ? void 0 : o.toString()), c
                    }(e), e.context, e.timestamp)
                }))
            }
            var me = "undefined" != typeof window ? function() {
                var e = new ve,
                    n = document,
                    t = window;

                function r() {
                    var i;
                    if (!e.hasLoaded)
                        for (e.hasLoaded = !0, i = 0; i < e.registeredOnLoadHandlers.length; i++) e.registeredOnLoadHandlers[i]();
                    return !0
                }
                return n.visibilityState && Y(n, "visibilitychange", (function() {
                    "hidden" == n.visibilityState && e.bufferFlushers.forEach((function(e) {
                        e(!1)
                    }))
                }), !1), Y(t, "beforeunload", (function() {
                    e.bufferFlushers.forEach((function(e) {
                        e(!1)
                    }))
                }), !1), "loading" === document.readyState ? (n.addEventListener ? n.addEventListener("DOMContentLoaded", (function e() {
                    n.removeEventListener("DOMContentLoaded", e, !1), r()
                })) : n.attachEvent && n.attachEvent("onreadystatechange", (function e() {
                    "complete" === n.readyState && (n.detachEvent("onreadystatechange", e), r())
                })), Y(t, "load", r, !1)) : r(), e
            }() : void 0;

            function ye(e, n, t) {
                return void 0 === t && (t = {}), me ? function(e, n, t, r, o, c) {
                    return fe.hasOwnProperty(e) ? null : (fe[e] = se(e, n, t, r, o, c), fe[e])
                }(e, e, "js-".concat("3.7.0"), n, me, t) : void 0
            }
        },
        896: function(e, n) {
            var t = {
                utf8: {
                    stringToBytes: function(e) {
                        return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
                    },
                    bytesToString: function(e) {
                        return decodeURIComponent(escape(t.bin.bytesToString(e)))
                    }
                },
                bin: {
                    stringToBytes: function(e) {
                        for (var n = [], i = 0; i < e.length; i++) n.push(255 & e.charCodeAt(i));
                        return n
                    },
                    bytesToString: function(e) {
                        for (var n = [], i = 0; i < e.length; i++) n.push(String.fromCharCode(e[i]));
                        return n.join("")
                    }
                }
            };
            e.exports = t
        }
    }
]);