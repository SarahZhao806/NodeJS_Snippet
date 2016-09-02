// execute was made for asynchronously synchronous process. like 'ls' and 'git -version' in command line. 
// these processes have only small bits of data, so they are perfect for execute. 
//while spawn is made for longer, ongoing processes with large amount of data. like this application. 
var sayings = [
    "You may delay, but time will not",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "It takes many good deeds to build a good reputation, and only one bad one to lose it.",
    "Early to bed and early to rise makes a man healthy, wealthy and wise.",
    "By failing to prepare, you are preparing to fail.",
    "An investment in knowledge pays the best interest.",
    "Well done is better than well said."
];

var interval = setInterval(function() {
    var i = Math.floor(sayings.length * Math.random());
    process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data) {
    console.log(`STDIN Data received -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});

