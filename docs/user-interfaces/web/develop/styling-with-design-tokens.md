---
last_update: { author: "Author Name" }
---

# Styling with Design Tokens

Guide to using design tokens for consistent, maintainable styling across your application.

## Overview

Design tokens are the visual design atoms of your design system—specifically named entities that store visual design attributes. Using tokens ensures consistency and makes large-scale styling changes effortless.

## What are Design Tokens?

Design tokens represent design decisions as data:

```javascript
// tokens.js
export const tokens = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: {
      sm: '14px',
      md: '16px',
      lg: '20px',
      xl: '24px',
    },
  },
};
```

## Token Categories

### Color Tokens

```javascript
const colorTokens = {
  // Brand colors
  brand: {
    primary: '#007bff',
    secondary: '#6c757d',
  },

  // Semantic colors
  semantic: {
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
  },

  // Neutral colors
  neutral: {
    white: '#ffffff',
    gray100: '#f8f9fa',
    gray200: '#e9ecef',
    gray900: '#212529',
    black: '#000000',
  },

  // Text colors
  text: {
    primary: '#212529',
    secondary: '#6c757d',
    disabled: '#adb5bd',
  },
};
```

### Spacing Tokens

```javascript
const spacingTokens = {
  space: {
    0: '0',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
  },
};
```

### Typography Tokens

```javascript
const typographyTokens = {
  fontFamily: {
    base: 'Inter, system-ui, sans-serif',
    heading: 'Poppins, sans-serif',
    mono: 'Monaco, monospace',
  },

  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '30px',
    '4xl': '36px',
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};
```

## Using Tokens in CSS

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;

  /* Spacing */
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;

  /* Typography */
  --font-family-base: Inter, sans-serif;
  --font-size-base: 16px;
}

.button {
  background-color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
}
```

### SCSS/Sass Variables

```scss
// _tokens.scss
$color-primary: #007bff;
$color-secondary: #6c757d;

$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;

// component.scss
.button {
  background-color: $color-primary;
  padding: $spacing-sm $spacing-md;
}
```

## Using Tokens in JavaScript

### Styled Components

```javascript
import styled from 'styled-components';
import { tokens } from './tokens';

const Button = styled.button`
  background-color: ${tokens.colors.primary};
  color: ${tokens.colors.white};
  padding: ${tokens.spacing.sm} ${tokens.spacing.md};
  font-size: ${tokens.typography.fontSize.base};
  border-radius: ${tokens.borderRadius.md};

  &:hover {
    background-color: ${tokens.colors.primaryDark};
  }
`;
```

### Emotion

```javascript
import { css } from '@emotion/react';
import { tokens } from './tokens';

const buttonStyles = css`
  background-color: ${tokens.colors.primary};
  padding: ${tokens.spacing.sm} ${tokens.spacing.md};
  font-size: ${tokens.typography.fontSize.base};
`;

const Button = ({ children }) => (
  <button css={buttonStyles}>
    {children}
  </button>
);
```

### Inline Styles

```jsx
import { tokens } from './tokens';

const Button = ({ children }) => {
  return (
    <button
      style={{
        backgroundColor: tokens.colors.primary,
        padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
        fontSize: tokens.typography.fontSize.base,
      }}
    >
      {children}
    </button>
  );
};
```

## Token Organization

### Hierarchical Structure

```javascript
const tokens = {
  // Global tokens
  global: {
    blue500: '#007bff',
    gray300: '#dee2e6',
  },

  // Alias tokens
  alias: {
    colorPrimary: 'global.blue500',
    colorBorder: 'global.gray300',
  },

  // Component tokens
  component: {
    button: {
      bgPrimary: 'alias.colorPrimary',
      border: 'alias.colorBorder',
    },
  },
};
```

### Context-Based Tokens

```javascript
const tokens = {
  light: {
    bg: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
    },
    text: {
      primary: '#212529',
      secondary: '#6c757d',
    },
  },

  dark: {
    bg: {
      primary: '#212529',
      secondary: '#343a40',
    },
    text: {
      primary: '#f8f9fa',
      secondary: '#adb5bd',
    },
  },
};
```

## Theme Support

### Light/Dark Themes

```css
[data-theme="light"] {
  --color-bg-primary: #ffffff;
  --color-text-primary: #212529;
}

[data-theme="dark"] {
  --color-bg-primary: #212529;
  --color-text-primary: #f8f9fa;
}

.page {
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
}
```

### Dynamic Theme Switching

```javascript
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

## Responsive Tokens

### Breakpoint Tokens

```javascript
const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

const mediaQueries = {
  mobile: `@media (min-width: ${breakpoints.mobile})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
  wide: `@media (min-width: ${breakpoints.wide})`,
};
```

### Responsive Spacing

```javascript
const responsiveSpacing = {
  container: {
    mobile: '16px',
    tablet: '24px',
    desktop: '32px',
  },
  section: {
    mobile: '24px',
    tablet: '32px',
    desktop: '48px',
  },
};
```

## Token Best Practices

### 1. Semantic Naming

Use meaningful names that describe purpose, not appearance:

```javascript
// ✅ Good
const tokens = {
  colors: {
    textPrimary: '#212529',
    bgSuccess: '#28a745',
  },
};

// ❌ Bad
const tokens = {
  colors: {
    darkGray: '#212529',
    green: '#28a745',
  },
};
```

### 2. Consistent Scale

Use consistent scales for spacing and typography:

```javascript
// Consistent scale (8px base)
const spacing = {
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
};
```

### 3. Token References

Reference tokens instead of hardcoding values:

```javascript
// ✅ Good
const buttonTokens = {
  bg: tokens.colors.primary,
  text: tokens.colors.white,
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
};

// ❌ Bad
const buttonTokens = {
  bg: '#007bff',
  text: '#ffffff',
  padding: '8px 16px',
};
```

## Token Documentation

### Documenting Tokens

```javascript
/**
 * Primary brand color
 * Used for: Primary buttons, links, focus states
 * Contrast ratio: 4.5:1 against white
 */
const colorPrimary = '#007bff';

/**
 * Base spacing unit
 * All spacing values should be multiples of this
 */
const spacingBase = '8px';
```

## Token Migration

### Updating Tokens

```javascript
// Version 1
const tokensV1 = {
  colors: {
    primary: '#007bff',
  },
};

// Version 2 - Add deprecation warning
const tokensV2 = {
  colors: {
    primary: '#007bff', // @deprecated Use brandPrimary
    brandPrimary: '#007bff',
  },
};

// Version 3 - Remove deprecated token
const tokensV3 = {
  colors: {
    brandPrimary: '#007bff',
  },
};
```

## Related Documentation

- [Create Page, working with Layouts](./create-page-working-with-layouts.md) - Page and layout creation
- [Responsive Design](./responsive-design.md) - Responsive design strategies
- [State Management](./state-management.md) - Application state management
