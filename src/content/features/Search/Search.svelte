<script lang="ts">
  import Dialog, { Content, InitialFocus } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Textfield from '@smui/textfield';
  import List, { Item, Separator, Text, Graphic } from '@smui/list';
import { container } from 'tsyringe';
import { HttpService } from '../../../services/HttpService';
import { SignalRService } from '../../../services/SignalRService';
import { SearchService } from '../../../services/SearchService';
import { CategorizedSearchResults } from '../../../models/search-results';
import { SvelteComponent } from 'svelte';
import { debounceTime, filter, map, Subject } from 'rxjs';
import { catchPromise } from '../../../utils/promise-utils';


  const httpService = container.resolve(HttpService);
  const signalRService = container.resolve(SignalRService);

  const searchService = new SearchService(httpService, signalRService);

  let searchResults: CategorizedSearchResults = [];

  let searchOpen: boolean = false;
  let searchString: string = '';
  

  let inputComponent: SvelteComponent;
  let listComponent: SvelteComponent;


  let searchChanged$: Subject<string> = new Subject<string>();

  $: searchChanged$.next(searchString);

  searchChanged$
    .asObservable()
    .pipe(
      debounceTime(300), 
      filter(x => typeof(x) === 'string' && x?.length > 1),
      map(search => search.trim().toLowerCase()),
    ).subscribe(async (searchString) => {
      console.log('Searching', searchString);
      const [result, error ]= await catchPromise(searchService.search(searchString));
      if (error) {
        console.error(error);
        return;
      }
      console.log('Search results', JSON.parse(JSON.stringify(result)));
      searchResults = result;
      
      console.log('Search results', searchResults);
    });


  window.addEventListener('keydown', (event: KeyboardEvent) => { 
    console.log(event);
    if (event.ctrlKey && event.code === 'Space') {
      searchOpen = true;

      const inputElement = inputComponent.getElement() as HTMLInputElement;
      inputElement.select(); 
    }

    const excludedFocusKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'] 
    if (searchOpen && !event.ctrlKey && !event.shiftKey && !event.altKey && !excludedFocusKeys.includes(event.code)) {
      
      const textField = document
        .getElementsByClassName('search-text-field')
        .item(0);

      if (textField) {
        const input = textField.getElementsByTagName('input').item(0);

        if (document.activeElement !== input) {
          input.focus();
        }
      }
    }
  });

  window.addEventListener('keyup', (event: KeyboardEvent) => {

    const inputElement = inputComponent.getElement();
    const listElement = listComponent.getElement();

    if (event.code === 'ArrowDown') {
      const firstListElement = listElement.getElementsByTagName('li').item(0);
      if (firstListElement && document.activeElement === inputElement) {
        firstListElement.focus();
      }
    }
  });
  
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

    <div style="margin-top: 8px;">
      <List bind:this={listComponent} class="demo-list" bind>
        {#each searchResults as categoryResults, categoryIndex}
        <div style="font-size: 13px; font-weight: bold; opacity: 0.7; margin-top: -4px">
          {categoryResults.category}
        </div>
          {#each categoryResults.results as result, resultIndex}
          <Item class="list-item" on:SMUI:action="{() => result.defaultAction()}">
            <Graphic class="{result.icon}">            
            </Graphic>
            <Text>
              {result.title}
            </Text>

            {#if result.extraActions?.length > 0}
              <div class="action-buttons" on:click="{event => event.stopPropagation()}">
                {#each result.extraActions as action}
                  <IconButton
                    on:click="{() => action.onClick()}">
                  <i class="{action.icon}"></i>
                  </IconButton>
                {/each}
              </div>
            {/if}
          </Item>
          {/each}
          {#if categoryIndex < categoryResults.results.length - 1}
          <Separator/>
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

  .signal-value {
    margin-left: auto;
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
  }

  .action-buttons:focus-within{
    visibility: visible;
  }

  :global(.list-item:hover .action-buttons){
    visibility: visible;
  }

  :global(.list-item:focus-within .action-buttons){
    visibility: visible;
  }
</style>
