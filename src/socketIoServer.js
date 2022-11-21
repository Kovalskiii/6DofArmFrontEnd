const {Server} = require('socket.io')

const io = new Server(9000, {
  cors: {
    origin: "*"
  }
});

io.on("connect", (socket) => {
  console.log(`connect ${socket.id}`);

  socket.emit("hello", "hello it is a test message");

  socket.on("disconnect", () => {
    console.log(`disconnect ${socket.id}`);
  });

});


function sendData() {
  io.emit("newData", 123);
  console.log("123");
}

(function () {
  for (let i = 1; i <= 10; i++) {
    setTimeout(sendData, 4000);
  }
})();

