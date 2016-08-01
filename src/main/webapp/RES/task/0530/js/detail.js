
    function initCal(t) {
        var e = 1e4 * $("#all-pay").val(),
        a = e / 1e4,
        i = Math.round(e * t.percent),
        n = i / 1e4,
        o = e * (1 - t.percent),
        l = o / 1e4;
        if (t.calcType) if (0 == t.tag) {
            for (var r = Math.round(parseFloat(o / t.times) + parseFloat(o * t.rate / 12)), s = 0, c = r, d = 0; d < t.times; d++) s = parseFloat(s) + parseFloat(c),
            c = Math.round(parseFloat(o / t.times) + parseFloat((o - s) * t.rate / 12));
            s -= o
        } else {
            for (var u = 1e4 * $("#accu-dk").val(), h = 1e4 * $("#bns-dk").val(), p = Math.round(parseFloat(u / t.times) + parseFloat(u * t.accurate / 12)), f = Math.round(parseFloat(h / t.times) + parseFloat(h * t.bnsrate / 12)), r = parseFloat(p) + parseFloat(f), m = 0, g = 0, d = 0; d < t.times; d++) m = parseFloat(m) + parseFloat(p),
            p = Math.round(parseFloat(u / t.times) + parseFloat((u - m) * t.accurate / 12));
            for (var d = 0; d < t.times; d++) g = parseFloat(g) + parseFloat(f),
            f = Math.round(parseFloat(h / t.times) + parseFloat((h - g) * t.bnsrate / 12));
            s = parseFloat(m) + parseFloat(g) - o
        } else {
            if (0 == t.tag) var r = Math.round(o * t.rate / 12 * Math.pow(1 + parseFloat(t.rate / 12), t.times) / (Math.pow(1 + parseFloat(t.rate / 12), t.times) - 1));
            else var u = 1e4 * $("#accu-dk").val(),
            h = 1e4 * $("#bns-dk").val(),
            r = Math.round(u * t.accurate / 12 * Math.pow(1 + parseFloat(t.accurate / 12), t.times) / (Math.pow(1 + parseFloat(t.accurate / 12), t.times) - 1)) + Math.round(h * t.bnsrate / 12 * Math.pow(1 + parseFloat(t.bnsrate / 12), t.times) / (Math.pow(1 + parseFloat(t.bnsrate / 12), t.times) - 1));
            var s = r * t.times - o
        }
        var v = Math.round(s / 1e4);
        return {
            allPayTo: a || 0,
            firstPayTo: n || 0,
            loanTo: l || 0,
            perBack: r || 0,
            allBackTo: v || 0
        }
    }
    function mainJS() {
        var t = {
            average: 0,
            accurate: 0,
            bnsrate: 0,
            area: 0,
            percent: 0,
            loan: 0,
            times: 0,
            allpay: 0,
            rate: 0,
            calcType: 0,
            tag: 0
        };
        if ($(".pp-wprice").attr("data-price")) {
            t.average = $(".pp-wprice").attr("data-price"),
            $(".junjia-info").html(t.average + "元／平米");
            $(".pp-wprice").attr("data-value") * t.average / 1e4
        } else $(".junjia-info").html("待定"),
        $("#all-pay").val();
        $.each($(".count .ret,.ret-zongjia"),
        function(e, a) {
            var i = $(this);
            t[i.attr("data-type")] = i.find(".da").attr("data-value")
        }),
        $("#all-pay").on("keyup",
        function() {
            var e = $(this).closest(".ret");
            t[e.attr("data-type")] = $(this).val()
        }),
        $("#all-pay,#accu-dk,#bns-dk").on("keydown",
        function(t) { - 1 !== $.inArray(t.keyCode, [46, 8, 9, 27, 13, 110, 190]) || 65 == t.keyCode && t.ctrlKey === !0 || 67 == t.keyCode && t.ctrlKey === !0 || 88 == t.keyCode && t.ctrlKey === !0 || t.keyCode >= 35 && t.keyCode <= 39 || (t.shiftKey || t.keyCode < 48 || t.keyCode > 57) && (t.keyCode < 96 || t.keyCode > 105) && t.preventDefault()
        }),
        $(".count").on("mouseenter", ".ret",
        function() {
            $(this).find("ol").show()
        }).on("mouseleave", ".ret",
        function() {
            $(this).find("ol").hide()
        }),
        $(".count").on("click", ".ret li",
        function() {
            var e = $(this),
            a = e.closest("ol"),
            i = e.closest(".ret"),
            n = i.find(".da");
            e.hasClass("clicked") || (t[i.attr("data-type")] = e.attr("data-value"), n.html(e.html()), a.find("li").removeClass("clicked"), e.addClass("clicked")),
            e.closest("ol").hide()
        }),
        $(".slt-area").on("click", "li",
        function() {
            if ($("#all-pay").val(), $(".pp-wprice").attr("data-price")) {
                t.average = $(".pp-wprice").attr("data-price");
                var e = $(this).attr("data-value") * t.average / 1e4 || 0;
                $("#all-pay").val(e.toFixed(0)),
                $(".junjia-info").html(t.average + "元／平米")
            } else $(".junjia-info").html("待定")
        }),
        $(".select-math").on("click", ".wu-icon",
        function() {
            $(".wu-icon").each(function() {
                $(this).removeClass("right-icon")
            }),
            $(this).addClass("right-icon"),
            t.calcType = $(this).attr("data-value"),
            t.calcType ? ($("#first-month").show(), $("#per-month").hide()) : ($("#first-month").hide(), $("#per-month").show())
        }),
        $(".dk-type").on("click", "li",
        function() {
            $(this).attr("data-value") ? ($("#dk-list").hide(), t.tag = 0) : ($("#dk-list").show(), t.tag = 1)
        }),
        $(".start-btn").on("click",
        function Calc() {
            var a = initCal(t),
            i = $(".chengshu-value").html();
            $(".pie-bgbgbg").show(),
            $(".zongjia-info").html("约" + a.allPayTo.toFixed(0) + "万"),
            $(".shoufu-info").html(a.firstPayTo.toFixed(0) + "万 " + i),
            $(".daikuan-info").html(a.loanTo.toFixed(0) + "万"),
            $(".lixi-info").html(a.allBackTo.toFixed(0) + "万"),
            $(".yue-info").html(a.perBack.toFixed(0) + "元"),
            $("#all-pay").val(),
            // 路径配置
    	    require.config({
    	        paths:{ 
    	            'echarts' : 'js/echarts',
    	            'echarts/chart/pie' : 'js/echarts'
    	        }
    	    }),
            require(["echarts", "echarts/chart/pie"],
            function(ec) {
            	//初始化echarts图表
                var myChart = ec.init(document.getElementById("my-pie")),
                option = {
                    legend: {},
                    color: ["rgb(226, 87, 76)", "rgb(159, 212, 245)", "rgb(247, 231, 122)"],
                    calculable: !1,
                    series: [{
                        type: "pie",
                        radius: "100%",
                        center: ["50%", "50%"],
                        data: [{
                            value: a.firstPayTo,
                            name: "首付"
                        },
                        {
                            value: a.loanTo,
                            name: "贷款"
                        },
                        {
                            value: a.allBackTo,
                            name: "利息"
                        }],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: !1,
                                    position: "inner"
                                },
                                labelLine: {
                                    show: !1
                                }
                            },
                            emphasis: {
                                label: {
                                    show: !0,
                                    formatter: "{b}  {d}%"
                                }
                            }
                        }
                    }]
                };
                // 为echarts对象加载数据 
                myChart.setOption(option);
            });
            $("#my-pie").show();
        })
    }
