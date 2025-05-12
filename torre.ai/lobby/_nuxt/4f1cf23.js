! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "ae0d3630-57fd-419a-a052-078ce2e405d4", t._sentryDebugIdIdentifier = "sentry-dbid-ae0d3630-57fd-419a-a052-078ce2e405d4")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [69], {
        154: function(t, e, o) {
            "use strict";
            (function(t) {
                o.d(e, "a", (function() {
                    return r
                }));
                var r = {
                    computed: {
                        ProcessMixin_isClient: function() {
                            return t ? (t.env.VUE_APP_DISCOVERY_ENVIRONMENT_MODE, !0) : void 0
                        },
                        ProcessMixin_isServer: function() {
                            return t ? !!t.env.VUE_APP_DISCOVERY_ENVIRONMENT_MODE : void 0
                        }
                    }
                }
            }).call(this, o(203))
        },
        798: function(t, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return A
            }));
            o(31), o(75), o(200), o(32), o(45), o(74);
            var r = o(17),
                n = o(82),
                l = o(445),
                d = o(136),
                c = o(105),
                h = o(184),
                m = o(35),
                f = o(366),
                _ = o(27),
                v = o(156),
                y = o(208),
                B = o(209),
                x = o(85),
                C = o(98),
                T = o(596),
                w = o(365),
                M = o(598),
                S = o(597),
                k = o(41),
                $ = o(270),
                O = o(190),
                H = o(154),
                I = o(3),
                E = o(4),
                P = (o(183), {
                    en: {
                        "About us": "About us",
                        "Publish a job": "Publish a job",
                        "Terms of use": "Terms of use",
                        "Privacy policy": "Privacy policy",
                        Search: "Search",
                        "Jobs/gigs": "Jobs/gigs",
                        Signals: "Signals",
                        Alerts: "Alerts",
                        Messages: "Messages",
                        Notifications: "Notifications",
                        "Torre's product roadmap": "Torre's product roadmap",
                        "Request features": "Request features",
                        "API for developers": "API for developers",
                        Help: "Help",
                        "Your genome": "Your genome",
                        "Your jobs": "Your jobs",
                        "Your account": "Your account",
                        "Sign out": "Sign out",
                        "Your torre account": "Your torre account",
                        More: "More",
                        "Sign in": "Sign in",
                        "Spanish (Español)": "Español (Spanish)",
                        "English (Inglés)": "English (Inglés)",
                        "uk flag": "uk flag",
                        "spain flag": "spain flag",
                        Preferences: "Preferences",
                        "Claim or create a team/company genome": "Claim or create a team/company genome",
                        "Your teams and companies:": "Your teams and companies:",
                        "Your professional genome:": "Your professional genome:"
                    },
                    es: {
                        "About us": "Nosotros",
                        "Publish a job": "Publica un trabajo",
                        "Terms of use": "Términos de uso",
                        "Privacy policy": "Política de privacidad",
                        Search: "Buscar",
                        "Jobs/gigs": "Trabajos",
                        Signals: "Signals",
                        Alerts: "Alertas",
                        Messages: "Mensajes",
                        Notifications: "Notificaciones",
                        "Torre's product roadmap": "El mapa de producto de Torre",
                        "Request features": "Solicita nuevas características",
                        "API for developers": "API para desarrolladores",
                        Help: "Ayuda",
                        "Your genome": "Tu genoma",
                        "Your jobs": "Tus vacantes",
                        "Your account": "Tu cuenta",
                        "Sign out": "Cerrar sesión",
                        "Your torre account": "Tu cuenta de Torre",
                        More: "Más",
                        "Sign in": "Acceder",
                        "Spanish (Español)": "Español (Spanish)",
                        "English (Inglés)": "English (Inglés)",
                        "uk flag": "bandera reino unido",
                        "spain flag": "bandera españa",
                        Preferences: "Preferencias",
                        "Claim or create a team/company genome": "Reclama o crea un genoma de equipo/compañía",
                        "Your teams and companies:": "Tus equipos y compañías:",
                        "Your professional genome:": "Tu genoma profesional:"
                    }
                }),
                L = {
                    name: "tdl-app-bar",
                    head: function() {
                        return {
                            title: this.pageTitle
                        }
                    },
                    components: {
                        MdInkRipple: k.a,
                        MdWhiteframe: c.a,
                        MdToolbar: h.a,
                        MdList: x.a,
                        MdListItem: C.a,
                        MdButton: m.a,
                        MdIcon: _.a,
                        MdMenu: v.a,
                        MdMenuContent: y.a,
                        MdMenuItem: B.a,
                        TdlBrandLogo: w.a,
                        TdlHelpFab: T.a,
                        TdlNavigationMenu: l.b,
                        TdlWebAppNotification: S.a,
                        TdlUserActions: M.a,
                        MdDivider: f.a
                    },
                    mixins: [$.a, H.a],
                    props: {
                        user: {
                            type: Object,
                            required: !1
                        },
                        theme: {
                            type: String,
                            required: !1
                        },
                        pageTitle: {
                            type: String,
                            required: !1
                        },
                        onMounted: {
                            type: Function,
                            required: !1,
                            default: function() {}
                        },
                        onDestroyed: {
                            type: Function,
                            required: !1,
                            default: function() {}
                        },
                        hideBottomBar: {
                            type: Boolean,
                            default: !1
                        },
                        hideBrandedBar: {
                            type: Boolean,
                            default: !1
                        },
                        hideCandidateBar: {
                            type: Boolean,
                            default: !1
                        },
                        isSkillsBottomBar: {
                            type: Boolean,
                            default: !1
                        },
                        tdlCandidateBarOptions: {
                            type: Object,
                            required: !1
                        },
                        urls: {
                            type: Object,
                            required: !0
                        },
                        defaultLocale: {
                            type: String,
                            required: !0
                        },
                        hideLocaleSelector: {
                            type: Boolean,
                            default: !1
                        },
                        showExtraBar: {
                            type: Boolean,
                            default: !1
                        },
                        revealTopBar: {
                            type: Boolean,
                            default: !1
                        },
                        revealBottomBar: {
                            type: Boolean,
                            default: !1
                        },
                        listenScroll: {
                            type: Boolean,
                            default: !0,
                            required: !1
                        },
                        organizations: {
                            type: Array,
                            required: !1
                        },
                        featureFlagUser: {
                            type: Boolean,
                            default: !1
                        },
                        isTabletOrMobile: {
                            type: Boolean,
                            default: !1
                        },
                        firebaseUrl: {
                            type: String,
                            required: !0
                        },
                        hideTitleBar: {
                            type: Boolean,
                            default: !1
                        },
                        enableCompassOptions: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        },
                        enableMeetings: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        },
                        initialHeight: {
                            type: String,
                            default: "56"
                        },
                        highlightedIcons: {
                            type: Array,
                            default: function() {
                                return []
                            }
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
                        var t = this.isTabletOrMobile ? 500 : 1200;
                        return {
                            navigationBar: !1,
                            mdiMenuIcon: r.Bb,
                            mdiSearchIcon: r.Ab,
                            mdiEarthIcon: r.bb,
                            showMiddleContent: !1,
                            searchBarExpanded: !1,
                            platformMixin__width: t,
                            componentMounted: !1,
                            unreadNotificationsCount: 0,
                            unreadNotificationsUnsubscribe: void 0,
                            unreadMessagesCount: 0,
                            unreadMessagesUnsubscribe: void 0,
                            unreadSupportMessagesCount: 0,
                            unreadSupportMessagesUnsubscribe: void 0,
                            toolsGetter: new l.a,
                            toolBarHeight: this.initialHeight
                        }
                    },
                    computed: {
                        classObject: function() {
                            return [{
                                "tdl-toolbar tdl-app-bar-fixed": !0,
                                "tdl-title-fixed": !this.hasTitleBar && !this.hasExtraBar,
                                "tdl-has-navigation-bar": this.navigationBar
                            }]
                        },
                        hasMiddleContentSlot: function() {
                            return !!this.$slots.middleContent || !!this.$scopedSlots.middleContent
                        },
                        hasTitleBar: function() {
                            return void 0 !== this.$slots.default && !this.hideTitleBar
                        },
                        hasExtraBar: function() {
                            return void 0 !== this.$slots.extra || this.showExtraBar
                        },
                        isSignedIn: function() {
                            return void 0 !== this.user && null !== this.user
                        },
                        tools: function() {
                            var t = this,
                                e = this.toolsGetter.getTools(this.urls, this.isSignedIn, this.$i18n, !1, this.enableCompassOptions, this.user ? this.user.publicId || this.user.username : void 0).filter((function(e) {
                                    return !("search" === e.id && t.platformMixin__isSearchBarShown)
                                })),
                                o = 0;
                            return this.showMiddleContent && this.platformMixin__width <= 1543 && this.platformMixin__width >= this.maxWidth && (o = 1543 - this.platformMixin__width, o /= 80, o = Math.ceil(o)), e.filter((function(t, e) {
                                return e >= o
                            }))
                        },
                        selectedTools: function() {
                            return (this.isSkillsBottomBar ? this.skillsBottomBarTools : this.mobileTools).filter((function(t) {
                                return void 0 !== t
                            }))
                        },
                        mobileTools: function() {
                            return this.toolsGetter.getTools(this.urls, this.isSignedIn, this.$i18n, !0, this.enableCompassOptions, this.user ? this.user.publicId || this.user.username : void 0)
                        },
                        skillsBottomBarTools: function() {
                            var t = this.toolsGetter.getTools(this.urls, this.isSignedIn, this.$i18n, !0, this.enableCompassOptions, this.user ? this.user.publicId || this.user.username : void 0);
                            return ["preferences", "opportunities", "messages", "notifications", "main-menu"].map((function(e) {
                                return t.find((function(t) {
                                    return t.id === e
                                }))
                            }))
                        },
                        moreTools: function() {
                            var t = this;
                            return this.tools.filter((function(e) {
                                return !t.mobileTools.some((function(t) {
                                    return e.id === t.id
                                })) && "search" !== e.id
                            }))
                        },
                        searchTool: function() {
                            return !this.showMiddleContent && this.tools.find((function(t) {
                                return "search" === t.id
                            }))
                        },
                        accountUrl: function() {
                            return this.user && "".concat(this.urls.STARRGATE_BASE_URL)
                        },
                        cssVariables: function() {
                            return {
                                "--theme": this.theme,
                                "--app-bar-height": "".concat(this.getToolbarHeight, "px")
                            }
                        },
                        getToolbarHeight: function() {
                            return this.handleToolBarHeight()
                        },
                        shouldFullyHideTopBar: function() {
                            return this.platformMixin__isMobile && this.revealTopBar
                        },
                        shouldFullyHideBottomBar: function() {
                            return !this.hideBottomBar && this.platformMixin__isMobile && this.revealBottomBar
                        },
                        maxWidth: function() {
                            return 1050
                        }
                    },
                    beforeDestroy: function() {
                        this.unsubscribeToBadgesChanges()
                    },
                    watch: {
                        user: {
                            handler: function(t) {
                                this.subscribeToBadgesChanges()
                            },
                            immediate: !0
                        },
                        componentMounted: {
                            handler: function(t) {
                                !0 === t && void 0 === this.unreadNotificationsUnsubscribe && this.subscribeToBadgesChanges()
                            },
                            immediate: !0
                        }
                    },
                    methods: {
                        getHeightData: function() {
                            return {
                                fullHeight: this.cached_.rootOffset,
                                hasBars: this.hasTitleBar && this.hasExtraBar,
                                barRowHeight: this.$refs.brandBar.offsetHeight
                            }
                        },
                        handleBrandLogoClick: function() {
                            this.$root.$emit("tdl-app-bar--brand-logo-click")
                        },
                        handleMenuClick: function() {
                            this.$root.$emit("tdl-app-bar--menu-click")
                        },
                        handleMenuIconClick: function() {
                            this.$root.$emit("iframe-drawer::close::phobos")
                        },
                        navigationBarHandler: function() {
                            this.navigationBar = !0
                        },
                        handleScroll: function() {
                            this.listenScroll && (cancelAnimationFrame(this.scrollFrame_), this.scrollFrame_ = requestAnimationFrame(this.hideTransitionHandle))
                        },
                        hideTransitionHandle: function() {
                            var t = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
                            t = Math.max(Math.min(t, document.documentElement.scrollHeight - window.innerHeight), 0);
                            var e = this.shouldFullyHideTopBar ? this.cached_.rootOffset : this.cached_.brandBarHeight,
                                o = e - (e - this.toolbarOffset_);
                            t > o && t - o > 2 ? this.activeTransition(e, t) : this.removeTransition(e), this.lastScrollPosition_ = t
                        },
                        handleToolBarHeight: function() {
                            return this.toolBarHeight = this.componentMounted && this.$refs && this.$refs.toolbar ? this.$refs.toolbar.$el.clientHeight : this.initialHeight, this.toolBarHeight
                        },
                        activeTransition: function(t, e) {
                            var o = this.lastScrollPosition_ - e;
                            o > 0 && this.setShow(), o < 0 && this.setHide(t, o), this.elems_.toolbar.style.setProperty("transition-duration", "200ms"), this.elems_.toolbar.style.setProperty("transform", "translateY(-".concat(this.toolbarOffset_, "px)")), this.elems_.root.style.setProperty("padding-top", "".concat(this.cached_.rootOffset, "px")), this.elems_.appbar.classList.remove("tdl-fixed-padding"), this.elems_.toolbar.classList.add("tdl-title-fixed");
                            var r = this.elems_.toolbar.getBoundingClientRect().height + this.elems_.toolbar.getBoundingClientRect().top;
                            this.$emit("changed", {
                                fixed: !0,
                                height: r < this.cached_.titleBarheight ? this.cached_.titleBarheight : r
                            }), this.shouldFullyHideBottomBar && this.elems_.bottomBar.style.setProperty("transform", "translateY(".concat(this.bottomBarOffset_, "px)"))
                        },
                        removeTransition: function(t) {
                            this.toolbarOffset_ = t, this.bottomBarOffset_ = this.cached_.bottomBarHeight, this.elems_.toolbar.style.removeProperty("transition-duration"), this.elems_.toolbar.style.removeProperty("transform"), this.elems_.root.style.removeProperty("padding-top"), this.elems_.toolbar.classList.remove("tdl-title-fixed"), this.elems_.appbar.classList.add("tdl-fixed-padding");
                            var e = this.elems_.toolbar.getBoundingClientRect().height + this.elems_.toolbar.getBoundingClientRect().top;
                            this.$emit("changed", {
                                fixed: !1,
                                height: e < this.cached_.titleBarheight ? this.cached_.titleBarheight : e
                            }), this.elems_.bottomBar && (this.elems_.bottomBar.style.removeProperty("transform"), this.elems_.bottomBar.style.removeProperty("transition-duration"))
                        },
                        setShow: function() {
                            this.toolbarOffset_ > 0 && (this.toolbarOffset_ = 0), this.bottomBarOffset_ > 0 && (this.elems_.bottomBar.style.setProperty("transition-duration", "200ms"), this.bottomBarOffset_ = 0)
                        },
                        setHide: function(t, e) {
                            this.toolbarOffset_ < t && (this.toolbarOffset_ = Math.min(t, this.toolbarOffset_ - e)), this.bottomBarOffset_ < this.cached_.bottomBarHeight && (this.elems_.bottomBar.style.removeProperty("transition-duration"), this.bottomBarOffset_ = Math.min(this.cached_.bottomBarHeight, this.bottomBarOffset_ - e))
                        },
                        handleResize: function() {
                            this.calculate(), this.handleScroll(), this.handleToolBarHeight()
                        },
                        calculate: function() {
                            this.cached_ = {}, this.cached_.brandBarHeight = this.$refs.brandBar.offsetHeight + this.$refs.brandBar.offsetTop, this.cached_.titleBarheight = this.hasTitleBar ? this.$refs.titleBar.offsetHeight : 0, this.cached_.extraBarHeight = this.hasExtraBar ? this.$refs.extraBar.offsetHeight : 0, this.cached_.rootOffset = this.cached_.brandBarHeight + this.cached_.titleBarheight + this.cached_.extraBarHeight, this.cached_.bottomBarHeight = this.hideBottomBar ? 0 : this.$refs.bottomBar.$el.offsetHeight, this.elems_ = {}, this.elems_.root = this.$parent.$el, this.elems_.toolbar = this.$refs.toolbar.$el, this.elems_.appbar = this.$el, this.elems_.bottomBar = this.$refs.bottomBar ? this.$refs.bottomBar.$el : void 0
                        },
                        handleInit: function() {
                            this.$emit("initialized", {
                                fixed: !1,
                                height: this.cached_.rootOffset
                            })
                        },
                        mobileDisplay: function() {
                            return this.platformMixin__isMobile
                        },
                        hasDrawer: function(t) {
                            switch (t) {
                                case "messages":
                                case "notifications":
                                case "help":
                                    return !0;
                                default:
                                    return !1
                            }
                        },
                        displayBadge: function(t) {
                            switch (t) {
                                case "messages":
                                    return this.unreadMessagesCount;
                                case "notifications":
                                    return this.unreadNotificationsCount;
                                case "help":
                                    return this.unreadSupportMessagesCount;
                                default:
                                    return 0
                            }
                        },
                        openBottomDrawer: function() {
                            this.componentMounted && this.$refs.navMenu.open()
                        },
                        handleToolClick: function(t, e) {
                            var o = this;
                            t.anchorLink && this.user || t.target ? t.target || this.$emit("tool-clicked", t) : (e && e.preventDefault(), this.$emit("tool-clicked", t), "main-menu" === t.id ? this.openBottomDrawer() : "search" === t.id && this.hasMiddleContentSlot ? (this.handleCloseMainMenu(), this.showMiddleContent = !0, this.$nextTick((function() {
                                o.$root.$emit("openAndFocusSearchBar")
                            }))) : "help" === t.id ? this.helpTool__handleToolClick() : t.url ? this.redirect(t.url) : t.emitValue && this.$root.$emit(t.emitValue, t.emitParams))
                        },
                        closeSearchBar: function() {
                            this.showMiddleContent = !1, document.body.style.removeProperty("overflow")
                        },
                        openSearchBar: function() {
                            this.showMiddleContent = !0
                        },
                        subscribeToBadgesChanges: function() {
                            var t = this;
                            if (this.ProcessMixin_isClient && this.componentMounted) {
                                if (this.unsubscribeToBadgesChanges(), this.user && this.user.ggId) {
                                    var e = Object(O.a)(this.firebaseUrl, "k10/v3/public-stats/".concat(this.user.ggId));
                                    this.unreadMessagesUnsubscribe = Object(d.d)(e, (function(e) {
                                        if (e.exists()) {
                                            var o = e.val(),
                                                r = o.unread || 0,
                                                n = o["unread-support"] || 0;
                                            t.unreadMessagesCount = r, t.unreadSupportMessagesCount = n
                                        }
                                    }))
                                }
                                if (this.user && this.user.subjectId) {
                                    var o = Object(O.a)(this.firebaseUrl, "notifications/".concat(this.user.subjectId, "/unread-count/notifications"));
                                    this.unreadNotificationsUnsubscribe = Object(d.d)(o, (function(e) {
                                        t.unreadNotificationsCount = e.val()
                                    }))
                                }
                            }
                        },
                        unsubscribeToBadgesChanges: function() {
                            void 0 !== this.unreadNotificationsUnsubscribe && (this.unreadNotificationsUnsubscribe(), this.unreadNotificationsUnsubscribe = void 0), void 0 !== this.unreadMessagesUnsubscribe && (this.unreadMessagesUnsubscribe(), this.unreadMessagesUnsubscribe = void 0)
                        },
                        handleLocaleSelected: function(t) {
                            this.$emit("locale-selected", t)
                        },
                        handleLocaleSelectorDialogOpen: function() {
                            this.$emit("locale-selector-dialog-opened")
                        },
                        handleCloseMainMenu: function() {
                            this.$refs.navMenu.close()
                        },
                        redirect: function(path) {
                            window.location.href = path
                        }
                    },
                    created: function() {
                        this.$root.$emit("update-locale-string", P), this.$root.$on("tdl-bottom-navigation--added", this.navigationBarHandler)
                    },
                    mounted: function() {
                        var t = this;
                        this.onMounted(), this.$nextTick((function() {
                            t.calculate(), t.handleInit(), t.lastScrollPosition_ = 0, (t.hasTitleBar || t.hasExtraBar) && (window.addEventListener("resize", t.handleResize), window.addEventListener("scroll", t.handleScroll, Object(n.a)()), t.elems_.root.style.setProperty("padding-top", "0px")), t.componentMounted = !0
                        }))
                    },
                    destroyed: function() {
                        (this.hasTitleBar || this.hasExtraBar) && (window.removeEventListener("resize", this.handleResize), window.removeEventListener("scroll", this.handleScroll, Object(n.a)())), this.$root.$off("tdl-bottom-navigation--added", this.navigationBarHandler), this.onDestroyed()
                    }
                },
                A = Object(I.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            o = t._self._c || e;
                        return o("div", {
                            staticClass: "tdl-app-bar tdl-fixed-padding",
                            style: t.cssVariables
                        }, [o("md-whiteframe", {
                            ref: "toolbar",
                            class: t.classObject,
                            attrs: {
                                "md-elevation": "1"
                            }
                        }, [o("md-toolbar", [o("div", {
                            ref: "brandBar",
                            staticClass: "md-toolbar-container md-toolbar-container--branded-bar",
                            class: [{
                                "md-tool-bar-container--hidden": t.hideBrandedBar
                            }, {
                                "md-tool-bar-container--wrap": t.enableCompassOptions
                            }]
                        }, [t.enableCompassOptions ? t._e() : o("md-button", {
                            staticClass: "md-icon-button",
                            nativeOn: {
                                click: function(e) {
                                    return t.handleMenuClick.apply(null, arguments)
                                }
                            }
                        }, [o("md-icon", {
                            attrs: {
                                "icon-svg": t.mdiMenuIcon
                            }
                        })], 1), t._v(" "), o("div", {
                            staticClass: "nav-menu"
                        }, [o("tdl-navigation-menu", {
                            attrs: {
                                "enable-meetings": t.enableMeetings,
                                "firebase-url": t.firebaseUrl,
                                "iframe-url-host": t.iframeUrlHost,
                                "highlighted-icons": t.highlightedIcons,
                                "torre-base-url": t.torreBaseUrl,
                                urls: t.urls,
                                user: t.user
                            },
                            on: {
                                "bottom-drawer-external": t.openBottomDrawer
                            }
                        }), t._v(" "), o("div", {
                            class: [{
                                "tdl-brand-torre-co-logo-wrapper": t.enableCompassOptions,
                                "tdl-brand-logo-wrapper": !t.enableCompassOptions
                            }],
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.handleBrandLogoClick.apply(null, arguments)
                                }
                            }
                        }, [o("tdl-brand-logo", {
                            attrs: {
                                "enable-torre-co-logo": t.enableCompassOptions
                            }
                        })], 1)], 1), t._v(" "), o("div", {
                            staticClass: "tdl-app-bar__spacing"
                        }), t._v(" "), o("keep-alive", [(t.platformMixin__isSearchBarShown || t.showMiddleContent) && t.componentMounted ? t._t("middleContent", null, {
                            openSearchBar: t.openSearchBar,
                            closeSearchBar: t.closeSearchBar
                        }) : t._e()], 2), t._v(" "), t.searchTool ? t._t("custom-tools", (function() {
                            return [o("div", {
                                staticClass: "tdl-app-bar__search-icon"
                            }, [o("md-button", {
                                staticClass: "md-icon-button",
                                attrs: {
                                    href: t.searchTool.anchorLink && t.user ? t.searchTool.anchorLink : t.searchTool.metaAnchorLink
                                },
                                on: {
                                    click: function(e) {
                                        if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return null;
                                        t.searchTool.anchorLink && t.user ? t.$emit("tool-clicked", t.searchTool) : t.handleToolClick(t.searchTool, e)
                                    }
                                }
                            }, [o("md-icon", {
                                staticClass: "tools_icon",
                                attrs: {
                                    "icon-svg": t.mdiSearchIcon
                                }
                            })], 1)], 1)]
                        }), {
                            tools: t.tools
                        }) : t._e(), t._v(" "), o("div", {
                            staticClass: "tdl-app-bar__tools tools"
                        }, [t._l(t.tools, (function(e) {
                            return o("md-button", {
                                key: e.name,
                                class: ["tools__tool", {
                                    "tools__tool--has-badge": !!t.displayBadge(e.id)
                                }, {
                                    "tools__tool--highlighted": t.highlightedIcons.includes(e.id) && t.enableCompassOptions
                                }, {
                                    "tools__tool--has-drawer": t.hasDrawer(e.id)
                                }],
                                attrs: {
                                    badge: t.displayBadge(e.id),
                                    "border-style": "none",
                                    href: e.anchorLink && t.user ? e.anchorLink : e.metaAnchorLink
                                },
                                on: {
                                    click: function(o) {
                                        if (o.ctrlKey || o.shiftKey || o.altKey || o.metaKey) return null;
                                        e.anchorLink && t.user ? t.$emit("tool-clicked", e) : t.handleToolClick(e, o)
                                    }
                                }
                            }, [o("md-icon", {
                                staticClass: "tools__icon",
                                attrs: {
                                    "icon-svg": e.iconSvg
                                }
                            }), t._v(" "), e.image ? o("img", {
                                directives: [{
                                    name: "lazyload",
                                    rawName: "v-lazyload"
                                }],
                                staticClass: "tools__image",
                                attrs: {
                                    "data-url": e.image,
                                    alt: "Tool"
                                }
                            }) : t._e(), t._v(" "), o("div", {
                                staticClass: "tools__name"
                            }, [t._v("\n              " + t._s(e.name) + "\n            ")])], 1)
                        })), t._v(" "), t.enableCompassOptions ? o("div", {
                            staticClass: "tdl-app-bar__tools tools"
                        }, [o("div", {
                            class: "tools__tool tools__divider"
                        }), t._v(" "), o("md-button", {
                            key: t.helpTool__id,
                            class: ["tools__tool tools__tool--has-drawer", {
                                "tools__tool--has-badge": !!t.unreadSupportMessagesCount
                            }],
                            attrs: {
                                "border-style": "none",
                                badge: t.unreadSupportMessagesCount,
                                href: t.helpTool__anchorLink
                            },
                            on: {
                                click: function(e) {
                                    return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ? null : (e.preventDefault(), t.helpTool__handleToolClick.apply(null, arguments))
                                }
                            }
                        }, [o("md-icon", {
                            staticClass: "tools__icon",
                            attrs: {
                                "icon-svg": t.helpTool__mdiHelpIcon
                            }
                        }), t._v(" "), o("div", {
                            staticClass: "tools__name"
                        }, [t._v("\n                " + t._s(t.$t(t.helpTool__name)) + "\n              ")])], 1)], 1) : t._e()], 2), t._v(" "), o("tdl-user-actions", {
                            attrs: {
                                "default-locale": t.defaultLocale,
                                "hide-locale-selector": t.hideLocaleSelector,
                                organizations: t.organizations,
                                urls: t.urls,
                                user: t.user,
                                "style-props": t.styleProps,
                                "show-divider": t.mobileDisplay()
                            },
                            on: {
                                "locale-selected": t.handleLocaleSelected,
                                "locale-selector-dialog-open": t.handleLocaleSelectorDialogOpen
                            }
                        })], 2), t._v(" "), t.hasTitleBar ? o("hr", {
                            staticClass: "tdl-divider"
                        }) : t._e(), t._v(" "), t.hasTitleBar ? o("div", {
                            ref: "titleBar",
                            staticClass: "md-toolbar-container md-toolbar-container--title-bar"
                        }, [t._t("default")], 2) : t._e(), t._v(" "), t.hasExtraBar ? o("div", {
                            ref: "extraBar",
                            staticClass: "md-toolbar-container"
                        }, [t._t("extra")], 2) : t._e()])], 1), t._v(" "), t.hideBottomBar ? t._e() : o("md-toolbar", {
                            ref: "bottomBar",
                            staticClass: "tdl-app-bar__bottom-bar md-footer",
                            attrs: {
                                "md-theme": t.theme
                            }
                        }, [o("div", {
                            staticClass: "tdl-app-bar__tools tools"
                        }, [t._l(t.selectedTools, (function(e) {
                            return o("md-button", {
                                key: e.name,
                                staticClass: "tools__tool",
                                class: [{
                                    "tools__tool--has-badge": !!t.displayBadge(e.id)
                                }, {
                                    "tools__tool--highlighted": t.highlightedIcons.includes(e.id) && t.enableCompassOptions
                                }],
                                attrs: {
                                    badge: t.displayBadge(e.id),
                                    href: e.anchorLink && t.user ? e.anchorLink : e.metaAnchorLink
                                },
                                on: {
                                    click: function(o) {
                                        if (o.ctrlKey || o.shiftKey || o.altKey || o.metaKey) return null;
                                        e.anchorLink && t.user ? t.$emit("tool-clicked", e) : t.handleToolClick(e, o)
                                    }
                                }
                            }, [o("md-icon", {
                                staticClass: "tools__icon",
                                attrs: {
                                    "icon-svg": e.iconSvg
                                }
                            }), t._v(" "), e.image ? o("img", {
                                directives: [{
                                    name: "lazyload",
                                    rawName: "v-lazyload"
                                }],
                                staticClass: "tools__image",
                                attrs: {
                                    "data-url": e.image,
                                    alt: "Tool"
                                }
                            }) : t._e(), t._v(" "), o("div", {
                                staticClass: "tools__name"
                            }, [t._v("\n          " + t._s(e.name) + "\n        ")])], 1)
                        })), t._v(" "), t.enableCompassOptions ? t._e() : o("md-menu", {
                            staticClass: "tools__tool",
                            attrs: {
                                "md-size": "4",
                                "md-offset-y": -67,
                                "md-direction": "top right"
                            },
                            scopedSlots: t._u([{
                                key: "default",
                                fn: function() {
                                    return [o("md-button", [o("md-icon", {
                                        staticClass: "tools__icon",
                                        attrs: {
                                            "icon-svg": t.mdiMenuIcon
                                        }
                                    }), t._v(" "), o("div", {
                                        staticClass: "tools__name"
                                    }, [t._v("\n              " + t._s(t.$t("More")) + "\n            ")])], 1)]
                                },
                                proxy: !0
                            }, {
                                key: "content",
                                fn: function() {
                                    return t._l(t.moreTools, (function(e) {
                                        return o("md-menu-item", {
                                            key: e.name,
                                            staticClass: "all-tools__tool tool",
                                            attrs: {
                                                href: e.anchorLink && t.user ? e.anchorLink : e.metaAnchorLink
                                            },
                                            on: {
                                                click: function(o) {
                                                    if (o.ctrlKey || o.shiftKey || o.altKey || o.metaKey) return null;
                                                    e.anchorLink && t.user ? t.$emit("tool-clicked", e) : t.handleToolClick(e, o)
                                                }
                                            }
                                        }, [o("md-icon", {
                                            staticClass: "tools__icon",
                                            attrs: {
                                                "icon-svg": e.iconSvg
                                            }
                                        }), t._v(" "), e.image ? o("img", {
                                            directives: [{
                                                name: "lazyload",
                                                rawName: "v-lazyload"
                                            }],
                                            staticClass: "tools__image",
                                            attrs: {
                                                "data-url": e.image,
                                                alt: "Tool"
                                            }
                                        }) : t._e(), t._v(" "), o("div", {
                                            staticClass: "tools__name md-body-1"
                                        }, [t._v("\n              " + t._s(e.name) + "\n            ")])], 1)
                                    }))
                                },
                                proxy: !0
                            }], null, !1, 1568444340)
                        })], 2)]), t._v(" "), o("tdl-navigation-menu", {
                            ref: "navMenu",
                            attrs: {
                                "bottom-menu": "",
                                "enable-meetings": t.enableMeetings,
                                "firebase-url": t.firebaseUrl,
                                "iframe-url-host": t.iframeUrlHost,
                                "highlighted-icons": t.highlightedIcons,
                                "torre-base-url": t.torreBaseUrl,
                                urls: t.urls,
                                user: t.user
                            },
                            on: {
                                "bottom-drawer-opened": function(e) {
                                    return t.$emit("bottom-drawer-opened")
                                },
                                "bottom-drawer-closed": function(e) {
                                    return t.$emit("bottom-drawer-closed")
                                }
                            }
                        }), t._v(" "), o("tdl-web-app-notification", {
                            attrs: {
                                user: t.user,
                                "firebase-url": t.firebaseUrl,
                                dismissible: !1
                            }
                        })], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-3077abbb_0", {
                        source: ".tdl-lazy-loader-hide-background-image[data-v-3077abbb]{background-image:none!important;top:0!important}.tdl-fixed-padding[data-v-3077abbb]{padding-bottom:var(--app-bar-height)}.tdl-app-bar[data-v-3077abbb]{width:100%}.tdl-app-bar .tdl-toolbar.md-whiteframe[data-v-3077abbb]{z-index:4}.tdl-app-bar .tdl-toolbar .md-toolbar[data-v-3077abbb]{background-color:#27292d!important;color:rgba(255,255,255,.65);min-height:56px;padding:0 8px 0 0}.tdl-app-bar .tdl-toolbar .md-toolbar .md-toolbar-container[data-v-3077abbb]{height:56px}.tdl-app-bar .tdl-toolbar .md-toolbar .md-toolbar-container--branded-bar>.md-button[data-v-3077abbb]:first-child{margin-right:24px}.tdl-app-bar .tdl-toolbar .md-toolbar .md-toolbar-container .md-toolbar[data-v-3077abbb]{padding:0}.tdl-app-bar .tdl-toolbar .md-toolbar .md-tool-bar-container--hidden[data-v-3077abbb]{display:none}.tdl-app-bar .tdl-toolbar .md-toolbar .md-tool-bar-container--wrap[data-v-3077abbb]{padding-right:8px}.tdl-app-bar .tdl-toolbar .md-toolbar img.tdl-brand-logo[data-v-3077abbb]{height:17px}.tdl-app-bar .tdl-toolbar.tdl-title-fixed[data-v-3077abbb]{position:fixed;top:0;left:0;right:0}.tdl-app-bar .tdl-toolbar .tdl-brand-logo-wrapper[data-v-3077abbb]{min-width:65px}.tdl-app-bar .tdl-toolbar .tdl-brand-logo-wrapper a[data-v-3077abbb]{padding:4px 0}.tdl-app-bar .tdl-toolbar .tdl-brand-torre-co-logo-wrapper[data-v-3077abbb]{min-width:122px;display:flex;align-items:center;height:100%;cursor:pointer;padding:16px 16px 16px 0;margin-left:4px}.tdl-app-bar .tdl-toolbar .tdl-brand-torre-co-logo-wrapper a[data-v-3077abbb]{padding:4px 0}.tdl-app-bar .tdl-toolbar .tdl-divider[data-v-3077abbb]{margin-top:-1px;border-top:1px solid rgba(255,255,255,.12)}.tdl-app-bar .tdl-toolbar .tdl-divider[data-v-3077abbb]{margin:0 -8px;border-left:0;border-right:0;border-bottom:0;width:calc(100% + 16px);z-index:1}.tdl-app-bar .tdl-toolbar.tdl-app-bar-fixed[data-v-3077abbb]{position:fixed;top:0;left:0;right:0}.tdl-app-bar__spacing[data-v-3077abbb]{flex:1}.tdl-app-bar__tools[data-v-3077abbb]{display:flex;justify-content:center;align-items:center;height:56px}.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%}.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool--hidden .md-menu-content{display:none}.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool--has-badge .md-button__badge{top:3px;right:calc(50% - 32px)}.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool .tools__image{height:22px}.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool .tools__icon{margin:unset;color:rgba(255,255,255,.65)}.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool .tools__name{margin-top:5px;font-size:10px;line-height:11px;text-transform:none;text-align:center;color:rgba(255,255,255,.65)}@media (max-width:380px){.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool .tools__name{white-space:normal}}.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool--highlighted{border-bottom:solid #cddc39 2px}@media (max-width:959px){.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool--highlighted{border-bottom:none;border-top:solid #cddc39 2px}}.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool--highlighted .tools__icon{color:#cddc39}.tdl-app-bar__tools[data-v-3077abbb]  .tools__tool--highlighted .tools__name{color:#cddc39}.tdl-app-bar__tools .tools__divider[data-v-3077abbb]{display:flex;width:1px;height:40px;background:rgba(255,255,255,.65);margin:0 12px}.tdl-app-bar__tools .md-button[data-v-3077abbb]{display:flex;flex-direction:column;justify-content:center;align-items:center;min-width:unset;height:100%;margin:0;padding:0 12px}@media screen and (min-width:370px){.tdl-app-bar__tools .md-button[data-v-3077abbb]{min-width:72px}}.tdl-app-bar__tools .md-button[data-v-3077abbb]:hover{background-color:rgba(1,1,1,.1)!important}@media screen and (max-width:1050px){.tdl-app-bar__tools[data-v-3077abbb]{display:none}}.tdl-app-bar__all-tools .tool .md-list-item-container.md-button[data-v-3077abbb]{justify-content:flex-start}.tdl-app-bar__all-tools .tool__logo[data-v-3077abbb]{height:24px}.tdl-app-bar__all-tools .tool__logotype[data-v-3077abbb]{margin-left:32px}@media screen and (min-width:960px){.tdl-app-bar__search-icon[data-v-3077abbb]{display:none}}.tdl-app-bar__bottom-bar[data-v-3077abbb]{width:100vw;justify-content:center;padding:0 0 env(safe-area-inset-bottom);position:fixed;bottom:0;left:0;z-index:4;box-shadow:0 -2px 2px 0 rgba(0,0,0,.2)}.tdl-app-bar__bottom-bar .tools[data-v-3077abbb]{width:100%;display:flex;justify-content:space-around}.tdl-app-bar__bottom-bar .tools .tools__tool[data-v-3077abbb]{width:inherit}@media screen and (min-width:960px){.tdl-app-bar__bottom-bar[data-v-3077abbb]{display:none}}@media screen and (max-height:400px){.tdl-app-bar__bottom-bar[data-v-3077abbb]{display:none}}.tdl-app-bar .nav-menu[data-v-3077abbb]{display:flex;min-height:100%;align-items:center}",
                        map: void 0,
                        media: void 0
                    })
                }), L, "data-v-3077abbb", !1, undefined, !1, E.a, void 0, void 0)
        }
    }
]);