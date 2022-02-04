FROM node:17

RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/klaytn/klaytn-netstats.git

WORKDIR /klaytn-netstats
RUN npm install && npm install -g grunt-cli && grunt all

WORKDIR /klaytn-netstats/klaytn-api
RUN npm install && npm install -g pm2
