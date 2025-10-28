---
title: "Design Token Architecture"
sidebar_label: "Design Tokens"
---

This section explains how design tokens are structured and related inside WaveMaker. It helps you understand where tokens live, what each type of token does, and how they connect from global definitions to component-level overrides to make your app look consistent, scalable, and theme-ready.


## Token Hierarchy

Design tokens in WaveMaker are organized across **three levels**:

| Level | Description | Folder Path |
|--------|--------------|--------------|
| **1. Global Tokens** | Define foundational, brand-wide styles such as colors, typography, spacing, and shadows. | `/global/{category}/{category}.json` |
| **2. Component Tokens** | Apply these global values to specific UI components (buttons, cards, inputs, etc.). | `/components/{component}/{component}.json` |
| **3. Overrides** | Store edited values and theme-specific adjustments (Light/Dark mode). | `/overrides/{theme}/{theme}.json` |

These layers cascade from **Global → Component → Overrides → App UI**.

### 1. Global Tokens: the Foundation Design

These are the master style values that define your brand’s look and feel.
They are not tied to any single component; they apply everywhere.

For example:

- Color: brand colors like #E8925C (primary) or #6C757D (secondary)
- Text: default font family ('Inter', sans-serif)
- Size / Spacing: 8px, 16px, 24px etc.
- Style: border radius or shadow depth

Think of Global Tokens as the DNA of your app’s visual design.
When you change one here (like your primary color), that change automatically affects every component that uses it.

These tokens are stored in the /global/ folder, like:

```css
global/color/color.json
global/font/font.json
```

### 2. Component Tokens: the Applied Layer

Component Tokens use the global tokens and apply them to actual UI elements like buttons, cards, or text fields.

They define how each component should look —
for example, what color a button uses for its background, text, or border.

Example:

- Button Primary → background color = {color.brand.primary}
- Button Text → text color = {color.text.inverse}
- Card Header → background color = {color.surface.container}
- This means if your global color changes, these component styles automatically update too.

These tokens live in the /components/ folder:

```css
components/button/button.json
components/card/card.json
```

:::note
Components in WaveMaker can have [Variants](/learn/design-system/component-variants), which define different visual styles of the same component.  
Component Tokens exist at two levels:
- **Component Level:** Define common properties shared by all variants (for example, typography, padding, or default color).  
- **Variant Level:** Define more specific visual treatments for each style variation of the component.  

For example, the **Button** component includes multiple variants such as:
- **Filled Button:** Uses a solid background for high emphasis actions.  
- **Outlined Button:** Displays a border with a transparent background for medium emphasis.  
- **Text-only Button:** Removes the fill and border for minimal emphasis actions.  

Each variant inherits core values from the component tokens while applying unique styling for background, border, and text color.  
This structure allows you to maintain consistency across all button types while enabling clear visual hierarchy within your design system.
:::

### 3. Overrides: the Flexible Layer

Overrides are edits or theme variations that you make in the Style Workspace (like switching to dark mode or customizing for a specific app).

When you change something visually; say, make buttons darker in Dark Mode, WaveMaker doesn’t overwrite your global or component files. Instead, it saves those changes as overrides:

```css
overrides/light.json
overrides/dark.json
```

So, your base design system stays safe, and your app just “adds” the override values on top of it.

## How They All Connects

- Define your brand foundation in Global Tokens.
- Components like buttons, cards, and inputs use those global values through Component Tokens.
- Visual changes or theme updates (such as Light/Dark or custom themes) are stored as Overrides.
- The App UI displays everything using this combined token system.

A single change at the top, like updating the global primary color, flows down through all components and applies across your app automatically, keeping everything consistent and up to date.
