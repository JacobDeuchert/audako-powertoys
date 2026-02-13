import type { Component } from 'svelte';
import { EntityType } from 'audako-core-components';


export type CategorySearchResult = {category: SearchCategory, results: SearchResult[]};
export type CategorizedSearchResults = CategorySearchResult[];


export type SearchCategory = EntityType | 'Tenant';

export interface SearchResult {
   icon: string;
   title: string;
   infoText?: string;
   // tooptip is a function to build the tooltip only when it is actually showed to prevent unnecesary http requests
   tooltip: () => Promise<string>;

   // default action that should be executed when the user clicks on the result
   defaultAction: () => void;

   // optional icon buttons at the end of the result entry to execute custom actions
   extraActions?: ResultAction[];

   // optional component displaying at the end of the result entry
   infoComponent?: {component: Component, props: Record<string, any>};
}



export interface ResultAction {
    icon: string;
    onClick: () => void;
}
