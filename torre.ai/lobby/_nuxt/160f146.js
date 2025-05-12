! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            o = (new Error).stack;
        o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f0bfd817-a94b-4ded-8daf-a56eb9c09984", e._sentryDebugIdIdentifier = "sentry-dbid-f0bfd817-a94b-4ded-8daf-a56eb9c09984")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
        248: function(e, o, t) {
            "use strict";
            t(47), t(40), t(31), t(60), t(37), t(68);
            var r = t(18),
                n = (t(32), t(15), t(102), t(88), t(45), t(184)),
                c = t(798),
                d = t(437),
                l = t(806),
                m = t(133),
                h = t(2),
                f = t(70),
                y = t(469),
                v = t(359),
                T = t(591),
                A = t(214),
                w = t(593),
                S = t(594),
                E = t(595),
                _ = t(189);

            function I(e, o) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    o && (r = r.filter((function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function R(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {};
                    o % 2 ? I(Object(t), !0).forEach((function(o) {
                        Object(r.a)(e, o, t[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach((function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o))
                    }))
                }
                return e
            }
            var k = h.default.extend({
                    name: "app-bar-wrapper",
                    components: {
                        LazyHydrate: y.a,
                        MdToolbar: n.a,
                        TdlAppBar: c.a,
                        TdlIframeDrawer: d.a,
                        TdlSearchBar: l.a
                    },
                    mixins: [T.a, v.a, m.a],
                    props: {
                        fixed: Boolean,
                        crossBarTitle: String,
                        hasCrossBarIndex: Boolean,
                        enableBodyClassModification: Boolean,
                        pageTitle: String,
                        theme: String,
                        highlightedIcons: {
                            type: Array,
                            required: !1
                        },
                        initialHeight: {
                            type: String,
                            default: "112"
                        },
                        hideBottomBar: {
                            type: Boolean,
                            default: !1
                        },
                        hideLocaleSelector: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            userReady: !1,
                            mdEffectiveTheme: "lime500",
                            urls: {
                                BIO_BASE_URL: "https://torre.ai",
                                DISCOVERY_BASE_URL: "https://torre.ai",
                                HOMEPAGES_BASE_URL: "https://torre.ai",
                                REMOTER_BASE_URL: "https.//remoter.com",
                                STARRGATE_BASE_URL: "https://accounts.torre.ai",
                                TORRE_ABOUT_BASE_URL: "https://about.torre.co",
                                TORRE_PROTOCOL_BASE_URL: "https://torre.io",
                                TORRE_APP_BASE_URL: this.$config.torreAppBaseUrl,
                                TORRE_BASE_URL: this.$config.torreBaseUrl
                            },
                            torreDefaultLocale: "en",
                            organizations: [],
                            phobosUrl: this.$config.phobosBaseUrl
                        }
                    },
                    computed: R(R({
                        isLogged: function() {
                            return this.$store.getters.isLogged
                        },
                        hasTabsSlot: function() {
                            return !!this.$slots.tabs
                        },
                        userHasCreatedOpportunities: function() {
                            return this.$store.getters["User/userHasCreatedOpportunities"]
                        }
                    }, Object(f.d)("User", ["user"])), Object(f.c)("FeatureFlag", ["featureFlagMeetings"])),
                    mounted: function() {
                        var e = this;
                        E.a.initFirebase(this.$config.firebaseDbUrl), this.updateLocale(), this.$root.$on("login-requested", this.signIn), this.$root.$on("logout-requested", this.signOut), this.$root.$on("tdl-app-bar--brand-logo-click", (function() {
                            window.location.href = "".concat((e.isLogged, "https://torre.ai"))
                        })), this.loadUserOrganizations(), this.$nextTick((function() {
                            e.$emit("appbarMounted");
                            var o = document.querySelector(".app-loader");
                            o && o.classList.add("load-completed")
                        })), this.$store.dispatch("User/fetchAndSetUserHasOpportunities")
                    },
                    methods: {
                        addAppBarClassToBody: function() {
                            this.enableBodyClassModification && document.body.classList.add("navigation-bar-open")
                        },
                        removeAppBarClassFromBody: function() {
                            this.enableBodyClassModification && document.body.classList.remove("navigation-bar-open")
                        },
                        signIn: function() {
                            var e, o = this.$router.resolve({
                                name: null === (e = this.$route.name) || void 0 === e ? void 0 : e.toString(),
                                params: this.$route.params,
                                query: this.$route.query
                            });
                            A.a.login(new w.a("redirect", [o.href]), "home:sign-in")
                        },
                        signOut: function() {
                            A.a.logout()
                        },
                        localeSelected: function(e) {
                            this.appMixin_saveUserLocale(e, this.user)
                        },
                        updateLocale: function() {
                            var e = this.$i18n.locale,
                                path = this.$route.fullPath,
                                o = "/en".length,
                                t = path.slice(0, o),
                                r = ["/es", "/en"].includes(t);
                            if (this.user && !r) e = this.user.locale;
                            else if (!r) {
                                var n = _.a.getItemLocalStorage("locale");
                                n && (e = n)
                            }
                            this.hideLocaleSelector || this.appMixin_saveUserLocale(e, this.user)
                        },
                        loadUserOrganizations: function() {
                            var e = this;
                            this.user && !this.userReady && (this.userReady = !0, S.a.getOrganizationsByUser().subscribe((function(data) {
                                e.organizations = data
                            })))
                        }
                    }
                }),
                C = t(101),
                component = Object(C.a)(k, (function() {
                    var e = this,
                        o = e.$createElement,
                        t = e._self._c || o;
                    return t("div", {
                        class: ["app-bar-wrapper", e.$mdActiveTheme]
                    }, [t("tdl-app-bar", {
                        attrs: {
                            "default-locale": e.torreDefaultLocale,
                            theme: e.theme,
                            "on-mounted": e.addAppBarClassToBody,
                            "on-destroyed": e.removeAppBarClassFromBody,
                            "page-title": e.pageTitle,
                            urls: e.urls,
                            user: e.user,
                            organizations: e.organizations,
                            "is-tablet-or-mobile": e.$device.isMobileOrTablet,
                            "firebase-url": e.$config.firebaseDbUrl,
                            "torre-base-url": e.$config.torreBaseUrl,
                            "iframe-url-host": e.phobosUrl,
                            "initial-height": e.initialHeight,
                            "enable-compass-options": "",
                            "enable-meetings": e.featureFlagMeetings,
                            "highlighted-icons": e.highlightedIcons,
                            "hide-bottom-bar": e.hideBottomBar,
                            "hide-locale-selector": e.hideLocaleSelector
                        },
                        on: {
                            "locale-selected": e.localeSelected,
                            "tool-clicked": e.appBarTrackingMixin_trackToolClicked
                        },
                        scopedSlots: e._u([{
                            key: "middleContent",
                            fn: function(o) {
                                var r = o.closeSearchBar,
                                    n = o.openSearchBar;
                                return [t("tdl-search-bar", {
                                    attrs: {
                                        username: e.user ? e.user.username : void 0,
                                        "is-user-hiring": e.userHasCreatedOpportunities
                                    },
                                    on: {
                                        closeSearchBar: r,
                                        openSearchBar: n
                                    }
                                })]
                            }
                        }, {
                            key: "extra",
                            fn: function() {
                                return [e.hasTabsSlot ? e._t("tabs", null, {
                                    mdTheme: e.mdEffectiveTheme
                                }) : e._e()]
                            },
                            proxy: !0
                        }], null, !0)
                    }, [e._v(" "), e.crossBarTitle ? t("md-toolbar", {
                        staticClass: "app-bar-wrapper__cross-bar cross-bar"
                    }, [t("h2", {
                        staticClass: "md-title cross-bar__title cross-bar__back-title"
                    }, [e._v("\n        " + e._s(e.crossBarTitle) + "\n      ")]), e._v(" "), e._t("toolbar-buttons", null, {
                        mdTheme: e.mdEffectiveTheme
                    })], 2) : e.hasCrossBarIndex ? t("md-toolbar", {
                        staticClass: "app-bar-wrapper__cross-bar cross-bar"
                    }, [e._t("toolbar-buttons", null, {
                        mdTheme: e.mdEffectiveTheme
                    })], 2) : e._e(), e._v(" "), e._t("default")], 2), e._v(" "), t("LazyHydrate", {
                        attrs: {
                            "when-idle": ""
                        }
                    }, [e.user ? t("tdl-iframe-drawer", {
                        attrs: {
                            "url-host": e.phobosUrl,
                            "torre-app-base-url": e.$config.torreAppBaseUrl,
                            "url-path": "/messenger",
                            "iframe-id": "phobos",
                            user: e.user
                        }
                    }) : e._e()], 1)], 1)
                }), [], !1, null, null, null);
            o.a = component.exports
        },
        542: function(e, o, t) {
            "use strict";
            t.d(o, "a", (function() {
                return c
            }));
            var r = t(13),
                n = t(21),
                c = function() {
                    function e(o) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        Object(r.a)(this, e), this.message = o, this.duration = t, this.action = n
                    }
                    return Object(n.a)(e, [{
                        key: "same",
                        value: function(e) {
                            return this.message === e.message && this.duration === e.duration && this.action === e.action
                        }
                    }]), e
                }()
        },
        543: function(e, o, t) {
            var content = t(702);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, t(178).default)("0a1d87d1", content, !0, {
                sourceMap: !1
            })
        },
        569: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    "You have not added a message.": "You have not added a message.",
                    "Your message should be 6 characters or longer.": "Your message should be 6 characters or longer.",
                    "You are missing the email address.": "You are missing the email address.",
                    "Please write a valid email address.": "Please write a valid email address.",
                    "Need help?": "Need help?",
                    "CONTACT SUPPORT": "CONTACT SUPPORT"
                },
                es: {
                    "You have not added a message.": "Aún no has agregado un mensaje.",
                    "Your message should be 6 characters or longer.": "Tú mensaje debería contener 6 caracteres o más.",
                    "You are missing the email address.": "Aún no has agregado un correo electrónico.",
                    "Please write a valid email address.": "Por favor agrega un correo electrónico válido",
                    "Need help?": "¿Necesitas ayuda?",
                    "CONTACT SUPPORT": "Contacta al equipo de soporte"
                }
            }
        },
        570: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    home_page_headline: "The new global job network",
                    homePagePostJobButton: "POST A JOB",
                    homePageFindJobsButton: "FIND JOBS",
                    home_page_subheadline: "For remote and local jobs, full-time and freelance.",
                    home_page_cta: "FOR CANDIDATES & FREELANCERS",
                    "Let us handle your recruitment": "Let us handle your recruitment",
                    "Outsource your recruitment operation to Torre, and we’ll go to the ends of the Earth to find you the candidates you need.": "Outsource your recruitment operation to Torre, and we’ll go to the ends of the Earth to find you the candidates you need.",
                    "Set a daily budget and let Torre distribute your job openings to hundreds of job boards and/or even attract passive candidates on your behalf (sourcing).": "Set a daily budget and let Torre distribute your job openings to hundreds of job boards and/or even attract passive candidates on your behalf (sourcing).",
                    "FOR PARTNERS": "FOR PARTNERS",
                    "Join a community that uses Torre to increase revenue and build solutions and services for customers.": "Join a community that uses Torre to increase revenue and build solutions and services for customers.",
                    "Hi. I’m Alexander Torrenegra, founder of Torre. We aren’t fundraising or soliciting at the moment. However, If you’d like to be notified of future investment opportunities, let us know filling the form below.": "Hi. I’m Alexander Torrenegra, founder of Torre. We aren’t fundraising or soliciting at the moment. However, If you’d like to be notified of future investment opportunities, let us know filling the form below.",
                    "for investors": "for investors",
                    "Thank you for your interest.": "Thank you for your interest.",
                    "PARTNER PROGRAM": "PARTNER PROGRAM",
                    "FOR INVESTORS": "FOR INVESTORS",
                    emmaReachHeadlline: "Let Emma attract top and passive candidates for you",
                    "TRY IT OUT": "TRY IT OUT",
                    "The first AI to fully automate recruiting end-to-end": "The first AI to fully automate recruiting end-to-end",
                    "Let Emma, Torre's AI recruiter, engage candidates for you": "Let Emma, Torre's AI recruiter, engage candidates for you",
                    emma_for_companies_description: "Emma will find, match, and attract candidates to job openings, help them complete their applications, check their references, keep them engaged for future job openings, ask for referrals, and much more.",
                    ats_description: "Automate your candidate pipeline, and even let Emma, our AI recruiter, manage your applicants automatically.",
                    "Candidate profiles with hundreds of data points": "Candidate profiles with hundreds of data points",
                    "From 1+billion candidates who aren’t actively looking for a job, Torre will identify those who’ll be your best match, reach out to them, and connect them with you.": "From 1+billion candidates who aren’t actively looking for a job, Torre will identify those who’ll be your best match, reach out to them, and connect them with you.",
                    "Ability to handle full-time, flexible, or internship roles": "Ability to handle full-time, flexible, or internship roles",
                    "Join a select group of recruiting and HRTech pros that use Torre to offer services and build solutions.": "Join a select group of recruiting and HRTech pros that use Torre to offer services and build solutions.",
                    Resell: "Resell",
                    "Staff and headhunt": "Staff and headhunt",
                    "Grow your staffing and headhunting practice, improve your speed, reduce costs, and beat your competitors.": "Grow your staffing and headhunting practice, improve your speed, reduce costs, and beat your competitors.",
                    "Chat with one of our specialized talent acquisition partners.": "Chat with one of our specialized talent acquisition partners.",
                    "Global reach. Local touch.": "Global reach. Local touch.",
                    "Delegate your recruitment to Emma": "Delegate your recruitment to Emma",
                    "Outsource your recruitment to Emma": "Outsource your recruitment to Emma",
                    "Outsource your recruitment to Torre to make it faster, more accurate, and reduce costs.": "Outsource your recruitment to Torre to make it faster, more accurate, and reduce costs.",
                    "Meet Emma, your AI recruiter": "Meet Emma, your AI recruiter",
                    os_page_headline: "Torre for the enterprise",
                    emmaReachDescription: "Set your daily budget, and Torre's AI recruiter will attract the best candidates from 100+ sources.",
                    emmaStorySectionTitle: "Meet the real Emma, the inspiration behind our name and icon",
                    emmaStorySectionCta: "READ EMMA’S STORY"
                },
                es: {
                    home_page_headline: "La nueva red global de trabajos",
                    homePagePostJobButton: "PUBLICA UNA VACANTE",
                    homePageFindJobsButton: "ENCUENTRA TRABAJOS",
                    home_page_subheadline: "Para trabajos remotos y locales, tiempo completo y freelance.",
                    home_page_cta: "PARA CANDIDATOS & FREELANCERS",
                    "Let us handle your recruitment": "Déjanos encargarnos de tu reclutamiento",
                    "Outsource your recruitment operation to Torre, and we’ll go to the ends of the Earth to find you the candidates you need.": "Delega tu operación de reclutamiento a Torre e iremos hasta el fin del mundo para encontrar los candidatos que necesitas.",
                    "Set a daily budget and let Torre distribute your job openings to hundreds of job boards and/or even attract passive candidates on your behalf (sourcing).": "Establece un presupuesto diario y deja que Torre distribuya tus publicaciones de trabajo a cientos de bolsas de trabajo y/o incluso atraiga candidatos pasivos en tu nombre (sourcing).",
                    "FOR PARTNERS": "PARA SOCIOS",
                    "Join a community that uses Torre to increase revenue and build solutions and services for customers.": "Únete a una comunidad que utiliza Torre para aumentar sus ingresos y crear soluciones y servicios para los clientes.",
                    "Hi. I’m Alexander Torrenegra, founder of Torre. We aren’t fundraising or soliciting at the moment. However, If you’d like to be notified of future investment opportunities, let us know filling the form below.": "Hi. I’m Alexander Torrenegra, founder of Torre. We aren’t fundraising or soliciting at the moment. However, If you’d like to be notified of future investment opportunities, let us know filling the form below.",
                    "for investors": "for investors",
                    "Thank you for your interest.": "Thank you for your interest.",
                    "PARTNER PROGRAM": "PARTNER PROGRAM",
                    "FOR INVESTORS": "PARA INVERSIONISTAS",
                    emmaReachHeadlline: "Deja que Emma atraiga a los mejores candidatos, incluyendo pasivos, para ti",
                    "TRY IT OUT": "PRUÉBALO",
                    "The first AI to fully automate recruiting end-to-end": "La primera IA en automatizar por completo el reclutamiento de principio a fin",
                    "Let Emma, Torre's AI recruiter, engage candidates for you": "Deja que Emma, la reclutadora con IA de Torre, interactúe con los candidatos por ti",
                    emma_for_companies_description: "Emma encontrará, atraerá y hará match a candidatos con vacantes de empleo, los ayudará a completar sus solicitudes, verificará sus referencias, los mantendrá interesados para futuras vacantes, les pedirá referencias y mucho más.",
                    ats_description: "Automatiza tu embudo de candidato, e inclusive deja que Emma, nuestra reclutadora con IA, gestione tus postulantes automaticamente.",
                    "Candidate profiles with hundreds of data points": "Perfiles de candidatos con cientos de puntos de información",
                    "From 1+billion candidates who aren’t actively looking for a job, Torre will identify those who’ll be your best match, reach out to them, and connect them with you.": "De más de 1+ billón de candidatos que no están buscando trabajo activamente, Torre identificará a aquellos que serán tu mejor opción, se pondrá en contacto con ellos y los conectará contigo.",
                    "Ability to handle full-time, flexible, or internship roles": "Habilidad para manejar puestos de tiempo completo, flexible o pasantías",
                    "Join a select group of recruiting and HRTech pros that use Torre to offer services and build solutions.": "Únete a un grupo selecto de profesionales de reclutamiento y HRTech que utilizan Torre para ofrecer servicios y construir soluciones.",
                    Resell: "Revende",
                    "Staff and headhunt": "Staff y headhunt",
                    "Grow your staffing and headhunting practice, improve your speed, reduce costs, and beat your competitors.": "Haz crecer tu práctica de reclutamiento y headhunting, mejora tu velocidad, reduce costos y supera a tus competidores.",
                    "Chat with one of our specialized talent acquisition partners.": "Habla con uno de nuestros socios especializados en adquisición de talento.",
                    "Global reach. Local touch.": "Alcance global. Toque local.",
                    "Delegate your recruitment to Emma": "Delégale tu reclutamiento a Emma",
                    "Outsource your recruitment to Emma": "Hazle outsourcing de tu reclutamiento a Emma",
                    "Outsource your recruitment to Torre to make it faster, more accurate, and reduce costs.": "Terceriza tu reclutamiento a Torre para hacerlo más rápido, preciso y reducir costos.",
                    "Meet Emma, your AI recruiter": "Conoce a Emma, tu reclutadora con IA",
                    os_page_headline: "Torre para grandes empresas",
                    emmaReachDescription: "Deja que Emma atraiga a los mejores candidatos, incluyendo pasivos, para ti",
                    emmaStorySectionTitle: "Conoce a la verdadera Emma, la inspiración detrás de nuestro nombre e ícono",
                    emmaStorySectionCta: "LEE LA HISTORIA DE EMMA"
                }
            }
        },
        571: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    "Powerful candidate database search": "Powerful candidate database search",
                    "Browse your candidate database using dozens of criteria.": "Browse your candidate database using dozens of criteria."
                },
                es: {
                    "Powerful candidate database search": "Potente búsqueda en bases de datos de candidatos",
                    "Browse your candidate database using dozens of criteria.": "Explora tu base de datos de candidatos utilizando docenas de criterios."
                }
            }
        },
        572: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    "Got questions? We can help you improve your recruitment.": "Got questions? We can help you improve your recruitment."
                },
                es: {
                    "Got questions? We can help you improve your recruitment.": "¿Tienes preguntas? Podemos darte ideas para mejorar tu reclutamiento."
                }
            }
        },
        573: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    "About us": "About us",
                    "Post a job": "Post a job",
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
                    Preferences: "Preferences",
                    "Your account": "Your account",
                    "Sign out": "Sign out",
                    "Your dashboard": "Your dashboard",
                    "Your torre account": "Your torre account",
                    More: "More",
                    "Sign in": "Sign in",
                    "Claim or create a team/company genome": "Claim or create a team/company genome",
                    "Your teams and companies:": "Your teams and companies:",
                    "Your professional genome:": "Your professional genome:",
                    "Jobs for you": "Jobs for you",
                    "Talent seekers": "Talent seekers",
                    Candidates: "Candidates",
                    Menu: "Menu",
                    "Your job openings": "Your job openings",
                    Meetings: "Meetings",
                    Reports: "Reports",
                    "Your applications": "Your applications",
                    "Cultural fit": "Cultural fit",
                    "Your career pages:": "Your career pages:",
                    "For everyone:": "For everyone:",
                    "For candidates:": "For candidates:",
                    "For companies:": "For companies:",
                    "For remote teams": "For remote teams",
                    "For BPOs": "For BPOs",
                    "For AI talent": "For AI talent",
                    "About Torre:": "About Torre:",
                    "Spanish (Español)": "Spanish (Español)",
                    "English (Inglés)": "English (Inglés)",
                    "uk flag": "uk flag",
                    "spain flag": "spain flag",
                    You: "You"
                },
                es: {
                    "About us": "Nosotros",
                    "Post a job": "Publica un trabajo",
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
                    "Your jobs": "Tus trabajos",
                    Preferences: "Preferencias",
                    "Your account": "Tu cuenta",
                    "Sign out": "Cerrar sesión",
                    "Your dashboard": "Tu tablero",
                    "Your torre account": "Tu cuenta de Torre",
                    More: "Más",
                    "Sign in": "Acceder",
                    "Claim or create a team/company genome": "Reclama o crea un genoma de equipo/compañía",
                    "Your teams and companies:": "Tus equipos y compañías:",
                    "Your professional genome:": "Tu genoma profesional:",
                    "Jobs for you": "Trabajos",
                    "Talent seekers": "Empleadores",
                    Candidates: "Candidatos",
                    Menu: "Menú",
                    "Your job openings": "Tus vacantes",
                    Meetings: "Reuniones",
                    Reports: "Reportes",
                    "Your applications": "Tus aplicaciones",
                    "Cultural fit": "Match cultural",
                    "Your career pages:": "Páginas profesionales:",
                    "For everyone:": "Para todos:",
                    "For candidates:": "Para candidatos:",
                    "For companies:": "Para empresas:",
                    "For remote teams": "Para equipos remotos",
                    "For BPOs": "Para BPOs",
                    "For AI talent": "Para talento IA",
                    "About Torre:": "Sobre Torre:",
                    "Spanish (Español)": "Español (Spanish)",
                    "English (Inglés)": "Inglés (English)",
                    "uk flag": "bandera reino unido",
                    "spain flag": "bandera españa",
                    You: "Tú"
                }
            }
        },
        574: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    "What language do you want to use Torre in?": "What language do you want to use Torre in?",
                    "English (en)": "English (en)",
                    "Spanish (es)": "Español (es)",
                    Save: "Save",
                    Language: "Language",
                    Cancel: "Cancel"
                },
                es: {
                    "What language do you want to use Torre in?": "¿En qué idioma quieres usar Torre?",
                    "English (en)": "English (en)",
                    "Spanish (es)": "Español (es)",
                    Save: "Guardar",
                    Language: "Idioma",
                    Cancel: "Cancelar"
                }
            }
        },
        575: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    "About us": "About us",
                    "Post a job": "Post a job",
                    "Terms of use": "Terms of use",
                    "Privacy policy": "Privacy policy",
                    Search: "Search",
                    "Jobs/gigs": "Jobs/gigs",
                    "Your jobs (posted or applied)": "Your jobs (posted or applied)",
                    "Alerts (preferences)": "Alerts (preferences)",
                    Signals: "Signals",
                    Messages: "Messages",
                    "Torre's product roadmap": "Torre's product roadmap",
                    "Request features": "Request features",
                    "API for developers": "API for developers",
                    Help: "Help",
                    "Your genome": "Your genome",
                    $locale: "English (en)"
                },
                es: {
                    "About us": "Nosotros",
                    "Post a job": "Publica un trabajo",
                    "Terms of use": "Términos de uso",
                    "Privacy policy": "Política de privacidad",
                    Search: "Buscar",
                    "Jobs/gigs": "Trabajos",
                    "Your jobs (posted or applied)": "Tus trabajos",
                    "Alerts (preferences)": "Alertas (preferencias)",
                    Signals: "Signals",
                    Messages: "Mensajes",
                    "Torre's product roadmap": "El mapa de producto de Torre",
                    "Request features": "Solicita nuevas características",
                    "API for developers": "API para desarrolladores",
                    Help: "Ayuda",
                    "Your genome": "Tu genoma",
                    $locale: "Español (es)"
                }
            }
        },
        580: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    genomes: "genomes",
                    jobs: "jobs",
                    countries: "countries"
                },
                es: {
                    genomes: "genomas",
                    jobs: "trabajos",
                    countries: "países"
                }
            }
        },
        584: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    "Unlimited job openings, searches, and messages": "Unlimited job openings, searches, and messages",
                    "30-day money-back guarantee": "30-day money-back guarantee",
                    "Find, screen, and process millions of candidates in one place.": "Find, screen, and process millions of candidates in one place.",
                    "charged annually": "charged annually",
                    NO: "NO",
                    "extra fees": "extra fees",
                    "Have Torre be your scalable recruiting department.": "Have Torre be your scalable recruiting department.",
                    "Starting at": "Starting at",
                    '<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{minFee}</span>%-<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{maxFee}</span>% <span style="color:rgba(255, 255, 255, 0.90);">success fee</span>': '<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{minFee}</span>%-<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{maxFee}</span>% <span style="color:rgba(255, 255, 255, 0.90);">success fee</span>',
                    '<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{fee}</span>% <span style="color:rgba(255, 255, 255, 0.90);">success fee</span>': '<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{fee}</span>% <span style="color:rgba(255, 255, 255, 0.90);">success fee</span>',
                    "Customizable solutions for large organizations.": "Customizable solutions for large organizations.",
                    "Payment details": "Payment details",
                    Subtotal: "Subtotal",
                    months: "months",
                    "Torre discount": "Torre discount",
                    OFF: "OFF",
                    "Billed now": "Billed now",
                    Checkout: "Checkout",
                    "You will be charged USD{price} immediately.": "You will be charged USD{price} immediately.",
                    "You will be charged USD{price} every month thereafter while the membership is active.": "You will be charged USD{price} every month thereafter while the membership is active.",
                    "You will be charged USD{price} every {frecuency} thereafter while the membership is active.": "You will be charged USD{price} every {frecuency} thereafter while the membership is active.",
                    "Cancel any time.": "Cancel any time.",
                    month: "month",
                    "/month": "/month",
                    "Schedule a demo": "Schedule a demo",
                    "Talk to a torre genius": "Talk to a torre genius",
                    "Payment confirmed": "Payment confirmed",
                    "Get started by scheduling your free onboarding with a Torre Genius.": "Get started by scheduling your free onboarding with a Torre Genius.",
                    "SCHEDULE ONBOARDING": "SCHEDULE ONBOARDING",
                    "SEARCH CANDIDATES": "SEARCH CANDIDATES",
                    "Torre Essentials plus: sponsored job openings, one-click sourcing, and advanced tools.": "Torre Essentials plus: sponsored job openings, one-click sourcing, and advanced tools.",
                    "POST A JOB": "POST A JOB",
                    SKIP: "SKIP",
                    "Get the candidates you need for as low as": "Get the candidates you need for as low as",
                    "Billed yearly. 30-day money-back guarantee.": "Billed yearly. 30-day money-back guarantee.",
                    "Instant access to millions of candidates": "Instant access to millions of candidates",
                    "Get the best-matching candidates for your jobs": "Get the best-matching candidates for your jobs",
                    "Unlimited job openings, candidate searches, and messages": "Unlimited job openings, candidate searches, and messages",
                    "2,000,000": "2,000,000",
                    "300,000": "300,000",
                    "Job alerts sent to candidates each month": "Job alerts sent to candidates each month",
                    "Applicants to jobs each month": "Applicants to jobs each month",
                    "GET TORRE ESSENTIALS": "GET TORRE ESSENTIALS",
                    "Launch discount": "Launch discount",
                    "Have questions? Talk to a Torre Genius right now.": "Have questions? Talk to a Torre Genius right now.",
                    "TALK TO A TORRE GENIUS": "TALK TO A TORRE GENIUS",
                    "per month": "per month",
                    "Used and backed by early investors and executives of": "Used and backed by early investors and executives of"
                },
                es: {
                    "Unlimited job openings, searches, and messages": "Vacantes, búsquedas y mensajes ilimitados",
                    "30-day money-back guarantee": "Garantía de devolución del dinero en 30 días",
                    "Find, screen, and process millions of candidates in one place.": "Encuentra, selecciona y procesa millones de candidatos en un solo lugar.",
                    "charged annually": "cobrados anualmente",
                    NO: "SIN",
                    "extra fees": "pagos extra",
                    "Have Torre be your scalable recruiting department.": "Torre será tu oficina de reclutamiento escalable.",
                    "Starting at": "Desde",
                    '<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{minFee}</span>%-<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{maxFee}</span>% <span style="color:rgba(255, 255, 255, 0.90);">success fee</span>': '<span style="color:rgba(255, 255, 255, 0.90);">tarifa por éxito entre</span> <span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{minFee}</span>%-<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{maxFee}</span>%',
                    '<span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{fee}</span>% <span style="color:rgba(255, 255, 255, 0.90);">success fee</span>': '<span style="color:rgba(255, 255, 255, 0.90);">tarifa por éxito del</span> <span style="color:rgba(255, 255, 255, 0.90);font-size:16px;">{fee}</span>%',
                    "Customizable solutions for large organizations.": "Soluciones adaptables para organizaciones grandes.",
                    "Payment details": "Detalles del pago",
                    Subtotal: "Subtotal",
                    months: "meses",
                    "Torre discount": "Descuento de Torre",
                    OFF: "MENOS",
                    "Billed now": "Facturado ahora",
                    Checkout: "Ir al pago",
                    "You will be charged USD{price} immediately.": "Se te cobrarán USD{price} ahora mismo.",
                    "You will be charged USD{price} every month thereafter while the membership is active.": "Se te cobrarán USD{price} cada mes desde el momento en que se active tu membresía.",
                    "You will be charged USD{price} every {frecuency} thereafter while the membership is active.": "Se te cobrarán USD{price} cada {frecuency} desde el momento en que se active tu membresía.",
                    "Cancel any time.": "Cancela en cualquier momento.",
                    month: "mes",
                    "/month": "/mes",
                    "Schedule a demo": "Agenda una demo",
                    "Talk to a torre genius": "Habla con un Torre genius",
                    "Payment confirmed": "Pago confirmado",
                    "Get started by scheduling your free onboarding with a Torre Genius.": "Inicia reservando tu introducción gratuita con un Torre Genius.",
                    "SCHEDULE ONBOARDING": "RESERVA LA INTRODUCCIÓN",
                    "SEARCH CANDIDATES": "BUSCAR CANDIDATOS",
                    "Torre Essentials plus: sponsored job openings, one-click sourcing, and advanced tools.": "Torre Essentials más: publicaciones de trabajo patrocinadas, candidatos a un click y herramientas avanzadas.",
                    "POST A JOB": "PUBLICAR UN TRABAJO",
                    SKIP: "OMITIR",
                    "Get the candidates you need for as low as": "Consigue a los candidatos que necesitas por tan solo",
                    "Billed yearly. 30-day money-back guarantee.": "Facturados anualmente. Garantía de devolución del dinero en 30 días.",
                    "Instant access to millions of candidates": "Acceso inmediato a millones de candidatos",
                    "Get the best-matching candidates for your jobs": "Consigue a los candidatos que sean mejores matches con tus trabajos",
                    "Unlimited job openings, candidate searches, and messages": "Sin límite de vacantes, búsquedas de candidatos y mensajes.",
                    "2,000,000": "2'000.000",
                    "300,000": "300.000",
                    "Job alerts sent to candidates each month": "de alertas de trabajo enviadas a candidatos cada mes",
                    "Applicants to jobs each month": "aplicantes a trabajos cada mes",
                    "GET TORRE ESSENTIALS": "OBTENER TORRE ESSENTIALS",
                    "Launch discount": "Descuento de lanzamiento",
                    "Have questions? Talk to a Torre Genius right now.": "¿Tienes preguntas? Habla con un Torre Genius ahora mismo.",
                    "TALK TO A TORRE GENIUS": "HABLA CON UN TORRE GENIUS",
                    "per month": "al mes",
                    "Used and backed by early investors and executives of": "Usado y respaldado por los primeros inversores y ejecutivos de"
                }
            }
        },
        585: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    chatWithEmmaUrl: "https://api.whatsapp.com/send?phone=16314370386&text=Hi%20Emma%2C%20I%20want%20you%20to%20help%20me%20find%20candidates",
                    osDemoTitle: "Watch the Torre OS demo",
                    "Search people and organizations by name, username, or email": "Search people and organizations by name, username, or email",
                    "Search people or organizations by name:": "Search people or organizations by name:",
                    "Search people by name:": "Search people by name:",
                    "Search people by skill:": "Search people by skill:",
                    "Search jobs": "Search jobs",
                    "The '{fieldName}' field is required": "The '{fieldName}' field is required",
                    "Rank higher. Pay $0 until hired.": "Rank higher. Pay $0 until hired.",
                    Boost: "Boost",
                    "Open to qualified candidates.": "Open to qualified candidates.",
                    video: "video",
                    testimonials: {
                        video1: {
                            description: "“Torre makes the process much easier and transparent, saving us time, operational costs and delivering more qualified prospects.”",
                            person: {
                                name: "Fabiola Sandoval",
                                genome: "/fabiolasandovalmejia",
                                title: "Marketing",
                                company: "Lyndoors 🇲🇽",
                                companyGenome: "/teams/LYNDOORS"
                            }
                        },
                        video2: {
                            description: "“Torre's technology is amazing, but the most incredible thing is having people on their team available all the time to help and unblock you. That’s what I highlight the most.”",
                            person: {
                                name: "Michael Ellis",
                                genome: "/mellis",
                                title: "VP, Content Licensing",
                                company: "Newstex",
                                companyGenome: "/teams/Newstex"
                            }
                        },
                        video3: {
                            description: "“It allows us to set aside the operational aspects and focus on a more in-depth review, resulting in more accurate and secure hires.”",
                            person: {
                                name: "Valentina López",
                                genome: "/dianavalentinalopezsoler",
                                title: "Human Resources Leader",
                                company: "Constructora Experta 🇨🇴",
                                companyGenome: "/teams/ConstructoraExpertaSAS"
                            }
                        },
                        video4: {
                            description: "“Thanks to Torre's cultural fit, I don't make bad hires anymore. I always find candidates who match my company's professional ethics.”",
                            person: {
                                name: "Nelly Pinto",
                                genome: "/nellymayreth",
                                title: "Hiring Manager",
                                company: "Triangulum 🇨🇴",
                                companyGenome: "/teams/TRIANGULUMBPOSAS"
                            }
                        },
                        video5: {
                            description: "“It's the perfect hybrid between a traditional headhunter and job boards: great profiles with precise, personalized filtering thanks to artificial intelligence.”",
                            person: {
                                name: "Santiago Verenkow",
                                genome: "/santiagovarenkow?r=XGcjyBMB",
                                title: "CEO",
                                company: "Boxisleep 🇨🇴",
                                companyGenome: "/teams/Boxisleep1"
                            }
                        }
                    },
                    Companies: "Companies",
                    Testimonials: "Testimonials",
                    testimonials_page_headline: "What Our Users Are Saying: Success Made Simple",
                    aboutUsTitle: "About us",
                    "CHAT WITH US": "CHAT WITH US",
                    ourTeamCta: "OUR TEAM",
                    jobsAtTorre: "JOBS AT TORRE",
                    aboutUsHeadline: "We're the first company to fully automate recruiting end-to-end.",
                    aboutUsDescription: "We're the Waymo for recruiting. Our AI recruiter, Emma, helps both companies and candidates. She does everything a top recruiter does but doesn't discriminate. She even predicts if a candidate is a good match not just for a given job but also for a company and team.",
                    noDiscriminationSectionTitle: "Discover how Torre’s technology promotes fairness and equity by removing bias from recruitment.",
                    noDiscriminationSectionCta: "LEARN HOW WE COMBAT BIAS",
                    noDiscriminationSectionImageUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/tty0bv6vkzflqp0ba9r4",
                    source: "[source]",
                    any_sufficiently_advanced_technology: "Any sufficiently advanced technology is equivalent to magic.",
                    ai_recruitment_intro: "Will AI replace traditional recruiting? Some fear it might and insist it shouldn't. AI lacks accuracy, they say - and it lacks the human touch. At Torre, it lacks neither. Here's why:",
                    "More accurate recruitment": "More accurate recruitment",
                    ai_recruitment_title: "How AI makes recruitment more human and stops discrimination",
                    less_apathy_headline: "Less apathy, more feedback",
                    less_aphaty_subtitle: "AI, on the other hand, can deliver feedback to all candidates 100% of the time.",
                    less_apathy_stats_part_one: "76% of candidates claim no response from an employer after applying for a job is more frustrating than no reply after a first date",
                    less_apathy_stats_part_two: ". Yet, 82% of job applications get no response ",
                    less_apathy_stats_part_three: ", and when they do, it’s generic and non-actionable. There’s a simple explanation: recruiters are frequently overworked. They don’t have the time for individual responses. They can’t offer the personal touch so, in a sense, that’s inhumane too. What’s more, it’ll likely get worse. When candidates start using the AI available to them today and apply to numerous jobs automatically, they may encounter little more than a void.",
                    less_apathy_description_part_one: "Torre provides feedback to every candidate at every stage of the recruitment process. Even before they apply, Torre helps candidates determine if a job suits their preferences. If they decide to apply, Torre proactively helps them identify how well they match. Torre also tells them how they rank when compared to other candidates, why they rank the way they do, and what they can do to improve their ranking. Torre’s feedback is uniquely personalized to each candidate.",
                    less_discrimination_headline: "Less discrimination, more equity",
                    less_discrimination_subtitle: "Properly designed AI and automation are completely unbiased.",
                    less_discrimination_stats_part_one: "In the US, names on résumés that suggest White Caucasian get 50% more interview callbacks than others. Female applicants are 30% less likely to receive a call-back than males. In fact, 48% of HR managers admit bias ",
                    less_discrimination_stats_part_two: ". Sadly, humans are prone to subconscious bias ",
                    less_discrimination_stats_part_three: ". Such bias is not the type of human touch we want to keep in recruiting.",
                    less_discrimination_part_four: "In the 1990s, several orchestras started implementing blind auditions. As a result, the number of women in orchestras has significantly increased. Interestingly, it’s been shown that blind hiring increases the likelihood of women being hired by 25-46% ",
                    less_discrimination_description_part_one: "At Torre during pre-screening, all candidates are on equal footing. Name, gender, race, and age are ignored. Fairness rules. But it doesn’t end there. Culture fit is automatically assessed using a scientific methodology that takes both the company’s professional traits as well as each candidate’s into account. The assessments are shared with all parties before the first interview, so there’s more objectivity and less discrimination.",
                    less_guesswork_headline: "Less guesswork, more objectivity",
                    less_guesswork_subtitle: "At Torre, we capture thousands of data points across 112 factors and feed them into 9 types of AI to identify, screen, and rank the best candidates for every job as well as the best job for every candidate. We predict the likelihood of each candidate succeeding at that job, in that company, and in that team. There’s a prediction score: 0 to 100%. We also predict whether that job, team, and company are the right match for a candidate, their aspirations, and career growth. Torre is working towards creating reliable predictive scores so companies can make job offers instantly, with just a click.",
                    less_guesswork_stats_part_one: "When matching candidates, jobs, and teams, 100s of factors and 1000s of data points need consideration. Factors include experience, hard skills, soft skills, skills the candidate wants to develop, the skills they don’t want to develop, behavioral psychometrics, culture fit, credentials, contact network, social networks, recommendations, verifications, learning speed, learning capabilities, and so on. Yet, we humans can only handle four to seven at a time ",
                    less_guesswork_stats_part_two: ". That’s why recruiters must rely on intuition. But intuition tends to make recruiting subjective, non-scalable, and discriminatory.",
                    less_guesswork_description_part_one: "Torre’s AI is also different. It’s an open book as opposed to some dark, sinister alchemy. Users can actually review how each factor was calculated and understand in detail how the AI made its recommendation.",
                    the_future: "The future",
                    the_future_subtitle: "Imagine a world where every person has a personal recruiter and coach who proactively helps them find the perfect job for every stage of their careers. One who always helps them grow and realize their potential. For free. At Torre, we believe such a future is possible thanks to artificial intelligence.",
                    the_future_stats_part_one: "AI and automation make recruiting more accurate - and more human - by providing more feedback, equity, and objectivity. Recruitment is faster and less expensive.",
                    the_future_description_part_one: "Talent constantly goes to waste because it's not being exposed to (or considered for) the right job opportunities. At Torre, we're committed to using technology to change that - not only for the sake of being human, but humane. We want to help every person realize their full potential, and make work fulfilling for all.",
                    the_future_description_part_two: "Now that’s magic!",
                    mainVideoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/q_auto/origin/home/videos/Torre_Demo_ENG_V15.mp4",
                    videoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/q_auto/origin/home/videos/Torre_Demo_ENG_V15.mp4",
                    videoCover: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1649775329/origin/home/op-images/kedgayzmex3hrqhneocf.svg",
                    "Search jobs - infinitive": "Search jobs",
                    "Fair Artificial Intelligence in Recruiting (FAIR) Manifesto": "Fair Artificial Intelligence in Recruiting (FAIR) Manifesto",
                    "FAIR:": "FAIR:",
                    "Fair Artificial Intelligence in Recruiting Manifesto": "Fair Artificial Intelligence in Recruiting Manifesto",
                    "Welcome to the future of recruitment": "Welcome to the future of recruitment",
                    "Welcome to the future of job hunting": "Welcome to the future of job hunting",
                    "Full-time, flexible, freelance, or internship roles": "Full-time, flexible, freelance, or internship roles",
                    "Automate candidate acquisition, filtering, ranking, interviewing, and engagement.": "Automate candidate acquisition, filtering, ranking, interviewing, and engagement.",
                    "Delegate to AI your candidate acquisition, screening, filtering, ranking, scheduling, and re-engagement.": "Delegate to AI your candidate acquisition, screening, filtering, ranking, scheduling, and re-engagement.",
                    "Millions of jobs. Remote-first, hybrid, and local.": "Millions of jobs. Remote-first, hybrid, and local.",
                    "Language testing": "Language testing",
                    LatamMainImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.7,c_scale/v1/origin/home-pages/main-graphics/latam2",
                    "Let AI do the recruitment for you": "Let AI do the recruitment for you",
                    for_companies_subheadline: "Candidate & freelancer attraction, engagement, screening, filtering, ranking, scheduling, and much more.",
                    "Let AI recruit your global team": "Let AI recruit your global team",
                    "Let AI do the recruitment for your BPO": "Let AI do the recruitment for your BPO",
                    "Let Emma do the recruitment for you": "Let Emma do the recruitment for you",
                    "High-volume recruiting": "High-volume recruiting",
                    "Let AI do the job hunting for you": "Let AI do the job hunting for you",
                    in_short_text: "Recruiters and flexible-work platforms are adapting artificial intelligence to rank candidates and assign work. Unchecked, artificial intelligence will systematically discriminate, omit, and erase billions of people. To avoid it, companies and their technology providers should: 1) disclose when using AI, 2) make the factors transparent, 3) disclose rankings to candidates, 4) detect bias, and 5) reduce discrimination systematically.",
                    "Interview scheduling": "Interview scheduling",
                    "Job distribution": "Job distribution",
                    "Meet Emma - your self-driving AI recruiter": "Meet Emma - your self-driving AI recruiter",
                    referral_programs_title: "Attract candidates through gamified referrals",
                    "Tomorrow’s résumé today": "Tomorrow’s résumé today",
                    "Team genome": "Team genome",
                    "Let jobs find you": "Let jobs find you",
                    "FAIR: the Fair Artificial Intelligence in Recruiting Manifesto": "FAIR: the Fair Artificial Intelligence in Recruiting Manifesto",
                    "Candidates databases": "Candidates databases",
                    "Candidate reactivation": "Candidate reactivation",
                    "Candidate Referral Programs": "Candidate Referral Programs",
                    "Career Sites": "Career Sites",
                    "Clear messaging": "Clear messaging",
                    "Find out what others are asking. Millions of data points.": "Find out what others are asking. Millions of data points.",
                    "Find the perfect job": "Find the perfect job",
                    "Free ATS": "Free ATS",
                    Headhunting: "Headhunting",
                    "Welcome to the era of programmatic headhunting. AI-enabled. 3x faster. And spot on.": "Welcome to the era of programmatic headhunting. AI-enabled. 3x faster. And spot on.",
                    "Welcome to the future of executive search.": "Welcome to the future of executive search.",
                    "Vetted candidates. Millions of them.": "Vetted candidates. Millions of them.",
                    "Simple salary  calculator": "Simple salary calculator",
                    "Salary calculator": "Salary calculator",
                    "Skill Graph": "Skill Graph",
                    Sourcing: "Sourcing",
                    "Let AI surface the top candidates for you": "Let AI surface the top candidates for you",
                    "Never miss an important message with Torre Messenger": "Never miss an important message with Torre Messenger",
                    Psychometrics: "Psychometrics",
                    "Quick language proficiency testing": "Quick language proficiency testing",
                    "Find out what others think of you": "Find out what others think of you",
                    "Find out who got the job if you didn’t": "Find out who got the job if you didn’t",
                    "Next-gen psychometrics": "Next-gen psychometrics",
                    "Two-way cultural fit": "Two-way cultural fit",
                    "Gamified referrals": "Gamified referrals",
                    "Welcome to the era of programmatic recruiting outsourcing. AI-enabled. 3x faster. And spot on.": "Welcome to the era of programmatic recruiting outsourcing. AI-enabled. 3x faster. And spot on.",
                    "Welcome to the era of programmatic recruiting. AI-enabled. 3x faster. And spot on.": "Welcome to the era of programmatic recruiting. AI-enabled. 3x faster. And spot on.",
                    ats_headline: "The most advanced applicant tracking system",
                    integrationDetailsHeadline: "Seamless integration with your existing ATS or HR software",
                    "Candidate rankings": "Candidate rankings",
                    "Transparent algorithms": "Transparent algorithms",
                    "Two-way culture fit": "Two-way culture fit",
                    "65,000 skills. 1,000,000+ relationships.": "65,000 skills. 1,000,000+ relationships.",
                    "Let our self-driving recruiter find and attract top candidates for you": "Let our self-driving recruiter find and attract top candidates for you",
                    "From 1+billion candidates who aren’t actively looking for a job, Emma will identify those who'll be your best match, reach out to them, and connect them with you.": "From 1+billion candidates who aren’t actively looking for a job, Emma will identify those who'll be your best match, reach out to them, and connect them with you.",
                    "Emma will identify matching candidates in your dabatase, in job boards, and candidates who aren’t actively looking for a job, reach out to them, and connect them with you.": "Emma will identify matching candidates in your dabatase, in job boards, and candidates who aren’t actively looking for a job, reach out to them, and connect them with you.",
                    "15+ channels to attract candidates": "15+ channels to attract candidates",
                    "The future of team profiles": "The future of team profiles",
                    "Career sites": "Career sites",
                    "Career pages": "Career pages",
                    "Auto-scheduling of interviews and offers": "Auto-scheduling of interviews and offers",
                    "Auto-interviews": "Auto-interviews",
                    "Auto-build your candidate database": "Auto-build your candidate database",
                    "Let AI re-engage your candidate database": "Let AI re-engage your candidate database",
                    "Fix your leaking bucket. Build your candidate databases intelligently. And better yet, automatically.": "Fix your leaking bucket. Build your candidate databases intelligently. And better yet, automatically.",
                    "solutions for companies": "Solutions for companies",
                    "Torre for Remote Teams": "Torre for Remote Teams",
                    "for remote teams": "for remote teams",
                    "Torre for BPOs": "Torre for BPOs",
                    "for BPOs": "for BPOs",
                    "Torre for AI Talent": "Torre for AI Talent",
                    "for AI Talent": "for AI Talent",
                    "Hire top global AI talent": "Hire top global AI talent",
                    "tools for candidates": "tools for candidates",
                    "Candidate acquisition analytics": "Candidate acquisition analytics",
                    "Ongoing job posts": "Ongoing job posts",
                    "Candidate sampling": "Candidate sampling",
                    "Top-notch candidate experience": "Top-notch candidate experience",
                    "Full-time, flexible, or internship roles": "Full-time, flexible, or internship roles",
                    "Import your existing candidate database": "Import your existing candidate database",
                    "Filter candidates automatically": "Filter candidates automatically",
                    "Discover hidden gems in your database": "Discover hidden gems in your database",
                    "Make an engaging visual impression": "Make an engaging visual impression",
                    "Discover candidates close to your team": "Discover candidates close to your team",
                    "1+ billion candidates": "1+ billion candidates",
                    "Proficiency trumps years of experience": "Proficiency trumps years of experience",
                    "Highly customizable criteria": "Highly customizable criteria",
                    "Let us handle your recruitment and we’ll go to the ends of the Earth to find you the candidates you need": "Let us handle your recruitment and we’ll go to the ends of the Earth to find you the candidates you need",
                    "Hire top Latin American talent faster": "Hire top Latin American talent faster",
                    "Interview your first qualified candidates in less than 72 hours.": "Interview your first qualified candidates in less than 72 hours.",
                    "Improve your recruitment with satisfaction surveys": "Improve your recruitment with satisfaction surveys",
                    "Detailed candidate reports": "Detailed candidate reports",
                    "Pre-interview candidates with video screening questions": "Pre-interview candidates with video screening questions",
                    "Compensation expectations per candidate": "Compensation expectations per candidate",
                    "Automated messages": "Automated messages",
                    "Reference checks via recruiter bots": "Reference checks via recruiter bots",
                    "Keep candidates informed with one-click feedback": "Keep candidates informed with one-click feedback",
                    "Perform automatic candidate screening": "Perform automatic candidate screening",
                    "Stop discrimination": "Stop discrimination",
                    "Send screening question to previous applicants": "Send screening question to previous applicants",
                    "Candidate-to-team matching": "Candidate-to-team matching",
                    "Customize your pipeline": "Customize your pipeline",
                    "Centralize communication and collaborate with your team": "Centralize communication and collaborate with your team",
                    "Most of what Torre offers. For free!": "Most of what Torre offers. For free!",
                    "All of Torre. One simple price.": "All of Torre. One simple price.",
                    "Custom solution and pricing": "Custom solution and pricing",
                    "9 types of AI that match candidates with 112 factors": "9 types of AI that match candidates with 112 factors",
                    "Powerful feedback loops": "Powerful feedback loops",
                    "The first Recruitment Operating System (ROS)": "The first Recruitment Operating System (ROS)",
                    "Recruiting on-demand": "Recruiting on-demand",
                    "Applications via QR-code": "Applications via QR-code",
                    "Let Torre automatically follow up on your behalf": "Let Torre automatically follow up on your behalf",
                    "Whenever you message a candidate, Torre follows up on your behalf via email, WhatsApp, and SMS. And the same happens when Torre's AI recruiter messages the candidate.": "Whenever you message a candidate, Torre follows up on your behalf via email, WhatsApp, and SMS. And the same happens when Torre's AI recruiter messages the candidate.",
                    "Dedicated talent advisor": "Dedicated talent advisor",
                    torre_job_distribution_description: "Don’t leave a channel unexplored. Emma identifies and activates dozens of acquisition channels for you automatically: referrals, job alerts, recruiter bot notifications, push notifications, email, WhatsApp, text messages, job boards, LinkedIn, TikTok, Facebook, X, sourcing, and more!",
                    "Other solutions are not designed to capture the data you actually need to make recruiting decisions. Switch to Torre ATS, and manage hundreds of structured data points you can’t find elsewhere.": "Other solutions are not designed to capture the data you actually need to make recruiting decisions. Switch to Torre ATS, and manage hundreds of structured data points you can’t find elsewhere.",
                    "Torre analyzes 40+ professional behavioral traits scientifically and automatically.": "Torre analyzes 40+ professional behavioral traits scientifically and automatically.",
                    "Let her find the perfect candidates for you.": "Let her find the perfect candidates for you.",
                    "Let her find the perfect job for you": "Let her find the perfect job for you",
                    "Automate or outsource candidate acquisition, screening, filtering, ranking, interviewing, and re-engagement.": "Automate or outsource candidate acquisition, screening, filtering, ranking, interviewing, and re-engagement.",
                    jobMarketPlaceDescription: "Get qualified candidates for remote, local, or hybrid roles - full-time, flexible, or internships. For free!",
                    "AI-powered. Now we’re talking!": "AI-powered. Now we’re talking!",
                    "Let AI do the job filtering for you using hundreds of matching factors.": "Let AI do the job filtering for you using hundreds of matching factors.",
                    "Messages and job notifications in real-time.": "Messages and job notifications in real-time.",
                    "Automate candidate acquisition, screening, filtering, ranking, interviewing, and re-engagement with Torre’s Recruitment Operating System.": "Automate candidate acquisition, screening, filtering, ranking, interviewing, and re-engagement with Torre’s Recruitment Operating System.",
                    os_page_description: "The most advanced AI to increase and manage your candidate pipeline",
                    "No repetitive application processes. Create a professional genome that showcases your experience, skills, interests, behavioral traits, psychometrics, recommendations, connections, reference checks, portfolio, and more in an engaging and attractive way.": "No repetitive application processes. Create a professional genome that showcases your experience, skills, interests, behavioral traits, psychometrics, recommendations, connections, reference checks, portfolio, and more in an engaging and attractive way.",
                    "40 professional traits. 100% science, 0% BS. Opinions differ. See by how much they differ from yours.": "40 professional traits. 100% science, 0% BS. Opinions differ. See by how much they differ from yours.",
                    "Determine what to offer based on actual compensation expectations of millions of candidates.": "Determine what to offer based on actual compensation expectations of millions of candidates.",
                    "No guessing. Torre’s skill graph knows how all professional skills relate to each other and improves matching automatically.": "No guessing. Torre’s skill graph knows how all professional skills relate to each other and improves matching automatically.",
                    "Leverage your network. Torre makes it engaging for your colleagues to refer applicants and find out who the top referrers are.": "Leverage your network. Torre makes it engaging for your colleagues to refer applicants and find out who the top referrers are.",
                    "Don’t let your team’s awesomeness go unnoticed. Use Torre Genomes to provide insight into the qualities you and your team have that will attract candidates.": "Don’t let your team’s awesomeness go unnoticed. Use Torre Genomes to provide insight into the qualities you and your team have that will attract candidates.",
                    "Torre’s career pages are simple, robust, and engaging.": "Torre’s career pages are simple, robust, and engaging.",
                    hunt_description: "Torre's job marketplace, Torre's candidate database, other job boards, LinkedIn, private talent databases, online communities on Facebook, LinkedIn, WhatsApp, and more",
                    "Torre replicates human intuition using 100+ factors to screen, filter, and rank candidates automatically and accurately.": "Torre replicates human intuition using 100+ factors to screen, filter, and rank candidates automatically and accurately.",
                    "40+ dimensions of candidate professional behavior, backed by rigorous scientific research.": "40+ dimensions of candidate professional behavior, backed by rigorous scientific research.",
                    "Pseudo-science stops here. Torre analyzes 40+ professional behavioral traits scientifically and automatically.": "Pseudo-science stops here. Torre analyzes 40+ professional behavioral traits scientifically and automatically.",
                    "Because life is too short to manually schedule meetings.": "Because life is too short to manually schedule meetings.",
                    "Torre Messenger is a dedicated messaging app that is fully integrated with Torre’s flows.": "Torre Messenger is a dedicated messaging app that is fully integrated with Torre’s flows.",
                    "We’ll save you time. Via multiple channels, Torre engages previous applicants and referrals to keep their data updated and invite them to future job openings that match.": "We’ll save you time. Via multiple channels, Torre engages previous applicants and referrals to keep their data updated and invite them to future job openings that match.",
                    "purpose-title": "Purpose",
                    "data-title": "Data",
                    "data_validation-title": "Data validation",
                    "algorithm_validation-title": "Algorithm validation",
                    "metrics-title": "Metrics",
                    "description-title": "Description",
                    "mathematical_description-title": "Mathematical description",
                    "uncertainty-title": "Uncertainty",
                    "candidates-subtitle": "Candidates",
                    "ts-subtitle": "Talent seekers",
                    "algorithm_validation-item-1": "Daily and weekly metrics",
                    "algorithm_validation-item-2": "Editorial reviews",
                    "algorithm_validation-item-3": "Direct feedback from talent seekers",
                    "algorithm_validation-item-4": "Direct feedback from candidates",
                    "Powerful analytics": "Powerful analytics",
                    "From acquisition channels to funnel stats to industry benchmark comparisons, Torre delivers the info you need for sound decision-making.": "From acquisition channels to funnel stats to industry benchmark comparisons, Torre delivers the info you need for sound decision-making.",
                    "Let candidates pre-apply": "Let candidates pre-apply",
                    "Don't lose out on great candidates. Torre allows them to sign up and get notified next time you post a job that matches their preferences.": "Don't lose out on great candidates. Torre allows them to sign up and get notified next time you post a job that matches their preferences.",
                    "Automatic on/off optimization of acquisition channels": "Automatic on/off optimization of acquisition channels",
                    "Save time and money by allowing Torre to turn your acquisition channels on or off as required so you maximize your ROI.": "Save time and money by allowing Torre to turn your acquisition channels on or off as required so you maximize your ROI.",
                    "Torre knows how to find, engage, filter, and rank candidates for most job types.": "Torre knows how to find, engage, filter, and rank candidates for most job types.",
                    "Professional genomes": "Professional genomes",
                    "Résumés aren’t enough. Professional genomes include thousands of data points such as experience, hard and soft skills, preferences, interests and non-interests, psychometrics, professional behavior, self-awareness, learning speed and capabilities, contact networks, reference checks, recommendations, certifications, and more.": "Résumés aren’t enough. Professional genomes include thousands of data points such as experience, hard and soft skills, preferences, interests and non-interests, psychometrics, professional behavior, self-awareness, learning speed and capabilities, contact networks, reference checks, recommendations, certifications, and more.",
                    "Perform automatic compensation double-checks for candidates": "Perform automatic compensation double-checks for candidates",
                    "Avoid misunderstandings when making an offer. Torre checks with candidates whether the compensation being offered is attractive.": "Avoid misunderstandings when making an offer. Torre checks with candidates whether the compensation being offered is attractive.",
                    "Let AI alert previous applicants of new openings": "Let AI alert previous applicants of new openings",
                    "Torre automatically identifies candidates in your database and notifies them of new openings that match.": "Torre automatically identifies candidates in your database and notifies them of new openings that match.",
                    "Don’t trust black-box artificial intelligence. Torre is committed to unequaled radical transparency.": "Don’t trust black-box artificial intelligence. Torre is committed to unequaled radical transparency.",
                    "Auto-import of candidates from any job board": "Auto-import of candidates from any job board",
                    "Torre will automatically add all the candidates who apply via job boards you use to your pipeline and candidate database.": "Torre will automatically add all the candidates who apply via job boards you use to your pipeline and candidate database.",
                    "Dedicated transition coach": "Dedicated transition coach",
                    "A Torre expert will help your recruiters transition smoothly from artisanal to programmatic recruitment.": "A Torre expert will help your recruiters transition smoothly from artisanal to programmatic recruitment.",
                    "Meet Maria - the AI recruiter who'll engage candidates for you": "Meet Maria - the AI recruiter who'll engage candidates for you",
                    meet_maria_description: "Maria will chat with candidates to: Invite them to job openings, help them complete their applications, check their references, keep them engaged for future job openings, ask for referrals, and much more!",
                    "Automatic résumé parsing": "Automatic résumé parsing",
                    "Emma by Torre for companies": "Emma by Torre for companies",
                    "Emma by Torre for candidates": "Emma by Torre for candidates",
                    "It's free": "It's free",
                    "VIEW SAMPLE": "VIEW SAMPLE",
                    "PUBLISH A JOB": "PUBLISH A JOB",
                    "CHAT WITH EMMA": "CHAT WITH EMMA",
                    "START RECRUITING WITH EMMA'S HELP": "START RECRUITING WITH EMMA'S HELP",
                    "Recruiting 10+ people per year?": "Recruiting 10+ people per year?",
                    "Check out": "Check out",
                    "BUILD YOUR PROFESSIONAL GENOME": "BUILD YOUR PROFESSIONAL GENOME",
                    "Up to 3x faster recruiting": "Up to 3x faster recruiting",
                    "Based on actual tests performed in 2023": "Based on actual tests performed in 2023",
                    "Up to 2.5x greater employee retention": "Up to 2.5x greater employee retention",
                    "Up to 10x greater candidate re-engagement": "Up to 10x greater candidate re-engagement",
                    "Up to 4x greater ROI": "Up to 4x greater ROI",
                    "Up to 50% savings on recruitment costs": "Up to 50% savings on recruitment costs",
                    "Up to 79% less interviewing required": "Up to 79% less interviewing required",
                    "12-month guarantee": "12-month guarantee",
                    "FIND A PARTNER": "FIND A PARTNER",
                    "APPLY NOW": "APPLY NOW",
                    "If Torre predicted an 80%+ company culture fit, and the person leaves or has her/his employment terminated, you'll receive a pro-rated credit.": "If Torre predicted an 80%+ company culture fit, and the person leaves or has her/his employment terminated, you'll receive a pro-rated credit.",
                    "Connect with a Torre Partner": "Connect with a Torre Partner",
                    "Looking for consulting services, managed recruiting, or need to customize Torre products? Torre partners can help.": "Looking for consulting services, managed recruiting, or need to customize Torre products? Torre partners can help.",
                    "BECOME A TORRE PARTNER": "BECOME A TORRE PARTNER",
                    "Grow your business with Torre’s technology": "Grow your business with Torre’s technology",
                    torrePrimeHeadline: "Boost your visibility",
                    torrePrimeSubheadline: "Increase the chances of getting the perfect job for you.",
                    torrePrimeCTA: "GET TORRE PRIME",
                    notificationDetailsHeadline: "Notification priority",
                    notificationDetailsDescription: "Get notified about new jobs first.",
                    exclusiveJobsHeadline: "Exclusive jobs",
                    exclusiveJobsDescription: "Have access to openings other candidates don’t.",
                    RankHigherDetailsHeadline: "Rank higher",
                    RankHigherDetailsSubheadline: "Be prioritized when presented to companies.",
                    "Join a community that uses Torre to increase revenue and build solutions and services for customers.": "Join a community that uses Torre to increase revenue and build solutions and services for customers.",
                    "Refer or resell": "Refer or resell",
                    "Resell Torre’s products and earn significant margins.": "Resell Torre’s products and earn significant margins.",
                    "Build or fulfill": "Build or fulfill",
                    "Build solutions on top of Torre’s technology or deliver managed services using it.": "Build solutions on top of Torre’s technology or deliver managed services using it.",
                    "Reach more customers": "Reach more customers",
                    "Together, you and Torre provide innovative recruiting solutions, win deals, and deliver greater customer value.": "Together, you and Torre provide innovative recruiting solutions, win deals, and deliver greater customer value.",
                    Innovate: "Innovate",
                    "Innovate with the latest Torre technologies and programmatic recruitment to deliver personalized solutions to customers.": "Innovate with the latest Torre technologies and programmatic recruitment to deliver personalized solutions to customers.",
                    "Get benefits": "Get benefits",
                    "To support and enhance your success, we offer role-specific training, accreditations, and extensive sales and marketing benefits: everything you need to accelerate deals, market, and win with us as a team.": "To support and enhance your success, we offer role-specific training, accreditations, and extensive sales and marketing benefits: everything you need to accelerate deals, market, and win with us as a team.",
                    "Become a partner": "Become a partner",
                    BUY: "BUY",
                    "SAVINGS CALCULATOR": "SAVINGS CALCULATOR",
                    "PUBLISH JOB": "PUBLISH JOB",
                    "Set your daily budget. Torre will only charge a 20% agency fee.": "Set your daily budget. Torre will only charge a 20% agency fee.",
                    "Fees starting at 3%. Guarantee of up to one year.": "Fees starting at 3%. Guarantee of up to one year.",
                    "You only pay when a candidate is hired": "You only pay when a candidate is hired",
                    "Fees starting at 6%, with up to a six-month guarantee.": "Fees starting at 6%, with up to a six-month guarantee.",
                    "RECRUIT WITH EMMA": "RECRUIT WITH EMMA",
                    "START RECRUITING WITH EMMA’S HELP": "START RECRUITING WITH EMMA’S HELP",
                    PARTNERS: "PARTNERS",
                    Pricing: "Pricing",
                    PRICING: "PRICING",
                    "Calculate your savings": "Calculate your savings",
                    savings_description: "Improve the productivity of your recruitment team between 51% and 82%.",
                    reachDemoPreview: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/v4/emma-reach-cover-en",
                    matchDemoPreview: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/demos/previews/match-en",
                    culturalDemoPreview: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/demos/previews/cultural-en",
                    reachDemoVideo: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/EmmaReachDemoInEnglishATSREC",
                    matchDemoVideo: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreMatchDemoInEnglishREC",
                    culturalDemoVideo: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreCulturalFitDemoInEnglishREC",
                    reachDemoTitle: "Watch the Torre reach demo",
                    matchDemoTitle: "Watch the Torre match demo",
                    culturalDemoTitle: "Watch the Torre cultural fit demo",
                    "Torre Demo": "Torre Demo",
                    candidateDemoVideo: "https://res.cloudinary.com/torre-technologies-co/video/upload/q_auto/v1/origin/home-pages/demos/candidates/torreCandidateVideoEN",
                    candidateDemoPreview: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/candidates/torreCandidateDemoCoverImageEN",
                    "Candidate acquisition, screening, filtering, ranking, scheduling, and re-engagement": "Candidate acquisition, screening, filtering, ranking, scheduling, and re-engagement",
                    "ATTRACT CANDIDATES": "ATTRACT CANDIDATES",
                    "PROCESS CANDIDATES": "PROCESS CANDIDATES",
                    "DELEGATE YOUR RECRUITMENT": "DELEGATE YOUR RECRUITMENT",
                    cta_publish_job: "POST A JOB (FREE)",
                    cta_publish_job_for_companies_leyend: "Attract candidates from 100+ sources",
                    cta_process_candidates_leyend: "Screening, filtering, ranking, scheduling, etc.",
                    cta_publish_job_leyend: "100% satisfaction guarantee",
                    cta_outsource_recruitment: "OUTSOURCE RECRUITMENT",
                    "VIEW PRICING": "VIEW PRICING",
                    Earn: "Earn",
                    emmaPageTitle: "The woman who inspired Torre, its name, and icon",
                    emmaPageSubtitle: "How María Emma Torrenegra’s unwavering strength, determination, and resilience shaped Torre’s name and commitment to making work fulfilling for everyone",
                    "20%+ of product sales - much higher commissions than anywhere else.": "20%+ of product sales - much higher commissions than anywhere else.",
                    "Deal flow": "Deal flow",
                    "Grow your business with extensive sales and marketing benefits: everything you need to accelerate deals, market, and win with us as a team.": "Grow your business with extensive sales and marketing benefits: everything you need to accelerate deals, market, and win with us as a team.",
                    "AI Technology": "AI Technology",
                    "Get full access to Torre’s technology, automating 90% of recruitment. Use best-in-class technology to help fill roles for your clients.": "Get full access to Torre’s technology, automating 90% of recruitment. Use best-in-class technology to help fill roles for your clients.",
                    "partners-cost-description": "This program requires an initial investment that covers the costs of marketing, technology, training, and support, all focused on helping you grow your business! When you succeed, we all succeed!",
                    testimonialSectionTitleCandidates: "Testimonials from candidates",
                    testimonialSectionTitleCompanies: "Testimonials from companies",
                    ats_price: "Starting at $0 (free!)",
                    emmaReachPricingHeadline: "Set your daily budget, and Torre’s AI recruiter will attract the best candidates from 100+ sources."
                },
                es: {
                    chatWithEmmaUrl: "https://api.whatsapp.com/send?phone=16314370386&text=Hola%20Emma%2C%20quiero%20que%20me%20ayudes%20a%20conseguir%20candidatos",
                    osDemoTitle: "Mira el demo de torreOS",
                    "Search people and organizations by name, username, or email": "Busca personas u organizaciones por nombre, correo electrónico o nombre de usuario",
                    "Search people or organizations by name:": "Busca personas u organizaciones por nombre:",
                    "Search people by name:": "Busca personas por nombre:",
                    "Search people by skill:": "Busca personas por habilidad:",
                    "Search jobs": "Busca trabajos",
                    "The '{fieldName}' field is required": "El campo '{fieldName}' es requerido",
                    "Rank higher. Pay $0 until hired.": "Rank higher. Pay $0 until hired.",
                    Boost: "Boost",
                    "Open to qualified candidates.": "Abierto a candidatos cualificados que buscan trabajo remoto en tecnología.",
                    video: "video",
                    testimonials: {
                        video1: {
                            description: "“Torre hace el proceso mucho más fácil y transparente, ahorrándonos tiempo, costos operativos y entregando prospectos más calificados.”",
                            person: {
                                name: "Fabiola Sandoval",
                                genome: "/fabiolasandovalmejia",
                                title: "Marketing ",
                                company: "Lyndoors 🇲🇽",
                                companyGenome: "/teams/LYNDOORS"
                            }
                        },
                        video2: {
                            description: "“La tecnología de Torre es increíble pero lo más increíble es tener personas en su equipo disponibles todo el tiempo para ayudarte y desbloquearte, es lo que más destaco”",
                            person: {
                                name: "Michael Ellis",
                                genome: "/mellis",
                                title: "VP",
                                company: "Newstex",
                                companyGenome: "/teams/Newstex"
                            }
                        },
                        video3: {
                            description: "“Nos permite dejar de lado la parte operativa y centrarnos en revisar a profundidad, lo que resulta en contrataciones más acertadas y seguras.”",
                            person: {
                                name: "Valentina López",
                                genome: "/dianavalentinalopezsoler",
                                title: "Líder de recursos humanos",
                                company: "Constructora Experta 🇨🇴",
                                companyGenome: "/teams/ConstructoraExpertaSAS"
                            }
                        },
                        video4: {
                            description: "“Con el cultural fit de Torre ya no hago contrataciones equivocadas, siempre doy con perfiles que se ajustan a la ética profesional de mi compañía.”",
                            person: {
                                name: "Nelly Pinto",
                                genome: "/nellymayreth",
                                title: "Gerente de contratación",
                                company: "Triangulum 🇨🇴",
                                companyGenome: "/teams/TRIANGULUMBPOSAS"
                            }
                        },
                        video5: {
                            description: "“Es el híbrido perfecto entre un headhunter tradicional y los portales de empleo: perfiles muy buenos, con un filtro preciso y personalizado gracias a la inteligencia artificial.”",
                            person: {
                                name: "Santiago Verenkow",
                                genome: "/santiagovarenkow?r=XGcjyBMB",
                                title: "CEO",
                                company: "Boxisleep 🇨🇴",
                                companyGenome: "/teams/Boxisleep1"
                            }
                        }
                    },
                    Companies: "Empresas",
                    Testimonials: "Testimonios",
                    testimonials_page_headline: "Lo que dicen nuestros usuarios: El éxito simplificado",
                    aboutUsTitle: "Sobre nosotros",
                    "CHAT WITH US": "HABLA CON NOSOTROS",
                    ourTeamCta: "NUESTRO EQUIPO",
                    jobsAtTorre: "EMPLEOS EN TORRE",
                    aboutUsHeadline: "Somos la primera empresa en automatizar completamente el reclutamiento de principio a fin.",
                    aboutUsDescription: "Somos el Waymo del reclutamiento. Nuestra reclutadora de IA, Emma, ayuda tanto a empresas como a candidatos. Hace todo lo que un reclutador excepcional haría, pero sin discriminar. Incluso predice si un candidato es una buena opción no solo para un puesto específico, sino también para una empresa y su equipo.",
                    noDiscriminationSectionTitle: "Descubre cómo la tecnología de Torre promueve la justicia y la equidad al eliminar los prejuicios en el reclutamiento.",
                    noDiscriminationSectionCta: "APRENDE CÓMO COMBATIMOS LOS SESGOS",
                    noDiscriminationSectionImageUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/tty0bv6vkzflqp0ba9r4",
                    source: "[fuente]",
                    any_sufficiently_advanced_technology: "Toda tecnología lo suficientemente avanzada es equivalente a magia.",
                    ai_recruitment_intro: "¿Reemplazará la IA al reclutamiento tradicional? Algunos temen que sí e insisten que no debería. La IA carece de precisión, dicen, y le falta el toque humano. En Torre, no carece de ninguno. Te explicamos por qué:",
                    "More accurate recruitment": "Reclutamiento más preciso",
                    ai_recruitment_title: "Cómo la IA hace el reclutamiento más humano y elimina la discriminación",
                    less_apathy_headline: "Menos apatía, más retroalimentación",
                    less_aphaty_subtitle: "La IA, por otro lado, puede dar retroalimentación a todos los candidatos en todo momento.",
                    less_apathy_stats_part_one: "El 76% de los candidatos afirma que no recibir respuesta de un empleador después de aplicar a un trabajo es más frustrante que no recibir respuesta después de una primera cita ",
                    less_apathy_stats_part_two: ". Sin embargo, el 82% de las aplicaciones a trabajos no reciben respuesta ",
                    less_apathy_stats_part_three: ", y cuando la reciben, es genérica y poco útil”. Hay una explicación simple: los reclutadores frecuentemente están sobrecargados de trabajo. No tienen tiempo para respuestas individuales. No pueden ofrecer ese toque personal, lo que en cierto sentido, también resulta inhumano. Es más, probablemente empeore. Cuando los candidatos empiecen a usar la IA que tienen disponible hoy y apliquen automáticamente a múltiples trabajos, es posible que encuentren poco más que un vacío.",
                    less_apathy_description_part_one: "Torre provee retroalimentación a cada candidato en cada etapa del proceso de reclutamiento. Incluso antes de que apliquen, Torre ayuda a los candidatos a determinar si un trabajo se ajusta a sus preferencias. Si deciden aplicar, Torre les ayuda de forma proactiva a identificar qué tan compatible son con la posición. Torre también les informa cómo se posicionan en comparación con otros candidatos, por qué están en esa posición y qué pueden hacer para mejorarla. La retroalimentación de Torre es personalizada de manera única para cada candidato.",
                    less_discrimination_headline: "Menos discriminación, más equidad",
                    less_discrimination_subtitle: "La IA y la automatización, diseñadas de forma correcta, son completamente imparciales.",
                    less_discrimination_stats_part_one: "En Estados Unidos, los currículums con nombres que sugieren origen caucásico reciben 50% más llamadas para entrevistas que otros. Las candidatas mujeres tienen un 30% menos de probabilidad de recibir una llamada en comparación con los candidatos hombres. De hecho, el 48% de los gerentes de RH admiten tener sesgos ",
                    less_discrimination_stats_part_two: ". Lamentablemente, los humanos son propensos a sesgos inconscientes ",
                    less_discrimination_stats_part_three: ". Este tipo de sesgos no son el tipo de toque humano que queremos conservar en el reclutamiento.",
                    less_discrimination_part_four: "En los años 90, varias orquestas comenzaron a implementar audiciones a ciegas. Como resultado, el número de mujeres en orquestas ha incrementado significativamente. Curiosamente, se ha demostrado que las contrataciones a ciegas incrementan la probabilidad de contratar mujeres en un 25-46% ",
                    less_discrimination_description_part_one: "En Torre, durante la preselección, todos los candidatos están en igualdad de condiciones. Nombre, género, raza y edad son ignorados. La equidad manda. Pero no termina ahí. El fit cultural se evalúa automáticamente usando una metodología científica que toma en cuenta tanto los rasgos profesionales de la empresa como los de cada candidato. Las evaluaciones se comparten con todas las partes antes de la primera entrevista, por lo que hay más objetividad y menos discriminación.",
                    less_guesswork_headline: "Menos suposiciones, más objetividad",
                    less_guesswork_subtitle: "En Torre, capturamos miles de datos a través de 112 factores y los alimentamos a 9 tipos de IA para identificar, filtrar y rankear los mejores candidatos para cada trabajo, así como el mejor trabajo para cada candidato. Predecimos la probabilidad de que cada candidato tenga éxito en ese trabajo, en esa empresa y en ese equipo. Hay un puntaje predictivo: de 0 a 100%. También predecimos si ese trabajo, equipo y empresa son el match correcto para un candidato, sus aspiraciones y crecimiento profesional. Torre está trabajando para crear puntajes predictivos confiables para que las empresas puedan hacer ofertas de trabajo instantáneamente, con solo un clic.",
                    less_guesswork_stats_part_one: "Al evaluar compatibilidad entre candidatos, trabajos y equipos, se deben considerar cientos de factores y miles de datos. Los factores incluyen experiencia, habilidades técnicas, habilidades blandas, las habilidades que el candidato quiere desarrollar, las que no quiere desarrollar, psicometría conductual, fit cultural, credenciales, red de contactos, redes sociales, recomendaciones, verificaciones, velocidad de aprendizaje, capacidades de aprendizaje, y más. Sin embargo, los humanos solo podemos manejar de cuatro a siete factores a la vez ",
                    less_guesswork_stats_part_two: ". Por eso los reclutadores deben confiar en la intuición. Pero la intuición tiende a hacer que el reclutamiento sea subjetivo, no escalable y discriminatorio.",
                    less_guesswork_description_part_one: "La IA de Torre también es diferente. Es un libro abierto en lugar de una alquimia oscura y siniestra. Los usuarios pueden revisar cómo se calculó cada factor y entender en detalle cómo la IA hizo su recomendación.",
                    the_future: "El futuro",
                    the_future_subtitle: "Imagina un mundo donde cada persona tiene un reclutador y coach personal que proactivamente los ayuda a encontrar el trabajo perfecto para cada etapa de su carrera. Uno que siempre los ayuda a crecer y alcanzar su potencial. Gratis. En Torre, creemos que ese futuro es posible gracias a la inteligencia artificial.",
                    the_future_stats_part_one: "La IA y la automatización hacen el reclutamiento más preciso y más humano al brindar más retroalimentación, equidad y objetividad. El reclutamiento es más rápido y menos costoso.",
                    the_future_description_part_one: "El talento se desperdicia constantemente porque no se expone (o no se considera) para las oportunidades laborales adecuadas. En Torre, estamos comprometidos a utilizar la tecnología para cambiar eso, no solo por el hecho de ser humanos, sino también por ser humanos con humanidad. Queremos ayudar a cada persona a alcanzar su máximo potencial y hacer que el trabajo sea gratificante para todos.",
                    the_future_description_part_two: "¡Eso sí es magia!",
                    mainVideoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/q_auto/origin/home/videos/Torre_Demo_ESP_V6.mp4",
                    videoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1715655426/origin/home-pages/demos/vhcpzclsd1fnbvaqebk6.mp4",
                    videoCover: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1649775357/origin/home/op-images/yiridyow0v8ijsmy455k.svg",
                    "Search jobs - infinitive": "Buscar trabajos",
                    "FAIR:": " ",
                    "Fair Artificial Intelligence in Recruiting Manifesto": "Manifiesto de Inteligencia Artificial Justa en el Reclutamiento",
                    "FAIR: the Fair Artificial Intelligence in Recruiting Manifesto": "El Manifiesto de Inteligencia Artificial Justa en el Reclutamiento",
                    "Welcome to the future of recruitment": "Bienvenido al futuro del reclutamiento",
                    "Welcome to the future of job hunting": "Bienvenido al futuro de la búsqueda de trabajo",
                    "Full-time, flexible, freelance, or internship roles": "Puestos de tiempo completo, flexibles, freelance o pasantías",
                    "Automate candidate acquisition, filtering, ranking, interviewing, and engagement.": "Automatiza o delega la obtención, selección, filtrado, clasificación, entrevistas y re-contratación de candidatos.",
                    "Delegate to AI your candidate acquisition, screening, filtering, ranking, scheduling, and re-engagement.": "Delega a la IA la adquisición, selección, filtrado, clasificación, agendamiento y reactivación de candidatos.",
                    "Candidates databases": "Bases de datos de candidatos",
                    "Candidate reactivation": "Reactivación de candidatos",
                    "Candidate Referral Programs": "Programas de referencia de candidatos",
                    "Career Sites": "Páginas de empleo",
                    "Millions of jobs. Remote-first, hybrid, and local.": "Millones de trabajos. Remotos, híbridos, y locales.",
                    "Language testing": "Pruebas de idiomas",
                    LatamMainImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.7,c_scale/v1/origin/home-pages/main-graphics/latam2-spanish",
                    "Let AI do the recruitment for you": "Deja que la IA contrate por ti",
                    for_companies_subheadline: "Adquisición de candidatos y freelancers, screening, filtrado, clasificación, agendamiento, y mucho más.",
                    "Let AI recruit your global team": "Torre para equipos remotos",
                    "Let AI do the recruitment for your BPO": "Deja que la IA haga el reclutamiento de tu BPO",
                    "Let Emma do the recruitment for you": "Deja que la IA contrate por ti",
                    "High-volume recruiting": "Reclutamiento de alto volumen",
                    "Let AI do the job hunting for you": "Deja que la inteligencia artificial busque trabajo por ti",
                    in_short_text: "Los reclutadores y las plataformas de trabajo flexible están adaptando la inteligencia artificial para clasificar a los candidatos y asignar trabajo. Sin control, la inteligencia artificial discriminará sistemáticamente, omitirá y borrará a miles de millones de personas. Para evitarlo, las empresas y sus proveedores tecnológicos deben: 1) divulgar el uso de la IA, 2) hacer transparentes los factores, 3) revelar las clasificaciones a los candidatos, 4) detectar el sesgo y 5) reducir sistemáticamente la discriminación.",
                    "Interview scheduling": "Programación de entrevistas",
                    "Job distribution": "Distribución de empleos",
                    "Meet Emma - your self-driving AI recruiter": "Conoce a Emma - tu reclutadora automática con IA",
                    "Tomorrow’s résumé today": "El résumé/CV del mañana, hoy",
                    "Team genome": "Genoma de equipo",
                    "Let jobs find you": "Deja que los trabajos te encuentren",
                    "Clear messaging": "Mensajería clara",
                    "Find out what others are asking. Millions of data points.": "Descubre lo que otros están preguntando. Millones de puntos de datos",
                    "Find the perfect job": "Encuentra el trabajo perfecto",
                    "Free ATS": "ATS gratuito",
                    Headhunting: "Caza de talentos",
                    "Welcome to the era of programmatic headhunting. AI-enabled. 3x faster. And spot on.": "Bienvenido a la era de la caza de talentos programática. Habilitado por IA. 3x más rápido y preciso.",
                    "Welcome to the future of executive search.": "Bienvenido al futuro de la búsqueda ejecutiva.",
                    "Vetted candidates. Millions of them.": "Candidatos cuidadosamente examinados. Millones de ellos.",
                    "Simple salary calculator": "Cálculo salarial sencillo",
                    "Salary calculator": "Calculadora de salario",
                    "Skill Graph": "Gráfico de habilidades",
                    Sourcing: "Reclutamiento",
                    "Let AI surface the top candidates for you": "Deja que la IA te muestre los mejores candidatos",
                    "Never miss an important message with Torre Messenger": "No te pierdas ningún mensaje importante con Torre Messenger",
                    "Quick language proficiency testing": "Pruebas rápidas de dominio lingüístico",
                    "Find out what others think of you": "Descubre lo que otros piensan de ti",
                    "Find out who got the job if you didn’t": "Descubre quien consiguió el trabajo si no fuiste tú",
                    "Next-gen psychometrics": "Psicometría de última generación",
                    "Two-way cultural fit": "Fit cultural bidireccional",
                    "Gamified referrals": "Gamificación de referidos",
                    "Welcome to the era of programmatic recruiting outsourcing. AI-enabled. 3x faster. And spot on.": "Bienvenido a la era de la delegación del reclutamiento programático. Habilitado por IA. 3x más rápido y preciso.",
                    "Welcome to the era of programmatic recruiting. AI-enabled. 3x faster. And spot on.": "Bienvenido a la era del reclutamiento programático. Habilitado por IA. 3x más rápido y preciso.",
                    ats_headline: "El más avanzado software de gestión de candidatos",
                    integrationDetailsHeadline: "Integración nativa con tu software existente de RRHH o ATS",
                    Psychometrics: "Psicometría",
                    "Candidate rankings": "Ranking de candidatos",
                    "Transparent algorithms": "Algoritmos transparentes",
                    "Two-way culture fit": "Fit cultural bidireccional",
                    "65,000 skills. 1,000,000+ relationships.": "65.000 habilidades. Más de 1.000.000 de relaciones.",
                    "Let our self-driving recruiter find and attract top candidates for you": "Deja que nuestro reclutador autónomo encuentre y atraiga a los mejores candidatos para ti",
                    "From 1+billion candidates who aren’t actively looking for a job, Emma will identify those who'll be your best match, reach out to them, and connect them with you.": "De más de mil millones de candidatos que no están buscando activamente un empleo, Emma identificará a aquellos que serán tu mejor match, se comunicará con ellos y los conectará contigo.",
                    "Emma will identify matching candidates in your dabatase, in job boards, and candidates who aren’t actively looking for a job, reach out to them, and connect them with you.": "Emma identificará candidatos compatibles en tu base de datos, en tableros de empleo y entre candidatos que no están buscando activamente empleo, los contactará y los conectará contigo.",
                    "15+ channels to attract candidates": "Más de 15 canales para atraer candidatos",
                    "The future of team profiles": "El futuro de los perfiles de equipo",
                    "Career sites": "Páginas de empleo",
                    "Career pages": "Páginas de empleo",
                    "Auto-scheduling of interviews and offers": "Autoprogramación de entrevistas y ofertas",
                    "Auto-interviews": "Autoentrevistas",
                    "Auto-build your candidate database": "Autoconstruye tu base de datos de candidatos",
                    "Let AI re-engage your candidate database": "Deja que la IA recupere tu base de datos de candidatos",
                    "Fix your leaking bucket. Build your candidate databases intelligently. And better yet, automatically.": "Repara las fugas de tu embudo de adquisición de talento. Construye tus bases de datos de candidatos de forma inteligente. Y mejor aún, automáticamente.",
                    "for companies": "para empresas",
                    "Torre for Remote Teams": "Torre para equipos remotos",
                    "for remote teams": "para equipos remotos",
                    "Torre for BPOs": "Torre para BPOs",
                    "for BPOs": "para BPOs",
                    "Torre for AI Talent": "Torre para Talento IA",
                    "for AI Talent": "para Talento IA",
                    "Hire top global AI talent": "Contrata el mejor talento global en inteligencia artificial",
                    "for candidates": "para candidatos",
                    "solutions for companies": "Soluciones para empresas",
                    referral_programs_title: "Atrae candidatos con gamificación de referidos",
                    "tools for candidates": "Herramientas para candidatos",
                    "Candidate acquisition analytics": "Análisis de adquisición de candidatos",
                    "Ongoing job posts": "Ofertas de empleo siempre abiertas",
                    "Candidate sampling": "Muestreo de candidatos",
                    "Top-notch candidate experience": "Experiencia de primera categoría para el candidato",
                    "Full-time, flexible, or internship roles": "Puestos de tiempo completo, flexible o pasantías",
                    "Import your existing candidate database": "Importa tu base de datos de candidatos existente",
                    "Filter candidates automatically": "Filtra candidatos automática­mente",
                    "Discover hidden gems in your database": "Descubre joyas ocultas en tu base de datos",
                    "Make an engaging visual impression": "Causa una impresión visual atractiva",
                    "Discover candidates close to your team": "Descubre candidatos cercanos a tu equipo",
                    "1+ billion candidates": "Más de mil millones de candidatos",
                    "Proficiency trumps years of experience": "La competencia supera años de experiencia",
                    "Highly customizable criteria": "Criterios altamente personaliza­bles",
                    "Let us handle your recruitment and we’ll go to the ends of the Earth to find you the candidates you need": "Déjanos encargarnos de tu reclutamiento e iremos hasta el fin del mundo para encontrar los candidatos que necesitas",
                    "Hire top Latin American talent faster": "Contrata talento latinoamericano de primer nivel más rápido",
                    "Interview your first qualified candidates in less than 72 hours.": "Entrevista a tus primeros candidatos calificados en menos de 72 horas.",
                    "Improve your recruitment with satisfaction surveys": "Mejora tu reclutamiento con encuestas de satisfacción",
                    "Detailed candidate reports": "Informes detallados sobre los candidatos",
                    "Pre-interview candidates with video screening questions": "Preentrevista candidatos con preguntas de selección en video",
                    "Compensation expectations per candidate": "Expectativas de remuneración por candidato",
                    "Automated messages": "Mensajes automatizados",
                    "Reference checks via recruiter bots": "Verificación de referencias a través de bots de reclutamiento",
                    "Keep candidates informed with one-click feedback": "Mantén informados a los candidatos con retroalimentacióncon un solo clic",
                    "Perform automatic candidate screening": "Realiza evaluación automática de los candidatos",
                    "Stop discrimination": "Evita la discrimina­ción",
                    "Send screening question to previous applicants": "Envía preguntas de selección a candidatos previos",
                    "Candidate-to-team matching": "Match de candidatos y equipos",
                    "Customize your pipeline": "Personaliza tu pipeline",
                    "Centralize communication and collaborate with your team": "Centraliza la comunicación y colabora con tu equipo",
                    "Most of what Torre offers. For free!": "La mayoría de lo que ofrece Torre ¡Gratis!",
                    "All of Torre. One simple price.": "Todo Torre. Un precio simple.",
                    "Custom solution and pricing": "Solución y precios personalizados",
                    "9 types of AI that match candidates with 112 factors": "9 tipos de IA que hacen match de candidatos con 112 factores",
                    "Powerful feedback loops": "Potentes ciclos de retroalimenta­ción",
                    "The first Recruitment Operating System (ROS)": "El primer Sistema Operativo de Reclutamiento (ROS)",
                    "Recruiting on-demand": "Reclutamiento bajo demanda",
                    "Applications via QR-code": "Aplicaciones mediante código QR",
                    "Let Torre automatically follow up on your behalf": "Deja que Torre haga seguimiento automático en tu nombre",
                    "Whenever you message a candidate, Torre follows up on your behalf via email, WhatsApp, and SMS. And the same happens when Torre's AI recruiter messages the candidate.": "Siempre que envíes un mensaje a un candidato, Torre hace el seguimiento en tu nombre por correo electrónico, WhatsApp y SMS. Y lo mismo sucede cuando el reclutador AI de Torre envía un mensaje al candidato.",
                    "Dedicated talent advisor": "Asesor de talento dedicado",
                    torre_job_distribution_description: "No dejes ningún canal sin explorar. Emma identifica y activa automáticamente docenas de canales de adquisición para ti: referencias, alertas de trabajo, notificaciones del bot de reclutamiento, notificaciones push, correo electrónico, WhatsApp, mensajes de texto, cientos de bolsas de trabajo, LinkedIn, TikTok, Facebook, Twitter, búsqueda de personal y más.",
                    "Other solutions are not designed to capture the data you actually need to make recruiting decisions. Switch to Torre ATS, and manage hundreds of structured data points you can’t find elsewhere.": "Otras soluciones no están diseñadas para capturar los datos que realmente necesitas para tomar decisiones de reclutamiento. Cámbiate a Torre ATS y administra cientos de puntos de datos estructurados que no puedes encontrar en ningún otro lugar.",
                    "Torre analyzes 40+ professional behavioral traits scientifically and automatically.": "Torre analiza más de 40 rasgos de comportamiento profesional de forma científica y automática.",
                    "Let her find the perfect candidates for you.": "Deja que ella encuentre los candidatos perfectos para ti.",
                    "Let her find the perfect job for you": "Deja que ella encuentre el trabajo perfecto para ti",
                    "Automate or outsource candidate acquisition, screening, filtering, ranking, interviewing, and re-engagement.": "Automatiza o delega la obtención, selección, filtrado, clasificación, entrevistas y re-contratación de candidatos.",
                    jobMarketPlaceDescription: "Recibe candidatos calificados para puestos remotos, locales o híbridos - de tiempo completo, flexibles o pasantías. Gratis!",
                    "AI-powered. Now we’re talking!": "Potenciadas con IA ¡Ahora sí estamos hablando!",
                    "Let AI do the job filtering for you using hundreds of matching factors.": "Deja que la IA filtre trabajos por ti usando cientos de factores de alineación.",
                    "Messages and job notifications in real-time.": "Mensajes y notificaciones de trabajos en tiempo real.",
                    "Automate candidate acquisition, screening, filtering, ranking, interviewing, and re-engagement with Torre’s Recruitment Operating System.": "Automatiza la adquisición, evaluación, filtrado, clasificación, entrevista y recontratación de candidatos con el Sistema Operativo de Reclutamiento de Torre.",
                    os_page_description: "La inteligencia artificial más avanzada para incrementar y gestionar tus candidatos.",
                    "No repetitive application processes. Create a professional genome that showcases your experience, skills, interests, behavioral traits, psychometrics, recommendations, connections, reference checks, portfolio, and more in an engaging and attractive way.": "Sin procesos de aplicación repetitivos. Crea un genoma profesional que muestre tu experiencia, habilidades, intereses, rasgos de comportamiento, psicometría, recomendaciones, conexiones, comprobación de referencias, portafolio y mucho más de forma atractiva e interesante.",
                    "40 professional traits. 100% science, 0% BS. Opinions differ. See by how much they differ from yours.": "40 rasgos profesionales. 100% ciencia, 0% tonterías. Las opiniones difieren. Descubre qué tanto difieren las de ellos con las tuyas.",
                    "Determine what to offer based on actual compensation expectations of millions of candidates.": "Determina qué ofrecer basándote en las expectativas salariales reales de millones de candidatos.",
                    "No guessing. Torre’s skill graph knows how all professional skills relate to each other and improves matching automatically.": "Sin suposiciones. El gráfico de habilidades de Torre sabe cómo se relacionan entre sí y mejora el match automáticamente.",
                    "Leverage your network. Torre makes it engaging for your colleagues to refer applicants and find out who the top referrers are.": "Aprovecha tu red de contactos. Torre hace que sea atractivo para tus colegas recomendar candidatos y averiguar quiénes son los mejores recomendando.",
                    "Don’t let your team’s awesomeness go unnoticed. Use Torre Genomes to provide insight into the qualities you and your team have that will attract candidates.": "No dejes que lo mejor de tu equipo pase desapercibido. Utiliza Torre Genomes para dar a conocer las cualidades que tú y tu equipo tienen que atraerán a los candidatos.",
                    "Torre’s career pages are simple, robust, and engaging.": "Las páginas de empleo de Torre son sencillas, sólidas y atractivas.",
                    hunt_description: "Job marketplace de Torre, base de datos de candidatos de Torre, otros portales de trabajo LinkedIn, bases de datos privadas de talento, comunidades en línea en Facebook, LinkedIn, WhatsApp, etc.",
                    "Torre replicates human intuition using 100+ factors to screen, filter, and rank candidates automatically and accurately.": "Torre replica la intuición humana utilizando más de 100 factores para examinar, filtrar y clasificar candidatos de manera automática y precisa.",
                    "40+ dimensions of candidate professional behavior, backed by rigorous scientific research.": "Más de 40 dimensiones del comportamiento profesional de los candidatos, respaldadas por rigurosa investigación científica.",
                    "Pseudo-science stops here. Torre analyzes 40+ professional behavioral traits scientifically and automatically.": "La pseudociencia se acaba aquí. Torre analiza más de 40 rasgos de comportamiento profesional de forma científica y automática.",
                    "Because life is too short to manually schedule meetings.": "Porque la vida es demasiado corta para programar reuniones manualmente.",
                    "Torre Messenger is a dedicated messaging app that is fully integrated with Torre’s flows.": "Torre Messenger es una aplicación de mensajería dedicada totalmente integrada con los flujos de Torre.",
                    "We’ll save you time. Via multiple channels, Torre engages previous applicants and referrals to keep their data updated and invite them to future job openings that match.": "Te ahorraremos tiempo. A través de múltiples canales, Torre contacta con candidatos y referidos anteriores para mantener tus datos actualizados e invitarles a futuras ofertas de empleo con las que encajen.",
                    "purpose-title": "Purpose",
                    "data-title": "Data",
                    "data_validation-title": "Data validation",
                    "algorithm_validation-title": "Algorithm validation",
                    "metrics-title": "Metrics",
                    "description-title": "Description",
                    "mathematical_description-title": "Mathematical description",
                    "uncertainty-title": "Uncertainty",
                    "candidates-subtitle": "Candidates",
                    "ts-subtitle": "Talent seekers",
                    "algorithm_validation-item-1": "Daily and weekly metrics",
                    "algorithm_validation-item-2": "Editorial reviews",
                    "algorithm_validation-item-3": "Direct feedback from talent seekers",
                    "algorithm_validation-item-4": "Direct feedback from candidates",
                    "Powerful analytics": "Análisis potentes",
                    "From acquisition channels to funnel stats to industry benchmark comparisons, Torre delivers the info you need for sound decision-making.": "Desde canales de adquisición hasta estadísticas de embudo y comparaciones con estándares de la industria, Torre proporciona la información que necesitas para una toma de decisiones sólida.",
                    "Let candidates pre-apply": "Permite que los candidatos pre-apliquen",
                    "Don't lose out on great candidates. Torre allows them to sign up and get notified next time you post a job that matches their preferences.": "No pierdas la oportunidad con excelentes candidatos. Torre les permite registrarse y recibir notificaciones la próxima vez que publiques un empleo que coincida con sus preferencias.",
                    "Automatic on/off optimization of acquisition channels": "Optimización automática “encendido/apagado” de canales de adquisición",
                    "Save time and money by allowing Torre to turn your acquisition channels on or off as required so you maximize your ROI.": "Ahorra tiempo y dinero permitiendo que Torre active o desactive tus canales de adquisición según sea necesario para maximizar tu retorno de inversión.",
                    "Torre knows how to find, engage, filter, and rank candidates for most job types.": "Torre sabe cómo encontrar, captar, filtrar y clasificar candidatos para la mayoría de los tipos de trabajo.",
                    "Professional genomes": "Genomas profesionales",
                    "Résumés aren’t enough. Professional genomes include thousands of data points such as experience, hard and soft skills, preferences, interests and non-interests, psychometrics, professional behavior, self-awareness, learning speed and capabilities, contact networks, reference checks, recommendations, certifications, and more.": "Los currículos no son suficientes. Los genomas profesionales incluyen miles de puntos de datos tales como experiencia, habilidades técnicas y blandas, preferencias, intereses y desintereses, psicometría, comportamiento profesional, autoconocimiento, velocidad y capacidades de aprendizaje, redes de contacto, verificaciones de referencias, recomendaciones, certificaciones y más.",
                    "Perform automatic compensation double-checks for candidates": "Realiza verificaciones dobles de compensación automáticas",
                    "Avoid misunderstandings when making an offer. Torre checks with candidates whether the compensation being offered is attractive.": "Evita malentendidos al hacer una oferta. Torre verifica con los candidatos si la compensación ofrecida es atractiva.",
                    "Let AI alert previous applicants of new openings": "Deja que la IA avise a tus candidatos anteriores de vacantes nuevas",
                    "Torre automatically identifies candidates in your database and notifies them of new openings that match.": "Torre identifica automáticamente a los candidatos de tu base de datos y les notifica las nuevas vacantes que hagan match.",
                    "Don’t trust black-box artificial intelligence. Torre is committed to unequaled radical transparency.": "No confíes en la inteligencia artificial con cajas negras. Torre está comprometido a una transparencia radical como ninguna.",
                    "Auto-import of candidates from any job board": "Auto-importación de candidatos desde otros portales de empleo",
                    "Torre will automatically add all the candidates who apply via job boards you use to your pipeline and candidate database.": "Torre añadirá automáticamente a todos los candidatos que apliquen a través de los portales de empleo que utilizas a tu proceso de selección y base de datos de candidatos.",
                    "Dedicated transition coach": "Entrenador de transición dedicado",
                    "A Torre expert will help your recruiters transition smoothly from artisanal to programmatic recruitment.": "Un experto de Torre ayudará a tus reclutadores a realizar una transición fluida de un reclutamiento artesanal a uno programático.",
                    "Meet Maria - the AI recruiter who'll engage candidates for you": "Conoce a Maria - la reclutadora AI que atraerá a los candidatos por ti",
                    meet_maria_description: "Maria conversará con los candidatos para: invitarlos a ofertas de trabajo, ayudarlos a completar sus aplicaciones, verificar sus referencias, mantenerlos interesados para futuras ofertas de empleo, pedir referencias, ¡y mucho más!",
                    "Automatic résumé parsing": "Análisis automático de CVs/résumés",
                    "Emma by Torre for companies": "Emma de Torre para empresas",
                    "Emma by Torre for candidates": "Emma de Torre para candidatos",
                    "It's free": "Es gratis",
                    "VIEW SAMPLE": "VE UN EJEMPLO",
                    "PUBLISH A JOB": "PUBLICA UN TRABAJO",
                    "CHAT WITH EMMA": "CHATEA CON EMMA",
                    "START RECRUITING WITH EMMA'S HELP": "COMIENZA A RECLUTAR CON LA AYUDA DE EMMA",
                    "Recruiting 10+ people per year?": "¿Reclutas +10 vacantes al año?",
                    "Check out": "Mira",
                    "BUILD YOUR PROFESSIONAL GENOME": "CREA TU GENOMA PROFESIONAL",
                    "Up to 3x faster recruiting": "Reclutamiento hasta 3x más rápido",
                    "Based on actual tests performed in 2023": "Basado en pruebas reales realizadas en 2023",
                    "Up to 2.5x greater employee retention": "Hasta 2.5x mayor retención de empleados",
                    "Up to 10x greater candidate re-engagement": "Hasta 10x mayor recontratación de candidatos",
                    "Up to 4x greater ROI": "Hasta 4x mayor retorno de inversión",
                    "Up to 50% savings on recruitment costs": "Hasta 50% de ahorro en costos de reclutamiento",
                    "Up to 79% less interviewing required": "Hasta 79% menos entrevistas requeridas",
                    "12-month guarantee": "Garantía de 12 meses",
                    "APPLY NOW": "APLICA AHORA",
                    "FIND A PARTNER": "ENCUENTRA UN SOCIO",
                    "BECOME A TORRE PARTNER": "CONVIÉRTETE EN TORRE PARTNER",
                    "If Torre predicted an 80%+ company culture fit, and the person leaves or has her/his employment terminated, you'll receive a pro-rated credit.": "Si Torre predice una adecuación del 80%+ con la cultura de la empresa y la persona se va o se termina su empleo, recibirás un crédito proporcional.",
                    "Connect with a Torre Partner": "Conecta con un Torre Partner",
                    "Looking for consulting services, managed recruiting, or need to customize Torre products? Torre partners can help.": "¿Buscas servicios de consultoría, contratación gestionada o necesitas personalizar productos de Torre? Los socios de Torre pueden ayudar.",
                    "Grow your business with Torre’s technology": "Haz crecer tu negocio con la tecnología de Torre",
                    torrePrimeHeadline: "Aumenta tu visibilidad",
                    torrePrimeSubheadline: "Incrementa las posibilidades de conseguir el trabajo perfecto para ti.",
                    torrePrimeCTA: "OBTÉN TORRE PRIME",
                    notificationDetailsHeadline: "Prioridad de notificación",
                    notificationDetailsDescription: "Recibe notificaciones sobre nuevas vacantes primero.",
                    exclusiveJobsHeadline: "Vacantes exclusivas",
                    exclusiveJobsDescription: "Accede a vacantes que otros candidatos no pueden.",
                    RankHigherDetailsHeadline: "Posiciónate mejor que el resto",
                    RankHigherDetailsSubheadline: "Sé priorizado al ser presentado a las empresas.",
                    "Join a community that uses Torre to increase revenue and build solutions and services for customers.": "Únete a una comunidad que utiliza Torre para aumentar sus ingresos y crear soluciones y servicios para los clientes.",
                    "Refer or resell": "Refiere o revende",
                    "Resell Torre’s products and earn significant margins.": "Revende los productos de Torre y obtén márgenes significativos.",
                    "Build or fulfill": "Construye o facilita",
                    "Build solutions on top of Torre’s technology or deliver managed services using it.": "Crea soluciones sobre la tecnología de Torre o brinda servicios utilizándola.",
                    "Reach more customers": "Llega a más clientes",
                    "Together, you and Torre provide innovative recruiting solutions, win deals, and deliver greater customer value.": "Juntos, tú y Torre brindan soluciones de reclutamiento innovadoras, cierran tratos, y brindan mayor valor al cliente.",
                    Innovate: "Innova",
                    "Innovate with the latest Torre technologies and programmatic recruitment to deliver personalized solutions to customers.": "Innova con las últimas tecnologías de Torre el y reclutamiento programático para ofrecer soluciones personalizadas a los clientes.",
                    "Get benefits": "Obtén beneficios",
                    "To support and enhance your success, we offer role-specific training, accreditations, and extensive sales and marketing benefits: everything you need to accelerate deals, market, and win with us as a team.": "Para impulsar y mejorar tu éxito, ofrecemos capacitación para funciones específicas, acreditaciones y amplios beneficios de ventas y marketing: todo lo que necesitas para acelerar acuerdos, comercializar y ganar con nosotros como equipo.",
                    "Become a partner": "Conviértete en Torre Partner",
                    BUY: "COMPRAR",
                    "SAVINGS CALCULATOR": "CALCULADORA DE AHORROS",
                    "PUBLISH JOB": "PUBLICAR TRABAJO",
                    "Set your daily budget. Torre will only charge a 20% agency fee.": "Establece tu presupuesto diario. Torre sólo cobrará una comisión de agencia del 20%.",
                    "Fees starting at 3%. Guarantee of up to one year.": "Tarifas desde el 3%. Garantía de hasta un año.",
                    "Fees starting at 6%, with up to a six-month guarantee.": "Tarifas a partir del 6%, con garantía de hasta seis meses.",
                    "You only pay when a candidate is hired": "Solo pagas si contratas algún candidato",
                    "RECRUIT WITH EMMA": "COMIENZA A RECLUTAR CON LA AYUDA DE EMMA",
                    "START RECRUITING WITH EMMA’S HELP": "COMIENZA A RECLUTAR CON LA AYUDA DE EMMA",
                    PARTNERS: "PARTNERS",
                    Pricing: "Precios",
                    PRICING: "PRECIOS",
                    "Calculate your savings": "Calcula tus ahorros",
                    savings_description: "Mejora la productividad de tu equipo de reclutamiento entre un 51% y un 82%.",
                    reachDemoPreview: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/v4/emma-reach-cover-es",
                    matchDemoPreview: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/demos/previews/match-es",
                    culturalDemoPreview: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/demos/previews/cultural-es",
                    reachDemoVideo: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/EmmaReachDemoInSpanishATSREC",
                    matchDemoVideo: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreMatchDemoInSpanishREC",
                    culturalDemoVideo: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreCulturalFitDemoInSpanishREC",
                    reachDemoTitle: "Mira el demo de Torre reach",
                    matchDemoTitle: "Mira el demo de Torre match",
                    culturalDemoTitle: "Mira el demo de Torre cultural fit",
                    "Torre Demo": "Torre Demo",
                    candidateDemoVideo: "https://res.cloudinary.com/torre-technologies-co/video/upload/q_auto/v1/origin/home-pages/demos/candidates/torreCandidateVideoES",
                    candidateDemoPreview: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/candidates/torreCandidateDemoCoverImageES",
                    "Candidate acquisition, screening, filtering, ranking, scheduling, and re-engagement": "Adquisición, selección, filtrado, clasificación, agendamiento y reactivación de candidatos",
                    "ATTRACT CANDIDATES": "ATRAE CANDIDATOS",
                    "PROCESS CANDIDATES": "PROCESA CANDIDATOS",
                    "DELEGATE YOUR RECRUITMENT": "HAZ OUTSOURCING DE TU RECLUTAMIENTO",
                    cta_publish_job: "PUBLICA UNA VACANTE (GRATIS)",
                    cta_publish_job_leyend: "Garantía de satisfacción del 100%",
                    cta_publish_job_for_companies_leyend: "Atrae candidatos de cientos de fuentes",
                    cta_process_candidates_leyend: "Screening, filtrado, clasificación, agendamiento, etc.",
                    cta_outsource_recruitment: "HAZLE OUTSOURCING A TU RECLUTAMIENTO",
                    "VIEW PRICING": "VE PRECIOS",
                    Earn: "Gana dinero",
                    emmaPageTitle: "La mujer que inspiró Torre, su nombre y su icono",
                    emmaPageSubtitle: "Cómo la inquebrantable fortaleza, determinación y resiliencia de María Emma Torrenegra dieron forma al nombre Torre y su compromiso de hacer que el trabajo sea satisfactorio para todos",
                    "20%+ of product sales - much higher commissions than anywhere else.": "Más del 20% en ventas de producto - comisiones mucho mas altas que en cualquier otro lugar.",
                    "Deal flow": "Deal flow",
                    "Grow your business with extensive sales and marketing benefits: everything you need to accelerate deals, market, and win with us as a team.": "Crece tu negocio con grandes ventas y beneficios de marketing: todo lo que necesites para acelerar tus deals, mercados y ganar en equipo junto a nosotros.",
                    "AI Technology": "Tecnología con IA",
                    "Get full access to Torre’s technology, automating 90% of recruitment. Use best-in-class technology to help fill roles for your clients.": "Ten acceso completo a la tegnologiaa de Torre, automatiza el 90% del reclutamiento. Usa la mejor tecnología en el mercado para ayudar a llenar vacantes para tus clientes.",
                    "partners-cost-description": "Este programa requiere una inversión inicial que cubre el costo de marketing, tecnología, entrenamiento y soporte. Todo enfocado en ayudarte a crecer tu negocio. ¡Si tú ganas, todos ganamos!",
                    testimonialSectionTitleCandidates: "Testimonios de candidatos",
                    testimonialSectionTitleCompanies: "Testimonios de empresas",
                    ats_price: "Desde $0 (gratis!)",
                    emmaReachPricingHeadline: "Establece tu presupuesto diario, y el reclutador con IA de Torre atraerá a los mejores candidatos de más de 100 fuentes."
                }
            }
        },
        587: function(e, o, t) {
            "use strict";
            o.a = {
                en: {
                    torreHomeDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreDemoInEnglishATSREC",
                    torreHomeDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/v4/torreHomeDemoCoverUrl-en",
                    torreHuntDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/q_auto/v1/origin/home-pages/demos/hunt/huntDemoVideoEN",
                    torreHuntDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/hunt/huntDemoCoverImgEN",
                    torreDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/q_auto/v1/origin/home-pages/demos/v2/torreDemoEnglish2",
                    torreDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/v2/torreDemoCoverEnglish",
                    osDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreOSDemoInEnglishREC",
                    osDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/v2/osDemoCoverEnglish",
                    osDemoTitle: "Watch the Torre OS demo",
                    atsDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreOSDemoInEnglishATSREC",
                    atsDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/v4/torre-ats-cover-en",
                    atsDemoTitle: "Watch the Torre ATS demo",
                    "SKIP INTRO": "SKIP INTRO",
                    emmaHistorySectionUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/ashanesnnho4p1nqdfsq"
                },
                es: {
                    torreHomeDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreDemoInSpanishATSREC",
                    torreHomeDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/v4/torreHomeDemoCoverUrl-es",
                    torreHuntDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/q_auto/v1/origin/home-pages/demos/hunt/huntDemoVideoES",
                    torreHuntDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/hunt/huntDemoCoverImgES",
                    torreDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/q_auto/v1/origin/home-pages/demos/v2/torreDemoSpanish2",
                    torreDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/demos/previews/torre-es",
                    osDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreOSDemoInSpanishREC",
                    osDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/v4/osDemoCoverUrl-es",
                    osDemoTitle: "Mira el demo de torreOS",
                    atsDemoUrl: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/demos/v4/TorreOSDemoInSpanishATSREC",
                    atsDemoCoverUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/demos/v4/torre-ats-cover-es",
                    atsDemoTitle: "Mira el demo de torreATS",
                    "SKIP INTRO": "OMITIR INTRO",
                    emmaHistorySectionUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/ashanesnnho4p1nqdfsq"
                }
            }
        },
        592: function(e, o, t) {
            "use strict";
            o.a = {
                pageNavigation: "iglu:com.torrelabs/HedaPageNavigation/jsonschema/1-0-3",
                UserIdentified: "iglu:com.torrelabs/UserIdentified/jsonschema/1-0-0",
                TrackingIdContext: "iglu:com.torrelabs/TrackingIdContext/jsonschema/2-0-0",
                UserContext: "iglu:com.torrelabs/UserContext/jsonschema/1-0-1",
                InteractionContext: "iglu:com.torrelabs/InteractionContext/jsonschema/3-0-1",
                HomepageInteracted: "iglu:com.torrelabs/HomepageInteracted/jsonschema/1-0-1",
                UserReferred: "iglu:com.torrelabs/UserReferred/jsonschema/4-0-0"
            }
        },
        611: function(e, o, t) {
            "use strict";
            t(47), t(40), t(31), t(60), t(37), t(68);
            var r = t(18),
                n = t(568),
                c = t(569),
                d = t(570),
                l = t(571),
                m = t(572),
                h = t(573),
                f = t(574),
                y = t(575),
                v = t(576),
                T = t(577),
                A = t(578),
                w = t(579),
                S = t(580),
                E = t(581),
                _ = t(582),
                I = t(583),
                R = t(353),
                k = t(584),
                C = t(585),
                j = t(586),
                O = t(587);

            function P(e, o) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    o && (r = r.filter((function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function D(e) {
                for (var o = 1; o < arguments.length; o++) {
                    var t = null != arguments[o] ? arguments[o] : {};
                    o % 2 ? P(Object(t), !0).forEach((function(o) {
                        Object(r.a)(e, o, t[o])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach((function(o) {
                        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o))
                    }))
                }
                return e
            }
            o.a = D(D(D(D(D(D(D(D(D(D(D(D(D(D(D(D(D(D(D(D(D({}, O.a.en), R.a.en), C.a.en), n.a.en), c.a.en), d.a.en), l.a.en), I.a.en), m.a.en), _.a.en), E.a.en), h.a.en), f.a.en), y.a.en), k.a.en), j.a.en), v.a.en), T.a.en), A.a.en), w.a.en), S.a.en)
        },
        619: function(e, o, t) {
            "use strict";
            t.r(o);
            t(65);
            var r = t(35),
                n = t(799),
                c = t(2),
                d = t(492),
                l = t(542),
                m = [],
                h = c.default.extend({
                    name: "snackbar-component",
                    components: {
                        MdButton: r.a,
                        MdSnackbar: n.a
                    },
                    data: function() {
                        return {
                            current: new l.a(""),
                            isOpen: !1
                        }
                    },
                    computed: {
                        snackBarHtmlElement: function() {
                            if (this.$refs.snackbar) return this.$refs.snackbar;
                            throw new Error("Snackbar not mounted")
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.$root.$on("flash-message", (function(o) {
                            e.isOpen ? e.current && !e.current.same(o) && m.push(o) : (e.current = o, e.$nextTick((function() {
                                e.open(), e.addMarkAsOpen()
                            })))
                        }))
                    },
                    methods: {
                        close: function() {
                            this.snackBarHtmlElement.close()
                        },
                        open: function() {
                            var e = this;
                            this.$nextTick((function() {
                                Object(d.a)(e, "snackbar").then((function(o) {
                                    e.snackBarHtmlElement.open()
                                }))
                            }))
                        },
                        handleAction: function() {
                            this.close(), this.current && this.current.action && this.current.action.handler()
                        },
                        handleOpening: function() {
                            this.isOpen = !0
                        },
                        handleClosing: function() {
                            var e = this;
                            setTimeout((function() {
                                e.isOpen = !1;
                                var o = m.shift();
                                e.removeMarkAsOpen(), o && (e.current = o, e.$nextTick((function() {
                                    e.open(), e.addMarkAsOpen()
                                })))
                            }), 500)
                        },
                        addMarkAsOpen: function() {
                            var e = document.querySelector("body");
                            e && e.classList.add("snack-bar-open")
                        },
                        removeMarkAsOpen: function() {
                            var e = document.querySelector("body");
                            e && e.classList.contains("snack-bar-open") && e.classList.remove("snack-bar-open")
                        }
                    }
                }),
                f = (t(701), t(101)),
                component = Object(f.a)(h, (function() {
                    var e = this,
                        o = e.$createElement,
                        t = e._self._c || o;
                    return t("md-snackbar", {
                        ref: "snackbar",
                        staticClass: "snackbar",
                        attrs: {
                            "md-position": "bottom center",
                            "md-duration": e.current.duration
                        },
                        on: {
                            open: e.handleOpening,
                            close: e.handleClosing
                        }
                    }, [t("span", [e._v(e._s(e.current.message))]), e._v(" "), e.current.action ? t("md-button", {
                        directives: [{
                            name: "track",
                            rawName: "v-track",
                            value: {
                                event: "executeSnackBarAction",
                                action: e.current.action.text
                            },
                            expression: "{event: 'executeSnackBarAction', action: current.action.text}"
                        }],
                        staticClass: "snackbar__action md-primary",
                        on: {
                            click: e.handleAction
                        }
                    }, [e._v("\n    " + e._s(e.current.action.text) + "\n  ")]) : e._e()], 1)
                }), [], !1, null, "4db6dc38", null);
            o.default = component.exports
        },
        620: function(e, o, t) {
            "use strict";
            var r = t(133),
                n = t(2).default.extend({
                    name: "theme-injector",
                    mixins: [r.a],
                    head: function() {
                        var e;
                        return {
                            htmlAttrs: {
                                class: [null !== (e = this.$tmdActiveTheme) && void 0 !== e ? e : "tmd-scrollbar"]
                            }
                        }
                    }
                }),
                c = t(101),
                component = Object(c.a)(n, (function() {
                    var e = this,
                        o = e.$createElement;
                    return (e._self._c || o)("div", [e._t("default")], 2)
                }), [], !1, null, null, null);
            o.a = component.exports
        },
        701: function(e, o, t) {
            "use strict";
            t(543)
        },
        702: function(e, o, t) {
            var r = t(177)(!1);
            r.push([e.i, ".snackbar__action[data-v-4db6dc38]{color:#827717!important}", ""]), e.exports = r
        },
        705: function(e, o, t) {
            var content = t(706);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, t(178).default)("15ea5a08", content, !0, {
                sourceMap: !1
            })
        },
        706: function(e, o, t) {
            var r = t(177)(!1);
            r.push([e.i, "", ""]), e.exports = r
        }
    }
]);