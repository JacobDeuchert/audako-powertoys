import { ConfigurationEntity, EntityIcons, EntityType } from 'audako-core-components';
import { AudakoApp } from '../../../../models/audako-apps';
import { UrlUtils } from '../../../../utils/url-utils';
import { SearchResult } from '../search-results';
import { SearchQuery } from './search-query';

export class GenericEntityQuery extends SearchQuery {
  constructor(public entityType: EntityType, public defaultApp: AudakoApp) {
    super();
  }

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {
    const matchedEntities = await this.requestConfigurationEntities<ConfigurationEntity>(
      this.entityType,
      queryString,
      tenantRestriction
    );

    return Promise.all(
      matchedEntities.map(async (entity) => {
        const tenant = await this.getTenantForEntity(entity);
        const tenantId = tenant?.Id ?? tenant?.Root ?? entity.Path?.[0] ?? entity.Id;

        return {
          title: entity.Name.Value,
          infoText: tenant?.Name,
          defaultAction: () => UrlUtils.openApp(this.defaultApp, tenantId, entity.GroupId, entity.Id),
          extraActions: [],
          icon: EntityIcons[this.entityType],
          tooltip: () => this.entityNameService.resolvePathName(entity.Path ?? []),
        };
      })
    );
  }
}
