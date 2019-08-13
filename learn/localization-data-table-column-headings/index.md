---
title: "Localization of Data Table Column Headings"
id: "localization-data-table-column-headings"
---

App Localization is the process of rendering your app in multiple languages. WaveMaker allows you to create a dictionary of localized messages so that users can change the language of the application to experience the application in their language.

This capability can be extended to localize the column headings of a Data Table.

- app with a Data Table.

1. 1. column names need to be added in the localization i.e., i18n dialog as message keys
        
        - this open the [18N Dialog](http://[supsystic-show-popup id=125])
        - language using the Manage Language option, if not added already
        - the column names as message key in multiple languages.
        
        [![](../assets/locale_dt1.png)](../assets/locale_dt1.png)
    2. the Advanced Settings of the data table widget and navigate to the Columns tab. [![](../assets/locale_dt2.png)](../assets/locale_dt2.png)
    3. the respective message keys to the "Title" property of the columns. [![](../assets/locale_dt3.png)](../assets/locale_dt3.png)
    4. and Preview the application. At runtime, on changing the locale from the Select Locale widget, the column headers for the data table widget will display the respective localized values.

[Cases](/learn/app-development/ui-design/use-cases-ui-design/)

- [1\. Localization in WaveMaker Apps](/learn/how-tos/localization-wavemaker-apps/)
- [2\. Localization of Error Messages](/learn/how-tos/localization-error-messages/)
- 3\. Localization of Data Table Column Headings
