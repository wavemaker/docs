---
title: "Barcode Scanner"
id: ""
---

is a number encoded in a sequence of bars (vertical line). It is used for machine reading the number.  A common example where barcode scanning is used is billing in supermarkets. Bill desk employees add a product to the bill by just scanning the product’s barcode. Barcode scanner widget brings this scanning functionality to mobile devices.

**Scanner widget** a button which, when clicked, opens the device camera for scanning. The scanned information will be available as ‘datavalue’ outbound property.

scanner has two main properties.

1. to be displayed
2. **class** for the icon to use.

caption is the text that the end user sees.

name is a unique identifier for the Barcode Scanner. Special characters and spaces are not allowed in widget name.

**Value**

is the default value to display value for an editor widget. Note that the display value is just what the user sees initially, and is not always the dataValue returned by the widget.

determines whether or not a component is visible. It is a bindable property.

on Demand (visible only when show property is bound to a variable)

this property is set and show property is bound, the initialization of the widget will be deferred till the widget becomes visible. This behavior improves the load time. Use this feature with caution, as it has a downside (as we will not be able to interact with the widget through script until the widget is initialized). When show property is not bound the widget will be initialized immediately.

Code Format

can restrict the format of the barcode to scan based on your app requirement.

The format can be:

- (not supported in iOS),
- \_39,
- \_93 (not supported in iOS),
- \_128,
- \_MATRIX,
- \_8,
- \_13,

- \_417 (not supported in iOS),
- \_CODE,
- 14 (not supported in iOS),
- \_EXPANDED (not supported in iOS),
- \_E,
- \_A,
- is the default setting. This option can be used to scan any barcode format listed above except PDF\_417 and RSS\_EXPANDED.

Class

bindable property defines the class of the icon that is applied to the button.

Size

property defines the size of the icon. Value has to be specified along with the units (em or px).

Align

property specifies how the elements should be aligned horizontally - left, center or right.

- **Success** - event listener to call when the barcode is successfully scanned. Two parameters are passed -  event object and isolate scope of the widget.

# Cases

Barcode Scanner can be used to scan and encode a barcode sequence. **: Barcode Scanner Usage with Web Service for book details from scanned book barcode** this post, we will be creating a page that has a button to scan a book’s barcode. When a book’s barcode is scanned, information about the book has to fetched using google books API and barcode. [![](../assets/book_barcode_run3.png)](../assets/book_barcode_run3.png)

### 1: Data

1. or Create a Hybrid Mobile App.
2. the , click on **Web Services** option >> Plus Icon>> Rest services to import the Google books API rest web service.
    
    - the following : ://www.googleapis.com/books/v1/volumes?q={q}
    - **Settings** and specify following parameters:
        -  Name: q
        -  Value: 0141912499
    -  at the bottom of the dialog.
    - the response appears, click
    
    [![](../assets/book_barcode_service.png)](../assets/book_barcode_service.png)

### 2: Layout

1. a page with _profile template_ [![](../assets/book_barcode_template.png)](../assets/book_barcode_template.png)
2. and drop _scanner_ widget on the page. [![](../assets/book_barcode_design.png)](../assets/book_barcode_design.png)

### 3: Variable & Binding

1. a page level **variable** to use the imported google books API. [![](../assets/book_barcode_sv.png)](../assets/book_barcode_sv.png)
2. the value of q with barcode scanner ‘dataValue’ property and save the variable. [![](../assets/book_barcode_svdata.png)](../assets/book_barcode_svdata.png) [![](../assets/book_barcode_svdatabind.png)](../assets/book_barcode_svdatabind.png)
3. the page:
    1. Card Image to book thumbnail of the Variable.
    2. Caption of Main Label to the book title.
    3. Caption of the Last Label to the book description.
    4. Show property of Tile such that tile will be shown only if there is book information. [![](../assets/book_barcode_showbind.png)](../assets/book_barcode_showbind.png)
    5. and Drop a Label to the page, set Caption property to ‘Book Not found’. Bind the Show property this label such that this label is shown when the Variable does not return any books. [![book_barcode_showbind2](../assets/book_barcode_showbind2.png)](../assets/book_barcode_showbind2.png)
4. the success of barcode scanner, invoke the created variable. [![](../assets/book_barcode_event.png)](../assets/book_barcode_event.png)

### 4: Build & Run

1. the apk, install it on an android phone and open the app. [![](../assets/book_barcode_run1.png)](../assets/book_barcode_run1.png)
2. on ‘scan a book’ button. The camera will open for barcode scanning. Point the camera at any book barcode. [![](../assets/book_barcode_run2.png)](../assets/book_barcode_run2.png)
3. data will come up on the app, provided google has the book information. [![](../assets/book_barcode_run3.png)](../assets/book_barcode_run3.png)

[10\. Mobile & Device Widgets](/learn/app-development/widgets/widget-library/#mobile)

- [10.1 Media List](/learn/app-development/widgets/mobile-widgets/media-list/)
- [10.2 Segmented Control](/learn/app-development/widgets/mobile-widgets/segmented-control/)
- [10.3 Barcode Scanner](/learn/app-development/widgets/mobile-widgets/barcode-scanner/)
    - [Features](#features)
    - [Properties](#properties)
    - [Events](#events)
    - [Use Cases](#use-cases)
- [10.4 Camera](/learn/app-development/widgets/mobile-widgets/camera/)
