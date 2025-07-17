---
title: "Error Handling in React Native Apps"
id: "error-handling"
sidebar_label: "Error Handling"
---
---

import errorBoundary from '/learn/assets/release-notes/error-boundary-11-11-6.png';

### **Error Boundaries**

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of letting the entire application crash. They enable applications to handle unexpected errors gracefully and ensure a better user experience by preventing blank screens or app crashes.

---

### **Key Aspects of Error Boundaries**

* **Catching Errors:**

   Error boundaries rely on specific lifecycle methods available in class components:

  * `static getDerivedStateFromError(error)`: Updates the component’s state in response to an error, triggering a re-render with a fallback UI.  
  * `componentDidCatch(error, info)`: Captures and logs error details, which can be sent to an external logging service or analytics platform for monitoring and debugging.  
* **Preventing Crashes:**

   By intercepting render-time errors, error boundaries prevent the application from crashing entirely. This ensures the user is always presented with a controlled interface rather than a broken or frozen screen.

* **Fallback UI:**

   When an error is detected, the error boundary renders a predefined fallback interface. This UI can be a simple message, a dedicated error page, or a custom recovery mechanism — offering users a way to continue interacting with the app.

* **Limitations of Error Boundaries:**

   Error boundaries are **not** able to catch:

  * Errors in event handlers (e.g., `onClick`)  
  * Asynchronous errors (e.g., from `setTimeout`, `fetch`, or `async/await`)  
  * Errors occurring during server-side rendering  
  * Errors inside the error boundary component itself

---

### **Our Implementation**

We have implemented a global Error Boundary component that wraps critical parts of the application. If any rendering error occurs within these boundaries, it is caught and a fallback screen is shown instead of letting the entire app crash.

---

### **Fallback Screen**

<img src={errorBoundary} alt="Error Fallback Screen" style={{maxWidth:'300px', width:'100%'}}/>

The fallback UI is designed to:

* Gracefully handle unexpected errors  
* Inform the user about the issue  
* **Allow error stack copying**, enabling users to copy technical error details and share them with the development or support team for faster troubleshooting.  
* Offer recovery actions, such as:  
  * Navigating back to the previous page  
  * Redirecting to the home screen

This ensures continuity in user interaction even when something goes wrong under the hood.

---

### **Conclusion**

Error boundaries are a powerful feature in React that enhance the resilience and reliability of applications. Our implementation ensures that unexpected render-time errors are contained and handled without degrading the user experience. With a robust fallback UI and recovery options, users remain in control even during failure scenarios — making the application more fault-tolerant and user-friendly.

