FROM node:17

RUN apt-get update && apt-get install -y git node-typescript

WORKDIR /klaytn-netstats

ADD . .

RUN npm install && \
    npm install -g grunt-cli && \
    grunt all

EXPOSE 3000
CMD ["npm", "start"]