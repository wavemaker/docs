---
title: "WaveMaker Studio BETA Release Notes"
date: "2017-02-10"
---

## 7.0 BETA-6 Release Date: 06 September 2014 Number: 7.0.0-BETA-6-341

Here is a summary of key features, known issues and bug fixes offered in **7.0 BETA-6 Release** as compared to [7.0 BETA-5 Release](#70Beta5) We hope you enjoy this release.

### 's New

#### Features

- Data model Designer.
- \-flight service/live variable requests can be cancelled using cancel method defined on variable.
- support for Projects, Prefabs, Themes and Templates.

### Bug Fixes

- the applied theme in the copied/exported project.
- Services : CRUD operations for database tables having underscore in column names is supported. All SQL data-types are also now supported.
- disappearing on export, if sql-type is set as text.
- filter not working when widget type is set to ‘select’ for non related fields.

### Issues

- widget currently works only when bound to a Static or Service Variable. Support for binding to Live variable is not yet supported.
- : In tables with composite key, if any of the key column has null value, the row data is returned as empty. Note: This is a known hibernate issue. Refer [://hibernate.atlassian.net/browse/HHH-177](https://hibernate.atlassian.net/browse/HHH-177) for details.

## 7.0 BETA-5 Release Date: 26 August 2014 Number: 7.0.0-BETA-5-327

Here is a summary of key features, known issues and bug fixes offered in **7.0 BETA-5 Release** as compared to [7.0 BETA-4 Release](#70Beta4) We hope you enjoy this release.

### 's New

#### Features

- : Calendar widget.
- improvement in the grid widget.
- form : For a related field, user can select which fields need to be displayed in the select field instead of primary key for insert update operations.
- Provatars (project avatars).
- for touch events(swipe, pinch).
- Project Template.
- selected Item property for Live list.
- to support schema filter.

### Bug Fixes

- variable: support for 'Checkboxset', 'Radioset' and 'Menu' widget.
- switching between design, pad view and mobile view to show the same page.

### Issues

- filter not working when widget type is set to 'select' for non related fields.

## 7.0 BETA-4 Release Date: 12 August 2014 Number: 7.0.0-BETA-4-313

Here is a summary of key features, known issues and bug fixes offered in **7.0 BETA-4 Release** as compared to [7.0 BETA-3 Release](#70Beta3) We hope you enjoy this release.

### 's New

#### Features

- : Option to search in 'add-variable' dialog.
- Services: Option to "revert to last published version" of the data-model.
- Services: Implicit use of "overwrite" property for the database to simplify export.

### Bug Fixes

- : Support for string type x-axis in Line, Cumulative and Area charts
- : Image upload option for picture widget.

### Issues

- of column on export if sql-type is set as text.
- of data into blob/clob columns is not supported through live-form.

## 7.0 BETA-3 Release Date: 22 July 2014 Number: 7.0.0-BETA-3-290

Here is a summary of key features, known issues and bug fixes offered in **7.0 BETA-3 Release** as compared to [7.0 BETA-2 Release](#70Beta2) We hope you enjoy this release.

### 's New

#### Features

- : Tree, Menu and Button Group
- : Support for ordering data.
- Services: Interface to execute DB Script file on the specified MySQL server
- Services: Db Shell Interface to interact with MySQL server in the cloud
- : Support for non-JSON response from web service and object type input param for SOAP services
- Services: Support to display data with column and data in separate fields

### Bug Fixes

- services: WSDL file import for SOAP
- Services: Failure of export operation when primary key column has default values

### Issues

- script currently works only with development cloud MySQL server

## 7.0 BETA-2 Release Date: 11 July 2014 Number: 7.0.0-BETA-2-271

Here is a summary of key features, known issues and bug fixes offered in **7.0 BETA-2 Release** as compared to [7.0 BETA-1 Release](#70Beta1) We hope you enjoy this release.

### Bug Fixes

- : Events selected for widgets retained after save
- : Option to modify column definitions for Grid bound to script variable
- : Data for prefabs with live variables loaded in design mode
- Variable : Support for parameters in named queries
- Services : Support for overwrite property on the database during export
- Services : Cardinality of many-to-one relations retained as is; after re-import of database

### Issues

- Services : CRUD operations for database tables having underscore in column names is not supported
-  Mobile View : Action icons are hidden in projects with prefabs

## 7.0 BETA-1 Release Date: 04 July 2014 Number: 7.0.0-BETA-1-263

Here is a summary of key features, known issues and bug fixes offered in **7.0 BETA-1 Release** as compared to [7.0 BETA Release](#70BETA) We hope you enjoy this release.

### 's New

#### Features

- : Support for InFlight behavior property for service and live variables

### Bug Fixes

- : Services used in prefab are loaded into the project
- Services: Support for multiple SQL data-types
- Services: Import of tables without primary key/with composite key
- Form: Display of appriopriate widgets in the form based on datatype of the column
- : Option to create navigation variable for navigation across views

### Issues

- Services: CRUD operations on tables without primary key/with composite key are not supported
- Services: Overwrite property on the database is not supported during export
- old projects may not open correctly.

## 7.0 Beta Release Date: 26 June 2014 Number: 7.0.0-BETA-241

Here is a summary of key features, known issues and bug fixes offered in **7.0 Beta Release** as compared to [7.0 Early Access Release](#70EA) We hope you enjoy this release.

### 's New

#### Features

- Spring from 3.1.0.RELEASE to 4.0.2.RELEASE
- Hibernate libraries from 3.2.4.sp1 to 4.3.5.Final
- for localization of applications
- authentication and URL path parameter support for REST Web services
- page content via partial pages (page fragments)
- of Live-Filter action buttons
- Widgets: Audio, Video, Donut chart, Slider
- of Prefabs and Themes from Studio
- for navigation to views through Navigation variables

#### Services

- for all relationship types (One-to-one, One-to-Many & Many-to-One)
- and Apply operations on the data model
- of Draft & Published Versions for data-model
- of data-model export to HSQL
- APIs for each entity for CRUD and search operations
- APIs for execution of queries (native SQL & HQL)

- access roles assignment for widgets
- of Page Level security

### Bug Fixes

- : Auto population of roles in roles tab
- : Role assignment for existing users in setup tab
- Services: Critical issues in Data-model design & services such as Import, Export and Re-import

### Issues

- widget: Enable controls property not working in IE
- with eShop template will not work in private  mode of Safari browser
- : Services used in prefab are not loaded in to the project
- Services: Not all SQL data-types are supported
- Services: Tables without primary key/with composite key are not supported

## 7.0 Early Access Release Date: 8 April 2014 Number: 7.0.0-BETA-

Here is a summary of key features offered in **7.0 Early Access Release** as compared to [Studio 6.7 RELEASE](http://dev.wavemaker.com/wiki/bin/WM6.7/RelNotes) For more information, refer to the [](http://dev.wavemaker.com/blog/2014/07/02/wavemaker-studio-7-open-beta-now-available/)

### 's New

#### Features

- UI Framework with Angular JS and Bootsrap CSS
- as a Service
- : Reusable API plugins for your applications
- visualization with charting widgets
- Designer to create your own DB model
- Live Widgets such as Live Filter and Live List
- Project Templates
- Editors for HTML markup, Javascript and CSS

#### Experience

- Layouts with mobile-first approach
