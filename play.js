const connect = require("./client");


const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");
connect();

setupInput();
console.log("Connecting ...");
connect();

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