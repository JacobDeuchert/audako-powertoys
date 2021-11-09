<script lang="ts">
  import Dialog, { Content, InitialFocus } from '@smui/dialog';
  import IconButton from '@smui/icon-button';
  import Textfield from '@smui/textfield';
  import List, { Item, Separator, Text, Graphic } from '@smui/list';
  import { SignalRService } from '../../services/SignalRService';
  import { HttpService } from '../../services/HttpService';
  import { container } from 'tsyringe';
  import { ConfigurationEntity, EntityType } from '../../models/configuration-entity';
  import { Group } from '../../models/group';
  import { debounceTime, filter, firstValueFrom, from, map, Subject } from 'rxjs';
  import { AudakoApp, UrlUtils } from '../../utils/url-utils';
  import { TenantView } from '../../models/tenant-view';
  import { Signal } from '../../models/signal';
  import App from '../App.svelte';
  import { SvelteComponent } from 'svelte';
import { Dashboard } from '../../models/dashboard';

  type SearchHistory  = {

  }
  type SearchData = {
    indexedTenants: Partial<TenantView[]>,
    searchHistory: SearchHistory
  } 

  const httpService = container.resolve(HttpService);
  const signalRService = container.resolve(SignalRService);

  let searchData: SearchData;

  let searchOpen: boolean = false;
  let searchString: string = '';
  let selectedItem: number = 0;

  let inputComponent: SvelteComponent;
  let listComponent: SvelteComponent;

  let matchedTenants: TenantView[] = [];
  let matchedGroups: Group[] = [];
  let matchedSignals: Signal[] = [];
  // let matchedDashboards: Dashboard

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
      
      const prefixedSearch = searchString.startsWith(':') || searchString.startsWith('<');

      if (prefixedSearch) {
      } else {
        
        matchedTenants = await queryTenants(searchString);
        matchedGroups = await queryConfigurationEntityByName<Group>(EntityType.Group, searchString);
      }
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

  function openAppByTenant(tenant: TenantView, app: AudakoApp) {
    UrlUtils.openApp(app, tenant.Id);
  }

  function openAppByGroup(group: Group, app: AudakoApp) {
    const tenant = searchData?.indexedTenants?.find(x => x.Root === group.Path[0] || x.Root === group.Id); 
    UrlUtils.openApp(app, tenant.Id, group.Id);
  }

  function openAppByDashboard(dashboard: Dashboard, app: AudakoApp) {

    const groupId = dashboard.GroupId;
    const tenant = searchData?.indexedTenants?.find(x => x.Root === dashboard.Path[0] || x.Root === dashboard.Id);

    UrlUtils.openApp(app, tenant.Id, groupId, dashboard.Id);
  }
  
  async function queryConfigurationEntityByName<T extends ConfigurationEntity>(entityType: EntityType, searchString: string, limit?: number) : Promise<T[]> {
    const searchParts = searchString.split(' ');
    const fullMatchFilter = { 'Name.Value': { $regex: searchString, $options: 'i' } };
    const partMatchFilter =  {$and: searchParts.map(x => ({ 'Name.Value': { $regex: x, $options: 'i' } }))}
    const filter = {$or: [fullMatchFilter, partMatchFilter]};
    const paging = {skip: 0, limit: 100};
    const projection = { Name: 1, Path: 1, GroupId: 1 };

    const result = await httpService.queryConfiguration<T>(
      entityType,
      filter,
      paging,
      projection
    );

    return result
      .sort((a, b) => a.Path.length - b.Path.length)
      .splice(0, limit ?? 4) as T[];
  }

  async function queryTenants(searchString: string): Promise<TenantView[]> {
    console.log(searchData);
    const indexedTenants = searchData.indexedTenants;
    return indexedTenants?.filter(tenantView => tenantView.Name.toLowerCase().includes(searchString)).slice(0, 4);
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

  async function initSearch() {
    const appConfig = await firstValueFrom(httpService.getAppConfig());
    console.log(appConfig);
    searchData = await getSearchData();
    console.log(searchData);
  }
  
  async function getSearchData(): Promise<SearchData> {
    let searchDataEntry = await chrome.storage.local.get(window.location.host) as {[p: string]: SearchData};
    let searchData: SearchData = searchDataEntry[window.location.host];
    console.log(searchData);

    if (!searchData || Object.keys(searchData).length === 0) {
      const indexedTenants = await indexTenants();

      // remove unused properties to reduce storage amount
      indexedTenants.map(tenantView => {
        delete tenantView.Description;
        delete tenantView.Public;
        delete tenantView.ApplicationSettings;
      });
      
      const searchHistory = {};

      const storageEntry: {[p: string]: SearchData} = {};
      searchData = {indexedTenants: indexedTenants, searchHistory: searchHistory};
      storageEntry[window.location.host] = searchData
      await chrome.storage.local.set(storageEntry);
    }

    return searchData
  }

  async function indexTenants(): Promise<TenantView[]> {
    const totalTenants = [];

    const topTenants = await httpService.getTopTenants();
    totalTenants.push(...topTenants);

    for (const tenant of topTenants) {
      const subTenants = await _requestTenantsRecursive(tenant.Id);
      totalTenants.push(...subTenants);
    }

    return totalTenants;
  }

  initSearch();
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
        {#if matchedTenants?.length > 0}
        <div style="font-size: 13px; font-weight: bold; opacity: 0.7; margin-top: -4px">
          Tenants
        </div>
        {#each matchedTenants as tenant}
          <Item class="list-item">
            <Graphic class="material-icons">home</Graphic>
            <Text>{tenant.Name}</Text>

            <div class="action-buttons">
              <IconButton>
                <i class="adk adk-dashboard"></i>
              </IconButton>
              <IconButton>
                <i class="fa fa-tools"></i>
              </IconButton>
              <IconButton>
                <i class="adk adk-staff-assignment"></i>
              </IconButton>
            </div>
          </Item>
        {/each}

        <Separator />
        {/if}
        {#if matchedGroups?.length > 0}
        <div style="font-size: 13px; font-weight: bold; opacity: 0.7; margin-top: -4px">
          Groups
        </div>
        {#each matchedGroups as group}
          <Item class="list-item" on:click={() => openAppByGroup(group, AudakoApp.Configuration)}>
            <Graphic class="material-icons">folder</Graphic>
            <Text>{group.Name.Value}</Text>
            <div class="action-buttons" on:click="{event => event.stopPropagation()}">
              <IconButton  on:click={() => openAppByGroup(group, AudakoApp.Dashboard)}>
                <i class="adk adk-dashboard"></i>
              </IconButton>
              <IconButton on:click={() => openAppByGroup(group, AudakoApp.Commissioning)}>
                <i class="fa fa-tools"></i>
              </IconButton>
            </div>
          </Item>
        {/each}
        <Separator />
        {/if}
      </List>
    </div>
  </Content>
</Dialog>

<style>



  .action-buttons{
    visibility: hidden;
    margin-left: auto;
    display: flex;
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
