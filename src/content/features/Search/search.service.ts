import { EntityType } from 'audako-core-components';
import { BehaviorSubject, filter, firstValueFrom } from 'rxjs';
import { AudakoApp } from '../../../models/audako-apps';
import { UrlUtils } from '../../../utils/url-utils';
import { CommandQuery } from './SearchQueries/command-query';
import { GenericEntityQuery } from './SearchQueries/generic-entity-query';
import { GroupQuery } from './SearchQueries/group-query';
import type { SearchQuery } from './SearchQueries/search-query';
import { SignalQuery } from './SearchQueries/signal-query';
import { TenantQuery } from './SearchQueries/tenant-query';
import type { CategorizedSearchResults, SearchCategory, SearchResult } from './search-results';

export class SearchService {
  private _searchRegex: RegExp;

  private _categoryOrder: SearchCategory[] = [
    'Tenant',
    EntityType.Group,
    EntityType.Dashboard,
    EntityType.Signal,
    EntityType.Formula,
    EntityType.DataSource,
    EntityType.DataConnection,
    EntityType.ReportTemplate,
    'Command',
  ];

  private _searchInitialized$: BehaviorSubject<boolean>;

  private categorieQueries: { [cat in SearchCategory]?: SearchQuery };

  constructor() {
    this._searchInitialized$ = new BehaviorSubject<boolean>(false);

    this._searchRegex = /(>)?(!)?([A-Z]:)?(.*)/i;

    this._initSearch();
  }

  public async search(query: string): Promise<CategorizedSearchResults> {
    await firstValueFrom(this._searchInitialized$.pipe(filter(initialized => initialized)));

    const searchMatches = this._searchRegex.exec(query);

    const tenantRestrictedSearch: boolean = searchMatches[1] === '>';

    const tenantRestriction: string = tenantRestrictedSearch
      ? UrlUtils.getTenantIdFromUrl(window.location.pathname)
      : undefined;
    const commandOnlySearch: boolean = searchMatches[2] === '!';
    const categoryRestriction: string = commandOnlySearch ? undefined : searchMatches[3];

    const searchTerm = searchMatches[4]?.trim() ?? '';

    const categorizedSearchResults = await Promise.all(
      this._categoryOrder.map(async category => {
        if (!this._allowedCategory(category, categoryRestriction, commandOnlySearch)) {
          return null;
        }

        const searchQuery = this.categorieQueries[category];
        let categoryResults: SearchResult[] = [];
        try {
          categoryResults = await searchQuery.query(searchTerm, tenantRestriction);
        } catch (error) {
          console.error(`Search query for category "${category}" failed`, error);
          return null;
        }

        if (!categoryResults?.length) {
          return null;
        }

        return {
          category,
          results: categoryResults,
        };
      }),
    );

    return categorizedSearchResults.filter(
      (result): result is CategorizedSearchResults[number] => result !== null,
    );
  }

  private _allowedCategory(
    category: SearchCategory,
    categoryRestriction: string,
    commandOnlySearch: boolean = false,
  ): boolean {
    if (commandOnlySearch) {
      return category === 'Command';
    }

    const restrictionPrefixes: { [p: string]: SearchCategory } = {
      'T:': 'Tenant',
      'G:': EntityType.Group,
      'D:': EntityType.Dashboard,
      'S:': EntityType.Signal,
    };

    if (
      categoryRestriction === undefined ||
      categoryRestriction.length === 0 ||
      !restrictionPrefixes[categoryRestriction]
    ) {
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
      [EntityType.Formula]: new GenericEntityQuery(EntityType.Formula, AudakoApp.Configuration),
      [EntityType.DataSource]: new GenericEntityQuery(
        EntityType.DataSource,
        AudakoApp.Configuration,
      ),
      [EntityType.DataConnection]: new GenericEntityQuery(
        EntityType.DataConnection,
        AudakoApp.Configuration,
      ),
      [EntityType.ReportTemplate]: new GenericEntityQuery(
        EntityType.ReportTemplate,
        AudakoApp.Configuration,
        'fas fa-file-chart-column',
      ),
      ['Command']: new CommandQuery(),
    };

    this._searchInitialized$.next(true);
  }
}
