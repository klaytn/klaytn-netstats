FROM node:17

RUN apt-get update && apt-get install -y git node-typescript
RUN git clone -b discover-nodes https://github.com/klaytn/klaytn-netstats.git && cd klaytn-netstats && git submodule update --init

WORKDIR /klaytn-netstats
RUN npm install && npm install -g grunt-cli && grunt all

# TODO: packages/utils has problem related to 'Buffer' which is a type used in node.
# I don't know exactly how, but below two lines solved the issue.
WORKDIR /klaytn-netstats/klaytn-api/lib/klaytnjs-monorepo/packages/utils
RUN npm i -g typescript@next && npm i --save-dev @types/node && npm install

WORKDIR /klaytn-netstats/klaytn-api/lib/klaytnjs-monorepo/packages/devp2p
RUN npm run build

WORKDIR /klaytn-netstats/klaytn-api
RUN npm install && npm install -g pm2
