<main>
  Svelte Works
</main>

<script lang="ts">

  let showAdd

  async function initPopup() {
    const extensionSettings = await chrome.storage.sync.get('powertoys-settings');
    console.log(extensionSettings);

    const activeTab = (await chrome.tabs.query({active: true, currentWindow: true}))[0];

    if (activeTab) {

    }
  }

</script>