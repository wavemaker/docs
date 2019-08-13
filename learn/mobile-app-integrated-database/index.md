---
title: "Mobile App Integrated with Database"
id: "mobile-app-integrated-database"
---

to create a **mobile application** that will display an _Profile_ and allow you to _the existing profile picture_ with the newly captured image.

this mobile application, you will learn about the following functionalities:

- of a **Mobile** app
- a **Database**
- of widgets
- of and variables

following steps will help you to build a simple mobile app with the above-mentioned functionalities:

## Mobile App

Creating an app involves the following steps:

1. **App**, from the project dashboard page. : If you have not created any projects, you will be directed to **Apps** Select the tab to see the Create App option. [![Create_App](../assets/Create_App.png)](../assets/Create_App.png)
2. , from **your platform** dialog. [![Selecting_mobile_app](../assets/Selecting_mobile_app.png)](../assets/Selecting_mobile_app.png)
3. **Mobile Application** dialog, enter the  **Name** the project in their respective fields and set the **avatar** (project image) if required and click [![Name_Description](../assets/Name_Description.png)](../assets/Name_Description.png)
4. **settings** dialog will be displayed. [![settings](../assets/settings.png)](../assets/settings.png) You can modify the following (optional):

- **prefix** – Package prefix defines the default package for the generated code across all services. This can be modified as per your requirements.
- information – created by default, which can be modified.
- the **language** for the project, this can be used in conjunction with [](/learn/app-development/widgets/form-widgets/select-locale-usage/)to set the language for the application.

- **Page** is created by default, with a _Column layout with top navbar and tabbar_

## Datasource - Database

We will Import a database to add data source to our application

1. the Main Menu, click on  and select  the drop-down list. This will enable us to include a data source (database) into our application. [![Import_DB](../assets/Import_DB.png)](../assets/Import_DB.png)
2. need to choose the Database Provider of the database being imported. For this tutorial, we will use the inbuilt sample database that ships with WaveMaker. Click **database** link. [![Import_Database_1](../assets/Import_Database_1.png)](../assets/Import_Database_1.png)
3. **tables** that you want to import from the chosen database. Here we will go with the default setting and import all the tables by clicking [![Import_DB_2](../assets/Import_DB_2.png)](../assets/Import_DB_2.png)
4. **Variables** are created for each entity (table) imported,  which can be used to establish a connection between the various widgets within the app and the data source. You can choose the variables to be generated and configure them accordingly. We will retain the default and generate all the variables by clicking [![Import_DB_3](../assets/Import_DB_3.png)](../assets/Import_DB_3.png)
5. successful import, you can choose to work with the data model generated or use the DB widgets created or go back to the canvas you are working on. Click to get back to the project workspace. [![Import_DB_Success](../assets/Import_DB_Success.png)](../assets/Import_DB_Success.png)

## Design

Now that we have data, let's build the Main Page.

1. the [Panel](/learn/product-walkthrough/), search for **List widget** and drag and drop it onto the canvas. [![toolbox](../assets/toolbox.png)](../assets/toolbox.png)
2. **Data** that serves as the source from the drop-down list to be The of the Employee table is selected by default. Click [![LiveLIst_1](../assets/LiveLIst_1.png)](../assets/LiveLIst_1.png)
3. **List Template** for the List to be **List** **[![LiveList_2](../assets/LiveList_2.png)](../assets/LiveList_2.png)**
4. **Fields** (widgets) to the data source as follows:
    - widget, set the property to be  the drop down list,
    - property for  as , and
    - property of widget as
5. [![LiveList_3](../assets/LiveList_3.png)](../assets/LiveList_3.png) We have completed configuring the Live List widget.

In the next few steps, we will add functionality to **an image** For this we will use an **widget** to trigger a **device variable** to take a picture and on successful picture capture will upload the same using a **upload device variable** and using a **Variable** update the **database**:

### : Anchor Widget

We will use an anchor widget to trigger the image capture process:

1. for widget from the design toolbox and drag and drop it onto the canvas within the live list below the picture widget.
2. the Anchor widget, and from the panel, set the to **Profile** [![anchor_props](../assets/anchor_props.png)](../assets/anchor_props.png)
3. down to locate the **Class** property and set it to **camera-enhance** using the bind icon. [![anchor_props1](../assets/anchor_props1.png)](../assets/anchor_props1.png)

### Variable: Camera

We will be using a device variable to capture the image from our mobile:

1. the Main Menu, click on menu and select from the drop down list. [![Create_Variables](../assets/Create_Variables.png)](../assets/Create_Variables.png)
2. the **: Main Page** window, select **Variable** from the drop-down list and click Enter the Name to be
3. the tab, select the from the drop-down menu to be and to be [![var_takepic_props](../assets/var_takepic_props.png)](../assets/var_takepic_props.png)
4. the tab, ensure the following properties are set and click [![var_takepic_data](../assets/var_takepic_data.png)](../assets/var_takepic_data.png)

