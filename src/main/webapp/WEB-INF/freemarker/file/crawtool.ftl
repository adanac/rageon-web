<!DOCTYPE html>
<html>
<head>
    <title>dom4j</title>
    <meta charset="UTF-8">
    <#include "../../common/head.ftl">
</head>
<style>
			body{
				font-size:14px;
				line-height: 25px;
				background: #fff;
			}
			
			ul{
				list-style: none outside none;
			}
			
			input{
				padding: 10px;
				margin: 10px;
				width: 300px;
				font-size:14px;
				border: 1px solid #CCC;
			}

			#element{
				width: 100px;
			}
			
			#interval{
				width: 30px;
			}
			
			#start,#stop{
				padding: 8px;
				margin: 10px;
				width: 100px;
				font-size:14px;
				background: #303030;
				color: #CCC;
			}
			
			#msg{
				padding: 5px;
				margin: 10px;
				display: none;
			}
			
			.item{
				background: #E3E3E3;
				padding: 10px;
				margin: 10px;
				font-size: 14px;
				font-family: Arial;
			}
			
			a{
				text-decoration: none;
			}
			
			header{
				margin:20px;
				padding: 0;
			}
			
			h1,h2,h3{
				font-size:14px;
				font-family: Arial;
			}
		</style>
<body>
    	<div style="float:left"><input type="text" id="url" value="http://www.gbin1.com/portfolio/lastest.html"/></div>
		<div style="float:left"><input type="text" id="element" value=".includeitem"/></div>
		<div style="float:left"><input type="text" id="interval" value="30"/></div>
		<div style="float:left"><input type="button" id="start" value="开始抓取"/></div><div style="float:left"><input type="button" id="stop" value="暂停抓取"/></div><div style="float:left" id="msg"></div>
		<div style="clear:both"></div>
		<div id="content"></div>
		
    <script type="text/javascript">
			$(document).ready(function(){
				var url, element, interval, runid;
				$('#start').click(function(){
					url = $('#url').val();
					element = $('#element').val();
					interval = $('#interval').val();				
					
					$('#msg').html('请耐心等待, 页面抓取中 ...').fadeIn(400);
					$('#content').load('${base}/file/procraw.do', {
						url:url, elem:element
						}, function(){
							$('#msg').html('抓取已完成').delay(1500).fadeOut(400);
					});					
					
					runid = setInterval(
					function getInfo(){
						$('#msg').html('请耐心等待, 页面抓取中 ...').fadeIn(400);
						//$('#content').html('');
						$('#content').load('${base}/file/procraw.do',
							{url:url, elem:element},
							function(){
								$('#msg').html('抓取已完成').delay(1500).fadeOut(400);
						});
					}, interval*1000);
				});
				
				$('#stop').click(function(){
					$('#msg').html('抓取已暂停').fadeIn(400).delay(1500);
					clearInterval(runid);
				});
				
			});
		</script>
</body>
</html>


