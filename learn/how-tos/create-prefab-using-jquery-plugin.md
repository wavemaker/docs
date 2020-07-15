---
title: "Create Prefab using JQuery Plugin"
id: ""
---

This post walks you through the creation and usage of a Prefab using JQuery Plugin. This is to showcase the use of Events and Methods in a Prefab.

Let us create a simple Prefab named TreeView which is interactive. We are going to use a JQuery plugin named _jsTree_. jsTree is a JQuery plugin, that provides interactive trees. jsTree is easily extendable, theme-able and configurable, it supports HTML & JSON data sources and AJAX loading.

**Prerequisites**

Download the jsTree JQuery Plugin from [https://www.jstree.com/](https://www.jstree.com/) Unzip the file downloaded and use the files from the dist folder.

[![](/learn/assets/jstree_prefab_download.png)](/learn/assets/jstree_prefab_download.png)

# Creating the Prefab

1. Click on **Create** from the _Prefab_ tab of the [Project Dashboard](http://[supsystic-show-popup id=102])
2. Enter a name (say TreeView2) and description for the Prefab.
3. From [File Explorer](/learn/app-development/services/3rd-party-libraries) add the JS and CSS files from the above-downloaded dist folder. Here we have created a folder _jsTree_ to hold the same structure as the dist folder. [![](/learn/assets/jstree_prefab_import.png)](/learn/assets/jstree_prefab_import.png)
4. From [Project Configurations](/learn/app-development/wavemaker-overview/product-walkthrough/#project-workspace), choose Config Prefab under Settings:
    1. In the Resources tab, choose the css and js files. [![](/learn/assets/jstree_prefab_resources.png)](/learn/assets/jstree_prefab_resources.png)
    2. In the Properties tab, add an _inbound_ property as an object,array (type if not selectable) which should consist of parent and child node names: [![](/learn/assets/jstree_prefab_inbound.png)](/learn/assets/jstree_prefab_inbound.png)
    3. In the Events tab, add events to be triggered when a node is Selected, Deselected, Expanded or Collapsed. Note, by default two events are already given - Load and Destroy [![](/learn/assets/jstree_prefab_events.png)](/learn/assets/jstree_prefab_events.png)
    4. In the Methods tab, add the following methods:
        
        1. _SelectNode_: Method to select a node
            - Parameters: Node, Type: any
            - Return type: void
        2. _Redraw_: Method to redraw the whole tree
            - Return type: void
        3. _selectAllNodes_: Method to select all Nodes
            - Return type: void
        4. _deselectAllNodes_: Method to deselect all nodes
            - Return type: void
        5. _deselectNode_: Method to deselect a node
            - Parameters: Node, Type: any
            - Return type: void
        
        [![](/learn/assets/jstree_prefab_methods.png)](/learn/assets/jstree_prefab_methods.png)
5. Once these properties, methods, and events are added to Prefab configuration in the Prefab Script the Method snippets will be auto-generated. You can fill with the code for the same.[![](/learn/assets/jstree_prefab_script.png)](/learn/assets/jstree_prefab_script.png)
6. Here is the script for all methods : Declare a variable:
    
    var treeMapInstance;
    
    Property Change event:
    
    Prefab.onPropertyChange = function(key, newVal, oldVal) {
        switch (key) {
            case "treedata": //UI Property for the node array
                initJStreeView();
                break;
            case "multiple":
            case "dots":
                _redraw();
                break;
        }
    };
    
    Function to initialize the tree view:
    
    function initJStreeView() {
        var treeViewELe = Prefab.Widgets.treeViewContainer.$element;
        treeViewELe.jstree({
            core: {
                multiple: true,
                themes: {
                    dots: true,
                },
                data: Prefab.treedata
            }
        });
        treeMapInstance = Prefab.Widgets.treeViewContainer.$element.jstree(true);
        // treeViewELe.on("changed.jstree", function(node, action, selected, event) {
        //     console.log("The selected nodes are:");
        //     console.log(action.selected);
        // });
    
        // select event
        treeViewELe.on("select_node.jstree", function(e, data) {
            Prefab.onSelect(e, data);
        });
    
        // deselect event
        treeViewELe.on("deselect_node.jstree", function(e, data) {
            Prefab.onDeselect(e, data);
        });
    
        // expand event
        treeViewELe.on("open_node.jstree", function(e, data) {
            Prefab.onExpand(e, data);
        });
    
        // collapse event
        treeViewELe.on("close_node.jstree", function(e, data) {
            Prefab.onCollapse(e, data);
        });
    }
    
    Function to redraw the tree view:
    
    function _redraw() {
        if (treeMapInstance) {
            treeMapInstance.redraw();
        }
    }
    
    Methods for the tree:
    
    /*
     * Method to select all nodes
     */
    Prefab.selectAllNodes = function() {
        if (treeMapInstance) {
            treeMapInstance.select_all();
        }
    };
    
    /*
     * Deselect all nodes
     */
    Prefab.deselectAllNodes = function() {
        if (treeMapInstance) {
            treeMapInstance.deselect_all();
        }
    };
    
    /*
     * Method for selecting a node in the tree by id.
     */
    Prefab.selectNode = function(node, preventOpen) {
        if (treeMapInstance) {
            treeMapInstance.select_node(node, false, preventOpen);
        }
    };
    
    /*
     * Method for deselecting a node in the tree.
     */
    Prefab.deselectNode = function(node) {
        if (treeMapInstance) {
            treeMapInstance.deselect_node(node);
        }
    };
    
    /*
     * Re Draws the whole tree
     */
    Prefab.redraw = function() {
        _redraw();
    }
    
7. Add a _wm-container tag_ with the name **treeViewContainer** in the Markup, as follows:
    
    <wm-container name="treeViewContainer"></wm-container>
    
    [![](/learn/assets/jstree_prefab_html.png)](/learn/assets/jstree_prefab_html.png)
8. Publish the Prefab. Know more about publishing Prefabs from [here](/learn/app-development/custom-widgets/creating-prefabs/#publish-prefab).

# Using the Prefab in Project

1. Let us now use the above-created Prefab in an application.
2. We are using the WaveMaker non-enterprise version and have Published the Prefab to Workspace.
3. _Create or Open an application_.
4. You can see the Prefab in the Prefab Listing.
5. On the Main page drag and drop the TreeView2 Prefab. [![](/learn/assets/jstree_prefab_appdnd.png)](/learn/assets/jstree_prefab_appdnd.png)

## Invoking Prefab Methods in Project

The prefab has exposed methods which can be triggered by the application as shown below.

1. To call the exposed methods drag and drop **four Button Widgets** in the main page under the Prefab and give the _captions_ for the buttons as SELECT ALL, SELECT NODE, DESELECT NODE and DESELECT ALL. We have _named_ the buttons as selectAll, selectNode, deselectNode and deselectAll.
2. Create _On Click_ events for each of the buttons. [![](/learn/assets/jstree_prefab_appmethods.png)](/learn/assets/jstree_prefab_appmethods.png)
3. This will create the snippet for the _<button>Click_ event in the script tab of the main page in the application.
4. The code for the _<button>Click_ event will call the exposed methods respectively (check the name of the Button widget, it might be different if you have not named them as mentioned in step 1). Ensure that the Prefab name (TreeView21) matches what you have in your project:
    
    Page.selectAllClick = function($event, widget) {
        Page.Widgets.TreeView21.selectAllNodes();
        alert("Selected All Nodes");
    };
    Page.selectNodeClick = function($event, widget) {
        Page.Widgets.TreeView21.selectNode(2);
        alert("Selected second Node");
    };
    
    Page.deselectNodeClick = function($event, widget) {
        Page.Widgets.TreeView21.deselectNode(2);
        alert("DeSelected second Node");
    };
    
    Page.deselectAllClick = function($event, widget) {
        Page.Widgets.TreeView21.deselectAllNodes();
        alert("DeSelected All Nodes");
    };
    
    [![](/learn/assets/jstree_prefab_appscript.png)](/learn/assets/jstree_prefab_appscript.png)

## Invoking Prefab Events in Project

The events are also exposed on the events tab and you can create actions for each of them.

[![](/learn/assets/jstree_prefab_appevents.png)](/learn/assets/jstree_prefab_appevents.png)

Here we have created Notification Action to be displayed for each of the Event:

- **selectAction** for **On Select** - Create a Notification Action and when any node is selected, it will give a callback as a notification with the text “Node Selected”
- **collapseAction **for **On collapse** - Create a Notification Action and when nodes are collapsed, it will give a callback as a notification with the text “Nodes Collapsed”
- **expandAction **for **On expand** - Create a Notification Action and when nodes are expanded it will give a callback as a notification with the text “Nodes expanded”
- **deselectAction** for **On deselect** - Create a Notification Action and when any node is deselected, it will give a callback as a notification with the text “Node DeSelected” [![](/learn/assets/jstree_prefab_appnotification.png)](/learn/assets/jstree_prefab_appnotification.png)

The Prefab application can also add an Event listener for an event and take some appropriate action once the event happens.

## Passing Data to Prefab in Project

Finally, this Prefab needs data to render in the Tree format.

1. For this, we have created a Model Variable with the following JSON structure:
    
    [
      {
        "id": 1,
        "text": "Root node",
        "state": {
          "opened": true
        },
        "icon": "",
        "type": [],
        "children": [
          {
            "id": 2,
            "text": "Child node 1",
            "state": {
              "selected": true
            },
            "icon": "glyphicon glyphicon-flash"
          },
          {
            "id": 3,
            "text": "Child node 2",
            "children": [
              {
                "id": 4,
                "text": "Child node 2 - 1",
                "state": {
                  "opened": true
                },
                "icon": "",
                "type": [],
                "children": [
                  {
                    "id": 5,
                    "text": "Child node 2 - 1 - 1",
                    "state": {
                      "selected": true
                    },
                    "icon": "glyphicon glyphicon-flash"
                  },
                  {
                    "id": 6,
                    "text": "Child node 2 - 1 - 1",
                    "icon": "glyphicon glyphicon-flash"
                  }
                ]
              }
            ]
          },
          {
            "id": 7,
            "text": "Child node 3",
            "state": {
              "selected": true
            },
            "icon": "glyphicon glyphicon-flash"
          }
        ]
      }
    ]
    
    [![](/learn/assets/jstree_prefab_appvar.png)](/learn/assets/jstree_prefab_appvar.png)
2. Bind the above Variable to the Tree Data property of the Prefab: [![](/learn/assets/jstree_prefab_appdata.png)](/learn/assets/jstree_prefab_appdata.png) [![](/learn/assets/jstree_prefab_appbind.png)](/learn/assets/jstree_prefab_appbind.png)
3. Run the app and see the Prefab in action [![](/learn/assets/jstree_prefab_apprun.png)](/learn/assets/jstree_prefab_apprun.png)

[Prefab Use Cases](/learn/app-development/widgets/use-cases-prefabs/)

- [1. Prefab to compare two strings](/learn/how-tos/create-simple-prefab/)
- [2. Prefab using 3rd Party UI Widgets](/learn/how-tos/create-prefab-using-third-party-ui-widgets/)
- [3. Prefab Using D3 & NVD3 Charts](/learn/how-tos/create-prefab-using-d3-nvd3-charts/)
- [4. Prefab Using D3 Library (DataMaps)](/learn/how-tos/create-prefab-using-d3-library-datamaps/)
- [5. Prefab using JQuery Plugin](#)
    - [i. Creation](#creation)
    - [ii. Usage](#usage)
        - [○ Invoking Methods](#methods)
        - [○ Invoking Events](#events)
        - [○ Passing Data](#data)
