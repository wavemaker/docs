---
title: "Integrate Amazon S3(Simple Storage Service) into WaveMaker App"
id: "aws-s3-connector"
sidebar_label: "Integrate Amazon S3 into WaveMaker App"
---
---

Learn how to implement file upload, download and delete file on S3 bucket using AWS S3 Connector.

## AWS S3 Connector
Amazon S3 (Simple Storage Service) is a scalable, high-speed, low-cost web-based service designed for online backup and archiving of data and application programs. It allows to upload, store, and download any type of files up to 5 TB in size. This service allows the subscribers to access the same systems that Amazon uses to run its own web sites. The subscriber has control over the accessibility of data, i.e. privately/publicly accessible.

This connector exposes api to interact with AWS S3 from WaveMaker application.

## Step 1: Importing the aws-s3-connector to project

1. Download the latest aws-s3-connector zip [here](https://github.com/wavemaker/aws-s3-connector/releases)
2. Import the downloaded aws-s3-connector zip into your app using the [Import Resource](/learn/app-development/services/3rd-party-libraries) option to the **Connector** folder.

## Step 2: Configure aws-s3-connector properties in profiles
1. By default externalized connector properties are added in the project profiles [Know More](/learn/connectors/connectors-import#externalizing-connector-properties).
2. Connector externalized properties are prefixed with **connector.${connectorName}**

```Java
connector.aws-s3-connector.default.aws.accessKey=
connector.aws-s3-connector.default.aws.accessSecret=
connector.aws-s3-connector.default.aws.clientRegion=
connector.aws-s3-connector.default.aws.bucketName=
```

## Step3: Perform File Operations in Storage Account.
Autowire the Connector Service into the added JavaService.

Import Statement: 
```Java
import com.wavemaker.connector.awss3connector.S3Connector;
```
```Java
@Autowired
private S3Connector s3Connector;
```

### 1. Upload file to Amazon S3 bucket.
Uploads a new file object to the specified Amazon S3 bucket.

Import statements required:
```Java
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException; 
```
Source Code:
```Java
public void uploadFile(MultipartFile file){
    try{
        s3Connector.uploadFileToS3(file.getInputStream(),file.getOriginalFilename(), null);
    } catch (IOException e) {
        throw new RuntimeException("Exception occurred while uploading file: "+e);
    }
}
```
:::note
The third param for upload API is the custom metadata. Add the key value pairs of the custom user-metadata for the associated file object. If the entry in the custom user-metadata map already contains the specified key, it will be replaced with these new contents.
:::
### 2. List files from Amazon S3.
Returns a list of summary information about the objects in the specified bucket.

Import statements required:
```Java
import com.wavemaker.connector.awss3connector.AWSS3ObjectSummary;
import java.util.List;
```
Source Code:
```Java
public List<AWSS3ObjectSummary> listObjects(){
    return s3Connector.listS3Objects();
}
```

### 3. Download file from S3.
Gets the object from Amazon S3 under the specified bucket.

Import statements required:
```Java
import com.wavemaker.runtime.file.model.DownloadResponse;
import java.io.OutputStream;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
```
Source Code:
```Java
public DownloadResponse downloadFile(String s3KeyName){
    try{
        OutputStream data= s3Connector.downloadFile(s3KeyName);
        DownloadResponse downloadResponse=new DownloadResponse();
        ByteArrayOutputStream outStream = (ByteArrayOutputStream)data;
        downloadResponse.setContents(new ByteArrayInputStream(outStream.toByteArray()));
        downloadResponse.setInline(false);
        downloadResponse.setFileName(s3KeyName);
        return downloadResponse;
        }catch(IOException e){
            throw new RuntimeException("Exception occurred while downloading file"+e);
        }
    }
```

### 4. Delete file in S3.
Deletes the specified object in the specified bucket.

Source Code:
```Java
public void deleteFile(String s3KeyName){
    s3Connector.deleteFile(s3KeyName);
}
```

:::note
**s3KeyName** is the file key name. 
Example: IMG_20200202.jpg
:::