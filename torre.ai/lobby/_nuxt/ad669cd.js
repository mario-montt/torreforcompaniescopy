! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "764a0dc8-db1c-4e40-8dc9-ffc4c489f8c9", t._sentryDebugIdIdentifier = "sentry-dbid-764a0dc8-db1c-4e40-8dc9-ffc4c489f8c9")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [72], {
        213: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return y
            }));
            n(52), n(83), n(28), n(45), n(74), n(51), n(32);
            var o = n(2),
                r = n(133),
                d = n(3),
                l = n(4),
                c = "crawled-organizations",
                m = function(t) {
                    return !t || t.includes(c) ? "pad" : "fill"
                },
                _ = function(t) {
                    return !t || t.includes(c) ? ",b_auto" : ""
                },
                script = o.default.extend({
                    name: "tdl-entity-picture",
                    mixins: [r.a],
                    props: {
                        entity: {
                            type: Object,
                            required: !0
                        },
                        title: {
                            type: String,
                            required: !1
                        },
                        borderWidth: {
                            type: Number,
                            default: 3
                        },
                        size: {
                            type: Number,
                            default: 64
                        },
                        defaultMargin: {
                            type: Boolean,
                            default: !0
                        },
                        boxShadow: {
                            type: String,
                            required: !1
                        },
                        shape: {
                            type: String,
                            default: "circle",
                            validator: function(t) {
                                return ["circle", "hexagon"].indexOf(t) >= 0
                            }
                        },
                        thumbnail: {
                            type: Boolean,
                            default: !0
                        },
                        href: {
                            type: String,
                            required: !1
                        },
                        hrefTarget: {
                            type: String,
                            default: "_self"
                        }
                    },
                    computed: {
                        cssVariables: function() {
                            return {
                                "--size": this.size + "px",
                                "--font-size": this.fontSize + "px",
                                "--border-width": this.borderWidth + "px",
                                "--box-shadow": this.boxShadow
                            }
                        },
                        fontSize: function() {
                            return this.size < 64 || "hexagon" === this.shape && this.size < 82 ? 14 * this.size / 32 : 75 * this.size / 120
                        },
                        pictureUrl: function() {
                            return this.thumbnail && this.entity.pictureThumbnail ? this.entity.pictureThumbnail : this.entity.picture ? this.isCrawledPicture ? function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 150,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 150,
                                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : m(t),
                                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : _(t);
                                return t.replace("/upload/", "/upload/c_".concat(o, ",h_").concat(e, ",w_").concat(n).concat(r, "/"))
                            }(this.entity.picture) : this.entity.picture : ""
                        },
                        isCrawledPicture: function() {
                            var t;
                            return !(null === (t = this.entity.picture) || void 0 === t || !t.includes("crawled-organizations"))
                        }
                    },
                    methods: {
                        clickImage: function() {
                            this.$emit("image-clicked")
                        }
                    }
                }),
                h = script,
                y = Object(d.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return t.entity && t.href ? n("a", {
                            staticClass: "entity-picture__link",
                            attrs: {
                                href: t.href,
                                target: t.hrefTarget
                            }
                        }, [n("div", {
                            class: ["entity-picture", t.$mdActiveTheme, {
                                "entity-picture--is-hexagon": "hexagon" === t.shape,
                                "entity-picture--has-shadow": t.boxShadow
                            }],
                            style: t.cssVariables
                        }, ["hexagon" === t.shape ? n("div", {
                            class: ["hexagon-border", {
                                "hexagon-border--no-margins": !t.defaultMargin
                            }]
                        }) : t._e(), t._v(" "), t.pictureUrl ? n("img", {
                            directives: [{
                                name: "lazyload",
                                rawName: "v-lazyload"
                            }],
                            class: ["entity-picture__thumbnail", "entity-picture__thumbnail--image", {
                                "entity-picture__thumbnail--no-margins": !t.defaultMargin
                            }],
                            attrs: {
                                "data-url": t.pictureUrl,
                                src: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1653502999/origin/materrial/bgid2wha28a741p3ugu7.svg",
                                title: t.title,
                                alt: t.entity.name
                            },
                            on: {
                                click: t.clickImage
                            }
                        }) : n("div", {
                            class: ["entity-picture__thumbnail", "entity-picture__thumbnail--text", {
                                "entity-picture__thumbnail--no-margins": !t.defaultMargin
                            }],
                            on: {
                                click: t.clickImage
                            }
                        }, [n("span", [t._v(t._s(t.entity && t.entity.name ? t.entity.name.substring(0, 1) : ""))])])])]) : t.entity ? n("div", {
                            class: ["entity-picture", t.$mdActiveTheme, {
                                "entity-picture--is-hexagon": "hexagon" === t.shape,
                                "entity-picture--has-shadow": t.boxShadow
                            }],
                            style: t.cssVariables
                        }, ["hexagon" === t.shape ? n("div", {
                            class: ["hexagon-border", {
                                "hexagon-border--no-margins": !t.defaultMargin
                            }]
                        }) : t._e(), t._v(" "), t.pictureUrl ? n("img", {
                            directives: [{
                                name: "lazyload",
                                rawName: "v-lazyload"
                            }],
                            class: ["entity-picture__thumbnail", "entity-picture__thumbnail--image", {
                                "entity-picture__thumbnail--no-margins": !t.defaultMargin
                            }],
                            attrs: {
                                "data-url": t.pictureUrl,
                                src: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1653502999/origin/materrial/bgid2wha28a741p3ugu7.svg",
                                title: t.title,
                                alt: t.entity.name
                            },
                            on: {
                                click: t.clickImage
                            }
                        }) : n("div", {
                            class: ["entity-picture__thumbnail", "entity-picture__thumbnail--text", {
                                "entity-picture__thumbnail--no-margins": !t.defaultMargin
                            }],
                            on: {
                                click: t.clickImage
                            }
                        }, [n("span", [t._v(t._s(t.entity && t.entity.name ? t.entity.name.substring(0, 1) : ""))])])]) : t._e()
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-67c2d9a4_0", {
                        source: ".entity-picture{min-width:var(--size)}.entity-picture__link{text-decoration:none!important;display:block}.entity-picture__thumbnail{display:flex;position:relative;border-radius:var(--size);width:var(--size);height:var(--size)!important;border:var(--border-width) solid;clear:both;margin:16px auto;background-color:#383b40;border-color:#5e626b}.entity-picture__thumbnail--no-margins{margin:auto}.entity-picture__thumbnail--text{text-transform:uppercase;justify-content:center;align-items:center;line-height:var(--size)}.entity-picture__thumbnail--text span{font-size:var(--font-size);position:absolute;color:rgba(255,255,255,.9)}.entity-picture.entity-picture--has-shadow .entity-picture__thumbnail{box-shadow:var(--box-shadow)}.entity-picture--is-hexagon{position:relative}.entity-picture--is-hexagon .entity-picture__thumbnail{border:unset;border-radius:0;width:calc(var(--size) - var(--border-width) * 2);height:calc(var(--size) - var(--border-width) * 2)!important;transform:translateY(var(--border-width));clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%)}.entity-picture--is-hexagon .entity-picture__thumbnail--image{background:0 0!important;object-fit:cover}.entity-picture--is-hexagon.entity-picture--has-shadow{filter:drop-shadow(var(--box-shadow))}.entity-picture--is-hexagon .hexagon-border{position:absolute;top:0;left:calc(50% - var(--size)/ 2);width:var(--size);height:var(--size);margin:16px auto;clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);background-color:#5e626b}.entity-picture--is-hexagon .hexagon-border--no-margins{margin:auto}",
                        map: void 0,
                        media: void 0
                    })
                }), h, undefined, !1, undefined, !1, l.a, void 0, void 0)
        },
        365: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return l
            }));
            var o = n(3),
                r = n(4),
                d = {
                    name: "tdl-brand-logo",
                    props: {
                        theme: {
                            type: String,
                            required: !1,
                            default: "dark"
                        },
                        enableTorreCoLogo: {
                            type: Boolean,
                            required: !1,
                            default: !1
                        }
                    },
                    computed: {
                        cssVariables: function() {
                            return {
                                "--theme": this.theme
                            }
                        }
                    }
                },
                l = Object(o.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return t.enableTorreCoLogo ? n("div", {
                            staticClass: "tdl-brand-logo-image",
                            style: t.cssVariables
                        }, [n("svg", {
                            staticClass: "logo-svg-image",
                            attrs: {
                                width: "135",
                                height: "20",
                                viewBox: "0 0 135 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg"
                            }
                        }, [n("path", {
                            attrs: {
                                d: "M6.325 18.225C4.1 18.225 2.525 17.25 2.525 14.35V7.4H0.85V4.8H2.525V1.175H5.55V4.8H9.1V7.4H5.55V13.875C5.55 15.05 6.15 15.525 7.175 15.525C7.85 15.525 8.45 15.375 9.05 15.075V17.55C8.3 17.975 7.475 18.225 6.325 18.225ZM18.0871 18.3C14.0621 18.3 11.0871 15.225 11.0871 11.475V11.425C11.0871 7.65 14.0871 4.525 18.1371 4.525C22.1871 4.525 25.1621 7.6 25.1621 11.375V11.425C25.1621 15.175 22.1621 18.3 18.0871 18.3ZM18.1371 15.65C20.5871 15.65 22.1371 13.75 22.1371 11.475V11.425C22.1371 9.1 20.4621 7.175 18.0871 7.175C15.6621 7.175 14.1121 9.075 14.1121 11.375V11.425C14.1121 13.725 15.7871 15.65 18.1371 15.65ZM28.2178 18V4.8H31.2678V7.775C32.0928 5.8 33.6178 4.45 35.9428 4.55V7.75H35.7678C33.1178 7.75 31.2678 9.475 31.2678 12.975V18H28.2178ZM38.5449 18V4.8H41.5949V7.775C42.4199 5.8 43.9449 4.45 46.2699 4.55V7.75H46.0949C43.4449 7.75 41.5949 9.475 41.5949 12.975V18H38.5449ZM54.5076 18.3C50.6826 18.3 47.7326 15.525 47.7326 11.45V11.4C47.7326 7.625 50.4076 4.525 54.1826 4.525C58.3826 4.525 60.5076 7.825 60.5076 11.625C60.5076 11.9 60.4826 12.175 60.4576 12.475H50.7576C51.0826 14.625 52.6076 15.825 54.5576 15.825C56.0326 15.825 57.0826 15.275 58.1326 14.25L59.9076 15.825C58.6576 17.325 56.9326 18.3 54.5076 18.3ZM50.7326 10.475H57.5076C57.3076 8.525 56.1576 7 54.1576 7C52.3076 7 51.0076 8.425 50.7326 10.475Z",
                                fill: "white",
                                "fill-opacity": "0.9"
                            }
                        }), t._v(" "), n("path", {
                            attrs: {
                                d: "M63.5455 18V15.375H65.8455V18H63.5455ZM73.749 18.275C71.349 18.275 68.924 16.9 68.924 14.25V14.2C68.924 11.475 71.174 10.025 74.449 10.025C76.099 10.025 77.274 10.25 78.424 10.575V10.125C78.424 7.8 76.999 6.6 74.574 6.6C73.049 6.6 71.849 7 70.649 7.55L70.074 5.975C71.499 5.325 72.899 4.9 74.774 4.9C76.599 4.9 77.999 5.375 78.949 6.325C79.824 7.2 80.274 8.45 80.274 10.1V18H78.424V16.05C77.524 17.225 76.024 18.275 73.749 18.275ZM74.124 16.75C76.499 16.75 78.449 15.3 78.449 13.25V12C77.499 11.725 76.224 11.45 74.649 11.45C72.224 11.45 70.874 12.5 70.874 14.125V14.175C70.874 15.8 72.374 16.75 74.124 16.75ZM84.4266 2.25V0.124999H86.6266V2.25H84.4266ZM84.5516 18V5.075H86.4766V18H84.5516Z",
                                fill: "#CDDC39"
                            }
                        })])]) : n("div", {
                            staticClass: "tdl-brand-logo",
                            style: t.cssVariables
                        }, [n("svg", {
                            staticClass: "logo-svg",
                            attrs: {
                                viewBox: "0 0 113 33",
                                version: "1.1",
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink"
                            }
                        }, [n("g", {
                            attrs: {
                                id: "Page-1",
                                stroke: "none",
                                "stroke-width": "1"
                            }
                        }, [n("path", {
                            attrs: {
                                d: "M10.9635,32.423 C13.1255,32.423 14.6765,31.953 16.0865,31.154 L16.0865,26.501 C14.9585,27.065 13.8305,27.347 12.5615,27.347 C10.6345,27.347 9.5065,26.454 9.5065,24.245 L9.5065,12.072 L16.1805,12.072 L16.1805,7.184 L9.5065,7.184 L9.5065,0.369 L3.8195,0.369 L3.8195,7.184 L0.6705,7.184 L0.6705,12.072 L3.8195,12.072 L3.8195,25.138 C3.8195,30.59 6.7805,32.423 10.9635,32.423 Z M33.0535,32.564 C40.6050571,32.564 46.1929447,26.8556582 46.3510575,19.9404098 L46.3545,19.545 C46.3545,12.448 40.7615,6.667 33.1475,6.667 C25.6422714,6.667 20.0550457,12.3753418 19.8969424,19.3356046 L19.8935,19.733 C19.8935,26.783 25.4865,32.564 33.0535,32.564 Z M33.1475,27.582 C28.8144615,27.582 25.7020847,24.1008539 25.5839803,19.8876586 L25.5805,19.545 C25.5805,15.221 28.4945,11.649 33.0535,11.649 C37.4326346,11.649 40.5458979,15.1301461 40.6640193,19.3876816 L40.6675,19.733 C40.6675,24.01 37.7535,27.582 33.1475,27.582 Z M52.0885,32 L57.8225,32 L57.8225,22.553 C57.8225,15.973 61.3005,12.73 66.2825,12.73 L66.6115,12.73 L66.6115,6.714 C62.2405,6.526 59.3735,9.064 57.8225,12.777 L57.8225,7.184 L52.0885,7.184 L52.0885,32 Z M71.4995,32 L77.2335,32 L77.2335,22.553 C77.2335,15.973 80.7115,12.73 85.6935,12.73 L86.0225,12.73 L86.0225,6.714 C81.6515,6.526 78.7845,9.064 77.2335,12.777 L77.2335,7.184 L71.4995,7.184 L71.4995,32 Z M101.4855,32.564 C106.0445,32.564 109.2875,30.731 111.6375,27.911 L108.3005,24.95 C106.3265,26.877 104.3525,27.911 101.5795,27.911 C97.9135,27.911 95.0465,25.655 94.4355,21.613 L112.6715,21.613 C112.7185,21.049 112.7655,20.532 112.7655,20.015 C112.7655,12.871 108.7705,6.667 100.8745,6.667 C93.8818676,6.667 88.896859,12.3248486 88.7517533,19.2797349 L88.7485,19.686 C88.7485,27.347 94.2945,32.564 101.4855,32.564 Z M94.3885,17.853 C94.9055,13.999 97.3495,11.32 100.8275,11.32 C104.5875,11.32 106.7495,14.187 107.1255,17.853 L94.3885,17.853 Z"
                            }
                        })])])])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-695ad797_0", {
                        source: ".tdl-brand-logo .logo-svg{width:60px;fill:#f3f3f3}.tdl-brand-logo-image .logo-svg-image{width:122px;min-width:122px;height:18px;fill:#f3f3f3}",
                        map: void 0,
                        media: void 0
                    })
                }), d, undefined, !1, undefined, !1, r.a, void 0, void 0)
        },
        438: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            }));
            n(65);
            var o = n(132),
                r = n(366),
                d = n(184),
                l = n(105),
                c = n(3),
                m = n(4),
                _ = {
                    name: "tdl-bottom-drawer",
                    components: {
                        MdBackdrop: o.a,
                        MdDivider: r.a,
                        MdToolbar: d.a,
                        MdWhiteframe: l.a
                    },
                    data: function() {
                        return {
                            active: !1,
                            opened: !1,
                            positionLocked: !1,
                            touchStartPosition: null
                        }
                    },
                    beforeDestroy: function() {
                        this.removeEventListeners()
                    },
                    methods: {
                        open: function() {
                            this.active = !0, document.body.style.overflow = "hidden", document.body.classList.add("drawer-open"), this.registerEventListeners(), this.$emit("active")
                        },
                        close: function() {
                            this.active = !1, this.opened = !1, this.positionLocked = !1, setTimeout((function() {
                                document.body.classList.remove("drawer-open"), document.body.style.overflow = "scroll"
                            }), 100), this.removeEventListeners(), this.$emit("close")
                        },
                        openFully: function() {
                            this.positionLocked = !0, this.active = !1, this.opened = !0, this.removeEventListeners(), this.$emit("open")
                        },
                        registerEventListeners: function() {
                            var element = document.getElementById("bottomDrawerContainer");
                            element && (element.addEventListener("touchstart", this.setTouchStartPosition), element.addEventListener("touchend", this.onTouchEnd), element.addEventListener("wheel", this.onWheelScroll))
                        },
                        removeEventListeners: function() {
                            var element = document.getElementById("bottomDrawerContainer");
                            element && (element.removeEventListener("touchstart", this.setTouchStartPosition), element.removeEventListener("touchend", this.onTouchEnd), element.removeEventListener("wheel", this.onWheelScroll))
                        },
                        setTouchStartPosition: function(t) {
                            this.touchStartPosition = t.changedTouches[0]
                        },
                        onTouchEnd: function(t) {
                            var e = t.changedTouches[0];
                            e.screenY > this.touchStartPosition.screenY + 30 ? this.positionLocked || this.close() : e.screenY < this.touchStartPosition.screenY - 30 && (this.positionLocked || this.openFully())
                        },
                        onWheelScroll: function(t) {
                            t.deltaY < 0 && !this.positionLocked ? this.close() : t.deltaY > 0 && !this.positionLocked && this.openFully()
                        }
                    }
                },
                h = Object(c.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            class: ["tdl-bottom-drawer", {
                                active: t.active,
                                opened: t.opened
                            }],
                            attrs: {
                                tabindex: "0"
                            },
                            on: {
                                keyup: function(e) {
                                    return !e.type.indexOf("key") && t._k(e.keyCode, "esc", 27, e.key, ["Esc", "Escape"]) ? null : t.close.apply(null, arguments)
                                }
                            }
                        }, [n("md-whiteframe", {
                            staticClass: "tdl-bottom-drawer__drawer"
                        }, [n("md-toolbar", {
                            class: ["tdl-bottom-drawer__toolbar", {
                                "tdl-bottom-drawer__toolbar-opened": t.opened
                            }]
                        }, [t._t("toolbar")], 2), t._v(" "), n("md-divider", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.opened,
                                expression: "!opened"
                            }],
                            staticClass: "tdl-bottom-drawer__divider"
                        }), t._v(" "), n("div", {
                            staticClass: "tdl-bottom-drawer__container",
                            attrs: {
                                id: "bottomDrawerContainer"
                            }
                        }, [t._t("default")], 2)], 1), t._v(" "), n("md-backdrop", {
                            staticClass: "tdl-bottom-drawer__backdrop",
                            on: {
                                close: t.close
                            }
                        })], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-54521900_0", {
                        source: ".tdl-bottom-drawer__drawer{width:100%;right:0;bottom:0;border-radius:4px;pointer-events:none;-webkit-overflow-scrolling:touch;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:transform;will-change:transform;background-color:#383b40;transform:translate3D(0,120%,0)}.tdl-bottom-drawer__drawer.md-whiteframe{position:fixed;z-index:100}.tdl-bottom-drawer__md-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1);transition-property:opacity;will-change:opacity}.tdl-bottom-drawer__bottom{width:100%;height:100%;border:none}.tdl-bottom-drawer.active .tdl-bottom-drawer__drawer{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);pointer-events:auto;transform:translate3D(0,50%,0)}.tdl-bottom-drawer.active .tdl-bottom-drawer__backdrop{opacity:1;pointer-events:auto;position:fixed}.tdl-bottom-drawer.opened .tdl-bottom-drawer__drawer{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);pointer-events:auto;transform:translate3D(0,0,0);top:0}.tdl-bottom-drawer.opened .tdl-bottom-drawer__container{overflow-y:auto;height:calc(100% - 56px)}.tdl-bottom-drawer__toolbar{background-color:#383b40}.tdl-bottom-drawer__toolbar-opened{box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);margin-bottom:3px}.tdl-bottom-drawer__divider{color:rgba(255,255,255,.2);margin:0}.tdl-bottom-drawer__container{padding:18px 0 8px}@media (hover:none){.tdl-bottom-drawer .md-button:not([disabled]):hover{background-color:unset!important}}",
                        map: void 0,
                        media: void 0
                    })
                }), _, undefined, !1, undefined, !1, m.a, void 0, void 0)
        },
        439: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return c
            }));
            n(32), n(52), n(83);
            var o = n(351),
                r = n(3),
                d = n(4),
                l = o.a,
                c = Object(r.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            class: ["tdl-entity-render", {
                                "tdl-entity-render--vertical": t.vertical,
                                "tdl-entity-render--actions-next-line": t.actionsNextLine,
                                "tdl-entity-render--compact-entity": t.compactEntity
                            }],
                            style: t.cssProps
                        }, [t.displayPicture ? n("div", {
                            staticClass: "tdl-entity-render__picture"
                        }, [n("tdl-entity-picture", {
                            attrs: {
                                entity: t.entity,
                                "border-width": t.imageBorderWidth,
                                size: t.imageSize,
                                "default-margin": !1,
                                shape: t.shape,
                                href: t.href,
                                target: t.hrefTarget
                            }
                        })], 1) : t._e(), t._v(" "), n("div", {
                            class: ["tdl-entity-render__entity-data", {
                                "tdl-entity-render--fullwidth": t.actionsNextLine
                            }]
                        }, [n("h5", {
                            class: ["tdl-entity-render__entity-name", {
                                "md-subheading-1": !t.vertical,
                                "md-body-1": t.vertical
                            }]
                        }, [t.entity.prefix ? n("span", {
                            staticClass: "tdl-entity-render__prefix"
                        }, [t._v("\n        " + t._s(t.entity.prefix) + ": \n      ")]) : t._e(), t._v(" "), t.href ? n("a", {
                            staticClass: "tdl-entity-render__link",
                            attrs: {
                                href: t.href,
                                target: t.hrefTarget
                            }
                        }, [t._v("\n        " + t._s(t.entity.name) + "\n      ")]) : n("span", {
                            staticClass: "tdl-entity-render__name"
                        }, [t._v("\n        " + t._s(t.entity.name) + "\n        "), "person" === t.entityType ? n("span", [t.vertical ? n("md-icon", {
                            staticClass: "tdl-entity-render__icon-rotated",
                            attrs: {
                                "icon-svg": t.mdiMinusCircleIcon
                            }
                        }) : t._e(), t._v(" "), n("md-tooltip", [t._v(t._s(t.entity.name.replace(/ .*/, "")) + " " + t._s(t.$t("doesn’t have a Torre genome, yet.")))])], 1) : t._e()]), t._v(" "), t.entity.nameSuffix ? n("span", {
                            staticClass: "text-contrast-54"
                        }, [t._v("\n        " + t._s(t.entity.nameSuffix) + "\n      ")]) : t._e(), t._v(" "), t.displayVerified ? n("span", {
                            class: [{
                                "tdl-entity-render__verified": !t.displayWeight
                            }, {
                                "tdl-entity-render__verified-weight": t.displayWeight
                            }]
                        }, [n("md-icon", {
                            staticClass: "text-contrast-54",
                            attrs: {
                                "icon-svg": t.mdiCheckDecagramIcon,
                                size: t.iconSize + "px"
                            }
                        }), t._v(" "), n("md-tooltip", {
                            attrs: {
                                "md-direction": "bottom"
                            }
                        }, [t._v("\n          " + t._s(t.$t("Verified")) + "\n        ")])], 1) : t._e(), t._v(" "), t.displayWeight ? n("span", [n("tdl-weight-render", {
                            attrs: {
                                value: t.entity.weight,
                                "icon-color": "rgba(0,0,0,0.87)",
                                "icon-size": t.iconSize,
                                "person-id": "" + t.entity.id,
                                "icon-position": "left",
                                "info-icon-display": !1,
                                trackable: !0,
                                "dot-divider": !0,
                                "dot-divider-size": 8,
                                "track-render": t.trackWeight
                            }
                        })], 1) : t._e()]), t._v(" "), t.displayProfessionalHeadline ? n("span", {
                            staticClass: "tdl-entity-render__professional-headline"
                        }, [n("span", {
                            class: [{
                                "md-caption": !t.vertical
                            }, {
                                "md-label": t.vertical
                            }],
                            attrs: {
                                title: t.entity.professionalHeadline
                            }
                        }, [t._v("\n        " + t._s(t.entity.professionalHeadline) + "\n      ")]), t._v(" "), t._l(t.optionalSubTitle, (function(e, o) {
                            return n("span", {
                                key: o
                            }, [e.icon && e.color && e.text ? n("span", {
                                staticClass: "md-label tdl-entity-render__subtitle-icon"
                            }, [n("md-icon", {
                                class: e.color,
                                attrs: {
                                    "icon-svg": e.icon,
                                    size: "16px"
                                }
                            }), t._v("\n          " + t._s(e.text) + "\n        ")], 1) : n("span", {
                                staticClass: "md-label tdl-entity-render__status",
                                attrs: {
                                    title: e
                                }
                            }, [t._v("\n          " + t._s(e) + "\n        ")])])
                        }))], 2) : t.optionalSubTitle.length > 0 && !t.displayProfessionalHeadline ? n("span", t._l(t.optionalSubTitle, (function(e, o) {
                            return n("span", {
                                key: o
                            }, [e.icon && e.color && e.text ? n("span", {
                                staticClass: "md-label tdl-entity-render__subtitle-icon"
                            }, [n("md-icon", {
                                class: e.color,
                                attrs: {
                                    "icon-svg": e.icon,
                                    size: "16px"
                                }
                            }), t._v("\n          " + t._s(e.text) + "\n        ")], 1) : n("span", {
                                staticClass: "md-label tdl-entity-render__status",
                                attrs: {
                                    title: e
                                }
                            }, [t._v("\n          " + t._s(e) + "\n        ")])])
                        })), 0) : t.vertical ? n("span", {
                            staticClass: "tdl-entity-render__professional-headline"
                        }) : t._e(), t._v(" "), t.entity.jobsPosted ? n("span", {
                            staticClass: "tdl-entity-render__jobs-posted md-caption"
                        }, [t._v("\n      " + t._s(t.entity.jobsPosted) + "\n    ")]) : t._e()]), t._v(" "), t.signalButtonInfo ? n("div", {
                            class: ["tdl-entity-render__actions", {
                                "tdl-entity-render--align-right": t.actionsNextLine
                            }]
                        }, [n("tdl-signal-button", {
                            attrs: {
                                "entity-name": t.entity.name,
                                "entity-type": t.entityType,
                                username: t.signalButtonInfo.username,
                                "state-type": t.signalButtonInfo.signalState,
                                "notifications-type": t.signalButtonInfo.notificationsType,
                                "menu-styles": t.menuStyles,
                                mini: t.signalButtonInfo.mini
                            },
                            on: {
                                "about-signals": t.aboutSignals,
                                "state-update": t.handleStateUpdate,
                                "notifications-type-update": function(e) {
                                    return t.handleNotificationsTypeUpdate(e)
                                }
                            }
                        })], 1) : t._e()])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-89272840_0", {
                        source: ".tdl-lazy-loader-hide-background-image[data-v-89272840]{background-image:none!important;top:0!important}.tdl-entity-render[data-v-89272840]{display:flex;width:100%}.tdl-entity-render .text-contrast-54[data-v-89272840]{color:rgba(255,255,255,.65)}.tdl-entity-render__picture[data-v-89272840]{margin:8px 12px 8px 0}.tdl-entity-render__entity-data[data-v-89272840]{display:flex;flex-direction:column;justify-content:center;width:auto;overflow:hidden;color:rgba(255,255,255,.65)}.tdl-entity-render__entity-data>*[data-v-89272840]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;top:calc(var(--image-border-width)/ 2)}.tdl-entity-render__entity-data .md-icon[data-v-89272840]{min-width:var(--size);width:var(--size);min-height:var(--size);height:var(--size);font-size:var(--size);vertical-align:baseline}.tdl-entity-render__entity-data .tdl-entity-render__verified[data-v-89272840]{overflow:visible}.tdl-entity-render__entity-data .tdl-entity-render__verified .md-icon[data-v-89272840]{margin-right:0!important}.tdl-entity-render__prefix[data-v-89272840]{overflow:visible;color:rgba(255,255,255,.65)}.tdl-entity-render__entity-name[data-v-89272840]{margin:0;display:flex;font-size:14px}.tdl-entity-render__entity-name .recommendation-weight[data-v-89272840]{position:relative;top:-2px}.tdl-entity-render__icon-rotated[data-v-89272840]{min-width:14px!important;width:14px!important;min-height:14px!important;height:14px!important;font-size:14px!important;transform:rotate(-45deg);vertical-align:baseline!important;color:rgba(255,255,255,.5)}.tdl-entity-render__actions[data-v-89272840]{display:flex;flex-direction:column;justify-content:center;margin-left:auto;padding-left:12px}.tdl-entity-render__verified *[data-v-89272840]{margin-right:-1px;top:3px}.tdl-entity-render__verified-weight *[data-v-89272840]{margin-right:-4px;top:1px}.tdl-entity-render__status[data-v-89272840]{display:flex;line-height:20px}.tdl-entity-render__subtitle-icon[data-v-89272840]{display:flex;margin-top:2px;align-items:center;color:rgba(255,255,255,.9)}.tdl-entity-render__subtitle-icon .md-icon[data-v-89272840]{margin:0;margin-right:4px}.tdl-entity-render--compact-entity .tdl-entity-render__picture[data-v-89272840]{margin:0 12px 0 0}.tdl-entity-render--compact-entity .tdl-entity-render__professional-headline[data-v-89272840]{line-height:normal}.tdl-entity-render--compact-entity .tdl-entity-render__professional-headline .md-caption[data-v-89272840]{font-size:12px}.tdl-entity-render--compact-entity .tdl-entity-render__entity-name[data-v-89272840]{font-size:16px;color:rgba(255,255,255,.9)}.tdl-entity-render--compact-entity .tdl-entity-render__entity-data[data-v-89272840]{font-size:12px}.tdl-entity-render--vertical[data-v-89272840]{flex-direction:column}.tdl-entity-render--vertical .tdl-entity-render__entity-data[data-v-89272840]{margin:0;text-align:center}.tdl-entity-render--vertical .tdl-entity-render__picture[data-v-89272840]{margin-right:0}.tdl-entity-render--vertical .tdl-entity-render__actions[data-v-89272840]{align-items:center;margin-left:inherit}.tdl-entity-render--vertical .tdl-entity-render__entity-name[data-v-89272840]{display:flex;justify-content:center;align-items:flex-end;margin:8px 0 6px;line-height:1}.tdl-entity-render--vertical .tdl-entity-render__entity-name a[data-v-89272840]{margin-right:2px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tdl-entity-render--vertical .tdl-entity-render__entity-name .recommendation-weight[data-v-89272840]{top:0}.tdl-entity-render--vertical .tdl-entity-render__professional-headline[data-v-89272840]{min-height:14px;margin-bottom:14px}.tdl-entity-render--vertical .tdl-entity-render__jobs-posted[data-v-89272840]{min-height:14px;margin-bottom:14px}.tdl-entity-render--vertical .tdl-entity-render__verified *[data-v-89272840]{margin-right:0;top:1px}.tdl-entity-render--actions-next-line[data-v-89272840]{flex-wrap:wrap;justify-content:flex-end}.tdl-entity-render--fullwidth[data-v-89272840]{min-width:70%}.tdl-entity-render--align-right[data-v-89272840]{align-items:flex-end;width:100%}.tdl-entity-render__link[data-v-89272840]{text-decoration:none!important;display:inline-block;overflow:hidden;text-overflow:ellipsis;margin-right:8px}.tdl-entity-render__name[data-v-89272840]{margin-right:8px}",
                        map: void 0,
                        media: void 0
                    })
                }), l, "data-v-89272840", !1, undefined, !1, d.a, void 0, void 0)
        },
        780: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return m
            }));
            var o = n(2),
                r = n(544),
                d = n(3),
                l = n(4),
                c = o.default.extend({
                    name: "tdl-companion-download-banner",
                    mixins: [r.a],
                    props: {
                        lazyLoad: {
                            type: Boolean,
                            default: !1
                        },
                        showBadgeInDesktop: {
                            type: Boolean,
                            default: !0
                        },
                        showQr: {
                            type: Boolean,
                            default: !1
                        },
                        contentInLine: {
                            type: Boolean,
                            default: !1
                        },
                        showBothBadges: {
                            type: Boolean,
                            default: !1
                        },
                        contentInDialog: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    i18n: {
                        messages: {
                            en: {
                                "Get the Torre Messenger app": "Get the Torre Messenger app",
                                "Stay on top of your messages and notifications in Torre.": "Stay on top of your messages and notifications in Torre."
                            },
                            es: {
                                "Get the Torre Messenger app": "Obtén la app de Torre Messenger",
                                "Stay on top of your messages and notifications in Torre.": "Mantente al tanto de tus mensajes y notificaciones en Torre."
                            }
                        }
                    }
                }),
                m = Object(d.a)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            class: ["tdl-companion-download-banner", {
                                "tdl-companion-download-banner__dialog": t.contentInDialog
                            }]
                        }, [n("div", {
                            staticClass: "tdl-companion-download-banner__body"
                        }, [t.lazyLoad ? n("img", {
                            staticClass: "tdl-companion-download-banner__torre-companion-logo lazyload",
                            attrs: {
                                "data-src": "https://res.cloudinary.com/torre-technologies-co/image/upload/v1655399343/origin/torre-app/j2pmx28r7ltgaytxh8lh.png",
                                alt: "torre-companion-logo"
                            }
                        }) : n("img", {
                            staticClass: "tdl-companion-download-banner__torre-companion-logo",
                            attrs: {
                                src: "https://res.cloudinary.com/torre-technologies-co/image/upload/v1655399343/origin/torre-app/j2pmx28r7ltgaytxh8lh.png",
                                alt: "torre-companion-logo"
                            }
                        }), t._v(" "), n("div", {
                            class: ["tdl-companion-download-banner__body__content", {
                                "in-line": t.contentInLine
                            }]
                        }, [n("div", {
                            staticClass: "tdl-companion-download-banner__body__content__description"
                        }, [n("span", {
                            staticClass: "tdl-companion-download-banner__body__content__description__title"
                        }, [t._v(t._s(t.$t("Get the Torre Messenger app")))]), t._v(" "), n("p", {
                            staticClass: "tdl-companion-download-banner__body__content__description__text-description"
                        }, [t._v("\n          " + t._s(t.$t("Stay on top of your messages and notifications in Torre.")) + "\n        ")])]), t._v(" "), n("div", {
                            class: ["tdl-companion-download-banner__mobile--badge", {
                                "hide-desktop": !t.showBadgeInDesktop,
                                double: t.showBothBadges
                            }]
                        }, [t.isiOS || t.showBothBadges ? n("a", {
                            attrs: {
                                href: t.appStoreLink
                            }
                        }, [t.lazyLoad ? n("img", {
                            staticClass: "lazyload",
                            attrs: {
                                "data-src": t.appStoreBadgeUrl,
                                alt: "appstore-badge"
                            }
                        }) : n("img", {
                            attrs: {
                                src: t.appStoreBadgeUrl,
                                alt: "appstore-badge"
                            }
                        })]) : t._e(), t._v(" "), !t.isiOS || t.showBothBadges ? n("a", {
                            attrs: {
                                href: t.googlePlayLink
                            }
                        }, [t.lazyLoad ? n("img", {
                            staticClass: "lazyload",
                            attrs: {
                                "data-src": t.googlePlayBadgeUrl,
                                alt: "googleplay-badge"
                            }
                        }) : n("img", {
                            attrs: {
                                src: t.googlePlayBadgeUrl,
                                alt: "googleplay-badge"
                            }
                        })]) : t._e()])]), t._v(" "), t.showQr ? n("div", {
                            class: ["tdl-companion-download-banner__qr", {
                                "tdl-companion-download-banner__qr__dialog": t.contentInDialog
                            }]
                        }, [t.lazyLoad ? n("img", {
                            staticClass: "lazyload",
                            attrs: {
                                "data-src": t.qrUrl,
                                alt: "qr-download-image"
                            }
                        }) : n("img", {
                            attrs: {
                                src: t.qrUrl,
                                alt: "qr-download-image"
                            }
                        })]) : t._e()])])
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-13088e47_0", {
                        source: ".tdl-companion-download-banner{background-color:#383b40;height:123px;margin-top:24px;margin-inline:-16px}.tdl-companion-download-banner__dialog{margin-inline:-8px}.tdl-companion-download-banner__torre-companion-logo{max-height:52px;border-radius:8px;margin:0}.tdl-companion-download-banner__body{display:flex;flex-direction:row;align-items:center;margin-inline:16px;gap:16px;height:100%}.tdl-companion-download-banner__body__content{margin-block:16px}.tdl-companion-download-banner__body__content.in-line{margin-block:0;margin-top:8px}@media (max-width:720px){.tdl-companion-download-banner__body__content.in-line{margin-top:32px}}.tdl-companion-download-banner__body__content__description{margin-bottom:12px}.tdl-companion-download-banner__body__content__description__title{color:rgba(255,255,255,.9)}.tdl-companion-download-banner__body__content__description__text-description{color:rgba(255,255,255,.65);margin:0;font-size:12px;margin-bottom:12px;line-height:16px}.tdl-companion-download-banner__mobile--badge{max-width:90px;max-height:27px}@media (max-width:720px){.tdl-companion-download-banner__mobile--badge.double{max-width:270px;display:flex!important}.tdl-companion-download-banner__mobile--badge.double a{max-width:50%;padding-right:16px}.tdl-companion-download-banner__mobile--badge.double a img{max-height:30px;min-height:30px}}.tdl-companion-download-banner__mobile--badge.hide-desktop{display:none}@media (max-width:720px){.tdl-companion-download-banner__mobile--badge.hide-desktop{display:inherit}}.tdl-companion-download-banner__qr{margin-left:auto}.tdl-companion-download-banner__qr img{max-width:80px}.tdl-companion-download-banner__qr__dialog{flex-grow:1;display:flex;justify-content:flex-end}@media (max-width:720px){.tdl-companion-download-banner__qr{display:none}}",
                        map: void 0,
                        media: void 0
                    })
                }), c, undefined, !1, undefined, !1, l.a, void 0, void 0)
        }
    }
]);