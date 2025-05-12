! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            r = (new Error).stack;
        r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "910903d1-9277-4ec8-aae3-2e946d3d288a", e._sentryDebugIdIdentifier = "sentry-dbid-910903d1-9277-4ec8-aae3-2e946d3d288a")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [25], {
        141: function(e, r, o) {
            "use strict";
            o(47), o(40), o(31), o(60), o(37), o(68);
            var t = o(18),
                n = (o(65), o(28), o(52), o(83), o(2)),
                c = o(70),
                d = o(790),
                l = o(596),
                f = o(359),
                m = o(214),
                h = o(619),
                v = o(620),
                y = (o(148), o(15), o(33), o(34), o(201), o(120), o(43)),
                O = o(461),
                S = o(329),
                T = n.default.extend({
                    mixins: [O.a],
                    methods: {
                        referralsTrackingMixin_trackUserReferred: function(e) {
                            var r = e.destination,
                                o = e.userGgId,
                                t = e.referrerCode,
                                n = e.deviceUuid,
                                c = this.trackingMixin_getInteractionContext({
                                    interaction: "UserReferred"
                                });
                            S.a.track("UserReferred", {
                                destination: r,
                                userGgId: o,
                                referrerCode: t,
                                deviceUuid: n
                            }, [c])
                        }
                    }
                }),
                R = o(321);

            function C(e, r) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }
            var E = n.default.extend({
                mixins: [T],
                computed: function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var o = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? C(Object(o), !0).forEach((function(r) {
                            Object(t.a)(e, r, o[r])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : C(Object(o)).forEach((function(r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r))
                        }))
                    }
                    return e
                }({}, Object(c.d)("User", ["user"])),
                watch: {
                    user: {
                        handler: function() {
                            this.addReferral()
                        },
                        immediate: !0
                    }
                },
                created: function() {
                    this.referralMixin_migrateCookies(), this.referralMixin_checkLastReferrerCode(), this.addReferral()
                },
                methods: {
                    referralMixin_checkLastReferrerCode: function() {
                        var e = this,
                            r = y.a.getCookie("lastReferrerCode"),
                            o = y.a.getCookie("referrerCode"),
                            t = y.a.getCookie("trackingId");
                        r && (R.a.gerReferrerDetail(r).subscribe((function(n) {
                            var c;
                            !!t && t === n.deviceUuid || e.user && e.user.ggId === (null === (c = n.referrer) || void 0 === c ? void 0 : c.ggId) ? e.removeSelfReferral(r, o) : e.referralsTrackingMixin_trackUserReferred({
                                destination: e.$route.fullPath,
                                userGgId: e.user ? e.user.ggId : void 0,
                                referrerCode: r,
                                deviceUuid: t
                            })
                        }), (function(e) {
                            console.error("Error at getting referrer detail: ", e)
                        })), y.a.removeCookie("lastReferrerCode", this.$config.rootDomain))
                    },
                    addReferral: function() {
                        if (this.user) {
                            var e = y.a.getCookie("referrerCodes"),
                                r = e ? e.split(",") : [],
                                o = [];
                            r.length > 0 && (r.forEach((function(e) {
                                o.push(R.a.addReferral(e))
                            })), Promise.all(o)), y.a.removeCookie("referrerCodes", this.$config.rootDomain)
                        }
                    },
                    removeSelfReferral: function(e, r) {
                        e === r && this.removeReferrerCodeCookie(), this.removeFromReferrerCodes(e)
                    },
                    removeFromReferrerCodes: function(e) {
                        var r = y.a.getCookie("referrerCodes"),
                            o = r ? r.split(",") : [],
                            t = o.indexOf(e);
                        t > -1 && (o.splice(t, 1), y.a.setCookie("referrerCodes", o.join(","), 3e3, this.$config.rootDomain))
                    },
                    removeReferrerCodeCookie: function() {
                        y.a.removeCookie("referrerCode", this.$config.rootDomain), y.a.removeCookie("referrerDestination", this.$config.rootDomain)
                    },
                    referralMixin_migrateCookies: function() {
                        y.a.removeCookie("referrerCode"), y.a.removeCookie("referrerDestination"), y.a.removeCookie("lastReferrerCode"), y.a.removeCookie("referrerCodes"), y.a.removeCookie("ownReferrerCodes", this.$config.rootDomain)
                    }
                }
            });

            function w(e, r) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }
            var I = n.default.extend({
                mixins: [T],
                data: function() {
                    return {
                        referUrlToken: null,
                        mainReferrerCode: null,
                        deviceUuId: ""
                    }
                },
                computed: function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var o = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? w(Object(o), !0).forEach((function(r) {
                            Object(t.a)(e, r, o[r])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : w(Object(o)).forEach((function(r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r))
                        }))
                    }
                    return e
                }({}, Object(c.c)("FeatureFlag", ["featureFlagElsaReferOnUrl"])),
                watch: {
                    "$route.query.r": function() {
                        this.checkReferUrlToken()
                    }
                },
                mounted: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.deviceUuId = y.a.getCookie("trackingId"), e.checkReferUrlToken()
                    }))
                },
                methods: {
                    checkReferUrlToken: function() {
                        var e = this;
                        this.$route && (this.referUrlToken = this.$route.query.r ? this.$route.query.r : null, this.referUrlToken || this.getReferrerCodeByUrl(this.$route.fullPath).subscribe((function(r) {
                            e.mainReferrerCode = r;
                            var o = Object.assign({}, e.$route.query);
                            o.r = r, e.$router.replace({
                                query: o
                            })
                        })))
                    },
                    getReferrerCodeByUrl: function(path) {
                        return R.a.getOrCreateReferrerCode("url:".concat(path))
                    }
                }
            });

            function P(e, r) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }

            function U(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var o = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? P(Object(o), !0).forEach((function(r) {
                        Object(t.a)(e, r, o[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : P(Object(o)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r))
                    }))
                }
                return e
            }
            r.a = n.default.extend({
                components: {
                    Snackbar: h.default,
                    TdlHelpFab: l.a,
                    TdsFooter: d.a,
                    ThemeInjector: v.a
                },
                mixins: [f.a, E, I],
                data: function() {
                    return {
                        reloadKey: 0,
                        unsubscribeFromStore: void 0,
                        openIdMonitorId: void 0
                    }
                },
                computed: U({
                    routeHash: function() {
                        return this.$route.hash
                    },
                    opIframeUrl: function() {
                        return "".concat("https://accounts.torre.ai", "/openid/check-session-iframe/")
                    },
                    silentLoginIframeUrl: function() {
                        return "/silent-login"
                    }
                }, Object(c.d)("User", ["user"])),
                created: function() {
                    this.$root.$on("update-locale-string", this.updateLocaleString), this.$root.$on("language-change", this.updateLocaleRoute)
                },
                mounted: function() {
                    this.setupListeners(), this.setupOpenIdMonitor(), window.addEventListener("message", this.handlePostedMessageEvents)
                },
                beforeDestroy: function() {
                    this.unsubscribeFromStore && this.unsubscribeFromStore(), window.removeEventListener("message", this.handlePostedMessageEvents), this.removeOpenIdMonitor()
                },
                methods: U({
                    handlePostedMessageEvents: function(e) {
                        e.origin !== "".concat(this.$config.starrgateUrl) ? e.origin !== window.origin || "isAuthenticated" !== e.data && "isNotAuthenticated" !== e.data || ("isAuthenticated" === e.data && this.getUser(), "isNotAuthenticated" === e.data && this.user && m.a.logout(), this.removeSilentLoginIframe()) : "changed" === e.data && (document.querySelector("#silent-login-iframe") || this.addSilentLoginIframe())
                    },
                    setupOpenIdMonitor: function() {
                        this.openIdMonitorId && window.clearInterval(this.openIdMonitorId), this.openIdMonitorId = window.setInterval(this.postMessageToOpenIdCheckSession, 5e3)
                    },
                    removeOpenIdMonitor: function() {
                        this.openIdMonitorId && window.clearInterval(this.openIdMonitorId)
                    },
                    addSilentLoginIframe: function() {
                        var e = document.createElement("iframe");
                        e.setAttribute("id", "silent-login-iframe"), e.setAttribute("frameborder", "0"), e.setAttribute("width", "0"), e.setAttribute("height", "0"), e.setAttribute("src", this.silentLoginIframeUrl), document.body.appendChild(e)
                    },
                    removeSilentLoginIframe: function() {
                        document.body.querySelector("#silent-login-iframe") && document.body.removeChild(document.querySelector("#silent-login-iframe"))
                    },
                    postMessageToOpenIdCheckSession: function() {
                        var e = "".concat(this.$config.starrgateCliendId),
                            iframe = document.getElementById("op-iframe");
                        if (iframe && iframe.contentWindow) {
                            var r = m.a.retrieveSessionState(),
                                data = "".concat(e, " ").concat(r);
                            iframe.contentWindow.postMessage(data, "".concat(this.$config.starrgateUrl))
                        } else console.error("OpenId check session iframe not found")
                    },
                    updateLocaleString: function(e) {
                        this.updateLocaleMessages(e)
                    },
                    updateLocaleMessages: function(e) {
                        var r = this.$i18n.messages.en,
                            o = this.$i18n.messages.es;
                        this.$i18n.setLocaleMessage("en", U(U({}, r), e.en)), this.$i18n.setLocaleMessage("es", U(U({}, o), e.es))
                    },
                    updateLocaleRoute: function(e) {
                        this.$router.replace(this.switchLocalePath(e))
                    },
                    setupListeners: function() {
                        var e = this;
                        this.$root.$on("reload", (function() {
                            e.reloadKey += 1
                        }))
                    }
                }, Object(c.b)("User", ["getUser"]))
            })
        },
        359: function(e, r, o) {
            "use strict";
            o(47), o(40), o(31), o(60), o(37), o(68);
            var t = o(18),
                n = o(2),
                c = o(70),
                d = o(526),
                l = o(319),
                f = o(310);

            function m(e, r) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), o.push.apply(o, t)
                }
                return o
            }
            r.a = n.default.extend({
                data: function() {
                    return {
                        appMixin_brandColor: "#CDDC39"
                    }
                },
                computed: {
                    appMixin_locale: function() {
                        return this.$route.params.locale ? this.$route.params.locale : this.$i18n.locale
                    },
                    appMixin_selfUrl: function() {
                        return "https://torre.ai"
                    }
                },
                methods: function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var o = null != arguments[r] ? arguments[r] : {};
                        r % 2 ? m(Object(o), !0).forEach((function(r) {
                            Object(t.a)(e, r, o[r])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach((function(r) {
                            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r))
                        }))
                    }
                    return e
                }({
                    appMixin_saveUserLocale: function(e, r) {
                        var o = this;
                        r && r.locale !== e ? f.a.updateLocale(e).subscribe((function() {
                            o.refreshUserLocale(e)
                        }), (function(e) {
                            o.$root.$emit("deferred-message", {
                                duration: 4e3,
                                message: d.a.processError(e)
                            })
                        })) : this.refreshUserLocale(e)
                    },
                    refreshUserLocale: function(e) {
                        var r = this;
                        Object(l.b)(e, this.$i18n), this.setUserLocale(e), n.default.nextTick((function() {
                            r.$root.$emit("deferred-message", {
                                message: r.$t("Language updated!")
                            })
                        }))
                    }
                }, Object(c.b)("User", ["setUserLocale"]))
            })
        },
        461: function(e, r, o) {
            "use strict";
            o.d(r, "a", (function() {
                return c
            }));
            var t = o(2),
                n = o(364),
                c = t.default.extend({
                    methods: {
                        trackingMixin_getInteractionContext: function(e) {
                            var r = e.interaction,
                                o = e.pageType,
                                t = e.onboarding,
                                section = e.section,
                                c = e.channel,
                                path = e.path,
                                d = e.intent,
                                l = e.medium,
                                source = e.source;
                            return new n.a("InteractionContext", {
                                interaction: r,
                                section: section,
                                channel: c,
                                path: path || this.$route.fullPath,
                                pageType: o || "homepage",
                                onboarding: !!t,
                                locale: this.$i18n.locale,
                                flow: this.$route.query.route,
                                source: source || this.$route.query.source || this.$route.query.utm_source,
                                next: this.$route.query.next,
                                intent: d || this.$route.query.intent,
                                medium: l || this.$route.query.medium || this.$route.query.utm_medium
                            })
                        }
                    }
                })
        },
        568: function(e, r, o) {
            "use strict";
            r.a = {
                en: {
                    "Contact Support": "Contact Support",
                    "For support, please contact us": "For support, please contact us",
                    "Your message*": "Your message*",
                    "Your e-mail address*": "Your e-mail address*",
                    Submit: "Submit",
                    "An error occurred while saving your request.": "An error occurred while saving your request.",
                    "Your request has been received.": "Your request has been received.",
                    "You haven't added a message yet.": "You haven't added a message yet.",
                    "You haven't added an email yet.": "You haven't added an email yet.",
                    "The email is invalid": "The email is invalid",
                    "Loading...": "Loading...",
                    help: {
                        appBar: "Contact Support"
                    }
                },
                es: {
                    "Contact Support": "Contacta al equipo de soporte",
                    "For support, please contact us": "Para recibir soporte, por favor contáctanos",
                    "Your message*": "Tu mensaje*",
                    "Your e-mail address*": "Tu correo electrónico*",
                    Submit: "Enviar",
                    "An error occurred while saving your request.": "Se produjo un error al guardar su solicitud.",
                    "Your request has been received.": "Su petición ha sido recibida.",
                    "You haven't added a message yet.": "Aún no has agregado un mensaje.",
                    "You haven't added an email yet.": "Aún no has agregado un correo electrónico.",
                    "The email is invalid": "Correo inválido",
                    "Loading...": "Cargando...",
                    help: {
                        appBar: "Contacta al equipo de soporte"
                    }
                }
            }
        },
        576: function(e, r, o) {
            "use strict";
            r.a = {
                en: {
                    "Torre Companion": "Torre Companion",
                    "Download the mobile app": "Download the mobile app",
                    "Stay on top of your messages and notifications in Torre:": "Stay on top of your messages and notifications in Torre:",
                    "Updates about your jobs and applications,": "Updates about your jobs and applications,",
                    "New job alerts,": "New job alerts,",
                    "New messages, signalers, recommenders and more.": "New messages, signalers, recommenders and more.",
                    "Torre will send you a download link to your phone:": "Torre will send you a download link to your phone:",
                    Send: "Send",
                    "Not now": "Not now",
                    "Using Android?": "Using Android?",
                    "Using iOS?": "Using iOS?",
                    "Download on the App Store": "Download on the App Store",
                    "Download on the Google Play Store": "Download on the Google Play Store",
                    "Message sent": "Message sent",
                    "Coming soon to iOS": "Coming soon to iOS",
                    "Scan the code to download the app.": "Scan the code to download the app."
                },
                es: {
                    "Torre Companion": "Torre Companion",
                    "Download the mobile app": "Descarga la app",
                    "Stay on top of your messages and notifications in Torre:": "Mantente al tanto de tus mensajes y notificaciones en Torre:",
                    "Updates about your jobs and applications,": "Actualizaciones sobre tus trabajos y aplicaciones,",
                    "New job alerts,": "Nuevas alertas de trabajo,",
                    "New messages, signalers, recommenders and more.": "Nuevos mensajes, personas que te han enviado signals, te han recomendado y más.",
                    "Torre will send you a download link to your phone:": "Torre te enviará un enlace de descarga a tu teléfono:",
                    Send: "Enviar",
                    "Not now": "Ahora no",
                    "Using Android?": "¿Usas Android?",
                    "Using iOS?": "¿Usas iOS?",
                    "Download on the App Store": "Descárgala en la App Store",
                    "Download on the Google Play Store": "Descárgala en la Google Play Store",
                    "Message sent": "Mensaje enviado",
                    "Coming soon to iOS": "Disponible próximamente para iOS",
                    "Scan the code to download the app.": "Escanea el código para descargar la app."
                }
            }
        },
        577: function(e, r, o) {
            "use strict";
            r.a = {
                en: {
                    torreDemo: {
                        appBar: "Torre demo",
                        tittle: "demo"
                    },
                    "5-min-demo": "5-minute demo",
                    "LEARN MORE": "LEARN MORE",
                    "For companies": "For companies"
                },
                es: {
                    torreDemo: {
                        appBar: "Torre demo",
                        tittle: "demo"
                    },
                    "5-min-demo": "Demo en 5 minutos",
                    "LEARN MORE": "CONOCE MÁS",
                    "For companies": "Para empresas"
                }
            }
        },
        578: function(e, r, o) {
            "use strict";
            r.a = {
                en: {
                    partner: {
                        appBar: "Partner programs"
                    },
                    "Partnership programs for": "Partnership programs for",
                    "HR CONSULTING FIRMS": "HR CONSULTING FIRMS",
                    "EDUCATIONAL INSTITUTIONS": "EDUCATION PROVIDERS",
                    "EDUCATIONAL PROVIDERS": "EDUCATION PROVIDERS",
                    GOVERNMENT: "GOVERNMENT",
                    "HRTECH SOLUTION PROVIDERS": "HRTECH SOLUTION PROVIDERS",
                    "Partner up with Torre": "Partner up with Torre",
                    "Join THE global network that enables everyone to find fulfilling professional opportunities.  ": "Join THE global network that enables everyone to find fulfilling professional opportunities.  "
                },
                es: {
                    partner: {
                        appBar: "Programa de aliados"
                    },
                    "Partnership programs for": "Programas de alianzas para",
                    "HR CONSULTING FIRMS": "EMPRESAS DE CONSULTORÍA DE RRHH",
                    "EDUCATIONAL INSTITUTIONS": "PROVEEDORES EDUCATIVOS",
                    "EDUCATIONAL PROVIDERS": "PROVEEDORES EDUCATIVOS",
                    GOVERNMENT: "GOBIERNOS",
                    "HRTECH SOLUTION PROVIDERS": "PROVEEDORES DE SOLUCIONES HRTECH",
                    "Partner up with Torre": "Asóciate con Torre",
                    "Join THE global network that enables everyone to find fulfilling professional opportunities.  ": "Únete a la red global que permite a todos encontrar oportunidades profesionales satisfactorias."
                }
            }
        },
        579: function(e, r, o) {
            "use strict";
            r.a = {
                en: {
                    referral: {
                        appBar: "Referral program",
                        heroTitle: "Refer an organization to Torre and earn up to USD1,000",
                        ctaButton: "REFER NOW",
                        snackbarMessage: "Referral information submitted",
                        how: {
                            title: "How it works",
                            step1: "Fill up the form with the referral information.",
                            step2: "We contact your referral.",
                            step3: "We send you up to USD1,000 upon signing up as Torre customers."
                        },
                        refer: {
                            title: "Refer organizations, get a bonus of up to USD1,000",
                            item1: "Earn 50% of what your referrals spend up to USD1,000",
                            item2: "Share your information and that of the organization. Torre will take care of the rest."
                        },
                        form: {
                            field1: "Your name",
                            field2: "Your email",
                            field3: "Organization you’re referring",
                            field4: "Name of your contact",
                            field5: "Phone or email of your contact",
                            ctaButton: "SUBMIT REFERRAL"
                        },
                        terms: {
                            title: "*Terms and conditions:",
                            term1: "Refer all the companies you want. There is no upper limit",
                            term2: "Only organizations new to the platform are eligible for the referral program.",
                            term3: "Organizations will be eligible for any of Torre's paid services to find or screen candidates. You can learn more about our services at ",
                            term4: "Referrers can earn a maximum of USD1,000 in rewards from valid referrals. All referrals are subject to verification."
                        }
                    }
                },
                es: {
                    referral: {
                        appBar: "Programa de referidos",
                        heroTitle: "Refiere una organización a Torre y recibe hasta USD1.000",
                        ctaButton: "REFERIR YA",
                        snackbarMessage: "Información del referido enviada",
                        how: {
                            title: "Cómo funciona",
                            step1: "Llena el formulario con la información de tu referido.",
                            step2: "Contactamos a tu referido.",
                            step3: "Te enviamos hasta USD1.000 cuando tu referido se registre como usuario pago de Torre."
                        },
                        refer: {
                            title: "Refiere organizaciones, recibe un bono de hasta USD1.000",
                            item1: "Recibe el 50% de lo que gastan tus referidos (hasta USD1.000 máximo).",
                            item2: "Comparte tu información y la de la organización, Torre se encargará del resto."
                        },
                        form: {
                            field1: "Tu nombre",
                            field2: "Tu correo",
                            field3: "Compañía que refieres",
                            field4: "Nombre del contacto en la compañía",
                            field5: "Teléfono o correo de tu contacto",
                            ctaButton: "ENVIAR REFERIDO"
                        },
                        terms: {
                            title: "*Términos y condiciones:",
                            term1: "Los participantes pueden referir tantas organizaciones como deseen.",
                            term2: "Solo las organizaciones nuevas son elegibles para el programa de referidos.",
                            term3: "Las organizaciones podrán optar por cualquiera de los servicios de pago de Torre para buscar y filtrar candidatos. Puede conocer más sobre nuestros servicios en ",
                            term4: "Los participantes pueden recibir un máximo de USD1.000 en recompensas de referidos válidos. Todos los referidos están sujetos a verificación."
                        }
                    }
                }
            }
        },
        581: function(e, r, o) {
            "use strict";
            r.a = {
                en: {
                    "Request a new feature": "Request a new feature",
                    "What do you want us to create?*": "What do you want us to create?*",
                    "Your e-mail address*": "Your e-mail address*",
                    Submit: "Submit",
                    "An error occurred while saving your request.": "An error occurred while saving your request.",
                    "Your request has been received.": "Your request has been received.",
                    "You haven't added a message yet.": "You haven't added a message yet.",
                    "You haven't added an email yet.": "You haven't added an email yet.",
                    "Loading...": "Loading...",
                    "request-feature": {
                        appBar: "Request a new feature"
                    }
                },
                es: {
                    "Request a new feature": "Solicitar una nueva funcionalidad",
                    "What do you want us to create?*": "¿Qué quieres que creemos?*",
                    "Your e-mail address*": "Tu correo electrónico*",
                    Submit: "Enviar",
                    "An error occurred while saving your request.": "Se produjo un error al guardar su solicitud.",
                    "Your request has been received.": "Su petición ha sido recibida.",
                    "You haven't added a message yet.": "Aún no has agregado un mensaje.",
                    "You haven't added an email yet.": "Aún no has agregado un correo electrónico.",
                    "Loading...": "Cargando...",
                    "request-feature": {
                        appBar: "Solicitar una nueva funcionalidad"
                    }
                }
            }
        },
        582: function(e, r, o) {
            "use strict";
            r.a = {
                en: {
                    "Request API access": "Request API access",
                    "What would you like to use the API for?*": "What would you like to use the API for?*",
                    "What's your email address?*": "What's your email address?*",
                    Submit: "Submit",
                    "An error occurred while saving your request.": "An error occurred while saving your request.",
                    "Your request has been received.": "Your request has been received.",
                    "You haven't added a message yet.": "You haven't added a message yet.",
                    "You haven't added an email yet.": "You haven't added an email yet.",
                    "Loading...": "Loading...",
                    "request-api": {
                        appBar: "Request API"
                    }
                },
                es: {
                    "Request API access": "Solicitar acceso a el API",
                    "What would you like to use the API for?*": "¿Para qué te gustaría usar el API?*",
                    "What's your email address?*": "¿Cuál es tu dirección de correo electrónico?*",
                    Submit: "Enviar",
                    "An error occurred while saving your request.": "Se produjo un error al guardar su solicitud.",
                    "Your request has been received.": "Su petición ha sido recibida.",
                    "You haven't added a message yet.": "Aún no has agregado un mensaje.",
                    "You haven't added an email yet.": "Aún no has agregado un correo electrónico.",
                    "Loading...": "Cargando...",
                    "request-api": {
                        appBar: "Solicitar acceso a el API"
                    }
                }
            }
        },
        583: function(e, r, o) {
            "use strict";
            r.a = {
                en: {
                    "Get $discount% discount on any of our paid talent solutions": "Get {discount}% discount on any of our paid talent solutions",
                    "OUTSOURCE YOUR RECRUITMENT": "OUTSOURCE YOUR RECRUITMENT",
                    "COMPARE OUR SERVICES": "COMPARE OUR SERVICES",
                    "GET YOUR DISCOUNT": "GET YOUR DISCOUNT",
                    "Let AI do the recruiting for you": "Let AI do the recruiting for you"
                },
                es: {
                    "Get $discount% discount on any of our paid talent solutions": "Obtén el {discount}% de descuento en cualquiera de nuestras soluciones de talento pagas",
                    "OUTSOURCE YOUR RECRUITMENT": "DELEGA TU RECLUTAMIENTO",
                    "COMPARE OUR SERVICES": "COMPARAR SERVICIOS",
                    "GET YOUR DISCOUNT": "OBTENER DESCUENTO",
                    "Let AI do the recruiting for you": "Deja que la inteligencia artificial reclute por ti"
                }
            }
        },
        586: function(e, r, o) {
            "use strict";
            r.a = {
                en: {
                    "Terms of Service and Privacy Policy": "Terms of Service and Privacy Policy",
                    "These are Torre’s terms of service, and cookie and privacy policies.": "These are Torre’s terms of service, and cookie and privacy policies.",
                    "A. Introduction to Torre’s Terms of Service": "A. Introduction to Torre’s Terms of Service",
                    "B. Terms of Service for All Users": "B. Terms of Service for All Users",
                    "C. Terms of Service for Candidates": "C. Terms of Service for Candidates",
                    "D. Terms of Service for Talent Seekers": "D. Terms of Service for Talent Seekers",
                    "E. Terms of Service for Paid Products": "E. Terms of Service for Paid Products",
                    "F. Torre’s Privacy Policy": "F. Torre’s Privacy Policy",
                    "G. Torre’s Cookie Policy": "G. Torre’s Cookie Policy"
                },
                es: {
                    "Terms of Service and Privacy Policy": "Términos de Servicio y Política de Privacidad",
                    "These are Torre’s terms of service, and cookie and privacy policies.": "Estos son los términos del servicio y políticas de privacidad y cookies de Torre.",
                    "A. Introduction to Torre’s Terms of Service": "A. Introducción a los Términos del Servicio de Torre ",
                    "B. Terms of Service for All Users": "B. Términos del Servicio para Todos los Usuarios",
                    "C. Terms of Service for Candidates": "C. Términos del Servicio para Candidatos",
                    "D. Terms of Service for Talent Seekers": "D. Términos del Servicio para Buscadores de Talentos",
                    "E. Terms of Service for Paid Products": "E. Términos del Servicio para Productos Pagos",
                    "F. Torre’s Privacy Policy": "F. Política de Privacidad de Torre",
                    "G. Torre’s Cookie Policy": "G. Política de Cookies de Torre"
                }
            }
        },
        591: function(e, r, o) {
            "use strict";
            o.d(r, "a", (function() {
                return c
            }));
            o(32), o(28);
            var t = o(2),
                n = o(329),
                c = t.default.extend({
                    methods: {
                        appBarTrackingMixin_trackToolClicked: function(e) {
                            var r, o = e.id,
                                t = e.name,
                                section = null !== (r = e.section) && void 0 !== r ? r : "main-menu";
                            n.a.trackStructured({
                                category: "AppBar",
                                action: "tool-clicked",
                                property: section,
                                label: "".concat(o, ": ").concat(t)
                            }, [])
                        }
                    }
                })
        },
        663: function(e, r, o) {
            "use strict";
            o.r(r);
            o(88), o(45), o(74), o(52), o(148);
            r.default = function(e) {
                var r, o, t = e.req,
                    n = e.route,
                    c = e.store,
                    d = ["en", "es"],
                    l = null == t ? void 0 : t.headers,
                    f = n ? n.fullPath : void 0,
                    m = "/en".length,
                    h = f.slice(1, m),
                    v = d.includes(h) ? h : void 0,
                    y = l ? l.cookie : void 0,
                    O = y && y.includes("torre.locale=es") ? "es" : void 0,
                    S = y && y.includes("torre.locale=en") ? "en" : void 0,
                    T = null != S ? S : O,
                    R = l ? l["accept-language"] : void 0,
                    C = R ? R.split("-").shift() : void 0,
                    E = C && d.includes(C) ? C : void 0,
                    w = null !== (r = null !== (o = null != v ? v : T) && void 0 !== o ? o : E) && void 0 !== r ? r : "undefined";
                c.commit("Browser/setLocale", w)
            }
        },
        664: function(e, r, o) {
            "use strict";
            o.r(r);
            o(45), o(74), o(28);
            var t = o(468);
            r.default = function(e, r, o) {
                if (!e.headers.cookie || !e.headers.cookie.includes("discovery.hal=")) {
                    var n = Object(t.v4)(),
                        c = "discovery.hal=".concat(n, "; Max-Age=").concat(22896e3, "; Path=/; HttpOnly");
                    r.setHeader("Set-Cookie", [c])
                }
                o()
            }
        },
        797: function(e, r, o) {
            e.exports = o(650)
        }
    }
]);