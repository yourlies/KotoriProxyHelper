$(document).ready(function() {

    $('#switch_proxy').html(chrome.i18n.getMessage('mainAction'));
    $('#go_blog').html(chrome.i18n.getMessage('blogAction'));


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

});
