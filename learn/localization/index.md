---
title: "Localization"
id: "localization"
---

is the adaptation of a product or service to meet the needs of a particular language, culture or desired populations’ look and feel. In WaveMaker, localization can be achieved at two levels:

1. **Localization** which is the process of rendering your app in multiple languages. This is supported in the following ways:
    
    - Project Settings, by setting the **language** and date time formats, you can ensure that the app user gets to work in the set language and locale ( [here for more](/learn/how-tos/setting-language-date-format/));
    - the **Locale** widget end user can choose the language to render the application in ( [here for more](/learn/app-development/widgets/form-widgets/select-locale-usage/));
    
    [here for more on App Localization](/learn/how-tos/localization-wavemaker-apps/)
2. **Localization** can be used to enable the app developers to develop in their native language. feature is available only in the Enterprise version This process is discussed in detail in this document ( [here for more](#platform_locale));

## Localization

##### Available only for Enterprise Version post 10.0 release

### Language Preference

- can set your personal preference, from Studio, by opening the Account Profile [![](../assets/locale_profile.png)](../assets/locale_profile.png)
- Profile and choose the preferred language [![](../assets/locale_profile_edit.png)](../assets/locale_profile_edit.png)
- Default Language for all users will be set from Launchpad by the Admin. [![](../assets/locale_default.png)](../assets/locale_default.png)

### Language Bundles

: This is for the Advanced Developers only. To enable Locale support for Studio, language bundles need to be added to the following locations. By default, English and German language bundles are already bundled with the platform.

- **Launchpad & EDN**: To add a new locale support
    1. file. Pick any file from any one location given below.
    2. to <localeId>.properties The represents the language to be supported, for example, for English and for German.
    3. the appropriate changes to the content.
    4. the file at the following locations:
        
        **name with path**
        
        \-framework
        
        - \-core/src/main/resources/locale/fwk\_exception\_messages\_.properties
        
        \-service
        
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_exception\_messages\_.properties
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_messages\_.properties
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_validation\_error\_messages\_.properties
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_validation\_messages\_.properties
        
        \-service
        
        - \-edn/wavemaker-edn-server/src/main/resources/locale/edn\_activity\_messages\_.properties
        - \-edn/wavemaker-edn-server/src/main/resources/locale/edn\_exception\_messages\_.properties
        - \-edn/wavemaker-edn-server/src/main/resources/locale/edn\_notification\_messages\_.properties
        
        \-cloud-commons
        
        - \-cloud-file-store/src/main/resources/locale/wm\_fs\_exception\_messages\_.properties
        - \-cloud-ssl/src/main/resources/locale/wm\_ssl\_exception\_messages\_.properties
        
- **Studio Frontend: ** language bundle is used to change the Studio user interface. To add a new locale support
    1. file. Pick any file from any one location given below.
    2. to <localeId>.json The represents the language to be supported, for example, for English and for German.
    3. the appropriate changes to the content.
    4. the file at the following locations:
        
        **name with path**
        
        \-studio
        
        - \-studio/wavemaker-studio-editor/src/main/webapp/editor/scripts/modules/i18n/messages
        
        \-service
        
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_exception\_messages\_.properties
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_messages\_.properties
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_validation\_error\_messages\_.properties
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_validation\_messages\_.properties
        
        \-service
        
        - \-edn/wavemaker-edn-server/src/main/resources/locale/edn\_activity\_messages\_.properties
        - \-edn/wavemaker-edn-server/src/main/resources/locale/edn\_exception\_messages\_.properties
        - \-edn/wavemaker-edn-server/src/main/resources/locale/edn\_notification\_messages\_.properties
        
        \-cloud-commons
        
        - \-cloud-file-store/src/main/resources/locale/wm\_fs\_exception\_messages\_.properties
        - \-cloud-ssl/src/main/resources/locale/wm\_ssl\_exception\_messages\_.properties
        
- **Studio Backend: ** makes use of module APIs to work with backend services. These language bundles contain mostly the error or success messages from the service. To add a new locale support:
    1. file. Pick any file from any one location given below.
    2. to <localeId>.json The represents the language to be supported, for example,  for English and for German.
    3. the appropriate changes to the content.
    4. the file at the following locations:
        
        **name with path**
        
        \-framework
        
        - \-core/src/main/resources/locale/fwk\_exception\_messages\_.properties
        
        \-service
        
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_exception\_messages\_.properties
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_messages\_.properties
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_validation\_error\_messages\_.properties
        - \-login/wavemaker-login-portal/src/main/resources/locale/login\_validation\_messages\_.properties
        
        \-service
        
        - \-edn/wavemaker-edn-server/src/main/resources/locale/edn\_activity\_messages\_.properties
        - \-edn/wavemaker-edn-server/src/main/resources/locale/edn\_exception\_messages\_.properties
        - \-edn/wavemaker-edn-server/src/main/resources/locale/edn\_notification\_messages\_.properties
        
        \-cloud-commons
        
        - \-cloud-file-store/src/main/resources/locale/wm\_fs\_exception\_messages\_.properties
        - \-cloud-ssl/src/main/resources/locale/wm\_ssl\_exception\_messages\_.properties
        

### Build Scripts

Once the language bundles are added, the flyway script needs to be updated and build process initiated for the languages to take effect.

- locale has to be inserted to the PostgreSQL Database, by adding the insert statement to the flyway script file. Following are the instructions:
    - to the directory: wavemaker-login-service/wavemaker-login/wavemaker-login-portal/src/main/resources/db\_scripts/postgresql/
    - a flyway script file incrementing the version number. For example, if you have the recent version of flyway script as wmlogin\_v74\_\_RBAC\_model\_permissions.sql, create a new file with the following name: wmlogin\_v75\_\_new\_locale\_.sql ( double underscore after the version number v75)
    - the following statement in the above newly created file, after replacing the placeholders for localeId, DisplayName, and Language. INSERT INTO SUPPORTED\_LOCALE (LOCALE\_ID, DISPLAY\_NAME, LANGUAGE) values ('<localeId>','<DisplayName>','<Language>'); For example to insert German locale: INSERT INTO SUPPORTED\_LOCALE (LOCALE\_ID, DISPLAY\_NAME, LANGUAGE) values ('de', 'German', 'German');
- the platform build.
- \-build, when developers log into the platform they will be able to see the language in their profiles for selection.

< Artifact Repository

Management >

1\. WaveMaker Overview

- 1.1 Platform Overview
    - [Modern Web Apps](/learn/app-development/wavemaker-overview/platform-overview/#modern-web-apps)
    - [App Architecture](/learn/app-development/wavemaker-overview/platform-overview/#app-architecture)
    - [App Building Process](/learn/app-development/wavemaker-overview/platform-overview/#app-building-process)
    - [Technology Stack](/learn/app-development/wavemaker-overview/platform-overview/#technology-stack)
    - [Material Design](/learn/app-development/wavemaker-overview/platform-overview/#material-design)
    - [Hybrid Mobile Apps](/learn/app-development/wavemaker-overview/platform-overview/#mobile-apps)
- 1.2 Product walk-through
    - [Getting Started](/learn/app-development/wavemaker-overview/product-walkthrough/#getting-started)
    - [Project Dashboard ](/learn/app-development/wavemaker-overview/product-walkthrough/#project-dashboard)
    - [ Project Workspace](/learn/app-development/wavemaker-overview/product-walkthrough/#workspace)
    - [Canvas](/learn/app-development/wavemaker-overview/product-walkthrough/#canvas)
    - [Project Settings](/learn/app-development/wavemaker-overview/product-walkthrough/#settings)
    - [Configuration Profiles](/learn/app-development/wavemaker-overview/product-walkthrough/#profiles)
- [1.3 Supported Technologies](/learn/app-development/wavemaker-overview/supported-technologies/)
- [1.4  Pre-requisites](/learn/app-development/wavemaker-overview/pre-requisites/)
- 1.5 Artifacts Repository
    - [Overview](/learn/app-development/wavemaker-overview/artifacts-repository/#)
    - [Publishing Mechanism](/learn/app-development/wavemaker-overview/artifacts-repository/#publishing)
    - [Flow (Enterpise version)](/learn/app-development/wavemaker-overview/artifacts-repository/#enterprise)
- [1.6 WaveMaker Localization](#)
    - [Platform Localization](#platform_locale)
        - [Setting Launguage Preference](#setting)
        - [Adding Language Bundles](#adding)
        - [Updating Build](#build)
- 1.7 User Management
    - [Overview](/learn/app-development/wavemaker-overview/project-user-management/#roles)
    - [Member Roles](/learn/app-development/wavemaker-overview/project-user-management/#roles)
    - [Add Members](/learn/app-development/wavemaker-overview/project-user-management/#add)
    - [Permissions](/learn/app-development/wavemaker-overview/project-user-management/#permissions)
