var id = chrome.contextMenus.create({
    "title": "KotoriProxy一下",
    "contexts": ["link"],
    "onclick": openUrlWindow
});

function openUrlWindow(info, tab) {
    chrome.tabs.create({
        "url": "https://niconiconi.science/proxy.php/" + info.linkUrl
    });
}
