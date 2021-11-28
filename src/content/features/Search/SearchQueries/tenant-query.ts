import { AppIcons, AudakoApp } from '../../../../models/audako-apps';
import { TenantView } from '../../../../models/tenant-view';
import { HttpService } from '../../../../services/http.service';
import { UrlUtils } from '../../../../utils/url-utils';
import { IndexedTenant } from '../search-requisites';
import { SearchResult } from '../search-results';
import { TenantIndexer } from '../tenant-indexer';
import { SearchQuery } from './search-query';

export class TenantQuery extends SearchQuery {

  private readonly DEFAULT_ICON = 'adk adk-staff-assignment';

  constructor(tenantIndexer: TenantIndexer, httpService: HttpService) {
    super(tenantIndexer, httpService);
  }

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {

      const indexedTenants = await this.tenantIndexer.getIndexedTenants();
      // open configuration for default tenant and administration for management tenant if result is selected
      const defaultAction = (tenant: TenantView) => 
          UrlUtils.openApp(tenant.Root ? AudakoApp.Configuration: AudakoApp.Administration ,tenant.Id);

      const tooltip = (tenant: IndexedTenant) => {
        return [...tenant.Path, tenant.Name].join('/');
      }
      
      let matchedTenants = [];
          
      if (tenantRestriction) {
        const tenant = indexedTenants.find(t => t.Id === tenantRestriction);
        matchedTenants = [tenant];
      } else {
        matchedTenants = indexedTenants?.filter(indexedTenant => indexedTenant.Name.toLowerCase().includes(queryString));
      }

      return matchedTenants.map(tenant => {
        
        let extraActions = [
          {
            icon: AppIcons.Administration,
            onClick: () => UrlUtils.openApp(AudakoApp.Administration, tenant.Id), 
          }
        ]

        if (tenant.Root) {
          extraActions = [
          {
            icon: AppIcons.Dashboard,
            onClick: () => UrlUtils.openApp(AudakoApp.Dashboard, tenant.Id),
          },
          {
            icon: AppIcons.Commissioning,
            onClick: () => UrlUtils.openApp(AudakoApp.Commissioning, tenant.Id),
          },
          ...extraActions
        ]
        }

        

        return {
          defaultAction: () => defaultAction(tenant),
          extraActions: extraActions,
          icon: this.DEFAULT_ICON,
          tooltip: () => Promise.resolve(tooltip(tenant)),
          infoComponent: undefined,
          title: tenant.Name
        }
      });
  }

}