---
title: "Row Expansion in Data Table"
id: ""
---

_row expansion feature is available since WaveMaker 10.0. GA release. _

expansion is a property in the data table widget. By enabling the row expansion, you expand a row horizontally to view additional information of the expanded item. This feature appears as a small arrow placed on the left column of the table field. When you click the small arrow, the row expands as illustrated below. Using the row expansion, you can connect to different data sources and call information from multiple tables, web and REST APIs. For example, you can use Salesforce API to view “quick information” on the same page without needing to open a new tab or a new page. 

![](https://www.wavemaker.com../assets/RowExpansionWM10.gif) expansion enables you to expand and collapse the row for the optimum use of the display, which means you can instantly expand to view more details and collapse when not necessary. This way, you offer your app an engaging user experience.

## row expansion works

, you create a data table and a  A partial is a semi-page, and it is a reusable object, whereas a data table is a data widget which displays data in a tabular format. You design the partial to contain information related to the table item which you intend to expand. For example, a table field and its expansion. Once the partial has been created, you add page params in the partial page settings. And lastly, you bind the partial and page params through the data table settings for the row expansion enablement.

the following table, the  is a Data Table;  **information** is a Partial. The  connects to the  **information** through the specified Page Param called  **field**

**field**

**information**

_(Data Table) →_

_(Page Param) →_

_(Partial)_

 _ →_

ID _ →_

orders

 _ →_

Number _ →_

from the order

 _ →_

ID _ →_

charts for budget-related info

name _ →_

ID _ →_

's profile information

more information, see  [to Configure Row Expansion in a Data Table](https://www.wavemaker.com/learn/how-tos/how-to-configure-row-expansion-in-a-data-table/)
