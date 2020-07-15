FROM node:lts
WORKDIR /app
# COPY package.json yarn.lock ./
COPY package.json ./
RUN yarn
ADD . .
