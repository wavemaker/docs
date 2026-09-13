---
title: "WaveMaker 8.0.Beta - Release date: 23 September 2015"
id: "v8-0-beta"
sidebar_label: "Release v8.0.beta"
---
*Here is a summary of key features, known issues and bug fixes offered in Studio 8.0.Beta Release.*

## Highlights
---

### Improved UI

New look-n-feel, to accommodate sleek and user-friendly editor, canvas actions, widget properties all in one screen. Efficient use of the available real estate, existing 7.x users will be able to see the difference.

### Hybrid Mobile Apps

Now it is possible to build hybrid mobile apps using WaveMaker Studio. Hybrid Mobile Apps are easy way to create apps which can take advantage of device features like camera, geolocation etc. using Apache Cordova and creating a platform specific installer. WaveMaker for Hybrid Mobile apps is in its ALPHA version with support for building Android based apps and will be enhanced in the upcoming releases. [#DOC](/learn/hybrid-mobile/building-hybrid-mobile-apps).

### Project Collaboration

Project Collaboration is easier with the new Studio Project Listing & Activity page. WMO users will now be directed to this page after login, instead of EDN of the previous versions. You can collaborate with other developers – by sharing projects, viewing activities, notifications and also managing the deployed apps. [#DOC](/learn/app-development/dev-integration/developer-collaboration).

### Deploy to AWS

Introducing the option to **Deploy apps to your Amazon Web Services (AWS) account**. Deployment of apps is essential to enable public access to your apps post development phase. Now you have option to deploy them onto AWS account that you own and manage. WaveMaker Demo Cloud option is also available, but for a limited period. [#DOC](/learn/app-development/deployment/deployment-to-aws).

### Push to Repo of your choice

**Version Control** now enables you to **Push to External Repo**. Using this feature, you can push the app source code to your accounts at _GitHub_, _Stash_ or _Bitbucket_. This essentially allows user who have built applications using WaveMaker to own the source code by pushing it any public or SaaS repository of their choice. [#DOC](/learn/app-development/dev-integration/developer-collaboration#code-sharing---vcs).

## Enhancements
---

### New Themes

The default theme has been changed to reflect the changed Studio UI. The existing default theme is available under the name of **Slate**.

### Event Handlers

Event Handlers are provided to fields in **Live Form and Filter**. This will enable the developer to handle events from the _Designer_ instead of using the JavaScript directly.

### Update Database 

Update Database functionality has now been improved to prevent data loss scenarios. In the previous versions, some of the scenarios which update schema were resulting in the loss of data. Now user can change the database schema design without worrying about data loss.

### Icon Dialog
Select **Icon Dialog** introduces support for animations and preview the options selected. It lets you change the properties like _size_,_rotate_, _flip_, _animation_, _pull_, _fixed width_ and _border_ for the selected icon.

### Chart Widgets
Chart Widgets** properties have been modified.
*   New property – **Legend Type** has been added to define the style of legend displayed. It can be Furious or Classic
*   **Highlight Point** to highlight the data points on a chart. Applies to Line, cumulative Line and Area types of charts.
*   **Line Thickness** to control the thickness of line. Its accepts values like ‘5px’, ‘0.85em’. Applies to Line, and Cumulative Line types of charts.

## Known Issues
---

1.  **Database Designer** will not allow any changes to the primary key column. Once the database is designed the primary key cannot be altered, added or deleted.
2.  **MySQL Database Design** cannot be modified to change the default values of any column.
3.  There are known issues concerning **cache within IE browsers.** In case IE browser users are facing any UI issues, clear the cache and run the app again.
4.  **Landing Page**, when enabled from the **Security** might not work on subsequent runs of the project, if the user closes the browser without logout.