<script lang="ts">
	import AppSwitch from './features/AppSwitch/AppSwitch.svelte';
	import SignalLiveValues from './features/SignalConfigurationLiveValues/SignalLiveValues.svelte'
	import Search from './features/Search/Search.svelte';
	import { StorageUtils } from '../utils/storage-utils';
import ConfigChangedNotification from './features/SendConfigNotification/ConfigChangedNotification.svelte';


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
	<ConfigChangedNotification></ConfigChangedNotification>
	<Search></Search>
	
	<div class="powertoys-label">
		Audako - PowerToys
	</div>
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
