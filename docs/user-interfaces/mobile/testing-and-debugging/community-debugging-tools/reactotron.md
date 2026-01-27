---
title: "Reactotron"
id: "reactotron"
sidebar_label: "Reactotron"
last_update: { author: 'Vivek Raj' }
---

# Reactotron

Reactotron is a desktop app for inspecting React and React Native applications. It's actively maintained by Infinite Red and works well with WaveMaker mobile applications.

---

## Overview

Reactotron provides a desktop interface for debugging React Native applications with custom commands, benchmarking, and advanced logging capabilities.

**Platform Support:**
- ✅ Web Preview
- ✅ Expo (Go / Dev Build)
- ❌ Release Build (APK/IPA)

:::note
Reactotron is a complementary tool to [React Native DevTools](./react-native-devtools). Use React Native DevTools for breakpoint debugging and Reactotron for custom logging and benchmarking.
:::

---

## Installation

### Desktop Application

Download and install Reactotron desktop app:

```bash
# macOS
brew install --cask reactotron

# Or download from GitHub releases
# https://github.com/infinitered/reactotron/releases
```

**Supported platforms:**
- macOS
- Windows
- Linux

### React Native Plugin

Install the React Native plugin in your exported WaveMaker project:

```bash
# Navigate to exported project directory
cd /path/to/exported/project

# Install Reactotron React Native plugin
npm install --save-dev reactotron-react-native
```

---

## Configuration

### Basic Setup

1. Create `ReactotronConfig.js` in your project root:

```javascript
// ReactotronConfig.js
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  Reactotron
    .configure({
      name: 'WaveMaker Mobile App',
    })
    .useReactNative({
      networking: {
        // Ignore Expo and symbolication requests
        ignoreUrls: /symbolicate|127.0.0.1|localhost/,
      },
    })
    .connect();

  // Clear Reactotron on app load (optional)
  Reactotron.clear();
}

export default Reactotron;
```

2. Import in your app entry point:

For WaveMaker exported projects, add to the main app file (usually `App.js` or `index.js`):

```javascript
// App.js
if (__DEV__) {
  require('./ReactotronConfig');
}

// Rest of your app code
```

3. Start Reactotron desktop app before launching your application

4. Run your application:

```bash
npx expo start
```

Reactotron will automatically connect when the app launches.

---

## Features

### 1. Application State Logging

Log structured data and messages to Reactotron.

```javascript
import Reactotron from 'reactotron-react-native';

// Simple logging
Reactotron.log('User logged in successfully');
Reactotron.warn('API response time exceeded threshold');
Reactotron.error('Failed to fetch data', error);

// Structured data display
Reactotron.display({
  name: 'User Profile Data',
  value: {
    id: 123,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
  },
  important: true, // Highlights in Reactotron UI
});

// Log with preview
Reactotron.log({
  message: 'API Response',
  response: data,
});
```

### 2. Network Monitoring

Automatically tracks network requests made with `fetch` and `XMLHttpRequest`.

```javascript
// Automatically tracked
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

// View in Reactotron:
// - Request method and URL
// - Request/response headers
// - Request/response body
// - Status code
// - Duration
```

**Configure network monitoring:**

```javascript
Reactotron
  .configure()
  .useReactNative({
    networking: {
      // Ignore specific URLs
      ignoreUrls: /symbolicate|logs/,
      // Ignore requests by content type
      ignoreContentTypes: /^(image)\//,
    },
  })
  .connect();
```

### 3. Performance Benchmarking

Measure performance of specific operations.

```javascript
import Reactotron from 'reactotron-react-native';

// Start benchmark
Reactotron.benchmark('Data Processing');

// ... perform operation
processLargeDataset(data);

// End benchmark (automatically calculates duration)
Reactotron.benchmark('Data Processing');
// Output in Reactotron: "Data Processing: 245ms"

// Nested benchmarks
Reactotron.benchmark('Complete Flow');
Reactotron.benchmark('Data Fetch');
await fetchData();
Reactotron.benchmark('Data Fetch'); // 120ms

Reactotron.benchmark('Data Transform');
transformData();
Reactotron.benchmark('Data Transform'); // 45ms
Reactotron.benchmark('Complete Flow'); // 165ms
```

