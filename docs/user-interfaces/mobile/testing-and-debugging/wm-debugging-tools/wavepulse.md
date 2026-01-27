---
title: 'WavePulse'
id: 'wavepulse'
sidebar_label: 'WavePulse'
last_update: { author: 'Vivek Raj' }
---

# WavePulse

WavePulse is WaveMaker's proprietary debugging tool specifically designed to debug WaveMaker Mobile Applications. It provides comprehensive debugging capabilities for applications running in web preview, Expo builds, and even release builds (APK/IPA).

---

## Overview

WavePulse is a web-based debugging interface that connects to WaveMaker mobile applications to provide real-time inspection and monitoring capabilities.

**Platform Support:**

- ✅ Web Preview
- ✅ Expo (Go / Dev Build)
- ✅ Release Build (APK/IPA)

:::note
WavePulse is the only debugging tool that works with release builds (APK/IPA). This makes it invaluable for debugging production-like environments and testing app store submission candidates.
:::

---

## Key Features

**✅ Unique Advantages:**

- Works with release builds (APK/IPA) - no other tool supports this
- Shows only WaveMaker components (filters out React internals)
- View WaveMaker widget properties and configurations
- Timeline view of page loads and service variable calls
- Export/import debugging sessions for sharing
- No installation required (web-based)
- WaveMaker-specific insights (variables, widgets, pages)

**⚠️ Limitations:**

- Read-only inspection (cannot edit values)
- No Sources panel for JavaScript debugging
- No profiler for performance analysis
- Cannot set breakpoints or step through code
- Must be explicitly enabled in configuration

---

## Requirements

- **Configuration:** WavePulse must be enabled in `wm_rn_config.json`
- **Network:** Device/emulator must be on same network (for Expo/APK debugging)
- **Browser:** Modern web browser to access WavePulse interface

---

## Available Panels

### Console

View application logs, errors, and warnings in real-time.

### Elements

Inspect WaveMaker component hierarchy and view component properties.

### Network

Monitor API calls, service variables, and network requests.

### Timeline

Analyze page load sequence and service variable execution timeline.

### Storage

Inspect Local Storage and Session Storage data.

### Info

View application metadata, version, and configuration details.

---

## Enabling WavePulse

WavePulse must be enabled in the application configuration file.

### Configuration

1. Open project in WaveMaker Studio
2. Navigate to File Explorer
3. Open `src > main > webapp > wm_rn_config.json`
4. Add the following in the `preferences` object:

```json
{
  "preferences": {
    "enableWavePulse": true,
    "enableLogs": true
  }
}
```

:::tip
Always enable logs (`enableLogs: true`) along with WavePulse to see console output in the Console panel.
:::

5. Save the file
6. Restart Expo server if running (changes to config files require restart)

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/eNEZKgeMjr2cHEwvb8kNSq"
    title="Enable WavePulse in WaveMaker mobile apps"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

:::warning
**Disable WavePulse for production builds** intended for app stores. WavePulse adds debugging overhead and should only be enabled during development and testing.
:::

---

## Connecting WavePulse to Web Preview

Connect WavePulse to your application running in web preview.

### Steps

