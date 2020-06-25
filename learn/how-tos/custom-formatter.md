---
title: "How to apply Custom Formatters for widgets"
id: ""
sidebar_label: "Custom Data Formatters"
---
With Customer Formmater, customize data more specific to your audience.

---

Convert data received from services to a well-formatted data before showing it in the UI, depending on the role, country, currency, and more. For example, John is a card-holder, he can view his card details without any restrictions, whereas bank admin cannot see his card number which is masked with specific character  as shown below.

![Credit card number formatter](/learn/assets/credit-card.png)

## Custom Formatter Definition

You can add custom formatter from the **Use Expression** tab of the variable dialog. The following is a sample custom formatter definition for formatting data.

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

### `myFormatter`

Name of the custom formatter.

### `formatter`

Here, you write a function containing the logic to format the data. The returned-value from this function applies to the property that this **formatter** is bound to.

The first argument is always `data`, the rest of the arguments depend on the `config` where the user is set. The last argument will be the `context` for all iterable widgets (by default it gets passed as the last argument).

### `config`

Parameter information required during the design time. List down all the parameters required for your formatter function.

Each param has the following information.

**`name`** : Name of the parameter to display during design time.

**`widget`** : Widget to take parameter input from the user. For example, text, select.

If you use **Select** widget, you should provide the **options** property as the array of strings format.

**`value`** : Set a default value that is used to mask or customize the data.

**`context`** : If you bound the iterable modal object to a widget like List, Card, Table, Select, and Search widgets, the **context** (respective object from JSON) gets passed to the formatter function automatically. For a simple label widget, there is no context.

:::note
We do not support Custom Formatter for **Prefab** and **TemplateBundles**.
:::

## Applying a Custom Formatter for a Card Widget

1. Drag and drop a Card widget, and [bind the widget](/learn/app-development/variables/variable-binding#binding-to-widgets) to a dataSet. In this example, we are using the following static data using a [model variable](/learn/app-development/variables/model-variable).

```JSON
[
  {
    "name": "John",
    "groupId": 123,
    "dataValue": "9234567898765432"
  },
  {
    "name": "Bob",
    "dataValue": "8294567898769876"
  },
  {
    "name": "Lora",
    "dataValue": "7761640026883576"
  }
]
```

2. Select a **Label** from the canvas where you want to apply the formatter. Go to the property panel, click the **Bind** property to bind the **Label** with "new custom" data.

![bind](/learn/assets/bind.png)

3. In the property **Bind** dialog, navigate to the **Use Expression** tab.
4. Below the expression editor, from the **Format Type** dropdown, select the **Add custom formatter**.

![Add custom formatter](/learn/assets/add-custom-formatter.png)

5. You will be navigated to the `formatter.js` script editor page.

![formatter JS file](/learn/assets/formatterjs.png)

### Credit Card Formatter

Here's a simple example snippet of credit card formatter to show sensitive data like credit card number only to the card holder, and hide it from the bank admin.

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

6. When you add this snippet in the `formatter.js` file, you can see this formatter under the **Custom** section of the **Format Type** dropdown.
  
7. When you select the formatter, you will see the configured text widget where you can send custom params `param1` to the `formatter` function

![Apply formatter](/learn/assets/applyformat.png)

![Config params](/learn/assets/mask-config-param.png)

### Binding Roles

Allow viewing only to specific user-roles to differentiate the users. Thus, the formatter needs **roles** data.

8. In the **Use Expression** tab, from the Variable section, get the roles from the variable named `loggedInUser`.

9. Select the **roles** property then the expression will be built as shown below in the **Use Expression** tab. 

![Custom roles params](/learn/assets/loggedin-user-role.png)

10. Click on the **Bind** button to save the expression.