---
last_update: { author: "Priyanka Bhadri" }
---

# WMX Widgets


**WMX Widgets (WaveMaker Extension Widgets)** allow developers to integrate custom React Native components into WaveMaker mobile applications. These widgets extend the default WaveMaker widget library while maintaining support for property binding, event handling, scripting, and theme styling.

WMX widgets enable developers to build custom UI components that behave like native WaveMaker widgets.

---

## Capabilities

WMX widgets allow you to:

- Integrate custom React Native components
- Bind widget properties to application variables
- Trigger and handle widget events
- Apply WaveMaker themes and style tokens
- Use third-party React Native libraries

---

## Limitations

- WMX widgets display placeholders in Studio canvas and do not render actual UI.
- WMX widgets cannot act as container widgets.
- WMX widgets cannot be used as form fields.
- WMX widgets are supported only in React Native mobile applications.

---

## Local Development Setup

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

## WMX Widget Structure

All widgets are located inside:

`src/main/webapp/extensions/components/src/`


Each widget must have its own folder.

```

src/main/webapp/extensions/components/src/
├── widgetname/
│   ├── index.tsx
│   ├── wmx.json
│   └── icon.svg (optional)

```


## Summary

WMX Widgets extend WaveMaker mobile applications by allowing custom React Native components to function as native WaveMaker widgets. They support property binding, event handling, scripting access, styling integration, and third-party library usage.

WMX widgets help developers implement advanced UI functionality that is not available through default widgets.

