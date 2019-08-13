---
title: "Accessing File Upload from Java Code"
id: "accessing-file-upload-java-code"
---

File upload service can be accessed via Java code. For example, if you have a fileupload widget in your app, the file can be accessed using the following code:

 String sampleJavaOperation(MultipartFile singleFile){

//for single file upload
singleFile.getInputStream()
}
}

In case you are using FileUpload to handle multiple files, then the code would be:

 String sampleJavaOperation(MultipartFile\[\] multipleFiles){

//for multiple files upload
for (MultipartFile file : multipleFiles) {
       fileuploaded = multipleFiles.getInputStream();
}
}

Note: You need to import a few class files, as given below:

 org.springframework.web.multipart.MultipartFile;
import com.wavemaker.runtime.file.model.DownloadResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.File;

[Upload Use Cases](/learn/app-development/widgets/basic/fileupload-use-cases/)

- [1\. File Upload Basic Usage](/learn/app-development/widgets/form-widgets/file-upload-basic-usage/)
- [2\. How to use various file service operations](/learn/how-tos/file-upload-widget-operations/)
- [3\. How to save uploaded file to a DB](/learn/how-tos/upload-file-save-database/)
- [4\. How to upload BLOB file to a DB](/learn/how-tos/file-upload-blob-data/)
- [5\. How to upload file to custom directory](/learn/how-tos/file-upload-custom-directory/)
- [6\. How to uploaded files from Java code](/learn/how-tos/accessing-file-upload-java-code/)
- [7\. How to use file upload in Form and Live Form](/learn/how-tos/upload-files-from-live-form-form/)
