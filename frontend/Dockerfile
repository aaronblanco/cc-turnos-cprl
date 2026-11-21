FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY frontend ./frontend
RUN npm run build

FROM nginxinc/nginx-unprivileged:1.27-alpine AS production
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/frontend/dist /usr/share/nginx/html
EXPOSE 8080
