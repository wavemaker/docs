---
title: "First Mobile App"
id: ""
---
---

Learn how to build a simple and fully functional hybrid mobile app using WaveMaker Studio.  To develop this app, use the following widgets and set their properties.

### What widgets are used

| Widgets | Description |
|---|---|
|[Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control) | This is similar to vertical tabs that fit a mobile screen. This app uses two segments.|
|[Grid Layout](/learn/app-development/widgets/container/grid-layout) | To align the contents of this app neatly.|
|[Camera](/learn/app-development/widgets/mobile-widgets/camera) | To access the mobile camera to take pictures.|
|[Picture](/learn/app-development/widgets/basic/media-widgets) | To display the captured images.|
|[List](/learn/app-development/widgets/datalive/list) | To access and display the contacts from the mobile.|

## Steps in Creating Mobile App
1. Click on the **Create Application** icon on the _Project Listings_ page of WaveMaker. Select **Hybrid Mobile App** as the type of project to create. 

![Project-Type](/learn/assets/project-type.png)

2. Enter the **name** of the application, set a **provatar** and give a brief **description** of the app. 
3. Set the screen size to your favorite mobile device or leave it to default
4. Drag and drop **Segmented Control** widget.

![MobApp-layout1](/learn/assets/mobile_app_segmented_control.png)

5. Name two **titles** as **Camera** and **Contact**. Delete the unwanted segment content 

![MobApp-layout2](/learn/assets/mobile_app_segmented_naming.png)

6. On the Camera segment, we will have a camera widget to take a pic and display the same alongside
    1. Drag and drop **camera** widget onto the canvas for the segment content camera. Select the **Save To Gallery** property of the camera. This will save the picture to the gallery on your mobile device. 
    
    ![MobApp-segment1](/learn/assets/mobile_app_camera_widget.png)
    
    2. Drag and drop **picture** widget onto the canvas set the height and width to 150px.
     
     ![MobApp-picprops](/learn/assets/mobile_app_picture_widget_props.png)
     
    3. Bind the picture source to the datavalue property of the camera widget.
     
     ![MobApp-picbind](/learn/assets/mobile_app_camera_to_picture_bind.png)
     
    4. We will be using a Live List to display the contact details from the variable created in the previous step. Click on the **contact segment**
        1. Create a **variable** select **device variable** type.
        
        ![Create_Variables](/learn/assets/mobile_app_device_variable.png)
        
        2. Select **contacts as the service**.
        
        ![MobApp-mobvar](/learn/assets/mobile_app_contact_variable.png)
        
        3. Set the **Request on Page load** and **Update data on input change** to true. This will ensure that the variable is populated when the app is run.
        4. Drag and drop a **List** onto the canvas. Select the _variable_ created in the above step as the data source for the list and click on next.
        
         ![MobApp-listbind](/learn/assets/mobile_app_existing_variable.png)
         
        5. Select **Actions List** as the template; and set **Infinite Scroll** as the pagination. This will ensure that the contacts are loaded one page at a time.
        
         ![MobApp-listbind2](/learn/assets/mobile_app_list_template.png)
         
         ![MobApp-listbind3](/learn/assets/mobile_app_pagination_type.png)
<<<<<<< HEAD
<<<<<<< HEAD
        6. Set the **Name** widget to **displayName** from the drop-down list ![MobApp-listbind3](/learn/assets/mobile_app_name_label_bind.png)  
        7. This is how your list will look like in design mode ![MobApp-segment2](/learn/assets/mobile_app_list_view.png)
        8. Remove the unwanted picture widget and share icon from the list. ![MobApp-segment2](/learn/assets/mobile_app_remove_picture_action_in_list.png)
        9. Drag and drop another **List** onto the first list.  ![MobApp-segment2](/learn/assets/mobile_app_list_inside_list.png)
        10. Select the same _variable_ created in the above step and select data node as **phoneNumbers** ![MobApp-segment2](/learn/assets/mobile_app_phonenumbers_list_bind.png)
        11. Select **Actions List** as the template; and set **Infinite Scroll** as the pagination.  Set the **Name** widget to **value** from the drop-down list ![MobApp-listbind3](/learn/assets/mobile_app_phonenumber_valueto_name_label_bind.png)
        12. This is how your list inside list will look like in design mode. ![MobApp-segment2](/learn/assets/mobile_app_list_inside_list_view.png)
        13. Remove the unwanted picture widget and share icon from the list. ![MobApp-segment2](/learn/assets/mobile_app_remove_picture_action_in_list.png) 
        14. This is how your contacts segment will look like in design mode ![MobApp-segment2](/learn/assets/mobile_app_list_inside_list_remove_unwanted.png)
