/* jshint esnext: true */

// use command jshint app1.js to examine the warnings and errors in JavaScript code

// use node-dev app1.js to run this file without restart the server while making any change to this file, only refresh the page is needed. 
var http = require("http");

http.createServer(function(req, res) {

   res.writeHead(200, {"Content-Type": "text/html"});
   res.end(`<!DOCTYPE html>
     <html>
       <head>
         <title>Web Server</title>
       </head>
       <body>
         <h1>Hello World Hello World Hello World Hello World</h1>
     </html> 
   `);

}).listen(3000);

console.log("Web Server running at http://localhost:3000");
