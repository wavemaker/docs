---
title: "Accordion"
id: "accordion"
---

is a stacked list of UI components, with only one focused component expanded at any point of time and the rest collapsed.

**Accordion Widget** is a collection of accordion panes where users can either place the content or include the partial pages. [![](../assets/accordion_run.png)](../assets/accordion_run.png)

you drag and drop an Accordion, by default three accordion panes are provided. More accordion panes can be added by using _Accordion Pane_ action. Within each accordion pane, widgets like Data Table, List etc can be dragged and dropped and you can hide/show accordion panes according to the app requirement. In addition, you can provide the content as Partial Pages – for example – create a partial page and use that content within an accordion pane.

### Features - Accordion

1. \- Collection of AccordionPane controls
2. \- Set height to the Accordion. This will restrict the height of the accordion and scrollbar will appear in case the content is more.
3. _others_ - Check/Uncheck to allow multiple accordion panes to be visible parallelly.

### Features - Accordion pane

1. \- The Header of accordion pane contains a title and icon
2. _Header_ - Sets subheading for the accordion pane
3. \- The content in the accordion pane. This can be either
    - \- HTML content, widgets etc.,
    - \- any partial you have created within the app can be used as pane content
4. \- Indicated the small meaning information. The badge type can be set different styles - primary, success, info, warning, or danger on the accordion pane components to customize the look and feel. It can be bound to a variable, for example, to indicate the number of employees in a department
5. _pane default_ - Sets a default pane to be opened when the accordion is rendered

[![](../assets/accordion_prop.png)](../assets/accordion_prop.png) [![](../assets/accordion_pane_prop-1.png)](../assets/accordion_pane_prop-1.png)

### Types

<iframe width="100%" height="600" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Accordion"></iframe>

- [partial page content for Accordion within a List](/learn/how-tos/setting-partial-page-content-accordion-within-list/)

accordion has few methods exposed on widget scope which can be accessed via JavaScript. See below for usage example.

- Collapse a pane:
    
    1.collapse(); //collapse the specific pane.
    
- Expand a pane:
    
    1.expand(); //Expands sales accordion pane.
    
- toggles a pane i.e. opens if closed, closes if opened:
    
    1.toggle(); //toggles sales accordion pane.
    

# Access

**1:- (Prepare data and widgets)**

1. three variables of type ‘Employee’ entity and for 1st variable from variables tab select the variable and go to data tab and for deptid keep value as 1, do the same for others also as deptid 4, 2 for respective variables, name these variables as ‘EngineeringEmployeesData’, ‘SalesEmployeesData’, ‘MarketingEmployeesData’. [how to create variables from here.](/learn/app-development/variables/database-crud/#menu)
2. n Drop Accordion widget. By default, you will see accordion with 3 accordion panes.
3. ‘Accordion’ widget as ‘EmployeesAccordion’ and name accordion panes as ‘engineeringEmpPane’, ‘salesEmpPane’, ‘marketingEmpPane’.
4. accordion panes titles to ‘Engineering’, ‘Sales’, ‘Marketing’.
5. ‘List’ widget in each of these tabs and bind to respective variables and map template widgets to respective fields.
6. two buttons and name the first button as ‘collapseSalesBtnPane’, the second one as ‘expandSalesBtnPane’ and also change the titles to ‘Collapse Sales Employees Pane’, ‘Expand Sales Employees List’.

**2:- (Scripting with accordion)**

1. 1. JavaScript for the on click event of ‘collapseSalesPaneBtn’ and use the following as JavaScript function with the following script:
        
        \= function($event, widget) {
           Page.Widgets.salesPane.collapse(); //Expands sales accordion pane.
        };
        
    2. JavaScript for the on click event for ‘expandSalesPaneBtn’ and use the following script:
        
         = function($event, widget) {
        		Page.Widgets.salesPane.expand(); //Collapses sales accordion pane.
                    };
        

**3:- (Run)**

1. the application and by default first accordion will be expanded by default or if any pane is set as isDefaultPane that particular pane will be expanded on a load of the page.
2. click on ‘expandSalesPaneBtn’ and see sales accordion pane will be expanded.
3. click on ‘collapseSalesPaneBtn’ and see sales accordion pane will be collapsed.

name is a unique identifier for the Accordion. Special characters and spaces are not allowed in widget name.

Accordion Pane

action allows one to add multiple panes to the Accordion.

Index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

height of your widget can be specified in px or % (i.e 50px, 75%).

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately, irrespective of this property setting.

Others

property specifies whether, on clicking of an accordion panel, other panels should close or not.

**Pane** SubWidget of Accordion, to hold the accordion header and content.

bindable property defines the heading or title for the accordion pane.

Heading

bindable property defines the subheading for the accordion pane. It is displayed right below the Title of the Pane.

name is a unique identifier for the accordion pane. Special characters and spaces are not allowed in widget name.

Value

to be displayed in the badge area on the right edge of title next to the expand/collapse button. It is a bindable property.

Type

bindable property controls the color of the badge. The values are:

- ,
- ,
- ,
- ,
- ,

Index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

height of the widget can be specified in px or % (i.e 50px, 75%).

property, specifies the content to be displayed within the Accordion Pane:

- Content - HTML content or any widget
- Content - in the form of Partial pages created within the app, choose from the available list

determines whether or not a component is visible. It is bindable.

Default Pane

bindable property determines if this pane is the default pane.

Class

bindable property defines the class of the icon that is applied to the button.

The following events are available on the Accordion Panes

load

property defines the event handler for the load event of the accordion panes.

**Events**

expand

property defines the event handler for the expand event of the accordion panes.

collapse

property defines the event handler for the collapse event of the accordion panes.

[2\. Container Widgets](/learn/app-development/widgets/widget-library/#container)

- [2.1 Accordion](/learn/app-development/widgets/container/accordion/)
    - [Features](#features)
        - [Accordion](#accordion-features)
        - [Accordion Pane](#pane-features)
        - [Accordion Types](#types)
    - [Usage](#usage)
    - [Methods](#methods)
    - [Script Access](#script-access)
    - [Properties](#properties)
    - [Events](#events)
- [2.2 Container](/learn/app-development/widgets/container/container/)
- [2.3 Grid Layout](/learn/app-development/widgets/container/grid-layout/)
- [2.4 Panel](/learn/app-development/widgets/container/panel/)
- [2.5 Tabs](/learn/app-development/widgets/container/tabs/)
- [2.6 Tile](/learn/app-development/widgets/container/tile/)
- [2.7 Wizard](/learn/app-development/widgets/container/wizard/)
