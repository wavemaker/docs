---
title: "Building a Range Live Filter"
id: "live-filter-range-filter"
last_update: { author: "WaveMaker" }
---
To filter data between given two values, **Show Range Selector** property from the Advanced Settings can be used. For example, we will how to filter the vacation details of employees between to Start Dates. We are using the hrdb Vacation table for this example.

1. Drag and drop a Live Filter onto the canvas.
2. Bind the Live Filter to Database CRUD Variable with hrdb as Service and Vacation as Entity
3. From the Advanced Settings property, check the Show Range Selector property for Start Data field
4. Here, we have also selected Type and Status fields. This is optional. [![](./assets/img/range_filter_AS.png)](./assets/img/range_filter_AS.png)
5. For seeing the results, we will use a Data Table
    - Drag and drop a Data Table
    - Bind the Dataset Value property of Data Table to the result node of the Live Filter created above.
6. Run the app and select a range of dates for Start Date

[Live Filter Use Cases](../../user-interfaces/web/components/angular-components/datalive/livefilter/livefilter-use-cases.md)

- [1. Basic Usage Scenario](../../user-interfaces/web/components/angular-components/datalive/livefilter/live-filter-basic-usage.md)
- [2. How to Apply Live Filter to a Data Table/Chart](./live-filter-applying.md)
- [3. How to build a filtering based upon multiple values](./live-filter-multiple-values.md)
- [4. How to build a filtering based upon a range of values](./live-filter-range-filter.md)
