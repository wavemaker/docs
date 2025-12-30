---
title: "Designing Tablet Views in Mobile Project"
id: "support-for-tablet-view-in-mobile"
last_update:
  author: "Author Name"
---
---

Developing tablet views is now supported in Mobile projects. From the release 10.6, tab screens are available inside Studio.

Image: TabOptions.png

### showindevice

The **showindevice** property allows you to display the widget only on specific devices.

Image: showindeviceOptions.png

### Viewport API

This API provides the viewport details of the device in which the app is rendered.

## Properties

### `isMobileType`

If set to true, the app renders on a mobile device.

### `isTabletType`

If set to true, the app renders on a tablet device.

### `orientation`

This is an object containing the `isPortrait` and `isLandscape` values. Set the `isPortrait` property to true when the screen orientation is portrait. Similarly, you can set the `isLandscape` property to true when the screen orientation is landscape.

## Viewport API Usage

```js
// Accessing properties on Viewport 
var viewport = App.getDependency('Viewport');

console.log(viewport.isMobileType);
console.log(viewport.isTabletType);
console.log(viewport.orientation.isPortrait);
console.log(viewport.orientation.isLandscape);

};
```

:::note
Any device with minimum dimension (i.e. width or height) value greater than 480px and maximum dimension (i.e. width or height) value greater than 768px, is considered as tablet.
:::

With the help of the properties above, develop an app with the list of employees and their detailed-profile. The view is different for the tablet and mobile as shown below.

Image: outputTabletMobileView.png

## Steps for Designing the App

1. Select a tablet view from the choose screen list.
2. Drag and drop the Grid layout with two columns. Set one `columnWidth` to 4 and the other to 8.

    Image: column-width.png

3. The first column contains the List widget, which is bound to Employees.
4. Add a Container to the second column.
5. Design a partial page that contains the employee profile in detail with Employee ID Param. Bind this partial to the selected-employee based on the Employee ID Partial Param to display the Employee Profile. For more information, see How to create a Partial.

    !profile partial

6. Bind this partial to the above container that is within the second column.

    Image: col1col2.png

7. But this second column should be displayed only in tablet view. Therefore, configure this by setting the **showindevice** property to Tablet Portrait and Tablet Landscape.

    Image: showindevice_container.png

8. Now, change the screen size to the mobile device.

9. The second column will not be displayed in the mobile preview as mentioned in step 7.
10. Hence, in mobile, the first column width has to be set to 12 to occupy the device width.

    Image: isMobileFlag.png  

    Image: twoviews-mobile.png

11. On list item click, navigate to the new page containing the partial.

    Image: onTapEvntonList.png

12. Run to preview the output on mobile and tablet.

    Image: output_mobile.png

    Image: output_tablet.png