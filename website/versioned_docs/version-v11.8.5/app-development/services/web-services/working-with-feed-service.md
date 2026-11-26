---
title: "Working with Feed service"
id: "working-with-feed-service"
---

A web feed is a document (often XML-based) whose discrete content items include web links to the source of the content. News websites and blogs are common sources for web feeds, but feeds are also used to deliver structured information ranging from weather data to top-ten lists of hit tunes to search results. The two main web feed formats are RSS and Atom.

1. You can **import Feed Services** into your WaveMaker apps using the Import -> Web Services option.
2. Using the Feed service create a **generic Feed Service**.
3. Once a generic Feed service is imported a **Service Variable** has to be created using the getFeed operation to set the FeedUrl.
4. This Service Variable can then be bound to appropriate **widget** depending upon the response format of the service.

# Importing Generic Feed Service

You can import a feed service into your WaveMaker application by following these steps:

1. From Main Menu, click Import Web Services [![Web_Service1](/learn/assets/Web_Service1.png)](/learn/assets/Web_Service1.png)
2. From the **Web Service** dialog, click the **Feed** icon.
3. Click **Import**. 
4. A generic Feed Service is imported to your application and is displayed in the **Services** section of the **Files and  Services Panel** on the left under _Web Service_ section. 

# Service Variable for Generic Feed Service

To use the Service data within the app, you need a Service Variable.

1. From Main Menu, click **Create** and choose **Variables**. [![Var_create](/learn/assets/Var_create.png)](/learn/assets/Var_create.png)
2. In the **Variables** dialog, select _Service Variable_ and **ADD**; then select _FeedService_ as **Service** and _getFeed_ as the **Operation.** 
3. Click the **Data** tab and set the _feedURL _the URL for your service. Configure other properties of the variable, if required. In this example, we are using the CNN Feed Service: http://rss.cnn.com/rss/edition.rss 

# Widget Binding to Display the Feed Response

1. Drag and Drop a List onto the project canvas.
2. Use the Existing Variable option to select the Service Variable created in the previous step, and select the _entries_ node. 
3. Select a Template and Pagination appropriately. We have selected Media List and Basic Pagination style.
4. Bind the fields appropriately. We have bound Name to the author, Time to updatedDate, and Description to description. From the canvas delete unwanted widgets, Picture in this case.
5. Run the app and see the content displayed. (Ensure that the Request Data on Page Load property is checked for the Service Variable)
