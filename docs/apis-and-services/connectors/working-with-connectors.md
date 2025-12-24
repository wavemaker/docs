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

## Adding the Twilio Connector

1. Open your WaveMaker project.
2. Navigate to **Services → Connectors**.
3. Search for **Twilio** in the connector marketplace.
4. Add the connector to your project.

Once added, the Twilio connector appears as a service under the **Services** section.

---

## Configuring the Twilio Connector

To use the Twilio connector, you must provide valid Twilio credentials.

### Required Configuration Properties

| Property | Description |
|--------|-------------|
| **Account SID** | Unique identifier for your Twilio account |
| **Auth Token** | Authentication token for API access |
| **From Number** | Twilio-registered phone number used to send messages |

These values are stored as **server-side properties**, ensuring credentials are not exposed on the client.

---

## Available Operations

After configuration, the Twilio connector exposes operations such as:
- **Send SMS** – Sends a text message to a specified phone number

Each operation is available as a REST API that can be invoked from the UI or server logic.

---

## Using the Twilio Connector in the Application

### Step 1: Create a Service Variable
1. Go to the page where SMS functionality is needed.
2. Create a **Service Variable**.
3. Select the **Twilio Connector** as the service.
4. Choose the **Send SMS** operation.

---

### Step 2: Bind Input Parameters
Map UI inputs or static values to the operation parameters:
- **To** → Recipient phone number
- **From** → Twilio phone number
- **Body** → Message content

These parameters can be bound to text fields, variables, or predefined values.

---

### Step 3: Trigger the Operation
Invoke the service variable using an event such as:
- Button click
- Page load
- Form submit

When triggered, the application sends an SMS via Twilio.

---

## Runtime Behavior

At runtime:
1. The UI triggers the service variable.
2. WaveMaker invokes the Twilio connector.
3. The connector sends a request to Twilio’s REST API.
4. Twilio processes the request and sends the SMS.
5. The response is returned to the application.

---

## Error Handling and Responses

- Success and failure responses are returned as structured JSON.
- Developers can handle errors using callbacks or conditional logic in the UI.
- Common errors include invalid credentials, unverified phone numbers, or exceeded usage limits.

---

## Benefits of Using Connectors

- No manual REST API implementation
- Secure credential management
- Reusable service definitions
- Faster third-party integration
- Consistent development experience

---

## Summary

Connectors in WaveMaker simplify third-party integrations by converting external APIs into reusable backend services. The Twilio Connector demonstrates how messaging capabilities can be added to an application with minimal effort, allowing developers to focus on business functionality rather than integration complexity.
