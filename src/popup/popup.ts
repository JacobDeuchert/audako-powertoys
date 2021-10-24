import './popup.css';
import 'reflect-metadata';
// @ts-ignore
import Popup from './Popup.svelte';

console.log(document);

const app = new Popup({
	target: document.body
});

export default app;