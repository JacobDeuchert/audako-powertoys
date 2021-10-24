import { FeatureSettings, NotificationSettings, SystemSettings } from '../models/extension-settings';
import { SystemStatus } from '../models/system-status';

export class StorageUtils {

  public static async getRegisterdSystemSettings(): Promise<SystemSettings[]> {
    const storageEntry = await chrome.storage.sync.get('registerdSystems') as {registerdSystems: SystemSettings[]};
    console.log(storageEntry);
    if (storageEntry && Array.isArray(storageEntry.registerdSystems)) {
      return storageEntry.registerdSystems
    }
    await this.setRegisterdSystemSettings([]);
    return [];
  }

  public static async setRegisterdSystemSettings(registeredSystems: SystemSettings[]): Promise<void> {
    await chrome.storage.sync.set({registerdSystems: registeredSystems});
  }

  public static async getSystemStats(): Promise<{[p: string]: SystemStatus}> {
    const storageEntry = await chrome.storage.sync.get('registerdSystems') as {systemStats: {[url: string]: SystemStatus}};
    console.log(storageEntry);
    if (storageEntry) {
      return storageEntry.systemStats;
    }
    await this.setSystemStats({});
    return {}
  }

  public static async setSystemStats(systemStats: {[url: string]: SystemStatus}): Promise<void> {
    await chrome.storage.sync.set({systemStats: systemStats});
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

}
