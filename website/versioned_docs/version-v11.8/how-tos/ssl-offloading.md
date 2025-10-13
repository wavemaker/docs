---
title: "SSL Termination in LoadBalancer"
id: "ssl-offloading"
---
---

SSL Termination or SSL offloading is the process of removing the SSL based encryption from incoming traffic that a web server receives to relieve it from decryption of data.

LoadBalancers will verify SSL and decrypt the data before sending it to the backend nodes.
Backend nodes will always receive HTTP traffic with a few `X-Forwarded` headers.

![SSL Offloading](/learn/assets/SSL-Offloading.png)

WaveMaker apps can be deployed in various Web/Application Servers. In this document, see what you'll need for deploying WaveMaker App into a Tomcat server. A similar approach should be followed for other servers as well.

- LoadBalancers will offload SSL and sends HTTP traffic to the Tomcat server.
- LoadBalancers will add below Headers before sending the request to the Tomcat server.
   - `X-Forwarded-Proto`
   - `X-Forwarded-For`
   - `X-Forwarded-Port`
- WaveMaker App checks the request with `request.isSecure()` to validate whether it is HTTPS or not.
- Tomcat should able to read these headers and trust HTTPS.
- Default tomcat installation does not honor these headers. So you have to configure a Tomcat valve to read and honor all these headers.
- Update `server.xml` with below snippet, just above the `<Valve>` tag.
- `/usr/local/tomcat/conf` is the defult location of `server.xml`.

```shell
<Valve className="org.apache.catalina.valves.RemoteIpValve"
remoteIpHeader="X-Forwarded-For"
requestAttributesEnabled="true"
protocolHeader="X-Forwarded-Proto"
protocolHeaderHttpsValue="https"
portHeader="X-Forwarded-Port" /> 
```

- `protocolHeader` will be considered only for a few internal IP ranges. We can change them via `internalProxies` attribute of the Tomcat valve. This is an optional setting required when you request IP ranges that do not fall under the default values.

- Default value for `internalProxies` = `"10\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|192\\.168\\.\\d{1,3}\\.\\d{1,3}|169\\.254\\.\\d{1,3}\\.\\d{1,3}|127\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|172\\.1[6-9]{1}\\.\\d{1,3}\\.\\d{1,3}|172\\.2[0-9]{1}\\.\\d{1,3}\\.\\d{1,3}|172\\.3[0-1]{1}\\.\\d{1,3}\\.\\d{1,3}|0:0:0:0:0:0:0:1|::1"`.

- Add your allowed IP ranges in the above format to the `internalProxies` attribute value.  

```shell
<Valve className="org.apache.catalina.valves.RemoteIpValve"
internalProxies="<Updated-IP-Range>"
remoteIpHeader="X-Forwarded-For"
requestAttributesEnabled="true"
protocolHeader="X-Forwarded-Proto"
protocolHeaderHttpsValue="https"
portHeader="X-Forwarded-Port" /> 
```

## Test Headers in WebApp

Follow the below steps to test which headers are received by WebApp while hitting from a browser.

- Keep the below content in the `header_test.jsp` file. Upload the `header_test.jsp` file under `src/main/webapp/resources` directory of WaveMaker application using Studio Upload File UI.
- You can hit `https://<your-app-domain>/<app-name>/resources/header_test.jsp`
- Remove this file after testing; this could lead to a potential security threat by leaking the header information of the system.

```shell
<%@ page import="java.util.*" %>
<html>
   <head>
      <title>EchoHeaders</title>
   </head>
   <body>
      <h1>HTTP Request Headers Received</h1>
      <h2>Is Secure  : <%= request.isSecure() %></h2>
      <h2>Request URL: <%= request.getRequestURL() %></h2>
      <h2>Request URI: <%= request.getRequestURI() %></h2>
      <h2>Server Name: <%= request.getServerName() %></h2>
      <h2>Server Port: <%= request.getServerPort() %></h2>
      <h2>Remote Addr: <%= request.getRemoteAddr() %></h2>
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
            sb.append(" ");
      }
      return sb.toString();
   }
%>

```