FROM node:18.16-alpine

RUN apk add zsh

WORKDIR /apps/microservice-b

COPY package*.json ./

RUN npm ci

COPY --chown=node:node . .

RUN npm run build

EXPOSE 3000