/*
define("xinfang/detail/details",
function(require, t) {
    function e() {
        $(".tab-loupan").on("click",
        function() {
            $(".box-loupan").show(),
            $(".box-wuye").hide(),
            $(this).removeClass("no-click"),
            $(this).find("i").removeClass("clicked-loupan"),
            $(".tab-wuye").find("i").removeClass("clicked-wuye"),
            $(".tab-wuye").addClass("no-click")
        }),
        $(".tab-wuye").on("click",
        function() {
            $(".box-wuye").show(),
            $(".box-loupan").hide(),
            $(this).removeClass("no-click"),
            $(this).find("i").addClass("clicked-wuye"),
            $(".tab-loupan").find("i").addClass("clicked-loupan"),
            $(".tab-loupan").addClass("no-click")
        })
    }
    function a() {
        e()
    }
    return t = {
        init: a
    }
}),
define("xinfang/detail/anchorFollow",
function(require) {
    function t(t) {
        if (t) {
            var e = t.indexOf("#");
            if (!~~e) return t.substring(e + 1)
        }
    }
    var e = $(window);
    return function(a, i) {
        function n() {
            for (var e, i, n = a.find("a"), o = n.length, l = 0; o > l; l++) e = n.eq(l).attr("href"),
            (e = t(e)) && (i = $("#" + e), i.length && (s.hashId.push(i), s.hash.push(n.eq(l))))
        }
        function o() {
            function t(t) {
                r.trigger("show", {
                    hash: s.hash[t],
                    dest: s.hashId[t]
                })
            }
            function a(e) {
                if (s.hashId.length) {
                    for (var a = 0,
                    n = 0; n < s.hashId.length; n++) {
                        var o = s.hashId[n].offset().top;
                        e + c > o + i && (a = n)
                    }
                    t(a)
                }
            }
            require(["common/scrollCaller"],
            function(t) {
                t(function(t) {
                    a(t)
                })
            }),
            a(e.scrollTop())
        }
        function l() {
            n(),
            s.hashId && o()
        }
        var r = $({}),
        s = {
            hash: [],
            hashId: []
        };
        i = i || 0;
        var c = a.height();
        return l(),
        r
    }
}),
define("xinfang/detail/tab",
function(require) {
    function t() {
        var t = $(".panel-tab");
        t.fixtop({
            fixedWidth: "1000px",
            fixed: function() {},
            unfixed: function() {}
        });
        var e = a(t);
        e.on("show",
        function(e, a) {
            t.find("li").removeClass("on");
            var i = a.hash.parent();
            i.addClass("on"),
            t.find(".panel-bg").css("left", i.position().left + "px")
        })
    }
    function e() {
        t()
    }
    $(".freetel").click(function() {
        $(".phone-s").show(),
        $(".freetel").hide(),
        dspAnalyze("2")
    });
    var a = require("xinfang/detail/anchorFollow");
    return exports = {
        init: e
    },
    exports
}),
define("xinfang/detail/houseonline",
function(require, t) {
    function e() {
        $(".type-pic").one("init",
        function() {
            setTimeout(function() {
                a()
            },
            50)
        }),
        $("#house-online").on("click", ".more",
        function() {
            var t = $(this).closest(".list-item");
            dspAnalyze("4"),
            t.find(".text-two").length && (t.find(".housemore").html(t.find(".text-two").get(0).value), t.find(".text-two").remove()),
            t.find(".housemore").show(),
            t.find(".all-list").hide()
        }),
        $(".type-tab").on("click", "li",
        function() {
            $(".type-tab li").removeClass("onli"),
            $(this).addClass("onli"),
            $(".list-item").hide();
            var t = $(".list-item[data-index='" + $(this).attr("data-index") + "']");
            t.show(),
            t.find(".text-one").length && (t.find(".houselist").html(t.find(".text-one").get(0).value), t.find(".text-one").remove())
        }),
        $("#house-online,#build-info").on("click", ".img-li,.chak",
        function() {
            dspAnalyze("3");
            var t = $(this).closest("ul").attr("data-id");
            $(".type-pic").show(),
            $(".leftbtn").show(),
            $(".rightbtn").show(),
            $(".close").show(),
            $(".type-pic").trigger("init"),
            $(".type-pic").addClass("bounceIn"),
            $(".overlayBgl").fadeIn(300),
            $(".bigPic img").each(function(e, a) {
                return $(this).attr("data-id") == t ? (window.SCROLLIMG ? SCROLLIMG(e, !0) : setTimeout(function() {
                    SCROLLIMG(e, !0)
                },
                110), !1) : void 0
            })
        }),
        $(".close,.overlayBgl").click(function(t) {
            $(".type-pic").fadeOut().removeClass("bounceIn"),
            $(".leftbtn").fadeOut().removeClass("bounceIn"),
            $(".rightbtn").fadeOut().removeClass("bounceIn"),
            $(".close").fadeOut().removeClass("bounceIn"),
            $(".overlayBgl").fadeOut(),
            $(".pf-btn").show(),
            $(".p-btn, .p-note").hide()
        }),
        $(".guanzhu").on("click",
        function() {
            $(this).hasClass("logged") ? $(this).hasClass("watched") ? $.ajax({
                url: "/xinfang/unfollow",
                data: {
                    id: $(".pprice-box").attr("data-id")
                }
            }).done(function(t) {
                t && t.code && ($(".guanzhu").html("关注"), $(".guanzhu").removeClass("watched"), $(".bigPic ul").find("img").eq(Math.abs(l)).attr("data-followed", 0))
            }) : ($(".pf-btn").hide(), $(".p-btn, .p-note").show(), $(".tianjia").on("click",
            function() {
                $.ajax({
                    url: "/xinfang/follow",
                    data: {
                        id: $(".pprice-box").attr("data-id"),
                        reason: encodeURIComponent($.trim($("#p-note-info").val()) || " ")
                    }
                }).done(function(t) {
                    t && t.code && ($(".pf-btn").show(), $(".p-btn, .p-note").hide(), $(".guanzhu").html("已关注"), $(".guanzhu").addClass("watched"), $(".bigPic ul").find("img").eq(Math.abs(l)).attr("data-followed", 1))
                })
            })) : $(".typeShowUser .reg").trigger("click")
        }),
        $(".quxiao").on("click",
        function() {
            $(".p-btn, .p-note").hide(),
            $(".pf-btn").show()
        }),
        o.on("delete",
        function(t) {
            for (var e = 0; e < t.length; e++) $("img[data-id=" + t[e] + "]").attr("data-duibi", 0),
            $(".pprice-box").attr("data-id") == t[e] && ($(".duibi").removeClass("quxiaoduibi hasaddcompared"), $(".duibi").html("添加对比"))
        }),
        $(".duibi").on("click",
        function() {
            $(".duibi").hasClass("hasaddcompared") ? (o.deleteItem($(".pprice-box").attr("data-id")), $(".bigPic ul").find("img").eq(Math.abs(l)).attr("data-duibi", 0), $(".duibi").removeClass("quxiaoduibi hasaddcompared"), $(".duibi").html("添加对比")) : (o.addMatch({
                id: $(".pprice-box").attr("data-id"),
                title: $(".p-title").html() + $(".pprice-box").attr("data-frame_name")
            }), $(".bigPic ul").find("img").eq(Math.abs(l)).attr("data-duibi", 1), $(".duibi").addClass("quxiaoduibi hasaddcompared"), $(".duibi").html("取消对比"))
        })
    }
    function a() {
        function t(t, n) {
            function o() {
                var t = r.find("img").eq(Math.abs(l)),
                e = $(".pic-info");
                s.find(".img-li").removeClass("active"),
                s.find(".img-li").eq(Math.abs(l)).addClass("active"),
                e.find(".p-type").html(t.attr("data-room_num"));
                var a = +t.attr("data-area");
                e.find(".p-are").html(a.toFixed(0) + "㎡"),
                e.find(".p-total-price").html(t.attr("data-totalprice")),
                "暂无" == t.attr("data-totalprice") && $(".formis").hide(),
                e.find(".direction-info").html(t.attr("data-ori")),
                e.find(".fixture-info").html(t.attr("data-decora"));
                var n = t.attr("data-read");
                n ? e.find(".pread").html(n) : e.find(".pread").html("暂无"),
                $(".frame-tip").html(t.attr("data-frame_name")),
                $(".nature").attr("href", t.attr("data-nature")),
                $(".pprice-box").attr("data-frame_name", t.attr("data-frame_name")),
                $(".pprice-box").attr("data-id", t.attr("data-id"));
                var o = t.attr("data-followed"),
                c = t.attr("data-duibi"); !
                function() {
                    var a = $.parseJSON(t.attr("data-tag") || ""),
                    i = "";
                    a && a.length && $.each(a,
                    function(t, e) {
                        i += '<span class="tag' + (t + 1) + '">' + e + "</span>"
                    }),
                    e.find(".p-tips").html(i)
                } (),
                i(t.attr("data-min")),
                1 == c ? ($(".duibi").html("取消对比"), $(".duibi").addClass("quxiaoduibi hasaddcompared")) : ($(".duibi").html("添加对比"), $(".duibi").removeClass("quxiaoduibi hasaddcompared")),
                $(".guanzhu").hasClass("logged") && (1 == o ? ($(".guanzhu").html("已关注"), $(".guanzhu").addClass("watched")) : ($(".guanzhu").html("关注"), $(".guanzhu").removeClass("watched")))
            }
            if (l = "undefined" != typeof t ? -t: l, 2 == c) {
                c = 0,
                n ? (r.css({
                    left: l * e
                }), c++, s.css({
                    left: l * a
                }), c++, o()) : (r.animate({
                    left: l * e
                },
                10,
                function() {
                    c++,
                    o()
                }), s.animate({
                    left: l * a
                },
                200,
                function() {
                    c++
                }));
                var d = $(".bigPic .img-li").length;
                l == -(d - 1) ? $("#rightbtn").addClass("scroll-to-end") : $("#rightbtn").removeClass("scroll-to-end"),
                0 == l ? $("#leftbtn").addClass("scroll-to-end") : $("#leftbtn").removeClass("scroll-to-end")
            }
        }
        var e = parseInt($($(".bigPic li")[0]).css("width")),
        a = parseInt($($(".smallPic li")[0]).css("width")) + parseInt($($(".smallPic li")[0]).css("margin-right")),
        n = $(".bigPic li").size() * e,
        o = $(".smallPic li").size() * a;
        $(".bigPic ul").css("width", n),
        $(".smallPic ul").css("width", o);
        var r = $(".bigPic ul"),
        s = $(".smallPic ul"),
        c = 2;
        window.SCROLLIMG = t,
        $("#leftbtn").click(function() {
            2 != c || $(this).hasClass("scroll-to-end") || (l++, t())
        }),
        $("#rightbtn").click(function() {
            2 != c || $(this).hasClass("scroll-to-end") || (l--, t())
        }),
        $(".smallPic").on("click", "img",
        function() {
            var t = $(this);
            t.parent().hasClass("active") || setTimeout(function() {
                SCROLLIMG(t.attr("data-index"))
            },
            10)
        })
    }
    function i(t) {
        var e = 1e4 * t,
        a = .3 * e,
        i = .7 * e,
        n = .0325,
        o = 360,
        l = Math.round(i * n / 12 * Math.pow(1 + parseFloat(n / 12), o) / (Math.pow(1 + parseFloat(n / 12), o) - 1)),
        r = a / 1e4,
        s = l,
        c = $(".p-dtl");
        c.find(".pyueg").html(s.toFixed(0) + "元"),
        c.find(".pshouf").html(r.toFixed(0) + "万")
    }
    function n(t) {
        o = t.matchBar;
        for (var a = o.getMatchList(), n = 0; n < a.length; n++) $("img[data-id=" + a[n].id + "]").attr("data-duibi", 1);
        e(),
        i($(".p-total-price").attr("data-zongj"))
    }
    var o, l = 0;
    return t = {
        init: n
    }
}),
define("xinfang/detail/showlayer",
function() {
    var t = $.template(['<div id="layer">', '<div class="cover"></div>', '<div class="main" data-role="alertlayer">', '<div class="top">', "<p>24小时完成审核，<br />审核通过后可查看评价内容.</p>", "</div>", '<div class="bottom" data-action="close">知道了</div>', '<div class="l_close" data-action="close"></div>', "</div>", "</div>"].join("")),
    e = $("body");
    return {
        bind: function() {
            var a = ($(), $(t.render()));
            e.append(a),
            a.stop().fadeIn(200),
            a.on("click", '[data-action="close"]',
            function() {
                a.stop().fadeOut(200),
                a.remove()
            })
        }
    }
}),
define("xinfang/detail/userComment",
function(require) {
    function t() {
        var t = $("#user-comment").find('[data-role="commentitem"]'),
        e = $("#user-comment").find('[data-role="alertlayer"]');
        $.each(e,
        function() {
            $(this).on("click",
            function(t) {
                1 !== window.loginData.code ? ($(".actLoginBtn").trigger("click"), t.preventDefault()) : (document.documentElement.style.overflowY = "hidden", $("#comment_mask").show(), $("#comment_layer").fadeIn(), 1 === $("#filePicker").find("*").length && r.addButton({
                    id: "#filePicker"
                }))
            })
        }),
        $.each(t,
        function() {
            var t = $(this),
            e = t.find(".words-container"),
            a = e.find(".words");
            a.height() > e.height() && e.append('<a class="show-all">显示全部</a>')
        }),
        t.on("click", ".show-all",
        function() {
            var t = $(this),
            e = $(this).parents(".words-container");
            e.css({
                "max-height": "none"
            }),
            t.hide()
        }),
        t.on("click", ".like",
        function() {
            var t = $(this).closest('[data-role="commentitem"]'),
            e = t.attr("data-id"),
            a = $(this).find("span"),
            i = Number(a.html());
            $(this).hasClass("islike") ? ($(this).removeClass("islike"), i--, a.html(i), $.ajax({
                url: "/loupan/pinglun_" + e + "/unlike",
                dataType: "jsonp"
            })) : ($(this).addClass("islike"), i++, a.html(i), $.ajax({
                url: "/loupan/pinglun_" + e + "/like",
                dataType: "jsonp"
            }))
        })
    }
    function e() {
        var t = $("#user-comment .tab");
        t.on("click", "li[data-role]",
        function() {
            var t = $(this),
            e = $('ul[data-role="' + $(this).attr("data-role") + 'List"]'),
            a = $('.tab li[class="active"]'),
            i = $('ul[data-role="' + a.attr("data-role") + 'List"]');
            t.addClass("active"),
            a.removeClass("active"),
            i.hide(),
            e.show()
        })
    }
    function a() {
        var t, e, a = $("#user-comment .picList");
        a.on("mouseenter", 'div[class="picItem"]',
        function() {
            t = $(this).find(".largePic"),
            e = $(this).find(".picCover"),
            t.show(),
            e.show()
        }),
        a.on("mouseleave", 'div[class="picItem"]',
        function() {
            t = $(this).find(".largePic"),
            e = $(this).find(".picCover"),
            t.hide(),
            e.hide()
        })
    }
    function i(t, e) {
        var a = e.find("i"),
        i = e.find("b"),
        n = e.find('div[class="star_info"]'),
        o = "";
        if (0 === t) return n.width("0"),
        a.html(""),
        void i.html("");
        switch (t) {
        case 1:
            o = "非常差";
            break;
        case 2:
            o = "差";
            break;
        case 3:
            o = "一般";
            break;
        case 4:
            o = "好";
            break;
        case 5:
            o = "非常好"
        }
        a.html(t + "分"),
        n.width(10 * Math.floor(2 * t) + "%"),
        i.html(o)
    }
    function n(t) {
        function e() {
            w.html(""),
            v.attr("val", "");
            var t = v.find("span");
            $.each(t,
            function() {
                $(this).hasClass("active") && $(this).removeClass("active")
            });
            var e = m.find(".stararea li");
            $.each(e,
            function() {
                i(0, $(this))
            });
            var a = m.find('.add_list li[data-role="deletable"]');
            $.each(a,
            function() {
                $(this).remove()
            }),
            b.val(""),
            s.around = 0,
            s.green = 0,
            s.traffic = 0,
            c = !1,
            d = []
        }
        function a() {
            var t = v.attr("val"),
            e = 1;
            return "" === t ? (w.html("兴趣评价未完成"), !1) : ($.each(s,
            function(t, a) {
                return 0 === a ? (e = 0, !1) : void 0
            }), 0 === e ? (w.html("星星评分未完成"), !1) : c ? (w.html("评价楼盘字数超限制"), !1) : b.val().length ? !0 : (w.html("评价楼盘未填写"), !1))
        }
        function n() {
            var t, e;
            v.on("click", "span",
            function() {
                t = $(this),
                e = t.parent().find(".active"),
                e.removeClass("active"),
                t.addClass("active"),
                v.attr("val", t.attr("data-val")),
                w.html("")
            })
        }
        function o() {
            var t = b.parent().find("p"),
            e = 500,
            a = 0;
            b.on("keyup",
            function() {
                a = $(this).val().length,
                a > e ? (t.show(), c = !0) : (t.hide(), c = !1)
            }),
            b.on("focus",
            function() {
                w.html("")
            })
        }
        function p() {
            var t = m.find(".stararea li");
            $.each(t,
            function() {
                var t = $(this).find(".star_wrap"),
                e = 3,
                a = 0;
                t.on("mousemove",
                function(n) {
                    var o = $(this).parents("li");
                    a = n.pageX - t.offset().left - e,
                    score = Math.ceil(5 * a / t.width()),
                    score <= 0 ? score = 1 : score >= 5 && (score = 5),
                    i(score, o)
                }),
                t.on("click",
                function(t) {
                    var e = $(this).parents("li");
                    score = Number(e.find("i").html().slice(0, -1)),
                    i(score, e),
                    s[e.attr("data-role")] = score,
                    w.html("")
                }),
                t.on("mouseleave",
                function(t) {
                    var e = $(this).parents("li");
                    score = s[e.attr("data-role")],
                    0 !== s[e.attr("data-role")] ? i(score, e) : i(0, e)
                })
            })
        }
        function f(t) {
            require(["webuploader"],
            function(e) {
                var a = m.find(".uploadarea .add_list"),
                i = 12;
                r = e.create({
                    auto: !0,
                    swf: l + "dep/webuploader/Uploader.swf",
                    server: "/loupan/p_" + t + "/uploadcommentimg",
                    fileNumLimit: i,
                    accept: {
                        title: "Images",
                        extensions: "gif,jpg,jpeg,bmp,png",
                        mimeTypes: "image/*"
                    }
                }),
                a.on("mouseenter", 'li[data-role="deletable"]',
                function() {
                    $(this).find(".deleteMask").show(),
                    $(this).find(".deleteIcon").show()
                }),
                a.on("mouseleave", 'li[data-role="deletable"]',
                function() {
                    $(this).find(".deleteMask").hide(),
                    $(this).find(".deleteIcon").hide()
                }),
                a.on("click", ".deleteIcon",
                function() {
                    var t = $(this).closest('li[data-role="deletable"]'),
                    e = $.inArray(t.attr("data-val", d));
                    d.splice(e, 1),
                    t.remove(),
                    a.find('li[data-role="deletable"]').length < i && $("#filePicker").closest(".add").show()
                }),
                r.on("fileQueued",
                function(t) {
                    var e = a.find("li").length - 1;
                    if (i > e) {
                        var n = m.find(".uploadarea .add"),
                        o = '<li data-role="deletable" data-fileid="<%= id %>"><span>uploading...</span><div class="deleteMask"></div><i class="deleteIcon"></i></li>',
                        l = $.template(o).render(t);
                        a.find("li").length == i && $("#filePicker").closest(".add").hide(),
                        $(l).insertBefore(n)
                    } else r.removeFile(t, !0)
                }),
                r.on("uploadSuccess",
                function(t, e) {
                    var i = a.find('li[data-fileid="' + t.id + '"]');
                    d.push(e.pic_id),
                    i.attr("data-val", e.pic_id),
                    i.find("span").replaceWith($('<img src="' + e.url + '.80x80.jpg" width="80" height="80" />')),
                    r.removeFile(t, !0)
                }),
                r.on("uploadError",
                function(t, e) {
                    var i = a.find('li[data-fileid="' + t.id + '"]');
                    i.find("span").replaceWith($("<span>" + e + "</span>")),
                    r.removeFile(t, !0)
                })
            })
        }
        var m = $("#comment_layer"),
        g = m.find("[data-role=close]"),
        v = m.find(".selarea .sel"),
        b = m.find("textarea"),
        y = m.find(".post"),
        w = m.find(".error_tip");
        $.each(g,
        function() {
            $(this).on("click",
            function() {
                $("#comment_mask").hide(),
                m.fadeOut(),
                document.documentElement.style.overflowY = "scroll"
            })
        }),
        y.on("click",
        function() {
            var i = "";
            a() && u && (u = !1, d.length > 0 && (i = "[" + d.toString() + "]"), $.ajax({
                url: "/loupan/p_" + t + "/addcomment",
                type: "post",
                data: {
                    interest: Number(v.attr("val")),
                    around: s.around,
                    traffic: s.traffic,
                    green: s.green,
                    content: b.val(),
                    image_ids: i
                },
                dataType: "jsonp"
            }).done(function(t) {
                e(),
                $("#comment_mask").hide(),
                m.hide(),
                document.documentElement.style.overflowY = "scroll",
                h.bind(),
                u = !0
            }))
        }),
        n(),
        o(),
        p(),
        f(t)
    }
    function o(i, o) {
        l = i,
        t(),
        e(),
        a(),
        n(o)
    }
    var l = "",
    r = null,
    s = {
        around: 0,
        traffic: 0,
        green: 0
    },
    c = !1,
    d = [],
    u = !0,
    h = require("xinfang/detail/showlayer");
    return {
        init: o
    }
}),
define("xinfang/detail/buildpush",
function(require, t) {
    function e() {}
    function a() {
        e()
    }
    return t = {
        init: a
    }
}),
define("xinfang/detail/info",
function(require, t) {
    function e() {
        if ($(".cont-bgbox").length) {
            var t = $(".mod-info"),
            e = t.find(".more-info"),
            a = t.find(".split").position().top;
            a > 80 && (e.show(), t.on("click", ".more-btn",
            function() {
                t.find(".cont-bgbox").addClass("show-all"),
                e.hide()
            }))
        }
    }
    function a() {
        e()
    }
    return t = {
        init: a
    }
}),
define("xinfang/detail/deter",
function(require) {
    function t(t, e, a, i) {
        for (var n = 0,
        o = 0; o < t.length; o++) t[o] > n && (n = t[o]),
        e[o] > n && (n = e[o]),
        a[o] > n && (n = a[o]);
        for (var l = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    lineStyle: {
                        color: "#abaeb0",
                        width: 1,
                        type: "solid"
                    }
                }
            },
            calculable: !1,
            legend: {
                x: 36,
                data: ["本楼盘均价", "区域均价"]
            },
            grid: {
                x: 116,
                x2: 36
            },
            xAxis: [{
                type: "category",
                splitLine: {
                    show: !1
                },
                axisLine: {
                    show: !0,
                    lineStyle: {
                        color: "#abaeb0"
                    }
                },
                axisTick: {
                    show: !1
                },
                data: i
            }],
            yAxis: [{
                type: "value",
                name: "近期均价走势",
                axisLabel: {
                    formatter: "{value} 元/平"
                },
                axisLine: {
                    show: !0,
                    lineStyle: {
                        color: "#abaeb0"
                    }
                },
                max: 2 * n
            }],
            series: [{
                name: "本楼盘均价",
                type: "line",
                itemStyle: {
                    normal: {
                        color: "#95c3a2"
                    }
                },
                data: t
            },
            {
                name: "区域均价",
                type: "line",
                itemStyle: {
                    normal: {
                        color: "#95a6c3"
                    }
                },
                data: e
            }]
        },
        r = 0, o = 0; o < a.length; o++) r += a[o];
        if (0 != r) {
            var s = {
                name: "本楼盘二手均价",
                z: 4,
                type: "line",
                itemStyle: {
                    normal: {
                        color: "#f09f87"
                    }
                },
                data: a
            };
            l.legend.data.push("本楼盘二手均价"),
            l.series.push(s)
        }
        require(["echarts", "echarts/chart/bar", "echarts/chart/line"],
        function(t) {
            if (null !== document.getElementById("pricedeter")) {
                var e = t.init(document.getElementById("pricedeter"));
                e.setOption(l)
            }
        })
    }
    return {
        init: t
    }
}),
define("xinfang/detail/buildinfo",
function(require, t) {
    function e() {
        $(".content-wrap").on("click", ".danyuan-eum",
        function() {
            $(".content-open1-b").css("right", "30px")
        }),
        $(".content-open1-b").on("click", ".go-btn",
        function() {
            $(".content-open1-b").css("right", "-300px"),
            $(".content-open1-b .ju-eum").removeClass("jian").addClass("jia"),
            $(".content-open1-b ul").hide()
        }),
        $(".content-open1-b").on("click", ".ju-eum",
        function() {
            $(this).hasClass("jia") ? ($(".content-open1-b .ju-eum").removeClass("jian").addClass("jia"), $(".content-open1-b ul").hide(), $(this).removeClass("jia").addClass("jian"), $(this).parent().children(".ju-ul").show()) : ($(this).removeClass("jian").addClass("jia"), $(this).parent().children(".ju-ul").hide())
        }),
        $(".img-wrap").on("click", ".mark-label",
        function() {
            $(".content-open1-b").css("right", "-300px"),
            $(".content-open1-b .ju-eum").removeClass("jian").addClass("jia"),
            $(".content-open1-b ul").hide()
        })
    }
    function a() {
        e()
    }
    return t = {
        init: a
    }
}),
define("xinfang/detail/buildinfo2",
function(require) {
    function t(t) {
        $(".mark-label").on("click",
        function() {
            for (var e = $(this).attr("data-id"), a = "", i = 0, n = t.length; n > i; i++) if (t[i].id == e) {
                for (var o = 0,
                l = t[i].unit_list.length; l > o; o++) {
                    var r = t[i].unit_list[o].unit_name;
                    r = null == r ? "": t[i].unit_list[o].unit_name,
                    a += -1 == t[i].unit_list[o].sale_house_count ? '<span class="danyuan-eum" data-id="' + t[i].unit_list[o].id + '">' + r + " 共" + t[i].unit_list[o].house_count + "户<i></i></span>": '<span class="danyuan-eum" data-id="' + t[i].unit_list[o].id + '">' + r + " 共" + t[i].unit_list[o].house_count + "户 在售" + t[i].unit_list[o].sale_house_count + "户<i></i></span>"
                }
                var s = $("#buildingDanyuan");
                s.html(a),
                $(".building-building_code").html(t[i].building_code)
            }
        }),
        $("#buildingDanyuan").on("click", "span",
        function() {
            for (var e = $(this).attr("data-id"), a = "", i = 0, n = t.length; n > i; i++) for (var o = 0,
            l = t[i].unit_list.length; l > o; o++) if (t[i].unit_list[o].id == e) {
                var r = t[i].unit_list[o].unit_name;
                r = null == r ? "": t[i].unit_list[o].unit_name,
                $(".open1-title").html(r),
                $(".open1-g").html("高" + t[i].unit_list[o].floor_height + "层"),
                $(".open1-t").html(t[i].unit_list[o].ratio),
                $.each(t[i].unit_list[o].frames,
                function(t, e) {
                    a += '<div class="ju-div"><span class="ju-eum jia"><i></i>' + t + "居户型图（" + e.total + "）</span>",
                    $.each(e.list,
                    function(t, e) {
                        a += '<ul class="ju-ul" data-id="' + e.id + '"><li class="img-li"><img class=" " alt="{$resblock.resblock_name}" title="{$resblock.resblock_name}" src="' + e.images[0].image_url + '.140x115.jpg"><span class="tip">' + e.frame_name + '</span><span class="ju-size">' + e.build_area + "㎡</span></li></ul>"
                    }),
                    a += "</div>"
                });
                var s = $(".ju-list");
                s.html(a)
            }
        })
    }
    return {
        init: t
    }
}),
define("xinfang/detail/banner",
function(require) {
    function t() {
        if ($(".phonetag .btn_phone_ll").on("click",
        function() {
            $(".phonetag").hide()
        }), $(".t-phonetag .btn_phone_ll").on("click",
        function() {
            $(".t-phonetag").hide()
        }), $(".phone-h .phone-info").attr("data-phone")) {
            var t = $(".phone-h .phone-info").attr("data-phone"),
            e = $(".phone-h .phone-info").attr("data-all");
            "400" == t && $(".phone-h .phone-info").html(e)
        }
        if ($(".panel-tab .phone-s").attr("data-phone")) {
            var a = $(".panel-tab .phone-s").attr("data-phone"),
            i = $(".panel-tab .phone-s").attr("data-all");
            "400" == a && $(".panel-tab .phone-s").html(i)
        }
    }
    function e() {
        $(".box-left-bottom .wu-type").hover(function() {
            $(".box-left-bottom .more-box").fadeIn(200)
        },
        function() {
            $(".box-left-bottom .more-box").hide()
        });
        var t = +$(".wu-type").attr("data-more");
        t > 0 ? $(".wu-type .iic").show() : $(".wu-type .iic").hide();
        var e = +$(".when").attr("data-more");
        e > 0 ? $(".when .iic").show() : $(".when .iic").hide(),
        $(".box-left-bottom .more-box").on("mouseenter",
        function() {
            $(this).show()
        }).on("mouseleave",
        function() {
            $(this).hide()
        }),
        $(".box-left-bottom .when").hover(function() {
            $(".box-left-bottom .more-box2").fadeIn(200)
        },
        function() {
            $(".box-left-bottom .more-box2").hide()
        }),
        $(".box-left-bottom .more-box2").on("mouseenter",
        function() {
            $(this).show()
        }).on("mouseleave",
        function() {
            $(this).hide()
        })
    }
    function a() {
        var t = /^1\d{10}$/,
        e = $(".apply-success").html();
        $(".apply-btn").on("click",
        function() {
            var a = $(".phone-input").val(),
            i = $(".name-input").val();
            if (!i) return alert("请输入您的姓名"),
            !1;
            if (t.test(a)) {
                var n = "/loupan/projectactivityuser",
                o = $(".mod-banner").attr("data-proname"),
                l = {
                    phone: a,
                    name: i,
                    id: o
                };
                $.ajax({
                    url: n,
                    data: l,
                    type: "post",
                    success: function(t) {
                        0 == t.errno ? ($(".apply-youhui").html(e), $(".yh-info .peo-name").html(i), $(".yh-info .peo-phone").html(a)) : alert(t.error)
                    }
                })
            } else alert("手机号码不合法")
        })
    }
    function i() {
        $(".youhui").on("click", ".get-youhui",
        function() {
            $(".phone-input").val(""),
            $(".apply-youhui").fadeIn(200).addClass("bounceIn"),
            $(".overlayBgl").fadeIn(200)
        }),
        $("body").on("click", ".s-close",
        function() {
            $(".formis").fadeOut().removeClass("bounceIn"),
            $(".overlayBgl").fadeOut()
        }),
        $(".apply-youhui").on("click", ".close",
        function() {
            $(".apply-youhui").fadeOut(),
            $(".overlayBgl").fadeOut()
        }),
        $(".overlayBgl").on("click",
        function() {
            $(".formis").fadeOut().removeClass("bounceIn"),
            $(".apply-youhui").fadeOut(),
            $(".youhui-detail").fadeOut(),
            $(".when-detail").fadeOut(),
            $(".overlayBgl").fadeOut()
        }),
        $(".tip-box").on("click", ".youhui-tip",
        function() {
            $(".youhui-detail").fadeIn(200),
            $(".overlayBgl").fadeIn(200)
        }),
        $(".when-more-btn").on("click",
        function() {
            $(".when-detail").fadeIn(200),
            $(".overlayBgl").fadeIn(200)
        })
    }
    return {
        init: function() {
            t(),
            i(),
            e(),
            a(),
            $(".btn_phone_ll").on("click",
            function() {
                dspAnalyze("2")
            })
        }
    }
}),
define("xinfang/list/suggest",
function(require) {
    function t(t) {
        this.opt = {
            input: "",
            template: "",
            sugContainer: ""
        },
        $.extend(this.opt, t),
        this.isBusy = !1,
        this.now = Date.now ||
        function() {
            return + new Date
        },
        this.searchTimer = this.now(),
        this.bind()
    }
    return t.prototype.bind = function() {
        var t = this;
        this.opt.input.on("input propertychange focus",
        function() {
            if (!t.isBusy && t.now() - t.searchTimer > 500) {
                var e = $(this).val();
                if ("" === $.trim(e)) return void t.opt.sugContainer.hide();
                t.isBusy = !0,
                t.searchTimer = t.now(),
                $.ajax({
                    type: "get",
                    url: "/api/headerSearch?channel=xinfang&keyword=" + e,
                    dataType: "json",
                    success: function(a) {
                        t.isBusy = !1,
                        a && 0 == a.status && a.data.result && a.data.result.length > 0 && a.data.result[0].keyword == e ? (t.opt.sugContainer.html(t.opt.template.render({
                            list: a.data.result
                        })), t.opt.sugContainer.show()) : t.opt.sugContainer.hide()
                    }
                })
            }
        }),
        $("body").on("click",
        function(e) {
            e.target !== t.opt.input[0] && t.opt.sugContainer.hide()
        })
    },
    t
}),
define("xinfang/list/search",
function(require) {
    function t() {
        var t = $.template($("#suggestTpl").html()),
        e = $("#sugBox"),
        a = $("#search-input");
        $("#search").submit(function() {
            return window.location.pathname = "/loupan/rs" + a.val(),
            !1
        });
        var i = require("xinfang/list/suggest");
        new i({
            input: a,
            template: t,
            sugContainer: e
        })
    }
    return t
}),
define("xinfang/detail/mapLayer",
function(require, t) {
    function e() {
        a()
    }
    function a() {
        $("#mapWrapper").on("click",
        function() {
            i()
        })
    }
    function i() { ! o && n(),
        o.toggle(),
        l.toggle()
    }
    function n() {
        function t() {
            var t = document.createElement("script");
            t.type = "text/javascript",
            t.src = "http://api.map.baidu.com/api?v=2.0&ak=dASz7ubuSpHidP1oQWKuAK3q&callback=INITMAP",
            document.body.appendChild(t)
        }
        function e() {
            var t = new BMap.Map("mapWrap", {
                enableMapClick: !1
            }),
            e = new BMap.Point(Math.max(s[0], s[1]), Math.min(s[0], s[1]));
            t.centerAndZoom(e, 16),
            t.enableScrollWheelZoom(),
            t.disableInertialDragging(),
            t.addControl(new BMap.ScaleControl({
                anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
                offset: new BMap.Size(20, 20)
            })),
            t.addControl(new BMap.NavigationControl);
            var a = {
                position: e,
                offset: new BMap.Size( - 61, -70)
            },
            i = new BMap.Label("<span style='display:block'><span style='display:block;border-radius:2px;padding-left:10px;padding-right:10px;line-height:32px;height:32px;border:1px solid #cac8c7;background-color: #fff;width: 100px;text-align: center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;' title='" + c + "'>" + c + "</span><span style='border: 5px solid transparent;display: block;width: 0;height: 0;margin-left: auto;margin-right: auto;border-top-color: #cac8c7;opacity: 0.99;zoom: 1;'><i style='border: 5px solid transparent;display: block;width: 0;height: 0;margin: -6px 0 0px -5px;border-top-color: #fff;'></i></span><span style='display: block;margin: 0 auto;width: 22px;height: 26px;background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAYAAACzdqxAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaNJREFUeNpi/P//PwMtABMDjQALnDWRkTom5v8nysU6QDwBiK8D8Q8ovgYV0yEnKNiBeBoQXwS5AYg1oGIgrAkVuwhVw44/KBCADYh3ArE9EfGTCcRaQOwGxL8IuXgSEYYiA3uoHrxBoQ/EqRhaBVQYGAzyIRjExgQgPQb4DE7GENMGCsVcBrprAgSD2CAxTAcm4TPYA4UnqMbA4DSDgYGZAyEGYoPEQHJ49KIbLI/CU/ACqsASvyAxkBwqUMBnMCX5+yc+g5+h8B5sY2D49wfTCJDYg+3ooi/wGXwWhff+FgPDfmBS/fsDIQZi788Cyt1EN/gCvgxyHIhDUESuzGFgeHKAgUHRF8K/v5mB4cMdbEFxHJnDCC82IYWQKhDfIjOM1cF6cRRCt4H4HBmGnkN3ELYsPYsMg2cRU7otAuKXJBj6EqqHoMHfgbiZBIOboXqIKo+BeZbhFBGGnoaqJbqg/wvEcUD8EY+hILlYqFqSKlNQDvAGZRMsciAxP6gasmrpo0BsDMRLoS78CGWDxA4RV0vjBveBOIbU9MdIqwYLQIABAJWfZOUm4UkiAAAAAElFTkSuQmCC);'></span></span>", a);
            i.setStyle({
                color: "#333333",
                fontSize: "14px",
                borderWidth: "0",
                padding: "0",
                background: "transparent"
            }),
            t.addOverlay(i)
        }
        $(document.body).append($.replaceTpl('<div class="map-layer-box" style="top:0;left:0;z-index:9999;position:fixed;width:100%;height:100%;background-color:#000;opacity:0.4;filter:alpha(opacity=40);display:none"></div><div class="map-wrap" style="border-radius: 4px;z-index:10000;position:fixed;top:50%;margin-top:-218px;left:50%;margin-left:-450px;width:900px;height:436px;display:none;background-color:#fff"><div class="m-close" style="-webkit-transform: scalex(1.2);-ms-transform: scalex(1.2);transform: scalex(1.2);position: absolute;right: 7px;top: 1px;color: #dfdfdf;font-size: 26px;cursor: pointer;">X</div><div class="m-hd" style="padding-left: 96px;height: 82px;border-bottom: 1px solid #e1e1e1;padding-top: 20px;background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA1CAMAAAAnMwjPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRF6a5j9Niz////6rJqWTXxawAAAVlJREFUeNqcllGCwyAIRGfk/nfetWmNwkA0/LTRvAwiImjSSBsGUr6DB+6CTdFQIMwbhHRA+2smLMIOpeX273aBmsFKOEXt2RK0lgy6OCIXFiferuxACbUhapAOpd4NOcwVVRnELAILGt0dCZDKIo0RiyhMaJhd8oY+WpcskpW6zIaYhgov/AGjWg2iv4A416suBlqeLZVsn1BEVJPetS/K9EimbPcYfqy1LTaihej63nvVH+qilIVpTqrunVfVuxp2Vjk8pxK7JRv7gPYqMT+dqGJOkEPVFP3ta7Nj1TuHcawqD92OKviAFqq8C8yZKkyXtVVVXixzWXPefG15WBaVlnBXqeYfUcJ377n5TKO46DLjxiWpRRmv5l1WNQT2tiHY1H3b/MDSlquOlStbodHDy0bvKkgJaBtNreh5IO6/pJXGjX/+crMLv0rwSHoeNPD3BxqL2T8BBgD4yhwaXLmdUQAAAABJRU5ErkJggg==) no-repeat 20px center;background-image: -webkit-image-set(url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA1CAMAAAAnMwjPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAxQTFRF6a5j9Niz////6rJqWTXxawAAAVlJREFUeNqcllGCwyAIRGfk/nfetWmNwkA0/LTRvAwiImjSSBsGUr6DB+6CTdFQIMwbhHRA+2smLMIOpeX273aBmsFKOEXt2RK0lgy6OCIXFiferuxACbUhapAOpd4NOcwVVRnELAILGt0dCZDKIo0RiyhMaJhd8oY+WpcskpW6zIaYhgov/AGjWg2iv4A416suBlqeLZVsn1BEVJPetS/K9EimbPcYfqy1LTaihej63nvVH+qilIVpTqrunVfVuxp2Vjk8pxK7JRv7gPYqMT+dqGJOkEPVFP3ta7Nj1TuHcawqD92OKviAFqq8C8yZKkyXtVVVXixzWXPefG15WBaVlnBXqeYfUcJ377n5TKO46DLjxiWpRRmv5l1WNQT2tiHY1H3b/MDSlquOlStbodHDy0bvKkgJaBtNreh5IO6/pJXGjX/+crMLv0rwSHoeNPD3BxqL2T8BBgD4yhwaXLmdUQAAAABJRU5ErkJggg==) 1x, url(data:image/png;base64,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) 2x);"><p style="font-size: 20px;color: #333333;font-weight: bold;line-height: 1.8;">#{name}</p><p style="font-size: 12px;color: #999999;">#{address}<a href="http://map.baidu.com/" target="_blank" style="color: #1ba1e1;margin-left: 11px;font-weight:bold;">在百度地图中查看交通信息</a></p></div><div class="m-bd" id="mapWrap" style="width:872px;height:306px;margin:13px auto;"></div></div>', {
            name: c,
            address: d
        })),
        o = $(".map-layer-box"),
        l = $(".map-wrap"),
        window.INITMAP = e,
        t(),
        o.on("click",
        function() {
            o.toggle(),
            l.toggle()
        }),
        l.find(".m-close").on("click",
        function() {
            o.toggle(),
            l.toggle()
        })
    }
    var o, l, r = $("#mapWrapper"),
    s = r.attr("data-coord").split(","),
    c = r.attr("data-name"),
    d = r.attr("data-address");
    return s = [parseFloat(s[0]), parseFloat(s[1])],
    t = e
}),
define("base/EventEmitter",
function() {
    "use strict";
    function t() {}
    "function" != typeof Object.create && (Object.create = function() {
        var t = function() {};
        return function(e) {
            if (arguments.length > 1) throw Error("Second argument not supported");
            if ("object" != typeof e) throw TypeError("Argument must be an object");
            t.prototype = e;
            var a = new t;
            return t.prototype = null,
            a
        }
    } ()),
    Object.keys || (Object.keys = function() {
        var t = Object.prototype.hasOwnProperty,
        e = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        a = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        i = a.length;
        return function(n) {
            if ("object" != typeof n && ("function" != typeof n || null === n)) throw new TypeError("Object.keys called on non-object");
            var o, l, r = [];
            for (o in n) t.call(n, o) && r.push(o);
            if (e) for (l = 0; i > l; l++) t.call(n, a[l]) && r.push(a[l]);
            return r
        }
    } ()),
    t.extend = function(e) {
        function a() {
            this && i(this, arguments),
            this && this._initialize_ && this._initialize_.apply(this, arguments)
        }
        var i = this,
        n = i.prototype,
        o = a.prototype = Object.create(n);
        for (var l in e) {
            if ("constructor" === l) return;
            var r = e[l];
            if ("function" == typeof r && n[l] && "function" == typeof n[l]) r = function(t, e) {
                return function() {
                    var a = this._super;
                    this._super = n[t];
                    var i = e.apply(this, arguments);
                    return this._super = a,
                    i
                }
            } (l, r);
            else if ("object" == typeof r && n[l] && "object" == typeof n[l]) for (var s in n[l]) r[s] || (r[s] = n[l][s]);
            o[l] = r
        }
        return a.extend = t.extend,
        a
    };
    var e = t.extend({
        _initialize_: function(t) {
            var e = this;
            e._eventList = {},
            e._eventTriggerd_ = {},
            this.initialize && this.initialize.apply(this, arguments),
            this._promise_ = "boolean" == typeof t ? t: !1
        },
        on: function(t, e) {
            if (!t || !e) throw "type of fn is required";
            var a = this,
            i = a._eventList[t];
            i || (i = [], a._eventList[t] = i),
            i.push(e)
        },
        off: function(t, e) {
            var a = this;
            if (!t) return void(a._eventList = {});
            var i = a._eventList[t];
            if (i && i.length) {
                if (!e) {
                    for (; i.pop(););
                    return
                }
                for (var n = 0,
                o = i.length; o > n; n++) if (i[n] == e || i[n] == e.fn) return void i.splice(n, 1)
            }
        },
        trigger: function(t) {
            if (t) {
                var e = this,
                a = Array.prototype.slice.call(arguments, 1);
                e._promise_ && (e._eventTriggerd_[t] = a);
                var i = e._eventList[t];
                if (i && i.length) for (var n = 0; n < i.length; n++) if (i[n].apply(e, a) === !1) return ! 1
            }
        },
        before: function(t, e) {
            var a, i = this;
            return function() {
                return--t > 0 ? a = e.apply(i, arguments) : e = null,
                a
            }
        },
        once: function(t, e) {
            var a = this;
            t && e && a.on(t, a.before(2, e))
        },
        destroy: function() {
            var t = this;
            t._eventList = null
        },
        always: function(t, e) {
            var a = this;
            a.on(t, e),
            a._eventTriggerd_[t] && e.apply(null, a._eventTriggerd_[t])
        }
    });
    return e
}),
define("base/AView",
function(require) {
    var t = require("base/EventEmitter"),
    e = t.extend({
        initialize: function(t) {
            function e(t) {
                for (var e in t) {
                    var a = t[e],
                    o = e.split(" ");
                    n.delegate(o[1], o[0], $.proxy(i[a], i))
                }
            }
            var a = {
                el: ""
            };
            $.extend(a, t);
            var i = this,
            n = $(a.el);
            return n.length ? (i.opt = a, i.$el = n, void e(i.events)) : void(console && console.error("need a real dom"))
        },
        events: {},
        destrory: function() {
            var t = this;
            t._super(),
            t.$el.undelegate(),
            t.opt = null,
            t.$el = null
        }
    });
    return e
}),
define("user/home/matchBar",
function(require) {
    var t = require("base/AView");
    return t.extend({
        initialize: function(t) {
            function e() {
                var t = $(".go-top");
                n.scrollTop() > 100 ? t.css("visibility", "visible") : t.css("visibility", "hidden")
            }
            var a = this,
            i = {
                el: "",
                template: "",
                matchList: [],
                cityList: {}
            };
            if ($.extend(i, t), a._super(i), a.$el) {
                this.getMatchListFromStorage(),
                a.render();
                var n = $(window);
                n.scroll(e)
            }
        },
        events: {
            "click .delete-match": "deleteMatch",
            "click .jumpMatch": "jumpToMatch",
            "click .clearAll": "clearAll",
            "click .go-top": "goTop"
        },
        show: function() {
            this.$el.show()
        },
        hide: function() {
            this.$el.hide()
        },
        getMatchListFromStorage: function() {
            0 == this.opt.matchList.length && window.localStorage && localStorage.newHouseMatchList && (this.opt.matchList = JSON.parse(localStorage.newHouseMatchList))
        },
        setMatchListToStorage: function() {
            window.localStorage && (localStorage.newHouseMatchList = JSON.stringify(this.opt.matchList))
        },
        getMatchList: function() {
            return this.getMatchListFromStorage(),
            this.render(),
            this.opt.matchList
        },
        render: function() {
            this.$el.html(this.opt.template.render({
                matchList: this.opt.matchList,
                showMatchBtn: this.getObjectCount(this.opt.cityList) > 0
            }))
        },
        addMatch: function(t) {
            return this.getMatchListFromStorage(),
            this.check(t.id) !== !1 ? (this.render(), alert("该户型已加入对比了"), !1) : this.opt.matchList.length < 4 ? (this.opt.matchList.push(t), this.render(), this.setMatchListToStorage(), !0) : (this.render(), alert("最多只能对比四个户型"), !1)
        },
        check: function(t) {
            for (var e = 0; e < this.opt.matchList.length; e++) if (this.opt.matchList[e].id == t) return e;
            return ! 1
        },
        deleteMatch: function(t) {
            var e = $(t.target),
            a = e.data("id");
            this.deleteItem(a)
        },
        deleteItem: function(t) {
            var e = this.check(t);
            if (e !== !1) {
                delete this.opt.matchList[e];
                for (var a = [], i = 0; i < this.opt.matchList.length; i++) this.opt.matchList[i] && a.push(this.opt.matchList[i]);
                return this.opt.matchList = a,
                this.render(),
                this.setMatchListToStorage(),
                this.trigger("delete", [t], this.opt.matchList.length),
                !0
            }
            return ! 1
        },
        jumpToMatch: function(t) {
            if (this.opt.matchList.length >= 2) {
                for (var e = [], a = 0; a < this.opt.matchList.length; a++) e.push(this.opt.matchList[a].id);
                var i = this.getXinfangUrl();
                window.location.href = i + "/loupan/p_" + e.join("_") + "/"
            } else alert("至少加入两个户型才可以对比")
        },
        clearAll: function(t) {
            for (var e = [], a = 0; a < this.opt.matchList.length; a++) e.push(this.opt.matchList[a].id);
            this.opt.matchList = [],
            this.render(),
            this.setMatchListToStorage(),
            this.trigger("delete", e, 0)
        },
        goTop: function(t) {
            $("html , body").animate({
                scrollTop: 0
            },
            300)
        },
        getCookie: function(t) {
            var e, a = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
            return (e = document.cookie.match(a)) ? unescape(e[2]) : null
        },
        getObjectCount: function(t) {
            var e = 0;
            for (var a in t) t.hasOwnProperty(a) && e++;
            return e
        },
        getXinfangUrl: function() {
            var t = "";
            if (0 != this.getObjectCount(this.opt.cityList)) {
                var e = this.getCookie("select_city");
                e || (e = 11e4);
                for (var a in this.opt.cityList) a == e && (t = this.opt.cityList[a].host);
                t || (t = "bj.lianjia.com"),
                "" != window.location.port && (t += ":" + window.location.port),
                t = "http://" + t
            }
            return t
        }
    })
}),
define("xinfang/detail/newDetailMap",
function(require) {
    return function(t) {
        var e, a, i, n, o = $("#around .container"),
        l = 3e3,
        r = $("#around .type li"),
        s = $("#mapListContainer"),
        c = r.first().html(),
        d = {},
        u = $.template('<i class="item labelIcon">&#<%=index+65%>;</i><div class="hide labelText"><%=name%></div>'),
        h = $.template("<div class='name'><%=name%><i class='arrow'></i></div>"),
        p = $.template($("#mapListTpl").html()),
        f = function(t) {
            var e = document.createElement("script");
            e.src = "http://api.map.baidu.com/api?v=1.5&ak=" + t + "&callback=mapInitialize",
            document.body.appendChild(e)
        },
        m = function() {
            var i = h.render({
                name: t.resblockName
            }),
            n = new BMap.Label(i, {
                position: a,
                offset: new BMap.Size( - 30, -24)
            });
            n.setStyle({
                border: 0,
                backgroundColor: "transparent"
            }),
            e.addOverlay(n)
        },
        g = function(t, a, i) {
            var n = u.render({
                index: t,
                name: i
            }),
            o = new BMap.Label(n, {
                position: a.point,
                offset: new BMap.Size( - 17, -40)
            });
            o.setStyle({
                border: 0,
                backgroundColor: "transparent"
            }),
            o.addEventListener("click",
            function(t) {
                return $("#map .labelText").hide(),
                $(this.F).find("div").show(),
                !1
            }),
            e.addOverlay(o)
        },
        v = function() {
            var t = [a],
            i = d[c];
            e.clearOverlays(),
            m();
            for (var n = 0; n < i.length; n++) g(n, i[n], i[n].title),
            t.push(i[n].point);
            s.html(p.render({
                keyword: c,
                list: i
            })),
            e.setViewport(t),
            ("公交" == c || "地铁" == c) && ($("body").on("click", ".bus-one.bordered",
            function(t) {
                $("body .bus-one").removeClass("note-sel"),
                $(this).addClass("note-sel");
                var e = $(this).html(),
                a = this;
                b(e,
                function(t) {
                    var i = t.name,
                    n = i.substring(i.indexOf("(") + 1, i.indexOf(")")),
                    o = '<span class="note"><span class="note-name">' + e + "：</span>" + n + '</span><span class="note"><span class="note-name">首末班：</span>' + t.startTime + "-" + t.endTime + '</span><span class="note"><span class="note-name">起步票价：</span>' + t.Ce + '元</span><span class="nn-close">x</span class="nn-close">';
                    $(a).closest(".item").next().html(o),
                    $("body .busInfo").hide(),
                    $(a).closest("li").find(".busInfo").show()
                })
            }), $("body .busInfo").on("click", ".nn-close",
            function(t) {
                $(this).closest(".busInfo").hide(),
                $("body .bus-one").removeClass("note-sel")
            }))
        },
        b = function(t, e) {
            n.setGetBusListCompleteCallback(function(t) {
                var e = t.getBusListItem(0);
                n.getBusLine(e)
            }),
            n.setGetBusLineCompleteCallback(function(t) {
                e(t)
            }),
            n.getBusList(t)
        };
        o.on("click", ".zoom-ctrl",
        function() {
            $(this).hasClass("zoom-plus") ? e.zoomIn() : e.zoomOut()
        }),
        $(document).click(function(t) {
            $(t.target).closest("#map").length || $("#map .labelText").hide()
        });
        var y = $(".around .map");
        y.on("mouseover", ".item",
        function(t) {
            var e = $(this),
            a = e.html();
            $(".around .list i").each(function(t, e) {
                $(this).html() == a && $(this).parent().addClass("ihover")
            })
        }),
        y.on("mouseout", ".item",
        function(t) {
            $(".around .list li").removeClass("ihover")
        }),
        y.on("click", ".item",
        function(t) {
            $("body .busInfo").hide(),
            $("body .bus-one").removeClass("note-sel");
            for (var e = $(this).parent().index() - 1, a = 0, i = 0; e > i; i++) {
                var n = $(".around .list .ul-box li").eq(i).height() + 22;
                a += n
            }
            $(".around .list .ul-box li").eq(e).addClass("ihover"),
            $(".around .list .ul-box").scrollTop(a)
        }),
        $("body").on("click", ".back-map",
        function(i) {
            a = new BMap.Point(t.longitude, t.latitude),
            e.centerAndZoom(a, 15)
        }),
        s.delegate("li", "click",
        function() {
            var t = $(this),
            a = t.data("index");
            e.setViewport([d[c][a].point])
        }),
        r.on("click",
        function() {
            var t = $(this),
            e = t.data("key");
            t.hasClass("select") || (t.parent().find(".select").removeClass("select"), t.addClass("select"), c = e ? e: t.html(), d[c] ? v() : i.searchNearby(c, a, l))
        }),
        f(t.ak),
        window.mapInitialize = function() {
            a = new BMap.Point(t.longitude, t.latitude),
            e = new BMap.Map("map"),
            e.centerAndZoom(a, 15),
            m(),
            i = new BMap.LocalSearch(e),
            n = new BMap.BusLineSearch(e),
            i.setSearchCompleteCallback(function(t) {
                var e = [];
                if (i.getStatus() == BMAP_STATUS_SUCCESS) for (var a = 0; a < t.getCurrentNumPois(); a++) e.push(t.getPoi(a));
                d[c] = e,
                v()
            }),
            r.first().trigger("click")
        }
    }
}),
define("xinfang/detail/dragmap",
function() {
    var t, e, a = $('[data-role="buildinfo-dragimg-container"]'),
    i = $('[data-role="buildinfo-dragimg-img"]'),
    n = $('[data-role="buildinfo-dragimg-dragwrap"]'),
    o = !1;
    n.on("mousedown",
    function(a) {
        a.preventDefault(),
        o = !0,
        t = a.pageX,
        e = a.pageY
    }).on("mouseleave",
    function(t) {
        t.preventDefault(),
        o = !1
    }).on("mousemove",
    function(l) {
        if (l.preventDefault(), o) {
            var r = parseInt(n.css("left")) + (l.pageX - t),
            s = parseInt(n.css("top")) + (l.pageY - e);
            r = Math.min(r, 0),
            s = Math.min(s, 0),
            r = Math.max(r, -(i.width() - a.width())),
            s = Math.max(s, -(i.height() - a.height())),
            n.css({
                left: r + "px",
                top: s + "px"
            }),
            t = l.pageX,
            e = l.pageY
        }
    }),
    $("body").on("mouseup",
    function(t) {
        t.preventDefault(),
        o = !1
    })
}),
define("xinfang/detail/detail",
function(require, t) {
    function i(t) {
        n.init();
        var i = new v({
            el: "#matchBar",
            template: $.template($("#favBarTpl").html()),
            cityList: t.cityList
        });
        m(!1),
        r.init({
            matchBar: i
        })
    }
    var n = require("xinfang/detail/price"),
    /*
    o = require("xinfang/detail/details"),
    l = require("xinfang/detail/tab"),
    r = require("xinfang/detail/houseonline"),
    s = require("xinfang/detail/userComment"),
    c = require("xinfang/detail/buildpush"),
    d = require("xinfang/detail/info"),
    u = require("xinfang/detail/deter"),
    h = require("xinfang/detail/buildinfo"),
    p = require("xinfang/detail/buildinfo2"),
    f = require("xinfang/detail/banner"),
    m = require("xinfang/list/search"),
    g = require("xinfang/detail/mapLayer"),
    v = require("user/home/matchBar"),
    b = require("xinfang/detail/newDetailMap");
    return require("xinfang/detail/dragmap"),
    t = {
        init: i
    }
});*/