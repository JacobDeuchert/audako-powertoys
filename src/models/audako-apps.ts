export enum AudakoApp {
  Dashboard = 'Dashboard',
  Configuration = 'Configuration',
  Administration = 'Administration',
  Maintenance = 'Maintenance',
}
export const AppIcons: {[app in AudakoApp]: string} = {
  [AudakoApp.Dashboard]: 'adk adk-dashboard',
  [AudakoApp.Configuration]: 'fas fa-cogs',
  [AudakoApp.Maintenance]: 'fa fa-tools',
  [AudakoApp.Administration]: 'adk adk-staff-assignment',
};
