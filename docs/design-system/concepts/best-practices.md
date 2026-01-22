---
title: "Designing Best Practices"
sidebar_label: "Designing Best Practices"
---


### Use Consistent, Semantic Naming Conventions

- Follow a structured hierarchy such as: `category.component.role.state`

Example: `color.button.primary.hover`
- Use semantic names that describe intent, not literal values.  
- Preferred: `color.text.primary`  
- Avoid: `color.blue-500`
- Maintain stable naming conventions and update token names only when their role or intent changes.

Carbon and Material Design systems both emphasize structured, purpose-driven naming for scalability.

### Keep the Global Token Set Minimal and Abstract
- Global tokens should define brand identity and core foundations such as:
- Colors  
- Spacing  
- Typography  
- Radius  
- Shadows
- Avoid embedding component-specific tokens (like button colors) at the global level.  
- Limit the total number of global tokens to only what’s necessary for cross-component reuse.

Carbon recommends clear separation of core versus component tokens to avoid bloat.

### Define a Clear Token Hierarchy
- Establish a hierarchy such as:  
Global → Alias (Semantic) → Component → State

- Component tokens should reference semantic tokens, not raw color or spacing values.  
- Document token inheritance so updates cascade predictably across the system.

Material Design’s token architecture encourages layered abstraction to preserve theme flexibility.

### Separate Variants from States
- Treat variants (e.g., filled, outlined, text) as visual types.  
- Treat states (e.g., default, hover, pressed, disabled) as interaction modes.  
- Keep state styling consistent across all variants to maintain accessibility and predictability.  
- Document the difference clearly to avoid confusion during design handoffs.

### Test All Changes in Preview Before Publishing
- Always validate token and variant changes before applying them globally.  
- Use preview or staging environments to confirm updates visually.  
- Check:
- Light and dark theme behavior  
- Accessibility contrast ratios  
- Cross-component visual consistency

Material Design emphasizes testing in context since tokens are foundational design decisions.

### Keep Figma and Style Workspace in Sync
- Regularly sync design tokens from Figma to the Style Workspace to prevent drift.  
- Ensure both tools reflect the same JSON schema and naming conventions.  
- Re-generate and apply outputs (CSS/JSON) after each update to maintain parity across design and code.

## Document Usage and Intent for Every Token and Component
- Each token should specify:
- What it controls  
- Where it’s applied  
- Its intended purpose
- Document component variants with their respective states and platform mappings.  
- Maintain a changelog or version history to track major updates.

Carbon’s v11 migration and Material’s component documentation both model transparent evolution and change tracking.

### Support Theming and Platform-Agnostic Outputs
- Define tokens to work across multiple platforms such as Web, Android, iOS, and Desktop.  
- Avoid hard-coded color or spacing values outside tokens.  
- Use the Style Dictionary pipeline to generate CSS, JSON, or SCSS outputs for consistent integration.

Both Carbon and Material treat tokens as the single source of truth for cross-platform theming.

### Audit and Refactor Periodically
- Remove unused or redundant tokens regularly.  
- Validate accessibility, including contrast and focus states, during each audit.  
- Align audit cycles with release milestones to keep the design system lean and maintainable.
