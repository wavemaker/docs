---
title: "WaveMaker Studio 7.x Release Notes"
id: ""
---

## Studio 7.8.0 Release Released Date: 3rd Sept 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.8 Release** as compared to [Studio 7.7.1 Release](#771). **What's New**

**Component**

**Feature**

**Description**

Database

Introducing **Virtual Relation** support.

Provision is added to generate _virtual relations_ for database columns. Hovering over the column will reveal an icon which can be used in the creation of virtual relations. A virtual relation can be identified by a dotted line between the tables as opposed to the solid line for the actual relations. Also, a checkbox in the relation properties panel. This feature can be used to impose database constraints without having to change the DB schema.

Project

Introducing **Application Configuration Profiles**.

Configuration Profiles, in line with _Maven Configuration Profile_, can be created by the user. By default, two profiles - **Development** and **Production**, are generated. Currently, user can configure the DB service for each of these profiles. Run option executes the app against the development profile, while deploy executes it against the production profile. Profile can be selected while generating the war file for export.

Widgets

Introducing **Rating** widget.

A set of star icons are provided, which can be used for rating purpose.

**Enhancements**

**Component**

**Enhancement**

**Description**

Widgets

New property **Menu Position** has been added to the **Menu widget**.

New property _Menu Position_ for Menu defines the format display of the menu items at run time. The options are - _down, left_; _down,right_; _top, left_; _top, right_; _inline_.

New **Item** properties have been added to the **Menu widget**.

New properties _Item Label_, _Item Icon_, _Item Link_, _Item Children_ for Menu define the content of the menu items at run time.

New **Link Target** property has been added to the **Menu widget**.

New property _Link Target_ defines the behavior of the Item Link. Options are "\_blank", "\_parent", "\_self", or "\_top".

**File Upload** enhancements.

Now the _File Upload_ creates a Java Service by default. This Java Service, called **File Service** includes operations like **uploadFile**, **listFiles**, **deleteFile** and **downloadFile**. One can select the service and operation for the widget to consume, by default the File Service and uploadFile is selected. Based upon the operation selected, default variables will be generated.

**Multi-Event** support has been introduced.

The _Events_ property for widgets has been enhanced to support multiple event handling. **Note:Currently this feature is available only for widgets, not for variables.**

**Design Dialog** enhancements.

The _showDialog_ and _hideDialog_ methods have been deprecated. These have been replaced by open and close methods. The usage would be DialogService.open(dialogName, parentScope, params) and _DialogService.close(dialogName)_.

Live Form

Default Mode

Now using the _Default Mode_ property, Live Form can be set to _View_ or _Edit_. This will define the Form behaviour at runtime.

New **action buttons**.

Four new action buttons have been added to Live Form. These are _reset_ used in the _Update Mode_ of the Live Form in addition to the existing _save_ and _cancel_ buttons. Three actions in the _View Mode_ are _delete_, _update_ and _new_.

Version Control

It is easier to track changes to your code with the enhanced VCS dialog for **View Changes** option.

The _Revert Changes_ dialog has been replaced with the new _View Changes_ dialog. Using this dialog, one can see the code changes for a selected file. The user can then choose to revert the changes accordingly.

## Studio 7.7.1 Release Released Date: 28th July 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.7.1 Release** as compared to [Studio 7.7 Release](#770). We hope you enjoy this release. **What's New**

**Component**

**Feature**

**Description**

Widgets

Introducing **Datetime** widget.

Datetime widget can be used for selecting timestamp data.

Security

Introducing **Custom Login Pages**.

Developer can now design and use their own custom login pages. This custom page can be used instead of the default login page provided by Studio.

Introducing role-based **Landing Pages**.

Developer can now designate the landing page for the application depending upon the role of the used logged in.

Project Canvas

Enhancing usability using **keystrokes**.

Using the **Escape key**, focus can be shifted from the widget to its parent component. For example, in a _Grid Layout_, if the focus is on any _gridcolumn_, hitting the _Esc_ will shift the focus to the corresponding _gridrow_ and hitting the _Esc_ again will shift the focus to the corresponding _layoutgrid_. This will continue till the _page_ gets focus.

**Enhancements**

**Component**

**Enhancement**

**Description**

Project

**Angular version** upgrades.

Angular JS version has been upgraded from 1.4.1 to 1.4.2.

On Demand Loading for pages with Accordion and Tab layouts.

For application pages with Accordion or Tab layout, the content will be loaded on demand. That is, for Accordion the content will be loaded when the panel is expanded for the first time and for Tab when first selected.

Database

**Datetime** support for Database.

Now it is possible to have columns in a database of the type _datatime_. Earlier there was support for _timestamp_ datatype alone, now one can choose a _datetime_ datatype also while defining datasets.

**Note:** If your existing applications use database with date/time/timestamp related data fields, these applications need the database to be re-imported to avail of the new features.

Live Filter

**Pagesize** property added for **Live Filter**.

