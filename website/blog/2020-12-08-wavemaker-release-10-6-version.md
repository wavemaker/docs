---
title: "WaveMaker Releases 10.6 Version"
author: Swetha Kundaram
---


With WaveMaker 10.6.0 Release on 08 December, 2020, see what’s new, and what has changed, and a few bug fixes and features that were reported. To learn about our detailed list of features and fixes, see [WaveMaker Release Notes 10.6.0](/learn/wavemaker-release-notes/v10-6-0).

Here are some highlights of what's in this release.

<!-- truncate -->

## What's new

### Upgrade to Angular 9

The 9.0.0 release of Angular is here! With this update, be on the latest version of the technology stack, and access to the up-to-date Angular material and framework with improved performance and CLI.

With the Angular 9 upgrade, WaveMaker applications support AOT compilation by default, however, it continues to use View Engine for rendering instead of Ivy. We expect to support Ivy in the next major release WaveMaker-11.

:::note
With Angular 9 update, you can expect to see an increase in the application build time.
:::

### Mobile Updates

#### Command-Line for building Cordova zip

This makes user less dependent on WaveMaker Studio for downloading Cordova zip. So, you can export a project as Cordova Zip from WaveMaker Studio as well as generate Cordova zip from the exported application using maven commands.

Plus, we have introduced a new manual build process to generate Android and iOS applications locally. To learn more, see [Manual Mobile Build](https://www.wavemaker.com/learn/hybrid-mobile/mobile-build-manual).

### Horizontal Scaling

WaveMaker apps use the spring-session-core library for session management. With this, it can offload the storage of the session state into external session stores. For example, you can use REDIS or any regular database. By default, [In-memory](/learn/app-development/app-security/session-persistence#in-memory) map implementation is set which will work just fine for a single node application. Plus, you can use other implementations such as REDIS, JDBC. [Learn more](/learn/app-development/app-security/session-persistence).

### Page Cache and Retain State for Widgets

Restore page by using [Page Cache](/learn/app-development/ui-design/page-concepts/page-cache) and restore widget state or share URL of a specific state of the widget by using [Retain Widget State](/learn/blog/2020/11/09/Retain-UI-State-on-Wavemaker-Apps).

## What's changed

### Phonegap Support

As Phonegap has stopped supporting the platform, therefore we developed our very own [AppChef app](/learn/hybrid-mobile/mobile-build-appchef) to generate Android and iOS applications for testing as well as to publish apps to the app stores.

### External CI-CD for Web and Mobile

WaveMaker supports external CI/CD for both web and mobile apps from 10.6.0 onwards. It makes WaveMaker much more flexible to work with Studio or outside WaveMaker Studio.

### Up-to-date Libraries

Libraries are hosted in the public npm registry (Angular library), and Maven (Jars). Therefore, all the required libraries are available to use without needing to import ZIP files manually.

We upgraded the versions of Spring, Hibernate, Log4j to Log4j-2. To know our latest list of updated libraries, see [WaveMaker 10.6 Technology Stack](/learn/wavemaker-release-notes/v10-6-0#technology-stack).

### Docker Upgrade

Docker upgrades to the latest version i.e `19.03.13`. WaveMaker supports all versions which are greater than `>19.03`.

## See Also

Some of the critical bugs have been fixed in the release. See the list of [bug fixes of 10.6](/learn/wavemaker-release-notes/v10-6-0/bug-fixes).

- **[Release Notes 10.6](/learn/wavemaker-release-notes/v10-6-0/)**
- **[Release Notes 10.5](/learn/wavemaker-release-notes/v10-5-0/)**
- **[Release Notes 10.4](/learn/wavemaker-release-notes/v10-4-0/)**

As a modern development team, we are adapting to the latest technology trends. If there is anything you feel WaveMaker should have, do let us know [here](mailto:info@wavemaker.com).

