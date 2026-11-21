FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS production
ENV NODE_ENV=production CALLS_PORT=4003 QUEUE_URL=http://queue:4002
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./
COPY services/shared ./services/shared
COPY services/calls ./services/calls
USER node
EXPOSE 4003
CMD ["node", "services/calls/src/server.js"]
