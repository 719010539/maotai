Date.prototype.format = function(fmt) {
  var o = {
    "M+" : this.getMonth()+1,                 //月份
    "d+" : this.getDate(),                    //日
    "h+" : this.getHours(),                   //小时
    "m+" : this.getMinutes(),                 //分
    "s+" : this.getSeconds(),                 //秒
    "q+" : Math.floor((this.getMonth()+3)/3), //季度
    "S"  : this.getMilliseconds()             //毫秒
  };
  if(/(y+)/.test(fmt)) {
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
  }
  for(var k in o) {
    if(new RegExp("("+ k +")").test(fmt)){
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    }
  }
  return fmt;
}

// -----操作面板
function construct() {
  // 修改时间
  let tt = document.getElementById("targetTime");
  chrome.storage.sync.get("targetTime", ({ targetTime }) => {
    tt.value = new Date(targetTime).format("hh:mm:ss.S");;
  });
  tt.addEventListener("change",()=>{
    let times = document.getElementById("targetTime").value.split(":")
    let targetTime = new Date().setHours(times[0],times[1],times[2].split(".")[0],times[2].split(".")[1])
    chrome.storage.sync.set({targetTime});
  })

  //开始执行按键
  let button = document.getElementById("run");
  button.addEventListener("click", async () => {
   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files:['startBuy.js']
    });
  });
}

construct();
