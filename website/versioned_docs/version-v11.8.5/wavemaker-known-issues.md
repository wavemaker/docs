---
title: WaveMaker Known Issues
id: "wavemaker-known-issues"
sidebar_label: "Known Issues"
---
---

WaveMaker frequently updates with new features and bug fixes. Learn about our recent releases [here](/learn/wavemaker-release-notes).

Below is the list of known issues reported against the release version. We document these issues, and we streamline them internally. The following list ensures that we are currently working on it, and we expect to fix it soon and provide workarounds, if any.

## Known Issue Tracker

---

### 11.0.x

|Issue description|Occured since|Expected to fix by|Status|Workaround|
|---|---|---|---|---|


### 10.10.x

|Issue description|Occured since|Expected to fix by|Status|Workaround|
|---|---|---|---|---|
|In the latest version of the Cordova-camera plugin, the edit flag functionality is not working in Android. | 10.10 |  10.10.x| [Issue details](https://github.com/apache/cordova-plugin-camera/issues/718) | -|
|Audio and video widgets fail to play audio and video that require cookie-based authentication. | 10.10 | 10.10.x | -| - |

### 10.7.x

|Issue description|Occured since|Expected to fix by|Status|Workaround|
|---|---|---|---|---|
|Showing errors in the inspection framework when adding custom formatters with config params in the `formatter.js` file. | v10.7 | v10.7.x | Fixed |- |
|Build failure issues on Windows. | v10.7 |V10.7.3 | Fixed|1. Check [pre-requisites](/learn/app-development/deployment/building-with-maven#system-prerequisites).   2. Run the maven command as an Administrator. |
| Issues with war export when you use Jasper Reports in the application. | 10.7.1 |v10.7.x <td bgcolor="FED788"> In Progress</td>| You can add the below jfrog repository in the `pom.xml` file:    ```<repository>``` ```<id>jaspersoft-third-party</id>``` ```<url>https://jaspersoft.jfrog.io/jaspersoft/third-party-ce-artifacts/</url>``` ```</repository>``` |
| `maven-clean-install` failing for projects in drive other than `/C`. | 10.7.1 |10.7.2 | Fixed ||



### 10.6.x

|Issue description|Occured since|Expected to fix by|Status|Workaround|
|---|---|---|---|---|
|When deploying an app with an Angular production profile, a few JS calls fail with a 403 error. This issue occurs when the app contains a Data Table widget. | v10.6|v10.7.x <td bgcolor="FED788"> In Progress</td>|-|
|Chips widget: When adding chips using ENTER key, duplicate chips are getting added in preview/deploy mode. |v10.6 | v10.7.0 | Fixed|-  |
|Issues when building applications with dependencies with scope test. | v10.6 | v10.7.x | Fixed | 1. Remove "pre-compile" action from `POM.xml`.   2. If connectors are being used, then change the scope of added dependency from test to compile.| 
