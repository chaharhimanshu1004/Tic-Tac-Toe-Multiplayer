const express = require('express');
const app = express();

const { createServer } = require("http");
const { Server } = require("socket.io");


const httpServer = createServer();
const io = new Server(httpServer, {
  cors: "http://localhost:3000/",
});

io.on("connection", (socket) => {
    console.log(`socket connected:${socket.id}`);
    socket.on("disconnect", function () {
        console.log(`socket disconnected: ${socket.id}`)
    });
})

app.get('/', (req, res) => {
    res.send('<h1>server running!!</h1>');
});
  
app.listen(6001, () => {
    console.log('listening on *:6001');
});


