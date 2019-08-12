---
title: "How Tos: Charts"
date: "2016-06-28"
---

Once the data is imported and is ready to use follow these steps for chart creation.

1. to the page layout of your application and drag-and-drop the required chart widget. Here, we are creating a column chart.
2. the chart to the appropriate data source.
3. on the  next to the  Property and choose the appropriate variable for data binding. In this example, we are using the transformed data from a web service, Quandl imported earlier.

- the values to be depicted on the x-axis and the y-axis. You can select multiple columns for y-axis. You can add a caption for the axis, else by default the column names from the database table is taken as the caption. : You can not use string data for plotting on the y-axis. : For **and Pie Charts**, you can specify the Label and Value Data fields for representation instead of x- and y-axis.
- your application to see the data represented in the chart format. We will see how to use this functionality using the inbuilt **Database** which ships with WaveMaker Studio. Let us plot the number employees working at each city from the database.
    
    1. the  property select  and select  as the  column and for  _by_ You can also use the _By_ property to set the column by which the data needs to be sorted. By default it will be set to the Group by column selected.
    2. values to be depicted on x- and y-axis are set to  and  columns respectively. These are the _by_ and _columns_ respectively.
    3. the application to see the chart.
    
    ## User Selection in another Widget
    
    Hovering over the chart shows the values corresponding to the nearest datapoint. These datapoints can be captured and used to bind to a widget for further display or computational purposes. Here we will see how:
    
    1. are using the db which ships with the sample DB
    2. have designed the canvas with a _Layout_ with a _widget_, two _Widgets_ and a in each of the three rows.
    3. the chart widget to the Department dataset, and set x-axis to deptcode and y-axis to Q1, Q2, Q3 and Q4
    4. the Label widget to display the total budget as sum of Q1, Q2, Q3 and Q4 values from the selected item under chart widget using the Use Expression option
    5. the app and click on one data point and see the total displayed in the label
    6. the LiveList to the selected item of the chart widget.
    7. the and click on one data point and see the complete details displayed in the list.
