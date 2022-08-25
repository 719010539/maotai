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
  // 配置载入
  chrome.storage.sync.get("config", ({ config }) => {
    document.getElementById("targetTime").value = new Date(config.targetTime).format("hh:mm:ss");
    document.getElementById("waitKey").value = config.waitKey;
    document.getElementById("timeStart").value = config.timeStart;
    document.getElementById("timeEnd").value = config.timeEnd;
    document.getElementById("scanTime").value = config.scanTime;
  });

  //开始执行按键
  let button = document.getElementById("run");
  button.addEventListener("click", async () => {
    // 1、保存修改
    let times = document.getElementById("targetTime").value.split(":")
    let time = new Date().setHours(times[0],times[1],times[2])
    let config = {
      targetTime:time,
      waitKey: document.getElementById("waitKey").value,
      timeStart: parseInt(document.getElementById("timeStart").value),
      timeEnd: parseInt(document.getElementById("timeEnd").value),
      scanTime: parseInt(document.getElementById("scanTime").value),
    }
    chrome.storage.sync.set({config});
    // 2、开始执行
   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files:['startBuy.js']
    });
  });
}

construct();
