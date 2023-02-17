---
title: "Creating an Employee List grouped by Birth Month and City"
id: "list-multi-grouped"
---

**Scenario:** To display list grouped by multiple fields like City and State they reside in

We will see how List items can be grouped by multiple fields. We will

1. List of Employees grouped by Birth Month and City of Employees.
2. A custom JavaScript function is used to manipulate the dataset returned to achieve multi-field grouping.
3. Static Variable is used to get the month names in Order.

We have used the following code snippets:

- JSON file for list of months static variable:
    
     {
      "0": "Jan",
      "1": "Feb",
      "2": "Mar",
      "3": "Apr",
      "4": "May",
      "5": "Jun",
      "6": "Jul",
      "7": "Aug",
      "8": "Sep",
      "9": "Oct",
      "10": "Nov",
      "11": "Dec"
    }
    
- JavaScript for the OnBeforeDatasetReady event:
    
    Page.EmployeeVaronBeforeDatasetReady = function(variable, data) {
        var dataByMonth = _.groupBy(data, function(datum) { 
            //getting the employees grouped by their birth month
            return new Date(datum.birthdate).getMonth();
        });
        data = [];
        _.each(dataByMonth, function(employees, month) { 
            //for each of the month, getting the array of employees born on that month.
            data.push({
                'birth_month': month,
                'employees': employees
            });
        });
        return data;
    };
    

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTCOvaDgtmU4GWwiKhikpdkcNu9yU7m4U5LB55zS7TPGazFcpVYFkOrLuMh8WijzKM5zODgHrM09Y56/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

[List Use Cases](/learn/app-development/widgets/datalive/list/list-use-cases/)

- [1. List Basic Usage](/learn/app-development/widgets/datalive/list/list-basic-usage/)
- [2. How to group list items](/learn/how-tos/list-grouped/)
- [3. How to group list items based upon multiple fields](/learn/how-tos/list-multi-grouped/)
- [4. How to include data table within a list](/learn/how-tos/list-data-table/)
- [5. How to build editable list using live form](/learn/how-tos/building-editable-list/)
- [6. How to build list from the selected item of another list](/learn/how-tos/building-cascading-lists/)
- [7. How to access list items](/learn/how-tos/list-item-access/)
