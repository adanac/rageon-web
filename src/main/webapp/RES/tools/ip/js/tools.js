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
	$.ajax({
		type : "POST",
		dataType : "json",
		url : "md5_encode.html",
		data : $('#Encode_Md5_Form').serialize(),
		success : function(json) {
			if (json.result == "error") {
				var div = "<dl><dt>" + json.msg + "</dt></dl>";
				$("#Encode_MD5_Result").html(div);
			} else {
				var div = "<dl><dt>您的查询的MD5[" + json.mingwen
						+ "]加密信息如下：</dt><dd><span>16位MD5：" + json.md5_16
						+ "</span></dd><dd><span>32位MD5：" + json.md5_32
						+ "</span></dd></dl>";
				$("#Encode_MD5_Result").html(div);
			}
			$("#Encode_MD5_Result").show();
		}
	});
}

function DecodeMD5() {
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
			url : "md5_decode.html",
			data : $('#Decode_Md5_Form').serialize(),
			success : function(json) {
				if (json.result == "error") {
					var div = "<dl><dt>" + json.msg + "</dt></dl>";
					$("#Decode_MD5_Result").html(div);
				} else {
					var div = "<dl><dt>您的查询的MD5[" + json.md5
							+ "]解密信息如下：</dt><dd><span>明文为：" + json.mingwen
							+ "</span></dd></dl>";
					$("#Decode_MD5_Result").html(div);
				}
				$("#Decode_MD5_Result").show();
			}
		});
	}
}

function applydiv(tabs, formhash) {
	var html = '<div class="applymd5" id="applymd5"><form method="POST" action="md5_decode.html" name="applymd5form" id="applymd5form">提交MD5（明文）:  <input type="text" name="applymd5" value="" style="width: 55%;"/><input type="hidden" name="formhash" value="'
			+ formhash
			+ '" /> <input type="hidden" name="applymd5submit" value="apply"><a href="#" class="btn btn_Default" target="_self" style="background-color:#2ecc71; color:#ffffff;" onclick="javascript:ApplyMD5(\''
			+ tabs + '\');">提交</a></form></div>';
	$('#applymd5').remove();
	if (tabs == 'tabs_3') {
		$('#tabs_3').append(html);
	} else if (tabs == 'tabs_4') {
		$('#tabs_4').append(html);
	}
}

function ApplyMD5(tabs) {
	$.ajax({
		type : "POST",
		dataType : "json",
		url : "md5_encode.html",
		data : $('#applymd5form').serialize(),
		success : function(json) {
			var div = "<dl><dt>" + json.msg + "</dt></dl>";
			if (tabs == 'tabs_3') {
				$("#Decode_MD5_Result").html(div);
				$("#Decode_MD5_Result").show();
			} else if (tabs == 'tabs_4') {
				$("#Encode_MD5_Result").html(div);
				$("#Encode_MD5_Result").show();
			}
		}
	});
}

function checkIP() {
	var ip = document.ipform.queryip.value.replace(/(\s+)/g, "");
	document.ipform.queryip.value = ip;
	var exp1 = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
	var reg1 = ip.match(exp1);
	var exp2 = /^([0-9A-Za-z\-\.]+)$/;
	var reg2 = ip.match(exp2);
	if (reg1 == null && reg2 == null) {
		alert("IP or 域名地址不合法！");
		document.ipform.queryip.focus();
		return false;
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
