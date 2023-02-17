---
title: "Style App using app.css and Page Styles"
id: "styles"
sidebar_label: "Styles"
---
---

In React Native app, styles are expressed as a JavaScript object. Refer [https://reactnative.dev/docs/style](https://reactnative.dev/docs/style). These styles are similar to CSS styles but with different names. When compared to CSS properties, reactnative style properties are very limited. Check the list of [View Style](http://www.wavemakeronline.com/app-runtime/latest/rn/style-docs/widgets/view/), [Text Style](http://www.wavemakeronline.com/app-runtime/latest/rn/style-docs/widgets/text/) and [Image Style](https://www.wavemakeronline.com/app-runtime/latest/rn/style-docs/widgets/image/).

## Styling

In WaveMaker, partial support is added to mention styles in CSS format. Let us take a button as an example. In the button, there are 3 stylable units. 

They are:
1. container
2. text 
3. icon

For each of these stylable units, unique class names are assigned. 
They are:

1. app-button, 
2. app-button-text and 
3. app-button-icon. 

Using these class names, you can mention styles in the theme, app.css, and page styles. 

In this way, every WaveMaker widget has several stylable units. 

There is a link to style document across each widget in [Widgets page](../features/widgets.html). 

In Studio, auto-suggestions for class names populate in the style editor as you type in page styles.

![Styles Auto Suggestion](/learn/assets/styles_auto_suggestion.png)

:::note
There is no style property inheritance support in React Native. Due to this, Views shown in the web preview may differ when the app is opened on mobile. 
:::

For example, in a sample application, drag and drop a button. If you want to customize this particular button's style, then give a class name to the button (let's say custom-btn) in the properties panel. 

Here, you want to change the background-color of the button and the color of the text inside the button.

- For changing the background color, just using the .custom-btn.app-button class will work.
- For changing text color, just using the .custom-btn.app-button-text class will work.

![Button Styles](/learn/assets/button-styles.png)

Following is the way to specify styles:

```
.app-button - will target all buttons
.custom-btn.app-button - will target only buttons that have custom-btn class.
```

Some widgets use WaveMaker widgets internally. For example, buttons use icons internally. Following is the way to change the color of the icon.

```
.custom-btn.app-button-icon.app-icon-shape {
 color : red;
}
```

## Limitations

1. Users must define styles targeting only auto-suggested class names (or stylable units). 
2. Expect class names, no other CSS selector definitions are supported. Also, do not write any styles specific to the dom selector.
3. Using parent class name selector is not supported. For example, a container has a class ".custom-container". If you need to change the CSS of the button placed inside it, this can be expressed below in normal CSS.

```
.custom-container > .app-button {
 background-color: ‘red’;
}
```
Whereas in React Native, you must target the button directly. The styles of the container will not get passed to the button. In this case, a class has to be mentioned on that button, and styles must be specified for that class.

```
.custom-container.app-container {
 background-color: red;
}
.custom-btn.app-button {
 background-color: red;
}
```

All these CSS styles are converted to JS objects during code generation.

## Order of styles computed (Bottom to top)

1. Inline styles
2. page.css
3. app.css
4. Theme
5. Runtime default styles

