<html lang="en">

<!--
*(c) Copyright 2011 Simone Masiero. Some Rights Reserved. 
*This work is licensed under a Creative Commons Attribution-Noncommercial-Share Alike 3.0 License
-->

<head>
<meta charset="utf-8">
<title>navigation</title>
<script type="text/javascript">
    function browserRedirect() {
        var e = navigator.userAgent.toLowerCase(),
        t = e.match(/iphone/i) == "iphone",
        n = e.match(/ipod/i) == "ipod",
        r = e.match(/ipad/i) == "ipad",
        i = e.match(/android/i) == "android",
        s = e.match(/windows phone/i) == "windows phone",
        o = e.match(/mqqbrowser/i) == "mqqbrowser",
        u = e.match(/mobile/i) == "mobile",
        a = e.match(/symbianos/i) == "symbianos";
        if (t || n || s || o || a || i && u) window.location.href = "http://s.61ertong.com/";
        else if (r || i && !u) window.location.href = "http://pad.61ertong.com/"
    }
    browserRedirect();
</script>
<link href="${resRoot }/tools/nav/css/2015style.css" rel="stylesheet"
	type="text/css" />
<script type="text/javascript">
    if (screen.width <= 1360) {
        document.write('<link type="text/css" rel="stylesheet" href="/statics/2015/css/2015style_1360.css">');
    }
</script>
<script src='${resRoot }/tools/nav/js/title.js' type='text/javascript'></script>
<!--  
<script src="http://dup.baidustatic.com/js/ds.js"></script>
-->
<script src="${resRoot }/tools/nav/js/ds.js"></script>
<script src="${resRoot }/tools/nav/js/jquery-1.5.1.min.js"></script>
<script src="${resRoot }/tools/nav/js/common.js"></script>
</head>

