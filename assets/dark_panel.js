! function (modules) {
    var installedModules = {};

    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function (exports, name, getter) {
        if(!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };
    __webpack_require__.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: true
        })
    };
    __webpack_require__.t = function (e, t) {
        if (1 & t && (e = __webpack_require__(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (__webpack_require__.r(o), Object.defineProperty(o, "default", {
                enumerable: true,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) __webpack_require__.d(o, r, function (t) {
                return e[t]
            }.bind(null, r));
        return o
    }; 
    __webpack_require__.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    };
    __webpack_require__.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 293)
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
                                var e = document.documentElement.scrollTop + document.body.scrollTop;
                                var c = .8 * window.innerHeight;

                                //var t = document.querySelector(".linebox").offsetTop;
                                //var a = document.querySelector(".tablebox").offsetTop;
                                //e > t - c ? $(".linebox").addClass("active") : $(".linebox").removeClass("active");                                
                                //e > a - c ? $(".tablebox").addClass("active") : $(".tablebox").removeClass("active");

                                var uc = document.querySelector(".upline");
                                if ( uc ) {
                                    var n = document.querySelector(".upline").offsetTop;                                
                                    e > n - c ? $(".upline").addClass("active") : $(".upline").removeClass("active");
                                }
                                
                                var oc = document.querySelector(".downline");
                                if ( oc ) { 
                                    var o = document.querySelector(".downline").offsetTop;
                                    e > o - c ? $(".downline").addClass("active") : $(".downline").removeClass("active");
                                }
                                
                                var rc = document.querySelector(".descbox");
                                if ( rc ) {
                                    var r = document.querySelector(".descbox").offsetTop;
                                    e > r - c ? $(".descbox").addClass("active") : $(".descbox").removeClass("active");
                                } 

                                var ic = document.querySelector(".newline");
                                if ( ic ) {
                                    var i = document.querySelector(".newline").offsetTop;
                                    e > i - c ? $(".newline").addClass("active") : $(".newline").removeClass("active");
                                } 
                                
                                // videos play & pause
                                var v5 = document.getElementById("v5");
                                if ( v5 ) {
                                    var j = document.querySelector(".vn5").offsetTop;
                                    e > j - c ? $(".vn5").addClass("active") : $(".vn5").removeClass("active");
                                    if ( e > v5.offsetTop - c ) {
                                        v5.play();
                                    } else {
                                        v5.pause();
                                    }
                                }
                                var v4 = document.getElementById("v4");
                                if ( v4 ) {
                                    var j = document.querySelector(".vn4").offsetTop;
                                    e > j - c ? $(".vn4").addClass("active") : $(".vn4").removeClass("active");
                                    if ( e > v4.offsetTop - c ) {
                                        v4.play();
                                    } else {
                                        v4.pause();
                                    }
                                }
                                var v3 = document.getElementById("v3");
                                if ( v3 ) {
                                    if ( e > v3.offsetTop - c ) {
                                        v3.play();
                                    } else {
                                        v3.pause();
                                    }
                                }
                                var v2 = document.getElementById("v2");
                                if ( v2 ) {
                                    if ( e > v2.offsetTop - c ) {
                                        v2.play();
                                    } else {
                                        v2.pause();
                                    }    
                                }
                                var v1 = document.getElementById("v1");
                                if ( v1 ) {
                                    if ( e > v1.offsetTop - c ) {
                                        v1.play();
                                    } else {
                                        v1.pause();
                                    }    
                                }
                            }
                        }
                    }), $("#crtlRowBtnFrame").on("click", ".touchBox", function () {
                        a($(this).index())
                    }), setTimeout(function () {
                        r()
                    }, 5e3), 
                    $(".carousel .banner").eq($(".banner").length).addClass("nowleave"), 
                    $(".carousel .banner").eq(0).addClass("active"), 
                    $("#crtlRowBtnFrame .touchBox").eq(0).addClass("nowSliders")
                });
                var t = 0,
                    o = $(".banner").length,
                    r = function () {
                        $(".carousel .banner").removeClass("nowleave"), 
                        $(".carousel .banner").removeClass("active"), 
                        $("#crtlRowBtnFrame .touchBox").removeClass("nowSliders"), 
                        t + 1 === $(".carousel .banner").length ? (t = 0, o = $(".carousel .banner").length) : (o = t, t += 1), 
                        $(".carousel .banner").eq(o).addClass("nowleave"), 
                        $(".carousel .banner").eq(t).addClass("active"), 
                        $("#crtlRowBtnFrame .touchBox").eq(t).addClass("nowSliders"), 
                        setTimeout(function () {
                            r()
                        }, 5e3)
                    },
                    a = function (e) {
                        $(".carousel .banner").removeClass("nowleave"), 
                        $(".carousel .banner").removeClass("active"), 
                        $("#crtlRowBtnFrame .touchBox").removeClass("nowSliders"), 
                        t === e ? (o = o, t = e) : (o = t, t = e), 
                        $(".carousel .banner").eq(o).addClass("nowleave"), 
                        $(".carousel .banner").eq(t).addClass("active"), 
                        $("#crtlRowBtnFrame .touchBox").eq(t).addClass("nowSliders")
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
            s = false,
            d = -1;

        function f() {
            s && u && (s = false, u.length ? l = u.concat(l) : d = -1, l.length && m())
        }

        function m() {
            if (!s) {
                var e = c(f);
                s = true;
                for (var t = l.length; t;) {
                    for (u = l, l = []; ++d < t;) u && u[d].run();
                    d = -1, t = l.length
                }
                u = null, s = false,
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
            l.push(new v(e, t)), 
            1 !== l.length || s || c(m)
        }, 
        v.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, 
        r.title = "browser";
        r.browser = true; 
        r.env = {}, r.argv = [];
        r.version = "";
        r.versions = {};
        r.on = b;
        r.addListener = b, 
        r.once = b, 
        r.off = b, 
        r.removeListener = b, 
        r.removeAllListeners = b, 
        r.emit = b, 
        r.prependListener = b, 
        r.prependOnceListener = b, 
        r.listeners = function (e) {
            return []
        }, 
        r.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, 
        r.cwd = function () {
            return "/"
        }, 
        r.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, 
        r.umask = function () {
            return 0
        }
    }
});
