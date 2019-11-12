---
title: "WebSocket Usage - Chatroom App"
id: ""
---

Chatroom App utilizes a WebSocket service to enable chat among multiple users.

**Step 1:** WebSocket Service Import

- Create a mobile project
- From **Web Service** resource, add new web resource and select **WebSocket**

**Step 2:** Test the WebSocket service

- Provide the service URL (Use the `wss://` url eg. here we are using `wss://websocket-demos.wavemakeronline.com:443/websocket/chatroom?username=user1`)
- Enter _test _against Sample Request Body
- Click **Test**.
- Once the connection is established successfully with the service, the client will start receiving messages from the service and display it under the MESSAGES section.
- Select one of the response messages by clicking on radio button on the left. This will help the platform to generate metadata info against the service. This metadata will be helpful while binding the corresponding WebSocket Variable with widgets. [![](/learn/assets/wschat_msg.png)](/learn/assets/wschat_msg.png)
- If the server does not respond with any message or the message you are expecting at runtime is different, you can provide the same manually in the editor under the SAMPLE RESPONSE section. Please note providing Sample Response is useful only if the target WebSocket service returns homogenous data. If the data is heterogeneous, selecting a sample response is not going to be much of a use as you will end up writing JavaScript code to deal with different data structures returned by the service.

**Step 3:** Configure the service and import

- - After successfully testing the service, click **Next** button to configure the service with any parameters if required.
    - If the service requires query params, they will show up under the query params section. You can make the path of the URL dynamic by adding path params under the second tab.
    - Give a name to the service (in this case **chatroomservice**) and click on **Import** and the service will be successfully imported into the project.

[![](/learn/assets/wschat_config.png)](/learn/assets/wschat_config.png)

**Step 4:** **Create a WebSocket Variable** against the service

This variable is an interface between client and server. Follow below steps to create the variable:

- Open the page where you want to use the chat service
- [Create a Web Service Variable](/learn/assets/var_sel.png)
- Select _chatroomservice_ (WebSocket service name entered while import) against the **Service** property.
- Give the variable a name (in this case **ChatroomVariable)**
- From the Variables dialog:
    
    - Check the properties **Connect on page load** and set **On New Data** to _Add as last record in dataSet (_since we want to display the latest message at the bottom of the list)
    - Click  **Save & Close** to save the variable.
    
    [![](/learn/assets/wschat_var.png)](/learn/assets/wschat_var.png)

**Step 5:** Secure the app

1. We will be using a Database for login details
    - [Import the Database](http://[supsystic-show-popup id=106]) with the login details (here we will be using the sample hrdb Employee table
2. [Enable Security](http://[supsystic-show-popup id=111]) and use Database as Service Provider
3. Configure the Security as follows: [![](/learn/assets/wschat_sec.png)](/learn/assets/wschat_sec.png)

**Step 6:** Create a** DB CRUD Variable** to get the logged in user details

This variable will get the logged in employee details. Follow below steps to create the variable:

1. [Create a Database CRUD Variable](/learn/assets/var_sel.png) (in this case ****employeeDetails) for _hrdb_ _Employee_ entity.****
    - Check the properties **Request data on page load**
    - From the **Data** tab, set **empId** Filter Field to _loggedInUser.dataSet.id_ using the bind icon next to the empId

[![](/learn/assets/wschat_var1.png)](/learn/assets/wschat_var1.png) [![](/learn/assets/wschat_var1data.png)](/learn/assets/wschat_var1data.png)**Step 7:** Create a **Database CRUD Variable** to get all user details

This variable will get employee details to be displayed against the chat messages. Follow below steps to create the variable:

1. [Create a Database CRUD Variable](/learn/assets/var_sel.png) for _hrdb_ _Employee_ entity (in this case ****employeeData).****
    - Check the properties **Request data on page load**
    - From the **Events** tab, set **On Success** to trigger _JavaScript._ Enter the following code to retrieve the picurl of the employees:
        
            $scope.employeeDataonSuccess = function(variable, data) {
                for (var i = 0; i < data.length; i++) {
                    $scope.picUrls\[data\[i\].username\] = data\[i\].picurl;
                }
            };
        

[![](/learn/assets/wschat_var2.png)](/learn/assets/wschat_var2.png) [![](/learn/assets/wschat_var2event.png)](/learn/assets/wschat_var2event.png) [![](/learn/assets/wschat_var2js.png)](/learn/assets/wschat_var2js.png)**Step 8:** We will design the Chat Room page [![](/learn/assets/wschat_design.png)](/learn/assets/wschat_design.png)

1. We have chosen **One column layout with top navbar** for the Main Page
2. Select the top navbar and set:
    - **Title** as _Chat Room_
    - **Image Source** as the _employeeDetails.firstRecord.picurl_
3. Drag and drop a **List**. Use _Chatroom _as the **Data Source**.
    - Bind **Name **label to Chatroom -> username field
    - Bind **Time **label to  Chatroom -> time field
4. From the canvas
    - For the **Time** label Use Expression to set the time format to: _toDate: 'hh:mm:ss a'_
    - For the **Picture** widget Use Expression to set it to the appropriate picurl: _picUrls\[Widgets.chatmessageList.currentItem.username\]_
5. Drag and drop a **Grid Layout** inside the Panel Footer. Set:
    - GridColumn1 width = 10
    - GridColumn2 width = 2
    - Drag and drop  **Textarea** in GridColumn 1
    - Drag and drop a **Button** in Grid Column 2. Set
        - **Icon Class **\= _wi wi-paper-plane_
        - **on Click** to _chatroom.send_

**Step 9:** Variable Binding.

1. Open Chatroom WebSocket Service Variable. From the Data tab, bind
    
    - **username** to _loggedInUser.dataSet.name_,
    - **RequestBody** the _datavalue_ returned by _textarea_ widget
    
    [![](/learn/assets/wschat_vardata.png)](/learn/assets/wschat_vardata.png)

**Step 7:** Run the app

1. Open three instances of Chatroom app and login as three different users.
2. When one user sends a message, remaining users will receive the message in real time.
3. When remaining users send messages, the other users also receive it back in real time.
