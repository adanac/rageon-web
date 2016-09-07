var basePath = '${base}';

//导出
function exportF()
{
	var url='/export/export2Excel.do?t='+Date.parse(new Date());
	window.location = basePath + url;
}