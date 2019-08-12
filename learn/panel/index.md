---
title: "Panel"
date: "2016-06-27"
---

**panel** be used to group a set of widgets together. It has a collapsible title bar and you can add multiple panels and any number of multiple panes can be open at any given point of time.

panel has designated sections such as header, body, and footer. [![](../assets/panel_run1.png)](../assets/panel_run1.png)

[![](../assets/panel_run2.png)](../assets/panel_run2.png)

- can define the of the panel to be another page, partial page or place widgets in the panel.
- various can be set for the panel as per your needs:
    
    - \- entering a comma separated items or binding to a variable, would give a drop-down menu widget which can be handled.
    - **Text** - entering text either in plain format or an HTML format will enable _icon_ on the title bar of the panel which on click would display the help content.
    - \- lets the user collapse or expand a given panel at runtime.  Note:  When the content of Panel widget is set to a partial and the initial state is collapsed, the loading of the partial is deferred/delayed until the widget is expanded for the first time.
    - **Full Screen** - lets the user make panel full screen
    - \- defines the default behavior of the panel
    - **Default Close Action** - lets user close the panel. This triggers an event, which the developer can choose to handle through JavaScript code.
    - \- controls the animation behavior of the panel
    - **Class** - defines the icon to be displayed on the header
    
    [![](../assets/panel_prop1.png)](../assets/panel_prop1.png) [![](../assets/panel_prop2.png)](../assets/panel_prop2.png)

<iframe width="60%" height="350" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Panels"></iframe>

### Styles

Panel style can be set by using the **Name** option from the tab of the panel. You can also use the Conditional Class property to set the class based upon a condition. See here for [to](/learn/how-tos/use-conditional-class-property/)

<iframe width="100%" height="800" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/PanelStyle">Style</iframe>

