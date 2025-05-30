/*! For license information please see LICENSES */ ! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "361d8655-c534-4888-80be-fe504ea2b882", e._sentryDebugIdIdentifier = "sentry-dbid-361d8655-c534-4888-80be-fe504ea2b882")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [79], {
        538: function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", (function() {
                    return Os
                })), n.d(t, "b", (function() {
                    return js
                })), n.d(t, "c", (function() {
                    return zs
                })), n.d(t, "d", (function() {
                    return qs
                })), n.d(t, "e", (function() {
                    return xs
                })), n.d(t, "f", (function() {
                    return Rs
                }));
                var r = n(165),
                    o = n(223),
                    l = n(0),
                    h = n(247);
                const c = "@firebase/database",
                    d = "0.13.5";
                let _ = "";
                class f {
                    constructor(e) {
                        this.domStorage_ = e, this.prefix_ = "firebase:"
                    }
                    set(e, t) {
                        null == t ? this.domStorage_.removeItem(this.prefixedName_(e)) : this.domStorage_.setItem(this.prefixedName_(e), Object(l.C)(t))
                    }
                    get(e) {
                        const t = this.domStorage_.getItem(this.prefixedName_(e));
                        return null == t ? null : Object(l.w)(t)
                    }
                    remove(e) {
                        this.domStorage_.removeItem(this.prefixedName_(e))
                    }
                    prefixedName_(e) {
                        return this.prefix_ + e
                    }
                    toString() {
                        return this.domStorage_.toString()
                    }
                }
                class m {
                    constructor() {
                        this.cache_ = {}, this.isInMemoryStorage = !0
                    }
                    set(e, t) {
                        null == t ? delete this.cache_[e] : this.cache_[e] = t
                    }
                    get(e) {
                        return Object(l.j)(this.cache_, e) ? this.cache_[e] : null
                    }
                    remove(e) {
                        delete this.cache_[e]
                    }
                }
                const y = function(e) {
                        try {
                            if ("undefined" != typeof window && void 0 !== window[e]) {
                                const t = window[e];
                                return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new f(t)
                            }
                        } catch (e) {}
                        return new m
                    },
                    v = y("localStorage"),
                    C = y("sessionStorage"),
                    w = new h.b("@firebase/database"),
                    T = function() {
                        let e = 1;
                        return function() {
                            return e++
                        }
                    }(),
                    I = function(e) {
                        const t = Object(l.B)(e),
                            n = new l.d;
                        n.update(t);
                        const r = n.digest();
                        return l.g.encodeByteArray(r)
                    },
                    k = function(...e) {
                        let t = "";
                        for (let i = 0; i < e.length; i++) {
                            const n = e[i];
                            Array.isArray(n) || n && "object" == typeof n && "number" == typeof n.length ? t += k.apply(null, n) : t += "object" == typeof n ? Object(l.C)(n) : n, t += " "
                        }
                        return t
                    };
                let E = null,
                    N = !0;
                const S = function(e, t) {
                        Object(l.e)(!t || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? (w.logLevel = h.a.VERBOSE, E = w.log.bind(w), t && C.set("logging_enabled", !0)) : "function" == typeof e ? E = e : (E = null, C.remove("logging_enabled"))
                    },
                    P = function(...e) {
                        if (!0 === N && (N = !1, null === E && !0 === C.get("logging_enabled") && S(!0)), E) {
                            const t = k.apply(null, e);
                            E(t)
                        }
                    },
                    x = function(e) {
                        return function(...t) {
                            P(e, ...t)
                        }
                    },
                    O = function(...e) {
                        const t = "FIREBASE INTERNAL ERROR: " + k(...e);
                        w.error(t)
                    },
                    R = function(...e) {
                        const t = `FIREBASE FATAL ERROR: ${k(...e)}`;
                        throw w.error(t), new Error(t)
                    },
                    j = function(...e) {
                        const t = "FIREBASE WARNING: " + k(...e);
                        w.warn(t)
                    },
                    D = function(data) {
                        return "number" == typeof data && (data != data || data === Number.POSITIVE_INFINITY || data === Number.NEGATIVE_INFINITY)
                    },
                    M = "[MIN_NAME]",
                    F = "[MAX_NAME]",
                    L = function(a, b) {
                        if (a === b) return 0;
                        if (a === M || b === F) return -1;
                        if (b === M || a === F) return 1; {
                            const e = G(a),
                                t = G(b);
                            return null !== e ? null !== t ? e - t == 0 ? a.length - b.length : e - t : -1 : null !== t ? 1 : a < b ? -1 : 1
                        }
                    },
                    A = function(a, b) {
                        return a === b ? 0 : a < b ? -1 : 1
                    },
                    W = function(e, t) {
                        if (t && e in t) return t[e];
                        throw new Error("Missing required key (" + e + ") in object: " + Object(l.C)(t))
                    },
                    U = function(e) {
                        if ("object" != typeof e || null === e) return Object(l.C)(e);
                        const t = [];
                        for (const n in e) t.push(n);
                        t.sort();
                        let n = "{";
                        for (let i = 0; i < t.length; i++) 0 !== i && (n += ","), n += Object(l.C)(t[i]), n += ":", n += U(e[t[i]]);
                        return n += "}", n
                    },
                    z = function(e, t) {
                        const n = e.length;
                        if (n <= t) return [e];
                        const r = [];
                        for (let o = 0; o < n; o += t) o + t > n ? r.push(e.substring(o, n)) : r.push(e.substring(o, o + t));
                        return r
                    };

                function H(e, t) {
                    for (const n in e) e.hasOwnProperty(n) && t(n, e[n])
                }
                const Y = function(e) {
                    Object(l.e)(!D(e), "Invalid JSON number");
                    const t = 1023;
                    let s, n, r, o, i;
                    0 === e ? (n = 0, r = 0, s = 1 / e == -1 / 0 ? 1 : 0) : (s = e < 0, (e = Math.abs(e)) >= Math.pow(2, -1022) ? (o = Math.min(Math.floor(Math.log(e) / Math.LN2), t), n = o + t, r = Math.round(e * Math.pow(2, 52 - o) - Math.pow(2, 52))) : (n = 0, r = Math.round(e / Math.pow(2, -1074))));
                    const h = [];
                    for (i = 52; i; i -= 1) h.push(r % 2 ? 1 : 0), r = Math.floor(r / 2);
                    for (i = 11; i; i -= 1) h.push(n % 2 ? 1 : 0), n = Math.floor(n / 2);
                    h.push(s ? 1 : 0), h.reverse();
                    const c = h.join("");
                    let d = "";
                    for (i = 0; i < 64; i += 8) {
                        let e = parseInt(c.substr(i, 8), 2).toString(16);
                        1 === e.length && (e = "0" + e), d += e
                    }
                    return d.toLowerCase()
                };
                const V = new RegExp("^-?(0*)\\d{1,10}$"),
                    B = -2147483648,
                    K = 2147483647,
                    G = function(e) {
                        if (V.test(e)) {
                            const t = Number(e);
                            if (t >= B && t <= K) return t
                        }
                        return null
                    },
                    Q = function(e) {
                        try {
                            e()
                        } catch (e) {
                            setTimeout((() => {
                                const t = e.stack || "";
                                throw j("Exception was thrown by user callback.", t), e
                            }), Math.floor(0))
                        }
                    },
                    $ = function(e, time) {
                        const t = setTimeout(e, time);
                        return "object" == typeof t && t.unref && t.unref(), t
                    };
                class X {
                    constructor(e, t) {
                        this.appName_ = e, this.appCheckProvider = t, this.appCheck = null == t ? void 0 : t.getImmediate({
                            optional: !0
                        }), this.appCheck || null == t || t.get().then((e => this.appCheck = e))
                    }
                    getToken(e) {
                        return this.appCheck ? this.appCheck.getToken(e) : new Promise(((t, n) => {
                            setTimeout((() => {
                                this.appCheck ? this.getToken(e).then(t, n) : t(null)
                            }), 0)
                        }))
                    }
                    addTokenChangeListener(e) {
                        var t;
                        null === (t = this.appCheckProvider) || void 0 === t || t.get().then((t => t.addTokenListener(e)))
                    }
                    notifyForInvalidToken() {
                        j(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)
                    }
                }
                class J {
                    constructor(e, t, n) {
                        this.appName_ = e, this.firebaseOptions_ = t, this.authProvider_ = n, this.auth_ = null, this.auth_ = n.getImmediate({
                            optional: !0
                        }), this.auth_ || n.onInit((e => this.auth_ = e))
                    }
                    getToken(e) {
                        return this.auth_ ? this.auth_.getToken(e).catch((e => e && "auth/token-not-initialized" === e.code ? (P("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e))) : new Promise(((t, n) => {
                            setTimeout((() => {
                                this.auth_ ? this.getToken(e).then(t, n) : t(null)
                            }), 0)
                        }))
                    }
                    addTokenChangeListener(e) {
                        this.auth_ ? this.auth_.addAuthTokenListener(e) : this.authProvider_.get().then((t => t.addAuthTokenListener(e)))
                    }
                    removeTokenChangeListener(e) {
                        this.authProvider_.get().then((t => t.removeAuthTokenListener(e)))
                    }
                    notifyForInvalidToken() {
                        let e = 'Provided authentication credentials for the app named "' + this.appName_ + '" are invalid. This usually indicates your app was not initialized correctly. ';
                        "credential" in this.firebaseOptions_ ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.firebaseOptions_ ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', j(e)
                    }
                }
                class Z {
                    constructor(e) {
                        this.accessToken = e
                    }
                    getToken(e) {
                        return Promise.resolve({
                            accessToken: this.accessToken
                        })
                    }
                    addTokenChangeListener(e) {
                        e(this.accessToken)
                    }
                    removeTokenChangeListener(e) {}
                    notifyForInvalidToken() {}
                }
                Z.OWNER = "owner";
                const ee = "5",
                    te = /(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,
                    ne = "websocket",
                    ie = "long_polling";
                class se {
                    constructor(e, t, n, r, o = !1, l = "", h = !1) {
                        this.secure = t, this.namespace = n, this.webSocketOnly = r, this.nodeAdmin = o, this.persistenceKey = l, this.includeNamespaceInQueryParams = h, this._host = e.toLowerCase(), this._domain = this._host.substr(this._host.indexOf(".") + 1), this.internalHost = v.get("host:" + e) || this._host
                    }
                    isCacheableHost() {
                        return "s-" === this.internalHost.substr(0, 2)
                    }
                    isCustomHost() {
                        return "firebaseio.com" !== this._domain && "firebaseio-demo.com" !== this._domain
                    }
                    get host() {
                        return this._host
                    }
                    set host(e) {
                        e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && v.set("host:" + this._host, this.internalHost))
                    }
                    toString() {
                        let e = this.toURLString();
                        return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
                    }
                    toURLString() {
                        const e = this.secure ? "https://" : "http://",
                            t = this.includeNamespaceInQueryParams ? `?ns=${this.namespace}` : "";
                        return `${e}${this.host}/${t}`
                    }
                }

                function re(e, t, n) {
                    let r;
                    if (Object(l.e)("string" == typeof t, "typeof type must == string"), Object(l.e)("object" == typeof n, "typeof params must == object"), t === ne) r = (e.secure ? "wss://" : "ws://") + e.internalHost + "/.ws?";
                    else {
                        if (t !== ie) throw new Error("Unknown connection type: " + t);
                        r = (e.secure ? "https://" : "http://") + e.internalHost + "/.lp?"
                    }(function(e) {
                        return e.host !== e.internalHost || e.isCustomHost() || e.includeNamespaceInQueryParams
                    })(e) && (n.ns = e.namespace);
                    const o = [];
                    return H(n, ((e, t) => {
                        o.push(e + "=" + t)
                    })), r + o.join("&")
                }
                class oe {
                    constructor() {
                        this.counters_ = {}
                    }
                    incrementCounter(e, t = 1) {
                        Object(l.j)(this.counters_, e) || (this.counters_[e] = 0), this.counters_[e] += t
                    }
                    get() {
                        return Object(l.l)(this.counters_)
                    }
                }
                const ae = {},
                    le = {};

                function he(e) {
                    const t = e.toString();
                    return ae[t] || (ae[t] = new oe), ae[t]
                }
                class ce {
                    constructor(e) {
                        this.onMessage_ = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
                    }
                    closeAfter(e, t) {
                        this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
                    }
                    handleResponse(e, data) {
                        for (this.pendingResponses[e] = data; this.pendingResponses[this.currentResponseNum];) {
                            const e = this.pendingResponses[this.currentResponseNum];
                            delete this.pendingResponses[this.currentResponseNum];
                            for (let i = 0; i < e.length; ++i) e[i] && Q((() => {
                                this.onMessage_(e[i])
                            }));
                            if (this.currentResponseNum === this.closeAfterResponse) {
                                this.onClose && (this.onClose(), this.onClose = null);
                                break
                            }
                            this.currentResponseNum++
                        }
                    }
                }
                const ue = "start";
                class de {
                    constructor(e, t, n, r, o, l, h) {
                        this.connId = e, this.repoInfo = t, this.applicationId = n, this.appCheckToken = r, this.authToken = o, this.transportSessionId = l, this.lastSessionId = h, this.bytesSent = 0, this.bytesReceived = 0, this.everConnected_ = !1, this.log_ = x(e), this.stats_ = he(t), this.urlFn = e => (this.appCheckToken && (e.ac = this.appCheckToken), re(t, ie, e))
                    }
                    open(e, t) {
                        this.curSegmentNum = 0, this.onDisconnect_ = t, this.myPacketOrderer = new ce(e), this.isClosed_ = !1, this.connectTimeoutTimer_ = setTimeout((() => {
                                this.log_("Timed out trying to connect."), this.onClosed_(), this.connectTimeoutTimer_ = null
                            }), Math.floor(3e4)),
                            function(e) {
                                if (Object(l.t)() || "complete" === document.readyState) e();
                                else {
                                    let t = !1;
                                    const n = function() {
                                        document.body ? t || (t = !0, e()) : setTimeout(n, Math.floor(10))
                                    };
                                    document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", (() => {
                                        "complete" === document.readyState && n()
                                    })), window.attachEvent("onload", n))
                                }
                            }((() => {
                                if (this.isClosed_) return;
                                this.scriptTagHolder = new _e(((...e) => {
                                    const [t, n, r, o, l] = e;
                                    if (this.incrementIncomingBytes_(e), this.scriptTagHolder)
                                        if (this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null), this.everConnected_ = !0, t === ue) this.id = n, this.password = r;
                                        else {
                                            if ("close" !== t) throw new Error("Unrecognized command received: " + t);
                                            n ? (this.scriptTagHolder.sendNewPolls = !1, this.myPacketOrderer.closeAfter(n, (() => {
                                                this.onClosed_()
                                            }))) : this.onClosed_()
                                        }
                                }), ((...e) => {
                                    const [t, data] = e;
                                    this.incrementIncomingBytes_(e), this.myPacketOrderer.handleResponse(t, data)
                                }), (() => {
                                    this.onClosed_()
                                }), this.urlFn);
                                const e = {
                                    start: "t"
                                };
                                e.ser = Math.floor(1e8 * Math.random()), this.scriptTagHolder.uniqueCallbackIdentifier && (e.cb = this.scriptTagHolder.uniqueCallbackIdentifier), e.v = ee, this.transportSessionId && (e.s = this.transportSessionId), this.lastSessionId && (e.ls = this.lastSessionId), this.applicationId && (e.p = this.applicationId), this.appCheckToken && (e.ac = this.appCheckToken), "undefined" != typeof location && location.hostname && te.test(location.hostname) && (e.r = "f");
                                const t = this.urlFn(e);
                                this.log_("Connecting via long-poll to " + t), this.scriptTagHolder.addTag(t, (() => {}))
                            }))
                    }
                    start() {
                        this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
                    }
                    static forceAllow() {
                        de.forceAllow_ = !0
                    }
                    static forceDisallow() {
                        de.forceDisallow_ = !0
                    }
                    static isAvailable() {
                        return !Object(l.t)() && (!!de.forceAllow_ || !(de.forceDisallow_ || "undefined" == typeof document || null == document.createElement || "object" == typeof window && window.chrome && window.chrome.extension && !/^chrome/.test(window.location.href) || "object" == typeof Windows && "object" == typeof Windows.UI))
                    }
                    markConnectionHealthy() {}
                    shutdown_() {
                        this.isClosed_ = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.connectTimeoutTimer_ && (clearTimeout(this.connectTimeoutTimer_), this.connectTimeoutTimer_ = null)
                    }
                    onClosed_() {
                        this.isClosed_ || (this.log_("Longpoll is closing itself"), this.shutdown_(), this.onDisconnect_ && (this.onDisconnect_(this.everConnected_), this.onDisconnect_ = null))
                    }
                    close() {
                        this.isClosed_ || (this.log_("Longpoll is being closed."), this.shutdown_())
                    }
                    send(data) {
                        const e = Object(l.C)(data);
                        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                        const t = Object(l.h)(e),
                            n = z(t, 1840);
                        for (let i = 0; i < n.length; i++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, n.length, n[i]), this.curSegmentNum++
                    }
                    addDisconnectPingFrame(e, t) {
                        if (Object(l.t)()) return;
                        this.myDisconnFrame = document.createElement("iframe");
                        const n = {
                            dframe: "t"
                        };
                        n.id = e, n.pw = t, this.myDisconnFrame.src = this.urlFn(n), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
                    }
                    incrementIncomingBytes_(e) {
                        const t = Object(l.C)(e).length;
                        this.bytesReceived += t, this.stats_.incrementCounter("bytes_received", t)
                    }
                }
                class _e {
                    constructor(e, t, n, r) {
                        if (this.onDisconnect = n, this.urlFn = r, this.outstandingRequests = new Set, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, Object(l.t)()) this.commandCB = e, this.onMessageCB = t;
                        else {
                            this.uniqueCallbackIdentifier = T(), window["pLPCommand" + this.uniqueCallbackIdentifier] = e, window["pRTLPCB" + this.uniqueCallbackIdentifier] = t, this.myIFrame = _e.createIFrame_();
                            let script = "";
                            if (this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, "javascript:".length)) {
                                script = '<script>document.domain="' + document.domain + '";<\/script>'
                            }
                            const n = "<html><body>" + script + "</body></html>";
                            try {
                                this.myIFrame.doc.open(), this.myIFrame.doc.write(n), this.myIFrame.doc.close()
                            } catch (e) {
                                P("frame writing exception"), e.stack && P(e.stack), P(e)
                            }
                        }
                    }
                    static createIFrame_() {
                        const iframe = document.createElement("iframe");
                        if (iframe.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                        document.body.appendChild(iframe);
                        try {
                            iframe.contentWindow.document || P("No IE domain setting required")
                        } catch (e) {
                            const t = document.domain;
                            iframe.src = "javascript:void((function(){document.open();document.domain='" + t + "';document.close();})())"
                        }
                        return iframe.contentDocument ? iframe.doc = iframe.contentDocument : iframe.contentWindow ? iframe.doc = iframe.contentWindow.document : iframe.document && (iframe.doc = iframe.document), iframe
                    }
                    close() {
                        this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout((() => {
                            null !== this.myIFrame && (document.body.removeChild(this.myIFrame), this.myIFrame = null)
                        }), Math.floor(0)));
                        const e = this.onDisconnect;
                        e && (this.onDisconnect = null, e())
                    }
                    startLongPoll(e, t) {
                        for (this.myID = e, this.myPW = t, this.alive = !0; this.newRequest_(););
                    }
                    newRequest_() {
                        if (this.alive && this.sendNewPolls && this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
                            this.currentSerial++;
                            const e = {};
                            e.id = this.myID, e.pw = this.myPW, e.ser = this.currentSerial;
                            let t = this.urlFn(e),
                                n = "",
                                i = 0;
                            for (; this.pendingSegs.length > 0;) {
                                if (!(this.pendingSegs[0].d.length + 30 + n.length <= 1870)) break; {
                                    const e = this.pendingSegs.shift();
                                    n = n + "&seg" + i + "=" + e.seg + "&ts" + i + "=" + e.ts + "&d" + i + "=" + e.d, i++
                                }
                            }
                            return t += n, this.addLongPollTag_(t, this.currentSerial), !0
                        }
                        return !1
                    }
                    enqueueSegment(e, t, data) {
                        this.pendingSegs.push({
                            seg: e,
                            ts: t,
                            d: data
                        }), this.alive && this.newRequest_()
                    }
                    addLongPollTag_(e, t) {
                        this.outstandingRequests.add(t);
                        const n = () => {
                                this.outstandingRequests.delete(t), this.newRequest_()
                            },
                            r = setTimeout(n, Math.floor(25e3));
                        this.addTag(e, (() => {
                            clearTimeout(r), n()
                        }))
                    }
                    addTag(e, t) {
                        Object(l.t)() ? this.doNodeLongPoll(e, t) : setTimeout((() => {
                            try {
                                if (!this.sendNewPolls) return;
                                const n = this.myIFrame.doc.createElement("script");
                                n.type = "text/javascript", n.async = !0, n.src = e, n.onload = n.onreadystatechange = function() {
                                    const e = n.readyState;
                                    e && "loaded" !== e && "complete" !== e || (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), t())
                                }, n.onerror = () => {
                                    P("Long-poll script failed to load: " + e), this.sendNewPolls = !1, this.close()
                                }, this.myIFrame.doc.body.appendChild(n)
                            } catch (e) {}
                        }), Math.floor(1))
                    }
                }
                let pe = null;
                "undefined" != typeof MozWebSocket ? pe = MozWebSocket : "undefined" != typeof WebSocket && (pe = WebSocket);
                class fe {
                    constructor(e, t, n, r, o, l, h) {
                        this.connId = e, this.applicationId = n, this.appCheckToken = r, this.authToken = o, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.log_ = x(this.connId), this.stats_ = he(t), this.connURL = fe.connectionURL_(t, l, h, r, n), this.nodeAdmin = t.nodeAdmin
                    }
                    static connectionURL_(e, t, n, r, o) {
                        const h = {};
                        return h.v = ee, !Object(l.t)() && "undefined" != typeof location && location.hostname && te.test(location.hostname) && (h.r = "f"), t && (h.s = t), n && (h.ls = n), r && (h.ac = r), o && (h.p = o), re(e, ne, h)
                    }
                    open(t, n) {
                        this.onDisconnect = n, this.onMessage = t, this.log_("Websocket connecting to " + this.connURL), this.everConnected_ = !1, v.set("previous_websocket_failure", !0);
                        try {
                            let t;
                            if (Object(l.t)()) {
                                const n = this.nodeAdmin ? "AdminNode" : "Node";
                                t = {
                                    headers: {
                                        "User-Agent": `Firebase/5/${_}/${e.platform}/${n}`,
                                        "X-Firebase-GMPID": this.applicationId || ""
                                    }
                                }, this.authToken && (t.headers.Authorization = `Bearer ${this.authToken}`), this.appCheckToken && (t.headers["X-Firebase-AppCheck"] = this.appCheckToken);
                                const r = e.env,
                                    o = 0 === this.connURL.indexOf("wss://") ? r.HTTPS_PROXY || r.https_proxy : r.HTTP_PROXY || r.http_proxy;
                                o && (t.proxy = {
                                    origin: o
                                })
                            }
                            this.mySock = new pe(this.connURL, [], t)
                        } catch (e) {
                            this.log_("Error instantiating WebSocket.");
                            const t = e.message || e.data;
                            return t && this.log_(t), void this.onClosed_()
                        }
                        this.mySock.onopen = () => {
                            this.log_("Websocket connected."), this.everConnected_ = !0
                        }, this.mySock.onclose = () => {
                            this.log_("Websocket connection was disconnected."), this.mySock = null, this.onClosed_()
                        }, this.mySock.onmessage = e => {
                            this.handleIncomingFrame(e)
                        }, this.mySock.onerror = e => {
                            this.log_("WebSocket error.  Closing connection.");
                            const t = e.message || e.data;
                            t && this.log_(t), this.onClosed_()
                        }
                    }
                    start() {}
                    static forceDisallow() {
                        fe.forceDisallow_ = !0
                    }
                    static isAvailable() {
                        let e = !1;
                        if ("undefined" != typeof navigator && navigator.userAgent) {
                            const t = /Android ([0-9]{0,}\.[0-9]{0,})/,
                                n = navigator.userAgent.match(t);
                            n && n.length > 1 && parseFloat(n[1]) < 4.4 && (e = !0)
                        }
                        return !e && null !== pe && !fe.forceDisallow_
                    }
                    static previouslyFailed() {
                        return v.isInMemoryStorage || !0 === v.get("previous_websocket_failure")
                    }
                    markConnectionHealthy() {
                        v.remove("previous_websocket_failure")
                    }
                    appendFrame_(data) {
                        if (this.frames.push(data), this.frames.length === this.totalFrames) {
                            const e = this.frames.join("");
                            this.frames = null;
                            const t = Object(l.w)(e);
                            this.onMessage(t)
                        }
                    }
                    handleNewFrameCount_(e) {
                        this.totalFrames = e, this.frames = []
                    }
                    extractFrameCount_(data) {
                        if (Object(l.e)(null === this.frames, "We already have a frame buffer"), data.length <= 6) {
                            const e = Number(data);
                            if (!isNaN(e)) return this.handleNewFrameCount_(e), null
                        }
                        return this.handleNewFrameCount_(1), data
                    }
                    handleIncomingFrame(e) {
                        if (null === this.mySock) return;
                        const data = e.data;
                        if (this.bytesReceived += data.length, this.stats_.incrementCounter("bytes_received", data.length), this.resetKeepAlive(), null !== this.frames) this.appendFrame_(data);
                        else {
                            const e = this.extractFrameCount_(data);
                            null !== e && this.appendFrame_(e)
                        }
                    }
                    send(data) {
                        this.resetKeepAlive();
                        const e = Object(l.C)(data);
                        this.bytesSent += e.length, this.stats_.incrementCounter("bytes_sent", e.length);
                        const t = z(e, 16384);
                        t.length > 1 && this.sendString_(String(t.length));
                        for (let i = 0; i < t.length; i++) this.sendString_(t[i])
                    }
                    shutdown_() {
                        this.isClosed_ = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
                    }
                    onClosed_() {
                        this.isClosed_ || (this.log_("WebSocket is closing itself"), this.shutdown_(), this.onDisconnect && (this.onDisconnect(this.everConnected_), this.onDisconnect = null))
                    }
                    close() {
                        this.isClosed_ || (this.log_("WebSocket is being closed"), this.shutdown_())
                    }
                    resetKeepAlive() {
                        clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval((() => {
                            this.mySock && this.sendString_("0"), this.resetKeepAlive()
                        }), Math.floor(45e3))
                    }
                    sendString_(e) {
                        try {
                            this.mySock.send(e)
                        } catch (e) {
                            this.log_("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.onClosed_.bind(this), 0)
                        }
                    }
                }
                fe.responsesRequiredToBeHealthy = 2, fe.healthyTimeout = 3e4;
                class ge {
                    constructor(e) {
                        this.initTransports_(e)
                    }
                    static get ALL_TRANSPORTS() {
                        return [de, fe]
                    }
                    static get IS_TRANSPORT_INITIALIZED() {
                        return this.globalTransportInitialized_
                    }
                    initTransports_(e) {
                        const t = fe && fe.isAvailable();
                        let n = t && !fe.previouslyFailed();
                        if (e.webSocketOnly && (t || j("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), n = !0), n) this.transports_ = [fe];
                        else {
                            const e = this.transports_ = [];
                            for (const t of ge.ALL_TRANSPORTS) t && t.isAvailable() && e.push(t);
                            ge.globalTransportInitialized_ = !0
                        }
                    }
                    initialTransport() {
                        if (this.transports_.length > 0) return this.transports_[0];
                        throw new Error("No transports available")
                    }
                    upgradeTransport() {
                        return this.transports_.length > 1 ? this.transports_[1] : null
                    }
                }
                ge.globalTransportInitialized_ = !1;
                class me {
                    constructor(e, t, n, r, o, l, h, c, d, _) {
                        this.id = e, this.repoInfo_ = t, this.applicationId_ = n, this.appCheckToken_ = r, this.authToken_ = o, this.onMessage_ = l, this.onReady_ = h, this.onDisconnect_ = c, this.onKill_ = d, this.lastSessionId = _, this.connectionCount = 0, this.pendingDataMessages = [], this.state_ = 0, this.log_ = x("c:" + this.id + ":"), this.transportManager_ = new ge(t), this.log_("Connection created"), this.start_()
                    }
                    start_() {
                        const e = this.transportManager_.initialTransport();
                        this.conn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, null, this.lastSessionId), this.primaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                        const t = this.connReceiver_(this.conn_),
                            n = this.disconnReceiver_(this.conn_);
                        this.tx_ = this.conn_, this.rx_ = this.conn_, this.secondaryConn_ = null, this.isHealthy_ = !1, setTimeout((() => {
                            this.conn_ && this.conn_.open(t, n)
                        }), Math.floor(0));
                        const r = e.healthyTimeout || 0;
                        r > 0 && (this.healthyTimeout_ = $((() => {
                            this.healthyTimeout_ = null, this.isHealthy_ || (this.conn_ && this.conn_.bytesReceived > 102400 ? (this.log_("Connection exceeded healthy timeout but has received " + this.conn_.bytesReceived + " bytes.  Marking connection healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()) : this.conn_ && this.conn_.bytesSent > 10240 ? this.log_("Connection exceeded healthy timeout but has sent " + this.conn_.bytesSent + " bytes.  Leaving connection alive.") : (this.log_("Closing unhealthy connection after timeout."), this.close()))
                        }), Math.floor(r)))
                    }
                    nextTransportId_() {
                        return "c:" + this.id + ":" + this.connectionCount++
                    }
                    disconnReceiver_(e) {
                        return t => {
                            e === this.conn_ ? this.onConnectionLost_(t) : e === this.secondaryConn_ ? (this.log_("Secondary connection lost."), this.onSecondaryConnectionLost_()) : this.log_("closing an old connection")
                        }
                    }
                    connReceiver_(e) {
                        return t => {
                            2 !== this.state_ && (e === this.rx_ ? this.onPrimaryMessageReceived_(t) : e === this.secondaryConn_ ? this.onSecondaryMessageReceived_(t) : this.log_("message on old connection"))
                        }
                    }
                    sendRequest(e) {
                        const t = {
                            t: "d",
                            d: e
                        };
                        this.sendData_(t)
                    }
                    tryCleanupConnection() {
                        this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_ && (this.log_("cleaning up and promoting a connection: " + this.secondaryConn_.connId), this.conn_ = this.secondaryConn_, this.secondaryConn_ = null)
                    }
                    onSecondaryControl_(e) {
                        if ("t" in e) {
                            const t = e.t;
                            "a" === t ? this.upgradeIfSecondaryHealthy_() : "r" === t ? (this.log_("Got a reset on secondary, closing it"), this.secondaryConn_.close(), this.tx_ !== this.secondaryConn_ && this.rx_ !== this.secondaryConn_ || this.close()) : "o" === t && (this.log_("got pong on secondary."), this.secondaryResponsesRequired_--, this.upgradeIfSecondaryHealthy_())
                        }
                    }
                    onSecondaryMessageReceived_(e) {
                        const t = W("t", e),
                            data = W("d", e);
                        if ("c" === t) this.onSecondaryControl_(data);
                        else {
                            if ("d" !== t) throw new Error("Unknown protocol layer: " + t);
                            this.pendingDataMessages.push(data)
                        }
                    }
                    upgradeIfSecondaryHealthy_() {
                        this.secondaryResponsesRequired_ <= 0 ? (this.log_("Secondary connection is healthy."), this.isHealthy_ = !0, this.secondaryConn_.markConnectionHealthy(), this.proceedWithUpgrade_()) : (this.log_("sending ping on secondary."), this.secondaryConn_.send({
                            t: "c",
                            d: {
                                t: "p",
                                d: {}
                            }
                        }))
                    }
                    proceedWithUpgrade_() {
                        this.secondaryConn_.start(), this.log_("sending client ack on secondary"), this.secondaryConn_.send({
                            t: "c",
                            d: {
                                t: "a",
                                d: {}
                            }
                        }), this.log_("Ending transmission on primary"), this.conn_.send({
                            t: "c",
                            d: {
                                t: "n",
                                d: {}
                            }
                        }), this.tx_ = this.secondaryConn_, this.tryCleanupConnection()
                    }
                    onPrimaryMessageReceived_(e) {
                        const t = W("t", e),
                            data = W("d", e);
                        "c" === t ? this.onControl_(data) : "d" === t && this.onDataMessage_(data)
                    }
                    onDataMessage_(e) {
                        this.onPrimaryResponse_(), this.onMessage_(e)
                    }
                    onPrimaryResponse_() {
                        this.isHealthy_ || (this.primaryResponsesRequired_--, this.primaryResponsesRequired_ <= 0 && (this.log_("Primary connection is healthy."), this.isHealthy_ = !0, this.conn_.markConnectionHealthy()))
                    }
                    onControl_(e) {
                        const t = W("t", e);
                        if ("d" in e) {
                            const n = e.d;
                            if ("h" === t) this.onHandshake_(n);
                            else if ("n" === t) {
                                this.log_("recvd end transmission on primary"), this.rx_ = this.secondaryConn_;
                                for (let i = 0; i < this.pendingDataMessages.length; ++i) this.onDataMessage_(this.pendingDataMessages[i]);
                                this.pendingDataMessages = [], this.tryCleanupConnection()
                            } else "s" === t ? this.onConnectionShutdown_(n) : "r" === t ? this.onReset_(n) : "e" === t ? O("Server Error: " + n) : "o" === t ? (this.log_("got pong on primary."), this.onPrimaryResponse_(), this.sendPingOnPrimaryIfNecessary_()) : O("Unknown control packet command: " + t)
                        }
                    }
                    onHandshake_(e) {
                        const t = e.ts,
                            n = e.v,
                            r = e.h;
                        this.sessionId = e.s, this.repoInfo_.host = r, 0 === this.state_ && (this.conn_.start(), this.onConnectionEstablished_(this.conn_, t), ee !== n && j("Protocol version mismatch detected"), this.tryStartUpgrade_())
                    }
                    tryStartUpgrade_() {
                        const e = this.transportManager_.upgradeTransport();
                        e && this.startUpgrade_(e)
                    }
                    startUpgrade_(e) {
                        this.secondaryConn_ = new e(this.nextTransportId_(), this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, this.sessionId), this.secondaryResponsesRequired_ = e.responsesRequiredToBeHealthy || 0;
                        const t = this.connReceiver_(this.secondaryConn_),
                            n = this.disconnReceiver_(this.secondaryConn_);
                        this.secondaryConn_.open(t, n), $((() => {
                            this.secondaryConn_ && (this.log_("Timed out trying to upgrade."), this.secondaryConn_.close())
                        }), Math.floor(6e4))
                    }
                    onReset_(e) {
                        this.log_("Reset packet received.  New host: " + e), this.repoInfo_.host = e, 1 === this.state_ ? this.close() : (this.closeConnections_(), this.start_())
                    }
                    onConnectionEstablished_(e, t) {
                        this.log_("Realtime connection established."), this.conn_ = e, this.state_ = 1, this.onReady_ && (this.onReady_(t, this.sessionId), this.onReady_ = null), 0 === this.primaryResponsesRequired_ ? (this.log_("Primary connection is healthy."), this.isHealthy_ = !0) : $((() => {
                            this.sendPingOnPrimaryIfNecessary_()
                        }), Math.floor(5e3))
                    }
                    sendPingOnPrimaryIfNecessary_() {
                        this.isHealthy_ || 1 !== this.state_ || (this.log_("sending ping on primary."), this.sendData_({
                            t: "c",
                            d: {
                                t: "p",
                                d: {}
                            }
                        }))
                    }
                    onSecondaryConnectionLost_() {
                        const e = this.secondaryConn_;
                        this.secondaryConn_ = null, this.tx_ !== e && this.rx_ !== e || this.close()
                    }
                    onConnectionLost_(e) {
                        this.conn_ = null, e || 0 !== this.state_ ? 1 === this.state_ && this.log_("Realtime connection lost.") : (this.log_("Realtime connection failed."), this.repoInfo_.isCacheableHost() && (v.remove("host:" + this.repoInfo_.host), this.repoInfo_.internalHost = this.repoInfo_.host)), this.close()
                    }
                    onConnectionShutdown_(e) {
                        this.log_("Connection shutdown command received. Shutting down..."), this.onKill_ && (this.onKill_(e), this.onKill_ = null), this.onDisconnect_ = null, this.close()
                    }
                    sendData_(data) {
                        if (1 !== this.state_) throw "Connection is not connected";
                        this.tx_.send(data)
                    }
                    close() {
                        2 !== this.state_ && (this.log_("Closing realtime connection."), this.state_ = 2, this.closeConnections_(), this.onDisconnect_ && (this.onDisconnect_(), this.onDisconnect_ = null))
                    }
                    closeConnections_() {
                        this.log_("Shutting down all connections"), this.conn_ && (this.conn_.close(), this.conn_ = null), this.secondaryConn_ && (this.secondaryConn_.close(), this.secondaryConn_ = null), this.healthyTimeout_ && (clearTimeout(this.healthyTimeout_), this.healthyTimeout_ = null)
                    }
                }
                class ye {
                    put(e, data, t, n) {}
                    merge(e, data, t, n) {}
                    refreshAuthToken(e) {}
                    refreshAppCheckToken(e) {}
                    onDisconnectPut(e, data, t) {}
                    onDisconnectMerge(e, data, t) {}
                    onDisconnectCancel(e, t) {}
                    reportStats(e) {}
                }
                class ve {
                    constructor(e) {
                        this.allowedEvents_ = e, this.listeners_ = {}, Object(l.e)(Array.isArray(e) && e.length > 0, "Requires a non-empty array")
                    }
                    trigger(e, ...t) {
                        if (Array.isArray(this.listeners_[e])) {
                            const n = [...this.listeners_[e]];
                            for (let i = 0; i < n.length; i++) n[i].callback.apply(n[i].context, t)
                        }
                    }
                    on(e, t, n) {
                        this.validateEventType_(e), this.listeners_[e] = this.listeners_[e] || [], this.listeners_[e].push({
                            callback: t,
                            context: n
                        });
                        const r = this.getInitialEvent(e);
                        r && t.apply(n, r)
                    }
                    off(e, t, n) {
                        this.validateEventType_(e);
                        const r = this.listeners_[e] || [];
                        for (let i = 0; i < r.length; i++)
                            if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1)
                    }
                    validateEventType_(e) {
                        Object(l.e)(this.allowedEvents_.find((t => t === e)), "Unknown event: " + e)
                    }
                }
                class Ce extends ve {
                    constructor() {
                        super(["online"]), this.online_ = !0, "undefined" == typeof window || void 0 === window.addEventListener || Object(l.s)() || (window.addEventListener("online", (() => {
                            this.online_ || (this.online_ = !0, this.trigger("online", !0))
                        }), !1), window.addEventListener("offline", (() => {
                            this.online_ && (this.online_ = !1, this.trigger("online", !1))
                        }), !1))
                    }
                    static getInstance() {
                        return new Ce
                    }
                    getInitialEvent(e) {
                        return Object(l.e)("online" === e, "Unknown event type: " + e), [this.online_]
                    }
                    currentlyOnline() {
                        return this.online_
                    }
                }
                class be {
                    constructor(e, t) {
                        if (void 0 === t) {
                            this.pieces_ = e.split("/");
                            let t = 0;
                            for (let i = 0; i < this.pieces_.length; i++) this.pieces_[i].length > 0 && (this.pieces_[t] = this.pieces_[i], t++);
                            this.pieces_.length = t, this.pieceNum_ = 0
                        } else this.pieces_ = e, this.pieceNum_ = t
                    }
                    toString() {
                        let e = "";
                        for (let i = this.pieceNum_; i < this.pieces_.length; i++) "" !== this.pieces_[i] && (e += "/" + this.pieces_[i]);
                        return e || "/"
                    }
                }

                function we() {
                    return new be("")
                }

                function Te(path) {
                    return path.pieceNum_ >= path.pieces_.length ? null : path.pieces_[path.pieceNum_]
                }

                function Ie(path) {
                    return path.pieces_.length - path.pieceNum_
                }

                function ke(path) {
                    let e = path.pieceNum_;
                    return e < path.pieces_.length && e++, new be(path.pieces_, e)
                }

                function Ee(path) {
                    return path.pieceNum_ < path.pieces_.length ? path.pieces_[path.pieces_.length - 1] : null
                }

                function Ne(path, e = 0) {
                    return path.pieces_.slice(path.pieceNum_ + e)
                }

                function Se(path) {
                    if (path.pieceNum_ >= path.pieces_.length) return null;
                    const e = [];
                    for (let i = path.pieceNum_; i < path.pieces_.length - 1; i++) e.push(path.pieces_[i]);
                    return new be(e, 0)
                }

                function Pe(path, e) {
                    const t = [];
                    for (let i = path.pieceNum_; i < path.pieces_.length; i++) t.push(path.pieces_[i]);
                    if (e instanceof be)
                        for (let i = e.pieceNum_; i < e.pieces_.length; i++) t.push(e.pieces_[i]);
                    else {
                        const n = e.split("/");
                        for (let i = 0; i < n.length; i++) n[i].length > 0 && t.push(n[i])
                    }
                    return new be(t, 0)
                }

                function xe(path) {
                    return path.pieceNum_ >= path.pieces_.length
                }

                function Oe(e, t) {
                    const n = Te(e),
                        r = Te(t);
                    if (null === n) return t;
                    if (n === r) return Oe(ke(e), ke(t));
                    throw new Error("INTERNAL ERROR: innerPath (" + t + ") is not within outerPath (" + e + ")")
                }

                function Re(path, e) {
                    if (Ie(path) !== Ie(e)) return !1;
                    for (let i = path.pieceNum_, t = e.pieceNum_; i <= path.pieces_.length; i++, t++)
                        if (path.pieces_[i] !== e.pieces_[t]) return !1;
                    return !0
                }

                function je(path, e) {
                    let i = path.pieceNum_,
                        t = e.pieceNum_;
                    if (Ie(path) > Ie(e)) return !1;
                    for (; i < path.pieces_.length;) {
                        if (path.pieces_[i] !== e.pieces_[t]) return !1;
                        ++i, ++t
                    }
                    return !0
                }
                class De {
                    constructor(path, e) {
                        this.errorPrefix_ = e, this.parts_ = Ne(path, 0), this.byteLength_ = Math.max(1, this.parts_.length);
                        for (let i = 0; i < this.parts_.length; i++) this.byteLength_ += Object(l.A)(this.parts_[i]);
                        Me(this)
                    }
                }

                function Me(e) {
                    if (e.byteLength_ > 768) throw new Error(e.errorPrefix_ + "has a key path longer than 768 bytes (" + e.byteLength_ + ").");
                    if (e.parts_.length > 32) throw new Error(e.errorPrefix_ + "path specified exceeds the maximum depth that can be written (32) or object contains a cycle " + Fe(e))
                }

                function Fe(e) {
                    return 0 === e.parts_.length ? "" : "in property '" + e.parts_.join(".") + "'"
                }
                class qe extends ve {
                    constructor() {
                        let e, t;
                        super(["visible"]), "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (t = "visibilitychange", e = "hidden") : void 0 !== document.mozHidden ? (t = "mozvisibilitychange", e = "mozHidden") : void 0 !== document.msHidden ? (t = "msvisibilitychange", e = "msHidden") : void 0 !== document.webkitHidden && (t = "webkitvisibilitychange", e = "webkitHidden")), this.visible_ = !0, t && document.addEventListener(t, (() => {
                            const t = !document[e];
                            t !== this.visible_ && (this.visible_ = t, this.trigger("visible", t))
                        }), !1)
                    }
                    static getInstance() {
                        return new qe
                    }
                    getInitialEvent(e) {
                        return Object(l.e)("visible" === e, "Unknown event type: " + e), [this.visible_]
                    }
                }
                const Le = 1e3;
                class Ae extends ye {
                    constructor(e, t, n, r, o, h, c, d) {
                        if (super(), this.repoInfo_ = e, this.applicationId_ = t, this.onDataUpdate_ = n, this.onConnectStatus_ = r, this.onServerInfoUpdate_ = o, this.authTokenProvider_ = h, this.appCheckTokenProvider_ = c, this.authOverride_ = d, this.id = Ae.nextPersistentConnectionId_++, this.log_ = x("p:" + this.id + ":"), this.interruptReasons_ = {}, this.listens = new Map, this.outstandingPuts_ = [], this.outstandingGets_ = [], this.outstandingPutCount_ = 0, this.outstandingGetCount_ = 0, this.onDisconnectRequestQueue_ = [], this.connected_ = !1, this.reconnectDelay_ = Le, this.maxReconnectDelay_ = 3e5, this.securityDebugCallback_ = null, this.lastSessionId = null, this.establishConnectionTimer_ = null, this.visible_ = !1, this.requestCBHash_ = {}, this.requestNumber_ = 0, this.realtime_ = null, this.authToken_ = null, this.appCheckToken_ = null, this.forceTokenRefresh_ = !1, this.invalidAuthTokenCount_ = 0, this.invalidAppCheckTokenCount_ = 0, this.firstConnection_ = !0, this.lastConnectionAttemptTime_ = null, this.lastConnectionEstablishedTime_ = null, d && !Object(l.t)()) throw new Error("Auth override specified in options, but not supported on non Node.js platforms");
                        qe.getInstance().on("visible", this.onVisible_, this), -1 === e.host.indexOf("fblocal") && Ce.getInstance().on("online", this.onOnline_, this)
                    }
                    sendRequest(e, body, t) {
                        const n = ++this.requestNumber_,
                            r = {
                                r: n,
                                a: e,
                                b: body
                            };
                        this.log_(Object(l.C)(r)), Object(l.e)(this.connected_, "sendRequest call when we're not connected not allowed."), this.realtime_.sendRequest(r), t && (this.requestCBHash_[n] = t)
                    }
                    get(e) {
                        this.initConnection_();
                        const t = new l.a,
                            n = {
                                action: "g",
                                request: {
                                    p: e._path.toString(),
                                    q: e._queryObject
                                },
                                onComplete: e => {
                                    const n = e.d;
                                    "ok" === e.s ? t.resolve(n) : t.reject(n)
                                }
                            };
                        this.outstandingGets_.push(n), this.outstandingGetCount_++;
                        const r = this.outstandingGets_.length - 1;
                        return this.connected_ && this.sendGet_(r), t.promise
                    }
                    listen(e, t, n, r) {
                        this.initConnection_();
                        const o = e._queryIdentifier,
                            h = e._path.toString();
                        this.log_("Listen called for " + h + " " + o), this.listens.has(h) || this.listens.set(h, new Map), Object(l.e)(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "listen() called for non-default but complete query"), Object(l.e)(!this.listens.get(h).has(o), "listen() called twice for same path/queryId.");
                        const c = {
                            onComplete: r,
                            hashFn: t,
                            query: e,
                            tag: n
                        };
                        this.listens.get(h).set(o, c), this.connected_ && this.sendListen_(c)
                    }
                    sendGet_(e) {
                        const t = this.outstandingGets_[e];
                        this.sendRequest("g", t.request, (n => {
                            delete this.outstandingGets_[e], this.outstandingGetCount_--, 0 === this.outstandingGetCount_ && (this.outstandingGets_ = []), t.onComplete && t.onComplete(n)
                        }))
                    }
                    sendListen_(e) {
                        const t = e.query,
                            n = t._path.toString(),
                            r = t._queryIdentifier;
                        this.log_("Listen on " + n + " for " + r);
                        const o = {
                            p: n
                        };
                        e.tag && (o.q = t._queryObject, o.t = e.tag), o.h = e.hashFn(), this.sendRequest("q", o, (o => {
                            const l = o.d,
                                h = o.s;
                            Ae.warnOnListenWarnings_(l, t);
                            (this.listens.get(n) && this.listens.get(n).get(r)) === e && (this.log_("listen response", o), "ok" !== h && this.removeListen_(n, r), e.onComplete && e.onComplete(h, l))
                        }))
                    }
                    static warnOnListenWarnings_(e, t) {
                        if (e && "object" == typeof e && Object(l.j)(e, "w")) {
                            const n = Object(l.z)(e, "w");
                            if (Array.isArray(n) && ~n.indexOf("no_index")) {
                                const e = '".indexOn": "' + t._queryParams.getIndex().toString() + '"',
                                    n = t._path.toString();
                                j(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)
                            }
                        }
                    }
                    refreshAuthToken(e) {
                        this.authToken_ = e, this.log_("Auth token refreshed"), this.authToken_ ? this.tryAuth() : this.connected_ && this.sendRequest("unauth", {}, (() => {})), this.reduceReconnectDelayIfAdminCredential_(e)
                    }
                    reduceReconnectDelayIfAdminCredential_(e) {
                        (e && 40 === e.length || Object(l.p)(e)) && (this.log_("Admin auth credential detected.  Reducing max reconnect time."), this.maxReconnectDelay_ = 3e4)
                    }
                    refreshAppCheckToken(e) {
                        this.appCheckToken_ = e, this.log_("App check token refreshed"), this.appCheckToken_ ? this.tryAppCheck() : this.connected_ && this.sendRequest("unappeck", {}, (() => {}))
                    }
                    tryAuth() {
                        if (this.connected_ && this.authToken_) {
                            const e = this.authToken_,
                                t = Object(l.v)(e) ? "auth" : "gauth",
                                n = {
                                    cred: e
                                };
                            null === this.authOverride_ ? n.noauth = !0 : "object" == typeof this.authOverride_ && (n.authvar = this.authOverride_), this.sendRequest(t, n, (t => {
                                const n = t.s,
                                    data = t.d || "error";
                                this.authToken_ === e && ("ok" === n ? this.invalidAuthTokenCount_ = 0 : this.onAuthRevoked_(n, data))
                            }))
                        }
                    }
                    tryAppCheck() {
                        this.connected_ && this.appCheckToken_ && this.sendRequest("appcheck", {
                            token: this.appCheckToken_
                        }, (e => {
                            const t = e.s,
                                data = e.d || "error";
                            "ok" === t ? this.invalidAppCheckTokenCount_ = 0 : this.onAppCheckRevoked_(t, data)
                        }))
                    }
                    unlisten(e, t) {
                        const n = e._path.toString(),
                            r = e._queryIdentifier;
                        this.log_("Unlisten called for " + n + " " + r), Object(l.e)(e._queryParams.isDefault() || !e._queryParams.loadsAllData(), "unlisten() called for non-default but complete query");
                        this.removeListen_(n, r) && this.connected_ && this.sendUnlisten_(n, r, e._queryObject, t)
                    }
                    sendUnlisten_(e, t, n, r) {
                        this.log_("Unlisten on " + e + " for " + t);
                        const o = {
                            p: e
                        };
                        r && (o.q = n, o.t = r), this.sendRequest("n", o)
                    }
                    onDisconnectPut(e, data, t) {
                        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("o", e, data, t) : this.onDisconnectRequestQueue_.push({
                            pathString: e,
                            action: "o",
                            data: data,
                            onComplete: t
                        })
                    }
                    onDisconnectMerge(e, data, t) {
                        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("om", e, data, t) : this.onDisconnectRequestQueue_.push({
                            pathString: e,
                            action: "om",
                            data: data,
                            onComplete: t
                        })
                    }
                    onDisconnectCancel(e, t) {
                        this.initConnection_(), this.connected_ ? this.sendOnDisconnect_("oc", e, null, t) : this.onDisconnectRequestQueue_.push({
                            pathString: e,
                            action: "oc",
                            data: null,
                            onComplete: t
                        })
                    }
                    sendOnDisconnect_(e, t, data, n) {
                        const r = {
                            p: t,
                            d: data
                        };
                        this.log_("onDisconnect " + e, r), this.sendRequest(e, r, (e => {
                            n && setTimeout((() => {
                                n(e.s, e.d)
                            }), Math.floor(0))
                        }))
                    }
                    put(e, data, t, n) {
                        this.putInternal("p", e, data, t, n)
                    }
                    merge(e, data, t, n) {
                        this.putInternal("m", e, data, t, n)
                    }
                    putInternal(e, t, data, n, r) {
                        this.initConnection_();
                        const o = {
                            p: t,
                            d: data
                        };
                        void 0 !== r && (o.h = r), this.outstandingPuts_.push({
                            action: e,
                            request: o,
                            onComplete: n
                        }), this.outstandingPutCount_++;
                        const l = this.outstandingPuts_.length - 1;
                        this.connected_ ? this.sendPut_(l) : this.log_("Buffering put: " + t)
                    }
                    sendPut_(e) {
                        const t = this.outstandingPuts_[e].action,
                            n = this.outstandingPuts_[e].request,
                            r = this.outstandingPuts_[e].onComplete;
                        this.outstandingPuts_[e].queued = this.connected_, this.sendRequest(t, n, (n => {
                            this.log_(t + " response", n), delete this.outstandingPuts_[e], this.outstandingPutCount_--, 0 === this.outstandingPutCount_ && (this.outstandingPuts_ = []), r && r(n.s, n.d)
                        }))
                    }
                    reportStats(e) {
                        if (this.connected_) {
                            const t = {
                                c: e
                            };
                            this.log_("reportStats", t), this.sendRequest("s", t, (e => {
                                if ("ok" !== e.s) {
                                    const t = e.d;
                                    this.log_("reportStats", "Error sending stats: " + t)
                                }
                            }))
                        }
                    }
                    onDataMessage_(e) {
                        if ("r" in e) {
                            this.log_("from server: " + Object(l.C)(e));
                            const t = e.r,
                                n = this.requestCBHash_[t];
                            n && (delete this.requestCBHash_[t], n(e.b))
                        } else {
                            if ("error" in e) throw "A server-side error has occurred: " + e.error;
                            "a" in e && this.onDataPush_(e.a, e.b)
                        }
                    }
                    onDataPush_(e, body) {
                        this.log_("handleServerMessage", e, body), "d" === e ? this.onDataUpdate_(body.p, body.d, !1, body.t) : "m" === e ? this.onDataUpdate_(body.p, body.d, !0, body.t) : "c" === e ? this.onListenRevoked_(body.p, body.q) : "ac" === e ? this.onAuthRevoked_(body.s, body.d) : "apc" === e ? this.onAppCheckRevoked_(body.s, body.d) : "sd" === e ? this.onSecurityDebugPacket_(body) : O("Unrecognized action received from server: " + Object(l.C)(e) + "\nAre you using the latest client?")
                    }
                    onReady_(e, t) {
                        this.log_("connection ready"), this.connected_ = !0, this.lastConnectionEstablishedTime_ = (new Date).getTime(), this.handleTimestamp_(e), this.lastSessionId = t, this.firstConnection_ && this.sendConnectStats_(), this.restoreState_(), this.firstConnection_ = !1, this.onConnectStatus_(!0)
                    }
                    scheduleConnect_(e) {
                        Object(l.e)(!this.realtime_, "Scheduling a connect when we're already connected/ing?"), this.establishConnectionTimer_ && clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = setTimeout((() => {
                            this.establishConnectionTimer_ = null, this.establishConnection_()
                        }), Math.floor(e))
                    }
                    initConnection_() {
                        !this.realtime_ && this.firstConnection_ && this.scheduleConnect_(0)
                    }
                    onVisible_(e) {
                        e && !this.visible_ && this.reconnectDelay_ === this.maxReconnectDelay_ && (this.log_("Window became visible.  Reducing delay."), this.reconnectDelay_ = Le, this.realtime_ || this.scheduleConnect_(0)), this.visible_ = e
                    }
                    onOnline_(e) {
                        e ? (this.log_("Browser went online."), this.reconnectDelay_ = Le, this.realtime_ || this.scheduleConnect_(0)) : (this.log_("Browser went offline.  Killing connection."), this.realtime_ && this.realtime_.close())
                    }
                    onRealtimeDisconnect_() {
                        if (this.log_("data client disconnected"), this.connected_ = !1, this.realtime_ = null, this.cancelSentTransactions_(), this.requestCBHash_ = {}, this.shouldReconnect_()) {
                            if (this.visible_) {
                                if (this.lastConnectionEstablishedTime_) {
                                    (new Date).getTime() - this.lastConnectionEstablishedTime_ > 3e4 && (this.reconnectDelay_ = Le), this.lastConnectionEstablishedTime_ = null
                                }
                            } else this.log_("Window isn't visible.  Delaying reconnect."), this.reconnectDelay_ = this.maxReconnectDelay_, this.lastConnectionAttemptTime_ = (new Date).getTime();
                            const e = (new Date).getTime() - this.lastConnectionAttemptTime_;
                            let t = Math.max(0, this.reconnectDelay_ - e);
                            t = Math.random() * t, this.log_("Trying to reconnect in " + t + "ms"), this.scheduleConnect_(t), this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, 1.3 * this.reconnectDelay_)
                        }
                        this.onConnectStatus_(!1)
                    }
                    async establishConnection_() {
                        if (this.shouldReconnect_()) {
                            this.log_("Making a connection attempt"), this.lastConnectionAttemptTime_ = (new Date).getTime(), this.lastConnectionEstablishedTime_ = null;
                            const e = this.onDataMessage_.bind(this),
                                t = this.onReady_.bind(this),
                                n = this.onRealtimeDisconnect_.bind(this),
                                r = this.id + ":" + Ae.nextConnectionId_++,
                                o = this.lastSessionId;
                            let h = !1,
                                c = null;
                            const d = function() {
                                    c ? c.close() : (h = !0, n())
                                },
                                _ = function(e) {
                                    Object(l.e)(c, "sendRequest call when we're not connected not allowed."), c.sendRequest(e)
                                };
                            this.realtime_ = {
                                close: d,
                                sendRequest: _
                            };
                            const f = this.forceTokenRefresh_;
                            this.forceTokenRefresh_ = !1;
                            try {
                                const [l, d] = await Promise.all([this.authTokenProvider_.getToken(f), this.appCheckTokenProvider_.getToken(f)]);
                                h ? P("getToken() completed but was canceled") : (P("getToken() completed. Creating connection."), this.authToken_ = l && l.accessToken, this.appCheckToken_ = d && d.token, c = new me(r, this.repoInfo_, this.applicationId_, this.appCheckToken_, this.authToken_, e, t, n, (e => {
                                    j(e + " (" + this.repoInfo_.toString() + ")"), this.interrupt("server_kill")
                                }), o))
                            } catch (e) {
                                this.log_("Failed to get token: " + e), h || (this.repoInfo_.nodeAdmin && j(e), d())
                            }
                        }
                    }
                    interrupt(e) {
                        P("Interrupting connection for reason: " + e), this.interruptReasons_[e] = !0, this.realtime_ ? this.realtime_.close() : (this.establishConnectionTimer_ && (clearTimeout(this.establishConnectionTimer_), this.establishConnectionTimer_ = null), this.connected_ && this.onRealtimeDisconnect_())
                    }
                    resume(e) {
                        P("Resuming connection for reason: " + e), delete this.interruptReasons_[e], Object(l.q)(this.interruptReasons_) && (this.reconnectDelay_ = Le, this.realtime_ || this.scheduleConnect_(0))
                    }
                    handleTimestamp_(e) {
                        const t = e - (new Date).getTime();
                        this.onServerInfoUpdate_({
                            serverTimeOffset: t
                        })
                    }
                    cancelSentTransactions_() {
                        for (let i = 0; i < this.outstandingPuts_.length; i++) {
                            const e = this.outstandingPuts_[i];
                            e && "h" in e.request && e.queued && (e.onComplete && e.onComplete("disconnect"), delete this.outstandingPuts_[i], this.outstandingPutCount_--)
                        }
                        0 === this.outstandingPutCount_ && (this.outstandingPuts_ = [])
                    }
                    onListenRevoked_(e, t) {
                        let n;
                        n = t ? t.map((q => U(q))).join("$") : "default";
                        const r = this.removeListen_(e, n);
                        r && r.onComplete && r.onComplete("permission_denied")
                    }
                    removeListen_(e, t) {
                        const n = new be(e).toString();
                        let r;
                        if (this.listens.has(n)) {
                            const map = this.listens.get(n);
                            r = map.get(t), map.delete(t), 0 === map.size && this.listens.delete(n)
                        } else r = void 0;
                        return r
                    }
                    onAuthRevoked_(e, t) {
                        P("Auth token revoked: " + e + "/" + t), this.authToken_ = null, this.forceTokenRefresh_ = !0, this.realtime_.close(), "invalid_token" !== e && "permission_denied" !== e || (this.invalidAuthTokenCount_++, this.invalidAuthTokenCount_ >= 3 && (this.reconnectDelay_ = 3e4, this.authTokenProvider_.notifyForInvalidToken()))
                    }
                    onAppCheckRevoked_(e, t) {
                        P("App check token revoked: " + e + "/" + t), this.appCheckToken_ = null, this.forceTokenRefresh_ = !0, "invalid_token" !== e && "permission_denied" !== e || (this.invalidAppCheckTokenCount_++, this.invalidAppCheckTokenCount_ >= 3 && this.appCheckTokenProvider_.notifyForInvalidToken())
                    }
                    onSecurityDebugPacket_(body) {
                        this.securityDebugCallback_ ? this.securityDebugCallback_(body) : "msg" in body && console.log("FIREBASE: " + body.msg.replace("\n", "\nFIREBASE: "))
                    }
                    restoreState_() {
                        this.tryAuth(), this.tryAppCheck();
                        for (const e of this.listens.values())
                            for (const t of e.values()) this.sendListen_(t);
                        for (let i = 0; i < this.outstandingPuts_.length; i++) this.outstandingPuts_[i] && this.sendPut_(i);
                        for (; this.onDisconnectRequestQueue_.length;) {
                            const e = this.onDisconnectRequestQueue_.shift();
                            this.sendOnDisconnect_(e.action, e.pathString, e.data, e.onComplete)
                        }
                        for (let i = 0; i < this.outstandingGets_.length; i++) this.outstandingGets_[i] && this.sendGet_(i)
                    }
                    sendConnectStats_() {
                        const e = {};
                        let t = "js";
                        Object(l.t)() && (t = this.repoInfo_.nodeAdmin ? "admin_node" : "node"), e["sdk." + t + "." + _.replace(/\./g, "-")] = 1, Object(l.s)() ? e["framework.cordova"] = 1 : Object(l.u)() && (e["framework.reactnative"] = 1), this.reportStats(e)
                    }
                    shouldReconnect_() {
                        const e = Ce.getInstance().currentlyOnline();
                        return Object(l.q)(this.interruptReasons_) && e
                    }
                }
                Ae.nextPersistentConnectionId_ = 0, Ae.nextConnectionId_ = 0;
                class We {
                    constructor(e, t) {
                        this.name = e, this.node = t
                    }
                    static Wrap(e, t) {
                        return new We(e, t)
                    }
                }
                class Ue {
                    getCompare() {
                        return this.compare.bind(this)
                    }
                    indexedValueChanged(e, t) {
                        const n = new We(M, e),
                            r = new We(M, t);
                        return 0 !== this.compare(n, r)
                    }
                    minPost() {
                        return We.MIN
                    }
                }
                let ze;
                class He extends Ue {
                    static get __EMPTY_NODE() {
                        return ze
                    }
                    static set __EMPTY_NODE(e) {
                        ze = e
                    }
                    compare(a, b) {
                        return L(a.name, b.name)
                    }
                    isDefinedOn(e) {
                        throw Object(l.f)("KeyIndex.isDefinedOn not expected to be called.")
                    }
                    indexedValueChanged(e, t) {
                        return !1
                    }
                    minPost() {
                        return We.MIN
                    }
                    maxPost() {
                        return new We(F, ze)
                    }
                    makePost(e, t) {
                        return Object(l.e)("string" == typeof e, "KeyIndex indexValue must always be a string."), new We(e, ze)
                    }
                    toString() {
                        return ".key"
                    }
                }
                const Ye = new He;
                class Ve {
                    constructor(e, t, n, r, o = null) {
                        this.isReverse_ = r, this.resultGenerator_ = o, this.nodeStack_ = [];
                        let l = 1;
                        for (; !e.isEmpty();)
                            if (l = t ? n(e.key, t) : 1, r && (l *= -1), l < 0) e = this.isReverse_ ? e.left : e.right;
                            else {
                                if (0 === l) {
                                    this.nodeStack_.push(e);
                                    break
                                }
                                this.nodeStack_.push(e), e = this.isReverse_ ? e.right : e.left
                            }
                    }
                    getNext() {
                        if (0 === this.nodeStack_.length) return null;
                        let e, t = this.nodeStack_.pop();
                        if (e = this.resultGenerator_ ? this.resultGenerator_(t.key, t.value) : {
                                key: t.key,
                                value: t.value
                            }, this.isReverse_)
                            for (t = t.left; !t.isEmpty();) this.nodeStack_.push(t), t = t.right;
                        else
                            for (t = t.right; !t.isEmpty();) this.nodeStack_.push(t), t = t.left;
                        return e
                    }
                    hasNext() {
                        return this.nodeStack_.length > 0
                    }
                    peek() {
                        if (0 === this.nodeStack_.length) return null;
                        const e = this.nodeStack_[this.nodeStack_.length - 1];
                        return this.resultGenerator_ ? this.resultGenerator_(e.key, e.value) : {
                            key: e.key,
                            value: e.value
                        }
                    }
                }
                class Be {
                    constructor(e, t, n, r, o) {
                        this.key = e, this.value = t, this.color = null != n ? n : Be.RED, this.left = null != r ? r : Ke.EMPTY_NODE, this.right = null != o ? o : Ke.EMPTY_NODE
                    }
                    copy(e, t, n, r, o) {
                        return new Be(null != e ? e : this.key, null != t ? t : this.value, null != n ? n : this.color, null != r ? r : this.left, null != o ? o : this.right)
                    }
                    count() {
                        return this.left.count() + 1 + this.right.count()
                    }
                    isEmpty() {
                        return !1
                    }
                    inorderTraversal(e) {
                        return this.left.inorderTraversal(e) || !!e(this.key, this.value) || this.right.inorderTraversal(e)
                    }
                    reverseTraversal(e) {
                        return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
                    }
                    min_() {
                        return this.left.isEmpty() ? this : this.left.min_()
                    }
                    minKey() {
                        return this.min_().key
                    }
                    maxKey() {
                        return this.right.isEmpty() ? this.key : this.right.maxKey()
                    }
                    insert(e, t, n) {
                        let r = this;
                        const o = n(e, r.key);
                        return r = o < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === o ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n)), r.fixUp_()
                    }
                    removeMin_() {
                        if (this.left.isEmpty()) return Ke.EMPTY_NODE;
                        let e = this;
                        return e.left.isRed_() || e.left.left.isRed_() || (e = e.moveRedLeft_()), e = e.copy(null, null, null, e.left.removeMin_(), null), e.fixUp_()
                    }
                    remove(e, t) {
                        let n, r;
                        if (n = this, t(e, n.key) < 0) n.left.isEmpty() || n.left.isRed_() || n.left.left.isRed_() || (n = n.moveRedLeft_()), n = n.copy(null, null, null, n.left.remove(e, t), null);
                        else {
                            if (n.left.isRed_() && (n = n.rotateRight_()), n.right.isEmpty() || n.right.isRed_() || n.right.left.isRed_() || (n = n.moveRedRight_()), 0 === t(e, n.key)) {
                                if (n.right.isEmpty()) return Ke.EMPTY_NODE;
                                r = n.right.min_(), n = n.copy(r.key, r.value, null, null, n.right.removeMin_())
                            }
                            n = n.copy(null, null, null, null, n.right.remove(e, t))
                        }
                        return n.fixUp_()
                    }
                    isRed_() {
                        return this.color
                    }
                    fixUp_() {
                        let e = this;
                        return e.right.isRed_() && !e.left.isRed_() && (e = e.rotateLeft_()), e.left.isRed_() && e.left.left.isRed_() && (e = e.rotateRight_()), e.left.isRed_() && e.right.isRed_() && (e = e.colorFlip_()), e
                    }
                    moveRedLeft_() {
                        let e = this.colorFlip_();
                        return e.right.left.isRed_() && (e = e.copy(null, null, null, null, e.right.rotateRight_()), e = e.rotateLeft_(), e = e.colorFlip_()), e
                    }
                    moveRedRight_() {
                        let e = this.colorFlip_();
                        return e.left.left.isRed_() && (e = e.rotateRight_(), e = e.colorFlip_()), e
                    }
                    rotateLeft_() {
                        const e = this.copy(null, null, Be.RED, null, this.right.left);
                        return this.right.copy(null, null, this.color, e, null)
                    }
                    rotateRight_() {
                        const e = this.copy(null, null, Be.RED, this.left.right, null);
                        return this.left.copy(null, null, this.color, null, e)
                    }
                    colorFlip_() {
                        const e = this.left.copy(null, null, !this.left.color, null, null),
                            t = this.right.copy(null, null, !this.right.color, null, null);
                        return this.copy(null, null, !this.color, e, t)
                    }
                    checkMaxDepth_() {
                        const e = this.check_();
                        return Math.pow(2, e) <= this.count() + 1
                    }
                    check_() {
                        if (this.isRed_() && this.left.isRed_()) throw new Error("Red node has red child(" + this.key + "," + this.value + ")");
                        if (this.right.isRed_()) throw new Error("Right child of (" + this.key + "," + this.value + ") is red");
                        const e = this.left.check_();
                        if (e !== this.right.check_()) throw new Error("Black depths differ");
                        return e + (this.isRed_() ? 0 : 1)
                    }
                }
                Be.RED = !0, Be.BLACK = !1;
                class Ke {
                    constructor(e, t = Ke.EMPTY_NODE) {
                        this.comparator_ = e, this.root_ = t
                    }
                    insert(e, t) {
                        return new Ke(this.comparator_, this.root_.insert(e, t, this.comparator_).copy(null, null, Be.BLACK, null, null))
                    }
                    remove(e) {
                        return new Ke(this.comparator_, this.root_.remove(e, this.comparator_).copy(null, null, Be.BLACK, null, null))
                    }
                    get(e) {
                        let t, n = this.root_;
                        for (; !n.isEmpty();) {
                            if (t = this.comparator_(e, n.key), 0 === t) return n.value;
                            t < 0 ? n = n.left : t > 0 && (n = n.right)
                        }
                        return null
                    }
                    getPredecessorKey(e) {
                        let t, n = this.root_,
                            r = null;
                        for (; !n.isEmpty();) {
                            if (t = this.comparator_(e, n.key), 0 === t) {
                                if (n.left.isEmpty()) return r ? r.key : null;
                                for (n = n.left; !n.right.isEmpty();) n = n.right;
                                return n.key
                            }
                            t < 0 ? n = n.left : t > 0 && (r = n, n = n.right)
                        }
                        throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
                    }
                    isEmpty() {
                        return this.root_.isEmpty()
                    }
                    count() {
                        return this.root_.count()
                    }
                    minKey() {
                        return this.root_.minKey()
                    }
                    maxKey() {
                        return this.root_.maxKey()
                    }
                    inorderTraversal(e) {
                        return this.root_.inorderTraversal(e)
                    }
                    reverseTraversal(e) {
                        return this.root_.reverseTraversal(e)
                    }
                    getIterator(e) {
                        return new Ve(this.root_, null, this.comparator_, !1, e)
                    }
                    getIteratorFrom(e, t) {
                        return new Ve(this.root_, e, this.comparator_, !1, t)
                    }
                    getReverseIteratorFrom(e, t) {
                        return new Ve(this.root_, e, this.comparator_, !0, t)
                    }
                    getReverseIterator(e) {
                        return new Ve(this.root_, null, this.comparator_, !0, e)
                    }
                }

                function Ge(e, t) {
                    return L(e.name, t.name)
                }

                function Qe(e, t) {
                    return L(e, t)
                }
                let $e;
                Ke.EMPTY_NODE = new class {
                    copy(e, t, n, r, o) {
                        return this
                    }
                    insert(e, t, n) {
                        return new Be(e, t, null)
                    }
                    remove(e, t) {
                        return this
                    }
                    count() {
                        return 0
                    }
                    isEmpty() {
                        return !0
                    }
                    inorderTraversal(e) {
                        return !1
                    }
                    reverseTraversal(e) {
                        return !1
                    }
                    minKey() {
                        return null
                    }
                    maxKey() {
                        return null
                    }
                    check_() {
                        return 0
                    }
                    isRed_() {
                        return !1
                    }
                };
                const Xe = function(e) {
                        return "number" == typeof e ? "number:" + Y(e) : "string:" + e
                    },
                    Je = function(e) {
                        if (e.isLeafNode()) {
                            const t = e.val();
                            Object(l.e)("string" == typeof t || "number" == typeof t || "object" == typeof t && Object(l.j)(t, ".sv"), "Priority must be a string or number.")
                        } else Object(l.e)(e === $e || e.isEmpty(), "priority of unexpected type.");
                        Object(l.e)(e === $e || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
                    };
                let Ze, et, tt;
                class nt {
                    constructor(e, t = nt.__childrenNodeConstructor.EMPTY_NODE) {
                        this.value_ = e, this.priorityNode_ = t, this.lazyHash_ = null, Object(l.e)(void 0 !== this.value_ && null !== this.value_, "LeafNode shouldn't be created with null/undefined value."), Je(this.priorityNode_)
                    }
                    static set __childrenNodeConstructor(e) {
                        Ze = e
                    }
                    static get __childrenNodeConstructor() {
                        return Ze
                    }
                    isLeafNode() {
                        return !0
                    }
                    getPriority() {
                        return this.priorityNode_
                    }
                    updatePriority(e) {
                        return new nt(this.value_, e)
                    }
                    getImmediateChild(e) {
                        return ".priority" === e ? this.priorityNode_ : nt.__childrenNodeConstructor.EMPTY_NODE
                    }
                    getChild(path) {
                        return xe(path) ? this : ".priority" === Te(path) ? this.priorityNode_ : nt.__childrenNodeConstructor.EMPTY_NODE
                    }
                    hasChild() {
                        return !1
                    }
                    getPredecessorChildName(e, t) {
                        return null
                    }
                    updateImmediateChild(e, t) {
                        return ".priority" === e ? this.updatePriority(t) : t.isEmpty() && ".priority" !== e ? this : nt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e, t).updatePriority(this.priorityNode_)
                    }
                    updateChild(path, e) {
                        const t = Te(path);
                        return null === t ? e : e.isEmpty() && ".priority" !== t ? this : (Object(l.e)(".priority" !== t || 1 === Ie(path), ".priority must be the last token in a path"), this.updateImmediateChild(t, nt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(path), e)))
                    }
                    isEmpty() {
                        return !1
                    }
                    numChildren() {
                        return 0
                    }
                    forEachChild(e, t) {
                        return !1
                    }
                    val(e) {
                        return e && !this.getPriority().isEmpty() ? {
                            ".value": this.getValue(),
                            ".priority": this.getPriority().val()
                        } : this.getValue()
                    }
                    hash() {
                        if (null === this.lazyHash_) {
                            let e = "";
                            this.priorityNode_.isEmpty() || (e += "priority:" + Xe(this.priorityNode_.val()) + ":");
                            const t = typeof this.value_;
                            e += t + ":", e += "number" === t ? Y(this.value_) : this.value_, this.lazyHash_ = I(e)
                        }
                        return this.lazyHash_
                    }
                    getValue() {
                        return this.value_
                    }
                    compareTo(e) {
                        return e === nt.__childrenNodeConstructor.EMPTY_NODE ? 1 : e instanceof nt.__childrenNodeConstructor ? -1 : (Object(l.e)(e.isLeafNode(), "Unknown node type"), this.compareToLeafNode_(e))
                    }
                    compareToLeafNode_(e) {
                        const t = typeof e.value_,
                            n = typeof this.value_,
                            r = nt.VALUE_TYPE_ORDER.indexOf(t),
                            o = nt.VALUE_TYPE_ORDER.indexOf(n);
                        return Object(l.e)(r >= 0, "Unknown leaf type: " + t), Object(l.e)(o >= 0, "Unknown leaf type: " + n), r === o ? "object" === n ? 0 : this.value_ < e.value_ ? -1 : this.value_ === e.value_ ? 0 : 1 : o - r
                    }
                    withIndex() {
                        return this
                    }
                    isIndexed() {
                        return !0
                    }
                    equals(e) {
                        if (e === this) return !0;
                        if (e.isLeafNode()) {
                            const t = e;
                            return this.value_ === t.value_ && this.priorityNode_.equals(t.priorityNode_)
                        }
                        return !1
                    }
                }
                nt.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"];
                const it = new class extends Ue {
                        compare(a, b) {
                            const e = a.node.getPriority(),
                                t = b.node.getPriority(),
                                n = e.compareTo(t);
                            return 0 === n ? L(a.name, b.name) : n
                        }
                        isDefinedOn(e) {
                            return !e.getPriority().isEmpty()
                        }
                        indexedValueChanged(e, t) {
                            return !e.getPriority().equals(t.getPriority())
                        }
                        minPost() {
                            return We.MIN
                        }
                        maxPost() {
                            return new We(F, new nt("[PRIORITY-POST]", tt))
                        }
                        makePost(e, t) {
                            const n = et(e);
                            return new We(t, new nt("[PRIORITY-POST]", n))
                        }
                        toString() {
                            return ".priority"
                        }
                    },
                    st = Math.log(2);
                class ot {
                    constructor(e) {
                        var t;
                        this.count = (t = e + 1, parseInt(Math.log(t) / st, 10)), this.current_ = this.count - 1;
                        const mask = (n = this.count, parseInt(Array(n + 1).join("1"), 2));
                        var n;
                        this.bits_ = e + 1 & mask
                    }
                    nextBitIsOne() {
                        const e = !(this.bits_ & 1 << this.current_);
                        return this.current_--, e
                    }
                }
                const at = function(e, t, n, r) {
                    e.sort(t);
                    const o = function(t, r) {
                            const l = r - t;
                            let h, c;
                            if (0 === l) return null;
                            if (1 === l) return h = e[t], c = n ? n(h) : h, new Be(c, h.node, Be.BLACK, null, null); {
                                const d = parseInt(l / 2, 10) + t,
                                    _ = o(t, d),
                                    f = o(d + 1, r);
                                return h = e[d], c = n ? n(h) : h, new Be(c, h.node, Be.BLACK, _, f)
                            }
                        },
                        l = function(t) {
                            let r = null,
                                l = null,
                                h = e.length;
                            const c = function(t, r) {
                                    const l = h - t,
                                        c = h;
                                    h -= t;
                                    const _ = o(l + 1, c),
                                        f = e[l],
                                        m = n ? n(f) : f;
                                    d(new Be(m, f.node, r, null, _))
                                },
                                d = function(e) {
                                    r ? (r.left = e, r = e) : (l = e, r = e)
                                };
                            for (let i = 0; i < t.count; ++i) {
                                const e = t.nextBitIsOne(),
                                    n = Math.pow(2, t.count - (i + 1));
                                e ? c(n, Be.BLACK) : (c(n, Be.BLACK), c(n, Be.RED))
                            }
                            return l
                        }(new ot(e.length));
                    return new Ke(r || t, l)
                };
                let lt;
                const ht = {};
                class ct {
                    constructor(e, t) {
                        this.indexes_ = e, this.indexSet_ = t
                    }
                    static get Default() {
                        return Object(l.e)(ht && it, "ChildrenNode.ts has not been loaded"), lt = lt || new ct({
                            ".priority": ht
                        }, {
                            ".priority": it
                        }), lt
                    }
                    get(e) {
                        const t = Object(l.z)(this.indexes_, e);
                        if (!t) throw new Error("No index defined for " + e);
                        return t instanceof Ke ? t : null
                    }
                    hasIndex(e) {
                        return Object(l.j)(this.indexSet_, e.toString())
                    }
                    addIndex(e, t) {
                        Object(l.e)(e !== Ye, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                        const n = [];
                        let r = !1;
                        const o = t.getIterator(We.Wrap);
                        let h, c = o.getNext();
                        for (; c;) r = r || e.isDefinedOn(c.node), n.push(c), c = o.getNext();
                        h = r ? at(n, e.getCompare()) : ht;
                        const d = e.toString(),
                            _ = Object.assign({}, this.indexSet_);
                        _[d] = e;
                        const f = Object.assign({}, this.indexes_);
                        return f[d] = h, new ct(f, _)
                    }
                    addToIndexes(e, t) {
                        const n = Object(l.x)(this.indexes_, ((n, r) => {
                            const o = Object(l.z)(this.indexSet_, r);
                            if (Object(l.e)(o, "Missing index implementation for " + r), n === ht) {
                                if (o.isDefinedOn(e.node)) {
                                    const n = [],
                                        r = t.getIterator(We.Wrap);
                                    let l = r.getNext();
                                    for (; l;) l.name !== e.name && n.push(l), l = r.getNext();
                                    return n.push(e), at(n, o.getCompare())
                                }
                                return ht
                            } {
                                const r = t.get(e.name);
                                let o = n;
                                return r && (o = o.remove(new We(e.name, r))), o.insert(e, e.node)
                            }
                        }));
                        return new ct(n, this.indexSet_)
                    }
                    removeFromIndexes(e, t) {
                        const n = Object(l.x)(this.indexes_, (n => {
                            if (n === ht) return n; {
                                const r = t.get(e.name);
                                return r ? n.remove(new We(e.name, r)) : n
                            }
                        }));
                        return new ct(n, this.indexSet_)
                    }
                }
                let ut;
                class _t {
                    constructor(e, t, n) {
                        this.children_ = e, this.priorityNode_ = t, this.indexMap_ = n, this.lazyHash_ = null, this.priorityNode_ && Je(this.priorityNode_), this.children_.isEmpty() && Object(l.e)(!this.priorityNode_ || this.priorityNode_.isEmpty(), "An empty node cannot have a priority")
                    }
                    static get EMPTY_NODE() {
                        return ut || (ut = new _t(new Ke(Qe), null, ct.Default))
                    }
                    isLeafNode() {
                        return !1
                    }
                    getPriority() {
                        return this.priorityNode_ || ut
                    }
                    updatePriority(e) {
                        return this.children_.isEmpty() ? this : new _t(this.children_, e, this.indexMap_)
                    }
                    getImmediateChild(e) {
                        if (".priority" === e) return this.getPriority(); {
                            const t = this.children_.get(e);
                            return null === t ? ut : t
                        }
                    }
                    getChild(path) {
                        const e = Te(path);
                        return null === e ? this : this.getImmediateChild(e).getChild(ke(path))
                    }
                    hasChild(e) {
                        return null !== this.children_.get(e)
                    }
                    updateImmediateChild(e, t) {
                        if (Object(l.e)(t, "We should always be passing snapshot nodes"), ".priority" === e) return this.updatePriority(t); {
                            const n = new We(e, t);
                            let r, o;
                            t.isEmpty() ? (r = this.children_.remove(e), o = this.indexMap_.removeFromIndexes(n, this.children_)) : (r = this.children_.insert(e, t), o = this.indexMap_.addToIndexes(n, this.children_));
                            const l = r.isEmpty() ? ut : this.priorityNode_;
                            return new _t(r, l, o)
                        }
                    }
                    updateChild(path, e) {
                        const t = Te(path);
                        if (null === t) return e; {
                            Object(l.e)(".priority" !== Te(path) || 1 === Ie(path), ".priority must be the last token in a path");
                            const n = this.getImmediateChild(t).updateChild(ke(path), e);
                            return this.updateImmediateChild(t, n)
                        }
                    }
                    isEmpty() {
                        return this.children_.isEmpty()
                    }
                    numChildren() {
                        return this.children_.count()
                    }
                    val(e) {
                        if (this.isEmpty()) return null;
                        const t = {};
                        let n = 0,
                            r = 0,
                            o = !0;
                        if (this.forEachChild(it, ((l, h) => {
                                t[l] = h.val(e), n++, o && _t.INTEGER_REGEXP_.test(l) ? r = Math.max(r, Number(l)) : o = !1
                            })), !e && o && r < 2 * n) {
                            const e = [];
                            for (const n in t) e[n] = t[n];
                            return e
                        }
                        return e && !this.getPriority().isEmpty() && (t[".priority"] = this.getPriority().val()), t
                    }
                    hash() {
                        if (null === this.lazyHash_) {
                            let e = "";
                            this.getPriority().isEmpty() || (e += "priority:" + Xe(this.getPriority().val()) + ":"), this.forEachChild(it, ((t, n) => {
                                const r = n.hash();
                                "" !== r && (e += ":" + t + ":" + r)
                            })), this.lazyHash_ = "" === e ? "" : I(e)
                        }
                        return this.lazyHash_
                    }
                    getPredecessorChildName(e, t, n) {
                        const r = this.resolveIndex_(n);
                        if (r) {
                            const n = r.getPredecessorKey(new We(e, t));
                            return n ? n.name : null
                        }
                        return this.children_.getPredecessorKey(e)
                    }
                    getFirstChildName(e) {
                        const t = this.resolveIndex_(e);
                        if (t) {
                            const e = t.minKey();
                            return e && e.name
                        }
                        return this.children_.minKey()
                    }
                    getFirstChild(e) {
                        const t = this.getFirstChildName(e);
                        return t ? new We(t, this.children_.get(t)) : null
                    }
                    getLastChildName(e) {
                        const t = this.resolveIndex_(e);
                        if (t) {
                            const e = t.maxKey();
                            return e && e.name
                        }
                        return this.children_.maxKey()
                    }
                    getLastChild(e) {
                        const t = this.getLastChildName(e);
                        return t ? new We(t, this.children_.get(t)) : null
                    }
                    forEachChild(e, t) {
                        const n = this.resolveIndex_(e);
                        return n ? n.inorderTraversal((e => t(e.name, e.node))) : this.children_.inorderTraversal(t)
                    }
                    getIterator(e) {
                        return this.getIteratorFrom(e.minPost(), e)
                    }
                    getIteratorFrom(e, t) {
                        const n = this.resolveIndex_(t);
                        if (n) return n.getIteratorFrom(e, (e => e)); {
                            const n = this.children_.getIteratorFrom(e.name, We.Wrap);
                            let r = n.peek();
                            for (; null != r && t.compare(r, e) < 0;) n.getNext(), r = n.peek();
                            return n
                        }
                    }
                    getReverseIterator(e) {
                        return this.getReverseIteratorFrom(e.maxPost(), e)
                    }
                    getReverseIteratorFrom(e, t) {
                        const n = this.resolveIndex_(t);
                        if (n) return n.getReverseIteratorFrom(e, (e => e)); {
                            const n = this.children_.getReverseIteratorFrom(e.name, We.Wrap);
                            let r = n.peek();
                            for (; null != r && t.compare(r, e) > 0;) n.getNext(), r = n.peek();
                            return n
                        }
                    }
                    compareTo(e) {
                        return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === pt ? -1 : 0
                    }
                    withIndex(e) {
                        if (e === Ye || this.indexMap_.hasIndex(e)) return this; {
                            const t = this.indexMap_.addIndex(e, this.children_);
                            return new _t(this.children_, this.priorityNode_, t)
                        }
                    }
                    isIndexed(e) {
                        return e === Ye || this.indexMap_.hasIndex(e)
                    }
                    equals(e) {
                        if (e === this) return !0;
                        if (e.isLeafNode()) return !1; {
                            const t = e;
                            if (this.getPriority().equals(t.getPriority())) {
                                if (this.children_.count() === t.children_.count()) {
                                    const e = this.getIterator(it),
                                        n = t.getIterator(it);
                                    let r = e.getNext(),
                                        o = n.getNext();
                                    for (; r && o;) {
                                        if (r.name !== o.name || !r.node.equals(o.node)) return !1;
                                        r = e.getNext(), o = n.getNext()
                                    }
                                    return null === r && null === o
                                }
                                return !1
                            }
                            return !1
                        }
                    }
                    resolveIndex_(e) {
                        return e === Ye ? null : this.indexMap_.get(e.toString())
                    }
                }
                _t.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
                const pt = new class extends _t {
                    constructor() {
                        super(new Ke(Qe), _t.EMPTY_NODE, ct.Default)
                    }
                    compareTo(e) {
                        return e === this ? 0 : 1
                    }
                    equals(e) {
                        return e === this
                    }
                    getPriority() {
                        return this
                    }
                    getImmediateChild(e) {
                        return _t.EMPTY_NODE
                    }
                    isEmpty() {
                        return !1
                    }
                };
                Object.defineProperties(We, {
                        MIN: {
                            value: new We(M, _t.EMPTY_NODE)
                        },
                        MAX: {
                            value: new We(F, pt)
                        }
                    }), He.__EMPTY_NODE = _t.EMPTY_NODE, nt.__childrenNodeConstructor = _t, $e = pt,
                    function(e) {
                        tt = e
                    }(pt);

                function ft(e, t = null) {
                    if (null === e) return _t.EMPTY_NODE;
                    if ("object" == typeof e && ".priority" in e && (t = e[".priority"]), Object(l.e)(null === t || "string" == typeof t || "number" == typeof t || "object" == typeof t && ".sv" in t, "Invalid priority type found: " + typeof t), "object" == typeof e && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" != typeof e || ".sv" in e) {
                        return new nt(e, ft(t))
                    }
                    if (e instanceof Array) {
                        let n = _t.EMPTY_NODE;
                        return H(e, ((t, r) => {
                            if (Object(l.j)(e, t) && "." !== t.substring(0, 1)) {
                                const e = ft(r);
                                !e.isLeafNode() && e.isEmpty() || (n = n.updateImmediateChild(t, e))
                            }
                        })), n.updatePriority(ft(t))
                    } {
                        const n = [];
                        let r = !1;
                        if (H(e, ((e, t) => {
                                if ("." !== e.substring(0, 1)) {
                                    const o = ft(t);
                                    o.isEmpty() || (r = r || !o.getPriority().isEmpty(), n.push(new We(e, o)))
                                }
                            })), 0 === n.length) return _t.EMPTY_NODE;
                        const o = at(n, Ge, (e => e.name), Qe);
                        if (r) {
                            const e = at(n, it.getCompare());
                            return new _t(o, ft(t), new ct({
                                ".priority": e
                            }, {
                                ".priority": it
                            }))
                        }
                        return new _t(o, ft(t), ct.Default)
                    }
                }! function(e) {
                    et = e
                }(ft);
                class gt extends Ue {
                    constructor(e) {
                        super(), this.indexPath_ = e, Object(l.e)(!xe(e) && ".priority" !== Te(e), "Can't create PathIndex with empty path or .priority key")
                    }
                    extractChild(e) {
                        return e.getChild(this.indexPath_)
                    }
                    isDefinedOn(e) {
                        return !e.getChild(this.indexPath_).isEmpty()
                    }
                    compare(a, b) {
                        const e = this.extractChild(a.node),
                            t = this.extractChild(b.node),
                            n = e.compareTo(t);
                        return 0 === n ? L(a.name, b.name) : n
                    }
                    makePost(e, t) {
                        const n = ft(e),
                            r = _t.EMPTY_NODE.updateChild(this.indexPath_, n);
                        return new We(t, r)
                    }
                    maxPost() {
                        const e = _t.EMPTY_NODE.updateChild(this.indexPath_, pt);
                        return new We(F, e)
                    }
                    toString() {
                        return Ne(this.indexPath_, 0).join("/")
                    }
                }
                const mt = new class extends Ue {
                        compare(a, b) {
                            const e = a.node.compareTo(b.node);
                            return 0 === e ? L(a.name, b.name) : e
                        }
                        isDefinedOn(e) {
                            return !0
                        }
                        indexedValueChanged(e, t) {
                            return !e.equals(t)
                        }
                        minPost() {
                            return We.MIN
                        }
                        maxPost() {
                            return We.MAX
                        }
                        makePost(e, t) {
                            const n = ft(e);
                            return new We(t, n)
                        }
                        toString() {
                            return ".value"
                        }
                    },
                    yt = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
                ! function() {
                    let e = 0;
                    const t = []
                }();

                function vt(e) {
                    return {
                        type: "value",
                        snapshotNode: e
                    }
                }

                function Ct(e, t) {
                    return {
                        type: "child_added",
                        snapshotNode: t,
                        childName: e
                    }
                }

                function bt(e, t) {
                    return {
                        type: "child_removed",
                        snapshotNode: t,
                        childName: e
                    }
                }

                function wt(e, t, n) {
                    return {
                        type: "child_changed",
                        snapshotNode: t,
                        childName: e,
                        oldSnap: n
                    }
                }
                class Tt {
                    constructor(e) {
                        this.index_ = e
                    }
                    updateChild(e, t, n, r, source, o) {
                        Object(l.e)(e.isIndexed(this.index_), "A node must be indexed if only a child is updated");
                        const h = e.getImmediateChild(t);
                        return h.getChild(r).equals(n.getChild(r)) && h.isEmpty() === n.isEmpty() ? e : (null != o && (n.isEmpty() ? e.hasChild(t) ? o.trackChildChange(bt(t, h)) : Object(l.e)(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : h.isEmpty() ? o.trackChildChange(Ct(t, n)) : o.trackChildChange(wt(t, n, h))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.index_))
                    }
                    updateFullNode(e, t, n) {
                        return null != n && (e.isLeafNode() || e.forEachChild(it, ((e, r) => {
                            t.hasChild(e) || n.trackChildChange(bt(e, r))
                        })), t.isLeafNode() || t.forEachChild(it, ((t, r) => {
                            if (e.hasChild(t)) {
                                const o = e.getImmediateChild(t);
                                o.equals(r) || n.trackChildChange(wt(t, r, o))
                            } else n.trackChildChange(Ct(t, r))
                        }))), t.withIndex(this.index_)
                    }
                    updatePriority(e, t) {
                        return e.isEmpty() ? _t.EMPTY_NODE : e.updatePriority(t)
                    }
                    filtersNodes() {
                        return !1
                    }
                    getIndexedFilter() {
                        return this
                    }
                    getIndex() {
                        return this.index_
                    }
                }
                class It {
                    constructor(e) {
                        this.indexedFilter_ = new Tt(e.getIndex()), this.index_ = e.getIndex(), this.startPost_ = It.getStartPost_(e), this.endPost_ = It.getEndPost_(e)
                    }
                    getStartPost() {
                        return this.startPost_
                    }
                    getEndPost() {
                        return this.endPost_
                    }
                    matches(e) {
                        return this.index_.compare(this.getStartPost(), e) <= 0 && this.index_.compare(e, this.getEndPost()) <= 0
                    }
                    updateChild(e, t, n, r, source, o) {
                        return this.matches(new We(t, n)) || (n = _t.EMPTY_NODE), this.indexedFilter_.updateChild(e, t, n, r, source, o)
                    }
                    updateFullNode(e, t, n) {
                        t.isLeafNode() && (t = _t.EMPTY_NODE);
                        let r = t.withIndex(this.index_);
                        r = r.updatePriority(_t.EMPTY_NODE);
                        const o = this;
                        return t.forEachChild(it, ((e, t) => {
                            o.matches(new We(e, t)) || (r = r.updateImmediateChild(e, _t.EMPTY_NODE))
                        })), this.indexedFilter_.updateFullNode(e, r, n)
                    }
                    updatePriority(e, t) {
                        return e
                    }
                    filtersNodes() {
                        return !0
                    }
                    getIndexedFilter() {
                        return this.indexedFilter_
                    }
                    getIndex() {
                        return this.index_
                    }
                    static getStartPost_(e) {
                        if (e.hasStart()) {
                            const t = e.getIndexStartName();
                            return e.getIndex().makePost(e.getIndexStartValue(), t)
                        }
                        return e.getIndex().minPost()
                    }
                    static getEndPost_(e) {
                        if (e.hasEnd()) {
                            const t = e.getIndexEndName();
                            return e.getIndex().makePost(e.getIndexEndValue(), t)
                        }
                        return e.getIndex().maxPost()
                    }
                }
                class kt {
                    constructor(e) {
                        this.rangedFilter_ = new It(e), this.index_ = e.getIndex(), this.limit_ = e.getLimit(), this.reverse_ = !e.isViewFromLeft()
                    }
                    updateChild(e, t, n, r, source, o) {
                        return this.rangedFilter_.matches(new We(t, n)) || (n = _t.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.limit_ ? this.rangedFilter_.getIndexedFilter().updateChild(e, t, n, r, source, o) : this.fullLimitUpdateChild_(e, t, n, source, o)
                    }
                    updateFullNode(e, t, n) {
                        let r;
                        if (t.isLeafNode() || t.isEmpty()) r = _t.EMPTY_NODE.withIndex(this.index_);
                        else if (2 * this.limit_ < t.numChildren() && t.isIndexed(this.index_)) {
                            let e;
                            r = _t.EMPTY_NODE.withIndex(this.index_), e = this.reverse_ ? t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_) : t.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                            let n = 0;
                            for (; e.hasNext() && n < this.limit_;) {
                                const t = e.getNext();
                                let o;
                                if (o = this.reverse_ ? this.index_.compare(this.rangedFilter_.getStartPost(), t) <= 0 : this.index_.compare(t, this.rangedFilter_.getEndPost()) <= 0, !o) break;
                                r = r.updateImmediateChild(t.name, t.node), n++
                            }
                        } else {
                            let e, n, o, l;
                            if (r = t.withIndex(this.index_), r = r.updatePriority(_t.EMPTY_NODE), this.reverse_) {
                                l = r.getReverseIterator(this.index_), e = this.rangedFilter_.getEndPost(), n = this.rangedFilter_.getStartPost();
                                const t = this.index_.getCompare();
                                o = (a, b) => t(b, a)
                            } else l = r.getIterator(this.index_), e = this.rangedFilter_.getStartPost(), n = this.rangedFilter_.getEndPost(), o = this.index_.getCompare();
                            let h = 0,
                                c = !1;
                            for (; l.hasNext();) {
                                const t = l.getNext();
                                !c && o(e, t) <= 0 && (c = !0);
                                c && h < this.limit_ && o(t, n) <= 0 ? h++ : r = r.updateImmediateChild(t.name, _t.EMPTY_NODE)
                            }
                        }
                        return this.rangedFilter_.getIndexedFilter().updateFullNode(e, r, n)
                    }
                    updatePriority(e, t) {
                        return e
                    }
                    filtersNodes() {
                        return !0
                    }
                    getIndexedFilter() {
                        return this.rangedFilter_.getIndexedFilter()
                    }
                    getIndex() {
                        return this.index_
                    }
                    fullLimitUpdateChild_(e, t, n, source, r) {
                        let o;
                        if (this.reverse_) {
                            const e = this.index_.getCompare();
                            o = (a, b) => e(b, a)
                        } else o = this.index_.getCompare();
                        const h = e;
                        Object(l.e)(h.numChildren() === this.limit_, "");
                        const c = new We(t, n),
                            d = this.reverse_ ? h.getFirstChild(this.index_) : h.getLastChild(this.index_),
                            _ = this.rangedFilter_.matches(c);
                        if (h.hasChild(t)) {
                            const e = h.getImmediateChild(t);
                            let l = source.getChildAfterChild(this.index_, d, this.reverse_);
                            for (; null != l && (l.name === t || h.hasChild(l.name));) l = source.getChildAfterChild(this.index_, l, this.reverse_);
                            const f = null == l ? 1 : o(l, c);
                            if (_ && !n.isEmpty() && f >= 0) return null != r && r.trackChildChange(wt(t, n, e)), h.updateImmediateChild(t, n); {
                                null != r && r.trackChildChange(bt(t, e));
                                const n = h.updateImmediateChild(t, _t.EMPTY_NODE);
                                return null != l && this.rangedFilter_.matches(l) ? (null != r && r.trackChildChange(Ct(l.name, l.node)), n.updateImmediateChild(l.name, l.node)) : n
                            }
                        }
                        return n.isEmpty() ? e : _ && o(d, c) >= 0 ? (null != r && (r.trackChildChange(bt(d.name, d.node)), r.trackChildChange(Ct(t, n))), h.updateImmediateChild(t, n).updateImmediateChild(d.name, _t.EMPTY_NODE)) : e
                    }
                }
                class Et {
                    constructor() {
                        this.limitSet_ = !1, this.startSet_ = !1, this.startNameSet_ = !1, this.startAfterSet_ = !1, this.endSet_ = !1, this.endNameSet_ = !1, this.endBeforeSet_ = !1, this.limit_ = 0, this.viewFrom_ = "", this.indexStartValue_ = null, this.indexStartName_ = "", this.indexEndValue_ = null, this.indexEndName_ = "", this.index_ = it
                    }
                    hasStart() {
                        return this.startSet_
                    }
                    hasStartAfter() {
                        return this.startAfterSet_
                    }
                    hasEndBefore() {
                        return this.endBeforeSet_
                    }
                    isViewFromLeft() {
                        return "" === this.viewFrom_ ? this.startSet_ : "l" === this.viewFrom_
                    }
                    getIndexStartValue() {
                        return Object(l.e)(this.startSet_, "Only valid if start has been set"), this.indexStartValue_
                    }
                    getIndexStartName() {
                        return Object(l.e)(this.startSet_, "Only valid if start has been set"), this.startNameSet_ ? this.indexStartName_ : M
                    }
                    hasEnd() {
                        return this.endSet_
                    }
                    getIndexEndValue() {
                        return Object(l.e)(this.endSet_, "Only valid if end has been set"), this.indexEndValue_
                    }
                    getIndexEndName() {
                        return Object(l.e)(this.endSet_, "Only valid if end has been set"), this.endNameSet_ ? this.indexEndName_ : F
                    }
                    hasLimit() {
                        return this.limitSet_
                    }
                    hasAnchoredLimit() {
                        return this.limitSet_ && "" !== this.viewFrom_
                    }
                    getLimit() {
                        return Object(l.e)(this.limitSet_, "Only valid if limit has been set"), this.limit_
                    }
                    getIndex() {
                        return this.index_
                    }
                    loadsAllData() {
                        return !(this.startSet_ || this.endSet_ || this.limitSet_)
                    }
                    isDefault() {
                        return this.loadsAllData() && this.index_ === it
                    }
                    copy() {
                        const e = new Et;
                        return e.limitSet_ = this.limitSet_, e.limit_ = this.limit_, e.startSet_ = this.startSet_, e.indexStartValue_ = this.indexStartValue_, e.startNameSet_ = this.startNameSet_, e.indexStartName_ = this.indexStartName_, e.endSet_ = this.endSet_, e.indexEndValue_ = this.indexEndValue_, e.endNameSet_ = this.endNameSet_, e.indexEndName_ = this.indexEndName_, e.index_ = this.index_, e.viewFrom_ = this.viewFrom_, e
                    }
                }

                function Nt(e) {
                    const t = {};
                    if (e.isDefault()) return t;
                    let n;
                    return e.index_ === it ? n = "$priority" : e.index_ === mt ? n = "$value" : e.index_ === Ye ? n = "$key" : (Object(l.e)(e.index_ instanceof gt, "Unrecognized index type!"), n = e.index_.toString()), t.orderBy = Object(l.C)(n), e.startSet_ && (t.startAt = Object(l.C)(e.indexStartValue_), e.startNameSet_ && (t.startAt += "," + Object(l.C)(e.indexStartName_))), e.endSet_ && (t.endAt = Object(l.C)(e.indexEndValue_), e.endNameSet_ && (t.endAt += "," + Object(l.C)(e.indexEndName_))), e.limitSet_ && (e.isViewFromLeft() ? t.limitToFirst = e.limit_ : t.limitToLast = e.limit_), t
                }

                function St(e) {
                    const t = {};
                    if (e.startSet_ && (t.sp = e.indexStartValue_, e.startNameSet_ && (t.sn = e.indexStartName_)), e.endSet_ && (t.ep = e.indexEndValue_, e.endNameSet_ && (t.en = e.indexEndName_)), e.limitSet_) {
                        t.l = e.limit_;
                        let n = e.viewFrom_;
                        "" === n && (n = e.isViewFromLeft() ? "l" : "r"), t.vf = n
                    }
                    return e.index_ !== it && (t.i = e.index_.toString()), t
                }
                class Pt extends ye {
                    constructor(e, t, n, r) {
                        super(), this.repoInfo_ = e, this.onDataUpdate_ = t, this.authTokenProvider_ = n, this.appCheckTokenProvider_ = r, this.log_ = x("p:rest:"), this.listens_ = {}
                    }
                    reportStats(e) {
                        throw new Error("Method not implemented.")
                    }
                    static getListenId_(e, t) {
                        return void 0 !== t ? "tag$" + t : (Object(l.e)(e._queryParams.isDefault(), "should have a tag if it's not a default query."), e._path.toString())
                    }
                    listen(e, t, n, r) {
                        const o = e._path.toString();
                        this.log_("Listen called for " + o + " " + e._queryIdentifier);
                        const h = Pt.getListenId_(e, n),
                            c = {};
                        this.listens_[h] = c;
                        const d = Nt(e._queryParams);
                        this.restRequest_(o + ".json", d, ((e, t) => {
                            let data = t;
                            if (404 === e && (data = null, e = null), null === e && this.onDataUpdate_(o, data, !1, n), Object(l.z)(this.listens_, h) === c) {
                                let t;
                                t = e ? 401 === e ? "permission_denied" : "rest_error:" + e : "ok", r(t, null)
                            }
                        }))
                    }
                    unlisten(e, t) {
                        const n = Pt.getListenId_(e, t);
                        delete this.listens_[n]
                    }
                    get(e) {
                        const t = Nt(e._queryParams),
                            n = e._path.toString(),
                            r = new l.a;
                        return this.restRequest_(n + ".json", t, ((e, t) => {
                            let data = t;
                            404 === e && (data = null, e = null), null === e ? (this.onDataUpdate_(n, data, !1, null), r.resolve(data)) : r.reject(new Error(data))
                        })), r.promise
                    }
                    refreshAuthToken(e) {}
                    restRequest_(e, t = {}, n) {
                        return t.format = "export", Promise.all([this.authTokenProvider_.getToken(!1), this.appCheckTokenProvider_.getToken(!1)]).then((([r, o]) => {
                            r && r.accessToken && (t.auth = r.accessToken), o && o.token && (t.ac = o.token);
                            const h = (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host + e + "?ns=" + this.repoInfo_.namespace + Object(l.y)(t);
                            this.log_("Sending REST request for " + h);
                            const c = new XMLHttpRequest;
                            c.onreadystatechange = () => {
                                if (n && 4 === c.readyState) {
                                    this.log_("REST Response for " + h + " received. status:", c.status, "response:", c.responseText);
                                    let e = null;
                                    if (c.status >= 200 && c.status < 300) {
                                        try {
                                            e = Object(l.w)(c.responseText)
                                        } catch (e) {
                                            j("Failed to parse JSON response for " + h + ": " + c.responseText)
                                        }
                                        n(null, e)
                                    } else 401 !== c.status && 404 !== c.status && j("Got unsuccessful REST response for " + h + " Status: " + c.status), n(c.status);
                                    n = null
                                }
                            }, c.open("GET", h, !0), c.send()
                        }))
                    }
                }
                class xt {
                    constructor() {
                        this.rootNode_ = _t.EMPTY_NODE
                    }
                    getNode(path) {
                        return this.rootNode_.getChild(path)
                    }
                    updateSnapshot(path, e) {
                        this.rootNode_ = this.rootNode_.updateChild(path, e)
                    }
                }

                function Ot() {
                    return {
                        value: null,
                        children: new Map
                    }
                }

                function Rt(e, path, data) {
                    if (xe(path)) e.value = data, e.children.clear();
                    else if (null !== e.value) e.value = e.value.updateChild(path, data);
                    else {
                        const t = Te(path);
                        e.children.has(t) || e.children.set(t, Ot());
                        Rt(e.children.get(t), path = ke(path), data)
                    }
                }

                function jt(e, t, n) {
                    null !== e.value ? n(t, e.value) : function(e, t) {
                        e.children.forEach(((e, n) => {
                            t(n, e)
                        }))
                    }(e, ((e, r) => {
                        jt(r, new be(t.toString() + "/" + e), n)
                    }))
                }
                class Dt {
                    constructor(e) {
                        this.collection_ = e, this.last_ = null
                    }
                    get() {
                        const e = this.collection_.get(),
                            t = Object.assign({}, e);
                        return this.last_ && H(this.last_, ((e, n) => {
                            t[e] = t[e] - n
                        })), this.last_ = e, t
                    }
                }
                class Mt {
                    constructor(e, t) {
                        this.server_ = t, this.statsToReport_ = {}, this.statsListener_ = new Dt(e);
                        const n = 1e4 + 2e4 * Math.random();
                        $(this.reportStats_.bind(this), Math.floor(n))
                    }
                    reportStats_() {
                        const e = this.statsListener_.get(),
                            t = {};
                        let n = !1;
                        H(e, ((e, r) => {
                            r > 0 && Object(l.j)(this.statsToReport_, e) && (t[e] = r, n = !0)
                        })), n && this.server_.reportStats(t), $(this.reportStats_.bind(this), Math.floor(2 * Math.random() * 3e5))
                    }
                }
                var Ft;

                function qt(e) {
                    return {
                        fromUser: !1,
                        fromServer: !0,
                        queryId: e,
                        tagged: !0
                    }
                }! function(e) {
                    e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
                }(Ft || (Ft = {}));
                class Lt {
                    constructor(path, e, t) {
                        this.path = path, this.affectedTree = e, this.revert = t, this.type = Ft.ACK_USER_WRITE, this.source = {
                            fromUser: !0,
                            fromServer: !1,
                            queryId: null,
                            tagged: !1
                        }
                    }
                    operationForChild(e) {
                        if (xe(this.path)) {
                            if (null != this.affectedTree.value) return Object(l.e)(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this; {
                                const t = this.affectedTree.subtree(new be(e));
                                return new Lt(we(), t, this.revert)
                            }
                        }
                        return Object(l.e)(Te(this.path) === e, "operationForChild called for unrelated child."), new Lt(ke(this.path), this.affectedTree, this.revert)
                    }
                }
                class At {
                    constructor(source, path) {
                        this.source = source, this.path = path, this.type = Ft.LISTEN_COMPLETE
                    }
                    operationForChild(e) {
                        return xe(this.path) ? new At(this.source, we()) : new At(this.source, ke(this.path))
                    }
                }
                class Wt {
                    constructor(source, path, e) {
                        this.source = source, this.path = path, this.snap = e, this.type = Ft.OVERWRITE
                    }
                    operationForChild(e) {
                        return xe(this.path) ? new Wt(this.source, we(), this.snap.getImmediateChild(e)) : new Wt(this.source, ke(this.path), this.snap)
                    }
                }
                class Ut {
                    constructor(source, path, e) {
                        this.source = source, this.path = path, this.children = e, this.type = Ft.MERGE
                    }
                    operationForChild(e) {
                        if (xe(this.path)) {
                            const t = this.children.subtree(new be(e));
                            return t.isEmpty() ? null : t.value ? new Wt(this.source, we(), t.value) : new Ut(this.source, we(), t)
                        }
                        return Object(l.e)(Te(this.path) === e, "Can't get a merge for a child not on the path of the operation"), new Ut(this.source, ke(this.path), this.children)
                    }
                    toString() {
                        return "Operation(" + this.path + ": " + this.source.toString() + " merge: " + this.children.toString() + ")"
                    }
                }
                class zt {
                    constructor(e, t, n) {
                        this.node_ = e, this.fullyInitialized_ = t, this.filtered_ = n
                    }
                    isFullyInitialized() {
                        return this.fullyInitialized_
                    }
                    isFiltered() {
                        return this.filtered_
                    }
                    isCompleteForPath(path) {
                        if (xe(path)) return this.isFullyInitialized() && !this.filtered_;
                        const e = Te(path);
                        return this.isCompleteForChild(e)
                    }
                    isCompleteForChild(e) {
                        return this.isFullyInitialized() && !this.filtered_ || this.node_.hasChild(e)
                    }
                    getNode() {
                        return this.node_
                    }
                }
                class Ht {
                    constructor(e) {
                        this.query_ = e, this.index_ = this.query_._queryParams.getIndex()
                    }
                }

                function Yt(e, t, n, r, o, h) {
                    const c = r.filter((e => e.type === n));
                    c.sort(((a, b) => function(e, a, b) {
                        if (null == a.childName || null == b.childName) throw Object(l.f)("Should only compare child_ events.");
                        const t = new We(a.childName, a.snapshotNode),
                            n = new We(b.childName, b.snapshotNode);
                        return e.index_.compare(t, n)
                    }(e, a, b))), c.forEach((n => {
                        const r = function(e, t, n) {
                            return "value" === t.type || "child_removed" === t.type || (t.prevName = n.getPredecessorChildName(t.childName, t.snapshotNode, e.index_)), t
                        }(e, n, h);
                        o.forEach((o => {
                            o.respondsTo(n.type) && t.push(o.createEvent(r, e.query_))
                        }))
                    }))
                }

                function Vt(e, t) {
                    return {
                        eventCache: e,
                        serverCache: t
                    }
                }

                function Bt(e, t, n, r) {
                    return Vt(new zt(t, n, r), e.serverCache)
                }

                function Kt(e, t, n, r) {
                    return Vt(e.eventCache, new zt(t, n, r))
                }

                function Gt(e) {
                    return e.eventCache.isFullyInitialized() ? e.eventCache.getNode() : null
                }

                function Qt(e) {
                    return e.serverCache.isFullyInitialized() ? e.serverCache.getNode() : null
                }
                let $t;
                class Xt {
                    constructor(e, t = (() => ($t || ($t = new Ke(A)), $t))()) {
                        this.value = e, this.children = t
                    }
                    static fromObject(e) {
                        let t = new Xt(null);
                        return H(e, ((e, n) => {
                            t = t.set(new be(e), n)
                        })), t
                    }
                    isEmpty() {
                        return null === this.value && this.children.isEmpty()
                    }
                    findRootMostMatchingPathAndValue(e, t) {
                        if (null != this.value && t(this.value)) return {
                            path: we(),
                            value: this.value
                        };
                        if (xe(e)) return null; {
                            const n = Te(e),
                                r = this.children.get(n);
                            if (null !== r) {
                                const o = r.findRootMostMatchingPathAndValue(ke(e), t);
                                if (null != o) {
                                    return {
                                        path: Pe(new be(n), o.path),
                                        value: o.value
                                    }
                                }
                                return null
                            }
                            return null
                        }
                    }
                    findRootMostValueAndPath(e) {
                        return this.findRootMostMatchingPathAndValue(e, (() => !0))
                    }
                    subtree(e) {
                        if (xe(e)) return this; {
                            const t = Te(e),
                                n = this.children.get(t);
                            return null !== n ? n.subtree(ke(e)) : new Xt(null)
                        }
                    }
                    set(e, t) {
                        if (xe(e)) return new Xt(t, this.children); {
                            const n = Te(e),
                                r = (this.children.get(n) || new Xt(null)).set(ke(e), t),
                                o = this.children.insert(n, r);
                            return new Xt(this.value, o)
                        }
                    }
                    remove(e) {
                        if (xe(e)) return this.children.isEmpty() ? new Xt(null) : new Xt(null, this.children); {
                            const t = Te(e),
                                n = this.children.get(t);
                            if (n) {
                                const r = n.remove(ke(e));
                                let o;
                                return o = r.isEmpty() ? this.children.remove(t) : this.children.insert(t, r), null === this.value && o.isEmpty() ? new Xt(null) : new Xt(this.value, o)
                            }
                            return this
                        }
                    }
                    get(e) {
                        if (xe(e)) return this.value; {
                            const t = Te(e),
                                n = this.children.get(t);
                            return n ? n.get(ke(e)) : null
                        }
                    }
                    setTree(e, t) {
                        if (xe(e)) return t; {
                            const n = Te(e),
                                r = (this.children.get(n) || new Xt(null)).setTree(ke(e), t);
                            let o;
                            return o = r.isEmpty() ? this.children.remove(n) : this.children.insert(n, r), new Xt(this.value, o)
                        }
                    }
                    fold(e) {
                        return this.fold_(we(), e)
                    }
                    fold_(e, t) {
                        const n = {};
                        return this.children.inorderTraversal(((r, o) => {
                            n[r] = o.fold_(Pe(e, r), t)
                        })), t(e, this.value, n)
                    }
                    findOnPath(path, e) {
                        return this.findOnPath_(path, we(), e)
                    }
                    findOnPath_(e, t, n) {
                        const r = !!this.value && n(t, this.value);
                        if (r) return r;
                        if (xe(e)) return null; {
                            const r = Te(e),
                                o = this.children.get(r);
                            return o ? o.findOnPath_(ke(e), Pe(t, r), n) : null
                        }
                    }
                    foreachOnPath(path, e) {
                        return this.foreachOnPath_(path, we(), e)
                    }
                    foreachOnPath_(e, t, n) {
                        if (xe(e)) return this; {
                            this.value && n(t, this.value);
                            const r = Te(e),
                                o = this.children.get(r);
                            return o ? o.foreachOnPath_(ke(e), Pe(t, r), n) : new Xt(null)
                        }
                    }
                    foreach(e) {
                        this.foreach_(we(), e)
                    }
                    foreach_(e, t) {
                        this.children.inorderTraversal(((n, r) => {
                            r.foreach_(Pe(e, n), t)
                        })), this.value && t(e, this.value)
                    }
                    foreachChild(e) {
                        this.children.inorderTraversal(((t, n) => {
                            n.value && e(t, n.value)
                        }))
                    }
                }
                class Jt {
                    constructor(e) {
                        this.writeTree_ = e
                    }
                    static empty() {
                        return new Jt(new Xt(null))
                    }
                }

                function Zt(e, path, t) {
                    if (xe(path)) return new Jt(new Xt(t)); {
                        const n = e.writeTree_.findRootMostValueAndPath(path);
                        if (null != n) {
                            const r = n.path;
                            let o = n.value;
                            const l = Oe(r, path);
                            return o = o.updateChild(l, t), new Jt(e.writeTree_.set(r, o))
                        } {
                            const n = new Xt(t),
                                r = e.writeTree_.setTree(path, n);
                            return new Jt(r)
                        }
                    }
                }

                function en(e, path, t) {
                    let n = e;
                    return H(t, ((e, t) => {
                        n = Zt(n, Pe(path, e), t)
                    })), n
                }

                function tn(e, path) {
                    if (xe(path)) return Jt.empty(); {
                        const t = e.writeTree_.setTree(path, new Xt(null));
                        return new Jt(t)
                    }
                }

                function nn(e, path) {
                    return null != sn(e, path)
                }

                function sn(e, path) {
                    const t = e.writeTree_.findRootMostValueAndPath(path);
                    return null != t ? e.writeTree_.get(t.path).getChild(Oe(t.path, path)) : null
                }

                function rn(e) {
                    const t = [],
                        n = e.writeTree_.value;
                    return null != n ? n.isLeafNode() || n.forEachChild(it, ((e, n) => {
                        t.push(new We(e, n))
                    })) : e.writeTree_.children.inorderTraversal(((e, n) => {
                        null != n.value && t.push(new We(e, n.value))
                    })), t
                }

                function on(e, path) {
                    if (xe(path)) return e; {
                        const t = sn(e, path);
                        return new Jt(null != t ? new Xt(t) : e.writeTree_.subtree(path))
                    }
                }

                function an(e) {
                    return e.writeTree_.isEmpty()
                }

                function ln(e, t) {
                    return hn(we(), e.writeTree_, t)
                }

                function hn(e, t, n) {
                    if (null != t.value) return n.updateChild(e, t.value); {
                        let r = null;
                        return t.children.inorderTraversal(((t, o) => {
                            ".priority" === t ? (Object(l.e)(null !== o.value, "Priority writes must always be leaf nodes"), r = o.value) : n = hn(Pe(e, t), o, n)
                        })), n.getChild(e).isEmpty() || null === r || (n = n.updateChild(Pe(e, ".priority"), r)), n
                    }
                }

                function cn(e, path) {
                    return Tn(path, e)
                }

                function un(e, t) {
                    const n = e.allWrites.findIndex((s => s.writeId === t));
                    Object(l.e)(n >= 0, "removeWrite called with nonexistent writeId.");
                    const r = e.allWrites[n];
                    e.allWrites.splice(n, 1);
                    let o = r.visible,
                        h = !1,
                        i = e.allWrites.length - 1;
                    for (; o && i >= 0;) {
                        const t = e.allWrites[i];
                        t.visible && (i >= n && dn(t, r.path) ? o = !1 : je(r.path, t.path) && (h = !0)), i--
                    }
                    if (o) {
                        if (h) return function(e) {
                            e.visibleWrites = pn(e.allWrites, _n, we()), e.allWrites.length > 0 ? e.lastWriteId = e.allWrites[e.allWrites.length - 1].writeId : e.lastWriteId = -1
                        }(e), !0;
                        if (r.snap) e.visibleWrites = tn(e.visibleWrites, r.path);
                        else {
                            H(r.children, (t => {
                                e.visibleWrites = tn(e.visibleWrites, Pe(r.path, t))
                            }))
                        }
                        return !0
                    }
                    return !1
                }

                function dn(e, path) {
                    if (e.snap) return je(e.path, path);
                    for (const t in e.children)
                        if (e.children.hasOwnProperty(t) && je(Pe(e.path, t), path)) return !0;
                    return !1
                }

                function _n(e) {
                    return e.visible
                }

                function pn(e, filter, t) {
                    let n = Jt.empty();
                    for (let i = 0; i < e.length; ++i) {
                        const r = e[i];
                        if (filter(r)) {
                            const e = r.path;
                            let o;
                            if (r.snap) je(t, e) ? (o = Oe(t, e), n = Zt(n, o, r.snap)) : je(e, t) && (o = Oe(e, t), n = Zt(n, we(), r.snap.getChild(o)));
                            else {
                                if (!r.children) throw Object(l.f)("WriteRecord should have .snap or .children");
                                if (je(t, e)) o = Oe(t, e), n = en(n, o, r.children);
                                else if (je(e, t))
                                    if (o = Oe(e, t), xe(o)) n = en(n, we(), r.children);
                                    else {
                                        const e = Object(l.z)(r.children, Te(o));
                                        if (e) {
                                            const t = e.getChild(ke(o));
                                            n = Zt(n, we(), t)
                                        }
                                    }
                            }
                        }
                    }
                    return n
                }

                function fn(e, t, n, r, o) {
                    if (r || o) {
                        const l = on(e.visibleWrites, t);
                        if (!o && an(l)) return n;
                        if (o || null != n || nn(l, we())) {
                            const filter = function(e) {
                                return (e.visible || o) && (!r || !~r.indexOf(e.writeId)) && (je(e.path, t) || je(t, e.path))
                            };
                            return ln(pn(e.allWrites, filter, t), n || _t.EMPTY_NODE)
                        }
                        return null
                    } {
                        const r = sn(e.visibleWrites, t);
                        if (null != r) return r; {
                            const r = on(e.visibleWrites, t);
                            if (an(r)) return n;
                            if (null != n || nn(r, we())) {
                                return ln(r, n || _t.EMPTY_NODE)
                            }
                            return null
                        }
                    }
                }

                function gn(e, t, n, r) {
                    return fn(e.writeTree, e.treePath, t, n, r)
                }

                function mn(e, t) {
                    return function(e, t, n) {
                        let r = _t.EMPTY_NODE;
                        const o = sn(e.visibleWrites, t);
                        if (o) return o.isLeafNode() || o.forEachChild(it, ((e, t) => {
                            r = r.updateImmediateChild(e, t)
                        })), r;
                        if (n) {
                            const o = on(e.visibleWrites, t);
                            return n.forEachChild(it, ((e, t) => {
                                const n = ln(on(o, new be(e)), t);
                                r = r.updateImmediateChild(e, n)
                            })), rn(o).forEach((e => {
                                r = r.updateImmediateChild(e.name, e.node)
                            })), r
                        }
                        return rn(on(e.visibleWrites, t)).forEach((e => {
                            r = r.updateImmediateChild(e.name, e.node)
                        })), r
                    }(e.writeTree, e.treePath, t)
                }

                function yn(e, path, t, n) {
                    return function(e, t, n, r, o) {
                        Object(l.e)(r || o, "Either existingEventSnap or existingServerSnap must exist");
                        const path = Pe(t, n);
                        if (nn(e.visibleWrites, path)) return null; {
                            const t = on(e.visibleWrites, path);
                            return an(t) ? o.getChild(n) : ln(t, o.getChild(n))
                        }
                    }(e.writeTree, e.treePath, path, t, n)
                }

                function vn(e, path) {
                    return function(e, path) {
                        return sn(e.visibleWrites, path)
                    }(e.writeTree, Pe(e.treePath, path))
                }

                function Cn(e, t, n, r, o, l) {
                    return function(e, t, n, r, o, l, h) {
                        let c;
                        const d = on(e.visibleWrites, t),
                            _ = sn(d, we());
                        if (null != _) c = _;
                        else {
                            if (null == n) return [];
                            c = ln(d, n)
                        }
                        if (c = c.withIndex(h), c.isEmpty() || c.isLeafNode()) return []; {
                            const e = [],
                                t = h.getCompare(),
                                n = l ? c.getReverseIteratorFrom(r, h) : c.getIteratorFrom(r, h);
                            let d = n.getNext();
                            for (; d && e.length < o;) 0 !== t(d, r) && e.push(d), d = n.getNext();
                            return e
                        }
                    }(e.writeTree, e.treePath, t, n, r, o, l)
                }

                function bn(e, t, n) {
                    return function(e, t, n, r) {
                        const path = Pe(t, n),
                            o = sn(e.visibleWrites, path);
                        if (null != o) return o;
                        if (r.isCompleteForChild(n)) return ln(on(e.visibleWrites, path), r.getNode().getImmediateChild(n));
                        return null
                    }(e.writeTree, e.treePath, t, n)
                }

                function wn(e, t) {
                    return Tn(Pe(e.treePath, t), e.writeTree)
                }

                function Tn(path, e) {
                    return {
                        treePath: path,
                        writeTree: e
                    }
                }
                class In {
                    constructor() {
                        this.changeMap = new Map
                    }
                    trackChildChange(e) {
                        const t = e.type,
                            n = e.childName;
                        Object(l.e)("child_added" === t || "child_changed" === t || "child_removed" === t, "Only child changes supported for tracking"), Object(l.e)(".priority" !== n, "Only non-priority child changes can be tracked.");
                        const r = this.changeMap.get(n);
                        if (r) {
                            const o = r.type;
                            if ("child_added" === t && "child_removed" === o) this.changeMap.set(n, wt(n, e.snapshotNode, r.snapshotNode));
                            else if ("child_removed" === t && "child_added" === o) this.changeMap.delete(n);
                            else if ("child_removed" === t && "child_changed" === o) this.changeMap.set(n, bt(n, r.oldSnap));
                            else if ("child_changed" === t && "child_added" === o) this.changeMap.set(n, Ct(n, e.snapshotNode));
                            else {
                                if ("child_changed" !== t || "child_changed" !== o) throw Object(l.f)("Illegal combination of changes: " + e + " occurred after " + r);
                                this.changeMap.set(n, wt(n, e.snapshotNode, r.oldSnap))
                            }
                        } else this.changeMap.set(n, e)
                    }
                    getChanges() {
                        return Array.from(this.changeMap.values())
                    }
                }
                const kn = new class {
                    getCompleteChild(e) {
                        return null
                    }
                    getChildAfterChild(e, t, n) {
                        return null
                    }
                };
                class En {
                    constructor(e, t, n = null) {
                        this.writes_ = e, this.viewCache_ = t, this.optCompleteServerCache_ = n
                    }
                    getCompleteChild(e) {
                        const t = this.viewCache_.eventCache;
                        if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e); {
                            const t = null != this.optCompleteServerCache_ ? new zt(this.optCompleteServerCache_, !0, !1) : this.viewCache_.serverCache;
                            return bn(this.writes_, e, t)
                        }
                    }
                    getChildAfterChild(e, t, n) {
                        const r = null != this.optCompleteServerCache_ ? this.optCompleteServerCache_ : Qt(this.viewCache_),
                            o = Cn(this.writes_, r, t, 1, n, e);
                        return 0 === o.length ? null : o[0]
                    }
                }

                function Nn(e, t, n, r, o) {
                    const h = new In;
                    let c, d;
                    if (n.type === Ft.OVERWRITE) {
                        const _ = n;
                        _.source.fromUser ? c = xn(e, t, _.path, _.snap, r, o, h) : (Object(l.e)(_.source.fromServer, "Unknown source."), d = _.source.tagged || t.serverCache.isFiltered() && !xe(_.path), c = Pn(e, t, _.path, _.snap, r, o, d, h))
                    } else if (n.type === Ft.MERGE) {
                        const _ = n;
                        _.source.fromUser ? c = function(e, t, path, n, r, o, l) {
                            let h = t;
                            return n.foreach(((n, c) => {
                                const d = Pe(path, n);
                                On(t, Te(d)) && (h = xn(e, h, d, c, r, o, l))
                            })), n.foreach(((n, c) => {
                                const d = Pe(path, n);
                                On(t, Te(d)) || (h = xn(e, h, d, c, r, o, l))
                            })), h
                        }(e, t, _.path, _.children, r, o, h) : (Object(l.e)(_.source.fromServer, "Unknown source."), d = _.source.tagged || t.serverCache.isFiltered(), c = jn(e, t, _.path, _.children, r, o, d, h))
                    } else if (n.type === Ft.ACK_USER_WRITE) {
                        const d = n;
                        c = d.revert ? function(e, t, path, n, r, o) {
                            let h;
                            if (null != vn(n, path)) return t; {
                                const source = new En(n, t, r),
                                    c = t.eventCache.getNode();
                                let d;
                                if (xe(path) || ".priority" === Te(path)) {
                                    let r;
                                    if (t.serverCache.isFullyInitialized()) r = gn(n, Qt(t));
                                    else {
                                        const e = t.serverCache.getNode();
                                        Object(l.e)(e instanceof _t, "serverChildren would be complete if leaf node"), r = mn(n, e)
                                    }
                                    d = e.filter.updateFullNode(c, r, o)
                                } else {
                                    const r = Te(path);
                                    let l = bn(n, r, t.serverCache);
                                    null == l && t.serverCache.isCompleteForChild(r) && (l = c.getImmediateChild(r)), d = null != l ? e.filter.updateChild(c, r, l, ke(path), source, o) : t.eventCache.getNode().hasChild(r) ? e.filter.updateChild(c, r, _t.EMPTY_NODE, ke(path), source, o) : c, d.isEmpty() && t.serverCache.isFullyInitialized() && (h = gn(n, Qt(t)), h.isLeafNode() && (d = e.filter.updateFullNode(d, h, o)))
                                }
                                return h = t.serverCache.isFullyInitialized() || null != vn(n, we()), Bt(t, d, h, e.filter.filtersNodes())
                            }
                        }(e, t, d.path, r, o, h) : function(e, t, n, r, o, l, h) {
                            if (null != vn(o, n)) return t;
                            const c = t.serverCache.isFiltered(),
                                d = t.serverCache;
                            if (null != r.value) {
                                if (xe(n) && d.isFullyInitialized() || d.isCompleteForPath(n)) return Pn(e, t, n, d.getNode().getChild(n), o, l, c, h);
                                if (xe(n)) {
                                    let r = new Xt(null);
                                    return d.getNode().forEachChild(Ye, ((e, t) => {
                                        r = r.set(new be(e), t)
                                    })), jn(e, t, n, r, o, l, c, h)
                                }
                                return t
                            } {
                                let _ = new Xt(null);
                                return r.foreach(((e, t) => {
                                    const r = Pe(n, e);
                                    d.isCompleteForPath(r) && (_ = _.set(e, d.getNode().getChild(r)))
                                })), jn(e, t, n, _, o, l, c, h)
                            }
                        }(e, t, d.path, d.affectedTree, r, o, h)
                    } else {
                        if (n.type !== Ft.LISTEN_COMPLETE) throw Object(l.f)("Unknown operation type: " + n.type);
                        c = function(e, t, path, n, r) {
                            const o = t.serverCache,
                                l = Kt(t, o.getNode(), o.isFullyInitialized() || xe(path), o.isFiltered());
                            return Sn(e, l, path, n, kn, r)
                        }(e, t, n.path, r, h)
                    }
                    const _ = h.getChanges();
                    return function(e, t, n) {
                        const r = t.eventCache;
                        if (r.isFullyInitialized()) {
                            const o = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                                l = Gt(e);
                            (n.length > 0 || !e.eventCache.isFullyInitialized() || o && !r.getNode().equals(l) || !r.getNode().getPriority().equals(l.getPriority())) && n.push(vt(Gt(t)))
                        }
                    }(t, c, _), {
                        viewCache: c,
                        changes: _
                    }
                }

                function Sn(e, t, n, r, source, o) {
                    const h = t.eventCache;
                    if (null != vn(r, n)) return t; {
                        let c, d;
                        if (xe(n))
                            if (Object(l.e)(t.serverCache.isFullyInitialized(), "If change path is empty, we must have complete server data"), t.serverCache.isFiltered()) {
                                const n = Qt(t),
                                    l = mn(r, n instanceof _t ? n : _t.EMPTY_NODE);
                                c = e.filter.updateFullNode(t.eventCache.getNode(), l, o)
                            } else {
                                const n = gn(r, Qt(t));
                                c = e.filter.updateFullNode(t.eventCache.getNode(), n, o)
                            }
                        else {
                            const _ = Te(n);
                            if (".priority" === _) {
                                Object(l.e)(1 === Ie(n), "Can't have a priority with additional path components");
                                const o = h.getNode();
                                d = t.serverCache.getNode();
                                const _ = yn(r, n, o, d);
                                c = null != _ ? e.filter.updatePriority(o, _) : h.getNode()
                            } else {
                                const l = ke(n);
                                let f;
                                if (h.isCompleteForChild(_)) {
                                    d = t.serverCache.getNode();
                                    const e = yn(r, n, h.getNode(), d);
                                    f = null != e ? h.getNode().getImmediateChild(_).updateChild(l, e) : h.getNode().getImmediateChild(_)
                                } else f = bn(r, _, t.serverCache);
                                c = null != f ? e.filter.updateChild(h.getNode(), _, f, l, source, o) : h.getNode()
                            }
                        }
                        return Bt(t, c, h.isFullyInitialized() || xe(n), e.filter.filtersNodes())
                    }
                }

                function Pn(e, t, n, r, o, l, h, c) {
                    const d = t.serverCache;
                    let _;
                    const f = h ? e.filter : e.filter.getIndexedFilter();
                    if (xe(n)) _ = f.updateFullNode(d.getNode(), r, null);
                    else if (f.filtersNodes() && !d.isFiltered()) {
                        const e = d.getNode().updateChild(n, r);
                        _ = f.updateFullNode(d.getNode(), e, null)
                    } else {
                        const e = Te(n);
                        if (!d.isCompleteForPath(n) && Ie(n) > 1) return t;
                        const o = ke(n),
                            l = d.getNode().getImmediateChild(e).updateChild(o, r);
                        _ = ".priority" === e ? f.updatePriority(d.getNode(), l) : f.updateChild(d.getNode(), e, l, o, kn, null)
                    }
                    const m = Kt(t, _, d.isFullyInitialized() || xe(n), f.filtersNodes());
                    return Sn(e, m, n, o, new En(o, m, l), c)
                }

                function xn(e, t, n, r, o, l, h) {
                    const c = t.eventCache;
                    let d, _;
                    const source = new En(o, t, l);
                    if (xe(n)) _ = e.filter.updateFullNode(t.eventCache.getNode(), r, h), d = Bt(t, _, !0, e.filter.filtersNodes());
                    else {
                        const o = Te(n);
                        if (".priority" === o) _ = e.filter.updatePriority(t.eventCache.getNode(), r), d = Bt(t, _, c.isFullyInitialized(), c.isFiltered());
                        else {
                            const l = ke(n),
                                _ = c.getNode().getImmediateChild(o);
                            let f;
                            if (xe(l)) f = r;
                            else {
                                const e = source.getCompleteChild(o);
                                f = null != e ? ".priority" === Ee(l) && e.getChild(Se(l)).isEmpty() ? e : e.updateChild(l, r) : _t.EMPTY_NODE
                            }
                            if (_.equals(f)) d = t;
                            else {
                                d = Bt(t, e.filter.updateChild(c.getNode(), o, f, l, source, h), c.isFullyInitialized(), e.filter.filtersNodes())
                            }
                        }
                    }
                    return d
                }

                function On(e, t) {
                    return e.eventCache.isCompleteForChild(t)
                }

                function Rn(e, t, n) {
                    return n.foreach(((e, n) => {
                        t = t.updateChild(e, n)
                    })), t
                }

                function jn(e, t, path, n, r, o, l, h) {
                    if (t.serverCache.getNode().isEmpty() && !t.serverCache.isFullyInitialized()) return t;
                    let c, d = t;
                    c = xe(path) ? n : new Xt(null).setTree(path, n);
                    const _ = t.serverCache.getNode();
                    return c.children.inorderTraversal(((n, c) => {
                        if (_.hasChild(n)) {
                            const _ = Rn(0, t.serverCache.getNode().getImmediateChild(n), c);
                            d = Pn(e, d, new be(n), _, r, o, l, h)
                        }
                    })), c.children.inorderTraversal(((n, c) => {
                        const f = !t.serverCache.isCompleteForChild(n) && null === c.value;
                        if (!_.hasChild(n) && !f) {
                            const _ = Rn(0, t.serverCache.getNode().getImmediateChild(n), c);
                            d = Pn(e, d, new be(n), _, r, o, l, h)
                        }
                    })), d
                }
                class Dn {
                    constructor(e, t) {
                        this.query_ = e, this.eventRegistrations_ = [];
                        const n = this.query_._queryParams,
                            r = new Tt(n.getIndex()),
                            filter = (o = n).loadsAllData() ? new Tt(o.getIndex()) : o.hasLimit() ? new kt(o) : new It(o);
                        var o;
                        this.processor_ = function(filter) {
                            return {
                                filter: filter
                            }
                        }(filter);
                        const l = t.serverCache,
                            h = t.eventCache,
                            c = r.updateFullNode(_t.EMPTY_NODE, l.getNode(), null),
                            d = filter.updateFullNode(_t.EMPTY_NODE, h.getNode(), null),
                            _ = new zt(c, l.isFullyInitialized(), r.filtersNodes()),
                            f = new zt(d, h.isFullyInitialized(), filter.filtersNodes());
                        this.viewCache_ = Vt(f, _), this.eventGenerator_ = new Ht(this.query_)
                    }
                    get query() {
                        return this.query_
                    }
                }

                function Mn(view, path) {
                    const e = Qt(view.viewCache_);
                    return e && (view.query._queryParams.loadsAllData() || !xe(path) && !e.getImmediateChild(Te(path)).isEmpty()) ? e.getChild(path) : null
                }

                function Fn(view) {
                    return 0 === view.eventRegistrations_.length
                }

                function qn(view, e, t) {
                    const n = [];
                    if (t) {
                        Object(l.e)(null == e, "A cancel should cancel all event registrations.");
                        const path = view.query._path;
                        view.eventRegistrations_.forEach((e => {
                            const r = e.createCancelEvent(t, path);
                            r && n.push(r)
                        }))
                    }
                    if (e) {
                        let t = [];
                        for (let i = 0; i < view.eventRegistrations_.length; ++i) {
                            const n = view.eventRegistrations_[i];
                            if (n.matches(e)) {
                                if (e.hasAnyCallback()) {
                                    t = t.concat(view.eventRegistrations_.slice(i + 1));
                                    break
                                }
                            } else t.push(n)
                        }
                        view.eventRegistrations_ = t
                    } else view.eventRegistrations_ = [];
                    return n
                }

                function Ln(view, e, t, n) {
                    e.type === Ft.MERGE && null !== e.source.queryId && (Object(l.e)(Qt(view.viewCache_), "We should always have a full cache before handling merges"), Object(l.e)(Gt(view.viewCache_), "Missing event cache, even though we have a server cache"));
                    const r = view.viewCache_,
                        o = Nn(view.processor_, r, e, t, n);
                    var h, c;
                    return h = view.processor_, c = o.viewCache, Object(l.e)(c.eventCache.getNode().isIndexed(h.filter.getIndex()), "Event snap not indexed"), Object(l.e)(c.serverCache.getNode().isIndexed(h.filter.getIndex()), "Server snap not indexed"), Object(l.e)(o.viewCache.serverCache.isFullyInitialized() || !r.serverCache.isFullyInitialized(), "Once a server snap is complete, it should never go back"), view.viewCache_ = o.viewCache, An(view, o.changes, o.viewCache.eventCache.getNode(), null)
                }

                function An(view, e, t, n) {
                    const r = n ? [n] : view.eventRegistrations_;
                    return function(e, t, n, r) {
                        const o = [],
                            l = [];
                        return t.forEach((t => {
                            var n;
                            "child_changed" === t.type && e.index_.indexedValueChanged(t.oldSnap, t.snapshotNode) && l.push((n = t.childName, {
                                type: "child_moved",
                                snapshotNode: t.snapshotNode,
                                childName: n
                            }))
                        })), Yt(e, o, "child_removed", t, r, n), Yt(e, o, "child_added", t, r, n), Yt(e, o, "child_moved", l, r, n), Yt(e, o, "child_changed", t, r, n), Yt(e, o, "value", t, r, n), o
                    }(view.eventGenerator_, e, t, r)
                }
                let Wn, Un;
                class zn {
                    constructor() {
                        this.views = new Map
                    }
                }

                function Hn(e, t, n, r) {
                    const o = t.source.queryId;
                    if (null !== o) {
                        const view = e.views.get(o);
                        return Object(l.e)(null != view, "SyncTree gave us an op for an invalid query."), Ln(view, t, n, r)
                    } {
                        let o = [];
                        for (const view of e.views.values()) o = o.concat(Ln(view, t, n, r));
                        return o
                    }
                }

                function Yn(e, t, n, r, o) {
                    const l = t._queryIdentifier,
                        view = e.views.get(l);
                    if (!view) {
                        let e = gn(n, o ? r : null),
                            l = !1;
                        e ? l = !0 : r instanceof _t ? (e = mn(n, r), l = !1) : (e = _t.EMPTY_NODE, l = !1);
                        const h = Vt(new zt(e, l, !1), new zt(r, o, !1));
                        return new Dn(t, h)
                    }
                    return view
                }

                function Vn(e, t, n, r, o, l) {
                    const view = Yn(e, t, r, o, l);
                    return e.views.has(t._queryIdentifier) || e.views.set(t._queryIdentifier, view),
                        function(view, e) {
                            view.eventRegistrations_.push(e)
                        }(view, n),
                        function(view, e) {
                            const t = view.viewCache_.eventCache,
                                n = [];
                            t.getNode().isLeafNode() || t.getNode().forEachChild(it, ((e, t) => {
                                n.push(Ct(e, t))
                            }));
                            return t.isFullyInitialized() && n.push(vt(t.getNode())), An(view, n, t.getNode(), e)
                        }(view, n)
                }

                function Bn(e, t, n, r) {
                    const o = t._queryIdentifier,
                        h = [];
                    let c = [];
                    const d = Xn(e);
                    if ("default" === o)
                        for (const [t, view] of e.views.entries()) c = c.concat(qn(view, n, r)), Fn(view) && (e.views.delete(t), view.query._queryParams.loadsAllData() || h.push(view.query));
                    else {
                        const view = e.views.get(o);
                        view && (c = c.concat(qn(view, n, r)), Fn(view) && (e.views.delete(o), view.query._queryParams.loadsAllData() || h.push(view.query)))
                    }
                    return d && !Xn(e) && h.push(new(Object(l.e)(Wn, "Reference.ts has not been loaded"), Wn)(t._repo, t._path)), {
                        removed: h,
                        events: c
                    }
                }

                function Kn(e) {
                    const t = [];
                    for (const view of e.views.values()) view.query._queryParams.loadsAllData() || t.push(view);
                    return t
                }

                function Gn(e, path) {
                    let t = null;
                    for (const view of e.views.values()) t = t || Mn(view, path);
                    return t
                }

                function Qn(e, t) {
                    if (t._queryParams.loadsAllData()) return Jn(e); {
                        const n = t._queryIdentifier;
                        return e.views.get(n)
                    }
                }

                function $n(e, t) {
                    return null != Qn(e, t)
                }

                function Xn(e) {
                    return null != Jn(e)
                }

                function Jn(e) {
                    for (const view of e.views.values())
                        if (view.query._queryParams.loadsAllData()) return view;
                    return null
                }
                let Zn = 1;
                class ei {
                    constructor(e) {
                        this.listenProvider_ = e, this.syncPointTree_ = new Xt(null), this.pendingWriteTree_ = {
                            visibleWrites: Jt.empty(),
                            allWrites: [],
                            lastWriteId: -1
                        }, this.tagToQueryMap = new Map, this.queryToTagMap = new Map
                    }
                }

                function ti(e, path, t, n, r) {
                    return function(e, path, t, n, r) {
                        Object(l.e)(n > e.lastWriteId, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), e.allWrites.push({
                            path: path,
                            snap: t,
                            writeId: n,
                            visible: r
                        }), r && (e.visibleWrites = Zt(e.visibleWrites, path, t)), e.lastWriteId = n
                    }(e.pendingWriteTree_, path, t, n, r), r ? ci(e, new Wt({
                        fromUser: !0,
                        fromServer: !1,
                        queryId: null,
                        tagged: !1
                    }, path, t)) : []
                }

                function ni(e, t, n = !1) {
                    const r = function(e, t) {
                        for (let i = 0; i < e.allWrites.length; i++) {
                            const n = e.allWrites[i];
                            if (n.writeId === t) return n
                        }
                        return null
                    }(e.pendingWriteTree_, t);
                    if (un(e.pendingWriteTree_, t)) {
                        let t = new Xt(null);
                        return null != r.snap ? t = t.set(we(), !0) : H(r.children, (e => {
                            t = t.set(new be(e), !0)
                        })), ci(e, new Lt(r.path, t, n))
                    }
                    return []
                }

                function ii(e, path, t) {
                    return ci(e, new Wt({
                        fromUser: !1,
                        fromServer: !0,
                        queryId: null,
                        tagged: !1
                    }, path, t))
                }

                function si(e, t, n, r, o = !1) {
                    const path = t._path,
                        l = e.syncPointTree_.get(path);
                    let h = [];
                    if (l && ("default" === t._queryIdentifier || $n(l, t))) {
                        const c = Bn(l, t, n, r);
                        0 === l.views.size && (e.syncPointTree_ = e.syncPointTree_.remove(path));
                        const d = c.removed;
                        if (h = c.events, !o) {
                            const n = -1 !== d.findIndex((e => e._queryParams.loadsAllData())),
                                o = e.syncPointTree_.findOnPath(path, ((e, t) => Xn(t)));
                            if (n && !o) {
                                const t = e.syncPointTree_.subtree(path);
                                if (!t.isEmpty()) {
                                    const n = function(e) {
                                        return e.fold(((e, t, n) => {
                                            if (t && Xn(t)) {
                                                return [Jn(t)]
                                            } {
                                                let e = [];
                                                return t && (e = Kn(t)), H(n, ((t, n) => {
                                                    e = e.concat(n)
                                                })), e
                                            }
                                        }))
                                    }(t);
                                    for (let i = 0; i < n.length; ++i) {
                                        const view = n[i],
                                            t = view.query,
                                            r = _i(e, view);
                                        e.listenProvider_.startListening(vi(t), pi(e, t), r.hashFn, r.onComplete)
                                    }
                                }
                            }
                            if (!o && d.length > 0 && !r)
                                if (n) {
                                    const n = null;
                                    e.listenProvider_.stopListening(vi(t), n)
                                } else d.forEach((t => {
                                    const n = e.queryToTagMap.get(fi(t));
                                    e.listenProvider_.stopListening(vi(t), n)
                                }))
                        }! function(e, t) {
                            for (let n = 0; n < t.length; ++n) {
                                const r = t[n];
                                if (!r._queryParams.loadsAllData()) {
                                    const t = fi(r),
                                        n = e.queryToTagMap.get(t);
                                    e.queryToTagMap.delete(t), e.tagToQueryMap.delete(n)
                                }
                            }
                        }(e, d)
                    }
                    return h
                }

                function ri(e, path, t, n) {
                    const r = gi(e, n);
                    if (null != r) {
                        const n = mi(r),
                            o = n.path,
                            l = n.queryId,
                            h = Oe(o, path);
                        return yi(e, o, new Wt(qt(l), h, t))
                    }
                    return []
                }

                function oi(e, t, n, r = !1) {
                    const path = t._path;
                    let o = null,
                        h = !1;
                    e.syncPointTree_.foreachOnPath(path, ((e, t) => {
                        const n = Oe(e, path);
                        o = o || Gn(t, n), h = h || Xn(t)
                    }));
                    let c, d = e.syncPointTree_.get(path);
                    if (d ? (h = h || Xn(d), o = o || Gn(d, we())) : (d = new zn, e.syncPointTree_ = e.syncPointTree_.set(path, d)), null != o) c = !0;
                    else {
                        c = !1, o = _t.EMPTY_NODE;
                        e.syncPointTree_.subtree(path).foreachChild(((e, t) => {
                            const n = Gn(t, we());
                            n && (o = o.updateImmediateChild(e, n))
                        }))
                    }
                    const _ = $n(d, t);
                    if (!_ && !t._queryParams.loadsAllData()) {
                        const n = fi(t);
                        Object(l.e)(!e.queryToTagMap.has(n), "View does not exist, but we have a tag");
                        const r = Zn++;
                        e.queryToTagMap.set(n, r), e.tagToQueryMap.set(r, n)
                    }
                    let f = Vn(d, t, n, cn(e.pendingWriteTree_, path), o, c);
                    if (!_ && !h && !r) {
                        const view = Qn(d, t);
                        f = f.concat(function(e, t, view) {
                            const path = t._path,
                                n = pi(e, t),
                                r = _i(e, view),
                                o = e.listenProvider_.startListening(vi(t), n, r.hashFn, r.onComplete),
                                h = e.syncPointTree_.subtree(path);
                            if (n) Object(l.e)(!Xn(h.value), "If we're adding a query, it shouldn't be shadowed");
                            else {
                                const t = h.fold(((e, t, n) => {
                                    if (!xe(e) && t && Xn(t)) return [Jn(t).query]; {
                                        let e = [];
                                        return t && (e = e.concat(Kn(t).map((view => view.query)))), H(n, ((t, n) => {
                                            e = e.concat(n)
                                        })), e
                                    }
                                }));
                                for (let i = 0; i < t.length; ++i) {
                                    const n = t[i];
                                    e.listenProvider_.stopListening(vi(n), pi(e, n))
                                }
                            }
                            return o
                        }(e, t, view))
                    }
                    return f
                }

                function ai(e, path, t) {
                    const n = e.pendingWriteTree_,
                        r = e.syncPointTree_.findOnPath(path, ((e, t) => {
                            const n = Gn(t, Oe(e, path));
                            if (n) return n
                        }));
                    return fn(n, path, r, t, !0)
                }

                function hi(e, t) {
                    const path = t._path;
                    let n = null;
                    e.syncPointTree_.foreachOnPath(path, ((e, t) => {
                        const r = Oe(e, path);
                        n = n || Gn(t, r)
                    }));
                    let r = e.syncPointTree_.get(path);
                    r ? n = n || Gn(r, we()) : (r = new zn, e.syncPointTree_ = e.syncPointTree_.set(path, r));
                    const o = null != n,
                        l = o ? new zt(n, !0, !1) : null;
                    return function(view) {
                        return Gt(view.viewCache_)
                    }(Yn(r, t, cn(e.pendingWriteTree_, t._path), o ? l.getNode() : _t.EMPTY_NODE, o))
                }

                function ci(e, t) {
                    return ui(t, e.syncPointTree_, null, cn(e.pendingWriteTree_, we()))
                }

                function ui(e, t, n, r) {
                    if (xe(e.path)) return di(e, t, n, r); {
                        const o = t.get(we());
                        null == n && null != o && (n = Gn(o, we()));
                        let l = [];
                        const h = Te(e.path),
                            c = e.operationForChild(h),
                            d = t.children.get(h);
                        if (d && c) {
                            const e = n ? n.getImmediateChild(h) : null,
                                t = wn(r, h);
                            l = l.concat(ui(c, d, e, t))
                        }
                        return o && (l = l.concat(Hn(o, e, r, n))), l
                    }
                }

                function di(e, t, n, r) {
                    const o = t.get(we());
                    null == n && null != o && (n = Gn(o, we()));
                    let l = [];
                    return t.children.inorderTraversal(((t, o) => {
                        const h = n ? n.getImmediateChild(t) : null,
                            c = wn(r, t),
                            d = e.operationForChild(t);
                        d && (l = l.concat(di(d, o, h, c)))
                    })), o && (l = l.concat(Hn(o, e, r, n))), l
                }

                function _i(e, view) {
                    const t = view.query,
                        n = pi(e, t);
                    return {
                        hashFn: () => {
                            const e = function(view) {
                                return view.viewCache_.serverCache.getNode()
                            }(view) || _t.EMPTY_NODE;
                            return e.hash()
                        },
                        onComplete: r => {
                            if ("ok" === r) return n ? function(e, path, t) {
                                const n = gi(e, t);
                                if (n) {
                                    const t = mi(n),
                                        r = t.path,
                                        o = t.queryId,
                                        l = Oe(r, path);
                                    return yi(e, r, new At(qt(o), l))
                                }
                                return []
                            }(e, t._path, n) : function(e, path) {
                                return ci(e, new At({
                                    fromUser: !1,
                                    fromServer: !0,
                                    queryId: null,
                                    tagged: !1
                                }, path))
                            }(e, t._path); {
                                const n = function(code, e) {
                                    let t = "Unknown Error";
                                    "too_big" === code ? t = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" === code ? t = "Client doesn't have permission to access the desired data." : "unavailable" === code && (t = "The service is unavailable");
                                    const n = new Error(code + " at " + e._path.toString() + ": " + t);
                                    return n.code = code.toUpperCase(), n
                                }(r, t);
                                return si(e, t, null, n)
                            }
                        }
                    }
                }

                function pi(e, t) {
                    const n = fi(t);
                    return e.queryToTagMap.get(n)
                }

                function fi(e) {
                    return e._path.toString() + "$" + e._queryIdentifier
                }

                function gi(e, t) {
                    return e.tagToQueryMap.get(t)
                }

                function mi(e) {
                    const t = e.indexOf("$");
                    return Object(l.e)(-1 !== t && t < e.length - 1, "Bad queryKey."), {
                        queryId: e.substr(t + 1),
                        path: new be(e.substr(0, t))
                    }
                }

                function yi(e, t, n) {
                    const r = e.syncPointTree_.get(t);
                    Object(l.e)(r, "Missing sync point for query tag that we're tracking");
                    return Hn(r, n, cn(e.pendingWriteTree_, t), null)
                }

                function vi(e) {
                    return e._queryParams.loadsAllData() && !e._queryParams.isDefault() ? new(Object(l.e)(Un, "Reference.ts has not been loaded"), Un)(e._repo, e._path) : e
                }
                class Ci {
                    constructor(e) {
                        this.node_ = e
                    }
                    getImmediateChild(e) {
                        const t = this.node_.getImmediateChild(e);
                        return new Ci(t)
                    }
                    node() {
                        return this.node_
                    }
                }
                class bi {
                    constructor(e, path) {
                        this.syncTree_ = e, this.path_ = path
                    }
                    getImmediateChild(e) {
                        const t = Pe(this.path_, e);
                        return new bi(this.syncTree_, t)
                    }
                    node() {
                        return ai(this.syncTree_, this.path_)
                    }
                }
                const wi = function(e, t, n) {
                        return e && "object" == typeof e ? (Object(l.e)(".sv" in e, "Unexpected leaf node or priority contents"), "string" == typeof e[".sv"] ? Ti(e[".sv"], t, n) : "object" == typeof e[".sv"] ? Ii(e[".sv"], t) : void Object(l.e)(!1, "Unexpected server value: " + JSON.stringify(e, null, 2))) : e
                    },
                    Ti = function(e, t, n) {
                        if ("timestamp" === e) return n.timestamp;
                        Object(l.e)(!1, "Unexpected server value: " + e)
                    },
                    Ii = function(e, t, n) {
                        e.hasOwnProperty("increment") || Object(l.e)(!1, "Unexpected server value: " + JSON.stringify(e, null, 2));
                        const r = e.increment;
                        "number" != typeof r && Object(l.e)(!1, "Unexpected increment value: " + r);
                        const o = t.node();
                        if (Object(l.e)(null != o, "Expected ChildrenNode.EMPTY_NODE for nulls"), !o.isLeafNode()) return r;
                        const h = o.getValue();
                        return "number" != typeof h ? r : h + r
                    },
                    ki = function(path, e, t, n) {
                        return Ni(e, new bi(t, path), n)
                    },
                    Ei = function(e, t, n) {
                        return Ni(e, new Ci(t), n)
                    };

                function Ni(e, t, n) {
                    const r = e.getPriority().val(),
                        o = wi(r, t.getImmediateChild(".priority"), n);
                    let l;
                    if (e.isLeafNode()) {
                        const r = e,
                            l = wi(r.getValue(), t, n);
                        return l !== r.getValue() || o !== r.getPriority().val() ? new nt(l, ft(o)) : e
                    } {
                        const r = e;
                        return l = r, o !== r.getPriority().val() && (l = l.updatePriority(new nt(o))), r.forEachChild(it, ((e, r) => {
                            const o = Ni(r, t.getImmediateChild(e), n);
                            o !== r && (l = l.updateImmediateChild(e, o))
                        })), l
                    }
                }
                class Si {
                    constructor(e = "", t = null, n = {
                        children: {},
                        childCount: 0
                    }) {
                        this.name = e, this.parent = t, this.node = n
                    }
                }

                function Pi(e, t) {
                    let path = t instanceof be ? t : new be(t),
                        n = e,
                        r = Te(path);
                    for (; null !== r;) {
                        const e = Object(l.z)(n.node.children, r) || {
                            children: {},
                            childCount: 0
                        };
                        n = new Si(r, n, e), path = ke(path), r = Te(path)
                    }
                    return n
                }

                function xi(e) {
                    return e.node.value
                }

                function Oi(e, t) {
                    e.node.value = t, Fi(e)
                }

                function Ri(e) {
                    return e.node.childCount > 0
                }

                function ji(e, t) {
                    H(e.node.children, ((n, r) => {
                        t(new Si(n, e, r))
                    }))
                }

                function Di(e, t, n, r) {
                    n && !r && t(e), ji(e, (e => {
                        Di(e, t, !0, r)
                    })), n && r && t(e)
                }

                function Mi(e) {
                    return new be(null === e.parent ? e.name : Mi(e.parent) + "/" + e.name)
                }

                function Fi(e) {
                    null !== e.parent && function(e, t, n) {
                        const r = function(e) {
                                return void 0 === xi(e) && !Ri(e)
                            }(n),
                            o = Object(l.j)(e.node.children, t);
                        r && o ? (delete e.node.children[t], e.node.childCount--, Fi(e)) : r || o || (e.node.children[t] = n.node, e.node.childCount++, Fi(e))
                    }(e.parent, e.name, e)
                }
                const qi = /[\[\].#$\/\u0000-\u001F\u007F]/,
                    Li = /[\[\].#$\u0000-\u001F\u007F]/,
                    Ai = 10485760,
                    Wi = function(e) {
                        return "string" == typeof e && 0 !== e.length && !qi.test(e)
                    },
                    Ui = function(e) {
                        return "string" == typeof e && 0 !== e.length && !Li.test(e)
                    },
                    zi = function(e, t, path, n) {
                        n && void 0 === t || Hi(Object(l.n)(e, "value"), t, path)
                    },
                    Hi = function(e, data, t) {
                        const path = t instanceof be ? new De(t, e) : t;
                        if (void 0 === data) throw new Error(e + "contains undefined " + Fe(path));
                        if ("function" == typeof data) throw new Error(e + "contains a function " + Fe(path) + " with contents = " + data.toString());
                        if (D(data)) throw new Error(e + "contains " + data.toString() + " " + Fe(path));
                        if ("string" == typeof data && data.length > Ai / 3 && Object(l.A)(data) > Ai) throw new Error(e + "contains a string greater than " + "10485760 utf8 bytes " + Fe(path) + " ('" + data.substring(0, 50) + "...')");
                        if (data && "object" == typeof data) {
                            let t = !1,
                                n = !1;
                            if (H(data, ((r, o) => {
                                    if (".value" === r) t = !0;
                                    else if (".priority" !== r && ".sv" !== r && (n = !0, !Wi(r))) throw new Error(e + " contains an invalid key (" + r + ") " + Fe(path) + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                                    ! function(e, t) {
                                        e.parts_.length > 0 && (e.byteLength_ += 1), e.parts_.push(t), e.byteLength_ += Object(l.A)(t), Me(e)
                                    }(path, r), Hi(e, o, path),
                                        function(e) {
                                            const t = e.parts_.pop();
                                            e.byteLength_ -= Object(l.A)(t), e.parts_.length > 0 && (e.byteLength_ -= 1)
                                        }(path)
                                })), t && n) throw new Error(e + ' contains ".value" child ' + Fe(path) + " in addition to actual children.")
                        }
                    },
                    Yi = function(e, t, n, r) {
                        if (!(r && void 0 === n || Ui(n))) throw new Error(Object(l.n)(e, t) + 'was an invalid path = "' + n + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
                    },
                    Vi = function(e, path) {
                        if (".info" === Te(path)) throw new Error(e + " failed = Can't modify data under /.info/")
                    },
                    Bi = function(e, t) {
                        const n = t.path.toString();
                        if ("string" != typeof t.repoInfo.host || 0 === t.repoInfo.host.length || !Wi(t.repoInfo.namespace) && "localhost" !== t.repoInfo.host.split(":")[0] || 0 !== n.length && ! function(e) {
                                return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), Ui(e)
                            }(n)) throw new Error(Object(l.n)(e, "url") + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
                    };
                class Ki {
                    constructor() {
                        this.eventLists_ = [], this.recursionDepth_ = 0
                    }
                }

                function Gi(e, t) {
                    let n = null;
                    for (let i = 0; i < t.length; i++) {
                        const data = t[i],
                            path = data.getPath();
                        null === n || Re(path, n.path) || (e.eventLists_.push(n), n = null), null === n && (n = {
                            events: [],
                            path: path
                        }), n.events.push(data)
                    }
                    n && e.eventLists_.push(n)
                }

                function Qi(e, path, t) {
                    Gi(e, t), Xi(e, (e => Re(e, path)))
                }

                function $i(e, t, n) {
                    Gi(e, n), Xi(e, (e => je(e, t) || je(t, e)))
                }

                function Xi(e, t) {
                    e.recursionDepth_++;
                    let n = !0;
                    for (let i = 0; i < e.eventLists_.length; i++) {
                        const r = e.eventLists_[i];
                        if (r) {
                            t(r.path) ? (Ji(e.eventLists_[i]), e.eventLists_[i] = null) : n = !1
                        }
                    }
                    n && (e.eventLists_ = []), e.recursionDepth_--
                }

                function Ji(e) {
                    for (let i = 0; i < e.events.length; i++) {
                        const t = e.events[i];
                        if (null !== t) {
                            e.events[i] = null;
                            const n = t.getEventRunner();
                            E && P("event: " + t.toString()), Q(n)
                        }
                    }
                }
                const Zi = "repo_interrupt";
                class es {
                    constructor(e, t, n, r) {
                        this.repoInfo_ = e, this.forceRestClient_ = t, this.authTokenProvider_ = n, this.appCheckProvider_ = r, this.dataUpdateCount = 0, this.statsListener_ = null, this.eventQueue_ = new Ki, this.nextWriteId_ = 1, this.interceptServerDataCallback_ = null, this.onDisconnect_ = Ot(), this.transactionQueueTree_ = new Si, this.persistentConnection_ = null, this.key = this.repoInfo_.toURLString()
                    }
                    toString() {
                        return (this.repoInfo_.secure ? "https://" : "http://") + this.repoInfo_.host
                    }
                }

                function ts(e, t, n) {
                    if (e.stats_ = he(e.repoInfo_), e.forceRestClient_ || ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0) e.server_ = new Pt(e.repoInfo_, ((t, data, n, r) => {
                        ss(e, t, data, n, r)
                    }), e.authTokenProvider_, e.appCheckProvider_), setTimeout((() => rs(e, !0)), 0);
                    else {
                        if (null != n) {
                            if ("object" != typeof n) throw new Error("Only objects are supported for option databaseAuthVariableOverride");
                            try {
                                Object(l.C)(n)
                            } catch (e) {
                                throw new Error("Invalid authOverride provided: " + e)
                            }
                        }
                        e.persistentConnection_ = new Ae(e.repoInfo_, t, ((t, data, n, r) => {
                            ss(e, t, data, n, r)
                        }), (t => {
                            rs(e, t)
                        }), (t => {
                            ! function(e, t) {
                                H(t, ((t, n) => {
                                    os(e, t, n)
                                }))
                            }(e, t)
                        }), e.authTokenProvider_, e.appCheckProvider_, n), e.server_ = e.persistentConnection_
                    }
                    e.authTokenProvider_.addTokenChangeListener((t => {
                        e.server_.refreshAuthToken(t)
                    })), e.appCheckProvider_.addTokenChangeListener((t => {
                        e.server_.refreshAppCheckToken(t.token)
                    })), e.statsReporter_ = function(e, t) {
                        const n = e.toString();
                        return le[n] || (le[n] = t()), le[n]
                    }(e.repoInfo_, (() => new Mt(e.stats_, e.server_))), e.infoData_ = new xt, e.infoSyncTree_ = new ei({
                        startListening: (t, n, r, o) => {
                            let l = [];
                            const h = e.infoData_.getNode(t._path);
                            return h.isEmpty() || (l = ii(e.infoSyncTree_, t._path, h), setTimeout((() => {
                                o("ok")
                            }), 0)), l
                        },
                        stopListening: () => {}
                    }), os(e, "connected", !1), e.serverSyncTree_ = new ei({
                        startListening: (t, n, r, o) => (e.server_.listen(t, r, n, ((n, data) => {
                            const r = o(n, data);
                            $i(e.eventQueue_, t._path, r)
                        })), []),
                        stopListening: (t, n) => {
                            e.server_.unlisten(t, n)
                        }
                    })
                }

                function ns(e) {
                    const t = e.infoData_.getNode(new be(".info/serverTimeOffset")).val() || 0;
                    return (new Date).getTime() + t
                }

                function is(e) {
                    return (t = (t = {
                        timestamp: ns(e)
                    }) || {}).timestamp = t.timestamp || (new Date).getTime(), t;
                    var t
                }

                function ss(e, t, data, n, r) {
                    e.dataUpdateCount++;
                    const path = new be(t);
                    data = e.interceptServerDataCallback_ ? e.interceptServerDataCallback_(t, data) : data;
                    let o = [];
                    if (r)
                        if (n) {
                            const t = Object(l.x)(data, (e => ft(e)));
                            o = function(e, path, t, n) {
                                const r = gi(e, n);
                                if (r) {
                                    const n = mi(r),
                                        o = n.path,
                                        l = n.queryId,
                                        h = Oe(o, path),
                                        c = Xt.fromObject(t);
                                    return yi(e, o, new Ut(qt(l), h, c))
                                }
                                return []
                            }(e.serverSyncTree_, path, t, r)
                        } else {
                            const t = ft(data);
                            o = ri(e.serverSyncTree_, path, t, r)
                        }
                    else if (n) {
                        const t = Object(l.x)(data, (e => ft(e)));
                        o = function(e, path, t) {
                            const n = Xt.fromObject(t);
                            return ci(e, new Ut({
                                fromUser: !1,
                                fromServer: !0,
                                queryId: null,
                                tagged: !1
                            }, path, n))
                        }(e.serverSyncTree_, path, t)
                    } else {
                        const t = ft(data);
                        o = ii(e.serverSyncTree_, path, t)
                    }
                    let h = path;
                    o.length > 0 && (h = fs(e, path)), $i(e.eventQueue_, h, o)
                }

                function rs(e, t) {
                    os(e, "connected", t), !1 === t && function(e) {
                        us(e, "onDisconnectEvents");
                        const t = is(e),
                            n = Ot();
                        jt(e.onDisconnect_, we(), ((path, r) => {
                            const o = ki(path, r, e.serverSyncTree_, t);
                            Rt(n, path, o)
                        }));
                        let r = [];
                        jt(n, we(), ((path, t) => {
                            r = r.concat(ii(e.serverSyncTree_, path, t));
                            const n = Cs(e, path);
                            fs(e, n)
                        })), e.onDisconnect_ = Ot(), $i(e.eventQueue_, we(), r)
                    }(e)
                }

                function os(e, t, n) {
                    const path = new be("/.info/" + t),
                        r = ft(n);
                    e.infoData_.updateSnapshot(path, r);
                    const o = ii(e.infoSyncTree_, path, r);
                    $i(e.eventQueue_, path, o)
                }

                function as(e) {
                    return e.nextWriteId_++
                }

                function ls(e, path, t, n, r) {
                    us(e, "set", {
                        path: path.toString(),
                        value: t,
                        priority: n
                    });
                    const o = is(e),
                        l = ft(t, n),
                        h = ai(e.serverSyncTree_, path),
                        c = Ei(l, h, o),
                        d = as(e),
                        _ = ti(e.serverSyncTree_, path, c, d, !0);
                    Gi(e.eventQueue_, _), e.server_.put(path.toString(), l.val(!0), ((t, n) => {
                        const o = "ok" === t;
                        o || j("set at " + path + " failed: " + t);
                        const l = ni(e.serverSyncTree_, d, !o);
                        $i(e.eventQueue_, path, l), ds(e, r, t, n)
                    }));
                    const f = Cs(e, path);
                    fs(e, f), $i(e.eventQueue_, f, [])
                }

                function hs(e, t, n) {
                    let r;
                    r = ".info" === Te(t._path) ? si(e.infoSyncTree_, t, n) : si(e.serverSyncTree_, t, n), Qi(e.eventQueue_, t._path, r)
                }

                function cs(e) {
                    e.persistentConnection_ && e.persistentConnection_.interrupt(Zi)
                }

                function us(e, ...t) {
                    let n = "";
                    e.persistentConnection_ && (n = e.persistentConnection_.id + ":"), P(n, ...t)
                }

                function ds(e, t, n, r) {
                    t && Q((() => {
                        if ("ok" === n) t(null);
                        else {
                            const code = (n || "error").toUpperCase();
                            let e = code;
                            r && (e += ": " + r);
                            const o = new Error(e);
                            o.code = code, t(o)
                        }
                    }))
                }

                function _s(e, path, t) {
                    return ai(e.serverSyncTree_, path, t) || _t.EMPTY_NODE
                }

                function ps(e, t = e.transactionQueueTree_) {
                    if (t || vs(e, t), xi(t)) {
                        const n = ms(e, t);
                        Object(l.e)(n.length > 0, "Sending zero length transaction queue");
                        n.every((e => 0 === e.status)) && function(e, path, t) {
                            const n = t.map((e => e.currentWriteId)),
                                r = _s(e, path, n);
                            let o = r;
                            const h = r.hash();
                            for (let i = 0; i < t.length; i++) {
                                const e = t[i];
                                Object(l.e)(0 === e.status, "tryToSendTransactionQueue_: items in queue should all be run."), e.status = 1, e.retryCount++;
                                const n = Oe(path, e.path);
                                o = o.updateChild(n, e.currentOutputSnapshotRaw)
                            }
                            const c = o.val(!0),
                                d = path;
                            e.server_.put(d.toString(), c, (n => {
                                us(e, "transaction put response", {
                                    path: d.toString(),
                                    status: n
                                });
                                let r = [];
                                if ("ok" === n) {
                                    const n = [];
                                    for (let i = 0; i < t.length; i++) t[i].status = 2, r = r.concat(ni(e.serverSyncTree_, t[i].currentWriteId)), t[i].onComplete && n.push((() => t[i].onComplete(null, !0, t[i].currentOutputSnapshotResolved))), t[i].unwatcher();
                                    vs(e, Pi(e.transactionQueueTree_, path)), ps(e, e.transactionQueueTree_), $i(e.eventQueue_, path, r);
                                    for (let i = 0; i < n.length; i++) Q(n[i])
                                } else {
                                    if ("datastale" === n)
                                        for (let i = 0; i < t.length; i++) 3 === t[i].status ? t[i].status = 4 : t[i].status = 0;
                                    else {
                                        j("transaction at " + d.toString() + " failed: " + n);
                                        for (let i = 0; i < t.length; i++) t[i].status = 4, t[i].abortReason = n
                                    }
                                    fs(e, path)
                                }
                            }), h)
                        }(e, Mi(t), n)
                    } else Ri(t) && ji(t, (t => {
                        ps(e, t)
                    }))
                }

                function fs(e, t) {
                    const n = gs(e, t),
                        path = Mi(n);
                    return function(e, t, path) {
                        if (0 === t.length) return;
                        const n = [];
                        let r = [];
                        const o = t.filter((q => 0 === q.status)).map((q => q.currentWriteId));
                        for (let i = 0; i < t.length; i++) {
                            const c = t[i],
                                d = Oe(path, c.path);
                            let _, f = !1;
                            if (Object(l.e)(null !== d, "rerunTransactionsUnderNode_: relativePath should not be null."), 4 === c.status) f = !0, _ = c.abortReason, r = r.concat(ni(e.serverSyncTree_, c.currentWriteId, !0));
                            else if (0 === c.status)
                                if (c.retryCount >= 25) f = !0, _ = "maxretry", r = r.concat(ni(e.serverSyncTree_, c.currentWriteId, !0));
                                else {
                                    const n = _s(e, c.path, o);
                                    c.currentInputSnapshot = n;
                                    const h = t[i].update(n.val());
                                    if (void 0 !== h) {
                                        Hi("transaction failed: Data returned ", h, c.path);
                                        let t = ft(h);
                                        "object" == typeof h && null != h && Object(l.j)(h, ".priority") || (t = t.updatePriority(n.getPriority()));
                                        const d = c.currentWriteId,
                                            _ = is(e),
                                            f = Ei(t, n, _);
                                        c.currentOutputSnapshotRaw = t, c.currentOutputSnapshotResolved = f, c.currentWriteId = as(e), o.splice(o.indexOf(d), 1), r = r.concat(ti(e.serverSyncTree_, c.path, f, c.currentWriteId, c.applyLocally)), r = r.concat(ni(e.serverSyncTree_, d, !0))
                                    } else f = !0, _ = "nodata", r = r.concat(ni(e.serverSyncTree_, c.currentWriteId, !0))
                                }
                            $i(e.eventQueue_, path, r), r = [], f && (t[i].status = 2, h = t[i].unwatcher, setTimeout(h, Math.floor(0)), t[i].onComplete && ("nodata" === _ ? n.push((() => t[i].onComplete(null, !1, t[i].currentInputSnapshot))) : n.push((() => t[i].onComplete(new Error(_), !1, null)))))
                        }
                        var h;
                        vs(e, e.transactionQueueTree_);
                        for (let i = 0; i < n.length; i++) Q(n[i]);
                        ps(e, e.transactionQueueTree_)
                    }(e, ms(e, n), path), path
                }

                function gs(e, path) {
                    let t, n = e.transactionQueueTree_;
                    for (t = Te(path); null !== t && void 0 === xi(n);) n = Pi(n, t), t = Te(path = ke(path));
                    return n
                }

                function ms(e, t) {
                    const n = [];
                    return ys(e, t, n), n.sort(((a, b) => a.order - b.order)), n
                }

                function ys(e, t, n) {
                    const r = xi(t);
                    if (r)
                        for (let i = 0; i < r.length; i++) n.push(r[i]);
                    ji(t, (t => {
                        ys(e, t, n)
                    }))
                }

                function vs(e, t) {
                    const n = xi(t);
                    if (n) {
                        let e = 0;
                        for (let t = 0; t < n.length; t++) 2 !== n[t].status && (n[e] = n[t], e++);
                        n.length = e, Oi(t, n.length > 0 ? n : void 0)
                    }
                    ji(t, (t => {
                        vs(e, t)
                    }))
                }

                function Cs(e, path) {
                    const t = Mi(gs(e, path)),
                        n = Pi(e.transactionQueueTree_, path);
                    return function(e, t, n) {
                        let r = n ? e : e.parent;
                        for (; null !== r;) {
                            if (t(r)) return !0;
                            r = r.parent
                        }
                    }(n, (t => {
                        bs(e, t)
                    })), bs(e, n), Di(n, (t => {
                        bs(e, t)
                    })), t
                }

                function bs(e, t) {
                    const n = xi(t);
                    if (n) {
                        const r = [];
                        let o = [],
                            h = -1;
                        for (let i = 0; i < n.length; i++) 3 === n[i].status || (1 === n[i].status ? (Object(l.e)(h === i - 1, "All SENT items should be at beginning of queue."), h = i, n[i].status = 3, n[i].abortReason = "set") : (Object(l.e)(0 === n[i].status, "Unexpected transaction status in abort"), n[i].unwatcher(), o = o.concat(ni(e.serverSyncTree_, n[i].currentWriteId, !0)), n[i].onComplete && r.push(n[i].onComplete.bind(null, new Error("set"), !1, null)))); - 1 === h ? Oi(t, void 0) : n.length = h + 1, $i(e.eventQueue_, Mi(t), o);
                        for (let i = 0; i < r.length; i++) Q(r[i])
                    }
                }
                const ws = function(e, t) {
                        const n = Ts(e),
                            r = n.namespace;
                        "firebase.com" === n.domain && R(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), r && "undefined" !== r || "localhost" === n.domain || R("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && j("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");
                        const o = "ws" === n.scheme || "wss" === n.scheme;
                        return {
                            repoInfo: new se(n.host, n.secure, r, o, t, "", r !== n.subdomain),
                            path: new be(n.pathString)
                        }
                    },
                    Ts = function(e) {
                        let t = "",
                            n = "",
                            r = "",
                            o = "",
                            l = "",
                            h = !0,
                            c = "https",
                            d = 443;
                        if ("string" == typeof e) {
                            let _ = e.indexOf("//");
                            _ >= 0 && (c = e.substring(0, _ - 1), e = e.substring(_ + 2));
                            let f = e.indexOf("/"); - 1 === f && (f = e.length);
                            let m = e.indexOf("?"); - 1 === m && (m = e.length), t = e.substring(0, Math.min(f, m)), f < m && (o = function(e) {
                                let t = "";
                                const n = e.split("/");
                                for (let i = 0; i < n.length; i++)
                                    if (n[i].length > 0) {
                                        let e = n[i];
                                        try {
                                            e = decodeURIComponent(e.replace(/\+/g, " "))
                                        } catch (e) {}
                                        t += "/" + e
                                    }
                                return t
                            }(e.substring(f, m)));
                            const y = function(e) {
                                const t = {};
                                "?" === e.charAt(0) && (e = e.substring(1));
                                for (const n of e.split("&")) {
                                    if (0 === n.length) continue;
                                    const r = n.split("=");
                                    2 === r.length ? t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]) : j(`Invalid query segment '${n}' in query '${e}'`)
                                }
                                return t
                            }(e.substring(Math.min(e.length, m)));
                            _ = t.indexOf(":"), _ >= 0 ? (h = "https" === c || "wss" === c, d = parseInt(t.substring(_ + 1), 10)) : _ = t.length;
                            const v = t.slice(0, _);
                            if ("localhost" === v.toLowerCase()) n = "localhost";
                            else if (v.split(".").length <= 2) n = v;
                            else {
                                const e = t.indexOf(".");
                                r = t.substring(0, e).toLowerCase(), n = t.substring(e + 1), l = r
                            }
                            "ns" in y && (l = y.ns)
                        }
                        return {
                            host: t,
                            port: d,
                            domain: n,
                            subdomain: r,
                            secure: h,
                            scheme: c,
                            pathString: o,
                            namespace: l
                        }
                    };
                class Is {
                    constructor(e, t, n, r) {
                        this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r
                    }
                    getPath() {
                        const e = this.snapshot.ref;
                        return "value" === this.eventType ? e._path : e.parent._path
                    }
                    getEventType() {
                        return this.eventType
                    }
                    getEventRunner() {
                        return this.eventRegistration.getEventRunner(this)
                    }
                    toString() {
                        return this.getPath().toString() + ":" + this.eventType + ":" + Object(l.C)(this.snapshot.exportVal())
                    }
                }
                class ks {
                    constructor(e, t, path) {
                        this.eventRegistration = e, this.error = t, this.path = path
                    }
                    getPath() {
                        return this.path
                    }
                    getEventType() {
                        return "cancel"
                    }
                    getEventRunner() {
                        return this.eventRegistration.getEventRunner(this)
                    }
                    toString() {
                        return this.path.toString() + ":cancel"
                    }
                }
                class Es {
                    constructor(e, t) {
                        this.snapshotCallback = e, this.cancelCallback = t
                    }
                    onValue(e, t) {
                        this.snapshotCallback.call(null, e, t)
                    }
                    onCancel(e) {
                        return Object(l.e)(this.hasCancelCallback, "Raising a cancel event on a listener with no cancel callback"), this.cancelCallback.call(null, e)
                    }
                    get hasCancelCallback() {
                        return !!this.cancelCallback
                    }
                    matches(e) {
                        return this.snapshotCallback === e.snapshotCallback || void 0 !== this.snapshotCallback.userCallback && this.snapshotCallback.userCallback === e.snapshotCallback.userCallback && this.snapshotCallback.context === e.snapshotCallback.context
                    }
                }
                class Ns {
                    constructor(e, t, n, r) {
                        this._repo = e, this._path = t, this._queryParams = n, this._orderByCalled = r
                    }
                    get key() {
                        return xe(this._path) ? null : Ee(this._path)
                    }
                    get ref() {
                        return new Ss(this._repo, this._path)
                    }
                    get _queryIdentifier() {
                        const e = St(this._queryParams),
                            t = U(e);
                        return "{}" === t ? "default" : t
                    }
                    get _queryObject() {
                        return St(this._queryParams)
                    }
                    isEqual(e) {
                        if (!((e = Object(l.o)(e)) instanceof Ns)) return !1;
                        const t = this._repo === e._repo,
                            n = Re(this._path, e._path),
                            r = this._queryIdentifier === e._queryIdentifier;
                        return t && n && r
                    }
                    toJSON() {
                        return this.toString()
                    }
                    toString() {
                        return this._repo.toString() + function(path) {
                            let e = "";
                            for (let i = path.pieceNum_; i < path.pieces_.length; i++) "" !== path.pieces_[i] && (e += "/" + encodeURIComponent(String(path.pieces_[i])));
                            return e || "/"
                        }(this._path)
                    }
                }
                class Ss extends Ns {
                    constructor(e, path) {
                        super(e, path, new Et, !1)
                    }
                    get parent() {
                        const e = Se(this._path);
                        return null === e ? null : new Ss(this._repo, e)
                    }
                    get root() {
                        let e = this;
                        for (; null !== e.parent;) e = e.parent;
                        return e
                    }
                }
                class Ps {
                    constructor(e, t, n) {
                        this._node = e, this.ref = t, this._index = n
                    }
                    get priority() {
                        return this._node.getPriority().val()
                    }
                    get key() {
                        return this.ref.key
                    }
                    get size() {
                        return this._node.numChildren()
                    }
                    child(path) {
                        const e = new be(path),
                            t = Os(this.ref, path);
                        return new Ps(this._node.getChild(e), t, it)
                    }
                    exists() {
                        return !this._node.isEmpty()
                    }
                    exportVal() {
                        return this._node.val(!0)
                    }
                    forEach(e) {
                        if (this._node.isLeafNode()) return !1;
                        return !!this._node.forEachChild(this._index, ((t, n) => e(new Ps(n, Os(this.ref, t), it))))
                    }
                    hasChild(path) {
                        const e = new be(path);
                        return !this._node.getChild(e).isEmpty()
                    }
                    hasChildren() {
                        return !this._node.isLeafNode() && !this._node.isEmpty()
                    }
                    toJSON() {
                        return this.exportVal()
                    }
                    val() {
                        return this._node.val()
                    }
                }

                function xs(e, path) {
                    return (e = Object(l.o)(e))._checkNotDeleted("ref"), void 0 !== path ? Os(e._root, path) : e._root
                }

                function Os(e, path) {
                    var t, n, r, o;
                    return null === Te((e = Object(l.o)(e))._path) ? (t = "child", n = "path", o = !1, (r = path) && (r = r.replace(/^\/*\.info(\/|$)/, "/")), Yi(t, n, r, o)) : Yi("child", "path", path, !1), new Ss(e._repo, Pe(e._path, path))
                }

                function Rs(e, t) {
                    e = Object(l.o)(e), Vi("set", e._path), zi("set", t, e._path, !1);
                    const n = new l.a;
                    return ls(e._repo, e._path, t, null, n.wrapCallback((() => {}))), n.promise
                }

                function js(e) {
                    e = Object(l.o)(e);
                    const t = new Es((() => {})),
                        n = new Ds(t);
                    return function(e, t, n) {
                        const r = hi(e.serverSyncTree_, t);
                        return null != r ? Promise.resolve(r) : e.server_.get(t).then((r => {
                            const o = ft(r).withIndex(t._queryParams.getIndex());
                            let l;
                            if (oi(e.serverSyncTree_, t, n, !0), t._queryParams.loadsAllData()) l = ii(e.serverSyncTree_, t._path, o);
                            else {
                                const n = pi(e.serverSyncTree_, t);
                                l = ri(e.serverSyncTree_, t._path, o, n)
                            }
                            return $i(e.eventQueue_, t._path, l), si(e.serverSyncTree_, t, n, null, !0), o
                        }), (n => (us(e, "get for query " + Object(l.C)(t) + " failed: " + n), Promise.reject(new Error(n)))))
                    }(e._repo, e, n).then((t => new Ps(t, new Ss(e._repo, e._path), e._queryParams.getIndex())))
                }
                class Ds {
                    constructor(e) {
                        this.callbackContext = e
                    }
                    respondsTo(e) {
                        return "value" === e
                    }
                    createEvent(e, t) {
                        const n = t._queryParams.getIndex();
                        return new Is("value", this, new Ps(e.snapshotNode, new Ss(t._repo, t._path), n))
                    }
                    getEventRunner(e) {
                        return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, null)
                    }
                    createCancelEvent(e, path) {
                        return this.callbackContext.hasCancelCallback ? new ks(this, e, path) : null
                    }
                    matches(e) {
                        return e instanceof Ds && (!e.callbackContext || !this.callbackContext || e.callbackContext.matches(this.callbackContext))
                    }
                    hasAnyCallback() {
                        return null !== this.callbackContext
                    }
                }
                class Ms {
                    constructor(e, t) {
                        this.eventType = e, this.callbackContext = t
                    }
                    respondsTo(e) {
                        let t = "children_added" === e ? "child_added" : e;
                        return t = "children_removed" === t ? "child_removed" : t, this.eventType === t
                    }
                    createCancelEvent(e, path) {
                        return this.callbackContext.hasCancelCallback ? new ks(this, e, path) : null
                    }
                    createEvent(e, t) {
                        Object(l.e)(null != e.childName, "Child events should have a childName.");
                        const n = Os(new Ss(t._repo, t._path), e.childName),
                            r = t._queryParams.getIndex();
                        return new Is(e.type, this, new Ps(e.snapshotNode, n, r), e.prevName)
                    }
                    getEventRunner(e) {
                        return "cancel" === e.getEventType() ? () => this.callbackContext.onCancel(e.error) : () => this.callbackContext.onValue(e.snapshot, e.prevName)
                    }
                    matches(e) {
                        return e instanceof Ms && (this.eventType === e.eventType && (!this.callbackContext || !e.callbackContext || this.callbackContext.matches(e.callbackContext)))
                    }
                    hasAnyCallback() {
                        return !!this.callbackContext
                    }
                }

                function Fs(e, t, n, r, o) {
                    let l;
                    if ("object" == typeof r && (l = void 0, o = r), "function" == typeof r && (l = r), o && o.onlyOnce) {
                        const t = n,
                            r = (n, r) => {
                                hs(e._repo, e, c), t(n, r)
                            };
                        r.userCallback = n.userCallback, r.context = n.context, n = r
                    }
                    const h = new Es(n, l || void 0),
                        c = "value" === t ? new Ds(h) : new Ms(t, h);
                    return function(e, t, n) {
                        let r;
                        r = ".info" === Te(t._path) ? oi(e.infoSyncTree_, t, n) : oi(e.serverSyncTree_, t, n), Qi(e.eventQueue_, t._path, r)
                    }(e._repo, e, c), () => hs(e._repo, e, c)
                }

                function qs(e, t, n, r) {
                    return Fs(e, "value", t, n, r)
                }! function(e) {
                    Object(l.e)(!Wn, "__referenceConstructor has already been defined"), Wn = e
                }(Ss),
                function(e) {
                    Object(l.e)(!Un, "__referenceConstructor has already been defined"), Un = e
                }(Ss);
                const Ls = {};
                let As = !1;

                function Ws(t, n, r, o, l) {
                    let h = o || t.options.databaseURL;
                    void 0 === h && (t.options.projectId || R("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."), P("Using default host for project ", t.options.projectId), h = `${t.options.projectId}-default-rtdb.firebaseio.com`);
                    let c, d, _ = ws(h, l),
                        f = _.repoInfo;
                    void 0 !== e && e.env && (d = e.env.FIREBASE_DATABASE_EMULATOR_HOST), d ? (c = !0, h = `http://${d}?ns=${f.namespace}`, _ = ws(h, l), f = _.repoInfo) : c = !_.repoInfo.secure;
                    const m = l && c ? new Z(Z.OWNER) : new J(t.name, t.options, n);
                    Bi("Invalid Firebase Database URL", _), xe(_.path) || R("Database URL must point to the root of a Firebase Database (not including a child path).");
                    const y = function(e, t, n, r) {
                        let o = Ls[t.name];
                        o || (o = {}, Ls[t.name] = o);
                        let l = o[e.toURLString()];
                        l && R("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");
                        return l = new es(e, As, n, r), o[e.toURLString()] = l, l
                    }(f, t, m, new X(t.name, r));
                    return new Us(y, t)
                }
                class Us {
                    constructor(e, t) {
                        this._repoInternal = e, this.app = t, this.type = "database", this._instanceStarted = !1
                    }
                    get _repo() {
                        return this._instanceStarted || (ts(this._repoInternal, this.app.options.appId, this.app.options.databaseAuthVariableOverride), this._instanceStarted = !0), this._repoInternal
                    }
                    get _root() {
                        return this._rootInternal || (this._rootInternal = new Ss(this._repo, we())), this._rootInternal
                    }
                    _delete() {
                        return null !== this._rootInternal && (! function(e, t) {
                            const n = Ls[t];
                            n && n[e.key] === e || R(`Database ${t}(${e.repoInfo_}) has already been deleted.`), cs(e), delete n[e.key]
                        }(this._repo, this.app.name), this._repoInternal = null, this._rootInternal = null), Promise.resolve()
                    }
                    _checkNotDeleted(e) {
                        null === this._rootInternal && R("Cannot call " + e + " on a deleted database.")
                    }
                }

                function zs(e = Object(r.d)(), t) {
                    return Object(r.b)(e, "database").getImmediate({
                        identifier: t
                    })
                }
                Ae.prototype.simpleListen = function(e, t) {
                    this.sendRequest("q", {
                        p: e
                    }, t)
                }, Ae.prototype.echo = function(data, e) {
                    this.sendRequest("echo", {
                        d: data
                    }, e)
                };
                var Hs;
                ! function(e) {
                    _ = e
                }(r.a), Object(r.c)(new o.a("database", ((e, {
                    instanceIdentifier: t
                }) => Ws(e.getProvider("app").getImmediate(), e.getProvider("auth-internal"), e.getProvider("app-check-internal"), t)), "PUBLIC").setMultipleInstances(!0)), Object(r.g)(c, d, Hs), Object(r.g)(c, d, "esm2017")
            }).call(this, n(203))
        }
    }
]);