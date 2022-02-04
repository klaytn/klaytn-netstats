Klaytn Network Intelligence API
============

This is the backend service which runs along with Klaytn and tracks the network status,
fetches information through JSON-RPC and connects through WebSockets to [klaytn-netstats](https://github.com/klaytn/klaytn-netstats) to feed information.

## Configuration

Configure the app modifying [app.json](/klaytn-api/app.json).

```json
	{
		"NODE_ENV"        : "production", // tell the client we're in production environment
		"RPC_HOST"        : "http://localhost", // Klaytn JSON-RPC host
		"RPC_PORT"        : "8545", // Klaytn JSON-RPC port
		"LISTENING_PORT"  : "30303", // Klaytn listening port (only used for display)
		"INSTANCE_NAME"   : "", // whatever you wish to name your node
		"CONTACT_DETAILS" : "", // add your contact details here if you wish (email/skype)
		"WS_SERVER"       : "http://localhost:3000", // path to klaytn-netstats WebSockets api server
		"WS_SECRET"       : "mysecret" // WebSockets api server secret used for login
		"VERBOSITY"       : 2 // Set the verbosity (0 = silent, 1 = error, warn, 2 = error, warn, info, success, 3 = all logs)
	}
```
