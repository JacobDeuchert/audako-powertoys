<script lang="ts">
  import Dialog, { Content, InitialFocus } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Textfield from '@smui/textfield';
  import List, { Item, Separator, Text, Graphic } from '@smui/list';
  import { container } from 'tsyringe';
  import { HttpService } from '../../../services/http.service';
  import { SignalRService } from '../../../services/signalR.service';
  import { SvelteComponent } from 'svelte';
  import { debounceTime, filter, first, map, Subject } from 'rxjs';
  import { catchPromise } from '../../../utils/promise-utils';
  import { SearchService } from './search.service';
  import { CategorizedSearchResults, CategorySearchResult, SearchCategory, SearchResult } from './search-results';
import { DomUtils } from '../../../utils/dom-utils';
import App from '../../App.svelte';
import AppSwitch from '../AppSwitch/AppSwitch.svelte';

  interface DisplayedCategoySearchResults {
    category: SearchCategory;
    displayedResults: SearchResult[];
    totalResults: SearchResult[];
  }
  
  const httpService = container.resolve(HttpService);
  const signalRService = container.resolve(SignalRService);

  const searchService = new SearchService(httpService, signalRService);

  let displayedResults: DisplayedCategoySearchResults[] = [];

  let focusedCategory: SearchCategory = null;

  let searchOpen: boolean = false;
  let searchString: string = '';

  let encounteredError: boolean = false;

  let inputComponent: SvelteComponent;
  let listComponent: SvelteComponent;

  let searchChanged$: Subject<string> = new Subject<string>();

  $: searchChanged$.next(searchString);

  searchChanged$
    .asObservable()
    .pipe(
      debounceTime(300),
      filter((x) => typeof x === 'string' && x?.length > 1),
      map((search) => search.trim().toLowerCase())
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

  window.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.ctrlKey && event.code === 'Space') {
      searchOpen = true;
      focuSearchInput(true);
    }

    const excludedFocusKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];
    if (searchOpen && !event.ctrlKey && !event.shiftKey && !event.altKey && !excludedFocusKeys.includes(event.code)) {
      focuSearchInput();
    }
  });

  window.addEventListener('keyup', (event: KeyboardEvent) => {
    const inputElement = inputComponent.getElement();
    const listElement = listComponent.getElement();

    if (event.code === 'ArrowDown') {
      const activeElement = document.activeElement;
      const firstListElement = listElement.getElementsByTagName('li').item(0);
      if (firstListElement && activeElement === inputElement) {
        firstListElement.focus();
      }
    }
  });

  function getDisplayedResults(searchResults: CategorizedSearchResults): DisplayedCategoySearchResults[]{
    // display 4 of each category and 8 if only 1 category has results
    // display max 16 results

    
    const categoriesWithResults = searchResults.filter((x) => x.results.length > 0);

    const resultsPerCategory = categoriesWithResults.length > 1 ? 4 : 8;

    return searchResults.map((x) => (
      {
        displayedResults: x.results.slice(0, resultsPerCategory), 
        category: x.category,
        totalResults: x.results
      }));
  }

  function showAllResults(category: SearchCategory) {
    const result = displayedResults.find((x) => x.category === category);
    displayedResults = [{
      category,
      displayedResults: result.totalResults,
      totalResults: result.totalResults
    }];

    const listElement = listComponent.getElement();
    console.log(listElement);
    DomUtils.watchForDomChanges(listElement).pipe(first()).subscribe((changes) => {
      console.log(changes);
      const firstListElement = listElement.getElementsByTagName('li').item(result.displayedResults.length);
      if (firstListElement) {
        firstListElement.focus();
      }
    });
  }


  function focuSearchInput(select: boolean = false) {
    const textField = document.getElementsByClassName('search-text-field').item(0);

    if (textField) {
      const input = textField.getElementsByTagName('input').item(0);

      if (document.activeElement !== input) {
        input.focus();
        if (select) {
          input.select();
        }
      }
    }
  }
</script>

<Dialog class="search-dialog" bind:open={searchOpen}>
  <Content style="padding: 12px" class="search-dialog-content">
    <Textfield
      class="search-text-field"
      use={[InitialFocus]}
      style="width: 100%"
      bind:value={searchString}
      variant="outlined"
      type="text"
      label="Search"
      bind:input={inputComponent}
    />

    <div class="result-list-container" style="margin-top: 8px;">
      <List bind:this={listComponent} class="result-list" bind>
        {#each displayedResults as categoryResults, categoryIndex}
          <div style="font-size: 13px; font-weight: bold; opacity: 0.7; margin-top: -4px">
            {categoryResults.category}
          </div>
          {#each categoryResults.displayedResults as result, resultIndex}
            <Item class="list-item" on:SMUI:action={() => result.defaultAction()}>
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
              <div class="info-component">
                <svelte:component this={result.infoComponent.component} {...result.infoComponent.props} />
              </div>
              {/if}

              {#if result.extraActions?.length > 0}
                <div class="action-buttons" on:click={(event) => event.stopPropagation()}>
                  {#each result.extraActions as action}
                    <IconButton on:click={() => action.onClick()}>
                      <i class={action.icon} />
                    </IconButton>
                  {/each}
                </div>
              {/if}

            </Item>
          {/each}
          <!-- Show "View More" when displayed items are not equal the search results  -->
          {#if categoryResults.displayedResults.length < categoryResults.totalResults.length}
            <Item class="list-item" on:SMUI:action={() => showAllResults(categoryResults.category)}>
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

  .action-buttons {
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

  :global(.search-dialog){
    max-height: 50vh;
    overflow: hidden;
  }

  :global(.search-dialog .mdc-dialog__container) {
    align-items: flex-start;
    margin-top: 30px;
  }

  :global(.search-dialog .mdc-dialog__surface){
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

  :global(.search-dialog .mdc-dialog__content){
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
</style>
