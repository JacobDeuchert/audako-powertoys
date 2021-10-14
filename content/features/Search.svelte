<script lang="ts">
  import Dialog, { Content, InitialFocus } from '@smui/dialog';
  import Textfield from '@smui/textfield';
  import List, { Item, Separator, Text, Graphic } from '@smui/list';
  import { SignalRService } from '../services/SignalRService';
  import { HttpService } from '../services/HttpService';
  import { container } from 'tsyringe';
import { EntityType } from '../models/configuration-entity';
import { Group } from '../models/group';
import { debounceTime, from, Subject } from 'rxjs';
import { UrlUtils } from '../utils/url-utils';
import { TenantView } from '../models/tenant-view';

  const httpService = container.resolve(HttpService);
  const signalRService = container.resolve(SignalRService); 

  let searchOpen: boolean = false;
  let searchString: string = "";
  let selectedItem: number = 0;

  let groupResults: Group[] = [];


  let searchChanged$: Subject<string> = new Subject<string>();

  $:searchChanged$.next(searchString);
  

  searchChanged$.asObservable().pipe(debounceTime(300)).subscribe(searchString => {
    console.log('Searching', searchString);
    if (searchString?.length > 0) {
      queryGroups(searchString);
    }
  });


  window.addEventListener('keydown', (event: KeyboardEvent) => {
    console.log(event);
    if (event.ctrlKey && event.code === 'Space') {
      console.log('OpenDialog');
      searchOpen = true;
    }

    if (searchOpen && !event.ctrlKey && !event.shiftKey && !event.altKey) {
      const textField = document.getElementsByClassName('search-text-field').item(0);
      
      if (textField) {
        const input = textField.getElementsByTagName('input').item(0);

        console.log(document.activeElement);
        if (document.activeElement !== input) {
          console.log('focus');
          input.focus();
        }
      }
    }
  }); 

  window.addEventListener('keyup', (event: KeyboardEvent) => {
    console.log(event);
    if (event.code === 'ArrowUp') {
      
    }

    if (event.code === 'ArrowDown') {

    }
  });

  function openGroupConfiguration(group: Group) {
    const tenantId = UrlUtils.getTenantIdFromUrl(window.location.pathname);
		const newUrl = `/${tenantId}/config/${group.Id}`;
		console.log(newUrl);
		window.location.href = newUrl;
  }

  async function queryGroups(searchString: string): Promise<void> {
    const filter = {'Name.Value': {$regex: searchString, $options: 'i'}};

    const result = await httpService.queryConfiguration<Group>(EntityType.Group, filter);

    groupResults = result.sort((a, b) => a.Path.length - b.Path.length).splice(0, 4) as Group[]; 
  }

  async function indexTenants() {

    const totalTenants = [];

    const topTenants = await httpService.getTopTenants();
    totalTenants.push(...topTenants);

    for (const tenant of topTenants) {
      const subTenants = await _requestTenantsRecursive(tenant.Id);
      totalTenants.push(...subTenants);
    }  

    console.log(totalTenants);
    console.log((new TextEncoder().encode(JSON.stringify(totalTenants))).length)
  }

  async function _requestTenantsRecursive(id: string): Promise<TenantView[]> {

    const totalSubtenants = [];
    const tenants = await httpService.getNextTenants(id);

    totalSubtenants.push(...tenants);

    for (const tenant of tenants) {
      const nextTenants = await _requestTenantsRecursive(tenant.Id);
      totalSubtenants.push(...nextTenants);
    }

    


    return totalSubtenants;
  }

  async function initSearch()
  {
    const appConfig = await from(httpService.getAppConfig());
    
    
  }


  httpService.getAppConfig().subscribe(() => {

    indexTenants();

    chrome.storage.local.get(['test'], (e) => {
      console.log(e);
    });
    // chrome.storage.local.set({test: 1}, () => {
    //   console.log('Set value');
    // });
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
    />

    <div style="margin-top: 8px;">
      <List class="demo-list">
        <div
          style="font-size: 13px; font-weight: bold; opacity: 0.7; margin-top: -4px"
        >
          Tenants
        </div>
        <Item><Text>Thing 1</Text></Item>

        <Separator />
        <div
          style="font-size: 13px; font-weight: bold; opacity: 0.7; margin-top: -4px"
        >
          Groups
        </div>
        {#each groupResults as group}
        <Item on:SMUI:action={() => openGroupConfiguration(group)}>
          <Graphic class="material-icons">folder</Graphic>
          <Text>{group.Name.Value}</Text>
        </Item>
        {/each}
        <Separator />
        <Item><Text>Thing 4</Text></Item>
      </List>
    </div>
  </Content>
</Dialog>

<style>
</style>
