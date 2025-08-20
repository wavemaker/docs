---
title: "React Native DevTools"
id: "debugging-performance-react-native-devtools"
sidebar_label: "React Native DevTools"
---

import ReactDevtoolsHighlightUpdates from '/learn/assets/react_devtools_highlight_updates.png';
import RNDTHighlightRenders from '/learn/assets/debugging-rndt-highlight-renders.gif';
import InspectComponentTree from '/learn/assets/inspect_component_tree.png';
import RecordProfilingSession from '/learn/assets/record_profiling_session.png';
import FlamegraphView from '/learn/assets/flamegraph_view_profiler.png';
import RankedView from '/learn/assets/ranked_view_profiler.png';
import ComponentChart from '/learn/assets/component_chart_profiler.png';
import RecordWhyComponentRendered from '/learn/assets/record_why_each_component_rendered.png';
import WhatCausedThisUpdate from '/learn/assets/what_caused_this_update_profiler.png';

React Native DevTools is the new debugging tool for Expo and React Native apps (since version 0.76), replacing [Chrome DevTools](https://reactnative.dev/docs/debugging). This guide explains how to use it to check re-renders and analyze performance, especially for WaveMaker apps.

Generally, too many [re-renders](https://react.dev/learn/render-and-commit) can slow down React Native apps. React Native DevTools can highlight component re-renders as they happen, helping you identify unnecessary updates and optimize your application's performance on mobile devices.

React Native DevTools provides access to console, sources, memory, components, and profiler tabs, with built-in support for React DevTools functionality.

### Prerequisites

Before you begin, ensure you have the proper setup:

1. **React Native 0.76 or later** (React Native DevTools replaces Chrome DevTools)
2. **Development mode** - Ensure your React Native app is running in development mode

## Opening React Native DevTools

To open React Native DevTools:

1. **Start your app** with [Expo CLI](https://docs.expo.dev/more/expo-cli/) or [React Native CLI](https://reactnative.dev/docs/environment-setup)
2. **Press `j` in the terminal** where Expo or React Native starts
3. **React Native DevTools will open** in a separate window automatically

For detailed setup instructions, refer to the [official Expo debugging documentation](https://docs.expo.dev/debugging/tools/#debugging-with-react-native-devtools).

## Debugging React Components

### Components Tab

The Components tab shows the structure of your React Native app. It lets you see all components in a tree-like view, check their props and state, and watch how they update in real time when the app re-renders.

#### Accessing Component Tab

There are two main approaches depending on your React Native version and setup:

### Option 1: React Native DevTools (React Native 0.76+)

For React Native 0.76 and later versions, React Native DevTools includes built-in React DevTools functionality:

1. **Open React Native DevTools** by pressing `j` in your terminal where you started your development server
2. **Navigate to the Components tab** (one of the available tabs alongside console, sources, network, memory, and profiler)
3. **The component tree** will display your React Native app's component hierarchy with built-in React DevTools features

### Option 2: Standalone React DevTools (All React Native versions)

For older React Native versions or when you prefer using standalone React DevTools:

1. **Install react-devtools globally**:
   ```bash
   npm install -g react-devtools
   ```

2. **Start react-devtools** in a separate terminal:
   ```bash
   npx react-devtools
   ```

3. **Connect your app** to react-devtools:
   - For Expo: React DevTools should connect automatically when you start your app
   - For React Native CLI: Ensure your app is running in development mode and react-devtools will connect automatically

4. **The React DevTools window** will open with the Components and Profiler tabs available

### Enabling Highlight Updates

To visualize component re-renders:

1. **In the Components tab**, click the *settings gear* icon in the top right corner
2. **Enable "Highlight Updates"** from the settings menu
3. **Interact with your app** to see components flash with colored borders as they re-render

<img src={ReactDevtoolsHighlightUpdates} style={{width:"60%"}} />

### Understanding Update Highlights

Once enabled, interact with your React Native app to see components flash with colored borders as they re-render:

- **Blue**: Infrequent updates - Generally acceptable
- **Green**: Moderate updates - Monitor for optimization opportunities
- **Yellow**: Frequent updates - Potential performance concern
- **Red**: Very frequent updates - Requires immediate attention

<img src={RNDTHighlightRenders} style={{width:"60%"}} />

### Inspecting React Native Components

- Click on **Components** in the component tree to examine their props and state
- Look for unexpected re-renders in native components (View, Text, ScrollView, etc.)
- Identify React Native-specific performance bottlenecks like unnecessary bridge communications
- Use the search functionality to quickly find specific components in large component trees

<img src={InspectComponentTree} style={{width:"60%"}} />

## Profiler Tab: Deep Performance Analysis

The Profiler tab provides detailed performance metrics specifically tailored for React Native applications using the built-in React DevTools profiler functionality.

### Recording a Profiling Session

Follow these steps to record and analyze a profiling session in React Native:

1. Navigate to the **Profiler** tab in React Native DevTools
2. Click the **Record** button (circular record icon) to start profiling
3. Interact with your React Native app to trigger the behavior you want to analyze
4. Click **Stop** to end the recording session and view the profiling results

<img src={RecordProfilingSession} style={{width:"60%"}} />

### Understanding React Native Profiler Data

The Profiler provides several views and metrics optimized for React Native:

#### Flamegraph View

- Visual representation of React Native component render times
- Wider bars indicate longer render times
- Color coding shows performance relative to other React Native components
- Identifies bridge communication bottlenecks

<img src={FlamegraphView} style={{width:"60%"}} />

#### Ranked View

- Lists React Native components ordered by render time
- Identifies the slowest native and JavaScript components for optimization
- Shows actual vs. base render times for React Native elements

<img src={RankedView} style={{width:"60%"}} />

#### Component Chart

- Timeline view of individual React Native component renders
- Shows when components rendered during the session
- Helps identify render frequency patterns specific to mobile interactions

<img src={ComponentChart} style={{width:"30%"}} />

:::note
In the above example, you can see that the `View` rendered 4 times during the profiling session and was expensive, indicating a potential performance optimization opportunity.
:::

### Key Metrics for React Native

- **Render Duration**: Time taken to render each React Native component
- **Commit Duration**: Time taken to apply changes to the native UI
- **Self Time**: Time spent in the component itself (excluding children)
- **Total Time**: Time including all child components

## Debugging Common React Native Performance Issues

### Identifying Unnecessary Re-renders in React Native

Look for these patterns specific to React Native applications:

1. Native components rendering without prop changes
2. Frequent renders of expensive native components (like FlatList, Image)
3. Deep React Native component trees re-rendering together
4. Components with consistent high render times affecting UI thread performance

### Recording Why React Native Components Rendered

To understand why React Native components are re-rendering:

1. Enable **Record why each component rendered while profiling** in React Native DevTools settings<br/><br/>
<img src={RecordWhyComponentRendered} style={{width:"60%"}} />
2. Record a new profiling session
3. Select a React Native component in the profiler
4. View the **What caused this update?** information panel<br/><br/>
<img src={WhatCausedThisUpdate} style={{width:"30%"}} />

This feature shows:
- Props changes that triggered the re-render in React Native components
- State changes within React Native components
- Parent component re-renders that caused cascading updates in the native UI

## Debugging Tips: Using React Native DevTools with Different Setups

### Expo Development Build

For Expo apps using development builds:

1. Start your Expo development build:
   ```bash
   npx expo run:android
   # or
   npx expo run:ios
   ```

2. Press `j` in the terminal to open React Native DevTools

### Expo Go

When using Expo Go:

1. Start your project:
   ```bash
   npx expo start
   ```

2. Press `j` in the terminal to open React Native DevTools

### Standard React Native CLI Projects

For React Native CLI projects (React Native 0.76+):

1. Start your development server:
   ```bash
   npx react-native start
   ```

2. Run your app:
   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```

3. Press `j` in the terminal to open React Native DevTools

## Production Profiling

For production performance analysis:

### Expo Projects

Create a production build:
   ```bash
   npx expo run:android --variant release
   ```

## References

- [Expo Debugging with React Native DevTools](https://docs.expo.dev/debugging/tools/#debugging-with-react-native-devtools)
- [React Native DevTools Documentation](https://reactnative.dev/docs/react-native-devtools)
- [Highlighting Re-renders](https://reactnative.dev/docs/react-native-devtools#protip-highlight-re-renders)
- [React Profiler Documentation](https://reactnative.dev/docs/react-native-devtools#react-profiler)
- [Introducing the React Profiler](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)
- [React Native Performance Guide](https://reactnative.dev/docs/performance)
- [Expo - Debugging with React Native Devtools](https://docs.expo.dev/debugging/tools/#debugging-with-react-native-devtools)
