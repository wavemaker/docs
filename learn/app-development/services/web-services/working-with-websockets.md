---
title: "Working with WebSockets"
id: ""
---

WebSockets represent the next evolution of web communications a full-duplex, bidirectional communications channel that operate through a single socket over the Web. It provides a true standard that you can use to build scalable, real-time web applications. It provides full-duplex communication channels over a single TCP connection. Its only relationship to HTTP is that its handshake is interpreted by HTTP servers as an Upgrade Request.

With WaveMaker you can integrate any third-party WebSocket Service into your app and build real-time apps. Just like a REST service, you can import a **WebSocket Service** and create a**Variable** to communicate with the service. The data received from the service at the client is held by the Variable, which can be further used to bind to Widgets like Charts, Data Table, Lists, etc and have them reflect data in real-time.

Data returned from the WebSocket Service can be handled in three different ways:

1. **As data snapshot**: By choosing to _refresh_ the WebSocket service variable, you will be dealing with the latest data returned by the service. This option can be used when you want to deal the latest information.
2. **Append data**: By choosing to _add as last record_, you can append the data to the variable dataset. In such cases for performance and UI optimization, it is advisable to set a _limit_ on the size of the data held by the variable. This option can be used when displaying tracking information in a chart format like stock performance, heart rate monitor graph, etc..
3. **Prepend data**: By choosing to _add as first record_, you can prepend the data to the variable dataset. In such cases for performance and UI optimization, it is advisable to set a _limit_ on the size of the data held by the variable. This option can be used when displaying the data in a list or data table format, with the latest entry on the top of the list, like match scores or weather reports.

## Importing a WebSocket service in a WaveMaker App

Just like any web service, a WebSocket service can be imported into a WaveMaker app.

[![](/learn/assets/Web_Service1.png)](/learn/assets/Web_Service1.png)

 

1. Provide the WebSocket service URL, test the connection and import the service.
2. To leverage the full power of the platform, you should provide the sample request and response body while configuring the service. This helps the platform to generate request and response type metadata for the service, which can be utilized while binding the input to the corresponding Variable and the output of the Variable to a widget. [![](/learn/assets/socket_response.png)](/learn/assets/socket_response.png)
3. WebSocket Service can be further configured by specifying the Query, Path, and Body Parameters as per the app requirements.
4. The newly created service will be visible under the Web Service
5. Select the service name listed under WebSocket Service to access the Service Settings [![](/learn/assets/socket_settings.png)](/learn/assets/socket_settings.png)

## Limitation

Since WMO is hosted on https, a WebSocket service on _ws://_ protocol cannot be tested because of security limitations on browsers. To cater this, the platform detects if the URL entered by the user is on _ws://_ protocol and throws a warning to the user with a message. At this point the TEST button is disabled. You can still proceed, however, by checking the Proceed without Test option. You can check this flag, provide sample Request Body and Sample Response and proceed to config screen without testing.

**Note**: It is not recommended to use _ws://_ URL as it may not work. Best practice is to use _wss://_ URLs only.

## WebSocket Data Consumption

To use the WebSocket Service within your app, you need to create a Variable. This is the interface for the app developer to interact with a WebSocket Service imported into a WaveMaker app. The Variable has methods to interact with the target service like opening and closing the connection, sending and receiving messages to and from the server. It also holds the data to be sent to the service and the data received from the service. [Click here to know more](/learn/app-development/variables/websocket-variable/).

