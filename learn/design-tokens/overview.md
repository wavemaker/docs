---
id: "overview"
title: "WaveMaker Design Tokens"
sidebar_label: "Introduction to Design Tokens"
---

:::note
- This token system is **exclusive to new WAVE projects**.
- Existing hybrid or older web/native apps will continue to work as they are; and Design Tokens cannot be applied.
- In WAVE, **themes have been deprecated** in favor of **design tokens** for a modern styling approach.
:::

Design tokens in WaveMaker are a simple way to set and reuse your app’s styles—like colors, fonts, and spacing—in a centralized, structured, and reusable format. They work for both web and mobile apps and make it easier to:

- Keep your design consistent  
- Switch between themes like Light and Dark  
- Help designers and developers work better together
- Work seamlessly across React, Angular, and other frameworks
- Avoid doing the same styling work again and again  

## Design Tokens

Design tokens are core building blocks of a design system, defining values for:

- Colors
- Typography
- Spacing
- Other design properties

### Design Token Examples

#### Color Tokens

Color tokens define colors once and reuse them across all UI components.

| **Token Name**          | **Value**   | **Usage**                          |
|--------------------------|-------------|-------------------------------------|
| `color.brand.primary`    | `#007BFF`   | Primary buttons, links              |
| `color.brand.secondary`  | `#6C757D`   | Secondary buttons, cards            |
| `color.text.default`     | `#333333`   | Default text color                  |

#### Typography Tokens

Typography tokens standardize font sizes and font families throughout the application.

| **Token Name**         | **Value**             | **Usage**                        |
|-------------------------|------------------------|-----------------------------------|
| `font.family.primary`   | `'Inter', sans-serif`  | Primary font used across the UI   |


### Design Token Architecture

![Design Token Architecture](/learn/assets/design-tokens-architecture.png)


*Visual Tip: Side-by-side comparison of raw CSS vs tokenized usage can help make this clear to developers.*

---



## Global Tokens

Global tokens are used app-wide to define foundational design properties like colors, typography, spacing, and style.

![global-token menu](/learn/assets/global-token-menu.png)

### 🎨 Color Tokens

```json
color.brand.primary → #007BFF
color.brand.secondary → #6C757D
color.text.default → #333333
color.background.surface → #FFFFFF
````

### 🔤 Typography Tokens

```json
font.family.primary → 'Inter', sans-serif
font.size.sm → 12px
font.size.md → 16px
font.weight.bold → 600
```

### 📏 Sizing and Spacing Tokens

```json
spacing.sm → 8px
spacing.md → 16px
border.radius.md → 4px
```

### 📂 Location

```
global/{category}/{category}.json
Example: global/color/color.json, global/font/font.json
```

---

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

### 📂 Location

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

---

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

### 🔧 Key Features

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

---

## Summary: Why It Matters

With **Design Tokens** and **Style Workspace**, WaveMaker WAVE projects benefit from:

* 🔁 Token-based design logic for better reusability
* 🌍 Cross-platform consistency (Web + Mobile)
* 🌗 Seamless theme switching (Light/Dark)
* 👩‍💻 Better collaboration between designers and developers
* 🧠 Centralized styling logic—no more hunting through CSS!

---

Would you like:

* A **Markdown version** for developer docs?
* A **slide-ready version** for team presentations?
* Figma/visual mockups to complement this content?

Let me know, and I’ll help you deliver this beautifully!

```

Let me know if you’d like me to export it into a `.md` file or attach visuals/diagrams alongside this!
```


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

*Visual Tip: Side-by-side comparison of raw CSS vs tokenized usage can help make this clear to developers.*

---

## Why Use Design Tokens?

| Benefit                   | Description                                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| **Consistency**         | Ensures a unified design language across all screens and components       |
| **Scalability**        | Enables easy theming and brand variations (e.g., light/dark mode support) |
| **Reusability**        | Shared tokens reduce duplication and simplify updates                     |
| **Framework Agnostic** | Works across React, Angular, and React Native                             |

---

## Token Structure in WaveMaker

Design tokens in WaveMaker are organized into JSON files and split into two categories:

### Global Tokens

Used app-wide for base styles like colors, spacing, and fonts.

```
Location: global/{category}/{category}.json
Example: global/color/color.json, global/font/font.json
```

### Component Tokens

Scoped to specific UI components for fine-grained control.

```
Location: components/{component}/{component}.json
Example: components/button/button.json
```

---

## Style Dictionary Integration

WaveMaker uses [Amazon’s Style Dictionary](https://amzn.github.io/style-dictionary/) to transform design tokens into platform-specific formats.

| Output Platform | Generated Format         |
| --------------- | ------------------------ |
| Web             | CSS variables            |
| React Native    | JavaScript style objects |

Tokens are defined once in JSON, and the Style Dictionary compiles them to usable formats during build time.

*Visual Tip: Add a simple “input → output” diagram to show how JSON tokens transform into CSS/JS.*

---

## Style Workspace: Centralized Token Management

The **Style Workspace** in WaveMaker is your centralized UI for managing tokens visually.

### Key Features

* **Real-Time Editing**: Changes reflect instantly in preview
* **WYSIWYG Interface**: Edit tokens without touching code
* **Integrated Preview**: Live canvas preview of component styles
* **Token Categorization**: Easily switch between global and component scopes

*Visual Tip: Show screenshot of Style Workspace UI highlighting token selection + preview update*

---

## How It Works Behind the Scenes

When you edit tokens in the Style Workspace:

1. Changes are saved in `JSON` files under the `overrides/` directory.
2. These JSON files are used to generate `app.override.css`, which applies the customized styles to the app.








