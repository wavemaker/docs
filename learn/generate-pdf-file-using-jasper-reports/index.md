---
title: "How to generate PDF File using Jasper Reports"
id: ""
---

To generate PDF file using Jasper Reports, data needs to be consumed from an external REST service. This data should be made available as a downloadable PDF file, which is generated internally using Jasper. 

**Example**: Using HRDB Sample and listing all the departments using a REST API.

[![](../assets/Departments_city.jpg)](../assets/Departments_city.jpg)

Steps to generate PDF file using Jasper reports are as follows:

- Create a  WaveMaker Web App and give the name as RestJasper.
- Import HRDB and navigate to API Designer to get the REST API URL for /hrdb/Department. [![](../assets/jasper_hrdb_department.png)](../assets/jasper_hrdb_department.png)
- Ensure that your app is deployed and use the Deploy URL instead of Run URL.
- The JSON output looks typically as follows:
    
    {
    	"totalPages": 1,
    	"totalElements": 5,
    	"first": true,
    	"sort": null,
    	"last": true,
    	"numberOfElements": 5,
    	"size": 20,
    	"number": 0,
    	"content": \[
    		{
    			"deptId": 1,
    			"name": "Engineering",
    			"budget": 1936760,
    			"q1": 445455,
    			"q2": 522925,
    			"q3": 426087,
    			"q4": 542293,
    			"deptCode": "Eng",
    			"location": "San Francisco",
    			"tenantId": 1
    		},
    		{
    			"deptId": 2,
    			"name": "Marketing",
    			"budget": 1129777,
    			"q1": 225955,
    			"q2": 271146,
    			"q3": 327635,
    			"q4": 305040,
    			"deptCode": "Mktg",
    			"location": "New York",
    			"tenantId": 1
    		},
    		{
    			"deptId": 3,
    			"name": "General and Admin",
    			"budget": 1452570,
    			"q1": 435771,
    			"q2": 290514,
    			"q3": 348617,
    			"q4": 377668,
    			"deptCode": "G&A",
    			"location": "San Francisco",
    			"tenantId": 1
    		},
    		{
    			"deptId": 4,
    			"name": "Sales",
    			"budget": 2743744,
    			"q1": 493874,
    			"q2": 658499,
    			"q3": 713373,
    			"q4": 877998,
    			"deptCode": "Sales",
    			"location": "Austin",
    			"tenantId": 1
    		},
    		{
    			"deptId": 5,
    			"name": "Professional Services",
    			"budget": 806984,
    			"q1": 201746,
    			"q2": 201746,
    			"q3": 177536,
    			"q4": 225955,
    			"deptCode": "PS",
    			"location": "San Francisco",
    			"tenantId": 2
    		}
    	\]
    }
    
- Download the jars highlighted as shown below and add them to lib [![](../assets/Jasper_jars.png)](../assets/Jasper_jars.png)
- **Add Jasper as dependency in pom.xml along with required exclusions:  **Here is the relevant section that needs to be added by the developer.
    
    <dependency>
                <groupId>net.sf.jasperreports</groupId>
                <artifactId>jasperreports</artifactId>
                <version>6.2.2</version>
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
    
