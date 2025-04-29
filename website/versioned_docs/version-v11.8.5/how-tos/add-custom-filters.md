---
title : "Adding Custom Filters in WaveMaker app"
id : "add-custom-filters"
---


In Spring Security, a filter is a fundamental component that plays a crucial role in controlling and securing access to resources within a Spring-based web application. Filters in Spring Security are responsible for performing various security-related tasks, such as authentication, authorization, and request processing, before or after a request reaches the application's endpoints.


### Need of Custom Filters
In every security enabled application, you can find **FilterChain**.By default FilterChain consists of spring's pre-defined filters which performs authentication and authorization. But if you want to add custom pre or post processing tasks on request or response you need to add custom filters in FilterChain.

:::note
**FilterChain**: It refers to a series or sequence of filters that are applied to incoming requests before they reach the intended servlet or resource. Each filter in the filter chain performs specific pre-processing or post-processing tasks on the request or response, such as authentication, authorization, logging, data transformation, or error handling.
:::

### Create Custom Filter

1. Create a custom java class that extends Filter. After creating save the file.

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

2. Navigate to the File Explorer and upload the class into src/main/java into the required package. After uploading the class click cancel to apply the changes.

[![CustomFilter_class_upload](/learn/assets/CustomFilterclass_upload.jpg)](/learn/assets/CustomFilterclass_upload.jpg)

3. Define the above created CustomFilter class bean in **project-user-spring.xml** file.

```java
<bean class="com.filters.CustomFilter" id="customFilter"/>
```

[![CustomFilter_bean_defination](/learn/assets/CustomFilter_bean_defination.jpg)](/learn/assets/CustomFilter_bean_defination.jpg)

By following above steps you can create a bean of custom filter, but to add custom filter in FilterChain follow the below steps.

### Add Custom Filter to the application Security Filters
In **general-options.json** file, `customFilterList` attribute is used to add custom filters.This attribute accepts list of objects.


In the `customFilterList` attribute, you can use any name for a custom filter in the `name` field. The `ref` field accepts the bean id of the CustomFilter bean defined in **project-user-spring.xml** file. Third field in `customFilterList` attribute defines where to add custom filter in FilterChain and the field can be any one of these `position`, `after`, and `before`. This third field takes the filter enum value which represents the pre-defined spring filter.

#### Using position field in customFilterList

1. When a `position` attribute is used, custom filter will be added at the position of pre-defined spring filter which is mentioned in value of `position` field.

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

#### Using before field in customFilterList

1. When a `before` attribute is used, custom filter will be added before the position of pre-defined spring filter which is mentioned in value of `before` field.
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

#### Using after field in customFilterList

1. When a `after` attribute is used, custom filter will be added after the position of pre-defined spring filter which is mentioned in value of `after` field.
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