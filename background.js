let config = {
    targetTime:new Date().setHours(20,0,0),
    waitKey:"J_Go",
    timeStart:500,
    timeEnd:900,
    scanTime:200,
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ config });
});