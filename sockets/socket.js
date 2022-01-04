//Sockets messagges
const {io} = require('../index')
io.on('connection', client => {

    client.on('disconnect', () => { console.log('Cliente desconectado') });
      client.on('mensaje', msg => {
        console.log('Mensaje: ', msg);
        io.emit('mensaje', {admin: "Nuevo mensaje"});
      })

    client.on('emitir-mensaje', (payload) =>{
        console.log('Mensaje emitido: ', payload);
        io.emit('nuevo-mensaje', payload); //Envía el mensaje a todos los clientes excepto al que lo envía
    })
  });