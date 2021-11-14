## 以Java 11 jre镜像为基础
FROM openjdk:11-jre 
VOLUME [ "/tmp" ]

## 将编译后的jar文件加入容器
ADD api-0.0.1.jar app.jar

## 入口执行的方法
ENTRYPOINT [ "java","-Djava.security.egd=file:/dev/./urandom","-jar","app.jar" ]

## 镜像维护者的信息
MAINTAINER  liuyi "794516454@qq.com"