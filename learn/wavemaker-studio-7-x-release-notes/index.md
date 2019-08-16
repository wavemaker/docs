---
title: "WaveMaker Studio 7.x Release Notes"
id: ""
---

## 7.8.0 Release Date: 3rd Sept 2015

Here is a summary of key features, known issues and bug fixes offered in **7.8 Release** as compared to [7.7.1 Release](#771) **'s New**

**Relation** support.

is added to generate _relations_ for database columns. Hovering over the column will reveal an icon which can be used in the creation of virtual relations. A virtual relation can be identified by a dotted line between the tables as opposed to the solid line for the actual relations. Also, a checkbox in the relation properties panel. This feature can be used to impose database constraints without having to change the DB schema.

**Configuration Profiles**

Profiles, in line with _Configuration Profile_, can be created by the user. By default, two profiles - and , are generated. Currently, user can configure the DB service for each of these profiles. Run option executes the app against the development profile, while deploy executes it against the production profile. Profile can be selected while generating the war file for export.

widget.

set of star icons are provided, which can be used for rating purpose.

property **Position** has been added to the **widget**

property _Position_ for Menu defines the format display of the menu items at run time. The options are - _, left_; _,right_; _, left_; _, right_;

properties have been added to the **widget**

properties _Label_, _Icon_, _Link_, _Children_ for Menu define the content of the menu items at run time.

**Target** property has been added to the **widget**

property _Target_ defines the behavior of the Item Link. Options are "\_blank", "\_parent", "\_self", or "\_top".

**Upload** enhancements.

the _Upload_ creates a Java Service by default. This Java Service, called **Service** includes operations like , , and One can select the service and operation for the widget to consume, by default the File Service and uploadFile is selected. Based upon the operation selected, default variables will be generated.

**\-Event** support has been introduced.

property for widgets has been enhanced to support multiple event handling. **:Currently this feature is available only for widgets, not for variables.**

**Dialog** enhancements.

and methods have been deprecated. These have been replaced by open and close methods. The usage would be DialogService.open(dialogName, parentScope, params) and _(dialogName)_

Form

Mode

using the _Mode_ property, Live Form can be set to or This will define the Form behaviour at runtime.

**buttons**

new action buttons have been added to Live Form. These are used in the _Mode_ of the Live Form in addition to the existing and buttons. Three actions in the _Mode_ are , and

Control

is easier to track changes to your code with the enhanced VCS dialog for **Changes** option.

_Changes_ dialog has been replaced with the new _Changes_ dialog. Using this dialog, one can see the code changes for a selected file. The user can then choose to revert the changes accordingly.

## 7.7.1 Release Date: 28th July 2015

Here is a summary of key features, known issues and bug fixes offered in **7.7.1 Release** as compared to [7.7 Release](#770) We hope you enjoy this release. **'s New**

widget.

widget can be used for selecting timestamp data.

**Login Pages**

can now design and use their own custom login pages. This custom page can be used instead of the default login page provided by Studio.

role-based **Pages**

can now designate the landing page for the application depending upon the role of the used logged in.

Canvas

usability using

the **key**, focus can be shifted from the widget to its parent component. For example, in a _Layout_, if the focus is on any , hitting the will shift the focus to the corresponding and hitting the again will shift the focus to the corresponding This will continue till the gets focus.

**version** upgrades.

JS version has been upgraded from 1.4.1 to 1.4.2.

Demand Loading for pages with Accordion and Tab layouts.

application pages with Accordion or Tab layout, the content will be loaded on demand. That is, for Accordion the content will be loaded when the panel is expanded for the first time and for Tab when first selected.

support for Database.

it is possible to have columns in a database of the type Earlier there was support for datatype alone, now one can choose a datatype also while defining datasets.

**:** If your existing applications use database with date/time/timestamp related data fields, these applications need the database to be re-imported to avail of the new features.

Filter

property added for **Filter**

the pagesize property user can set the number of records to be fetched to fill a page. Default value is 20.

**, Time and Timestamp** support enhanced for **Filter**

support to Time, Date, and Datetime datatype columns has been enhanced. Apart from and , widget support is extended to , , and respectively. Datetime widget is used for Timestamp columns display but the data will be converted to timestamp format when conversing with the underlying database.

Grid

widget support for **Grid**

developer can choose to display the columns in a Live Grid as a checkbox using the checkbox widget from the Advanced tab on the Grid Designer. This is an add-on to the existing image and button widget support.

_Type_ options added for **Grid**

options have been added to Grid Designer for improving the Grid rendering at runtime. From the tab on the Grid Designer, one can choose the format type to be , , , , and Based upon the selection, further display patterns are presented. : The formatting options are only for the display purpose the actual data remains unaffected.

Form

of columns in Live Form for data persistency.

selection of a column from the left panel of the Live Form Designer Dialog indicates data persistency, ie the properties (like default value) of the selected fields will be available for Live Form validation irrespective of whether the field is displayed on the form or not.

property to hide a field from the form.

this Hidden property to hide a column from the Live Form. Note: By selecting the column but hiding it from the Form would enable one to consider default values not entered by the user for processing.

property **Type** displayed in the form.

readonly property gives the data type of the column in the data source.

_, Time and Timestamp_ support enhanced for **Form**

support to Time, Date, and Datetime datatype columns has been enhanced. Apart from and , widget support is extended to , , and respectively. Datetime widget is used for Timestamp columns display but the data will be converted to timestamp format when conversing with the underlying database.

Variables

_Update_ option set by default.

update property should be used to reflect the changes at the data source in the variable bound to that datasource. This property will be set at the time of variable creation. User can choose to disable it if not needed.

wrap option for _Editor_ has been enabled.

wrap has been enabled in Query Editor. This ensures that lengthy queries are visible on the same screen.

to widget.

widget has been enhanced to include. , _Controls_, and properties have been added.

**Bug Fixes**

**Summary**

Widgets

with type in **Filter** has been fixed.

Filter on a Boolean field was not retrieving the complete result dataset. This issue has been fixed to ensure complete resultset.

Widgets

with _Tree_ has been fixed.

it was not possible to add nodes to Tree widget, dynamically. This issue has been fixed.

with deletions of projects in Desktop has been fixed.

the manual deletion of projects from project location was not reflected in the project workspace . This issue has been fixed.

**Issues**

charts with timestamp data plotted on the y-axis, will not be rendered after re-import of the database. This is because the timestamp fields will be converted to string datatype which cannot be used for plotting on the y-axis.

## 7.7 Release Date: 3rd July 2015

Here is a summary of key features, known issues and bug fixes offered in **7.7 Release** as compared to [7.6.1 Release](#761) We hope you enjoy this release. **'s New**

**Language** setting.

Project Settings, users can now set the Default Language to run the application in. The user needs to provide the App Messages for the selected default Language using the Localization feature.

**Preview**

Preview can be used to preview the application in various target devices. When the application is RUN, a preview toolbar is provided. Using this toolbar the user can see how the application runs in various device settings. The toolbar can be hidden if not needed.

**Code** for applications.

Code is generated for applications at runtime. This is available in the Application Preview screen and can be used to open the application in Mobile devices using QR Code Scanner.

Import

**Import Wizard**

Import process has been vastly improved with this new wizard. This new feature will enable the user:

1. select the database entities to import,
2. name to the selected entity, and
3. the variables to be generated.>

improved **Workspace**

layout of the Project Workspace has been changed for enhanced usability. The changes include:

1. menu item has been renamed as
2. menu item has been shifted from User Menu to Main Menu.
3. **Screen Size** in the Canvas Toolbar allows the developer to select the canvas size
4. **/Hide Gridlines** in the Canvas Toolbar allows the developer to choose the gridlines appearance
5. can choose to **/Collapse Property and Widget Panels** from the Canvas Toolbar
6. helps developer design the page layout.
7. Widgets generated by import/creation of Database are listed under the **Widgets** panel in the Design Accordion.

Widgets

_Pattern_ display support for **Grid** columns.

it is possible set the display date pattern for date-type columns in a Live Grid. Using the Edit Columns option for date-type fields, the display date pattern can be selected.

_Pattern_ support for **Filter** columns.

the Edit Filters property from the Live Filter, the display style for the columns can be set using widgets. The support has been enhanced to include Date, Time, Timestamp, Checkboxset and Radioset. Default Value

_Value_ support for **Filter** columns.

the Default Value property from the Edit Filters dialog for a column, the default value can be set.

_Pattern_ support for **Form** fields.

the Edit Fields property from the Live Form, the display style for the columns can be set using widgets. The support has been enhanced to include Date, Time, Timestamp, Checkboxset and Radioset.

property, _Format_, added to and Widgets.

it is possible set the output format for date and time widgets. This defines the format of the value returned by these widgets, as opposed to the Date Pattern which is purely for display purpose.

Bind Dialog for input parameter binding for Live/Service Variables

the enhanced bind dialog, it is easy to bind the input parameters for a Live/Service variables. It is now possible to bind all the elements from a single dialog individually or at the object level. It also facilitates multiple element binding, i.e. binding the parameters as an object as opposed to individual fields.

**Bug Fixes**

**Summary**

Widgets

with type in **Filter** has been fixed.

Filter on a Boolean field was not retrieving the complete result dataset. This issue has been fixed to ensure complete resultset.

with default Logout Variable fixed.

and then enabling the Show Login Page was not redirecting to the Login page on Logout. This issue has been corrected. Now Logout will redirect to the Login page if the Show Login Page is enabled in the Security, else it will redirect to the Main page.

Variable

Variable cannot be renamed.

the previous releases, it was not possible to re-name a Service Variable. Now the developer can go the Variables dialog and change the name.

Widget

issues with data related Date and Time have been addressed.

following issues related to Date data type have been addressed:

1. 1. the Calender pop-up widget the date from entry field as selected as opposed to showing today's date as default.
    2. widget showing the selected date minus one day has been fixed
    3. and Time widget now allow selection of _pattern_ as the format for date entry and save.

Widget

of RichText Widget.

the previous releases, the size of the RichText editor was set according to the content in the editor. Now resize is possible with a simple drag feature or by setting the height and width property.

**Issues**

Grid

editing in a Live Grid works with some restrictions. Currently, it can be used for a single table grids alone. The field editing is restricted to text entries.

## 7.6.1 Release Date: 27th May 2015

Here is a summary of key features, known issues and bug fixes offered in **7.6.1 Release** as compared to [7.6.0 Release](#760) We hope you enjoy this release. **'s New**

**Prefabs**

with APIs that need OAuth is now made easy with the help of OAuth Prefabs. This release introduces three such Prefabs - Facebook, Google and LinkedIn.

new have been added.

choice of themes provided to the developer has been increased and improved. Now the user can choose from different themes and these are available from the side panel.

**Bug Fixes**

**Summary**

browser specific issues have been fixed.

to caching issues, users were not able to delete projects in IE browser, this issue has been fixed.

## 7.6.0 Release Date: 26th May 2015

Here is a summary of key features, known issues and bug fixes offered in **7.6.0 Release** as compared to [7.5.0 Release](#750) We hope you enjoy this release. **'s New**

Product

Studio performance

Studio performance has been enhanced

are provided for ease of app development process.

are sample pages with the layout and content defined. These can be used by the developer as a foundation from which the application pages can be built. The templates are categorised under various heads like Travel, Sales, Healthcare, Finance, Human Resources etc.. Binding the various widgets on these templates to the various data sources will provide the required functionality.

**variables** can be now created from live/service variable.

variable types have been enhanced with non-primitive data types of various imported/created Database, Web, Java service.

**Pullout Panel** usage improved.

can be used to traverse the tree provided in the left pullout panel of the Project Dashboard. Within the highlighted panel, up and down arrows can be used for navigation; left and right arrows for collapsing and expanding a node.

**Pullout Panel** usage improved.

height and width of the left panel and its sections can be resized as per user needs.

**Logs**

to download server logs has been added. Click the download button on the Logs panel to download the log file.

property for and layouts.

the property, additional information like rows displayed or any notifications can be displayed on the header of content displayed in a Accordion or Panel layout.

positions enhanced.

the **Position** property, the tabs can be set to be displayed at the top, bottom, left or right for Tab layout.

is now improved.

calendar widget allows for the change in display style to show month-wise, week-wise or day-wise layout. Also the onDaypick event can be used to capture the date selection by the user.

of columns for a **Grid** widget.

and conditional classes can be added for enhanced display of content in a grid.

widgets have new added properties exposed.

to _X axis_, _Y axis_ and add to the axis has been added to all charts, except pie and donut charts. Pie and Donut charts have an additional property.

widgets have new added themes and custom color settings.

new theme, Luminosity, has been added to the existing chart themes list. Developer can also set custom colors for charts.

can be viewed according to their

the Variables Main Page the variables are listed based on the scope - Page or Application.

of Variables.

creation on import/creation of services can be disabled by unchecking the **\-create Variables** during the import.

of Variables.

Variables created on import/creation of services can now be deleted.

methods exposed for and variables.

following methods can be used to set the input and filter parameters for Service and Live variables: setInput(), setInput(key, value), setInput(inputData), setFilter(), setFilter(key, value), and setInput(inputData).

**Variables** for navigation to Accordion, Tabs and Views across the pages

creating a **variable**, the user can select to navigate to a particular **/Tab/View** on a different page of the application.

can be viewed according to their categories.

selecting the action to be performed on an event occurrence, the event options are categorised as default, service calls, live variable calls, navigation, notification etc.

view in the service panel has been added.

the database is exported, an entity structure is built listing the tables, columns and data types. This is displayed in the Services Panel. This will particularly be useful for HQL users.

**Bug Fixes**

**Summary**

to enter the field while importing database from SQLServer.

, the user could not specify the instance of the SQLServer to connect to while importing the SQL Server database. This feature has been added for this release.

of "other" database.

with importing "other" database have been fixed. Now all the databases supported by Hibernate 4.3.5 can be imported to Studio.

insert/update queries.

issue with not being able to save insert and update queries has now been fixed.

Grid

, when checking and unchecking the Read-only property was not displaying the New button on the Grid. This issue has been fixed.

## 7.5.0 Release Date: 8 April 2015

Here is a summary of key features, known issues and bug fixes offered in **7.5.0 Release** as compared to [7.4.0 Release](#740) We hope you enjoy this release. **'s New**

layout

**layout** has been introduced for depicting hierarchy-based information for a site. It can be used to indicate the current page's location within a navigational hierarchy.

widget

**widget** can be used for displaying notification messages or any content in a pop-out window. It is similar to a tooltip, offering an extended view complete with a heading. For the popover to activate, a user just needs to hover the cursor over the element.

widget

**widget** is a flexible, responsive way to add a slider to your site. In addition to being responsive, the content is flexible enough to allow images, iframes, videos, or just about any type of content that you might want.

widget

**widget** can be used to place scalable vector icons. It supports glyphicon and font awesome classes out of box.

property has been added for a few widgets

animation property, one can spruce up the UI to make it more appealing and attractive. The widgets with this new added property are: , , , , , , , , , , , and The various effects that can be added can be previewed at: http://daneden.github.io/animate.css/ : This feature can be seen only in run mode, not in the design mode.

can be applied to widgets

the color scheme for a chart can changed by choosing from the list of default themes.

callback functions can now take parameters.

callback functions (like onSuccess etc.) for LiveForm can now be provided with parameters - $event, $operation, $data.

Types have been extended.

adding pages to an existing project, one could create either a normal or a partial page. Now, the types have been extended to , , , , , and

of Project Template

Template has been renamed as Project Shell

process of using **themes** has been simplified.

you can use any custom built css files within the WaveMaker Themes, as long as they follow bootstrap standards.

and can be defined

creating a Prefab, the user can define and , using JavaScript, that need to be exposed. These will be available in the Events tab when the user of the prefab drags and drops it onto the canvas.

**Bug Fixes**

**Summary**

Variable

in a query results in updation of the corresponding service variable metadata.

the previous releases, any changes made to a query (like change in a field name) were not reflected in the corresponding service variable. User had to refresh the application for the metadata to be updated. This issue has been fixed.

can be saved only after a successful execution and return of at least single record.

the previous releases, binding service variable corresponding to queries to widget was resulting in an error. This was due to the fact that the query was either wrong or was not returning data and thus not generating any metadata. To overcome this error, now queries have to be run in the design mode before saving them.

the columns from service variable are now available for editing.

the previous releases, only limited columns were being displayed in the **column** property of a **grid** Now all the columns are available for editing.

results of object type are now bind-able.

the previous releases, the results from Javaservice could not be bound to widgets directly, when this result was of object type, it had to be done via Use Expressions. Now they can be bound directly.

can now handle Date Time and Timestamp default values.

the previous releases, the default values mentioned for columns of date, time and timestamp types in the database designer were not getting reflected when adding new rows to the concerned table. This issue is now fixed.

## 7.4.0 Release Date: 24 March 2015

Here is a summary of key features, known issues and bug fixes offered in **7.4.0 Release** as compared to [7.3.2 Release](#732 "WaveMaker Studio 7.3.x Release Notes") We hope you enjoy this release. **'s New**

Product

performance and stability of the WaveMaker Studio

Online uses Content Delivery Network (CDN) for serving static content and uses compression for large files to improve network latency, for all registered users globally. Fixed unnecessary redirects, additional client-side validation requests and set the right caching headers to enhance developer experience.

Widget

a new layout

**layout** is introduced for page navigational needs. It comes by default with a title, and two nav widgets which can be implemented as per the application requirement. _:_ default top\_nav is implemented using this layout widget.

a new layout

**layout** is a new designable layout. It can be used to group widgets and at the same time implement an uniform style with ease.

**Form** can now be linked to a Live List

previous releases, Live Form could be used to update the selected row from a Live Grid. Now, from the current release, selected rows of a Live List can also be linked to a Live Form for updating data.

**lifecycle events** onLoad() and onDestroy(), have been exposed

when using a Prefab in an application, user can specify events for and These events can be used to trigger a custom JavaScript, a variable call or load a new page/view.

specific variables are now available for binding within application.

or Live Variables within a prefab can be exposed as variables to application that is including the prefab. These variables are now available to the application for binding.

Widgets

layout widget properties now include Dataset and Graphic properties

the Dataset property of Nav Layout widget, the user can now set the _Variable_, , _Icon_, _Label_, _Link_, and _Children_

support extended to **\-Awesome** or glyph icons

previous releases Studio supported _icons_, we have also added support for _\-Awesome_ icons from the current release. _:_ When using icon anywhere in the application, like binding to a widget, etc., _class_ has to be mentioned. The property _Name_ has been replaced with _Class_

property has been added to Button and Anchor widgets.

setting the Badge property for a button or anchor widget, the number of items under that widget can be listed. For example, displaying the number of new emails on a mail icon.

**Bug Fixes**

**Summary**

of database used in security service as a provider is no longer allowed.

the previous releases, the database which is being used as security service provider could be deleted, resulting in an error while deploying the application. This issue has been fixed by restricting the deletion of the configured database.

Variables

can now be bound to any JSON dataset object defined by the developer.

Grid to a JSON object via javascript was failing. This issue has been fixed.

## 7.3.2 Release Date: 16 March 2015

Here is a summary of key features, known issues and bug fixes offered in **7.3.2 Release** as compared to [7.3.1 Release](#731) We hope you enjoy this release. **'s New**

new **Locale** widget

**Locale** a new widget which automatically binds to the locale variables created when adding language support an application. This simplifies the process of Localization by eliminating the need for the user to code.

new **Layout**

**layout** the new layout introduced for page navigational needs. This widget consists of a group of anchor widgets which can be used to open other pages, views etc.. The corresponding anchors are highlighted in the target page automatically when clicked to navigate to the desired page. _:_ topnav, left-panel and right-panel are now implementing nav layout and the existing projects have been migrated to ensure the markup reflects these changes.

outbound property is introduced within LiveForm to enable validations

outbound property of the data object of the LiveForm. This will give user access to the form data for validations before updating the data source. Also the _()_ method has been enhanced to facilitate verification/modification of form data and in case of any errors to return error message and abort the call to the data source.

Service

to modify test JSON response before importing REST service

can now edit the test response before importing the REST service. This is done to cater to the situations, when the response from a given web service needs to be manually modified or in case when the web service in question is temporarily disabled. The service meta data is generated based on the test response.

for role search in Active Directory

search for Active Directory Security configuration has been added. This feature will allow user to implement the role provider (database or active directory) for user authorization.

**Bug Fixes**

**Summary**

for Inet data type in PostgreSQL

of PostgreSQL database with a column datatype Inet fails in the previous releases. This has been fixed now to map Inet datatype to String datatype.

for database SQL script execution with utf-8 charset

the issue with utf8 character set support. Import of database with special characters was failing due to lack of support to utf8 character set.

authentication issues with LDAP security provider

issue while fetching groups/roles from LDAP when configured as the security provider, during user authentication.

## 7.3.1 Release Date: 5 March 2015

Here is a summary of key features, known issues and bug fixes offered in **7.3.1 Release** as compared to [7.3.1 Release](#730) We hope you enjoy this release. **'s New**

Services

methods PUT, DELETE, PATCH, HEAD, OPTIONS exposed.

**Bug Fixes**

the error while running a query containing string type param value for the PostgreSQL Database.

## 7.3.0 Release Date: 3 March 2015

Here is a summary of key features, known issues and bug fixes offered in **7.3 Release** as compared to [7.2.5 Release](#725) We hope you enjoy this release. **'s New**

Services

and SOAP services are now being consumed through their respective REST APIs.

service APIs exposed through the API Designer.

now supports import of Views.

new Timer variable.

of the Picture widget can be set to circle, round, thumbnail.

options in Checkboxset and Radioset widgets can be stacked or inline using the new layout property.

List widget now supports media layout.

**Bug Fixes**

the binding issue with the Minimum and Maximum value property of Text widget.

with not able to reorder the columns for a grid bound to Java service variable fixed.

with display of data in case of database with self-reference fixed.

## 7.2.5 Release Date: 11 February 2015

Here is a summary of key features, known issues and bug fixes offered in **7.2.5 Release** as compared to [7.2.4 Release](#724) We hope you enjoy this release. **'s New**

an option to configure the default package and copyright information.

Create project opens project settings page for package and copyright details entry.

new Switch widget to toggle between two states.

Filter can be designed as a multi-column layout.

widget now allows a radio button for single row selection.

and Textarea widgets have the options to delay the update of the datavalue.

UI interface for setting security permissions.

supporting blob datatype for MSSQL databases.

driver has been changed from jtdc mssql jdbc driver to micrsoft jdbc driver.

**Bug Fixes**

for aggregation functions on columns of type short, double, big decimal and big integer added.

## 7.2.4 Release Date: 29 January 2015

Here is a summary of key features, known issues and bug fixes offered in **7.2.4 Release** as compared to [7.2.3 Release](#723) We hope you enjoy this release.

Form can be designed as a multi-column layout.

can now export the projects as zip/war files.

**Bug Fixes**

Binding

all internal properties of Live & Service variables(referring to query, stored procedure or table) to all widgets without expression changes.

Designer

foreign key support has been added.

and chart widgets now displaying data when bound to the result of live-filter.

of Grid columns for associated grid with one to many relation now enabled.

## 7.2.3 Release Date: 21 January 2015

Here is a summary of key features, known issues and bug fixes offered in **7.2.3 Release** as compared to [7.2.2 Release](#722) We hope you enjoy this release.

provided with 'gotoTab' & 'gotoAccordion' operations.

for sequence generator type for Oracle database.

**Bug Fixes**

changes to display tables, queries & procedures in a hierarchy in the db services tree.

Form: Issue with the Success and Error callback events fixed.

**Issues**

of new rows in grid widget does not work for non-string column types.

## 7.2.2 Release Date: 12 January 2015

Here is a summary of key features, known issues and bug fixes offered in **7.2.2 Release** as compared to [7.2.1 Release](#721) We hope you enjoy this release.

Widget: Ordering of Tabs has been introduced.

Theme and Layout highlighted from the Widgets list.

**Bug Fixes**

Prefab display in IE11 fixed.

with bind property fixed.

with CheckBox width fixed.

## 7.2.1 Release Date: 24 December 2014

Here is a summary of key features, known issues and bug fixes offered in **7.2.1 Release** as compared to [7.2.0 Release](#720) We hope you enjoy this release. **'s New**

board short cuts introduced: Ctrl + Alt + R for RUN and Ctrl + Alt + D for DEPLOY.

Authentication can be implemented via the new custom security provider.

Services

Execution of stored procedures for supported databases (MSSQL Server, Oracle, MySQL, PostgreSQL).

Widget: Added features for Multiselect, Display of Row Index and Column selection.

Widget: Added Unchecked Value property.

**Bug Fixes**

and Sorting disabled in Grid for non-primary key columns of related tables.

## 7.2.0 Release Date: 16 December 2014

Here is a summary of key features, known issues and bug fixes offered in **7.2.0 Release** as compared to [7.1.2 Release](#712 "WaveMaker Studio 7.1.x Release Notes") We hope you enjoy this release. **'s New**

Base

now supports PL/SQL. You can write Procedures and use them as a service variable within your project.

Control

there is a way to restore projects.

new chart widget has been added - Bubble Chart.

new UI design allows one add properties without code.

Layout

layout is now improved with facility to add rows/columns where needed.

and Variables

the grid widget supports multiple related tables structure.

(blob) upload in live form is now supported.

**Bug Fixes**

allowing the special characters in the widget name.

## 7.1.2 Release Date: 9 December 2014

Here is a summary of key features, known issues and bug fixes offered in **7.1.2 Release** as compared to [7.1.1 Release](#711) We hope you enjoy this release.

layout collapse icon changed to button for accessibility.

Layout is provided with Layouts option.

Layout title has additional functionality like Actions, Help, Collapsible, Expanded and Close.

Form now provides for rich-text widget for text fields.

**Bug Fixes**

widget now displays the values for x-axis and y-axis in case of live variables.

a method in a Java Service, deletes the corresponding Service Variable.

9 UI inconsistency for default Facebook prefab is fixed.

## 7.1.1 Release Date: 3 December 2014

Here is a summary of key features, known issues and bug fixes offered in **7.1.1 Release** as compared to [7.1.0 Release](#710) We hope you enjoy this release.

Layout now allows for horizontal or inline and vertical placement of widgets.

Layout is more flexible and improved.

have been categorized based upon the type of the event.

Form now provides for rich-text widget for text fields.

Designer

Services are also included in API Designer.

**Bug Fixes**

UTF-8 added for button and label widget.

## 7.1 Release Date: 20 November 2014

Here is a summary of key features, known issues and bug fixes offered in **7.1 Release** as compared to [7.0.2 Release](#702 "WaveMaker Studio 7.0.x Release Notes") We hope you enjoy this release. **'s New**

Designer

Designer allows access to the APIs generated by Database and Java Services.

projects are now Maven compatible.

a new Content Layout widget - Container which enables developers flexibility in implementing their own layout design.

List widget is now improved with added features and capabilities.

**Bug Fixes**

UTF-8 added for button and label widget.

## 7.0.2 Release Date: 12 November 2014

Here is a summary of key features, known issues and bug fixes offered in **7.0.2 Release** as compared to [7.0.1 Release](#701) We hope you enjoy this release. **'s New**

, the Panel Layout comes with a collapsible header.

Grid and Live Forms fields' caption property gets auto populated with the column headings from the table.

**Bug Fixes**

Upload

Upload for IE9 works now.

Widget

functionality of Custom Expression.

## 7.0.1 Release Date: 10 November 2014

Here is a summary of key features, known issues and bug fixes offered in **7.0.0-421 Release** as compared to [7.0.0-421 Release](#70421) We hope you enjoy this release. **'s New**

following libraries have been updated:

JS from 1.2.13 to 1.3.1

File Explorer

Option to explore the complete project directory.

Project File Explorer with option to add/delete folder or file.

file upload support. Now you can import resource files by selecting multiple files.

one can Import/Export of project to and from WaveMaker Online.

for various data format using expressions has been added.

**Bug Fixes**

live grid variable for a table is deleted when the corresponding table in the database is deleted.

(ascending/descending & multi-column) support for Live variable has been added.

## 7.0.0-421 Release Date: 4 November 2014 Number: 7.0.0-421

Here is a summary of key features, known issues and bug fixes offered in **7.0.0-421 Release** as compared to [7.0.0-406 Release](#70406) We hope you enjoy this release. **'s New**

following libraries have been updated:

updated to 3.2

UI Bootstrap from 0.10.0 to 0.11.2

Editor builds from 1.1.2 to 1.1.7

feature to export database - data and schema.

delete project and leave project options are available from the project dashboard.[](http://dev.wavemaker.com/learn/docs/docs/getting-started-2/ "Getting Started")

**Bug Fixes**

contributor of a project to handle widget security and logout screens.

Control

selected files will be reverted in the revert operation

will be able to perform CRUD operations on the database tables immediately after pulling changes.

## 7.0.0-406 Release Date: 22 October 2014 Number: 7.0.0-406

Here is a summary of key features, known issues and bug fixes offered in **7.0.0-406 Release** as compared to [7.0.0-400 Release](#70400) We hope you enjoy this release. **'s New**

support to read, edit and delete resources in the Services folder of the project.

capability to import an exported project (zip file).

**Bug Fixes**

Form

for input type password in the live-form editor.

## 7.0.0-400 Release Date: 17 October 2014 Number: 7.0.0-400

Here is a summary of key features, known issues and bug fixes offered in **7.0.0-400 Release** as compared to [7.0.0-389 Release](#70389) We hope you enjoy this release. **'s New**

support for html characters in widget caption and description properties of the following widgets - accordion, tabs and label.

Grid

Layout property of Live Grid has two options - inline or dialog, which dictates the behavior of the Form at runtime.

**Bug Fixes**

level security for tab and accordion widgets has been fixed.

Pages

message is displayed on the page if the partial page is unavailable for deletion..

to a service variable shows up representational data in the design mode.

## 7.0.0-389 Release Date: 13 October 2014 Number: 7.0.0-389

Here is a summary of key features, known issues and bug fixes offered in **7.0.0-389 Release** as compared to [7.0 Release](#70) We hope you enjoy this release. **'s New**

Control for Projects

to auto populate commit messages has been added.

Services

for MS-SQL for Import, Export and CRUD operations has been enabled.

for user to provide Schema name for the data-model during export has been added.

**Bug Fixes**

Services

for multiple query params with same name in a web service.

and Widgets

implementation for variables and widgets respective to their container pages, partials and prefabs.

Variable property is now retained for widgets.

\-Variable now works with Update & Delete operations also.

**Issues**

level security doesn't work for tab and accordion widget.

## 7.0 Release Date: 16 September 2014 Number: 7.0.0-363

Here is a summary of key features, known issues and bug fixes offered in **7.0.0 Release** as compared to [7.0 BETA-6 Release](/learn/docs/wavemaker-studio-beta-release-notes/#70Beta6 "WaveMaker Studio BETA Release Notes") We hope you enjoy this release. **'s New**

with Enterprise Developer Network(EDN)

is a common platform integrating all the WaveMaker products. It enables private enterprise developer network to find and join projects, collaborate with co-workers. _in to Studio is now via EDN_

Control for Projects

Control is now enabled for Studio projects. Now, enterprise developers can set up and control their code base via a Git-based repository and synchronise their changes across the enterprise. Studio also provides a three-way merge to resolve conflicts thus enabling collaboration among the co-workers.

page load times through minification and enabling static content caching.

**Bug Fixes**

Widget: Allowing custom events on Login Widget button.

Widget: Live variable support enabled for binding widget dataset property.

: Displaying fields in related objects for selected Live Variable's dataset, UI issues & performance optimization.

and Services

Navigator:Pagination enabled for data widgets (like grid, live-list etc.) bound to service variable.

Services: Auto-complete support in Query tab that displays table/entity & column/field names for NativeSQL/HQL queries.

**Issues**

Binding

of Variables and Widgets with same name from different components (partials and prefabs) will conflict. Names have to be unique.
