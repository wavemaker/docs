---
title: "Enable Async Callbacks - Form"
id: "enable-async-callbacks-form"
---

The enableAsyncCallbacks property allows forms to wait for asynchronous operations (like encryption services) to complete before submission. This is useful when scripts need to perform data transformations that require processing time.

### Configuration

Set the enableAsyncCallbacks property to true in the form's properties panel:
```js
Enable Async Callbacks: true
```

### Usage

When enableAsyncCallbacks is enabled, scripts must call widget.completeAsyncCallback() to signal completion:

#### Example - Encrypting Password During Login

```js
Page.loggedInUserForm1Beforesubmit = function ($event, widget, $formData) {
    const currentPassword = $formData.j_password;
    if (!currentPassword) {
        return true; // Synchronous completion for no encryption
    }
    App.Variables.serviceVariable2.setInput('text', currentPassword);

    const originalOnSuccess = App.Variables.serviceVariable2.onSuccess;
    const originalOnError = App.Variables.serviceVariable2.onError;

    App.Variables.serviceVariable2.onSuccess = function (variable, data) {
        try {
            const encryptedPassword = App.Variables.serviceVariable2.dataSet.value;
            if (encryptedPassword) {
                $formData.j_password = encryptedPassword;

                if (widget && widget.updateDataOutput) {
                    widget.updateDataOutput('j_password', encryptedPassword);
                }
            }
        } catch (error) {
            console.error('Error processing result:', error);
        }
        // Restore callbacks
        if (originalOnSuccess) {
            App.Variables.serviceVariable2.onSuccess = originalOnSuccess;
        }
        // Signal completion to the form component
        widget.completeAsyncCallback(true);
    };


    App.Variables.serviceVariable2.onError = function (variable, error) {
        // Restore callbacks
        if (originalOnError) {
            App.Variables.serviceVariable2.onError = originalOnError;
        }
        console.log('Signaling completion due to error...');
        widget.completeAsyncCallback(false);
    };
    // Start the async operation
    App.Variables.serviceVariable2.invoke();
};
```

### Key Points

1. **Default Behavior:** When enableAsyncCallbacks is false (default), forms submit immediately using synchronous behavior

2. **Async Behavior:** When true, forms wait for widget.completeAsyncCallback() before submission

3. **Required Method:** Scripts must call widget.completeAsyncCallback(true/false) to proceed

4. **Data Updates:** Use widget.updateDataOutput(key, value) to update form data after async operations

5. **Backward Compatible:** Existing forms continue to work unchanged

### Methods

#### widget.completeAsyncCallback(result)

Signals completion of async operations:

1. widget.completeAsyncCallback(true) - Continue with form submission
2. widget.completeAsyncCallback(false) - Prevent form submission

#### widget.updateDataOutput(key, value)

Updates form data after async operations:
```js
widget.updateDataOutput('fieldName', newValue);
```