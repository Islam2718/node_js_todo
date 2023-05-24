const EventEmitter = require('events');

class EventClass extends EventEmitter{
    eventFunc() { 
        console.log('Message redy to send !');

        // raise event 
        setTimeout(() => { 
            this.emit('sendMessage', {
                sendTo: 'Mr Jon',
                message: 'hello'
            });
        }, 2000);
    }
}

module.exports = EventClass;