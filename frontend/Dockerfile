FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 443

CMD ["npm", "start"]
