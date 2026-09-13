---
title: "WebSocket Usage - Heartrate Monitor"
id: "websocket-usage-heartrate-monitor"
---

##### 8.4 Release

Heartrate Monitor App utilizes a WebSocket service that returns a patient’s heart rate every half a second. The app will show last 20 heart rates in a Data Table, plot the same on a Line Chart and highlight the last recorded details next to it.

**Step1 :** WebSocket Service Import 

- Create a web responsive project
- Click **Import** option from **Main Menu**
- Click **Web Service** and select **Web Socket**

**Step 2:** Test the WebSocket service

- Provide the **service URL** (Use the wss:// url eg. here we are using `wss://websocket-demos.wavemakeronline.com:443/websocket/heartrate`)
- Enter message body (if it requires),
- Click **Test**.
- Once connection is established successfully with the service, client will start receiving messages from the service and display it under the **MESSAGES** section. 
- Select one of the response messages by clicking on radio button on the left. This will help the platform to generate metadata info against the service. This metadata will be helpful while binding the corresponding WebSocket Variable with widgets. [![wshr_response](/learn/assets/wshr_response.png)](/learn/assets/wshr_response.png)
- If the server does not respond with any message or the message you are expecting at run time is different, you can provide the same manually in the editor under the SAMPLE RESPONSE section. Please note providing Sample Response is useful only if the target WebSocket service returns homogenous data. If the data is heterogeneous, selecting a sample response is not going to be much of a use as you will end up writing JavaScript code to deal with different data structures returned by the service.

**Step 3:** Configure the service and import

- After successfully testing the service, click **Next** button to configure the service with any parameters if required.
- If the service requires query params, they will show up under the query params section. You can make the path of the URL dynamic by adding path params under the second tab.
- Give a name to the service (in this case **heartrateservice**) and click on Import and the service will be successfully imported into the project.

[![wshr_config](/learn/assets/wshr_config.png)](/learn/assets/wshr_config.png)**Step 4:** Create a WebSocket Variable against the service

This variable is an interface between client and server. Follow below steps to create the variable:

- Click **Create** option from **Main Menu**
- Select **Variables**
- Select _WebSocket Variable_ against the **Type** of Variable.
- Select _heartrateservice_ against the **Service** property.
- Check the properties **Connect on page load** and set **On New Data** to _Add as Last Record_
- Give the variable a name (in this case **heartratevariable**)
- Click  **Save & Close** to save the variable.

[![wshr_var](/learn/assets/wshr_var.png)](/learn/assets/wshr_var.png)**Step 5:** Drop the required widgets and bind them to the WebSocket Variable.

- Drop a **Data Table**
    - Select the _WebSocket variable_ created above as **Data Source**
    - Select _dataSet node_ of the variable as the data source for the widget. [![wshr_dt](/learn/assets/wshr_dt.png)](/learn/assets/wshr_dt.png)
- Drop a **Chart**
    
    - Select abovementioned _WebSocket variable_ as **DataSet** value of the chart.
    - Select “_time_” for **X-axis** and “_value_” for **Y-axis**.
    
    [![wshr_chart](/learn/assets/wshr_chart.png)](/learn/assets/wshr_chart.png)
- Drop **two labels** and bind them to _lastRecord.time_ and _lastRecord.value_ of the WebSocket Variable.

Once done, the UI should something like below (we have used Grid Layout for proper arrangement of various widgets) [![wshr_design](/learn/assets/wshr_design.png)](/learn/assets/wshr_design.png)**Step 6:** Run the app [![wshr_run](/learn/assets/wshr_run.png)](/learn/assets/wshr_run.png)
