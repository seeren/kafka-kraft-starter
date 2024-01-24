# Bundle

FROM node:21.6.0-alpine AS build

WORKDIR /apps/customer

RUN chown node:node ./

USER node

COPY package*.json ./

RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build

# Development

FROM node:21.6.0-alpine AS development

ENV NODE_ENV=development

ENV API_ENVIRONMENT=development

WORKDIR /apps/customer

USER node

COPY --from=build /apps/customer .

EXPOSE 3000
