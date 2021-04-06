FROM node:lts-alpine

RUN mkdir -p /home/node/server && chown -R node:node /home/node/server

WORKDIR /home/node/server

RUN mkdir -p node_modules && chown -R node:node node_modules

COPY --chown=node:node package* ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE ${container_port}

CMD ["npm", "start"]