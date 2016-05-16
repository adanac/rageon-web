var basePath = "${base}";

function DoConvert() {
	var textareaLength = $("#ConvertContent").val().length;
	if (textareaLength == 0) {
		$(".cright").html("请输入待转换内容!");
		return false;
	} else {
		$(".cright").html("&nbsp;");
	}
	if ($("#ConvertType").val().indexOf('packed') != -1) {
		if ($("#ConvertType").val().indexOf('encode') > 0) {
			packedencode($("#ConvertContent").val());
		} else {
			packeddecode($("#ConvertContent").val());
		}
		return false;
	}
	$.post("convert.html", {
		ConvertType : $("#ConvertType").val(),
		ConvertContent : $("#ConvertContent").val()
	}, function(data) {
		$("#ConvertContent").val(data);
	});
}
function EncodeMD5() {
	var data = $('#Encode_Md5_Form').serialize();
	$.ajax({
		type : "POST",
		dataType : "json",
		url : basePath + "/ip/md5Encode.do",
		data : data,
		success : function(json) {
			if (json.status == "0") {
				var div = "<dl><dt>" + json.content + "</dt></dl>";
				$("#Encode_MD5_Result").html(div);
			} else {
				var div = "<dl><dt>您的查询的MD5[" + json.content[0]
						+ "]加密信息如下：</dt><dd><span>16位MD5：" + json.content[1]
						+ "</span></dd><dd><span>32位MD5：" + json.content[2]
						+ "</span></dd></dl>";
				$("#Encode_MD5_Result").html(div);
			}
			$("#Encode_MD5_Result").show();
		}
	});
}

function DecodeMD5() {
	var data = $('#Decode_Md5_Form').serialize();
	var querymd5 = document.decodemd5form.querymd5.value;
	var md5type = document.decodemd5form.md5type.value;
	var exp = /^([0-9A-Fa-f]+)$/;
	var reg = querymd5.match(exp);
	if (md5type == 'decode'
			&& ((querymd5.length != 16 && querymd5.length != 32) || reg == null)) {
		alert("MD5密文不正确");
		return false;
	} else {
		$.ajax({
			type : "POST",
			dataType : "json",
			url : basePath + "/ip/md5Decode.do",
			data : data,
			success : function(json) {
				if (json.status == "0") {
					var div = "<dl><dt>" + json.msg + "</dt></dl>";
					$("#Decode_MD5_Result").html(div);
				} else {
					var div = "<dl><dt>您的查询的MD5[" + json.content[0]
							+ "]解密信息如下：</dt><dd><span>明文为：" + json.content[1]
							+ "</span></dd></dl>";
					$("#Decode_MD5_Result").html(div);
				}
				$("#Decode_MD5_Result").show();
			}
		});
	}
}

function QueryIp() {
	var ip = $("#queryip").val();
	if (checkIP(ip)) {
		$.ajax({
			type : "POST",
			dataType : "json",
			url : basePath + "/ip/queryIp.do?ip=" + ip,
			success : function(json) {
				if (json.status == "0") {
					var div = "<dl><dt>" + json.msg + "</dt></dl>";
					$("#Query_Ip_Result").html(div);
				} else {
					var div = "<dl><dt>您的查询的Ip[" + json.content[0]
							+ "]信息如下：</dt><dd><span>" + json.content[1]
							+ "</span></dd></dl>";
					$("#Query_Ip_Result").html(div);
				}
				$("#Query_Ip_Result").show();
			}
		});
	}
}

function checkIP(ip0) {
	var ip = ip0.replace(/(\s+)/g, "");
	$("#queryip").val(ip);
	var exp1 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	var reg1 = ip.match(exp1);
	if (reg1 == null) {
		alert("IP地址不合法！");
		$("#queryip").focus();
		return false;
	} else {
		return true;
	}
}

a = 62;
function packedencode(codestr) {
	var code = codestr;
	code = code.replace(/[\r\n]+/g, '');
	code = code.replace(/'/g, "\\'");
	var tmp = code.match(/\b(\w+)\b/g);
	tmp.sort();
	var dict = [];
	var i, t = '';
	for (var i = 0; i < tmp.length; i++) {
		if (tmp[i] != t)
			dict.push(t = tmp[i]);
	}
	var len = dict.length;
	var ch;
	for (i = 0; i < len; i++) {
		ch = num(i);
		code = code.replace(new RegExp('\\b' + dict[i] + '\\b', 'g'), ch);
		if (ch == dict[i])
			dict[i] = '';
	}
	$("#ConvertContent")
			.val(
					"eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}("
							+ "'"
							+ code
							+ "',"
							+ a
							+ ","
							+ len
							+ ",'"
							+ dict.join('|') + "'.split('|'),0,{}))");
}

function num(c) {
	return (c < a ? '' : num(parseInt(c / a)))
			+ ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
}

function packeddecode(codestr) {
	var code = codestr;
	code = code.replace(/^eval/, '');
	$("#ConvertContent").val(eval(code));
}

function QueryWeather() {
	var city = $("#queryTq").val();
	$.ajax({
		type : "POST",
		dataType : "json",
		url : basePath + "/tq/queryWeather.do?city=" + city,
		success : function(json) {
			if (json.status == "0") {
				var div = "<dl><dt>" + json.msg + "</dt></dl>";
				$("#Query_Tq_Result").html(div);
			} else {
				var div = "<dl><dt>您的查询的[" + json.content.city
						+ "]的天气信息如下：</dt><dd><span>" 
						+ "白天:"+json.content.status1+"\t"
						+"夜间:"+json.content.status2+"\t"
				+"最高气温:"+json.content.temperature1+"\t"
				+"最低气温:"+json.content.temperature2
						+ "</span></dd></dl>";
				$("#Query_Tq_Result").html(div);
			}
			$("#Query_Tq_Result").show();
		}
	});
}

