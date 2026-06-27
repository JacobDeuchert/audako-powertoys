<script lang="ts">
  import Button, { Label } from '@smui/button';
  import Dialog, { Actions, Content, Title } from '@smui/dialog';
  import { Icon } from '@smui/common';
  import IconButton from '@smui/icon-button';
  import List, { Item, Text } from '@smui/list';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import {
    isAllValid,
    TemplatesService,
    validateTemplate,
    type EditableTemplate,
  } from './templates.service';

  let {
    open = $bindable(false),
    onsaved,
  }: { open: boolean; onsaved?: () => void } = $props();

  let workingSet = $state<EditableTemplate[]>([]);
  let selectedIndex = $state(-1);
  let isLoading = $state(false);
  let isSaving = $state(false);
  let loadError = $state<string | null>(null);
  let saveError = $state<string | null>(null);

  const allValid = $derived(isAllValid(workingSet));
  const fieldErrors = $derived(
    selectedIndex >= 0 ? validateTemplate(workingSet[selectedIndex], workingSet) : {},
  );

  $effect(() => {
    if (!open) return;
    void load();
  });

  async function load() {
    isLoading = true;
    loadError = null;
    saveError = null;
    workingSet = [];
    selectedIndex = -1;
    try {
      const templates = await TemplatesService.instance.loadTemplates();
      workingSet = templates;
      selectedIndex = templates.length > 0 ? 0 : -1;
    } catch (err) {
      loadError = err instanceof Error ? err.message : 'Failed to load templates';
    } finally {
      isLoading = false;
    }
  }

  function addTemplate() {
    const t: EditableTemplate = {
      id: crypto.randomUUID(),
      label: '',
      description: '',
      content: '',
    };
    workingSet = [...workingSet, t];
    selectedIndex = workingSet.length - 1;
  }

  function deleteSelected() {
    if (selectedIndex < 0) return;
    workingSet = workingSet.filter((_, i) => i !== selectedIndex);
    selectedIndex = Math.min(selectedIndex, workingSet.length - 1);
  }

  async function save() {
    if (!allValid || isSaving) return;
    isSaving = true;
    saveError = null;
    try {
      await TemplatesService.instance.saveTemplates(workingSet);
      open = false;
      onsaved?.();
    } catch (err) {
      saveError = err instanceof Error ? err.message : 'Failed to save templates';
    } finally {
      isSaving = false;
    }
  }

  function cancel() {
    open = false;
  }
</script>

