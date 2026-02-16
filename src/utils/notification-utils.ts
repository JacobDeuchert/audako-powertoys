export class NotificationUtils {
  public static showErrorNotification(message: string): void {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: './assets/favicon.ico',
      title: 'Audako System Error',
      message: message,
    });
  }
}
