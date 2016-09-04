var fs = require('fs');
var path = require('path');

// Using readdir and readFile command to read the content of all the files in lib folder
fs.readdir('./lib', function(err, files) {
    
    files.forEach(function(fileName) {
        var file = path.join(__dirname, 'lib', fileName);
        console.log("file address: " + file);
        var stats = fs.statSync(file);
        if(stats.isFile() && fileName !== ".DS_Store") {
            fs.readFile(file, 'UTF-8', function(err, contents) {
                console.log(contents);
            })
        }
    })
})

//Reading files synchronously

var contents = fs.readFileSync('./lib/sayings.md','UTF-8');

console.log(contents);

//Reading files asynchronously

fs.readFile('./lib/sayings.md', 'UTF-8', function(err, content) {
    if(err) {
        console.log(err);
    }
    console.log(content);
});

