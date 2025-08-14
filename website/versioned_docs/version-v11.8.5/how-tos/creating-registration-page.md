---
title: "Creating a Registration Page"
id: "creating-registration-page"
---
---

Registration is a common process in web applications and many apps have the facility to self-register and then allow registered users to login. Logging to app requires [security setup](/learn/app-development/app-security/app-security). 

Learn how to create a registration page in WaveMaker Studio. In this section, see:

1. How to design a registration page.
2. How to link the registration page to the inbuilt security and login page.
3. Add security encryption to password field using a [Java Service](/learn/app-development/services/java-services/java-service).
4. [Add user database](/learn/app-development/services/database-services/working-with-databases/) - this should contain the details of the users, their usernames, password, and more. 

[![](/learn/assets/registration_database.png)](/learn/assets/registration_database.png)

## Designing a Registration Page 

Create a **partial page** to allow a new user to enter details. Live Form allows user to enter their details, including inserting the records into a database table. 

Drag and drop a Live Form widget, use the **Database CRUD** from the `UserDB` service and the `UserDetails` table and set the properties, as per your app requirements. We have used the following settings:

- Two column layout with first name, last name and email id in the first column; username, password, and role in the second column.
- Set `First Name`, `Username`, and `Email ID` as **Required** fields. 
- For `Email ID`, set input Type to `email`. This will auto validate the field entry to be in the email format with an `@` symbol. 

[![](/learn/assets/registration_email_validation.png)](/learn/assets/registration_email_validation.png)

- Add a text widget for confirm password field.
- Set `default value` for Role field to 'User' and set it as hidden. 
    
[![](/learn/assets/registration_regpage.png)](/learn/assets/registration_regpage.png)

A Variable with `source` as the User table is created which will perform the insert into the database automatically. 

[![](/learn/assets/registration_var_source.png)](/learn/assets/registration_var_source.png)

In case of any process before insertion, you can do it from the Form `on Before Service Call` event. You can add any other validation checks here. For example, in this script we are ensuring the the `password` entries match. The appropriate message is loaded into the `Notification Action` and is invoked. 

:::note
We have already created a `Notification Action` that needs to be created.
:::

```    
Partial.UserDetailsLiveForm1Beforeservicecall = function($event, $operation, $data, options) {
    if ($data.password != $data.confirm_password) {
        Partial.Actions.password_error.invoke({
            "message": "Password Mismatch, try again",
            "position": "center center"
        });
        return false;
    }
};
```    
[![](/learn/assets/registration_validation.png)](/learn/assets/registration_validation.png)

## Enable Security

Enable [Security](/learn/app-development/app-security/app-security) and set the `Security Provider` to be the UserDB from step 1 

[![](/learn/assets/registration_security.png)](/learn/assets/registration_security.png)

Set the permissions level for `registration page`, and `userdb` to `permit all`. This is essential since we want the new users to be able to access to the registration page and add their details to the database. 

[![](/learn/assets/registration_security_permission1.png)](/learn/assets/registration_security_permission1.png) 

[![](/learn/assets/registration_security_permission2.png)](/learn/assets/registration_security_permission2.png)

## Redesign login page
- Open the Login page by selecting it from the **Pages** Resources
- Add a _pagedialog_ widget, with content as the registration partial page. 

[![](/learn/assets/registration_dialog.png)](/learn/assets/registration_dialog.png)

- Go back to the `login page` (select the Page tab from the bottom).
- Add **New User button**, `onClick` event should open the registration page dialog. 

[![](/learn/assets/registration_login_button.png)](/learn/assets/registration_login_button.png)

- Now when you run the application, you see the **New User** button on the **`login`** page. 

[![registration_run_login](/learn/assets/registration_run_login.png)](/learn/assets/registration_run_login.png)

- Clicking on it will take you to the `New Registration` page. 

[![](/learn/assets/registration_run_reg.png)](/learn/assets/registration_run_reg.png)

- Clicking on the **Register** button without entering the `user name` or with `passwords` not matching in the two fields, will display an `error message`.
- Entering all required data and clicking **Save** button, displays a `success message`.

