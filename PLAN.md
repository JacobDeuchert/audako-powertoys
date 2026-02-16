# Search Scope Improvements Plan

## Goal

Make search scopes explicit, visible, and easy to manage so users can:

- see current scope (for example, tenant context) directly in the UI,
- remove scopes quickly (Backspace on empty input), and
- add one or more scopes via commands (for example, `:g` for groups).

## Current State

- Search already supports hidden prefixes in `src/content/features/Search/search.service.ts`:
  - `>` for current-tenant restriction,
  - `T:`, `G:`, `D:`, `S:` for category restriction.
- Parsing is regex-based and supports only one category prefix.
- Scope is not visible in the input UI.

## Desired UX

- Show active scopes as chips at the start of the search field.
- Auto-apply tenant scope when opened in tenant context and show it as chip.
- Backspace behavior:
  - normal text deletion when input has text,
  - remove rightmost scope chip when input is empty.
- Scope commands:
  - `:g` -> Group
  - `:d` -> Dashboard
  - `:s` -> Signal
  - `:t` -> Tenant category
  - `:tenant` (or `:here`) -> current tenant restriction
- Allow multiple scopes.

## Scope Model (Core Design)

Introduce a typed scope model and move away from single-regex parsing.

Proposed types:

```ts
type SearchScope =
  | { type: 'tenant'; tenantId: string; source: 'context' | 'manual'; label?: string }
  | { type: 'category'; category: SearchCategory };

interface ParsedSearchInput {
  term: string;
  scopes: SearchScope[];
}
```

Semantics:

- same scope type: OR (for example, category Group OR Signal),
- different scope types: AND (for example, tenant restriction + category filter).

## Implementation Plan

### Phase 1 - Internal Model and Service Refactor

1. Add parser/model module in Search feature (for example `search-scope.ts` + `search-input-parser.ts`).
2. Refactor `SearchService` API from `search(query: string)` to structured input:
   - `search({ term, scopes })`.
3. Keep backward compatibility:
   - map legacy `>` and `G:/D:/S:/T:` syntax into structured scopes.
4. Update category filtering logic in `search.service.ts` to handle multiple category scopes.
5. Keep tenant restriction support in query classes via `tenantRestriction` for now.

### Phase 2 - UI Chips and Keyboard Behavior

1. Update `src/content/features/Search/Search.svelte` input area to render scope chips before text input.
2. Auto-create tenant scope chip on open when URL contains tenant context.
3. Implement chip removal:
   - click remove icon,
   - Backspace on empty input removes rightmost chip.
4. Ensure focus and keyboard navigation still works with current list behavior.

### Phase 3 - Command Entry and Multi-Scope UX

1. Add command tokenizer for leading command tokens (for example `:g`, `:s`).
2. Convert command tokens into chips and remove tokens from search term.
3. Add lightweight discoverability help text below input (commands and examples).
4. Ensure users can re-add removed default scopes quickly via commands.

### Phase 4 - Hardening and Compatibility

1. Validate behavior on pages with and without tenant context.
2. Verify legacy syntax still functions.
3. Ensure no regressions in:
   - result grouping,
   - "View All" behavior,
   - recent selections cache.
4. Normalize parser handling for unknown tokens (ignore and treat as plain text).

## File-Level Change Map

- `src/content/features/Search/search.service.ts`
  - replace regex-only parsing with structured scopes,
  - support multiple category scopes.
- `src/content/features/Search/Search.svelte`
  - render and manage scope chips,
  - add Backspace empty-input chip removal,
  - parse command tokens and maintain `term + scopes` state.
- `src/content/features/Search/SearchQueries/search-query.ts`
  - keep tenant restriction flow; adapt signature if needed for future multi-tenant support.
- `src/content/features/Search/search-results.ts`
  - likely unchanged except optional type helpers.
- New files (suggested):
  - `src/content/features/Search/search-scope.ts`
  - `src/content/features/Search/search-input-parser.ts`

## Acceptance Criteria

- When opened in tenant context, search shows a tenant scope chip.
- Search results are restricted to that tenant while chip is present.
- Pressing Backspace on empty input removes the rightmost chip.
- Typing `:g` adds Group scope and filters results accordingly.
- Multiple category scopes can be active at once.
- Legacy syntax (`>`, `G:`, `S:` ...) still works.
- Scope state is clearly visible to the user at all times.

## Future Extensions

- Saved/favorite scope sets (presets).
- Additional scope types (for example app/module/environment).
- Explicit include/exclude scopes (for example `-:s`).
- Advanced parser with quoted terms and escaped tokens.
