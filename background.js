let targetTime = new Date().setHours(19,59,59,400);

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ targetTime });
    console.log('Default targetTime set to %c', `targetTime: ${targetTime}`);
});