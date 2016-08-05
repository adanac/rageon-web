<!DOCTYPE html>
<html lang="en" class="no-js">

<head>
    <meta charset="UTF-8" />
    <title>导入</title>
    <#include "../../common/head.ftl">
    <#include "../../common/bootstrap.ftl">
    <!-- 兼容ie -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 网页加载不放大 -->
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <style type="text/css">
    .page-content-wrapper .page-content {margin: 0;}
    th div {text-align: center;}   
    .layui-layer .layui-layer-title{height:55px;line-height:55px;background-color:#ffffff;color:#666666;}
    .layer_form.layui-layer-wrap{padding:0 15px;color:#666666;}
    .layer-bottom{border-top:1px solid #eeeeee;padding:13px;}
        
    /*优化上传文件样式*/
    .file_title{font-size:16px;margin-top:3px;}
    .input-import {margin: 0 60px 0 60px;}
    #excelFile {background: #ffffff;line-height: 22px;cursor:pointer;width:540px;}
    .error-tip{margin-top:10px;cursor:auto;color:#ffffff;background-color:#26a69a;padding:7px 14px;}
    .tip_block{font-size:13px;}
    .wordbreak{word-break:keep-all;/* 不换行 */
		text-overflow: ellipsis; /* for IE */  
	    -moz-text-overflow: ellipsis; /* for Firefox,mozilla */  
	    overflow: hidden;   
	    white-space: nowrap;
	 }
    </style>
</head>

<body class="page-header-fixed page-quick-sidebar-over-content page-sidebar-closed-hide-logo">
    <div class="page-container" style="margin-top:0">
        <div class="page-content-wrapper">
            <div class="page-content" style="margin-left: 0;">
                <div class="row">
                    <div class="col-md-12">
                        <div class="portlet box blue">
                            <div class="portlet-title">
                                <div class="actions">
                                    <a href="javascript:;" class="btn btn-default btn-sm btn-import">
                                        <i class="fa fa-upload"></i>
                                    </a>

                                    <a href="${resRoot}/sfunc/excel/importEmp.xls" class="btn btn-default btn-sm"><i class="fa fa-download"></i>下载模板
                                     </a>

                                   <a href="javascript:void(0)" class="btn btn-default btn-sm btn-export" id="exportUser">
                                        <i class="fa fa-download"></i>
                                        批量导出
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <!-- 表格开始 -->
                                <div id="sample_2_wrapper" class="dataTables_wrapper no-footer">
                                    <div class="table-scrollable">
                                        <!-- <table id="table" role="grid" aria-describedby="sample_2_info" class="table table-striped table-bordered table-hover dataTable no-footer ta_c product_list_table"> -->
                                        <table id="table" class="table table-striped table-bordered table-hover dataTable no-footer ta_c" style="table-layout: fixed;width: 100%;border:1px solid #ddd;">
                                            <!-- <thead>
                                                <tr>
                                                    <th data-width="80" data-field="username" data-align="center">工号</th>
                                                    <th data-width="80" data-field="realname" data-align="center">真实姓名</th>
                                                    <th data-width="80" data-field="position" data-align="center">职位</th>
                                                    <th data-width="80" data-field="phone" data-align="center">手机</th>
                                                    <th data-width="200" data-field="addr" data-align="center">地址</th>
                                                    <th data-width="170" data-field="operate" data-align="center">操作</th>
                                                </tr>
                                            </thead> -->
                                        </table>
                                    </div>
                                </div>
                                <!-- 表格结束 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--用户批量导入layer弹层-->
    <form id="fileupload" name="fileuploadForm" action="${base}/excel/uploadExcel.do"  method="post" enctype="multipart/form-data">
    <div id="payment_layer0" class="layer_form" style="display: none;font-size:14px;">
        <div class="row ta_l">
            <div class="col-md-12 ma_t5 ma_b5">
                <div class="file_title">请选择要上传的文件</div>
                <input type="file" id="excelFile" class="ma_b5" name="excelFile" title="请上传xls或xlsx格式文件" onchange="fileChange(this);"/>
                <span class="error-tip" style="display:none;">错误提示</span>
                <div class="tip_block">只支持xls或xlsx格式，请严格按照系统提供的参考模板上传xls或xlsx文件，否则可能会导入失败</div>
            </div>
            <div class="col-md-12 ta_r layer-bottom">
                <button class="btn default close_payment_layer" id="close">关闭</button>
                <button class="btn blue ok-btn" id="upd" onclick="upload();">确认导入</button>
            </div>
        </div>
    </div>
    </form>


    <script type="text/javascript" src="${resRoot}/sfunc/excel/exportIn.js" ></script>
    <script type="text/javascript" src="${resRoot}/sfunc/excel/exportOut.js" ></script>
    <script>
    
    var basePath = "${base}/menberCenterUser/";
  	
  	
	var queryParams = function (params){
		var temp = {
			limit: params.limit,  //页面大小
		    offset: params.offset, //页码
		    realName: $("#realName").val().trim(),
		    empCode: $("#empCode").val().trim()
		};
			return temp;
		};
		
		var isIE = /msie/i.test(navigator.userAgent) && !window.opera; 
		function fileChange(target,id) { 
			var fileSize = 0; 
			//var filetypes =[".txt",".xls",".xlsx"];
			var filetypes =[".xls",".xlsx"];
			var filepath = target.value; 
			var filemaxsize = 1024*5;//5M 
			if(filepath){ 
			var isnext = false; 
			var fileend = filepath.substring(filepath.indexOf(".")); 
			if(filetypes && filetypes.length>0){ 
				for(var i =0; i<filetypes.length;i++){ 
					if(filetypes[i]==fileend){ 
						isnext = true; 
						break; 
					} 
				}
			} 
			if(!isnext){ 
				layer.msg("不接受此文件类型（仅支持xls或xlsx格式文件）"); 
				target.value =""; 
				return false; 
			} 
			}else{ 
				return false; 
			} 
			if (isIE && !target.files) { 
				var filePath = target.value; 
				var fileSystem = new ActiveXObject("Scripting.FileSystemObject"); 
			if(!fileSystem.FileExists(filePath)){ 
				layer.msg("附件不存在，请重新输入"); 
				return false; 
			} 
			var file = fileSystem.GetFile (filePath); 
				fileSize = file.Size; 
			} else {
				fileSize = target.files[0].size; 
			}

			var size = fileSize / 1024; 
			if(size>filemaxsize){ 
				layer.msg("附件大小不能大于"+ 5 +"M,建议分批导入数据"); 
				target.value =""; 
				return false; 
			} 
			if(size<=0){ 
				layer.msg("附件大小不能为0M"); 
				target.value =""; 
				return false; 
			} 
		} 
		
		function queryUserList() {
		  	$("#table").bootstrapTable({
            url: basePath+"toListUserPage.do",
            queryParams: queryParams,//传递参数
            striped: true,      //是否显示行间隔色
			cache: false,      //是否使用缓存，默认为true
			pagination: true,     //是否显示分页
			sortable: false, //是否排序
			sidePagination: "server",//服务端分页
			pageNumber:1,      //初始化加载第一页，默认第一页
			pageSize: 5,      //每页的记录行数（*）
			pageList: [5, 10, 20],  //可供选择的每页的行数（*）
			columns: [{
                field: 'empCode',
                title: '工号',
                width:"60",
               	class: 'wordbreak',
                   formatter:function(value,row,index){
                	   empCode = "<abbr title="+row.empCode+" style=\"border-bottom: 0px dotted #777;cursor: context-menu;\">"+value+"</abbr>";
                 	  return empCode;
                   }
            }, {
                field: 'realName',
                title: '真实姓名',
                width:"80",
            	class: 'wordbreak',
                formatter:function(value,row,index){
                	position = "<abbr title="+row.realName+" style=\"border-bottom: 0px dotted #777;cursor: context-menu;\">"+value+"</abbr>";
              	  return position;
                }
            }, {
                field: 'position',
                title: '职位',
                width:"80",
            	class: 'wordbreak',
                formatter:function(value,row,index){
                	position = "<abbr title="+row.position+" style=\"border-bottom: 0px dotted #777;cursor: context-menu;\">"+value+"</abbr>";
              	  return position;
                }
            },
            {
                field: 'phone',
                title: '联系电话',
                width:"80"
            }, {
                field: 'addr',
                title: '地址',
                width:"140",
            	class: 'wordbreak',
                formatter:function(value,row,index){
              		addr = "<abbr title="+row.addr+" style=\"border-bottom: 0px dotted #777;cursor: context-menu;\">"+value+"</abbr>";
              	  return addr;
                }
            }, {
                field: 'empStatus',
                title: '状态',
                width:"60",
                formatter:function(value,row,index){
                	var empStatus = "";
	            	if(value == 0){
	            		empStatus ="<span class='btn btn-xs blue'>已启用</span>";
	            	}else if(value == 1){
	            		empStatus ="<span class='btn btn-xs red'>已停用</span>";
	            	}
           		 return empStatus;
                }
            },{
                title: '操作',
                field: 'empId',
                width:"140",
                formatter:function(value,row,index){
                  if(value!=1000){
                  var action= "<a href='javascript:toOperate(1,"+value+")' class='btn btn-xs blue btn-UserAdd' title='查看'><i class='fa fa-search'></i></a>"+
                  "<a class='btn btn-xs red' title='授权' href='javascript:toOperate(2,"+value+")'><i class='fa fa-download'></i></a>"+
                  "<a href='javascript:toOperate(4,"+value+")' class='btn btn-xs blue addOrg' title='行政机构'><i class='fa fa-university'></i></a>";
                  if(row.empStatus==0){
              		action=action+"<a href= 'javascript:modifyUserStatus(1,"+value+")' class='btn btn-xs yellow btn-oper' title='停用'><i class='fa fa-ban'></i></a>";
	              	}else{
	              		action=action+"<a href= 'javascript:modifyUserStatus(0,"+value+")' class='btn btn-xs yellow btn-oper' title='启用'><i class='fa fa-play'></i></a>";
	              	}
	                  action=action+"<a href= 'javascript:toOperate(3,"+value+")' class='btn btn-xs blue' title='编辑'><i class='fa fa-pencil'></i></a>"+
	                  "<a href='javascript:restUserPW("+row.userId+","+value+");' class='btn btn-xs red btn-resetPassd' title='重置密码'><i class='fa fa-undo'></i></a>";
	                  return action;  
	             }else{
	            	 return "<span class='btn btn-xs blue'>系统内置用户,无操作权限</span>";
	             }
                }	
            }] 
        	});
		}
		
		//操作
		function toOperate(operate,empId){
			//operate 1=查看,2=授权,3=编辑,4=行政机构
			if(operate==1){
				var url = basePath+"toViewUserPage.do?empId="+empId;
				window.location.href = url;
			}else if(operate==3){
				var url = basePath+"toEditUserPage.do?empId="+empId;
				window.location.href = url;
			}else if(operate==2){
				var url = basePath+"toAuthorizeUserPage.do?empId="+empId;
				window.location.href = url;
			}else if(operate==4){
				var url = basePath+"toInstitutionUserPage.do?empId="+empId;
				window.location.href = url;
			}else{
			
			}
	    }
		
		//更新用户状态
		function modifyUserStatus(status,empId) {
			
			//$("#save").attr("disabled", "disabled");
			var alert="";
			if(status==0){
				alert = '是否启用？';
			}else{
				alert = '是否停用？';
			}
			layer.confirm(
			alert,
			['确认','取消'],
			function(){
				layer.closeAll(); 
				var param = new Object();
				param.empId = empId;
				param.status = status;
				
				$.ajax({
					type : "POST",
					url : basePath + "modifyUserStatus.do",
					data : param,
					dataType : "json",
					success : function(data) {
						if (data.status == 1) {
							layer.msg('操作成功！', {
	                            time: 2000 //2秒关闭（如果不配置，默认是3秒）
	                        }, function() {
	                        	$('#table').bootstrapTable('refresh')
	                        });
						} else {
							layer.msg(data.errorMsg);
						}
					}
				});
			},
			function(){
				layer.closeAll(); 
			} 
		);
			
			
		}
		
		//重置用户密码
		function restUserPW(userId,empId) {
			
			//$("#save").attr("disabled", "disabled");
			
			layer.confirm(
			'是否重置选中行密码？',
			['确认','取消'],
			function(){
				layer.closeAll(); 
				var param = new Object();
				param.userId = userId;
				param.empId = empId;
				
				$.ajax({
					type : "POST",
					url : basePath + "toRestUserPW.do",
					data : param,
					dataType : "json",
					success : function(data) {
						if (data.status == 1) {
							layer.msg('操作成功！', {
	                            time: 2000 //2秒关闭（如果不配置，默认是3秒）
	                        }, function() {
	                        	//$('#table').bootstrapTable('refresh')
	                        });
						} else {
							layer.msg(data.errorMsg);
						}
					}
				});
			},
			function(){
				layer.closeAll(); 
			} 
		);
		}
		
    jQuery(document).ready(function() {
    	
    	queryUserList();
        
        new validation($(".text-input"), $(".btn-search"), {}, function() {
        	queryByCon();
        });

        Metronic.init(); // init metronic core components
        Layout.init(); // init current layout
        QuickSidebar.init(); // init quick sidebar
        var asse = new assembly();

        //最大字数限制控件
        $('*[maxlength]').maxlength({
            alwaysShow: true,
            limitReachedClass: "label label-danger",
        });

        //清空条件
        /*asse.checkAll({
            target: $(".btn-reset"),
            valueNull: $(".value-null")
        }, 1);*/
        $(".btn-warning").on("click", function(){
            $(".value-null").val("");
            $(".formError").remove();
        });
 
        //获取cookie中值
        var getPage = $.getNowCookie("UserList").zhi;
        
        
        //如果cookie中没有getPage的值(表格没有数据)，则导出按钮置灰
        if(getPage=='null'){
            $(".btn-export").attr("disabled",true);
        }else{
            $(".btn-export").attr("disabled",false);
        }
        
        //将上传的文件名传给文本框，校验文件后缀名并清空文本框
        /* $('input[id=excelFile]').change(function() {
            var fileName = $(this).val(); 
            //alert(fileName);
            var fileType=fileName.substring(fileName.lastIndexOf("."),fileName.length);  
            fileType=fileType.toLowerCase();
            if (fileType!='.xls' && fileType!='.xlsx'){  
                $(this).next('.error-tip').show().text('请上传xls或xlsx格式文件！');
                $(this).val('');                            //高版本浏览器文本框值清空
                $(this).replaceWith($(this).clone(true));   //兼容ie9及以下的上传文件文本框的去值方法
            }else{
                $(this).next('.error-tip').hide();
            }  
 
        }); */
    
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
    
    //查询事件
    function queryByCon(){
        var empCode=$("#empCode").val();
        var realName=$("#realName").val();
        //将条件存储于隐藏input
        var empCodeHid=$("#empCodeHid").val(empCode);
        var realNameHid=$("#realNameHid").val(realName);
        //刷新列表
        $('#table').bootstrapTable('refresh');
    }
    </script>
</body>

</html>
