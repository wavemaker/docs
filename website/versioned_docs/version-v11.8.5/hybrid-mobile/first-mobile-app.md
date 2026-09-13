---
title: "Build your First Mobile App"
id: "first-mobile-app"
sidebar_label: "First Mobile App"
---
---

Learn how to develop a simple hybrid mobile app in WaveMaker Studio. This app uses device-specific widgets like camera and contacts. In this app, click pictures, view it and save them to the phone gallery, and view your contacts.

## Widgets used in this app

| Widgets | Description |
|---|---|
|[Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control) | Segments are vertical tabs used for mobile devices.|
|[Grid Layout](/learn/app-development/widgets/container/grid-layout) | To align the contents of the app.|
|[Camera](/learn/app-development/widgets/mobile-widgets/camera) | To access the mobile camera to take pictures.|
|[Picture](/learn/app-development/widgets/basic/picture) | To display the captured images.|
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
3. Select the **Camera** segment and set **Horizontal Align** property to `Align center`. This brings the camera to center alignment.
    
    ![MobApp-segment1](/learn/assets/mobile_app_camera_widget.png)

## Displaying Captured Pictures

1. Drag and drop the Grid Layout widget. Use only one column and remove the remaining columns. Set the column width to `12` and `align center`. This allows you to align the picture when displaying.
2. Drag and drop the **Picture** widget onto the Grid Layout column and set the height and width to 150px.
     
    ![MobApp-picprops](/learn/assets/mobile_app_picture_widget_props.png)
     
3. Bind the picture source to **Camera** widget and select the `localFilePath` property, and click **Bind**.
     
    ![MobApp-picbind](/learn/assets/mobile_app_camera_to_picture_bind.png)

## Designing Contacts

To design contacts page, create a device variable and bind that to the repeated sections of the list. Follow the steps described below.

- Go to the **Contact** segment by clicking the Contact tab.

### Create a Variable for Data Source

1. Click [Variables](/learn/app-development/variables/variables) from the header. Click **New Variable** and, select the **Device** type.

    ![Create_Variables](/learn/assets/mobile_app_device_variable.png)

2. For the **Service** type, select **contacts** from the dropdown. 
3. Provide a name for the variable; for example, `Device_Contacts`, and click **Done**.

    ![MobApp-mobvar](/learn/assets/mobile_app_contact_variable.png)

4. Next, check the boxes for **Update data on input change** and **Request data on page load**, and save and close. This ensures that the variable gets triggered when you run the app.

### Adding List Widget

1. Drag and drop the **List** widget onto the **Contact** segment.
    1. For the **Retrieve Data From** option, select `Existing Variable`.
    2. For **Select a variable**, choose `Device_Contacts` as data source.
    3. For **Select data node**, click `dataSet` to select, and click **Next**.

    ![MobApp-listbind](/learn/assets/mobile_app_existing_variable.png)

2. Select template as **Actions List**, and set pagination to **Infinite Scroll**. This ensures that all the contacts load in a single page.

    ![MobApp-listbind2](/learn/assets/mobile_app_list_template.png)
    
    ![MobApp-listbind3](/learn/assets/mobile_app_pagination_type.png)

3. Set fields for the list. Select **Name** and set caption to **displayName** from the dropdown, and click **Done**.

    ![MobApp-listbind3](/learn/assets/mobile_app_name_label_bind.png)  

4. The list displays as following in the design mode. Remove all non-essential elements from the list, including picture widget and share icon.

    ![MobApp-segment2](/learn/assets/mobile_app_list_view.png)

### Adding Repeated Sections of List

1. Drag and drop another **List** inside the **List** created in the previous step.
   1. For the **Retrieve Data From** option, select `Existing Variable`.
   2. For **Select a variable**, choose `Device_Contacts` as data source. 
   3. For **Select data node**, click `phoneNumbers` to select, and click **Next**.
    
    ![MobApp-segment2](/learn/assets/mobile_app_phonenumbers_list_bind.png)
    
2.  Select template as **Actions List**, and set pagination to **Infinite Scroll**. See, [step-2 for adding list](#adding-list-widget).
3. Set fields for the list. Select **Name** and set caption to **value** from the dropdown, and click **Done**. See, [step-3 for adding list](#adding-list-widget).
4. In design mode, the list-inside-another-list should look as shown below. Remove all non-essential elements from the list, including picture widget and share icon.
    
    ![MobApp-segment2](/learn/assets/mobile_app_list_inside_list_remove_unwanted.png)
         

## Preview App

1. **Run**, to preview the app.
 
:::note
You cannot use the camera, or see any data in contacts. These are device-specific features that work in mobile-only.
:::

2. Change the device type to view changes in different screen sizes.

    ![MobApp-run3](/learn/assets/mobile_app_select_device.png)

When you are happy with the changes, proceed to build the app.

## Build App 

For installing the app on mobile device, you need an APK file for android phones, and an IPA file for iOS phones. WaveMaker supports **Build for Android** to generate APK files, and **Send to PhoneGap** to generate both IPA and APK files.


For this app, we use **[Build for Android](/learn/hybrid-mobile/mobile-build-android)** to generates an APK file. However, for creating release APK and IPA to publish on Playstore, or App Store, use [Send to PhoneGap](/learn/hybrid-mobile/mobile-build-phonegap) or [Manual Build](/learn/hybrid-mobile/mobile-build-manual/).

### Generate APK File for Mobile Installation

1. Click the **build** option from the header.
    
    ![MobApp-build](/learn/assets/mobile_app_menu_build_for_android.png)
    
2. Enter the details in the **Application Properties** tab. Provide the application details, including app name, release version, developer details, and more.

    ![MobApp-config1](/learn/assets/mobile_app_build_developer_configuration.png)

3. In the **Plugins** tab, ensure that the **Camera** and **Contacts** features for the mobile device are checked, and click **Build**.

    ![MobApp-config4](/learn/assets/mobile_app_plugins.png)

4. You get a _success message_; although, the build is not complete.

    ![MobApp-buildmsg](/learn/assets/mobile_app_build_confirmation_message.png)

:::note
Track the build progress from the Jobs menu.
:::

5. When the build completes, you can download the APK file from the jobs menu.

  ![MobApp-buildmsg](/learn/assets/mobile_app_build_job_completed.png)

:::note
Alternately, check your emails for the **Mobile App Build Successful** message. Use the **link** provided in the email to download the **APK** file.
:::

6. Install the **APK** file in your Android mobile and run the app.

## What's in the Mobile App

After installing the app in your mobile device, you can do the following.

1. Go to the **Camera** tab, and click the camera icon to access mobile's camera feature.
2. Take a picture. It displays the image on the picture widget.
3. View the captured-pictures saved to the picture gallery on your phone.
4. Go to the **Contacts** tab to see all your contacts list. 

With this, you have created, built and installed a simple hybrid mobile app using device widgets and variables.

