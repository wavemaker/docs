---
title: "Dynamic Form"
id: "dynamic-form"
sidebar_label: "Dynamic Form"
---
---

Dynamic Form is a form that renders the fields and layout based on received metadata where, metadata is an API that holds data related to the Form fields. In this case, no information about the fields or layout is available and can only be determined with the metadata. Dynamic forms are most appropriate when the metadata changes frequently based on business models and are driven by another user role. For example, a Business Analyst can determine the fields in a form for targeted customer.

Following are the differences described to understand which type of Form is appropriate to use

|   Form   |   Dynamic Form   |
|--------|----------|
| Static display with Fixed fields and labels | Interactive display No fixed fields and labels |
| Upfront knowledge about fields i.e Validation, layout, widget type, formatting etc | No configuration is done upfront, only metadata is available |

## Benefits of Dynamic Form

### Provides Business Users more configuration/customization capabilities

Business Users can Control the Fields to Display. Dynamic forms are metadata-driven, which allows business users to configure the fields to be displayed, including in what order, and how to be displayed, in real-time. These forms are created with a simple UI that takes form fields as inputs from business users.

### Update forms without frequent deployments

Dynamic form are constructed over metadata, where they provide necessary details about the data such as name, type, widget type, validation rules which helps in avoiding repeated deployments to add new field details as it is done in static forms. Fields can be added in real-time by business user as per the requirement, as the metadata already contains the field details.

## How to configure Dynamic Form

You can either create or import a service where service is the API created against the metadata database.

:::important
WaveMaker accepts metadata in the following format:

Example: 
```markup
[{
“name”: “” //name of the field
“displayname”: “” //name to be displayed for the field
“type”: “” //type of the field
“required”: “” //isRequired
“widget”: “” //widget type for the field
“dataset”: “” //dataset for the field, if the widget is accepting the dataset
}]
```

If the metadata service returns some other structure than mentioned above, use the
[on-beforerender event](#modifying-dynamic-form-metadata) on the form to modify the data accordingly. 

:::

:::note

**Metadata**: It contains information like name, type, widget type, validation rules and other required details about the field.

:::

### Importing Service

1. Go to Web Services. Click **Import Web Service** to import new web service

[![](/learn/assets/import-newwebservice-dynamicform.png)](/learn/assets/import-newwebservice-dynamicform.png)


2. Select the provider and enter the Web Service URL. Click **Test** to verify the service response.

[![](/learn/assets/confirm-importedservicedetails-dynamicform.png)](/learn/assets/confirm-importedservicedetails-dynamicform.png)


3. Enter the Service Name and click **Import** to confirm the given details and import the service. Change the image

[![](/learn/assets/import-webservice-dynamicform.png)](/learn/assets/import-webservice-dynamicform.png)

### Creating Variable

Create a variable to fetch the metadata . To know how to create a variable, see [Creating Service Variable](https://docs.wavemaker.com/learn/app-development/variables/web-service#how-to-create-a-service-variable).

The created variable should be used in the **Markup** tab to [bind the metadata with the form](#binding-variable-with-form).

[![](/learn/assets/variable-markup-dynamicform.png)](/learn/assets/variable-markup-dynamicform.png)

### Creating Dynamic Form

1. Go to pages and create a new page. To create a new page, see [Creating Page](https://docs.wavemaker.com/learn/app-development/ui-design/page-creation).

#### Binding Variable with Form

2. Go to Markup tab and enter the following code snippet in the 'content' section.

```markup

<wm-form errormessage="" captionposition="top" title="Form" enctype="application/x-www-form-urlencoded" method="post" metadata="bind:Variables.createMetadata.dataSet" captionalign="left" name="form1" on-beforerender="form1BeforeRender($metadata, widget)">
                <wm-form-action key="reset" class="form-reset btn-secondary" iconclass="wi wi-refresh" display-name="Reset" type="reset"></wm-form-action>
                <wm-form-action key="save" class="form-save btn-success" iconclass="wi wi-save" display-name="Save" type="submit"></wm-form-action>
            </wm-form>

```

:::important

In the above code snippet, the accepted value for metadata is: 

```markup
metadata="bind:Variables.<Variable Name>.dataSet"

```

:::

[![](/learn/assets/add-formcode-dynamicform.png)](/learn/assets/add-formcode-dynamicform.png)


3. Click save to save the changes in Markup section. Click on Preview to view the created dynamic form.

[![](/learn/assets/confirm-formcode-dynamicform.png)](/learn/assets/confirm-formcode-dynamicform.png)

#### Modifying Dynamic Form Metadata

1. If the form fields do not render as desired, on-beforerender event is used that tranforms the provided field details into WaveMaker accepted format.

[![](/learn/assets/add-formcode-onbeforerender-dynamicform.png)](/learn/assets/add-formcode-onbeforerender-dynamicform.png)

:::important

In the above code snippet, the accepted value for on-beforerender is:

```markup
on-beforerender="<Form_Widget_Name>Beforerender($metadata, $isolateScope)"
```

Where $isolateScope is the accepted widget type.
:::

Dynamic form is created successfully.

### Create Static Form

In case of creating a form to enter the field details against the fetched metadata, find the steps below to manage the fields.

1. Create a new page. To create a new page, see [Creating Page](https://docs.wavemaker.com/learn/app-development/ui-design/page-creation).

2. Drag and drop **Data Table** widget onto the page.

[![](/learn/assets/drop-datatable-dynamicform.png)](/learn/assets/drop-datatable-dynamicform.png)

3. Configure the Data by selecting the service type as Database CRUD and enter the Service, Table Name, and Variable Name. Click on Next to confirm the details.

[![](/learn/assets/configure-liveform-admindynamic.png)](/learn/assets/configure-liveform-admindynamic.png)

4. Configure the Layout, Table Columns, Form Layout, and Form Fields. To configure a data table widget, see [Data Table Configuration](https://docs.wavemaker.com/learn/app-development/widgets/datalive/datatable/data-table-basic-usage).

5. Once the datatable is configured, click Preview.

6. Click on **New** and enter Name, Displayname, Type, and Widget as given in the metadata. Click **Save** to save the field details in the form.

[![](/learn/assets/enter-field-adminform.png)](/learn/assets/enter-field-adminform.png)

Field management form is created successfully.

[![](/learn/assets/adminform-entry-dynamicform.png)](/learn/assets/adminform-entry-dynamicform.png)
