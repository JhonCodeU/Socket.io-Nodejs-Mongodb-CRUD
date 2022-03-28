import app from "./app";
import http from "http";
import { Server as WebSocketServer } from "socket.io";

import { connectDB } from "./db";
connectDB();

const server = http.createServer(app)
const httpServer = server.listen(3000);
const io = new WebSocketServer(httpServer);

console.log("Server is running on port 3000");
