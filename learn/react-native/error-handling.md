---
title: "Error Handling in React Native Apps"
id: "error-handling"
sidebar_label: "Error Handling"
---
---

import errorBoundary from '/learn/assets/release-notes/error-boundary-11-11-6.png';

In complex React Native applications, unexpected rendering issues can occur due to bugs or data. To prevent full crashes or blank screens, WaveMaker introduced a global Error Boundary system. This system catches render-time errors, logs them, and shows a fallback UI; this ensures users remain in control even when something goes wrong.

### Enabling Error Handling

Configure these preferences in `wm_rn_config.json` (**File Explorer > src/main/webapp/wm_rn_config.json**):

| Preference                 | Type    | Default | Description                                                                                        |
| --------------------------- | ------- | ------- | ---------------------------------------------------------------------------------------------------|
| `enableGlobalErrorHandler`  | boolean | `false` | Master switch — must be `true` for any error handling, including `onError`, to run                 |
| `enableRenderErrors`        | boolean | `true`  | Enables the Error Boundary for component rendering errors                                           |
| `enableJsSyncErrors`        | boolean | `true`  | Enables handling of synchronous JavaScript errors                                                   |
| `enableJsAsyncErrors`       | boolean | `true`  | Enables handling of asynchronous/promise-rejection errors                                           |
| `showDefaultErrorFallback`  | boolean | `true`  | Shows the default fallback screen; set `false` to fully replace it with your own UI via `onError`   |

:::note
`enableGlobalErrorHandler` defaults to `false` — error handling is off until explicitly enabled.
:::

### What Is Error Boundary?

Error boundaries are React components that catch JavaScript errors during rendering, log them, and display a fallback UI instead of letting the app crash. They maintain stability and prevent broken or frozen screens.

### Key Aspects of Error Boundaries

- **Catch render-time errors** using:
  - `getDerivedStateFromError(error)` to update state and trigger fallback UI  
  - `componentDidCatch(error, info)` to log error details locally or remotely
- **Prevent full crashes** by intercepting errors and showing a controlled interface
- **Fallback UI** can be a message, error page, or recovery mechanism
- **Limitations**:
  - Cannot catch event handler errors (e.g., button clicks)
  - Cannot catch async errors (`setTimeout`, `fetch`, `async/await`)
  - Cannot catch server-side rendering errors
  - Cannot catch errors inside the error boundary itself

### Implementation

WaveMaker introduced a global Error Boundary component that wraps critical parts of the application. If a rendering error occurs, it is caught and a fallback screen is displayed instead of letting the entire app crash.

### Fallback Screen

<img src={errorBoundary} alt="Error Fallback Screen" style={{maxWidth:'300px', width:'100%'}}/>

The fallback UI:
- Well-handled unexpected errors  
- Clearly informs the user about the issue  
- Allows error stack copying so users can share details with support  
- Offers recovery actions:  
  - Navigate back to the previous page  
  - Redirect to the home screen  

This ensures continuity even when issues occur.

### Custom Error Handling — the onError Callback

Beyond the default fallback screen, WaveMaker exposes an `onError` callback on the App object so you can run your own logic whenever an error is caught — for example, logging to an external monitoring service, showing a custom notification, or triggering app-specific recovery.

In the App file, add the following function:

```js
onError(error, errorInfo, errorType) {
  console.log(`[${errorType}] error caught:`, error.message);
  // e.g. Sentry.captureException(error, { extra: { errorInfo, errorType } });
}
```

| Parameter   | Type                        | Description                                                                                                          |
| ----------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------|
| `error`     | `Error`                     | The error object that was thrown                                                                                     |
| `errorInfo` | `any`                       | Extra context — the React component stack for render errors, or the failing callback's context for JavaScript errors |
| `errorType` | `'render' \| 'javascript'`  | `'render'` when caught by the Error Boundary during component rendering; `'javascript'` for errors caught elsewhere (e.g. inside an event handler) |

Error Boundary contains render-time errors without degrading the user experience. With a fallback UI, recovery options, and error reporting, it makes the app fault-tolerant, and user-friendly during unexpected failures.
