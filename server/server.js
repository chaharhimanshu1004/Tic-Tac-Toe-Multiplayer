const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('<h1>server running!!</h1>');
});


server.listen(6001, () => {
    console.log('listening on *:6001');
});


