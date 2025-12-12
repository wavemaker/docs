# JavaScript Files Integration

Learn how to integrate custom JavaScript files, modules, and libraries into your application.

## JavaScript Module Systems

### ES6 Modules (ESM)

#### Exporting
```javascript
// math.js
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Default export
export default class Calculator {
  add(a, b) {
    return a + b;
  }
}
```

#### Importing
```javascript
// app.js
import Calculator from './math.js'; // Default import
import { add, multiply, PI } from './math.js'; // Named imports
import * as MathUtils from './math.js'; // Namespace import
import { add as addition } from './math.js'; // Renamed import

const calc = new Calculator();
console.log(calc.add(5, 3));
console.log(add(5, 3));
console.log(MathUtils.PI);
```

### CommonJS Modules

#### Exporting
```javascript
// math.js
const PI = 3.14159;

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  PI,
  add,
  multiply
};

// Or single export
module.exports = Calculator;
```

#### Importing
```javascript
// app.js
const { add, multiply, PI } = require('./math.js');
const Calculator = require('./Calculator.js');

console.log(add(5, 3));
```

## File Organization

### Project Structure
```
src/
├── utils/
│   ├── stringUtils.js
│   ├── dateUtils.js
│   └── index.js
├── services/
│   ├── apiService.js
│   ├── authService.js
│   └── index.js
├── config/
│   ├── constants.js
│   └── environment.js
└── index.js
```

### Index Files for Clean Imports
```javascript
// utils/index.js
export { formatString, capitalize } from './stringUtils.js';
export { formatDate, parseDate } from './dateUtils.js';

// Usage
import { formatString, formatDate } from './utils';
```

## Creating Utility Modules

### String Utilities
```javascript
// utils/stringUtils.js

/**
 * Capitalize the first letter of a string
 * @param {string} str - The input string
 * @returns {string} - Capitalized string
 */
export function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Convert string to kebab-case
 */
export function toKebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Truncate string with ellipsis
 */
export function truncate(str, maxLength = 50) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
}

/**
 * Remove HTML tags from string
 */
export function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '');
}
```

### API Service Module
```javascript
// services/apiService.js

class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json'
    };
  }

  setAuthToken(token) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers
      }
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async get(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'GET'
    });
  }

  async post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  async put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  async delete(endpoint, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'DELETE'
    });
  }
}

export default new ApiService('https://api.example.com');
```

## Configuration Files

### Environment Configuration
```javascript
// config/environment.js

const environments = {
  development: {
    apiUrl: 'http://localhost:3000',
    debug: true,
    cacheEnabled: false
  },
  staging: {
    apiUrl: 'https://staging-api.example.com',
    debug: true,
    cacheEnabled: true
  },
  production: {
    apiUrl: 'https://api.example.com',
    debug: false,
    cacheEnabled: true
  }
};

const env = process.env.NODE_ENV || 'development';

export const config = environments[env];

export default config;
```

### Constants File
```javascript
// config/constants.js

export const API_TIMEOUT = 30000;

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile'
};

export const STORAGE_KEYS = {
  TOKEN: 'auth_token',
  USER: 'user_data',
  PREFERENCES: 'user_preferences'
};
```

## Advanced Patterns

### Singleton Pattern
```javascript
// services/database.js

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }

    this.connection = null;
    Database.instance = this;
  }

  connect(config) {
    if (!this.connection) {
      this.connection = createConnection(config);
      console.log('Database connected');
    }
    return this.connection;
  }

  disconnect() {
    if (this.connection) {
      this.connection.close();
      this.connection = null;
      console.log('Database disconnected');
    }
  }

  query(sql, params) {
    if (!this.connection) {
      throw new Error('Database not connected');
    }
    return this.connection.execute(sql, params);
  }
}

// Export single instance
export default new Database();
```

### Factory Pattern
```javascript
// factories/userFactory.js

export class UserFactory {
  static createUser(type, data) {
    switch (type) {
      case 'admin':
        return new AdminUser(data);
      case 'moderator':
        return new ModeratorUser(data);
      case 'regular':
        return new RegularUser(data);
      default:
        throw new Error(`Unknown user type: ${type}`);
    }
  }
}

class AdminUser {
  constructor(data) {
    this.type = 'admin';
    this.permissions = ['read', 'write', 'delete', 'manage'];
    Object.assign(this, data);
  }
}

class ModeratorUser {
  constructor(data) {
    this.type = 'moderator';
    this.permissions = ['read', 'write', 'moderate'];
    Object.assign(this, data);
  }
}

class RegularUser {
  constructor(data) {
    this.type = 'regular';
    this.permissions = ['read'];
    Object.assign(this, data);
  }
}
```

