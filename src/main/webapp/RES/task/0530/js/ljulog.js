// lianjia ulog
(function (hostname) {
    var dateFormater = function (date) {
        var year  = date.getFullYear() + '',
            month = date.getMonth() + 1 + '',
            day   = date.getDate() + '';

        month = ((month.length === 1) ? ('0' + month) : (month));
        day = ((day.length === 1) ? ('0' + day) : (day));

        return (year + month + day);
    };
    var pid = '';
    switch (hostname) {
        case 'user.lianjia.com' :
            pid = 'user';
            break;

        case 'agent.lianjia.com' :
            pid = 'agent';
            break;

        case 'page.lianjia.com' :
            pid = 'page';
            break;

        case 'm.bianque.link.lianjia.com' :
            pid = 'linkappm';
            break;

        default :
            if (hostname.match(/^(us|ca|uk|au).lianjia.com/g) !== null) {
                pid = 'overseas';
            } else if (hostname.match(/^\d+.dianpu.lianjia.com/g) !== null) {
                pid = 'dianpu';
            } else if (hostname.match(/^(bj|sh|gz|sz|tj|cd|nj|hz|qd|dl|xm|wh|cq|cs|xa|jn|sjz).fang.lianjia.com/g) !== null) {
                pid = 'xinfang';
            } else if (hostname.match(/^m.lianjia.com/g) !== null) {
                pid = 'lianjiamweb';
            } else if (hostname.match(/^(bj|sh|gz|sz|tj|cd|nj|hz|qd|dl|xm|wh|cq|cs|xa|jn|sjz).lianjia.com/g) !== null) {
                pid = 'lianjiaweb';
            }
            break;
    }

    if (pid) {
        window.__UDL_CONFIG = window.__UDL_CONFIG || {};
        window.__UDL_CONFIG.pid = window.__UDL_CONFIG.pid || pid;
    }

    var ulogScript = document.createElement('script');
    ulogScript.src = 'http://dig.lianjia.com/lianjiaUlog.js?t=' + (dateFormater(new Date()));
    document.getElementsByTagName('head')[0].appendChild(ulogScript);

    if(window.$ && $.ajax && pid) {
        $(document).on('click', '[data-lj_dianji]', function() {
            var ids = ($(this).data('lj_dianji') + '').split(" ");

            for(var inx = 0, len = ids.length; inx < len; inx++) {
                try {
                    $ULOG.send(
                        ids[inx],
                        {
                            "pid": pid,
                            "key": window.location.href
                        }
                    );
                } catch (e) {

                }
            }
        });
    }

})(window.location.hostname);