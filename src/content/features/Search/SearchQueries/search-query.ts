import { ConfigurationEntity, EntityType } from '../../../../models/configuration-entity';
import { HttpService } from '../../../../services/http.service';
import { IndexedTenant } from '../search-requisites';
import { SearchResult } from '../search-results';
import { TenantIndexer } from '../tenant-indexer';

export abstract class SearchQuery {
  constructor(protected tenantIndexer: TenantIndexer, protected httpService: HttpService) {}

  public abstract query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]>;


  protected async requestConfigurationEntities<T extends ConfigurationEntity>(
    entityType: EntityType,
    searchString: string,
    tenantRestriction: string,
    projection?: { [p in keyof T]?: number }
  ): Promise<T[]> {

    const indexedTenants = await this.tenantIndexer.getIndexedTenants();

    const searchParts = searchString.split(' ');
    const fullMatchFilter = { 'Name.Value': { $regex: searchString, $options: 'i' } };
    const partMatchFilter = { $and: searchParts.map((x) => ({ 'Name.Value': { $regex: x, $options: 'i' } })) };

    let filter = { $or: [fullMatchFilter, partMatchFilter] } as { [p: string]: any };


    if (tenantRestriction && tenantRestriction.length > 0) {
      const tenant = indexedTenants.find((t) => t.Id === tenantRestriction);

      if (tenant) {
        const pathFilter = { $or: [{ Path: tenant.Root }, { Id: tenant.Root }] };
        filter = { $and: [filter, pathFilter] };
      }
    }

    // limit to 100 to reduce network load
    const paging = { skip: 0, limit: 100 };

    projection = projection || { Id: 1, Name: 1, Path: 1, GroupId: 1 };

    const result = await this.httpService.queryConfiguration<T>(entityType, filter, paging, projection);

    return result.sort((a, b) => a.Path.length - b.Path.length) as T[];
  }


  public getTenantForEntity(indexedTenants: IndexedTenant[], entity: ConfigurationEntity): IndexedTenant {
    let rootPathEntry = entity.Path[0];

    if (!rootPathEntry || rootPathEntry.length === 0) {
      rootPathEntry = entity.Id;
    }

    return indexedTenants?.find(t => t.Root === rootPathEntry);
  }
}
