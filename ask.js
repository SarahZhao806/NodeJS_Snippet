var questions = [
    
    "What's your name",
    "What's your fav hobby?",
    "What's your preferred programming language?"
];

var answers=[];

function ask(i) {
    process.stdout.write(`\n\n\n ${questions[i]}`);

    process.stdout.write("  >   \n\n\n");
}

process.stdin.on('data', function(data) {
    answers.push(data.toString().trim());
    
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function() {
    process.stdout.write('\n\n\n');
    
    process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later`);
    
    process.stdout.write('\n\n\n');
    
    
});

ask(0);
