docker run --rm -it \
	-p 3000:3000 klaytn-netstats \
	/bin/bash -c 'cd /klaytn-netstats/klaytn-api && pm2 start app.json && cd /klaytn-netstats && WS_SECRET=mysecret npm start'
