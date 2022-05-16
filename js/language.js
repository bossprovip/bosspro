var currLang;
var language={
    "zh":{
 

		'v1':'FireBird(FBD)躺赚BNB - 奖池余额 :',
		'v2':'购买FBD',
		
		'v3':'FBD空投 0.01BNB=500,000FBD',
		'v4':'领取空投',
		
		'v5':'FBD预售 0.25BNB=10,000,000FBD',
		'v6':'购买',
		'v7':'推荐奖励 实时到账',
		'v8':'复制',	
		
		'v9':'合约地址',
		
		'v10':'FBD余额',
		'v11':'今日预估 / 累计收益',		
		
		'v12':'大奖时刻 购买满0.01%免费送0.01%',	
		
		'v13':'FOMO3D奖池余额/开奖时间',
		'v14':'FBD分红池累计',
		'v15':'FBD 我的收益:',
		'v16':'每天',
		'v17':'每周',
		'v18':'每月',
		'v19':'每年',
		'v20':'根据当天成交量预估',
		
		'v21':'联系我们',
		'v22':'下载白皮书',
		
		
		
 
		
 
		

    },
    "en":{
        'msg1':'In order to provide better service for you, please agree to authorize',
        'msg2':'Please download TP or Huobi wallet for link',
        'msg3':'Received',
        'msg4':'Not received',
        'msg5':'',//People
        'msg6':'Please enter the website provided by the recommender',
        'msg7':'Please make sure the account balance is greater than 0.041 HT ',
        'msg8':'Sorry, your credit is running low',
        'msg9':'Please enter the correct Address',

		
		'lan3':'My address:',
        'lan4':'- &nbsp; Crowdfunding Process &nbsp; -',
        'lan5':'Crowdfunding',
        'lan6':'Process',
        'lan7':'Price',
        'lan8':'Buy',
        'lan9':'Expected obtain ',
        'lan10':'- &nbsp; Airdrop mission &nbsp; -',
        'lan11':'Receive airdrop',
        'lan12':'Total airdrop',
        'lan13':'Remaining',
        'lan14':'-&nbsp; HTBIG  User Data &nbsp; -',
        'lan15':'Refer:',
        'lan16':'Refer by:',
        'lan17':'Receive airdrop:',
        'lan18':'Team:',
        'lan19':'Reward:',
        'lan20':'HTBIG  System Data',
        'lan21':'Total amount:',
        'lan22':'Circulation volume of phase I:',
        'lan23':'Number of participants:',
        'lan24':'Refer URL',
   
		


		'v1':'Earn BNB when Sleep - RewardPool :',
		'v2':'Buy FBD',
		
		'v3':'FBD Airdrop 0.01BNB=500,000FBD',
		'v4':'Get Airdrop',
		
		'v5':'FBD Presale 0.25BNB=10,000,000FBD',
		'v6':'Buy',
		'v7':'Refer Rewards',
		'v8':'Copy',	
		
		'v9':'Contract Address',
		
		'v10':'FBD Holdings',
		'v11':'Today Estimation / Total Earn',		
		
		'v12':'BIG Bonus Time BUY>0.01% Free gift 0.01%',	
		'v13':'FOMO3D JACKPOT / Time',
		
		'v14':'Total BNB Paid To FBD Holders',
		'v15':'Your  FBD Earns:',
		'v16':'Per - Day',
		'v17':'Per Week',
		'v18':'PerMonth',
		'v19':'Per - Year',
		'v20':'Estimations are based on DAY trading volume',
		
		'v21':'Any questions, Please contact us',
		'v22':'Download WhitePaper',
		
		


		// 'v249':'Join Telegram',
 
		
		// 'v24':' ',
 
 
		// 'v26':'Receive airdrop',
		

		
		
		// 'v1':' A new way to earn HT ',
		// 'v2':' Your HTBIG  balance: ',
		
		// 'v3':' Reward Pool ',
		// 'v4':' My reward: ',
		
		// 'v5':' *pool is always changing based on buys, sells, and collects by others, learn more here ',
		// 'v6':' Claim My Reward ',
		// 'v7':'Address',
		// 'v8':' Max Transaction Amount ',	
		
		// 'v9':'Operating Mechanism',
		
		// 'v10':'Get Airdrop',
		// 'v11':'Join Telegram',
		

		// 'v21':' ',
		
		// 'v22':'Operating Mechanism',
		
		// 'v23':' ',
 
		
    },
 
};

function select_lang(languag,name,theme){
    document.body.style.display='inline';
    //document.getElementById('lang_name').innerHTML=name;
    //document.getElementById('lang_box').style.display='none';
    currLang=languag;
    try{
        var img='image/'+languag+'.png';
        //document.getElementById('lang_img_box').src=img;
		
		var shib='image/shib_'+languag+'.jpg';
		//document.getElementById('shib').src=shib;
    
        var elem=document.getElementsByClassName("lang");//$(".lang");
        var test;
        var l=elem.length;
		console.log('lang length '+l);
        for(var i=0;i<l-0;i++){
            if(typeof  elem[i]=='undefined')continue;
            test=language[languag][elem[i].dataset['attr_lang']]; 
            elem[i].innerHTML=test;
			//console.log(test);
        } 
        var l={'sh':languag,'lh':name};
        localStorage.setItem("DEX_LANGUAGE",JSON.stringify(l));	

		
    }catch(e){alert(e);}
    if(defaultaccount.length > 0)get_info(defaultaccount);
    document.body.style.display='inline';
}

function select_first(){
    var l=JSON.parse(localStorage.getItem("DEX_LANGUAGE"));	
    var theme= localStorage.getItem("FBtheme")  ;	
	console.log('theme:'+theme);
    //alert(JSON.stringify(l));
    if(typeof l ==='undefined' ||  l===null){
        l={'sh':'en','lh':'English'};
    }
    select_lang(l.sh,l.lh,theme);
	
	if(theme==1){
		
	$("html").removeClass("theme-dark")
	$("#themeico").html("<path fill-rule=\"evenodd\" d=\"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z\" clip-rule=\"evenodd\"></path>");
			
		
	}
	
}
