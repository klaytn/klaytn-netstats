Klaytn Network Stats
============

This is a visual interface for tracking Klaytn network status.
It uses WebSockets to receive stats from running nodes and output them through an angular interface.
This repo is forked from [eth-netstats](https://github.com/cubedro/eth-netstats) (see [LICENSE](/LICENSE)).
It is backed by the back-end implementation in [klaytn-api](/klaytn-api)
which is copied from [eth-net-intelligence-api](https://github.com/cubedro/eth-net-intelligence-api) (see [LICENSE](/klaytn-api/LICENSE)).

![Screenshot](https://raw.githubusercontent.com/klaytn/klaytn-netstats/master/src/images/screenshot.jpg?v=0.0.6 "Screenshot")

## Prerequisite
* node
* npm

## Installation
Make sure you have node.js and npm installed.

Clone the repository and install the dependencies

```bash
git clone https://github.com/klaytn/klaytn-netstats
cd klaytn-netstats
npm install
sudo npm install -g grunt-cli
```

## Build the resources
NetStats features two versions: the full version and the lite version. In order to build the static files you have to run grunt tasks which will generate dist or dist-lite directories containing the js and css files, fonts and images.

To build the full version run
```bash
grunt
```

To build the lite version run
```bash
grunt lite
```

If you want to build both versions run
```bash
grunt all
```

## Run

```bash
npm start
```

navigate to `http://localhost:3000` in your browser.
