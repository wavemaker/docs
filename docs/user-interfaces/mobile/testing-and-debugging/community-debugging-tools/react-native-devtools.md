---
title: "React Native DevTools"
id: "react-native-devtools"
sidebar_label: "React Native DevTools"
last_update: { author: 'Vivek Raj' }
---

# React Native DevTools

React Native DevTools is a newly launched debugging tool specifically designed to debug React Native apps. It provides a comprehensive debugging environment for React Native applications running on physical and virtual devices.

---

## Overview

React Native DevTools combines features from Chrome DevTools and React DevTools into a unified debugging experience for React Native applications.

**Platform Support:**
- ❌ Web Preview
- ✅ Expo (Go / Dev Build)
- ❌ Release Build (APK/IPA)

:::note
**Availability:** React Native DevTools is available for applications using Expo 52 (WaveMaker 11.10.0) or higher.

For earlier versions, use the old debugger (`j`) and React DevTools (`shift + m` > "Open React devtools") in terminal where Expo CLI is running.
:::

---

## Requirements

- **Browser:** Google Chrome or Microsoft Edge installed
- **Expo Version:** 52 or higher (WaveMaker 11.10.0+)
- **Application:** Running via Expo CLI in development mode

---

## Available Panels

### Console
View log messages, errors, and execute JavaScript commands.

### Sources
View and debug JavaScript code with breakpoints.

### Network
Monitor API calls and network requests.

### Memory
Analyze memory usage and detect memory leaks.

### Components (⚛️)
Inspect React components, props, and state (from React DevTools).

### Profiler (⚛️)
Profile React component performance (from React DevTools).

---

## Launching React Native DevTools

### Prerequisites

1. Run application using Expo CLI:
```bash
# Navigate to project directory
cd /path/to/exported/project

# Start Expo
npx expo start
```

2. Connect device/simulator:
   - **Physical device:** Scan QR code with Expo Go
   - **iOS Simulator:** Press `i` in terminal
   - **Android Emulator:** Press `a` in terminal

### Opening DevTools

**Method 1: Keyboard Shortcut**
- Press `j` in the terminal where Expo CLI is running
- React Native DevTools will launch automatically

**Method 2: Dev Menu**
1. Open React Dev Menu:
   - **Physical device:** Shake device
   - **iOS Simulator:** Press `Cmd` + `D`
   - **Android Emulator:** Press `Cmd` + `M` (Mac) or `Ctrl` + `M` (Windows/Linux)
2. Select "Open React Native DevTools"

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/qN3ypGfED7Yy8p9n2rcZNo"
    title="React Native DevTools"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

---

## Console Panel

### Viewing Logs

Console shows all logs from your React Native application:

```javascript
console.log('Info message');
console.warn('Warning message');
console.error('Error message');
console.info('Information');
console.debug('Debug message');
```

**Filtering:**
- Use filter buttons (Errors, Warnings, Info)
- Search box for text filtering
- Level-based filtering

### Executing JavaScript

Run JavaScript commands directly in the console to test and debug:

```javascript
// Access global variables
App.Variables.selectedProduct

// Call functions
navigateToPage('Dashboard')

// Test expressions
2 + 2

// Access React Native modules
import { Platform } from 'react-native';
Platform.OS
```

---

## Sources Panel

### Debugging with Breakpoints

1. Open **Sources** panel
2. Press `Cmd/Ctrl` + `P` to search files
3. Open file containing code to debug
4. Click line number to set breakpoint
5. Interact with app to trigger breakpoint

**Breakpoint Controls:**
- **Pause (F8)** – Pause at next breakpoint
- **Step Over (F10)** – Execute current line, move to next
- **Step Into (F11)** – Step into function call
- **Step Out (Shift + F11)** – Step out of current function
- **Continue (F8)** – Resume execution

### Watch Expressions

Monitor variables or expressions:
1. Expand **Watch** section
2. Click **+** to add expression
3. Value updates as code executes

---

## Network Panel

### Monitoring Requests

Network panel shows all HTTP requests made by the application:

**Request information:**
- URL and method
- Status code
- Request/response headers
- Request/response body
- Timing information
- Size

**Filtering:**
- By request type (XHR, Fetch, WebSocket)
- By status code
- By URL pattern
- By size

**Use cases:**
- Debug API call failures
- Inspect request/response data
- Monitor API performance
- Check authentication headers

---

## Memory Panel

### Analyzing Memory Usage

Monitor memory consumption to detect leaks and optimize usage:

**Features:**
- Heap snapshots
- Allocation timeline
- Memory profiling
- Leak detection

**Taking snapshots:**
1. Open **Memory** panel
2. Click "Take snapshot"
3. Interact with app
4. Take another snapshot
5. Compare snapshots to find leaks

---

## Components Panel (⚛️)

Inherited from React DevTools, shows React component hierarchy.

**Features:**
- Component tree visualization
- Props and state inspection
- Edit props/state in real-time
- Search and filter components

**Usage:**
- Select component in tree
- View props, state, hooks in right panel
- Edit values to test behavior
- Use filter to show only WaveMaker components: `^(?!Wm)`

---

## Profiler Panel (⚛️)

Inherited from React DevTools, measures component render performance.

**Features:**
- Record component renders
- Flame graph visualization
- Ranked chart by render time
- Identify performance bottlenecks

**Usage:**
1. Click **Record** button
2. Interact with application
3. Click **Stop** to finish
4. Analyze render times and frequency

---

## Element Inspector

Element Inspector allows hovering and selecting components to inspect them.

### Enabling Element Inspector

**Method 1: Dev Menu**
1. Open React Dev Menu (shake device / `Cmd+D` / `Cmd+M`)
2. Select "Toggle Element Inspector"