Using the pagesize property user can set the number of records to be fetched to fill a page. Default value is 20.

**Date, Time and Timestamp** support enhanced for **Live Filter**.

The support to Time, Date, and Datetime datatype columns has been enhanced. Apart from _Text_ and _Number_, widget support is extended to _time_, _date_, and _datetime_ respectively. Datetime widget is used for Timestamp columns display but the data will be converted to timestamp format when conversing with the underlying database.

Live Grid

_Checkbox_ widget support for **Live Grid**.

The developer can choose to display the columns in a Live Grid as a checkbox using the checkbox widget from the Advanced tab on the Grid Designer. This is an add-on to the existing image and button widget support.

_Format Type_ options added for **Live Grid**.

Formatting options have been added to Grid Designer for improving the Grid rendering at runtime. From the _Basic_ tab on the Grid Designer, one can choose the format type to be _Date_, _Currency_, _prefix_, _suffix_, and _Number_. Based upon the selection, further display patterns are presented. **Note**: The formatting options are only for the display purpose the actual data remains unaffected.

Live Form

Selection of columns in Live Form for data persistency.

The selection of a column from the left panel of the Live Form Designer Dialog indicates data persistency, ie the properties (like default value) of the selected fields will be available for Live Form validation irrespective of whether the field is displayed on the form or not.

New property **hidden** to hide a field from the form.

Use this Hidden property to hide a column from the Live Form. Note: By selecting the column but hiding it from the Form would enable one to consider default values not entered by the user for processing.

New property **Field Type** displayed in the form.

This readonly property gives the data type of the column in the data source.

_Date, Time and Timestamp_ support enhanced for **Live Form**.

The support to Time, Date, and Datetime datatype columns has been enhanced. Apart from _Text_ and _Number_, widget support is extended to _time_, _date_, and _datetime_ respectively. Datetime widget is used for Timestamp columns display but the data will be converted to timestamp format when conversing with the underlying database.

Live Variables

_Auto Update_ option set by default.

Auto update property should be used to reflect the changes at the data source in the variable bound to that datasource. This property will be set at the time of variable creation. User can choose to disable it if not needed.

Database

Word wrap option for _Query Editor_ has been enabled.

Word wrap has been enabled in Query Editor. This ensures that lengthy queries are visible on the same screen.

Widgets

Enhancements to _Calendar_ widget.

Calendar widget has been enhanced to include. _Type_, _Enable Controls_, and _view_ properties have been added.

**Key Bug Fixes**

**Component**

**Fix Summary**

**Description**

Live Widgets

Issue with _Boolean_ type in **Live Filter** has been fixed.

Live Filter on a Boolean field was not retrieving the complete result dataset. This issue has been fixed to ensure complete resultset.

Tree Widgets

Issue with _Dynamic Tree_ has been fixed.

Earlier it was not possible to add nodes to Tree widget, dynamically. This issue has been fixed.

Project

Issue with deletions of projects in Desktop has been fixed.

Earlier the manual deletion of projects from project location was not reflected in the project workspace . This issue has been fixed.

**Known Issues**

**Component**

**Description**

Charts

Existing charts with timestamp data plotted on the y-axis, will not be rendered after re-import of the database. This is because the timestamp fields will be converted to string datatype which cannot be used for plotting on the y-axis.

## Studio 7.7 Release Released Date: 3rd July 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.7 Release** as compared to [Studio 7.6.1 Release](#761). We hope you enjoy this release. **What's New**

**Component**

**Feature**

**Description**

Project

Introducing **Default Language** setting.

From Project Settings, users can now set the Default Language to run the application in. The user needs to provide the App Messages for the selected default Language using the Localization feature.

Introducing **Application Preview**.

Application Preview can be used to preview the application in various target devices. When the application is RUN, a preview toolbar is provided. Using this toolbar the user can see how the application runs in various device settings. The toolbar can be hidden if not needed.

Introducing **QR Code** for applications.

QR Code is generated for applications at runtime. This is available in the Application Preview screen and can be used to open the application in Mobile devices using QR Code Scanner.

Database Import

Introducing **Database Import Wizard**.

Database Import process has been vastly improved with this new wizard. This new feature will enable the user:

1. to select the database entities to import,
2. give name to the selected entity, and
3. choose the variables to be generated.>

**Enhancements**

**Component**

**Enhancement**

**Description**

Project

New improved **Project Workspace**

The layout of the Project Workspace has been changed for enhanced usability. The changes include:

1. **Services** menu item has been renamed as **Create**
2. **Settings** menu item has been shifted from User Menu to Main Menu.
3. **Choose Screen Size** in the Canvas Toolbar allows the developer to select the canvas size
4. **Show/Hide Gridlines** in the Canvas Toolbar allows the developer to choose the gridlines appearance
5. Developer can choose to **Expand/Collapse Property and Widget Panels** from the Canvas Toolbar
6. Ruler helps developer design the page layout.
7. Live Widgets generated by import/creation of Database are listed under the **DB Widgets** panel in the Design Accordion.

