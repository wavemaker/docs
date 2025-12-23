---
last_update: { author: "Author Name" }
---

# Style Workspace

The Style Workspace is a centralized environment for managing and applying visual styling across your application using design system principles.

## Overview

The Style Workspace provides tools and interfaces for creating, managing, and applying styles consistently throughout your application. It integrates design tokens, theming capabilities, and visual styling tools to ensure design consistency.

## Key Features

### 1. Design Token Management

#### Token Browser
- View all available design tokens
- Search and filter tokens
- Preview token values
- Copy token references

#### Token Categories
- **Color Tokens** - Brand colors, semantic colors, neutral colors
- **Typography Tokens** - Font families, sizes, weights, line heights
- **Spacing Tokens** - Margins, padding, gaps
- **Border Tokens** - Border widths, radius, styles
- **Shadow Tokens** - Elevation levels, shadow definitions
- **Animation Tokens** - Durations, easing functions

#### Token Usage
```css
/* Using design tokens */
.component {
  color: var(--color-primary);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-lg);
}
```

### 2. Theme Management

#### Theme Creation
Create and manage multiple themes:
- Light theme
- Dark theme
- High contrast theme
- Custom brand themes

#### Theme Structure
```javascript
const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#ffffff',
    text: '#212529',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: {
      base: '16px',
      heading: '24px',
    },
  },
  spacing: {
    unit: 8,
    scale: [0, 8, 16, 24, 32, 40, 48, 56, 64],
  },
};
```

#### Theme Switching
```jsx
import { ThemeProvider } from '@design-system/theme';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme}>
      <ThemeToggle onChange={setTheme} />
      <AppContent />
    </ThemeProvider>
  );
}
```

### 3. Style Editor

#### Visual Style Editor
- Color picker with palette suggestions
- Typography controls
- Spacing adjustments
- Border and shadow editors
- Real-time preview

#### CSS Generation
Automatically generate CSS from visual edits:
```css
/* Generated styles */
.custom-component {
  background-color: #007bff;
  color: #ffffff;
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
}
```

### 4. Component Styling

#### Style Properties Panel
- Background and borders
- Typography settings
- Layout and spacing
- Effects (shadows, opacity)
- Animations and transitions

#### Responsive Styles
Define styles for different breakpoints:
```css
.component {
  padding: var(--spacing-sm);
}

@media (min-width: 768px) {
  .component {
    padding: var(--spacing-md);
  }
}

@media (min-width: 1024px) {
  .component {
    padding: var(--spacing-lg);
  }
}
```

### 5. CSS Utilities

#### Utility Class Generator
Generate utility classes based on design tokens:
```css
/* Color utilities */
.text-primary { color: var(--color-primary); }
.bg-primary { background-color: var(--color-primary); }

/* Spacing utilities */
.p-sm { padding: var(--spacing-sm); }
.m-md { margin: var(--spacing-md); }

/* Typography utilities */
.text-base { font-size: var(--font-size-base); }
.font-bold { font-weight: var(--font-weight-bold); }
```

#### Custom Utility Creation
Create custom utility classes for common patterns:
```css
/* Custom utilities */
.card {
  padding: var(--spacing-md);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  background: var(--color-surface);
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-on-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
}
```

## Styling Approaches

### 1. CSS Custom Properties

#### Define Variables
```css
:root {
  /* Colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;

  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;

  /* Typography */
  --font-family-base: 'Inter', sans-serif;
  --font-size-base: 1rem;
  --font-weight-normal: 400;
  --font-weight-bold: 700;
}
```

#### Apply Variables
```css
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
}
```

### 2. CSS-in-JS

#### Styled Components
```javascript
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.onPrimary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
```

#### Emotion
```javascript
import { css } from '@emotion/react';

const buttonStyles = (theme) => css`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.onPrimary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;
```

### 3. Utility-First CSS

#### Tailwind-Style Utilities
```jsx
<button className="bg-primary text-on-primary px-md py-sm rounded-md font-bold hover:bg-primary-dark">
  Click Me
