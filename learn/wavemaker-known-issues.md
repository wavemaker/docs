---
title: WaveMaker Known Issues
id: ""
sidebar_label: "WaveMaker Known Issues"
---
---

WaveMaker frequently updates with new features and bug fixes. Learn about our recent releases [here](/learn/wavemaker-release-notes).

Below is the list of known issues reported against the release version. We document these issues, and we streamline them internally. The following list ensures that we are currently working on it, and we expect to fix it soon and provide workarounds, if any.

## Known Issue Tracker

---

### 10.7.x

|Issue description|Occured since|Expected to fix by|Status|Workaround|
|---|---|---|---|---|
|Showing errors in the inspection framework when adding custom formatters with config params in the `formatter.js` file.  |v10.7 | v10.7.x <td bgcolor="FED788"> In-progress|-  |
|Build failure issues on Windows. | v10.7 |V10.7.x <td bgcolor="FED788"> In-progress|1. Check [pre-requisites](/learn/app-development/deployment/building-with-maven#system-prerequisites). <br> 2. Run the maven command as an Administrator. |


### 10.6.x

|Issue description|Occured since|Expected to fix by|Status|Workaround|
|---|---|---|---|---|
|When deploying an app with an Angular production profile, a few JS calls fail with a 403 error. This issue occurs when the app contains a Data Table widget. | v10.6|v10.7.x <td bgcolor="FED788"> In Progress|-|
|Chips widget: When adding chips using ENTER key, duplicate chips are getting added in preview/deploy mode. |v10.6 | v10.7.0 <td bgcolor="82E0AA"> Fixed|-  |
|Issues when building applications with dependencies with scope test. | v10.6 | v10.7.x <td bgcolor="FED788"> In-progress | 1. Remove "pre-compile" action from `POM.xml`. <br> 2. If connectors are being used, then change the scope of added dependency from test to compile.| 
