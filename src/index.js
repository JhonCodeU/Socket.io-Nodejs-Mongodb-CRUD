import app from "./app";
import http from "http";
import socket from "./socket";
import { PORT } from "./config";
import { Server as WebSocketServer } from "socket.io";

import { connectDB } from "./db";
connectDB();

const server = http.createServer(app)
const httpServer = server.listen(PORT);
const io = new WebSocketServer(httpServer);

socket(io);

console.log("Server is running on port " + PORT);
