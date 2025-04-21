---
title: "Change Icon Color on Condition"
id: "displaying-icon-color-based-upon-condition"
---
---

In WaveMaker, widgets can display icon for Panel, Button, and more. You can choose the icons from the list of wavicons or font-awesome icons. You can use glyph icons, available [here](http://getbootstrap.com/components/#glyphicons).

You can change the color of an icon based on a condition. In the following example, see how to change the Icon color based on ckeching a Checkbox.

1. Drag and drop an Icon and a Checkbox widget.
2. For the Checkbox widget, set the `checked value` and `unchecked value` as true and false respectively. 

[![](/learn/assets/icon_color1.png)](/learn/assets/icon_color1.png)

3. Click on the Icon widget and for the "Icon Class" property click on the bind icon. 

[![](/learn/assets/icon_color2.png)](/learn/assets/icon_color2.png)

4. Enter the expression as below.

``` 
<glyph class name>" + " " + (Widgets.<checkbox_name>.datavalue?"first_calssname":"second_classname") 
```

[![](/learn/assets/icon_color3.png)](/learn/assets/icon_color3.png) 

In this example the expression, `text-danger` and `text-info` are the in-build classes of the product which we used to set the color. You can use your own class (defined in the css file) to set the color property.

