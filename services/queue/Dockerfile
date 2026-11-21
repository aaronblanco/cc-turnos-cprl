# Elimina herramientas y dependencias de desarrollo en la fase final.
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS production
ENV NODE_ENV=production QUEUE_PORT=4002
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./
COPY services/shared ./services/shared
COPY services/queue ./services/queue
# El usuario node debe poder escribir los datos persistidos por el servicio.
RUN mkdir -p /app/services/queue/data && chown -R node:node /app/services/queue
USER node
# Permite montar almacenamiento persistente sin usar datos dentro de una capa mutable.
VOLUME ["/app/services/queue/data"]
EXPOSE 4002
CMD ["node", "services/queue/src/server.js"]
