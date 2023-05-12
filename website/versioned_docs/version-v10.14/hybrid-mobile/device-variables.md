---
title: "Device Variables"
id: "device-variables"
---
---

**Device Variables** are specific to Mobile App projects. These are useful in performing operations specific to a Mobile Device like taking a picture and getting its path, select a contact, add events to a calendar, etc.

[![](/learn/assets/var_sel_mobile.png)](/learn/assets/var_sel_mobile.png)

[![](/learn/assets/var_new_mobile.png)](/learn/assets/var_new_mobile.png)

## Services

**Service** specifies the target service to be used. Each service is targeted to perform a set of operations for a feature. Available services are:

- **Calendar** – you can use this service to add, remove and list events in your phone calendar. The event details would include title, notes, location, start and end times.
- **Camera** – you can use this to capture an image or a video
- **Contacts** – you can use this variable to list the contacts on your phone. You can apply a filter on the list retrieved.
- **Datasync **- you can use this service to sync data
- **Device** – you can use this service to handle your mobile device features like vibrate, get connection type, model, OS, OS version etc.
- **File** – you can upload files to your mobile device
- **Scan** – can be used to access the barcode scanner.

## Operations

Based upon the service selected various operations are available.

<table class="reference notranslate"><tbody><tr><td><p style={{textAlign: 'left'}}><a href="#calendar">Calendar Service Operations</a></p><div></div><table class="reference notranslate"><tbody><tr><td><a href="#createEvent">createEvent</a></td><td><a href="#deleteEvent">deleteEvent</a></td><td><a href="#getEvents">getEvents</a></td></tr></tbody></table></td></tr><tr><td><p style={{textAlign: 'left'}}><a href="#camera">Camera Service Operations</a></p><div></div><table class="reference notranslate"><tbody><tr><td><a href="#captureImage">captureImage</a></td><td><a href="#captureVideo">captureVideo</a></td></tr></tbody></table></td></tr><tr><td><p style={{textAlign: 'left'}}><a href="#device">Contacts Service Operations</a></p><div></div><table class="reference notranslate"><tbody><tr><td><a href="#getContacts">getContacts</a></td></tr></tbody></table></td></tr><tr><td><p style={{textAlign: 'left'}}><a href="#device">Datasync Service Operations</a></p><div></div><table class="reference notranslate"><tbody><tr><td><a href="#exportDB">exportDB</a></td><td><a href="#getOfflineChanges">getOfflineChanges</a></td><td><a href="#importDB">importDB</a></td></tr><tr><td><a href="#pull">Pull</a></td><td><a href="#push">Push</a></td></tr><tr><td><a href="#lastPullInfo">lastPullInfo</a></td><td><a href="#lastPushInfo">lastPushInfo</a></td></tr></tbody></table></td></tr><tr><td><p style={{textAlign: 'left'}}><a href="#device">Device Service Operations</a></p><div></div><table class="reference notranslate"><tbody><tr><td><a href="#getAppInfo">getAppInfo</a></td><td><a href="#getCurrentGeoPosition">getCurrentGeoPosition</a></td><td><a href="#getDeviceInfo">getDeviceInfo</a></td></tr><tr><td><a href="#getNetworkInfo">getNetworkInfo</a></td><td><a href="#vibrate">vibrate</a></td></tr><tr><td><a href="#goOnline">goOnline</a></td><td><a href="#goOffline">goOffline</a></td></tr></tbody></table></td></tr><tr><td><p style={{textAlign: 'left'}}><a href="#file">File Service Operations</a></p><div></div><table class="reference notranslate"><tbody><tr><td><a href="#upload">upload</a></td><td><a href="#openfile">OpenFile</a></td></tr></tbody></table></td></tr><tr><td><p style={{textAlign: 'left'}}><a href="#scan">Scan Service Operations</a></p><div></div><table class="reference notranslate"><tbody><tr><td><a href="#scanBarCode">scanBarCode</a></td></tr></tbody></table></td></tr></tbody></table>

### Calendar Service Operations

**createEvent**: Creates calendar event in device.

