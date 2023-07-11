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

To add a value to the secure store in React Native, you can use the Expo SecureStore, which provides a built-in secure storage solution. Here's an example of how you can add a value to the secure store:

```javascript
async function save() {
  await SecureStore.setItemAsync('key', 'value');
}
```

In this example, the value "value" is stored in the secure store with the key "key".
If you want to store object data in SecureStore you can use `JSON.stringify` to convert an object into a JSON string before storing it.

```javascript
async function saveObjectData() {
  const myObject = { key: 'value' };
  const serializedObject = JSON.stringify(myObject);
  await SecureStore.setItemAsync('myKey', serializedObject);
}
```

### Retrieve a Key-Value pair

To retrieve a value from the SecureStore in React Native, you can use the appropriate method provided by the secure store library you are using. Here's an example of how you can get value from the secure store:

```javascript
async function getValue() {
  await SecureStore.getItemAsync('key');
}
```

In this example, retrieve the JSON string from SecureStore and use `JSON.parse` to convert the JSON string back into an object when retrieving it from the secure store.

```javascript
async function getJSONString() {
  const storedObject = await SecureStore.setItemAsync('myKey');
  const deserializedObject = JSON.parse(storedObject);
}
```

### Delete a Key-Value pair

To delete data from the SecureStore in React Native, you can use the appropriate method provided by the secure store library you are using. Here's an example using the Expo SecureStore API:

```javascript
const deleteData = async () => {
    await SecureStore.deleteItemAsync('key');
}
```

## Store user credentials in SecureStore in Login Page

When implementing a login page in a React Native application with a "Remember Me" checkbox, you can utilize the secure store to store data securely based on the user's preference.

First, include a checkbox in your login page that allows the user to indicate whether they want their login information to be remembered. 

In your WaveMaker project, navigate to the `Pages/Login` file and add the following code snippet, which imports the plugin into the app.

```javascript
const SecureStore = require('expo-secure-store');
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