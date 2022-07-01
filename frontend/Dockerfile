FROM node:16

WORKDIR /app

COPY package.json ./
RUN chmod -R 777 /app

RUN apt-get update && apt-get install ssh -y

RUN npm install

COPY ./ ./
EXPOSE 3000

# ENV NODE_OPTIONS --openssl-legacy-provider

# CMD ["npm", "run", "start"]