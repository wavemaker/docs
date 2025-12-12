# JavaScript Debugging

Comprehensive guide to debugging JavaScript applications using browser DevTools, Node.js debugger, and debugging techniques.

## Browser DevTools

### Console API

```javascript
// Basic logging
console.log('Simple message');
console.log('Multiple', 'arguments', 123);

// String substitution
console.log('User %s has %d points', 'John', 100);

// Styled console output
console.log('%cImportant Message', 'color: red; font-size: 20px; font-weight: bold');

// Different log levels
console.info('Information message');
console.warn('Warning message');
console.error('Error message');
console.debug('Debug message');

// Grouping logs
console.group('User Details');
console.log('Name: John Doe');
console.log('Email: john@example.com');
console.log('Age: 30');
console.groupEnd();

// Collapsible groups
console.groupCollapsed('API Response');
console.log(responseData);
console.groupEnd();

// Table format
const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];
console.table(users);

// Timing operations
console.time('fetchData');
await fetchData();
console.timeEnd('fetchData');

// Counting
for (let i = 0; i < 5; i++) {
  console.count('loop iteration');
}
console.countReset('loop iteration');

// Stack trace
console.trace('Current execution path');

// Assertions
console.assert(user.age >= 18, 'User must be 18 or older');

// Clear console
console.clear();
```

### Breakpoints

```javascript
// Debugger statement
function calculateTotal(items) {
  let total = 0;
  
  debugger; // Execution will pause here when DevTools is open
  
  for (const item of items) {
    total += item.price * item.quantity;
  }
  
  return total;
}

// Conditional debugger
function processOrder(order) {
  if (order.amount > 1000) {
    debugger; // Only break for large orders
  }
  
  // Process order
}
```

### Breakpoint Types in DevTools

1. **Line-of-code breakpoints** - Pause on specific line
2. **Conditional breakpoints** - Pause when condition is true
3. **DOM breakpoints** - Pause when DOM changes
4. **XHR/Fetch breakpoints** - Pause on network requests
5. **Event listener breakpoints** - Pause on events
6. **Exception breakpoints** - Pause on exceptions

### Watch Expressions

```javascript
// In DevTools, add watch expressions to monitor variables
// Examples:
// - user.name
// - cart.items.length
// - calculateTotal(cart.items)
// - this.state
```

## Node.js Debugging

### Built-in Debugger

```bash
# Start Node.js with inspect flag
node --inspect server.js

# Start with break at first line
node --inspect-brk server.js

# Specify port
node --inspect=9229 server.js
```

### Using Chrome DevTools

```bash
# Start Node.js with inspect
node --inspect server.js

# Open Chrome and navigate to:
# chrome://inspect

# Click "Open dedicated DevTools for Node"
```

### VS Code Debugging

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/server.js",
      "outFiles": ["${workspaceFolder}/**/*.js"]
    },
    {
      "type": "node",
      "request": "attach",
      "name": "Attach to Process",
      "port": 9229,
      "restart": true
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Tests",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Express Server",
      "program": "${workspaceFolder}/server.js",
      "env": {
        "NODE_ENV": "development",
        "PORT": "3000"
      },
      "console": "integratedTerminal"
    }
  ]
}
```

### Nodemon with Debugging

```json
// package.json
{
  "scripts": {
    "debug": "nodemon --inspect server.js",
    "debug-brk": "nodemon --inspect-brk server.js"
  }
}
```

## Advanced Debugging Techniques

### Error Handling and Debugging

```javascript
// Custom error class with debugging info
class AppError extends Error {
  constructor(message, statusCode, context = {}) {
    super(message);
    this.statusCode = statusCode;
    this.context = context;
    this.timestamp = new Date().toISOString();
    Error.captureStackTrace(this, this.constructor);
  }
  
  toJSON() {
    return {
      message: this.message,
      statusCode: this.statusCode,
      context: this.context,
      timestamp: this.timestamp,
      stack: this.stack
    };
  }
}

// Usage
try {
  const user = await getUserById(userId);
  if (!user) {
    throw new AppError('User not found', 404, { userId });
  }
} catch (error) {
  console.error('Error details:', error.toJSON());
  throw error;
}
```

### Async/Await Debugging

```javascript
// Debug async functions
async function fetchUserData(userId) {
  console.log('Fetching user:', userId);
  
  try {
    const user = await db.users.findById(userId);
    console.log('User found:', user);
    
    const orders = await db.orders.findByUserId(userId);
    console.log('Orders found:', orders.length);
    
    return { user, orders };
  } catch (error) {
    console.error('Error in fetchUserData:', error);
    throw error;
  }
}

// Promise chain debugging
function processOrder(orderId) {
  return getOrder(orderId)
    .then(order => {
      console.log('Order retrieved:', order);
      return validateOrder(order);
    })
    .then(validation => {
      console.log('Validation result:', validation);
      return processPayment(validation);
    })
    .then(payment => {
      console.log('Payment processed:', payment);
      return payment;
    })
    .catch(error => {
      console.error('Error in promise chain:', error);
      throw error;
    });
}
```

### Memory Leak Debugging

```javascript
// Check for memory leaks
if (global.gc) {
  console.log('Memory before:', process.memoryUsage());
  
  // Run suspicious code
  for (let i = 0; i < 1000; i++) {
    createUser();
  }
  
  global.gc();
  console.log('Memory after:', process.memoryUsage());
}

