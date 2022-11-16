---
title: "How to apply Custom Formatter for widgets"
id: "using-custom-formatter"
sidebar_label: "Apply Custom Data Formatter"
---
---

With [Custom Formatter](/learn/app-development/variables/custom-formatter), customize data more specific to your audience. Convert data received from services to well-formatted data before showing it in the UI, depending on the role, country, currency, and more. In this example, we are using a [Card Widget](/learn/) to show how it works.

:::note
For more information about Custom Formatter syntax and definition, see [Custom Formatter](/learn/app-development/variables/custom-formatter).
:::

## Drag and Drop the Widget

1. Drag and drop a Card widget, and [bind the widget](/learn/app-development/variables/variable-binding#binding-to-widgets) to a dataSet. In this example, we are using a [model variable](/learn/app-development/variables/model-variable) with the following static data.

```JSON
[
  {
    "name": "Credit card",
    "dataValue": "9234567898765432"
  },
  {
    "name": "Debit card",
    "dataValue": "8294567898769876"
  },
  {
    "name": "Overdraft card",
    "dataValue": "7761640026883576"
  }
]
```

2. Select a **Label** from the canvas. Go to the property panel, click the **Bind** property to start configuring the **Label** with a "new custom" data.

![bind](/learn/assets/bind.png)

3. In the property **Bind** dialog, navigate to the **Use Expression** tab.
4. From the **Format Type** dropdown, select the **Add custom formatter**.

![Add custom formatter](/learn/assets/add-custom-formatter.png)

5. You will be navigated to the `formatter.js` script editor page.

![formatter JS file](/learn/assets/formatterjs.png)

## Credit Card Formatter

Here's a simple example snippet for formatting the credit card number to mask sensitive data. This enables to show full credit card number only to the cardholder, and mask the sensitive characters to the bank admin.

![Credit card number formatter](/learn/assets/credit-card.png)

6. Add the following code snippet in the `formatter.js` file.

:::tip
For more information about the syntax, see [Custom Formatter Syntax Definition](/learn/app-development/variables/custom-formatter#syntax-definition).
:::

### Snippet

```js
    creditcard: {
            formatter: function(data, param1, roles) {
                var hiphenSaperatedStr = data.match(new RegExp('.{1,4}', 'g')).join(" - ");
                var substring = hiphenSaperatedStr.substring(hiphenSaperatedStr.length - 4, hiphenSaperatedStr.length);
                var maskedData = '';

                if (roles && roles.length && roles[0] == 'user') {
                    maskedData = hiphenSaperatedStr.substring(0, hiphenSaperatedStr.length - 4);
                } else {
                    maskedData = hiphenSaperatedStr.substring(0, hiphenSaperatedStr.length - 4).replace(/d/g, param1);
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

6. Next, go to the **Use Expression** tab. Expand the **Format Type** dropdown, you can see the new formatter under the **Custom** section.
  
![Apply formatter](/learn/assets/applyformat.png)

7. When you select the new formatter called `creditcard`, the text widget will be configured to it where you can send custom params `param1` to the `formatter` function.

:::tip
You can edit the custom or mask characters here.
:::

![Config params](/learn/assets/mask-config-param.png)

## Enabling Role-based Viewing

Allow viewing only to specific role-based settings to control who sees what. Therefore, the formatter needs **roles** to be configured.

8. For the roles to work, enable [Authentication](/learn/app-development/app-security/authentication). In this case, we are using the [Demo security provider](/learn/app-development/app-security/authentication#demo). Enable these settings and come back to the **Use Expression** dialog.

:::note
The [snippet](#snippet) already contains the role-based condition in it.
:::

9. From the **Use Expression** tab, go to the **Variable** section, bind the roles to `loggedInUser`. For this, select the **roles** property then the expression will be built.

```js
Variables.loggedInUser.dataSet.roles
```

:::note
Ensure to add the colon **`:`** after the defined-custom character.
:::

![Custom roles params](/learn/assets/loggedin-user-role.png)

10. Click **Bind** to save the expression.

Preview the app and log in as an admin to see masking of the sensitive characters.

## See Also

[Custom Formatter](/learn/app-development/variables/custom-formatter)  