! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6ad4e209-caaf-490a-844e-3c2189515cf7", e._sentryDebugIdIdentifier = "sentry-dbid-6ad4e209-caaf-490a-844e-3c2189515cf7")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [98], {
        1160: function(e, t, o) {
            "use strict";
            o(955)
        },
        1161: function(e, t, o) {
            var n = o(177)(!1);
            n.push([e.i, ".demo-video[data-v-7a3c2a26]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding:160px 0}.demo-video--no-margin[data-v-7a3c2a26]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;margin:0}@media(min-height:750px){.demo-video[data-v-7a3c2a26]{height:100vh;min-height:450px;max-height:1440px}}@media(min-height:750px)and (max-width:720px){.demo-video[data-v-7a3c2a26]{height:65vh;max-height:720px}}@media(min-height:750px)and (max-width:450px){.demo-video[data-v-7a3c2a26]{height:50vh;max-height:720px}}.demo-video--demo[data-v-7a3c2a26]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media(orientation:portrait){.demo-video--demo[data-v-7a3c2a26]{width:70%;max-width:1440px;height:auto}}@media(orientation:portrait)and (max-width:1440px){.demo-video--demo[data-v-7a3c2a26]{width:90%;margin:auto}}.demo-video--action[data-v-7a3c2a26]{margin:60px auto auto}.demo-video--video[data-v-7a3c2a26]{margin:auto}@media(orientation:portrait){.demo-video--video[data-v-7a3c2a26]{width:70%;max-width:1440px;height:auto}}@media(orientation:portrait)and (max-width:1440px){.demo-video--video[data-v-7a3c2a26]{width:90%}}@media(max-width:900px){.demo-video--video[data-v-7a3c2a26]{width:90%}}@media(max-width:900px){.demo-video[data-v-7a3c2a26]{padding:80px 0}}", ""]), e.exports = n
        },
        1267: function(e, t, o) {
            "use strict";
            o.r(t);
            var n = o(2),
                r = o(781),
                d = (o(88), o(52), o(83), o(28), o(384)),
                c = o(892),
                l = n.default.extend({
                    name: "demo-video",
                    components: {
                        TmdButton: d.a,
                        TmdCard: r.a,
                        VideoCard: c.a
                    },
                    i18n: {
                        messages: {
                            en: {
                                "CHAT WITH US": "CHAT WITH US"
                            },
                            es: {
                                "CHAT WITH US": "HABLA CON NOSOTROS"
                            }
                        }
                    },
                    props: {
                        theme: {
                            type: String,
                            default: "light"
                        },
                        pageId: {
                            type: String,
                            required: !0
                        },
                        videoUrl: {
                            type: String,
                            required: !0
                        },
                        videoCoverUrl: {
                            type: String,
                            required: !0
                        },
                        videoTitle: {
                            type: String,
                            required: !0
                        },
                        noMargin: {
                            type: Boolean,
                            default: !1
                        },
                        demoAction: {
                            type: Boolean,
                            default: !0
                        },
                        hideSkipButton: {
                            type: Boolean,
                            default: !1
                        },
                        hideCallToAction: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        chatWithUsHref: function() {
                            var e = this.$router.currentRoute.path.replace(/^\/[e,s,n]{2}(\/|$)/, "/").slice(1);
                            return "/app/messenger/conversations/".concat(this.$config.emmaGgId, "?source=chat-with-us&utm_source=web&utm_medium=").concat(e, "&utm_campaign=dft?flow=chat_with_us")
                        }
                    }
                }),
                m = (o(1160), o(101)),
                h = Object(m.a)(l, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("tmd-card", {
                        class: e.noMargin ? "demo-video--no-margin" : "demo-video",
                        attrs: {
                            id: "demo-video",
                            "md-theme": e.theme,
                            "md-elevation": "1",
                            type: "filled",
                            "no-border-radius": ""
                        }
                    }, [o("div", {
                        staticClass: "demo-video--demo"
                    }, [o("video-card", {
                        staticClass: "demo-video--video",
                        attrs: {
                            "page-id": e.pageId,
                            "cover-image": e.$t(e.videoCoverUrl),
                            size: "large",
                            "card-type": "filled",
                            "card-elevation": "1",
                            "video-url": e.$t(e.videoUrl),
                            "video-title": e.$t(e.videoTitle),
                            "border-radius": !1,
                            theme: e.theme,
                            "play-color": "white",
                            "hide-skip-button": e.hideSkipButton,
                            "hide-call-to-action": e.hideCallToAction
                        }
                    }), e._v(" "), e.demoAction && !e.hideCallToAction ? o("tmd-button", {
                        staticClass: "tmc-theme tmd-raised demo-video--action",
                        attrs: {
                            "md-elevation": "theme",
                            "md-parent-elevation": "1",
                            "border-style": "thinner",
                            href: e.chatWithUsHref
                        }
                    }, [e._v("\n      " + e._s(e.$t("CHAT WITH US")) + "\n    ")]) : e._e()], 1)])
                }), [], !1, null, "7a3c2a26", null).exports,
                v = n.default.extend({
                    name: "demo-section",
                    components: {
                        TmdCard: r.a,
                        DemoVideo: h
                    },
                    props: {
                        pageId: {
                            type: String,
                            required: !0
                        },
                        theme: {
                            type: String,
                            default: "light"
                        },
                        demoVideo: {
                            type: String,
                            required: !0
                        },
                        demoCover: {
                            type: String,
                            required: !0
                        },
                        demoTitle: {
                            type: String,
                            required: !0
                        },
                        demoAction: {
                            type: Boolean,
                            default: !0
                        },
                        hideSkipButton: {
                            type: Boolean,
                            default: !1
                        },
                        hideCallToAction: {
                            type: Boolean,
                            default: !1
                        }
                    }
                }),
                f = Object(m.a)(v, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("tmd-card", {
                        attrs: {
                            "md-theme": e.theme,
                            "md-elevation": "1",
                            type: "filled",
                            "no-border-radius": ""
                        }
                    }, [o("demo-video", {
                        attrs: {
                            theme: "dark",
                            "page-id": e.pageId,
                            "video-url": e.$t(e.demoVideo),
                            "video-title": e.$t(e.demoTitle),
                            "video-cover-url": e.$t(e.demoCover),
                            "demo-action": e.demoAction,
                            "hide-skip-button": e.hideSkipButton,
                            "hide-call-to-action": e.hideCallToAction
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = f.exports
        },
        814: function(e, t, o) {
            "use strict";
            o.d(t, "a", (function() {
                return d
            }));
            var n = o(2),
                r = o(827),
                d = n.default.extend({
                    methods: {
                        homePagesTrackingMixin_createPingTracker: function() {
                            var e = "".concat(this.$config.snowplowCollector);
                            Object(r.b)("sp", e, {
                                appId: "".concat(this.$config.appSnowplowId, "-home")
                            }), Object(r.a)({
                                minimumVisitLength: 30,
                                heartbeatDelay: 10
                            }), Object(r.c)()
                        },
                        homePagesTrackingMixin_itemClicked: function(e) {
                            Object(r.d)({
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
        844: function(e, t, o) {
            var content = o(884);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(178).default)("7519c602", content, !0, {
                sourceMap: !1
            })
        },
        883: function(e, t, o) {
            "use strict";
            o(844)
        },
        884: function(e, t, o) {
            var n = o(177)(!1);
            n.push([e.i, ".video-card[data-v-7c9aea45]{display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;width:225px;height:280px;-webkit-box-shadow:2px 2px 6px 0 rgba(1,1,1,.4),-4px -4px 4px 0 rgba(56,59,64,.7);box-shadow:2px 2px 6px 0 rgba(1,1,1,.4),-4px -4px 4px 0 rgba(56,59,64,.7)}@media(max-width:720px){.video-card[data-v-7c9aea45]{-ms-flex-negative:0;flex-shrink:0}}.video-card img[data-v-7c9aea45]{min-width:100%}@media(max-width:720px){.video-card img[data-v-7c9aea45]{max-width:100%}}.video-card video[data-v-7c9aea45]{width:100%;height:100%;z-index:3;top:0;left:0;border:1px solid transparent}.video-card--large[data-v-7c9aea45]{width:50rem;height:28.125rem;max-width:100%}@media(max-width:720px){.video-card--large[data-v-7c9aea45]{width:100%;height:unset}}.video-card-container[data-v-7c9aea45]{width:100%;height:100%;position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.video-card-container__cover[data-v-7c9aea45]{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;border-radius:4px;overflow:hidden;position:relative}.video-card-container__cover__play[data-v-7c9aea45]{width:15%;height:15%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:rgba(0,0,0,.4);-webkit-box-shadow:0 4px 4px rgba(0,0,0,.25);box-shadow:0 4px 4px rgba(0,0,0,.25);border-radius:2px;border:0 solid transparent;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0;z-index:2;min-height:4rem;min-width:6rem;cursor:pointer}.video-card-container__cover__play svg[data-v-7c9aea45]{width:1.875rem;-webkit-transform:translate(2px);transform:translate(2px)}.video-card-container__cover__play.black svg path[data-v-7c9aea45]{fill:#000}.video-card-container__cover__play.white svg path[data-v-7c9aea45]{fill:#fff}@media(max-width:720px){.video-card-container__cover__play[data-v-7c9aea45]{padding:.5rem 1rem}}.video-card-container-content[data-v-7c9aea45]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:0;-ms-flex:0 1 9rem;flex:0 1 9rem;padding:.5rem .8rem;width:100%;left:0;bottom:0;grid-gap:.5rem;gap:.5rem;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-bottom-right-radius:2px;-webkit-border-bottom-left-radius:2px;-moz-border-radius-bottomright:2px;-moz-border-radius-bottomleft:2px;border-bottom-right-radius:2px;border-bottom-left-radius:2px;max-height:9rem}.video-card-container-content__text[data-v-7c9aea45]{font-size:.75rem;line-height:1rem;margin-left:auto;margin-right:auto;text-align:center;margin-top:10px}.video-card-container-content__text--title a[data-v-7c9aea45]{text-decoration:none}.video-card-container-content__text--accent[data-v-7c9aea45]{color:hsla(0,0%,100%,.65)}.skip-intro-btn[data-v-7c9aea45]{padding-top:3px!important}.skip-intro-btn-container[data-v-7c9aea45]{position:absolute;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;z-index:5;right:15px;bottom:75px}.skip-intro-btn--icon[data-v-7c9aea45]{margin-bottom:3px}@media(max-width:720px){.skip-intro-btn--icon[data-v-7c9aea45]{display:none}.skip-intro-btn-container[data-v-7c9aea45]{right:13px;bottom:65px}}.demo-video-player[data-v-7c9aea45]{position:relative}", ""]), e.exports = n
        },
        892: function(e, t, o) {
            "use strict";
            o(45), o(28);
            var n = o(384),
                r = o(781),
                d = o(91),
                c = o(2),
                l = o(17),
                m = o(814),
                h = (o(47), o(40), o(31), o(60), o(37), o(68), o(18)),
                v = o(70),
                f = o(861),
                x = o(862),
                w = o(838);

            function k(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }
            var y = c.default.extend({
                    data: function() {
                        return {
                            videoTrackingMixin_tracking: {
                                started: !1,
                                fifty: !1,
                                hundred: !1
                            }
                        }
                    },
                    computed: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? k(Object(o), !0).forEach((function(t) {
                                Object(h.a)(e, t, o[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : k(Object(o)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                            }))
                        }
                        return e
                    }({}, Object(v.d)("User", {
                        user: function(e) {
                            return e.user
                        }
                    })),
                    methods: {
                        videoTrackingMixin_trackVideoProgress: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                video = e.target,
                                o = video.currentTime / video.duration * 100,
                                n = Object(w.b)(this.$route),
                                r = x.b[t];
                            !this.videoTrackingMixin_tracking.started && o > 0 && (this.videoTrackingMixin_tracking.started = !0, f.a.trackEvent(x.e.STARTED, this.user, n, r)), !this.videoTrackingMixin_tracking.fifty && o >= 50 && (this.videoTrackingMixin_tracking.fifty = !0, f.a.trackEvent(x.e.FIFTY_PERCENT, this.user, n, r)), !this.videoTrackingMixin_tracking.hundred && o >= 95 && (this.videoTrackingMixin_tracking.hundred = !0, f.a.trackEvent(x.e.HUNDRED_PERCENT, this.user, n, r))
                        }
                    }
                }),
                _ = c.default.extend({
                    name: "video-card",
                    components: {
                        TmdButton: n.a,
                        TmdCard: r.a,
                        TmdIcon: d.a
                    },
                    mixins: [m.a, y],
                    props: {
                        coverImage: String,
                        videoUrl: String,
                        description: String,
                        title: Object,
                        videoTitle: {
                            type: String,
                            default: "video"
                        },
                        videoId: {
                            type: String,
                            default: "video"
                        },
                        size: {
                            type: String,
                            default: "regular",
                            validator: function(e) {
                                return ["large", "regular"].includes(e)
                            }
                        },
                        pageId: {
                            type: String,
                            required: !0
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
                            default: "light"
                        },
                        hideSkipButton: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            shouldShowVideo: !1,
                            iconMdiPlay: l.Mb,
                            shouldShowSkipIntroBtn: !1,
                            currentTime: 0,
                            introsDuration: {
                                es: 89,
                                en: 85
                            }
                        }
                    },
                    computed: {
                        videoAlt: function() {
                            var e;
                            return null !== (e = this.videoTitle) && void 0 !== e ? e : "Video Cover Image"
                        },
                        introDuration: function() {
                            return this.introsDuration[this.$i18n.locale]
                        },
                        onSafari: function() {
                            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                        },
                        skipIntroButtonPosition: function() {
                            return this.onSafari ? {
                                right: "15px",
                                bottom: "50px"
                            } : {}
                        }
                    },
                    watch: {
                        currentTime: function(e) {
                            e > this.introDuration && !0 === this.shouldShowSkipIntroBtn ? this.hideSkipIntroBtn() : e > 5 && e < this.introDuration && !1 === this.shouldShowSkipIntroBtn && this.showSkipIntroBtn()
                        }
                    },
                    methods: {
                        toggleVideoVisibility: function() {
                            return this.shouldShowVideo ? this.trackVideoClick("stop_".concat(this.videoId)) : this.trackVideoClick("play_".concat(this.videoId)), this.shouldShowVideo = !this.shouldShowVideo
                        },
                        trackVideoClick: function(e) {
                            this.homePagesTrackingMixin_itemClicked({
                                id: "".concat(this.pageId, "-").concat(e),
                                action: "home_pages-video_click"
                            })
                        },
                        skipIntro: function() {
                            var video = document.getElementById("demo-video-player");
                            video && (video.currentTime = this.introDuration, video.play(), this.hideSkipIntroBtn())
                        },
                        updateCurrentTime: function() {
                            var video = document.getElementById("demo-video-player");
                            video && (this.currentTime = video.currentTime, this.videoTrackingMixin_trackVideoProgress({
                                target: video
                            }, this.pageId))
                        },
                        showSkipIntroBtn: function() {
                            this.currentTime > 5 && this.currentTime <= this.introDuration && (this.shouldShowSkipIntroBtn = !0)
                        },
                        hideSkipIntroBtn: function(e) {
                            var t;
                            if (e) {
                                t = e.relatedTarget;
                                var button = document.querySelector(".skip-intro-btn");
                                t && t !== button && (this.shouldShowSkipIntroBtn = !1)
                            } else this.shouldShowSkipIntroBtn = !1
                        }
                    }
                }),
                S = (o(883), o(101)),
                component = Object(S.a)(_, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("tmd-card", {
                        class: {
                            "video-card": !0, "video-card--large": "large" === e.size
                        },
                        attrs: {
                            "md-theme": e.theme,
                            "md-elevation": e.cardElevation,
                            type: e.cardType,
                            "no-border-radius": !e.borderRadius
                        }
                    }, [o("div", {
                        staticClass: "video-card-container"
                    }, [e.coverImage && e.videoUrl ? o("div", {
                        staticClass: "video-card-container__cover"
                    }, [e.shouldShowVideo ? e._e() : o("button", {
                        class: ["video-card-container__cover__play", e.playColor],
                        on: {
                            click: e.toggleVideoVisibility
                        }
                    }, [o("svg", {
                        attrs: {
                            viewBox: "0 0 40 44",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                        }
                    }, [o("path", {
                        attrs: {
                            d: "M0.499939 0.250244V43.4553L34.7856 21.8528L0.499939 0.250244Z"
                        }
                    })])]), e._v(" "), e.shouldShowVideo ? e._e() : o("img", {
                        staticClass: "video-card-container__cover--image lazyload",
                        attrs: {
                            "data-src": e.coverImage,
                            alt: e.videoAlt
                        }
                    }), e._v(" "), e.shouldShowVideo ? o("video", {
                        staticClass: "demo-video",
                        attrs: {
                            id: "demo-video-player",
                            controls: "",
                            title: e.videoTitle,
                            autoplay: "",
                            playsinline: ""
                        },
                        on: {
                            timeupdate: e.updateCurrentTime
                        }
                    }, [o("source", {
                        attrs: {
                            src: e.videoUrl,
                            type: "video/mp4"
                        }
                    })]) : e._e(), e._v(" "), e.shouldShowSkipIntroBtn && !e.hideSkipButton ? o("div", {
                        staticClass: "skip-intro-btn-container",
                        style: e.skipIntroButtonPosition
                    }, [o("tmd-button", {
                        staticClass: "skip-intro-btn tmd-raised tmd-primary",
                        attrs: {
                            "md-elevation": "theme",
                            "md-parent-elevation": "1",
                            "border-style": "thicker",
                            "torre-base-url": e.$config.torreBaseUrl
                        },
                        on: {
                            mouseenter: e.showSkipIntroBtn,
                            click: e.skipIntro
                        }
                    }, [e._v("\n          " + e._s(e.$t("SKIP INTRO")) + "\n          "), o("tmd-icon", {
                        staticClass: "skip-intro-btn--icon",
                        attrs: {
                            fill: ""
                        }
                    }, [e._v(" fast_forward ")])], 1)], 1) : e._e()]) : e._e(), e._v(" "), e.description && e.title ? o("div", {
                        staticClass: "video-card-container-content"
                    }, [o("div", {
                        staticClass: "video-card-container-content__text"
                    }, [e._v("\n        " + e._s(e.description) + "\n      ")]), e._v(" "), o("div", {
                        staticClass: "video-card-container-content__text video-card-container-content__text--title"
                    }, [o("a", {
                        attrs: {
                            href: e.localePath(e.title.genome),
                            title: e.title.name,
                            target: "_blank"
                        }
                    }, [e._v(e._s(e.title.name))]), e._v(" "), o("div", {
                        staticClass: "video-card-container-content__text--accent"
                    }, [e._v("\n          " + e._s(e.title.title) + "\n        ")]), e._v(" "), o("a", {
                        attrs: {
                            href: e.localePath(e.title.companyGenome),
                            title: e.title.company,
                            target: "_blank"
                        }
                    }, [e._v(e._s(e.title.company))])])]) : e._e()])])
                }), [], !1, null, "7c9aea45", null);
            t.a = component.exports
        },
        955: function(e, t, o) {
            var content = o(1161);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(178).default)("bf5c47ac", content, !0, {
                sourceMap: !1
            })
        }
    }
]);