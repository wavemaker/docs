---
title: "Building Project with Maven"
id: ""
---
---
This guide helps to create a war file for deploying the project in your local machine or a web server like Apache Tomcat.

## System prerequisites

|Description|Version|
|---|---|
|Java |1.8|
|Node|10.12.0|
|Maven| 3.3.9|
|Ant|1.10.7|
|Git| 2.26.2|

## Generating a War file

1. Export the project as zip.

[![](/learn/assets/ExportProjectasZip.png)](/learn/assets/ExportProjectasZip.png)

2. Extract the downloaded zip file.

3. Get the project location path.  

4. In the command line, go to the project path. See the image below.

```shell
cd <location>
```

[![](/learn/assets/LocateProjectIncmdline.png)](/learn/assets/LocateProjectIncmdline.png)

5. Run the following command where `<profileName>` should either be **development** or **deployment**.

```
mvn clean install -PprofileName
```

![mvn install](/learn/assets/enter-mvn-install-cmd-and-profilename.png)

:::note
WaveMaker project has two default profiles, which are **development** and **deployment**. Prefix the profile name with a **P**. If you do not prefix the profile name; the system selects a **development** profile by default. You can add Custom Profiles from the **Config Profiles** section in the **Project Settings** options. To locate the existing profiles' path, go to Step-7.
:::

6. In the project folder, a new folder called **target** generates automatically with the project war file in it.

:::note
The Step-6 happens on successful build completion. On build failure due to the out-of-memory error, the profile property called **build.ui.node.args** should be adjusted; this configures the build. Increase the **max-old-space-size** memory value where the default value is 512 MB. The build should be triggered again after increasing the memory value. To do this, do the following steps.
:::

7. Go to the project folder -> profiles -> open the file _<profilename.properties>_. As shown in the image below:

[![](/learn/assets/profile-location.png)](/learn/assets/profile-location.png)

8. Adjust the value of **build.ui.node.args.** See the image below:

[![](/learn/assets/adjusting-space-on-failure.png)](/learn/assets/adjusting-space-on-failure.png)

9. Re-do the steps 5 and 6.

## See Also

[Build Options for Deployment](/learn/app-development/deployment/build-options)
