FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

RUN npm install pm2 -g

COPY ./dist ./

EXPOSE 4005

CMD ["pm2-runtime","server.js"]