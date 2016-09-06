var express = require('express');
var cors = require('cors');
var app = express();

var skierTerms = [
  {
    term: 'Rip',
    defined: 'To move at a high rate of speed'
  },
    {
        term: 'Huck',
        defined: 'To throw your body off of something, usually a natural feature like a cliff'
    },
    {
        term: 'Chowder',
        defined: 'Powder after it has been sufficiently skied'
    }
    
];

app.use(function(req, res, next) {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.use(express.static("./public1"));

// add cross origin resource sharing to all api requests. So that any domain can make a request for our dictionary api
app. use(cors());


// app.get function will set up a get route 
app.get('/dictionary-api', function(req, res) {
    res.json(skierTerms);
});

app.listen(3000);


console.log("Express app running on port 3000");

module.exports = app;

