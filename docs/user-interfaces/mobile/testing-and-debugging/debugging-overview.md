---
title: "Debugging Overview - React Native Application"
id: "debugging-overview"
sidebar_label: "Debugging Overview"
last_update: { author: 'Vivek Raj' }
---

# Debugging React Native Applications

WaveMaker Mobile Applications are built using Expo and React Native, enabling you to debug them like any other Expo React Native application. Along with existing community tools, WaveMaker provides specialized tools like **[WavePulse](./wm-debugging-tools/wavepulse)** for debugging WaveMaker Mobile Applications.

---

## Running Applications for Debugging

Applications can be run in different ways depending on your debugging needs:

### Web Preview

Preview applications in a web browser directly from WaveMaker Studio at any point during development. Provides quick and easy way to preview and debug your application.

**Use when:**
- Rapid iteration during development
- Quick UI/UX validation
- Testing JavaScript logic
- Debugging with Chrome DevTools

**Learn more:** [Mobile Build Overview](../../../build-and-deploy/build/mobile/overview)

### Expo Go / Development Build

Run Expo projects locally using Expo CLI with two options:

**Expo Go:**
- Mobile application to preview and test React Native projects on devices in real-time
- No separate build process needed
- Limited to Expo SDK features

**Expo Development Build:**
- Custom build including native code
- Test features not supported by Expo Go
- Full access to native modules

**Use when:**
- Testing on physical devices
- Debugging native features
- Real device performance testing
- Using React Native DevTools

**Learn more:** [Expo Dev Tools](./community-debugging-tools/expo-dev-tools)

### App Installers (APK/IPA)

Mobile apps packaged as installers for installation on devices:

**Debug Build:**
- Used for development and testing
- Includes debugging tools
- Not optimized for performance

**Release Build:**
- Final optimized version for users
- Runs faster with no debug tools
- Required for app stores

**Use when:**
- Testing production-like environment
- Debugging with WavePulse
- Testing app store submission candidates

**Learn more:** [Build Installers](../../../build-and-deploy/build/mobile/overview)

---

## Available Debugging Tools

Different debugging tools are supported across different platforms:

| Tool | Web Preview | Expo (Go / Dev Build) | Release Build (APK/IPA) |
|------|:-----------:|:---------------------:|:-----------------------:|
| **[Chrome DevTools](./community-debugging-tools/chrome-devtools)** | ✅ | - | - |
| **[React DevTools](./community-debugging-tools/react-devtools)** | ✅ | ✅ | - |
| **[React Native DevTools](./community-debugging-tools/react-native-devtools)** | - | ✅ | - |
| **[WavePulse](./wm-debugging-tools/wavepulse)** | ✅ | ✅ | ✅ |

---

## Common Debugging Panels

Different debugging tools offer various panels to inspect and experiment with different aspects of an application:

### Console
- View log messages, errors, and debugging information
- Execute JavaScript commands directly
- View stack traces for errors and warnings

### Elements/Components
- Inspect elements or components in hierarchical structure
- View details like styles, state, and props
- Hover/select elements to highlight in running application

### Sources
- View and debug JavaScript code with breakpoints
- Step through code execution line by line
- Use Watch expressions and Call Stack

### Network
- Monitor API calls, HTTP requests, and responses
- View resource load order and performance metrics
- Inspect headers, response data, and cookies

### Performance/Timeline/Profiler
- Record and analyze application performance
- View CPU usage, scripting, rendering timelines
- Identify bottlenecks slowing down the application

### Memory/Storage
- View storage usage by application
- Detect memory leaks
- Optimize memory usage

:::note
Panels, UI, and features depend on the tool and version being used.
:::

---

## Enabling Logs in WaveMaker Mobile App

Logs must be enabled to see console output when running applications.

**Steps to enable logs:**

1. Go to File Explorer in Studio
2. Open `src > main > webapp > wm_rn_config.json`
3. Add `"enableLogs": true` in `preferences` object
4. Restart Expo server if running (changes to config files require restart)

