---
title: "Export Cordova zip"
id: ""
---
---

A Cordova zip will be used to create a mobile application. WaveMaker allows you to export a cordova zip from a *mobile project* so that
you can use it to generate a *mobile application*.

Following are the two approaches which can be followed to create a cordova zip 

## 1. Using WaveMaker studio

1. In the top right menu bar of WaveMaker Studio, export menu is present.  Click on 'Download Cordova zip' menu item.
[![](/learn/assets/Cordova_Zip.png)](/learn/assets/Cordova_Zip.png)

2. A dialog with all the cordova configuration will open.
[![](/learn/assets/Build_Cordova_Zip.png)](/learn/assets/Build_Cordova_Zip.png) 

3. Provide all necessary configuration and click on 'build' button. A job gets posted to prepare a cordova zip.
This job is listed under jobs menu.

4. When the job gets completed, a link will be provided (in the job info) to download the cordova zip.


## 2. Using maven command

:::tip
This an alternative of the above approach. This is useful if you are working outside WaveMaker studio.
:::

1. Export and extract the WaveMaker project zip if you don't have it already.

2. Execute the command `mvn clean package -Dmobile.serverUrl="<url>"`. Here, **&lt;url&gt;** is the application server url.
The mobile application will generated from this cordova will make backend calls to the url specified. (*Refer the below image*)

![maven command to generate cordova](/learn/assets/cordova_maven_command.png)

3. After executing the above command, you can find the cordova zip in the target folder. (*Refer the below image*)

![maven command cordova out file](/learn/assets/cordova_maven_output.png)