panel has few methods exposed on widget scope which can be accessed via JavaScript. [below for usage example](#script-access)

- close a panel:
    
    1.close(); //Closes panel1
    
- expand a panel:
    
    1.expand(); //Expand panel1
    
- collapse a panel:
    
    1.collapse(); //collapses panel1
    
- toggle panel status:
    
    1.toggle(); //Toggles the panel
                       // i.e expands if closed, closes if expanded
    
     
- displays panel in full screen:
    
    1.toggleFullScreen(); //displayes in full screen panel1
    
- show the help text as set from the properties panel:
    
    1.toggleHelp(); //displays help text
    

# Access

**1:- (Prepare data and widgets)**

1. three variables of type ‘Employee’ entity and for 1st variable from variables tab select the variable and go to data tab and for deptid keep value as 1, do the same for others also as deptid 4, 2 for respective variables, name these variables as ‘EngineeringEmployeesData’, ‘SalesEmployeesData’, ‘MarketingEmployeesData’. [how to create variables from here.](/learn/app-development/variables/database-crud/#menu)
2. and Drop two Panel widget.
3. first ‘Panel’ widget as ‘engineeringPanel’ and second ‘Panel’ widget as ‘salesPanel’.
4. ‘collapsible’ and ‘closable’ on both the panel widgets from properties panel options.
5. ‘engineeringPanel’ uncheck the ‘expanded’ property from properties panel as shown above and for ‘salesPanel’ check the ‘Enable full screen’ option from properties panel.
6. title of ‘engineeringPanel’ to ‘Engineering’ and subheading to ‘Dept’ and change title of ‘salesPanel’ to ‘Sales’ and subheading to ‘Dept’.
7. ‘List’ widget in each of these panels and bind to respective variables and map template widgets to respective fields.
8. three buttons and name the first button as ‘collapseSalesBtn’, the second one as ‘expandEngBtn’ and last one as ‘closeSalesBtn’ and also change the captions to ‘Collapse Sales Panel’, ‘Expand Engineering Panel’, ‘Close Sales Panel’.

**2:- (Scripting with accordion)**

1. JavaScript for on click event of ‘collapseSalesBtn’ and use the following as javascript function with the following script:
    
     = function($event, widget) {
        Page.Widgets.salesPanel.toggle(); //Toggles the panel
          // i.e expands if closed, closes if expanded
    };
    
2. JavaScript for the on click event for ‘expandEngBtn’ and use the following script:
    
     = function($event, widget) {
        Page.Widgets.engineeringPanel.toggle();//Toggles the panel
         // i.e expands if closed, closes if expanded
    };
    
3. JavaScript for the on click event for ‘goToSalesBtn’ and use the following script:
    
     = function($event, widget) {
        Page.Widgets.salesPane.expand(); //Expands sales accordion pane.
    };
    
4. JavaScript for the on click event for ‘closeSalesBtn’ and use the following script:
    
     = function($event, widget) {
        Page.Widgets.salesPanel.close(); //Closes sales panel
    };
    

**3:- (Run)**

1. on ‘Collapse Sales Panel’ and see it toggles the sales employees panel i.e if expanded closes it and if closed expands it.
2. on ‘Expand Engineering Panel’ and see it toggles the sales employees panel i.e if expanded closes it and if closed expands it.
3. on ‘Close Sales Panel’ and see it closes the Sales panel.

the title of the panel. It is bindable.

Heading

the subheading of the panel. It is bindable.

name is a unique identifier for the panel.

Value

to be displayed in the badge span. It is bindable

Type

bindable property controls the color of the badge. These values are default, primary, success, info, warning, danger.

Text

this property has a value, a "?" icon is added next to your editor. If the user points the mouse at this icon, the text you put into this helpText property will popup for the user.

height of your widget can be specified in px or % (i.e 50px, 75%).

content(in the case of an HTML widget) or Page's content(in the case of page container widgets) will be included in the widget.

Actions

bindable property sets the actions for the widget. To set the data and events see [menu widget](/learn/app-development/widgets/navigation/dropdown-menu-use-cases/)

Label

(available only when the above Menu Actions is bound to a variable)

for anchor or menu tags generated dynamically.

Icon

(available only when the above Menu Actions is bound to a variable)

for the action. Example- 'fa fa-ban' or 'glyphicon glyphicon-cloud'.

Link

(available only when the above Menu Actions is bound to a variable)

for the action item.

Task

(available only when the above Menu Actions is bound to a variable)

for menu items generated dynamically. This is the action that will be triggered when the user clicks on the Menu Item. It can be a script like: 1.show or 1.invoke() Execution order on click of Node:

1. provided will be executed first.
2. provided will be executed next.
3. provided _ link_ will be executed last.

Role

(available only when the above Menu Actions is bound to a variable)

for menu items generated dynamically. You can assign the property to 'userrole' which contains comma separated user roles. Each item will be evaluated with given 'userrole' for that item to that of the logged in user roles, from security. If any of the user roles bound to 'userrole' property matches then that menu item will be shown else will be hidden.

Actions

(available only when the above Menu Actions is bound to a variable)

an action is required the sub-items can be mentioned in the children.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

control for collapsing and expanding the panel.

full screen

control for making the panel full screen.

property defines if the panel should be allowed to be closed.

the default state of the panel whether it is expanded or collapsed.

Close

property defines the behavior of menu closing, it can be:

- \- close the menu when clicked outside of the menu,
- \- when a menu item is selected or on click outside menu, or
- \- do not close once opened.

property controls the animation of an element. The animation is based on the CSS classes and works only in the run mode.

Class

property defines the class of the icon that is applied to the button.

load

event handler is called when the panel is loaded.

**Events**

mouse over

event fires when the mouse hovers over this widget.

mouse out

event fires when the mouse moves away from this widget.

mouse enter

event handler is called whenever the mouse enters the widget.

mouse leave

event handler is called whenever the mouse leaves the widget.

**Events**

swipe up

event handler is called whenever a swipeup event is triggered.

swipe down

event handler is called whenever swipe down event is triggered.

swipe left

event handler is called whenever swipe left event is triggered.

swipe right

event handler is called whenever a swiperight event is triggered.

pinch in

event handler is called whenever pinch event is triggered.

pinch out

event handler is called whenever a pinchout event is triggered.

**Events**

enter key press

the user hits ENTER/Return while the focus is in this editor, execute the specified event handler.

**Events**

close

event handler is called whenever a close event is triggered.

expand

property defines the event handler for the expand event of the accordion panels.

collapse

property defines the event handler for the collapse event of the accordion panels.

actions click

event handler is called when the actions icon is clicked.

full screen

event is called on the full-screen state of the widget.

exit full screen

event is called on the full-screen state is exited.

[2\. Container Widgets](/learn/app-development/widgets/widget-library/#container)

- [2.1 Accordion](/learn/app-development/widgets/container/accordion/)
- [2.2 Container](/learn/app-development/widgets/container/container/)
- [2.3 Grid Layout](/learn/app-development/widgets/container/grid-layout/)
- [2.4 Panel](/learn/app-development/widgets/container/panel/)
    - [Features](#features)
        - [Usage](#usage)
        - [Styles](#styles)
    - [Methods](#methods)
    - [Script Access](#script-access)
    - [Properties](#properties)
    - [Events](#events)
- [2.5 Tabs](/learn/app-development/widgets/container/tabs/)
- [2.6 Tile](/learn/app-development/widgets/container/tile/)
- [2.7 Wizard](/learn/app-development/widgets/container/wizard/)
