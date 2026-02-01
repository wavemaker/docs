---
last_update: { author: "Priyanka Bhadri" }
---

# Working with Connectors  

## Example: Twilio Connector

Connectors in WaveMaker provide a simple and structured way to integrate third-party services into your application. They abstract external APIs into reusable services, allowing developers to consume them just like any other backend service.

This section explains how to work with connectors using the **Twilio Connector** as an example.

---



## Twilio Connector Overview

The **Twilio Connector** enables applications to send SMS messages using Twilio’s messaging APIs. Once configured, the connector exposes Twilio operations as callable REST services inside WaveMaker.

Common use cases include:
- Sending OTPs
- Transactional alerts
- Notifications and reminders

---

# Working with the Twilio Connector in WaveMaker

This document explains how to integrate and use the **Twilio Connector** in a WaveMaker application. Using this connector, you can send and receive **SMS, MMS, WhatsApp messages**, and also implement **OTP (One-Time Password) verification** using Twilio services.

---



## Importing the Twilio Connector



The Twilio Connector is obtained by downloading the latest Connector ZIP from the [Twilio Connector ZIP](https://github.com/wavemaker/twilio-connector/releases). The ZIP file is then imported into an existing WaveMaker project using the [Import Resource](../apis/third-party-libraries/jar-files.md) option in WaveMaker Studio. Once the import is completed, the Twilio Connector becomes available under the **Connectors** section of the project and can be configured for use within the application.


---

## Configuring Connector Properties

All connector-related properties are externalized and managed through WaveMaker profile configuration files.

The Twilio connector uses the following properties:

```properties
connector.twilio-connector.default.twilio.account.SID=
connector.twilio-connector.default.twilio.account.authtoken=
connector.twilio-connector.default.twilio.account.phoneNumber=
connector.twilio-connector.default.twilio.verify.services.serviceId=
```

Update these values with your Twilio account credentials in the appropriate profile file (for example, `local.properties` or environment-specific profiles).

---

## Using the Twilio Connector in Java Services

### Autowiring the Connector

To access Twilio APIs, inject the connector into your Java service class:

```java
import com.wavemaker.connector.twilio.TwilioConnector;

@Autowired
private TwilioConnector twilioConnector;
```

Once injected, all supported Twilio operations can be invoked directly from your service methods.

---

## Messaging Capabilities

### Sending an SMS

You can send a simple text message to a phone number using the following method:

```java
public void sendSMSToDevice(String toPhoneNumber, String messageBody) {
    twilioConnector.sendSMS(toPhoneNumber, messageBody);
}
```

---

### Sending an MMS

To send a multimedia message, provide a list of media URLs along with the message content:

```java
List<URI> mediaUris = new ArrayList<>();
URI url = new URI("<media-url>");
mediaUris.add(url);

twilioConnector.sendMMS(toPhoneNumber, messageBody, mediaUris);
```

---

### Sending a WhatsApp Message

WhatsApp messages can be sent in a similar manner using Twilio’s WhatsApp channel:

```java
List<URI> mediaUris = new ArrayList<>();
URI url = new URI("<media-url>");
mediaUris.add(url);

twilioConnector.sendWhatsAppMessage(toPhoneNumber, messageBody, mediaUris);
```

---

## Receiving and Responding to Messages

The connector also supports handling incoming SMS, MMS, and WhatsApp messages. You can define a service endpoint to receive these messages and send automated responses.

```java
public void respondToMessage(HttpServletRequest request, HttpServletResponse response) {
    twilioConnector.receiveAndRespondTwilioMessage(request, response,
        new TwilioMessageListener() {
            @Override
            public String onMessage(TwilioMessage twilioMessage) {
                // Custom business logic
                return "Reply message";
            }
        }
    );
}
```

Ensure that this endpoint is configured as a **webhook** in your Twilio phone number or WhatsApp sandbox settings.

---

## OTP (One-Time Password) Support

### Sending an OTP

You can send verification codes to users using Twilio Verify services:

```java
public VerificationResult sendOTPCode(String phoneNumber) {
    return twilioConnector.sendOTP(phoneNumber, Channel.SMS);
}
```

Supported channels include `SMS`, `CALL`, and `EMAIL`.

> **Note:** If you use the `EMAIL` channel, you must configure Twilio SendGrid with a dynamic email template. The SendGrid API key, template ID, and sender email should be configured under **Twilio Verify → Email Integration**.

---

### Validating an OTP

Once the user enters the received code, you can validate it as follows:

```java
public Boolean validateOTP(String phoneNumber, String otpCode) {
    VerificationResult result = twilioConnector.verifyOTP(phoneNumber, otpCode);
    return result.isValid();
}
```

A `true` value indicates that the OTP is valid and verified.

---

## Additional Notes

* The length and format of the OTP are controlled by the **Twilio Verify Service** configuration in your Twilio account.
* Incoming message handling requires a publicly accessible endpoint registered as a webhook in Twilio.
* All credentials and sensitive data should be managed using WaveMaker’s profile-based configuration system.

---

This completes the integration and usage guide for the Twilio Connector in WaveMaker.

## How-To Guides

Learn more about connectors through these practical guides:

- [AWS S3 Connector](/docs/guide/migrated-docs/aws-s3-connector) - Integrate with Amazon S3 storage
- [Azure File Storage Connector](/docs/guide/migrated-docs/azure-file-storage-connector) - Connect to Azure storage services
- [Insert Data from Excel](/docs/guide/migrated-docs/insert-data-from-excel) - Import Excel data into your application
- [AWS S3 Connector](/docs/guide/migrated-docs/aws-s3-connector) - Integrate with Amazon S3 storage
- [Twilio Connector](/docs/guide/migrated-docs/twilio-connector) - Add SMS and communication features
- [Twilio OTP Integration](/docs/guide/migrated-docs/twilio-otp-integration) - Implement one-time password authentication
- [Integrating Jasper Reports in WaveMaker](/docs/guide/migrated-docs/integrating-sample-jasper-report-wavemaker-application) - Add reporting capabilities
- [Generate PDF Files Using Jasper Reports](/docs/guide/migrated-docs/generate-pdf-file-using-jasper-reports) - Create PDF documents dynamically

---
