import { type ConfigurationEntity, EntityIcons, type EntityType } from 'audako-core-components';
import type { AudakoApp } from '../../../../models/audako-apps';
import { GenericEntitySearchResult, type SearchResult } from '../search-results';
import { SearchQuery } from './search-query';

export class GenericEntityQuery extends SearchQuery {
  constructor(
    public entityType: EntityType,
    public defaultApp: AudakoApp,
  ) {
    super();
  }

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {
    const matchedEntities = await this.requestConfigurationEntities<ConfigurationEntity>(
      this.entityType,
      queryString,
      tenantRestriction,
    );

    return Promise.all(
      matchedEntities.map(async entity => {
        const tenant = await this.getTenantForEntity(entity);
        const tenantId = tenant?.Id ?? tenant?.Root ?? entity.Path?.[0] ?? entity.Id;

        const subtitle = await this.resolveSubtitle(tenant?.Name, entity.Path ?? []);

        return new GenericEntitySearchResult({
          category: this.entityType,
          title: entity.Name.Value,
          subtitle,
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
      }),
    );
  }
}
