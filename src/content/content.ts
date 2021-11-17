import './global.css';
// import for tsyringe
import 'reflect-metadata';
// @ts-ignore
import App from './App.svelte';
import { container, registry } from 'tsyringe';
import { HttpService } from '../services/HttpService';
import { StorageUtils } from '../utils/storage-utils';

chrome.runtime.sendMessage({type: 'init'});

container.register<HttpService>(HttpService, {useValue: new HttpService()});

injectScript('build/openInSameTab.js');
injectScript('build/signalChangedListener.js');


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;

function injectScript(scriptUrl) {
  const script = document.createElement('script');
  script.src = chrome.runtime.getURL(scriptUrl);
  (document.head || document.documentElement).appendChild(script);
}