- Create a .jrxml file that describes the template  - The template has a header title and the page content has a table which has field names and the field data. To generate the PDF as shown in the above example, the following _jrxml_ template was used. [Refer here for details](http://community.jaspersoft.com/wiki/jasperreports-library-samples)
    
    <?xml version="1.0" encoding="UTF-8"?>
    <jasperReport xmlns="http://jasperreports.sourceforge.net/jasperreports" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports http://jasperreports.sourceforge.net/xsd/jasperreport.xsd" name="Report" pageWidth="595" pageHeight="842" columnWidth="555" leftMargin="20" rightMargin="20" topMargin="20" bottomMargin="20" uuid="81afe112-ee1b-4443-8d1c-cb6d9ab95dd8">
      <property name="com.jaspersoft.studio.data.defaultdataadapter" value="JsonArrayDataAdapter.xml"/>
      <subDataset name="content" uuid="4563e834-a9e5-43b5-9f0a-824948c73c73">
        <field name="NAME" class="java.lang.String">
          <fieldDescription><!\[CDATA\[name\]\]></fieldDescription>
        </field>
        <field name="LOCATION" class="java.lang.String">
          <fieldDescription><!\[CDATA\[location\]\]></fieldDescription>
        </field>
        <field name="DEPTCODE" class="java.lang.String">
          <fieldDescription><!\[CDATA\[deptCode\]\]></fieldDescription>
        </field>
      </subDataset>
      <queryString language="json">
        <!\[CDATA\[\]\]>
      </queryString>
      <field name="NAME" class="java.lang.String">
        <fieldDescription><!\[CDATA\[NAME\]\]></fieldDescription>
      </field>
      <field name="LOCATION" class="java.lang.String">
        <fieldDescription><!\[CDATA\[LOCATION\]\]></fieldDescription>
      </field>
       <field name="DEPTCODE" class="java.lang.String">
        <fieldDescription><!\[CDATA\[DEPTCODE\]\]></fieldDescription>
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
          <text><!\[CDATA\[Departments By City\]\]></text>
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
          <text><!\[CDATA\[Departments Report\]\]></text>
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
                   <!\[CDATA\[\]\]>
                </text>
            </staticText>
            <staticText>
             <reportElement x = "400" y = "3" width = "121" height = "15" />
    
                <textElement textAlignment = "Center" verticalAlignment = "Middle">
                   <font isBold = "true" />
                </textElement>
    
            <text><!\[CDATA\[LOCATION\]\]></text>
          </staticText>
          <staticText>
            <reportElement x="10" y="3" width="121" height="15" />
            <textElement textAlignment = "Center" verticalAlignment = "Middle">
              <font isBold ="true"/>
            </textElement>
            <text><!\[CDATA\[NAME\]\]></text>
          </staticText>
          <staticText>
            <reportElement x="200" y="0" width="121" height="15" 
            forecolor="#FFFFFF" backcolor="#70A9A9"/>
           <textElement textAlignment = "Center" verticalAlignment = "Middle">
                   <font isBold = "true" />
                </textElement>
            <text><!\[CDATA\[DEPTCODE\]\]></text>
          </staticText>
        </band>
      </columnHeader>
      <detail>
        <band height="25" splitType="Stretch">
          <componentElement>
            <reportElement x="0" y="1" width="333" height="20" uuid="c3237c70-6b2e-43e3-aa21-5092d8b91afc"/>
            <jr:list xmlns:jr="http://jasperreports.sourceforge.net/jasperreports/components" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports/components http://jasperreports.sourceforge.net/xsd/components.xsd" printOrder="Vertical">
              <datasetRun subDataset="content" uuid="f5fdc6a3-736f-43ce-b549-cd7332d19eb8">
                <dataSourceExpression><!\[CDATA\[((net.sf.jasperreports.engine.data.JsonDataSource)$P{REPORT\_DATA\_SOURCE}).subDataSource("content")\]\]></dataSourceExpression>
              </datasetRun>
              <jr:listContents height="25" width="600">
                <textField>
                  <reportElement x = "50" y = "3" width = "121" height = "15" uuid="07e3ff2a-3832-4b06-9275-cb1ee8e51cfe"/>
                  <textFieldExpression><!\[CDATA\[$F{NAME}\]\]></textFieldExpression>
                </textField>
                 <textField>
                  <reportElement x="400" y="3" width="121" height="15"  uuid="07e3ff2a-3832-4b06-9275-cb1ee8e51cfe"/>
                  <textFieldExpression><!\[CDATA\[$F{LOCATION}\]\]></textFieldExpression>
                </textField>
                 <textField>
                  <reportElement x="200" y="3" width="121" height="15" uuid="07e3ff2a-3832-4b06-9275-cb1ee8e51cfe"/>
                  <textFieldExpression><!\[CDATA\[$F{DEPTCODE}\]\]></textFieldExpression>
                </textField>
              </jr:listContents>
            </jr:list>
          </componentElement>
          </band>
      </detail>
    </jasperReport>
    
- Create a Java Service named GenerateReports and create a method named generatePDFReport that takes – String –jrxml, String – database (if any), HttpServletResponse  - response
    
     Imports
    import javax.servlet.http.HttpServletRequest;
    import org.slf4j.Logger;
    import org.slf4j.LoggerFactory;
    
    import org.springframework.beans.factory.annotation.Autowired;
    import com.wavemaker.runtime.security.SecurityService;
    import com.wavemaker.runtime.service.annotations.ExposeToClient;
    import com.wavemaker.runtime.service.annotations.HideFromClient;
    
    import org.apache.commons.httpclient.HttpClient;
    import org.apache.commons.httpclient.HttpMethod;
    import org.apache.commons.httpclient.methods.GetMethod;
    
    import java.io.\*;
    import java.util.HashMap;
    import javax.servlet.http.HttpServletResponse;
    import net.sf.jasperreports.engine.JasperReport;
    import net.sf.jasperreports.engine.design.JasperDesign;
    import net.sf.jasperreports.engine.export.HtmlExporter;
    import net.sf.jasperreports.engine.export.JRPdfExporter;
    import net.sf.jasperreports.engine.xml.JRXmlLoader;
    import net.sf.jasperreports.export.SimpleExporterInput;
    import net.sf.jasperreports.export.SimpleHtmlExporterOutput;
    import net.sf.jasperreports.export.SimpleOutputStreamExporterOutput;
    import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
    import net.sf.jasperreports.engine.data.JsonDataSource;
    
    Class Definition
    
    public class GenerateReports {
    
        private static final Logger logger = LoggerFactory.getLogger(GenerateReports.class);
    
        @Autowired
        private SecurityService securityService;
    
        // This method generates a PDF report 
         public void generatePdfReport(String jrxml, String database, HttpServletResponse response) {
            try {
                InputStream jrxmlInput = this.getClass().getClassLoader().getResource("data.jrxml").openStream();
                JasperDesign design = JRXmlLoader.load(jrxmlInput);
                JasperReport jasperReport = JasperCompileManager.compileReport(design);
                logger.info("Report compiled");
                String data = invokeService();
                logger.info("data = "+ data);
                // It is possible to generate Jasper reports from a JSON source.
                JsonDataSource jsonDataSource = new JsonDataSource(new ByteArrayInputStream(data.getBytes()));
                JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, new HashMap(), jsonDataSource);
                logger.info("JasperPrint" + jasperPrint);
    
                JRPdfExporter pdfExporter = new JRPdfExporter();
                pdfExporter.setExporterInput(new SimpleExporterInput(jasperPrint));
                ByteArrayOutputStream pdfReportStream = new ByteArrayOutputStream();
                pdfExporter.setExporterOutput(new SimpleOutputStreamExporterOutput(pdfReportStream));
                pdfExporter.exportReport();
    
                response.setContentType("application/pdf");
                response.setHeader("Content-Length", String.valueOf(pdfReportStream.size()));
                response.addHeader("Content-Disposition", "inline; filename=jasper.pdf;");
    
                OutputStream responseOutputStream = response.getOutputStream();
                responseOutputStream.write(pdfReportStream.toByteArray());
                responseOutputStream.close();
                pdfReportStream.close();
                logger.info("Completed Successfully: ");
            } catch (Exception e) {
                logger.info("Error: ", e);
            }
    
        }
    
        // This method actually connects to the external web service
        private String invokeService() {
    String url = "http://e1255fbaf8cb8.cloud.wavemakeronline.com/RestJasper/services/hrdb/Department?sort=location&r=json";
            String response = "";
    
            try {
                HttpClient httpClient = new HttpClient();
                HttpMethod httpMethod = new GetMethod(url);
                logger.info(" Invoking service : " + url);
                httpClient.executeMethod(httpMethod);
                response = httpMethod.getResponseBodyAsString();
            } catch (IOException e) {
                response = "Error encountered while invoking service at url: " + url + "Error message: " + e.toString();
                logger.error(response);
                return response;
            }
            logger.info(" Rest response : " + response);
            return response;
        }
    }
    
- Place the _.jrxml_ file in the location as shown below: [![](../assets/Jasper_jrxml_location.png)](../assets/Jasper_jrxml_location.png)
- In the Main page drag and drop an **Iframe** onto the canvas.
- Set the Source Property from the properties panel for Iframe. [![](../assets/Jasper_properties_iframe.png)](../assets/Jasper_properties_iframe.png)
- Save and run the project – The PDF Report gets generated. You can download the PDF file. [![](../assets/run_project.jpg)](../assets/run_project.jpg)
- The complete output is as follows: [![](../assets/output.jpg)](../assets/output.jpg)
