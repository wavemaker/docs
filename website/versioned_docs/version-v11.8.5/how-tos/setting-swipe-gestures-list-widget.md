---
title: "Setting Swipe Gestures on a List Widget"
id: "setting-swipe-gestures-list-widget"
---
---

In the Gmail mobile app, swipe left or right on any item on the email list helps archive the email. Similar kind of swipe gestures support is provided on List Widget in WaveMaker.

## Setting Swipe Gestures for a List

1. For a Mobile app, the List Widget has a **Template View** property.
    
    - This property contains `ListTemplate`, `LeftActionTemplate`,` and RightActionTemplate`
    - The default value is set to the `ListTemplate`
    
    [![](/learn/assets/SwipeList1.png)](/learn/assets/SwipeList1.png)

2. If `LeftActionTemplate` or `RightActionTemplate` is selected, then a list action template view will be added on the list with Position set to left (or right).
    - Select the list action template.
    - The template contains Add `Button`, Enable fullswipe, and Position properties. Position property on the list action specifies the type of action template, that is, left or right action template. 
    
    [![](/learn/assets/SwipeList2.png)](/learn/assets/SwipeList2.png)

3. Add `Button` property can be used to add buttons on these action templates, to which events can be bound and styles applied.
4. Buttons added in `LeftActionTemplate are` aligned left as shown below and similarly buttons in `RightActionTemplate` are aligned right. 

[![](/learn/assets/SwipeList3.png)](/learn/assets/SwipeList3.png)

5. Design the buttons based on your requirements using the normal button styles and icons as shown below: 

[![](/learn/assets/SwipeList4.png)](/learn/assets/SwipeList4.png)

6. On swiping list item, from right to left, right action template will be rendered. Similarly, on swiping from left to right, the left action template renders. All the buttons render proportionately. 

[![](/learn/assets/swipe_right.gif)](/learn/assets/swipe_right.gif)

[![](/learn/assets/swipe.gif)](/learn/assets/swipe.gif)

7. When the fullswipe property on list action template is enabled and the last button is swiped more the than half of the list item width then last button action, that is the onTap event gets triggered by default.
8. Enable the full swipe on the left action panel. Last button action gets triggered on swiping the button to more than half of the list item width. 

[![](/learn/assets/SwipeList5.png)](/learn/assets/SwipeList5.png)

9. Events can be bound on the button. Add an action `on-tap` event on the button to open an alert dialog. 

[![](/learn/assets/SwipeList6.png)](/learn/assets/SwipeList6.png)

10. In the run mode, when the last button is moved more than the half of the list item width, then the on tap action on it gets triggered automatically. Ontap event opens a dialog. 

[![](/learn/assets/swipe_right_dialog.gif)](/learn/assets/swipe_right_dialog.gif)


