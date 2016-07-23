<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    
    <link href="${resRoot}/assets/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
    <link href="${resRoot}/assets/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css"/>
    <link href="${resRoot}/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
    <!-- 下拉菜单，可输入 -->
    <link rel="stylesheet" type="text/css" href="${resRoot}/assets/plugins/bootstrap-select/bootstrap-select.min.css"/>
    <link rel="stylesheet" type="text/css" href="${resRoot}/assets/plugins/select2/select2.css"/>
    <link rel="stylesheet" type="text/css" href="${resRoot}/assets/plugins/jquery-multi-select/css/multi-select.css"/>

    <link href="${resRoot}/assets/css/components.css" id="style_components" rel="stylesheet" type="text/css"/>
    <link href="${resRoot}/assets/css/plugins.css" rel="stylesheet" type="text/css"/>
    <link href="${resRoot}/assets/plugins/layout/css/layout.css" rel="stylesheet" type="text/css"/>
    <link href="${resRoot}/assets/plugins/layout/css/themes/darkblue.css" rel="stylesheet" type="text/css" id="style_color"/>
    <link href="${resRoot}/common/css/style.css" rel="stylesheet" type="text/css"/>
 
    <link href="${resRoot}/common/css/babystore.css" rel="stylesheet" type="text/css"/>
    
    <script src="${resRoot}/assets/scripts/jquery.min.js" type="text/javascript"></script>
</head>
    
<body class="page-header-fixed page-quick-sidebar-over-content page-sidebar-closed-hide-logo">

<div class="page-container" style="margin:0">
	<div class="page-content-wrapper">
		<div class="page-content" style="margin:0">

			<h3 class="page-title">
			限时促销 <small>基于商品的打折、一口价促销方式</small>
			</h3>
			<div class="page-bar">
				<ul class="page-breadcrumb">
					<li>
						<i class="fa fa-home"></i>
                        <a href="#">首页</a>
						<i class="fa fa-angle-right"></i>
						<a>营销管理</a>
						<i class="fa fa-angle-right"></i>
						<a>限时促销</a>
						<i class="fa fa-angle-right"></i>
					</li>
					<li>
						<a href="#">新建</a>
                        <i class="fa fa-angle-right"></i>
                        <a>添加商品</a>
					</li>
				</ul>
			</div>
<input id="activityId" type="hidden" value="${activityId}"/>
<input id="discountType" type="hidden" value="${discountType}"/>
			<div class="clearfix"></div>

			<div class="row">
				<div class="col-md-12">
                    
					<div class="portlet box blue">
						<div class="portlet-title">
							<div class="caption">
								<i class="fa fa-gift"></i>添加商品列表
							</div>
                            <div class="actions">
								<a onclick="save();" class="btn btn-default btn-sm"><i class="fa fa-check pa_r3"></i>确定</a>
								<a onclick="goBack();" class="btn btn-default btn-sm"><i class="fa fa-reply pa_r3"></i>返回</a>
							</div>

						</div>
						<div class="portlet-body">

							<div class="tabbable-reversed">
                                
                            
                                <div class="tab-content">
									<div class="tab-pane active" id="tab1">
	
                                            <div class="row ma_b5">
			                                    <div class="col-md-6 col-sm-12">
			                                    </div>
			                                    <div class="col-md-6 col-sm-12 text-right">
			                                        <div id="sample_2_filter" class="dataTables_filter f_r">
			                                          	<div class="select-opt f_l">
			                                                <input type="text" class="form-control input-inline input-circle value-null" id="goodName" name="goodName" placeholder="请输入商品名称&nbsp;|&nbsp;货号"> 
			                                            </div>
			                                            <div class="query f_l ma_l5">
			                                                <a id="query" onclick="$('#goods_list').bootstrapTable('refresh');" class="btn btn-icon-only btn-circle btn-primary" title="查询">
																<i class="fa fa-search"></i>
															</a>
			                                            </div>
			                                            <div class="cancel f_l ma_l5">
			                                                <a href="javascript:;" class="btn btn-icon-only btn-circle btn-default btn-reset" title="清空">
																<i class="fa fa-times"></i>
															</a>
			                                            </div>
			                                            <div class="clearfix"></div> 
			                                        </div>
			                                    </div>
			                                </div>
                                        
											<table id="goods_list" data-side-pagination="server" data-pagination="true" class="table table-striped table-bordered table-hover dataTable no-footer ta_c" role="grid" aria-describedby="sample_2_info">
											</table>
                                    
									</div>
								
								</div>
							</div>
                        
						</div>
					</div>

				</div>
			</div>

		</div>
	</div>

</div>

<div  id="footerdiv" class="page-footer"></div>

