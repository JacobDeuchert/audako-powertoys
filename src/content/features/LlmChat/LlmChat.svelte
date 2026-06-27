<script lang="ts">
  import { onMount } from 'svelte';
  import { ChatWidget, type ChatWidgetConfig } from '@audako/chat-ui';
  import CircularProgress from '@smui/circular-progress';
  import { Icon } from '@smui/common';
  import Snackbar, { Actions as SnackbarActions, Label as SnackbarLabel } from '@smui/snackbar';
  // NOTE: Global stylesheets (@audako/chat-ui/style.css, MDC component CSS) are
  // imported once by the extension world in content.ts and bundled into the
  // single content.css that both worlds inject into their shadow roots. Importing
  // them here too would make Rollup hoist them into a shared chunk that nothing
  // links, leaving the widget unstyled — so we deliberately rely on content.css.
  import { ChatSessionGatewayService } from './chat-session-gateway.service';
  import { ensureMainWorldCoreServices } from '../../injected-scripts/core-services';
  import TemplateConfigDialog from './TemplateConfigDialog.svelte';

  let isOpen = $state(false);
  let isConfigOpen = $state(false);
  let hasOpened = $state(false);
  let config: ChatWidgetConfig | null = $state(null);
  let savedSnackbar: Snackbar | null = $state(null);
  let bootstrapError = $state<string | null>(null);
  let isBootstrapping = $state(false);
  let hasBootstrapAttempted = $state(false);
  let headerToggleButton: HTMLButtonElement | null = null;
  let headerToggleHost: HTMLDivElement | null = null;
  let headerToggleShadowRoot: ShadowRoot | null = null;
  let headerObserver: MutationObserver | null = null;

  const HEADER_ACTIONS_SELECTOR = '[audako4headeractions]';
  const HEADER_BUTTON_HOST_ID = 'audako-llm-chat-header-button';
  const CHAT_BUTTON_ICON = `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5H9.91L6 19.91V16H5.5C4.67 16 4 15.33 4 14.5z"></path>
    </svg>
  `;

  function updateHeaderToggleButton(): void {
    if (!headerToggleButton) {
      return;
    }

    const label = isOpen ? 'Close assistant chat' : 'Open assistant chat';
    headerToggleButton.setAttribute('aria-expanded', String(isOpen));
    headerToggleButton.setAttribute('aria-label', label);
    headerToggleButton.title = label;
    headerToggleButton.classList.toggle('is-open', isOpen);
  }

  function attachHeaderToggleButton(): void {
    const headerActions = document.querySelector<HTMLElement>(HEADER_ACTIONS_SELECTOR);
    if (!headerActions || !headerToggleHost) {
      return;
    }

    const targetContainer = headerActions.firstElementChild;
    if (!(targetContainer instanceof HTMLElement)) {
      return;
    }

    if (headerToggleHost.parentElement !== targetContainer || targetContainer.firstElementChild !== headerToggleHost) {
      targetContainer.insertBefore(headerToggleHost, targetContainer.firstChild);
    }
  }

  function createHeaderToggleButton(): void {
    if (headerToggleButton) {
      return;
    }

    headerToggleHost = document.createElement('div');
    headerToggleHost.id = HEADER_BUTTON_HOST_ID;
    headerToggleHost.style.display = 'inline-flex';
    headerToggleHost.style.alignItems = 'center';
    headerToggleHost.style.position = 'relative';
    headerToggleHost.style.zIndex = '1';
    headerToggleHost.style.pointerEvents = 'auto';

    // Isolate the header button from the host page's styles. The button lives in
    // the page's header (light DOM), so a dedicated shadow root keeps its look
    // stable regardless of the surrounding application CSS.
    headerToggleShadowRoot = headerToggleHost.attachShadow({ mode: 'open' });
    headerToggleShadowRoot.innerHTML = `
      <style>
        :host {
          all: initial;
          color: inherit;
          display: inline-flex;
          align-items: center;
          position: relative;
          z-index: 1;
          pointer-events: auto;
        }
        button {
          all: initial;
          box-sizing: border-box;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          padding: 0;
          border: none;
          border-radius: 999px;
          background: transparent;
          color: inherit;
          cursor: pointer;
          transition: background-color 140ms ease;
          outline: none;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          pointer-events: auto;
        }
        svg {
          display: block;
          width: 24px;
          height: 24px;
          fill: currentColor;
        }
      </style>
    `;

    headerToggleButton = document.createElement('button');
    headerToggleButton.type = 'button';
    headerToggleButton.innerHTML = CHAT_BUTTON_ICON;
    headerToggleButton.setAttribute('aria-controls', 'audako-llm-chat-panel');
    headerToggleButton.addEventListener('click', toggleChat);

    const icon = headerToggleButton.querySelector('svg');
    if (icon) {
      icon.setAttribute('width', '24');
      icon.setAttribute('height', '24');
      icon.setAttribute('fill', 'currentColor');
      icon.style.display = 'block';
    }

    headerToggleButton.addEventListener('mouseenter', () => {
      if (!headerToggleButton) {
        return;
      }

      headerToggleButton.style.background = isOpen ? 'rgba(0, 87, 217, 0.18)' : 'rgba(0, 0, 0, 0.06)';
    });

    headerToggleButton.addEventListener('mouseleave', () => {
      if (!headerToggleButton) {
        return;
      }

      headerToggleButton.style.background = isOpen ? 'rgba(0, 87, 217, 0.12)' : 'transparent';
    });

    headerToggleShadowRoot.appendChild(headerToggleButton);
    attachHeaderToggleButton();
    updateHeaderToggleButton();
  }

  onMount(() => {
    createHeaderToggleButton();

    headerObserver = new MutationObserver(() => {
      attachHeaderToggleButton();
    });

    headerObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      headerObserver?.disconnect();
      headerObserver = null;
      headerToggleHost?.remove();
      headerToggleHost = null;
      headerToggleShadowRoot = null;
      headerToggleButton = null;
    };
  });

  $effect(() => {
    if (!isOpen || hasBootstrapAttempted) {
      return;
    }

    hasBootstrapAttempted = true;
    setupConfig();
  });

  async function setupConfig() {
    if (config || isBootstrapping) {
      return;
    }

    bootstrapError = null;
    isBootstrapping = true;

    try {
      await ensureMainWorldCoreServices();
      const adapter = await ChatSessionGatewayService.instance.requestChatSession();

      config = {
        adapter,
        title: 'Audako Assistant',
        placeholder: 'Type a message',
        showThinking: true,
        showClose: true,
      };
    } catch (error) {
      bootstrapError = error instanceof Error ? error.message : 'Failed to bootstrap chat session';
      config = null;
    } finally {
      isBootstrapping = false;
    }
  }

  function toggleChat(): void {
    console.log('Toggling chat. Currently open:', isOpen);
    if (isOpen) {
      isOpen = false;
      return;
    }

    config = null;
    bootstrapError = null;
    hasBootstrapAttempted = false;
    hasOpened = true;
    isOpen = true;
  }

  function closeChat(): void {
    isOpen = false;
    hasBootstrapAttempted = false;
  }

  // The native chat-ui header has no settings button, so this currently has no
  // trigger. It's kept ready to be wired to a custom `/templates` slash command
  // once chat-ui forwards unknown slash commands to the host.
  async function openConfig(): Promise<void> {
    // The template dialog resolves UserProfileHttpService from the DI container,
    // so make sure the main-world core services are registered before it loads.
    await ensureMainWorldCoreServices();
    isConfigOpen = true;
  }

  $effect(() => {
    updateHeaderToggleButton();

    if (!headerToggleButton) {
      return;
    }

    headerToggleButton.style.background = isOpen ? 'rgba(0, 87, 217, 0.12)' : 'transparent';
  });
