---
title: "Mobile App Integrated with Database"
id: "mobile-app-integrated-database"
---

Learn to create a **simple mobile application** that will display an _Employee Profile_ and allow you to _update the existing profile picture_ with the newly captured image.

Through this mobile application, you will learn about the following functionalities:

- Creation of a **Hybrid Mobile** app
- Importing a **Sample Database**
- Usage of **LList** widgets
- Creation of **Device** and **Live** variables

The following steps will help you to build a simple mobile app with the above-mentioned functionalities:

## Create Mobile App

Creating an app involves the following steps:

1. Click **Create App**, from the project dashboard page. **NOTE**: If you have not created any projects, you will be directed to **Sample Apps**. Select the **Apps** tab to see the Create App option. [![Create_App](/learn/assets/Create_App.png)](/learn/assets/Create_App.png)
2. Choose **Mobile**, from **Select your platform** dialog. [![Selecting_mobile_app](/learn/assets/Selecting_mobile_app.png)](/learn/assets/Selecting_mobile_app.png)
3. On **Create Mobile Application** dialog, enter the **Project Name** and **Description** for the project in their respective fields and set the **project avatar** (project image) if required and click **CREATE**. [![Name_Description](/learn/assets/Name_Description.png)](/learn/assets/Name_Description.png)
4. A **project settings** dialog will be displayed. [![settings](/learn/assets/settings.png)](/learn/assets/settings.png) You can modify the following (optional):

- **package prefix** – Package prefix defines the default package for the generated code across all services. This can be modified as per your requirements.
- **copyright** information – created by default, which can be modified.
- set the **default language** for the project, this can be used in conjunction with [Localization](/learn/app-development/widgets/form-widgets/select-locale-usage/) to set the language for the application.
- Click **SAVE**.
- The **Main Page** is created by default, with a _Two Column layout with top navbar and tabbar_.

## Adding Datasource - Database

We will Import a database to add data source to our application

1. From the Main Menu, click on **Import** and select **Database **from the drop-down list. This will enable us to include a data source (database) into our application. [![Import_DB](/learn/assets/Import_DB.png)](/learn/assets/Import_DB.png)
2. You need to choose the Database Provider of the database being imported. For this tutorial, we will use the inbuilt sample database that ships with WaveMaker. Click **sample database** link. [![Import_Database_1](/learn/assets/Import_Database_1.png)](/learn/assets/Import_Database_1.png)
3. **Select tables** that you want to import from the chosen database. Here we will go with the default setting and import all the tables by clicking **NEXT**. [![Import_DB_2](/learn/assets/Import_DB_2.png)](/learn/assets/Import_DB_2.png)
4. **Live Variables** are created for each entity (table) imported,  which can be used to establish a connection between the various widgets within the app and the data source. You can choose the variables to be generated and configure them accordingly. We will retain the default and generate all the variables by clicking **IMPORT**. [![Import_DB_3](/learn/assets/Import_DB_3.png)](/learn/assets/Import_DB_3.png)
5. Upon successful import, you can choose to work with the data model generated or use the DB widgets created or go back to the canvas you are working on. Click **CLOSE** to get back to the project workspace. [![Import_DB_Success](/learn/assets/Import_DB_Success.png)](/learn/assets/Import_DB_Success.png)

## UI Design

Now that we have data, let's build the Main Page.

1. From the [Widgets Panel](/learn/product-walkthrough/), search for **Live List widget** and drag and drop it onto the canvas. [![toolbox](/learn/assets/toolbox.png)](/learn/assets/toolbox.png)
2. **Select Data** that serves as the source from the drop-down list to be **HrdbEmployeeData**. The **dataSet** of the Employee table is selected by default. Click **Next**. [![LiveLIst_1](/learn/assets/LiveLIst_1.png)](/learn/assets/LiveLIst_1.png)
3. **Select List Template** for the List to be **Thumbnails List** List.k **Next. [![LiveList_2](/learn/assets/LiveList_2.png)](/learn/assets/LiveList_2.png)**
4. **Bind Fields** (widgets) to the data source as follows:
    - For **Picture** widget, set the **Source** property to be **picurl **from the drop down list,
    - **Caption** property for **Name** as **firstname**, and
    - **Caption** property of **Title** widget as **jobtitle**.
