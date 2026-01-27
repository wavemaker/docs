---
title: "React DevTools"
id: "react-devtools"
sidebar_label: "React DevTools"
last_update: { author: 'Vivek Raj' }
---

# React DevTools

React DevTools is a debugging tool designed to debug React and React Native apps. It can be used in browsers by installing its extension and provides powerful React component inspection capabilities.

---

## Overview

React DevTools provides React-specific debugging capabilities including:

- **Component hierarchy** inspection
- **Props and state** viewing and editing
- **Performance profiling** for React components
- **Hooks** inspection
- **Component trace** for style sources

**Platform Support:**
- ✅ Web Preview (Browser extension)
- ✅ Expo (Go / Dev Build)
- ❌ Release Build (APK/IPA)

:::note
React DevTools shows React components unlike Chrome DevTools which shows HTML elements. This is particularly useful for debugging component state and props in WaveMaker apps.
:::

---

## Available Panels

### Components Panel
Shows React components in hierarchical structure with their props and state.

### Profiler Panel
Collects timing information about each component to identify performance bottlenecks.

---

## Installation

### Browser Extension

React DevTools can be installed as an extension in Chrome, Firefox, and Edge browsers.

**Chrome:**
1. Visit [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
2. Click "Add to Chrome"
3. Accept permissions

**Firefox:**
1. Visit [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
2. Click "Add to Firefox"
3. Accept permissions

**Edge:**
1. Visit [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)
2. Click "Get"
3. Accept permissions

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/1sMAWFG2RXrYq82p693aMW"
    title="Installing React DevTools"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

### Standalone Application

For React Native debugging without browser:

```bash
# Install globally
npm install -g react-devtools

# Or install for project
npm install --save-dev react-devtools

# Start standalone
react-devtools
```

---

## Using React DevTools

### Launching in Web Preview

1. Install React DevTools browser extension
2. Launch application web preview from Studio
3. Click "REMOVE TOOLBAR" once preview loads
4. Right-click anywhere and select **Inspect**
5. Browser DevTools will open with two new panels:
   - **⚛️ Components**
   - **⚛️ Profiler**

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/rJEJEs4wGrcAJexguS9LE9"
    title="React DevTools Walkthrough"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

---

## Components Panel

### Inspecting Component Hierarchy

The Components panel displays React components in a tree structure similar to the DOM tree, but showing React components instead of HTML elements.

**Features:**
- View component tree structure
- Select components to inspect
- Search for components by name
- Filter components

### Viewing Props and State

When you select a component in the tree:

**Right panel shows:**
- **Props** – Data passed from parent component
- **State** – Component's internal state (if using state)
- **Hooks** – Hook values (if using hooks)
- **Rendered by** – Parent component information

**For WaveMaker components:**
- Props show widget configuration from Studio
- State shows current widget state
- Can view data binding values

### Editing Props and State

You can modify props and state values directly in React DevTools to test behavior:

1. Select component in tree
2. In right panel, click on prop/state value
3. Edit the value
4. Press Enter to apply
5. Component re-renders with new value

**Use cases:**
- Test component with different prop values
- Debug state-related issues
- Validate conditional rendering logic

:::tip
Changes in React DevTools are temporary and reset on page reload. They're useful for testing but don't modify your code.
:::

### Style Trace Object

In the component details, there's a **trace object** under styles:

**What it shows:**
- Sources that contributed to final styles
- Style priority (later sources override earlier ones)
- Helps debug style conflicts

**Example:**
```
trace: {
  default: { color: 'black' },
  theme: { color: 'blue' },
  custom: { color: 'red' }  // This wins
}
```

---

## Filtering Components

React DevTools shows many wrapper components along with WaveMaker components. To focus on WaveMaker components only:

**Filter pattern:**
```
^(?!Wm)
```

This regex filters out all components except those starting with "Wm" (WaveMaker components).

**How to apply:**
1. Click filter icon in Components panel
2. Enter pattern: `^(?!Wm)`
3. Press Enter
4. Only WaveMaker components are shown

---

## Profiler Panel

The Profiler measures component render performance to identify bottlenecks.

### Recording a Profile

1. Open **⚛️ Profiler** panel
2. Click **Record** button (red circle)
3. Interact with your application
4. Click **Stop** to finish recording

### Analyzing Results

**Flame Graph:**
- Shows which components rendered
- Width = render duration
- Color intensity = relative performance
- Hover for detailed timing

**Ranked Chart:**
- Lists components by render time
- Longest renders at top
- Click to see render details

**Component Chart:**
- Shows individual component renders over time
- Useful for tracking repeated renders
- Identify unnecessary re-renders

### Performance Metrics

For each component render:
- **Duration** – Time to render
- **Commit time** – When changes committed to DOM
- **Interactions** – User interactions during render

**Use cases:**
- Find slow rendering components
- Identify unnecessary re-renders
- Optimize component performance
- Compare before/after optimization

---

## Key Features

**✅ Advantages:**
- Shows React components (not HTML elements)
- View and edit props and state in real-time
- Component hierarchy visualization
- Performance profiling for React components
- Works with both web preview and Expo builds
- Trace object shows style source priority
- Free and open source

**⚛️ WaveMaker Integration:**
- Inspect WaveMaker widget components
- View widget properties as props
- Filter to show only Wm* components
- Debug data binding values
- Trace style conflicts

---

## Best Practices

### 1. Use Filters Effectively

```javascript
// ✅ Good - Filter to relevant components
^(?!Wm)          // Show only WaveMaker components
UserProfile      // Search for specific component
```

### 2. Combine with Chrome DevTools

```javascript
// ✅ Good - Use both together
// React DevTools → Component state/props
// Chrome DevTools → Network/Console/Sources

// ❌ Bad - Using one tool for everything
```

### 3. Profile in Production Mode

For accurate performance measurements:
```bash
# Build in production mode
npm run build

# Or set NODE_ENV
NODE_ENV=production npm start
```

### 4. Clean Up After Profiling

Profiling can impact performance:
- Stop recording when done
- Clear profile data between tests
- Don't leave profiler running continuously

---

## Keyboard Shortcuts

- **Select Element** – Click component in tree
- **Expand/Collapse** – Arrow keys
- **Search** – Start typing component name
- **Clear Console** – Same as browser DevTools

---

## Troubleshooting

### React DevTools Not Showing

**If panels don't appear:**
1. Refresh the page
2. Ensure extension is enabled
3. Check if React is detected (icon color)
4. Try incognito mode
5. Reinstall extension

### "This page is using the development build of React"

This warning is normal in development mode. Ignore it or build in production mode for testing.

### Components Not Updating

If changes don't reflect:
1. Check if component uses props/state correctly
2. Verify re-render is triggered
3. Check for memoization blocking updates
4. Use Profiler to see if component rendered

---

## Related Documentation

**Other Debugging Tools:**
- [Chrome DevTools](./chrome-devtools) – Browser debugging for web preview
- [React Native DevTools](./react-native-devtools) – React Native debugging
- [WavePulse](../wm-debugging-tools/wavepulse) – WaveMaker debugging tool

**Testing Documentation:**
- [Debugging Overview](../debugging-overview) – All debugging tools and methods
- [UI Testing Mobile](../testing-strategies/ui-testing-mobile) – Mobile testing strategies

**External Resources:**
- [React DevTools Documentation](https://react.dev/learn/react-developer-tools) – Official guide
- [React DevTools GitHub](https://github.com/facebook/react/tree/main/packages/react-devtools) – Source code
- [Profiling Components](https://react.dev/reference/react/Profiler) – Profiling API

:::tip
React DevTools works with any React or React Native application, not just WaveMaker apps. It's a valuable tool for any React developer.
:::
