---
title: "Building Rating Widget using Static Variable"
id: ""
---

Data for the Rating widget can come from a Variable - Static, Live etc.. In this example, we will see how to use a Static Variable as the data source for a Rating Widget. The process is same for all types of Variables.

1. Create a Static Variable of Entry Type, with Is List option selected and using the following JSON structure:
    
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
    
    [![rating_usage_statvar](../assets/rating_usage_statvar.png)](../assets/rating_usage_statvar.png)
2. Drag and drop a Rating widget
3. Bind the Value Dataset property to the Static Variable created above and set the Data and Display Fields to the respective fields within the Variable. [![rating_usage_statvar_bind](../assets/rating_usage_statvar_bind.png)](../assets/rating_usage_statvar_bind.png)
4. Set the properties for Default Value, Maximum Value and Show captions according to your app requirements.
5. Run the app.

[Rating Widget Use Cases](/learn/app-development/widgets/form-widgets/rating-widget/#use-cases)

- [1\. How to build Rating widget from static data](/learn/how-tos/rating-widget-using-static-data/)
- [2\. How to build Rating widget from static variable data](/learn/how-tos/rating-widget-using-static-variable/)
- [3\. How to build an interactive rating widget](/learn/how-tos/rating-widget-interactive/)
