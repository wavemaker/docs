---
title: "How Tos: Live Filter"
id: "tos-live-filter"
---

Filtering on Multiple ValuesLive Filter can applied for multiple values of the filter field, i.e. employees from New York and Chicago cities. This can be achieved using the Checkboxset or Select widget to represent the Filter fields from the Advanced Settings property of Live Filter.

For example, we will how to filter the vacation details of employees based on the status and type of leaves. We are using the hrdb Vacation table for this example.

1. 1. and drop a Live Filter onto the canvas.
    2. the Live Filter to Live Variable with hrdb as source and Vacation as Type
    3. the Advanced Settings property
        1. the Widget Display Property for Status field to Checkboxset [![multiple_filter_as](../assets/multiple_filter_AS.png)](../assets/multiple_filter_AS.png)
        2. the Widget Display Property for Type field to Select
    4. the canvas, select the Type field and check the Multiple field property [![multiple_filter_props](../assets/multiple_filter_props.png)](../assets/multiple_filter_props.png)
    5. seeing the results, we will use a Data Table
    6. and drop a Data Table
    7. the Dataset Value property of Data Table to the result node of the Live Filter created above.
    8. the app and select multiple values from Select and-or Checkboxset and see the result in the Data Table [![multiple_filter_run](../assets/multiple_filter_run.png)](../assets/multiple_filter_run.png)

Filtering with RangeTo filter data between given two values, **Range Selector** property from the Advanced Settings can be used. For example, we will how to filter the vacation details of employees between to Start Dates. We are using the hrdb Vacation table for this example.

1. and drop a Live Filter onto the canvas.
2. the Live Filter to Live Variable with hrdb as source and Vacation as Type
3. the Advanced Settings property, check the Show Range Selector property for Start Data field [![range_filter_as](../assets/range_filter_AS.png)](../assets/range_filter_AS.png)
4. seeing the results, we will use a Data Table
    1. and drop a Data Table
    2. the Dataset Value property of Data Table to the result node of the Live Filter created above.
5. the app and select a range of dates for Start Date [![range_filter_run](../assets/range_filter_run.png)](../assets/range_filter_run.png)

Using Live Filter Callback EventsLive Filter behavior can be customised with the help of the call-back events. These events can be accessed from the events tab on the Properties panel. The trigger for the event can be JavaScript, another Variable call etc..

and JavaScript Usage

before service call

event will be called on Live Filter. Any validation checks can be performed here. Returning false from the script will stop the filtering.

$scope.livefilter1Beforeservicecall = function($data) {
        //$data has the data of the all widgets inside the live filter. This data can be modified and validated before sending the request.
        $data.tenantid.value = 1; //Values can be set for some specific fields.
    };

success

event will be called after API returns a success response.

$scope.livefilter1Success = function($data) {
        //$data has the fitlered response returned from the API.
        console.log("The filtered data:", $data);
    };

error

event will be called after API returns a failure response.

$scope.livefilter1Error = function($data) {
    //$data has the error message returned from the API.
    console.log("Error returned from server:", $data);
};

USING Live Filter METHODSFollowing methods can be used from within the JavaScript to manipulate a Live Filter properties:

- filter data:
    
    $scope.Widgets.DepartmentFilter.filterFields.deptId.value = 1; 
    //Sets the value to filter field deptId to 1 and filters the data.
    
- clear the filter:
    
    $scope.Widgets.DepartmentFilter.clearFilter();; //Clears the filter.
