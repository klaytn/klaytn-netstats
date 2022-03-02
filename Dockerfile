FROM node:17

RUN apt-get update && apt-get install -y git
RUN git clone -b discover-nodes https://github.com/klaytn/klaytn-netstats.git && cd klaytn-netstats && git submodule update --init

WORKDIR /klaytn-netstats
RUN npm install && npm install -g grunt-cli && grunt all

WORKDIR /klaytn-netstats/klaytn-api/lib/klaytnjs-monorepo/packages/devp2p
RUN npm run build

WORKDIR /klaytn-netstats/klaytn-api
RUN npm install && npm install -g pm2
