---
title: "Building a War from a WaveMaker Project"
id: ""
---

This guide helps to create a war file for deploying the project in your local machine or a web server like Apache Tomcat.

System prerequisites:

1. (version 1.8)
2. (version 10.12.0)
3. (version 3.3.0)

##  a War file

- \-1: Export the project as zip.

[![](https://www.wavemaker.com../assets/ExportProjectasZip.png)](https://www.wavemaker.com../assets/ExportProjectasZip.png)

- \-2: Extract the downloaded zip file.
- \-3: Get the project location path.
- \-4: In the command line, type the following command. See the image below:

[![](https://www.wavemaker.com../assets/LocateProjectIncmdline.png)](https://www.wavemaker.com../assets/LocateProjectIncmdline.png)

- \-5: Run the following command where _<profileName>_ should either be  or

 clean install -PprofileName

![](https://www.wavemaker.com../assets/enter-mvn-install-cmd-and-profilename.png)

**\-1:** Wavemaker project has two default profiles, which are and Prefix the profile name with a If you do not prefix the profile name; the system selects a profile by default. You can add Custom Profiles from the **Profiles** section in the  **Settings** To locate the existing profiles' path, go to Step-7.

- \-6: In the project folder, a new folder called  generates automatically with the project war file in it.

**\-2:** The Step-6 happens on successful build completion. On build failure due to the out-of-memory error, the profile property called  should be adjusted; this configures the build. Increase the **\-old-space-size** memory value where the default value is 512 MB. The build should be triggered again after increasing the memory value. To do this, do the following steps:

- \-7: Go to the project folder -> profiles -> open the file _<profilename.properties>_ As shown in the image below:

[![](https://www.wavemaker.com../assets/profile-location.png)](https://www.wavemaker.com../assets/profile-location.png)

- \-8: Adjust the value of See the image below:

[![](https://www.wavemaker.com../assets/adjusting-space-on-failure.png)](https://www.wavemaker.com../assets/adjusting-space-on-failure.png)

- \-9: Re-do the steps 5 and 6.

From WaveMaker 10.0, you can deploy your app with new build options. For more information, see [Options for Deployment](/learn/app-development/build-options-app-deployment/)
