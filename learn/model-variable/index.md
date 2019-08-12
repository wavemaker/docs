---
title: "Model Variable"
date: "2017-08-22"
---

Variable can be used as storage model to store data on the client.

Variable store data on the page or at the project level. The data can be of various types:

- value
- value
- for name-value pairs
- value
- value
- table object
- API request or response object

Each of these types can further be in an array format by selecting the property.

# Creation

The **data source** for these Variables is custom-defined.

1. the Variable option from the Variable Workspace Toolbar. [![](../assets/var_sel.png)](../assets/var_sel.png)
2. New Variable from the Variable Dialog [![](../assets/var_new.png?v=20)](../assets/var_new.png?v=20)
3. will initiate Create Variable wizard with the following steps:
    1. the target action
    2. the based upon the type of data you want the Static variable to hold.
    3. on the selection, the JSON structure will change
        - default types of  , , , types you will be allowed to enter the values
        - type, you can enter the name-dataValue pair
        - **variables** gives a pre-populated variable structure - these include country, days, month, and US states list
        - any types selected, will give you the respective table object structure or request parameters or response format structure
    4. the **List** property will allow you to create an array structure of the type selected
    5. can choose to add values using the **editor** instead of field editor
    6. **tab** will let you set the values dynamically by binding it to a widget or another variable. For example, you can capture the data from a Live Form into an app-level static variable and use it in a different page
    7. will be directed to the Variables page, with the new variable listed. As you can see:
        1.  Variable is created,
        2. **tab** contains all the properties. [more about properties](#properties)
        3. **tab** will contain the fields serving as _fields_ for the Variable

Variables help you store page or application level data. Using Static Variable you can even store data as cookies.

to use to specify the data-type of the static variable. This includes live/service variables also.

List

to use if the data in the variable is of type array.

(for Entry type)

of the data value in the name-datavalue pair

Value

to specify the value to be stored in the variable. You can use either the Field Editor or Text Editor to specify the values.

## ()

This method returns the variable’s dataSet.

: none

_Value_: If the variable is of list type then returns an Array else it returns an Object

_:_

 result = Page.Variables.staticVariable1.getData();
console.log("result:", result);

// Output: 
// result: {dataValue: “abc”}

## (object)

This method sets the passed data on the dataSet property of the Variable.

: Object or Array

_Value_: Newly set dataSet on the variable

_:_

 result = Page.Variables.staticVariable1.setData({dataValue: “def”});
console.log("result:", result);

// Output: 
// result: {dataValue: “def”}

## (key)

This method returns the value against the specified key. If dataSet is an array returns the value against the specified key of the object at the specified index.

:

- (string):
- (number): required in case the static variable is an array

_Value_: Value against the key

_:_

// Example 1: If variable is having dataSet as: {dataValue: “abc”}
var result = Page.Variables.staticVariable1.getValue(‘dataValue’);
console.log("result:", result);

// Output: 
// result: “abc”

// Example 2: If variable is list type having data as:
// \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}\]
var result = Page.Variables.staticVariable1.getValue(‘dataValue’, 1);
console.log("result:", result);

// Output: 
// result: “def”

## (key, value)

This method sets the value against the specified key.

:

- (string)
- (\*)

_Value_: Updated dataSet of variable

_:_

// Example1: If variable is having dataSet as: {dataValue: “abc”}
var result = Page.Variables.staticVariable1.setValue(‘dataValue’, “def”);
console.log("result:", result);

// Output: 
// result: {dataValue: “def”}

// Example 2: using key parameter. If variable is list type having data as:
// \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}\]
var result = Page.Variables.staticVariable1.setValue('key’, “ghi”);
console.log("result:", result);

// Output: 
// result: {dataValue: “def”, key: “ghi”}

## (index)

This method returns the object against the specified index. : This is only for array type variable, i.e. when the Is List property is set.

: index(number)

_Value_: Object

_:_

// If variable is list type having data as:
// \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}\]
var result = Page.Variables.staticVariable1.getItem(1);
console.log("result:", result);

// Output: 
// result: {dataValue: “def”}

## (index, value)

This method sets the value against the specified index. : Only for array type variable, i.e. when the Is List property is set.

:

- (number)
- (\*)

_Value_: Updated dataSet of variable

_:_

// If variable is list type having data as:
// \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}\]
var result = Page.Variables.staticVariable1.setItem(1, {dataValue: "jkl"});
console.log("result:", result);

// Output: 
// result: \[{dataValue: “abc”}, {dataValue: “jkl”}, {dataValue: “ghi”}\]

## (index, value)

This method adds an item at specified index. NOTE: Only for array type variable, i.e. when the Is List property is set.

:

- (number)
- (\*)

_Value_: Updated dataSet of variable

_:_

//Example1: If variable is list type having data as:
// \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}\]
var result = Page.Variables.staticVariable1.addItem({dataValue: "jkl"});
console.log("result:", result);

// Output: 
// result: \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}, {dataValue: “jkl”}\]

//Example2: If variable is list type having data as:
// \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}\]
var result = Page.Variables.staticVariable1.addItem({dataValue: "jkl"}, 1);
console.log("result:", result);

// Output: 
// result: \[{dataValue: “abc”}, {dataValue: “jkl”}, {dataValue: “def”}, {dataValue: “ghi”}\]

## (index)

This method updates the dataSet of variable : Only for array type variable, i.e. when the Is List property is set

: index(number)

_Value_: Updated dataSet of variable

_:_

// If variable is list type having data as:
// \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}\]
var result = Page.Variables.staticVariable1.removeItem(1);
console.log("result:", result);

// Output: 
// result: \[{dataValue: “abc”}, {dataValue: “ghi”}\]

## ()

This method empties the variable dataSet. : Only for array type variable, i.e. when the Is List property is set.

: none

_Value_: Updated dataSet of variable

_:_

// If variable is list type having data as:
// \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}\]
var result = Page.Variables.staticVariable1.clearData();
console.log("result:", result);

// Output: 
// result: \[\]

## ()

This method returns the total number of items in the dataSet. NOTE: Only for array type variable, i.e. when the Is List property is set.

: none

_Value_: Number of items

_:_

// If variable is list type having data as:
// \[{dataValue: “abc”}, {dataValue: “def”}, {dataValue: “ghi”}\]
var result = Page.Variables.staticVariable1.getCount();
console.log("result:", result);

// Output: 
// result: 3

< Variables & Actions

6\. Data Integration - Variables

- 6.1 Binding Layer
    - [Overview](/learn/app-development/variables/data-integration/)
- [6.2 Variables and Actions](/learn/app-development/variables/variables-actions/)
    - [Overview](/learn/app-development/variables/variables-actions/#)
    - [Variables](/learn/app-development/variables/variables-actions/#variables)
        - a. Database CRUD
            - [Overview](/learn/app-development/variables/database-crud/)
            - [Variable Creation](/learn/app-development/variables/database-crud/#creation)
            - [Properties](/learn/app-development/variables/database-crud/#properties)
            - [Events](/learn/app-development/variables/database-crud/#events)
            - [Methods](/learn/app-development/variables/database-crud/#methods)
        - b. Database API
            - [Overview](/learn/app-development/variables/database-apis/)
            - [Variable Creation](/learn/app-development/variables/database-apis/#creation)
            - [Properties](/learn/app-development/variables/database-apis/#properties)
            - [Events](/learn/app-development/variables/database-apis/#events)
            - [Methods](/learn/app-development/variables/database-apis/#methods)
        - c. Web Service
            - [Overview](/learn/app-development/variables/web-service/)
            - [Variable Creation](/learn/app-development/variables/web-service/#creation)
            - [Properties](/learn/app-development/variables/web-service/#properties)
            - [Events](/learn/app-development/variables/web-service/#events)
            - [Methods](/learn/app-development/variables/web-service/#methods)
        - d. Java Service
            - [Overview](/learn/app-development/variables/java-services)
            - [Variable Creation](/learn/app-development/variables/java-services/#creation)
            - [Properties](/learn/app-development/variables/java-services/#properties)
            - [Events](/learn/app-development/variables/java-services/#events)
            - [Methods](/learn/app-development/variables/java-services/#methods)
        - e. Security Service
            - [Overview](/learn/app-development/variables/security-service/)
            - [Variable Creation](/learn/app-development/variables/security-service/#creation)
            - [Properties](/learn/app-development/variables/security-service/#properties)
            - [Events](/learn/app-development/variables/security-service/#events)
            - [Methods](/learn/app-development/variables/security-service/#methods)
        - [Model](#)
            - [Overview](#)
            - [Variable Creation](#creation)
            - [Properties](#properties)
            - [Methods](#methods)
        - g. Device Variables
            - [Overview](/learn/hybrid-mobile/device-variables/#)
            - [Services](/learn/hybrid-mobile/device-variables/#services)
            - [Operations](/learn/hybrid-mobile/device-variables/#operations)
            - [Events](/learn/hybrid-mobile/device-variables/#events)
            - [Methods](/learn/hybrid-mobile/device-variables/#methods)
            - [Usage](/learn/hybrid-mobile/device-variables/#usage)
    - [Actions](/learn/app-development/variables/variables-actions/#actions)
        - i. Navigation
            - [Overview](/learn/app-development/variables/navigation-action/)
            - [Action Creation](/learn/app-development/variables/navigation-action/#creation)
            - [Properties](/learn/app-development/variables/navigation-action/#properties)
            - [Methods](/learn/app-development/variables/navigation-action/#methods)
        - ii. Login
            - [Overview](/learn/app-development/variables/login-action/)
            - [Action Creation](/learn/app-development/variables/login-action/#creation)
            - [Properties](/learn/app-development/variables/login-action/#properties)
            - [Data](/learn/app-development/variables/login-action/#data)
            - [Events](/learn/app-development/variables/login-action/#events)
        - iii. Logout
            - [Overview](/learn/app-development/variables/logout-action/)
            - [Action Creation](/learn/app-development/variables/logout-action/#creation)
            - [Properties](/learn/app-development/variables/logout-action/#properties)
            - [Events](/learn/app-development/variables/logout-action/#events)
        - iv. Timer
            - [Overview](/learn/app-development/variables/timer-action/)
            - [Action Creation](/learn/app-development/variables/timer-action/#creation)
            - [Properties](/learn/app-development/variables/timer-action/#properties)
            - [Events](/learn/app-development/variables/timer-action/#events)
            - [Methods](/learn/app-development/variables/timer-action/#methods)
        - v. Notification
            - [Overview](/learn/app-development/variables/notification-action/)
            - [Action Creation](/learn/app-development/variables/notification-action/#creation)
            - [Properties](/learn/app-development/variables/notification-action/#properties)
            - [Events](/learn/app-development/variables/notification-action/#events)
            - [Methods](/learn/app-development/variables/notification-action/#methods)
    - [Scoping](/learn/app-development/variables/variables-actions/#scoping)
    - [Variable Events](/learn/app-development/variables/variables-actions/#events)
    - [Error Handling](/learn/app-development/variables/variables-actions/#error-handling)
- 6.3 Variable Binding
    - [Overview](/learn/variables/variable-binding/#)
    - [Data Binding](/learn/variables/variable-binding/#data-binding)
    - [Widget Binding](/learn/variables/variable-binding/#widget-binding)
    - [Binding Options](/learn/variables/variable-binding/#binding-options)
- 6.4 JavaScript Access
    - [Overview](/learn/variables/accessing-elements-via-javascript/#)
    - [Widget Controllers](/learn/variables/accessing-elements-via-javascript/#widget-controllers)
    - [Page Scripting](/learn/variables/accessing-elements-via-javascript/#page-scripting)
    - [Script Access](/learn/variables/accessing-elements-via-javascript/#script-access)
