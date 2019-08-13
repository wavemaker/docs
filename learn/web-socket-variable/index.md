---
title: "Web Socket Variable"
id: "web-socket-variable"
---

**Socket Variable** is the interface for the app developer to interact with a WebSocket Service imported into a WaveMaker app. The Variable has methods to interact with the target service like opening and closing the connection, sending and receiving messages to and from the server. It also holds the data to be sent to the service and the data received from the service.

Web Socket Variable Lifecycle[![websocket_lifecycle](../assets/websocket_lifecycle.png)](../assets/websocket_lifecycle.png)

can create variables directly instead of through the Data & Live Widgets. Here we list the steps for the same:

1. Variable option from the Create Menu [![Var_create](../assets/Var_create.png)](../assets/Var_create.png)
2. the **of Variable** to be created from the list provided in the Variable Main Page and click on [![varcr_menu_add](../assets/varcr_menu_add.png)](../assets/varcr_menu_add.png)
3. Service - web/java service name and Operation - method/function [![websocket_var_props](../assets/websocket_var_props.png)](../assets/websocket_var_props.png)
4. **tab** contains all the properties like , and _options_ in case of live variables, and [![varcr_menu_beh](../assets/varcr_menu_beh.png)](../assets/varcr_menu_beh.png)
5. **tab** will contain the fields serving as _fields_ while data fetch operation in case of Live Variable and as _parameters_ for the Web Service call in case of Service Variables [![varcr_menu_data](../assets/varcr_menu_data.png)](../assets/varcr_menu_data.png)
6. events tab will contain the events that can be configured to trigger any action [![varcr_menu_events](../assets/varcr_menu_events.png)](../assets/varcr_menu_events.png)

WebSocket service targeted for the Variable.

on page load

set to true, the variable will open the connection between the client and target WebSocket service on:

- load, for a page variable
- load, for an app variable.

message to dataSet

client once connected to a WebSocket service, can receive messages at any point in time and can receive a number of messages one after the other.

- this property is set to true, the messages received will keep getting appended to the variable dataSet. In this case, dataSet will always be a list of messages.
- not, variable dataSet will always have only the last message received from the WebSocket service.

Results in dataSet

number of messages that dataSet will hold. This is applicable only if Append message to dataSet property is set. E.g. if set to 10, dataSet will hold a maximum of 10 message received from the server. When a new message is received, the first message is removed from the dataSet and the new one is appended to the end. Set it to 0 if no such upper limit is required.

events are triggered during the lifecycle of a WebSocket Variable. These events can be utilized to customize the behavior of the app through more complex logic.

event is triggered just before the Variable attempts to establish a connection between the client and target WebSocket service. **returned false from here**, the connection establishment will be aborted.

event is triggered right after a successful connection is established between the client and the WebSocket service through the Variable.

event is triggered just before the Variable attempts to send a message to the target service through the existing connection. You have a chance at this point to validate and edit the data to be sent to the service. Returning false from this event will prevent the message to be sent to the service.

event is triggered on the Variable when a message is received from the WebSocket service in an existing connection made by the Variable.

if an error is encountered in establishing a connection with the server in the open phase.

before an existing connection(opened by the Variable) is closed. **false from here will abort the closing of the connection**

after the connection is closed.

The Variable has the following methods namely:

()

to open up the connection between the client and the WebSocket service. This is the starting point of the Variable lifecycle.

()

to send a message to the WebSocket service through the currently established connection.

()

to close an existing WebSocket connection connected through the Variable.

event is triggered on the Variable when a message is received from the WebSocket service in an existing connection made by the Variable.

if an error is encountered in establishing a connection with the server in the open phase.

before an existing connection(opened by the Variable) is closed. **false from here will abort the closing of the connection**

after the connection is closed.

- [5.1 Data Integration - Variables](/learn/app-development/variables/data-integration/)
    - [5.1.1 Live Variables](/learn/variables/live-variable/)
    - [5.1.2 Service Variables](/learn/variables/service-variable/)
        - [](#creation)
            - [Live Widgets](#widgets)
            - [Menu](#menu)
        
    - [5.1.3 Static Variables](/learn/app-development/variables/static-variable/)
    - [5.1.4 Timer Variables](/learn/app-development/variables/timer-variable/)
    - [5.1.5 Navigation Variables](/learn/app-development/variables/navigation-variable/)
    - [5.1.6 Notification Variables](/learn/app-development/variables/notification-variable/)
- [5.2 Variable Binding](/learn/app-development/variables/variable-binding/)
- [5.3 JavaScript Access](/learn/app-development/variables/accessing-elements-via-javascript/)
