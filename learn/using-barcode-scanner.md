---
title: "Using Barcode Scanner"
id: ""
---

### Overview

Barcode Scanner can be used to scan and encode a barcode sequence.

In this post we will be creating a page that has a button to scan a book’s barcode. When a book’s barcode is scanned, information about the book has to fetched using google books api and barcode. [![book_barcode_run3](./assets/book_barcode_run3.png)](./assets/book_barcode_run3.png)

1. Open or Create a Hybrid Mobile App.
2. From the **Main Menu**, using the **Import -> Web Service** option import the Google books api rest web service.
    
    - Use the following **Url**: https://www.googleapis.com/books/v1/volumes?q={q}
    - Enable **Advanced Settings** and specify following parameters:
        - Headers Name : q
        - Test Value : 0141912499
    - Click **TEST** at the bottom of the dialog.
    - Once the response appears, click **NEXT**
    - Click **IMPORT**
    
    [![book_barcode_service](./assets/book_barcode_service.png)](./assets/book_barcode_service.png)

1. Create a page with _basic card template_. [![book_barcode_template](./assets/book_barcode_template.png)](./assets/book_barcode_template.png)
2. Drag and drop _bar code scanner_ widget on the page. [![book_barcode_design](./assets/book_barcode_design.png)](./assets/book_barcode_design.png)

1. Create a page level **service variable** to use the imported google books api. [![book_barcode_sv](./assets/book_barcode_sv.png)](./assets/book_barcode_sv.png)
2. Bind the value of q with barcode scanner ‘dataValue’ property and save the variable. [![book_barcode_svdata](./assets/book_barcode_svdata.png)](./assets/book_barcode_svdata.png) [![book_barcode_svdatabind](./assets/book_barcode_svdatabind.png)](./assets/book_barcode_svdatabind.png)
3. On the page:
    1. Bind Card Image to book thumbnail of the Service Variable.
    2. Bind Caption of Main Label to the book title.
    3. Bind Caption of Last Labler to the book description.
    4. Bind Show property of Tile such that tile will be shown only if there is book information. [![book_barcode_showbind](./assets/book_barcode_showbind.png)](./assets/book_barcode_showbind.png)
    5. Drag and Drop a Label to the page, set Caption property to ‘Book Not found’.
        1. Bind the Show property this label such that this label is shown when the Service Variable does not return any books. [![book_barcode_showbind2](./assets/book_barcode_showbind2.png)](./assets/book_barcode_showbind2.png)
4. On success of barcode scanner, invoke the service variable. [![book_barcode_event](./assets/book_barcode_event.png)](./assets/book_barcode_event.png)

1. Build the apk, install it on a android phone and open the app. [![book_barcode_run1](./assets/book_barcode_run1.png)](./assets/book_barcode_run1.png)
2. Click on ‘scan a book’ button. Camera will open for barcode scanning. Point the camera on any book barcode. [![book_barcode_run2](./assets/book_barcode_run2.png)](./assets/book_barcode_run2.png)
3. Book data will come up on the app, provided google has the book information. [![book_barcode_run3](./assets/book_barcode_run3.png)](/wp-content/uploads/book_barcode_run3.png)
