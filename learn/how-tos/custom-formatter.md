---
title: "How to apply custom formatters for widgets"
id: ""
sidebar_label: "Custom Formatters"
---
---

***Customize data more SPECIFIC to your audience!***

You can now write the custom data formatter to covert the data received from services to a well-formatted data before showing it in the UI depending on the role, country, currency and more. For example, John is a card-holder, he can view his card details without any restrictions, whereas Bank admin cannot see his card number which is masked with specific character  as shown below.

![Credit card number formatter](/learn/assets/credit-card.png)

## Applying the custom formatter from Canvas

1. Drag and drop a Card widget, and [bind the widget](/learn/app-development/variables/variable-binding#binding-to-widgets) to a dataSet.

2. Now select the label from the canvas where you want to apply the formatter and from property panel click on Bind property to bind label with data.
3. Once you see the property binding dailog navigate to the User Expression tab.
4. Below the expression editor you will find the Format type dropdown where you have to select the custom formatter.
 ![Add custom formatter](/learn/assets/add-custom-formatter.png)

5. Initially if there is no formatter under custom section write your own formatter by clicking on the Add Custom Formatter option which will navigate us to formatter.js file.

![formatter JS file](/learn/assets/formatterjs.png)

 E.g. Here is a sample custom formatter (for data formatting)

```js
 myFormatter : {
      formatter : function(data, param1, context){
        // your logic goes here
        return data;
      },
      config: {
        param1: {
          name: '',
          widget: '',
          value: ''
        }
      }
    }

```

###  Terminology
**myFormatter**    
   Name of the custom formatter.

 **formatter** 
   Function where you can write the logic to format the data. The returned value from this function will be applied on the property this formatter is bound to.

The first argument is always data, then rest arguments depending on the config where the user set. The last argument will be the context for all iterable widgets(Default it get passed as last argument).

 **config** 
  Parameter information required during the design time. List down all the                parameters required for your formatter function.

  Each param has following info.

***name***      : name of the parameter to display during design time.

***widget***    : widget to take parameter input from the user. E.g. text, select.

 If widget is ***select*** then you need to provide ***options*** property as Array of strings format.


***value***     : default value if user doesn't provide any value.

***context***   : If you bounded  the iterable modal object to a widget eg: List, Card, Table, Select and Search etc. then internally context(respective object from JSON) will get passed to the formatter function(For a simple label widget there is no context).


**Note** : We are not supporting custom formatters for **Prefab** and **TemplateBundles**.

Let's see the example snippet of credit card formatter to show card number for card-holder and hide it from the Bank Admin.

```js
    creditcard: {
            formatter: function(data, param1, roles) {
                var hiphenSaperatedStr = data.match(new RegExp('.{1,4}', 'g')).join(" - ");
                var substring = hiphenSaperatedStr.substring(hiphenSaperatedStr.length - 4, hiphenSaperatedStr.length);
                var maskedData = '';

                if (roles && roles.length && roles[0] == 'user') {
                    maskedData = hiphenSaperatedStr.substring(0, hiphenSaperatedStr.length - 4);
                } else {
                    maskedData = hiphenSaperatedStr.substring(0, hiphenSaperatedStr.length - 4).replace(/\d/g, param1);
                }
                return maskedData + " " + " " + substring;
            },
            config: {
                param1: {
                    name: 'Mask char',
                    widget: 'text',
                    value: 'X'
                }
            }
        }

```

6. As soon as you add this snippet in the ***formatter.js*** file, you can see this formatter under custom section of the format type dropdown.
  
  Select the formater, then you will see the configured text widget where you can send custom params(***param1***) to the ***formatter*** function

![Apply formatter](/learn/assets/applyformat.png)

![Config params](/learn/assets/mask-config-param.png)


7. Now our formatter needs ***roles*** data  to differentiate the users.

In the same Use Expression tab you will find the Variable section where we you can get the roles from the variable named ***loggedInUser***.

Select the ***roles*** property then the expression will be built as shown below in the Use Expression tab and click on the **Bind** button to save the expression.

![Custom roles params](/learn/assets/loggedin-user-role.png)










