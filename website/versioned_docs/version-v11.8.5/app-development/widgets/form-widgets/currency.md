---
title: "Currency"
id: "currency"
---
---
**Currency** widget is a special text widget to input the currency type data. This widget will change the display format based on the currency type.

<iframe width="100%" height="250" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Currency">Currency</iframe>

## Properties

| **Property** | **Description** |
| --- | --- |
| Name | The name is a unique identifier for Currency widget. |
| Placeholder | A placeholder is text to show in the editor when there is no value. A common use of this is a search box that says in faint gray italicized text "Search..." which disappears as soon as the user starts to edit the text box. This is a useful alternative to a caption if you are constrained in space and asking for something simple of the user. |
| Currency | Currency determines which currency symbol should be shown for the currency widget. Choose from the available list. |
| **Accessibility** |
| Hint | Any text you enter for this property will be shown as a tooltip when the mouse hovers over this widget for _1.5 seconds. _It can be bound to a variable or another widget. |
| Tab Index | The tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.    NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage". |
| Shortcut Key | The shortcut key property specifies a shortcut key to activate/focus an element. (*[See below for details](#shortcut)) |
| **Layout** |
| Width | The width of your widget can be specified in px or % (i.e 50px, 75%). |
| Height | The height of your widget can be specified in px or % (i.e 50px, 75%). |
| **Default Value** |
| Value | This is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget. |
| Minimum Value | Enter minimum number. This property applies when the type is a number. |
| Maximum Value | Enter maximum number. This property applies when the type is a number. |
| Step | Use the stepper to increment/decrement the input value by the specified step interval. Example: if step='3', legal numbers could be -3, 0, 3, 6, etc. |
| **Validation** |
| Required | A required editor in wm.LiveForm may refuse to save without a required field. |
| **Behavior** |
| Read Only | Selecting this checkbox property prevents the user from being able to change the data value of a widget. |
| Show | Showing determines whether or not a component is visible. It is a bindable property. |
| Load on Demand (visible only when show property is bound to a variable) | When this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately. |
| Disabled | If the disabled property is true (checked) the value of the editor cannot change. The widget becomes display-only. |
| Allow Trailing Zeros | This property specifies whether to keep trailing zeros after decimal point or not.|

**Shortcut key**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:

| Browser | Shortcutkey Trigger |
| --- | --- |
| Internet Explorer | [Alt] + shortcut key |
| Chrome | [Alt] + shortcut key (_Windows/Linux_) |
|  | [Control] [Alt] + shortcut key (_MAC_) |
| Firefox | [Alt] [Shift] + shortcut key (_Windows/Linux_) |
|  | [Control] [Alt] + shortcut key (_MAC_) |

## Events

| **Event** | **Description** |
| --- | --- |
| Change | This event handler is called each time your element's value changes. |
| On focus | This event handler is called each time your element is focused. |
| On blur | This event handler is called each time your focus leaves your element. |
| **Mouse Events** |
| On click | This event handler is called whenever the click event is triggered on a widget. |
| On mouse enter | This event handler is called whenever the mouse enters the widget. |
| On mouse leave | This event handler is called whenever the mouse leaves the widget. |
| **Touch Events** |
| On tap | This event handler is called whenever the tap event is triggered on a widget. |

