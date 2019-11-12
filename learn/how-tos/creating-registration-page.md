---
title: "Creating a Registration Page"
id: ""
---

[Adding security and login pages](http://[supsystic-show-popup id=111]) to your application is a good idea and simple one at that. **Registration** is another story. Registration is a common process in web applications. Many applications have the facility to self-register and then allow registered users to login to the applications. The link to registration page is provided on the login page. In this post we will see how to create this registration page using WaveMaker Studio. In this section you will see

1. How to [design a registration page](#design),
2. How to link the registration to the [inbuilt security and login page](#login), and
3. Add [security encryption](#encryption) to password field using Java service

1. [Add user database](/learn/app-development/services/database-services/working-with-databases/) - this should contain the details of the users, their usernames, password etc. [![](/learn/assets/registration_database.png)](/learn/assets/registration_database.png)
2. Design the registration page - create a **partial page** to allow a new user enter his/her details. Live Form will allow user to enter their details and insert the details to the database table. Drag and drop a Live Form widget, use the Database CRUD from the UserDB service and the UserDetails table and set the properties, as per your app requirements. We have used the following settings:
    - two column layout with first name, last name and email id in the first column; username, password, and role in the second column,
    - set First Name, and Username as Required fields,
    - Email Id is also set as Required and in addition, the Input Type is set as email. This will auto validate the field entry to be in the email format with @ symbol [![](/learn/assets/registration_email_validation.png)](/learn/assets/registration_email_validation.png)
    - add a text widget for confirm password field,
    - set default value for Role field to 'User' and set it as hidden. [![](/learn/assets/registration_regpage.png)](/learn/assets/registration_regpage.png)
3. A Variable with _source_ as the User table is created which will perform the insert into the database automatically. [![](/learn/assets/registration_var_source.png)](/learn/assets/registration_var_source.png)
4. In case of any processing that needs to be done before insertion, it can be done from the Form on Before Service Call event. You can add any other validation checks here. For example, in this script we are ensuring the the _password_ entries match. The appropriate message is loaded into the _Notification Action_ and is invoked. NOTE: We have already created a the Notification Action needs to be created.
    
        Partial.UserDetailsLiveForm1Beforeservicecall = function($event, $operation, $data, options) {
            if ($data.password != $data.confirm\_password) {
                Partial.Actions.password\_error.invoke({
                    "message": "Password Mismatch, try again",
                    "position": "center center"
                });
                return false;
            }
        };
    
    [![](/learn/assets/registration_validation.png)](/learn/assets/registration_validation.png)
5. Enable [Security](http://[supsystic-show-popup id=111]) and set the _Security Provider_ to be the UserDB from step 1 [![](/learn/assets/registration_security.png)](/learn/assets/registration_security.png) Set the permissions level for _registration page_, and _userdb_ to _permit all_. This is essential since we want the new users to be able to access to the registration page and add their details to the database. [![](/learn/assets/registration_security_permission1.png)](/learn/assets/registration_security_permission1.png) [![](/learn/assets/registration_security_permission2.png)](/learn/assets/registration_security_permission2.png)
6. Redesign login page:
    - Open the Login page by selecting it from the **Pages** Resources
    - Add a _pagedialog_ widget, with content as the registration partial page. [![](/learn/assets/registration_dialog.png)](/learn/assets/registration_dialog.png)
    - Go back to the _login page, (_select the Page tab from the bottom)
    - Add **New User button**, _onClick_ event should open the registration page dialog. [![](/learn/assets/registration_login_button.png)](/learn/assets/registration_login_button.png)
7. Now when you run the application, you see the **New User** button on the _login_ page. [![registration_run_login](/learn/assets/registration_run_login.png)](/learn/assets/registration_run_login.png)
8. Clicking on it will take you to the _New Registration_ page. [![](/learn/assets/registration_run_reg.png)](/learn/assets/registration_run_reg.png)
9. Clicking on the **Register** button without entering the _user name_ or with _passwords_ not matching in the two fields, will display the _error message_.
10. Entering all required data and clicking **Save **button, displays the _success message_.
11. Now you can **login** with the new credentials.

## Password Encryption

To ensure that the password field is secure, it is advisable to store it in an encrypted format. For this, we will use an md5 code to encrypt the password entry before passing it onto the live variable for insert into the database table.

NOTE: This method is useful for enforcing two-way encryption, i.e. in addition to the SSL communication, you can encrypt the password before sending it to the backend. In case you want to use the One-way Digest method of scrambling the encrypted value to produce a digest we suggest you follow the steps given in [this document](/learn/how-tos/support-password-encryption/).

1. [Create a Java Service](app-development/services/java-services/java-service/) called MD5Encryption.
2. Add the following to the Java Service code. Here we are using an MD5 hashing algorithm to generate a checksum for the password field, refer here for more [details](http://www.mkyong.com/java/java-md5-hashing-example/). Ensure that the length of the password column in the database is greater than the length of the result from the encryption algorithm used, in this case, it should be greater than 32. Import the following files:
    
    import org.apache.commons.codec.digest.DigestUtils;
    import java.io.UnsupportedEncodingException;
    import java.security.MessageDigest;
    import java.security.NoSuchAlgorithmException;
    import java.util.logging.Level;
    
    Use the following method to encrypt the password:
    
        public String md5Spring(String text) {
             String digest = null;
            try {
                MessageDigest md = MessageDigest.getInstance("MD5");
                byte\[\] hash = md.digest(text.getBytes("UTF-8"));
                StringBuilder sb = new StringBuilder(2 \* hash.length);
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
    
3. [Create a variable](/learn/assets/var_sel.png) to invoke the Java Service created above [![](/learn/assets/registration_javaservice_var.png)](/learn/assets/registration_javaservice_var.png) and set the input data to the password widget of the registration page. [![](/learn/assets/registration_javaservice_data.png)](/learn/assets/registration_javaservice_data.png)
4. The Password field needs to be replaced with the encrypted one returned from the above Java service. For this, we will be using the _on Before Service Call_ event of the Live Form, we are invoking the Java service variable and setting the password field to the value returned from the Java Service.
    
        Partial.UserDetailsLiveForm1Beforeservicecall = function($event, $operation, $data, options) {
            if ($data.password != $data.confirm\_password) {
                Partial.Actions.password\_error.invoke({
                    "message": "Password Mismatch, try again",
                    "position": "center center"
                });
                return false;
            } else {
                Partial.Variables.md5InsertJava.invoke();
                $data.password = Partial.Variables.md5InsertJava.dataSet.value;
            }
    
        };
    
5. Ensure that in the **Security** dialog box, the Java Service created has _PermitAll_ permission level.
6. On your _loginpage_
    1. create a variable for the _Java Service_ created, [![](/learn/assets/registration_javaservice_login.png)](/learn/assets/registration_javaservice_login.png)
    2. bind the _input data_ to the _password_ widget on the login page, [![](/learn/assets/registration_javaservice_login_bind.png)](/learn/assets/registration_javaservice_login_bind.png)
    3. Next, set the _LoginAction_ data to the value returned by the above service variable. [![](/learn/assets/registration_javaservice_loginvar.png)](/learn/assets/registration_javaservice_loginvar.png)
    4. set the _onClick_ event of the **Sign In** to _loginAction_. This will ensure that when any user logs in, the password is encrypted before checking it against the database by the login variable. [![](/learn/assets/registration_javaservice_loginbutton.png)](/learn/assets/registration_javaservice_loginbutton.png)
7. Your application will work as before. The only change would be the values stored in the database, now the password field will be encrypted. [![registration_javaservice_db](/learn/assets/registration_javaservice_db.png)](/learn/assets/registration_javaservice_db.png)

Contents

- [i. Design a registration page](#design)
- [ii. Security and login page](#login)
- [iii. Password Encryption](#encryption)
