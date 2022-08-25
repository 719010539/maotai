function start(){
    var href = window.location.href;
    console.log(href,targetTimeNumber)
    if(href.indexOf('cart.taobao.com') > -1 || href.indexOf('cart.tmall.com') > -1){
        //结算页面
        //进入时间判断
        enterTimeCheckLoop(checkElementState("J_Go"));
    }else if(href.indexOf('buy.taobao.com') > -1 || href.indexOf('buy.tmall.com') > -1 ){
        //提交订单页面
        checkElementState("go-btn");
    }
}
//进入时间判断循环
function enterTimeCheckLoop(callback){
    var date = new Date();
    var diff = targetTimeNumber - date;
    console.log(diff);
    if(diff < - 900 ){
        console.log('时间过了！');
    }else if(diff < 500 ) {
        callback && callback();
        console.log('时间到了！！！');
    }else{
        setTimeout(function(){ enterTimeCheckLoop(callback);},200);
    }
}
//检测按钮在不在，在就点下去
function checkElementState(buttonId){
    var btn = document.getElementById(buttonId);
    if(btn){
        btn.click();
    }else{
        console.log('异步加载元素中....' + buttonId );
        setTimeout( function(){checkElementState(buttonId);},100);
    }
}


var targetTimeNumber
chrome.storage.sync.get("targetTime", ({ targetTime }) => {
    targetTimeNumber = targetTime
    start()
});