Live Widgets

_Date Pattern_ display support for **Live Grid** columns.

Now it is possible set the display date pattern for date-type columns in a Live Grid. Using the Edit Columns option for date-type fields, the display date pattern can be selected.

_Display Pattern_ support for **Live Filter** columns.

Using the Edit Filters property from the Live Filter, the display style for the columns can be set using widgets. The support has been enhanced to include Date, Time, Timestamp, Checkboxset and Radioset. Default Value

_Default Value_ support for **Live Filter** columns.

Using the Default Value property from the Edit Filters dialog for a column, the default value can be set.

_Display Pattern_ support for **Live Form** fields.

Using the Edit Fields property from the Live Form, the display style for the columns can be set using widgets. The support has been enhanced to include Date, Time, Timestamp, Checkboxset and Radioset.

Widgets

New property, _Output Format_, added to **Date** and **Time** Widgets.

Now it is possible set the output format for date and time widgets. This defines the format of the value returned by these widgets, as opposed to the Date Pattern which is purely for display purpose.

Binding

Enhanced Bind Dialog for input parameter binding for Live/Service Variables

Using the enhanced bind dialog, it is easy to bind the input parameters for a Live/Service variables. It is now possible to bind all the elements from a single dialog individually or at the object level. It also facilitates multiple element binding, i.e. binding the parameters as an object as opposed to individual fields.

**Key Bug Fixes**

**Component**

**Fix Summary**

**Description**

Live Widgets

Issue with _Boolean_ type in **Live Filter** has been fixed.

Live Filter on a Boolean field was not retrieving the complete result dataset. This issue has been fixed to ensure complete resultset.

Security

Issue with default Logout Variable fixed.

Disabling and then enabling the Show Login Page was not redirecting to the Login page on Logout. This issue has been corrected. Now Logout will redirect to the Login page if the Show Login Page is enabled in the Security, else it will redirect to the Main page.

Service Variable

Service Variable cannot be renamed.

In the previous releases, it was not possible to re-name a Service Variable. Now the developer can go the Variables dialog and change the name.

Date Widget

Multiple issues with data related Date and Time have been addressed.

The following issues related to Date data type have been addressed:

1. 1. Now the Calender pop-up widget the date from entry field as selected as opposed to showing today's date as default.
    2. Date widget showing the selected date minus one day has been fixed
    3. Date and Time widget now allow selection of _output pattern_ as the format for date entry and save.

RichText Widget

Resize of RichText Widget.

In the previous releases, the size of the RichText editor was set according to the content in the editor. Now resize is possible with a simple drag feature or by setting the height and width property.

**Known Issues**

**Component**

**Description**

Live Grid

Inline editing in a Live Grid works with some restrictions. Currently, it can be used for a single table grids alone. The field editing is restricted to text entries.

## Studio 7.6.1 Release Released Date: 27th May 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.6.1 Release** as compared to [Studio 7.6.0 Release](#760). We hope you enjoy this release. **What's New**

**Component**

**Feature**

**Description**

Prefabs

Introducing **OAuth Prefabs**.

Integrating with APIs that need OAuth is now made easy with the help of OAuth Prefabs. This release introduces three such Prefabs - Facebook, Google and LinkedIn.

**Enhancements**

**Component**

**Enhancement**

**Description**

Project

Five new **Themes** have been added.

The choice of themes provided to the developer has been increased and improved. Now the user can choose from _eight_ different themes and these are available from the side panel.

**Key Bug Fixes**

**Component**

**Fix Summary**

**Description**

Project

IE browser specific issues have been fixed.

Due to caching issues, users were not able to delete projects in IE browser, this issue has been fixed.

## Studio 7.6.0 Release Released Date: 26th May 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.6.0 Release** as compared to [Studio 7.5.0 Release](#750). We hope you enjoy this release. **What's New**

**Component**

**Feature**

**Description**

Overall Product

WaveMaker Studio performance

WaveMaker Studio performance has been enhanced

Templates

Default **Templates** are provided for ease of app development process.

Templates are sample pages with the layout and content defined. These can be used by the developer as a foundation from which the application pages can be built. The templates are categorised under various heads like Travel, Sales, Healthcare, Finance, Human Resources etc.. Binding the various widgets on these templates to the various data sources will provide the required functionality.

Variable

**Static variables** can be now created from live/service variable.

Static variable types have been enhanced with non-primitive data types of various imported/created Database, Web, Java service.

**Enhancements**

**Component**

**Enhancement**

**Description**

Project

**Left Pullout Panel** usage improved.

Keystrokes can be used to traverse the tree provided in the left pullout panel of the Project Dashboard. Within the highlighted panel, up and down arrows can be used for navigation; left and right arrows for collapsing and expanding a node.

**Left Pullout Panel** usage improved.

The height and width of the left panel and its sections can be resized as per user needs.

**Server Logs**.

Facility to download server logs has been added. Click the download button on the Logs panel to download the log file.

