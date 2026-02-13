<script lang="ts">
  import Search from './features/Search/Search.svelte';
  import { StorageUtils } from '../utils/storage-utils';
  import LlmChat from './features/LlmChat/LlmChat.svelte';

  async function initFeatures(): Promise<void> {
    const featureSettings = await StorageUtils.getFeatureSettings();

    const openInSameWindowEnabled = (featureSettings?.enabled && featureSettings?.appSwitchSettings?.enabled) ?? false;
    localStorage.setItem('openInSameWindowEnabled', openInSameWindowEnabled.toString());
  }

  initFeatures();
</script>

<main>
  <Search></Search>
  <LlmChat></LlmChat>

  <div class="powertoys-label">Audako - PowerToys</div>
</main>

<style>
  .powertoys-label {
    position: fixed;
    bottom: 0;
    right: 0;
    opacity: 70%;
    background-color: var(--mdc-theme-on-surface);
    color: var(--mdc-theme-surface);
    padding: 2px;
    font-size: 10px;
    text-align: center;
    z-index: 99999;
  }
</style>
