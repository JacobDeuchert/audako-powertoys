import '../../node_modules/svelte-material-ui/bare.css';
import './popup.css';
import 'reflect-metadata';
// @ts-ignore
import Popup from './Popup.svelte';
import { mount } from 'svelte';

console.log(document);

const app = mount(Popup, {
	target: document.body,
});

export default app;