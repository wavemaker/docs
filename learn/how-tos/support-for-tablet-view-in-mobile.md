---
title: "Designing tablet views in Mobile Project"
id: ""
---
---
Developing tablet views is now supported in Mobile projects. From 10.6, tab screens are available inside studio.

[![](/learn/assets/TabOptions.png)](/learn/assets/TabOptions.png)

**showindevice** property defines on which type of devices the widget has to be displayed.

[![](/learn/assets/showindeviceOptions.png)](/learn/assets/showindeviceOptions.png)

We also have a property called **screenType** on App which tells the user whether app is rendered on a mobile or tablet.
This property can be accessed as 
1. **App.screenType.isMobile**:
If set to true then app is rendered on mobile device
2. **App.screenType.isTabletProtrait**:
If set to true then app is rendered on tablet device with protrait orientation
3. **App.screenType.isTabletLandscape**:
If set to true then app is rendered on tablet device with landscape orientation


With the help of above properties, Let us develop an app with list of employees and their detail profile.
The view is different for tablet and mobile as shown below.

[![](/learn/assets/outputTabletMobileView.png)](/learn/assets/outputTabletMobileView.png)

## Steps for designing the app
1. select a tablet view from the choose screen list.
2. drag and drop, grid layout with two columns. one columnWidth is 4 and other is 8.
[![](/learn/assets/column-width.png)](/learn/assets/column-width.png)

3. first column has list widget bound to employees.
4. Add a container to the second column.
5. Design a [partial page](learn/app-development/ui-design/page-concepts/partial-pages) that contains the employee profile in detail with employee id param. Bind this partial to the selected employee based on employee id partial param in order to display the employee profile. check [this](/learn/how-tos/how-to-configure-row-expansion-in-a-data-table#creating-a-partial) for creating partial.
[![](/learn/assets/employeeProfilepartial.png)](/learn/assets/employeeProfilepartial.png)

6. Bind this partial to the above container that is within the second column.
[![](/learn/assets/col1col2.png)](/learn/assets/col1col2.png)

7. But this second column has to be displayed only in tablet view. Hence configure this by setting showindevice property to Tablet Protrait and Tablet Landscape.
[![](/learn/assets/showindevice_container.png)](/learn/assets/showindevice_container.png)

8. Now, change the screen size to mobile device

[![](/learn/assets/twoviews-mobile.png)](/learn/assets/twoviews-mobile.png)

9. Second column will not be displayed in mobile preview as mentioned in step 7.
10. Hence, in mobile, first column width has to be set to 12 using **App.screenType.isMobile**.
[![](/learn/assets/isMobileFlag.png)](/learn/assets/isMobileFlag.png)

11. On list item click, navigate to new page containing the partial.
[![](/learn/assets/onTapEvntonList.png)](/learn/assets/onTapEvntonList.png)
12. Run to preview the output on mobile and tablet.

[![](/learn/assets/output_mobile.png)](/learn/assets/output_mobile.png)

[![](/learn/assets/output_tablet.png)](/learn/assets/output_tablet.png)


