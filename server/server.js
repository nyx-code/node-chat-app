const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname , '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>{
    console.log('new user connec--ted');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'new user has joined'));
    
    socket.on('createMessage', (message, callback) => {
        console.log('Message from user', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from server');
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect',()=>{
        console.log('Disconneced');
    });
    
});


server.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
});