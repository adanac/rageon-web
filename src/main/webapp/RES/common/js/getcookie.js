

;(function(){


	$.extend({

		operation:function(table,type){

	        var thInner = table.find(".th-inner"),
	            tr = table.find("tbody").find("tr"),        //所有的行
	            index = "";             //获取操作的位置
	        for (var i = 0; i < thInner.length; i++) {
	            if(thInner[i].innerHTML === "操作"){
	                index = i;
	            }
	        }
	        //循环有的行数
	        for (var i = 0; i < tr.length; i++) {
	            //获取所有当前这行下面的td
	            var td = $(tr[i]).find("td");
	            $(td[index]).unbind("click");
	            //给操作按钮添加事件
	            $(td[index]).on("click",function(){
	                $(".pagination .page-number").each(function(){
	                    if(this.className.indexOf("active") > -1){
	                        var cookie = document.cookie,	//当前域的cookie
	                            cookieText = "",			//
	                            cookieSplit;				//数组
	                        if(!cookie){
	                            cookieText = "name=,";
	                        }else{
	                             cookieText = cookie;
	                             cookieSplit = cookieText.split(",");
	                         }


	                         //如果cookie为空
	                        if(cookieSplit !== undefined){
	                            for (var a = 0; a < cookieSplit.length; a++) {
	                                var key = cookieSplit[a].split("=");
	                                var keysAttr = key[0];
	                                var keysZhi = key[1];
	                                //如果已经有了cookie，就值修改不添加
	                                if(keysAttr === type){
	                                	//得到最新的cookie字符串
	                                    var newCookie = cookieText.replace(type+"="+keysZhi,type+"="+this.innerText);
	                                    new assembly().$cookie().setCookie(newCookie,1);
	                                    break;
	                                }else{//如果没有cookie，就添加一个新cookie
	                                	if(a === cookieSplit.length-1){
			                            	new assembly().$cookie().setCookie(cookieText+type+"="+this.innerText+",",1);
	                                	}

			                        }
	                            }
	                        }else{//添加一个新的cookie
			                    new assembly().$cookie().setCookie(cookieText+type+"="+this.innerText+",",1);
			                }
	                    }
	                })
	            })
	        }
	    },
	    getNowCookie:function(str){
	    	var cookie = document.cookie,
	    		cookieSplit = cookie.split(","),
	    		dataObject = {
	    			attr:null,
	    			zhi:null
	    		};
	    	if(typeof cookieSplit === "object"){
	    		for (var i = 0; i < cookieSplit.length; i++) {
	    			var key = cookieSplit[i].split("=");
                    var keysAttr = key[0];
                    var keysZhi = key[1];
                    if(keysAttr === str){
                    	dataObject.attr = keysAttr;
                    	dataObject.zhi = keysZhi;
                    	break;
                    }
	    		}
	    	}else{
	    		alert("cookie为空！")
	    	}
	    	return dataObject;
	    }
	})
})();