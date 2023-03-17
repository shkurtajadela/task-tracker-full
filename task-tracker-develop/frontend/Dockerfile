#------------- initialysing core
FROM node:17-alpine
#------------- creating working directory
WORKDIR /app
#------------- installing dependencies
COPY package.json .
RUN npm install
#------------- copying project files
COPY . .
#------------- exposing ports
EXPOSE 3000
#------------- starting react app
CMD ["npm", "start"]
