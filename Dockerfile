# syntax=docker/dockerfile:1

FROM node:latest
WORKDIR /server
COPY . .
RUN npm install
CMD ["node", "./server.js"]