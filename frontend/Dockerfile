FROM node:alpine

WORKDIR /usr/src/frontend

RUN mkdir -p node_modules/.cache && chown -R node:node /usr/src/frontend/node_modules/

COPY package*.json ./

RUN npm config set unsafe-perm true

RUN npm install

COPY . .

EXPOSE 8080

USER node

CMD ["npm", "run", "serve"]