| **Input Parameter** (from Data Tab) | **Description**                                | **Sample**                                                 |
| ----------------------------------- | ---------------------------------------------- | ---------------------------------------------------------- |
| Event Title                         | specifies the event title                      | ‘Space Race’                                               |
| Event Notes                         | represents notes related to the event          | ‘Bring Sandwiches’                                         |
| Event Location                      | specifies the event location                   | ‘The Moon’                                                 |
| Event Start                         | specifies the start date and time of the event | 2016-09-20 10:35:38 AM (select value from date time input) |
| Event End                           | specifies the end date and time  of the event  | 2016-09-25 08:35:38 PM (select value from date time input) |

**deleteEvent**: Deletes the calendar event in device satisfying the provided input, any combination of the below-mentioned parameters

| **Filter Parameter** (from Data Tab) | **Description**                       | **Sample**                                                 |
| ------------------------------------ | ------------------------------------- | ---------------------------------------------------------- |
| Event Title                          | specifies the event title             | ‘Space Race’                                               |
| Event Notes                          | represents notes related to the event | ‘Bring Sandwiches’                                         |
| Event Location                       | specifies the event location          | ‘The Moon’                                                 |
| Start Date                           | specifies the start date of the event | 2016-09-20 10:35:38 AM (select value from date time input) |
| End Date                             | specifies the end date of the event   | 2016-09-25 08:35:38 PM (select value from date time input) |

**getEvents**: Retrieves the calendar events in device satisfying the provided input, any combination of the below-mentioned parameters. Returns array of objects, each object containing the same fields as input parameters.

| **Behavior**                         | **Description**                                                                                                                        | **Sample**                                                 |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Update data on input change          | If checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the variable. | checked or unchecked                                       |
| Request data on page load            | If checked, 'Page' variable will be triggered on page load while 'Application' variable will be triggered on application load          | checked or unchecked                                       |
| **Filter Parameter** (from Data Tab) | **Description**                                                                                                                        | **Sample**                                                 |
| Event Title                          | specifies the event title                                                                                                              | ‘Space Race’                                               |
| Event Notes                          | represents notes related to the event                                                                                                  | ‘Bring Sandwiches’                                         |
| Event Location                       | specifies the event location                                                                                                           | ‘The Moon’                                                 |
| Start Date                           | specifies the start date of the event                                                                                                  | 2016-09-20 10:35:38 AM (select value from date time input) |
| End Date                             | specifies the end date of the event                                                                                                    | 2016-09-25 08:35:38 PM (select value from date time input) |

### Camera Service Operations

**captureImage**: Capture image from the device camera

| **Input Parameter** (from Data Tab) | **Description**                                                                                                                                                         | **Sample**                                   |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Allow Edit                          | allows simple editing of image before selection                                                                                                                         | true (default), false                        |
| Quality                             | represents the quality of saved image, expressed as a range of 0-100, where 100 is typically full resolution with no loss of file compression. The default value is 80. | 80                                           |
| Encoding Type                       | set the returned image file’s encoding.                                                                                                                                 | JPEG (default) or PNG                        |
| Correct Orientation                 | Rotate the image to correct for the orientation of the device during capture.                                                                                           | true(default) or false                       |
| Target Width*                       | width in pixels to scale image.                                                                                                                                         | 100 (only when required to get small images) |
| Target Height*                      | height in pixels to scale image.                                                                                                                                        | 100 (only when required to get small images) |

:::note
To get smaller images, you can return a resized image by passing both targetHeight and targetWidth values. If these values are not set, it returns the original image captured by the camera.
:::

**captureVideo**: to capture video using the device camera.

### Contacts Service Operations

**getContacts**: Retrieves the device contacts list

| **Input Parameter** (from Data Tab) | **Description**                                                                                                                                                                                                                                                                          |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Filter                              | This string field can be used as a search filter when querying the contacts database. If provided, a case-insensitive, partial value match is applied to each field specified in the contactsFields parameter. If there is a match for any of specified fields, the contact is returned. |
| **Behavior**:                       | **Description**                                                                                                                                                                                                                                                                          |
| Update data on input change         | If checked, the component will be triggered automatically on the change of input data (as mentioned in the data tab) for the variable.                                                                                                                                                   |
| Request data on page load           | If checked, 'Page' variable will be triggered on page load while 'Application' variable will be triggered on application load.                                                                                                                                                           |

