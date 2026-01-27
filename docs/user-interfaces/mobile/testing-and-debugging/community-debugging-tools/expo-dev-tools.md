---
title: "Expo Dev Tools"
id: "expo-dev-tools"
sidebar_label: "Expo Dev Tools"
last_update: { author: 'Vivek Raj' }
---

# Expo Dev Tools

Built-in development tools provided by Expo CLI for debugging React Native applications during development.

---

## Expo DevTools

Expo provides built-in development tools accessible through the Expo CLI.

### Accessing Dev Tools

```bash
# Start Expo with dev tools
npx expo start

# Common commands in terminal:
# Press 'j' - Open React Native DevTools (Expo 52+)
# Press 'shift + m' - More tools menu
# Press 'r' - Reload app
# Press 'm' - Toggle React Dev Menu
# Press '?' - Show all options
```

### Dev Menu Options

Access the Dev Menu:
- **Physical device:** Shake device
- **iOS Simulator:** Press `Cmd` + `D`
- **Android Emulator:** Press `Cmd` + `M` (Mac) or `Ctrl` + `M` (Windows/Linux)

**Available options:**
- Reload
- Open React Native DevTools
- Toggle Element Inspector
- Toggle Performance Monitor
- Show Developer Menu
- Debug Remote JS (deprecated)

### Performance Monitor

Enable from Dev Menu or Expo CLI:

```bash
# Press 'shift + m' in Expo CLI terminal
# Select "Toggle performance monitor"
```

**Displays:**
- RAM usage
- JavaScript heap size
- Views count
- UI/JS frame rates

### Element Inspector

Enable element inspection to visually select components:

```bash
# Press 'shift + m' in Expo CLI terminal
# Select "Inspect elements"
```

**Features:**
- Tap components to inspect
- View component props and styles
- Navigate component hierarchy
- Highlight component boundaries

---

## React Native Debugger (Standalone)

A standalone debugger based on official React Native debugger.

:::note
For Expo 52+ (WaveMaker 11.10.0+), use [React Native DevTools](./react-native-devtools) which provides integrated debugging. This standalone debugger is for earlier versions.
:::

### Installation

```bash
# macOS
brew install --cask react-native-debugger

# Or download from GitHub
# https://github.com/jhen0409/react-native-debugger/releases
```

### Features

- Redux DevTools integration
- React DevTools
- Network inspection
- Console logs
- Async storage inspection

---

## Related Documentation

**Primary Debugging Tools:**
- [React Native DevTools](./react-native-devtools) – Official debugging for Expo 52+
- [Chrome DevTools](./chrome-devtools) – Browser debugging for web preview
- [React DevTools](./react-devtools) – React component inspection
- [WavePulse](../wm-debugging-tools/wavepulse) – WaveMaker debugging tool

**Additional Debugging Tools:**
- [Flipper](./flipper) – Deprecated tool (historical reference)
- [Reactotron](./reactotron) – Community debugging tool with custom logging

**Testing Documentation:**
- [Debugging Overview](../debugging-overview) – All debugging tools and methods
- [UI Testing Mobile](../testing-strategies/ui-testing-mobile) – Mobile testing strategies

**Build Documentation:**
- [Expo Builds](../../../../build-and-deploy/build/mobile/expo) – Expo EAS Build setup
- [CLI Builds](../../../../build-and-deploy/build/mobile/cli) – Local builds with Expo CLI

**External Resources:**
- [Expo Debugging Guide](https://docs.expo.dev/debugging/runtime-issues/) – Expo debugging strategies
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger) – Standalone debugger for earlier versions

:::tip
For new WaveMaker projects using Expo 52+ (WaveMaker 11.10.0+), start with [React Native DevTools](./react-native-devtools) as your primary debugging tool.
:::