Now you can **login** with the new credentials.

## Password Encryption

To ensure that the password field is secure, it is advisable to store it in an encrypted format. For this, we will use an md5 code to encrypt the password entry before passing it onto the live variable for insert into the database table.

:::note
This method is useful for enforcing two-way encryption, that is, in addition to the SSL communication, you can encrypt the password before sending it to the backend. In case you want to use the one-way digest method of scrambling the encrypted value to produce a digest we suggest you follow the steps given in [this document](/learn/how-tos/support-password-encryption/).
:::

- [Create a Java Service](/learn/app-development/services/java-services/java-service/) called MD5 Encryption.
- Add the following to the Java Service code. Here we are using an MD5 hashing algorithm to generate a checksum for the password field, refer here for more [details](http://www.mkyong.com/java/java-md5-hashing-example/). Ensure that the length of the password column in the database is greater than the length of the result from the encryption algorithm used, in this case, it should be greater than 32. 

### Imported files

```java 
import org.apache.commons.codec.digest.DigestUtils;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
```
### Encrypt password 

Use the following method to encrypt the password:
```java  
public String md5Spring(String text) {
        String digest = null;
    try {
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] hash = md.digest(text.getBytes("UTF-8"));
        StringBuilder sb = new StringBuilder(2 * hash.length);
        for (byte b: hash) {
            sb.append(String.format("%02x", b & 0xff));
        }
        digest = sb.toString();
    } catch (UnsupportedEncodingException ex) {
        //Logger.getLogger(StringReplace.class.getName()).log(Level.SEVERE, null, ex);
    } catch (NoSuchAlgorithmException ex) {
        // Logger.getLogger(StringReplace.class.getName()).log(Level.SEVERE, null, ex);
    }
    return digest;

}
```    
- [Create a variable](/learn/assets/var_sel.png) to invoke the Java Service created above 

[![](/learn/assets/registration_javaservice_var.png)](/learn/assets/registration_javaservice_var.png) 

- Set the input data to the password widget of the registration page. 

[![](/learn/assets/registration_javaservice_data.png)](/learn/assets/registration_javaservice_data.png)

- The Password field needs to be replaced with the encrypted one returned from the above Java service. For this, we will be using the `Before Service Call` event of the Live Form, we are invoking the Java service variable and setting the password field to the value returned from the Java Service.

```js    
Partial.UserDetailsLiveForm1Beforeservicecall = function($event, $operation, $data, options) {
    if ($data.password != $data.confirm_password) {
        Partial.Actions.password_error.invoke({
            "message": "Password Mismatch, try again",
            "position": "center center"
        });
        return false;
    } else {
        Partial.Variables.md5InsertJava.invoke();
        $data.password = Partial.Variables.md5InsertJava.dataSet.value;
    }

};
```    
:::note
Ensure that in the **Security** dialog box, the Java Service created has `PermitAll` permission level.
:::

## `loginpage` Set up

- Create a variable for the `Java Service` created, 

[![](/learn/assets/registration_javaservice_login.png)](/learn/assets/registration_javaservice_login.png)

- Bind the `input data` to the `password` widget on the login page, 

[![](/learn/assets/registration_javaservice_login_bind.png)](/learn/assets/registration_javaservice_login_bind.png)

- Next, set the `LoginAction` data to the value returned by the above service variable. 

[![](/learn/assets/registration_javaservice_loginvar.png)](/learn/assets/registration_javaservice_loginvar.png)

- Set the `onClick` event of the **Sign In** to `loginAction`. This will ensure that when any user logs in, the password is encrypted before checking it against the database by the login variable. 

[![](/learn/assets/registration_javaservice_loginbutton.png)](/learn/assets/registration_javaservice_loginbutton.png)

Your application will work as before. The only change would be the values stored in the database, now the password field will be encrypted. 

[![registration_javaservice_db](/learn/assets/registration_javaservice_db.png)](/learn/assets/registration_javaservice_db.png)
