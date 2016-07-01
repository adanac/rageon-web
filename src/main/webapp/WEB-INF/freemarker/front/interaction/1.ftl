<!DOCTYPE html>
<html>
	<head>
    <title>Card info</title>
    <meta charset="UTF-8">
    <#include "../../common/head.ftl">
    <style type="text/css">
		a:link {text-decoration:none;color:blue;}
		a:hover {text-decoration:underline;color:red;}
		a:active{text-decoration:none;color:yellow;}
		a:visited {text-decoration:none;color:green;}
	</style>
    </head>
<body>
    <div class="tab-pane" id="tab2">
                        <!-- BEGIN TAB PORTLET-->
            		     <div class="portlet box blue">
						 <div class="portlet-title">
							<div class="caption">
								<i class="fa fa-comments"></i>新增
							</div>
							<div class="tools" style="color:#fff;">
                            	
							</div>
						</div>
<input type="hidden" id="ruleId" />
						<div class="portlet-body form">
                            
                        	<div class="form-horizontal" id="add_form">                             
                                
                                <div class="form-wizard">
                                    
                                	<div class="form-body discount_height">

                                         <div class="form-group">
                                             <div class="help-block pa_t3 col-md-7">
                                                    <table class="table table-striped table-bordered table-hover dataTable ta_c" id="bcTable">
                                                        <thead>
                                                          <tr>
                                                          	<th class="ta_c">用户ID</th>
                                                            <th class="ta_c">用户名</th>
                                                            <th class="ta_c">密码</th>
                                                            <th class="ta_c"><a class="layer_button new_rows" onclick="javascript:;">增行</a></th>
                                                          </tr>
                                                        </thead>
                                                        <tbody id="bcTbody">
                                                           <tr>
                                                             <td>
                                                                <input name="userId" placeholder="id" type="text">
                                                             </td>
                                                             <td>
                                                                <input name="username" placeholder="username1" type="text">
                                                             </td>
                                                             <td>
                                                                <input name="passwd" placeholder="passwd1" type="text">
                                                             </td>
                                                             <td><a class="layer_button dele" onclick="javascript:;">删行</a></td>
                                                           </tr>
                                                           	 <input type="hidden" id="skuId0" value="7788"/>
                                                           	 <input type="hidden" id="spuId0" value="889"/>
                                                           <tr>
                                                              <td>
                                                                <input name="userId" placeholder="id" type="text">
                                                             </td>
                                                             <td>
                                                                <input name="username" placeholder="username2" type="text">
                                                             </td>
                                                             <td>
                                                                <input name="passwd" placeholder="passwd2"  type="text">
                                                            </td>
                                                            <td><a class="layer_button dele" onclick="javascript:;">删行</a>
                                                            </td>
                                                           </tr>
                                                           <tr>
                                                              <td>
                                                                <input name="userId" placeholder="id" type="text">
                                                             </td>
                                                             <td>
                                                                <input name="username" placeholder="username3" type="text">
                                                             </td>
                                                             <td>
                                                                <input name="passwd" placeholder="passwd3" type="text">
                                                            </td>
                                                            <td><a class="layer_button dele" onclick="javascript:;">删行</a>
                                                            </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                             </div>
                                         </div>
                        
			                        </div> 
                                     
                                </div>          
                                
                                <div class="form-actions">
                                        <div class="row">
                                            <label class="control-label col-md-3"></label>
                                            <div class="col-md-4"> 
                                            	<button type="button" class="btn btn-circle blue btn-md" style="padding: 8px 25px;" id="appendData">append</button>
                                                <button type="button" class="btn btn-circle blue btn-md" style="padding: 8px 25px;" id="saveData">保存</button>
                                            </div>
                                        </div>
                                </div>
                                    
                            </div>

                        </div>
                        
                        <div class="portlet-title">
							<div class="caption">
								<i class="fa fa-comments"></i>查询
							</div>
							<div class="tools" style="color:#fff;">
                            	
							</div>
						</div>
						<input type="text" id="userId_search" placeholder="userId" />
						<div id="userInfo" style="display:none;"/>
                    </div>	
                          <!-- END TAB PORTLET--> 
                        </div>
</body>
<script src="${resRoot}/front/interaction/1.js" type="text/javascript"></script>

<script type="text/javascript">
	$(function(){
		$("#saveData").on("click",function() {
			saveUser();
		});
		$("#appendData").on("click",function() {
			append();
		});
		initBind();
	});
	
	
</script>
</html>


