import { BehaviorSubject, filter, firstValueFrom, from, Subject } from 'rxjs';
import { ConfigurationEntity, EntityType } from '../models/configuration-entity';
import { Group } from '../models/group';
import { IndexedTenant } from '../models/search-requisites';
import { CategorizedSearchResults, ResultAction, SearchCategory, SearchResult } from '../models/search-results';
import { TenantView } from '../models/tenant-view';
import { StorageUtils } from '../utils/storage-utils';
import { AudakoApp, UrlUtils } from '../utils/url-utils';
import { HttpService } from './HttpService';
import { SignalRService } from './SignalRService';


export class SearchService {

    private _searchRegex: RegExp;

    private _categoryOrder: SearchCategory[] = [
      'Tenant',
      EntityType.Group,
      EntityType.Dashboard,
      EntityType.Signal
    ];

    private _indexedTenants: IndexedTenant[];

    private _searchInitialized$: BehaviorSubject<boolean>;

    constructor(private httpService: HttpService, private signalRService: SignalRService) {

      this._indexedTenants = [];

      this._searchInitialized$ = new BehaviorSubject<boolean>(false);

      this._searchRegex = new RegExp('(>)?([A-Z]:)?(.*)', 'i');

      this._initSearch();
    }

    public async search(query: string): Promise<CategorizedSearchResults> {

      await firstValueFrom(this._searchInitialized$.pipe(filter(initialized => initialized)));
  
      const searchMatches = this._searchRegex.exec(query);

      const tenantRestrictedSearch: boolean = searchMatches[1] === '>';

      const tenantRestriction: string = tenantRestrictedSearch ? UrlUtils.getTenantIdFromUrl(window.location.pathname) : undefined;
      const categoryRestriction: string = searchMatches[2];

      const searchTerm = searchMatches[3]?.trim();

      const searchResults = 0;
      const categorizedSearchResults: CategorizedSearchResults = [];

      for (let category of this._categoryOrder) {
        let categoryResults: SearchResult[] = [];

        if (!this._allowedCategory(category, categoryRestriction)) {
          continue;
        }

        const categoryResultFunctions: {[cat in SearchCategory]: () => Promise<SearchResult[]>} = {
          ['Tenant']: () => this._queryTenants(searchTerm, tenantRestriction),
          [EntityType.Group]: () => this._queryGroups(searchTerm, tenantRestriction),
          [EntityType.Dashboard]: () => null,
          [EntityType.Signal]: () => null
        };

        categoryResults = await categoryResultFunctions[category]();

        if (categoryResults?.length > 0) {
          categorizedSearchResults.push({
            category: category,
            results: categoryResults
          });
        }
      }

      console.log(JSON.parse(JSON.stringify(categorizedSearchResults)));
      return categorizedSearchResults;
    }

    private async _queryTenants(queryString: string, tenantRestriction: string): Promise<SearchResult[]> {

      // open configuration for default tenant and administration for management tenant if result is selected
      const defaultAction = (tenant: TenantView) => 
          UrlUtils.openApp(tenant.Root ? AudakoApp.Configuration: AudakoApp.Administration ,tenant.Id);

      const tooltip = (tenant: IndexedTenant) => {
        return [...tenant.Path, tenant.Name].join('/');
      }
      
      let matchedTenants = [];
          
      if (tenantRestriction) {
        const tenant = this._indexedTenants.find(t => t.Id === tenantRestriction);
        matchedTenants = [tenant];
      } else {
        matchedTenants = this._indexedTenants?.filter(indexedTenant => indexedTenant.Name.toLowerCase().includes(queryString)).slice(0, 4);
      }

      return matchedTenants.map(tenant => {
        return {
          defaultAction: () => defaultAction(tenant),
          extraActions: [],
          icon: 'adk adk-staff-assignment',
          tooltip: () => Promise.resolve(tooltip(tenant)),
          infoComponent: undefined,
          title: tenant.Name
        }
      });
    }

    private async _queryGroups(queryString: string, tenantRestriction: string): Promise<SearchResult[]> {

      const defaultAction = (tenant: IndexedTenant, group: Group) =>  
          UrlUtils.openApp(AudakoApp.Configuration,tenant.Id, group.Id);
      
      const tooltip = async (group: Group) => {
        return [...group.Path, group.Name].join('/');
      };

      const groupProjection = {Name: 1, Path: 1, Type: 1, IsEntryPoint: 1};
      const matchedGroups = await this._queryConfigurationEntity<Group>(EntityType.Group, queryString, tenantRestriction, groupProjection, 4);

      return matchedGroups.map(group => {
        const tenant = this._getTenantForEntity(group);

        const actionButtons: ResultAction[]= [{
            onClick: () => UrlUtils.openApp(AudakoApp.Commissioning, tenant.Id, group.Id),
            icon: 'fa fa-tools' 
          }
        ];

        if (group.IsEntryPoint) {
          actionButtons.unshift({
              onClick: () => UrlUtils.openApp(AudakoApp.Dashboard, tenant.Id, group.Id),
              icon: 'adk adk-dashboard'
            });
        }

        return {
          title: group.Name.Value,
          defaultAction: () => defaultAction(tenant, group),
          extraActions: actionButtons,
          icon: 'fas fa-folder',
          tooltip: () => tooltip(group)
        };
      });
    }

