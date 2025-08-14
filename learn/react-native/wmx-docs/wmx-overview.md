---
title: "WMX Widgets"
id: "wmx-overview"
sidebar_label: "WMX Widgets"
---
---

import wmxOverview from '/learn/assets/react-native/wmx/wmx-overview.png'

## Introduction

WMX Widgets (WaveMaker Extension Widget) lets you integrate your own custom **React Native components** into a WaveMaker application while still enjoying all the features of native WaveMaker widgets.  

They act as a **wrapper** around your component, enabling you to leverage all the built-in WaveMaker widget capabilities — including property binding, script access, theme styling, and design token support — while still having full control over the component’s internal React Native code.

<img src={wmxOverview} style={{width:'100%', maxWidth:'500px'}}/>

---

## Why WMX Widgets Exist
WaveMaker comes with a wide range of ready-to-use widgets, but sometimes you need something highly specific like a unique UI element, an uncommon visual style, or a specialized interactive feature.  

WMX Widgets allow developers to:
- Bring in **custom-built React Native components**.
- Use these components with **WaveMaker’s widget features** like property binding, event handling, theming, and scripting.
- Avoid workarounds — the component is first-class in your app.

---

## Key Benifits
- **Script Access** – Your widget can be accessed via `Page.Widgets.<componentName>`.
- **Configurable Props** – Any props you define in your component’s metadata (`wmx.json`) appear in Studio for easy configuration.
- **Two-Way Binding** – Props can be dynamically bound to values in your app, and vice versa.
- **Styling Support** – Works with theme, app, and page-level styles.
- **Design Token Compatibility** – Fully supports WaveMaker’s design tokens.
- **WavePulse** – Supports debugging using WavePulse.
- **Lightweight** – Minimal wrapper overhead for maximum performance.

---

## Custom Component Structure
To create a WMX Widget, you first define your **custom React Native component** in: `src/main/webapp/extensions/components/src`

Your component must have **two required files**:

1. **`index.tsx`**  
   - Must have a **default export** exporting your React Native component.

2. **`wmx.json`**  
   - Defines the widget’s metadata, including:
     - Display name and description.
     - Props and their types.
     - Default values.
     - Bindable properties.

This custom component is then **automatically wrapped** by a WMX Widget, which makes it a fully functional WaveMaker widget, with property binding, script access, and styling features.

---

## Quick Workflow
1. Export your project from Studio.
2. Set up **Project Sync** with your IDE.
3. Create your component in `src/main/webapp/extensions/components/src` with the required files.
4. Build & push changes back to Studio.
5. Drag and use your custom widget from the **WMX Widgets** panel in Studio.

---

## Limitations

- **No Studio Rendering:** WMX Widgets do not render their actual UI in WaveMaker Studio; a placeholder is shown on the Canvas.
- **No Drop-in Containers:** Cannot be used to create container widgets that accept child components (e.g., Tabs, Accordions, Layout Containers).
- **No Form Integration:** Cannot be added inside WaveMaker forms or used as form fields.
- **Framework-Specific:** Built with React Native and not portable to apps using other frameworks (e.g., Angular, React Web, Lynx).