Layout

**Badge** property for **Panel** and **Accordion** layouts.

Using the **Badge** property, additional information like rows displayed or any notifications can be displayed on the header of content displayed in a Accordion or Panel layout.

**Tab** positions enhanced.

Using the **Tabs Position** property, the tabs can be set to be displayed at the top, bottom, left or right for Tab layout.

Widgets

**Calendar** is now improved.

The calendar widget allows for the change in display style to show month-wise, week-wise or day-wise layout. Also the onDaypick event can be used to capture the date selection by the user.

Customisation of columns for a **Live Grid** widget.

Custom and conditional classes can be added for enhanced display of content in a grid.

**Chart** widgets have new added properties exposed.

Option to _Show X axis_, _Show Y axis_ and add _Caption_ to the axis has been added to all charts, except pie and donut charts. Pie and Donut charts have an additional _title_ property.

**Chart** widgets have new added themes and custom color settings.

A new theme, Luminosity, has been added to the existing chart themes list. Developer can also set custom colors for charts.

Variables

Variables can be viewed according to their **categories**.

In the Variables Main Page the variables are listed based on the scope - Page or Application.

Creation of Variables.

Variable creation on import/creation of services can be disabled by unchecking the **Auto-create Variables** during the import.

Deletion of Variables.

Default Variables created on import/creation of services can now be deleted.

New methods exposed for **Service** and **Live** variables.

The following methods can be used to set the input and filter parameters for Service and Live variables: setInput(), setInput(key, value), setInput(inputData), setFilter(), setFilter(key, value), and setInput(inputData).

**Navigation Variables** for navigation to Accordion, Tabs and Views across the pages

When creating a **navigation variable**, the user can select to navigate to a particular **Accordion/Tab/View** on a different page of the application.

Events

Events can be viewed according to their categories.

When selecting the action to be performed on an event occurrence, the event options are categorised as default, service calls, live variable calls, navigation, notification etc.

Database

**Entity** view in the service panel has been added.

Once the database is exported, an entity structure is built listing the tables, columns and data types. This is displayed in the Services Panel. This will particularly be useful for HQL users.

**Key Bug Fixes**

**Component**

**Fix Summary**

**Description**

Database

Provision to enter the **instanceName** field while importing database from SQLServer.

Earlier, the user could not specify the instance of the SQLServer to connect to while importing the SQL Server database. This feature has been added for this release.

Import of "other" database.

Issues with importing "other" database have been fixed. Now all the databases supported by Hibernate 4.3.5 can be imported to Studio.

Saving insert/update queries.

The issue with not being able to save insert and update queries has now been fixed.

Widgets

Live Grid

Earlier, when checking and unchecking the Read-only property was not displaying the New button on the Grid. This issue has been fixed.

## Studio 7.5.0 Release Released Date: 8 April 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.5.0 Release** as compared to [Studio 7.4.0 Release](#740). We hope you enjoy this release. **What's New**

**Component**

**Feature**

**Description**

Layout

Introducing **Breadcrumb** layout

**Breadcrumb layout** has been introduced for depicting hierarchy-based information for a site. It can be used to indicate the current page's location within a navigational hierarchy.

Widgets

Introducing **Popover** widget

**Popover widget** can be used for displaying notification messages or any content in a pop-out window. It is similar to a tooltip, offering an extended view complete with a heading. For the popover to activate, a user just needs to hover the cursor over the element.

Introducing **Carousel** widget

**Carousel widget** is a flexible, responsive way to add a slider to your site. In addition to being responsive, the content is flexible enough to allow images, iframes, videos, or just about any type of content that you might want.

Introducing **Icon** widget

**Icon widget** can be used to place scalable vector icons. It supports glyphicon and font awesome classes out of box.

**Enhancements**

**Component**

**Enhancement**

**Description**

Widgets

**Animation** property has been added for a few widgets

With animation property, one can spruce up the UI to make it more appealing and attractive. The widgets with this new added property are: _Icon_, _Button_, _Message_, _Label_, _Picture_, _Dialogs_, _Container_, _Tile_, _View_, _Anchor_, _Popover_, and _Prefabs_. The various effects that can be added can be previewed at: http://daneden.github.io/animate.css/ _Note_: This feature can be seen only in run mode, not in the design mode.

Themes can be applied to **chart** widgets

Now the color scheme for a chart can changed by choosing from the list of default themes.

**LiveForm** callback functions can now take parameters.

The callback functions (like onSuccess etc.) for LiveForm can now be provided with parameters - $event, $operation, $data.

Pages

Page Types have been extended.

When adding pages to an existing project, one could create either a normal or a partial page. Now, the types have been extended to _page_, _partial_, _header_, _topnav_, _leftnav_, _rightnav_ and _footer_.

Project

Renaming of Project Template

Project Template has been renamed as Project Shell

The process of using **custom themes** has been simplified.

Now you can use any custom built css files within the WaveMaker Themes, as long as they follow bootstrap standards.

