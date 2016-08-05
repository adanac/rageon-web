$('#exportUser').on('click', function() {
  
    var empCodeHid=$("#empCodeHid").val();
    var realNameHid=$("#realNameHid").val();

    var param = new Object();

    param.empCode = empCodeHid;//员工编码
    param.realName = realNameHid;//真是姓名

    layer.msg("正在导出....");
    //跳转页面执行导出操作
    window.open("${base}/excel/exportExcel.do?empCode="+empCodeHid+"&realName="+realNameHid);
});