# Component Variants

Understanding and implementing component variations in design systems.

## What are Component Variants?

Component variants are different versions of a component that serve similar purposes but differ in appearance, behavior, or context. Variants help maintain consistency while providing flexibility.

## Types of Component Variants

### Visual Variants

#### Size Variants
Different sizes for the same component:
- Extra Small (xs)
- Small (sm)
- Medium (md) - default
- Large (lg)
- Extra Large (xl)

Example: Button Sizes
```jsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

#### Color Variants
Different color schemes:
- Primary
- Secondary
- Success
- Warning
- Danger/Error
- Info
- Light
- Dark

Example: Alert Variants
```jsx
<Alert variant="success">Success message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="error">Error message</Alert>
<Alert variant="info">Info message</Alert>
```

#### Style Variants
Different visual treatments:
- Solid/Filled
- Outlined
- Ghost/Text
- Link
- Subtle

Example: Button Styles
```jsx
<Button variant="solid">Solid Button</Button>
<Button variant="outlined">Outlined Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="link">Link Button</Button>
```

### Behavioral Variants

#### State Variants
Component states:
- Default
- Hover
- Active
- Focus
- Disabled
- Loading
- Error

#### Interaction Variants
Different interaction patterns:
- Clickable
- Draggable
- Expandable
- Collapsible
- Toggleable

### Structural Variants

#### Layout Variants
Different layouts:
- Horizontal
- Vertical
- Grid
- Stacked

Example: Card Layouts
```jsx
<Card layout="horizontal" />
<Card layout="vertical" />
<Card layout="grid" />
```

#### Density Variants
Different spacing densities:
- Compact
- Comfortable
- Spacious

## Defining Variants

### Variant Properties

#### Props-based Variants
```typescript
interface ButtonProps {
  variant?: 'solid' | 'outlined' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  disabled?: boolean;
  loading?: boolean;
}
```

#### Modifier Classes
```css
/* Base button */
.button { }

/* Size variants */
.button--sm { }
.button--md { }
.button--lg { }

/* Style variants */
.button--solid { }
.button--outlined { }
.button--ghost { }

/* Color variants */
.button--primary { }
.button--secondary { }
```

### Variant Combinations

#### Compatible Combinations
```jsx
<Button size="lg" variant="solid" color="primary" />
<Button size="sm" variant="outlined" color="secondary" />
```

#### Restricted Combinations
Document which combinations are not allowed:
- Ghost buttons may not support all color variants
- Extra small sizes may not work with certain icons
- Loading state may override certain style variants

## Variant Design Guidelines

### Consistency Rules

1. **Visual Hierarchy**
   - Maintain clear visual hierarchy across variants
   - Primary actions should always be most prominent
   - Ensure sufficient contrast in all variants

2. **Proportional Scaling**
   - Scale all elements proportionally
   - Maintain aspect ratios
   - Keep visual balance

3. **Spacing Consistency**
   - Use token-based spacing
   - Maintain consistent padding ratios
   - Align to spacing grid

### Accessibility Considerations

1. **Color Variants**
   - Ensure WCAG AA/AAA compliance
   - Don't rely on color alone
   - Provide alternative indicators

2. **Size Variants**
   - Maintain minimum touch targets (44x44px)
   - Ensure readable text at all sizes
   - Keep adequate spacing

3. **State Variants**
   - Clear focus indicators
   - Disabled states must be distinguishable
   - Loading states should be announced

## Variant Documentation

### Document Each Variant

#### Variant Name and Purpose
```markdown
## Outlined Variant
Use the outlined variant for secondary actions or when you need
a less prominent visual treatment.
```

#### Visual Examples
Show all variants side by side with live examples.

#### Usage Guidelines
```markdown
### When to Use
- Secondary actions
- Tertiary navigation
- Less prominent CTAs

### When Not to Use
- Primary actions
- High-emphasis interactions
- Critical alerts
```

#### Code Examples
```jsx
// Basic usage
<Button variant="outlined">Secondary Action</Button>

// With size
<Button variant="outlined" size="lg">Large Secondary</Button>

// With color
<Button variant="outlined" color="secondary">Custom Color</Button>
```

## Implementation Patterns

### CSS-based Variants

```css
/* Base component */
.button {
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
}

/* Size variants */
.button--sm {
  padding: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.button--lg {
  padding: var(--spacing-lg);
  font-size: var(--font-size-lg);
}

/* Style variants */
.button--outlined {
  background: transparent;
  border: 1px solid currentColor;
}

.button--ghost {
  background: transparent;
  border: none;
}
```

### JavaScript/React Variants

```typescript
const Button = ({
  variant = 'solid',
  size = 'md',
  color = 'primary',
  children
}: ButtonProps) => {
  const classes = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    `button--${color}`
  ].join(' ');

  return <button className={classes}>{children}</button>;
};
```

### Styled Components Variants

```typescript
const Button = styled.button<ButtonProps>`
  ${({ size }) => sizes[size]}
  ${({ variant }) => variants[variant]}
  ${({ color }) => colors[color]}
`;
```

## Variant Naming Conventions

### Clear and Descriptive
- ✅ `variant="outlined"`
- ❌ `variant="type2"`

### Consistent Terminology
Use the same terms across all components:
- Size: xs, sm, md, lg, xl
- Color: primary, secondary, success, warning, danger
- Style: solid, outlined, ghost

### Semantic Names
- ✅ `color="primary"`
- ❌ `color="blue"`

## Testing Variants

### Visual Regression Testing
Test all variant combinations to ensure:
- Consistent rendering
- No visual regressions
- Proper spacing and alignment

### Accessibility Testing
- Color contrast for all color variants
- Focus states for all interactive variants
- Screen reader compatibility

### Responsive Testing
- All size variants on different screen sizes
- Layout variants on mobile/tablet/desktop
- Touch target sizes on mobile

## Common Variant Patterns

### Button Variants
- Primary, Secondary, Tertiary
- Solid, Outlined, Ghost
- Small, Medium, Large

### Input Variants
- Default, Filled, Outlined
- Small, Medium, Large
- Success, Error, Warning states

### Card Variants
- Elevated, Outlined, Filled
- Horizontal, Vertical
- Compact, Comfortable

### Alert Variants
- Info, Success, Warning, Error
- Inline, Banner, Toast
- Dismissible, Persistent

## Best Practices

1. **Start with Essential Variants**
   - Don't create variants "just in case"
   - Base on actual design needs
   - Add variants as needed

2. **Maintain Consistency**
   - Use same variant names across components
   - Apply consistent styling patterns
   - Follow established conventions

3. **Document Thoroughly**
   - Provide usage guidelines
   - Show visual examples
   - Include do's and don'ts

4. **Test Combinations**
   - Test all valid combinations
   - Document invalid combinations
   - Handle edge cases gracefully

5. **Consider Accessibility**
   - Ensure WCAG compliance
   - Test with assistive technologies
   - Provide alternative indicators

6. **Version Carefully**
   - Track variant additions/removals
   - Deprecate variants properly
   - Provide migration guides

## Related Documentation

- [Design Tokens](./Design%20Tokens.md) - Design token system
- [Designing Best Practices](./Designing%20Best%20Practices.md) - Design system best practices
- [Design System Overview](../overview.md) - Design system overview
