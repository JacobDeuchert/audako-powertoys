import { AppConfig } from '../models/app.config';
import { SystemSettings } from '../models/extension-settings';
import { HealthCheckResponse } from '../models/health-check-response';
import { SystemStatus } from '../models/system-status';
import { NotificationUtils } from '../utils/notification-utils';
import { StorageUtils } from '../utils/storage-utils';

type SystemStats = Record<string, SystemStatus>;

const ALARM_PREFIX = 'healthcheck_';
const CHECK_INTERVAL_MINUTES = 1;

let systemStats: SystemStats = {};

const loadSystemStats = async (): Promise<SystemStats> => {
    systemStats = (await StorageUtils.getSystemStats()) ?? {};
    return systemStats;
};

const syncStatsToStorage = () => StorageUtils.setSystemStats(systemStats);

const requestAppConfig = async (baseUrl: string): Promise<AppConfig> => {
    const response = await fetch(`${baseUrl}/assets/conf/application.config`, { cache: 'no-cache' });

    if (response.status !== 200) {
        throw new Error(response.status.toString());
    }

    return response.json();
};

export const observeSystemsHealth = async (systems: SystemSettings[]): Promise<void> => {
    console.log('Observing systems', systems);
    await loadSystemStats();

    const existingAlarms = await chrome.alarms.getAll();
    const healthCheckAlarms = existingAlarms.filter((alarm) => alarm.name.startsWith(ALARM_PREFIX));

    const systemUrls = systems.map((s) => s.url);
    for (const alarm of healthCheckAlarms) {
        const url = alarm.name.replace(ALARM_PREFIX, '');
        if (!systemUrls.includes(url)) {
            await chrome.alarms.clear(alarm.name);
            delete systemStats[url];
        }
    }

    for (const system of systems) {
        const alarmName = ALARM_PREFIX + system.url;
        const existingAlarm = await chrome.alarms.get(alarmName);

        if (!existingAlarm) {
            if (!systemStats[system.url]) {
                systemStats[system.url] = { healthy: true };
            }

            await chrome.alarms.create(alarmName, {
                delayInMinutes: 0,
                periodInMinutes: CHECK_INTERVAL_MINUTES,
            });

            console.log(`Created health check alarm for ${system.url}`);
        }
    }

    syncStatsToStorage();
};

export const checkSystemHealth = async (systemUrl: string): Promise<void> => {
    console.log('Checking health for:', systemUrl);

    await loadSystemStats();

    if (!systemStats[systemUrl]) {
        systemStats[systemUrl] = { healthy: true };
    }

    try {
        await requestAppConfig(systemUrl);
        const healthy = true;
        const lastStatus = systemStats[systemUrl];

        if (healthy !== lastStatus.healthy) {
            systemStats[systemUrl] = { healthy };
            syncStatsToStorage();
        }
    } catch (error) {
        const healthy = false;
        const lastStatus = systemStats[systemUrl];

        if (healthy !== lastStatus.healthy) {
            console.log('System unhealthy:', systemUrl);
            NotificationUtils.showErrorNotification(`System: ${new URL(systemUrl).hostname} not reachable`);
            systemStats[systemUrl] = { healthy };
            syncStatsToStorage();
        }
    }
};

export const checkRichHealthCheck = async (systemUrl: string): Promise<void> => {
    console.log('Rich health check not yet implemented for:', systemUrl);
};

export const getHealthChecInformation = async <T>(): Promise<HealthCheckResponse<T>> => {
    // TODO: implement when a consumer is available
    return null;
};
