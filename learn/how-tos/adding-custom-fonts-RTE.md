---
title: "Adding custom fonts to the Richtext Editor"
id: ""
---

In this document we will see how we can add custom fonts to the Richtext Editor.

## Steps

In order to add custom fonts to the Richtext Editor, we will have to modify the `defaultOptions` property of the widget and add desired font names to the list. We will be doing this inside the onBeforeRender() event, before the widgets gets loaded. Please follow the steps below. 

- Inside the the onBeforeRender() event of the Richtext Editor add the below snippet. The snippet adds "Inter" font to the fontNames array. We are also adding the `fontNamesIgnoreCheck` array to ignore the checks for the font, as it may take time to load.  
    ```javascript
    Page.<richTextEditor>Beforerender = function($event, widget) {
        var defaultOptions = widget.getDefaultOptions();
        defaultOptions.fontNames.push("Inter");
        defaultOptions.fontNamesIgnoreCheck = ["Inter"]; // ignore checks for the font
    };
    ```
 - Import the font css in the project, here we are importing the stylesheet in the index.html
     ```html
     <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'>
     ```

![/learn/assets/RichtextEditor/RTE-custom-font.png](/learn/assets/RichtextEditor/RTE-custom-font.png)



