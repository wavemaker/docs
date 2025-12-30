---
title: "Working with Pull to Refresh"
id: "working-pull-refresh"
last_update:
  author: "Author Name"
---
---
A gesture of swiping the screen down the page content refreshes the list. WaveMaker uses the PullToRefresh event to achieve this functionality.

## Setting Pull-to-refresh for a List

`PullToRefresh` gesture is enabled:

- if the page contains at least one list or
- if the On Pull To Refresh event on pageContent is provided.

By default, if lists are present in the page and On Pull to Refresh event is not provided, then a pull gesture will refresh the variables bound to the lists.

Image: pulltorefresh_android.gif       

Image: pulltorefresh_ios.gif

1. This default behavior can be overridden by providing On Pull To Refresh event on the page content.

Image: SwipeList7.png

2. Set an action to the Pull to Refresh event. For example, open a dialog as shown below. 

Image: SwipeList8.png

3. In run mode, pull action will open the dialog. 

Image: pulltorefresh_dialog.gif

## See Also

Gesture Support   
Setting Swipe Gestures for a List   