<script src="${resRoot}/assets/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="${resRoot}/assets/plugins/jquery-ui/jquery-ui.min.js" type="text/javascript"></script>
           <!-- 表单美化 -->
<link href="${resRoot}/assets/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css"/>
<script src="${resRoot}/assets/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
           <!-- 弹出层 -->
<script src="${resRoot}/assets/plugins/layer/layer.js" type="text/javascript"></script>
            <!-- 下拉菜单，可输入 -->
<script type="text/javascript" src="${resRoot}/assets/plugins/bootstrap-select/bootstrap-select.min.js"></script>
<script type="text/javascript" src="${resRoot}/assets/plugins/select2/select2.min.js"></script>
<script type="text/javascript" src="${resRoot}/assets/plugins/jquery-multi-select/js/jquery.multi-select.js"></script>
               <!-- 最大数字 -->
<script src="${resRoot}/assets/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js" type="text/javascript"></script>
<!--             左侧菜单栏折叠定位控件
<script src="${resRoot}/assets/admin/new/scripts/add_demo.js" type="text/javascript"></script> -->
           <!-- 选择图片显示 -->
<link rel="stylesheet" type="text/css" href="${resRoot}/assets/plugins/bootstrap-fileinput/bootstrap-fileinput.css"/>
<script type="text/javascript" src="${resRoot}/assets/plugins/bootstrap-fileinput/bootstrap-fileinput.js"></script>
 <!-- 日期插件 -->
<link type="text/css" href="${resRoot}/assets/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css" rel="stylesheet"/>
<script type="text/javascript"  src="${resRoot}/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js"></script>
<script type="text/javascript"  src="${resRoot}/assets/plugins/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min.js"></script>
            <!-- 左侧折叠控件 -->
<script src="${resRoot}/assets/plugins/pages/scripts/components-dropdowns.js"></script>
            <!-- 页面整体控件 -->
<script src="${resRoot}/assets/scripts/metronic.js" type="text/javascript"></script>
<script src="${resRoot}/assets/plugins/layout/scripts/layout.js" type="text/javascript"></script>
<script src="${resRoot}/assets/plugins/layout/scripts/demo.js" type="text/javascript"></script>
<script src="${resRoot}/assets/plugins/layout/scripts/quick-sidebar.js" type="text/javascript"></script>
            <!-- 组件库 -->
<script src="${resRoot}/assets/scripts/Assembly.js" type="text/javascript"></script>
<!-- 表格插件 -->
<script src="${resRoot}/assets/plugins/bootstrap-table/js/bootstrap-table.js"></script>

<script src="${resRoot}/pages/common/jquery-form.js" type="text/javascript"></script>
<script src="${resRoot}/pages/sale/xs/activity/actView.js" type="text/javascript"></script>
<script src="${resRoot}/pages/sale/xs/activityGood/priceFixed.js" type="text/javascript"></script>     
<script>
    jQuery(document).ready(function() {

        
        $('.pageSelect').selectpicker();  //页码样式控件
        
        //全选和取消全选功能
        $("#checkAll").click(function(){
            //alert();
            //var a=$(this).prop("checked"); //普通checked判断对Bootstraps插件不起作用，需用prop方法判断    
            
            if( $(this).prop("checked") ) { 
                   
                $("input[name='subBox']").each(function(){                                                       
                    $(this).prop('checked', true);
                    $(this).parent('span').addClass('checked'); //Bootstraps checkBox插件外层有一span标签 样式显示选中的状态
                }); 
                    
            }else {  
                
                $("input[name='subBox']").each(function(){                                                                                      
                    $(this).prop('checked', false);
                    $(this).parent('span').removeClass('checked');
                });
                
             }                            
        });
        
        //单个选框点击功能，包括单个不选则全选取消和所有单个选中则全选选中功能
        $("input[name='subBox']").each(function(){
            
            $(this).click(function(){ 
                if( !$(this).prop("checked") ) {             
                    $("#checkAll").prop('checked', false);
                    $("#checkAll").parent('span').removeClass('checked');               
                }
                
                var subBox = $("input[name='subBox']").length; //获取总的checkbox的个数  
                var chkSub = $("input[name='subBox']:checked").length; //获取选中的checkbox的个数   
                if (subBox == chkSub) {              
                    $("#checkAll").prop('checked', true);
                    $("#checkAll").parent('span').addClass('checked');
                }  
                                       
            });
                                                       
         }); 
        
        queryGoodsList2("1");
        
        //清空
        $(".btn-reset").on("click",function(){
        	$(".value-null").val("");
        	//$("#select2-chosen-2").html("")
            $("#select2-chosen-2").html("活动状态").css("color","#b5b5b5");
        })
        
    });
</script>

</body>
</html>