Prefabs

Prefab **Events** and **Methods** can be defined

When creating a Prefab, the user can define **Events** and **Methods**, using JavaScript, that need to be exposed. These will be available in the Events tab when the user of the prefab drags and drops it onto the canvas.

**Key Bug Fixes**

**Component**

**Fix Summary**

**Description**

Service Variable

Changes in a query results in updation of the corresponding service variable metadata.

In the previous releases, any changes made to a query (like change in a field name) were not reflected in the corresponding service variable. User had to refresh the application for the metadata to be updated. This issue has been fixed.

Query can be saved only after a successful execution and return of at least single record.

In the previous releases, binding service variable corresponding to queries to widget was resulting in an error. This was due to the fact that the query was either wrong or was not returning data and thus not generating any metadata. To overcome this error, now queries have to be run in the design mode before saving them.

All the columns from service variable are now available for editing.

In the previous releases, only limited columns were being displayed in the **edit column** property of a **live grid**. Now all the columns are available for editing.

Javaservice results of object type are now bind-able.

In the previous releases, the results from Javaservice could not be bound to widgets directly, when this result was of object type, it had to be done via Use Expressions. Now they can be bound directly.

LiveForms can now handle Date Time and Timestamp default values.

In the previous releases, the default values mentioned for columns of date, time and timestamp types in the database designer were not getting reflected when adding new rows to the concerned table. This issue is now fixed.

## Studio 7.4.0 Release Released Date: 24 March 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.4.0 Release** as compared to [Studio 7.3.2 Release](#732 "WaveMaker Studio 7.3.x Release Notes"). We hope you enjoy this release. **What's New**

**Component**

**Feature**

**Description**

Overall Product

Improved performance and stability of the WaveMaker Studio

WaveMaker Online uses Content Delivery Network (CDN) for serving static content and uses compression for large files to improve network latency, for all registered users globally. Fixed unnecessary redirects, additional client-side validation requests and set the right caching headers to enhance developer experience.

Layout Widget

Introducing a new **Navbar** layout

**NavBar layout** is introduced for page navigational needs. It comes by default with a title, and two nav widgets which can be implemented as per the application requirement. _Note:_ The default top\_nav is implemented using this layout widget.

Introducing a new **Tile** layout

**Tile layout** is a new designable layout. It can be used to group widgets and at the same time implement an uniform style with ease.

**Enhancements**

**Component**

**Enhancement**

**Description**

Widgets

**Live Form** can now be linked to a Live List

In previous releases, Live Form could be used to update the selected row from a Live Grid. Now, from the current release, selected rows of a Live List can also be linked to a Live Form for updating data.

Prefabs

**Prefab lifecycle events** onLoad() and onDestroy(), have been exposed

Now when using a Prefab in an application, user can specify events for **Load** and **Destroy**. These events can be used to trigger a custom JavaScript, a variable call or load a new page/view.

**Prefab** specific variables are now available for binding within application.

Service or Live Variables within a prefab can be exposed as variables to application that is including the prefab. These variables are now available to the application for binding.

Layout Widgets

**Nav** layout widget properties now include Dataset and Graphic properties

Using the Dataset property of Nav Layout widget, the user can now set the _Script Variable_, _Value_, _Item Icon_, _Item Label_, _Item Link_, and _Item Children_.

Icons

Icon support extended to **Font-Awesome** or glyph icons

In previous releases Studio supported _glyph icons_, we have also added support for _Font-Awesome_ icons from the current release. _Note:_ When using icon anywhere in the application, like binding to a widget, etc., _icon class_ has to be mentioned. The property _Icon Name_ has been replaced with _Icon Class_.

**Badge** property has been added to Button and Anchor widgets.

By setting the Badge property for a button or anchor widget, the number of items under that widget can be listed. For example, displaying the number of new emails on a mail icon.

**Key Bug Fixes**

**Component**

**Fix Summary**

**Description**

Security

Deletion of database used in security service as a provider is no longer allowed.

In the previous releases, the database which is being used as security service provider could be deleted, resulting in an error while deploying the application. This issue has been fixed by restricting the deletion of the configured database.

Service Variables

Grid can now be bound to any JSON dataset object defined by the developer.

Binding Grid to a JSON object via javascript was failing. This issue has been fixed.

## Studio 7.3.2 Release Released Date: 16 March 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.3.2 Release** as compared to [Studio 7.3.1 Release](#731). We hope you enjoy this release. **What's New**

**Component**

**Feature**

**Description**

Widgets

Added new **Select Locale** widget

**Select Locale** is a new widget which automatically binds to the locale variables created when adding language support an application. This simplifies the process of Localization by eliminating the need for the user to code.

Layout

Added new **Nav Layout**

**Nav layout** is the new layout introduced for page navigational needs. This widget consists of a group of anchor widgets which can be used to open other pages, views etc.. The corresponding anchors are highlighted in the target page automatically when clicked to navigate to the desired page. _Note:_ The topnav, left-panel and right-panel are now implementing nav layout and the existing projects have been migrated to ensure the markup reflects these changes.

