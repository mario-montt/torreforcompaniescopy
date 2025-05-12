! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "182e8a6c-f8e5-4d7a-a627-ede238c8d393", t._sentryDebugIdIdentifier = "sentry-dbid-182e8a6c-f8e5-4d7a-a627-ede238c8d393")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [70], {
        12: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return k
            })), n.d(e, "b", (function() {
                return D
            })), n.d(e, "c", (function() {
                return m
            })), n.d(e, "d", (function() {
                return E
            })), n.d(e, "e", (function() {
                return O
            })), n.d(e, "f", (function() {
                return L
            })), n.d(e, "g", (function() {
                return A
            })), n.d(e, "h", (function() {
                return j
            })), n.d(e, "i", (function() {
                return J
            })), n.d(e, "j", (function() {
                return M
            })), n.d(e, "k", (function() {
                return B
            })), n.d(e, "l", (function() {
                return z
            })), n.d(e, "m", (function() {
                return F
            })), n.d(e, "n", (function() {
                return U
            })), n.d(e, "o", (function() {
                return w
            })), n.d(e, "p", (function() {
                return x
            })), n.d(e, "q", (function() {
                return y
            })), n.d(e, "r", (function() {
                return T
            })), n.d(e, "s", (function() {
                return I
            })), n.d(e, "t", (function() {
                return C
            })), n.d(e, "u", (function() {
                return H
            })), n.d(e, "v", (function() {
                return R
            })), n.d(e, "w", (function() {
                return P
            })), n.d(e, "x", (function() {
                return N
            })), n.d(e, "y", (function() {
                return Y
            })), n.d(e, "z", (function() {
                return $
            }));
            var o = n(6),
                r = n(25),
                c = n(176),
                d = n(22),
                h = n(58),
                l = n(171),
                f = n(5),
                _ = n(14),
                S = n(99),
                v = n(260);

            function E(t, e) {
                return Object(_.c)().captureException(t, Object(v.a)(e))
            }

            function O(t, e) {
                const n = "string" == typeof e ? e : void 0,
                    o = "string" != typeof e ? {
                        captureContext: e
                    } : void 0;
                return Object(_.c)().captureMessage(t, n, o)
            }

            function m(t, e) {
                return Object(_.c)().captureEvent(t, e)
            }

            function j(t) {
                Object(_.c)().configureScope(t)
            }

            function k(t, e) {
                Object(_.c)().addBreadcrumb(t, e)
            }

            function w(t, e) {
                Object(_.c)().setContext(t, e)
            }

            function y(t) {
                Object(_.c)().setExtras(t)
            }

            function x(t, e) {
                Object(_.c)().setExtra(t, e)
            }

            function I(t) {
                Object(_.c)().setTags(t)
            }

            function T(t, e) {
                Object(_.c)().setTag(t, e)
            }

            function C(t) {
                Object(_.c)().setUser(t)
            }

            function $(...t) {
                const e = Object(_.c)();
                if (2 === t.length) {
                    const [n, o] = t;
                    return n ? e.withScope((() => (e.getStackTop().scope = n, o(n)))) : e.withScope(o)
                }
                return e.withScope(t[0])
            }

            function N(t) {
                return Object(_.h)((() => t(Object(_.e)())))
            }

            function P(span, t) {
                return $((e => (e.setSpan(span), t(e))))
            }

            function R(t, e) {
                return Object(_.c)().startTransaction({ ...t
                }, e)
            }

            function D(t, e) {
                const n = z(),
                    c = B();
                if (c) {
                    if (c.captureCheckIn) return c.captureCheckIn(t, e, n);
                    f.a && o.b.warn("Cannot capture check-in. Client does not support sending check-ins.")
                } else f.a && o.b.warn("Cannot capture check-in. No client defined.");
                return Object(r.f)()
            }

            function Y(t, e, n) {
                const o = D({
                        monitorSlug: t,
                        status: "in_progress"
                    }, n),
                    r = Object(c.b)();

                function h(e) {
                    D({
                        monitorSlug: t,
                        status: e,
                        checkInId: o,
                        duration: Object(c.b)() - r
                    })
                }
                let l;
                try {
                    l = e()
                } catch (t) {
                    throw h("error"), t
                }
                return Object(d.l)(l) ? Promise.resolve(l).then((() => {
                    h("ok")
                }), (() => {
                    h("error")
                })) : h("ok"), l
            }
            async function M(t) {
                const e = B();
                return e ? e.flush(t) : (f.a && o.b.warn("Cannot flush events. No client defined."), Promise.resolve(!1))
            }
            async function A(t) {
                const e = B();
                return e ? e.close(t) : (f.a && o.b.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1))
            }

            function U() {
                return Object(_.c)().lastEventId()
            }

            function B() {
                return Object(_.c)().getClient()
            }

            function F() {
                return !!B()
            }

            function z() {
                return Object(_.c)().getScope()
            }

            function H(t) {
                const e = B(),
                    n = Object(_.e)(),
                    o = z(),
                    {
                        release: r,
                        environment: c = l.a
                    } = e && e.getOptions() || {},
                    {
                        userAgent: d
                    } = h.a.navigator || {},
                    f = Object(S.b)({
                        release: r,
                        environment: c,
                        user: o.getUser() || n.getUser(),
                        ...d && {
                            userAgent: d
                        },
                        ...t
                    }),
                    v = n.getSession();
                return v && "ok" === v.status && Object(S.c)(v, {
                    status: "exited"
                }), J(), n.setSession(f), o.setSession(f), f
            }

            function J() {
                const t = Object(_.e)(),
                    e = z(),
                    n = e.getSession() || t.getSession();
                n && Object(S.a)(n), K(), t.setSession(), e.setSession()
            }

            function K() {
                const t = Object(_.e)(),
                    e = z(),
                    n = B(),
                    o = e.getSession() || t.getSession();
                o && n && n.captureSession && n.captureSession(o)
            }

            function L(t = !1) {
                t ? J() : K()
            }
        },
        14: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return m
            })), n.d(e, "b", (function() {
                return I
            })), n.d(e, "c", (function() {
                return w
            })), n.d(e, "d", (function() {
                return N
            })), n.d(e, "e", (function() {
                return y
            })), n.d(e, "f", (function() {
                return j
            })), n.d(e, "g", (function() {
                return k
            })), n.d(e, "h", (function() {
                return C
            })), n.d(e, "i", (function() {
                return T
            })), n.d(e, "j", (function() {
                return P
            }));
            var o = n(22),
                r = n(25),
                c = n(176),
                d = n(6),
                h = n(58),
                l = n(171),
                f = n(5),
                _ = n(160),
                S = n(99),
                v = n(237);
            const E = parseFloat(v.a),
                O = 100;
            class m {
                constructor(t, e, n, o = E) {
                    let r, c;
                    this._version = o, e ? r = e : (r = new _.a, r.setClient(t)), n ? c = n : (c = new _.a, c.setClient(t)), this._stack = [{
                        scope: r
                    }], t && this.bindClient(t), this._isolationScope = c
                }
                isOlderThan(t) {
                    return this._version < t
                }
                bindClient(t) {
                    const e = this.getStackTop();
                    e.client = t, e.scope.setClient(t), t && t.setupIntegrations && t.setupIntegrations()
                }
                pushScope() {
                    const t = this.getScope().clone();
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: t
                    }), t
                }
                popScope() {
                    return !(this.getStack().length <= 1) && !!this.getStack().pop()
                }
                withScope(t) {
                    const e = this.pushScope();
                    let n;
                    try {
                        n = t(e)
                    } catch (t) {
                        throw this.popScope(), t
                    }
                    return Object(o.l)(n) ? n.then((t => (this.popScope(), t)), (t => {
                        throw this.popScope(), t
                    })) : (this.popScope(), n)
                }
                getClient() {
                    return this.getStackTop().client
                }
                getScope() {
                    return this.getStackTop().scope
                }
                getIsolationScope() {
                    return this._isolationScope
                }
                getStack() {
                    return this._stack
                }
                getStackTop() {
                    return this._stack[this._stack.length - 1]
                }
                captureException(t, e) {
                    const n = this._lastEventId = e && e.event_id ? e.event_id : Object(r.f)(),
                        o = new Error("Sentry syntheticException");
                    return this.getScope().captureException(t, {
                        originalException: t,
                        syntheticException: o,
                        ...e,
                        event_id: n
                    }), n
                }
                captureMessage(t, e, n) {
                    const o = this._lastEventId = n && n.event_id ? n.event_id : Object(r.f)(),
                        c = new Error(t);
                    return this.getScope().captureMessage(t, e, {
                        originalException: t,
                        syntheticException: c,
                        ...n,
                        event_id: o
                    }), o
                }
                captureEvent(t, e) {
                    const n = e && e.event_id ? e.event_id : Object(r.f)();
                    return t.type || (this._lastEventId = n), this.getScope().captureEvent(t, { ...e,
                        event_id: n
                    }), n
                }
                lastEventId() {
                    return this._lastEventId
                }
                addBreadcrumb(t, e) {
                    const {
                        scope: n,
                        client: o
                    } = this.getStackTop();
                    if (!o) return;
                    const {
                        beforeBreadcrumb: r = null,
                        maxBreadcrumbs: h = O
                    } = o.getOptions && o.getOptions() || {};
                    if (h <= 0) return;
                    const l = {
                            timestamp: Object(c.a)(),
                            ...t
                        },
                        f = r ? Object(d.a)((() => r(l, e))) : l;
                    null !== f && (o.emit && o.emit("beforeAddBreadcrumb", f, e), n.addBreadcrumb(f, h))
                }
                setUser(t) {
                    this.getScope().setUser(t), this.getIsolationScope().setUser(t)
                }
                setTags(t) {
                    this.getScope().setTags(t), this.getIsolationScope().setTags(t)
                }
                setExtras(t) {
                    this.getScope().setExtras(t), this.getIsolationScope().setExtras(t)
                }
                setTag(t, e) {
                    this.getScope().setTag(t, e), this.getIsolationScope().setTag(t, e)
                }
                setExtra(t, e) {
                    this.getScope().setExtra(t, e), this.getIsolationScope().setExtra(t, e)
                }
                setContext(t, e) {
                    this.getScope().setContext(t, e), this.getIsolationScope().setContext(t, e)
                }
                configureScope(t) {
                    const {
                        scope: e,
                        client: n
                    } = this.getStackTop();
                    n && t(e)
                }
                run(t) {
                    const e = k(this);
                    try {
                        t(this)
                    } finally {
                        k(e)
                    }
                }
                getIntegration(t) {
                    const e = this.getClient();
                    if (!e) return null;
                    try {
                        return e.getIntegration(t)
                    } catch (e) {
                        return f.a && d.b.warn(`Cannot retrieve integration ${t.id} from the current Hub`), null
                    }
                }
                startTransaction(t, e) {
                    const n = this._callExtensionMethod("startTransaction", t, e);
                    if (f.a && !n) {
                        this.getClient() ? d.b.warn("Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':\nSentry.addTracingExtensions();\nSentry.init({...});\n") : d.b.warn("Tracing extension 'startTransaction' is missing. You should 'init' the SDK before calling 'startTransaction'")
                    }
                    return n
                }
                traceHeaders() {
                    return this._callExtensionMethod("traceHeaders")
                }
                captureSession(t = !1) {
                    if (t) return this.endSession();
                    this._sendSessionUpdate()
                }
                endSession() {
                    const t = this.getStackTop().scope,
                        e = t.getSession();
                    e && Object(S.a)(e), this._sendSessionUpdate(), t.setSession()
                }
                startSession(t) {
                    const {
                        scope: e,
                        client: n
                    } = this.getStackTop(), {
                        release: o,
                        environment: r = l.a
                    } = n && n.getOptions() || {}, {
                        userAgent: c
                    } = h.a.navigator || {}, d = Object(S.b)({
                        release: o,
                        environment: r,
                        user: e.getUser(),
                        ...c && {
                            userAgent: c
                        },
                        ...t
                    }), f = e.getSession && e.getSession();
                    return f && "ok" === f.status && Object(S.c)(f, {
                        status: "exited"
                    }), this.endSession(), e.setSession(d), d
                }
                shouldSendDefaultPii() {
                    const t = this.getClient(),
                        e = t && t.getOptions();
                    return Boolean(e && e.sendDefaultPii)
                }
                _sendSessionUpdate() {
                    const {
                        scope: t,
                        client: e
                    } = this.getStackTop(), n = t.getSession();
                    n && e && e.captureSession && e.captureSession(n)
                }
                _callExtensionMethod(t, ...e) {
                    const n = j().__SENTRY__;
                    if (n && n.extensions && "function" == typeof n.extensions[t]) return n.extensions[t].apply(this, e);
                    f.a && d.b.warn(`Extension method ${t} couldn't be found, doing nothing.`)
                }
            }

            function j() {
                return h.a.__SENTRY__ = h.a.__SENTRY__ || {
                    extensions: {},
                    hub: void 0
                }, h.a
            }

            function k(t) {
                const e = j(),
                    n = N(e);
                return P(e, t), n
            }

            function w() {
                const t = j();
                if (t.__SENTRY__ && t.__SENTRY__.acs) {
                    const e = t.__SENTRY__.acs.getCurrentHub();
                    if (e) return e
                }
                return x(t)
            }

            function y() {
                return w().getIsolationScope()
            }

            function x(t = j()) {
                return $(t) && !N(t).isOlderThan(E) || P(t, new m), N(t)
            }

            function I(t, e = x()) {
                if (!$(t) || N(t).isOlderThan(E)) {
                    const n = e.getClient(),
                        o = e.getScope(),
                        r = e.getIsolationScope();
                    P(t, new m(n, o.clone(), r.clone()))
                }
            }

            function T(t) {
                const e = j();
                e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.acs = t
            }

            function C(t, e = {}) {
                const n = j();
                return n.__SENTRY__ && n.__SENTRY__.acs ? n.__SENTRY__.acs.runWithAsyncContext(t, e) : t()
            }

            function $(t) {
                return !!(t && t.__SENTRY__ && t.__SENTRY__.hub)
            }

            function N(t) {
                return Object(h.c)("hub", (() => new m), t)
            }

            function P(t, e) {
                if (!t) return !1;
                return (t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0
            }
        },
        159: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return f
            })), n.d(e, "b", (function() {
                return l
            })), n.d(e, "c", (function() {
                return _
            }));
            var o = n(58),
                r = n(175),
                c = n(6),
                d = n(22),
                h = n(5);

            function l() {
                return Object(o.c)("globalEventProcessors", (() => []))
            }

            function f(t) {
                l().push(t)
            }

            function _(t, e, n, o = 0) {
                return new r.a(((r, l) => {
                    const f = t[o];
                    if (null === e || "function" != typeof f) r(e);
                    else {
                        const S = f({ ...e
                        }, n);
                        h.a && f.id && null === S && c.b.log(`Event processor "${f.id}" dropped event`), Object(d.l)(S) ? S.then((e => _(t, e, n, o + 1).then(r))).then(null, l) : _(t, S, n, o + 1).then(r).then(null, l)
                    }
                }))
            }
        },
        171: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            const o = "production"
        },
        233: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            })), n.d(e, "b", (function() {
                return h
            }));
            var o = n(50),
                r = n(198);

            function c(t) {
                const e = t.protocol ? `${t.protocol}:` : "",
                    n = t.port ? `:${t.port}` : "";
                return `${e}//${t.host}${n}${t.path?`/${t.path}`:""}/api/`
            }

            function d(t, e = {}) {
                const n = "string" == typeof e ? e : e.tunnel,
                    r = "string" != typeof e && e._metadata ? e._metadata.sdk : void 0;
                return n || `${function(t){return`${c(t)}${t.projectId}/envelope/`}(t)}?${function(t,e){return Object(o.f)({sentry_key:t.publicKey,sentry_version:"7",...e&&{sentry_client:`${e.name}/${e.version}`}})}(t,r)}`
            }

            function h(t, e) {
                const n = Object(r.c)(t);
                if (!n) return "";
                const o = `${c(n)}embed/error-page/`;
                let d = `dsn=${Object(r.b)(n)}`;
                for (const t in e)
                    if ("dsn" !== t && "onClose" !== t)
                        if ("user" === t) {
                            const t = e.user;
                            if (!t) continue;
                            t.name && (d += `&name=${encodeURIComponent(t.name)}`), t.email && (d += `&email=${encodeURIComponent(t.email)}`)
                        } else d += `&${encodeURIComponent(t)}=${encodeURIComponent(e[t])}`;
                return `${o}?${d}`
            }
        },
        261: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            })), n.d(e, "b", (function() {
                return c
            }));
            var o = n(109),
                r = n(198);

            function c(t, e, n, c) {
                const d = Object(o.h)(n),
                    h = {
                        sent_at: (new Date).toISOString(),
                        ...d && {
                            sdk: d
                        },
                        ...!!c && e && {
                            dsn: Object(r.b)(e)
                        }
                    },
                    l = "aggregates" in t ? [{
                        type: "sessions"
                    }, t] : [{
                        type: "session"
                    }, t.toJSON()];
                return Object(o.c)(h, [l])
            }

            function d(t, e, n, r) {
                const c = Object(o.h)(n),
                    d = t.type && "replay_event" !== t.type ? t.type : "event";
                ! function(t, e) {
                    e && (t.sdk = t.sdk || {}, t.sdk.name = t.sdk.name || e.name, t.sdk.version = t.sdk.version || e.version, t.sdk.integrations = [...t.sdk.integrations || [], ...e.integrations || []], t.sdk.packages = [...t.sdk.packages || [], ...e.packages || []])
                }(t, n && n.sdk);
                const h = Object(o.d)(t, c, r, e);
                delete t.sdkProcessingMetadata;
                const l = [{
                    type: d
                }, t];
                return Object(o.c)(h, [l])
            }
        },
        307: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return I
            })), n.d(e, "b", (function() {
                return $
            }));
            var o = n(198),
                r = n(6),
                c = n(25),
                d = n(22),
                h = n(175),
                l = n(109),
                f = n(166),
                _ = n(233),
                S = n(5),
                v = n(261),
                E = n(12),
                O = n(14),
                m = n(49),
                j = n(608),
                k = n(99),
                w = n(110),
                y = n(260);
            const x = "Not capturing exception because it's already been captured.";
            class I {
                constructor(t) {
                    if (this._options = t, this._integrations = {}, this._integrationsInitialized = !1, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], t.dsn ? this._dsn = Object(o.c)(t.dsn) : S.a && r.b.warn("No DSN provided, client will not send events."), this._dsn) {
                        const e = Object(_.a)(this._dsn, t);
                        this._transport = t.transport({
                            tunnel: this._options.tunnel,
                            recordDroppedEvent: this.recordDroppedEvent.bind(this),
                            ...t.transportOptions,
                            url: e
                        })
                    }
                }
                captureException(t, e, n) {
                    if (Object(c.d)(t)) return void(S.a && r.b.log(x));
                    let o = e && e.event_id;
                    return this._process(this.eventFromException(t, e).then((t => this._captureEvent(t, e, n))).then((t => {
                        o = t
                    }))), o
                }
                captureMessage(t, e, n, o) {
                    let r = n && n.event_id;
                    const c = Object(d.f)(t) ? t : String(t),
                        h = Object(d.h)(t) ? this.eventFromMessage(c, e, n) : this.eventFromException(t, n);
                    return this._process(h.then((t => this._captureEvent(t, n, o))).then((t => {
                        r = t
                    }))), r
                }
                captureEvent(t, e, n) {
                    if (e && e.originalException && Object(c.d)(e.originalException)) return void(S.a && r.b.log(x));
                    let o = e && e.event_id;
                    const d = (t.sdkProcessingMetadata || {}).capturedSpanScope;
                    return this._process(this._captureEvent(t, e, d || n).then((t => {
                        o = t
                    }))), o
                }
                captureSession(t) {
                    "string" != typeof t.release ? S.a && r.b.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), Object(k.c)(t, {
                        init: !1
                    }))
                }
                getDsn() {
                    return this._dsn
                }
                getOptions() {
                    return this._options
                }
                getSdkMetadata() {
                    return this._options._metadata
                }
                getTransport() {
                    return this._transport
                }
                flush(t) {
                    const e = this._transport;
                    return e ? (this.metricsAggregator && this.metricsAggregator.flush(), this._isClientDoneProcessing(t).then((n => e.flush(t).then((t => n && t))))) : Object(h.c)(!0)
                }
                close(t) {
                    return this.flush(t).then((t => (this.getOptions().enabled = !1, this.metricsAggregator && this.metricsAggregator.close(), t)))
                }
                getEventProcessors() {
                    return this._eventProcessors
                }
                addEventProcessor(t) {
                    this._eventProcessors.push(t)
                }
                setupIntegrations(t) {
                    (t && !this._integrationsInitialized || this._isEnabled() && !this._integrationsInitialized) && this._setupIntegrations()
                }
                init() {
                    this._isEnabled() && this._setupIntegrations()
                }
                getIntegrationById(t) {
                    return this.getIntegrationByName(t)
                }
                getIntegrationByName(t) {
                    return this._integrations[t]
                }
                getIntegration(t) {
                    try {
                        return this._integrations[t.id] || null
                    } catch (e) {
                        return S.a && r.b.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
                    }
                }
                addIntegration(t) {
                    const e = this._integrations[t.name];
                    Object(m.f)(this, t, this._integrations), e || Object(m.b)(this, [t])
                }
                sendEvent(t, e = {}) {
                    this.emit("beforeSendEvent", t, e);
                    let n = Object(v.a)(t, this._dsn, this._options._metadata, this._options.tunnel);
                    for (const t of e.attachments || []) n = Object(l.a)(n, Object(l.b)(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
                    const o = this._sendEnvelope(n);
                    o && o.then((e => this.emit("afterSendEvent", t, e)), null)
                }
                sendSession(t) {
                    const e = Object(v.b)(t, this._dsn, this._options._metadata, this._options.tunnel);
                    this._sendEnvelope(e)
                }
                recordDroppedEvent(t, e, n) {
                    if (this._options.sendClientReports) {
                        const n = `${t}:${e}`;
                        S.a && r.b.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
                    }
                }
                captureAggregateMetrics(t) {
                    S.a && r.b.log(`Flushing aggregated metrics, number of metrics: ${t.length}`);
                    const e = Object(j.a)(t, this._dsn, this._options._metadata, this._options.tunnel);
                    this._sendEnvelope(e)
                }
                on(t, e) {
                    this._hooks[t] || (this._hooks[t] = []), this._hooks[t].push(e)
                }
                emit(t, ...e) {
                    this._hooks[t] && this._hooks[t].forEach((t => t(...e)))
                }
                _setupIntegrations() {
                    const {
                        integrations: t
                    } = this._options;
                    this._integrations = Object(m.g)(this, t), Object(m.b)(this, t), this._integrationsInitialized = !0
                }
                _updateSessionFromEvent(t, e) {
                    let n = !1,
                        o = !1;
                    const r = e.exception && e.exception.values;
                    if (r) {
                        o = !0;
                        for (const t of r) {
                            const e = t.mechanism;
                            if (e && !1 === e.handled) {
                                n = !0;
                                break
                            }
                        }
                    }
                    const c = "ok" === t.status;
                    (c && 0 === t.errors || c && n) && (Object(k.c)(t, { ...n && {
                            status: "crashed"
                        },
                        errors: t.errors || Number(o || n)
                    }), this.captureSession(t))
                }
                _isClientDoneProcessing(t) {
                    return new h.a((e => {
                        let n = 0;
                        const o = setInterval((() => {
                            0 == this._numProcessing ? (clearInterval(o), e(!0)) : (n += 1, t && n >= t && (clearInterval(o), e(!1)))
                        }), 1)
                    }))
                }
                _isEnabled() {
                    return !1 !== this.getOptions().enabled && void 0 !== this._transport
                }
                _prepareEvent(t, e, n, o = Object(O.e)()) {
                    const r = this.getOptions(),
                        c = Object.keys(this._integrations);
                    return !e.integrations && c.length > 0 && (e.integrations = c), this.emit("preprocessEvent", t, e), Object(y.b)(r, t, e, n, this, o).then((t => {
                        if (null === t) return t;
                        const e = { ...o.getPropagationContext(),
                            ...n ? n.getPropagationContext() : void 0
                        };
                        if (!(t.contexts && t.contexts.trace) && e) {
                            const {
                                traceId: o,
                                spanId: r,
                                parentSpanId: c,
                                dsc: d
                            } = e;
                            t.contexts = {
                                trace: {
                                    trace_id: o,
                                    span_id: r,
                                    parent_span_id: c
                                },
                                ...t.contexts
                            };
                            const h = d || Object(w.a)(o, this, n);
                            t.sdkProcessingMetadata = {
                                dynamicSamplingContext: h,
                                ...t.sdkProcessingMetadata
                            }
                        }
                        return t
                    }))
                }
                _captureEvent(t, e = {}, n) {
                    return this._processEvent(t, e, n).then((t => t.event_id), (t => {
                        if (S.a) {
                            const e = t;
                            "log" === e.logLevel ? r.b.log(e.message) : r.b.warn(e)
                        }
                    }))
                }
                _processEvent(t, e, n) {
                    const o = this.getOptions(),
                        {
                            sampleRate: r
                        } = o,
                        c = C(t),
                        l = T(t),
                        _ = t.type || "error",
                        S = `before send for type \`${_}\``;
                    if (l && "number" == typeof r && Math.random() > r) return this.recordDroppedEvent("sample_rate", "error", t), Object(h.b)(new f.a(`Discarding event because it's not included in the random sample (sampling rate = ${r})`, "log"));
                    const v = "replay_event" === _ ? "replay" : _,
                        E = (t.sdkProcessingMetadata || {}).capturedSpanIsolationScope;
                    return this._prepareEvent(t, e, n, E).then((n => {
                        if (null === n) throw this.recordDroppedEvent("event_processor", v, t), new f.a("An event processor returned `null`, will not send event.", "log");
                        if (e.data && !0 === e.data.__sentry__) return n;
                        const r = function(t, e, n) {
                            const {
                                beforeSend: o,
                                beforeSendTransaction: r
                            } = t;
                            if (T(e) && o) return o(e, n);
                            if (C(e) && r) return r(e, n);
                            return e
                        }(o, n, e);
                        return function(t, e) {
                            const n = `${e} must return \`null\` or a valid event.`;
                            if (Object(d.l)(t)) return t.then((t => {
                                if (!Object(d.g)(t) && null !== t) throw new f.a(n);
                                return t
                            }), (t => {
                                throw new f.a(`${e} rejected with ${t}`)
                            }));
                            if (!Object(d.g)(t) && null !== t) throw new f.a(n);
                            return t
                        }(r, S)
                    })).then((o => {
                        if (null === o) throw this.recordDroppedEvent("before_send", v, t), new f.a(`${S} returned \`null\`, will not send event.`, "log");
                        const r = n && n.getSession();
                        !c && r && this._updateSessionFromEvent(r, o);
                        const d = o.transaction_info;
                        if (c && d && o.transaction !== t.transaction) {
                            const source = "custom";
                            o.transaction_info = { ...d,
                                source: source
                            }
                        }
                        return this.sendEvent(o, e), o
                    })).then(null, (t => {
                        if (t instanceof f.a) throw t;
                        throw this.captureException(t, {
                            data: {
                                __sentry__: !0
                            },
                            originalException: t
                        }), new f.a(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${t}`)
                    }))
                }
                _process(t) {
                    this._numProcessing++, t.then((t => (this._numProcessing--, t)), (t => (this._numProcessing--, t)))
                }
                _sendEnvelope(t) {
                    if (this.emit("beforeEnvelope", t), this._isEnabled() && this._transport) return this._transport.send(t).then(null, (t => {
                        S.a && r.b.error("Error while sending event:", t)
                    }));
                    S.a && r.b.error("Transport disabled")
                }
                _clearOutcomes() {
                    const t = this._outcomes;
                    return this._outcomes = {}, Object.keys(t).map((e => {
                        const [n, o] = e.split(":");
                        return {
                            reason: n,
                            category: o,
                            quantity: t[e]
                        }
                    }))
                }
            }

            function T(t) {
                return void 0 === t.type
            }

            function C(t) {
                return "transaction" === t.type
            }

            function $(t) {
                const e = Object(E.k)();
                e && e.addEventProcessor && e.addEventProcessor(t)
            }
        },
        356: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            }));
            var o = n(198),
                r = n(50),
                c = n(109);

            function d(t, e, n, d, h) {
                const l = {
                    sent_at: (new Date).toISOString()
                };
                n && n.sdk && (l.sdk = {
                    name: n.sdk.name,
                    version: n.sdk.version
                }), d && h && (l.dsn = Object(o.b)(h)), e && (l.trace = Object(r.c)(e));
                const f = function(t) {
                    return [{
                        type: "check_in"
                    }, t]
                }(t);
                return Object(c.c)(l, [f])
            }
        },
        5: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            const o = !1
        }
    }
]);