7. **Run** the app and see the preview. **Note**: You will not be able to use the camera or see the data in contacts list as these are device specific features. [![MobApp-run1](/learn/assets/MobApp-run1.png)](/learn/assets/MobApp-run1.png) [![MobApp-run2](/learn/assets/MobApp-run2.png)](/learn/assets/MobApp-run2.png) Change the device type and see the changes [![MobApp-run3](/learn/assets/MobApp-run3.png)](/learn/assets/MobApp-run3.png)
=======
         
        6. Set the **Name** widget to **displayName** from the drop-down list.
        
        ![MobApp-listbind3](/learn/assets/mobile_app_name_label_bind.png)  
        
        7. This is how your list will look like in design mode. Remove the unwanted picture widget and share icon from the list. 
        
        ![MobApp-segment2](/learn/assets/mobile_app_list_view.png)
        
        8. Drag and drop another **List** onto the list which is dropped onto canvas previously.  
        
        9. Select the same _variable_ created in the above step and select data node as **phoneNumbers**.
         
         ![MobApp-segment2](/learn/assets/mobile_app_phonenumbers_list_bind.png)
         
        10. Select **Actions List** as the template and set **Infinite Scroll** as the pagination. Refer point 5
        11. Set the **Name** widget to **value** from the drop-down list. Refer point 6
        12. This is how your list inside list will look like in design mode. Remove the unwanted picture widget and share icon from the list.
         
         ![MobApp-segment2](/learn/assets/mobile_app_list_inside_list_remove_unwanted.png)
         
7. **Run** the app and see the preview.
 
:::note
You will not be able to use the camera or see the data in contacts list as these are device specific features. 
Change the device type and see the changes.
:::
  
![MobApp-run1](/learn/assets/mobile_app_preview_mode.png) 
 
![MobApp-run3](/learn/assets/mobile_app_select_device.png)

 
>>>>>>> Missing screenshots #78
8. Build the app for APK file to be installed on mobile device
    1. Click on the **build** option from the main menu.
     
     ![MobApp-build](/learn/assets/mobile_app_menu_build_for_android.png)
     
    2. Set the **Mobile Configurations**, Developer details. 
    
    ![MobApp-config1](/learn/assets/mobile_app_build_developer_configuration.png)
    
    3. Retain the remaining default values on the **Application Properties** tab.
<<<<<<< HEAD
    4. In the **Plugins** tab, ensure that the Camera and Contacts_ features of the mobile device are selected. ![MobApp-config4](/learn/assets/mobile_app_plugins.png)
    5. You will get a _success message_. ![MobApp-buildmsg](/learn/assets/mobile_app_build_confirmation_message.png)
    6. Track the build status from the Jobs menu and once the job gets completed, Download the apk file and install it in the device.
      ![MobApp-buildmsg](/learn/assets/mobile_app_build_job_tracking.png)
      ![MobApp-buildmsg](/learn/assets/mobile_app_build_job_completed.png)
         or
    7. Check your mail for the **App Build success mail**  and Use the link provided to **download the APK file**.
