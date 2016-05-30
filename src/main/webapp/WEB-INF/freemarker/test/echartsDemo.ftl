<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
	<title>ECharts</title>
	<script>
		var basePath = "${base}";// 根目录
		var resRoot = "${resRoot}";
		console.log(resRoot)
	</script>
	<script src="${resRoot }/test/echarts/esl.js"></script>
	<script src="${resRoot }/test/echarts/echarts.js"></script>
</head>
<body>
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="height:400px"></div>
     <script type="text/javascript">
        // 路径配置
        require.config({
            paths:{ 
                'echarts' : 'js/echarts',
                'echarts/chart/pie' : 'js/echarts'
            }
        });
        
        
        // 使用
        require(
            [
                'echarts',
                'echarts/chart/pie' // 使用柱状图就加载bar模块，按需加载
            ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(document.getElementById('main')); 
                
                option = {
                	    title : {
                	        text: '某站点用户访问来源',
                	        subtext: '纯属虚构',
                	        x:'center'
                	    },
                	    tooltip : {
                	        trigger: 'item',
                	        formatter: "{a} <br/>{b} : {c} ({d}%)"
                	    },
                	    legend: {
                	        orient : 'vertical',
                	        x : 'left',
                	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                	    },
                	    toolbox: {
                	        show : true,
                	        feature : {
                	            mark : {show: true},
                	            dataView : {show: true, readOnly: false},
                	            restore : {show: true},
                	            saveAsImage : {show: true}
                	        }
                	    },
                	    calculable : true,
                	    series : [
                	        {
                	            name:'访问来源',
                	            type:'pie',
                	            radius : '55%',
                	            center: ['50%', '60%'],
                	            data:[
                	                {value:335, name:'直接访问'},
                	                {value:310, name:'邮件营销'},
                	                {value:234, name:'联盟广告'},
                	                {value:135, name:'视频广告'},
                	                {value:1548, name:'搜索引擎'}
                	            ]
                	        }
                	    ]
                	};
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        );
    </script>
</body>
</html>
