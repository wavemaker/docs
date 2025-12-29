---
last_update: { author: "Author Name" }
---
# Providers - Dummy Content

Application security is a foundational concern in modern software development. As applications increasingly rely on distributed architectures, APIs, and browser-based clients, enforcing robust security controls becomes critical to protecting data, users, and systems.

This chapter introduces the core concepts of application security as they apply to applications built using WaveMaker. It provides a high-level understanding of authentication, authorization, security providers, safeguards, and the role of generated backend code—without delving into detailed configurations or provider-specific implementations. Those aspects are covered in subsequent chapters.

---

## About Application Security

In a typical web application, client-side code (such as JavaScript executed in a browser) can be inspected, modified, or replayed by users. Because of this, **security cannot be enforced reliably on the client**. All critical security decisions—such as identity validation, access control, and data protection—must be enforced on the server.

Application security generally addresses the following goals:

- **Identity verification** – Ensuring that a user or system is who it claims to be  
- **Access control** – Restricting access to resources based on roles or permissions  
- **Data protection** – Preventing unauthorized access or modification of sensitive data  
- **Threat mitigation** – Protecting against unauthorized access, data leakage, or misuse of APIs  

WaveMaker follows a **server-centric security model**, where incoming requests are evaluated and enforced through backend security mechanisms before accessing application resources.

---

## Authentication & Authorization

Authentication and authorization are closely related but serve distinct purposes in application security.

- **Authentication** answers the question:  
  *Who is the user making this request?*  
  It involves validating credentials and establishing an authenticated identity.

- **Authorization** answers the question:  
  *What is the authenticated user allowed to do?*  
  It determines whether the user has sufficient privileges to access a resource or perform an action.

In a secured application, authentication always precedes authorization. A request must first establish identity before access rules can be evaluated.

WaveMaker supports enforcing both authentication and authorization consistently across application layers, including APIs, services, data operations, and UI-driven actions.

---

## Security Providers

A security provider defines **how authentication is performed** and **how user identities are resolved**. Different applications have different security requirements, ranging from simple credential checks to enterprise-grade identity integrations.

WaveMaker allows applications to integrate with a variety of security providers, enabling flexibility across use cases such as:

- Enterprise directory services  
- Token-based authentication systems  
- Form-based or credential-based login mechanisms  
- External identity providers  

Once a provider is configured and attached to an application, it becomes the source of truth for user authentication and identity resolution. Provider-specific details are abstracted from application logic, allowing developers to focus on business functionality.

---

## Safeguards

Safeguards represent **protective measures applied after authentication**, ensuring that application behavior remains secure during runtime.

These safeguards help:

- Enforce authorization rules on resources and operations  
- Prevent unauthorized API access  
- Secure data access paths  
- Control exposure of backend services  

In WaveMaker, safeguards are applied consistently across the application stack, ensuring that security rules are enforced regardless of how a request is initiated (UI, API, or external integration).

---

## Generated Backend Code

When a security provider is imported and configured, WaveMaker automatically generates backend security code as part of the application build process.

This generated code:

- Integrates security controls into the backend runtime  
- Establishes request-level security enforcement  
- Applies authentication and authorization checks uniformly  
- Aligns with established backend security frameworks  

The generated code is managed by the platform and evolves with application configuration, reducing the need for manual security boilerplate while ensuring consistency and correctness.

Developers can rely on this generated layer as the backbone of application security, while focusing on defining security rules and application behavior through configuration and design.

---
