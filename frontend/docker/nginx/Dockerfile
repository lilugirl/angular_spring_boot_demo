## 第一阶段 构建Angular应用

## 编译这个阶段需要的是node镜像，我们以 node:16为基础
## 另外给这个阶段起一个友好的名称，叫builder，以便在第二阶段可以方便的引用第一阶段的成果
FROM node:14 as builder

## 单独复制 'package.json',在下一层安装相关依赖
COPY  package.json ./

## 把node_modules保存在单独的一层以避免以后每次构建时都重复做npm install
## 采用阿里团队提供的镜像
RUN  npm i && mkdir /ng-app && cp -R ./node_modules ./ng-app

## 指定工作目录
WORKDIR /ng-app

COPY . .

## 在生产模式下编译Angular应用
ARG env=production
RUN npm run build -- --prod --configuration $env

## 第二阶段： 设置Nginx服务器
FROM nginx:1.13.8-alpine

## 将我们的Nginx配置文件复制到镜像中 /etc/nginx/conf.d/目录
COPY ./docker/nginx/conf.d/default.conf /etc/nginx/conf.d/

## 删除默认站点
RUN rm -rf /usr/share/nginx/html/*

## 从builder阶段将编译后的文件复制到Nginx默认的站点目录 /usr/share/nginx/html
COPY --from=builder /ng-app/dist /usr/share/nginx/html

## 执行命令启动Nginx
CMD ["nginx","-g","daemon off;"]