FROM node:12.22 as build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install -g nx

RUN npm install --ignore-scripts

COPY . .

RUN nx run-many --target=build-storybook --all

FROM nginx:latest as runtime-stage

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /app/dist/storybook /var/www/public
