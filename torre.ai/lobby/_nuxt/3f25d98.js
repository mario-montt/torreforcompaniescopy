! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "0319ccf9-51b5-4a91-a5c8-f4e768e480ae", t._sentryDebugIdIdentifier = "sentry-dbid-0319ccf9-51b5-4a91-a5c8-f4e768e480ae")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [15], {
        789: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "TdsAudioPlayer", (function() {
                return o.a
            })), n.d(e, "TdsAudioRecorder", (function() {
                return r.a
            })), n.d(e, "TdsChannels", (function() {
                return d.a
            })), n.d(e, "TdsEditableField", (function() {
                return c.a
            })), n.d(e, "TdsElevatedButton", (function() {
                return l.a
            })), n.d(e, "TdsEntityPicture", (function() {
                return h.a
            })), n.d(e, "TdsEntityRender", (function() {
                return f.a
            })), n.d(e, "TdsFooter", (function() {
                return m.a
            })), n.d(e, "TdsManifestoBanner", (function() {
                return v.a
            })), n.d(e, "TdsMemberList", (function() {
                return _.a
            })), n.d(e, "TdsPageLayout", (function() {
                return w.a
            })), n.d(e, "TdsPageSection", (function() {
                return y.a
            })), n.d(e, "TdsProductColumn", (function() {
                return x.a
            })), n.d(e, "TdsProductLogo", (function() {
                return S.a
            })), n.d(e, "TdsRadioGroup", (function() {
                return T.a
            })), n.d(e, "TdsReferrers", (function() {
                return C.a
            })), n.d(e, "TdsOnboardingSlide", (function() {
                return E.a
            })), n.d(e, "TdsScreeningQuestions", (function() {
                return k.a
            })), n.d(e, "TdsTestimonial", (function() {
                return I.a
            })), n.d(e, "TdsTestimonialGroup", (function() {
                return j
            })), n.d(e, "TdsVideoCard", (function() {
                return R
            })), n.d(e, "TdsWebAppNotification", (function() {
                return H
            })), n.d(e, "TdsWeightRender", (function() {
                return F.a
            })), n.d(e, "TdsNavigationTabs", (function() {
                return U.a
            })), n.d(e, "TdsStepper", (function() {
                return K
            })), n.d(e, "TdsTour", (function() {
                return J.a
            })), n.d(e, "TdsTourContainer", (function() {
                return pt
            })), n.d(e, "TdsFooterProductIndex", (function() {
                return ht.a
            })), n.d(e, "TdsCandidateProductsIndex", (function() {
                return ft.b
            })), n.d(e, "TdsCompanyProductsIndex", (function() {
                return ft.c
            })), n.d(e, "TdsSortProductsByCode", (function() {
                return mt.a
            }));
            var o = n(856),
                r = n(984),
                d = n(985),
                c = n(986),
                l = n(823),
                h = n(826),
                f = n(987),
                m = n(790),
                v = n(870),
                _ = n(988),
                w = n(990),
                y = n(991),
                x = n(493),
                S = n(337),
                T = n(992),
                C = n(993),
                E = n(994),
                k = n(995),
                I = n(847),
                O = n(2),
                A = n(384),
                N = n(179),
                P = O.default.extend({
                    name: "tds-testimonial-group",
                    i18n: {
                        messages: {
                            en: {
                                "VIEW MORE": "View more"
                            },
                            es: {
                                "VIEW MORE": "Ver más"
                            }
                        }
                    },
                    components: {
                        TdsTestimonial: I.a,
                        TmdButton: A.a
                    },
                    props: {
                        testimonials: {
                            type: Array,
                            required: !0
                        },
                        ctaHref: {
                            type: String,
                            default: "/testimonials"
                        },
                        displayCta: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: {
                        testimonialsClasses: function() {
                            return {
                                "tds-hidden": this.displayCta
                            }
                        }
                    }
                }),
                j = Object(N.b)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tds-testimonial-group",
                            attrs: {
                                "md-elevation": "1"
                            }
                        }, [n("div", {
                            class: ["tds-testimonial-group__testimonials", t.testimonialsClasses]
                        }, t._l(t.testimonials, (function(t, e) {
                            return n("tds-testimonial", {
                                key: e,
                                staticClass: "tds-testimonial-group__testimonial",
                                attrs: {
                                    entity: t.entity,
                                    testimonial: t.testimonial
                                }
                            })
                        })), 1), t._v(" "), t.displayCta ? n("tmd-button", {
                            staticClass: "tmc-brand tmd-raised tmd-primary tds-testimonial-group__cta",
                            attrs: {
                                "md-elevation": "1",
                                "border-style": "none",
                                href: t.ctaHref
                            }
                        }, [t._v("\n    " + t._s(t.$t("VIEW MORE")) + "\n  ")]) : t._e()], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-4d9bbfbf_0", {
                        source: ".tds-testimonial-group[data-v-4d9bbfbf]{display:flex;flex-direction:column;align-items:center;gap:48px}@media (max-width:919px){.tds-testimonial-group[data-v-4d9bbfbf]{overflow-x:auto;flex-direction:unset}}.tds-testimonial-group__testimonials[data-v-4d9bbfbf]{display:grid;column-gap:6vw;row-gap:88px}@media (min-width:1240px){.tds-testimonial-group__testimonials[data-v-4d9bbfbf]{grid-template-columns:repeat(3,330px)}}@media (min-width:920px) and (max-width:1239px){.tds-testimonial-group__testimonials[data-v-4d9bbfbf]{grid-template-columns:repeat(2,330px)}}@media (max-width:919px){.tds-testimonial-group__testimonials[data-v-4d9bbfbf]{display:flex}}@media (min-width:920px){.tds-testimonial-group__testimonials.tds-hidden[data-v-4d9bbfbf]{height:358px;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:center}}.tds-testimonial-group__cta[data-v-4d9bbfbf]{width:fit-content}@media (max-width:919px){.tds-testimonial-group__cta[data-v-4d9bbfbf]{display:none!important}}",
                        map: void 0,
                        media: void 0
                    })
                }), P, "data-v-4d9bbfbf", !1, undefined, !1, N.a, void 0, void 0),
                W = (n(45), n(40), n(112), n(15), n(102), n(781)),
                z = n(91),
                B = O.default.extend({
                    name: "tds-video-card",
                    components: {
                        TmdCard: W.a,
                        TmdIcon: z.a
                    },
                    props: {
                        coverImage: String,
                        videoUrl: String,
                        description: String,
                        title: Array,
                        videoTitle: {
                            type: String,
                            default: "video"
                        },
                        size: {
                            type: String,
                            default: "regular",
                            validator: function(t) {
                                return ["large", "regular"].includes(t)
                            }
                        },
                        borderRadius: {
                            type: Boolean,
                            default: !0
                        },
                        cardType: {
                            type: String,
                            default: "elevated"
                        },
                        cardElevation: {
                            type: String,
                            default: "0"
                        },
                        playColor: {
                            type: String,
                            default: "black"
                        },
                        theme: {
                            type: String,
                            default: "dark"
                        }
                    },
                    data: function() {
                        return {
                            shouldShowVideo: !1
                        }
                    },
                    computed: {
                        videoAlt: function() {
                            var t;
                            return null !== (t = this.videoTitle) && void 0 !== t ? t : "Video Cover Image"
                        }
                    },
                    methods: {
                        toggleVideoVisibility: function() {
                            return this.shouldShowVideo ? this.$emit("stop") : this.$emit("play"), this.shouldShowVideo = !this.shouldShowVideo
                        }
                    }
                }),
                R = Object(N.b)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("tmd-card", {
                            class: {
                                "tds-video-card": !0, "tds-video-card--large": "large" === t.size
                            },
                            attrs: {
                                "md-theme": t.theme,
                                "md-elevation": t.cardElevation,
                                type: t.cardType,
                                "no-border-radius": !t.borderRadius
                            }
                        }, [n("div", {
                            staticClass: "tds-video-card-container"
                        }, [n("div", {
                            staticClass: "tds-video-card-container__cover"
                        }, [t.shouldShowVideo ? t._e() : n("button", {
                            class: ["tds-video-card-container__cover__play", t.playColor],
                            on: {
                                click: t.toggleVideoVisibility
                            }
                        }, [n("tmd-icon", {
                            staticClass: "tds-video-card-container__cover__play__arrow",
                            attrs: {
                                fill: "",
                                size: "1.875rem"
                            }
                        }, [t._v("\n          play_arrow\n        ")])], 1), t._v(" "), t.shouldShowVideo ? t._e() : n("img", {
                            staticClass: "tds-video-card-container__cover--image",
                            attrs: {
                                src: t.coverImage,
                                alt: t.videoAlt
                            }
                        }), t._v(" "), t.shouldShowVideo ? n("video", {
                            attrs: {
                                controls: "",
                                title: t.videoTitle,
                                autoplay: "",
                                playsinline: ""
                            }
                        }, [n("source", {
                            attrs: {
                                src: t.videoUrl,
                                type: "video/mp4"
                            }
                        })]) : t._e()]), t._v(" "), t.description && t.title ? n("div", {
                            staticClass: "tds-video-card-container-content"
                        }, [n("div", {
                            staticClass: "tds-video-card-container-content__text"
                        }, [t._v("\n        " + t._s(t.description) + "\n      ")]), t._v(" "), n("div", {
                            staticClass: "tds-video-card-container-content__text video-card-container-content__text--title"
                        }, t._l(t.title, (function(e) {
                            return n("div", {
                                key: e.toString()
                            }, [e.to ? n("a", {
                                attrs: {
                                    href: e.to,
                                    title: e.text,
                                    target: "_blank"
                                }
                            }, [t._v("\n            " + t._s(e.text) + "\n          ")]) : n("div", {
                                staticClass: "tmc-accent"
                            }, [t._v("\n            " + t._s(e) + "\n          ")])])
                        })), 0)]) : t._e()])])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-6f56b200_0", {
                        source: ".tds-video-card[data-v-6f56b200]{display:flex;position:relative;width:15.25rem;height:27.75rem;box-shadow:2px 2px 6px 0 rgba(1,1,1,.4),-4px -4px 4px 0 rgba(56,59,64,.7)}@media (max-width:720px){.tds-video-card[data-v-6f56b200]{flex-shrink:0}}.tds-video-card img[data-v-6f56b200]{min-width:100%}@media (max-width:720px){.tds-video-card img[data-v-6f56b200]{max-width:100%}}.tds-video-card video[data-v-6f56b200]{width:100%;height:100%;z-index:3;top:0;left:0;border:1px solid transparent}.tds-video-card--large[data-v-6f56b200]{width:50rem;height:28.125rem;max-width:100%}@media (max-width:720px){.tds-video-card--large[data-v-6f56b200]{width:100%;height:unset}}.tds-video-card-container[data-v-6f56b200]{width:100%;height:100%;position:relative;display:flex;flex-flow:column}.tds-video-card-container__cover[data-v-6f56b200]{flex:1 0 auto;border-radius:4px;overflow:hidden;position:relative}.tds-video-card-container__cover__play[data-v-6f56b200]{width:15%;height:15%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,.4);box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:2px;border:0 solid transparent;display:flex;align-items:center;justify-content:center;padding:0;z-index:2;min-height:4rem;min-width:6rem;cursor:pointer}@media (max-width:720px){.tds-video-card-container__cover__play[data-v-6f56b200]{padding:.5rem 1rem}}.tds-video-card-container__cover__play__arrow[data-v-6f56b200]{transform:translate(2px,0)}.tds-video-card-container__cover__play.black i[data-v-6f56b200]{color:#000}.tds-video-card-container__cover__play.white i[data-v-6f56b200]{color:#fff}.tds-video-card-container-content[data-v-6f56b200]{display:flex;flex-direction:column;flex:0 1 9rem;padding:.5rem .8rem;width:100%;left:0;bottom:0;gap:.5rem;justify-content:center;align-items:center;-webkit-border-bottom-right-radius:2px;-webkit-border-bottom-left-radius:2px;-moz-border-radius-bottomright:2px;-moz-border-radius-bottomleft:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;max-height:9rem}.tds-video-card-container-content__text[data-v-6f56b200]{font-size:.75rem;line-height:1rem;margin-left:auto;margin-right:auto;text-align:center}.tds-video-card-container-content__text--title a[data-v-6f56b200]{text-decoration:none}",
                        map: void 0,
                        media: void 0
                    })
                }), B, "data-v-6f56b200", !1, undefined, !1, N.a, void 0, void 0),
                $ = (n(47), n(65), n(627), n(136)),
                D = n(183),
                L = new O.default;
            var V, M = O.default.extend({
                    name: "tds-web-app-notification",
                    components: {
                        TdsEntityPicture: h.a,
                        TmdCard: W.a,
                        TmdIcon: z.a
                    },
                    props: {
                        firebaseUrl: {
                            type: String,
                            required: !0
                        },
                        user: {
                            type: Object,
                            required: !1
                        },
                        dismissible: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            isShowing: !1,
                            notificationContent: {
                                entity: {
                                    name: void 0,
                                    picture: void 0
                                },
                                title: {
                                    text: void 0,
                                    icon: void 0
                                },
                                body: {
                                    text: void 0
                                },
                                path: void 0,
                                url: void 0,
                                type: void 0
                            },
                            notificationQueue: [],
                            hideTimeout: void 0,
                            webAppNotificationsUnsubscribe: void 0,
                            notificationEnabled: !0,
                            componentInitTime: (new Date).getTime()
                        }
                    },
                    watch: {
                        user: {
                            handler: function(t) {
                                t && Object.keys(t).length > 0 ? this.subscribeToWebAppNotifications() : this.unsubscribeToWebAppNotifications()
                            },
                            immediate: !0
                        }
                    },
                    beforeDestroy: function() {
                        this.unsubscribeToWebAppNotifications(), this.$root.$off("webapp-notification::open", this.processWebAppNotification)
                    },
                    mounted: function() {
                        this.$root.$on("webapp-notification::open", this.processWebAppNotification)
                    },
                    methods: {
                        showNotification: function(t) {
                            var e = this;
                            this.isShowing ? this.notificationQueue.push(t) : (this.notificationContent = t, this.isShowing = !0, this.dismissible && (this.hideTimeout = setTimeout((function() {
                                e.hideNotification()
                            }), 9e3)))
                        },
                        hideNotification: function() {
                            var t = this;
                            if (clearTimeout(this.hideTimeout), this.hideTimeout = null, this.isShowing = !1, this.clearNotificationContent(), this.notificationEnabled && this.notificationQueue.length > 0) {
                                var e = this.notificationQueue.shift();
                                setTimeout((function() {
                                    t.showNotification(e)
                                }), 500)
                            }
                        },
                        clearNotificationContent: function() {
                            this.notificationContent = {
                                entity: {
                                    name: void 0,
                                    picture: void 0
                                },
                                title: {
                                    text: void 0,
                                    icon: void 0
                                },
                                body: {
                                    text: void 0
                                },
                                path: void 0,
                                url: void 0,
                                type: void 0
                            }
                        },
                        handleNotificationClick: function() {
                            var t = this.notificationContent;
                            this.$emit("open", t), this.openWebAppNotification(t), this.hideNotification()
                        },
                        processWebAppNotification: function(t) {
                            if (parseInt(t["last-updated"], 10) >= this.componentInitTime || !this.user) {
                                var e = {
                                    entity: {
                                        name: t.image && "INITIAL" === t.image.type ? t.image.src : void 0,
                                        picture: t.image && "URL" === t.image.type ? t.image.src : void 0
                                    },
                                    title: {
                                        text: t.title ? t.title.text : void 0,
                                        icon: t.title ? t.title["icon-src"] : void 0
                                    },
                                    body: {
                                        text: t.body ? this.processText(t.body.text) : void 0
                                    },
                                    path: t.path,
                                    url: t.url,
                                    type: t.type
                                };
                                if ("drawer" === e.type) {
                                    var n = void 0 !== e.path ? e.path : "/messenger";
                                    this.$root.$emit("iframe-drawer::open::phobos", {
                                        deepLink: n
                                    })
                                } else this.showNotification(e)
                            }
                        },
                        processText: function(text) {
                            return text.replaceAll(".|n|", " ").replaceAll("?|n|", "? ").replaceAll("|n|", ". ")
                        },
                        subscribeToWebAppNotifications: function() {
                            var t = this;
                            if (!this.$isServer && this.user && this.user.subjectId && void 0 === this.webAppNotificationsUnsubscribe) {
                                L.$on("enable", (function() {
                                    t.notificationEnabled = !0
                                })), L.$on("disable", (function() {
                                    t.notificationEnabled = !1
                                }));
                                var e = function(t, e) {
                                    0 === Object(D.a)().length && Object(D.b)({
                                        databaseURL: t
                                    });
                                    var n = Object($.c)();
                                    return Object($.e)(n, e)
                                }(this.firebaseUrl, "notifications/".concat(this.user.subjectId, "/web-app"));
                                this.webAppNotificationsUnsubscribe = Object($.d)(e, (function(e) {
                                    var n = e.val();
                                    t.notificationEnabled && n && t.processWebAppNotification(n)
                                }))
                            }
                        },
                        unsubscribeToWebAppNotifications: function() {
                            var t = this;
                            void 0 !== this.webAppNotificationsUnsubscribe && (L.$off("enable", (function() {
                                t.notificationEnabled = !0
                            })), L.$off("disable", (function() {
                                t.notificationEnabled = !1
                            })), this.webAppNotificationsUnsubscribe())
                        },
                        openWebAppNotification: function(t) {
                            if ("top" === t.type && this.user) {
                                var e = void 0 !== t.path ? t.path : "/messenger";
                                this.notificationEnabled = !1, this.$root.$emit("iframe-drawer::open::phobos", {
                                    deepLink: e
                                })
                            } else void 0 !== t.url && (window.location.href = t.url)
                        }
                    }
                }),
                H = Object(N.b)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("Transition", {
                            attrs: {
                                name: "notification"
                            }
                        }, [t.isShowing ? n("tmd-card", {
                            staticClass: "tds-web-app-notification",
                            attrs: {
                                "md-elevation": "2",
                                type: "elevated"
                            }
                        }, [n("div", {
                            staticClass: "tds-web-app-notification__content",
                            on: {
                                click: t.handleNotificationClick
                            }
                        }, [n("tds-entity-picture", {
                            staticClass: "tds-web-app-notification__entity",
                            attrs: {
                                shape: "hexagon",
                                "border-width": 3,
                                size: 44,
                                entity: t.notificationContent.entity
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "tds-web-app-notification__notification"
                        }, [n("div", {
                            staticClass: "tds-web-app-notification__title-container"
                        }, [n("span", {
                            staticClass: "tmd-body tds-web-app-notification__notification-title"
                        }, [t._v("\n            " + t._s(t.notificationContent.title.text) + "\n          ")]), t._v(" "), t.notificationContent.title.icon ? n("div", {
                            staticClass: "tds-web-app-notification__notification-title-icon-container"
                        }, [n("tmd-icon", {
                            staticClass: "tds-web-app-notification__notification-title-icon-container",
                            attrs: {
                                size: "20px",
                                fill: ""
                            }
                        }, [t._v("\n              " + t._s(t.notificationContent.title.icon) + "\n            ")])], 1) : t._e()]), t._v(" "), n("div", {
                            staticClass: "tds-web-app-notification__notification-body-text-container"
                        }, [n("span", {
                            staticClass: "tmd-body tds-web-app-notification__notification-body-text"
                        }, [t._v("\n            " + t._s(t.notificationContent.body.text) + "\n          ")])])]), t._v(" "), n("div", {
                            staticClass: "tds-web-app-notification__notification-btn-close",
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.hideNotification.apply(null, arguments)
                                }
                            }
                        }, [n("tmd-icon", [t._v("\n          close\n        ")])], 1)], 1)]) : t._e()], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-16e544c2_0", {
                        source: ".tds-web-app-notification{position:fixed;z-index:9999;width:344px;height:80px;box-shadow:0 4px 4px rgba(0,0,0,.25);top:16px;right:16px}@media only screen and (max-width:720){.tds-web-app-notification{top:16px;left:10px;right:10px;width:calc(100% - 20px);transform:translateX(150%)}}.tds-web-app-notification__content{display:flex;padding:8px;height:100%;cursor:pointer}.tds-web-app-notification__entity{position:relative;bottom:4px}.tds-web-app-notification__title-container{display:flex;align-items:center;white-space:nowrap}.tds-web-app-notification__notification{min-width:248px;height:58px;margin-left:8px;display:flex;flex-direction:column}.tds-web-app-notification__notification-title{overflow:hidden;text-overflow:ellipsis;padding-right:6px}.tds-web-app-notification__notification-title-icon-container{flex-shrink:0;display:flex;align-items:center;justify-content:center}.tds-web-app-notification__notification-title-icon{display:inline-block}.tds-web-app-notification__notification-body-text-container{margin-top:4px}.tds-web-app-notification__notification-body-text{margin:0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.notification-enter-active{animation:slide-in .5s forwards}.notification-leave-active{animation:fade-out .5s forwards}@keyframes slide-in{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes fade-out{from{opacity:1}to{opacity:0}}",
                        map: void 0,
                        media: void 0
                    })
                }), M, undefined, !1, undefined, !1, N.a, void 0, void 0),
                F = n(886),
                U = n(996),
                Q = n(64);
            n(200), n(487), n(32), n(88), n(31), n(75), n(37), n(28), n(52), n(225), n(51);

            function G() {
                return new Promise((function(t) {
                    requestAnimationFrame(t)
                }))
            }

            function X(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                return void 0 !== t.$refs["".concat(e)] ? Promise.resolve(!0) : (n -= 1) <= 0 ? Promise.reject(Error("".concat(e, " not found"))) : G().then((function() {
                    return new Promise((function(o) {
                        setTimeout((function() {
                            o(X(t, e, n))
                        }), 200)
                    }))
                }))
            }! function(t) {
                t.SHORT = "short", t.MEDIUM = "medium", t.LONG = "long"
            }(V || (V = {}));
            var Y = O.default.extend({
                    name: "tds-stepper",
                    components: {
                        TmdCard: W.a
                    },
                    i18n: {
                        messages: {
                            en: {
                                "Step $current of $total": "Step {current} of {total}"
                            },
                            es: {
                                "Step $current of $total": "Paso {current} de {total}"
                            }
                        }
                    },
                    props: {
                        steps: {
                            type: Array,
                            required: !0
                        },
                        themeColor: {
                            type: String,
                            default: "rgba(205, 220, 57, 1)"
                        }
                    },
                    data: function() {
                        return {
                            stepProperties: {}
                        }
                    },
                    computed: {
                        currentStep: function() {
                            return this.steps.find((function(t) {
                                return t.active
                            })) || this.steps[0]
                        },
                        currentTitle: function() {
                            if (this.currentStep.subSteps) {
                                var t = this.currentStep.subSteps.find((function(t) {
                                    return t.active
                                }));
                                return (null == t ? void 0 : t.title) || this.currentStep.title
                            }
                            return this.currentStep.title
                        },
                        currentStepIndex: function() {
                            var t = this;
                            return this.steps.findIndex((function(e) {
                                return t.currentStep.name === e.name
                            }))
                        },
                        order: function() {
                            return this.currentStepIndex + 1
                        },
                        total: function() {
                            return this.steps.length
                        },
                        isStepCompleted: function() {
                            return this.currentStep.completed
                        },
                        stepProgress: function() {
                            if (this.currentStep.subSteps && this.currentStep.subSteps.length) {
                                var t = this.currentStep.subSteps.length,
                                    e = this.currentStep.subSteps.findIndex((function(t) {
                                        return t.active
                                    })),
                                    n = this.currentStep.subSteps.slice(0, e + 1).filter((function(t) {
                                        return t.completed
                                    })).length;
                                return 0 === n ? .5 / t * 100 : n / t * 100
                            }
                            return this.isStepCompleted ? 100 : 50
                        },
                        stepsWidth: function() {
                            var t = this;
                            return this.steps.map((function(e) {
                                var n, o = null === (n = t.$refs[e.name][0]) || void 0 === n ? void 0 : n.$el;
                                return {
                                    name: e.name,
                                    width: o.offsetWidth
                                }
                            }))
                        },
                        accumulatedWidthWithProgress: function() {
                            var t = this,
                                e = 0;
                            return this.steps.forEach((function(n, o) {
                                var r, d = (null === (r = t.stepsWidth.find((function(t) {
                                    return t.name === n.name
                                }))) || void 0 === r ? void 0 : r.width) || 0;
                                o < t.currentStepIndex ? e += d : o === t.currentStepIndex && (e += d * t.stepProgress / 100)
                            })), e
                        }
                    },
                    watch: {
                        currentStep: {
                            handler: function() {
                                this.calculateStepSizes()
                            }
                        },
                        themeColor: {
                            handler: function() {
                                this.calculateStepSizes()
                            }
                        }
                    },
                    created: function() {
                        this.adjustStepSizes()
                    },
                    mounted: function() {
                        this.calculateStepSizes()
                    },
                    methods: {
                        adjustStepSizes: function() {
                            var t = this.steps.some((function(t) {
                                    return t.size === V.LONG
                                })),
                                e = this.steps.some((function(t) {
                                    return t.size === V.MEDIUM
                                }));
                            t || (e ? this.steps.forEach((function(t) {
                                t.size === V.MEDIUM ? t.size = V.LONG : t.size === V.SHORT && (t.size = V.MEDIUM)
                            })) : this.steps.forEach((function(t) {
                                return t.size = V.LONG
                            })))
                        },
                        calculateStepSizes: function() {
                            var t = this;
                            X(this, "tds-stepper-bar").then((function() {
                                var e = t.steps.findIndex((function(e) {
                                        return t.currentStep.name === e.name
                                    })),
                                    n = t.accumulatedWidthWithProgress + 100,
                                    o = .6 / t.accumulatedWidthWithProgress,
                                    r = 1,
                                    d = t.steps.map((function(n, d) {
                                        var c, l = (null === (c = t.stepsWidth.find((function(t) {
                                                return t.name === n.name
                                            }))) || void 0 === c ? void 0 : c.width) || 0,
                                            h = r,
                                            f = h;
                                        return d < e ? f = h - l * o : d === e && (f = h - l * t.stepProgress / 100 * o), r = f, {
                                            step: n.name,
                                            initOpacity: h,
                                            endOpacity: f
                                        }
                                    })),
                                    c = 0;
                                t.stepProperties = t.steps.reduce((function(o, r, l) {
                                    var h, f, m = (null === (h = t.stepsWidth.find((function(t) {
                                            return t.name === r.name
                                        }))) || void 0 === h ? void 0 : h.width) || 0,
                                        v = d.find((function(t) {
                                            return t.step === r.name
                                        })) || {},
                                        _ = v.initOpacity,
                                        w = v.endOpacity,
                                        y = t.adjustOpacity(_ || 1),
                                        x = t.adjustOpacity(w || 1),
                                        S = "linear-gradient";
                                    if (l < e) {
                                        var T = n - c - m;
                                        f = "".concat(S, "(90deg, ").concat(y, " 0%, ").concat(x, " ").concat(T, "%)"), c += m
                                    } else if (l === e) {
                                        var C = "".concat(t.stepProgress, "%, #27292D ").concat(t.stepProgress, "%, #27292D 100%");
                                        f = "".concat(S, "(90deg, ").concat(y, " 0%, ").concat(x, " ").concat(C, ")")
                                    }
                                    return o[r.name] = {
                                        step: r.name,
                                        styles: {
                                            width: m,
                                            initOpacity: _,
                                            endOpacity: w,
                                            background: f
                                        }
                                    }, o
                                }), {})
                            }))
                        },
                        getStyles: function(t) {
                            var e;
                            return {
                                background: null === (e = this.stepProperties[t.name]) || void 0 === e ? void 0 : e.styles.background
                            }
                        },
                        adjustOpacity: function(t) {
                            var e = this.themeColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
                            if (!e) throw new Error("Invalid RGBA format");
                            var n = e.slice(1, 4).map(Number),
                                o = Object(Q.a)(n, 3),
                                r = o[0],
                                g = o[1],
                                b = o[2];
                            return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(t, ")")
                        }
                    }
                }),
                K = Object(N.b)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("tmd-card", {
                            staticClass: "tds-stepper",
                            attrs: {
                                "md-elevation": "2",
                                "no-border-radius": ""
                            }
                        }, [n("div", {
                            staticClass: "tds-stepper__steps"
                        }, [n("div", {
                            staticClass: "tmd-body tds-stepper__hexagon"
                        }, [t._v("\n      " + t._s(t.order) + "\n    ")]), t._v(" "), n("span", {
                            staticClass: "tmd-body tds-stepper__title"
                        }, [t._v("\n      " + t._s(t.$t("Step $current of $total", {
                            current: t.order,
                            total: t.total
                        })) + ": " + t._s(t.currentTitle) + "\n    ")])]), t._v(" "), n("div", {
                            ref: "tds-stepper-bar",
                            staticClass: "tds-stepper__bar"
                        }, t._l(t.steps, (function(e) {
                            return n("tmd-card", {
                                key: e.name,
                                ref: e.name,
                                refInFor: !0,
                                class: ["bar", e.size],
                                style: t.getStyles(e),
                                attrs: {
                                    "md-elevation": "1",
                                    "no-border-radius": ""
                                }
                            })
                        })), 1)])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-11393c36_0", {
                        source: ".tds-stepper[data-v-11393c36]{display:flex;flex-direction:column;height:56px;width:100%;min-height:56px;padding:12px 16px;justify-content:center}.tds-stepper__steps[data-v-11393c36]{display:flex;width:100%;align-items:center}.tds-stepper__hexagon[data-v-11393c36]{position:relative;width:20px;min-width:20px;height:20px;min-height:20px;z-index:1;text-align:center;clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%)}.tds-stepper__title[data-v-11393c36]{margin-left:8px}.tds-stepper__bar[data-v-11393c36]{display:flex;height:4px;width:100%;margin-top:8px;padding-left:36px}.tds-stepper__bar .bar[data-v-11393c36]{margin-right:1px}.tds-stepper__bar .bar.medium[data-v-11393c36]{width:40px}.tds-stepper__bar .bar.short[data-v-11393c36]{width:20px}.tds-stepper__bar .bar.long[data-v-11393c36]{flex-grow:1}.tds-stepper__bar .bar[data-v-11393c36]:first-child{border-top-left-radius:10px;border-bottom-left-radius:10px}.tds-stepper__bar .bar[data-v-11393c36]:last-child{border-top-right-radius:10px;border-bottom-right-radius:10px;margin-right:0}",
                        map: void 0,
                        media: void 0
                    })
                }), Y, "data-v-11393c36", !1, undefined, !1, N.a, void 0, void 0),
                J = n(890),
                Z = (n(60), n(68), n(18)),
                tt = n(11),
                et = n(13),
                it = n(21),
                nt = (n(53), n(647), n(889));

            function ot(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function at(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ot(Object(n), !0).forEach((function(e) {
                        Object(Z.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var st = function() {
                    function t(e) {
                        Object(et.a)(this, t), Object(nt.a)(this, "firebaseApp", void 0), this.firebaseApp = e
                    }
                    var e;
                    return Object(it.a)(t, [{
                        key: "getTourRef",
                        value: function(t, e) {
                            return this.firebaseApp.database().ref("people/".concat(t, "/tours/").concat(e))
                        }
                    }, {
                        key: "updateTourState",
                        value: (e = Object(tt.a)(regeneratorRuntime.mark((function t(e, n, o) {
                            var r, d, c;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = this.getTourRef(n, e), t.next = 3, r.once("value");
                                    case 3:
                                        return d = t.sent, c = d.exists() ? d.val() : {
                                            createdAt: Date.now()
                                        }, t.next = 7, r.set(at(at(at({}, c), o), {}, {
                                            updatedAt: Date.now()
                                        }));
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, n, o) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "listenToTourState",
                        value: function(t, e, n, o) {
                            return this.getTourRef(n, t).on("value", (function(t) {
                                e(null != t && t.exists() ? t.val() : null)
                            }), (function(t) {
                                o && o(t)
                            }))
                        }
                    }, {
                        key: "updateTourStep",
                        value: function(t, e, n) {
                            return this.updateTourState(t, n, {
                                currentStep: e
                            })
                        }
                    }, {
                        key: "completeTour",
                        value: function(t, e) {
                            return this.updateTourState(t, e, {
                                completedAt: Date.now()
                            })
                        }
                    }]), t
                }(),
                ct = function() {
                    function t(e) {
                        Object(et.a)(this, t), Object(nt.a)(this, "firebaseApp", void 0), this.firebaseApp = e
                    }
                    var e;
                    return Object(it.a)(t, [{
                        key: "getTourRef",
                        value: function(t, e) {
                            return Object($.e)(Object($.c)(this.firebaseApp), "people/".concat(t, "/tours/").concat(e))
                        }
                    }, {
                        key: "updateTourState",
                        value: (e = Object(tt.a)(regeneratorRuntime.mark((function t(e, n, o) {
                            var r, d, c;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = this.getTourRef(n, e), t.next = 3, Object($.b)(Object($.a)(r, "people/".concat(n, "/tours/").concat(e)));
                                    case 3:
                                        return d = t.sent, c = d.exists() ? d.val() : {
                                            createdAt: Date.now()
                                        }, t.next = 7, Object($.f)(r, at(at(at({}, c), o), {}, {
                                            updatedAt: Date.now()
                                        }));
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        }))), function(t, n, o) {
                            return e.apply(this, arguments)
                        })
                    }, {
                        key: "listenToTourState",
                        value: function(t, e, n, o) {
                            var r = this.getTourRef(n, t);
                            return Object($.d)(r, (function(t) {
                                e(null != t && t.exists() ? t.val() : null)
                            }), (function(t) {
                                o && o(t)
                            }))
                        }
                    }, {
                        key: "updateTourStep",
                        value: function(t, e, n) {
                            return this.updateTourState(t, n, {
                                currentStep: e
                            })
                        }
                    }, {
                        key: "completeTour",
                        value: function(t, e) {
                            return this.updateTourState(t, e, {
                                completedAt: Date.now()
                            })
                        }
                    }]), t
                }(),
                lt = function() {
                    function t(e) {
                        Object(et.a)(this, t), Object(nt.a)(this, "strategy", void 0), e.database && "function" == typeof e.database ? this.strategy = new st(e) : this.strategy = new ct(e)
                    }
                    return Object(it.a)(t, [{
                        key: "getTourRef",
                        value: function(t, e) {
                            return this.strategy.getTourRef(t, e)
                        }
                    }, {
                        key: "updateTourState",
                        value: function(t, e, n) {
                            return this.strategy.updateTourState(t, e, n)
                        }
                    }, {
                        key: "listenToTourState",
                        value: function(t, e, n, o) {
                            return this.strategy.listenToTourState(t, e, n, o)
                        }
                    }, {
                        key: "updateTourStep",
                        value: function(t, e, n) {
                            return this.strategy.updateTourStep(t, e, n)
                        }
                    }, {
                        key: "completeTour",
                        value: function(t, e) {
                            return this.strategy.completeTour(t, e)
                        }
                    }]), t
                }(),
                ut = O.default.extend({
                    name: "tds-tour-container",
                    components: {
                        TdsTour: J.a
                    },
                    props: {
                        horizontalContainerSelector: {
                            type: String,
                            required: !0
                        },
                        navBarContainerSelector: {
                            type: String,
                            required: !1
                        },
                        additionalTopContainerSelectors: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        footerContainerSelector: {
                            type: String,
                            required: !1
                        },
                        messageContainerHeight: {
                            type: Number,
                            default: 80
                        },
                        messageContainerWidth: {
                            type: Number,
                            default: 290
                        },
                        lightBoxPadding: {
                            type: Number,
                            default: 5
                        },
                        tours: {
                            type: Array,
                            required: !0
                        },
                        topMargin: {
                            type: Number,
                            default: 20
                        },
                        disableScrolling: {
                            type: Boolean,
                            default: !1
                        },
                        firebaseApp: {
                            type: Object,
                            required: !0
                        },
                        userGgId: {
                            type: String,
                            required: !0
                        },
                        mainContainerSelector: {
                            type: String,
                            required: !0
                        },
                        enableMobileAutoScroll: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            isVisible: !1,
                            tourState: null,
                            unsubscribeHandlers: {},
                            ggId: "",
                            tourFirebaseService: null
                        }
                    },
                    created: function() {
                        var t = this;
                        if (this.tourFirebaseService = new lt(this.firebaseApp), this.userGgId) this.ggId = this.userGgId;
                        else {
                            var e, n, o, r, d = null === (e = window) || void 0 === e || null === (e = e.$nuxt) || void 0 === e ? void 0 : e.$store,
                                c = null == d || null === (n = d.state) || void 0 === n || null === (n = n.User) || void 0 === n || null === (n = n.user) || void 0 === n ? void 0 : n.ggId,
                                l = null === (o = window) || void 0 === o || null === (o = o.$root) || void 0 === o || null === (o = o.user) || void 0 === o ? void 0 : o.ggId;
                            this.ggId = null !== (r = null != c ? c : l) && void 0 !== r ? r : ""
                        }
                        this.firebaseApp.auth ? this.firebaseApp.auth().onAuthStateChanged((function(e) {
                            e ? t.initializeTourState() : (t.cleanupSubscriptions(), t.isVisible = !1, t.tourState = null)
                        })) : this.initializeTourState()
                    },
                    beforeDestroy: function() {
                        this.cleanupSubscriptions(), this.isVisible = !1, this.tourState = null
                    },
                    methods: {
                        initializeTourState: function() {
                            var t = this;
                            this.tourFirebaseService && this.ggId && this.tours.map((function(t) {
                                return t.code
                            })).forEach((function(e) {
                                var n = t.tourFirebaseService.listenToTourState(e, (function(n) {
                                    n && n.completedAt || (t.isVisible || (t.isVisible = !0), t.tourState = at(at({}, n), {}, {
                                        tourCode: e
                                    }))
                                }), t.ggId, (function(e) {
                                    "User not authenticated" === e.message && (t.isVisible = !1, t.tourState = null)
                                }));
                                t.unsubscribeHandlers[e] = n
                            }))
                        },
                        cleanupSubscriptions: function() {
                            Object.values(this.unsubscribeHandlers).forEach((function(t) {
                                "function" == typeof t && t()
                            })), this.unsubscribeHandlers = {}
                        },
                        handleTourStarted: function(t) {
                            this.tourFirebaseService && (this.tourFirebaseService.updateTourState(t, this.ggId, {
                                createdAt: Date.now()
                            }), this.$emit("guided-tour-started", t))
                        },
                        handleTourStepUpdated: function(t) {
                            var e;
                            this.tourFirebaseService && null !== (e = this.tourState) && void 0 !== e && e.tourCode && this.tourFirebaseService.updateTourStep(this.tourState.tourCode, t, this.ggId)
                        },
                        handleTourCompleted: function() {
                            var t;
                            this.tourFirebaseService && null !== (t = this.tourState) && void 0 !== t && t.tourCode && (this.tourFirebaseService.completeTour(this.tourState.tourCode, this.ggId), this.$emit("guided-tour-completed", this.tourState.tourCode))
                        }
                    }
                }),
                pt = Object(N.b)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", [t.isVisible && t.tourState ? n("tds-tour", {
                            attrs: {
                                "horizontal-container-selector": t.horizontalContainerSelector,
                                "nav-bar-container-selector": t.navBarContainerSelector,
                                "additional-top-container-selectors": t.additionalTopContainerSelectors,
                                "footer-container-selector": t.footerContainerSelector,
                                "message-container-height": t.messageContainerHeight,
                                "message-container-width": t.messageContainerWidth,
                                "light-box-padding": t.lightBoxPadding,
                                tours: t.tours,
                                "top-margin": t.topMargin,
                                "disable-scrolling": t.disableScrolling,
                                "tour-state": t.tourState,
                                "main-container-selector": t.mainContainerSelector,
                                "enable-mobile-auto-scroll": t.enableMobileAutoScroll
                            },
                            on: {
                                "guided-tour-started": t.handleTourStarted,
                                "guided-tour-step-updated": t.handleTourStepUpdated,
                                "guided-tour-completed": t.handleTourCompleted
                            }
                        }) : t._e()], 1)
                    },
                    staticRenderFns: []
                }, undefined, ut, undefined, !1, undefined, !1, void 0, void 0, void 0),
                ht = n(494),
                ft = n(23),
                mt = n(216);
            n(989), n(885)
        },
        847: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return f
            }));
            n(28), n(32);
            var o = n(2),
                r = n(781),
                d = n(91),
                c = n(826),
                l = n(179),
                h = o.default.extend({
                    name: "tds-testimonial",
                    components: {
                        TdsEntityPicture: c.a,
                        TmdCard: r.a,
                        TmdIcon: d.a
                    },
                    props: {
                        entity: {
                            type: Object,
                            required: !0
                        },
                        testimonial: {
                            type: String,
                            required: !0
                        },
                        baseUrl: {
                            type: String,
                            default: "https://torre.ai"
                        },
                        theme: {
                            type: String,
                            default: "dark"
                        }
                    },
                    computed: {
                        entityGenome: function() {
                            return "".concat(this.baseUrl, "/").concat(this.entity.username)
                        }
                    }
                }),
                f = Object(l.b)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tds-testimonial"
                        }, [n("tds-entity-picture", {
                            staticClass: "tds-testimonial__picture",
                            attrs: {
                                entity: t.entity,
                                size: 120,
                                "border-width": 6
                            }
                        }), t._v(" "), n("tmd-card", {
                            class: ["tds-testimonial__card", {
                                "tds-testimonial__card--light": "light" === t.theme
                            }],
                            attrs: {
                                "md-elevation": "1",
                                "md-theme": "dark",
                                type: "elevated"
                            }
                        }, [n("div", {
                            staticClass: "tds-testimonial__card-testimonial"
                        }, [n("tmd-icon", {
                            staticClass: "tds-testimonial__quote",
                            attrs: {
                                fill: "",
                                size: "50px"
                            }
                        }, [t._v("\n        format_quote\n      ")]), t._v(" "), n("span", [t._v(" " + t._s(t.testimonial) + " ")]), t._v(" "), n("tmd-icon", {
                            staticClass: "tds-testimonial__quote",
                            attrs: {
                                fill: "",
                                size: "50px"
                            }
                        }, [t._v("\n        format_quote\n      ")])], 1), t._v(" "), n("span", {
                            staticClass: "tds-testimonial__card-name"
                        }, [n("span", [t._v(t._s(t.entity.name))]), t.entity.professionalHeadline ? n("span", [t._v(", " + t._s(t.entity.professionalHeadline))]) : t._e()])])], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-5bf1f7bb_0", {
                        source: ".tds-testimonial[data-v-5bf1f7bb]{position:relative;width:100%;max-width:720px;padding-top:60px}.tds-testimonial__card[data-v-5bf1f7bb]{height:100%;padding:90px 20px 36px;display:grid;border-radius:24px!important}.tds-testimonial__card--light[data-v-5bf1f7bb]{box-shadow:-4px -4px 4px 0 rgba(255,255,255,.7),2px 2px 6px 0 rgba(1,1,1,.4)!important}.tds-testimonial__card-testimonial[data-v-5bf1f7bb]{position:relative;text-align:start;margin-bottom:46px}.tds-testimonial__card-testimonial span[data-v-5bf1f7bb]{z-index:1;position:relative}.tds-testimonial__card-name[data-v-5bf1f7bb]{text-align:end;align-self:flex-end}.tds-testimonial__picture[data-v-5bf1f7bb]{position:absolute;top:-16px;left:50%;transform:translateX(-50%)}.tds-testimonial__quote[data-v-5bf1f7bb]{position:absolute;color:#5e626b!important}.tds-testimonial__quote[data-v-5bf1f7bb]:first-child{transform:rotate(180deg);left:-12px;top:-19px}.tds-testimonial__quote[data-v-5bf1f7bb]:last-child{right:-12px;bottom:-14px}",
                        map: void 0,
                        media: void 0
                    })
                }), h, "data-v-5bf1f7bb", !1, undefined, !1, l.a, void 0, void 0)
        },
        885: function(t, e, n) {
            var o, r, d;
            n(334);
            n(52), n(83), n(382), n(283), n(102), n(120), n(225), n(148), n(832), n(1225), n(51), r = [], o = function() {
                "use strict";

                function t(t, e) {
                    var i, n, o;
                    for (i = 1, n = arguments.length; i < n; ++i)
                        if (null != (e = arguments[i]))
                            for (o in e) l(e, o) && (t[o] = e[o]);
                    return t
                }

                function e(a, b) {
                    return b.length - a.length
                }

                function n(a, b) {
                    return a.factor - b.factor
                }

                function o(t) {
                    return t.replace(/([.*+?=^!:${}()|[\]/\\])/g, "\\$1")
                }

                function r(t, e) {
                    var i, n;
                    for (i = 0, n = t.length; i < n; ++i) e(t[i], i)
                }

                function d(t, e) {
                    var n;
                    for (n in t) l(t, n) && e(t[n], n)
                }
                var c, l = (c = Object.prototype.hasOwnProperty, function(t, e) {
                    return null != t && c.call(t, e)
                });

                function h(t, e) {
                    for (;
                        "string" == typeof e;) e = t[e];
                    return e
                }

                function f(t) {
                    this._prefixes = t;
                    var r = [],
                        c = [];
                    d(t, (function(t, e) {
                        r.push(o(e)), c.push({
                            factor: t,
                            prefix: e
                        })
                    }));
                    var h = this._lcPrefixes = {};
                    d(t, (function(e, n) {
                        var o = n.toLowerCase();
                        l(t, o) || (h[o] = n)
                    })), c.sort(n), this._list = c, r.sort(e), this._regexp = new RegExp("^\\s*(-)?\\s*(\\d+(?:\\.\\d+)?)\\s*(" + r.join("|") + ")\\s*(.*)\\s*?$", "i")
                }
                f.create = function(t, base, e) {
                    var n = {};
                    return void 0 === e && (e = 0), r(t, (function(t, i) {
                        n[t] = Math.pow(base, i + e)
                    })), new f(n)
                }, f.prototype.findPrefix = function(t) {
                    for (var e, n = this._list, o = 0, r = n.length - 1; o !== r;) n[e = o + r + 1 >> 1].factor > t ? r = e - 1 : o = e;
                    return n[o]
                }, f.prototype.parse = function(t, e) {
                    var n = t.match(this._regexp);
                    if (null !== n) {
                        var o, r = n[3];
                        if (l(this._prefixes, r)) o = this._prefixes[r];
                        else {
                            if (e || (r = r.toLowerCase(), !l(this._lcPrefixes, r))) return;
                            r = this._lcPrefixes[r], o = this._prefixes[r]
                        }
                        var d = +n[2];
                        return void 0 !== n[1] && (d = -d), {
                            factor: o,
                            prefix: r,
                            unit: n[4],
                            value: d
                        }
                    }
                };
                var m = {
                        binary: f.create(",Ki,Mi,Gi,Ti,Pi,Ei,Zi,Yi".split(","), 1024),
                        SI: f.create("y,z,a,f,p,n,µ,m,,k,M,G,T,P,E,Z,Y".split(","), 1e3, -8)
                    },
                    v = {
                        maxDecimals: 2,
                        separator: " ",
                        unit: ""
                    },
                    _ = {
                        scale: "SI",
                        strict: !1
                    };

                function w(e, n) {
                    var o = (n = t({}, v, n)).decimals;
                    void 0 !== o && delete n.maxDecimals;
                    var r = C(e, n);
                    e = void 0 !== o ? r.value.toFixed(o) : String(r.value);
                    var d = r.prefix + n.unit;
                    return "" === d ? e : e + n.separator + d
                }
                var y = {
                    scale: "binary",
                    unit: "B"
                };

                function x(e, n) {
                    return w(e, void 0 === n ? y : t({}, y, n))
                }

                function S(t, e) {
                    var n = T(t, e);
                    return n.value * n.factor
                }

                function T(e, n) {
                    if ("string" != typeof e) throw new TypeError("str must be a string");
                    n = t({}, _, n);
                    var o = h(m, n.scale);
                    if (void 0 === o) throw new Error("missing scale");
                    var r = o.parse(e, n.strict);
                    if (void 0 === r) throw new Error("cannot parse str");
                    return r
                }

                function C(e, n) {
                    if (0 === e) return {
                        value: 0,
                        prefix: ""
                    };
                    if (e < 0) {
                        var o = C(-e, n);
                        return o.value = -o.value, o
                    }
                    if ("number" != typeof e || Number.isNaN(e)) throw new TypeError("value must be a number");
                    n = t({}, _, n);
                    var r, d = h(m, n.scale);
                    if (void 0 === d) throw new Error("missing scale");
                    var c = n.maxDecimals,
                        f = "auto" === c;
                    f ? r = 10 : void 0 !== c && (r = Math.pow(10, c));
                    var v, w = n.prefix;
                    if (void 0 !== w) {
                        if (!l(d._prefixes, w)) throw new Error("invalid prefix");
                        v = d._prefixes[w]
                    } else {
                        var y = d.findPrefix(e);
                        if (void 0 !== r)
                            do {
                                var x = (v = y.factor) / r;
                                e = Math.round(e / x) * x
                            } while ((y = d.findPrefix(e)).factor !== v);
                        else v = y.factor;
                        w = y.prefix
                    }
                    return e = void 0 === r ? e / v : Math.round(e * r / v) / r, f && Math.abs(e) >= 10 && (e = Math.round(e)), {
                        prefix: w,
                        value: e
                    }
                }
                return w.bytes = x, w.parse = S, S.raw = T, w.raw = C, w.Scale = f, w
            }, void 0 === (d = "function" == typeof o ? o.apply(e, r) : o) || (t.exports = d)
        },
        886: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return v
            }));
            n(51), n(15), n(102), n(88);
            var o = n(91),
                r = n(1309),
                d = n(133),
                c = n(885),
                l = n.n(c),
                h = n(2),
                f = n(179),
                m = h.default.extend({
                    name: "tds-weight-render",
                    components: {
                        TmdIcon: o.a,
                        TmdTooltip: r.a
                    },
                    mixins: [d.a],
                    i18n: {
                        messages: {
                            en: {
                                weight_description: "Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received."
                            },
                            es: {
                                weight_description: "El peso añade credibilidad a las recomendaciones. Las recomendaciones con peso son dadas por personas que han sido recomendadas por otras. Su peso de recomendación es entonces la suma de las recomendaciones que ha recibido."
                            }
                        }
                    },
                    props: {
                        value: {
                            type: Number,
                            required: !1
                        },
                        personId: {
                            type: String,
                            required: !1
                        },
                        trackRender: {
                            type: Function,
                            required: !1
                        },
                        iconSize: {
                            type: Number,
                            default: 24
                        },
                        iconPosition: {
                            type: String,
                            default: "right"
                        },
                        iconDisplay: {
                            type: Boolean,
                            default: !0
                        },
                        infoIconDisplay: {
                            type: Boolean,
                            default: !1
                        },
                        plusIcon: {
                            type: Boolean,
                            default: !1
                        },
                        dotDivider: {
                            type: Boolean,
                            default: !1
                        },
                        dotDividerSize: {
                            type: Number,
                            default: 8
                        }
                    },
                    data: function() {
                        return {
                            humanFormat: l.a
                        }
                    },
                    computed: {
                        readableWeight: function() {
                            return this.getReadableWeight(this.value)
                        },
                        weightIcon: function() {
                            return this.plusIcon ? "tmi-weight-plus" : "tmi-weight"
                        },
                        cssProps: function() {
                            return {
                                "--size": this.iconSize + "px",
                                "--dot-divider-size": this.dotDividerSize + "px"
                            }
                        }
                    },
                    mounted: function() {
                        this.trackRender && this.personId && this.trackRender(this.personId)
                    },
                    methods: {
                        getReadableWeight: function(t) {
                            var e;
                            if (isNaN(t)) e = 0;
                            else if (t < 1) e = Number(Math.round(Number(100 * t)) / 100);
                            else {
                                var n = t.toString(),
                                    o = -1 === n.indexOf(".") ? n.length : n.indexOf("."),
                                    r = n.slice(0, o).length,
                                    d = r % 3 == 1 ? 1 : 0,
                                    c = r <= 3 ? Math.abs(r - 3) : d;
                                e = this.humanFormat(t, {
                                    decimals: c,
                                    separator: ""
                                })
                            }
                            return "".concat(e)
                        },
                        weightInfo: function() {
                            this.$emit("weight-info-required")
                        }
                    }
                }),
                v = Object(f.b)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("span", {
                            class: ["tds-weight-render", t.$mdActiveTheme],
                            style: t.cssProps
                        }, [t.dotDivider ? n("span", {
                            staticClass: "tds-weight-render__dot"
                        }, [n("tmd-icon", {
                            attrs: {
                                size: t.dotDividerSize,
                                fill: ""
                            }
                        }, [t._v("circle")])], 1) : t._e(), t._v(" "), "left" === t.iconPosition && t.iconDisplay ? n("span", {
                            staticClass: "tds-weight-render__left"
                        }, [n("tmd-icon", {
                            attrs: {
                                size: t.iconSize + "px",
                                fill: ""
                            }
                        }, [t._v(t._s(t.weightIcon))]), t._v(" "), n("tmd-tooltip", {
                            staticClass: "tds-weight-render__tooltip",
                            attrs: {
                                "md-direction": "bottom",
                                "max-width": "280px"
                            }
                        }, [t._v("\n      " + t._s(t.$t("weight_description")) + "\n    ")])], 1) : t._e(), t._v(" "), n("span", {
                            staticClass: "tds-weight-render__value"
                        }, [t._v(t._s(t.readableWeight))]), t._v(" "), "right" === t.iconPosition && t.iconDisplay ? n("span", {
                            staticClass: "tds-weight-render__right"
                        }, [n("tmd-icon", {
                            attrs: {
                                size: t.iconSize + "px",
                                fill: ""
                            }
                        }, [t._v(t._s(t.weightIcon))]), t._v(" "), n("tmd-tooltip", {
                            staticClass: "tds-weight-render__tooltip",
                            attrs: {
                                "md-direction": "bottom",
                                "max-width": "280px"
                            }
                        }, [t._v("\n      " + t._s(t.$t("weight_description")) + "\n    ")])], 1) : t._e(), t._v(" "), t.infoIconDisplay ? n("span", {
                            staticClass: "tds-weight-render__info",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.weightInfo.apply(null, arguments)
                                }
                            }
                        }, [n("tmd-icon", {
                            attrs: {
                                size: t.iconSize + "px",
                                fill: ""
                            }
                        }, [t._v("info")])], 1) : t._e()])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-45d3eacb_0", {
                        source: ".tds-weight-render[data-v-45d3eacb]{display:inline-flex;align-items:center}.tds-weight-render__value[data-v-45d3eacb]{display:flex;font-weight:600}.tds-weight-render__left[data-v-45d3eacb]{display:flex;align-items:flex-end;margin-right:3px}.tds-weight-render__right[data-v-45d3eacb]{display:flex;align-items:flex-start;margin-left:3px}.tds-weight-render__dot[data-v-45d3eacb]{display:flex;align-items:center;margin:0 4px}.tds-weight-render__info[data-v-45d3eacb]{cursor:pointer}",
                        map: void 0,
                        media: void 0
                    })
                }), m, "data-v-45d3eacb", !1, undefined, !1, f.a, void 0, void 0)
        },
        887: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            })), n.d(e, "b", (function() {
                return r
            })), o = void 0, r = void 0;
            var o = "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
                r = "M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z"
        },
        889: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            }));
            var o = n(39);
            n(633), n(634), n(40), n(112), n(15), n(51);

            function r(t) {
                var i = function(t, e) {
                    if ("object" != Object(o.a)(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var i = n.call(t, e || "default");
                        if ("object" != Object(o.a)(i)) return i;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == Object(o.a)(i) ? i : i + ""
            }

            function d(t, e, n) {
                return (e = r(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
        },
        890: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return _
                }));
                n(51), n(37), n(65), n(335), n(15), n(33), n(396), n(397), n(398), n(399), n(400), n(401), n(402), n(403), n(404), n(405), n(406), n(407), n(408), n(34);
                var o, r = n(91),
                    d = n(384),
                    c = n(880),
                    l = n(2),
                    h = n(179),
                    f = l.default.extend({
                        computed: {
                            ProcessMixin_isClient: function() {
                                return t ? (t.env.VUE_APP_DISCOVERY_ENVIRONMENT_MODE, !0) : void 0
                            },
                            ProcessMixin_isServer: function() {
                                return t ? !!t.env.VUE_APP_DISCOVERY_ENVIRONMENT_MODE : void 0
                            }
                        }
                    }),
                    m = l.default.extend({
                        mixins: [f],
                        methods: {
                            enableWindowScroll: function() {
                                this.ProcessMixin_isClient() && (this.$root.$emit("enable-scroll"), window.removeEventListener("wheel", this.preventWindowScroll), window.removeEventListener("touchmove", this.preventWindowScroll), window.removeEventListener("keydown", this.preventKeyScroll))
                            },
                            disableWindowScroll: function() {
                                this.ProcessMixin_isClient() && (this.$root.$emit("disable-scroll"), window.addEventListener("wheel", this.preventWindowScroll, {
                                    passive: !1
                                }), window.addEventListener("touchmove", this.preventWindowScroll, {
                                    passive: !1
                                }), window.addEventListener("keydown", this.preventKeyScroll))
                            },
                            preventWindowScroll: function(t) {
                                t.cancelable && t.preventDefault()
                            },
                            preventKeyScroll: function(t) {
                                ({
                                    Space: !0,
                                    PageUp: !0,
                                    PageDown: !0,
                                    End: !0,
                                    Home: !0,
                                    ArrowLeft: !0,
                                    ArrowUp: !0,
                                    ArrowRight: !0,
                                    ArrowDown: !0
                                })[t.key] && t.preventDefault()
                            }
                        }
                    }),
                    script = l.default.extend({
                        name: "tds-tour",
                        components: {
                            TmdIcon: r.a,
                            TmdButton: d.a,
                            MdCheckbox: c.a
                        },
                        mixins: [m],
                        i18n: {
                            messages: {
                                en: {
                                    BACK: "BACK",
                                    CONTINUE: "CONTINUE",
                                    DONE: "DONE",
                                    "If the applicant is not a fit, rule them out.": "If the applicant is not a fit, rule them out.",
                                    "If the applicant seems to be a fit, use this button to take them to the next stage.": "If the applicant seems to be a fit, use this button to take them to the next stage.",
                                    "It includes the resume, reputation, psychometrics and much more.": "It includes the resume, reputation, psychometrics and much more.",
                                    "Learn how to use the stats section to improve your recruitment process": "Learn how to use the stats section to improve your recruitment process",
                                    NEXT: "NEXT",
                                    "New applicants will show up here.": "New applicants will show up here.",
                                    "Optionally, hide applicants temporarily.": "Optionally, hide applicants temporarily.",
                                    "Please acknowledge this is important": "Please acknowledge this is important",
                                    "Please acknowledge to continue.": "Please acknowledge to continue.",
                                    PREVIOUS: "PREVIOUS",
                                    "These are other ways of getting ahold of the applicant.": "These are other ways of getting ahold of the applicant.",
                                    "Use this button to message the applicant.": "Use this button to message the applicant.",
                                    "Welcome to the candidate's professional genome": "Welcome to the candidate's professional genome"
                                },
                                es: {
                                    BACK: "ATRÁS",
                                    CONTINUE: "CONTINUAR",
                                    DONE: "HECHO",
                                    "If the applicant is not a fit, rule them out.": "Si el aplicante no es adecuado, descártalo.",
                                    "If the applicant seems to be a fit, use this button to take them to the next stage.": "Si el postulante parece adecuado, usa este botón para moverlo a la siguiente etapa.",
                                    "It includes the resume, reputation, psychometrics and much more.": "Incluye el currículum, reputación, psicometría y mucho más.",
                                    "Learn how to use the stats section to improve your recruitment process": "Aprende a usar la sección de estadísticas para mejorar tu proceso de reclutamiento",
                                    NEXT: "SIGUIENTE",
                                    "New applicants will show up here.": "Los nuevos aplicantes aparecerán aquí.",
                                    "Optionally, hide applicants temporarily.": "Opcionalmente, oculta a los aplicantes de manera temporal.",
                                    "Please acknowledge this is important": "Por favor, confirma que esto es importante.",
                                    "Please acknowledge to continue.": "Por favor, confirma para continuar.",
                                    PREVIOUS: "ANTERIOR",
                                    "These are other ways of getting ahold of the applicant.": "Estas son otras formas de contactar al postulante.",
                                    "Use this button to message the applicant.": "Usa este botón para enviar un mensaje al aplicante.",
                                    "Welcome to the candidate's professional genome": "Bienvenido al genoma profesional del candidato"
                                }
                            }
                        },
                        props: {
                            horizontalContainerSelector: {
                                type: String,
                                required: !0
                            },
                            navBarContainerSelector: {
                                type: String,
                                required: !1
                            },
                            additionalTopContainerSelectors: {
                                type: Array,
                                default: function() {
                                    return []
                                }
                            },
                            footerContainerSelector: {
                                type: String,
                                required: !1
                            },
                            messageContainerHeight: {
                                type: Number,
                                default: 80
                            },
                            messageContainerWidth: {
                                type: Number,
                                default: 290
                            },
                            lightBoxPadding: {
                                type: Number,
                                default: 5
                            },
                            tours: {
                                type: Array,
                                required: !0
                            },
                            topMargin: {
                                type: Number,
                                default: 20
                            },
                            disableScrolling: {
                                type: Boolean,
                                default: !1
                            },
                            tourState: {
                                type: Object,
                                default: null
                            },
                            mainContainerSelector: {
                                type: String,
                                required: !0
                            },
                            enableMobileAutoScroll: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data: function() {
                            return {
                                currentStep: 0,
                                currentTourIndex: 0,
                                currentStepContent: void 0,
                                stepToShow: void 0,
                                scrollTimeout: void 0,
                                horizontalContainer: void 0,
                                currentElementBounds: void 0,
                                scrollActive: !1,
                                userAcknowledged: !1,
                                showAcknowledgeWarning: !1
                            }
                        },
                        computed: {
                            messageContainerStyleProperties: function() {
                                return {
                                    width: "".concat(this.messageContainerWidth, "px"),
                                    "min-height": "".concat(this.messageContainerHeight, "px"),
                                    height: "fit-content"
                                }
                            },
                            isMobileDevice: function() {
                                return (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 1024
                            },
                            currentTour: function() {
                                var t = this.tours[this.currentTourIndex];
                                return t.desktop && t.mobile ? this.isMobileDevice ? t.mobile : t.desktop : t
                            },
                            hasPreviousStep: function() {
                                return this.currentStep > 0
                            },
                            hasNextStep: function() {
                                return this.currentTour.steps.length > this.currentStep + 1
                            },
                            hasNextTour: function() {
                                return this.tours.length > this.currentTourIndex + 1
                            },
                            navBarHeight: function() {
                                return this.navBarContainerSelector ? document.querySelector(this.navBarContainerSelector).offsetHeight : 0
                            },
                            footerHeight: function() {
                                return this.footerContainerSelector ? document.querySelector(this.footerContainerSelector).offsetHeight : 0
                            },
                            topContainersHeight: function() {
                                var t = 0;
                                return this.additionalTopContainerSelectors.length > 0 && this.additionalTopContainerSelectors.forEach((function(e) {
                                    var n = document.querySelector(e);
                                    t += n ? n.offsetHeight : 0
                                })), this.navBarHeight + t + this.topMargin
                            },
                            horizonalContainerHeight: function() {
                                return this.horizontalContainerSelector ? document.querySelector(this.horizontalContainerSelector).offsetHeight : 0
                            },
                            shouldShowNextButton: function() {
                                return this.currentTour && (this.currentStep + 1 < this.currentTour.steps.length || this.hasNextTour)
                            },
                            isPreviousStepInitial: function() {
                                var t;
                                return "initial" === (null === (t = this.currentTour.steps[this.currentStep - 1]) || void 0 === t ? void 0 : t.type)
                            }
                        },
                        watch: {
                            currentTour: function() {
                                var t = 0;
                                this.currentTourIndex > 0 && (t = 1), this.initializeTour(t)
                            },
                            currentElementBounds: function(t, e) {
                                var n = this.checkIfCompleted();
                                JSON.stringify(t) === JSON.stringify(e) || this.scrollActive || n || this.showStep()
                            },
                            tourState: {
                                handler: function(t) {
                                    t && void 0 !== t.currentStep && (this.currentStep = t.currentStep)
                                },
                                immediate: !0
                            }
                        },
                        mounted: function() {
                            window.addEventListener("scroll", this.handleScrollActive), this.horizontalContainer = document.querySelector(this.horizontalContainerSelector), this.horizontalContainer && this.currentTour && this.initializeTour()
                        },
                        methods: {
                            checkIfCompleted: function() {
                                return !!this.tourState && !!this.tourState.completedAt
                            },
                            initializeTour: function() {
                                var t = this,
                                    e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                this.disableScrolling && this.disableWindowScroll(), this.toggleTourVisibility("none");
                                var n = this.currentTour.code;
                                this.tourState && this.tourState.createdAt || this.$emit("guided-tour-started", n);
                                var o, r = this.checkIfCompleted();
                                r ? this.goToNextTourIfAny() : (this.currentStep = e || (null === (o = this.tourState) || void 0 === o ? void 0 : o.currentStep) || 0, this.stepToShow = this.currentTour.steps[this.currentStep], this.isMobileDevice && this.enableMobileAutoScroll && this.stepToShow && this.stepToShow.elementQuery ? this.scrollToElementWithVerification(this.stepToShow.elementQuery, (function() {
                                    setTimeout((function() {
                                        return t.showStep()
                                    }), 300)
                                })) : setTimeout((function() {
                                    return t.showStep()
                                }), 100))
                            },
                            isInXViewport: function(t, e) {
                                var rect = t.getBoundingClientRect(),
                                    n = "left" === e ? this.messageContainerWidth : 0,
                                    o = "right" === e ? this.messageContainerWidth : 0;
                                return rect.left - n >= 0 && rect.right + o <= (window.innerWidth || document.documentElement.clientWidth)
                            },
                            isInYViewport: function(t) {
                                var e, n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                    rect = t.getBoundingClientRect(),
                                    o = (null === (e = this.horizontalContainer) || void 0 === e ? void 0 : e.offsetHeight) || 0,
                                    r = rect.top >= (n ? this.navBarHeight : 0) && rect.top < (n ? this.navBarHeight : 0) + this.horizonalContainerHeight,
                                    d = rect.height > o,
                                    c = rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) - this.footerHeight - this.navBarHeight;
                                return d ? r : r && c
                            },
                            handleScroll: function() {
                                var t = this;
                                clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout((function() {
                                    if (t.stepToShow) {
                                        var e = document.querySelector(t.stepToShow.elementQuery);
                                        t.isInYViewport(e) || e.scrollIntoView({
                                            behavior: "smooth",
                                            block: "center"
                                        }), t.displayStepToShow()
                                    }
                                }), 100)
                            },
                            handleScrollActive: function() {
                                var t = this;
                                clearTimeout(this.scrollTimeout), this.scrollActive = !0, this.scrollTimeout = setTimeout((function() {
                                    t.scrollActive = !1
                                }), 200)
                            },
                            displayStepToShow: function() {
                                this.stepToShow && (this.createLightBoxForElement(this.stepToShow), this.stepToShow = void 0)
                            },
                            showStep: function(t) {
                                var e = this.currentTour.steps[this.currentStep];
                                if (this.userAcknowledged = !1, this.showAcknowledgeWarning = !1, this.stepToShow = e, this.toggleTourVisibility("none"), this.currentTour && (this.currentStepContent = this.currentTour.steps[this.currentStep]), "initial" === e.type) setTimeout((function() {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    })
                                })), this.createLightBoxForElement(e), this.stepToShow = void 0;
                                else {
                                    var element = this.getElementFromTourStep(e);
                                    element ? this.isInXViewport(element, e.alignment) ? this.isInYViewport(element, e.isInScrollableContainer) ? (this.createLightBoxForElement(e), this.stepToShow = void 0) : (element.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center"
                                    }), this.createLightBoxForElement(e), this.stepToShow = void 0) : (setTimeout((function() {
                                        var t;
                                        window.scrollBy({
                                            top: (null === (t = document.querySelector(e.elementQuery)) || void 0 === t || null === (t = t.getBoundingClientRect()) || void 0 === t ? void 0 : t.top) || 0,
                                            behavior: "smooth"
                                        })
                                    })), this.createLightBoxForElement(e), this.stepToShow = void 0) : t ? this.previousStep() : this.nextStep()
                                }
                            },
                            createLightBoxForInitialStep: function() {
                                var t = document.querySelector(".tds-tour__top"),
                                    e = document.querySelector(".tds-tour__middle"),
                                    n = document.querySelector(".tds-tour__message-container");
                                t.style.height = "100vh", e.style.height = "0px", n.style.top = "45vh", n.style.left = "50%", n.style.transform = "translate(-50%, -50%)"
                            },
                            createLightBoxForElement: function(t) {
                                var e = this;
                                if ("initial" === t.type) this.createLightBoxForInitialStep();
                                else {
                                    this.updateCurrentElementBounds();
                                    var element = this.getElementFromTourStep(t);
                                    if (!element) return;
                                    var n = element.getBoundingClientRect(),
                                        o = document.querySelector(".tds-tour");
                                    o.style.width = "".concat(document.body.getBoundingClientRect().width, "px");
                                    var r = t.noLightBoxPadding ? 0 : this.lightBoxPadding,
                                        d = n.height;
                                    o.style.position = t.isInScrollableContainer ? "absolute" : "fixed";
                                    var c = t.isInScrollableContainer ? n.top - document.body.getBoundingClientRect().top : n.top,
                                        l = document.querySelector(".tds-tour__top"),
                                        h = document.querySelector(".tds-tour__middle"),
                                        f = document.querySelector(".tds-tour__bottom");
                                    l.style.height = "".concat(c, "px"), h.style.height = "".concat(d, "px"), f.style.height = "".concat(document.body.getBoundingClientRect().height - n.bottom, "px"), t.isInScrollableContainer ? l.style.minHeight = "".concat(this.topContainersHeight - this.topMargin, "px") : (l.style.minHeight = "auto", h.style.maxHeight = "auto"), document.querySelector(".tds-tour__middle-left").style.width = "".concat(n.left - r + (t.xOffset || 0), "px"), document.querySelector(".tds-tour__middle-center").style.width = "".concat(n.width + 2 * r + (t.xAdjust || 0), "px"), document.querySelector(".tds-tour__middle-right").style.width = "".concat(document.body.getBoundingClientRect().width - n.right - r, "px");
                                    var m = document.querySelector(".tds-tour__message-container");
                                    m.style.transform = "";
                                    var v = function() {
                                            var o = window.innerHeight,
                                                r = n.top - document.body.getBoundingClientRect().top + (o < d ? o / 2 : d / 2) - e.messageContainerHeight / 2 - (t.yAdjust || 0) / 2 + (t.yOffset || 0) / 2;
                                            m.style.top = "".concat(r + 16, "px"), "right" === t.alignment ? (m.style.left = "".concat(n.x + n.width + 36, "px"), e.addArrowClass(m, "left-arrow")) : (m.style.left = "".concat(n.left - e.messageContainerWidth - 36, "px"), e.addArrowClass(m, "right-arrow"))
                                        },
                                        _ = new Map([
                                            ["left", v],
                                            ["right", v],
                                            ["top", function() {
                                                var o = n.left + n.width / 2 - e.messageContainerWidth / 2,
                                                    r = window.innerWidth - e.messageContainerWidth,
                                                    d = o > r ? r : o;
                                                e.addArrowClass(m, "bottom-arrow");
                                                var c = (t.yAdjust || 0) / 2 + (t.yOffset || 0) / 2,
                                                    l = window.innerHeight - n.top + 32 - 10 + 22 + c;
                                                m.style.bottom = "".concat(l, "px"), m.style.left = "".concat(d, "px"), void 0 !== t.topPosition && (m.style.top = "".concat(t.topPosition, "px"))
                                            }],
                                            ["bottom", function() {
                                                var o = n.left + n.width / 2 - e.messageContainerWidth / 2,
                                                    r = window.innerWidth - e.messageContainerWidth,
                                                    d = o > r ? r : o;
                                                e.addArrowClass(m, "top-arrow");
                                                var c = n.height + n.top + 32 + 22 - 10;
                                                m.style.top = "".concat(c, "px"), m.style.left = "".concat(d, "px"), void 0 !== t.topPosition && (m.style.top = "".concat(t.topPosition, "px"))
                                            }]
                                        ]).get(t.alignment);
                                    if (!_) throw new Error("Invalid alignment value: ".concat(t.alignment));
                                    _()
                                }
                                this.toggleTourVisibility("block")
                            },
                            addArrowClass: function(element, t) {
                                ["top-arrow", "bottom-arrow", "left-arrow", "right-arrow"].forEach((function(t) {
                                    return element.classList.remove(t)
                                })), element.classList.add(t)
                            },
                            startListeningElementPosition: function() {
                                var t = this;
                                o = setInterval((function() {
                                    t.updateCurrentElementBounds()
                                }), 200)
                            },
                            stopListeningElementPosition: function() {
                                clearInterval(o)
                            },
                            updateCurrentElementBounds: function() {
                                var t;
                                if (null !== (t = this.currentStepContent) && void 0 !== t && t.elementQuery) {
                                    var e, n = document.querySelector(null === (e = this.currentStepContent) || void 0 === e ? void 0 : e.elementQuery),
                                        o = null == n ? void 0 : n.getBoundingClientRect();
                                    this.currentElementBounds = {
                                        x: null == o ? void 0 : o.x,
                                        y: null == o ? void 0 : o.y,
                                        width: null == o ? void 0 : o.width,
                                        height: null == o ? void 0 : o.height,
                                        top: null == o ? void 0 : o.top,
                                        right: null == o ? void 0 : o.right,
                                        bottom: null == o ? void 0 : o.bottom,
                                        left: null == o ? void 0 : o.left
                                    }
                                }
                            },
                            nextStep: function() {
                                var t = this;
                                if (this.hasNextStep) {
                                    this.currentStep = this.currentStep + 1;
                                    var e = this.currentTour.steps[this.currentStep];
                                    this.isMobileDevice && this.enableMobileAutoScroll && e && e.elementQuery ? this.scrollToElementWithVerification(e.elementQuery, (function() {
                                        t.showStep(), t.$emit("guided-tour-step-updated", t.currentStep)
                                    })) : (this.showStep(), this.$emit("guided-tour-step-updated", this.currentStep))
                                } else this.$emit("guided-tour-completed", this.currentTour.code), this.goToNextTourIfAny()
                            },
                            goToNextTourIfAny: function() {
                                this.hasNextTour ? (this.currentStep = 0, this.currentTourIndex++) : (this.$emit("guided-tour-end"), this.destroy())
                            },
                            previousStep: function() {
                                var t = this;
                                if (this.currentTour && this.hasPreviousStep) {
                                    this.currentStep = this.currentStep - 1;
                                    var e = this.currentTour.steps[this.currentStep];
                                    this.isMobileDevice && this.enableMobileAutoScroll && e && e.elementQuery ? this.scrollToElementWithVerification(e.elementQuery, (function() {
                                        t.showStep(!0), t.$emit("guided-tour-step-updated", t.currentStep)
                                    })) : (this.showStep(!0), this.$emit("guided-tour-step-updated", this.currentStep))
                                }
                            },
                            destroy: function() {
                                this.disableScrolling && this.enableWindowScroll(), this.toggleTourVisibility("none"), window.removeEventListener("scroll", this.handleScrollActive), this.horizontalContainer && this.horizontalContainer.removeEventListener("scroll", this.handleScroll)
                            },
                            getElementFromTourStep: function(t) {
                                return document.querySelector(t.elementQuery)
                            },
                            toggleTourVisibility: function(t) {
                                var e, element = document.querySelector(".tds-tour");
                                element && (e = t || ("block" != element.style.display ? "block" : "none"), element.style.display = e, "block" === e ? this.startListeningElementPosition() : this.stopListeningElementPosition())
                            },
                            handleButtonClick: function() {
                                this.userAcknowledged ? (this.showAcknowledgeWarning = !1, this.nextStep()) : this.showAcknowledgeWarning = !0
                            },
                            scrollToElementWithVerification: function(t, e) {
                                var n = this,
                                    o = 0;
                                setTimeout((function r() {
                                    var element = document.querySelector(t);
                                    element ? (element.scrollIntoView({
                                        behavior: "smooth",
                                        block: "center",
                                        inline: "center"
                                    }), setTimeout((function() {
                                        var t = element.getBoundingClientRect(),
                                            d = window.innerWidth;
                                        if (t.left < d && t.right > 0) e();
                                        else if (o < 10) {
                                            if (++o > 3) {
                                                var c = document.querySelector(n.mainContainerSelector);
                                                c && (c.scrollLeft = element.offsetLeft - 50)
                                            }
                                            setTimeout(r, 300)
                                        } else e()
                                    }), 700)) : o < 10 ? (o++, setTimeout(r, 300)) : e()
                                }), 300)
                            }
                        }
                    }),
                    v = script,
                    _ = Object(h.b)({
                        render: function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("div", {
                                staticClass: "tds-tour"
                            }, [n("div", {
                                staticClass: "tds-tour__top"
                            }), t._v(" "), n("div", {
                                staticClass: "tds-tour__middle"
                            }, [n("div", {
                                staticClass: "tds-tour__middle-left"
                            }), t._v(" "), n("div", {
                                staticClass: "tds-tour__middle-center",
                                on: {
                                    click: function(e) {
                                        return t.nextStep()
                                    }
                                }
                            }), t._v(" "), n("div", {
                                staticClass: "tds-tour__middle-right"
                            })]), t._v(" "), n("div", {
                                staticClass: "tds-tour__message-container",
                                style: t.messageContainerStyleProperties
                            }, [t.currentStepContent && "initial" == t.currentStepContent.type ? n("div", {
                                staticClass: "tds-tour__initial-message-content"
                            }, [n("div", {
                                staticClass: "tds-tour__initial-title"
                            }, [t._v("\n        " + t._s(t.currentStepContent.title) + "\n      ")]), t._v(" "), n("div", {
                                staticClass: "tds-tour__initial-text"
                            }, [t._v("\n        " + t._s(t.currentStepContent.text) + "\n      ")]), t._v(" "), n("div", {
                                staticClass: "tds-tour__initial-navigation"
                            }, [n("tmd-button", {
                                staticClass: "tmd-primary tmd-raised",
                                attrs: {
                                    "md-elevation": "theme",
                                    "md-color-theme": "amber600",
                                    "border-style": "thicker",
                                    "md-parent-elevation": "2",
                                    stacked: !1,
                                    "self-elevation": "theme"
                                },
                                on: {
                                    click: function(e) {
                                        return t.nextStep()
                                    }
                                }
                            }, [t._v("\n          " + t._s(t.$t("CONTINUE")) + "\n        ")])], 1)]) : t.currentStepContent ? n("div", {
                                staticClass: "tds-tour__regular-message-content"
                            }, [n("div", {
                                staticClass: "tds-tour__regular-top"
                            }, [n("div", {
                                staticClass: "tds-tour__regular-top-left"
                            }, [n("tmd-icon", {
                                staticClass: "tds-tour__icon",
                                attrs: {
                                    size: "24px"
                                }
                            }, [t._v("\n            tmi-lightbulb-on\n          ")])], 1), t._v(" "), n("div", {
                                staticClass: "tds-tour__regular-top-center"
                            }, [t._v("\n          " + t._s(t.currentStepContent.text) + "\n        ")])]), t._v(" "), n("div", {
                                staticClass: "tds-tour__regular-bottom"
                            }, [n("div", {
                                staticClass: "tds-tour__checkbox-wrapper"
                            }, [n("md-checkbox", {
                                model: {
                                    value: t.userAcknowledged,
                                    callback: function(e) {
                                        t.userAcknowledged = e
                                    },
                                    expression: "userAcknowledged"
                                }
                            }, [t._v("\n            " + t._s(t.$t("Please acknowledge to continue.")) + "\n          ")]), t._v(" "), t.showAcknowledgeWarning ? n("div", {
                                staticClass: "tds-tour__acknowledge-warning"
                            }, [t._v("\n            " + t._s(t.$t("Please acknowledge this is important")) + "\n          ")]) : t._e()], 1)]), t._v(" "), n("div", {
                                staticClass: "tds-tour__button-container"
                            }, [n("tmd-button", {
                                staticClass: "tmd-raised tmd-primary",
                                attrs: {
                                    "md-elevation": "theme",
                                    "md-theme-color": "amber600",
                                    "border-style": "thicker",
                                    "md-parent-elevation": "2",
                                    stacked: !1,
                                    "self-elevation": "theme"
                                },
                                on: {
                                    click: t.handleButtonClick
                                }
                            }, [t.shouldShowNextButton ? n("span", [t._v(t._s(t.$t("NEXT")))]) : n("span", [t._v(t._s(t.$t("DONE")))])])], 1)]) : t._e()]), t._v(" "), n("div", {
                                staticClass: "tds-tour__bottom"
                            })])
                        },
                        staticRenderFns: []
                    }, (function(t) {
                        t && t("data-v-1f09a8ba_0", {
                            source: 'body[data-v-1f09a8ba]{overflow-x:hidden}.tds-tour[data-v-1f09a8ba]{max-width:100vw;min-width:100%;position:absolute;height:100%;top:0;left:0;z-index:20;display:none}.tds-tour__top[data-v-1f09a8ba]{width:100%;background-color:rgba(0,0,0,.85);backdrop-filter:blur(3px)}.tds-tour__middle[data-v-1f09a8ba]{width:fit-content;background-color:transparent;display:-webkit-box}.tds-tour__middle-left[data-v-1f09a8ba]{height:100%;background-color:rgba(0,0,0,.85);backdrop-filter:blur(3px)}.tds-tour__middle-center[data-v-1f09a8ba]{height:100%;background-color:rgba(0,0,0,.15);box-shadow:0 0 0 6px rgba(0,0,0,.75)}@media (max-width:1024px){.tds-tour__middle-center[data-v-1f09a8ba]{box-shadow:none;position:relative;margin-top:-4px;height:calc(100% + 4px);border-left:1px solid rgba(255,255,255,.65);border-right:1px solid rgba(255,255,255,.65);border-top:1px solid rgba(255,255,255,.65);border-bottom:none}}.tds-tour__middle-right[data-v-1f09a8ba]{height:100%;background-color:rgba(0,0,0,.85);backdrop-filter:blur(3px)}.tds-tour__bottom[data-v-1f09a8ba]{width:100%;background-color:rgba(0,0,0,.85);backdrop-filter:blur(3px)}.tds-tour__message-container[data-v-1f09a8ba]{width:200px;background-color:#383b40;position:absolute;border-radius:8px;z-index:3}.tds-tour__message-container.right-arrow[data-v-1f09a8ba]::before{content:"";position:absolute;top:50%;transform:translatey(-50%) rotate(90deg);right:-22px;border-left:16px solid transparent;border-right:16px solid transparent;border-bottom:32px solid #383b40}.tds-tour__message-container.left-arrow[data-v-1f09a8ba]::before{content:"";position:absolute;top:50%;transform:translatey(-50%) rotate(-90deg);left:-22px;border-left:16px solid transparent;border-right:16px solid transparent;border-bottom:32px solid #383b40}.tds-tour__message-container.top-arrow[data-v-1f09a8ba]::before{content:"";position:absolute;left:50%;transform:translatex(-50%);top:-22px;border-left:16px solid transparent;border-right:16px solid transparent;border-bottom:32px solid #383b40}.tds-tour__message-container.bottom-arrow[data-v-1f09a8ba]::before{content:"";position:absolute;left:50%;transform:translatex(-50%) rotate(180deg);bottom:-22px;border-left:16px solid transparent;border-right:16px solid transparent;border-bottom:32px solid #383b40}.tds-tour__regular-message-content[data-v-1f09a8ba]{margin:12px 16px}.tds-tour__regular-top[data-v-1f09a8ba]{display:flex}.tds-tour__regular-top-left[data-v-1f09a8ba]{display:table}.tds-tour__regular-top-left-icon[data-v-1f09a8ba]{display:table-cell!important;vertical-align:middle}.tds-tour__regular-top-center[data-v-1f09a8ba]{min-height:20px;height:fit-content;width:100%;margin-left:12px;text-align:left;font-size:20px;color:rgba(255,255,255,.9)}.tds-tour__icon[data-v-1f09a8ba]{color:#ffb300}.tds-tour__regular-bottom[data-v-1f09a8ba]{display:flex;padding:12px 4px 4px 4px;justify-content:flex-start;align-items:center;gap:12px;flex-flow:row-reverse;align-self:stretch}.tds-tour__initial-message-content[data-v-1f09a8ba]{margin:16px;font-size:16px;text-align:center}.tds-tour__initial-text[data-v-1f09a8ba]{margin-top:16px}.tds-tour__initial-navigation[data-v-1f09a8ba]{margin-top:24px}.tds-tour__button-container[data-v-1f09a8ba]{display:flex;justify-content:flex-end;margin-top:16px}.tds-tour__checkbox-wrapper[data-v-1f09a8ba]{width:100%;position:relative}.tds-tour__acknowledge-warning[data-v-1f09a8ba]{color:#cf6679;font-size:12px;margin-top:4px;font-weight:500}',
                            map: void 0,
                            media: void 0
                        })
                    }), v, "data-v-1f09a8ba", !1, undefined, !1, h.a, void 0, void 0)
            }).call(this, n(203))
        }
    }
]);