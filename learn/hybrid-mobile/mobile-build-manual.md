---
title: "Mobile Build - Manual"
id: ""
---
---

One can also build apk or ipa on their system from a cordova zip. To help the WaveMaker developers in this manual process, ```wm-cordova-cli``` is created. ```wm-cordova-cli``` combines multiple cordova commands into a single command. Please follow the below procedure.

1. Go through the documentation of wm-cordova-cli. [https://github.com/wavemaker/wm-cordova-cli](https://github.com/wavemaker/wm-cordova-cli)
2. Make sure that all the hardware and software required by wm-cordova-cli are present.
3. As explained below, export and download the cordova zip from WaveMaker studio.
4. Execute wm-cordova command with respective arguments based upon platform (android or ios).
5. wm-cordova-cli will log the destination build folder at the begining. When the build gets completed, wm-cordova-cli prints out the path at which the built artifact is present.


## How to export cordova zip
1. In the top right menu bar of WaveMaker Studio, export menu is present.  Click on 'Download Cordova zip' menu item.
[![](/learn/assets/Cordova_Zip.png)](/learn/assets/Cordova_Zip.png)
2. A dialog with all the cordova configuration will open.
[![](/learn/assets/Build_Cordova_Zip.png)](/learn/assets/Build_Cordova_Zip.png) 
3. Provide all necessary configuration and click on 'build' button. A job gets posted to prepare a cordova zip. This job is listed under jobs menu.
4. When the job gets completed, a link is provided (in the job info) to download the cordova zip.





