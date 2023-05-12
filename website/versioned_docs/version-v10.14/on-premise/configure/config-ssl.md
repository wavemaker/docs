---
title: "WaveMaker Enterprise Configure SSL for Platform"
id: "config-ssl"
sidebar_label: "Configure SSL"
---
---

Follow below steps to Configure SSL for Platform to access Studio with https.

To start this process you need 3 files.

- crt file
- private key file
- bundle file

If you have .pem file, you can extract these files from pem file.

### Upload Bundle file to LB via LB Admin Console

- Login to LB admin console `http://<Platform-Machine-IP>/local/admin`
  - user name : root
  - Take the password from lb container.
    - Login to Platform machine using ssh
    - Go to lb container and get the password

    ```bash
          docker exec -it lb bash
          cat /usr/local/content/secrets/lb/password
    ```

- Go to Configure -> Security Certificates from Left Nav
- Delete the old test keystore from Server Certificates section.
- Upload bundle file in Certification Authorities trusted by Server Section.

### Copy certificate files to LB Container

- Login into platform machine using ssh.
- Copy crt, private key file to /tmp/ of platform machine.
- Copy  crt, private key file to lb container.
  
  ```bash
    docker cp <crt-file-name> lb:/tmp/
    docker cp <private-key-file-name> lb:/tmp/
   ```

### Import certificates in LB Container

- Connect to LB Container
- Go to /usr/local/content/pserver/pserver70GA/server/nodes/lb/config and backup servercerts.
- Export private key and crt file into one certificate bundle. It prompts for passwords.
  - Your own Source password required to enter if exists.
  - Destination password is pramati.
- Import certificate bundle using key tool.
  - Enter your own source password if exists. If not enter as pramati
  - Destination password as pramati.
- Restart LB process.

```bash
    docker exec -it lb bash
    cd /usr/local/content/pserver/pserver70GA/server/nodes/lb/config
    cp -fR servercerts servercerts.bak
    cd /tmp/
    openssl pkcs12 -export -in <crt-file-name> -inkey <private-key-file-name> -out <out-file-name>.out -name <bundle-alias>
    keytool -importkeystore -srckeystore <out-file-name> -srcstoretype PKCS12 -destkeystore /usr/local/content/pserver/pserver70GA/server/nodes/lb/config/servercerts -alias <bundle-alias>
    supervisorctl restart lb
   ```

### Access Studio using https

- ```https://<DOMAIN_NAME>/```
