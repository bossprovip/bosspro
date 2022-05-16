var currLang;
var language={
    "zh":{
        'lan0':'',
        'lan1':'',
        'lan2':'',
        'lan3':'钱包地址 ',
        'lan4':'-&nbsp;众筹进度-&nbsp;',
        'lan5':'众筹量',
        'lan6':'已完成',
        'lan7':'价格',
        'lan8':'购买',
        'lan9':'预计获得',
        'lan10':'-&nbsp;空投任务-&nbsp;',
        'lan11':'领取空投',
        'lan12':'空投总量',
        'lan13':'目前剩余',
        'lan14':'-&nbsp;用户数据-&nbsp;',
        'lan15':'推荐码：',
        'lan16':'推荐人：',
        'lan17':'领取空投：',
        'lan18':'团队：',
        'lan19':'奖励：',
        'lan20':'XXXXXXX系统数据',
        'lan21':'总量：',
        'lan22':'一期流通量：',
        'lan23':'参与人数：',
        'lan24':'邀请链接',
        'lan25':'',
        
        
        'lan26':'',
        'lan27':'',
        'lan28':'',
        'lan29':'',
        'lan30':'',
        'lan31':'',
        'lan32':'',
        
        
        'lan33':'连接钱包',
        'lan34':'XXXXXXX 挖矿',
        'lan35':'质押(开发中...)',
        'lan36':'空投(开发中...)',
        'lan37':'钱包(开发中...)',
        'lan38':'邀请(开发中...)',
        'lan39':'兑换(开发中...)',
        'lan40':'帮助中心(开发中...)',
        'lan41':'白皮书',

        'lan42':'telegram电报',
        'lan43':'反馈邮箱',
        'lan44':'已众筹：',
        'lan45':'合约地址：',
		'lan46':'审计报告',
		
        'msg1':'为了更好的为您提供服务，请同意授权',
        'msg2':'请下载TP,或火币钱包进行链接',
        'msg3':'已领取',
        'msg4':'未领取',
        'msg5':' 人',
        'msg6':'请用推荐人提供的网址进入',
        'msg7':'请确保账户余额大于0.01HT',
        'msg8':'余额不足',
        'msg9':'请输入正确的HT数量',
		
		'v249':'加入电报群',
		
		'v8':'钱包地址',
		'v10':'领取空投',
		
		'v23':'MellivoraCapensis(蜜獾)',
		'v24':' MellivoraCapensis(蜜獾) 我们要像蜜獾一样，性格勇敢，坚毅，顽强。MICS是平台的代币，持有代币，可以享受交易分红。  总供应量 1,000,000,000,000,000，发行初始销毁50%到黑洞。空投总量的10%， 每份91亿个(发送100亿 到账91亿 系统扣除了9%手续费)， 流动性挖矿20%  2,00,000,000,000,000枚。  ',
		
		'v241':'MellivoraCapensis(蜜獾) 我们要像蜜獾一样，性格勇敢，坚毅，顽强。MICS是平台的代币，持有代币，可以享受交易分红。  总供应量 1,000,000,000,000,000，发行初始销毁50%到黑洞。空投总量的10%， 每份91亿个(发送100亿 到账91亿 系统扣除了9%手续费)， 流动性挖矿20%  2,00,000,000,000,000枚。',		
		
		'v26':'领取空投',
		'v27':'MellivoraCapensis(MICS) 空投总量为供应量的10%，共计 10,000,000,000,000 枚. 每一个HECO地址可以领取91亿枚空投(发送100亿 到账91亿 系统扣除了9%手续费)。推荐好友领取空投可以获得50%的空投奖励',
		'v30':'运营机制', 
		'v31':'每笔交易共收取9%的手续费',
		'v33':'1%用于销毁 减少总量',
		'v34':'2%用于添加流动性 保证币价 3%平台费用',
		'v34_1':'3%用于给持币人分红，持币越多，分红越多。',
		'v13':'流动性挖矿',
		'v14':'流动性挖矿总量为20% 共计 2,000,000,000,000 枚，后期上线，持有MICS即可挖矿。',
		'v15':'第一年',
		'v16':'第二年',
		'v17':'第三年',
		'v18':'第四年',
		'v19':'第五年',
		'v20':'第六年',		

		'v115':'空投总量',
		'v116':'剩余数量',
		'v117':'推荐码',
		
		'v118':'推广奖励',
		'v119':'团队人数',
		'v120':'第六年',	

		

    },
    "en":{
        'lan0':'',
        'lan1':'',
        'lan2':'',
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
        'lan14':'-&nbsp; XXXXXXX User Data &nbsp; -',
        'lan15':'Refer:',
        'lan16':'Refer by:',
        'lan17':'Receive airdrop:',
        'lan18':'Team:',
        'lan19':'Reward:',
        'lan20':'XXXXXXX System Data',
        'lan21':'Total amount:',
        'lan22':'Circulation volume of phase I:',
        'lan23':'Number of participants:',
        'lan24':'Copy',
        'lan25':'',
        'lan26':'',
        'lan27':'2. 0.01HT must be paid as a miner gas fee to receive  airdrops',
        'lan28':'3. Promote to get 10% rewards for first generation mining, all will arrive in seconds',
        'lan29':'4.XXXXXXX crowdfunding is over, decentralized exchange is officially launched and XXXXXXX trading is opened. ',
        'lan30':'5. HOLDING XXXXXXX automatically gets a share of the transaction, and the more you hold, the more you get, 10% taxfee for each transaction, 1% auto Burn, 5% auto destruction, 2% auto for the lucky fund, 2% auto for liquidity',
        'lan31':'6.Fortunately, there\'s a 1% chance you\'ll get an extra 50% of the deal value',
        'lan32':'How to get involved in crowdfunding? <br/>1.Choose A block-chain Wallet Tokenpocket, imtoken, mathwallet create a Binance smart-chain Wallet(BSC)<br/> 2.Install binance and buy HT, Withdraw your HT to Wallet. <br/>3.In the wallet DAPP Browser, open the URL and click buy. If you don\'t know how to do this, please contact your reference and he will be happy to help you ',
        'lan33':'Connect your wallet',
        'lan34':'XXXXXXX Mining',
        'lan35':'pledge',
        'lan36':'Airdrop',
        'lan37':'wallet',
        'lan38':'invitation',
        'lan39':'exchange',
        'lan40':'Help center',
        'lan41':'white paper',
        'lan42':'Telegram',
        'lan43':'Feedback email',
        'lan44':'Crowdfunding',
        'lan45':'Contract address：',
		'lan46':'Audit report',
		
        'msg1':'In order to provide better service for you, please agree to authorize',
        'msg2':'Please download TP or Huobi wallet for link',
        'msg3':'Received',
        'msg4':'Not received',
        'msg5':'',//People 
        'msg6':'Please enter the website provided by the recommender',
        'msg7':'Please make sure the account balance is greater than 0.01HT',
        'msg8':'Sorry, your credit is running low',
        'msg9':'Please enter the correct HT quantity',


		'v249':'Join Telegram',
		'v8':'HT Address',		
		'v10':'Airdrop',
		'v23':'MellivoraCapensis',
		'v24':' Mellivoracapensis, we are going to be like the honey badger, brave, determined, tenacious. MICS are tokens for the platform, and holders of tokens are entitled to a trading bonus. With a total supply of 1,000,000,000,000,000,000, the issue initially destroyed 50% to the black hole. 10% of the total airdrop volume, 10,000,000,000,000,000,20% into the market, 20% on-line liquidity mining, 2,000,000,000  ',

		'v241':' Mellivoracapensis, we are going to be like the honey badger, brave, determined, tenacious. MICS are tokens for the platform, and holders of tokens are entitled to a trading bonus. With a total supply of 1,000,000,000,000,000,000, the issue initially destroyed 50% to the black hole. 10% of the total airdrop volume, 10,000,000,000,000,000,20% into the market, 20% on-line liquidity mining, 2,000,000,000 ',		
		
		'v26':'Receive airdrop',
		'v27':'This airdrop MICS The total quantity 10%.Where as MICS The scarcity of information，each HECO Address restriction participating in airdrop  9,100,000,000. Each participant can get MICS reward  50% 。',
		'v30':'Operating Mechanism',
		'v31':'In each trade, the transaction is taxed with a fee of 9%',
		'v33':'1% for destruction,auto burn, total reduction',
		'v34':'2% for added liquidity, 3% guarantee currency price increase, 3% for platform fee',
		'v34_1':'3% to give holder bonus, the more currency held, the more bonus',
		'v13':'Liquidity Mining',
		'v14':'Liquidity Mining  total 20%  2,000,000,000,000,000 pieces, late on-line, holding MICS can dig. ',
		'v15':'First year',
		'v16':'The second year',
		'v17':'The third year',
		'v18':'The fourth year',
		'v19':'The fifth  year',
		'v20':'The sixth  year',	
		
		'v115':'Total Airdrop',
		'v116':'Remain',
		'v117':'Refer',
		
		'v118':'Reward',
		'v119':'Team',
		'v120':'Refer',			
		
		
    },
 
};
function select_lang(languag,name){
    document.body.style.display='inline';
    document.getElementById('lang_name').innerHTML=name;
    document.getElementById('lang_box').style.display='none';
    currLang=languag;
    try{
        //var img='image/'+languag+'.png';
        //document.getElementById('lang_img_box').src=img;
		
		//var shib='image/shib_'+languag+'.jpg';
		//document.getElementById('shib').src=shib;
    
        var elem=document.getElementsByClassName("lang");//$(".lang");
        var test;
        var l=elem.length;
        for(var i=0;i<l-3;i++){
            if(typeof  elem[i]=='undefined')continue;
            test=language[languag][elem[i].dataset['attr_lang']]; 
            elem[i].innerHTML=test;
        } 
        var l={'sh':languag,'lh':name};
        localStorage.setItem("DEX_LANGUAGE",JSON.stringify(l));	
    }catch(e){alert(e);}
    if(defaultaccount.length > 0)get_info(defaultaccount);
    document.body.style.display='inline';
}

function select_first(){
    var l=JSON.parse(localStorage.getItem("DEX_LANGUAGE"));	
    //alert(JSON.stringify(l));
    if(typeof l ==='undefined' ||  l===null){
        l={'sh':'en','lh':'English'};
    }
    select_lang(l.sh,l.lh);
}
