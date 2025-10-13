---
title: "Row Expansion in Data Table"
id: "row-expansion-data-table"
sidebar_label: "Row Expansion" 
---
---
:::note
The row expansion feature is available since WaveMaker 10.0. GA release. 
:::

Row expansion is a property in the data table widget. By enabling the row expansion, you expand a row horizontally to view additional information of the expanded item. This feature appears as a small arrow placed on the left column of the table field. When you click the small arrow, the row expands as illustrated below. Using the row expansion, you can connect to different data sources and call information from multiple tables, web and REST APIs. For example, you can use Salesforce API to view “quick information” on the same page without needing to open a new tab or a new page. 

![](/learn/assets/RowExpansionWM10.gif)Row expansion enables you to expand and collapse the row for the optimum use of the display, which means you can instantly expand to view more details and collapse when not necessary. This way, you offer your app an engaging user experience.

## How row expansion works

Typically, you create a data table and a [partial](/learn/app-development/ui-design/page-concepts/partial-pages/). A partial is a semi-page, and it is a reusable object, whereas a data table is a data widget which displays data in a tabular format. You design the partial to contain information related to the table item which you intend to expand. For example, a table field and its expansion. Once the partial has been created, you add page params in the partial page settings. And lastly, you bind the partial and page params through the data table settings for the row expansion enablement.

## Example
In the following table, the **Table** is a Data Table; **Additional information** is a Partial. The **Table** connects to the **Additional information** through the specified Page Param called **Table field**. 

| Table | Table field | Additional information |
| --- | --- | --- |
| (Data Table) → | (Page Param) → | (Partial) |
| Customers  → | Customer ID  → | Recent orders |
| Orders  → | Order Number  → | Items from the order |
| Department  → | Department ID  → | Displaying charts for budget-related info |
| Employee name  → | Employee ID  → | Employee's profile information |

For more information, see [How to Configure Row Expansion in a Data Table](/learn/how-tos/how-to-configure-row-expansion-in-a-data-table/).
