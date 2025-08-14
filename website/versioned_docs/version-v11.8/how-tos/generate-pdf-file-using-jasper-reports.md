---
title: "How to generate PDF File using Jasper Reports"
id: "generate-pdf-file-using-jasper-reports"
---
---
## Step 1:  Import the jasper-report-connector to project

1. Download the latest jasper-report-connector zip [from here](https://github.com/wavemaker/jasper-reports-connector/releases/)
1. Import the downloaded jasper-report-connector zip into your project using the [Import Resource](/learn/app-development/services/3rd-party-libraries) option to the **_Connector_** folder.

## Step 2: Create a Java Service
 1. Create a [Java Service](/learn/app-development/services/java-services/java-service/#creating-a-java-service), named JasperReportService
 2. Add import statement for jasper-report-connector interface.
     ```java
     import com.wavemaker.connector.jasper.JasperConnector;
     ```
 3. Autowire the jasper report service
     ```java
     @Autowired
     private JasperConnector jasperConnector;
     ```


  We can generate the Jasper Reports using various data sources in WaveMaker projects. 
  This document will present the data base and Api data as the datasources.

### Example 1: Generating Jasper Report from a imported DataBase:

  1. Build your report using [Jasper Studio](https://community.jaspersoft.com/), which enables you to build and customize look and feel of the report. Once you design the report export the reportxml(.jrxml) and import into WaveMaker project using [Import Resource](/learn/app-development/services/3rd-party-libraries) to the `${ServiceName}/src/` folder
    
  1. The following sample report jrxml is provided for your reference which loads the data from hrdb **Employee** table and generates the report.

     ```xml
     <jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports
          http://jasperreports.sourceforge.net/xsd/jasperreport.xsd"
                name="My first report" pageWidth="595" pageHeight="842" columnWidth="535"
                leftMargin="20" rightMargin="20" topMargin="20" bottomMargin="20">
     <queryString language="SQL">
          <![CDATA[select * from employee]]>
     </queryString>
     <field name="EMP_ID" class="java.lang.Integer">
          <fieldDescription><![CDATA[EMP_ID]]></fieldDescription>
     </field>
     <field name="firstname" class="java.lang.String">
        <fieldDescription><![CDATA[firstname]]></fieldDescription>
     </field>
     <field name="lastname" class="java.lang.String">
          <fieldDescription><![CDATA[lastname]]></fieldDescription>
     </field>
     <field name="USERNAME" class="java.lang.String">
          <fieldDescription><![CDATA[USERNAME]]></fieldDescription>
     </field>
     <field name="ROLE" class="java.lang.String">
          <fieldDescription><![CDATA[ROLE]]></fieldDescription>
     </field>
     <field name="city" class="java.lang.String">
          <fieldDescription><![CDATA[city]]></fieldDescription>
     </field>
     <title>
          <band height="70">
              <line>
                  <reportElement x="0" y="0" width="515" height="1"/>
              </line>
              <staticText>
                  <reportElement x="0" y="10" width="515" height="30"/>
                  <textElement textAlignment="Center">
                      <font size="22" isBold="true"/>
                  </textElement>
                  <text><![CDATA[Employees By City]]></text>
              </staticText>
          </band>
     </title>
     <pageHeader>
          <band height="140">
              <staticText>
                  <reportElement x="65" y="16" width="424" height="50"/>
                  <textElement textAlignment="Center">
                      <font size="26" isBold="true"/>
                  </textElement>
                  <text><![CDATA[Employees Report]]></text>
              </staticText>
          </band>
     </pageHeader>
     <columnHeader>
          <band height="18">
              <staticText>
                  <reportElement mode="Opaque" x="0" y="0" width="80" height="18"
                                forecolor="#FFFFFF" backcolor="#999999"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <text><![CDATA[ID]]></text>
              </staticText>
              <staticText>
                  <reportElement mode="Opaque" x="80" y="0" width="80" height="18"
                                forecolor="#FFFFFF" backcolor="#999999"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <text><![CDATA[FIRSTNAME]]></text>
              </staticText>
              <staticText>
                  <reportElement mode="Opaque" x="160" y="0" width="80" height="18"
                                forecolor="#FFFFFF" backcolor="#999999"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <text><![CDATA[LASTNAME]]></text>
              </staticText>
              <staticText>
                  <reportElement mode="Opaque" x="240" y="0" width="80" height="18"
                                forecolor="#FFFFFF" backcolor="#999999"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <text><![CDATA[USERNAME]]></text>
              </staticText>
              <staticText>
                  <reportElement mode="Opaque" x="320" y="0" width="80" height="18"
                                forecolor="#FFFFFF" backcolor="#999999"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <text><![CDATA[ROLE]]></text>
              </staticText>
              <staticText>
                  <reportElement mode="Opaque" x="400" y="0" width="80" height="18"
                                forecolor="#FFFFFF" backcolor="#999999"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <text><![CDATA[CITY]]></text>
              </staticText>
          </band>
     </columnHeader>
     <detail>
          <band height="20">
              <textField hyperlinkType="None">
                  <reportElement x="0" y="0" width="80" height="20"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <textFieldExpression class="java.lang.Integer"><![CDATA[$F{EMP_ID}]]>
                  </textFieldExpression>
              </textField>
              <textField hyperlinkType="None">
                  <reportElement x="80" y="0" width="80" height="20"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <textFieldExpression class="java.lang.String"><![CDATA[$F{firstname}]]>
                  </textFieldExpression>
              </textField>
              <textField hyperlinkType="None">
                  <reportElement x="160" y="0" width="80" height="20"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <textFieldExpression class="java.lang.String"><![CDATA[$F{lastname}]]>
                  </textFieldExpression>
              </textField>
              <textField hyperlinkType="None">
                  <reportElement x="240" y="0" width="80" height="20"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <textFieldExpression class="java.lang.String"><![CDATA[$F{USERNAME}]]>
                  </textFieldExpression>
              </textField>
              <textField hyperlinkType="None">
                  <reportElement x="320" y="0" width="80" height="20"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <textFieldExpression class="java.lang.String"><![CDATA[$F{ROLE}]]>
                  </textFieldExpression>
              </textField>
              <textField hyperlinkType="None">
                  <reportElement x="400" y="0" width="80" height="20"/>
                  <textElement>
                      <font size="12"/>
                  </textElement>
                  <textFieldExpression class="java.lang.String"><![CDATA[$F{city}]]>
                  </textFieldExpression>
              </textField>
          </band>
     </detail>
     </jasperReport>
      ```

  3. Place the _.jrxml_ file in the java service src folder as shown below: 
  [![](/learn/assets/Jasper_jrxml_location.png)](/learn/assets/Jasper_jrxml_location.png) 

  4. [Import Sample HRDB](/learn/app-development/services/database-services/working-with-databases/) database into the project 
  5. Autowire the imported DataBase dataSource bean in to the created java serice
    
      ```java
      @Autowired
      @Qualifier("hrdbDataSource")
      private WMDataSource dataSource;
      ```

      :::note
      Here Qualifier name is ${databaseServiceName}DataSource
      :::

  6. Java service code to generate Jasper Report PDF from hrdb Employee table  
    
      ```java
      import java.io.*;
      import java.util.HashMap;
      import javax.servlet.http.HttpServletResponse;

      import org.slf4j.Logger;
      import org.slf4j.LoggerFactory;

      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.beans.factory.annotation.Qualifier;
      import org.springframework.web.client.RestTemplate;


      import com.wavemaker.runtime.security.SecurityService;
      import com.wavemaker.runtime.service.annotations.ExposeToClient;
      import com.wavemaker.runtime.service.annotations.HideFromClient;


      //import com.wavemaker.runtime.file.model.DownloadResponse;
      //import com.wavemaker.runtime.file.model.Downloadable;
      
      import com.wavemaker.runtime.commons.file.model.DownloadResponse;
      import com.wavemaker.runtime.commons.file.model.Downloadable;
      

      import com.wavemaker.connector.jasper.JasperConnector;
      import com.wavemaker.connector.jasper.JasperExportType;
      import com.wavemaker.runtime.data.datasource.WMDataSource;
      //import com.jasperreportconnector_integratio.jasperreportservice.model.*;


      @ExposeToClient
      public class JasperReportService {
        
        private static final Logger logger = LoggerFactory.getLogger(JasperReportService.class);
        
        @Autowired
        private JasperConnector jasperConnector;
        
        @Autowired
        @Qualifier("hrdbDataSource")
        private WMDataSource dataSource;
        
        
        
        public Downloadable generatePDFReportFromDataSource() {
            
            logger.info("Calling connector to generate the jasperRepoet");
            ByteArrayOutputStream pdfReportStream = (ByteArrayOutputStream) jasperConnector.generateReport(JasperExportType.PDF, 
            "emp.jrxml", new HashMap<>(), dataSource);
            
            DownloadResponse downloadableResponse = new DownloadResponse(new ByteArrayInputStream(pdfReportStream.toByteArray()), "application/pdf", "jasper.pdf");

            downloadableResponse.setInline(false);

            return downloadableResponse;
        }
      }
      ```
      :::note
      Here we can use various export types defined in JasperExportType class
      :::
    
      ```java
      public enum JasperExportType {
          HTML, PDF, XLS, CSV, DOC
      }
      ```


### Example 2: Generating Jasper Report by consuming the API Data

  
  - To generate PDF file using Jasper Reports, data needs to be consumed from an external REST API. This data should be passed to the jasper report to genereate the PDF file.

  - Steps to generate PDF file using Jasper reports are as follows:
  
  1. Take a [Random User Rest api](https://randomuser.me/api?results=10&format=json).
  2. The Rest api response JSON output looks typically as follows:

        ```json
        {
          "results":[
              {
                "gender":"female",
                "name":{
                    "title":"Mrs",
                    "first":"سوگند",
                    "last":"حیدری"
                },
                "location":{
                    "street":{
                      "number":7708,
                      "name":"کلاهدوز"
                    },
                    "city":"همدان",
                    "state":"قزوین",
                    "country":"Iran",
                    "postcode":19937,
                    "coordinates":{
                      "latitude":"32.0062",
                      "longitude":"75.8685"
                    },
                    "timezone":{
                      "offset":"-10:00",
                      "description":"Hawaii"
                    }
                },
                "email":"swgnd.hydry@example.com",
                "login":{
                    "uuid":"82a1cfc8-1f05-4022-87af-2c609ad71d72",
                    "username":"yellowcat820",
                    "password":"perkins",
                    "salt":"9ctdihFC",
                    "md5":"35aa186cb7b284ef325d074f15b92c14",
                    "sha1":"710d7669e9a5e7acffd81c52207b6e1735542017",
                    "sha256":"2c9bd5e4c2d1f2b4868cb4697928c326399b4043f5fc9cb0d577d3fc050c4dc8"
                },
                "dob":{
                    "date":"1965-05-21T10:23:03.245Z",
                    "age":55
                },
                "registered":{
                    "date":"2002-05-12T01:19:23.992Z",
                    "age":18
                },
                "phone":"068-40841829",
                "cell":"0900-366-6250",
                "id":{
                    "name":"",
                    "value":null
                },
                "picture":{
                    "large":"https://randomuser.me/api/portraits/women/58.jpg",
                    "medium":"https://randomuser.me/api/portraits/med/women/58.jpg",
                    "thumbnail":"https://randomuser.me/api/portraits/thumb/women/58.jpg"
                },
                "nat":"IR"
              },
              {
                "gender":"male",
                "name":{
                    "title":"Mr",
                    "first":"Abdullahi",
                    "last":"Lyngvær"
                },
                "location":{
                    "street":{
                      "number":4218,
                      "name":"Fred. Olsens gate"
                    },
                    "city":"Vik",
                    "state":"Vestfold",
                    "country":"Norway",
                    "postcode":"5063",
                    "coordinates":{
                      "latitude":"59.0651",
                      "longitude":"-76.8243"
                    },
                    "timezone":{
                      "offset":"-5:00",
                      "description":"Eastern Time (US & Canada), Bogota, Lima"
                    }
                },
                "email":"abdullahi.lyngvaer@example.com",
                "login":{
                    "uuid":"f015aaa3-80c4-4083-a3ef-5cbf1a383a35",
                    "username":"bluefrog472",
                    "password":"pang",
                    "salt":"US9gPmIm",
                    "md5":"a5844013475424d724302f2991d9ed77",
                    "sha1":"5c6b17606201f0b286c541f9b1f94755419cbbcd",
                    "sha256":"3f93d57080fed6bb7dc0ad4489f236b6d972f8d1764703cf3dd0b6818dfee529"
                },
                "dob":{
                    "date":"1993-07-18T04:05:16.188Z",
                    "age":27
                },
                "registered":{
                    "date":"2004-02-11T17:09:18.310Z",
                    "age":16
                },
                "phone":"25377095",
                "cell":"43846252",
                "id":{
                    "name":"FN",
                    "value":"18079344164"
                },
                "picture":{
                    "large":"https://randomuser.me/api/portraits/men/64.jpg",
                    "medium":"https://randomuser.me/api/portraits/med/men/64.jpg",
                    "thumbnail":"https://randomuser.me/api/portraits/thumb/men/64.jpg"
                },
                "nat":"NO"
              },
              {
                "gender":"female",
                "name":{
                    "title":"Miss",
                    "first":"Lumi",
                    "last":"Kujala"
                },
                "location":{
                    "street":{
                      "number":2761,
                      "name":"Esplanadi"
                    },
                    "city":"Haapajärvi",
                    "state":"Southern Savonia",
                    "country":"Finland",
                    "postcode":48347,
                    "coordinates":{
                      "latitude":"-15.5371",
                      "longitude":"145.3695"
                    },
                    "timezone":{
                      "offset":"+11:00",
                      "description":"Magadan, Solomon Islands, New Caledonia"
                    }
                },
                "email":"lumi.kujala@example.com",
                "login":{
                    "uuid":"1a096bc0-f936-4d69-b934-1869861f410c",
                    "username":"browngoose244",
                    "password":"cleo",
                    "salt":"jZBCJ9AU",
                    "md5":"337382dc4a33f6ad9d83d8d60e6c61df",
                    "sha1":"e5a4a0ec540efd422da964b8e005bf5640afc31a",
                    "sha256":"938e52af41074bf3c59a9d780404517fd87e3f326bd8dcce22b75de4679fbc55"
                },
                "dob":{
                    "date":"1949-09-10T16:53:58.541Z",
                    "age":71
                },
                "registered":{
                    "date":"2014-05-31T22:17:18.262Z",
                    "age":6
                },
                "phone":"04-001-698",
                "cell":"045-870-79-48",
                "id":{
                    "name":"HETU",
                    "value":"NaNNA740undefined"
                },
                "picture":{
                    "large":"https://randomuser.me/api/portraits/women/4.jpg",
                    "medium":"https://randomuser.me/api/portraits/med/women/4.jpg",
                    "thumbnail":"https://randomuser.me/api/portraits/thumb/women/4.jpg"
                },
                "nat":"FI"
              }
          ],
          "info":{
              "seed":"f58ab75d5544db7a",
              "results":3,
              "page":1,
              "version":"1.3"
          }
        }
        ```

    
  3. Design a jasper report for the above data. The following is a sample report file. Which we need to import into the project using [Import Resource](/learn/app-development/services/3rd-party-libraries) to the **${Service}/src/** folder.

      ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="Report" pageWidth="595" pageHeight="842" columnWidth="555" leftMargin="20" rightMargin="20" topMargin="20" bottomMargin="20" uuid="81afe112-ee1b-4443-8d1c-cb6d9ab95dd8">
            <property name="com.jaspersoft.studio.data.defaultdataadapter" value="JsonArrayDataAdapter.xml"/>
            <subDataset name="results" uuid="4563e834-a9e5-43b5-9f0a-824948c73c73">
                <field name="Email" class="java.lang.String">
                    <fieldDescription><![CDATA[email]]></fieldDescription>
                </field>
                <field name="Gender" class="java.lang.String">
                    <fieldDescription><![CDATA[gender]]></fieldDescription>
                </field>
                <field name="Phone" class="java.lang.String">
                    <fieldDescription><![CDATA[phone]]></fieldDescription>
                </field>
            </subDataset>
            <queryString language="json">
                <![CDATA[]]>
            </queryString>
            <field name="Email" class="java.lang.String">
                <fieldDescription><![CDATA[email]]></fieldDescription>
            </field>
            <field name="Gender" class="java.lang.String">
                <fieldDescription><![CDATA[gender]]></fieldDescription>
            </field>
            <field name="Phone" class="java.lang.String">
                <fieldDescription><![CDATA[phone]]></fieldDescription>
            </field>
            <title>
                <band height="70">
                    <line>
                        <reportElement x="0" y="0" width="515" height="1"/>
                    </line>
                    <staticText>
                        <reportElement x="0" y="10" width="515" height="30"/>
                        <textElement textAlignment="Center">
                            <font size="22" isBold="true"/>
                        </textElement>
                        <text><![CDATA[Random Users Data]]></text>
                    </staticText>
                </band>
            </title>
            <pageHeader>
                <band height="140">
                    <staticText>
                        <reportElement x="65" y="16" width="424" height="50"/>
                        <textElement textAlignment="Center">
                            <font size="26" isBold="true"/>
                        </textElement>
                        <text><![CDATA[Users Report]]></text>
                    </staticText>
                </band>
            </pageHeader>
            <columnHeader>
                <band height="23">
                    <staticText>
                        <reportElement mode="Opaque" x="0" y="3" width="535" height="15"
                                      forecolor="#FFFFFF" backcolor="#999999"/>
                        <box>
                            <bottomPen lineWidth = "1.0" lineColor = "#CCCCCC" />
                        </box>
                        <text>
                            <![CDATA[]]>
                        </text>
                    </staticText>
                    <staticText>
                        <reportElement x = "400" y = "3" width = "121" height = "15" />

                        <textElement textAlignment = "Center" verticalAlignment = "Middle">
                            <font isBold = "true" />
                        </textElement>

                        <text><![CDATA[GENDER]]></text>
                    </staticText>
                    <staticText>
                        <reportElement x="10" y="3" width="121" height="15" />
                        <textElement textAlignment = "Center" verticalAlignment = "Middle">
                            <font isBold ="true"/>
                        </textElement>
                        <text><![CDATA[E-MAIL]]></text>
                    </staticText>
                    <staticText>
                        <reportElement x="200" y="0" width="121" height="15"
                                      forecolor="#FFFFFF" backcolor="#70A9A9"/>
                        <textElement textAlignment = "Center" verticalAlignment = "Middle">
                            <font isBold = "true" />
                        </textElement>
                        <text><![CDATA[PHONE]]></text>
                    </staticText>
                </band>
            </columnHeader>
            <detail>
                <band height="25" splitType="Stretch">
                    <componentElement>
                        <reportElement x="0" y="1" width="333" height="20" uuid="c3237c70-6b2e-43e3-aa21-5092d8b91afc"/>
                        <jr:list xmlns:jr="http://jasperreports.sourceforge.net/jasperreports/components" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports/components http://jasperreports.sourceforge.net/xsd/components.xsd" printOrder="Vertical">
                            <datasetRun subDataset="results" uuid="f5fdc6a3-736f-43ce-b549-cd7332d19eb8">
                                <dataSourceExpression><![CDATA[((net.sf.jasperreports.engine.data.JsonDataSource)$P{REPORT_DATA_SOURCE}).subDataSource("results")]]></dataSourceExpression>
                            </datasetRun>
                            <jr:listContents height="25" width="600">
                                <textField>
                                    <reportElement x = "50" y = "3" width = "121" height = "15" uuid="07e3ff2a-3832-4b06-9275-cb1ee8e51cfe"/>
                                    <textFieldExpression><![CDATA[$F{Email}]]></textFieldExpression>
                                </textField>
                                <textField>
                                    <reportElement x="400" y="3" width="121" height="15"  uuid="07e3ff2a-3832-4b06-9275-cb1ee8e51cfe"/>
                                    <textFieldExpression><![CDATA[$F{Gender}]]></textFieldExpression>
                                </textField>
                                <textField>
                                    <reportElement x="200" y="3" width="121" height="15" uuid="07e3ff2a-3832-4b06-9275-cb1ee8e51cfe"/>
                                    <textFieldExpression><![CDATA[$F{Phone}]]></textFieldExpression>
                                </textField>
                            </jr:listContents>
                        </jr:list>
                    </componentElement>
                </band>
            </detail>
        </jasperReport>
      ```
      
  4. Create a method named generatePDFReport and call the jasper-report connector appropriate method, which will return the generated PDF Jasper Report.
      
        ```java
        import java.io.*;
        import java.util.HashMap;
        import javax.servlet.http.HttpServletResponse;

        import org.slf4j.Logger;
        import org.slf4j.LoggerFactory;

        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.beans.factory.annotation.Qualifier;
        import org.springframework.web.client.RestTemplate;


        import com.wavemaker.runtime.service.annotations.ExposeToClient;
        import com.wavemaker.runtime.service.annotations.HideFromClient;


        import com.wavemaker.runtime.file.model.DownloadResponse;
        import com.wavemaker.runtime.file.model.Downloadable;

        import com.wavemaker.connector.jasper.JasperConnector;
        import com.wavemaker.connector.jasper.JasperExportType;
        //import com.jasperreportconnector_integratio.jasperreportservice.model.*;


        @ExposeToClient
        public class JasperReportService {

            private static final Logger logger = LoggerFactory.getLogger(JasperReportService.class);
            
            @Autowired
            private JasperConnector jasperConnector;
            
            public Downloadable generatePDFReport() {
                String data = invokeService();
                
                logger.info("Calling connector to generate the jasperRepoet");
                ByteArrayOutputStream pdfReportStream = (ByteArrayOutputStream) jasperConnector.generateReport(JasperExportType.PDF, "jasperReport/restApi.jrxml", new HashMap<>(), data);
                                    
                DownloadResponse downloadableResponse = new DownloadResponse(new ByteArrayInputStream(pdfReportStream.toByteArray()), "application/pdf", "jasper.pdf");

                downloadableResponse.setInline(false);

                return downloadableResponse;
            }
            
            // This method actually connects to the external web service
            private String invokeService() {
                String url = "https://randomuser.me/api?results=10&format=json";
                
                RestTemplate restTemplate = new RestTemplate();
                String response = restTemplate.getForObject(url, String.class);
                logger.info(" Rest response : " + response);
                return response;
            }    
            
        }
        ```
    
      :::note
      Here we can use various export types defined in JasperExportType class
      :::
    
      ```java
      public enum JasperExportType {
          HTML, PDF, XLS, CSV, DOC
      }
      ```
 
 
## Step 3: In the Main page drag and drop an **Iframe** onto the canvas.
1. Drag and drop the iframe widget and set the Source Property from the properties panel for Iframe. 
[![](/learn/assets/Jasper_properties_iframe.png)](/learn/assets/Jasper_properties_iframe.png)  
2. Save and run the project – The PDF Report gets generated. You can download the PDF file.   
   
  - PDF report for Employee data

[![](/learn/assets/EmployeePDF.png)](/learn/assets/EmployeePDF.png)

  - PDF report for Rest API data

[![](/learn/assets/RestApiPDF.png)](/learn/assets/RestApiPDF.png)