<Dialog bind:open class="template-config-dialog" aria-labelledby="template-config-title">
  <Title id="template-config-title">Chat Templates</Title>
  <Content class="template-config-content">
    {#if isLoading}
      <div class="tcd-loading">Loading templates…</div>
    {:else if loadError}
      <div class="tcd-error" role="alert">{loadError}</div>
    {:else}
      <div class="tcd-body">
        <!-- Master: left list -->
        <div class="tcd-list-col">
          <List class="tcd-list">
            {#each workingSet as t, i}
              <Item
                selected={i === selectedIndex}
                onclick={() => (selectedIndex = i)}
                class="tcd-list-item"
              >
                <Text>{t.label || '(untitled)'}</Text>
              </Item>
            {/each}
          </List>
          <button type="button" class="tcd-add-btn" onclick={addTemplate}>
            <Icon class="material-icons">add</Icon>
            Add
          </button>
        </div>

        <!-- Detail: right form -->
        <div class="tcd-form-col">
          {#if selectedIndex < 0}
            <div class="tcd-empty-form">
              {workingSet.length === 0
                ? 'No templates yet. Click Add to create one.'
                : 'Select a template to edit.'}
            </div>
          {:else}
            <div class="tcd-form">
              <div class="tcd-form-row">
                <Textfield
                  variant="outlined"
                  label="Label"
                  bind:value={workingSet[selectedIndex].label}
                  invalid={!!fieldErrors.label}
                  style="width: 100%"
                >
                  {#snippet helper()}
                    <HelperText validationMsg>{fieldErrors.label ?? ''}</HelperText>
                  {/snippet}
                </Textfield>
              </div>

              <div class="tcd-form-row">
                <Textfield
                  variant="outlined"
                  label="Description"
                  bind:value={workingSet[selectedIndex].description}
                  invalid={!!fieldErrors.description}
                  style="width: 100%"
                >
                  {#snippet helper()}
                    <HelperText validationMsg>{fieldErrors.description ?? ''}</HelperText>
                  {/snippet}
                </Textfield>
              </div>

              <div class="tcd-form-row tcd-form-row--grow">
                <Textfield
                  textarea
                  variant="outlined"
                  label="Content"
                  bind:value={workingSet[selectedIndex].content}
                  invalid={!!fieldErrors.content}
                  style="width: 100%; height: 100%"
                >
                  {#snippet helper()}
                    <HelperText validationMsg>{fieldErrors.content ?? ''}</HelperText>
                  {/snippet}
                </Textfield>
              </div>

              <div class="tcd-delete-row">
                <IconButton
                  type="button"
                  class="material-icons tcd-delete-btn"
                  onclick={deleteSelected}
                  aria-label="Delete template"
                >
                  delete
                </IconButton>
              </div>
            </div>
          {/if}
        </div>
      </div>

      {#if saveError}
        <div class="tcd-save-error" role="alert">{saveError}</div>
      {/if}
    {/if}
  </Content>
  <Actions>
    <Button onclick={cancel}>
      <Label>Cancel</Label>
    </Button>
    <Button onclick={save} disabled={!allValid || isSaving || isLoading || !!loadError}>
      <Label>{isSaving ? 'Saving…' : 'Save'}</Label>
    </Button>
  </Actions>
</Dialog>

<style>
  :global(.template-config-dialog .mdc-dialog__surface) {
    width: min(760px, calc(100vw - 32px));
    max-height: calc(100vh - 80px);
    z-index: 2147483646;
  }

  :global(.template-config-dialog .mdc-dialog__container) {
    z-index: 2147483646;
  }

  :global(.mdc-dialog-scroll-lock) {
    overflow: hidden !important;
  }

  :global(.template-config-dialog .mdc-dialog__content) {
    padding: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .tcd-loading,
  .tcd-error,
  .tcd-empty-form {
    padding: 24px;
    font-size: 14px;
    color: #555;
    text-align: center;
  }

  .tcd-error {
    color: #b00020;
  }

  .tcd-body {
    display: flex;
    height: 420px;
    overflow: hidden;
  }

  .tcd-list-col {
    width: 200px;
    flex-shrink: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  :global(.tcd-list) {
    flex: 1;
    overflow-y: auto;
    padding: 4px 0;
  }

  :global(.tcd-list-item) {
    cursor: pointer;
    font-size: 13px;
  }

  .tcd-add-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    border: none;
    background: none;
    padding: 10px 12px;
    font-size: 13px;
    font-weight: 600;
    color: #0057d9;
    cursor: pointer;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    width: 100%;
    text-align: left;
  }

  .tcd-add-btn:hover {
    background: rgba(0, 87, 217, 0.06);
  }

  .tcd-add-btn :global(.material-icons) {
    font-size: 18px;
  }

  .tcd-form-col {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .tcd-form {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }

  .tcd-form-row {
    flex-shrink: 0;
  }

  .tcd-form-row--grow {
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
  }

  .tcd-form-row--grow :global(.mdc-text-field) {
    flex: 1;
    min-height: 0;
  }

  .tcd-form-row--grow :global(.mdc-text-field__resizer),
  .tcd-form-row--grow :global(textarea) {
    resize: none;
    height: 100%;
    min-height: 0;
  }

  .tcd-delete-row {
    display: flex;
    justify-content: flex-end;
    margin-top: 4px;
  }

  :global(.tcd-delete-btn) {
    color: #b00020 !important;
  }

  .tcd-save-error {
    padding: 8px 16px;
    font-size: 13px;
    color: #b00020;
  }
</style>
