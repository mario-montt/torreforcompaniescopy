! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "081c0dda-acd2-46f4-82f8-7eb4e955959b", e._sentryDebugIdIdentifier = "sentry-dbid-081c0dda-acd2-46f4-82f8-7eb4e955959b")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [62], {
        280: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1);
            r.__exportStar(n(761), t);
            var o = n(125),
                c = n(63),
                l = n(435),
                d = n(567);
            t.Transports = d;
            var f = {},
                v = c.getGlobalObject();
            v.Sentry && v.Sentry.Integrations && (f = v.Sentry.Integrations);
            var h = r.__assign(r.__assign(r.__assign({}, f), o.Integrations), l);
            t.Integrations = h
        },
        301: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(63),
                l = 0;

            function d() {
                l += 1, setTimeout((function() {
                    l -= 1
                }))
            }
            t.shouldIgnoreOnError = function() {
                return l > 0
            }, t.ignoreNextOnError = d, t.wrap = function e(t, n, l) {
                if (void 0 === n && (n = {}), "function" != typeof t) return t;
                try {
                    if (t.__sentry__) return t;
                    if (t.__sentry_wrapped__) return t.__sentry_wrapped__
                } catch (e) {
                    return t
                }
                var f = function() {
                    var f = Array.prototype.slice.call(arguments);
                    try {
                        l && "function" == typeof l && l.apply(this, arguments);
                        var v = f.map((function(t) {
                            return e(t, n)
                        }));
                        return t.handleEvent ? t.handleEvent.apply(this, v) : t.apply(this, v)
                    } catch (e) {
                        throw d(), o.withScope((function(t) {
                            t.addEventProcessor((function(e) {
                                var t = r.__assign({}, e);
                                return n.mechanism && (c.addExceptionTypeValue(t, void 0, void 0), c.addExceptionMechanism(t, n.mechanism)), t.extra = r.__assign(r.__assign({}, t.extra), {
                                    arguments: f
                                }), t
                            })), o.captureException(e)
                        })), e
                    }
                };
                try {
                    for (var v in t) Object.prototype.hasOwnProperty.call(t, v) && (f[v] = t[v])
                } catch (e) {}
                t.prototype = t.prototype || {}, f.prototype = t.prototype, Object.defineProperty(t, "__sentry_wrapped__", {
                    enumerable: !1,
                    value: f
                }), Object.defineProperties(f, {
                    __sentry__: {
                        enumerable: !1,
                        value: !0
                    },
                    __sentry_original__: {
                        enumerable: !1,
                        value: t
                    }
                });
                try {
                    Object.getOwnPropertyDescriptor(f, "name").configurable && Object.defineProperty(f, "name", {
                        get: function() {
                            return t.name
                        }
                    })
                } catch (e) {}
                return f
            }, t.injectReportDialog = function(e) {
                if (void 0 === e && (e = {}), e.eventId)
                    if (e.dsn) {
                        var script = document.createElement("script");
                        script.async = !0, script.src = new o.API(e.dsn).getReportDialogEndpoint(e), e.onLoad && (script.onload = e.onLoad), (document.head || document.body).appendChild(script)
                    } else c.logger.error("Missing dsn option in showReportDialog call");
                else c.logger.error("Missing eventId option in showReportDialog call")
            }
        },
        432: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(169),
                c = n(63),
                l = n(566),
                d = n(433);

            function f(e, t, n) {
                var o;
                if (void 0 === n && (n = {}), c.isErrorEvent(e) && e.error) return e = e.error, o = l.eventFromStacktrace(d.computeStackTrace(e));
                if (c.isDOMError(e) || c.isDOMException(e)) {
                    var f = e,
                        h = f.name || (c.isDOMError(f) ? "DOMError" : "DOMException"),
                        _ = f.message ? h + ": " + f.message : h;
                    return o = v(_, t, n), c.addExceptionTypeValue(o, _), "code" in f && (o.tags = r.__assign(r.__assign({}, o.tags), {
                        "DOMException.code": "" + f.code
                    })), o
                }
                if (c.isError(e)) return o = l.eventFromStacktrace(d.computeStackTrace(e));
                if (c.isPlainObject(e) || c.isEvent(e)) {
                    var m = e;
                    return o = l.eventFromPlainObject(m, t, n.rejection), c.addExceptionMechanism(o, {
                        synthetic: !0
                    }), o
                }
                return o = v(e, t, n), c.addExceptionTypeValue(o, "" + e, void 0), c.addExceptionMechanism(o, {
                    synthetic: !0
                }), o
            }

            function v(input, e, t) {
                void 0 === t && (t = {});
                var n = {
                    message: input
                };
                if (t.attachStacktrace && e) {
                    var r = d.computeStackTrace(e),
                        o = l.prepareFramesForEvent(r.stack);
                    n.stacktrace = {
                        frames: o
                    }
                }
                return n
            }
            t.eventFromException = function(e, t, n) {
                var r = f(t, n && n.syntheticException || void 0, {
                    attachStacktrace: e.attachStacktrace
                });
                return c.addExceptionMechanism(r, {
                    handled: !0,
                    type: "generic"
                }), r.level = o.Severity.Error, n && n.event_id && (r.event_id = n.event_id), c.SyncPromise.resolve(r)
            }, t.eventFromMessage = function(e, t, n, r) {
                void 0 === n && (n = o.Severity.Info);
                var l = v(t, r && r.syntheticException || void 0, {
                    attachStacktrace: e.attachStacktrace
                });
                return l.level = n, r && r.event_id && (l.event_id = r.event_id), c.SyncPromise.resolve(l)
            }, t.eventFromUnknownInput = f, t.eventFromString = v
        },
        433: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = "?",
                c = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                d = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                f = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                v = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                h = /Minified React error #\d+;/i;

            function _(e, t) {
                try {
                    return r.__assign(r.__assign({}, e), {
                        stack: e.stack.slice(t)
                    })
                } catch (t) {
                    return e
                }
            }

            function m(e) {
                var t = e && e.message;
                return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
            }
            t.computeStackTrace = function(e) {
                var t = null,
                    n = 0;
                e && ("number" == typeof e.framesToPop ? n = e.framesToPop : h.test(e.message) && (n = 1));
                try {
                    if (t = function(e) {
                            if (!e || !e.stacktrace) return null;
                            for (var t, n = e.stacktrace, r = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, c = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, l = n.split("\n"), d = [], line = 0; line < l.length; line += 2) {
                                var element = null;
                                (t = r.exec(l[line])) ? element = {
                                    url: t[2],
                                    func: t[3],
                                    args: [],
                                    line: +t[1],
                                    column: null
                                }: (t = c.exec(l[line])) && (element = {
                                    url: t[6],
                                    func: t[3] || t[4],
                                    args: t[5] ? t[5].split(",") : [],
                                    line: +t[1],
                                    column: +t[2]
                                }), element && (!element.func && element.line && (element.func = o), d.push(element))
                            }
                            if (!d.length) return null;
                            return {
                                message: m(e),
                                name: e.name,
                                stack: d
                            }
                        }(e), t) return _(t, n)
                } catch (e) {}
                try {
                    if (t = function(e) {
                            if (!e || !e.stack) return null;
                            for (var t, n, element, r = [], h = e.stack.split("\n"), i = 0; i < h.length; ++i) {
                                if (n = c.exec(h[i])) {
                                    var _ = n[2] && 0 === n[2].indexOf("native");
                                    n[2] && 0 === n[2].indexOf("eval") && (t = v.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]);
                                    var y = n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                        E = n[1] || o,
                                        S = -1 !== E.indexOf("safari-extension"),
                                        x = -1 !== E.indexOf("safari-web-extension");
                                    (S || x) && (E = -1 !== E.indexOf("@") ? E.split("@")[0] : o, y = S ? "safari-extension:" + y : "safari-web-extension:" + y), element = {
                                        url: y,
                                        func: E,
                                        args: _ ? [n[2]] : [],
                                        line: n[3] ? +n[3] : null,
                                        column: n[4] ? +n[4] : null
                                    }
                                } else if (n = d.exec(h[i])) element = {
                                    url: n[2],
                                    func: n[1] || o,
                                    args: [],
                                    line: +n[3],
                                    column: n[4] ? +n[4] : null
                                };
                                else {
                                    if (!(n = l.exec(h[i]))) continue;
                                    n[3] && n[3].indexOf(" > eval") > -1 && (t = f.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = t[1], n[4] = t[2], n[5] = "") : 0 !== i || n[5] || void 0 === e.columnNumber || (r[0].column = e.columnNumber + 1), element = {
                                        url: n[3],
                                        func: n[1] || o,
                                        args: n[2] ? n[2].split(",") : [],
                                        line: n[4] ? +n[4] : null,
                                        column: n[5] ? +n[5] : null
                                    }
                                }!element.func && element.line && (element.func = o), r.push(element)
                            }
                            if (!r.length) return null;
                            return {
                                message: m(e),
                                name: e.name,
                                stack: r
                            }
                        }(e), t) return _(t, n)
                } catch (e) {}
                return {
                    message: m(e),
                    name: e && e.name,
                    stack: [],
                    failed: !0
                }
            }
        },
        434: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(169),
                l = n(63),
                d = {
                    event: "error",
                    transaction: "transaction",
                    session: "session",
                    attachment: "attachment"
                },
                f = function() {
                    function e(e) {
                        this.options = e, this._buffer = new l.PromiseBuffer(30), this._rateLimits = {}, this._api = new o.API(e.dsn, e._metadata, e.tunnel), this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
                    }
                    return e.prototype.sendEvent = function(e) {
                        throw new l.SentryError("Transport Class has to implement `sendEvent` method")
                    }, e.prototype.close = function(e) {
                        return this._buffer.drain(e)
                    }, e.prototype._handleResponse = function(e) {
                        var t = e.requestType,
                            n = e.response,
                            r = e.headers,
                            o = e.resolve,
                            d = e.reject,
                            f = c.Status.fromHttpCode(n.status);
                        this._handleRateLimit(r) && l.logger.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t)), f !== c.Status.Success ? d(n) : o({
                            status: f
                        })
                    }, e.prototype._disabledUntil = function(e) {
                        var t = d[e];
                        return this._rateLimits[t] || this._rateLimits.all
                    }, e.prototype._isRateLimited = function(e) {
                        return this._disabledUntil(e) > new Date(Date.now())
                    }, e.prototype._handleRateLimit = function(e) {
                        var t, n, o, c, d = Date.now(),
                            f = e["x-sentry-rate-limits"],
                            v = e["retry-after"];
                        if (f) {
                            try {
                                for (var h = r.__values(f.trim().split(",")), _ = h.next(); !_.done; _ = h.next()) {
                                    var m = _.value.split(":", 2),
                                        y = parseInt(m[0], 10),
                                        E = 1e3 * (isNaN(y) ? 60 : y);
                                    try {
                                        for (var S = (o = void 0, r.__values(m[1].split(";"))), x = S.next(); !x.done; x = S.next()) {
                                            var w = x.value;
                                            this._rateLimits[w || "all"] = new Date(d + E)
                                        }
                                    } catch (e) {
                                        o = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            x && !x.done && (c = S.return) && c.call(S)
                                        } finally {
                                            if (o) throw o.error
                                        }
                                    }
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    _ && !_.done && (n = h.return) && n.call(h)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return !0
                        }
                        return !!v && (this._rateLimits.all = new Date(d + l.parseRetryAfterHeader(d, v)), !0)
                    }, e
                }();
            t.BaseTransport = f
        },
        435: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(765);
            t.GlobalHandlers = r.GlobalHandlers;
            var o = n(766);
            t.TryCatch = o.TryCatch;
            var c = n(767);
            t.Breadcrumbs = c.Breadcrumbs;
            var l = n(768);
            t.LinkedErrors = l.LinkedErrors;
            var d = n(769);
            t.UserAgent = d.UserAgent;
            var f = n(770);
            t.Dedupe = f.Dedupe
        },
        565: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(63),
                l = n(762),
                d = n(301),
                f = n(435),
                v = function(e) {
                    function t(t) {
                        void 0 === t && (t = {});
                        return t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
                            name: "sentry.javascript.browser",
                            packages: [{
                                name: "npm:@sentry/browser",
                                version: o.SDK_VERSION
                            }],
                            version: o.SDK_VERSION
                        }, e.call(this, l.BrowserBackend, t) || this
                    }
                    return r.__extends(t, e), t.prototype.showReportDialog = function(e) {
                        void 0 === e && (e = {}), c.getGlobalObject().document && (this._isEnabled() ? d.injectReportDialog(r.__assign(r.__assign({}, e), {
                            dsn: e.dsn || this.getDsn()
                        })) : c.logger.error("Trying to call showReportDialog with Sentry Client disabled"))
                    }, t.prototype._prepareEvent = function(t, n, r) {
                        return t.platform = t.platform || "javascript", e.prototype._prepareEvent.call(this, t, n, r)
                    }, t.prototype._sendEvent = function(t) {
                        var n = this.getIntegration(f.Breadcrumbs);
                        n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t)
                    }, t
                }(o.BaseClient);
            t.BrowserClient = v
        },
        566: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(63),
                o = n(433);

            function c(e) {
                var t = l(e.stack),
                    n = {
                        type: e.name,
                        value: e.message
                    };
                return t && t.length && (n.stacktrace = {
                    frames: t
                }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
            }

            function l(e) {
                if (!e || !e.length) return [];
                var t = e,
                    n = t[0].func || "",
                    r = t[t.length - 1].func || "";
                return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)), -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, 50).map((function(e) {
                    return {
                        colno: null === e.column ? void 0 : e.column,
                        filename: e.url || t[0].url,
                        function: e.func || "?",
                        in_app: !0,
                        lineno: null === e.line ? void 0 : e.line
                    }
                })).reverse()
            }
            t.exceptionFromStacktrace = c, t.eventFromPlainObject = function(e, t, n) {
                var c = {
                    exception: {
                        values: [{
                            type: r.isEvent(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                            value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + r.extractExceptionKeysForMessage(e)
                        }]
                    },
                    extra: {
                        __serialized__: r.normalizeToSize(e)
                    }
                };
                if (t) {
                    var d = l(o.computeStackTrace(t).stack);
                    c.stacktrace = {
                        frames: d
                    }
                }
                return c
            }, t.eventFromStacktrace = function(e) {
                return {
                    exception: {
                        values: [c(e)]
                    }
                }
            }, t.prepareFramesForEvent = l
        },
        567: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(434);
            t.BaseTransport = r.BaseTransport;
            var o = n(763);
            t.FetchTransport = o.FetchTransport;
            var c = n(764);
            t.XHRTransport = c.XHRTransport
        },
        761: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(169);
            t.Severity = r.Severity, t.Status = r.Status;
            var o = n(125);
            t.addGlobalEventProcessor = o.addGlobalEventProcessor, t.addBreadcrumb = o.addBreadcrumb, t.captureException = o.captureException, t.captureEvent = o.captureEvent, t.captureMessage = o.captureMessage, t.configureScope = o.configureScope, t.getHubFromCarrier = o.getHubFromCarrier, t.getCurrentHub = o.getCurrentHub, t.Hub = o.Hub, t.makeMain = o.makeMain, t.Scope = o.Scope, t.startTransaction = o.startTransaction, t.SDK_VERSION = o.SDK_VERSION, t.setContext = o.setContext, t.setExtra = o.setExtra, t.setExtras = o.setExtras, t.setTag = o.setTag, t.setTags = o.setTags, t.setUser = o.setUser, t.withScope = o.withScope;
            var c = n(565);
            t.BrowserClient = c.BrowserClient;
            var l = n(301);
            t.injectReportDialog = l.injectReportDialog;
            var d = n(432);
            t.eventFromException = d.eventFromException, t.eventFromMessage = d.eventFromMessage;
            var f = n(771);
            t.defaultIntegrations = f.defaultIntegrations, t.forceLoad = f.forceLoad, t.init = f.init, t.lastEventId = f.lastEventId, t.onLoad = f.onLoad, t.showReportDialog = f.showReportDialog, t.flush = f.flush, t.close = f.close, t.wrap = f.wrap;
            var v = n(772);
            t.SDK_NAME = v.SDK_NAME
        },
        762: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(169),
                l = n(63),
                d = n(432),
                f = n(567),
                v = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.eventFromException = function(e, t) {
                        return d.eventFromException(this._options, e, t)
                    }, t.prototype.eventFromMessage = function(e, t, n) {
                        return void 0 === t && (t = c.Severity.Info), d.eventFromMessage(this._options, e, t, n)
                    }, t.prototype._setupTransport = function() {
                        if (!this._options.dsn) return e.prototype._setupTransport.call(this);
                        var t = r.__assign(r.__assign({}, this._options.transportOptions), {
                            dsn: this._options.dsn,
                            tunnel: this._options.tunnel,
                            _metadata: this._options._metadata
                        });
                        return this._options.transport ? new this._options.transport(t) : l.supportsFetch() ? new f.FetchTransport(t) : new f.XHRTransport(t)
                    }, t
                }(o.BaseBackend);
            t.BrowserBackend = v
        },
        763: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(63);
            var l = function(e) {
                function t(t, n) {
                    void 0 === n && (n = function() {
                        var e, t, n = c.getGlobalObject();
                        if (c.isNativeFetch(n.fetch)) return n.fetch.bind(n);
                        var r = n.document,
                            o = n.fetch;
                        if ("function" == typeof(null === (e = r) || void 0 === e ? void 0 : e.createElement)) try {
                            var l = r.createElement("iframe");
                            l.hidden = !0, r.head.appendChild(l), (null === (t = l.contentWindow) || void 0 === t ? void 0 : t.fetch) && (o = l.contentWindow.fetch), r.head.removeChild(l)
                        } catch (e) {
                            c.logger.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                        }
                        return o.bind(n)
                    }());
                    var r = e.call(this, t) || this;
                    return r._fetch = n, r
                }
                return r.__extends(t, e), t.prototype.sendEvent = function(e) {
                    return this._sendRequest(o.eventToSentryRequest(e, this._api), e)
                }, t.prototype.sendSession = function(e) {
                    return this._sendRequest(o.sessionToSentryRequest(e, this._api), e)
                }, t.prototype._sendRequest = function(e, t) {
                    var n = this;
                    if (this._isRateLimited(e.type)) return Promise.reject({
                        event: t,
                        type: e.type,
                        reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                        status: 429
                    });
                    var r = {
                        body: e.body,
                        method: "POST",
                        referrerPolicy: c.supportsReferrerPolicy() ? "origin" : ""
                    };
                    return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add((function() {
                        return new c.SyncPromise((function(t, o) {
                            n._fetch(e.url, r).then((function(r) {
                                var c = {
                                    "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                    "retry-after": r.headers.get("Retry-After")
                                };
                                n._handleResponse({
                                    requestType: e.type,
                                    response: r,
                                    headers: c,
                                    resolve: t,
                                    reject: o
                                })
                            })).catch(o)
                        }))
                    }))
                }, t
            }(n(434).BaseTransport);
            t.FetchTransport = l
        },
        764: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(63),
                l = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return r.__extends(t, e), t.prototype.sendEvent = function(e) {
                        return this._sendRequest(o.eventToSentryRequest(e, this._api), e)
                    }, t.prototype.sendSession = function(e) {
                        return this._sendRequest(o.sessionToSentryRequest(e, this._api), e)
                    }, t.prototype._sendRequest = function(e, t) {
                        var n = this;
                        return this._isRateLimited(e.type) ? Promise.reject({
                            event: t,
                            type: e.type,
                            reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                            status: 429
                        }) : this._buffer.add((function() {
                            return new c.SyncPromise((function(t, r) {
                                var o = new XMLHttpRequest;
                                for (var header in o.onreadystatechange = function() {
                                        if (4 === o.readyState) {
                                            var c = {
                                                "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                                                "retry-after": o.getResponseHeader("Retry-After")
                                            };
                                            n._handleResponse({
                                                requestType: e.type,
                                                response: o,
                                                headers: c,
                                                resolve: t,
                                                reject: r
                                            })
                                        }
                                    }, o.open("POST", e.url), n.options.headers) n.options.headers.hasOwnProperty(header) && o.setRequestHeader(header, n.options.headers[header]);
                                o.send(e.body)
                            }))
                        }))
                    }, t
                }(n(434).BaseTransport);
            t.XHRTransport = l
        },
        765: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(169),
                l = n(63),
                d = n(432),
                f = n(301),
                v = function() {
                    function e(t) {
                        this.name = e.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = r.__assign({
                            onerror: !0,
                            onunhandledrejection: !0
                        }, t)
                    }
                    return e.prototype.setupOnce = function() {
                        Error.stackTraceLimit = 50, this._options.onerror && (l.logger.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (l.logger.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
                    }, e.prototype._installGlobalOnErrorHandler = function() {
                        var t = this;
                        this._onErrorHandlerInstalled || (l.addInstrumentationHandler({
                            callback: function(data) {
                                var n = data.error,
                                    r = o.getCurrentHub(),
                                    c = r.getIntegration(e),
                                    v = n && !0 === n.__sentry_own_request__;
                                if (c && !f.shouldIgnoreOnError() && !v) {
                                    var h = r.getClient(),
                                        _ = void 0 === n && l.isString(data.msg) ? t._eventFromIncompleteOnError(data.msg, data.url, data.line, data.column) : t._enhanceEventWithInitialFrame(d.eventFromUnknownInput(n || data.msg, void 0, {
                                            attachStacktrace: h && h.getOptions().attachStacktrace,
                                            rejection: !1
                                        }), data.url, data.line, data.column);
                                    l.addExceptionMechanism(_, {
                                        handled: !1,
                                        type: "onerror"
                                    }), r.captureEvent(_, {
                                        originalException: n
                                    })
                                }
                            },
                            type: "error"
                        }), this._onErrorHandlerInstalled = !0)
                    }, e.prototype._installGlobalOnUnhandledRejectionHandler = function() {
                        var t = this;
                        this._onUnhandledRejectionHandlerInstalled || (l.addInstrumentationHandler({
                            callback: function(n) {
                                var r = n;
                                try {
                                    "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
                                } catch (e) {}
                                var v = o.getCurrentHub(),
                                    h = v.getIntegration(e),
                                    _ = r && !0 === r.__sentry_own_request__;
                                if (!h || f.shouldIgnoreOnError() || _) return !0;
                                var m = v.getClient(),
                                    y = l.isPrimitive(r) ? t._eventFromRejectionWithPrimitive(r) : d.eventFromUnknownInput(r, void 0, {
                                        attachStacktrace: m && m.getOptions().attachStacktrace,
                                        rejection: !0
                                    });
                                y.level = c.Severity.Error, l.addExceptionMechanism(y, {
                                    handled: !1,
                                    type: "onunhandledrejection"
                                }), v.captureEvent(y, {
                                    originalException: r
                                })
                            },
                            type: "unhandledrejection"
                        }), this._onUnhandledRejectionHandlerInstalled = !0)
                    }, e.prototype._eventFromIncompleteOnError = function(e, t, line, n) {
                        var r, o = l.isErrorEvent(e) ? e.message : e,
                            c = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        c && (r = c[1], o = c[2]);
                        var d = {
                            exception: {
                                values: [{
                                    type: r || "Error",
                                    value: o
                                }]
                            }
                        };
                        return this._enhanceEventWithInitialFrame(d, t, line, n)
                    }, e.prototype._eventFromRejectionWithPrimitive = function(e) {
                        return {
                            exception: {
                                values: [{
                                    type: "UnhandledRejection",
                                    value: "Non-Error promise rejection captured with value: " + String(e)
                                }]
                            }
                        }
                    }, e.prototype._enhanceEventWithInitialFrame = function(e, t, line, n) {
                        e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}, e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
                        var r = isNaN(parseInt(n, 10)) ? void 0 : n,
                            o = isNaN(parseInt(line, 10)) ? void 0 : line,
                            c = l.isString(t) && t.length > 0 ? t : l.getLocationHref();
                        return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
                            colno: r,
                            filename: c,
                            function: "?",
                            in_app: !0,
                            lineno: o
                        }), e
                    }, e.id = "GlobalHandlers", e
                }();
            t.GlobalHandlers = v
        },
        766: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(63),
                c = n(301),
                l = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
                d = function() {
                    function e(t) {
                        this.name = e.id, this._options = r.__assign({
                            XMLHttpRequest: !0,
                            eventTarget: !0,
                            requestAnimationFrame: !0,
                            setInterval: !0,
                            setTimeout: !0
                        }, t)
                    }
                    return e.prototype.setupOnce = function() {
                        var e = o.getGlobalObject();
                        (this._options.setTimeout && o.fill(e, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && o.fill(e, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && o.fill(e, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in e && o.fill(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget) && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : l).forEach(this._wrapEventTarget.bind(this))
                    }, e.prototype._wrapTimeFunction = function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = t[0];
                            return t[0] = c.wrap(r, {
                                mechanism: {
                                    data: {
                                        function: o.getFunctionName(e)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }), e.apply(this, t)
                        }
                    }, e.prototype._wrapRAF = function(e) {
                        return function(t) {
                            return e.call(this, c.wrap(t, {
                                mechanism: {
                                    data: {
                                        function: "requestAnimationFrame",
                                        handler: o.getFunctionName(e)
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }))
                        }
                    }, e.prototype._wrapEventTarget = function(e) {
                        var t = o.getGlobalObject(),
                            n = t[e] && t[e].prototype;
                        n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (o.fill(n, "addEventListener", (function(t) {
                            return function(n, r, l) {
                                try {
                                    "function" == typeof r.handleEvent && (r.handleEvent = c.wrap(r.handleEvent.bind(r), {
                                        mechanism: {
                                            data: {
                                                function: "handleEvent",
                                                handler: o.getFunctionName(r),
                                                target: e
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    }))
                                } catch (e) {}
                                return t.call(this, n, c.wrap(r, {
                                    mechanism: {
                                        data: {
                                            function: "addEventListener",
                                            handler: o.getFunctionName(r),
                                            target: e
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }), l)
                            }
                        })), o.fill(n, "removeEventListener", (function(e) {
                            return function(t, n, r) {
                                var o, c = n;
                                try {
                                    var l = null === (o = c) || void 0 === o ? void 0 : o.__sentry_wrapped__;
                                    l && e.call(this, t, l, r)
                                } catch (e) {}
                                return e.call(this, t, c, r)
                            }
                        })))
                    }, e.prototype._wrapXHR = function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            var r = this,
                                l = ["onload", "onerror", "onprogress", "onreadystatechange"];
                            return l.forEach((function(e) {
                                e in r && "function" == typeof r[e] && o.fill(r, e, (function(t) {
                                    var n = {
                                        mechanism: {
                                            data: {
                                                function: e,
                                                handler: o.getFunctionName(t)
                                            },
                                            handled: !0,
                                            type: "instrument"
                                        }
                                    };
                                    return t.__sentry_original__ && (n.mechanism.data.handler = o.getFunctionName(t.__sentry_original__)), c.wrap(t, n)
                                }))
                            })), e.apply(this, t)
                        }
                    }, e.id = "TryCatch", e
                }();
            t.TryCatch = d
        },
        767: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(169),
                l = n(63),
                d = function() {
                    function e(t) {
                        this.name = e.id, this._options = r.__assign({
                            console: !0,
                            dom: !0,
                            fetch: !0,
                            history: !0,
                            sentry: !0,
                            xhr: !0
                        }, t)
                    }
                    return e.prototype.addSentryBreadcrumb = function(e) {
                        this._options.sentry && o.getCurrentHub().addBreadcrumb({
                            category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                            event_id: e.event_id,
                            level: e.level,
                            message: l.getEventDescription(e)
                        }, {
                            event: e
                        })
                    }, e.prototype.setupOnce = function() {
                        var e = this;
                        this._options.console && l.addInstrumentationHandler({
                            callback: function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._consoleBreadcrumb.apply(e, r.__spread(t))
                            },
                            type: "console"
                        }), this._options.dom && l.addInstrumentationHandler({
                            callback: function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._domBreadcrumb.apply(e, r.__spread(t))
                            },
                            type: "dom"
                        }), this._options.xhr && l.addInstrumentationHandler({
                            callback: function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._xhrBreadcrumb.apply(e, r.__spread(t))
                            },
                            type: "xhr"
                        }), this._options.fetch && l.addInstrumentationHandler({
                            callback: function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._fetchBreadcrumb.apply(e, r.__spread(t))
                            },
                            type: "fetch"
                        }), this._options.history && l.addInstrumentationHandler({
                            callback: function() {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                e._historyBreadcrumb.apply(e, r.__spread(t))
                            },
                            type: "history"
                        })
                    }, e.prototype._consoleBreadcrumb = function(e) {
                        var t = {
                            category: "console",
                            data: {
                                arguments: e.args,
                                logger: "console"
                            },
                            level: c.Severity.fromString(e.level),
                            message: l.safeJoin(e.args, " ")
                        };
                        if ("assert" === e.level) {
                            if (!1 !== e.args[0]) return;
                            t.message = "Assertion failed: " + (l.safeJoin(e.args.slice(1), " ") || "console.assert"), t.data.arguments = e.args.slice(1)
                        }
                        o.getCurrentHub().addBreadcrumb(t, {
                            input: e.args,
                            level: e.level
                        })
                    }, e.prototype._domBreadcrumb = function(e) {
                        var t, n = "object" == typeof this._options.dom ? this._options.dom.serializeAttribute : void 0;
                        "string" == typeof n && (n = [n]);
                        try {
                            t = e.event.target ? l.htmlTreeAsString(e.event.target, n) : l.htmlTreeAsString(e.event, n)
                        } catch (e) {
                            t = "<unknown>"
                        }
                        0 !== t.length && o.getCurrentHub().addBreadcrumb({
                            category: "ui." + e.name,
                            message: t
                        }, {
                            event: e.event,
                            name: e.name,
                            global: e.global
                        })
                    }, e.prototype._xhrBreadcrumb = function(e) {
                        if (e.endTimestamp) {
                            if (e.xhr.__sentry_own_request__) return;
                            var t = e.xhr.__sentry_xhr__ || {},
                                n = t.method,
                                r = t.url,
                                c = t.status_code,
                                body = t.body;
                            o.getCurrentHub().addBreadcrumb({
                                category: "xhr",
                                data: {
                                    method: n,
                                    url: r,
                                    status_code: c
                                },
                                type: "http"
                            }, {
                                xhr: e.xhr,
                                input: body
                            })
                        } else;
                    }, e.prototype._fetchBreadcrumb = function(e) {
                        e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? o.getCurrentHub().addBreadcrumb({
                            category: "fetch",
                            data: e.fetchData,
                            level: c.Severity.Error,
                            type: "http"
                        }, {
                            data: e.error,
                            input: e.args
                        }) : o.getCurrentHub().addBreadcrumb({
                            category: "fetch",
                            data: r.__assign(r.__assign({}, e.fetchData), {
                                status_code: e.response.status
                            }),
                            type: "http"
                        }, {
                            input: e.args,
                            response: e.response
                        })))
                    }, e.prototype._historyBreadcrumb = function(e) {
                        var t = l.getGlobalObject(),
                            n = e.from,
                            r = e.to,
                            c = l.parseUrl(t.location.href),
                            d = l.parseUrl(n),
                            f = l.parseUrl(r);
                        d.path || (d = c), c.protocol === f.protocol && c.host === f.host && (r = f.relative), c.protocol === d.protocol && c.host === d.host && (n = d.relative), o.getCurrentHub().addBreadcrumb({
                            category: "navigation",
                            data: {
                                from: n,
                                to: r
                            }
                        })
                    }, e.id = "Breadcrumbs", e
                }();
            t.Breadcrumbs = d
        },
        768: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(63),
                l = n(566),
                d = n(433),
                f = function() {
                    function e(t) {
                        void 0 === t && (t = {}), this.name = e.id, this._key = t.key || "cause", this._limit = t.limit || 5
                    }
                    return e.prototype.setupOnce = function() {
                        o.addGlobalEventProcessor((function(t, n) {
                            var r = o.getCurrentHub().getIntegration(e);
                            return r ? r._handler(t, n) : t
                        }))
                    }, e.prototype._handler = function(e, t) {
                        if (!(e.exception && e.exception.values && t && c.isInstanceOf(t.originalException, Error))) return e;
                        var n = this._walkErrorTree(t.originalException, this._key);
                        return e.exception.values = r.__spread(n, e.exception.values), e
                    }, e.prototype._walkErrorTree = function(e, t, n) {
                        if (void 0 === n && (n = []), !c.isInstanceOf(e[t], Error) || n.length + 1 >= this._limit) return n;
                        var o = d.computeStackTrace(e[t]),
                            f = l.exceptionFromStacktrace(o);
                        return this._walkErrorTree(e[t], t, r.__spread([f], n))
                    }, e.id = "LinkedErrors", e
                }();
            t.LinkedErrors = f
        },
        769: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(63).getGlobalObject(),
                l = function() {
                    function e() {
                        this.name = e.id
                    }
                    return e.prototype.setupOnce = function() {
                        o.addGlobalEventProcessor((function(t) {
                            var n, l, d;
                            if (o.getCurrentHub().getIntegration(e)) {
                                if (!c.navigator && !c.location && !c.document) return t;
                                var f = (null === (n = t.request) || void 0 === n ? void 0 : n.url) || (null === (l = c.location) || void 0 === l ? void 0 : l.href),
                                    v = (c.document || {}).referrer,
                                    h = (c.navigator || {}).userAgent,
                                    _ = r.__assign(r.__assign(r.__assign({}, null === (d = t.request) || void 0 === d ? void 0 : d.headers), v && {
                                        Referer: v
                                    }), h && {
                                        "User-Agent": h
                                    }),
                                    m = r.__assign(r.__assign({}, f && {
                                        url: f
                                    }), {
                                        headers: _
                                    });
                                return r.__assign(r.__assign({}, t), {
                                    request: m
                                })
                            }
                            return t
                        }))
                    }, e.id = "UserAgent", e
                }();
            t.UserAgent = l
        },
        770: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = function() {
                function e() {
                    this.name = e.id
                }
                return e.prototype.setupOnce = function(t, n) {
                    t((function(t) {
                        var r = n().getIntegration(e);
                        if (r) {
                            try {
                                if (r._shouldDropEvent(t, r._previousEvent)) return null
                            } catch (e) {
                                return r._previousEvent = t
                            }
                            return r._previousEvent = t
                        }
                        return t
                    }))
                }, e.prototype._shouldDropEvent = function(e, t) {
                    return !!t && (!!this._isSameMessageEvent(e, t) || !!this._isSameExceptionEvent(e, t))
                }, e.prototype._isSameMessageEvent = function(e, t) {
                    var n = e.message,
                        r = t.message;
                    return !(!n && !r) && (!(n && !r || !n && r) && (n === r && (!!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t))))
                }, e.prototype._getFramesFromEvent = function(e) {
                    var t = e.exception;
                    if (t) try {
                        return t.values[0].stacktrace.frames
                    } catch (e) {
                        return
                    } else if (e.stacktrace) return e.stacktrace.frames
                }, e.prototype._isSameStacktrace = function(e, t) {
                    var n = this._getFramesFromEvent(e),
                        r = this._getFramesFromEvent(t);
                    if (!n && !r) return !0;
                    if (n && !r || !n && r) return !1;
                    if (r.length !== n.length) return !1;
                    for (var i = 0; i < r.length; i++) {
                        var o = r[i],
                            c = n[i];
                        if (o.filename !== c.filename || o.lineno !== c.lineno || o.colno !== c.colno || o.function !== c.function) return !1
                    }
                    return !0
                }, e.prototype._getExceptionFromEvent = function(e) {
                    return e.exception && e.exception.values && e.exception.values[0]
                }, e.prototype._isSameExceptionEvent = function(e, t) {
                    var n = this._getExceptionFromEvent(t),
                        r = this._getExceptionFromEvent(e);
                    return !(!n || !r) && (n.type === r.type && n.value === r.value && (!!this._isSameFingerprint(e, t) && !!this._isSameStacktrace(e, t)))
                }, e.prototype._isSameFingerprint = function(e, t) {
                    var n = e.fingerprint,
                        r = t.fingerprint;
                    if (!n && !r) return !0;
                    if (n && !r || !n && r) return !1;
                    try {
                        return !(n.join("") !== r.join(""))
                    } catch (e) {
                        return !1
                    }
                }, e.id = "Dedupe", e
            }();
            t.Dedupe = n
        },
        771: function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = n(1),
                o = n(125),
                c = n(63),
                l = n(565),
                d = n(301),
                f = n(435);
            t.defaultIntegrations = [new o.Integrations.InboundFilters, new o.Integrations.FunctionToString, new f.TryCatch, new f.Breadcrumbs, new f.GlobalHandlers, new f.LinkedErrors, new f.Dedupe, new f.UserAgent], t.init = function(e) {
                if (void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = t.defaultIntegrations), void 0 === e.release) {
                    var n = c.getGlobalObject();
                    n.SENTRY_RELEASE && n.SENTRY_RELEASE.id && (e.release = n.SENTRY_RELEASE.id)
                }
                void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0), o.initAndBind(l.BrowserClient, e), e.autoSessionTracking && function() {
                    if (void 0 === c.getGlobalObject().document) return void c.logger.warn("Session tracking in non-browser environment with @sentry/browser is not supported.");
                    var e = o.getCurrentHub();
                    if ("function" != typeof e.startSession || "function" != typeof e.captureSession) return;
                    e.startSession({
                        ignoreDuration: !0
                    }), e.captureSession(), c.addInstrumentationHandler({
                        callback: function(t) {
                            var n = t.from,
                                r = t.to;
                            void 0 !== n && n !== r && (e.startSession({
                                ignoreDuration: !0
                            }), e.captureSession())
                        },
                        type: "history"
                    })
                }()
            }, t.showReportDialog = function(e) {
                void 0 === e && (e = {});
                var t = o.getCurrentHub(),
                    n = t.getScope();
                n && (e.user = r.__assign(r.__assign({}, n.getUser()), e.user)), e.eventId || (e.eventId = t.lastEventId());
                var c = t.getClient();
                c && c.showReportDialog(e)
            }, t.lastEventId = function() {
                return o.getCurrentHub().lastEventId()
            }, t.forceLoad = function() {}, t.onLoad = function(e) {
                e()
            }, t.flush = function(e) {
                var t = o.getCurrentHub().getClient();
                return t ? t.flush(e) : c.SyncPromise.reject(!1)
            }, t.close = function(e) {
                var t = o.getCurrentHub().getClient();
                return t ? t.close(e) : c.SyncPromise.reject(!1)
            }, t.wrap = function(e) {
                return d.wrap(e)()
            }
        },
        772: function(e, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SDK_NAME = "sentry.javascript.browser"
        }
    }
]);