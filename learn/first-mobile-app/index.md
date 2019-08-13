---
title: "First Mobile App"
id: "first-mobile-app"
---

This section will give an overview of the steps to create a simple hybrid mobile app. This simple app will

- the _'s camera and contact list_;
- _content_
- segment holding _and picture widget_: use the camera of the phone to capture an image and display it on the screen;
- segment to display _in a live list_

## in Creating Mobile App

1. on the **Application** icon on the _Listings_ page of WaveMaker. Select **Mobile App** as the type of project to create. [![Project-Type](../assets/Project-Type.png)](/learn/docs/wp-content/uploads/Project-Type.png)
2. the of the application, set a and give a brief of the app. [![MobApp-name](../assets/MobApp-name.png)](../assets/MobApp-name.png)
3. the screen size to your favorite mobile device or leave it to default
4. and drop **Content Layout** [![MobApp-layout1](../assets/MobApp-layout1.png)](../assets/MobApp-layout1.png)
5. two as and Delete the unwanted segment content [![MobApp-layout2](../assets/MobApp-layout2.png)](../assets/MobApp-layout2.png)
6. the Camera segment, we will have a camera widget to take a pic and display the same alongside
    1. and drop widget onto the canvas for the segment content camera. Select the **To Gallery** property of the camera. This will save the picture to the gallery on your mobile device. [![MobApp-segment1](../assets/MobApp-segment1.png)](../assets/MobApp-segment1.png)
    2. and drop widget onto the canvas set the height and width to 150. Bind the _source to the datavalue property of the camera widget_ [![MobApp-picprops](../assets/MobApp-picprops.png)](../assets/MobApp-picprops.png) [![MobApp-picbind](../assets/MobApp-picbind.png)](../assets/MobApp-picbind.png)
    3. will be using a Live List to display the contact details from the variable created in the previous step. Click on the **segment**
        1. a [![Create_Variables](../assets/Create_Variables.png)](../assets/Create_Variables.png) select ** variable** type and select ** as the service** and set the ** Update** to true. This will ensure that the variable is populated when the app is run. [![MobApp-mobvar](../assets/MobApp-mobvar.png)](../assets/MobApp-mobvar.png)
        2. and drop a onto the canvas. Select the created in the above step as the data source for the list. [![MobApp-listbind](../assets/MobApp-listbind.png)](../assets/MobApp-listbind.png)
        3. **List** as the template; and set as the navigation. This will ensure that the contacts are loaded one page at a time. [![MobApp-listbind2](../assets/MobApp-listbind2.png)](../assets/MobApp-listbind2.png)
        4. the widget to and to from the drop-down list [![MobApp-listbind3](../assets/MobApp-listbind3.png)](../assets/MobApp-listbind3.png)
        5. is how your contacts segment will look like in design mode [![MobApp-segment2](../assets/MobApp-segment2.png)](../assets/MobApp-segment2.png)
    4. is a known issue whereby the phone number binding might not work. In such cases select the Title label from the canvas and bind its caption to the value under phoneNumbers item of the dataset property of the contacts device variable created [![MobApp-listbind4](../assets/MobApp-listbind4.png)](../assets/MobApp-listbind4.png)
7. the app and see the preview. : You will not be able to use the camera or see the data in contacts list as these are device specific features. [![MobApp-run1](../assets/MobApp-run1.png)](../assets/MobApp-run1.png) [![MobApp-run2](../assets/MobApp-run2.png)](../assets/MobApp-run2.png) Change the device type and see the changes [![MobApp-run3](../assets/MobApp-run3.png)](../assets/MobApp-run3.png)
8. the app for APK file to be installed on mobile device
    1. on the option from the main menu [![MobApp-build](../assets/MobApp-build.png)](../assets/MobApp-build.png)
    2. the **Configurations**, Developer details. [![MobApp-config1](../assets/MobApp-config1.png)](../assets/MobApp-config1.png)
    3. the default setting on the **Info**, **Settings**, and tabs.
    4. the tab, ensure that the app is _access to Camera and Contacts_ features of the mobile device. [![MobApp-config4](../assets/MobApp-config4.png)](../assets/MobApp-config4.png)
    5. will get a _message_ [![MobApp-buildmsg](../assets/MobApp-buildmsg.png)](../assets/MobApp-buildmsg.png)
    6. your mail for the **Build success mail**
    7. the link provided to **the APK file**
    8. **the APK file** on an Android mobile and run the app.
    9. the camera tab and click on the camera, it will open the phone camera.
    10. a picture. The screen should revert to the app and display the clicked image on the screen.
    11. the image saved to the picture gallery on your phone.
    12. the contacts tab and see all your contacts listed.
9. have thus created, built and installed a simple mobile app and seen the usage of the device widget and variables.

[App Tutorials](/learn/tutorials/#tab-mob-tutorials)

- [1\. First Mobile App](/learn/hybrid-mobile/first-mobile-app/)
- [2\. Mobile App Integrated with Database](/learn/hybrid-mobile/mobile-app-integrated-database/)
- [3\. Mobile App using Bar Code Scanner](/learn/hybrid-mobile/mobile-app-using-bar-code/)
