! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "016605e4-49ef-4106-b77c-af5f58c2bf3a", t._sentryDebugIdIdentifier = "sentry-dbid-016605e4-49ef-4106-b77c-af5f58c2bf3a")
    } catch (t) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "5d23b1d1b140b8eb681294b91881bc3a9fd270e3"
}, (window.webpackJsonp = window.webpackJsonp || []).push([
    [100], {
        1231: function(t, e, n) {
            "use strict";
            n(999)
        },
        1232: function(t, e, n) {
            var r = n(177)(!1);
            r.push([t.i, ".testimonials[data-v-25f4e5ee]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:100vh;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:64px;grid-gap:64px;gap:64px}.testimonials h2[data-v-25f4e5ee]{font-weight:600;font-size:56px;line-height:70.28px;letter-spacing:0;text-align:center}.testimonials__button[data-v-25f4e5ee]{font-weight:600}", ""]), t.exports = r
        },
        1302: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = n(11),
                o = (n(53), n(2)),
                d = n(847),
                l = n(384),
                c = n(781),
                m = n(842),
                f = n(812),
                h = o.default.extend({
                    name: "testimonial-section",
                    components: {
                        TdsTestimonial: d.a,
                        TmdButton: l.a,
                        TmdCard: c.a
                    },
                    props: {
                        pageSchema: {
                            type: Object,
                            required: !0
                        },
                        type: {
                            type: String,
                            required: !1
                        },
                        theme: {
                            type: String,
                            default: "light"
                        }
                    },
                    i18n: {
                        messages: {
                            en: {
                                testimonialSectionTitle: "Let Torre users do the talking:",
                                testimonialSectionCTA: "View more"
                            },
                            es: {
                                testimonialSectionTitle: "Deja que los usuarios de Torre hablen:",
                                testimonialSectionCTA: "Ver más"
                            }
                        }
                    },
                    data: function() {
                        return {
                            testimonial: void 0,
                            ctaHref: this.type === f.a.CANDIDATE ? "/testimonials/candidates" : "/testimonials/companies"
                        }
                    },
                    fetch: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.type !== f.a.CANDIDATE) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, m.a.getCandidatesTestimonials(t.$i18n.locale).toPromise().then((function(e) {
                                            t.testimonial = e[0]
                                        }));
                                    case 3:
                                        e.next = 7;
                                        break;
                                    case 5:
                                        return e.next = 7, m.a.getTSTestimonials(t.$i18n.locale).toPromise().then((function(e) {
                                            t.testimonial = e[0]
                                        }));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    computed: {
                        sectionTheme: function() {
                            return this.pageSchema.features.length > 0 && void 0 === this.pageSchema.demoSection && void 0 === this.pageSchema.howItWorks ? "dark" : "light"
                        }
                    }
                }),
                v = (n(1231), n(101)),
                component = Object(v.a)(h, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("tmd-card", {
                        staticClass: "testimonials",
                        attrs: {
                            "md-theme": t.sectionTheme,
                            "md-elevation": "1",
                            "no-border-radius": ""
                        }
                    }, [n("h2", [t._v(t._s(t.$t("testimonialSectionTitle")))]), t._v(" "), n("tds-testimonial", {
                        attrs: {
                            entity: t.testimonial.entity,
                            testimonial: t.testimonial.testimonial,
                            theme: t.sectionTheme
                        }
                    }), t._v(" "), n("tmd-button", {
                        staticClass: "tmd-raised tmd-primary testimonial__button",
                        class: {
                            "tmc-theme": "dark" === t.sectionTheme, "tmc-brand": "light" === t.sectionTheme
                        },
                        attrs: {
                            "border-style": "none",
                            "md-theme": t.sectionTheme,
                            href: t.ctaHref
                        }
                    }, [t._v("\n    " + t._s(t.$t("testimonialSectionCTA")) + "\n  ")])], 1)
                }), [], !1, null, "25f4e5ee", null);
            e.default = component.exports
        },
        826: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            }));
            n(52), n(83), n(28), n(45), n(74), n(51), n(32);
            var r = n(2),
                o = n(133),
                d = n(179),
                l = "crawled-organizations",
                c = function(t) {
                    return !t || t.includes(l) ? "pad" : "fill"
                },
                m = function(t) {
                    return !t || t.includes(l) ? ",b_auto" : ""
                },
                script = r.default.extend({
                    name: "tds-entity-picture",
                    mixins: [o.a],
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
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c(t),
                                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m(t);
                                return t.replace("/upload/", "/upload/c_".concat(r, ",h_").concat(e, ",w_").concat(n).concat(o, "/"))
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
                f = script,
                h = Object(d.b)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return t.entity ? n(t.href ? "a" : "div", {
                            tag: "component",
                            class: [{
                                "tds-entity-picture__link": t.href
                            }, t.$tmdActiveTheme],
                            attrs: {
                                href: t.href || void 0,
                                target: t.hrefTarget
                            }
                        }, [n("div", {
                            class: ["tds-entity-picture", t.$mdActiveTheme, {
                                "tds-entity-picture--is-hexagon": "hexagon" === t.shape,
                                "tds-entity-picture--has-shadow": t.boxShadow
                            }],
                            style: t.cssVariables
                        }, ["hexagon" === t.shape ? n("div", {
                            staticClass: "tds-hexagon-border"
                        }) : t._e(), t._v(" "), t.pictureUrl ? n("img", {
                            directives: [{
                                name: "lazyload",
                                rawName: "v-lazyload"
                            }],
                            class: ["tds-entity-picture__thumbnail", "tds-entity-picture__thumbnail--image", {
                                "tds-entity-picture__thumbnail--no-margins": !t.defaultMargin
                            }],
                            attrs: {
                                "data-url": t.pictureUrl,
                                src: "https://res.cloudinary.com/torre-technologies-co/image/upload/f_auto,q_90/v1/origin/materrial/bgid2wha28a741p3ugu7",
                                title: t.title,
                                alt: t.entity.name
                            },
                            on: {
                                click: t.clickImage
                            }
                        }) : n("div", {
                            class: ["tds-entity-picture__thumbnail", "tds-entity-picture__thumbnail--text", {
                                "tds-entity-picture__thumbnail--no-margins": !t.defaultMargin
                            }],
                            on: {
                                click: t.clickImage
                            }
                        }, [n("span", [t._v(t._s(t.entity && t.entity.name ? t.entity.name.substring(0, 1) : ""))])])])]) : t._e()
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-afbb1062_0", {
                        source: ".tds-entity-picture[data-v-afbb1062]{min-width:var(--size)}.tds-entity-picture__link[data-v-afbb1062]{text-decoration:none!important;display:block}.tds-entity-picture__thumbnail[data-v-afbb1062]{display:flex;position:relative;border-radius:var(--size);width:var(--size);height:var(--size)!important;border:var(--border-width) solid;clear:both;margin:16px auto}.tds-entity-picture__thumbnail--no-margins[data-v-afbb1062]{margin:auto}.tds-entity-picture__thumbnail--text[data-v-afbb1062]{text-transform:uppercase;justify-content:center;align-items:center;line-height:var(--size)}.tds-entity-picture__thumbnail--text span[data-v-afbb1062]{font-size:var(--font-size);position:absolute}.tds-entity-picture.tds-entity-picture--has-shadow .tds-entity-picture__thumbnail[data-v-afbb1062]{box-shadow:var(--box-shadow)}.tds-entity-picture--is-hexagon[data-v-afbb1062]{position:relative}.tds-entity-picture--is-hexagon .tds-entity-picture__thumbnail[data-v-afbb1062]{border:unset;border-radius:0;width:calc(var(--size) - var(--border-width) * 2);height:calc(var(--size) - var(--border-width) * 2)!important;transform:translateY(var(--border-width));clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%)}.tds-entity-picture--is-hexagon .tds-entity-picture__thumbnail--image[data-v-afbb1062]{background:0 0!important;object-fit:cover}.tds-entity-picture--is-hexagon.tds-entity-picture--has-shadow[data-v-afbb1062]{filter:drop-shadow(var(--box-shadow))}.tds-entity-picture--is-hexagon .tds-hexagon-border[data-v-afbb1062]{position:absolute;top:0;left:calc(50% - var(--size)/ 2);width:var(--size);height:var(--size);margin:auto;clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%);-webkit-clip-path:polygon(45% 1.33975%,46.5798% .60307%,48.26352% .15192%,50% 0,51.73648% .15192%,53.4202% .60307%,55% 1.33975%,89.64102% 21.33975%,91.06889% 22.33956%,92.30146% 23.57212%,93.30127% 25%,94.03794% 26.5798%,94.48909% 28.26352%,94.64102% 30%,94.64102% 70%,94.48909% 71.73648%,94.03794% 73.4202%,93.30127% 75%,92.30146% 76.42788%,91.06889% 77.66044%,89.64102% 78.66025%,55% 98.66025%,53.4202% 99.39693%,51.73648% 99.84808%,50% 100%,48.26352% 99.84808%,46.5798% 99.39693%,45% 98.66025%,10.35898% 78.66025%,8.93111% 77.66044%,7.69854% 76.42788%,6.69873% 75%,5.96206% 73.4202%,5.51091% 71.73648%,5.35898% 70%,5.35898% 30%,5.51091% 28.26352%,5.96206% 26.5798%,6.69873% 25%,7.69854% 23.57212%,8.93111% 22.33956%,10.35898% 21.33975%)}",
                        map: void 0,
                        media: void 0
                    })
                }), f, "data-v-afbb1062", !1, undefined, !1, d.a, void 0, void 0)
        },
        842: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return h
            }));
            var r = n(13),
                o = n(21),
                d = (n(382), n(75), n(32), n(80)),
                l = n.n(d),
                c = n(73),
                m = n(78),
                f = n(116),
                h = new(function() {
                    function t() {
                        Object(r.a)(this, t)
                    }
                    return Object(o.a)(t, [{
                        key: "getCandidatesTestimonials",
                        value: function(t) {
                            var e = "https://s3.us-west-2.amazonaws.com/torre.dev/candidates_testimonials__".concat(t, ".json");
                            return this.get(e).pipe(Object(m.a)((function(t) {
                                return t.data.sort((function(a, b) {
                                    return parseInt(a.rank) - parseInt(b.rank)
                                })).map((function(t) {
                                    return {
                                        entity: {
                                            name: t.name,
                                            username: t.username,
                                            professionalHeadline: t.professionalHeadline,
                                            picture: t.picture,
                                            pictureThumbnail: t.pictureThumbnail
                                        },
                                        testimonial: t.testimonial
                                    }
                                }))
                            })))
                        }
                    }, {
                        key: "getTSTestimonials",
                        value: function(t) {
                            var e = "https://s3.us-west-2.amazonaws.com/torre.dev/talent_seekers_testimonials__".concat(t, ".json");
                            return this.get(e).pipe(Object(m.a)((function(t) {
                                return t.data.sort((function(a, b) {
                                    return parseInt(a.rank) - parseInt(b.rank)
                                })).map((function(t) {
                                    return {
                                        entity: {
                                            name: t.name,
                                            username: t.username,
                                            professionalHeadline: t.professionalHeadline,
                                            picture: t.picture,
                                            pictureThumbnail: t.picture
                                        },
                                        testimonial: t.testimonial
                                    }
                                }))
                            })))
                        }
                    }, {
                        key: "get",
                        value: function(path) {
                            return Object(c.a)(l.a.get(path)).pipe(Object(f.a)())
                        }
                    }]), t
                }())
        },
        847: function(t, e, n) {
            "use strict";
            n.d(e, "a", (function() {
                return f
            }));
            n(28), n(32);
            var r = n(2),
                o = n(781),
                d = n(91),
                l = n(826),
                c = n(179),
                m = r.default.extend({
                    name: "tds-testimonial",
                    components: {
                        TdsEntityPicture: l.a,
                        TmdCard: o.a,
                        TmdIcon: d.a
                    },
                    props: {
                        entity: {
                            type: Object,
                            required: !0
                        },
                        testimonial: {
                            type: String,
                            required: !0
                        },
                        baseUrl: {
                            type: String,
                            default: "https://torre.ai"
                        },
                        theme: {
                            type: String,
                            default: "dark"
                        }
                    },
                    computed: {
                        entityGenome: function() {
                            return "".concat(this.baseUrl, "/").concat(this.entity.username)
                        }
                    }
                }),
                f = Object(c.b)({
                    render: function() {
                        var t = this,
                            e = t.$createElement,
                            n = t._self._c || e;
                        return n("div", {
                            staticClass: "tds-testimonial"
                        }, [n("tds-entity-picture", {
                            staticClass: "tds-testimonial__picture",
                            attrs: {
                                entity: t.entity,
                                size: 120,
                                "border-width": 6
                            }
                        }), t._v(" "), n("tmd-card", {
                            class: ["tds-testimonial__card", {
                                "tds-testimonial__card--light": "light" === t.theme
                            }],
                            attrs: {
                                "md-elevation": "1",
                                "md-theme": "dark",
                                type: "elevated"
                            }
                        }, [n("div", {
                            staticClass: "tds-testimonial__card-testimonial"
                        }, [n("tmd-icon", {
                            staticClass: "tds-testimonial__quote",
                            attrs: {
                                fill: "",
                                size: "50px"
                            }
                        }, [t._v("\n        format_quote\n      ")]), t._v(" "), n("span", [t._v(" " + t._s(t.testimonial) + " ")]), t._v(" "), n("tmd-icon", {
                            staticClass: "tds-testimonial__quote",
                            attrs: {
                                fill: "",
                                size: "50px"
                            }
                        }, [t._v("\n        format_quote\n      ")])], 1), t._v(" "), n("span", {
                            staticClass: "tds-testimonial__card-name"
                        }, [n("span", [t._v(t._s(t.entity.name))]), t.entity.professionalHeadline ? n("span", [t._v(", " + t._s(t.entity.professionalHeadline))]) : t._e()])])], 1)
                    },
                    staticRenderFns: []
                }, (function(t) {
                    t && t("data-v-5bf1f7bb_0", {
                        source: ".tds-testimonial[data-v-5bf1f7bb]{position:relative;width:100%;max-width:720px;padding-top:60px}.tds-testimonial__card[data-v-5bf1f7bb]{height:100%;padding:90px 20px 36px;display:grid;border-radius:24px!important}.tds-testimonial__card--light[data-v-5bf1f7bb]{box-shadow:-4px -4px 4px 0 rgba(255,255,255,.7),2px 2px 6px 0 rgba(1,1,1,.4)!important}.tds-testimonial__card-testimonial[data-v-5bf1f7bb]{position:relative;text-align:start;margin-bottom:46px}.tds-testimonial__card-testimonial span[data-v-5bf1f7bb]{z-index:1;position:relative}.tds-testimonial__card-name[data-v-5bf1f7bb]{text-align:end;align-self:flex-end}.tds-testimonial__picture[data-v-5bf1f7bb]{position:absolute;top:-16px;left:50%;transform:translateX(-50%)}.tds-testimonial__quote[data-v-5bf1f7bb]{position:absolute;color:#5e626b!important}.tds-testimonial__quote[data-v-5bf1f7bb]:first-child{transform:rotate(180deg);left:-12px;top:-19px}.tds-testimonial__quote[data-v-5bf1f7bb]:last-child{right:-12px;bottom:-14px}",
                        map: void 0,
                        media: void 0
                    })
                }), m, "data-v-5bf1f7bb", !1, undefined, !1, c.a, void 0, void 0)
        },
        999: function(t, e, n) {
            var content = n(1232);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(178).default)("099982c0", content, !0, {
                sourceMap: !1
            })
        }
    }
]);