! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bbdc55aa-14ed-4d57-8691-2db34cf0d41c", e._sentryDebugIdIdentifier = "sentry-dbid-bbdc55aa-14ed-4d57-8691-2db34cf0d41c")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [113], {
        1202: function(e, t, n) {
            "use strict";
            n(976)
        },
        1203: function(e, t, n) {
            var r = n(177)(!1);
            r.push([e.i, ".numerical-benefits-section[data-v-7aa824a4]{width:100%;background-color:#1c1d1f}.numerical-benefits-section.custom-background[data-v-7aa824a4]{background-color:#1c1d1f!important}.numerical-benefits-section.elevation-3[data-v-7aa824a4]{background-color:#383b40!important}.numerical-benefits-section--main[data-v-7aa824a4]{height:auto;min-height:100vh;max-height:1440px;margin:auto;padding:120px 40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center}@media(min-width:1440px){.numerical-benefits-section--main[data-v-7aa824a4]{min-height:unset}}@media(max-width:720px){.numerical-benefits-section--main[data-v-7aa824a4]{padding:60px 40px}}.numerical-benefits-section--main.custom-background[data-v-7aa824a4]{background-color:inherit!important}.numerical-benefits-section--main .list[data-v-7aa824a4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.numerical-benefits-section--main .list .benefit[data-v-7aa824a4]{margin-top:32px;margin-bottom:32px}@media(max-width:720px){.numerical-benefits-section--main .list .benefit[data-v-7aa824a4]{margin-top:16px;margin-bottom:16px}}.numerical-benefits-section--main .list .benefit .sub-title[data-v-7aa824a4]{font-size:24px;font-weight:400;text-align:left;color:hsla(0,0%,100%,.65)}@media(max-width:720px){.numerical-benefits-section--main .list .benefit .sub-title[data-v-7aa824a4]{font-size:14px}}.numerical-benefits-section--main .list .benefit .title[data-v-7aa824a4]{font-size:30px;font-weight:700;line-height:36px;text-align:left;margin-bottom:16px}.numerical-benefits-section--main .list .benefit .title.number[data-v-7aa824a4]{font-size:48px;line-height:60px}@media(max-width:720px){.numerical-benefits-section--main .list .benefit .title.number[data-v-7aa824a4]{line-height:54px}}@media(max-width:720px){.numerical-benefits-section--main .list .benefit .title[data-v-7aa824a4]{font-size:20px;line-height:26px;margin-bottom:8px}}.numerical-benefits-section--main .list .note[data-v-7aa824a4]{font-size:22px;font-weight:400;line-height:26px;text-align:left;margin-top:24px;color:hsla(0,0%,100%,.65)}@media(max-width:720px){.numerical-benefits-section--main .list .note[data-v-7aa824a4]{font-size:12px;line-height:16px}}", ""]), e.exports = r
        },
        1296: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(38),
                o = (n(28), n(382), n(2)),
                c = n(781),
                l = o.default.extend({
                    name: "numerical-benefits-section",
                    components: {
                        TmdCard: c.a
                    },
                    i18n: {
                        messages: {
                            en: {
                                "Up to": "Up to",
                                "Based on actual tests performed in 2023": "Based on actual tests performed in 2023",
                                "faster recruiting": "faster recruiting",
                                "greater employee retention": "greater employee retention",
                                "greater candidate re-engagement": "greater candidate re-engagement",
                                "greater ROI": "greater ROI",
                                "savings on recruitment costs": "savings on recruitment costs",
                                "less interviewing required": "less interviewing required",
                                "greater retention": "greater retention",
                                "month guarantee": "month guarantee",
                                "3x": "3x",
                                "2.5x": "2.5x",
                                "10x": "10x",
                                "4x": "4x",
                                "50%": "50%",
                                "79%": "79%",
                                "21%": "21%",
                                "84%": "84%"
                            },
                            es: {
                                "Up to": "Hasta",
                                "Based on actual tests performed in 2023": "Basado en pruebas reales realizadas en 2023",
                                "faster recruiting": "veces más velocidad en reclutamiento",
                                "greater employee retention": "veces mayor retención de empleados",
                                "greater candidate re-engagement": "veces mayor reenganche de candidatos",
                                "greater ROI": "veces mayor retorno de inversión",
                                "savings on recruitment costs": "de ahorro en costos de reclutamiento",
                                "less interviewing required": "menos entrevistas requeridas",
                                "greater retention": "veces mayor retención",
                                "month guarantee": "meses de garantía",
                                "3x": "3",
                                "2.5x": "2.5",
                                "10x": "10",
                                "4x": "4",
                                "50%": "50%",
                                "79%": "79%",
                                "21%": "21%",
                                "84%": "84%"
                            }
                        }
                    },
                    props: {
                        customElevation: {
                            type: Boolean,
                            default: !1
                        },
                        schema: {
                            type: String,
                            required: !1
                        },
                        elevation: {
                            type: String,
                            default: "1"
                        }
                    },
                    computed: {
                        benefits: function() {
                            var e = [{
                                code: "200184",
                                number: "3x",
                                text: "faster recruiting"
                            }, {
                                code: "200186",
                                number: "21%",
                                text: "greater retention"
                            }, {
                                code: "200192",
                                number: "84%",
                                text: "savings on recruitment costs"
                            }];
                            return e = "hunt" !== this.schema ? [].concat(Object(r.a)(e), [{
                                code: "200188",
                                number: "10x",
                                text: "greater candidate re-engagement"
                            }, {
                                code: "200190",
                                number: "4x",
                                text: "greater ROI"
                            }, {
                                code: "200194",
                                number: "79%",
                                text: "less interviewing required"
                            }]) : [].concat(Object(r.a)(e), [{
                                code: "200196",
                                number: "12",
                                text: "month guarantee"
                            }]), e.sort((function(a, b) {
                                return a.code.localeCompare(b.code)
                            }))
                        }
                    }
                }),
                d = (n(1202), n(101)),
                component = Object(d.a)(l, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["numerical-benefits-section", {
                            "custom-background": e.customElevation
                        }, "elevation-" + e.elevation]
                    }, [n("tmd-card", {
                        class: ["numerical-benefits-section--main", {
                            "custom-background": e.customElevation
                        }],
                        attrs: {
                            "md-theme": "dark",
                            "md-elevation": "1",
                            "no-border-radius": "",
                            type: "filled"
                        }
                    }, [n("div", {
                        staticClass: "list"
                    }, [e._l(e.benefits, (function(t) {
                        return n("div", {
                            key: t.code,
                            staticClass: "benefit"
                        }, [n("div", {
                            staticClass: "sub-title"
                        }, [e._v("\n          " + e._s(e.$t("Up to")) + "\n        ")]), e._v(" "), n("div", {
                            staticClass: "title"
                        }, [n("span", {
                            staticClass: "title number"
                        }, [e._v(e._s(e.$t(t.number)))]), e._v("  " + e._s(e.$t(t.text)) + "†\n        ")])])
                    })), e._v(" "), n("div", {
                        staticClass: "note"
                    }, [e._v("\n        † " + e._s(e.$t("Based on actual tests performed in 2023")) + "\n      ")])], 2)])], 1)
                }), [], !1, null, "7aa824a4", null);
            t.default = component.exports
        },
        976: function(e, t, n) {
            var content = n(1203);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(178).default)("5a7b7de0", content, !0, {
                sourceMap: !1
            })
        }
    }
]);