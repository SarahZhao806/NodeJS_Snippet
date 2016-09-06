var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(3000);
var io = require('socket.io')(server);

app.use(express.static('./public_socketIO'));

io.on('connection', function(socket) {
    
    socket.on('chat', function(chat) {
        socket.broadcast.emit('message', chat);
    });
    
    socket.emit('message', "Welcome to Cyber Chat from Socket.IO");
});

console.log('Staring Socket App - http://localhost:3000');




