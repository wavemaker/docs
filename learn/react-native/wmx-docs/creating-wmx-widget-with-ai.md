---
title: "Creating WMX Widget with AI"
id: "creating-wmx-widget-with-ai"
sidebar_label: "Create WMX Widget with AI"
---
---

import colorpicker from '/learn/assets/react-native/wmx/colorpicker.mp4'
import reservation from '/learn/assets/react-native/wmx/reservation.mp4'

WMX Widgets are designed to work seamlessly with AI-assisted coding tools, making it faster and easier to develop, refine, and integrate custom widgets into your WaveMaker App.  
This guide demonstrates how AI can help you create WMX widgets quickly and efficiently.  

Instructions about widget structure are already provided in your project at:  `src/main/webapp/extensions/components/src/readme.md`  
So, when working with AI tools, you can skip boilerplate details and focus directly on building your custom component.

In the following examples, we’ll use **Cursor**, but you can use any preferred AI tool.

---

## Quick Workflow

The general workflow for generating WMX widgets using AI tools like Cursor is:

1. Complete your [local setup](./local-dev-setup).  
2. Open the project in **Cursor**.  
3. In the AI Assistant panel, switch to **Agent** mode and provide your prompt.  
4. Cursor will attempt to:
   - Generate the WMX widget,  
   - Run required commands,  
   - Fix any errors interactively.  
5. Review the generated code carefully and make fixes if required (via Cursor or manually).  
6. Once verified, push your changes.

---

## Examples

### Example 1: Color Picker Widget  
Create a flexible, feature-rich color picker using the `reanimated-color-picker` library.  

**Prompt:**  
```
create a WMX widget to use the reanimated-color-picker library
```
<video 
  src={colorpicker} 
  controls 
  preload="metadata" 
  style={{ maxWidth: "100%", borderRadius: "12px" }}
/>

---

### Example 2: Restaurant Reservation Widget  
Generate a reservation component directly from a UI design image.  

**Prompt:**  
```
create a WMX widget for this UI
```

<video 
  src={reservation} 
  controls 
  preload="metadata" 
  style={{ maxWidth: "100%", borderRadius: "12px" }}
/>

---

## Best Practices

### Prompt Engineering
- **Be specific**: Include exact library names, desired features, and expected behavior
- **Provide context**: Share UI mockups, requirements, or existing code when relevant
- **Iterate incrementally**: Start with basic functionality, then add features progressively

### Code Review Guidelines
- **Always review AI-generated code** before deployment
- **Test thoroughly**: AI can introduce subtle bugs or edge cases
- **Verify dependencies**: Ensure all imported libraries are properly configured
- **Check accessibility**: Validate that widgets meet accessibility standards

## Troubleshooting Common Issues

### Dependency Problems
If the AI suggests libraries not available in your environment:
- Ask it to provide alternative implementations
- Request vanilla JavaScript solutions
- Specify your available library constraints upfront

### Structure Compliance
If generated widgets don't follow WMX standards:
- Reference the readme file at `src/main/webapp/extensions/components/src/readme.md`
- Ask the AI to restructure according to WMX requirements
- Validate against existing working widgets in your project

:::warning Important Reminder
Always carefully review and test AI-generated code before deploying to production. While AI tools are powerful, they can make mistakes or miss edge cases that require human oversight.
:::
