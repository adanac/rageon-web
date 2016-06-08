<!DOCTYPE html>
<html>
<head>
    <title>文件上传、下载</title>
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
		<script type="text/javascript" src="${resRoot}/file/upDown.js"></script>
<body>
	<input type="button" id="start" value="开始下载" />
	<input type="button" id="stop" value="暂停下载" />
		
    <script type="text/javascript">
			$(document).ready(function(){
				$('#start').click(function(){
					downFile();
				});
				
				$('#stop').click(function(){
					stopDownFile();
				});
				
			});
		</script>
</body>
</html>


