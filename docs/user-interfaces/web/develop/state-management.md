---
last_update: { author: "Author Name" }
---

# State Management

Managing application state effectively across components.

## Overview

State management is essential for building interactive applications. This guide covers different approaches to managing state in your application.

## Local Component State

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};
```

## Lifting State Up

```jsx
const ParentComponent = () => {
  const [sharedState, setSharedState] = useState('');

  return (
    <>
      <ChildA value={sharedState} onChange={setSharedState} />
      <ChildB value={sharedState} />
    </>
  );
};
```

## Context API

```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

## useReducer Hook

```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unknown action type');
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
};
```

## Global State Management

### Redux Pattern

```javascript
// Store
const store = {
  state: { user: null, theme: 'light' },
  listeners: [],

  getState() {
    return this.state;
  },

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener(this.state));
  },

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },
};
```

## State Management Best Practices

### 1. Keep State Local When Possible

```jsx
// ✅ Good - Local state
const SearchBar = () => {
  const [query, setQuery] = useState('');
  return <input value={query} onChange={e => setQuery(e.target.value)} />;
};

// ❌ Bad - Unnecessary global state for local concerns
```

### 2. Use Appropriate State Management

- **Local state**: Component-specific data
- **Context**: Theme, auth, shared UI state
- **Global state**: Complex app state, shared data

### 3. Avoid Prop Drilling

```jsx
// Use Context to avoid passing props through many levels
const UserContext = createContext();

const App = () => (
  <UserContext.Provider value={user}>
    <Dashboard />
  </UserContext.Provider>
);
```

## State Persistence

```javascript
const usePersistedState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
```

## Related Documentation

- [UI Event handling](./ui-event-handling.md)
- [Input validations](./input-validations.md)
- [Create Page, working with Layouts](./create-page-working-with-layouts.md)