**Enhancements**

**Component**

**Enhancement**

**Description**

Widgets

An outbound property is introduced within LiveForm to enable validations

An outbound property of **LiveForm** exposes the data object of the LiveForm. This will give user access to the form data for validations before updating the data source. Also the _onBeforeServiceCall()_ method has been enhanced to facilitate verification/modification of form data and in case of any errors to return error message and abort the call to the data source.

REST Service

Provision to modify test JSON response before importing REST service

User can now edit the test response before importing the REST service. This is done to cater to the situations, when the response from a given web service needs to be manually modified or in case when the web service in question is temporarily disabled. The service meta data is generated based on the test response.

Security

Support for role search in Active Directory

Role search for Active Directory Security configuration has been added. This feature will allow user to implement the role provider (database or active directory) for user authorization.

**Key Bug Fixes**

**Component**

**Fix Summary**

**Description**

Database

Support for Inet data type in PostgreSQL

Import of PostgreSQL database with a column datatype Inet fails in the previous releases. This has been fixed now to map Inet datatype to String datatype.

Fix for database SQL script execution with utf-8 charset

Fixed the issue with utf8 character set support. Import of database with special characters was failing due to lack of support to utf8 character set.

Security

User authentication issues with LDAP security provider

Fixed issue while fetching groups/roles from LDAP when configured as the security provider, during user authentication.

## Studio 7.3.1 Release Released Date: 5 March 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.3.1 Release** as compared to [Studio 7.3.1 Release](#730). We hope you enjoy this release. **What's New**

**Feature**

**Description**

REST Services

HTTP methods PUT, DELETE, PATCH, HEAD, OPTIONS exposed.

**Key Bug Fixes**

**Feature**

**Description**

Database

Fixed the error while running a query containing string type param value for the PostgreSQL Database.

## Studio 7.3.0 Release Released Date: 3 March 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.3 Release** as compared to [Studio 7.2.5 Release](#725). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Web Services

Java and SOAP services are now being consumed through their respective REST APIs.

SOAP service APIs exposed through the API Designer.

Database

Studio now supports import of Views.

Variable

Introducing new Timer variable.

**Enhancements**

**Feature**

**Description**

Widgets

Shape of the Picture widget can be set to circle, round, thumbnail.

The options in Checkboxset and Radioset widgets can be stacked or inline using the new layout property.

Live List widget now supports media layout.

**Key Bug Fixes**

**Feature**

**Description**

Widgets

Fixed the binding issue with the Minimum and Maximum value property of Text widget.

Grid

Issue with not able to reorder the columns for a grid bound to Java service variable fixed.

Database

Issue with display of data in case of database with self-reference fixed.

## Studio 7.2.5 Release Released Date: 11 February 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.2.5 Release** as compared to [Studio 7.2.4 Release](#724). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Project

Introducing an option to configure the default package and copyright information.

Now Create project opens project settings page for package and copyright details entry.

Widgets

Introducing new Switch widget to toggle between two states.

**Enhancements**

**Feature**

**Description**

Widgets

Live Filter can be designed as a multi-column layout.

Grid widget now allows a radio button for single row selection.

Text and Textarea widgets have the options to delay the update of the datavalue.

Security

Enhanced UI interface for setting security permissions.

Database

Now supporting blob datatype for MSSQL databases.

MSSQL driver has been changed from jtdc mssql jdbc driver to micrsoft jdbc driver.

**Key Bug Fixes**

**Feature**

**Description**

Widgets

Support for aggregation functions on columns of type short, double, big decimal and big integer added.

## Studio 7.2.4 Release Released Date: 29 January 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.2.4 Release** as compared to [Studio 7.2.3 Release](#723). We hope you enjoy this release. **Enhancements**

**Feature**

**Description**

Widgets

Live Form can be designed as a multi-column layout.

Project

Contributors can now export the projects as zip/war files.

**Key Bug Fixes**

**Feature**

**Description**

Data Binding

Binding all internal properties of Live & Service variables(referring to query, stored procedure or table) to all widgets without expression changes.

DataModel Designer

Multiple foreign key support has been added.

Widgets

Grid and chart widgets now displaying data when bound to the result of live-filter.

Customization of Grid columns for associated grid with one to many relation now enabled.

## Studio 7.2.3 Release Released Date: 21 January 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.2.3 Release** as compared to [Studio 7.2.2 Release](#722). We hope you enjoy this release. **Enhancements**

**Feature**

**Description**

Variables

NavigationVariable provided with 'gotoTab' & 'gotoAccordion' operations.

Database

Support for sequence generator type for Oracle database.

**Key Bug Fixes**

**Feature**

**Description**

Database

UI changes to display tables, queries & procedures in a hierarchy in the db services tree.

Widgets

Live Form: Issue with the Success and Error callback events fixed.

**Known Issues**

**Feature**

**Description**

Widgets

