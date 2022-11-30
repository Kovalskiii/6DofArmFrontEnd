//import WebSocket from 'isomorphic-ws';
import { connectBtn, disconnectBtn, updateDataTerminal } from "./main.js";

let ws;

export function connectSocket() {
  ws = new WebSocket('ws://localhost:9000');

  if (ws) {
    ws.onopen = function open(event) {
      ws.send("connected");
      updateDataTerminal("Connection established");
      console.log("Connection established");
      connectBtn.disabled = true;
      disconnectBtn.disabled = false;
    };

    ws.onmessage = function incoming(data) {
      console.log('received: %s', data.data);
      updateDataTerminal(data.data);

      //const bytes = blob.slice(0,4);
      //parseInt(bin, 2)

      //const id = parseInt(data.slice(0,1), 2);
      //const robotState = parseInt(data.slice(0,1), 2);
      //const robotSpeed = parseInt(data.slice(0,1), 2);
      //const robotSpeed = parseInt(data.slice(0,1), 2);
    };

    ws.onclose = function close(event) {
      connectBtn.disabled = false;
      disconnectBtn.disabled = true;

      if (event.wasClean) {
        updateDataTerminal(`Connection closed, code=${event.code}, reason=${event.reason}`);
        console.log(`Connection closed, code=${event.code}, reason=${event.reason}`);
      } else {
        updateDataTerminal(`Connection terminated`);
        console.log(`Connection terminated`);
      }
    };

    ws.onerror = function(error) {
      connectBtn.disabled = false;
      disconnectBtn.disabled = true;
      updateDataTerminal("Error", error);
      console.log("Error", error);
    };
  }
}

export function disconnectSocket() {
  if (ws) {
    connectBtn.disabled = false;
    disconnectBtn.disabled = true;
    ws.close(1000, "Connection closed");
  }
}








// import { io } from "socket.io-client";
// import { updateDataTerminal } from "./main.js";
//
// const socket = io("ws://localhost:9000");
//
// socket.on("connect", () => {
//   updateDataTerminal(`Connected - socketId: ${socket.id}`);
//   console.log(`Connected - socketId:${socket.id}`);
// });
//
// socket.on("reconnect", (attempt) => {
//   updateDataTerminal(`Reconnect attempt ${attempt}`);
//   console.log(`Reconnect attempt ${attempt}`);
// });
//
// socket.on("disconnect", () => {
//   updateDataTerminal(`Disconnected`);
//   console.log(`Disconnected`);
// });
//
// socket.on("newData", (data) => {
//   updateDataTerminal(data);
// });
//
// socket.on("hello", (data) => {
//   console.log(data);
// });
//
//
//
// // socket.emit("terminateConnection", "terminateConnection");
// // socket.emit("disconnect", "terminateConnection");
//
