
FROM node:10

ENV SRC_DIR trustminer-frontend

WORKDIR /usr/src/app

COPY $SRC_DIR/package*.json ./

RUN npm ci

COPY $SRC_DIR .

EXPOSE 3000

RUN npm run build
