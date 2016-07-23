<!DOCTYPE html>
<html>
<head>
    <title>Card info</title>
    <meta charset="UTF-8">
    <#include "../../common/head.ftl">
    </head>
<body>
    <input id="username" type="text" placeholder="username">
    <div id="res_content" style="display:none"></div>
</body>
<script src="${resRoot}/module/mq.js" type="text/javascript"></script>

<script type="text/javascript">
	$(function(){
		$("#username").click(function(){
			exemq();
		});
	});
	
	
</script>
</html>


