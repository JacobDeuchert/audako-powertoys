export enum HealthStatus {
  Healthy = 'Healthy',
  UnHealthy = 'UnHealthy'
}

export interface CombinedHealthCheckResponse {
  Structure: HealthCheckResponse<StructureHealthEntries>;
  Event: HealthCheckResponse<EventHealthEntries>;
  Live: HealthCheckResponse<LiveHealthEntries>;
  Historian: HealthCheckResponse<HistorianHealthEntries>;
  Calendar: HealthCheckResponse<CalendarHealthEntries>;
  Maintenance: HealthCheckResponse<MaintenanceHealthEntries>;
}

export interface HealthCheckResponse<T extends HealthEntries> {
  Status: HealthStatus;
  Entries: T;
  TotalDuration: string;
}

export interface HealthEntries {

}

export interface StructureHealthEntries extends HealthEntries {
  StructureDB: BasicHealthInformation<any>;
  LockDB: BasicHealthInformation<any>;
  ContractWorker: BasicHealthInformation<any>;
}

export interface EventHealthEntries extends HealthEntries {
  StructureDB: BasicHealthInformation<any>;
  EventDB: BasicHealthInformation<any>;
  LockDB: BasicHealthInformation<any>;
  PerformanceCheck: BasicHealthInformation<EventPerformanceData>;
}

export interface LiveHealthEntries extends HealthEntries {
  StructureDB: BasicHealthInformation<any>;
  PerformanceCheck: BasicHealthInformation<LivePerformanceData>;
}

export interface HistorianHealthEntries extends HealthEntries {
  StructureDB: BasicHealthInformation<any>;
  HistorianDB: BasicHealthInformation<any>;
  LockDB: BasicHealthInformation<any>;
  WritePerformanceCheck: BasicHealthInformation<HistorianPerformanceData>;
}

export interface CalendarHealthEntries extends HealthEntries {
  SharedDB: BasicHealthInformation<any>;
  CalendarDB: BasicHealthInformation<any>;
  LockDB: BasicHealthInformation<any>;
}

export interface MaintenanceHealthEntries extends HealthEntries {
  StructureDB: BasicHealthInformation<any>;
  MaintDB: BasicHealthInformation<any>;
  LockDB: BasicHealthInformation<any>;
}


export interface BasicHealthInformation<T> {
  Data: T;
  Duration: string;
  Status: HealthStatus;
  Tags: string[];
}

export interface EventPerformanceData {
  ConditionMessages_Write: number;
  ConditionMessages_Received: number;
  Event_Raised: number;
  Error: number;
}

export interface LivePerformanceData {
  SignalMessages_Write: number;
  SignalMessages_Received: number;
  SignalMessages_Error: number;
  DatasourceStates_Write: number;
  DatasourceStates_Received: number;
}

export interface HistorianPerformanceData {
  SignalMessages_Write: number;
  SignalMessages_Received: number;
  SignalMessages_Error: number;
}
