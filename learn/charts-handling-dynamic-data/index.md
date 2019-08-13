---
title: "Charts - Handling Dynamic Data"
id: "charts-handling-dynamic-data"
---

**Data**: Ensure that the chart reflects changes in data: for example, if you are using a chart to track dynamic data like stock data, you need to ensure that the changes to the data are reflected in the chart. For this, you can use a [Action](/learn/app-development/variables/timer-action/)

1. and drop chart widget, bind the Dataset Value property to the [](http://[supsystic-show-popup id=105])based on the service fetching the dynamic data
2. a _Variable_ and set the  to the required time gap between fetching data and set if the process is continuous
3. the _Timer Fire_ event to trigger the variable to which the chart widget is bound
4. the project, after the specified Timer Delay, the chart will be refreshed. If you have set the repeating option then the process will be repeated at the delay intervals.

[Widget Cases](/learn/app-development/widgets/chart/chart-widget/#use-cases)

- [1\. How to capture user selection](/learn/how-tos/charts-displaying-user-selection-another-widget/)
- [2\. How to handling dynamic data](/learn/how-tos/charts-handling-dynamic-data/)
- [3\. How to displaying custom data](/learn/how-tos/charts-custom-data/)
