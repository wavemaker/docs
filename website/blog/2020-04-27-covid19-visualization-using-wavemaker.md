---
title: "COVID-19 Visualization using WaveMaker - Part 1"
author: Deepak Anupalli
---

Alongside the crisis that COVID-19 had brought to the world, there has never been so much prominence for the numbers. Almost every household, governments, businesses, media etc. are contemplating these numbers, creating models for prediction, taking measures to flatten these curves. That’s when we immediately jumped on to create an application using our own low-code platform.

Using WaveMaker, you can almost instantly create a chart or plot for visualization from any datasource. There are several API sources for COVID-19 data and with no code, using out-of-the-box widgets and charts the application has been built in just a few days.

<!-- truncate -->

In this series of blog post, we discuss [how to build a dashboard](/learn/blog/2020/04/27/covid19-visualization-using-wavemaker#how-to-build-the-dashboard), and in the next post, we will see [how to build visualization for charts and maps](/learn/blog/2020/04/30/covid19-visualization-using-wavemaker-part-2). But before, let's do a little walkthrough of the app.

## Corona Tracker App

Link to the app: http://apps.wavemakeronline.com/CoronaTracker/

![app](/learn/assets/wm-blog-covid-19.gif)

[![screenshot](/learn/assets/wm-blog-covid19-01-dashboard.png)](/learn/assets/wm-blog-covid19-01-dashboard.png)

Not only can you quickly build the dashboard, it is responsive automatically and one can access it on a mobile device as well as on a large screen.

![screenshot](/learn/assets/wm-blog-covid19-02-mobile-dashboard.png)

## Quick walkthrough of the app

The Corona Tracker application has an extensive dashboard with key metrics globally, i.e. Confirmed cases across several countries, recovered, deaths reported etc. The dashboard provides visualization for top 10 affected countries, plotting their death rates against recovery percentages, number of affected people in 1 million population etc.

This app also features datamaps with data set published by John Hopkins University, to visualize the spread of COVID-19 across the globe over a timeline.

[![screenshot-data-maps-new-cases](/learn/assets/wm-blog-covid19-03-datamaps-cases.png)](/learn/assets/wm-blog-covid19-03-datamaps-cases.png)

## How to build the dashboard

Using WaveMaker, the elements of the dashboard can be built in just 4 steps without writing code.

1. Import datasource, REST API in this case
2. Create variable to access the REST API
3. Visually drag-n-drop widgets onto the canvas or editor 
4. Bind the widgets to Variable

### Step 1: Import datasource, REST API in this case

The primary source of data for the dashboard are the following 2 REST APIs:

```
https://api.coronatracker.com/v3/stats/worldometer/country
```

```
https://api.coronatracker.com/v3/stats/worldometer/global
```

Import the REST APIs using Web Services import editor, as shown below

[![screenshot-import-rest](/learn/assets/wm-blog-covid19-04-studio-wsimport.png)](/learn/assets/wm-blog-covid19-04-studio-wsimport.png)

### Step 2: Create Variable to access REST API

Create a Page for the dashboard, and create a Variable within this page for the imported REST API, which enables invocation of the API whenever the page is accessed. 

[![screenshot-bind-variables](/learn/assets/wm-blog-covid19-05-studio-variables.png)](/learn/assets/wm-blog-covid19-05-studio-variables.png)

### Step 3: Drag-n-drop widgets on to Canvas

Key metrics for confirmed cases, recovery & deaths are built as tiles as shown. Each tile is further divided into sections using a Grid Layout which can be further customized to represent the data.
Grid Layout is used to define the arrangement of various widgets on the page, by dividing the page into several responsive blocks. The size of each block can be configured and new columns and rows can be inserted as needed.

[![screenshot](/learn/assets/wm-blog-covid19-06-studio-canvas.png)](/learn/assets/wm-blog-covid19-06-studio-canvas.png)

### Step 4: Bind widgets to the Variable for data

After arranging the widgets on the canvas, we can bind data to these widgets from the created variable using the Properties panel.
WaveMaker automatically identifies the JSON response structure from the imported REST API and makes it available for binding through variables.

[![screenshot](/learn/assets/wm-blog-covid19-07-studio-binding.png)](/learn/assets/wm-blog-covid19-07-studio-binding.png)

[![screenshot](/learn/assets/wm-blog-covid19-08-studio-binding-dialog.png)](/learn/assets/wm-blog-covid19-08-studio-binding-dialog.png)

![screenshot](/learn/assets/wm-blog-covid19-09-dashboard-snippet.png)

Bingo! We have the metrics from the REST API in our dashboard page.

Wait!, how did we get the other metric for % of recovered people?

Apart from just binding the data to API response, WaveMaker enables writing simple expressions as shown below to compute data. ```f(n) = (totalRecovered * 100) / totalConfirmed``` gives the % recovery, alongside using other data formatting rules.

[![screenshot](/learn/assets/wm-blog-covid19-10-studio-expression.png)](/learn/assets/wm-blog-covid19-10-studio-expression.png)

### Step 5: Deploy to the cloud and we are done!

For more information, see how to deploy an app with [One-Click Deployment](/learn/app-development/deployment/one-click-deployment/).

## What's next?

In the next series of the blog post for developing a Covid-19 visualization using WaveMaker, see how to build [visualization for charts](#how-to-build-charts-visualization) and [visualization for maps](/learn/blog/2020/04/30/covid19-visualization-using-wavemaker-part-2#how-to-build-maps-visualization).

## See Also

[COVID-19 Visualization using WaveMaker - Part 2](/learn/blog/2020/04/30/covid19-visualization-using-wavemaker-part-2)