<!DOCTYPE html>
<html>
<head>
    <title>Card info</title>
    <meta charset="UTF-8">
    <#include "../../common/head.ftl">

    </head>
<body>
    <input id="cardno" type="text" placeholder="cardno">
    <input id="cardname" type="text" placeholder="name">
    <input id="cardBtn" type="button" value="查询"><br/>
    <div id="query_content" style="display:none"></div>
</body>
<script src="${resRoot}/sfunc/card.js" type="text/javascript"></script>

<script type="text/javascript">
	$(function(){
		$("#cardBtn").click(function(){
			CardQuery();
		});
		
	});
</script>
</html>


