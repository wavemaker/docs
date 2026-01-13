
# Active Directory (LDAP)

WaveMaker supports **Active Directory (AD)** authentication using the **LDAP protocol**, allowing users to log in with their enterprise credentials. This enables secure, centralized authentication and optional role-based access control (RBAC) by mapping AD groups to application roles.

---

## How Active Directory Authentication Works

1. A user attempts to access a secured WaveMaker page or API.
2. WaveMaker binds to the configured AD server using the provided credentials.
3. The user is searched in AD using the **Root DN** and **User Search Pattern**.
4. The entered password is validated against Active Directory.
5. On successful authentication, WaveMaker establishes a session and optionally resolves roles/groups.

---

## Configuration Parameters

| Parameter               | Description                             | Example / Notes                                                              |
| ----------------------- | --------------------------------------- | ---------------------------------------------------------------------------- |
| **URL**                 | LDAP server URL for AD                  | `ldap://ad.mydomain.com:389`                                                 |
| **Domain**              | Active Directory domain name            | `mydomain.com` (optional; if not provided, include in username during login) |
| **Root DN**             | Base distinguished name for user search | `dc=mydomain,dc=com`                                                         |
| **User Search Pattern** | LDAP query pattern to locate users      | `(sAMAccountName={0})` (`{0}` is replaced with login username)               |
| **Test Username**       | User account for testing                | `jdoe`                                                                       |
| **Test User Password**  | Password for test account               | `Test@123`                                                                   |

---

## Example Configuration JSON

```json
{
  "url": "ldap://ad.mydomain.com:389",
  "domain": "mydomain.com",
  "rootDn": "dc=mydomain,dc=com",
  "userSearchPattern": "(sAMAccountName={0})",
  "testUsername": "jdoe",
  "testUserPassword": "Test@123"
}
```

---

## Testing the Configuration

1. Enter the **Test Username** (`jdoe`) and **Test User Password** (`Test@123`) in WaveMaker login.
2. WaveMaker connects to the AD server via LDAP on the configured URL and port.
3. Searches for the user under the **Root DN** using the **User Search Pattern**.
4. If the user exists and the password matches, login succeeds.
5. Adjust **Root DN**, **domain**, or **search pattern** if login fails.

---

## Runtime Behavior

* WaveMaker binds to AD to validate credentials.
* Searches for the user in the directory and retrieves attributes for session management.
* Optionally maps AD groups to WaveMaker roles for **role-based access control (RBAC)**.
* Security context is applied across all secured pages, services, and APIs.

---

## Best Practices

* Use **LDAPS (`ldaps://ad.mydomain.com:636`)** in production for encrypted communication.
* Ensure the test user exists and has proper permissions for binding and searching.
* Verify that the **Root DN** and **User Search Pattern** match your AD structure.
* Create separate test users to verify login and role mapping.
* Keep your AD connection settings up-to-date to avoid authentication failures.

---

## Application Configuration Properties

Whenever security is configured in WaveMaker, the platform automatically **generates configuration properties** that can be mapped to different environments such as Development, QA, or Production.  
You can view and manage these properties in the **Profiles**.  
For more information, refer to the **[Profiles](../../configurations/profiles.md)** section in the documentation.

For more details on environment-specific configurations, refer to the **[Deployment Profiles](../../configurations/profile-settings.md)** section.

<details>
<summary>Click to expand configuration properties</summary>

```properties
# Security Configuration (OPEN ID GOOGLE)

security.activeProviders=OPENID.google
security.enabled=true
security.general.client.ssl.hostNameVerification.enabled=true
security.general.cookie.base64Encode=true
security.general.cookie.jvmRoute=
security.general.cookie.maxAge=-1
security.general.cookie.path=
security.general.cookie.sameSite=
security.general.cors.allowCredentials=false
security.general.cors.enabled=false
security.general.cors.maxAge=1600
security.general.cors.pathEntries.root.allowedOrigins=*
security.general.csp.enabled=false
security.general.csp.policy=
security.general.frameOptions.allowFromUrl=
security.general.frameOptions.enabled=true
security.general.frameOptions.mode=SAMEORIGIN
security.general.login.maxSessionsAllowed=-1
security.general.mtls.enabled=false
security.general.mtls.keystore.file=
security.general.mtls.keystore.fileType=
security.general.mtls.keystore.password=
security.general.rememberMe.enabled=false
security.general.rememberMe.timeOut=1296000
security.general.request.allowedHosts=
security.general.session.timeout=30
security.general.ssl.enabled=false
security.general.ssl.port=443
security.general.tokenService.enabled=true
security.general.tokenService.parameter=WM_AUTH_TOKEN
security.general.tokenService.tokenValiditySeconds=1800
security.general.truststore.config=SYSTEM_ONLY
security.general.truststore.file=
security.general.truststore.fileType=
security.general.truststore.password=
security.general.xsrf.enabled=true
security.general.xss.dataBackwardCompatibility=false
security.general.xss.enabled=true
security.general.xss.sanitizationLayer=OUTPUT
security.providers.openId.google.authorizationUrl=https://accounts.google.com/o/oauth2/v2/auth
security.providers.openId.google.clientId=***.apps.googleusercontent.com
security.providers.openId.google.clientSecret=***
security.providers.openId.google.jwkSetUrl=https://www.googleapis.com/oauth2/v3/certs
security.providers.openId.google.logoutUrl=
security.providers.openId.google.roleMappingEnabled=true
security.providers.openId.google.roleProvider=OPENID
security.providers.openId.google.scopes=openid,email,profile
security.providers.openId.google.tokenUrl=https://oauth2.googleapis.com/token
security.providers.openId.google.userInfoUrl=https://openidconnect.googleapis.com/v1/userinfo
security.providers.openId.google.userNameAttributeName=email
security.session.persistence.type=in-memory


```
</details>



---


## Summary

Active Directory integration in WaveMaker provides enterprise-grade authentication using existing AD credentials.
By connecting via **LDAP**, WaveMaker securely validates users, optionally resolves roles, and enforces authorization across the application.
