---
title: "Initialize data before app is loaded"
id: "on-before-app-ready-hook"
---
---

### **Overview**

The `App.onBeforeAppReady` hook allows you to execute custom logic **right before the application is initialized**.

At this point in the app life cycle, the following data is already available for use:

* App Variables
* Metadata such as
  * Security configuration
  * Logged-in user information

This makes it an ideal place to perform **pre-initialization logic**, such as:
* Setting the application UI mode based on user preferences
* Loading organization-specific configurations
* Redirecting users based on roles or permissions
* Blocking app load with a custom error or maintenance screen if a check fails

### **Execution Timing**
This hook is invoked before the app UI is initialized (equivalent to the **Angular `APP_INITIALIZER`** phase), which implies:
* The app **waits for this method to complete** before bootstrapping.
* If this method **returns a Promise**, the application will:
    * **Wait** for the promise to resolve before proceeding.
    * **Halt loading** if the promise rejects or throws an error.

### **Example**
Use case: Setting UI color mode Based on the Logged-in User preferences
```
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
### **Points to Remember**
* **Return a Promise** if your logic involves asynchronous operations (API calls, DB queries, etc.).
* If the promise is rejected, the app initialization will **stop** — this is useful for controlled failures (e.g., session invalidation, maintenance mode).
* Keep your logic **lightweight** — heavy computations here can slow down app startup.
* You can use any available **App variables** safely inside this hook.



