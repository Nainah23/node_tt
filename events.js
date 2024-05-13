const EventEmitter = require('events');
const customEvent = new EventEmitter();

customEvent.on('lis', () => {
   console.log('Iko sawa');
})
customEvent.emit('lis');
