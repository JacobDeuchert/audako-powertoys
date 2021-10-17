import { ExtensionSettings } from './models/extension-settings';

let extensionSettings = null;


async function handleNavigation(navResult: chrome.webNavigation.WebNavigationFramedCallbackDetails): Promise<void> {
    console.log('Nav completed');
    const activeTab = (await chrome.tabs.query({active: true, currentWindow: true}))[0];

    if (extensionSettings?.registeredURLs.some(x => navResult.url.includes(x))) {
        chrome.scripting.executeScript({target: {tabId: activeTab.id, allFrames: true}, files: ['build/content.js']}, (result) => {
            console.log(result);
        });

        chrome.scripting.insertCSS({target: {tabId: activeTab.id, allFrames: true}, files: ['build/content.css']}, () => {
            console.log('Injected CSS');
        });
    }

    console.log(activeTab);
    console.log(navResult);
}

async function initServiceWorker() {
    console.log('Init Service Worker');

    const storedExtensionSettings = (await chrome.storage.sync.get('extension-settings')) as ExtensionSettings;
    if (storedExtensionSettings) {
        extensionSettings = storedExtensionSettings;
    } else {
        extensionSettings = new ExtensionSettings();
        await chrome.storage.sync.set({'extension-settings': extensionSettings});
    }

    chrome.webNavigation.onCompleted.addListener(handleNavigation.bind(this));

    console.log(extensionSettings);
}

initServiceWorker();