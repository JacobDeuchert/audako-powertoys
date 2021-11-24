import { ConfigurationEntity } from '../../../models/configuration-entity';
import { TenantView } from '../../../models/tenant-view';
import { HttpService } from '../../../services/http.service';
import { StorageUtils } from '../../../utils/storage-utils';
import { IndexedTenant } from './search-requisites';

export class TenantIndexer {

  private indexedTenants: IndexedTenant[];

  constructor(private httpService: HttpService) {
    this.indexedTenants = [];
  }

  public async getIndexedTenants(): Promise<IndexedTenant[]> {
    const searchRequisites = await StorageUtils.getSearchRequisites(window.location.origin);

    if (this.indexedTenants?.length > 1) {
      return this.indexedTenants;
    }

    if (searchRequisites?.indexedTenants?.length > 0) {
      this.indexedTenants = searchRequisites.indexedTenants;
      return this.indexedTenants;
    }

    const indexedTenants = await this._indexTenants();
    console.log('Indexed tenants: ', indexedTenants);
    await StorageUtils.setSearchRequisites(window.location.origin, {
      indexedTenants: indexedTenants,
      lastIndexed: new Date(),
    });

    this.indexedTenants = indexedTenants;
    return indexedTenants;
  }

  private async _indexTenants(): Promise<IndexedTenant[]> {
    const totalTenants = [];

    const topTenants = (await this.httpService.getTopTenants()).map((tenantView: TenantView) =>
      IndexedTenant.fromTenantView(tenantView)
    );

    totalTenants.push(...topTenants);

    for (const tenant of topTenants) {
      const subTenants = await this._requestTenantsRecursive(tenant);
      totalTenants.push(...subTenants);
    }

    return totalTenants;
  }
  
  private async _requestTenantsRecursive(indexedTenant: IndexedTenant): Promise<TenantView[]> {
    const totalSubtenants = [];
    const newPath = [...indexedTenant.Path, indexedTenant.Name];
    const tenants = (await this.httpService.getNextTenants(indexedTenant.Id)).map((tenantView: TenantView) =>
      IndexedTenant.fromTenantView(tenantView, newPath)
    );

    totalSubtenants.push(...tenants);

    for (const tenant of tenants) {
      const nextTenants = await this._requestTenantsRecursive(tenant);
      totalSubtenants.push(...nextTenants);
    }

    return totalSubtenants;
  }
}
