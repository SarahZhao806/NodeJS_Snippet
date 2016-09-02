var EventEmitter = require('events').EventEmitter;

var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, EventEmitter);    // This is the way of adding an object to the prototype of an existing object. 
// This is how JavaScript handles inheritance. 

var ben = new Person('Ben');

ben.on('speak', function(said) {
    console.log(`${this.name}: ${said}`);
});

ben.emit('speak', 'You may delay, but time will not');

//var events = require('events');
//var emitter = new events.EventEmitter();
//
//emitter.on('customEvent', function(message, status) {
//   console.log(`${status}: ${message}`); 
//});
//
//emitter.emit('customEvent', "Hello World", 200);
