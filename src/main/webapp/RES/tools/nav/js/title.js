function g(o) {
    return document.getElementById(o);
}

function hoverli(a, b, c, d) {
    for (var i = 1; i <= b; i++) {
        g(c + i).className = 'tip' + i;
        g(d + i).className = 'undis';
    }
    g(c + a).className = 'hovertip tip' + a;
    if (d == "phcontent") {
        g(d + a).className = 'lipic dis';
    } else {
        g(d + a).className = 'dis';
    }
}

function showDiv(a) {
    var b = g(a);
    b.style.display = "block";
}

function hideDiv(a) {
    var b = g(a);
    b.style.display = "none";
}

function hoversort(a) {
    if (g('other' + a).className == 'dis') {
        g('area' + a).className = 'area';
        g('ctl' + a).className = 'ctl';
        g('other' + a).className = 'undis';
        g('smore' + a).innerHTML = '更多▼';
    } else {
        g('area' + a).className = 'area bg1';
        g('ctl' + a).className = 'ctl bg2';
        g('other' + a).className = 'dis';
        g('smore' + a).innerHTML = '关闭▲';
    }
    if (g('other1').className == 'dis' && g('other2').className == 'dis') {
        g('sort1').className = 'sort space';
    } else {
        g('sort1').className = 'sort';
    }
}

function hovernav() {
    if (g('nav').className == 'dis') {
        g('nav').className = 'undis';
        g('navline').className = 'navclose navopen';
    } else {
        g('nav').className = 'dis';
        g('navline').className = 'navclose';
    }
}

function addBookmark(title, url) {
    if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else if (document.all) {
        window.external.AddFavorite(url, title);
    } else if (window.opera && window.print) {
        return true;
    }
}

function mobile(f) {
    try {
        if (document.getElementById("bdmark") != null) {
            return
        }
        var b = false;
        if (arguments[1]) {
            var e = window.location.host;
            var a = window.location.href;
            if (isSubdomain(arguments[1], e) == 1) {
                f = f + "/#m/" + a;
                b = true
            } else {
                if (isSubdomain(arguments[1], e) == 2) {
                    f = f + "/#m/" + a;
                    b = true
                } else {
                    f = a;
                    b = false
                }
            }
        } else {
            b = true
        }
        if (b) {
            var c = window.location.hash;
            if (!c.match("fromapp")) {
                if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
                    location.replace(f)
                }
            }
        }
    } catch(d) {}
}

function isSubdomain(c, d) {
    this.getdomain = function(f) {
        var e = f.indexOf("://");
        if (e > 0) {
            var h = f.substr(e + 3)
        } else {
            var h = f
        }
        var g = /^www\./;
        if (g.test(h)) {
            h = h.substr(4)
        }
        return h
    };
    if (c == d) {
        return 1
    } else {
        var c = this.getdomain(c);
        var b = this.getdomain(d);
        if (c == b) {
            return 1
        } else {
            c = c.replace(".", "\\.");
            var a = new RegExp("\\." + c + "$");
            if (b.match(a)) {
                return 2
            } else {
                return 0
            }
        }
    }
};

var _hmt = _hmt || []; (function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?8d806bbec8ab9ba5235e121c05e3154a";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();