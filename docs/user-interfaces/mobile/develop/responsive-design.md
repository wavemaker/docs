---
last_update: { author: "Author Name" }
---

# Responsive Design

Creating responsive user interfaces that adapt to different screen sizes and devices.

## Overview

Responsive design ensures your application provides an optimal viewing experience across a wide range of devices, from mobile phones to desktop computers.

## Mobile-First Approach

Start with mobile styles and enhance for larger screens:

```css
/* Mobile (default) */
.container {
  padding: 16px;
  font-size: 14px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 24px;
    font-size: 16px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
    font-size: 18px;
  }
}
```

## Breakpoints

Standard breakpoint system:

```javascript
const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
};
```

## Responsive Layouts

### Flexible Grid

```css
.grid {
  display: grid;
  gap: 1rem;

  /* Mobile: 1 column */
  grid-template-columns: 1fr;

  /* Tablet: 2 columns */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Desktop: 3 columns */
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## Related Documentation

- [Create Page, working with Layouts](./create-page-working-with-layouts.md)
- [Styling with Design Tokens](./styling-with-design-tokens.md)
