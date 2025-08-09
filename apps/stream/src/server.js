import http from "http";
import { WebSocketServer } from "ws";

const clients = new Set();
const wss = new WebSocketServer({ noServer: true });
const PORT = 3001;

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

function onSocketConnect(ws) {
  clients.add(ws);

  ws.on("message", function (message) {
    console.log("message:", message);

    for (const client of clients) {
      client.send(message);
    }
  });

  ws.on("close", function () {
    clients.delete(ws);
  });

  ws.on("error", function (error) {
    console.log("error:", error);
  });
}
