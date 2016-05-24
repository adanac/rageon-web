<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
	<title>rageon</title>
	<link href="${resRoot }/tools/nav/css/site.css" rel="stylesheet"
		type="text/css" />
	<link href="${resRoot }/tools/nav/css/index.css" rel="stylesheet"
		type="text/css" />
	
	<script src='${resRoot }/tools/nav/js/title.js' type='text/javascript'></script>
	<script>
		var basePath = "${base}";// 根目录
		var resRoot = "${resRoot}";
	</script>
</head>

<body>
	<div id="main">
		<div id="mainright">
			<div class="blueleft"></div>
			<div class="blueright">
				<div class="tip">
					<ul>
						<li id="tj1" class="hovertip"
							onmouseover="hoverli(1,2,'tj','tjcontent');"><a
							href="${base}/index2.do">首页</a></li>
						<li id="tj2" class="hovertip"
							onmouseover="hoverli(2,2,'tj','tjcontent');"><a
							href="/famous/">格式化工具</a></li>
						<li id="tj3" class="tip2"
							onmouseover="hoverli(3,2,'tj','tjcontent');"><a
							href="/recommend/">前端demo</a></li>
					</ul>
				</div>
			</div>
			<div class="blueborder">
				<div id="preview">
					<div id="tjcontent1">
						<div>
							<ul>
								<li class="gj">
									<a href="/asia/korea/">[韩国]
										<span><img alt="" src="${resRoot}/tools/nav/images/loader.gif"></span></a>
								</li>

								<li>
									<a href="#">NAVER</a>
								</li>

							</ul>
						</div>
						<div class="bg1">
							<ul>
								<li class="gj"><a href="/asia/japan/">[日本]</a></li>

								<li><a href="/asia/japan/culture/200711/128.html"
									name="日本之窗"
									img="">日本之窗</a></li>

							</ul>
						</div>
					</div>
					<div id="tjcontent2" class="dis">
						<div>
							<ul>
								<li>
									<a class="linkblue" href="/europe/england/">select2</a>
								</li>
							</ul>
						</div>
						<div class="bg1">
							<ul>
								<li>
									<a class="linkblue" href="/north-america/america/">[美国]</a>
								</li>
								<li><a class="linkblue" href="/europe/russia/">[俄罗斯]</a></li>
							</ul>
						</div>
					</div>
					<div id="tjcontent3" class="dis">
						<div>
							<ul>
								<li>
									<a class="linkblue" href="/europe/england/">select2</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="cleardiv"></div>
		</div>
	</div>
</body>

</html>
