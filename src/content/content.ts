import './global.css';
import '../../node_modules/svelte-material-ui/themes/svelte.css';
// import for tsyringe
import 'reflect-metadata';
// @ts-ignore
import App from './App.svelte';
import { container } from 'tsyringe';
import { EntityConfigurationHelper } from './shared/helpers/entity-configuration-helper';
import { mount } from 'svelte';
import { BaseHttpService, registerCoreServices, setGlobalDependencyContainer } from 'audako-core-components';

const SHADOW_HOST_ID = 'audako-powertoys-shadow-host';
const APP_ROOT_ID = 'audako-powertoys-root';
const STYLESHEET_MARKER = 'audako-powertoys-styles';

function ensureShadowRoot(): ShadowRoot | null {
  const parent = document.body ?? document.documentElement;
  if (!parent) {
    return null;
  }

  let host = document.getElementById(SHADOW_HOST_ID);
  if (!host) {
    host = document.createElement('div');
    host.id = SHADOW_HOST_ID;
    host.style.all = 'initial';
    parent.appendChild(host);
  }

  return host.shadowRoot ?? host.attachShadow({ mode: 'open' });
}

function ensureShadowStyles(shadowRoot: ShadowRoot): void {
  const existingStyles = shadowRoot.querySelector(`link[data-${STYLESHEET_MARKER}]`);
  if (existingStyles) {
    return;
  }

  const stylesLink = document.createElement('link');
  stylesLink.rel = 'stylesheet';
  stylesLink.href = chrome.runtime.getURL('build/content.css');
  stylesLink.setAttribute(`data-${STYLESHEET_MARKER}`, 'true');

  shadowRoot.appendChild(stylesLink);
}

function ensureMountTarget(shadowRoot: ShadowRoot): HTMLElement {
  let target = shadowRoot.getElementById(APP_ROOT_ID);
  if (!target) {
    target = document.createElement('div');
    target.id = APP_ROOT_ID;
    shadowRoot.appendChild(target);
  }

  return target;
}

let app = null;

async function initialize() {
  // check if another instance of audako-powertoys is running
  if (!window['audako-powertoys']) {
    window['audako-powertoys'] = true;
  }

  const config =await BaseHttpService.requestHttpConfig(window.location.origin);

  setGlobalDependencyContainer(container);

  registerCoreServices(config, localStorage.getItem('access_token') || '');

  console.info(container);

  setTimeout(() => {
    const shadowRoot = ensureShadowRoot();
    if (!shadowRoot) {
      return;
    }

    ensureShadowStyles(shadowRoot);

    app = mount(App, {
      target: ensureMountTarget(shadowRoot),
    });
  }, 1000);

  const configHelper = new EntityConfigurationHelper();
  configHelper.listenForConfigChanges();
}



initialize();

export default app;

setTimeout(() => {
  console.log = console.info;
}, 1000);
