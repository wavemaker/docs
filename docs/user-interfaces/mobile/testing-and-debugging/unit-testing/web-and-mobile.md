---
last_update: { author: "Author Name" }
---

# Web & Mobile

Comprehensive guide to unit testing for web and mobile applications.

## Overview

Unit testing ensures individual components and functions work correctly in isolation. This guide covers testing strategies, frameworks, and best practices for both web and mobile applications.

## Why Unit Testing?

- **Catch Bugs Early**: Identify issues before they reach production
- **Code Quality**: Encourages better code structure and modularity
- **Refactoring Confidence**: Make changes without fear of breaking functionality
- **Documentation**: Tests serve as living documentation
- **Faster Development**: Reduce time spent debugging

## Testing Frameworks

### Jest

Most popular JavaScript testing framework.

**Installation:**
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

**Configuration (jest.config.js):**
```javascript
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
```

**Setup File (jest.setup.js):**
```javascript
import '@testing-library/jest-dom';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
```

### React Testing Library

Testing library focused on testing React components from the user's perspective.

**Basic Component Test:**
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies disabled state', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByText('Click me')).toBeDisabled();
  });
});
```

### Vitest

Fast unit test framework powered by Vite.

**Installation:**
```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

**Configuration (vitest.config.js):**
```javascript
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.js',
  },
});
```

## Testing React Components

### Component Props Testing

```javascript
import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';

describe('UserCard', () => {
  const mockUser = {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatar.jpg',
  };

  test('renders user information', () => {
    render(<UserCard user={mockUser} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByAltText('John Doe')).toHaveAttribute('src', '/avatar.jpg');
  });

  test('renders without avatar', () => {
    const userWithoutAvatar = { ...mockUser, avatar: null };
    render(<UserCard user={userWithoutAvatar} />);

    expect(screen.getByText('JD')).toBeInTheDocument(); // Initials
  });
});
```

### Event Handling Tests

```javascript
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('calls onSearch with input value', async () => {
    const handleSearch = jest.fn();
    render(<SearchBar onSearch={handleSearch} />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(screen.getByText('Search'));

    expect(handleSearch).toHaveBeenCalledWith('test query');
  });

  test('debounces search input', async () => {
    jest.useFakeTimers();
    const handleSearch = jest.fn();
    render(<SearchBar onSearch={handleSearch} debounce={500} />);

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 't' } });
    fireEvent.change(input, { target: { value: 'te' } });
    fireEvent.change(input, { target: { value: 'test' } });

    expect(handleSearch).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(handleSearch).toHaveBeenCalledWith('test');
      expect(handleSearch).toHaveBeenCalledTimes(1);
    });

    jest.useRealTimers();
  });
});
```

### State Management Tests

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  test('starts at zero', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count', () => {
    render(<Counter />);

    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 2')).toBeInTheDocument();
  });

  test('decrements count', () => {
    render(<Counter initialValue={5} />);

    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText('Count: 4')).toBeInTheDocument();
  });

  test('resets count', () => {
    render(<Counter />);

    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Increment'));
    fireEvent.click(screen.getByText('Reset'));

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });
});
```

### Async Component Tests

```javascript
import { render, screen, waitFor } from '@testing-library/react';
import UserList from './UserList';

// Mock fetch
global.fetch = jest.fn();

describe('UserList', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('loads and displays users', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    render(<UserList />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    });
  });

  test('displays error message on fetch failure', async () => {
    fetch.mockRejectedValueOnce(new Error('Failed to fetch'));

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText(/error/i)).toBeInTheDocument();
    });
  });
});
```

## Testing Hooks

### Custom Hook Testing

```javascript
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  test('initial value is 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test('increments count', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  test('accepts initial value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  test('respects max value', () => {
    const { result } = renderHook(() => useCounter(0, { max: 5 }));

    act(() => {
      for (let i = 0; i < 10; i++) {
        result.current.increment();
      }
    });

    expect(result.current.count).toBe(5);
  });
});
```

### Async Hook Testing

```javascript
import { renderHook, waitFor } from '@testing-library/react';
import useFetch from './useFetch';

describe('useFetch', () => {
  test('fetches data successfully', async () => {
    const mockData = { id: 1, name: 'Test' };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const { result } = renderHook(() => useFetch('/api/test'));

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.data).toEqual(mockData);
      expect(result.current.error).toBe(null);
    });
  });
});
```

## Testing Context Providers

```javascript
import { render, screen } from '@testing-library/react';
import { AuthProvider, useAuth } from './AuthContext';

const TestComponent = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Logged in as {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login({ name: 'John' })}>Login</button>
      )}
    </div>
  );
};

describe('AuthContext', () => {
  test('provides authentication state', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('handles login', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Logged in as John')).toBeInTheDocument();
  });

  test('handles logout', () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    fireEvent.click(screen.getByText('Login'));
    fireEvent.click(screen.getByText('Logout'));
    expect(screen.getByText('Login')).toBeInTheDocument();
  });
});
```

## Mobile-Specific Testing

### React Native Testing

**Installation:**
```bash
npm install --save-dev @testing-library/react-native
```

**Component Test:**
```javascript
import { render, fireEvent } from '@testing-library/react-native';
import MobileButton from './MobileButton';

