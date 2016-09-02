var exec = require('child_process').exec;

//exec('open http://www.linkedin.com');
//
//exec('open -a Terminal .');

exec('dir', function(err, stdout) {
    if(err) {
        throw err;
    }
    
    console.log('Listing Finished');
    console.log(stdout);
    
    
});

exec('git version', function(err, stdout) {
    if(err) {
        throw err;
    }
    
    console.log('Git Version Executed');
    console.log(stdout);
  
});

