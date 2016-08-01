<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>select2</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <!-- 下拉菜单，可输入 -->
    <link rel="stylesheet" type="text/css" href="${resRoot}/front/bootstrap/bootstrap-select/bootstrap-select.min.css" />
    <link rel="stylesheet" type="text/css" href="${resRoot}/front/bootstrap/select2/select2.css" />
    <link rel="stylesheet" type="text/css" href="${resRoot}/front/bootstrap/jquery-multi-select/css/multi-select.css" />
    <script src="${resRoot}/common/js/jquery.min.js"></script>
   
</head>

<body>
<!-- 展示列表 begin -->
	<input type="text" id="keyid" />
	<input type="text" id="keyname" />
	<input type="text" id="msgId" />
	选择关键字:<input type="text" id="kid1" class="form-control" title='' >&nbsp;
	<input type="text" id="kid2" class="form-control" title='' value="6" ><br/>
	
	<input type="text" id="num"><br/>
	
	<input type="text" id="selectsq">
	<input type="text" id="divselectProduct" style="display:none;"><br/>
<!-- 展示列表 end -->

<!-- 编辑 begin -->
	<input type="text" id="selectsmod1" value="3">&nbsp;
	
	<input type="text" id="selectsmod2" value="3^5"><br/>
	
	<input name="test" type="hidden" id="userSelect1" style="width: 600px" value="上海^漳州" />&nbsp;
	<input name="test" type="hidden" id="userSelect2" style="width: 600px" value="6" />
	
<!-- 编辑 end -->
                                                            
    <!-- 下拉菜单，可输入 -->
    <script type="text/javascript" src="${resRoot}/front/bootstrap/bootstrap-select/bootstrap-select.min.js"></script>
    <script type="text/javascript" src="${resRoot}/front/bootstrap/select2/select2.min.js"></script>
    <script type="text/javascript" src="${resRoot}/front/bootstrap/jquery-multi-select/js/jquery.multi-select.js"></script>
    
    <script type="text/javascript" src="${resRoot}/front/select2/select2_my.js"></script>
    
    <script>
	    jQuery(document).ready(function() {
	    	//demo1
	    	$.message.initKeyWordDropdown();
	    	
	    	initDemo1();
	    	
	    	//demo2
	    	initDemo2();
	    	
	    	//demo3
	    	initDemo3();
	    	
	    	initDemo4();
	    	
	    	initDemo5();
	    	initDemo6();
	    
	    })
		    
    </script>
</body>
</html>