<body>
	<div class="nav">
		<ul>
			<li class="home" style="height: 50px; overflow: hidden;"><a
				href="http://www.61ertong.com/" target="_blank">首页</a></li>
			<li class="flash" style="height: 50px; overflow: hidden;"><a
				href="http://www.61ertong.com/flash/gequ/" target="_blank">儿歌视频</a>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/gequ/752_1.html"
						target="_blank">嘟拉儿歌(3D)</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/gequ/3D/list/f_546_1.html"
						target="_blank">3D儿歌视频</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gequ/cngequ/list/f_10_1.html"
						target="_blank">嘟拉儿歌</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gequ/guowai/list/f_11_1.html"
						target="_blank">英文儿歌</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gequ/landierge/list/f_780_1.html"
						target="_blank">蓝迪儿歌</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gequ/katonggequ/list/f_12_1.html"
						target="_blank">卡通金曲</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gequ/liuxing/list/f_14_1.html"
						target="_blank">流行音乐</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/gequ/mg/list/f_13_1.html"
						target="_blank">经典民歌</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/gequ/qita/list/f_15_1.html"
						target="_blank">其它歌曲</a>
				</p></li>
			<li class="wenxue" style="height: 50px; overflow: hidden;"><a
				href="http://www.61ertong.com/flash/gushi/" target="_blank">故事视频</a>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/gushi/789_1.html"
						target="_blank">嘟拉成语故事</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/gushi/763_1.html"
						target="_blank">嘟拉睡前故事</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/gushi/762_1.html"
						target="_blank">嘟拉动物故事</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/gushi/754_1.html"
						target="_blank">嘟拉益智故事</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/gushi/753_1.html"
						target="_blank">嘟拉童话故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gushi/chengyu/list/f_23_1.html"
						target="_blank">成语故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gushi/tonghuagushi/list/f_21_1.html"
						target="_blank">童话故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gushi/xiaogushi/list/f_19_1.html"
						target="_blank">小故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gushi/sanguo/list/f_22_1.html"
						target="_blank">三国故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gushi/deyugushi/list/f_279_1.html"
						target="_blank">德育故事</a>
				</p></li>
			<li class="pic" style="overflow: hidden; height: 50px;"><a
				href="http://www.61ertong.com/flash/zhishi/" target="_blank">幼儿教育</a>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/zhishi/751_1.html"
						target="_blank">十万个为什么</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/zhishi/750_1.html"
						target="_blank">嘟拉安全教育</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/zhishi/781_1.html"
						target="_blank">蓝迪安全教育</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/zhishi/782_1.html"
						target="_blank">蓝迪生活百科</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/zhishi/jiaoyu/list/f_25_1.html"
						target="_blank">教育百科</a>
				</p></li>
			<li class="movie" style="overflow: hidden; height: 50px;"><a
				href="http://www.61ertong.com/flash/xueyingyu/" target="_blank">儿童英语</a>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xueyingyu/786_1.html"
						target="_blank">嘟拉单词</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xueyingyu/16_1.html"
						target="_blank">学字母</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xueyingyu/44_1.html"
						target="_blank">英语口语</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xueyingyu/45_1.html"
						target="_blank">学音标</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xueyingyu/47_1.html"
						target="_blank">学单词</a>
				</p></li>
			<li class="meishi" style="overflow: hidden; height: 50px;"><a
				href="http://www.61ertong.com/flash/guoxue/" target="_blank">国学启蒙</a>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gushi/sanzijing/list/f_33_1.html"
						target="_blank">三字经</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gushi/gushi/list/f_27_1.html"
						target="_blank">古诗</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/flash/gushi/dizigui/list/f_651_1.html"
						target="_blank">弟子规</a>
				</p></li>
			<li class="wudao" style="height: 50px; overflow: hidden;"><a
				href="http://www.61ertong.com/flash/xiaoyouxi/" target="_blank">儿童游戏</a>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/749_1.html"
						target="_blank">嘟拉玩游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/17_1.html"
						target="_blank">装扮游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/35_1.html"
						target="_blank">填色游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/36_1.html"
						target="_blank">益智游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/37_1.html"
						target="_blank">动作游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/38_1.html"
						target="_blank">体育游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/235_1.html"
						target="_blank">双人游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/236_1.html"
						target="_blank">冒险游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/237_1.html"
						target="_blank">射击游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/159_1.html"
						target="_blank">拼图游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/158_1.html"
						target="_blank">棋牌游戏</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/flash/xiaoyouxi/39_1.html"
						target="_blank">其它游戏</a>
				</p></li>
			<li class="mp3" style="height: 50px; overflow: hidden;"><a
				href="http://www.61ertong.com/wenxue/" target="_blank">儿童读物</a>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/tonghuagushi/list_177_1.html"
						target="_blank">童话故事</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/wenxue/aiguogushi/list_189_1.html"
						target="_blank">爱国故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/chuanqigushi/list_190_1.html"
						target="_blank">传奇故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/diwanggushi/list_191_1.html"
						target="_blank">帝王故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/dongwugushi/list_192_1.html"
						target="_blank">动物故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/jingxiangushi/list_193_1.html"
						target="_blank">惊险故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/zhanzhenggushi/list_194_1.html"
						target="_blank">战争故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/ertongxiaoshuo/list_195_1.html"
						target="_blank">儿童小说</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/shangxiawuqiannian/list_196_1.html"
						target="_blank">上下五千年</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/mingrengushi/list_188_1.html"
						target="_blank">名人故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/xilashenhua/list_187_1.html"
						target="_blank">希腊神话</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/antushengtonghua/list_186_1.html"
						target="_blank">安徒生童话</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/shuiqiangushi/list_178_1.html"
						target="_blank">睡前故事</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/wenxue/yizhigushi/list_179_1.html"
						target="_blank">益智故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/minjiangushi/list_180_1.html"
						target="_blank">民间故事</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/wenxue/yuyangushi/list_181_1.html"
						target="_blank">寓言故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/chengyugushi/list_182_1.html"
						target="_blank">成语故事</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/gelintonghua/list_183_1.html"
						target="_blank">格林童话</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/yiqianlingyiyegushi/list_184_1.html"
						target="_blank">一千零一夜</a>
				</p>
				<p class="subnav">
					<a
						href="http://www.61ertong.com/wenxue/zhengyuanjietonghua/list_185_1.html"
						target="_blank">郑渊洁童话</a>
				</p></li>
			<li class="jiaoyu" style="overflow: hidden; height: 50px;"><a
				href="http://movie.61ertong.com/" target="_blank" title="动画片大全">动画片</a>
				<p class="subnav">
					<a href="http://movie.61ertong.com/list.html#type:1,order:3"
						target="_blank">动画片排行</a>
				</p>
				<p class="subnav">
					<a href="http://movie.61ertong.com/comic/guochandongman/"
						target="_blank">国产动画片</a>
				</p>
				<p class="subnav">
					<a href="http://movie.61ertong.com/comic/rihandongman/"
						target="_blank">日韩动画片</a>
				</p>
				<p class="subnav">
					<a href="http://movie.61ertong.com/comic/oumeidongman/"
						target="_blank">欧美动画片</a>
				</p></li>
			<li class="blog" style="overflow: hidden; height: 50px;"><a><img
					src="http://www.61ertong.com/statics/2015/images/nav_more.gif">更多</a>
				<p class="subnav">
					<a href="http://wudao.61ertong.com/" target="_blank">儿童舞蹈</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/ertonghua/" target="_blank">儿童画画</a>
				</p>
				<p class="subnav">
					<a href="http://mp3.61ertong.com/" target="_blank">儿歌电台</a>
				</p>
				<p class="subnav">
					<a href="http://blog.61ertong.com/" target="_blank">儿童博客</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/zhili/" target="_blank">智力开发</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/jiaoyu/" target="_blank">早期教育</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/youeryuanjiaoan/" target="_blank">幼儿园教案</a>
				</p>
				<p class="subnav">
					<a href="http://xiaoxue.61ertong.com/" target="_blank">小学频道</a>
				</p>
				<p class="subnav">
					<a href="http://www.61ertong.com/about/contactus.html"
						target="_blank">版权合作</a>
				</p></li>
				<li class="blog" style="overflow: hidden; height: 50px;"><a><img
					src="http://www.61ertong.com/statics/2015/images/nav_more.gif">前端工具</a>
				<p class="subnav">
					<a href="http://tool.chinaz.com/Tools/JsFormat.aspx" target="_blank">js格式化</a>
				</p>
				</li>
		</ul>
	</div>
</body>
</html>