### Variable - File Upload

Once the picture has been taken, it needs to be uploaded to the app, to be able to update the database. For this we will need to create another Device Variable:

1. the **: Main Page** window, select **Variable** from the drop-down list and click Enter the Name to be
2. the tab, select the from the drop-down menu to be and to be
3. [![Device_Variable_File_Upload](../assets/Device_Variable_File_Upload.png)](../assets/Device_Variable_File_Upload.png)

### it all together

Let us now connect all the above three steps:

1. the **widget** from the canvas and set the **event** to trigger the **device variable** created earlier: [![anchor_event](../assets/anchor_event.png)](../assets/anchor_event.png)
2. , the success event of the camera should trigger the file upload. Select the variable from the **panel** and [![var_selection](../assets/var_selection.png)](../assets/var_selection.png) set the ** event** to  [![var_takepic_event](../assets/var_takepic_event.png)](../assets/var_takepic_event.png)
3. file upload should upload the picture captured by the camera variable. Select the device variable and select the **icon** next to the **input** [![var_fileupload_data_takepic](../assets/var_fileupload_data_takepic.png)](../assets/var_fileupload_data_takepic.png) select from the  tab,  under the  of  and click  [![var_fileupload_bind_takepic](../assets/var_fileupload_bind_takepic.png)](../assets/var_fileupload_bind_takepic.png)

## & Binding

Using a Live Variable we will update Employee data with new profile picture taken:

1.  From the Main Menu, click on menu and select from the drop-down list.
2. the **: Main Page** window, select **Live Variable** from the drop-down list and click Enter the Name to be
3. the tab, set the **Source** to be , to be and to [![var_update_props](../assets/var_update_props.png)](../assets/var_update_props.png) Scroll down and enable the checkbox for  **Update** and disable for ** Start Update** [![var_update_props1](../assets/var_update_props1.png)](../assets/var_update_props1.png)
4. the tab, bind all the **except picurl** to the corresponding fields of the **of the livelist** : Click for each field and once you have bound all the element then click [![var_update_bind](../assets/var_update_bind.png)](../assets/var_update_bind.png) for  and , which are foreign keys, you might have to ** Expression** tab for successful binding [![var_update_bind_ue](../assets/var_update_bind_ue.png)](../assets/var_update_bind_ue.png) bind the  to the  under ** of fileupload device variable** [![var_update_bind_picurl](../assets/var_update_bind_picurl.png)](../assets/var_update_bind_picurl.png)
5. and the project. **Launch** the project if prompted. Here is the preview of your first application! [![run_anchor](../assets/run_anchor.png)](../assets/run_anchor.png) You can see the preview in various devices by selecting from the available list of devices.

## Build

To access this application on your mobile device, you need to build an APK file to install on a mobile device.

1. on from the Main Menu and select ****for Android** [![Build_for_Android](../assets/Build_for_Android1.png)](../assets/Build_for_Android1.png)** 
2. the Build for Android window, enter the required Developer information such as , , and Values for other fields are auto-populated based on the project details. [![Android_Build](../assets/Android_Build.png)](../assets/Android_Build.png)
3. **Listings** from the left menu. For authentication purposes,  most of the mobiles block access to external websites URLs, these URLs can be set here. For this app, the picurl in the sample database for the profile pic is located at an http: site, hence this access needs to be enabled. Click + icon and add **://\*/\*.** **Save** ****Build. [![White_Listings](../assets/White_Listings.png)](../assets/White_Listings.png)**** 
4. **to download the APK** file will be sent to the **email id**
5. the APK file on your Android mobile and run the app. [![mobrun](../assets/mobrun.png)](../assets/mobrun.png)
6. on the edit profile link to open the device camera. Capture a new image and see the list updated [![mobrun_postupdate](../assets/mobrun_postupdate.png)](../assets/mobrun_postupdate.png)

[App Tutorials](/learn/tutorials/#tab-mob-tutorials)

- [1\. First Mobile App](/learn/hybrid-mobile/first-mobile-app/)
- [2\. Mobile App Integrated with Database](/learn/hybrid-mobile/mobile-app-integrated-database/)
    - [Create Mobile App](#creation)
    - [Adding Datasource](#datasource)
    - [UI Design](#ui-design)
    - [Add Functionality](#functionality)
    - [Variables & Binding](#variables-binding)
    - [Mobile Build](#mobile-build)
- [3\. Mobile App using Bar Code Scanner](/learn/hybrid-mobile/mobile-app-using-bar-code/)
