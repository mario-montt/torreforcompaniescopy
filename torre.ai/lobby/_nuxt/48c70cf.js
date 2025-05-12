! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7e2e0c17-4448-4051-9d66-c6e725f2faa6", e._sentryDebugIdIdentifier = "sentry-dbid-7e2e0c17-4448-4051-9d66-c6e725f2faa6")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [18], {
        1261: function(e, t, n) {
            "use strict";

            function r(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function o(e) {
                return e instanceof r(e).Element || e instanceof Element
            }

            function f(e) {
                return e instanceof r(e).HTMLElement || e instanceof HTMLElement
            }

            function c(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof r(e).ShadowRoot || e instanceof ShadowRoot)
            }
            n.d(t, "a", (function() {
                return be
            }));
            var d = Math.max,
                l = Math.min,
                h = Math.round;

            function m() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                })).join(" ") : navigator.userAgent
            }

            function v() {
                return !/^((?!chrome|android).)*safari/i.test(m())
            }

            function y(element, e, t) {
                void 0 === e && (e = !1), void 0 === t && (t = !1);
                var n = element.getBoundingClientRect(),
                    c = 1,
                    d = 1;
                e && f(element) && (c = element.offsetWidth > 0 && h(n.width) / element.offsetWidth || 1, d = element.offsetHeight > 0 && h(n.height) / element.offsetHeight || 1);
                var l = (o(element) ? r(element) : window).visualViewport,
                    m = !v() && t,
                    y = (n.left + (m && l ? l.offsetLeft : 0)) / c,
                    w = (n.top + (m && l ? l.offsetTop : 0)) / d,
                    x = n.width / c,
                    O = n.height / d;
                return {
                    width: x,
                    height: O,
                    top: w,
                    right: y + x,
                    bottom: w + O,
                    left: y,
                    x: y,
                    y: w
                }
            }

            function w(e) {
                var t = r(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function x(element) {
                return element ? (element.nodeName || "").toLowerCase() : null
            }

            function O(element) {
                return ((o(element) ? element.ownerDocument : element.document) || window.document).documentElement
            }

            function E(element) {
                return y(O(element)).left + w(element).scrollLeft
            }

            function j(element) {
                return r(element).getComputedStyle(element)
            }

            function D(element) {
                var e = j(element),
                    t = e.overflow,
                    n = e.overflowX,
                    r = e.overflowY;
                return /auto|scroll|overlay|hidden/.test(t + r + n)
            }

            function A(e, t, n) {
                void 0 === n && (n = !1);
                var o, element, c = f(t),
                    d = f(t) && function(element) {
                        var rect = element.getBoundingClientRect(),
                            e = h(rect.width) / element.offsetWidth || 1,
                            t = h(rect.height) / element.offsetHeight || 1;
                        return 1 !== e || 1 !== t
                    }(t),
                    l = O(t),
                    rect = y(e, d, n),
                    m = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    v = {
                        x: 0,
                        y: 0
                    };
                return (c || !c && !n) && (("body" !== x(t) || D(l)) && (m = (o = t) !== r(o) && f(o) ? {
                    scrollLeft: (element = o).scrollLeft,
                    scrollTop: element.scrollTop
                } : w(o)), f(t) ? ((v = y(t, !0)).x += t.clientLeft, v.y += t.clientTop) : l && (v.x = E(l))), {
                    x: rect.left + m.scrollLeft - v.x,
                    y: rect.top + m.scrollTop - v.y,
                    width: rect.width,
                    height: rect.height
                }
            }

            function k(element) {
                var e = y(element),
                    t = element.offsetWidth,
                    n = element.offsetHeight;
                return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), {
                    x: element.offsetLeft,
                    y: element.offsetTop,
                    width: t,
                    height: n
                }
            }

            function L(element) {
                return "html" === x(element) ? element : element.assignedSlot || element.parentNode || (c(element) ? element.host : null) || O(element)
            }

            function W(e) {
                return ["html", "body", "#document"].indexOf(x(e)) >= 0 ? e.ownerDocument.body : f(e) && D(e) ? e : W(L(e))
            }

            function M(element, e) {
                var t;
                void 0 === e && (e = []);
                var n = W(element),
                    o = n === (null == (t = element.ownerDocument) ? void 0 : t.body),
                    f = r(n),
                    c = o ? [f].concat(f.visualViewport || [], D(n) ? n : []) : n,
                    d = e.concat(c);
                return o ? d : d.concat(M(L(c)))
            }

            function P(element) {
                return ["table", "td", "th"].indexOf(x(element)) >= 0
            }

            function B(element) {
                return f(element) && "fixed" !== j(element).position ? element.offsetParent : null
            }

            function H(element) {
                for (var e = r(element), t = B(element); t && P(t) && "static" === j(t).position;) t = B(t);
                return t && ("html" === x(t) || "body" === x(t) && "static" === j(t).position) ? e : t || function(element) {
                    var e = /firefox/i.test(m());
                    if (/Trident/i.test(m()) && f(element) && "fixed" === j(element).position) return null;
                    var t = L(element);
                    for (c(t) && (t = t.host); f(t) && ["html", "body"].indexOf(x(t)) < 0;) {
                        var n = j(t);
                        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || e && "filter" === n.willChange || e && n.filter && "none" !== n.filter) return t;
                        t = t.parentNode
                    }
                    return null
                }(element) || e
            }
            var R = "top",
                T = "bottom",
                S = "right",
                V = "left",
                C = "auto",
                I = [R, T, S, V],
                _ = "start",
                N = "end",
                F = "viewport",
                U = "popper",
                z = I.reduce((function(e, t) {
                    return e.concat([t + "-" + _, t + "-" + N])
                }), []),
                Y = [].concat(I, [C]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + _, t + "-" + N])
                }), []),
                J = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function X(e) {
                var map = new Map,
                    t = new Set,
                    n = [];

                function r(e) {
                    t.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!t.has(e)) {
                            var n = map.get(e);
                            n && r(n)
                        }
                    })), n.push(e)
                }
                return e.forEach((function(e) {
                    map.set(e.name, e)
                })), e.forEach((function(e) {
                    t.has(e.name) || r(e)
                })), n
            }
            var G = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function K() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(element) {
                    return !(element && "function" == typeof element.getBoundingClientRect)
                }))
            }

            function Q(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    f = t.defaultOptions,
                    c = void 0 === f ? G : f;
                return function(e, t, n) {
                    void 0 === n && (n = c);
                    var f, d, l = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, G, c),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        h = [],
                        m = !1,
                        v = {
                            state: l,
                            setOptions: function(n) {
                                var f = "function" == typeof n ? n(l.options) : n;
                                y(), l.options = Object.assign({}, c, l.options, f), l.scrollParents = {
                                    reference: o(e) ? M(e) : e.contextElement ? M(e.contextElement) : [],
                                    popper: M(t)
                                };
                                var d, m, w = function(e) {
                                    var t = X(e);
                                    return J.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }((d = [].concat(r, l.options.modifiers), m = d.reduce((function(e, t) {
                                    var n = e[t.name];
                                    return e[t.name] = n ? Object.assign({}, n, t, {
                                        options: Object.assign({}, n.options, t.options),
                                        data: Object.assign({}, n.data, t.data)
                                    }) : t, e
                                }), {}), Object.keys(m).map((function(e) {
                                    return m[e]
                                }))));
                                return l.orderedModifiers = w.filter((function(e) {
                                    return e.enabled
                                })), l.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" == typeof o) {
                                        var f = o({
                                                state: l,
                                                name: t,
                                                instance: v,
                                                options: r
                                            }),
                                            c = function() {};
                                        h.push(f || c)
                                    }
                                })), v.update()
                            },
                            forceUpdate: function() {
                                if (!m) {
                                    var e = l.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (K(t, n)) {
                                        l.rects = {
                                            reference: A(t, H(n), "fixed" === l.options.strategy),
                                            popper: k(n)
                                        }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function(e) {
                                            return l.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < l.orderedModifiers.length; r++)
                                            if (!0 !== l.reset) {
                                                var o = l.orderedModifiers[r],
                                                    f = o.fn,
                                                    c = o.options,
                                                    d = void 0 === c ? {} : c,
                                                    h = o.name;
                                                "function" == typeof f && (l = f({
                                                    state: l,
                                                    options: d,
                                                    name: h,
                                                    instance: v
                                                }) || l)
                                            } else l.reset = !1, r = -1
                                    }
                                }
                            },
                            update: (f = function() {
                                return new Promise((function(e) {
                                    v.forceUpdate(), e(l)
                                }))
                            }, function() {
                                return d || (d = new Promise((function(e) {
                                    Promise.resolve().then((function() {
                                        d = void 0, e(f())
                                    }))
                                }))), d
                            }),
                            destroy: function() {
                                y(), m = !0
                            }
                        };
                    if (!K(e, t)) return v;

                    function y() {
                        h.forEach((function(e) {
                            return e()
                        })), h = []
                    }
                    return v.setOptions(n).then((function(e) {
                        !m && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), v
                }
            }
            var Z = {
                passive: !0
            };

            function $(e) {
                return e.split("-")[0]
            }

            function ee(e) {
                return e.split("-")[1]
            }

            function te(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function ne(e) {
                var t, n = e.reference,
                    element = e.element,
                    r = e.placement,
                    o = r ? $(r) : null,
                    f = r ? ee(r) : null,
                    c = n.x + n.width / 2 - element.width / 2,
                    d = n.y + n.height / 2 - element.height / 2;
                switch (o) {
                    case R:
                        t = {
                            x: c,
                            y: n.y - element.height
                        };
                        break;
                    case T:
                        t = {
                            x: c,
                            y: n.y + n.height
                        };
                        break;
                    case S:
                        t = {
                            x: n.x + n.width,
                            y: d
                        };
                        break;
                    case V:
                        t = {
                            x: n.x - element.width,
                            y: d
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var l = o ? te(o) : null;
                if (null != l) {
                    var h = "y" === l ? "height" : "width";
                    switch (f) {
                        case _:
                            t[l] = t[l] - (n[h] / 2 - element[h] / 2);
                            break;
                        case N:
                            t[l] = t[l] + (n[h] / 2 - element[h] / 2)
                    }
                }
                return t
            }
            var re = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function oe(e) {
                var t, n = e.popper,
                    o = e.popperRect,
                    f = e.placement,
                    c = e.variation,
                    d = e.offsets,
                    l = e.position,
                    m = e.gpuAcceleration,
                    v = e.adaptive,
                    y = e.roundOffsets,
                    w = e.isFixed,
                    x = d.x,
                    E = void 0 === x ? 0 : x,
                    D = d.y,
                    A = void 0 === D ? 0 : D,
                    k = "function" == typeof y ? y({
                        x: E,
                        y: A
                    }) : {
                        x: E,
                        y: A
                    };
                E = k.x, A = k.y;
                var L = d.hasOwnProperty("x"),
                    W = d.hasOwnProperty("y"),
                    M = V,
                    P = R,
                    B = window;
                if (v) {
                    var C = H(n),
                        I = "clientHeight",
                        _ = "clientWidth";
                    if (C === r(n) && "static" !== j(C = O(n)).position && "absolute" === l && (I = "scrollHeight", _ = "scrollWidth"), f === R || (f === V || f === S) && c === N) P = T, A -= (w && C === B && B.visualViewport ? B.visualViewport.height : C[I]) - o.height, A *= m ? 1 : -1;
                    if (f === V || (f === R || f === T) && c === N) M = S, E -= (w && C === B && B.visualViewport ? B.visualViewport.width : C[_]) - o.width, E *= m ? 1 : -1
                }
                var F, U = Object.assign({
                        position: l
                    }, v && re),
                    z = !0 === y ? function(e, t) {
                        var n = e.x,
                            r = e.y,
                            o = t.devicePixelRatio || 1;
                        return {
                            x: h(n * o) / o || 0,
                            y: h(r * o) / o || 0
                        }
                    }({
                        x: E,
                        y: A
                    }, r(n)) : {
                        x: E,
                        y: A
                    };
                return E = z.x, A = z.y, m ? Object.assign({}, U, ((F = {})[P] = W ? "0" : "", F[M] = L ? "0" : "", F.transform = (B.devicePixelRatio || 1) <= 1 ? "translate(" + E + "px, " + A + "px)" : "translate3d(" + E + "px, " + A + "px, 0)", F)) : Object.assign({}, U, ((t = {})[P] = W ? A + "px" : "", t[M] = L ? E + "px" : "", t.transform = "", t))
            }
            var ie = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function ae(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return ie[e]
                }))
            }
            var se = {
                start: "end",
                end: "start"
            };

            function fe(e) {
                return e.replace(/start|end/g, (function(e) {
                    return se[e]
                }))
            }

            function ce(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && c(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function pe(rect) {
                return Object.assign({}, rect, {
                    left: rect.x,
                    top: rect.y,
                    right: rect.x + rect.width,
                    bottom: rect.y + rect.height
                })
            }

            function ue(element, e, t) {
                return e === F ? pe(function(element, e) {
                    var t = r(element),
                        html = O(element),
                        n = t.visualViewport,
                        o = html.clientWidth,
                        f = html.clientHeight,
                        c = 0,
                        d = 0;
                    if (n) {
                        o = n.width, f = n.height;
                        var l = v();
                        (l || !l && "fixed" === e) && (c = n.offsetLeft, d = n.offsetTop)
                    }
                    return {
                        width: o,
                        height: f,
                        x: c + E(element),
                        y: d
                    }
                }(element, t)) : o(e) ? function(element, e) {
                    var rect = y(element, !1, "fixed" === e);
                    return rect.top = rect.top + element.clientTop, rect.left = rect.left + element.clientLeft, rect.bottom = rect.top + element.clientHeight, rect.right = rect.left + element.clientWidth, rect.width = element.clientWidth, rect.height = element.clientHeight, rect.x = rect.left, rect.y = rect.top, rect
                }(e, t) : pe(function(element) {
                    var e, html = O(element),
                        t = w(element),
                        body = null == (e = element.ownerDocument) ? void 0 : e.body,
                        n = d(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0),
                        r = d(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0),
                        o = -t.scrollLeft + E(element),
                        f = -t.scrollTop;
                    return "rtl" === j(body || html).direction && (o += d(html.clientWidth, body ? body.clientWidth : 0) - n), {
                        width: n,
                        height: r,
                        x: o,
                        y: f
                    }
                }(O(element)))
            }

            function de(element, e, t, n) {
                var r = "clippingParents" === e ? function(element) {
                        var e = M(L(element)),
                            t = ["absolute", "fixed"].indexOf(j(element).position) >= 0 && f(element) ? H(element) : element;
                        return o(t) ? e.filter((function(e) {
                            return o(e) && ce(e, t) && "body" !== x(e)
                        })) : []
                    }(element) : [].concat(e),
                    c = [].concat(r, [t]),
                    h = c[0],
                    m = c.reduce((function(e, t) {
                        var rect = ue(element, t, n);
                        return e.top = d(rect.top, e.top), e.right = l(rect.right, e.right), e.bottom = l(rect.bottom, e.bottom), e.left = d(rect.left, e.left), e
                    }), ue(element, h, n));
                return m.width = m.right - m.left, m.height = m.bottom - m.top, m.x = m.left, m.y = m.top, m
            }

            function le(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function he(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function me(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    f = void 0 === r ? e.placement : r,
                    c = n.strategy,
                    d = void 0 === c ? e.strategy : c,
                    l = n.boundary,
                    h = void 0 === l ? "clippingParents" : l,
                    m = n.rootBoundary,
                    v = void 0 === m ? F : m,
                    w = n.elementContext,
                    x = void 0 === w ? U : w,
                    E = n.altBoundary,
                    j = void 0 !== E && E,
                    D = n.padding,
                    A = void 0 === D ? 0 : D,
                    k = le("number" != typeof A ? A : he(A, I)),
                    L = x === U ? "reference" : U,
                    W = e.rects.popper,
                    element = e.elements[j ? L : x],
                    M = de(o(element) ? element : element.contextElement || O(e.elements.popper), h, v, d),
                    P = y(e.elements.reference),
                    B = ne({
                        reference: P,
                        element: W,
                        strategy: "absolute",
                        placement: f
                    }),
                    H = pe(Object.assign({}, W, B)),
                    V = x === U ? H : P,
                    C = {
                        top: M.top - V.top + k.top,
                        bottom: V.bottom - M.bottom + k.bottom,
                        left: M.left - V.left + k.left,
                        right: V.right - M.right + k.right
                    },
                    _ = e.modifiersData.offset;
                if (x === U && _) {
                    var N = _[f];
                    Object.keys(C).forEach((function(e) {
                        var t = [S, T].indexOf(e) >= 0 ? 1 : -1,
                            n = [R, T].indexOf(e) >= 0 ? "y" : "x";
                        C[e] += N[n] * t
                    }))
                }
                return C
            }

            function ve(e, t, n) {
                return d(e, l(t, n))
            }

            function ge(e, rect, t) {
                return void 0 === t && (t = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - rect.height - t.y,
                    right: e.right - rect.width + t.x,
                    bottom: e.bottom - rect.height + t.y,
                    left: e.left - rect.width - t.x
                }
            }

            function ye(e) {
                return [R, S, T, V].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var be = Q({
                defaultModifiers: [{
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state,
                            n = e.instance,
                            o = e.options,
                            f = o.scroll,
                            c = void 0 === f || f,
                            d = o.resize,
                            l = void 0 === d || d,
                            h = r(t.elements.popper),
                            m = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return c && m.forEach((function(e) {
                                e.addEventListener("scroll", n.update, Z)
                            })), l && h.addEventListener("resize", n.update, Z),
                            function() {
                                c && m.forEach((function(e) {
                                    e.removeEventListener("scroll", n.update, Z)
                                })), l && h.removeEventListener("resize", n.update, Z)
                            }
                    },
                    data: {}
                }, {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = ne({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = n.gpuAcceleration,
                            o = void 0 === r || r,
                            f = n.adaptive,
                            c = void 0 === f || f,
                            d = n.roundOffsets,
                            l = void 0 === d || d,
                            h = {
                                placement: $(t.placement),
                                variation: ee(t.placement),
                                popper: t.elements.popper,
                                popperRect: t.rects.popper,
                                gpuAcceleration: o,
                                isFixed: "fixed" === t.options.strategy
                            };
                        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, oe(Object.assign({}, h, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: c,
                            roundOffsets: l
                        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, oe(Object.assign({}, h, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: l
                        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                    },
                    data: {}
                }, {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach((function(e) {
                            var style = t.styles[e] || {},
                                n = t.attributes[e] || {},
                                element = t.elements[e];
                            f(element) && x(element) && (Object.assign(element.style, style), Object.keys(n).forEach((function(e) {
                                var t = n[e];
                                !1 === t ? element.removeAttribute(e) : element.setAttribute(e, !0 === t ? "" : t)
                            })))
                        }))
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(t.elements).forEach((function(e) {
                                    var element = t.elements[e],
                                        r = t.attributes[e] || {},
                                        style = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(style, e) {
                                            return style[e] = "", style
                                        }), {});
                                    f(element) && x(element) && (Object.assign(element.style, style), Object.keys(r).forEach((function(e) {
                                        element.removeAttribute(e)
                                    })))
                                }))
                            }
                    },
                    requires: ["computeStyles"]
                }, {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name,
                            o = n.offset,
                            f = void 0 === o ? [0, 0] : o,
                            data = Y.reduce((function(e, n) {
                                return e[n] = function(e, t, n) {
                                    var r = $(e),
                                        o = [V, R].indexOf(r) >= 0 ? -1 : 1,
                                        f = "function" == typeof n ? n(Object.assign({}, t, {
                                            placement: e
                                        })) : n,
                                        c = f[0],
                                        d = f[1];
                                    return c = c || 0, d = (d || 0) * o, [V, S].indexOf(r) >= 0 ? {
                                        x: d,
                                        y: c
                                    } : {
                                        x: c,
                                        y: d
                                    }
                                }(n, t.rects, f), e
                            }), {}),
                            c = data[t.placement],
                            d = c.x,
                            l = c.y;
                        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += d, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = data
                    }
                }, {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name;
                        if (!t.modifiersData[r]._skip) {
                            for (var o = n.mainAxis, f = void 0 === o || o, c = n.altAxis, d = void 0 === c || c, l = n.fallbackPlacements, h = n.padding, m = n.boundary, v = n.rootBoundary, y = n.altBoundary, w = n.flipVariations, x = void 0 === w || w, O = n.allowedAutoPlacements, E = t.options.placement, j = $(E), D = l || (j === E || !x ? [ae(E)] : function(e) {
                                    if ($(e) === C) return [];
                                    var t = ae(e);
                                    return [fe(e), t, fe(t)]
                                }(E)), A = [E].concat(D).reduce((function(e, n) {
                                    return e.concat($(n) === C ? function(e, t) {
                                        void 0 === t && (t = {});
                                        var n = t,
                                            r = n.placement,
                                            o = n.boundary,
                                            f = n.rootBoundary,
                                            c = n.padding,
                                            d = n.flipVariations,
                                            l = n.allowedAutoPlacements,
                                            h = void 0 === l ? Y : l,
                                            m = ee(r),
                                            v = m ? d ? z : z.filter((function(e) {
                                                return ee(e) === m
                                            })) : I,
                                            y = v.filter((function(e) {
                                                return h.indexOf(e) >= 0
                                            }));
                                        0 === y.length && (y = v);
                                        var w = y.reduce((function(t, n) {
                                            return t[n] = me(e, {
                                                placement: n,
                                                boundary: o,
                                                rootBoundary: f,
                                                padding: c
                                            })[$(n)], t
                                        }), {});
                                        return Object.keys(w).sort((function(a, b) {
                                            return w[a] - w[b]
                                        }))
                                    }(t, {
                                        placement: n,
                                        boundary: m,
                                        rootBoundary: v,
                                        padding: h,
                                        flipVariations: x,
                                        allowedAutoPlacements: O
                                    }) : n)
                                }), []), k = t.rects.reference, L = t.rects.popper, W = new Map, M = !0, P = A[0], i = 0; i < A.length; i++) {
                                var B = A[i],
                                    H = $(B),
                                    N = ee(B) === _,
                                    F = [R, T].indexOf(H) >= 0,
                                    U = F ? "width" : "height",
                                    J = me(t, {
                                        placement: B,
                                        boundary: m,
                                        rootBoundary: v,
                                        altBoundary: y,
                                        padding: h
                                    }),
                                    X = F ? N ? S : V : N ? T : R;
                                k[U] > L[U] && (X = ae(X));
                                var G = ae(X),
                                    K = [];
                                if (f && K.push(J[H] <= 0), d && K.push(J[X] <= 0, J[G] <= 0), K.every((function(e) {
                                        return e
                                    }))) {
                                    P = B, M = !1;
                                    break
                                }
                                W.set(B, K)
                            }
                            if (M)
                                for (var Q = function(e) {
                                        var t = A.find((function(t) {
                                            var n = W.get(t);
                                            if (n) return n.slice(0, e).every((function(e) {
                                                return e
                                            }))
                                        }));
                                        if (t) return P = t, "break"
                                    }, Z = x ? 3 : 1; Z > 0; Z--) {
                                    if ("break" === Q(Z)) break
                                }
                            t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                }, {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name,
                            o = n.mainAxis,
                            f = void 0 === o || o,
                            c = n.altAxis,
                            h = void 0 !== c && c,
                            m = n.boundary,
                            v = n.rootBoundary,
                            y = n.altBoundary,
                            w = n.padding,
                            x = n.tether,
                            O = void 0 === x || x,
                            E = n.tetherOffset,
                            j = void 0 === E ? 0 : E,
                            D = me(t, {
                                boundary: m,
                                rootBoundary: v,
                                padding: w,
                                altBoundary: y
                            }),
                            A = $(t.placement),
                            L = ee(t.placement),
                            W = !L,
                            M = te(A),
                            P = "x" === M ? "y" : "x",
                            B = t.modifiersData.popperOffsets,
                            C = t.rects.reference,
                            I = t.rects.popper,
                            N = "function" == typeof j ? j(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : j,
                            F = "number" == typeof N ? {
                                mainAxis: N,
                                altAxis: N
                            } : Object.assign({
                                mainAxis: 0,
                                altAxis: 0
                            }, N),
                            U = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                            data = {
                                x: 0,
                                y: 0
                            };
                        if (B) {
                            if (f) {
                                var z, Y = "y" === M ? R : V,
                                    J = "y" === M ? T : S,
                                    X = "y" === M ? "height" : "width",
                                    G = B[M],
                                    K = G + D[Y],
                                    Q = G - D[J],
                                    Z = O ? -I[X] / 2 : 0,
                                    ne = L === _ ? C[X] : I[X],
                                    re = L === _ ? -I[X] : -C[X],
                                    oe = t.elements.arrow,
                                    ie = O && oe ? k(oe) : {
                                        width: 0,
                                        height: 0
                                    },
                                    ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0
                                    },
                                    se = ae[Y],
                                    fe = ae[J],
                                    ce = ve(0, C[X], ie[X]),
                                    pe = W ? C[X] / 2 - Z - ce - se - F.mainAxis : ne - ce - se - F.mainAxis,
                                    ue = W ? -C[X] / 2 + Z + ce + fe + F.mainAxis : re + ce + fe + F.mainAxis,
                                    de = t.elements.arrow && H(t.elements.arrow),
                                    le = de ? "y" === M ? de.clientTop || 0 : de.clientLeft || 0 : 0,
                                    he = null != (z = null == U ? void 0 : U[M]) ? z : 0,
                                    ge = G + ue - he,
                                    ye = ve(O ? l(K, G + pe - he - le) : K, G, O ? d(Q, ge) : Q);
                                B[M] = ye, data[M] = ye - G
                            }
                            if (h) {
                                var be, we = "x" === M ? R : V,
                                    xe = "x" === M ? T : S,
                                    Oe = B[P],
                                    Ee = "y" === P ? "height" : "width",
                                    je = Oe + D[we],
                                    De = Oe - D[xe],
                                    Ae = -1 !== [R, V].indexOf(A),
                                    ke = null != (be = null == U ? void 0 : U[P]) ? be : 0,
                                    Le = Ae ? je : Oe - C[Ee] - I[Ee] - ke + F.altAxis,
                                    We = Ae ? Oe + C[Ee] + I[Ee] - ke - F.altAxis : De,
                                    Me = O && Ae ? function(e, t, n) {
                                        var r = ve(e, t, n);
                                        return r > n ? n : r
                                    }(Le, Oe, We) : ve(O ? Le : je, Oe, O ? We : De);
                                B[P] = Me, data[P] = Me - Oe
                            }
                            t.modifiersData[r] = data
                        }
                    },
                    requiresIfExists: ["offset"]
                }, {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t, n = e.state,
                            r = e.name,
                            o = e.options,
                            f = n.elements.arrow,
                            c = n.modifiersData.popperOffsets,
                            d = $(n.placement),
                            l = te(d),
                            h = [V, S].indexOf(d) >= 0 ? "height" : "width";
                        if (f && c) {
                            var m = function(e, t) {
                                    return le("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                        placement: t.placement
                                    })) : e) ? e : he(e, I))
                                }(o.padding, n),
                                v = k(f),
                                y = "y" === l ? R : V,
                                w = "y" === l ? T : S,
                                x = n.rects.reference[h] + n.rects.reference[l] - c[l] - n.rects.popper[h],
                                O = c[l] - n.rects.reference[l],
                                E = H(f),
                                j = E ? "y" === l ? E.clientHeight || 0 : E.clientWidth || 0 : 0,
                                D = x / 2 - O / 2,
                                A = m[y],
                                L = j - v[h] - m[w],
                                W = j / 2 - v[h] / 2 + D,
                                M = ve(A, W, L),
                                P = l;
                            n.modifiersData[r] = ((t = {})[P] = M, t.centerOffset = M - W, t)
                        }
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = e.options.element,
                            r = void 0 === n ? "[data-popper-arrow]" : n;
                        null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && ce(t.elements.popper, r) && (t.elements.arrow = r)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                }, {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.name,
                            r = t.rects.reference,
                            o = t.rects.popper,
                            f = t.modifiersData.preventOverflow,
                            c = me(t, {
                                elementContext: "reference"
                            }),
                            d = me(t, {
                                altBoundary: !0
                            }),
                            l = ge(c, r),
                            h = ge(d, o, f),
                            m = ye(l),
                            v = ye(h);
                        t.modifiersData[n] = {
                            referenceClippingOffsets: l,
                            popperEscapeOffsets: h,
                            isReferenceHidden: m,
                            hasPopperEscaped: v
                        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": m,
                            "data-popper-escaped": v
                        })
                    }
                }]
            })
        }
    }
]);