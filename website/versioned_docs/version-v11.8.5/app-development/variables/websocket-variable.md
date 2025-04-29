---
title: "WebSocket Variable"
id: "websocket-variable"
---
---

**WebSocket Variable** is the interface for the app developer to interact with a WebSocket Service imported into a WaveMaker app. The Variable has methods to interact with the target service like opening and closing the connection, sending and receiving messages to and from the server. It also holds the data to be sent to the service and the data received from the service.

## Variable Lifecycle

[![socket_lifecycle](/learn/assets/socket_lifecycle.png)](/learn/assets/socket_lifecycle.png)

## Variable Creation

The **data source** for WebSocket Variables comes from a **Web Service**. We will see steps in creating a WebSocket variable here.

1. Select Variable option from the Create Menu 

[![](/learn/assets/var_sel.png)](/learn/assets/var_sel.png)

2. Click New Variable from the Variable Dialog.

[![](/learn/assets/var_new.png)](/learn/assets/var_new.png)

3. For creating a variable to access WebSocket Web service APIs, select **Web Service** as the target action.
4. In the next dialog, enter details for the following properties.
    - **Service** - service (already imported) name,
    - **Name** - is set by default but can be modified
    - **Owner** - the scope of the Variable being created. By default it is set to Page, you can change it to Application if you want this variable to be available across the app.

5. Click **Done** to complete the variable creation process
6. You will be directed to the Variables page, with the new variable listed. As you can see:
    - a **Web Service** Variable is created,
    - with the default exposed method/selected method as target
    - the **properties tab** contains all the properties like **behavior** and **dataset** behavior. [Know more about properties](#properties).
    - the **data tab** will contain the fields serving as **input fields** for the API
    - the **events** tab will contain the events that can be configured to trigger any action. [Know more about events](#events).

## Properties

WebSocket Variables are special variables that interact with the imported Web Socket service.

| **Property** | **Description** |
| --- | --- |
| **Service** |
| Service | The WebSocket service targeted for the Variable. |
| **Behavior** |
| Connect on page load | If set to true, the variable will open the connection between the client and target WebSocket service on:   - page load, for a page variable   - app load, for an app variable. |
| **Dataset** |
| On New Data | A client once connected to a WebSocket service, can receive messages at any point in time and can receive many messages sequentially. This property determines what to do with data received from the variable.   - **Refresh dataSet**: dataSet will be updated with the data received.   - **Add as last record**: data will be appended at the end of dataSet. The latest data will be the last record in dataSet.   - **Add as first record**: data will be prepended at the beginning of dataSet. The latest data will be the first record in dataSet.   In the latter two cases, dataSet will always be a list of messages. |
| Data Limit | Maximum number of messages that dataSet will hold. This is applicable only if “On New Data” property is set to other than “Refresh”. E.g. if set to 10, dataSet will hold a maximum of 10 message received from the server. When a new message is received, the first message is removed from the dataSet and the new one is appended to the end. Set it to 0 if no such upper limit is required. |

## Events

Following events are triggered during the lifecycle of a WebSocket Variable. These events can be utilized by the end user application developer to customize the behavior of the app through more complex logic.

| **Event** | **Description** |
| --- | --- |
| on Before Open | The event is triggered just before the Variable attempts to establish a connection between the client and target WebSocket service. If returned false from here, the connection establishment will be aborted. |
| on Open | The event is triggered right after a successful connection is established between the client and the WebSocket service through the Variable. |
| on Before Message Send | The event is triggered just before the Variable attempts to send a message to the target service through the existing connection. You have a chance at this point to validate and edit the data to be sent to the service. Returning false from this event will prevent the message to be sent to the service. |
| on Message Receive | The event is triggered on the Variable when a message is received from the WebSocket service in an existing connection made by the Variable. |
| on Error | Triggered if an error is encountered in establishing a connection with the server in the open phase. |
| on Before Close | Triggered before an existing connection(opened by the Variable) is closed. Returning false from here will abort the closing of the connection. |
| **onClose** | Triggered after the connection is closed. |

:::note
WaveMaker supports binding multiple actions to a given event, i.e. a given event can trigger multiple actions.
:::

## Methods

<table class="reference notranslate"><tbody><tr><td><a href="#open">open</a></td><td><a href="#send">send</a></td><td><a href="#close">close</a></td></tr></tbody></table>

### open()

This method is used to open up the connection between the client and the WebSocket service. This is the starting point of the Variable lifecycle. 

**Parameters**: None 
**Return Value**: None
**Usage:**

```js
Page.Variables.webSocketVariable.open();
```

### send()

This method is used to send a message to the WebSocket service through the currently established connection.

**Parameters**:

- **message**(object): the message to be sent to the service. If not provided, whatever is assigned to Variable RequestBody will be sent

**Return Value**: None

**Usage:**

```js
Page.Variables.webSocketVariable.send(message);
```

### close()

This method is used to close an existing WebSocket connection connected through the Variable.

**Parameters**: None 

**Return Value**: None

**Usage:**

```js
Page.Variables.webSocketVariable.close();
```
