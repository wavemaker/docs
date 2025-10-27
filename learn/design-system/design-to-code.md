---
title: "Design to Code"
sidebar_label: "Design to Code"
---

WaveMaker brings the **Design System** concept into a **practical, visual environment** that connects design and development seamlessly.  
Here’s how the flow works end-to-end:

![design to code](/learn/assets/design-to-code-architecture.png)

### 1. Design Phase: Figma  
Designers define the base **design tokens** — colors, typography, spacing, and other style rules — directly in Figma.  
These tokens represent the visual foundation of your brand or app theme.

### 2. Automation: AutoCode Plugin  
The **AutoCode Plugin** acts as the bridge between Figma and WaveMaker.  
When you use the plugin, it:
- Extracts design tokens and component styles from Figma.  
- Converts them into **WaveMaker-readable JSON structures**.  
- Pushes those token definitions into **WaveMaker Studio** via the **“Edit in WaveMaker”** action.  

This ensures that:
- The design file from Figma is automatically translated into an **editable design system** inside WaveMaker.  
- The corresponding **JSON files** are generated and mapped correctly, so tokens can be modified within the **Style Workspace**.

### 3. Styling: WaveMaker Style Workspace  
Once imported, the **Style Workspace** becomes the central hub to manage and customize those tokens visually.  
Developers can:
- Edit colors, typography, and spacing in real time.  
- Preview all design updates instantly before applying them globally.  
- Work on top of the synchronized JSON tokens from Figma, ensuring design–code consistency.

### 4. Application: Live App UI  
After the updates are confirmed, the token changes automatically cascade across all linked components in the app.  
Every color, font, and spacing update made in Style Workspace is reflected live in the **App UI** — no manual CSS edits or repetitive style updates required.
