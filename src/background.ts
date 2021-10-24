import { ExtensionMessage, MessageType } from './models/extension-message';
import { ExtensionSettings, NotificationSettings, SystemSettings } from './models/extension-settings';
import { HealthCheckService } from './services/HealthCheckService';
import { StorageUtils } from './utils/storage-utils';



let registeredSystems: SystemSettings[];
let notificationSettings: NotificationSettings;

async function onNavigationComplete(navResult: chrome.webNavigation.WebNavigationFramedCallbackDetails): Promise<void> {
    const activeTab = (await chrome.tabs.query({active: true, currentWindow: true}))[0];

    if (registeredSystems.some(x => navResult.url.includes(x.url))) {
        await injectContentPage(activeTab.id);
    }
}

async function onMessageReceived(message: ExtensionMessage): Promise<void> {
    console.log('Received message', message);
    switch (message.type) {
        case MessageType.RegisterUrl:
            onUrlRegistered();
            break;
    }
}

async function onUrlRegistered() {
    const activeTab = (await chrome.tabs.query({active: true, currentWindow: true}))[0];
    console.log('Content page added', activeTab);

    const url = new URL(activeTab.url);

    if (!registeredSystems.some(x => x.url === url.origin)) {
        const newSystemEntry: SystemSettings = {
            nt: true,
            ft: true,
            url: url.origin,
            al: null,
            rh: false
        } 

        injectContentPage(activeTab.id);
        monitorSystemHealth(newSystemEntry);
        registeredSystems.push(newSystemEntry);
        console.log(registeredSystems);
        await StorageUtils.setRegisterdSystemSettings(registeredSystems);
    }
}

async function injectContentPage(tabId: number): Promise<void> {    
    await chrome.scripting.executeScript({target: {tabId: tabId, allFrames: true}, files: ['build/content.js']});
    await chrome.scripting.insertCSS({target: {tabId: tabId, allFrames: true}, files: ['build/content.css']});
}

async function monitorSystemHealth(system: SystemSettings): Promise<void> {

    const healthCheckService = new HealthCheckService();
    healthCheckService.observeWebsiteHealth(system.url).subscribe((healthy: boolean) => {
        console.log('Healthy', healthy);
        if (healthy) {

        } else {
            chrome.notifications.create({
                type: 'basic',
                iconUrl: './assets/favicon.ico',
                title: 'audako system error',
                message: `Failed to reach Website for System: ${system.al ?? system.url}!`
            })
        }
    });
}

async function initServiceWorker(): Promise<void> {
    console.log('Init Service Worker');

    registeredSystems = await StorageUtils.getRegisterdSystemSettings();
    notificationSettings = await StorageUtils.getNotificationSettings();

    console.log('RegisteredSystems', registeredSystems);

    chrome.webNavigation.onCompleted.addListener(onNavigationComplete.bind(this));
    chrome.runtime.onMessage.addListener(onMessageReceived.bind(this));

    registeredSystems.forEach(system => {
        if (system) {
            monitorSystemHealth(system);
        }
    });
}

initServiceWorker();