---
title: "Initialize data before app is loaded"
id: "on-before-app-ready"
---
---

The `App.onBeforeAppReady` hook allows you to execute custom logic before the application User Interface (UI) is initialized and rendered.

When this hook executes, only platform-initialized data is available, including:

- Application-level variables
- Platform metadata, such as:
  - Security configuration
  - Logged-in user context (if authentication is enabled)

This makes it an ideal place to perform **pre-initialization logic**, such as:
- Setting the application UI mode based on user preferences
- Loading organization-specific configurations
- Redirecting users based on roles or permissions
- Blocking app load with a custom error or maintenance screen if a check fails

### Execution Timing

This hook is executed before the application UI is initialized, equivalent to **Angular’s `APP_INITIALIZER`** phase.

As a result:
- The application **waits for this hook to complete** before continuing startup.
- If the hook returns a Promise:
  - The application waits for the Promise to resolve before proceeding.
  - Application initialization stops if the Promise rejects or an error is thrown.

### Example

Use case: Setting UI color mode based on the Logged-in User preferences.

```js
// add the hook in app.js
App.onBeforeAppReady = function () {
    // Check if the user is authenticated
    if (App.Variables.loggedInUser?.dataSet?.isAuthenticated) {
        var userId = App.Variables.loggedInUser.dataSet.id;
        App.Variables.getUserData.setInput('userId', userId);

        return App.Variables.getUserData.invoke().then((res) => {
            let userData = JSON.parse(res.body);

            // Apply user-specific theme
            App.setMode({ color: userData.__theme });
        }).catch((err) => {
            console.error("Failed to load user theme:", err);
            App.Actions.navigateToPage('errorPage');
            return Promise.reject(err);
        });
    }
};
```

### Points to Remember

- Return a Promise when performing asynchronous operations (such as API calls or database queries).
- If the Promise is rejected or an error is thrown, application initialization stops. This can be used to enforce controlled startup failures (for example, invalid sessions or maintenance mode).
- Keep logic minimal and efficient to avoid delaying application startup.
- You can use any available App variables safely inside this hook.




