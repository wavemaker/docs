---
title: "Sending eMail using Java Service"
id: "sending-email-using-java-service"
---
---

We will see how to implement send email in Java Service using Java Mail API.

The process shows:

1. How to create an Email client to send out emails.
2. How to use Java Mail API in a Java Service to send out emails.
3. How to parameterize the Java Service.

## Step 1: Adding Mail.jar

This can be done in two ways:

### Method 1: Import JAR file

Download and Import _mail.jar_ file of your choice into your app using the [Import Resource](/learn/app-development/services/3rd-party-libraries) option to the _lib_ folder.

OR

### Method 2: Add dependencies

1. Open the project and access File Explorer
1. Search for pom.xml
1. The following dependency needs to be added to _pom.xml_ file under _dependencies_ section. Search for `javax.servlet` to find the right section in pom.xml where the following snippet should be inserted:

   ```xml
    <dependency>
        <groupId>com.sun.mail</groupId>
        <artifactId>javax.mail</artifactId>
        <version>1.5.6</version>
    </dependency>
    ```

    Here is how the `pom.xml` should look after you added the above snippet.

[![Screenshot showing pom.xml after change](/learn/assets/email_pom.png)](/learn/assets/email_pom.png)

If you added the dependency at the right place in `pom.xml` you should see the the `javax.mail-1.5.6.jar` in the lib folder like this:

[![Screenshot show mail jar file added to lib folder](/learn/assets/sending-email-using-java-service-lib-folder.png)](/learn/assets/sending-email-using-java-service-lib-folder.png)

## Step 2: Creating Java Service

1. Create a [Java Service](/learn/app-development/services/java-services/java-service/#creating-a-java-service), named EmailService
1. Add the following import statements in the Java service created in the above step.

    ```Java
    import javax.servlet.http.HttpServletRequest;
    import javax.annotation.PostConstruct;
    import org.slf4j.Logger;
    import org.slf4j.LoggerFactory;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.beans.factory.annotation.Value;
    import java.util.Properties;
    import javax.mail.Message;
    import javax.mail.Authenticator;
    import javax.mail.MessagingException;
    import javax.mail.Session;
    import javax.mail.Transport;
    import javax.mail.internet.InternetAddress;
    import javax.mail.internet.MimeMessage;
    import javax.mail.PasswordAuthentication;
    import com.wavemaker.runtime.security.SecurityService;
    import com.wavemaker.runtime.service.annotations.ExposeToClient;
    import com.wavemaker.runtime.service.annotations.HideFromClient;
    ```

1. Add the following class definition for the EmailService _Note_: Here we are setting default values for the properties like username, password, etc. required by the EmailService. To set them to Environment level values see the next section.

    ```Java
    @ExposeToClient
    public class EmailService {

        private static final Logger logger = LoggerFactory.getLogger(EmailService.class);
        private Session session;

        private boolean authentication=true;
        private boolean smtpServerTTLSEnabled = true;
        private String host = "smtp.gmail.com";
        private String port = "587";
        private String username="<Username>";
        private String password="<password>";

        @PostConstruct
        public void init() throws Exception {
            Properties props = new Properties();
            props.put("mail.smtp.auth", String.valueOf(authentication));
            props.put("mail.smtp.starttls.enable",smtpServerTTLSEnabled);
            props.put("mail.smtp.host", host);
            props.put("mail.smtp.port", port);
            session = Session.getInstance(props, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
                }
            });
        }

        public void sendEmail(String toEmailAddress, String emailSubject, String emailMessage) {
            logger.info("toEmailAddress {}, emailSubject {}, emailMessage {} ",
            toEmailAddress,emailSubject,emailMessage);
            try {
                Message message = new MimeMessage(session);
                message.setFrom(new InternetAddress(username));
                String[] recipientList = toEmailAddress.split(",");
                InternetAddress[] recipientAddresses = new InternetAddress[recipientList.length];
                int counter = 0;
                for (String recipient: recipientList) {
                    recipientAddresses[counter] = new InternetAddress(recipient.trim());
                    counter++;
                    }
                message.setRecipients(Message.RecipientType.TO, recipientAddresses);
                message.setSubject(emailSubject);
                message.setText(emailMessage);
                Transport.send(message);
                logger.info("Sent message successfully....");
                 } catch (MessagingException e) {
                    throw new RuntimeException(e);
                }
            }
    }

    ```

## Step 3: Using the Java Service

Create a [Java Service Variable](/learn/assets/var_sel.png) for the Java service created in the previous steps.

[![Screenshot showing variable for EmailService](/learn/assets/email_java_var.png)](/learn/assets/email_java_var.png)

You can now use this service variable in your application as per your business logic.

## Parameterizing email Service

1. In the above Java Service example, values of the mail server and credentials used are hardcoded. It is likely that these value change between development and production environment. We recommend that these values be injected into the Java Service from environment.
1. For example, currently, in the above Java Service, we are using “ smtp.gmail.com ” as the SMTP host. Also the username, password fields are set to their values.
1. You can set these properties at the environment level by adding the “@Value” annotation and remove the hardcoded values set onto the fields.
1. After parameterizing the fields, the Java Service will look like below:
  
    ```Java  
    @Value("${app.environment.authentication}")
    private boolean authentication;
    @Value("${app.environment.smtpServerTTLSEnabled}")
    private boolean smtpServerTTLSEnabled;
    @Value("${app.environment.host}")
    private String host;
    @Value("${app.environment.port}")
    private String port;
    @Value("${app.environment.username}")
    private String username;
    @Value("${app.environment.password}")
    private String password;

    ```

1. From [Project Settings](/learn/app-development/wavemaker-overview/product-walkthrough#project-settings) navigate to the [Profile Configuration](/learn/app-development/deployment/configuration-profiles/).
1. From Development section access the App Environment tab and add the values as per your needs: [![Screenshot showing app env variables](/learn/assets/email_app_env.png)](/learn/assets/email_app_env.png)
1. This way the values for these properties can be different in each environment. [See here for more](/learn/how-tos/using-app-environment-properties/).

Java Service Use Cases

1. [How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)
1. [How to implement forgot password feature using Java Service](/learn/how-tos/implementing-forgot-password-feature-using-java-service/)
1. [How to access REST APIs from Java Service](/learn/how-tos/accessing-rest-apis-java-service/)
1. [How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)
1. [How to accomplish Pre-Post Processing for a DB Service APIs](/learn/how-tos/pre-post-processing-db-service-apis/)
