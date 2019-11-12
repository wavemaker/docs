---
title: "Support for Password Encryption"
id: ""
---

This document provides overview of securing passwords of users’ when DB Based authentication provider/mechanism is used in WaveMaker applications for authenticating the users.

## Problem Statement

When configuring DB based authentication for WaveMaker applications, you are required to map the following fields from your users’ table:

- User Id
- User Name
- Password
- Role

Storing passwords in plain text format, can lead to database being compromised and the hacker to steal all the passwords and attempt malicious actions. Hence it is recommended to store the passwords in encrypted format. But if the password is encrypted in the DB, WaveMaker’s DB based authentication manager may not be able to decrypt & compare the passwords during user login as there is no out of the box support for password encryption at present.

## Pre-requisite

We are proceeding with the assumption that you have a user registration page designed for your app. For steps in creating a registration page [see here](/learn/how-tos/creating-registration-page/).

## Encryption Strategy

The first step in securing passwords is encryption of the database data in the password column. There are multiple encryption techniques that can be used for encryption such as :

- Two way Encryption - the encrypted value can be decrypted with the same encryption key.
- One way Digest - the encrypted value is scrambled to produce a digest, which can be decrypted to produce the original value back.

Though the strategy for choosing an encryption depends on its use-case, we recommend using One Way Digest for password encryption. This helps to safeguard the password even when your database is compromised as the digested password cannot be decrypted.

**Extending DB Authentication Provider**

As there is no out of the box support for password encryption, we need to extend the default DB authentication provider to encrypting the user provided password, and compare with the DB digest value as explained in the following section.

## Implementation Details

**STEP 1:** Choosing the Salt Strategy for Encryption and Storing password in bcrypt encrypted format while registration:

For generating the hash password for plain text, bcrypt generates a salt and calculates the hashed password with reference to the salt. A **salt** is random data that is used as an additional input to a one-way function that hashes a password or passphrase. The primary function of salts is to defend against dictionary attacks versus a list of password hashes and against precomputed rainbow table attacks.

In case of “Random salt” which gets generated for every plain text, the hash code of the plain text would be concatenated with the generated Random salt. This adds complexity to a single password - and for every password in a database, it is unique. To decode it, the intruder would have to compute an entire rainbow table for each password.

**Storing Encrypted password in Database:**

1. [Create a Java service](http://[supsystic-show-popup id=119]) and mention the following method. This would take the plain text as input and generates “Salt” for every plain text that is being encrypted. Dont forget to include the import statement
    
        import org.springframework.security.crypto.bcrypt.BCrypt;
    
        public static String hashPassword(String password\_plaintext) {
            String salt = BCrypt.gensalt();
            logger.debug("Salt generated " + salt);
            String hashed\_password = BCrypt.hashpw(password\_plaintext, salt);
            return hashed\_password;
        }
    
2. [Create a variable](/learn/assets/var_sel.png) for the above Java service and bind the input parameter of the Java service variable to the _password text widget >> datavalue_ of the registration form.
3. For the DB CRUD Variable that inserts the registration details into database, bind the password field to the output of the Java Service Variable.
4. On Submit event of the form, trigger the Java Service Variable and on onSuccess event of this variable, trigger the DB CRUD variable. This would insert the registered user details into database with encrypted password.

**STEP 2: **Configuring Authentication Manager

We need to override the default _daoauthenticationprovider_ bean by including the Password encoder property.

1. Open “_project-user-spring.xml_” file and include the following snippets as per the screenshot.
    
    <beans xmlns="http://www.springframework.org/schema/beans"
    		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    		xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd">
        <bean class="org.springframework.security.authentication.dao.DaoAuthenticationProvider" id="databaseAuthenticationProvider">
            <property name="userDetailsService" ref="jdbcDaoImpl"/>
            <property name="passwordEncoder" ref="myPasswordEncoder"/>
        </bean>
         <bean id="myPasswordEncoder" class="com.wavemaker.runtime.security.provider.database.MyPasswordEncoder"/>
    </beans>
    

[![](/learn/assets/encrypt_pwd_xml.png)](/learn/assets/encrypt_pwd_xml.png) **STEP 3: **Importing the Java file for validating the password:

1. 1. Download the  [MyPasswordEncoder](https://www.wavemaker.com../assets/BCryptPasswordEncoder-1.zip) file, extract the file and store it on your device.
    2. [Import the above _myPasswordEncoder_ Java file](http://[supsystic-show-popup id=112]) in the following path as per the below screenshot: _project/src/main/java/com/wavemaker/runtime/security/provider/database/_ **Note**: This path needs to be match with the class package provided for “class” attribute in myPasswordEncoder bean. This myPasswordEncoder class implements the PasswordEncoder and uses the _bcrypt.checkpwd()_ method to validate the plain text with the encoded password from database.
    3. Create these folders as per the path while importing the file through the import dialog.

## Limitations

This document does not cover the password encryption during the transport layer i.e when the user clicks on the Login button the browser sends the user entered password in a plaintext. As the password is sent in the body of the request (using application/x-www-form-urlencoded format), the passwords will be safe as long as the SSL communication is used.

In case you want to secure even for SSL communication, then we recommend that you encrypt the password before sending it to the backend. Here you should use the two-way encryption technique as the decrypted value must be converted to plaintext for calculating the digest value of the password for comparison.

More details about this particular feature can be found in the document located at: [http://www.wavemaker.com/learn/how-tos/creating-registration-page/](http://www.wavemaker.com/learn/how-tos/creating-registration-page/)

Contents

- [i. Problem Statement](#problem)
- [ii. Pre-requisite](#pre-req)
- [iii. Encryption Strategy](#strategy)
- [iv. Implementation Details](#implementation)
- [v. Limitations](#limitations)
