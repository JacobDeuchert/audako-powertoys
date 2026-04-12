<script lang="ts">
  import { onMount } from 'svelte';
  import { ChatWidget, type ChatWidgetConfig } from '@audako/chat-ui';
  import CircularProgress from '@smui/circular-progress';
  import '@material/circular-progress/dist/mdc.circular-progress.css';
  import { Icon } from '@smui/common';
  import IconButton from '@smui/icon-button';
  import '@audako/chat-ui/style.css';
  import { ChatSessionGatewayService } from './chat-session-gateway.service';

  let isOpen = $state(false);
  let hasOpened = $state(false);
  let config: ChatWidgetConfig | null = $state(null);
  let bootstrapError = $state<string | null>(null);
  let isBootstrapping = $state(false);
  let hasBootstrapAttempted = $state(false);
  let headerToggleButton: HTMLButtonElement | null = null;
  let headerToggleHost: HTMLDivElement | null = null;
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

    headerToggleButton = document.createElement('button');
    headerToggleButton.type = 'button';
    headerToggleButton.innerHTML = CHAT_BUTTON_ICON;
    headerToggleButton.style.display = 'inline-flex';
    headerToggleButton.style.alignItems = 'center';
    headerToggleButton.style.justifyContent = 'center';
    headerToggleButton.style.width = '40px';
    headerToggleButton.style.height = '40px';
    headerToggleButton.style.padding = '0';
    headerToggleButton.style.border = 'none';
    headerToggleButton.style.borderRadius = '999px';
    headerToggleButton.style.background = 'transparent';
    headerToggleButton.style.color = 'inherit';
    headerToggleButton.style.cursor = 'pointer';
    headerToggleButton.style.transition = 'background-color 140ms ease';
    headerToggleButton.style.outline = 'none';
    headerToggleButton.style.flexShrink = '0';
    headerToggleButton.style.position = 'relative';
    headerToggleButton.style.zIndex = '1';
    headerToggleButton.style.pointerEvents = 'auto';
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

    headerToggleHost.appendChild(headerToggleButton);
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
      const adapter = await ChatSessionGatewayService.instance.requestChatSession();

      config = {
        adapter,
        title: 'Audako Assistant',
        placeholder: 'Type a message',
        showThinking: true,
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
    {#snippet button()}
      <div class="chat-header">
        <div class="chat-header-title">
          <Icon class="material-icons chat-header-icon">smart_toy</Icon>
          Assistant
        </div>
        <IconButton type="button" class="material-icons close-button" onclick={closeChat} aria-label="Close chat">
          close
        </IconButton>
      </div>
    {/snippet}
    <div class="chat-content">
      {#if bootstrapError}
        <div class="chat-error" role="alert" aria-live="assertive">
          <div class="chat-error-title">Assistant failed to start</div>
          <div class="chat-error-message">{bootstrapError}</div>
          <button type="button" class="chat-error-close" onclick={closeChat}>Close</button>
        </div>
      {:else if !config || isBootstrapping}
        <div class="chat-loading" role="status" aria-live="polite" aria-label="Loading assistant">
          <CircularProgress indeterminate />
        </div>
      {:else}
        <ChatWidget {config} header={button}></ChatWidget>
      {/if}
    </div>
  </section>
{/if}

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

  .chat-header {
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 14px;
    font-size: 16px;
    font-weight: 700;
  }

  .chat-header-title {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .chat-header-title :global(.chat-header-icon) {
    font-size: 18px;
    width: 18px;
    height: 18px;
  }

  :global(.close-button.mdc-icon-button) {
    --mdc-icon-button-size: 34px;
    --mdc-icon-size: 18px;
    color: #4a4a4a;
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
    align-items: flex-start;
    justify-content: center;
    gap: 12px;
    padding: 24px;
    background: #fff;
    color: #1f2937;
  }

  .chat-error-title {
    font-size: 18px;
    font-weight: 700;
  }

  .chat-error-message {
    font-size: 14px;
    line-height: 1.5;
    color: #b91c1c;
    word-break: break-word;
  }

  .chat-error-close {
    border: none;
    border-radius: 8px;
    padding: 10px 14px;
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