### Observer Pattern
```javascript
// utils/eventEmitter.js

export class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  off(event, listenerToRemove) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      listener => listener !== listenerToRemove
    );
  }

  emit(event, ...args) {
    if (!this.events[event]) return;

    this.events[event].forEach(listener => {
      listener(...args);
    });
  }

  once(event, listener) {
    const onceWrapper = (...args) => {
      listener(...args);
      this.off(event, onceWrapper);
    };
    this.on(event, onceWrapper);
  }
}

// Usage
import { EventEmitter } from './utils/eventEmitter.js';

const emitter = new EventEmitter();

emitter.on('userLogin', (user) => {
  console.log(`User ${user.name} logged in`);
});

emitter.emit('userLogin', { name: 'John' });
```

## Loading External JavaScript Files

### Dynamic Script Loading
```javascript
// utils/scriptLoader.js

export function loadScript(src, options = {}) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = options.async !== false;
    script.defer = options.defer || false;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));

    if (options.attributes) {
      Object.entries(options.attributes).forEach(([key, value]) => {
        script.setAttribute(key, value);
      });
    }

    document.head.appendChild(script);
  });
}

// Usage
import { loadScript } from './utils/scriptLoader.js';

async function loadGoogleMaps() {
  try {
    await loadScript(
      'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY'
    );
    console.log('Google Maps loaded');
    initMap();
  } catch (error) {
    console.error('Failed to load Google Maps', error);
  }
}
```

### Lazy Loading Modules
```javascript
// Lazy load heavy modules
async function loadChartLibrary() {
  const { Chart } = await import('./vendor/chart.js');
  return new Chart();
}

// Usage
button.addEventListener('click', async () => {
  const chart = await loadChartLibrary();
  chart.render(data);
});
```

## Browser Compatibility

### Polyfills
```javascript
// polyfills.js

// Promise polyfill
if (!window.Promise) {
  window.Promise = require('promise-polyfill');
}

// Fetch polyfill
if (!window.fetch) {
  require('whatwg-fetch');
}

// Array.from polyfill
if (!Array.from) {
  Array.from = (function() {
    return function(arrayLike) {
      return [].slice.call(arrayLike);
    };
  })();
}
```

### Feature Detection
```javascript
// utils/featureDetection.js

export const features = {
  localStorage: (() => {
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  })(),

  serviceWorker: 'serviceWorker' in navigator,

  webGL: (() => {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl')
      );
    } catch (e) {
      return false;
    }
  })(),

  touchEvents: 'ontouchstart' in window
};

// Usage
if (features.localStorage) {
  // Use localStorage
} else {
  // Use fallback
}
```

## Bundling and Build Tools

### Webpack Configuration
```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@services': path.resolve(__dirname, 'src/services')
    }
  }
};
```

### Rollup Configuration
```javascript
// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'MyLibrary'
  },
  plugins: [
    resolve(),
    commonjs(),
    terser()
  ]
};
```

## Best Practices

### Code Organization
- Use meaningful file and folder names
- Group related functionality together
- Keep files focused and single-purpose
- Use index files for clean imports
- Maintain consistent naming conventions

### Module Design
- Export only what's necessary
- Use named exports for utilities
- Use default exports for main classes
- Document exported functions
- Keep module dependencies minimal

### Performance
- Use code splitting for large modules
- Lazy load when appropriate
- Minimize bundle size
- Tree-shake unused code
- Use production builds

### Error Handling
```javascript
// utils/errorHandler.js

export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export function handleError(error) {
  if (error.isOperational) {
    // Operational error - handled
    console.error('Operational error:', error.message);
  } else {
    // Programming error - needs attention
    console.error('Programming error:', error);
    // Log to error monitoring service
  }
}
```

### Testing
```javascript
// math.test.js
import { add, multiply } from './math.js';

describe('Math utilities', () => {
  test('add function', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('multiply function', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(0, 5)).toBe(0);
  });
});
```
