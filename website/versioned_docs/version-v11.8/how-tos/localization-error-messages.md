---
title: "Localization of Error Messages"
id: "localization-error-messages"
---

App Localization is the process of rendering your app in multiple languages. WaveMaker allows you to create a dictionary of localized messages so that users can change the language of the application to experience the application in their language.

This capability can be extended to error messages returned by the server. This document explains the approach to be followed to set and display the error messages returned by the web service server as localized messages.**Prerequisite**

Ensure that the error message returned by the web service server meets the following criteria:

- It is mandatory that the error message contains error object, _JSON object_, with the errors object, as shown in the example below.
- _messageKey_ is the key value that should be defined in the i18n file as shown in the steps below.
- _id_, _message_ and _parameters_ are optional and can be sent for detailed logging of exception.

{
  "errors": {
    "error": [
      {
        "id": null,
        "messageKey": "com.wavemaker.studio.json$UnexpectedError",
        "message": null,
        "parameters": [
          "org.hibernate.hql.internal.ast.QuerySyntaxException: unexpected AST node: asdasd near line 1, column 52 [select count(*) from com.testing.hrdb.User where   asdasd]"
        ]
      }
    ]
  }
}

**Steps**

1. The _messageKey_ sent in the above error format needs to be added in the localization i.e., i18n dialog
    
    - for this open the [I18N Dialog](http://[supsystic-show-popup id=125])
    - add language using the Manage Language option, if not added already
    - add the message key and the appropriate message for the multiple languages.
    
    [![](/learn/assets/locale_error_msg.png)](/learn/assets/locale_error_msg.png)
2. As can be seen in the above screenshot, the English version of the error message is “**Unexpected error "${0}"**,please **check server logs for more information**” where “_${0}_” in the message will be replaced by the “_parameters_” key returned in the error message JSON. Hence, as per the above sample error response shown, the message would be displayed as: “**Unexpected error "org.hibernate.hql.internal.ast.QuerySyntaxException: unexpected AST node: asdasd near line 1, column 52 [select count(*) from com.testing.hrdb.User where asdasd]" ,please check server logs for more information**”

[Localization Cases](/learn/app-development/ui-design/use-cases-ui-design/)

- [1. Localization in WaveMaker Apps](/learn/how-tos/localization-wavemaker-apps/)
- [2. Localization of Error Messages](#)
- [3. Localization of Data Table Column Headings](/learn/how-tos/localization-data-table-column-headings/)
