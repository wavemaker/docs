---
title: "Deploy using Docker Compose"
id: ""
---
---

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services.for installation of docker compose visit ([docker-compose-instll](https://docs.docker.com/compose/install/))

wavemaker application deployment required DB for its operation.for example deployment using mysqldb.

- use the below Docker-compose file for deploying mulyi-container wavemaker application.

```Docker compose
version: "3.3"
services:
   db:
      image: mysql:5.6
      environment:
         MYSQL_ROOT_PASSWORD: root_password
      volumes:
               - /wavemakerapp/mysql/:/var/lib/mysql
      networks:
         - wmo_app

   webapp:
      image: ./wavemaker-application/
      environment:
         wm.mysqlCloudHost: db:3306
         wm.mysqlCloudUsername: root
         wm.mysqlCloudPassword: root_password
      volumes:
            - /wavemakerapp/tomcat-logs:/usr/local/tomcat/logs
      networks:
          - wmo_app

   nginx:
      build:
         context: ./nginx/
      ports:
      - "80:80"
      volumes:
            - /wavemakerapp/nginx-logs:/var/log/nginx
      networks:
         - wmo_app
networks:
   wmo_app:
      driver: bridge

```

- wavemaker-application folder consists of Dockerfile and application code for build wavemaker app .for Dockerfile visit [wavemaker Dockerfile](build-with-docker.md) and use the Dockerfile for building wavemaker application.

- nginx folder consists of nginx Dockerfile and conf file for reverse proxy operations.
nginx Dockerfile

```Dockerfile
FROM nginx:1.16
COPY ./default.conf /etc/nginx/conf.d/

```

nginx default.conf file for reverse proxy.user can modify the conf file based on their requireents.

```conf
upstream webapp_wm {
   server webapp:8080;

}


server {
   listen 80;
   listen [::]:80;

   location / {
       proxy_pass http://webapp_wm;
   }

   proxy_ssl_server_name on;
   proxy_set_header X-Real-IP  $remote_addr;
   proxy_set_header X-SSL-Request 1;
   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   proxy_set_header Host $host;
   proxy_set_header X-Forwarded-Proto $scheme;
   proxy_set_header X-Forwarded-Port $server_port;
}
```

- for creating multi-container wavemaker application using above configuration run the following command.
  
```shell
docker-compose -f docker-composefile-name up -d
```
