---
title: "Custom"
id: "custom"
---

---

import customWidgetProperties from "/learn/assets/widgets/advanced/customWidgetProperties.png"
import customWidgetAddProperty from "/learn/assets/widgets/advanced/customWidgetAddProperty.png"
import customWidgetBindProperty from "/learn/assets/widgets/advanced/customWidgetBindProperty.png"

**Custom Widget** is used to add third party Native libraries to the project, Any Native functional component can be added using this widget. This widget can be used only in Prefabs, and using Prefab properties and Events we can expose the Native Libraty properties and callback functions so that this can be used in React Native applications.

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

To add Native Libraries, inside **Config Prefab** write the packange name and version as follows and add it to the scripts

```
npm://package_name@package_version
```

![Custom Widget Add Package](/learn/assets/widgets/advanced/customWidgetAddPackage.png)

## Adding the Library Functional Component

To add the functional component, In Script tab we need to write the component using javascript (i.e by using **react.createElement**) and return the component.

Initiall we need write require statements to import the libraries

```
const react = require('react');
const calendar = require('react-native-swipeable-weekly-calendar');
```

Since **Custom Widget** will be available after **Prefab.onReady**, we need to pass the functional component written to the renderview property of the Custom Widget.

```
Prefab.onReady = function() {
    Page.Widgets.custom1.renderview = renderCalendar;
};
```

We can write the function component inside Script tab using **React.createElement()** function, and we can pass the properties added to Custom Widget using **Add Property** with a parameter(eg: **prop** as shown below).

```
syntax:
react.createElement(*FunctionalComponent*, {*Props*}, *ChildComponent*);
```

We can expose the properties of the imported library, by using the Prefab Property. In the code shown below **props.date** is a property added to Custom Widget using **Add Property** and bound it's value with **Prefab.date** which is a Prefab property.

<div style={{flex:1, flexDirection:"row"}}>
    <img src={customWidgetAddProperty} style={{width:200, height:200, margin:10}} alt="Custom Widget Add Property"/>
    <img src={customWidgetBindProperty} style={{width:200, height:200, margin:10}} alt="Custom Widget Bind Property"/>
</div>

We can also implement library **Callback** functions, In the code shown below **onPressDate** is the callback function to expose it, here we are triggering **Prefab.onChange** function which is Prefab Event.

:::note
Since the call back function executes inside the imported Native library, to update the changes inside Prefab we need to use **refresh()** function as shown below
:::

```
function renderCalendar(props) {
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

Now we can implements this Prefab in any React Native applications and use Prefab properties to control the Component.