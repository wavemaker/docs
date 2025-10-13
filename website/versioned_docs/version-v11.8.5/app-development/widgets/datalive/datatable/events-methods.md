---
title: "Live Form - Events & Methods"
id: "events-methods"
sidebar_label: "Events & Methods"
---

# Events

Live Form behavior can be customized with the help of the call-back events. These events can be accessed from the events tab on the Properties panel. The trigger for the event can be JavaScript, another Variable call etc..

| Event | Trigger and JavaScript Usage |
| --- | --- |
| On before service call | This event will be called on saving the live form. Any validation checks can be performed here. Returning false from the script will stop the live form save. |
|  | 
Page.liveform1Beforeservicecall = function($event, $operation, $data) {
//$operation: Current operation being performed - INSERT or UPDATE or DELETE
//$data has the data of the all widgets inside the live form. This data can be modified and validated before sending the request.
        function isValidData(data) {
            /*restrict password to be minimum of 6 characters*/
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

 |
| On result | This event will be called after the live form is saved and API returns a response. The event is triggered in both success and failure cases. |
|  | 

Page.liveform1Result = function($event, $operation, $data) {
//$operation: operation  performed - INSERT or UPDATE or DELETE
//$data has the response returned from the API.
console.log("server response:", $data);
};

 |
| On success | This event will be called after the live form is saved and API returns a success response. |
|  | 

Page.liveform1Success = function($event, $operation, $data) {
//$operation: operation performed - INSERT or UPDATE or DELETE
//$data has the response returned from the API.
console.log("The inserted/updated/deleted data:", $data);
};

 |
| On error | This event will be called after the live form is saved and API returns a failure response. |
|  | 

Page.liveform1Error = function($event, $operation, $data) {
//$operation: operation performed - INSERT or UPDATE or DELETE
//$data has the error message returned from the API.
console.log("Error returned from server:", $data);
};

 |

# Methods

Live Form has few methods exposed on widget scope to Edit, Delete, Add record and trigger actions like reset and cancel.

For the following script samples, we are considering the _hrdb_ _Employee_ table. **EmployeeForm** is bound to the SelectedItem of a Data Grid corresponding to Employee Live Variable.

- To delete a record:
    
    Page.Widgets.EmployeeForm.delete(); //Deletes the current record that is bound to EmployeeForm.
    
- To update a record:
    
    Page.Widgets.EmployeeForm.save(); //Updates the current record bound
    
- To add a new record:
    
    Page.Widgets.EmployeeForm.new(); //Adds a new record to dataset that is bound to EmployeeForm.
    
- To reset a form:
    
    Page.Widgets.EmployeeForm.reset(); //Resets the form to initial state.
    
- To cancel an edit operation:
    
    Page.Widgets.EmployeeForm.cancel(); //Cancels the form edit.
    
     

