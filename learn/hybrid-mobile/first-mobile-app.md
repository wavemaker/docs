---
title: "First Mobile App"
id: ""
---
---

Learn how to develop a simple hybrid mobile app in WaveMaker Studio. This app uses basic device widgets to create a contact card and save it the local device.

## Widgets used in this app

| Widgets | Description |
|---|---|
|[Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control) | Segments are vertical tabs used for mobile devices.|
|[Grid Layout](/learn/app-development/widgets/container/grid-layout) | To align the contents of the app.|
|[Camera](/learn/app-development/widgets/mobile-widgets/camera) | To access the mobile camera to take pictures.|
|[Picture](/learn/app-development/widgets/basic/media-widgets) | To display the captured images.|
|[List](/learn/app-development/widgets/datalive/list) | To access and display the contacts from the mobile.|

## Creating a Mobile App

1. Click the **Create** button on the _Project Listings_ page of WaveMaker, and select **Mobile** as a platform.

![Project-Type](/learn/assets/project-type.png)

2. Enter the **name** of the application, set an **icon** to represent your app, and provide a brief **description** for the app.

## Designing Base

1. Set the screen size to your favorite mobile device, or leave it to default settings.
2. Drag and drop **Segmented Control** widget on the canvas.

![MobApp-layout1](/learn/assets/mobile_app_segmented_control.png)

3. Name the **Titles** to **Camera** and **Contact** respectively, and delete the extra segments.

    ![MobApp-layout2](/learn/assets/mobile_app_segmented_naming.png)

## Adding Camera

1. On the **Camera**'s segment, drag and drop the **camera** widget. 
2. Select the **Save To Gallery** property for the camera widget. This enables the app to save pictures to the gallery on your mobile device.
    
    ![MobApp-segment1](/learn/assets/mobile_app_camera_widget.png)

## Displaying Captured Pictures

1. Add the Grid Layout widget and use only one column and remove the remaining columns. This allows you to align the picture when displaying.
2. Drag and drop the **Picture** widget onto the Grid Layout column and set the height and width to 150px.
     
    ![MobApp-picprops](/learn/assets/mobile_app_picture_widget_props.png)
     
3. Bind the picture source to the `localFilePath` property of the camera widget.
     
    ![MobApp-picbind](/learn/assets/mobile_app_camera_to_picture_bind.png)

## Designing Contacts

To design contacts page, create a device variable and bind that to the repeated sections of the list. Follow the steps described below.

- Go to the **Contact** segment by clicking on the Contact tab.

### Create a Variable for Data Source

1. Click [Variables](/learn/app-development/variables/variables) from the header and select the **Device** type.

    ![Create_Variables](/learn/assets/mobile_app_device_variable.png)

2. For the **Service** type, select **contacts** from the dropdown. 
3. Provide a name for the variable; for example, `Device_Contacts`, and click **Done**.

    ![MobApp-mobvar](/learn/assets/mobile_app_contact_variable.png)

4. Next, check the boxes for **Request on page load** and **Update data on input change**. This ensures that the variable gets triggered when you run the app.

### Adding List Widget

1. Drag and drop the **List** widget onto the canvas and select the device _variable_ `Device_Contacts` as the data source for the list, and click **Next**.

    ![MobApp-listbind](/learn/assets/mobile_app_existing_variable.png)

2. Select **Actions List** as the template and set **Infinite Scroll** as the pagination. This ensures that all the contacts load in a single page.

    ![MobApp-listbind2](/learn/assets/mobile_app_list_template.png)
    
    ![MobApp-listbind3](/learn/assets/mobile_app_pagination_type.png)

3. Set the **Name** widget to **displayName** from the dropdown list and click **Done**.

    ![MobApp-listbind3](/learn/assets/mobile_app_name_label_bind.png)  

4. The list displays as following in the design mode. Remove all non-essential elements from the list, including picture widget and share icon.

    ![MobApp-segment2](/learn/assets/mobile_app_list_view.png)

### Adding Repeated Sections

1. Drag and drop another **List** inside the **List** created in the previous step.
   1. For the **Retrieve Data from** option, select `Existing Variable`.
   2. For **Select a variable**, choose `Device_Contacts` as data source. 
   3. For **Select data node**, click `phoneNumbers` to select.
    
    ![MobApp-segment2](/learn/assets/mobile_app_phonenumbers_list_bind.png)
    
2. Select **Actions List** as template, and set **Infinite Scroll** for pagination. See, [step-2 for adding list](#adding-list-widget).
3. Set the **Name** widget to **value** from the drop-down list. See, [step-3 for adding list](#adding-list-widget).
4. The list-inside-another-list displays as following in the design mode. Remove all non-essential elements from the list, including picture widget and share icon.
    
    ![MobApp-segment2](/learn/assets/mobile_app_list_inside_list_remove_unwanted.png)
         

## Preview App

1. **Run**, to preview the app.
 
:::note
You cannot to use camera or see any data in contacts list as these are device specific features.
:::
  
![MobApp-run1](/learn/assets/mobile_app_preview_mode.png) 

2. Change the device type and view changes in different devices.

![MobApp-run3](/learn/assets/mobile_app_select_device.png)

## Deploy App

1. Build the app for APK file to be installed on mobile device.

    1. Click on the **build** option from the main menu.
     
     ![MobApp-build](/learn/assets/mobile_app_menu_build_for_android.png)
     
    2. Set the **Mobile Configurations**, Developer details. 
    
    ![MobApp-config1](/learn/assets/mobile_app_build_developer_configuration.png)
    
    3. Retain the remaining default values on the **Application Properties** tab.
    
    4. In the **Plugins** tab, ensure that the Camera and Contacts features of the mobile device are selected. 
    
    ![MobApp-config4](/learn/assets/mobile_app_plugins.png)
    
    5. You will get a _success message_. 
    
    ![MobApp-buildmsg](/learn/assets/mobile_app_build_confirmation_message.png)
    
:::note
Track the build status from the Jobs menu and once the job gets completed, Download the apk file and install it in the device.
:::  

  ![MobApp-buildmsg](/learn/assets/mobile_app_build_job_tracking.png)

:::note
Check your mail for the **App Build success mail**  and Use the link provided to **download the APK file**.
:::

  ![MobApp-buildmsg](/learn/assets/mobile_app_build_job_completed.png)

   6. **Install the APK file** on an Android mobile and run the app.
   7. Select the camera tab and click on the camera, it will open the phone camera.
   8. Click a picture. The screen should revert to the app and display the clicked image on the screen.
   9. See the image saved to the picture gallery on your phone.
   10. Select the contacts tab and see all your contacts listed.
9. You have thus created, built and installed a simple mobile app and seen the usage of the device widget and variables.

