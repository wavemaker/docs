---
title: "Charts - Displaying User Selection in another Widget"
id: "charts-displaying-user-selection-another-widget"
---

Hovering over the chart shows the values corresponding to the nearest data point. These data points can be captured and used to bind to a widget for further display or computational purposes. Here we will see how to do the same:

1. are using the DB available after [the sample DB](http://[supsystic-show-popup id=106]) which ships with the product. [![](../assets/db_apis_db.png)](../assets/db_apis_db.png)
2. have designed the canvas with a _Layout_ with three rows. We will have
    1. _widget_,
    2. _Widgets_\- to display the total budget of the selected department from the chart and
    3. _Table_ - to display the selected department details from the chart in each of the three rows. [![](../assets/chart_sel_design.png)](../assets/chart_sel_design.png)
3. a [CRUD Variable](http://[supsystic-show-popup id=105]) (say, ) using the Department table
4. and drop a Line chart onto the first Grid row. Bind the chart widget to the Department dataset, and set x-axis to deptCode and y-axis to Q1, Q2, Q3, and Q4 [![](../assets/chart_sel_chart.png)](../assets/chart_sel_chart.png)
5. and drop two labels onto the second row of the Grid. Set the caption of one to say "Total Budget:". Bind the caption property of the second Label widget to display the total budget as the sum of Q1, Q2, Q3 and Q4 values from the selected item under chart widget using the Use Expression option in the bind dialog. [![](../assets/chart_sel_label.png)](../assets/chart_sel_label.png)
6. and drop a Data Table onto the third row of the Grid. Set the data source of the Data Table to the selected item of the chart widget. Choose the other settings as per your requirements. We have chosen a Read-only table and selected to display department id, name, budget, code, and location. [![](../assets/chart_sel_dt.png)](../assets/chart_sel_dt.png)
7. the and click on one data point and see the total displayed in the label and the details displayed in the Data Table. [![](../assets/chart_sel_run.png)](../assets/chart_sel_run.png)

[Widget Cases](/learn/app-development/widgets/chart/chart-widget/#use-cases)

- [1\. How to capture user selection](/learn/how-tos/charts-displaying-user-selection-another-widget/)
- [2\. How to handling dynamic data](/learn/how-tos/charts-handling-dynamic-data/)
- [3\. How to displaying custom data](/learn/how-tos/charts-custom-data/)
