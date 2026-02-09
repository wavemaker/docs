---
last_update: { author: "Priyanka Bhadri" }
---

# WMX Components


**WMX Components (WaveMaker Extension Components)** allow developers to integrate custom React Native components into WaveMaker mobile applications. These widgets extend the default WaveMaker component library while maintaining support for property binding, event handling, scripting, and theme styling.

WMX components enable developers to build custom UI components that behave like native WaveMaker components.

---

## Capabilities

WMX components allow you to:

- Integrate custom React Native components
- Bind components properties to application variables
- Trigger and handle components events
- Apply WaveMaker themes and style tokens
- Use third-party React Native libraries

---


<!-- ## Local Development Setup

Before creating WMX widgets, set up the project locally.

### Export Project

1. Open WaveMaker Studio.
2. Navigate to **Settings → Export → Export Project as Sources (ZIP)**.
3. Extract the ZIP file and open it in your preferred IDE.


### Initialize Workspace

Run the following command:

```bash
mvn wavemaker-workspace:init
```

Provide the WaveMaker Studio host URL and login credentials when prompted.

**Sync Commands**

Pull latest changes:

`mvn wavemaker-workspace:pull`


Push local changes:

`mvn wavemaker-workspace:push`


--- -->

## WMX Component File Structure

All components are located inside the following directory: `src/main/webapp/extensions/components/src/`

Each component should be organized within its own dedicated folder to ensure modularity and maintainability.



```

src/main/webapp/extensions/components/src/
├── widgetname/
│   ├── index.tsx
│   ├── wmx.json
│   └── icon.svg (optional)

```


### **index.tsx**
- Contains the component's UI implementation and core logic.
- Acts as the entry point for the custom WMX widget.
- Must export the component as the **default export**.



### **wmx.json**
- Defines the component metadata.
- Controls how the component appears and behaves inside WaveMaker Studio.
- Includes configurations such as:
  - Component name
  - Properties (props)
  - Events
  - Styling options
- The Studio properties panel is automatically generated based on this metadata.


### **icon.svg (Optional)**
- Used as the component icon in WaveMaker Studio.

**Recommended Guidelines:**
- Use a **transparent background**
- Prefer **#737373** as the stroke color
- Keep the design minimal and clearly recognizable at small sizes

To Know more [WMX Schema](wmx-schema-reference)

---


## Limitations

- WMX components display placeholders in Studio canvas and do not render actual UI.
- WMX components cannot act as container widgets.
- WMX components cannot be used as form fields.
- WMX components are supported only in React Native mobile applications.

---

## Summary

WMX components open the door to advanced mobile UI customization in WaveMaker by allowing developers to plug in custom React Native components with full platform compatibility. These components work seamlessly with WaveMaker features such as binding, events, scripts, theming, and external libraries.

WMX components help teams deliver modern, feature-rich mobile experiences without being limited by the default widget set.
