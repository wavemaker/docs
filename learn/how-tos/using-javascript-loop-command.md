---
title: "Using JavaScript to loop a command"
id: "using-javascript-loop-command"
---
---

## Inserting and updating multiple rows into the database table. 

```sql
insert into Subscriptions(UserId,ChannelId,SubscriptionCost) 
values(:UserId,:ChannelId,:SubscriptionCost)
```    

## CheckboxSet onChange event

```js   
// For handling Selected Channels
var userChannels = [];

Page.checkboxsetSelectedChannelsChange = function ($event, widget, newVal, oldVal) {
    // Selected Channels are added
    userChannels = newVal;
};
```

## Loop function through JavaScript

```js   
Page.buttonSubscribeClick = function ($event, widget) {
    // Check if User selected any channels if YES add them ELSE notify him
    if (userChannels.length > 0) {
        // Iterating along the selected channels for subscription and adding them
        for (let i = 0; i < userChannels.length; i++) {
            Page.Variables.AddSubscriptions.setInput({
                "UserId": Page.Widgets.selectSelectUser.datavalue,
                "ChannelId": userChannels[i],
                "SubscriptionCost": "10$"
            });

            Page.Variables.AddSubscriptions.invoke();
        }
    } else
        Page.Actions.SelectionNotifier.notify();
};
```    

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQxHInykV_LRP0ApP4mVm32-2v7bexGZKIPQTzrb8ZakIdXo3D3yHoFt4fByapn0Ee6XpmWRz0AVNW0/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>


## See Also

[How to use JavaScript to Use Expressions for Binding](/learn/how-tos/using-javascript-binding/)  
[How to load JavaScript from external URLs](/learn/how-tos/using-javascript-external-url/)  
[How-To insert/update multiple rows in a database using a FOR loop in JavaScript](/learn/how-tos/using-javascript-loop-command/)  
