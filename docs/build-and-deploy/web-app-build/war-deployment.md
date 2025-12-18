# WAR Deployment

Learn how to build and deploy Java web applications as WAR (Web Application Archive) files.

## Overview
WAR files are the standard format for deploying Java web applications to servlet containers and application servers.

## What is a WAR File?

### WAR Structure
```
myapp.war
├── META-INF/
│   └── MANIFEST.MF
├── WEB-INF/
│   ├── web.xml (deployment descriptor)
│   ├── classes/ (compiled Java classes)
│   ├── lib/ (JAR dependencies)
│   └── spring/ (configuration files)
└── static/
    ├── index.html
    ├── css/
    ├── js/
    └── images/
```

### Components
- **META-INF**: Metadata and manifest
- **WEB-INF**: Protected resources (classes, libs, configs)
- **Static resources**: HTML, CSS, JS, images
- **Configuration files**: web.xml, application properties

## Building WAR Files

### Maven Build

#### pom.xml Configuration
```xml
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>myapp</artifactId>
    <version>1.0.0</version>
    <packaging>war</packaging>

    <build>
        <finalName>myapp</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-war-plugin</artifactId>
                <version>3.3.2</version>
                <configuration>
                    <failOnMissingWebXml>false</failOnMissingWebXml>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

#### Build Commands
```bash
# Build WAR file
mvn clean package

# Build without tests
mvn clean package -DskipTests

# Build with specific profile
mvn clean package -P production

# Install to local repository
mvn clean install
```

### Gradle Build

#### build.gradle Configuration
```groovy
plugins {
    id 'war'
    id 'java'
}

group = 'com.example'
version = '1.0.0'

war {
    archiveFileName = 'myapp.war'
}

dependencies {
    providedCompile 'javax.servlet:javax.servlet-api:4.0.1'
    implementation 'org.springframework.boot:spring-boot-starter-web'
}
```

#### Build Commands
```bash
# Build WAR file
./gradlew clean build

# Build without tests
./gradlew clean build -x test

# Build for production
./gradlew clean build -Pprod
```

## Spring Boot WAR

### Spring Boot Configuration

#### Main Application Class
```java
@SpringBootApplication
public class Application extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
```

#### Dependencies
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-tomcat</artifactId>
    <scope>provided</scope>
</dependency>
```

## Deployment Targets

### Apache Tomcat

#### Deployment Methods

