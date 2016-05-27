<!DOCTYPE html>
<html>
<head>
    <title>tools</title>
    <meta charset="UTF-8">
    <!-- Styles -->
    <link rel="stylesheet" href="${resRoot }/tools/mi/all-base.css">
    
    <#include "../../common/head.ftl">

    </head>
<body>
    <div class="Tool-MainWrap wrapper">
	    <p class="ClassHead-wrap clearfix">
	        <a href="javascript:" class="CHeadcur ml15">文字加密解密</a>
	        <a href="/tools/md5.aspx">MD5加密</a>
	        <a href="/tools/urlcrypt.aspx">URL加密</a>
	        <a href="/tools/scriptencode.aspx">JS加/解密</a>
	        <a href="/js.aspx">JS混淆加密压缩</a>
	        <a href="/tools/escape.aspx">ESCAPE加/解密</a>
	        <a href="/tools/base64.aspx">BASE64</a>
	        <a href="/tools/hash.aspx">散列/哈希</a>
	        <a href="/tools/thunder_flashget.aspx">迅雷，快车，旋风URL加解密</a>
	    </p>
	</div>
	
	<div class="wrapper wwlr"> 
	    <form>
	    <div class="clearfix">
	        <!--GuoLvWrap-begin--> 
	      	<div class="JsTxtW-r fl pr"><textarea class="JsTxtCo bor-a1s h200 WrapHid wwlr-l" id="content" name="content"></textarea> <b class="search-hint CentHid">请把你需要加密的内容粘贴在这里</b></div>
	            
	      	<div class="JsTxtW-r fl ml15 pr zI0"><textarea class="JsTxtCo bor-a1s h200 WrapHid wwlr-r" id="result"></textarea> <b class="search-hint CentHid">请把你需要解密的内容粘贴在这里</b></div>
	 
	    </div>
	        <!--GuoLvWrap-end-->
	      <div class="GuoLvWrapCenter pt10 clearfix">
	        <div class="GuoLvCbtn"><input type="button" id="encrypt" value="加密" class="GLOkBtn"><input type="button" id="decrypt" value="解密" class="GLOkBtn"><input type="button" id="clear" value="清空" class="bg-blue02 YaHei"></div>
	         <div class="MainCate-choese ToolChoese pr fr zI1"> 
	              <div class="MainCateW-cont SearChoese w90">AES</div> 
	                  <input name="encrypt_type" value="aes" type="hidden">
	                  <span class="MCicon-drop-down SearChoese"></span>
	                  <ul class="MainCateC-down SearChoese-show w100">
	                    <li><a href="javascript:" val="aes">AES</a></li>
	                    <li><a href="javascript:" val="des">DES</a></li>
	                    <li><a href="javascript:" val="rc4">RC4</a></li>
	                    <li><a href="javascript:" val="rabbit">Rabbit</a></li>
	                    <li><a href="javascript:" val="tripledes">TripleDes</a></li>
	                  </ul> 
	        </div>   
	        <div class="GlOtherWay"><span>密码：</span><input type="text" class="w70 bor-a1s" id="pwd"></div>
	      </div>
	        
	        
	    </form>
	</div>
</body>
<script src="${resRoot}/tools/mi/aes.js" type="text/javascript"></script>
<script src="${resRoot}/tools/mi/core-min.js" type="text/javascript"></script>
<script src="${resRoot}/tools/mi/jq-tools.js" type="text/javascript"></script>
<script src="${resRoot}/tools/mi/rabbit.js" type="text/javascript"></script>
<script src="${resRoot}/tools/mi/rc4.js" type="text/javascript"></script>
<script src="${resRoot}/tools/mi/tripledes.js" type="text/javascript"></script>

<script type="text/javascript">
	$(function(){
		ted.textEncrypt();
	});
</script>
</html>


