---
title: "Accessing File Upload from Java Code"
id: "accessing-file-upload-java-code"
---
---
File upload service can be accessed via Java code. For example, if you have a fileupload widget in your app, the file can be accessed using the following code:

```
public String sampleJavaOperation(MultipartFile singleFile){

//for single file upload
singleFile.getInputStream()
}
}

In case you are using FileUpload to handle multiple files, then the code would be:

public String sampleJavaOperation(MultipartFile[] multipleFiles){

//for multiple files upload
for (MultipartFile file : multipleFiles) {
       fileuploaded = multipleFiles.getInputStream();
}
}
```

:::note
You need to import a few class files, as given below.
:::

```
import org.springframework.web.multipart.MultipartFile;
import com.wavemaker.runtime.file.model.DownloadResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
```

