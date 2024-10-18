---
title: "WaveMaker Studio BETA Release Notes"
id: "wavemaker-studio-beta-release-notes"
---

## Studio 7.0 BETA-6 Release Released Date: 06 September 2014Build Number: 7.0.0-BETA-6-341

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0 BETA-6 Release** as compared to [Studio 7.0 BETA-5 Release](#70Beta5). We hope you enjoy this release.

### What's New

#### Product Features

- Improved Data model Designer.
- In-flight service/live variable requests can be cancelled using cancel method defined on variable.
- Version support for Projects, Prefabs, Themes and Templates.

### Key Bug Fixes

- Persisting the applied theme in the copied/exported project.
- Database Services : CRUD operations for database tables having underscore in column names is supported. All SQL data-types are also now supported.
- Column disappearing on export, if sql-type is set as text.
- Live filter not working when widget type is set to ‘select’ for non related fields.

### Known Issues

- Menu widget currently works only when bound to a Static or Service Variable. Support for binding to Live variable is not yet supported.
- Database : In tables with composite key, if any of the key column has null value, the row data is returned as empty. Note: This is a known hibernate issue. Refer [https://hibernate.atlassian.net/browse/HHH-177](https://hibernate.atlassian.net/browse/HHH-177) for details.

## Studio 7.0 BETA-5 Release Released Date: 26 August 2014Build Number: 7.0.0-BETA-5-327

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0 BETA-5 Release** as compared to [Studio 7.0 BETA-4 Release](#70Beta4). We hope you enjoy this release.

### What's New

#### Product Features

- Widgets: Calendar widget.
- Performance improvement in the grid widget.
- Live form : For a related field, user can select which fields need to be displayed in the select field instead of primary key for insert update operations.
- Provided Provatars (project avatars).
- Support for touch events(swipe, pinch).
- Delete Project Template.
- Added selected Item property for Live list.
- Database to support schema filter.

### Key Bug Fixes

- Service variable: support for 'Checkboxset', 'Radioset' and 'Menu' widget.
- Viewport switching between design, pad view and mobile view to show the same page.

### Known Issues

- Live filter not working when widget type is set to 'select' for non related fields.

## Studio 7.0 BETA-4 Release Released Date: 12 August 2014Build Number: 7.0.0-BETA-4-313

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0 BETA-4 Release** as compared to [Studio 7.0 BETA-3 Release](#70Beta3). We hope you enjoy this release.

### What's New

#### Product Features

- Variables: Option to search in 'add-variable' dialog.
- Database Services: Option to "revert to last published version" of the data-model.
- Database Services: Implicit use of "overwrite" property for the database to simplify export.

### Key Bug Fixes

- Charts: Support for string type x-axis in Line, Cumulative and Area charts
- Widget: Image upload option for picture widget.

### Known Issues

- Vanishing of column on export if sql-type is set as text.
- Insertion of data into blob/clob columns is not supported through live-form.

## Studio 7.0 BETA-3 Release Released Date: 22 July 2014Build Number: 7.0.0-BETA-3-290

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0 BETA-3 Release** as compared to [Studio 7.0 BETA-2 Release](#70Beta2). We hope you enjoy this release.

### What's New

#### Product Features

- Widgets: Tree, Menu and Button Group
- Charts: Support for ordering data.
- Database Services: Interface to execute DB Script file on the specified MySQL server
- Database Services: Db Shell Interface to interact with MySQL server in the cloud
- Variables: Support for non-JSON response from web service and object type input param for SOAP services
- Web Services: Support to display data with column and data in separate fields

### Key Bug Fixes

- Web services: WSDL file import for SOAP
- Database Services: Failure of export operation when primary key column has default values

### Known Issues

- Import script currently works only with development cloud MySQL server

## Studio 7.0 BETA-2 Release Released Date: 11 July 2014Build Number: 7.0.0-BETA-2-271

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0 BETA-2 Release** as compared to [Studio 7.0 BETA-1 Release](#70Beta1). We hope you enjoy this release.

### Key Bug Fixes

- Widgets : Events selected for widgets retained after save
- Widgets : Option to modify column definitions for Grid bound to script variable
- Prefabs : Data for prefabs with live variables loaded in design mode
- Service Variable : Support for parameters in named queries
- Database Services : Support for overwrite property on the database during export
- Database Services : Cardinality of many-to-one relations retained as is; after re-import of database

### Known Issues

- Database Services : CRUD operations for database tables having underscore in column names is not supported
-  Mobile View : Action icons are hidden in projects with prefabs

## Studio 7.0 BETA-1 Release Released Date: 04 July 2014Build Number: 7.0.0-BETA-1-263

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0 BETA-1 Release** as compared to [Studio 7.0 BETA Release](#70BETA). We hope you enjoy this release.

### What's New

#### Product Features

- Variables: Support for InFlight behavior property for service and live variables

### Key Bug Fixes

- Prefab: Services used in prefab are loaded into the project
- Database Services: Support for multiple SQL data-types
- Database Services: Import of tables without primary key/with composite key
- Live Form: Display of appriopriate widgets in the form based on datatype of the column
- Prefab: Option to create navigation variable for navigation across views

### Known Issues

- Database Services: CRUD operations on tables without primary key/with composite key are not supported
- Database Services: Overwrite property on the database is not supported during export
- Few old projects may not open correctly.

## Studio 7.0 Beta Release Released Date: 26 June 2014Build Number: 7.0.0-BETA-241

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0 Beta Release** as compared to [Studio 7.0 Early Access Release](#70EA). We hope you enjoy this release.

### What's New

#### Product Features

- Upgraded Spring from 3.1.0.RELEASE to 4.0.2.RELEASE
- Upgraded Hibernate libraries from 3.2.4.sp1 to 4.3.5.Final
- Support for localization of applications
- Basic authentication and URL path parameter support for REST Web services
- Reusable page content via partial pages (page fragments)
- Customization of Live-Filter action buttons
- New Widgets: Audio, Video, Donut chart, Slider
- Management of Prefabs and Themes from Studio
- Support for navigation to views through Navigation variables

#### Database Services

- Support for all relationship types (One-to-one, One-to-Many & Many-to-One)
- Save and Apply operations on the data model
- Implementation of Draft & Published Versions for data-model
- Implementation of data-model export to HSQL
- REST APIs for each entity for CRUD and search operations
- REST APIs for execution of queries (native SQL & HQL)

#### Security

- Multiple access roles assignment for widgets
- Implementation of Page Level security

### Key Bug Fixes

- Security: Auto population of roles in roles tab
- Security: Role assignment for existing users in setup tab
- Database Services: Critical issues in Data-model design & services such as Import, Export and Re-import

### Known Issues

- Video widget: Enable controls property not working in IE
- Projects with eShop template will not work in private  mode of Safari browser
- Prefab: Services used in prefab are not loaded in to the project
- Database Services: Not all SQL data-types are supported
- Database Services: Tables without primary key/with composite key are not supported

## Studio 7.0 Early Access Release Released Date: 8 April 2014Build Number: 7.0.0-BETA-

Here is a summary of key features offered in **Studio 7.0 Early Access Release** as compared to [WaveMaker Studio 6.7 RELEASE](http://dev.wavemaker.com/wiki/bin/WM6.7/RelNotes). For more information, refer to the [blog](http://dev.wavemaker.com/blog/2014/07/02/wavemaker-studio-7-open-beta-now-available/).

### What's New

#### Product Features

- New UI Framework with Angular JS and Bootsrap CSS
- Studio as a Service
- Prefabs: Reusable API plugins for your applications
- Data visualization with charting widgets
- Database Designer to create your own DB model
- New Live Widgets such as Live Filter and Live List
- Custom Project Templates
- UI Editors for HTML markup, Javascript and CSS

#### User Experience

- Smart Layouts with mobile-first approach
