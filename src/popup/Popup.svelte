

<script lang="ts">
import Button, { Label } from '@smui/button';
import { ExtensionMessage, MessageType } from '../models/extension-message';
import SystemOverview from './pages/SystemOverview.svelte';

async function initPopup() {
  const extensionSettings = await chrome.storage.sync.get('extension-settings');
  console.log(extensionSettings);

  const activeTab = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];

  if (activeTab) {
  }

  chrome.storage.onChanged.addListener(onSettingsChanged.bind(this));
}

async function onSettingsChanged(changes, namespace) {
  console.log('Settings Changed', changes, namespace);
  return true;
}

initPopup();
</script>

<main>
  <SystemOverview>
  </SystemOverview>
</main>