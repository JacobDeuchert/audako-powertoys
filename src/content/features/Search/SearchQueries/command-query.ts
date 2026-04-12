import {
  CommandSearchResult,
  type CommandSearchResultContext,
  type SearchResult,
} from '../search-results';
import { SearchQuery } from './search-query';

export interface CommandDefinition {
  id: string;
  title: string;
  icon: string;
  keywords: string[];
  execute: (context: CommandSearchResultContext) => void;
}

export class CommandQuery extends SearchQuery {
  private commands: CommandDefinition[] = [];

  constructor() {
    super();
    this.registerBuiltinCommands();
  }

  public async query(queryString: string, _tenantRestriction?: string): Promise<SearchResult[]> {
    const normalizedQuery = queryString.toLowerCase();

    const matchedCommands = this.commands.filter(command => {
      if (!normalizedQuery) {
        return true;
      }

      const titleMatch = command.title.toLowerCase().includes(normalizedQuery);
      const keywordMatch = command.keywords.some(keyword =>
        keyword.toLowerCase().includes(normalizedQuery),
      );

      return titleMatch || keywordMatch;
    });

    return matchedCommands.map(
      command =>
        new CommandSearchResult({
          title: command.title,
          icon: command.icon,
          context: { commandId: command.id },
          onExecute: command.execute,
        }),
    );
  }

  private registerBuiltinCommands(): void {
    this.commands.push({
      id: 'copy-access-token',
      title: 'Copy Access Token',
      icon: 'fas fa-key',
      keywords: ['token', 'access', 'copy', 'clipboard', 'auth', 'jwt'],
      execute: () => {
        const accessToken = localStorage.getItem('access_token') || '';
        if (!accessToken) {
          console.warn('[CommandQuery] No access token found in localStorage.');
          return;
        }

        navigator.clipboard.writeText(accessToken).then(
          () => console.info('[CommandQuery] Access token copied to clipboard.'),
          err => console.error('[CommandQuery] Failed to copy access token:', err),
        );
      },
    });
  }
}
