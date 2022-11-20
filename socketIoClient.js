import { io } from "socket.io-client";
//import { updateDataTerminal } from "./main.js";

const socket = io("ws://localhost:8000");

socket.on("connect", () => {
  console.log(`connect ${socket.id}`);
  //updateDataTerminal(socket.id);
});

socket.on("reconnect", (attempt) => {
  console.log(`reconnect attempt ${attempt}`);
});

socket.on("disconnect", () => {
  console.log(`disconnect`);
});

socket.on("newData", (data) => {
  console.log(data);
});

socket.on("hello", (data) => {
  console.log(data);
});

// socket.emit("terminateConnection", "terminateConnection");
// socket.emit("disconnect", "terminateConnection");


// import WebSocket from 'ws';
//
// const ws = new WebSocket('ws://localhost:9000');
//
// ws.on('open', function open() {
//
//   ws.send("hello");
// });
//
// ws.on('connect', function connect() {
//
//   ws.send("connected");
// });
//
// ws.on('message', function message(data) {
//   console.log('received: %s', data);
// });
//
//
// // ws.on('message', function message(data) {
// //   console.log('received: %s', data);
// // });
