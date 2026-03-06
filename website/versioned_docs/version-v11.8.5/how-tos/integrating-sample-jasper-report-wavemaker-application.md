---
title: "Integrating Sample Jasper Report in WaveMaker Application"
id: "integrating-sample-jasper-report-wavemaker-application"
---
---

:::note
Content in this page was outdated. Use Connector approach instead writing Code.
[Click here to see How-to use Jasper connector in WaveMaker  App](/learn/how-tos/generate-pdf-file-using-jasper-reports)
:::


Jasper Reports is an open source Java reporting tool that can write to a variety of targets, such as: screen, a printer, into PDF, HTML, Microsoft Excel, RTF, ODT, Comma-separated values or XML files. It can be used in Java-enabled applications, including Java EE or web applications, to generate dynamic content.

-  To Integrate Jasper Reports in your WaveMaker application you will need to write the Java Service where by passing required parameters one can generate the report. [Refer the link for creating Java service](/learn/app-development/services/java-services/java-service/).
- In this example the Java Service will take database and jrxml file (JasperReports reports are defined in an XML file format, called JRXML) as input and create the pdf report.

## Prerequisites

1. **Add Jasper as dependency in pom.xml along with required exclusions**: Here is the relevant section that needs to be added by the developer. Adding the below dependency in `pom.xml`, will automatically download the specified `.jar` file from the repository and place it in the lib folder of the corresponding project.

```xml
<dependency>
            <groupId>net.sf.jasperreports</groupId>
            <artifactId>jasperreports</artifactId>
            <version>6.4.1</version>
            <exclusions>
                <exclusion>
                    <groupId>com.fasterxml.jackson.core</groupId>
                    <artifactId>jackson-core</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>com.fasterxml.jackson.core</groupId>
                    <artifactId>jackson-databind</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>com.fasterxml.jackson.core</groupId>
                    <artifactId>jackson-annotations</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.apache.lucene</groupId>
                    <artifactId>lucene-core</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>com.fasterxml.jackson.core</groupId>
                    <artifactId>lucene-analyzers-common</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.apache.lucene</groupId>
                    <artifactId>lucene-queryparser</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.jfree</groupId>
                    <artifactId>jcommon</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.jfree</groupId>
                    <artifactId>jfreechart</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.eclipse.jdt.core.compiler</groupId>
                    <artifactId>ecj</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.codehaus.castor</groupId>
                    <artifactId>castor-xml</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>org.olap4j</groupId>
                    <artifactId>olap4j</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>com.google.zxing</groupId>
                    <artifactId>core</artifactId>
                </exclusion>
                <exclusion>
                    <groupId>com.ibm.icu</groupId>
                    <artifactId>icu4j</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
```

2. Create a database with a table named `employee` with the following DB Schema and add sample data. 

[![](/learn/assets/prereq_db.png)](/learn/assets/prereq_db.png)

3. The `jrxml` file has to be created as per your database. [Import](/learn/app-development/services/3rd-party-libraries) the `jrxml` file to `projects/src/main/resources`. For the above database, we have used the following [employee](/learn/assets/employee.zip).

## Steps in Integration

1. [Java Service Integration](/learn/app-development/services/java-services/java-service/) will create sample Java Service.
2. Add the below method `generatePdfReport` to the Java Service.

```java
public void generatePdfReport(String jrxml, String database,HttpServletResponse response)
  {
    Connection conn = null;
    try
    {
      //Fetching database connection from spring bean
      DataSource ds = (DataSource)WMAppContext.getInstance().getSpringBean(database + "DataSource");
      conn = ds.getConnection(); // get connected to database 

      //Opening jrxml input stream file from class loader
      InputStream jrxmlInput = getClass().getClassLoader().getResource(jrxml).openStream();

      // loads the jrxml file
      JasperDesign design = JRXmlLoader.load(jrxmlInput); 

      //Compiling jrxml file 
      JasperReport jasperReport = JasperCompileManager.compileReport(design); 

      //Print jasper report
      JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, new HashMap(), conn);
      logger.info("JasperPrint" + jasperPrint);

      //Export report to pdf format
      JRPdfExporter pdfExporter = new JRPdfExporter();
      pdfExporter.setExporterInput(new SimpleExporterInput(jasperPrint));
      ByteArrayOutputStream pdfReportStream = new ByteArrayOutputStream();
      pdfExporter.setExporterOutput(new SimpleOutputStreamExporterOutput(pdfReportStream));
      pdfExporter.exportReport();

      //Setting response header
      response.setContentType("application/pdf");
      response.setHeader("Content-Length", String.valueOf(pdfReportStream.size()));
      response.addHeader("Content-Disposition", "inline; filename=jasper.pdf;");

      //Closing stream
      OutputStream responseOutputStream = response.getOutputStream();
      responseOutputStream.write(pdfReportStream.toByteArray());
      responseOutputStream.close();
      pdfReportStream.close();

      logger.info("Completed Successfully: "); // logger will log the error into the studio logs
    } catch (Exception e) {
      logger.info("Error: ", e);
    } finally {
      if (conn!==null) {
        //closing database connection
        conn.close();
      }
    }
  }
```    
3. Add the following `import files`.

```java
import javax.servlet.http.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import com.wavemaker.runtime.WMAppContext; // used to load beans from app context

import com.wavemaker.runtime.security.SecurityService; 
import com.wavemaker.runtime.service.annotations.ExposeToClient; 
import com.wavemaker.runtime.service.annotations.HideFromClient; 
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Connection;
import java.util.HashMap;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.export.HtmlExporter;
import net.sf.jasperreports.engine.export.JRPdfExporter;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import net.sf.jasperreports.export.SimpleExporterInput;
import net.sf.jasperreports.export.SimpleHtmlExporterOutput;
import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
```

:::note
Some of these import files will be available already in the sample Java Service.
:::

4. Open/Create the page where you need to include the Jasper report.
5. Create a [Java Service Variable](/learn/assets/var_sel.png) with the following. 
    - Service as `MyJavaService` (the Java Service name created in step-1).
    - Method as `generatePdfReport` (the method name added in step-2).
6. Navigate to the **`Data`** tab.
    1. For **`jrxml`** field enter `employee.jrxml` (the file name added as per prerequisite2).
    2. For **`database`** field enter `employee` (database for which the report needs to be generated).
7. To display the pdf file, drag and drop **`iframe`** widget and set the Source property to the following.

`services/myJava/generatePdfReport?jrxml=employee.jrxml&database=employee`


