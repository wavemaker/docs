---
title: "Gesture Support Beta"
id: "gesture-support"
sidebar_label: "Gesture Support"
---
---

In order to bring the Mobile app experience closer to that of Native apps, Gesture feature has been introduced. Using this the user can swipe to open/close Left panel, navigate to the next Tab and view the successive Carousel pane contents.

## Swipe Gestures

A swipe gesture involves the app responding when the user moves one or more fingers across the screen in a horizontal - left or right direction. 

[![](/learn/assets/swipe.png)](/learn/assets/swipe.png)

In WaveMaker Mobile Apps, Gestures are turned on by default. This will cause:

1. **Left Panel** to be expanded by swiping from left to right and collapsed by swiping right to left.  

[![](/learn/assets/swipe_leftpanel.png)](/learn/assets/swipe_leftpanel.png)

2. **Tab content** to navigate to the next tab or previous tab on swipe; 

:::note
Transition property for Tabs widget should be set to slide (default setting) for swipe functionality to work. 
:::

[![](/learn/assets/swipe_tabs.png)](/learn/assets/swipe_tabs.png)

3. **Carousel** content to navigate to the next or previous content on swipe. 

[![](/learn/assets/swipe_carousel.png)](/learn/assets/swipe_carousel.png)

### Limitations

This feature is in Beta state and as such there are few limitations.

- Currently, the swipe gesture is supported by Left Panel, Tabs, and Carousel (Static) widgets.
- A portion of the Left Panel occupies the left margin on the page to enable swipe. Due to this, touch or tap events on widgets aligned to the left margin of the page might not be triggered. Adding a padding or setting a margin for such widgets will help solve the issue.
- In case the Swipe Gesture functionality is hindering your app performance you can disable it. Go to the markup tab and add the attribute gestures = “off” to the widgets you want the swipe to be disabled. For example, to turn the swipe off for Left Panel, following would be the markup:

```   
<wm-left-panel content="leftnav" name="left_panel1" gestures ="off"></wm-left-panel>
```
    

