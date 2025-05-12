! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6d13b47d-9ba2-40b5-8815-7d60c5a9f884", e._sentryDebugIdIdentifier = "sentry-dbid-6d13b47d-9ba2-40b5-8815-7d60c5a9f884")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [111], {
        1194: function(e, t, n) {
            "use strict";
            n(972)
        },
        1195: function(e, t, n) {
            var d = n(177)(!1);
            d.push([e.i, ".investors-section[data-v-5c1473ad]{z-index:1;position:relative}.investors-section .flex[data-v-5c1473ad]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center}.investors-section--card[data-v-5c1473ad]{width:100%;min-height:15vh;padding:120px 16px 60px}@media(min-height:900px){.investors-section--card[data-v-5c1473ad]{height:100vh;min-height:720px;max-height:1440px}}@media(min-height:900px)and (max-width:720px){.investors-section--card[data-v-5c1473ad]{height:65vh;max-height:720px}}@media(min-height:900px)and (max-width:450px){.investors-section--card[data-v-5c1473ad]{height:50vh;max-height:720px}}@media(max-width:720px){.investors-section--card[data-v-5c1473ad]{padding:60px 16px;min-height:10vh}}.investors-section--title[data-v-5c1473ad]{font-size:36px;font-weight:400;line-height:normal;text-align:center;max-width:90%}@media(max-width:720px){.investors-section--title[data-v-5c1473ad]{font-size:24px}}.investors-section--graphic[data-v-5c1473ad]{margin:80px 0 60px;width:40%;max-width:900px}@media(max-width:450px){.investors-section--graphic[data-v-5c1473ad]{width:80%}}@media(min-height:450px){.investors-section--graphic[data-v-5c1473ad]{width:35%}}@media(min-height:450px)and (max-width:1366px){.investors-section--graphic[data-v-5c1473ad]{width:45%}}@media(min-height:450px)and (max-width:720px){.investors-section--graphic[data-v-5c1473ad]{margin:40px 0 0;width:70%}}", ""]), e.exports = d
        },
        1295: function(e, t, n) {
            "use strict";
            n.r(t);
            var d = n(2),
                o = n(781),
                r = d.default.extend({
                    name: "investors-section",
                    components: {
                        TmdCard: o.a
                    },
                    i18n: {
                        messages: {
                            en: {
                                "Used and backed by early investors and executives of": "Used and backed by early investors and executives of"
                            },
                            es: {
                                "Used and backed by early investors and executives of": "Usado y respaldado por los primeros inversores y ejecutivos de"
                            }
                        }
                    },
                    props: {
                        elevation: {
                            type: String,
                            default: "1"
                        },
                        imageUrl: {
                            type: String,
                            default: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,h_0.6,c_scale/v1/origin/home-pages/common/investor-logos"
                        }
                    }
                }),
                c = (n(1194), n(101)),
                component = Object(c.a)(r, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "investors-section"
                    }, [n("tmd-card", {
                        staticClass: "investors-section--card flex",
                        attrs: {
                            "md-theme": "dark",
                            "md-elevation": e.elevation,
                            "no-border-radius": "",
                            type: "filled"
                        }
                    }, [n("div", {
                        staticClass: "investors-section--title"
                    }, [e._v("\n      " + e._s(e.$t("Used and backed by early investors and executives of")) + ":\n    ")]), e._v(" "), n("div", {
                        staticClass: "investors-section--graphic"
                    }, [n("img", {
                        staticClass: "lazyload",
                        attrs: {
                            "data-src": e.imageUrl,
                            alt: "Torre early investors"
                        }
                    })])])], 1)
                }), [], !1, null, "5c1473ad", null);
            t.default = component.exports
        },
        972: function(e, t, n) {
            var content = n(1195);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(178).default)("951ba708", content, !0, {
                sourceMap: !1
            })
        }
    }
]);