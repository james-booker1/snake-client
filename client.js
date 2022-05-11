//server

const { write } = require("fs");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
 const conn = net.createConnection({
    host: 'localhost',
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

conn.on("connect", () => {
  console.log("Name: JEB");
  console.log("Successfully connected to game server");
 
})
conn.on("connect", () => {
 /*
  setTimeout(() => {
   conn._write("Move: up");  
  }, 3000);
  setInterval(() => {
  conn._write("Move: down");  
  }, 1000)
  */
  
  
})
  conn.on("data",(data) =>{
    console.log("server says: ", data)
  });
 

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = {
  net,
  connect,


}