**Output**: Returns array of objects, each object containing phoneNumber and displayName fields. 

**Example**: Sample Input: “Bob” (contact name) Result: Retrieves all the contacts containing string “Bob”

### DataSync Service Operations

**exportDB**: Offline database is saved as zip in ‘Downloads’ folder in Android. In IOS, zip is stored in ‘Documents’ folder so that one can export from iPhone via iTunes. For the file to be visible in iTunes, File sharing needs to be enabled for the app in iOS preferences.

| **Behavior**    | **Description**                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spinner Context | When the pull process is happening, a spinner will be shown in the container that is selected. By default, no context is selected and the spinner will not be shown |
| **Output**      | **Description**                                                                                                                                                     |
| path            | Location of file                                                                                                                                                    |

**getOfflineChanges**: Retrieves the changes made when offline

| **Output**    | **Description**                 |
| ------------- | ------------------------------- |
| total         | number of changes while offline |
| pendingToSync | changes pending sync            |
| failedToSync  | changes for which sync failed   |

**importDB**: Upon invocation, a file browser opens up to choose the zip file to import.

| **Behavior**    | **Description**                                                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spinner Context | When the pull process is happening, a spinner will be shown in the container that is selected. By default, no context is selected and the spinner will not be shown |

**Pull**: Pull changes from the server to the device

| **Behavior**                   | **Description**                                                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Clear offline data before pull | If checked, then the whole offline data (other than BUNDLED data) will be deleted before the pull. The default is true (checked). |
| Show Progress                  | When the pull process is happening, a progress bar will be shown. By default, the progress bar will not be shown.                 |
| **Output**                     | **Description**                                                                                                                   |
| totalTaskCount                 | number of entities data to pull                                                                                                   |
| completedTaskCount             | the number of entities data has been pulled so far.                                                                               |
| inProgress                     | true when data pull process is going on, otherwise false                                                                          |

**Push**: Push changes to the server from the device

| **Behavior**        | **Description**                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Show Progress       | When the pull process is happening, a progress bar will be shown. By default, the progress bar will not be shown. |
| **Output**          | **Description**                                                                                                   |
| successfulTaskCount | Number of tasks/changes that were successfully pushed to the server.                                              |
| failedTaskCount     | Number of changes that failed.                                                                                    |
| completedTaskCount  | Number of completed tasks (both successful and failed).                                                           |
| totalTaskCount      | The total number of local changes that need to be pushed to the server.                                           |
| inProgress          | true only when data push process is going on, otherwise false.                                                    |

**lastPullInfo**: to get the last pull details

| **Behavior**           | **Description**                                                                                                                                                 |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spinner Context        | When the pull process is happening, a spinner will be shown in the container that is selected. By default, no context is selected and spinner will not be shown |
| **Output**             | **Description**                                                                                                                                                 |
| entities               | list of entity names and number of records pulled per entity                                                                                                    |
| databases              | list of database names, list of entities within the database, and the number of records pulled per database.                                                    |
| totalPulledRecordCount | The total number of records in the last pull.                                                                                                                   |
| startTime              | Start time of pull operation.                                                                                                                                   |
| endTime                | End time of pull operation.                                                                                                                                     |

**lastPushInfo**: to get the last push details

| **Behavior**        | **Description**                                                                                               |
| ------------------- | ------------------------------------------------------------------------------------------------------------- |
| Show Progress       | When the pull process is happening, a progress bar will be shown. By default, progress bar will not be shown. |
| **Output**          | **Description**                                                                                               |
| successfulTaskCount | Number of successful tasks (changes synced to server)                                                         |
| failedTaskCount     | Number of failed tasks                                                                                        |
| completedTaskCount  | Number of completed tasks includes tasks which were successful and failed.                                    |
| totalTaskCount      | Number of total tasks includes tasks completed and pending                                                    |
| startTime           | Start time of push operation.                                                                                 |
| endTime             | End time of push operation.                                                                                   |