    private async _queryConfigurationEntity<T extends ConfigurationEntity>(entityType: EntityType, searchString: string, tenantRestriction: string, 
                                                                           projection: {[p in keyof T]?: number} ,limit?: number) : Promise<T[]> {
      const searchParts = searchString.split(' ');
      const fullMatchFilter = { 'Name.Value': { $regex: searchString, $options: 'i' } };
      const partMatchFilter =  {$and: searchParts.map(x => ({ 'Name.Value': { $regex: x, $options: 'i' } }))}
      let filter = {$or: [fullMatchFilter, partMatchFilter]} as {[p: string]: any};

      if (tenantRestriction && tenantRestriction.length > 0) {
        const tenant = this._indexedTenants.find(t => t.Id === tenantRestriction);

        if (tenant) {
          const pathFilter = {$or: [{Path: tenant.Root}, {Id: tenant.Root}]};
          filter = {$and: [filter, pathFilter]};
        }
      }

      const paging = {skip: 0, limit: 100};
      
      const result = await this.httpService.queryConfiguration<T>(
        entityType,
        filter,
        paging,
        projection
      );
  
      return result
        .sort((a, b) => a.Path.length - b.Path.length)
        .splice(0, limit ?? 4) as T[];
    }

    private _allowedCategory(category: SearchCategory, categoryRestriction: string): boolean {

      categoryRestriction = categoryRestriction?.toUpperCase();

      const restrictionPrefixes: {[p: string]: SearchCategory}= {
        'T:': 'Tenant',
        'G:': EntityType.Group,
        'D:': EntityType.Dashboard,
        'S:': EntityType.Signal
      }

      if (categoryRestriction === undefined || categoryRestriction.length === 0 || !restrictionPrefixes[categoryRestriction]) {
        return true;
      }

      return category === restrictionPrefixes[categoryRestriction];
    }

    private async _initSearch(): Promise<void> {
      const appConfig = await firstValueFrom(this.httpService.getAppConfig());
      console.log('appConfig', appConfig);
      this._indexedTenants = await this._getIndexedTenants();
      this._searchInitialized$.next(true);
    }

    private async _getIndexedTenants(): Promise<IndexedTenant[]> {

      const searchRequisites = await StorageUtils.getSearchRequisites(window.location.origin);

      let indexedTenants: IndexedTenant[] = [];

      if (searchRequisites?.indexedTenants) {
        indexedTenants = searchRequisites.indexedTenants;
      } else {
        indexedTenants = await this._indexTenants();
        console.log('Indexed tenants: ', indexedTenants);
        await StorageUtils.setSearchRequisites(window.location.origin, {indexedTenants: indexedTenants, lastIndexed: new Date()});
      }

      return indexedTenants;
    }

    private async _indexTenants(): Promise<IndexedTenant[]> {
      const totalTenants = [];

      const topTenants = (await this.httpService.getTopTenants())
                          .map((tenantView: TenantView) => (IndexedTenant.fromTenantView(tenantView)));

      totalTenants.push(...topTenants);

      for (const tenant of topTenants) {
        const subTenants = await this._requestTenantsRecursive(tenant);
        totalTenants.push(...subTenants);
      }
  
      return totalTenants;
    }

    private async _requestTenantsRecursive(indexedTenant: IndexedTenant): Promise<TenantView[]> {
      const totalSubtenants = [];
      const newPath = [...indexedTenant.Path, indexedTenant.Name];
      const tenants = (await this.httpService.getNextTenants(indexedTenant.Id))
                        .map((tenantView: TenantView) => IndexedTenant.fromTenantView(tenantView, newPath));
  
      totalSubtenants.push(...tenants);
  
      for (const tenant of tenants) {
        const nextTenants = await this._requestTenantsRecursive(tenant);
        totalSubtenants.push(...nextTenants);
      }
  
      return totalSubtenants;
    }

    private _getTenantForEntity(entity: ConfigurationEntity): IndexedTenant {
      let rootPathEntry = entity.Path[0];

      if (!rootPathEntry || rootPathEntry.length === 0) {
        rootPathEntry = entity.Id;
      }

      return this._indexedTenants?.find(t => t.Root === rootPathEntry);
    }
}