$(document).ready(function() {

    $('#switch_proxy').html('KotoriProxy一下');
    $('#check_update').html('检查更新');
    $('#go_blog').html('前往博客');


    $('#switch_proxy').click(function() {

        chrome.tabs.getSelected(function(tab) {
            var tabId = tab.id;
            var tabUrl = tab.url;
            chrome.tabs.update(tabId, {
                url: "https://niconiconi.science/proxy.php/" + tabUrl
            });
        });
        return false;
    });

    $('#go_blog').click(function() {
        chrome.tabs.create({
            url: "https://kotori.love"
        });
        return false;
    });

    $('#check_update').click(function() {
        chrome.tabs.create({
            url: "https://github.com/kokororin/KotoriProxyHelper"
        });
    });

});
