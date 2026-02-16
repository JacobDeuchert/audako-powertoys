import {
  type ConfigurationEntity,
  EntityHttpService,
  EntityNameService,
  type EntityType,
  resolveService,
  TenantHttpService,
  type TenantView,
} from 'audako-core-components';
import type { SearchResult } from '../search-results';

export abstract class SearchQuery {
  protected tenantHttpService: TenantHttpService;
  protected entityHttpService: EntityHttpService;
  protected entityNameService: EntityNameService;
  private tenantById: Map<string, TenantView>;
  private tenantByEntityId: Map<string, TenantView>;

  constructor() {
    this.tenantHttpService = resolveService(TenantHttpService);
    this.entityHttpService = resolveService(EntityHttpService);
    this.entityNameService = resolveService(EntityNameService);
    this.tenantById = new Map();
    this.tenantByEntityId = new Map();
  }

  public abstract query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]>;

  protected async requestConfigurationEntities<T extends ConfigurationEntity>(
    entityType: EntityType,
    searchString: string,
    tenantRestriction?: string,
    projection?: { [p in keyof T]?: number },
  ): Promise<T[]> {
    const searchParts = searchString.split(' ');
    const fullMatchFilter = { 'Name.Value': { $regex: searchString, $options: 'i' } };
    const partMatchFilter = {
      $and: searchParts.map(x => ({ 'Name.Value': { $regex: x, $options: 'i' } })),
    };

    let filter = { $or: [fullMatchFilter, partMatchFilter] } as { [p: string]: any };

    if (tenantRestriction && tenantRestriction.length > 0) {
      const tenant = await this.getTenantById(tenantRestriction);

      if (tenant) {
        const rootId = tenant.Root ?? tenant.Id;
        const pathFilter = { $or: [{ Path: rootId }, { Id: rootId }] };
        filter = { $and: [filter, pathFilter] };
      }
    }

    // limit to 100 to reduce network load
    const paging = { skip: 0, limit: 100 };

    projection = projection || { Id: 1, Name: 1, Path: 1, GroupId: 1 };

    const result = await this.entityHttpService.queryConfiguration<T>(
      entityType,
      filter,
      paging,
      projection,
    );
    const data = result?.data ?? [];

    return data.sort((a, b) => (a.Path?.length ?? 0) - (b.Path?.length ?? 0)) as T[];
  }

  public async getTenantForEntity(entity: ConfigurationEntity): Promise<TenantView | null> {
    if (!entity?.Id) {
      return null;
    }

    const cachedTenant = this.tenantByEntityId.get(entity.Id);
    if (cachedTenant) {
      return cachedTenant;
    }

    try {
      const tenant = await this.tenantHttpService.getTenantViewForEntityId(entity.Id);
      if (tenant) {
        this.cacheTenant(tenant);
        this.tenantByEntityId.set(entity.Id, tenant);
      }
      return tenant ?? null;
    } catch {
      return null;
    }
  }

  protected async getTenantById(tenantId: string): Promise<TenantView | null> {
    if (!tenantId) {
      return null;
    }

    const cachedTenant = this.tenantById.get(tenantId);
    if (cachedTenant) {
      return cachedTenant;
    }

    try {
      const tenant = await this.tenantHttpService.getTenantViewById(tenantId);
      if (tenant) {
        this.cacheTenant(tenant);
      }
      return tenant ?? null;
    } catch {
      return null;
    }
  }

  private cacheTenant(tenant: TenantView): void {
    if (!tenant) {
      return;
    }

    this.tenantById.set(tenant.Id, tenant);
    if (tenant.Root) {
      this.tenantById.set(tenant.Root, tenant);
    }

    if (tenant.Id === tenant.Root) {
      this.tenantByEntityId.set(tenant.Id, tenant);
    }
  }
}
