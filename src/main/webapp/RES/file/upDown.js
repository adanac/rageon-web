var basePath = '${base}';

function downFile(){
	var url = basePath + '/file/down?filename=test.txt';
	$.ajax({
		type : "get",
		url : url,
		success : function(data) {
			console.log(data);
		},
		error : function(data) {
			console.log(data);
		}
	});
}

function stopDownFile(){
	var url = basePath + '/payment/modifyPayAlip.do?paramJson=' + paramJson;
	$.ajax({
		type : "post",
		url : url,
		contentType : "application/json;charset=utf-8",
		dataType : "json",
		success : function(data) {
			$("#save").removeAttr("disabled");
			if (data.status == "1") {
				alert(data.message);
				alipayBack();
			}
			if (data.status == "0") {
				alert(data.message);
			}
		},
		error : function(data) {
			alert(data.message);
			alipayBack();
		}
	});
}