### Device Service Operations

**getAppInfo**: Returns the version number of the app

**getCurrentGeoPosition**: Returns the current location of the app

| **Input Parameter** (from Data Tab) | **Description**                                                                                                                                                                                                                                                                                                                           | **Sample**                   |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Enable High Accuracy                | provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a ‘Position’ using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning.                                                                | true (default), false        |
| Maximum Age                         | specifies to accept a cached position whose age is no greater than the specified time in milliseconds.                                                                                                                                                                                                                                    | any number, the default is 3 |
| Timeout                             | represents the maximum length of time (milliseconds) that is allowed to pass from the call to navigator.geolocation.getCurrentPosition until the corresponding geolocationSuccess callback executes. If geolocationSuccess callback is not invoked within this time, geolocationError callback passes a PositionError.TIMEOUT error code. | any number, the default is 5 |

**getDeviceInfo**: Returns the followingdevice information

| **Output**    | **Description**                                                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| _deviceModel_ | name of the device’s model or product. The value is set by the device manufacturer and may be different across versions of the same product. |
| _OS_          | the device’s operating system name.                                                                                                          |
| _OSversion_   | the operation system version.                                                                                                                |
| _deviceUUID_  | the device’s Universally Unique Identifier (UUID)                                                                                            |

**getNetworkInfo**: Provides information whether device has internet connection

| **Output**           | **Description**                                             |
| -------------------- | ----------------------------------------------------------- |
| _connectionType_     | determines the device’s connection type, eg: WIFI, ethernet |
| _isOffline_          | checks if phone network is offline                          |
| _isOnline_           | checks if phone network  is online                          |
| _isConnecting_       | checks if the app is trying to connect to backend service   |
| _isNetworkAvailable_ | checks if network connection is available                   |

**vibrate**: Vibrates the device programmatically

| **_Input_ (from data tab)** | **Description**                                    |
| --------------------------- | -------------------------------------------------- |
| _Vibration Time_            | seconds to vibrate the device. Default value is 2. |

**goOffline**: Used to turn the mobile app to offline mode by blocking all network calls.

**goOnline**: Used to turn the mobile app to online mode by blocking trying to connect to the backend server.

### File Service Operations

**OpenFile**: Opens files like pdf, document, excel and powerpoint. Note: A file can be opened if corresponding application is available on the mobile device. For example, a pdf file requires acrobat reader or another file that can open the pdf. When a remote file has to be opened for the first time, the file is downloaded. On subsequent calls to open the same file, the earlier downloaded file is just opened.

| **Input Parameter** (from Data Tab) | **Description**                                       | **Sample**                                                  |
| ----------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------- |
| _FileType_                          | A string value that denotes the type of file to open. | The default value is pdf. Values can be pdf, doc, xls, ppt. |
| _FilePath_                          | A string value that denotes the URL of the file.      | http://www.pdf995.com/samples/pdf.pdf)                      |

**upload**: Retrieves the device contacts list

| **Input Parameter** (from Data Tab) | **Description**                                                                                                                                                                            |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| _localFile_                         | specifies the file path on the device. remoteFolder represents the folder path on the server to save the uploaded image. If empty, then images gets saved to `/wavemaker/appdata//uploads` |

### Scan Service Operations

**scanBarCode**: to access the barcode scanner.

## Events

1. **On Error**: The event is fired on the error of the device variable.
2. **On Success**: The event is fired on the success of the device variable.
3. **On Before:** This event is fired before starting the pull/push for the dataSync variable.
4. **On Progress:** This event is fired during the pull/push for the dataSync variable.

## Methods

### invoke(options)

This method invokes the device variable

**Parameters**:

- **options**(object)
- success (callback)
- error (callback)

**Return Value**: None

**Example**:

```
// Example 1: Notify with default set properties
Page.Variables.myDeviceVariable.invoke();

// Example 2: Notify with callback handlers
Page.Variables.myDeviceVariable.invoke(
    {},
    Function () {
       console.log('success');
     }, function () {
        console.log('error')
});
```
