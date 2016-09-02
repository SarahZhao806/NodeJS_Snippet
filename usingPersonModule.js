var Person = require("./lib/Person");

var george = new Person('George Washington');

george.on('speak', function(said) {
    console.log(`${this.name} -> ${said}`);
});

george.emit('speak', "It is far better to be alone than to be in bad company");
