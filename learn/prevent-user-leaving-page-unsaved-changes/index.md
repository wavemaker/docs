---
title: "Preventing User from Leaving the Page with Unsaved Changes"
id: "prevent-user-leaving-page-unsaved-changes"
---

In a WaveMaker app, pages have specific life cycle events. An onBeforePageLeave is a new event that allows you to perform certain checks before the user is about to navigate out of the page. This feature is available since the WaveMaker 10.0 version.

Following are the typical scenarios when this event is invoked:

- you navigate from active page to another page
- you reload the app
- , when you close the app browser tab

#### Use Case

The app should prevent users from exiting the page before they could:

- exit the page while filling up the form
- , navigate away from the active page before they save any changes to the form

the help of the onBeforePageLeave event, the app developer can add some checks and prevent the user from exiting the page.

You can define the event callback in the page script with the following script:

 = function() {
 // perform checks
 // to prevent page navigation return false;
}

a registration form page, the user should get a warning message, if the user has filled in some information and attempts to navigate away from the page.  achieve this, you can write the following lines of code in the page script.

 = function() {
    if(Page.Widgets.RegistrationForm.dirty) {
       return window.confirm(“You have unsaved changes, do you want to leave?”);
   }
}

## in app.js

If you want to handle multiple pages throughout the app, write the callback event in the app.js file, as below:

 = function(activePageName, activePageScope) {
  // perform checks
  // to prevent page navigation return false;
}

points to be aware of: 

the event is defined in app.js as well as on a page, then:

- event on the page will be invoked first before the one in app.js.
- the page event returns false, the navigation from the page will be prevented and the app.js event will not be invoked.
