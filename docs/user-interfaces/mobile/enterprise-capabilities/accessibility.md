---
last_update: { author: "Author Name" }
---

# Accessibility

Building accessible user interfaces that work for everyone, including people with disabilities.

## Overview

Web accessibility (a11y) ensures that websites and applications are usable by everyone, regardless of their abilities or disabilities. This includes users who rely on screen readers, keyboard navigation, or other assistive technologies.

## Why Accessibility Matters

- **Legal Compliance**: Many countries require web accessibility (ADA, Section 508, WCAG)
- **Inclusive Design**: Ensures everyone can use your application
- **Better UX**: Accessibility improvements benefit all users
- **SEO Benefits**: Semantic HTML improves search engine rankings
- **Market Reach**: Expands your potential user base

## WCAG Principles (POUR)

### 1. Perceivable

Information must be presentable to users in ways they can perceive.

```jsx
// ✅ Good - Alt text for images
<img src="profile.jpg" alt="User profile photo of John Doe" />

// ✅ Good - Text alternatives for icons
<button aria-label="Close dialog">
  <CloseIcon />
</button>

// ❌ Bad - Missing alt text
<img src="profile.jpg" />
```

### 2. Operable

User interface components must be operable.

```jsx
// ✅ Good - Keyboard accessible
<button onClick={handleClick} onKeyPress={handleKeyPress}>
  Submit
</button>

// ✅ Good - Focus management
<input
  type="text"
  autoFocus
  onBlur={handleBlur}
/>

// ❌ Bad - Mouse-only interaction
<div onClick={handleClick}>Click me</div>
```

### 3. Understandable

Information and operation must be understandable.

```jsx
// ✅ Good - Clear labels and instructions
<label htmlFor="email">
  Email Address
  <input
    type="email"
    id="email"
    aria-describedby="email-help"
    required
  />
</label>
<small id="email-help">
  We'll never share your email with anyone else.
</small>

// ❌ Bad - Unclear placeholder-only label
<input type="email" placeholder="Email" />
```

### 4. Robust

Content must be robust enough to work with various assistive technologies.

```jsx
// ✅ Good - Semantic HTML
<nav>
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// ❌ Bad - Non-semantic markup
<div className="nav">
  <div className="nav-item" onClick={goHome}>Home</div>
  <div className="nav-item" onClick={goAbout}>About</div>
</div>
```

## Semantic HTML

### Use Proper HTML Elements

```jsx
// ✅ Good - Semantic HTML
<header>
  <nav>
    <ul>
      <li><a href="/home">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Content...</p>
  </article>
</main>

<footer>
  <p>&copy; 2025 Company Name</p>
</footer>

// ❌ Bad - Generic divs everywhere
<div className="header">
  <div className="nav">
    <div className="nav-item">Home</div>
  </div>
</div>
```

### Heading Hierarchy

```jsx
// ✅ Good - Proper heading order
<h1>Main Page Title</h1>
<section>
  <h2>Section Title</h2>
  <h3>Subsection</h3>
  <h3>Another Subsection</h3>
</section>

// ❌ Bad - Skipping heading levels
<h1>Main Page Title</h1>
<h4>Section Title</h4>
```

## ARIA (Accessible Rich Internet Applications)

### ARIA Roles

```jsx
// Navigation
<nav role="navigation" aria-label="Main navigation">
  <ul>
    <li><a href="/home">Home</a></li>
  </ul>
</nav>

// Search
<form role="search">
  <input type="search" aria-label="Search" />
  <button type="submit">Search</button>
</form>

// Dialog
<div role="dialog" aria-labelledby="dialog-title" aria-modal="true">
  <h2 id="dialog-title">Confirm Action</h2>
  <p>Are you sure?</p>
</div>
```

### ARIA Labels

```jsx
// aria-label for icon buttons
<button aria-label="Close" onClick={handleClose}>
  <CloseIcon />
</button>

// aria-labelledby for complex labels
<section aria-labelledby="section-heading">
  <h2 id="section-heading">User Settings</h2>
  {/* Content */}
</section>

// aria-describedby for additional context
<input
  type="password"
  aria-label="Password"
  aria-describedby="password-requirements"
/>
<div id="password-requirements">
  Password must be at least 8 characters long.
</div>
```

### ARIA States

