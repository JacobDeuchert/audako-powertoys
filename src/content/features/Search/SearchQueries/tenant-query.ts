import { AppIcons, AudakoApp } from '../../../../models/audako-apps';
import { TenantView } from 'audako-core-components';
import { UrlUtils } from '../../../../utils/url-utils';
import { SearchResult } from '../search-results';
import { SearchQuery } from './search-query';

export class TenantQuery extends SearchQuery {
  private readonly DEFAULT_ICON = 'adk adk-staff-assignment';

  constructor() {
    super();
  }

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

    return matchedTenants.map((tenant) => {
      const defaultAction = () =>
        UrlUtils.openApp(tenant.Root ? AudakoApp.Configuration : AudakoApp.Administration, tenant.Id);

      let extraActions = [
        {
          icon: AppIcons.Administration,
          onClick: () => UrlUtils.openApp(AudakoApp.Administration, tenant.Id),
        },
      ];

      if (tenant.Root) {
        extraActions = [
          {
            icon: AppIcons.Dashboard,
            onClick: () => UrlUtils.openApp(AudakoApp.Dashboard, tenant.Id),
          },
          ...extraActions,
        ];
      }

      return {
        defaultAction: defaultAction,
        extraActions: extraActions,
        icon: this.DEFAULT_ICON,
        tooltip: () => Promise.resolve(tenant.Name),
        infoComponent: undefined,
        title: tenant.Name,
      };
    });
  }
}
