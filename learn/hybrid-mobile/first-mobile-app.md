---
title: "First Mobile App"
id: "first-mobile-app"
---
---
This section will give an overview of the steps to create a simple hybrid mobile app. This simple app will

- access the _phone's camera and contact list_;
- use _segmented content_
- one segment holding _camera and picture widget_: use the camera of the phone to capture an image and display it on the screen;
- another segment to display _contacts in a live list_

## Steps in Creating Mobile App

1. Click on the **Create Application** icon on the _Project Listings_ page of WaveMaker. Select **Hybrid Mobile App** as the type of project to create. [![Project-Type](/learn/assets/project-type.png)](/learn/assets/Project-Type.png)
2. Enter the **name** of the application, set a **provatar** and give a brief **description** of the app. [![MobApp-name](/learn/assets/MobApp-name.png)](/learn/assets/mobApp-name.png)
3. Set the screen size to your favorite mobile device or leave it to default
4. Drag and drop **Segmented Content Layout** [![MobApp-layout1](/learn/assets/MobApp-layout1.png)](/learn/assets/MobApp-layout1.png)
5. Name two **titles** as **Camera** and **Contact**. Delete the unwanted segment content [![MobApp-layout2](/learn/assets/MobApp-layout2.png)](/learn/assets/MobApp-layout2.png)
6. On the Camera segment, we will have a camera widget to take a pic and display the same alongside
    1. Drag and drop **camera** widget onto the canvas for the segment content camera. Select the **Save To Gallery** property of the camera. This will save the picture to the gallery on your mobile device. [![MobApp-segment1](/learn/assets/MobApp-segment1.png)](/learn/assets/MobApp-segment1.png)
    2. Drag and drop **picture** widget onto the canvas set the height and width to 150. Bind the _picture source to the datavalue property of the camera widget_. [![MobApp-picprops](/learn/assets/MobApp-picprops.png)](/learn/assets/MobApp-picprops.png) [![MobApp-picbind](/learn/assets/MobApp-picbind.png)](/learn/assets/MobApp-picbind.png)
    3. We will be using a Live List to display the contact details from the variable created in the previous step. Click on the **contact segment**
        1. Create a **variable** [![Create_Variables](/learn/assets/Create_Variables.png)](/learn/assets/Create_Variables.png) select **device variable** type and select **contacts as the service** and set the **Start Update** to true. This will ensure that the variable is populated when the app is run. [![MobApp-mobvar](/learn/assets/MobApp-mobvar.png)](/learn/assets/MobApp-mobvar.png)
        2. Drag and drop a **List** onto the canvas. Select the _variable_ created in the above step as the data source for the list. [![MobApp-listbind](/learn/assets/MobApp-listbind.png)](/learn/assets/MobApp-listbind.png)
        3. Select **Thumbnails List** as the template; and set **Scroll** as the navigation. This will ensure that the contacts are loaded one page at a time. [![MobApp-listbind2](/learn/assets/MobApp-listbind2.png)](/learn/assets/MobApp-listbind2.png)
        4. Set the **Name** widget to **displayName** and **Title** to **phoneNumbers.value** from the drop-down list [![MobApp-listbind3](/learn/assets/MobApp-listbind3.png)](/learn/assets/MobApp-listbind3.png)
        5. This is how your contacts segment will look like in design mode [![MobApp-segment2](/learn/assets/MobApp-segment2.png)](/learn/assets/MobApp-segment2.png)
    4. There is a known issue whereby the phone number binding might not work. In such cases select the Title label from the canvas and bind its caption to the value under phoneNumbers item of the dataset property of the contacts device variable created [![MobApp-listbind4](/learn/assets/MobApp-listbind4.png)](/learn/assets/MobApp-listbind4.png)
7. **Run** the app and see the preview. **Note**: You will not be able to use the camera or see the data in contacts list as these are device specific features. [![MobApp-run1](/learn/assets/MobApp-run1.png)](/learn/assets/MobApp-run1.png) [![MobApp-run2](/learn/assets/MobApp-run2.png)](/learn/assets/MobApp-run2.png) Change the device type and see the changes [![MobApp-run3](/learn/assets/MobApp-run3.png)](/learn/assets/MobApp-run3.png)
8. Build the app for APK file to be installed on mobile device
    1. Click on the **build** option from the main menu [![MobApp-build](/learn/assets/MobApp-build.png)](/learn/assets/MobApp-build.png)
    2. Set the **Mobile Configurations**, Developer details. [![MobApp-config1](/learn/assets/MobApp-config1.png)](/learn/assets/MobApp-config1.png)
    3. Retain the default setting on the **App Info**, **Device Settings**, and **Graphics** tabs.
    4. In the **Permissions** tab, ensure that the app is _allowed access to Camera and Contacts_ features of the mobile device. [![MobApp-config4](/learn/assets/MobApp-config4.png)](/learn/assets/MobApp-config4.png)
    5. You will get a _success message_. [![MobApp-buildmsg](/learn/assets/MobApp-buildmsg.png)](/learn/assets/MobApp-buildmsg.png)
    6. Check your mail for the **App Build success mail**.
    7. Use the link provided to **download the APK file**.
    8. **Install the APK file** on an Android mobile and run the app.
    9. Select the camera tab and click on the camera, it will open the phone camera.
    10. Click a picture. The screen should revert to the app and display the clicked image on the screen.
    11. See the image saved to the picture gallery on your phone.
    12. Select the contacts tab and see all your contacts listed.
9. You have thus created, built and installed a simple mobile app and seen the usage of the device widget and variables.

