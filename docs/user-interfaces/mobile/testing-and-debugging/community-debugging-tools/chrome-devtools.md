---
title: "Chrome DevTools"
id: "chrome-devtools"
sidebar_label: "Chrome DevTools"
last_update: { author: 'Vivek Raj' }
---

# Chrome DevTools

Chrome DevTools is a built-in debugging tool in Chrome browser that helps inspect, analyze, edit, and debug web applications directly in the browser. Use it to inspect and debug WaveMaker mobile applications launched in web preview.

---

## Overview

Chrome DevTools provides comprehensive debugging capabilities for web applications, including:

- **Element inspection** with live HTML/CSS editing
- **JavaScript debugging** with breakpoints and step-through
- **Network monitoring** for API calls and resource loading
- **Performance profiling** to identify bottlenecks
- **Console** for logs and JavaScript execution
- **Memory profiling** to detect leaks

**Platform Support:**
- ✅ Web Preview
- ❌ Expo (Go / Dev Build)
- ❌ Release Build (APK/IPA)

:::note
Chrome DevTools works with web preview only. For debugging on devices, use [React Native DevTools](./react-native-devtools) or [WavePulse](../wm-debugging-tools/wavepulse).
:::

---

## Available Panels

### Console
View logs, execute JavaScript, and interact with the running application.

### Elements
Inspect HTML elements and CSS styles. Useful for debugging layout and style issues.

### Sources
View and debug JavaScript source code with breakpoints.

### Network
Monitor network activity including API calls, timing, and payloads.

### Performance
Record and analyze page performance to identify bottlenecks.

### Memory
View memory usage and detect memory leaks.

### Application
Inspect storage (LocalStorage, SessionStorage), cookies, and cache.

---

## Using Chrome DevTools

### Launching DevTools

1. Open project in WaveMaker Studio
2. Click **Preview** button at the top to launch web preview
3. After web preview loads, click **REMOVE TOOLBAR**
4. Right-click anywhere on the page and select **Inspect**
5. Chrome DevTools will open (docking position is customizable)

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/kBN1AsvKu66Eb9tE9QVaBX"
    title="Chrome DevTools Walkthrough in Web Preview for WM Mobile App"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

### Keyboard Shortcuts

**Open DevTools:**
- Mac: `Cmd` + `Option` + `J` (Console) or `Cmd` + `Option` + `I` (Last panel)
- Windows/Linux: `Ctrl` + `Shift` + `J` (Console) or `Ctrl` + `Shift` + `I` (Last panel)

**Other shortcuts:**
- `Cmd/Ctrl` + `Shift` + `C` – Element inspector
- `Cmd/Ctrl` + `P` – Quick file search
- `Cmd/Ctrl` + `Shift` + `P` – Command menu
- `Esc` – Toggle console drawer

---

## Inspecting Elements

### Viewing Component Structure

1. Open **Elements** panel
2. Hover over elements to highlight them on the page
3. Click elements to inspect their properties

**Features:**
- View HTML structure
- Inspect computed styles
- Edit CSS in real-time
- View event listeners
- Check accessibility properties

:::note
Elements panel shows HTML elements, not React components. To inspect React components, use [React DevTools](./react-devtools).
:::

### Editing Styles

1. Select an element in Elements panel
2. View **Styles** pane on the right
3. Click on any CSS property to edit it
4. Changes apply instantly to the preview

```css
/* Edit styles directly in DevTools */
.button {
  background-color: #007bff; /* Click to edit */
  padding: 10px 20px;         /* Add/remove properties */
}
```

**Use cases:**
- Quick style debugging
- Testing CSS changes before implementing
- Identifying conflicting styles
- Understanding inherited styles

---

## Console Panel

### Viewing Logs

The Console shows all logs, errors, and warnings from your application.

```javascript
// Different log types
console.log('Info message');
console.warn('Warning message');
console.error('Error message');
console.info('Information');
console.debug('Debug message');
```

