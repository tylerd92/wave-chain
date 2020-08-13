# wave-chain

A look into how a Bitcoin like blockchain works

Clone project
npm install

Start blockchain in a one terminal window
npm run dev

When you run the code the web server starts on port 3001 and the
web socket server starts at 5001

To create a new connection you must increment the port number up by one

Open another terminal and type
HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev

Create a transaction
Make a post request to localhost:{webserver_port}/transact

In the body create a JSON object
{
"recipient": {public_key},
"amount": {amount_to_send}
}

A wallet starts with 500 coins

Mine a new block and add block to blockchain

get request: localhost:{webserver_port}/mine-transactions

Get balance of wallet
get request localhost:{webserver_port}/balance
