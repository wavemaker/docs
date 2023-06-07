---
title: "WaveMaker 10.0 Preview - Release date: 20 November 2018"
id: "v10-0-preview"
sidebar_label: "Release v10.Preview"
---
*WaveMaker has released a new version with new features.*

## Highlights
---
### i. Artifact Repository

Artifact Repository is a collection of artifacts or resources used across application development lifecycle in WaveMaker platform. It allows for easy exploration and discovery of Artifacts available to the developer network. These artifacts include Prefabs, Project Shells, Project Templates and Themes. These Artifacts can be developed and published either:

*   to a specific project, or
*   to the individual workspace for a non-enterprise version, or
*   to Enterprise Network for the enterprise version.

For more information, see [Artifact Repository](/learn/app-development/wavemaker-overview/artifacts-repository/).

### ii. Developer Roles

When multiple developers across the team are collaborating on large development projects, establishing a clear set of access control policies helps in effectively managing the deliverables. You can set fine-grained permissions for each developer at the project and platform level. 

For more information, see [Project User Management](/learn/app-development/wavemaker-overview/project-user-management/).


## Enhancements
---

### i. Number Widget
A new widget, _Number_, has been added which automatically detects the app locale and renders the number fields accordingly.   

For more information, see [#doc](/learn/app-development/widgets/form-widgets/number/).

### ii. Locale support
**Locale support** for application runtime for widgets like the _number_, _date/time_, _calendar_, and _currency_ has been enhanced to support standard internationalization locale formatting. 
For more information, see [Localization](/learn/app-development/wavemaker-overview/localization).
3.  **Open ID** **Connect** support has been added to App Security. [#doc](/learn/app-development/app-security/authentication/#openid)
4.  **Mobile**: Integrated _pull-to-refresh_ functionality on Page ([#doc](/learn/how-tos/working-pull-refresh/)) and _swipe actions_ on the List widget ([#doc](/learn/how-tos/setting-swipe-gestures-list-widget/)).


## Technology Stack
---
### UI Frameworks

| Description | JS Library | Version |
| --- | --- | --- |
| JS Binding | jquery | 3.3.1 |
|  | jquery-ui* <td className="versiontdbgcolor"> 1.11.4 -> 1.12.1 </td>|
| MVC Framework | angular <td className="versiontdbgcolor"> 1.6.9 -> 7.0.1 </td>|
|  | angular-ui-bootstrap <td className="versiontdbgcolor"> 2.5.0 -> 3.3.6 </td>|
| Styles | bootstrap | 3.3.7 |
| Charting | d3 | 3.5.17 |
|  | nvd3 <td className="versiontdbgcolor">1.8.4 -> 1.8.6 </td>|
| Built-in functions | lodash <td className="versiontdbgcolor">4.17.5 -> 4.17.11</td>|
| Device support, gestures | hammerjs | 2.0.8 |

Optimised jQuery-UI library excluding unwanted components like accordion, datepicker, dialog, progressbar, spinner, tabs, and all jQuery-UI Effects.

### Back-end Frameworks

| Description | Java Library | Version |
| --- | --- | --- |
|  | Spring Framework <td className="versiontdbgcolor"> 4.3.14 -> 4.3.19 </td>|
| Security framework | Spring Security <td className="versiontdbgcolor"> 4.2.4 -> 5.0.8 </td>|
| Java JSON utilities | Gson | 2.2.4 |
| DB Persistence library | Hibernate | 5.2.10 |
| Sample database | HSQL | 2.4.0 |
| JSON library | Jackson <td className="versiontdbgcolor"> 2.6.3 -> 2.9.7 </td>|
| Logging framework | SLF4j | 1.7.25 |
| Http client library | HttpComponents | client-4.5.5 core-4.3.2  mime-4.5.5 |
| REST API annotations | Swagger | 1.3.10 |
| Date Time Framework | Java 8 Date/Time API |  |
| Json Libraries | com.tdunning |  |
| Servlet Framework |  | 3.1 |

### Run Time Environment

| Description | Version |
| --- | --- |
| JDK | 1.8 |
| WebSphere | 8.5.5 |
| JBoss | 7.1.1 |
| Tomcat | 8.5* |
| Cordova (mobile apps) | 8.0.0 |

This is the default Tomcat runtime support. Apps can be deployed to any standard Java Web Server running on JDK 1.8 ([more...](/learn/app-development/deployment/deployment-web-server/))