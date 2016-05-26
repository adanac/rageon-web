<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en" class="no-js">
<!--<![endif]-->
<!-- BEGIN HEAD -->

<head>
    <meta charset="utf-8" />
    <title>创纪云|零售业全渠道O2O平台</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta content="" name="description" />
    <meta content="" name="author" />
    <link href="${resRoot}/front/bootstrap/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="${resRoot}/front/bootstrap/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
    <link href="${resRoot}/front/bootstrap/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <!-- 页面整体样式 -->
    <link href="${resRoot}/common/css/components.css" id="style_components" rel="stylesheet" type="text/css" />
    <link href="${resRoot}/common/css/plugins.css" rel="stylesheet" type="text/css" />
    <link href="${resRoot}/common/css/darkblue.css" rel="stylesheet" type="text/css" id="style_color" />
    <link href="${resRoot}/front/bootstrap/layout/css/layout.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="${resRoot}/front/bootstrap/bootstrap-table/css/bootstrap-table.min.css">
    <!-- layer-css -->
    <link rel="stylesheet" href="${resRoot}/front/bootstrap/layer/skin/layer.css">
    <style type="text/css">
    thead {
        border-bottom: 1px solid #ddd;
    }
    
    td {
        vertical-align: middle !important;
    }
    
    th {
        vertical-align: middle;
        border-bottom: 1px solid #ddd !important;
    }</style>
</head>

<body class="page-header-fixed page-quick-sidebar-over-content page-sidebar-closed-hide-logo">
    <div class="page-container" style="margin:0">
        <div class="page-content-wrapper">
            <div class="page-content" style="margin:0">
                <!-- 主题颜色 -->
                <div id="theme_paneldiv"></div>
                <!-- BEGIN PAGE HEADER-->
                <h3 class="page-title">消息推送</h3>
                <div class="page-bar">
                    <ul class="page-breadcrumb">
                        <li>
                            <i class="fa fa-home"></i>
                            <a>公众号管理</a>
                            <i class="fa fa-angle-right"></i>
                        </li>
                        <li>
                            <a>消息推送</a>
                        </li>
                    </ul>
                </div>
                <div class="page-top">
                    <div class="form-group">
                        <label class="control-label" data-now>消息主题：</label>
                        <div class="control-btn">
                            <input id="title" type="text" class="check-text phone" maxlength="30">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-btn">
                            <button onclick="$('#task_list').bootstrapTable('refresh');" class="btn btn-ajax btn-primary f_l" style="width:120px;"> <i class="fa fa-search"></i> 查询
                            </button>
                            <button class="btn btn-warning f_l btn-reset" style="width:120px;"> <i class="fa fa-undo"></i> 清除条件
                            </button>
                        </div>
                    </div>
                </div>
                <!-- END PAGE HEADER-->
                <div class="clearfix">
                </div>
                <!-- <div class="page-top">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label text-right">消息主题:</label>
                                <div class="control-btn">
                                    <input type="text">
                                </div>
                            </div>
                            <div class="form-btn">
                                <button class="btn btn-primary wn120 f_l"> <i class="fa fa-search"></i> 搜索
                                </button>
                            </div>
                        </div>
                    </div>
                </div> -->
                <!-- ##########主要内容开始########## -->
<input type="hidden" id="suppId" value="${suppId!''}" />
<input type="hidden" id="pubnum" value="${pubnum!''}" />
                <div class="row">
                    <div class="col-md-12">
                        <!-- BEGIN TAB PORTLET-->
                        <div class="portlet box blue">
                            <div class="portlet-title">
                                <div class="caption">
                                    <i class="icon-tag"></i>
                                    <span>消息推送</span>
                                </div>
                                <div class="actions">
                                    <a href='#' onclick="javascript:toAdd();" id="list1-edit" class="btn btn-default btn-sm addmsg">
                                        <i class="fa fa-plus-square add"></i> 新增
                                    </a>
                                </div>
                            </div>
                            <div class="portlet-body">
                                <div class="tabbable-reversed">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="tab1">
                                            <table id="task_list" data-side-pagination="server" data-pagination="true" data-height="" class="table table-hover dataTable no-footer table-striped table-bordered" style="width: 100%;border:1px solid #ddd;">
                                        	</table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- END TAB PORTLET-->
                    </div>
                </div>
                <!-- ##########主要内容结束########## -->
            </div>
        </div>
        <!-- END CONTENT -->
    </div>
    <!-- END CONTAINER -->

    <div id="Popup3" class="layer_form2" style="display: none;">
        <div class="row">
            <div class="col-md-12 ta_c pa_t3">是否删除？</div>
            <div class="col-md-12 ta_c pa_t20">
                <button class="btn btn-primary wn120 Popup3-confirm">确认</button>
                <button class="btn btn-warning wn120 Popup3-close">取消</button>
            </div>
        </div>
    </div>
    <div id="footerdiv" class="page-footer"></div>
    <script src="${resRoot}/front/bootstrap/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
    <!-- 弹出层 -->
    <script src="${resRoot}/front/bootstrap/layer/layer.js" type="text/javascript"></script>
    <!-- 最大数字 -->
    <script src="${resRoot}/front/bootstrap/bootstrap-maxlength/bootstrap-maxlength.min.js" type="text/javascript"></script>
    <!-- 表格插件 -->
    <script src="${resRoot}/front/bootstrap/bootstrap-table/js/bootstrap-table.js"></script>
    <script src="${resRoot}/front/bootstrap/task.js" type="text/javascript"></script>
    <script>
    jQuery(document).ready(function() {
        sessionStorage.removeItem("flag");
        $(".edit").click(function(){
            sessionStorage.removeItem("flag");
            sessionStorage.setItem("flag", "edit");
        });
        $(".add").click(function(){
            sessionStorage.removeItem("flag");
            sessionStorage.setItem("flag", "add");
        });
        
        $(".btn-reset").on("click",function(){
            $(".check-text").val(null)
        });
        
        $.extend({
            suc: function() {
                $('.btn-delete').on('click', function(event) {
                    var that = this;
                    // close(this);
                    layer.open({
                        type: 1,
                        title: '',
                        closeBtn: 1,
                        area: '415px',
                        shadeClose: true,
                        content: $('#Popup3'),
                        success: function() {
                            var PoConfirm = $(".Popup3-confirm");
                            PoConfirm.unbind("click");
                            PoConfirm.on("click", function() {
                                $(that).parents("tr").remove();
                                layer.closeAll();
                                layer.msg("删除成功！");
                            });
                            $('.Popup3-close').on('click', function(event) {
                                layer.closeAll();
                                event.preventDefault();
                            });
                        }
                    });
                });
            }
        });
      	//最大字数限制控件
        $('*[maxlength]').maxlength({
            alwaysShow: true,
            limitReachedClass: "label label-danger",
        });
        queryTaskList();
    });
    </script>
    <!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->

</html>