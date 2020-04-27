---
title: "COVID-19 Visualization using WaveMaker"
author: Deepak Anupalli
---

Alongside the crisis that COVID-19 had brought to the world, there has never been so much prominence for the numbers. Almost every household, governments, businesses, media etc. are contemplating these numbers, creating models for prediction, taking measures to flatten these curves. That’s when we immediately jumped on to create an application using our own low-code platform.

Using WaveMaker, you can almost instantly create a chart or plot for visualization from any datasource. There are several API sources for COVID-19 data and with no code, using out-of-the-box widgets and charts the application has been built in just a few days.

<!-- truncate -->
### Corona Tracker App
Link to the app
http://apps.wavemakeronline.com/CoronaTracker/

[![screenshot](/learn/assets/wm-blog-covid19-01-dashboard.png)](/learn/assets/wm-blog-covid19-01-dashboard.png)

Not only can you quickly build the dashboard, it is responsive automatically and one can access it on a mobile device as well as on a large screen.
[![screenshot](/learn/assets/wm-blog-covid19-02-mobile-dashboard.png)](/learn/assets/wm-blog-covid19-02-mobile-dashboard.png)

### Quick walkthrough of the app
An extensive dashboard is created with key metrics globally, i.e. Confirmed cases across several countries, recovered, deaths reported etc. The dashboard provides visualization for top 10 affected countries, plotting their death rates against recovery percentages, number of affected people in 1 million population etc.

The data set published by John Hopkins University is used to visualize the datamaps to depict spread of COVID-19 across the globe over a timeline.
[![screenshot](/learn/assets/wm-blog-covid19-03-datamaps-cases.png)](/learn/assets/wm-blog-covid19-03-datamaps-cases.png)

### How to build the dashboard
Using WaveMaker, the elements of the dashboard can be built in just 4 steps without writing code.
Import datasource, REST API in this case
Create variable to access the REST API
Visually drag-n-drop widgets onto the canvas or editor 
Bind the widgets to Variable

Step 1: Import datasource, REST API in this case
The primary source of data for the dashboard are the following 2 REST APIs:
https://api.coronatracker.com/v3/stats/worldometer/country
https://api.coronatracker.com/v3/stats/worldometer/global

Import the REST APIs using Web Services import editor, as shown below
[![screenshot](/learn/assets/wm-blog-covid19-04-studio-wsimport.png)](/learn/assets/wm-blog-covid19-04-studio-wsimport.png)

Step 2: Create Variable to access REST API
Create a Page for the dashboard, and create a Variable within this page for the imported REST API, which enables invocation of the API whenever the page is accessed. 
[![screenshot](/learn/assets/wm-blog-covid19-05-studio-variables.png)](/learn/assets/wm-blog-covid19-05-studio-variables.png)

Step 3: Drag-n-drop widgets on to Canvas
Key metrics for confirmed cases, recovery & deaths are built as tiles as shown. Each tile is further divided into sections using a Grid Layout which can be further customized to represent the data.
Grid Layout is used to define the arrangement of various widgets on the page, by dividing the page into several responsive blocks. The size of each block can be configured and new columns and rows can be inserted as needed.

[![screenshot](/learn/assets/wm-blog-covid19-06-studio-canvas.png)](/learn/assets/wm-blog-covid19-06-studio-canvas.png)


Step 4: Bind widgets to the Variable for data
After arranging the widgets on the canvas, we can bind data to these widgets from the created variable using the Properties panel.
WaveMaker automatically identifies the JSON response structure from the imported REST API and makes it available for binding through variables.
[![screenshot](/learn/assets/wm-blog-covid19-07-studio-binding.png)](/learn/assets/wm-blog-covid19-07-studio-binding.png)

Step 5: Deploy to cloud and we are done!
