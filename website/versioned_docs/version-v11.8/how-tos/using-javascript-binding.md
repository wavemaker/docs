---
title: "Using JavaScript in Binding"
id: "using-javascript-binding"
---
---
This How To:

- Showcases how to use the Binding Dialog Use Expressions tab to code JS expressions like
    - Concat
    - Arithmetic expressions
    - Comparison/logical expressions 
- How to create a JavaScript functions to return value of expressions
- Use Date, String functions, Group by month/year

## How-to Concatenate Strings using JS Functions and Use Expressions Tab

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vT0wXZu9tU9SCeEC0kwm0XSsmKz7H8DFoICrIPeSHzN-LR4yhw0371LB6tmjXHWSbCR2pv8Nmgn_pXe/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## Using Logical Expressions in JS Tab

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vRK19F2uZxCvlQiYQYCmpR84N1HZVnsKiz5PvhnKPRBxT_dWQycnC7RTZB7mF9aPuyxcRYU4zMbH7bO/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## Using Date, Month Expression in JavaScript

Following Date and Picture formats are used:

- orderdate - toDate: 'MMM'
- shippedDate - toDate: 'yyyy'
- picture - "http://appsinmotion.in/MadamCal/uploads/"+......caption+".gif"

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vTjcZvm2OC2VGzQ8gYi-ytn2_0Z3YmQwTgGoxSSqP4N9SqGq1mziJhb31tzSTmo-dmRw98QlvFUl0Mq/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## Using various predefined functions in JS

Here we will showcase:

- Concat and to Uppercase Functions in String.
```    
// Function for Validating if input is only string, If yes Concat and convert to UpperCase
Page.Convertor = function (x, y) {
    if (isNaN(x) && isNaN(y)) {
        return (x.concat(" ").concat(y)).toUpperCase();
    } else {
        return "Please Enter Only Strings";
    }
};

Page.buttonConvertClick = function ($event, widget) {
    //Setting output to Static Variable
    Page.Widgets.labelOutput.caption = Convertor(Page.Widgets.textString1.datavalue, Page.Widgets.textString2.datavalue);
    // Setting Show property of the output label as true as default was false
    Page.Widgets.labelOutput.show = true;
};
```    

:::note
In case the JavaScript function is declared in the _app.js_ file, use the _App scope_:
:::

```    
Page.buttonConvertClick = function ($event, widget) {
    //Setting output to Static Variable
    Page.Widgets.labelOutput.caption = App.Convertor(Page.Widgets.textString1.datavalue, 
                                                        Page.Widgets.textString2.datavalue);
    // Setting Show property of the output label as true as default was false
    Page.Widgets.labelOutput.show = true;
};
```    
- Instead of the button click event, you can invoke the JS function from the Use Expression option of the bind dialog for the Label caption property: 

[![](/learn/assets/JS_functions.png)](/learn/assets/JS_functions.png)

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQFj6S-v6BVTTVWD1wJ-A2q3j6tYsxy-yPrCRDQpsst8zLUTEzQdRmLLpXdCN9iGnrJGZGyeQTcaypL/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>


