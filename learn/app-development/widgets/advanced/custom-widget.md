---
title: "Custom"
id: "custom"
---

---

import customWidgetProperties from "/learn/assets/widgets/advanced/customWidgetProperties.png"
import customWidgetAddProperty from "/learn/assets/widgets/advanced/customWidgetAddProperty.png"
import customWidgetBindProperty from "/learn/assets/widgets/advanced/customWidgetBindProperty.png"

**Custom Widget** is used to add third party React Native Components to the project. This widget can be used only in Prefabs. By using Prefab properties and Events, Component properties and callback functions can be exposed and this prefab can be used in React Native applications.

:::warning
Custom Widget is available only in Prefabs for React Native apps.
:::

![Custom Widget](/learn/assets/widgets/advanced/customWidget.png)

## Properties

| **Property** | **Description**                                                                      |
| ------------ | ------------------------------------------------------------------------------------ |
| Name         | The name is a unique identifier for Custom Widget.                                   |
| Add Property | This will add properties to Custom Widget                                            |
| **Layout**   |
| Width        | The width of your widget can be specified in px or % (i.e 50px, 75%).                |
| Height       | The height of your widget can be specified in px or % (i.e 50px, 75%).               |
| **Behavior** |
| Show         | Showing determines whether or not a component is visible. It is a bindable property. |

<img src={customWidgetProperties} style={{width:200, height:500}} alt="Custom Widget Properties"/>

## Adding Third party Native Libraries

To add React Native Components, inside **Config Prefab** write the packange name and version as follows and add it to the scripts

```
npm://package_name@package_version
```

![Custom Widget Add Package](/learn/assets/widgets/advanced/customWidgetAddPackage.png)

## Adding the React Native Component as a Functional Component

In Script tab, components can be written as functional component using javascript (i.e by using **react.createElement**) which returns the component.

require statements should be written inside the function, to import the Components 
```
const react = require('react');
const calendar = require('react-native-swipeable-weekly-calendar');
```

Since **Custom Widget** will be available after **Prefab.onReady**, the component written should be passed to the renderview property of the Custom Widget.

```
Prefab.onReady = function() {
    Page.Widgets.custom1.renderview = renderCalendar;
};
```

Component can be written inside Script tab using **React.createElement()** function, and the properties can be added to Custom Widget using **Add Property** with a parameter(eg: **prop** as shown below).

```
syntax:
react.createElement(*FunctionalComponent*, {*Props*}, *ChildComponent*);
```

Properties of the imported Component can be exposed, by using the Prefab Property. In the code shown below **props.date** is a property added to Custom Widget using **Add Property** and bound it's value with **Prefab.date** which is a Prefab property.

<div style={{flex:1, flexDirection:"row"}}>
    <img src={customWidgetAddProperty} style={{width:200, height:200, margin:10}} alt="Custom Widget Add Property"/>
    <img src={customWidgetBindProperty} style={{width:200, height:200, margin:10}} alt="Custom Widget Bind Property"/>
</div>

Component **Callback** functions can also be implemented, In the code shown below **onPressDate** is the callback function which is exposed by triggering **Prefab.onChange** function which is Prefab Event.

:::note
Since the call back function executes inside the imported component, to update the changes inside Prefab **refresh()** function need to be used as shown below
:::

```
function renderCalendar(props) {
    const react = require('react');
    const calendar = require('react-native-swipeable-weekly-calendar');
    return react.createElement(calendar.default, {
        date: props.date,
        onPressDate: (date) => {
            Prefab.onChange(date);
            Prefab.date = date;
            Prefab.refresh();
        },
        showMonth: true,
        language: "en"
    })
    return component;
}
```

Now this Prefab can be implemented in any React Native applications and use Prefab properties to control the Component.
