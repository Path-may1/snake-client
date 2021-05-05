const connect = require("./client");


//const  connect  = require("./client");
const setupInput  = require("./input");

console.log("Connecting ...");

setupInput(connect());
console.log("Connecting ...");


// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
  
// };


// const handleUserInput = function (input) {
//  if(input === '\u0003'){
//    process.exit()
//  }
// };

module.exports = setupInput