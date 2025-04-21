---
title: "Integrate Twilio connector into WaveMaker App"
id: "twilio-connector"
sidebar_label: "Integrate Twilio Connector"
---
---

Learn how to send/receive SMS, MMS and also WhatsApp Messages using Twilio connector.

## Twilio Service

Twilio is a cloud based communication platform which performs communication functions using its API's. Twilio lets you receive SMS, MMS, WhatsApp, Voice messages or even respond to the messages and many more services. 

This connector exposes api to send messages to and receive messages from Twilio using WaveMaker application.

## Step 1: Importing the twilio-connector to project

1. Download the latest twilio connector zip [here](https://github.com/wavemaker/twilio-connector/releases)
2. Import the downloaded twilio connector zip into your app using the [Import Resource](/learn/app-development/services/3rd-party-libraries) option to the **Connector** folder.

## Step 2: Configure twilio configurable properties in profiles
1. By default externalized connector properties are added in the project profiles [Know More](/learn/connectors/connectors-import#externalizing-connector-properties).
2. Connector externalized properties are prefixed with **connector.${connectorName}**

```Java
connector.twilio-connector.default.twilio.account.SID=
connector.twilio-connector.default.twilio.account.authtoken=
connector.twilio-connector.default.twilio.account.phoneNumber=
connector.twilio-connector.default.twilio.verify.services.serviceId=
```

## Step 3: Integrating Twilio into Application

Autowire the Connector Service into the added JavaService.

Import Statement: 
```Java
import com.wavemaker.connector.twilio.TwilioConnector;
```
```Java
@Autowired
private TwilioConnector twilioConnector;
```

### Send SMS to device
Send transactional message to the given number.
```Java
public void sendSMSToDevice(String toPhoneNumber, String messageBody){
    twilioConnector.sendSMS(toPhoneNumber,messageBody);
}
```

### Send MMS messages to device
Send MMS message to the phone number.

Import Statements.
```Java
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.ArrayList;
```
```Java
public void sendMMS(String toPhoneNumber, String messageBody){
    List<URI> mediaUris = new ArrayList<>();
    URI url = null;
    try {
        url = new URI("");          //Add URL string here
    } catch (URISyntaxException e) {
        throw new RuntimeException(e);
    }
    mediaUris.add(url);
    twilioConnector.sendMMS(toPhoneNumber,messageBody,mediaUris);
}
```

### Send WhatsApp Messages
Send Message From Twilio to your WhatsApp.

Import Statements.
```Java
import java.net.URI;
import java.util.List;
```
```Java
public void sendWhatsAppMessage(String toPhoneNumber, String messageBody){
    List<URI> mediaUris = new ArrayList<>();
    URI url = null;
    try {
        url = new URI("");              //Add URL string here
    } catch (URISyntaxException e) {
        throw new RuntimeException(e);
    }
    mediaUris.add(url);
    twilioConnector.sendWhatsAppMessage(toPhoneNumber,messageBody,mediaUris);
}
```

### Twilio Responding to your SMS/MMS/WhatsApp Message
Receive and respond back to the device from twilio (here in the below example when twilio receives message from the user then it registers a complaint into the db and returns back the complaint details to the user device).
```Java
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.wavemaker.connector.twilio.TwilioMessageListener;
import com.wavemaker.connector.twilio.model.TwilioMessage;
```
```Java
public void respondToMessage(HttpServletRequest request,HttpServletResponse response){
    twilioConnector.receiveAndRespondTwilioMessage(request, response, new TwilioMessageListener() {
        @Override
        public String onMessage(TwilioMessage twilioMessage) {
            String body=twilioMessage.getText();
            logger.info("TwilioRequest: "+twilioMessage.toString());
            //You can write your business logic here and send a response to the caller. 
            //Here the following code add's request in the database
            TicketDetails details=new TicketDetails();
            details.setSubject(body);
            details.setFromNumber(twilioMessage.getFromNumber());
            details.setStatus("OPEN");
            TicketDetails createdDetails=ticketService.create(details);
            //Returning the message that twilio should respond back to the device
            String responseMessage = "Hi, Your Complaint has been registered with TicketNo.: " +createdDetails.getTicketNo()+ " with Subject "+createdDetails.getSubject();
            return responseMessage;
        }
    });
}
```

:::tip
In case of SMS/MMS this method API should be configured in the Twilio Account under "PhoneNumber" section as Webhook and incase of WhatsApp, this method API should be configured in "WhatsApp Sandbox Settings" section in the Twilio Account under "Programming PhoneNumber"->"Settings" section as Webhook.
:::

### Implementing OTP
#### Send OTP to the Phone Number
This API makes it simple to add user verification to your application. It supports codes sent via VOICE, SMS, and EMAIL. This API return value will be used to check if the given phone number is valid or not.

Import Statements.
```Java
import com.wavemaker.connector.twilio.constant.Channel;
import com.wavemaker.connector.twilio.model.VerificationResult;
```

```Java
public VerificationResult sendOTPCode(String phoneNumber){
    return twilioConnector.sendOTP(phoneNumber,Channel.SMS);
}
```

:::note
Channel refers to an Enum.

SMS("sms"), CALL("call"), EMAIL("email");
:::
:::tip
Incase if Channel is set as EMAIL, then create "Twilio Sendgrid" account and also create dynamic template in SendGrid and configure the **SendGrid API key, TemplateId, Default from Mail** under Twilio -> Verify -> EmailIntegration section.

The number of digits of OTP value you want twilio to send should be configured in Twilio->Verify->Services section.
:::

#### Validate OTP sent to given channel
This API will validate the entered OTP.

```Java
public Boolean validateOTP(String phoneNumber, String otpCode){
    VerificationResult result=twilioConnector.verifyOTP(phoneNumber,otpCode);
    return result.isValid();
}
```



