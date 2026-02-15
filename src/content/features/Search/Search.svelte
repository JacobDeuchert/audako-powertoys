<script lang="ts">
  import Dialog, { Content, InitialFocus } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Textfield from '@smui/textfield';
  import List, { Item, Separator, Text, Graphic } from '@smui/list';
  import { debounceTime, filter, first, map, Subject } from 'rxjs';
  import { catchPromise } from '../../../utils/promise-utils';
  import { SearchService } from './search.service';
  import {
    buildStoredSearchResultCacheKey,
    isStoredSearchResult,
    materializeStoredSearchResult,
  } from './search-results';
  import type {
    CategorizedSearchResults,
    SearchCategory,
    SearchResult,
    StoredSearchResult,
  } from './search-results';
  import { DomUtils } from '../../../utils/dom-utils';

  interface DisplayedCategorySearchResults {
    category: SearchCategory;
    displayedResults: SearchResult[];
    totalResults: SearchResult[];
  }

  type CachedSelectedResult = StoredSearchResult;

  const SELECTED_RESULTS_STORAGE_KEY = 'audako.search.selected-results';
  const MAX_SELECTED_RESULTS = 12;

  const initialSelectedResults = loadSelectedResults();

  
  const searchService = new SearchService();

  let displayedResults = $state<DisplayedCategorySearchResults[]>(getDisplayedSelectedResults(initialSelectedResults));

  let searchOpen = $state<boolean>(false);
  let searchString = $state<string>('');

  let selectedResultsCache = $state<CachedSelectedResult[]>(initialSelectedResults);

  let inputComponent = $state<any>(null);
  let listComponent: any;

  let searchChanged$: Subject<string> = new Subject<string>();

  $effect(() => {
    searchChanged$.next(searchString);
  });

  searchChanged$
    .asObservable()
    .pipe(
      debounceTime(300),
      filter((x) => typeof x === 'string'),
      map((search) => search.trim()),
    )
    .subscribe(async (queryString) => {
      if (!queryString) {
        displayedResults = getDisplayedSelectedResults(selectedResultsCache);
        return;
      }

      if (queryString.length <= 1) {
        displayedResults = [];
        return;
      }

      const normalizedSearchString = queryString.toLowerCase();
      const [searchResults, error] = await catchPromise(searchService.search(normalizedSearchString));
      if (error) {
        console.error(error);
        return;
      }

      displayedResults = getDisplayedResults(searchResults);
    });

  window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.ctrlKey && event.code === 'Space') {
      event.preventDefault();
      event.stopImmediatePropagation();
      searchOpen = true;
      focusSearchInput(true);
      return;
    }

    if (!searchOpen) {
      return;
    }

    if (event.code === 'Enter' && triggerFocusedResultAction()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    event.stopImmediatePropagation();

    const excludedFocusKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];
    if (!event.ctrlKey && !event.shiftKey && !event.altKey && !excludedFocusKeys.includes(event.code)) {
      focusSearchInput();
    }
  });

  window.addEventListener('keyup', (event: KeyboardEvent) => {
    if (!searchOpen) {
      return;
    }

    event.stopImmediatePropagation();

    const textFieldElement = inputComponent?.getElement?.();
    const inputElement = textFieldElement?.getElementsByTagName('input').item(0);
    const listElement = listComponent?.getElement?.();

    if (event.code === 'ArrowDown') {
      event.preventDefault();
      const rootNode = inputElement?.getRootNode() as Document | ShadowRoot;
      const activeElement = rootNode?.activeElement ?? document.activeElement;
      const firstListElement = listElement?.getElementsByTagName('li').item(0);
      if (firstListElement && activeElement === inputElement) {
        firstListElement.focus();
      }
    }
  });

  function getDisplayedResults(searchResults: CategorizedSearchResults): DisplayedCategorySearchResults[] {
    // display 4 of each category and 8 if only 1 category has results
    // display max 16 results

    const categoriesWithResults = searchResults.filter((x) => x.results.length > 0);

    const resultsPerCategory = categoriesWithResults.length > 1 ? 4 : 8;

    return searchResults.map((x) => ({
      displayedResults: x.results.slice(0, resultsPerCategory),
      category: x.category,
      totalResults: x.results,
    }));
  }

  function showAllResults(category: SearchCategory) {
    const result = displayedResults.find((x) => x.category === category);
    if (!result) {
      return;
    }

    displayedResults = [
      {
        category,
        displayedResults: result.totalResults,
        totalResults: result.totalResults,
      },
    ];

    const listElement = listComponent.getElement();
    DomUtils.watchForDomChanges(listElement)
      .pipe(first())
      .subscribe(() => {
        const firstListElement = listElement.getElementsByTagName('li').item(result.displayedResults.length);
        if (firstListElement) {
          firstListElement.focus();
        }
      });
  }

  function focusSearchInput(select: boolean = false) {
    const textField = inputComponent?.getElement();

    if (textField) {
      const input = textField.getElementsByTagName('input').item(0);
      const rootNode = input?.getRootNode() as Document | ShadowRoot;
      const activeElement = rootNode?.activeElement ?? document.activeElement;

      if (activeElement !== input) {
        input.focus();
        if (select) {
          input.select();
        }
      }
    }
  }

  function triggerFocusedResultAction(): boolean {
    const listElement = listComponent?.getElement?.();
    const rootNode = listElement?.getRootNode() as Document | ShadowRoot;
    const activeElement = (rootNode?.activeElement ?? document.activeElement) as HTMLElement | null;

    if (!listElement || !activeElement || !listElement.contains(activeElement)) {
      return false;
    }

    const focusInsideActionButton = activeElement.closest('.action-buttons, .mdc-icon-button, button');
    if (focusInsideActionButton) {
      return false;
    }

    const focusedListItem = activeElement.closest('li') as HTMLElement | null;
    if (!focusedListItem || !listElement.contains(focusedListItem)) {
      return false;
    }

    focusedListItem.click();
    return true;
  }

  function selectResult(result: SearchResult): void {
    cacheSelectedResult(result);
    result.defaultAction();
  }

  function getDisplayedSelectedResults(selectedResults: CachedSelectedResult[]): DisplayedCategorySearchResults[] {
    const groupedResults = new Map<SearchCategory, SearchResult[]>();

    selectedResults.forEach((storedResult) => {
      const materializedResult = materializeStoredSearchResult(storedResult);
      if (!materializedResult) {
        return;
      }

      if (!groupedResults.has(storedResult.category)) {
        groupedResults.set(storedResult.category, []);
      }

      groupedResults.get(storedResult.category).push(materializedResult);
    });

    return Array.from(groupedResults.entries()).map(([category, results]) => ({
      category,
      displayedResults: results,
      totalResults: results,
    }));
  }

  function cacheSelectedResult(result: SearchResult): void {
    const selectedResult = result.toStoredSearchResult(Date.now());

    const resultCacheKey = buildStoredSearchResultCacheKey(selectedResult);
    selectedResultsCache = [
      selectedResult,
      ...selectedResultsCache.filter(
        (cachedResult) => buildStoredSearchResultCacheKey(cachedResult) !== resultCacheKey,
      ),
    ].slice(0, MAX_SELECTED_RESULTS);

    persistSelectedResults(selectedResultsCache);
  }

  function loadSelectedResults(): CachedSelectedResult[] {
    try {
      const storedData = localStorage.getItem(SELECTED_RESULTS_STORAGE_KEY);
      if (!storedData) {
        return [];
      }

      const parsedData = JSON.parse(storedData);
      if (!Array.isArray(parsedData)) {
        return [];
      }

      return parsedData
        .filter((entry) => isStoredSearchResult(entry))
        .filter((entry) => !!materializeStoredSearchResult(entry))
        .sort((a, b) => (b.selectedAt ?? 0) - (a.selectedAt ?? 0))
        .slice(0, MAX_SELECTED_RESULTS);
    } catch {
      return [];
    }
  }

  function persistSelectedResults(selectedResults: CachedSelectedResult[]): void {
    try {
      localStorage.setItem(SELECTED_RESULTS_STORAGE_KEY, JSON.stringify(selectedResults));
    } catch {
    }
  }
