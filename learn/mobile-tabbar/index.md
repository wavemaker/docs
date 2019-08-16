---
title: "Mobile Tabbar"
id: ""
---

Tabbar provides a form of navigation between the pages. It comes as a part of page layout and is always at the bottom of the page.

:

- Tabbar comes as part of the page when the page layout with tabbar is selected. It is not available as a ‘drag n drop’ widget.
- cannot be added to a mobile tabbar.

is a list of anchor elements. Based on screen size, only limited number of anchor elements are visible. If the number of the anchors is more than the limit, then a more button is shown on right side. Upon clicking more, a dropdown with the remaining anchors is shown.

Following are the limits:

Size (px)

of anchors

< 480

4

\>= 480 and < 768

5

\>= 768 and < 1024

7

\>= 1024 and < 2048

10

\>= 2048

12

anchor requires a label, Icon (icon CSS class) and link. A JSON array containing this information has to be bound to dataset property of the widget, you can create a [Variable](/learn/app-development/variables/model-variable/) for the same. Corresponding property names should then be mapped for action label, action icon, and an action link. More Button label and icon are configurable via properties panel. See below for use case example.

[![](../assets/tabbar_props.png)](../assets/tabbar_props.png)

name is a unique identifier for the Tabbar. Special characters and spaces are not allowed in widget name.

this property to a variable or enter comma-separated values to populate the list of values to display.

Label

for tabbar items to be picked from the fields of the Dataset Value mentioned above or bound to a variable.

Icon

for tabbar items to be picked from the fields of the Dataset Value mentioned above or bound to a variable.

Link

for tabbar items to be picked from the fields of the Dataset Value mentioned above or bound to a variable.

determines whether or not a component is visible. It is a bindable property.

Button Icon Class

property sets the icon for the more button.

Button Label

the label displayed on more items button.

# Events

Following events can be used to modify the behavior of Tabbar:

- **select**: event listener to call when an anchor is clicked. Using this event user can write javascript code to execute an action, navigate to a page etc.. Three parameters are passed to the event listener:
    1. object,
    2. isolated scope of the widget and
    3. label of the anchor ($item)  on which event happened. _Example_:

$scope.form1Beforesubmit = function ($event, $isolateScope, $data) { 
//$isolateScope: $isolateScope of the form
//$data has the data of the all widgets inside the form. This data can be modified and validated before sending the request 

        function isValidData(data) {
            /\*restrict password to be minimum of 6 characters\*/
            if (data.password) {
                if (data.password.length < 6) {
                    return {
                        'error': "Password too small"
                    };
                }
            } else {
                return {
                    'error': "Password field required"
                };
            }
        }
        return isValidData($data)
};

# Cases

will create navigation for the following music app pages using tabbar.

(Assume that pages exist with above names)

## 1: Data

1. the on Workspace Toolbar, access Variables to create a New Model Variable.
2. the property to and check the **List** option. [![](../assets/tabbar_statvar.png)](../assets/tabbar_statvar.png)
3. the TEXT EDITOR under the JSON section to enter the following structure. This structure builds the list as given above. : In WaveMaker apps, link to an app page with name ‘pageName’ is ‘#/pageName’
    
    \[{
    	"label" : "Songs",
    	"icon" : "fa fa-music",
    	"link" : "#/Songs"
    },{
    	"label" : "Favorites",
    	"icon" : "wi wi-favorite",
    	"link" : "#/Favorites"
    },{
    	"label" : "Albums",
    	"icon" : "wi wi-video-library",
    	"link" : "#/Albums"
    },{
    	"label" : "Playlists",
    	"icon" : "wi wi-format-list-bulleted",
    	"link" : "#/Playlists"
    },{
    	"label" :"Equalizer",
    	"icon" : "wi wi-equalizer",
    	"link" : "#/Equalizer"
    },{
    	"label" :"Account",
    	"icon" : "wi wi-account-box",
    	"link" : "#/Account"
    }\]
    

## 2: Design

1. the tabbar and bind **Value** property to the _of the Model Variable_ created earlier [![](../assets/tabbar_bind.png)](../assets/tabbar_bind.png)
2. _label_, _icon_ and _link_ to corresponding fields from the Model Variable [![](../assets/tabbar_props_ex.png)](../assets/tabbar_props_ex.png)

## 3: Preview App

1. to preview the tabbar. [![](../assets/tabbar_run1.png)](../assets/tabbar_run1.png)
2. more button is clicked, the remaining anchors will be shown. [![](../assets/tabbar_run2.png)](../assets/tabbar_run2.png)

2 Mobile UI Design

- 2.1 Mobile Page Concepts
    - [Page Layouts](/learn/hybrid-mobile/mobile-page-concepts/#page-layouts)
    - [Page Navigation & Actions](/learn/hybrid-mobile/mobile-page-concepts/#page-navigation-actions)
    - [Page Transitions & Gestures](/learn/hybrid-mobile/mobile-page-concepts/#page-transitions-gestures)
- [2.2 Mobile Tabbar](#)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
    - [Use Cases](#use-cases)
- 2.3 Mobile Navbar
    - [Features](/learn/hybrid-mobile/mobile-navbar/#features)
    - [Properties](/learn/hybrid-mobile/mobile-navbar/#properties)
    - [Events](/learn/hybrid-mobile/mobile-navbar/#events)
    - [Use Cases](/learn/hybrid-mobile/mobile-navbar/#use-cases)
- 2.4 Mobile & Device Widgets
    - [Media List](/learn/app-development/widgets/mobile-widgets/media-list/)
    - [Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control/)
    - [Barcode Scanner](/learn/app-development/widgets/mobile-widgets/barcode-scanner/)
    - [Camera](/learn/app-development/widgets/mobile-widgets/camera/)
- 2.5 Gesture Support
    - [Swipe Gesture](/learn/hybrid-mobile/gesture-support/#swipe)
    - [Limitations](/learn/hybrid-mobile/gesture-support/#limit)
