
function injectExtenionXMLRequest(tab: chrome.tabs.Tab) {
    if (tab) {
        chrome.scripting.executeScript({
            files: ['./InjectScript.js'],
            target: {tabId: tab.id},
            world: 'main'
        } as chrome.scripting.ScriptInjection)
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, 'Received message');
    if (request?.type === 'init') {
        injectExtenionXMLRequest(sender.tab);
    }
});

