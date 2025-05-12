/*! For license information please see LICENSES */ ! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3e8eb28a-38f1-4599-9d2c-f2998640c149", e._sentryDebugIdIdentifier = "sentry-dbid-3e8eb28a-38f1-4599-9d2c-f2998640c149")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [85], {
        100: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return C
            })), n.d(t, "a", (function() {
                return I
            })), n.d(t, "i", (function() {
                return R
            })), n.d(t, "j", (function() {
                return L
            })), n.d(t, "e", (function() {
                return T
            })), n.d(t, "h", (function() {
                return k
            })), n.d(t, "f", (function() {
                return P
            })), n.d(t, "g", (function() {
                return D
            })), n.d(t, "c", (function() {
                return M
            })), n.d(t, "d", (function() {
                return V
            }));
            var r = n(55),
                o = /^[0-9]+$/,
                c = function(a, b) {
                    var e = o.test(a),
                        t = o.test(b);
                    return e && t && (a = +a, b = +b), a === b ? 0 : e && !t ? -1 : t && !e ? 1 : a < b ? -1 : 1
                },
                l = Number.MAX_SAFE_INTEGER || 9007199254740991,
                f = [],
                h = [],
                d = {},
                v = 0,
                y = function(e, t) {
                    var n = v++;
                    d[e] = n, h[n] = t, f[n] = new RegExp(t)
                };
            y("NUMERICIDENTIFIER", "0|[1-9]\\d*"), y("NUMERICIDENTIFIERLOOSE", "[0-9]+"), y("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), y("MAINVERSION", "(".concat(h[d.NUMERICIDENTIFIER], ")\\.") + "(".concat(h[d.NUMERICIDENTIFIER], ")\\.") + "(".concat(h[d.NUMERICIDENTIFIER], ")")), y("MAINVERSIONLOOSE", "(".concat(h[d.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(h[d.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(h[d.NUMERICIDENTIFIERLOOSE], ")")), y("PRERELEASEIDENTIFIER", "(?:".concat(h[d.NUMERICIDENTIFIER], "|").concat(h[d.NONNUMERICIDENTIFIER], ")")), y("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(h[d.NUMERICIDENTIFIERLOOSE], "|").concat(h[d.NONNUMERICIDENTIFIER], ")")), y("PRERELEASE", "(?:-(".concat(h[d.PRERELEASEIDENTIFIER], "(?:\\.").concat(h[d.PRERELEASEIDENTIFIER], ")*))")), y("PRERELEASELOOSE", "(?:-?(".concat(h[d.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(h[d.PRERELEASEIDENTIFIERLOOSE], ")*))")), y("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), y("BUILD", "(?:\\+(".concat(h[d.BUILDIDENTIFIER], "(?:\\.").concat(h[d.BUILDIDENTIFIER], ")*))")), y("FULLPLAIN", "v?".concat(h[d.MAINVERSION]).concat(h[d.PRERELEASE], "?").concat(h[d.BUILD], "?")), y("FULL", "^".concat(h[d.FULLPLAIN], "$")), y("LOOSEPLAIN", "[v=\\s]*".concat(h[d.MAINVERSIONLOOSE]).concat(h[d.PRERELEASELOOSE], "?").concat(h[d.BUILD], "?")), y("LOOSE", "^".concat(h[d.LOOSEPLAIN], "$"));
            var m = function() {
                    function e(t, n) {
                        if (n && "object" == typeof n || (n = {
                                loose: !!n,
                                includePrerelease: !1
                            }), t instanceof e) {
                            if (t.loose === !!n.loose && t.includePrerelease === !!n.includePrerelease) return t;
                            t = t.version
                        } else if ("string" != typeof t) throw new TypeError("Invalid Version: ".concat(t));
                        if (t.length > 256) throw new TypeError("version is longer than ".concat(256, " characters"));
                        this.options = n, this.loose = !!n.loose, this.includePrerelease = !!n.includePrerelease;
                        var r = t.trim().match(n.loose ? f[d.LOOSE] : f[d.FULL]);
                        if (!r) throw new TypeError("Invalid Version: ".concat(t));
                        if (this.raw = t, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > l || this.major < 0) throw new TypeError("Invalid major version");
                        if (this.minor > l || this.minor < 0) throw new TypeError("Invalid minor version");
                        if (this.patch > l || this.patch < 0) throw new TypeError("Invalid patch version");
                        r[4] ? this.prerelease = r[4].split(".").map((function(e) {
                            if (/^[0-9]+$/.test(e)) {
                                var t = +e;
                                if (t >= 0 && t < l) return t
                            }
                            return e
                        })) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
                    }
                    return e.prototype.format = function() {
                        return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version
                    }, e.prototype.toString = function() {
                        return this.version
                    }, e.prototype.compare = function(t) {
                        if (!(t instanceof e)) {
                            if ("string" == typeof t && t === this.version) return 0;
                            t = new e(t, this.options)
                        }
                        return t.version === this.version ? 0 : this.compareMain(t) || this.comparePre(t)
                    }, e.prototype.compareMain = function(t) {
                        return t instanceof e || (t = new e(t, this.options)), c(this.major, t.major) || c(this.minor, t.minor) || c(this.patch, t.patch)
                    }, e.prototype.comparePre = function(t) {
                        if (t instanceof e || (t = new e(t, this.options)), this.prerelease.length && !t.prerelease.length) return -1;
                        if (!this.prerelease.length && t.prerelease.length) return 1;
                        if (!this.prerelease.length && !t.prerelease.length) return 0;
                        var i = 0;
                        do {
                            var a = this.prerelease[i],
                                b = t.prerelease[i];
                            if (void 0 === a && void 0 === b) return 0;
                            if (void 0 === b) return 1;
                            if (void 0 === a) return -1;
                            if (a !== b) return c(a, b)
                        } while (++i)
                    }, e.prototype.compareBuild = function(t) {
                        t instanceof e || (t = new e(t, this.options));
                        var i = 0;
                        do {
                            var a = this.build[i],
                                b = t.build[i];
                            if (void 0 === a && void 0 === b) return 0;
                            if (void 0 === b) return 1;
                            if (void 0 === a) return -1;
                            if (a !== b) return c(a, b)
                        } while (++i)
                    }, e.prototype.inc = function(e, t) {
                        switch (e) {
                            case "premajor":
                                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
                                break;
                            case "preminor":
                                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
                                break;
                            case "prepatch":
                                this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
                                break;
                            case "prerelease":
                                0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
                                break;
                            case "major":
                                0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                                break;
                            case "minor":
                                0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                                break;
                            case "patch":
                                0 === this.prerelease.length && this.patch++, this.prerelease = [];
                                break;
                            case "pre":
                                if (0 === this.prerelease.length) this.prerelease = [0];
                                else {
                                    for (var i = this.prerelease.length; --i >= 0;) "number" == typeof this.prerelease[i] && (this.prerelease[i]++, i = -2); - 1 === i && this.prerelease.push(0)
                                }
                                t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
                                break;
                            default:
                                throw new Error("invalid increment argument: ".concat(e))
                        }
                        return this.format(), this.raw = this.version, this
                    }, e
                }(),
                O = function(a, b, e) {
                    return new m(a, e).compare(new m(b, e))
                },
                E = function(e) {
                    var t = function(e, t) {
                        if (t && "object" == typeof t || (t = {
                                loose: !!t,
                                includePrerelease: !1
                            }), e instanceof m) return e;
                        if ("string" != typeof e) return null;
                        if (e.length > 256) return null;
                        if (!(t.loose ? f[d.LOOSE] : f[d.FULL]).test(e)) return null;
                        try {
                            return new m(e, t)
                        } catch (e) {
                            return null
                        }
                    }(e, !1);
                    return t ? t.version : null
                };

            function w(e) {
                function t(e, s) {
                    return e << s | e >>> 32 - s
                }

                function n(e) {
                    for (var t = "", i = 7; i >= 0; i--) t += (e >>> 4 * i & 15).toString(16);
                    return t
                }
                var r, i, o, c, l, f, h, d, v, y = new Array(80),
                    m = 1732584193,
                    O = 4023233417,
                    E = 2562383102,
                    w = 271733878,
                    A = 3285377520,
                    C = (e = function(e) {
                        e = e.replace(/\r\n/g, "\n");
                        for (var t = "", n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128))
                        }
                        return t
                    }(e)).length,
                    I = new Array;
                for (i = 0; i < C - 3; i += 4) o = e.charCodeAt(i) << 24 | e.charCodeAt(i + 1) << 16 | e.charCodeAt(i + 2) << 8 | e.charCodeAt(i + 3), I.push(o);
                switch (C % 4) {
                    case 0:
                        i = 2147483648;
                        break;
                    case 1:
                        i = e.charCodeAt(C - 1) << 24 | 8388608;
                        break;
                    case 2:
                        i = e.charCodeAt(C - 2) << 24 | e.charCodeAt(C - 1) << 16 | 32768;
                        break;
                    case 3:
                        i = e.charCodeAt(C - 3) << 24 | e.charCodeAt(C - 2) << 16 | e.charCodeAt(C - 1) << 8 | 128
                }
                for (I.push(i); I.length % 16 != 14;) I.push(0);
                for (I.push(C >>> 29), I.push(C << 3 & 4294967295), r = 0; r < I.length; r += 16) {
                    for (i = 0; i < 16; i++) y[i] = I[r + i];
                    for (i = 16; i <= 79; i++) y[i] = t(y[i - 3] ^ y[i - 8] ^ y[i - 14] ^ y[i - 16], 1);
                    for (c = m, l = O, f = E, h = w, d = A, i = 0; i <= 19; i++) v = t(c, 5) + (l & f | ~l & h) + d + y[i] + 1518500249 & 4294967295, d = h, h = f, f = t(l, 30), l = c, c = v;
                    for (i = 20; i <= 39; i++) v = t(c, 5) + (l ^ f ^ h) + d + y[i] + 1859775393 & 4294967295, d = h, h = f, f = t(l, 30), l = c, c = v;
                    for (i = 40; i <= 59; i++) v = t(c, 5) + (l & f | l & h | f & h) + d + y[i] + 2400959708 & 4294967295, d = h, h = f, f = t(l, 30), l = c, c = v;
                    for (i = 60; i <= 79; i++) v = t(c, 5) + (l ^ f ^ h) + d + y[i] + 3395469782 & 4294967295, d = h, h = f, f = t(l, 30), l = c, c = v;
                    m = m + c & 4294967295, O = O + l & 4294967295, E = E + f & 4294967295, w = w + h & 4294967295, A = A + d & 4294967295
                }
                return (n(m) + n(O) + n(E) + n(w) + n(A)).toLowerCase()
            }
            var A = n(59),
                C = function(e, t, n, r) {
                    this.custom = {}, this.identifier = e, this.email = t, this.country = n, this.custom = r || {}
                },
                I = function() {
                    function e(e) {
                        this.logger = e
                    }
                    return e.prototype.Evaluate = function(e, t, n, r, o) {
                        this.logger.debug("RolloutEvaluator.Evaluate() called.");
                        var c, l = new S;
                        l.User = r, l.KeyName = t, l.ReturnValue = n;
                        try {
                            if (r) {
                                if (null !== (c = this.EvaluateRules(e.rolloutRules, r, l))) return l.ReturnValue = c.value, j(t, c, Object(A.d)(o), r);
                                if (c = this.EvaluatePercentageRules(e.rolloutPercentageItems, t, r), e.rolloutPercentageItems && e.rolloutPercentageItems.length > 0 && l.OpAppendLine("Evaluating % options => " + (c ? "user targeted" : "user not targeted")), null !== c) return l.ReturnValue = c.value, j(t, c, Object(A.d)(o), r)
                            } else if (e.rolloutRules && e.rolloutRules.length > 0 || e.rolloutPercentageItems && e.rolloutPercentageItems.length > 0) {
                                var s = "Evaluating getValue('" + t + "'). ";
                                s += "UserObject missing! You should pass a UserObject to getValue(), in order to make targeting work properly. ", s += "Read more: https://configcat.com/docs/advanced/user-object", this.logger.warn(s)
                            }
                            return c = {
                                value: e.value,
                                variationId: e.variationId
                            }, l.ReturnValue = c.value, j(t, c, Object(A.d)(o), r)
                        } finally {
                            this.logger.info(l.GetLog())
                        }
                    }, e.prototype.EvaluateRules = function(e, t, n) {
                        if (this.logger.debug("RolloutEvaluator.EvaluateRules() called."), e && e.length > 0)
                            for (var r = function(i) {
                                    var r = e[i],
                                        c = o.GetUserAttribute(t, r.comparisonAttribute),
                                        l = r.comparator,
                                        f = r.comparisonValue,
                                        h = "Evaluating rule: '" + c + "' " + o.RuleToString(l) + " '" + f + "' => ";
                                    if (!c) return h += "NO MATCH (Attribute is not defined on the user object)", n.OpAppendLine(h), "continue";
                                    var d = {
                                        value: r.value,
                                        variationId: r.variationId,
                                        matchedRule: r
                                    };
                                    switch (l) {
                                        case 0:
                                            for (var v = f.split(","), y = 0; y < v.length; y++)
                                                if (v[y].trim() === c) return h += "MATCH", n.OpAppendLine(h), {
                                                    value: d
                                                };
                                            h += "no match";
                                            break;
                                        case 1:
                                            if (!f.split(",").some((function(e) {
                                                    return e.trim() === c
                                                }))) return h += "MATCH", n.OpAppendLine(h), {
                                                value: d
                                            };
                                            h += "no match";
                                            break;
                                        case 2:
                                            if (-1 !== c.indexOf(f)) return h += "MATCH", n.OpAppendLine(h), {
                                                value: d
                                            };
                                            h += "no match";
                                            break;
                                        case 3:
                                            if (-1 === c.indexOf(f)) return h += "MATCH", n.OpAppendLine(h), {
                                                value: d
                                            };
                                            h += "no match";
                                            break;
                                        case 4:
                                        case 5:
                                        case 6:
                                        case 7:
                                        case 8:
                                        case 9:
                                            if (o.EvaluateSemver(c, f, l)) return h += "MATCH", n.OpAppendLine(h), {
                                                value: d
                                            };
                                            h += "no match";
                                            break;
                                        case 10:
                                        case 11:
                                        case 12:
                                        case 13:
                                        case 14:
                                        case 15:
                                            if (o.EvaluateNumber(c, f, l)) return h += "MATCH", n.OpAppendLine(h), {
                                                value: d
                                            };
                                            h += "no match";
                                            break;
                                        case 16:
                                            var m = f.split(",");
                                            for (y = 0; y < m.length; y++)
                                                if (m[y].trim() === w(c)) return h += "MATCH", n.OpAppendLine(h), {
                                                    value: d
                                                };
                                            h += "no match";
                                            break;
                                        case 17:
                                            if (!f.split(",").some((function(e) {
                                                    return e.trim() === w(c)
                                                }))) return h += "MATCH", n.OpAppendLine(h), {
                                                value: d
                                            };
                                            h += "no match"
                                    }
                                    n.OpAppendLine(h)
                                }, o = this, i = 0; i < e.length; i++) {
                                var c = r(i);
                                if ("object" == typeof c) return c.value
                            }
                        return null
                    }, e.prototype.EvaluatePercentageRules = function(e, t, n) {
                        if (this.logger.debug("RolloutEvaluator.EvaluateVariations() called."), e && e.length > 0)
                            for (var r = w(t + (null === n.identifier || void 0 === n.identifier ? "" : n.identifier)).substring(0, 7), o = parseInt(r, 16) % 100, c = 0, i = 0; i < e.length; i++) {
                                var l = e[i];
                                if (o < (c += +l.percentage)) return {
                                    value: l.value,
                                    variationId: l.variationId,
                                    matchedRule: l
                                }
                            }
                        return null
                    }, e.prototype.EvaluateNumber = function(e, t, n) {
                        var r, o;
                        if (this.logger.debug("RolloutEvaluator.EvaluateNumber() called."), !e || Number.isNaN(Number.parseFloat(e.replace(",", ".")))) return !1;
                        if (r = Number.parseFloat(e.replace(",", ".")), !t || Number.isNaN(Number.parseFloat(t.replace(",", ".")))) return !1;
                        switch (o = Number.parseFloat(t.replace(",", ".")), n) {
                            case 10:
                                return r == o;
                            case 11:
                                return r != o;
                            case 12:
                                return r < o;
                            case 13:
                                return r <= o;
                            case 14:
                                return r > o;
                            case 15:
                                return r >= o
                        }
                        return !1
                    }, e.prototype.EvaluateSemver = function(e, t, n) {
                        if (this.logger.debug("RolloutEvaluator.EvaluateSemver() called."), null == E(e) || Object(A.e)(t)) return !1;
                        switch (t = t.trim(), n) {
                            case 4:
                                for (var r = t.split(","), o = !1, c = 0; c < r.length; c++)
                                    if (r[c] && !Object(A.e)(r[c]) && "" !== r[c].trim()) {
                                        if (null == E(r[c].trim())) return !1;
                                        o || (a = e, b = r[c].trim(), o = 0 === O(a, b, !0))
                                    }
                                return o;
                            case 5:
                                return !t.split(",").some((function(t) {
                                    return !(!t || Object(A.e)(t) || "" === t.trim()) && (null != (t = E(t.trim())) && function(a, b) {
                                        return 0 === O(a, b, !1)
                                    }(e, t))
                                }));
                            case 6:
                                return null != E(t) && function(a, b) {
                                    return O(a, b, !1) < 0
                                }(e, t);
                            case 7:
                                return null != E(t) && function(a, b) {
                                    return O(a, b, !1) <= 0
                                }(e, t);
                            case 8:
                                return null != E(t) && function(a, b) {
                                    return O(a, b, !1) > 0
                                }(e, t);
                            case 9:
                                return null != E(t) && function(a, b) {
                                    return O(a, b, !1) >= 0
                                }(e, t)
                        }
                        var a, b;
                        return !1
                    }, e.prototype.GetUserAttribute = function(e, t) {
                        switch (t) {
                            case "Identifier":
                                return e.identifier;
                            case "Email":
                                return e.email;
                            case "Country":
                                return e.country;
                            default:
                                return (e.custom || {})[t]
                        }
                    }, e.prototype.RuleToString = function(e) {
                        switch (e) {
                            case 0:
                                return "IS ONE OF";
                            case 1:
                                return "IS NOT ONE OF";
                            case 2:
                                return "CONTAINS";
                            case 3:
                                return "DOES NOT CONTAIN";
                            case 4:
                                return "IS ONE OF (SemVer)";
                            case 5:
                                return "IS NOT ONE OF (SemVer)";
                            case 6:
                                return "< (SemVer)";
                            case 7:
                                return "<= (SemVer)";
                            case 8:
                                return "> (SemVer)";
                            case 9:
                                return ">= (SemVer)";
                            case 10:
                                return "= (Number)";
                            case 11:
                                return "!= (Number)";
                            case 12:
                                return "< (Number)";
                            case 13:
                                return "<= (Number)";
                            case 14:
                                return "> (Number)";
                            case 15:
                                return ">= (Number)";
                            case 16:
                                return "IS ONE OF (Sensitive)";
                            case 17:
                                return "IS NOT ONE OF (Sensitive)";
                            default:
                                return e
                        }
                    }, e
                }(),
                S = function() {
                    function e() {
                        this.Operations = ""
                    }
                    return e.prototype.OpAppendLine = function(s) {
                        this.Operations += " " + s + "\n"
                    }, e.prototype.GetLog = function() {
                        return "Evaluate '" + this.KeyName + "'\n User : " + JSON.stringify(this.User) + "\n" + this.Operations + " Returning value : " + this.ReturnValue
                    }, e
                }();

            function j(e, t, n, o) {
                return {
                    key: e,
                    value: t.value,
                    variationId: t.variationId,
                    fetchTime: n,
                    user: o,
                    isDefaultValue: !1,
                    matchedEvaluationRule: t.matchedRule instanceof r.e ? t.matchedRule : void 0,
                    matchedEvaluationPercentageRule: t.matchedRule instanceof r.d ? t.matchedRule : void 0
                }
            }

            function R(e, t, n, r, o, c) {
                return {
                    key: e,
                    value: t,
                    fetchTime: n,
                    user: r,
                    isDefaultValue: !0,
                    errorMessage: o,
                    errorException: c
                }
            }

            function L(e, t, n, r, o, c) {
                return {
                    key: e,
                    value: null,
                    variationId: t,
                    fetchTime: n,
                    user: r,
                    isDefaultValue: !0,
                    errorMessage: o,
                    errorException: c
                }
            }

            function T(e, t, n, r, o, c, l) {
                var f;
                if (!t) return f = "config.json is not present. Returning default value: '".concat(r, "'."), l.error(f), R(n, r, Object(A.d)(c), o, f);
                var h = t[n];
                if (!h) return f = "Evaluating '".concat(n, "' failed (key was not found in config.json). Returning default value: '").concat(r, "'. These are the available keys: ").concat(F(t), "."), l.error(f), R(n, r, Object(A.d)(c), o, f);
                V(r);
                var d = e.Evaluate(h, n, r, o, c);
                if (null != r && typeof r != typeof d.value) throw new Error("The type of a setting must match the type of the given default value.\nThe setting's type was ".concat(typeof r, ", the given default value's type was ").concat(typeof d.value, ".\nPlease pass a corresponding default value type."));
                return d
            }

            function k(e, t, n, r, o, c, l) {
                var f;
                if (!t) return f = "config.json is not present. Returning default variationId: '".concat(r, "'."), l.error(f), L(n, r, Object(A.d)(c), o, f);
                var h = t[n];
                return h ? e.Evaluate(h, n, null, o, c, r) : (f = "Evaluating '".concat(n, "' failed (key was not found in config.json). Returning default variationId: '").concat(r, "'. These are the available keys: ").concat(F(t), "."), l.error(f), L(n, r, Object(A.d)(c), o, f))
            }

            function N(e, t, n, r, o, c) {
                var l;
                if (!M(t, o, ", returning empty array")) return [
                    [], l
                ];
                for (var f = [], h = 0, d = 0, v = Object.entries(t); d < v.length; d++) {
                    var y = v[d],
                        m = y[0],
                        O = y[1],
                        E = void 0;
                    try {
                        E = e.Evaluate(O, m, null, n, r)
                    } catch (e) {
                        null != l || (l = []), l.push(e), E = c(m, Object(A.d)(r), n, e)
                    }
                    f[h++] = E
                }
                return [f, l]
            }

            function P(e, t, n, r, o) {
                return N(e, t, n, r, o, (function(e, t, n, r) {
                    return R(e, null, t, n, Object(A.b)(r), r)
                }))
            }

            function D(e, t, n, r, o) {
                return N(e, t, n, r, o, (function(e, t, n, r) {
                    return L(e, null, t, n, Object(A.b)(r), r)
                }))
            }

            function M(e, t, n) {
                return void 0 === n && (n = ""), !!e || (t.error("config.json is not present".concat(n)), !1)
            }

            function V(e) {
                if (null != e) {
                    var t = typeof e;
                    if ("boolean" !== t && "number" !== t && "string" !== t) throw new Error("The default value must be boolean, number, string, null or undefined.")
                }
            }

            function F(e) {
                return Object.keys(e).join()
            }
        },
        118: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "a", (function() {
                return l
            }));
            var r, o = n(9);
            ! function(e) {
                e[e.Fetched = 0] = "Fetched", e[e.NotModified = 1] = "NotModified", e[e.Errored = 2] = "Errored"
            }(r || (r = {}));
            var c = function() {
                    function e(e, t, n, r, o) {
                        this.status = e, this.responseBody = t, this.eTag = n, this.errorMessage = r, this.errorException = o
                    }
                    return e.success = function(t, n) {
                        return new e(r.Fetched, t, n)
                    }, e.notModified = function() {
                        return new e(r.NotModified, "")
                    }, e.error = function(t, n) {
                        return new e(r.Errored, "", void 0, null != t ? t : "Unknown error.", n)
                    }, e
                }(),
                l = function(e) {
                    function t(n) {
                        for (var r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                        var c, l = this;
                        switch (n) {
                            case "abort":
                                c = "Request was aborted.";
                                break;
                            case "timeout":
                                var f = r[0];
                                c = "Request timed out. Timeout value: ".concat(f, "ms");
                                break;
                            case "failure":
                                var h = r[0];
                                c = "Request failed due to a network or protocol error.", h && (c += " " + (h instanceof Error ? h.message : h + ""))
                        }
                        return (l = e.call(this, c) || this).cause = n, l instanceof t || (Object.setPrototypeOf || function(e, t) {
                            return e.__proto__ = t
                        })(l, t.prototype), l.args = r, l
                    }
                    return Object(o.c)(t, e), t
                }(Error)
        },
        136: function(e, t, n) {
            "use strict";
            var r = n(538);
            n.d(t, "a", (function() {
                return r.a
            })), n.d(t, "b", (function() {
                return r.b
            })), n.d(t, "c", (function() {
                return r.c
            })), n.d(t, "d", (function() {
                return r.d
            })), n.d(t, "e", (function() {
                return r.e
            })), n.d(t, "f", (function() {
                return r.f
            }))
        },
        158: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            })), n.d(t, "a", (function() {
                return h
            }));
            var r, o = n(9),
                c = n(118),
                l = n(55),
                f = function() {
                    function e(e, t) {
                        this.errorMessage = e, this.errorException = t
                    }
                    return Object.defineProperty(e.prototype, "isSuccess", {
                        get: function() {
                            return null === this.errorMessage
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.from = function(t) {
                        return t.status !== c.c.Errored ? e.success() : e.failure(t.errorMessage, t.errorException)
                    }, e.success = function() {
                        return new e(null)
                    }, e.failure = function(t, n) {
                        return new e(t, n)
                    }, e
                }();
            ! function(e) {
                e[e.Online = 0] = "Online", e[e.Offline = 1] = "Offline", e[e.Disposed = 2] = "Disposed"
            }(r || (r = {}));
            var h = function() {
                function e(e, t) {
                    this.pendingFetch = null, this.configFetcher = e, this.options = t, this.status = t.offline ? r.Offline : r.Online
                }
                return e.prototype.dispose = function() {
                    this.status = r.Disposed
                }, Object.defineProperty(e.prototype, "disposed", {
                    get: function() {
                        return this.status === r.Disposed
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.refreshConfigAsync = function() {
                    return Object(o.b)(this, void 0, void 0, (function() {
                        var e, t, n, r;
                        return Object(o.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.options.cache.get(this.options.getCacheKey())];
                                case 1:
                                    return e = o.sent(), this.isOffline ? [3, 3] : [4, this.refreshConfigCoreAsync(e)];
                                case 2:
                                    return t = o.sent(), n = t[0], r = t[1], [2, [f.from(n), r]];
                                case 3:
                                    return this.logOfflineModeWarning(), [2, [f.failure("Client is in offline mode, it can't initiate HTTP calls."), e]]
                            }
                        }))
                    }))
                }, e.prototype.refreshConfigCoreAsync = function(e) {
                    return Object(o.b)(this, void 0, void 0, (function() {
                        var t, n, r, c;
                        return Object(o.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.fetchAsync(e)];
                                case 1:
                                    return t = o.sent(), n = t[0], r = t[1], c = !l.c.equals(e, r), r && (c || r.Timestamp > e.Timestamp) ? [4, this.options.cache.set(this.options.getCacheKey(), r)] : [3, 3];
                                case 2:
                                    return o.sent(), this.onConfigUpdated(r), c && this.onConfigChanged(r), [2, [n, r]];
                                case 3:
                                    return [2, [n, e]]
                            }
                        }))
                    }))
                }, e.prototype.onConfigUpdated = function(e) {}, e.prototype.onConfigChanged = function(e) {
                    this.options.logger.debug("config changed"), this.options.hooks.emit("configChanged", e)
                }, e.prototype.fetchAsync = function(e) {
                    var t, n = this;
                    return null !== (t = this.pendingFetch) && void 0 !== t ? t : this.pendingFetch = Object(o.b)(n, void 0, void 0, (function() {
                        return Object(o.d)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return t.trys.push([0, , 2, 3]), [4, this.fetchLogicAsync(e)];
                                case 1:
                                    return [2, t.sent()];
                                case 2:
                                    return this.pendingFetch = null, [7];
                                case 3:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.fetchLogicAsync = function(e) {
                    var t;
                    return Object(o.b)(this, void 0, void 0, (function() {
                        var n, r, f, h, d, v, y;
                        return Object(o.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    (n = this.options).logger.debug("ConfigServiceBase.fetchLogicAsync() - called."), o.label = 1;
                                case 1:
                                    return o.trys.push([1, 3, , 4]), [4, this.fetchRequestAsync(null !== (t = null == e ? void 0 : e.HttpETag) && void 0 !== t ? t : null)];
                                case 2:
                                    switch (f = o.sent(), h = f[0], d = f[1], h.statusCode) {
                                        case 200:
                                            return d ? (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was successful. Returning new config."), [2, [c.b.success(h.body, h.eTag), new l.c((new Date).getTime(), d, h.eTag)]]) : (r = "Fetch was successful but HTTP response was invalid", n.logger.debug("ConfigServiceBase.fetchLogicAsync(): ".concat(r.charAt(0).toLowerCase()).concat(r.slice(1), ". Returning null.")), [2, [c.b.error(r), null]]);
                                        case 304:
                                            return e ? (n.logger.debug("ConfigServiceBase.fetchLogicAsync(): content was not modified. Returning last config with updated timestamp."), [2, [c.b.notModified(), new l.c((new Date).getTime(), e.ConfigJSON, e.HttpETag)]]) : (r = "HTTP response ".concat(h.statusCode, " ").concat(h.reasonPhrase, " was received when no config is cached locally"), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): ".concat(r.charAt(0).toLowerCase()).concat(r.slice(1), ". Returning null.")), [2, [c.b.error(r), null]]);
                                        case 403:
                                        case 404:
                                            return r = "Double-check your SDK Key at https://app.configcat.com/sdkkey", n.logger.error(r), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning last config (if any) with updated timestamp."), [2, [c.b.error(r), e ? new l.c((new Date).getTime(), e.ConfigJSON, e.HttpETag) : null]];
                                        default:
                                            return r = "Unexpected HTTP response was received: ".concat(h.statusCode, " ").concat(h.reasonPhrase), n.logger.error(r), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), [2, [c.b.error(r), null]]
                                    }
                                    return [3, 4];
                                case 3:
                                    return v = o.sent(), y = v instanceof c.a ? v.message : "Unexpected error occurred during fetching.", n.logger.error(y, v), n.logger.debug("ConfigServiceBase.fetchLogicAsync(): fetch was unsuccessful. Returning null."), [2, [c.b.error(y, v), null]];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.fetchRequestAsync = function(e, t) {
                    return void 0 === t && (t = 2), Object(o.b)(this, void 0, void 0, (function() {
                        var n, r, c, f, h, d, v;
                        return Object(o.d)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    (n = this.options).logger.debug("ConfigServiceBase.fetchRequestAsync() - called."), r = 0, o.label = 1;
                                case 1:
                                    return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): calling fetchLogic()".concat(r > 0 ? ", retry ".concat(r, "/").concat(t) : "")), [4, this.configFetcher.fetchLogic(n, e)];
                                case 2:
                                    if (200 !== (c = o.sent()).statusCode) return [2, [c]];
                                    if (!c.body) return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): no response body."), [2, [c]];
                                    f = void 0;
                                    try {
                                        f = JSON.parse(c.body)
                                    } catch (e) {
                                        return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): invalid response body."), [2, [c]]
                                    }
                                    if (!(h = f[l.a.Preferences])) return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): preferences is empty."), [2, [c, f]];
                                    if (!(d = h[l.b.BaseUrl]) || d == n.baseUrl) return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): baseUrl OK."), [2, [c, f]];
                                    if (v = h[l.b.Redirect], n.baseUrlOverriden && 2 !== v) return n.logger.debug("ConfigServiceBase.fetchRequestAsync(): options.baseUrlOverriden && redirect !== 2."), [2, [c, f]];
                                    if (n.baseUrl = d, 0 === v) return [2, [c, f]];
                                    if (1 === v && n.logger.warn("Your dataGovernance parameter at ConfigCatClient initialization is not in sync with your preferences on the ConfigCat Dashboard: https://app.configcat.com/organization/data-governance. Only Organization Admins can access this preference."), r >= t) return n.logger.error("Redirect loop during config.json fetch. Please contact support@configcat.com."), [2, [c, f]];
                                    o.label = 3;
                                case 3:
                                    return r++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        }))
                    }))
                }, Object.defineProperty(e.prototype, "isOfflineExactly", {
                    get: function() {
                        return this.status === r.Offline
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "isOffline", {
                    get: function() {
                        return this.status !== r.Online
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.setOnlineCore = function() {}, e.prototype.setOnline = function() {
                    this.status === r.Offline ? (this.setOnlineCore(), this.status = r.Online, this.logStatusChange(this.status)) : this.disposed && this.logDisposedWarning("setOnline")
                }, e.prototype.setOfflineCore = function() {}, e.prototype.setOffline = function() {
                    this.status == r.Online ? (this.setOfflineCore(), this.status = r.Offline, this.logStatusChange(this.status)) : this.disposed && this.logDisposedWarning("setOnline")
                }, e.prototype.logStatusChange = function(e) {
                    var t;
                    this.options.logger.debug("Switched to ".concat(null === (t = r[e]) || void 0 === t ? void 0 : t.toUpperCase(), " mode."))
                }, e.prototype.logOfflineModeWarning = function() {
                    this.options.logger.warn("Client is in offline mode, it can't initiate HTTP calls.")
                }, e.prototype.logDisposedWarning = function(e) {
                    this.options.logger.warn("Client has already been disposed, thus ".concat(e, "() has no effect."))
                }, e
            }()
        },
        177: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var content = function(e, t) {
                            var content = e[1] || "",
                                n = e[3];
                            if (!n) return content;
                            if (t && "function" == typeof btoa) {
                                var r = (c = n, l = btoa(unescape(encodeURIComponent(JSON.stringify(c)))), data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(data, " */")),
                                    o = n.sources.map((function(source) {
                                        return "/*# sourceURL=".concat(n.sourceRoot || "").concat(source, " */")
                                    }));
                                return [content].concat(o).concat([r]).join("\n")
                            }
                            var c, l, data;
                            return [content].join("\n")
                        }(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(content, "}") : content
                    })).join("")
                }, t.i = function(e, n, r) {
                    "string" == typeof e && (e = [
                        [null, e, ""]
                    ]);
                    var o = {};
                    if (r)
                        for (var i = 0; i < this.length; i++) {
                            var c = this[i][0];
                            null != c && (o[c] = !0)
                        }
                    for (var l = 0; l < e.length; l++) {
                        var f = [].concat(e[l]);
                        r && o[f[0]] || (n && (f[2] ? f[2] = "".concat(n, " and ").concat(f[2]) : f[2] = n), t.push(f))
                    }
                }, t
            }
        },
        183: function(e, t, n) {
            "use strict";
            var r = n(165);
            n.d(t, "a", (function() {
                return r.e
            })), n.d(t, "b", (function() {
                return r.f
            }));
            Object(r.g)("firebase", "9.9.3", "app")
        },
        186: function(e, t, n) {
            "use strict";
            var r;
            n.d(t, "c", (function() {
                    return r
                })), n.d(t, "b", (function() {
                    return o
                })), n.d(t, "a", (function() {
                    return c
                })),
                function(e) {
                    e[e.LocalOnly = 0] = "LocalOnly", e[e.LocalOverRemote = 1] = "LocalOverRemote", e[e.RemoteOverLocal = 2] = "RemoteOverLocal"
                }(r || (r = {}));
            var o = function() {
                    function e(map) {
                        this.map = {}, this.map = Object.fromEntries(Object.entries(map).map((function(e) {
                            return [e[0], {
                                value: e[1],
                                variationId: "",
                                rolloutRules: [],
                                rolloutPercentageItems: []
                            }]
                        })))
                    }
                    return e.prototype.getOverrides = function() {
                        return Promise.resolve(this.map)
                    }, e
                }(),
                c = function(e, t) {
                    this.dataSource = e, this.behaviour = t
                }
        },
        192: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getClient", (function() {
                return j
            })), n.d(t, "disposeAllClients", (function() {
                return R
            })), n.d(t, "createClient", (function() {
                return L
            })), n.d(t, "createClientWithAutoPoll", (function() {
                return T
            })), n.d(t, "createClientWithManualPoll", (function() {
                return k
            })), n.d(t, "createClientWithLazyLoad", (function() {
                return N
            })), n.d(t, "createConsoleLogger", (function() {
                return P
            })), n.d(t, "createFlagOverridesFromMap", (function() {
                return D
            })), n.d(t, "PollingMode", (function() {
                return o.f
            })), n.d(t, "DataGovernance", (function() {
                return o.b
            })), n.d(t, "LogLevel", (function() {
                return A.b
            })), n.d(t, "ProjectConfig", (function() {
                return O.c
            })), n.d(t, "RolloutRule", (function() {
                return O.e
            })), n.d(t, "RolloutPercentageItem", (function() {
                return O.d
            })), n.d(t, "Setting", (function() {
                return O.f
            })), n.d(t, "SettingKeyValue", (function() {
                return C.b
            })), n.d(t, "User", (function() {
                return I.b
            })), n.d(t, "FlagOverrides", (function() {
                return l.a
            })), n.d(t, "MapOverrideDataSource", (function() {
                return l.b
            })), n.d(t, "OverrideBehaviour", (function() {
                return l.c
            })), n.d(t, "RefreshResult", (function() {
                return S.b
            }));
            var r = n(79),
                o = n(87),
                c = n(354),
                l = n(186);

            function f(e, t, n, r) {
                return new(n || (n = Promise))((function(o, c) {
                    function l(e) {
                        try {
                            h(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function f(e) {
                        try {
                            h(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(l, f)
                    }
                    h((r = r.apply(e, t || [])).next())
                }))
            }

            function h(e, body) {
                var t, n, r, g, o = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function c(c) {
                    return function(l) {
                        return function(c) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; g && (g = 0, c[0] && (o = 0)), o;) try {
                                if (t = 1, n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, c[1])).done) return r;
                                switch (n = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        r = c;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = c[1], c = [0];
                                        continue;
                                    case 7:
                                        c = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                            o.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && o.label < r[1]) {
                                            o.label = r[1], r = c;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2], o.ops.push(c);
                                            break
                                        }
                                        r[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e], n = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, l])
                    }
                }
            }
            Object.create;
            Object.create;
            var d = n(602),
                v = n.n(d),
                y = n(118),
                m = function() {
                    function e() {}
                    return e.prototype.fetchLogic = function(e, t) {
                        return f(this, void 0, void 0, (function() {
                            var n, r, o, c, l, f, d, code, m, O, E, w;
                            return h(this, (function(h) {
                                switch (h.label) {
                                    case 0:
                                        n = "undefined" == typeof window && t ? {
                                            "If-None-Match": t
                                        } : {}, r = {
                                            method: "get",
                                            timeout: e.requestTimeoutMs,
                                            url: e.getUrl(),
                                            headers: n,
                                            responseType: "text",
                                            transformResponse: function(data) {
                                                return data
                                            }
                                        }, h.label = 1;
                                    case 1:
                                        return h.trys.push([1, 3, , 4]), [4, v()(r)];
                                    case 2:
                                        return o = h.sent(), [3, 4];
                                    case 3:
                                        if (c = h.sent(), o = c.response) return l = o.status, f = o.statusText, [2, {
                                            statusCode: l,
                                            reasonPhrase: f
                                        }];
                                        if (c.request) {
                                            switch (code = (d = c).code, m = d.message, code) {
                                                case "ERR_CANCELED":
                                                    throw new y.a("abort");
                                                case "ECONNABORTED":
                                                    if (m.indexOf("timeout") >= 0) throw new y.a("timeout", e.requestTimeoutMs)
                                            }
                                            throw new y.a("failure", c)
                                        }
                                        throw c;
                                    case 4:
                                        return O = o.status, E = o.statusText, 200 === o.status ? (w = o.headers.etag, [2, {
                                            statusCode: O,
                                            reasonPhrase: E,
                                            eTag: w,
                                            body: o.data
                                        }]) : [2, {
                                            statusCode: O,
                                            reasonPhrase: E
                                        }]
                                }
                            }))
                        }))
                    }, e
                }(),
                O = n(55),
                E = function() {
                    function e() {
                        this.cache = {}
                    }
                    return e.prototype.set = function(e, t) {
                        this.cache[e] = t;
                        try {
                            localStorage.setItem(e, btoa(JSON.stringify(t)))
                        } catch (e) {}
                    }, e.prototype.get = function(e) {
                        var t = this.cache[e];
                        if (t) return t;
                        try {
                            var n = localStorage.getItem(e);
                            if (n) {
                                var r = JSON.parse(atob(n));
                                if ((Object.setPrototypeOf || function(e, t) {
                                        return e.__proto__ = t
                                    })(r, O.c.prototype), r) return this.cache[e] = r, r
                            }
                        } catch (e) {}
                        return null
                    }, e
                }(),
                w = "6.0.0",
                A = n(272),
                C = n(222),
                I = n(100),
                S = n(158);

            function j(e, t, n) {
                return r.getClient(e, null != t ? t : o.f.AutoPoll, n, {
                    configFetcher: new m,
                    cache: new c.a,
                    sdkType: "ConfigCat-JS-SSR",
                    sdkVersion: w
                })
            }

            function R() {
                r.disposeAllClients()
            }

            function L(e, t) {
                return T(e, t)
            }

            function T(e, t) {
                return r.createClientWithAutoPoll(e, {
                    configFetcher: new m,
                    cache: new E,
                    sdkType: "ConfigCat-JS-SSR",
                    sdkVersion: w
                }, t)
            }

            function k(e, t) {
                return r.createClientWithManualPoll(e, {
                    configFetcher: new m,
                    cache: new E,
                    sdkType: "ConfigCat-JS-SSR",
                    sdkVersion: w
                }, t)
            }

            function N(e, t) {
                return r.createClientWithLazyLoad(e, {
                    configFetcher: new m,
                    cache: new E,
                    sdkType: "ConfigCat-JS-SSR",
                    sdkVersion: w
                }, t)
            }

            function P(e) {
                return r.createConsoleLogger(e)
            }

            function D(map, e) {
                return new l.a(new l.b(map), e)
            }
        },
        222: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return E
            })), n.d(t, "b", (function() {
                return w
            }));
            var r = n(9),
                o = n(158),
                c = n(55),
                l = n(59),
                f = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t, n) || this;
                        return r.signalInitialization = void 0, n.maxInitWaitTimeSeconds > 0 ? (r.initialized = !1, r.initialization = new Promise((function(e) {
                            return r.signalInitialization = function() {
                                r.initialized = !0, e()
                            }
                        })), r.initialization.then((function() {
                            return !r.disposed && n.hooks.emit("clientReady")
                        })), setTimeout((function() {
                            return r.signalInitialization()
                        }), 1e3 * n.maxInitWaitTimeSeconds)) : (r.initialized = !0, r.initialization = Promise.resolve(), n.hooks.emit("clientReady")), n.offline || r.startRefreshWorker(1e3 * n.pollIntervalSeconds), r
                    }
                    return Object(r.c)(t, e), t.prototype.waitForInitializationAsync = function() {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var e, t, n = this;
                            return Object(r.d)(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.race([Object(r.b)(n, void 0, void 0, (function() {
                                            return Object(r.d)(this, (function(e) {
                                                switch (e.label) {
                                                    case 0:
                                                        return [4, this.initialization];
                                                    case 1:
                                                        return e.sent(), [2, !0]
                                                }
                                            }))
                                        })), Object(l.a)(1e3 * this.options.maxInitWaitTimeSeconds, (function(t) {
                                            return e = t
                                        }))])];
                                    case 1:
                                        return t = o.sent(), e(), [2, !!t]
                                }
                            }))
                        }))
                    }, t.prototype.getConfig = function() {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            function e(e) {
                                e.debug("AutoPollConfigService.getConfig() - returning value from cache.")
                            }
                            var t;
                            return Object(r.d)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return this.options.logger.debug("AutoPollConfigService.getConfig() called."), t = null, this.isOffline || this.initialized ? [3, 3] : [4, this.options.cache.get(this.options.getCacheKey())];
                                    case 1:
                                        return t = n.sent(), c.c.isExpired(t, 1e3 * this.options.pollIntervalSeconds) ? (this.options.logger.debug("AutoPollConfigService.getConfig() - cache is empty or expired, waiting for initialization."), [4, this.waitForInitializationAsync()]) : (e(this.options.logger), [2, t]);
                                    case 2:
                                        n.sent(), n.label = 3;
                                    case 3:
                                        return [4, this.options.cache.get(this.options.getCacheKey())];
                                    case 4:
                                        return t = n.sent(), c.c.isExpired(t, 1e3 * this.options.pollIntervalSeconds) ? this.options.logger.debug("AutoPollConfigService.getConfig() - cache is empty or expired.") : e(this.options.logger), [2, t]
                                }
                            }))
                        }))
                    }, t.prototype.refreshConfigAsync = function() {
                        return this.options.logger.debug("AutoPollConfigService.refreshConfigAsync() called."), e.prototype.refreshConfigAsync.call(this)
                    }, t.prototype.dispose = function() {
                        this.options.logger.debug("AutoPollConfigService.dispose() called."), e.prototype.dispose.call(this), this.timerId && this.stopRefreshWorker()
                    }, t.prototype.onConfigUpdated = function(t) {
                        e.prototype.onConfigUpdated.call(this, t), this.signalInitialization()
                    }, t.prototype.onConfigChanged = function(t) {
                        e.prototype.onConfigChanged.call(this, t), this.options.configChanged()
                    }, t.prototype.setOnlineCore = function() {
                        this.startRefreshWorker(1e3 * this.options.pollIntervalSeconds)
                    }, t.prototype.setOfflineCore = function() {
                        this.stopRefreshWorker()
                    }, t.prototype.startRefreshWorker = function(e) {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var t, n = this;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.options.logger.debug("AutoPollConfigService.startRefreshWorker() called."), [4, this.options.cache.get(this.options.getCacheKey())];
                                    case 1:
                                        return t = r.sent(), c.c.isExpired(t, 1e3 * this.options.pollIntervalSeconds) ? this.isOfflineExactly ? [3, 3] : [4, this.refreshConfigCoreAsync(t)] : [3, 4];
                                    case 2:
                                        r.sent(), r.label = 3;
                                    case 3:
                                        return [3, 5];
                                    case 4:
                                        this.signalInitialization(), r.label = 5;
                                    case 5:
                                        return this.options.logger.debug("AutoPollConfigService.startRefreshWorker() - calling refreshWorkerLogic()'s setTimeout."), this.timerId = setTimeout((function(e) {
                                            return n.refreshWorkerLogic(e)
                                        }), e, e), [2]
                                }
                            }))
                        }))
                    }, t.prototype.stopRefreshWorker = function() {
                        this.options.logger.debug("AutoPollConfigService.stopRefreshWorker() - clearing setTimeout."), clearTimeout(this.timerId)
                    }, t.prototype.refreshWorkerLogic = function(e) {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var t, n = this;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.disposed ? (this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called on a disposed client."), [2]) : (this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - called."), this.isOffline ? [3, 3] : [4, this.options.cache.get(this.options.getCacheKey())]);
                                    case 1:
                                        return t = r.sent(), [4, this.refreshConfigCoreAsync(t)];
                                    case 2:
                                        r.sent(), r.label = 3;
                                    case 3:
                                        return this.options.logger.debug("AutoPollConfigService.refreshWorkerLogic() - calling refreshWorkerLogic()'s setTimeout."), this.timerId = setTimeout((function(e) {
                                            return n.refreshWorkerLogic(e)
                                        }), e, e), [2]
                                }
                            }))
                        }))
                    }, t
                }(o.a),
                h = n(87),
                d = n(186),
                v = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t, n) || this;
                        return r.cacheTimeToLiveSeconds = n.cacheTimeToLiveSeconds, n.hooks.emit("clientReady"), r
                    }
                    return Object(r.c)(t, e), t.prototype.getConfig = function() {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            function e(e, t) {
                                void 0 === t && (t = ""), e.debug("LazyLoadConfigService.getConfig(): cache is empty or expired".concat(t, "."))
                            }
                            var t, n;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.options.logger.debug("LazyLoadConfigService.getConfig() called."), [4, this.options.cache.get(this.options.getCacheKey())];
                                    case 1:
                                        return t = r.sent(), c.c.isExpired(t, 1e3 * this.cacheTimeToLiveSeconds) ? this.isOffline ? [3, 3] : (e(this.options.logger, ", calling refreshConfigCoreAsync()"), [4, this.refreshConfigCoreAsync(t)]) : [3, 5];
                                    case 2:
                                        return n = r.sent(), t = n[1], [3, 4];
                                    case 3:
                                        e(this.options.logger), r.label = 4;
                                    case 4:
                                        return [2, t];
                                    case 5:
                                        return this.options.logger.debug("LazyLoadConfigService.getConfig(): cache is valid, returning from cache."), [2, t]
                                }
                            }))
                        }))
                    }, t.prototype.refreshConfigAsync = function() {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            return Object(r.d)(this, (function(t) {
                                return this.options.logger.debug("LazyLoadConfigService.refreshConfigAsync() called."), [2, e.prototype.refreshConfigAsync.call(this)]
                            }))
                        }))
                    }, t
                }(o.a),
                y = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t, n) || this;
                        return n.hooks.emit("clientReady"), r
                    }
                    return Object(r.c)(t, e), t.prototype.getConfig = function() {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            return Object(r.d)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.options.logger.debug("ManualPollService.getConfig() called."), [4, this.options.cache.get(this.options.getCacheKey())];
                                    case 1:
                                        return [2, e.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.refreshConfigAsync = function() {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            return Object(r.d)(this, (function(t) {
                                return this.options.logger.debug("ManualPollService.refreshConfigAsync() called."), [2, e.prototype.refreshConfigAsync.call(this)]
                            }))
                        }))
                    }, t
                }(o.a),
                m = n(100),
                O = new(function() {
                    function e() {
                        this.instances = {}
                    }
                    return e.prototype.getOrCreate = function(e, t) {
                        var n, r = this.instances[e.apiKey];
                        if (r && (n = r[0].deref())) return [n, !0];
                        var o = {};
                        return n = new E(e, t, o), this.instances[e.apiKey] = [new WeakRef(n), o], [n, !1]
                    }, e.prototype.remove = function(e, t) {
                        var n = this.instances[e];
                        if (n) {
                            var r = n[0],
                                o = n[1],
                                c = !!r.deref();
                            if (!c || o === t) return delete this.instances[e], c
                        }
                        return !1
                    }, e.prototype.clear = function() {
                        for (var e = [], t = 0, n = Object.entries(this.instances); t < n.length; t++) {
                            var r = n[t],
                                o = r[0],
                                c = r[1][0].deref();
                            c && e.push(c), delete this.instances[o]
                        }
                        return e
                    }, e
                }()),
                E = function() {
                    function e(e, t, n) {
                        var r;
                        if (this.cacheToken = n, this.addListener = this.on, this.off = this.removeListener, !e) throw new Error("Invalid 'options' value");
                        if (this.options = e, this.options.logger.debug("Initializing ConfigCatClient. Options: " + JSON.stringify(this.options)), !t) throw new Error("Invalid 'configCatKernel' value");
                        if (!t.configFetcher) throw new Error("Invalid 'configCatKernel.configFetcher' value");
                        if (e.defaultUser && this.setDefaultUser(e.defaultUser), this.evaluator = new m.a(e.logger), (null === (r = e.flagOverrides) || void 0 === r ? void 0 : r.behaviour) != d.c.LocalOnly) {
                            var o = e instanceof h.a ? f : e instanceof h.d ? y : e instanceof h.c ? v : function() {
                                throw new Error("Invalid 'options' value")
                            }();
                            this.configService = new o(t.configFetcher, e)
                        } else this.options.hooks.emit("clientReady");
                        this.suppressFinalize = A(this, {
                            sdkKey: e.apiKey,
                            cacheToken: n,
                            configService: this.configService,
                            logger: e.logger
                        })
                    }
                    return Object.defineProperty(e, "instanceCache", {
                        get: function() {
                            return O
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.get = function(e, t, n, r) {
                        if (!e) throw new Error("Invalid 'sdkKey' value");
                        var o = new(t === h.f.AutoPoll ? h.a : t === h.f.ManualPoll ? h.d : t === h.f.LazyLoad ? h.c : function() {
                                throw new Error("Invalid 'pollingMode' value")
                            }())(e, r.sdkType, r.sdkVersion, n, r.cache, r.eventEmitterFactory),
                            c = O.getOrCreate(o, r),
                            l = c[0];
                        return c[1] && n && o.logger.warn("Client for SDK key '".concat(e, "' is already created and will be reused; configuration action is being ignored.")), l
                    }, e.finalize = function(data) {
                        var t;
                        null === (t = data.logger) || void 0 === t || t.debug("finalize() called"), data.cacheToken && O.remove(data.sdkKey, data.cacheToken), e.close(data.configService, data.logger)
                    }, e.close = function(e, t, n) {
                        null == t || t.debug("close() called"), null == n || n.tryDisconnect(), null == e || e.dispose()
                    }, e.prototype.dispose = function() {
                        var t = this.options;
                        t.logger.debug("dispose() called"), this.cacheToken && O.remove(t.apiKey, this.cacheToken), e.close(this.configService, t.logger, t.hooks), this.suppressFinalize()
                    }, e.disposeAll = function() {
                        for (var t, n = 0, r = O.clear(); n < r.length; n++) {
                            var o = r[n];
                            try {
                                e.close(o.configService, o.options.logger, o.options.hooks), o.suppressFinalize()
                            } catch (e) {
                                null != t || (t = []), t.push(e)
                            }
                        }
                        if (t) throw "undefined" != typeof AggregateError ? new AggregateError(t) : t.pop()
                    }, e.prototype.getValue = function(e, t, n, r) {
                        this.options.logger.debug("getValue() called."), this.getValueAsync(e, t, r).then(n)
                    }, e.prototype.getValueAsync = function(e, t, n) {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var o, c, f, h, d, v;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.options.logger.debug("getValueAsync() called."), f = null, null != n || (n = this.defaultUser), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), Object(m.d)(t), h = void 0, [4, this.getSettingsAsync()];
                                    case 2:
                                        return v = r.sent(), h = v[0], f = v[1], c = Object(m.e)(this.evaluator, h, e, t, n, f, this.options.logger), o = c.value, [3, 4];
                                    case 3:
                                        return d = r.sent(), this.options.logger.error("Error occurred in getValueAsync().", d), c = Object(m.i)(e, t, Object(l.d)(f), n, Object(l.b)(d), d), o = t, [3, 4];
                                    case 4:
                                        return this.options.hooks.emit("flagEvaluated", c), [2, o]
                                }
                            }))
                        }))
                    }, e.prototype.getValueDetails = function(e, t, n, r) {
                        this.options.logger.debug("getValueDetails() called."), this.getValueDetailsAsync(e, t, r).then(n)
                    }, e.prototype.getValueDetailsAsync = function(e, t, n) {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var o, c, f, h, d;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.options.logger.debug("getValueDetailsAsync() called."), c = null, null != n || (n = this.defaultUser), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), Object(m.d)(t), f = void 0, [4, this.getSettingsAsync()];
                                    case 2:
                                        return d = r.sent(), f = d[0], c = d[1], o = Object(m.e)(this.evaluator, f, e, t, n, c, this.options.logger), [3, 4];
                                    case 3:
                                        return h = r.sent(), this.options.logger.error("Error occurred in getValueDetailsAsync().", h), o = Object(m.i)(e, t, Object(l.d)(c), n, Object(l.b)(h), h), [3, 4];
                                    case 4:
                                        return this.options.hooks.emit("flagEvaluated", o), [2, o]
                                }
                            }))
                        }))
                    }, e.prototype.forceRefresh = function(e) {
                        this.options.logger.debug("forceRefresh() called."), this.forceRefreshAsync().then(e)
                    }, e.prototype.forceRefreshAsync = function() {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var e;
                            return Object(r.d)(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        if (this.options.logger.debug("forceRefreshAsync() called."), !this.configService) return [3, 5];
                                        t.label = 1;
                                    case 1:
                                        return t.trys.push([1, 3, , 4]), [4, this.configService.refreshConfigAsync()];
                                    case 2:
                                        return [2, t.sent()[0]];
                                    case 3:
                                        return e = t.sent(), this.options.logger.error("Error occurred in forceRefreshAsync().", e), [2, o.b.failure(Object(l.b)(e), e)];
                                    case 4:
                                        return [3, 6];
                                    case 5:
                                        return [2, o.b.failure("Client is configured to use the LocalOnly override behavior, which prevents making HTTP requests.")];
                                    case 6:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getAllKeys = function(e) {
                        this.options.logger.debug("getAllKeys() called."), this.getAllKeysAsync().then(e)
                    }, e.prototype.getAllKeysAsync = function() {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var e, t;
                            return Object(r.d)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.options.logger.debug("getAllKeysAsync() called."), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
                                    case 2:
                                        return e = n.sent()[0], Object(m.c)(e, this.options.logger, ", returning empty array") ? [2, Object.keys(e)] : [2, []];
                                    case 3:
                                        return t = n.sent(), this.options.logger.error("Error occurred in getAllKeysAsync().", t), [2, []];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }, e.prototype.getVariationId = function(e, t, n, r) {
                        this.options.logger.debug("getVariationId() called."), this.getVariationIdAsync(e, t, r).then(n)
                    }, e.prototype.getVariationIdAsync = function(e, t, n) {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var o, c, f, h, d, v;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.options.logger.debug("getVariationIdAsync() called."), f = null, null != n || (n = this.defaultUser), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), h = void 0, [4, this.getSettingsAsync()];
                                    case 2:
                                        return v = r.sent(), h = v[0], f = v[1], c = Object(m.h)(this.evaluator, h, e, t, n, f, this.options.logger), o = c.variationId, [3, 4];
                                    case 3:
                                        return d = r.sent(), this.options.logger.error("Error occurred in getVariationIdAsync().", d), c = Object(m.j)(e, t, Object(l.d)(f), n, Object(l.b)(d), d), o = t, [3, 4];
                                    case 4:
                                        return this.options.hooks.emit("flagEvaluated", c), [2, o]
                                }
                            }))
                        }))
                    }, e.prototype.getAllVariationIds = function(e, t) {
                        this.options.logger.debug("getAllVariationIds() called."), this.getAllVariationIdsAsync(t).then(e)
                    }, e.prototype.getAllVariationIdsAsync = function(e) {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var t, n, o, c, l, f, h, d, v, y, O;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.options.logger.debug("getAllVariationIdsAsync() called."), null != e || (e = this.defaultUser), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
                                    case 2:
                                        if (o = r.sent(), c = o[0], l = o[1], f = void 0, O = Object(m.g)(this.evaluator, c, e, l, this.options.logger), n = O[0], null == (f = O[1]) ? void 0 : f.length) throw "undefined" != typeof AggregateError ? new AggregateError(f) : f.pop();
                                        return t = n.filter((function(details) {
                                            return null != details
                                        })).map((function(details) {
                                            return details.variationId
                                        })), [3, 4];
                                    case 3:
                                        return h = r.sent(), this.options.logger.error("Error occurred in getAllVariationIdsAsync().", h), null != n || (n = []), t = [], [3, 4];
                                    case 4:
                                        for (d = 0, v = n; d < v.length; d++) y = v[d], this.options.hooks.emit("flagEvaluated", y);
                                        return [2, t]
                                }
                            }))
                        }))
                    }, e.prototype.getKeyAndValue = function(e, t) {
                        this.options.logger.debug("getKeyAndValue() called."), this.getKeyAndValueAsync(e).then(t)
                    }, e.prototype.getKeyAndValueAsync = function(e) {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var t, n, o, c, l, f, h, d, v, i, y, O;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.options.logger.debug("getKeyAndValueAsync() called."), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
                                    case 2:
                                        if (t = r.sent()[0], !Object(m.c)(t, this.options.logger, ", returning null")) return [2, null];
                                        for (n = 0, o = Object.entries(t); n < o.length; n++) {
                                            if (c = o[n], l = c[0], f = c[1], e === f.variationId) return [2, new w(l, f.value)];
                                            if ((h = t[l].rolloutRules) && h.length > 0)
                                                for (i = 0; i < h.length; i++)
                                                    if (d = h[i], e === d.variationId) return [2, new w(l, d.value)];
                                            if ((v = t[l].rolloutPercentageItems) && v.length > 0)
                                                for (i = 0; i < v.length; i++)
                                                    if (y = v[i], e === y.variationId) return [2, new w(l, y.value)]
                                        }
                                        return this.options.logger.error("Could not find the setting for the given variation ID: " + e), [3, 4];
                                    case 3:
                                        return O = r.sent(), this.options.logger.error("Error occurred in getKeyAndValueAsync().", O), [3, 4];
                                    case 4:
                                        return [2, null]
                                }
                            }))
                        }))
                    }, e.prototype.getAllValues = function(e, t) {
                        this.options.logger.debug("getAllValues() called."), this.getAllValuesAsync(t).then(e)
                    }, e.prototype.getAllValuesAsync = function(e) {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var t, n, o, c, l, f, h, d, v, y, O;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.options.logger.debug("getAllValuesAsync() called."), null != e || (e = this.defaultUser), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
                                    case 2:
                                        if (o = r.sent(), c = o[0], l = o[1], f = void 0, O = Object(m.f)(this.evaluator, c, e, l, this.options.logger), n = O[0], null == (f = O[1]) ? void 0 : f.length) throw "undefined" != typeof AggregateError ? new AggregateError(f) : f.pop();
                                        return t = n.map((function(details) {
                                            return new w(details.key, details.value)
                                        })), [3, 4];
                                    case 3:
                                        return h = r.sent(), this.options.logger.error("Error occurred in getAllValuesAsync().", h), null != n || (n = []), t = [], [3, 4];
                                    case 4:
                                        for (d = 0, v = n; d < v.length; d++) y = v[d], this.options.hooks.emit("flagEvaluated", y);
                                        return [2, t]
                                }
                            }))
                        }))
                    }, e.prototype.getAllValueDetails = function(e, t) {
                        this.options.logger.debug("getAllValueDetails() called."), this.getAllValueDetailsAsync(t).then(e)
                    }, e.prototype.getAllValueDetailsAsync = function(e) {
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var t, n, o, c, l, f, h, d, v, y;
                            return Object(r.d)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        this.options.logger.debug("getAllValueDetailsAsync() called."), null != e || (e = this.defaultUser), r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 3, , 4]), [4, this.getSettingsAsync()];
                                    case 2:
                                        if (n = r.sent(), o = n[0], c = n[1], l = void 0, y = Object(m.f)(this.evaluator, o, e, c, this.options.logger), t = y[0], null == (l = y[1]) ? void 0 : l.length) throw "undefined" != typeof AggregateError ? new AggregateError(l) : l.pop();
                                        return [3, 4];
                                    case 3:
                                        return f = r.sent(), this.options.logger.error("Error occurred in getAllValueDetailsAsync().", f), null != t || (t = []), [3, 4];
                                    case 4:
                                        for (h = 0, d = t; h < d.length; h++) v = d[h], this.options.hooks.emit("flagEvaluated", v);
                                        return [2, t]
                                }
                            }))
                        }))
                    }, e.prototype.setDefaultUser = function(e) {
                        this.defaultUser = e
                    }, e.prototype.clearDefaultUser = function() {
                        this.defaultUser = void 0
                    }, Object.defineProperty(e.prototype, "isOffline", {
                        get: function() {
                            var e, t;
                            return null === (t = null === (e = this.configService) || void 0 === e ? void 0 : e.isOffline) || void 0 === t || t
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.setOnline = function() {
                        this.configService ? this.configService.setOnline() : this.options.logger.warn("Client is configured to use the LocalOnly override behavior, thus SetOnline() has no effect.")
                    }, e.prototype.setOffline = function() {
                        var e;
                        null === (e = this.configService) || void 0 === e || e.setOffline()
                    }, e.prototype.getSettingsAsync = function() {
                        var e;
                        return Object(r.b)(this, void 0, void 0, (function() {
                            var t, n, o, f, h, v, y, m = this;
                            return Object(r.d)(this, (function(O) {
                                switch (O.label) {
                                    case 0:
                                        return this.options.logger.debug("getSettingsAsync() called."), t = function() {
                                            return Object(r.b)(m, void 0, void 0, (function() {
                                                var e, t, n;
                                                return Object(r.d)(this, (function(r) {
                                                    switch (r.label) {
                                                        case 0:
                                                            return [4, null === (n = this.configService) || void 0 === n ? void 0 : n.getConfig()];
                                                        case 1:
                                                            return e = r.sent(), t = null == e ? void 0 : e.ConfigJSON, [2, [(null == t ? void 0 : t[c.a.FeatureFlags]) ? Object(l.c)(t) : null, null != e ? e : null]]
                                                    }
                                                }))
                                            }))
                                        }, (n = null === (e = this.options) || void 0 === e ? void 0 : e.flagOverrides) ? (o = void 0, f = void 0, [4, n.dataSource.getOverrides()]) : [3, 7];
                                    case 1:
                                        switch (h = O.sent(), n.behaviour) {
                                            case d.c.LocalOnly:
                                                return [3, 2];
                                            case d.c.LocalOverRemote:
                                                return [3, 3];
                                            case d.c.RemoteOverLocal:
                                                return [3, 5]
                                        }
                                        return [3, 7];
                                    case 2:
                                        return [2, [h, null]];
                                    case 3:
                                    case 5:
                                    case 7:
                                        return [4, t()];
                                    case 4:
                                        return v = O.sent(), o = v[0], f = v[1], [2, [Object(r.a)(Object(r.a)({}, null != o ? o : {}), h), f]];
                                    case 6:
                                        return y = O.sent(), o = y[0], f = y[1], [2, [Object(r.a)(Object(r.a)({}, h), null != o ? o : {}), f]];
                                    case 8:
                                        return [2, O.sent()]
                                }
                            }))
                        }))
                    }, e.prototype.on = function(e, t) {
                        return this.options.hooks.on(e, t), this
                    }, e.prototype.once = function(e, t) {
                        return this.options.hooks.once(e, t), this
                    }, e.prototype.removeListener = function(e, t) {
                        return this.options.hooks.removeListener(e, t), this
                    }, e.prototype.removeAllListeners = function(e) {
                        return this.options.hooks.removeAllListeners(e), this
                    }, e.prototype.listeners = function(e) {
                        return this.options.hooks.listeners(e)
                    }, e.prototype.listenerCount = function(e) {
                        return this.options.hooks.listenerCount(e)
                    }, e.prototype.eventNames = function() {
                        return this.options.hooks.eventNames()
                    }, e
                }(),
                w = function(e, t) {
                    this.settingKey = e, this.settingValue = t
                },
                A = function(e, data) {
                    if ("undefined" != typeof FinalizationRegistry) {
                        var t = new FinalizationRegistry((function(data) {
                            return E.finalize(data)
                        }));
                        A = function(e, data) {
                            var n = {};
                            return t.register(e, data, n),
                                function() {
                                    return t.unregister(n)
                                }
                        }
                    } else A = function() {
                        return function() {}
                    };
                    return A(e, data)
                }
        },
        272: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            })), n.d(t, "c", (function() {
                return c
            })), n.d(t, "a", (function() {
                return l
            }));
            var r, o = n(59);
            ! function(e) {
                e[e.Debug = 4] = "Debug", e[e.Info = 3] = "Info", e[e.Warn = 2] = "Warn", e[e.Error = 1] = "Error", e[e.Off = -1] = "Off"
            }(r || (r = {}));
            var c = function() {
                    function e(e, t) {
                        this.logger = e, this.hooks = t
                    }
                    return Object.defineProperty(e.prototype, "level", {
                        get: function() {
                            var e;
                            return null !== (e = this.logger.level) && void 0 !== e ? e : r.Warn
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.log = function(e) {
                        this.info(e)
                    }, e.prototype.debug = function(e) {
                        this.isLogLevelEnabled(r.Debug) && this.logger.debug(e)
                    }, e.prototype.info = function(e) {
                        this.isLogLevelEnabled(r.Info) && this.logger.info(e)
                    }, e.prototype.warn = function(e) {
                        this.isLogLevelEnabled(r.Warn) && this.logger.warn(e)
                    }, e.prototype.error = function(e, t) {
                        var n;
                        if (this.isLogLevelEnabled(r.Error)) {
                            var c = t ? e + "\n" + Object(o.b)(t, !0) : e;
                            this.logger.error(c)
                        }
                        null === (n = this.hooks) || void 0 === n || n.emit("clientError", e, t)
                    }, e.prototype.isLogLevelEnabled = function(e) {
                        return this.level >= e
                    }, e
                }(),
                l = function() {
                    function e(e) {
                        void 0 === e && (e = r.Warn), this.level = e, this.SOURCE = "ConfigCat"
                    }
                    return e.prototype.log = function(e) {
                        this.info(e)
                    }, e.prototype.debug = function(e) {
                        console.info(this.SOURCE + " - DEBUG - " + e)
                    }, e.prototype.info = function(e) {
                        console.info(this.SOURCE + " - INFO - " + e)
                    }, e.prototype.warn = function(e) {
                        console.warn(this.SOURCE + " - WARN - " + e)
                    }, e.prototype.error = function(e) {
                        console.error(this.SOURCE + " - ERROR - " + e)
                    }, e
                }()
        },
        281: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                "object" == typeof n.value && (n.value = o(n.value)), n.enumerable && !n.get && !n.set && n.configurable && n.writable && "__proto__" !== t ? e[t] = n.value : Object.defineProperty(e, t, n)
            }

            function o(e) {
                if ("object" != typeof e) return e;
                var t, n, c, i = 0,
                    l = Object.prototype.toString.call(e);
                if ("[object Object]" === l ? c = Object.create(e.__proto__ || null) : "[object Array]" === l ? c = Array(e.length) : "[object Set]" === l ? (c = new Set, e.forEach((function(e) {
                        c.add(o(e))
                    }))) : "[object Map]" === l ? (c = new Map, e.forEach((function(e, t) {
                        c.set(o(t), o(e))
                    }))) : "[object Date]" === l ? c = new Date(+e) : "[object RegExp]" === l ? c = new RegExp(e.source, e.flags) : "[object DataView]" === l ? c = new e.constructor(o(e.buffer)) : "[object ArrayBuffer]" === l ? c = e.slice(0) : "Array]" === l.slice(-6) && (c = new e.constructor(e)), c) {
                    for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) r(c, n[i], Object.getOwnPropertyDescriptor(e, n[i]));
                    for (i = 0, n = Object.getOwnPropertyNames(e); i < n.length; i++) Object.hasOwnProperty.call(c, t = n[i]) && c[t] === e[t] || r(c, t, Object.getOwnPropertyDescriptor(e, t))
                }
                return c || e
            }
            n.d(t, "a", (function() {
                return o
            }))
        },
        354: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return r
            }));
            var r = function() {
                function e() {
                    this.cache = {}
                }
                return e.prototype.set = function(e, t) {
                    this.cache[e] = t
                }, e.prototype.get = function(e) {
                    var t;
                    return null !== (t = this.cache[e]) && void 0 !== t ? t : null
                }, e
            }()
        },
        55: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "a", (function() {
                return o
            })), n.d(t, "b", (function() {
                return c
            })), n.d(t, "f", (function() {
                return l
            })), n.d(t, "e", (function() {
                return f
            })), n.d(t, "d", (function() {
                return h
            }));
            var r = function() {
                    function e(e, t, n) {
                        this.Timestamp = e, this.ConfigJSON = "string" == typeof t ? JSON.parse(t) : t, this.HttpETag = n
                    }
                    return e.equals = function(e, t) {
                        return e ? !!t && (e.HttpETag && t.HttpETag ? this.compareEtags(e.HttpETag, t.HttpETag) : JSON.stringify(e.ConfigJSON) === JSON.stringify(t.ConfigJSON)) : !t
                    }, e.compareEtags = function(e, t) {
                        return this.ensureStrictEtag(e) === this.ensureStrictEtag(t)
                    }, e.ensureStrictEtag = function(e) {
                        return e ? e.length > 2 && "W/" === e.substr(0, 2).toLocaleUpperCase() ? e.substring(2) : e : ""
                    }, e.isExpired = function(e, t) {
                        return !e || e.Timestamp + t < (new Date).getTime()
                    }, e
                }(),
                o = function() {
                    function e() {}
                    return e.Preferences = "p", e.FeatureFlags = "f", e
                }(),
                c = function() {
                    function e() {}
                    return e.BaseUrl = "u", e.Redirect = "r", e
                }(),
                l = function() {
                    function e(e, t, n, r) {
                        this.value = e, this.rolloutPercentageItems = t, this.rolloutRules = n, this.variationId = r
                    }
                    return e.fromJson = function(t) {
                        var n, r, o, c;
                        return new e(t[this.Value], null !== (r = null === (n = t[this.RolloutPercentageItems]) || void 0 === n ? void 0 : n.map((function(e) {
                            return h.fromJson(e)
                        }))) && void 0 !== r ? r : [], null !== (c = null === (o = t[this.RolloutRules]) || void 0 === o ? void 0 : o.map((function(e) {
                            return f.fromJson(e)
                        }))) && void 0 !== c ? c : [], t[this.VariationId])
                    }, e.Value = "v", e.SettingType = "t", e.RolloutPercentageItems = "p", e.RolloutRules = "r", e.VariationId = "i", e
                }(),
                f = function() {
                    function e(e, t, n, r, o) {
                        this.comparisonAttribute = e, this.comparator = t, this.comparisonValue = n, this.value = r, this.variationId = o
                    }
                    return e.fromJson = function(t) {
                        return new e(t[this.ComparisonAttribute], t[this.Comparator], t[this.ComparisonValue], t[this.Value], t[this.VariationId])
                    }, e.Order = "o", e.ComparisonAttribute = "a", e.Comparator = "t", e.ComparisonValue = "c", e.Value = "v", e.VariationId = "i", e
                }(),
                h = function() {
                    function e(e, t, n) {
                        this.percentage = e, this.value = t, this.variationId = n
                    }
                    return e.fromJson = function(t) {
                        return new e(t[this.Percentage], t[this.Value], t[this.VariationId])
                    }, e.Order = "o", e.Value = "v", e.Percentage = "p", e.VariationId = "i", e
                }()
        },
        59: function(e, t, n) {
            "use strict";
            n.d(t, "e", (function() {
                return o
            })), n.d(t, "a", (function() {
                return c
            })), n.d(t, "c", (function() {
                return l
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "b", (function() {
                return h
            }));
            var r = n(55),
                o = function(e) {
                    return void 0 === e
                };

            function c(e, t) {
                var n, r = new Promise((function(t) {
                    return n = setTimeout(t, e)
                }));
                return null == t || t((function() {
                    return clearTimeout(n)
                })), r
            }

            function l(e) {
                return Object.fromEntries(Object.entries(e[r.a.FeatureFlags]).map((function(e) {
                    var t = e[0],
                        n = e[1];
                    return [t, r.f.fromJson(n)]
                })))
            }

            function f(e) {
                return e ? new Date(e.Timestamp) : void 0
            }

            function h(e, t) {
                return void 0 === t && (t = !1), e instanceof Error ? t && e.stack ? e.stack : e.toString() : e + ""
            }
        },
        590: function(e, t, n) {
            "use strict";
            var r = function(e) {
                return function(e) {
                    return !!e && "object" == typeof e
                }(e) && ! function(e) {
                    var t = Object.prototype.toString.call(e);
                    return "[object RegExp]" === t || "[object Date]" === t || function(e) {
                        return e.$$typeof === o
                    }(e)
                }(e)
            };
            var o = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

            function c(e, t) {
                return !1 !== t.clone && t.isMergeableObject(e) ? v((n = e, Array.isArray(n) ? [] : {}), e, t) : e;
                var n
            }

            function l(e, source, t) {
                return e.concat(source).map((function(element) {
                    return c(element, t)
                }))
            }

            function f(e) {
                return Object.keys(e).concat(function(e) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter((function(symbol) {
                        return Object.propertyIsEnumerable.call(e, symbol)
                    })) : []
                }(e))
            }

            function h(object, e) {
                try {
                    return e in object
                } catch (e) {
                    return !1
                }
            }

            function d(e, source, t) {
                var n = {};
                return t.isMergeableObject(e) && f(e).forEach((function(r) {
                    n[r] = c(e[r], t)
                })), f(source).forEach((function(r) {
                    (function(e, t) {
                        return h(e, t) && !(Object.hasOwnProperty.call(e, t) && Object.propertyIsEnumerable.call(e, t))
                    })(e, r) || (h(e, r) && t.isMergeableObject(source[r]) ? n[r] = function(e, t) {
                        if (!t.customMerge) return v;
                        var n = t.customMerge(e);
                        return "function" == typeof n ? n : v
                    }(r, t)(e[r], source[r], t) : n[r] = c(source[r], t))
                })), n
            }

            function v(e, source, t) {
                (t = t || {}).arrayMerge = t.arrayMerge || l, t.isMergeableObject = t.isMergeableObject || r, t.cloneUnlessOtherwiseSpecified = c;
                var n = Array.isArray(source);
                return n === Array.isArray(e) ? n ? t.arrayMerge(e, source, t) : d(e, source, t) : c(source, t)
            }
            v.all = function(e, t) {
                if (!Array.isArray(e)) throw new Error("first argument should be an array");
                return e.reduce((function(e, n) {
                    return v(e, n, t)
                }), {})
            };
            var y = v;
            e.exports = y
        },
        601: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return c
                }));
                var r, o = function() {
                    if (!r && !(r = "object" == typeof globalThis && globalThis ? globalThis : "object" == typeof self && self ? self : "object" == typeof window && window ? window : "object" == typeof e && e ? e : "function" == typeof Function ? Function("return this")() : null)) throw new Error("Global object could not be determined.");
                    return r
                };

                function c() {
                    void 0 === Object.values && (Object.values = l), void 0 === Object.entries && (Object.entries = f), void 0 === Object.fromEntries && (Object.fromEntries = h), "undefined" == typeof WeakRef && (o().WeakRef = function() {
                        var e = function(e) {
                            this.target = e
                        };
                        return e.prototype.deref = function() {
                            return this.target
                        }, e.isFallback = !0, e
                    }())
                }

                function l(e) {
                    for (var t = [], n = 0, r = Object.keys(e); n < r.length; n++) {
                        var o = r[n];
                        t.push(e[o])
                    }
                    return t
                }

                function f(e) {
                    for (var t = [], n = 0, r = Object.keys(e); n < r.length; n++) {
                        var o = r[n];
                        t.push([o, e[o]])
                    }
                    return t
                }

                function h(e) {
                    var t, n = {};
                    if (Array.isArray(e))
                        for (var r = 0, o = e; r < o.length; r++) {
                            var c = o[r],
                                l = c[0],
                                f = c[1];
                            n[l] = f
                        } else {
                            if ("undefined" == typeof Symbol || !(null == e ? void 0 : e[Symbol.iterator])) throw new Error("Object.fromEntries() requires a single iterable argument");
                            for (var h = e[Symbol.iterator](), element = void 0; element = (t = h.next()).value, !t.done;) {
                                l = element[0], f = element[1];
                                n[l] = f
                            }
                        }
                    return n
                }
            }).call(this, n(76))
        },
        612: function(e, t, n) {
            "use strict";
            var r = n(39);
            n(28), n(15), n(102);

            function o(e) {
                return null !== e && "object" === Object(r.a)(e)
            }

            function c(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".",
                    r = arguments.length > 3 ? arguments[3] : void 0;
                if (!o(t)) return c(e, {}, n, r);
                var l = Object.assign({}, t);
                for (var f in e)
                    if ("__proto__" !== f && "constructor" !== f) {
                        var h = e[f];
                        null != h && (r && r(l, f, h, n) || (Array.isArray(h) && Array.isArray(l[f]) ? l[f] = l[f].concat(h) : o(h) && o(l[f]) ? l[f] = c(h, l[f], (n ? "".concat(n, ".") : "") + f.toString(), r) : l[f] = h))
                    }
                return l
            }

            function l(e) {
                return function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return n.reduce((function(p, t) {
                        return c(p, t, "", e)
                    }), {})
                }
            }
            var f = l();
            f.fn = l((function(e, t, n, r) {
                if (void 0 !== e[t] && "function" == typeof n) return e[t] = n(e[t]), !0
            })), f.arrayFn = l((function(e, t, n, r) {
                if (Array.isArray(e[t]) && "function" == typeof n) return e[t] = n(e[t]), !0
            })), f.extend = l, t.a = f
        },
        622: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return w
            }));
            let r, o;
            const c = new WeakMap,
                l = new WeakMap,
                f = new WeakMap,
                h = new WeakMap,
                d = new WeakMap;
            let v = {
                get(e, t, n) {
                    if (e instanceof IDBTransaction) {
                        if ("done" === t) return l.get(e);
                        if ("objectStoreNames" === t) return e.objectStoreNames || f.get(e);
                        if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                    }
                    return O(e[t])
                },
                set: (e, t, n) => (e[t] = n, !0),
                has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
            };

            function y(e) {
                return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (o || (o = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
                    return e.apply(E(this), t), O(c.get(this))
                } : function(...t) {
                    return O(e.apply(E(this), t))
                } : function(t, ...n) {
                    const r = e.call(E(this), t, ...n);
                    return f.set(r, t.sort ? t.sort() : [t]), O(r)
                }
            }

            function m(e) {
                return "function" == typeof e ? y(e) : (e instanceof IDBTransaction && function(e) {
                    if (l.has(e)) return;
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("complete", o), e.removeEventListener("error", c), e.removeEventListener("abort", c)
                            },
                            o = () => {
                                t(), r()
                            },
                            c = () => {
                                n(e.error || new DOMException("AbortError", "AbortError")), r()
                            };
                        e.addEventListener("complete", o), e.addEventListener("error", c), e.addEventListener("abort", c)
                    }));
                    l.set(e, t)
                }(e), object = e, (r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => object instanceof e)) ? new Proxy(e, v) : e);
                var object
            }

            function O(e) {
                if (e instanceof IDBRequest) return function(e) {
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("success", o), e.removeEventListener("error", c)
                            },
                            o = () => {
                                t(O(e.result)), r()
                            },
                            c = () => {
                                n(e.error), r()
                            };
                        e.addEventListener("success", o), e.addEventListener("error", c)
                    }));
                    return t.then((t => {
                        t instanceof IDBCursor && c.set(t, e)
                    })).catch((() => {})), d.set(t, e), t
                }(e);
                if (h.has(e)) return h.get(e);
                const t = m(e);
                return t !== e && (h.set(e, t), d.set(t, e)), t
            }
            const E = e => d.get(e);

            function w(e, t, {
                blocked: n,
                upgrade: r,
                blocking: o,
                terminated: c
            } = {}) {
                const l = indexedDB.open(e, t),
                    f = O(l);
                return r && l.addEventListener("upgradeneeded", (e => {
                    r(O(l.result), e.oldVersion, e.newVersion, O(l.transaction))
                })), n && l.addEventListener("blocked", (() => n())), f.then((e => {
                    c && e.addEventListener("close", (() => c())), o && e.addEventListener("versionchange", (() => o()))
                })).catch((() => {})), f
            }
            const A = ["get", "getKey", "getAll", "getAllKeys", "count"],
                C = ["put", "add", "delete", "clear"],
                I = new Map;

            function S(e, t) {
                if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
                if (I.get(t)) return I.get(t);
                const n = t.replace(/FromIndex$/, ""),
                    r = t !== n,
                    o = C.includes(n);
                if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !o && !A.includes(n)) return;
                const c = async function(e, ...t) {
                    const c = this.transaction(e, o ? "readwrite" : "readonly");
                    let l = c.store;
                    return r && (l = l.index(t.shift())), (await Promise.all([l[n](...t), o && c.done]))[0]
                };
                return I.set(t, c), c
            }
            v = (e => ({ ...e,
                get: (t, n, r) => S(t, n) || e.get(t, n, r),
                has: (t, n) => !!S(t, n) || e.has(t, n)
            }))(v)
        },
        711: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), "string" != typeof(e = e && e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            }
        },
        746: function(e, t) {
            t.read = function(e, t, n, r, o) {
                var c, l, f = 8 * o - r - 1,
                    h = (1 << f) - 1,
                    d = h >> 1,
                    v = -7,
                    i = n ? o - 1 : 0,
                    y = n ? -1 : 1,
                    s = e[t + i];
                for (i += y, c = s & (1 << -v) - 1, s >>= -v, v += f; v > 0; c = 256 * c + e[t + i], i += y, v -= 8);
                for (l = c & (1 << -v) - 1, c >>= -v, v += r; v > 0; l = 256 * l + e[t + i], i += y, v -= 8);
                if (0 === c) c = 1 - d;
                else {
                    if (c === h) return l ? NaN : 1 / 0 * (s ? -1 : 1);
                    l += Math.pow(2, r), c -= d
                }
                return (s ? -1 : 1) * l * Math.pow(2, c - r)
            }, t.write = function(e, t, n, r, o, c) {
                var l, f, h, d = 8 * c - o - 1,
                    v = (1 << d) - 1,
                    y = v >> 1,
                    rt = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    i = r ? 0 : c - 1,
                    m = r ? 1 : -1,
                    s = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (f = isNaN(t) ? 1 : 0, l = v) : (l = Math.floor(Math.log(t) / Math.LN2), t * (h = Math.pow(2, -l)) < 1 && (l--, h *= 2), (t += l + y >= 1 ? rt / h : rt * Math.pow(2, 1 - y)) * h >= 2 && (l++, h /= 2), l + y >= v ? (f = 0, l = v) : l + y >= 1 ? (f = (t * h - 1) * Math.pow(2, o), l += y) : (f = t * Math.pow(2, y - 1) * Math.pow(2, o), l = 0)); o >= 8; e[n + i] = 255 & f, i += m, f /= 256, o -= 8);
                for (l = l << o | f, d += o; d > 0; e[n + i] = 255 & l, i += m, l /= 256, d -= 8);
                e[n + i - m] |= 128 * s
            }
        },
        747: function(e, t) {
            var n = {}.toString;
            e.exports = Array.isArray || function(e) {
                return "[object Array]" == n.call(e)
            }
        },
        79: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "getClient", (function() {
                return O
            })), n.d(t, "disposeAllClients", (function() {
                return E
            })), n.d(t, "createClientWithAutoPoll", (function() {
                return w
            })), n.d(t, "createClientWithManualPoll", (function() {
                return A
            })), n.d(t, "createClientWithLazyLoad", (function() {
                return C
            })), n.d(t, "createConsoleLogger", (function() {
                return I
            }));
            var r = n(222),
                o = n(87);
            n.d(t, "PollingMode", (function() {
                return o.f
            }));
            var c = n(272);
            n.d(t, "LogLevel", (function() {
                return c.b
            }));
            var l = n(601),
                f = n(118);
            n.d(t, "FetchStatus", (function() {
                return f.c
            })), n.d(t, "FetchResult", (function() {
                return f.b
            })), n.d(t, "FetchError", (function() {
                return f.a
            })), n.d(t, "OptionsBase", (function() {
                return o.e
            }));
            var h = n(354);
            n.d(t, "InMemoryCache", (function() {
                return h.a
            })), n.d(t, "DataGovernance", (function() {
                return o.b
            }));
            var d = n(55);
            n.d(t, "ProjectConfig", (function() {
                return d.c
            })), n.d(t, "RolloutRule", (function() {
                return d.e
            })), n.d(t, "RolloutPercentageItem", (function() {
                return d.d
            })), n.d(t, "Setting", (function() {
                return d.f
            })), n.d(t, "SettingKeyValue", (function() {
                return r.b
            }));
            var v = n(100);
            n.d(t, "User", (function() {
                return v.b
            }));
            var y = n(186);
            n.d(t, "FlagOverrides", (function() {
                return y.a
            })), n.d(t, "MapOverrideDataSource", (function() {
                return y.b
            })), n.d(t, "OverrideBehaviour", (function() {
                return y.c
            }));
            var m = n(158);

            function O(e, t, n, o) {
                return r.a.get(e, t, n, o)
            }

            function E() {
                r.a.disposeAll()
            }

            function w(e, t, n) {
                return new r.a(new o.a(e, t.sdkType, t.sdkVersion, n, t.cache, t.eventEmitterFactory), t)
            }

            function A(e, t, n) {
                return new r.a(new o.d(e, t.sdkType, t.sdkVersion, n, t.cache, t.eventEmitterFactory), t)
            }

            function C(e, t, n) {
                return new r.a(new o.c(e, t.sdkType, t.sdkVersion, n, t.cache, t.eventEmitterFactory), t)
            }

            function I(e) {
                return new c.a(e)
            }
            n.d(t, "RefreshResult", (function() {
                return m.b
            })), Object(l.a)()
        },
        87: function(e, t, n) {
            "use strict";
            n.d(t, "f", (function() {
                return f
            })), n.d(t, "b", (function() {
                return h
            })), n.d(t, "e", (function() {
                return m
            })), n.d(t, "a", (function() {
                return O
            })), n.d(t, "d", (function() {
                return E
            })), n.d(t, "c", (function() {
                return w
            }));
            var r = n(9),
                o = n(354),
                c = n(272);

            function l(e) {
                return !!e.fn
            }
            var f, h, d = function() {
                    function e() {
                        this.events = {}, this.eventCount = 0, this.addListener = this.on, this.off = this.removeListener
                    }
                    return e.prototype.addListenerCore = function(e, t, n) {
                        if ("function" != typeof t) throw new TypeError("Listener must be a function");
                        var r = this.events[e],
                            o = {
                                fn: t,
                                once: n
                            };
                        return r ? l(r) ? this.events[e] = [r, o] : r.push(o) : (this.events[e] = o, this.eventCount++), this
                    }, e.prototype.removeListenerCore = function(e, t, n) {
                        var r = this.events[e];
                        if (!r) return this;
                        if (l(r)) n(r, t) && this.removeEvent(e);
                        else
                            for (var i = r.length - 1; i >= 0; i--)
                                if (n(r[i], t)) {
                                    r.splice(i, 1), r.length ? 1 === r.length && (this.events[e] = r[0]) : this.removeEvent(e);
                                    break
                                } return this
                    }, e.prototype.removeEvent = function(e) {
                        0 == --this.eventCount ? this.events = {} : delete this.events[e]
                    }, e.prototype.on = function(e, t) {
                        return this.addListenerCore(e, t, !1)
                    }, e.prototype.once = function(e, t) {
                        return this.addListenerCore(e, t, !0)
                    }, e.prototype.removeListener = function(e, t) {
                        if ("function" != typeof t) throw new TypeError("Listener must be a function");
                        return this.removeListenerCore(e, t, (function(e, t) {
                            return e.fn === t
                        }))
                    }, e.prototype.removeAllListeners = function(e) {
                        return e ? this.events[e] && this.removeEvent(e) : (this.events = {}, this.eventCount = 0), this
                    }, e.prototype.listeners = function(e) {
                        var t = this.events[e];
                        if (!t) return [];
                        if (l(t)) return [t.fn];
                        for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = t[i].fn;
                        return r
                    }, e.prototype.listenerCount = function(e) {
                        var t = this.events[e];
                        return t ? l(t) ? 1 : t.length : 0
                    }, e.prototype.eventNames = function() {
                        var e, t = [];
                        if (0 === this.eventCount) return t;
                        for (var n in e = this.events) e.hasOwnProperty(n) && t.push(n);
                        return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
                    }, e.prototype.emit = function(e, t, n, r, o) {
                        for (var c, f, h = [], d = 5; d < arguments.length; d++) h[d - 5] = arguments[d];
                        var v, y, m = this.events[e];
                        if (!m) return !1;
                        l(m) ? (v = (c = [m, 1])[0], y = c[1]) : (v = (f = [(m = m.slice())[0], m.length])[0], y = f[1]);
                        for (var O = arguments.length - 1, i = 0;;) {
                            switch (v.once && this.removeListenerCore(e, v, (function(e, t) {
                                return e === t
                            })), O) {
                                case 0:
                                    v.fn.call(this);
                                    break;
                                case 1:
                                    v.fn.call(this, t);
                                    break;
                                case 2:
                                    v.fn.call(this, t, n);
                                    break;
                                case 3:
                                    v.fn.call(this, t, n, r);
                                    break;
                                case 4:
                                    v.fn.call(this, t, n, r, o);
                                    break;
                                default:
                                    for (var E = new Array(O), w = 0; w < O; w++) E[w] = arguments[w + 1];
                                    v.fn.apply(this, E)
                            }
                            if (++i >= y) break;
                            v = m[i]
                        }
                        return !0
                    }, e
                }(),
                v = new(function() {
                    function e() {
                        this.addListener = this.on, this.off = this.removeListener
                    }
                    return e.prototype.on = function() {
                        return this
                    }, e.prototype.once = function() {
                        return this
                    }, e.prototype.removeListener = function() {
                        return this
                    }, e.prototype.removeAllListeners = function() {
                        return this
                    }, e.prototype.listeners = function() {
                        return []
                    }, e.prototype.listenerCount = function() {
                        return 0
                    }, e.prototype.eventNames = function() {
                        return []
                    }, e.prototype.emit = function() {
                        return !1
                    }, e
                }()),
                y = function() {
                    function e(e) {
                        this.addListener = this.on, this.off = this.removeListener, this.eventEmitter = e
                    }
                    return e.prototype.tryDisconnect = function() {
                        var e = this.eventEmitter;
                        return this.eventEmitter = v, e !== v
                    }, e.prototype.on = function(e, t) {
                        return this.eventEmitter.on(e, t), this
                    }, e.prototype.once = function(e, t) {
                        return this.eventEmitter.once(e, t), this
                    }, e.prototype.removeListener = function(e, t) {
                        return this.eventEmitter.removeListener(e, t), this
                    }, e.prototype.removeAllListeners = function(e) {
                        return this.eventEmitter.removeAllListeners(e), this
                    }, e.prototype.listeners = function(e) {
                        return this.eventEmitter.listeners(e)
                    }, e.prototype.listenerCount = function(e) {
                        return this.eventEmitter.listenerCount(e)
                    }, e.prototype.eventNames = function() {
                        return this.eventEmitter.eventNames()
                    }, e.prototype.emit = function(e) {
                        for (var t, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                        return (t = this.eventEmitter).emit.apply(t, Object(r.e)([e], n, !1))
                    }, e
                }();
            ! function(e) {
                e[e.AutoPoll = 0] = "AutoPoll", e[e.LazyLoad = 1] = "LazyLoad", e[e.ManualPoll = 2] = "ManualPoll"
            }(f || (f = {})),
            function(e) {
                e[e.Global = 0] = "Global", e[e.EuOnly = 1] = "EuOnly"
            }(h || (h = {}));
            var m = function() {
                    function e(e, t, n, r, l) {
                        var f, v, m;
                        if (this.configFileName = "config_v5", this.requestTimeoutMs = 3e4, this.baseUrlOverriden = !1, this.proxy = "", this.offline = !1, !e) throw new Error("Invalid 'apiKey' value");
                        if (r || (r = new o.a), this.apiKey = e, this.clientVersion = t, this.dataGovernance = null !== (f = null == n ? void 0 : n.dataGovernance) && void 0 !== f ? f : h.Global, this.cache = r, this.dataGovernance === h.EuOnly) this.baseUrl = "https://cdn-eu.configcat.com";
                        else this.baseUrl = "https://cdn-global.configcat.com";
                        var O, E = null !== (v = null == l ? void 0 : l()) && void 0 !== v ? v : new d;
                        if (this.hooks = new y(E), n) {
                            if (O = n.logger, n.requestTimeoutMs) {
                                if (n.requestTimeoutMs < 0) throw new Error("Invalid 'requestTimeoutMs' value");
                                this.requestTimeoutMs = n.requestTimeoutMs
                            }
                            n.baseUrl && (this.baseUrl = n.baseUrl, this.baseUrlOverriden = !0), n.proxy && (this.proxy = n.proxy), n.cache && (this.cache = n.cache), n.flagOverrides && (this.flagOverrides = n.flagOverrides), n.defaultUser && (this.defaultUser = n.defaultUser), n.offline && (this.offline = n.offline), null === (m = n.setupHooks) || void 0 === m || m.call(n, this.hooks)
                        }
                        this.logger = new c.c(null != O ? O : new c.a, this.hooks)
                    }
                    return e.prototype.getUrl = function() {
                        return this.baseUrl + "/configuration-files/" + this.apiKey + "/" + this.configFileName + ".json?sdk=" + this.clientVersion
                    }, e.prototype.getCacheKey = function() {
                        return "js_" + this.configFileName + "_" + this.apiKey
                    }, e
                }(),
                O = function(e) {
                    function t(t, n, r, o, c, l) {
                        var f = e.call(this, t, n + "/a-" + r, o, c, l) || this;
                        if (f.pollIntervalSeconds = 60, f.configChanged = function() {}, f.maxInitWaitTimeSeconds = 5, o && (void 0 !== o.pollIntervalSeconds && null !== o.pollIntervalSeconds && (f.pollIntervalSeconds = o.pollIntervalSeconds), o.configChanged && (f.configChanged = o.configChanged), void 0 !== o.maxInitWaitTimeSeconds && null !== o.maxInitWaitTimeSeconds && (f.maxInitWaitTimeSeconds = o.maxInitWaitTimeSeconds)), !(f.pollIntervalSeconds >= 1 && "number" == typeof f.pollIntervalSeconds)) throw new Error("Invalid 'pollIntervalSeconds' value");
                        if (!(f.maxInitWaitTimeSeconds >= 0 && "number" == typeof f.maxInitWaitTimeSeconds)) throw new Error("Invalid 'maxInitWaitTimeSeconds' value");
                        return f
                    }
                    return Object(r.c)(t, e), t
                }(m),
                E = function(e) {
                    function t(t, n, r, o, c, l) {
                        return e.call(this, t, n + "/m-" + r, o, c, l) || this
                    }
                    return Object(r.c)(t, e), t
                }(m),
                w = function(e) {
                    function t(t, n, r, o, c, l) {
                        var f = e.call(this, t, n + "/l-" + r, o, c, l) || this;
                        if (f.cacheTimeToLiveSeconds = 60, o && o.cacheTimeToLiveSeconds && (f.cacheTimeToLiveSeconds = o.cacheTimeToLiveSeconds), !f.cacheTimeToLiveSeconds || f.cacheTimeToLiveSeconds < 1) throw new Error("Invalid 'cacheTimeToLiveSeconds' value. Value must be greater than zero.");
                        return f
                    }
                    return Object(r.c)(t, e), t
                }(m)
        },
        9: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return o
            })), n.d(t, "a", (function() {
                return c
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "d", (function() {
                return f
            })), n.d(t, "e", (function() {
                return h
            }));
            var r = function(e, b) {
                return r = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, b) {
                    e.__proto__ = b
                } || function(e, b) {
                    for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (e[p] = b[p])
                }, r(e, b)
            };

            function o(e, b) {
                if ("function" != typeof b && null !== b) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

                function t() {
                    this.constructor = e
                }
                r(e, b), e.prototype = null === b ? Object.create(b) : (t.prototype = b.prototype, new t)
            }
            var c = function() {
                return c = Object.assign || function(e) {
                    for (var s, i = 1, t = arguments.length; i < t; i++)
                        for (var p in s = arguments[i]) Object.prototype.hasOwnProperty.call(s, p) && (e[p] = s[p]);
                    return e
                }, c.apply(this, arguments)
            };

            function l(e, t, n, r) {
                return new(n || (n = Promise))((function(o, c) {
                    function l(e) {
                        try {
                            h(r.next(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function f(e) {
                        try {
                            h(r.throw(e))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(l, f)
                    }
                    h((r = r.apply(e, t || [])).next())
                }))
            }

            function f(e, body) {
                var t, n, r, g, o = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return g = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
                    return this
                }), g;

                function c(c) {
                    return function(l) {
                        return function(c) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; g && (g = 0, c[0] && (o = 0)), o;) try {
                                if (t = 1, n && (r = 2 & c[0] ? n.return : c[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, c[1])).done) return r;
                                switch (n = 0, r && (c = [2 & c[0], r.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        r = c;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, n = c[1], c = [0];
                                        continue;
                                    case 7:
                                        c = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(r = o.trys, (r = r.length > 0 && r[r.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!r || c[1] > r[0] && c[1] < r[3])) {
                                            o.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && o.label < r[1]) {
                                            o.label = r[1], r = c;
                                            break
                                        }
                                        if (r && o.label < r[2]) {
                                            o.label = r[2], o.ops.push(c);
                                            break
                                        }
                                        r[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                c = body.call(e, o)
                            } catch (e) {
                                c = [6, e], n = 0
                            } finally {
                                t = r = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, l])
                    }
                }
            }
            Object.create;

            function h(e, t, n) {
                if (n || 2 === arguments.length)
                    for (var r, i = 0, o = t.length; i < o; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                return e.concat(r || Array.prototype.slice.call(t))
            }
            Object.create
        }
    }
]);