**Method 2: Expo CLI Options**
1. Press `shift` + `m` in terminal where Expo CLI is running
2. Select "Inspect elements"

**Method 3: React Native DevTools**
- Element Inspector can be toggled from Dev Menu accessed via DevTools

### Using Element Inspector

1. Enable Element Inspector
2. Tap/click on any component in your app
3. Component highlights with border
4. Component details show in DevTools Components panel
5. View props, state, and style information

:::tip
Press `?` in terminal where Expo CLI is running to view all available options. Press `shift` + `m` to see more tools including 'Inspect elements', 'Toggle performance monitor', and more.
:::

---

## Key Features

**✅ Advantages:**
- Debug native builds running on physical/virtual devices
- Test native features (camera, GPS, etc.)
- Real-time debugging with Expo CLI hot reload
- Unified debugging experience (combines Chrome + React DevTools)
- Element Inspector for visual component selection
- Works with `wm-reactnative sync` for live Studio changes

**🎯 WaveMaker Integration:**
- Debug while connected to Studio via `wm-reactnative sync`
- Make changes in Studio, see results on device
- Debug WaveMaker widget components
- Inspect widget props and state
- Monitor service variable calls in Network panel

**⚠️ Limitations:**
- Only works with Expo 52+ (WaveMaker 11.10.0+)
- Requires Expo CLI running
- Chrome or Edge browser required
- Cannot debug release builds (APK/IPA)

---

## Debugging with wm-reactnative sync

React Native DevTools works seamlessly with WaveMaker's live sync feature:

### Setup

1. Export React Native project from Studio
2. Run `wm-reactnative sync` to connect to Studio
3. Start Expo CLI
4. Launch React Native DevTools (`j` in terminal)
5. Make changes in Studio
6. Changes reflect on device in real-time
7. Debug using React Native DevTools

**Benefits:**
- Edit in Studio, debug on device
- Fast iteration cycle
- Test on real device during development
- Access to all DevTools features

---

## Expo CLI Options

Press `?` in Expo CLI terminal to see all options:

**Common commands:**
- `j` – Open React Native DevTools
- `shift + m` – More tools menu
- `r` – Reload app
- `m` – Toggle React Dev Menu
- `i` – Open iOS simulator
- `a` – Open Android emulator
- `w` – Open in web browser

**More tools (shift + m):**
- Inspect elements
- Toggle performance monitor
- Toggle developer menu
- Open React DevTools (old)
- Show/hide element inspector

---

## Old Debugger (Expo 51 and Earlier)

For applications using Expo 51 or earlier (WaveMaker before 11.10.0):

**Old Debugger:**
- Press `j` in Expo CLI terminal
- Opens browser-based debugger
- Uses Chrome DevTools protocol

**React DevTools (Standalone):**
- Press `shift` + `m` in Expo CLI terminal
- Select "Open React devtools"
- Opens standalone React DevTools

:::note
The old debugger and standalone React DevTools are deprecated in favor of React Native DevTools for Expo 52+.
:::

---

## Best Practices

### 1. Keep DevTools Open During Development

```javascript
// ✅ Good - Keep DevTools open for continuous monitoring
// Watch console for errors
// Monitor network requests
// Check component updates

// ❌ Bad - Opening DevTools only when bugs occur
```

### 2. Use Element Inspector Effectively

```javascript
// ✅ Good - Use Element Inspector to quickly find components
// Toggle on, tap component, view details, toggle off

// ❌ Bad - Manually searching component tree
```

### 3. Clean Up Logs

```javascript
// ✅ Good - Remove debug logs before committing
if (__DEV__) {
  console.log('Debug info');
}

// ❌ Bad - Leaving debug logs in production code
console.log('Debug info');
```

### 4. Profile Performance Regularly

```javascript
// ✅ Good - Profile during development
// Identify slow renders early
// Fix performance issues before they accumulate

// ❌ Bad - Only profiling when app feels slow
```

---

## Troubleshooting

### DevTools Won't Open

**Solutions:**
1. Ensure Chrome or Edge is installed
2. Check Expo CLI version (52+)
3. Restart Expo server
4. Clear Metro cache: `npx expo start --clear`

### Breakpoints Not Working

**Solutions:**
1. Check source maps are enabled
2. Reload app after setting breakpoints
3. Use `debugger;` statement as fallback

### Element Inspector Not Responding

**Solutions:**
1. Toggle Element Inspector off and on
2. Reload application
3. Check Dev Menu accessibility

---

## Related Documentation

**Other Debugging Tools:**
- [Chrome DevTools](./chrome-devtools) – Browser debugging for web preview
- [React DevTools](./react-devtools) – React component inspection
- [WavePulse](../wm-debugging-tools/wavepulse) – WaveMaker debugging tool

**Testing Documentation:**
- [Debugging Overview](../debugging-overview) – All debugging tools and methods
- [UI Testing Mobile](../testing-strategies/ui-testing-mobile) – Mobile testing strategies

**Build Documentation:**
- [Expo Builds](../../../../build-and-deploy/build/mobile/expo) – Expo EAS Build setup
- [CLI Builds](../../../../build-and-deploy/build/mobile/cli) – Local builds with Expo CLI

**External Resources:**
- [React Native DevTools Docs](https://reactnative.dev/docs/react-native-devtools) – Official documentation
- [Expo Debugging Guide](https://docs.expo.dev/debugging/runtime-issues/) – Expo debugging strategies
- [Metro Bundler](https://metrobundler.dev/) – React Native bundler

:::tip
React Native DevTools is the future of React Native debugging. Migrate to Expo 52+ (WaveMaker 11.10.0+) to access this powerful unified debugging experience.
:::
