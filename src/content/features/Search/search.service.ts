import { BehaviorSubject, filter, firstValueFrom } from 'rxjs';
import { UrlUtils } from '../../../utils/url-utils';
import { CategorizedSearchResults, SearchCategory, SearchResult } from './search-results';
import { SearchQuery } from './SearchQueries/search-query';
import { TenantQuery } from './SearchQueries/tenant-query';
import { GroupQuery } from './SearchQueries/group-query';
import { GenericEntityQuery } from './SearchQueries/generic-entity-query';
import { AudakoApp } from '../../../models/audako-apps';
import { SignalQuery } from './SearchQueries/signal-query';
import { EntityType } from 'audako-core-components';


export class SearchService {

    private _searchRegex: RegExp;

    private _categoryOrder: SearchCategory[] = [
      'Tenant',
      EntityType.Group,
      EntityType.Dashboard,
      EntityType.Signal
    ];

    
    private _searchInitialized$: BehaviorSubject<boolean>;

    private categorieQueries: {[cat in SearchCategory]?: SearchQuery};

    constructor() {
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

      const searchTerm = searchMatches[3]?.trim() ?? '';

      const categorizedSearchResults: CategorizedSearchResults = [];

      for (let category of this._categoryOrder) {
        let categoryResults: SearchResult[] = [];

        if (!this._allowedCategory(category, categoryRestriction)) {
          continue;
        }

        const searchQuery = this.categorieQueries[category];

        categoryResults = await searchQuery.query(searchTerm, tenantRestriction);

        if (categoryResults?.length > 0) {
          categorizedSearchResults.push({
            category: category,
            results: categoryResults
          });
        }
      }
      
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
      this.categorieQueries = {
        ['Tenant']: new TenantQuery(),
        [EntityType.Group]: new GroupQuery(),
        [EntityType.Dashboard]: new GenericEntityQuery(EntityType.Dashboard, AudakoApp.Dashboard),
        [EntityType.Signal]: new SignalQuery(),
      };

      
      this._searchInitialized$.next(true);
    }
}
