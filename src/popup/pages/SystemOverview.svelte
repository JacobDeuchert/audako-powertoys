<script lang="ts">
  import { Input } from '@smui/textfield';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
  import { Icon } from '@smui/common';
  import Ripple from '@smui/ripple';
  import SystemEntry from '../components/SystemEntry.svelte';

  import { StorageUtils } from '../../utils/storage-utils';
  import type { SystemSettings } from '../../models/extension-settings';
  import { BaseHttpService } from 'audako-core-components';
  import type { SystemStatus } from '../../models/system-status';

  let search = $state<string>('');

  let systemSettings = $state<SystemSettings[]>([]);
  let systemStats = $state<{ [url: string]: SystemStatus }>({});

  let showUnknownSystemHint = $state<boolean>(false);

  async function registerSystem(): Promise<void> {
    console.log('Add to known urls');
    const activeTab = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];
    console.log(activeTab);

    if (!activeTab) {
      return;
    }

    try {
      const url = new URL(activeTab.url);

      // check if system is not already registered
      if (systemSettings.some((x) => x.url === url.origin)) {
        console.log('System already registered');
        return;
      }

      const newSystemEntry: SystemSettings = {
        nt: true,
        ft: true,
        url: url.origin,
        al: null,
        rh: false,
      };

      systemSettings = [...systemSettings, newSystemEntry];
      showUnknownSystemHint = false;
      StorageUtils.setRegisteredSystemSettings($state.snapshot(systemSettings));
    } catch (e) {
      console.log('Failed to register new system: ' + e);
    }
  }

  async function checkForAudakoSystem(): Promise<void> {
    try {
      const activeTab = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];

      const url = new URL(activeTab.url);

      if (!systemSettings.some((x) => x.url === url.origin)) {
        try {
          await BaseHttpService.requestHttpConfig(url.origin);
          showUnknownSystemHint = true;
        } catch (error) {
          showUnknownSystemHint = false;
        }
      }
    } catch (e) {}
  }

  async function onDeleteSystem(system: SystemSettings): Promise<void> {
    const index = systemSettings.findIndex((x) => x.url === system.url);
    systemSettings.splice(index, 1);
    systemSettings = [...systemSettings];
    StorageUtils.setRegisteredSystemSettings(systemSettings);
  }

  async function openSystem(system: SystemSettings): Promise<void> {
    chrome.tabs.create({
      active: true,
      url: system.url,
    });
  }

  async function init(): Promise<void> {
    systemSettings = await StorageUtils.getRegisteredSystemSettings();
    await checkForAudakoSystem();
    StorageUtils.listenForStatusChanges().subscribe((x) => {
      console.log('Status changed: ', x);

      systemStats = x;
    });
  }

  init();
</script>

<main>
  <div class="overview-header">
    <div class="search-input-container">
      <Icon class="material-icons">search</Icon>
      <Input class="search-input solo-input" placeholder="Search" />
    </div>
    <IconButton class="material-icons settings-btn" onclick={() => registerSystem()}>settings</IconButton>
  </div>

  {#if showUnknownSystemHint}
    <div class="unknown-system-container">
      <Icon class="material-icons">info</Icon>
      <div style="margin-left: 8px; margin-right: auto">Extension is not enabled on this system</div>
      <Button onclick={() => registerSystem()}>
        <Label style="font-weight: bold">Enable</Label>
      </Button>
    </div>
  {/if}
  <div class="system-list">
    {#each systemSettings as system}
      <div class="system-entry" onclick={() => openSystem(system)}>
        <div class="ripple" use:Ripple={{ surface: true, color: 'primary' }}></div>
        <SystemEntry
          systemStatus={systemStats[system.url]}
          systemSettings={system}
          ondelete={() => onDeleteSystem(system)}
        />
      </div>
    {/each}
  </div>
</main>

<style>
  :root {
    min-width: 500px;
  }
  .overview-header {
    display: flex;
    align-items: center;
  }

  .search-input-container {
    flex: 1;
    display: flex;
    align-items: center;
    border-radius: 4px;
    background-color: rgba(66, 66, 66, 1);
    padding-left: 8px;
    margin-bottom: 12px;
  }

  .search-input-container :global(.search-input) {
    display: flex;
    align-items: center;
    flex-grow: 1;
    height: 38px;
    padding-left: 8px;
    color: rgba(255, 255, 255, 0.8);
  }

  .search-input-container :global(.solo-input::placeholder) {
    color: var(--mdc-theme-on-surface);
    opacity: 0.6;
  }

  .overview-header :global(.settings-btn) {
    margin-left: 12px;
  }

  .unknown-system-container {
    background-color: rgba(12, 34, 124, 0.2);
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  }
  .system-entry {
    cursor: pointer;
    position: relative;
    display: block;
    margin-top: 8px;
  }

  .ripple {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
</style>
