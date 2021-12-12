import { BehaviorSubject, combineLatest, concat, from, Observable, Subject } from 'rxjs';
import { SearchRequisites } from '../content/features/Search/search-requisites';
import { FeatureSettings, NotificationSettings, SystemSettings } from '../models/extension-settings';
import { SystemStatus } from '../models/system-status';

export type SystemStats = {[p: string]: SystemStatus};
export class StorageUtils {

  public static async getRegisteredSystemSettings(): Promise<SystemSettings[]> {
    const storageEntry = await chrome.storage.sync.get('registeredSystems') as {registeredSystems: SystemSettings[]};
    console.log(storageEntry);
    if (storageEntry && Array.isArray(storageEntry.registeredSystems)) {
      return storageEntry.registeredSystems
    }
    await this.setRegisterdSystemSettings([]);
    return [];
  }

  public static async setRegisterdSystemSettings(registeredSystems: SystemSettings[]): Promise<void> {
    await chrome.storage.sync.set({registeredSystems: registeredSystems});
  }

  public static async getSystemStats(): Promise<{[p: string]: SystemStatus}> {
    const storageEntry = await chrome.storage.sync.get('systemStats') as {systemStats: {[url: string]: SystemStatus}};
    console.log(storageEntry);
    if (storageEntry) {
      return storageEntry.systemStats;
    }
    await this.setSystemStats({});
    return {}
  }

  public static async setSystemStats(systemStats: SystemStats): Promise<void> {
    await chrome.storage.sync.set({systemStats: systemStats});
  }

  public static listenForStatusChanges(): Observable<{[p: string]: SystemStatus}> {
    const systemStatsChanged = new Subject<{[p: string]: SystemStatus}>();
    
    chrome.storage.onChanged.addListener((changes: {systemStats?: {newValue: SystemStats, oldValue: SystemStats}})=> {
      if (changes.systemStats) {
        systemStatsChanged.next(changes.systemStats.newValue);
      }
      return true;
    });
    return concat(from(this.getSystemStats()), systemStatsChanged.asObservable());
  }

  public static async getFeatureSettings(): Promise<FeatureSettings> {
    const storageEntry = await chrome.storage.sync.get('featureSettings') as {featureSettings: FeatureSettings};
    console.log(storageEntry);

    return storageEntry?.featureSettings;
  }

  public static async getNotificationSettings(): Promise<NotificationSettings> {
    const storageEntry = await chrome.storage.sync.get('notifiactionSettings') as {notifiactionSettings: NotificationSettings};
    if (storageEntry && storageEntry.notifiactionSettings) {
      return storageEntry.notifiactionSettings;
    }

    const notifiactionSettings: NotificationSettings = {
      enabled: true
    } 
    await this.setNotificationSettings(notifiactionSettings);
    return notifiactionSettings;
  }

  public static async setNotificationSettings(notifiactionSettings: NotificationSettings): Promise<void> {
    await chrome.storage.sync.set({notifiactionSettings: notifiactionSettings});
  }

  public static async getSearchRequisites(systemUrl: string): Promise<SearchRequisites> {
    const storageEntry = await chrome.storage.local.get(`${systemUrl}_searchrequisites`) as {[p: string]: SearchRequisites};
    return storageEntry[`${systemUrl}_searchrequisites`];
  }

  public static async setSearchRequisites(systemUrl: string, searchRequisites: SearchRequisites): Promise<void> {
    await chrome.storage.local.set({[`${systemUrl}_searchrequisites`]: searchRequisites});
  }

}
