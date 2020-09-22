---
title: "Sending Email using WaveMaker Connector"
id: ""
---
---

Email Connector provides simplified APIs to integrate with any Email service provider. It provides methods for sending a plain text message, parameterized/templatized messages & also enables sending messages with attachments. 

This document explains the following 3 different ways to send the email message :

1. Send an Email with text message.
1. Send an Email with templatised message.
1. Send an Email with attachments.

Steps involved in sending an email: 

## Step 1: Importing the email-connector to project

1. Download the latest email-connector zip [here](https://github.com/wavemaker/email-connector/releases)
1. Import the downloaded email-connector zip into your app using the [Import Resource](/learn/app-development/services/3rd-party-libraries) option to the **_Connector_** folder.

## Step 2: Confiure email connector properties in profiles.
1. By default externalized connector properties are added in the project profiles.
1. Connector externalized properties are prefixed with **connector.${connectorName}**.
    
    `
    connector.email.default.email.server.host=
    connector.email.default.email.server.password=
    connector.email.default.email.server.port=
    connector.email.default.email.server.username=`

1. We need to specify the values for connector properties in profiles.
1. These externalized properties are used in the connector, If required we can also read these properties in java service as below:
  
    ```Java  
    @Value("${email.server.username}")
    private String fromEmailAddress;    

    ```


## Step 3: Creating Java Service

1. Create a [Java Service](/learn/app-development/services/java-services/java-service/#creating-a-java-service), named EmailService
1. Add the import statement for the email connector api class.
    ```java
   import org.springframework.mail.SimpleMailMessage;
   
   import com.wavemaker.connector.email.EmailConnector;
   
    ```
1. Autowire the email connector api class.
    ```java
   @Autowired
   private EmailConnector emailConnector;
   
    ```
   
1. Using this emailConnector 
   
   _Note_: Here we are setting default values for the properties like fromEmailAddress. required by the EmailService. To set them to Environment level values see the next section.
### i. Send an Email with Text

```java
@ExposeToClient
public class EmailService {
    
    private static final Logger logger = LoggerFactory.getLogger(EmailService.class);

    @Autowired
    private EmailConnector emailConnector;
    
    @Value("${email.server.username}")
    private String fromEmailAddress;
    
    public void sendMailWithSimpleMessage(String toEmailAddress, String emailSubject, String emailMessage) {
        logger.info("Sending the email to {} with subject {} and message {}", toEmailAddress, emailSubject, emailMessage);
        
        String[] recipientList = toEmailAddress.split(",");
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setFrom(fromEmailAddress);
        simpleMailMessage.setTo(recipientList);
        simpleMailMessage.setSubject(emailSubject);
        simpleMailMessage.setText(emailMessage);
        
        emailConnector.sendSimpleMailMessage(simpleMailMessage);
    }
}
```

### ii. Send an Email with templatised message. 
   Required import statements

```java
import java.util.HashMap;
import java.util.Map;

import com.wavemaker.connector.exception.EmailTemplateNotFoundException;
```
Send email with template
     
```java
    public void sendEmailWithTemplate(String toEmailAddress, String emailSubject) {
        logger.info("Sending the email to {} with subject {} ", toEmailAddress, emailSubject);
        
        String[] recipientList = toEmailAddress.split(",");
        SimpleMailMessage message = new SimpleMailMessage();
        message.setSubject(emailSubject);
        message.setTo(recipientList);
        message.setFrom(fromEmailAddress);
        Map<String, String> props = new HashMap<>();
        props.put("user", "Mike");
        try {
            emailConnector.sendSimpleMailMessageWithTemplate(message, "templates/invitationtemplate", props);
        } catch (EmailTemplateNotFoundException e) {
            throw new RuntimeException("Email template not found", e);
        }
    }
```
    
If we want use this method we should have a **template** with name **invitationtemplate.txt** in project resources folder.
    [![invitaion email template](/learn/assets/emailTemplateFileLocation.png)](/learn/assets/emailTemplateFileLocation.png)
    [![invitaion email template with content](/learn/assets/emailTemplate.png)](/learn/assets/emailTemplate.png)
    
### iii. Send an Email with attachments.
        
Required import statements
        
```java
    import javax.mail.internet.MimeBodyPart;
    import javax.mail.internet.MimeMessage;
    import javax.mail.internet.MimeMultipart;
    
    import org.springframework.mail.javamail.MimeMessageHelper;
    import org.springframework.mail.javamail.MimeMessagePreparator;
```
    
Send Email with attachment
        
```java
public void sendMailWithMessagePreparator(String toEmailAddress, String emailSubject, String emailMessage) {
        logger.info("Sending email to {}, with subject : {}, message : {} and mimetype content", toEmailAddress, emailSubject, emailMessage);
        emailConnector.sendMimeMail(new MimeMessagePreparator() {
            @Override
            public void prepare(final MimeMessage mimeMessage) throws Exception {
                MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
                mimeMessageHelper.addTo(toEmailAddress);
                mimeMessageHelper.setFrom(fromEmailAddress);
                mimeMessageHelper.setSubject(emailSubject);
                mimeMessageHelper.setText(emailMessage);
                mimeMessageHelper.addAttachment("myfile", new ClassPathResource("GitLabIcon.png"));
            }
        });
    }
```

Send Email method with mime type
        
```java
public void sendMimeMail(String toEmailAddress, String emailSubject) {
    emailConnector.sendMimeMail(new MimeMessagePreparator() {
        logger.info("Sending email to {}, with subject {} and mimetype content", toEmailAddress, emailSubject);
        @Override
        public void prepare(final MimeMessage mimeMessage) throws Exception {
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            mimeMessageHelper.addTo(toEmailAddress);
            mimeMessageHelper.setFrom(fromEmailAddress);
            mimeMessageHelper.setSubject(emailSubject);
            MimeBodyPart mimeBodyPart = new MimeBodyPart();
            MimeMultipart mimeMultipart = new MimeMultipart();
            String htmlContent = "<html><h1>Hi</h1><p>Nice to meet you!</p></html>";
            mimeBodyPart.setContent(htmlContent, "text/html");
            mimeMultipart.addBodyPart(mimeBodyPart);
            mimeMessageHelper.getMimeMessage().setContent(mimeMultipart);
        }
    });
}
```
   
Send Email with attachment and mime message
   
   ```java
   public void sendInlineMail(String toEmailAddress, String emailSubject) {
       emailConnector.sendMimeMail(new MimeMessagePreparator() {
           @Override
           public void prepare(final MimeMessage mimeMessage) throws Exception {
               MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
               mimeMessageHelper.addTo(toEmailAddress);
               mimeMessageHelper.setFrom(fromEmailAddress);
               mimeMessageHelper.setSubject(emailSubject);

               MimeMultipart mimeMultipart = new MimeMultipart();


               MimeBodyPart htmlpart = new MimeBodyPart();
               String htmlMessage = "<html>Hi there,<br>";
               htmlMessage += "See this cool pic: <img src=\"cid:AbcXyz123\" />";
               htmlMessage += "</html>";
               htmlpart.setContent(htmlMessage, "text/html");


               MimeBodyPart imagePart = new MimeBodyPart();
               imagePart.setHeader("Content-ID", "<AbcXyz123>");
               imagePart.setDisposition(MimeBodyPart.INLINE);
               imagePart.attachFile(new ClassPathResource("GitLabIcon.png").getFile());

               mimeMultipart.addBodyPart(htmlpart);
               mimeMultipart.addBodyPart(imagePart);
               mimeMessageHelper.getMimeMessage().setContent(mimeMultipart);
           }
       });
   }
   ```  

## Step 3: Integrating with UI

Create a [Java Service Variable](/learn/assets/var_sel.png) for the Java service created in the previous steps.

[![Screenshot showing variable for EmailService](/learn/assets/email_java_var.png)](/learn/assets/email_java_var.png)

You can now use this service variable in your application as per your business logic.


Java Service Use Cases

1. [How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)
1. [How to implement forgot password feature using Java Service](/learn/how-tos/implementing-forgot-password-feature-using-java-service/)
1. [How to access REST APIs from Java Service](/learn/how-tos/accessing-rest-apis-java-service/)
1. [How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)
1. [How to accomplish Pre-Post Processing for a DB Service APIs](/learn/how-tos/pre-post-processing-db-service-apis/)