1. Launch Web Preview of the app from Studio
2. Click on **REMOVE TOOLBAR** once the preview loads
3. Open [WavePulse](https://apps.wavemakeronline.com/wavepulse/client/) in another browser tab
4. A new WavePulse session will start automatically
5. Select **Connect to Web Preview** from the dropdown
6. Copy the generated code to connect Web Preview with this WavePulse session
7. Go back to the tab where Web Preview is running
8. Open Console Panel in the developer tools:
   - **Mac:** Press `Cmd` + `Option` + `J`
   - **Windows/Linux:** Press `Ctrl` + `Shift` + `J`
9. Paste the code copied from WavePulse into the Console Panel
10. Press **Enter** to initiate connection with the WavePulse session
11. Web Preview is now connected with WavePulse
12. You can now use WavePulse to debug your application

:::note
In web preview, WavePulse is always enabled regardless of `enableWavePulse` setting. The setting only affects Expo and APK/IPA builds.
:::

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/1tKCbzKBWYEgis3ZjfXhRQ"
    title="Connect WavePulse to Web Preview"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

---

## Connecting WavePulse to Expo (Go / Dev Build)

Connect WavePulse to applications running on physical or virtual devices using Expo CLI.

### Steps

1. Run the application in Expo Dev Build using Expo CLI
2. Open [WavePulse](https://apps.wavemakeronline.com/wavepulse/client/) in a browser
3. A new WavePulse session will start automatically
4. Ensure **Connect to APK or IPA** is selected from the dropdown
5. Enter the Application ID for your application
   - This generates a QR code and connection link for the app with the given Application ID
   - Find Application ID in Studio: **Settings > Build Preferences > Application Properties > Application ID**
6. Close the application on device if it is already running
7. Scan the QR code from your device to launch the app and initiate WavePulse connection
   - **Alternative:** Copy the link shown below the QR code and open it in the device's browser
8. A pop-up will appear asking for permission to connect with the WavePulse session
9. Press **Yes** to initiate connection
10. WavePulse is now connected
11. You can now use WavePulse to debug your application

:::tip
The QR code approach works for both Expo Go/Dev Build and APK/IPA installations. Make sure both devices are on the same network.
:::

**Network Requirements:**

- Device running app and device accessing WavePulse must be on same network
- Firewall must allow connections on the displayed port
- Some corporate networks may block these connections

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/nLGL8FgNiBkhPfTbVgLnRY"
    title="Connect WavePulse to Expo Build"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

---

## Connecting WavePulse to APK/IPA

Connect WavePulse to debug and release builds (APK/IPA) installed on devices.

### Prerequisites

1. Enable WavePulse in `wm_rn_config.json` before building
2. Build APK/IPA with WavePulse enabled
3. Install APK/IPA on device
4. If APK/IPA is built in debug mode, ensure it is connected with Expo CLI in Dev Build mode

### Steps

1. Open [WavePulse](https://apps.wavemakeronline.com/wavepulse/client/) in a browser
2. A new WavePulse session will start automatically
3. Ensure **Connect to APK or IPA** is selected from the dropdown
4. Enter the Application ID for your application
   - This generates a QR code and connection link for the app with the given Application ID
   - Find Application ID in Studio: **Settings > Build Preferences > Application Properties > Application ID**
5. Close the application on device if it is already running
6. Scan the QR code from your device to launch the app and initiate WavePulse connection
   - **Alternative:** Copy the link shown below the QR code and open it in the device's browser
7. A pop-up will appear asking for permission to connect with the WavePulse session
8. Press **Yes** to initiate connection
9. WavePulse is now connected
10. You can now use WavePulse to debug your application

:::important
**This is the only way to debug release builds (APK/IPA).** Community tools like Chrome DevTools, React DevTools, and React Native DevTools do not work with release builds. WavePulse is essential for production debugging.
:::

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/nLGL8FgNiBkhPfTbVgLnRY"
    title="Connect WavePulse to APK/IPA"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

---

## Console Panel

The Console panel displays all application logs, errors, and warnings.

### Features

**View logs:**

- `console.log()` messages
- `console.warn()` warnings
- `console.error()` errors
- `console.info()` information
- `console.debug()` debug messages
- Uncaught errors and exceptions

**Filtering:**

- Filter by log level (All, Errors, Warnings, Info, Debug)
- Search logs by text
- Clear console output

**Log format:**

```
[timestamp] [level] message
```

### Usage

```javascript
// Logs appear in WavePulse Console
console.log('User logged in:', user);
console.warn('API deprecated:', apiEndpoint);
console.error('Failed to save:', error);
```

:::note
When WavePulse is enabled, log sources show as `wavepulse.agent.js` because logs are intercepted by WavePulse agent for transmission to the debugging interface.
:::

---

## Elements Panel

The Elements panel shows the WaveMaker component hierarchy and component properties.

### Features

**Component tree:**

- Hierarchical view of WaveMaker components
- Expand/collapse component nodes
- Shows only WaveMaker widgets (Wm\* components)
- Filters out React internals automatically

**Component details:**

- Component name and type
- Widget properties configured in Studio
- Component state
- Bound data values
- Style properties

### Usage

1. Open **Elements** panel
2. Navigate component tree
3. Click on any component to view details
4. Right panel shows component properties

**What you can see:**

- Widget configuration from Studio
- Current property values
- Data binding values
- Component hierarchy relationships

**What you cannot do:**

- Edit property values (read-only)
- Modify component structure
- Add/remove components

---

## Network Panel

The Network panel monitors all HTTP requests made by the application.

### Features

**Request information:**

- URL and HTTP method
- Status code
- Request headers
- Response headers
- Request body
- Response body
- Timing information
- Size

**Service Variables:**

- Dedicated view for WaveMaker service variable calls
- Variable name and type
- Input parameters
- Response data
- Execution time

**Filtering:**

- Filter by request type (XHR, Fetch)
- Filter by status code
- Search by URL
- Filter by size or duration

### Usage

1. Open **Network** panel
2. Interact with application to trigger requests
3. Click on any request to view details
4. Use filters to find specific requests

**Use cases:**

- Debug API call failures
- Inspect service variable responses
- Monitor authentication headers
- Check request/response payloads
- Identify slow API calls

---

## Timeline Panel

The Timeline panel visualizes the sequence of events during page loads and navigation.

### Features

**Timeline visualization:**

- Page load events
- Component lifecycle events
- Service variable calls
- Network requests
- Navigation events

**Event details:**

- Event name and type
- Start time
- Duration
- Related data

**Use cases:**

- Understand page load sequence
- Identify slow loading components
- Debug service variable execution order
- Analyze navigation flow
- Optimize page load performance

### Usage

1. Open **Timeline** panel
2. Navigate to a page or perform action
3. Timeline shows event sequence
4. Click on events for detailed information
5. Use zoom and pan to explore timeline

**Reading the timeline:**

- Events are shown chronologically from top to bottom
- Horizontal bars show event duration
- Color coding indicates event type
- Overlapping bars show concurrent operations

---

## Storage Panel

The Storage panel allows inspection of Local Storage and Session Storage.

### Features

**Local Storage:**

- View all key-value pairs
- Search storage by key
- View stored data values
- Check storage size

**Session Storage:**

- View session-specific data
- Search by key
- View values

**Application data:**

- WaveMaker variables stored locally
- User preferences
- Cached data
- Authentication tokens (if stored)

### Usage

1. Open **Storage** panel
2. Select storage type (Local or Session)
3. Browse key-value pairs
4. Search for specific keys

:::warning
Storage panel is read-only. You cannot edit or delete storage items from WavePulse.
:::

---

## Info Panel

The Info panel displays application metadata and configuration.

### Features

**Application information:**

- Application name
- Version number
- Build information
- Platform (Android/iOS/Web)
- Device information

**WaveMaker configuration:**

- Expo version
- React Native version
- WaveMaker runtime version
- Enabled features
- Configuration settings

### Usage

1. Open **Info** panel
2. View application details
3. Verify version numbers
4. Check configuration

**Use cases:**

- Verify correct app version
- Check platform details
- Confirm configuration settings
- Identify build information for bug reports

---

## Export and Import Debugging Sessions

WavePulse allows exporting debugging sessions for sharing with team members or for later analysis.

### Exporting Sessions

1. After debugging session, click **Export** button
2. Choose what to export:
   - Console logs
   - Network requests
   - Timeline events
   - Component tree snapshot
3. Session exports as JSON file
4. Save file to disk

### Importing Sessions

1. Click **Import** button
2. Select previously exported JSON file
3. WavePulse loads the session
4. View historical data offline

**Use cases:**

- Share debugging sessions with team
- Archive debugging data
- Analyze issues offline
- Compare sessions before/after changes

---

## Debugging with wm-reactnative sync

WavePulse works seamlessly with WaveMaker's live sync feature.

### Setup

1. Export React Native project from Studio
2. Run `wm-reactnative sync` to connect to Studio
3. Start Expo CLI
4. Connect WavePulse to running application
5. Make changes in Studio
6. Changes reflect in real-time
7. Monitor changes in WavePulse

**Benefits:**

- Edit in Studio, debug in real-time
- See immediate effect of changes
- Monitor component updates
- Track service variable calls
- Fast iteration cycle

---

## Using WavePulse Panels

After connecting WavePulse to your application, you can use various panels to debug and inspect your application.

### Panel Overview

1. **Console Panel** - View all logs, search for specific logs, clear logs, and filter by type
2. **Elements Panel** - Inspect WaveMaker components with properties and styles
3. **Network Panel** - Monitor all network requests with detailed information
4. **Timeline Panel** - View time intervals for page loads, network calls, and service variables
5. **Storage Panel** - Inspect application's local storage
6. **Info Panel** - View application metadata

### Elements Panel Features

- Shows all WaveMaker components in hierarchical structure
- Auto-updates when changes occur in the running application
- Hover/select components to highlight them in the running app
- View component properties as configured in WaveMaker Studio
- Inspect styles with dropdown to select specific parts of widgets

### Network Panel Features

- View all network requests with complete details
- Click on any request to see Headers, Response, and more
- Filter requests by type using the filter button
- Monitor service variable calls

### Timeline Panel Features

- Displays recorded time intervals for events
- Track page loads, network calls, and service variables
- Use filters to show specific event types or time intervals

### Storage and Info Panels

- Storage Panel shows local storage data (use refresh button for latest data)
- Info Panel displays application metadata (use refresh button to update)

### Exporting Debugging Sessions

Click the **Export** button at the bottom right corner of WavePulse to save your current debugging session for later analysis or sharing with team members.

<div style={{ position: "relative", paddingBottom: "56.25%" }}>
  <iframe
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      top: 0
    }}
    src="https://embed.app.guidde.com/playbooks/oa96srQW46ksPkRQMAKHPC"
    title="WavePulse Walkthrough"
    frameBorder={0}
    referrerPolicy="unsafe-url"
    allowFullScreen="true"
    allow="clipboard-write"
    sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-forms allow-same-origin allow-presentation"
  />
</div>

---

## WaveMaker-Specific Features

### Service Variable Monitoring

WavePulse provides dedicated views for WaveMaker service variables:

**What you can see:**

- Service variable name
- Variable type (API, Database, etc.)
- Input parameters
- Request payload
- Response data
- Execution time
- Success/failure status

### Widget Inspection

Inspect WaveMaker widgets with Studio-specific information:

**Widget details:**

- Widget name from Studio
- Widget type (Button, Form, List, etc.)
- Properties configured in Studio
- Data binding expressions
- Event handlers
- Current state

### Variable Inspection

View WaveMaker application variables:

**Variable information:**

- Variable name
- Variable type (Model, Device, etc.)
- Current value
- Binding information
- Update history

---

## Best Practices

### 1. Enable Only for Development and Testing

```json
// ✅ Good - Enable for debug builds
{
  "preferences": {
    "enableWavePulse": true,
    "enableLogs": true
  }
}

// ❌ Bad - Left enabled for production app store builds
```

### 2. Use WavePulse for Release Build Testing

```javascript
// ✅ Good - Test release builds before submission
// Build APK/IPA with WavePulse enabled
// Test on real devices
// Debug any production issues
// Rebuild without WavePulse for final submission

// ❌ Bad - Skipping release build testing
```

### 3. Export Sessions for Issue Reporting

```javascript
// ✅ Good - Export debugging session when reporting bugs
// Include console logs, network requests, timeline
// Share with team or support

// ❌ Bad - Just describing the issue without data
```

### 4. Monitor Service Variables

```javascript
// ✅ Good - Use Network panel to monitor service variables
// Check input parameters
// Verify response data
// Identify slow API calls

// ❌ Bad - Debugging service issues with console.log only
```

---

## Troubleshooting

### WavePulse Not Connecting

**Solutions:**

1. Verify `enableWavePulse: true` in `wm_rn_config.json`
2. Restart Expo server after config changes
3. Ensure device and computer are on same network
4. Check firewall settings
5. Try scanning QR code with different device

### QR Code Not Appearing

**Solutions:**

1. Check that WavePulse is enabled in config
2. Rebuild application with updated config
3. Close and reopen application
4. Check console for connection URL as fallback

### Network Requests Not Showing

**Solutions:**

1. Verify `enableLogs: true` in config
2. Check Network panel filters
3. Ensure requests are actually being made
4. Try clearing and refreshing

### Console Logs Not Appearing

**Solutions:**

1. Ensure `enableLogs: true` in `wm_rn_config.json`
2. Restart application after config change
3. Check Console panel filters
4. Verify logs are being generated with `console.log()`

---

## Key Differences from Other Tools

### WavePulse vs Chrome DevTools

| Feature                    | WavePulse | Chrome DevTools |
| -------------------------- | --------- | --------------- |
| Works with APK/IPA         | ✅        | ❌              |
| Works with Expo            | ✅        | ❌              |
| Works with Web Preview     | ✅        | ✅              |
| Shows WaveMaker components | ✅        | ❌              |
| JavaScript debugging       | ❌        | ✅              |
| Edit values                | ❌        | ✅              |
| Performance profiler       | ❌        | ✅              |
| Timeline view              | ✅        | ✅              |

### WavePulse vs React DevTools

| Feature                    | WavePulse | React DevTools |
| -------------------------- | --------- | -------------- |
| Works with APK/IPA         | ✅        | ❌             |
| Shows WaveMaker widgets    | ✅        | ❌             |
| Shows all React components | ❌        | ✅             |
| Edit props/state           | ❌        | ✅             |
| Profiler                   | ❌        | ✅             |
| Service variables          | ✅        | ❌             |

### WavePulse vs React Native DevTools

| Feature              | WavePulse | React Native DevTools |
| -------------------- | --------- | --------------------- |
| Works with APK/IPA   | ✅        | ❌                    |
| Requires Expo 52+    | ❌        | ✅                    |
| JavaScript debugging | ❌        | ✅                    |
| Breakpoints          | ❌        | ✅                    |
| WaveMaker-specific   | ✅        | ❌                    |
| Export sessions      | ✅        | ❌                    |

---

## Related Documentation

**Other Debugging Tools:**

- [Chrome DevTools](../community-debugging-tools/chrome-devtools) – Browser debugging for web preview
- [React DevTools](../community-debugging-tools/react-devtools) – React component inspection
- [React Native DevTools](../community-debugging-tools/react-native-devtools) – React Native debugging

**Testing Documentation:**

- [Debugging Overview](../debugging-overview) – All debugging tools and methods
- [UI Testing Mobile](../testing-strategies/ui-testing-mobile) – Mobile testing strategies

**Build Documentation:**

- [Mobile Build Overview](../../../../build-and-deploy/build/mobile/overview) – Build methods
- [AppChef Builds](../../../../build-and-deploy/build/mobile/appchef) – Cloud builds with QR codes
- [Expo Builds](../../../../build-and-deploy/build/mobile/expo) – Expo EAS Build

:::tip
WavePulse is the only tool that can debug release builds (APK/IPA). Always test release builds with WavePulse before submitting to app stores, then rebuild with WavePulse disabled for final submission.
:::
