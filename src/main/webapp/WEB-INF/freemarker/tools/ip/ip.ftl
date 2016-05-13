<!DOCTYPE html>
<html>
<head>
    <title>IP地址查询,IP whois信息查询,IP域名反查 - T00ls.Net - 低调求发展 - 技术无止境 - Focus On Security</title>
    <meta charset="UTF-8">
    <meta name="keywords" content="土司,吐司,土司论坛,安全资讯,WEB安全,系统安全,网络安全,代码审计,内网渗透,漏洞分析,漏洞预警,漏洞报告,漏洞提交" />
	<meta name="description" content="T00ls是当前国内为数不多的民间网络信息安全研究团队之一。作为专业的安全技术交流平台，T00ls团队无任何盈利与商业性质，本着“低调求发展”的理念、在严格遵守国家法律的前提下低调和谐健康发展，其浓厚的讨论氛围，广泛的研究范围，令不少安全爱好者神往！" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

    <!-- Favicons -->
    <link rel="icon" href="#">

    <!-- Styles -->
    <link rel="stylesheet" href="${resRoot }/tools/ip/css/normalize.css">
    <link rel="stylesheet" href="${resRoot }/tools/ip/css/fontawesome.css">
    <link rel="stylesheet" href="${resRoot }/tools/ip/css/colors.css">
    <link rel="stylesheet" href="${resRoot }/tools/ip/css/typography.css">
    <link rel="stylesheet" href="${resRoot }/tools/ip/css/style.css">
    <link rel="stylesheet" href="${resRoot }/tools/ip/css/tools.css">
    <link rel="stylesheet" href="${resRoot }/tools/ip/css/responsive-1200.css">
    
    <#include "../../common/head.ftl">

    </head>
<body>
    <!-- Wrapper -->
    <div id="wrapper" class="wide">
        <!-- Section -->
<section>
<div class="container">
    	<div class="row">
<!-- Main content -->
<div class="col main-content col_9_of_12">

            <ul class="breadcrumb"><li><a href="/">T00ls首页</a></li> <li>IP地址查询,IP whois信息查询,IP域名反查</li></ul>
<div class="head_title"><h2>T00ls在线工具</h2></div>
<div class="tab_content"><ul class="clearfix">
<li class="ui-tabs-active ui-state-active"><a href="#tabs_1"><i class="fa fa-search"></i>&nbsp;IP查询</a></li>
<li><a href="#tabs_2"><i class="fa fa-search"></i>&nbsp;域名查询</a></li>
<li><a href="#tabs_3"><i class="fa fa-stop"></i>&nbsp;MD5解密</a></li>
<li><a href="#tabs_4"><i class="fa fa-stop"></i>&nbsp;MD5加密</a></li>
<li><a href="#tabs_5"><i class="fa fa-reply-all"></i>&nbsp;字符串转换</a></li></ul>
<div class="active" id="tabs_1">
<div class="scontent"><form method="POST"  action="ip.html" name="ipform" class="search-form" onsubmit="return checkIP()">
     <div class="sleft"><input type="text" name="queryip"  class="input-search" value="" autocomplete="off"></div>
            <input type="hidden" name="formhash" value="5c93b841" />
     <div class="sright"><input type="submit" name="queryipsubmit" class="search-btn" value="查询"></div>
            <input type="hidden" id="queryipdomain" name="queryipdomain" value="0" />
        </form></div>
     <div class="query_content" style="display:none">
     	<dl><dt>Error:域名不符合规范！</dt></dl>
 	  	<div style="clear:both;overflow:hidden;height:0;width:0;"></div>
    </div>
     </div>
<div id="tabs_2">
<div class="scontent"><form method="POST"  action="domain.html">
     <div class="sleft"><input type="text" name="domain"  class="input-search" value="" autocomplete="off"></div>
            <input type="hidden" name="formhash" value="5c93b841" />
     <div class="sright"><input  type="submit" name="querydomainsubmit" class="search-btn" value="查询"></div>
        </form></div>
  </div>
<div id="tabs_3">
<div class="scontent"><form method="POST" action="" name="decodemd5form"  id="Decode_Md5_Form">
    <div class="sleft"><input type="text" id="querymd5" name="querymd5" autocomplete="off" maxlength="100"></div>
    <input type="hidden" name="md5type" value="decode" />
    <input type="hidden" name="formhash" value="5c93b841" />
    <input type="hidden" name="querymd5submit" value="decode">
    <div class="sright"><a href="#" class="btn btn_Default" target="_self" style="background-color:#2ecc71; color:#ffffff;" onclick="javascript:DecodeMD5();">解密</a></div>
