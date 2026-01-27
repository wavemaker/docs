---
title: "Flipper"
id: "flipper"
sidebar_label: "Flipper"
last_update: { author: 'Vivek Raj' }
---

# Flipper

:::warning
**Flipper has been officially deprecated by Meta** as of 2023 and is no longer actively maintained. For WaveMaker applications using Expo 52+ (WaveMaker 11.10.0+), use [React Native DevTools](./react-native-devtools) instead, which provides similar functionality with better support.

**Recommended alternatives:**
- [React Native DevTools](./react-native-devtools) - Official replacement for Expo 52+
- [Reactotron](./reactotron) - Community alternative with similar features
- [Chrome DevTools](./chrome-devtools) - For web preview debugging
:::

Flipper was an extensible mobile app debugger for iOS and Android developed by Meta (Facebook). This documentation is preserved for reference for legacy projects.

---

## Overview

Flipper provided a desktop interface for debugging React Native applications with plugins for layout inspection, network monitoring, and more.

**Platform Support:**
- ❌ Web Preview (not supported)
- ⚠️ Expo (limited support, requires bare workflow)
- ⚠️ Debug Builds (APK/IPA with native code access)
- ❌ Release Builds (not supported)

---

## Why Flipper Was Deprecated

### 1. Limited Expo Support

Flipper required direct access to native code, which wasn't compatible with Expo's managed workflow. WaveMaker applications use Expo, making Flipper difficult to integrate.

```javascript
// ❌ Flipper required native modifications
// This doesn't work with Expo managed workflow
import { addPlugin } from 'react-native-flipper';
```

### 2. Complex Setup

Setting up Flipper required:
- Native iOS and Android code modifications
- Manual pod installations
- Gradle configuration changes
- Multiple dependency installations

This complexity was incompatible with WaveMaker's streamlined development workflow.

### 3. Maintenance Burden

- Difficult to maintain across React Native versions
- Frequent breaking changes with updates
- Required native code expertise
- Poor documentation for troubleshooting

### 4. Better Alternatives

React Native DevTools (available in Expo 52+) provides:
- Unified debugging experience
- No native code modifications required
- Works seamlessly with Expo
- Official support from React Native team

---

## Installation (Legacy - For Reference Only)

:::caution
This installation process is documented for reference only. Do not attempt to set up Flipper for new WaveMaker projects. Use [React Native DevTools](./react-native-devtools) instead.
:::

### Desktop App

```bash
# macOS
brew install --cask flipper

# Or download from GitHub
# https://github.com/facebook/flipper/releases
```

### React Native Plugin

```bash
# Install React Native plugin
npm install --save-dev react-native-flipper
```

### iOS Setup

Required modifying `ios/Podfile`:

```ruby
# ios/Podfile
def flipper_pods()
  flipper_version = '0.174.0'
  pod 'FlipperKit', '~>' + flipper_version
  pod 'FlipperKit/FlipperKitLayoutPlugin', '~>' + flipper_version
  pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipper_version
  pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipper_version
  pod 'FlipperKit/FlipperKitReactPlugin', '~>' + flipper_version
end

# In target section
flipper_pods()
```

### Android Setup

Required modifying `android/app/build.gradle`:

```gradle
// android/app/build.gradle
dependencies {
    debugImplementation("com.facebook.flipper:flipper:${FLIPPER_VERSION}")
    debugImplementation("com.facebook.flipper:flipper-network-plugin:${FLIPPER_VERSION}")
    debugImplementation("com.facebook.flipper:flipper-fresco-plugin:${FLIPPER_VERSION}")
}
```

---

## Features (Historical Reference)

### 1. Layout Inspector

Inspected UI hierarchy in real-time.

**Features:**
- View component tree
- Inspect props and state
- Modify styles in real-time
- Measure layout performance

**Why it's obsolete:** React Native DevTools provides similar component inspection with the Components panel, without requiring native setup.

### 2. Network Inspector

Monitored all network requests and responses.

**Features:**
- View request/response details
- Timing information
- Headers and body inspection
- WebSocket monitoring

**Why it's obsolete:** React Native DevTools has a Network panel with similar capabilities, plus it works with WavePulse for release builds.

### 3. Logs

Viewed application logs in real-time.

**Why it's obsolete:** React Native DevTools Console panel provides better log filtering and search capabilities.

### 4. Databases

Inspected SQLite and AsyncStorage.

**Features:**
- View all keys and values
- Edit values directly
- Delete keys
- Query databases

**Why it's obsolete:** Use React Native DevTools with AsyncStorage inspection or WavePulse Storage panel for debugging storage.

### 5. React DevTools Integration

Flipper included React DevTools plugin.

**Why it's obsolete:** React DevTools is available as a standalone tool and integrated into React Native DevTools.

---

## Why WaveMaker Apps Cannot Use Flipper

### 1. Expo Managed Workflow

WaveMaker mobile apps are built using Expo's managed workflow, which:
- Doesn't expose native iOS/Android code
- Cannot install native dependencies
- Requires custom native modules to use Expo dev client

Flipper required direct access to native code, which conflicts with this approach.

### 2. Native Code Modifications Required

```javascript
// ❌ Flipper requires native iOS code changes
// ios/AppDelegate.m modifications needed

// ❌ Flipper requires native Android code changes
// android/app/src/main/java/.../MainActivity.java modifications needed
```

WaveMaker's workflow intentionally avoids native code modifications to:
- Simplify development
- Enable rapid iteration
- Reduce maintenance complexity
- Allow Studio-based development

### 3. Build Process Incompatibility

