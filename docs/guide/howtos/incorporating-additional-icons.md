---
title: "Incorporating Additional Icons"
id: "incorporating-additional-icons"
last_update:
  author: "Author Name"
---
---
In WaveMaker, widgets can display icon for Panel, Button, and more. You can choose the icons from the list of wavicons or font-awesome icons. You can use glyph icons, available [here](http://getbootstrap.com/components/#glyphicons).

In this topic, learn how to add additional icons. In the following example, we are adding foundation icons.

1. Import all the files in the library into the resources folder. 

Image: icon_add1.png

2. Navigate to the `index.html` and include the imported CSS file.

```
<link rel="stylesheet" href="resources/icons/foundation-icons.css" type="text/CSS" /> 
```
Image: icon_add2.png 

:::note
You can also include the CDN URL directly without importing the files in step-1.
:::

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" type="text/CSS" />
```
3. Go to the page and drag and drop the icon widget and set the add the class name for the icon class property. 

Image: icon_add3.png