**Filtering logs:**
- Use filter buttons at the top (Errors, Warnings, Info, Verbose)
- Type in search box to filter by text
- Use `-text` to exclude messages containing "text"

### Executing JavaScript

Run JavaScript directly in the console:

```javascript
// Access variables
selectedUser

// Call functions
loadUserData('user123')

// Test expressions
2 + 2

// Access DOM
document.querySelector('.user-card')

// Access app context
App.Variables.selectedProduct.dataSet
```

### Grouping Logs

```javascript
console.group('User Login Flow');
console.log('Validating credentials');
console.log('Calling authentication API');
console.log('Redirecting to dashboard');
console.groupEnd();
```

### Timing Operations

```javascript
console.time('data-load');
// ... perform operation
console.timeEnd('data-load');
// Output: data-load: 245ms
```

---

## Sources Panel

### Debugging JavaScript

1. Open **Sources** panel
2. Press `Cmd/Ctrl` + `P` to quickly find files
3. Type page name to open page scripts
4. Click line numbers to set breakpoints

**Breakpoint controls:**
- **Pause (F8)** – Pause execution at next breakpoint
- **Step Over (F10)** – Execute current line and move to next
- **Step Into (F11)** – Step into function call
- **Step Out (Shift + F11)** – Step out of current function
- **Continue (F8)** – Resume execution

### Setting Breakpoints

**Line breakpoint:**
```javascript
function calculateTotal(items) {
  // Click line number here to set breakpoint
  const total = items.reduce((sum, item) => sum + item.price, 0);
  return total;
}
```

**Conditional breakpoint:**
1. Right-click line number
2. Select "Add conditional breakpoint"
3. Enter condition (e.g., `item.price > 100`)
4. Breakpoint only triggers when condition is true

**Logpoints:**
1. Right-click line number
2. Select "Add logpoint"
3. Enter message to log (e.g., `"Item:", item`)
4. Logs message without pausing execution

### Watch Expressions

Monitor specific variables or expressions:

1. Expand **Watch** section in Sources panel
2. Click **+ Add expression**
3. Enter variable name or expression
4. Value updates as code executes

```javascript
// Watch expressions
user.name
items.length
total > 1000
```

---

## Network Panel

### Monitoring Requests

View all network requests made by your application:

1. Open **Network** panel
2. Reload page to capture requests from start
3. Click on any request to view details

**Request details:**
- **Headers** – Request/response headers
- **Preview** – Formatted response preview
- **Response** – Raw response data
- **Timing** – Request timing breakdown
- **Cookies** – Cookies sent/received

### Filtering Requests

Use filter buttons to show specific request types:
- **All** – All requests
- **XHR** – API calls (fetch/XMLHttpRequest)
- **JS** – JavaScript files
- **CSS** – Stylesheets
- **Img** – Images
- **Media** – Audio/video
- **Font** – Web fonts
- **Doc** – HTML documents
- **WS** – WebSocket connections

**Custom filters:**
```
domain:api.example.com    # Filter by domain
method:POST               # Filter by method
status-code:404           # Filter by status
larger-than:1M            # Filter by size
```

### Analyzing Request Timing

Click on a request and view **Timing** tab to see:
- **Queueing** – Time waiting in queue
- **Stalled** – Time blocked before sending
- **DNS Lookup** – DNS resolution time
- **Initial Connection** – TCP handshake
- **SSL** – SSL/TLS negotiation
- **Request Sent** – Time sending request
- **Waiting (TTFB)** – Time to first byte
- **Content Download** – Time downloading response

---

## Performance Panel

### Recording Performance

1. Open **Performance** panel
2. Click **Record** button (or press `Cmd/Ctrl` + E)
3. Perform actions to analyze
4. Click **Stop** to finish recording

**What's captured:**
- JavaScript execution
- Rendering and painting
- Network activity
- User interactions
- Memory usage

