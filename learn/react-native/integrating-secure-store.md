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


## Expo SecureStore Plugin

The Expo SecureStore API allows developers to securely store key-value pairs on the device. It provides a simple and convenient way to store sensitive information, such as authentication tokens or API keys, in a protected manner. The SecureStore API leverages the underlying secure storage mechanisms provided by the operating system (Keychain on iOS and Keystore on Android) to ensure the confidentiality and integrity of the stored data.

By utilizing the Expo SecureStore API, developers can securely store and retrieve sensitive data within their Expo apps, enhancing data security and protecting sensitive information from unauthorized access.

### Adding Expo SecureStore Plugin to your WaveMaker React Native App​

SecureStore plugin can be installed in few steps in WaveMaker. Please refer to this [page](https://docs.wavemaker.com/learn/react-native/third-party-expo-plugins#expo)
on how to install a plugin.

## Integrating Expo SecureStore plugin in React Native app

Expo SecureStore plugin API can be leveraged in your WaveMaker app as following:

- Add a Key-Value pair
- Retrieve a Key-Value pair
- Delete a Key-Value pair

In your WaveMaker project, add the following code snippet to imports the plugin into the app.


```javascript
const SecureStore = require('expo-secure-store')
```

### Add a Key-Value pair

Employing the Expo SecureStore enables you to effortlessly add values to a secure store. Here's a demonstration of its usage:

```javascript
async function save() {
  await SecureStore.setItemAsync('superHero', 'Batman');
}
```

In the above example, the value "Batman" is stored in the secure store with the key "superHero".
Suppose if you want to store an object data in SecureStore you can use `JSON.stringify` to convert an object into a JSON 
string(as shown in the following example) before storing it.

```javascript
async function saveObjectData() {
  const myObject = { key: 'value' };
  const serializedObject = JSON.stringify(myObject);
  await SecureStore.setItemAsync('myKey', serializedObject);
}
```

### Retrieve a Key-Value pair

Similar to adding value to the secure store, retrieving a value from the secure store is also pretty much straightforward. 
The following is an example of how you can get value from the secure store:

```javascript
async function getValue() {
  await SecureStore.getItemAsync('key');
}
```

Similarly to retrieve the JSON string from SecureStore and use `JSON.parse` to convert the JSON string back into an object when retrieving it from the secure store.

```javascript
async function getJSONString() {
  const storedObject = await SecureStore.setItemAsync('myKey');
  const deserializedObject = JSON.parse(storedObject);
}
```

### Delete a Key-Value pair

Like storing and retrival APIs we also have methods for deleting data from the SecureStore. Follow the example below for deleting data from SecureStore:

```javascript
const deleteData = async () => {
    await SecureStore.deleteItemAsync('key');
}
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
Add the following code snippet in `Script` tab, to imports the plugin into the app.

```javascript
const SecureStore = require('expo-secure-store');
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
            await SecureStore.setItemAsync('auth', JSON.stringify(auth));
        }, 400);
    }
};
```

To retrieve data from the secure store in WaveMaker project when page is ready, add the following code snippet

```javascript
Page.onReady = async function() {
    const res = await SecureStore.getItemAsync('auth');

    const auth = JSON.parse(res)
    if (auth.username && auth.password) {
        Page.Widgets.loggedInUserForm1.formWidgets.j_username.datavalue = auth.username;
        Page.Widgets.loggedInUserForm1.formWidgets.j_password.datavalue = auth.password;
    }
};
```

