---
title: "Accesibility Testing"
sidebar_label: "Accesibility Testing"
id: "react-native-accesibility-testing"
---
---

## Accessibility Testing Strategy for WaveMaker Applications

We perform accessibility testing for WaveMaker mobile applications using both BrowserStack and locally.
The process includes:

- Inspecting and verifying accessibility compliance across different devices and screen readers.
- Testing using BrowserStack accessibility tools and local emulator/simulator setups.
- Validating key aspects such as screen reader compatibility, keyboard navigation etc
- Reporting any accessibility issues or failures to the development team for resolution.
- This helps ensure our applications are inclusive and usable by all users, in alignment with accessibility guidelines like WCAG.

## How to Set Accessibility Hint in Studio

To add a **Hint** for a widget:

1. **Select the widget** in the Studio canvas.
2. On the right side, in the **Properties Panel**, navigate to the **Accessibility** section.
3. You will see an input field labeled **Hint**.
4. **Add your Hint value** in this input field. Alternatively, you can bind it to a variable by clicking the bind-chain icon on its right side.

This Hint will now be read aloud by the screen reader when the user focuses on the widget.

![Accessbility Hint Property](/learn/assets/react-native/accessibiltyHint.png)

For more details, Please refer [Accessibility in WaveMaker](/learn/react-native/accessibility-support.md)

*Reference Video*
<https://drive.google.com/file/d/1Tezr1WQ68PZhMFmW-rKdi07K9wpUtJTc/view>