5. Click **DONE**. [![LiveList_3](/learn/assets/LiveList_3.png)](/learn/assets/LiveList_3.png) We have completed configuring the Live List widget.

## Functionality

In the next few steps, we will add functionality to **capture an image**. For this we will use an **Anchor widget** to trigger a **camera device variable** to take a picture and on successful picture capture will upload the same using a **file upload device variable** and using a **Live Variable** update the **Employee database**:

### Widget: Anchor Widget

We will use an anchor widget to trigger the image capture process:

1. Search for **Anchor** widget from the design toolbox and drag and drop it onto the canvas within the live list below the picture widget.
2. Select the Anchor widget, and from the **properties** panel, set the **Caption** to **Edit Profile**. [![anchor_props](/learn/assets/anchor_props.png)](/learn/assets/anchor_props.png)
3. Scroll down to locate the **Icon Class** property and set it to **wavicon camera-enhance** using the bind icon. [![anchor_props1](/learn/assets/anchor_props1.png)](/learn/assets/anchor_props1.png)

### Device Variable: Camera

We will be using a device variable to capture the image from our mobile:

1. From the Main Menu, click on **Create** menu and select **Variables** from the drop down list. [![Create_Variables](/learn/assets/Create_Variables.png)](/learn/assets/Create_Variables.png)
2. On the **Variables: Main Page** window, select **Device Variable** from the drop-down list and click **Add**. Enter the Name to be **takePicture**.
3. From the **Properties** tab, select the **Service** from the drop-down menu to be **camera** and **Operation** to be **captureImage**. [![var_takepic_props](/learn/assets/var_takepic_props.png)](/learn/assets/var_takepic_props.png)
4. From the **Data** tab, ensure the following properties are set and click **Save**. [![var_takepic_data](/learn/assets/var_takepic_data.png)](/learn/assets/var_takepic_data.png)

### Device Variable - File Upload

Once the picture has been taken, it needs to be uploaded to the app, to be able to update the database. For this we will need to create another Device Variable:

1. On the **Variables: Main Page** window, select **Device Variable** from the drop-down list and click **Add**. Enter the Name to be **fileupload**.
2. From the **Properties** tab, select the **Service** from the drop-down menu to be **file** and **Operation** to be **upload**.
3. Click **Save**. [![Device_Variable_File_Upload](/learn/assets/Device_Variable_File_Upload.png)](/learn/assets/Device_Variable_File_Upload.png)

### Putting it all together

Let us now connect all the above three steps:

1. Select the **anchor widget** from the canvas and set the **tap event** to trigger the **camera device variable** created earlier: [![anchor_event](/learn/assets/anchor_event.png)](/learn/assets/anchor_event.png)
2. Next, the success event of the camera should trigger the file upload. Select the **takePicture** variable from the **Service panel** and [![var_selection](/learn/assets/var_selection.png)](/learn/assets/var_selection.png) set the **onSuccess event** to **fileupload** [![var_takepic_event](/learn/assets/var_takepic_event.png)](/learn/assets/var_takepic_event.png)
3. The file upload should upload the picture captured by the camera variable. Select the **fileupload** device variable and select the **bind icon** next to the **localFile input** [![var_fileupload_data_takepic](/learn/assets/var_fileupload_data_takepic.png)](/learn/assets/var_fileupload_data_takepic.png) select from the **Variable** tab, **imagePath** under the **dataSet** of **takePicture** and click **Bind** [![var_fileupload_bind_takepic](/learn/assets/var_fileupload_bind_takepic.png)](/learn/assets/var_fileupload_bind_takepic.png)