</form></div>
<div class="query_content" id="Decode_MD5_Result" style="display:none"></div>
<div class="query_content"><dl><dt>希望大家将本站无法破解的MD5通过提交功能提交：点击<a href="javascript:void(0);" onclick="applydiv('tabs_3','5c93b841');">提交</a></dt></dl></div>
</div>
<div id="tabs_4">
<div class="scontent"><form method="POST" action="" name="encodemd5form" id="Encode_Md5_Form">
    <div class="sleft"><input type="text" name="querymd5" value="" autocomplete="off" maxlength="100"></div>
    <input type="hidden" name="md5type" value="encode" />
    <input type="hidden" name="formhash" value="5c93b841" />
    <input type="hidden" name="querymd5submit" value="encode">
    <div class="sright"><a href="#" class="btn btn_Default" target="_self" style="background-color:#2ecc71; color:#ffffff;" onclick="javascript:EncodeMD5();">加密</a></div>
</form></div>
    <div class="query_content" id="Encode_MD5_Result" style="display:none"></div>
<div class="query_content"><dl><dt>希望大家将本站无法破解的MD5通过提交功能提交：点击<a href="javascript:void(0);" onclick="applydiv('tabs_4','5c93b841');">提交</a></dt></dl></div>
</div>
<div id="tabs_5">
<div>
<b>*</b>选择转换类型：
<select id="ConvertType" name="ConvertType">
<option value='base64_decode' selected>base64_decode</option><option value='base64_encode'>base64_encode</option>
<option value='rawurldecode'>rawurldecode</option><option value='rawurlencode'>rawurlencode</option>
<option value='bin2hex'>bin2hex</option><option value='hex2bin'>hex2bin</option>
<option value='gzinflate'>gzinflate</option><option value='gzdeflate'>gzdeflate</option>
<option value='tochr'>chr</option><option value='str_rot13'>ROT13</option><option value='strrev'>STRREV</option>
<option value='todate'>时间戳->时间</option><option value='totimestamp'>时间->时间戳</option>
<option value='md5'>MD5</option><option value='sha1'>SHA1</option>
<option value='long2ip'>long2ip</option><option value='ip2long'>ip2long</option>
<option value='packed_encode'>packed_encode</option><option value='packed_decode'>packed_decode</option>
</select>
<a href="#" class="btn btn_Default" target="_self" style="background-color:#2ecc71; color:#ffffff;" onclick="javascript:DoConvert();">转换</a></div>
<div class="cleft">请根据您选择的类型输入相应的字符串:</div><div class="cright">&nbsp;</div>
<textarea type="textarea" id="ConvertContent" name="ConvertContent"></textarea><br>
</div><!-- End tab5 -->
</div>
</div><!-- End Main content -->
    <!-- Sidebar -->
    <div class="col col_3_of_12 sidebar">
            <!-- Widget timeline -->
        <div class="widget">
            <div class="widget_title"><h3>最新关注IP</h3></div>
            <div class="tb_widget_timeline clearfix">
                            <!-- IP -->
                <article>
                    <span class="date">2016-05-13</span>
                    <span class="time">01:43:12 AM</span>
                    <div class="timeline_content">
                        <i class="fa fa-clock-o" style="color: #2ECC71"></i>
                        <h3 style="padding-top:5px;"><a href="ip.html?ip=104.18.55.70">104.18.55.70</a></h3>
                    </div>
                </article><!-- End IP -->
                                <!-- IP -->
                <article>
                    <span class="date">2016-05-13</span>
                    <span class="time">01:42:55 AM</span>
                    <div class="timeline_content">
                        <i class="fa fa-clock-o" style="color: #22A7F0"></i>
                        <h3 style="padding-top:5px;"><a href="ip.html?ip=103.6.86.93">103.6.86.93</a></h3>
                    </div>
                </article><!-- End IP -->
                                <!-- IP -->
                <article>
                    <span class="date">2016-05-12</span>
                    <span class="time">18:55:45 PM</span>
                    <div class="timeline_content">
                        <i class="fa fa-clock-o" style="color: #E87E04"></i>
                        <h3 style="padding-top:5px;"><a href="ip.html?ip=104.18.55.69">104.18.55.69</a></h3>
                    </div>
                </article><!-- End IP -->
                                <!-- IP -->
                <article>
                    <span class="date">2016-05-12</span>
                    <span class="time">16:52:10 PM</span>
                    <div class="timeline_content">
                        <i class="fa fa-clock-o" style="color: #D2527F"></i>
                        <h3 style="padding-top:5px;"><a href="ip.html?ip=97.74.215.41">97.74.215.41</a></h3>
                    </div>
                </article><!-- End IP -->
                                <!-- IP -->
                <article>
                    <span class="date">2016-05-12</span>
                    <span class="time">15:49:41 PM</span>
                    <div class="timeline_content">
                        <i class="fa fa-clock-o" style="color: #2574A9"></i>
                        <h3 style="padding-top:5px;"><a href="ip.html?ip=103.6.86.93">103.6.86.93</a></h3>
                    </div>
                </article><!-- End IP -->
                            </div>
        </div><!-- End Widget timeline -->
        
        <!-- Widget Recent list posts -->
            <div class="widget">
                <div class="widget_title"><h3>最新查询域名</h3></div>
                <div class="tb_widget_recent_list clearfix">
                                    <!-- Post item -->
                    <div class="item clearfix">
                        <div class="item_thumb">
                            <div class="thumb_icon">
                                <a href=""><i class="fa fa-copy"></i></a>
                            </div>
                            <div class="thumb_hover">
                                <a href=""><img src="https://www.t00ls.net/uc_server/data/avatar/000/00/66/56_avatar_middle.jpg" onerror="this.onerror=null;this.src='https://www.t00ls.net/uc_server/images/noavatar_middle.gif'" onload="if(this.height>120){this.height=120;}"/></a>
                            </div>
                        </div>
                        <div class="item_content">
                            <h4><a href="domain.html?sdomain=www.86210.com">www.86210.com</a></h4>
                            <div class="item_meta clearfix">
                                <span class="meta_date">2016-05-13 00:37:44</span>
                            </div>
                        </div>
                    </div><!-- End Post item -->
                                        <!-- Post item -->
                    <div class="item clearfix">
                        <div class="item_thumb">
                            <div class="thumb_icon">
                                <a href=""><i class="fa fa-copy"></i></a>
                            </div>
                            <div class="thumb_hover">
                                <a href=""><img src="https://www.t00ls.net/uc_server/data/avatar/000/00/77/53_avatar_middle.jpg" onerror="this.onerror=null;this.src='https://www.t00ls.net/uc_server/images/noavatar_middle.gif'" onload="if(this.height>120){this.height=120;}"/></a>
                            </div>
                        </div>
                        <div class="item_content">
                            <h4><a href="domain.html?sdomain=wowubuntu.com">wowubuntu.com</a></h4>
                            <div class="item_meta clearfix">
                                <span class="meta_date">2016-05-13 00:09:31</span>
                            </div>
                        </div>
                    </div><!-- End Post item -->
                                        <!-- Post item -->
                    <div class="item clearfix">
                        <div class="item_thumb">
                            <div class="thumb_icon">
                                <a href=""><i class="fa fa-copy"></i></a>
                            </div>
                            <div class="thumb_hover">
                                <a href=""><img src="https://www.t00ls.net/uc_server/data/avatar/000/00/60/97_avatar_middle.jpg" onerror="this.onerror=null;this.src='https://www.t00ls.net/uc_server/images/noavatar_middle.gif'" onload="if(this.height>120){this.height=120;}"/></a>
                            </div>
                        </div>
                        <div class="item_content">
                            <h4><a href="domain.html?sdomain=www.hxfnjx.com">www.hxfnjx.com</a></h4>
                            <div class="item_meta clearfix">
                                <span class="meta_date">2016-05-12 23:22:50</span>
                            </div>
                        </div>
                    </div><!-- End Post item -->
                                        <!-- Post item -->
                    <div class="item clearfix">
                        <div class="item_thumb">
                            <div class="thumb_icon">
                                <a href=""><i class="fa fa-copy"></i></a>
                            </div>
                            <div class="thumb_hover">
                                <a href=""><img src="https://www.t00ls.net/uc_server/data/avatar/000/00/77/33_avatar_middle.jpg" onerror="this.onerror=null;this.src='https://www.t00ls.net/uc_server/images/noavatar_middle.gif'" onload="if(this.height>120){this.height=120;}"/></a>
                            </div>
                        </div>
                        <div class="item_content">
                            <h4><a href="domain.html?sdomain=12323.com">12323.com</a></h4>
                            <div class="item_meta clearfix">
                                <span class="meta_date">2016-05-12 22:47:37</span>
                            </div>
                        </div>
                    </div><!-- End Post item -->
                                        <!-- Post item -->
                    <div class="item clearfix">
                        <div class="item_thumb">
                            <div class="thumb_icon">
                                <a href=""><i class="fa fa-copy"></i></a>
                            </div>
                            <div class="thumb_hover">
                                <a href=""><img src="https://www.t00ls.net/uc_server/data/avatar/000/00/77/33_avatar_middle.jpg" onerror="this.onerror=null;this.src='https://www.t00ls.net/uc_server/images/noavatar_middle.gif'" onload="if(this.height>120){this.height=120;}"/></a>
                            </div>
                        </div>
                        <div class="item_content">
                            <h4><a href="domain.html?sdomain=sedfs.com">sedfs.com</a></h4>
                            <div class="item_meta clearfix">
                                <span class="meta_date">2016-05-12 22:46:37</span>
                            </div>
                        </div>
                    </div><!-- End Post item -->
                                    </div>
            </div><!-- End Widget Recent list posts -->
        
    </div>
<!-- END sidebar -->
</div>
</div>
</div>
</section><!-- End Section -->        
        <!-- Copyright -->
        <div id="copyright" role="contentinfo">
            <div class="container">
                <p>Copyright &copy; 2008 - 2015 T00ls.Net All Rights Reserved.</p>
            </div>
        </div><!-- End Copyright -->
    </div><!-- End Wrapper -->
    
</body>
<script src="${resRoot}/tools/ip/js/tools.js" type="text/javascript"></script>

<script type="text/javascript">
</script>
</html>


