const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

const server = http.createServer(app);
const WebSocket = require("ws");
const PORT = 8080;
const wss = new WebSocket.Server({ server });

let port = process.env.PORT || PORT;

app.use(express.static("./"));

app.use((req, res, next) => {
  DebugSubject.next(req.body);
  next();
});

app.set("port", port);

server.listen(port);

DebugSubject.next("WebSocket Server Started");

const broadcast = (message) => {
  wss.clients.forEach((client) => {
    client.send(message);
  });
};

wss.on("connection", function connection(ws) {
  DebugSubject.next("connection!");
  ws.on("message", function incoming(message) {
    DebugSubject.next(message);
    wss.clients.forEach((client) => {
      client.send(message);
    });
  });
});
