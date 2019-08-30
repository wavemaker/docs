---
title: "Live Filter - Events & Methods"
id: ""
---

# Events

Live Filter behavior can be customized with the help of the call-back events. These events can be accessed from the events tab on the Properties panel. The trigger for the event can be JavaScript, another Variable call etc..

Event

Trigger and JavaScript Usage

On before service call

This event will be called on Live Filter. Any validation checks can be performed here. Returning false from the script will stop the filtering.

Page.livefilter1Beforeservicecall = function($data) {
        //$data has the data of the all widgets inside the live filter. This data can be modified and validated before sending the request.
        $data.tenantid.value = 1; //Values can be set for some specific fields.
    };

On success

This event will be called after API returns a success response.

Page.livefilter1Success = function($data) {
        //$data has the fitlered response returned from the API.
        console.log("The filtered data:", $data);
    };

On error

This event will be called after API returns a failure response.

Page.livefilter1Error = function($data) {
    //$data has the error message returned from the API.
    console.log("Error returned from server:", $data);
};

# Methods

Following methods can be used from within the JavaScript to manipulate a Live Filter properties:

- To filter data:
    
    Page.Widgets.DepartmentFilter.formfields.deptId.value = 1; 
    //Sets the value to filter field deptId to 1 and filters the data.
    
- To clear the filter:
    
    Page.Widgets.DepartmentFilter.clearFilter();; //Clears the filter.
    
     

< Actions

Use Cases >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
    - [i. Data Source](/learn/app-development/widgets/datalive/livefilter/live-filter-data-source/)
    - [ii. Layouts](/learn/app-development/widgets/datalive/livefilter/livefilter-layouts/)
    - [iii. Configuration](/learn/app-development/widgets/datalive/livefilter/filter-configurations/)
    - [iv. Field Configuration](/learn/app-development/widgets/datalive/livefilter/livefilter-field-configuration/)
    - [v. Actions](/learn/app-development/widgets/datalive/livefilter/livefilter-actions/)
    - [vi. Events & Methods](/learn/app-development/widgets/datalive/livefilter/livefilter-events-methods/)
        - [○ Events](#events)
        - [○ Methods](#methods)
    - [vii. Use Cases](/learn/app-development/widgets/datalive/livefilter/livefilter-use-cases/)
