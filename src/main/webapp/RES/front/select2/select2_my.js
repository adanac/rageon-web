;
(function($, window, document, undefined) {
	$.extend({
				message : {}
			});
	$.extend($.message, {
		
		initKeyWordDropdown : function() {
			$('#kid1').select2({
				placeholder : "请选择",
				// minimumInputLength: 1,
				ajax : {  
					url : "${base}/front/list.do",
					dataType : 'json',
					quietMillis : 250,
					data : function(term, pageNumber) {
						return {
							name : term, // search term
							pageSize:10,
							pageNumber:pageNumber
						};
					},
					results : function(data, pageNumber) { 
						if(data&&data.rows&&data.rows.length){	 
							var more = (pageNumber*10)<data.total;	//用来判断是否还有更多数据可以加载
						    return {
								results:data.rows,more:more	
						    };
						}else{
						    return {
								results : data.rows
							};
						}				
					},
					cache : true
				},
				initSelection : function(element, callback) {
				},
				id : function(priv) {
					return priv.id;
				},
				formatResult : function(word) { 
					if (word.id){
						var markup = "<div id='"
								+ word.id
								+ "'>"
								+ word.name + "</div>";
						return markup;
					}
				}, // omitted for brevity, see the source of this page  
				formatSelection : function(repo) { 
					return repo.name;
				}, // omitted for brevity, see the source of this page
				dropdownCssClass : "bigdrop", // apply css that makes the
												// dropdown taller
				escapeMarkup : function(m) { 
					return m;
				}
			});
			
			$("#kid1").on("change", function (e) { ToggleProductList("kid1");})
			
//			$('#kid').on('select2-selecting',function(el){
//				 var choice = el.choice;
//				 var keyid = choice.id;
//				 var keyname = choice.name;
//				 var msgId = choice.msgTemplateId;
//				 $("#keyid").val(keyid);
//				 $("#keyname").val(keyname);
//				 $('#msgId').val(msgId);
//			});
		}
	});

})(jQuery, window, document);


function initDemo1(){
	$('#kid2').select2({
		placeholder : "请选择",
		// minimumInputLength: 1,
		
		initSelection : function(element, callback) {//要放在ajax方法之前
			 var ev = element.val();
		     callback({//自定义属性名称要与formatSelection返回的属性名称一致
		    	 id: ev,
                 name: ev
		     });
		},
		id : function(priv) {
			return priv.id;
		},
		formatResult : function(word) { 
			if (word.id){
				var markup = "<div id='"
						+ word.id
						+ "'>"
						+ word.name + "</div>";
				return markup;
			}
		}, // omitted for brevity, see the source of this page  
		formatSelection : function(repo) {
			return repo.name;
		}, // omitted for brevity, see the source of this page
		dropdownCssClass : "bigdrop", // apply css that makes the
										// dropdown taller
		ajax : {  
			url : "${base}/front/list.do",
			dataType : 'json',
			quietMillis : 250,
			data : function(term, pageNumber) {
				return {
					name : term, // search term
					pageSize:10,
					pageNumber:pageNumber
				};
			},
			results : function(data, pageNumber) { 
				if(data&&data.rows&&data.rows.length){	 
					var more = (pageNumber*10)<data.total;	//用来判断是否还有更多数据可以加载
				    return {
						results:data.rows,more:more	
				    };
				}else{
				    return {
						results : data.rows
					};
				}				
			},
			cache : true
		},
		escapeMarkup : function(m) { return m;	}
	});
}

