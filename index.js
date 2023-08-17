const Websocket = require("ws");
// const express = require("express");

// let app = express();

// const server = require("http").createServer(app);

const wss = new Websocket.WebSocketServer({ port: 3000 });

let clients = [];

wss.on("connection", function connection(ws) {
  console.log("CONNECTED");

  ws.on("error", () => {
    console.log("ERROR");
  });

  ws.on("message", function message(data) {
    // console.log(data);
    let jsonData = JSON.parse(data);
    // console.log(jsonData);
    if (jsonData.id) {
      let isClientAlreadyConneted = clients.find((client) => client.ws === ws);

      if (!isClientAlreadyConneted) {
        clients.push({
          data: jsonData,
          ws: ws,
        });
      }
    } else {
      //   let client = clients.find((client) => client.ws === ws);
      clients.forEach(({ data, ws: client }) => {
        if (client !== ws) {
          client.send(jsonData.message);
        }
      });
    }

    console.log(clients.map(({ data }) => data.id));
  });
});

// const wss = new Websocket.Server({ server: server });
// server.listen("3000", () => {
//   console.log("LISTENING");
// });

// const wss = new WebSocket.Server({ server: server });

// wss.on("connection", function connection(ws) {
//   console.log("A new client Connected!");
//   ws.send("Welcome New Client!");

//   ws.on("message", function incoming(message) {
//     console.log("received: %s", message);

//     wss.clients.forEach(function each(client) {
//       if (client !== ws && client.readyState === WebSocket.OPEN) {
//         client.send(message);
//       }
//     });
//   });
// });

// app.get("/", (req, res) => res.send("Hello World!"));

// server.listen(3000, () => console.log(`Lisening on port :3000`));
