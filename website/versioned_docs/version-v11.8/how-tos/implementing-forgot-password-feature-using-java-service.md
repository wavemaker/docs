---
title: "Implementing Forgot Password feature using Java Service"
id: "implementing-forgot-password-feature-using-java-service"
---
---

Learn how to implement the **forgot password** feature using Java Service and send an email with default password.

### Scenario

1. On the Login screen, when a user chooses "Forgot Password", the user should be prompted to enter their email address.
2. The default password should be sent to the user's email address.
3. The password in the database should get updated with the default password which was sent to the user.

## Files Imported to Java Service

The following files were imported into the Java Service:

```
import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.wavemaker.runtime.security.SecurityService;
import com.wavemaker.runtime.service.annotations.ExposeToClient;
import com.wavemaker.runtime.service.annotations.HideFromClient;
import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
```

## Java Service Method

We will be using the following Java Service Method:

```
@ExposeToClient
public class Forgetpassword {
private static final Logger logger=LoggerFactory.getLogger(Forgetpassword.class);
public String sendEmail(String toEmailAddress) {
            String userName = "";
            String password = "";
            String emailSubject = "Default Password";
            String emailMessage = getPassword();
	        try {
            // Use javamail api, set parameters from registration.properties file
            // set the session properties
            Properties props = System.getProperties();
            props.put("mail.smtp.starttls.enable", "true");
            props.put("mail.smtp.host", "smtp.gmail.com");
            props.put("mail.smtp.port", "587");
            props.put("mail.smtp.auth", "true");
            props.put("mail.smtp.starttls.required", "true");
            Session session = Session.getDefaultInstance(props, null);
            // Create email message
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(userName));
            String[] recipientList = toEmailAddress.split(",");
            InternetAddress[] recipientAddress = new InternetAddress[recipientList.length];
            int counter = 0;
            for (String recipient: recipientList) {
                recipientAddress[counter] = new InternetAddress(recipient.trim());
                counter++;
            }
            message.setRecipients(Message.RecipientType.TO, recipientAddress);
            message.setSubject(emailSubject);
            message.setContent(emailMessage, "text/html");
            // Send smtp message
            Transport tr = session.getTransport("smtp");
            tr.connect("smtp.gmail.com", 587, userName, password);
            message.saveChanges();
            tr.sendMessage(message, message.getAllRecipients());
            tr.close();
            return emailMessage;
            } catch (MessagingException e) {
	            return "Error in method sendEmailNotification: " + e;
	        }
	    }

public String getPassword()
	{
		String temp = Long.toHexString(Double.doubleToLongBits(Math.random()));
		return temp;
	}

}
```
## Update Query

```
update LOGIN set PASSWORD = :pwd where USER_NAME = :name;
```

## JavaScript Function
```

Page.ForgotPasswordonSuccess = function (variable, data) {
    Page.Variables.UpdatePWD.setInput("name", Page.Widgets.form1.formWidgets.text1.datavalue);
    Page.Variables.UpdatePWD.setInput("pwd", data);
    Page.Variables.UpdatePWD.update();
};
```

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQ3CCQRozlqEZeDc0iacU9GfWn4K5qFOYW7ukW-yH8Tm3sPYKWdTlBzzwMWyDx_cNPCqsOXzdqQNf8M/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

## See Also

[How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)  
[How to access REST APIs from Java Service](/learn/how-tos/accessing-rest-apis-java-service/)  
[How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)  
[How to accomplish Pre-Post Processing for a DB Service APIs](/learn/how-tos/pre-post-processing-db-service-apis/)
