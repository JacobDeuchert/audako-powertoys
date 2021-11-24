import { BehaviorSubject, filter, firstValueFrom, from, Subject } from 'rxjs';
import { ConfigurationEntity, EntityType } from '../../../models/configuration-entity';
import { Group } from '../../../models/group';
import { TenantView } from '../../../models/tenant-view';
import { StorageUtils } from '../../../utils/storage-utils';
import { UrlUtils } from '../../../utils/url-utils';
import { HttpService } from '../../../services/http.service';
import { SignalRService } from '../../../services/signalR.service';
import { IndexedTenant } from './search-requisites';
import { CategorizedSearchResults, ResultAction, SearchCategory, SearchResult } from './search-results';
import { SearchQuery } from './SearchQueries/search-query';
import { TenantQuery } from './SearchQueries/tenant-query';
import { TenantIndexer } from './tenant-indexer';
import { GroupQuery } from './SearchQueries/group-query';
import { GenericEntityQuery } from './SearchQueries/generic-entity-query';
import { AudakoApp } from '../../../models/audako-apps';


export class SearchService {

    private _searchRegex: RegExp;

    private _categoryOrder: SearchCategory[] = [
      'Tenant',
      EntityType.Group,
      EntityType.Dashboard,
      EntityType.Signal
    ];

    
    private _searchInitialized$: BehaviorSubject<boolean>;

    private tenantIndexer: TenantIndexer;

    constructor(private httpService: HttpService, private signalRService: SignalRService) {

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

        const categoryResultFunctions: {[cat in SearchCategory]: () => SearchQuery} = {
          ['Tenant']: () => new TenantQuery(this.tenantIndexer, this.httpService),
          [EntityType.Group]: () => new GroupQuery(this.tenantIndexer, this.httpService),
          [EntityType.Dashboard]: () => new GenericEntityQuery(this.tenantIndexer, this.httpService, EntityType.Dashboard, AudakoApp.Dashboard), 
          [EntityType.Signal]: () => new GenericEntityQuery(this.tenantIndexer, this.httpService, EntityType.Signal, AudakoApp.Configuration)
        };

        const searchQuery = categoryResultFunctions[category]();

        categoryResults = await searchQuery.query(searchTerm, tenantRestriction);

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

      this.tenantIndexer = new TenantIndexer(this.httpService);
      this._searchInitialized$.next(true);
    }
}