---
title: "Adding userIdleTimeout Event"
id: "user-idle-timeout"
sidebar_label: "User Idle Timeout Event"
---
---

### Overview

In React Native, the `userIdleTimeout` event allows you to control the timeout duration for user inactivity. When the user remains idle for the specified duration, the associated callback function (`onUserIdle`) is triggered. This documentation will guide you on how to add the `userIdleTimeout` event in React Native projects.

### Setting up userIdleTimeout

To set up the `userIdleTimeout` event, follow these steps and add code in App.js:

![User Idle Timeout App](/learn/assets/user-idle-timeout-app.png)

1. **Assign Timeout Duration:**

   Use the following syntax to set the timeout duration in milliseconds. For example, to set a timeout of 5 seconds:

   ```javascript
   App.userIdleTimeout = 5 * 1000; // 5 seconds
   ```

2. **Resetting Timeout:**

   You can reset the inactivity timeout using the `resetInactivityTimeout()` function. This can be useful if you want to extend the timeout dynamically based on user interactions.

   ```javascript
   App.resetInactivityTimeout();
   ```

### Handling Idle Events

To handle the callback function when the user becomes idle, use the `onUserIdle` event. This function is executed when the user remains inactive for the specified duration. Here is an example of how to set up the callback function:

```javascript
App.onUserIdle = function () {
  const reactnative = require("react-native");
  reactnative.Alert.alert(
    "User is Idle",
    "User is idle for " + App.userIdleTimeout / 1000 + " seconds",
    [
      {
        text: "Ask me later",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
      },
    ]
  );
};
```

In this example, an alert is displayed when the user becomes idle. You can customize the callback function based on your application's requirements.

### Complete Example

Putting it all together, here is a complete example:

```javascript
// Set up userIdleTimeout
App.userIdleTimeout = 5 * 1000; // 5 seconds

// Reset the timeout dynamically if needed
// App.resetInactivityTimeout();

// Handle the callback function for idle events
App.onUserIdle = function () {
  const reactnative = require("react-native");
  reactnative.Alert.alert(
    "User is Idle",
    "User is idle for " + App.userIdleTimeout / 1000 + " seconds",
    [
      {
        text: "Ask me later",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
      },
    ]
  );
};
```

Adjust the timeout duration and callback function according to your application's requirements.

### Preview

![User Idle Timeout Preview](/learn/assets/user-idle-timeout-preview.gif)
