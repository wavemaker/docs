---
title: "Using function for evaluating conditions"
id: "using-function-evaluating-conditions"
---

While binding a widget to an expression using Use Expression option, in case expressions becoming complex, it is advisable to write an evaluation function for clarity and reusability. We will show how it can be done with the help of an example.

## Use Case

Show/Hide an image (say, tick image) in a page based on the condition. You can enter the expression directly or write a function. 

## Steps

1. Open the _binding dialog_ for the tick picture > **show** property 
2. Select “**Use expression**” tab. Type function “_isShowTick(item)_” where “item” is passed as argument.
3. Click on the script tab. 
4. Add following script
    
    //function to show the tick
    $scope.isShowTick = function(item) {
    return item.actioncount > 0 ? true:(item.note_text ? (item.note_text !== '' ? true : false) : false);
        }
    
5. Run the application to test
