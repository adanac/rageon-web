<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
	<title>rageon</title>
<script type="text/javascript">
	$(document).ready(function() {
		$('.carousel').carousel({
			interval : 2000
		});

		$('.carousel').carousel('cycle');
		rePwLogin();
	});
	function rePwLogin(){
		var hider=$("#rePwLogin").val();
		if(hider!=null&&hider!=""){
			toLogin();
		}
		var loginFlag = $("#loginFlag").val();
		if(loginFlag!=null&&loginFlag!=""){
			toAdmin();
		}
	}
</script>
</head>

<body>
	<script>
		var basePath = "${base}";// 根目录
	</script>
	basePath
	hi,rageon
</body>

</html>
