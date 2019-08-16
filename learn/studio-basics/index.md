---
title: "Studio Basics"
id: ""
---

# Steps

 Studio is a platform for rapid app development and deployment to Cloud. You will be finding a detailed explanation of the features in the documentation pages. This document will give you an overview of the app building process and help acclimatize with the WaveMaker terminology. Be sure to visit the various links provided here for an in-depth understanding.

WaveMaker application is a collection of pages linked together by a workflow. A basic WaveMaker app consists of three elements:

1. **Layer** is a presentation layer for the app user interaction. It involves designing pages with a uniform theme, setting layout, and laying out widgets for data collection and representation. You can also use or create page templates for page design and prefabs for custom widgets.
2. **Layer** is a data repository which hosts the data that will be presented to and manipulated by the app user. This data repository can take the form of Database or Web services. Queries and Procedures can further customize the data from Database. Java Services can be used to add rules and functionality to the data. Rest APIs are auto-generated for each of the above-mentioned services.
3. **or Integration Layer** acts as a connector between the UI and Backend layers. The auto-generated APIs from the backend services can be used to create Variables. These variables act as placeholders for the data from the underlying services and can be bound to Widgets for data rendering and manipulation.

# Layer

UI Layer in WaveMaker apps has the following components:

- : A fully finished page has a Layout and Content. Page Content is based on the placement of widgets or from a Template chosen by you. Page Layout is used to define the common areas across pages.
- : Theme includes colors, fonts, and branding elements (CSS & images) that are applied across all pages.
- : Templates are a re-usable arrangement of one or more widgets in the page content that together capture the purpose of the page. It is a structural composition of a page with widgets, which contains HTML markup and the CSS styles. The widgets within a Template do not have data binding with services, allowing the creation of Pages with these templates for different use cases. You can choose from the list of templates provided by default or create your own template bundle as a collection of templates.
- : HTML Markup defining placeholders for a header, footer, top navigation, left and right panels, and main area. You can choose from the pre-defined set of layout options.
- : Widgets are HTML/Bootstrap based UI Components. They enable users to interact with the App and get their data from backend Services through binding to Variables. Widgets can be customized in terms of appearance and behavior as per your use case using the attributes of properties, style, events, and security.
- : Prefab is a reusable, API-integrated components that can be used across apps. They encapsulate functionality, interaction & data and as such can be used to build custom widgets.

# Layer

# /Binding Layer

data integration for the widgets

the actual data rendered by the widgets. The data model is obtained from the API source and rendered in the form of a data structure used for binding, with attributes and related objects. Events help control the updates between widgets and actual service, vice versa.

**Types**

of Variables based upon the source and purpose.

**CRUD** for the basic insert, read and update operation on the Database tables

**API** for accessing the additional Database functionality and queries and procedures

**API** from Web, Java, Security for the service APIs exposed by the Web, Java and Security services.

**Variable** to define data based upon JSON structure.

**Variable** to access device features in case of mobile applications.

define the business logic, rules and data flows

assist in invoking a backend API, Database CRUD operation or navigation to another page when a UI event occurs. Events can be either user-initiated, notifications or a result of another task being performed.

variables and widgets

of the Variables to Widgets helps in capturing the data from the user or fetching data from the backend services.

# Topics

- : a process by which the access to app restricted to known/authentic users.
- : a process by which the access to various aspects of the app such as services, widgets, and functionality; is restricted to the specified app roles.
- **Provider**: User's data, including roles and role groups information, can come from any provider like DB, LDAP, AD or any custom provider.
- : Authentic users of the app identified via a Username and Password.
- **Roles** identify the level of authorization allowed to a given user. These roles are assigned to Users mentioned in the previous step.
- : Each of the web resource and service used in an app is assigned various permission levels:
    
    - \- anyone can access this item i.e. no authentication required
    - \- these items are accessible to authenticated users who will be identified via the roles assigned to them
    - \- widgets at this access level are visible to only users who are not logged in. _: this setting can be used only for widget access._
    
    : The permission levels follow a hierarchical structure with child element inheriting parent permissions if none are specified
- **Configuration** defines the login behavior once authentication is enabled. There are two behaviors that can be defined - login page and landing page:
    - the _for login_ - dialog or page. In the case of a page for login, you can use the default login page provided by Studio or design your own login page.
    - _Page_ defines the page to be displayed once the user logs in. The page to be displayed can be defined based upon the role of the logged in user.

## Collaboration

Multiple users can be added to a project by the Owner of the project. These additional members can be attributed the roles of a Contributor or Owner. A contributor is restricted from deploying and deleting apps.

WaveMaker apps are hosted on Git Stash version control system by default. You can choose to push (pull option is not available for external repos) your code to an external VCS like GitHub, Bitbucket or Git Repo.

Using the single-click deployment option to WaveMaker Demo Cloud, you can deploy and make your apps public.

From the Apps Portal, you can build a Release Pipeline with Demo and Live phases, configuring each phase to have its own profile, infrastructure and versioning.

1\. WaveMaker Overview

- 1.1 Platform Overview
    - [Modern Web Apps](/learn/app-development/wavemaker-overview/platform-overview/#modern-web-apps)
    - [App Architecture](/learn/app-development/wavemaker-overview/platform-overview/#app-architecture)
    - [App Building Process](/learn/app-development/wavemaker-overview/platform-overview/#app-building-process)
    - [Technology Stack](/learn/app-development/wavemaker-overview/platform-overview/#technology-stack)
    - [Material Design](/learn/app-development/wavemaker-overview/platform-overview/#material-design)
    - [Hybrid Mobile Apps](/learn/app-development/wavemaker-overview/platform-overview/#mobile-apps)
- [1.2 Product walk-through](#)
    - [Getting Started](#getting-started)
    - [Project Dashboard ](#project-dashboard)
    - [ Project Workspace](#workspace)
    - [Canvas](#canvas)
    - [Project Settings](#settings)
    - [Configuration Profiles](#profiles)
- [1.3 Supported Technologies](/learn/app-development/wavemaker-overview/supported-technologies/)
- [1.4  Pre-requisites](/learn/app-development/wavemaker-overview/pre-requisites/)
