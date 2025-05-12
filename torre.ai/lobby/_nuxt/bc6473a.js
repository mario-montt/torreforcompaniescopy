! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "1cc7fdde-a3be-444b-9561-985536420de3", t._sentryDebugIdIdentifier = "sentry-dbid-1cc7fdde-a3be-444b-9561-985536420de3")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [65], {
        106: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return I
            })), n.d(e, "b", (function() {
                return T
            })), n.d(e, "c", (function() {
                return A
            })), n.d(e, "d", (function() {
                return j
            })), n.d(e, "e", (function() {
                return x
            })), n.d(e, "f", (function() {
                return O
            })), n.d(e, "g", (function() {
                return y
            })), n.d(e, "h", (function() {
                return S
            }));
            var r = n(457),
                o = n(6),
                c = n(50),
                d = n(5),
                h = n(14),
                l = n(20),
                f = n(110),
                _ = n(12),
                m = n(273),
                v = n(238);

            function S(t, e, n = (() => {}), r = (() => {})) {
                const o = Object(h.c)(),
                    c = Object(_.l)(),
                    d = c.getSpan(),
                    l = E(t),
                    f = k(o, {
                        parentSpan: d,
                        spanContext: l,
                        forceTransaction: !1,
                        scope: c
                    });
                return c.setSpan(f), Object(m.a)((() => e(f)), (t => {
                    f && f.setStatus("internal_error"), n(t, f)
                }), (() => {
                    f && f.end(), c.setSpan(d), r()
                }))
            }

            function O(t, e) {
                const n = E(t);
                return Object(h.h)((() => Object(_.z)(t.scope, (r => {
                    const o = Object(h.c)(),
                        c = r.getSpan(),
                        d = t.onlyIfParent && !c ? void 0 : k(o, {
                            parentSpan: c,
                            spanContext: n,
                            forceTransaction: t.forceTransaction,
                            scope: r
                        });
                    return Object(m.a)((() => e(d)), (() => {
                        if (d) {
                            const {
                                status: t
                            } = Object(l.e)(d);
                            t && "ok" !== t || d.setStatus("internal_error")
                        }
                    }), (() => d && d.end()))
                }))))
            }
            const j = O;

            function y(t, e) {
                const n = E(t);
                return Object(h.h)((() => Object(_.z)(t.scope, (r => {
                    const o = Object(h.c)(),
                        c = r.getSpan(),
                        d = t.onlyIfParent && !c ? void 0 : k(o, {
                            parentSpan: c,
                            spanContext: n,
                            forceTransaction: t.forceTransaction,
                            scope: r
                        });

                    function f() {
                        d && d.end()
                    }
                    return Object(m.a)((() => e(d, f)), (() => {
                        if (d && d.isRecording()) {
                            const {
                                status: t
                            } = Object(l.e)(d);
                            t && "ok" !== t || d.setStatus("internal_error")
                        }
                    }))
                }))))
            }

            function x(t) {
                if (!Object(v.a)()) return;
                const e = E(t),
                    n = Object(h.c)(),
                    r = t.scope ? t.scope.getSpan() : T();
                if (t.onlyIfParent && !r) return;
                const o = (t.scope || Object(_.l)()).clone();
                return k(n, {
                    parentSpan: r,
                    spanContext: e,
                    forceTransaction: t.forceTransaction,
                    scope: o
                })
            }

            function T() {
                return Object(_.l)().getSpan()
            }
            const I = ({
                sentryTrace: t,
                baggage: e
            }, n) => {
                const l = Object(_.l)(),
                    {
                        traceparentData: f,
                        dynamicSamplingContext: m,
                        propagationContext: v
                    } = Object(r.c)(t, e);
                l.setPropagationContext(v), d.a && f && o.b.log(`[Tracing] Continuing trace ${f.traceId}.`);
                const S = { ...f,
                    metadata: Object(c.c)({
                        dynamicSamplingContext: m
                    })
                };
                return n ? Object(h.h)((() => n(S))) : S
            };

            function k(t, {
                parentSpan: e,
                spanContext: n,
                forceTransaction: r,
                scope: o
            }) {
                if (!Object(v.a)()) return;
                const d = Object(h.e)();
                let span;
                if (e && !r) span = e.startChild(n);
                else if (e) {
                    const r = Object(f.b)(e),
                        {
                            traceId: o,
                            spanId: c
                        } = e.spanContext(),
                        d = Object(l.c)(e);
                    span = t.startTransaction({
                        traceId: o,
                        parentSpanId: c,
                        parentSampled: d,
                        ...n,
                        metadata: {
                            dynamicSamplingContext: r,
                            ...n.metadata
                        }
                    })
                } else {
                    const {
                        traceId: e,
                        dsc: r,
                        parentSpanId: c,
                        sampled: h
                    } = { ...d.getPropagationContext(),
                        ...o.getPropagationContext()
                    };
                    span = t.startTransaction({
                        traceId: e,
                        parentSpanId: c,
                        parentSampled: h,
                        ...n,
                        metadata: {
                            dynamicSamplingContext: r,
                            ...n.metadata
                        }
                    })
                }
                return o.setSpan(span),
                    function(span, t, e) {
                        span && (Object(c.a)(span, w, e), Object(c.a)(span, C, t))
                    }(span, o, d), span
            }

            function E(t) {
                if (t.startTime) {
                    const e = { ...t
                    };
                    return e.startTimestamp = Object(l.d)(t.startTime), delete e.startTime, e
                }
                return t
            }
            const C = "_sentryScope",
                w = "_sentryIsolationScope";

            function A(span) {
                return {
                    scope: span._sentryScope,
                    isolationScope: span._sentryIsolationScope
                }
            }
        },
        110: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            })), n.d(e, "b", (function() {
                return f
            }));
            var r = n(50),
                o = n(171),
                c = n(12),
                d = n(161),
                h = n(20);

            function l(t, e, n) {
                const c = e.getOptions(),
                    {
                        publicKey: d
                    } = e.getDsn() || {},
                    {
                        segment: h
                    } = n && n.getUser() || {},
                    l = Object(r.c)({
                        environment: c.environment || o.a,
                        release: c.release,
                        user_segment: h,
                        public_key: d,
                        trace_id: t
                    });
                return e.emit && e.emit("createDsc", l), l
            }

            function f(span) {
                const t = Object(c.k)();
                if (!t) return {};
                const e = l(Object(h.e)(span).trace_id || "", t, Object(c.l)()),
                    n = Object(d.a)(span);
                if (!n) return e;
                const r = n && n._frozenDynamicSamplingContext;
                if (r) return r;
                const {
                    sampleRate: o,
                    source: source
                } = n.metadata;
                null != o && (e.sample_rate = `${o}`);
                const f = Object(h.e)(n);
                return source && "url" !== source && (e.transaction = f.description), e.sampled = String(Object(h.c)(n)), t.emit && t.emit("createDsc", e), e
            }
        },
        119: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            })), n.d(e, "b", (function() {
                return l
            })), n.d(e, "c", (function() {
                return v
            })), n.d(e, "d", (function() {
                return h
            })), n.d(e, "e", (function() {
                return d
            })), n.d(e, "f", (function() {
                return c
            }));
            var r = n(50);

            function o(t, e, n, o) {
                return `${t}${e}${n}${Object.entries(Object(r.c)(o)).sort(((a,b)=>a[0].localeCompare(b[0])))}`
            }

            function c(s) {
                let t = 0;
                for (let i = 0; i < s.length; i++) {
                    t = (t << 5) - t + s.charCodeAt(i), t &= t
                }
                return t >>> 0
            }

            function d(t) {
                let e = "";
                for (const n of t) {
                    const t = Object.entries(n.tags),
                        r = t.length > 0 ? `|#${t.map((([t,e])=>`${t}:${e}`)).join(",")}` : "";
                    e += `${n.name}@${n.unit}:${n.metric}|${n.metricType}${r}|T${n.timestamp}\n`
                }
                return e
            }

            function h(t) {
                return t.replace(/[^\w]+/gi, "_")
            }

            function l(t) {
                return t.replace(/[^\w\-.]+/gi, "_")
            }

            function f(t) {
                return t.replace(/[^\w\-./]+/gi, "")
            }
            const _ = [
                ["\n", "\\n"],
                ["\r", "\\r"],
                ["\t", "\\t"],
                ["\\", "\\\\"],
                ["|", "\\u{7c}"],
                [",", "\\u{2c}"]
            ];

            function m(t) {
                return [...t].reduce(((t, e) => t + function(input) {
                    for (const [t, e] of _)
                        if (input === t) return e;
                    return input
                }(e)), "")
            }

            function v(t) {
                const e = {};
                for (const n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        e[f(n)] = m(String(t[n]))
                    }
                return e
            }
        },
        160: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return m
            })), n.d(e, "b", (function() {
                return v
            })), n.d(e, "c", (function() {
                return S
            }));
            var r = n(22),
                o = n(176),
                c = n(25),
                d = n(6),
                h = n(159),
                l = n(99),
                f = n(187);
            let _;
            class m {
                constructor() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = O()
                }
                static clone(t) {
                    return t ? t.clone() : new m
                }
                clone() {
                    const t = new m;
                    return t._breadcrumbs = [...this._breadcrumbs], t._tags = { ...this._tags
                    }, t._extra = { ...this._extra
                    }, t._contexts = { ...this._contexts
                    }, t._user = this._user, t._level = this._level, t._span = this._span, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [...this._eventProcessors], t._requestSession = this._requestSession, t._attachments = [...this._attachments], t._sdkProcessingMetadata = { ...this._sdkProcessingMetadata
                    }, t._propagationContext = { ...this._propagationContext
                    }, t._client = this._client, t
                }
                setClient(t) {
                    this._client = t
                }
                getClient() {
                    return this._client
                }
                addScopeListener(t) {
                    this._scopeListeners.push(t)
                }
                addEventProcessor(t) {
                    return this._eventProcessors.push(t), this
                }
                setUser(t) {
                    return this._user = t || {
                        email: void 0,
                        id: void 0,
                        ip_address: void 0,
                        segment: void 0,
                        username: void 0
                    }, this._session && Object(l.c)(this._session, {
                        user: t
                    }), this._notifyScopeListeners(), this
                }
                getUser() {
                    return this._user
                }
                getRequestSession() {
                    return this._requestSession
                }
                setRequestSession(t) {
                    return this._requestSession = t, this
                }
                setTags(t) {
                    return this._tags = { ...this._tags,
                        ...t
                    }, this._notifyScopeListeners(), this
                }
                setTag(t, e) {
                    return this._tags = { ...this._tags,
                        [t]: e
                    }, this._notifyScopeListeners(), this
                }
                setExtras(t) {
                    return this._extra = { ...this._extra,
                        ...t
                    }, this._notifyScopeListeners(), this
                }
                setExtra(t, e) {
                    return this._extra = { ...this._extra,
                        [t]: e
                    }, this._notifyScopeListeners(), this
                }
                setFingerprint(t) {
                    return this._fingerprint = t, this._notifyScopeListeners(), this
                }
                setLevel(t) {
                    return this._level = t, this._notifyScopeListeners(), this
                }
                setTransactionName(t) {
                    return this._transactionName = t, this._notifyScopeListeners(), this
                }
                setContext(t, e) {
                    return null === e ? delete this._contexts[t] : this._contexts[t] = e, this._notifyScopeListeners(), this
                }
                setSpan(span) {
                    return this._span = span, this._notifyScopeListeners(), this
                }
                getSpan() {
                    return this._span
                }
                getTransaction() {
                    const span = this._span;
                    return span && span.transaction
                }
                setSession(t) {
                    return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this
                }
                getSession() {
                    return this._session
                }
                update(t) {
                    if (!t) return this;
                    const e = "function" == typeof t ? t(this) : t;
                    if (e instanceof m) {
                        const t = e.getScopeData();
                        this._tags = { ...this._tags,
                            ...t.tags
                        }, this._extra = { ...this._extra,
                            ...t.extra
                        }, this._contexts = { ...this._contexts,
                            ...t.contexts
                        }, t.user && Object.keys(t.user).length && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint.length && (this._fingerprint = t.fingerprint), e.getRequestSession() && (this._requestSession = e.getRequestSession()), t.propagationContext && (this._propagationContext = t.propagationContext)
                    } else if (Object(r.g)(e)) {
                        const e = t;
                        this._tags = { ...this._tags,
                            ...e.tags
                        }, this._extra = { ...this._extra,
                            ...e.extra
                        }, this._contexts = { ...this._contexts,
                            ...e.contexts
                        }, e.user && (this._user = e.user), e.level && (this._level = e.level), e.fingerprint && (this._fingerprint = e.fingerprint), e.requestSession && (this._requestSession = e.requestSession), e.propagationContext && (this._propagationContext = e.propagationContext)
                    }
                    return this
                }
                clear() {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._requestSession = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this._attachments = [], this._propagationContext = O(), this
                }
                addBreadcrumb(t, e) {
                    const n = "number" == typeof e ? e : 100;
                    if (n <= 0) return this;
                    const r = {
                            timestamp: Object(o.a)(),
                            ...t
                        },
                        c = this._breadcrumbs;
                    return c.push(r), this._breadcrumbs = c.length > n ? c.slice(-n) : c, this._notifyScopeListeners(), this
                }
                getLastBreadcrumb() {
                    return this._breadcrumbs[this._breadcrumbs.length - 1]
                }
                clearBreadcrumbs() {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }
                addAttachment(t) {
                    return this._attachments.push(t), this
                }
                getAttachments() {
                    return this.getScopeData().attachments
                }
                clearAttachments() {
                    return this._attachments = [], this
                }
                getScopeData() {
                    const {
                        _breadcrumbs: t,
                        _attachments: e,
                        _contexts: n,
                        _tags: r,
                        _extra: o,
                        _user: c,
                        _level: d,
                        _fingerprint: h,
                        _eventProcessors: l,
                        _propagationContext: f,
                        _sdkProcessingMetadata: _,
                        _transactionName: m,
                        _span: v
                    } = this;
                    return {
                        breadcrumbs: t,
                        attachments: e,
                        contexts: n,
                        tags: r,
                        extra: o,
                        user: c,
                        level: d,
                        fingerprint: h || [],
                        eventProcessors: l,
                        propagationContext: f,
                        sdkProcessingMetadata: _,
                        transactionName: m,
                        span: v
                    }
                }
                applyToEvent(t, e = {}, n = []) {
                    Object(f.a)(t, this.getScopeData());
                    const r = [...n, ...Object(h.b)(), ...this._eventProcessors];
                    return Object(h.c)(r, t, e)
                }
                setSDKProcessingMetadata(t) {
                    return this._sdkProcessingMetadata = { ...this._sdkProcessingMetadata,
                        ...t
                    }, this
                }
                setPropagationContext(t) {
                    return this._propagationContext = t, this
                }
                getPropagationContext() {
                    return this._propagationContext
                }
                captureException(t, e) {
                    const n = e && e.event_id ? e.event_id : Object(c.f)();
                    if (!this._client) return d.b.warn("No client configured on scope - will not capture exception!"), n;
                    const r = new Error("Sentry syntheticException");
                    return this._client.captureException(t, {
                        originalException: t,
                        syntheticException: r,
                        ...e,
                        event_id: n
                    }, this), n
                }
                captureMessage(t, e, n) {
                    const r = n && n.event_id ? n.event_id : Object(c.f)();
                    if (!this._client) return d.b.warn("No client configured on scope - will not capture message!"), r;
                    const o = new Error(t);
                    return this._client.captureMessage(t, e, {
                        originalException: t,
                        syntheticException: o,
                        ...n,
                        event_id: r
                    }, this), r
                }
                captureEvent(t, e) {
                    const n = e && e.event_id ? e.event_id : Object(c.f)();
                    return this._client ? (this._client.captureEvent(t, { ...e,
                        event_id: n
                    }, this), n) : (d.b.warn("No client configured on scope - will not capture event!"), n)
                }
                _notifyScopeListeners() {
                    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t => {
                        t(this)
                    })), this._notifyingListeners = !1)
                }
            }

            function v() {
                return _ || (_ = new m), _
            }

            function S(t) {
                _ = t
            }

            function O() {
                return {
                    traceId: Object(c.f)(),
                    spanId: Object(c.f)().substring(16)
                }
            }
        },
        161: function(t, e, n) {
            "use strict";

            function r(span) {
                return span.transaction
            }
            n.d(e, "a", (function() {
                return r
            }))
        },
        170: function(t, e, n) {
            "use strict";
            var r;

            function o(t) {
                if (t < 400 && t >= 100) return "ok";
                if (t >= 400 && t < 500) switch (t) {
                    case 401:
                        return "unauthenticated";
                    case 403:
                        return "permission_denied";
                    case 404:
                        return "not_found";
                    case 409:
                        return "already_exists";
                    case 413:
                        return "failed_precondition";
                    case 429:
                        return "resource_exhausted";
                    default:
                        return "invalid_argument"
                }
                if (t >= 500 && t < 600) switch (t) {
                    case 501:
                        return "unimplemented";
                    case 503:
                        return "unavailable";
                    case 504:
                        return "deadline_exceeded";
                    default:
                        return "internal_error"
                }
                return "unknown_error"
            }
            n.d(e, "a", (function() {
                    return r
                })), n.d(e, "b", (function() {
                    return o
                })), n.d(e, "c", (function() {
                    return d
                })), n.d(e, "d", (function() {
                    return c
                })),
                function(t) {
                    t.Ok = "ok";
                    t.DeadlineExceeded = "deadline_exceeded";
                    t.Unauthenticated = "unauthenticated";
                    t.PermissionDenied = "permission_denied";
                    t.NotFound = "not_found";
                    t.ResourceExhausted = "resource_exhausted";
                    t.InvalidArgument = "invalid_argument";
                    t.Unimplemented = "unimplemented";
                    t.Unavailable = "unavailable";
                    t.InternalError = "internal_error";
                    t.UnknownError = "unknown_error";
                    t.Cancelled = "cancelled";
                    t.AlreadyExists = "already_exists";
                    t.FailedPrecondition = "failed_precondition";
                    t.Aborted = "aborted";
                    t.OutOfRange = "out_of_range";
                    t.DataLoss = "data_loss"
                }(r || (r = {}));
            const c = o;

            function d(span, t) {
                span.setTag("http.status_code", String(t)), span.setData("http.response.status_code", t);
                const e = o(t);
                "unknown_error" !== e && span.setStatus(e)
            }
        },
        187: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            })), n.d(e, "b", (function() {
                return f
            }));
            var r = n(50),
                o = n(25),
                c = n(110),
                d = n(161),
                h = n(20);

            function l(t, data) {
                const {
                    fingerprint: e,
                    span: span,
                    breadcrumbs: n,
                    sdkProcessingMetadata: l
                } = data;
                ! function(t, data) {
                    const {
                        extra: e,
                        tags: n,
                        user: o,
                        contexts: c,
                        level: d,
                        transactionName: h
                    } = data, l = Object(r.c)(e);
                    l && Object.keys(l).length && (t.extra = { ...l,
                        ...t.extra
                    });
                    const f = Object(r.c)(n);
                    f && Object.keys(f).length && (t.tags = { ...f,
                        ...t.tags
                    });
                    const _ = Object(r.c)(o);
                    _ && Object.keys(_).length && (t.user = { ..._,
                        ...t.user
                    });
                    const m = Object(r.c)(c);
                    m && Object.keys(m).length && (t.contexts = { ...m,
                        ...t.contexts
                    });
                    d && (t.level = d);
                    h && (t.transaction = h)
                }(t, data), span && function(t, span) {
                        t.contexts = {
                            trace: Object(h.f)(span),
                            ...t.contexts
                        };
                        const e = Object(d.a)(span);
                        if (e) {
                            t.sdkProcessingMetadata = {
                                dynamicSamplingContext: Object(c.b)(span),
                                ...t.sdkProcessingMetadata
                            };
                            const n = Object(h.e)(e).description;
                            n && (t.tags = {
                                transaction: n,
                                ...t.tags
                            })
                        }
                    }(t, span),
                    function(t, e) {
                        t.fingerprint = t.fingerprint ? Object(o.c)(t.fingerprint) : [], e && (t.fingerprint = t.fingerprint.concat(e));
                        t.fingerprint && !t.fingerprint.length && delete t.fingerprint
                    }(t, e),
                    function(t, e) {
                        const n = [...t.breadcrumbs || [], ...e];
                        t.breadcrumbs = n.length ? n : void 0
                    }(t, n),
                    function(t, e) {
                        t.sdkProcessingMetadata = { ...t.sdkProcessingMetadata,
                            ...e
                        }
                    }(t, l)
            }

            function f(data, t) {
                const {
                    extra: e,
                    tags: n,
                    user: r,
                    contexts: o,
                    level: c,
                    sdkProcessingMetadata: d,
                    breadcrumbs: h,
                    fingerprint: l,
                    eventProcessors: f,
                    attachments: m,
                    propagationContext: v,
                    transactionName: S,
                    span: span
                } = t;
                _(data, "extra", e), _(data, "tags", n), _(data, "user", r), _(data, "contexts", o), _(data, "sdkProcessingMetadata", d), c && (data.level = c), S && (data.transactionName = S), span && (data.span = span), h.length && (data.breadcrumbs = [...data.breadcrumbs, ...h]), l.length && (data.fingerprint = [...data.fingerprint, ...l]), f.length && (data.eventProcessors = [...data.eventProcessors, ...f]), m.length && (data.attachments = [...data.attachments, ...m]), data.propagationContext = { ...data.propagationContext,
                    ...v
                }
            }

            function _(data, t, e) {
                if (e && Object.keys(e).length) {
                    data[t] = { ...data[t]
                    };
                    for (const n in e) Object.prototype.hasOwnProperty.call(e, n) && (data[t][n] = e[n])
                }
            }
        },
        20: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            })), n.d(e, "b", (function() {
                return h
            })), n.d(e, "c", (function() {
                return S
            })), n.d(e, "d", (function() {
                return _
            })), n.d(e, "e", (function() {
                return v
            })), n.d(e, "f", (function() {
                return l
            })), n.d(e, "g", (function() {
                return f
            }));
            var r = n(50),
                o = n(457),
                c = n(176);
            const d = 0,
                h = 1;

            function l(span) {
                const {
                    spanId: t,
                    traceId: e
                } = span.spanContext(), {
                    data: data,
                    op: n,
                    parent_span_id: o,
                    status: c,
                    tags: d,
                    origin: h
                } = v(span);
                return Object(r.c)({
                    data: data,
                    op: n,
                    parent_span_id: o,
                    span_id: t,
                    status: c,
                    tags: d,
                    trace_id: e,
                    origin: h
                })
            }

            function f(span) {
                const {
                    traceId: t,
                    spanId: e
                } = span.spanContext(), n = S(span);
                return Object(o.b)(t, e, n)
            }

            function _(input) {
                return "number" == typeof input ? m(input) : Array.isArray(input) ? input[0] + input[1] / 1e9 : input instanceof Date ? m(input.getTime()) : Object(c.b)()
            }

            function m(t) {
                return t > 9999999999 ? t / 1e3 : t
            }

            function v(span) {
                return function(span) {
                    return "function" == typeof span.getSpanJSON
                }(span) ? span.getSpanJSON() : "function" == typeof span.toJSON ? span.toJSON() : {}
            }

            function S(span) {
                const {
                    traceFlags: t
                } = span.spanContext();
                return Boolean(t & h)
            }
        },
        217: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            })), n.d(e, "b", (function() {
                return l
            }));
            var r = n(50),
                o = n(106);
            let c;

            function d(span) {
                return c ? c.get(span) : void 0
            }

            function h(span) {
                const t = d(span);
                if (!t) return;
                const output = {};
                for (const [, [e, summary]] of t) output[e] || (output[e] = []), output[e].push(Object(r.c)(summary));
                return output
            }

            function l(t, e, n, r, h, l) {
                const span = Object(o.b)();
                if (span) {
                    const o = d(span) || new Map,
                        f = `${t}:${e}@${r}`,
                        _ = o.get(l);
                    if (_) {
                        const [, summary] = _;
                        o.set(l, [f, {
                            min: Math.min(summary.min, n),
                            max: Math.max(summary.max, n),
                            count: summary.count += 1,
                            sum: summary.sum += n,
                            tags: summary.tags
                        }])
                    } else o.set(l, [f, {
                        min: n,
                        max: n,
                        count: 1,
                        sum: n,
                        tags: h
                    }]);
                    c || (c = new WeakMap), c.set(span, o)
                }
            }
        },
        234: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            })), n.d(e, "b", (function() {
                return c
            }));
            var r = n(457),
                o = n(14);

            function c(t) {
                return (t || Object(o.c)()).getScope().getTransaction()
            }
            const d = r.a
        },
        237: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return r
            }));
            const r = "7.116.0"
        },
        238: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n(12);

            function o(t) {
                if ("boolean" == typeof __SENTRY_TRACING__ && !__SENTRY_TRACING__) return !1;
                const e = Object(r.k)(),
                    n = t || e && e.getOptions();
                return !!n && (n.enableTracing || "tracesSampleRate" in n || "tracesSampler" in n)
            }
        },
        239: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return O
            })), n.d(e, "b", (function() {
                return S
            }));
            var r = n(25),
                o = n(176),
                c = n(6),
                d = n(50),
                h = n(5),
                l = n(217),
                f = n(56),
                _ = n(161),
                m = n(20),
                v = n(170);
            class S {
                constructor(t = 1e3) {
                    this._maxlen = t, this.spans = []
                }
                add(span) {
                    this.spans.length > this._maxlen ? span.spanRecorder = void 0 : this.spans.push(span)
                }
            }
            class O {
                constructor(t = {}) {
                    this._traceId = t.traceId || Object(r.f)(), this._spanId = t.spanId || Object(r.f)().substring(16), this._startTime = t.startTimestamp || Object(o.b)(), this.tags = t.tags ? { ...t.tags
                    } : {}, this.data = t.data ? { ...t.data
                    } : {}, this.instrumenter = t.instrumenter || "sentry", this._attributes = {}, this.setAttributes({
                        [f.c]: t.origin || "manual",
                        [f.b]: t.op,
                        ...t.attributes
                    }), this._name = t.name || t.description, t.parentSpanId && (this._parentSpanId = t.parentSpanId), "sampled" in t && (this._sampled = t.sampled), t.status && (this._status = t.status), t.endTimestamp && (this._endTime = t.endTimestamp), void 0 !== t.exclusiveTime && (this._exclusiveTime = t.exclusiveTime), this._measurements = t.measurements ? { ...t.measurements
                    } : {}
                }
                get name() {
                    return this._name || ""
                }
                set name(t) {
                    this.updateName(t)
                }
                get description() {
                    return this._name
                }
                set description(t) {
                    this._name = t
                }
                get traceId() {
                    return this._traceId
                }
                set traceId(t) {
                    this._traceId = t
                }
                get spanId() {
                    return this._spanId
                }
                set spanId(t) {
                    this._spanId = t
                }
                set parentSpanId(t) {
                    this._parentSpanId = t
                }
                get parentSpanId() {
                    return this._parentSpanId
                }
                get sampled() {
                    return this._sampled
                }
                set sampled(t) {
                    this._sampled = t
                }
                get attributes() {
                    return this._attributes
                }
                set attributes(t) {
                    this._attributes = t
                }
                get startTimestamp() {
                    return this._startTime
                }
                set startTimestamp(t) {
                    this._startTime = t
                }
                get endTimestamp() {
                    return this._endTime
                }
                set endTimestamp(t) {
                    this._endTime = t
                }
                get status() {
                    return this._status
                }
                set status(t) {
                    this._status = t
                }
                get op() {
                    return this._attributes[f.b]
                }
                set op(t) {
                    this.setAttribute(f.b, t)
                }
                get origin() {
                    return this._attributes[f.c]
                }
                set origin(t) {
                    this.setAttribute(f.c, t)
                }
                spanContext() {
                    const {
                        _spanId: t,
                        _traceId: e,
                        _sampled: n
                    } = this;
                    return {
                        spanId: t,
                        traceId: e,
                        traceFlags: n ? m.b : m.a
                    }
                }
                startChild(t) {
                    const e = new O({ ...t,
                        parentSpanId: this._spanId,
                        sampled: this._sampled,
                        traceId: this._traceId
                    });
                    e.spanRecorder = this.spanRecorder, e.spanRecorder && e.spanRecorder.add(e);
                    const n = Object(_.a)(this);
                    if (e.transaction = n, h.a && n) {
                        const r = `[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${Object(m.e)(e).description||"< unknown name >"}' (${n.spanContext().spanId}).`;
                        c.b.log(r), this._logMessage = r
                    }
                    return e
                }
                setTag(t, e) {
                    return this.tags = { ...this.tags,
                        [t]: e
                    }, this
                }
                setData(t, e) {
                    return this.data = { ...this.data,
                        [t]: e
                    }, this
                }
                setAttribute(t, e) {
                    void 0 === e ? delete this._attributes[t] : this._attributes[t] = e
                }
                setAttributes(t) {
                    Object.keys(t).forEach((e => this.setAttribute(e, t[e])))
                }
                setStatus(t) {
                    return this._status = t, this
                }
                setHttpStatus(t) {
                    return Object(v.c)(this, t), this
                }
                setName(t) {
                    this.updateName(t)
                }
                updateName(t) {
                    return this._name = t, this
                }
                isSuccess() {
                    return "ok" === this._status
                }
                finish(t) {
                    return this.end(t)
                }
                end(t) {
                    if (this._endTime) return;
                    const e = Object(_.a)(this);
                    if (h.a && e && e.spanContext().spanId !== this._spanId) {
                        const t = this._logMessage;
                        t && c.b.log(t.replace("Starting", "Finishing"))
                    }
                    this._endTime = Object(m.d)(t)
                }
                toTraceparent() {
                    return Object(m.g)(this)
                }
                toContext() {
                    return Object(d.c)({
                        data: this._getData(),
                        description: this._name,
                        endTimestamp: this._endTime,
                        op: this.op,
                        parentSpanId: this._parentSpanId,
                        sampled: this._sampled,
                        spanId: this._spanId,
                        startTimestamp: this._startTime,
                        status: this._status,
                        tags: this.tags,
                        traceId: this._traceId
                    })
                }
                updateWithContext(t) {
                    return this.data = t.data || {}, this._name = t.name || t.description, this._endTime = t.endTimestamp, this.op = t.op, this._parentSpanId = t.parentSpanId, this._sampled = t.sampled, this._spanId = t.spanId || this._spanId, this._startTime = t.startTimestamp || this._startTime, this._status = t.status, this.tags = t.tags || {}, this._traceId = t.traceId || this._traceId, this
                }
                getTraceContext() {
                    return Object(m.f)(this)
                }
                getSpanJSON() {
                    return Object(d.c)({
                        data: this._getData(),
                        description: this._name,
                        op: this._attributes[f.b],
                        parent_span_id: this._parentSpanId,
                        span_id: this._spanId,
                        start_timestamp: this._startTime,
                        status: this._status,
                        tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
                        timestamp: this._endTime,
                        trace_id: this._traceId,
                        origin: this._attributes[f.c],
                        _metrics_summary: Object(l.a)(this),
                        profile_id: this._attributes[f.a],
                        exclusive_time: this._exclusiveTime,
                        measurements: Object.keys(this._measurements).length > 0 ? this._measurements : void 0
                    })
                }
                isRecording() {
                    return !this._endTime && !!this._sampled
                }
                toJSON() {
                    return this.getSpanJSON()
                }
                _getData() {
                    const {
                        data: data,
                        _attributes: t
                    } = this, e = Object.keys(data).length > 0, n = Object.keys(t).length > 0;
                    if (e || n) return e && n ? { ...data,
                        ...t
                    } : e ? data : t
                }
            }
        },
        260: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return j
            })), n.d(e, "b", (function() {
                return S
            }));
            var r = n(25),
                o = n(176),
                c = n(108),
                d = n(58),
                h = n(145),
                l = n(171),
                f = n(159),
                _ = n(160),
                m = n(187),
                v = n(20);

            function S(t, e, n, S, j, y) {
                const {
                    normalizeDepth: x = 3,
                    normalizeMaxBreadth: T = 1e3
                } = t, I = { ...e,
                    event_id: e.event_id || n.event_id || Object(r.f)(),
                    timestamp: e.timestamp || Object(o.a)()
                }, k = n.integrations || t.integrations.map((i => i.name));
                ! function(t, e) {
                    const {
                        environment: n,
                        release: r,
                        dist: o,
                        maxValueLength: d = 250
                    } = e;
                    "environment" in t || (t.environment = "environment" in e ? n : l.a);
                    void 0 === t.release && void 0 !== r && (t.release = r);
                    void 0 === t.dist && void 0 !== o && (t.dist = o);
                    t.message && (t.message = Object(c.c)(t.message, d));
                    const h = t.exception && t.exception.values && t.exception.values[0];
                    h && h.value && (h.value = Object(c.c)(h.value, d));
                    const f = t.request;
                    f && f.url && (f.url = Object(c.c)(f.url, d))
                }(I, t),
                function(t, e) {
                    e.length > 0 && (t.sdk = t.sdk || {}, t.sdk.integrations = [...t.sdk.integrations || [], ...e])
                }(I, k), void 0 === e.type && function(t, e) {
                    const n = d.a._sentryDebugIds;
                    if (!n) return;
                    let r;
                    const o = O.get(e);
                    o ? r = o : (r = new Map, O.set(e, r));
                    const c = Object.keys(n).reduce(((t, o) => {
                        let c;
                        const d = r.get(o);
                        d ? c = d : (c = e(o), r.set(o, c));
                        for (let i = c.length - 1; i >= 0; i--) {
                            const e = c[i];
                            if (e.filename) {
                                t[e.filename] = n[o];
                                break
                            }
                        }
                        return t
                    }), {});
                    try {
                        t.exception.values.forEach((t => {
                            t.stacktrace.frames.forEach((t => {
                                t.filename && (t.debug_id = c[t.filename])
                            }))
                        }))
                    } catch (t) {}
                }(I, t.stackParser);
                const E = function(t, e) {
                    if (!e) return t;
                    const n = t ? t.clone() : new _.a;
                    return n.update(e), n
                }(S, n.captureContext);
                n.mechanism && Object(r.a)(I, n.mechanism);
                const C = j && j.getEventProcessors ? j.getEventProcessors() : [],
                    data = Object(_.b)().getScopeData();
                if (y) {
                    const t = y.getScopeData();
                    Object(m.b)(data, t)
                }
                if (E) {
                    const t = E.getScopeData();
                    Object(m.b)(data, t)
                }
                const w = [...n.attachments || [], ...data.attachments];
                w.length && (n.attachments = w), Object(m.a)(I, data);
                const A = [...C, ...Object(f.b)(), ...data.eventProcessors];
                return Object(f.c)(A, I, n).then((t => (t && function(t) {
                    const e = {};
                    try {
                        t.exception.values.forEach((t => {
                            t.stacktrace.frames.forEach((t => {
                                t.debug_id && (t.abs_path ? e[t.abs_path] = t.debug_id : t.filename && (e[t.filename] = t.debug_id), delete t.debug_id)
                            }))
                        }))
                    } catch (t) {}
                    if (0 === Object.keys(e).length) return;
                    t.debug_meta = t.debug_meta || {}, t.debug_meta.images = t.debug_meta.images || [];
                    const n = t.debug_meta.images;
                    Object.keys(e).forEach((t => {
                        n.push({
                            type: "sourcemap",
                            code_file: t,
                            debug_id: e[t]
                        })
                    }))
                }(t), "number" == typeof x && x > 0 ? function(t, e, n) {
                    if (!t) return null;
                    const r = { ...t,
                        ...t.breadcrumbs && {
                            breadcrumbs: t.breadcrumbs.map((b => ({ ...b,
                                ...b.data && {
                                    data: Object(h.a)(b.data, e, n)
                                }
                            })))
                        },
                        ...t.user && {
                            user: Object(h.a)(t.user, e, n)
                        },
                        ...t.contexts && {
                            contexts: Object(h.a)(t.contexts, e, n)
                        },
                        ...t.extra && {
                            extra: Object(h.a)(t.extra, e, n)
                        }
                    };
                    t.contexts && t.contexts.trace && r.contexts && (r.contexts.trace = t.contexts.trace, t.contexts.trace.data && (r.contexts.trace.data = Object(h.a)(t.contexts.trace.data, e, n)));
                    t.spans && (r.spans = t.spans.map((span => {
                        const data = Object(v.e)(span).data;
                        return data && (span.data = Object(h.a)(data, e, n)), span
                    })));
                    return r
                }(t, x, T) : t)))
            }
            const O = new WeakMap;

            function j(t) {
                if (t) return function(t) {
                    return t instanceof _.a || "function" == typeof t
                }(t) || function(t) {
                    return Object.keys(t).some((t => y.includes(t)))
                }(t) ? {
                    captureContext: t
                } : t
            }
            const y = ["user", "level", "extra", "contexts", "tags", "fingerprint", "requestSession", "propagationContext"]
        },
        262: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return S
            }));
            var r = n(50),
                o = n(6),
                c = n(5),
                d = n(14),
                h = n(217),
                l = n(56),
                f = n(20),
                _ = n(110),
                m = n(239),
                v = n(106);
            class S extends m.a {
                constructor(t, e) {
                    super(t), this._contexts = {}, this._hub = e || Object(d.c)(), this._name = t.name || "", this._metadata = { ...t.metadata
                    }, this._trimEnd = t.trimEnd, this.transaction = this;
                    const n = this._metadata.dynamicSamplingContext;
                    n && (this._frozenDynamicSamplingContext = { ...n
                    })
                }
                get name() {
                    return this._name
                }
                set name(t) {
                    this.setName(t)
                }
                get metadata() {
                    return {
                        source: "custom",
                        spanMetadata: {},
                        ...this._metadata,
                        ...this._attributes[l.e] && {
                            source: this._attributes[l.e]
                        },
                        ...this._attributes[l.d] && {
                            sampleRate: this._attributes[l.d]
                        }
                    }
                }
                set metadata(t) {
                    this._metadata = t
                }
                setName(t, source = "custom") {
                    this._name = t, this.setAttribute(l.e, source)
                }
                updateName(t) {
                    return this._name = t, this
                }
                initSpanRecorder(t = 1e3) {
                    this.spanRecorder || (this.spanRecorder = new m.b(t)), this.spanRecorder.add(this)
                }
                setContext(t, e) {
                    null === e ? delete this._contexts[t] : this._contexts[t] = e
                }
                setMeasurement(t, e, n = "") {
                    this._measurements[t] = {
                        value: e,
                        unit: n
                    }
                }
                setMetadata(t) {
                    this._metadata = { ...this._metadata,
                        ...t
                    }
                }
                end(t) {
                    const e = Object(f.d)(t),
                        n = this._finishTransaction(e);
                    if (n) return this._hub.captureEvent(n)
                }
                toContext() {
                    const t = super.toContext();
                    return Object(r.c)({ ...t,
                        name: this._name,
                        trimEnd: this._trimEnd
                    })
                }
                updateWithContext(t) {
                    return super.updateWithContext(t), this._name = t.name || "", this._trimEnd = t.trimEnd, this
                }
                getDynamicSamplingContext() {
                    return Object(_.b)(this)
                }
                setHub(t) {
                    this._hub = t
                }
                getProfileId() {
                    if (void 0 !== this._contexts && void 0 !== this._contexts.profile) return this._contexts.profile.profile_id
                }
                _finishTransaction(t) {
                    if (void 0 !== this._endTime) return;
                    this._name || (c.a && o.b.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this._name = "<unlabeled transaction>"), super.end(t);
                    const e = this._hub.getClient();
                    if (e && e.emit && e.emit("finishTransaction", this), !0 !== this._sampled) return c.a && o.b.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), void(e && e.recordDroppedEvent("sample_rate", "transaction"));
                    const n = this.spanRecorder ? this.spanRecorder.spans.filter((span => span !== this && Object(f.e)(span).timestamp)) : [];
                    if (this._trimEnd && n.length > 0) {
                        const t = n.map((span => Object(f.e)(span).timestamp)).filter(Boolean);
                        this._endTime = t.reduce(((t, e) => t > e ? t : e))
                    }
                    const {
                        scope: d,
                        isolationScope: l
                    } = Object(v.c)(this), {
                        metadata: m
                    } = this, {
                        source: source
                    } = m, S = {
                        contexts: { ...this._contexts,
                            trace: Object(f.f)(this)
                        },
                        spans: n,
                        start_timestamp: this._startTime,
                        tags: this.tags,
                        timestamp: this._endTime,
                        transaction: this._name,
                        type: "transaction",
                        sdkProcessingMetadata: { ...m,
                            capturedSpanScope: d,
                            capturedSpanIsolationScope: l,
                            ...Object(r.c)({
                                dynamicSamplingContext: Object(_.b)(this)
                            })
                        },
                        _metrics_summary: Object(h.a)(this),
                        ...source && {
                            transaction_info: {
                                source: source
                            }
                        }
                    };
                    return Object.keys(this._measurements).length > 0 && (c.a && o.b.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), S.measurements = this._measurements), c.a && o.b.log(`[Tracing] Finishing ${this.op} transaction: ${this._name}.`), S
                }
            }
        },
        273: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n(22);

            function o(t, e, n = (() => {})) {
                let o;
                try {
                    o = t()
                } catch (t) {
                    throw e(t), n(), t
                }
                return function(t, e, n) {
                    if (Object(r.l)(t)) return t.then((t => (n(), t)), (t => {
                        throw e(t), n(), t
                    }));
                    return n(), t
                }(o, e, n)
            }
        },
        299: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return v
            })), n.d(e, "b", (function() {
                return m
            }));
            var r = n(6),
                o = n(25),
                c = n(108),
                d = n(5),
                h = n(49);
            const l = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/],
                f = [/^.*\/healthcheck$/, /^.*\/healthy$/, /^.*\/live$/, /^.*\/ready$/, /^.*\/heartbeat$/, /^.*\/health$/, /^.*\/healthz$/],
                _ = "InboundFilters",
                m = Object(h.d)(((t = {}) => ({
                    name: _,
                    setupOnce() {},
                    processEvent(e, n, h) {
                        const _ = h.getOptions(),
                            m = function(t = {}, e = {}) {
                                return {
                                    allowUrls: [...t.allowUrls || [], ...e.allowUrls || []],
                                    denyUrls: [...t.denyUrls || [], ...e.denyUrls || []],
                                    ignoreErrors: [...t.ignoreErrors || [], ...e.ignoreErrors || [], ...t.disableErrorDefaults ? [] : l],
                                    ignoreTransactions: [...t.ignoreTransactions || [], ...e.ignoreTransactions || [], ...t.disableTransactionDefaults ? [] : f],
                                    ignoreInternal: void 0 === t.ignoreInternal || t.ignoreInternal
                                }
                            }(t, _);
                        return function(t, e) {
                            if (e.ignoreInternal && function(t) {
                                    try {
                                        return "SentryError" === t.exception.values[0].type
                                    } catch (t) {}
                                    return !1
                                }(t)) return d.a && r.b.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${Object(o.e)(t)}`), !0;
                            if (function(t, e) {
                                    if (t.type || !e || !e.length) return !1;
                                    return function(t) {
                                        const e = [];
                                        t.message && e.push(t.message);
                                        let n;
                                        try {
                                            n = t.exception.values[t.exception.values.length - 1]
                                        } catch (t) {}
                                        n && n.value && (e.push(n.value), n.type && e.push(`${n.type}: ${n.value}`));
                                        d.a && 0 === e.length && r.b.error(`Could not extract message for event ${Object(o.e)(t)}`);
                                        return e
                                    }(t).some((t => Object(c.b)(t, e)))
                                }(t, e.ignoreErrors)) return d.a && r.b.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${Object(o.e)(t)}`), !0;
                            if (function(t, e) {
                                    if ("transaction" !== t.type || !e || !e.length) return !1;
                                    const n = t.transaction;
                                    return !!n && Object(c.b)(n, e)
                                }(t, e.ignoreTransactions)) return d.a && r.b.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${Object(o.e)(t)}`), !0;
                            if (function(t, e) {
                                    if (!e || !e.length) return !1;
                                    const n = S(t);
                                    return !!n && Object(c.b)(n, e)
                                }(t, e.denyUrls)) return d.a && r.b.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${Object(o.e)(t)}.\nUrl: ${S(t)}`), !0;
                            if (! function(t, e) {
                                    if (!e || !e.length) return !0;
                                    const n = S(t);
                                    return !n || Object(c.b)(n, e)
                                }(t, e.allowUrls)) return d.a && r.b.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${Object(o.e)(t)}.\nUrl: ${S(t)}`), !0;
                            return !1
                        }(e, m) ? null : e
                    }
                }))),
                v = Object(h.c)(_, m);

            function S(t) {
                try {
                    let e;
                    try {
                        e = t.exception.values[0].stacktrace.frames
                    } catch (t) {}
                    return e ? function(t = []) {
                        for (let i = t.length - 1; i >= 0; i--) {
                            const e = t[i];
                            if (e && "<anonymous>" !== e.filename && "[native code]" !== e.filename) return e.filename || null
                        }
                        return null
                    }(e) : null
                } catch (e) {
                    return d.a && r.b.error(`Cannot extract url for event ${Object(o.e)(t)}`), null
                }
            }
        },
        300: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return _
            })), n.d(e, "b", (function() {
                return f
            }));
            var r = n(50),
                o = n(12),
                c = n(49);
            let d;
            const h = "FunctionToString",
                l = new WeakMap,
                f = Object(c.d)((() => ({
                    name: h,
                    setupOnce() {
                        d = Function.prototype.toString;
                        try {
                            Function.prototype.toString = function(...t) {
                                const e = Object(r.e)(this),
                                    n = l.has(Object(o.k)()) && void 0 !== e ? e : this;
                                return d.apply(n, t)
                            }
                        } catch (t) {}
                    },
                    setup(t) {
                        l.set(t, !0)
                    }
                }))),
                _ = Object(c.c)(h, f)
        },
        308: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return O
            })), n.d(e, "b", (function() {
                return S
            }));
            var r = n(6),
                o = n(5),
                c = n(14),
                d = n(20),
                h = n(355),
                l = n(309),
                f = n(313),
                _ = n(262);

            function m() {
                const span = this.getScope().getSpan();
                return span ? {
                    "sentry-trace": Object(d.g)(span)
                } : {}
            }

            function v(t, e) {
                const n = this.getClient(),
                    c = n && n.getOptions() || {},
                    d = c.instrumenter || "sentry",
                    h = t.instrumenter || "sentry";
                d !== h && (o.a && r.b.error(`A transaction was started with instrumenter=\`${h}\`, but the SDK is configured with the \`${d}\` instrumenter.\nThe transaction will not be sampled. Please use the ${d} instrumentation to start transactions.`), t.sampled = !1);
                let l = new _.a(t, this);
                return l = Object(f.b)(l, c, {
                    name: t.name,
                    parentSampled: t.parentSampled,
                    transactionContext: t,
                    attributes: { ...t.data,
                        ...t.attributes
                    },
                    ...e
                }), l.isRecording() && l.initSpanRecorder(c._experiments && c._experiments.maxSpans), n && n.emit && n.emit("startTransaction", l), l
            }

            function S(t, e, n, r, o, c, d, h = !1) {
                const _ = t.getClient(),
                    m = _ && _.getOptions() || {};
                let v = new l.a(e, t, n, r, d, o, h);
                return v = Object(f.b)(v, m, {
                    name: e.name,
                    parentSampled: e.parentSampled,
                    transactionContext: e,
                    attributes: { ...e.data,
                        ...e.attributes
                    },
                    ...c
                }), v.isRecording() && v.initSpanRecorder(m._experiments && m._experiments.maxSpans), _ && _.emit && _.emit("startTransaction", v), v
            }

            function O() {
                const t = Object(c.f)();
                t.__SENTRY__ && (t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = v), t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = m), Object(h.a)())
            }
        },
        309: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return v
            })), n.d(e, "b", (function() {
                return f
            }));
            var r = n(6),
                o = n(176),
                c = n(5),
                d = n(20),
                h = n(239),
                l = n(262);
            const f = {
                    idleTimeout: 1e3,
                    finalTimeout: 3e4,
                    heartbeatInterval: 5e3
                },
                _ = ["heartbeatFailed", "idleTimeout", "documentHidden", "finalTimeout", "externalFinish", "cancelled"];
            class m extends h.b {
                constructor(t, e, n, r) {
                    super(r), this._pushActivity = t, this._popActivity = e, this.transactionSpanId = n
                }
                add(span) {
                    if (span.spanContext().spanId !== this.transactionSpanId) {
                        const t = span.end;
                        span.end = (...e) => (this._popActivity(span.spanContext().spanId), t.apply(span, e)), void 0 === Object(d.e)(span).timestamp && this._pushActivity(span.spanContext().spanId)
                    }
                    super.add(span)
                }
            }
            class v extends l.a {
                constructor(t, e, n = f.idleTimeout, o = f.finalTimeout, d = f.heartbeatInterval, h = !1, l = !1) {
                    super(t, e), this._idleHub = e, this._idleTimeout = n, this._finalTimeout = o, this._heartbeatInterval = d, this._onScope = h, this.activities = {}, this._heartbeatCounter = 0, this._finished = !1, this._idleTimeoutCanceledPermanently = !1, this._beforeFinishCallbacks = [], this._finishReason = _[4], this._autoFinishAllowed = !l, h && (c.a && r.b.log(`Setting idle transaction on scope. Span ID: ${this.spanContext().spanId}`), e.getScope().setSpan(this)), l || this._restartIdleTimeout(), setTimeout((() => {
                        this._finished || (this.setStatus("deadline_exceeded"), this._finishReason = _[3], this.end())
                    }), this._finalTimeout)
                }
                end(t) {
                    const e = Object(d.d)(t);
                    if (this._finished = !0, this.activities = {}, "ui.action.click" === this.op && this.setAttribute("finishReason", this._finishReason), this.spanRecorder) {
                        c.a && r.b.log("[Tracing] finishing IdleTransaction", new Date(1e3 * e).toISOString(), this.op);
                        for (const t of this._beforeFinishCallbacks) t(this, e);
                        this.spanRecorder.spans = this.spanRecorder.spans.filter((span => {
                            if (span.spanContext().spanId === this.spanContext().spanId) return !0;
                            Object(d.e)(span).timestamp || (span.setStatus("cancelled"), span.end(e), c.a && r.b.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(span, void 0, 2)));
                            const {
                                start_timestamp: t,
                                timestamp: n
                            } = Object(d.e)(span), o = t && t < e, h = (this._finalTimeout + this._idleTimeout) / 1e3, l = n && t && n - t < h;
                            if (c.a) {
                                const t = JSON.stringify(span, void 0, 2);
                                o ? l || r.b.log("[Tracing] discarding Span since it finished after Transaction final timeout", t) : r.b.log("[Tracing] discarding Span since it happened after Transaction was finished", t)
                            }
                            return o && l
                        })), c.a && r.b.log("[Tracing] flushing IdleTransaction")
                    } else c.a && r.b.log("[Tracing] No active IdleTransaction");
                    if (this._onScope) {
                        const t = this._idleHub.getScope();
                        t.getTransaction() === this && t.setSpan(void 0)
                    }
                    return super.end(t)
                }
                registerBeforeFinishCallback(t) {
                    this._beforeFinishCallbacks.push(t)
                }
                initSpanRecorder(t) {
                    if (!this.spanRecorder) {
                        const e = t => {
                                this._finished || this._pushActivity(t)
                            },
                            n = t => {
                                this._finished || this._popActivity(t)
                            };
                        this.spanRecorder = new m(e, n, this.spanContext().spanId, t), c.a && r.b.log("Starting heartbeat"), this._pingHeartbeat()
                    }
                    this.spanRecorder.add(this)
                }
                cancelIdleTimeout(t, {
                    restartOnChildSpanChange: e
                } = {
                    restartOnChildSpanChange: !0
                }) {
                    this._idleTimeoutCanceledPermanently = !1 === e, this._idleTimeoutID && (clearTimeout(this._idleTimeoutID), this._idleTimeoutID = void 0, 0 === Object.keys(this.activities).length && this._idleTimeoutCanceledPermanently && (this._finishReason = _[5], this.end(t)))
                }
                setFinishReason(t) {
                    this._finishReason = t
                }
                sendAutoFinishSignal() {
                    this._autoFinishAllowed || (c.a && r.b.log("[Tracing] Received finish signal for idle transaction."), this._restartIdleTimeout(), this._autoFinishAllowed = !0)
                }
                _restartIdleTimeout(t) {
                    this.cancelIdleTimeout(), this._idleTimeoutID = setTimeout((() => {
                        this._finished || 0 !== Object.keys(this.activities).length || (this._finishReason = _[1], this.end(t))
                    }), this._idleTimeout)
                }
                _pushActivity(t) {
                    this.cancelIdleTimeout(void 0, {
                        restartOnChildSpanChange: !this._idleTimeoutCanceledPermanently
                    }), c.a && r.b.log(`[Tracing] pushActivity: ${t}`), this.activities[t] = !0, c.a && r.b.log("[Tracing] new activities count", Object.keys(this.activities).length)
                }
                _popActivity(t) {
                    if (this.activities[t] && (c.a && r.b.log(`[Tracing] popActivity ${t}`), delete this.activities[t], c.a && r.b.log("[Tracing] new activities count", Object.keys(this.activities).length)), 0 === Object.keys(this.activities).length) {
                        const t = Object(o.b)();
                        this._idleTimeoutCanceledPermanently ? this._autoFinishAllowed && (this._finishReason = _[5], this.end(t)) : this._restartIdleTimeout(t + this._idleTimeout / 1e3)
                    }
                }
                _beat() {
                    if (this._finished) return;
                    const t = Object.keys(this.activities).join("");
                    t === this._prevHeartbeatString ? this._heartbeatCounter++ : this._heartbeatCounter = 1, this._prevHeartbeatString = t, this._heartbeatCounter >= 3 ? this._autoFinishAllowed && (c.a && r.b.log("[Tracing] Transaction finished because of no change for 3 heart beats"), this.setStatus("deadline_exceeded"), this._finishReason = _[0], this.end()) : this._pingHeartbeat()
                }
                _pingHeartbeat() {
                    c.a && r.b.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`), setTimeout((() => {
                        this._beat()
                    }), this._heartbeatInterval)
                }
            }
        },
        313: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return _
            })), n.d(e, "b", (function() {
                return f
            }));
            var r = n(6),
                o = n(22),
                c = n(5),
                d = n(56),
                h = n(238),
                l = n(20);

            function f(t, e, n) {
                if (!Object(h.a)(e)) return t.sampled = !1, t;
                if (void 0 !== t.sampled) return t.setAttribute(d.d, Number(t.sampled)), t;
                let o;
                return "function" == typeof e.tracesSampler ? (o = e.tracesSampler(n), t.setAttribute(d.d, Number(o))) : void 0 !== n.parentSampled ? o = n.parentSampled : void 0 !== e.tracesSampleRate ? (o = e.tracesSampleRate, t.setAttribute(d.d, Number(o))) : (o = 1, t.setAttribute(d.d, o)), _(o) ? o ? (t.sampled = Math.random() < o, t.sampled ? (c.a && r.b.log(`[Tracing] starting ${t.op} transaction - ${Object(l.e)(t).description}`), t) : (c.a && r.b.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(o)})`), t)) : (c.a && r.b.log("[Tracing] Discarding transaction because " + ("function" == typeof e.tracesSampler ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0")), t.sampled = !1, t) : (c.a && r.b.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t)
            }

            function _(t) {
                return Object(o.e)(t) || "number" != typeof t && "boolean" != typeof t ? (c.a && r.b.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !(t < 0 || t > 1) || (c.a && r.b.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1)
            }
        },
        355: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return f
            }));
            var r = n(785),
                o = n(786),
                c = n(6),
                d = n(5),
                h = n(234);
            let l = !1;

            function f() {
                l || (l = !0, Object(r.a)(_), Object(o.a)(_))
            }

            function _() {
                const t = Object(h.b)();
                if (t) {
                    const e = "internal_error";
                    d.a && c.b.log(`[Tracing] Transaction: ${e} -> Global error occured`), t.setStatus(e)
                }
            }
            _.tag = "sentry_tracingErrorCallback"
        },
        430: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            })), n.d(e, "b", (function() {
                return l
            }));
            var r = n(6),
                o = n(5),
                c = n(12),
                d = n(14);

            function h(t, e) {
                !0 === e.debug && (o.a ? r.b.enable() : Object(r.a)((() => {
                    console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
                })));
                Object(c.l)().update(e.initialScope);
                const n = new t(e);
                l(n),
                    function(t) {
                        t.init ? t.init() : t.setupIntegrations && t.setupIntegrations()
                    }(n)
            }

            function l(t) {
                const e = Object(d.c)().getStackTop();
                e.client = t, e.scope.setClient(t)
            }
        },
        49: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return O
            })), n.d(e, "b", (function() {
                return v
            })), n.d(e, "c", (function() {
                return j
            })), n.d(e, "d", (function() {
                return y
            })), n.d(e, "e", (function() {
                return _
            })), n.d(e, "f", (function() {
                return S
            })), n.d(e, "g", (function() {
                return m
            }));
            var r = n(25),
                o = n(6),
                c = n(5),
                d = n(159),
                h = n(12),
                l = n(14);
            const f = [];

            function _(t) {
                const e = t.defaultIntegrations || [],
                    n = t.integrations;
                let o;
                e.forEach((t => {
                    t.isDefaultInstance = !0
                })), o = Array.isArray(n) ? [...e, ...n] : "function" == typeof n ? Object(r.c)(n(e)) : e;
                const c = function(t) {
                        const e = {};
                        return t.forEach((t => {
                            const {
                                name: n
                            } = t, r = e[n];
                            r && !r.isDefaultInstance && t.isDefaultInstance || (e[n] = t)
                        })), Object.keys(e).map((t => e[t]))
                    }(o),
                    d = function(t, e) {
                        for (let i = 0; i < t.length; i++)
                            if (!0 === e(t[i])) return i;
                        return -1
                    }(c, (t => "Debug" === t.name));
                if (-1 !== d) {
                    const [t] = c.splice(d, 1);
                    c.push(t)
                }
                return c
            }

            function m(t, e) {
                const n = {};
                return e.forEach((e => {
                    e && S(t, e, n)
                })), n
            }

            function v(t, e) {
                for (const n of e) n && n.afterAllSetup && n.afterAllSetup(t)
            }

            function S(t, e, n) {
                if (n[e.name]) c.a && o.b.log(`Integration skipped because it was already installed: ${e.name}`);
                else {
                    if (n[e.name] = e, -1 === f.indexOf(e.name) && (e.setupOnce(d.a, l.c), f.push(e.name)), e.setup && "function" == typeof e.setup && e.setup(t), t.on && "function" == typeof e.preprocessEvent) {
                        const n = e.preprocessEvent.bind(e);
                        t.on("preprocessEvent", ((e, r) => n(e, r, t)))
                    }
                    if (t.addEventProcessor && "function" == typeof e.processEvent) {
                        const n = e.processEvent.bind(e),
                            r = Object.assign(((e, r) => n(e, r, t)), {
                                id: e.name
                            });
                        t.addEventProcessor(r)
                    }
                    c.a && o.b.log(`Integration installed: ${e.name}`)
                }
            }

            function O(t) {
                const e = Object(h.k)();
                e && e.addIntegration ? e.addIntegration(t) : c.a && o.b.warn(`Cannot add integration "${t.name}" because no SDK Client is available.`)
            }

            function j(t, e) {
                return Object.assign((function(...t) {
                    return e(...t)
                }), {
                    id: t
                })
            }

            function y(t) {
                return t
            }
        },
        559: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return _
            }));
            var r = n(784),
                o = n(109),
                c = n(625),
                d = n(175),
                h = n(6),
                l = n(166),
                f = n(5);

            function _(t, e, n = Object(r.a)(t.bufferSize || 30)) {
                let _ = {};

                function v(r) {
                    const v = [];
                    if (Object(o.g)(r, ((e, n) => {
                            const r = Object(o.f)(n);
                            if (Object(c.a)(_, r)) {
                                const o = m(e, n);
                                t.recordDroppedEvent("ratelimit_backoff", r, o)
                            } else v.push(e)
                        })), 0 === v.length) return Object(d.c)();
                    const S = Object(o.c)(r[0], v),
                        O = e => {
                            Object(o.g)(S, ((n, r) => {
                                const c = m(n, r);
                                t.recordDroppedEvent(e, Object(o.f)(r), c)
                            }))
                        };
                    return n.add((() => e({
                        body: Object(o.i)(S, t.textEncoder)
                    }).then((t => (void 0 !== t.statusCode && (t.statusCode < 200 || t.statusCode >= 300) && f.a && h.b.warn(`Sentry responded with status code ${t.statusCode} to sent event.`), _ = Object(c.c)(_, t), t)), (t => {
                        throw O("network_error"), t
                    })))).then((t => t), (t => {
                        if (t instanceof l.a) return f.a && h.b.error("Skipped sending event because buffer is full."), O("queue_overflow"), Object(d.c)();
                        throw t
                    }))
                }
                return v.__sentry__baseTransport__ = !0, {
                    send: v,
                    flush: t => n.drain(t)
                }
            }

            function m(t, e) {
                if ("event" === e || "transaction" === e) return Array.isArray(t) ? t[1] : void 0
            }
        },
        56: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            })), n.d(e, "b", (function() {
                return c
            })), n.d(e, "c", (function() {
                return d
            })), n.d(e, "d", (function() {
                return o
            })), n.d(e, "e", (function() {
                return r
            }));
            const r = "sentry.source",
                o = "sentry.sample_rate",
                c = "sentry.op",
                d = "sentry.origin",
                h = "profile_id"
        },
        560: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n(237);

            function o(t, e, n = [e], source = "npm") {
                const o = t._metadata || {};
                o.sdk || (o.sdk = {
                    name: `sentry.javascript.${e}`,
                    packages: n.map((t => ({
                        name: `${source}:@sentry/${t}`,
                        version: r.a
                    }))),
                    version: r.a
                }), t._metadata = o
            }
        },
        561: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return o
            }));
            var r = n(234);

            function o(t, e, n) {
                const o = Object(r.b)();
                o && o.setMeasurement(t, e, n)
            }
        },
        562: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            }));
            var r = n(198),
                o = n(109);

            function c(t, e) {
                const n = {
                    sent_at: (new Date).toISOString()
                };
                e && (n.dsn = Object(r.b)(e));
                const c = t.map(d);
                return Object(o.c)(n, c)
            }

            function d(span) {
                return [{
                    type: "span"
                }, span]
            }
        },
        608: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return d
            }));
            var r = n(198),
                o = n(109),
                c = n(119);

            function d(t, e, n, d) {
                const h = {
                    sent_at: (new Date).toISOString()
                };
                n && n.sdk && (h.sdk = {
                    name: n.sdk.name,
                    version: n.sdk.version
                }), d && e && (h.dsn = Object(r.b)(e));
                const l = function(t) {
                    const e = Object(c.e)(t);
                    return [{
                        type: "statsd",
                        length: e.length
                    }, e]
                }(t);
                return Object(o.c)(h, [l])
            }
        },
        66: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "addTracingExtensions", (function() {
                return o.a
            })), n.d(e, "startIdleTransaction", (function() {
                return o.b
            })), n.d(e, "IdleTransaction", (function() {
                return c.a
            })), n.d(e, "TRACING_DEFAULTS", (function() {
                return c.b
            })), n.d(e, "Span", (function() {
                return d.a
            })), n.d(e, "Transaction", (function() {
                return h.a
            })), n.d(e, "extractTraceparentData", (function() {
                return l.a
            })), n.d(e, "getActiveTransaction", (function() {
                return l.b
            })), n.d(e, "SpanStatus", (function() {
                return f.a
            })), n.d(e, "getSpanStatusFromHttpCode", (function() {
                return f.b
            })), n.d(e, "setHttpStatus", (function() {
                return f.c
            })), n.d(e, "spanStatusfromHttpCode", (function() {
                return f.d
            })), n.d(e, "continueTrace", (function() {
                return _.a
            })), n.d(e, "getActiveSpan", (function() {
                return _.b
            })), n.d(e, "startActiveSpan", (function() {
                return _.d
            })), n.d(e, "startInactiveSpan", (function() {
                return _.e
            })), n.d(e, "startSpan", (function() {
                return _.f
            })), n.d(e, "startSpanManual", (function() {
                return _.g
            })), n.d(e, "trace", (function() {
                return _.h
            })), n.d(e, "getDynamicSamplingContextFromClient", (function() {
                return m.a
            })), n.d(e, "getDynamicSamplingContextFromSpan", (function() {
                return m.b
            })), n.d(e, "setMeasurement", (function() {
                return v.a
            })), n.d(e, "isValidSampleRate", (function() {
                return S.a
            })), n.d(e, "SEMANTIC_ATTRIBUTE_PROFILE_ID", (function() {
                return O.a
            })), n.d(e, "SEMANTIC_ATTRIBUTE_SENTRY_OP", (function() {
                return O.b
            })), n.d(e, "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN", (function() {
                return O.c
            })), n.d(e, "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE", (function() {
                return O.d
            })), n.d(e, "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE", (function() {
                return O.e
            })), n.d(e, "createEventEnvelope", (function() {
                return j.a
            })), n.d(e, "createSessionEnvelope", (function() {
                return j.b
            })), n.d(e, "addBreadcrumb", (function() {
                return y.a
            })), n.d(e, "captureCheckIn", (function() {
                return y.b
            })), n.d(e, "captureEvent", (function() {
                return y.c
            })), n.d(e, "captureException", (function() {
                return y.d
            })), n.d(e, "captureMessage", (function() {
                return y.e
            })), n.d(e, "captureSession", (function() {
                return y.f
            })), n.d(e, "close", (function() {
                return y.g
            })), n.d(e, "configureScope", (function() {
                return y.h
            })), n.d(e, "endSession", (function() {
                return y.i
            })), n.d(e, "flush", (function() {
                return y.j
            })), n.d(e, "getClient", (function() {
                return y.k
            })), n.d(e, "getCurrentScope", (function() {
                return y.l
            })), n.d(e, "isInitialized", (function() {
                return y.m
            })), n.d(e, "lastEventId", (function() {
                return y.n
            })), n.d(e, "setContext", (function() {
                return y.o
            })), n.d(e, "setExtra", (function() {
                return y.p
            })), n.d(e, "setExtras", (function() {
                return y.q
            })), n.d(e, "setTag", (function() {
                return y.r
            })), n.d(e, "setTags", (function() {
                return y.s
            })), n.d(e, "setUser", (function() {
                return y.t
            })), n.d(e, "startSession", (function() {
                return y.u
            })), n.d(e, "startTransaction", (function() {
                return y.v
            })), n.d(e, "withActiveSpan", (function() {
                return y.w
            })), n.d(e, "withIsolationScope", (function() {
                return y.x
            })), n.d(e, "withMonitor", (function() {
                return y.y
            })), n.d(e, "withScope", (function() {
                return y.z
            })), n.d(e, "Hub", (function() {
                return x.a
            })), n.d(e, "ensureHubOnCarrier", (function() {
                return x.b
            })), n.d(e, "getCurrentHub", (function() {
                return x.c
            })), n.d(e, "getHubFromCarrier", (function() {
                return x.d
            })), n.d(e, "getIsolationScope", (function() {
                return x.e
            })), n.d(e, "getMainCarrier", (function() {
                return x.f
            })), n.d(e, "makeMain", (function() {
                return x.g
            })), n.d(e, "runWithAsyncContext", (function() {
                return x.h
            })), n.d(e, "setAsyncContextStrategy", (function() {
                return x.i
            })), n.d(e, "setHubOnCarrier", (function() {
                return x.j
            })), n.d(e, "closeSession", (function() {
                return T.a
            })), n.d(e, "makeSession", (function() {
                return T.b
            })), n.d(e, "updateSession", (function() {
                return T.c
            })), n.d(e, "SessionFlusher", (function() {
                return I
            })), n.d(e, "Scope", (function() {
                return k.a
            })), n.d(e, "getGlobalScope", (function() {
                return k.b
            })), n.d(e, "setGlobalScope", (function() {
                return k.c
            })), n.d(e, "addGlobalEventProcessor", (function() {
                return E.a
            })), n.d(e, "notifyEventProcessors", (function() {
                return E.c
            })), n.d(e, "getEnvelopeEndpointWithUrlEncodedAuth", (function() {
                return C.a
            })), n.d(e, "getReportDialogEndpoint", (function() {
                return C.b
            })), n.d(e, "BaseClient", (function() {
                return w.a
            })), n.d(e, "addEventProcessor", (function() {
                return w.b
            })), n.d(e, "ServerRuntimeClient", (function() {
                return W
            })), n.d(e, "initAndBind", (function() {
                return Y.a
            })), n.d(e, "setCurrentClient", (function() {
                return Y.b
            })), n.d(e, "createTransport", (function() {
                return base.a
            })), n.d(e, "makeOfflineTransport", (function() {
                return Q
            })), n.d(e, "makeMultiplexedTransport", (function() {
                return tt
            })), n.d(e, "SDK_VERSION", (function() {
                return et.a
            })), n.d(e, "addIntegration", (function() {
                return nt.a
            })), n.d(e, "convertIntegrationFnToClass", (function() {
                return nt.c
            })), n.d(e, "defineIntegration", (function() {
                return nt.d
            })), n.d(e, "getIntegrationsToSetup", (function() {
                return nt.e
            })), n.d(e, "applyScopeDataToEvent", (function() {
                return st.a
            })), n.d(e, "mergeScopeData", (function() {
                return st.b
            })), n.d(e, "prepareEvent", (function() {
                return it.b
            })), n.d(e, "createCheckInEnvelope", (function() {
                return $.a
            })), n.d(e, "createSpanEnvelope", (function() {
                return at.a
            })), n.d(e, "hasTracingEnabled", (function() {
                return ot.a
            })), n.d(e, "isSentryRequestUrl", (function() {
                return ct
            })), n.d(e, "handleCallbackErrors", (function() {
                return ht.a
            })), n.d(e, "parameterize", (function() {
                return pt
            })), n.d(e, "spanIsSampled", (function() {
                return J.c
            })), n.d(e, "spanToJSON", (function() {
                return J.e
            })), n.d(e, "spanToTraceContext", (function() {
                return J.f
            })), n.d(e, "spanToTraceHeader", (function() {
                return J.g
            })), n.d(e, "getRootSpan", (function() {
                return B.a
            })), n.d(e, "applySdkMetadata", (function() {
                return lt.a
            })), n.d(e, "DEFAULT_ENVIRONMENT", (function() {
                return ft.a
            })), n.d(e, "ModuleMetadata", (function() {
                return Ot
            })), n.d(e, "moduleMetadataIntegration", (function() {
                return St
            })), n.d(e, "RequestData", (function() {
                return It
            })), n.d(e, "requestDataIntegration", (function() {
                return Tt
            })), n.d(e, "InboundFilters", (function() {
                return kt.a
            })), n.d(e, "inboundFiltersIntegration", (function() {
                return kt.b
            })), n.d(e, "FunctionToString", (function() {
                return Et.a
            })), n.d(e, "functionToStringIntegration", (function() {
                return Et.b
            })), n.d(e, "LinkedErrors", (function() {
                return Rt
            })), n.d(e, "linkedErrorsIntegration", (function() {
                return At
            })), n.d(e, "metrics", (function() {
                return Pt
            })), n.d(e, "Integrations", (function() {
                return Ft
            }));
            var r = {};
            n.r(r), n.d(r, "FunctionToString", (function() {
                return Et.a
            })), n.d(r, "InboundFilters", (function() {
                return kt.a
            })), n.d(r, "LinkedErrors", (function() {
                return Rt
            }));
            var o = n(308),
                c = n(309),
                d = n(239),
                h = n(262),
                l = n(234),
                f = n(170),
                _ = n(106),
                m = n(110),
                v = n(561),
                S = n(313),
                O = n(56),
                j = n(261),
                y = n(12),
                x = n(14),
                T = n(99),
                object = n(50);
            class I {
                constructor(t, e) {
                    this._client = t, this.flushTimeout = 60, this._pendingAggregates = {}, this._isEnabled = !0, this._intervalId = setInterval((() => this.flush()), 1e3 * this.flushTimeout), this._intervalId.unref && this._intervalId.unref(), this._sessionAttrs = e
                }
                flush() {
                    const t = this.getSessionAggregates();
                    0 !== t.aggregates.length && (this._pendingAggregates = {}, this._client.sendSession(t))
                }
                getSessionAggregates() {
                    const t = Object.keys(this._pendingAggregates).map((t => this._pendingAggregates[parseInt(t)])),
                        e = {
                            attrs: this._sessionAttrs,
                            aggregates: t
                        };
                    return Object(object.c)(e)
                }
                close() {
                    clearInterval(this._intervalId), this._isEnabled = !1, this.flush()
                }
                incrementSessionStatusCount() {
                    if (!this._isEnabled) return;
                    const t = Object(y.l)(),
                        e = t.getRequestSession();
                    e && e.status && (this._incrementSessionStatusCount(e.status, new Date), t.setRequestSession(void 0))
                }
                _incrementSessionStatusCount(t, e) {
                    const n = new Date(e).setSeconds(0, 0);
                    this._pendingAggregates[n] = this._pendingAggregates[n] || {};
                    const r = this._pendingAggregates[n];
                    switch (r.started || (r.started = new Date(n).toISOString()), t) {
                        case "errored":
                            return r.errored = (r.errored || 0) + 1, r.errored;
                        case "ok":
                            return r.exited = (r.exited || 0) + 1, r.exited;
                        default:
                            return r.crashed = (r.crashed || 0) + 1, r.crashed
                    }
                }
            }
            var k = n(160),
                E = n(159),
                C = n(233),
                w = n(307),
                A = n(175),
                R = n(800),
                M = n(6),
                D = n(25),
                $ = n(356),
                N = n(5),
                time = n(176);
            const P = "s",
                F = 1e4;
            var L = n(119);
            const U = {
                c: class {
                    constructor(t) {
                        this._value = t
                    }
                    get weight() {
                        return 1
                    }
                    add(t) {
                        this._value += t
                    }
                    toString() {
                        return `${this._value}`
                    }
                },
                g: class {
                    constructor(t) {
                        this._last = t, this._min = t, this._max = t, this._sum = t, this._count = 1
                    }
                    get weight() {
                        return 5
                    }
                    add(t) {
                        this._last = t, t < this._min && (this._min = t), t > this._max && (this._max = t), this._sum += t, this._count++
                    }
                    toString() {
                        return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`
                    }
                },
                d: class {
                    constructor(t) {
                        this._value = [t]
                    }
                    get weight() {
                        return this._value.length
                    }
                    add(t) {
                        this._value.push(t)
                    }
                    toString() {
                        return this._value.join(":")
                    }
                },
                [P]: class {
                    constructor(t) {
                        this.first = t, this._value = new Set([t])
                    }
                    get weight() {
                        return this._value.size
                    }
                    add(t) {
                        this._value.add(t)
                    }
                    toString() {
                        return Array.from(this._value).map((t => "string" == typeof t ? Object(L.f)(t) : t)).join(":")
                    }
                }
            };
            var H = n(217);
            class z {
                constructor(t) {
                    this._client = t, this._buckets = new Map, this._bucketsTotalWeight = 0, this._interval = setInterval((() => this._flush()), F), this._interval.unref && this._interval.unref(), this._flushShift = Math.floor(Math.random() * F / 1e3), this._forceFlush = !1
                }
                add(t, e, n, r = "none", o = {}, c = Object(time.b)()) {
                    const d = Math.floor(c),
                        h = Object(L.b)(e),
                        l = Object(L.c)(o),
                        f = Object(L.d)(r),
                        _ = Object(L.a)(t, h, f, l);
                    let m = this._buckets.get(_);
                    const v = m && t === P ? m.metric.weight : 0;
                    m ? (m.metric.add(n), m.timestamp < d && (m.timestamp = d)) : (m = {
                        metric: new U[t](n),
                        timestamp: d,
                        metricType: t,
                        name: h,
                        unit: f,
                        tags: l
                    }, this._buckets.set(_, m));
                    const S = "string" == typeof n ? m.metric.weight - v : n;
                    Object(H.b)(t, h, S, f, o, _), this._bucketsTotalWeight += m.metric.weight, this._bucketsTotalWeight >= 1e4 && this.flush()
                }
                flush() {
                    this._forceFlush = !0, this._flush()
                }
                close() {
                    this._forceFlush = !0, clearInterval(this._interval), this._flush()
                }
                _flush() {
                    if (this._forceFlush) return this._forceFlush = !1, this._bucketsTotalWeight = 0, this._captureMetrics(this._buckets), void this._buckets.clear();
                    const t = Math.floor(Object(time.b)()) - 10 - this._flushShift,
                        e = new Map;
                    for (const [n, r] of this._buckets) r.timestamp <= t && (e.set(n, r), this._bucketsTotalWeight -= r.metric.weight);
                    for (const [t] of e) this._buckets.delete(t);
                    this._captureMetrics(e)
                }
                _captureMetrics(t) {
                    if (t.size > 0 && this._client.captureAggregateMetrics) {
                        const e = Array.from(t).map((([, t]) => t));
                        this._client.captureAggregateMetrics(e)
                    }
                }
            }
            var J = n(20),
                B = n(161);
            class W extends w.a {
                constructor(t) {
                    Object(o.a)(), super(t), t._experiments && t._experiments.metricsAggregator && (this.metricsAggregator = new z(this))
                }
                eventFromException(t, e) {
                    return Object(A.c)(Object(R.b)(Object(y.k)(), this._options.stackParser, t, e))
                }
                eventFromMessage(t, e = "info", n) {
                    return Object(A.c)(Object(R.a)(this._options.stackParser, t, e, n, this._options.attachStacktrace))
                }
                captureException(t, e, n) {
                    if (this._options.autoSessionTracking && this._sessionFlusher && n) {
                        const t = n.getRequestSession();
                        t && "ok" === t.status && (t.status = "errored")
                    }
                    return super.captureException(t, e, n)
                }
                captureEvent(t, e, n) {
                    if (this._options.autoSessionTracking && this._sessionFlusher && n) {
                        if ("exception" === (t.type || "exception") && t.exception && t.exception.values && t.exception.values.length > 0) {
                            const t = n.getRequestSession();
                            t && "ok" === t.status && (t.status = "errored")
                        }
                    }
                    return super.captureEvent(t, e, n)
                }
                close(t) {
                    return this._sessionFlusher && this._sessionFlusher.close(), super.close(t)
                }
                initSessionFlusher() {
                    const {
                        release: t,
                        environment: e
                    } = this._options;
                    t ? this._sessionFlusher = new I(this, {
                        release: t,
                        environment: e
                    }) : N.a && M.b.warn("Cannot initialise an instance of SessionFlusher if no release is provided!")
                }
                captureCheckIn(t, e, n) {
                    const r = "checkInId" in t && t.checkInId ? t.checkInId : Object(D.f)();
                    if (!this._isEnabled()) return N.a && M.b.warn("SDK not enabled, will not capture checkin."), r;
                    const o = this.getOptions(),
                        {
                            release: c,
                            environment: d,
                            tunnel: h
                        } = o,
                        l = {
                            check_in_id: r,
                            monitor_slug: t.monitorSlug,
                            status: t.status,
                            release: c,
                            environment: d
                        };
                    "duration" in t && (l.duration = t.duration), e && (l.monitor_config = {
                        schedule: e.schedule,
                        checkin_margin: e.checkinMargin,
                        max_runtime: e.maxRuntime,
                        timezone: e.timezone
                    });
                    const [f, _] = this._getTraceInfoFromScope(n);
                    _ && (l.contexts = {
                        trace: _
                    });
                    const m = Object($.a)(l, f, this.getSdkMetadata(), h, this.getDsn());
                    return N.a && M.b.info("Sending checkin:", t.monitorSlug, t.status), this._sendEnvelope(m), r
                }
                _captureRequestSession() {
                    this._sessionFlusher ? this._sessionFlusher.incrementSessionStatusCount() : N.a && M.b.warn("Discarded request mode session because autoSessionTracking option was disabled")
                }
                _prepareEvent(t, e, n, r) {
                    return this._options.platform && (t.platform = t.platform || this._options.platform), this._options.runtime && (t.contexts = { ...t.contexts,
                        runtime: (t.contexts || {}).runtime || this._options.runtime
                    }), this._options.serverName && (t.server_name = t.server_name || this._options.serverName), super._prepareEvent(t, e, n, r)
                }
                _getTraceInfoFromScope(t) {
                    if (!t) return [void 0, void 0];
                    const span = t.getSpan();
                    if (span) {
                        return [Object(B.a)(span) ? Object(m.b)(span) : void 0, Object(J.f)(span)]
                    }
                    const {
                        traceId: e,
                        spanId: n,
                        parentSpanId: r,
                        dsc: o
                    } = t.getPropagationContext(), c = {
                        trace_id: e,
                        span_id: n,
                        parent_span_id: r
                    };
                    return o ? [o, c] : [Object(m.a)(e, this, t), c]
                }
            }
            var Y = n(430),
                base = n(559),
                G = n(109),
                K = n(625);

            function V(t, e) {
                N.a && M.b.info(`[Offline]: ${t}`, e)
            }

            function Q(t) {
                return e => {
                    const n = t(e),
                        r = e.createStore ? e.createStore(e) : void 0;
                    let o, c = 5e3;

                    function d(t) {
                        r && (o && clearTimeout(o), o = setTimeout((async () => {
                            o = void 0;
                            const t = await r.pop();
                            t && (V("Attempting to send previously queued event"), l(t).catch((t => {
                                V("Failed to retry sending", t)
                            })))
                        }), t), "number" != typeof o && o.unref && o.unref())
                    }

                    function h() {
                        o || (d(c), c = Math.min(2 * c, 36e5))
                    }
                    async function l(t) {
                        try {
                            const e = await n.send(t);
                            let r = 100;
                            if (e)
                                if (e.headers && e.headers["retry-after"]) r = Object(K.b)(e.headers["retry-after"]);
                                else if ((e.statusCode || 0) >= 400) return e;
                            return d(r), c = 5e3, e
                        } catch (n) {
                            if (r && await
                                function(t, n, r) {
                                    return !Object(G.e)(t, ["replay_event", "replay_recording", "client_report"]) && (!e.shouldStore || e.shouldStore(t, n, r))
                                }(t, n, c)) return await r.insert(t), h(), V("Error sending. Event queued", n), {};
                            throw n
                        }
                    }
                    return e.flushAtStartup && h(), {
                        send: l,
                        flush: t => n.flush(t)
                    }
                }
            }
            var X = n(198);

            function Z(t, e) {
                let n;
                return Object(G.g)(t, ((t, r) => (e.includes(r) && (n = Array.isArray(t) ? t[1] : void 0), !!n))), n
            }

            function tt(t, e) {
                return n => {
                    const r = t(n),
                        o = new Map;

                    function c(e, r) {
                        const c = r ? `${e}:${r}` : e;
                        let d = o.get(c);
                        if (!d) {
                            const h = Object(X.a)(e);
                            if (!h) return;
                            const l = Object(C.a)(h, n.tunnel);
                            d = r ? function(t, e) {
                                return n => {
                                    const r = t(n);
                                    return { ...r,
                                        send: async t => {
                                            const n = Z(t, ["event", "transaction", "profile", "replay_event"]);
                                            return n && (n.release = e), r.send(t)
                                        }
                                    }
                                }
                            }(t, r)({ ...n,
                                url: l
                            }) : t({ ...n,
                                url: l
                            }), o.set(c, d)
                        }
                        return [e, d]
                    }
                    return {
                        send: async function(t) {
                            const n = e({
                                envelope: t,
                                getEvent: function(e) {
                                    const n = e && e.length ? e : ["event"];
                                    return Z(t, n)
                                }
                            }).map((t => "string" == typeof t ? c(t, void 0) : c(t.dsn, t.release))).filter((t => !!t));
                            0 === n.length && n.push(["", r]);
                            const o = await Promise.all(n.map((([e, n]) => n.send(function(t, e) {
                                return Object(G.c)(e ? { ...t[0],
                                    dsn: e
                                } : t[0], t[1])
                            }(t, e)))));
                            return o[0]
                        },
                        flush: async function(t) {
                            const e = [await r.flush(t)];
                            for (const [, n] of o) e.push(await n.flush(t));
                            return e.every((t => t))
                        }
                    }
                }
            }
            var et = n(237),
                nt = n(49),
                st = n(187),
                it = n(260),
                at = n(562),
                ot = n(238);

            function ct(t, e) {
                const n = e && function(t) {
                        return void 0 !== t.getClient
                    }(e) ? e.getClient() : e,
                    r = n && n.getDsn(),
                    o = n && n.getOptions().tunnel;
                return function(t, e) {
                    return !!e && t.includes(e.host)
                }(t, r) || function(t, e) {
                    if (!e) return !1;
                    return ut(t) === ut(e)
                }(t, o)
            }

            function ut(t) {
                return "/" === t[t.length - 1] ? t.slice(0, -1) : t
            }
            var ht = n(273);

            function pt(t, ...e) {
                const n = new String(String.raw(t, ...e));
                return n.__sentry_template_string__ = t.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s"), n.__sentry_template_values__ = e, n
            }
            var lt = n(560),
                ft = n(171),
                gt = n(58);
            const _t = new Map,
                mt = new Set;

            function bt(t, e) {
                return function(t) {
                    if (gt.a._sentryModuleMetadata)
                        for (const e of Object.keys(gt.a._sentryModuleMetadata)) {
                            const n = gt.a._sentryModuleMetadata[e];
                            if (mt.has(e)) continue;
                            mt.add(e);
                            const r = t(e);
                            for (const t of r.reverse())
                                if (t.filename) {
                                    _t.set(t.filename, n);
                                    break
                                }
                        }
                }(t), _t.get(e)
            }
            const vt = "ModuleMetadata",
                St = Object(nt.d)((() => ({
                    name: vt,
                    setupOnce() {},
                    setup(t) {
                        "function" == typeof t.on && t.on("beforeEnvelope", (t => {
                            Object(G.g)(t, ((t, e) => {
                                if ("event" === e) {
                                    const e = Array.isArray(t) ? t[1] : void 0;
                                    e && (! function(t) {
                                        try {
                                            t.exception.values.forEach((t => {
                                                if (t.stacktrace)
                                                    for (const e of t.stacktrace.frames || []) delete e.module_metadata
                                            }))
                                        } catch (t) {}
                                    }(e), t[1] = e)
                                }
                            }))
                        }))
                    },
                    processEvent: (t, e, n) => (function(t, e) {
                        try {
                            e.exception.values.forEach((e => {
                                if (e.stacktrace)
                                    for (const n of e.stacktrace.frames || []) {
                                        if (!n.filename) continue;
                                        const e = bt(t, n.filename);
                                        e && (n.module_metadata = e)
                                    }
                            }))
                        } catch (t) {}
                    }(n.getOptions().stackParser, t), t)
                }))),
                Ot = Object(nt.c)(vt, St);
            var jt = n(811);
            const yt = {
                    include: {
                        cookies: !0,
                        data: !0,
                        headers: !0,
                        ip: !1,
                        query_string: !0,
                        url: !0,
                        user: {
                            id: !0,
                            username: !0,
                            email: !0
                        }
                    },
                    transactionNamingScheme: "methodPath"
                },
                xt = "RequestData",
                Tt = Object(nt.d)(((t = {}) => {
                    const e = jt.a,
                        n = { ...yt,
                            ...t,
                            include: {
                                method: !0,
                                ...yt.include,
                                ...t.include,
                                user: t.include && "boolean" == typeof t.include.user ? t.include.user : { ...yt.include.user,
                                    ...(t.include || {}).user
                                }
                            }
                        };
                    return {
                        name: xt,
                        setupOnce() {},
                        processEvent(t, r, o) {
                            const {
                                transactionNamingScheme: c
                            } = n, {
                                sdkProcessingMetadata: d = {}
                            } = t, h = d.request;
                            if (!h) return t;
                            const l = d.requestDataOptionsFromExpressHandler || d.requestDataOptionsFromGCPWrapper || function(t) {
                                    const {
                                        transactionNamingScheme: e,
                                        include: {
                                            ip: n,
                                            user: r,
                                            ...o
                                        }
                                    } = t, c = [];
                                    for (const [t, e] of Object.entries(o)) e && c.push(t);
                                    let d;
                                    if (void 0 === r) d = !0;
                                    else if ("boolean" == typeof r) d = r;
                                    else {
                                        const t = [];
                                        for (const [e, n] of Object.entries(r)) n && t.push(e);
                                        d = t
                                    }
                                    return {
                                        include: {
                                            ip: n,
                                            user: d,
                                            request: 0 !== c.length ? c : void 0,
                                            transaction: e
                                        }
                                    }
                                }(n),
                                f = e(t, h, l);
                            if ("transaction" === t.type || "handler" === c) return f;
                            const _ = h._sentryTransaction;
                            if (_) {
                                const t = Object(J.e)(_).description || "",
                                    e = "sentry.javascript.nextjs" === function(t) {
                                        try {
                                            return t.getOptions()._metadata.sdk.name
                                        } catch (t) {
                                            return
                                        }
                                    }(o) ? t.startsWith("/api") : "path" !== c,
                                    [n] = Object(jt.b)(h, {
                                        path: !0,
                                        method: e,
                                        customRoute: t
                                    });
                                f.transaction = n
                            }
                            return f
                        }
                    }
                })),
                It = Object(nt.c)(xt, Tt);
            var kt = n(299),
                Et = n(300),
                Ct = n(801);
            const wt = "LinkedErrors",
                At = Object(nt.d)(((t = {}) => {
                    const e = t.limit || 5,
                        n = t.key || "cause";
                    return {
                        name: wt,
                        setupOnce() {},
                        preprocessEvent(t, r, o) {
                            const c = o.getOptions();
                            Object(Ct.a)(R.c, c.stackParser, c.maxValueLength, n, e, t, r)
                        }
                    }
                })),
                Rt = Object(nt.c)(wt, At);
            class Mt {
                constructor(t) {
                    this._client = t, this._buckets = new Map, this._interval = setInterval((() => this.flush()), 5e3)
                }
                add(t, e, n, r = "none", o = {}, c = Object(time.b)()) {
                    const d = Math.floor(c),
                        h = Object(L.b)(e),
                        l = Object(L.c)(o),
                        f = Object(L.d)(r),
                        _ = Object(L.a)(t, h, f, l);
                    let m = this._buckets.get(_);
                    const v = m && t === P ? m.metric.weight : 0;
                    m ? (m.metric.add(n), m.timestamp < d && (m.timestamp = d)) : (m = {
                        metric: new U[t](n),
                        timestamp: d,
                        metricType: t,
                        name: h,
                        unit: f,
                        tags: l
                    }, this._buckets.set(_, m));
                    const S = "string" == typeof n ? m.metric.weight - v : n;
                    Object(H.b)(t, h, S, f, o, _)
                }
                flush() {
                    if (0 !== this._buckets.size) {
                        if (this._client.captureAggregateMetrics) {
                            const t = Array.from(this._buckets).map((([, t]) => t));
                            this._client.captureAggregateMetrics(t)
                        }
                        this._buckets.clear()
                    }
                }
                close() {
                    clearInterval(this._interval), this.flush()
                }
            }
            const Dt = "MetricsAggregator",
                $t = Object(nt.d)((() => ({
                    name: Dt,
                    setupOnce() {},
                    setup(t) {
                        t.metricsAggregator = new Mt(t)
                    }
                })));

            function Nt(t, e, n, data = {}) {
                const r = Object(y.k)(),
                    o = Object(y.l)();
                if (r) {
                    if (!r.metricsAggregator) return void(N.a && M.b.warn("No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs"));
                    const {
                        unit: c,
                        tags: d,
                        timestamp: h
                    } = data, {
                        release: l,
                        environment: f
                    } = r.getOptions(), _ = o.getTransaction(), m = {};
                    l && (m.release = l), f && (m.environment = f), _ && (m.transaction = Object(J.e)(_).description || ""), N.a && M.b.log(`Adding value of ${n} to ${t} metric ${e}`), r.metricsAggregator.add(t, e, n, c, { ...m,
                        ...d
                    }, h)
                }
            }
            const Pt = {
                    increment: function(t, e = 1, data) {
                        Nt("c", t, e, data)
                    },
                    distribution: function(t, e, data) {
                        Nt("d", t, e, data)
                    },
                    set: function(t, e, data) {
                        Nt(P, t, e, data)
                    },
                    gauge: function(t, e, data) {
                        Nt("g", t, e, data)
                    },
                    MetricsAggregator: Object(nt.c)(Dt, $t),
                    metricsAggregatorIntegration: $t
                },
                Ft = r
        },
        99: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            })), n.d(e, "b", (function() {
                return d
            })), n.d(e, "c", (function() {
                return h
            }));
            var r = n(176),
                o = n(25),
                c = n(50);

            function d(t) {
                const e = Object(r.b)(),
                    n = {
                        sid: Object(o.f)(),
                        init: !0,
                        timestamp: e,
                        started: e,
                        duration: 0,
                        status: "ok",
                        errors: 0,
                        ignoreDuration: !1,
                        toJSON: () => function(t) {
                            return Object(c.c)({
                                sid: `${t.sid}`,
                                init: t.init,
                                started: new Date(1e3 * t.started).toISOString(),
                                timestamp: new Date(1e3 * t.timestamp).toISOString(),
                                status: t.status,
                                errors: t.errors,
                                did: "number" == typeof t.did || "string" == typeof t.did ? `${t.did}` : void 0,
                                duration: t.duration,
                                abnormal_mechanism: t.abnormal_mechanism,
                                attrs: {
                                    release: t.release,
                                    environment: t.environment,
                                    ip_address: t.ipAddress,
                                    user_agent: t.userAgent
                                }
                            })
                        }(n)
                    };
                return t && h(n, t), n
            }

            function h(t, e = {}) {
                if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || Object(r.b)(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : Object(o.f)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), "number" == typeof e.started && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
                else if ("number" == typeof e.duration) t.duration = e.duration;
                else {
                    const e = t.timestamp - t.started;
                    t.duration = e >= 0 ? e : 0
                }
                e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), "number" == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status)
            }

            function l(t, e) {
                let n = {};
                e ? n = {
                    status: e
                } : "ok" === t.status && (n = {
                    status: "exited"
                }), h(t, n)
            }
        }
    }
]);