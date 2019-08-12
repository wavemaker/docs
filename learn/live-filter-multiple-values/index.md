---
title: "Building a Multiple Selection Live Filter"
date: "2016-12-01"
---

Live Filter can be applied for multiple values of the filter field, i.e. list employees from New York and Chicago cities. This can be achieved using the Checkboxset or Select widget to represent the Filter fields from the Advanced Settings property of Live Filter.

For example, we will see how to filter the vacation details of employees based on the status and type of leaves. We are using the hrdb Vacation table for this example.

1. and drop a Live Filter onto the canvas.
2. the Live Filter to Database CRUD Variable with hrdb as Service and Vacation as Entity
3. a two-column layout and select Status and Type fields
4. the Advanced Settings property
    1. the Widget Display Property for Status field to Checkboxset [![](../assets/multiple_filter_AS.png)](../assets/multiple_filter_AS.png)
    2. the Widget Display Property for Type field to Select
5. the canvas, select the Type field and check the Multiple field property [![](../assets/multiple_filter_props.png)](../assets/multiple_filter_props.png)
6. seeing the results, we will use a Data Table
    1. and drop a Data Table
    2. the Dataset Value property of Data Table to the result node of the Live Filter created above.
7. the app and select multiple values from Select and-or Checkboxset and see the result in the Data Table

[Filter Use Cases](/learn/app-development/widgets/datalive/livefilter/livefilter-use-cases/)

- [1\. Basic Usage Scenario](/learn/app-development/widgets/datalive/livefilter/live-filter-basic-usage/)
- [2\. How to Apply Live Filter to a Data Table/Chart](/learn/how-tos/live-filter-applying/)
- [3\. How to build a filtering based upon multiple values](/learn/how-tos/live-filter-multiple-values/)
- [4\. How to build a filtering based upon a range of values](/learn/how-tos/live-filter-range-filter/)
