var basePath ='${base}';
var resPath = '${resRoot}';

function createHtml(obj) {
    var htmstr = [];
    htmstr.push(  "<form id='_fileForm' enctype='multipart/form-data'>");
    htmstr.push(  "<table cellspacing=\"0\" cellpadding=\"3\" style=\"margin:0 auto; margin-top:20px;\">");
    htmstr.push(  "<tr>");
    htmstr.push(  "<td class=\"tdt tdl\">请选择文件：</td>");
    htmstr.push(  "<td class=\"tdt tdl\"><input id=\"loadcontrol\" type=\"file\" name=\"filepath\" id=\"filepath\" /></td>");
    htmstr.push(  "<td class=\"tdt tdl tdr\"><input type=\"button\" onclick=\"fileloadon()\" value=\"上传\"/></td>");
    htmstr.push(  "</tr>");
    htmstr.push(  "<tr> <td class=\"tdt tdl tdr\" colspan='3'style='text-align:center;'><div id=\"msg\">&nbsp;</div></td> </tr>");
    htmstr.push(  "<tr> <td class=\"tdt tdl tdr\" style=\" vertical-align:middle;\">图片预览：</td> <td class=\"tdt tdl tdr\" colspan=\"2\">" +
    		"<div style=\"text-align:center;\">" +
    		"<img src=\""+resPath+"/file/img/NoPhoto.jpg\"/></div></td> </tr>");
    htmstr.push(  "</table>")
    htmstr.push(  "</form>");
    obj.html(htmstr.join(""));
}

function fileloadon() {
    $("#msg").html("");    
    $("img").attr({ "src": resPath +"/file/img/processing.gif" });
    $("#_fileForm").submit(function () {   
        $("#_fileForm").ajaxSubmit({
            type: "post",
            url: basePath + '/uploadFile/upload.do',
            success: function (data) {
            var remsg = data.content;
            var name = remsg[1].split("\/");
            if (remsg[0] == "1") {
	            var type = name[4].substring(name[4].indexOf("."), name[4].length);
	            $("#msg").html("文件名：" + name[name.length - 1] + "   ---  " + remsg[2]);
	            switch (type) {
	                case ".jpg":
	                case ".jpeg":
	                case ".gif":
	                case ".bmp":
	                case ".png":
	                $("img").attr({ "src": remsg[1] });
	                break;
	            default:
	                $("img").attr({ "src": resPath +"/file/img/msg_ok.png" });
	                break;
	            }
            } else {
                $("#msg").html("文件上传失败：" + remsg[2]);
                $("img").attr({ "src": resPath +"/file/img/msg_error.png"});
            }
            },
            error: function (msg) {
                alert("文件上传失败");    
            }
        });
        return false;
    });
    $("#_fileForm").submit();
}

function doUpload() {  
     var formData = new FormData($("#uploadForm2"));
     $.ajax({  
          url: basePath + '/servlet/UploadHandleServlet' ,  
          type: 'POST',  
          data: formData,  
          async: false,  
          cache: false,
          contentType: false,  
          processData: false,  
          success: function (returndata) {  
              console.log(returndata);
          },  
          error: function (returndata) {  
        	  console.log('error:'+returndata);  
          }  
     });  
} 


function showUploadList(){
	var url = basePath + '/listFile/list.do';
	$.ajax({
		type : "post",
		url : url,
		contentType : "application/json;charset=utf-8",
		dataType : "json",
		success : function(data) {
			if (data.status == "1") {
				$('#upload_list').html = data.content;
			}
		},
		error : function(data) {
			alert(data.message);
		}
	});
}