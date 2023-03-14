FROM node:16-alpine3.16 as build

WORKDIR /app

COPY . .

RUN npm i --legacy-peer-deps

RUN npm run build

# NGINX
FROM nginx:1.23.3-alpine as prod

COPY --from=build /app/build /usr/share/nginx/html
COPY /nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
