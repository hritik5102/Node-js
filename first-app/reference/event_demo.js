const Event = require('events');

class eventEmitter extends Event {};

const eventObj = new eventEmitter();

eventObj.on('event', () => console.log('event fire'));

// here emit parameter should be 'event' only we can not pass other then like:
// eventObj.emit('abc');

eventObj.emit('event');