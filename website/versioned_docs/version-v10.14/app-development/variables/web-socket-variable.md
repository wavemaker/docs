---
title: "Web Socket Variable"
id: "web-socket-variable"
---
---
**Web Socket Variable** is the interface for the app developer to interact with a WebSocket Service imported into a WaveMaker app. The Variable has methods to interact with the target service like opening and closing the connection, sending and receiving messages to and from the server. It also holds the data to be sent to the service and the data received from the service.

## Web Socket Variable Lifecycle



We can create variables directly instead of through the Data & Live Widgets. Here we list the steps for the same:

1. Select Variable option from the Create Menu 

[![Var_create](/learn/assets/Var_create.png)](/learn/assets/Var_create.png)

2. Select the **type of Variable** to be created from the list provided in the Variable Main Page and click on **ADD**


3. Select Service - web/java service name and Operation - method/function 



4. the **properties tab** contains all the properties like _source_, _service_ and _server options_ in case of live variables, and _behavior_. 



5. the **data tab** will contain the fields serving as _filter fields_ while data fetch operation in case of Live Variable and as _input parameters_ for the Web Service call in case of Service Variables 


6. The events tab will contain the events that can be configured to trigger any action 



## Properties

| Property | Description |
| --- | --- |
| Service | The WebSocket service targeted for the Variable. |
| **Behavior** |
| Connect on page load | If set to true, the variable will open the connection between the client and target WebSocket service on:    - page load, for a page variable   - app load, for an app variable. |
| Append message to dataSet | A client once connected to a WebSocket service, can receive messages at any point in time and can receive a number of messages one after the other.   - If this property is set to true, the messages received will keep getting appended to the variable dataSet. In this case, dataSet will always be a list of messages.   - If not, variable dataSet will always have only the last message received from the WebSocket service. |
| Max Results in dataSet | Maximum number of messages that dataSet will hold. This is applicable only if Append message to dataSet property is set. E.g. if set to 10, dataSet will hold a maximum of 10 message received from the server. When a new message is received, the first message is removed from the dataSet and the new one is appended to the end. Set it to 0 if no such upper limit is required. |

### Events

Following events are triggered during the lifecycle of a WebSocket Variable. These events can be utilized to customize the behavior of the app through more complex logic.

| **Event** | **Description** |
| --- | --- |
| onBeforeOpen | The event is triggered just before the Variable attempts to establish a connection between the client and target WebSocket service. **If returned false from here**, the connection establishment will be aborted. |
| onOpen | The event is triggered right after a successful connection is established between the client and the WebSocket service through the Variable. |
| onBeforeMessageSend | The event is triggered just before the Variable attempts to send a message to the target service through the existing connection. You have a chance at this point to validate and edit the data to be sent to the service. Returning false from this event will prevent the message to be sent to the service. |
| onMessageReceive | The event is triggered on the Variable when a message is received from the WebSocket service in an existing connection made by the Variable. |
| onError | Triggered if an error is encountered in establishing a connection with the server in the open phase. |
| onBeforeClose | Triggered before an existing connection(opened by the Variable) is closed. **Returning false from here will abort the closing of the connection**. |
| onClose | Triggered after the connection is closed. |

### Methods

The Variable has the following methods namely:

| **Method** | **Description** |
| --- | --- |
| open() | Used to open up the connection between the client and the WebSocket service. This is the starting point of the Variable lifecycle. |
| send() | Used to send a message to the WebSocket service through the currently established connection. |
| close() | Used to close an existing WebSocket connection connected through the Variable. |
| onMessageReceive | The event is triggered on the Variable when a message is received from the WebSocket service in an existing connection made by the Variable. |
| onError | Triggered if an error is encountered in establishing a connection with the server in the open phase. |
| onBeforeClose | Triggered before an existing connection(opened by the Variable) is closed. **Returning false from here will abort the closing of the connection**. |
| onClose | Triggered after the connection is closed. |


