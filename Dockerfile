FROM node:20-alpine

WORKDIR /data

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","index.js"]