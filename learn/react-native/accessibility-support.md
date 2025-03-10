---
title: "Accessibility Support in React Native Apps"
id: "accessibility-support-react-native"
sidebar_label: "Accessibility"
---
---

import accessibilityExample from '/learn/assets/react-native/accessibilityExample.mp4'

Accessibility ensures that mobile applications can be used by everyone, including individuals with disabilities. It improves the overall user experience by allowing users to interact with the app using assistive technologies like screen readers.

By making your app accessible, you not only comply with accessibility standards but also improve the overall user experience.

## Accessibility in WaveMaker React Native Apps

WaveMaker provides built-in accessibility support for mobile apps built using its studio. No additional configuration is required to make your app accessible.

WaveMaker utilizes the built-in assistive technologies of Android and iOS, like screen readers (**TalkBack** on *Android*, **VoiceOver** on *iOS*) to make the apps accessible. It automatically uses widget properties like `Caption` to make them accessible.

For example:
- If you have a Sign Up button with the caption `"Sign Up"`:
   - When the screen reader is on, it will read aloud: **Sign Up, button**

This default behavior ensures that basic accessibility support is provided without requiring any manual configuration.

## Adding Additional Context Using Hint

In some cases, the default accessibility properties may not provide enough context to users. For example, a **Submit** button might say: 
- **"Submit, button"**
But it may not explain what it will submit. To provide additional context, you can use the **Hint** property.

The **Hint** property allows you to provide additional information to the user about an action or widget when its caption, role, etc., are not enough.

For example: in above Sign Up button, we can add
- **Hint** : `Creates a new account`
So, now screen reader will read **Sign Up, button. Creates a new account.**.

<div class="text--center">
    <video style={{width:300}} controls>
        <source src={accessibilityExample} />
    </video>
</div>

## How to Set Accessibility Hint in Studio

To add a **Hint** for a widget:

1. **Select the widget** in the studio canvas.
2. On the right side, in the **Properties Panel**, navigate to the **Accessibility** section.
3. You will see an input field labeled **Hint**.
4. **Add your Hint value** in this input field. Alternatively, you can bind it to a variable by clicking the bind-chain icon on its right side.

This Hint will now be read aloud by the screen reader when the user focuses on the widget.

![Accessbility Hint Property](/learn/assets/react-native/accessibiltyHint.png)

That's it! With built-in accessibility and easy-to-configure **Hint** property, WaveMaker ensures that your mobile apps are accessible to a broader audience without complex configurations.

## Good Practices

1. Use Clear and Descriptive Captions
    - Always provide clear and meaningful captions for buttons, labels, and other interactive elements.
    - Avoid using generic captions like "Click here" or "Submit" without context.
    - Example: "Click here" ❌, "Sign Up for Newsletter" ✅

2. Provide Hints for Better Context
    - Use the Hint property when the caption alone doesn’t provide enough context.
    - This is especially useful for form fields, buttons, or complex interactive elements.
    - Example: **Caption**: "Pay Now", **Hint**: "Completes your payment for order #12345"

3. Avoid Using Only Colors to Convey Information
    - Do not rely solely on color to indicate states like error, success, warning, etc.
    - Example:
        - Showing only a red border for errors. ❌
        - Adding an error message like "Invalid email address" along with the red border. ✅

4. Maintain Sufficient Color Contrast
    - Ensure that text and background colors have enough contrast.
    - The recommended contrast ratio is: **4.5:1** for normal text & **3:1** for large text (headings, buttons, etc.).
    - You can test contrast using free tools like [Contrast Checker](https://webaim.org/resources/contrastchecker/).

5. Maintain Logical Focus Order
    - Ensure the focus order (when navigating via screen reader) is logical and predictable.
    - Example:
        - Focus should move from Top to Bottom and Left to Right.
        - Avoid random or confusing focus jumps.
