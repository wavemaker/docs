---
title: "Charts - Displaying User Selection in another Widget"
id: "charts-displaying-user-selection-another-widget"
sidebar_label: "Display User Selection in another Widget"
last_update: { author: "WaveMaker" }
---
---

Hovering over the chart shows the values corresponding to the nearest data point. These data points can be captured and used to bind to a widget for further display or computational purposes. Here we will see how to do the same:

1. We are using the _Department_ DB available after <!-- <!-- [importing the sample DB](/learn/app-development/services/database-services/working-with-databases/) --> --> which ships with the product.

[![](./assets/img/db_apis_db.png)](./assets/img/db_apis_db.png)

2. We have designed the canvas with a _Grid Layout_ with three rows. We will have
    1. _Chart widget_,
    2. two _Label Widgets_ - to display the total budget of the selected department from the chart and
    3. a _Data Table_ - to display the selected department details from the chart in each of the three rows. 
    
    [![](./assets/img/chart_sel_design.png)](./assets/img/chart_sel_design.png)
    
3. Create a [Database CRUD Variable](./how-tos/assets/img/var_sel.png) (say, _deptVar_) using the Department table
4. Drag and drop a Line chart onto the first Grid row. Bind the chart widget to the Department dataset, and set x-axis to deptCode and y-axis to Q1, Q2, Q3, and Q4 

[![](./assets/img/chart_sel_chart.png)](./assets/img/chart_sel_chart.png)

5. Drag and drop two labels onto the second row of the Grid. Set the caption of one to say "Total Budget:". Bind the caption property of the second Label widget to display the total budget as the sum of Q1, Q2, Q3 and Q4 values from the selected item under chart widget using the Use Expression option in the bind dialog. 

[![](./assets/img/chart_sel_label.png)](./assets/img/chart_sel_label.png)

6. Drag and drop a Data Table onto the third row of the Grid. Set the data source of the Data Table to the selected item of the chart widget. Choose the other settings as per your requirements. We have chosen a Read-only table and selected to display department id, name, budget, code, and location. 

[![](./assets/img/chart_sel_dt.png)](./assets/img/chart_sel_dt.png)

7. Run the and click on one data point and see the total displayed in the label and the details displayed in the Data Table. 

[![](./assets/img/chart_sel_run.png)](./assets/img/chart_sel_run.png)

## See Also

[Chart Widget Cases](../../user-interfaces/web/components/angular-components/chart/chart-widget.md#use-cases)  
[How to handling dynamic data](./charts-handling-dynamic-data.md)  
[How to displaying custom data](./charts-custom-data.md)
