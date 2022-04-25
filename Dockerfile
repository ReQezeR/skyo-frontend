FROM node:16.13.1 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/skyo-frontend /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/sites-available/default
ENV API_URL="#"
EXPOSE 80