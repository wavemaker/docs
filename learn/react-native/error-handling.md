---
title: "Error Handling in React Native Apps"
id: "error-handling"
sidebar_label: "Error Handling"
---
---

import errorBoundary from '/learn/assets/release-notes/error-boundary-11-11-6.png';

In complex React Native applications, unexpected rendering issues can occur due to bugs or data. To prevent full crashes or blank screens, WaveMaker introduced a global Error Boundary system. This system catches render-time errors, logs them, and shows a fallback UI; this ensures users remain in control even when something goes wrong.

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

Error Boundary contains render-time errors without degrading the user experience. With a fallback UI, recovery options, and error reporting, it makes the app fault-tolerant, and user-friendly during unexpected failures.
