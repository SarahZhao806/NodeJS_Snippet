//console.log(process.argv);
//command to run this text: node app.js --user "Ying" --greeting "Good Day"


function grab(flag) {
    var index = process.argv.indexOf(flag);
    return (index === -1) ? null: process.argv[index+1];
}

var greeting = grab("--greeting");
var user = grab("--user");

if(!user || !greeting) {
    console.log("You Blew it!");
}else {
    console.log(`Welcome ${user}, ${greeting}`);
}

