---
title: WaveMaker Release Notes 10.1.0
---
*WaveMakerOnline (WMO) released a new version with enhancements and big fixes.*

---
## New + Improved

*   Usability improvements to Security dialog. If your application does not require authentication, you can change SSL, CORS event settings without needing authentication or authorization - doc coming soon. 
*   Added support to server side variables for REST Services. Now, you can inject data like API keys, logged in user setting at server side environment without having to pass it from the client side environment. [#doc](/learn/app-development/app-security/securing-server-side-properties-rest-services/)
*   Apply Conditional Styles for Widgets in addition to Conditional Classes - doc coming soon.
*   New "on before render" callback function for Charts Widget --  access to underlying NVD3 Charts and perform advanced customizations to your chart objects - doc coming soon. 
*   Delete a Prefab from a Project - doc coming soon.
*   Library antisamy version updated to 1.5.8.
*   Added the onRender event to List Widget. [#doc](/learn/how-tos/onrender-event-list-widget/)
*   Updated Android target version to 28 as per google play store standard.
*   Push to private repositories instead of pushing to public repositories, including GitHub, BitBucket, GitLab. When you attempt to push to public repositories, you will see the following error message:

"Push to {repoName} public repository is not allowed, please enter a valid private repository"

**Googlemaps Prefab**

*   Use draggable Marker on the Googlemaps Prefab. [#doc](/learn/app-development/widgets/prefab/googlemaps/)
*   onMarkerMove event passes the marker details as function parameter.

## Fixes

**SAML**

*   Using SAML, logout from the application, will logout from the SAML identity provider, too. 
*   Supports SAML provider which uses [POST binding](https://en.wikipedia.org/wiki/SAML_2.0#SP_POST_Request;_IdP_POST_Response) for login and logout.
*   If your application uses SSO, the logged-in user variable can set after returning from the SSO login. 

**Sync plugin**

*   Supports binary files.
*   No authentication required for push, pull and sync commands. If the credentials fail, the command will prompt you to enter new credentials.
*   Can sync delete operations between studio and local workspace.

**WaveLens issues fixed**

*   Preview mobile apps in WaveLens when it has "X-WM-XSRF-TOKEN" for CSRF protection enabled.  
*   Trigger logout action when previewed on Wavelens - Mobile app.
*   Page navigation issues are fixed for the onTap event to move to another page.

## Customer Issues Addressed

**List Widget**

*   Issue with the "List item class name" property is fixed. 
*   Issue with "group by" property for selected items in script is fixed.

**All other fixes**

*   Allows binding to field name containing spaces. For example, "my name". Applies to Data field and Display field properties on Widgets: Select, Checkbox set, and more.
*   Tree Widget with the "on select" event as JavaScript with the input parameter $path issue is fixed.
*   Internationalization issues with currency Widget is fixed. 
*   onChangeEvent for file upload Widget issues are fixed. 
*   Form field using a "long" database field allows input of negative values.
*   HTML tags are allowed in Toaster notifications. For example, <br>.
*   Chart uses full height inside panel when the browser switches to full-screen mode.
*   Issues with the "onOpen" event callback for Dialog is fixed.
*   For Mobile apps, switching modes from online to offline issues with responsiveness is fixed.  
*   Server side pagination for data table with java service issue is fixed. 
*   In mobile tab bar, issues with the onSelect event undefined parameters: $item, $event is fixed.