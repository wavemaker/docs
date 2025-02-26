---
title: "Inserting data from Excel into the database"
id: "insert-data-from-excel"
sidebar_label: "Insert Data from Excel into Database"
---
---

Learn how to Insert data from Excel into the database using excel connector. 
 

## Step 1: Import excel-connector to project

1. Download the latest excel-connector zip [here](https://github.com/wavemaker/excel-connector/releases)
1. Import the downloaded excel-connector zip into your app using the [Import Resource](/learn/app-development/services/3rd-party-libraries) option to the **_Connector_** folder.

## Step 2: Import a databaseService

1. In this example using excel connector we will be inserting data to HRDB User table
1. [Import Sample HRDB](/learn/app-development/services/database-services/working-with-databases/)

## Step 3: Creating Java Service

1. Create a [Java Service](/learn/app-development/services/java-services/java-service/#creating-a-java-service), named ExcelService
1. Add the following import statements in the Java service created in the above step.

    ```Java
    import java.util.List;
    import java.io.IOException;
    import org.springframework.web.multipart.MultipartFile;
    import com.wavemaker.connector.excel.ExcelConnector;
    import com.exceldemo.hrdb.User;
    import com.exceldemo.hrdb.service.UserService;
    ```

1. Follow below code snippet for creating a method to insert data to HRDB database User table from excel file

    ```Java
    @ExposeToClient
    public class ExcelService {

        private static final Logger logger = LoggerFactory.getLogger(ExcelService.class);

        @Autowired
        private UserService userService;
    
        @Autowired
        private ExcelConnector excelConnector;
    
        public void createUsersFromExcelFile(MultipartFile file) throws IOException {
            List<User> usersList =  excelConnector.readExcelAsObject(file.getInputStream(), User.class);
            usersList.forEach(user -> {
                userService.create(user);
            });
        }
    }

## Step 4: Integrating with UI

1. Drag and Drop a FileUpload widget
1. Create a Database CRUD variable for HRDB User table with name as `HrdbUserData`
1. Drag and Drop a Data Table from the existing Database CRUD variable `HrdbUserData`
1. Create a JavaService variable for the ExcelService created in the previous step with name as `userCreationVariable` and bind variable parameter to `Widgets.fileupload1.selectedFiles[0]` and on the onSuccess event of variable give `HrdbUserData` variable
1. For fileUpload widget onSelect event Callback give variable `userCreationVariable`

Done, now our aplication will take excel file as input and inserts that data into user table of the database

Java Service Use Cases

1. [How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)
1. [How to implement forgot password feature using Java Service](/learn/how-tos/implementing-forgot-password-feature-using-java-service/)
1. [How to access REST APIs from Java Service](/learn/how-tos/accessing-rest-apis-java-service/)
1. [How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)
1. [How to accomplish Pre-Post Processing for a DB Service APIs](/learn/how-tos/pre-post-processing-db-service-apis/)
