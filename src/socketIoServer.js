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


function myGreeting() {
  io.emit("newData", 123);
}

(function () {
  setTimeout(myGreeting, 6000);
})();

