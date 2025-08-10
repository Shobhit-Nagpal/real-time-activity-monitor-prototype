import http from "http";
import { WebSocketServer } from "ws";

import { initServices } from "./services/index.js";
import { startStreamListener } from "./services/redis.js";

const clients = new Set();
const wss = new WebSocketServer({ noServer: true });
const PORT = 3001;

function onSocketConnect(ws) {
  clients.add(ws);

  ws.on("message", function (message) {
    console.log("message:", message);
  });

  ws.on("close", function () {
    clients.delete(ws);
  });

  ws.on("error", function (error) {
    console.log("error:", error);
  });
}

async function initServer() {
  try {
    await initServices();
    startStreamListener(clients);

    const server = http.createServer((_req, res) => {
      res.writeHead(404);

      res.end();
    });

    server.on("upgrade", (req, socket, head) => {
      wss.handleUpgrade(req, socket, head, onSocketConnect);
    });

    server.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
}

initServer();
