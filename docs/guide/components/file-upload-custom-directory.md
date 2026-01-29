---
title: "File Upload - Custom Directory"
id: "file-upload-custom-directory"
last_update: { author: "WaveMaker" }
---
FileUpload widget enables uploading files to the application. You can now upload the file to a custom folder which provides flexibility to cater to specific requirements. 

As discussed in [FileUpload](https://docs.wavemaker.com/learn/app-development/widgets/form-widgets/file-upload#features), a Java service against the FileUpload widget gets created automatically. You can upload a file to a custom directory by providing the path to the custom folder in the Java service.

1. Drag and drop the FileUpload widget. To know more, see [FileUpload Basic Usage](https://docs.wavemaker.com/learn/app-development/widgets/form-widgets/file-upload-basic-usage).

2. Go to Java services and inside `getUploadDir` method replace the upload directory path.

[![](./assets/img/get-upload-dir.png)](./assets/img/get-upload-dir.png)

The uploaded file is available in the **Import Resource** window under **Resources** in the path mentioned in the Java Service. You can view the created directory and file in the below image.

[![](./assets/img/uploaded-image.png)](./assets/img/uploaded-image.png)

## Uploading File using Apache Tomcat

This section showcases using the FileUpload widget to :

1. use the apache tomcat bin folder to upload files
2. to package the files in the application

<iframe width="508" height="360" src="https://docs.google.com/presentation/d/e/2PACX-1vRZNrR4NddPLUrPz4asRRs6qbNtG_vO2gz4lZjsjujJnMLxsTrzLWf-NKZC8lMyUPSQpgS12Ld79TV3/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

<!-- <!-- [File Upload Use Cases](/learn/app-development/widgets/basic/fileupload-use-cases/) --> -->

- [1. File Upload Basic Usage](../../user-interfaces/web/components/angular-components/form-widgets/file-upload-basic-usage.md)
- [2. How to use various file service operations](./file-upload-widget-operations.md)
- [3. How to save uploaded file to a DB](./upload-file-save-database.md)
- [4. How to upload BLOB file to a DB](./file-upload-blob-data.md)
- [5. How to upload file to custom directory](./file-upload-custom-directory.md)
- [6. How to uploaded files from Java code](./accessing-file-upload-java-code.md)
- [7. How to use file upload in Form and Live Form](./upload-files-from-live-form-form.md)

