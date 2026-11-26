---
title: "Using Filter Conditions on Variable"
id: "using-filter-conditions-variable"
---
---
## Showcases

- Use filter conditions in Variables.
- Alternative approach to using Filter Fields in Data Tab.
- Use mathematical expressions and other expressions.
- List of database match modes for filter condition. 

``` 
"DATABASE_MATCH_MODES": {
"start"            : "STARTING_WITH",
"end"              : "ENDING_WITH",
"anywhere"         : "CONTAINING",
"exact"            : "EQUALS",
"notequals"        : "NOT_EQUALS",
"between"          : "BETWEEN",
"in"               : "IN",
"lessthan"         : "LESS_THAN",
"lessthanequal"    : "LESS_THAN_OR_EQUALS",
"greaterthan"      : "GREATER_THAN",
"greaterthanequal" : "GREATER_THAN_OR_EQUALS",
"null"             : "NULL",
"isnotnull"        : "IS_NOT_NULL",
"empty"            : "EMPTY",
"isnotempty"       : "IS_NOT_EMPTY",
"nullorempty"      : "NULL_OR_EMPTY"
}
```   

## Example 

Depending upon the type of the data you need to use either the match mode (left side values from the above list) or filter condition (right side values from the above list), as per the following code snippet. 

```js
/* if filter field is of type string */
        inputData.<string_field_name> = {
            'value':'<value>',
            'matchMode': 'notequals'
        }

/* if filter field is of type Integer */
        inputData.<integer_field_name> = {
            'value':'<value>',
            'filterCondition': 'NOT_EQUALS'
        }
```
In this example, we use the following JavaScript code to filter the records from Login `CRUD Variable` to fetch records with ID less than or equal to a text value. 

```
Page.LoginDataonBeforeUpdate = function (variable, inputData) {
    inputData.id = {
        'value': Page.Widgets.text1.datavalue,
        'filterCondition': 'LESS_THAN_OR_EQUALS',
        'type': 'INTEGER'
    };
```

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS_ShziKiIlw9f_ANdjyVWkMs4uYNY420R-x_PxlbuDWAnADbZCCbePzqYuhPB5WaUCgP9gazbsA71S/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" width="708" height="560" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

## See Also

[How to use Live Variable APIs](/learn/how-tos/using-live-variable-apis/)  
[How to work with Notification Actions](/learn/how-tos/using-notification-actions/)  
[How to work with Navigation Actions](/learn/how-tos/using-navigation-action/)  
[How to work with Variables to access Queries and Procedures](/learn/how-tos/using-variables-queries-procedure/)  
[How to work with Service Variables in a Form](/learn/how-tos/using-service-variable-form/)  
