const EventClass = require('./EventClass');

const eventClassObj = new EventClass();

eventClassObj.on('sendMessage', ({ sendTo, message })=> { 
    console.log(`Bismillah ! ${sendTo} ${message}`);
});

eventClassObj.eventFunc();