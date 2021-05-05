
const { IP, PORT } = require("./constants");
const net = require("net")
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
const name = "May"
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
  //  conn.write('successfully connected to game server');
    conn.write("Say: May")
   //  conn.write('Hello from client!');
   // conn.write("Move; up");
       setInterval (() => {
    conn.write("Move: up");
    }, 200);
   
  });
  


  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}
module.exports = connect;


