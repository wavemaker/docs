---
title: "Creating WMX Widget with AI tools like Cursor, Github Copilot"
id: "creating-wmx-widget-with-ai"
sidebar_label: "Create WMX Widget with AI Tools"
---
---

import wmxColorPicker from '/learn/assets/react-native/wmx/wmxColorPicker.png'
import wmxSeatReservation from '/learn/assets/react-native/wmx/wmxSeatReservation.png'

WMX Widgets are designed to work seamlessly with AI-assisted coding tools, making it faster and easier to develop, refine, and integrate custom widgets into your WaveMaker App. This guide demonstrates how AI can help you create WMX widgets quickly and efficiently.  

Instructions about widget structure are already provided in your project at: `src/main/webapp/extensions/components/src/readme.md`. So, when working with AI tools, you can skip boilerplate details and focus directly on building your custom component.

In the following examples, we’ll use **[Cursor](https://cursor.com/)**, but you can use any preferred AI tool.

## Steps to create WMX widgets using AI tools

1. Complete your [local setup](./local-dev-setup).  
2. Open the project in **Cursor**.  
3. In the AI Assistant panel, switch to **Agent** mode and provide your prompt.  
4. Cursor will attempt to:
   - Generate the WMX widget,  
   - Run required commands,  
   - Fix any errors interactively.  
5. Review the generated code carefully and make fixes if required (via Cursor or manually).  
6. Once verified, push your changes.

## Examples

### Example 1: Text-to-Widget Generation

Building a Color Picker widget with [`reanimated-color-picker`](https://www.npmjs.com/package/reanimated-color-picker) using AI.

<img src={wmxColorPicker} alt="Color Picker Screenshot" style={{width:"100%",maxWidth:"250px"}} />

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 10
    }}
    src="https://embed.app.guidde.com/playbooks/kwTyDiDGYA4j92dPQHfaiU?mode=videoOnly"
    title="Create WMX Widgets Using AI"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

### Example 2: Image-to-Widget Generation

Using AI to convert a UI mockup into a functional Seat Reservation widget.

<img src={wmxSeatReservation} alt="Seat Reservation UI Screenshot" style={{width:"100%",maxWidth:"250px"}} />

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0,
      borderRadius: 10
    }}
    src="https://embed.app.guidde.com/playbooks/qh4G3iYsBV25QMzUbYWdfa?mode=videoOnly"
    title="WMX Widget using AI - Example 2"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>


## Best Practices

### Effective Prompting
- **Be Detailed**: Specify required libraries, features, and behavior patterns
- **Include Context**: Share mockups or existing implementations when available
- **Build Gradually**: Start simple, then enhance with additional features

### Quality Assurance
- **Review Code**: Check for edge cases and potential issues
- **Test Components**: Verify functionality, dependencies, and accessibility standards

## Troubleshooting Common Issues

### Handling Dependency Issues
When AI suggests using external libraries that aren't available in your environment, you have several options:

1. **Add the Required Library**
   - Follow the [dependency addition guide](./create-wmx-widget#adding-external-dependencies) to properly integrate the library

2. **Request Alternatives**
   - Ask AI for alternative solutions using:
     - Different libraries that are already available
     - Vanilla JavaScript implementation
     - Built-in React Native components

3. **Prevent Issues**
   - Before starting, specify your environment's constraints
   - List available libraries that AI can use
   - Mention any size or performance requirements

### Structure Compliance
If generated widgets don't follow WMX standards:
- Reference the `readme` file at `src/main/webapp/extensions/components/src/readme.md`
- Ask the AI to restructure according to WMX requirements
- Validate against existing working widgets in your project

:::warning
Always carefully review and test AI-generated code before deploying to production. While AI tools are powerful, they can make mistakes or miss edge cases that require human oversight.
:::
