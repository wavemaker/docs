---
title: "Applying Live Filter to a Data Table or a Chart"
id: "live-filter-applying"
---

1. Drag and drop a filter onto the canvas, setting the Service Type to Database CRUD, using hrdb Service and Department entity. Select Name for the Filter Fields. [![](/learn/assets/lftr_apply_1.png)](/learn/assets/lftr_apply_1.png)
2. Drag and drop _Data Table or Chart_ widget on the page.
3. Bind the widget to the filter created by clicking on the _bind icon_ next to the _Value_ Property in the _Dataset_ section of the Chart widget. In case of Data Table, select Filter Widget as source and the result as the data node.
4. Select the _Result_ of the filter you just created from the _Widgets_ tab on the **Bind** dialog box. [![](/learn/assets/lftr_apply_bind.png)](/learn/assets/lftr_apply_bind.png)
5. Select the x-axis and y-axis values for the chart. (in case of Data Table, select the columns to be displayed at the time of [configuration](/learn/app-development/widgets/datalive/datatable/data-table-basic-usage/) or from [Advanced Settings](/learn/app-development/widgets/datalive/datatable/field-configuration/)) [![](/learn/assets/lftr_apply_chart.png)](/learn/assets/lftr_apply_chart.png)
6. Run the application.
7. Select a value in the filter and click on _Filter_ button and see the values change in the table/chart.

[Live Filter Use Cases](/learn/app-development/widgets/datalive/livefilter/livefilter-use-cases/)

- [1. Basic Usage Scenario](/learn/app-development/widgets/datalive/livefilter/live-filter-basic-usage/)
- [2. How to Apply Live Filter to a Data Table/Chart](/learn/how-tos/live-filter-applying/)
- [3. How to build a filtering based upon multiple values](/learn/how-tos/live-filter-multiple-values/)
- [4. How to build a filtering based upon a range of values](/learn/how-tos/live-filter-range-filter/)
