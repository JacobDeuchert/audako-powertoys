<script lang="ts">
  import { ChatWidget, OpenCodeAdapter } from '@audako/chat-ui';
  import { Icon } from '@smui/common';
  import IconButton from '@smui/icon-button';
  import '@audako/chat-ui/style.css';
  import { ChatSessionGatewayService } from './chat-session-gateway.service';
  import { ComponentUtils } from '../../../utils/component-utils';

  let isOpen = $state(false);
  let hasOpened = $state(false);
  let config = $state(null);

  $effect(() => {
    if (!isOpen) {
      return;
    }

    setupConfig();
  });

  async function setupConfig() {
    const chatSession = await ChatSessionGatewayService.instance.requestChatSession();

    const adapter = new OpenCodeAdapter({
      baseUrl: chatSession.opencodeUrl,
      agent: 'audako',
    });

    config = {
      adapter,
      title: 'Assistant',
      initialMessage: 'Hi! How can I help?',
      placeholder: 'Type a message',
    };
  }

  function toggleChat(): void {
    if (isOpen) {
      isOpen = false;
      return;
    }

    hasOpened = true;
    isOpen = true;
  }

  function closeChat(): void {
    isOpen = false;
  }
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
      {#if !config}
        <p style="padding: 16px; color: #666;">Loading...</p>
      {:else}
      <ChatWidget {config} header={button}></ChatWidget>
      {/if}
    </div>
  </section>
{/if}

<div class="chat-toggle-wrap">
  <button
    type="button"
    class="chat-toggle"
    onclick={toggleChat}
    aria-controls="audako-llm-chat-panel"
    aria-expanded={isOpen}
  >
    <Icon class="material-icons chat-toggle-icon">
      {isOpen ? 'close' : 'smart_toy'}
    </Icon>
    {isOpen ? 'Close chat' : 'Assistant'}
  </button>
</div>

<style>
  .chat-toggle-wrap {
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 2147483646;
  }

  .chat-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: none;
    border-radius: 999px;
    padding: 10px 16px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(135deg, #0057d9, #1f7aff);
    box-shadow: 0 10px 28px rgba(0, 65, 170, 0.35);
    cursor: pointer;
  }

  .chat-toggle :global(.chat-toggle-icon) {
    font-size: 18px;
    width: 18px;
    height: 18px;
  }

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

  }

  @media (max-width: 600px) {
    .chat-panel {
      right: 8px;
      left: 8px;
      width: auto;
      bottom: 64px;
      height: 600px;
    }

    .chat-toggle-wrap {
      right: 8px;
      bottom: 8px;
    }
  }
</style>
