import './global.css';
// import for tsyringe
import 'reflect-metadata';
// @ts-ignore
import App from './App.svelte';
import { container, registry } from 'tsyringe';
import { HttpService } from '../services/http.service';
import { StorageUtils } from '../utils/storage-utils';
import { EntityConfigurationHelper } from './shared/helpers/entity-configuration-helper';

let app = null;

// check if another instance of audako-powertoys is running
if (!window['audako-powertoys']) {
	window['audako-powertoys'] = true;

	container.register<HttpService>(HttpService, {useValue: new HttpService()});
		
	injectScript('build/injected-scripts.js');
	
	app = new App({
		target: document.body,
		props: {
			name: 'world'
		}
	});

	const configHelper = new EntityConfigurationHelper();
	configHelper.listenForConfigChanges();
	
	
	
	function injectScript(scriptUrl) {
		const script = document.createElement('script');
		script.src = chrome.runtime.getURL(scriptUrl);
		(document.head || document.documentElement).appendChild(script);
	}
}

export default app;

setTimeout(() => console.log = console.info, 1000);

