const net = require("net");

// establishes a connection with the game server
const conne// PORT number herect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    conn.write('Hello from client!');
  });
  return conn;



console.log("Connecting ...");
connect();