Addition of new rows in grid widget does not work for non-string column types.

## Studio 7.2.2 Release Released Date: 12 January 2015

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.2.2 Release** as compared to [Studio 7.2.1 Release](#721). We hope you enjoy this release. **Enhancements**

**Feature**

**Description**

Widgets

Tab Widget: Ordering of Tabs has been introduced.

Selected Theme and Layout highlighted from the Widgets list.

**Key Bug Fixes**

**Feature**

**Description**

Prefabs

Duplicate Prefab display in IE11 fixed.

Widgets

Issue with bind property fixed.

Issue with CheckBox width fixed.

## Studio 7.2.1 Release Released Date: 24 December 2014

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.2.1 Release** as compared to [Studio 7.2.0 Release](#720). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Studio

Key board short cuts introduced: Ctrl + Alt + R for RUN and Ctrl + Alt + D for DEPLOY.

Security

Custom Authentication can be implemented via the new custom security provider.

Database Services

Implemented Execution of stored procedures for supported databases (MSSQL Server, Oracle, MySQL, PostgreSQL).

**Enhancements**

**Feature**

**Description**

Widgets

Grid Widget: Added features for Multiselect, Display of Row Index and Column selection.

Checkbox Widget: Added Unchecked Value property.

**Key Bug Fixes**

**Feature**

**Description**

Widgets

Searching and Sorting disabled in Grid for non-primary key columns of related tables.

## Studio 7.2.0 Release Released Date: 16 December 2014

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.2.0 Release** as compared to [Studio 7.1.2 Release](#712 "WaveMaker Studio 7.1.x Release Notes"). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Data Base

Studio now supports PL/SQL. You can write Procedures and use them as a service variable within your project.

Version Control

Now there is a way to restore projects.

Widgets

A new chart widget has been added - Bubble Chart.

**Enhancements**

**Feature**

**Description**

Prefabs

The new UI design allows one add properties without code.

Content Layout

Grid layout is now improved with facility to add rows/columns where needed.

Database and Variables

Now the grid widget supports multiple related tables structure.

Databases

File (blob) upload in live form is now supported.

**Key Bug Fixes**

**Feature**

**Description**

Widgets

Not allowing the special characters in the widget name.

## Studio 7.1.2 Release Released Date: 9 December 2014

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.1.2 Release** as compared to [Studio 7.1.1 Release](#711). We hope you enjoy this release. **Enhancements**

**Feature**

**Description**

Layout

Accordion layout collapse icon changed to button for accessibility.

Form Layout is provided with Layouts option.

Panel Layout title has additional functionality like Actions, Help, Collapsible, Expanded and Close.

Live Form now provides for rich-text widget for text fields.

**Key Bug Fixes**

**Feature**

**Description**

Widgets

Chart widget now displays the values for x-axis and y-axis in case of live variables.

Variables

Deleting a method in a Java Service, deletes the corresponding Service Variable.

Prefabs

IE9 UI inconsistency for default Facebook prefab is fixed.

## Studio 7.1.1 Release Released Date: 3 December 2014

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.1.1 Release** as compared to [Studio 7.1.0 Release](#710). We hope you enjoy this release. **Enhancements**

**Feature**

**Description**

Layout

List Layout now allows for horizontal or inline and vertical placement of widgets.

Grid Layout is more flexible and improved.

Widgets

Events have been categorized based upon the type of the event.

Live Form now provides for rich-text widget for text fields.

API Designer

Security Services are also included in API Designer.

**Key Bug Fixes**

**Feature**

**Description**

Widgets

Suport UTF-8 added for button and label widget.

## Studio 7.1 Release Released Date: 20 November 2014

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.1 Release** as compared to [Studio 7.0.2 Release](#702 "WaveMaker Studio 7.0.x Release Notes"). We hope you enjoy this release. **What's New**

**Feature**

**Description**

API Designer

API Designer allows access to the APIs generated by Database and Java Services.

Projects

Studio projects are now Maven compatible.

Widgets

Added a new Content Layout widget - Container which enables developers flexibility in implementing their own layout design.

**Enhancements**

**Feature**

**Description**

Widgets

Live List widget is now improved with added features and capabilities.

**Key Bug Fixes**

**Feature**

**Description**

Widgets

Suport UTF-8 added for button and label widget.

## Studio 7.0.2 Release Released Date: 12 November 2014

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0.2 Release** as compared to [Studio 7.0.1 Release](#701). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Layouts

Now, the Panel Layout comes with a collapsible header.

Widgets

Live Grid and Live Forms fields' caption property gets auto populated with the column headings from the table.

**Key Bug Fixes**

**Feature**

**Description**

File Upload

File Upload for IE9 works now.

Grid Widget

Improved functionality of Custom Expression.

## Studio 7.0.1 Release Released Date: 10 November 2014

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0.0-421 Release** as compared to [Studio 7.0.0-421 Release](#70421). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Libraries

The following libraries have been updated:

Angular JS from 1.2.13 to 1.3.1

Project File Explorer

Added Option to explore the complete project directory.

Enhanced Project File Explorer with option to add/delete folder or file.

Multiple file upload support. Now you can import resource files by selecting multiple files.

Project

Now one can Import/Export of project to and from WaveMaker Online.

Variables

Support for various data format using expressions has been added.

**Key Bug Fixes**

**Feature**

**Description**

Databases

The live grid variable for a table is deleted when the corresponding table in the database is deleted.

Variables

Sorting(ascending/descending & multi-column) support for Live variable has been added.

## Studio 7.0.0-421 Release Released Date: 4 November 2014Build Number: 7.0.0-421

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0.0-421 Release** as compared to [Studio 7.0.0-406 Release](#70406). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Libraries

The following libraries have been updated:

Bootstrap updated to 3.2

Angular UI Bootstrap from 0.10.0 to 0.11.2

Ace Editor builds from 1.1.2 to 1.1.7

Databases

Added feature to export database - data and schema.

Project

Now delete project and leave project options are available from the project dashboard. [Documentation](http://dev.wavemaker.com/learn/docs/docs/getting-started-2/ "Getting Started").

**Key Bug Fixes**

**Feature**

**Description**

Security

Enabled contributor of a project to handle widget security and logout screens.

Version Control

Only selected files will be reverted in the revert operation

Contributor will be able to perform CRUD operations on the database tables immediately after pulling changes.

## Studio 7.0.0-406 Release Released Date: 22 October 2014Build Number: 7.0.0-406

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0.0-406 Release** as compared to [Studio 7.0.0-400 Release](#70400). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Resources

Added support to read, edit and delete resources in the Services folder of the project.

Project

Added capability to import an exported project (zip file).

**Key Bug Fixes**

**Feature**

**Description**

Live Form

Support for input type password in the live-form editor.

## Studio 7.0.0-400 Release Released Date: 17 October 2014Build Number: 7.0.0-400

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0.0-400 Release** as compared to [Studio 7.0.0-389 Release](#70389). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Widgets

Added support for html characters in widget caption and description properties of the following widgets - accordion, tabs and label.

Live Grid

Form Layout property of Live Grid has two options - inline or dialog, which dictates the behavior of the Form at runtime.

**Key Bug Fixes**

**Feature**

**Description**

Security

Widget level security for tab and accordion widgets has been fixed.

Partial Pages

Appropriate message is displayed on the page if the partial page is unavailable for deletion..

Charts

Binding to a service variable shows up representational data in the design mode.

## Studio 7.0.0-389 Release Released Date: 13 October 2014Build Number: 7.0.0-389

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0.0-389 Release** as compared to [Studio 7.0 Release](#70). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Version Control for Projects

Capability to auto populate commit messages has been added.

Database Services

Support for MS-SQL for Import, Export and CRUD operations has been enabled.

Provision for user to provide Schema name for the data-model during export has been added.

**Key Bug Fixes**

**Feature**

**Description**

Web Services

Support for multiple query params with same name in a web service.

Variables and Widgets

Scope implementation for variables and widgets respective to their container pages, partials and prefabs.

Variables

Script Variable property is now retained for widgets.

Live-Variable now works with Update & Delete operations also.

**Known Issues**

**Feature**

**Description**

Security

Widget level security doesn't work for tab and accordion widget.

## Studio 7.0 Release Released Date: 16 September 2014Build Number: 7.0.0-363

Here is a summary of key features, known issues and bug fixes offered in **Studio 7.0.0 Release** as compared to [Studio 7.0 BETA-6 Release](/learn/docs/wavemaker-studio-beta-release-notes/#70Beta6 "WaveMaker Studio BETA Release Notes"). We hope you enjoy this release. **What's New**

**Feature**

**Description**

Integration with Enterprise Developer Network(EDN)

EDN is a common platform integrating all the WaveMaker products. It enables private enterprise developer network to find and join projects, collaborate with co-workers. _Sign in to Studio is now via EDN_

Version Control for Projects

Version Control is now enabled for Studio projects. Now, enterprise developers can set up and control their code base via a Git-based repository and synchronise their changes across the enterprise. Studio also provides a three-way merge to resolve conflicts thus enabling collaboration among the co-workers.

Performance

Improved page load times through minification and enabling static content caching.

**Key Bug Fixes**

**Feature**

**Description**

Widgets

Login Widget: Allowing custom events on Login Widget button.

Menu Widget: Live variable support enabled for binding widget dataset property.

Charts: Displaying fields in related objects for selected Live Variable's dataset, UI issues & performance optimization.

Data and Services

Data Navigator:Pagination enabled for data widgets (like grid, live-list etc.) bound to service variable.

Database Services: Auto-complete support in Query tab that displays table/entity & column/field names for NativeSQL/HQL queries.

**Known Issues**

**Feature**

**Description**

Data Binding

Usage of Variables and Widgets with same name from different components (partials and prefabs) will conflict. Names have to be unique.
