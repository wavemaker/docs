---
title: "Live Form - Events & Methods"
id: ""
---

Live Form behavior can be customized with the help of the call-back events. These events can be accessed from the events tab on the Properties panel. The trigger for the event can be JavaScript, another Variable call etc..

and JavaScript Usage

before service call

event will be called on saving the live form. Any validation checks can be performed here. Returning false from the script will stop the live form save.

1Beforeservicecall = function($event, $operation, $data) {
//$operation: Current operation being performed - INSERT or UPDATE or DELETE
//$data has the data of the all widgets inside the live form. This data can be modified and validated before sending the request.
        function isValidData(data) {
            /\*restrict password to be minimum of 6 characters\*/
            if ($data.password) {
                if ($data.password.length < 6) {
                    return false;
                }
            } else {
                return false;
            }
        }
        return isValidData($data)
};

result

event will be called after the live form is saved and API returns a response. The event is triggered in both success and failure cases.

1Result = function($event, $operation, $data) {
//$operation: operation  performed - INSERT or UPDATE or DELETE
//$data has the response returned from the API.
console.log("server response:", $data);
};

success

event will be called after the live form is saved and API returns a success response.

1Success = function($event, $operation, $data) {
//$operation: operation performed - INSERT or UPDATE or DELETE
//$data has the response returned from the API.
console.log("The inserted/updated/deleted data:", $data);
};

error

event will be called after the live form is saved and API returns a failure response.

1Error = function($event, $operation, $data) {
//$operation: operation performed - INSERT or UPDATE or DELETE
//$data has the error message returned from the API.
console.log("Error returned from server:", $data);
};

Live Form has few methods exposed on widget scope to Edit, Delete, Add record and trigger actions like reset and cancel.

For the following script samples, we are considering the table. is bound to the SelectedItem of a Data Grid corresponding to Employee Live Variable.

- delete a record:
    
    (); //Deletes the current record that is bound to EmployeeForm.
    
- update a record:
    
    (); //Updates the current record bound
    
- add a new record:
    
    (); //Adds a new record to dataset that is bound to EmployeeForm.
    
- reset a form:
    
    (); //Resets the form to initial state.
    
- cancel an edit operation:
    
    (); //Cancels the form edit.
    
     

< Actions

Cases >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
    - [Data Source](/learn/app-development/widgets/datalive/live-form/live-form-data-source/)
    - [Layouts](/learn/app-development/widgets/datalive/live-form/liveform-layouts/)
    - [Configuration](/learn/app-development/widgets/datalive/live-form/liveform-configurations/)
    - [Fields Configuration](/learn/app-development/widgets/datalive/live-form/fields-configuration/)
        - [Display Options](/learn/app-development/widgets/datalive/live-form/fields-configuration/#display)
        - [Validations](/learn/app-development/widgets/datalive/live-form/fields-configuration/#validations)
        - [Widget Usage](/learn/app-development/widgets/datalive/live-form/fields-configuration/#widgets)
    - [Actions](/learn/app-development/widgets/datalive/live-form/liveform-actions/)
    - [Events & Methods](/learn/app-development/widgets/datalive/live-form/events-methods/)
        - [Events](#events)
        - [Methods](#methods)
    - [Use Cases](/learn/app-development/widgets/datalive/live-form/liveform-use-cases/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
