<script lang="ts">
  import { Input } from '@smui/textfield';
  import IconButton from '@smui/icon-button';
  import Button, { Label } from '@smui/button';
  import { Icon } from '@smui/common';
  import Ripple from '@smui/ripple';
  import SystemEntry from '../components/SystemEntry.svelte';
  import {
    ExtensionMessage,
    MessageType,
  } from '../../models/extension-message';

  import { StorageUtils } from '../../utils/storage-utils';
  import { SystemSettings } from '../../models/extension-settings';
  import { HttpService } from '../../services/HttpService';
  import { SystemStatus } from '../../models/system-status';

  let search = '';

  let systemSettings: SystemSettings[] = [];
  let systemStats: { [url: string]: SystemStatus } = {};

  let showUnknwonSystemHint: boolean = false;

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
      if (systemSettings.some(x => x.url === url.origin)) {
        console.log('System already registered');
        return;
      }

      const newSystemEntry: SystemSettings = {
        nt: true,
        ft: true,
        url: url.origin,
        al: null,
        rh: false
      }

      systemSettings = [...systemSettings, newSystemEntry];
      showUnknwonSystemHint = false;
      StorageUtils.setRegisterdSystemSettings(systemSettings);
    } catch (e) {
      console.log('Failed to register new system: ' + e);
    }
  }

  async function checkForAudakoSystem(): Promise<void> {
    try {
      const activeTab = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];

      const url = new URL(activeTab.url);

      if (!systemSettings.some((x) => x.url === url.origin)) {
        const httpService = new HttpService(url.origin);
        httpService.getAppConfig().subscribe({
          next: () => (showUnknwonSystemHint = true),
          error: () => (showUnknwonSystemHint = false),
        });
      }
    } catch (e) {}
  }

  async function onDeleteSystem(system: SystemSettings): Promise<void> {
      const index = systemSettings.findIndex(x => x.url === system.url);
      systemSettings.splice(index, 1);
      systemSettings = [...systemSettings];
      StorageUtils.setRegisterdSystemSettings(systemSettings);
  }

  async function openSystem(system: SystemSettings): Promise<void> {
    chrome.tabs.create({
      active: true,
      url: system.url
    })
  }

  async function init(): Promise<void> {
    systemSettings = await StorageUtils.getRegisterdSystemSettings();
    await checkForAudakoSystem();
    StorageUtils.listenForStatusChanges().subscribe(x => {
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
    <IconButton
      class="material-icons settings-btn"
      on:click={() => registerSystem()}
    >
      settings
    </IconButton>
  </div>

  {#if showUnknwonSystemHint}
    <div class="unknown-system-container">
      <Icon class="material-icons">info</Icon>
      <div style="margin-left: 8px; margin-right: auto">
        Extension is not enabled on this system
      </div>
      <Button on:click={() => registerSystem()}>
        <Label style="font-weight: bold">Enable</Label>
      </Button>
    </div>
  {/if}
  <div class="system-list">
    {#each systemSettings as system}
      <div class="system-entry" on:click="{() => openSystem(system)}">
        <div class="ripple" use:Ripple={{ surface: true, color: 'primary' }} />
        <SystemEntry systemStatus={systemStats[system.url]} systemSettings={system} on:delete={() => onDeleteSystem(system)} />
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
