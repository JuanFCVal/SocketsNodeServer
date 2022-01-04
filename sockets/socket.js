//Sockets messagges
const {io} = require('../index')
io.on('connection', client => {
    console.log('Cliente conectado...');
    client.on('disconnect', () => { console.log('Cliente desconectado') });
      client.on('mensaje', msg => {
        console.log('Mensaje: ', msg);
        io.emit('mensaje', {admin: "Nuevo mensaje"});
      })
  });