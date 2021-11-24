import { AudakoApp } from '../../../../models/audako-apps';
import { ConfigurationEntity, EntityIcons, EntityType } from '../../../../models/configuration-entity';
import { HttpService } from '../../../../services/http.service';
import { UrlUtils } from '../../../../utils/url-utils';
import { IndexedTenant } from '../search-requisites';
import { SearchResult } from '../search-results';
import { TenantIndexer } from '../tenant-indexer';
import { SearchQuery } from './search-query';

export class GenericEntityQuery extends SearchQuery {
  constructor(tenantIndexer: TenantIndexer, httpService: HttpService, public entityType: EntityType, public defaultApp: AudakoApp) {
    super(tenantIndexer, httpService);
  }

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {

    const indexedTenants = await this.tenantIndexer.getIndexedTenants();

    const defaultAction = (tenant: IndexedTenant, entity: ConfigurationEntity) =>  
        UrlUtils.openApp(this.defaultApp, tenant.Id, entity.GroupId, entity.Id);

      const tooltip = (entity: ConfigurationEntity) => {
        return this.httpService.resolvePathName(entity.Path);
      };

      const matchedEntities = await this.requestConfigurationEntities<ConfigurationEntity>(this.entityType, queryString, tenantRestriction);
      
      return matchedEntities.map(entity => {
        const tenant = this.getTenantForEntity(indexedTenants, entity);

        return {
          title: entity.Name.Value,
          infoText: tenant.Name,
          defaultAction: () => defaultAction(tenant, entity),
          extraActions: [],
          icon: EntityIcons[this.entityType],
          tooltip: () => tooltip(entity)
        };
      })
  }
}