</script>

<Dialog bind:open={searchOpen} class="search-dialog">
  <Content class="search-dialog-content">
    <Textfield
      class="search-text-field"
      use={[InitialFocus]}
      style="width: 100%"
      bind:value={searchString}
      variant="outlined"
      type="text"
      label="Search"
      bind:this={inputComponent}
    />

    <div class="result-list-container">
      {#if searchString.trim().length === 0 && displayedResults.length === 0}
        <div class="empty-state">
          No recent selections found. Type at least 2 characters to search.
        </div>
      {:else}
        <List bind:this={listComponent} class="result-list">
          {#each displayedResults as categoryResults, categoryIndex}
            <div class="category-label">
              {categoryResults.category}
            </div>
            {#each categoryResults.displayedResults as result}
              <Item class="list-item" onclick={() => selectResult(result)}>
                <Graphic class="search-icon {result.icon}" />
                <Text class="title-text">
                  {result.title}
                </Text>

                {#if result.infoText}
                  <Text class="info-text">
                    &nbsp;-&nbsp;{result.infoText}
                  </Text>
                {/if}

                {#if result.infoComponent}
                  {@const InfoComp = result.infoComponent.component}
                  <div class="info-component">
                    <InfoComp {...result.infoComponent.props} />
                  </div>
                {/if}

                {#if result.extraActions?.length > 0}
                  <div class="action-buttons">
                    {#each result.extraActions as action}
                      <IconButton
                        onclick={(event) => {
                          event.stopPropagation();
                          action.execute(result.context);
                        }}
                      >
                        <i class={action.icon}></i>
                      </IconButton>
                    {/each}
                  </div>
                {/if}
              </Item>
            {/each}
            <!-- Show "View More" when displayed items are not equal the search results  -->
            {#if categoryResults.displayedResults.length < categoryResults.totalResults.length}
              <Item class="list-item view-all-item" onclick={() => showAllResults(categoryResults.category)}>
                <Text class="view-all-text">
                  View All Results (+{categoryResults.totalResults.length - categoryResults.displayedResults.length})
                </Text>
              </Item>
            {/if}
            {#if categoryIndex < displayedResults.length - 1}
              <Separator />
            {/if}
          {/each}
        </List>
      {/if}
    </div>
  </Content>
</Dialog>

<style>
  .search-dialog-content {
    padding: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .result-list-container {
    overflow-y: auto;
    max-height: min(56vh, 560px);
  }

  .category-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    opacity: 0.66;
    margin: 8px 8px 4px;
  }

  .title-text {
    font-size: 13px;
    font-weight: 500;
  }

  .info-component {
    margin-left: auto;
    padding-left: 10px;
  }

  .action-buttons {
    visibility: hidden;
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 2px;
    padding-left: 8px;
  }

  .action-buttons:focus-within {
    visibility: visible;
  }

  :global(.list-item:hover .action-buttons),
  :global(.list-item:focus-within .action-buttons) {
    visibility: visible;
  }

  :global(.search-dialog .mdc-dialog__container) {
    align-items: flex-start;
    margin-top: 24px;
  }

  :global(.search-dialog .mdc-dialog__surface) {
    width: min(640px, calc(100vw - 24px));
  }

  :global(.search-dialog .mdc-dialog__content) {
    padding: 0;
  }

  :global(.search-text-field) {
    min-height: 46px;
  }

  :global(.result-list .mdc-list-item),
  :global(.result-list .mdc-deprecated-list-item) {
    min-height: 34px;
    height: 34px;
    padding: 4px 8px;
    font-size: 13px;
  }

  :global(.result-list .mdc-list-item__graphic),
  :global(.result-list .mdc-deprecated-list-item__graphic) {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    font-size: 16px;
  }

  :global(.result-list .mdc-list-item__primary-text),
  :global(.result-list .mdc-deprecated-list-item__text) {
    line-height: 1.2;
  }

  :global(.info-text) {
    opacity: 0.62;
    font-size: 12px;
    font-weight: 500;
    margin-left: 4px;
  }

  :global(.action-buttons .mdc-icon-button) {
    width: 28px;
    height: 28px;
    font-size: 14px;
    padding: 7px;
  }

  .view-all-item {
    opacity: 0.88;
  }

  .view-all-text {
    font-size: 12px;
    font-weight: 600;
  }

  .empty-state {
    font-size: 13px;
    padding: 12px 8px;
    opacity: 0.72;
  }

  @media (max-width: 640px) {
    .search-dialog-content {
      padding: 10px;
      gap: 6px;
    }

    :global(.search-dialog .mdc-dialog__container) {
      margin-top: 10px;
    }

    :global(.result-list .mdc-list-item),
    :global(.result-list .mdc-deprecated-list-item) {
      padding: 4px 6px;
    }
  }
</style>
