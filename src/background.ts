import { ExtensionMessage, MessageType } from './models/extension-message';
import { ExtensionSettings, NotificationSettings, SystemSettings } from './models/extension-settings';
import { HealthCheckService } from './services/HealthCheckService';
import { StorageUtils } from './utils/storage-utils';



let registeredSystems: SystemSettings[];
let notificationSettings: NotificationSettings;
let healthCheckService: HealthCheckService;

async function onNavigationComplete(navResult: chrome.webNavigation.WebNavigationFramedCallbackDetails): Promise<void> {
    const activeTab = (await chrome.tabs.query({active: true, currentWindow: true}))[0];

    console.log(registeredSystems);

    const systemSettings = registeredSystems.find((x) => activeTab.url?.includes(x.url));
     
    if (systemSettings && systemSettings.ft) {
        await injectContentPage(activeTab.id);
    }
}

async function onStorageChanged(changes: {[p: string]: {newValue: any, oldValue: any}}): Promise<void> {
    if (changes.registeredSystems) {
        onRegisteredSystemsChanged(changes.registeredSystems.newValue);
    }
}

async function onRegisteredSystemsChanged(newSystems: SystemSettings[]): Promise<void> {

    const addedSystems = newSystems.filter(system => !registeredSystems.some(x => x.url === system.url))
    // inject content page if newly added system is the current active tab
    if (addedSystems.length === 1) {
        const addedSystem = addedSystems[0];
        const tabs = await chrome.tabs.query({});
        console.log(tabs);

        tabs.forEach(tab => {
            if (tab.url && tab.url.includes(addedSystem.url)) {
                injectContentPage(tab.id);
            }
        })
    }

    healthCheckService.observeSystemsHealth(newSystems);
    registeredSystems = newSystems;
}

async function injectContentPage(tabId: number): Promise<void> {    
    console.log('InjectContentPage', tabId);
    await chrome.scripting.executeScript({target: {tabId: tabId, allFrames: true}, files: ['build/content.js']});
    await chrome.scripting.insertCSS({target: {tabId: tabId, allFrames: true}, files: ['build/content.css']});
}


async function initServiceWorker(): Promise<void> {
    console.log('Init Service Worker');

    registeredSystems = await StorageUtils.getRegisterdSystemSettings();
    notificationSettings = await StorageUtils.getNotificationSettings();

    console.log('RegisteredSystems', registeredSystems);

    chrome.webNavigation.onCompleted.addListener(onNavigationComplete.bind(this));
    
    chrome.storage.onChanged.addListener(onStorageChanged.bind(this));

    healthCheckService = new HealthCheckService();
    healthCheckService.observeSystemsHealth(registeredSystems);
}

initServiceWorker();