function initDemo2(){
	$("#num").empty(); //清除下拉框option，不然会累加
	$("#num").select2({
        placeholder: "输入一个号码",//文本框的提示信息
        //minimumInputLength: 1,//至少输入n个字符，才去加载数据
        allowClear: true,//是否允许用户清除文本信息
        ajax: {
        	url : "${base}/front/list.do",//地址
            dataType: 'json',//接收的数据类型
            //contentType:'application/json',
            data: function(term, pageNo) { //在查询时向服务器端传输的数据
                term = $.trim(term);
                return {
//                    name: term,//联动查询的字符
//                    pageSize: 15,//一次性加载的数据条数
//                    pageNo: pageNo,//页码
//                    time: Date.parse(new Date())
                }
            },

            results : function(data, pageNumber) {
            	//var dataObj = eval("(" + data + ")"); //如果返回数据不是json,可以转将接收到的JSON格式的字符串转换成JSON数据
				if(data&&data.rows&&data.rows.length){//如果没有查询到数据，将会返回空串	 
					var more = (pageNumber*10)<data.total;	//用来判断是否还有更多数据可以加载
				    return {
						results:data.rows,
						more:more	
				    };
				}else{
				    return {
						results : data.rows
					};
				}				
			},
        },
        initSelection: function(element, callback) { //初始化，其中doName是自定义的一个属性，用来存放text的值
            var id = $(element).val();
            var text = $(element).attr("doName");
            if (id != '' && text != "") {
                callback({
                    id: id,
                    text: text
                });
            }
        },
        formatResult: formatAsText, //渲染查询结果项
        formatSelection : function(repo) { 
			return repo.name;
		}
    });
	
	$("#num").on("change", function (e) { ToggleProductList("num");})
}


//格式化查询结果,将查询回来的id跟name放在两个div里并同行显示，后一个div靠右浮动    
function formatAsText(item) {
    var itemFmt = "<div style='display:inline;'>" + item.id + "</div><div style='float:right;color:#4F4F4F;display:inline'>" + item.name + "</div>"
    return itemFmt;
}


function initDemo3(){
	$("#selectsq").select2({
		 placeholder: "输入一个号码",//文本框的提示信息
	        //minimumInputLength: 1,//至少输入n个字符，才去加载数据
	        allowClear: true,//是否允许用户清除文本信息
	        ajax: {
	        	url : "${base}/front/list.do",//地址
	            dataType: 'json',//接收的数据类型
	            //contentType:'application/json',
	            data: function(term, pageNo) { //在查询时向服务器端传输的数据
	                term = $.trim(term);
	                return {
//	                    name: term,//联动查询的字符
//	                    pageSize: 15,//一次性加载的数据条数
//	                    pageNo: pageNo,//页码
//	                    time: Date.parse(new Date())
	                }
	            },

	            results : function(data, pageNumber) {
	            	//var dataObj = eval("(" + data + ")"); //如果返回数据不是json,可以转将接收到的JSON格式的字符串转换成JSON数据
					if(data&&data.rows&&data.rows.length){//如果没有查询到数据，将会返回空串	 
						var more = (pageNumber*10)<data.total;	//用来判断是否还有更多数据可以加载
					    return {
							results:data.rows,
							more:more	
					    };
					}else{
					    return {
							results : data.rows
						};
					}				
				},
	        },
	        initSelection: function(element, callback) { //初始化，其中doName是自定义的一个属性，用来存放text的值
	            var id = $(element).val();
	            var text = $(element).attr("doName");
	            if (id != '' && text != "") {
	                callback({
	                    id: id,
	                    text: text
	                });
	            }
	        },
	        formatResult: formatAsText, //渲染查询结果项
	        formatSelection : function(repo) { 
				return repo.name;
			}, // omitted for brevity, see the source of this page
			dropdownCssClass : "bigdrop", // apply css that makes the
											// dropdown taller
			escapeMarkup : function(m) { 
				return m;
			}
	});
    $("#selectsq").on("change", function (e) { ToggleProductList("selectsq");})
}

function Getselect2ID(idd) {
    var data = $("#" + idd).select2("data");
    var datastring = "";
//    $.each(data, function (key, val) {
//        datastring = datastring + data.id + ","+data.name;
//    });
    datastring = data.id+":"+data.name;
    return datastring;
}
function ToggleProductList(idd) {
    var sqlist = Getselect2ID(idd);
    if (sqlist.length > 0) { 
        $("#divselectProduct").show();
        $("#divselectProduct").val(sqlist);
    }
    else {
        $("#divselectProduct").hide();
    }
}

