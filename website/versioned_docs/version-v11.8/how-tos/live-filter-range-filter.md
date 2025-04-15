---
title: "Building a Range Live Filter"
id: "live-filter-range-filter"
---

To filter data between given two values, **Show Range Selector** property from the Advanced Settings can be used. For example, we will how to filter the vacation details of employees between to Start Dates. We are using the hrdb Vacation table for this example.

1. Drag and drop a Live Filter onto the canvas.
2. Bind the Live Filter to Database CRUD Variable with hrdb as Service and Vacation as Entity
3. From the Advanced Settings property, check the Show Range Selector property for Start Data field
4. Here, we have also selected Type and Status fields. This is optional. [![](/learn/assets/range_filter_AS.png)](/learn/assets/range_filter_AS.png)
5. For seeing the results, we will use a Data Table
    - Drag and drop a Data Table
    - Bind the Dataset Value property of Data Table to the result node of the Live Filter created above.
6. Run the app and select a range of dates for Start Date

[Live Filter Use Cases](/learn/app-development/widgets/datalive/livefilter/livefilter-use-cases/)

- [1. Basic Usage Scenario](/learn/app-development/widgets/datalive/livefilter/live-filter-basic-usage/)
- [2. How to Apply Live Filter to a Data Table/Chart](/learn/how-tos/live-filter-applying/)
- [3. How to build a filtering based upon multiple values](/learn/how-tos/live-filter-multiple-values/)
- [4. How to build a filtering based upon a range of values](/learn/how-tos/live-filter-range-filter/)
