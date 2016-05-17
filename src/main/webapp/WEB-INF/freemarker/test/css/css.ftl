<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
	<title>rageon</title>
	<link rel='stylesheet' type='text/css' href='PC.css' />
    <script src='PJ.js'></script><script src='PC.js'></script>
	<script>
		var basePath = "${base}";// 根目录
		var resRoot = "${resRoot}";
		console.log(basePath)
		console.log(resRoot)
	</script>

</head>

<body>
	  <h3>
         Good
         <span class='if[now = new Date(); now.getHours() < 12]'>Morning</span>
         <span class='if[now = new Date(); now.getHours() > 11]'>Afternoon</span>
      </h3>
	  
	  <div class='textglow[#ffff00|#ff0000|1000] b
         backglow[#00ff00|#0000ff|1500] b'>
         This text cycles from yellow to red over the course of a
         second, while the background cycles from lime green to blue
         over 1.5 seconds
      </div>
      
      <div class='textglow[#ffff00|#ff0000|1000] b'>
         This text cycles from yellow to red over the course of a second
      </div>
      
	  <div class='red_b arial'>
         <span class='htab white red_b yellow_h w[80] x[0]'  >News</span>
         <span class='htab white red_b yellow_h w[80] x[80]' >Sport</span>
         <span class='htab white red_b yellow_h w[80] x[160]'>Weather</span>
         <span class='htab white red_b yellow_h w[80] x[240]'>Politics</span>
         <span class='htab white red_b yellow_h w[80] x[320]'>Science</span>
         <span class='htab white red_b yellow_h w[80] x[400]'>Arts</span>
      </div>
	  
	  <button class='check_h'>Submit</button>
      <button class='cross_h'>Cancel</button>
      <button class='email_h'>Email Us</button>
      <button class='star_h '>New Stuff</button><br />

      <button class='check_h clickable'>Submit</button>
      <button class='cross_h clickable'>Cancel</button>
      <button class='email_h clickable'>Email Us</button>
      <button class='star_h clickable' >New Stuff</button>
	  
	  Using a button:
      <form method='get' action='myfeed.xml'>
         <button class='rssbutton'>RSS FEED</button>
      </form><br />
      
      Using a span:<br />
      <a class='n' href='myfeed.xml'>
         <span class='rssbutton'>RSS FEED</span>
      </a>
	  
	  <div class='relative red_b leftby20 arial w[100]'>
         <div class='vtab white red_b yellow_h rightjustify w[80]'>News</div>
         <div class='vtab white red_b yellow_h rightjustify w[80]'>Sport</div>
         <div class='vtab white red_b yellow_h rightjustify w[80]'>Weather</div>
         <div class='vtab white red_b yellow_h rightjustify w[80]'>Politics</div>
         <div class='vtab white red_b yellow_h rightjustify w[80]'>Science</div>
         <div class='vtab white red_b yellow_h rightjustify w[80]'>Arts</div>
      </div>
      
      <div class='h[100] textmiddle aqua_b'>
         This line is vertically centered
      </div>
      
      <img class='fadeout[2000]' src='i6.jpg' />
      
      <h3>The Tyger, William Blake</h3>
      <pre><div class='typetext[60000]'>
		Tyger, Tyger burning bright, In the forests of the night:
		What immortal hand or eye, Could frame thy fearful symmetry?
		In what distant deeps or skies. Burnt the fire of thine eyes!
		On what wings dare he aspire! What the hand, dare sieze the fire?
		
		And what shoulder, and what art, Could twist the sinews of thy heart?
		And when thy heart began to beat, What dread hand? and what dread feet?
		What the hammer? what the chain, In what furnace was thy brain?
		What the anvil? what dread grasp, Dare its deadly terrors clasp!
		
		When the stars threw down their spears And water'd heaven with their tears:
		Did he smile his work to see? Did he who made the Lamb make thee?
		Tyger, Tyger burning bright, In the forests of the night:
		What immortal hand or eye, Dare frame thy fearful symmetry?</div></pre>
      
	  <table class='bsolid bwidth1 green_e aqua_be lime_bo'
         cellspacing='0' cellpadding='3'>
         <tr class='green_e'>
            <td><b>Browser</b></td>
            <td><b>Market Share</b></td>
         </tr>
         <tr>
            <td>Internet Explorer</td>
            <td>51.15%</td>
         </tr>
         <tr>
            <td>Firefox</td>
            <td>31.03%</td>
         </tr>
         <tr>
            <td>Chrome</td>
            <td>8.30%</td>
         </tr>
         <tr>
            <td>Safari</td>
            <td>4.90%</td>
         </tr>
         <tr>
            <td>Opera</td>
            <td>2.01%</td>
         </tr>
         <tr>
            <td>Others</td>
            <td>2.11%</td>
         </tr>
      </table>
	  
	  <img src='smiley.gif' />
      <img class='rotatec90' src='smiley.gif' />
      <img class='rotatec180' src='smiley.gif' />
      <img class='rotatec270' src='smiley.gif' /><br />

      <img src='smiley.gif' />
      <img class='transitionall rotatec90_h' src='smiley.gif' />
      <img class='transitionall rotatec180_h' src='smiley.gif' />
      <img class='transitionall rotatec270_h' src='smiley.gif' /><br />

      <img src='smiley.gif' />
      <img class='transitionall_l rotatea90_h' src='smiley.gif' />
      <img class='transitionall_l rotatea180_h' src='smiley.gif' />
      <img class='transitionall_l rotatea270_h' src='smiley.gif' />
	  
	  <span class='thumbview'>
         <img class='bwidth1 bblack bsolid' src='t1.jpg' />
         <span class='caption' alt='San Francisco, Pier 39 Seals'>
            <img src='i1.jpg' />
         </span>
      </span>
      <span class='thumbview'>
         <img class='bwidth1 bblack bsolid' src='t2.jpg' />
         <span class='caption' alt='San Francisco Bay Bridge'>
            <img src='i2.jpg' />
         </span>
      </span>
	  
	  <img src='smiley.gif' class='scaledown1' />
      <img src='smiley.gif' class='scaledown2' />
      <img src='smiley.gif' class='scaledown3' />
      <img src='smiley.gif' class='scaledown4' />
      <img src='smiley.gif' class='scaledown5' /><br /><br /><br />
	  
	  <h2>Global Warming</h2>
      <div class='rightsidebar'>
      According to the 2007 Fourth Assessment Report by the Intergovernmental
      Panel on Climate Change (IPCC), global surface temperature increased
      1.33 +/- 0.32 &deg;F during the 20th century.</div>

      Global warming is the increase in the average temperature of Earth's
      near-surface air and oceans since the mid-20th century and its projected
      continuation. Most of the observed temperature increase since the middle
      of the 20th century was caused by increasing concentrations of greenhouse
      gases, which results from human activity such as the burning of fossil
      fuel and deforestation. aerosols that block sunlight from reaching the
      surface, has partially countered the effects of greenhouse gas induced
      warming. Climate model projections summarized in the latest IPCC report
      indicate that the global surface temperature is likely to rise a further
      2.0 to 11.5 &deg;F during the 21st century. The uncertainty in this
      estimate arises from the use of models with differing sensitivity to
      greenhouse gas concentrations and the use of differing estimates of
      future greenhouse gas emissions.
	  
	  <div class='topdockbar'>
         <img class='topdockitem' src='i1.gif'>
         <img class='topdockitem' src='i2.gif'>
         <img class='topdockitem' src='i3.gif'>
         <img class='topdockitem' src='i4.gif'>
         <img class='topdockitem' src='i5.gif'>
         <img class='topdockitem' src='i6.gif'>
      </div>
	  
	  <a href='/'>Home</a> |
      <a href='/news/'>News</a> |
      <a class='tooltip' href='/links/'>Links<span>Click here for a<br />
      collection of great links</span></a><br /><br />
	  
	  <h4>Three Level Menu</h4>
      <div class='vmenu aqua_b black_l blue_lh u_lh'>

         <ul>  <!-- Beg Level 1 -->
            <li class='vmenu1'>
               <a href='url'>Item 1</a>

               <ul class='aqua_b'>  <!-- Beg Level 2 -->
                  <li class='vmenu1'>
                     <a href='url'>Item 1-A</a>

                     <ul class='aqua_b'>  <!-- Beg Level 3 -->
                        <li><a href='url'>Item 1-A-a</a></li>
                        <li><a href='url'>Item 1-A-b</a></li>
                     </ul>                <!-- End Level 3 -->

                  </li>
                  <li><a href='url'>Item 1-B</a></li>
                  <li><a href='url'>Item 1-C</a></li>
               </ul>                <!-- End Level 2 -->

            </li>
            <li><a href='url'>Item 2</a></li>
            <li><a href='url'>Item 3</a></li>
            <li class='vmenu1'>
               <a href='url'>Item 4</a>

               <ul class='aqua_b'>  <!-- Beg Level 2 -->
                  <li><a href='url'>Item 4-A</a></li>
                  <li class='vmenu1'>
                     <a href='url'>Item 4-B</a>

                     <ul class='aqua_b'>  <!-- Beg Level 3 -->
                        <li><a href='url'>Item 4-B-a</a></li>
                        <li><a href='url'>Item 4-B-b</a></li>
                        <li><a href='url'>Item 4-B-c</a></li>
                     </ul>                <!-- End Level 3 -->

                  </li>
               </ul>                <!-- End Level 2 -->

            </li>
            <li class='vmenu1'>
               <a href='url'>Item 5</a>

               <ul class='aqua_b'>  <!-- Beg Level 2 -->
                  <li class='vmenu1'>
                     <a href='url'>Item 5-A</a>

                     <ul class='aqua_b'>  <!-- Beg Level 3 -->
                        <li><a href='url'>Item 5-A-a</a></li>
                        <li><a href='url'>Item 5-A-b</a></li>
                     </ul>                <!-- End Level 3 -->

                  </li>
                  <li><a href='url'>Item 5-B</a></li>
                  <li><a href='url'>Item 5-C</a></li>
               </ul>                <!-- End Level 2 -->

            </li>
         </ul> <!-- End Level 1 -->

      </div>
	  
	  <div class='bottomdockbar'>
         <img class='bottomdockitem' src='i1.gif'>
         <img class='bottomdockitem' src='i2.gif'>
         <img class='bottomdockitem' src='i3.gif'>
         <img class='bottomdockitem' src='i4.gif'>
         <img class='bottomdockitem' src='i5.gif'>
         <img class='bottomdockitem' src='i6.gif'>
      </div>
	  
	  <input type='submit' class='smallbutton'
         value='Small Button' />
      <input type='submit' class='button'
         value='Medium Button' />
      <input type='submit' class='largebutton'
         value='Large Button' /><br /><br />

      <input type='submit' class='smallbutton smallestround lime_b'
         value='Small Button' />
      <input type='submit' class='button round yellow_b'
         value='Medium Button' />
      <input type='submit' class='largebutton largestround aqua_b'
         value='Large Button' /><br /><br />

      <input type='submit' class='smallbutton smallestround carrot1 carrot2_a'
         value='Small Button' />
      <input type='submit' class='button round sky1 sky2_a'
         value='Medium Button' />
      <input type='submit' class='largebutton largestround wine1 wine2_a white'
         value='Large Button' /><br /><br/>

      <input type='submit' class='smallbutton smallestround rose1 rose2_a
         white_h' value='Small Button' />
      <input type='submit' class='button round sunset1 sunset2_a white_h'
         value='Medium Button' />
      <input type='submit' class='largebutton largestround grass1 grass2_a
         white_h' value='Large Button' /><br /><br/>
	  
	  <span class='dropcap'>T</span>omorrow, and tomorrow, and tomorrow,
      creeps in this petty pace from day to day, to the last syllable of
      recorded time; And all our yesterdays have lighted fools the way to
      dusty death.
      
       <div class='b pt20'>
         <span class='lightestshadow lf gray_bh'>Lightest Shadow &nbsp;</span>
         <span class='lightshadow lf gray_bh'>Light Shadow &nbsp;</span>
         <span class='shadow lf gray_bh'>Medium Shadow &nbsp;</span>
         <span class='darkshadow lf gray_bh'>Dark Shadow &nbsp;</span>
         <span class='darkestshadow lf gray_bh'>Darkest Shadow &nbsp;</span>
      </div><br clear='left'>

      <div class='b pt20'>
         <span class='lightestshadow_h lf'>Lightest Shadow &nbsp;</span>
         <span class='lightshadow_h lf'>Light Shadow &nbsp;</span>
         <span class='shadow_h lf'>Medium Shadow &nbsp;</span>
         <span class='darkshadow_h lf'>Dark Shadow &nbsp;</span>
         <span class='darkestshadow_h lf'>Darkest Shadow &nbsp;</span>
      </div>
      
      
      <div class='b pt15'>
         <div class='quotes'  >One giant leap for mankind</div>
         <div class='parens'  >One giant leap for mankind</div>
         <div class='brackets'>One giant leap for mankind</div>
         <div class='braces'  >One giant leap for mankind</div>
         <div class='chevrons'>One giant leap for mankind</div>
      </div>
      
      
      <br /><br /><br /><b>Standard Borders:</b>
      <span class='bdotted bwidth1  padding baqua'>Dotted</span>
      <span class='bdashed bwidth3  padding bblack'>Dashed</span>
      <span class='bsolid  bwidth5  padding bblue'>Solid</span>
      <span class='bdouble bwidth10 padding bbrown'>Double</span>
      <span class='bgroove bwidth15 padding bfuchsia'>Groove</span>
      <span class='bridge  bwidth20 padding bgold'>Ridge</span>
      <span class='binset  bwidth25 padding bgray'>Inset</span>
      <span class='boutset bwidth50 padding bgreen'>Outset</span>

      <br /><br /><br /><br /><br /><br /><b>Hover Borders:</b>
      <span class='bdotted_h bwidth1  padding bkhaki'>Dotted</span>
      <span class='bdashed_h bwidth3  padding bmaroon'>Dashed</span>
      <span class='bsolid_h  bwidth5  padding bnavy'>Solid</span>
      <span class='bdouble_h bwidth10 padding bolive'>Double</span>
      <span class='bgroove_h bwidth15 padding borange'>Groove</span>
      <span class='bridge_h  bwidth20 padding bpurple'>Ridge</span>
      <span class='binset_h  bwidth25 padding bpink'>Inset</span>
      <span class='boutset_h bwidth50 padding bred'>Outset</span>
      
      
      <br /><b>Standard Borders:</b>
      <span class='bdotted bwidth10 padding blime'>Dotted</span>
      <span class='bdashed bwidth10 padding blime'>Dashed</span>
      <span class='bsolid  bwidth10 padding blime'>Solid</span>
      <span class='bdouble bwidth10 padding blime'>Double</span>
      <span class='bgroove bwidth10 padding blime'>Groove</span>
      <span class='bridge  bwidth10 padding blime'>Ridge</span>
      <span class='binset  bwidth10 padding blime'>Inset</span>
      <span class='boutset bwidth10 padding blime'>Outset</span>

      <br /><br /><br /><b>Hover Borders:</b>
      <span class='bdotted_h bwidth10 padding blime'>Dotted</span>
      <span class='bdashed_h bwidth10 padding blime'>Dashed</span>
      <span class='bsolid_h  bwidth10 padding blime'>Solid</span>
      <span class='bdouble_h bwidth10 padding blime'>Double</span>
      <span class='bgroove_h bwidth10 padding blime'>Groove</span>
      <span class='bridge_h  bwidth10 padding blime'>Ridge</span>
      <span class='binset_h  bwidth10 padding blime'>Inset</span>
      <span class='boutset_h bwidth10 padding blime'>Outset</span>
      
      <br /><b>Standard Borders:</b>
      <span class='bdotted padding blime'>Dotted</span>
      <span class='bdashed padding blime'>Dashed</span>
      <span class='bsolid  padding blime'>Solid</span>
      <span class='bdouble padding blime'>Double</span>
      <span class='bgroove padding blime'>Groove</span>
      <span class='bridge  padding blime'>Ridge</span>
      <span class='binset  padding blime'>Inset</span>
      <span class='boutset padding blime'>Outset</span>

      <br /><br /><br /><b>Hover Borders:</b>
      <span class='bdotted_h padding blime'>Dotted</span>
      <span class='bdashed_h padding blime'>Dashed</span>
      <span class='bsolid_h  padding blime'>Solid</span>
      <span class='bdouble_h padding blime'>Double</span>
      <span class='bgroove_h padding blime'>Groove</span>
      <span class='bridge_h  padding blime'>Ridge</span>
      <span class='binset_h  padding blime'>Inset</span>
      <span class='boutset_h padding blime'>Outset</span>
      
      <span class='leftpadding5_h lime_b'>Using leftpadding5_h</span><br />
      <span class='leftpadding10_h lime_b'>Using leftpadding10_h</span><br />
      <span class='leftpadding20_h lime_b'>Using leftpadding20_h</span><br />
      <span class='leftpadding30_h lime_b'>Using leftpadding30_h</span><br />
      <span class='leftpadding40_h lime_b'>Using leftpadding40_h</span><br />
      <span class='leftpadding50_h lime_b'>Using leftpadding50_h</span><br />
      <span class='leftpadding60_h lime_b'>Using leftpadding60_h</span><br />
      <span class='leftpadding70_h lime_b'>Using leftpadding70_h</span><br />
      <span class='leftpadding80_h lime_b'>Using leftpadding80_h</span><br />
      <span class='leftpadding90_h lime_b'>Using leftpadding90_h</span><br />
      <span class='leftpadding100_h lime_b'>Using leftpadding100_h</span>
      
      <img border='1' class='padding'               src='photo1.jpg' /> &nbsp;
		<img border='1' class='smallestround padding' src='photo1.jpg' /> &nbsp;
		<img border='1' class='smallround padding'    src='photo1.jpg' />
		<br /><br />
		<img border='1' class='round padding'         src='photo1.jpg' /> &nbsp;
		<img border='1' class='largeround padding'    src='photo1.jpg' /> &nbsp;
		<img border='1' class='largestround padding'  src='photo1.jpg' />
      
      <div class='relative'
         style='width:500px; height:350px; border:1px solid;'>
         <img class='absolute toleft totop'     src='photo4.jpg' />
         <img class='absolute toright totop'    src='photo4.jpg' />
         <img class='absolute toleft tobottom'  src='photo4.jpg' />
         <img class='absolute toright tobottom' src='photo4.jpg' />
      </div>
      
      <div class='scroll leftfloat' style='width:250px; height:180px;'>
         <h4>William Blake<br />Auguries of Innocence</h4>
         To see a world in a grain of sand,<br />
         And a heaven in a wild flower,<br />
         Hold infinity in the palm of your hand,<br />
         And eternity in an hour.<br /><br />
         A robin redbreast in a cage<br />
         Puts all heaven in a rage.
      </div>

      <div class='noscroll autoscroll_h leftfloat'
         style='width:250px; height:180px; padding-left:20px'>
         <h4>William Blake<br />Auguries of Innocence</h4>
         To see a world in a grain of sand,<br />
         And a heaven in a wild flower,<br />
         Hold infinity in the palm of your hand,<br />
         And eternity in an hour.<br /><br />
         A robin redbreast in a cage<br />
         Puts all heaven in a rage.
      </div>

      <div class='autoscroll'
         style='width:250px; height:180px; padding-left:20px'>
         <h4>William Blake<br />Auguries of Innocence</h4>
         To see a world in a grain of sand,<br />
         And a heaven in a wild flower,<br />
         Hold infinity in the palm of your hand,<br />
         And eternity in an hour.<br /><br />
         A robin redbreast in a cage<br />
         Puts all heaven in a rage.
      </div>
      
      
      <center>
         <img border='1'                         src='photo1.jpg' /> &nbsp; &nbsp;
         <img border='1' class='smallestpadding' src='photo1.jpg' /> &nbsp; &nbsp;
         <img border='1' class='smallpadding'    src='photo1.jpg' /> <br /><br />
         <img border='1' class='padding'         src='photo1.jpg' /> &nbsp; &nbsp;
         <img border='1' class='largepadding'    src='photo1.jpg' /> &nbsp; &nbsp;
         <img border='1' class='largestpadding'  src='photo1.jpg' />
      </center>
      
      
      
</body>

</html>
