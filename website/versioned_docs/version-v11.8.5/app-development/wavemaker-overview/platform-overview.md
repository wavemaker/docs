---
title: "WaveMaker Platform Architecture"
id: "platform-overview"
sidebar_label: "Platform"
---
Learn how WaveMaker modern apps work.

---
Application architectures have been constantly evolving, embracing changes in the technology trends like AJAX, cloud, mobile etc. Modern Web application development demands an understanding of these trends and adopting the architectural aspects into development practices.

For Enterprise developers, the challenge is mounting to make a shift from legacy application systems, where they interact with desktop-based monolithic software apps to modern web and mobile apps. The skills required for understanding the fast-paced technology changes are very high and making the right technology choices to be able to build apps for future is quite a daunting task.

WaveMaker RAD platform combines the ease of development, with the right architecture and technology choices to be able to build apps for the future. Here give you an overview of WaveMaker Platform in terms of the architecture, technology and as a RAD tool.

[![app components](/learn/assets/Modern_Web_Apps.png)](/learn/assets/Modern_Web_Apps.png)

A typical application has 3 parts:

1. Client-side app component that works on the device you use, **User Interface**
2. Central/remote Server component that provides **backend services**
3. Both these components separated by well-defined **REST API** contract

## What is a WaveMaker App

WaveMaker App can either be a web responsive application or a hybrid mobile application built using the low-code or rapid app development approach. WaveMaker App is built as a single HTML Web App, with clear separation of User Interface (UI) layer and the backend services layer using REST APIs. The UI layer is built using the visual RAD approach, with drag-n-drop of widgets onto the Canvas. Later, these widgets are integrated with the backend services, to fetch and update data.

WaveMaker App is composed of 3 layers:

1. **UI Layer** is built with Pages, which are composed with widgets using visual drag-n-drop approach.
2. **Binding Layer** integrates backend services with the front-end UI layer through REST APIs.
3. **Services Layer** represents backend services auto-generated from databases, external web services or custom Java services etc.

[![WM App](/learn/assets/3layered_arch.png)](/learn/assets/3layered_arch.png)

## App Architecture

#### Single Page Application (SPA)

Single-Page Applications (SPAs) are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app. WaveMaker embraces the Single Page app model as against the traditional model, where the markup and other UI artifacts are generated on the server-side for each request and sent to client.

Benefits of Single Page Applications:

1. No page re-loads and dynamically generated HTML
2. Structure of the page i.e. header, footer, left nav is retained across pages (a.k.a Views), causing no jitter
3. Clear separation of front end and backend contract through REST APIs/JSON
4. Support rich interactions and mobile responsive design
5. Allow data to be passed across pages, defined by the Scope
6. Scalable to support large data sets and growing user-base

[![SPA vs traditional](/learn/assets/spa_arch.png)](/learn/assets/spa_arch.png)

## App Building Process

WaveMaker enables rapid application development with clear separation of front-end and back-end development, and enables easy integration with well-defined REST APIs. This model brings separation of concerns for various layers, which form part of the app architecture.

App building process combines the ability to develop front-end by auto-generating widget code and binding to the data services. From the data model obtained from the database, back-end services with their REST API contracts are auto-generated for integration. Both the front-end and back-end layers can be integrated with the help of binding and variables, which enable data integration with various services such as DB, Web Services or any custom Java Service.

[![wmapp_process](/learn/assets/WMApp_process.png)](/learn/assets/WMApp_process.png)

## Technology Stack

WaveMaker Apps are built using open-standards based technology stack, without any lock-in to vendor specific frameworks. Apps built can be freely distributed without any licensing concerns and deployed on any platform of your choice.

[![tech stack](/learn/assets/OS_Technology_Stack.png)](/learn/assets/OS_Technology_Stack.png)

1. _Front-end_: Angular 7.x version for user interface, data binding and events. Bootstrap provides responsive layouts for various form factors
2. _Object Relational Mapping (ORM)_: Hibernate and JPA provide standards based ORM layer and Entity model for database interaction
3. _Back-end Services_: Spring framework provides the back-end service layer in Java with support for dependency injection, REST controllers, security etc.
4. _Hybrid Mobile_: Cordova framework is used for enabling access to mobile device features and native installer creation using the appropriate SDKs.

## Material Design

WaveMaker widgets and themes embrace Android Material Design specification for visual design and building interaction across multiple devices. Android Material Design provides design guidelines for user interaction across mobile apps and modern web apps.

[![materialdesign_principles_metaphor](/learn/assets/materialdesign_principles_metaphor.png)](/learn/assets/materialdesign_principles_metaphor.png)Material is a metaphor coined by Android/Google Developers to standardize good design principles used for modern web and mobile apps. The foundational elements such as typography, space, color, grids, use of images guide the visual aesthetics of modern apps. A lot of emphasis has been given to these elements in the Material design principles, which makes it an apt choice for WaveMaker Apps.

In WaveMaker widget library, widgets such as Grids, Cards, Lists, Forms etc. make use of the visual design principles from Material. These design guidelines are optimized for use in enterprise applications and also validated from a performance standpoint, to make sure the best experience has been delivered for app users.

## Hybrid Mobile Apps

In the age of digitization with smartphones and tablets, mobile apps are the need of the day for enterprises. Mobile apps have a farther reach and these apps would get a wider exposure. There are [three different ways of building mobile apps](http://www.wavemaker.com/item/native-responsive-or-hybrid/):

- **Native Apps** which can be developed in a specific programming language depending upon the targeted mobile operating systems. Native mobile apps provide fast performance and a high degree of reliability. They also have access to various device features, such as its camera and address book. However, this type of app is expensive to develop because it is tied to one type of operating system, forcing the app creator to make multiple versions that work on other platforms.
- **Responsive Web Apps** which can be built just like any other web app, with the capability to adapt their UI to the size of current browser window. **Web apps built using WaveMaker Studio are responsive by default**. See here for how to build Web Responsive Apps [link](/learn/documentation-reference/). Responsive web apps, however, do not have the ability to leverage device capabilities such as the use of a camera, accessing contacts, storing a file on the device etc. and accessing the app when offline or not connected.
- **Hybrid Mobile Apps** attempt to strike a compromise between native and mobile web. They use HTML5 + CSS3 + JavaScript along with a wrapper/development framework like Sencha, PhoneGap or Titanium to give the app access to native device capabilities. **WaveMaker Studio offers this feature, hybrid mobile apps, via the [Apache Cordova Platform](https://cordova.apache.org/)**.

[![app type](/learn/assets/project-type.png)](/learn/assets/project-type.png)

