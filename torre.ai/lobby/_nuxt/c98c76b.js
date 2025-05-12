! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "6ba21981-f2ac-4243-9fad-9550bc8ca5a9", t._sentryDebugIdIdentifier = "sentry-dbid-6ba21981-f2ac-4243-9fad-9550bc8ca5a9")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [107], {
        1156: function(t, e, o) {
            "use strict";
            o(953)
        },
        1157: function(t, e, o) {
            var n = o(177)(!1);
            n.push([t.i, ".about-products-section[data-v-71247cf0]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;min-height:100vh;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:112px 0}@media(min-height:1440px){.about-products-section[data-v-71247cf0]{min-height:unset;max-height:1440px}}@media(max-width:720px){.about-products-section[data-v-71247cf0]{min-height:unset;height:auto;max-height:unset;padding:88px 40px}}.about-products-section--title[data-v-71247cf0]{font-size:45px;font-weight:400;line-height:48px;text-align:center;margin:0 auto 100px}@media(max-width:720px){.about-products-section--title[data-v-71247cf0]{font-size:28px;line-height:30px;margin-bottom:40px}}.about-products-section--items[data-v-71247cf0]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}@media(max-width:720px){.about-products-section--items[data-v-71247cf0]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}.about-products-section--card[data-v-71247cf0]{max-width:328px;margin:40px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:8px}@media(max-width:720px){.about-products-section--card[data-v-71247cf0]{margin:20px}}.about-products-section--description[data-v-71247cf0]{font-size:20px;font-weight:400;line-height:25.1px;text-align:center;color:hsla(0,0%,100%,.65);margin-top:32px;margin-bottom:65px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media(max-width:720px){.about-products-section--description[data-v-71247cf0]{font-size:14px;line-height:18px}}", ""]), t.exports = n
        },
        1292: function(t, e, o) {
            "use strict";
            o.r(e);
            var n = o(2),
                d = o(384),
                r = o(781),
                c = o(337),
                l = n.default.extend({
                    name: "about-products-section",
                    components: {
                        TdsProductLogo: c.a,
                        TmdButton: d.a,
                        TmdCard: r.a
                    },
                    i18n: {
                        messages: {
                            en: {
                                "Core solutions for ": "Core solutions for ",
                                companies: "companies",
                                candidates: "candidates"
                            },
                            es: {
                                "Core solutions for ": "Soluciones para ",
                                companies: "empresas",
                                candidates: "candidatos"
                            }
                        }
                    },
                    props: {
                        products: {
                            type: Array,
                            required: !0
                        },
                        target: {
                            type: String,
                            default: "companies"
                        },
                        headline: {
                            type: String,
                            required: !1
                        }
                    }
                }),
                f = (o(1156), o(101)),
                component = Object(f.a)(l, (function() {
                    var t = this,
                        e = t.$createElement,
                        o = t._self._c || e;
                    return o("tmd-card", {
                        staticClass: "about-products-section",
                        attrs: {
                            id: "core-solutions",
                            "md-elevation": "1",
                            "md-theme": "dark",
                            "no-border-radius": ""
                        }
                    }, [o("div", {
                        staticClass: "about-products-section--title"
                    }, [t.headline ? [t._v(" " + t._s(t.$t(t.headline)) + ":  ")] : [t._v(" " + t._s(t.$t("Core solutions for ")) + t._s(t.$t(t.target)) + ": ")]], 2), t._v(" "), o("div", {
                        staticClass: "about-products-section--items"
                    }, t._l(t.products, (function(e) {
                        return o("tmd-card", {
                            key: e.logo,
                            staticClass: "about-products-section--card",
                            attrs: {
                                "md-theme": "dark",
                                "md-elevation": "1",
                                "no-border-radius": "",
                                type: "filled"
                            }
                        }, [o("a", {
                            attrs: {
                                href: t.localePath(e.logoUrl)
                            }
                        }, [o("tds-product-logo", {
                            attrs: {
                                product: e.logo,
                                height: "job-marketplace" === e.logo ? "30px" : "24px"
                            }
                        })], 1), t._v(" "), o("div", {
                            staticClass: "about-products-section--description"
                        }, [t._v("\n        " + t._s(t.$t(e.pricingHeadline)) + "\n      ")]), t._v(" "), o("tmd-button", {
                            staticClass: "tmc-theme tmd-raised",
                            attrs: {
                                "md-elevation": "theme",
                                "md-parent-elevation": "1",
                                "border-style": "thinner",
                                href: t.localePath(e.logoUrl)
                            }
                        }, [t._v("\n        " + t._s(t.$t("LEARN MORE")) + "\n      ")])], 1)
                    })), 1)])
                }), [], !1, null, "71247cf0", null);
            e.default = component.exports
        },
        953: function(t, e, o) {
            var content = o(1157);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(178).default)("2178e1d9", content, !0, {
                sourceMap: !1
            })
        }
    }
]);