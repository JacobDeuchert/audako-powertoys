export enum AudakoApp {
  Dashboard = 'Dashboard',
  Configuration = 'Configuration',
  Commissioning = 'Commissioning',
  Administration = 'Administration',
}

export const AppIcons: {[app in AudakoApp]: string} = {
  [AudakoApp.Dashboard]: 'adk adk-dashboard',
  [AudakoApp.Configuration]: 'fas fa-cogs',
  [AudakoApp.Commissioning]: 'fa fa-tools',
  [AudakoApp.Administration]: 'adk adk-staff-assignment',
}