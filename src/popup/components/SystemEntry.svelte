<script lang="ts">
  import type { SystemSettings } from '../../models/extension-settings';
  import  IconButton from '@smui/icon-button';
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text, Graphic } from '@smui/list';
  import type { SystemStatus } from '../../models/system-status';

  let { systemSettings, systemStatus, ondelete }: { systemSettings: SystemSettings; systemStatus: SystemStatus; ondelete?: () => void } = $props();

  let menu: any;
  let menuAnchor: any;

  let name = $derived(systemSettings ? new URL(systemSettings.url).host : '');

</script>

<main class="system-entry {systemStatus?.healthy ? 'healthy' : 'unhealthy'}">
  {#if systemStatus?.healthy }
   <Graphic class="fa fa-sm fa-heart health-icon"></Graphic>
   {:else}
   <Graphic class="fa fa-sm fa-heart-broken health-icon"></Graphic>
   {/if}
   <span class="name" >{name}</span>
   <div bind:this={menuAnchor} >
    <IconButton class="material-icons" onclick={(event) => {event.stopPropagation(); menu.setOpen(true)}}>
      more_vert
    </IconButton> 
   </div>
   <Menu onclick={(event) => event.stopPropagation()} bind:this={menu} anchor={false} bind:anchorElement={menuAnchor}>
    <List>
      <!-- <Item onSMUIaction={() => {}}>
        <Graphic class="material-icons">edit</Graphic>
        <Text>Edit Name</Text>
      </Item> -->
      <Item  onSMUIaction={(event) => {}}>
        {#if !!systemSettings?.ft}
        <Graphic class="material-icons">check_box</Graphic>
        {:else }
        <Graphic class="material-icons">check_box_blank</Graphic>
        {/if}
        <Text>Powertoys</Text>
      </Item>
      <Item onSMUIaction={() => {}}>
        {#if !!systemSettings?.nt}
        <Graphic class="material-icons">check_box</Graphic>
        {:else }
        <Graphic class="material-icons">check_box_blank</Graphic>
        {/if}
        <Text>Notifications</Text>
      </Item>
      <Separator />
      <Item onSMUIaction={() => ondelete?.()}>
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

.name {
  margin-left: 12px;
  margin-right: auto;
  font-weight: bold;
  font-size: 14px;
}

</style>