//import { WebSocketServer } from 'ws';
const { WebSocketServer } = require('ws');

const PORT = 9000;
const wss = new WebSocketServer({ port: PORT });

wss.on('connection', async function connection(ws) {
  console.log("New client connected");

  ws.onmessage = function(event) {
    console.log(`Client has sent message: ${event.data}`)
  };

  ws.onclose = function(event) {
    if (event.wasClean) {
      console.log(`Connection closed, code=${event.code}, reason=${event.reason}`);
    } else {
      console.log(`Connection terminated`);
    }
  };

  ws.onerror = function(error) {
    console.log("Error", error);
  };

  let buffer = new ArrayBuffer(16); // создаётся буфер длиной 16 байт
  let view = new Uint32Array(buffer);
  view[0] = 31;

  for (let i = 0; i < 1; i++) {
    setTimeout(function timeout() {
      //ws.send(i);
      ws.send(view)
    }, 3000);
  }

});

console.log(`The WebSocket server is running on port ${PORT}`);














// const {Server} = require('socket.io')
//
// const io = new Server(9000, {
//   cors: {
//     origin: "*"
//   }
// });
//
// io.on("connect", (socket) => {
//   console.log(`connect ${socket.id}`);
//
//   socket.emit("hello", "hello it is a test message");
//
//   socket.on("disconnect", () => {
//     console.log(`disconnect ${socket.id}`);
//   });
//
// });
//
//
// function sendData() {
//   io.emit("newData", 123);
//   console.log("123");
// }
//
// (function () {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(sendData, 4000);
//   }
// })();
//
