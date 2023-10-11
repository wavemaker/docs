---
title : "Add Custom Filters in WaveMaker app"
id : "add-custom-filters"
---


In Spring Security, a filter is a fundamental component that plays a crucial role in controlling and securing access to resources within a Spring-based web application. Filters in Spring Security are responsible for performing various security-related tasks, such as authentication, authorization, and request processing, before or after a request reaches the application's endpoints.

### Create Custom Filter

Create a custom java class that extends Filter

```java
package com.mycompany.myapp.security.filters;

import javax.servlet.*;
import java.io.IOException;

public class CustomFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        //Write custom filter logic according to your requirements
        chain.doFilter(request, response);
    }

    @Override
    public void destroy() {
        
    }
}
```

- Navigate to the File Explorer and upload the class into src/main/java into the required package.

### Custom Filter declaration
Declare the above-created custom filter implementation (along with the package name) in `project-user-spring.xml`.

```java
<bean class="com.mycompany.myapp.security.filters.CustomFilter" id="customFilter"/>
```

### Add Custom Filter to the application Security Filters
In `general-options.json` the attribute "customFilterList" is there to add custom filters.This attributes accepts list of objects.

- Adding a custom filter at position of spring filter
```java
"customFilterList" : [
    {
      "name" : "customFilter",
      "ref" : "customFilter",
      "position" : "<Filter enum>"
    }
  ],
```

- Adding a custom filter before the spring filter
```java
"customFilterList" : [
    {
      "name" : "customFilter",
      "ref" : "customFilter",
      "before" : "<Filter enum>"
    }
  ],
```

- Adding a custom filter after the spring filter
```java
"customFilterList" : [
    {
      "name" : "customFilter",
      "ref" : "customFilter",
      "after" : "<Filter enum>"
    }
  ],
```

In the customFilterList attribute, you can use any name for a custom filter in the 'name' field. The 'ref' field accepts the bean id of the CustomFilter bean in `project-user-spring.xml`. The 'position' field is optional, so you can use either 'position/after/before'. If you use 'position', the custom filter will be added at the position of the pre-defined filter in the filter chain, which is PRE_AUTH_FILTER in above case (PRE_AUTH_FILTER is an enum value of the filter class AbstractPreAuthenticatedProcessingFilter). If 'after' is used ("after": "PRE_AUTH_FILTER"), the custom filter will be added after AbstractPreAuthenticatedProcessingFilter. The same applies to 'before' – a custom filter will be added before AbstractPreAuthenticatedProcessingFilter in the FilterChain.

:::note
The below enum values can be used for any one of these "position/after/before" fields in the customFilterList:


| Filter enum value |Filter CLass |
| ----- | ------ |
|FIRST|SessionRepositoryFilter|
|CHANNEL_FILTER|ChannelProcessingFilter|
|SECURITY_CONTEXT_FILTER|SecurityContextPersistenceFilter|
|CONCURRENT_SESSION_FILTER|ConcurrentSessionFilter|
|WEB_ASYNC_MANAGER_FILTER|WebAsyncManagerIntegrationFilter|
|HEADERS_FILTER|HeaderWriterFilter|
|CORS_FILTER|CorsFilter|
|CSRF_FILTER|CsrfFilter|
|LOGOUT_FILTER|LogoutFilter|
|X509_FILTER|X509AuthenticationFilter|
|PRE_AUTH_FILTER|AbstractPreAuthenticatedProcessingFilter|
|CAS_FILTER|CasAuthenticationFilter|
|FORM_LOGIN_FILTER|UsernamePasswordAuthenticationFilter|
|OPENID_FILTER|OAuth2LoginAuthenticationFilter|
|LOGIN_PAGE_FILTER|DefaultLoginPageGeneratingFilter|
|DIGEST_AUTH_FILTER|DigestAuthenticationFilter|
|BASIC_AUTH_FILTER|BasicAuthenticationFilter|
|REQUEST_CACHE_FILTER|RequestCacheAwareFilter|
|SERVLET_API_SUPPORT_FILTER|SecurityContextHolderAwareRequestFilter|
|JAAS_API_SUPPORT_FILTER|JaasApiIntegrationFilter|
|REMEMBER_ME_FILTER|RememberMeAuthenticationFilter|
|ANONYMOUS_FILTER|AnonymousAuthenticationFilter|
|SESSION_MANAGEMENT_FILTER|SessionManagementFilter|
|EXCEPTION_TRANSLATION_FILTER|ExceptionTranslationFilter|
|FILTER_SECURITY_INTERCEPTOR|FilterSecurityInterceptor|
|SWITCH_USER_FILTER|SwitchUserFilter|
|LAST|SwitchUserFilter|

:::