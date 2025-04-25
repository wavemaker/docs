---
title: "More Accurate Canvas Design: Bringing WYSIWYG Closer to Reality"
author: "Pavan Dussa"
---
---

WaveMaker Studio v11.11 introduces significant enhancements to the Canvas, delivering a true **What You See Is What You Get** (WYSIWYG) experience. This update ensures that the design view in the Studio closely mirrors the live application.

## Why This Matters

The Canvas is the primary workspace where developers design and arrange UI components. Previously, inconsistencies between the Canvas and the live application led to confusion and additional adjustments. 

With the latest improvements, the design-to-preview workflow becomes more seamless, allowing developers to build interfaces with greater confidence and efficiency.


<!-- truncate -->

## Why The Change

​WaveMaker’s canvas has been thoughtfully improved to offer a more intuitive and accurate design experience. Enhancements such as better handling of long labels and full binding paths help maintain a clean layout without clutter. Default component names are now more descriptive, making it easier for developers to identify elements quickly—for example, instead of generic names like *Label1* or **Container7*, components are now labeled more meaningfully. Additionally, refinements to widget alignment and spacing ensure the canvas closely mirrors the final application layout. These updates collectively simplify the design process and boost overall usability.

## What's New in This Release

With this release, we’ve reimagined the canvas rendering engine and addressed these usability gaps:

### WYSIWYG Accuracy
The Canvas now closely mirrors the live preview of the application. Fonts, spacing, padding, and alignment are consistent between the design view and the live application.

### Better Text Handling
Text is now smartly wrapped, truncated, or resized based on the layout—eliminating overflow issues and keeping the canvas clean.

### Meaningful Component Naming
New components come with contextual, readable names, making it easier to understand and navigate your layout structure. The system analyzes the binding expressions mapped to labels and extracts semantic values to assign meaningful names.

## Examples based on the binding expression

| Binding Expression | What You See in Canvas |
| ------------------ | ---------------------- |
| Variables.EmployeList.dataset.JobTitle | JobTiltle |
| ServiceVariable.hrData.response.employees[0].department | department |
| Widgets.form1.formdata.address.zipcode |  |
| bind:CustomVariables.userProfile.settings.display.theme | zipcode |
| bind:CustomVariables.userProfile.settings.display.theme | theme |
| bind: getEmployeeName() | getEmployeeName |
| bind: <span> Hello World </span> | Hello World |


**Before Enhancement:**

![Before Visual Enhancement](/learn/assets/before-visual-enhancement.png)

**After Enhancement:**

![After Visual Enhancement](/learn/assets/after-visual-enhancement.png)

## What This Means for You

With these Canvas improvements:​

- Spend less time fixing layout inconsistencies.​
- Experience a seamless design-to-preview workflow.​
- Build user interfaces with more confidence and less back-and-forth.​

These enhancements aim to streamline your development process, making it more intuitive and efficient.

