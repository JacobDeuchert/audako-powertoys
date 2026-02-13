import { timer } from 'rxjs';
import { SystemSettings } from './models/extension-settings';
import { checkRichHealthCheck, checkSystemHealth, observeSystemsHealth } from './services/heal-check.service';
import { StorageUtils } from './utils/storage-utils';

type ServiceWorkerDeps = {
    getRegisteredSystems: typeof StorageUtils.getRegisteredSystemSettings;
    queryTabs: typeof chrome.tabs.query;
    getTab: typeof chrome.tabs.get;
    executeScript: typeof chrome.scripting.executeScript;
    clearAlarm: (name: string) => Promise<boolean>;
    observeSystemsHealth: typeof observeSystemsHealth;
    checkSystemHealth: typeof checkSystemHealth;
    checkRichHealthCheck: typeof checkRichHealthCheck;
};

const defaultDeps: ServiceWorkerDeps = {
    getRegisteredSystems: StorageUtils.getRegisteredSystemSettings,
    queryTabs: (queryInfo) => chrome.tabs.query(queryInfo),
    getTab: (tabId) => chrome.tabs.get(tabId),
    executeScript: (options) => chrome.scripting.executeScript(options),
    clearAlarm: (name) => chrome.alarms.clear(name),
    observeSystemsHealth,
    checkSystemHealth,
    checkRichHealthCheck,
};

const createContentInjector =
    (deps: Pick<ServiceWorkerDeps, 'getTab' | 'executeScript'>) =>
    async (tabId?: number): Promise<void> => {
        if (!tabId) {
            console.error('Cannot inject content page: tabId is undefined');
            return;
        }

        let errorCount = 0;

        const subscription = timer(0, 250).subscribe(async () => {
            console.log('InjectContentPage', tabId);
            try {
                const tab = await deps.getTab(tabId);
                if (!tab) {
                    subscription.unsubscribe();
                    return;
                }

                await deps.executeScript({ target: { tabId, allFrames: true }, files: ['build/content.js'] });
                subscription.unsubscribe();
            } catch (error) {
                errorCount++;
                if (errorCount > 5) {
                    subscription.unsubscribe();
                    console.error('Failed to inject content page:', error);
                }
            }
        });
    };

const findMatchingSystem = (url: string | undefined, systems: SystemSettings[] = []): SystemSettings | undefined =>
    systems.find((system) => url?.includes(system.url));

const createNavigationHandler =
    (
        deps: Pick<ServiceWorkerDeps, 'queryTabs' | 'getRegisteredSystems'>,
        injectContentPage: (tabId?: number) => Promise<void>,
    ) =>
    async (_details: chrome.webNavigation.WebNavigationFramedCallbackDetails): Promise<boolean> => {
        const activeTab = (await deps.queryTabs({ active: true, currentWindow: true }))[0];

        if (!activeTab || !activeTab.url || !activeTab.id) {
            return true;
        }

        const registeredSystems = await deps.getRegisteredSystems();
        const systemSettings = findMatchingSystem(activeTab.url, registeredSystems);

        if (systemSettings?.ft) {
            await injectContentPage(activeTab.id);
        }

        return true;
    };

const createRegisteredSystemsChangeHandler =
    (
        deps: Pick<ServiceWorkerDeps, 'queryTabs' | 'observeSystemsHealth'>,
        injectContentPage: (tabId?: number) => Promise<void>,
    ) =>
    async (newSystems: SystemSettings[], oldSystems: SystemSettings[] = []): Promise<void> => {
        console.log('Registered systems changed. New:', newSystems, 'Old:', oldSystems);
        const addedSystems = newSystems.filter((system) => !oldSystems.some((existing) => existing.url === system.url));

        if (addedSystems.length > 0) {
            const tabs = await deps.queryTabs({});
            console.log('Checking tabs for newly added systems:', tabs.length);

            for (const addedSystem of addedSystems) {
                for (const tab of tabs) {
                    if (tab.url && tab.id && tab.url.includes(addedSystem.url)) {
                        await injectContentPage(tab.id);
                    }
                }
            }
        }

        await deps.observeSystemsHealth(newSystems);
    };

const createStorageChangeHandler =
    (onRegisteredSystemsChanged: (newSystems: SystemSettings[], oldSystems: SystemSettings[]) => Promise<void>) =>
    async (changes: { [p: string]: { newValue: any; oldValue: any } }): Promise<boolean> => {
        console.log('Storage changes detected:', changes);
        if (changes.registeredSystems) {
            await onRegisteredSystemsChanged(changes.registeredSystems.newValue, changes.registeredSystems.oldValue);
        }
        return true;
    };

const createAlarmHandler =
    (deps: Pick<ServiceWorkerDeps, 'getRegisteredSystems' | 'checkSystemHealth' | 'checkRichHealthCheck' | 'clearAlarm'>) =>
    async (alarm: chrome.alarms.Alarm): Promise<void> => {
        console.log('Alarm triggered:', alarm.name, new Date().toISOString());

        if (!alarm.name.startsWith('healthcheck_')) {
            return;
        }

        const systemUrl = alarm.name.replace('healthcheck_', '');
        const registeredSystems = await deps.getRegisteredSystems();
        const system = registeredSystems?.find((s) => s.url === systemUrl);

        if (system) {
            await deps.checkSystemHealth(systemUrl);

            if (system.rh) {
                await deps.checkRichHealthCheck(systemUrl);
            }
            return;
        }

        console.log('Clearing alarm for removed system:', systemUrl);
        await deps.clearAlarm(alarm.name);
    };

const registerListeners = (handlers: {
    onNavigationComplete: (details: chrome.webNavigation.WebNavigationFramedCallbackDetails) => Promise<boolean>;
    onStorageChanged: (changes: { [p: string]: { newValue: any; oldValue: any } }) => Promise<boolean>;
    onAlarm: (alarm: chrome.alarms.Alarm) => Promise<void>;
}): void => {
    chrome.webNavigation.onCompleted.addListener(handlers.onNavigationComplete);
    chrome.storage.onChanged.addListener(handlers.onStorageChanged);
    chrome.alarms.onAlarm.addListener(handlers.onAlarm);
};

const initializeHealthChecks = async (deps: Pick<ServiceWorkerDeps, 'observeSystemsHealth' | 'getRegisteredSystems'>) => {
    const registeredSystems = await deps.getRegisteredSystems();
    console.log('RegisteredSystems', registeredSystems);

    await deps.observeSystemsHealth(registeredSystems);
};

const bootstrapServiceWorker = (deps: ServiceWorkerDeps) => {
    console.log('Init Service Worker: ' + new Date().toISOString());

    const injectContentPage = createContentInjector(deps);
    const onNavigationComplete = createNavigationHandler(deps, injectContentPage);
    const onRegisteredSystemsChanged = createRegisteredSystemsChangeHandler(deps, injectContentPage);
    const onStorageChanged = createStorageChangeHandler(onRegisteredSystemsChanged);
    const onAlarm = createAlarmHandler(deps);

    registerListeners({ onNavigationComplete, onStorageChanged, onAlarm });

    initializeHealthChecks(deps).catch((error) => {
        console.error('Failed to initialize health checks', error);
    });
};

bootstrapServiceWorker(defaultDeps);
