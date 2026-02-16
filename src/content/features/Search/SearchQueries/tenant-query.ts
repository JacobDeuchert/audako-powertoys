import type { TenantView } from 'audako-core-components';
import { AudakoApp } from '../../../../models/audako-apps';
import { type SearchResult, TenantSearchResult } from '../search-results';
import { SearchQuery } from './search-query';

export class TenantQuery extends SearchQuery {
  private readonly DEFAULT_ICON = 'adk adk-staff-assignment';

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {
    let matchedTenants: TenantView[] = [];

    if (tenantRestriction) {
      const tenant = await this.getTenantById(tenantRestriction);
      if (tenant) {
        matchedTenants = [tenant];
      }
    } else if (queryString && queryString.length > 0) {
      matchedTenants = await this.tenantHttpService.filterTenantsByName(queryString);
    }

    return matchedTenants.map(
      tenant =>
        new TenantSearchResult({
          title: tenant.Name,
          icon: this.DEFAULT_ICON,
          tooltip: () => Promise.resolve(tenant.Name),
          context: {
            tenantId: tenant.Id,
            defaultApp: tenant.Root ? AudakoApp.Configuration : AudakoApp.Administration,
            isRootTenant: !!tenant.Root,
          },
        }),
    );
  }
}
