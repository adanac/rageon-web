<!DOCTYPE html>
<html>
<head>
    <title>Card info</title>
    <meta charset="UTF-8">
    <#include "../../common/head.ftl">
    </head>
<body>
    <input id="username" type="text" placeholder="username">
    <input id="pwd" type="text" placeholder="pwd">
    <input id="age" type="text" placeholder="age">
    <input id="insertDB" type="button" value="插入DB">
    <input id="queryDB" type="button" value="查询DB">
    <input id="queryName" type="button" value="匹配用户名"><br/>
    <input id="username1" type="text" placeholder="username1">
    <input id="username2" type="text" placeholder="username2">
    <input id="queryIn" type="button" value="查询语句IN">
    <div id="res_content" style="display:none"></div>
</body>
<script src="${resRoot}/sql/sql.js" type="text/javascript"></script>

<script type="text/javascript">
	$(function(){
		$("#insertDB").click(function(){
			insert2db();
		});
		$('#queryDB').click(function(){
			query4db();
		});
		$('#queryName').click(function(){
			queryNameList();
		});
		$('#queryIn').click(function(){
			queryIn();
		});
	});
	
	
</script>
</html>