Flipper required:
- Native build tools (Xcode, Android Studio)
- Pod installations
- Gradle configurations
- Manual dependency management

This conflicts with WaveMaker's streamlined build process using Expo and AppChef.

---

## Migration Path from Flipper

If you were using Flipper in a legacy WaveMaker project, migrate to these alternatives:

### For Component Inspection
**Old (Flipper):** Layout Inspector
**New:** [React Native DevTools](./react-native-devtools) Components Panel

```javascript
// No setup required with React Native DevTools
// Press 'j' in Expo CLI terminal to launch
```

### For Network Monitoring
**Old (Flipper):** Network Inspector
**New:** [React Native DevTools](./react-native-devtools) Network Panel or [WavePulse](../wm-debugging-tools/wavepulse) Network Panel

```javascript
// React Native DevTools: Built-in network monitoring
// WavePulse: Shows WaveMaker service variables
```

### For Logging
**Old (Flipper):** Logs plugin
**New:** [React Native DevTools](./react-native-devtools) Console Panel

```javascript
console.log('User action');
console.warn('Warning message');
console.error('Error occurred', error);
// All visible in React Native DevTools Console
```

### For Storage Inspection
**Old (Flipper):** Databases plugin
**New:** [WavePulse](../wm-debugging-tools/wavepulse) Storage Panel

```javascript
// WavePulse shows Local Storage and Session Storage
// No setup required, just enable WavePulse in wm_rn_config.json
```

### For Custom Debugging
**Old (Flipper):** Custom plugins
**New:** [Reactotron](./reactotron) with custom commands

```javascript
import Reactotron from 'reactotron-react-native';

// Create custom debugging commands
Reactotron.onCustomCommand({
  command: 'clearCache',
  handler: () => {
    // Your custom logic
  },
});
```

---

## Comparison: Flipper vs Modern Tools

### Flipper vs React Native DevTools

| Feature | Flipper | React Native DevTools |
|---------|---------|----------------------|
| Expo Support | ❌ Limited | ✅ Full |
| Native Code Required | ✅ Yes | ❌ No |
| Setup Complexity | 🔴 High | 🟢 None |
| Component Inspection | ✅ | ✅ |
| Network Monitoring | ✅ | ✅ |
| JavaScript Debugging | ❌ | ✅ |
| Breakpoints | ❌ | ✅ |
| WaveMaker Compatible | ❌ | ✅ |
| Active Maintenance | ❌ Deprecated | ✅ Active |

### Flipper vs WavePulse

| Feature | Flipper | WavePulse |
|---------|---------|-----------|
| Works with APK/IPA | ⚠️ Debug only | ✅ Debug & Release |
| Expo Support | ❌ | ✅ |
| Native Setup Required | ✅ | ❌ |
| WaveMaker Components | ❌ | ✅ |
| Service Variables | ❌ | ✅ |
| Timeline View | ❌ | ✅ |
| Export Sessions | ❌ | ✅ |
| WaveMaker Integration | ❌ | ✅ |

---

## Best Practices for Migration

### 1. Remove Flipper Dependencies

If migrating from a project that used Flipper:

```bash
# Remove Flipper packages
npm uninstall react-native-flipper

# Remove native dependencies
# For iOS:
cd ios && pod deintegrate && cd ..

# Clean build folders
rm -rf ios/Pods
rm -rf ios/build
rm -rf android/build
```

### 2. Update to React Native DevTools

For Expo 52+ (WaveMaker 11.10.0+):

```bash
# Start Expo
npx expo start

# Press 'j' in terminal to open React Native DevTools
```

### 3. Configure WavePulse

For release build debugging:

```json
// wm_rn_config.json
{
  "preferences": {
    "enableWavePulse": true,
    "enableLogs": true
  }
}
```

### 4. Add Reactotron for Custom Debugging

For advanced logging needs:

```bash
npm install --save-dev reactotron-react-native
```

```javascript
// ReactotronConfig.js
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  Reactotron
    .configure({ name: 'WaveMaker App' })
    .useReactNative()
    .connect();
}
```

---

## Related Documentation

**Recommended Modern Tools:**
- [React Native DevTools](./react-native-devtools) – Official debugging for Expo 52+
- [Chrome DevTools](./chrome-devtools) – Browser debugging for web preview
- [React DevTools](./react-devtools) – React component inspection
- [WavePulse](../wm-debugging-tools/wavepulse) – WaveMaker debugging tool
- [Reactotron](./reactotron) – Community debugging tool

**Testing Documentation:**
- [Debugging Overview](../debugging-overview) – All debugging tools and methods
- [UI Testing Mobile](../testing-strategies/ui-testing-mobile) – Mobile testing strategies

**Build Documentation:**
- [Expo Builds](../../../../build-and-deploy/build/mobile/expo) – Expo EAS Build setup
- [CLI Builds](../../../../build-and-deploy/build/mobile/cli) – Local builds with Expo CLI

**External Resources:**
- [Flipper GitHub (Archived)](https://github.com/facebook/flipper) – Archived repository
- [React Native DevTools Docs](https://reactnative.dev/docs/react-native-devtools) – Official documentation
- [Expo Debugging Guide](https://docs.expo.dev/debugging/runtime-issues/) – Expo debugging strategies

:::tip
**For New Projects:** Do not use Flipper. Start with React Native DevTools as your primary debugging tool. Use WavePulse for release build debugging and Reactotron for custom logging needs.

**For Legacy Projects:** If you have Flipper configured, plan migration to React Native DevTools. Flipper is no longer maintained and will not receive updates or security patches.
:::
