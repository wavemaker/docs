---
title: "Form - Events & Methods"
id: ""
---

# Events

Form behavior can be customized with the help of the call-back events. These events can be accessed from the events tab on the Properties panel. The trigger for the event can be JavaScript, another Variable call etc..

| Event | Trigger and JavaScript Usage |
| --- | --- |
| On before submit | This event will be called before submitting the form. Any validation checks can be performed here. Returning false from the script will stop the form submit. |
|  | We are assuming that Notification Action notificationAction1 is already created.
Page.form1Beforesubmit = function ($event, widget, $data) {
    //$data has the data of the all widgets inside the form. This data can be modified and validated before sending the request

    //Validation can be performed here. If validation fails, return false will stop the operation and service call will not be made
    if (data.password.length < 6) {
        Page.Actions.notificationAction1.invoke({
            "class": "error",
            "message": "Password too small",
            "position": "center center"
    });;
        return false;
    //Data can be modified before making a service call
    $data.dateModified = Date.now(); //Set today's date as modified date field
};

 |
| On submit | This event will be called on submitting the form. (This is called after ‘on before submit’. If on before submit returns false, this function will not be called). |
|  | 

Page.form1Submit = function ($event, widget, $formdata) { 
//$formData has the data of the all widgets inside the form.
console.log(“Form data:”, $formdata);
};

 |
| On result | This event will be called after the form is submitted and API returns a response. This event is triggered in both success and failure cases. |
|  | 

Page.form1Result = function ($event, widget, $data) { 
//$data has the response returned from the API.
console.log(“server response:”, $data);
};

 |
| On success | This event will be called after the form is submitted and API returns a success response. |
|  | 

Page.form1Success = function ($event, widget, $data) { 
//$data has the response returned from the API.
console.log(“The inserted data:”, $data);
};

 |
| On error | This event will be called after the form is submitted and API returns a failure response. |
|  | 

Page.form1Error = function ($event, widget, $data) { 
//$data has the error message returned from the API.
console.log(“Error returned from server:”, $data);
};

 |

# Methods

Form has few methods exposed on widget scope.

- To submit form:
    
    Page.Widgets.\[formName\].submit();
    //This method submits the form. 
    //This method can be used if form is to be submitted from outside of the form.
    
- To clear messages from the form:
    
    Page.Widgets.\[formName\].clearMessage();
    //This method removes the success/error message on the form.
    
     

< Fields Configuration

Usage Scenarios >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
    - [i. Data Source](/learn/app-development/widgets/datalive/form/form-data-source/)
    - [ii. Layouts](/learn/app-development/widgets/datalive/form/form-layouts/)
    - [iii. Form Configuration](/learn/app-development/widgets/datalive/form/form-configurations/)
    - [iv. Fields Configuration](/learn/app-development/widgets/datalive/form/form-fields-configuration/)
    - [v. Events & Methods](/learn/app-development/widgets/datalive/form/form-events-methods/)
    - [vi. Usage Scenarios](/learn/app-development/widgets/datalive/form/form-usage-scenarios/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
