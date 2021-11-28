<script lang="ts">
	import AppSwitch from './features/AppSwitch/AppSwitch.svelte';
	import SignalLiveValues from './features/LiveValues/SignalLiveValues.svelte';
	import Search from './features/Search/Search.svelte';
	import { StorageUtils } from '../utils/storage-utils';


	async function initFeatures(): Promise<void> {
		const featureSettings = await StorageUtils.getFeatureSettings();

		const openInSameWindowEnabled = (featureSettings?.enabled && featureSettings?.appSwitchSettings?.enabled) ?? false;
		localStorage.setItem('openInSameWindowEnabled', openInSameWindowEnabled.toString());
	}

	initFeatures();
</script>

<main>
	<AppSwitch></AppSwitch>
	<SignalLiveValues></SignalLiveValues>
	<Search></Search>
</main>

<style>
</style>
