!
function(i) {
    function e(i) {
        if (document.cookie.length > 0) {
            var e = document.cookie.indexOf(i + "=");
            if ( - 1 != e) {
                e = e + i.length + 1;
                var n = document.cookie.indexOf(";", e);
                return - 1 == n && (n = document.cookie.length),
                decodeURIComponent(document.cookie.substring(e, n))
            }
        }
        return ""
    }
    if (void 0 === window.$ULOG) {
        var n = {
            add: function(i, e, n) {
                i.addEventListener ? i.addEventListener(e, n, !1) : i.attachEvent ? i.attachEvent("on" + e, n) : null === i["on" + e] && (i["on" + e] = n)
            },
            remove: function(i, e, n) {
                i.removeEventListener ? i.removeEventListener(e, n, !1) : i.dispatchEvent ? i.detachEvent("on" + e, n) : i["on" + e] = null
            }
        },
        d = {
            send: function(i) {
                var e = new Image,
                n = "http://dig.lianjia.com/t.gif",
                d = [];
                try {
                    i = encodeURIComponent(JSON.stringify(i))
                } catch(a) {}
                i && (d.push("r=" + +new Date), d.push("d=" + i)),
                n += "?" + d.join("&"),
                e.onload = e.onerror = function() {
                    e = null
                },
                e.src = n
            }
        };
        d.send({
            pid: i.pid,
            key: window.location.href,
            uuid: e("lianjia_uuid"),
            ssid: e("lianjia_ssid"),
            uid: i.uid,
            cid: i.cid,
            f: document.referrer || "",
            evt: "1,3"
        });
        var a = +new Date;
        n.add(window, "beforeunload",
        function() {
            var n = Math.round(( + new Date - a) / 1e3);
            d.send({
                pid: i.pid,
                key: window.location.href,
                uuid: e("lianjia_uuid"),
                ssid: e("lianjia_ssid"),
                stt: n,
                evt: "2"
            })
        }),
        window.$ULOG = {
            send: function(n, t) {
                t = t || {},
                t.evt = n + "";
                var o = {};
                for (var u in i) i.hasOwnProperty(u) && (o[u] = i[u]);
                for (var s in t) t.hasOwnProperty(s) && (o[s] = t[s]);
                switch (t.evt) {
                case "1":
                    d.send({
                        pid:
                        o.pid,
                        key: o.key || window.location.href,
                        uuid: o.uuid || e("lianjia_uuid"),
                        ssid: o.ssid || e("lianjia_ssid"),
                        uid: o.uid,
                        cid: o.cid,
                        evt: "1"
                    });
                    break;
                case "2":
                    var r = Math.round(( + new Date - a) / 1e3);
                    d.send({
                        pid: o.pid,
                        key: o.key || window.location.href,
                        uuid: o.uuid || e("lianjia_uuid"),
                        ssid: o.ssid || e("lianjia_ssid"),
                        stt: o.stt || r,
                        evt: "2"
                    });
                    break;
                case "3":
                    d.send({
                        pid:
                        o.pid,
                        key: o.key || window.location.href,
                        uuid: o.uuid || e("lianjia_uuid"),
                        ssid: o.ssid || e("lianjia_ssid"),
                        cid: o.cid,
                        f: o.f || document.referrer || "",
                        evt: "3"
                    });
                    break;
                case "4":
                    break;
                case "1,3":
                    d.send({
                        pid:
                        o.pid,
                        key: o.key || window.location.href,
                        uuid: o.uuid || e("lianjia_uuid"),
                        ssid: o.ssid || e("lianjia_ssid"),
                        uid: o.uid,
                        cid: o.cid,
                        f: o.f || document.referrer || "",
                        evt: "1,3"
                    });
                    break;
                default:
                    e("lianjia_uuid") && (t.uuid = e("lianjia_uuid")),
                    e("lianjia_ssid") && (t.ssid = e("lianjia_ssid")),
                    d.send(t)
                }
            },
            update: function(e) {
                for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n])
            }
        }
    }
} (window.__UDL_CONFIG || {});