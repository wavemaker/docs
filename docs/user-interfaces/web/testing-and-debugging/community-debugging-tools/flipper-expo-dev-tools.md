---
last_update: { author: 'Author Name' }
---

# Flipper, Expo, Dev tools

Comprehensive guide to popular community debugging tools for mobile and web applications.

## Overview

Community debugging tools provide powerful capabilities for inspecting, debugging, and optimizing applications. This guide covers the most popular tools used by developers worldwide.

## Flipper

Extensible mobile app debugger for iOS and Android.

### Installation

```bash
# Install Flipper Desktop
brew install --cask flipper

# Install React Native plugin
npm install --save-dev react-native-flipper
```

### iOS Setup

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
```

### Android Setup

```gradle
// android/app/build.gradle
dependencies {
    debugImplementation("com.facebook.flipper:flipper:${FLIPPER_VERSION}")
    debugImplementation("com.facebook.flipper:flipper-network-plugin:${FLIPPER_VERSION}")
    debugImplementation("com.facebook.flipper:flipper-fresco-plugin:${FLIPPER_VERSION}")
}
```

### Features

#### 1. Layout Inspector

Inspect and modify UI hierarchy in real-time.

```javascript
import { View, Text } from 'react-native';

// Components are automatically inspectable
const MyComponent = () => (
  <View style={styles.container}>
    <Text>Hello Flipper</Text>
  </View>
);
```

**Features:**

- View component hierarchy
- Inspect props and state
- Modify styles in real-time
- Measure layout performance

#### 2. Network Inspector

Monitor all network requests and responses.

```javascript
// Automatically tracks fetch and XMLHttpRequest
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

// View in Flipper:
// - Request/response headers
// - Request/response body
// - Timing information
// - Status codes
```

#### 3. Logs

View application logs in real-time.

```javascript
console.log('Info message');
console.warn('Warning message');
console.error('Error message');

// Advanced logging
console.group('User Action');
console.log('User clicked button');
console.log('API called');
console.groupEnd();
```

#### 4. React DevTools

Inspect React component tree.

```javascript
// Flipper includes React DevTools integration
// - Component hierarchy
// - Props inspection
// - State inspection
// - Hooks inspection
```

#### 5. Databases

Inspect SQLite and AsyncStorage.

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data
await AsyncStorage.setItem('user', JSON.stringify({ name: 'John' }));

// View in Flipper Databases tab:
// - All keys and values
// - Edit values
// - Delete keys
```

#### 6. Shared Preferences (Android)

View and edit Android SharedPreferences.

```java
SharedPreferences prefs = getSharedPreferences("MyPrefs", MODE_PRIVATE);
prefs.edit().putString("key", "value").apply();
```

### Custom Plugins

Create custom Flipper plugins for specific debugging needs.

```javascript
import { addPlugin } from 'react-native-flipper';

addPlugin({
  getId() {
    return 'my-custom-plugin';
  },
  onConnect(connection) {
    console.log('Plugin connected');

    // Send data to Flipper
    connection.send('customEvent', {
      message: 'Hello from app',
      timestamp: Date.now(),
    });

    // Receive data from Flipper
    connection.receive('customCommand', (data, responder) => {
      console.log('Received command:', data);
      responder.success({ result: 'Command executed' });
    });
  },
  onDisconnect() {
    console.log('Plugin disconnected');
  },
});
```

## Expo Dev Tools

Development tools for Expo and React Native apps.

### Starting Dev Tools

```bash
# Start Expo with dev tools
expo start

# Or with specific options
expo start --dev-client --clear
```

### Features

#### 1. Metro Bundler

JavaScript bundler interface.

**Features:**

- Bundle progress
- Error reporting
- Cache management
- Source maps

#### 2. Device Selection

```bash
# Run on iOS simulator
expo start --ios

# Run on Android emulator
expo start --android

# Run on physical device
# Scan QR code with Expo Go app
```

#### 3. Debug Menu

