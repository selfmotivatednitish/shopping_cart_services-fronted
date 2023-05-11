FROM node:latest as node

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]