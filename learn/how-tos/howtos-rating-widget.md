---
title: "How Tos: Rating Widget"
id: ""
---

You can use the Rating widget to capture the input from the user as Widgets.rating1.datavalue or from the direct bind dialog. You can also change the caption according to the user selection. We will see how to do that in this section.Rating Widget using the Static data

1. Drag and drop a **rating** widget on the canvas.
2. Following **Properties** can be set:
    
    1. **Default Value** to the required initial selection, here - _3_
    2. **Maximum value** to the required maximum rating i.e total number of stars to be displayed, here - 5
    3. **Value** under **Dataset** to comma separated string containing the label values (they will be mapped to rating value in ascending order)
    4. Select **Show Captions** property, this will display the value against the selected rating. It unchecked user will see the value on hover over the rating.
    
    [![rating_usage_props](/learn/assets/rating_usage_props.png)](/learn/assets/rating_usage_props.png)
3. From **Style** tab,  you can set the Icon color.

[![rating_usage_style](/learn/assets/rating_usage_style.png)](/learn/assets/rating_usage_style.png)

1. Run the app

[![rating_usage_run](/learn/assets/rating_usage_run.png)](/learn/assets/rating_usage_run.png)Rating Widget using Static VariableData for the Rating widget can come from a Variable - Static, Live etc.. In this example we will see how to use a Static Variable as the data source for a Rating Widget. The process is same for all types of Variables.

1. Create a Static Variable of Entry Type, with Is List option selected and using the following JSON structure:
    
    [
      {
        "name": "Poor",
        "dataValue": "1"
      },
      {
        "name": "Average",
        "dataValue": "2"
      },
      {
        "name": "Good",
        "dataValue": "3"
      },
      {
        "name": "V. Good",
        "dataValue": "4"
      },
      {
        "name": "Excellent",
        "dataValue": "5"
      }
    ]
    
    [![rating_usage_statvar](/learn/assets/rating_usage_statvar.png)](/learn/assets/rating_usage_statvar.png)
2. Drag and drop a Rating widget
3. Bind the Value Dataset property to the Static Variable created above and set the Data and Display Fields to the respective fields within the Variable. [![rating_usage_statvar_bind](/learn/assets/rating_usage_statvar_bind.png)](/learn/assets/rating_usage_statvar_bind.png)
4. Set the properties for Default Value, Maximum Value and Show captions according to your app requirements.
5. Run the app.

[![rating_usage_run](/learn/assets/rating_usage_run.png)](/learn/assets/rating_usage_run.png)Changing Widget Style InteractivelyYou can change the Rating widget style at run time, using the **Change** event. Using the example from the previous section with Static Variable, here we will see how.

1. Add **Javascript** to the **Change** event of the Rating widget. [![rating_usage_statvar_event](/learn/assets/rating_usage_statvar_event.png)](/learn/assets/rating_usage_statvar_event.png)
2. Enter the following script. This script captures the rating value as changed by the user, and changes the color of the widget appropriately. **Note**: Use the rating widget name from your app in place of rating1 in the following code.
    
        $scope.rating1Change = function($event, $isolateScope) {
            if ($isolateScope.datavalue == '1') {
                $scope.Widgets.rating1.color = 'red'
            } else if ($isolateScope.datavalue == '2') {
                $scope.Widgets.rating1.color = 'blue'
            } else if ($isolateScope.datavalue == '3') {
                $scope.Widgets.rating1.color = 'blue'
            } else if ($isolateScope.datavalue == '4') {
                $scope.Widgets.rating1.color = 'green'
            } else if ($isolateScope.datavalue == '5') {
                $scope.Widgets.rating1.color = 'green'
            }
        };
    
3. Run the app

[![rating_usage_run2](/learn/assets/rating_usage_run2.png)](/learn/assets/rating_usage_run2.png)
