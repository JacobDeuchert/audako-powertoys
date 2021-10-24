export class ExtensionSettings {
  // urls on which the content script gets injected
  public registeredSystems: SystemSettings[];
  constructor() {
    this.registeredSystems = [];
  }
}

export class FeatureSettings {
  enabled: boolean;

  appSwitchSettings: {
    enabled: boolean;
  };

  searchSettings: {
    enabled: boolean;
  };

  signalLiveValuesSettings: {
    enabled: boolean;
  };
}

// used short property names to reduce storage amount in sync storage
export interface SystemSettings {
  url: string;
  // notifications
  nt: boolean;
  // features
  ft: boolean;
  // alias
  al: string;
  // rich healtchecks
  rh: boolean;
}

export interface NotificationSettings {
  enabled: boolean;
}
