---
title: "Retain UI State in WaveMaker Apps"
author: Nikhilesh K V
---

A Wavemaker Application typically comprises of many pages, and each page consists of various widgets. When certain actions are performed on the page, it results in changes to the state of the application. Some of the examples are:
* Switching between different tab panes in a Tabs widget.
* Switching between different accordion panes in an Accordion widget.
* Selecting items in a List widget and navigating between different pages of the List(pagination).
* Searching, Sorting, Row Selection, and Pagination in a Data Table widget.

<!--truncate-->

## Problem

When any of the the above actions are performed in a page and the User navigates to another page, on navigating back to the previous page using Browser back button, the previous state is lost. All widgets of the page go back to their initial states. There should be a way to retain the state such that even when the user refreshes the page or shares the URL with someone else, they land on the page at a particular state.


## Solution

Retain State feature is coming to the rescue in Wavemaker 10.6 release! The actions performed above can be retained in the URL, Local Storage or Session Storage. A **Behavior** property called **Retain State** has been exposed for the supported widgets. This gives us the flexibility to be able to choose different State retention mechanisms for different widgets as and when required.

A sample URL with state information(provided that URL was chosen as Retain state mechanism) is shown below.
```
https://local-studio.wavemaker.com/run-jm4351st8w/StatePersistenceApp_master/#/Main?wm_state=('ws'~('RepsTable1'~('search'~!('field'~'city'_'value'~'New'_'matchMode'~'anywhereignorecase'_'type'~'string')*_'sort'~('direction'~'asc'_'field'~'name'))))
```
A reserved query param called **wm_state** is appended to the URL which contains the state information.

## Supported Widgets
As of 10.6 release, out of the box support has been provided for Tabs, Accordions, Lists and Data Tables. Support for other widgets will be incrementally added in the future releases. However, the below methods have been provided so that Users can retain state for other Widgets/Variables as well.

## DSL API
The below DSL methods have been exposed to cater to the custom use cases which a User can have. 
Mode is an optional parameter which can be passed for Widgets which don't support state retention by default. If no value is passed then mode will be defaulted to 'URL'.

1. ### setWidgetState(widget, value, mode?)
Sets the passed value to the state information by using the passed widget instance. 
Example:

On changing a text box value, we want to add a state param in the url.
```
Page.text1Change = function($event, widget, newVal, oldVal) {
    var stateService = App.getDependency('StatePersistenceService');
    stateService.setWidgetState(Page.Widgets.text1, {
        textValue: newVal
    });
};
```
2. ### getWidgetState(widget, mode?)
Will return the value set against the passed widget. This will be called on page load (typically in onPageReady). Based on the value returned, operations can be performed.

Example:
```
Page.onReady = function() {
    var stateService = App.getDependency('StatePersistenceService');
    var widgetState = stateService.getWidgetState(Page.Widgets.text1);
    if (widgetState && widgetState.textValue) {
        Page.Widgets.text1.datavalue = widgetState.textValue;
    }
};
```

3. ### removeWidgetState(widget, key?, mode?)
Removes the passed widget’s state information from the State Object. If a key is passed, then only that particular entry will be removed, not any other entries for that widget.


Example:
```
//Initial State: widget_state = {“TextBox1”: {“textValue”: “Hi”, “numberOfKeypresses”: “5” }};
stateService.removeWidgetState(Page.Widgets.text1);
//Updated State: widget_state = {};
```

4. ### setStateVariable(variableName, value, mode?)
Sets the passed value to the state information by using the passed variable name as key.

Example:
```
stateService.setStateVariable('Variable1', {
    numberOfTimesInvoked': 2
});
```
5. ### getStateVariable(variableName, mode?)
Checks if the passed variable name has any state information available in the url or not.

Example:
```
stateService.getStateVariable('Variable1');
```

6. ### removeStateVariable(variableName, mode?)
Removes the passed variable’s state information from the URL.

Example:
```
//Initial State: variable_state = {“Variable1”: {“textValue”: “Hi”, “numberOfKeypresses”: “5” }};
stateService.removeStateVariable(“Variable1”);
//Updated State: widget_state = {};
```



