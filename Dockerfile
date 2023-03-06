# NODE
FROM node:16.19-alpine as build
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# NGINX
FROM nginx:alpine
COPY --from=build /app/dist/angular-examples /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80