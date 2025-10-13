---
title: "Export React Native Project as Zip"
id: "export-react-native-zip"
sidebar_label: "Export as Zip"
---
---

A ReactNative zip is used to create a platform-specific installer. WaveMaker supports generating React Native installers for Android and iOS devices. Below are two ways that a React native zip can be generated from WaveMaker project.

## Export ReactNative Zip using WaveMaker Studio

1. Go to **Export** and click **Project as ReactNative ZIP**.

[![](/learn/assets/RN_Zip.png)](/learn/assets/RN_Zip.png)

2. A dialog displays with all the ReactNative configurations.

[![](/learn/assets/Build_RN_Zip.png)](/learn/assets/Build_RN_Zip.png)

| Configuration Name | Description |
|---|---|
|Application Name | The name of the application |
|Server Path | The backend server URL. *Dev* is used to prepopulate the application preview URL. <br/><br/> *Custom* is used to add the URL of the application which is hosted somewhere else |

3. Make necessary changes to the configurations and click on the **Build** button. This action starts a job, as shown below.

[![](/learn/assets/rn_jobs_processing.png)](/learn/assets/rn_jobs_processing.png)

4. When the job is completed, you can download the ReactNative zip by clicking on the **Download** icon, as shown below.

[![](/learn/assets/rn_jobs_completed.png)](/learn/assets/rn_jobs_completed.png)

## Export React Native Zip using Maven Command

:::tip
This an alternative of the above approach. This is useful if you are working outside WaveMaker Studio.
:::

1. Get the WaveMaker project into your machine by following any of the below methods.

    1. Export the WaveMaker project zip and extract the zip.
    2. You can also execute `git clone <repo_url>` command to get the project from a git repository which is commonly used across the development team.

2. Install Prerequisites to support maven build.

|Description|Version|
|---|---|
|Java |11 |
|Node|18.16.1|
|Maven | 3.8.6|
|npm | 9.5.1|
|Ant|	1.10.11|

3. Execute the below command.

    >`mvn clean package -Dmobile.serverUrl="<url>"`

    Here, **`<url>`** is the application server url. The mobile installer that is to be generated, will make backend calls to the url specified.
    (*Refer the below image*)
    
    Example : 
    
    ![maven command to generate React Native zip](/learn/assets/react-native/export-react-native-zip/command.png)

4. After executing the above command, the React Native zip can be found at 

    > `<ProjectFolder>/target/<ProjectName>-native-mobile_<version>.zip`. 

    Example : 
    
    ![maven command out file](/learn/assets/react-native/export-react-native-zip/maven_output.png)

