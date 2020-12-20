---
title: "SSL Termination in LoadBalancer"
id: ""
---
---


SSL Termination or SSL offloading is the process of removing the SSL based encryption from incoming traffic that a web server receives to relieve it from decryption of data. 

LoadBalancers will verify SSL and decrypt the data before sending to backend nodes.
Backend nodes will always receive http trafic with few `X-Forwarded` headers. 

![SSL Offloading](/learn/assets/SSL-Offloading.png)

WaveMaker Apps can be deployed in various Web/Application Servers. 
We will discuss here what needs to be taken care while Deploying WaveMaker App into Tomcat Server. Similar approach needs to be followed for other Servers.

- LoadBalancers will offload ssl and sends http trafic to tomcat server.
- LoadBalancers will add below Headers before sending request to tomcat server.
   - `X-Forwarded-Proto`
   - `X-Forwarded-For`
   - `X-Forwarded-Port`
- Our WaveMaker app checks the request with request.isSecure() to validate whether it is https or not.
- Tomcat should able to read this headers and trust that its https.
- Default tomcat installation don't honor these headers. So we have to configure Tomcat valve to read and honor all these headers.
- Update server.xml with below snippet, just above  `<Valve>` tag. 
- `/usr/local/tomcat/conf` is the defult location of `server.xml`.

```shell
<Valve className="org.apache.catalina.valves.RemoteIpValve"
remoteIpHeader="X-Forwarded-For"
requestAttributesEnabled="true"
protocolHeader="X-Forwarded-Proto"
protocolHeaderHttpsValue="https"
portHeader="X-Forwarded-Port" /> 
```
- `protocolHeader` will be considered only for few internal ip ranges. We can change them via internalProxies attribute of the Tomcat valve.  This is an Optional setting which required when request ip ranges are not fallen under default values.

- Default value for internalProxies="10\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|192\\.168\\.\\d{1,3}\\.\\d{1,3}|169\\.254\\.\\d{1,3}\\.\\d{1,3}|127\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|172\\.1[6-9]{1}\\.\\d{1,3}\\.\\d{1,3}|172\\.2[0-9]{1}\\.\\d{1,3}\\.\\d{1,3}|172\\.3[0-1]{1}\\.\\d{1,3}\\.\\d{1,3}|0:0:0:0:0:0:0:1|::1"

- Add your allowed IP ranges in the above format to the internalProxies attribute value.  

```shell
<Valve className="org.apache.catalina.valves.RemoteIpValve"
internalProxies="<Updated-IP-Range>"
remoteIpHeader="X-Forwarded-For"
requestAttributesEnabled="true"
protocolHeader="X-Forwarded-Proto"
protocolHeaderHttpsValue="https"
portHeader="X-Forwarded-Port" /> 
```

### Test Headers in WebApp
Follow below steps to test which headers are received by Webapp while hitting from browser.

- Keep below content in `header_test.jsp` file. Upload `header_test.jsp` file under `src/main/webapp/resources` directory of WaveMaker application using Studio Upload File UI.
- You can hit `https://<your-app-domain>/<app-name>/resources/header_test.jsp`
- Remove this file after testing, this could lead to potential security threat by leaking headers information of our system.

```shell
<%@ page import="java.util.*" %>
<html>
   <head>
      <title>EchoHeaders</title>
   </head>
   <body>
      <h1>HTTP Request Headers Received</h1>
      <h2>Is Secure  : <%= request.isSecure() %></h1>
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
            sb.append("<br>");
      }
      return sb.toString();
   }
%>

```