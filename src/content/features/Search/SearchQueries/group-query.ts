import { EntityType, Group } from 'audako-core-components';
import { AppIcons, AudakoApp } from '../../../../models/audako-apps';
import { UrlUtils } from '../../../../utils/url-utils';
import { ResultAction, SearchResult } from '../search-results';
import { SearchQuery } from './search-query';

export class GroupQuery extends SearchQuery {

  private readonly DEFAULT_ICON = 'fas fa-folder';

  constructor() {
    super();
  }

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {

    const groupProjection = { Name: 1, Path: 1, Type: 1, IsEntryPoint: 1 };
    const matchedGroups = await this.requestConfigurationEntities<Group>(
      EntityType.Group,
      queryString,
      tenantRestriction,
      groupProjection
    );

    return Promise.all(
      matchedGroups.map(async (group) => {
        const tenant = await this.getTenantForEntity(group);
        const tenantId = tenant?.Id ?? tenant?.Root ?? group.Path?.[0] ?? group.Id;

    const actionButtons: ResultAction[] = [];

    if (group.IsEntryPoint) {
      actionButtons.push({
        onClick: () => UrlUtils.openApp(AudakoApp.Dashboard, tenantId, group.Id),
        icon: AppIcons.Dashboard,
      });
    }

        return {
          title: group.Name.Value,
          infoText: tenant?.Name,
          defaultAction: () => UrlUtils.openApp(AudakoApp.Configuration, tenantId, group.Id),
          extraActions: actionButtons,
          icon: this.DEFAULT_ICON,
          tooltip: () => this.entityNameService.resolvePathName(group.Path ?? []),
        };
      })
    );
  }
}
