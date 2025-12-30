---
title: "Support for Password Encryption"
last_update:
  author: "Author Name"
---

This document provides an overview of securing passwords of users when DB Based authentication provider/mechanism is used in WaveMaker applications for authenticating the users.

## Problem Statement

When configuring DB based authentication for WaveMaker applications, you are required to map the following fields from your users’ table:
- User Id
- User Name
- Password
- Role

Storing passwords in plain text format can lead to the database being compromised and the hacker to steal all the passwords and attempt malicious actions. Hence it is recommended to store the passwords in encrypted format. If the password is encrypted in the DB, WaveMaker’s DB based authentication manager may not be able to decrypt & compare the passwords during user login as there is no out of the box support for password encryption at present.

## Pre-requisite

We are proceeding with the assumption that you have a user registration page designed for your app. For steps in creating a registration page, see Creating Registration Page.

## Encryption Strategy

The first step in securing passwords is encryption of the database data in the password column. There are multiple encryption techniques that can be used for encryption such as:
- Two way Encryption - the encrypted value can be decrypted with the same encryption key.
- One way Digest - the encrypted value is scrambled to produce a digest, which cannot be decrypted to produce the original value back.

Though the strategy for choosing an encryption depends on its use-case, we recommend using One Way Digest for password encryption. This helps to safeguard the password even when your database is compromised as the digested password cannot be decrypted.

### Extending DB Authentication Provider

As there is no out of the box support for password encryption, we need to extend the default DB authentication provider to encrypt the user provided password, and compare with the DB digest value as explained in the following section.

## Implementation Details

Choosing the Salt Strategy for Encryption and storing password in bcrypt encrypted format while registration.

For generating the hash password for plain text, bcrypt generates a salt and calculates the hashed password with reference to the salt. A **salt** is random data that is used as an additional input to a one-way function that hashes a password or passphrase.

### STEP-1: Storing Encrypted password in Database

- Create a Java service and mention the following method. This would take the plain text as input and generates “Salt” for every plain text that is being encrypted.

```java
import org.springframework.security.crypto.bcrypt.BCrypt;

public String hashPassword(String password_plaintext) {
    String salt = BCrypt.gensalt();
    logger.debug("Salt generated " + salt);
    String hashed_password = BCrypt.hashpw(password_plaintext, salt);
    return hashed_password;
}
```

- Create a variable for the above Java service and bind the input parameter of the Java service variable to the `password` field of the registration form.
- For the DB CRUD Variable that inserts the registration details into database, bind the password field to the output of the Java Service Variable.
- On Submit event of the form, trigger the Java Service Variable and on onSuccess event of this variable, trigger the DB CRUD variable. This would insert the registered user details into database with encrypted password.

### STEP-2: Configuring Authentication Manager

We need to override the default `daoauthenticationprovider` bean by including the Password encoder property.

- Open `project-user-spring.xml` file and include the following snippets as per the screenshot.

(See encrypt_pwd_xml.png)

### STEP-3: Importing the Java File for Validating Password

Download the MyPasswordEncoder zip file and import the `myPasswordEncoder` Java file into `project/src/main/java/com/wavemaker/runtime/security/provider/database/`.

:::note
This path needs to match with the class package provided for the `class` attribute in `myPasswordEncoder` bean. This `myPasswordEncoder` class implements the PasswordEncoder and uses the `bcrypt.checkpwd()` method to validate the plain text with the encoded password from database.
:::

## Limitations

This document does not cover the password encryption during the transport layer i.e when the user clicks on the Login button the browser sends the user entered password in a plaintext. As the password is sent in the body of the request (using application/x-www-form-urlencoded format), the passwords will be safe as long as the SSL communication is used.

In case you want to secure even for SSL communication, then we recommend that you encrypt the password before sending it to the backend. Here you should use a two-way encryption technique as the decrypted value must be converted to plaintext for calculating the digest value of the password for comparison.

## See Also
- Creating Registration Page
- Java Services
- Create Variable
- 3rd Party Libraries
