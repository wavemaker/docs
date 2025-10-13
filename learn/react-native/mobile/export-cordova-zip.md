---
title: "Export Cordova zip"
id: "export-cordova-zip"
---
---

A Cordova zip in general will be used to create a platform specific installer.
WaveMaker supports cordova feature to generate mobile native installers for Android & iOS devices.

The Cordova zip is packed with all the UI specific files and images which will be needed to display the User Interface.
These UI files in the cordova zip will be pointing to a *backend server* which contains the core business logic.
This means, that the installers generated using Cordova have little to no business logic in it, and the whole business logic is in the backend server.

WaveMaker Studio allows you to export a cordova zip from any *mobile project*.

Following are the two approaches which can be followed to create a Cordova zip.

1. Using WaveMaker Studio
2. Using Maven Command

## Export Cordova using WaveMaker Studio

1. In the top right menu bar of WaveMaker Studio, go to **Export** and click **Project as Cordova ZIP**.

[![](/learn/assets/Cordova_Zip.png)](/learn/assets/Cordova_Zip.png)

2. A dialog with all the Cordova configuration will open.

[![](/learn/assets/Build_Cordova_Zip.png)](/learn/assets/Build_Cordova_Zip.png) 

| Configuration Name | Description |
|---|---|
|Application Name | The name of the application |
|Server Path | The backend server url. *Dev* is used to prepopulate the application preview url. *Custom* is used to add the url of the application which is hosted somewhere else |
|Config Profile | The build profile to use |
    
3. Make necessary changes to the configurations and click on **build** button. This will start a job as shown in the below image.

[![](/learn/assets/cordova_jobs_processing.png)](/learn/assets/cordova_jobs_processing.png)


4. When the job gets completed, you can download the Cordova zip by clicking on the **download** icon as shown in the below image.

[![](/learn/assets/cordova_jobs_completed.png)](/learn/assets/cordova_jobs_completed.png)


## Export Cordova using Maven Command

:::tip
This an alternative of the above approach. This is useful if you are working outside WaveMaker Studio.
:::

1. Get the WaveMaker project into your machine, if you don't have it already by following any of the below methods.

    1. Export the WaveMaker project zip and extract the zip.
    2. You can also execute `git clone <repo_url>` command to get the project from a git repository which is commonly used across the development team.

2. Install Prerequisites to support maven build.

|Description|Version|
|---|---|
|Java |1.8|
|Node|12.22.3||
|Maven| 3.6.3|
|npm|6.4.13|
|Ant|1.10.7|

3. Execute the below command.

    >`mvn clean package -Dmobile.serverUrl="<url>"`

    Here, **`<url>`** is the application server url. The mobile installer will be generated from this Cordova will make backend calls to the url specified.
    (*Refer the below image*)
    
    Example : 
    
    ![maven command to generate cordova](/learn/assets/cordova_maven_command.png)

4. After executing the above command, the Cordova zip can be found at 

    > `<ProjectFolder>/target/<ProjectName>-cordova.zip`. 

    Example : 
    
    ![maven command cordova out file](/learn/assets/cordova_maven_output.png)