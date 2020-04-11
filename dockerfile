FROM node:8-alpine

WORKDIR /usr/src/service

COPY . .

CMD npm install