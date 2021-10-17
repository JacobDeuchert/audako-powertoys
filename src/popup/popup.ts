import './popup.css';
// @ts-ignore
import Popup from './Popup.svelte';

console.log(document);

const app = new Popup({
	target: document.body
});

export default app;