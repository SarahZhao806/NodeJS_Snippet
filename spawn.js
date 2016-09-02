var spawn = require('child_process').spawn;

var cp = spawn('node', ['alwaysTalking']);     
// first argument is the command to run in the terminal, the second argument is the array of all of the things that would be ran after the node command. 

cp.stdout.on('data', function(data) {
    console.log(`STDOUT: ${data.toString().trim()}`);
});

cp.on('close', function() {
    console.log('Child process has ended');
    
    process.exit();
});


setTimeout(function() {
    cp.stdin.write('stop');
}, 4000);