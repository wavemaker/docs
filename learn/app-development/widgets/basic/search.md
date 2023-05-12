---
title: "Search"
id: "search"
---
---

WaveMaker allows you to add search capability via the **search widget**. Data Table widget has the **Enable Search** property which lets you add the search facility to your table.

In addition, you can use the **Search** widget for flexibility and control.

For the Search widget you can set the following properties:

- Bind the **Value** dataset property of the search widget to the variable created from a Database or Web Service.
- Set the **Search key** and **Label Value** properties to the column name you want to search by. 

:::note
The Label Value, and Image Source are bindable. For example, the Label Value can be bound to a field 'deptcode' or to a combination such as 'deptcode+name', using the expression option from the binding dialog.
:::

- Set the **Type** as:
    - _autocomplete_ which would present a dropdown list of values for the user to select from; or
    - _search_ (the default setting) where the filtered list of values is presented based on the user entry
- Bind the **outbound properties:**
    - **datavalue** - which contains the dataset returned by the search to be bound to Live list or Data Table,
    - **query** - search text entered by the user
    - **result** - which contain the list of matches i.e. matches that are displayed in the dropdown while typing (note: the type of result is based on selected datafield, if set to "All Fields" the complete object is returned) and
    - **show**.
- Use **JavaScript** - From the event tab, set the **onSubmit** event to JavaScript. The selected item can be accessed by '$event.data.item' property

## Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for your widget. |
| Type | Type of the widget can be set to <br/><br/> - _autocomplete_ which would present a dropdown list of values for the user to select from; or <br/> - _search_ (the default setting) where the filtered list of values is presented based on the user entry <br/><br/> **Note**: All the properties are the same for both types. |
| Placeholder | A placeholder is a text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user. |
| **Accessibility** |
| Hint | Any text or an HTML you enter for this property will be shown as a tooltip if the mouse hovers over this widget for 1.5 seconds. |
| Tab index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable. <br/> <br/> **Note**: In Safari browsers, by default, Tab highlights only text fields. <br/><br/> To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| Shortcut Key | The shortcut key property specifies a shortcut key to activate/focus an element. The way of accessing the shortcut key is varying in different browsers Internet Explorer - [Alt] + shortcutkey, Chrome - [Alt] + shortcutkey (Windows/Linux) [Control] [Alt] + shortcutkey (MAC), Firefox - [Alt] [Shift] + shortcutkey (Windows/Linux) [Control] [Alt] + shortcutkey (MAC), Safari - [Alt] + shortcutkey (Windows) [Control] [Alt] + shortcutkey (MAC) |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Dataset** |
| Value | Set this property to a variable to populate the list of values to display. |
| Search Key | Property to be searched upon, in the list object. |
| Label Value | This is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget. |
| Picture Source | An image which displays along with the Label Value |
| Data field | This property sets the dataValue to be returned by a select editor when the list is populated using the dataSet property. |
| Order by | Field order |
| Match Mode | Specifies how to apply the filter on fields. For examples, match the query anywhere (or start or end) in the string. <br/><br/> Options: startignorecase, start, endignorecase, end, anywhereignorecase, anywhere, exactignorecase and exact. <br/><br/> Default matchmode: startignorecase <br/><br/> Examples: <br/> 1. start: "Wa" would match "WaveMaker" <br/> 2. end: "Maker" would match "WaveMaker" <br/> 3. anywhere: "ve" would match "WaveMaker" <br/> |
| **Default Value** |
| Value | This is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the data value returned by the widget. |
| **Display Format** |
| Limit | Limits the search results to be displayed in the auto-complete. |
| **Validation** |
| Required | A required editor in wm.LiveForm may refuse to save without a required field. |
| **Behavior** |
| Read Only | Selecting this checkbox property prevents the user from being able to change the data value of a widget. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Show clear | On setting `show clear` to true, the user is provided with an option to clear the input value in the search field. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred until the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Disabled | If the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only. |
| Min Chars  | The minimum number of characters to be entered by the user before the search query is triggered. The value should be greater than 0. The default value is 1. |
| Delay Time | Delay (in ms) after which the query gets triggered when the last character is typed by the user. Default delay is 250 ms. This delay is for performance optimization to reduce multiple network calls. |
| **Graphics** |
| Picture Width | Using this property configure the width of the picture that is shown in typeahead results' dropdown. Default value is set to '16px'. |
| **Message** |
| Data loading message | This message will be displayed when waiting for data to load. |
| Data complete message | This message will be displayed when there is no more data to load. |

## Events

| Event | Description |
| --- | --- |
| Change | This event handler is called each time your element's value changes. |
| On Focus | This event handler is called each time your element is focused. |
| On Blur | This event handler is called each time your focus leaves your element. |
| **Callback Events** |
| On Submit | This event handler is called whenever a submit event is triggered. |
| On Select | This event handler is called when the tab is selected |
| On Before Service Call | This event is triggered before sending the service call for fetching the search results. _inputData_ can be modified in the event. |
