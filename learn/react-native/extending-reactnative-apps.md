---
title: "Maintaining and Extending Generated React Native Code Outside WaveMaker Studio"
id: "extending-reactnative-apps"
sidebar_label: "Extending Generated Code Outside WM"
---
---

WaveMaker is an accelerator platform that helps developers build applications fast while still keeping full control of the generated code. It avoids the “locked-in” low-code problem by letting teams customise, extend, and maintain the codebase outside the studio.

WaveMaker generates reusable React Native code with a clear, component-based structure. Each page sits in its own folder with its own UI, logic, styles, and variables.

WaveMaker follows standard development practices:

* **Component structure:** Every screen is a standalone React Native component.
* **Performance & security:** The build uses minification, bundling, and platform optimizations from Expo and Metro.
* **Custom extensions:** Developers can add their own React Native components or bring in third-party libraries.
* **Easy deployment:** The app can be packaged and deployed like a standard React Native project.

This document explains how to run, edit, and extend the generated React Native project after exporting it from WaveMaker Studio. It also shows the limitations, supported patterns, and the roadmap for improving this workflow.

---

## Running WaveMaker-Generated Code Locally

### Steps to Run

1. Export the project as a **React Native ZIP** from WaveMaker Studio.
2. Extract the downloaded ZIP.
3. Open the project folder in your code editor (for example, VS Code).
4. Move into the project directory:

   ```bash
   cd generated-native-app
   ```
5. Install project dependencies:

   ```bash
   npm install
   ```
6. Start the Expo development server:

   ```bash
   npm run start
   ```

You can now open the app in the Expo Go client or run it on a simulator depending on your local setup.

---

## Editing & Customizing Generated React Native Code

WaveMaker creates a standard project structure that allows developers to manage and extend the codebase independently. Understanding the file organization is key. The layout is simple: each screen has its own folder with its own UI, logic, styles, and variables.

### Page-Level Files

Each page is stored under:

```
src/pages/PageName/
```

A typical page includes:

* **PageName.component.js** – UI component for the screen.
* **PageName.script.js** – Event handlers and business logic.
* **PageName.style.js** – Style definitions.
* **PageName.variables.js** – Variables for data, API calls, and bindings.

### Global Configuration

* **Pages configuration:**
  `src/pages/pages.config.js` registers all pages and their component paths.

* **Navigation actions:**
  `src/app.variables.js` defines shared navigation helpers (for example, `goToPage_NewPage`).

This structure keeps each screen isolated and makes it easy to update layouts, logic, and data handling without touching the rest of the app.

---

## Modifying UI on an Existing Page

When updating a screen’s UI, you will typically:

1. **Edit the component file** (`PageName.component.js`) to change layout or add new components.
2. **Update the style file** (`PageName.style.js`) to adjust the visual design.
3. **Modify the script file** (`PageName.script.js`) to handle events or add logic.
4. **Update the variables file** (`PageName.variables.js`) to manage data, API calls, or bindings.

Because the project is standard React Native, you can use WaveMaker runtime components or any third-party library such as **react-native-paper**.

## Working with WaveMaker Components

The generated project uses **@wavemaker/app-rn-runtime**, which includes components that support the WaveMaker data-binding model.

### Data Binding

WaveMaker uses **Variables** to store API metadata and data sources.
Inside a component, a variable value is typically accessed through the `variables` prop.

Example:

```js
// PageName.component.js
export default function PageName({ variables }) {
  return (
    <WmLabel value={variables.userData?.data?.name} />
  );
}
```

### Event Binding

Events must point to functions defined in the page’s script file.

```js
// PageName.component.js
<Button title="Save" onPress={PageNameScript.onSave} />
```

```js
// PageName.script.js
export function onSave() {
  // custom logic here
}
```

## Working with Third-Party Components

Since it is now a free react-native expo project, developers have the flexibility to easily add other react-native component libraries directly and work with them to take the development forward. For example: Below is a sample that shows how they can add react-native-paper components to existing pages and do data binding and event binding in a regular way.

Since the exported project is a standard Expo app, you can install and use any React Native library. 

### Installing a Library

```bash
npm install react-native-paper
```

### Using a Component

```js
import { Button } from 'react-native-paper';

export default function PageName() {
  return <Button mode="contained">Click Me</Button>;
}
```

### Limitations

* Third-party components **cannot** bind directly to WaveMaker Variables or WaveMaker runtime styles. You must pass the values manually.

---


## Creating a New Page and Working with APIs

Developers often need to add new screens and connect them to existing flows. You can build new pages in two ways: the **WaveMaker way**, which follows the generated project structure, or the **React Native way**, which uses a single file without WaveMaker bindings.


## Working in the WaveMaker Way

WaveMaker pages follow the same four-file structure used by the generated screens. Developers familiar with this pattern can continue to create new pages and new variables in the same format.

### New Page Creation

Create a new folder under:

```
src/pages/WmNewPage
```

* Add the following files with default templates:
  * `WmNewPage.component.js`  
  * `WmNewPage.script.js`  
  * `WmNewPage.style.js`  
  * `WmNewPage.variables.js`


### Update Configurations

**Register the page** in:

```
src/pages/pages.config.js
````

```js
{
  name: 'WmNewPage',
  path: 'WmNewPage',
  component: require('./WmNewPage/WmNewPage.component').default
}
````

**Update `src/app.variables.js` to add a navigation action:**

```js
navigationActions: {
  goToWmNewPage: (navigation) => navigation.navigate('WmNewPage')
}
```

### Working With New APIs

Add Variable objects inside the `WmNewPage.variables.js` file to define the API or data source for the page.

Example:

```js
export const userList = {
  name: 'userList',
  type: 'rest',
  method: 'GET',
  url: 'https://api.example.com/users'
};
```

Access variables inside the component:

```js
// WmNewPage.component.js
<Text>{variables.userList?.data?.length}</Text>
```

Trigger variable invocation inside the script:

```js
// WmNewPage.script.js
export function refreshUsers(variables) {
  if (variables.userList?.invoke) {
    variables.userList.invoke();
  }
}
```

---

## Working in the React Native Way

Developers may choose to create pages using plain React Native without WaveMaker bindings. This gives full flexibility but removes access to Variables and WaveMaker components.

### Single-File Page Creation

Create a folder and file:

```
src/pages/RnNewPage/RnNewPage.js
```

Register the page in:

```
src/pages/pages.config.js
```

```js
{
  name: 'RnNewPage',
  path: 'RnNewPage',
  component: require('./RnNewPage/RnNewPage').default
}
```

**Update `src/app.variables.js` with a navigation action:**

```js
navigationActions: {
  goToRnNewPage: (navigation) => navigation.navigate('RnNewPage')
}
```

### Working With New APIs

React Native pages can call APIs directly using `fetch` or any third-party library such as Axios.

Example using Axios:

```js
import axios from 'axios';

export default function RnNewPage() {
  async function loadData() {
    const { data } = await axios.get('https://api.example.com/items');
    console.log(data);
  }

  return null;
}
```

### Limitations

* React Native pages cannot use WaveMaker Variables.
* WaveMaker components (such as `WmLabel` or `WmButton`) are not available.
* All data must be fetched and managed manually.

## RoadMaps

We are working towards enhancing this experience. Especially when developers choose WaveMaker and libraries to maintain the code further. Below are a few plans we have got.

* Provide CLI for Page and Variable creation