// Heap snapshot in Chrome DevTools
// 1. Take initial snapshot
// 2. Perform action that might leak
// 3. Take another snapshot
// 4. Compare snapshots to find leaks

// Monitor event listeners
function addListener(element, event, handler) {
  element.addEventListener(event, handler);
  console.log('Listener added:', event, 'Total:', getEventListeners(element).length);
}
```

### Performance Debugging

```javascript
// Performance marks and measures
performance.mark('fetchStart');

await fetchData();

performance.mark('fetchEnd');
performance.measure('fetchDuration', 'fetchStart', 'fetchEnd');

const measure = performance.getEntriesByName('fetchDuration')[0];
console.log('Fetch took:', measure.duration, 'ms');

// Performance observer
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Performance entry:', {
      name: entry.name,
      duration: entry.duration,
      startTime: entry.startTime
    });
  }
});

observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });

// Console timing
console.time('operation');
performExpensiveOperation();
console.timeEnd('operation');
```

## Debugging React Applications

### React DevTools

```javascript
// Component debugging
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    console.log('UserProfile mounted:', userId);
    
    fetchUser(userId).then(data => {
      console.log('User data loaded:', data);
      setUser(data);
    });
    
    return () => {
      console.log('UserProfile unmounted:', userId);
    };
  }, [userId]);
  
  // Debug render
  console.log('UserProfile render:', { userId, user });
  
  return (
    <div>
      {user ? user.name : 'Loading...'}
    </div>
  );
}

// useDebugValue hook
function useUserStatus(userId) {
  const [status, setStatus] = useState('offline');
  
  useDebugValue(status === 'online' ? 'Online' : 'Offline');
  
  useEffect(() => {
    const subscription = subscribeToStatus(userId, setStatus);
    return () => subscription.unsubscribe();
  }, [userId]);
  
  return status;
}
```

### Redux Debugging

```javascript
// Redux DevTools setup
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

// Action logging middleware
const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.log('Previous State:', store.getState());
  console.log('Action:', action);
  const result = next(action);
  console.log('Next State:', store.getState());
  console.groupEnd();
  return result;
};
```

## Network Debugging

### Intercepting Fetch Requests

```javascript
// Wrap fetch for debugging
const originalFetch = window.fetch;

window.fetch = function(...args) {
  console.log('Fetch Request:', args);
  
  return originalFetch.apply(this, args)
    .then(response => {
      console.log('Fetch Response:', {
        url: args[0],
        status: response.status,
        headers: Object.fromEntries(response.headers)
      });
      return response;
    })
    .catch(error => {
      console.error('Fetch Error:', args[0], error);
      throw error;
    });
};
```

### Axios Interceptors

```javascript
import axios from 'axios';

// Request interceptor
axios.interceptors.request.use(
  config => {
    console.log('Request:', {
      method: config.method,
      url: config.url,
      headers: config.headers,
      data: config.data
    });
    return config;
  },
  error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  response => {
    console.log('Response:', {
      status: response.status,
      url: response.config.url,
      data: response.data
    });
    return response;
  },
  error => {
    console.error('Response Error:', {
      status: error.response?.status,
      url: error.config?.url,
      message: error.message
    });
    return Promise.reject(error);
  }
);
```

## Source Maps

### Webpack Source Maps

```javascript
// webpack.config.js
module.exports = {
  mode: 'development',
  devtool: 'source-map', // Production: 'hidden-source-map'
  // Other options:
  // 'eval' - fastest, but hard to debug
  // 'eval-source-map' - good for development
  // 'cheap-module-source-map' - faster rebuild
  // 'source-map' - best quality, slowest
};
```

### TypeScript Source Maps

```json
// tsconfig.json
{
  "compilerOptions": {
    "sourceMap": true,
    "inlineSourceMap": false,
    "inlineSources": false
  }
}
```

## Debugging Tools

### Debug Library

```javascript
import debug from 'debug';

const debugApp = debug('app');
const debugDB = debug('app:database');
const debugAPI = debug('app:api');

debugApp('Application started');
debugDB('Connected to database');
debugAPI('API request: %o', { method: 'GET', url: '/users' });

// Enable in browser console: localStorage.debug = 'app:*'
// Enable in Node.js: DEBUG=app:* node server.js
```

### Why-is-node-running

```javascript
// Install: npm install why-is-node-running
import whyIsNodeRunning from 'why-is-node-running';

// At the end of your script
setTimeout(() => {
  whyIsNodeRunning();
}, 5000);
```

## Best Practices

1. **Remove console.log in production** - Use proper logging libraries
2. **Use source maps** - Debug minified code effectively
3. **Meaningful log messages** - Include context and variables
4. **Breakpoints over console.log** - Interactive debugging is more powerful
5. **Use DevTools features** - Conditional breakpoints, watch expressions
6. **Debug async code carefully** - Use async/await for better stack traces
7. **Monitor performance** - Use Performance API and profiling
8. **Test in different environments** - Browser, Node.js, mobile
9. **Use debugging tools** - Redux DevTools, React DevTools
10. **Handle errors gracefully** - Proper error boundaries and handling

Effective JavaScript debugging requires mastery of browser DevTools, Node.js debugger, and debugging best practices.
