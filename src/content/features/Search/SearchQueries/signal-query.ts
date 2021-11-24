import { HttpService } from '../../../../services/http.service';
import { SearchResult } from '../search-results';
import { TenantIndexer } from '../tenant-indexer';
import { SearchQuery } from './search-query';

export class SignalQuery extends SearchQuery {

  constructor(tenantIndexer: TenantIndexer, httpService: HttpService) {
    super(tenantIndexer, httpService);
  }

  public async query(queryString: string, tenantRestriction?: string): Promise<SearchResult[]> {
    return [];
  }
}