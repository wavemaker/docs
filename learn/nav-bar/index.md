---
title: "Nav Bar"
id: "nav-bar"
---

![](../assets/laptop.png)  : Nav Bar is available only for web responsive apps.

**Bar Widget** can be used to create responsive navigation header for your website or application. These responsive navbars are initially collapsed on devices having small viewports like cell-phones but expand when user click the toggle button. However, it will be horizontal as normal on the medium and large devices like laptop or desktop.

can also create different variations of the navbar such as navbars with drop-down menus and search boxes as well as fixed positioned navbar with much less effort.

<iframe width="100%" height="100" style="background-color: snow;" allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/Navbar"></iframe>

**Nav Bar** widget is used in the implementation of the default  when the [layout](/learn/app-development/ui-design/page-concepts/page-layouts/) is chosen to include the same. Following features are available:

1.  and  the navbar can be specified
2. _widgets_ are provided and each can be customized to include Anchor, Menu, Popover, Button. Each of these nav widgets is aligned to the left and right of the Nav Bar. [here for nav widget usage](/learn/app-development/widgets/navigation/nav/)

the title of the Navbar. This name is used for the first (home) link of the navbar.

name is a unique identifier for Navbar.

Link

property can be used to specify the URL for the home link. By default, this is set to the Home page set in the Project Configuration dialog.

height of your widget can be specified in px or % (i.e 50px, 75%).

Source

bindable property specifies the source for the brand image. The source can be either a file or a URL:

- : enter the directory and filename for the image to display (supported file types include .jpg, .gif and .png). By default, WaveMaker looks for images in the src/main/webapp directory of the project.
- : enter a URL to any internet-accessible image. To display the file, foo.jpg, in the project directory src/main/webapp/resources/images/imagelists/, enter the following into the source property:resources/images/imagelists/foo.jpg or simply foo.jpg

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

icon

property sets the icon for the menu button that will appear in the mobile layout ONLY.

[6\. Navigation Widgets](/learn/app-development/widgets/widget-library/#nav-widgets)

- [6.1 Breadcrumb](/learn/app-development/widgets/navigation/breadcrumb/)
- [6.2 Dropdown Menu](/learn/app-development/widgets/navigation/dropdown-menu/)
- [6.3 Nav](/learn/app-development/widgets/navigation/nav/)
- [6.4 Nav Bar](/learn/app-development/widgets/navigation/nav-bar/)
    - [Properties](#properties)
- [6.5 Popover](/learn/app-development/widgets/navigation/popover/)
