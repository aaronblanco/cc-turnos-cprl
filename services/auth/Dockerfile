FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev

FROM node:20-alpine AS production
ENV NODE_ENV=production AUTH_PORT=4001
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY package*.json ./
COPY services/shared ./services/shared
COPY services/auth ./services/auth
USER node
EXPOSE 4001
CMD ["node", "services/auth/src/server.js"]
