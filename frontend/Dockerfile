# La compilación ocurre aquí y solo el resultado estático pasa a la imagen final.
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY frontend ./frontend
RUN npm run build

FROM nginx:1.30.7-alpine AS production
COPY frontend/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/frontend/dist /usr/share/nginx/html
# Nginx mantiene puertos no privilegiados y evita ejecutar trabajadores como root.
USER nginx
EXPOSE 8080
