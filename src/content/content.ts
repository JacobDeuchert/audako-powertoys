import './global.css';
// import for tsyringe
import 'reflect-metadata';
// @ts-ignore
import App from './App.svelte';
import { container, registry } from 'tsyringe';
import { HttpService } from '../services/HttpService';

chrome.runtime.sendMessage({type: 'init'});

container.register<HttpService>(HttpService, {useValue: new HttpService()});

var s = document.createElement('script');
s.src = chrome.runtime.getURL('build/inject.js');
(document.head || document.documentElement).appendChild(s);


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;