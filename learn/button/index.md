---
title: "Button"
date: "2016-09-12"
---

indicates a possible user action. The button provides a styled clickable UI functionality with arbitrary content to indicate the different states.

button widget can trigger any of the following actions when it is clicked.

- to another page
- a database
- or hide a dialog window
- a JavaScript function
- a web service or Java method

[![](../assets/button_graphic.jpg)](../assets/button_graphic.jpg)

- **key**: The shortcut key property specifies a shortcut key to click the button. The way of accessing the shortcut key is varying in different browsers:
    
    key Trigger
    
    Explorer
    
    \[Alt\] + shortcut key
    
    \[Alt\] + shortcut key (_/Linux_)
    
    \[Control\] \[Alt\] + shortcut key ()
    
    \[Alt\] \[Shift\] + shortcut key (_/Linux_)
    
    \[Control\] \[Alt\] + shortcut key ()
    
- **/Show** properties: The business logic of an application often requires a certain button to be temporarily enabled/ disabled. WaveMaker button can be configured to the initially disabled or enabled by checking the show or disabled properties from behavior section.
- image: The button can accommodate an icon, which enhances the meaning of the text content. The widget provides two ways to add an icon with the class name or with a background image i.e image URL (usually a sprite).
    - **class**: In some cases, you may want to use a Button with no text and only an icon inside. You will be provided with two types of icon one is the wavicon and the other is the font awesome icon.
    - **Url**: Image icons are applied via the imageUrl property and are displayed as an img element.

### Class

the Style tab of Properties panel,  you can set the button style. You can also use the Conditional Class property to set the class based upon a condition. See here for [to](/learn/how-tos/use-conditional-class-property/) 

<iframe width="100%" height="450" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Buttons">Types</iframe>

### Size

the Style tab of Properties panel, you can also set the button size along with the style as \-primary btn-xs 

<iframe width="100%" height="400" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/ButtonSizes">Sizes</iframe>

caption is the text that the end user sees on the button. This property can be bound to any variable or another widget.

name is a unique identifier for the button. Special characters and spaces are not allowed in widget name.

the type of button:

- : for most click events,
- or : for customizing the Form reset and submit functionality

Value

to be displayed in the badge span for anchor and button.

text you enter for this property will be shown as a tooltip when the mouse hovers over this widget for _1.5 seconds. _ can be bound to a variable or another widget.

Index

tab index attribute specifies the tab order of an element. You can use this property to change the default tabbing order for widget access using the tab key. The value can range from 0 to 32767. The default is 0 and -1 makes the element non-focusable.

NOTE: In Safari browsers, by default, Tab highlights only text fields. To enable Tab functionality, in Safari Browser from Preferences -> Advanced -> Accessibility set the option "Press Tab to highlight each item on a webpage".

Key

to act as the Shortcut key. The shortcut key property specifies a key to click the button. The way to activate the shortcut key varies from browser to browser.

width of your widget can be specified in _, pt, px_ or _% (_ _50px, 75%)._

height of your widget can be specified in _, pt, px_ or _% (_ _50px, 75%)._

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

the disabled property is true (checked) the widget becomes display-only and user input will not be accepted. It can also set programmatically by binding it to a boolean type variable.

property controls the animation of an element. The animation is based on the [classes](https://daneden.github.io/animate.css/) and works only in the run mode.

Class

property defines the class of the icon that is applied to the button. You can use either Icon class or Icon URL.

Url

optional property allows you to add an icon to the left side of your button. You can give URL of the image. You can use either Icon class or Icon URL.

Width

property; but you will need this if you are using the button's iconUrl. Please enter the width of your icon. NOTE: It's best to specify size in pt(points), not percent.

Height

property; but you will need this if you are using the button's iconUrl. Please enter the height of your icon. NOTE: It's best to specify size in pt(points), not percent.

Margin

property; only has meaning if you specify the button's iconUrl. Values should all have "px" next to them. Use this to adjust the space between the icon and the button text.

Position

property; Property to set the position of icon in the widget - can be left, top or right

Align

property specifies how the elements should be aligned horizontally - left, center or right.

focus

event handler is called each time your element is focused.

blur

event handler is called each time your focus leaves your element.

**Events**

click

is an HTML button. It is used to generate a click event. For example, save button.

double click

event handler is called whenever the double click event is triggered on a widget.

mouse enter

event handler is called whenever the mouse enters the widget.

mouse leave

event handler is called whenever the mouse leaves the widget.

**Events**

tap

event handler is called whenever the widget is tapped.

double tap

event handler is called whenever the widget is double tapped.

**Events**

key down

event handler is called when the widget is in focus and a key is pressed.

key press

event handler is called when the widget is in focus and a key is pressed. This event will relay the character pressed

key up

event handler is called when the widget is in focus and a key is pressed and released.

# Cases

- button properties from <wm-button caption="Inbox" name="button1"></wm-button> To add hint to the given button from the markup <wm-button caption="Inbox" name="button1" hint="Sample Text"></wm-button>
- button properties from To Hide button1 use the following code snippet
    
    1.setWidgetProperty('show', false);
    
- Capture the show value
    
    (Page.Widgets.button1.show);
    

[3\. Form Widgets](/learn/app-development/widgets/widget-library/#form)

- [3.1 Button](#)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
    - [Use Cases](#use-cases)
- [3.2 Button Group](/learn/app-development/widgets/form/button-group/)
- [3.3 Calendar](/learn/app-development/widgets/form/calendar/)
- [3.4 Checkbox](/learn/app-development/widgets/form/checkbox/)
- [3.5 CheckboxSet](/learn/app-development/widgets/form/checkboxset/)
- [3.6 Chips](/learn/app-development/widgets/form-widgets/chips/)
- [3.7 Color Picker](/learn/app-development/widgets/form/color-picker/)
- [3.8 Currency](/learn/app-development/widgets/form/currency/)
- [3.9 Date](/learn/app-development/widgets/form/date/)
- [3.10 Datetime](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.11 FileUpload](/learn/app-development/widgets/form/file-upload/)
- [3.12 Number](/learn/app-development/widgets/form-widgets/number/)
- [3.13 Radioset](/learn/app-development/widgets/form/radioset/)
- [3.14 Rating](/learn/app-development/widgets/form/rating/)
- [3.15 Select](/learn/app-development/widgets/form/select/)
- [3.16 Select Locale](/learn/app-development/widgets/form/select-locale/)
- [3.17 Slider](/learn/app-development/widgets/form/slider/)
- [3.18 Switch](/learn/app-development/widgets/form/switch/)
- [3.19 Text](/learn/app-development/widgets/form/text/)
- [3.20 Textarea](/learn/app-development/widgets/form/textarea/)
- [3.21 Time](/learn/app-development/widgets/form-widgets/date-time-datetime/)
- [3.22 Toggle](/learn/app-development/widgets/form/toggle/)
