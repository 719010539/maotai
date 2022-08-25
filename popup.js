let page = document.getElementById("ChangeTime");

function construct() {
  let button = document.createElement("button");
  button.innerText = "save"
  button.addEventListener("click", setTime);
  page.appendChild(button);

  let button2 = document.createElement("button");
  button2.innerText = "run"
  button2.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: start,
    });
  });
  page.appendChild(button2);
}

var targetTime
function setTime(){
  let times = document.getElementById("targetTime").value.split(":")
  targetTime = new Date().setHours(times[0],times[1],times[2])
  console.log(targetTime)
}

function start(){
  var href = window.location.href;
  console.log(href)
  // if(href.indexOf('cart.tmall.com') > -1 ){
  //   //结算页面
  //   //进入时间判断
  //   enterTimeCheckLoop( checkOutAsync );
  // }else if(href.indexOf('buy.tmall.com') > -1 ){
  //   //提交订单页面
  //   submitOrder();
  // }
}

construct();