```jsx
// aria-expanded for collapsible content
<button
  aria-expanded={isOpen}
  aria-controls="content-id"
  onClick={toggleContent}
>
  Toggle Content
</button>
<div id="content-id" hidden={!isOpen}>
  Content...
</div>

// aria-checked for custom checkboxes
<div
  role="checkbox"
  aria-checked={isChecked}
  tabIndex={0}
  onClick={handleToggle}
  onKeyPress={handleKeyPress}
>
  {isChecked ? '☑' : '☐'} Option
</div>

// aria-selected for tabs
<div role="tablist">
  <button
    role="tab"
    aria-selected={activeTab === 'tab1'}
    aria-controls="panel1"
    id="tab1"
  >
    Tab 1
  </button>
</div>
```

### ARIA Live Regions

```jsx
// Announce dynamic updates to screen readers
const NotificationCenter = () => {
  const [message, setMessage] = useState('');

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {message}
    </div>
  );
};

// For urgent messages
<div role="alert" aria-live="assertive">
  Error: Form submission failed!
</div>
```

## Keyboard Navigation

### Focus Management

```jsx
import { useRef, useEffect } from 'react';

const Dialog = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef();

  useEffect(() => {
    if (isOpen) {
      // Focus close button when dialog opens
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true">
      <h2>Dialog Title</h2>
      <p>Content...</p>
      <button ref={closeButtonRef} onClick={onClose}>
        Close
      </button>
    </div>
  );
};
```

### Tab Order

```jsx
// Control tab order with tabIndex
<div>
  <button tabIndex={0}>First</button>
  <button tabIndex={0}>Second</button>
  <button tabIndex={-1}>Not in tab order</button>
  <a href="#" tabIndex={0}>Third</a>
</div>
```

### Keyboard Event Handling

```jsx
const KeyboardAccessibleDiv = ({ onClick }) => {
  const handleKeyPress = (event) => {
    // Activate on Enter or Space
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyPress={handleKeyPress}
    >
      Click or press Enter/Space
    </div>
  );
};
```

### Skip Links

```jsx
// Allow keyboard users to skip to main content
const Layout = ({ children }) => {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header>
        <nav>{/* Navigation */}</nav>
      </header>

      <main id="main-content">
        {children}
      </main>
    </>
  );
};

// CSS for skip link
// .skip-link {
//   position: absolute;
//   top: -40px;
//   left: 0;
//   background: #000;
//   color: white;
//   padding: 8px;
//   text-decoration: none;
// }
// .skip-link:focus {
//   top: 0;
// }
```

## Forms Accessibility

### Proper Labels

```jsx
// ✅ Good - Explicit label association
<label htmlFor="username">
  Username
  <input type="text" id="username" name="username" />
</label>

// ✅ Good - Implicit label association
<label>
  Email
  <input type="email" name="email" />
</label>

// ❌ Bad - No label
<input type="text" placeholder="Username" />
```

### Form Validation and Error Messages

```jsx
const AccessibleForm = () => {
  const [errors, setErrors] = useState({});

  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <div id="email-error" role="alert">
            {errors.email}
          </div>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
```

### Required Fields

```jsx
// Visual and programmatic indication
<label htmlFor="name">
  Name <span aria-label="required">*</span>
  <input
    type="text"
    id="name"
    required
    aria-required="true"
  />
</label>
```

### Fieldset and Legend

```jsx
// Group related form controls
<fieldset>
  <legend>Contact Information</legend>

  <label htmlFor="phone">Phone</label>
  <input type="tel" id="phone" />

  <label htmlFor="email">Email</label>
  <input type="email" id="email" />
</fieldset>
```

## Color and Contrast

### Minimum Contrast Ratios

```css
/* WCAG AA (minimum) */
/* Normal text: 4.5:1 */
/* Large text (18pt+): 3:1 */

/* ✅ Good contrast */
.text-on-light {
  color: #212529; /* Dark gray on white background */
  background-color: #ffffff;
}

/* ✅ Good contrast for buttons */
.primary-button {
  color: #ffffff; /* White on blue */
  background-color: #0056b3; /* Dark blue */
}

/* ❌ Bad - Insufficient contrast */
.low-contrast {
  color: #999999; /* Light gray */
  background-color: #ffffff; /* White */
}
```

### Don't Rely on Color Alone

```jsx
// ✅ Good - Multiple indicators
const StatusBadge = ({ status }) => {
  const getStatusInfo = (status) => {
    switch (status) {
      case 'success':
        return { color: 'green', icon: '✓', text: 'Success' };
      case 'error':
        return { color: 'red', icon: '✗', text: 'Error' };
      case 'warning':
        return { color: 'orange', icon: '!', text: 'Warning' };
      default:
        return { color: 'gray', icon: '–', text: 'Unknown' };
    }
  };

  const { color, icon, text } = getStatusInfo(status);

  return (
    <span className={`badge badge-${color}`}>
      <span aria-hidden="true">{icon}</span>
      <span>{text}</span>
    </span>
  );
};

// ❌ Bad - Color only
<span className="text-green">Success</span>
```

