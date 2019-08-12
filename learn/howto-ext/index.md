---
title: "How Tos: External Resources"
date: "2016-06-23"
---

External Resource Files

1. the option on the **Menu** you have the option of importing a resource file. [![ext_import](../assets/ext_import.png)](../assets/ext_import.png)
2. the **Resource** dialog box, choose the file that needs to be imported, and Select the appropriate folder it needs to be placed in. [![resource_path](../assets/resource_path.png)](../assets/resource_path.png)
3. can select multiple files to import and you can create your own folders.
4. can see the imported files from the **and Services** panel [![resource_service](../assets/resource_service.png)](../assets/resource_service.png)
5. upon the resource imported its usage would differ.
    - case of media resources like images, audio files or video files, you can bind them to the appropriate widgets.
    - case of JavaScript resource, entry into the file and invoking the script function would require some JavaScript knowledge.

Using Third Party Javascript FilesIn this section we will look at the usage of **JavaScript and CSS** files. The basic steps would involve:

1. the files and placing them in the appropriate folder.
2. an entry in the file giving the location of the files imported.
3. the imported files, via in your application.

We will explain the process with the help of an example. We want to add a multiple date selection facility to our application. The current calendar widget allows selection of a single date. We will use [v1.6.3](../assets/MultiDatesPicker-v1.6.3.zip) jQuery UI downloaded from from: http://multidatespickr.sourceforge.net/. We will also be needing [\-ui-1.12.0.custom](../assets/jquery-ui-1.12.0.custom.zip) file.

1. on and select We need to import two files – a _file_ - jquery-ui.multidatespicker.js; with the code and a _file_ - mdp.css; for the UI. The js file will be placed in the _/javascript_ folder and the css file in the _/css_ folder. Create the appropriate folders [![js_import](../assets/js_import.png)](../assets/js_import.png)
2. the file make the following entries specifying the path for script and css files:
    
    [![js_index](../assets/js_index-1024x576.png)](../assets/js_index.png)
3. the main page mark the position for the display of the date-picker using a div tag
    
    [![js_markup](../assets/js_markup-1024x640.png)](../assets/js_markup.png) In the script tab attach the mulitdatespicker function from the js file imported to the div created
    
    $(function() {
                    $('#multidatepicker').multiDatesPicker();
                });
    
    [![js_script](../assets/js_script-1024x576.png)](../assets/js_script.png)
4. you run the application you will see the calendar displayed and you can select multiple dates.

Third-party JAR FilesYou can import external JAR files and use them in your apps, just like how you would use a Java Service written in your app. Following are the steps to incorporate an external jar file:

1. on from the **Menu** and select option. [![ext_import](../assets/ext_import.png)](../assets/ext_import.png)
2. the file you want to import. By default it will be placed in the folder. [![jar_folder](../assets/jar_folder.png)](../assets/jar_folder.png)
3. the statements for the required classes in your Java Service file. [![jar_java](../assets/jar_java-1024x640.png)](../assets/jar_java.png)
4. this example we have used the , the package details of which can be found at [://javamail.java.net/nonav/docs/api/](https://javamail.java.net/nonav/docs/api/) To use this jar file to send emails we will be using the following code in the Java Service file after adding the import statements for the required class files:
    
     java.util.Properties;
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
    
                return "Mail sent successfully.";
    
            } catch (MessagingException e) {
                return "Error in method sendEmailNotification: " + e;
            }
        }
    
5. invoke the Java Service create Service Variable: [![jar_sv](../assets/jar_sv.png)](../assets/jar_sv.png)
6. _parameters_ can be bound or set to static values [![jar_data](../assets/jar_data.png)](../assets/jar_data.png)
7. Java Service can be executed either by setting the **data on input change** to true thus triggering whenever the input values change or by triggering the Service Variable [![jar_invoke](../assets/jar_invoke.png)](../assets/jar_invoke.png)
8. result from the execution of this service can be captured thus: [![jar_result](../assets/jar_result.png)](../assets/jar_result.png)
