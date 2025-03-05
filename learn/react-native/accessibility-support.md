---
title: "Accessibility Support in React Native Apps"
id: "accessibility-support-react-native"
sidebar_label: "Accessibility"
---
---

import accessibilityExample from '/learn/assets/react-native/accessibilityExample.mp4'

Accessibility is essential for individuals and organizations that want to create high-quality websites and applications, it enables people with disabilities to utilize different Assistive Technologies (AT) to help them use applications. Both Android and iOS have various built-in Assistive Technologies (AT), including screen readers: VoiceOver on iOS and TalkBack on Android. React Native offer APIs for integrating apps with these assistive technologies, we can utilize these APIs in WaveMaker React Native Studio to make our App more accessible and compliant with global standards.
<!-- TO DO - check if it is compliant, check the standars applicable -->
<!-- TO DO - Check this - Not includng below info because not sure if this is applicable for mobile studio
WaveMaker also focuses on enabling their product with international standards for Web Accessibility from World Wide Web Consortium (W3C), including Web Content Accessibility Guidelines (WCAG) and Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) as the first step in applying them.

## How it Works

To make components accessible, all the text on the web page must be unique, along with its captions and roles. To make it possible, we have introduced **aria-labels** attributes for all the `wm-widgets` which are configurable and certain [Role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) to identify every component as per their standard behavior. This ARIA "roles" and "attributes" will benefit the group of people using Assistive Technology Readers (ATR) to read the text and the purpose of the widget aloud to the users.

WaveMaker Accessibility enhancements will cover Web Content Accessibility Guidelines (WCAG) "A" and "AA" compliance for all non-text content, including the following.

Name Role & Value, Info & Relationships, Meaning Sequence, Sensory Characteristics, Identify Input Purpose, Non-Text Contrast, Page Titled, Headings and Labels, Label in Name, Language of Page, Status Messages, Error Prevention. -->

## Accessibility Properties

There are various **Accessibility Properties** which we can use to make our app more accessible.

### accessible

It is a boolean property, when set to `true`, the view becomes an accessibility element, grouping its children into one selectable component. By default it is `true`.

### accessibilityLabel

The `accessibilityLabel` is a property used to provide a descriptive label for UI elements, ensuring that users who rely on screen readers, such as VoiceOver on iOS or TalkBack on Android, can understand the purpose of the element. When a user selects an element, the screen reader will verbalize the `accessibilityLabel` string, offering context about the element’s function. Setting an `accessibilityLabel` is essential for accessibility, as it helps visually impaired users navigate the app more effectively.
- By default, if `Caption` prop is present for wdiget, its value will be used as `accessibilityLabel`.

<details><summary>Supported Widget</summary>

BUTTON, PICTURE, TEXT, NUMBER, TEXTAREA, SELECT, CHIPS, CURRENCY, CHECKBOX, TOGGLE, SWITCH, DATE, VIDEO, PROGRESSBAR, PROGRESSCIRCLE, LABEL, ANCHOR, MESSAGE, SEARCH, ICON, NAV, POVOVER, WEBVIEW, LINECHART, SLIDER

</details>

### accessibilityRole

The `accessibilityRole` defines the purpose of a component, helping assistive technology users understand its intended function. Refer table below to check default `accessibilityRole` values for various WaveMaker widgets.

<details><summary>Supported Widget</summary>

BUTTON, PICTURE, TEXT, NUMBER, TEXTAREA, SELECT, CURRENCY, TOGGLE, DATE, VIDEO, LABEL, ANCHOR, MESSAGE, SEARCH, ICON, NAV, POVOVER, WEBVIEW, LINECHART, SLIDER

</details> 

<details><summary>Exapnd to see all valid <strong>Accessibility Roles</strong>.</summary>

adjustable, alert, button, checkbox, combobox, header, image, imagebutton, keyboardkey, link, menu, menubar, menuitem, none, progressbar, radio, radiogroup, scrollbar, search, spinbutton, summary, switch, tab, tablist, text, timer, togglebutton, toolbar, grid

</details>

### accessibilityHint

`accessibilityHint` provides users with additional context about the outcome of an action. VoiceOver on iOS and TalkBack on Android will read this aloud after reading the `accessibilityLabel` when user navigates to the element.

<details><summary>Supported Widget</summary>

BUTTON, PICTURE, TEXT, NUMBER, TEXTAREA, SELECT, CHIPS, CURRENCY, CHECKBOX, TOGGLE, SWITCH, DATE, VIDEO, LABEL, ANCHOR, MESSAGE, SEARCH, ICON, NAV, POVOVER, WEBVIEW, LINECHART, SLIDER

