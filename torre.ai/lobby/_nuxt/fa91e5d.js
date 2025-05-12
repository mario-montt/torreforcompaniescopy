! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "23100c30-e1c5-492c-8ca4-3645b5ed1d6c", e._sentryDebugIdIdentifier = "sentry-dbid-23100c30-e1c5-492c-8ca4-3645b5ed1d6c")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        1013: function(e, t, o) {
            "use strict";
            o(895)
        },
        1014: function(e, t, o) {
            var r = o(177)(!1);
            r.push([e.i, ".page-content[data-v-09963fd6]{max-width:1920px;margin:0 auto}.dark-page[data-v-09963fd6]{background-color:#27292d}", ""]), e.exports = r
        },
        1017: function(e, t, o) {
            "use strict";
            (function(e, r) {
                o(45), o(74);
                t.a = {
                    serverMiddleware: [{
                        path: "/",
                        handler: "~/serverMiddleware/referral.js"
                    }, {
                        path: "/",
                        handler: "~/serverMiddleware/referrerCodeDeletion.js"
                    }, "~/middleware/trackingCookie.js"],
                    head: {
                        title: e.env.npm_package_name || "",
                        meta: [{
                            charset: "utf-8"
                        }, {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }, {
                            hid: "description",
                            name: "description",
                            content: e.env.npm_package_description || ""
                        }],
                        link: [{
                            rel: "icon",
                            type: "image/x-icon",
                            href: "/favicon.ico"
                        }, {
                            rel: "icon",
                            type: "image/png",
                            sizes: "48x48",
                            href: "/favicon.png"
                        }]
                    },
                    render: {
                        csp: {
                            reportOnly: "development" === e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE,
                            generateNonce: !0,
                            policies: {
                                "default-src": ["none"],
                                "script-src": ["'self'", "https://*.clarity.ms", "https://c.bing.com", "https://www.googletagmanager.com", "https://connect.facebook.net", "*.analytics.google.com", "https://doq9ljo73c49s.cloudfront.net", "https://*.firebaseio.com", "https://www.googleadservices.com", "https://googleads.g.doubleclick.net", "https://pagead2.googlesyndication.com", "https://*.amazonaws.com", "sentry.io", "*.sentry-cdn.com", "*.google-analytics.com", "*.logrocket.io", "https://sp.torre.co", "https://cdn.configcat.com", "https://cdn-global.configcat.com", "https://*.configcat.com", "https://www.facebook.com", "https://cdn.ravenjs.com", "https://google.com", "'strict-dynamic'", "blob:", "https://*.cloudflare.com", "https://js.stripe.com", "production" === e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE ? "https://torre.ai/lobby/_nuxt/" : "http://localhost:2000/lobby/_nuxt/"],
                                "connect-src": ["'self'", "*.torre.co", "https://ip2c.org/", "https://*.clarity.ms", "https://c.bing.com", "*.googletagmanager.com", "*.googleapis.com", "*.google.com", "https://*.gstatic.com", "https://connect.facebook.net", "https://cdn.configcat.com", "https://*.amazonaws.com", "*.google-analytics.com", "*.analytics.google.com", "https://pagead2.googlesyndication.com", "sentry.io", "https://*.sentry.io", "https://*.sentry-cdn.com", "https://doq9ljo73c49s.cloudfront.net", "https://*.torre.ai", "*.firebaseio.com", "wss://*.firebaseio.com", "*.doubleclick.net", "https://www.facebook.com", "https://www.facebook.com/tr", "https://sp.torre.co", "https://px.ads.linkedin.com", "https://www.googleadservices.com", "https://cdn.ravenjs.com", "propperties", "https://cdn-global.configcat.com", "https://*.configcat.com", "blob:", "data:", "https://*.cloudflare.com", "https://js.stripe.com", "https://calendly.com", "https://api.hsforms.com", e.env.VUE_APP_LOBBY_SNOWPLOW_COLLECTOR_URL || "http://localhost:9090", "production" === e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE ? "https://torre.ai/lobby/_nuxt/" : "http://localhost:2000/lobby/_nuxt/"],
                                "style-src": ["'self'", "'unsafe-inline'", "*.gstatic.com", "https://fonts.googleapis.com", "production" === e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE ? "" : "*.torre.ai"],
                                "img-src": ["'self'", "data: blob:", "https://*.clarity.ms", "https://c.bing.com", "https://res.cloudinary.com/", "https://www.facebook.com", "*.googletagmanager.com", "https://www.google.com", "*.googleusercontent.com", "www.googletagmanager.com", "https://*.google-analytics.com", "https://*.googletagmanager.com", "https://googleads.g.doubleclick.net", "https://www.google.com", "https://pagead2.googlesyndication.com", "https://www.googleadservices.com", "*.google.com", "*.google.com.ar", "*.google.com.co", "*.google.com.mx", "*.google.es", "*.google.com.do", "*.google.com.pe", "*.google.com.cr", "*.google.co.cr", "*.google.com.bo", "*.google.com.ve", "*.google.co.ve", "*.google.com.ec", "*.google.com.uy", "*.google.ca", "*.google.nl", "*.google.com.py", "*.google.fr", "*.google.com.br", "*.google.com.ni", "*.google.hn", "*.google.co.uk", "*.google.cl", "*.google.com.gt", "*.google.com.pr", "*.google.rs", "*.google.com.pk", "*.google.com.pa", "*.google.com.in", "*.google.pt", "*.google.com.ph", "*.google.ae", "*.google.com.ag", "*.google.com.sv", "*.google.com.mt", "*.linkedin.com", "*.google.co.in", "*.google.com.np"],
                                "media-src": ["'self'", "https://res.cloudinary.com/"],
                                "font-src": ["'self'", "data:", "https://fonts.gstatic.com", "https://fonts.googleapis.com", "https://cdn.goin.cloud", "https://use.typekit.net", "production" === e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE ? "https://torre.ai/lobby/_nuxt/" : "http://localhost:2000/lobby/_nuxt/"],
                                "frame-src": ["'self'", "https://js.stripe.com", "*.torre.ai", "https://*.firebaseio.com", "https://www.facebook.com", "*.google.com", "www.googletagmanager.com", "*.googleadservices.com", "*.googlesyndication.com", "*.doubleclick.net", "https://*.hubspot.com", e.env.VUE_APP_TORRE_APP_BASE_URL || "http://localhost:52525", "production" === e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE ? "" : "http://localhost:8880"],
                                "frame-ancestors": ["'self'", "*.torre.ai"],
                                "form-action": ["'self'"],
                                "report-uri": "https://o188050.ingest.us.sentry.io/api/6476244/security/?sentry_key=1bff1290a93d4c4893b78f75b4def46f&sentry_environment=".concat(e.env.SENTRY_ENVIRONMENT || "development")
                            }
                        }
                    },
                    security: {
                        additionalHeaders: !0
                    },
                    loading: !1,
                    css: ["~assets/scss/themeMixin.scss", "~layouts/default.scss"],
                    styleResources: {
                        scss: ["./assets/scss/*.scss"]
                    },
                    plugins: ["~/plugins/lazysizes.client.ts", "~/plugins/LazyLoad.ts", "~/plugins/Material.ts", "~/plugins/ServicesPlugin.ts", "~/plugins/VeeValidate.ts", {
                        src: "~/plugins/SetTransactionName.ts",
                        mode: "client"
                    }],
                    server: {
                        port: e.env.TORRE_APP_SERVER_PORT || 14e3,
                        host: "0.0.0.0"
                    },
                    buildModules: ["@nuxt/typescript-build", "@nuxtjs/style-resources", ["@nuxtjs/google-fonts", {
                        download: !0,
                        preload: !0,
                        preconnect: !0,
                        prefetch: !0,
                        display: "block",
                        useStylesheet: !0,
                        families: {
                            Mulish: {
                                wght: [400, 600, 700]
                            },
                            "Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0": !0
                        }
                    }]],
                    modules: ["~/modules/csp-module", "@dansmaculotte/nuxt-security", "@nuxtjs/axios", "@nuxtjs/device", "@nuxtjs/proxy", "@nuxtjs/sentry", "@torre-labs/microsoft-clarity", ["@nuxtjs/component-cache", {
                            max: 1e4,
                            maxAge: 36e5
                        }],
                        ["nuxt-i18n", {
                            vueI18nLoader: !0,
                            strategy: "prefix_and_default",
                            locales: [{
                                code: "en",
                                file: "en.js"
                            }, {
                                code: "es",
                                file: "es.js"
                            }],
                            lazy: !0,
                            langDir: "i18n/",
                            defaultLocale: "en",
                            vueI18n: {
                                fallbackLocale: "en"
                            },
                            detectBrowserLanguage: !1
                        }], "@torre-labs/enhanced-warnings"
                    ],
                    sentry: {
                        disabled: "disabled" === (e.env.TORRE_SENTRY_STATUS || "disabled"),
                        config: {
                            environment: e.env.SENTRY_ENVIRONMENT || "development",
                            ignoreErrors: ["The operation is insecure", "this.$route is undefined", "Cannot set headers after they are sent to the client"],
                            beforeSend: function(e) {
                                var t, o, r;
                                return (null === (t = e.request) || void 0 === t || null === (o = t.headers) || void 0 === o || null === (r = o["User-Agent"]) || void 0 === r ? void 0 : r.toLowerCase().includes("ghost inspector")) ? null : e
                            }
                        },
                        publishRelease: "enabled" === e.env.TORRE_SENTRY_PUBLISH_RELEASE && {
                            org: "torre-co",
                            project: "lobby",
                            cleanArtifacts: !0,
                            release: {
                                setCommits: {
                                    auto: !1,
                                    repo: "torre-labs/lobby",
                                    commit: e.env.TORRE_SENTRY_RELEASE_COMMIT_ID,
                                    ignoreMissing: !0
                                }
                            }
                        },
                        tracing: {
                            tracesSampleRate: .1,
                            vueOptions: {
                                tracing: !0,
                                tracingOptions: {
                                    hooks: ["activate", "mount", "update"],
                                    timeout: 5e3,
                                    trackComponents: !1
                                }
                            },
                            browserTracing: {
                                enableInp: !0
                            },
                            browserOptions: {}
                        }
                    },
                    axios: {
                        baseURL: "",
                        proxy: "production" !== e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE,
                        credentials: !1
                    },
                    proxy: "production" !== e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE ? {
                        "/api/referrals/": {
                            target: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:14500",
                            pathRewrite: e.env.VUE_APP_TORRE_BASE_URL ? {} : {
                                "^/api/referrals/": "/api/"
                            }
                        },
                        "/api/genome": {
                            target: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:3000",
                            changeOrigin: !1
                        },
                        "/app/download": {
                            target: e.env.VUE_APP_DEIMOS_URL || "http://localhost:8808"
                        },
                        "/api/suite/": {
                            target: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:9000",
                            pathRewrite: {
                                "^/api/suite/": "/api/"
                            }
                        },
                        "/api/subtorres/": {
                            target: "http://localhost:10000",
                            pathRewrite: {
                                "^/api/subtorres/": "/api/"
                            }
                        },
                        "/api/subscriptions/": {
                            target: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:15000",
                            pathRewrite: {
                                "^/api/subscriptions/": "/api/"
                            }
                        },
                        "/login": {
                            target: "http://localhost:7070"
                        },
                        "/logout": "http://localhost:7070",
                        "/silent-login": "http://localhost:7070",
                        "/callback": "http://localhost:7070",
                        "/pac4j-callback": "http://localhost:7070"
                    } : {},
                    env: {
                        apiUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:14000",
                        configCatSdkKey: e.env.VUE_APP_CONFIGCAT_SDK_KEY || "X3TZCP_q_EaDTc_sk55LFQ/t8PyrtbdMke2nUU8GIGhAg",
                        homepagesUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:2000",
                        remoterUrl: e.env.VUE_APP_EXPLORER_REMOTER_URL || "https.//remoter.com",
                        discoveryUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:2000",
                        raidenUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:2000",
                        searchUrl: e.env.VUE_APP_EXPLORER_SEARCH_URL || "http://localhost:2000",
                        bioUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:3000",
                        hubspotBaseUrl: e.env.VUE_APP_EXPLORER_HUBSPOT_BASE_URL || "https://torre.ai",
                        selfUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:11000",
                        starrgateUrl: e.env.VUE_APP_EXPLORER_STARRGATE_URL || "https://accounts.torre.ai",
                        torreAboutUrl: e.env.VUE_APP_EXPLORER_TORRE_ABOUT_BASE_URL || "https://torre.ai/about-torre",
                        protocolUrl: e.env.VUE_APP_EXPLORER_TORRE_PROTOCOL_BASE_URL || "https://torre.io",
                        rootDomain: e.env.VUE_APP_ROOT_DOMAIN || "localhost",
                        starrgateCliendId: e.env.VUE_APP_EXPLORER_STARRGATE_CLIENT_ID || "541493",
                        defaultLocale: e.env.VUE_APP_EXPLORER_DEFAULT_LOCALE || "en",
                        availableLocales: e.env.VUE_APP_EXPLORER_AVAILABLE_LOCALES || "en,es",
                        subtorresMobileOffset: e.env.VUE_APP_EXPLORER_SUBTORRES_MOBILE_OFFSET || 10,
                        subtorresDesktopOffset: e.env.VUE_APP_EXPLORER_SUBTORRES_DESKTOP_OFFSET || 20,
                        subtorresMobileTotal: e.env.VUE_APP_EXPLORER_SUBTORRES_MOBILE_TOTAL || 10,
                        subtorresDesktopTotal: e.env.VUE_APP_EXPLORER_SUBTORRES_DESKTOP_TOTAL || 20,
                        navigatorSubtorresMaxOpportunities: e.env.VUE_APP_SUBTORRES_NAVIGATOR_MAX_OPPORTUNITIES || 40,
                        imgixUrl: "https://torre.imgix.net",
                        cortanaBaseUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:14001",
                        jarvisBaseUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:15000",
                        bioBaseUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:3000",
                        snowplowCollector: e.env.VUE_APP_LOBBY_SNOWPLOW_COLLECTOR_URL || "http://baraddur.torre.co",
                        pageViewContextSchema: e.env.VUE_APP_LOBBY_SNOWPLOW_PAGEVIEW_CONTEXT_SCHEMA || "iglu:com.torrelabs/PageViewContext/jsonschema/1-0-0",
                        trackingIdContextSchema: e.env.VUE_APP_LOBBY_SNOWPLOW_TRACKING_ID_CONTEXT_SCHEMA || "iglu:com.torrelabs/TrackingIdContext/jsonschema/2-0-0",
                        referrerContextSchema: e.env.VUE_APP_LOBBY_SNOWPLOW_REFERRER_CONTEXT_SCHEMA || "iglu:com.torrelabs/ReferrerContext/jsonschema/1-0-0",
                        appSnowplowId: e.env.VUE_APP_LOBBY_SNOW_PLOW_ID || "lobby-development",
                        environmentMode: e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE || "development",
                        defaultSpanishAccountManager: e.env.VUE_APP_DEFAULT_SPANISH_ACCOUNT_MANAGER || "70712",
                        defaultEnglishAccountManager: e.env.VUE_APP_DEFAULT_ENGLISH_ACCOUNT_MANAGER || "68338",
                        supportAccountGgId: e.env.VUE_APP_SUPPORT_ACCOUNT_GG_ID || "1438488",
                        emmaGgId: e.env.VUE_APP_EMMA_GG_ID || "16180",
                        webInteractionsLambdaUrl: e.env.WEB_INTERACTIONS_LAMBDA_URL || "https://8b7vk9y0be.execute-api.us-west-2.amazonaws.com/default/web_interactions"
                    },
                    publicRuntimeConfig: {
                        axios: {
                            browserBaseURL: ""
                        },
                        torreBaseUrl: e.env.VUE_APP_TORRE_BASE_URL || "https://torre.ai",
                        torreAppBaseUrl: e.env.VUE_APP_TORRE_APP_BASE_URL || "http://localhost:52525",
                        homepagesUrl: e.env.VUE_APP_TORRE_BASE_URL || "https://torre.ai",
                        cortanaBaseUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:14001",
                        jarvisBaseUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:15000",
                        bioBaseUrl: e.env.VUE_APP_TORRE_BASE_URL || "http://localhost:3000",
                        configCatSdkKey: e.env.VUE_APP_CONFIGCAT_SDK_KEY || "X3TZCP_q_EaDTc_sk55LFQ/t8PyrtbdMke2nUU8GIGhAg",
                        stripeApiKey: e.env.VUE_APP_STRIPE_KEY || "pk_test_LNDb2zyszLfQ8UDwkG55hE0Q",
                        defaultLocale: e.env.VUE_APP_EXPLORER_DEFAULT_LOCALE || "en",
                        availableLocales: e.env.VUE_APP_EXPLORER_AVAILABLE_LOCALES || "en,es",
                        firebaseDbUrl: e.env.VUE_APP_EXPLORER_UI_FIREBASE_DB_URL || "https://original-scout-207014-2b5c9.firebaseio.com/",
                        phobosBaseUrl: "production" !== e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE ? "http://localhost:52525" : "/app",
                        deimosBaseUrl: e.env.VUE_APP_DEIMOS_URL || "http://localhost:8808",
                        rootDomain: e.env.VUE_APP_ROOT_DOMAIN || "localhost",
                        snowplowCollector: e.env.VUE_APP_LOBBY_SNOWPLOW_COLLECTOR_URL || "http://localhost:9090",
                        appSnowplowId: e.env.VUE_APP_LOBBY_SNOW_PLOW_ID || "lobby-development",
                        defaultSpanishAccountManager: e.env.VUE_APP_DEFAULT_SPANISH_ACCOUNT_MANAGER || "1438488",
                        defaultEnglishAccountManager: e.env.VUE_APP_DEFAULT_ENGLISH_ACCOUNT_MANAGER || "1438488",
                        supportAccountGgId: e.env.VUE_APP_SUPPORT_ACCOUNT_GG_ID || "1438488",
                        starrgateUrl: e.env.VUE_APP_EXPLORER_STARRGATE_URL || "https://accounts.torre.ai",
                        starrgateCliendId: e.env.VUE_APP_EXPLORER_STARRGATE_CLIENT_ID || "541493",
                        emmaGgId: e.env.VUE_APP_EMMA_GG_ID || "16180",
                        webInteractionsLambdaUrl: e.env.WEB_INTERACTIONS_LAMBDA_URL || "https://8b7vk9y0be.execute-api.us-west-2.amazonaws.com/default/web_interactions"
                    },
                    privateRuntimeConfig: {
                        axios: {
                            baseURL: e.env.VUE_APP_DISCOVERY_SSR_API_URL || "http://localhost:9000"
                        }
                    },
                    router: {
                        extendRoutes: function(e, t) {
                            e.push({
                                name: "home",
                                path: "/",
                                component: t(r, "pages/home-page/index.vue")
                            }), e.push({
                                name: "jobmatchingmodel",
                                path: "/jobmatchingmodel",
                                component: t(r, "pages/jobmatchingmodel/index.vue")
                            })
                        },
                        middleware: "StoreLocale"
                    },
                    build: {
                        transpile: ["@torre-labs/design-system", "@torre-labs/material", "@torre-labs/paywall-module", "lodash-es/debounce", "lodash-es/cloneDeep", "lodash-es/isArray", "lodash-es/isEqual", "lodash-es/reduce", "lodash-es/throttle", "lodash-es/uniqueId", "vue-material-slider"],
                        optimization: {
                            minimize: !0,
                            splitChunks: {
                                chunks: "all",
                                maxSize: 244e3
                            }
                        },
                        publicPath: "production" === e.env.VUE_APP_LOBBY_ENVIRONMENT_MODE ? "https://torre.ai/lobby/_nuxt/" : "/lobby/_nuxt/",
                        build: {
                            extend: function(e, t) {
                                t.loaders.vue.transformAssetUrls.LazyImage = ["src"]
                            }
                        }
                    }
                }
            }).call(this, o(203), "/")
        },
        812: function(e, t, o) {
            "use strict";
            var r;
            o.d(t, "a", (function() {
                    return r
                })),
                function(e) {
                    e.CANDIDATE = "candidate", e.TALENT_SEEKER = "talent_seeker", e.PARTNER = "partner", e.INVESTOR = "investor", e.UNDEFINED = "undefined", e.ABOUT = "about", e.TESTIMONIAL = "testimonial"
                }(r || (r = {}))
        },
        830: function(e, t, o) {
            "use strict";
            t.a = {
                emmaSection: {
                    title: "emmaStorySectionTitle",
                    ctaText: "emmaStorySectionCta",
                    imageUrl: "emmaHistorySectionUrl",
                    imageAlt: "Emma story section",
                    ctaUrl: "/emmapage",
                    mdElevation: "05",
                    mdTheme: "dark"
                },
                noDiscriminationSection: {
                    title: "noDiscriminationSectionTitle",
                    ctaText: "noDiscriminationSectionCta",
                    imageUrl: "noDiscriminationSectionImageUrl",
                    imageAlt: "No discrimination section",
                    ctaUrl: "/recruitmentmoreaccurate",
                    mdElevation: "05",
                    mdTheme: "dark"
                }
            }
        },
        838: function(e, t, o) {
            "use strict";
            o.d(t, "a", (function() {
                return n
            })), o.d(t, "b", (function() {
                return c
            }));
            var r = o(64),
                n = (o(15), o(33), o(34), o(324), o(52), o(148), o(32), o(120), o(83), o(75), function(e, t) {
                    var o = [],
                        r = function(e) {
                            e && o.push(e)
                        },
                        n = e.name.split(" ");
                    return r("email=".concat(e.email)), r(n && n.length > 0 ? "firstName=".concat(n[0]) : ""), r(n && n.length > 1 ? "lastName=".concat(n[1]) : ""), r("Partner=".concat(t)), o.length ? "?".concat(o.join("&")) : ""
                });

            function c(e) {
                var t = ["utm_source", "utm_medium", "utm_campaign"].map((function(t) {
                        return e.query[t]
                    })),
                    o = Object(r.a)(t, 3),
                    n = o[0],
                    c = o[1],
                    l = o[2];
                return n || c || l ? {
                    utmSource: n,
                    utmMedium: c,
                    utmCampaign: l
                } : void 0
            }
        },
        848: function(e, t, o) {
            "use strict";
            o.d(t, "b", (function() {
                return ro
            })), o.d(t, "a", (function() {
                return no
            }));
            o(28), o(40), o(112);
            var r = o(23),
                n = (r.c.ATSTS, "ats_headline"),
                c = "ats_description",
                l = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/pipeline",
                d = {
                    id: "automated_messages_details",
                    code: 220800,
                    headline: "Automated messages",
                    subheadline: "",
                    description: "Set automated messages for candidates to be triggered at different stages of the recruitment process - automatic personalization and delivery via Torre Messenger, email, text messaging, and WhatsApp.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.45,c_scale/v1/origin/home-pages/feature-graphics/messenger",
                    mainGraphic: ""
                },
                h = {
                    id: "automatic_resume_parsing",
                    code: 220150,
                    headline: "Automatic résumé parsing",
                    subheadline: "",
                    description: "Torre relies on much more than just résumés, but they are a starting point. Torre’s AI parses résumés. When something isn’t clear, it automatically checks with the candidates for added accuracy.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.3,c_scale/v1/origin/home-pages/feature-graphics/genome-PDF",
                    mainGraphic: ""
                },
                m = {
                    id: "candidate_acquisition_analytics",
                    code: 210950,
                    headline: "Candidate acquisition analytics",
                    subheadline: "",
                    description: "Get the insights you need to optimize the ROI of your candidate acquisition budget.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/channels",
                    mainGraphic: ""
                },
                _ = {
                    id: "torre-candidates-databases",
                    headline: "Auto-build your candidate database",
                    code: r.c.CandidateDatabasesTS,
                    subheadline: "",
                    description: "Fix your leaking bucket. Build your candidate databases intelligently. And better yet, automatically.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/multiple-people-search-results",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_80,w_0.7,c_scale/v1/origin/home-pages/main-graphics/multiple-people-search-results"
                },
                f = {
                    id: "torre-candidate-reactivation",
                    code: r.c.CandidateReactivationTS,
                    headline: "Let AI re-engage your candidate database",
                    subheadline: "",
                    description: "We’ll save you time. Via multiple channels, Torre engages previous applicants and referrals to keep their data updated and invite them to future job openings that match.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/signaled-team-genome-job-alert",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/main-graphics/signaled-team-genome-job-alert"
                },
                y = {
                    id: "candidate_sampling",
                    code: 210650,
                    headline: "candidate_sampling_title",
                    subheadline: "",
                    description: "candidate_sampling_description",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_80,w_0.5/v1/origin/home-pages/feature-graphics/cdp4hmn9dfb3uaqyhvzq",
                    mainGraphic: ""
                },
                v = {
                    id: "candidate_team_matching_details",
                    code: 220400,
                    headline: "Candidate-to-team matching",
                    subheadline: "",
                    description: "Torre does a lot more than mere candidate-to-job matching. We also match candidates with teams and leaders using 40+ factors.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/MR-culture-fit",
                    mainGraphic: ""
                },
                E = {
                    id: "torre_carrer_sites",
                    code: r.c.CareerSitesTS,
                    headline: "Career pages",
                    subheadline: "",
                    description: "Don’t let your team’s awesomeness go unnoticed. Use Torre Genomes to provide insight into the qualities you and your team have that will attract candidates.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/career-pages",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.8,c_scale/v1/origin/home-pages/main-graphics/career-pages"
                },
                w = {
                    id: "compensation_expectation_details",
                    code: 220750,
                    headline: "Compensation expectations per candidate",
                    subheadline: "",
                    description: "When you offer a compensation range, Torre asks candidates to choose a specific value.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/pipeline-cards",
                    mainGraphic: ""
                },
                T = {
                    id: "culture-fit",
                    code: r.c.CultureFitTS,
                    headline: "Two-way cultural fit",
                    subheadline: "",
                    action: {
                        id: "culture-fit-for-ts-view-sample",
                        text: "VIEW SAMPLE",
                        leyend: "",
                        href: "/culturalfit"
                    },
                    description: "Pseudo-science stops here. Torre analyzes 40+ professional behavioral traits scientifically and automatically.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/Cultural-fit",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.9,c_scale/v1/origin/home-pages/main-graphics/cultural-fit-report"
                },
                S = {
                    id: "customize_your_pipeline_details",
                    code: 220370,
                    headline: "Customize your pipeline",
                    subheadline: "",
                    description: "Add or remove stages to manage your candidates. You do you.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.3,c_scale/v1/origin/home-pages/feature-graphics/pipeline",
                    mainGraphic: ""
                },
                A = {
                    id: "detailed_candidate_reports",
                    code: 221125,
                    headline: "Detailed candidate reports",
                    subheadline: "",
                    description: "Downloadable PDFs per candidate with executive summaries, matches, mismatches, and useful details.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.3,c_scale/v1/origin/home-pages/feature-graphics/genome-PDF",
                    mainGraphic: ""
                },
                k = {
                    id: "discover_connected_candidates",
                    code: 220312,
                    headline: "Discover candidates close to your team",
                    subheadline: "",
                    action: {
                        id: "discover_connected_candidates_connect",
                        text: "CONNECT YOUR CONTACTS",
                        leyend: "",
                        href: "/connections"
                    },
                    description: "Let AI reveal candidates connected to your team or those your team wants to connect with.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,fl_awebp,q_auto,w_0.37,c_scale/v1701186115/origin/home-pages/feature-graphics/connection-highlights",
                    mainGraphic: ""
                },
                R = {
                    id: "discover_hidden_gems",
                    code: 210858,
                    headline: "Let AI discover hidden gems in your database",
                    subheadline: "",
                    description: "No manual searches required. Let AI automatically suggest previous applicants for new job openings.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/suggested-candidate-DB",
                    mainGraphic: ""
                },
                P = {
                    id: "first_recruitment_Operating_system",
                    code: 200225,
                    headline: "The first Recruitment Operating System (ROS)",
                    subheadline: "",
                    description: "With over 82 unique functionalities, Torre is the only solution that automates all aspects of recruiting.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.3,c_scale/v1/origin/home-pages/feature-graphics/job-post",
                    mainGraphic: ""
                },
                G = {
                    id: "full-time_flexible_or_internship_roles",
                    code: 210550,
                    headline: "Ability to handle full-time, flexible, or internship roles",
                    subheadline: "",
                    description: "Torre knows how to find, engage, filter, and rank candidates for most job types.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.45,c_scale/v1/origin/home-pages/feature-graphics/job-search-TOO",
                    mainGraphic: ""
                },
                O = {
                    id: "highly_customizable_filters",
                    code: 210500,
                    headline: "Highly customizable criteria",
                    subheadline: "",
                    description: "Find the candidates you want who want to be wanted.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.35,c_scale/v1702394591/origin/home-pages/feature-graphics/people-search-filters",
                    mainGraphic: ""
                },
                I = {
                    id: "import_existing_candidate_database",
                    code: 220100,
                    headline: "Import your existing candidate database",
                    subheadline: "",
                    description: "In bulk or one-by-one, import candidates at any stage of your recruitment process.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/import-pipeline",
                    mainGraphic: ""
                },
                U = {
                    id: "torre-interview-scheduling",
                    code: r.c.InterviewSchedulingTS,
                    headline: "Auto-scheduling of interviews and offers",
                    subheadline: "",
                    description: "Because life is too short to manually schedule meetings.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/meeting-scheduler",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.9,c_scale/v1/origin/home-pages/main-graphics/interview-scheduler"
                },
                L = {
                    id: "torre-job-distribution",
                    code: r.c.JobDistributionTS,
                    headline: "15+ channels to attract candidates",
                    subheadline: "",
                    description: "torre_job_distribution_description",
                    breakLine: !1,
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.3,c_scale/v1/origin/home-pages/feature-graphics/job-distribution-2",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/job-distribution-2"
                },
                D = {
                    id: "let-ai-alert-previous-applicants-details",
                    code: 218056,
                    headline: "Let AI alert previous applicants of new openings",
                    subheadline: "",
                    description: "Torre automatically identifies candidates in your database and notifies them of new openings that match.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/job-alert",
                    mainGraphic: ""
                },
                x = {
                    id: "make_an_engaging_visual_expression",
                    code: 210859,
                    headline: "Visually attractive job openings",
                    subheadline: "",
                    description: "Add a video to your job openings to attract more and better candidates.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/job-post-video",
                    mainGraphic: ""
                },
                N = {
                    id: "match-and-rank-for-ts",
                    code: r.c.MatchAndRankTS,
                    headline: "Let AI surface the top candidates for you",
                    subheadline: "",
                    description: "Torre replicates human intuition using 100+ factors to screen, filter, and rank candidates automatically and accurately.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/candidate-rankings",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90,w_0.9,c_scale/v1/origin/home-pages/main-graphics/candidate-ranking"
                },
                C = {
                    id: "messenger_ts",
                    code: r.c.MessengerTS,
                    headline: "Never miss an important message with Torre Messenger",
                    subheadline: "",
                    action: {
                        id: "messenger_ts_download_it",
                        text: "DOWNLOAD IT",
                        leyend: "",
                        href: "/companion/download"
                    },
                    description: "Torre Messenger is a dedicated messaging app that is fully integrated with Torre’s flows.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_auto/v1/origin/home-pages/feature-graphics/221900",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/221000"
                },
                j = {
                    id: "nine_types_of_AI_match",
                    code: 200251,
                    headline: "nine_types_of_ai_title",
                    subheadline: "",
                    description: "decision_tree_learning",
                    action: {
                        id: "nine_types_of_AI_match_learn_more",
                        text: "LEARN MORE",
                        leyend: "",
                        href: "/jobmatchingmodel"
                    },
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_auto/v1/origin/home-pages/feature-graphics/200251",
                    mainGraphic: ""
                },
                M = {
                    id: "note-and-message-sharing-details",
                    code: 221200,
                    headline: "Centralize communication and collaborate with your team",
                    subheadline: "",
                    description: "No need to use multiple communication channels. Share favorite candidate notes and messages with your colleagues using Torre.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/notes",
                    mainGraphic: ""
                },
                V = {
                    id: "on_going_job_posts",
                    code: 211e3,
                    headline: "Ongoing job posts",
                    subheadline: "",
                    description: "No need to keep reposting. For vacancies always needing candidates, Torre offers evergreen job openings.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.3,c_scale/v1/origin/home-pages/feature-graphics/job-post",
                    mainGraphic: ""
                },
                B = {
                    id: "powerful-analytics",
                    code: 232e3,
                    headline: "Powerful analytics",
                    subheadline: "",
                    description: "From acquisition channels to funnel stats to industry benchmark comparisons, Torre delivers the info you need for sound decision-making.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.25,c_scale/v1/origin/home-pages/feature-graphics/stats-powerful-analytics",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/main-graphics/stats-powerful-analytics"
                },
                W = {
                    id: "powerful_feedback_loops",
                    code: 200275,
                    headline: "Powerful feedback loops",
                    subheadline: "",
                    description: "Using separate tools leads to poor data sharing, wide funnels, and waste. With Torre, data loops lead to narrow funnels, the speed of automation, and little to no waste.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1736545926/origin/home-pages/feature-graphics/ql5hz37lqjvpt0l0j3ye.png",
                    mainGraphic: ""
                },
                H = {
                    id: "professional-genomes",
                    code: 200240,
                    headline: "Candidate profiles with hundreds of data points",
                    subheadline: "",
                    action: {
                        id: "professiona_genomes_view",
                        text: "VISIT ONE",
                        leyend: "",
                        href: "/torrenegra"
                    },
                    description: "Résumés aren’t enough. Professional genomes include thousands of data points such as experience, hard and soft skills, preferences, interests and non-interests, psychometrics, professional behavior, self-awareness, learning speed and capabilities, contact networks, reference checks, recommendations, certifications, and more.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/pro-genome",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/main-graphics/pro-genome"
                },
                z = {
                    id: "proficiency_trumps_experience",
                    code: 210400,
                    headline: "proficiency_trumps_experience_title",
                    subheadline: "",
                    description: "Sometimes experience means little more than time spent. Let Torre help you identify candidates with less experience but great potential.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/proficiencies",
                    mainGraphic: ""
                },
                F = {
                    id: "psychometrics_ts",
                    code: r.c.PsychometricsTS,
                    headline: "Next-gen psychometrics",
                    subheadline: "",
                    action: {
                        id: "psychometrics_ts_view_sample",
                        text: "VIEW SAMPLE",
                        leyend: "",
                        href: "/torrenegra#behavior"
                    },
                    description: "40+ dimensions of candidate professional behavior, backed by rigorous scientific research.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/behavioral-traits",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,fl_awebp,q_90/v1701305597/origin/home-pages/main-graphics/behavioral-traits"
                },
                Y = {
                    id: "recruit-programatically",
                    code: 200250,
                    headline: "Recruit programmatically",
                    subheadline: "",
                    description: "No manual labor. Let objectivity, data, and automation do the hard work for you - fast and accurately. Hello, programmatic recruitment!",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.4,c_scale/v1701355103/origin/home-pages/feature-graphics/MR",
                    mainGraphic: ""
                },
                K = {
                    id: "reference_check_via_bot_details",
                    code: 221e3,
                    headline: "Reference checks via recruiter bots",
                    subheadline: "",
                    description: "Torre’s conversational AI will get it done for you even before you review candidates.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.45,c_scale/v1/origin/home-pages/feature-graphics/reference-check",
                    mainGraphic: ""
                },
                X = {
                    id: "referral_programs",
                    code: r.c.ReferralProgramsTS,
                    headline: "referral_programs_title",
                    subheadline: "",
                    description: "Leverage your network. Torre makes it engaging for your colleagues to refer applicants and find out who the top referrers are.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.7,c_scale/v1/origin/home-pages/feature-graphics/top-referrers",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.8,c_scale/v1/origin/home-pages/main-graphics/top-referrers"
                },
                J = {
                    id: "rule_out_candidates_details",
                    code: 221150,
                    headline: "Keep candidates informed with one-click feedback",
                    subheadline: "",
                    description: "By not keeping your candidates in the dark, you'll improve your employer brand quickly and effectively.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.45,c_scale/v1/origin/home-pages/feature-graphics/one-click-rule-out-reasons",
                    mainGraphic: ""
                },
                $ = {
                    id: "salary-calculation-for-talent-seekers",
                    code: r.c.SalaryCalculationTS,
                    headline: "Simple salary calculator",
                    subheadline: "",
                    description: "Determine what to offer based on actual compensation expectations of millions of candidates.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/salary-graphic",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90,w_0.9,c_scale/v1/origin/home-pages/main-graphics/salary-graphic"
                },
                Q = {
                    id: "satisfaction_surveys",
                    code: 222e3,
                    headline: "Improve your recruitment with satisfaction surveys",
                    subheadline: "",
                    description: "Everyone makes mistakes. With automated satisfaction surveys sent to candidates, you can find out where to improve.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.8,c_scale/v1/origin/home-pages/feature-graphics/satisfaction-survey",
                    mainGraphic: ""
                },
                Z = {
                    id: "screening_auto_assessment_details",
                    code: 220350,
                    headline: "Perform automatic candidate screening",
                    subheadline: "",
                    description: "Artificial intelligence analyses and ranks candidates’ answers to screening questions.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/ranking-screening-question",
                    mainGraphic: ""
                },
                ee = {
                    id: "screening_question_previous_details",
                    code: 220375,
                    headline: "Send screening question to previous applicants",
                    subheadline: "",
                    description: "When you add a new screening question, you can let Torre automatically ask all active applicants to answer it.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.65,c_scale/v1/origin/home-pages/feature-graphics/new-screening-question-notification",
                    mainGraphic: ""
                },
                te = {
                    id: "top_notch_candidate_experience",
                    code: 220050,
                    headline: "Top-notch candidate experience",
                    subheadline: "",
                    description: "With carefully crafted automation, Torre delivers a great experience, whether candidates are a match, dropped automatically, or ruled out manually.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/disqualification-reason-notification",
                    mainGraphic: ""
                },
                oe = {
                    id: "torre_automatic_message_follow_up",
                    code: 221950,
                    headline: "Let Torre automatically follow up on your behalf",
                    subheadline: "",
                    description: "Whenever you message a candidate, Torre follows up on your behalf via email, WhatsApp, and SMS. And the same happens when Torre's AI recruiter messages the candidate.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_80,w_0.7/v1/origin/home-pages/feature-graphics/221950",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90,w_0.9/v1/origin/home-pages/feature-graphics/221950"
                },
                ae = {
                    id: "transparent-algorithms",
                    code: 220450,
                    headline: "Transparent algorithms",
                    subheadline: "",
                    action: {
                        id: "transparent_algorithms_learn_how",
                        text: "LEARN HOW TORRE’S ALGORITHMS WORK",
                        leyend: "",
                        href: "/jobmatchingmodel"
                    },
                    description: "Don’t trust black-box artificial intelligence. Torre is committed to unequaled radical transparency.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/220450",
                    mainGraphic: ""
                },
                ie = {
                    id: "video_screening_questions_details",
                    code: 220700,
                    headline: "Pre-interview candidates with video screening questions",
                    subheadline: "",
                    description: "Save time. Pre-interview your candidates. You can even ask questions in your own videos.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/video-screening-question",
                    mainGraphic: ""
                },
                re = o(812),
                ne = o(1017),
                se = {
                    chatWithUs: {
                        id: "chat_wit_us",
                        text: "CHAT WITH US",
                        leyend: "",
                        href: "/app/messenger/conversations/".concat(ne.a.env.emmaGgId, "?source=chat-with-us?flow=chat_with_us"),
                        external: !0
                    }
                },
                ce = {
                    id: "automatic-on-off-channels-details",
                    code: 210750,
                    headline: "Automatic on/off optimization of acquisition channels",
                    subheadline: "",
                    description: "Save time and money by allowing Torre to turn your acquisition channels on or off as required so you maximize your ROI.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/on-off-channels-v3",
                    mainGraphic: ""
                },
                le = {
                    id: "pre-apply-details",
                    code: 210890,
                    headline: "Let candidates pre-apply",
                    subheadline: "",
                    description: "Don't lose out on great candidates. Torre allows them to sign up and get notified next time you post a job that matches their preferences.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/pre-apply",
                    mainGraphic: ""
                },
                de = {
                    id: "automatic_candidate_filtering",
                    code: 220200,
                    headline: "Filter candidates automatically",
                    subheadline: "",
                    description: "You won't need to review non-matching candidates. Torre will filter them out as they apply - and still provide them with a worthwhile experience.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/gatekeeper",
                    mainGraphic: ""
                },
                he = {
                    id: "compensation-double-checks-details",
                    code: 220250,
                    headline: "Perform automatic compensation double-checks for candidates",
                    subheadline: "",
                    description: "Avoid misunderstandings when making an offer. Torre checks with candidates whether the compensation being offered is attractive.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/compensation-double-checks",
                    mainGraphic: ""
                },
                pe = {
                    id: "stop_discrimination_details",
                    code: 220425,
                    headline: "Stop discrimination",
                    subheadline: "",
                    description: "Torre and Emma screen candidates without regard for race, color, religion, sex, age, national origin, and physical disability.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/stop-discrimination",
                    mainGraphic: ""
                },
                ue = {
                    id: "torre-skill-graph",
                    code: r.c.SkillGraphTS,
                    headline: "65,000 skills. 1,000,000+ relationships.",
                    subheadline: "",
                    description: "No guessing. Torre’s skill graph knows how all professional skills relate to each other and improves matching automatically.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/skillgraph",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1736547134/origin/home-pages/feature-graphics/krc6jyqtyugdq4rlqp2d.svg"
                },
                me = {
                    id: "analytics_help_desk",
                    code: 221130,
                    headline: "Dedicated analytics team",
                    subheadline: "",
                    description: "Don't rely exclusively on generic dashboards. Get unlimited insights and custom reports by asking your dedicated Torre data analyst anything you want.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1736776867/origin/home-pages/feature-graphics/dk24y99icllscnxooy9b.png",
                    mainGraphic: ""
                },
                ge = {
                    id: "dedicated_talent_advisor",
                    code: 200300,
                    headline: "dedicated_talent_advisor_title",
                    subheadline: "",
                    description: "dedicated_talent_advisor_description",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_80,w_0.7/v1/origin/home-pages/feature-graphics/chat_phone_videoconference",
                    mainGraphic: ""
                },
                _e = {
                    id: "powerful-database-search",
                    code: 210854,
                    headline: "Powerful candidate database search",
                    subheadline: "",
                    description: "Browse your candidate database using dozens of criteria.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.60,c_scale/v1/origin/home-pages/feature-graphics/210854",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.9,c_scale/v1/origin/home-pages/main-graphics/210854"
                },
                fe = {
                    id: "torre_ats",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "ats",
                        title: "ATS",
                        subtitle: "",
                        headline: n,
                        subheadline: c,
                        actions: [{
                            id: "torre_ats_try_it",
                            text: "TRY IT OUT",
                            leyend: "It's free",
                            href: "/checkout/torre-ats"
                        }, {
                            id: "torre_ats_watch_demo",
                            text: "WATCH A DEMO",
                            leyend: "",
                            href: "#demo-video"
                        }, {
                            id: "torre_ats_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=os&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: l
                    },
                    included: [],
                    investors: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [me, d, ce, de, h, m, _, f, y, v, E, he, w, T, S, ge, A, k, R, P, G, O, I, U, L, D, x, N, C, j, M, V, B, _e, W, le, H, z, F, Y, K, X, J, $, Q, Z, ee, ue, te, oe, ae, ie, pe],
                    algorithmsModel: !0,
                    demoSection: {
                        demoVideo: "atsDemoUrl",
                        demoCover: "atsDemoCoverUrl",
                        demoTitle: "atsDemoTitle",
                        demoAction: !0
                    },
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/ats"
                },
                be = {
                    id: "atsdemo",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Torre ATS Demo",
                        subtitle: "",
                        headline: "Let AI do the recruitment for you",
                        subheadline: "",
                        actions: [],
                        price: "",
                        mainGraphic: ""
                    },
                    included: [],
                    features: [],
                    footer: !0,
                    demoPage: {
                        demoName: "ATS Demo",
                        demoVideo: "atsDemoUrl",
                        demoCover: "atsDemoCoverUrl",
                        demoTitle: "Let AI do the recruitment for you",
                        productName: "Torre ats",
                        productLink: "/ats",
                        productLogo: "ats"
                    },
                    hideAboutSection: !0,
                    hideManifesto: !0,
                    openGraphImage: "atsDemoCoverUrl"
                },
                ye = (o(200), o(494)),
                ve = {
                    id: "one_billion_candidates",
                    code: 210300,
                    headline: "1+ billion candidates",
                    subheadline: "",
                    description: "Tap into one of the largest talent databases ever compiled.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90/v1/origin/home-pages/feature-graphics/people-search-skill",
                    mainGraphic: ""
                },
                Ee = {
                    id: "over-20-plus-integration",
                    code: 231e3,
                    headline: "integrationDetailsHeadline",
                    subheadline: "",
                    description: "integrationDetailsDescription",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90,w_0.45,c_scale/v1/origin/home-pages/feature-graphics/import-pipeline",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,q_90,w_0.7/v1/origin/home-pages/main-graphics/import-pipeline"
                },
                we = {
                    id: "t_candidates_dbs",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Candidates databases",
                        subtitle: "",
                        headline: _.headline,
                        subheadline: _.description,
                        actions: [{
                            id: "torre_candidates_databases_watch_demo",
                            text: "WATCH A DEMO",
                            leyend: "",
                            href: "#demo-video"
                        }, {
                            id: "torre_candidates_databases_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=os&utm_campaign=dft",
                            external: !0
                        }, {
                            id: "torre_candidates_databases_try_it",
                            text: "TRY IT OUT",
                            leyend: "",
                            href: "/post/job-post-onboarding"
                        }],
                        price: "",
                        mainGraphic: _.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    }))],
                    investors: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [de, h, m, v, w, k, G, I, D, N, M, ve, Ee, le, H, z, F, K, J, Q, ee, ue, oe, ae],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/candidate-databases"
                },
                Te = {
                    id: "t_candidate_react",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Candidate reactivation",
                        subtitle: "",
                        headline: f.headline,
                        subheadline: f.description,
                        actions: [{
                            id: "torre_candidate_reactivation_contact_sales_button",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=candidate_reactivation&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: f.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    })), ye.a.talentSeekers.find((function(e) {
                        return "emma-reach" === e.id
                    }))],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [_, v, k, R, G, O, D, N, Q, ee, ue, oe],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/reactivation"
                },
                Se = {
                    id: "torre_carrer_sites",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Career Sites",
                        subtitle: "",
                        headline: E.headline,
                        subheadline: E.description,
                        actions: [{
                            id: "torre_carrer_sites_create",
                            text: "CREATE YOUR CAREER PAGE",
                            leyend: "",
                            href: "/create-team-genome"
                        }],
                        price: "It's free",
                        mainGraphic: E.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    }))],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [G, _, f, le],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/careers"
                },
                Ae = {
                    id: "culture_fit_for_candidates",
                    code: r.b.CultureFitForCandidates,
                    headline: "Two-way cultural fit",
                    subheadline: "",
                    action: {
                        id: "culture_fit_for_candidates_try_it",
                        text: "TRY IT",
                        leyend: "",
                        href: "/culturalfit"
                    },
                    description: "Torre analyzes 40+ professional behavioral traits scientifically and automatically.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/behavioral-traits-team",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90/v1/origin/home-pages/main-graphics/behavioral-traits-team"
                },
                ke = {
                    id: "psychometrics_for_candidates",
                    code: r.b.PsychometricsForCandidates,
                    headline: "Find out what others think of you",
                    subheadline: "",
                    action: {
                        id: "psychometrics_for_candidates_get_started",
                        text: "GET STARTED",
                        leyend: "",
                        href: "/culturalfit?view=behavioral-traits&action=return-compatibility"
                    },
                    description: "40 professional traits. 100% science, 0% BS. Opinions differ. See by how much they differ from yours.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/behavioral-traits",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90/v1/origin/home-pages/main-graphics/behavioral-traits"
                },
                Re = {
                    id: "transparent-algorithms-candidate",
                    code: 120175,
                    headline: "Transparent algorithms",
                    subheadline: "",
                    action: {
                        id: "transparent_algorithms_learn_how",
                        text: "LEARN HOW TORRE’S ALGORITHMS WORK",
                        leyend: "",
                        href: "/jobmatchingmodel"
                    },
                    description: "No AI black boxes here. For each application you submit, you’ll know where you stand every step of the way.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/220450",
                    mainGraphic: ""
                },
                Pe = {
                    id: "t_culture_fit_fc",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "culture-fit",
                        title: "Torre Cultural Fit",
                        subtitle: "",
                        headline: Ae.headline,
                        subheadline: Ae.description,
                        actions: [{
                            id: "torre_culture_fit_for_candidates_try_it",
                            text: "TRY IT",
                            leyend: "",
                            href: "/culturalfit"
                        }],
                        price: "It's free",
                        mainGraphic: Ae.featureGraphic
                    },
                    included: [],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    demoSection: {
                        demoVideo: "candidateDemoVideo",
                        demoCover: "candidateDemoPreview",
                        demoTitle: "Let AI do the job hunting for you",
                        demoAction: !0,
                        hideCallToAction: !0
                    },
                    features: [ke, Re],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/cultural-fit"
                },
                Ge = {
                    id: "torre_culture_fit_ts",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "culture-fit",
                        title: "Torre Cultural Fit",
                        subtitle: "",
                        headline: T.headline,
                        subheadline: T.description,
                        actions: [{
                            id: "torre_culture_fit_ts_get_started",
                            text: "GET STARTED",
                            leyend: "",
                            href: "/culturalfit?view=behavioral-traits&action=return-compatibility"
                        }, {
                            id: "torre_culture_fit_ts_view_sample",
                            text: "VIEW SAMPLE",
                            leyend: "",
                            href: "/culturalfit"
                        }],
                        price: "It's free",
                        mainGraphic: T.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    }))],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [v, T, A, G, Y, Z, ee, ae, pe],
                    demoSection: {
                        demoVideo: "culturalDemoVideo",
                        demoCover: "culturalDemoPreview",
                        demoTitle: "culturalDemoTitle",
                        demoAction: !0
                    },
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/cultural-fit"
                },
                Oe = {
                    id: "candidates-ranking",
                    code: 120150,
                    headline: "Candidate rankings",
                    subheadline: "",
                    description: "Don’t guess how well your application is doing. Find out how you rank against other candidates. Dozens of factors explained.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.35,c_scale/v1/origin/home-pages/feature-graphics/candidate-ranking",
                    mainGraphic: ""
                },
                Ie = {
                    id: "connection-highlights",
                    headline: "Discover jobs via connections",
                    code: 110300,
                    subheadline: "",
                    action: {
                        id: "connection_highlights_connect",
                        text: "CONNECT YOUR CONTACTS",
                        leyend: "",
                        href: "/connections"
                    },
                    description: "Let AI notify you of matching jobs posted by your contacts or their companies.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.36,c_scale/v1/origin/home-pages/feature-graphics/connection-highlights",
                    mainGraphic: ""
                },
                Ue = {
                    id: "job-alerts",
                    code: 110200,
                    headline: "Accurate job alerts",
                    subheadline: "",
                    description: "No spam. Torre's algorithms quickly learn what you like and how frequently you want to be informed.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/job-alert",
                    mainGraphic: ""
                },
                Le = {
                    id: "job-opening-stats",
                    code: 120100,
                    headline: "Backstage access to job stats",
                    subheadline: "",
                    description: "When applying, hope is not a strategy. We’ll show you detailed stats about available roles and the companies behind them.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90,w_0.3,c_scale/v1/origin/home-pages/feature-graphics/job-post-stats",
                    mainGraphic: ""
                },
                De = {
                    id: "let-jobs-find-you",
                    code: 100150,
                    headline: "Let jobs find you",
                    subheadline: "",
                    description: "Receive relevant opportunities recruiters and AI pitch your way.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.35,c_scale/v1/origin/home-pages/feature-graphics/people-search-filters",
                    mainGraphic: ""
                },
                xe = (r.b.EmmaForCandidates, "Meet Emma - your self-driving AI recruiter"),
                Ne = "Let her find the perfect job for you",
                Ce = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90/v1/origin/home-pages/feature-graphics/maria-chat",
                qe = {
                    id: "match-and-rank-for-candidates",
                    code: r.b.MatchAndRankForCandidates,
                    headline: "Find the perfect job",
                    subheadline: "",
                    description: "Let AI do the job filtering for you using hundreds of matching factors.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.41,c_scale/v1/origin/home-pages/feature-graphics/MR",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.75,c_scale/v1701104035/origin/home-pages/main-graphics/MR"
                },
                je = {
                    id: "messenger_for_candidates",
                    code: r.b.MessengerForCandidates,
                    headline: "Clear messaging",
                    subheadline: "",
                    action: {
                        id: "messenger_for_candidates_download_it",
                        text: "DOWNLOAD IT",
                        leyend: "",
                        href: "/companion/download"
                    },
                    description: "Messages and job notifications in real-time.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.6,c_scale/v1/origin/home-pages/feature-graphics/messenger",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.9/v1/origin/home-pages/main-graphics/message-to-candidate"
                },
                Me = {
                    id: "who_got_the_job",
                    code: 120500,
                    headline: "Find out who got the job if you didn’t",
                    subheadline: "",
                    description: "Sometimes you don’t get the job, and often you’d like to know why. In most cases, we’ll tell you.",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90/v1/origin/home-pages/feature-graphics/notification-who-got-the-job",
                    mainGraphic: ""
                },
                Ve = {
                    id: "thp_maria",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "emma",
                        title: "Emma by Torre for candidates",
                        subtitle: "",
                        headline: xe,
                        subheadline: Ne,
                        actions: [{
                            id: "torre_home_emma_for_candidates_contact_sales_button",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=emma_candidates&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: Ce
                    },
                    demoSection: {
                        demoVideo: "candidateDemoVideo",
                        demoCover: "candidateDemoPreview",
                        demoTitle: "Let AI do the job hunting for you",
                        demoAction: !0,
                        hideCallToAction: !0
                    },
                    included: [],
                    features: [Oe, Ie, Ae, Ue, Le, De, qe, je, Re, Me],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/maria"
                },
                Be = {
                    id: "emma",
                    code: r.c.EmmaTS,
                    headline: "Let Emma, Torre's AI recruiter, engage candidates for you",
                    subheadline: "",
                    description: "emma_for_companies_description",
                    featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/emma-chat",
                    mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.7,c_scale/v1/origin/home-pages/main-graphics/emma-chat"
                },
                We = {
                    id: "torre_home_emma",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "emma-de-torre",
                        title: "Emma by Torre for companies",
                        subtitle: "",
                        headline: Be.headline,
                        subheadline: Be.description,
                        actions: [{
                            id: "torre_emma_page_for_talent_seekers_post_a_job_button",
                            text: "PUBLISH A JOB",
                            leyend: "",
                            href: "/post/onboarding"
                        }],
                        pricingLegend: "Recruiting 10+ people per year?",
                        priceHrefText: "Check out",
                        price: "TORRE OS",
                        priceHref: "/os",
                        mainGraphic: Be.featureGraphic
                    },
                    included: [],
                    features: [de, m, _, f, y, v, w, T, A, k, R, P, G, O, I, U, L, D, N, C, j, ve, V, Ee, B, W, z, F, {
                        id: "recruiting_on_demand",
                        code: 200200,
                        headline: "Recruiting on-demand",
                        subheadline: "",
                        description: "Increase your recruiting bandwidth only when you need to.",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.25,c_scale/v1/origin/home-pages/feature-graphics/a-slider",
                        mainGraphic: ""
                    }, Y, K, X, $, Q, Z, ee, te, oe, ae],
                    investors: !0,
                    testimonials: !0,
                    sharkTank: !0,
                    algorithmsModel: !0,
                    footer: !0,
                    howItWorks: !0,
                    numericalBenefits: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/emma-de-torre"
                },
                He = {
                    id: "torre_home_page_fair",
                    type: re.a.UNDEFINED,
                    header: {
                        logo: "",
                        title: "",
                        subtitle: "",
                        headline: "FAIR:",
                        subheadline: "Fair Artificial Intelligence in Recruiting Manifesto",
                        actions: [],
                        price: "",
                        mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.3,c_scale/v1/origin/home-pages/main-graphics/justice-icon-light-bg",
                        simple: !0
                    },
                    included: [],
                    features: [],
                    hideAboutSection: !0,
                    manifesto: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/default"
                },
                ze = o(830),
                Fe = (r.b.JobMarketPlaceForCandidates, "Millions of jobs. Remote-first, hybrid, and local."),
                Ye = "",
                Ke = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/job-search-location",
                Xe = (r.b.TorrePrimeForCandidates, "torrePrimeSubheadline"),
                Je = {
                    id: "thp_for_candidates",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "torre",
                        title: "Torre",
                        subtitle: "for candidates",
                        headline: "Let AI do the job hunting for you",
                        subheadline: "",
                        actions: [{
                            id: "torre_home_page_for_candidates_find_jobs",
                            text: "FIND JOBS",
                            leyend: "",
                            href: "/search/jobs",
                            params: "intent=home-for-candidates:find-jobs"
                        }, {
                            id: "torre_home_page_for_candidates_professional_genome",
                            text: "BUILD YOUR PROFESSIONAL GENOME",
                            leyend: "",
                            href: "/_a/your-bio"
                        }],
                        price: "",
                        video: !0,
                        mainGraphic: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717165004/origin/home-pages/common/emma-webm-new.webm",
                        mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717167220/origin/home-pages/common/emma-transparent-safari.mp4"
                    },
                    isRoot: !0,
                    included: [],
                    features: [],
                    investors: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !1,
                    footer: !0,
                    demoSection: {
                        demoVideo: "candidateDemoVideo",
                        demoCover: "candidateDemoPreview",
                        demoTitle: "Let AI do the job hunting for you",
                        demoAction: !0,
                        hideCallToAction: !0
                    },
                    noDiscriminationSection: ze.a.noDiscriminationSection,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/candidates-home",
                    aboutProducts: [{
                        logo: "job-marketplace",
                        logoUrl: "/jobmarketplaceforcandidates",
                        pricingHeadline: Fe
                    }, {
                        logo: "prime",
                        logoUrl: "/prime",
                        pricingHeadline: Xe
                    }]
                },
                $e = "emma-reach",
                Qe = (r.c.ReachTS, "emmaReachHeadlline"),
                Ze = "emmaReachDescription",
                et = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/main-graphics/say02lvmvrkzlfdwpfak",
                tt = (r.c.JobMarketplaceTS, "Vetted candidates. Millions of them."),
                ot = "jobMarketPlaceDescription",
                at = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/job-search-location",
                it = {
                    id: "thp_for_ts",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "torre",
                        title: "Torre",
                        subtitle: "for companies",
                        headline: "Let AI do the recruitment for you",
                        subheadline: "",
                        actions: [{
                            id: "torre_home_page_for_talent_seekers_post_job_button",
                            text: "cta_publish_job",
                            leyend: "cta_publish_job_for_companies_leyend",
                            href: "/post/onboarding"
                        }, {
                            id: "torre_home_page_for_talent_seekers_process_candidates_button",
                            text: "PROCESS CANDIDATES",
                            leyend: "cta_process_candidates_leyend",
                            href: "/os"
                        }, {
                            id: "torre_home_page_for_talent_seekers_view_pricing_button",
                            text: "VIEW PRICING",
                            leyend: "",
                            href: "/pricing"
                        }],
                        price: "",
                        video: !0,
                        mainGraphic: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717165004/origin/home-pages/common/emma-webm-new.webm",
                        mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717167220/origin/home-pages/common/emma-transparent-safari.mp4"
                    },
                    isRoot: !0,
                    included: [],
                    features: [],
                    investors: !0,
                    testimonials: !0,
                    demoSection: {
                        demoVideo: "torreDemoUrl",
                        demoCover: "torreDemoCoverUrl",
                        demoTitle: "torreDemoCoverTitle",
                        demoAction: !0
                    },
                    noDiscriminationSection: ze.a.noDiscriminationSection,
                    numericalBenefitsElevation: "3",
                    numericalBenefits: !0,
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/home-for-ts",
                    aboutProducts: [{
                        logo: "job-marketplace",
                        logoUrl: "/jobmarketplace",
                        pricingHeadline: ot
                    }, {
                        logo: $e,
                        logoUrl: "/reach",
                        pricingHeadline: Ze
                    }, {
                        logo: "ats",
                        logoUrl: "/ats",
                        pricingHeadline: c
                    }]
                },
                nt = {
                    id: "torre_home_page",
                    type: re.a.UNDEFINED,
                    header: {
                        logo: "",
                        title: "Torre",
                        subtitle: "",
                        headline: "home_page_headline",
                        subheadline: "home_page_subheadline",
                        actions: [{
                            id: "torre_home_page_post_job_button",
                            text: "homePagePostJobButton",
                            leyend: "It's free",
                            href: "/post/onboarding"
                        }, {
                            id: "torre_home_page_find_jobs_button",
                            text: "homePageFindJobsButton",
                            leyend: "Also free",
                            href: "/search/jobs"
                        }],
                        price: "",
                        video: !0,
                        variation: 4,
                        mainGraphic: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/main-graphics/efgnvzj8afykbnhnhcmp",
                        mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/main-graphics/efgnvzj8afykbnhnhcmp"
                    },
                    included: [],
                    features: [],
                    investors: !0,
                    testimonials: !1,
                    funnel: !1,
                    sharkTank: !1,
                    noDiscriminationSection: ze.a.noDiscriminationSection,
                    footer: !0,
                    hideDemo: !1,
                    demoSection: {
                        demoVideo: "torreHomeDemoUrl",
                        demoCover: "torreHomeDemoCoverUrl",
                        demoTitle: "Our strategy in 1 minute",
                        demoAction: !0,
                        hideSkipButton: !0,
                        hideCallToAction: !0
                    },
                    aboutProducts: [{
                        logo: "job-marketplace",
                        logoUrl: "/jobmarketplace",
                        pricingHeadline: ot
                    }, {
                        logo: $e,
                        logoUrl: "/reach",
                        pricingHeadline: Ze
                    }, {
                        logo: "ats",
                        logoUrl: "/ats",
                        pricingHeadline: c
                    }],
                    mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/main-graphics/efgnvzj8afykbnhnhcmp",
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/home"
                },
                st = (r.c.HuntTS, "Outsource your recruitment to Emma"),
                ct = "Outsource your recruitment to Torre to make it faster, more accurate, and reduce costs.",
                lt = {
                    id: "hunt",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "hunt",
                        title: "Torre Hunt",
                        subtitle: "",
                        headline: st,
                        subheadline: ct,
                        actions: [{
                            id: "torre_hunt_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=rpo&utm_campaign=dft",
                            external: !0
                        }],
                        video: !0,
                        variation: 2,
                        price: "You only pay when a candidate is hired",
                        mainGraphic: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1736959648/origin/home-pages/common/tbnabqx4crflf45lzgku.mp4",
                        mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1736959648/origin/home-pages/common/tbnabqx4crflf45lzgku.mp4"
                    },
                    included: [],
                    investors: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    algorithmsModel: !0,
                    features: [d, {
                        id: "torre-candidate-team-match",
                        code: 200290,
                        headline: "torre_candidate_team_match_title",
                        subheadline: "",
                        description: "torre_candidate_team_match_description",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/Cultural-fit",
                        mainGraphic: ""
                    }, he, k, {
                        id: "torre-download-detailed-reports",
                        code: 2201125,
                        headline: "Download detailed reports for each candidate",
                        subheadline: "",
                        description: "Downloadable PDFs for each candidate with executive summaries, matches, mismatches, and valuable details.",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/detailedreports",
                        mainGraphic: ""
                    }, Be, G, {
                        id: "torre-funnel-analytics",
                        code: 2302e3,
                        headline: "Funnel analytics",
                        subheadline: "",
                        description: "From acquisition channels to funnel stats, Torre delivers the info you need for sound decision-making.",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/funnelanalytics",
                        mainGraphic: ""
                    }, U, L, x, N, C, j, M, ve, Ee, W, H, F, Y, K, Q, Z, ue, ie, pe],
                    demoSection: {
                        demoVideo: "torreHuntDemoUrl",
                        demoCover: "torreHuntDemoCoverUrl",
                        demoTitle: "Let AI do the job hunting for you",
                        demoAction: !0
                    },
                    hideDemo: !1,
                    footer: !0,
                    howItWorks: !1,
                    numericalBenefits: !0,
                    mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1736959648/origin/home-pages/common/tbnabqx4crflf45lzgku.mp4",
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/torreRPO"
                },
                ht = {
                    id: "t_iv_scheduling",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Interview scheduling",
                        subtitle: "",
                        headline: U.headline,
                        subheadline: U.description,
                        actions: [{
                            id: "torre_interview_scheduling_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=interview_scheduling&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: U.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    }))],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [M, oe],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/interview-scheduling"
                },
                pt = {
                    id: "t_job_distribution",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Job distribution",
                        subtitle: "",
                        headline: L.headline,
                        subheadline: L.description,
                        actions: [{
                            id: "torre_job_distribution_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=job_distribution&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: L.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    })), ye.a.talentSeekers.find((function(e) {
                        return "emma-reach" === e.id
                    }))],
                    investors: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [ce, m, _, f, y, E, k, R, G, D, ve, Ee, X, te, oe],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/job-distribution-2"
                },
                ut = {
                    id: "tjm_for_candidates",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "job-marketplace",
                        title: "Torre Job Marketplace",
                        subtitle: "",
                        headline: Fe,
                        subheadline: Ye,
                        actions: [{
                            id: "torre_job_marketplace_for_candidates_find_jobs",
                            text: "FIND JOBS",
                            leyend: "",
                            href: "/search/jobs",
                            params: "intent=job-marketplace-for-candidates:find-jobs"
                        }],
                        price: "It's free",
                        mainGraphic: Ke
                    },
                    included: [],
                    investors: !0,
                    testimonials: !0,
                    algorithmsModel: !0,
                    funnel: !1,
                    sharkTank: !0,
                    demoSection: {
                        demoVideo: "candidateDemoVideo",
                        demoCover: "candidateDemoPreview",
                        demoTitle: "Let AI do the job hunting for you",
                        demoAction: !0,
                        hideCallToAction: !0
                    },
                    features: [Oe, Ie, Ae, Ue, Le, De, qe, je, Re, Me],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/job-marketplace-candidates"
                },
                mt = {
                    id: "tjm_for_ts",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "job-marketplace",
                        title: "Torre Job Marketplace",
                        subtitle: "",
                        headline: tt,
                        subheadline: ot,
                        actions: [{
                            id: "torre_job_marketplace_for_ts_contact_sales",
                            text: "cta_publish_job",
                            leyend: "",
                            href: "/post/onboarding"
                        }],
                        price: "",
                        mainGraphic: at
                    },
                    included: [],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [de, _, y, v, he, w, T, A, k, G, O, U, D, x, N, C, j, M, V, Ee, W, le, H, z, F, Y, K, J, $, Q, Z, ee, ue, te, oe, ae, ie],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/job-marketplace-candidates"
                },
                gt = (r.b.LanguageTestingForCandidates, "Quick language proficiency testing"),
                _t = "AI-powered. Now we’re talking!",
                ft = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/Language-tests",
                bt = {
                    id: "t_language_tests_fc",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "",
                        title: "Language testing",
                        subtitle: "",
                        headline: gt,
                        subheadline: _t,
                        demoSection: {
                            demoVideo: "candidateDemoVideo",
                            demoCover: "candidateDemoPreview",
                            demoTitle: "Let AI do the job hunting for you",
                            demoAction: !0,
                            hideCallToAction: !0
                        },
                        actions: [{
                            id: "torre_language_testing_for_candidates_join_the_waitlist",
                            text: "JOIN THE WAITLIST",
                            leyend: "",
                            href: ""
                        }],
                        price: "",
                        mainGraphic: ft
                    },
                    included: [],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/language-testing"
                },
                yt = (r.c.LanguageTestingTS, "Quick language proficiency testing"),
                vt = "AI-powered. Now we’re talking!",
                Et = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/Language-tests",
                wt = {
                    id: "t_language_tests_ts",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Language testing",
                        subtitle: "",
                        headline: yt,
                        subheadline: vt,
                        actions: [{
                            id: "torre_language_testing_ts_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=language_testing&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: Et
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    })), ye.a.talentSeekers.find((function(e) {
                        return "emma-reach" === e.id
                    }))],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [oe],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/language-testing"
                },
                Tt = {
                    id: "th_m&r_candidates",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "match-beta",
                        title: "Torre Match",
                        subtitle: "",
                        headline: qe.headline,
                        subheadline: qe.description,
                        actions: [{
                            id: "torre_home_match_and_rank_candidates_find_jobs",
                            text: "FIND JOBS",
                            leyend: "",
                            href: "/search/jobs",
                            params: "intent=match-and-rank-for-candidates:find-jobs"
                        }],
                        price: "It's free",
                        mainGraphic: qe.featureGraphic
                    },
                    included: [],
                    features: [ue, Oe, Ae, Re, Me],
                    demoSection: {
                        demoVideo: "candidateDemoVideo",
                        demoCover: "candidateDemoPreview",
                        demoTitle: "Let AI do the job hunting for you",
                        demoAction: !0,
                        hideCallToAction: !0
                    },
                    investors: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    algorithmsModel: !0,
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/torre-match-and-rank-candidates"
                },
                St = {
                    id: "th_m&r_ts",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "match-beta",
                        title: "Torre Match",
                        subtitle: "",
                        headline: N.headline,
                        subheadline: N.description,
                        actions: [{
                            id: "torre_home_match_and_rank_ts_watch_demo",
                            text: "WATCH A DEMO",
                            leyend: "",
                            href: "#demo-video"
                        }, {
                            id: "torre_home_match_and_rank_ts_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=os&utm_campaign=dft",
                            external: !0
                        }, {
                            id: "torre_home_match_and_rank_ts_try_it",
                            text: "TRY IT OUT",
                            leyend: "",
                            href: "/post/job-post-onboarding"
                        }],
                        price: "",
                        mainGraphic: N.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    }))],
                    features: [de, h, he, y, v, w, T, A, P, G, O, j, W, H, z, F, Y, K, Z, ee, ue, te, ae, pe],
                    demoSection: {
                        demoVideo: "matchDemoVideo",
                        demoCover: "matchDemoPreview",
                        demoTitle: "matchDemoTitle",
                        demoAction: !0
                    },
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    numericalBenefits: !0,
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/torre-match-and-rank-ts"
                },
                At = {
                    id: "t_messenger_fc",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "messenger",
                        title: "Torre Messenger",
                        subtitle: "",
                        headline: je.headline,
                        subheadline: je.description,
                        actions: [{
                            id: "torre_messenger_for_candidates_download_it",
                            text: "DOWNLOAD IT",
                            leyend: "",
                            href: "/companion/download"
                        }],
                        price: "It's free",
                        mainGraphic: je.featureGraphic
                    },
                    demoSection: {
                        demoVideo: "candidateDemoVideo",
                        demoCover: "candidateDemoPreview",
                        demoTitle: "Let AI do the job hunting for you",
                        demoAction: !0,
                        hideCallToAction: !0
                    },
                    included: [],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/messenger-for-candidates"
                },
                kt = {
                    id: "torre_messenger_ts",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "messenger",
                        title: "Torre Messenger",
                        subtitle: "",
                        headline: C.headline,
                        subheadline: C.description,
                        actions: [{
                            id: "torre_messenger_for_talent_seekers_download_it",
                            text: "DOWNLOAD IT",
                            leyend: "",
                            href: "/companion/download"
                        }, {
                            id: "torre_messenger_for_talent_seekers_chat_with_us",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=messengers&utm_campaign=dft",
                            external: !0
                        }],
                        price: "It's free",
                        mainGraphic: C.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    }))],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [d, U, M, oe],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/messenger-for-candidates"
                },
                Rt = (r.b.GenomeForCandidates, "Tomorrow’s résumé today"),
                Pt = "No repetitive application processes. Create a professional genome that showcases your experience, skills, interests, behavioral traits, psychometrics, recommendations, connections, reference checks, portfolio, and more in an engaging and attractive way.",
                Gt = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/pro-genome",
                Ot = {
                    id: "torre_home_genome",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "",
                        title: "Professional genomes",
                        subtitle: "",
                        headline: Rt,
                        subheadline: Pt,
                        actions: [{
                            id: "torre_home_genome_create_your_genome",
                            text: "CREATE YOUR GENOME",
                            leyend: "",
                            href: "/_a/your-bio"
                        }],
                        price: "It's free",
                        mainGraphic: Gt
                    },
                    included: [],
                    features: [De, ke],
                    demoSection: {
                        demoVideo: "candidateDemoVideo",
                        demoCover: "candidateDemoPreview",
                        demoTitle: "Let AI do the job hunting for you",
                        demoAction: !0,
                        hideCallToAction: !0
                    },
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/torre-genome"
                },
                It = (r.c.OSTS, "os_page_headline"),
                Ut = "os_page_description",
                Lt = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.3,c_scale/v1/origin/home-pages/feature-graphics/pipeline",
                Dt = {
                    id: "torre_os",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "os",
                        title: "Torre OS",
                        subtitle: "",
                        headline: It,
                        subheadline: Ut,
                        actions: [{
                            id: "torre_os_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=os&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/pipeline",
                        mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/pipeline",
                        featureGraphic: Lt
                    },
                    included: [],
                    features: [me, d, ce, de, h, m, _, f, y, v, E, he, w, T, S, ge, A, k, R, P, G, O, I, U, L, D, x, N, C, j, M, V, Ee, B, _e, W, le, H, z, F, Y, K, X, J, $, Q, Z, ee, ue, te, oe, ae, ie, pe],
                    investors: !0,
                    testimonials: !0,
                    algorithmsModel: !0,
                    sharkTank: !0,
                    howItWorks: !0,
                    numericalBenefits: !0,
                    footer: !0,
                    mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/f_auto:video,q_auto/v1/origin/home-pages/main-graphics/efgnvzj8afykbnhnhcmp",
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/os"
                },
                xt = {
                    id: "t_psychometrics_fc",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "",
                        title: "Psychometrics",
                        subtitle: "",
                        headline: ke.headline,
                        subheadline: ke.description,
                        actions: [{
                            id: "torre_psychometrics_for_candidates_get_started",
                            text: "GET STARTED",
                            leyend: "",
                            href: "/culturalfit?view=behavioral-traits&action=return-compatibility"
                        }],
                        price: "It's free",
                        mainGraphic: ke.featureGraphic
                    },
                    demoSection: {
                        demoVideo: "candidateDemoVideo",
                        demoCover: "candidateDemoPreview",
                        demoTitle: "Let AI do the job hunting for you",
                        demoAction: !0,
                        hideCallToAction: !0
                    },
                    included: [],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [Ae],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/psychometrics-candidates"
                },
                Nt = {
                    id: "t_psychometrics_ts",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Psychometrics",
                        subtitle: "",
                        headline: F.headline,
                        subheadline: F.description,
                        actions: [{
                            id: "torre_psychometrics_ts_view_sample",
                            text: "VIEW SAMPLE",
                            leyend: "",
                            href: "/torrenegra#behavior"
                        }, {
                            id: "torre_psychometrics_ts_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=psychometrics&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: F.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    }))],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [Y, G, A, v, ae, T, M, pe],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/psychometrics-candidates"
                },
                Ct = {
                    id: "torre-reach",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "emma-reach-torre",
                        title: "Emma Reach",
                        subtitle: "",
                        headline: Qe,
                        subheadline: Ze,
                        actions: [{
                            id: "torre_home_page_for_reach_post_job_button",
                            text: "cta_publish_job",
                            leyend: "cta_publish_job_leyend",
                            href: "/post/onboarding"
                        }, {
                            id: "torre_reach_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=reach&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: et
                    },
                    included: [],
                    investors: !0,
                    testimonials: !0,
                    algorithmsModel: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [de, ce, h, m, f, y, he, w, G, O, L, D, j, ve, V, Ee, W, z, Y, $, ue, te, ie, pe],
                    demoSection: {
                        demoVideo: "reachDemoVideo",
                        demoCover: "reachDemoPreview",
                        demoTitle: "reachDemoTitle",
                        demoAction: !0
                    },
                    footer: !0,
                    howItWorks: !0,
                    numericalBenefits: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/j1p3hurfiwn2ztgaelg1"
                },
                qt = {
                    id: "moreaccuraterecruitment",
                    type: re.a.UNDEFINED,
                    isRoot: !1,
                    header: {
                        logo: "",
                        title: "More accurate recruitment",
                        subtitle: "",
                        headline: "ai_recruitment_title",
                        subheadline: "",
                        cta: "",
                        actions: [],
                        price: "",
                        mainGraphic: "",
                        simple: !0
                    },
                    included: [],
                    features: [],
                    introduction: {
                        quote: {
                            text: "any_sufficiently_advanced_technology",
                            author: "Arthur C. Clarke"
                        },
                        description: "ai_recruitment_intro"
                    },
                    accurateRecruitmentSections: [{
                        id: "less_apathy",
                        title: "less_apathy_headline",
                        stats: {
                            partOne: "less_apathy_stats_part_one",
                            partTwo: "less_apathy_stats_part_two",
                            partThree: "less_apathy_stats_part_three"
                        },
                        sources: {
                            sourceOne: "https://www.icims.com/company/newsroom/icims-releases-new-research-on-the-job-search-process-and/",
                            sourceTwo: "https://theundercoverrecruiter.com/response-rates-jobseeker-perspective/",
                            sourceThree: "https://www.zippia.com/employer/hiring-bias-statistics/"
                        },
                        subtitle: "less_aphaty_subtitle",
                        description: {
                            partOne: "less_apathy_description_part_one"
                        },
                        iconUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1/origin/home-pages/feature-graphics/ai-recruitment-less-apathy"
                    }, {
                        id: "less_discrimination",
                        title: "less_discrimination_headline",
                        stats: {
                            partOne: "less_discrimination_stats_part_one",
                            partTwo: "less_discrimination_stats_part_two",
                            partThree: "less_discrimination_stats_part_three",
                            partFour: "less_discrimination_part_four"
                        },
                        sources: {
                            sourceOne: "https://www.zippia.com/employer/hiring-bias-statistics/",
                            sourceTwo: "https://en.wikipedia.org/wiki/Implicit_stereotype",
                            sourceThree: "https://www.zippia.com/employer/hiring-bias-statistics/"
                        },
                        subtitle: "less_discrimination_subtitle",
                        description: {
                            partOne: "less_discrimination_description_part_one"
                        },
                        iconUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1/origin/home-pages/feature-graphics/ai-recruitment-less-discrimination"
                    }, {
                        id: "less_guesswork",
                        title: "less_guesswork_headline",
                        stats: {
                            partOne: "less_guesswork_stats_part_one",
                            partTwo: "less_guesswork_stats_part_two"
                        },
                        sources: {
                            sourceOne: "https://en.wikipedia.org/wiki/The_Magical_Number_Seven,_Plus_or_Minus_Two"
                        },
                        subtitle: "less_guesswork_subtitle",
                        description: {
                            partOne: "less_guesswork_description_part_one"
                        },
                        iconUrl: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1/origin/home-pages/feature-graphics/ai-recruitment-less-guesswork"
                    }, {
                        id: "the_future",
                        title: "the_future",
                        stats: {
                            partOne: "the_future_stats_part_one"
                        },
                        sources: {},
                        subtitle: "the_future_subtitle",
                        description: {
                            partOne: "the_future_description_part_one",
                            partTwo: "the_future_description_part_two"
                        }
                    }],
                    footer: !0,
                    hideAboutSection: !0,
                    hideManifesto: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/default"
                },
                jt = {
                    id: "t_referral_programs",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Candidate Referral Programs",
                        subtitle: "",
                        headline: X.headline,
                        subheadline: X.description,
                        actions: [{
                            id: "torre_referral_programs_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=referral&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: X.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    }))],
                    investors: !0,
                    testimonials: !0,
                    funnel: !1,
                    algorithmsModel: !0,
                    sharkTank: !0,
                    features: [de, m, _, f, y, E, he, w, k, V, K, Q, te, oe, ie],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/referral-program"
                },
                Mt = (r.b.SalaryCalculationForCandidates, "Find out what others are asking. Millions of data points."),
                Vt = "",
                Bt = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/salary-graphic",
                Wt = {
                    id: "th_salary_calc_fc",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "",
                        title: "Salary calculator",
                        subtitle: "",
                        headline: Mt,
                        subheadline: Vt,
                        actions: [{
                            id: "torre_home_salary_calculator_candidates_join",
                            text: "JOIN THE WAITLIST",
                            leyend: "",
                            href: ""
                        }],
                        price: "",
                        mainGraphic: Bt
                    },
                    included: [],
                    features: [],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/salary-calculation"
                },
                Ht = {
                    id: "th_salary_calc_ts",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Salary calculator",
                        subtitle: "",
                        headline: $.headline,
                        subheadline: $.description,
                        actions: [{
                            id: "torre_home_salary_calculator_ts_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=salary_calculator&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: $.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    })), ye.a.talentSeekers.find((function(e) {
                        return "emma-reach" === e.id
                    }))],
                    features: [G, O, z],
                    investors: !0,
                    algorithmsModel: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/salary-calculation"
                },
                zt = {
                    id: "torre_skill_graph",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Skill Graph",
                        subtitle: "",
                        headline: ue.headline,
                        subheadline: ue.description,
                        actions: [{
                            id: "torre_skill_graph_contact_sales",
                            text: se.chatWithUs.text,
                            leyend: se.chatWithUs.leyend,
                            href: "".concat(se.chatWithUs.href),
                            params: "utm_source=web&utm_medium=skill_graph&utm_campaign=dft",
                            external: !0
                        }],
                        price: "",
                        mainGraphic: ue.featureGraphic
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    })), ye.a.talentSeekers.find((function(e) {
                        return "emma-reach" === e.id
                    }))],
                    investors: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    features: [R, Y],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/skillgraph"
                },
                Ft = (r.c.TeamGenomeTS, "The future of team profiles"),
                Yt = "Don’t let your team’s awesomeness go unnoticed. Use Torre Genomes to provide insight into the qualities you and your team have that will attract candidates.",
                Kt = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.5,c_scale/v1/origin/home-pages/feature-graphics/team-genome",
                Xt = {
                    id: "torre_team_genomes",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "",
                        title: "Team genome",
                        subtitle: "",
                        headline: Ft,
                        subheadline: Yt,
                        actions: [{
                            id: "torre_team_genomes_create",
                            text: "CREATE YOUR TEAM GENOME",
                            leyend: "",
                            href: "/create-team-genome"
                        }],
                        price: "It's free",
                        mainGraphic: Kt
                    },
                    included: [ye.a.talentSeekers.find((function(e) {
                        return "ats" === e.id
                    }))],
                    investors: !0,
                    testimonials: !0,
                    funnel: !1,
                    sharkTank: !0,
                    algorithmsModel: !0,
                    features: [T, k, v, le],
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/teamgenome"
                },
                Jt = "Grow your business with Torre’s technology",
                $t = "Join a select group of recruiting and HRTech pros that use Torre to offer services and build solutions.",
                Qt = "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,fl_awebp,q_auto,w_0.5/v1714165278/origin/home-pages/main-graphics/u9wgmvd7eqbfkzkvz2v5",
                Zt = {
                    id: "torre_partners",
                    type: re.a.PARTNER,
                    isRoot: !0,
                    header: {
                        logo: "partners",
                        title: "Become a partner",
                        subtitle: "",
                        headline: Jt,
                        subheadline: $t,
                        actions: [{
                            id: "become_a_partner_apply_now_button",
                            text: "APPLY NOW",
                            leyend: "",
                            href: "/partners-application"
                        }],
                        price: "",
                        mainGraphic: Qt
                    },
                    included: [],
                    features: [{
                        id: "partners_earn",
                        code: 310100,
                        headline: "Earn",
                        subheadline: "",
                        description: "20%+ of product sales - much higher commissions than anywhere else.",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/partners-earn",
                        mainGraphic: ""
                    }, {
                        id: "refer_or_resell",
                        code: 310125,
                        headline: "Resell",
                        subheadline: "",
                        description: "Resell Torre’s products and earn significant margins.",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/s8tbezckbvkzlbdzpfcu",
                        mainGraphic: ""
                    }, {
                        id: "partner_ai_technology",
                        code: 310150,
                        headline: "AI Technology",
                        subheadline: "",
                        description: "Get full access to Torre’s technology, automating 90% of recruitment. Use best-in-class technology to help fill roles for your clients.",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/partners-aitech",
                        mainGraphic: ""
                    }, {
                        id: "reach_more_customers",
                        code: 310200,
                        headline: "Reach more customers",
                        subheadline: "",
                        description: "Together, you and Torre provide innovative recruiting solutions, win deals, and deliver greater customer value.",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/xdktsh5pvw72wfgzuqa3",
                        mainGraphic: ""
                    }, {
                        id: "partners_innovate",
                        code: 310300,
                        headline: "Innovate",
                        subheadline: "",
                        description: "Innovate with the latest Torre technologies and programmatic recruitment to deliver personalized solutions to customers.",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/common/oyclqpvgxh4mtoomncak",
                        mainGraphic: ""
                    }, {
                        id: "partners_deal_flow",
                        code: 310400,
                        headline: "Deal flow",
                        subheadline: "",
                        description: "Grow your business with extensive sales and marketing benefits: everything you need to accelerate deals, market, and win with us as a team.",
                        featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/feature-graphics/partners-dealflow",
                        mainGraphic: ""
                    }],
                    footer: !0,
                    hideAboutSection: !0,
                    howItWorks: !0,
                    featuresTheme: "dark",
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/partners"
                },
                eo = {
                    id: "pricing",
                    type: re.a.TALENT_SEEKER,
                    isRoot: !1,
                    header: {
                        logo: "",
                        title: "Pricing",
                        subtitle: "",
                        headline: "",
                        subheadline: "",
                        actions: [],
                        price: "",
                        mainGraphic: ""
                    },
                    included: [],
                    pricing: !0,
                    features: [],
                    footer: !0,
                    hideAboutSection: !0,
                    hideManifesto: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/home-for-ts"
                },
                to = {
                    id: "candidatedemo",
                    type: re.a.CANDIDATE,
                    header: {
                        logo: "torre",
                        title: "Torre Demo",
                        subtitle: "",
                        headline: "Let AI do the job hunting for you",
                        subheadline: "",
                        actions: [],
                        price: "",
                        mainGraphic: ""
                    },
                    included: [],
                    features: [],
                    footer: !0,
                    algorithmsModel: !0,
                    showDemo: !0,
                    demoPage: {
                        demoName: "Torre demo",
                        demoVideo: "candidateDemoVideo",
                        demoCover: "candidateDemoPreview",
                        demoTitle: "Let AI do the job hunting for you",
                        productName: "Torre Demo",
                        productLink: "/forcandidates",
                        productLogo: "torre"
                    },
                    openGraphImage: "candidateDemoPreview"
                },
                oo = {
                    id: "thp_for_rt",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "torre",
                        title: "Torre for Remote Teams",
                        subtitle: "for remote teams",
                        headline: "Let AI recruit your global team",
                        subheadline: "",
                        actions: [{
                            id: "torre_home_page_for_remote_teams_post_job_button",
                            text: "cta_publish_job",
                            leyend: "cta_publish_job_for_companies_leyend",
                            href: "/post/onboarding"
                        }, {
                            id: "torre_home_page_for_remote_teams_process_candidates_button",
                            text: "PROCESS CANDIDATES",
                            leyend: "cta_process_candidates_leyend",
                            href: "/os"
                        }, {
                            id: "torre_home_page_for_remote_teams_view_pricing_button",
                            text: "VIEW PRICING",
                            leyend: "",
                            href: "/pricing"
                        }],
                        price: "",
                        video: !0,
                        mainGraphic: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717165004/origin/home-pages/common/emma-webm-new.webm",
                        mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717167220/origin/home-pages/common/emma-transparent-safari.mp4"
                    },
                    isRoot: !0,
                    included: [],
                    features: [],
                    investors: !0,
                    testimonials: !0,
                    demoSection: {
                        demoVideo: "torreDemoUrl",
                        demoCover: "torreDemoCoverUrl",
                        demoTitle: "torreDemoCoverTitle",
                        demoAction: !0
                    },
                    noDiscriminationSection: ze.a.noDiscriminationSection,
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/home-for-ts",
                    aboutProducts: [{
                        logo: "job-marketplace",
                        logoUrl: "/jobmarketplace",
                        pricingHeadline: ot
                    }, {
                        logo: $e,
                        logoUrl: "/reach",
                        pricingHeadline: Ze
                    }, {
                        logo: "ats",
                        logoUrl: "/ats",
                        pricingHeadline: c
                    }]
                },
                ao = {
                    id: "thp_for_bpo",
                    type: re.a.TALENT_SEEKER,
                    header: {
                        logo: "torre",
                        title: "Torre for BPOs",
                        subtitle: "for BPOs",
                        headline: "Let AI do the recruitment for your BPO",
                        subheadline: "",
                        actions: [{
                            id: "torre_home_page_for_bpos_post_job_button",
                            text: "cta_publish_job",
                            leyend: "cta_publish_job_for_companies_leyend",
                            href: "/post/onboarding"
                        }, {
                            id: "torre_home_page_for_bpos_process_candidates_button",
                            text: "PROCESS CANDIDATES",
                            leyend: "cta_process_candidates_leyend",
                            href: "/os"
                        }, {
                            id: "torre_home_page_for_bpos_view_pricing_button",
                            text: "VIEW PRICING",
                            leyend: "",
                            href: "/pricing"
                        }],
                        price: "",
                        video: !0,
                        mainGraphic: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717165004/origin/home-pages/common/emma-webm-new.webm",
                        mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717167220/origin/home-pages/common/emma-transparent-safari.mp4"
                    },
                    isRoot: !0,
                    included: [],
                    features: [],
                    investors: !0,
                    testimonials: !0,
                    demoSection: {
                        demoVideo: "torreDemoUrl",
                        demoCover: "torreDemoCoverUrl",
                        demoTitle: "torreDemoCoverTitle",
                        demoAction: !0
                    },
                    noDiscriminationSection: ze.a.noDiscriminationSection,
                    footer: !0,
                    openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/home-for-ts",
                    aboutProducts: [{
                        logo: "job-marketplace",
                        logoUrl: "/jobmarketplace",
                        pricingHeadline: ot
                    }, {
                        logo: $e,
                        logoUrl: "/reach",
                        pricingHeadline: Ze
                    }, {
                        logo: "ats",
                        logoUrl: "/ats",
                        pricingHeadline: c
                    }]
                },
                io = {
                    about: {
                        id: "about-us",
                        type: re.a.UNDEFINED,
                        header: {
                            logo: "",
                            title: "aboutUsTitle",
                            subtitle: "",
                            headline: "aboutUsTitle",
                            subheadline: "aboutUsHeadline",
                            description: "aboutUsDescription",
                            actions: [{
                                id: "torre_about_us_our_team",
                                text: "ourTeamCta",
                                leyend: "",
                                href: "/teams/torre"
                            }, {
                                id: "torre_about_us_jobs_torre",
                                text: "jobsAtTorre",
                                leyend: "",
                                href: "/careers/Torre",
                                params: "utm_source=web&utm_medium=about&utm_campaign=dft",
                                external: !0
                            }],
                            variation: 3,
                            price: "",
                            mainGraphic: ""
                        },
                        included: [],
                        investors: !0,
                        testimonials: !0,
                        demoOnly: !0,
                        funnel: !1,
                        sharkTank: !0,
                        features: [],
                        algorithmsModel: !1,
                        footer: !0,
                        hideAboutSection: !1,
                        noDiscriminationSection: ze.a.noDiscriminationSection,
                        openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/at3qgardfg0wroquoxid"
                    },
                    ats: fe,
                    atsdemo: be,
                    candidatereactivation: Te,
                    candidatesdatabases: we,
                    candidatedemo: to,
                    careersites: Se,
                    culturalfitforcompanies: Ge,
                    culturalfitforcandidates: Pe,
                    emmaforcompanies: We,
                    emmapage: {
                        id: "emma-page",
                        type: re.a.UNDEFINED,
                        isRoot: !1,
                        header: {
                            logo: "",
                            title: "Emma",
                            subtitle: "",
                            headline: "",
                            subheadline: "",
                            actions: [],
                            price: "",
                            mainGraphic: ""
                        },
                        included: [],
                        features: [],
                        footer: !0,
                        hideAboutSection: !0,
                        hideManifesto: !0,
                        openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/default"
                    },
                    fair: He,
                    forcandidates: Je,
                    forcompanies: it,
                    genome: Ot,
                    home: nt,
                    interviewscheduling: ht,
                    jobdistribution: pt,
                    jobmarketplace: mt,
                    jobmarketplaceforcandidates: ut,
                    languagetesting: wt,
                    matchandrank: St,
                    matchandrankforcandidates: Tt,
                    messengerapp: kt,
                    messengerforcandidates: At,
                    os: Dt,
                    partners: Zt,
                    pricing: eo,
                    psychometrics: Nt,
                    psychometricsforcandidates: xt,
                    reach: Ct,
                    reachdemo: {
                        id: "reachdemo",
                        type: re.a.TALENT_SEEKER,
                        header: {
                            logo: "",
                            title: "Emma Reach Demo",
                            subtitle: "",
                            headline: "Let AI do the recruitment for you",
                            subheadline: "",
                            actions: [{
                                id: "torre_reach_demo_post_job_button",
                                text: "cta_publish_job",
                                leyend: "cta_publish_job_leyend",
                                href: "/post/onboarding"
                            }, {
                                id: "torre_reach_demo_contact_sales",
                                text: se.chatWithUs.text,
                                leyend: se.chatWithUs.leyend,
                                href: "".concat(se.chatWithUs.href),
                                params: "utm_source=web&utm_medium=reach&utm_campaign=dft",
                                external: !0
                            }],
                            price: "",
                            mainGraphic: ""
                        },
                        included: [],
                        features: [],
                        footer: !0,
                        demoPage: {
                            demoName: "Reach Demo",
                            demoVideo: "reachDemoVideo",
                            demoCover: "reachDemoPreview",
                            demoTitle: "Let AI do the recruitment for you",
                            productName: "Torre Reach",
                            productLink: "/reach",
                            productLogo: "emma-reach"
                        },
                        hideManifesto: !0,
                        hideAboutSection: !0,
                        openGraphImage: ""
                    },
                    recruitmentmoreaccurate: qt,
                    referralprograms: jt,
                    hunt: lt,
                    salarycalculation: Ht,
                    teamgenome: Xt,
                    skillgraph: zt,
                    emmaforcandidates: Ve,
                    languagetestingforcandidates: bt,
                    salarycalculationforcandidates: Wt,
                    forremoteteams: oo,
                    forbpos: ao,
                    foraitalent: {
                        id: "thp_for_ai_talent",
                        type: re.a.TALENT_SEEKER,
                        header: {
                            logo: "torre",
                            title: "Torre for AI Talent",
                            subtitle: "for AI Talent",
                            headline: "Hire top global AI talent",
                            subheadline: "",
                            actions: [{
                                id: "torre_home_page_for_ai_talent_post_job_button",
                                text: "cta_publish_job",
                                leyend: "cta_publish_job_for_companies_leyend",
                                href: "/post/onboarding"
                            }, {
                                id: "torre_home_page_for_ai_talent_process_candidates_button",
                                text: "PROCESS CANDIDATES",
                                leyend: "cta_process_candidates_leyend",
                                href: "/os"
                            }, {
                                id: "torre_home_page_for_ai_talent_view_pricing_button",
                                text: "VIEW PRICING",
                                leyend: "",
                                href: "/pricing"
                            }],
                            price: "",
                            video: !0,
                            mainGraphic: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717165004/origin/home-pages/common/emma-webm-new.webm",
                            mainGraphicSafari: "https://res.cloudinary.com/torre-technologies-co/video/upload/v1717167220/origin/home-pages/common/emma-transparent-safari.mp4"
                        },
                        isRoot: !0,
                        included: [],
                        features: [],
                        investors: !0,
                        testimonials: !0,
                        demoSection: {
                            demoVideo: "torreDemoUrl",
                            demoCover: "torreDemoCoverUrl",
                            demoTitle: "torreDemoCoverTitle",
                            demoAction: !0
                        },
                        noDiscriminationSection: ze.a.noDiscriminationSection,
                        footer: !0,
                        openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/home-for-ts",
                        aboutProducts: [{
                            logo: "job-marketplace",
                            logoUrl: "/jobmarketplace",
                            pricingHeadline: ot
                        }, {
                            logo: $e,
                            logoUrl: "/reach",
                            pricingHeadline: Ze
                        }, {
                            logo: "ats",
                            logoUrl: "/ats",
                            pricingHeadline: c
                        }]
                    },
                    testimonials: {
                        id: "testimonials",
                        type: re.a.TESTIMONIAL,
                        header: {
                            logo: "",
                            title: "Testimonials",
                            subtitle: "",
                            headline: "Testimonials",
                            subheadline: "",
                            actions: [],
                            price: "",
                            mainGraphic: ""
                        },
                        showHeader: !0,
                        isRoot: !0,
                        included: [],
                        features: [],
                        investors: !1,
                        testimonials: !1,
                        footer: !0,
                        hideAboutSection: !0,
                        hideManifesto: !0,
                        openGraphImage: ""
                    },
                    prime: {
                        id: "torre-prime",
                        type: re.a.CANDIDATE,
                        header: {
                            logo: "prime",
                            title: "Torre Prime",
                            subtitle: "",
                            headline: "torrePrimeHeadline",
                            subheadline: "torrePrimeSubheadline",
                            actions: [{
                                id: "torre_prime_preferences",
                                text: "torrePrimeCTA",
                                leyend: "",
                                href: "/torre-prime"
                            }],
                            price: "",
                            mainGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/main-graphics/torre-prime"
                        },
                        showHeader: !0,
                        isRoot: !0,
                        included: [],
                        features: [{
                            id: "notification_details",
                            code: 101240,
                            headline: "notificationDetailsHeadline",
                            subheadline: "",
                            description: "notificationDetailsDescription",
                            featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/job-alert"
                        }, {
                            id: "exclusive_jobs_details",
                            code: 101260,
                            headline: "exclusiveJobsHeadline",
                            subheadline: "",
                            description: "exclusiveJobsDescription",
                            featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,q_90,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/job-post-video"
                        }, {
                            id: "rank_higher_details",
                            code: 101280,
                            headline: "RankHigherDetailsHeadline",
                            description: "RankHigherDetailsSubheadline",
                            subheadline: "",
                            featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,w_0.4,c_scale/v1/origin/home-pages/feature-graphics/job-alert"
                        }, {
                            id: "negotiate_like_a_shark_details",
                            code: 101290,
                            headline: "negotiateLikeSharkHeadline",
                            subheadline: "",
                            description: "negotiateLikeSharkDescription",
                            featureGraphic: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_80,w_0.7/v1/origin/home-pages/feature-graphics/chat_phone_videoconference",
                            mainGraphic: ""
                        }],
                        investors: !0,
                        testimonials: !1,
                        footer: !0,
                        openGraphImage: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto/v1/origin/home-pages/open-graphs/kzfrhjomoyibt8dl4lav"
                    }
                },
                ro = function(e) {
                    return io[e]
                },
                no = function(e, t, o) {
                    var r;
                    if (!e) return {
                        title: "Torre | ".concat(o.t("Welcome to the future of recruitment"))
                    };
                    var n = o.locale,
                        c = "en" !== n ? "/".concat(n) : "",
                        l = !!e.header.subheadline && e.header.subheadline.length > 0,
                        d = {
                            title: l ? o.t(e.header.title) + ": " + o.t(e.header.headline) : o.t(e.header.title),
                            description: l ? o.t(e.header.subheadline) : o.t(e.header.headline),
                            openGraphImage: e.openGraphImage,
                            localizedUrl: "".concat("https://torre.ai").concat(c, "/").concat(t)
                        };
                    return "about" === t && (d.title = o.t(e.header.subheadline), d.description = o.t(null !== (r = e.header.description) && void 0 !== r ? r : "")), "fair" === t && (d.title = o.t("FAIR: the Fair Artificial Intelligence in Recruiting Manifesto"), d.description = ""), "forcompanies" === t && (d.title = "Torre.ai " + o.t("for companies")), "forcandidates" === t && (d.title = "Torre.ai " + o.t("for candidates")), "home" === t && (d.title = "Torre.ai"), "tools" === t && (d.title = "Torre " + o.t("tools for candidates"), d.description = o.t("Welcome to the future of job hunting")), "solutions" === t && (d.title = "Torre " + o.t("solutions for companies"), d.description = o.t("Welcome to the future of job hunting")), "pricing" === t && (d.title = o.t("Pricing") + " - " + o.t("solutions for companies"), d.description = o.t("Welcome to the future of job hunting")), "atsdemo" === t && (d.openGraphImage = o.t(e.openGraphImage)), "candidatedemo" === t && (d.openGraphImage = o.t(e.openGraphImage)), "save" === t && (d.description = o.t("savings_description")), "emmapage" === t && (d.title = o.t("emmaPageTitle"), d.description = o.t("emmaPageSubtitle")), {
                        title: d.title,
                        link: [{
                            hid: "canonical",
                            rel: "canonical",
                            href: d.localizedUrl
                        }],
                        meta: [{
                            hid: "description",
                            name: "description",
                            content: d.description
                        }, {
                            hid: "og:description",
                            name: "og:description",
                            content: d.description
                        }, {
                            hid: "og:type",
                            name: "og:type",
                            content: "website"
                        }, {
                            hid: "og:title",
                            name: "og:title",
                            content: d.title
                        }, {
                            hid: "og:image",
                            name: "og:image",
                            content: d.openGraphImage
                        }, {
                            hid: "og:url",
                            name: "og:url",
                            content: d.localizedUrl
                        }, {
                            hid: "og:image:linkedin",
                            name: "image",
                            property: "og:image",
                            content: d.openGraphImage
                        }, {
                            hid: "og:image:width",
                            name: "og:image:width",
                            content: "1200"
                        }, {
                            hid: "og:image:height",
                            name: "og:image:height",
                            content: "600"
                        }, {
                            hid: "twitter:title",
                            name: "twitter:title",
                            content: d.title
                        }, {
                            hid: "twitter:image",
                            name: "twitter:image",
                            content: d.openGraphImage
                        }, {
                            hid: "twitter:description",
                            name: "twitter:description",
                            content: d.description
                        }, {
                            hid: "twitter:card",
                            name: "twitter:card",
                            content: "summary_large_image"
                        }, {
                            hid: "google",
                            name: "google",
                            content: "notranslate"
                        }]
                    }
                }
        },
        849: function(e, t, o) {
            "use strict";
            o(47), o(40), o(31), o(60), o(37), o(68);
            var r = o(18),
                n = (o(15), o(33), o(34), o(45), o(74), o(32), o(28), o(70)),
                c = o(469),
                l = o(2),
                d = o(830),
                h = (o(324), o(52), o(458), o(43)),
                m = l.default.extend({
                    created: function() {
                        this.marketingTrackingMixin_storeUtms()
                    },
                    methods: {
                        marketingTrackingMixin_storeUtms: function() {
                            var e = this,
                                t = this.marketingTrackingMixin_getUtmParams();
                            Object.keys(t).forEach((function(o) {
                                var r = h.a.getCookie(o);
                                t[o] && !r && h.a.setCookie(o, t[o] || "", 1, e.$config.rootDomain)
                            }))
                        },
                        marketingTrackingMixin_getUtmParams: function() {
                            var e = new URLSearchParams(window.location.search);
                            return {
                                utm_source: e.get("utm_source"),
                                utm_medium: e.get("utm_medium"),
                                utm_campaign: e.get("utm_campaign"),
                                utm_term: e.get("utm_term"),
                                utm_content: e.get("utm_content")
                            }
                        }
                    }
                }),
                _ = o(812),
                f = o(861),
                y = o(862),
                v = o(838);

            function E(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(o), !0).forEach((function(t) {
                        Object(r.a)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : E(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var T, S, A = l.default.extend({
                props: {
                    pageSchema: {
                        type: Object,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        interactionTrackingMixin_scrollTracking: {
                            fifty: !1,
                            hundred: !1
                        }
                    }
                },
                computed: w(w({}, Object(n.d)("User", {
                    user: function(e) {
                        return e.user
                    }
                })), {}, {
                    interactionTrackingMixin_isCompaniesPage: function() {
                        var e;
                        return (null === (e = this.pageSchema) || void 0 === e ? void 0 : e.id) === y.a.TALENT_SEEKER
                    },
                    interactionTrackingMixin_isProductPage: function() {
                        var e;
                        return [y.a.TORRE_OS, y.a.TORRE_REACH, y.a.HUNT, y.a.TORRE_ATS].includes(null === (e = this.pageSchema) || void 0 === e ? void 0 : e.id)
                    },
                    interactionTrackingMixin_isHomePage: function() {
                        var e;
                        return (null === (e = this.pageSchema) || void 0 === e ? void 0 : e.id) === y.a.TORRE_HOME_PAGE
                    }
                }),
                mounted: function() {
                    this.interactionTrackingMixin_initializeTracking()
                },
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this.interactionTrackingMixin_trackPageScroll)
                },
                methods: {
                    interactionTrackingMixin_trackEvent: function(e) {
                        var t, o = Object(v.b)(this.$route);
                        if (this.interactionTrackingMixin_isCompaniesPage && f.a.trackEvent("".concat(e, "_").concat(y.d.COMPANIES), this.user, o), this.interactionTrackingMixin_isProductPage) {
                            var r = y.b[null === (t = this.pageSchema) || void 0 === t ? void 0 : t.id];
                            f.a.trackEvent("".concat(e, "_").concat(y.d.PRODUCTS), this.user, o, r)
                        }
                        this.interactionTrackingMixin_isHomePage && f.a.trackEvent("".concat(e, "_").concat(y.d.MAIN_HOME), this.user, o)
                    },
                    interactionTrackingMixin_initializeTracking: function() {
                        (this.interactionTrackingMixin_isCompaniesPage || this.interactionTrackingMixin_isProductPage || this.interactionTrackingMixin_isHomePage) && (this.interactionTrackingMixin_trackEvent(y.c.VISITED), window.addEventListener("scroll", this.interactionTrackingMixin_trackPageScroll))
                    },
                    interactionTrackingMixin_trackPageScroll: function() {
                        var e = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;
                        !this.interactionTrackingMixin_scrollTracking.fifty && e >= 50 && (this.interactionTrackingMixin_scrollTracking.fifty = !0, this.interactionTrackingMixin_trackEvent(y.c.SCROLLED_50)), !this.interactionTrackingMixin_scrollTracking.hundred && e >= 95 && (this.interactionTrackingMixin_scrollTracking.hundred = !0, this.interactionTrackingMixin_trackEvent(y.c.SCROLLED_100))
                    }
                }
            });
            ! function(e) {
                e.URL = "URL", e.INITIAL = "INITIAL", e.ICON = "ICON"
            }(T || (T = {})),
            function(e) {
                e.TOP = "top", e.DRAWER = "drawer"
            }(S || (S = {}));
            var k = o(13),
                R = o(21),
                map = o(78),
                P = o(311),
                G = o(336),
                O = new(function() {
                    function e() {
                        Object(k.a)(this, e)
                    }
                    return Object(R.a)(e, [{
                        key: "findPersonInfo",
                        value: function(e) {
                            var t = "/api/suite/people/".concat(e);
                            return G.a.get(t).pipe(Object(map.a)((function(e) {
                                var t = e.data;
                                return t.length ? new P.a(t[0]) : null
                            })))
                        }
                    }]), e
                }()),
                I = o(310);

            function U(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, r)
                }
                return o
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? U(Object(o), !0).forEach((function(t) {
                        Object(r.a)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : U(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var D = l.default.extend({
                    name: "page-content",
                    components: {
                        AboutProductsSection: function() {
                            return o.e(107).then(o.bind(null, 1292))
                        },
                        AlgorithmsModelSection: function() {
                            return o.e(99).then(o.bind(null, 1293))
                        },
                        AppBarSection: function() {
                            return Promise.all([o.e(0), o.e(104)]).then(o.bind(null, 1002))
                        },
                        DemoSection: function() {
                            return Promise.all([o.e(0), o.e(98)]).then(o.bind(null, 1267))
                        },
                        EmmaPage: function() {
                            return o.e(115).then(o.bind(null, 1277))
                        },
                        FeaturesSection: function() {
                            return Promise.all([o.e(0), o.e(96)]).then(o.bind(null, 1278))
                        },
                        FunnelSection: function() {
                            return Promise.all([o.e(0), o.e(103)]).then(o.bind(null, 1270))
                        },
                        HeaderSection: function() {
                            return Promise.all([o.e(0), o.e(105), o.e(94)]).then(o.bind(null, 1263))
                        },
                        HowItWorksSection: function() {
                            return o.e(92).then(o.bind(null, 1262))
                        },
                        IncludedSection: function() {
                            return o.e(110).then(o.bind(null, 1294))
                        },
                        InvestorsSection: function() {
                            return o.e(111).then(o.bind(null, 1295))
                        },
                        LazyHydrate: c.a,
                        ManifestoContent: function() {
                            return o.e(112).then(o.bind(null, 1279))
                        },
                        MoreAccurateRecruitment: function() {
                            return o.e(102).then(o.bind(null, 1268))
                        },
                        NumericalBenefitsSection: function() {
                            return o.e(113).then(o.bind(null, 1296))
                        },
                        PricingContent: function() {
                            return Promise.all([o.e(0), o.e(97)]).then(o.bind(null, 1297))
                        },
                        ProductDemoContent: function() {
                            return Promise.all([o.e(0), o.e(95)]).then(o.bind(null, 1298))
                        },
                        SavingsContent: function() {
                            return Promise.all([o.e(5), o.e(93), o.e(114)]).then(o.bind(null, 1280))
                        },
                        SharkTankSection: function() {
                            return o.e(116).then(o.bind(null, 1299))
                        },
                        SimpleHeaderSection: function() {
                            return o.e(109).then(o.bind(null, 1281))
                        },
                        TdsFooter: function() {
                            return Promise.all([o.e(5), o.e(18), o.e(15), o.e(14), o.e(16), o.e(17), o.e(19)]).then(o.bind(null, 789)).then((function(e) {
                                return e.TdsFooter
                            }))
                        },
                        TdsManifestoBanner: function() {
                            return Promise.all([o.e(5), o.e(18), o.e(15), o.e(14), o.e(16), o.e(17), o.e(19)]).then(o.bind(null, 789)).then((function(e) {
                                return e.TdsManifestoBanner
                            }))
                        },
                        PageContentSection: function() {
                            return o.e(108).then(o.bind(null, 1300))
                        },
                        TestimonialsPage: function() {
                            return o.e(101).then(o.bind(null, 1301))
                        },
                        TestimonialsSection: function() {
                            return o.e(100).then(o.bind(null, 1302))
                        }
                    },
                    mixins: [m, A],
                    props: {
                        pageSchema: {
                            type: Object,
                            required: !0
                        },
                        locationLocale: {
                            type: Boolean,
                            default: !1
                        },
                        testimonials: {
                            type: Array,
                            default: []
                        }
                    },
                    data: function() {
                        return {
                            customHrefs: {
                                candidates: "/forcandidates",
                                talentSeekers: "/forcompanies"
                            },
                            headerLocationLocale: !1,
                            locationDetails: void 0,
                            emmaSection: d.a.emmaSection
                        }
                    },
                    computed: L(L({
                        talentSeekerPage: function() {
                            return this.pageSchema.type === _.a.TALENT_SEEKER
                        },
                        currentLocale: function() {
                            return this.$i18n.locale
                        },
                        highlightedIcons: function() {
                            switch (this.pageSchema.id) {
                                case "candidate-tools":
                                    return ["tools"];
                                case "talent-seeker-solutions":
                                    return ["solutions"];
                                case "pricing":
                                    return ["talent-solutions"];
                                default:
                                    return []
                            }
                        },
                        sharktankEnabled: function() {
                            return this.pageSchema.sharkTank && ("es" === this.currentLocale || "investors" === this.pageSchema.id || "about-us" === this.pageSchema.id)
                        },
                        investorsElevation: function() {
                            return "undefined" === this.pageSchema.type || this.pageSchema.aboutProducts || this.pageSchema.demoSection && !this.sharktankEnabled ? "2" : "05"
                        },
                        investorsImageUrl: function() {
                            var e;
                            return "Colombia" === (null === (e = this.locationDetails) || void 0 === e ? void 0 : e.location) ? "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,h_0.4,c_scale/v1/origin/home-pages/common/uorykle8urvggnbwdd4d" : "https://res.cloudinary.com/torre-technologies-co/image/upload/f_webp,f_auto,q_auto,h_0.3,c_scale/v1/origin/home-pages/common/investor-logos-opt"
                        },
                        hideLocalSelector: function() {
                            return this.$router.currentRoute.path.includes("investors")
                        },
                        hideDemoSection: function() {
                            var e;
                            return !(null === (e = this.pageSchema.demoSection) || void 0 === e ? void 0 : e.demoAction) && "en" === this.currentLocale
                        },
                        showTestimonials: function() {
                            return "en" !== this.currentLocale
                        },
                        showHeaderSection: function() {
                            return !this.pageSchema.pricing && !this.pageSchema.savings && !this.pageSchema.demoPage && "emma-page" !== this.pageSchema.id && this.pageSchema.type !== _.a.TESTIMONIAL
                        }
                    }, Object(n.c)("FeatureFlag", ["featureFlagGrinchEngageVisitors"])), Object(n.d)("User", ["user"])),
                    mounted: function() {
                        this.createCustomHrefs(), this.triggerWebAppNotificationIfNeeded()
                    },
                    methods: {
                        createCustomHrefs: function() {
                            var e = this;
                            if (this.locationLocale) {
                                var t = localStorage.getItem("locationDetails"),
                                    o = t ? JSON.parse(t) : null;
                                o ? this.locationDetails = o : I.a.getUserLocationLocale().subscribe((function(t) {
                                    e.headerLocationLocale = !0, localStorage.setItem("locationDetails", JSON.stringify(t)), e.locationDetails = t
                                })), this.locationDetails && this.calculateHrefs(this.locationDetails)
                            }
                        },
                        calculateHrefs: function(e) {
                            "Colombia" === e.location ? this.customHrefs.talentSeekers = "/forcompanies" : "es" === e.locale ? this.customHrefs.talentSeekers = "/ats" : (this.customHrefs.candidates = "/maria", this.customHrefs.talentSeekers = "/emma")
                        },
                        triggerWebAppNotificationIfNeeded: function() {
                            this.talentSeekerPage && this.featureFlagGrinchEngageVisitors && !this.user && this.triggerWebAppNotification()
                        },
                        triggerWebAppNotification: function() {
                            var e = this;
                            I.a.getUserLocationLocale().subscribe({
                                next: function(t) {
                                    var o = "es" === t.locale ? e.$config.defaultSpanishAccountManager : e.$config.defaultEnglishAccountManager;
                                    O.findPersonInfo(o).subscribe({
                                        next: function(t) {
                                            if (t) {
                                                var o = e.buildWebAppNotification(t);
                                                e.$root.$emit("webapp-notification::open", o)
                                            }
                                        }
                                    })
                                }
                            })
                        },
                        buildWebAppNotification: function(e) {
                            return {
                                title: {
                                    text: e.name
                                },
                                body: {
                                    text: this.$t("Got questions? We can help you improve your recruitment.")
                                },
                                image: {
                                    type: e.pictureThumbnail ? T.URL : T.INITIAL,
                                    src: e.pictureThumbnail ? e.pictureThumbnail : e.name
                                },
                                url: "".concat(this.$config.torreAppBaseUrl, "/messenger/conversations/").concat(e.ggId, "?skipAuthVerification=true"),
                                type: S.TOP
                            }
                        }
                    }
                }),
                x = D,
                N = (o(1013), o(101)),
                component = Object(N.a)(x, (function() {
                    var e = this,
                        t = e.$createElement,
                        o = e._self._c || t;
                    return o("div", {
                        class: [{
                            "dark-page": e.pageSchema.demoPage
                        }]
                    }, [o("lazy-hydrate", {
                        attrs: {
                            "when-idle": ""
                        }
                    }, [e.pageSchema.demoPage ? e._e() : o("app-bar-section", {
                        attrs: {
                            "page-schema": e.pageSchema,
                            "highlighted-icons": e.highlightedIcons,
                            "hide-locale-selector": e.hideLocalSelector
                        }
                    })], 1), e._v(" "), o("div", {
                        class: [{
                            "page-content": e.pageSchema.manifesto
                        }]
                    }, [o("lazy-hydrate", {
                        attrs: {
                            "when-idle": ""
                        }
                    }, [o("div", [e.pageSchema.header.simple && !e.pageSchema.savings ? o("simple-header-section", {
                        class: {
                            "simple-header-section--no-discrimination": "moreaccuraterecruitment" === e.pageSchema.id
                        },
                        attrs: {
                            "header-schema": e.pageSchema.header,
                            "is-manifesto": e.pageSchema.manifesto
                        }
                    }) : e.showHeaderSection ? o("header-section", {
                        attrs: {
                            "header-schema": e.pageSchema.header,
                            "page-id": e.pageSchema.id,
                            "custom-hrefs": e.customHrefs
                        }
                    }) : e._e()], 1)]), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.aboutProducts ? o("about-products-section", {
                        attrs: {
                            products: e.pageSchema.aboutProducts,
                            target: e.talentSeekerPage ? "companies" : "candidates",
                            headline: "torre_home_page" === e.pageSchema.id ? "Let AI do the recruitment for you" : void 0
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.included.length ? o("included-section", {
                        attrs: {
                            "page-schema": e.pageSchema
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.investors ? o("investors-section", {
                        attrs: {
                            elevation: e.investorsElevation,
                            "image-url": e.investorsImageUrl
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.sharktankEnabled ? o("shark-tank-section", {
                        attrs: {
                            elevation: "undefined" === e.pageSchema.type ? "1" : "2"
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-visible": ""
                        }
                    }, [e.pageSchema.testimonials ? o("testimonials-section", {
                        attrs: {
                            type: e.pageSchema.type,
                            "page-schema-id": e.pageSchema.id,
                            "page-schema": e.pageSchema
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-visible": ""
                        }
                    }, [e.pageSchema.demoSection && !e.hideDemoSection ? o("demo-section", {
                        attrs: {
                            "page-id": e.pageSchema.id,
                            "demo-video": e.pageSchema.demoSection.demoVideo,
                            "demo-cover": e.pageSchema.demoSection.demoCover,
                            "demo-title": e.pageSchema.demoSection.demoTitle,
                            "demo-action": e.pageSchema.demoSection.demoAction,
                            "hide-skip-button": e.pageSchema.demoSection.hideSkipButton,
                            "hide-call-to-action": e.pageSchema.demoSection.hideCallToAction,
                            theme: "dark"
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.howItWorks ? o("how-it-works-section", {
                        attrs: {
                            product: e.pageSchema.id
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-idle": ""
                        }
                    }, [e.pageSchema.pricing ? o("pricing-content") : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-idle": ""
                        }
                    }, ["emma-page" === e.pageSchema.id ? o("emma-page") : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-idle": ""
                        }
                    }, ["testimonial" === e.pageSchema.type ? o("testimonials-page", {
                        attrs: {
                            headline: e.pageSchema.header.headline,
                            testimonials: e.testimonials
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-idle": ""
                        }
                    }, ["moreaccuraterecruitment" === e.pageSchema.id ? o("more-accurate-recruitment", {
                        attrs: {
                            "page-schema": e.pageSchema
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-idle": ""
                        }
                    }, [e.pageSchema.savings ? o("savings-content") : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-visible": ""
                        }
                    }, [e.pageSchema.demoPage ? o("product-demo-content", {
                        attrs: {
                            "page-id": e.pageSchema.id,
                            "demo-name": e.pageSchema.demoPage.demoName,
                            "demo-video": e.pageSchema.demoPage.demoVideo,
                            "demo-cover": e.pageSchema.demoPage.demoCover,
                            "demo-title": e.pageSchema.demoPage.demoTitle,
                            "product-name": e.pageSchema.demoPage.productName,
                            "product-link": e.pageSchema.demoPage.productLink,
                            "product-logo": e.pageSchema.demoPage.productLogo,
                            actions: e.pageSchema.header.actions
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.numericalBenefits ? o("numerical-benefits-section", {
                        attrs: {
                            "custom-elevation": !e.pageSchema.howItWorks,
                            schema: e.pageSchema.id,
                            elevation: e.pageSchema.numericalBenefitsElevation
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-visible": ""
                        }
                    }, [e.pageSchema.features.length ? o("features-section", {
                        attrs: {
                            features: e.pageSchema.features,
                            "header-schema": e.pageSchema.header,
                            "page-id": e.pageSchema.id,
                            "custom-hrefs": e.customHrefs,
                            theme: e.pageSchema.featuresTheme,
                            "no-margin-bottom": "torre_partners" == e.pageSchema.id
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            "when-visible": ""
                        }
                    }, [e.pageSchema.funnel && "talent-seeker-solutions" != e.pageSchema.id ? o("funnel-section", {
                        attrs: {
                            "page-id": e.pageSchema.id
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.algorithmsModel ? o("algorithms-model-section") : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.noDiscriminationSection ? o("page-content-section", {
                        attrs: {
                            data: e.pageSchema.noDiscriminationSection,
                            variation: "1"
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.manifesto ? o("manifesto-content") : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.footer && !e.pageSchema.hideManifesto ? o("tds-manifesto-banner", {
                        attrs: {
                            "base-url": e.$config.torreBaseUrl
                        }
                    }) : e._e()], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.hideAboutSection ? e._e() : o("page-content-section", {
                        attrs: {
                            data: e.emmaSection
                        }
                    })], 1), e._v(" "), o("lazy-hydrate", {
                        attrs: {
                            never: ""
                        }
                    }, [e.pageSchema.footer ? o("tds-footer", {
                        attrs: {
                            "page-id": e.pageSchema.id,
                            "base-url": e.$config.torreBaseUrl
                        }
                    }) : e._e()], 1)], 1)], 1)
                }), [], !1, null, "09963fd6", null);
            t.a = component.exports
        },
        861: function(e, t, o) {
            "use strict";
            o.d(t, "a", (function() {
                return _
            }));
            var r = o(13),
                n = o(21),
                c = o(80),
                l = o.n(c),
                d = o(73),
                h = o(116),
                m = o(43),
                _ = new(function() {
                    function e() {
                        Object(r.a)(this, e), this.apiEndpoint = "https://8b7vk9y0be.execute-api.us-west-2.amazonaws.com/default/web_interactions"
                    }
                    return Object(n.a)(e, [{
                        key: "trackEvent",
                        value: function(e, t, o, r) {
                            return Object(d.a)(l.a.post(this.apiEndpoint, {
                                person: t,
                                utms: o,
                                product: r,
                                tracking_id: m.a.getCookie("trackingId"),
                                event_type: e,
                                timestamp: (new Date).toISOString()
                            })).pipe(Object(h.a)())
                        }
                    }]), e
                }())
        },
        862: function(e, t, o) {
            "use strict";
            var r, n, c, l, d, h;
            o.d(t, "a", (function() {
                    return n
                })), o.d(t, "b", (function() {
                    return c
                })), o.d(t, "c", (function() {
                    return l
                })), o.d(t, "d", (function() {
                    return d
                })), o.d(t, "e", (function() {
                    return h
                })),
                function(e) {
                    e.PRODUCT = "product", e.COMPANY = "company", e.HOME = "home"
                }(r || (r = {})),
                function(e) {
                    e.TORRE_OS = "torre_os", e.TORRE_REACH = "torre-reach", e.HUNT = "hunt", e.TORRE_ATS = "torre_ats", e.TALENT_SEEKER = "thp_for_ts", e.TORRE_HOME_PAGE = "torre_home_page"
                }(n || (n = {})),
                function(e) {
                    e.torre_os = "OS", e["torre-reach"] = "Reach", e.hunt = "Hunt", e.torre_ats = "ATS"
                }(c || (c = {})),
                function(e) {
                    e.VISITED = "visited", e.SCROLLED_50 = "scrolled_50", e.SCROLLED_100 = "scrolled_100"
                }(l || (l = {})),
                function(e) {
                    e.COMPANIES = "companies_page", e.PRODUCTS = "products_page", e.MAIN_HOME = "main_home_page"
                }(d || (d = {})),
                function(e) {
                    e.STARTED = "demo_video_started", e.FIFTY_PERCENT = "demo_video_50_viewed", e.HUNDRED_PERCENT = "demo_video_100_viewed"
                }(h || (h = {}))
        },
        895: function(e, t, o) {
            var content = o(1014);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, o(178).default)("0e5c4997", content, !0, {
                sourceMap: !1
            })
        }
    }
]);