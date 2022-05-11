//server

const net = require("net");
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
// establishes a connection with the game server
const connect = function () {


  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data",(data) =>{
    console.log("server says: ", data)
  })

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  net,
  connect,
  conn,

}