**Notes:**
- WavePulse is always enabled in web preview
- If WavePulse is enabled, log sources show as `wavepulse.agent.js` (logs are intercepted)

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/ce8XxiZkyG1R6rRNZ7HXKC"
    title="Enable logs in WaveMaker mobile apps"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

---

## Debugging Tool Selection Guide

### Use Chrome DevTools when:
- Debugging web preview
- Inspecting HTML/CSS in browser
- Monitoring network requests
- Debugging JavaScript with breakpoints
- Quick style iteration

### Use React DevTools when:
- Inspecting React component hierarchy
- Viewing/editing component props and state
- Profiling React component performance
- Debugging component lifecycle issues

### Use React Native DevTools when:
- Debugging on physical/virtual devices
- Testing native features
- Monitoring network in native environment
- Debugging while connected to Expo CLI
- Real-time debugging with hot reload

### Use WavePulse when:
- Debugging WaveMaker-specific components
- Viewing WaveMaker widget properties
- Monitoring service variable calls
- Debugging release builds (APK/IPA)
- Exporting/sharing debugging sessions
- Timeline analysis of page loads

---

## Debugging Android/iOS Native Code

All JavaScript and React debugging tools mentioned work at the JavaScript layer. To inspect native platform layers (Native Modules):

**Android:**
- Use [Android Studio](https://developer.android.com/studio) for Android debugging
- Run and debug directly in Android Studio

**iOS:**
- Use [Xcode](https://developer.apple.com/xcode/) for iOS debugging
- Run and debug directly in Xcode

[Learn more about debugging native code](https://reactnative.dev/docs/debugging-native-code)

---

## Best Practices

### 1. Use Appropriate Tool for Task
```javascript
// ✅ Good - Use right tool for the problem
// Network issues → Network tab
// Component state → React DevTools
// WaveMaker widgets → WavePulse
// Performance → Profiler

// ❌ Bad - Using console.log for everything
```

### 2. Enable Debugging Only in Development
```javascript
// ✅ Good
if (__DEV__) {
  console.log('Debug info');
}

// ❌ Bad - Left in production
console.log('Debug info');
```

### 3. Clean Up After Debugging
- Remove `debugger` statements before committing
- Disable verbose logging in production
- Remove test data and mock responses

### 4. Use Source Maps
Enable source maps for easier debugging:
```javascript
// metro.config.js
module.exports = {
  transformer: {
    enableBabelRCLookup: false,
  },
  sourceMap: true, // Enable source maps
};
```

---

## Related Documentation

**Community Debugging Tools:**
- [Chrome DevTools](./community-debugging-tools/chrome-devtools) – Browser debugging for web preview
- [React DevTools](./community-debugging-tools/react-devtools) – React component inspection
- [React Native DevTools](./community-debugging-tools/react-native-devtools) – React Native debugging

**WaveMaker Debugging Tools:**
- [WavePulse](./wm-debugging-tools/wavepulse) – WaveMaker-specific debugging tool

**Testing Documentation:**
- [UI Testing Mobile](./testing-strategies/ui-testing-mobile) – Mobile testing strategies
- [Unit Testing](./unit-testing/web-and-mobile) – Unit testing approaches

**Build Documentation:**
- [Mobile Build Overview](../../../build-and-deploy/build/mobile/overview) – Build methods for testing
- [AppChef Builds](../../../build-and-deploy/build/mobile/appchef) – QR code testing
- [Expo Builds](../../../build-and-deploy/build/mobile/expo) – Expo EAS Build

**External Resources:**
- [Expo Debugging Docs](https://docs.expo.dev/debugging/errors-and-warnings/) – Official Expo debugging guide
- [React Native Debugging](https://reactnative.dev/docs/debugging) – Official React Native debugging guide
- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/) – Official Chrome DevTools guide
