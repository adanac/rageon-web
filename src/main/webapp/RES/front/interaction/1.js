var basePath = '${base}';
var clickCount = 0;

function getUserIdList(arr){
	var userIdList = [];
	for(var i = 0; i < arr.length; i++){
		userIdList.push(arr[i].userId);
	}
	return userIdList;
}

function getUserList(currow){
	//取活动商品列表的值
	var trs = $("table.table tbody tr");
	var tempResList = [];
	
	if(currow!=null){
		var count;
		if(currow<=2){
			count = 3-currow;
		}else{
			count = 1;
		}
		trs.length = trs.length-count;
	}
	for (var i = 0; i < trs.length; i++) {
		var tempRes = {};
		var userId = $(trs[i]).children().first().find('input').first().val();
		if(userId==null||userId=="")
			continue;
		console.log(i==currow)
		if(currow!=null&&currow==i){
			continue;
		}
		if(i==0){
			tempRes.skuId = $('#skuId'+i).val();
			tempRes.spuId = $('#spuId'+i).val();
		}
		tempRes.userId = userId;
		tempRes.username = $(trs[i]).children().eq(1).find('input').first().val();
		tempRes.passwd = $(trs[i]).children().eq(2).find('input').first().val();
		tempResList.push(tempRes);
	}
	return tempResList;
}


/************新增行begin***************/
$(".new_rows").on("click",function(){
    var dom='<tr class="trADD"><td><input name="userId" placeholder="id" type="text"></td><td><input name="username"  placeholder="username" type="text"></td><td><input name="passwd"  placeholder="passwd" type="text"></td><td><a class="layer_button dele1" onclick="javascript:;">删行</a></td></tr>',
    tbody=$(this).parents("table").find("tbody");
    tbody.append(dom);
    
    //删除当前行
    $(".dele1").on("click",function(){
        var self=$(this),
        parent = self.parents('tr');
        parent.remove();
    });
});
/**************新增行end****************/


//删除当前行
$(".dele").on("click",function(){
    var self=$(this),
    parent = self.parents('tr');
    parent.remove();
});


Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return - 1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};


//新增保存
function saveUser(){
	console.log('count:'+(clickCount-1)+",value:"+$('#userkey'+(clickCount-1)).val());
	var userList = getUserList();
	var userIdList = getUserIdList(userList);
	var res = checkUserId(userIdList);
	if(res.length>0){
		alert("存在重复的ID："+res);
		return;
	}
	var paramJson = encodeURI(JSON.stringify(userList));  //前端编码
	$.ajax({  
		url: basePath +'/front/interaction/saveUser.do',// 跳转到 action
		data: {"paramJson":paramJson},
		type: 'post',  
	    dataType: 'json',
	    success: function(data) {
	        if(data.status == "1" ){
	        	alert("新增用户成功！")
	        }else{
	        	alert("新增用户失败！")
	        }  
	     },  
	     error : function() {
	    	 console.log("新增用户异常！");
	     }  
	});
}

//保存时是否有相同ID
function checkUserId(arr) {
	var result = [], hash = {};
	for (var i = 0, elem; (elem = arr[i]) != null; i++) {
		if (!hash[elem]) {
			hash[elem] = true;
		}else{
			result.push(elem);
		}
	}
	return result;
}

//输入userId匹配库中数据
function initBind(){
	$('#userId_search').typeahead({
	    source: function (query, process) {
	        var parameter = {query: query};
	        $.ajax({
	        	url: basePath + '/front/interaction/queryUser.do',// 跳转到 action
	        	data: {"id":query,"query":"1"},
	        	type: 'POST',  
	        	dataType: 'json',
	        	success: function(data) {
	        		if(data.status == "1" ){
	        			var res = data.content.datas;
	        			var userId = new Array();
	        			for(var i=0; i < res.length;i++){
	        				userId.push(res[i].id)
	        			}
	                	process(userId);
	        		}else{
	        			console.log("查询用户失败！")
	        		}  
	        	},  
	        	error : function() {
	        		console.log("查询用户异常！");
	        	}  
	        })
	    },
	    
	    highlighter: function(item) {
	         return "==>" + item + "<==";
	    },
 
        updater: function(item) {
         console.log("'" + item + "' selected.");
         $.ajax({
				type : "post",
				url:basePath + "/front/interaction/queryUser.do",
				data:{"id":item,"query":"0"},
				dataType : "json",
				success : function(data) {
					var res = data.content.datas[0];
					console.log(res)
					values(res);
				}
			});
         return item;
      }
	});
}

//显示查询结果
function values(data) {
	var content = "<dl><dt>id:"+data.id+"</dt><dt>username:"+data.username+"</dt><dt>passwd:"+data.passwd+"</dt><dt>age:"+data.age+"</dt></dl>"
	$('#userInfo').html(content);
	$('#userInfo').show();
}

//添加隐藏域元素到页面
function append(){
	var tem = "<input type='hidden' id='userkey"+clickCount+"' value='6yhn"+clickCount+"' />";
	var tbody = $('#bcTbody');
	tbody.append(tem);
	clickCount++;
}