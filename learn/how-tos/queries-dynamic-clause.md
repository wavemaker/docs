---
title: "Queries with Dynamic Where Clause"
id: "queries-dynamic-clause"
---

## Use Case

Constructing a Query Where Clause Dynamically

## Context

In some of the business scenarios that are based on Database data, the fields based on which filtering is needed may be available only at Runtime.

**A solution** is to construct the query where clause dynamically.

## Limitation

This solution can be used only with a single entity. If you want to use multiple entities use DB views.

## Building where clause using Javascript

1. We are using the _sample HRDB Database_ [imported into the app](/learn/app-development/services/database-services/working-with-databases/).
2. Create a **Page** named _SampleList_.
3. Create a **Database API Variable** named _customQueryVar_ for the page created in previous step and set
    - **Database** as _hrdb_
    - **API Type** as _Table APIs_
    - **Table** to _Employee_
    - **API** to _findEmployees_. [![](/learn/assets/dynamic_query1.png)](/learn/assets/dynamic_query1.png)
4. Notice in Data tab of the Service Variable _q_ Input Field. This will be used to construct the dynamic where clause on Employee for findEmployees method. [![](/learn/assets/dynamic_query2.png)](/learn/assets/dynamic_query2.png)
5. Drag and Drop a **Data Table** and bind it to the _customQueryVar Service Variable_ created earlier.
6. Drag and Drop a **Button** with **Caption** set as _FILTER DATA_.
7. For the button **OnClick Event** write a JavaScript function that will
    - set the input for q parameter in the service variable where you can give multiple parameters with conditions,
    - invoke the DB API Variable, and
    - call Update on the DB API Variable.
8. Assuming that you will be getting the input fields at runtime from a widget in the UI, construct a query by using the field names as literal and field values may be taken from various widgets.
9. You should write the script using an if condition to check whether each field is available in the runtime or not and give appropriate value for each of them and construct the value for q field for the service variable.  
    - In the query (q) request param, the field name of the column has to be specified and not the column name.
    
        ```
        Page.button2Click = function($event, widget) {
    
            var sv = Page.Variables.customQueryVar;
            sv.setInput("q", "firstname like '%J%' and jobTitle like '%Marketing%'");
            sv.invoke();
            Page.Variables.customQueryVar.update();
    
        };
        ```
    In the script, the field names have to be literal and the field values can be taken from UI. For example, if a text widget is used for the value, then use the following expression: `Page.Widgets.text1.datavalue`. Try from the Use Expression tab in Binding dialog to ensure your expression is syntactically correct.
10. This is the outcome of the page when the user clicks on Filter Data button [![](/learn/assets/dynamic_query5.png)](/learn/assets/dynamic_query5.png)

## Testing the Use Case Using API Designer

1. From the API Designer, select Employee Entity under HRDB and select POST / filter api - Returns the list of Employee instances matching the search criteria.
2. Select Test tab.
3. Under Request Parameters
4. For q enter the conditions to filter as:
    
    ```
    firstname like '%J%' and jobTitle like '%Market%'
    ```
    
5. Click on TEST.
6. You will see the Response as [![](/learn/assets/dynamic_query6.png)](/learn/assets/dynamic_query6.png)
