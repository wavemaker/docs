---
title: "Working with Style Workspace"
sidebar_label: "Style Workspace"
---


The **Style Workspace** in WaveMaker Studio is your **visual control panel** for managing and customizing your application's design.  
It allows you to modify design tokens, preview changes in real time, and maintain brand consistency across all UI components.

You can:
- Browse and edit **Global Tokens** (colors, typography, spacing, radius, shadow).  
- Expand **Components** (Button, Input, Card, etc.) to update their specific tokens.  
- Switch between **Appearances**, **Variants**, and **States** to fine-tune the visual style.

## Navigating the Style Workspace

To open the Style Workspace:
1. Open your app in **WaveMaker Studio**.  
2. Select **Style Workspace** from the left sidebar.  
3. The workspace loads **Global Tokens** by default.

> Note: Currently, Style Workspace is enabled only for Web Applications.

![](/learn/assets/enable-design-system.png)

![](/learn/assets/navigate-style-workspace-tokens.png)

### Key Navigation Areas

| Area | Description |
|------|--------------|
| **Global Tokens Panel** | Displays foundational design properties like color, font, spacing, radius, and shadows. |
| **Components Panel** | Lists all UI components (Button, Input, Card, etc.) that use tokens from the design system. |
| **Preview Area** | Shows real-time changes as you edit tokens. |
| **Appearance / Variant / State Tabs** | Allow you to define how a component looks, behaves, and adapts in different contexts. |


### Appearances, Variants, and States

| Category | Description | Example |
|-----------|--------------|----------|
| **Appearance** | Defines the overall component style. | Default, Outline |
| **Variant** | Represents the purpose or hierarchy of a component. | Primary, Secondary, Danger |
| **State** | Shows how a component responds to interaction. | Hover, Focus, Disabled |


## Editing Tokens (Color, Size, Typography)

You can edit both **Global Tokens** and **Component Tokens** directly within the Style Workspace.  
All edits are instantly reflected in the live preview.


### 1. Global Tokens

**Global Tokens** define **universal design values** used throughout your app.  
They represent the **foundation of your brand identity**, ensuring that colors, typography, spacing, radii, and shadows are consistent across all screens.

**Examples:**
- `color.primary`  
- `font.family.primary`  
- `spacing.md`  
- `border.radius.sm`  

When a global token is updated, every component that references it updates automatically.  
This keeps your app consistent while making broad design updates effortless.

#### How to Edit:
1. Expand a token group (e.g., **Colors**, **Typography**).  
2. Click on a token value (e.g., `color.primary`).  
3. Adjust it using the **color picker**, **dropdown**, or **numeric input**.  
4. The **preview area** instantly updates to reflect your changes.  


### 2. Component Tokens

**Component Tokens** apply **global styles** to specific widgets such as **Button**, **Card**, or **Input**.  
They control the look and feel of individual UI components, including background, padding, shadow, and text.

Each component token can:
- **Inherit** values from global tokens for consistency.  
- **Override** global values locally for custom styling.

This flexibility allows designers to maintain a consistent theme while giving developers control over component-level design.

#### How to Edit:
1. Expand a component accordion (e.g., **Button**).  
2. Navigate to sections like **Background**, **Typography**, **Padding**, or **Shadow**.  
3. Modify a token value.  
4. Observe real-time updates in the preview panel.


## Real-Time Preview and Live Updates

The Style Workspace offers an **interactive preview** that updates instantly as you edit.  

This allows you to:
- Validate color contrast and accessibility visually.  
- Compare component variants and states before applying changes.  
- Avoid context-switching between editing and testing.

**Tip:** Always preview changes across Light and Dark themes to ensure visual balance.


## Saving and Viewing Generated JSON

Every change made in the **Style Workspace** is automatically saved as a **JSON entry** in your project’s `overrides` folder.  
These JSON files form the **single source of truth** for all your design decisions.

**Folder Structure:**

```
src/main/webapp/design-tokens/overrides/
├── global/ → Global token definitions (colors, typography, spacing)
├── components/ → Component-specific overrides (button, card, input)
```

**Examples:**

- Editing `color.primary` updates:  
  `overrides/global/colors/color.light.json`
- Changing a **Button background** updates:  
  `overrides/components/button/button.json`

When your app is built or run, WaveMaker automatically compiles these JSON files into a CSS output:

```
src/main/webapp/design-tokens/app.override.css
```

This ensures that every token change made in the Style Workspace is **reflected in the final UI styling** without manual intervention.