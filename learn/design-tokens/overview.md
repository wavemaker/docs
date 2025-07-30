---
id: "overview"
title: "Design Tokens Style Workspace"
sidebar_label: "Introduction to Design Tokens"
---

Design tokens in WaveMaker let you define and reuse styles like colors, fonts, and spacing in one place, making it easy to keep your app consistent, theme-ready, and developer-friendly across web and mobile.

Tokens are defined and can be applied to the overall theme and individual components, allowing you to visually preview how they will appear in your app.

![](/learn/assets/style-workspace-visual-edit.png)

### Design Token Examples

#### Color Tokens

Color tokens define colors once and reuse them across all UI components.

| **Token Name**          | **Value**   | **Usage**                          |
|--------------------------|-------------|-------------------------------------|
| `color.brand.primary`    | `#007BFF`   | Primary buttons, links              |
| `color.brand.secondary`  | `#6C757D`   | Secondary buttons, cards            |
| `color.text.default`     | `#333333`   | Default text color                  |


![Design Token Architecture](/learn/assets/design-tokens-architecture.png)

*Visual Tip: Side-by-side comparison of raw CSS vs tokenized usage can help make this clear to developers.*

#### Typography Tokens

Typography tokens standardize font sizes and font families throughout the application.

| **Token Name**         | **Value**             | **Usage**                        |
|-------------------------|------------------------|-----------------------------------|
| `font.family.primary`   | `'Inter', sans-serif`  | Primary font used across the UI   |






## Global Tokens

Global tokens are used app-wide to define foundational design properties like colors, typography, spacing, and style.

![global-token menu](/learn/assets/global-token-menu.png)

### Color Tokens

```json
color.brand.primary → #007BFF
color.brand.secondary → #6C757D
color.text.default → #333333
color.background.surface → #FFFFFF
```

### Typography Tokens

```json
font.family.primary → 'Inter', sans-serif
font.size.sm → 12px
font.size.md → 16px
font.weight.bold → 600
```

### Sizing and Spacing Tokens

```json
spacing.sm → 8px
spacing.md → 16px
border.radius.md → 4px
```

### Location

```
global/{category}/{category}.json
Example: global/color/color.json, global/font/font.json
```

:::note
- This token system is **exclusive to new WAVE projects**.
- Existing hybrid or older web/native apps will continue to work as they are; and Design Tokens cannot be applied.
- In WAVE, **themes have been deprecated** in favor of **design tokens** for a modern styling approach.
:::

## Component Tokens

Component tokens offer granular styling control for specific components like buttons, cards, inputs, etc.

### Example: Button Tokens

```json
button.primary.background → color.brand.primary
button.primary.text.color → color.text.inverse
button.padding → spacing.md
```

### Example: Card Tokens

```json
card.border.color → color.border.light
card.padding → spacing.md
card.shadow → shadow.md
```

### Location

```
components/{component}/{component}.json
Example: components/button/button.json
```

---

## Light Mode and Dark Mode

Design tokens make it easy to support **themes** like light and dark mode.

* Store overrides in `/themes/overrides/light.json` and `dark.json`
* Use tokens like:

```json
color.mode.background → #FFFFFF / #1A1A1A
color.mode.text → #333333 / #F5F5F5
```

* Style Workspace allows switching and editing these visually.

## Token Categorization

Design tokens are categorized into two main types and stored as a JSON file:

- **Global Tokens** – Used across the app for a consistent design system.
    - Stored in: `global/{category}/{category}.json`
    - Example: `global/color/color.json, global/font/font.json`

- **Component Tokens** – Specific to individual components, offering granular control.
    - Stored in: `components/{component}/{component}.json`
    - Example: `components/button/button.json, components/card/card.json`

## Tokens & Style Dictionary

The default WM app gets all styles and design tokens from a single source called Foundation CSS
The design tokens are maintained as JSON files that define colors, spacing, typography, and other design properties.
Amazon Style Dictionary, an open source tool is used to generate platform-specific files from these JSON files:
✔ For Web – the o/p is a CSS file containing CSS variables.
✔ For React Native – the o/p is a JavaScript object used in styling.
With Style dictionary, the design tokens can be maintained in a platform agnostic way and can be edited in a more WISYWIG approach (explained below later).

## Style Dictionary Integration

WaveMaker uses [Amazon’s Style Dictionary](https://amzn.github.io/style-dictionary/) to transform JSON token definitions into platform-specific styles.

| Output Platform | Generated Format         |
| --------------- | ------------------------ |
| Web             | CSS variables            |
| React Native    | JavaScript style objects |

*Visual Tip: Add a simple “input → output” diagram to show how JSON tokens transform into CSS/JS.*

---

## Style Workspace: Centralized Token Management

The **Style Workspace** in WaveMaker is your centralized visual interface to manage and preview token changes.

### Key Features

* **Real-Time Editing** with live component preview
* **WYSIWYG Interface** for designers and devs
* **Global vs Component View** toggle
* **Canvas-Based Preview** similar to Page Workspace

### Behind the Scenes

1. Changes are saved to `overrides/` as JSON.
2. WaveMaker generates `app.override.css`.
3. Tokens apply automatically across components and pages.

---

## How-To Scenarios

| Scenario                 | Action                                                       |
| ------------------------ | ------------------------------------------------------------ |
| Change primary color  | Update `color.brand.primary` in Style Workspace              |
| Adjust card padding   | Modify `card.padding` token in component JSON                |
| Add dark mode         | Create `dark.json` in `overrides/`, update relevant tokens   |
| Change app font       | Modify `font.family.primary` in global tokens                |
| Create spacing scale | Define `spacing.sm`, `spacing.md`, etc. in `global/spacing/` |

Use Style Workspace for live editing and validation.

---

## Variants: Creating Custom Variants for Components

WaveMaker also supports defining **component variants** using design tokens.

### Why Variants?

Variants help define consistent **visual styles** (like `primary`, `secondary`, `outlined`, etc.) for components using token values, not extra CSS classes.

### Example: Button Variants

```json
{
  "button": {
    "primary": {
      "background": "{color.brand.primary}",
      "text.color": "#FFFFFF"
    },
    "secondary": {
      "background": "{color.brand.secondary}",
      "text.color": "#000000"
    },
    "outlined": {
      "border.color": "{color.brand.primary}",
      "background": "transparent",
      "text.color": "{color.brand.primary}"
    }
  }
}
```

### Where It's Stored

```
components/button/button.json
```

Variants allow design flexibility without rewriting or duplicating styles and can be selected in Style Workspace → Component → Variants.


#### Color Tokens

Used for defining brand and functional colors across the UI.

```
color.brand.primary → #007BFF
color.brand.secondary → #6C757D
color.text.default → #333333
```

#### Typography Tokens

Used for font styles and sizes.

```
font.family.primary → 'Inter', sans-serif
font.size.md → 16px
```



