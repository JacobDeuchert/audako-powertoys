
import { SvelteComponent, SvelteComponentTyped } from 'svelte';
import { ConfigurationEntity, EntityType } from './configuration-entity';
import { TenantView } from './tenant-view';

export type CategorizedSearchResults = {category: SearchCategory, results: SearchResult[]}[];

export type SearchCategory = EntityType | 'Tenant';

export interface SearchResult {
   icon: string;
   title: string;
   // tooptip is a function to build the tooltip only when it is actually showed to prevent unnecesary http requests
   tooltip: () => Promise<string>;

   // default action that should be executed when the user clicks on the result
   defaultAction: () => void;

   // optional icon buttons at the end of the result entry to execute custom actions
   extraActions?: ResultAction[];

   // optional component displaying at the end of the result entry
   infoComponent?: {component: new (options) => SvelteComponent, props: Record<string, any>};
}

export interface ResultAction {
    icon: string;
    onClick: () => void;
}