---
title: "Mobile App Integrated with Database"
id: "mobile-app-integrated-database"
---
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

1. Click **Create App**, from the project dashboard page. **NOTE**: If you have not created any projects, you will be directed to **Sample Apps**. Select the **Apps** tab to see the Create App option. 

2. Choose **Mobile**, from **Select your platform** dialog. 


3. On **Create Mobile Application** dialog, enter the **Project Name** and **Description** for the project in their respective fields and set the **project avatar** (project image) if required and click **CREATE**. 

4. A **project settings** dialog will be displayed. 

You can modify the following (optional):

- **package prefix** – Package prefix defines the default package for the generated code across all services. This can be modified as per your requirements.
- **copyright** information – created by default, which can be modified.
- set the **default language** for the project, this can be used in conjunction with [Localization](/learn/app-development/widgets/form-widgets/select-locale-usage/) to set the language for the application.
- Click **SAVE**.
- The **Main Page** is created by default, with a _Two Column layout with top navbar and tabbar_.

## Adding Datasource - Database

We will Import a database to add data source to our application

1. From the Main Menu, click on **Import** and select **Database **from the drop-down list. This will enable us to include a data source (database) into our application. 

2. You need to choose the Database Provider of the database being imported. For this tutorial, we will use the inbuilt sample database that ships with WaveMaker. Click **sample database** link. 

3. **Select tables** that you want to import from the chosen database. Here we will go with the default setting and import all the tables by clicking **NEXT**. 

4. **Live Variables** are created for each entity (table) imported,  which can be used to establish a connection between the various widgets within the app and the data source. You can choose the variables to be generated and configure them accordingly. We will retain the default and generate all the variables by clicking **IMPORT**. 

5. Upon successful import, you can choose to work with the data model generated or use the DB widgets created or go back to the canvas you are working on. Click **CLOSE** to get back to the project workspace. 

## UI Design

Now that we have data, let's build the Main Page.

1. From the [Widgets Panel](/learn/app-development/wavemaker-overview/product-walkthrough), search for **Live List widget** and drag and drop it onto the canvas. 

2. **Select Data** that serves as the source from the drop-down list to be **HrdbEmployeeData**. The **dataSet** of the Employee table is selected by default. Click **Next**.

3. **Select List Template** for the List to be **Thumbnails List**, and click **Next**.

4. **Bind Fields** (widgets) to the data source as follows:
    - For **Picture** widget, set the **Source** property to be **picurl **from the drop down list,
    - **Caption** property for **Name** as **firstname**, and
    - **Caption** property of **Title** widget as **jobtitle**.
5. Click **DONE**. 

We have completed configuring the Live List widget.

## Functionality

In the next few steps, we will add functionality to **capture an image**. For this we will use an **Anchor widget** to trigger a **camera device variable** to take a picture and on successful picture capture will upload the same using a **file upload device variable** and using a **Live Variable** update the **Employee database**:

### Widget: Anchor Widget

We will use an anchor widget to trigger the image capture process:

1. Search for **Anchor** widget from the design toolbox and drag and drop it onto the canvas within the live list below the picture widget.
2. Select the Anchor widget, and from the **properties** panel, set the **Caption** to **Edit Profile**. 

3. Scroll down to locate the **Icon Class** property and set it to **wavicon camera-enhance** using the bind icon. 

### Device Variable: Camera

We will be using a device variable to capture the image from our mobile:

1. From the Main Menu, click on **Create** menu and select **Variables** from the drop down list. 

2. On the **Variables: Main Page** window, select **Device Variable** from the drop-down list and click **Add**. Enter the Name to be **takePicture**.
3. From the **Properties** tab, select the **Service** from the drop-down menu to be **camera** and **Operation** to be **captureImage**. 

4. From the **Data** tab, ensure the following properties are set and click **Save**. 

### Device Variable - File Upload

Once the picture has been taken, it needs to be uploaded to the app, to be able to update the database. For this we will need to create another Device Variable:

1. On the **Variables: Main Page** window, select **Device Variable** from the drop-down list and click **Add**. Enter the Name to be **fileupload**.
2. From the **Properties** tab, select the **Service** from the drop-down menu to be **file** and **Operation** to be **upload**.
3. Click **Save**. 


### Putting it all together

Let us now connect all the above three steps:

1. Select the **anchor widget** from the canvas and set the **tap event** to trigger the **camera device variable** created earlier: 

2. Next, the success event of the camera should trigger the file upload. Select the **takePicture** variable from the **Service panel** and set the **onSuccess event** to **fileupload** 

3. The file upload should upload the picture captured by the camera variable. Select the **fileupload** device variable and select the **bind icon** next to the **localFile input** 

select from the **Variable** tab, **imagePath** under the **dataSet** of **takePicture** and click **Bind** 

## Variables & Binding

Using a Live Variable we will update Employee data with new profile picture taken:

1.  From the Main Menu, click on **Create** menu and select **Variables** from the drop-down list.
2. On the **Variables: Main Page** window, select **Live Variable** from the drop-down list and click **Add**. Enter the Name to be ****updateprofilepicture.****
3. From the **Properties** tab, set the **Live Source** to be **hrdb**, **Type** to be **Employee** and **Operation** to **Update** Scroll down and enable the checkbox for **Auto Update** and disable for ** Start Update**. 

4. From the **Data** tab, bind all the **fields except picurl** to the corresponding fields of the **selecteditem of the livelist** 

:::note
Click **Bind** for each field and once you have bound all the element then click **Done**.
:::

for **department** and **employeeByManagerid**, which are foreign keys, you might have to **Use Expression** tab for successful binding 

bind the **picurl** to the **path** under **dataSet of fileupload device variable**.

5. **Save** and **Run** the project. **Manual Launch** the project if prompted. Here is the preview of your first application! 

You can see the preview in various devices by selecting from the available list of devices.

## Mobile Build

To access this application on your mobile device, you need to build an APK file to install on a mobile device.

1. Click on **Build** from the Main Menu and select ****Build for Android**. 

2. In the Build for Android window, enter the required Developer information such as **Name**, **URL**, and **Email**. Values for other fields are auto-populated based on the project details. 

3. Select **White Listings** from the left menu. For authentication purposes,  most of the mobiles block access to external websites URLs, these URLs can be set here. For this app, the picurl in the sample database for the profile pic is located at an http: site, hence this access needs to be enabled. Click + icon and add **http://*/*.** Click **Save** and **Build**. 

4. The **link to download the APK** file will be sent to the **developer email id**.
5. Install the APK file on your Android mobile and run the app. 

6. Click on the edit profile link to open the device camera. Capture a new image and see the list updated 