### 4. Image Overlay

Overlay images on screen for design verification and mockup comparison.

```javascript
import Reactotron from 'reactotron-react-native';

// Overlay design mockup
Reactotron.overlay({
  name: 'Login Screen Design',
  url: 'https://example.com/designs/login-mockup.png',
  opacity: 0.5,
});

// Remove overlay
Reactotron.overlay(null);
```

**Use cases:**
- Compare implementation with designs
- Verify pixel-perfect layouts
- Check responsive design breakpoints

### 5. Custom Commands

Create custom commands that can be triggered from Reactotron UI.

```javascript
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Clear app data command
Reactotron.onCustomCommand({
  command: 'resetAppData',
  handler: () => {
    AsyncStorage.clear();
    Reactotron.log('App data cleared successfully');
  },
  title: 'Reset App Data',
  description: 'Clear all stored data including cache and preferences',
});

// Toggle feature flag
Reactotron.onCustomCommand({
  command: 'toggleFeature',
  handler: (featureName) => {
    const enabled = toggleFeatureFlag(featureName);
    Reactotron.log(`Feature ${featureName}: ${enabled ? 'enabled' : 'disabled'}`);
  },
  title: 'Toggle Feature Flag',
  description: 'Enable/disable feature flags for testing',
  args: [{
    name: 'featureName',
    type: 'string',
  }],
});

// Navigate to specific page
Reactotron.onCustomCommand({
  command: 'navigateTo',
  handler: (pageName) => {
    navigation.navigate(pageName);
    Reactotron.log(`Navigated to ${pageName}`);
  },
  title: 'Navigate to Page',
  description: 'Quick navigation to any page',
  args: [{
    name: 'pageName',
    type: 'string',
  }],
});
```

---

## Using Reactotron with WaveMaker

### Debug Service Variables

Track WaveMaker service variable calls and responses.

```javascript
import Reactotron from 'reactotron-react-native';

// Before service variable call
const callServiceVariable = async (variableName, params) => {
  Reactotron.display({
    name: 'Service Variable Call',
    value: {
      variable: variableName,
      params: params,
      timestamp: new Date().toISOString(),
    },
    important: true,
  });

  try {
    const response = await ServiceAPI.call(variableName, params);

    Reactotron.display({
      name: 'Service Variable Response',
      value: {
        variable: variableName,
        status: 'success',
        data: response,
      },
    });

    return response;
  } catch (error) {
    Reactotron.error('Service Variable Error', {
      variable: variableName,
      error: error.message,
    });
    throw error;
  }
};
```

### Monitor Component Lifecycle

Track component mounting, unmounting, and updates.

```javascript
import React, { useEffect } from 'react';
import Reactotron from 'reactotron-react-native';

const UserProfilePage = ({ userId }) => {
  useEffect(() => {
    Reactotron.log('UserProfilePage mounted', { userId });

    return () => {
      Reactotron.log('UserProfilePage unmounted');
    };
  }, []);

  useEffect(() => {
    Reactotron.log('UserProfilePage userId changed', {
      userId,
      timestamp: Date.now(),
    });
  }, [userId]);

  return <View>...</View>;
};
```

### Track Navigation Flow

Monitor page navigation and route changes.

```javascript
import Reactotron from 'reactotron-react-native';

// Wrap navigation function
const navigateToPage = (pageName, params = {}) => {
  Reactotron.display({
    name: 'Navigation',
    value: {
      from: currentPage,
      to: pageName,
      params: params,
      timestamp: new Date().toISOString(),
    },
  });

  // Your navigation logic
  navigation.navigate(pageName, params);
};

// Track navigation state changes
navigation.addListener('state', (state) => {
  Reactotron.log('Navigation State Changed', {
    routes: state.routes,
    index: state.index,
  });
});
```

### Debug Widget State

Monitor WaveMaker widget state changes.