</button>
```

#### Custom Utility Framework
```css
/* Generated utility classes */
.bg-primary { background-color: var(--color-primary); }
.text-on-primary { color: var(--color-on-primary); }
.px-md { padding-left: var(--spacing-md); padding-right: var(--spacing-md); }
.py-sm { padding-top: var(--spacing-sm); padding-bottom: var(--spacing-sm); }
.rounded-md { border-radius: var(--border-radius-md); }
```

### 4. Component-Level Styles

#### Scoped Styles
```jsx
// Component.module.css
.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
}

// Component.jsx
import styles from './Component.module.css';

function Button() {
  return <button className={styles.button}>Click</button>;
}
```

## Style Organization

### File Structure
```
styles/
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── index.css
├── themes/
│   ├── light.css
│   ├── dark.css
│   └── high-contrast.css
├── utilities/
│   ├── layout.css
│   ├── spacing.css
│   ├── typography.css
│   └── colors.css
├── components/
│   ├── button.css
│   ├── card.css
│   └── input.css
└── global.css
```

### Import Order
```css
/* 1. Design tokens */
@import './tokens/index.css';

/* 2. Theme */
@import './themes/light.css';

/* 3. Global styles */
@import './global.css';

/* 4. Utilities */
@import './utilities/layout.css';
@import './utilities/spacing.css';

/* 5. Components */
@import './components/button.css';
@import './components/card.css';
```

## Advanced Features

### 1. Style Inheritance

#### Base Component Styles
```css
/* Base button */
.button-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-family: var(--font-family-base);
  transition: all 0.2s ease;
}

/* Variants inherit from base */
.button-primary {
  composes: button-base;
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.button-secondary {
  composes: button-base;
  background: var(--color-secondary);
  color: var(--color-on-secondary);
}
```

### 2. Dynamic Theming

#### Runtime Theme Switching
```javascript
function applyTheme(themeName) {
  const root = document.documentElement;
  const theme = themes[themeName];

  Object.entries(theme).forEach(([key, value]) => {
    root.style.setProperty(`--${key}`, value);
  });
}

// Switch theme
applyTheme('dark');
```

### 3. Responsive Utilities

#### Breakpoint-Specific Styles
```css
/* Mobile first */
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-sm);
}

/* Tablet */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-md);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }
}
```

### 4. Animation System

#### Transition Tokens
```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 350ms ease;

  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-in: cubic-bezier(0.4, 0, 1, 1);
  --easing-out: cubic-bezier(0, 0, 0.2, 1);
}
```

#### Animation Utilities
```css
.fade-in {
  animation: fadeIn var(--transition-base) var(--easing-default);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.slide-up {
  animation: slideUp var(--transition-base) var(--easing-out);
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

## Best Practices

### 1. Use Design Tokens
Always reference design tokens instead of hardcoded values:
```css
/* ✅ Good */
.component {
  color: var(--color-primary);
  padding: var(--spacing-md);
}

/* ❌ Bad */
.component {
  color: #007bff;
  padding: 16px;
}
```

### 2. Mobile-First Responsive Design
Start with mobile styles and enhance for larger screens:
```css
/* Base (mobile) */
.component {
  font-size: var(--font-size-sm);
  padding: var(--spacing-sm);
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    font-size: var(--font-size-base);
    padding: var(--spacing-md);
  }
}
```

### 3. Consistent Naming
Use clear, descriptive class names:
```css
/* ✅ Good */
.button-primary { }
.card-header { }
.text-error { }

/* ❌ Bad */
.btn-p { }
.hdr { }
.red-text { }
```

### 4. Avoid Deep Nesting
Keep CSS specificity low:
```css
/* ✅ Good */
.card { }
.card-header { }
.card-title { }

/* ❌ Bad */
.card .header .title { }
```

### 5. Performance Optimization
- Minimize CSS bundle size
- Use CSS containment
- Lazy load non-critical styles
- Remove unused styles

## Troubleshooting

### Common Issues

#### Theme Not Applying
Check theme provider wrapper and token imports.

#### Styles Not Updating
Clear cache and rebuild style bundles.

#### Specificity Conflicts
Use more specific selectors or adjust CSS order.

#### Performance Issues
Audit CSS bundle size and remove unused styles.

## Related Documentation

- [Design Tokens](../concept/design-tokens.md) - Design token system
- [Component Variants](../concept/component-variants.md) - Component variations
- [Designing Best Practices](../concept/designing-best-practices.md) - Best practices
- [Design System Overview](../overview.md) - Design system overview
