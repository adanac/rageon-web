var basePath = "${base}";

function CardQuery(){
	var cardno = $('#cardno').val();
	var name  = $('#cardname').val();
	if($.trim(cardno)==""){
		console.log('cardno不能为空');
		return;
	}
	url = "/card/";
	if($.trim(name)!=""){
		url = url+"query/"+cardno+".do";
		var paramJson = encodeURI(JSON.stringify(name));  //前端编码
		$.ajax({
			url : basePath + url,
			type : "POST",
			data:{"name":paramJson},
			dataType : "json",
			success : function(json) {
				if (json.status == "1") {
					if(isNull(json.content)=="0"){
						console.log("暂无");
						return;
					}
					var div = "<dl><dt>查询状态:" + json.content.retMsg +"</dt></dl>" +
					"<dl><dt>性别:" + json.content.retData.sex +"</dt></dl>" +
					"<dl><dt>地址:" + json.content.retData.address +"</dt></dl>";
				} else {
					var div = "<dl><dt>查询结果失败</dt></dl>"
				}
				$("#query_content").html(div);
				$("#query_content").show();
			}
		});
	}else{
		url = url+cardno+".do";
		$.ajax({
			url : basePath + url,
			type : "POST",
			dataType : "json",
			success : function(json) {
				if (json.status == "1") {
					if(isNull(json.content)=="0"){
						console.log("暂无");
						return;
					}
					var div = "<dl><dt>查询状态:" + json.content.retMsg +"</dt></dl>" +
					"<dl><dt>性别:" + json.content.retData.sex +"</dt></dl>" +
					"<dl><dt>地址:" + json.content.retData.address +"</dt></dl>";
				} else {
					var div = "<dl><dt>查询结果失败</dt></dl>"
				}
				$("#query_content").html(div);
				$("#query_content").show();
			}
		});
	}
}

function isNull(data){ 
	return (data == "" || data == undefined || data == null) ? 0 : data; 
}
