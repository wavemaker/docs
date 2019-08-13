---
title: "Using Filter Conditions on Variable"
id: "using-filter-conditions-variable"
---

Showcases:

- to use filter conditions in Variables.
- alternative approach to using Filter Fields in Data Tab.
- will allow for using mathematical expressions and other expressions.
- is a list of database match modes that can be used as filter condition:
    
    "DATABASE\_MATCH\_MODES": {
    "start"            : "STARTING\_WITH",
    "end"              : "ENDING\_WITH",
    "anywhere"         : "CONTAINING",
    "exact"            : "EQUALS",
    "notequals"        : "NOT\_EQUALS",
    "between"          : "BETWEEN",
    "in"               : "IN",
    "lessthan"         : "LESS\_THAN",
    "lessthanequal"    : "LESS\_THAN\_OR\_EQUALS",
    "greaterthan"      : "GREATER\_THAN",
    "greaterthanequal" : "GREATER\_THAN\_OR\_EQUALS",
    "null"             : "NULL",
    "isnotnull"        : "IS\_NOT\_NULL",
    "empty"            : "EMPTY",
    "isnotempty"       : "IS\_NOT\_EMPTY",
    "nullorempty"      : "NULL\_OR\_EMPTY"
    }
    

: Depending upon the type of the data you need to use either the match mode (left side values from the above list) or filter condition (right side values from the above list), as per the following code snippet:

/\*if filter field is of type string\*/
        inputData.<string\_field\_name> = {
            'value':'<value>',
            'matchMode': 'notequals'
        }

/\*if filter field is of type Integer\*/
        inputData.<integer\_field\_name> = {
            'value':'<value>',
            'filterCondition': 'NOT\_EQUALS'
        }

In this example, we use the following JavaScript code to filter the records from Login CRUD Variable to fetch records with ID less than or equal to a text value:

 = function (variable, inputData) {
    inputData.id = {
        'value': Page.Widgets.text1.datavalue,
        'filterCondition': 'LESS\_THAN\_OR\_EQUALS',
        'type': 'INTEGER'
    };

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS_ShziKiIlw9f_ANdjyVWkMs4uYNY420R-x_PxlbuDWAnADbZCCbePzqYuhPB5WaUCgP9gazbsA71S/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" width="708" height="560" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

Usage

- [1\. How to use Filter in Live Variables](#)
- [2\. How to use Live Variable APIs](/learn/how-tos/using-live-variable-apis/)
- [3\. How to work with Notification Actions](/learn/how-tos/using-notification-actions/)
- [4\. How to work with Navigation Actions](/learn/how-tos/using-navigation-action/)
- [5\. How to work with Variables to access Queries and Procedures](/learn/how-tos/using-variables-queries-procedure/)
- [6\. How to work with Service Variables in a Form](/learn/how-tos/using-service-variable-form/)
