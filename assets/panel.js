! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function (t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 293)
}({
    293: function (e, t, n) {
        e.exports = n(294)
    },
    294: function (e, t, n) {
        "use strict";
        n.r(t),
            function (e) {
                n(295);
                $(document).ready(function () {
                    getnowplace("panel_panel"), new Vue({
                        el: "#panelpage",
                        mounted: function () {
                            var t = this;
                            e.browser && (setTimeout(function () {
                                t.movetext()
                            }, 1e3), window.addEventListener("scroll", this.movetext))
                        },
                        destroyed: function () {
                            window.removeEventListener("scroll", this.movetext)
                        },
                        methods: {
                            movetext: function () {
                                var e = document.documentElement.scrollTop + document.body.scrollTop,
                                    t = document.querySelector(".linebox").offsetTop,
                                    n = document.querySelector(".upline").offsetTop,
                                    o = document.querySelector(".downline").offsetTop,
                                    r = document.querySelector(".descbox").offsetTop,
                                    a = document.querySelector(".tablebox").offsetTop,
                                    i = document.querySelector(".featurebox").offsetTop,
                                    c = .8 * window.innerHeight;
                                e > t - c ? $(".linebox").addClass("active") : $(".linebox").removeClass("active"), e > n - c ? $(".upline").addClass("active") : $(".upline").removeClass("active"), e > o - c ? $(".downline").addClass("active") : $(".downline").removeClass("active"), e > r - c ? $(".descbox").addClass("active") : $(".descbox").removeClass("active"), e > a - c ? $(".tablebox").addClass("active") : $(".tablebox").removeClass("active"), e > i - c ? $(".featurebox").addClass("active") : $(".featurebox").removeClass("active")
                            }
                        }
                    }), $("#crtlRowBtnFrame").on("click", ".touchBox", function () {
                        a($(this).index())
                    }), setTimeout(function () {
                        r()
                    }, 5e3), $(".carousel .banner").eq($(".banner").length).addClass("nowleave"), $(".carousel .banner").eq(0).addClass("active"), $("#crtlRowBtnFrame .touchBox").eq(0).addClass("nowSliders")
                });
                var t = 0,
                    o = $(".banner").length,
                    r = function () {
                        $(".carousel .banner").removeClass("nowleave"), $(".carousel .banner").removeClass("active"), $("#crtlRowBtnFrame .touchBox").removeClass("nowSliders"), t + 1 === $(".carousel .banner").length ? (t = 0, o = $(".carousel .banner").length) : (o = t, t += 1), $(".carousel .banner").eq(o).addClass("nowleave"), $(".carousel .banner").eq(t).addClass("active"), $("#crtlRowBtnFrame .touchBox").eq(t).addClass("nowSliders"), setTimeout(function () {
                            r()
                        }, 5e3)
                    },
                    a = function (e) {
                        $(".carousel .banner").removeClass("nowleave"), $(".carousel .banner").removeClass("active"), $("#crtlRowBtnFrame .touchBox").removeClass("nowSliders"), t === e ? (o = o, t = e) : (o = t, t = e), $(".carousel .banner").eq(o).addClass("nowleave"), $(".carousel .banner").eq(t).addClass("active"), $("#crtlRowBtnFrame .touchBox").eq(t).addClass("nowSliders")
                    }
            }.call(this, n(5))
    },
    295: function (e, t, n) {},
    5: function (e, t) {
        var n, o, r = e.exports = {};

        function a() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function c(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
            try {
                return n(e, 0)
            } catch (t) {
                try {
                    return n.call(null, e, 0)
                } catch (t) {
                    return n.call(this, e, 0)
                }
            }
        }! function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : a
            } catch (e) {
                n = a
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                o = i
            }
        }();
        var u, l = [],
            s = !1,
            d = -1;

        function f() {
            s && u && (s = !1, u.length ? l = u.concat(l) : d = -1, l.length && m())
        }

        function m() {
            if (!s) {
                var e = c(f);
                s = !0;
                for (var t = l.length; t;) {
                    for (u = l, l = []; ++d < t;) u && u[d].run();
                    d = -1, t = l.length
                }
                u = null, s = !1,
                    function (e) {
                        if (o === clearTimeout) return clearTimeout(e);
                        if ((o === i || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                        try {
                            o(e)
                        } catch (t) {
                            try {
                                return o.call(null, e)
                            } catch (t) {
                                return o.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function v(e, t) {
            this.fun = e, this.array = t
        }

        function b() {}
        r.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            l.push(new v(e, t)), 1 !== l.length || s || c(m)
        }, v.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = b, r.addListener = b, r.once = b, r.off = b, r.removeListener = b, r.removeAllListeners = b, r.emit = b, r.prependListener = b, r.prependOnceListener = b, r.listeners = function (e) {
            return []
        }, r.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, r.cwd = function () {
            return "/"
        }, r.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, r.umask = function () {
            return 0
        }
    }
});
