FROM node:8-alpine

WORKDIR /usr/src/service

COPY . .

RUN npm install

CMD npm run start