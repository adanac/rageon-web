var basePath = '${base}';

/**
 * 弹出导入窗口
 */ 

//导入模板
function upload(){
	var file = $("#excelFile").val();
	if(file==null || "" == file)
	{
		$('.error-tip').show().text("请选择要上传的文件");
		$("#fileupload").submit(function(){   
		        return false;  
		});  
		return false;
	}else{
        $('.error-tip').show().hide();
    }

		//按钮不可用
		$("#upd").attr('disabled',true);//设置disabled属性为false，按钮可用
		var getTimestamp = new Date().getTime();


		$("#fileupload").ajaxSubmit({
            type:'post',
            dataType:"json",
            url: basePath + '/excel/uploadExcel.do?timestamp='+getTimestamp,
            success:function(result){
            	$("#upd").attr('disabled',false);//设置disabled属性为false，按钮可用
            	if(result.status == 1){
            		layer.msg('导入成功！', {
                        time: 1000 //2秒关闭（如果不配置，默认是3秒）
                    }, function() {
//                    	var url = "${base}/menberCenterUser/toUserPage.do";
//                		location.href = url;
                    	console.log('返回到首页')
                    });
            	}


            	if(result.status == 0){
            		layer.msg("导入失败:"+result.errorMsg);
            	}
            	if(result.status == 2){
            		layer.msg("文件中无内容，请先在模板中添加内容后再导入");
            	}

            	if(result.status == 3){
            		$('#err').html("");
            		$("#errInfo tr").remove();
            		$.each(result.content, function(i,str){
            			$("#errInfo").append("<tr><td>"+str+"</td></tr>");
            		});
            		$('#stack2').modal('show'); 
            	}
            	if(result.status == 5){
            		console.log("文件格式不正确,请选择xls格式的文件导入");
            	}
            	if(result.status == 6){
            		console.log("excel有效数据不能超过500行");
            	}
                //数据库操作失败时
            	if(result.status == 7){
            		$('#err3').html("");
            		$("#errInfo3 tr").remove();
            		$.each(result.content, function(i,str){
            			$("#errInfo3").append("<tr><td>"+str+"</td></tr>");
            		});
                    $('#stack3').modal('show'); 
            	}
            },
            error:function(XmlHttpRequest,textStatus,errorThrown){
            	layer.msg("导入出错");
            	$("#upd").attr('disabled',false);//设置disabled属性为false，按钮可用
            }
        });
} 