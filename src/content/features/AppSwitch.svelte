<script lang="ts">
    import SegmentedButton, { Segment } from "@smui/segmented-button";
	import { Label } from "@smui/common";
	import { AudakoApp, UrlUtils } from './../../utils/url-utils';

	let displayAppSwitch: boolean = false;
	let openedApp: AudakoApp = null;

	let apps: AudakoApp[] = Object.keys(AudakoApp).filter(x => x !== AudakoApp.Administration) as AudakoApp[];


	let appTranslation: {[p: string]: string} = {
		'Dashboard' : 'Dashb.',
		'Configuration': 'Konfig.',
		'Commissioning': 'Inbetrieb.'
	};


	UrlUtils.subscribeToUrl().subscribe(x => {
		const tenantId = UrlUtils.getTenantIdFromUrl(x);
		displayAppSwitch = !!tenantId;

		if (displayAppSwitch) {
			openedApp = UrlUtils.getAppFromUrl(x);
			console.log(openedApp);
		}

	});


	function selectApp(app: AudakoApp) {
		const tenantId = UrlUtils.getTenantIdFromUrl(window.location.pathname);

		const appUrl = UrlUtils.getAppUrl(app);
		const newUrl = `/${tenantId}/${appUrl}`;
		console.log(newUrl);
		window.location.href = newUrl;  
	}
	
</script>

<main>
	{#if displayAppSwitch}
    <div class="app-switch">
		<SegmentedButton segments={apps} let:segment singleSelect bind:selected={openedApp}>
			<!-- Note: the `segment` property is required! -->
			<Segment {segment} on:click={() => selectApp(segment)}>
				<Label>{appTranslation[segment]}</Label>
			</Segment>
		</SegmentedButton>
	</div>
	{/if}
</main>

<style>
.app-switch {
		position: fixed;
		top: 0px;
		left: 50%;
		z-index: 3;
	}
</style>