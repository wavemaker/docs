---
title: "Using function for evaluating conditions"
id: ""
---

While binding a widget to an expression using Use Expression option, in case expressions becoming complex, it is advisable to write an evaluation function for clarity and reusability. We will show how it can be done with the help of an example.

## Case

Show/Hide an image (say, tick image) in a page based on the condition. You can enter the expression directly or write a function. [![ue_ex1](../assets/ue_ex1.png)](../assets/ue_ex1.png)

1. the _dialog_ for the tick picture > property [![ue_ex2](../assets/ue_ex2.png)](../assets/ue_ex2.png)
2.  “ **expression**” tab. Type function “_(item)_” where “item” is passed as argument.
3. on the script tab. [![ue_ex3](../assets/ue_ex3.png)](../assets/ue_ex3.png)
4. following script
    
    //function to show the tick
    $scope.isShowTick = function(item) {
    return item.actioncount > 0 ? true:(item.note\_text ? (item.note\_text !== '' ? true : false) : false);
        }
    
5. the application to test