### Analyzing Results

**Main areas to check:**
- **Frames** – FPS (aim for 60fps)
- **Main Thread** – JavaScript execution
- **Raster** – Paint operations
- **GPU** – Compositor work

**Identifying bottlenecks:**
- Long yellow bars = Long-running JavaScript
- Long purple bars = Layout/reflow issues
- Long green bars = Paint operations

---

## Application Panel

### Inspecting Storage

View and edit application storage:

**Local Storage:**
- View all key-value pairs
- Edit values directly
- Delete individual items
- Clear all storage

**Session Storage:**
- Similar to Local Storage
- Cleared when tab closes

**Cookies:**
- View all cookies
- Edit cookie values
- Delete cookies
- View cookie properties (domain, path, expiry)

**Cache Storage:**
- View cached resources
- Delete cached items
- Clear entire cache

---

## Key Features

### Live Editing

Edit code and see changes immediately:

**HTML editing:**
1. Right-click element in Elements panel
2. Select "Edit as HTML"
3. Make changes
4. Press `Ctrl/Cmd` + Enter to apply

**CSS editing:**
- Click any CSS value to edit
- Add new properties by clicking empty space
- Use arrow keys to increment/decrement values
- Hold `Shift` for larger increments

### Device Emulation

Test responsive design:

1. Click **Toggle Device Toolbar** (or press `Cmd/Ctrl` + `Shift` + `M`)
2. Select device from dropdown
3. Choose orientation (portrait/landscape)
4. Adjust zoom level
5. Throttle network speed

**Custom devices:**
- Click "Edit" to add custom device dimensions
- Save frequently used configurations

---

## Key Features and Limitations

**Key Features:**
- ✅ Works with web preview (quick launch from Studio)
- ✅ Inspect elements and edit CSS for quick debugging
- ✅ View logs and execute JavaScript in console
- ✅ Monitor network activity
- ✅ Debug JavaScript with breakpoints in Sources panel
- ✅ Performance profiling
- ✅ Memory leak detection

**Limitations:**
- ❌ Elements panel shows HTML, not React components
- ❌ Cannot debug native features (only work in web preview)
- ❌ Not available for device/emulator debugging
- ❌ Limited React-specific debugging features

---

## Best Practices

### 1. Use Appropriate Panel

```javascript
// ✅ Good - Use right tool
// Layout issues → Elements panel
// JavaScript bugs → Sources panel + breakpoints
// Slow API calls → Network panel
// Performance issues → Performance panel

// ❌ Bad - Using console.log for everything
```

### 2. Preserve Log

Enable "Preserve log" in Console and Network panels to keep logs across page navigations.

### 3. Use Workspaces

Map local files to DevTools for persistent editing:
1. Open **Sources** panel
2. Click **Filesystem** tab
3. Add folder to workspace
4. Edits in DevTools save to local files

### 4. Leverage Command Menu

Press `Cmd/Ctrl` + `Shift` + `P` to access command menu:
- Screenshot capture
- Coverage analysis
- Rendering tools
- And many more features

---

## Related Documentation

**Other Debugging Tools:**
- [React DevTools](./react-devtools) – React component inspection
- [React Native DevTools](./react-native-devtools) – React Native debugging
- [WavePulse](../wm-debugging-tools/wavepulse) – WaveMaker debugging tool

**Testing Documentation:**
- [Debugging Overview](../debugging-overview) – All debugging tools and methods
- [UI Testing Mobile](../testing-strategies/ui-testing-mobile) – Mobile testing strategies
- [Unit Testing](../unit-testing/web-and-mobile) – Unit testing approaches

**External Resources:**
- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/) – Official guide
- [DevTools Tips](https://umaar.com/dev-tips/) – Weekly DevTools tips
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) – Protocol documentation

:::tip
Most modern browsers ship with similar DevTools. For Firefox, Safari, or Edge, check their respective documentation for browser-specific features.
:::
