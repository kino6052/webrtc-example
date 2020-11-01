const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");

const DebugSubject = {
  next: () => {},
};

let app = express();

app.use(bodyParser.json());

const server = http.createServer(app);
const WebSocket = require("ws");
const PORT = 8080;
const wss = new WebSocket.Server({ server });

let port = process.env.PORT || PORT;

app.use("/static", express.static("./"));

app.get("/leap", (req, res, next) => {
  // console.warn("Leap");
  next();
});

app.get("/", (req, res, next) => {
  next();
});

app.use((req, res, next) => {
  DebugSubject.next(req.body);
  next();
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "./index.html"));
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
