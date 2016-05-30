<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
	<title>rageon</title>
	<script>
		var basePath = "${base}";// 根目录
		var resRoot = "${resRoot}";
	</script>
	<link href="${resRoot }/task/0530/css/detail.css" rel="stylesheet"	type="text/css" />
	<link href="${resRoot }/task/0530/css/common.css" rel="stylesheet"	type="text/css" />
	<script src="${resRoot }/common/js/jquery.min.js"></script>
	<script src="${resRoot }/task/0530/js/fee.js"></script>
	<script src="${resRoot }/task/0530/js/common.js"></script>
	<script src="${resRoot }/task/0530/js/detail.js"></script>
	<script src="${resRoot }/task/0530/echarts/esl.js"></script>
	<script src="${resRoot }/task/0530/echarts/echarts.js"></script>
</head>

<body>
	<div class="mod-wrap">
	<div class="clear mod-panel mod-price" id="house-price">
		<!-- <h2>价格决策</h2> -->
      		<div class="count">
      			<p class="count-top">
      				<span class="count-icon"></span>
      				<span class="price-title">房贷计算器</span>
      				<span class="count-intro">选择基本情况，帮您快速计算房贷</span>
      			</p>

      	    <ol>
        				<li class="clear">
        					<span class="tle">选择户型：</span>
        					<div class="ret" data-type="area">
                                        
        						<span class="da pp-wprice" data-value="92.00" data-price="9500">2居2厅1卫  92.00平</span>
                            						<span class="arrow"></span>
        						<ol class="slt-area" style="display: none;">
                              							<li data-value="92.00" data-price="9500">2居2厅1卫  92.00平</li>
        			
                              							<li data-value="109.00" data-price="9500">3居2厅2卫  109.00平</li>
        			
                              							<li data-value="120.00" data-price="9500">3居2厅2卫  120.00平</li>
        			
                              							<li data-value="125.00" data-price="9500">3居2厅2卫  125.00平</li>
        			
                              							<li data-value="144.00" data-price="9500">4居2厅2卫  144.00平</li>
        			
                              							<li data-value="152.00" data-price="9500">4居2厅2卫  152.00平</li>
        			
                              						</ol>
                            					</div>
        				</li>
        				<li class="clear">
                  <span class="tle">估算总价：</span>
                  <div class="ret-zongjia" data-type="allpay">
                    <input id="all-pay" value="" maxlength="10">
                    <span class="wan">万</span>
                  </div>
                </li>
                <li class="clear">
                  <span class="tle">首付成数：</span>
                  <div class="ret" data-type="percent">
                    <span class="da chengshu-value" data-value="0.7">7成</span>
                    <span class="arrow"></span>
                    <ol style="display: none;">
                      <li data-value="0.1">1成</li>
                      <li data-value="0.2">2成</li>
                      <li data-value="0.3">3成</li>
                      <li data-value="0.4">4成</li>
                      <li data-value="0.5">5成</li>
                      <li data-value="0.6">6成</li>
                      <li data-value="0.7">7成</li>
                    </ol>
                  </div>
                </li>
                <li class="clear">
                  <span class="tle">贷款类别：</span>
                  <div class="ret" data-type="rate">
                    <span class="da" data-value="0.0325">公积金贷款</span>
                    <span class="arrow"></span>
                    <ol class="dk-type" style="display: none;">
                      <li data-value="0.0325">公积金贷款</li>
                      <li data-value="0.04635">商业贷款</li>
                      <li>组合贷款</li>
                    </ol>
                  </div>
                </li>

                <div id="dk-list" style="display:none">
                  <li class="clear">
                    <span class="dk">公积金贷款：</span>
                    <div class="ret-zongjia" data-type="accurate">
                      <input class="da" id="accu-dk" data-value="0.0325">
                      <span class="wan">万</span>
                    </div>
                  </li>
                  <li class="clear">
                    <span class="dk">商业贷款：</span>
                    <div class="ret-zongjia" data-type="bnsrate">
                      <input class="da" id="bns-dk" data-value="0.04635">
                      <span class="wan">万</span>
                    </div>
                  </li>
                </div>


                <li class="clear">
                  <span class="tle">贷款时间：</span>
                  <div class="ret" data-type="times">
                    <span class="da" data-value="360">30年（360期）</span>
                    <span class="arrow"></span>
                    <ol>
                      <li data-value="12">1年（12期）</li>
                      <li data-value="24">2年（24期）</li>
                      <li data-value="36">3年（36期）</li>
                      <li data-value="48">4年（48期）</li>
                      <li data-value="60">5年（60期）</li>
                      <li data-value="72">6年（72期）</li>
                      <li data-value="84">7年（84期）</li>
                      <li data-value="96">8年（96期）</li>
                      <li data-value="108">9年（108期）</li>
                      <li data-value="120">10年（120期）</li>
                      <li data-value="132">&gt;11年（132期）</li>
                      <li data-value="144">&gt;12年（144期）</li>
                      <li data-value="156">&gt;13年（156期）</li>
                      <li data-value="168">&gt;14年（168期）</li>
                      <li data-value="180">&gt;15年（180期）</li>
                      <li data-value="192">&gt;16年（192期）</li>
                      <li data-value="204">&gt;17年（204期）</li>
                      <li data-value="216">&gt;18年（216期）</li>
                      <li data-value="228">&gt;19年（228期）</li>
                      <li data-value="240">&gt;20年（240期）</li>
                      <li data-value="252">&gt;21年（252期）</li>
                      <li data-value="264">&gt;22年（264期）</li>
                      <li data-value="276">&gt;23年（276期）</li>
                      <li data-value="288">&gt;24年（288期）</li>
                      <li data-value="300">&gt;25年（300期）</li>
                      <li data-value="312">&gt;26年（312期）</li>
                      <li data-value="324">&gt;27年（324期）</li>
                      <li data-value="336">&gt;28年（336期）</li>
                      <li data-value="348">&gt;29年（348期）</li>
                      <li data-value="360">&gt;30年（360期）</li>
                    </ol>
                  </div>
                </li>
                <li class="select-math">
                  <i class="wu-icon right-icon"></i>
                  <span class="slt-i">等额本息</span>
                  <i class="wu-icon" data-value="2"></i>
                  <span class="slt-i">等额本金</span>            
                </li>
            </ol>


      		</div>
          <div class="clear start-div">
            <span class="start-line"></span>
            <span class="clear start-btn"></span>
          </div>
          <div class="clear bill">
            <p class="bill-top">
              <span class="price-title">您的账单</span>
              <span class="jiage">均价: </span>
              <span class="jiage-info"><span class="junjia-info">9500元／平米</span></span>
              <span class="jiage">估算总价: </span>
              <span class="zongjia-info-box"><span class="zongjia-info"></span></span>
            </p>
            <div class="bill-info">
              <div class="pie-bgbgbg"></div><div id="my-pie"></div>
              
              <p class="shoufu"><span>首付：<span class="shoufu-info"></span><span class="shoufu-chengshu"></span></span></p>
              <p class="daikuan"><span>贷款金额：<span class="daikuan-info"></span></span></p>

              <p class="lixi"><span>偿还利息：<span class="lixi-info"></span></span></p>

            </div>
            <div id="per-month" class="yue"><span class="yue1">每月还款： <span class="yue-info"></span></span></div>
            <div id="first-month" style="display:none" class="yue"><span class="yue1">首月还款： <span class="yue-info"></span></span></div>
            <div class="small"><span>＊利率公积金3.25% 商业性4.635%（9折）</span></div>
            
          </div>
	</div>
</div>
    <script type="text/javascript">
	    $(function(){
	    	mainJS();
	    })
	</script>
</body>

</html>
