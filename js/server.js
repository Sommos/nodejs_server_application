// nodejs runs on a server, not in a clients browser
// console.log("Hello World!");
// global object instead of a window object
// console.log(global);
// import modules
const os = require('os');
const path = require('path');
const {
    add, 
    subtract, 
    multiply, 
    divide,
} = require('./math');

console.log(add(1, 2));
console.log(subtract(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
// use the imported modules to get info about the server
/*
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
*/

// print out an object with all the info about the path
// console.log(path.parse(__filename));