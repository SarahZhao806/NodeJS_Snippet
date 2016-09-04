// list all the files in lib folder

var fs = require('fs');

// var files = fs.readdirSync('./lib');    // reading files synchronously will block the single Node.js thread, so all other connections will wait for this synchronous recall

fs.readdir('./lib', function(err, files) {
    
    if(err) {
        throw err;
    }
    
    console.log(files);
});

console.log("Reading files...");

