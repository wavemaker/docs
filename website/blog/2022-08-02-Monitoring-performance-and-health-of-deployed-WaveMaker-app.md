---
title: "Monitoring performance and health of deployed WaveMaker app"
author: Deepika Srimanthula
---
---
## About Open Telemetry

Open telemetry is an open-source portable telemetry tool to enable Observability. Observability lets a developer understand an application from the outside without knowing its inner workings and allows a developer to easily troubleshoot and handle novel problems. For this, a developer should make sure the application is instrumented. OpenTelemetry is a mechanism by which application code is instrumented, by instrumenting code emits traces and metrics, this traced data helps developers make the application observable. 
Once instrumented, the user flows become traceable across different microservices. This data is sent to Zipkin. Zipkin is a very popular open source tool. OpenTelemetry’s goal is to provide a set of standardized vendor-agnostic APIs for transforming and sending data to an Observability backend, this is compatible with any back-end self-hosted open-source tools, commercial tools to SaaS offerings.

<!-- truncate -->

## Benefits of implementing observability
Metrics, Logs and Traces make up the golden triangle of Observability (https://devops.com/metrics-logs-and-traces-the-golden-triangle-of-observability-in-monitoring/) of any application. WaveMaker built applications can also easily be set up for tracing.

  1. What if all of a sudden, one of the applications has slowed down.
  2. What if the API the application code is showing 500 as a status code and no clue what went wrong inside.
  3. What if there is no visibility on DB based requests. 
  4. What if one of the application calls is taking too long than expected.

OpenTelemetry tool integration with an application can help have detailed visibility of tracing an application deployed anywhere at CI/CD pipeline to easily spot almost any issue or have an idea of where the problem could be. 
Instrumenting WaveMaker applications code and getting traces for each request either it could be DataBase, external rest, or any complex API composer requests made from WaveMaker application along with their time slices can be captured in detail.

## Four simple integration steps for Opentelemety
  1. Install and Setup tools
  2. Instrument application code
  3. Build and Deploy application
  4. Accessing request traces
  
### Install and Setup tools
    How to use OpenTelemetry integration to have complete visibility of the application, Here in this first step explains details to **Install and Setup tools** and integrate OpenTelemetry and Zipkin with the application deployed at Apache Tomcat.
    
  1. Install Zipkin as default data collector and tracing dashboard. Once the following docker command is run, browse to **http://your_host:9411** to find traces. Dashbord will be empty initially. 
  
            docker run -d -p 9411:9411 openzipkin/zipkin
          
  2. WaveMaker application can be deployed on specific versions of Apache Tomcat. Install Tomcat by following installation instructions and then copy step 1 downloaded opentelemetry-javaagent.jar to tomcat lib directory(**$TOMCAT_HOME/lib/**)
  
### Instrument application code
    OpenTelemetry code instrumentation is supported for Java based applications, here are the steps  to  Instrument application code.
  
   1. Download latest open telemetry opentelemetry-javaagent.jar from the Open Telemetry repo and place the JAR at preferred directory and launch it with tomcat.
   
   2. Set environment variables by adding the `setenv.sh` file above the installed tomcat bin directory.

`$TOMCAT_HOME/bin/setenv.sh`

          export CATALINA_OPTS="$CATALINA_OPTS -javaagent:/usr/local/tomcat/lib/opentelemetry-javaagent.jar”

          export OTEL_TRACES_EXPORTER=“-Dotel.traces.exporter=zipkin”

          export  OTEL_EXPORTER_ZIPKIN_ENDPOINT=“-Dotel.exporter.zipkin.endpoint=http://<zipkin-host-ip>:<zipkin-port>/api/v2/spans”

          export OTEL_SERVICE_NAME=”-Dotel.service.name=<App/service name>”

          export JAVA_OPTS=”$JAVA_OPTS $CATALINA_OPTS $OTEL_TRACES_EXPORTER $OTEL_EXPORTER_ZIPKIN_ENDPOINT $OTEL_SERVICE_NAME”
		  
**Note:** Here Zipkin server should be accessible to the tomcat server.

  3. Introduce tracing code:
    To introduce tracing and create correlations Spring AOP(Aspect Oriented Programming) code changes needed, this code can also be introduced by using the IDE at WaveMaker application.  
    Download WaveMaker Application Zip from Studio, extract the downloaded zip file to a directory and call it as `$WMAPP_HOME`
    Navigate to the maven `pom.xml` file to add following dependencies code snippet
    
`$WMAPP_HOME---->pom.xml`

          <dependencies>
            <dependency>
                  <groupId>io.opentelemetry</groupId>
                  <artifactId>opentelemetry-sdk</artifactId>
                  <version>1.11.0</version>
            </dependency>
           <dependencies>
    

Navigate to the `project-user-spring.xml` in the below path and add the given snippet


`$WMAPP_HOME -----> src/main/webapp/WEB-INF/project-user-spring.xml`
    
          <beans xmlns="http://www.springframework.org/schema/beans"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:aop="http://www.springframework.org/schema/aop"
              xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd 
              http://www.springframework.org/schema/aop   
                  http://www.springframework.org/schema/aop/spring-aop-3.0.xsd ">
                  <!--<context:component-scan base-package="com.aop.aspect"/>-->
                  <bean id="LogAspect" class="com.aop.aspect.LogAspect"/>

              <aop:config>  
                <aop:aspect id="myaspect" ref="LogAspect" >  
                   <!-- @Before -->  
                   <aop:pointcut id="pointCutBefore" expression="within (com.wavemaker.*.*.controller..*) || within (com.wavemaker.runtime.rest.controller..*)|| within (com.*.*.controller..*)"/>  
                   <aop:before method="before" pointcut-ref="pointCutBefore" />
                </aop:aspect>  
              </aop:config>  
          </beans>

Create a new java file with given package structure and copy code to the created Java source file

`$WMAPP_HOME ----->src/main/java/com/aop/aspect/LogAspect.java`

          package com.aop.aspect;

          import org.aspectj.lang.JoinPoint;
          import org.slf4j.Logger;
          import org.slf4j.LoggerFactory;
          import io.opentelemetry.api.trace.Span;
          import javax.servlet.http.HttpServletResponse;
          import org.springframework.beans.factory.annotation.Autowired;
          public class LogAspect {

              private static final Logger logger = LoggerFactory.getLogger(LogAspect.class);

              @Autowired
              private HttpServletResponse response;

             public void before(JoinPoint jp) {
                  Span currentSpan = Span.current();
                  currentSpan.setAttribute("x-wm-request-track-id", response.getHeader("x-wm-request-track-id"));
              }
          }
### Build and Deploy application
Build and Deploy application to reflect above instrumentation code change

  1. With above changes build WaveMaker app for WAR and copy built war to tomcat setup at webapps folder `($TOMCAT_HOME/webapps)`
 
  2. Restart the tomcat server to reflect above changes at `setenv.sh` along with the WaeMaker application.

### Accessing request traces
Accessing request traces with Use Cases
Here is the introduced sample use case at WaveMaker application to imitate calls to other external services, or another microservice and a call to database engine into the application. Following are the Zipkin screenshots where time taken by application request is spent in each function, to pin where the problem is with the call to the microservice and focus on reducing the latency in a service considering the time details exposed. Or, These traces can be used to understand what the workflow of a request is. 
Another advantage that works is by introducing trace ID in the response payload of the WaveMaker application and using that ID to correlate with other dependency calls.

Every time when a hit to service endpoint of an application is made a trace is captured at Zipkin, to see something like this at Zipkin dashboard by accessing url http://your_host:9411,  here are few WaveMaker application request traces.
    
    



