import { mount } from 'svelte';
import { ensureMainWorldCoreServices } from './core-services';
import {
  isChatBootstrapMessage,
  type ChatBootstrapMessage,
} from '../shared/helpers/cross-world-events';
import LlmChat from '../features/LlmChat/LlmChat.svelte';

const MAIN_WORLD_CHAT_FLAG = '__audakoPowertoysMainWorldChat';
const SHADOW_HOST_ID = 'audako-powertoys-main-chat-host';
const APP_ROOT_ID = 'audako-powertoys-main-chat-root';
const STYLESHEET_MARKER = 'audako-main-chat-styles';

type ChatBootstrapPayload = Required<NonNullable<ChatBootstrapMessage['payload']>>;

let hasMounted = false;

function ensureShadowRoot(contentCssUrl: string): ShadowRoot | null {
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

  const shadowRoot = host.shadowRoot ?? host.attachShadow({ mode: 'open' });
  if (!shadowRoot.querySelector(`link[data-${STYLESHEET_MARKER}]`)) {
    const stylesLink = document.createElement('link');
    stylesLink.rel = 'stylesheet';
    stylesLink.href = contentCssUrl;
    stylesLink.setAttribute(`data-${STYLESHEET_MARKER}`, 'true');
    shadowRoot.appendChild(stylesLink);
  }

  return shadowRoot;
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

function applyPdfWorkerUrl(pdfWorkerUrl: string): void {
  (globalThis as any).__audakoPowertoysPdfWorkerUrl = pdfWorkerUrl;
  if ((window as any).pdfjsLib?.GlobalWorkerOptions) {
    (window as any).pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
  }
}

function mountChat(payload: ChatBootstrapPayload): void {
  if (hasMounted) {
    return;
  }

  const shadowRoot = ensureShadowRoot(payload.contentCssUrl);
  if (!shadowRoot) {
    return;
  }

  mount(LlmChat, { target: ensureMountTarget(shadowRoot) });
  hasMounted = true;
}

const handleBootstrapMessage = (event: MessageEvent): void => {
  if (event.source !== window || !isChatBootstrapMessage(event.data)) {
    return;
  }

  const payload = event.data.payload;
  if (!payload?.extensionBaseUrl || !payload.contentCssUrl || !payload.pdfWorkerUrl) {
    return;
  }

  applyPdfWorkerUrl(payload.pdfWorkerUrl);

  // Start the core-services bootstrap eagerly so template/profile access is
  // ready by the time the user first opens the assistant. The token is already
  // available because the extension world only sends this message after it has
  // registered its own services.
  void ensureMainWorldCoreServices();

  mountChat({
    extensionBaseUrl: payload.extensionBaseUrl,
    contentCssUrl: payload.contentCssUrl,
    pdfWorkerUrl: payload.pdfWorkerUrl,
  });
};

export function registerMainWorldChatWidget(): void {
  if ((window as any)[MAIN_WORLD_CHAT_FLAG]) {
    return;
  }

  (window as any)[MAIN_WORLD_CHAT_FLAG] = true;
  window.addEventListener('message', handleBootstrapMessage);
}
