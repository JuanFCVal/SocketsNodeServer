const Bands = require('../models//bands');
const Band = require('../models//band');
const bands = new Bands();
bands.addBand(new Band('Queen'));
bands.addBand(new Band("Gun's Roses"));
bands.addBand(new Band('GreenDay'));
//Sockets messagges
const {io} = require('../index')
io.on('connection', client => {
    client.emit('active-bands', bands.getBands());
    client.on('disconnect', () => { console.log('Cliente desconectado') });
      client.on('mensaje', msg => {
        console.log('Mensaje: ', msg);
        io.emit('mensaje', {admin: "Nuevo mensaje"});
      })
    client.on('emitir-mensaje', (payload) =>{
        console.log('Mensaje emitido: ', payload);
        io.emit('nuevo-mensaje', payload); //Envía el mensaje a todos los clientes excepto al que lo envía
    })
    client.on('add-vote', (payload) =>{
      bands.voteBand(payload.band_id);
      io.emit('active-bands', bands.getBands()); //Envía el mensaje a todos los clientes excepto al que lo envía
  })
  client.on('add-band', (payload) =>{
    console.log(payload);
    new Band(payload.name)
    bands.addBand(new Band(payload.name) );
    io.emit('active-bands', bands.getBands()); //Envía el mensaje a todos los clientes excepto al que lo envía
})

client.on('remove-band', (payload) =>{
  console.log(payload);
  bands.removeBand((payload.band_id) );
  io.emit('active-bands', bands.getBands()); //Envía el mensaje a todos los clientes excepto al que lo envía
})
  });