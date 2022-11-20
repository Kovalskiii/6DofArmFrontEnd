import { Server } from "socket.io";

const io = new Server(8000);

io.on("connect", (socket) => {
  console.log(`connect ${socket.id}`);


  socket.emit("hello", "hello");

  socket.on("disconnect", () => {
    console.log(`disconnect ${socket.id}`);
  });

  socket.on("f", (f) => {
    console.log(` ${f}`);
  });
});

// import { WebSocketServer } from 'ws';
//
// const PORT = 9000;
// const wss = new WebSocketServer({ port: PORT });
//
// wss.on('connection', async function connection(ws) {
//   console.log("New client connected");
//
//   ws.on('message', function message(data) {
//     console.log(`Client has sent message: ${data}`)
//   });
//
//   ws.on('close', function close() {
//     console.log("the client has connected");
//   });
//
//   ws.onerror = function () {
//     console.log("Some Error occurred")
//   }
//
//   ws.send(22);
//
// });
//
// console.log(`The WebSocket server is running on port ${PORT}`);
