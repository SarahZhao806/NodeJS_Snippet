var path = require("path");

var hello = "Hello World from Node js";

var justNode = hello.slice(17);

console.log(`Rock on World from ${path.basename(__filename)}`);
console.log(`Rock on World from ${justNode}`);

console.log(__dirname);
console.log(__filename);

console.log(hello);         
