# Design Tokens

Design tokens are the fundamental building blocks of a design system, representing design decisions as data.

## What are Design Tokens?

Design tokens are named entities that store visual design attributes. They are platform-agnostic variables that maintain design consistency across different platforms and technologies.

## Types of Design Tokens

### Color Tokens
- Primary colors
- Secondary colors
- Semantic colors (success, warning, error, info)
- Neutral colors (grays, blacks, whites)
- Background colors
- Text colors
- Border colors

```json
{
  "color": {
    "primary": "#007bff",
    "secondary": "#6c757d",
    "success": "#28a745",
    "danger": "#dc3545",
    "warning": "#ffc107",
    "info": "#17a2b8"
  }
}
```

### Typography Tokens
- Font families
- Font sizes
- Font weights
- Line heights
- Letter spacing
- Text transforms

```json
{
  "typography": {
    "fontFamily": {
      "base": "Inter, sans-serif",
      "heading": "Poppins, sans-serif",
      "monospace": "Monaco, monospace"
    },
    "fontSize": {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem"
    }
  }
}
```

### Spacing Tokens
- Margins
- Padding
- Gap spacing
- Layout spacing

```json
{
  "spacing": {
    "xs": "0.25rem",
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem",
    "2xl": "3rem"
  }
}
```

### Size Tokens
- Component dimensions
- Icon sizes
- Container widths
- Breakpoints

### Border Tokens
- Border widths
- Border radius
- Border styles

### Shadow Tokens
- Elevation levels
- Shadow definitions
- Depth indicators

### Animation Tokens
- Duration
- Easing functions
- Transitions
- Keyframes

## Token Hierarchy

### Global Tokens
Base values that define the core design language.

```json
{
  "global": {
    "blue-500": "#007bff",
    "spacing-base": "1rem"
  }
}
```

### Alias Tokens
Semantic references to global tokens.

```json
{
  "alias": {
    "color-primary": "{global.blue-500}",
    "spacing-default": "{global.spacing-base}"
  }
}
```

### Component Tokens
Component-specific token values.

```json
{
  "component": {
    "button-bg": "{alias.color-primary}",
    "button-padding": "{alias.spacing-default}"
  }
}
```

## Token Naming Conventions

### Consistent Naming Structure
```
[category]-[type]-[variant]-[state]-[scale]
```

Examples:
- `color-text-primary-default`
- `spacing-margin-horizontal-lg`
- `border-radius-button-sm`

### Semantic Naming
Use meaningful names that describe the purpose, not the value:
- ✅ `color-text-error`
- ❌ `color-red-500`

## Token Management

### Token Organization
- Group tokens by category
- Use hierarchical structure
- Maintain clear documentation
- Version control tokens

### Token Files
Store tokens in structured formats:
- JSON
- YAML
- JavaScript/TypeScript
- CSS Custom Properties

### Token Transformation
Tools for converting tokens to platform-specific formats:
- Style Dictionary
- Theo
- Design Tokens CLI

## Implementation

### CSS Custom Properties
```css
:root {
  --color-primary: #007bff;
  --spacing-md: 1rem;
  --font-size-base: 1rem;
}

.button {
  background-color: var(--color-primary);
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
}
```

### JavaScript/TypeScript
```typescript
export const tokens = {
  color: {
    primary: '#007bff',
  },
  spacing: {
    md: '1rem',
  },
  typography: {
    baseFontSize: '1rem',
  },
};
```

### Styled Components
```javascript
const theme = {
  colors: {
    primary: '#007bff',
  },
  spacing: {
    md: '1rem',
  },
};
```

## Token Usage Guidelines

### When to Create New Tokens
- Introducing new design patterns
- Adding new brand colors
- Defining new spacing scales
- Creating platform-specific values

### When to Reference Existing Tokens
- Building new components
- Implementing designs
- Creating variations
- Maintaining consistency

## Token Documentation

### Document Each Token
- Purpose and usage
- Visual examples
- Do's and don'ts
- Related tokens
- Version history

### Token Registry
Maintain a centralized registry of all tokens with:
- Token name
- Token value
- Token type
- Usage guidelines
- Deprecation status

## Best Practices

1. **Start Simple** - Begin with essential tokens
2. **Be Consistent** - Use consistent naming conventions
3. **Stay Semantic** - Use meaningful, purpose-driven names
4. **Document Everything** - Keep comprehensive documentation
5. **Version Control** - Track token changes over time
6. **Automate** - Use tools for token transformation
7. **Test Thoroughly** - Verify token changes across platforms
8. **Communicate Changes** - Notify teams of token updates

## Common Pitfalls

- Creating too many tokens too early
- Using non-semantic names
- Hardcoding values instead of tokens
- Poor documentation
- Inconsistent naming patterns
- Not versioning tokens
- Missing token categories

## Token Maintenance

### Regular Reviews
- Audit unused tokens
- Identify redundant tokens
- Update outdated values
- Consolidate similar tokens

### Deprecation Strategy
- Mark tokens as deprecated
- Provide migration path
- Set sunset timeline
- Remove after grace period

## Related Documentation

- [Component Variants](./component-variants.md) - Component design variations
- [Designing Best Practices](./designing-best-practices.md) - Design system best practices
- [Design System Overview](../overview.md) - Design system overview
