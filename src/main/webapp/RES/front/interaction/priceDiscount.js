var basePath = "${base}";// 根目录

//保存提交
function save()
{
	//遍历表格，获取所有
	//var dicArr = $("input[name='subBox']:checked");
	//alert(dicArr.length);
	var data = new Array();
	var flag = false;
	$("input[name='subBox']:checked").each(function(){
		if($(this).attr("disabled")=='disabled'){
			//alert("这条已经添加过啦--------------------");
			return true;
		}
		var val = $(this).val();
		var obj = new Object();
        obj.spuId=$("#fspuId-"+val).val();
        obj.skuId=val;
    	obj.categoryId=$("#categoryId-"+val).val();
    	obj.fspuLocalCode=$("#fspuLocalCode-"+val).val();
        obj.fskuReferPrice=$("#fskuReferPrice-"+val).val();
        obj.fspuMinBuyCount=$("#fspuMinBuyCount-"+val).val();
        obj.discount=$("#discount-"+val).val();
        obj.restriction=$("#restriction-"+val).val();
        obj.fskuNumber = $('#fskuNumber-'+val).val();
        //校验
        if(obj.fskuNumber==""||obj.fskuNumber<=0)
        {
        	layer.msg('货号['+obj.fspuLocalCode+']库存为0,不能添加到限时促销活动中', { time: 1500 });
        	flag = true;
        	return false;
        }
       if(parseInt(obj.restriction)<parseInt(obj.fspuMinBuyCount))
        {
        	layer.msg('货号['+obj.fspuLocalCode+']限购量不能小于起购量', { time: 1500 });
        	flag = true;
        	return false;
        }
        
        if(obj.discount==""||obj.discount==0)
        {
        	layer.msg('货号['+obj.fspuLocalCode+']折扣为0,请维护折扣', { time: 1500 });
        	flag = true;
        	return false;
        }
        
//        if(obj.discount>10)
//        {
//        	layer.msg('货号['+obj.fspuLocalCode+'],折扣最大为10,请修改折扣', { time: 1500 });
//        	flag = true;
//        	return false;
//        }
        
        data.push(obj);
        
     });
	
	if(flag) //有校验错误直接返回
	{
		return;
	}
	if(data=="" || data.length==0){
		back();
		return;
	}
	//序列化json，然后提交到后台
	var paramJson = encodeURI(JSON.stringify({"data" : data}));
	//alert(JSON.stringify(data));
	
	$.ajax( { 
		url: basePath+"/xsgood/addGoods.do",
	    data:{  
	    	"paramJson":JSON.stringify(data),
	    	"activityId":$("#activityId").val(),
	    	"discountType":$("#discountType").val()
	    },  
	    type:'post',  
	    cache:false,  
	    dataType:'json',  
	    success:function(data) {  
	    	if(data.status=='1'){
	    		layer.alert('操作成功', function(){
	    			back();
	    		});
	    	}
	    	else{
	    		layer.alert(data.errorMsg || '操作失败');
	    	}
	     },  
	     error : function() {
	    	 layer.alert(data.errorMsg || '操作异常');
	     }  
	});
	
}

function set(){
	//校验
	//判定是否是数字
	if(isNaN($("#zk").val()))
	{
		alert("请输入合法折扣");
		$("#zk").focus();
		return;
	}
	if(isNaN($("#xg").val()))
	{
		alert("请输入合法限购数");
		$("#xg").focus();
		return;
	}
	//$('#zkvalue').val($('#zk').val());
	//$('#xgvalue').val($('#xg').val());
	$("input[name='subBox']:checked").each(function(){
		
		if($(this).attr("disabled")=='disabled')
		{
			return true;
		}
		//$(this).click();
		
		var val = $(this).val();
		var tr = $("#discount-"+val).parent().parent();
		
		var price = tr.children('td').eq(3).text();
		tr.children('td').eq(7).text((price*$("#zk").val()*0.1).toFixed(2));
		
		$("#discount-"+val).val($("#zk").val());
	    $("#restriction-"+val).val($("#xg").val());
		
     }); 
}

//全选
$("#goods_list").delegate("#checkAll","click",function(){
	if($(this).prop("checked"))
	{
		$("[name='subBox']").each(function(){
			if(!$(this).prop("checked"))
			{
				$(this).click();
			}
		});
	}
	else
	{
		$("[name='subBox']").each(function(){
			if($(this).prop("checked"))
			{
				$(this).click();
			}
		})
	}
});

function back(){
 window.location.href=basePath+"/xs/toModActivity.do?id="+$("#activityId").val()+"&isShowGood=true"+"&queryflag=1&type=2";
}

function clear()
{
	$("#goodName").val("");
}

Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return - 1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
Array.prototype.in_array = function(e){  
    for(i=0;i<this.length;i++){
        if(this[i] == e)  
        return true;  
    }
    return false;  
}