</script>

{#if hasOpened}
  <section id="audako-llm-chat-panel" class="chat-panel" class:open={isOpen} aria-hidden={!isOpen}>
    <div class="chat-content">
      {#if bootstrapError}
        <div class="chat-error" role="alert" aria-live="assertive">
          <Icon class="material-icons chat-error-icon">cloud_off</Icon>
          <div class="chat-error-title">Assistant unavailable</div>
          <div class="chat-error-message">{bootstrapError}</div>
          <button type="button" class="chat-error-close" onclick={closeChat}>Close</button>
        </div>
      {:else if !config || isBootstrapping}
        <div class="chat-loading" role="status" aria-live="polite" aria-label="Loading assistant">
          <CircularProgress indeterminate />
        </div>
      {:else}
        <ChatWidget {config} onClose={closeChat}></ChatWidget>
      {/if}
    </div>
  </section>
{/if}

<!--
  Rendered outside .chat-panel on purpose: the panel uses transform + overflow:
  hidden, which would turn it into the containing block for the dialog's
  position: fixed surface and clip it to the popup. Kept as a top-level sibling
  so the dialog overlays the whole screen.
-->
<TemplateConfigDialog bind:open={isConfigOpen} onsaved={() => savedSnackbar?.open()} />

<Snackbar bind:this={savedSnackbar} class="tcd-saved-snackbar">
  <SnackbarLabel>Templates saved — applied on the next chat session.</SnackbarLabel>
  <SnackbarActions></SnackbarActions>
</Snackbar>

<style>
  .chat-panel {
    position: fixed;
    right: 16px;
    bottom: 68px;
    width: min(500px, calc(100vw - 24px));
    height: 700px;
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    opacity: 0;
    transform: translateY(10px) scale(0.98);
    pointer-events: none;
    transition:
      opacity 140ms ease,
      transform 140ms ease;
    z-index: 2147483645;
  }

  .chat-panel.open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: auto;
  }

  :global(.tcd-saved-snackbar) {
    z-index: 2147483646;
  }

  .chat-content {
    flex: 1;
    min-height: 0;
    position: relative;
  }

  .chat-loading {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }

  .chat-error {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 16px;
    padding: 32px 28px;
    background: #fff;
    color: #1f2937;
  }

  .chat-error :global(.chat-error-icon) {
    font-size: 72px;
    width: 72px;
    height: 72px;
    color: #94a3b8;
    margin-bottom: 4px;
  }

  .chat-error-title {
    font-size: 22px;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .chat-error-message {
    font-size: 15px;
    line-height: 1.55;
    color: #6b7280;
    word-break: break-word;
    max-width: 340px;
  }

  .chat-error-close {
    margin-top: 8px;
    border: none;
    border-radius: 8px;
    padding: 10px 22px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background: #0057d9;
    cursor: pointer;
  }

  .chat-loading :global(.mdc-circular-progress) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 600px) {
    .chat-panel {
      right: 8px;
      left: 8px;
      width: auto;
      bottom: 8px;
      height: 600px;
    }
  }
</style>
