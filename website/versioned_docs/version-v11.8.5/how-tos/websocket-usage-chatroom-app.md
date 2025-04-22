---
title: "WebSocket Usage - Chatroom App"
id: "websocket-usage-chatroom-app"
---
---

Chatroom App utilizes a WebSocket service to enable chat among multiple users.

## WebSocket Service Import

**Step 1:** WebSocket Service Import

- Create a mobile project
- From **Web Service** resource, add new web resource and select **WebSocket**

## Test the WebSocket Service

**Step 2:** Test the WebSocket service

- Provide the service URL (Use the `wss://` URL, for example, here we are using `wss://websocket-demos.wavemakeronline.com:443/websocket/chatroom?username=user1`)
- Enter `test` against Sample Request Body
- Click **Test**.
- Once the connection is established successfully with the service, the client will start receiving messages from the service and display it under the MESSAGES section.
- Select one of the response messages by clicking on the radio button on the left. This will help the platform to generate metadata info against the service. This metadata will be helpful while binding the corresponding WebSocket Variable with widgets.

![chat message](/learn/assets/wschat_msg.png)

- If the server does not respond with any message or the message you are expecting at runtime is different, you can provide the same manually in the editor under the SAMPLE RESPONSE section. Please note providing Sample Response is useful only if the target WebSocket service returns homogenous data. If the data is heterogeneous, selecting a sample response is not going to be much of a use as you will end up writing JavaScript code to deal with different data structures returned by the service.

## Configure the Service and Import

**Step 3:** Configure the Service and Import

After successfully testing the service, click **Next** to configure the service with any parameters if required.

- If the service requires query params, they will show up under the query params section. You can make the path of the URL dynamic by adding path params under the second tab.
- Give a name to the service (in this case **chatroomservice**) and click **Import** and the service will be successfully imported into the project.

![chat config](/learn/assets/wschat_config.png)

## Create a WebSocket Variable

**Step 4:** **Create a WebSocket Variable** against the service

This variable is an interface between the client and the server. Follow the below steps to create the variable:

- Open the page where you want to use the chat service
- [Create a Web Service Variable](/learn/assets/var_sel.png)
- Select `chatroomservice` (WebSocket service name entered while import) against the **Service** property.
- Give the variable a name (in this case **ChatroomVariable)**
- From the Variables dialog:
  - Check the properties **Connect on page load** and set **On New Data** to _Add as the last record in dataSet_ (since we want to display the latest message at the bottom of the list)
  - Click  **Save & Close** to save the variable.

  ![chat variable](/learn/assets/wschat_var.png)

## Secure the App

**Step 5:** Secure the app

1. We will be using a Database for login details
    - [Import the Database](/learn/app-development/services/database-services/working-with-databases/) with the login details (here we will be using the sample hrdb Employee table
2. [Enable Security](/learn/app-development/app-security/app-security) and use Database as Service Provider
3. Configure the Security as follows:

![chat section](/learn/assets/wschat_sec.png)

## Create a DB CRUD Variable

**Step 6:** Create a **DB CRUD Variable** to get the logged-in user details.

This variable will get the logged-in employee details. Follow the below steps to create the variable:

1. [Create a Database CRUD Variable](/learn/assets/var_sel.png) (in this case **employeeDetails) for `hrdb` `Employee` entity.**
    - Check the properties **Request data on page load**
    - From the **Data** tab, set **empId** Filter Field to `loggedInUser.dataSet.id` using the bind icon next to the empId

![chat variable](/learn/assets/wschat_var1.png)

![variable data](/learn/assets/wschat_var1data.png)

## Create a Database CRUD Variable

**Step 7:** Create a **Database CRUD Variable** to get all user details

This variable will get employee details to be displayed against the chat messages. Follow the below steps to create the variable:

1. [Create a Database CRUD Variable](/learn/assets/var_sel.png) for `hrdb` `Employee` entity (in this case **employeeData**).

- Check the properties **Request data on page load**
- From the **Events** tab, set **On Success** to trigger `JavaScript.` Enter the following code to retrieve the `picurl` of the employees:

```js
 Page.employeeDataonSuccess = function(variable, data) {
             for (var i = 0; i < data.length; i++) {
              Page.picUrls[data[i].username] = data[i].picurl;
              }
            };
```

![wschat variable](/learn/assets/wschat_var2.png)

![variable event](/learn/assets/wschat_var2event.png)

![chat variable js](/learn/assets/wschat_var2js.png)

## Design the Chat Room

**Step 8:** We will design the Chat Room page

![chat design](/learn/assets/wschat_design.png)

1. We have chosen **One column layout with top navbar** for the Main Page
2. Select the top navbar and set:
    - **Title** as *Chat Room*
    - **Image Source** as the `employeeDetails.firstRecord.picurl`
3. Drag and drop a **List**. Use `Chatroom` as the **Data Source**.
    - Bind **Name** label to Chatroom -> username field
    - Bind **Time** label to  Chatroom -> time field
4. From the canvas
    - For the **Time** label Use Expression to set the time format to: `toDate: 'hh:mm:ss a'`
    - For the **Picture** widget Use Expression to set it to the appropriate picurl: `picUrls[Widgets.chatmessageList.currentItem.username]`
5. Drag and drop a **Grid Layout** inside the Panel Footer. Set:
    - GridColumn1 width = 10
    - GridColumn2 width = 2
    - Drag and drop  **Textarea** in GridColumn 1
    - Drag and drop a **Button** in Grid Column 2. Set
        - **Icon Class** = `wi wi-paper-plane`
        - **on Click** to `chatroom.send`

## Variable Binding

**Step 9:** Variable Binding.

1. Open Chatroom WebSocket Service Variable. From the Data tab, bind

- **username** to `loggedInUser.dataSet.name`,
- **RequestBody** the `datavalue` returned by `textarea` widget

![chat data](/learn/assets/wschat_vardata.png)

## Run the app

**Step 7:** Run the app

1. Open three instances of the Chatroom app and login as three different users.
2. When one user sends a message, the remaining users will receive the message in real-time.
3. When remaining users send messages, the other users also receive it back in real-time.
