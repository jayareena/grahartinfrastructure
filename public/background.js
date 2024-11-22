// chrome.tabs API usage
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  console.log(tabId, changeInfo, tab);
});

// chrome.contextMenus API usage
chrome.contextMenus.create({
  id: "sampleContextMenu",
  title: "Sample Context Menu",
  contexts: ["all"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  console.log('Context menu clicked');
});

// chrome.downloads API usage
chrome.downloads.onCreated.addListener((downloadItem) => {
  console.log('Download created:', downloadItem);
});
