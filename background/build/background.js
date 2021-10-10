function injectExtenionXMLRequest(tab) {
    if (tab) {
        chrome.scripting.executeScript({
            files: ['./InjectScript.js'],
            target: { tabId: tab.id },
            world: 'main'
        });
    }
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, 'Received message');
    if ((request === null || request === void 0 ? void 0 : request.type) === 'init') {
        injectExtenionXMLRequest(sender.tab);
    }
});
