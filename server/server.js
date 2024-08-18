const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require('cors');

let io;

if (!server.io) {
    io = new Server(server, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
      }
    });
    server.io = io;
    io.on('connection', (socket) => {
        console.log(`Socket connected: ${socket.id}`);
        socket.on('disconnect', () => {
            console.log(`Socket disconnected: ${socket.id}`);
            socket.broadcast.emit('user-disconnected', socket.id);
        });
    })
} else {
    io = server.io;
    console.log('Socket already running');
}

app.get('/', (req, res) => {
    res.send('<h1>server running!!</h1>');
});
  
server.listen(6001, () => {
    console.log('listening on *:6001');
});


