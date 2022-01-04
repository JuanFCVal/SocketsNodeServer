
const express = require('express');
const path = require('path');
require('dotenv').config();

//express app
const app = express();

//Node server 
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//Sockets messagges
io.on('connection', client => {
  console.log('Cliente conectado...');
  client.on('disconnect', () => { console.log('Cliente desconectado') });
});



//Public path
const public = path.resolve(__dirname, 'public');
app.use(express.static(public));

server.listen(process.env.PORT, (error) => {
    (error) => {console.log('Error server')};
    console.log('Server is running on port ', process.env.PORT);
})