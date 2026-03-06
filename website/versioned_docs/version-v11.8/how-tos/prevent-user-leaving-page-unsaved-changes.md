---
title: "Prevent Leaving Page with Unsaved Changes"
id: "prevent-user-leaving-page-unsaved-changes"
sidebar_label: "Leaving Page with Unsaved Changes"
---
---
In a WaveMaker app, pages have specific life cycle events. An `onBeforePageLeave` is an event that allows you to perform certain checks before you navigate out of a page. 

:::note
This feature is supported since WaveMaker 10.0 release.
:::

Following are the typical scenarios when this event is invoked.

- Before you navigate from active page to another page
- Before you reload the app
- Or, when you close the app browser tab

## Problem Use Case

The app should prevent users from exiting the page before they could:

- Accidentally exit the page while filling up a form.
- Or, navigate away from the active page before they save any changes to the form.

## Solution

With the help of the `onBeforePageLeave` event, the app developer can add some checks and prevent the user from exiting the page.

## Syntax

You can define the event callback in the page script with the following script.
```
Page.onBeforePageLeave  =  function()  {

// perform checks

// to prevent page navigation return false;

}
```

## Example

For a registration form page, the user should get a warning message, if the user has filled in some information and attempts to navigate away from the page. To achieve this, you can write the following lines of code in the page script.

```
Page.onBeforePageLeave  =  function()  {

if(Page.Widgets.RegistrationForm.dirty)  {

 return  window.confirm(“You have unsaved changes,  do  you want to  leave?”);

 }
 
}
```

## Usage in `app.js`

If you want to handle multiple pages throughout the app, write the callback event in the `app.js` file, as below:

```
App.onBeforePageLeave  =  function(activePageName,  activePageScope)  {

// perform checks

// to prevent page navigation return false;

}
```


:::important
If the event is defined in `app.js` as well as on a page, then the following applies.

- The event on the page will be invoked first before the one in `app.js`.
- If the page event returns false, the navigation from the page will be prevented and the `app.js` event will not be invoked.
:::

## See Also

[Page Navigation](/learn/app-development/ui-design/page-concepts/page-navigation)  
[Page Events](/learn/app-development/ui-design/page-concepts/page-events)  