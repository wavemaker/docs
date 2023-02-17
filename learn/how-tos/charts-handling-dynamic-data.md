---
title: "Charts - Handling Dynamic Data"
id: "charts-handling-dynamic-data"
sidebar_label: "Handling Dynamic Data"
---
---

**Dynamic Data**: Ensure that the chart reflects changes in data: for example, if you are using a chart to track dynamic data like stock data, you need to ensure that the changes to the data are reflected in the chart. For this, you can use a [Timer Action](/learn/app-development/variables/timer-action/).

1. Drag and drop chart widget, bind the Dataset Value property to the [Variable](/learn/assets/var_sel.png) based on the service fetching the dynamic data
2. Create a _Timer Variable_ and set the _delay_ to the required time gap between fetching data and set _repeating_ if the process is continuous
3. Set the _on Timer Fire_ event to trigger the variable to which the chart widget is bound
4. Run the project, after the specified Timer Delay, the chart will be refreshed. If you have set the repeating option then the process will be repeated at the delay intervals.

## See Also

[Chart Widget Cases](/learn/app-development/widgets/chart/chart-widget/#use-cases)  
[How to capture user selection](/learn/how-tos/charts-displaying-user-selection-another-widget/)  
[How to displaying custom data](/learn/how-tos/charts-custom-data/)  
