Klaytn Network Stats
============

This is a visual interface for tracking Klaytn network status.
It uses WebSockets to receive stats from running nodes and output them through an angular interface.
This repo is forked from [eth-netstats](https://github.com/cubedro/eth-netstats) (see [LICENSE](/LICENSE)).
It is backed by the back-end implementation in [klaytn-api](/klaytn-api)
which is copied from [eth-net-intelligence-api](https://github.com/cubedro/eth-net-intelligence-api) (see [LICENSE](/klaytn-api/LICENSE)).

![Screenshot](https://raw.githubusercontent.com/klaytn/klaytn-netstats/master/src/images/screenshot.jpg?v=0.0.6 "Screenshot")

## Prerequisite
* Docker

## Build
Make sure you have Docker installed.

```bash
git clone https://github.com/klaytn/klaytn-netstats
cd klaytn-netstats
./1.build.sh
```

## Run
This script will run both back-end(klaytn-api) and front-end(klaytn-netstats) in a single docker container.

```bash
./2.run.sh
```

Navigate to `http://localhost:3000` in your browser.
