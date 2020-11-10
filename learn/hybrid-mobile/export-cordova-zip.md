---
title: "Export Cordova zip"
id: ""
---
---

A Cordova zip will be used to create a mobile application. WaveMaker allows you to export a Cordova zip from a *mobile project* so that
you can use it to generate a *mobile application*.

Following are the two approaches which can be followed to create a Cordova zip.

1. Using WaveMaker Studio
2. Using Maven Command

## Export Cordova using WaveMaker Studio

1. In the top right menu bar of WaveMaker Studio, go to **Export** and click **Download Cordova zip**.

[![](/learn/assets/Cordova_Zip.png)](/learn/assets/Cordova_Zip.png)

2. A dialog with all the Cordova configuration will open.

[![](/learn/assets/Build_Cordova_Zip.png)](/learn/assets/Build_Cordova_Zip.png) 

3. Provide all necessary configuration and click **Build**. A job gets posted to prepare a Cordova zip.
This job is listed under the **Jobs** menu.

4. When the job gets completed, a link will be provided in the **Job** info to download the Cordova zip.


## Export Cordova using Maven Command

:::tip
This an alternative of the above approach. This is useful if you are working outside WaveMaker Studio.
:::

1. Export and extract the WaveMaker project zip if you don't have it already.

2. Execute the command `mvn clean package -Dmobile.serverUrl="<url>"`. Here, **`<url>`** is the application server URL.
The mobile application will generated from this Cordova will make backend calls to the URL specified. (*Refer the below image*)

![maven command to generate cordova](/learn/assets/cordova_maven_command.png)

3. After executing the above command, you can find the Cordova zip in the target folder. (*Refer the below image*)

![maven command cordova out file](/learn/assets/cordova_maven_output.png)