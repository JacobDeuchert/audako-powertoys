/**
 * Injected Scripts - Runs in the MAIN world (page context) at document_start.
 *
 * Intercepts the Angular app's main.js script before it executes,
 * fetches its content, applies modifications, and re-executes it
 * so our extension code runs inside the Angular context.
 */

const MAIN_SCRIPT_PATTERN = /main-[A-Za-z0-9]+\.js$/;

function interceptMainScript(): void {
  console.info('[audako-powertoys] Script interceptor active');

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      for (let i = 0; i < mutation.addedNodes.length; i++) {
        const node = mutation.addedNodes[i];
        if (!(node instanceof HTMLScriptElement)) continue;

        const src = node.getAttribute('src');
        if (!src || !MAIN_SCRIPT_PATTERN.test(src)) continue;

        console.info('[audako-powertoys] Intercepted Angular main script:', src);

        // Prevent the original script from executing by changing its type
        // before the browser gets a chance to fetch/execute it
        node.type = 'javascript/blocked';

        // Remove the original script element from the DOM
        node.remove();

        // Stop observing once we've found the main script
        observer.disconnect();

        // Fetch, modify, and re-execute the script
        replaceMainScript(src);
      }
    }
  });

  // Start observing the entire document for script additions
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
}

async function replaceMainScript(originalSrc: string): Promise<void> {
  try {
    // Resolve the full URL relative to the page
    const scriptUrl = new URL(originalSrc, document.baseURI).href;

    // Derive the base URL for resolving relative imports
    // e.g. "https://example.com/main-NJXGNXJ5.js" -> "https://example.com/"
    const baseUrl = scriptUrl.substring(0, scriptUrl.lastIndexOf('/') + 1);

    console.info('[audako-powertoys] Fetching main script from:', scriptUrl);
    console.info('[audako-powertoys] Base URL for imports:', baseUrl);
    const response = await fetch(scriptUrl);

    if (!response.ok) {
      console.error(
        '[audako-powertoys] Failed to fetch main script:',
        response.status,
        response.statusText,
      );
      return;
    }

    let scriptContent = await response.text();

    // Rewrite relative imports to absolute URLs so they resolve correctly from a blob URL
    scriptContent = rewriteImports(scriptContent, baseUrl);

    // Apply modifications to the script content
    scriptContent = modifyMainScript(scriptContent);

    // Log the full modified content for debugging (with newlines after semicolons for readability)
    console.info(
      '[audako-powertoys] Modified script content:\n',
      scriptContent.replace(/;/g, ';\n'),
    );

    // Re-execute the modified script as an ES module via blob URL
    const blob = new Blob([scriptContent], { type: 'application/javascript' });
    const blobUrl = URL.createObjectURL(blob);

    const newScript = document.createElement('script');
    newScript.type = 'module';
    newScript.src = blobUrl;
    newScript.setAttribute('data-powertoys-injected', 'true');

    // Clean up the blob URL after the script loads
    newScript.onload = () => {
      URL.revokeObjectURL(blobUrl);
      console.info('[audako-powertoys] Modified main script loaded successfully');
    };

    newScript.onerror = error => {
      URL.revokeObjectURL(blobUrl);
      console.error('[audako-powertoys] Failed to load modified main script:', error);
    };

    // Append to <head> to execute it
    (document.head || document.documentElement).appendChild(newScript);
  } catch (error) {
    console.error('[audako-powertoys] Error replacing main script:', error);
  }
}

/**
 * Rewrites relative import paths (e.g. "./chunk-ABC.js") to absolute URLs
 * so they resolve correctly when the script is loaded from a blob URL.
 *
 * Handles:
 *   - Static: import {x} from "./chunk-ABC.js"
 *   - Static: import "./chunk-ABC.js"
 *   - Dynamic: import("./chunk-ABC.js")
 *   - Re-exports: export {x} from "./chunk-ABC.js"
 */