=======
         
        6. Set the **Name** widget to **displayName** from the drop-down list.
        
        ![MobApp-listbind3](/learn/assets/mobile_app_name_label_bind.png)  
        
        7. This is how your list will look like in design mode.
        
        ![MobApp-segment2](/learn/assets/mobile_app_list_view.png)
        
        8. Remove the unwanted picture widget and share icon from the list. 
        
        ![MobApp-segment2](/learn/assets/mobile_app_remove_picture_action_in_list.png)
        
        9. Drag and drop another **List** onto the first list.  
        
        ![MobApp-segment2](/learn/assets/mobile_app_list_inside_list.png)
        
        10. Select the same _variable_ created in the above step and select data node as **phoneNumbers**.
         
         ![MobApp-segment2](/learn/assets/mobile_app_phonenumbers_list_bind.png)
         
        11. Select **Actions List** as the template and set **Infinite Scroll** as the pagination. Set the **Name** widget to **value** from the drop-down list.
        
        ![MobApp-listbind3](/learn/assets/mobile_app_phonenumber_valueto_name_label_bind.png)
        
        12. This is how your list inside list will look like in design mode.
         
         ![MobApp-segment2](/learn/assets/mobile_app_list_inside_list_view.png)
         
        13. Remove the unwanted picture widget and share icon from the list.
         
         ![MobApp-segment2](/learn/assets/mobile_app_remove_picture_action_in_list.png)
          
        14. This is how your contacts segment will look like in design mode. 
         
         ![MobApp-segment2](/learn/assets/mobile_app_list_inside_list_remove_unwanted.png)
         
7. **Run** the app and see the preview.
 
 :::note
 You will not be able to use the camera or see the data in contacts list as these are device specific features. 
 
 ![MobApp-run1](/learn/assets/mobile_app_preview_mode.png) 
 
 Change the device type and see the changes.
 
 ![MobApp-run3](/learn/assets/mobile_app_select_device.png)
 :::
 
8. Build the app for APK file to be installed on mobile device
    1. Click on the **build** option from the main menu.
     
     ![MobApp-build](/learn/assets/mobile_app_menu_build_for_android.png)
     
    2. Set the **Mobile Configurations**, Developer details. 
    
    ![MobApp-config1](/learn/assets/mobile_app_build_developer_configuration.png)
    
    3. Retain the remaining default values on the **Application Properties** tab.
=======
>>>>>>> Missing screenshots #78
    4. In the **Plugins** tab, ensure that the Camera and Contacts_ features of the mobile device are selected. 
    
    ![MobApp-config4](/learn/assets/mobile_app_plugins.png)
    
    5. You will get a _success message_. 
    
    ![MobApp-buildmsg](/learn/assets/mobile_app_build_confirmation_message.png)
<<<<<<< HEAD
    
    

:::note
 Track the build status from the Jobs menu and once the job gets completed, Download the apk file and install it in the device.
    
  ![MobApp-buildmsg](/learn/assets/mobile_app_build_job_tracking.png)
     
  ![MobApp-buildmsg](/learn/assets/mobile_app_build_job_completed.png)
  
  Or,
  
 Check your mail for the **App Build success mail**  and Use the link provided to **download the APK file**.
:::      
>>>>>>> Modified my first mobile application documentation.
    8. **Install the APK file** on an Android mobile and run the app.
    9. Select the camera tab and click on the camera, it will open the phone camera.
    10. Click a picture. The screen should revert to the app and display the clicked image on the screen.
    11. See the image saved to the picture gallery on your phone.
    12. Select the contacts tab and see all your contacts listed.
=======
     

:::note
Track the build status from the Jobs menu and once the job gets completed, Download the apk file and install it in the device.
Or,
Check your mail for the **App Build success mail**  and Use the link provided to **download the APK file**.
:::

![MobApp-buildmsg](/learn/assets/mobile_app_build_job_tracking.png)
    
![MobApp-buildmsg](/learn/assets/mobile_app_build_job_completed.png)
      
   8. **Install the APK file** on an Android mobile and run the app.
   9. Select the camera tab and click on the camera, it will open the phone camera.
   10. Click a picture. The screen should revert to the app and display the clicked image on the screen.
   11. See the image saved to the picture gallery on your phone.
   12. Select the contacts tab and see all your contacts listed.
>>>>>>> Missing screenshots #78
9. You have thus created, built and installed a simple mobile app and seen the usage of the device widget and variables.

