var basePath = '${base}';

function insert2db(){
	var username = $('#username').val();
	var pwd = $('#pwd').val();
	var age = $('#age').val();
	$.ajax({
		url : basePath + "/sql/insertSQL.do",
		type : "POST",
		data:{"username":username,"pwd":pwd,"age":age},
		dataType : "json",
		success : function(json) {
			if (json.status == "1") {
				var div = "<dl><dt>插入成功</dt></dl>";
			} else {
				var div = "<dl><dt>插入失败</dt></dl>"
			}
			$("#res_content").html(div);
			$("#res_content").show();
		}
	});
}

function query4db(){
	var username = $('#username').val();
	var pwd = $('#pwd').val();
	$.ajax({
		url: basePath +"/sql/querySQL.do",
		type: 'POST',
		data:{'username':username,'pwd':pwd},
		dataType:'json',
		success:function(data){
			var div = "";
			var temp= "";
			if(data.status=='1'){
				div = "查询结果<br/>";
				temp = JSON.stringify(data.content);
				div += temp;
				var obj = JSON.parse(temp)[0];
				console.log(obj.id+","+obj.name);
			}else{
				div = "查询失败";
			}
			$('#res_content').html(div);
			$('#res_content').show();
		}
	});
}

function queryNameList(){
	var username = $('#username').val();
	$.ajax({
		url: basePath +"/sql/queryList.do",
		type: 'POST',
		data: {'username':username},
		dataType: 'json',
		success: function(data){
			var div = "";
			var temp= "";
			if(data.status=='1'){
				div = "查询结果<br/>";
				temp = JSON.stringify(data.content);
				div += temp;
				var obj = JSON.parse(temp)[0];
				console.log(obj.id+","+obj.name);
			}else{
				div = "查询失败";
			}
			$('#res_content').html(div);
			$('#res_content').show();
		}
	});
}

function queryIn(){
	var username = new Array();
	var username1 = $('#username1').val();
	var username2 = $('#username2').val();
	username.push(username1);
	username.push(username2);
	var res = JSON.stringify(username);
	$.ajax({
		url: basePath +"/sql/queryIn.do",
		type: 'POST',
		data: {'username':res},
		dataType: 'json',
		success: function(data){
			var div = "";
			var temp= "";
			if(data.status=='1'){
				div = "查询结果<br/>";
				temp = JSON.stringify(data.content);
				div += temp;
				var obj = JSON.parse(temp)[0];
				console.log(obj.id+","+obj.name);
			}else{
				div = "查询失败";
			}
			$('#res_content').html(div);
			$('#res_content').show();
		}
	})
}