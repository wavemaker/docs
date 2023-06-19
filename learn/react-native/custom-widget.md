---
title: "Custom"
sidebar_label: "Custom Widget"
id: "custom-widget"
---

---

import customWidgetProperties from "/learn/assets/widgets/advanced/customWidgetProperties.png"
import customWidgetAddProperty from "/learn/assets/widgets/advanced/customWidgetAddProperty.png"
import customWidgetBindProperty from "/learn/assets/widgets/advanced/customWidgetBindProperty.png"
import customWidgetPreview from "/learn/assets/custom-widget-preview.gif"

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
using npm:
npm://package_name@package_version
using git:
npm://package_name@github:username/repository
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

## Example

### React Native App

#### Markup

```
<wm-page name="mainpage">
    <wm-content name="content1">
        <wm-page-content columnwidth="12" name="page_content1" backgroundcolor="#ffffff">
            <wm-prefab prefabname="calendar" name="calendar1" on-change="calendar1Change($event, $data, newVal, oldVal)" width="100%" height="150"></wm-prefab>
            <wm-list listclass="list-group" itemclass="list-group-item" template="true" template-name="Text with Avatar List" itemsperrow="xs-1 sm-1 md-1 lg-1" class="media-list" statehandler="URL" name="randomuserList1" dataset="bind:Variables.people.dataSet" navigation="Pager"
                itemkey="bind:Variables.people.dataSet[$i].email">
                <wm-listtemplate layout="inline" name="listtemplate2">
                    <wm-linearlayout direction="row" horizontalalign="left" spacing="12" padding="12px" verticalalign="center" name="linearlayout3">
                        <wm-linearlayoutitem name="linearlayoutitem6">
                            <wm-picture width="58px" height="58px" name="Picture" picturesource="bind:Variables.people.dataSet[$i].picture.large" shape="circle" resizemode="cover" class="media-object"></wm-picture>
                        </wm-linearlayoutitem>
                        <wm-linearlayoutitem flexgrow="1" name="linearlayoutitem7">
                            <wm-linearlayout direction="column" name="linearlayout4">
                                <wm-linearlayoutitem name="linearlayoutitem8">
                                    <wm-label name="Title" caption="bind:Variables.people.dataSet[$i].name.first" class="h4" fontweight="bold"></wm-label>
                                </wm-linearlayoutitem>
                                <wm-linearlayoutitem name="linearlayoutitem9">
                                    <wm-label name="SubTitle" caption="bind:Variables.people.dataSet[$i].email" class="h5"></wm-label>
                                </wm-linearlayoutitem>
                            </wm-linearlayout>
                        </wm-linearlayoutitem>
                        <wm-linearlayoutitem width="25px" name="linearlayoutitem10">
                            <wm-icon iconclass="wi wi-more-vert" iconsize="22px" name="icon2"></wm-icon>
                        </wm-linearlayoutitem>
                    </wm-linearlayout>
                </wm-listtemplate>
            </wm-list>
        </wm-page-content>
    </wm-content>
</wm-page>
```

#### Script

```js
Page.onReady = function () {
  Page.Variables.people.dataSet = Page.calendar1Change("11-05-2023");
};
Page.calendar1Change = function (data) {
  let day = new Date(data).getDate();
  Page.Variables.people.dataSet = [];
  for (i = 0; i < 3; i++) {
    if ((day + i) % 8 === 0) {
      continue;
    }
    Page.Variables.people.dataSet.push(
      Page.Variables.RandomuserInvoke.dataSet.results[day + i]
    );
  }
  Page.Widgets.randomuserList1.refresh();
  Page.refresh();
};
```

### Prefab

#### Markup

```
<wm-prefab-container name="prefab_container1">
    <wm-custom name="custom1" dateparam="bind:date"></wm-custom>
</wm-prefab-container>
```

#### Script

```
Prefab.onPropertyChange = function(key, newVal, oldVal) {};

Prefab.onReady = function() {
    Prefab.date = new Date();
    if (Prefab.Widgets.custom1) {
        Prefab.Widgets.custom1.renderview = renderCalendar;
    }
};

function renderCalendar(props) {
    const react = require('react');
    const calendar = require('react-native-swipeable-weekly-calendar');

    return react.createElement(calendar.default, {
        date: Prefab.date,
        onPressDate: (date) => {
            Prefab.onChange(date);
            Prefab.date = date;
            Prefab.refresh();
        },
        showMonth: true,
        language: "en"
    });
}
```

### Preview

<img src={customWidgetPreview} />
