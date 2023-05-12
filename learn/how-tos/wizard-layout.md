---
title: "How to Select Widget Template and Set Icon for Wizard Steps"
id: "wizard-layout"
sidebar_label: "Widget Template and Icons"
---
---

In this document, learn how to change the template and layout of the Wizard widget. There are four types of Wizard templates that support both horizontal and vertical alignments.

1. Number
2. Icons-stepper
3. Dotted-stepper
4. Classic. 

## Choosing Widget Template from Canvas

1. Drag and drop a Wizard widget.
2. Select the **Wizard** widget on the canvas, and expand the layout icon on the toolbar. 
3. Click the **Layout** icon. 
4. A dropdown displaying the list of available widget templates appears. 

![widget template icon on toolbar](/learn/assets/widget-template-icon.png)

### Number Widget Template

Wizard steps in the Number template are identified by numbers starting with **1**.

![Number template for wizard](/learn/assets/number_wizard.png)

### Dotted Stepper Widget Template

In comparison, the dotted-stepper places a dot in each wizard step. 

![Dotted Stepper template for wizard](/learn/assets/dotted_stepper_wizard.png)

Upon visiting a specific step, the step style changes from a number or dot to a **Done** icon.

![Done State for wizard](/learn/assets/done_state_wizard.png)

## Properties

There is an icon-stepper wizard with two properties to choose from. 

1. **Title Icon Class**
2. **Done Icon Class** 

### Title Icon Class Property

The **Title Icon Class** property is used to set the icon class for the individual step in the unvisited state of a step in the wizard.

![Title Icon Class Property for wizard](/learn/assets/title-icon-class.png)

### Done Icon Class Property

The **Done Icon Class** property is used to set icon class for the individual step in the visited state of a step in the wizard.

![Title Icon Class Property for wizard](/learn/assets/done-icon-class.png)

By default, this property will is set to **wi wi-done**, meaning the visited steps for all the available wizard layouts will show checked-circle as the icon.