Access by shaking device or pressing:

- iOS Simulator: Cmd+D
- Android Emulator: Cmd+M / Ctrl+M

**Options:**

- Reload
- Debug Remote JS
- Enable Fast Refresh
- Show Performance Monitor
- Show Element Inspector

#### 4. React Native Debugger

```bash
# Install
brew install --cask react-native-debugger

# Or
npm install -g react-native-debugger
```

**Features:**

- Redux DevTools integration
- React DevTools
- Network inspection
- Console logs

### Expo DevTools Plugins

```javascript
// Install plugin
npm install expo-dev-menu

// Use in app
import { DevMenu } from 'expo-dev-menu';

// Add custom menu items
DevMenu.registerAction({
  title: 'Clear Cache',
  action: () => {
    // Clear app cache
    clearCache();
  },
});
```

## React DevTools

Browser extension and standalone app for React debugging.

### Installation

```bash
# Browser extension
# Install from Chrome/Firefox extension store

# Standalone app
npm install -g react-devtools

# Start standalone
react-devtools
```

### Features

#### 1. Component Tree

```javascript
// Inspect component hierarchy
const App = () => (
  <Provider>
    <Router>
      <Dashboard>
        <UserProfile />
        <ActivityFeed />
      </Dashboard>
    </Router>
  </Provider>
);

// View in React DevTools:
// - Component tree structure
// - Props and state
// - Hooks values
// - Component source
```

#### 2. Props Inspection

```javascript
const UserCard = ({ user, onEdit }) => {
  // Props visible in DevTools
  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={() => onEdit(user)}>Edit</button>
    </div>
  );
};
```

#### 3. State and Hooks

```javascript
const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // All state and hooks visible in DevTools
  // Can be edited in real-time

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
    </div>
  );
};
```

#### 4. Profiler

Measure component render performance.

```javascript
import { Profiler } from 'react';

const onRenderCallback = (
  id, // Component ID
  phase, // "mount" or "update"
  actualDuration, // Time spent rendering
  baseDuration, // Estimated time without memoization
  startTime, // When render started
  commitTime, // When committed
  interactions, // Set of interactions
) => {
  console.log(`${id} ${phase} took ${actualDuration}ms`);
};

<Profiler id="UserList" onRender={onRenderCallback}>
  <UserList />
</Profiler>;
```

## Redux DevTools

Browser extension for debugging Redux state.

### Installation

```bash
npm install --save-dev redux-devtools-extension
```

### Setup

```javascript
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducer,
  composeWithDevTools(),
  // other store enhancers
);
```

### Features

#### 1. Action History

View all dispatched actions in chronological order.

```javascript
dispatch({ type: 'USER_LOGGED_IN', payload: { id: 1, name: 'John' } });
dispatch({ type: 'FETCH_PRODUCTS_REQUEST' });
dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });

// View in DevTools:
// - Action type
// - Payload
// - Timestamp
// - State diff
```

#### 2. State Inspection

```javascript
const initialState = {
  user: null,
  products: [],
  cart: [],
};

// View and edit state in real-time
// See state before and after each action
```

#### 3. Time Travel

Jump to any previous state.

```javascript
// Redux DevTools allows you to:
// - Jump to any action
// - Skip actions
// - Revert to previous state
// - Export/import state
```

#### 4. Custom Actions

```javascript
// Dispatch custom actions from DevTools
dispatch({ type: 'CUSTOM_DEBUG_ACTION', payload: { test: true } });
```

## Chrome DevTools

Built-in browser developer tools.

### Console

```javascript
// Standard logging
console.log('Message');
console.warn('Warning');
console.error('Error');
console.table(data);

// Grouping
console.group('API Call');
console.log('Request:', request);
console.log('Response:', response);
console.groupEnd();

// Timing
console.time('operation');
// ... code
console.timeEnd('operation');

// Assertions
console.assert(value > 0, 'Value must be positive');
```

### Network Tab

