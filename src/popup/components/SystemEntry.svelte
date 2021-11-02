<script lang="ts">
  import { SystemSettings } from '../../models/extension-settings';
  import  IconButton from '@smui/icon-button';
  import Menu, { MenuComponentDev } from '@smui/menu';
  import List, { Item, Separator, Text, Graphic } from '@smui/list';
import { afterUpdate, beforeUpdate, createEventDispatcher } from 'svelte';


  export let systemSettings: SystemSettings;

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

<main class="system-entry">
  <img class="favicon" alt="favicon" src="{systemSettings.url}/assets/brands/default/favicon.ico"/>
   <span class="name" >{name}</span>
   <Graphic class="material-icons">favorite</Graphic>
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