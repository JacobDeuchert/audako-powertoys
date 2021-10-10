import './global.css';
// import for tsyringe
import 'reflect-metadata';
// @ts-ignore
import App from './App.svelte';

chrome.runtime.sendMessage({type: 'init'});

var s = document.createElement('script');
s.src = chrome.runtime.getURL('content/build/inject.js');
(document.head || document.documentElement).appendChild(s);


const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;