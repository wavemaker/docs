---
title: "Combining Columns in Data Table"
id: "combining-columns-data-table"
---
---

## Scenario

You can combine two or more columns to be displayed in a single column in a Data Table. **Use Case**: From the Department table, display two half-yearly budget figures by adding the values for first two and the second two quarters. We will be using the hrdb that is shipped with WaveMaker.

## Pre-requisites

1. Create a Web responsive app
2. Import the sample hrdb database
3. Drag and drop a Data Table, setting the data source to the Department table from hrdb

## Steps to combine to columns

1. Go to Advanced Settings of the Data Table from the Properties panel
2. From the Columns tab, add two new columns - H1 and H2
3. In the View Mode section, enter the following for Value Expression:
    
{{row.getProperty('q1') + row.getProperty('q2')}}

This will add the content from columns q1 and q2 and set it as the content for H1 column. 

[![](/learn/assets/dt_ve_1.png)](/learn/assets/dt_ve_1.png)
    
:::note
q1 and q1 are the Mapped Column name for the columns Q1 and Q2.
:::

[![](/learn/assets/dt_ve_2.png)](/learn/assets/dt_ve_2.png)

4. Run the app and see the Data Table. 

[![](/learn/assets/dt_ve_3.png)](/learn/assets/dt_ve_3.png)


