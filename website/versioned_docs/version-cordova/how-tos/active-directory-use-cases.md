---
title: "Active Directory - Use Cases"
id: "active-directory-use-cases"
---

**Active Directory** Domain Services is Microsoft’s Directory Server. It provides authentication and authorization mechanisms as well as a framework within which other related services can be deployed (AD Certificate Services, AD Federated Services, etc). It is an LDAP compliant database that contains objects.

In WaveMaker, you can set [AD as security service provider](/learn/app-development/app-security/authentication/#ad) and configure the details. There are few scenarios which need special configurations:

1. [using alternate UPN suffix](#multipleUPN),
2. [using sAMAccountName](#sAMAccountName),
3. [allowing certain domain name suffix](#domainname).

**Scenario 1**: Support for **alternate UPN suffix** in an AD domain.

In the Windows operating system's Active Directory, a [User Principal Name](https://msdn.microsoft.com/en-us/library/ms677605(v=vs.85).aspx) (UPN) is the name of a system user in an e-mail address format. The user name (or "username") is followed by the "at sign (@)" and the name of the Internet domain with which the user is associated. In cases where there are multiple child domains within a parent domain, the parent domain name gets suffixed to the child domain, thus making the UPN suffix too lengthy and difficult to handle. To get over this situation, alternate UPN suffix is created and the user uses this to login.

When configuring for these situations, you need to:

1. leave **Domain** entry _blank,_
2. enter the **Root DN** following the placeholder convention "_dc=example,dc=com_",
3. enter **Test Username** in the suffix email style i.e. _along with the @domain.com_

[![](/learn/assets/AD_case1-1.png)](/learn/assets/AD_case1-1.png)**Scenario 2**: Support for user search using sAMAccountName.

The [sAMAccountName](https://msdn.microsoft.com/en-us/library/ms677605(v=vs.85).aspx#sAMAccountName) attribute is the User Logon Name used to support clients and servers from the previous version of Windows, such as Windows NT 4.0, Windows 95, Windows 98, and LAN Manager. Both userPrincipalName and sAMAccountName can be used to login to AD.

By default, WaveMaker sets the Active Directory user search to be based upon the userPrincipalName. In order to set the search based upon the sAMAccountName you need to:

1. leave **Domain** entry _blank,_
2. enter the **User Search Pattern** as: `(&(objectClass=user)(sAMAccountName={0}))`

[![](/learn/assets/AD_case2-1.png)](/learn/assets/AD_case2-1.png)**Scenario 3**: Support for users with certain domain name suffix

In order to allow access to users of a particular domain you need to:

- enter the **User Search Pattern** as `(&(objectClass=user)(userPrincipalName={0}@yourdomain.com))` ([more about search filter](https://msdn.microsoft.com/en-us/library/aa746475(v=vs.85).aspx))

You can allow multiple domains by appending to the User Search Pattern: `(&(objectClass=user)(|(userPrincipalName={0}@yourdomain.com)(userPrincipalName={0}@anotherdomain.com)))`

[![](/learn/assets/AD_case3-1.png)](/learn/assets/AD_case3-1.png)
