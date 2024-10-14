const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'client')));

io.on('connection', (socket) => {
    console.log('New player connected');

    socket.on('disconnect', () => {
        console.log('Player disconnected');
    });

    // Other game-related events and interactions will go here
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
