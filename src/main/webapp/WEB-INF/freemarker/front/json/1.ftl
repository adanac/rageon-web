<script src="${resRoot}/front/json/jquery-2.1.4.min.js"></script>
<script src="${resRoot}/front/json/jquery.xml2json.js"></script>
<script src="${resRoot}/front/json/jquery.json2xml.js"></script> 
<script src="${resRoot}/front/json/publick.js"></script> 
<script type="text/javascript">
	var str = "<root>" +
			  "<name>Geoff Lui</name>" +
			  "<age>26</age>" +
			  "<friends>Alice</friends>" +
			  "<friends>Gwen</friends>" +
		  	  "</root>";
	cl(str);
	var obj = $.xml2json(str);		//$.xml2json将XML转换为json
	cl(obj);
	var jsonstr = JSON.stringify(obj);	//将javaScript值转换成JSOn字符串,JSON.stringify()生成的字符串可以用json.parse再还原成javascript值,
	cl(jsonstr);
	var person = {
		name:"=Geoff Lui",
		age: 26,
		mother:{
			name:"Lucy",
			age:54
		},
		a:function(){
			return 100000;
		},
		b:null,
		c:undefined
	};
	var xmlstr = $.json2xml(person);	//$.json2xml();将json转换为XML
	cl(xmlstr);
</script>