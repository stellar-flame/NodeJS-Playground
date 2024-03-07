FROM node:21
WORKDIR /Users/hava/source
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
