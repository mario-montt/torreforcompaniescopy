! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "af39c8a1-4874-4d5b-8be0-463a744db0e8", t._sentryDebugIdIdentifier = "sentry-dbid-af39c8a1-4874-4d5b-8be0-463a744db0e8")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [82], {
        257: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            }));
            var o = n(3),
                l = n(4),
                r = {
                    name: "tdl-overlay"
                },
                d = Object(o.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement;
                        return (t._self._c || e)("div", {
                            staticClass: "tdl-overlay"
                        }, [t._t("default")], 2)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-59971886_0", {
                        source: ".tdl-overlay{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}",
                        map: void 0,
                        media: void 0
                    })
                }), r, undefined, !1, undefined, !1, l.a, void 0, void 0)
        },
        298: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return S
            }));
            var o = n(11),
                l = (n(53), n(45), n(15), n(33), n(34), n(65), n(257)),
                r = n(35),
                d = n(204),
                c = n(210),
                h = n(205),
                m = n(211),
                f = n(27),
                _ = n(184),
                y = n(256),
                v = n(105),
                w = n(82),
                x = n(3),
                I = n(4),
                C = {
                    name: "tdl-fullscreendialog",
                    components: {
                        MdButton: r.a,
                        MdDialog: d.a,
                        MdDialogActions: c.a,
                        MdDialogContent: h.a,
                        MdDialogTitle: m.a,
                        MdIcon: f.a,
                        MdToolbar: _.a,
                        MdSpinner: y.a,
                        MdWhiteframe: v.a,
                        TdlOverlay: l.a
                    },
                    props: {
                        dialogAlias: {
                            type: String,
                            required: !1
                        },
                        dialogOkText: {
                            type: String,
                            required: !1
                        },
                        dialogCancelText: {
                            type: String,
                            required: !1
                        },
                        dialogTitle: {
                            type: String,
                            required: !1
                        },
                        dialogSubtitle: {
                            type: String,
                            required: !1
                        },
                        dialogSubmitButton: {
                            type: String,
                            required: !1,
                            default: "visible",
                            validator: function(t) {
                                return ["disabled", "hidden", "visible", "fake-disabled"].includes(t)
                            }
                        },
                        dialogContentBackground: {
                            type: String,
                            required: !1
                        },
                        dialogShutdownTransition: {
                            type: Boolean,
                            required: !1,
                            default: !0
                        },
                        dialogProgressBar: {
                            type: Boolean,
                            default: !1
                        },
                        dialogProcessing: {
                            type: Boolean,
                            default: !1
                        },
                        desktopFullScreen: {
                            type: Boolean,
                            default: !1
                        },
                        plainView: {
                            type: Boolean,
                            default: !1
                        },
                        closable: {
                            type: Boolean,
                            default: !0
                        },
                        allowDialogActionsInMobile: {
                            type: Boolean,
                            default: !1
                        },
                        alwaysClose: {
                            type: Boolean,
                            default: !1
                        },
                        allowGoBack: {
                            type: Boolean,
                            default: !1
                        },
                        shouldCloseDialogAfterConfirmation: {
                            type: Function,
                            default: function() {
                                return !0
                            }
                        },
                        outsideClosable: {
                            type: Boolean,
                            default: !0
                        },
                        visibleOnLoad: {
                            type: Boolean,
                            default: !1
                        },
                        showTitleDividerLine: {
                            type: Boolean,
                            default: !0
                        },
                        showActionDividerLine: {
                            type: Boolean,
                            default: !0
                        },
                        mdHideOverflow: {
                            type: Boolean,
                            default: !0
                        },
                        closeBeforeDestroy: {
                            type: Boolean,
                            default: !0
                        },
                        escapeClosable: {
                            type: Boolean,
                            default: !0
                        },
                        shouldShowHelpSupportButton: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            opened: !1,
                            contentHeight: 0,
                            currentDialogContent: null,
                            mdiArrowLeftIcon: null,
                            mdiCloseIcon: null,
                            mdiHelpCircleIcon: null
                        }
                    },
                    computed: {
                        cancellable: function() {
                            return !!this.dialogCancelText
                        },
                        showProgressBar: function() {
                            return this.dialogProcessing || this.dialogProgressBar
                        },
                        closeDialogIcon: function() {
                            return this.allowGoBack ? this.mdiArrowLeftIcon : this.mdiCloseIcon
                        }
                    },
                    created: function() {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var o, l, r, d;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.e(1).then(n.bind(null, 230));
                                    case 2:
                                        o = e.sent, l = o.mdiArrowLeft, r = o.mdiClose, d = o.mdiHelpCircle, t.mdiArrowLeftIcon = l, t.mdiCloseIcon = r, t.mdiHelpCircleIcon = d;
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    mounted: function() {
                        this.visibleOnLoad && this.open()
                    },
                    methods: {
                        buttonClicked: function() {
                            "disabled" === this.dialogSubmitButton && this.$emit("disabled-clicked")
                        },
                        openDialog: function() {
                            this.$refs.dialog.open()
                        },
                        closeDialog: function() {
                            this.$refs.dialog.close()
                        },
                        cancelDialog: function() {
                            this.$emit("cancel"), this.alwaysClose && this.closeDialog()
                        },
                        actionDialog: function() {
                            this.$emit("ok")
                        },
                        open: function() {
                            this.opened = !0, this.$emit("on-open"), this.$root.$emit("help-fab::display", !1), this.logScroll()
                        },
                        logScroll: function() {
                            this.currentDialogContent = this.$refs.dialogContent.$el, this.contentHeight = this.currentDialogContent.scrollHeight - this.currentDialogContent.offsetHeight, this.currentDialogContent.addEventListener("scroll", this.onScrollContent, Object(w.a)())
                        },
                        onScrollContent: function() {
                            this.contentHeight <= this.currentDialogContent.scrollTop && (this.$emit("end-reached"), this.stopLogScroll())
                        },
                        close: function() {
                            var t = this;
                            this.opened = !1, this.$emit("on-close"), this.stopLogScroll(), setTimeout((function() {
                                t.$root.$emit("help-fab::display", !0)
                            }), 200)
                        },
                        stopLogScroll: function() {
                            this.currentDialogContent.removeEventListener("scroll", this.onScrollContent, Object(w.a)())
                        },
                        handleHelpFabClick: function() {
                            this.$root.$emit("help-fab::open")
                        }
                    }
                },
                S = Object(x.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("md-dialog", {
                            ref: "dialog",
                            class: ["tdl-full-screen-dialog", {
                                "plain-view": t.plainView
                            }, {
                                "desktop-full-screen": t.desktopFullScreen
                            }],
                            attrs: {
                                "md-shutdown-transition": t.dialogShutdownTransition,
                                "md-click-outside-to-close": !t.dialogProcessing && t.closable && t.outsideClosable,
                                "md-esc-to-close": !t.dialogProcessing && t.closable && t.escapeClosable,
                                "should-close-dialog-after-confirmation": t.shouldCloseDialogAfterConfirmation,
                                "visible-on-load": t.visibleOnLoad,
                                "md-hide-overflow": t.mdHideOverflow,
                                "close-before-destroy": t.closeBeforeDestroy
                            },
                            on: {
                                open: t.open,
                                close: t.close
                            },
                            scopedSlots: t._u([{
                                key: "banner",
                                fn: function() {
                                    return [t._t("banner")]
                                },
                                proxy: !0
                            }], null, !0)
                        }, [t.dialogProcessing ? n("div", {
                            staticClass: "dialog-overlay"
                        }) : t._e(), t._v(" "), n("md-whiteframe", {
                            staticClass: "md-large",
                            attrs: {
                                "md-elevation": "1"
                            }
                        }, [n("md-toolbar", {
                            staticClass: "top-actions-toolbar"
                        }, [t.closable ? n("md-button", {
                            staticClass: "md-icon-button",
                            nativeOn: {
                                click: function(e) {
                                    return t.cancelDialog()
                                }
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.closeDialogIcon
                            }
                        })], 1) : t._e(), t._v(" "), n("div", {
                            staticClass: "dialog-titles"
                        }, [t.dialogSubtitle ? n("p", {
                            staticClass: "md-caption modal-title-text"
                        }, [t._v("\n          " + t._s(t.dialogSubtitle) + "\n        ")]) : t._e(), t._v(" "), t.dialogTitle ? n("p", {
                            staticClass: "md-title modal-title-text"
                        }, [t._v("\n          " + t._s(t.dialogTitle) + "\n        ")]) : t._e()]), t._v(" "), t.shouldShowHelpSupportButton ? n("md-button", {
                            staticClass: "md-icon-button help-btn",
                            nativeOn: {
                                click: function(e) {
                                    return t.handleHelpFabClick()
                                }
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiHelpCircleIcon
                            }
                        })], 1) : t._e(), t._v(" "), t._t("extra-actions"), t._v(" "), t._t("toolbar-actions", (function() {
                            return [n("md-button", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: "hidden" !== t.dialogSubmitButton,
                                    expression: "dialogSubmitButton !== 'hidden'"
                                }],
                                class: ["md-primary md-raised top-action", {
                                    "md-fake-disabled": "fake-disabled" === t.dialogSubmitButton
                                }],
                                attrs: {
                                    disabled: "disabled" === t.dialogSubmitButton
                                },
                                nativeOn: {
                                    click: function(e) {
                                        return t.actionDialog()
                                    }
                                }
                            }, [t._v("\n          " + t._s(t.dialogOkText) + "\n        ")])]
                        }))], 2)], 1), t._v(" "), n("md-dialog-title", {
                            class: ["md-caption modal-title", {
                                "show-title-divider-line": t.showTitleDividerLine
                            }]
                        }, [n("div", {
                            staticClass: "modal-title-group",
                            class: {
                                "plain-view": t.plainView
                            }
                        }, [t.closable && t.allowGoBack ? n("md-button", {
                            staticClass: "md-icon-button",
                            nativeOn: {
                                click: function(e) {
                                    return t.cancelDialog()
                                }
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiArrowLeftIcon
                            }
                        })], 1) : t._e(), t._v(" "), n("div", {
                            staticClass: "dialog-titles"
                        }, [t.dialogSubtitle ? n("p", {
                            staticClass: "md-caption dialog-subtitle"
                        }, [t._v("\n          " + t._s(t.dialogSubtitle) + "\n        ")]) : t._e(), t._v(" "), t.dialogTitle ? n("p", [t._v("\n          " + t._s(t.dialogTitle) + "\n        ")]) : t._e()]), t._v(" "), t.shouldShowHelpSupportButton ? n("md-button", {
                            staticClass: "md-icon-button help-btn",
                            nativeOn: {
                                click: function(e) {
                                    return t.handleHelpFabClick()
                                }
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiHelpCircleIcon
                            }
                        })], 1) : t._e(), t._v(" "), n("div", {
                            staticClass: "modal-title__extra-actions"
                        }, [t._t("extra-actions")], 2), t._v(" "), t.closable && !t.allowGoBack ? n("md-button", {
                            staticClass: "md-icon-button",
                            nativeOn: {
                                click: function(e) {
                                    return t.cancelDialog()
                                }
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiCloseIcon
                            }
                        })], 1) : t._e()], 1), t._v(" "), t._t("title-extra")], 2), t._v(" "), n("md-dialog-content", {
                            ref: "dialogContent",
                            style: {
                                background: t.dialogContentBackground
                            }
                        }, [t._t("default"), t._v(" "), t.showProgressBar ? n("tdl-overlay", [n("md-spinner", {
                            attrs: {
                                "md-indeterminate": ""
                            }
                        })], 1) : t._e()], 2), t._v(" "), t.dialogCancelText || t.$slots["dialog-actions"] || t.dialogOkText ? n("md-dialog-actions", {
                            class: {
                                "always-visible": t.allowDialogActionsInMobile, "show-action-divider-line": t.showActionDividerLine
                            }
                        }, [n("div", {
                            class: [t.dialogCancelText ? "has-cancel-button" : "", "md-dialog-actions__group"],
                            on: {
                                click: function(e) {
                                    return t.buttonClicked()
                                }
                            }
                        }, [t.cancellable ? n("md-button", {
                            staticClass: "md-error",
                            nativeOn: {
                                click: function(e) {
                                    return t.cancelDialog()
                                }
                            }
                        }, [t._v("\n        " + t._s(t.dialogCancelText) + "\n      ")]) : t._e(), t._v(" "), t._t("dialog-actions", (function() {
                            return [n("md-button", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: "hidden" !== t.dialogSubmitButton,
                                    expression: "dialogSubmitButton !== 'hidden'"
                                }],
                                class: ["md-primary md-raised dialog-actions-done", {
                                    "md-fake-disabled": "fake-disabled" === t.dialogSubmitButton
                                }],
                                attrs: {
                                    disabled: "disabled" === t.dialogSubmitButton
                                },
                                nativeOn: {
                                    click: function(e) {
                                        return e.stopPropagation(), t.actionDialog()
                                    }
                                }
                            }, [t._v("\n          " + t._s(t.dialogOkText) + "\n        ")])]
                        }))], 2)]) : t._e()], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-c00ec58c_0", {
                        source: ".tdl-full-screen-dialog .md-icon-button{color:rgba(255,255,255,.65)}.tdl-full-screen-dialog .md-dialog-title{border-bottom:none!important}.tdl-full-screen-dialog .md-dialog-title .dialog-titles{color:rgba(255,255,255,.9)}.tdl-full-screen-dialog .md-dialog{max-width:680px;width:100%;overflow-y:visible;overflow-x:hidden;max-height:85%}.tdl-full-screen-dialog .md-dialog ::-webkit-scrollbar{-webkit-appearance:none;width:6px}.tdl-full-screen-dialog .md-dialog ::-webkit-scrollbar-thumb{border-radius:6px}.tdl-full-screen-dialog .top-actions-toolbar{display:none}.tdl-full-screen-dialog .top-actions-toolbar+.md-progress{display:none}.tdl-full-screen-dialog .top-actions-toolbar .top-action{flex-shrink:0}.tdl-full-screen-dialog.desktop-full-screen .md-dialog{max-width:100%;max-height:100%;width:100%;height:100%;position:absolute}.tdl-full-screen-dialog.plain-view .md-dialog-title{border-bottom:0;margin-bottom:0}.tdl-full-screen-dialog .dialog-titles{display:flex;flex-direction:column;justify-content:space-between;flex-grow:1;overflow:hidden}.tdl-full-screen-dialog .dialog-titles .dialog-subtitle{margin-bottom:4px}.tdl-full-screen-dialog .modal-title-group{display:flex;justify-content:space-between;align-items:center}.tdl-full-screen-dialog .modal-title-group .md-icon-button{display:none}@media (min-width:660px){.tdl-full-screen-dialog .modal-title-group.plain-view .md-icon-button{display:block;margin:0;padding:0}.tdl-full-screen-dialog .modal-title-group.plain-view .md-button:first-child{margin-left:0;margin-right:16px}}.tdl-full-screen-dialog .md-dialog-content{padding:8px;padding-bottom:24px;min-height:88px}.tdl-full-screen-dialog .md-dialog-content .md-input{font-size:16px}.tdl-full-screen-dialog .dialog-overlay{position:fixed;top:0;bottom:0;left:0;right:0;z-index:100}.tdl-full-screen-dialog .modal-title{border-color:rgba(255,255,255,.12)!important;color:rgba(255,255,255,.9);display:block;font-weight:600;margin-bottom:0;padding:14px 16px 14px 16px;border-bottom:0;position:relative}.tdl-full-screen-dialog .modal-title.show-title-divider-line{border-bottom:1px solid}.tdl-full-screen-dialog .modal-title .md-progress{position:absolute;bottom:0;left:0;z-index:101}.tdl-full-screen-dialog .modal-title__extra-actions{margin-top:-16px}.tdl-full-screen-dialog .md-dialog-actions{z-index:9}.tdl-full-screen-dialog .md-dialog-actions::before{height:0;background-color:rgba(255,255,255,.12)}.tdl-full-screen-dialog .md-dialog-actions__group{width:100%;display:flex;align-items:center;justify-content:flex-end}.tdl-full-screen-dialog .md-dialog-actions .has-cancel-button{justify-content:space-between}.tdl-full-screen-dialog .md-dialog-actions .has-cancel-button .md-error{color:#cf6679}.tdl-full-screen-dialog .md-dialog-actions.show-action-divider-line::before{height:1px}@media (max-width:720px){.tdl-full-screen-dialog .dialog-overlay+.md-whiteframe{z-index:unset}.tdl-full-screen-dialog .md-dialog{position:absolute;max-width:100%;max-height:100%;top:0;left:0;width:100%;height:100%}.tdl-full-screen-dialog .md-dialog .modal-title{display:none}.tdl-full-screen-dialog .md-dialog .md-dialog-actions:not(.always-visible){display:none}.tdl-full-screen-dialog .dialog-actions-done{display:none}.tdl-full-screen-dialog .md-toolbar .md-title{font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-left:8px;margin-right:18px}.tdl-full-screen-dialog .top-actions-toolbar{display:flex;flex-wrap:nowrap;align-items:center}.tdl-full-screen-dialog .top-actions-toolbar+.md-progress{display:block;z-index:101}}.tdl-full-screen-dialog .help-btn{margin-right:8px}",
                        map: void 0,
                        media: void 0
                    })
                }), C, undefined, !1, undefined, !1, I.a, void 0, void 0)
        },
        304: function(t, e, n) {
            "use strict";
            (function(t) {
                n.d(e, "a", (function() {
                    return O
                }));
                var o = n(11),
                    l = n(13),
                    r = n(21),
                    d = (n(53), n(15), n(33), n(34), n(180), n(28), n(32), n(52), n(83), n(487), n(17)),
                    c = n(35),
                    h = n(305),
                    m = n(27),
                    f = n(41),
                    _ = n(156),
                    y = n(208),
                    v = n(209),
                    w = n(117),
                    x = n(298),
                    I = n(154),
                    C = n(3),
                    S = n(4),
                    k = {
                        en: {
                            "Learn more about signals": "Learn more about signals",
                            "No signal": "No signal",
                            "You haven’t signaled the person or organization yet": "You haven’t signaled the person or organization yet",
                            Let: "Let",
                            "know you may consider working with them in the future.": "know you may consider working with them in the future.",
                            "know you may consider working together in the future.": "know you may consider working together in the future.",
                            "You may consider working with them in the future": "You may consider working with them in the future",
                            "All notifications": "All notifications",
                            "Relevant to you": "Relevant to you",
                            None: "None",
                            Sending: "Sending",
                            Signaled: "Signaled"
                        },
                        es: {
                            "Learn more about signals": "Conoce más sobre los signals",
                            "No signal": "No hay signal",
                            "You haven’t signaled the person or organization yet": "Aún no has enviado signals a la persona u organización",
                            Let: "Haz que",
                            "know you may consider working with them in the future.": "sepan que considerarías trabajar con ellos en el futuro.",
                            "know you may consider working together in the future.": "sepa que considerarías trabajar juntos(as) en el futuro.",
                            "You may consider working with them in the future": "Tú considerarías trabajar con ellos en el futuro",
                            "All notifications": "Todas las notificaciones",
                            "Relevant to you": "Relevantes para ti",
                            None: "Ninguna",
                            Sending: "Enviando",
                            Signaled: "Signal enviado"
                        }
                    },
                    L = function() {
                        function t() {
                            Object(l.a)(this, t), this.mdiBellOff = null, this.mdiBellOutline = null, this.mdiBellRing = null
                        }
                        var e;
                        return Object(r.a)(t, [{
                            key: "initialize",
                            value: (e = Object(o.a)(regeneratorRuntime.mark((function t() {
                                var e, o, l, r;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, n.e(1).then(n.bind(null, 230));
                                        case 2:
                                            e = t.sent, o = e.mdiBellOff, l = e.mdiBellOutline, r = e.mdiBellRing, this.mdiBellOff = o, this.mdiBellOutline = l, this.mdiBellRing = r;
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            }))), function() {
                                return e.apply(this, arguments)
                            })
                        }, {
                            key: "signalStates",
                            value: function(t) {
                                return [{
                                    type: "no-signal",
                                    buildButtonText: function(t) {
                                        return "signal ".concat(t).trim()
                                    },
                                    buildTooltipText: function(e) {
                                        return "organization" === e.type ? "".concat(t.t("Let"), " ").concat(e.name, " ").concat(t.t("know you may consider working with them in the future.")) : "".concat(t.t("Let"), " ").concat(e.name, " ").concat(t.t("know you may consider working together in the future."))
                                    }
                                }, {
                                    type: "signal",
                                    buildButtonText: function() {
                                        return t.t("Signaled")
                                    }
                                }]
                            }
                        }, {
                            key: "notificationStates",
                            value: function(t) {
                                return [{
                                    type: "all",
                                    menuTitle: t.t("All notifications"),
                                    menuIcon: this.mdiBellRing,
                                    iconHighlighted: !0
                                }, {
                                    type: "relevant",
                                    menuTitle: t.t("Relevant to you"),
                                    menuIcon: this.mdiBellOutline,
                                    iconHighlighted: !0
                                }, {
                                    type: "none",
                                    menuTitle: t.t("None"),
                                    menuIcon: this.mdiBellOff,
                                    iconHighlighted: !1
                                }]
                            }
                        }]), t
                    }(),
                    $ = {
                        type: "loading",
                        buttonText: "Sending"
                    },
                    B = {
                        name: "tdl-signal-button",
                        components: {
                            MdButton: c.a,
                            MdChips: h.a,
                            MdIcon: m.a,
                            MdInkRipple: f.a,
                            MdMenu: _.a,
                            MdMenuContent: y.a,
                            MdMenuItem: v.a,
                            MdTooltip: w.a,
                            TdlFullscreendialog: x.a
                        },
                        mixins: [I.a],
                        props: {
                            stateType: {
                                type: 0,
                                required: !0
                            },
                            notificationsType: {
                                type: 0,
                                required: !0
                            },
                            entityName: {
                                type: String,
                                required: !0
                            },
                            entityType: {
                                type: String,
                                default: "person"
                            },
                            showEntityNameOnButton: {
                                type: Boolean,
                                required: !1
                            },
                            username: {
                                type: String,
                                required: !0
                            },
                            openNotificationSettings: {
                                type: Boolean,
                                required: !1
                            },
                            openNotificationSettingsInPosition: {
                                type: Boolean,
                                required: !1
                            },
                            menuTitle: {
                                type: String,
                                required: !1
                            },
                            styleProps: {
                                type: Object,
                                default: function() {
                                    return {}
                                }
                            },
                            theme: {
                                type: String,
                                required: !1,
                                default: "lime500"
                            },
                            menuStyles: {
                                type: Object,
                                default: function() {
                                    return {
                                        "--theme-color": "#CDDC39"
                                    }
                                }
                            },
                            closeOnSelect: {
                                type: Boolean,
                                default: !0
                            },
                            hasBackdrop: {
                                type: Boolean,
                                default: !0
                            },
                            mini: {
                                type: Boolean,
                                default: !1
                            },
                            disabled: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data: function() {
                            return {
                                currentState: 0,
                                currentNotificationState: 1,
                                isComponentLoaded: !0,
                                menuPosition: {
                                    x: 0,
                                    y: 0
                                },
                                mdiTagIcon: null,
                                mdiMenuDownIcon: null,
                                mdiHumanGreetingIcon: d.ub,
                                urls: {
                                    BIO_BASE_URL: t.env.VUE_APP_BIO_SELF_URL,
                                    DISCOVERY_BASE_URL: t.env.VUE_APP_BIO_DISCOVERY_URL,
                                    HOMEPAGES_BASE_URL: t.env.VUE_APP_BIO_HOMEPAGES_URL,
                                    REMOTER_BASE_URL: t.env.VUE_APP_BIO_REMOTER_URL,
                                    STARRGATE_BASE_URL: t.env.VUE_APP_BIO_STARRGATE_URL,
                                    TORRE_ABOUT_BASE_URL: t.env.VUE_APP_BIO_TORRE_ABOUT_BASE_URL,
                                    TORRE_PROTOCOL_BASE_URL: t.env.VUE_APP_BIO_TORRE_PROTOCOL_BASE_URL
                                },
                                TORRE_DEFAULT_LOCALE: t.env.VUE_APP_BIO_DEFAULT_LOCALE,
                                isSending: !1,
                                states: new L
                            }
                        },
                        computed: {
                            buttonText: function() {
                                return this.signalStates[this.currentState].buildButtonText ? this.signalStates[this.currentState].buildButtonText(this.showEntityNameOnButton && !this.hasSignal ? this.entityName : "") : ""
                            },
                            loadingState: function() {
                                return $
                            },
                            signalStates: function() {
                                return this.states.signalStates(this.$i18n)
                            },
                            notificationStates: function() {
                                return this.states.notificationStates(this.$i18n)
                            },
                            isLoading: function() {
                                return "loading" === this.stateType || !this.isComponentLoaded
                            },
                            isSignalButtonDisabled: function() {
                                return this.disabled || this.isSending || !this.isComponentLoaded
                            },
                            tooltipText: function() {
                                if (this.signalStates[this.currentState].buildTooltipText) {
                                    var t = "organization" === this.entityType ? this.entityName : this.entityName.replace(/ .*/, "");
                                    return this.signalStates[this.currentState].buildTooltipText({
                                        name: t,
                                        type: this.entityType
                                    })
                                }
                                return ""
                            },
                            hasSignal: function() {
                                return 0 !== this.currentState && !this.isLoading
                            },
                            aboutSignalsUrl: function() {
                                return "".concat(this.urls.DISCOVERY_BASE_URL, "/signals/home#about")
                            },
                            cssVariables: function() {
                                return {
                                    "--theme": this.theme
                                }
                            },
                            showIcon: function() {
                                return !this.hasSignal
                            },
                            showMiniIcon: function() {
                                return this.ProcessMixin_isClient && this.mini
                            }
                        },
                        watch: {
                            stateType: {
                                handler: function(t) {
                                    this.isComponentLoaded = "loading" !== t, this.isComponentLoaded && this.changeToStateByType(t)
                                },
                                immediate: !0
                            },
                            notificationsType: {
                                handler: function(t) {
                                    this.changeToNotificationStateByType(t)
                                },
                                immediate: !0
                            }
                        },
                        created: function() {
                            var t = this;
                            return Object(o.a)(regeneratorRuntime.mark((function e() {
                                var o, l, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, n.e(1).then(n.bind(null, 230));
                                        case 2:
                                            return o = e.sent, l = o.mdiMenuDown, r = o.mdiTag, e.next = 7, t.states.initialize();
                                        case 7:
                                            t.mdiTagIcon = r, t.mdiMenuDownIcon = l, t.$root.$emit("update-locale-string", k);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        mounted: function() {
                            var t = this;
                            this.openNotificationSettings && this.$nextTick((function() {
                                t.$refs.menuTrigger.click()
                            }))
                        },
                        methods: {
                            openMenu: function() {
                                this.openNotificationSettingsInPosition && this.$refs.menu.open()
                            },
                            changeToNextState: function() {
                                this.isSending = !0, this.updateState(this.currentState === this.signalStates.length - 1 ? 0 : this.currentState + 1)
                            },
                            changeToStateByType: function(t) {
                                this.updateState(this.signalStates.findIndex((function(e) {
                                    return e.type === t
                                })), !1)
                            },
                            changeToNotificationStateByType: function(t) {
                                this.updateNotificationState(this.notificationStates.findIndex((function(e) {
                                    return e.type === t
                                })), !1)
                            },
                            updateState: function(t) {
                                var e = this,
                                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; - 1 !== t && t !== this.currentState && ("no-signal" === this.signalStates[t].type && (this.currentNotificationState = 1, this.$emit("close")), this.$nextTick((function() {
                                    e.currentState = t, e.updateMenuPosition(), e.isSending = !1
                                })), n && this.$emit("state-update", this.signalStates[t].type))
                            },
                            updateNotificationState: function(t) {
                                var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]; - 1 !== t && t !== this.currentNotificationState && (this.currentNotificationState = t, this.$nextTick(this.updateMenuPosition), e && this.$emit("notifications-type-update", this.notificationStates[t].type))
                            },
                            updateMenuPosition: function() {
                                var t = this.$refs.signalButton ? this.$refs.signalButton.getBoundingClientRect().width : 0,
                                    e = this.$refs.menuTrigger ? this.$refs.menuTrigger.getBoundingClientRect().width : 0;
                                this.menuPosition = {
                                    x: 8 - (t - e) - (240 - t) / 2,
                                    y: 56
                                }
                            },
                            handleMenuClosed: function() {
                                this.$emit("close"), this.updateMenuPosition()
                            },
                            handleMenuOpened: function() {
                                this.$emit("open")
                            },
                            aboutSignals: function() {
                                this.$refs.menuTrigger.click(), this.$emit("about-signals")
                            }
                        }
                    },
                    T = B,
                    O = Object(C.a)({
                        render: function() {
                            var t = this,
                                e = t.$createElement,
                                n = t._self._c || e;
                            return n("div", {
                                class: ["tdl-signal", {
                                    "tdl-signal-mini": t.mini
                                }]
                            }, [t.showMiniIcon ? n("div", {
                                class: ["tdl-mini-signal-button", {
                                    "tdl-mini-signal-button--signaled": t.hasSignal
                                }]
                            }, [n("md-button", {
                                class: ["md-button", "tdl-mini-signal-button__signal", {
                                    "tdl-mini-signal-button__signal--signaled": t.hasSignal
                                }],
                                attrs: {
                                    disabled: t.isSignalButtonDisabled
                                },
                                on: {
                                    click: t.changeToNextState
                                }
                            }, [n("md-icon", {
                                attrs: {
                                    "icon-svg": t.mdiHumanGreetingIcon
                                }
                            })], 1)], 1) : n("div", {
                                ref: "signalButton",
                                class: ["tdl-signal-button", {
                                    "tdl-signal-button--simple": 0 === t.currentState,
                                    "tdl-signal-button--fixed-width": t.styleProps.fixedWidth,
                                    "tdl-signal-button--extended": t.styleProps.extendedButton
                                }],
                                style: t.cssVariables
                            }, [n("md-ink-ripple"), t._v(" "), n("md-button", {
                                class: ["md-raised tdl-signal-button__signal-button", {
                                    "md-primary tdl-signal-button__signal-button--simple": 0 === t.currentState,
                                    "tdl-signal-button--inverted": t.styleProps.inverted,
                                    "tdl-signal-button__signal-button--elevated": t.styleProps.elevated && 0 !== t.currentState,
                                    "tdl-signal-button__signal-button--unsignaled": 0 !== t.currentState && !t.hasSignal
                                }],
                                attrs: {
                                    disabled: t.isSignalButtonDisabled,
                                    theme: t.theme,
                                    "border-style": 0 === t.currentState ? "md-raised--thinner-border" : "none"
                                },
                                on: {
                                    click: t.changeToNextState
                                }
                            }, [n("md-tooltip", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.tooltipText && !t.isLoading,
                                    expression: "tooltipText && !isLoading"
                                }],
                                staticClass: "tdl-signal-button__tooltip"
                            }, [t._v("\n        " + t._s(t.tooltipText) + "\n      ")]), t._v(" "), t.showIcon ? n("md-icon", {
                                attrs: {
                                    "icon-svg": t.mdiHumanGreetingIcon
                                }
                            }) : t._e(), t._v("\n      " + t._s(t.isSending ? t.$t(t.loadingState.buttonText) : t.buttonText) + "\n    ")], 1)], 1), t._v(" "), t.hasSignal || t.openNotificationSettings ? n("md-menu", {
                                ref: "menu",
                                class: ["tdl-signal__menu", {
                                    "tdl-signal__menu-mini": t.mini && t.hasSignal
                                }],
                                attrs: {
                                    "md-size": "5",
                                    "md-offset-x": t.menuPosition.x,
                                    "md-offset-y": t.menuPosition.y,
                                    "md-transparent-backdrop": !t.openNotificationSettings,
                                    "md-close-on-select": t.closeOnSelect,
                                    "md-has-backdrop": t.hasBackdrop,
                                    "content-dynamic-classes": ["tdl-menu-signal-content__menu"],
                                    "content-dynamic-style": t.menuStyles
                                },
                                on: {
                                    open: t.handleMenuOpened,
                                    close: t.handleMenuClosed,
                                    "menu-configured": t.openMenu
                                },
                                scopedSlots: t._u([{
                                    key: "default",
                                    fn: function() {
                                        return [n("button", {
                                            ref: "menuTrigger",
                                            staticClass: "md-button tdl-signal__menu-container",
                                            class: [t.theme, {
                                                "tdl-signal__menu-container--elevated": t.styleProps.elevated && 0 !== t.currentState
                                            }, {
                                                "tdl-signal__menu-container-mini": t.mini && t.hasSignal
                                            }]
                                        }, [n("md-icon", {
                                            class: ["tdl-signal__menu-icon", {
                                                "tdl-signal__menu-icon--highlighted": t.notificationStates[t.currentNotificationState].iconHighlighted
                                            }, {
                                                "tdl-signal__menu-icon-mini": t.mini && t.hasSignal
                                            }],
                                            attrs: {
                                                "icon-svg": t.notificationStates[t.currentNotificationState].menuIcon
                                            }
                                        })], 1)]
                                    },
                                    proxy: !0
                                }, {
                                    key: "content",
                                    fn: function() {
                                        return [n("span", {
                                            directives: [{
                                                name: "show",
                                                rawName: "v-show",
                                                value: t.menuTitle && t.openNotificationSettings,
                                                expression: "menuTitle && openNotificationSettings"
                                            }],
                                            staticClass: "tdl-signal__menu-title"
                                        }, [t._v(t._s(t.menuTitle))]), t._v(" "), t._l(t.notificationStates, (function(e, o) {
                                            return n("md-menu-item", {
                                                key: o,
                                                class: ["tdl-signal__menu-item", {
                                                    "tdl-signal__menu-item--selected": o === t.currentNotificationState
                                                }],
                                                on: {
                                                    click: function(e) {
                                                        return t.updateNotificationState(o)
                                                    }
                                                }
                                            }, [n("span", {
                                                staticClass: "md-body"
                                            }, [n("md-icon", {
                                                staticClass: "tdl-signal__menu-icon",
                                                attrs: {
                                                    "icon-svg": e.menuIcon
                                                }
                                            }), t._v("\n          " + t._s(e.menuTitle) + "\n        ")], 1)])
                                        })), t._v(" "), n("md-menu-item", {
                                            staticClass: "tdl-signal__menu-item--about-signals"
                                        }, [n("md-button", {
                                            staticClass: "md-primary button-link",
                                            on: {
                                                click: function(e) {
                                                    return t.aboutSignals()
                                                }
                                            }
                                        }, [t._v("\n          " + t._s(t.$t("Learn more about signals")) + "\n        ")])], 1)]
                                    },
                                    proxy: !0
                                }], null, !1, 1186373569)
                            }) : t._e()], 1)
                        },
                        staticRenderFns: []
                    }, (function(t) {
                        t && t("data-v-8bc29ca6_0", {
                            source: ".tdl-signal{display:flex;align-items:center}.tdl-signal .md-button:not([disabled]).md-raised:not(.md-icon-button):hover{background-color:#383b40}.tdl-signal .md-button:not([disabled]).md-primary.md-fab:hover,.tdl-signal .md-button:not([disabled]).md-primary.md-raised:hover{background-color:var(--theme-color,#c0ca33)}.tdl-signal-mini{border-radius:23px;box-shadow:2px 2px 6px rgba(1,1,1,.4),-4px -4px 4px rgba(56,59,64,.7)}.tdl-signal .tdl-menu-signal-content__menu{margin-left:-27px!important}.tdl-signal .tdl-mini-signal-button{border-radius:23px;width:36px;height:36px;height:fit-content;box-shadow:2px 2px 6px rgba(1,1,1,.4),-4px -4px 4px rgba(56,59,64,.7)}.tdl-signal .tdl-mini-signal-button--signaled{width:40px;border-radius:23px 0 0 23px;box-shadow:unset;background-color:rgba(0,0,0,0)}.tdl-signal .tdl-mini-signal-button--signaled .md-button{text-overflow:unset}@media (max-width:960px){.tdl-signal .tdl-mini-signal-button--signaled .md-button:hover{background-color:unset}.tdl-signal .tdl-mini-signal-button--signaled .md-button:active{background-color:#383b40}}.tdl-signal .tdl-mini-signal-button__signal{margin:0;padding:0;border-radius:23px;min-width:0;position:unset;width:36px}.tdl-signal .tdl-mini-signal-button__signal--signaled{width:40px;padding:0 11px;border-radius:23px 0 0 23px;transition:none}.tdl-signal .tdl-signal-button{position:relative;display:flex;align-items:center;min-width:120px!important;height:auto!important;width:100%}.tdl-signal .tdl-signal-button:not(.tdl-signal-button--simple){min-width:-moz-fit-content;min-width:106px!important;box-shadow:4px 4px 6px rgba(10,11,13,.4);border-radius:20px 0 0 20px;background-color:#27292d}.tdl-signal .tdl-signal-button:not(.tdl-signal-button--simple):hover{background-color:#383b40}.tdl-signal .tdl-signal-button .md-button:not([disabled]).md-raised:not(.md-icon-button):hover{background-color:#383b40}.tdl-signal .tdl-signal-button .md-button:not([disabled]).md-primary.md-fab:hover,.tdl-signal .tdl-signal-button .md-button:not([disabled]).md-primary.md-raised:hover{background-color:var(--theme-color,#c0ca33)}.tdl-signal .tdl-signal-button .tdl-signal-button__signal-button{margin:10px;background-color:#383b40}.tdl-signal .tdl-signal-button .tdl-signal-button__signal-button:hover{background-color:#383b40}.tdl-signal .tdl-signal-button .tdl-signal-button__signal-button:not(.tdl-signal-button__signal-button--simple){color:var(--theme-color)!important;-webkit-text-fill-color:var(--theme-color);background-color:#27292d}.tdl-signal .tdl-signal-button .tdl-signal-button__signal-button.tdl-signal-button__signal-button--simple.tdl-signal--inverted{background-color:#383b40;color:var(--theme-color);-webkit-text-fill-color:var(--theme-color)}.tdl-signal .tdl-signal-button .tdl-signal-button__signal-button.tdl-signal-button__signal-button--simple.tdl-signal--inverted:hover{background-color:#383b40}.tdl-signal .tdl-signal-button .tdl-signal-button__signal-button.tdl-signal-button__signal-button--elevated{background-color:#5e626b!important}.tdl-signal .tdl-signal-button .tdl-signal-button__link{color:var(--theme-color)!important}.tdl-signal .tdl-signal-button__signal-button{background-color:#383b40}.tdl-signal .tdl-signal-button__signal-button:hover{background-color:#383b40}.tdl-signal .tdl-signal-button__signal-button:not(.tdl-signal.tdl-signal-button__signal-button.md-button--simple){width:100%!important}.tdl-signal .tdl-signal-button__signal-button:not(.tdl-signal-button__signal-button--simple){color:var(--theme-color)!important;-webkit-text-fill-color:var(--theme-color)}.tdl-signal .tdl-signal-button__signal-button.tdl-signal-button__signal-button--simple.tdl-signal--inverted{background-color:#383b40;color:var(--theme-color);-webkit-text-fill-color:var(--theme-color)}.tdl-signal .tdl-signal-button__signal-button.tdl-signal-button__signal-button--simple.tdl-signal--inverted:hover{background-color:#383b40}.tdl-signal .tdl-signal-button__signal-button.tdl-signal-button__signal-button--elevated{background-color:#5e626b!important}.tdl-signal .tdl-signal-button__signal-button.md-raised--thicker-border,.tdl-signal .tdl-signal-button__signal-button.md-raised--thinner-border,.tdl-signal .tdl-signal-button__signal-button.tdl-signal-button__signal-button--unsignaled{border-radius:23px!important}.tdl-signal .tdl-signal-button__signal-button.md-button{display:flex;justify-content:center;transition:unset;width:100%;margin:0}.tdl-signal .tdl-signal-button__signal-button.md-button.md-raised:after{border-radius:23px}.tdl-signal .tdl-signal-button__signal-button.md-button .md-icon{margin-right:8px;margin-left:0}.tdl-signal .tdl-signal-button__signal-button.md-button:not(.tdl-signal.tdl-signal-button__signal-button.md-button--simple){width:calc(100% - 40px);padding:4px 16px;border-radius:20px 0 0 20px;box-shadow:4px 4px 6px rgba(10,11,13,.4);white-space:normal;line-height:18px;height:fit-content;display:flex;align-items:center}.tdl-signal .tdl-signal-button__signal-button.md-button:not(.tdl-signal-button__signal-button--simple){height:30px;min-height:30px;margin:3px;border-radius:20px 0 0 20px;border:1px solid var(--theme-color,#cddc39);display:flex;align-items:center;box-shadow:none!important;justify-content:center}.tdl-signal .tdl-signal-button__signal-button.md-button--simple{padding-left:16px;padding-right:16px}.tdl-signal .tdl-signal__link{color:var(--theme-color)!important}.tdl-signal .tdl-signal__menu{padding:0 3px}.tdl-signal .tdl-signal__menu-container{background-color:#27292d}.tdl-signal .tdl-signal__menu-container-mini{background-color:unset}.tdl-signal .tdl-signal__menu-container:hover{background-color:#383b40}.tdl-signal .tdl-signal__menu-container.tdl-signal__menu-container--elevated{background-color:#383b40}.tdl-signal .tdl-signal__menu-icon--highlighted{color:var(--theme-color)}.tdl-signal__menu-container{border-radius:0 23px 23px 0;position:unset!important;padding:0;margin:0;box-shadow:4px 4px 6px rgba(10,11,13,.4);width:40px;min-width:0!important}.tdl-signal__menu-container:hover:not([disabled]).md-raised{background-color:unset}.tdl-signal__menu-container:not(.tdl-signal__menu-container-mini){width:52px;min-width:0!important;min-height:30px;border:1px solid var(--theme-color,#cddc39);border-radius:0 20px 20px 0;display:flex}.tdl-signal .md-ink-ripple{z-index:2}.tdl-signal__menu-mini{margin-left:0!important}.tdl-signal__menu:not(.tdl-signal__menu-mini){min-height:36px!important;margin-left:2px;padding:3px;background-color:#27292d;border-radius:0 20px 20px 0;box-shadow:4px 4px 6px rgba(10,11,13,.4)}.tdl-signal__menu:not(.tdl-signal__menu-mini):hover{background-color:#383b40}.tdl-signal__menu-icon{color:rgba(255,255,255,.65)!important;padding-bottom:2px;margin-left:12px}.tdl-signal__menu-icon.tdl-signal__menu-icon--highlighted{color:var(--theme-color)!important}.tdl-signal__menu-icon--highlighted{color:var(--theme-color)!important}.tdl-signal__menu-icon-mini{margin-left:0}.tdl-signal__trigger-icon{text-align:center;display:inline-block;margin-bottom:15px}.tdl-signal__trigger-icon:before{font-size:22px}.tdl-signal__menu-item .md-list-item-container{flex-direction:column!important;align-items:flex-start!important;justify-content:center!important;min-width:180px}.tdl-signal__menu-item.tdl-signal__menu-item--selected .md-list-item-container{background-color:rgba(var(--theme-color-rgb-values),.12)}.tdl-signal__menu-item--about-signals .button-link{padding-left:0;margin:0}.tdl-signal__menu-title{color:rgba(255,255,255,.65);margin-bottom:12px;margin-left:16px;margin-top:8px}.tdl-signal-button .tdl-signal-button__link{color:var(--theme-color,#cddc39)!important}.tdl-signal-button .tdl-signal-button__menu-container{background-color:#383b40}.tdl-signal-button .tdl-signal-button__menu-container:hover{background-color:#383b40}.tdl-signal-button .tdl-signal-button__menu-container.tdl-signal-button__menu-container--elevated{background-color:#5e626b!important}.tdl-signal-button__link{color:var(--theme-color)!important}.tdl-signal-button__menu-icon{color:rgba(255,255,255,.65)}.tdl-signal-button__menu-icon.tdl-signal-button__menu-icon--highlighted{color:var(--theme-color,#cddc39)!important}.tdl-signal-button__menu-item.tdl-signal-button__menu-item--selected .md-list-item-container{background-color:rgba(205,220,57,.12)}.tdl-signal-button__menu-item.tdl-signal-button__menu-item--selected .md-list-item-container{background-color:rgba(var(--theme-color-rgb-values),.12)}.md-list-item .tdl-signal__menu-icon{margin-right:10px}.tdl-signal-button__tooltip{width:220px;height:auto!important;white-space:normal!important;text-align:center;padding:8px;font-size:12px}.tdl-signal-button__tooltip--items{margin:16px 0}.tdl-signal.tdl-signal-button.tdl-signal-button--fixed-width{width:auto}.tdl-signal-button--extended{width:max-content!important}.tdl-menu-content--center{top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important}.signal-suggestions .tdl-entity-render__entity-data,.signal-suggestions .tdl-entity-render__picture{height:100%!important;margin:0 12px 0 0!important}.tdl-mini-signal-button{background-color:var(--theme-color)}.tdl-mini-signal-button__signal .md-icon{color:#27292d;bottom:1.5px}.tdl-mini-signal-button__signal--signaled .md-icon{color:var(--theme-color)!important}.tdl-mini-signal-button__menu-container .md-icon{color:var(--theme-color)}.tdl-mini-signal-button__menu-item--about-signals{color:var(--theme-color)}.tdl-mini-signal-button__menu-icon{color:rgba(255,255,255,.65)!important}.tdl-mini-signal-button__menu-icon--highlighted{color:var(--theme-color)!important}.tdl-mini-signal-button .tdl-signal__menu-icon{color:rgba(255,255,255,.65)!important}.tdl-mini-signal-button .tdl-signal__menu-icon--highlighted{color:var(--theme-color)!important}",
                            map: void 0,
                            media: void 0
                        })
                    }), T, undefined, !1, undefined, !1, S.a, void 0, void 0)
            }).call(this, n(203))
        },
        367: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return D
            }));
            var o = n(17),
                l = n(2),
                r = n(27),
                d = n(91),
                c = n(41),
                h = n(85),
                m = n(98),
                f = n(156),
                _ = n(312),
                y = n(35),
                v = n(204),
                w = n(210),
                x = n(205),
                I = n(211),
                C = n(3),
                S = n(4),
                k = {
                    en: {
                        "What language do you want to use Torre in?": "What language do you want to use Torre in?",
                        "English (en)": "English (en)",
                        "Spanish (es)": "Español (es)",
                        Save: "Save",
                        Language: "Language",
                        Cancel: "Cancel",
                        "The global remote work community tends to interact in English. Switching languages might impact your visibility.": "The global remote work community tends to interact in English. Switching languages might impact your visibility.",
                        "USE TORRE IN ENGLISH": "USE TORRE IN ENGLISH",
                        "SWITCH TO SPANISH": "CAMBIAR A ESPAÑOL"
                    },
                    es: {
                        "What language do you want to use Torre in?": "¿En qué idioma quieres usar Torre?",
                        "English (en)": "English (en)",
                        "Spanish (es)": "Español (es)",
                        Save: "Guardar",
                        Language: "Idioma",
                        Cancel: "Cancelar",
                        "The global remote work community tends to interact in English. Switching languages might impact your visibility.": "La comunidad global que trabaja de forma remota prefiere interacciones en Inglés. Cambiar tu idioma podrá impactar tu visibilidad.",
                        "USE TORRE IN ENGLISH": "USAR TORRE EN INGLÉS",
                        "SWITCH TO SPANISH": "CAMBIAR A ESPAÑOL"
                    }
                },
                L = "https://res.cloudinary.com/torre-technologies-co/image/upload/v1615048341/origin/materrial/flags",
                $ = {
                    methods: {
                        LanguageAssetsMixin_getLanguageFlag: function(t) {
                            return function(t) {
                                switch (t) {
                                    case "es":
                                        return "".concat(L, "/es.png");
                                    case "en":
                                        return "".concat(L, "/gb.png")
                                }
                                return console.error("Unknown locale: ".concat(t, " @ languageIconImage")), ""
                            }(t)
                        },
                        LanguageAssetsMixin_getLanguageAltTag: function(t) {
                            return function(t) {
                                switch (t) {
                                    case "es":
                                        return "spain flag";
                                    case "en":
                                        return "uk flag"
                                }
                                return console.error("Unknown locale: ".concat(t, " @ languageAltTag")), ""
                            }(t)
                        }
                    }
                },
                B = l.default.extend({
                    name: "tdl-locale-confirmation",
                    components: {
                        MdDialog: v.a,
                        MdDialogTitle: I.a,
                        MdDialogContent: x.a,
                        MdRadio: _.a,
                        MdDialogActions: w.a,
                        MdButton: y.a
                    },
                    i18n: {
                        messages: k
                    },
                    mixins: [$],
                    props: {
                        defaultLocale: {
                            type: String,
                            required: !0
                        },
                        styleProps: {
                            type: Object,
                            required: !0
                        }
                    },
                    created: function() {
                        this.$root.$emit("update-locale-string", k)
                    },
                    methods: {
                        open: function() {
                            this.$refs.selectLocale.open()
                        },
                        close: function() {
                            this.$refs.selectLocale.close()
                        },
                        handleLocaleSelection: function(t) {
                            this.$i18n.locale !== t ? this.$emit("locale-selected", t) : this.$emit("rollback"), this.close()
                        },
                        handleClose: function() {
                            this.$emit("rollback")
                        }
                    }
                }),
                T = Object(C.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tdl-locale-confirmation"
                        }, [n("md-dialog", {
                            ref: "selectLocale",
                            style: t.styleProps,
                            on: {
                                close: t.handleClose
                            }
                        }, [n("md-dialog-content", {
                            staticClass: "tdl-locale-confirmation__dialog-content"
                        }, [n("div", {
                            staticClass: "dialog-content"
                        }, [n("p", {
                            staticClass: "md-subheading tdl-locale-confirmation__message"
                        }, [t._v("\n          " + t._s(t.$t("The global remote work community tends to interact in English. Switching languages might impact your visibility.")) + "\n          ")]), t._v(" "), n("div", {
                            staticClass: "tdl-locale-confirmation__button-container"
                        }, [n("md-button", {
                            staticClass: "md-primary",
                            on: {
                                click: function(e) {
                                    return t.handleLocaleSelection("en")
                                }
                            }
                        }, [t._v("\n            " + t._s(t.$t("USE TORRE IN ENGLISH")) + " "), n("img", {
                            staticClass: "tdl-locale-confirmation__button",
                            attrs: {
                                src: t.LanguageAssetsMixin_getLanguageFlag("en"),
                                alt: t.$t(t.LanguageAssetsMixin_getLanguageAltTag("en"))
                            }
                        })]), t._v(" "), n("md-button", {
                            staticClass: "md-primary",
                            on: {
                                click: function(e) {
                                    return t.handleLocaleSelection("es")
                                }
                            }
                        }, [t._v("\n            " + t._s(t.$t("SWITCH TO SPANISH")) + " "), n("img", {
                            staticClass: "tdl-locale-confirmation__button",
                            attrs: {
                                src: t.LanguageAssetsMixin_getLanguageFlag("es"),
                                alt: t.$t(t.LanguageAssetsMixin_getLanguageAltTag("es"))
                            }
                        })])], 1)])])], 1)], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-4a9ac39f_0", {
                        source: ".dialog-content[data-v-4a9ac39f]{padding:8px}.tdl-locale-confirmation__button[data-v-4a9ac39f]{width:32px;margin-left:8px}.tdl-locale-confirmation__dialog-content[data-v-4a9ac39f]{width:80vw;min-width:270px;max-width:320px;padding:16px}.tdl-locale-confirmation__button-container[data-v-4a9ac39f]{width:100%;text-align:center}.tdl-locale-confirmation__button-container .md-primary[data-v-4a9ac39f]{color:#cddc39}.tdl-locale-confirmation__message[data-v-4a9ac39f]{margin-bottom:16px}",
                        map: void 0,
                        media: void 0
                    })
                }), B, "data-v-4a9ac39f", !1, undefined, !1, S.a, void 0, void 0),
                O = l.default.extend({
                    name: "tdl-locale-selector",
                    components: {
                        MdIcon: r.a,
                        MdInkRipple: c.a,
                        MdList: h.a,
                        MdListItem: m.a,
                        MdMenu: f.a,
                        MdRadio: _.a,
                        tdlLocaleConfirmation: T,
                        TmdIcon: d.a
                    },
                    mixins: [$],
                    props: {
                        defaultLocale: {
                            type: String,
                            required: !0
                        },
                        menuMode: {
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
                        transparent: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            mdiMenuDownIcon: o.Cb,
                            mdiMenuRightIcon: o.Db,
                            mdiWebIcon: o.lc,
                            localeSelected: "",
                            selectorOpened: !1
                        }
                    },
                    watch: {
                        "$i18n.locale": function(t) {
                            this.localeSelected = t
                        }
                    },
                    mounted: function() {
                        this.localeSelected = this.$i18n.locale
                    },
                    methods: {
                        languageList: function() {
                            var t = [{
                                name: "English (Inglés)",
                                shortName: "English (en)",
                                code: "en",
                                flag: this.LanguageAssetsMixin_getLanguageFlag("en")
                            }, {
                                name: "Spanish (Español)",
                                shortName: "Spanish (es)",
                                code: "es",
                                flag: this.LanguageAssetsMixin_getLanguageFlag("es")
                            }];
                            return "en" === this.$i18n.locale ? t : t.reverse()
                        },
                        handleLocaleSelected: function(t) {
                            t === this.$i18n.locale ? this.toggleLocaleSelector() : (this.$emit("locale-selected", t), this.$root.$emit("iframe-drawer::change-locale", t))
                        },
                        handleRollback: function() {
                            this.localeSelected = this.defaultLocale
                        },
                        handleLocaleClicked: function(t) {
                            t === this.$i18n.locale ? this.toggleLocaleSelector() : this.propagateLocaleChange(t)
                        },
                        propagateLocaleChange: function(t) {
                            this.menuMode && this.$refs.localeMenu.close(), t !== this.defaultLocale ? (this.$emit("locale-selector-dialog-open", t), this.$refs.tdlLocaleConfirmation.open()) : (this.$emit("locale-selected", t), this.$emit("close-selector"), this.$root.$emit("iframe-drawer::change-locale", t))
                        },
                        toggleLocaleSelector: function(t) {
                            this.selectorOpened = null != t ? t : !this.selectorOpened
                        }
                    }
                }),
                D = Object(C.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", [t.menuMode ? n("md-menu", {
                            ref: "localeMenu",
                            staticClass: "tdl-locale-selector__option-menu",
                            attrs: {
                                "md-offset-y": 68,
                                "content-dynamic-classes": ["tdl-locale-selector__option-menu__content"]
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function() {
                                    return [n("md-ink-ripple"), t._v(" "), n("div", {
                                        staticClass: "locale-menu"
                                    }, [n("img", {
                                        staticClass: "flag",
                                        attrs: {
                                            src: t.LanguageAssetsMixin_getLanguageFlag(t.$i18n.locale),
                                            alt: t.$t(t.LanguageAssetsMixin_getLanguageAltTag(t.$i18n.locale)),
                                            width: "24px"
                                        }
                                    }), t._v(" "), n("md-icon", {
                                        attrs: {
                                            "icon-svg": t.mdiMenuDownIcon
                                        }
                                    })], 1)]
                                },
                                proxy: !0
                            }, {
                                key: "content",
                                fn: function() {
                                    return [n("div", {
                                        staticClass: "locale-options"
                                    }, t._l(t.languageList(), (function(e) {
                                        return n("div", {
                                            key: e.code,
                                            staticClass: "md-body-1 locale-name",
                                            on: {
                                                click: function(n) {
                                                    return t.propagateLocaleChange(e.code)
                                                }
                                            }
                                        }, [n("img", {
                                            staticClass: "locale-flag",
                                            attrs: {
                                                src: e.flag,
                                                alt: t.$t(t.LanguageAssetsMixin_getLanguageAltTag(e.code)),
                                                width: "32px",
                                                height: "32px"
                                            }
                                        }), t._v("\n          " + t._s(t.$t(e.shortName)) + "\n        ")])
                                    })), 0)]
                                },
                                proxy: !0
                            }], null, !1, 1689969327)
                        }) : n("md-list", {
                            class: ["tdl-locale-selector", {
                                "tdl-locale-selector__transparent": t.transparent
                            }]
                        }, [t.selectorOpened ? n("md-list-item", {
                            staticClass: "tdl-locale-selector__option-list"
                        }, [n("md-icon", {
                            staticClass: "globe-icon",
                            attrs: {
                                "icon-svg": t.mdiWebIcon
                            },
                            nativeOn: {
                                click: function(e) {
                                    return t.toggleLocaleSelector()
                                }
                            }
                        }), t._v(" "), n("div", {
                            staticClass: "locale-list"
                        }, t._l(t.languageList(), (function(e) {
                            return n("div", {
                                key: e.code,
                                staticClass: "locale-option"
                            }, [n("md-radio", {
                                staticClass: "md-primary",
                                attrs: {
                                    "md-value": e.code,
                                    "display-style": "flex",
                                    name: "locales"
                                },
                                on: {
                                    change: t.handleLocaleClicked
                                },
                                model: {
                                    value: t.localeSelected,
                                    callback: function(e) {
                                        t.localeSelected = e
                                    },
                                    expression: "localeSelected"
                                }
                            }, [n("span", {
                                staticClass: "md-body-1"
                            }, [t._v(t._s(t.$t(e.shortName)) + "\n              "), n("img", {
                                staticClass: "locale-option__flag",
                                attrs: {
                                    src: t.LanguageAssetsMixin_getLanguageFlag(e.code),
                                    alt: t.LanguageAssetsMixin_getLanguageAltTag(e.code),
                                    width: "32px",
                                    height: "32px"
                                }
                            })])])], 1)
                        })), 0), t._v(" "), n("span", {
                            staticClass: "md-body-1 option__text"
                        }, [n("tmd-icon", {
                            staticClass: "option__icon-expanded tmc-brand",
                            nativeOn: {
                                click: function(e) {
                                    return t.toggleLocaleSelector()
                                }
                            }
                        }, [t._v("\n          arrow_drop_down\n        ")])], 1)], 1) : n("md-list-item", {
                            staticClass: "tdl-locale-selector__closed",
                            nativeOn: {
                                click: function(e) {
                                    return t.toggleLocaleSelector()
                                }
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiWebIcon
                            }
                        }), t._v(" "), n("span", {
                            staticClass: "md-body-1 option__text"
                        }, [t._v(t._s(t.$t("$locale")) + "\n        "), n("img", {
                            staticClass: "option__flag",
                            attrs: {
                                src: t.LanguageAssetsMixin_getLanguageFlag(t.$i18n.locale),
                                alt: t.$t(t.LanguageAssetsMixin_getLanguageAltTag(t.$i18n.locale)),
                                width: "32px",
                                height: "32px"
                            }
                        })]), t._v(" "), n("tmd-icon", {
                            staticClass: "option__icon tmc-brand"
                        }, [t._v("\n        arrow_right\n      ")])], 1)], 1), t._v(" "), n("tdl-locale-confirmation", {
                            ref: "tdlLocaleConfirmation",
                            attrs: {
                                "default-locale": t.defaultLocale,
                                "style-props": t.styleProps
                            },
                            on: {
                                "locale-selected": t.handleLocaleSelected,
                                rollback: t.handleRollback
                            }
                        })], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-746db41a_0", {
                        source: ".tdl-locale-selector[data-v-746db41a]{padding:0}.tdl-locale-selector__closed[data-v-746db41a]{cursor:pointer}.tdl-locale-selector__transparent[data-v-746db41a]{background:0 0}.tdl-locale-selector__transparent[data-v-746db41a]  .md-list-item-container{background:0 0}.tdl-locale-selector__transparent[data-v-746db41a]  .md-list-item-container:hover{background:0 0}.tdl-locale-selector[data-v-746db41a]  .md-list-item-container{padding:0;min-height:32px}.tdl-locale-selector[data-v-746db41a]  .md-list-item-container .md-icon:first-child{margin-right:16px}.tdl-locale-selector .option__flag[data-v-746db41a]{width:32px;margin-left:18px}.tdl-locale-selector .option__icon[data-v-746db41a]{float:right;margin-right:-9.5px}.tdl-locale-selector__option-list .option__icon-expanded[data-v-746db41a]{cursor:pointer;pointer-events:all;float:right;margin-right:-7px!important}.tdl-locale-selector__option-list .globe-icon[data-v-746db41a],.tdl-locale-selector__option-list .option__icon-expanded[data-v-746db41a]{margin-bottom:32px}.tdl-locale-selector__option-list .locale-list[data-v-746db41a]{display:flex;flex-direction:column;flex-wrap:wrap}.tdl-locale-selector__option-list .locale-option[data-v-746db41a]{width:100%;pointer-events:all;height:28px;margin-top:4px}.tdl-locale-selector__option-list .locale-option[data-v-746db41a]  .md-radio{margin:0;min-width:160px}.tdl-locale-selector__option-list .locale-option[data-v-746db41a]  .md-radio label{min-width:150px;padding-left:16px}.tdl-locale-selector__option-list .locale-option__flag[data-v-746db41a]{width:32px;float:right;margin-top:-4px;margin-left:18px}.tdl-locale-selector__option-list .option__text[data-v-746db41a]{pointer-events:none}.tdl-locale-selector__option-list .option__icon[data-v-746db41a]{cursor:pointer;pointer-events:all}.tdl-locale-selector__option-menu[data-v-746db41a]{height:100%}.tdl-locale-selector__option-menu .locale-menu[data-v-746db41a]{cursor:pointer;min-width:68px;justify-items:center;color:#cddc39;display:grid}.tdl-locale-selector__option-menu .locale-menu .md-icon[data-v-746db41a]{color:var(--theme-color,#cddc39)!important}.tdl-locale-selector__option-menu .locale-menu .flag[data-v-746db41a]{width:24px;padding-top:8px}.tdl-locale-selector__option-menu__content .locale-options[data-v-746db41a]{height:100%;min-width:213px}.tdl-locale-selector__option-menu__content .locale-options .locale-flag[data-v-746db41a]{width:32px;margin-right:4px}.tdl-locale-selector__option-menu__content .locale-options .locale-name[data-v-746db41a]{width:100%;padding-top:12px;padding-left:16px;padding-bottom:12px;cursor:pointer}.tdl-locale-selector__option-menu__content .locale-options .locale-name[data-v-746db41a]:first-of-type{padding-top:12px;padding-bottom:12px}.tdl-locale-selector__option-menu__content .locale-options .locale-name[data-v-746db41a]:hover{background-color:#5e626b}",
                        map: void 0,
                        media: void 0
                    })
                }), O, "data-v-746db41a", !1, undefined, !1, S.a, void 0, void 0)
        },
        437: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return w
            }));
            var o = n(11),
                l = (n(53), n(15), n(33), n(34), n(28), n(324), n(102), n(32), n(65), n(180), n(52), n(148), n(289), n(45), n(74), n(71)),
                r = n(153),
                d = n(105),
                c = n(35),
                h = n(27),
                m = n(3),
                f = n(4),
                _ = n(173),
                y = {
                    name: "iframe-drawer-loader",
                    components: {
                        MdButton: c.a,
                        MdIcon: h.a
                    },
                    data: function() {
                        return {
                            mdiClose: null
                        }
                    },
                    created: function() {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var o, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.e(2).then(n.bind(null, 638));
                                    case 2:
                                        o = e.sent, l = o.mdiClose, t.mdiClose = l;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                },
                v = {
                    name: "tdl-iframe-drawer",
                    components: {
                        IframeDrawerLoader: Object(m.a)({
                            render: function() {
                                var t = this,
                                    e = t.$createElement,
                                    n = t._self._c || e;
                                return n("div", {
                                    staticClass: "iframe-drawer-loader"
                                }, [n("div", {
                                    staticClass: "iframe-drawer-loader__header"
                                }, [n("md-button", {
                                    staticClass: "md-icon-button",
                                    on: {
                                        click: function(e) {
                                            return t.$emit("close")
                                        }
                                    }
                                }, [n("md-icon", {
                                    attrs: {
                                        "icon-svg": t.mdiClose
                                    }
                                })], 1), t._v(" "), n("div", {
                                    staticClass: "skeleton-header skeleton"
                                })], 1), t._v(" "), n("div", {
                                    staticClass: "skeleton skeleton-preceding"
                                }), t._v(" "), t._l(5, (function(e) {
                                    return n("div", {
                                        key: e,
                                        staticClass: "skeleton-card"
                                    }, [n("div", {
                                        staticClass: "skeleton skeleton-img"
                                    }), t._v(" "), t._m(0, !0)])
                                }))], 2)
                            },
                            staticRenderFns: [function() {
                                var t = this,
                                    e = t.$createElement,
                                    n = t._self._c || e;
                                return n("div", {
                                    staticClass: "skeleton-card__content"
                                }, [n("div", {
                                    staticClass: "skeleton skeleton-header",
                                    staticStyle: {
                                        width: "60%"
                                    }
                                }), t._v(" "), n("div", {
                                    staticClass: "skeleton skeleton-line",
                                    staticStyle: {
                                        width: "90%"
                                    }
                                }), t._v(" "), n("div", {
                                    staticClass: "skeleton skeleton-line",
                                    staticStyle: {
                                        width: "35%"
                                    }
                                })])
                            }]
                        }, (function(t) {
                            t && t("data-v-27705df0_0", {
                                source: "@keyframes skeleton-loading{0%{opacity:.4}100%{opacity:1}}.iframe-drawer-loader{width:100%;height:100%;position:absolute;padding:8px;background-color:#27292d;display:flex;flex-flow:column;gap:32px}.iframe-drawer-loader__header{display:flex;flex-flow:row nowrap;gap:24px;align-items:center}.iframe-drawer-loader .skeleton{background-color:#383a40;animation:skeleton-loading 1s ease-in-out forwards infinite;animation-direction:alternate;border-radius:4px;height:.7rem}.iframe-drawer-loader .skeleton-header{height:1rem;width:30%}.iframe-drawer-loader .skeleton-preceding{height:52px}.iframe-drawer-loader .skeleton-card{display:flex;flex-flow:row;gap:16px;padding:8px 12px}.iframe-drawer-loader .skeleton-card__content{width:100%;display:flex;flex-flow:column;gap:8px}.iframe-drawer-loader .skeleton-img{height:42px;width:45px;border-radius:8px}",
                                map: void 0,
                                media: void 0
                            })
                        }), y, undefined, !1, undefined, !1, f.a, void 0, void 0),
                        MdWhiteframe: d.a
                    },
                    mixins: [r.c],
                    props: {
                        urlHost: {
                            type: String,
                            required: !0
                        },
                        urlPath: {
                            type: String,
                            required: !0
                        },
                        urlQuery: {
                            type: String,
                            default: "?embedded"
                        },
                        iframeId: {
                            type: String,
                            required: !0
                        },
                        user: {
                            type: Object,
                            required: !0
                        },
                        torreAppBaseUrl: {
                            type: String,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            opened: !1,
                            openDebounce: !1,
                            loading: !1,
                            iframeHandshake: !1,
                            alternateUrl: void 0,
                            location: "messenger",
                            openLocation: "",
                            payload: void 0,
                            conversationsToCache: void 0
                        }
                    },
                    computed: {
                        iframeUrl: function() {
                            return this.alternateUrl ? this.alternateUrl : "".concat(this.urlHost).concat(this.urlPath).concat(this.urlQuery)
                        },
                        showLoader: function() {
                            return !this.iframeHandshake || this.loading
                        },
                        shouldLoadIframe: function() {
                            return !!this.iframeUrl && this.platformMixin__isDesktop
                        }
                    },
                    mounted: function() {
                        window.addEventListener("message", this.receiveMessage), this.$root.$on("iframe-drawer::open::".concat(this.iframeId), this.open), this.$root.$on("iframe-drawer::close::".concat(this.iframeId), this.close), this.$root.$on("iframe-drawer::cache-conversations::".concat(this.iframeId), this.cacheConversations), this.$root.$on("iframe-drawer::change-locale", this.changeFeedLocale)
                    },
                    beforeDestroy: function() {
                        window.removeEventListener("message", this.receiveMessage), this.$root.$off("iframe-drawer::open::".concat(this.iframeId), this.open), this.$root.$off("iframe-drawer::close::".concat(this.iframeId), this.close), this.$root.$off("iframe-drawer::cache-conversations::".concat(this.iframeId), this.cacheConversations), this.$root.$off("iframe-drawer::change-locale", this.changeFeedLocale)
                    },
                    watch: {
                        iframeHandshake: function() {
                            this.iframeHandshake && (this.payload && (this.postMessage("track::".concat(this.payload)), this.payload = void 0), this.conversationsToCache && (this.postMessage("cache-conversations::".concat(this.conversationsToCache)), this.conversationsToCache = void 0))
                        }
                    },
                    methods: {
                        open: function(t) {
                            if (this.opened) this.close();
                            else {
                                if (this.openDebounce) return;
                                this.shouldLoadIframe ? this.openDrawer(t) : this.openDeepLink(t), _.a.$emit("disable")
                            }
                        },
                        openDeepLink: function(t) {
                            var e = t && t.deepLink ? t.deepLink : "/",
                                n = t && t.query ? t.query : "";
                            if (n && "undefined" != typeof URLSearchParams) {
                                var o = new URLSearchParams(n);
                                o.delete("embedded"), n = "?".concat(o.toString())
                            }
                            window.location.href = "".concat(this.torreAppBaseUrl).concat(e).concat(n)
                        },
                        openDrawer: function(t) {
                            var e = this;
                            if (t && t.deepLink) {
                                var n, o;
                                this.openLocation = t.deepLink, this.showLoaderIfNeeded(t.deepLink);
                                var l = t.host ? t.host : this.urlHost,
                                    r = t.query ? t.query : this.urlQuery,
                                    d = null !== (n = this.$route) && void 0 !== n && n.name ? "".concat(r ? "&" : "?", "origin=").concat(null === (o = this.$route) || void 0 === o ? void 0 : o.name) : "";
                                this.iframeHandshake ? (this.postMessage("open::".concat(t.deepLink).concat(r)), this.postMessage("track::".concat(t.deepLink).concat(r).concat(d))) : (this.payload = "".concat(t.deepLink).concat(r).concat(d), this.alternateUrl = "".concat(l).concat(t.deepLink).concat(r))
                            }
                            this.opened = !0, document.body.classList.add("drawer-open"), this.$emit("open"), this.$root.$emit("help-fab::display", !1), this.postMessage("drawer::open"), this.$nextTick((function() {
                                return e.$refs["flutter-iframe"].focus()
                            }))
                        },
                        close: function() {
                            var t = this;
                            this.opened = !1, this.openDebounce = !0, setTimeout((function() {
                                t.openDebounce = !1, document.body.classList.remove("drawer-open"), document.body.style.removeProperty("overflow")
                            }), 100), this.$root.$emit("help-fab::display", !0), this.$emit("close"), _.a.$emit("enable"), this.postMessage("drawer::close")
                        },
                        cacheConversations: function(t) {
                            "string" == typeof t && 0 === t.trim().length || (this.iframeHandshake ? this.postMessage("cache-conversations::".concat(t)) : this.conversationsToCache = t)
                        },
                        showLoaderIfNeeded: function(t) {
                            var e = this,
                                n = t.split("/")[1];
                            this.location !== n && (this.location = n, this.loading = !0, setTimeout((function() {
                                e.loading = !1
                            }), 500))
                        },
                        changeFeedLocale: function(t) {
                            this.postMessage("locale::".concat(t))
                        },
                        receiveMessage: function(t) {
                            var e = t.data;
                            if ("string" == typeof e) {
                                var n = e.split("::");
                                n[0] === this.iframeId && this.processCommand(n[1], 3 === n.length ? n[2] : "")
                            }
                        },
                        processCommand: function(t, param) {
                            switch (t) {
                                case "handshake":
                                    this.postMessage("handshake::ack"), this.iframeHandshake = !0;
                                    break;
                                case "close-drawer":
                                    this.close();
                                    break;
                                case "open-url":
                                    window.open(param, "_self");
                                    break;
                                case "verify-user":
                                    "".concat(this.user.subjectId) !== param ? this.postMessage("verify-user::failed") : this.postMessage("locale::".concat(this.user.locale))
                            }
                        },
                        postMessage: function(t) {
                            if (this.$refs["flutter-iframe"] && this.$refs["flutter-iframe"].contentWindow) {
                                var e = this.iframeUrl.startsWith("/") ? "/" : this.iframeUrl;
                                this.$refs["flutter-iframe"].contentWindow.postMessage(t, e)
                            }
                        },
                        onBlur: function(t) {
                            !!t.relatedTarget && !!t.relatedTarget.className && t.relatedTarget.className.includes("tools__tool--has-drawer") || !this.opened || Object(l.c)() || this.close()
                        }
                    }
                },
                w = Object(m.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            class: ["tdl-iframe-drawer", {
                                active: t.opened
                            }],
                            attrs: {
                                tabindex: "0"
                            }
                        }, [n("md-whiteframe", {
                            class: ["tdl-iframe-drawer__drawer"]
                        }, [n("iframe-drawer-loader", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.showLoader,
                                expression: "showLoader"
                            }],
                            on: {
                                close: t.close
                            }
                        }), t._v(" "), t.shouldLoadIframe ? n("iframe", {
                            ref: "flutter-iframe",
                            staticClass: "tdl-iframe-drawer__iframe",
                            attrs: {
                                src: t.iframeUrl
                            },
                            on: {
                                blur: t.onBlur
                            }
                        }) : t._e()], 1)], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-0dfbd82b_0", {
                        source: ".tdl-iframe-drawer__drawer{width:100%;max-width:420px;right:0;bottom:0;top:56px;border-radius:4px;pointer-events:none;overflow:hidden;-webkit-overflow-scrolling:touch;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:transform;will-change:transform;background-color:#27292d;transform:translate3D(100%,0,0)}@media (max-width:720px){.tdl-iframe-drawer__drawer{top:0}}.tdl-iframe-drawer__drawer.md-whiteframe{position:fixed;z-index:253}.tdl-iframe-drawer__iframe{width:100%;height:100%;border:none}.tdl-iframe-drawer.active .tdl-iframe-drawer__drawer{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);pointer-events:auto;transform:translate3D(0,0,0)}",
                        map: void 0,
                        media: void 0
                    })
                }), v, undefined, !1, undefined, !1, f.a, void 0, void 0)
        },
        596: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return x
            }));
            var o = n(11),
                l = (n(53), n(425), n(120), n(37), n(65), n(15), n(33), n(34), n(324), n(35)),
                r = n(27),
                d = n(436),
                c = n(117),
                h = n(437),
                m = n(270),
                f = n(190),
                _ = n(136),
                y = n(3),
                v = n(4),
                w = (n(183), {
                    name: "tdl-help-fab",
                    components: {
                        MdButton: l.a,
                        MdIcon: r.a,
                        MdSpeedDial: d.a,
                        MdTooltip: c.a,
                        TdlIframeDrawer: h.a
                    },
                    mixins: [m.a],
                    props: {
                        firebaseUrl: {
                            type: String,
                            required: !1
                        },
                        shouldLoadIframeDrawer: {
                            type: Boolean,
                            default: !0
                        },
                        shouldHideFab: {
                            type: Boolean,
                            default: !1
                        },
                        torreAppBaseUrl: {
                            type: String,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            mdiCloseIcon: null,
                            footersOffset: 0,
                            defaultOffset: 24,
                            calcFootersHeightComplete: !1,
                            externalIframeExists: !0,
                            fullScreenDialogExists: !1,
                            resizeTimeout: null,
                            shouldShowFabButton: !0,
                            unreadSupportMessagesCount: 0,
                            unreadSupportMessagesUnsubscribe: void 0
                        }
                    },
                    computed: {
                        offsetHeight: function() {
                            return {
                                bottom: this.defaultOffset + this.footersOffset + "px"
                            }
                        },
                        shouldShowHelpFab: function() {
                            if (this.helpTool__isSignedIn && this.user.flags) {
                                var t = this.user.flags,
                                    e = t.onBoarded,
                                    n = t.talentSeekerOnboarded,
                                    o = !!e || "allowed" === n;
                                return !this.fullScreenDialogExists && this.calcFootersHeightComplete && o && !this.shouldHideFab && !!this.helpTool__mdiHelpIcon
                            }
                            return !1
                        },
                        shouldRenderInternalIframe: function() {
                            return this.helpTool__isSignedIn && !this.externalIframeExists && !!this.helpTool__mdiHelpIcon && this.shouldLoadIframeDrawer
                        }
                    },
                    methods: {
                        calcAppBarWrapperExists: function() {
                            if (document) {
                                var t = document.querySelector(".app-bar-wrapper");
                                this.externalIframeExists = !!t
                            }
                        },
                        calcHasFullScreenDialog: function() {
                            if (document) {
                                var t = document.querySelectorAll(".tdl-full-screen-dialog.md-active");
                                this.fullScreenDialogExists = t.length > 0
                            }
                        },
                        getFootersHeight: function() {
                            if (document) {
                                var t = document.querySelectorAll([".md-footer:not(.torreBanner--embedded)", ".torreBanner:not(.torreBanner--embedded)", ".bottom-bar", ".cta-bar"].join(", ")),
                                    e = 0;
                                return t.length && t.forEach((function(footer) {
                                    footer.offsetHeight > e && (e = footer.offsetHeight)
                                })), e
                            }
                            return 0
                        },
                        calcFootersHeight: function() {
                            document && (this.footersOffset = this.getFootersHeight(), this.calcFootersHeightComplete = !0)
                        },
                        calcFooterHeightOnResize: function() {
                            var t = this;
                            this.resizeTimeout && clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout((function() {
                                t.footersOffset = t.getFootersHeight()
                            }), 50)
                        },
                        toggleHelpFabButton: function(t) {
                            var e = this;
                            this.shouldShowFabButton = !!t, this.$nextTick((function() {
                                e.calcFootersHeight(), e.calcAppBarWrapperExists(), e.calcHasFullScreenDialog()
                            }))
                        },
                        calcIframeWindowMode: function() {
                            var t = new URL(document.location).searchParams,
                                e = t.has("window-mode"),
                                n = t.get("window-mode");
                            e && "embedded" === n && this.shouldHideFab && this.toggleHelpFabButton(!1)
                        },
                        subscribeToUnreadBadgeChanges: function() {
                            var t = this;
                            if (this.unsubscribeToUnreadBadgeChanges(), this.helpTool__isSignedIn && this.user.ggId) {
                                var e = Object(f.a)(this.firebaseUrl, "k10/v3/public-stats/".concat(this.user.ggId, "/unread-support"));
                                this.unreadSupportMessagesUnsubscribe = Object(_.d)(e, (function(e) {
                                    e.exists() && (t.unreadSupportMessagesCount = e.val())
                                }))
                            }
                        },
                        unsubscribeToUnreadBadgeChanges: function() {
                            void 0 !== this.unreadSupportMessagesUnsubscribe && (this.unreadSupportMessagesUnsubscribe(), this.unreadSupportMessagesUnsubscribe = void 0)
                        },
                        initSubscribeToUnreadBadgeChanges: function() {
                            this.helpTool__isSignedIn && void 0 === this.unreadSupportMessagesUnsubscribe && this.subscribeToUnreadBadgeChanges()
                        },
                        handleRootEventListeners: function(t) {
                            "$on" !== t && "$off" !== t || (this.$root[t]("help-fab::reposition", this.calcFootersHeight), this.$root[t]("help-fab::display", this.toggleHelpFabButton), this.$root[t]("help-fab::open", this.helpTool__handleToolClick))
                        },
                        handleCalcOnMounted: function() {
                            this.calcIframeWindowMode(), this.calcFootersHeight(), this.calcAppBarWrapperExists(), this.calcHasFullScreenDialog()
                        }
                    },
                    created: function() {
                        var t = this;
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var o, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.e(2).then(n.bind(null, 638));
                                    case 2:
                                        o = e.sent, l = o.mdiClose, t.mdiCloseIcon = l;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    mounted: function() {
                        var t = this;
                        this.handleCalcOnMounted(), this.$nextTick((function() {
                            t.initSubscribeToUnreadBadgeChanges(), window.addEventListener("resize", t.calcFooterHeightOnResize), t.handleRootEventListeners("$on")
                        }))
                    },
                    beforeDestroy: function() {
                        this.unsubscribeToUnreadBadgeChanges(), window.removeEventListener("resize", this.calcFooterHeightOnResize), this.handleRootEventListeners("$off")
                    }
                }),
                x = Object(y.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", [n("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.shouldShowHelpFab,
                                expression: "shouldShowHelpFab"
                            }],
                            staticClass: "help-fab"
                        }, [n("md-speed-dial", {
                            staticClass: "md-fab-bottom-right help-fab__speed-dial",
                            style: [t.offsetHeight],
                            attrs: {
                                "md-open": "mounted"
                            }
                        }, [n("md-button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.shouldShowFabButton,
                                expression: "shouldShowFabButton"
                            }],
                            staticClass: "md-fab md-primary",
                            attrs: {
                                badge: t.unreadSupportMessagesCount,
                                "md-fab-trigger": ""
                            },
                            on: {
                                click: t.helpTool__handleToolClick
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.helpTool__mdiHelpIcon
                            }
                        }), t._v(" "), n("md-tooltip", {
                            attrs: {
                                "md-direction": "top"
                            }
                        }, [t._v("\n          " + t._s(t.$t(t.helpTool__name)) + "\n        ")])], 1)], 1)], 1), t._v(" "), t.shouldRenderInternalIframe ? n("tdl-iframe-drawer", {
                            attrs: {
                                "iframe-id": "phobos",
                                "url-path": "/messenger",
                                "url-host": t.iframeUrlHost,
                                "torre-app-base-url": t.torreAppBaseUrl,
                                user: t.user
                            }
                        }) : t._e()], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-a0195a12_0", {
                        source: ".help-fab[data-v-a0195a12]{position:fixed;z-index:250;width:-webkit-fill-available}.help-fab__speed-dial[data-v-a0195a12]{position:fixed!important}.help-fab .md-fab.md-button:not([disabled]).md-primary[data-v-a0195a12]:not(.md-icon-button):not(.md-raised){background-color:var(--theme-color,#cddc39);color:rgba(0,0,0,.87);overflow:visible}",
                        map: void 0,
                        media: void 0
                    })
                }), w, "data-v-a0195a12", !1, undefined, !1, v.a, void 0, void 0)
        },
        783: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return _
            }));
            n(51);
            var o = n(35),
                l = n(3),
                r = n(4),
                d = {
                    name: "tdl-crying-t-rex",
                    props: {
                        theme: {
                            type: String,
                            required: !1,
                            default: "dark"
                        },
                        width: {
                            type: Number,
                            default: 180
                        }
                    },
                    computed: {
                        cssVariables: function() {
                            return {
                                "--theme": this.theme,
                                width: this.$props.width + "px"
                            }
                        }
                    }
                },
                c = Object(l.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tdl-crying-t-rex",
                            style: t.cssVariables
                        }, [n("svg", {
                            attrs: {
                                width: "481px",
                                viewBox: "0 0 481 348",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink"
                            }
                        }, [n("g", {
                            attrs: {
                                id: "Final-design",
                                stroke: "none",
                                "stroke-width": "1",
                                fill: "none",
                                "fill-rule": "evenodd"
                            }
                        }, [n("g", {
                            attrs: {
                                id: "Lime-To-Rex-Copy-2",
                                transform: "translate(0.000000, 8.000000)",
                                "fill-rule": "nonzero"
                            }
                        }, [n("circle", {
                            attrs: {
                                id: "Oval",
                                stroke: "#383B40",
                                "stroke-width": "14.3047",
                                fill: "#CDDC39",
                                cx: "421.8",
                                cy: "21.9",
                                r: "21.9"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "40.2 88.4 38.8 105.1 49.9 116.5 65 110.3 69.5 93.9 56.4 82.8"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "71.4 94.3 69.3 110.9 81.9 122.2 97.4 115.8 101.3 99.6 87.8 88.4"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "306.5 66.9 321.3 71.5 335.1 67.3 333.6 53.4 321.2 41.4 305.2 49.2"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "322.2 39.6 338.7 50 352 39.3 349.5 25.2 344.2 16.8 325.3 21"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "103.3 99.8 101.8 116.8 115.4 127.1 130.1 120.2 133 103.7 119.4 93.1"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "134.8 103.8 134.1 120.5 147.8 130.3 162.9 123.2 164.9 106.2 150.8 96.2"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "166.7 106.3 167 123.3 182.3 131.3 196.1 122.1 196.9 106.8 181 97.1"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "198.6 106.7 200.1 122.9 216.7 128.8 229.4 117.8 228.7 104.7 212.6 96.4"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "230.5 104.7 233.1 117.7 248.8 123.7 262 112.8 259.7 99.3 243.3 92.6"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "261.5 98.9 265.7 111.9 285.2 119.4 295.2 103.6 289.5 89.6 273 85.5"
                            }
                        }), t._v(" "), n("polygon", {
                            attrs: {
                                id: "Path",
                                fill: "#CDDC39",
                                points: "290.7 88.7 298 98.2 314.6 96.6 319.3 76.8 306 68.8 293.2 75.4"
                            }
                        }), t._v(" "), n("path", {
                            attrs: {
                                id: "Path",
                                d: "M143.2,112.9 C104.6,109.5 60.7,101.9 11.2,89.7 C9,89 6.6,89.4 4.7,90.8 C3.3,91.7 2.2,92.9 1.4,94.3 C-1.2,98.9 0.5,104.8 5.1,107.4 L230,257.3 C251,264.4 236.3,300.1 230,329 C230,334.1 234.1,338.2 239.2,338.2 L341.8,338.4 C344.7,321.4 343.5,280.6 315.9,281.6 C305.2,281.8 295.3,285.4 287.3,291.6 L293,256 L295.8,252.6 C301,250.2 305.4,246.2 308.5,241.3 C326.3,234.1 338.1,226.2 346.1,217.6 C349,222.1 350.8,227.5 350.9,233.2 C351.2,245 369.6,245 369.3,233.2 C369.1,221.4 364.6,210.3 356.9,201.7 C358.8,197.7 360.2,193.6 361.4,189.3 C371.1,194 377.7,203.9 377.9,215.4 C378.2,227.2 396.6,227.2 396.3,215.4 C396,200.2 388.6,186 376.3,177.1 C388.6,168.2 396,154 396.2,138.8 C396.2,138.2 396.2,137.6 396.1,137 L397.5,110.3 C399.6,111.3 401.7,112.5 403.2,113 C407.9,114.6 412.7,115.8 417.6,116.8 C427.6,118.7 438.2,119.4 448.3,117.6 C477.6,112.2 484.3,78.3 469,56 C459.9,42.8 444.8,29.6 430.4,22.5 C409.6,12.3 384.4,10.6 362.6,18.9 C343.4,26.2 327,40.9 317.1,58.9 C314.6,63.4 312.6,68.2 311.4,73.2 C310.3,77.8 309.7,82.8 307.3,86.9 C304.9,91.1 300.7,94.1 296.4,96.2 C287.1,100.7 276.6,103.4 266.6,106 C256.9,108.6 246.5,110.7 235.5,112.2 C230.3,112.9 225,113.5 219.5,113.9 C209.6,114.7 199.3,115.1 188.4,115.2 C183.6,115 179,115 174.3,114.8 C164.3,114.5 154,113.9 143.2,112.9 Z",
                                fill: "#383B40"
                            }
                        }), t._v(" "), n("path", {
                            attrs: {
                                id: "Path-Copy-6",
                                d: "M305,339 L328.22082,339 L397.258675,339.038348 L481,339 L469,326 L331.77918,313 L319.741325,317.908555 C310.919871,328.094674 306.339429,334.458489 306,337 C305.660571,339.541511 305.327237,340.208177 305,339 Z",
                                fill: "#CDDC39"
                            }
                        }), t._v(" "), n("circle", {
                            attrs: {
                                id: "Oval",
                                stroke: "#383B40",
                                "stroke-width": "14.3047",
                                fill: "#CDDC39",
                                cx: "375.2",
                                cy: "24.5",
                                r: "21.9"
                            }
                        }), t._v(" "), n("g", {
                            attrs: {
                                id: "water",
                                transform: "translate(368.000000, 59.500000) rotate(25.000000) translate(-368.000000, -59.500000) translate(362.000000, 51.000000)",
                                fill: "#CDDC39"
                            }
                        }, [n("path", {
                            attrs: {
                                id: "Path",
                                d: "M6,17 C2.6862915,17 0,14.3137085 0,11 C0,7 6,0.25 6,0.25 C6,0.25 12,7 12,11 C12,14.3137085 9.3137085,17 6,17 Z"
                            }
                        })]), t._v(" "), n("g", {
                            attrs: {
                                id: "water-copy",
                                transform: "translate(340.000000, 101.000000)",
                                fill: "#CDDC39"
                            }
                        }, [n("path", {
                            attrs: {
                                id: "Path",
                                d: "M8,18 C4.6862915,18 2,15.3137085 2,12 C2,8 8,1.25 8,1.25 C8,1.25 14,8 14,12 C14,15.3137085 11.3137085,18 8,18 Z",
                                transform: "translate(8.000000, 9.625000) rotate(9.000000) translate(-8.000000, -9.625000) "
                            }
                        })]), t._v(" "), n("g", {
                            attrs: {
                                id: "water-copy-6",
                                transform: "translate(443.000000, 130.500000) rotate(-11.000000) translate(-443.000000, -130.500000) translate(437.000000, 122.000000)",
                                fill: "#CDDC39"
                            }
                        }, [n("path", {
                            attrs: {
                                id: "Path",
                                d: "M6,17 C2.6862915,17 0,14.3137085 0,11 C0,7 6,0.25 6,0.25 C6,0.25 12,7 12,11 C12,14.3137085 9.3137085,17 6,17 Z"
                            }
                        })]), t._v(" "), n("g", {
                            attrs: {
                                id: "water-copy-7",
                                transform: "translate(437.000000, 204.000000)",
                                fill: "#CDDC39"
                            }
                        }, [n("path", {
                            attrs: {
                                id: "Path",
                                d: "M6,17 C2.6862915,17 0,14.3137085 0,11 C0,7 6,0.25 6,0.25 C6,0.25 12,7 12,11 C12,14.3137085 9.3137085,17 6,17 Z"
                            }
                        })]), t._v(" "), n("g", {
                            attrs: {
                                id: "water-copy-9",
                                transform: "translate(432.000000, 278.000000)",
                                fill: "#CDDC39"
                            }
                        }, [n("path", {
                            attrs: {
                                id: "Path",
                                d: "M6,17 C2.6862915,17 0,14.3137085 0,11 C0,7 6,0.25 6,0.25 C6,0.25 12,7 12,11 C12,14.3137085 9.3137085,17 6,17 Z"
                            }
                        })]), t._v(" "), n("g", {
                            attrs: {
                                id: "water-copy-3",
                                transform: "translate(340.000000, 174.000000)",
                                fill: "#CDDC39"
                            }
                        }, [n("path", {
                            attrs: {
                                id: "Path",
                                d: "M6,17 C2.6862915,17 0,14.3137085 0,11 C0,7 6,0.25 6,0.25 C6,0.25 12,7 12,11 C12,14.3137085 9.3137085,17 6,17 Z"
                            }
                        })]), t._v(" "), n("g", {
                            attrs: {
                                id: "water-copy-5",
                                transform: "translate(343.000000, 249.000000)",
                                fill: "#CDDC39"
                            }
                        }, [n("path", {
                            attrs: {
                                id: "Path",
                                d: "M6,17 C2.6862915,17 0,14.3137085 0,11 C0,7 6,0.25 6,0.25 C6,0.25 12,7 12,11 C12,14.3137085 9.3137085,17 6,17 Z"
                            }
                        })])])])])])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-464263ca_0", {
                        source: ".tdl-crying-t-rex{fill:#f3f3f3}",
                        map: void 0,
                        media: void 0
                    })
                }), d, undefined, !1, undefined, !1, r.a, void 0, void 0),
                h = {
                    name: "tdl-magnifying-glass",
                    props: {
                        theme: {
                            type: String,
                            required: !1,
                            default: "dark"
                        },
                        width: {
                            type: Number,
                            default: 180
                        }
                    },
                    computed: {
                        cssVariables: function() {
                            return {
                                "--theme": this.theme,
                                width: this.$props.width + "px"
                            }
                        }
                    }
                },
                m = Object(l.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tdl-magnifying-glass",
                            style: t.cssVariables
                        }, [n("svg", {
                            attrs: {
                                width: "73",
                                height: "95",
                                viewBox: "0 0 73 95",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [n("path", {
                            attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d: "M25 37C25 29.8203 30.8203 24 38 24C41.4478 24 44.7544 25.3696 47.1924 27.8076C49.6304 30.2456 51 33.5522 51 37C51 40.4478 49.6304 43.7544 47.1924 46.1924C44.7544 48.6304 41.4478 50 38 50C34.5522 50 31.2456 48.6304 28.8076 46.1924C26.3696 43.7544 25 40.4478 25 37ZM33.45 31.8C32.41 31.8 31.5 32.71 31.5 33.75C31.5 34.79 32.41 35.7 33.45 35.7C34.49 35.7 35.4 34.79 35.4 33.75C35.4 32.71 34.49 31.8 33.45 31.8ZM41.601 43.799C41.016 42.85 39.625 42.2 38 42.2C36.375 42.2 34.984 42.85 34.399 43.799L32.553 41.953C33.723 40.536 35.725 39.6 38 39.6C40.275 39.6 42.277 40.536 43.447 41.953L41.601 43.799ZM40.6 33.75C40.6 34.79 41.51 35.7 42.55 35.7C43.59 35.7 44.5 34.79 44.5 33.75C44.5 32.71 43.59 31.8 42.55 31.8C41.51 31.8 40.6 32.71 40.6 33.75Z",
                                fill: "white",
                                "fill-opacity": "0.9"
                            }
                        }), t._v(" "), n("path", {
                            attrs: {
                                d: "M18 26L15 23",
                                stroke: "#CDDC39",
                                "stroke-width": "4"
                            }
                        }), t._v(" "), n("path", {
                            attrs: {
                                d: "M23 23V19",
                                stroke: "#CDDC39",
                                "stroke-width": "4"
                            }
                        }), t._v(" "), n("path", {
                            attrs: {
                                d: "M19 32H15",
                                stroke: "#CDDC39",
                                "stroke-width": "4"
                            }
                        }), t._v(" "), n("ellipse", {
                            attrs: {
                                cx: "36.5",
                                cy: "36",
                                rx: "34.5",
                                ry: "34",
                                stroke: "#CDDC39",
                                "stroke-width": "3.6855"
                            }
                        }), t._v(" "), n("path", {
                            attrs: {
                                d: "M20.3855 66.5843L23.2698 68.2426L8.23482 94.1963L5.35056 92.5379L20.3855 66.5843Z",
                                fill: "#CDDC39"
                            }
                        })])])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-6cb9a6e2_0", {
                        source: ".tdl-magnifying-glass{fill:#f3f3f3}",
                        map: void 0,
                        media: void 0
                    })
                }), h, undefined, !1, undefined, !1, r.a, void 0, void 0),
                f = {
                    name: "tdl-error",
                    components: {
                        MdButton: o.a,
                        TdlCryingTRex: c,
                        TdlMagnifyingGlass: m
                    },
                    props: {
                        torreBaseUrl: {
                            type: String,
                            required: !0
                        },
                        statusCode: {
                            type: Number,
                            default: 404
                        },
                        errorMessage: {
                            type: String,
                            required: !1
                        },
                        errorTitle: {
                            type: String,
                            required: !1
                        },
                        errorStatus: {
                            type: String,
                            required: !1
                        }
                    },
                    computed: {
                        buttonText: function() {
                            return 404 === this.$props.statusCode ? this.$t("Go to homepage") : this.$t("Refresh")
                        },
                        status: function() {
                            return this.errorStatus ? this.errorStatus : 404 === this.$props.statusCode ? this.$t("404 Error - Page not found.") : this.$t("An error occurred")
                        },
                        message: function() {
                            return this.errorMessage ? this.$t(this.errorMessage) : 404 === this.$props.statusCode ? this.$t("We can’t seem to find the page you’re looking for.") : this.$t("To-rrex, our mascot, made a mistake that ended up a in series of unfortunate events.")
                        },
                        title: function() {
                            return this.errorTitle ? this.errorTitle : 404 === this.$props.statusCode ? this.$t("Oops!") : this.$t("Sorry!")
                        }
                    },
                    methods: {
                        handleHelpCTA: function() {
                            this.$root.$emit("help-fab::open")
                        }
                    }
                },
                _ = Object(l.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tdl-error"
                        }, [n("div", {
                            staticClass: "tdl-error-container"
                        }, [404 === t.$props.statusCode ? n("tdl-magnifying-glass", {
                            staticClass: "logo-svg"
                        }) : t._e(), t._v(" "), n("div", {
                            staticClass: "tdl-error-title"
                        }, [t._v("\n      " + t._s(t.title) + "\n    ")]), t._v(" "), n("h1", {
                            staticClass: "tdl-error-code"
                        }, [t._v("\n      " + t._s(t.status) + "\n    ")]), t._v(" "), t.$slots.errorMessage ? n("div", {
                            staticClass: "tdl-error-message"
                        }, [t._t("errorMessage")], 2) : n("div", {
                            staticClass: "tdl-error-message"
                        }, [t._v("\n      " + t._s(t.message) + "\n    ")]), t._v(" "), 404 !== t.$props.statusCode ? n("tdl-crying-t-rex", {
                            staticClass: "logo-svg"
                        }) : t._e(), t._v(" "), 404 === t.$props.statusCode ? n("a", {
                            staticClass: "md-button md-raised md-primary",
                            attrs: {
                                href: t.torreBaseUrl
                            }
                        }, [t._v(t._s(t.buttonText))]) : n("md-button", {
                            staticClass: "md-raised md-primary",
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.$emit("handleErrorClick")
                                }
                            }
                        }, [t._v("\n      " + t._s(t.buttonText) + "\n    ")]), t._v(" "), 404 !== t.$props.statusCode ? n("div", {
                            staticClass: "tdl-error-message"
                        }, [t._v("\n      " + t._s(t.$t("If the problem persists,")) + "\n      "), n("a", {
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.handleHelpCTA.apply(null, arguments)
                                }
                            }
                        }, [t._v("\n        " + t._s(t.$t("Contact us")) + "\n      ")]), t._v("\n      " + t._s(t.$t("or")) + "\n      "), n("a", {
                            attrs: {
                                href: t.torreBaseUrl
                            }
                        }, [t._v(" " + t._s(t.$t("Visit the homepage")) + " ")])]) : t._e()], 1)])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-05aafdba_0", {
                        source: ".tdl-error{position:absolute;width:100%;display:flex;align-items:center;justify-content:center}.tdl-error .tdl-error-container{text-align:center;padding:16px}.tdl-error .tdl-error-container .logo-svg{width:180px;height:auto;margin:30px auto 50px auto}.tdl-error .tdl-error-container .tdl-error-title{font-size:55px;color:rgba(255,255,255,.87)}.tdl-error .tdl-error-container .tdl-error-code{font-size:23px;line-height:24px;margin-top:30px;font-weight:400;color:rgba(255,255,255,.87)}.tdl-error .tdl-error-container .tdl-error-message{margin:24px 0;font-size:16px;color:rgba(255,255,255,.65);font-weight:400}.tdl-error .tdl-error-container .tdl-error-message a{text-decoration:none;text-transform:uppercase;color:#cddc39}",
                        map: void 0,
                        media: void 0
                    })
                }), f, undefined, !1, undefined, !1, r.a, void 0, void 0)
        },
        806: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return nt
            }));
            var o = n(38),
                l = n(11),
                r = (n(53), n(45), n(74), n(51), n(32), n(28), n(201), n(31), n(15), n(33), n(34), n(65), n(35)),
                d = n(27),
                c = n(127),
                h = n(236),
                m = n(135),
                f = (n(200), n(37), n(382), n(315)),
                _ = n(188),
                y = n(440),
                v = n(805),
                w = n(71),
                x = n(117),
                I = n(157),
                C = n(18),
                S = n(374),
                k = (n(52), n(83), n(47), n(40), n(60), n(68), n(259)),
                L = n(85),
                $ = n(98),
                B = n(105),
                T = n(153),
                O = ["selector"];

            function D(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function M(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? D(Object(n), !0).forEach((function(e) {
                        Object(C.a)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var E, N = {
                    name: "tdl-typeahead-dialog",
                    components: {
                        MdButton: r.a,
                        MdChip: I.a,
                        MdIcon: d.a,
                        MdInput: c.a,
                        MdInputContainer: m.a,
                        MdList: L.a,
                        MdListItem: $.a,
                        MdProgress: h.a,
                        MdWhiteframe: B.a
                    },
                    mixins: [k.a],
                    props: {
                        selectedItems: {
                            type: Array,
                            required: !0
                        },
                        defaultItemSelector: Function,
                        disabled: Boolean,
                        addNewItem: Boolean,
                        addNewItemSecondary: Boolean,
                        addNewItemWhenQueryMatches: Boolean,
                        allowNewItemTextDuplication: Boolean,
                        fixedItem: Object,
                        itemDisabled: Function,
                        itemFactory: Function,
                        itemFactorySecondary: Function,
                        loading: Boolean,
                        itemList: {
                            type: Object,
                            required: !0
                        },
                        addItemOnKeypress: {
                            type: String,
                            required: !1
                        },
                        acceptFocusRequests: Boolean,
                        initialHighlightedIndex: Number,
                        inputLabel: String,
                        inputPlaceholder: String,
                        itemSelectedValidator: {
                            type: Function,
                            required: !0
                        },
                        maxQueryLength: {
                            type: [Number, String],
                            default: 1 / 0
                        },
                        addNewItemSlotPosition: {
                            type: String
                        },
                        searchHintMode: String,
                        minChars: Number,
                        breakLines: {
                            type: Boolean,
                            default: !1
                        },
                        showAsSelect: {
                            type: Boolean,
                            default: !1
                        },
                        showNoResultDefaultMessage: {
                            type: Boolean,
                            default: !1
                        },
                        blinkingCursorOnPlaceholder: {
                            type: Boolean,
                            default: !1
                        },
                        clearOnClose: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: {
                        inputContainerClasses: function() {
                            return {
                                "typeahead-dialog__input-container--open": this.openInputContainer
                            }
                        },
                        hasAfterInputSlot: function() {
                            return !!this.$slots.mobileAfterInput || !!this.$scopedSlots.mobileAfterInput
                        },
                        hasBeforeInputSlot: function() {
                            return !!this.$slots.mobileBeforeInput || !!this.$scopedSlots.mobileBeforeInput
                        },
                        hasBeforeListSlot: function() {
                            return !!this.$slots.mobileBeforeList || !!this.$scopedSlots.mobileBeforeList
                        },
                        hasChipsSlot: function() {
                            return !!this.$slots.mobileChips || !!this.$scopedSlots.mobileChips
                        },
                        hasCreateSlot: function() {
                            return !!this.$slots.mobileCreate || !!this.$scopedSlots.mobileCreate
                        },
                        hasCreateSlotSecondary: function() {
                            return !!this.$slots.mobileCreateSecondary || !!this.$scopedSlots.mobileCreateSecondary
                        },
                        hasNoResultsSlot: function() {
                            return !!this.$slots.mobileNoResults || !!this.$scopedSlots.mobileNoResults
                        },
                        noResultsVisible: function() {
                            return this.hasNoResultsSlot && this.emptyList
                        },
                        emptyList: function() {
                            return 0 === this.flattenItemList.length && this.query.length >= this.minChars
                        },
                        showAddNewItem: function() {
                            return this.addNewItem && this.queryHasMinLength && (!this.queryInItemList || this.addNewItemWhenQueryMatches)
                        },
                        showAddNewItemSecondary: function() {
                            return this.addNewItemSecondary && this.queryHasMinLength && (!this.queryInItemList || this.addNewItemWhenQueryMatches)
                        }
                    },
                    data: function() {
                        return {
                            openInputContainer: !1,
                            searchInputFocused: !1,
                            mdiArrowLeftIcon: null,
                            mdiCloseIcon: null,
                            mdiMagnifyIcon: null,
                            mdiMenuDownIcon: null,
                            allowSelectItem: !0,
                            showBlinkingCursor: !1
                        }
                    },
                    watch: {
                        disabled: function(t) {
                            t && (this.openInputContainer = !1, this.$emit("dialog-closed"))
                        },
                        searchInputFocused: function(t) {
                            this.$emit("focused", {
                                focused: t,
                                query: this.query
                            })
                        },
                        openInputContainer: function(t) {
                            Object(T.b)() && (t ? (this.disableScroll(), document.body.classList.add("scroll-blocked-safari")) : (this.enableScroll(), document.body.classList.remove("scroll-blocked-safari")))
                        }
                    },
                    created: function() {
                        var t = this;
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            var o, l, r, d, c;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.e(2).then(n.bind(null, 638));
                                    case 2:
                                        o = e.sent, l = o.mdiArrowLeft, r = o.mdiClose, d = o.mdiMagnify, c = o.mdiMenuDown, t.mdiArrowLeftIcon = l, t.mdiCloseIcon = r, t.mdiMagnifyIcon = d, t.mdiMenuDownIcon = c;
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.$refs && t.$refs.inputDialog && (document.body.appendChild(t.$refs.inputDialog), t.$emit("query-changed", t.query)), window.addEventListener("popstate", t.handleBackButton)
                        })), this.$on("item-selected", this.handleItemSelected), this.allowNewItemTextDuplication && (this.allowDuplicateNameItemCreation = !0), this.blinkingCursorOnPlaceholder && this.startBlinkingCursor()
                    },
                    beforeDestroy: function() {
                        this.$refs.inputDialog && this.$refs.inputDialog.parentNode && this.$refs.inputDialog.parentNode === document.body && document.body.removeChild(this.$refs.inputDialog), this.$off("item-selected", this.handleItemSelected), Object(T.b)() && document.body.classList.remove("scroll-blocked-safari"), window.removeEventListener("popstate", this.handleBackButton)
                    },
                    methods: {
                        onSearchInputFocus: function() {
                            this.searchInputFocused = !0
                        },
                        onSearchInputBlur: function() {
                            this.searchInputFocused = !1, this.$emit("changed")
                        },
                        openDialog: function() {
                            this.openInputContainer = !0, this.reset(), this.$emit("dialog-opened"), this.handleRouteOpen()
                        },
                        closeInputContainer: function() {
                            this.clearOnClose && this.clear(), this.openInputContainer = !1, this.$emit("dialog-closed"), this.handleRouteClose()
                        },
                        deleteSelected: function(t) {
                            this.$emit("item-removed", t)
                        },
                        closeDialogList: function() {
                            history.back()
                        },
                        handleBackButton: function() {
                            this.handleItemSelected()
                        },
                        handleClearSearch: function() {
                            this.clear(), this.reset()
                        },
                        handleItemSelected: function() {
                            this.reset(), this.closeInputContainer()
                        },
                        handleRouteClose: function() {
                            var t = this;
                            this.$route && this.$route.query && this.$route.query.selector && setTimeout((function() {
                                var e = t.$route.query,
                                    n = (e.selector, Object(S.a)(e, O));
                                t.$router.replace({
                                    path: t.$route.path,
                                    query: n
                                })
                            }), 50)
                        },
                        handleRouteOpen: function() {
                            this.$router && this.$router.push({
                                path: this.$route.path,
                                query: M(M({}, this.$route.query), {}, {
                                    selector: "open"
                                })
                            })
                        },
                        reset: function() {
                            var t = this;
                            this.allowSelectItem = !0, this.$nextTick((function() {
                                t.$refs.searchInput && t.$refs.searchInput.$el.focus()
                            }))
                        },
                        textInputHandler: function(t) {
                            this.addItemOnKeypress && this.addItemOnKeypress === t.data && this.addNewItem && (t.preventDefault(), this.createItem())
                        },
                        itemClass: function(t, e) {
                            var n = {};
                            return this.defaultSelectableItem && (n["results__result--selectable"] = this.defaultSelectableItem.id === t.id), this.enabledInitialHighlightedItemIndex === e && (n["md-highlighted"] = !0), n
                        },
                        selectDefaultItem: function() {
                            this.defaultSelectableItem && this.selectItem(this.defaultSelectableItem)
                        },
                        preventScroll: function(t) {
                            this.$refs.$results && !this.$refs.$results.contains(t.target) && t.preventDefault()
                        },
                        requestFocus: function() {
                            this.acceptFocusRequests && this.openDialog()
                        },
                        handleClickListItem: function(t) {
                            this.allowSelectItem && (this.allowSelectItem = !1, this.selectItem(t))
                        },
                        startBlinkingCursor: function() {
                            var t = this;
                            setInterval((function() {
                                t.showBlinkingCursor = !t.showBlinkingCursor
                            }), 500)
                        }
                    }
                },
                R = n(3),
                A = n(4),
                P = {
                    default: "tdl-typeahead-add-new-item",
                    components: {
                        MdIcon: d.a
                    },
                    props: {
                        query: String,
                        addNewItemElement: {
                            type: Object
                        },
                        secondary: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            mdiKeyboardReturnIcon: null
                        }
                    },
                    created: function() {
                        var t = this;
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            var o, l;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.e(2).then(n.bind(null, 638));
                                    case 2:
                                        o = e.sent, l = o.mdiKeyboardReturn, t.mdiKeyboardReturnIcon = l;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                },
                H = (n(180), n(352)),
                F = {
                    name: "tdl-typeahead-list",
                    components: {
                        MdInput: c.a,
                        MdIcon: d.a,
                        MdProgress: h.a,
                        MdList: L.a,
                        MdListItem: $.a
                    },
                    mixins: [k.a],
                    props: {
                        selectedItems: {
                            type: Array,
                            required: !0
                        },
                        defaultItemSelector: Function,
                        disabled: Boolean,
                        addNewItem: Boolean,
                        addNewItemSecondary: Boolean,
                        addNewItemWhenQueryMatches: Boolean,
                        allowNewItemTextDuplication: Boolean,
                        desktopCloseListOnItemSelected: Boolean,
                        fixedItem: Object,
                        itemFactory: Function,
                        itemFactorySecondary: Function,
                        loading: Boolean,
                        initialHighlightedIndex: Number,
                        inputPlaceholder: String,
                        itemDisabled: Function,
                        itemList: {
                            type: Object,
                            required: !0
                        },
                        itemSelectedValidator: {
                            type: Function,
                            required: !0
                        },
                        addItemOnKeypress: {
                            type: String,
                            required: !1
                        },
                        maxQueryLength: {
                            type: [Number, String],
                            default: 1 / 0
                        },
                        addNewItemSlotPosition: {
                            type: String,
                            default: "bottom"
                        },
                        queryValidator: {
                            type: Function,
                            default: function(t) {
                                var e = this;
                                return !(!this.activeItemList && t.length > 0 && !this.flattenItemList.some((function(n) {
                                    return e.isEqualToText(n, t)
                                })))
                            }
                        },
                        searchHintMode: String,
                        selectItemOnInputBlur: {
                            type: Boolean,
                            required: !0
                        },
                        showNoResultDefaultMessage: {
                            type: Boolean,
                            default: !1
                        },
                        minChars: Number,
                        bounds: {
                            type: Object,
                            required: !1
                        },
                        inhibitScroll: {
                            type: Boolean,
                            default: !0
                        },
                        shouldReopen: {
                            type: Boolean,
                            default: !0
                        },
                        showAsSelect: {
                            type: Boolean,
                            default: !1
                        },
                        createOnBlur: {
                            type: Boolean,
                            default: !1
                        },
                        onlyOneSelectedItem: {
                            type: Boolean,
                            default: !1
                        },
                        noPadding: {
                            type: Boolean,
                            default: !1
                        },
                        itemReady: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        handleFocusChangeThrottled: function() {
                            return Object(H.a)(this.handleFocusChange, 200, {
                                trailing: !this.closeListOnItemSelected
                            })
                        },
                        isInteractingWithList: function() {
                            return this.listItemPressed || this.highlighted >= 0
                        },
                        isQueryInvalid: function() {
                            return !this.loading && !this.addNewItem && !this.queryValidator(this.query)
                        },
                        itemListVisible: function() {
                            if (this.query.length >= this.minChars) {
                                var t = this.hasNoResultsSlot && 0 === this.flattenItemList.length;
                                return this.activeItemList && (this.itemListHasItems || this.addNewItem || t)
                            }
                            return !1
                        },
                        subtitleTotalItems: function() {
                            return Object(_.a)(this.itemList, (function(t, e, n) {
                                return t + ("$default" !== n && e.length > 0 ? 1 : 0)
                            }), 0)
                        },
                        itemListHasItems: function() {
                            return this.flattenItemList.length > 0
                        },
                        hasAfterInputSlot: function() {
                            return !!this.$slots.desktopAfterInput || !!this.$scopedSlots.desktopAfterInput
                        },
                        hasBeforeInputSlot: function() {
                            return !!this.$slots.desktopBeforeInput || !!this.$scopedSlots.desktopBeforeInput
                        },
                        hasBeforeListSlot: function() {
                            return !!this.$slots.desktopBeforeList || !!this.$scopedSlots.desktopBeforeList
                        },
                        hasCreateSlot: function() {
                            return !!this.$slots.desktopCreate || !!this.$scopedSlots.desktopCreate
                        },
                        hasCreateSlotSecondary: function() {
                            return !!this.$slots.desktopCreateSecondary || !!this.$scopedSlots.desktopCreateSecondary
                        },
                        hasNoResultsSlot: function() {
                            return !!this.$slots.desktopNoResults || !!this.$scopedSlots.desktopNoResults
                        },
                        noResultsVisible: function() {
                            return 0 === this.flattenItemList.length && this.query
                        },
                        showAddNewItem: function() {
                            return this.addNewItem && this.queryHasMinLength && (!this.queryInItemList || this.addNewItemWhenQueryMatches)
                        },
                        showAddNewItemSecondary: function() {
                            return this.addNewItemSecondary && this.queryHasMinLength && (!this.queryInItemList || this.addNewItemWhenQueryMatches)
                        }
                    },
                    data: function() {
                        return {
                            focused: !1,
                            activeItemList: !1,
                            highlightedChanged: !1,
                            highlighted: this.initialHighlightedIndex,
                            listItemPressed: !1,
                            listElementRef: void 0,
                            dirtyChecker: void 0,
                            mdiMagnifyIcon: null,
                            mdiMenuDownIcon: null,
                            outsideClickListener: void 0,
                            positionHandlerTimeout: void 0,
                            closeListOnItemSelected: this.desktopCloseListOnItemSelected
                        }
                    },
                    watch: {
                        isQueryInvalid: function(t) {
                            this.$emit("query-invalid", t)
                        },
                        itemReady: function(t) {
                            var e = this;
                            t && setTimeout((function() {
                                e.setListTopLeftHeight()
                            }))
                        },
                        itemList: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.setListTopLeftHeight(), t.scrollToTop()
                            }))
                        },
                        itemListVisible: function(t) {
                            var e = this;
                            t ? (this.inhibitScroll && this.disableScroll(this.$refs.input.$el), this.schedulePositionHandler(), this.$nextTick((function() {
                                e.setListTopLeftHeight()
                            }))) : (this.disableOutsideClickListener(), this.disablePositionHandlerTimeout(), this.inhibitScroll && this.enableScroll(this.$refs.input.$el))
                        },
                        selectedItems: function(t, e) {
                            t.length < e.length && this.shouldReopen && this.applyInputFocus()
                        },
                        disabled: function(t) {
                            t && this.onInputBlur()
                        },
                        focused: function(t) {
                            this.$emit("focused", {
                                focused: t,
                                query: this.query
                            })
                        }
                    },
                    created: function() {
                        var t = this;
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            var o, l, r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.e(2).then(n.bind(null, 638));
                                    case 2:
                                        o = e.sent, l = o.mdiMagnify, r = o.mdiMenuDown, t.mdiMagnifyIcon = l, t.mdiMenuDownIcon = r;
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    mounted: function() {
                        var t = this;
                        this.$nextTick((function() {
                            t.$refs && t.$refs.list && (t.listElementRef = t.$refs.list.$el, document.body.appendChild(t.listElementRef))
                        })), this.$on("blur-dirty", this.inputIsBlur), this.$on("item-selected", (function() {
                            t.shouldReopen && t.applyInputFocus()
                        })), this.allowNewItemTextDuplication && (this.allowDuplicateNameItemCreation = !0)
                    },
                    updated: function() {
                        this.itemListVisible && this.enableOutsideClickListener()
                    },
                    beforeDestroy: function() {
                        this.listElementRef && this.listElementRef.parentNode && this.listElementRef.parentNode === document.body && (document.body.removeChild(this.listElementRef), this.listElementRef = void 0), this.disableOutsideClickListener(), this.disablePositionHandlerTimeout(), this.$off("item-selected", this.applyInputFocus)
                    },
                    methods: {
                        handleFocusChange: function(t) {
                            t ? this.onInputFocus() : this.onInputBlur()
                        },
                        handleKeydown: function(t) {
                            this.charHandler(t), "Enter" === t.key && this.activeItemList && this.closeListOnItemSelected && this.closeList(), this.openList()
                        },
                        onInputFocus: function() {
                            this.focused = !0, this.openList()
                        },
                        onInputBlur: function() {
                            var t = this;
                            this.focused = !1, this.$root.$emit("typeahead-input-blur", this.query), this.isInteractingWithList || (this.closeList(), clearTimeout(this.dirtyChecker), this.dirtyChecker = setTimeout((function() {
                                !t.focused && t.query && t.query.trim().length > 0 && !t.onlyOneSelectedItem && (t.$emit("blur-dirty"), t.$emit("changed"))
                            }), 1e3))
                        },
                        applyInputFocus: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.$refs.input && (t.$refs.input.$el.blur(), t.$nextTick((function() {
                                    !t.disabled && t.$refs.input && t.$refs.input.$el.focus()
                                })))
                            }))
                        },
                        openList: function() {
                            this.focused && (this.activeItemList || (this.initialHighlightedIndex < 0 && (this.highlighted = -1), this.highlightedChanged = !1, this.activeItemList = !0, this.$emit("list-opened"), this.inhibitScroll && this.disableScroll(this.showAsSelect ? void 0 : this.$refs.input.$el)))
                        },
                        closeList: function() {
                            this.activeItemList && (this.initialHighlightedIndex < 0 && (this.highlighted = -1), this.activeItemList = !1, this.$emit("list-closed"), this.$emit("changed"), this.inhibitScroll && this.enableScroll(this.$refs.input.$el))
                        },
                        highlightItem: function(t) {
                            var e = this.listElementRef.querySelectorAll(".typeahead-list__results-item:not(.md-disabled)");
                            e && e.length > 0 && (this.highlightedChanged = !0, this.highlighted >= 0 && e[this.highlighted].classList.remove("md-highlighted", "typeahead-list__results-item--selectable"), "up" === t && (0 === this.highlighted || -1 === this.highlighted ? this.highlighted = e.length - 1 : this.highlighted--), "down" === t && (this.highlighted === e.length - 1 ? this.highlighted = 0 : this.highlighted++), e[this.highlighted].classList.add("md-highlighted"), e[this.highlighted].children[1].focus(), this.$emit("change-highlighted-item", this.highlighted))
                        },
                        itemClass: function(t, e) {
                            var n = {};
                            return void 0 !== this.defaultSelectableItem && (n["typeahead-list__results-item--selectable"] = t.id === this.defaultSelectableItem.id), this.highlightedChanged || this.enabledInitialHighlightedItemIndex !== e || (n["md-highlighted"] = !0), n
                        },
                        selectDefaultItem: function() {
                            this.defaultSelectableItem && this.selectItemAndCloseList(this.defaultSelectableItem)
                        },
                        selectItemAndCloseList: function(t) {
                            this.selectItem(t), this.closeList()
                        },
                        createItemAndCloseList: function() {
                            this.createItem(this.showAddNewItemAlways), this.closeList()
                        },
                        createItemAndCloseListSecondary: function() {
                            this.createItemSecondary(this.showAddNewItemAlways), this.closeList()
                        },
                        requestLastItemDeletion: function() {
                            0 === this.query.length && this.selectedItems.length > 0 && !this.itemListVisible && this.$emit("item-removed", this.selectedItems[this.selectedItems.length - 1])
                        },
                        inputIsBlur: function() {
                            this.showAddNewItem && this.createOnBlur ? this.createItemAndCloseList() : this.trySelectItemMatchingQuery()
                        },
                        trySelectItemMatchingQuery: function() {
                            var t = this;
                            if (this.selectItemOnInputBlur) {
                                var e = this.flattenItemList.find((function(e) {
                                    return t.isEqualToText(e, t.query)
                                }));
                                e && this.selectItem(e)
                            }
                        },
                        handleItemClicked: function(t) {
                            this.closeListOnItemSelected ? this.selectItemAndCloseList(t) : this.selectItem(t)
                        },
                        handleItemMouseDown: function() {
                            this.listItemPressed = !0
                        },
                        handleItemMouseUp: function() {
                            var t = this;
                            this.listItemPressed = !1, this.$nextTick((function() {
                                t.onInputBlur()
                            }))
                        },
                        setListTopLeftHeight: function() {
                            var t = this.listElementRef,
                                input = this.$parent.$el,
                                e = input.getBoundingClientRect();
                            t.style.top = "".concat(e.top + input.clientHeight, "px"), t.style.left = "".concat(e.left, "px"), t.style.maxWidth = "".concat(input.clientWidth, "px");
                            var n = t.querySelector(".typeahead-list__results-item"),
                                o = t.querySelector(".typeahead-list__results-subtitle"),
                                l = n ? n.clientHeight : 48,
                                r = this.addNewItem ? 56 : 0,
                                d = o ? o.clientHeight : 68,
                                c = this.flattenItemList.length * l + this.subtitleTotalItems * d + r,
                                h = this.bounds || {
                                    left: 0,
                                    top: 0,
                                    right: window.innerWidth - 1,
                                    bottom: window.innerHeight - 1
                                };
                            if (e.top + input.clientHeight + c + l + d > h.bottom) {
                                var m = h.bottom - (e.top + input.clientHeight);
                                if (m < l * (this.showAddNewItem || this.showAddNewItemSecondary ? 5 : 3) + d * Math.min(1, this.subtitleTotalItems)) {
                                    var f = e.top - h.top > c ? e.top - c : h.top + 20,
                                        _ = f - (d + 16),
                                        y = _ >= 0 ? _ : 0,
                                        v = _ < 0 ? -1 * _ : 0;
                                    t.style.top = y + d + "px", t.style.height = "".concat(e.top - f - v, "px")
                                } else {
                                    var w = Math.min(c, m - 16);
                                    t.style.height = "".concat(w, "px")
                                }
                            } else t.style.height = "auto";
                            var x = t.getBoundingClientRect();
                            x.width * x.height > 0 && (this.listItemBoundingClientRect = x)
                        },
                        preventScroll: function(t) {
                            this.$refs.list && t.target !== this.$refs.list.$el || this.listElementRef.contains(t.target) || t.preventDefault()
                        },
                        requestFocus: function() {
                            this.applyInputFocus()
                        },
                        disableOutsideClickListener: function() {
                            this.outsideClickListener && (document.removeEventListener("mousedown", this.outsideClickListener), this.outsideClickListener = null)
                        },
                        disablePositionHandlerTimeout: function() {
                            this.positionHandlerTimeout && (clearInterval(this.positionHandlerTimeout), this.positionHandlerTimeout = void 0)
                        },
                        enableOutsideClickListener: function() {
                            var t = this;
                            this.outsideClickListener = function(e) {
                                var n = e.clientX,
                                    o = e.clientY,
                                    l = t.listItemBoundingClientRect,
                                    r = !!l && n >= l.x && n <= l.x + l.width && o >= l.y && o <= l.y + l.height,
                                    d = t.$parent.$el.getBoundingClientRect();
                                return n >= d.x && n <= d.x + d.width && o >= d.y && o <= d.y + d.height || r || t.closeList(), e.stopImmediatePropagation(), !1
                            }, document.addEventListener("mousedown", this.outsideClickListener)
                        },
                        schedulePositionHandler: function(t) {
                            var e = this;
                            !t && this.positionHandlerTimeout || (this.positionHandlerTimeout = setTimeout((function() {
                                var n = t || e.$refs.input.$el.getBoundingClientRect();
                                e.setListTopLeftHeightIfInputMoved(n)
                            }), 300))
                        },
                        setListTopLeftHeightIfInputMoved: function(t) {
                            var e = this.$refs.input.$el.getBoundingClientRect();
                            e.x !== t.x || e.y !== t.y || e.width !== t.width || e.height !== t.height || e.bottom !== t.bottom || e.left !== t.left || e.right !== t.right || e.top !== t.top ? (this.setListTopLeftHeight(), this.schedulePositionHandler(e)) : this.schedulePositionHandler(t)
                        },
                        onHintClick: function() {
                            this.$refs.input && (this.$refs.input.focus(), this.handleFocusChangeThrottled(!0))
                        },
                        scrollToTop: function() {
                            var t;
                            if (this.listElementRef && null !== (t = this.listElementRef.children) && void 0 !== t && t.length) {
                                var e = this.listElementRef.children.item(".typeahead-list__item-list--list-wrapper");
                                e && (e.scrollTop = 0)
                            }
                        }
                    }
                },
                j = n(154),
                U = N,
                z = Object(R.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "typeahead-dialog"
                        }, [t.blinkingCursorOnPlaceholder && !t.query ? n("img", {
                            class: ["typeahead-dialog__blinking-cursor", {
                                "typeahead-dialog__blinking-cursor-hide": t.showBlinkingCursor
                            }],
                            attrs: {
                                src: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1666197834/origin/search/blinking-cursor.svg",
                                alt: "blinking-cursor"
                            }
                        }) : t._e(), t._v(" "), n("md-input", {
                            staticClass: "typeahead-dialog__input-trigger",
                            attrs: {
                                disabled: t.disabled,
                                value: t.query,
                                debounce: 0,
                                placeholder: t.selectedItems.length ? "" : t.inputPlaceholder || t.inputLabel
                            },
                            on: {
                                focus: t.openDialog
                            }
                        }), t._v(" "), t.showAsSelect && !t.openInputContainer ? n("md-icon", {
                            staticClass: "typeahead-dialog__select-hint",
                            attrs: {
                                "icon-svg": t.mdiMenuDownIcon
                            }
                        }) : t._e(), t._v(" "), t.hasAfterInputSlot && !t.openInputContainer ? t._t("mobileAfterInput") : t._e(), t._v(" "), n("div", {
                            ref: "inputDialog",
                            staticClass: "typeahead-dialog__input-container",
                            class: [t.inputContainerClasses],
                            style: t.cssProps
                        }, [n("md-whiteframe", {
                            staticClass: "typeahead-dialog__search-actions"
                        }, [n("md-button", {
                            staticClass: "md-icon-button typeahead-dialog__search-actions-close",
                            on: {
                                click: t.closeDialogList
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiArrowLeftIcon
                            }
                        })], 1), t._v(" "), n("div", {
                            staticClass: "typeahead-dialog__search-actions-input"
                        }, [n("md-input-container", {
                            staticClass: "typeahead-dialog__search-actions-input-container--embed",
                            attrs: {
                                "md-clear": ""
                            }
                        }, [t.hasChipsSlot ? [t._t("mobileChips", null, {
                            value: t.selectedItems
                        })] : t._l(t.selectedItems, (function(e) {
                            return n("md-chip", {
                                key: e.id,
                                staticClass: "typeahead-dialog__input-container-chip",
                                attrs: {
                                    "md-deletable": ""
                                },
                                on: {
                                    delete: function(n) {
                                        return t.deleteSelected(e)
                                    }
                                }
                            }, [t._t("mobileChip", null, {
                                value: e
                            })], 2)
                        })), t._v(" "), n("div", {
                            staticClass: "typeahead-dialog__input-container-box"
                        }, [t.hasBeforeInputSlot ? t._t("mobileBeforeInput") : t._e(), t._v(" "), n("md-input", {
                            ref: "searchInput",
                            staticClass: "typeahead-dialog__input",
                            attrs: {
                                debounce: 0,
                                maxlength: t.maxQueryLength,
                                "disable-counter": !0,
                                placeholder: t.inputPlaceholder || t.inputLabel
                            },
                            on: {
                                focus: t.onSearchInputFocus,
                                blur: t.onSearchInputBlur
                            },
                            nativeOn: {
                                keydown: [function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.handleEnter.apply(null, arguments))
                                }, function(e) {
                                    return t.charHandler.apply(null, arguments)
                                }],
                                textInput: function(e) {
                                    return t.textInputHandler.apply(null, arguments)
                                }
                            },
                            model: {
                                value: t.query,
                                callback: function(e) {
                                    t.query = e
                                },
                                expression: "query"
                            }
                        }), t._v(" "), t.query.length > 0 || t.showSearchHint ? [0 === t.query.length ? n("md-icon", {
                            key: "hint",
                            staticClass: "typeahead-dialog__search-hint",
                            attrs: {
                                "icon-svg": t.mdiMagnifyIcon
                            }
                        }) : n("md-button", {
                            key: "clear",
                            staticClass: "md-icon-button md-dense",
                            on: {
                                click: t.handleClearSearch
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiCloseIcon
                            }
                        })], 1)] : t._e(), t._v(" "), t.hasAfterInputSlot && t.openInputContainer ? t._t("mobileAfterInput") : t._e()], 2)], 2)], 1)], 1), t._v(" "), t.loading ? n("md-progress", {
                            key: "stateLoading",
                            attrs: {
                                "md-indeterminate": ""
                            }
                        }) : n("div", {
                            key: "stateLoaded",
                            ref: "results",
                            staticClass: "typeahead-dialog__results results"
                        }, [n("md-list", {
                            ref: "list",
                            staticClass: "typeahead-dialog__results-list"
                        }, [t.flattenItemList.length > 0 && t.hasBeforeListSlot ? n("md-list-item", [t._t("mobileBeforeList")], 2) : t._e(), t._v(" "), !t.showNoResultDefaultMessage && t.noResultsVisible ? n("md-list-item", [t._t("mobileNoResults")], 2) : t._e(), t._v(" "), t.showNoResultDefaultMessage && t.emptyList ? n("md-list-item", [n("span", {
                            staticClass: "md-caption"
                        }, [t._v(t._s(t.$t("No results for $query", {
                            query: t.query
                        })))])]) : t._e(), t._v(" "), t._l(t.itemList, (function(e, title) {
                            return n("div", {
                                key: title
                            }, ["$default" !== title && e.length > 0 ? n("h4", {
                                staticClass: "md-caption typeahead-dialog__results-subtitle"
                            }, [t._v("\n            " + t._s(title) + "\n          ")]) : t._e(), t._v(" "), t._l(e, (function(e, o) {
                                return n("md-list-item", {
                                    key: e.id,
                                    staticClass: "typeahead-dialog__results-item",
                                    class: t.itemClass(e, o),
                                    attrs: {
                                        disabled: t.itemDisabled(e),
                                        "break-lines": t.breakLines
                                    },
                                    on: {
                                        click: function(n) {
                                            return t.handleClickListItem(e)
                                        }
                                    }
                                }, [t._t("mobileItem", null, {
                                    item: e,
                                    formatted: t.formatText(e)
                                })], 2)
                            }))], 2)
                        }))], 2), t._v(" "), t.fixedItem ? n("div", {
                            class: Object.assign({}, t.itemClass(t.fixedItem), {
                                results__result: !0,
                                "results__result--bottom": !0,
                                "results__result--fixed": !0
                            }),
                            attrs: {
                                disabled: t.itemDisabled(t.fixedItem)
                            },
                            on: {
                                click: function(e) {
                                    return t.selectItem(t.fixedItem)
                                }
                            }
                        }, [t._t("mobileItem", null, {
                            item: t.fixedItem,
                            formatted: t.formatText(t.fixedItem)
                        })], 2) : t._e(), t._v(" "), t.showAddNewItem && t.hasCreateSlot ? n("div", {
                            class: ["results__result", {
                                "results__result--top": "top" === t.addNewItemSlotPosition
                            }, {
                                "results__result--bottom": "bottom" === t.addNewItemSlotPosition
                            }],
                            on: {
                                click: t.createItem
                            }
                        }, [t._t("mobileCreate", null, {
                            query: t.query
                        })], 2) : t._e(), t._v(" "), t.showAddNewItemSecondary && t.hasCreateSlotSecondary ? n("div", {
                            class: ["results__result", {
                                "results__result--top": "top" === t.addNewItemSlotPosition
                            }, {
                                "results__result--bottom": "bottom" === t.addNewItemSlotPosition
                            }],
                            on: {
                                click: t.createItemSecondary
                            }
                        }, [t._t("mobileCreateSecondary", null, {
                            query: t.query
                        })], 2) : t._e()], 1)], 1)], 2)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-802abad2_0", {
                        source: "@media (max-width:600px){body.scroll-blocked-safari{position:fixed;background-color:#27292d}}.typeahead-dialog{display:flex;flex-grow:1}.typeahead-dialog__results-item.md-highlighted .md-button:not([disabled]){background-color:rgba(255,255,255,.12)}.typeahead-dialog__input-trigger{text-overflow:ellipsis}.typeahead-dialog__input-container{background-color:#27292d;display:none;position:fixed;top:0;left:0;height:100vh;width:100%;z-index:110}.typeahead-dialog__input-container--open{display:block}.typeahead-dialog__input-container .typeahead-dialog__search-actions{background-color:#383b40}.typeahead-dialog__input-container .md-progress{background-color:rgba(var(--theme-color-rgb-values),.38)}.typeahead-dialog__input-container .md-progress:not(.md-indeterminate) .md-progress-track{background-color:var(--theme-color)}.typeahead-dialog__input-container .md-progress .md-progress-track:after,.typeahead-dialog__input-container .md-progress .md-progress-track:before{background-color:var(--theme-color)}.typeahead-dialog__select-hint{position:absolute;top:0;left:initial;right:0;bottom:0;margin:auto 8px;color:var(--theme-color)!important}.typeahead-dialog__search-actions{display:flex;align-items:center;flex-direction:row;height:64px;padding:0 16px 0 12px}.typeahead-dialog__search-hint{margin-right:6px}.typeahead-dialog__search-actions-close{color:rgba(255,255,255,.65);margin:0!important}.typeahead-dialog__search-actions-input{flex-grow:1}.typeahead-dialog__search-actions-input-container--embed{flex-wrap:wrap}.typeahead-dialog__input-container-chip{margin-right:8px;margin-bottom:4px}.typeahead-dialog__input-container-box{display:flex;flex-direction:row;align-items:center;flex-grow:1}.typeahead-dialog__results{max-height:calc(100% - 64px);display:flex;flex-direction:column}.typeahead-dialog__results .results__result--top{order:-1}.typeahead-dialog__results .results__result--bottom{flex:1;display:flex;bottom:0;order:1;z-index:4}.typeahead-dialog__results .results__result--fixed{align-items:center;display:flex;font-size:16px;min-height:48px;padding:0 16px}.typeahead-dialog__results .results__result--fixed:hover{background-color:rgba(255,255,255,.15);cursor:pointer}.typeahead-dialog__results-list{flex:2;overflow-y:auto}.typeahead-dialog__results-subtitle{padding-left:16px;padding-right:16px;margin-top:24px;margin-bottom:16px;z-index:1}.typeahead-dialog__blinking-cursor{margin-right:2px;z-index:1}.typeahead-dialog__blinking-cursor-hide{visibility:hidden}.results__result--selectable{background-color:rgba(205,220,57,.12)}",
                        map: void 0,
                        media: void 0
                    })
                }), U, undefined, !1, undefined, !1, A.a, void 0, void 0),
                V = z,
                W = P,
                Q = Object(R.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            class: ["tdl-typeahead-add-new-item", {
                                "tdl-typeahead-add-new-item--seconday": t.secondary
                            }]
                        }, [t.addNewItemElement.icon && !t.addNewItemElement.iconset ? n("md-icon", {
                            attrs: {
                                "icon-svg": t.addNewItemElement.icon
                            }
                        }) : t._e(), t._v(" "), t.addNewItemElement.iconset ? n("md-icon", {
                            attrs: {
                                "icon-svg": t.addNewItemElement.iconset
                            }
                        }) : t._e(), t._v(" "), n("div", {
                            staticClass: "tdl-typeahead-add-new-item__text"
                        }, [n("p", {
                            staticClass: "md-body-1"
                        }, [t._v("\n      " + t._s(t.query) + "\n    ")]), t._v(" "), t.addNewItemElement.text ? n("p", {
                            staticClass: "md-subheading-2"
                        }, [n("span", [t._v("\n        " + t._s(t.addNewItemElement.text) + "\n        "), n("md-icon", {
                            staticClass: "tdl-typeahead-add-new-item__icon"
                        }, [t._v("keyboard_return")])], 1)]) : n("p", {
                            staticClass: "md-subheading-2"
                        }, [t.addNewItemElement.typePrefix ? n("span", [t._v("\n        " + t._s(t.addNewItemElement.typePrefix) + "\n      ")]) : n("span", [t._v("\n        " + t._s(t.$t("Add new")) + "\n      ")]), t._v(" "), n("span", {
                            staticClass: "tdl-typeahead-add-new-item__type"
                        }, [t._v("\n        " + t._s(t.addNewItemElement.type) + "\n        "), n("md-icon", {
                            staticClass: "tdl-typeahead-add-new-item__icon",
                            attrs: {
                                "icon-svg": t.mdiKeyboardReturnIcon
                            }
                        })], 1)])])], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-e4f065c4_0", {
                        source: ".tdl-lazy-loader-hide-background-image[data-v-e4f065c4]{background-image:none!important;top:0!important}.tdl-typeahead-add-new-item[data-v-e4f065c4]{background-color:#d8d8d8;display:flex;flex-grow:1;align-items:center;padding:16px;margin:0;overflow:hidden}.tdl-typeahead-add-new-item--seconday[data-v-e4f065c4]{background-color:#f4f4f4}.tdl-typeahead-add-new-item__text[data-v-e4f065c4]{overflow:hidden;margin-left:25px}.tdl-typeahead-add-new-item__text p[data-v-e4f065c4]:first-of-type{color:rgba(0,0,0,.65)}.tdl-typeahead-add-new-item__text p[data-v-e4f065c4]{color:rgba(0,0,0,.87)!important}.tdl-typeahead-add-new-item p[data-v-e4f065c4]{overflow:hidden;text-overflow:ellipsis;margin:0}.tdl-typeahead-add-new-item .md-icon[data-v-e4f065c4]{color:rgba(0,0,0,.87)!important;margin:0;min-width:var(24px);width:var(24px);min-height:var(24px);height:var(24px);font-size:var(24px)}.tdl-typeahead-add-new-item__type[data-v-e4f065c4]{text-transform:lowercase}.tdl-typeahead-add-new-item__icon[data-v-e4f065c4]{margin-left:4px;min-width:16px;width:16px;min-height:16px;height:16px;font-size:16px}",
                        map: void 0,
                        media: void 0
                    })
                }), W, "data-v-e4f065c4", !1, undefined, !1, A.a, void 0, void 0),
                G = F,
                K = Object(R.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "typeahead-list"
                        }, [n("div", {
                            staticClass: "typeahead-list__input-container"
                        }, [t.hasBeforeInputSlot ? t._t("desktopBeforeInput") : t._e(), t._v(" "), n("md-input", {
                            ref: "input",
                            staticClass: "typeahead-list__input",
                            class: {
                                "typeahead-list__input--with-hint": t.showSearchHint
                            },
                            attrs: {
                                tabindex: "0",
                                autocomplete: "off",
                                disabled: t.disabled,
                                debounce: 0,
                                maxlength: t.maxQueryLength,
                                "disable-counter": !0,
                                placeholder: t.inputPlaceholder
                            },
                            on: {
                                focus: function(e) {
                                    return t.handleFocusChangeThrottled(!0)
                                },
                                blur: function(e) {
                                    return t.handleFocusChangeThrottled(!1)
                                }
                            },
                            nativeOn: {
                                keydown: [function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.handleEnter.apply(null, arguments))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "tab", 9, e.key, "Tab") ? null : t.handleEnter.apply(null, arguments)
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "delete", [8, 46], e.key, ["Backspace", "Delete", "Del"]) ? null : t.requestLastItemDeletion.apply(null, arguments)
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : (e.preventDefault(), t.highlightItem("up"))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.preventDefault(), t.highlightItem("down"))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : (e.preventDefault(), t.closeList.apply(null, arguments))
                                }, function(e) {
                                    return t.handleKeydown.apply(null, arguments)
                                }]
                            },
                            model: {
                                value: t.query,
                                callback: function(e) {
                                    t.query = e
                                },
                                expression: "query"
                            }
                        }), t._v(" "), t.showAsSelect ? n("span", {
                            on: {
                                click: t.onHintClick
                            }
                        }, [n("md-icon", {
                            staticClass: "typeahead-list__select-hint",
                            attrs: {
                                "icon-svg": t.mdiMenuDownIcon
                            }
                        })], 1) : t.showSearchHint ? n("md-icon", {
                            staticClass: "typeahead-list__search-hint",
                            attrs: {
                                "icon-svg": t.mdiMagnifyIcon
                            }
                        }) : t._e(), t._v(" "), t.hasAfterInputSlot ? t._t("desktopAfterInput") : t._e()], 2), t._v(" "), t.loading ? n("md-progress", {
                            key: "stateLoading",
                            attrs: {
                                "md-indeterminate": ""
                            }
                        }) : t._e(), t._v(" "), n("md-list", {
                            ref: "list",
                            class: ["typeahead-list__item-list", {
                                "typeahead-list__item-list--loading": t.loading
                            }, {
                                "typeahead-list__item-list--active": !t.loading && t.itemListVisible
                            }],
                            attrs: {
                                disabled: t.loading
                            }
                        }, [n("div", {
                            staticClass: "typeahead-list__item-list--list-wrapper"
                        }, [t.flattenItemList.length > 0 && t.hasBeforeListSlot ? n("md-list-item", [t._t("desktopBeforeList")], 2) : t._e(), t._v(" "), t._l(t.itemList, (function(e, title) {
                            return n("div", {
                                key: title
                            }, ["$default" !== title && e.length > 0 ? n("h4", {
                                staticClass: "md-caption typeahead-list__results-subtitle"
                            }, [t._v("\n          " + t._s(title) + "\n        ")]) : t._e(), t._v(" "), t._l(e, (function(e, o) {
                                return n("md-list-item", {
                                    key: e.id,
                                    class: ["typeahead-list__results-item", {
                                        "typeahead-list__results-item--no-padding": t.noPadding
                                    }, t.itemClass(e, o)],
                                    attrs: {
                                        disabled: t.itemDisabled(e)
                                    },
                                    on: {
                                        click: function(n) {
                                            return t.handleItemClicked(e)
                                        }
                                    },
                                    nativeOn: {
                                        mousedown: function(e) {
                                            return t.handleItemMouseDown.apply(null, arguments)
                                        },
                                        mouseup: function(e) {
                                            return t.handleItemMouseUp.apply(null, arguments)
                                        },
                                        keydown: [function(n) {
                                            return !n.type.indexOf("key") && t._k(n.keyCode, "enter", 13, n.key, "Enter") ? null : (n.preventDefault(), t.selectItemAndCloseList(e))
                                        }, function(e) {
                                            return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : (e.preventDefault(), t.highlightItem("up"))
                                        }, function(e) {
                                            return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.preventDefault(), t.highlightItem("down"))
                                        }, function(e) {
                                            return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : (e.preventDefault(), t.closeList.apply(null, arguments))
                                        }]
                                    }
                                }, [t._t("desktopItem", null, {
                                    item: e,
                                    formatted: t.loading ? e.text : t.formatText(e)
                                })], 2)
                            }))], 2)
                        }))], 2), t._v(" "), t.fixedItem ? n("md-list-item", {
                            staticClass: "typeahead-list__results-item typeahead-list__results-item--bottom",
                            attrs: {
                                disabled: t.itemDisabled(t.fixedItem)
                            },
                            on: {
                                click: function(e) {
                                    return t.handleItemClicked(t.fixedItem)
                                }
                            },
                            nativeOn: {
                                mousedown: function(e) {
                                    return t.handleItemMouseDown.apply(null, arguments)
                                },
                                mouseup: function(e) {
                                    return t.handleItemMouseUp.apply(null, arguments)
                                },
                                keydown: [function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.selectItemAndCloseList(t.fixedItem))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : (e.preventDefault(), t.highlightItem("up"))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.preventDefault(), t.highlightItem("down"))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : (e.preventDefault(), t.closeList.apply(null, arguments))
                                }]
                            }
                        }, [t._t("desktopItem", null, {
                            item: t.fixedItem,
                            formatted: t.loading ? t.fixedItem.text : t.formatText(t.fixedItem)
                        })], 2) : t._e(), t._v(" "), !t.showNoResultDefaultMessage && t.noResultsVisible && t.hasNoResultsSlot ? n("md-list-item", [t._t("desktopNoResults")], 2) : t._e(), t._v(" "), t.showNoResultDefaultMessage && t.noResultsVisible ? n("md-list-item", [n("span", {
                            staticClass: "md-caption"
                        }, [t._v(t._s(t.$t("No results for $query", {
                            query: t.query
                        })))])]) : t._e(), t._v(" "), t.showAddNewItem && t.hasCreateSlot ? n("md-list-item", {
                            class: ["typeahead-list__results-item", "typeahead-list__results-item--creatable", {
                                "typeahead-list__results-item--top": "top" === t.addNewItemSlotPosition
                            }, {
                                "typeahead-list__results-item--bottom": "bottom" === t.addNewItemSlotPosition
                            }],
                            on: {
                                click: t.createItemAndCloseList
                            },
                            nativeOn: {
                                mousedown: function(e) {
                                    return t.handleItemMouseDown.apply(null, arguments)
                                },
                                mouseup: function(e) {
                                    return t.handleItemMouseUp.apply(null, arguments)
                                },
                                keydown: [function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.createItemAndCloseList.apply(null, arguments))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : (e.preventDefault(), t.highlightItem("up"))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.preventDefault(), t.highlightItem("down"))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : (e.preventDefault(), t.applyInputFocus.apply(null, arguments))
                                }]
                            }
                        }, [t._t("desktopCreate", null, {
                            query: t.query
                        })], 2) : t._e(), t._v(" "), t.showAddNewItemSecondary && t.hasCreateSlotSecondary ? n("md-list-item", {
                            class: ["typeahead-list__results-item", "typeahead-list__results-item--creatable", {
                                "typeahead-list__results-item--top": "top" === t.addNewItemSlotPosition
                            }, {
                                "typeahead-list__results-item--bottom": "bottom" === t.addNewItemSlotPosition
                            }],
                            on: {
                                click: t.createItemAndCloseListSecondary
                            },
                            nativeOn: {
                                mousedown: function(e) {
                                    return t.handleItemMouseDown.apply(null, arguments)
                                },
                                mouseup: function(e) {
                                    return t.handleItemMouseUp.apply(null, arguments)
                                },
                                keydown: [function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : (e.preventDefault(), t.createItemAndCloseListSecondary.apply(null, arguments))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : (e.preventDefault(), t.highlightItem("up"))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : (e.preventDefault(), t.highlightItem("down"))
                                }, function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : (e.preventDefault(), t.applyInputFocus.apply(null, arguments))
                                }]
                            }
                        }, [t._t("desktopCreateSecondary", null, {
                            query: t.query
                        })], 2) : t._e()], 1)], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-90f3ab7c_0", {
                        source: ".typeahead-list{display:flex;flex-grow:1}.typeahead-list__input-container{display:flex;flex:1 1 auto}.typeahead-list__input{text-overflow:ellipsis;flex-grow:1;max-width:100%}.typeahead-list__input--with-hint{max-width:calc(100% - 48px)}.typeahead-list__select-hint{position:absolute;top:0;left:initial;right:0;bottom:0;margin:auto 8px;color:var(--theme-color)!important}.typeahead-list__search-hint{color:rgba(255,255,255,.38);position:absolute;bottom:0;right:0}.typeahead-list__item-list{width:100%;background-color:#383b40;z-index:131;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);opacity:0;display:none!important;transition:opacity .3s cubic-bezier(.55,0,.55,.2);will-change:opacity}.typeahead-list__item-list--loading{display:none!important}.typeahead-list__item-list--active{opacity:1;display:flex!important;position:fixed!important;overflow-y:scroll;padding:0!important}.typeahead-list__item-list--active .md-highlighted .md-button:not([disabled]){background-color:rgba(255,255,255,.12)}.typeahead-list__item-list--active .md-button:not([disabled]):hover{background-color:rgba(255,255,255,.12)}.typeahead-list__item-list--active .typeahead-list__results-item .md-list-item-container{line-height:unset}.typeahead-list__item-list--active .typeahead-list__results-item--no-padding .md-list-item-container{padding:0}.typeahead-list__item-list--active .typeahead-list__results-item--creatable .md-button{padding:0!important}@media screen and (max-height:717px){.typeahead-list__item-list--active.certain-country-list{padding:0!important;height:auto!important}}@media screen and (max-height:677px){.typeahead-list__item-list--active.certain-country-list{margin-top:-20px}}.typeahead-list__item-list .typeahead-list__results-item.md-disabled{color:rgba(255,255,255,.38)}.typeahead-list__item-list .tdl-search-item.highlighted>*{color:var(--theme-color,#cddc39)}.typeahead-list__results-subtitle{padding:24px 16px;margin-top:0;margin-bottom:0}.typeahead-list__results-item--top{order:-1}.typeahead-list__results-item--bottom{order:1}.typeahead-list__results-item--creatable .md-button{padding:0}.typeahead-list__results-item--selectable{background-color:rgba(205,220,57,.12)}.typeahead-list__results-item .tdl-entity-render__verified{width:17px;display:contents}.typeahead-list__item-list--active{overflow-y:hidden}.typeahead-list__item-list--active>div{overflow-y:auto}",
                        map: void 0,
                        media: void 0
                    })
                }), G, undefined, !1, undefined, !1, A.a, void 0, void 0),
                Z = K,
                Y = {
                    name: "tdl-typeahead",
                    components: {
                        MdInputContainer: m.a,
                        MdIcon: d.a,
                        MdTooltip: x.a,
                        MdChip: I.a,
                        MdButton: r.a,
                        TdlTypeaheadDialog: V,
                        TdlTypeaheadAddNewItem: Q,
                        TdlTypeaheadList: Z
                    },
                    mixins: [j.a],
                    props: {
                        addItemOnKeypress: String,
                        addNewItem: Boolean,
                        addNewItemSecondary: Boolean,
                        allowSingleItemChip: Boolean,
                        hideInputList: {
                            type: Boolean,
                            default: !1
                        },
                        addNewItemElement: {
                            type: Object,
                            default: function() {
                                return {
                                    type: "Person",
                                    icon: "person_add",
                                    iconset: ""
                                }
                            }
                        },
                        addNewItemSlotPosition: {
                            type: String,
                            required: !1
                        },
                        addNewItemWhenQueryMatches: {
                            type: Boolean,
                            default: !1
                        },
                        addNewItemElementSecondary: {
                            type: Object,
                            default: function() {
                                return {
                                    type: "Person",
                                    icon: "person_add",
                                    iconset: ""
                                }
                            }
                        },
                        allowNewItemTextDuplication: {
                            type: Boolean,
                            default: !1
                        },
                        closeOnEnter: {
                            type: Boolean,
                            default: !1
                        },
                        debounce: {
                            type: Number,
                            default: 100
                        },
                        defaultItemSelector: Function,
                        desktopCloseListOnItemSelected: Boolean,
                        desktopQueryValidator: Function,
                        desktopSelectItemOnInputBlur: {
                            type: Boolean,
                            default: !0
                        },
                        disabled: Boolean,
                        fetchList: Function,
                        observableList: Function,
                        fetchListTimeout: {
                            type: Number,
                            default: 5e3
                        },
                        filterList: {
                            type: Function,
                            default: function() {
                                return !0
                            }
                        },
                        sortItems: {
                            type: Function,
                            default: function() {
                                return 0
                            }
                        },
                        fixedItem: Object,
                        initialHighlightedIndex: {
                            type: Number,
                            default: -1
                        },
                        inputLabel: String,
                        inputPlaceholder: String,
                        inputTooltipText: String,
                        itemDisabled: {
                            type: Function,
                            default: function() {
                                return !1
                            }
                        },
                        itemFactory: {
                            type: Function,
                            default: function(text) {
                                return Promise.resolve({
                                    id: text,
                                    text: text
                                })
                            }
                        },
                        itemFactorySecondary: {
                            type: Function,
                            default: function(text) {
                                return Promise.resolve({
                                    id: text,
                                    text: text
                                })
                            }
                        },
                        itemSelectedValidator: {
                            type: Function,
                            default: function(t) {
                                return !this.selectedItems.find((function(e) {
                                    return e.id === t.id
                                }))
                            }
                        },
                        manualLoading: {
                            type: Boolean,
                            default: !1
                        },
                        minChars: {
                            type: Number,
                            default: 0
                        },
                        maxItems: {
                            type: Number,
                            default: 1 / 0
                        },
                        maxQueryLength: {
                            type: [Number, String],
                            default: 1 / 0
                        },
                        mobileAcceptFocusRequests: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        },
                        newItemStyles: {
                            type: Object,
                            default: function() {
                                return {
                                    "--theme-color": "#CDDC39"
                                }
                            }
                        },
                        breakLines: {
                            type: Boolean,
                            default: !1
                        },
                        searchHintMode: {
                            type: String,
                            required: !1,
                            default: "focus"
                        },
                        value: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        isTabletOrMobile: {
                            type: Boolean,
                            required: !1
                        },
                        forceUsingList: {
                            type: Boolean,
                            default: !1
                        },
                        listBounds: {
                            type: Object,
                            required: !1
                        },
                        inhibitScroll: {
                            type: Boolean,
                            default: !0
                        },
                        shouldReopenListOnItemSelected: {
                            type: Boolean,
                            default: !1
                        },
                        showAsSelect: {
                            type: Boolean,
                            default: !1
                        },
                        shouldValidateQuery: {
                            type: Boolean,
                            default: !0
                        },
                        createOnBlur: {
                            type: Boolean,
                            default: !1
                        },
                        showNoResultDefaultMessage: {
                            type: Boolean,
                            default: !1
                        },
                        blinkingCursorOnPlaceholder: {
                            type: Boolean,
                            default: !1
                        },
                        clearOnClose: {
                            type: Boolean,
                            default: !0
                        },
                        customErrorMessage: {
                            type: String,
                            required: !1
                        },
                        mdSimple: Boolean,
                        mdClear: Boolean,
                        prefilledText: {
                            type: String,
                            required: !1
                        },
                        noPadding: {
                            type: Boolean,
                            default: !1
                        },
                        leftButtonEnabled: {
                            type: Boolean,
                            default: !1
                        },
                        showAddNewItemAlways: {
                            type: Boolean,
                            default: !1
                        },
                        chipsEditable: {
                            type: Boolean,
                            default: !1
                        },
                        validate: {
                            type: Boolean,
                            default: !0
                        },
                        checkEntityType: {
                            type: Boolean,
                            default: !1
                        },
                        forceShowDeleteButton: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            focused: !1,
                            selectedItems: [],
                            baseList: {},
                            fetchListError: "",
                            fetchListDebounced: Function,
                            fetching: [],
                            queryInvalid: !1,
                            mdiCloseIcon: null,
                            mdiInformationIcon: null,
                            newItemPosition: "top",
                            isOnline: !0,
                            lodashIsArray: null,
                            notInitValidate: !1,
                            subscription: void 0 | v.a,
                            pageLoading: !0,
                            mdiPencilIcon: null,
                            fetchCompleted: !1
                        }
                    },
                    watch: {
                        value: function(t) {
                            this.selectedItems = t
                        },
                        selectedItems: function(t, e) {
                            if (!Object(y.a)(t, e)) {
                                if (this.$emit("input", t), this.onlyOneSelectedItem && !this.allowSingleItemChip) {
                                    var n, o;
                                    this.notInitValidate = !0;
                                    var l = "organization" === (null === (n = this.selectedItems[0]) || void 0 === n ? void 0 : n.entityType) || "job" === (null === (o = this.selectedItems[0]) || void 0 === o ? void 0 : o.entityType);
                                    if (this.checkEntityType && l) {
                                        var r = this.$t("$entity team", {
                                            entity: this.selectedItems[0].text
                                        });
                                        this.setInput(r)
                                    } else this.setInput(this.selectedItems[0].text)
                                }
                                0 !== t.length || this.focused || this.clear()
                            }
                        }
                    },
                    computed: {
                        isMobile: function() {
                            return !!this.isTabletOrMobile || !(!this.ProcessMixin_isClient && this.$isServer) && ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < 720 || Object(w.d)())
                        },
                        loading: function() {
                            return this.manualLoading || this.buildingItem || this.fetching.length > 0
                        },
                        classes: function() {
                            return {
                                "md-disabled": this.disabled,
                                "md-has-value": this.selectedItems.length,
                                "md-input-invalid": this.fetchListError || this.queryInvalid || this.hasValidation,
                                "has-only-item": 1 === this.selectedItems.length && 1 === this.maxItems,
                                "tdl-typeahead--clear": this.mdClear,
                                "tdl-typeahead--simple": this.mdSimple
                            }
                        },
                        itemList: function() {
                            var t = this;
                            return Object(_.a)(this.baseList, (function(e, n, o) {
                                return e[o] = n.filter(t.filterList), e
                            }), {})
                        },
                        hasDefaultSlot: function() {
                            return !!this.$slots.default
                        },
                        hasItemSlot: function() {
                            return !!this.$slots.item || !!this.$scopedSlots.item
                        },
                        hasAfterInputSlot: function() {
                            return !!this.$slots["after-input"] || !!this.$scopedSlots["after-input"]
                        },
                        hasBeforeInputSlot: function() {
                            return !!this.$slots["before-input"] || !!this.$scopedSlots["before-input"]
                        },
                        hasBeforeListSlot: function() {
                            return !!this.$slots["before-list"] || !!this.$scopedSlots["before-list"]
                        },
                        hasCreateSlot: function() {
                            return !!this.$slots.create || !!this.$scopedSlots.create
                        },
                        hasChipSlot: function() {
                            return !!this.$slots.chip || !!this.$scopedSlots.chip
                        },
                        hasChipsSlot: function() {
                            return !!this.$slots.chips || !!this.$scopedSlots.chips
                        },
                        hasNoResultsSlot: function() {
                            return !!this.$slots["no-results"] || !!this.$scopedSlots["no-results"]
                        },
                        hasValidation: function() {
                            return this.validate && this.hasName && this.$parent.errors.has(this.$attrs.name)
                        },
                        hasName: function() {
                            return this.$attrs && this.$attrs.name
                        },
                        onlyOneSelectedItem: function() {
                            return 1 === this.selectedItems.length && 1 === this.maxItems
                        },
                        leftIcon: function() {
                            return this.leftButtonEnabled ? this.mdiPencilIcon : void 0
                        },
                        showDeleteButton: function() {
                            return this.onlyOneSelectedItem && !this.focused && !this.disabled || this.forceShowDeleteButton
                        }
                    },
                    created: function() {
                        var t = this;
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            var o, l, r, d;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, n.e(2).then(n.bind(null, 638));
                                    case 2:
                                        o = e.sent, l = o.mdiClose, r = o.mdiInformation, d = o.mdiPencil, t.mdiCloseIcon = l, t.mdiInformationIcon = r, t.mdiPencilIcon = d;
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    mounted: function() {
                        var t = this;
                        return Object(l.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Promise.resolve().then(n.bind(null, 86));
                                    case 2:
                                        t.lodashIsArray = e.sent.default, t.addNewItemSlotPosition ? t.newItemPosition = t.addNewItemSlotPosition : t.newItemPosition = t.isMobile ? "top" : "bottom", t.value && (t.selectedItems = t.value), t.fetchListDebounced = Object(f.a)(t.doFetchList, t.debounce), t.$emit("typeahead-mounted"), t.$root.$on("typeahead-input-blur", (function(e) {
                                            e.length || (t.fetchListError = !1)
                                        })), t.$nextTick((function() {
                                            t.pageLoading = !1
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    beforeDestroy: function() {
                        this.$emit("selector-closed"), this.$root.$off("typeahead-input-blur")
                    },
                    methods: {
                        buildItem: function(text) {
                            var t = this;
                            return this.buildingItem = !0, this.itemFactory(text).then((function(e) {
                                return t.buildingItem = !1, e
                            })).catch((function() {
                                t.buildingItem = !1
                            }))
                        },
                        buildItemSecondary: function(text) {
                            var t = this;
                            return this.buildingItem = !0, this.itemFactorySecondary(text).then((function(e) {
                                return t.buildingItem = !1, e
                            })).catch((function() {
                                t.buildingItem = !1
                            }))
                        },
                        handleQueryChanged: function(t) {
                            this.focused && (!t && this.onlyOneSelectedItem ? (this.deleteChip(this.selectedItems[0], !1), this.fetchListDebounced(t)) : t.length >= this.minChars ? (this.onlyOneSelectedItem && this.selectedItems.length > 0 && (this.selectedItems = []), this.fetchListDebounced(t)) : (this.fetching = [], this.baseList = {})), this.hasName && this.$parent.$validator.errors.remove(this.$attrs.name), this.$emit("query-changed", t)
                        },
                        handleQueryInvalid: function(t) {
                            !this.shouldValidateQuery || this.notInitValidate && t || (this.queryInvalid = t, this.$emit("query-invalid", t)), this.notInitValidate && (this.notInitValidate = !1)
                        },
                        handleFocus: function(t) {
                            var e = t.focused,
                                n = t.query;
                            e ? (this.baseList = {}, n.length >= this.minChars && this.fetchListDebounced(n)) : e || this.unsubscribeObservable(null), this.focused = e
                        },
                        doFetchList: function(t) {
                            var e = this,
                                n = Math.random(),
                                o = "".concat(t, ".").concat(n);
                            if (this.isOnline = window.navigator.onLine, this.fetchListError = !1, this.fetching.push(o), this.unsubscribeObservable(o), this.observableList) {
                                var l = [];
                                this.subscription = this.observableList(t).subscribe((function(t) {
                                    t.forEach((function(t) {
                                        return l.push(t)
                                    })), e.fillBaseList(l, o)
                                }), (function(t) {
                                    e.fetchListError = t.message, e.clearFetchingList(o), e.unsubscribeObservable(null)
                                }), (function() {
                                    e.clearFetchingList(o)
                                }))
                            } else {
                                if (!this.fetchList) throw new Error("Missing fetchList or ObservableList function");
                                var r = new Promise((function(t, n) {
                                    setTimeout((function() {
                                        n({
                                            message: "fetch-list.timeout"
                                        })
                                    }), e.fetchListTimeout)
                                }));
                                Promise.race([this.fetchList(t), r]).then((function(t) {
                                    e.fillBaseList(t, o), e.fetchCompleted = !0
                                })).catch((function(t) {
                                    "api.cancelled.request" !== t.message && (e.fetchListError = t.message), e.clearFetchingList(o)
                                }))
                            }
                        },
                        fillBaseList: function(t, e) {
                            var n = this;
                            this.baseList = this.lodashIsArray(t) ? {
                                $default: t.sort(this.sortItems)
                            } : t, this.clearFetchingList(e), this.$nextTick((function() {
                                var t = Object(_.a)(n.itemList, (function(t, e) {
                                    return t + e.length
                                }), 0);
                                n.$emit("item-list-changed", {
                                    itemListLength: t
                                })
                            }))
                        },
                        clearFetchingList: function(t) {
                            this.fetching = this.fetching.filter((function(e) {
                                return e !== t
                            }))
                        },
                        unsubscribeObservable: function(t) {
                            this.subscription && (this.subscription.unsubscribe(), this.fetching = null !== t ? this.fetching.filter((function(e) {
                                return e === t
                            })) : [])
                        },
                        leftButtonClick: function(t) {
                            this.$emit("left-button-click", t)
                        },
                        deleteChip: function(t, e) {
                            this.selectedItems = this.selectedItems.filter((function(e) {
                                return e.id !== t.id
                            })), e && this.refreshInput(), 1 === this.maxItems && this.clear(), this.$root.$emit("tdl-typeahead-chip-deleted")
                        },
                        handleItemSelected: function(t) {
                            this.onlyOneSelectedItem && this.deleteChip(this.selectedItems[0], !1), this.selectedItems = this.selectedItems.concat([t]), this.$emit("changed", t), this.refreshInput(), this.$emit("item-selected", t), 1 !== this.maxItems || this.allowSingleItemChip || (this.setInput(t.text), this.notInitValidate = !1)
                        },
                        handleItemRemoved: function(t) {
                            this.deleteChip(t, !0), this.$emit("changed")
                        },
                        clear: function() {
                            this.$refs.delegatedTypeahead && this.$refs.delegatedTypeahead.clear()
                        },
                        requestFocus: function() {
                            var t = this;
                            this.$nextTick((function() {
                                t.$refs.delegatedTypeahead && t.$refs.delegatedTypeahead.requestFocus()
                            }))
                        },
                        setInput: function(input) {
                            this.$refs.delegatedTypeahead && this.$refs.delegatedTypeahead.setInput(input)
                        },
                        refreshInput: function() {
                            var input = this.$refs.delegatedTypeahead;
                            input && "function" == typeof input.onInputFocus && (this.shouldReopenListOnItemSelected && input.onInputFocus(), input.onInputBlur())
                        },
                        mdChipsListenScroll: function(t) {
                            this.$emit("md-chips-listen-scroll", t)
                        }
                    }
                },
                J = Object(R.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("md-input-container", {
                            ref: "parent",
                            class: ["tdl-typeahead", t.classes],
                            attrs: {
                                "md-simple": t.mdSimple,
                                "md-clear": t.mdClear
                            },
                            scopedSlots: t._u([t.inputLabel ? {
                                key: "label",
                                fn: function() {
                                    return [n("span", [t._v("\n      " + t._s(t.inputLabel) + "\n    ")]), t._v(" "), t.inputTooltipText ? n("md-icon", {
                                        attrs: {
                                            "icon-svg": t.mdiInformationIcon
                                        }
                                    }, [n("md-tooltip", {
                                        style: {
                                            "margin-left": t.isMobile && !t.selectedItems.length ? "-30px" : "unset"
                                        },
                                        attrs: {
                                            "md-delay": "300",
                                            "md-direction": "bottom",
                                            "display-on-mobile": !0
                                        },
                                        domProps: {
                                            innerHTML: t._s(t.inputTooltipText)
                                        }
                                    })], 1) : t._e()]
                                },
                                proxy: !0
                            } : null], null, !0)
                        }, [t._t("icon"), t._v(" "), t._v(" "), n("div", {
                            staticClass: "md-chips",
                            on: {
                                "&scroll": function(e) {
                                    return t.mdChipsListenScroll.apply(null, arguments)
                                }
                            }
                        }, [t.hasChipsSlot ? [t._t("chips", null, {
                            items: t.selectedItems
                        })] : [t.allowSingleItemChip || !t.onlyOneSelectedItem ? t._l(t.selectedItems, (function(e) {
                            return n("md-chip", {
                                key: e.id,
                                ref: "chips",
                                refInFor: !0,
                                attrs: {
                                    "md-deletable": "",
                                    "md-editable": t.chipsEditable,
                                    "left-button-enabled": t.leftButtonEnabled,
                                    "left-icon": t.leftIcon
                                },
                                on: {
                                    "left-button-click": function(n) {
                                        return t.leftButtonClick(e)
                                    },
                                    delete: function(n) {
                                        return t.deleteChip(e, !0)
                                    }
                                }
                            }, [t._t("chip", (function() {
                                return [t._v("\n            " + t._s(e.text) + "\n          ")]
                            }), {
                                value: e
                            })], 2)
                        })) : t._e()], t._v(" "), t.isMobile && !t.forceUsingList ? [n("tdl-typeahead-dialog", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.hideInputList && !t.pageLoading,
                                expression: "!hideInputList && !pageLoading"
                            }],
                            ref: "delegatedTypeahead",
                            attrs: {
                                "selected-items": t.selectedItems,
                                "default-item-selector": t.defaultItemSelector,
                                disabled: t.disabled,
                                "add-new-item": t.addNewItem,
                                "add-new-item-secondary": t.addNewItemSecondary,
                                "add-new-item-when-query-matches": t.addNewItemWhenQueryMatches,
                                "allow-new-item-text-duplication": t.allowNewItemTextDuplication,
                                loading: t.loading,
                                "item-factory": t.buildItem,
                                "item-factory-secondary": t.buildItemSecondary,
                                "item-list": t.itemList,
                                "add-item-on-keypress": t.addItemOnKeypress,
                                "accept-focus-requests": t.mobileAcceptFocusRequests,
                                "fixed-item": t.fixedItem,
                                "initial-highlighted-index": t.initialHighlightedIndex,
                                "input-label": t.inputLabel,
                                "input-placeholder": t.inputPlaceholder,
                                "item-disabled": t.itemDisabled,
                                "item-selected-validator": t.itemSelectedValidator,
                                "max-query-length": t.maxQueryLength,
                                "add-new-item-slot-position": t.newItemPosition,
                                "search-hint-mode": t.searchHintMode,
                                "show-as-select": t.showAsSelect && !t.onlyOneSelectedItem,
                                "show-no-result-default-message": t.showNoResultDefaultMessage,
                                "min-chars": t.minChars,
                                "break-lines": t.breakLines,
                                "blinking-cursor-on-placeholder": t.blinkingCursorOnPlaceholder,
                                "clear-on-close": t.clearOnClose && !t.onlyOneSelectedItem,
                                "only-one-selected-item": t.onlyOneSelectedItem,
                                "prefilled-text": t.prefilledText,
                                "close-on-enter": t.closeOnEnter,
                                "show-add-new-item-always": t.showAddNewItemAlways
                            },
                            on: {
                                "query-changed": t.handleQueryChanged,
                                "input-keypress": function(e) {
                                    return t.$emit("input-keypress", e)
                                },
                                "item-selected": t.handleItemSelected,
                                "item-removed": t.handleItemRemoved,
                                focused: t.handleFocus,
                                "dialog-opened": function(e) {
                                    return t.$emit("selector-opened")
                                },
                                "dialog-closed": function(e) {
                                    return t.$emit("selector-closed")
                                },
                                changed: function(e) {
                                    return t.$emit("changed")
                                }
                            },
                            scopedSlots: t._u([{
                                key: "mobileItem",
                                fn: function(e) {
                                    var o = e.item,
                                        l = e.formatted;
                                    return [t.hasItemSlot ? n("div", {
                                        staticClass: "tdl-typeahead__item-slot--wrapper"
                                    }, [t._t("item", null, {
                                        item: o,
                                        formatted: l
                                    })], 2) : n("div", {
                                        staticClass: "tdl-typeahead__item-slot--wrapper"
                                    }, [n("span", {
                                        domProps: {
                                            innerHTML: t._s(l)
                                        }
                                    })])]
                                }
                            }, {
                                key: "mobileCreate",
                                fn: function(e) {
                                    var o = e.query;
                                    return [t.hasCreateSlot ? t._t("create", null, {
                                        query: o
                                    }) : [n("tdl-typeahead-add-new-item", {
                                        style: t.newItemStyles,
                                        attrs: {
                                            query: o,
                                            "add-new-item-element": t.addNewItemElement
                                        }
                                    })]]
                                }
                            }, {
                                key: "mobileCreateSecondary",
                                fn: function(e) {
                                    var o = e.query;
                                    return [t.hasCreateSlot ? t._t("create", null, {
                                        query: o
                                    }) : [n("tdl-typeahead-add-new-item", {
                                        style: t.newItemStyles,
                                        attrs: {
                                            query: o,
                                            "add-new-item-element": t.addNewItemElementSecondary,
                                            secondary: ""
                                        }
                                    })]]
                                }
                            }, {
                                key: "mobileChip",
                                fn: function(e) {
                                    var n = e.value;
                                    return [t.hasChipSlot ? t._t("chip", null, {
                                        value: n
                                    }) : [t._v("\n            " + t._s(n.text) + "\n          ")]]
                                }
                            }, {
                                key: "mobileChips",
                                fn: function(e) {
                                    var n = e.value;
                                    return [t.hasChipsSlot ? t._t("chips", null, {
                                        items: n
                                    }) : t._e()]
                                }
                            }], null, !0)
                        }, [n("template", {
                            slot: "mobileAfterInput"
                        }, [t.hasAfterInputSlot ? t._t("after-input") : t._e()], 2), t._v(" "), n("template", {
                            slot: "mobileBeforeInput"
                        }, [t.hasBeforeInputSlot ? t._t("before-input") : t._e()], 2), t._v(" "), t.hasBeforeListSlot ? n("template", {
                            slot: "mobileBeforeList"
                        }, [t._t("before-list")], 2) : t._e(), t._v(" "), t._v(" "), t._v(" "), t._v(" "), t._v(" "), t._v(" "), t.hasNoResultsSlot ? n("template", {
                            slot: "mobileNoResults"
                        }, [t._t("no-results")], 2) : t._e()], 2)] : [n("tdl-typeahead-list", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.hideInputList,
                                expression: "!hideInputList"
                            }],
                            ref: "delegatedTypeahead",
                            attrs: {
                                "selected-items": t.selectedItems,
                                "default-item-selector": t.defaultItemSelector,
                                disabled: t.disabled,
                                "add-new-item": t.addNewItem,
                                "add-new-item-secondary": t.addNewItemSecondary,
                                "add-new-item-when-query-matches": t.addNewItemWhenQueryMatches,
                                "allow-new-item-text-duplication": t.allowNewItemTextDuplication,
                                "desktop-close-list-on-item-selected": t.desktopCloseListOnItemSelected,
                                loading: t.loading,
                                "initial-highlighted-index": t.initialHighlightedIndex,
                                "item-list": t.itemList,
                                "add-item-on-keypress": t.addItemOnKeypress,
                                "fixed-item": t.fixedItem,
                                "input-placeholder": t.inputPlaceholder,
                                "item-factory": t.buildItem,
                                "item-factory-secondary": t.buildItemSecondary,
                                "item-disabled": t.itemDisabled,
                                "item-selected-validator": t.itemSelectedValidator,
                                "max-query-length": t.maxQueryLength,
                                "add-new-item-slot-position": t.newItemPosition,
                                "query-validator": t.desktopQueryValidator,
                                "search-hint-mode": t.searchHintMode,
                                "select-item-on-input-blur": t.desktopSelectItemOnInputBlur,
                                "create-on-blur": t.createOnBlur,
                                "min-chars": t.minChars,
                                bounds: t.listBounds,
                                "inhibit-scroll": t.inhibitScroll,
                                "should-reopen": t.shouldReopenListOnItemSelected,
                                "show-as-select": t.showAsSelect && !t.onlyOneSelectedItem,
                                "show-no-result-default-message": t.showNoResultDefaultMessage,
                                "only-one-selected-item": t.onlyOneSelectedItem,
                                "prefilled-text": t.prefilledText,
                                "no-padding": t.noPadding,
                                "show-add-new-item-always": t.showAddNewItemAlways,
                                "item-ready": t.fetchCompleted
                            },
                            on: {
                                "query-changed": t.handleQueryChanged,
                                "query-invalid": t.handleQueryInvalid,
                                "input-keypress": function(e) {
                                    return t.$emit("input-keypress", e)
                                },
                                "item-selected": t.handleItemSelected,
                                "item-removed": t.handleItemRemoved,
                                focused: t.handleFocus,
                                "blur-dirty": function(e) {
                                    return t.$emit("blur-dirty", e)
                                },
                                "list-opened": function(e) {
                                    return t.$emit("selector-opened")
                                },
                                "list-closed": function(e) {
                                    return t.$emit("selector-closed")
                                },
                                changed: function(e) {
                                    return t.$emit("changed")
                                },
                                "change-highlighted-item": function(e) {
                                    return t.$emit("change-highlighted-item", e)
                                }
                            },
                            scopedSlots: t._u([{
                                key: "desktopItem",
                                fn: function(e) {
                                    var o = e.item,
                                        l = e.formatted;
                                    return [t.hasItemSlot ? t._t("item", null, {
                                        item: o,
                                        formatted: l
                                    }) : [n("span", {
                                        domProps: {
                                            innerHTML: t._s(l)
                                        }
                                    })]]
                                }
                            }, {
                                key: "desktopCreate",
                                fn: function(e) {
                                    var o = e.query;
                                    return [t.hasCreateSlot ? t._t("create", null, {
                                        query: o
                                    }) : [n("tdl-typeahead-add-new-item", {
                                        style: t.newItemStyles,
                                        attrs: {
                                            query: o,
                                            "add-new-item-element": t.addNewItemElement
                                        }
                                    })]]
                                }
                            }, {
                                key: "desktopCreateSecondary",
                                fn: function(e) {
                                    var o = e.query;
                                    return [t.hasCreateSlot ? t._t("create", null, {
                                        query: o
                                    }) : [n("tdl-typeahead-add-new-item", {
                                        style: t.newItemStyles,
                                        attrs: {
                                            query: o,
                                            "add-new-item-element": t.addNewItemElementSecondary,
                                            secondary: ""
                                        }
                                    })]]
                                }
                            }], null, !0)
                        }, [n("template", {
                            slot: "desktopAfterInput"
                        }, [t.hasAfterInputSlot ? t._t("after-input") : t._e()], 2), t._v(" "), n("template", {
                            slot: "desktopBeforeInput"
                        }, [t.hasBeforeInputSlot ? t._t("before-input") : t._e()], 2), t._v(" "), t.hasBeforeListSlot ? n("template", {
                            slot: "desktopBeforeList"
                        }, [t._t("before-list")], 2) : t._e(), t._v(" "), t._v(" "), t._v(" "), t._v(" "), t.hasNoResultsSlot ? n("template", {
                            slot: "desktopNoResults"
                        }, [t._t("no-results")], 2) : t._e()], 2)]], 2), t._v(" "), t.showDeleteButton ? n("md-button", {
                            staticClass: "md-icon-button md-primary",
                            on: {
                                click: function(e) {
                                    return t.deleteChip(t.selectedItems[0], !1)
                                }
                            }
                        }, [n("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiCloseIcon
                            }
                        })], 1) : t._e(), t._v(" "), t._t("default"), t._v(" "), t.hasDefaultSlot ? t._e() : [t.isOnline ? t.validate && (t.queryInvalid || t.hasValidation) ? [t.customErrorMessage && t.addNewItem ? n("span", {
                            staticClass: "md-error"
                        }, [t._v("\n        " + t._s(t.customErrorMessage) + "\n      ")]) : t.addNewItem ? n("span", {
                            staticClass: "md-error"
                        }, [t._v("\n        " + t._s(t.$t('Select an item from the list or add a new one by clicking on "Add new') + " " + t.addNewItemElement.type.toLowerCase() + '"') + "\n      ")]) : t.hasValidation ? n("span", {
                            staticClass: "md-error"
                        }, [t._v("\n        " + t._s(t.$parent.errors.first(t.$attrs.name)) + "\n      ")]) : n("span", {
                            staticClass: "md-error"
                        }, [t._v("\n        " + t._s(t.$t("You must select an item from the list")) + "\n      ")])] : t.fetchListError ? n("span", {
                            staticClass: "md-error"
                        }, [t._v("\n      " + t._s(t.$t("An error occurred")) + "\n    ")]) : t._e() : n("span", {
                            staticClass: "md-error"
                        }, [t._v(t._s(t.$t("There is something wrong with your connection. Please try again later.")))])]], 2)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && (t("data-v-3e43aea8_0", {
                        source: ".tdl-lazy-loader-hide-background-image{background-image:none!important;top:0!important}.md-chips{display:flex;align-items:center;display:flex;flex-wrap:wrap;padding:2px 8px}.md-chips .md-chip{margin-right:8px;margin-bottom:4px}.md-chips .md-chip .md-chip-button-left .md-icon{color:var(--theme-color,#cddc39)}.md-chips .md-input{width:128px;flex:1}.md-chips .md-input::placeholder{opacity:1}.md-chips.md-chips--with-value .md-input::placeholder{opacity:0}",
                        map: void 0,
                        media: void 0
                    }), t("data-v-3e43aea8_1", {
                        source: ".scroll-blocked{overflow:hidden}body.scroll-blocked{overflow:hidden}.md-input-container.tdl-typeahead label span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.md-input-container.tdl-typeahead label .md-icon{margin:0 0 0 4px!important;font-size:16px;cursor:pointer;z-index:1;top:-1px}.md-input-container.tdl-typeahead label .md-icon:after{height:0!important}.md-input-container.tdl-typeahead .outlined-notched{color:var(--theme-color)}.md-input-container.tdl-typeahead.has-only-item .md-chips{padding:8px 0 8px 16px}.md-input-container.tdl-typeahead.has-only-item.md-input-disabled:after{background-image:none!important}.md-input-container.tdl-typeahead.has-only-item.md-input-disabled .md-chips{padding:8px 16px}.md-input-container.tdl-typeahead.has-only-item .md-button.md-icon-button:not(.md-delete){left:initial;right:0;min-width:24px!important;width:24px;min-height:24px!important;height:24px;padding:0;margin:auto 12px}.md-input-container.tdl-typeahead.has-only-item .md-button.md-icon-button:not(.md-delete) .md-icon{position:absolute}.md-input-container.tdl-typeahead.md-has-value label .md-icon{font-size:14px}.md-input-container.tdl-typeahead.md-has-value.md-input-focused .md-input{width:initial!important}.md-input-container.tdl-typeahead .md-progress{position:absolute;left:0;bottom:-4px}.md-input-container.tdl-typeahead .md-chips{width:100%;padding:8px 12px}.md-input-container.tdl-typeahead .md-chips .md-chip{margin:4px}.md-input-container.tdl-typeahead .md-chips input{padding:0}.md-input-container.tdl-typeahead .md-icon{min-width:24px;width:24px;min-height:24px;height:24px;padding:0}.md-input-container.tdl-typeahead .typeahead-list__search-hint{position:absolute!important;top:0;left:initial;right:0;margin:auto 16px}.md-input-container.tdl-typeahead--clear .md-chips,.md-input-container.tdl-typeahead--simple .md-chips{padding:0;min-height:initial}.md-input-container.tdl-typeahead--clear .md-chips{padding-left:16px!important}.only-item{display:flex;align-items:center;width:100%;font-size:16px}.only-item__text{display:inline-block;width:calc(100% - 40px);text-overflow:ellipsis;overflow-x:hidden}.tdl-typeahead__item-slot--wrapper{width:100%;max-width:100%;overflow:hidden;text-overflow:ellipsis}.md-input-container.md-input-focused.tdl-typeahead .md-chips{width:100%}",
                        map: void 0,
                        media: void 0
                    }), t("data-v-3e43aea8_2", {
                        source: ".md-tooltip[data-v-3e43aea8]{max-width:280px;height:auto;white-space:normal;font-size:12px;padding:8px}",
                        map: void 0,
                        media: void 0
                    }))
                }), Y, "data-v-3e43aea8", !1, undefined, !1, A.a, void 0, void 0),
                X = {
                    components: {
                        MdIcon: d.a
                    },
                    props: {
                        item: {
                            type: Object,
                            required: !0
                        }
                    },
                    computed: {
                        highlighted: function() {
                            return !!this.item.className && this.item.className.includes("highlighted")
                        }
                    }
                },
                tt = Object(R.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tdl-search-item"
                        }, [t.item ? n("md-icon", {
                            class: {
                                "md-primary tdl-search-item__highlighted": t.highlighted
                            },
                            attrs: {
                                "icon-svg": t.item.icon
                            }
                        }) : t._e(), t._v(" "), n("span", {
                            staticClass: "tdl-search-item__text",
                            class: {
                                "tdl-search-item__highlighted": t.highlighted
                            }
                        }, [t._v(t._s(t.item.text))])], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-3b2c6d92_0", {
                        source: ".tdl-search-bar{width:100%;max-width:190px;margin:0 19px 0 24px}.tdl-search-bar.isExpanded{max-width:673px}.tdl-search-bar__button.md-icon-button{width:auto!important;height:auto!important;background:0 0;outline:0;border:none;cursor:pointer;margin:0;padding:0 5px;padding-right:16px}.tdl-search-bar__close{color:rgba(255,255,255,.65)!important;margin-left:0;margin-right:0}.tdl-search-bar ::v-deep .typeahead-dialog__input-container-box{text-overflow:ellipsis}.tdl-search-bar ::v-deep .md-input-container.tdl-typeahead .md-chips{padding:6px 0 8px 18px!important}.tdl-search-bar ::v-deep .md-input-container.tdl-typeahead .md-chips .md-input{width:62px}.tdl-search-bar ::v-deep .typeahead-list__search-hint{display:none!important}.tdl-search-bar ::v-deep .md-chip.md-deletable{display:none!important}.tdl-search-bar ::v-deep .tdl-typeahead__item-slot--wrapper{width:100%}.tdl-search-bar ::v-deep .md-input{text-overflow:ellipsis}.tdl-search-bar ::v-deep .md-input::placeholder{text-overflow:ellipsis}.tdl-search-item{display:flex;align-items:center;width:100%}.tdl-search-item__text{display:inline-block;margin-left:16px;width:100%;max-width:calc(100% - 27px);text-overflow:ellipsis}.tdl-search-item__no-highlighted{color:rgba(255,255,255,.9);text-transform:none}.tdl-search-item__highlighted{color:#cddc39;text-transform:uppercase}",
                        map: void 0,
                        media: void 0
                    })
                }), X, undefined, !1, undefined, !1, A.a, void 0, void 0),
                et = {
                    name: "tdl-search-bar",
                    components: {
                        MdButton: r.a,
                        MdIcon: d.a,
                        mdInput: c.a,
                        mdInputContainer: m.a,
                        MdProgress: h.a,
                        TdlSearchItem: tt,
                        TdlTypeahead: J
                    },
                    i18n: {
                        messages: {
                            en: {
                                "Search candidates by skill:": "Search candidates by skill:"
                            },
                            es: {
                                "Search candidates by skill:": "Busca candidatos por habilidad:"
                            }
                        }
                    },
                    props: {
                        placeholder: {
                            type: String,
                            default: "Search"
                        },
                        searchPath: {
                            type: String,
                            default: "search"
                        },
                        maxWidth: {
                            type: Number,
                            default: 190
                        },
                        fetchSearchItems: {
                            type: Function,
                            required: !1
                        },
                        placeholderIncludeText: {
                            type: Boolean,
                            default: !0
                        },
                        fixedPlaceholder: {
                            type: Boolean,
                            default: !1
                        },
                        parentHandleEnter: {
                            type: Boolean,
                            default: !1
                        },
                        typeaheadItemDisabled: Function,
                        username: {
                            type: String,
                            required: !1
                        },
                        hiddenSearchBarItems: {
                            type: Array,
                            required: !1,
                            default: function() {
                                return []
                            }
                        },
                        isUserHiring: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            searchText: "",
                            highlightedIndex: 0,
                            mdiClose: null,
                            mdiMagnify: null,
                            mdiFormatTextRotationNone: null,
                            mdiCompass: null,
                            mdiHuman: null,
                            isExpanded: !1,
                            manualLoading: !1
                        }
                    },
                    computed: {
                        href: function() {
                            return this.$router.resolve({
                                name: this.$route.name,
                                params: this.$route.params,
                                query: {
                                    section: this.targetId
                                }
                            }).href
                        },
                        items: function() {
                            var t = this,
                                e = this.placeholderIncludeText && this.searchText ? "‘".concat(this.searchText, "’") : "",
                                n = [{
                                    id: "search-option-1",
                                    text: "".concat(this.$t("Search people by name:"), " ").concat(e),
                                    route: "people-name",
                                    icon: this.mdiFormatTextRotationNone,
                                    type: "search-option"
                                }, {
                                    id: "search-option-2",
                                    text: "".concat(this.$t("Search candidates by skill:"), " ").concat(e),
                                    route: "people-skill",
                                    icon: this.mdiHuman,
                                    type: "search-option"
                                }],
                                o = {
                                    id: "search-option-3",
                                    text: "".concat(this.$t("Search jobs - infinitive"), ": ").concat(e),
                                    route: "jobs",
                                    icon: this.mdiCompass,
                                    type: "search-option"
                                };
                            return this.isUserHiring ? n.push(o) : n.splice(0, 0, o), n.filter((function(e) {
                                return !t.hiddenSearchBarItems.includes(e.id)
                            }))
                        },
                        currentPlaceholder: function() {
                            return this.fixedPlaceholder ? this.placeholder : this.isExpanded ? this.items[this.highlightedIndex].text : this.$t(this.placeholder)
                        },
                        closeIcon: function() {
                            return this.isExpanded || !this.isExpanded && this.searchText ? this.mdiClose : this.mdiMagnify
                        },
                        searchBarStyle: function() {
                            return this.isExpanded ? {} : {
                                maxWidth: "".concat(this.maxWidth, "px")
                            }
                        }
                    },
                    created: (E = Object(l.a)(regeneratorRuntime.mark((function t() {
                        var e, o, l, r, d, c;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, n.e(2).then(n.bind(null, 638));
                                case 2:
                                    e = t.sent, o = e.mdiCompass, l = e.mdiClose, r = e.mdiFormatTextRotationNone, d = e.mdiHuman, c = e.mdiMagnify, this.mdiClose = l, this.mdiMagnify = c, this.mdiCompass = o, this.mdiFormatTextRotationNone = r, this.mdiHuman = d, this.$root.$emit("component-created", {
                                        name: "tdlSearchBar"
                                    });
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    }))), function() {
                        return E.apply(this, arguments)
                    }),
                    beforeMount: function() {
                        this.$root.$on("openAndFocusSearchBar", this.openAndFocusSearchBar)
                    },
                    methods: {
                        fetchSearchOptions: function(t) {
                            var e = this;
                            if (this.fetchSearchItems) {
                                var n = new Promise((function(t, e) {
                                    setTimeout((function() {
                                        return e({
                                            message: "fetch-list.timeout"
                                        })
                                    }), 4950)
                                }));
                                return Promise.race([this.fetchSearchItems(t), n]).then((function(t) {
                                    return [].concat(Object(o.a)(t), Object(o.a)(e.items))
                                })).catch((function() {
                                    return Object(o.a)(e.items)
                                }))
                            }
                            return new Promise((function(t) {
                                return t(e.items)
                            }))
                        },
                        changeHighlitedItem: function(t) {
                            t >= 0 && (this.highlightedIndex = t)
                        },
                        changeSearchText: function(t) {
                            this.searchText = t, this.$emit("search-change", t)
                        },
                        clearText: function() {
                            this.searchText = "", this.$emit("search-change", "")
                        },
                        close: function(t) {
                            t && this.clearText(), this.isExpanded && (this.isExpanded = !1, this.$emit("closeSearchBar"))
                        },
                        handleSearchBarButtonClicked: function(t) {
                            this.openSearchBar(t), this.closeIcon === this.mdiClose && this.clearText()
                        },
                        handleInputKeypress: function(t) {
                            if ("Enter" === t)
                                if (this.parentHandleEnter) this.$emit("custom-enter");
                                else {
                                    var e = this.items[0].route;
                                    this.navigate(e)
                                }
                        },
                        handleItem: function(t) {
                            t && "search-option" === t.type ? this.navigate(t.route) : t && this.$emit("selectedItem", t)
                        },
                        navigate: function(t) {
                            this.manualLoading = !0, localStorage.setItem("search.performance.location", this.$route.fullPath), "people-name" === t ? window.location.href = "/".concat(this.searchPath, "/people-name?q=").concat(encodeURIComponent("name:".concat(this.searchText))) : "people-skill" === t ? window.location.href = "/".concat(this.searchPath, "/people-skill?q=").concat(encodeURIComponent("skill/role:".concat(this.searchText))) : this.searchText && this.username ? window.location.href = "/".concat(this.searchPath, "/jobs?q=").concat(encodeURIComponent("bestfor:".concat(this.username, " and keywords:").concat(this.searchText))) : this.searchText ? window.location.href = "/".concat(this.searchPath, "/jobs?q=").concat(encodeURIComponent("keywords:".concat(this.searchText))) : window.location.href = "/".concat(this.searchPath, "/jobs")
                        },
                        openAndFocusSearchBar: function() {
                            this.isExpanded = !0
                        },
                        openSearchBar: function(t) {
                            this.closeIcon !== this.mdiClose || this.isExpanded || "click" !== t.type ? this.isExpanded = !0 : this.isExpanded = !1
                        },
                        focusTypeahead: function() {
                            var t = this;
                            this.$refs.typeahead.setInput(this.searchText), this.$nextTick((function() {
                                t.$refs.typeahead.requestFocus(), t.$emit("openSearchBar")
                            }))
                        }
                    },
                    beforeDestroy: function() {
                        this.$root.$off("openAndFocusSearchBar", this.openAndFocusSearchBar)
                    }
                },
                it = et,
                nt = Object(R.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tdl-search-bar",
                            class: [{
                                isExpanded: t.isExpanded
                            }],
                            style: t.searchBarStyle
                        }, [t.isExpanded ? n("tdl-typeahead", {
                            ref: "typeahead",
                            staticClass: "tdl-search-bar__input",
                            attrs: {
                                debounce: 500,
                                "add-new-item": !1,
                                "fetch-list": t.fetchSearchOptions,
                                "initial-highlighted-index": 0,
                                "input-placeholder": t.currentPlaceholder,
                                "item-disabled": t.typeaheadItemDisabled,
                                "manual-loading": t.manualLoading,
                                "search-hint-mode": "search",
                                "desktop-close-list-on-item-selected": "",
                                "mobile-accept-focus-requests": ""
                            },
                            on: {
                                changed: t.handleItem,
                                "input-keypress": t.handleInputKeypress,
                                "query-changed": t.changeSearchText,
                                "selector-closed": function(e) {
                                    return t.close(!1)
                                },
                                "change-highlighted-item": t.changeHighlitedItem,
                                "typeahead-mounted": t.focusTypeahead
                            },
                            scopedSlots: t._u([{
                                key: "item",
                                fn: function(e) {
                                    var o = e.item;
                                    return ["search-option" === o.type ? n("tdl-search-item", {
                                        attrs: {
                                            item: o
                                        }
                                    }) : t._t("item", null, {
                                        item: o
                                    })]
                                }
                            }])
                        }, [t._v(" "), [n("button", {
                            staticClass: "tdl-search-bar__button md-icon-button",
                            on: {
                                click: function(e) {
                                    return t.close(!0)
                                }
                            }
                        }, [n("md-icon", {
                            staticClass: "tdl-search-bar__close",
                            attrs: {
                                "icon-svg": t.closeIcon
                            }
                        })], 1)]], 2) : n("md-input-container", [n("md-input", {
                            ref: "preview",
                            attrs: {
                                value: t.searchText,
                                placeholder: t.$t(t.placeholder)
                            },
                            on: {
                                focus: function(e) {
                                    return t.openSearchBar(e)
                                }
                            }
                        }), t._v(" "), n("button", {
                            staticClass: "tdl-search-bar__button md-icon-button",
                            on: {
                                click: function(e) {
                                    t.handleSearchBarButtonClicked(e)
                                }
                            }
                        }, [n("md-icon", {
                            staticClass: "tdl-search-bar__close",
                            attrs: {
                                "icon-svg": t.closeIcon
                            }
                        })], 1)], 1), t._v(" "), t.manualLoading ? n("md-progress", {
                            key: "stateLoading",
                            staticClass: "tdl-search-bar__loading",
                            attrs: {
                                "md-indeterminate": ""
                            }
                        }) : t._e()], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-5861dffa_0", {
                        source: ".tdl-search-bar[data-v-5861dffa]{width:100%;max-width:190px;margin:0 19px 0 24px}.tdl-search-bar.isExpanded[data-v-5861dffa]{max-width:673px}.tdl-search-bar__button.md-icon-button[data-v-5861dffa]{width:auto!important;height:auto!important;background:0 0;outline:0;border:none;cursor:pointer;margin:0;padding:0 5px;padding-right:16px}.tdl-search-bar__close[data-v-5861dffa]{color:rgba(255,255,255,.65)!important;margin-left:0;margin-right:0}.tdl-search-bar[data-v-5861dffa]  .typeahead-dialog__input-container-box{text-overflow:ellipsis}.tdl-search-bar[data-v-5861dffa]  .md-input-container.tdl-typeahead .md-chips{padding:6px 0 8px 18px!important}.tdl-search-bar[data-v-5861dffa]  .md-input-container.tdl-typeahead .md-chips .md-input{width:62px}.tdl-search-bar[data-v-5861dffa]  .typeahead-list__search-hint{display:none!important}.tdl-search-bar[data-v-5861dffa]  .md-chip.md-deletable{display:none!important}.tdl-search-bar[data-v-5861dffa]  .tdl-typeahead__item-slot--wrapper{width:100%}.tdl-search-bar[data-v-5861dffa]  .md-input{text-overflow:ellipsis}.tdl-search-bar[data-v-5861dffa]  .md-input::placeholder{text-overflow:ellipsis}.tdl-search-item[data-v-5861dffa]{display:flex;align-items:center;width:100%}.tdl-search-item__text[data-v-5861dffa]{display:inline-block;margin-left:16px;width:100%;max-width:calc(100% - 27px);text-overflow:ellipsis}.tdl-search-item__no-highlighted[data-v-5861dffa]{color:rgba(255,255,255,.9);text-transform:none}.tdl-search-item__highlighted[data-v-5861dffa]{color:#cddc39;text-transform:uppercase}",
                        map: void 0,
                        media: void 0
                    })
                }), it, "data-v-5861dffa", !1, undefined, !1, A.a, void 0, void 0)
        }
    }
]);