! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "73545a93-d720-4312-9560-9666c4d1c41d", e._sentryDebugIdIdentifier = "sentry-dbid-73545a93-d720-4312-9560-9666c4d1c41d")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        826: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return h
            }));
            c(52), c(83), c(28), c(45), c(74), c(51), c(32);
            var n = c(2),
                r = c(133),
                o = c(179),
                d = "crawled-organizations",
                l = function(e) {
                    return !e || e.includes(d) ? "pad" : "fill"
                },
                m = function(e) {
                    return !e || e.includes(d) ? ",b_auto" : ""
                },
                script = n.default.extend({
                    name: "tds-entity-picture",
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
                            default: "hexagon",
                            validator: function(e) {
                                return ["circle", "hexagon"].indexOf(e) >= 0
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
                            return this.thumbnail && this.entity.pictureThumbnail ? this.entity.pictureThumbnail : this.entity.picture ? this.isCrawledPicture ? function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 150,
                                    c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 150,
                                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l(e),
                                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m(e);
                                return e.replace("/upload/", "/upload/c_".concat(n, ",h_").concat(t, ",w_").concat(c).concat(r, "/"))
                            }(this.entity.picture) : this.entity.picture : ""
                        },
                        isCrawledPicture: function() {
                            var e;
                            return !(null === (e = this.entity.picture) || void 0 === e || !e.includes("crawled-organizations"))
                        }
                    },
                    methods: {
                        clickImage: function() {
                            this.$emit("image-clicked")
                        }
                    }
                }),
                v = script,
                h = Object(o.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return e.entity ? c(e.href ? "a" : "div", {
                            tag: "component",
                            class: [{
                                "tds-entity-picture__link": e.href
                            }, e.$tmdActiveTheme],
                            attrs: {
                                href: e.href || void 0,
                                target: e.hrefTarget
                            }
                        }, [c("div", {
                            class: ["tds-entity-picture", e.$mdActiveTheme, {
                                "tds-entity-picture--is-hexagon": "hexagon" === e.shape,
                                "tds-entity-picture--has-shadow": e.boxShadow
                            }],
                            style: e.cssVariables
                        }, ["hexagon" === e.shape ? c("div", {
                            staticClass: "tds-hexagon-border"
                        }) : e._e(), e._v(" "), e.pictureUrl ? c("img", {
                            directives: [{
                                name: "lazyload",
                                rawName: "v-lazyload"
                            }],
                            class: ["tds-entity-picture__thumbnail", "tds-entity-picture__thumbnail--image", {
                                "tds-entity-picture__thumbnail--no-margins": !e.defaultMargin
                            }],
                            attrs: {
                                "data-url": e.pictureUrl,
                                src: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90/v1/origin/materrial/bgid2wha28a741p3ugu7",
                                title: e.title,
                                alt: e.entity.name
                            },
                            on: {
                                click: e.clickImage
                            }
                        }) : c("div", {
                            class: ["tds-entity-picture__thumbnail", "tds-entity-picture__thumbnail--text", {
                                "tds-entity-picture__thumbnail--no-margins": !e.defaultMargin
                            }],
                            on: {
                                click: e.clickImage
                            }
                        }, [c("span", [e._v(e._s(e.entity && e.entity.name ? e.entity.name.substring(0, 1) : ""))])])])]) : e._e()
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-afbb1062_0", {
                        source: ".tds-entity-picture[data-v-afbb1062]{min-width:var(--size)}.tds-entity-picture__link[data-v-afbb1062]{text-decoration:none!important;display:block}.tds-entity-picture__thumbnail[data-v-afbb1062]{display:flex;position:relative;border-radius:var(--size);width:var(--size);height:var(--size)!important;border:var(--border-width) solid;clear:both;margin:16px auto}.tds-entity-picture__thumbnail--no-margins[data-v-afbb1062]{margin:auto}.tds-entity-picture__thumbnail--text[data-v-afbb1062]{text-transform:uppercase;justify-content:center;align-items:center;line-height:var(--size)}.tds-entity-picture__thumbnail--text span[data-v-afbb1062]{font-size:var(--font-size);position:absolute}.tds-entity-picture.tds-entity-picture--has-shadow .tds-entity-picture__thumbnail[data-v-afbb1062]{box-shadow:var(--box-shadow)}.tds-entity-picture--is-hexagon[data-v-afbb1062]{position:relative}.tds-entity-picture--is-hexagon .tds-entity-picture__thumbnail[data-v-afbb1062]{border:unset;border-radius:0;width:calc(var(--size) - var(--border-width) * 2);height:calc(var(--size) - var(--border-width) * 2)!important;transform:translateY(var(--border-width));clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%)}.tds-entity-picture--is-hexagon .tds-entity-picture__thumbnail--image[data-v-afbb1062]{background:0 0!important;object-fit:cover}.tds-entity-picture--is-hexagon.tds-entity-picture--has-shadow[data-v-afbb1062]{filter:drop-shadow(var(--box-shadow))}.tds-entity-picture--is-hexagon .tds-hexagon-border[data-v-afbb1062]{position:absolute;top:0;left:calc(50% - var(--size)/ 2);width:var(--size);height:var(--size);margin:auto;clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%)}",
                        map: void 0,
                        media: void 0
                    })
                }), v, "data-v-afbb1062", !1, undefined, !1, o.a, void 0, void 0)
        },
        856: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return v
            }));
            c(28);
            var n = c(2),
                r = c(781),
                o = c(384),
                d = c(91),
                l = c(179),
                m = n.default.extend({
                    name: "tds-audio-player",
                    components: {
                        TmdCard: r.a,
                        TmdButton: o.a,
                        TmdIcon: d.a
                    },
                    props: {
                        audioUrl: {
                            type: String,
                            required: !0
                        },
                        isMobile: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            displayDuration: "00:00",
                            displayCurrentPlayTime: "00:00",
                            currentTime: 0,
                            duration: 0,
                            isPlaying: !1,
                            volume: 1,
                            volumeIcon: "volume_up",
                            showVolumeMenu: !1,
                            progressPercentage: 0,
                            volumePercentage: 100,
                            muted: !1
                        }
                    },
                    computed: {
                        playIcon: function() {
                            var e = (this.duration - this.currentTime) / this.duration;
                            return this.displayCurrentPlayTime === this.displayDuration && e < .01 && 0 !== this.duration ? "replay" : "play_arrow"
                        },
                        styles: function() {
                            return {
                                "--progress-percentage": "".concat(this.progressPercentage, "%"),
                                "--volume-percentage": "".concat(this.volumePercentage, "%")
                            }
                        }
                    },
                    methods: {
                        volumeChange: function() {
                            var e = this.$refs.audio;
                            e && (this.volume = e.volume, this.volumePercentage = 100 * e.volume, this.updateVolumeIcon())
                        },
                        updateVolumeIcon: function() {
                            var e = this.$refs.audio;
                            if (e)
                                if (this.muted) this.volumeIcon = "volume_off";
                                else switch (e.volume) {
                                    case 0:
                                        this.volumeIcon = "volume_off";
                                        break;
                                    case 1:
                                        this.volumeIcon = "volume_up";
                                        break;
                                    default:
                                        this.volumeIcon = "volume_down"
                                } else this.volumeIcon = "volume_up"
                        },
                        playAudio: function() {
                            var e = this.$refs.audio;
                            e && ("replay" === this.playIcon && (e.currentTime = 0), this.isPlaying = !0, e.play())
                        },
                        pauseAudio: function() {
                            var e = this.$refs.audio;
                            this.isPlaying = !1, e.pause()
                        },
                        initAudioPlayer: function() {
                            var e = this.$refs.audio;
                            this.duration = e.duration, this.displayDuration = this.formatAudioTime(e.duration)
                        },
                        seekAudio: function() {
                            var e = this.$refs.audio;
                            e && (e.currentTime = this.currentTime)
                        },
                        updateCurrentTime: function() {
                            var e = this.$refs.audio,
                                t = e.currentTime / e.duration * 100;
                            this.currentTime = e.currentTime, this.progressPercentage = t, this.displayCurrentPlayTime = this.formatAudioTime(e.currentTime)
                        },
                        handleVolumeClick: function() {
                            var e = this.$refs.audio;
                            e && (0 === e.volume || e.muted ? (e.volume = 1, e.muted = !1, this.muted = !1, this.volumePercentage = 100) : (e.volume = 0, e.muted = !0, this.muted = !0, this.volumePercentage = 0)), console.log("end")
                        },
                        changeVolume: function() {
                            var e = this.$refs.audio;
                            e && (e.volume = this.volume)
                        },
                        handleVolumeButtonMouseEnter: function() {
                            this.isMobile || (this.showVolumeMenu = !0)
                        },
                        handleVolumeButtonMouseLeave: function() {
                            this.isMobile || (this.showVolumeMenu = !1)
                        },
                        formatAudioTime: function(e) {
                            var t = Math.floor(e / 60),
                                c = Math.floor(e % 60),
                                n = t < 10 ? "0".concat(t) : t,
                                r = c < 10 ? "0".concat(c) : c;
                            return "".concat(n, ":").concat(r)
                        },
                        loadingAudio: function() {
                            this.pauseAudio()
                        }
                    }
                }),
                v = Object(l.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("tmd-card", {
                            staticClass: "tds-audio-player",
                            style: e.styles,
                            attrs: {
                                "md-elevation": "2",
                                "no-border-radius": ""
                            },
                            on: {
                                click: function(e) {
                                    e.stopPropagation()
                                }
                            }
                        }, [c("audio", {
                            ref: "audio",
                            attrs: {
                                id: "audio",
                                controls: ""
                            },
                            on: {
                                canplay: e.initAudioPlayer,
                                volumechange: e.volumeChange,
                                timeupdate: e.updateCurrentTime,
                                ended: e.pauseAudio,
                                waiting: e.loadingAudio
                            }
                        }, [c("source", {
                            attrs: {
                                src: e.audioUrl
                            }
                        })]), e._v(" "), e.isPlaying ? c("tmd-button", {
                            staticClass: "tds-audio-player__button tmc-text",
                            on: {
                                click: function(t) {
                                    return t.stopPropagation(), e.pauseAudio.apply(null, arguments)
                                }
                            }
                        }, [c("tmd-icon", {
                            staticClass: "record-audio__recording__icon",
                            attrs: {
                                size: "24px",
                                fill: ""
                            }
                        }, [e._v("\n      pause\n    ")])], 1) : c("tmd-button", {
                            staticClass: "tds-audio-player__button tmc-text",
                            on: {
                                click: function(t) {
                                    return t.stopPropagation(), e.playAudio.apply(null, arguments)
                                }
                            }
                        }, [c("tmd-icon", {
                            staticClass: "record-audio__recording__icon",
                            attrs: {
                                size: "24px",
                                fill: ""
                            }
                        }, [e._v("\n      " + e._s(e.playIcon) + "\n    ")])], 1), e._v(" "), c("div", {
                            staticClass: "tds-audio-player__progress-bar"
                        }, [c("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.currentTime,
                                expression: "currentTime"
                            }],
                            ref: "progressBar",
                            staticClass: "tds-audio-player__progress-bar__input tds-audio-player--range-input",
                            attrs: {
                                type: "range",
                                min: "0",
                                max: e.duration,
                                step: "0.01"
                            },
                            domProps: {
                                value: e.currentTime
                            },
                            on: {
                                input: e.seekAudio,
                                click: function(t) {
                                    return t.stopPropagation(), e.seekAudio.apply(null, arguments)
                                },
                                __r: function(t) {
                                    e.currentTime = t.target.value
                                }
                            }
                        })]), e._v(" "), c("div", {
                            staticClass: "tds-audio-player__time",
                            on: {
                                click: function(e) {
                                    e.stopPropagation()
                                }
                            }
                        }, [e._v("\n    " + e._s(e.displayCurrentPlayTime) + " / " + e._s(e.displayDuration) + "\n  ")]), e._v(" "), e.showVolumeMenu ? c("div", {
                            staticClass: "tds-audio-player__volume-slider",
                            on: {
                                mouseover: e.handleVolumeButtonMouseEnter,
                                mouseleave: e.handleVolumeButtonMouseLeave
                            }
                        }, [c("input", {
                            directives: [{
                                name: "model",
                                rawName: "v-model",
                                value: e.volume,
                                expression: "volume"
                            }],
                            ref: "volumeBar",
                            staticClass: "tds-audio-player__volume-slider__input tds-audio-player--range-input",
                            attrs: {
                                type: "range",
                                min: "0",
                                max: "1",
                                step: "0.01"
                            },
                            domProps: {
                                value: e.volume
                            },
                            on: {
                                click: function(t) {
                                    return t.stopPropagation(), e.changeVolume.apply(null, arguments)
                                },
                                __r: function(t) {
                                    e.volume = t.target.value
                                }
                            }
                        })]) : e._e(), e._v(" "), c("tmd-button", {
                            staticClass: "tds-audio-player__button tmc-text",
                            on: {
                                click: function(t) {
                                    return t.stopPropagation(), e.handleVolumeClick.apply(null, arguments)
                                },
                                mouseover: e.handleVolumeButtonMouseEnter,
                                mouseleave: e.handleVolumeButtonMouseLeave
                            }
                        }, [c("tmd-icon", {
                            staticClass: "record-audio__recording__icon",
                            attrs: {
                                size: "24px",
                                fill: ""
                            }
                        }, [e._v("\n      " + e._s(e.volumeIcon) + "\n    ")])], 1)], 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-6edef302_0", {
                        source: ".tds-audio-player[data-v-6edef302]{display:flex;justify-content:center;flex-flow:row;align-items:center;gap:12px;white-space:nowrap}.tds-audio-player audio[data-v-6edef302]{display:none}.tds-audio-player__button[data-v-6edef302]{min-width:40px!important;padding:0 0!important;margin:0 0!important}.tds-audio-player__progress-bar[data-v-6edef302]{width:100%;height:4px;border-radius:2px;position:relative}.tds-audio-player__volume-slider[data-v-6edef302]{width:10%;height:4px;border-radius:2px;position:relative;direction:rtl}.tds-audio-player--range-input[data-v-6edef302]{-webkit-appearance:none;appearance:none;width:100%;height:100%;border:none;outline:0;position:absolute;cursor:pointer;border-radius:15px}.tds-audio-player input[type=range][data-v-6edef302]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:17px;height:17px;border-radius:50%}.tds-audio-player input[type=range][data-v-6edef302]::-moz-range-thumb{-webkit-appearance:none;appearance:none;width:17px;height:17px;border-radius:50%}",
                        map: void 0,
                        media: void 0
                    })
                }), m, "data-v-6edef302", !1, undefined, !1, l.a, void 0, void 0)
        },
        857: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return r
            })), c.d(t, "b", (function() {
                return n
            }));
            c(52), c(225);

            function n() {
                return !(!window || !window.navigator) && (!!navigator.userAgent.match(/(Android|webOS|BlackBerry|Windows Phone)/g) || !(!window || !window.navigator || !navigator.userAgent.match(/(iPhone|iPad|iPod)/g)))
            }

            function r() {
                return !(!window || !window.navigator) && (-1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome"))
            }
        },
        870: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return h
            }));
            var n = c(2),
                r = c(781),
                o = c(823),
                d = c(179),
                l = n.default.extend({
                    name: "simple-header",
                    i18n: {
                        messages: {
                            en: {
                                "Fair artificial intelligence.": "Fair artificial intelligence.",
                                "We’re committed to it.": "We’re committed to it.",
                                "READ OUR MANIFESTO": "READ OUR MANIFESTO"
                            },
                            es: {
                                "Fair artificial intelligence.": "Inteligencia artificial justa.",
                                "We’re committed to it.": "Estamos comprometidos con eso.",
                                "READ OUR MANIFESTO": "LEE NUESTRO MANIFIESTO"
                            }
                        }
                    }
                }),
                m = Object(d.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            staticClass: "simple-header"
                        }, [c("div", {
                            staticClass: "simple-header--headline main-line"
                        }, [e._v("\n    " + e._s(e.$t("Fair artificial intelligence.")) + "\n    "), c("div", {
                            staticClass: "simple-header--subheadline"
                        }, [e._v("\n      " + e._s(e.$t("We’re committed to it.")) + "\n    ")]), e._v(" "), e.$slots.button ? c("div", {
                            staticClass: "simple-header--button"
                        }, [e._t("button")], 2) : e._e()]), e._v(" "), c("div", {
                            staticClass: "simple-header--graphic"
                        }, [c("img", {
                            staticClass: "lazyload",
                            attrs: {
                                "data-src": "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_auto,h_0.4,c_scale/v1/origin/home-pages/main-graphics/justice-icon-dark",
                                alt: e.$t("Fair artificial intelligence.")
                            }
                        })])])
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-3d893701_0", {
                        source: ".simple-header[data-v-3d893701]{max-width:1440px;margin:0 auto;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;margin:60px 0 0 0}@media (min-width:1360px){.simple-header[data-v-3d893701]{margin:40px auto}}@media (max-width:1024px){.simple-header[data-v-3d893701]{margin:60px 40px 0 40px;flex-direction:column;flex-wrap:wrap;align-content:flex-start;align-items:flex-start}}.simple-header--headline[data-v-3d893701],.simple-header--subheadline[data-v-3d893701]{width:100%;font-size:56px;font-weight:600;line-height:normal;margin:auto}@media (max-width:1024px){.simple-header--headline[data-v-3d893701],.simple-header--subheadline[data-v-3d893701]{font-size:38px;font-weight:400}}@media (max-width:720px){.simple-header--headline[data-v-3d893701],.simple-header--subheadline[data-v-3d893701]{font-size:34px;line-height:48px}}.simple-header--headline.main-line[data-v-3d893701],.simple-header--subheadline.main-line[data-v-3d893701]{padding-left:40px}@media (max-width:720px){.simple-header--headline.main-line[data-v-3d893701],.simple-header--subheadline.main-line[data-v-3d893701]{padding-left:0}}.simple-header--button[data-v-3d893701]{margin:24px 0 60px 0;font-size:16px;width:fit-content;line-height:normal}@media (max-width:720px){.simple-header--button[data-v-3d893701]{margin-top:16px 0 24px 0}}.simple-header--graphic[data-v-3d893701]{width:80%;max-width:1440px;margin:auto 40px;min-height:25vh}@media (max-width:1024px){.simple-header--graphic[data-v-3d893701]{width:60%;max-width:1440px;margin:auto}}@media (max-width:800px){.simple-header--graphic[data-v-3d893701]{width:90%;max-width:1440px;min-height:15vh;margin:auto 20px}}@media (min-width:1920px){.simple-header--graphic[data-v-3d893701]{min-height:unset}}",
                        map: void 0,
                        media: void 0
                    })
                }), l, "data-v-3d893701", !1, undefined, !1, d.a, void 0, void 0),
                v = n.default.extend({
                    name: "tds-manifesto-banner",
                    components: {
                        tdsElevatedButton: o.a,
                        simpleHeader: m,
                        TmdCard: r.a
                    },
                    i18n: {
                        messages: {
                            en: {
                                "READ OUR MANIFESTO": "READ OUR MANIFESTO"
                            },
                            es: {
                                "READ OUR MANIFESTO": "LEE NUESTRO MANIFIESTO"
                            }
                        }
                    },
                    props: {
                        baseUrl: {
                            type: String,
                            required: !0
                        }
                    }
                }),
                h = Object(d.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("tmd-card", {
                            staticClass: "tds-manifesto-banner",
                            attrs: {
                                "md-theme": "dark",
                                "md-elevation": "1",
                                type: "filled",
                                "no-border-radius": ""
                            }
                        }, [c("simple-header", {
                            staticClass: "tds-manifesto-banner--header",
                            attrs: {
                                "header-schema": e.footerHeader,
                                "is-footer": ""
                            },
                            scopedSlots: e._u([{
                                key: "button",
                                fn: function() {
                                    return [c("tds-elevated-button", {
                                        attrs: {
                                            text: e.$t("READ OUR MANIFESTO"),
                                            "base-url": e.baseUrl,
                                            href: "/fair",
                                            theme: "dark"
                                        }
                                    })]
                                },
                                proxy: !0
                            }])
                        })], 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-05ea5e68_0", {
                        source: ".tds-manifesto-banner--header[data-v-05ea5e68]{padding-block:160px}@media (min-height:900px){.tds-manifesto-banner--header[data-v-05ea5e68]{height:100vh;min-height:720px;max-height:1040px;margin-top:0}}@media (min-height:900px) and (max-width:720px){.tds-manifesto-banner--header[data-v-05ea5e68]{height:65vh;max-height:720px}}@media (min-height:900px) and (max-width:450px){.tds-manifesto-banner--header[data-v-05ea5e68]{height:50vh;max-height:720px}}@media (max-width:720px){.tds-manifesto-banner--header[data-v-05ea5e68]{padding-block:80px}}",
                        map: void 0,
                        media: void 0
                    })
                }), v, "data-v-05ea5e68", !1, undefined, !1, d.a, void 0, void 0)
        },
        888: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return o
            })), c.d(t, "b", (function() {
                return r
            }));
            var n = c(2),
                r = {
                    props: {
                        sectionId: {
                            type: String,
                            required: !0
                        },
                        sectionTitle: {
                            type: String,
                            required: !0
                        },
                        mainColumnOnly: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        sectionComponentTag: function() {
                            return this.mainColumnOnly ? "section" : "aside"
                        }
                    }
                },
                o = new n.default
        },
        984: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return f
            }));
            c(51), c(832), c(28), c(37), c(65);
            var n = c(2),
                r = c(856),
                o = c(781),
                d = c(384),
                l = c(91),
                m = c(256),
                v = c(179),
                h = n.default.extend({
                    name: "tds-audio-recorder",
                    components: {
                        TdsAudioPlayer: r.a,
                        TmdCard: o.a,
                        TmdButton: d.a,
                        TmdIcon: l.a,
                        MdSpinner: m.a
                    },
                    props: {
                        audioUrl: {
                            type: String,
                            default: void 0
                        },
                        filename: {
                            type: String,
                            required: !1
                        },
                        hideActionButtons: {
                            type: Boolean,
                            default: !1
                        },
                        isMobile: {
                            type: Boolean,
                            default: !1
                        },
                        associatedId: {
                            type: String,
                            required: !1
                        },
                        recordingInProgress: {
                            type: Function,
                            default: void 0
                        },
                        recordingComplete: {
                            type: Function,
                            default: void 0
                        },
                        uploadDelegate: {
                            type: Function,
                            default: void 0
                        },
                        deleteRecordDelegate: {
                            type: Function,
                            default: void 0
                        },
                        timeLimit: {
                            type: Number,
                            required: !1
                        }
                    },
                    i18n: {
                        messages: {
                            en: {
                                Record: "Record",
                                "Start recording": "Start recording",
                                "Stop recording": "Stop recording",
                                "Re-record": "Re-record",
                                "Starting...": "Starting..."
                            },
                            es: {
                                Record: "Grabar",
                                "Start recording": "Empezar grabación",
                                "Stop recording": "Detener grabación",
                                "Re-record": "Volver a grabar",
                                "Starting...": "Iniciando..."
                            }
                        }
                    },
                    data: function() {
                        return {
                            mediaRecorder: void 0,
                            recordingSoundPlayer: void 0,
                            state: void 0,
                            uploadPathError: !1,
                            notMediaEnabled: !1,
                            stream: void 0,
                            recordingTime: 0,
                            seconds: "00",
                            minutes: "00",
                            hours: "00",
                            currentSeconds: 0,
                            currentMinutes: 0,
                            currentHours: 0,
                            globalSeconds: 0,
                            recordedChunks: [],
                            audioInProgress: !1,
                            recordingOptions: {
                                mimeType: "audio/webm"
                            },
                            safariRecordingOptions: {
                                mimeType: "audio/mp4"
                            },
                            isRecordAllowed: !1,
                            readableTimeLimit: {
                                1e4: "10 ".concat(this.$i18n.t("secs")),
                                2e4: "20 ".concat(this.$i18n.t("secs")),
                                3e4: "30 ".concat(this.$i18n.t("secs")),
                                6e4: "1 ".concat(this.$i18n.t("min")),
                                12e4: "2 ".concat(this.$i18n.t("min")),
                                18e4: "3 ".concat(this.$i18n.t("min"))
                            },
                            currentTimeLimit: "",
                            millisecondsFactor: 6e4
                        }
                    },
                    computed: {
                        recordingIcon: function() {
                            return "recording" === this.state ? "pause" : "play_arrow"
                        },
                        recordingWaveWidth: function() {
                            var e;
                            return (null === (e = this.$parent) || void 0 === e ? void 0 : e.$el.scrollWidth) || 300
                        },
                        recordingWaveLinesNumber: function() {
                            return this.recordingWaveWidth / 5
                        },
                        recordControlButtonText: function() {
                            return "recording" === this.state ? this.$t("Start recording") : this.$t("Stop recording")
                        },
                        showRecordAudio: function() {
                            return (!this.isRecordAllowed || this.isSafari) && !this.isMobile
                        },
                        isSafari: function() {
                            return -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome")
                        }
                    },
                    mounted: function() {
                        if (this.initAudioRecordingSound(), this.audioUrl && (this.state = "recorded"), this.isRecordAllowed = "MediaRecorder" in window, this.timeLimit) {
                            var e = Math.floor(this.timeLimit / this.millisecondsFactor),
                                t = (this.timeLimit % this.millisecondsFactor / 1e3).toFixed(0);
                            this.currentTimeLimit = "0".concat(e, ":").concat((+t < 10 ? "0" : "") + t)
                        }
                        this.listenForMediaChange()
                    },
                    methods: {
                        recordAudio: function() {
                            this.$emit("recording-started"), this.state = "recording", this.uploadPathError = !1, this.$nextTick(this.initAudioRecorder)
                        },
                        initAudioRecorder: function() {
                            var e = this;
                            navigator.mediaDevices.getUserMedia({
                                audio: !0
                            }).then((function(t) {
                                var c;
                                e.state = "starting", e.playRecordingAudioSound(), e.stream = t, null === (c = e.stream) || void 0 === c || c.getTracks().forEach((function(track) {
                                    return track.enabled = !1
                                })), e.notMediaEnabled = !1, setTimeout((function() {
                                    e.startRecording()
                                }), 300)
                            })).catch((function() {
                                e.$emit("recording-not-supported"), e.state = void 0, e.notMediaEnabled = !0
                            }))
                        },
                        initAudioRecordingSound: function() {
                            var audio = new Audio("https://res.cloudinary.com/torre-technologies-co/video/upload/v1713796681/dev/audio-recorder/rjf4tb6i5qxgj6xgh9kh.mp3");
                            audio.load(), audio.volume = 0, audio.muted = !0, audio.play(), audio.currentTime = 0, this.recordingSoundPlayer = audio
                        },
                        handleRecodingActionButtonClick: function() {
                            var e;
                            "inactive" !== (null === (e = this.mediaRecorder) || void 0 === e ? void 0 : e.state) && ("recording" === this.state ? this.pauseRecording() : this.resumeRecording())
                        },
                        pauseRecording: function() {
                            var e;
                            this.mediaRecorder && (null === (e = this.stream) || void 0 === e || e.getTracks().forEach((function(track) {
                                return track.enabled = !1
                            })), this.mediaRecorder.pause(), this.state = "paused", clearInterval(this.recordingTime))
                        },
                        resumeRecording: function() {
                            var e;
                            this.mediaRecorder && (null === (e = this.stream) || void 0 === e || e.getTracks().forEach((function(track) {
                                return track.enabled = !0
                            })), this.mediaRecorder.resume(), this.state = "recording", this.startTimer())
                        },
                        startTimer: function() {
                            var e = this;
                            this.recordingTime = window.setInterval((function() {
                                e.globalSeconds++, e.currentSeconds++, e.timeLimit && 1e3 * e.globalSeconds > e.timeLimit && e.stopRecording(), e.currentSeconds > 59 && (e.currentSeconds = 0, e.currentMinutes++, e.currentMinutes > 59 && (e.currentMinutes = 0, e.currentMinutes++, e.hours = e.currentHours < 10 ? "0".concat(e.currentHours) : "".concat(e.currentHours)), e.minutes = e.currentMinutes < 10 ? "0".concat(e.currentMinutes) : "".concat(e.currentMinutes)), e.seconds = e.currentSeconds < 10 ? "0".concat(e.currentSeconds) : "".concat(e.currentSeconds)
                            }), 1e3)
                        },
                        playRecordingAudioSound: function() {
                            this.recordingSoundPlayer ? (this.recordingSoundPlayer.volume = 1, this.recordingSoundPlayer.muted = !1, this.recordingSoundPlayer.play()) : this.initAudioRecorder()
                        },
                        startRecording: function() {
                            var e, t = this,
                                c = this.isSafari ? this.safariRecordingOptions : this.recordingOptions;
                            this.state = "recording", null === (e = this.stream) || void 0 === e || e.getTracks().forEach((function(track) {
                                return track.enabled = !0
                            })), this.uploadPathError = !1, this.recordedChunks = [], this.mediaRecorder = new MediaRecorder(this.stream, c), this.resetTimer(), this.audioInProgress = !0, this.startTimer(), this.recordingInProgress && this.recordingInProgress(), this.mediaRecorder.addEventListener("dataavailable", (function(e) {
                                e.data && e.data.size > 0 && t.recordedChunks.push(e.data)
                            })), this.mediaRecorder.start(10)
                        },
                        stopRecording: function() {
                            if (this.mediaRecorder) {
                                "inactive" !== this.mediaRecorder.state && this.mediaRecorder.stop(), clearInterval(this.recordingTime), this.mediaRecorder.removeEventListener("dataavailable", (function() {})), this.mediaRecorder = void 0, this.state = "recorded", this.audioInProgress = !1, this.resetTimer(), this.recordingComplete && this.recordingComplete();
                                var e = new File(this.recordedChunks, "".concat(this.filename, "_recorded_").concat((new Date).toISOString(), ".webm"), {
                                    type: "audio/webm"
                                });
                                this.uploadDelegate ? this.uploadDelegate(e) : this.$emit("audio-recorded", e), this.closeTracks()
                            }
                        },
                        closeTracks: function() {
                            this.stream && this.stream.getTracks().forEach((function(track) {
                                track.stop()
                            }))
                        },
                        reRecordAudio: function() {
                            this.state = void 0, this.stream = void 0, this.resetRecordedAudio(), this.$nextTick(this.recordAudio)
                        },
                        resetRecordedAudio: function() {
                            this.deleteRecordDelegate && this.deleteRecordDelegate(), this.state = void 0, this.$emit("reset-audio"), this.verifyRecordingNotSupported()
                        },
                        verifyRecordingNotSupported: function() {
                            this.showRecordAudio && this.$emit("recording-not-supported")
                        },
                        resetTimer: function() {
                            this.seconds = "00", this.minutes = "00", this.hours = "00", this.currentSeconds = 0, this.currentMinutes = 0, this.currentHours = 0, this.globalSeconds = 0
                        },
                        listenForMediaChange: function() {
                            var e = this;
                            addEventListener("devicechange", (function() {
                                e.notMediaEnabled = !1
                            }))
                        }
                    }
                }),
                f = Object(v.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("tmd-card", {
                            staticClass: "tds-audio-recorder",
                            attrs: {
                                "no-border-radius": ""
                            }
                        }, [e.audioUrl ? c("div", {
                            staticClass: "tds-audio-recorder__audio-player"
                        }, [c("tds-audio-player", {
                            attrs: {
                                "audio-url": e.audioUrl,
                                "is-mobile": e.isMobile
                            }
                        })], 1) : "recorded" === e.state ? c("md-spinner", {
                            attrs: {
                                "md-indeterminate": "",
                                "no-transition": ""
                            }
                        }) : e._e(), e._v(" "), "recording" === e.state || "paused" === e.state || "starting" === e.state ? c("div", {
                            staticClass: "tds-audio-recorder__recording"
                        }, [e.hideActionButtons ? e._e() : c("tmd-button", {
                            staticClass: "tds-audio-recorder__recording__action-button",
                            on: {
                                click: e.handleRecodingActionButtonClick
                            }
                        }, [c("tmd-icon", {
                            staticClass: "tmc-text",
                            attrs: {
                                size: "24px",
                                fill: ""
                            }
                        }, [e._v("\n        " + e._s(e.recordingIcon) + "\n      ")])], 1), e._v(" "), c("av-media", {
                            attrs: {
                                media: e.stream,
                                type: "frequ",
                                "canv-width": e.recordingWaveWidth,
                                "frequ-lnum": e.recordingWaveLinesNumber,
                                "frequ-direction": "mo",
                                "canv-height": 24,
                                "line-color": "#ffffffe6"
                            }
                        }), e._v("\n    " + e._s(e.minutes) + ":" + e._s(e.seconds) + "\n  ")], 1) : e._e(), e._v(" "), c("div", {
                            staticClass: "tds-audio-recorder__actions"
                        }, [e.state ? "starting" === e.state ? c("tmd-button", {
                            staticClass: "tmd-raised tmd-primary",
                            attrs: {
                                "md-elevation": "theme",
                                "border-style": "none",
                                disabled: ""
                            },
                            scopedSlots: e._u([{
                                key: "prepend",
                                fn: function() {
                                    return [c("tmd-icon", {
                                        staticClass: "red-icon",
                                        attrs: {
                                            fill: "",
                                            size: "16"
                                        }
                                    }, [e._v("\n          circle\n        ")])]
                                },
                                proxy: !0
                            }])
                        }, [e._v("\n\n      " + e._s(e.$t("Starting...")) + "\n    ")]) : e.audioInProgress || "recorded" === e.state ? "recorded" === e.state ? c("tmd-button", {
                            staticClass: "tmd-raised tmd-primary",
                            attrs: {
                                "md-elevation": "theme",
                                "border-style": "none",
                                disabled: !e.audioUrl
                            },
                            on: {
                                click: e.reRecordAudio
                            },
                            scopedSlots: e._u([{
                                key: "prepend",
                                fn: function() {
                                    return [c("tmd-icon", {
                                        staticClass: "tmd-icon-button red-icon",
                                        attrs: {
                                            size: "16px",
                                            fill: ""
                                        }
                                    }, [e._v("\n          circle\n        ")])]
                                },
                                proxy: !0
                            }])
                        }, [e._v("\n\n      " + e._s(e.$t("Re-record")) + "\n    ")]) : c("tmd-button", {
                            staticClass: "tmd-raised tmd-primary",
                            attrs: {
                                "md-elevation": "theme",
                                "border-style": "none"
                            },
                            on: {
                                click: e.stopRecording
                            },
                            scopedSlots: e._u([{
                                key: "prepend",
                                fn: function() {
                                    return [c("tmd-icon", {
                                        staticClass: "tmd-icon-button red-icon",
                                        attrs: {
                                            size: "16px",
                                            fill: ""
                                        }
                                    }, [e._v("\n          circle\n        ")])]
                                },
                                proxy: !0
                            }])
                        }, [e._v("\n\n      " + e._s(e.$t("Stop recording")) + "\n    ")]) : c("tmd-button", {
                            staticClass: "tmd-raised tmd-primary",
                            attrs: {
                                "md-elevation": "theme",
                                "border-style": "none"
                            },
                            on: {
                                click: e.startRecording
                            },
                            scopedSlots: e._u([{
                                key: "prepend",
                                fn: function() {
                                    return [c("tmd-icon", {
                                        staticClass: "red-icon",
                                        attrs: {
                                            fill: "",
                                            size: "16"
                                        }
                                    }, [e._v("\n          circle\n        ")])]
                                },
                                proxy: !0
                            }])
                        }, [e._v("\n\n      " + e._s(e.$t("Start recording")) + "\n    ")]) : c("tmd-button", {
                            staticClass: "tmd-raised tmd-primary",
                            attrs: {
                                "md-elevation": "theme",
                                "border-style": "none"
                            },
                            on: {
                                click: e.recordAudio
                            },
                            scopedSlots: e._u([{
                                key: "prepend",
                                fn: function() {
                                    return [c("tmd-icon", {
                                        staticClass: "red-icon",
                                        attrs: {
                                            fill: "",
                                            size: "16"
                                        }
                                    }, [e._v("\n          circle\n        ")])]
                                },
                                proxy: !0
                            }], null, !1, 1288700825)
                        }, [e._v("\n\n      " + e._s(e.$t("Start recording")) + "\n    ")])], 1)], 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-09e00456_0", {
                        source: ".tds-audio-recorder[data-v-09e00456]{display:flex;justify-content:center;flex-flow:column;align-items:center;gap:24px}.tds-audio-recorder__audio-player[data-v-09e00456]{width:100%}.tds-audio-recorder__recording[data-v-09e00456]{display:flex;align-items:center;flex-flow:row;border-radius:20px;padding:2px 12px;gap:8px;flex-basis:0;min-height:36px}.tds-audio-recorder__recording__action-button[data-v-09e00456]{min-width:36px!important;padding:0 0!important;margin:0 0!important;border-radius:50%}",
                        map: void 0,
                        media: void 0
                    })
                }), h, "data-v-09e00456", !1, undefined, !1, v.a, void 0, void 0)
        },
        985: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return k
            }));
            var n = c(38),
                r = (c(51), c(640), c(382), c(31), c(75), c(32), c(2)),
                o = c(35),
                d = c(117),
                l = c(91),
                m = c(133),
                v = c(135),
                h = c(1146),
                f = c(1147),
                _ = c(256),
                y = c(1309),
                x = c(179),
                w = {
                    en: {
                        "Top channels attracting candidates": "Top channels attracting candidates",
                        "Candidates viewing and applying from Torre, online platforms, and job re-posts.": "Candidates viewing and applying from Torre, online platforms, and job re-posts.",
                        "Job views": "Job views",
                        Applications: "Applications",
                        "Torre's feed": "Torre's feed",
                        "Torre's job marketplace": "Torre's job marketplace",
                        Twitter: "Twitter",
                        Facebook: "Facebook",
                        Instagram: "Instagram",
                        Whatsapp: "Whatsapp",
                        Linkedin: "Linkedin",
                        Signalers: "Signalers",
                        "in Torre": "in Torre",
                        "Suggested candidates": "Suggested candidates",
                        "Job boards": "Job boards",
                        "Similar jobs": "Similar jobs",
                        Shares: "Shares",
                        Email: "Email",
                        "Manually added": "Manually added",
                        "No channels yet.": "No channels yet.",
                        "Share job": "Share job",
                        "Last 24 hours": "Last 24 hours",
                        "Last 7 days": "Last 7 days",
                        "Last 30 days": "Last 30 days",
                        "All time": "All time"
                    },
                    es: {
                        "Top channels attracting candidates": "Top de canales que atraen más candidatos",
                        "Candidates viewing and applying from Torre, online platforms, and job re-posts.": "Candidatos que ven el trabajo y aplican desde Torre, plataformas online y republicaciones.",
                        "Job views": "Vistas del trabajo",
                        Applications: "Aplicaciones",
                        "Torre's feed": "Feed de Torre",
                        "Torre's job marketplace": "Red de Torre",
                        Twitter: "Twitter",
                        Facebook: "Facebook",
                        Instagram: "Instagram",
                        Whatsapp: "Whatsapp",
                        Linkedin: "Linkedin",
                        Signalers: "Personas que han enviado Signal",
                        "in Torre": "en Torre",
                        "Suggested candidates": "Candidatos sugeridos",
                        "Job boards": "Portales de empleo",
                        "Similar jobs": "Trabajos similares",
                        Shares: "Compartidos",
                        Email: "Correo electrónico",
                        "Manually added": "Agregados manualmente",
                        "No channels yet.": "No hay canales aún.",
                        "Share job": "Compartir trabajo",
                        "Last 24 hours": "Últimas 24 horas",
                        "Last 7 days": "Últimos 7 días",
                        "Last 30 days": "Últimos 30 días",
                        "All time": "Desde el inicio"
                    }
                },
                T = r.default.extend({
                    name: "channel-item",
                    components: {
                        MdButton: o.a,
                        MdTooltip: d.a,
                        TmdIcon: l.a
                    },
                    mixins: [m.a],
                    i18n: {
                        messages: w
                    },
                    props: {
                        channel: {
                            type: Object,
                            required: !0
                        },
                        maxCount: {
                            type: Number,
                            default: 1
                        },
                        baseUrl: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        progressPercentageApplications: function() {
                            var e = Math.round(100 * this.channel.applications / this.maxCount);
                            return e < 1 ? 1 : e
                        },
                        progressPercentageViews: function() {
                            var e = Math.round(100 * this.channel.views / this.maxCount);
                            return e < 1 ? 1 : e
                        },
                        channelName: function() {
                            switch (this.channel.channel) {
                                case "torreFeed":
                                    return "Torre's feed";
                                case "signalers":
                                    return "in Torre";
                                case "twitter":
                                    return "Twitter";
                                case "facebook":
                                    return "Facebook";
                                case "instagram":
                                    return "Instagram";
                                case "emma":
                                    return "Emma";
                                case "suggestedCandidates":
                                    return "Suggested candidates";
                                case "jobBoards":
                                    return "Job boards";
                                case "similarJobs":
                                    return "Similar jobs";
                                case "shares":
                                    return "Shares";
                                case "whatsapp":
                                    return "Whatsapp";
                                case "linkedin":
                                    return "Linkedin";
                                case "email":
                                    return "Email";
                                case "manuallyAdded":
                                    return "Manually added";
                                default:
                                    return
                            }
                        },
                        channelIcon: function() {
                            switch (this.channel.channel) {
                                case "signalers":
                                    return {
                                        icon: "tmi-signal",
                                        fill: !0
                                    };
                                case "twitter":
                                    return {
                                        icon: "tmi-twitter",
                                        fill: !0
                                    };
                                case "facebook":
                                    return {
                                        icon: "tmi-facebook",
                                        fill: !0
                                    };
                                case "instagram":
                                    return {
                                        icon: "tmi-instagram",
                                        fill: !0
                                    };
                                case "suggestedCandidates":
                                    return {
                                        icon: "groups",
                                        fill: !0
                                    };
                                case "jobBoards":
                                    return {
                                        icon: "developer_board",
                                        fill: !1
                                    };
                                case "similarJobs":
                                    return {
                                        icon: "work",
                                        fill: !0
                                    };
                                case "shares":
                                    return {
                                        icon: "share",
                                        fill: !0
                                    };
                                case "whatsapp":
                                    return {
                                        icon: "tmi-whatsapp",
                                        fill: !0
                                    };
                                case "linkedin":
                                    return {
                                        icon: "tmi-linkedin",
                                        fill: !0
                                    };
                                case "email":
                                    return {
                                        icon: "mail",
                                        fill: !0
                                    };
                                case "manuallyAdded":
                                    return {
                                        icon: "person_add",
                                        fill: !0
                                    };
                                default:
                                    return
                            }
                        },
                        channelImage: function() {
                            var e = "https://res.cloudinary.com/torre-technologies-co/image/upload/v1639587503/origin/logo/logo.png";
                            switch (this.channel.channel) {
                                case "torreFeed":
                                case "emma":
                                    return e;
                                case "torreReach":
                                    return "https://res.cloudinary.com/torre-technologies-co/image/upload/v1735332943/origin/logo/aowuxwhti0km9htmiwxh.png";
                                default:
                                    return
                            }
                        },
                        channelLink: function() {
                            if ("signalers" === this.channel.channel) return "".concat(this.baseUrl, "/signals#about")
                        },
                        channelLinkText: function() {
                            if ("signalers" === this.channel.channel) return "Signalers"
                        }
                    }
                }),
                C = Object(x.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            staticClass: "channel-item"
                        }, [c("div", {
                            staticClass: "channel-item__header"
                        }, [e.channelIcon ? c("tmd-icon", {
                            staticClass: "channel-item__logo",
                            attrs: {
                                fill: e.channelIcon.fill
                            }
                        }, [e._v("\n      " + e._s(e.channelIcon.icon) + "\n    ")]) : e._e(), e._v(" "), e.channelImage ? c("img", {
                            staticClass: "channel-item__image",
                            attrs: {
                                src: e.channelImage
                            }
                        }) : e._e(), e._v(" "), c("table", [c("tr", [c("td", {
                            staticStyle: {
                                "word-break": "break-word"
                            }
                        }, [e.channelLink ? c("a", {
                            attrs: {
                                href: e.channelLink
                            }
                        }, [e._v(e._s(e.$t(e.channelLinkText)))]) : e._e(), e._v(" "), e.channelName ? c("span", [e._v(e._s(e.$t(e.channelName)))]) : e._e()])])])], 1), e._v(" "), c("div", {
                            staticClass: "channel-item__data"
                        }, [c("div", {
                            staticClass: "channel-item__row"
                        }, [c("div", {
                            staticClass: "channel-item__progress-bar channel-item__progress-bar--views",
                            style: {
                                width: e.progressPercentageViews + "%"
                            }
                        }), e._v(" "), e.progressPercentageViews > 0 ? c("span", [e._v(" " + e._s(e.channel.views) + " ")]) : e._e()]), e._v(" "), c("div", {
                            staticClass: "channel-item__row"
                        }, [c("div", {
                            staticClass: "channel-item__progress-bar channel-item__progress-bar--applications",
                            style: {
                                width: e.progressPercentageApplications + "%"
                            }
                        }), e._v(" "), e.progressPercentageApplications > 0 ? c("span", [e._v(" " + e._s(e.channel.applications) + " ")]) : e._e()])])])
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-3f6f8aec_0", {
                        source: ".channel-item[data-v-3f6f8aec]{display:grid;grid-template-columns:minmax(0,1fr) 1fr;justify-content:space-between;align-items:center;margin:4px 0}.channel-item__logo[data-v-3f6f8aec]{margin-right:8px;margin-left:0}.channel-item__image[data-v-3f6f8aec]{height:24px;max-height:24px;max-width:145px;margin-right:8px}.channel-item__header[data-v-3f6f8aec]{font-size:12px;display:flex;justify-content:flex-start;align-items:center;margin-right:8px}.channel-item__name[data-v-3f6f8aec]{display:flex;flex-wrap:wrap}.channel-item__name a[data-v-3f6f8aec],.channel-item__name span[data-v-3f6f8aec]{white-space:nowrap}.channel-item__data[data-v-3f6f8aec]{display:flex;flex-direction:column}.channel-item__row[data-v-3f6f8aec]{display:flex;align-items:center}.channel-item__progress-bar[data-v-3f6f8aec]{min-height:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;overflow:hidden;white-space:nowrap;text-overflow:clip;margin:4px 8px 4px 0}",
                        map: void 0,
                        media: void 0
                    })
                }), T, "data-v-3f6f8aec", !1, undefined, !1, x.a, void 0, void 0),
                S = r.default.extend({
                    name: "tds-channels",
                    components: {
                        ChannelItem: C,
                        MdButton: o.a,
                        MdInputContainer: v.a,
                        MdOption: h.a,
                        MdSelect: f.a,
                        MdSpinner: _.a,
                        TmdIcon: l.a,
                        TmdTooltip: y.a
                    },
                    i18n: {
                        messages: w
                    },
                    props: {
                        channels: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        baseUrl: {
                            type: String,
                            required: !0
                        },
                        selectedTime: {
                            type: String,
                            default: "allTime"
                        },
                        loading: {
                            type: Boolean,
                            default: !1
                        },
                        showTimeframeFilter: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            selectedTimeOption: this.selectedTime
                        }
                    },
                    computed: {
                        sortedChannels: function() {
                            return this.channels.filter((function(e) {
                                return e.views > 0
                            })).sort((function(e, t) {
                                var c = t.applications - e.applications;
                                return 0 !== c ? c : t.views - e.views
                            }))
                        },
                        maxCount: function() {
                            if (0 === this.channels.length) return 0;
                            var e = Math.max.apply(Math, Object(n.a)(this.channels.map((function(e) {
                                    return e.views
                                })))),
                                t = Math.max.apply(Math, Object(n.a)(this.channels.map((function(e) {
                                    return e.applications
                                }))));
                            return Math.max(e, t)
                        },
                        maxApplications: function() {
                            return 0 === this.channels.length ? 0 : Math.max.apply(Math, Object(n.a)(this.channels.map((function(e) {
                                return e.applications
                            }))))
                        },
                        shouldShowTimeFilter: function() {
                            return !!this.showTimeframeFilter && ("allTime" !== this.selectedTimeOption || this.maxCount > 0)
                        },
                        timeOptions: function() {
                            return [{
                                name: "Last 24 hours",
                                value: "24hours"
                            }, {
                                name: "Last 7 days",
                                value: "7days"
                            }, {
                                name: "Last 30 days",
                                value: "30days"
                            }, {
                                name: "All time",
                                value: "allTime"
                            }]
                        }
                    },
                    watch: {
                        selectedTimeOption: function() {
                            this.$emit("time-selected", this.selectedTimeOption)
                        }
                    },
                    methods: {
                        shareJob: function() {
                            this.$emit("share-job")
                        }
                    }
                }),
                k = Object(x.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            staticClass: "tds-channels"
                        }, [c("div", {
                            staticClass: "tds-channels__header"
                        }, [c("h3", {
                            staticClass: "tds-channels__header-title tmd-color-text"
                        }, [e._v("\n      " + e._s(e.$t("Top channels attracting candidates")) + "\n\n      "), c("div", {
                            staticClass: "tds-channels__header-icon tmd-color-theme"
                        }, [c("tmd-icon", {
                            attrs: {
                                fill: ""
                            }
                        }, [e._v("info")]), e._v(" "), c("tmd-tooltip", {
                            attrs: {
                                "display-on-mobile": ""
                            }
                        }, [e._v("\n          " + e._s(e.$t("Candidates viewing and applying from Torre, online platforms, and job re-posts.")) + "\n        ")])], 1)])]), e._v(" "), e.shouldShowTimeFilter ? c("md-input-container", {
                            staticClass: "tds-channels__dropdown"
                        }, [c("md-select", {
                            attrs: {
                                disabled: e.loading,
                                name: "time"
                            },
                            model: {
                                value: e.selectedTimeOption,
                                callback: function(t) {
                                    e.selectedTimeOption = t
                                },
                                expression: "selectedTimeOption"
                            }
                        }, e._l(e.timeOptions, (function(option) {
                            return c("md-option", {
                                key: option.value,
                                staticClass: "tds-channel__option",
                                attrs: {
                                    value: option.value
                                }
                            }, [e._v("\n        " + e._s(e.$t(option.name)) + "\n      ")])
                        })), 1)], 1) : e._e(), e._v(" "), e.sortedChannels.length > 0 ? c("div", {
                            staticClass: "tds-channels__legend"
                        }, [c("span", {
                            staticClass: "tds-channels__legend--views"
                        }, [c("span", {
                            staticClass: "ball"
                        }, [e._v("●")]), e._v(" " + e._s(e.$t("Job views")))]), e._v(" "), c("span", {
                            staticClass: "tds-channels__legend--applications"
                        }, [c("span", {
                            staticClass: "ball"
                        }, [e._v("●")]), e._v(" " + e._s(e.$t("Applications")))])]) : e._e(), e._v(" "), e.sortedChannels.length > 0 && !e.loading ? c("div", {
                            staticClass: "tds-channels__content"
                        }, e._l(e.sortedChannels, (function(t) {
                            return c("channel-item", {
                                key: t.channel,
                                attrs: {
                                    "base-url": e.baseUrl,
                                    channel: t,
                                    "max-count": e.maxCount
                                }
                            })
                        })), 1) : e.loading ? c("div", [c("span", {
                            staticClass: "tds-channels__spinner"
                        }, [c("md-spinner", {
                            attrs: {
                                "md-indeterminate": "",
                                "md-size": 40
                            }
                        })], 1)]) : c("div", [c("span", {
                            staticClass: "tds-channels__empty-text"
                        }, [e._v("\n      " + e._s(e.$t("No channels yet.")) + "\n    ")])])], 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-e187206a_0", {
                        source: ".tds-channels__header[data-v-e187206a]{display:flex;justify-content:flex-start}.tds-channels__header-icon[data-v-e187206a],.tds-channels__header-title[data-v-e187206a]{margin:0;display:inline-block;line-height:24px}.tds-channels__content[data-v-e187206a]{display:flex;flex-direction:column;align-items:center}.tds-channels__content .channel-item[data-v-e187206a]{width:clamp(328px,100%,434px)}.tds-channels__dropdown[data-v-e187206a]{margin-top:0;margin-bottom:16px;max-width:190px}.tds-channels__legend[data-v-e187206a]{display:flex;margin-bottom:12px}.tds-channels__legend--applications[data-v-e187206a]{display:flex;align-items:center}.tds-channels__legend--views[data-v-e187206a]{margin-right:16px;display:flex;align-items:center}.tds-channels__legend .ball[data-v-e187206a]{font-size:25px;display:inline-block;padding-bottom:4px;margin-right:12px}.tds-channels__empty-cta[data-v-e187206a]{display:block;margin-left:auto;margin-right:auto}.tds-channels__spinner[data-v-e187206a]{display:flex;justify-content:center}.tmd-color-text[data-v-e187206a]{margin-bottom:16px}",
                        map: void 0,
                        media: void 0
                    })
                }), S, "data-v-e187206a", !1, undefined, !1, x.a, void 0, void 0)
        },
        986: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return f
            }));
            var n = c(18),
                r = (c(51), c(45), c(47), c(40), c(31), c(60), c(37), c(68), c(2)),
                o = c(1258),
                d = c(1260),
                l = c(179);

            function m(e, t) {
                var c = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), c.push.apply(c, n)
                }
                return c
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(c), !0).forEach((function(t) {
                        Object(n.a)(e, t, c[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(c)) : m(Object(c)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(c, t))
                    }))
                }
                return e
            }
            var h = r.default.extend({
                    name: "tds-editable-field",
                    components: {
                        TmdField: o.a,
                        TmdTextarea: d.a
                    },
                    props: {
                        value: {
                            type: String,
                            default: void 0
                        },
                        title: {
                            type: String,
                            default: void 0
                        },
                        isEmpty: {
                            type: Boolean,
                            default: !1
                        },
                        placeholder: {
                            type: String,
                            default: void 0
                        },
                        maxHeight: {
                            type: [String, Number],
                            default: "unset"
                        },
                        maxLength: {
                            type: Number,
                            default: void 0
                        },
                        lock: {
                            type: Boolean,
                            default: !1
                        },
                        tmdFont: {
                            type: String,
                            default: "tmd-body",
                            validator: function(e) {
                                return ["tmd-body", "tmd-headline", "tmd-caption"].includes(e)
                            }
                        }
                    },
                    data: function() {
                        return {
                            model: this.value,
                            edit: !1,
                            showCounter: !1,
                            childMounted: !1
                        }
                    },
                    computed: {
                        listeners: function() {
                            return v(v({}, this.$listeners), {}, {
                                focus: this.onFocus,
                                blur: this.onBlur
                            })
                        },
                        localValue: function() {
                            return this.model
                        },
                        hasPreviewSlot: function() {
                            return !!this.$slots.preview || !!this.$scopedSlots.preview
                        }
                    },
                    watch: {
                        value: function(e) {
                            this.model = e
                        }
                    },
                    mounted: function() {
                        this.childMounted = !0
                    },
                    methods: {
                        onFocus: function() {
                            this.$listeners.focus && this.$listeners.focus(), this.showCounter = !0
                        },
                        onBlur: function() {
                            this.$listeners.blur && this.$listeners.blur(), this.showCounter = !1
                        }
                    }
                }),
                f = Object(l.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            staticClass: "tds-editable-field"
                        }, [e.title ? c("div", {
                            staticClass: "tds-editable-field__title"
                        }, [e._v("\n    " + e._s(e.title) + "\n  ")]) : e._e(), e._v(" "), c("tmd-field", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.lock && e.childMounted || e.isEmpty,
                                expression: "(!lock && childMounted) || isEmpty"
                            }],
                            class: {
                                "tmd-locked": e.lock
                            },
                            attrs: {
                                "tmd-counter": e.showCounter
                            }
                        }, [c("tmd-textarea", e._g({
                            ref: "textarea",
                            class: [e.tmdFont, {
                                "tmc-accent": e.lock
                            }],
                            attrs: {
                                "tmd-autogrow": "",
                                "textarea-max-height": e.maxHeight,
                                placeholder: e.placeholder,
                                readonly: e.lock,
                                maxlength: e.maxLength
                            },
                            model: {
                                value: e.model,
                                callback: function(t) {
                                    e.model = t
                                },
                                expression: "model"
                            }
                        }, e.listeners))], 1), e._v(" "), e.childMounted && !e.lock || e.isEmpty ? e._e() : [e.hasPreviewSlot ? e._t("preview") : c("span", {
                            class: ["tds-editable-field__content tmd-body", {
                                "tmc-accent": e.lock
                            }]
                        }, [e._v(e._s(e.localValue))])]], 2)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-14a01522_0", {
                        source: ".tds-editable-field{position:relative;display:flex;flex-direction:column}.tds-editable-field__title{margin-bottom:16px}.tds-editable-field__content{white-space:pre-line;display:block}.tds-editable-field .tmd-field{min-height:32px;margin-top:0}.tds-editable-field .tmd-field .tmd-textarea{padding:0}.tds-editable-field .tmd-field.tmd-focused .outlined-notched__leading,.tds-editable-field .tmd-field.tmd-focused .outlined-notched__notch,.tds-editable-field .tmd-field.tmd-focused .outlined-notched__trailing{border-top:0;border-left:0;border-right:0;border-radius:0}.tds-editable-field .tmd-field.tmd-locked .outlined-notched__leading,.tds-editable-field .tmd-field.tmd-locked .outlined-notched__notch,.tds-editable-field .tmd-field.tmd-locked .outlined-notched__trailing,.tds-editable-field .tmd-field:not(.tmd-focused) .outlined-notched__leading,.tds-editable-field .tmd-field:not(.tmd-focused) .outlined-notched__notch,.tds-editable-field .tmd-field:not(.tmd-focused) .outlined-notched__trailing{border:0}",
                        map: void 0,
                        media: void 0
                    })
                }), h, undefined, !1, undefined, !1, l.a, void 0, void 0)
        },
        987: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return _
            }));
            c(51), c(45), c(74), c(32), c(52), c(83);
            var n = c(2),
                r = c(91),
                o = c(1309),
                d = c(304),
                l = c(133),
                m = c(826),
                v = c(886),
                h = c(179),
                f = (c(885), n.default.extend({
                    name: "tds-entity-render",
                    components: {
                        TdsEntityPicture: m.a,
                        TmdIcon: r.a,
                        TmdTooltip: o.a,
                        TdsWeightRender: v.a,
                        TdlSignalButton: d.a
                    },
                    mixins: [l.a],
                    i18n: {
                        messages: {
                            en: {
                                Verified: "Verified",
                                "doesn’t have a Torre genome, yet.": "doesn’t have a Torre genome, yet."
                            },
                            es: {
                                Verified: "Verificado",
                                "doesn’t have a Torre genome, yet.": "no tiene un genoma en Torre, aún."
                            }
                        }
                    },
                    props: {
                        entity: {
                            type: Object,
                            required: !0
                        },
                        entityType: {
                            type: String,
                            default: "person"
                        },
                        signalButtonInfo: {
                            type: Object,
                            required: !1
                        },
                        imageBorderWidth: {
                            type: Number,
                            required: !1
                        },
                        imageSize: {
                            type: Number,
                            default: 20
                        },
                        trackWeight: {
                            type: Function,
                            required: !1
                        },
                        iconSize: {
                            type: Number,
                            required: !1
                        },
                        href: {
                            type: String,
                            required: !1
                        },
                        hrefTarget: {
                            type: String,
                            required: !1
                        },
                        vertical: {
                            type: Boolean,
                            default: !1
                        },
                        hide: {
                            type: Array,
                            required: !1,
                            default: function() {
                                return []
                            }
                        },
                        shape: {
                            type: String,
                            default: "hexagon"
                        },
                        actionsNextLine: {
                            type: Boolean,
                            default: !1
                        },
                        menuStyles: {
                            type: Object,
                            default: function() {
                                return {
                                    "--theme-color": "#CDDC39"
                                }
                            }
                        },
                        optionalSubTitle: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        compactEntity: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        cssProps: function() {
                            return {
                                "--size": this.iconSize + "px",
                                "--image-border-width": (this.imageBorderWidth ? this.imageBorderWidth : 4) + "px",
                                "--verified-icon-margin": this.href ? "4px" : "8px"
                            }
                        },
                        displayPicture: function() {
                            return !this.shouldHide("picture")
                        },
                        displayVerified: function() {
                            return !!this.entity.verified && !this.shouldHide("verified")
                        },
                        displayWeight: function() {
                            return !!this.entity.weight && !this.shouldHide("weight")
                        },
                        displayProfessionalHeadline: function() {
                            return !!this.entity.professionalHeadline && !this.shouldHide("professionalHeadline")
                        }
                    },
                    mounted: function() {
                        this.trackWeight && this.entity.id && this.trackWeight(this.entity.id)
                    },
                    methods: {
                        handleStateUpdate: function(e) {
                            var t = this.signalButtonInfo.signaled;
                            this.$emit("signal-update", {
                                state: e,
                                signaled: t
                            })
                        },
                        handleNotificationsTypeUpdate: function(e) {
                            this.$emit("notifications-type-update", e)
                        },
                        shouldHide: function(e) {
                            return this.hide.includes(e)
                        },
                        aboutSignals: function() {
                            this.$emit("about-signals")
                        }
                    }
                })),
                _ = Object(h.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            class: ["tds-entity-render", e.$mdActiveTheme, {
                                "tds-entity-render--vertical": e.vertical,
                                "tds-entity-render--actions-next-line": e.actionsNextLine,
                                "tds-entity-render--compact-entity": e.compactEntity
                            }],
                            style: e.cssProps
                        }, [e.displayPicture ? c("div", {
                            staticClass: "tds-entity-render__picture"
                        }, [c("tds-entity-picture", {
                            attrs: {
                                entity: e.entity,
                                "border-width": e.imageBorderWidth,
                                size: e.imageSize,
                                "default-margin": !1,
                                shape: e.shape,
                                href: e.href,
                                target: e.hrefTarget
                            }
                        })], 1) : e._e(), e._v(" "), c("div", {
                            class: ["tds-entity-render__entity-data", {
                                "tds-entity-render--fullwidth": e.actionsNextLine
                            }]
                        }, [c("h5", {
                            class: ["tds-entity-render__entity-name", {
                                "md-subheading-1": !e.vertical,
                                "md-body-1": e.vertical
                            }]
                        }, [e.entity.prefix ? c("span", {
                            staticClass: "tds-entity-render__prefix"
                        }, [e._v("\n        " + e._s(e.entity.prefix) + ": \n      ")]) : e._e(), e._v(" "), e.href ? c("a", {
                            staticClass: "tds-entity-render__link",
                            attrs: {
                                href: e.href,
                                target: e.hrefTarget
                            }
                        }, [e._v("\n        " + e._s(e.entity.name) + "\n      ")]) : c("span", [e._v("\n        " + e._s(e.entity.name) + "\n        "), "person" === e.entityType ? c("span", [e.vertical ? c("tmd-icon", {
                            staticClass: "tds-entity-render__icon-rotated tmd-color-accent",
                            attrs: {
                                size: "14px",
                                fill: ""
                            }
                        }, [e._v("do_not_disturb_on")]) : e._e(), e._v(" "), c("tmd-tooltip", [e._v(e._s(e.entity.name.replace(/ .*/, "")) + " " + e._s(e.$t("doesn’t have a Torre genome, yet.")))])], 1) : e._e()]), e._v(" "), e.entity.nameSuffix ? c("span", {
                            staticClass: "tmd-color-accent"
                        }, [e._v("\n        " + e._s(e.entity.nameSuffix) + "\n      ")]) : e._e(), e._v(" "), e.displayVerified ? c("span", {
                            class: [{
                                "tds-entity-render__verified": !e.displayWeight
                            }, {
                                "tds-entity-render__verified-weight": e.displayWeight
                            }]
                        }, [c("tmd-icon", {
                            staticClass: "tds-entity-render__space tmd-color-accent",
                            attrs: {
                                size: e.iconSize + "px",
                                fill: ""
                            }
                        }, [e._v("verified")]), e._v(" "), c("tmd-tooltip", {
                            attrs: {
                                "md-direction": "bottom"
                            }
                        }, [e._v("\n          " + e._s(e.$t("Verified")) + "\n        ")])], 1) : e._e(), e._v(" "), e.displayWeight ? c("span", [c("tds-weight-render", {
                            staticClass: "tds-entity-render__space",
                            attrs: {
                                value: e.entity.weight,
                                "icon-size": e.iconSize,
                                "person-id": "" + e.entity.id,
                                "track-render": e.trackWeight,
                                "icon-position": "left",
                                "dot-divider": ""
                            }
                        })], 1) : e._e()]), e._v(" "), e.displayProfessionalHeadline ? c("span", {
                            staticClass: "tds-entity-render__professional-headline"
                        }, [c("span", {
                            class: [{
                                "md-caption": !e.vertical
                            }, {
                                "md-label": e.vertical
                            }],
                            attrs: {
                                title: e.entity.professionalHeadline
                            }
                        }, [e._v("\n        " + e._s(e.entity.professionalHeadline) + "\n      ")]), e._v(" "), e._l(e.optionalSubTitle, (function(t, n) {
                            return c("span", {
                                key: n
                            }, [t.icon && t.color && t.text ? c("span", {
                                staticClass: "md-label tds-entity-render__subtitle-icon"
                            }, [c("tmd-icon", {
                                class: t.color,
                                attrs: {
                                    size: "16px",
                                    fill: ""
                                }
                            }, [e._v(e._s(t.icon))]), e._v(" "), c("span", {
                                staticClass: "tds-entity-render__space tmd-color-accent"
                            }, [e._v("\n            " + e._s(t.text) + "\n          ")])], 1) : c("span", {
                                staticClass: "md-label tds-entity-render__status",
                                attrs: {
                                    title: t
                                }
                            }, [e._v("\n          " + e._s(t) + "\n        ")])])
                        }))], 2) : e._e(), e._v(" "), e.entity.jobsPosted ? c("span", {
                            staticClass: "tds-entity-render__jobs-posted md-caption"
                        }, [e._v("\n      " + e._s(e.entity.jobsPosted) + "\n    ")]) : e._e()]), e._v(" "), e.signalButtonInfo ? c("div", {
                            class: ["tds-entity-render__actions", {
                                "tds-entity-render--align-right": e.actionsNextLine
                            }]
                        }, [c("tdl-signal-button", {
                            attrs: {
                                "entity-name": e.entity.name,
                                "entity-type": e.entityType,
                                username: e.signalButtonInfo.username,
                                "state-type": e.signalButtonInfo.signalState,
                                "notifications-type": e.signalButtonInfo.notificationsType,
                                "menu-styles": e.menuStyles,
                                mini: e.signalButtonInfo.mini
                            },
                            on: {
                                "about-signals": e.aboutSignals,
                                "state-update": e.handleStateUpdate,
                                "notifications-type-update": function(t) {
                                    return e.handleNotificationsTypeUpdate(t)
                                }
                            }
                        })], 1) : e._e()])
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-12010c26_0", {
                        source: ".tds-entity-render[data-v-12010c26]{display:flex;width:100%}.tds-entity-render__picture[data-v-12010c26]{margin:8px 12px 8px 0}.tds-entity-render__entity-data[data-v-12010c26]{display:flex;flex-direction:column;justify-content:center;width:auto;overflow:hidden}.tds-entity-render__entity-data>*[data-v-12010c26]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;top:calc(var(--image-border-width)/ 2)}.tds-entity-render__entity-data .tds-entity-render__verified[data-v-12010c26]{overflow:visible}.tds-entity-render__prefix[data-v-12010c26]{overflow:visible}.tds-entity-render__entity-name[data-v-12010c26]{margin:0;display:flex;font-size:14px}.tds-entity-render__icon-rotated[data-v-12010c26]{transform:rotate(-45deg);vertical-align:baseline!important}.tds-entity-render__actions[data-v-12010c26]{display:flex;flex-direction:column;justify-content:center;margin-left:auto;padding-left:12px}.tds-entity-render__verified *[data-v-12010c26]{margin-right:-1px;top:3px}.tds-entity-render__verified-weight *[data-v-12010c26]{margin-right:-4px;top:1px}.tds-entity-render__status[data-v-12010c26]{display:flex;line-height:20px}.tds-entity-render__subtitle-icon[data-v-12010c26]{display:flex;margin-top:2px;align-items:center}.tds-entity-render--compact-entity .tds-entity-render__picture[data-v-12010c26]{margin:0 12px 0 0}.tds-entity-render--compact-entity .tds-entity-render__professional-headline[data-v-12010c26]{line-height:normal}.tds-entity-render--compact-entity .tds-entity-render__professional-headline .md-caption[data-v-12010c26]{font-size:12px}.tds-entity-render--compact-entity .tds-entity-render__entity-name[data-v-12010c26]{font-size:16px}.tds-entity-render--compact-entity .tds-entity-render__entity-data[data-v-12010c26]{font-size:12px}.tds-entity-render--vertical[data-v-12010c26]{flex-direction:column}.tds-entity-render--vertical .tds-entity-render__entity-data[data-v-12010c26]{margin:0;text-align:center}.tds-entity-render--vertical .tds-entity-render__picture[data-v-12010c26]{margin-right:0}.tds-entity-render--vertical .tds-entity-render__actions[data-v-12010c26]{align-items:center;margin-left:inherit}.tds-entity-render--vertical .tds-entity-render__entity-name[data-v-12010c26]{display:flex;justify-content:center;align-items:flex-end;margin:8px 0 6px;line-height:1}.tds-entity-render--vertical .tds-entity-render__entity-name a[data-v-12010c26]{margin-right:2px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tds-entity-render--vertical .tds-entity-render__professional-headline[data-v-12010c26]{min-height:14px;margin-bottom:14px}.tds-entity-render--vertical .tds-entity-render__status[data-v-12010c26]{justify-content:center}.tds-entity-render--vertical .tds-entity-render__subtitle-icon[data-v-12010c26]{justify-content:center}.tds-entity-render--vertical .tds-entity-render__jobs-posted[data-v-12010c26]{min-height:14px;margin-bottom:14px}.tds-entity-render--vertical .tds-entity-render__verified *[data-v-12010c26]{margin-right:0;top:1px}.tds-entity-render--actions-next-line[data-v-12010c26]{flex-wrap:wrap;justify-content:flex-end}.tds-entity-render--fullwidth[data-v-12010c26]{min-width:70%}.tds-entity-render--align-right[data-v-12010c26]{align-items:flex-end;width:100%}.tds-entity-render__link[data-v-12010c26]{text-decoration:none!important;display:inline-block;overflow:hidden;text-overflow:ellipsis}.tds-entity-render__space[data-v-12010c26]{margin-left:4px}",
                        map: void 0,
                        media: void 0
                    })
                }), f, "data-v-12010c26", !1, undefined, !1, h.a, void 0, void 0)
        },
        988: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return k
            }));
            var n = c(38),
                r = (c(51), c(382), c(200), c(52), c(148), c(384)),
                o = c(781),
                d = c(91),
                l = c(439),
                m = c(35),
                v = c(256),
                h = c(2),
                f = c(989),
                _ = c.n(f),
                y = c(857),
                x = c(887),
                w = c(179),
                T = h.default.extend({
                    name: "member-list-card",
                    components: {
                        TmdButton: r.a,
                        TmdCard: o.a,
                        TmdIcon: d.a,
                        TdlEntityRender: l.a
                    },
                    props: {
                        member: {
                            type: Object,
                            required: !0
                        },
                        signalButtonInfo: {
                            type: Object,
                            required: !1
                        },
                        draggable: {
                            type: Boolean,
                            default: !1
                        },
                        enableRemove: {
                            type: Boolean,
                            default: !1
                        },
                        menuStyles: {
                            type: Object,
                            default: function() {
                                return {
                                    "--theme-color": "#CDDC39"
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            hasMounted: !1
                        }
                    },
                    computed: {
                        showRemoveButton: function() {
                            return this.enableRemove && !this.member.poster && !this.member.isCurrentUser
                        },
                        optionalSubtitle: function() {
                            return this.member.leader ? [{
                                icon: x.b,
                                text: this.$i18n.t("Leader"),
                                color: "white-opacity-90"
                            }] : void 0
                        }
                    },
                    methods: {
                        openSignalsAboutDialog: function() {
                            this.$emit("open-about-signals")
                        },
                        onSignalUpdate: function(e, t) {
                            this.$emit("signal-update", e, t)
                        },
                        onSignalNotificationUpdate: function(e) {
                            var t, c, n;
                            this.$emit("notifications-type-update", null !== (t = null === (c = this.member.person) || void 0 === c ? void 0 : c.username) && void 0 !== t ? t : null === (n = this.member.person) || void 0 === n ? void 0 : n.publicId, e)
                        },
                        remove: function() {
                            var e;
                            this.$emit("remove", null === (e = this.member.person) || void 0 === e ? void 0 : e.id)
                        }
                    }
                }),
                C = Object(w.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("tmd-card", {
                            class: ["tds-member-card", {
                                "tds-member-card--draggable": e.draggable
                            }],
                            attrs: {
                                type: "elevated"
                            }
                        }, [e.draggable ? c("tmd-icon", {
                            staticClass: "tmd-color-theme"
                        }, [e._v("\n    drag_indicator\n  ")]) : e._e(), e._v(" "), c("tdl-entity-render", {
                            attrs: {
                                "member-id": e.member.id,
                                entity: e.member.person,
                                href: e.member.url,
                                "image-size": 44,
                                "icon-size": 17,
                                hide: ["weight"],
                                shape: "hexagon",
                                "optional-sub-title": e.optionalSubtitle,
                                "signal-button-info": e.showRemoveButton ? void 0 : e.signalButtonInfo,
                                "menu-styles": e.menuStyles
                            },
                            on: {
                                "about-signals": e.openSignalsAboutDialog,
                                "signal-update": e.onSignalUpdate,
                                "notifications-type-update": e.onSignalNotificationUpdate,
                                click: function(e) {
                                    e.stopPropagation()
                                }
                            }
                        }), e._v(" "), e.showRemoveButton ? c("tmd-button", {
                            staticClass: "tmd-icon-button tmd-color-error",
                            on: {
                                click: e.remove
                            }
                        }, [c("tmd-icon", {
                            attrs: {
                                fill: ""
                            }
                        }, [e._v("delete")])], 1) : e._e()], 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-195d7092_0", {
                        source: ".tds-member-card[data-v-195d7092]{padding:12px 12px;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.tds-member-card--draggable[data-v-195d7092]{cursor:pointer;padding-left:4px}.tds-member-card .tdl-entity-render[data-v-195d7092]{min-width:0}.tds-member-card .tdl-entity-render[data-v-195d7092]  .entity-picture{width:var(--size);height:var(--size)}.tds-member-card--ghost[data-v-195d7092]{box-shadow:none;border:0}.tds-member-card--ghost *[data-v-195d7092]{opacity:0}",
                        map: void 0,
                        media: void 0
                    })
                }), T, "data-v-195d7092", !1, undefined, !1, w.a, void 0, void 0),
                S = h.default.extend({
                    name: "tds-member-list",
                    components: {
                        draggable: _.a,
                        MemberListCard: C,
                        MdButton: m.a,
                        MdSpinner: v.a,
                        TmdCard: o.a,
                        TmdIcon: d.a
                    },
                    i18n: {
                        messages: {
                            en: {
                                "Add $label": "Add {label}",
                                "You haven't added $label": "You haven't added {label}",
                                "view $page more ($left)": "view {page} more ({left})",
                                "view all ($left)": "view all ({left})",
                                "Click and drag to reorder.": "Click and drag to reorder."
                            },
                            es: {
                                "Add $label": "Agregar {label}",
                                "You haven't added $label": "No has agregado {label}",
                                "view $page more ($left)": "ver {page} más ({left})",
                                "view all ($left)": "ver todas ({left})",
                                "Click and drag to reorder.": "Haz clic y arrastra para reordenar."
                            }
                        }
                    },
                    props: {
                        members: {
                            type: Array,
                            required: !0
                        },
                        signalButtonInfo: {
                            type: Array,
                            required: !1
                        },
                        totalMembers: {
                            type: Number,
                            default: 0
                        },
                        membersPerPage: {
                            type: Number,
                            default: 4
                        },
                        loading: {
                            type: Boolean,
                            default: !1
                        },
                        editable: {
                            type: Boolean,
                            default: !1
                        },
                        draggable: {
                            type: Boolean,
                            default: !1
                        },
                        enableRemove: {
                            type: Boolean,
                            default: !1
                        },
                        label: {
                            type: String,
                            required: !0
                        },
                        menuStyles: {
                            type: Object,
                            default: function() {
                                return {
                                    "--theme-color": "#CDDC39"
                                }
                            }
                        }
                    },
                    data: function() {
                        return {
                            refreshKey: Math.floor(100 * Math.random()),
                            draggableDelay: 0
                        }
                    },
                    computed: {
                        membersToShow: function() {
                            var e = Object(n.a)(this.members);
                            return this.draggable && e.sort((function(a, b) {
                                return a.position - b.position
                            })), e
                        },
                        membersLeftToShow: function() {
                            return this.totalMembers - this.members.length
                        },
                        draggableOptions: function() {
                            return {
                                scrollSensitivity: 30,
                                delay: this.draggableDelay,
                                group: "members",
                                ghostClass: "tds-member-card--ghost",
                                forceFallback: !0,
                                fallbackClass: "member-list-card--dragging",
                                fallbackTolerance: "1px",
                                filter: ".md-button"
                            }
                        },
                        showDraggableText: function() {
                            return this.draggable && this.editable && this.members.length > 1
                        }
                    },
                    watch: {
                        membersToShow: {
                            immediate: !0,
                            handler: function() {
                                this.refreshKey = Math.random()
                            }
                        }
                    },
                    mounted: function() {
                        this.draggableDelay = Object(y.b)() ? 100 : 0
                    },
                    methods: {
                        getSignalButtonInfo: function(e) {
                            var t;
                            return null === (t = this.signalButtonInfo) || void 0 === t ? void 0 : t.find((function(t) {
                                var c, n, r;
                                return t.signaled === (null !== (c = null === (n = e.person) || void 0 === n ? void 0 : n.username) && void 0 !== c ? c : null === (r = e.person) || void 0 === r ? void 0 : r.publicId)
                            }))
                        },
                        viewMore: function() {
                            this.$emit("on-view-more", this.membersPerPage)
                        },
                        editMembers: function() {
                            this.$emit("on-edit")
                        },
                        removeMember: function(e) {
                            this.$emit("on-remove", e)
                        },
                        onSignalUpdate: function(e, t) {
                            this.$emit("on-signal-update", e, t)
                        },
                        onSignalNotificationUpdate: function(e, t) {
                            this.$emit("on-notifications-type-update", "people", e, t)
                        },
                        onOpenAboutSignals: function() {
                            this.$emit("open-about-signals")
                        },
                        handleDragEnd: function(e) {
                            var t = e.item.id.split("-")[2];
                            this.$emit("on-position-changed", {
                                oldIndex: e.oldIndex,
                                newIndex: e.newIndex,
                                memberId: t
                            })
                        }
                    }
                }),
                k = Object(w.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return e.editable || e.members.length > 0 ? c("tmd-card", {
                            staticClass: "tds-member-list",
                            style: {
                                overflow: "unset"
                            },
                            attrs: {
                                "md-elevation": "1"
                            }
                        }, [e.members.length > 0 ? c("div", {
                            class: ["tds-member-list__header", {
                                "tds-member-list__header--no-margin": e.showDraggableText
                            }]
                        }, [c("p", {
                            staticClass: "tds-member-list__header__label"
                        }, [e._v("\n      " + e._s(e.label) + ":\n    ")]), e._v(" "), e.editable ? c("md-button", {
                            staticClass: "md-icon-button md-raised",
                            attrs: {
                                "shadow-style": "dark"
                            },
                            on: {
                                click: e.editMembers
                            }
                        }, [c("tmd-icon", {
                            staticClass: "tmd-color-theme",
                            attrs: {
                                fill: ""
                            }
                        }, [e._v("\n        edit\n      ")])], 1) : e._e()], 1) : e._e(), e._v(" "), e.showDraggableText ? c("p", {
                            staticClass: "tds-member-list__header__label tds-member-list__header__label--draggable-text tmd-color-accent"
                        }, [e._v("\n    " + e._s(e.$t("Click and drag to reorder.")) + "\n  ")]) : e._e(), e._v(" "), e.members.length > 0 ? c("div", [c(e.draggable && e.editable ? "draggable" : "div", e._b({
                            key: e.refreshKey,
                            tag: "component",
                            staticClass: "tds-member-list__list",
                            attrs: {
                                animation: 200
                            },
                            on: {
                                end: e.handleDragEnd
                            }
                        }, "component", e.draggableOptions, !1), e._l(e.membersToShow, (function(t) {
                            return c("member-list-card", {
                                key: t.id,
                                attrs: {
                                    id: "member-item-" + t.id,
                                    member: t,
                                    draggable: e.draggable && e.editable,
                                    "enable-remove": e.enableRemove && e.editable,
                                    "signal-button-info": e.getSignalButtonInfo(t),
                                    "menu-styles": e.menuStyles
                                },
                                on: {
                                    remove: e.removeMember,
                                    "signal-update": e.onSignalUpdate,
                                    "notifications-type-update": e.onSignalNotificationUpdate,
                                    "open-about-signals": e.onOpenAboutSignals
                                }
                            })
                        })), 1), e._v(" "), e.membersLeftToShow > 0 ? c("div", {
                            staticClass: "tds-member-list__center-button"
                        }, [e.loading ? c("md-spinner", {
                            staticClass: "tds-member-list__loader",
                            attrs: {
                                "md-indeterminate": "",
                                "md-size": 24
                            }
                        }) : c("md-button", {
                            staticClass: "md-primary",
                            on: {
                                click: e.viewMore
                            }
                        }, [e.membersLeftToShow > e.membersPerPage ? [e._v("\n          " + e._s(e.$t("view $page more ($left)", {
                            page: e.membersPerPage,
                            left: e.membersLeftToShow
                        })) + "\n        ")] : [e._v("\n          " + e._s(e.$t("view all ($left)", {
                            left: e.membersLeftToShow
                        })) + "\n        ")], e._v(" "), c("tmd-icon", [e._v("expand_more")])], 2)], 1) : e._e()], 1) : c("div", {
                            staticClass: "tds-member-list__empty"
                        }, [c("p", {
                            staticClass: "tmd-caption tmd-color-accent"
                        }, [e._v("\n      " + e._s(e.$t("You haven't added $label", {
                            label: e.label.toLowerCase()
                        })) + "\n    ")]), e._v(" "), c("md-button", {
                            staticClass: "md-raised",
                            attrs: {
                                "shadow-style": "dark"
                            },
                            on: {
                                click: e.editMembers
                            }
                        }, [c("tmd-icon", {
                            style: {
                                marginBottom: "3px"
                            },
                            attrs: {
                                fill: ""
                            }
                        }, [e._v("\n        add_circle\n      ")]), e._v("\n      " + e._s(e.$t("Add $label", {
                            label: e.label
                        })) + "\n    ")], 1)], 1)]) : e._e()
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-e4d42b98_0", {
                        source: ".tds-member-list[data-v-e4d42b98]{width:100%;margin-bottom:24px}.tds-member-list .tds-member-list__header[data-v-e4d42b98]{margin-bottom:16px;padding:8px 0;display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start}.tds-member-list .tds-member-list__header__label[data-v-e4d42b98]{justify-content:center;margin:0;line-height:34px}.tds-member-list .tds-member-list__header__label--draggable-text[data-v-e4d42b98]{margin-bottom:12px}.tds-member-list .tds-member-list__header--no-margin[data-v-e4d42b98]{margin-bottom:0!important}.tds-member-list__list[data-v-e4d42b98]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));grid-gap:8px}.tds-member-list__center-button[data-v-e4d42b98]{display:flex;justify-content:center;align-items:center;margin-top:16px}.tds-member-list__center-button .md-button[data-v-e4d42b98]{margin:0!important}.tds-member-list__empty[data-v-e4d42b98]{display:flex;justify-content:center;flex-direction:column;align-items:center;margin-top:16px}.tds-member-list__loader[data-v-e4d42b98]{margin:6px 0}.tds-member-list[data-v-e4d42b98]  .md-button.md-icon-button{padding:0 0 2px}",
                        map: void 0,
                        media: void 0
                    })
                }), S, "data-v-e4d42b98", !1, undefined, !1, w.a, void 0, void 0)
        },
        990: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return C
            }));
            c(45), c(74), c(65), c(51), c(75), c(31), c(88), c(15), c(32), c(123), c(33), c(40), c(112), c(121), c(34);
            var n = c(2),
                r = c(781),
                o = c(133),
                d = c(888),
                l = c(179),
                m = c(857);

            function v(e, t) {
                var c = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!c) {
                    if (Array.isArray(e) || (c = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return h(e, t);
                            var c = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === c && e.constructor && (c = e.constructor.name);
                            if ("Map" === c || "Set" === c) return Array.from(e);
                            if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return h(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        c && (e = c);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, o = !0,
                    d = !1;
                return {
                    s: function() {
                        c = c.call(e)
                    },
                    n: function() {
                        var e = c.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        d = !0, r = e
                    },
                    f: function() {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (d) throw r
                        }
                    }
                }
            }

            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, c = new Array(t); i < t; i++) c[i] = e[i];
                return c
            }
            var f = n.default.extend({
                    name: "navigation-menu-item",
                    mixins: [d.b],
                    props: {
                        active: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    methods: {
                        onSectionClick: function() {
                            var e;
                            null === (e = document.getElementById(this.sectionId)) || void 0 === e || e.scrollIntoView({
                                behavior: "smooth"
                            }), d.a.$emit("section-clicked", this.sectionId)
                        }
                    }
                }),
                _ = Object(l.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c(e.sectionComponentTag, {
                            tag: "component",
                            class: ["tds-navigation-menu-item", {
                                "tds-navigation-menu-item--standalone": !e.mainColumnOnly,
                                "tds-navigation-menu-item--active": e.active
                            }]
                        }, [e.active ? c("div", {
                            staticClass: "tds-navigation-menu-item__anchor"
                        }, [e._v("\n    " + e._s(e.sectionTitle) + "\n  ")]) : c("a", {
                            staticClass: "tds-navigation-menu-item__anchor",
                            attrs: {
                                href: "#" + e.sectionId
                            },
                            on: {
                                click: function(t) {
                                    return t.preventDefault(), e.onSectionClick.apply(null, arguments)
                                }
                            }
                        }, [e._v("\n    " + e._s(e.sectionTitle) + "\n  ")])])
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-e4c92e72_0", {
                        source: ".tmd-input[data-v-e4c92e72],.tmd-textarea[data-v-e4c92e72]{font-size:16px;line-height:32px}.tmd-button[data-v-e4c92e72]{font-size:14px;font-weight:600;letter-spacing:.01em;line-height:20px;text-transform:uppercase;font-family:inherit}.tmd-caption[data-v-e4c92e72],small[data-v-e4c92e72]{font-size:12px;font-weight:400;letter-spacing:.02em;line-height:16px}.tmd-body[data-v-e4c92e72]{font-size:14px;font-weight:400;letter-spacing:.018em;line-height:20px}.tmd-headline[data-v-e4c92e72],h1[data-v-e4c92e72],h2[data-v-e4c92e72]{font-size:20px;font-weight:600;letter-spacing:.005em;line-height:28px}a[data-v-e4c92e72]:not(.tmd-button):not(.md-button){text-decoration:none;cursor:pointer}a[data-v-e4c92e72]:not(.tmd-button):not(.md-button):hover{text-decoration:underline}button[data-v-e4c92e72]:focus{outline:0}.tds-navigation-menu-item[data-v-e4c92e72]{min-width:88px;min-height:26px;display:flex;flex-grow:1;flex-shrink:0;align-items:start;margin:0 4px 0 0;justify-content:start;border-bottom:1px solid;border-right:none;transition-property:border,color;transition:.2s cubic-bezier(.4,0,.2,1);font-size:12px;font-weight:400;letter-spacing:.02em;line-height:16px}.tds-navigation-menu-item--active[data-v-e4c92e72]{border-bottom:3px solid;border-right:none}.tds-navigation-menu-item .tds-navigation-menu-item__anchor[data-v-e4c92e72]{margin:0;padding:8px 8px 8px 0;width:100%;text-align:unset;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition-property:color;transition:.2s cubic-bezier(.4,0,.2,1)}.tds-navigation-menu-item .tds-navigation-menu-item__anchor[data-v-e4c92e72]:hover{text-decoration:none!important}@media (min-width:720px){.tds-navigation-menu-item[data-v-e4c92e72]{min-height:44px;flex-grow:0;align-items:center;justify-content:end;margin:0;border-bottom:none;border-right:1px solid;font-size:20px;font-weight:600;letter-spacing:.005em;line-height:28px}.tds-navigation-menu-item--active[data-v-e4c92e72]{border-bottom:none;border-right:3px solid}.tds-navigation-menu-item .tds-navigation-menu-item__anchor[data-v-e4c92e72]{padding:8px 16px 8px 0;text-align:end;text-overflow:unset;white-space:unset}}@media (hover:hover){.tds-navigation-menu-item[data-v-e4c92e72]:hover{border-bottom:3px solid;border-right:none}}@media ((hover:hover) and (min-width:720px)){.tds-navigation-menu-item[data-v-e4c92e72]:hover{border-bottom:none;border-right:3px solid}}@media (min-width:1492px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(1){display:none}}@media (min-width:1876px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(2){display:none}}@media (min-width:2260px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(3){display:none}}@media (min-width:2644px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(4){display:none}}@media (min-width:3028px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(5){display:none}}@media (min-width:3412px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(6){display:none}}@media (min-width:3796px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(7){display:none}}@media (min-width:4180px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(8){display:none}}@media (min-width:4564px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(9){display:none}}@media (min-width:4948px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(10){display:none}}@media (min-width:5332px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(11){display:none}}@media (min-width:5716px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(12){display:none}}@media (min-width:6100px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(13){display:none}}@media (min-width:6484px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(14){display:none}}@media (min-width:6868px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(15){display:none}}@media (min-width:7252px){.tds-navigation-menu-item.standalone[data-v-e4c92e72]:nth-of-type(16){display:none}}",
                        map: void 0,
                        media: void 0
                    })
                }), f, "data-v-e4c92e72", !1, undefined, !1, l.a, void 0, void 0),
                y = _,
                x = n.default.extend({
                    name: "navigation-menu",
                    components: {
                        NavigationMenuItem: y
                    },
                    props: {
                        sections: {
                            type: Array,
                            required: !0
                        },
                        showTabs: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function() {
                        return {
                            sectionInView: "",
                            sectionInFocus: "",
                            allowedSections: [],
                            shouldUseInFocus: !0,
                            activeTimeout: 0,
                            shouldBeHidden: !1,
                            scrollListenerDisabled: !1,
                            debounceTimerId: void 0
                        }
                    },
                    computed: {
                        activeSection: function() {
                            return this.shouldUseInFocus && this.sectionInFocus && this.allowedSections.includes(this.sectionInFocus) ? this.sectionInFocus : this.sectionInView
                        }
                    },
                    watch: {
                        activeSection: function(e) {
                            e && this.scrollIntoView(e)
                        }
                    },
                    mounted: function() {
                        window.location.hash ? this.sectionInView = window.location.hash.substring(1) : this.sections.length && (this.sectionInView = this.sections[0].sectionId), d.a.$on("section-hover-enter", this.onSectionHoverEnter), d.a.$on("section-hover-leave", this.onSectionHoverLeave), d.a.$on("section-clicked", this.onSectionClicked), window.addEventListener("scroll", this.handleScrollEvent), window.addEventListener("resize", this.handleResizeEvent), this.handleResizeEvent(), this.shouldUseInFocus = !Object(m.b)()
                    },
                    beforeDestroy: function() {
                        d.a.$off("section-hover-enter", this.onSectionHoverEnter), d.a.$off("section-hover-leave", this.onSectionHoverLeave), d.a.$off("section-clicked", this.onSectionClicked), window.removeEventListener("scroll", this.handleScrollEvent), window.removeEventListener("resize", this.handleResizeEvent)
                    },
                    methods: {
                        scrollIntoView: function(e) {
                            var t = this;
                            this.activeTimeout && window.clearTimeout(this.activeTimeout), this.activeTimeout = window.setTimeout((function() {
                                var c;
                                null === (c = document.getElementById(t.menuItemId(e))) || void 0 === c || c.scrollIntoView(), t.scrollListenerDisabled = !1
                            }), 1e3)
                        },
                        menuItemId: function(e) {
                            return "menu-item-".concat(e)
                        },
                        checkAllowedSections: function() {
                            this.allowedSections = [];
                            var e, t = v(this.sections);
                            try {
                                for (t.s(); !(e = t.n()).done;) {
                                    var section = e.value,
                                        c = document.getElementById(section.sectionId);
                                    if (c) c.getBoundingClientRect().left >= 720 || this.allowedSections.push(section.sectionId)
                                }
                            } catch (e) {
                                t.e(e)
                            } finally {
                                t.f()
                            }
                        },
                        handleScrollEvent: function() {
                            if (!this.scrollListenerDisabled) {
                                var e, t = v(this.allowedSections);
                                try {
                                    for (t.s(); !(e = t.n()).done;) {
                                        var c, n = e.value,
                                            r = null === (c = document.getElementById(n)) || void 0 === c ? void 0 : c.getBoundingClientRect();
                                        r && r.top <= .2 * window.innerHeight && (this.sectionInView = n)
                                    }
                                } catch (e) {
                                    t.e(e)
                                } finally {
                                    t.f()
                                }
                            }
                        },
                        handleResizeEvent: function() {
                            this.checkAllowedSections(), this.handleScrollEvent()
                        },
                        onSectionHoverEnter: function(e) {
                            var t = this;
                            this.debounceHoverEvent((function() {
                                t.scrollListenerDisabled || (t.sectionInFocus = e)
                            }))
                        },
                        onSectionHoverLeave: function(e) {
                            var t = this;
                            this.debounceHoverEvent((function() {
                                t.sectionInFocus === e && (t.sectionInFocus = "")
                            }))
                        },
                        debounceHoverEvent: function(e) {
                            this.debounceTimerId && window.clearTimeout(this.debounceTimerId), this.debounceTimerId = window.setTimeout(e, 300)
                        },
                        onSectionClicked: function(e) {
                            this.scrollListenerDisabled = !0, this.sectionInView = e, this.sectionInFocus = ""
                        }
                    }
                }),
                w = Object(l.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("nav", {
                            class: ["tds-navigation-menu tmd-scrollbar", {
                                "tds-navigation-menu--hidden": e.shouldBeHidden,
                                "tds-navigation-menu--with-tabs": e.showTabs
                            }]
                        }, e._l(e.sections, (function(section) {
                            return c("navigation-menu-item", {
                                key: section.sectionId,
                                attrs: {
                                    id: e.menuItemId(section.sectionId),
                                    "section-id": section.sectionId,
                                    "section-title": section.sectionTitle,
                                    "main-column-only": section.mainColumnOnly,
                                    active: e.activeSection == section.sectionId
                                }
                            })
                        })), 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-7bf908dc_0", {
                        source: ".tds-navigation-menu[data-v-7bf908dc]{grid-area:nav;position:fixed;top:0;right:0;bottom:unset;left:0;z-index:3;display:flex;flex-direction:row;padding:0 4px 12px;height:max-content;max-height:calc(100vh - 72px);width:100%;margin-top:var(--layout-section-top-offset,0);overflow-x:auto;overflow-y:hidden;align-items:stretch;justify-content:start}@media (min-width:720px){.tds-navigation-menu[data-v-7bf908dc]{top:0;right:unset;bottom:0;left:0;flex-direction:column;padding:24px 0 72px 8px;width:270px;overflow-x:hidden;overflow-y:auto;align-items:end;background-color:transparent}.tds-navigation-menu--with-tabs[data-v-7bf908dc]{margin-left:70px}.tds-navigation-menu--hidden[data-v-7bf908dc]{display:none}}",
                        map: void 0,
                        media: void 0
                    })
                }), x, "data-v-7bf908dc", !1, undefined, !1, l.a, void 0, void 0),
                T = n.default.extend({
                    name: "tds-page-layout",
                    components: {
                        NavigationMenu: w,
                        TmdCard: r.a
                    },
                    mixins: [o.a],
                    props: {
                        numberOfSections: {
                            type: Number,
                            default: 1
                        },
                        sectionTopOffset: {
                            type: Number,
                            default: 56
                        },
                        showTabs: {
                            type: Boolean,
                            default: !1
                        },
                        includeNav: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    computed: {
                        pageSections: function() {
                            var e, t;
                            return this.numberOfSections <= 0 ? [] : null !== (e = null === (t = this.$slots.default) || void 0 === t ? void 0 : t.filter((function(e) {
                                var t;
                                return "tds-page-section" === (null === (t = e.componentOptions) || void 0 === t ? void 0 : t.tag)
                            })).map((function(e) {
                                var t;
                                return null === (t = e.componentOptions) || void 0 === t ? void 0 : t.propsData
                            }))) && void 0 !== e ? e : []
                        },
                        cssVariables: function() {
                            return {
                                "--layout-section-top-offset": "".concat(this.sectionTopOffset, "px"),
                                "--use-full-tabs-padding": this.showTabs,
                                "border-radius": "0"
                            }
                        }
                    }
                }),
                C = Object(l.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("tmd-card", {
                            staticClass: "tds-page-layout",
                            class: {
                                "tds-page-layout--no-nav": !e.includeNav
                            },
                            style: e.cssVariables,
                            attrs: {
                                type: "filled",
                                "md-elevation": "1"
                            }
                        }, [e.includeNav ? c("navigation-menu", {
                            attrs: {
                                sections: e.pageSections,
                                "show-tabs": e.showTabs
                            }
                        }) : e._e(), e._v(" "), e.$slots.banner ? c("div", {
                            staticClass: "tds-page-layout__banner"
                        }, [e._t("banner")], 2) : e._e(), e._v(" "), e._t("default"), e._v(" "), e.$slots["bottom-banner"] ? c("div", {
                            class: ["tds-page-layout__bottom-banner", {
                                "tds-page-layout__bottom-banner--with-tabs": e.showTabs
                            }]
                        }, [e._t("bottom-banner")], 2) : e._e()], 2)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-7de621b2_0", {
                        source: '.tds-page-layout[data-v-7de621b2]{position:relative;display:grid;width:100%;min-height:calc(100vh - var(--layout-section-top-offset,0));overflow:hidden}.tds-page-layout[data-v-7de621b2]::after{content:"";position:fixed;top:calc(var(--layout-section-top-offset,0) + 44px - 10px);z-index:2;pointer-events:none;height:50px;width:100%}.tds-page-layout__banner[data-v-7de621b2]{grid-area:banner;max-width:720px;margin-bottom:24px}.tds-page-layout__bottom-banner[data-v-7de621b2]{position:fixed;width:100vw;bottom:0;z-index:4}@media (max-width:720px){.tds-page-layout__bottom-banner--with-tabs[data-v-7de621b2]{margin-bottom:58px}}@media (min-width:720px){.tds-page-layout[data-v-7de621b2]::after{display:none}}.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){display:grid;grid-auto-rows:min-content;grid-gap:0 24px;grid-template-rows:repeat(16,auto) 1fr;grid-template-columns:1fr;grid-template-areas:"nav" "banner" "m1" "m2" "m3" "m4" "m5" "m6" "m7" "m8" "m9" "m10" "m11" "m12" "m13" "m14" "m15" "m16";padding:0 0 180px 0;margin:calc(var(--layout-section-top-offset,0) + 44px + 24px) 0 0 0}@media (min-width:720px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 1fr;grid-template-areas:"nav banner c1" "nav m1 c1" "nav m2 c1" "nav m3 c1" "nav m4 c1" "nav m5 c1" "nav m6 c1" "nav m7 c1" "nav m8 c1" "nav m9 c1" "nav m10 c1" "nav m11 c1" "nav m12 c1" "nav m13 c1" "nav m14 c1" "nav m15 c1" "nav m16 c1";padding:24px 0 180px 0;margin:var(--layout-section-top-offset,0) 0 0 0 0}}@media (min-width:1492px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(1,360px);grid-template-areas:"nav banner c1" "nav m1 c1" "nav m2 c1" "nav m3 c1" "nav m4 c1" "nav m5 c1" "nav m6 c1" "nav m7 c1" "nav m8 c1" "nav m9 c1" "nav m10 c1" "nav m11 c1" "nav m12 c1" "nav m13 c1" "nav m14 c1" "nav m15 c1" "nav m16 c1"}}@media (min-width:1876px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(2,360px);grid-template-areas:"nav banner c1 c2" "nav m1 c1 c2" "nav m2 c1 c2" "nav m3 c1 c2" "nav m4 c1 c2" "nav m5 c1 c2" "nav m6 c1 c2" "nav m7 c1 c2" "nav m8 c1 c2" "nav m9 c1 c2" "nav m10 c1 c2" "nav m11 c1 c2" "nav m12 c1 c2" "nav m13 c1 c2" "nav m14 c1 c2" "nav m15 c1 c2" "nav m16 c1 c2"}}@media (min-width:2260px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(3,360px);grid-template-areas:"nav banner c1 c2 c3" "nav m1 c1 c2 c3" "nav m2 c1 c2 c3" "nav m3 c1 c2 c3" "nav m4 c1 c2 c3" "nav m5 c1 c2 c3" "nav m6 c1 c2 c3" "nav m7 c1 c2 c3" "nav m8 c1 c2 c3" "nav m9 c1 c2 c3" "nav m10 c1 c2 c3" "nav m11 c1 c2 c3" "nav m12 c1 c2 c3" "nav m13 c1 c2 c3" "nav m14 c1 c2 c3" "nav m15 c1 c2 c3" "nav m16 c1 c2 c3"}}@media (min-width:2644px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(4,360px);grid-template-areas:"nav banner c1 c2 c3 c4" "nav m1 c1 c2 c3 c4" "nav m2 c1 c2 c3 c4" "nav m3 c1 c2 c3 c4" "nav m4 c1 c2 c3 c4" "nav m5 c1 c2 c3 c4" "nav m6 c1 c2 c3 c4" "nav m7 c1 c2 c3 c4" "nav m8 c1 c2 c3 c4" "nav m9 c1 c2 c3 c4" "nav m10 c1 c2 c3 c4" "nav m11 c1 c2 c3 c4" "nav m12 c1 c2 c3 c4" "nav m13 c1 c2 c3 c4" "nav m14 c1 c2 c3 c4" "nav m15 c1 c2 c3 c4" "nav m16 c1 c2 c3 c4"}}@media (min-width:3028px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(5,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5" "nav m1 c1 c2 c3 c4 c5" "nav m2 c1 c2 c3 c4 c5" "nav m3 c1 c2 c3 c4 c5" "nav m4 c1 c2 c3 c4 c5" "nav m5 c1 c2 c3 c4 c5" "nav m6 c1 c2 c3 c4 c5" "nav m7 c1 c2 c3 c4 c5" "nav m8 c1 c2 c3 c4 c5" "nav m9 c1 c2 c3 c4 c5" "nav m10 c1 c2 c3 c4 c5" "nav m11 c1 c2 c3 c4 c5" "nav m12 c1 c2 c3 c4 c5" "nav m13 c1 c2 c3 c4 c5" "nav m14 c1 c2 c3 c4 c5" "nav m15 c1 c2 c3 c4 c5" "nav m16 c1 c2 c3 c4 c5"}}@media (min-width:3412px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(6,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6" "nav m1 c1 c2 c3 c4 c5 c6" "nav m2 c1 c2 c3 c4 c5 c6" "nav m3 c1 c2 c3 c4 c5 c6" "nav m4 c1 c2 c3 c4 c5 c6" "nav m5 c1 c2 c3 c4 c5 c6" "nav m6 c1 c2 c3 c4 c5 c6" "nav m7 c1 c2 c3 c4 c5 c6" "nav m8 c1 c2 c3 c4 c5 c6" "nav m9 c1 c2 c3 c4 c5 c6" "nav m10 c1 c2 c3 c4 c5 c6" "nav m11 c1 c2 c3 c4 c5 c6" "nav m12 c1 c2 c3 c4 c5 c6" "nav m13 c1 c2 c3 c4 c5 c6" "nav m14 c1 c2 c3 c4 c5 c6" "nav m15 c1 c2 c3 c4 c5 c6" "nav m16 c1 c2 c3 c4 c5 c6"}}@media (min-width:3796px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(7,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7" "nav m1 c1 c2 c3 c4 c5 c6 c7" "nav m2 c1 c2 c3 c4 c5 c6 c7" "nav m3 c1 c2 c3 c4 c5 c6 c7" "nav m4 c1 c2 c3 c4 c5 c6 c7" "nav m5 c1 c2 c3 c4 c5 c6 c7" "nav m6 c1 c2 c3 c4 c5 c6 c7" "nav m7 c1 c2 c3 c4 c5 c6 c7" "nav m8 c1 c2 c3 c4 c5 c6 c7" "nav m9 c1 c2 c3 c4 c5 c6 c7" "nav m10 c1 c2 c3 c4 c5 c6 c7" "nav m11 c1 c2 c3 c4 c5 c6 c7" "nav m12 c1 c2 c3 c4 c5 c6 c7" "nav m13 c1 c2 c3 c4 c5 c6 c7" "nav m14 c1 c2 c3 c4 c5 c6 c7" "nav m15 c1 c2 c3 c4 c5 c6 c7" "nav m16 c1 c2 c3 c4 c5 c6 c7"}}@media (min-width:4180px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(8,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7 c8" "nav m1 c1 c2 c3 c4 c5 c6 c7 c8" "nav m2 c1 c2 c3 c4 c5 c6 c7 c8" "nav m3 c1 c2 c3 c4 c5 c6 c7 c8" "nav m4 c1 c2 c3 c4 c5 c6 c7 c8" "nav m5 c1 c2 c3 c4 c5 c6 c7 c8" "nav m6 c1 c2 c3 c4 c5 c6 c7 c8" "nav m7 c1 c2 c3 c4 c5 c6 c7 c8" "nav m8 c1 c2 c3 c4 c5 c6 c7 c8" "nav m9 c1 c2 c3 c4 c5 c6 c7 c8" "nav m10 c1 c2 c3 c4 c5 c6 c7 c8" "nav m11 c1 c2 c3 c4 c5 c6 c7 c8" "nav m12 c1 c2 c3 c4 c5 c6 c7 c8" "nav m13 c1 c2 c3 c4 c5 c6 c7 c8" "nav m14 c1 c2 c3 c4 c5 c6 c7 c8" "nav m15 c1 c2 c3 c4 c5 c6 c7 c8" "nav m16 c1 c2 c3 c4 c5 c6 c7 c8"}}@media (min-width:4564px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(9,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m1 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m2 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m3 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m4 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m5 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m6 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m7 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m8 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m9 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m10 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m11 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m12 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m13 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m14 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m15 c1 c2 c3 c4 c5 c6 c7 c8 c9" "nav m16 c1 c2 c3 c4 c5 c6 c7 c8 c9"}}@media (min-width:4948px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(10,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "nav m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10"}}@media (min-width:5332px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(11,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "nav m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11"}}@media (min-width:5716px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(12,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "nav m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12"}}@media (min-width:6100px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(13,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "nav m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13"}}@media (min-width:6484px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(14,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "nav m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14"}}@media (min-width:6868px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(15,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "nav m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15"}}@media (min-width:7252px){.tds-page-layout[data-v-7de621b2]:not(.tds-page-layout--no-nav){grid-template-columns:270px 720px repeat(16,360px);grid-template-areas:"nav banner c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "nav m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16"}}.tds-page-layout--no-nav[data-v-7de621b2]{display:grid;grid-auto-rows:min-content;grid-gap:0 24px;grid-template-rows:repeat(16,auto) 1fr;grid-template-columns:1fr;grid-template-areas:"banner" "m1" "m2" "m3" "m4" "m5" "m6" "m7" "m8" "m9" "m10" "m11" "m12" "m13" "m14" "m15" "m16";padding:0 0 180px 0;margin:0}@media (min-width:1080px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1fr;grid-template-areas:"banner banner" "m1 c1" "m2 c1" "m3 c1" "m4 c1" "m5 c1" "m6 c1" "m7 c1" "m8 c1" "m9 c1" "m10 c1" "m11 c1" "m12 c1" "m13 c1" "m14 c1" "m15 c1" "m16 c1";padding:24px 0 180px 0;margin:var(--layout-section-top-offset,0) 0 0 0 0}}@media (min-width:1630px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(1,360px);grid-template-areas:"banner banner" "m1 c1" "m2 c1" "m3 c1" "m4 c1" "m5 c1" "m6 c1" "m7 c1" "m8 c1" "m9 c1" "m10 c1" "m11 c1" "m12 c1" "m13 c1" "m14 c1" "m15 c1" "m16 c1"}}@media (min-width:2014px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(2,360px);grid-template-areas:"banner banner banner" "m1 c1 c2" "m2 c1 c2" "m3 c1 c2" "m4 c1 c2" "m5 c1 c2" "m6 c1 c2" "m7 c1 c2" "m8 c1 c2" "m9 c1 c2" "m10 c1 c2" "m11 c1 c2" "m12 c1 c2" "m13 c1 c2" "m14 c1 c2" "m15 c1 c2" "m16 c1 c2"}}@media (min-width:2398px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(3,360px);grid-template-areas:"banner banner banner banner" "m1 c1 c2 c3" "m2 c1 c2 c3" "m3 c1 c2 c3" "m4 c1 c2 c3" "m5 c1 c2 c3" "m6 c1 c2 c3" "m7 c1 c2 c3" "m8 c1 c2 c3" "m9 c1 c2 c3" "m10 c1 c2 c3" "m11 c1 c2 c3" "m12 c1 c2 c3" "m13 c1 c2 c3" "m14 c1 c2 c3" "m15 c1 c2 c3" "m16 c1 c2 c3"}}@media (min-width:2782px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(4,360px);grid-template-areas:"banner banner banner banner banner" "m1 c1 c2 c3 c4" "m2 c1 c2 c3 c4" "m3 c1 c2 c3 c4" "m4 c1 c2 c3 c4" "m5 c1 c2 c3 c4" "m6 c1 c2 c3 c4" "m7 c1 c2 c3 c4" "m8 c1 c2 c3 c4" "m9 c1 c2 c3 c4" "m10 c1 c2 c3 c4" "m11 c1 c2 c3 c4" "m12 c1 c2 c3 c4" "m13 c1 c2 c3 c4" "m14 c1 c2 c3 c4" "m15 c1 c2 c3 c4" "m16 c1 c2 c3 c4"}}@media (min-width:3166px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(5,360px);grid-template-areas:"banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5" "m2 c1 c2 c3 c4 c5" "m3 c1 c2 c3 c4 c5" "m4 c1 c2 c3 c4 c5" "m5 c1 c2 c3 c4 c5" "m6 c1 c2 c3 c4 c5" "m7 c1 c2 c3 c4 c5" "m8 c1 c2 c3 c4 c5" "m9 c1 c2 c3 c4 c5" "m10 c1 c2 c3 c4 c5" "m11 c1 c2 c3 c4 c5" "m12 c1 c2 c3 c4 c5" "m13 c1 c2 c3 c4 c5" "m14 c1 c2 c3 c4 c5" "m15 c1 c2 c3 c4 c5" "m16 c1 c2 c3 c4 c5"}}@media (min-width:3550px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(6,360px);grid-template-areas:"banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6" "m2 c1 c2 c3 c4 c5 c6" "m3 c1 c2 c3 c4 c5 c6" "m4 c1 c2 c3 c4 c5 c6" "m5 c1 c2 c3 c4 c5 c6" "m6 c1 c2 c3 c4 c5 c6" "m7 c1 c2 c3 c4 c5 c6" "m8 c1 c2 c3 c4 c5 c6" "m9 c1 c2 c3 c4 c5 c6" "m10 c1 c2 c3 c4 c5 c6" "m11 c1 c2 c3 c4 c5 c6" "m12 c1 c2 c3 c4 c5 c6" "m13 c1 c2 c3 c4 c5 c6" "m14 c1 c2 c3 c4 c5 c6" "m15 c1 c2 c3 c4 c5 c6" "m16 c1 c2 c3 c4 c5 c6"}}@media (min-width:3934px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(7,360px);grid-template-areas:"banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7" "m2 c1 c2 c3 c4 c5 c6 c7" "m3 c1 c2 c3 c4 c5 c6 c7" "m4 c1 c2 c3 c4 c5 c6 c7" "m5 c1 c2 c3 c4 c5 c6 c7" "m6 c1 c2 c3 c4 c5 c6 c7" "m7 c1 c2 c3 c4 c5 c6 c7" "m8 c1 c2 c3 c4 c5 c6 c7" "m9 c1 c2 c3 c4 c5 c6 c7" "m10 c1 c2 c3 c4 c5 c6 c7" "m11 c1 c2 c3 c4 c5 c6 c7" "m12 c1 c2 c3 c4 c5 c6 c7" "m13 c1 c2 c3 c4 c5 c6 c7" "m14 c1 c2 c3 c4 c5 c6 c7" "m15 c1 c2 c3 c4 c5 c6 c7" "m16 c1 c2 c3 c4 c5 c6 c7"}}@media (min-width:4318px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(8,360px);grid-template-areas:"banner banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7 c8" "m2 c1 c2 c3 c4 c5 c6 c7 c8" "m3 c1 c2 c3 c4 c5 c6 c7 c8" "m4 c1 c2 c3 c4 c5 c6 c7 c8" "m5 c1 c2 c3 c4 c5 c6 c7 c8" "m6 c1 c2 c3 c4 c5 c6 c7 c8" "m7 c1 c2 c3 c4 c5 c6 c7 c8" "m8 c1 c2 c3 c4 c5 c6 c7 c8" "m9 c1 c2 c3 c4 c5 c6 c7 c8" "m10 c1 c2 c3 c4 c5 c6 c7 c8" "m11 c1 c2 c3 c4 c5 c6 c7 c8" "m12 c1 c2 c3 c4 c5 c6 c7 c8" "m13 c1 c2 c3 c4 c5 c6 c7 c8" "m14 c1 c2 c3 c4 c5 c6 c7 c8" "m15 c1 c2 c3 c4 c5 c6 c7 c8" "m16 c1 c2 c3 c4 c5 c6 c7 c8"}}@media (min-width:4702px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(9,360px);grid-template-areas:"banner banner banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m2 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m3 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m4 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m5 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m6 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m7 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m8 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m9 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m10 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m11 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m12 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m13 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m14 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m15 c1 c2 c3 c4 c5 c6 c7 c8 c9" "m16 c1 c2 c3 c4 c5 c6 c7 c8 c9"}}@media (min-width:5086px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(10,360px);grid-template-areas:"banner banner banner banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10" "m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10"}}@media (min-width:5470px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(11,360px);grid-template-areas:"banner banner banner banner banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11" "m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11"}}@media (min-width:5854px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(12,360px);grid-template-areas:"banner banner banner banner banner banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12" "m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12"}}@media (min-width:6238px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(13,360px);grid-template-areas:"banner banner banner banner banner banner banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13" "m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13"}}@media (min-width:6622px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(14,360px);grid-template-areas:"banner banner banner banner banner banner banner banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14" "m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14"}}@media (min-width:7006px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(15,360px);grid-template-areas:"banner banner banner banner banner banner banner banner banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15" "m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15"}}@media (min-width:7390px){.tds-page-layout--no-nav[data-v-7de621b2]{grid-template-columns:1080px repeat(16,360px);grid-template-areas:"banner banner banner banner banner banner banner banner banner banner banner banner banner banner banner banner banner" "m1 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m2 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m3 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m4 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m5 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m6 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m7 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m8 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m9 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m10 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m11 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m12 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m13 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m14 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m15 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16" "m16 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 c16"}}.tds-page-layout--no-nav .tds-page-layout__banner[data-v-7de621b2]{max-width:1080px}@media (max-width:1080px){.tds-page-layout--no-nav .tds-page-layout__bottom-banner--with-tabs[data-v-7de621b2]{margin-bottom:58px}}',
                        map: void 0,
                        media: void 0
                    })
                }), T, "data-v-7de621b2", !1, undefined, !1, l.a, void 0, void 0)
        },
        991: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return f
            }));
            c(88), c(15), c(32), c(123), c(33), c(40), c(112), c(121), c(34);
            var n = c(2),
                r = c(781),
                o = c(782),
                d = c(888),
                l = c(179);

            function m(e, t) {
                var c = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!c) {
                    if (Array.isArray(e) || (c = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return v(e, t);
                            var c = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === c && e.constructor && (c = e.constructor.name);
                            if ("Map" === c || "Set" === c) return Array.from(e);
                            if ("Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)) return v(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        c && (e = c);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[i++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, o = !0,
                    d = !1;
                return {
                    s: function() {
                        c = c.call(e)
                    },
                    n: function() {
                        var e = c.next();
                        return o = e.done, e
                    },
                    e: function(e) {
                        d = !0, r = e
                    },
                    f: function() {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (d) throw r
                        }
                    }
                }
            }

            function v(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var i = 0, c = new Array(t); i < t; i++) c[i] = e[i];
                return c
            }
            var h = n.default.extend({
                    name: "tds-page-section",
                    components: {
                        TmdCard: r.a,
                        TmdDivider: o.a
                    },
                    mixins: [d.b],
                    props: {
                        hideHeader: {
                            type: Boolean,
                            default: !1
                        },
                        includeNav: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    setup: function() {
                        var e = Object(n.reactive)({
                            isAside: !0,
                            width: 360
                        });
                        return Object(n.provide)("sectionData", e), {
                            sectionData: e
                        }
                    },
                    data: function() {
                        return {
                            resizeObserver: void 0
                        }
                    },
                    mounted: function() {
                        this.setUpResizeObserver()
                    },
                    beforeDestroy: function() {
                        this.resizeObserver && this.resizeObserver.disconnect()
                    },
                    methods: {
                        handleResize: function(e) {
                            var t, c = m(e);
                            try {
                                for (c.s(); !(t = c.n()).done;) {
                                    var n = t.value.contentRect.width;
                                    this.sectionData.width !== n && (this.sectionData.width = n, this.sectionData.isAside = n < 720)
                                }
                            } catch (e) {
                                c.e(e)
                            } finally {
                                c.f()
                            }
                        },
                        setUpResizeObserver: function() {
                            this.resizeObserver = new ResizeObserver(this.handleResize);
                            var element = this.$refs.tdsPageSection;
                            element && this.resizeObserver.observe(element)
                        },
                        onMouseEnter: function() {
                            d.a.$emit("section-hover-enter", this.sectionId)
                        },
                        onMouseLeave: function() {
                            d.a.$emit("section-hover-leave", this.sectionId)
                        }
                    }
                }),
                f = Object(l.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c(e.sectionComponentTag, {
                            ref: "tdsPageSection",
                            tag: "component",
                            class: ["tds-page-section", {
                                standalone: !e.mainColumnOnly,
                                "tds-page-section--no-header": !e.includeNav
                            }]
                        }, [c("a", {
                            staticClass: "tds-page-section__anchor",
                            attrs: {
                                id: e.sectionId
                            }
                        }), e._v(" "), c("tmd-card", {
                            staticClass: "tds-page-section__card",
                            attrs: {
                                id: "card-" + e.sectionId,
                                type: "elevated"
                            },
                            nativeOn: {
                                mouseenter: function(t) {
                                    return e.onMouseEnter.apply(null, arguments)
                                },
                                mouseleave: function(t) {
                                    return e.onMouseLeave.apply(null, arguments)
                                }
                            }
                        }, [e.hideHeader ? e._e() : c("header", {
                            staticClass: "tds-page-section__header"
                        }, [c("h2", {
                            staticClass: "tds-page-section__header__title tmd-headline"
                        }, [e._v("\n        " + e._s(e.sectionTitle) + "\n      ")]), e._v(" "), e.$slots.actions ? c("div", {
                            staticClass: "tds-page-section__header__actions"
                        }, [e._t("actions")], 2) : e._e()]), e._v(" "), e.hideHeader ? e._e() : c("tmd-divider"), e._v(" "), c("main", [e._t("default")], 2)], 1)], 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-c50600b6_0", {
                        source: ".tds-page-section[data-v-c50600b6]{display:block;max-width:720px;width:100%;padding:0;align-items:center;justify-content:center}.tds-page-section .tds-page-section__anchor[data-v-c50600b6]{visibility:hidden;display:block;position:relative;top:calc((var(--layout-section-top-offset,0) + 44px + 24px) * -1)}.tds-page-section .tds-page-section__card[data-v-c50600b6]{border-radius:0}.tds-page-section .tds-page-section__header[data-v-c50600b6]{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:0 16px}.tds-page-section .tds-page-section__header__title[data-v-c50600b6]{margin:12px 16px 10px 0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tds-page-section .tds-page-section__header__actions[data-v-c50600b6]{margin-left:16px}@media (min-width:720px){.tds-page-section .tds-page-section__anchor[data-v-c50600b6]{top:calc((var(--layout-section-top-offset,0) + 24px) * -1)}.tds-page-section .tds-page-section__card[data-v-c50600b6]{border-radius:8px}}@media (max-width:400px){.tds-page-section[data-v-c50600b6]{width:100vw}}.tds-page-section--no-header[data-v-c50600b6]{margin:0 0 24px 0;grid-auto-rows:min-content;max-width:1080px}.tds-page-section--no-header[data-v-c50600b6]:nth-child(1){grid-area:m1}@media (min-width:1630px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(1){grid-area:c1!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(2){grid-area:m2}@media (min-width:2014px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(2){grid-area:c2!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(3){grid-area:m3}@media (min-width:2398px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(3){grid-area:c3!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(4){grid-area:m4}@media (min-width:2782px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(4){grid-area:c4!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(5){grid-area:m5}@media (min-width:3166px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(5){grid-area:c5!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(6){grid-area:m6}@media (min-width:3550px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(6){grid-area:c6!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(7){grid-area:m7}@media (min-width:3934px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(7){grid-area:c7!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(8){grid-area:m8}@media (min-width:4318px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(8){grid-area:c8!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(9){grid-area:m9}@media (min-width:4702px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(9){grid-area:c9!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(10){grid-area:m10}@media (min-width:5086px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(10){grid-area:c10!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(11){grid-area:m11}@media (min-width:5470px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(11){grid-area:c11!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(12){grid-area:m12}@media (min-width:5854px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(12){grid-area:c12!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(13){grid-area:m13}@media (min-width:6238px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(13){grid-area:c13!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(14){grid-area:m14}@media (min-width:6622px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(14){grid-area:c14!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(15){grid-area:m15}@media (min-width:7006px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(15){grid-area:c15!important}}.tds-page-section--no-header[data-v-c50600b6]:nth-child(16){grid-area:m16}@media (min-width:7390px){.tds-page-section--no-header.standalone[data-v-c50600b6]:nth-of-type(16){grid-area:c16!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header){margin:0 0 24px 0;grid-auto-rows:min-content}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(2){grid-area:m1}@media (min-width:1492px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(1){grid-area:c1!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(3){grid-area:m2}@media (min-width:1876px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(2){grid-area:c2!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(4){grid-area:m3}@media (min-width:2260px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(3){grid-area:c3!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(5){grid-area:m4}@media (min-width:2644px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(4){grid-area:c4!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(6){grid-area:m5}@media (min-width:3028px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(5){grid-area:c5!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(7){grid-area:m6}@media (min-width:3412px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(6){grid-area:c6!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(8){grid-area:m7}@media (min-width:3796px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(7){grid-area:c7!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(9){grid-area:m8}@media (min-width:4180px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(8){grid-area:c8!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(10){grid-area:m9}@media (min-width:4564px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(9){grid-area:c9!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(11){grid-area:m10}@media (min-width:4948px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(10){grid-area:c10!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(12){grid-area:m11}@media (min-width:5332px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(11){grid-area:c11!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(13){grid-area:m12}@media (min-width:5716px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(12){grid-area:c12!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(14){grid-area:m13}@media (min-width:6100px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(13){grid-area:c13!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(15){grid-area:m14}@media (min-width:6484px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(14){grid-area:c14!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(16){grid-area:m15}@media (min-width:6868px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(15){grid-area:c15!important}}.tds-page-section[data-v-c50600b6]:not(.tds-page-section--no-header):nth-child(17){grid-area:m16}@media (min-width:7252px){.tds-page-section:not(.tds-page-section--no-header).standalone[data-v-c50600b6]:nth-of-type(16){grid-area:c16!important}}",
                        map: void 0,
                        media: void 0
                    })
                }), h, "data-v-c50600b6", !1, undefined, !1, l.a, void 0, void 0)
        },
        992: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return l
            }));
            c(40), c(112);
            var n = c(2),
                r = c(312),
                o = c(179),
                d = n.default.extend({
                    name: "tds-radio-group",
                    components: {
                        MdRadio: r.a
                    },
                    model: {
                        prop: "modelValue",
                        event: "update:modelValue"
                    },
                    props: {
                        options: {
                            type: Array,
                            required: !0
                        },
                        modelValue: {
                            type: String,
                            default: ""
                        }
                    }
                }),
                l = Object(o.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            staticClass: "tds-radio-group"
                        }, e._l(e.options, (function(option, t) {
                            return c("div", {
                                key: t,
                                staticClass: "tds-radio-group__option"
                            }, [c("md-radio", {
                                staticClass: "tds-radio-group__radio",
                                attrs: {
                                    value: e.modelValue,
                                    "md-value": option.value
                                },
                                on: {
                                    change: function(t) {
                                        return e.$emit("update:modelValue", t)
                                    }
                                }
                            }, [c("div", {
                                staticClass: "tds-radio-group__radio-content"
                            }, [c("div", {
                                staticClass: "tmd-body"
                            }, [e._v("\n          " + e._s(option.label) + "\n        ")]), e._v(" "), c("div", {
                                staticClass: "tmd-caption tmc-accent"
                            }, [e._v("\n          " + e._s(option.description) + "\n        ")])])])], 1)
                        })), 0)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-7e31f7ae_0", {
                        source: ".tds-radio-group[data-v-7e31f7ae]{display:flex;flex-direction:column;gap:12px}.tds-radio-group__radio[data-v-7e31f7ae]{margin:0}",
                        map: void 0,
                        media: void 0
                    })
                }), d, "data-v-7e31f7ae", !1, undefined, !1, o.a, void 0, void 0)
        },
        993: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return O
            }));
            var n = c(38),
                r = (c(51), c(88), c(382), c(31), c(75), c(32), c(887)),
                o = c(2),
                d = c(35),
                l = c(27),
                m = c(117),
                v = c(439),
                h = c(133),
                f = c(157),
                _ = c(135),
                y = c(1146),
                x = c(1147),
                w = c(256),
                T = c(91),
                C = c(1309),
                S = c(179),
                k = {
                    en: {
                        "Top referrers attracting candidates": "Top referrers attracting candidates",
                        "Top users that referred candidates that view the job and apply.": "Top users that referred candidates that view the job and apply.",
                        "Job views": "Job views",
                        Applications: "Applications",
                        All: "All",
                        "$company's team members": "{company}'s team members",
                        "No referrers yet.": "No referrers yet.",
                        "Refer someone to this job": "Refer someone to this job",
                        "Last 24 hours": "Last 24 hours",
                        "Last 7 days": "Last 7 days",
                        "Last 30 days": "Last 30 days",
                        "All time": "All time"
                    },
                    es: {
                        "Top referrers attracting candidates": "Referentes top que atraen candidatos",
                        "Top users that referred candidates that view the job and apply.": "Usuarios top que refirieron candidatos que vieron y aplicaron al trabajo.",
                        "Job views": "Vistas del trabajo",
                        Applications: "Aplicaciones",
                        All: "Todos",
                        "$company's team members": "Miembros del equipo de {company}",
                        "No referrers yet.": "No hay referentes aún.",
                        "Refer someone to this job": "Refiere a alguien a este trabajo",
                        "Last 24 hours": "Últimas 24 horas",
                        "Last 7 days": "Últimos 7 días",
                        "Last 30 days": "Últimos 30 días",
                        "All time": "Desde el inicio"
                    }
                },
                A = o.default.extend({
                    name: "referrer-item",
                    components: {
                        MdButton: d.a,
                        MdIcon: l.a,
                        MdTooltip: m.a,
                        TdlEntityRender: v.a
                    },
                    mixins: [h.a],
                    i18n: {
                        messages: k
                    },
                    props: {
                        referrer: {
                            type: Object,
                            required: !0
                        },
                        maxCount: {
                            type: Number,
                            default: 1
                        },
                        baseUrl: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        progressPercentageApplications: function() {
                            var e = Math.round(100 * this.referrer.applications / this.maxCount);
                            return e < 1 ? 1 : e
                        },
                        progressPercentageViews: function() {
                            var e = Math.round(100 * this.referrer.views / this.maxCount);
                            return e < 1 ? 1 : e
                        }
                    }
                }),
                I = Object(S.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            staticClass: "referrer-item"
                        }, [c("div", {
                            staticClass: "referrer-item__header"
                        }, [c("tdl-entity-render", {
                            attrs: {
                                entity: e.referrer.person,
                                "image-border-width": 2,
                                "image-size": 26,
                                shape: "hexagon",
                                hide: ["weight"],
                                href: e.referrer.person && e.referrer.person.publicId ? e.baseUrl + "/" + e.referrer.person.publicId : ""
                            }
                        })], 1), e._v(" "), c("div", {
                            staticClass: "referrer-item__data"
                        }, [c("div", {
                            staticClass: "referrer-item__row"
                        }, [c("div", {
                            staticClass: "referrer-item__progress-bar referrer-item__progress-bar--views",
                            style: {
                                width: e.progressPercentageViews + "%"
                            }
                        }), e._v(" "), e.progressPercentageViews > 0 ? c("span", [e._v(" " + e._s(e.referrer.views) + " ")]) : e._e()]), e._v(" "), c("div", {
                            staticClass: "referrer-item__row"
                        }, [c("div", {
                            staticClass: "referrer-item__progress-bar referrer-item__progress-bar--applications",
                            style: {
                                width: e.progressPercentageApplications + "%"
                            }
                        }), e._v(" "), e.progressPercentageApplications > 0 ? c("span", [e._v(" " + e._s(e.referrer.applications) + " ")]) : e._e()])])])
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-ac811148_0", {
                        source: ".referrer-item[data-v-ac811148]{display:grid;grid-template-columns:minmax(0,1fr) 1fr;justify-content:space-between;align-items:center;margin:4px 0}.referrer-item__logo[data-v-ac811148]{margin-right:8px;margin-left:0}.referrer-item__image[data-v-ac811148]{height:24px;max-height:24px;max-width:145px;margin-right:8px}.referrer-item__header[data-v-ac811148]{font-size:12px;display:flex;justify-content:flex-start;align-items:center;margin-right:8px}.referrer-item__name[data-v-ac811148]{display:flex;flex-wrap:wrap}.referrer-item__name a[data-v-ac811148],.referrer-item__name span[data-v-ac811148]{white-space:nowrap}.referrer-item__data[data-v-ac811148]{display:flex;flex-direction:column}.referrer-item__row[data-v-ac811148]{display:flex;align-items:center}.referrer-item__progress-bar[data-v-ac811148]{min-height:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;overflow:hidden;white-space:nowrap;text-overflow:clip;margin:4px 8px 4px 0}",
                        map: void 0,
                        media: void 0
                    })
                }), A, "data-v-ac811148", !1, undefined, !1, S.a, void 0, void 0),
                $ = o.default.extend({
                    name: "tds-referrers",
                    components: {
                        ReferrerItem: I,
                        MdButton: d.a,
                        MdChip: f.a,
                        MdInputContainer: _.a,
                        MdOption: y.a,
                        MdSelect: x.a,
                        MdSpinner: w.a,
                        TmdIcon: T.a,
                        TmdTooltip: C.a
                    },
                    i18n: {
                        messages: k
                    },
                    props: {
                        referrers: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        baseUrl: {
                            type: String,
                            required: !0
                        },
                        selectedTime: {
                            type: String,
                            default: "allTime"
                        },
                        loading: {
                            type: Boolean,
                            default: !1
                        },
                        companyName: {
                            type: String,
                            required: !1
                        },
                        showTimeframeFilter: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: function() {
                        return {
                            mdiCheck: r.a,
                            onlyTeamMembers: !1,
                            selectedTimeOption: this.selectedTime
                        }
                    },
                    computed: {
                        sortedReferrers: function() {
                            return Object(n.a)(this.filteredReferrers).sort((function(e, t) {
                                var c = t.applications - e.applications;
                                return 0 !== c ? c : t.views - e.views
                            })).slice(0, 10)
                        },
                        filteredReferrers: function() {
                            var e = this;
                            return this.referrers.filter((function(e) {
                                return e.views > 0
                            })).filter((function(t) {
                                return !e.onlyTeamMembers || t.isTeamMember
                            }))
                        },
                        maxCount: function() {
                            if (0 === this.referrers.length) return 0;
                            var e = Math.max.apply(Math, Object(n.a)(this.referrers.map((function(e) {
                                    return e.views
                                })))),
                                t = Math.max.apply(Math, Object(n.a)(this.referrers.map((function(e) {
                                    return e.applications
                                }))));
                            return Math.max(e, t)
                        },
                        timeOptions: function() {
                            return [{
                                name: "Last 24 hours",
                                value: "24hours"
                            }, {
                                name: "Last 7 days",
                                value: "7days"
                            }, {
                                name: "Last 30 days",
                                value: "30days"
                            }, {
                                name: "All time",
                                value: "allTime"
                            }]
                        },
                        teamMemberReferrersCount: function() {
                            return 0 === this.referrers.length ? 0 : this.referrers.filter((function(e) {
                                return e.views > 0
                            })).filter((function(e) {
                                return e.isTeamMember
                            })).length
                        },
                        shouldShowTimeFilter: function() {
                            return !!this.showTimeframeFilter && ("allTime" !== this.selectedTimeOption || this.maxCount > 0)
                        }
                    },
                    watch: {
                        selectedTimeOption: function() {
                            this.$emit("time-selected", this.selectedTimeOption)
                        }
                    },
                    methods: {
                        referJob: function() {
                            this.$emit("refer-job")
                        }
                    }
                }),
                O = Object(S.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            staticClass: "tds-referrers"
                        }, [c("div", {
                            staticClass: "tds-referrers__header"
                        }, [c("h3", {
                            staticClass: "tds-referrers__header-title tmd-color-text"
                        }, [e._v("\n      " + e._s(e.$t("Top referrers attracting candidates")) + "\n\n      "), c("div", {
                            staticClass: "tds-referrers__header-icon tmd-color-theme"
                        }, [c("tmd-icon", {
                            attrs: {
                                fill: ""
                            }
                        }, [e._v("info")]), e._v(" "), c("tmd-tooltip", {
                            attrs: {
                                "display-on-mobile": ""
                            }
                        }, [e._v("\n          " + e._s(e.$t("Top users that referred candidates that view the job and apply.")) + "\n        ")])], 1)])]), e._v(" "), e.companyName && e.teamMemberReferrersCount > 0 && !e.loading ? c("div", {
                            staticClass: "tds-referrers__selector-group"
                        }, [c("md-chip", {
                            class: ["tds-referrers__selector", {
                                "tds-referrers__selector--active": !e.onlyTeamMembers
                            }],
                            attrs: {
                                "md-editable": "",
                                "new-styles": !0,
                                "left-icon": e.onlyTeamMembers ? "" : e.mdiCheck,
                                "left-icon-size": "20px"
                            },
                            nativeOn: {
                                click: function(t) {
                                    e.onlyTeamMembers = !1
                                }
                            }
                        }, [c("span", {
                            class: ["tds-referrers__selector-name", {
                                "tds-referrers__selector-name--active": !e.onlyTeamMembers
                            }]
                        }, [e._v("\n        " + e._s(e.$t("All")) + "\n      ")])]), e._v(" "), c("md-chip", {
                            class: ["tds-referrers__selector", {
                                "tds-referrers__selector--active": e.onlyTeamMembers
                            }],
                            attrs: {
                                "md-editable": "",
                                "new-styles": !0,
                                "left-icon": e.onlyTeamMembers ? e.mdiCheck : "",
                                "left-icon-size": "20px"
                            },
                            nativeOn: {
                                click: function(t) {
                                    e.onlyTeamMembers = !0
                                }
                            }
                        }, [c("span", {
                            class: ["tds-referrers__selector-name", {
                                "tds-referrers__selector-name--active": e.onlyTeamMembers
                            }]
                        }, [e._v("\n        " + e._s(e.$t("$company's team members", {
                            company: e.companyName
                        })) + "\n      ")])])], 1) : e._e(), e._v(" "), e.shouldShowTimeFilter ? c("md-input-container", {
                            staticClass: "tds-referrers__dropdown"
                        }, [c("md-select", {
                            attrs: {
                                disabled: e.loading,
                                name: "time"
                            },
                            model: {
                                value: e.selectedTimeOption,
                                callback: function(t) {
                                    e.selectedTimeOption = t
                                },
                                expression: "selectedTimeOption"
                            }
                        }, e._l(e.timeOptions, (function(option) {
                            return c("md-option", {
                                key: option.value,
                                staticClass: "tds-channel__option",
                                attrs: {
                                    value: option.value
                                }
                            }, [e._v("\n        " + e._s(e.$t(option.name)) + "\n      ")])
                        })), 1)], 1) : e._e(), e._v(" "), e.sortedReferrers.length > 0 ? c("div", {
                            staticClass: "tds-referrers__legend"
                        }, [c("span", {
                            staticClass: "tds-referrers__legend--views"
                        }, [c("span", {
                            staticClass: "ball"
                        }, [e._v("●")]), e._v(" " + e._s(e.$t("Job views")))]), e._v(" "), c("span", {
                            staticClass: "tds-referrers__legend--applications"
                        }, [c("span", {
                            staticClass: "ball"
                        }, [e._v("●")]), e._v(" " + e._s(e.$t("Applications")))])]) : e._e(), e._v(" "), e.sortedReferrers.length > 0 && !e.loading ? c("div", {
                            staticClass: "tds-referrers__content"
                        }, e._l(e.sortedReferrers, (function(t) {
                            return c("referrer-item", {
                                key: t.person.id,
                                attrs: {
                                    "base-url": e.baseUrl,
                                    referrer: t,
                                    "max-count": e.maxCount
                                }
                            })
                        })), 1) : e.loading ? c("div", [c("span", {
                            staticClass: "tds-referrers__spinner"
                        }, [c("md-spinner", {
                            attrs: {
                                "md-indeterminate": "",
                                "md-size": 40
                            }
                        })], 1)]) : c("div", [c("span", {
                            staticClass: "tds-referrers__empty-text"
                        }, [e._v("\n      " + e._s(e.$t("No referrers yet.")) + "\n    ")])])], 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-b440a3fc_0", {
                        source: ".tds-referrers__header[data-v-b440a3fc]{display:flex;justify-content:flex-start}.tds-referrers__header-icon[data-v-b440a3fc],.tds-referrers__header-title[data-v-b440a3fc]{margin:0;display:inline-block;line-height:24px}.tds-referrers__selector-group[data-v-b440a3fc]{display:flex;justify-content:center;gap:16px;margin-bottom:16px}.tds-referrers__selector.md-chip-new.md-editable[data-v-b440a3fc]{margin:0}.tds-referrers__content[data-v-b440a3fc]{display:flex;flex-direction:column;align-items:center}.tds-referrers__content .referrer-item[data-v-b440a3fc]{width:clamp(328px,100%,434px)}.tds-referrers__selector-name[data-v-b440a3fc]{padding:6px 12px;word-break:normal}.tds-referrers__selector-name--active[data-v-b440a3fc]{padding-left:0}.tds-referrers__dropdown[data-v-b440a3fc]{margin-top:0;margin-bottom:16px;max-width:190px}.tds-referrers__legend[data-v-b440a3fc]{display:flex;margin-bottom:12px}.tds-referrers__legend--applications[data-v-b440a3fc]{display:flex;align-items:center}.tds-referrers__legend--views[data-v-b440a3fc]{margin-right:16px;display:flex;align-items:center}.tds-referrers__legend .ball[data-v-b440a3fc]{font-size:25px;display:inline-block;padding-bottom:4px;margin-right:12px}.tds-referrers__empty-cta[data-v-b440a3fc]{display:block;margin-left:auto;margin-right:auto}.tds-referrers__spinner[data-v-b440a3fc]{display:flex;justify-content:center}.tmd-color-text[data-v-b440a3fc]{margin-bottom:16px}",
                        map: void 0,
                        media: void 0
                    })
                }), $, "data-v-b440a3fc", !1, undefined, !1, S.a, void 0, void 0)
        },
        994: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return v
            }));
            c(40), c(112);
            var n = c(2),
                r = c(35),
                o = c(781),
                d = c(133),
                l = c(179),
                m = n.default.extend({
                    name: "tds-onboarding-slide",
                    components: {
                        MdButton: r.a,
                        TmdCard: o.a
                    },
                    mixins: [d.a],
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        description: {
                            type: String,
                            required: !1
                        },
                        descriptionHighlighted: {
                            type: Boolean,
                            default: !1
                        },
                        callToAction: {
                            type: String,
                            required: !1
                        },
                        actionButtonText: {
                            type: String,
                            required: !0
                        },
                        actionButtonDisabled: {
                            type: Boolean,
                            default: !1
                        },
                        imageSource: {
                            type: Object,
                            required: !0
                        },
                        reverse: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    methods: {
                        handleActionButton: function() {
                            this.$emit("slide-next-action-clicked")
                        }
                    }
                }),
                v = Object(l.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("tmd-card", {
                            class: ["tds-onboarding-slide", e.$mdActiveTheme, {
                                "tds-onboarding-slide--reverse": e.reverse
                            }],
                            attrs: {
                                "md-elevation": "1"
                            }
                        }, [c("div", {
                            staticClass: "tds-onboarding-slide__image-container"
                        }, [c("img", {
                            staticClass: "tds-onboarding-slide__image md-image",
                            attrs: {
                                src: e.imageSource.url,
                                alt: e.imageSource.alt
                            }
                        }), e._v(" "), c("div", {
                            class: ["tds-onboarding-slide__image-fade", {
                                "tds-onboarding-slide__image-fade--reverse": e.reverse
                            }]
                        })]), e._v(" "), c("section", {
                            class: ["tds-onboarding-slide__content", {
                                "tds-onboarding-slide__content--reverse": e.reverse
                            }]
                        }, [c("p", {
                            staticClass: "tds-onboarding-slide__title"
                        }, [e._v("\n      " + e._s(e.title) + "\n    ")]), e._v(" "), e.description ? c("tmd-card", {
                            class: ["tds-onboarding-slide__text", {
                                "tds-onboarding-slide__text--highlight": e.descriptionHighlighted
                            }],
                            attrs: {
                                "md-elevation": e.descriptionHighlighted ? "2" : "1"
                            }
                        }, [e._v("\n      " + e._s(e.description) + "\n    ")]) : e._e(), e._v(" "), e.callToAction ? c("p", {
                            staticClass: "tds-onboarding-slide__text tds-onboarding-slide__call-to-action"
                        }, [e._v("\n      " + e._s(e.callToAction) + "\n    ")]) : e._e(), e._v(" "), c("md-button", {
                            staticClass: "md-primary md-raised tds-onboarding-slide__button",
                            attrs: {
                                "border-style": "thicker",
                                disabled: e.actionButtonDisabled
                            },
                            on: {
                                click: e.handleActionButton
                            }
                        }, [e._v("\n      " + e._s(e.actionButtonText) + "\n    ")]), e._v(" "), e._t("extra")], 2)])
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-5241ca4a_0", {
                        source: ".tds-onboarding-slide[data-v-5241ca4a]{display:flex;flex-direction:row;justify-content:space-between;height:auto;width:100%;max-width:1440px;align-items:center}.tds-onboarding-slide--reverse[data-v-5241ca4a]{flex-direction:row-reverse}@media (max-width:720px){.tds-onboarding-slide[data-v-5241ca4a]{display:flex;flex-direction:column;align-items:center}}@media (max-width:720px) and (max-width:360px){.tds-onboarding-slide[data-v-5241ca4a]{width:100%;height:auto}}.tds-onboarding-slide__image-container[data-v-5241ca4a]{position:relative;width:50%;display:grid;flex-direction:column;justify-content:center;align-items:center;z-index:1;object-fit:cover}@media (max-width:720px){.tds-onboarding-slide__image-container[data-v-5241ca4a]{width:auto;height:50%}}.tds-onboarding-slide__image-container img[data-v-5241ca4a]{width:720px;height:631px;object-fit:cover;object-position:center}@media (max-width:720px){.tds-onboarding-slide__image-container img[data-v-5241ca4a]{width:100%;height:100%;max-width:640px}}.tds-onboarding-slide__image-fade[data-v-5241ca4a]{position:absolute;top:0;right:-1px;width:10%;height:100%;z-index:4;pointer-events:none;background:linear-gradient(to right,rgba(39,41,45,0) 23.12%,#27292d 96.77%)}.tds-onboarding-slide__image-fade--reverse[data-v-5241ca4a]{background:linear-gradient(to left,rgba(39,41,45,0) 23.12%,#27292d 96.77%);right:unset;left:-1px}@media (max-width:720px){.tds-onboarding-slide__image-fade[data-v-5241ca4a]{width:100%;height:10%;bottom:0;top:unset;right:unset;background:linear-gradient(to bottom,rgba(39,41,45,0) 23.12%,#27292d 96.77%)}}.tds-onboarding-slide__content[data-v-5241ca4a]{padding:24px 0 24px 24px;width:50%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;z-index:2;object-fit:cover}.tds-onboarding-slide__content--reverse[data-v-5241ca4a]{align-items:flex-end}@media (max-width:720px){.tds-onboarding-slide__content[data-v-5241ca4a]{width:100%;height:100%;padding:32px 0;align-items:center}}.tds-onboarding-slide__title[data-v-5241ca4a]{font-size:24px;font-style:normal;font-weight:400;line-height:32px;margin:16px 8px}@media (max-width:720px){.tds-onboarding-slide__title[data-v-5241ca4a]{text-align:center;margin:16px}}.tds-onboarding-slide__text[data-v-5241ca4a]{font-size:16px;line-height:20px;margin:16px 8px}.tds-onboarding-slide__text--highlight.tmd-card[data-v-5241ca4a]{margin:16px 0 16px 8px;padding:12px;border-radius:8px 0 0 8px;width:calc(100% - 8px)}@media (max-width:720px){.tds-onboarding-slide__text--highlight.tmd-card[data-v-5241ca4a]{margin:0;border-radius:0;width:100%}}@media (max-width:720px){.tds-onboarding-slide__text[data-v-5241ca4a]{text-align:center;font-size:14px}}.tds-onboarding-slide button[data-v-5241ca4a]{margin:16px 8px 8px}",
                        map: void 0,
                        media: void 0
                    })
                }), m, "data-v-5241ca4a", !1, undefined, !1, l.a, void 0, void 0)
        },
        995: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return x
            }));
            var n = c(13),
                r = (c(52), c(83), c(289), c(28), c(75), c(88), c(832), c(31), c(200), c(120), c(45), c(37), c(857)),
                o = c(2),
                d = c(856),
                l = c(1217),
                m = c(889),
                v = c(179);
            var h, f = {
                identifyIfContainUrl: function(text) {
                    var e = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gm;
                    return text && e.test(text) ? function(text, e) {
                        return text.replace(e, (function(e) {
                            return e.startsWith("http") ? '<a href="'.concat(e, '" target="_blank">').concat(e, "</a>") : '<a href="https://'.concat(e, '" target="_blank">').concat(e, "</a>")
                        }))
                    }(text, e) : text
                }
            };
            ! function(e) {
                e.FIXED = "fixed", e.RANGE = "range", e.UNPAID = "unpaid", e.GET_QUOTES = "get-quotes", e.TO_BE_AGREED = "to-be-agreed"
            }(h || (h = {}));
            var _ = function e(data) {
                    var t;
                    Object(n.a)(this, e), Object(m.a)(this, "code", void 0), Object(m.a)(this, "currency", void 0), Object(m.a)(this, "minAmount", void 0), Object(m.a)(this, "maxAmount", void 0), Object(m.a)(this, "minAmountUSD", void 0), Object(m.a)(this, "periodicity", void 0), Object(m.a)(this, "visible", void 0), Object(m.a)(this, "estimate", void 0), Object(m.a)(this, "negotiable", void 0);
                    var c = data.minAmount ? data.maxAmount ? h.RANGE : h.FIXED : h.UNPAID;
                    this.code = null !== (t = data.code) && void 0 !== t ? t : c, this.currency = data.currency, this.minAmount = data.minAmount, this.maxAmount = data.maxAmount, this.minAmountUSD = data.minAmountUSD, this.periodicity = data.periodicity, this.visible = data.visible, this.estimate = data.estimate, this.negotiable = data.negotiable
                },
                script = o.default.extend({
                    name: "tds-screening-questions",
                    i18n: {
                        messages: {
                            en: {
                                "Loading ...": "Loading ...",
                                "No questions.": "No questions.",
                                "No answer has been provided yet.": "No answer has been provided yet.",
                                "Error.": "Error.",
                                "Compensation expectations": "Compensation expectations",
                                "Applicant's answer:": "Applicant's answer:",
                                "Listen to the audio and provide an answer": "Listen to the audio and provide an answer",
                                "Your browser does not support HTML5 video tags": "Your browser does not support HTML5 video tags"
                            },
                            es: {
                                "Loading ...": "Cargando ...",
                                "No questions.": "Sin preguntas.",
                                "No answer has been provided yet.": "Aún no se han enviado respuestas.",
                                "Error.": "Error.",
                                "Compensation expectations": "Expectativas de compensación",
                                "Applicant's answer:": "Respuesta del aplicante:",
                                "Listen to the audio and provide an answer": "Escucha el audio y proporciona una respuesta",
                                "Your browser does not support HTML5 video tags": "Tu navegador no admite etiquetas de video HTML5"
                            }
                        }
                    },
                    components: {
                        TdlCurrency: l.a,
                        TdsAudioPlayer: d.a
                    },
                    props: {
                        candidateStatus: {
                            type: function e(data) {
                                Object(n.a)(this, e), Object(m.a)(this, "id", void 0), Object(m.a)(this, "interested", void 0), Object(m.a)(this, "compensation", void 0), Object(m.a)(this, "status", void 0), this.id = data.id, this.interested = data.interested, this.compensation = data.compensation ? new _(data.compensation) : void 0, this.status = data.status
                            },
                            required: !1
                        },
                        questions: {
                            type: Array,
                            required: !0
                        },
                        answers: {
                            type: Array,
                            required: !0
                        },
                        cloudName: {
                            type: String,
                            required: !0
                        },
                        locale: {
                            type: String,
                            default: "en-US",
                            required: !1
                        }
                    },
                    data: function() {
                        return {
                            periodicityText: {
                                yearly: this.$t("yearly"),
                                hourly: this.$t("hourly"),
                                daily: this.$t("daily"),
                                weekly: this.$t("weekly"),
                                monthly: this.$t("monthly"),
                                project: this.$t("for the project"),
                                word: this.$t("per word")
                            },
                            activeVelocityRate: 1,
                            velocityRates: [1, 1.5, 2.5]
                        }
                    },
                    computed: {
                        allQuestionsAndAnswers: function() {
                            var e = this;
                            return this.questions.map((function(t) {
                                return {
                                    question: t,
                                    answer: e.getCandidateAnswer(t.id, t.type),
                                    path: e.getVideoResponsePath(t.id, t.type)
                                }
                            }))
                        },
                        getVideoElement: function() {
                            return this.$refs.player
                        },
                        compensationHasConversion: function() {
                            var e;
                            return "USD" !== this.currencyText && !(null === (e = this.candidateStatus) || void 0 === e || null === (e = e.compensation) || void 0 === e || !e.minAmountUSD)
                        },
                        currencyText: function() {
                            var e, t;
                            return null !== (e = this.candidateStatus) && void 0 !== e && null !== (e = e.compensation) && void 0 !== e && e.currency ? null === (t = this.candidateStatus) || void 0 === t || null === (t = t.compensation) || void 0 === t ? void 0 : t.currency.slice(0, 3) : ""
                        },
                        minUSDAmount: function() {
                            var e, t;
                            return null !== (e = this.candidateStatus) && void 0 !== e && null !== (e = e.compensation) && void 0 !== e && e.minAmountUSD ? null === (t = this.candidateStatus) || void 0 === t || null === (t = t.compensation) || void 0 === t ? void 0 : t.minAmountUSD.toFixed(2) : ""
                        }
                    },
                    methods: {
                        getCandidateAnswer: function(e, t) {
                            var c, n, r = this.answers.filter((function(t) {
                                    return t.questionId === e
                                })),
                                o = !(null == r || !r.length);
                            if ("open-written" === t && o && null !== (c = r[0]) && void 0 !== c && c.answer) return {
                                text: f.identifyIfContainUrl(r[0].answer),
                                status: "answered",
                                contentType: r[0].contentType
                            };
                            if ("multiple-choice" !== t && "yes-no" !== t || !o) {
                                if ("checkboxes" === t) {
                                    var d = this.questions.find((function(t) {
                                            return t.id === e
                                        })),
                                        l = null == d ? void 0 : d.options.filter((function(option) {
                                            return r.some((function(e) {
                                                return e.questionOptionId === option.id
                                            }))
                                        }));
                                    return {
                                        text: null != l && l.length ? l.map((function(option) {
                                            return "<li>".concat(option.title, "</li>")
                                        })).join("") : this.$t("No answer has been provided yet."),
                                        status: null != l && l.length ? "answered" : "empty",
                                        contentType: o ? r[0].contentType : "none"
                                    }
                                }
                                return ["open-video", "open-audio", "open-recording"].includes(t) && o && null !== (n = r[0]) && void 0 !== n && n.path ? {
                                    path: r[0].path,
                                    contentType: r[0].contentType
                                } : {
                                    text: this.$t("No answer has been provided yet."),
                                    status: "empty",
                                    contentType: "none"
                                }
                            }
                            var m = this.questions.find((function(t) {
                                    return t.id === e
                                })),
                                v = null == m ? void 0 : m.options.find((function(option) {
                                    return option.id === r[0].questionOptionId
                                }));
                            return {
                                text: v && v.title || this.$t("No answer has been provided yet."),
                                status: v && v.title ? "answered" : "empty",
                                contentType: o ? r[0].contentType : "none"
                            }
                        },
                        getVideoResponsePath: function(e, t) {
                            var c, n = this.answers.filter((function(t) {
                                return t.questionId === e
                            }));
                            return ("open-video" === t || "open-recording" === t) && null != n && n.length && null !== (c = n[0]) && void 0 !== c && c.path ? n[0].path : void 0
                        },
                        toggleVideoVelocityRate: function() {
                            var e = this,
                                t = this.getVideoElement,
                                c = this.velocityRates.indexOf(this.activeVelocityRate) + 1;
                            if (c < this.velocityRates.length ? this.activeVelocityRate = this.velocityRates[c] : this.activeVelocityRate = 1, t) {
                                var n = function(video) {
                                    video instanceof HTMLVideoElement && (video.playbackRate = e.activeVelocityRate)
                                };
                                t instanceof HTMLVideoElement ? n(t) : Array.isArray(t) && t.forEach(n)
                            }
                        },
                        videoPathBase: function() {
                            return Object(r.a)() ? "https://res.cloudinary.com/".concat(this.cloudName, "/video/upload") : "https://res.cloudinary.com/".concat(this.cloudName, "/video/upload/c_limit,h_400,q_100")
                        },
                        getCloudinaryPublicId: function(e) {
                            if (e) {
                                var t = e.substring(e.indexOf("screening-questions"));
                                return "".concat("origin", "/").concat(t.substr(0, t.length - 4))
                            }
                            return ""
                        }
                    }
                }),
                y = script,
                x = Object(v.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            staticClass: "tds-screening-questions"
                        }, [e.answers ? e._e() : c("div", [e._v("\n    " + e._s(e.$t("No answer has been provided yet.")) + "\n  ")]), e._v(" "), e.candidateStatus && e.candidateStatus.compensation ? c("div", {
                            staticClass: "tds-screening-questions__compensation"
                        }, [c("div", {
                            staticClass: "tds-screening-questions__compensation-title"
                        }, [e._v("\n      " + e._s(e.$t("Compensation expectations")) + "\n    ")]), e._v(" "), c("tdl-currency", {
                            attrs: {
                                view: "large",
                                locale: e.locale,
                                symbol: e.currencyText,
                                value: e.candidateStatus.compensation.minAmount,
                                periodicity: e.periodicityText[e.candidateStatus.compensation.periodicity]
                            }
                        }), e._v(" "), e.compensationHasConversion ? c("div", [c("tdl-currency", {
                            attrs: {
                                view: "large",
                                locale: e.locale,
                                symbol: "~USD",
                                value: e.minUSDAmount,
                                periodicity: e.periodicityText[e.candidateStatus.compensation.periodicity],
                                "is-conversion": ""
                            }
                        })], 1) : e._e()], 1) : e._e(), e._v(" "), e.questions.length > 0 && e.answers ? c("div", {
                            staticClass: "tds-screening-questions__answers"
                        }, e._l(e.allQuestionsAndAnswers, (function(t) {
                            return c("div", {
                                key: t.question.id,
                                staticClass: "tds-screening-questions__answers--question"
                            }, [t.question.active || "empty" !== t.answer.status ? c("div", ["record-audio" !== t.question.format ? c("div", {
                                staticClass: "tds-screening-questions__answers--question-title tmc-accent"
                            }, [e._v("\n          " + e._s(t.question.title) + "\n          "), t.question.active ? e._e() : c("span", [e._v(" "), c("small", [e._v("[" + e._s(e.$t("Deleted question")) + "]")])])]) : t.question.path ? c("div", [c("div", {
                                staticClass: "tds-screening-questions__answers--question-title tmc-accent"
                            }, [e._v("\n            " + e._s(e.$t("Listen to the audio and provide an answer:")) + "\n          ")]), e._v(" "), c("tds-audio-player", {
                                staticClass: "audio-player",
                                attrs: {
                                    "audio-url": t.question.path
                                }
                            })], 1) : e._e(), e._v(" "), c("div", {
                                staticClass: "question-answer"
                            }, ["audio" === t.answer.contentType && t.answer.path ? c("div", {
                                staticClass: "question-answer__audio"
                            }, [c("div", [e._v("\n              " + e._s(e.$t("Applicant's answer:")) + "\n            ")]), e._v(" "), c("tds-audio-player", {
                                staticClass: "audio-player",
                                attrs: {
                                    "audio-url": t.answer.path
                                }
                            })], 1) : "video" === t.answer.contentType && t.path ? c("div", {
                                staticClass: "question-answer__video"
                            }, [c("div", [e._v("\n              " + e._s(e.$t("Applicant's answer:")) + "\n            ")]), e._v(" "), c("video", {
                                ref: "player",
                                refInFor: !0,
                                staticClass: "video-player",
                                attrs: {
                                    controls: "",
                                    playsinline: ""
                                }
                            }, [c("source", {
                                attrs: {
                                    src: t.path,
                                    type: "video/mp4"
                                }
                            }), e._v(" "), c("source", {
                                attrs: {
                                    src: e.videoPathBase + "/" + e.getCloudinaryPublicId(t.path) + ".webm",
                                    type: "video/webm"
                                }
                            }), e._v(" "), c("source", {
                                attrs: {
                                    src: e.videoPathBase + "/" + e.getCloudinaryPublicId(t.path) + ".ogv",
                                    type: "video/ogg"
                                }
                            }), e._v("\n              " + e._s(e.$t("Your browser does not support HTML5 video tags")) + "\n            ")]), e._v(" "), c("div", {
                                staticClass: "question-answer__video--velocity-rate",
                                on: {
                                    click: e.toggleVideoVelocityRate
                                }
                            }, [e._v("\n              " + e._s(e.activeVelocityRate) + "x\n            ")])]) : "checkboxes" === t.question.type ? c("div", {
                                staticClass: "question-answer__checkboxes"
                            }, [c("ul", {
                                class: {
                                    "empty-list": "empty" === t.answer.status
                                },
                                domProps: {
                                    innerHTML: e._s(t.answer.text)
                                }
                            })]) : c("div", [c("span", {
                                domProps: {
                                    innerHTML: e._s(t.answer.text)
                                }
                            })])])]) : e._e()])
                        })), 0) : e._e(), e._v(" "), 0 === e.questions.length && e.candidateStatus && void 0 === e.candidateStatus.compensation ? c("div", [e._v("\n    " + e._s(e.$t("No questions.")) + "\n  ")]) : e._e()])
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-4832688b_0", {
                        source: ".tds-screening-questions__compensation[data-v-4832688b]{margin-bottom:16px}.tds-screening-questions__compensation-title[data-v-4832688b]{margin-bottom:8px}.tds-screening-questions__answers--question[data-v-4832688b]{margin-bottom:24px}.tds-screening-questions__answers--question-title[data-v-4832688b]{margin-bottom:8px}.tds-screening-questions__answers .audio-player[data-v-4832688b]{margin-top:8px;margin-bottom:8px}.tds-screening-questions__answers .video-player[data-v-4832688b]{margin-top:8px}.tds-screening-questions__answers .question-answer__video[data-v-4832688b]{margin-right:16px;position:relative}.tds-screening-questions__answers .question-answer__video video[data-v-4832688b]{max-width:100%;max-height:400px}.tds-screening-questions__answers .question-answer__video video:hover+.question-answer__video--velocity-rate[data-v-4832688b]{opacity:1}.tds-screening-questions__answers .question-answer__video--velocity-rate[data-v-4832688b]{position:absolute;top:32px;left:8px;width:32px;height:32px;opacity:0;transition:opacity .3s ease;cursor:pointer;border-radius:50%;font-weight:600;font-size:12px;line-height:32px;text-align:center}.tds-screening-questions__answers .question-answer__video--velocity-rate[data-v-4832688b]:hover{opacity:1}.tds-screening-questions__answers .question-answer__checkboxes ul[data-v-4832688b]{margin:0;padding:0 16px}.tds-screening-questions__answers .question-answer__checkboxes ul.empty-list[data-v-4832688b]{padding:0}",
                        map: void 0,
                        media: void 0
                    })
                }), y, "data-v-4832688b", !1, undefined, !1, v.a, void 0, void 0)
        },
        996: function(e, t, c) {
            "use strict";
            c.d(t, "a", (function() {
                return f
            }));
            var n = c(2),
                r = c(91),
                o = c(133),
                d = c(337),
                l = c(179),
                m = n.default.extend({
                    name: "navigation-tab-item",
                    components: {
                        TdsProductLogo: d.a,
                        TmdIcon: r.a
                    },
                    props: {
                        tab: {
                            type: Object,
                            required: !0
                        },
                        tabInView: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        active: function() {
                            return this.tabInView === this.tab.id || this.tab.active
                        }
                    },
                    methods: {
                        onTabClick: function(e) {
                            this.$emit("tab-item-click", e)
                        }
                    }
                }),
                v = Object(l.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("div", {
                            staticClass: "tds-navigation-tab-item",
                            on: {
                                click: function(t) {
                                    return e.onTabClick(t)
                                }
                            }
                        }, [c("tmd-icon", {
                            class: [{
                                "tmc-theme": e.active,
                                "tmc-accent": !e.active
                            }],
                            attrs: {
                                size: "20px",
                                fill: ""
                            }
                        }, [e._v("\n    " + e._s(e.tab.icon) + "\n  ")]), e._v(" "), c("span", {
                            class: ["tab-title", {
                                "tmc-theme": e.active,
                                "tmc-accent": !e.active,
                                "tds-navigation-tab-item__product-logo": e.tab.productLogo
                            }]
                        }, [e.tab.productLogo ? c("tds-product-logo", {
                            staticClass: "tds-navigation-tab-item__product-logo-svg",
                            attrs: {
                                product: e.tab.productLogo,
                                height: "9px",
                                "height-mobile": "9px"
                            }
                        }) : [e._v("\n      " + e._s(e.tab.title) + "\n    ")]], 2)], 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-440634e7_0", {
                        source: ".tmd-input[data-v-440634e7],.tmd-textarea[data-v-440634e7]{font-size:16px;line-height:32px}.tmd-button[data-v-440634e7]{font-size:14px;font-weight:600;letter-spacing:.01em;line-height:20px;text-transform:uppercase;font-family:inherit}.tmd-caption[data-v-440634e7],small[data-v-440634e7]{font-size:12px;font-weight:400;letter-spacing:.02em;line-height:16px}.tmd-body[data-v-440634e7]{font-size:14px;font-weight:400;letter-spacing:.018em;line-height:20px}.tmd-headline[data-v-440634e7],h1[data-v-440634e7],h2[data-v-440634e7]{font-size:20px;font-weight:600;letter-spacing:.005em;line-height:28px}a[data-v-440634e7]:not(.tmd-button):not(.md-button){text-decoration:none;cursor:pointer}a[data-v-440634e7]:not(.tmd-button):not(.md-button):hover{text-decoration:underline}button[data-v-440634e7]:focus{outline:0}.tds-navigation-tab-item[data-v-440634e7]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:16px 8px;gap:4px;opacity:1;cursor:pointer}@media (max-width:720px){.tds-navigation-tab-item[data-v-440634e7]{width:-moz-available;width:-webkit-fill-available;width:fill-available;height:60px;padding:12px}}.tds-navigation-tab-item.active[data-v-440634e7]{color:inherit}.tds-navigation-tab-item .tab-title[data-v-440634e7]{font-size:10px;line-height:16px}.tds-navigation-tab-item[data-v-440634e7]:first-child{margin-top:24px}@media (max-width:720px){.tds-navigation-tab-item[data-v-440634e7]:first-child{margin-top:0}}.tds-navigation-tab-item__product-logo[data-v-440634e7]{height:16px;min-width:50px}.tds-navigation-tab-item__product-logo-svg[data-v-440634e7]{line-height:9px}",
                        map: void 0,
                        media: void 0
                    })
                }), m, "data-v-440634e7", !1, undefined, !1, l.a, void 0, void 0),
                h = n.default.extend({
                    name: "navigation-tabs",
                    components: {
                        NavigationTabItem: v
                    },
                    mixins: [o.a],
                    props: {
                        tabs: {
                            type: Array,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            tabInView: ""
                        }
                    },
                    watch: {
                        $route: function() {
                            this.tabInView = ""
                        }
                    },
                    methods: {
                        onTabClick: function(e, t) {
                            ((null == e ? void 0 : e.ctrlKey) || (null == e ? void 0 : e.metaKey)) && t.path ? window.open("".concat(t.path), "_blank") : (this.tabInView = t.id, t.action())
                        },
                        isActiveTab: function(e) {
                            return this.tabInView === e.id || e.active
                        }
                    }
                }),
                f = Object(l.b)({
                    render: function() {
                        var e = this,
                            t = e.$createElement,
                            c = e._self._c || t;
                        return c("nav", {
                            class: ["tds-navigation-tabs", e.$mdActiveTheme, e.$tmdActiveTheme]
                        }, e._l(e.tabs, (function(t) {
                            return c("navigation-tab-item", {
                                key: t.id,
                                class: ["tds-navigation-tabs__tab", "tds-navigation-tab-item-" + t.id],
                                attrs: {
                                    id: "tab-item-" + t.id,
                                    tab: t,
                                    "tab-in-view": e.tabInView
                                },
                                on: {
                                    "tab-item-click": function(c) {
                                        return e.onTabClick(c, t)
                                    }
                                }
                            })
                        })), 1)
                    },
                    staticRenderFns: []
                }, (function(e) {
                    e && e("data-v-3d9fb1bc_0", {
                        source: ".tds-navigation-tabs[data-v-3d9fb1bc]{position:fixed;left:0;display:flex;flex-direction:column;width:70px;height:100vh;z-index:1;box-shadow:4px 4px 4px 0 rgba(0,0,0,.25)}@media (max-width:720px){.tds-navigation-tabs[data-v-3d9fb1bc]{flex-direction:row;width:100%;height:60px;left:0;bottom:0;box-shadow:0 -4px 4px 0 rgba(0,0,0,.25);z-index:5}}",
                        map: void 0,
                        media: void 0
                    })
                }), h, "data-v-3d9fb1bc", !1, undefined, !1, l.a, void 0, void 0)
        }
    }
]);