</details>

<!-- TO DO - add more properties -->
- For example, on a sign-up page, sign-up button can have:
    - `accessibilityLabel` value as "Sign Up". It identifies the button's action.
    - `accessibilityRole` value as "button". It indicates that this is an actionable element.
    - `accessibilityHint` value as "Creates a new account". It explains what will happen after tapping the button.
    - When the sign-up button is selected, the user will hear: **"Sign Up, button. Creates a new account."** Here:
   
<div class="text--center">
    <video style={{width:300}} controls>
        <source src={accessibilityExample} />
    </video>
</div>

These properties work together to create a seamless experience for users of assistive technologies, helping them understand what each element does and what to expect from their interaction.

### Customizing Accessibility Properties

#### In Studio

- We can set `accessibilityHint` in stuido for the widgets which supports it. For other properties we have default values, we can customize them using script.

- Steps to add `accessibilityHint` in Studio.

1. Select the widget for which you want to set `accessibilityHint`.
2. On the right side, in its properties panel, locate "Accessibility" section. It will have a `Hint` input.
3. You can either directly add value for `accessibilityHint` in this input field or bind it to some value, by clicking on the bind-chain icon on its right side.

![Accessbility Hint Property](/learn/assets/react-native/accessibiltyHint.png)

#### Using Script
- We can customize various Accessibility Properties using script.
<!-- TO DO - if more properties are added, add code for them here -->
```js
//Use below method to customize accessibilityLabel
Page.Widgets.yourWidgetName.accessibilitylabel = "Custom Value";
//Use below method to customize accessibilityRole. Ensure that you use valid roles only.
Page.Widgets.yourWidgetName.accessibilityrole = "Custom Value";
//Use below method to customize accessibilityHint
Page.Widgets.yourWidgetName.hint = "Custom Value";
```
:::tip
<!-- is this tip neccessary? -->
There are several ways to get the name of a widget.
- In Studio, select the widget, on the right side in its properties panel there will be a `Name` property.
- You check in the Markup.
- You can use the autocomplete feature in script tab of our Studio, to get names of existing widgets.

:::

<!-- |
 Props → <hr style={{margin:0}}/> Widgets ↓ | `accessibilityLabel` | `accessibilityLabelledBy` | `accessibilityHint` | `accessibilityRole` | `accessibilityState` | `accessibilityValue` |
| ------ | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **BUTTON** | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| **PICTURE** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **TEXT** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **NUMBER** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **TEXTAREA** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SELECT** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **CHIPS** | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ |
| **CURRENCY** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| **RADIOSET** | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| **CHECKBOX** | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ |
| **TOGGLE** | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **SWITCH** | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ |
| **DATE** | ✅ | ❌ | ✅ | ✅ | ✅ | ❌ |
| **VIDEO** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **PROGRESSBAR** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **PROGRESSCIRCLE** | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| **LABEL** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **ANCHOR** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **MESSAGE** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **SEARCH** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **ICON** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **NAV** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **POVOVER** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **WEBVIEW** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **LINECHART** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ |
| **SLIDER** | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | 
-->

<!-- TO DO - add table of widgets with supported asseccibility properties -->
<!-- TO DO - check for keyboard navigation features, accessibility actions
### Keyboard Navigation

To navigate well within a form, use the **Tab Index** property from the *Properties* tab.


:::warning
For form inputs in a live form, the *hint* text will not only add an **aria-label** attribute but also a *Help Text* below the input field.
::: -->
<!-- TO DO - section to enable voiceover, talkback, brief description of features, geasture support etc . FOR USER, and FOR DEV testing -->
<!-- TO DO - check if these good practices are applicable to mobile, also add any other mobile specific good practices -->

### Good Practices

Effective use of color contrast is also an important aspect of making your app accessible.

- WCAG 2.0 level "AA" requires a contrast ratio of at least **4.5:1** for normal text and **3:1** for large text.
- WCAG 2.1 requires a contrast ratio of at least **3:1** for graphics and user interface components (such as form input borders).
- WCAG Level "AAA" requires a contrast ratio of at least **7:1** for normal text and **4.5:1** for large text.

For more information about the color contrast ratio before designing or developing any application, see [Contrast Checker](https://webaim.org/resources/contrastchecker/).


[Reference](https://reactnative.dev/docs/accessibility) 