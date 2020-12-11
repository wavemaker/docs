---
title: "SSL Offloading in LoadBalancer"
id: ""
---
---


SSL offloading is the process of removing the SSL based encryption from incoming traffic that a web server receives to relieve it from decryption of data. Security Socket Layer (SSL) is a protocol that ensures the security of HTTP traffic and HTTP requests on the internet. SSL traffic can be compute intensive since it requires encryption and decryption of traffic. SSL (called TLS or Transport Layer Security now) relies on public key cryptography to encrypt communications between the client and server sending messages safely across networks. Encryption of sensitive information protects against potential hackers and man-in-the-middle attacks.

LoadBalancers will verify and decrypt the data before sending to backend nodes.
Backend nodes will receive http trafic. 

WaveMaker Apps can be deployed in various Web/Application Servers. 
We will discuss here what needs to be taken care while Deploying WaveMaker App into Tomcat Server.

- LoadBalancers will offload ssl and sends http trafic to tomcat.
- LoadBalancers will send below Headers to backend tomcat.
   - `X-Forwarded-Proto=https`
   - `X-Forwarded-For`
- Tomcat should able to read this header and understood that its https.
- Our WaveMaker app checks the request with request.isSecure() to validate whether it is https or not.
- Default tomcat installation don't read `X-Forwarded-Proto` to mark it as https.
- So we have to update server.xml with below snippet, just above  <Valve> tag. /usr/tomcat/conf is the defult location of server.xml.

```shell
<Valve className="org.apache.catalina.valves.RemoteIpValve"
remoteIpHeader="X-Forwarded-For"
requestAttributesEnabled="true"
protocolHeader="X-Forwarded-Proto"
protocolHeaderHttpsValue="https"/> 

```
- protocolHeader will be considered only for few internal ips. We can change it via internalProxies.
- Default value for internalProxies="10\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|192\\.168\\.\\d{1,3}\\.\\d{1,3}|169\\.254\\.\\d{1,3}\\.\\d{1,3}|127\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|172\\.1[6-9]{1}\\.\\d{1,3}\\.\\d{1,3}|172\\.2[0-9]{1}\\.\\d{1,3}\\.\\d{1,3}|172\\.3[0-1]{1}\\.\\d{1,3}\\.\\d{1,3}|0:0:0:0:0:0:0:1|::1"
- We can add to be allowed ip range.  

```shell
<Valve className="org.apache.catalina.valves.RemoteIpValve"
internalProxies="Updated-IP-Range"
remoteIpHeader="X-Forwarded-For"
requestAttributesEnabled="true"
protocolHeader="X-Forwarded-Proto"
protocolHeaderHttpsValue="https"/> 
```

- Keep below content in header_test.jsp file. Upload header_test.jsp file under resources directory of WaveMaker application to test headers.
- You can hit https://<your-app-domain>/<app-name>/resources/header_test.jsp
- Remove this file after testing, this could lead to potential security thread by leaking headers of our system.

```shell
<%@ page import="java.util.*" %>
<html>
   <head>
      <title>EchoHeaders</title>
   </head>
   <body>
      <h1>HTTP Request Headers Received</h1>
      <h1>Is Secure  : <%= request.isSecure() %></h1>
      <h1>Request URL: <%= request.getRequestURL() %></h1>
      <h1>Server Name: <%= request.getServerName() %></h1>
      <h1>Server Port: <%= request.getServerPort() %></h1>
      <table border="1" cellpadding="4" cellspacing="0">
      <%
         Enumeration eNames = request.getHeaderNames();
         while (eNames.hasMoreElements()) {
            String name = (String) eNames.nextElement();
            String value = normalize(request.getHeader(name));
      %>
         <tr><td><%= name %></td><td><%= value %></td></tr>
      <%
         }
      %>
      </table>
   </body>
</html>
<%!
   private String normalize(String value)
   {
      StringBuffer sb = new StringBuffer();
      for (int i = 0; i < value.length(); i++) {
         char c = value.charAt(i);
         sb.append(c);
         if (c == ';')
            sb.append("<br>");
      }
      return sb.toString();
   }
%>

```