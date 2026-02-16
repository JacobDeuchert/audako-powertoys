import '../../node_modules/svelte-material-ui/bare.css';
import './popup.css';
import 'reflect-metadata';
import { mount } from 'svelte';
// @ts-expect-error
import Popup from './Popup.svelte';

console.log(document);

const app = mount(Popup, {
  target: document.body,
});

export default app;
