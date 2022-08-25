---
title: "How to select widget template and set Icon for wizard steps"
id: ""
sidebar_label: "Choose Widget Template"
---
---

This feature is used to change the template, or the layout of the widget. We have four different types of templates number, iconstepper, dottedstepper and classic. And in these we have horizontal and vertical alignment for number, iconstepper, dottedstepper templates.

## Choosing Widget Template from Canvas

1. Drag and drop a Wizard widget.

2. When you select the **Wizard** widget on the canvas, you can see the layout icon on the toolbar. Click the **layout** icon.

![widget template icon on toolbar](/learn/assets/widget-template-icon.png)

3. It opens a dropdown, which displays the list of available widget templates.


4. For the number and dottedstepper wizard template, we get numbers and dots respectively in the place of wizard steps. 

**Number Widget Template**

![Number template for wizard](/learn/assets/number_wizard.png)

 **Dotted Stepper Widget Template**

![Dotted Stepper template for wizard](/learn/assets/dotted_stepper_wizard.png)

In the number template the wizard steps are idenitifed using the numbers where the first step would be 1 , second would be 2 and so on. Where as in the dottedstepper we would get a dot in the place of wizard step. 

Upon visiting a certain step the step style would change from number or dot to done icon.

![Done State for wizard](/learn/assets/done_state_wizard.png)

There is an iconstepper wizard which has two proeprties which we can choose from. One is the Title icon class property and the other is the Done icon class property. 

 **Title Icon Class Property**

 The title icon class property is  used to set icon class for the individual step in unvisited state of a step in the wizard.

 ![Title Icon Class Property for wizard](/learn/assets/title-icon-class.png)

  **Done Icon Class Property**

 The done icon class property is used to set icon class for the individual step in visited state of a step in the wizard.

 ![Title Icon Class Property for wizard](/learn/assets/done-icon-class.png)

 By default this property will be set to “wi wi-done”. This means, visited steps for all the available wizard layouts will show checked-circle as the icon.

