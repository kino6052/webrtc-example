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

const tvProgram = {};
const names = {};

app.use((req, res, next) => {
  console.warn(req.body);
  next();
});

app.get("/tv", (req, res) => {
  res.send(tvProgram);
});

app.post("/tv", (req, res) => {
  const body = req.body;
  if (!body) return;
  const { id, channel } = body;
  tvProgram[id] = channel;
  broadcast(JSON.stringify({ message: "tv" }));
  res.send();
});

app.get("/name", (req, res) => {
  res.send(names);
});

app.post("/name", (req, res) => {
  const body = req.body;
  if (!body) return;
  const { id, name } = body;
  tvProgram[id] = name;
  broadcast(JSON.stringify({ message: "name" }));
  res.send();
});

app.set("port", port);

server.listen(port);

console.warn("WebSocket Server Started");

const broadcast = (message) => {
  wss.clients.forEach((client) => {
    client.send(message);
  });
};

wss.on("connection", function connection(ws) {
  console.warn("connection!");
  ws.on("message", function incoming(message) {
    console.warn(message);
    wss.clients.forEach((client) => {
      client.send(message);
    });
  });
});
