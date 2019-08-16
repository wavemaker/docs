---
title: "Active Directory - Use Cases"
id: ""
---

**Directory** Domain Services is Microsoft’s Directory Server. It provides authentication and authorization mechanisms as well as a framework within which other related services can be deployed (AD Certificate Services, AD Federated Services, etc). It is an LDAP compliant database that contains objects.

WaveMaker, you can set [as security service provider](/learn/app-development/app-security/authentication/#ad) and configure the details. There are few scenarios which need special configurations:

1. [alternate UPN suffix](#multipleUPN),
2. [sAMAccountName](#sAMAccountName),
3. [certain domain name suffix](#domainname)

**1**: Support for **UPN suffix** in an AD domain.

the Windows operating system's Active Directory, a [Principal Name](https://msdn.microsoft.com/en-us/library/ms677605(v=vs.85).aspx) (UPN) is the name of a system user in an e-mail address format. The user name (or "username") is followed by the "at sign (@)" and the name of the Internet domain with which the user is associated. In cases where there are multiple child domains within a parent domain, the parent domain name gets suffixed to the child domain, thus making the UPN suffix too lengthy and difficult to handle. To get over this situation, alternate UPN suffix is created and the user uses this to login.

configuring for these situations, you need to:

1. entry _,_
2. the **DN** following the placeholder convention "_\=example,dc=com_",
3. **Username** in the suffix email style i.e. _with the @domain.com_

[![](../assets/AD_case1-1.png)](../assets/AD_case1-1.png) **2**: Support for user search using sAMAccountName.

[](https://msdn.microsoft.com/en-us/library/ms677605(v=vs.85).aspx#sAMAccountName)attribute is the User Logon Name used to support clients and servers from the previous version of Windows, such as Windows NT 4.0, Windows 95, Windows 98, and LAN Manager. Both userPrincipalName and sAMAccountName can be used to login to AD.

default, WaveMaker sets the Active Directory user search to be based upon the userPrincipalName. In order to set the search based upon the sAMAccountName you need to:

1. entry _,_
2. the **Search Pattern** as: `(&(objectClass=user)(sAMAccountName={0}))`

[![](../assets/AD_case2-1.png)](../assets/AD_case2-1.png) **3**: Support for users with certain domain name suffix

order to allow access to users of a particular domain you need to:

- the **Search Pattern** as `(&(objectClass=user)(userPrincipalName={0}@yourdomain.com))` ( [about search filter](https://msdn.microsoft.com/en-us/library/aa746475(v=vs.85).aspx))

You can allow multiple domains by appending to the User Search Pattern: `(&(objectClass=user)(|(userPrincipalName={0}@yourdomain.com)(userPrincipalName={0}@anotherdomain.com)))`

[![](../assets/AD_case3-1.png)](../assets/AD_case3-1.png)
