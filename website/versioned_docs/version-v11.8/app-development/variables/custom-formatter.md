---
title: "Custom Formatter"
id: "custom-formatter"
sidebar_label: "Custom Formatter"
---
With Custom Formatter, customize data more specific to your audience.

---
WaveMaker provides a few default formatters like `numberToString` and `stringToNumber`, `prefix` and `suffix`, `timeFromNow`, `toCurrency` and `toDate`. These can be accessed from the **Use Expression** tab. Sometimes, when these do not meet your requirement, you can write your own custom formatters, depending on the role, phone number format with a region or country code and more.

For example, John is a card-holder, he can view his card details without any restrictions, whereas the bank admin cannot see his card number which is masked with specific character  as shown below.

![Credit card number formatter](/learn/assets/credit-card.png)

:::tip
To learn about the usage of this feature, see using [Custom Formatter for masking sensitive data](/learn/how-tos/using-custom-formatter).
:::

## Accessing Custom Formatter

You can add custom formatter from the **Use Expression** tab of the variable binding dialog.

![Add custom formatter](/learn/assets/add-custom-formatter.png)

## Syntax Definition

The following is a sample custom formatter definition. For formatting custom data, you edit the `formatter.js` file.

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
WaveMaker does not support Custom Formatter for **Prefab** and **TemplateBundles**.
:::

## See Also

[Using Custom Formatter](/learn/how-tos/using-custom-formatter)
