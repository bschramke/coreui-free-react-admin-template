# stage: 1 - the build environment
FROM node:lts as react-build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN yarn build

# stage: 2 — the production environment
FROM nginx:alpine
#COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]