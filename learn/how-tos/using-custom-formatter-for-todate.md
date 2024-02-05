---
title: "How to apply custom formatter on default toDate pipe"
id: "using-custom-formatter-for-todate-pipe"
sidebar_label: "Apply Custom Data Formatter on default toDate pipe"
---
---
### ToDate
WaveMaker includes a default formatter named **toDate** for date formatting. This formatter enables the transformation of a date object or date string into a specified format.

To use the *toDate* pipe, simply append the pipe sign (|) and 'toDate' after the template expression.
    
    {{ yourDateExpression | toDate: 'yourFormat' }}

For example, Bind the label to “Widgets.date1.datavalue | toDate: 'yyyy, dd MMMM'”.

## How to apply custom formatter on default toDate pipe

WaveMaker provides us the flexibility to apply custom formats on the existing toDate pipe with the same name ‘toDate’.

Here are the steps:

1. You can start by adding a custom formatter. To know more, see [Apply Custom Data Formatter](/learn/how-tos/using-custom-formatter/).
2. Add the following sample code snippet in the `formatter.js` file for formatting the date to specific format.

 ![Formatter File](/learn/assets/custom-formatter-file.png)
 ```js
toDate: {
        formatter: function(data, param1, param2) {
            // below code  will return date in this format “MM/DD/YYYY”
            return moment(data).format('L');
        }
    }
 ```

3. Next, go to the **Use Expression** tab. Expand the **Format Type** dropdown, select the **toDate** formatter and the required Date pattern. Click on **Apply Format**.

 ![Add custom formatter](/learn/assets/add-custom-formatter-todate.png)
4. Click **Bind** to save the expression.

 ![Format Bind Dialog](/learn/assets/custom-formatter-bind-dialog.png)
5. Preview the app, select a date, and observe the label, which is displayed in the custom date format.

 ![Add custom formatter](/learn/assets/result-using-todatecustom-formatter.png)

:::note
This is an enhanced capability that extends the default **ToDate** pipe functionality using a custom pipe with the same name.
:::

