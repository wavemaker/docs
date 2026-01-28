---
title: FileUpload - Basic Usage
id: file-upload-basic-usage
last_update: { author: "WaveMaker" }
---
1. Drag and drop a **FileUpload** widget onto the canvas.
2. You will be prompted to create a _FileServiceUploadFile_ Variable. For this demo purpose, retain the default selections of _Update data on input change_. **NOTE**: You can create and use any service, but keep in mind that the operation selected should be able to accept file data. The default file service _uploadFile_ operation fulfills this requirement. [![](./assets/img/fu_servicevar.png)](./assets/img/fu_servicevar.png)
3. From the Properties panel, set the **Multiple** property to true, this will enable us to upload multiple files, else you can upload a single file at a time. [![fu_props](./assets/img/fu_props.png)](./assets/img/fu_props.png)
4. Run the app, select files to upload [![fu_run](./assets/img/fu_run.png)](./assets/img/fu_run.png)

<!-- <!-- [FileUpload Use Cases](/learn/app-development/widgets/basic/fileupload-use-cases/) --> -->

- [1. FileUpload Basic Usage](./file-upload-basic-usage.md)
- [2. How to use various file service operations](../../../../../guide/components/file-upload-widget-operations.md)
- [3. How to save uploaded file to a DB](../../../../../guide/components/upload-file-save-database.md)
- [4. How to upload BLOB file to a DB](../../../../../guide/components/file-upload-blob-data.md)
- [5. How to upload file to custom directory](../../../../../guide/components/file-upload-custom-directory.md)
- [6. How to uploaded files from Java code](../../../../../guide/components/accessing-file-upload-java-code.md)
- [7. How to use FileUpload in Form and Live Form](../../../../../guide/components/upload-files-from-live-form-form.md)
