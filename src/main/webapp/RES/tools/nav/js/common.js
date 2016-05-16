function showRecord() {
    var e = '<div class="iframe_mask"><iframe frameborder="0" src="about:blank" style="background-color:#ffffff !important"></iframe></div><div class="saveinf">';
    if (navigator.cookieEnabled) {
        var t = document.cookie;
        if (getcookie("61gequ_playrecords") != "" && t.indexOf("61gequ_playrecords=") != -1 && t.indexOf("$|") != -1) {
            var n = t.indexOf("61gequ_playrecords=") + "61gequ_playrecords=".length,
            r = t.indexOf("$|", n),
            i = unescape(t.substring(n, r)),
            s = i.split("$"),
            o = new Array,
            u = new Array,
            a = new Array;
            if (s.length > 0) {
                for (var f = 0; f < s.length; f++) {
                    var l = s[f].split("^");
                    o[f] = l[0],
                    u[f] = l[2],
                    a[f] = l[1]
                }
                e += '<div class="close"><a href="javascript:void(0);" onclick="delAllPlayRecord();return false;" id="J_del_all">\u6e05\u7a7a\u8bb0\u5f55</a> | <a href="javascript:void(0);" id="J_close">\u5173\u95ed</a></div><ul class="save_list">';
                for (var f = o.length - 1; f >= 0; f--) {
                    var c = o[f].replace(/[^\x00-\xff]/g, "aa").length;
                    if (c <= titleLen * 2) texts = o[f];
                    else for (var h = titleLen; h < c; h++) {
                        texts = o[f].substr(0, h);
                        if (texts.replace(/[^\x00-\xff]/g, "aa").length >= titleLen * 2) {
                            texts += "...";
                            break
                        }
                    }
                    e += '<li class="item"><a class="fr del" href="javascript:void(0);" id="J_del_one" onclick="return false;"> </a><a href="' + u[f] + '" title="' + o[f] + '" class="look" target="_blank">' + texts + "</a></br>\u4e0a\u6b21\u4e8e" + a[f] + "\u89c2\u770b</li>"
                }
                e += "</ul></div>"
            } else e += '<span class="none_look">\u60a8\u6ca1\u6709\u89c2\u770b\u8fc7\u7684\u52a8\u753b\u7247</span></div>'
        } else e += '<span class="none_look">\u60a8\u6ca1\u6709\u89c2\u770b\u8fc7\u7684\u52a8\u753b\u7247</span></div>'
    } else e += '<span class="none_look">\u60a8\u7684\u6d4f\u89c8\u5668\u5173\u95ed\u4e86Cookie\u529f\u80fd\uff0c\u4e0d\u80fd\u4e3a\u60a8\u81ea\u52a8\u4fdd\u5b58\u6700\u8fd1\u6d4f\u89c8\u8fc7\u7684\u7f51\u9875\uff01</span></div>';
    $("#J_video_record").html(e)
}
function doPlayRecord(e, t, n) {
    if (navigator.cookieEnabled) {
        var r = document.title.split("-"),
        i = t != "" ? escape(t) : escape(r[0]),
        s = n != "" ? escape(n) : escape(location.pathname),
        o = i + "^",
        u = s + "$",
        a = new Date;
        a = a.format("MM\u6708dd\u65e5 hh\u65f6mm\u5206");
        var f = document.cookie;
        if (getcookie("61gequ_playrecords") != "") {
            var l = f.indexOf("61gequ_playrecords=") + "61gequ_playrecords=".length,
            c = f.indexOf("$|", l),
            h = unescape(f.substring(l, c)),
            p = h.split("$"),
            d = new Array,
            v = new Array,
            m = new Array;
            if (p.length > 0 && l > 0 && c > 0) {
                for (var g = 0; g < p.length; g++) {
                    var y = p[g].split("^");
                    d[g] = y[0],
                    v[g] = y[2],
                    m[g] = y[1]
                }
                if (e) {
                    var b = "";
                    if (p.length < recordCount) for (g in p) {
                        if (escape(d[g]) == i && escape(v[g]) == s) continue;
                        b += escape(d[g]) + "^" + escape(m[g]) + "^" + escape(v[g]) + "^$"
                    } else for (var g = 1; g < recordCount; g++) {
                        if (escape(d[g]) == i && escape(v[g]) == s) continue;
                        b += escape(d[g]) + "^" + escape(m[g]) + "^" + escape(v[g]) + "^$"
                    }
                    t != "" && n != "" ? document.cookie = "61gequ_playrecords=" + b + (b == "" ? "": "|") + edp: document.cookie = "61gequ_playrecords=" + b + o + escape(a) + "^" + u + "|" + edp
                }
            } else document.cookie = "61gequ_playrecords=" + o + escape(a) + "^" + u + "|" + edp
        } else document.cookie = "61gequ_playrecords=" + o + escape(a) + "^" + u + "|" + edp
    }
}
function delAllPlayRecord() {
    delcookie("61gequ_playrecords"),
    showRecord()
}
function getcookie(e) {
    var t = e + "=",
    n = t.length,
    r = document.cookie.length,
    i = 0;
    while (i < r) {
        var s = i + n;
        if (document.cookie.substring(i, s) == t) return getcookieval(s);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break
    }
    return null
}
function setcookie(e, t, n) {
    var r = setcookie.arguments.length,
    i = setcookie.arguments,
    s = r > 5 ? i[5] : !1,
    o = new Date;
    if (n == null || n == 0) n = 1;
    o.setTime(o.getTime() + 864e5 * n),
    document.cookie = e + "=" + escape(t) + ("; path=" + cookie_path) + (cookie_domain == "" ? "": "; domain=" + cookie_domain) + (s == 1 ? "; secure": "") + ";expires=" + o.toGMTString()
}
function delcookie(e) {
    var t = new Date;
    t.setTime(t.getTime() - 1);
    var n = getcookie(e);
    setcookie(e, "", -1)
}
function getcookieval(e) {
    var t = document.cookie.indexOf(";", e);
    return t == -1 && (t = document.cookie.length),
    unescape(document.cookie.substring(e, t))
}
function imgzoom(e, t) {
    return ! 1
}
function addfavor(e, t) {
    if (confirm("\u7f51\u7ad9\uff1a" + t + "\n\u7f51\u5740\uff1a" + e + "\n\u786e\u5b9a\u52a0\u5165\u6536\u85cf\u5417?")) {
        var n = navigator.userAgent.toLowerCase();
        if (n.indexOf("msie 8") > -1) external.AddToFavoritesBar(e, t, "");
        else try {
            window.external.addFavorite(e, t)
        } catch(r) {
            try {
                window.sidebar.addPanel(t, e, "")
            } catch(r) {
                alert("\u52a0\u5165\u6536\u85cf\u5931\u8d25\uff0c\u8bf7\u4f7f\u7528Ctrl+D\u8fdb\u884c\u6dfb\u52a0")
            }
        }
    }
    return ! 1
}
function dologin() {
    var e = $("input[name='fmdo']").val(),
    t = $("input[name='dopost']").val(),
    n = $("input[name='keeptime']").val(),
    r = $("input[name='userid']").val(),
    i = $("input[name='pwd']").val(),
    s = $("input[name='vdcode']").val();
    return $.ajax({
        type: "post",
        dataType: "json",
        url: "${base}/member/ajaxLogin.do",
        data: {
            fmdo: e,
            type: "ajax",
            dopost: t,
            keeptime: n,
            userid: r,
            pwd: i,
            vdcode: s
        },
        success: function(e, t) {
            return e.status == "6" || e.status == "10" ? ($(e.syn).insertAfter(".foot"), document.getElementById("_userlogin").innerHTML = "", CheckLoginAjax()) : alert(e.msg ? e.msg: "\u7cfb\u7edf\u7e41\u5fd9\uff01"),
            !1
        }
    }),
    !1
}
function dologout() {
    var e = "login",
    t = "exit";
    return $.ajax({
        type: "post",
        dataType: "json",
        url: "${base}/member/ajaxLogin.do",
        data: {
            fmdo: e,
            type: "ajax",
            dopost: t
        },
        success: function(e, t) {
            return e.status == "10" && ($(e.syn).insertAfter(".foot"), document.getElementById("_userlogin").innerHTML = "", CheckLoginAjax()),
            $("#_ajax_feedback").length > 0 && CommentCheckLogin(),
            !1
        }
    }),
    !1
}
function CheckLogin() {}
function CheckLoginAjax() {
    $.ajax({
        type: "GET",
        url: "${base}/member/ajaxLoginsta.do",
        success: function(e) {
            $("#_userlogin").html(e)
        },
        error: function(e, t, n) {}
    })
}
function initHeader() {
    CheckLoginAjax(),
    $(".nav a").click(function() {
        $(this).blur()
    }),
    $(".nav li").mouseover(function() {
        var e = $(this).children("p").length;
        $(this).stop().animate({
            height: 50 + e * 34
        },
        {
            queue: !1,
            duration: 600,
            easing: "easeOutElastic"
        })
    }),
    $(".nav li").mouseout(function() {
        $(this).stop().animate({
            height: "50px"
        },
        {
            queue: !1,
            duration: 600,
            easing: "easeOutBounce"
        })
    })
}
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeOutQuad: function(e, t, n, r, i) {
        return - r * (t /= i) * (t - 2) + n
    },
    easeOutElastic: function(e, t, n, r, i) {
        var s = 1.70158,
        o = 0,
        u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeOutBounce: function(e, t, n, r, i) {
        return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n: t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n: t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n: r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    }
}),
function(e) {
    e.fn.tzSelect = function(t) {
        return t = e.extend({
            render: function(t) {
                return e("<li>", {
                    html: t.text()
                })
            },
            className: ""
        },
        t),
        this.each(function() {
            var n = e(this),
            r = e("<div>", {
                width: n.outerWidth(),
                className: "tzSelect",
                html: '<div class="selectBox"></div>'
            }),
            i = e("<ul>", {
                className: "dropDown"
            }),
            s = r.find(".selectBox");
            t.className && i.addClass(t.className),
            n.find("option").each(function(r) {
                var o = e(this);
                r == n.attr("selectedIndex") && s.html(o.text());
                if (o.data("skip")) return ! 0;
                var u = t.render(o);
                u.click(function() {
                    return s.html(o.text()),
                    i.trigger("hide"),
                    n.val(o.val()),
                    !1
                }),
                i.append(u)
            }),
            r.append(i.hide()),
            n.hide().after(r),
            i.bind("show",
            function() {
                if (i.is(":animated")) return ! 1;
                s.addClass("expanded"),
                i.slideDown()
            }).bind("hide",
            function() {
                if (i.is(":animated")) return ! 1;
                s.removeClass("expanded"),
                i.slideUp()
            }).bind("toggle",
            function() {
                s.hasClass("expanded") ? i.trigger("hide") : i.trigger("show")
            }),
            s.click(function() {
                return i.trigger("toggle"),
                !1
            }),
            e(document).click(function() {
                i.trigger("hide")
            })
        })
    }
} (jQuery),
$(function() {
    function o(t) {
        var n = -t * e;
        $("#focus ul").stop(!0, !1).animate({
            left: n
        },
        300),
        $("#focus .btn span").stop(!0, !1).animate({
            opacity: "0.4"
        },
        300).eq(t).stop(!0, !1).animate({
            opacity: "1"
        },
        300)
    }
    var e = $("#focus").width(),
    t = $("#focus ul li").length,
    n = 0,
    r,
    i = "<div class='btnBg'></div><div class='btn'>";
    for (var s = 0; s < t; s++) i += "<span></span>";
    i += "</div><div class='preNext pre'></div><div class='preNext next'></div>",
    $("#focus").append(i),
    $("#focus .btnBg").css("opacity", .5),
    $("#focus .btn span").css("opacity", .4).mouseenter(function() {
        n = $("#focus .btn span").index(this),
        o(n)
    }).eq(0).trigger("mouseenter"),
    $("#focus .preNext").css("opacity", .2).hover(function() {
        $(this).stop(!0, !1).animate({
            opacity: "0.5"
        },
        300)
    },
    function() {
        $(this).stop(!0, !1).animate({
            opacity: "0.2"
        },
        300)
    }),
    $("#focus .pre").click(function() {
        n -= 1,
        n == -1 && (n = t - 1),
        o(n)
    }),
    $("#focus .next").click(function() {
        n += 1,
        n == t && (n = 0),
        o(n)
    }),
    $("#focus ul").css("width", e * t),
    $("#focus").hover(function() {
        clearInterval(r)
    },
    function() {
        r = setInterval(function() {
            o(n),
            n++,
            n == t && (n = 0)
        },
        4e3)
    }).trigger("mouseleave")
});
var cookie_domain = ".61ertong.com",
cookie_path = "/",
expTime = new Date((new Date).setDate((new Date).getDate() + 500)),
edp = "; path=" + cookie_path + (cookie_domain == "" ? "": "; domain=" + cookie_domain) + ";expires=" + expTime.toGMTString(),
recordCount = 20,
titleLen = 14;
$(document).ready(function() {
    var e = null,
    t = $(".play_save"),
    n = $(".save_layer");
    t.mouseover(function() {
        clearTimeout(e),
        showRecord(),
        n.show()
    }).mouseleave(function() {
        e = setTimeout(function() {
            n.hide()
        },
        500)
    }),
    n.mouseenter(function() {
        clearTimeout(e)
    }).mouseleave(function() {
        $(this).hide()
    }),
    $("#J_video_record").delegate("#J_close", "click",
    function() {
        $("#J_video_record").hide()
    }),
    $("#J_video_record").delegate("#J_del_one", "click",
    function() {
        doPlayRecord(1, $(this).parent().find(".look").attr("title"), $(this).parent().find(".look").attr("href")),
        showRecord()
    })
}),
Date.prototype.format = function(e) {
    var t = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    if (/(y+)/.test(e)) {
        e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var n in t)(new RegExp("(" + n + ")")).test(e) && (e = e.replace(RegExp.$1, RegExp.$1.length == 1 ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)))
    }
    return e
},
$(document).ready(function() {
    CheckLoginAjax(),
    $(".nav a").click(function() {
        $(this).blur()
    }),
    $(".nav li").mouseover(function() {
        var e = $(this).children("p").length;
        $(this).stop().animate({
            height: 50 + e * 34
        },
        {
            queue: !1,
            duration: 600,
            easing: "easeOutElastic"
        })
    }),
    $(".nav li").mouseout(function() {
        $(this).stop().animate({
            height: "50px"
        },
        {
            queue: !1,
            duration: 600,
            easing: "easeOutBounce"
        })
    }),
    $("select#field").tzSelect();
    if ($(".totalresult") && $("._total")) {
        $(".totalresult").html($("._total").html());
    }
});