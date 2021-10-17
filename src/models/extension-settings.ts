export class ExtensionSettings {
  // urls on which the content script gets injected
  public registeredURLs: string[];
  public featureSettings: {
    appSwitch: FeatureSettings,
    search: FeatureSettings,
    signalLiveValues: FeatureSettings
  };

  constructor() {
    this.registeredURLs = [];
    this.featureSettings = {
      appSwitch: {
        enabled: true
      },
      search: {
        enabled: true
      },
      signalLiveValues: {
        enabled: true
      }
    };
  }
}

export class FeatureSettings {
  public enabled: boolean;

}