! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b99b3d2f-9f51-4eb7-b0fd-c1dbe1d9352b", e._sentryDebugIdIdentifier = "sentry-dbid-b99b3d2f-9f51-4eb7-b0fd-c1dbe1d9352b")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [104], {
        1002: function(e, t, r) {
            "use strict";
            r.r(t);
            r(32);
            var n = r(2),
                o = r(248),
                d = r(812),
                h = r(814),
                c = n.default.extend({
                    name: "app-bar-section",
                    i18n: {
                        messages: {
                            en: {
                                "For companies": "For companies",
                                "For candidates": "For candidates",
                                "For remote teams": "For remote teams",
                                "Torre's open sourced algorithms": "Torre's open sourced algorithms",
                                "Torre's Job-Matching Model": "Torre's Job-Matching Model"
                            },
                            es: {
                                "For companies": "Para empresas",
                                "For candidates": "Para candidatos",
                                "For remote teams": "Para equipos remotos",
                                "Torre's open sourced algorithms": "Torre's open sourced algorithms",
                                "Torre's Job-Matching Model": "Torre's Job-Matching Model"
                            }
                        }
                    },
                    components: {
                        AppBarWrapper: o.a
                    },
                    mixins: [h.a],
                    props: {
                        pageSchema: {
                            type: Object,
                            required: !0
                        },
                        highlightedIcons: {
                            type: Array,
                            required: !1
                        },
                        hideLocaleSelector: {
                            type: Boolean,
                            default: !1
                        },
                        algorithms: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        needsIndex: function() {
                            return this.pageSchema.type && this.pageSchema.type !== d.a.UNDEFINED || this.algorithms
                        },
                        hasTabsSlot: function() {
                            return !!this.$slots.tabs
                        },
                        indexTitle: function() {
                            if (this.needsIndex) {
                                if ("savings" === this.pageSchema.id) return "Torre OS";
                                if ("emma-page" === this.pageSchema.id) return "Emma";
                                if (this.algorithms) return this.$t("Torre's Job-Matching Model");
                                if ("thp_for_ts" === this.pageSchema.id) return "Torre";
                                if ("thp_for_bpo" === this.pageSchema.id) return "Torre";
                                if ("thp_for_ai_talent" === this.pageSchema.id) return "Torre";
                                if ("thp_for_rt" === this.pageSchema.id) return "Torre";
                                if ("thp_for_candidates" === this.pageSchema.id) return "Torre";
                                switch (this.pageSchema.type) {
                                    case d.a.TALENT_SEEKER:
                                        return this.$t("For companies");
                                    case d.a.CANDIDATE:
                                        return this.$t("For candidates");
                                    case d.a.PARTNER:
                                        return "Torre partners";
                                    case d.a.TESTIMONIAL:
                                        return this.$t("Testimonials");
                                    default:
                                        return "Torre"
                                }
                            }
                        },
                        indexUrl: function() {
                            if (this.needsIndex) {
                                if ("savings" === this.pageSchema.id) return "/os";
                                if (this.algorithms) return "/jobmatchingmodel";
                                if ("thp_for_ts" === this.pageSchema.id) return "/";
                                if ("thp_for_bpo" === this.pageSchema.id) return "/";
                                if ("thp_for_ai_talent" === this.pageSchema.id) return "/";
                                if ("thp_for_rt" === this.pageSchema.id) return "/";
                                if ("thp_for_candidates" === this.pageSchema.id) return "/";
                                if ("emma-page" === this.pageSchema.id) return "/emmapage";
                                if ("testimonials" === this.pageSchema.id) return "/".concat(this.$i18n.locale, "/testimonials");
                                switch (this.pageSchema.type) {
                                    case d.a.TALENT_SEEKER:
                                        return "/forcompanies";
                                    case d.a.CANDIDATE:
                                        return "/forcandidates";
                                    case d.a.PARTNER:
                                        return "/partners";
                                    case d.a.TESTIMONIAL:
                                        return "/testimonials";
                                    default:
                                        return "/"
                                }
                            }
                        },
                        indexSubTitle: function() {
                            return "thp_for_ts" === this.pageSchema.id ? " > " + this.$t("For companies") : "thp_for_candidates" === this.pageSchema.id ? " > " + this.$t("For candidates") : "thp_for_bpo" === this.pageSchema.id ? " > " + this.$t("For BPOs") : "thp_for_rt" === this.pageSchema.id ? " > " + this.$t("For remote teams") : "thp_for_ai_talent" === this.pageSchema.id ? " > " + this.$t("For AI talent") : "testimonials-candidates" === this.pageSchema.id ? " > " + this.$t("Candidates") : "testimonials-companies" === this.pageSchema.id ? " > " + this.$t("Companies") : this.needsIndex && !this.pageSchema.isRoot && "Algorithms" !== this.pageSchema.name && "emma-page" !== this.pageSchema.id ? this.algorithms ? " > " + this.pageSchema.name : " > " + this.$t(this.pageSchema.header.title) : void 0
                        }
                    }
                }),
                l = (r(866), r(101)),
                component = Object(l.a)(c, (function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("app-bar-wrapper", {
                        attrs: {
                            "has-cross-bar-index": e.needsIndex,
                            "initial-height": e.needsIndex || e.hasTabsSlot ? "112" : "56",
                            "highlighted-icons": e.highlightedIcons,
                            "hide-locale-selector": e.hideLocaleSelector,
                            "md-theme": "dark",
                            "hide-bottom-bar": ""
                        },
                        scopedSlots: e._u([e.needsIndex ? {
                            key: "toolbar-buttons",
                            fn: function() {
                                return [r("span", {
                                    staticClass: "cross-bar-index"
                                }, [r("a", {
                                    staticClass: "md-primary",
                                    attrs: {
                                        href: e.indexUrl
                                    }
                                }, [e._v(e._s(e.indexTitle))]), e._v(e._s(e.indexSubTitle) + "\n      ")])]
                            },
                            proxy: !0
                        } : null, {
                            key: "default",
                            fn: function() {
                                return [e._t("default")]
                            },
                            proxy: !0
                        }, {
                            key: "tabs",
                            fn: function() {
                                return [e._t("tabs")]
                            },
                            proxy: !0
                        }], null, !0)
                    })], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        814: function(e, t, r) {
            "use strict";
            r.d(t, "a", (function() {
                return d
            }));
            var n = r(2),
                o = r(827),
                d = n.default.extend({
                    methods: {
                        homePagesTrackingMixin_createPingTracker: function() {
                            var e = "".concat(this.$config.snowplowCollector);
                            Object(o.b)("sp", e, {
                                appId: "".concat(this.$config.appSnowplowId, "-home")
                            }), Object(o.a)({
                                minimumVisitLength: 30,
                                heartbeatDelay: 10
                            }), Object(o.c)()
                        },
                        homePagesTrackingMixin_itemClicked: function(e) {
                            Object(o.d)({
                                category: "home_pages",
                                action: e.action,
                                label: "".concat(e.id),
                                property: "element_id",
                                value: 0
                            })
                        }
                    }
                })
        },
        839: function(e, t, r) {
            var content = r(867);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(178).default)("813b278a", content, !0, {
                sourceMap: !1
            })
        },
        866: function(e, t, r) {
            "use strict";
            r(839)
        },
        867: function(e, t, r) {
            var n = r(177)(!1);
            n.push([e.i, ".cross-bar-index{margin-left:6px}", ""]), e.exports = n
        }
    }
]);