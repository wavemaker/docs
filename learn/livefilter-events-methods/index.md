---
title: "Live Filter - Events & Methods"
date: "2016-11-08"
---

Live Filter behavior can be customized with the help of the call-back events. These events can be accessed from the events tab on the Properties panel. The trigger for the event can be JavaScript, another Variable call etc..

and JavaScript Usage

before service call

event will be called on Live Filter. Any validation checks can be performed here. Returning false from the script will stop the filtering.

1Beforeservicecall = function($data) {
        //$data has the data of the all widgets inside the live filter. This data can be modified and validated before sending the request.
        $data.tenantid.value = 1; //Values can be set for some specific fields.
    };

success

event will be called after API returns a success response.

1Success = function($data) {
        //$data has the fitlered response returned from the API.
        console.log("The filtered data:", $data);
    };

error

event will be called after API returns a failure response.

1Error = function($data) {
    //$data has the error message returned from the API.
    console.log("Error returned from server:", $data);
};

Following methods can be used from within the JavaScript to manipulate a Live Filter properties:

- filter data:
    
     = 1; 
    //Sets the value to filter field deptId to 1 and filters the data.
    
- clear the filter:
    
    ();; //Clears the filter.
    
     

< Actions

Cases >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
    - [Data Source](/learn/app-development/widgets/datalive/livefilter/live-filter-data-source/)
    - [Layouts](/learn/app-development/widgets/datalive/livefilter/livefilter-layouts/)
    - [Configuration](/learn/app-development/widgets/datalive/livefilter/filter-configurations/)
    - [Field Configuration](/learn/app-development/widgets/datalive/livefilter/livefilter-field-configuration/)
    - [Actions](/learn/app-development/widgets/datalive/livefilter/livefilter-actions/)
    - [Events & Methods](/learn/app-development/widgets/datalive/livefilter/livefilter-events-methods/)
        - [Events](#events)
        - [Methods](#methods)
    - [Use Cases](/learn/app-development/widgets/datalive/livefilter/livefilter-use-cases/)
