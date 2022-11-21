import { io } from "socket.io-client";
import { updateDataTerminal } from "./main.js";

const socket = io("ws://localhost:9000");

socket.on("connect", () => {
  updateDataTerminal(`Connected - socketId: ${socket.id}`);
  console.log(`Connected - socketId:${socket.id}`);
});

socket.on("reconnect", (attempt) => {
  updateDataTerminal(`Reconnect attempt ${attempt}`);
  console.log(`Reconnect attempt ${attempt}`);
});

socket.on("disconnect", () => {
  updateDataTerminal(`Disconnected`);
  console.log(`Disconnected`);
});

socket.on("newData", (data) => {
  updateDataTerminal(data);
});

socket.on("hello", (data) => {
  console.log(data);
});



// socket.emit("terminateConnection", "terminateConnection");
// socket.emit("disconnect", "terminateConnection");

