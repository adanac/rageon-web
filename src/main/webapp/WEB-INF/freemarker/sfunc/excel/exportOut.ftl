<html>
 <head>
  <title> 下载用户信息</title>
 </head>

 <body>
    <span>正在导出，请耐心等待...</span>
  	<input type="hidden"  id="userid"   value="${id}"/>
  	<input type="hidden"  id="username"  value="${userName}"/>
  
   <script type="text/javascript" src="${resRoot}/common/js/jquery.min.js"></script>

   <script>
   		 jQuery(document).ready(function() {
   		 	 var userid = $("#userid").val();
             var username = $("#username").val();
             window.location.href="${base}/excel/exportExcel.do?empCode="+userid+"&realName="+username;
   		 });
   </script>
 </body>
</html>