**1. Manager GUI**
- Access Tomcat Manager (http://localhost:8080/manager)
- Upload WAR file
- Deploy application

**2. File System**
```bash
# Copy WAR to webapps directory
cp myapp.war $TOMCAT_HOME/webapps/

# Tomcat auto-deploys the application
```

**3. Manager API**
```bash
# Deploy via curl
curl -u admin:password -T myapp.war \
  "http://localhost:8080/manager/text/deploy?path=/myapp&update=true"
```

#### Configuration
```xml
<!-- server.xml -->
<Host name="localhost" appBase="webapps"
      unpackWARs="true" autoDeploy="true">
    <Context path="/myapp" docBase="myapp" reloadable="true"/>
</Host>
```

### JBoss/WildFly

#### Deployment
```bash
# Copy to deployments directory
cp myapp.war $JBOSS_HOME/standalone/deployments/

# Or use CLI
jboss-cli.sh --connect --command="deploy myapp.war"
```

#### Configuration
```xml
<!-- jboss-web.xml -->
<jboss-web>
    <context-root>/myapp</context-root>
    <virtual-host>default-host</virtual-host>
</jboss-web>
```

### WebLogic

#### Deployment
```bash
# Using WebLogic console
# Navigate to Deployments → Install
# Select WAR file and configure

# Or use WLST
java weblogic.Deployer -adminurl http://localhost:7001 \
  -username admin -password password \
  -deploy -name myapp -source myapp.war
```

### Jetty

#### Deployment
```bash
# Copy to webapps directory
cp myapp.war $JETTY_HOME/webapps/

# Configure context
# jetty-web.xml
<?xml version="1.0"?>
<!DOCTYPE Configure PUBLIC "-//Jetty//Configure//EN"
  "http://www.eclipse.org/jetty/configure.dtd">
<Configure class="org.eclipse.jetty.webapp.WebAppContext">
    <Set name="contextPath">/myapp</Set>
</Configure>
```

## Configuration Management

### External Configuration

#### Application Properties
```properties
# application.properties embedded in WAR
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb

# Override with external file
java -jar myapp.war --spring.config.location=file:/config/application.properties
```

#### Environment Variables
```bash
export SPRING_DATASOURCE_URL=jdbc:mysql://prod-server:3306/proddb
export SPRING_DATASOURCE_USERNAME=produser
export SPRING_DATASOURCE_PASSWORD=prodpass
```

#### JNDI Resources
```xml
<!-- context.xml -->
<Context>
    <Resource name="jdbc/mydb"
              auth="Container"
              type="javax.sql.DataSource"
              maxTotal="100"
              maxIdle="30"
              maxWaitMillis="10000"
              username="dbuser"
              password="dbpass"
              driverClassName="com.mysql.jdbc.Driver"
              url="jdbc:mysql://localhost:3306/mydb"/>
</Context>
```

## Production Considerations

### Performance Optimization
- Enable compression
- Configure connection pooling
- Tune JVM parameters
- Enable caching

### JVM Configuration
```bash
# setenv.sh (Tomcat)
CATALINA_OPTS="$CATALINA_OPTS -Xms2g -Xmx4g"
CATALINA_OPTS="$CATALINA_OPTS -XX:+UseG1GC"
CATALINA_OPTS="$CATALINA_OPTS -XX:MaxGCPauseMillis=200"
CATALINA_OPTS="$CATALINA_OPTS -Dspring.profiles.active=production"
```

### Security Configuration
```xml
<!-- web.xml -->
<security-constraint>
    <web-resource-collection>
        <web-resource-name>Protected Area</web-resource-name>
        <url-pattern>/admin/*</url-pattern>
    </web-resource-collection>
    <auth-constraint>
        <role-name>admin</role-name>
    </auth-constraint>
</security-constraint>

<login-config>
    <auth-method>FORM</auth-method>
    <realm-name>MyApp</realm-name>
    <form-login-config>
        <form-login-page>/login.jsp</form-login-page>
        <form-error-page>/login-error.jsp</form-error-page>
    </form-login-config>
</login-config>
```

## Monitoring & Logging

### Logging Configuration
```xml
<!-- logback.xml -->
<configuration>
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>/var/log/myapp/application.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>/var/log/myapp/application.%d{yyyy-MM-dd}.log</fileNamePattern>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
    </appender>

    <root level="INFO">
        <appender-ref ref="FILE" />
    </root>
</configuration>
```

### Health Checks
```java
@RestController
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("UP");
    }
}
```

## Continuous Deployment

### CI/CD Pipeline
```yaml
# .gitlab-ci.yml
build:
  stage: build
  script:
    - mvn clean package
  artifacts:
    paths:
      - target/*.war

deploy:
  stage: deploy
  script:
    - scp target/myapp.war user@server:/opt/tomcat/webapps/
  only:
    - master
```

### Automated Deployment Script
```bash
#!/bin/bash
# deploy.sh

WAR_FILE="target/myapp.war"
TOMCAT_HOST="production-server"
TOMCAT_USER="tomcat"
TOMCAT_HOME="/opt/tomcat"

# Build
mvn clean package

# Backup current version
ssh $TOMCAT_USER@$TOMCAT_HOST \
  "cp $TOMCAT_HOME/webapps/myapp.war $TOMCAT_HOME/webapps/myapp.war.backup"

# Stop Tomcat
ssh $TOMCAT_USER@$TOMCAT_HOST "$TOMCAT_HOME/bin/shutdown.sh"

# Deploy new version
scp $WAR_FILE $TOMCAT_USER@$TOMCAT_HOST:$TOMCAT_HOME/webapps/

# Start Tomcat
ssh $TOMCAT_USER@$TOMCAT_HOST "$TOMCAT_HOME/bin/startup.sh"

echo "Deployment complete!"
```

## Troubleshooting

### Common Issues

#### ClassNotFoundException
- Check WEB-INF/lib for missing JARs
- Verify Maven/Gradle dependencies
- Check scope (provided vs compile)

#### Context Path Issues
- Verify context-root configuration
- Check server configuration
- Review web.xml settings

#### Deployment Failures
- Check server logs
- Verify WAR file integrity
- Check permissions
- Verify dependencies

### Debug Tips
```bash
# Extract WAR to inspect contents
unzip -l myapp.war

# Check manifest
unzip -p myapp.war META-INF/MANIFEST.MF

# List classes
jar -tf myapp.war | grep .class
```

## Best Practices

1. **Use Maven/Gradle** for consistent builds
2. **Externalize configuration** for different environments
3. **Version your WARs** properly
4. **Test locally** before deployment
5. **Monitor application** after deployment
6. **Keep dependencies updated**
7. **Use profiles** for environment-specific builds
8. **Document deployment process**
9. **Automate deployments** with CI/CD
10. **Have rollback plan** ready

## Related Documentation

- [Build Options](./built_options.md)
- [CI/CD Deployment](../Deployment-CI_CD/one_click_deployment.md)
- [Container Deployment](../Deployment-CI_CD/container_deployment.md)
