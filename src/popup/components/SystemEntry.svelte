<script lang="ts">
  import { SystemSettings } from '../../models/extension-settings';
  import  IconButton from '@smui/icon-button';
  import Menu, { MenuComponentDev } from '@smui/menu';
  import List, { Item, Separator, Text, Graphic } from '@smui/list';
import { afterUpdate, beforeUpdate, createEventDispatcher } from 'svelte';
import { SystemStatus } from '../../models/system-status';


  export let systemSettings: SystemSettings;

  export let systemStatus: SystemStatus;

  let menu: MenuComponentDev;
  let menuAnchor: any;

  let dispatch = createEventDispatcher();

  let name: string;

  afterUpdate(() => {
    if (systemSettings) {
      const url = new URL(systemSettings.url);
      name = url.host;
    }
  });

</script>

<main class="system-entry {systemStatus?.healthy ? 'healthy' : 'unhealthy'}">
  <img class="favicon" alt="favicon" src="{systemSettings.url}/assets/brands/default/favicon.ico"/>
   <span class="name" >{name}</span>
   {#if systemStatus?.healthy }
   <Graphic class="fa fa-sm fa-heart health-icon"></Graphic>
   {:else}
   <Graphic class="fa fa-sm fa-heart-broken health-icon"></Graphic>
   {/if}
   
   <div bind:this={menuAnchor} >
    <IconButton class="material-icons" on:click={(event) => {event.stopPropagation(); menu.setOpen(true)}}>
      more_vert
    </IconButton> 
   </div>
   <Menu on:click={(event) => event.stopPropagation()} bind:this={menu} anchor={false} bind:anchorElement={menuAnchor}>
    <List>
      <!-- <Item on:SMUI:action={() => {}}>
        <Graphic class="material-icons">edit</Graphic>
        <Text>Edit Name</Text>
      </Item> -->
      <Item  on:SMUI:action={(event) => dispatch(event, 'toggleFeatures')}>
        {#if !!systemSettings?.ft}
        <Graphic class="material-icons">check_box</Graphic>
        {:else }
        <Graphic class="material-icons">check_box_blank</Graphic>
        {/if}
        <Text>Powertoys</Text>
      </Item>
      <Item on:SMUI:action={() =>  dispatch('toggleNotifications')}>
        {#if !!systemSettings?.nt}
        <Graphic class="material-icons">check_box</Graphic>
        {:else }
        <Graphic class="material-icons">check_box_blank</Graphic>
        {/if}
        <Text>Notifications</Text>
      </Item>
      <Separator />
      <Item on:SMUI:action={() => dispatch('delete')}>
        <Graphic class="material-icons">delete</Graphic>
        <Text>Delete</Text>
      </Item>
    </List>
  </Menu>
</main>

<style>

.system-entry {
  display: flex;
  align-items: center;
  background-color: rgba(44, 44, 44, 1);
  padding: 4px 12px;
  border-radius: 4px;
}

:global(.unhealthy.system-entry) {
  background-color: rgba(139, 7, 7, 0.3);
}

:global(.health-icon) {
  font-size: 20px;
  height: 20px;
  width: 20px;
  margin-right: 0px;
}
:global(.healthy) :global(.health-icon) {
  color: #2dc937;
}

:global(.unhealthy) :global(.health-icon) {
  color: #cc3232;
}

.favicon {
  width: 24px;
  height: 24px;

}

.name {
  margin-left: 12px;
  margin-right: auto;
  font-weight: bold;
  font-size: 14px;
}

</style>