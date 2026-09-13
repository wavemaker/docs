---
title: "Deploy using Docker Compose"
id: "deployment-using-docker-compose"
---
---

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application services. For installation of docker compose, see [docker-compose-install](https://docs.docker.com/compose/install/).

## Application Deployment using DB

WaveMaker application deployment requires DB for its operation. For example, deployment using `mysqldb`.

- Use the below Docker-compose file for deploying multi-container WaveMaker application.

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

- WaveMaker-application folder consists of Dockerfile and application code for building WaveMaker app. For Dockerfile, see [WaveMaker Dockerfile](/learn/app-development/deployment/build-with-docker), and use the Dockerfile for building WaveMaker application.

- The `nginx` folder consists of a `nginx` Dockerfile and a `conf` file for reverse proxy operations.

## nginx Dockerfile

```Dockerfile
FROM nginx:1.16
COPY ./default.conf /etc/nginx/conf.d/

```

The nginx `default.conf` file for reverse `proxy.user` can modify the `conf` file based on their requirements.

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
   underscores_in_headers on;
   proxy_ssl_server_name on;
   proxy_set_header X-Real-IP  $remote_addr;
   proxy_set_header X-SSL-Request 1;
   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
   proxy_set_header Host $host;
   proxy_set_header X-Forwarded-Proto $scheme;
   proxy_set_header X-Forwarded-Port $server_port;
}
```

- For creating multi-container WaveMaker application using above configuration, run the following command.
  
```shell
docker-compose -f docker-composefile-name up -d
```
