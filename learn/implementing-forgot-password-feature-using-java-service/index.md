---
title: "Implementing Forgot Password feature using Java Service"
date: "2017-01-25"
---

We will see how to implement Forgot Password feature using Java Service for Sending Email with Default password.

:

1. the Login screen, when the user chooses ForgotPassword, the user will be prompted to enter their email address.
2. default password will be sent to the user at the email address entered.
3. password in the database also will be updated with the default password.

The following files were imported into the Java Service:

 javax.servlet.http.HttpServletRequest;
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

We will be using the following Java Service Method:

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
            String\[\] recipientList = toEmailAddress.split(",");
            InternetAddress\[\] recipientAddress = new InternetAddress\[recipientList.length\];
            int counter = 0;
            for (String recipient: recipientList) {
                recipientAddress\[counter\] = new InternetAddress(recipient.trim());
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

 String getPassword()
	{
		String temp = Long.toHexString(Double.doubleToLongBits(Math.random()));
		return temp;
	}

}

Update Query:

 LOGIN set PASSWORD = :pwd where USER\_NAME = :name;

JavaScript Function:

 = function (variable, data) {
    Page.Variables.UpdatePWD.setInput("name", Page.Widgets.form1.formWidgets.text1.datavalue);
    Page.Variables.UpdatePWD.setInput("pwd", data);
    Page.Variables.UpdatePWD.update();
};

<iframe width="708" height="560" src="https://docs.google.com/presentation/d/e/2PACX-1vQ3CCQRozlqEZeDc0iacU9GfWn4K5qFOYW7ukW-yH8Tm3sPYKWdTlBzzwMWyDx_cNPCqsOXzdqQNf8M/embed?start=false&amp;loop=false&amp;delayms=3000" frameborder="0" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>

Service Use Cases

- [1\. How to send emails using Java Service](/learn/how-tos/sending-email-using-java-service/)
- [2\. How to implement forgot password feature using Java Service](/learn/how-tos/implementing-forgot-password-feature-using-java-service/)
- [3\. How to access REST APIs from Java Service](/learn/how-tos/accessing-rest-apis-java-service/)
- [4\. How to schedule a Java Service](/learn/how-tos/scheduling-java-service/)
- [5\. How to accomplish Pre-Post Processing for a DB Service APIs](/learn/how-tos/pre-post-processing-db-service-apis/)
