<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
    <meta charset="UTF-8" />
    <title>导入</title>
    <#include "../../common/head.ftl">
    <#include "../../common/bootstrap.ftl">
    <!-- 兼容ie -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>

<body class="page-header-fixed page-quick-sidebar-over-content page-sidebar-closed-hide-logo">
                <div class="row">
                    <div class="col-md-12">
                        <div class="portlet box blue">
                            <div class="portlet-title">
                                <div class="actions">
                                    <a href="javascript:;" class="btn btn-default btn-sm btn-import">
                                        <i class="fa fa-upload"></i>
			批量导入
                                    </a>

                                    <a href="${resRoot}/sfunc/excel/importEmp.xls" class="btn btn-default btn-sm"><i class="fa fa-download"></i>下载模板
                                     </a>

                                   <a href="javascript:void(0)" class="btn btn-default btn-sm btn-export" id="exportUser">
                                        <i class="fa fa-download"></i>
                                        批量导出
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    <!--用户批量导入layer弹层-->
    <form id="fileupload" name="fileuploadForm" action="${base}/excel/uploadExcel.do"  method="post" enctype="multipart/form-data">
    	文件名: <input type="text" name="fileName" />
            <input type="file" name="excelFile" />
            <input type="submit" value="上传文件 "/>
    </form>


	
    <script type="text/javascript" src="${resRoot}/sfunc/excel/exportIn.js" ></script>
    <script type="text/javascript" src="${resRoot}/sfunc/excel/exportOut.js" ></script>
    <script>
    
	var isIE = /msie/i.test(navigator.userAgent) && !window.opera; 
		
    jQuery(document).ready(function() {

        //获取cookie中值
        var getPage = $.getNowCookie("UserList").zhi;
        
        //如果cookie中没有getPage的值(表格没有数据)，则导出按钮置灰
        if(getPage=='null'){
            $(".btn-export").attr("disabled",true);
        }else{
            $(".btn-export").attr("disabled",false);
        }
        
        //用户批量导入弹框
        $('.btn-import').on('click', function(event) {
            $payment_layer0 = layer.open({
                type: 1,
                title: '用户批量导入',
                closeBtn: 1,
                area: '600px',
                shadeClose: true,
                content: $('#payment_layer0')
            });
            $('.error-tip').show().hide();
            event.preventDefault();
        });
        //用户批量导入弹框取消
        $('#payment_layer0 .close_payment_layer').on('click', function(event) {
            layer.close($payment_layer0);
             $('input[id=excelFile]').val('');                                            //高版本浏览器文本框值清空
            $('input[id=excelFile]').replaceWith($('input[id=excelFile]').clone(true));   //兼容ie的上传文件文本框的去值方法
            $('.error-tip').hide();
            event.preventDefault();
        });
        //用户批量导入弹框确定
        $('#payment_layer0 .ok-btn').on('click', function(event) {
            if($('input[id=excelFile]').val()!=''){  
                layer.close($payment_layer0);
                $('input[id=excelFile]').val('');                                             //高版本浏览器文本框值清空
                $('input[id=excelFile]').replaceWith($('input[id=excelFile]').clone(true));   //兼容ie的上传文件文本框的去值方法
                $('.error-tip').hide();
                event.preventDefault();
            }else{
                $('.error-tip').show().text('请上传xls或xlsx格式文件！');
            }
        });
    });
    
    </script>
</body>

</html>
