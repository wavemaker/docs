---
title: "Setting Swipe Gestures on a List Widget"
date: "2018-11-19"
---

In the Gmail mobile app, swipe left or right on any item on the email list helps archive the email. Similar kind of swipe gestures support is provided on List Widget in WaveMaker.

## Swipe Gestures for a List

1. a Mobile app, the List Widget has a “Template View” property.
    
    - property contains ListTemplate, LeftActionTemplate, and RightActionTemplate
    - default value is set to the ListTemplate
    
    [![](../assets/SwipeList1.png)](../assets/SwipeList1.png)
2. LeftActionTemplate (or RightActionTemplate) is selected then a list action template view will be added on the list with Position set to left (or right).
    - the list action template.
    - template contains Add Button, Enable fullswipe, and Position properties. Position property on the list action specifies the type of action template i.e. left or right action template. [![](../assets/SwipeList2.png)](../assets/SwipeList2.png)
3. Button property can be used to add buttons on these action templates, to which events can be bound and styles applied.
4. added in LeftActionTemplate are aligned left as shown below and similarly buttons in RightActionTemplate are aligned right. [![](../assets/SwipeList3.png)](../assets/SwipeList3.png)
5. the buttons based on your requirements using the normal button styles and icons as shown below: [![](../assets/SwipeList4.png)](../assets/SwipeList4.png)
6. swiping list item, from right to left, right action template will be rendered. Similarly, on swiping from left to right, the left action template will be rendered. All the buttons will be rendered proportionately. [![](../assets/swipe_right.gif)](../assets/swipe_right.gif)       [![](../assets/swipe.gif)](../assets/swipe.gif)
7. the fullswipe property on list action template is enabled and the last button is swiped more the than half of the list item width then last button action (i.e. onTap event) will be triggered by default.
8. the full swipe on the left action panel. Last button action will be triggered on swiping the button to more than half of the list item width. [![](../assets/SwipeList5.png)](../assets/SwipeList5.png)
9. can be bound on the button. Add an action (i.e. on-tap event) on the button to open an alert dialog. [![](../assets/SwipeList6.png)](../assets/SwipeList6.png)
10. the run mode, when the last button is moved more than the half of the list item width, then the on tap action on it will be triggered automatically. Ontap event opens a dialog. [![](../assets/swipe_right_dialog.gif)](../assets/swipe_right_dialog.gif)

Gesture Support

- [1\. Gesture Support](/learn/hybrid-mobile/gesture-support/)
- [2\. Setting Swipe Gestures for a List](#)
- [3\. Working with Pull to Refresh](/learn/how-tos/working-pull-refresh/)
