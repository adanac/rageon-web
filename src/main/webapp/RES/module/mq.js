var basePath = "${base}";
function exemq(){
	var content = "someone click username...";
	console.log(content);
	var paramJson = encodeURI(JSON.stringify(content));  //前端编码
	var params = {
		type : 0,//属性只需与dto中的属性名保持一致即可
		content : content
	};
	$.mypost({
		params:params,
		url:basePath+"/activeMq/mqAddSync.do",
		callback:function(result){
			showRes(result);
		}
	});
}

function showRes(res){
	var div = "";
	if(res!=""){
		div = "发送成功";
	}else{
		div = "发送失败";
	}
	$("#res_content").html(div);
	$("#res_content").show();
}