function initDemo4(){
	$('#selectsmod1').select2({
	    placeholder          : "请输入",
//	    minimumInputLength   : 1,
	    multiple             : true,
	    maximumSelectionSize : 5,                               // 限制数量
	    initSelection        : function (element, callback) {   // 初始化时设置默认值
	        var data = [];
	            data.push({ id: "白萝卜", text: element.val() });
	        callback(data);
	    },
	    createSearchChoice   : function(term, data) {           // 创建搜索结果（使用户可以输入匹配值以外的其它值）
	        return { id: term, text: term };
	    },
	    formatSelection : function (item) { return item.id; },  // 选择结果中的显示
	    formatResult    : function (item) { return item.id; },  // 搜索列表中的显示
	    data: {
	        results: [
	            { id: "北京", text: "bj beijin 北京" },
	            { id: "厦门", text: "xm xiamen 厦门" },
	            { id: "福州", text: "fz fuzhou 福州" }
	        ]
	    }
	});
	$('#selectsmod2').select2({
	    placeholder          : "请输入",
//	    minimumInputLength   : 1,
	    multiple             : true,
	    separator            : "^",                             // 分隔符
	    maximumSelectionSize : 5,                               // 限制数量
	    initSelection        : function (element, callback) {   // 初始化时设置默认值
	        var data = [];
	        $(element.val().split("^")).each(function () {
	            data.push({ id: this, text: this });
	        });
	        callback(data);
	    },
	    createSearchChoice   : function(term, data) {           // 创建搜索结果（使用户可以输入匹配值以外的其它值）
	        return { id: term, text: term };
	    },
	    formatSelection : function (item) { return item.id; },  // 选择结果中的显示
	    formatResult    : function (item) { return item.id; },  // 搜索列表中的显示
	    data: {
	        results: [
	            { id: "北京", text: "bj beijin 北京" },
	            { id: "厦门", text: "xm xiamen 厦门" },
	            { id: "福州", text: "fz fuzhou 福州" }
	        ]
	    }
	});
}

//使用本地数据的写法
function initDemo5(){
	$('#userSelect1').select2({
	    placeholder          : "请输入",
	    minimumInputLength   : 1,
	    multiple             : true,
	    separator            : "^",                             // 分隔符
	    maximumSelectionSize : 5,                               // 限制数量
	    initSelection        : function (element, callback) {   // 初始化时设置默认值
	        var data = [];
	        $(element.val().split("^")).each(function () {
	            data.push({ id: this, text: this });
	        });
	        callback(data);
	    },
	    createSearchChoice   : function(term, data) {           // 创建搜索结果（使用户可以输入匹配值以外的其它值）
	        return { id: term, text: term };
	    },
	    formatSelection : function (item) { return item.id; },  // 选择结果中的显示
	    formatResult    : function (item) { return item.id; },  // 搜索列表中的显示
	    data: {
	        results: [
	            { id: "北京", text: "bj beijin 北京" },
	            { id: "厦门", text: "xm xiamen 厦门" },
	            { id: "福州", text: "fz fuzhou 福州" }
	        ]
	    }
	});
}

//使用异步数据的写法
function initDemo6(){
	$('#userSelect2').select2({
	    placeholder          : "请输入",
//	    minimumInputLength   : 1,
	    multiple             : true,
//	    separator            : "^",                             // 分隔符
	    maximumSelectionSize : 5,                               // 限制数量
	    initSelection        : function (element, callback) {   // 初始化时设置默认值
	        var data = [];
//	        $(element.val().split("^")).each(function () {//赋多个值
//	            data.push({id: this, text: this});
//	        });
	        var ev = element.val();
	        data.push({id: ev, text: ev});
	        callback(data);
	    },
	    createSearchChoice   : function(term, data) {           // 创建搜索结果（使用户可以输入匹配值以外的其它值）
	        return { id: term, text: term };
	    },
	    formatSelection : function (item) { return item.id; },  // 选择结果中的显示
	    formatResult    : function (item) { return item.id; },  // 搜索列表中的显示
	    ajax : {
	        url      : "${base}/front/list.do", // 异步请求地址
	        dataType : "json",                  // 数据类型
	        data     : function (term, page) {  // 请求参数（GET）
	            return { q: term };
	        },
	        results      : function (data, pageNo) { // 构造返回结果
	        	//return data;
	        	if(data&&data.rows&&data.rows.length){//如果没有查询到数据，将会返回空串	 
					var more = (pageNo*10)<data.total;	//用来判断是否还有更多数据可以加载
				    return {
						results:data.rows,
						more:more	
				    };
				}else{
				    return {
						results : data.rows
					};
				}	
	        }, 
	        escapeMarkup : function (m) { return m; }               // 字符转义处理
	    }
	});
}