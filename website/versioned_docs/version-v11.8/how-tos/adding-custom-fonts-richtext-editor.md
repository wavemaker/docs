---
title: "Adding Custom Fonts to Richtext Editor"
id: "adding-custom-fonts-richtext-editor"
---
---

In this document, learn how to add custom fonts to the Richtext Editor.

## Adding Custom Fonts

To add custom fonts to the Richtext Editor, modify the **defaultOptions** property of the widget and add desired font names to the list. For that, you must add the function inside the **onBeforeRender()** event before the widgets are loaded.

### Steps

Follow the steps below to achieve this.

1. Add the below snippet inside the **onBeforeRender()** event of the Richtext Editor widget.

   - The snippet adds `Inter` font to the `fontNames` array.
 
```javascript
Page.<richTextEditor>Beforerender = function($event, widget) {
    var defaultOptions = widget.getDefaultOptions();
    defaultOptions.fontNames.push("Inter");
    defaultOptions.fontNamesIgnoreCheck = ["Inter"]; // ignore checks for the font
};
```

:::note
We have included the `fontNamesIgnoreCheck` array to ignore checks for the font, as it may take longer to load.  
:::

2. Import the font CSS in the project. Here, we are importing the stylesheet in `index.html`.

```html
<link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
```

![/learn/assets/RichtextEditor/RTE-custom-font.png](/learn/assets/RichtextEditor/RTE-custom-font.png)