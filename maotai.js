//
// //定时器
// var timer = null;
//
// //检测状态
// function checkElementState(path,callback){
// 	var ele = document.querySelector(path);
// 	if(ele){
// 		callback && callback();
// 	}else{
// 		console.log('异步加载元素中....' + path );
// 		setTimeout( function(){checkElementState(path,callback);},200);
// 	}
// }
//
//
//
// //点击购买按钮
// function clickBuy(){
//
// 	console.log('买！');
//
// 	//票的数量  如果还不可以购买，这个地方获取会失败
// 	var amount = document.getElementsByClassName('mui-amount-increase')[0];
// 	amount && amount.click();  //+1
//
// 	var btnBuy = document.querySelector('');
//
// }
//
//
// //结算
// function checkOut(){
//
//
// 	console.log('结算开始....');
// 	var btn = document.getElementById('J_Go');
//
// 	if(btn){
// 		btn.click();
// 	}else{
// 		console.log('结算按钮没找到');
// 	}
//
// }
//
// function checkOutAsync(){
// 	checkElementState('#J_Go',checkOut);
// }
//
// //提交订单
// function submitOrder(){
//
// 	console.log('提交订单开始....');
//
//
//
// 	checkElementState('.go-btn',function(){
// 		var btn = document.querySelector(".go-btn");
//
// 		if(btn){
// 			btn.click();
// 		}else{
// 			console.log('提交订单按钮没找到');
// 		}
//
// 	});
// }
//
//
// //进入时间判断循环
// function enterTimeCheckLoop(callback){
// 	var date = new Date();
//
//
//
//
// 	var diff = Date.parse(targetTime) - Date.parse(targetTime) ;
//
// 	console.log(diff);
//
// 	if(diff < - 900 ){
//
// 		console.log('时间过了！');
//
// 	}else if(diff < 500 ) {
//
// 		callback && callback();
//
// 		console.log('时间到了！！！');
//
// 	}else{
// 		setTimeout(function(){ enterTimeCheckLoop(callback);},400);
//
// 		//console.log('--');
// 	}
//
//
//
// }