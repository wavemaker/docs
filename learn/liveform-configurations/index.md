---
title: "Live Form - Configurations"
id: ""
---

The main features of a Live Form are as follows:

- **Title** and **Sub Heading** can be set for the Live Form
- **Default Form Data** can be set to value or bound to another widget like Data Table, List or Live Filter. These define the values to be displayed when the Live Form is first loaded
- **Dataset Value** defines the database entity on which the insert or update operations will be performed. This is set to the Variable selected in the data selection step while configuring the Live Form [![](../assets/liveform_props1.png)](../assets/liveform_props1.png)  [![](../assets/liveform_props2.png)](../assets/liveform_props2.png)
- For a Live Form in Dialog mode, the On Sucess event is set to trigger _dialog.close_ event. That is, by default after successful save of Form data the Form dialog will close. You can choose to disable this behavior by removing the On Success event. [![](../assets/lf_dialog_successevent.png)](../assets/lf_dialog_successevent.png)

The other features of a Live Form include:

- Set** Validation Type **at form level. It can be
    - _Default_: here all the failed validation messages will be shown under the corresponding field;
    - _HTML_: the HTML validations will be applied and displayed for the first failed field, the validation messages set at the field level will be displayed once the field loses focus;
    - _No Validations_: validations will not be performed in this case.
- Set the **Behavior** to:
    - _Editable_ or _Read-Only_
    - Enable or disable _Auto Complete_. Enabling Auto Complete will give suggestions in the form of a drop-down selection box to the user while entering the data at run time
- **Caption** properties in terms of _alignment_, _position_, and _size_
- **Message** Properties like
    - **Layout** - either _inline_ or in a _toaster_
    - **Message text** for display on _error_, _success_, _add_, _update_ and _deletion_

[![](../assets/liveform_settings.png)](../assets/liveform_settings.png)

< Layouts

Fields Configuration >

[1\. Live & Data Widgets](/learn/app-development/widgets/widget-library/#data-live)

- [1.1 Cards](/learn/app-development/widgets/datalive/cards/)
- [1.2 Data Table](/learn/app-development/widgets/datalive/data-table/)
- [1.3 Form](/learn/app-development/widgets/datalive/form/)
- [1.4 List](/learn/app-development/widgets/datalive/list/)
- [1.5 Live Form](/learn/app-development/widgets/datalive/live-form/)
    - [i. Data Source](/learn/app-development/widgets/datalive/live-form/live-form-data-source/)
    - [ii. Layouts](/learn/app-development/widgets/datalive/live-form/liveform-layouts/)
    - [iii. Configuration](/learn/app-development/widgets/datalive/live-form/liveform-configurations/)
    - [iv. Fields Configuration](/learn/app-development/widgets/datalive/live-form/fields-configuration/)
        - [○ Display Options](/learn/app-development/widgets/datalive/live-form/fields-configuration/#display)
        - [○ Validations](/learn/app-development/widgets/datalive/live-form/fields-configuration/#validations)
        - [○ Widget Usage](/learn/app-development/widgets/datalive/live-form/fields-configuration/#widgets)
    - [v. Actions](/learn/app-development/widgets/datalive/live-form/liveform-actions/)
    - [vi. Events & Methods](/learn/app-development/widgets/datalive/live-form/events-methods/)
        - [○ Events](/learn/app-development/widgets/datalive/live-form/events-methods/#events)
        - [○ Methods](/learn/app-development/widgets/datalive/live-form/events-methods/#methods)
    - [v. Use Cases](/learn/app-development/widgets/datalive/live-form/liveform-use-cases/)
- [1.6 Live Filter](/learn/app-development/widgets/datalive/live-filter/)
