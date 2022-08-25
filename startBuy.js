function start(){
    var href = window.location.href;
    if(href.indexOf('cart.taobao.com') > -1 || href.indexOf('cart.tmall.com') > -1){
        //结算页面
        //进入时间判断
        enterTimeCheckLoop(checkElementState("J_Go"));
    }else if(href.indexOf('buy.taobao.com') > -1 || href.indexOf('buy.tmall.com') > -1 ){
        //提交订单页面
        checkElementState("go-btn");
    }else{
        enterTimeCheckLoop(checkElementState(waitKey));
    }
}
//进入时间判断循环
function enterTimeCheckLoop(callback){
    var date = new Date();
    var diff = targetTimeNumber - date;
    console.log("剩余毫秒数："+diff);
    if(diff < - timeEnd ){
        console.log('时间过了！');
    }else if(diff < timeStart ) {
        callback && callback();
        console.log('时间到了！！！');
    }else{
        setTimeout(function(){ enterTimeCheckLoop(callback);},scanTime);
    }
}
//检测按钮在不在，在就点下去
function checkElementState(buttonId){
    var btn = document.getElementById(buttonId);
    if(btn){
        btn.click();
    }else{
        console.log('异步加载元素中....' + buttonId );
        setTimeout( function(){checkElementState(buttonId);},scanTime>>2);
    }
}


var targetTimeNumber,waitKey,timeStart,timeEnd,scanTime
chrome.storage.sync.get("config", ({ config }) => {
    console.log(config)
    targetTimeNumber = config.targetTime
    waitKey = config.waitKey
    timeStart = config.timeStart
    timeEnd = config.timeEnd
    scanTime = config.scanTime
    start()
});