describe('MobileButton', () => {
  test('renders correctly', () => {
    const { getByText } = render(<MobileButton title="Press me" />);
    expect(getByText('Press me')).toBeTruthy();
  });

  test('handles press events', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <MobileButton title="Press me" onPress={onPress} />
    );

    fireEvent.press(getByText('Press me'));
    expect(onPress).toHaveBeenCalled();
  });

  test('applies disabled style', () => {
    const { getByText } = render(
      <MobileButton title="Press me" disabled />
    );

    const button = getByText('Press me');
    expect(button.props.style).toMatchObject({
      opacity: 0.5,
    });
  });
});
```

### Testing Native Modules

```javascript
import { NativeModules } from 'react-native';

// Mock native module
jest.mock('react-native', () => ({
  NativeModules: {
    CameraModule: {
      takePicture: jest.fn(),
    },
  },
}));

describe('Camera functionality', () => {
  test('takes picture', async () => {
    const mockImage = { uri: 'file://photo.jpg' };
    NativeModules.CameraModule.takePicture.mockResolvedValue(mockImage);

    const result = await takePicture();

    expect(NativeModules.CameraModule.takePicture).toHaveBeenCalled();
    expect(result).toEqual(mockImage);
  });
});
```

### Testing Gestures

```javascript
import { render, fireEvent } from '@testing-library/react-native';
import SwipeableItem from './SwipeableItem';

describe('SwipeableItem', () => {
  test('handles swipe left', () => {
    const onSwipeLeft = jest.fn();
    const { getByTestId } = render(
      <SwipeableItem onSwipeLeft={onSwipeLeft} testID="swipeable" />
    );

    const item = getByTestId('swipeable');

    fireEvent(item, 'onSwipeableLeftOpen');
    expect(onSwipeLeft).toHaveBeenCalled();
  });
});
```

## Mocking

### Mocking API Calls

```javascript
import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import DataComponent from './DataComponent';

jest.mock('axios');

describe('DataComponent', () => {
  test('fetches and displays data', async () => {
    const mockData = { id: 1, title: 'Test' };
    axios.get.mockResolvedValue({ data: mockData });

    render(<DataComponent />);

    await waitFor(() => {
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    expect(axios.get).toHaveBeenCalledWith('/api/data');
  });
});
```

### Mocking Modules

```javascript
// Mock entire module
jest.mock('./utils/helpers', () => ({
  formatDate: jest.fn(() => '2025-01-15'),
  calculateTotal: jest.fn(() => 100),
}));

// Partial mock
jest.mock('./utils/helpers', () => ({
  ...jest.requireActual('./utils/helpers'),
  formatDate: jest.fn(() => '2025-01-15'),
}));
```

### Mocking LocalStorage

```javascript
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

describe('Storage tests', () => {
  beforeEach(() => {
    localStorage.getItem.mockClear();
    localStorage.setItem.mockClear();
  });

  test('saves data to localStorage', () => {
    saveUserPreferences({ theme: 'dark' });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'preferences',
      JSON.stringify({ theme: 'dark' })
    );
  });
});
```

## Snapshot Testing

```javascript
import { render } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {
  test('matches snapshot', () => {
    const user = {
      name: 'John Doe',
      email: 'john@example.com',
      avatar: '/avatar.jpg',
    };

    const { container } = render(<ProfileCard user={user} />);
    expect(container).toMatchSnapshot();
  });
});
```

## Coverage Reports

**Run tests with coverage:**
```bash
npm test -- --coverage
```

**Coverage configuration:**
```javascript
// jest.config.js
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/index.js',
    '!src/reportWebVitals.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ['text', 'lcov', 'html'],
};
```

## Best Practices

### 1. Test Behavior, Not Implementation

```javascript
// ✅ Good - Tests behavior
test('displays user name', () => {
  render(<UserProfile user={{ name: 'John' }} />);
  expect(screen.getByText('John')).toBeInTheDocument();
});

// ❌ Bad - Tests implementation
test('sets state correctly', () => {
  const wrapper = shallow(<UserProfile />);
  wrapper.instance().setState({ name: 'John' });
  expect(wrapper.state('name')).toBe('John');
});
```

### 2. Use Data-TestId Sparingly

```javascript
// ✅ Good - Use accessible queries
screen.getByRole('button', { name: /submit/i });
screen.getByLabelText(/email/i);
screen.getByText(/welcome/i);

// ⚠️ OK - When no accessible query works
screen.getByTestId('custom-component');
```

### 3. Avoid Testing Library Implementation Details

```javascript
// ✅ Good - Test user-facing behavior
expect(screen.getByText('5 items')).toBeInTheDocument();

// ❌ Bad - Test internal state
expect(component.state.count).toBe(5);
```

### 4. Clean Up After Tests

```javascript
afterEach(() => {
  jest.clearAllMocks();
  cleanup();
});
```

### 5. Use Descriptive Test Names

```javascript
// ✅ Good
test('displays error message when email is invalid', () => {});

// ❌ Bad
test('test 1', () => {});
```

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- UserCard.test.js

# Run tests with coverage
npm test -- --coverage

# Run tests matching pattern
npm test -- --testNamePattern="login"
```

## Continuous Integration

**GitHub Actions (.github/workflows/test.yml):**
```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test -- --coverage

      - name: Upload coverage
        uses: codecov/codecov-action@v2
```

## Related Documentation

- [UI Testing Web](../testing-strategies/ui-testing-web.md)
- [UI Testing Mobile](../testing-strategies/ui-testing-mobile.md)
- [WavePulse](../wm-debugging-tools/wavepulse.md) – WaveMaker debugging tool
- [Debugging Overview](../debugging-overview.md) – All debugging tools and methods
- [State Management](../../develop/state-management.md)
