FROM node:17

RUN apt-get update && apt-get install -y git node-typescript
RUN git clone -b main https://github.com/klaytn/klaytn-netstats.git

WORKDIR /klaytn-netstats
RUN npm install && npm install -g grunt-cli && grunt all