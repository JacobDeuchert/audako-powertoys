<script lang="ts">
  import Dialog, { Content, InitialFocus } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Textfield from '@smui/textfield';
  import List, { Item, Separator, Text, Graphic } from '@smui/list';
  import { debounceTime, filter, first, map, Subject } from 'rxjs';
  import { catchPromise } from '../../../utils/promise-utils';
  import { SearchService } from './search.service';
  import type { CategorizedSearchResults, CategorySearchResult, SearchCategory, SearchResult } from './search-results';
  import { DomUtils } from '../../../utils/dom-utils';

  interface DisplayedCategorySearchResults {
    category: SearchCategory;
    displayedResults: SearchResult[];
    totalResults: SearchResult[];
  }

  
  const searchService = new SearchService();

  let displayedResults = $state<DisplayedCategorySearchResults[]>([]);

  let focusedCategory = $state<SearchCategory | null>(null);

  let searchOpen = $state<boolean>(false);
  let searchString = $state<string>('');

  let encounteredError = $state<boolean>(false);

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
      filter((x) => typeof x === 'string' && x?.length > 1),
      map((search) => search.trim().toLowerCase()),
    )
    .subscribe(async (searchString) => {
      console.log('Searching', searchString);
      const [searchResults, error] = await catchPromise(searchService.search(searchString));
      if (error) {
        encounteredError = true;
        console.error(error);
        return;
      }
      encounteredError = false;

      displayedResults = getDisplayedResults(searchResults);

      console.log('Search results', displayedResults);
    });

console.log('Search component loaded', window);

  window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.ctrlKey && event.code === 'Space') {
      searchOpen = true;
      console.log('Opening search');
      focusSearchInput(true);
    }

    const excludedFocusKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];
    if (searchOpen && !event.ctrlKey && !event.shiftKey && !event.altKey && !excludedFocusKeys.includes(event.code)) {
      focusSearchInput();
    }
  });

  window.addEventListener('keyup', (event: KeyboardEvent) => {
    const inputElement = inputComponent.getElement();
    const listElement = listComponent.getElement();

    if (event.code === 'ArrowDown') {
      const rootNode = inputElement?.getRootNode() as Document | ShadowRoot;
      const activeElement = rootNode?.activeElement ?? document.activeElement;
      const firstListElement = listElement.getElementsByTagName('li').item(0);
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
    displayedResults = [
      {
        category,
        displayedResults: result.totalResults,
        totalResults: result.totalResults,
      },
    ];

    const listElement = listComponent.getElement();
    console.log(listElement);
    DomUtils.watchForDomChanges(listElement)
      .pipe(first())
      .subscribe((changes) => {
        console.log(changes);
        const firstListElement = listElement.getElementsByTagName('li').item(result.displayedResults.length);
        if (firstListElement) {
          firstListElement.focus();
        }
      });
  }

  function focusSearchInput(select: boolean = false) {
    console.log('Focusing search input');
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
</script>

<Dialog bind:open={searchOpen}>
  <Content style="padding: 12px" class="search-dialog-content">
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

    <div class="result-list-container" style="margin-top: 8px;">
      <List bind:this={listComponent} class="result-list">
        {#each displayedResults as categoryResults, categoryIndex}
          <div style="font-size: 13px; font-weight: bold; opacity: 0.7; margin-top: -4px">
            {categoryResults.category}
          </div>
          {#each categoryResults.displayedResults as result, resultIndex}
            <Item class="list-item" onclick={() => result.defaultAction()}>
              <Graphic class="search-icon {result.icon}" />
              <Text>
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
                <div class="action-buttons" onclick={(event) => event.stopPropagation()}>
                  {#each result.extraActions as action}
                    <IconButton onclick={() => action.onClick()}>
                      <i class={action.icon}></i>
                    </IconButton>
                  {/each}
                </div>
              {/if}
            </Item>
          {/each}
          <!-- Show "View More" when displayed items are not equal the search results  -->
          {#if categoryResults.displayedResults.length < categoryResults.totalResults.length}
            <Item class="list-item" onclick={() => showAllResults(categoryResults.category)}>
              <Text>
                View All Results (+{categoryResults.totalResults.length - categoryResults.displayedResults.length})
              </Text>
            </Item>
          {/if}
          {#if categoryIndex < displayedResults.length - 1}
            <Separator />
          {/if}
        {/each}
      </List>
    </div>
  </Content>
</Dialog>

<style>
  /* .action-buttons {
    visibility: hidden;
    margin-left: auto;
    display: flex;
  }

  .info-component {
    margin-left: auto;
  }

  .signal-value {
    margin-left: auto;
  }

  .result-list-container {
    overflow-y: auto;
    max-height: 100%;
  }

  :global(.search-dialog) {
    max-height: 50vh;
    overflow: hidden;
  }

  :global(.search-dialog .mdc-dialog__container) {
    align-items: flex-start;
    margin-top: 30px;
  }

  :global(.search-dialog .mdc-dialog__surface) {
    width: 40vw;
  }

  @media (max-width: 1400px) {
    :global(.search-dialog .mdc-dialog__surface) {
      width: 60vw;
    }
  }

  @media (max-width: 1000px) {
    :global(.search-dialog .mdc-dialog__surface) {
      width: 80vw;
    }
  }

  :global(.search-dialog .mdc-dialog__content) {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  :global(.search-text-field) {
    min-height: 54px;
  }

  :global(.action-buttons .mdc-icon-button) {
    height: 36px;
    width: 36px;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 9px;
  }

  :global(.list-item) {
    height: 36px;
    padding: 8px;
  }

  :global(.info-text) {
    opacity: 0.6;
    font-weight: bold;
    font-size: 12px;
  }

  :global(.search-icon) {
    margin-right: 8px !important;
  }

  .action-buttons:focus-within {
    visibility: visible;
  }

  :global(.list-item:hover .action-buttons) {
    visibility: visible;
  }

  :global(.list-item:focus-within .action-buttons) {
    visibility: visible;
  }
    */
</style>
