---
title: "Authentication"
id: ""
---


Property"
id: ""
---

The conditional style settings allow you to bind expressions to the style property. The conditional property applies to the widgets specified below, and it is similar to the Conditional Class property.

**:**

{‘CSSpropertyName’:  ‘valueExpression’}

**:**

{‘color’: ‘red’}
{‘color’: Widgets.colorPicker1.datavalue}
{‘background’: Page.Variables.MyVariable.dataSet.status === ‘pending’ ? ‘yellow’: ‘green’}
{‘color’: ‘red’, ‘font-size’: ‘30px’, ‘background’: Page.Variables.MyVariable.dataSet.status === ‘pending’? ‘blue’: ‘green’}

The property adds to the widget that has conditional class property.
 earlier Datagrid widget. Data Table can be editable or read-only with editable options being inline or dialog-based. Data Table provides a tabular view for database Entities or API response data.

[#docs](/learn/data-table/) Enhancements **with databases**:

- Import has been renamed to **to Database, ** clearly indicate that the database schema is imported into WaveMaker applications by directly connecting to the database. [#docs](/learn/db-services/)
- **Database** dialog now includes option to import of a script file.
- columns can be configured to be User defined, Server defined and DB defined types
    - defined properties are passed on from the frontend layer to the backend services through API.
    - defined properties take the values configured by the backend service and are not passed on through API. e.g.: Auditing details for maintaining create/update time for every record.
    - defined properties take the default values provided during creation of DB schema
- New **generator** - “UNIQUE ID” for string types for MS SQL Server only. An identity generator defines the value of the column in database table while inserting new records into it.

Googlemaps PrefabIntroducing new map type -

The Googlemaps Prefab can now be used to depict three types of maps:

1. \- provide visual markets for given data set of locations across the globe
2. \- provides a heat map based on the locations provided, usually adding a colored layer with gradient indicating intensity. e.g.: heatmap of areas with most number of restaurants or most crimes reported in the last year etc.
3. \- displays route between given origin and destination points, adds traffic layer and wayback points if required.

Usability Enhancements

1. **changes:** are the changes related to widgets and property naming conventions
    - or _Grid_ renamed to **Table **
    - widget has been renamed to
    - based templates offered by the LiveList have been moved out to the new widget
    - widget properties have been moved to _Settings_
    - Order, Hint, Help Text, Shortcut Key properties are moved to the Accessibility group in Properties Panel
    - Type and Value properties for applicable widgets now show up in Basic Properties group
2. with multiple dialogs is now made easier by providing tab based switching to different dialogs in design mode, within canvas area.
3. Widgets are removed from the widgets panel from this release, they offered same functionality as Data Table or List widgets with pre-defined data-set binding to a specific Entity. These have been removed for the reasons of redundancy.

Known Issues

1. **Prefab**: The new projects deployed to external server will need the API Key in order to use Maps. The old projects will continue to work until there are more updates from google. This is due to the policy change updates from Google regarding the Maps API from June 22. Please [here](http://googlegeodevelopers.blogspot.in/2016/06/building-for-scale-updates-to-google.html) for more information on the Google Policy change. This issue will be addressed in future releases. For now the following workaround will enable the Googlemaps:
    1. and open the config.json file, you will find it at /app/prefabs/googlemaps/config.json
    2. will find the following code: "scripts": \[ "https://maps.googleapis.com/maps/api/js?sensor=false&libraries=places,visualization,drawing,geometry" \],
    3. _\=YOUR\_API\_KEY&_ as shown below: YOUR\_API\_KEY is the key you obtain once you register your app at Google "scripts": \[ "https://maps.googleapis.com/maps/api/js?&ampkey=YOUR\_API\_KEY&amp;sensor=false&libraries=places,visualization,drawing,geometry" \],

Technology Stack for WaveMaker 8.2.3

### Frameworks

Library

Binding

2.2.3

\-ui\*

1.11.4

Framework

1.5.5

\-ui-bootstrap

1.3.2

\-editor

1.2.2

3.3.6

3

3.5.17

3

1.8.3

support, prefabs

0.7.5

\-in functions

4.12.0

support, gestures

2.0.8

\*Optimised jQuery-UI library excluding unwanted components like accordion, datepicker, dialog, progressbar, spinner, tabs, and all jQuery-UI Effects.

### Time Environment

7.0

6.0

### \-end Frameworks

Library

Framework

4.2.o

framework

Security

3.2.3

JSON utilities

2.2.4

Persistence library

4.3.11

database

2.3.3

library

2.6.3

framework

4j

1.7.12

client library

\-4.3.3, core-4.3.2, mime-4.2.5

API annotations

1.3.10

framework

4j

1.2.17
ate all the projects, refer to the previous point. To migrate a specific project, export the project as zip from 7.5 and import it to 7.6. Refer documentation for steps in [and Export](/learn/docs/docs/import-and-export-of-projects/ "Import and Export of Projects") of projects.
4. I need to register again for 7.6.0 activation?
    - , a one time activation is required even if you have registered for 7.5. If you already have registered for Studio 7.5.0, you can use the same credentials, else you need to register.
5. do I uninstall 7.5.0?
    - option is given in the desktop installation. But be aware your projects will be deleted on uninstall of Studio 7.5.0, if you have selected the Force delete option.
6. am I getting "HTTP 404 Error"?
    - to caching problems, some current 7.5 users might get a _404 Error_ In such cases clearing the cache would work or change the url _" /wavemaker/app/index.html"_ to _" /wavemaker/studio/index.html#projects/"_
7. can I find the release notes?
    - Online release notes are same as that for Desktop version and can be found at http://dev.wavemaker.com/learn/docs/Studio/release-notes/. **: Desktop release 7.7 includes the enhancements for both 7.7.0 and 7.7.1 of WaveMaker Online release.**
8. are my databases from 7.5/7.6 not working in 7.7?
    - your existing applications use database with date/time/timestamp related data fields, these applications need the database to be re-imported to avail of the new features.
9. import of SQL Server/Oracle databases not working?
    - SQL Server and Oracle database import, the respective driver jar files need to be imported to ..studioWEB-INFlib and into the project using that db.
