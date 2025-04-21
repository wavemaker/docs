---
title: "A More Accurate Canvas: Bringing WYSIWYG Closer to Reality"
author: "Pavan Dussa"
---
---

Starting release v11.11, we’ve significantly enhanced the WaveMaker Studio Canvas to provide a true WYSIWYG (What You See Is What You Get) experience—making what you design in the studio visually match what your end users see in the live application.

## Why This Matters
The canvas is where your application comes to life. It's the space where developers design, position, and style UI components. But when the canvas doesn't reflect the actual output, it creates a gap—leading to confusion, extra adjustments, and more test cycles.

We’ve closed that gap.


<!-- truncate -->

## The Challenges We Faced

​WaveMaker's canvas experience faced challenges that hindered intuitive design:​

**Text Overflow:** Long labels and full binding paths (e.g., Variables.employeesList.dataset.JobTitle) disrupted layouts and added visual clutter.​

**Unintuitive Component Names:** Default names like Label1 or Container7 lacked context, making layout structures hard to interpret.​

**Broken Layouts:** Misaligned widgets, overlapping elements, and inconsistent spacing led to a cluttered canvas that didn't accurately reflect the actual preview.

## What's New in This Release

With this release, we’ve reimagined the canvas rendering engine and addressed these usability gaps:

### WYSIWYG Accuracy
The canvas now closely mirrors the live preview of the application—what you design is what you get. Fonts, spacing, padding, alignment—it all matches.

### Better Text Handling
Text is now smartly wrapped, truncated, or resized based on the layout—eliminating overflow issues and keeping the canvas clean.

### Meaningful Component Naming
New components come with contextual, readable names, making it easier to understand and navigate your layout structure. The analyze the binding expression mapped to the label & extract the semantic value out of it.

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

## What This Means for You

With these canvas improvements:
- You spend less time fixing layout inconsistencies
- Your design-to-preview workflow becomes seamless
- You can build UIs with more confidence and less back-and-forth

