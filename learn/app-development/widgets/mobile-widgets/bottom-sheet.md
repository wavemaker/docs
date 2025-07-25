---
title: "Bottom Sheet"
id: "bottom-sheet"
sidebar_label: "Bottom Sheet"
---

A **Bottom Sheet** is a sliding panel that emerges from the bottom of the screen, commonly used to show additional content or user actions without leaving the current context.

It’s ideal for use cases like:
- Filters
- Shopping carts
- Media controls
- Map details
- Quick actions

![Bottom Sheet Widget](/learn/assets/release-notes/bottomSheetDemo-11-11-5.gif)

---

## Features

- **Tap Outside to Close**  
  Automatically dismisses the bottom sheet when the user taps outside its boundaries.

- **Swipe Down to Dismiss**  
  Enables a natural swipe-down gesture to close the bottom sheet.

- **Swipe Up to Expand**  
  Allows the user to expand the sheet to a larger height via an upward swipe.

- **Smooth Open/Close Animations**  
  Offers fluid transition animations for an enhanced user experience.

---

## Props

| Properties | Type | Description |
|---------------------------------|----------|-----------------------------------------------------------------------------|
| **Bottom Sheet Height Ratio** | `number` | Sets the initial height as a ratio (0 to 1) of the screen height.<br/>Example: `0.3` means 30%. |
| **Show On Render** | `boolean`| If `true`, the sheet opens automatically on page load.                      |
| **Expand** | `boolean`| Enables expansion on swipe-up, if set to `true`.                                |
| **Bottom Sheet Expanded Height Ratio** | `number` | Sets the height for Bottom Sheet in expanded form. |

---

## Callback Events

| Event     | Description                          |
|--------------|--------------------------------------|
| **On Open** | Triggered when the bottom sheet is opened.  |
| **On Close** | Triggered when the bottom sheet is closed.  |

---

## Methods

Below methods are available for Bottom Sheet widget.

- `open()` - Opens the bottom sheet.

- `close()` - Closes the bottom sheet.

These methods on Bottom Sheet widget can be triggered by selecting as *Tap Events* for other supported widgets like *Button*.
You can also call them on Bottom Sheet widgets in Script tab.
Example

```js
Page.Widgets.bottomsheet1.open();
```

---

This widget provides a modern, mobile-friendly way to present additional content without navigating away from the current view.