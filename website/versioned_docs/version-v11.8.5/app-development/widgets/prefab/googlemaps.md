---
title: "Googlemaps"
id: "googlemaps"
---
---

The **Googlemaps** prefab connects with Google Maps and displays the map on your page. It can be used either for **location** map or as **route** map or as a **heat** map.

[![](/learn/assets/prefab.png)](/learn/assets/prefab.png)In order to use GoogleMaps, you need to register your app with Google Maps and add the API key here:

[![](/learn/assets/googlemaps_apikey.png)](/learn/assets/googlemaps_apikey.png)

## Layouts

Three types of maps can be plotted using Googlemaps Prefab:

Heat map 

<iframe width="100%" height="400" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/HeatMap">Example of Heat Map</iframe>

Location map 

<iframe width="100%" height="500" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/PrefabGMapMarker">Example of Marker Map</iframe>

Route map 

<iframe width="100%" height="500" style={{backgroundColor: "snow"}} allowtransparency="true" src="https://apps.wavemakeronline.com/documentation_snippets/#/RouteGMaps">Example of Route Map</iframe>

## Features

Using Googlemaps Prefab, you can:

- display various types of maps,
- [use events](#events) to customize the map behavior, and
- [use scripts](#script-access) to enhance the functionality.

There are three **Map Types** supported by Googlemaps Prefab:

1. **Markers** help to mark a given _location_ with an _icon_, _information_, highlight using a circle of given _radius_ and _shade_(color). The input can be any variable which has the above-mentioned fields delimited. The variable can be bound to the Locations property and each of the above properties can be set to the elements of the variable.
    - **Locations**: Variable containing the location details. Can be static variable in JSON format, or a Live Variable with the following fields
    - **Location type**: tells the format of the location being plotted. It can be
        - **LatLng** in which case Marker Latitude and Marker Longitude of the location is given as the input
        - **Address** wherein the Address fields in the form of a city, state, zip etc can be picked from the multi-list dropdown. These are the fields from the variable bound to the Locations property above.
    - **Marker Icon**: Used to mark the location
    - **Marker Info**: Any information that needs to be displayed when the location is clicked
    - **Perimeter Color**: Used to set a circle shaped boundary around the marker.
    - **Perimeter Radius**: Used to set the radius of the boundary around the marker. _This change is reflected in prefab only when Perimeter property is enabled_.
2. As a **route map** you can mark:
    - the **origin** and **destination** by passing the String or GeoLocations(Latitude and longitude) to get the route rendered on the map,
    - the **Waypoints** a location which needs to be included in the route from the origin to destination,
    - using the **Stopover** property you can choose to mark the waypoint in the route,
    - the **Travel Mode** can be Driving, Walking or Transit. The Route information like Origin, Destination, Duration, Distance is displayed below the map.
3. As a **Heatmap,** the traffic congestion points can be marked. You can set:
    - **Marker Latitude** and **Longitude**can be selected from the fields from the Locations variable
    - **Gradient**
    - **Pixel Density** to mark the size of the marker
    - **Opacity** to set the appearance of the marker

[![](/learn/assets/gm_features.png)](/learn/assets/gm_features.png)

## Events

The following events are exposed for Googlemaps Prefab:

1. On Load: this can be used to trigger any action when the Prefab is loaded on the page containing it
2. On Destroy: this can be used to trigger any action when the Prefab is deleted/closed
3. onMarkerclick: this can be used to trigger any action when a marker on the map is clicked
4. onMarkerhover: this can be used to trigger any action when a marker on the map is hovered on

## Script Access

- You can get the marker information from **$data** in the On Marker Click event of the google map.
- You can open the info window of the marker by invoking the _showInfoWindow_ method on the widget scope. Params required for the method : ‘_mapMarkerData_’. For example Page.Widgets.googlemaps1.showInfoWindow(mapMarkerData). This will open the info window for the selected marker. **Example:** To open the info window of the marker in the Marker on Click event is shown below:

```javascript
    Page.googlemaps1Markerclick = function($event, $data) {
        Page.Widgets.googlemaps1.showInfoWindow($data);
     };
```

- You can plot a custom Marker on the map either by sending the Address to the _markAddress_ function (or) by sending the _lat, lng_ values to the _markLatLng_ function. For example: Page.Widgets.googlemaps1.markAddress('Chicago') will plot the marker in Chicago, USA. Page.Widgets.googlemaps1.markLatLng(31.619770, 74.876713) will plot the marker according to the provided latitude, longitude values.
- You can remove all the custom Markers by invoking the function _clearAllMarkers_ on widget scope

[![](/learn/assets/gm_features_events.png)](/learn/assets/gm_features_events.png)

## Usage Scenario

We will see three use cases for various features of the Googlemaps prefab:

1. Location from Database
1. [Location from Static Variable](#location-from-static-variable)
1. [Route Map](#route-map)

### Location from Database

1. Drag and drop the **Googlemaps** prefab onto the canvas on any of the pages in your application.
2. Bind the **Locations** property to a database which contains the address fields. Here we are using _HrdbEmployeeData_ table from the [imported Sample DB](/learn/app-development/services/database-services/#integrating-database). [![screenshot](/learn/assets/googlemaps_loc_db.png)](/learn/assets/googlemaps_loc_db.png)
3. Set the **Markertype** to **Address** and choose a **city, state, and zip** for the **Address** property. [![screenshot](/learn/assets/googlemaps_props_address.png)](/learn/assets/googlemaps_props_address.png)
4. You can set the other properties to any fields in your DB. Here we are not setting them since we do not have corresponding fields in the sample DB.
5. Run and see the map. [![screenshot](/learn/assets/googlemaps_run_db.png)](/learn/assets/googlemaps_run_db.png)

### Location from Static Variable

1. Drag and drop the **Googlemaps** prefab onto the canvas on any of the pages in your application.
2. Create a custom variable as per your requirements. [Know more from here](/learn/app-development/variables/model-variable/). Then enable the **isList property**, and enter the appropriate JSON in the **Text Editor**. [![screenshot](/learn/assets/googlemaps_loc_statvar.png)](/learn/assets/googlemaps_loc_statvar.png) As an example you can use the following:

```json
 [
  {
    "coords": {
      "lat": 41.428146,
      "lng": -73.918993
    },
    "icon": "http://maps.google.com/mapfiles/ms/micons/water.png",
    "info": "Hudson River",
    "radius": 12345,
    "color": "#5133AB"
  },
  {
    "coords": {
      "lat": 40.712397,
      "lng": -74.005469
    },
    "icon": "http://maps.google.com/mapfiles/ms/micons/arts.png",
    "info": "New York",
    "radius": 12345,
    "color": "#0BC86E"
  },
  {
    "coords": {
      "lat": 39.366105,
      "lng": -74.436832
    },
    "icon": "http://maps.google.com/mapfiles/ms/micons/dollar.png",
    "info": "Atlantic City",
    "radius": 12345,
    "color": "#264B7F"
  }
]
```

- Bind the location's property of the prefab to the model variable created.
- Select _coords.lat_ for **Lat** property, _coords.lng_ for **Lng** property, _icon_ for **Icon** property and _info_ for **info** property. You can set the height and width of the prefab. The **zoom** property can be set for the default level of display, set the **width** and **height** of the display window. [![screenshot](/learn/assets/googlemaps_props_sample.png)](/learn/assets/googlemaps_props_sample.png)
- Save and run the application.
- You will see the google map displayed with the cities mentioned in the static variable highlighted with the appropriate icon and information tags. You can zoom in, zoom out, pan left, right, top and bottom as you would with google maps. [![screenshot](/learn/assets/prefab_google_run.png)](/learn/assets/prefab_google_run.png)
- To get the marker details in the on click event of the marker:
    - Go to the google map prefab and navigate to the Events tab in the properties panel. Here, in the On Marker Click event, select javascript from the dropdown. [![screenshot](/learn/assets/googlemapsonclickeventscript.png)](/learn/assets/googlemapsonclickeventscript.png)
    - In the Script tab from the Markerclick event, you can access the marker data as below: Example:

```javascript
        Page.googlemaps1Markerclick = function($event, $data) {
         var lat = $data.latLng.lat();
         var lng = $data.latLng.lng();
         var color = $data.color;
         var info = $data.info;
         var icon = $data.icon;
         var radius = $data.radius;
        };
```

### Route Map

Using the Origin and Destination properties, you can plot a route.

1. Drag and drop the **Googlemaps** prefab onto the canvas on any of the pages in your application.
1. Enter the values for **Origin** and **Destination**. These can be static string values or bound to variables. For example, we have used **Toronto** and **Ottawa** values: [![Screenshot](/learn/assets/googlemaps_route_run1.png)](/learn/assets/googlemaps_route_run1.png)
1. Using **Waypoint** property, you can set the intermediary points from origin to destination.

:::note
Due to restriction from Google Maps API, the input to waypoint has to be in a JSON format. Create a model **variable** with this content and bind it to the waypoint property.
:::

[![Screenshot](/learn/assets/googlemaps_route_statvar.png)](/learn/assets/googlemaps_route_statvar.png) Here is a sample code we have used for this example.

```json
[
  {
    "location": {
      "lat": 44.32384807250689,
      "lng": -78.079833984375
    }
  },
  {
    "location": {
      "lat": 44.55916341529184,
      "lng": -76.17919921875
    }
  }
]
```

- Set the **Origin** and **Destination** to **Toronto** and **Ottawa**, and bind the **Waypoint** to the model variable created in the previous step. Selecting the **Stopover** property will mark the waypoint. [![Screenshot](/learn/assets/googlemaps_route_waypt.png)](/learn/assets/googlemaps_route_waypt.png)
- Run the app. [![Screenshot](/learn/assets/googlemaps_route_run2.png)](/learn/assets/googlemaps_route_run2.png)
