import { ConfigurationEntity, EntityIcons, EntityType } from 'audako-core-components';
import { AudakoApp } from '../../../../models/audako-apps';
import { GenericEntitySearchResult, SearchResult } from '../search-results';
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

        return new GenericEntitySearchResult({
          category: this.entityType,
          title: entity.Name.Value,
          icon: EntityIcons[this.entityType],
          infoText: tenant?.Name,
          tooltip: () => this.entityNameService.resolvePathName(entity.Path ?? []),
          context: {
            app: this.defaultApp,
            tenantId,
            groupId: entity.GroupId,
            detailId: entity.Id,
          },
        });
      })
    );
  }
}