function rewriteImports(content: string, baseUrl: string): string {
  // Match relative paths in:
  //   - from"./..."         (static named imports)
  //   - import"./..."       (static side-effect imports)
  //   - import("./...")     (dynamic imports)
  //   - export ... from"./..."
  return content.replace(
    /(from\s*|import\s*\(|import\s*)(['"])(\.\.?\/)/g,
    (match, prefix, quote, relPath) => {
      return prefix + quote + baseUrl + relPath.substring(2); // strip leading "./"
    },
  );
}

function modifyMainScript(content: string): string {
  // Remove the production console.log suppression so we can debug
  const consoleSuppressMatch = content.match(
    /ci\.production\s*&&\s*\(window\.console\.log\s*=\s*function\s*\(\)\s*\{\s*\}\s*\)\s*;?/g,
  );
  console.info(
    '[audako-powertoys] Console suppression pattern found:',
    consoleSuppressMatch ? consoleSuppressMatch.length + ' match(es)' : 'none',
  );
  content = content.replace(
    /ci\.production\s*&&\s*\(window\.console\.log\s*=\s*function\s*\(\)\s*\{\s*\}\s*\)\s*;?/g,
    '',
  );

  // Intercept the Angular bootstrap to capture the root injector.
  const bootstrapMatch = content.match(/\.bootstrapModule\(([^)]+)\)\.catch\(/g);
  console.info(
    '[audako-powertoys] Bootstrap pattern found:',
    bootstrapMatch
      ? bootstrapMatch.length + ' match(es): ' + JSON.stringify(bootstrapMatch)
      : 'none',
  );
  content = content.replace(
    /\.bootstrapModule\(([^)]+)\)\.catch\(/g,
    `.bootstrapModule($1).then(function(ref) {` +
      `window.__ngRef__ = ref;` +
      `window.__ngInjector__ = ref.injector;` +
      // Detect Angular version from the ng-version attribute on the root element
      `var ngVerEl = document.querySelector("[ng-version]");` +
      `var ngVer = ngVerEl ? ngVerEl.getAttribute("ng-version") : null;` +
      `var ngMajor = ngVer ? parseInt(ngVer.split(".")[0], 10) : 0;` +
      `window.__ngVersion__ = ngVer;` +
      `console.log("[audako-powertoys] Angular version:", ngVer, "(major:", ngMajor + ")");` +
      // LView index layout varies by Angular version:
      //   CONTEXT: index 8 (view context, not always the host component)
      //   TVIEW: index 1
      //   PARENT: index 3
      //   ID: index 20 (v14-15), index 19 (v16+), N/A (v9-13)
      //   HEADER_OFFSET: 19(v9), 20(v12-13), 22(v14-15), 25(v16-18), 27(v19+)
      `var LVIEW_CONTEXT = 8;` +
      `var LVIEW_TVIEW = 1;` +
      `var LVIEW_PARENT = 3;` +
      `var LVIEW_ID;` +
      `var LVIEW_HEADER_OFFSET;` +
      `if (ngMajor >= 19) {` +
      `LVIEW_ID = 19; LVIEW_HEADER_OFFSET = 27;` +
      `} else if (ngMajor >= 16) {` +
      `LVIEW_ID = 19; LVIEW_HEADER_OFFSET = 25;` +
      `} else if (ngMajor >= 14) {` +
      `LVIEW_ID = 20; LVIEW_HEADER_OFFSET = 22;` +
      `} else {` +
      // v9-13: no ID field, __ngContext__ stores LView directly
      `LVIEW_ID = null; LVIEW_HEADER_OFFSET = 20;` +
      `}` +
      `window.__ngLViewIndices__ = {` +
      `CONTEXT: LVIEW_CONTEXT,` +
      `TVIEW: LVIEW_TVIEW,` +
      `PARENT: LVIEW_PARENT,` +
      `ID: LVIEW_ID,` +
      `HEADER_OFFSET: LVIEW_HEADER_OFFSET` +
      `};` +
      `console.log("[audako-powertoys] LView indices:", window.__ngLViewIndices__);` +
      // getLView: resolve __ngContext__ to LView (handles numeric ID, LContext and direct LView)
      `function ngGetLView(el) {` +
      `var ctx = el && el.__ngContext__;` +
      `if (typeof ctx === "number" && window.__ngLViewRegistry__) {` +
      `return window.__ngLViewRegistry__.get(ctx) || null;` +
      `}` +
      `if (ctx && typeof ctx === "object") {` +
      `if (Array.isArray(ctx.lView)) return ctx.lView;` +
      `if (typeof ctx.lViewId === "number" && window.__ngLViewRegistry__) {` +
      `return window.__ngLViewRegistry__.get(ctx.lViewId) || null;` +
      `}` +
      `}` +
      `return Array.isArray(ctx) ? ctx : null;` +
      `}` +
      // unwrapRNode: mirrors Angular's unwrapRNode utility
      `function ngUnwrapRNode(value) {` +
      `while (Array.isArray(value)) { value = value[0]; }` +
      `return value;` +
      `}` +
      // findNodeIndex: locate the element index in an LView
      `function ngFindNodeIndex(lView, el) {` +
      `if (!lView) return -1;` +
      `var tView = lView[LVIEW_TVIEW];` +
      `var end = tView && typeof tView.bindingStartIndex === "number" ? tView.bindingStartIndex : lView.length;` +
      `for (var i = LVIEW_HEADER_OFFSET; i < end; i++) {` +
      `if (ngUnwrapRNode(lView[i]) === el) return i;` +
      `}` +
      `return -1;` +
      `}` +
      // getComponentAtNodeIndex: mirrors Angular's context_discovery.ts implementation
      `function ngGetComponentAtNodeIndex(lView, nodeIndex) {` +
      `var tView = lView && lView[LVIEW_TVIEW];` +
      `var tNode = tView && tView.data ? tView.data[nodeIndex] : null;` +
      `if (!tNode) return null;` +
      `var directiveStart = tNode.directiveStart;` +
      `var componentOffset = tNode.componentOffset;` +
      `if (typeof directiveStart === "number" && typeof componentOffset === "number" && componentOffset > -1) {` +
      `return lView[directiveStart + componentOffset] || null;` +
      `}` +
      `var directiveEnd = tNode.directiveEnd;` +
      `if (typeof directiveStart === "number" && typeof directiveEnd === "number") {` +
      `for (var i = directiveStart; i < directiveEnd; i++) {` +
      `var dir = lView[i];` +
      `if (dir && dir.constructor && dir.constructor.ɵcmp) return dir;` +
      `}` +
      `}` +
      `return null;` +
      `}` +
      // getParentLView: walks through LView/LContainer parent links
      `function ngGetParentLView(lView) {` +
      `var parent = lView && lView[LVIEW_PARENT];` +
      `if (!Array.isArray(parent)) return null;` +
      `if (parent[1] === true) return Array.isArray(parent[LVIEW_PARENT]) ? parent[LVIEW_PARENT] : null;` +
      `return parent;` +
      `}` +
      // getOwningComponent: component whose view owns this element
      `function ngGetOwningComponent(el) {` +
      `var lView = ngGetLView(el);` +
      `if (!lView) return null;` +
      `while (lView && lView[LVIEW_TVIEW] && lView[LVIEW_TVIEW].type === 2) {` +
      `lView = ngGetParentLView(lView);` +
      `}` +
      `return lView ? lView[LVIEW_CONTEXT] : null;` +
      `}` +
      // getComponent: component instance bound to the host DOM element
      `function ngGetComponent(el) {` +
      `var lView = ngGetLView(el);` +
      `if (!lView) return null;` +
      `var nodeIndex = ngFindNodeIndex(lView, el);` +
      `if (nodeIndex === -1) return null;` +
      `return ngGetComponentAtNodeIndex(lView, nodeIndex);` +
      `}` +
      // Walk the DOM tree using the LView registry to resolve components
      `function walkDomTree(el, depth) {` +
      `depth = depth || 0;` +
      `var node = { element: el.tagName, depth: depth, children: [] };` +
      `var lView = ngGetLView(el);` +
      `if (lView) {` +
      `var comp = ngGetComponent(el) || ngGetOwningComponent(el);` +
      `if (comp && typeof comp === "object" && comp.constructor) {` +
      `node.component = comp;` +
      `node.componentName = comp.constructor.name;` +
      `if (LVIEW_ID !== null) node.lViewId = lView[LVIEW_ID];` +
      `}` +
      `}` +
      `var children = el.children;` +
      `for (var i = 0; i < children.length; i++) {` +
      `var child = walkDomTree(children[i], depth + 1);` +
      `if (child.component || child.children.length > 0) {` +
      `node.children.push(child);` +
      `}` +
      `}` +
      `return node;` +
      `}` +
      // Build the tree after a short delay to let components render
      `setTimeout(function() {` +
      `if (LVIEW_ID !== null && !window.__ngLViewRegistry__) {` +
      `console.warn("[audako-powertoys] LView registry not captured!");` +
      `return;` +
      `}` +
      `if (window.__ngLViewRegistry__) {` +
      `console.log("[audako-powertoys] LView registry captured with", window.__ngLViewRegistry__.size, "entries");` +
      `}` +
      `window.__ngComponentTree__ = walkDomTree(document.body, 0);` +
      `console.log("[audako-powertoys] Component tree:", window.__ngComponentTree__);` +
      `}, 3000);` +
      `console.log("[audako-powertoys] Angular bootstrap captured!", ref.injector);` +
      `return ref;` +
      `}).catch(`,
  );

  // Log the rewritten bootstrap line for verification
  const rewrittenBootstrap = content.match(
    /\.bootstrapModule\([^)]+\)\.then\(function[\s\S]{0,200}/,
  );
  console.info(
    '[audako-powertoys] Rewritten bootstrap:',
    rewrittenBootstrap ? rewrittenBootstrap[0] : 'not found',
  );

  // Prepend: (1) LView registry capture via Map.prototype.set hook, (2) log
  // The Map hook needs to work without knowing the Angular version yet (it runs before bootstrap),
  // so we check both possible ID indices (19 and 20) to cover v14-15 and v16+.
  // v9-13 don't use a Map registry at all (__ngContext__ stores LView directly).
  const lviewRegistryHook = [
    `// Hook Map.prototype.set to capture Angular's internal LView registry.`,
    `// Angular 14+ stores LViews in a module-scoped Map keyed by numeric IDs.`,
    `// We detect this by fingerprinting LView arrays:`,
    `//   - Array with 22+ slots (min HEADER_OFFSET across v14+ is 22)`,
    `//   - [1] is a TView object (has "blueprint" and "type" properties)`,
    `//   - ID at [19] (v16+) or [20] (v14-15) matches the Map key`,
    `// This fires exactly once, then restores Map.prototype.set.`,
    `(function() {`,
    `  var origSet = Map.prototype.set;`,
    `  Map.prototype.set = function(key, value) {`,
    `    if (!window.__ngLViewRegistry__`,
    `        && typeof key === "number"`,
    `        && Array.isArray(value)`,
    `        && value.length >= 22`,
    `        && (value[19] === key || value[20] === key)`,
    `        && typeof value[1] === "object" && value[1] !== null`,
    `        && "blueprint" in value[1]`,
    `        && "type" in value[1]) {`,
    `      window.__ngLViewRegistry__ = this;`,
    `      console.log("[audako-powertoys] Captured LView registry Map!", this);`,
    `      Map.prototype.set = origSet;`,
    `    }`,
    `    return origSet.call(this, key, value);`,
    `  };`,
    `})();`,
  ].join('\n');

  const injection = `console.log('[audako-powertoys] Running inside Angular context!');\n`;
  return lviewRegistryHook + '\n' + injection + content;
}

export function registerScriptIntercepts(): void {
  interceptMainScript();
}
