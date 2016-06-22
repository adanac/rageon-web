<!DOCTYPE html>
<html>
<head>
    <title>文件上传</title>
    <meta charset="UTF-8">
    <#include "../../common/head.ftl">
</head>
  
  <body>
    <form id="uploadForm1">
	        上传用户：<input type="text" name="username"><br/>
	        上传文件1：<input type="file" name="file1"><br/>
	        上传文件2：<input type="file" name="file2"><br/>
	  <input class="upload" type="button" value="上传">
    </form>
    <hr>
    <form id= "uploadForm2">  
      <p >指定文件名： <input type="text" name="filename" value= ""/></p >  
      <p >上传文件： <input type="file" name="file"/></ p>  
      <input class="upload" type="button" value="上传"/>  
	</form>
    <div id="result_content"></div>
    <div id="upload_list"></div>
    <hr>
    <div id="uploadForm3"></div>
  </body>
  
  
  <script src="${resRoot}/file/js/upload.js" type="text/javascript"></script>
  <script type="text/javascript">
	$(function(){
		$('.upload').click(function(){
			doUpload();
		});
		createHtml($('#uploadForm3'));
		$('#result_content').click(function(){
			showUploadList();
		});
	});
</script>
</html>