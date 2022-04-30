FROM node:18-alpine3.14 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as client-dev
COPY --from=build /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
COPY docker-entrypoint.sh /
ENTRYPOINT ["sh","/docker-entrypoint.sh"]
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
