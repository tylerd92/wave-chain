const express = require('express');
const bodyParser = require('body-parser');
const Blockchain = require('../blockchain');

const HTTP_PORT = process.env.HTTP_PORT || 3001;

const app = express();
app.use(bodyParser.json());
const bc = new Blockchain();

app.get('/', (req, res) => {
    res.send('Welcome to Wave Blockchain');
});

app.get('/blocks', (req, res) => {
    res.json(bc.chain);
});

app.post('/mine', (req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log(`New block added: ${block.toString()}`);

    res.redirect('/blocks') // redirects to blocks route
});

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));