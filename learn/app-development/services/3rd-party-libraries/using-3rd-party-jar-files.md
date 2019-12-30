---
title: "Using 3rd party jar files"
id: "using-3rd-party-jar-files"
---
---

You can import external JAR files and use them in your apps, just like how you would use a Java Service written in your app. Following are the steps to incorporate an external jar file:

1. From _Developer Utilities_, access **File Explorer** 

[![](/learn/assets/ext_import.png)](/learn/assets/ext_import.png)

2. **Import Resource**, and select the **Lib** folder to place the jar file to be imported. As an example, we are using a [mail](/learn/assets/mail.zip) file. 

[![](/learn/assets/jar_folder.png)](/learn/assets/jar_folder.png)

3. Add the **import** statements for the required classes in your Java Service file. In this example, we have used the _mail.jar_, the package details of which can be found at [https://javamail.java.net/nonav/docs/api/](https://javamail.java.net/nonav/docs/api/). To use this jar file to send emails we will be using the following code in the Java Service file after adding the import statements for the required class files:
```   
    import java.util.Properties;
    import javax.mail.Message;
    import javax.mail.MessagingException;
    import javax.mail.Session;
    import javax.mail.Transport;
    import javax.mail.internet.InternetAddress;
    import javax.mail.internet.MimeMessage;   

public String sendEmail(String userName, String password, String toEmailAddress,  String emailSubject, String emailMessage) {
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

        //	message.addRecipient(Message.RecipientType.TO, new InternetAddress(toEmailAddress));

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

        return "Mail sent successfully.";

    } catch (MessagingException e) {
        return "Error in method sendEmailNotification: " + e;
    }
}
```

[![](/learn/assets/jar_java.png)](/learn/assets/jar_java.png)

4. To invoke the Java Service create a new Variable for Java Service: 

[![](/learn/assets/jar_sv.png)](/learn/assets/jar_sv.png)


5. The _input parameters_ can be accessed from the **Data** tab and can be bound or set to static values
6. The Java Service can be executed either
    - by setting the **Update data on input change** to true thus triggering whenever the input values change or
    - by triggering the Variable created for any event on a widget for example on Mouse Click event of a Button.
7. The result from the execution of this service can be bound to any widget.

