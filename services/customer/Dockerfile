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

RUN apk add git zsh

WORKDIR /apps/customer

USER node

COPY --from=build /apps/customer .

RUN git clone https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k && \
  git clone https://github.com/zsh-users/zsh-autosuggestions ~/zsh-autosuggestions && \
  git clone https://github.com/zsh-users/zsh-syntax-highlighting ~/zsh-syntax-highlighting && \
  cat .docker/.p10k.zsh >> ~/.p10k.zsh && \
  cat .docker/.zshrc >> ~/.zshrc

EXPOSE 3000
