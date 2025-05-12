! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0ff9f977-e8c9-440e-964b-7e3438ddbb58", e._sentryDebugIdIdentifier = "sentry-dbid-0ff9f977-e8c9-440e-964b-7e3438ddbb58")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [108], {
        1227: function(e, t, n) {
            "use strict";
            n(997)
        },
        1228: function(e, t, n) {
            var d = n(177)(!1);
            d.push([e.i, '.page-content-section[data-v-73e53cf6]{display:grid;grid-template-areas:"image title" "image cta";-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;justify-items:start;-ms-flex-line-pack:center;align-content:center;height:100vh;max-height:1440px;grid-column-gap:80px;-webkit-column-gap:80px;-moz-column-gap:80px;column-gap:80px;padding:64px 32px}.page-content-section--image[data-v-73e53cf6]{grid-area:image;min-width:264px}.page-content-section--title[data-v-73e53cf6]{grid-area:title;max-width:630px;font-size:56px;font-weight:600;line-height:70.28px;align-self:flex-end}@media(max-width:720px){.page-content-section--title[data-v-73e53cf6]{font-size:34px;font-weight:400;line-height:40px}}@media(min-width:1024px){.page-content-section--title[data-v-73e53cf6]{margin-bottom:32px}}.page-content-section--cta[data-v-73e53cf6]{grid-area:cta;align-self:flex-start}@media(max-width:1024px){.page-content-section[data-v-73e53cf6]{height:unset;grid-template-areas:"title" "cta" "image";grid-gap:32px;gap:32px;justify-items:center;padding:120px 24px;text-align:center}.page-content-section.variation-1[data-v-73e53cf6]{grid-template-areas:"title" "image" "cta"}}', ""]), e.exports = d
        },
        1300: function(e, t, n) {
            "use strict";
            n.r(t);
            n(28);
            var d = n(2),
                c = n(781),
                o = n(384),
                r = n(133),
                l = d.default.extend({
                    name: "page-content-section",
                    components: {
                        TmdCard: c.a,
                        TmdButton: o.a
                    },
                    mixins: [r.a],
                    props: {
                        data: {
                            type: Object,
                            required: !0
                        },
                        variation: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        href: function() {
                            return "/".concat(this.$i18n.locale).concat(this.data.ctaUrl)
                        }
                    }
                }),
                f = (n(1227), n(101)),
                component = Object(f.a)(l, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("tmd-card", {
                        class: "page-content-section variation-" + e.variation,
                        attrs: {
                            "md-elevation": e.data.mdElevation,
                            "md-theme": e.data.mdTheme,
                            "no-border-radius": ""
                        }
                    }, [n("img", {
                        staticClass: "page-content-section--image lazyload",
                        attrs: {
                            "data-src": e.$t(e.data.imageUrl),
                            alt: e.$t(e.data.imageAlt)
                        }
                    }), e._v(" "), n("div", {
                        staticClass: "page-content-section--title"
                    }, [e._v("\n    " + e._s(e.$t(e.data.title)) + "\n  ")]), e._v(" "), n("tmd-button", {
                        staticClass: "tmc-theme tmd-primary tmd-raised page-content-section--cta",
                        attrs: {
                            "border-style": "none",
                            "md-elevation": e.data.mdElevation,
                            "md-theme": e.data.mdTheme,
                            href: e.href,
                            "wrap-content": ""
                        }
                    }, [e._v("\n    " + e._s(e.$t(e.data.ctaText)) + "\n  ")])], 1)
                }), [], !1, null, "73e53cf6", null);
            t.default = component.exports
        },
        997: function(e, t, n) {
            var content = n(1228);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(178).default)("74a91560", content, !0, {
                sourceMap: !1
            })
        }
    }
]);