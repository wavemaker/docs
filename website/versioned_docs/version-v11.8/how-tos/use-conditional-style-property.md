---
title: "How to use Conditional Style Property"
id: "use-conditional-style-property"
---
---
The conditional style settings allow you to bind expressions to the style property. The conditional property applies to the widgets specified below, and it is similar to the Conditional Class property.

## Syntax

```
{‘CSSpropertyName’:  ‘valueExpression’}
```
## Example

```
{‘color’: ‘red’}
{‘color’: Widgets.colorPicker1.datavalue}
{‘background’: Page.Variables.MyVariable.dataSet.status === ‘pending’ ? ‘yellow’: ‘green’}
{‘color’: ‘red’, ‘font-size’: ‘30px’, ‘background’: Page.Variables.MyVariable.dataSet.status === ‘pending’? ‘blue’: ‘green’}
```

The property adds to the widget that has conditional class property.

- Anchor
- Button
- Label
- Icon
- Checkbox
- Picture
- Container
- Panel
- Tile

The editable options being inline or dialog-based. Data Table provides a tabular view for database Entities or API response data.[#docs](/learn/app-development/services/database-services/database-services)

Database Enhancements **Working with databases**:

- Database Import has been renamed to **Connect to Database,** to clearly indicate that the database schema is imported into WaveMaker applications by directly connecting to the database. [#docs](/learn/app-development/services/database-services/working-with-databases)
- **Create Database** dialog now includes option to import of a script file.
- Database columns can be configured to be User defined, Server defined and DB defined types
    - User defined properties are passed on from the frontend layer to the backend services through API.
    - Server defined properties take the values configured by the backend service and are not passed on through API. e.g.: Auditing details for maintaining create/update time for every record.
    - DB defined properties take the default values provided during creation of DB schema
- Introducing New **identity generator** - “UNIQUE ID” for string types for MS SQL Server only. An identity generator defines the value of the column in database table while inserting new records into it.

Googlemaps PrefabIntroducing new map type - **Heatmap.**

The Googlemaps Prefab can now be used to depict three types of maps:

1. Markers - provide visual markets for given data set of locations across the globe
2. Heatmap - provides a heat map based on the locations provided, usually adding a colored layer with gradient indicating intensity. e.g.: heatmap of areas with most number of restaurants or most crimes reported in the last year etc.
3. Route - displays route between given origin and destination points, adds traffic layer and wayback points if required.

Usability Enhancements

1. **Terminology changes:** Following are the changes related to widgets and property naming conventions
    - _Live_ or _Data Grid_ renamed to **Data Table**
    - _LiveList_ widget has been renamed to **List**
    - Card based templates offered by the LiveList have been moved out to the new widget **Cards**
    - **Chart** widget properties have been moved to _Advanced Settings_
    - Tab Order, Hint, Help Text, Shortcut Key properties are moved to the Accessibility group in Properties Panel
    - Badge Type and Value properties for applicable widgets now show up in Basic Properties group
2. Working with multiple dialogs is now made easier by providing tab based switching to different dialogs in design mode, within canvas area.
3. DB Widgets are removed from the widgets panel from this release, they offered same functionality as Data Table or List widgets with pre-defined data-set binding to a specific Entity. These have been removed for the reasons of redundancy.

Known Issues

1. **Googlemaps Prefab**: The new projects deployed to external server will need the API Key in order to use Maps. The old projects will continue to work until there are more updates from google. This is due to the policy change updates from Google regarding the Maps API from June 22. Please [refer here](http://googlegeodevelopers.blogspot.in/2016/06/building-for-scale-updates-to-google.html) for more information on the Google Policy change. This issue will be addressed in future releases. For now the following workaround will enable the Googlemaps:
    1. Locate and open the config.json file, you will find it at /app/prefabs/googlemaps/config.json
    2. You will find the following code: "scripts": [ "https://maps.googleapis.com/maps/api/js?sensor=false&libraries=places,visualization,drawing,geometry" ],
    3. Add _key=YOUR_API_KEY&_ as shown below: YOUR_API_KEY is the key you obtain once you register your app at Google "scripts": [ "https://maps.googleapis.com/maps/api/js?&ampkey=YOUR_API_KEY&amp;sensor=false&libraries=places,visualization,drawing,geometry" ],

Technology Stack for WaveMaker 8.2.3

### UI Frameworks

| Description | JS Library | Version |
| --- | --- | --- |
| JS Binding | jquery | 2.2.3 |
|  | jquery-ui* | 1.11.4 |
| MVC Framework | angular | 1.5.5 |
|  | angular-ui-bootstrap | 1.3.2 |
| Editor | ace-editor | 1.2.2 |
| Styles | bootstrap | 3.3.6 |
| Charting | d3 | 3.5.17 |
|  | nvd3 | 1.8.3 |
| CORS support, prefabs | xdomain | 0.7.5 |
| Built-in functions | lodash | 4.12.0 |
| Device support, gestures | hammerjs | 2.0.8 |

*Optimised jQuery-UI library excluding unwanted components like accordion, datepicker, dialog, progressbar, spinner, tabs, and all jQuery-UI Effects.

### Run Time Environment

| Description | Version |
| --- | --- |
| JDK | 7.0 |
| Tomcat | 6.0 |

### Back-end Frameworks

| Description | Java Library | Version |
| --- | --- | --- |
|  | Spring Framework | 4.2.o |
| Security framework | Spring Security | 3.2.3 |
| Java JSON utilities | Gson | 2.2.4 |
| DB Persistence library | Hibernate | 4.3.11 |
| Sample database | HSQL | 2.3.3 |
| JSON library | Jackson | 2.6.3 |
| Logging framework | SLF4j | 1.7.12 |
| Http client library | HttpComponents | client-4.3.3, core-4.3.2, mime-4.2.5 |
| REST API annotations | Swagger | 1.3.10 |
| Logging framework | Log4j | 1.2.17 |
 If you already have registered for Studio 7.5.0, you can use the same credentials, else you need to register.
5. How do I uninstall 7.5.0?
    - Uninstall option is given in the desktop installation. But be aware your projects will be deleted on uninstall of Studio 7.5.0, if you have selected the Force delete option.
6. Why am I getting "HTTP 404 Error"?
    - Due to caching problems, some current 7.5 users might get a _HTTP 404 Error_. In such cases clearing the cache would work or change the url _" /wavemaker/app/index.html"_ to _" /wavemaker/studio/index.html#projects/"_
7. Where can I find the release notes?
    - WaveMaker Online release notes are same as that for Desktop version and can be found at http://www.wavemaker.com/learn/docs/Studio/release-notes/. **Note: Desktop release 7.7 includes the enhancements for both 7.7.0 and 7.7.1 of WaveMaker Online release.**
8. Why are my databases from 7.5/7.6 not working in 7.7?
    - If your existing applications use database with date/time/timestamp related data fields, these applications need the database to be re-imported to avail of the new features.
9. Why import of SQL Server/Oracle databases not working?
    - For SQL Server and Oracle database import, the respective driver jar files need to be imported to ..studioWEB-INFlib and into the project using that db.
