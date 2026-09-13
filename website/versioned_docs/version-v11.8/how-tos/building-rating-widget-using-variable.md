---
title: "Build Rating Widget using Model Variable"
id: "building-rating-widget-using-variable"
---
---

Data for the Rating widget can come from a Variable - Model, Live etc.. In this example we will see how to use a Model Variable as the data source for a Rating Widget. The process is same for all types of Variables.

1. Create a [Model Variable](/learn/assets/var_sel.png) of Entry Type, with Is List option selected and using the following JSON structure:

```    
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
```    

[![](/learn/assets/rating_usage_statvar.png)](/learn/assets/rating_usage_statvar.png)

2. Drag and drop a Rating widget
3. Bind the Value Dataset property to the Static Variable created above and set the Data and Display Fields to the respective fields within the Variable.
4. Set the properties for Default Value, Maximum Value and Show captions according to your app requirements. 

[![](/learn/assets/rating_usage_statvar_bind.png)](/learn/assets/rating_usage_statvar_bind.png)

5. Preview the app to see the Rating widget in action.


