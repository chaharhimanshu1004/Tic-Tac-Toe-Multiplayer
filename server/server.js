const express = require('express');
const app = express();
const http = require('http');
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
    console.log(`socket connected: ${socket.id}`);
    socket.on("disconnect", function () {
        console.log(`socket disconnected: ${socket.id}`)
    });
});

app.get('/', (req, res) => {
    res.send('<h1>server running!!</h1>');
});

server.listen(6001, () => {
    console.log('Server listening on *:6001');
});