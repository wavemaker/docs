---
title : "Adding Custom Filters in WaveMaker app"
id : "add-custom-filters"
---


In Spring Security, a filter is a fundamental component that plays a crucial role in controlling and securing access to resources within a Spring-based web application. Filters in Spring Security are responsible for performing various security-related tasks, such as authentication, authorization, and request processing, before or after a request reaches the application's endpoints.


### Why Custom Filters?

In every security-enabled application, you can find **FilterChain**. By default, **FilterChain** consists of Spring's pre-defined filters which perform authentication and authorization. But if you want to add custom pre or post-processing tasks on request or response you need to add custom filters in **FilterChain**.

:::note

**FilterChain** refers to a series or sequence of filters that are applied to incoming requests before they reach the intended servlet or resource. Each filter in the filter chain performs specific pre-processing or post-processing tasks on the request or response, such as authentication, authorization, logging, data transformation, or error handling.

:::

### Creating Custom Filter

1. Create a custom Java class that extends Filter. After creating the class click Save.

```java
package com.filters;

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

2. Navigate to the File Explorer and upload the class to src/main/java into the required package. After uploading the class click Cancel to apply the changes.

[![CustomFilter_class_upload](/learn/assets/CustomFilterclass_upload.jpg)](/learn/assets/CustomFilterclass_upload.jpg)

3. Define the above-created `CustomFilter` class bean in **project-user-spring.xml**.

```java
<bean class="com.filters.CustomFilter" id="customFilter"/>
```

[![CustomFilter_bean_defination](/learn/assets/CustomFilter_bean_def.jpg)](/learn/assets/CustomFilter_bean_def.jpg)

### Adding Custom Filter to Application Security Filters

In **general-options.json**, the `customFilterList` attribute is used to add custom filters. This attribute accepts a list of objects.

In the `customFilterList` attribute, you can use any name for a custom filter in the `name` field. The `ref` field accepts the bean ID of the CustomFilter bean defined in **project-user-spring.xml**. The third field in the `customFilterList` attribute defines where to add a custom filter in FilterChain and the field can be any one of these positions, `position`, `after`, and `before`. This field takes the filter enum value which represents the pre-defined Spring filter.

#### Using Position Field in CustomFilterList

1. When a `position` attribute is used, a custom filter will be added at the position of the pre-defined Spring filter which is mentioned in the value of `position` field.

```java
"customFilterList" : [
    {
      "name" : "customFilter",
      "ref" : "customFilter",
      "position" : "<Filter enum>"
    }
  ],
```

[![CustomFilter_adding_using_position](/learn/assets/Custom_filter_adding_using_position.jpg)](/learn/assets/Custom_filter_adding_using_position.jpg)

#### Using Before Field in CustomFilterList

1. When a `before` attribute is used, a custom filter will be added before the position of the pre-defined Spring filter which is mentioned in the value of `before` field.
```java
"customFilterList" : [
    {
      "name" : "customFilter",
      "ref" : "customFilter",
      "before" : "<Filter enum>"
    }
  ],
```

[![CustomFilter_adding_using_position](/learn/assets/Custom_filter_adding_using_before.jpg)](/learn/assets/Custom_filter_adding_using_before.jpg)

#### Using After Field in CustomFilterList

1. When an `after` attribute is used, a custom filter will be added after the position of the pre-defined Spring filter which is mentioned in the value of `after` field.


```java
"customFilterList" : [
    {
      "name" : "customFilter",
      "ref" : "customFilter",
      "after" : "<Filter enum>"
    }
  ],
```

[![CustomFilter_adding_using_position](/learn/assets/Custom_filter_adding_using_after.jpg)](/learn/assets/Custom_filter_adding_using_after.jpg)

<br/>

:::note
The below enum values can be given as input for `position`, `after`, and `before` fields in the `customFilterList` attribute:


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

On adding your custom filter in the `customFilterList` attribute in **general-options.json**, WaveMaker internally adds this filter in your application FilterChain.