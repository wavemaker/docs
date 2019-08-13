---
title: "Building Rating Widget using Variable"
id: "building-rating-widget-using-variable"
---

Data for the Rating widget can come from a Variable - Model, Live etc.. In this example we will see how to use a Model Variable as the data source for a Rating Widget. The process is same for all types of Variables.

1. a [Variable](http://[supsystic-show-popup id=105]) of Entry Type, with Is List option selected and using the following JSON structure:
    
    \[
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
    \]
    
    [![](../assets/rating_usage_statvar.png)](../assets/rating_usage_statvar.png)
2. and drop a Rating widget
3. the Value Dataset property to the Static Variable created above and set the Data and Display Fields to the respective fields within the Variable.
4. the properties for Default Value, Maximum Value and Show captions according to your app requirements. [![](../assets/rating_usage_statvar_bind.png)](../assets/rating_usage_statvar_bind.png)
5. the app to see the Rating widget in action.

[Widget Use Cases](/learn/app-development/widgets/form-widgets/rating-widget/#use-cases)

- [1\. How to build Rating widget from static data](/learn/how-tos/rating-widget-using-static-data/)
- [2\. How to build Rating widget from static variable data](/learn/how-tos/rating-widget-using-variable/)
- [3\. How to build an interactive rating widget](/learn/how-tos/rating-widget-interactive/)
