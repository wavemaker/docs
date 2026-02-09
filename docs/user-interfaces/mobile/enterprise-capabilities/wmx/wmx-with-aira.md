---
last_update: { author: "Priyanka Bhadri" }
---
# Creating WMX Components


Creating a WMX component involves defining the component UI and logic using React Native, configuring metadata through the `wmx.json` file, and organizing the component within the WaveMaker extensions framework. Once created, WMX components can be used directly within WaveMaker Studio, where developers can configure properties, handle events, apply styling, and integrate them into application workflows.

This approach enables developers to implement advanced UI functionality, integrate third-party libraries, and deliver highly customized mobile experiences.

--- 



## Creating WMX Components with AIRA

The AIRA WMX Agent enables developers to accelerate WMX component development for WaveMaker React Native applications through AI-driven automation. The agent can analyze the existing project structure, generate required component files, and automatically configure metadata required for seamless integration with WaveMaker Studio.


<!-- ### Initiating Component Creation -->

To create a WMX component, switch to AIRA and provide a prompt to the WMX Agent describing the  requirement (for example, an OTP component). Based on the prompt, the agent performs the following tasks:

- Analyzes the existing project structure  
- Generates the necessary WMX component files  
- Configures metadata, properties, events, and styling support  
- Validates compatibility and integration with WaveMaker Studio  .

This will generate this File structure for that component. Refer [WMX Component](wmx-components)

---



<!-- ### Component Features


**Properties**

| Property | Type | Default | Description |
|----------|---------|-------------|----------------|
| value | any | — | Represents the current value or state managed by the component |
| disabled | boolean | false | Enables or disables user interaction with the component |
| autoFocus | boolean | false | Automatically focuses or activates the component when loaded |
| config | object | — | Allows passing additional configuration options to customize component behavior |
| style | object | — | Supports custom styling for the component |



**Events**

| Event | Description |
|----------|----------------|
| onChange | Triggered whenever the component value or state changes |
| onFocus | Triggered when the component receives focus or becomes active |
| onBlur | Triggered when the component loses focus |
| onAction | Triggered when a primary user interaction occurs (e.g., selection, submission, click) |




### Styling Support

- Custom container styling (root)
- Custom styling for individual input boxes
- Visual feedback when inputs are filled
- Disabled state styling -->





## Creating WMX Components Using AI Tools

AI-powered development tools such as Cursor and GitHub Copilot can also accelerate WMX widget creation.


The WMX component creation process typically begins with completing the [local development setup](../../../../guide/migrated-docs/local-setup.md) and opening the WaveMaker project in an AI-assisted development environment such as Cursor or a similar IDE. Once the project is loaded, developers can switch the AI assistant to Agent Mode and provide a prompt describing the WMX widget requirements.

Based on the provided prompt, the AI tool analyzes the project structure and attempts to generate the WMX component. This includes creating the widget implementation, configuring metadata, executing necessary commands, and resolving common errors interactively.

After the component is generated, developers should carefully review the generated code to ensure correctness, maintainability, and alignment with project standards. Any required refinements or corrections can be applied either manually or with AI assistance.

The component must then be tested to verify its functionality, behavior, and integration within WaveMaker Studio. Once validated, the final changes can be committed and pushed to the repository, making the WMX component ready for use and collaboration.

---





## Using the Component in WaveMaker Studio

Once generated, the  component becomes available in the components. Developers can:

- Drag and drop the component into mobile pages
- Configure properties and events
- Apply custom styling using Studio property panel

---



## Best Practices

### Prompt Design
- Clearly specify required features, behavior, and libraries.
- Provide relevant context such as UI references or existing code.
- Build components incrementally, starting with basic functionality.

### Code Validation
- Review AI-generated code before integration.
- Test component behavior across different scenarios.
- Verify dependency compatibility with your environment.
- Ensure accessibility standards are followed.

### Troubleshooting
- If unsupported libraries are suggested, request alternative or native implementations.
- Ensure generated components follow WMX standards by referring to:
  `src/main/webapp/extensions/components/src/readme.md`
- Validate structure by comparing with existing WMX Components.

---
## Summary

WMX components enable developers to extend WaveMaker mobile applications by creating custom React Native Components that integrate seamlessly with the platform. These components are built by defining UI and logic, configuring metadata, and organizing them within the WaveMaker extensions framework.

AI tools such as AIRA, Cursor, and GitHub Copilot help accelerate WMX component development by automating file generation, metadata configuration, and error resolution. After generation, developers should review, test, and validate the components before deploying them for use in WaveMaker Studio.

By following recommended best practices, developers can ensure WMX components remain scalable, maintainable, and aligned with WaveMaker standards while delivering advanced and customizable mobile experiences.
