# Chat Template Config Dialog — Implementation Plan

## Goal

Add a configuration dialog to the chat UI that lets a user create, edit, and delete
the copilot templates stored in their audako `UserProfile`. The dialog writes a single
string setting, `UserProfile.UserSettings['copilot.templates']`, which the MCP gateway
reads at chat-session bootstrap.

## Background

### How templates are consumed (contract)

The gateway builds `new TemplateService(userProfile.UserSettings ?? {})` at session
bootstrap and reads:

```ts
UserProfile.UserSettings['copilot.templates'] = JSON.stringify({
  'sensor-1': {
    description: 'Create one sensor signal in the current group',
    content: `- type: Signal
  alias: sensor
  name: {{name}}
  group: {{group}}
  unit: bar`,
  },
});
```

Shape:

```ts
type StoredTemplates = Record<
  string,
  {
    description: string;
    content: string;
  }
>;
```

- Object key = template label, referenced in chat as `@label`.
- `description` shown in `@` autocomplete and the `list_templates` tool.
- `content` is the full body loaded when the agent calls `read_template`.
- Entries with a missing/non-string `description` or `content` are ignored by the gateway.
- Missing or malformed JSON → no templates available.
- The gateway only **reads** templates; this UI owns validation and saving.

### Current state of the code

- `src/content/features/LlmChat/LlmChat.svelte` renders the chat panel and injects a chat
  toggle button into the host header (`[audako4headeractions]`). The panel header is the
  `{#snippet button()}` passed to `<ChatWidget>` and currently holds a title + close button.
- `ChatSessionGatewayService` (`chat-session-gateway.service.ts`) bootstraps the session via
  `requestChatSession()`; templates are loaded by the gateway only at that bootstrap.
- Services from `audako-core-components` are reached via `resolveService(...)`.
  `UserProfileHttpService` currently exposes **only** `getUserProfile()` (a GET to
  `{StructureUrl}/userprofile`). There is **no** save/update method in core today.
- `@audako/contracts` does **not** export a `UserProfile` type.
- Available Material kit (already deps): `@smui/dialog`, `@smui/textfield`, `@smui/button`,
  `@smui/list`, `@smui/snackbar`, `@smui/icon-button`, `@smui/menu`, `@smui/paper`.

## Decisions

| Topic | Decision |
| --- | --- |
| Persistence write path | A new PUT/update method will be **added to core** (`UserProfileHttpService`). This extension codes against it; exact name/signature aligned during implementation. |
| Read-modify-write | On each open, fetch a fresh profile, mutate only `UserSettings['copilot.templates']`, write the whole profile back so other settings are preserved. |
| Entry point | Gear `IconButton` in the chat panel's own header (next to close). Reachable only while the chat panel is open. |
| Dialog layout | Master-detail: left list of labels + `[+ Add]`; right-side form (label, description, multiline content). |
| Edit semantics | Buffered. Edits held in a working copy; `Save` commits a single PUT, `Cancel` discards. |
| Working data model | Array of `{ id, label, description, content }` with synthetic ids; serialized to the keyed `StoredTemplates` object on Save. |
| Validation | Strict, blocks Save: label non-empty, unique, whitespace-free matching `^[A-Za-z0-9_-]+$`; description non-empty; content non-empty. Inline field errors; Save disabled while invalid. |
| Bad existing data | Drop invalid silently. Malformed JSON → start empty. Load only entries that are objects with string `description` + `content`; drop the rest. (A subsequent Save permanently removes dropped entries.) |
| Live session | Notice only. Save persists and shows a snackbar/info text "Templates saved — applied on the next chat session." No reconnect logic for now. |

## Work items

### 1. Local types

Define a local `UserProfile` shape (contracts has none):

```ts
interface UserProfile {
  // ...other server fields preserved verbatim on write
  UserSettings?: Record<string, string>;
}
```

Plus internal editor types:

```ts
const TEMPLATES_SETTING_KEY = 'copilot.templates';

interface StoredTemplate { description: string; content: string; }
type StoredTemplates = Record<string, StoredTemplate>;

interface EditableTemplate { id: string; label: string; description: string; content: string; }
```

### 2. Templates service — `src/content/features/LlmChat/templates.service.ts`

Singleton mirroring `ChatSessionGatewayService`. Responsibilities:

- `loadTemplates(): Promise<EditableTemplate[]>`
  - `resolveService(UserProfileHttpService).getUserProfile()`.
  - Read `UserSettings[TEMPLATES_SETTING_KEY]`; `JSON.parse` in a try/catch (malformed → `[]`).
  - Keep only entries that are objects with string `description` and `content`; map to
    `EditableTemplate` with a generated `id`.
- `saveTemplates(templates: EditableTemplate[]): Promise<void>`
  - Fetch a **fresh** profile (read-modify-write).
  - Serialize the working set to `StoredTemplates` keyed by label, `JSON.stringify`, assign to
    `UserSettings[TEMPLATES_SETTING_KEY]` (creating `UserSettings` if absent).
  - Persist via the new core update method.
- Validation helpers (`validateTemplate`, `validateAll`) shared with the dialog.
- A small id generator that avoids `Math.random`/`Date.now` issues is unnecessary here (runtime
  component), but use a simple incrementing counter or `crypto.randomUUID()`.

### 3. Dialog component — `src/content/features/LlmChat/TemplateConfigDialog.svelte`

- SMUI `Dialog` (page-level modal). Props: `open` (bindable) + close callback.
- On open: call `loadTemplates()`; show a loading state; on error show an inline error.
- Master-detail UI:
  - Left: SMUI `List` of labels (placeholder "(untitled)" for blank new rows) + `[+ Add]` button
    that appends a blank `EditableTemplate` and selects it.
  - Right: form for the selected template — `Textfield` (label), `Textfield` (description),
    `Textfield textarea` (content). Delete button removes the selected entry from the working set.
- Validation: inline errors per field; `Save` disabled while any template is invalid (uses the
  service's `validateAll`).
- Footer: `Cancel` (discard working copy + close) / `Save`.
- Save flow: call `saveTemplates(workingSet)`; on success close + show snackbar
  "Templates saved — applied on the next chat session."; on failure keep dialog open + show error.

### 4. Wire into `LlmChat.svelte`

- Add `isConfigOpen = $state(false)`.
- Add a gear `IconButton` in the `{#snippet button()}` header next to the close button:
  `onclick={() => (isConfigOpen = true)}`.
- Render `<TemplateConfigDialog bind:open={isConfigOpen} />` within the panel.
- Add an SMUI `Snackbar` (or reuse one) for the save confirmation.

## Open items to confirm during implementation

1. Exact name/signature of the new core `UserProfileHttpService` update method.
2. Whether to import a `UserProfile` type from somewhere or keep the local definition (currently
   not exported by `@audako/contracts`).

## Out of scope (future)

- Pushing templates to a **live** chat session (reconnect / hot-reload of `TemplateService`).
- Per-edit immediate persistence, import/export, template sharing.
