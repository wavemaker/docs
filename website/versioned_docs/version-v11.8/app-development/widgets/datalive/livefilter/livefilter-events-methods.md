---
title: "Live Filter - Events & Methods"
id: "livefilter-events-methods"
sidebar_label: "Events & Methods"
---
---

## Events

Live Filter behavior can be customized with the help of the call-back events. These events can be accessed from the events tab on the Properties panel. The trigger for the event can be JavaScript, another Variable call etc..

### `On before service call` 

This event will be called on Live Filter. Any validation checks can be performed here. Returning false from the script will stop the filtering. 

```
Page.livefilter1Beforeservicecall = function($data) {
        //$data has the data of the all widgets inside the live filter. This data can be modified and validated before sending the request.
        $data.tenantid.value = 1; //Values can be set for some specific fields.
    };
```


### `On success`

This event will be called after API returns a success response. 

```
Page.livefilter1Success = function($data) {
        //$data has the fitlered response returned from the API.
        console.log("The filtered data:", $data);
    };
```

### `On error`
This event will be called after API returns a failure response. 
```
Page.livefilter1Error = function($data) {
    //$data has the error message returned from the API.
    console.log("Error returned from server:", $data);
};
```


## Methods

Following methods can be used from within the JavaScript to manipulate a Live Filter properties:

### To filter data
```
Page.Widgets.DepartmentFilter.formfields.deptId.value = 1; 
//Sets the value to filter field deptId to 1 and filters the data.
```
    
### To clear the filter
```   
Page.Widgets.DepartmentFilter.clearFilter();; 
//Clears the filter.
```