## Variables & Binding

Using a Live Variable we will update Employee data with new profile picture taken:

1.  From the Main Menu, click on **Create** menu and select **Variables** from the drop-down list.
2. On the **Variables: Main Page** window, select **Live Variable** from the drop-down list and click **Add**. Enter the Name to be ****updateprofilepicture.****
3. From the **Properties** tab, set the **Live Source** to be **hrdb**, **Type** to be **Employee** and **Operation** to **Update** [![var_update_props](/learn/assets/var_update_props.png)](/learn/assets/var_update_props.png) Scroll down and enable the checkbox for **Auto Update** and disable for ** Start Update**. [![var_update_props1](/learn/assets/var_update_props1.png)](/learn/assets/var_update_props1.png)
4. From the **Data** tab, bind all the **fields except picurl** to the corresponding fields of the **selecteditem of the livelist** **Note**: Click **Bind** for each field and once you have bound all the element then click **Done** [![var_update_bind](/learn/assets/var_update_bind.png)](/learn/assets/var_update_bind.png) for **department** and **employeeByManagerid**, which are foreign keys, you might have to **Use Expression** tab for successful binding [![var_update_bind_ue](/learn/assets/var_update_bind_ue.png)](/learn/assets/var_update_bind_ue.png) bind the **picurl** to the **path** under **dataSet of fileupload device variable** [![var_update_bind_picurl](/learn/assets/var_update_bind_picurl.png)](/learn/assets/var_update_bind_picurl.png)
5. **Save** and **Run** the project. **Manual Launch** the project if prompted. Here is the preview of your first application! [![run_anchor](/learn/assets/run_anchor.png)](/learn/assets/run_anchor.png) You can see the preview in various devices by selecting from the available list of devices.

## Mobile Build

To access this application on your mobile device, you need to build an APK file to install on a mobile device.

1. Click on **Build** from the Main Menu and select ****Build for Android**. [![Build_for_Android](/learn/assets/Build_for_Android1.png)](/learn/assets/Build_for_Android1.png)**
2. In the Build for Android window, enter the required Developer information such as **Name**, **URL**, and **Email**. Values for other fields are auto-populated based on the project details. [![Android_Build](/learn/assets/Android_Build.png)](/learn/assets/Android_Build.png)
3. Select **White Listings** from the left menu. For authentication purposes,  most of the mobiles block access to external websites URLs, these URLs can be set here. For this app, the picurl in the sample database for the profile pic is located at an http: site, hence this access needs to be enabled. Click + icon and add **http://\*/\*.** Click **Save** and ****Build. [![White_Listings](/learn/assets/White_Listings.png)](/learn/assets/White_Listings.png)****
4. The **link to download the APK** file will be sent to the **developer email id**.
5. Install the APK file on your Android mobile and run the app. [![mobrun](/learn/assets/mobrun.png)](/learn/assets/mobrun.png)
6. Click on the edit profile link to open the device camera. Capture a new image and see the list updated [![mobrun_postupdate](/learn/assets/mobrun_postupdate.png)](/learn/assets/mobrun_postupdate.png)

[Mobile App Tutorials](/learn/tutorials/#tab-mob-tutorials)

- [1\. First Mobile App](/learn/hybrid-mobile/first-mobile-app/)
- [2\. Mobile App Integrated with Database](/learn/hybrid-mobile/mobile-app-integrated-database/)
    - [i. Create Mobile App](#creation)
    - [ii. Adding Datasource](#datasource)
    - [iii. UI Design](#ui-design)
    - [iv. Add Functionality](#functionality)
    - [v. Variables & Binding](#variables-binding)
    - [vi. Mobile Build](#mobile-build)
- [3\. Mobile App using Bar Code Scanner](/learn/hybrid-mobile/mobile-app-using-bar-code/)
