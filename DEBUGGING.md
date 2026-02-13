# 🔧 Debugging Guide - Audako PowerToys

## Development Workflow

### Option 1: Dev Server (for Popup Development)
Best for rapid UI development with Hot Module Replacement (HMR).

```bash
npm run dev
```

- Opens at `http://localhost:3000` (or next available port)
- Live reload on file changes
- Full Svelte DevTools support
- TypeScript type checking in browser

**Limitations:**
- Can't access Chrome extension APIs (chrome.storage, chrome.tabs, etc.)
- Good for UI components, not for extension-specific logic

### Option 2: Watch Mode + Extension Reload
Best for full extension development with real Chrome APIs.

```bash
npm run build:watch
```

Then:
1. Load unpacked extension from `dist` folder in `chrome://extensions/`
2. After each build, click the reload icon on your extension card
3. Or use [Extensions Reloader](https://chromewebstore.google.com/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid) extension for auto-reload

---

## Loading the Extension

1. **Build the extension:**
   ```bash
   npm run build
   ```

2. **Open Chrome Extensions:**
   - Navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)

3. **Load unpacked:**
   - Click "Load unpacked"
   - Select the `dist` folder from your project

4. **Verify:**
   - Extension should appear in the list
   - Click the extension icon to test the popup

---

## Debugging Different Components

### 🔹 Service Worker (background.js)

**Access DevTools:**
1. Go to `chrome://extensions/`
2. Find "Audako PowerToys"
3. Click "service worker" link (blue text)
4. DevTools opens for the service worker

**Alternative:**
- `chrome://serviceworker-internals/` - View all service workers

**Common Issues:**
- Service worker terminates after 30 seconds of inactivity
- Console clears when it restarts
- Use `console.log` to track lifecycle:
  ```javascript
  console.log('SW started:', new Date().toISOString());
  ```

**Keep alive during debugging:**
Add to background.ts temporarily:
```javascript
// TEMPORARY: Keep service worker alive during debugging
setInterval(() => {
  console.log('Heartbeat:', new Date().toLocaleTimeString());
}, 20000);
```

### 🔹 Popup (popup.html)

**Method 1: Right-click popup**
1. Click extension icon to open popup
2. Right-click anywhere in the popup
3. Select "Inspect"

**Method 2: Keep DevTools open**
1. Open popup
2. Open DevTools with `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac)
3. DevTools stays open when popup loses focus

**Tips:**
- Popup resets when closed - state is lost
- Use `chrome.storage` to persist data between opens
- Check Console for Svelte errors and warnings

### 🔹 Content Scripts (content.js)

Content scripts run in web pages where your extension is active.

**Debug in page DevTools:**
1. Navigate to a page where your extension is active
2. Open DevTools (`F12`)
3. Go to Console tab
4. Look for your logs (prefix them for easy identification):
   ```javascript
   console.log('[AUDAKO]', 'Content script loaded');
   ```

**View source:**
1. DevTools → Sources tab
2. Expand "Content scripts" or search for your file
3. Set breakpoints as needed

### 🔹 Injected Scripts

Similar to content scripts - debug in the page's DevTools.

---

## Debugging Techniques

### Console Logging
Add distinctive prefixes to easily identify logs:

```javascript
// Service Worker
console.log('[SW]', 'Event received:', event);

// Content Script
console.log('[CONTENT]', 'Element found:', element);

// Popup
console.log('[POPUP]', 'User clicked:', data);
```

### Breakpoints
1. Open DevTools → Sources
2. Find your file
3. Click line number to set breakpoint
4. Execution pauses when code runs

### Network Tab
Monitor API calls:
1. DevTools → Network tab
2. Filter by "Fetch/XHR"
3. See all HTTP requests from your extension

### Storage Inspection
View extension storage:
```javascript
// In any extension context (popup, service worker):
chrome.storage.local.get(null, (items) => {
  console.log('All storage:', items);
});

chrome.storage.sync.get(null, (items) => {
  console.log('Sync storage:', items);
});
```

Or use DevTools:
1. Open extension DevTools (service worker or popup)
2. Application tab → Storage → Extension Storage

---

## Hot Tips

### 1. Source Maps
The build includes source maps by default in dev mode. You can enable them in production:

Edit `vite.config.js`:
```javascript
build: {
  sourcemap: true,  // Change from false
  // ...
}
```

### 2. React DevTools / Svelte DevTools
Install browser extensions for better debugging:
- [Svelte DevTools](https://chrome.google.com/webstore/detail/svelte-devtools/ckolcbmkjpjmangdbmnkpjigpkddpogn)

### 3. Preserve Logs
In DevTools Console:
- Check "Preserve log" to keep logs across page reloads/navigations

### 4. Error Filtering
In Console, filter by severity:
- All levels
- Errors only
- Warnings only
- Info only

### 5. Quick Reload
After changes:
- `chrome://extensions/` → Click reload icon on your extension
- Or use keyboard: Click extension → `Ctrl+R`

---

## Common Issues

### "Cannot access chrome.* APIs"
- Make sure you're in an extension context (not dev server)
- Check manifest permissions
- Verify the API is available in your Chrome version

### "Service worker terminated"
- Normal behavior after 30s inactivity
- Use `chrome.alarms` instead of `setTimeout`
- Store state in `chrome.storage`, not global variables

### "Popup closes immediately"
- Check for JavaScript errors in console
- Verify all imports are correct
- Check that HTML references correct JS file

### "Content script not injecting"
- Check `manifest.json` host permissions
- Verify URL matches pattern
- Check service worker console for injection errors

### "Changes not reflecting"
- Clear cache: DevTools → Network tab → "Disable cache"
- Hard reload: `Ctrl+Shift+R`
- Reload extension: `chrome://extensions/`

---

## Useful Chrome URLs

- `chrome://extensions/` - Manage extensions
- `chrome://serviceworker-internals/` - Service worker debugging
- `chrome://inspect/#service-workers` - Inspect all service workers
- `chrome://inspect/#extensions` - Inspect extension backgrounds

---

## Performance Profiling

### Performance Tab
1. DevTools → Performance tab
2. Click Record
3. Interact with extension
4. Stop recording
5. Analyze timeline, memory, CPU usage

### Memory Tab
Check for memory leaks:
1. DevTools → Memory tab
2. Take heap snapshot
3. Interact with extension
4. Take another snapshot
5. Compare to find leaks

---

## Development Best Practices

1. **Use meaningful console.log prefixes**
   ```javascript
   console.log('[CATEGORY]', message);
   ```

2. **Keep DevTools open**
   - Dock it to the side for easy access

3. **Test in Incognito**
   - Verifies extension works without cached data
   - Enable extension in incognito via `chrome://extensions/`

4. **Version your builds**
   - Update `version` in `manifest.json` when testing

5. **Test service worker lifecycle**
   - Stop service worker in `chrome://serviceworker-internals/`
   - Verify it restarts properly

---

## Getting Help

If you encounter issues:
1. Check browser console for errors
2. Review [Chrome Extension Docs](https://developer.chrome.com/docs/extensions/)
3. Search [Stack Overflow](https://stackoverflow.com/questions/tagged/chrome-extension)
4. Check [Chrome Extension GitHub Issues](https://github.com/GoogleChrome/chrome-extensions-samples/issues)

---

Happy debugging! 🐛🔨