## Focus Indicators

### Visible Focus Styles

```css
/* ✅ Good - Clear focus indicator */
button:focus,
a:focus,
input:focus {
  outline: 2px solid #0056b3;
  outline-offset: 2px;
}

/* ✅ Good - Custom focus ring */
.custom-focus:focus {
  box-shadow: 0 0 0 3px rgba(0, 86, 179, 0.5);
  outline: none;
}

/* ❌ Bad - Removing focus outline */
*:focus {
  outline: none;
}
```

### Focus Visible (Modern Approach)

```css
/* Only show focus on keyboard navigation */
button:focus-visible {
  outline: 2px solid #0056b3;
  outline-offset: 2px;
}

/* No outline on mouse click */
button:focus:not(:focus-visible) {
  outline: none;
}
```

## Screen Reader Only Content

```css
/* Visually hidden but accessible to screen readers */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

```jsx
// Usage
<button>
  <TrashIcon />
  <span className="sr-only">Delete item</span>
</button>
```

## Accessible Components

### Accessible Modal

```jsx
import { useEffect, useRef } from 'react';

const AccessibleModal = ({ isOpen, onClose, title, children }) => {
  const modalRef = useRef();
  const previousActiveElement = useRef();

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      modalRef.current?.focus();

      // Trap focus inside modal
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        previousActiveElement.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <h2 id="modal-title">{title}</h2>
        {children}
        <button onClick={onClose} aria-label="Close dialog">
          Close
        </button>
      </div>
    </div>
  );
};
```

### Accessible Dropdown

```jsx
const AccessibleDropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1
        );
        break;
      case 'Enter':
        if (selectedIndex >= 0) {
          onSelect(options[selectedIndex]);
          setIsOpen(false);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  return (
    <div>
      <button
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
      >
        {label}
      </button>

      {isOpen && (
        <ul role="listbox" aria-label={label}>
          {options.map((option, index) => (
            <li
              key={option.id}
              role="option"
              aria-selected={index === selectedIndex}
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
```

## Testing Accessibility

### Automated Testing Tools

```bash
# Install axe-core for automated testing
npm install --save-dev @axe-core/react
```

```javascript
import { useEffect } from 'react';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  const React = require('react');
  const ReactDOM = require('react-dom');

  axe(React, ReactDOM, 1000);
}
```

### Manual Testing Checklist

1. **Keyboard Navigation**
   - Tab through all interactive elements
   - Use Enter/Space to activate buttons
   - Use arrow keys for custom controls

2. **Screen Reader Testing**
   - Test with NVDA (Windows), JAWS (Windows), or VoiceOver (Mac)
   - Ensure all content is announced properly
   - Verify page structure makes sense

3. **Zoom Testing**
   - Test at 200% zoom
   - Ensure no content is cut off
   - Check that layouts remain usable

4. **Color Contrast**
   - Use tools like WebAIM Contrast Checker
   - Verify all text meets WCAG standards

## Best Practices

### 1. Test with Real Users

Include people with disabilities in your testing process.

### 2. Use Semantic HTML First

Before reaching for ARIA, use proper HTML elements.

```jsx
// ✅ Good - Native button
<button onClick={handleClick}>Click me</button>

// ❌ Bad - Div with ARIA
<div role="button" tabIndex={0} onClick={handleClick}>
  Click me
</div>
```

### 3. Progressive Enhancement

Build core functionality first, enhance with JavaScript.

### 4. Provide Text Alternatives

All non-text content should have text alternatives.

### 5. Make Touch Targets Large Enough

Minimum 44x44 pixels for touch targets.

```css
button {
  min-width: 44px;
  min-height: 44px;
  padding: 8px 16px;
}
```

## Accessibility Checklist

- [ ] All images have alt text
- [ ] Form inputs have associated labels
- [ ] Proper heading hierarchy (h1-h6)
- [ ] Sufficient color contrast (4.5:1 for normal text)
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators are visible
- [ ] ARIA attributes used correctly
- [ ] No keyboard traps
- [ ] Skip links provided
- [ ] Error messages are announced to screen readers
- [ ] Live regions used for dynamic content
- [ ] Touch targets are at least 44x44 pixels

## Related Documentation

- [Role based Access Control](./role-based-access-control.md)
- [Language Support i18n](./language-support-i18n.md)
- [UI Event handling](../develop/ui-event-handling.md)
- [Input validations](../develop/input-validations.md)
