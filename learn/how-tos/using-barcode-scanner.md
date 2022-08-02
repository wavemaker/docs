---
title: "Using Barcode Scanner"
id: "using-barcode-scanner"
---

### Overview

Barcode Scanner can be used to scan and encode a barcode sequence.

In this post we will be creating a page that has a button to scan a book’s barcode. When a book’s barcode is scanned, information about the book has to fetched using google books api and barcode. [![book_barcode_run3](/learn/assets/book_barcode_run3.png)](/learn/assets/book_barcode_run3.png)

1. Open or Create a Hybrid Mobile App.
2. From the **Main Menu**, using the **Import -> Web Service** option import the Google books api rest web service.
    
    - Use the following **Url**: https://www.googleapis.com/books/v1/volumes?q={q}
    - Enable **Advanced Settings** and specify following parameters:
        - Headers Name : q
        - Test Value : 0141912499
    - Click **TEST** at the bottom of the dialog.
    - Once the response appears, click **NEXT**
    - Click **IMPORT**
    
    [![book_barcode_service](/learn/assets/book_barcode_service.png)](/learn/assets/book_barcode_service.png)

1. Create a page with _basic card template_. [![book_barcode_template](/learn/assets/book_barcode_template.png)](/learn/assets/book_barcode_template.png)
2. Drag and drop _bar code scanner_ widget on the page. [![book_barcode_design](/learn/assets/book_barcode_design.png)](/learn/assets/book_barcode_design.png)

1. Create a page level **service variable** to use the imported google books api. [![book_barcode_sv](/learn/assets/book_barcode_sv.png)](/learn/assets/book_barcode_sv.png)
2. Bind the value of q with barcode scanner ‘dataValue’ property and save the variable. [![book_barcode_svdata](/learn/assets/book_barcode_svdata.png)](/learn/assets/book_barcode_svdata.png) [![book_barcode_svdatabind](/learn/assets/book_barcode_svdatabind.png)](/learn/assets/book_barcode_svdatabind.png)
3. On the page:
    1. Bind Card Image to book thumbnail of the Service Variable.
    2. Bind Caption of Main Label to the book title.
    3. Bind Caption of Last Labler to the book description.
    4. Bind Show property of Tile such that tile will be shown only if there is book information. [![book_barcode_showbind](/learn/assets/book_barcode_showbind.png)](/learn/assets/book_barcode_showbind.png)
    5. Drag and Drop a Label to the page, set Caption property to ‘Book Not found’.
        1. Bind the Show property this label such that this label is shown when the Service Variable does not return any books. [![book_barcode_showbind2](/learn/assets/book_barcode_showbind2.png)](/learn/assets/book_barcode_showbind2.png)
4. On success of barcode scanner, invoke the service variable. [![book_barcode_event](/learn/assets/book_barcode_event.png)](/learn/assets/book_barcode_event.png)

1. Build the apk, install it on a android phone and open the app. [![book_barcode_run1](/learn/assets/book_barcode_run1.png)](/learn/assets/book_barcode_run1.png)
2. Click on ‘scan a book’ button. Camera will open for barcode scanning. Point the camera on any book barcode. [![book_barcode_run2](/learn/assets/book_barcode_run2.png)](/learn/assets/book_barcode_run2.png)
3. Book data will come up on the app, provided google has the book information. [![book_barcode_run3](/learn/assets/book_barcode_run3.png)](/learn/assets/book_barcode_run3.png)
