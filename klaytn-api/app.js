'use strict';

var nodeModel = require('./lib/node');
var devp2p = require('devp2p');
var request = require('request');

const PRIVATE_KEY = 'd772e3d6a001a38064dd23964dd2836239fa0e6cec8b28972a87460a17210fe9'
const bootstrapNodes = [
    {ip: '52.194.200.217', port: 32323},
    /*{ip: '52.78.22.32', port: 32323},
    {ip: '18.136.251.28', port: 32323},*/
];
const BOOTNODES = bootstrapNodes.map((node) => {
    return {
	address: node.ip,
	udpPort: node.port,
	tcpPort: node.port,
    }
});

const dpt = new devp2p.DPT(Buffer.from(PRIVATE_KEY, 'hex'), {
    endpoint: {
	address: '0.0.0.0',
	udpPort: null,
	tcpPort: null,
    },
});

var nodeList = {};
var nodeCount = 0;
dpt.on('peer:added', (peer) => {
    if (peer.address in nodeList) {
	return
    }
    checkRPC(peer.address, (addr) => {
	nodeList[addr] = new nodeModel(addr, '8551');
	nodeCount++;
	console.log("peer added: ", addr);
    });
})
dpt.on('peer:removed', (peer) => {
    if (peer.address in nodeList) {
        nodeList[peer.address].stop();
	delete nodeList[peer.address];
    }
})

function checkRPC(address, cb) {
    let headers = {
	'Content-Type': 'application/json'
    };

    let dataString = '{"jsonrpc":"2.0","method":"rpc_modules","params":[],"id":1}';

    let options = {
	url: 'http://' + address + ':8551',
	method: 'POST',
	headers: headers,
	body: dataString,
	timeout: 2000
    };

    function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
	    //console.log(body);
	    cb(address);
	}
    }

    request(options, callback);
}

for (const bootnode of BOOTNODES) {
    dpt.bootstrap(bootnode).catch((err) => console.error(chalk.bold.red(err.stack || err)))
}

var gracefulShutdown = function() {
	console.log('');
    console.error("xxx", "sys", "Received kill signal, shutting down gracefully.");

    node.stop();
    console.info("xxx", "sys", "Closed node watcher");

    setTimeout(function(){
        console.info("xxx", "sys", "Closed out remaining connections.");
        process.exit(0);
    }, 1000);
}

// listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);

// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown);

// listen for shutdown signal from pm2
process.on('message', function(msg) {
	if (msg == 'shutdown')
		gracefulShutdown();
});

