---
title: "Using the Progress Circle Widget"
id: ""
---

this article, you will learn how to create and configure a progress circle widget in a step by step process. A progress circle is a widget type.

- can use this widget to visualize the status of an event in a circle bar.
- can create reports or dashboards.

use the progress circle widget for static data, you enter values in the widget properties for default, min and max values. Also, you can execute SQL queries from the database and generate database APIs to get dynamic values; bind those values for default, min and max values in the widget properties to visualize the status or the data. 

### _case_

_a progress circle widget, visualize the total sales percentage of the product when you click on the item name from the data table._

**![](https://www.wavemaker.com../assets/CircleProgress.gif):** In the given example, we use the Product table which invokes data from the Sales table. Therefore, make sure to connect to the  sample database. To import the sample database, see  [to a Database](/learn/app-development/services/database-services/working-with-databases/)

## a database API

- the DataBases menu, n to the
- a query to get the total sales value from the  For example, write the following lines of code in the query builder to get the sum of sales:

 SUM(SALES) AS TOTAL 
FROM SALES

-  **, ** then click 
- the query as ; it then saves as a database API.
-  **+New** Create another database API to get the total of each product's sale value. For example, write the following lines of code in the query builder to get the sum of total sales for each product:

 SUM(SALES) AS PRODUCT\_SALE 
FROM SALES
WHERE PRODUCT\_ID = :productId

- parameters for the PRODUCT\_ID including TYPE and Test Value. For examples, Type: Integer; Test Value: 2;

- [![](https://www.wavemaker.com../assets/DataBaseParams.png)](https://www.wavemaker.com../assets/DataBaseParams.png) 
- ** Save**, and name the query as ; as a database API.

## the dashboard page

- a Page called  **Sales** To create a page, see  [Creation](/learn/app-development/ui-design/page-creation/)
- the page to contain the progress circle widget and a data table as shown in the image below:

[![](https://www.wavemaker.com../assets/Dashboard-page-design.png)](https://www.wavemaker.com../assets/Dashboard-page-design.png)

- the widgets, drag, and drop the Grid Layout widget to design and divide the page evenly.

- and drop the  **Circle** widget inside the grid.

- and drop a  **Table**

- the Data Table to show the products table.
    - Data From → Services.
    - a service type → All.
    - a service → salesdb.
    - /Entity → Products → A variable will be created automatically, for example, SalesdbProductsData.
    - per request → 5.
    - Records per request, Update data on input change, Request data on page load, and click 
    - ReadOnly → Simple View Only → Next.
    -  → Basic → Next → Done.
- and drop the labels inside the Grid Layout.
- the _12 _ the product sales value which is a  API.
- the _11_  the product name
    - bind for Label11 caption.
    - the  tab, select ProductTable2 → selecteditem → name. See image below:

[![](https://www.wavemaker.com../assets/BindCaption.png)](https://www.wavemaker.com../assets/BindCaption.png)

- the _12 _ the product sales value which is a  API.

## a database variable

- the Variables configuration page.
    1.   **Variable**, choose  **APIs**
    2. the next window, select  the drop down for the 
    3. an API type to  **APIs**
    4. the  the drop-down. For example, 
    5. a  to the variable as , and click 
    6. , add another variable. Follow step 1, 2, 3 in the variable configuration page.
    7. the  the drop-down. For example, 
    8. a  to the variable as , and click 
    9.  , configure the Data to bind with productId.
    10. to the widgets tab, select ProductsTable2 → selecteditem → id.

[![](https://www.wavemaker.com../assets/BindServiceandTableID.png)](https://www.wavemaker.com../assets/BindServiceandTableID.png)

- -  , and then 
    - and Close.

##  Configuring the progress circle widget

- the progress circle and open the property settings. 
- the  **Value**; f example, enter any number for a static value. For dynamic update, bind the  value with the variable called_\[$i\].productSale_
    - bind for the Default value in the properties.
    - to Variable tab and select ServiceSalesByProduct **→ ** → productSale. See the image below:
    

[![](https://www.wavemaker.com../assets/BindProgressCircleDefault.png)](https://www.wavemaker.com../assets/BindProgressCircleDefault.png)

- validation for  **Value** if you want to set a value other than “0”.
- the ** Value**; f example, enter any number for a static value. For dynamic update, bind the  value with the variable called _\[$i\].total_
    - bind for the  value in the properties.
    - to Variable tab and select ServiceMaximumValue**→ ** → total.  See the image below:
    

[![](https://www.wavemaker.com../assets/BindProgressCircleMaximum.png)](https://www.wavemaker.com../assets/BindProgressCircleMaximum.png)

Click the Preview icon to view the page. When you click on each table item, the product sale value displays on the progress circle widget. Also, on the right side of the progress circle, you will see the item name and total sale value.

- [case](#use-case)
- [a database API](#database-api)
- [ a dashboard page](#dashboard-page)
- [a database variable](#database-variable)
- [the progress circle widget](#configuring-progress-circle-widget)
