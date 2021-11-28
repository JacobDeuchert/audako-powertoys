import { AppIcons, AudakoApp } from '../../../../models/audako-apps';
import { EntityType } from '../../../../models/configuration-entity';
import { Group } from '../../../../models/group';
import { HttpService } from '../../../../services/http.service';
import { UrlUtils } from '../../../../utils/url-utils';
import { IndexedTenant } from '../search-requisites';
import { ResultAction, SearchResult } from '../search-results';
import { TenantIndexer } from '../tenant-indexer';
import { SearchQuery } from './search-query';

export class GroupQuery extends SearchQuery {

  private readonly DEFAULT_ICON = 'fas fa-folder';

  constructor(tenantIndexer: TenantIndexer, httpService: HttpService) {
    super(tenantIndexer, httpService);
  }

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {

    const indexedTenants = await this.tenantIndexer.getIndexedTenants();
    
    const defaultAction = (tenant: IndexedTenant, group: Group) =>
      UrlUtils.openApp(AudakoApp.Configuration, tenant.Id, group.Id);

    const tooltip = (group: Group) => {
      return this.httpService.resolvePathName(group.Path);
    };

    const groupProjection = { Name: 1, Path: 1, Type: 1, IsEntryPoint: 1 };
    const matchedGroups = await this.requestConfigurationEntities<Group>(
      EntityType.Group,
      queryString,
      tenantRestriction,
      groupProjection
    );

    return matchedGroups.map((group) => {
      const tenant = this.getTenantForEntity(indexedTenants, group);

      const actionButtons: ResultAction[] = [
        {
          onClick: () => UrlUtils.openApp(AudakoApp.Commissioning, tenant.Id, group.Id),
          icon: AppIcons.Commissioning,
        },
      ];

      if (group.IsEntryPoint) {
        actionButtons.unshift({
          onClick: () => UrlUtils.openApp(AudakoApp.Dashboard, tenant.Id, group.Id),
          icon: AppIcons.Dashboard,
        });
      }

      return {
        title: group.Name.Value,
        infoText: tenant?.Name,
        defaultAction: () => defaultAction(tenant, group),
        extraActions: actionButtons,
        icon: this.DEFAULT_ICON,
        tooltip: () => tooltip(group),
      };
    });
  }
}
