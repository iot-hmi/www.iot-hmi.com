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
    }, n.p = "", n(n.s = 275)
}({
    275: function (e, t, n) {
        e.exports = n(276)
    },
    276: function (e, t, n) {
        "use strict";
        n.r(t),
            function (e) {
                n(277);
                $(document).ready(
                    function () {
                        getnowplace("index");
                        $("#crtlRowBtnFrame").on("click", ".touchBox", function () {
                            i($(this).index())
                        });
                        setTimeout(function () {
                            r()
                        }, 5e3);
                        $(".carousel .banner").eq($(".banner").length).addClass("nowleave");
                        $(".carousel .banner").eq(0).addClass("active");
                        $("#crtlRowBtnFrame .touchBox").eq(0).addClass("nowSliders")
                    });
                var t = 0,
                    o = $(".banner").length,
                    r = function () {
                        $(".carousel .banner").removeClass("nowleave"), $(".carousel .banner").removeClass("active"), $("#crtlRowBtnFrame .touchBox").removeClass("nowSliders"), t + 1 === $(".carousel .banner").length ? (t = 0, o = $(".carousel .banner").length) : (o = t, t += 1), $(".carousel .banner").eq(o).addClass("nowleave"), $(".carousel .banner").eq(t).addClass("active"), $("#crtlRowBtnFrame .touchBox").eq(t).addClass("nowSliders"), setTimeout(function () {
                            r()
                        }, 5e3)
                    },
                    i = function (e) {
                        $(".carousel .banner").removeClass("nowleave"), $(".carousel .banner").removeClass("active"), $("#crtlRowBtnFrame .touchBox").removeClass("nowSliders"), t === e ? (o = o, t = e) : (o = t, t = e), $(".carousel .banner").eq(o).addClass("nowleave"), $(".carousel .banner").eq(t).addClass("active"), $("#crtlRowBtnFrame .touchBox").eq(t).addClass("nowSliders")
                    }
            }.call(this, n(5))
    },
    277: function (e, t, n) {},
    5: function (e, t) {
        var n, o, r = e.exports = {};

        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function c() {
            throw new Error("clearTimeout has not been defined")
        }

        function a(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
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
                n = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                n = i
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : c
            } catch (e) {
                o = c
            }
        }();
        var l, s = [],
            u = !1,
            d = -1;

        function f() {
            u && l && (u = !1, l.length ? s = l.concat(s) : d = -1, s.length && m())
        }

        function m() {
            if (!u) {
                var e = a(f);
                u = !0;
                for (var t = s.length; t;) {
                    for (l = s, s = []; ++d < t;) l && l[d].run();
                    d = -1, t = s.length
                }
                l = null, u = !1,
                    function (e) {
                        if (o === clearTimeout) return clearTimeout(e);
                        if ((o === c || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
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

        function p() {}
        r.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            s.push(new v(e, t)), 1 !== s.length || u || a(m)
        }, v.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function (e) {
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