```javascript
import Reactotron from 'reactotron-react-native';

const FormWidget = ({ name, value, onChange }) => {
  const handleChange = (newValue) => {
    Reactotron.display({
      name: 'Widget State Change',
      value: {
        widget: name,
        oldValue: value,
        newValue: newValue,
      },
    });

    onChange(newValue);
  };

  return <Input value={value} onChange={handleChange} />;
};
```

### Performance Monitoring

Benchmark page load times and data processing.

```javascript
import Reactotron from 'reactotron-react-native';

const loadPageData = async (pageId) => {
  Reactotron.benchmark(`Page ${pageId} Load`);

  // Fetch page configuration
  Reactotron.benchmark('Fetch Config');
  const config = await fetchPageConfig(pageId);
  Reactotron.benchmark('Fetch Config'); // ~100ms

  // Load page data
  Reactotron.benchmark('Load Data');
  const data = await fetchPageData(pageId);
  Reactotron.benchmark('Load Data'); // ~350ms

  // Process and render
  Reactotron.benchmark('Process Data');
  const processed = processData(data, config);
  Reactotron.benchmark('Process Data'); // ~50ms

  Reactotron.benchmark(`Page ${pageId} Load`); // Total: ~500ms

  return processed;
};
```

---

## Reactotron Plugins

Extend Reactotron with additional plugins.

### AsyncStorage Plugin

Inspect and modify AsyncStorage directly from Reactotron.

```bash
npm install --save-dev reactotron-react-native-async-storage
```

```javascript
import Reactotron from 'reactotron-react-native';
import ReactotronAsyncStorage from 'reactotron-react-native-async-storage';

Reactotron
  .configure()
  .useReactNative()
  .use(ReactotronAsyncStorage())
  .connect();
```

**Features:**
- View all AsyncStorage keys and values
- Edit values directly
- Delete keys
- Clear storage

---

## Debugging Utilities

Create reusable debugging utilities for WaveMaker applications.

```javascript
// utils/debug.js
import Reactotron from 'reactotron-react-native';

export const debugLog = {
  // Service variable calls
  service: (name, data, type = 'call') => {
    if (__DEV__) {
      Reactotron.display({
        name: `Service: ${name} (${type})`,
        value: data,
        important: type === 'error',
      });
    }
  },

  // Navigation events
  navigation: (from, to, params) => {
    if (__DEV__) {
      Reactotron.log('Navigation:', {
        from,
        to,
        params,
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Widget events
  widget: (widgetName, event, data) => {
    if (__DEV__) {
      Reactotron.log(`Widget [${widgetName}] ${event}:`, data);
    }
  },

  // Errors
  error: (component, error, context = {}) => {
    if (__DEV__) {
      Reactotron.error(`Error in ${component}:`, {
        message: error.message,
        stack: error.stack,
        context,
      });
    }
    // Always log to console for production
    console.error(`${component}:`, error);
  },

  // Performance
  perf: {
    start: (label) => {
      if (__DEV__) {
        Reactotron.benchmark(label);
      }
    },
    end: (label) => {
      if (__DEV__) {
        Reactotron.benchmark(label);
      }
    },
  },
};

// Usage
debugLog.service('getUserData', { userId: 123 });
debugLog.navigation('Dashboard', 'UserProfile', { userId: 123 });
debugLog.widget('LoginForm', 'submit', { username: 'john' });
debugLog.error('UserProfile', new Error('Failed to load'));
debugLog.perf.start('Data Load');
// ... operation
debugLog.perf.end('Data Load');
```

---

## Best Practices

### 1. Remove Reactotron in Production

```javascript
// ✅ Good - Only in development
if (__DEV__) {
  require('./ReactotronConfig');
  Reactotron.log('App started');
}

// ❌ Bad - Left in production
Reactotron.log('App started');
```

### 2. Use Display for Structured Data

```javascript
// ✅ Good - Easy to inspect in Reactotron
Reactotron.display({
  name: 'User Data',
  value: userData,
  important: true,
});

// ❌ Bad - Hard to read
Reactotron.log(JSON.stringify(userData));
```

### 3. Create Custom Commands for Common Tasks