**Features:**

- All HTTP requests
- WebSocket connections
- Request/response headers
- Timing information
- Filtering and search
- HAR export

### Performance Tab

```javascript
// Mark performance points
performance.mark('start-fetch');

fetch('/api/data')
  .then(response => response.json())
  .then(data => {
    performance.mark('end-fetch');
    performance.measure('fetch-duration', 'start-fetch', 'end-fetch');
  });
```

### Application Tab

- LocalStorage
- SessionStorage
- IndexedDB
- Cookies
- Cache Storage
- Service Workers

### Sources Tab

**Features:**

- Breakpoints
- Watch expressions
- Call stack
- Scope variables
- Live editing

## Safari Web Inspector

Developer tools for Safari and iOS Safari.

### Enabling Web Inspector

```
Safari > Preferences > Advanced > Show Develop menu in menu bar
```

### iOS Debugging

1. Enable Web Inspector on iOS:
   - Settings > Safari > Advanced > Web Inspector

2. Connect device and open Safari
   - Develop > [Device Name] > [Page]

### Features

- Element inspection
- Console
- Network monitoring
- Timeline
- Storage inspection

## Firefox Developer Tools

### Features

#### 1. Inspector

- Flexbox inspector
- Grid inspector
- Font editor
- Animation inspector

#### 2. Console

```javascript
// Firefox-specific console methods
console.dir(object);
console.dirxml(element);
console.trace();
```

#### 3. Debugger

- Logpoints
- Column breakpoints
- Inline variable preview
- Blackboxing

## Reactotron

Desktop app for inspecting React and React Native apps.

### Installation

```bash
# Desktop app
brew install --cask reactotron

# React Native
npm install --save-dev reactotron-react-native
```

### Configuration

```javascript
// ReactotronConfig.js
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.configure({
  name: 'MyApp',
})
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/,
    },
  })
  .use(reactotronRedux())
  .connect();
```

### Features

```javascript
// Logging
Reactotron.log('Hello');
Reactotron.warn('Warning');
Reactotron.error('Error');

// Display
Reactotron.display({
  name: 'User Data',
  value: userData,
  important: true,
});

// Benchmarking
Reactotron.benchmark('Expensive Operation');
// ... operation
Reactotron.benchmark('Expensive Operation');

// Custom commands
Reactotron.onCustomCommand({
  command: 'clearCache',
  handler: () => {
    clearCache();
    Reactotron.log('Cache cleared');
  },
});
```

## VS Code Debugger

Debug JavaScript and TypeScript in VS Code.

### Configuration

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug React App",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["start"],
      "port": 3000,
      "url": "http://localhost:3000",
      "webRoot": "${workspaceFolder}/src"
    },
    {
      "name": "Debug React Native",
      "cwd": "${workspaceFolder}",
      "type": "reactnative",
      "request": "launch",
      "platform": "ios"
    }
  ]
}
```

### Breakpoints

```javascript
// Set breakpoints by clicking line numbers
// Or use debugger statement
const calculateTotal = items => {
  debugger; // Execution will pause here
  return items.reduce((sum, item) => sum + item.price, 0);
};
```

## Best Practices

### 1. Use Appropriate Tools for Task

```javascript
// ✅ Good - Use right tool
// Network issues -> Network tab
// Performance issues -> Performance profiler
// State issues -> Redux/React DevTools

// ❌ Bad - Using console.log for everything
```

### 2. Remove Debug Code in Production

```javascript
// ✅ Good
if (__DEV__) {
  console.log('Debug info');
  Reactotron.log('Debug info');
}

// ❌ Bad
console.log('Debug info'); // Left in production
```

### 3. Use Source Maps

```javascript
// webpack.config.js
module.exports = {
  devtool: 'source-map', // Enable source maps
};
```

### 4. Leverage Browser Extensions

Install these helpful extensions:

- React DevTools
- Redux DevTools
- JSON Formatter
- Color Picker
- Lighthouse
