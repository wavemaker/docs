---
title: "Export ReactNative zip"
id: ""
---
---

A ReactNative zip in general will be used to create a platform specific installer.
WaveMaker supports reactnative feature to generate mobile native installers for Android & iOS devices.

WaveMaker Studio allows you to export a reactnative zip from a *reactnative project*.


## Export ReactNative using WaveMaker Studio

1. In the top right menu bar of WaveMaker Studio, go to **Export** and click **Project as ReactNative ZIP**.

[![](/learn/assets/RN_Zip.png)](/learn/assets/RN_Zip.png)

2. A dialog with all the ReactNative configuration will open.

[![](/learn/assets/Build_RN_Zip.png)](/learn/assets/Build_RN_Zip.png)

| Configuration Name | Description |
|---|---|
|Application Name | The name of the application |
|Server Path | The backend server url. *Dev* is used to prepopulate the application preview url. *Custom* is used to add the url of the application which is hosted somewhere else |
|Config Profile | The build profile to use |

3. Make necessary changes to the configurations and click on **build** button. This will start a job as shown in the below image.

[![](/learn/assets/rn_jobs_processing.png)](/learn/assets/rn_jobs_processing.png)


4. When the job gets completed, you can download the ReactNative zip by clicking on the **download** icon as shown in the below image.

[![](/learn/assets/rn_jobs_completed.png)](/learn/assets/rn_jobs_completed.png)