```javascript
// ✅ Good - Quick access to common debugging tasks
Reactotron.onCustomCommand({
  command: 'resetUser',
  handler: () => {
    resetUserSession();
    Reactotron.log('User session reset');
  },
  title: 'Reset User Session',
});
```

### 4. Use Benchmarking Strategically

```javascript
// ✅ Good - Measure critical operations
Reactotron.benchmark('API Call');
await fetchData();
Reactotron.benchmark('API Call');

// ❌ Bad - Benchmarking everything
Reactotron.benchmark('setState'); // Too granular
setState(value);
Reactotron.benchmark('setState');
```

### 5. Clean Up on App Start

```javascript
// ReactotronConfig.js
if (__DEV__) {
  Reactotron
    .configure()
    .useReactNative()
    .connect();

  // Clear previous session
  Reactotron.clear();
}
```

---

## Troubleshooting

### Reactotron Not Connecting

**Solutions:**
1. Ensure Reactotron desktop app is running
2. Check that device and computer are on the same network
3. Verify import in app entry point
4. Check for connection errors in console
5. Try restarting both Reactotron and app

### Slow Performance

**Solutions:**
1. Reduce logging frequency
2. Avoid logging large objects
3. Disable network monitoring if not needed
4. Clear Reactotron timeline periodically

### Network Requests Not Showing

**Solutions:**
1. Check `ignoreUrls` configuration
2. Ensure using `fetch` or `XMLHttpRequest`
3. Verify networking plugin is enabled
4. Check if requests are actually being made

---

## Comparison with Other Tools

### Reactotron vs React Native DevTools

| Feature | Reactotron | React Native DevTools |
|---------|-----------|----------------------|
| Works with Expo 51 and earlier | ✅ | ❌ |
| Works with Expo 52+ | ✅ | ✅ |
| Custom commands | ✅ | ❌ |
| Image overlay | ✅ | ❌ |
| Benchmarking | ✅ | ❌ |
| JavaScript debugging | ❌ | ✅ |
| Breakpoints | ❌ | ✅ |
| Sources panel | ❌ | ✅ |
| Network inspection | ✅ | ✅ |
| Setup required | ✅ | ❌ |
| WaveMaker compatible | ✅ | ✅ |

### When to Use Reactotron

**Use Reactotron when:**
- Need custom debugging commands
- Want benchmarking capabilities
- Using Expo 51 or earlier
- Need persistent debug logging
- Want image overlay for design verification
- Need AsyncStorage inspection

**Use React Native DevTools when:**
- Need JavaScript debugging with breakpoints
- Want to step through code
- Need official, integrated solution
- Debugging complex code flow

**Use Both:**
- Reactotron for logging and custom commands
- React Native DevTools for breakpoint debugging
- Best of both worlds!

---

## Related Documentation

**Other Debugging Tools:**
- [React Native DevTools](./react-native-devtools) – Official debugging for Expo 52+
- [Chrome DevTools](./chrome-devtools) – Browser debugging for web preview
- [React DevTools](./react-devtools) – React component inspection
- [WavePulse](../wm-debugging-tools/wavepulse) – WaveMaker debugging tool
- [Flipper](./flipper) – Deprecated debugging tool

**Testing Documentation:**
- [Debugging Overview](../debugging-overview) – All debugging tools and methods
- [UI Testing Mobile](../testing-strategies/ui-testing-mobile) – Mobile testing strategies

**Build Documentation:**
- [Expo Builds](../../../../build-and-deploy/build/mobile/expo) – Expo EAS Build setup
- [CLI Builds](../../../../build-and-deploy/build/mobile/cli) – Local builds with Expo CLI

**External Resources:**
- [Reactotron GitHub](https://github.com/infinitered/reactotron) – Official repository
- [Reactotron Documentation](https://github.com/infinitered/reactotron/tree/master/docs) – Detailed docs
- [Reactotron Releases](https://github.com/infinitered/reactotron/releases) – Download desktop app

:::tip
Reactotron is an excellent complementary tool to React Native DevTools. Use React Native DevTools for breakpoint debugging and Reactotron for custom logging, benchmarking, and quick debugging commands. Both can run simultaneously!
:::
