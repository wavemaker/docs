---
title: "WaveMaker Best Practices"
id: "wavemaker-best-practices"
---

Best Practices to follow while building apps using WaveMaker.   Responsive Web Apps

WaveMaker apps can run on the mobile browsers. The browsers on these devices have limited resources to render and run JavaScript logic. Below are some hand rules for achieving design and performance. The same can be applied for any web application.

- Ideally for good user experience you should have **one task per screen/page**. The application functionality should be broken into smaller tasks and design one page for each of these tasks. Page load will help:
    - managing service call
    - less code for compilation
    - back button on device for navigation
- Page size can be optimized using the records per request property for variables rendering data on those pages.
- Avoid complex user interface for repeatable items like list
- Load small sized images
- Avoid using dialog or popups. Ideally dialogs in mobile application are to be used only for notification purposes.
- Avoid inline styles and delegating the style functionality to CSS classes

#### Doc Reference

[App Building Essentials](/learn/jump-start/jump-start-app-essentials/)   Page Layouts Page Layouts help you design app pages. By default there are six layouts provided, choose one as per your app needs:

- Use **Blank layout** for full screen UI eg. Login screen
- Use **Layout with header & footer** for pages without any links for navigation e.g. landing page of application
- Use **Layout with header, topnav & footer** for pages with primary navigation links on top
- Use **Layout with header, left-panel & footer** for pages with primary navigation links on left
- Use **Layout with header, topnav, left-panel & footer** for pages with primary navigation links on top and contextual content /navigation on left
- Use **Layout with header, topnav, left-panel, right-panel & footer** for pages with primary navigation links on top, contextual content /navigation on left and a site map or reference links on the right.

**Additional Tips**:

- It is recommended to keep only one navigation panel either top or left
- Do not include two headers or two left panels for the same page
- Use square logo in the header for better resizing in mobile and web browsers
- Avoid more than 7 links/actions in navigation bar

#### Doc Reference

- [Page Layouts](/learn/app-development/ui-design/page-concepts/page-layouts/)

  Page Structure

Page is designed using various widgets. Proper placement of these widgets along with proper responsive behavior is of essence when building web responsive apps. For this purpose, WaveMaker offres a wide range of Container Widgets. Use them judiciously for maximum responsive benefits. Following are guidelines in using these container widgets.

- Use **Grid Layout** for responsive UI. WaveMaker uses 12-column grid layout defined by bootstrap for responsive design, you can customize this layout using the Grid Layout container.
- Use **Accordion** for:
    - progressive disclosure of long wizards thus reducing the number of pages,
    - when the content must fit on one screen height,
    - questionnaires where you want to be able to show answers or exit quickly.For example, checkout-type transactions.
- Use **Tabs** to:
    - alternate between views within the same context
    - when users do not need to see the entire content simultaneously,Tabs have unlimited height and they can span a number of screens
- Use **Panel** for an auxiliary window that contains controls and options that affect the active screen content or selection
- Use **Tiles** for showing less but important information like aggregated information or call to action. Tiles are mostly used in groups and Layout Grid can be used in arranging Tiles
- Use **Container** for multi-purpose, lightweight elements which can load the content from partial pages. They can be positioned absolute in the parent container and need not have any structured information.

#### Doc Reference

- [Container Widgets](/learn/app-development/widgets/widget-library/#container)

  Version Control

Version control is the process of tracking and controlling changes to a project’s files, which includes source code, documentation, and web pages. Subversion and Git are examples of such version control systems. WaveMaker includes an integrated version control system hosted on GitLab. In this document we look into the best practices to avoid conflicts. **Conflict Prevention** When multiple users are working on the same project following practices can help reduce conflict situations:

- **Pull before push**: Before starting always Pull from the Stash, resolve conflicts if any and then start working.
- **Frequent pushes**: Keep pushing changes frequently, with proper versioning and comments for easy tracking and reverts, if needed.
- **Divide and conquer**: Ideally, each developer should be working on separate pages within the app. In case of overlap, ensure that they are not working on the same widget in the shared page.
- **Database tips**: When working with an external database, it is advisable to make any database design related changes at the external database and have the developers re-import the database. Though it is possible to make changes from the database designer within WaveMaker, it might lead to merge conflicts when not done properly.
- **Separation of intent**: For other services, like Java, security etc., having one developer responsible for each of these services helps in avoiding conflict situations.

#### Doc Reference

- [VCS](/learn/app-development/dev-integration/developer-collaboration/#vcs)
