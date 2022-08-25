---
title: "How to select widget template and set Icon for wizard steps"
id: ""
sidebar_label: "Choose Widget Template"
---
---

This feature is used to change the template, or the layout of the widget. There are four different types of templates number, icons-tepper, dotted-stepper and classic. In each of these both horizontal and vertical alignment is supported.

## Choosing Widget Template from Canvas

1. Drag and drop a Wizard widget.

2. Select **Wizard** widget on the canvas, and then expand the layout icon on the toolbar. Click the **layout** icon.

![widget template icon on toolbar](/learn/assets/widget-template-icon.png)

3. A dropdown displaying the list of available widget templates appears. 

**Number Widget Template**

![Number template for wizard](/learn/assets/number_wizard.png)

 **Dotted Stepper Widget Template**

![Dotted Stepper template for wizard](/learn/assets/dotted_stepper_wizard.png)

Wizard steps in Number template are idenitifed by numbers starting with 1. Where as the dotted-stepper places a dot in each of wizard step. 

Upon visiting a certain step the step style changes from number or dot to done icon.

![Done State for wizard](/learn/assets/done_state_wizard.png)

There is an icon-stepper wizard with two proeprties to choose from. One is the Title icon class property and the other is the Done icon class property. 

 **Title Icon Class Property**

 The title icon class property is  used to set icon class for the individual step in unvisited state of a step in the wizard.

 ![Title Icon Class Property for wizard](/learn/assets/title-icon-class.png)

  **Done Icon Class Property**

 The done icon class property is used to set icon class for the individual step in visited state of a step in the wizard.

 ![Title Icon Class Property for wizard](/learn/assets/done-icon-class.png)

 By default this property will be set to “wi wi-done”. This means, visited steps for all the available wizard layouts will show checked-circle as the icon.

