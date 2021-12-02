import { timer } from 'rxjs';
import { ExtensionMessage, MessageType } from './models/extension-message';
import { ExtensionSettings, NotificationSettings, SystemSettings } from './models/extension-settings';
import { HealthCheckService } from './services/heal-check.service';
import { StorageUtils } from './utils/storage-utils';



let registeredSystems: SystemSettings[];
let notificationSettings: NotificationSettings;
let healthCheckService: HealthCheckService;

async function onNavigationComplete(navResult: chrome.webNavigation.WebNavigationFramedCallbackDetails): Promise<boolean> {
    const activeTab = (await chrome.tabs.query({active: true, currentWindow: true}))[0];

    const systemSettings = registeredSystems?.find((x) => activeTab.url?.includes(x.url));
     
    if (systemSettings && systemSettings.ft) {
        await injectContentPage(activeTab.id)
    }

    return true;
}

async function onStorageChanged(changes: {[p: string]: {newValue: any, oldValue: any}}): Promise<boolean> {
    if (changes.registeredSystems) {
        onRegisteredSystemsChanged(changes.registeredSystems.newValue);
    }
    return true;
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

    

    let errorCount = 0;

    const timerSubscription = timer(0, 250).subscribe(async() => {
        console.log('InjectContentPage', tabId);
        try {
            await chrome.scripting.executeScript({target: {tabId: tabId, allFrames: true}, files: ['build/content.js']});
            await chrome.scripting.insertCSS({target: {tabId: tabId, allFrames: true}, files: ['build/content.css']});
            timerSubscription.unsubscribe();

        } catch (error) {
            errorCount++;
            if (errorCount > 5) {
                timerSubscription.unsubscribe();
                console.error('Failed to inject content page:', error);
            }
        }
    });    
}


async function initServiceWorker(): Promise<void> {
    console.log('Init Service Worker: ' + new Date().toISOString());

    // register event listeners on the first event loop to prevent listeners from getting inactive
    chrome.webNavigation.onCompleted.addListener(onNavigationComplete.bind(this));
    chrome.storage.onChanged.addListener(onStorageChanged.bind(this));

    registeredSystems = await StorageUtils.getRegisteredSystemSettings();
    notificationSettings = await StorageUtils.getNotificationSettings();

    console.log('RegisteredSystems', registeredSystems);

    healthCheckService = new HealthCheckService();
    healthCheckService.observeSystemsHealth(registeredSystems);
}

initServiceWorker();

let lifeline;

keepAlive()

// send message every 5min from tab to the service worker to keep it alive
async function keepAlive() {
    if (lifeline) return;
    for (const tab of await chrome.tabs.query({ url: '*://*/*' })) {
      try {
        await chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: () => {
            chrome.runtime.connect({ name: 'keepAlive' });
            console.log('keepAlive');
          },
        });
        chrome.tabs.onUpdated.removeListener(retryOnTabUpdate);
        return;
      } catch (e) {}
    }
    chrome.tabs.onUpdated.addListener(retryOnTabUpdate);
  }
  
  function keepAliveForced() {
    lifeline?.disconnect();
    lifeline = null;
    keepAlive();
  }
  
  async function retryOnTabUpdate(tabId, info, tab) {
    if (info.url && /^(file|https?):/.test(info.url)) {
      keepAlive();
    }
  }
  
  chrome.runtime.onConnect.addListener(port => {
    if (port.name === 'keepAlive') {
      lifeline = port;
      setTimeout(keepAliveForced, 295e3);
      port.onDisconnect.addListener(keepAliveForced);
    }
  });
