---
title: "Integrating Secure Store"
id: "integrating-secure-store"
sidebar_label: "Secure Store"
---
---
Mobile apps utilize keychain services in iOS and the keystore system in Android to securely store sensitive information such as user credentials and cryptographic keys. These built-in data protection mechanisms encrypt the stored data, making it difficult for unauthorized parties to access or decrypt. Keychain services and the keystore system employ industry-standard encryption algorithms, ensuring a high level of data protection.

Storing sensitive user credentials in a secure manner is crucial to prevent unauthorized access. Keychain services in iOS and the keystore system in Android offer dedicated storage options like key-value storage or secure data containers specifically designed for this purpose.

Cryptographic keys used for secure communication or encryption are securely stored within the keychain services and keystore system. They provide key generation, import/export functionality, and perform cryptographic operations within a secure environment.

Keychain services and the keystore system benefit from robust system-level security measures, including hardware-backed protection, secure enclaves, and secure boot processes.

## Using SecureStore in React Native app

SecureStore service can be used in your WaveMaker app as following:

- Add a Key-Value pair
- Retrieve a Key-Value pair
- Delete a Key-Value pair

### Add a Key-Value pair

Employing the Expo SecureStore enables you to effortlessly add values to a secure store. Here's a demonstration of its usage:

```javascript
App.getDependency('SecureStorageService').setItem("superHero", "Batman");
```

In the above example, the value "Batman" is stored in the secure store with the key "superHero".

### Retrieve a Key-Value pair

Similar to adding value to the secure store, retrieving a value from the secure store is also pretty much straightforward. 
The following is an example of how you can get value from the secure store:

```javascript
App.getDependency('SecureStorageService').getItem("superHero");
```

### Delete a Key-Value pair

Like storing and retrival APIs we also have methods for deleting data from the SecureStore. Follow the example below for deleting data from SecureStore:

```javascript
App.getDependency('SecureStorageService').removeItem("superHero");
```

## Use-Case: Use SecureStore to Remember Credentials in Login Screen

### Requirement

- A login page with a "Remember Me" checkbox
- Credentials should be stored in the secure store when the user checks the "Remember Me" checkbox

### Assumptions
- Your WaveMaker project has a login page with username and password input fields.

### Implementation

In your WaveMaker project, navigate to the `Pages/Login` page.

First, include a checkbox in your login page that allows the user to indicate whether they want their login information to be remembered. 

```javascript
<wm-checkbox caption="Remember me" name="rememberme" on-change="remembermeChange($event, widget, newVal, oldVal)">
</wm-checkbox>
```

Create a function that will be triggered when the user checked the "Remember Me" checkbox. This function will retrieve the login credentials (e.g., username and password) from the input fields and save them to the secure store using the library's appropriate method. For example:

```javascript
Page.remembermeChange = async function($event, widget, newVal, oldVal) {
    if (newVal) {
        setTimeout(async() => {
            const username =
                Page.Widgets.loggedInUserForm1.formWidgets.j_username.datavalue;
            const password =
                Page.Widgets.loggedInUserForm1.formWidgets.j_password.datavalue;

            let auth = {
                username: username,
                password: password,
            };
            await App.getDependency('SecureStorageService').setItem('auth', JSON.stringify(auth));
        }, 400);
    }
};
```

To retrieve data from the secure store in WaveMaker project when page is ready, add the following code snippet

```javascript
Page.onReady = async function() {
    const res = await App.getDependency('SecureStorageService').getItem('auth');

    const auth = JSON.parse(res)
    if (auth.username && auth.password) {
        Page.Widgets.loggedInUserForm1.formWidgets.j_username.datavalue = auth.username;
        Page.Widgets.loggedInUserForm1.formWidgets.j_password.datavalue = auth.password;
    }
};
```

