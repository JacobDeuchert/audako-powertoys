import { TenantView } from '../../../models/tenant-view';

export class IndexedTenant {
  Id: string;
  Name: string;
  Root: string;
  Enabled: boolean;
  Locked: boolean;
  Path: string[];

  constructor() {

  }

  public static fromTenantView(tenant: TenantView, path: string[] = []): IndexedTenant {
    const indexedTenant = new IndexedTenant();
    indexedTenant.Id = tenant.Id;
    indexedTenant.Name = tenant.Name;
    indexedTenant.Root = tenant.Root;
    indexedTenant.Enabled = tenant.Enabled;
    indexedTenant.Locked = tenant.Locked;
    indexedTenant.Path = path;
    return indexedTenant;
  }
}

export interface SearchRequisites {
  indexedTenants: IndexedTenant[];
  lastIndexed: Date;
}
