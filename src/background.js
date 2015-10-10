var menu = chrome.contextMenus.create({
    "title": chrome.i18n.getMessage('proxy'),
    "contexts": ["link"],
    "onclick": openUrlWindow
});

//打开网址
function openUrlWindow(info, tab) {
    chrome.tabs.create({
        "url": "https://niconiconi.science/proxy.php/" + info.linkUrl
    });
}


//弹出chrome通知
function showNotification(opt) {
    var notification = chrome.notifications.create(status.toString(), opt, function(notifyId) {
        return notifyId
    });
    setTimeout(function() {
        chrome.notifications.clear(status.toString(), function() {});
    }, 5000);
}

//点击按钮
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.getSelected(function(tab) {
        var tabId = tab.id;
        var tabUrl = tab.url;
        chrome.tabs.update(tabId, {
            url: "https://niconiconi.science/proxy.php/" + tabUrl
        });
    });
});

//软件版本更新提示
var manifest = chrome.runtime.getManifest();
var previousVersion = localStorage.getItem("version");
if (previousVersion == "" || previousVersion != manifest.version) {
    var opt = {
        type: "basic",
        title: "更新",
        message: chrome.i18n.getMessage('appName') + manifest.version + "版本啦～\n此次更新修复BUG~",
        iconUrl: "imgs/icon-128.png"
    }
    showNotification(opt);
    localStorage.setItem("version", manifest.version);
}
