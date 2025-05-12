! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "73955645-2859-457e-a3c8-8eeda6844c72", t._sentryDebugIdIdentifier = "sentry-dbid-73955645-2859-457e-a3c8-8eeda6844c72")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [68], {
        282: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            }));
            n(47), n(40), n(31), n(60), n(37), n(68);
            var o = n(18),
                r = (n(51), n(15), n(34), n(75), n(697), n(2)),
                d = n(3),
                c = n(4);

            function l(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(n), !0).forEach((function(e) {
                        Object(o.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var m = r.default.extend({
                    name: "tmd-badge",
                    props: {
                        value: {
                            type: Number,
                            required: !1
                        },
                        values: {
                            type: Array,
                            required: !1
                        },
                        maxValue: {
                            type: Number,
                            default: 99
                        },
                        small: {
                            type: Boolean,
                            default: !1
                        },
                        position: {
                            type: Object,
                            default: function() {
                                return {
                                    top: "-4px",
                                    left: "90%"
                                }
                            }
                        }
                    },
                    computed: {
                        displayValues: function() {
                            return void 0 === this.values ? [{
                                value: this.value,
                                theme: "#ef5350"
                            }] : 0 !== this.values.length ? this.values : []
                        },
                        styles: function() {
                            return void 0 === this.values ? [f(f({}, this.position), {}, {
                                backgroundColor: "#ef5350"
                            })] : this.values.map((function(t, e) {
                                return {
                                    top: "".concat(14 * e - 4, "px"),
                                    left: "90%",
                                    backgroundColor: "".concat(t.theme)
                                }
                            }))
                        }
                    },
                    methods: {
                        parseValue: function(t) {
                            return t <= 0 ? "" : this.maxValue > 0 && t > this.maxValue ? "".concat(this.maxValue, "+") : "".concat(t)
                        }
                    }
                }),
                h = Object(d.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tmd-badge"
                        }, [t._t("default"), t._v(" "), t._l(t.displayValues, (function(e, o) {
                            return n("span", {
                                key: o,
                                class: ["tmd-badge__counter", "tmd-caption", {
                                    "tmd-badge__counter--small": t.small,
                                    "tmd-badge__empty": e.value <= 0
                                }],
                                style: t.styles[o] || t.position
                            }, [t._v("\n    " + t._s(t.parseValue(e.value)) + "\n  ")])
                        }))], 2)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-676d24b4_0", {
                        source: ".tmd-badge[data-v-676d24b4]{position:relative;display:inline-block}.tmd-badge__empty[data-v-676d24b4]{background-color:transparent!important}.tmd-badge .tmd-badge__counter[data-v-676d24b4]{position:absolute;z-index:3;display:flex;overflow:hidden;min-width:16px;width:auto;height:16px;padding:4px;border-radius:8px;align-items:center;justify-content:center;pointer-events:none;transition:.3s cubic-bezier(.4,0,.2,1)}.tmd-badge .tmd-badge__counter--small[data-v-676d24b4]{font-size:10px;min-width:14px;height:14px}",
                        map: void 0,
                        media: void 0
                    })
                }), m, "data-v-676d24b4", !1, undefined, !1, c.a, void 0, void 0)
        },
        302: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            }));
            var o = n(11),
                r = (n(53), n(51), n(15), n(33), n(34), n(102), n(88), n(303)),
                d = n(27),
                c = n(117),
                l = n(3),
                f = n(4),
                m = {
                    name: "tdl-weight-render",
                    components: {
                        MdIcon: d.a,
                        MdTooltip: c.a,
                        TdlWeightIcon: r.a
                    },
                    props: {
                        value: {
                            type: Number
                        },
                        personId: {
                            type: String
                        },
                        trackRender: {
                            type: Function
                        },
                        iconSize: {
                            type: Number
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
                        },
                        themeColor: {
                            type: String,
                            required: !1
                        }
                    },
                    data: function() {
                        return {
                            mdiCircleIcon: null,
                            mdiWeightIcon: null,
                            mdiInformationIcon: null,
                            humanFormat: null
                        }
                    },
                    computed: {
                        readableWeight: function() {
                            return this.humanFormat ? this.getReadableWeight(this.value) : ""
                        },
                        cssProps: function() {
                            return {
                                "--size": this.iconSize + "px",
                                "--dot-divider-size": this.dotDividerSize + "px",
                                "--theme-color": this.theme
                            }
                        }
                    },
                    created: function() {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        n.e(1).then(n.bind(null, 230)).then((function(e) {
                                            var n = e.mdiCircle,
                                                o = e.mdiInformation,
                                                r = e.mdiWeight;
                                            t.mdiCircleIcon = n, t.mdiWeightIcon = r, t.mdiInformationIcon = o
                                        })), n.e(119).then(n.t.bind(null, 791, 7)).then((function(e) {
                                            return t.humanFormat = e.default
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
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
                },
                h = Object(l.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("span", {
                            staticClass: "recommendation-weight",
                            style: t.cssProps
                        }, [t.dotDivider ? n("span", {
                            staticClass: "recommendation-weight__dot"
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiCircleIcon,
                                size: t.dotDividerSize + "px"
                            }
                        })], 1) : t._e(), t._v(" "), "left" === t.iconPosition && t.iconDisplay ? n("span", {
                            staticClass: "recommendation-weight__left-column"
                        }, [t.plusIcon ? n("tdl-weight-icon", {
                            attrs: {
                                "icon-size": t.iconSize
                            }
                        }) : n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiWeightIcon,
                                size: t.iconSize + "px"
                            }
                        }), t._v(" "), n("md-tooltip", {
                            staticClass: "recommendation-weight__tooltip",
                            attrs: {
                                "md-direction": "bottom"
                            }
                        }, [t._v("\n      " + t._s(t.$t("Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.")) + "\n    ")])], 1) : t._e(), t._v(" "), n("span", {
                            staticClass: "recommendation-weight__value"
                        }, [t._v(t._s(t.readableWeight))]), t._v(" "), n("span", {
                            staticClass: "recommendation-weight__right-column",
                            class: {
                                "recommendation-weight__right-column--information-icon": t.infoIconDisplay
                            }
                        }, ["right" === t.iconPosition && t.iconDisplay ? n("span", {
                            staticClass: "recommendation-weight__icon-container"
                        }, [t.plusIcon ? n("tdl-weight-icon", {
                            attrs: {
                                "icon-size": t.iconSize
                            }
                        }) : n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiWeightIcon,
                                size: t.iconSize + "px"
                            }
                        }), t._v(" "), t.infoIconDisplay ? t._e() : n("md-tooltip", {
                            staticClass: "recommendation-weight__tooltip",
                            attrs: {
                                "md-direction": "bottom"
                            }
                        }, [t._v("\n        " + t._s(t.$t("Weight adds credibility to recommendations. Weighted recommendations are given by people who’ve been recommended by others. Your recommendation weight is thus the sum of the weights of the recommendations you’ve received.")) + "\n      ")])], 1) : t._e(), t._v(" "), t.infoIconDisplay ? n("a", {
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.weightInfo.apply(null, arguments)
                                }
                            }
                        }, [n("md-icon", {
                            staticClass: "recommendation-weight__information-icon",
                            attrs: {
                                "icon-svg": t.mdiInformationIcon,
                                "icon-color": t.themeColor
                            }
                        })], 1) : t._e()])])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-67c01738_0", {
                        source: ".tdl-lazy-loader-hide-background-image[data-v-67c01738]{background-image:none!important;top:0!important}.recommendation-weight[data-v-67c01738]{display:inline-flex;align-items:center}.recommendation-weight__value[data-v-67c01738]{display:flex;font-weight:600}.recommendation-weight .md-icon[data-v-67c01738]{min-width:var(--size);width:var(--size);min-height:var(--size);height:var(--size);font-size:var(--size);vertical-align:baseline;margin-left:0;margin-right:0}.recommendation-weight__tooltip[data-v-67c01738]{width:280px;height:auto!important;padding:8px;text-align:center;font-size:12px;white-space:normal}.recommendation-weight__left-column[data-v-67c01738]{display:flex;align-items:flex-end;margin-right:3px}.recommendation-weight__right-column[data-v-67c01738]{display:flex}.recommendation-weight__right-column--information-icon[data-v-67c01738]{align-self:flex-start}.recommendation-weight__dot[data-v-67c01738]{display:flex;align-items:center;margin:0 4px}.recommendation-weight__dot .md-icon[data-v-67c01738]{min-width:var(--dot-divider-size);width:var(--dot-divider-size);min-height:var(--dot-divider-size);height:var(--dot-divider-size);font-size:var(--dot-divider-size)}.recommendation-weight__dot .md-icon svg[data-v-67c01738]{fill:rgba(255,255,255,.65)}.recommendation-weight a[data-v-67c01738]{position:relative;display:inline-flex;align-self:flex-start;margin-top:4px;cursor:pointer}.recommendation-weight a[data-v-67c01738]:hover{text-decoration:none}.recommendation-weight a .md-icon.recommendation-weight__information-icon[data-v-67c01738]{min-width:24px;width:24px;min-height:24px;height:24px;font-size:24px}",
                        map: void 0,
                        media: void 0
                    })
                }), m, "data-v-67c01738", !1, undefined, !1, f.a, void 0, void 0)
        },
        303: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            }));
            n(51);
            var o = n(3),
                r = n(4),
                d = {
                    name: "tdl-weight-icon",
                    props: {
                        iconSize: {
                            type: Number
                        },
                        iconColor: {
                            type: String,
                            default: "currentColor"
                        }
                    }
                },
                c = Object(o.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tdl-weight-icon"
                        }, [n("svg", {
                            attrs: {
                                width: t.iconSize,
                                height: t.iconSize,
                                viewBox: "0 0 21 18",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink"
                            }
                        }, [n("g", {
                            attrs: {
                                id: "Add-weight-",
                                stroke: "none",
                                "stroke-width": "1",
                                fill: "none",
                                "fill-rule": "evenodd"
                            }
                        }, [n("g", {
                            attrs: {
                                id: "Add-weight-Copy"
                            }
                        }, [n("g", {
                            attrs: {
                                id: "baseline-add_circle-24px-(1)",
                                transform: "translate(11.000000, 6.000000)"
                            }
                        }, [n("polygon", {
                            attrs: {
                                id: "Path",
                                points: "0 0 10 0 10 10 0 10"
                            }
                        }), t._v(" "), n("path", {
                            attrs: {
                                id: "Shape",
                                d: "M5.5,1 C3.016,1 1,3.016 1,5.5 C1,7.984 3.016,10 5.5,10 C7.984,10 10,7.984 10,5.5 C10,3.016 7.984,1 5.5,1 Z M7.75,5.95 L5.95,5.95 L5.95,7.75 L5.05,7.75 L5.05,5.95 L3.25,5.95 L3.25,5.05 L5.05,5.05 L5.05,3.25 L5.95,3.25 L5.95,5.05 L7.75,5.05 L7.75,5.95 Z",
                                "fill-opacity": "1",
                                "fill-rule": "nonzero",
                                fill: t.iconColor
                            }
                        })]), t._v(" "), n("g", {
                            attrs: {
                                id: "ic_weight-copy",
                                opacity: "1"
                            }
                        }, [n("polygon", {
                            attrs: {
                                id: "Shape",
                                points: "0 0 19 0 19 18 0 18"
                            }
                        }), t._v(" "), n("path", {
                            attrs: {
                                id: "Shape",
                                d: "M13.2,5.11111111 C13.2,5.67888889 13.048,6.20777778 12.768,6.66666667 L14.8,6.66666667 C15.56,6.66666667 14.1046734,6.92082581 13.1502363,7.80604074 C11.6330813,9 11.4370549,10.5760366 11.4707171,11.9946185 C11.4991871,13.1943915 12,14.2982242 12.8449387,15.0449802 C13.0974818,15.2681775 13.8217798,16 15.038106,16 L3.6,16 C2.7163444,16 2,15.3035541 2,14.4444444 C2,14.2733333 2.032,14.11 3.64,7.88 C3.8,7.18777778 4.44,6.66666667 5.2,6.66666667 L7.232,6.66666667 C6.952,6.20777778 6.8,5.67888889 6.8,5.11111111 C6.8,3.39289189 8.2326888,2 10,2 C11.7673112,2 13.2,3.39289189 13.2,5.11111111 Z M10,3.55555556 C9.1163444,3.55555556 8.4,4.2520015 8.4,5.11111111 C8.4,5.97022072 9.1163444,6.66666667 10,6.66666667 C10.8836556,6.66666667 11.6,5.97022072 11.6,5.11111111 C11.6,4.2520015 10.8836556,3.55555556 10,3.55555556 Z",
                                "fill-rule": "nonzero",
                                fill: t.iconColor
                            }
                        })])])])])])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-132df4ce_0", {
                        source: ".tdl-weight-icon[data-v-132df4ce]{display:inline!important;position:relative;bottom:2px}",
                        map: void 0,
                        media: void 0
                    })
                }), d, "data-v-132df4ce", !1, undefined, !1, r.a, void 0, void 0)
        },
        597: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return _
            }));
            n(47), n(65), n(627);
            var o = n(136),
                r = n(213),
                d = n(190),
                c = n(154),
                l = n(91),
                f = n(173),
                m = n(3),
                h = n(4),
                v = (n(183), {
                    name: "tdl-web-app-notification",
                    mixins: [c.a],
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
                    components: {
                        TdlEntityPicture: r.a,
                        TmdIcon: l.a
                    },
                    data: function() {
                        return {
                            isShowing: !1,
                            showInAnimation: !1,
                            showOutAnimation: !1,
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
                        this.moveToBody(), this.$root.$on("webapp-notification::open", this.processWebAppNotification)
                    },
                    methods: {
                        showNotification: function(t) {
                            var e = this;
                            this.isShowing ? this.notificationQueue.push(t) : (this.notificationContent = t, this.isShowing = !0, this.showInAnimation = !0, this.showOutAnimation = !1, this.dismissible && (this.hideTimeout = setTimeout((function() {
                                e.hideNotification()
                            }), 9e3)))
                        },
                        moveToBody: function() {
                            var t = this.$refs.webAppNotification;
                            t && document.body.appendChild(t)
                        },
                        hideNotification: function() {
                            var t = this;
                            if (clearTimeout(this.hideTimeout), this.hideTimeout = null, this.isShowing = !1, this.showInAnimation = !1, this.showOutAnimation = !0, this.clearNotificationContent(), this.notificationEnabled && this.notificationQueue.length > 0) {
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
                            if (this.ProcessMixin_isClient && this.user && this.user.subjectId && void 0 === this.webAppNotificationsUnsubscribe) {
                                f.a.$on("enable", (function() {
                                    t.notificationEnabled = !0
                                })), f.a.$on("disable", (function() {
                                    t.notificationEnabled = !1
                                }));
                                var e = Object(d.a)(this.firebaseUrl, "notifications/".concat(this.user.subjectId, "/web-app"));
                                this.webAppNotificationsUnsubscribe = Object(o.d)(e, (function(e) {
                                    var n = e.val();
                                    t.notificationEnabled && n && t.processWebAppNotification(n)
                                }))
                            }
                        },
                        unsubscribeToWebAppNotifications: function() {
                            var t = this;
                            void 0 !== this.webAppNotificationsUnsubscribe && (f.a.$off("enable", (function() {
                                t.notificationEnabled = !0
                            })), f.a.$off("disable", (function() {
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
                _ = Object(m.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            ref: "webAppNotification",
                            staticClass: "tdl-web-app-notification"
                        }, [t.isShowing ? n("div", {
                            class: {
                                "tdl-web-app-notification__notification": !0, "tdl-web-app-notification__notification-open": t.showInAnimation, "tdl-web-app-notification__notification-close": t.showOutAnimation, "tdl-web-app-notification--show": t.isShowing
                            }
                        }, [n("div", {
                            staticClass: "tdl-web-app-notification__notification-body",
                            on: {
                                click: t.handleNotificationClick
                            }
                        }, [n("div", {
                            staticClass: "tdl-web-app-notification__notification-content"
                        }, [n("tdl-entity-picture", {
                            staticClass: "tdl-web-app-notification__entity",
                            attrs: {
                                shape: "hexagon",
                                "border-width": 3,
                                size: 44,
                                entity: t.notificationContent.entity
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "tdl-web-app-notification__notification-container"
                        }, [n("div", {
                            staticClass: "tdl-web-app-notification__notification-title-container"
                        }, [n("h3", {
                            staticClass: "tdl-web-app-notification__notification-title md-body-2"
                        }, [t._v("\n              " + t._s(t.notificationContent.title.text) + "\n            ")]), t._v(" "), t.notificationContent.title.icon ? n("div", {
                            staticClass: "tdl-web-app-notification__notification-title-icon-container"
                        }, [n("tmd-icon", {
                            staticClass: "tdl-web-app-notification__notification-title-icon-container",
                            attrs: {
                                size: "15px",
                                fill: ""
                            }
                        }, [t._v("\n                " + t._s(t.notificationContent.title.icon) + "\n              ")])], 1) : t._e()]), t._v(" "), n("div", {
                            staticClass: "tdl-web-app-notification__notification-body-text-container"
                        }, [n("p", {
                            staticClass: "tdl-web-app-notification__notification-body-text md-label"
                        }, [t._v("\n              " + t._s(t.notificationContent.body.text) + "\n            ")])])])], 1), t._v(" "), n("div", {
                            staticClass: "tdl-web-app-notification__notification-btn-close",
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.hideNotification.apply(null, arguments)
                                }
                            }
                        }, [n("tmd-icon", {
                            staticClass: "tmd-color-text",
                            attrs: {
                                size: "18px"
                            }
                        }, [t._v("\n          close\n        ")])], 1)])]) : t._e()])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-76e7061d_0", {
                        source: ".tdl-lazy-loader-hide-background-image[data-v-76e7061d]{background-image:none!important;top:0!important}.tdl-web-app-notification__notification[data-v-76e7061d]{position:fixed;z-index:9999;width:328px;height:82px;background:#383b40;border-radius:5px;box-shadow:0 4px 4px rgba(0,0,0,.25);display:flex;justify-content:center;align-items:center;top:16px;right:16px;opacity:0}.tdl-web-app-notification__notification-open[data-v-76e7061d]{animation:slide-in-data-v-76e7061d .5s forwards}.tdl-web-app-notification__notification-close[data-v-76e7061d]{animation:fade-out-data-v-76e7061d .5s forwards}.tdl-web-app-notification--show[data-v-76e7061d]{opacity:1}@keyframes slide-in-data-v-76e7061d{0%{transform:translateX(100%)}100%{transform:translateX(0)}}@keyframes fade-out-data-v-76e7061d{0%{opacity:1}100%{opacity:0}}@media only screen and (max-width:720px){.tdl-web-app-notification__notification[data-v-76e7061d]{top:16px;left:10px;right:10px;width:calc(100% - 20px);transform:translateX(150%)}}.tdl-web-app-notification__notification-body[data-v-76e7061d]{display:flex;justify-content:space-between;align-items:center;flex-grow:1;padding:8px 8px;gap:8px;isolation:isolate;width:100%;height:100%;cursor:pointer}.tdl-web-app-notification__notification-content[data-v-76e7061d]{display:flex;align-items:center}.tdl-web-app-notification__notification-btn-close[data-v-76e7061d]{position:absolute;width:22px;height:22px;right:5px;top:5px;background:0 0;border-radius:50%;cursor:pointer;display:flex;justify-content:center;align-items:center}.tdl-web-app-notification__notification-btn-close[data-v-76e7061d]:hover{background:#5e626b}.tdl-web-app-notification__entity[data-v-76e7061d]{top:-3px}.tdl-web-app-notification__notification-container[data-v-76e7061d]{min-width:248px;height:58px;margin-left:8px;display:flex;flex-direction:column}.tdl-web-app-notification__notification-title-container[data-v-76e7061d]{display:flex;align-items:center;white-space:nowrap}.tdl-web-app-notification__notification-title[data-v-76e7061d]{flex-grow:0;margin:0;overflow:hidden;text-overflow:ellipsis;padding-right:8px}.tdl-web-app-notification__notification-title-icon-container[data-v-76e7061d]{flex-shrink:0;display:flex;align-items:center;justify-content:center}.tdl-web-app-notification__notification-title-icon[data-v-76e7061d]{min-width:15px;width:15px;min-height:15px;height:15px;font-size:15px;color:rgba(255,255,255,.65);display:inline-block}.tdl-web-app-notification__notification-body-text-container[data-v-76e7061d]{margin-top:6px}.tdl-web-app-notification__notification-body-text[data-v-76e7061d]{margin:0;line-height:16px;height:32px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}",
                        map: void 0,
                        media: void 0
                    })
                }), v, "data-v-76e7061d", !1, undefined, !1, h.a, void 0, void 0)
        },
        598: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return I
            }));
            n(51), n(31);
            var o = n(2),
                r = n(384),
                d = n(91),
                c = n(367),
                l = n(17),
                f = n(35),
                m = n(27),
                h = n(41),
                v = n(156),
                _ = n(213),
                y = n(439),
                w = n(3),
                x = n(4),
                C = o.default.extend({
                    name: "tdl-user-menu",
                    components: {
                        MdButton: f.a,
                        MdIcon: m.a,
                        MdInkRipple: h.a,
                        MdMenu: v.a,
                        TdlEntityPicture: _.a,
                        TdlEntityRender: y.a,
                        TdlLocaleSelector: c.a
                    },
                    props: {
                        defaultLocale: {
                            type: String,
                            required: !0
                        },
                        entitySize: {
                            type: Number,
                            default: 40
                        },
                        hideLocaleSelector: {
                            type: Boolean,
                            default: !1
                        },
                        menuOffsetX: {
                            type: String,
                            default: "0"
                        },
                        menuOffsetY: {
                            type: String,
                            default: "0"
                        },
                        organizations: {
                            type: Array,
                            required: !1
                        },
                        urls: {
                            type: Object,
                            required: !0
                        },
                        user: {
                            type: Object,
                            required: !1
                        },
                        showLabel: {
                            type: Boolean,
                            default: !1
                        },
                        styleProps: {
                            type: Object,
                            default: function() {
                                return {
                                    "--theme-color": "#CDDC39"
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            componentMounted: !1,
                            mdiAccountIcon: l.a,
                            mdiDomainIcon: l.Y,
                            mdiEarthIcon: l.bb
                        }
                    },
                    computed: {
                        accountUrl: function() {
                            return this.user && "".concat(this.urls.STARRGATE_BASE_URL)
                        },
                        approvedOrganizations: function() {
                            var t;
                            return null === (t = this.organizations) || void 0 === t ? void 0 : t.filter((function(t) {
                                return "approved" === t.status
                            }))
                        },
                        genomeUrl: function() {
                            return this.user && "".concat(this.urls.BIO_BASE_URL, "/_a/your-bio")
                        }
                    },
                    mounted: function() {
                        this.componentMounted = !0
                    },
                    methods: {
                        clearMenuState: function() {
                            this.hideLocaleSelector || this.$refs.localeSelector.toggleLocaleSelector(!1)
                        },
                        closeUserMenu: function() {
                            this.user && this.$refs.userMenu.close()
                        },
                        getOrganizationsCareerPageUrl: function(t) {
                            return "/careers/".concat(t)
                        },
                        getOrganizationsGenomeUrl: function(t) {
                            return "/teams/".concat(t)
                        },
                        handleLocaleSelected: function(t) {
                            this.$emit("locale-selected", t)
                        },
                        handleLocaleSelectorDialogOpen: function() {
                            this.closeUserMenu(), this.$emit("locale-selector-dialog-opened")
                        },
                        handleMenuIconClick: function() {
                            this.$root.$emit("iframe-drawer::close::phobos")
                        },
                        redirect: function(path) {
                            window.location.href = path
                        },
                        requestLogout: function() {
                            sessionStorage.clear(), this.$root.$emit("logout-requested")
                        }
                    }
                }),
                z = Object(w.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tdl-user-menu"
                        }, [t.user ? n("md-menu", {
                            ref: "userMenu",
                            staticClass: "tdl-user-menu",
                            attrs: {
                                "md-size": 6,
                                "md-offset-x": t.menuOffsetX,
                                "md-offset-y": t.menuOffsetY,
                                "content-list-dynamic-classes": ["md-list__main-menu"],
                                "content-dynamic-style": t.styleProps
                            },
                            on: {
                                open: function(e) {
                                    return t.handleMenuIconClick()
                                },
                                close: function(e) {
                                    return t.clearMenuState()
                                }
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function() {
                                    return [n("md-ink-ripple"), t._v(" "), n("div", {
                                        staticClass: "tdl-user-menu__entity"
                                    }, [n("tdl-entity-picture", {
                                        staticClass: "tdl-user-menu__entity__picture",
                                        attrs: {
                                            shape: "hexagon",
                                            entity: t.user,
                                            size: t.entitySize,
                                            "default-margin": !1,
                                            "box-shadow": "0px 2px 4px rgba(0,0,0,0.5)"
                                        }
                                    }), t._v(" "), t.showLabel ? n("div", {
                                        staticClass: "tdl-user-menu__entity__label"
                                    }, [t._v("\n          " + t._s(t.$t("You")) + "\n        ")]) : t._e()], 1)]
                                },
                                proxy: !0
                            }, {
                                key: "content",
                                fn: function() {
                                    return [t.componentMounted ? n("div", [n("div", {
                                        staticClass: "tdl-user-menu__user"
                                    }, [n("div", {
                                        staticClass: "user__label md-caption"
                                    }, [n("md-icon", {
                                        staticClass: "user__label--icon",
                                        attrs: {
                                            "icon-svg": t.mdiAccountIcon
                                        }
                                    }), t._v(" "), n("div", {
                                        staticClass: "user__label--text"
                                    }, [t._v("\n              " + t._s(t.$t("Your professional genome:")) + "\n            ")])], 1), t._v(" "), n("a", {
                                        staticClass: "tdl-user-menu__item",
                                        attrs: {
                                            href: t.genomeUrl
                                        }
                                    }, [n("tdl-entity-render", {
                                        attrs: {
                                            entity: t.user,
                                            "image-size": 40,
                                            shape: "hexagon",
                                            href: t.genomeUrl,
                                            hide: ["verified", "weight", "professionalHeadline"]
                                        }
                                    })], 1), t._v(" "), n("hr", {
                                        staticClass: "md-divider item__divider"
                                    }), t._v(" "), n("div", {
                                        staticClass: "user__label md-caption"
                                    }, [n("md-icon", {
                                        staticClass: "user__label--icon",
                                        attrs: {
                                            "icon-svg": t.mdiDomainIcon
                                        }
                                    }), t._v(" "), n("div", {
                                        staticClass: "user__label--text"
                                    }, [t._v("\n              " + t._s(t.$t("Your teams and companies:")) + "\n            ")])], 1), t._v(" "), t._l(t.approvedOrganizations, (function(e) {
                                        return n("a", {
                                            key: e.id,
                                            staticClass: "tdl-user-menu__item",
                                            attrs: {
                                                href: t.getOrganizationsGenomeUrl(e.publicId)
                                            }
                                        }, [n("tdl-entity-render", {
                                            attrs: {
                                                entity: e,
                                                "entity-type": "organization",
                                                "image-size": 40,
                                                shape: "hexagon",
                                                href: t.getOrganizationsGenomeUrl(e.publicId),
                                                hide: ["verified", "weight", "professionalHeadline"]
                                            }
                                        })], 1)
                                    })), t._v(" "), n("a", {
                                        staticClass: "user__action",
                                        attrs: {
                                            href: "/create-team-genome/"
                                        }
                                    }, [t._v("\n            " + t._s(t.$t("Claim or create a team/company genome")) + "\n          ")]), t._v(" "), t.approvedOrganizations && t.approvedOrganizations.length ? n("div", [n("hr", {
                                        staticClass: "md-divider item__divider"
                                    }), t._v(" "), n("div", {
                                        staticClass: "user__label md-caption"
                                    }, [n("md-icon", {
                                        staticClass: "user__label--icon",
                                        attrs: {
                                            "icon-svg": t.mdiEarthIcon
                                        }
                                    }), t._v(" "), n("div", {
                                        staticClass: "user__label--text"
                                    }, [t._v("\n                " + t._s(t.$t("Your career pages:")) + "\n              ")])], 1), t._v(" "), t._l(t.approvedOrganizations, (function(e) {
                                        return n("a", {
                                            key: e.id,
                                            staticClass: "tdl-user-menu__item",
                                            attrs: {
                                                href: t.getOrganizationsCareerPageUrl(e.publicId)
                                            }
                                        }, [n("tdl-entity-render", {
                                            attrs: {
                                                entity: e,
                                                "entity-type": "organization",
                                                "image-size": 40,
                                                shape: "hexagon",
                                                href: t.getOrganizationsCareerPageUrl(e.publicId),
                                                hide: ["verified", "weight", "professionalHeadline"]
                                            }
                                        })], 1)
                                    }))], 2) : t._e(), t._v(" "), n("div", [n("hr", {
                                        staticClass: "md-divider item__divider"
                                    }), t._v(" "), t.hideLocaleSelector ? t._e() : n("div", [n("tdl-locale-selector", {
                                        ref: "localeSelector",
                                        attrs: {
                                            "default-locale": t.defaultLocale,
                                            "style-props": t.styleProps
                                        },
                                        on: {
                                            "close-selector": t.closeUserMenu,
                                            "locale-selected": t.handleLocaleSelected,
                                            "locale-selector-dialog-open": t.handleLocaleSelectorDialogOpen
                                        }
                                    })], 1)])], 2), t._v(" "), n("div", {
                                        staticClass: "tdl-user-menu__actions"
                                    }, [n("a", {
                                        staticClass: "tdl-user-menu__actions--action-item",
                                        attrs: {
                                            href: t.accountUrl
                                        }
                                    }, [t._v("\n            " + t._s(t.$t("Your torre account")) + "\n          ")]), t._v(" "), n("div", {
                                        staticClass: "tdl-user-menu__actions--action-item",
                                        on: {
                                            click: t.requestLogout
                                        }
                                    }, [t._v("\n            " + t._s(t.$t("Sign out")) + "\n          ")])])]) : t._e()]
                                },
                                proxy: !0
                            }], null, !1, 3245630807)
                        }) : t._e()], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-03e0fcfa_0", {
                        source: ".tdl-lazy-loader-hide-background-image[data-v-03e0fcfa]{background-image:none!important;top:0!important}.tdl-user-menu[data-v-03e0fcfa]{height:100%!important;min-width:64px;cursor:pointer}.tdl-user-menu__item[data-v-03e0fcfa]{cursor:pointer;text-decoration:none!important}.tdl-user-menu__item[data-v-03e0fcfa]  .tdl-entity-render .tdl-entity-render__entity-data .tdl-entity-render__entity-name a{color:var(--theme-color,#cddc39)!important}.tdl-user-menu__entity[data-v-03e0fcfa]{display:grid;justify-items:center}.tdl-user-menu__entity__picture[data-v-03e0fcfa]{margin-top:6px;cursor:pointer}.tdl-user-menu__entity__label[data-v-03e0fcfa]{margin-top:6px;font-size:10px}.tdl-user-menu__user[data-v-03e0fcfa]{margin-top:8px;padding-left:16px;padding-right:16px}.tdl-user-menu__user .item__divider[data-v-03e0fcfa]{margin:16px 0!important}.tdl-user-menu__user .user__label[data-v-03e0fcfa]{display:flex;align-items:flex-start;margin-bottom:16px}.tdl-user-menu__user .user__label--text[data-v-03e0fcfa]{font-size:16px!important}.tdl-user-menu__user .user__label--icon[data-v-03e0fcfa]{margin-right:12px;margin-left:0;min-width:24px;width:24px;min-height:24px;height:24px;font-size:24px}.tdl-user-menu__user .user__divider[data-v-03e0fcfa]{margin:24px 0!important}.tdl-user-menu__user .user__action[data-v-03e0fcfa]{display:block;margin:24px 0;cursor:pointer;text-transform:uppercase;text-decoration:none!important;color:var(--theme-color,#cddc39)!important;font-size:14px!important}.tdl-user-menu__actions[data-v-03e0fcfa]{margin-bottom:8px;padding-left:16px;padding-right:16px;align-items:initial;text-transform:uppercase}.tdl-user-menu__actions--action[data-v-03e0fcfa]{cursor:pointer;display:block;text-decoration:none!important;color:var(--theme-color,#cddc39)!important;margin-top:24px;font-size:14px!important}.tdl-user-menu__actions--action-item[data-v-03e0fcfa]{cursor:pointer;display:block;text-decoration:none!important;color:var(--theme-color,#cddc39)!important;margin-top:16px;font-size:14px!important}[data-v-03e0fcfa] .tdl-entity-render{padding:0!important}[data-v-03e0fcfa] .tdl-entity-render__picture{margin-right:12px!important}[data-v-03e0fcfa] .tdl-entity-render__entity-name a{color:#cddc39!important}",
                        map: void 0,
                        media: void 0
                    })
                }), C, "data-v-03e0fcfa", !1, undefined, !1, x.a, void 0, void 0),
                S = o.default.extend({
                    name: "tdl-user-actions",
                    components: {
                        TmdButton: r.a,
                        TmdIcon: d.a,
                        TdlLocaleSelector: c.a,
                        TdlUserMenu: z
                    },
                    props: {
                        defaultLocale: {
                            type: String,
                            required: !0
                        },
                        hideLocaleSelector: {
                            type: Boolean,
                            default: !1
                        },
                        mobileView: {
                            type: Boolean,
                            default: !1
                        },
                        organizations: {
                            type: Array,
                            required: !1
                        },
                        urls: {
                            type: Object,
                            required: !0
                        },
                        user: {
                            type: Object,
                            required: !1
                        },
                        showDivider: {
                            type: Boolean,
                            default: !1
                        },
                        styleProps: {
                            type: Object,
                            default: function() {
                                return {
                                    "--theme-color": "#CDDC39"
                                }
                            }
                        },
                        menuOffsetY: {
                            type: String,
                            default: "67"
                        },
                        needsIconMargin: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    methods: {
                        handleLocaleSelected: function(t) {
                            this.$emit("locale-selected", t)
                        },
                        handleLocaleSelectorDialogOpen: function() {
                            this.$emit("locale-selector-dialog-opened")
                        },
                        signIn: function() {
                            this.$root.$emit("login-requested")
                        }
                    }
                }),
                I = Object(w.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tdl-user-actions"
                        }, [t.showDivider ? n("div", {
                            staticClass: "actions-divider"
                        }) : t._e(), t._v(" "), t.user ? n("div", {
                            staticClass: "user-menu"
                        }, [n("tdl-user-menu", {
                            ref: "userMenu",
                            attrs: {
                                "default-locale": t.defaultLocale,
                                "entity-size": 28,
                                "hide-locale-selector": t.hideLocaleSelector,
                                "menu-offset-y": t.menuOffsetY,
                                organizations: t.organizations,
                                urls: t.urls,
                                user: t.user,
                                "style-props": t.styleProps,
                                "show-label": ""
                            },
                            on: {
                                "locale-selected": t.handleLocaleSelected,
                                "locale-selector-dialog-open": t.handleLocaleSelectorDialogOpen
                            }
                        })], 1) : n("div", {
                            class: t.mobileView ? "no-user--small" : "no-user"
                        }, [n("tmd-button", {
                            staticClass: "sign-in tmc-theme tmd-caption",
                            attrs: {
                                "min-width": t.mobileView ? "56px" : "64px",
                                stacked: "",
                                "md-theme": "dark"
                            },
                            on: {
                                click: t.signIn
                            },
                            scopedSlots: t._u([{
                                key: "prepend",
                                fn: function() {
                                    return [n("tmd-icon", {
                                        class: [{
                                            icon: t.needsIconMargin
                                        }],
                                        attrs: {
                                            fill: ""
                                        }
                                    }, [t._v("\n          login\n        ")])]
                                },
                                proxy: !0
                            }], null, !1, 1288503116)
                        }, [t._v("\n      " + t._s(t.$t("Sign in")) + "\n    ")]), t._v(" "), t.hideLocaleSelector ? t._e() : n("tdl-locale-selector", {
                            ref: "localeSelector",
                            attrs: {
                                "default-locale": t.defaultLocale,
                                "style-props": t.styleProps,
                                "menu-mode": ""
                            },
                            on: {
                                "locale-selected": t.handleLocaleSelected,
                                "locale-selector-dialog-open": t.handleLocaleSelectorDialogOpen
                            }
                        })], 1)])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-c23bd2d4_0", {
                        source: ".tdl-user-actions[data-v-c23bd2d4]{height:100%!important;display:contents}.tdl-user-actions .no-user[data-v-c23bd2d4]{display:flex;align-items:center;height:100%}.tdl-user-actions .no-user--small[data-v-c23bd2d4]{display:flex;margin-right:-8px;margin-left:-4px}.tdl-user-actions .sign-in[data-v-c23bd2d4]{padding:0;margin:0;font-size:10px;text-transform:unset;color:rgb(var(--tmd-theme-primary))!important;height:100%}.tdl-user-actions .sign-in .icon[data-v-c23bd2d4]{margin-bottom:4px}.tdl-user-actions .sign-in[data-v-c23bd2d4]:hover{background-color:inherit}.tdl-user-actions .user-menu[data-v-c23bd2d4]{height:100%!important;margin-right:-10px}.tdl-user-actions .divider[data-v-c23bd2d4]{display:flex;width:1px;height:40px;background:rgba(255,255,255,.65);margin:0 8px}.actions-divider[data-v-c23bd2d4]{display:flex;width:1px;height:40px;background:rgba(255,255,255,.65);margin:0 0 0 8px}",
                        map: void 0,
                        media: void 0
                    })
                }), S, "data-v-c23bd2d4", !1, undefined, !1, x.a, void 0, void 0)
        }
    }
]);