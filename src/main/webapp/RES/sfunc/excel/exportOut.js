$('#exportUser').on('click', function() {
  
    var empCodeHid = $("#empCodeHid").val();
    var realNameHid = $("#realNameHid").val();

    console.log("正在导出....");
    //跳转页面执行导出操作
    window.open("${base}/excel/exportExcel.do?empCode="+empCodeHid+"&realName="+realNameHid);
});