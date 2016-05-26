var basePath = "${base}";

var resList = new Array();

var queryParams = function (params){
	var temp = {
		limit: params.limit,  //页面大小
	    offset: params.offset, //页码
	    pubnumAppId: $("#pubnum").val(),
	    title: encodeURI($("#title").val())
	};
	return temp;
}

function queryTaskList() {
	$('#task_list').bootstrapTable({
		method: 'get',
		url: basePath + "/message/list.do",
		queryParams: queryParams,//传递参数
		striped: true,      //是否显示行间隔色
		cache: false,      //是否使用缓存，默认为true
		pagination: true,     //是否显示分页
		sortable: true, //是否排序
		sidePagination: "server",//服务端分页
		pageNumber:1,      //初始化加载第一页，默认第一页
		pageSize: 5,      //每页的记录行数（*）
		pageList: [5, 10, 20],  //可供选择的每页的行数（*）
	    columns: [{
            field: 'title',
            title: '主题',
            align: 'center',
            valign: 'middle'
        }, {
            field: 'msgTemplateDto',
            title: '推送内容',
            align: 'center',
            valign: 'middle',
            formatter:function(value,row,index){
            	var msgType = value.msgType;
            	var contentType = value.contentType;
            	if(contentType==1&&msgType==4){
            		return "文本";
            	}else if(contentType==2&&msgType==4){
            		return "多图文";
            	}else{
            		return "关键字";
            	}
            }
        }, {
            field: 'pname',
            title: '推送人员',
            align: 'center',
            valign: 'middle',
            formatter:function(value,row,index){
            	var type = row.pushType;
            	if(type == 0){
            		return "全部会员";
            	}else{
            		return "部分会员";
            	}
            }
        }, {
            field: 'pushtime',
            title: '推送时间',
            align: 'center',
            valign: 'middle',
            formatter:function(value,row,index){
            	if(value != ''){
            		var kk = value.substring(0,10);
                	return kk;
            	}
            }
        }, {
            field: 'status',
            title: '状态',
            align: 'center',
            valign: 'middle',
            formatter:function(value,row,index){
            	var status = "<span class=\"label label-sm label-success\">推送中</span>";
            	if(value == 1){
            		status = "<span class=\"label label-sm label-info\">已推送</span>";
            	}else if(value == 3){
            		status = "<span class=\"label label-sm label-warning\">推送失败</span>";
            	}
       		    return status;
            }
        },{
            title: '操作',
            field: 'msgTemplateDto',
            align: 'center',
            formatter:function(value,row,index){
              var temp="";
              var msgType = value.msgType;
              var contentType = value.contentType;
              var status = row.status;
              var id = row.id;
              if(status==1){//已推送
            	  temp = "<a href='javascript:void(0);' onclick=\"delMsg('"+id+"');\" class='btn btn-xs red' title='删除'><i class='fa fa-times'></i></a>"
                  +"<a href='${base}/message/toMod.do?id="+id+"&msgType="+msgType+"&contentType="+contentType+"&oper=2' class='btn btn-xs green' title='复制'><i class='fa fa-copy'></i></a>";
              }else{//2推送中  3推送失败
 	           	   temp = "<a href='${base}/message/toMod.do?id="+id+"&msgType="+msgType+"&contentType="+contentType+"&oper=1' class='btn btn-xs blue' title='编辑'><i class='fa fa-pencil'></i></a>"
	               +"<a href='javascript:void(0);' onclick=\"delMsg('"+id+"');\" class='btn btn-xs red' title='删除'><i class='fa fa-times'></i></a>"
	               +"<a href='${base}/message/toMod.do?id="+id+"&msgType="+msgType+"&contentType="+contentType+"&oper=2' class='btn btn-xs green' title='复制'><i class='fa fa-copy'></i></a>";
              }
              return temp;
            } 
        }]                
	   });  
}

function toAdd(){
	var suppId = $("#suppId").val();
	var pubnum = $("#pubnum").val();
	window.location.href="${base}/message/toAdd.do?suppId="+suppId+"&pubnum="+pubnum;
}

function toAddTw(){
	var suppId = $("#suppId").val();
	window.location.href="${base}/resouces/toAddTw.do?suppId="+suppId;
}


function delMsg(id){
	var url = basePath + '/message/del.do?id=' + id;
	$.ajax({
		type : "post",
		url : url,
		async: false,
		dataType : "json",
		success : function(data) {
			if (data.status == "1") {
				window.location.reload();
				alert("操作成功")
			}else if (data.status == "0") {
				console.log("操作失败")
			}
		}
	});
}

function goBack(){
	window.location.href="${base}/message/main.do";
}