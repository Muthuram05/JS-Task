const Websocket = require("ws");

const wss = new Websocket.WebSocketServer({ port: 3000 });

let clients = [];
let typingUsers = {}; // Track typing users

wss.on("connection", function connection(ws) {
  console.log("CONNECTED");

  ws.on("error", () => {
    console.log("ERROR");
  });

  ws.on("message", function message(data) {
    let jsonData = JSON.parse(data);
    
    if (jsonData.id) {
      let isClientAlreadyConnected = clients.find((client) => client.ws === ws);

      if (!isClientAlreadyConnected) {
        clients.push({
          data: jsonData,
          ws: ws,
        });
      }
    } else if (jsonData.typing) {
      // Mark the user as typing
      typingUsers[jsonData.from] = true;

      // Broadcast the typing notification to all other clients
      clients.forEach(({ ws: client }) => {
        if (client !== ws) {
          client.send(JSON.stringify({ typing: true, from: jsonData.from }));
        }
      });
    } else {
      // Handle regular messages here
      
      // ...

      // Clear typing status when a message is sent
      delete typingUsers[jsonData.from];

      // Broadcast the message to all clients except the sender
      clients.forEach(({ data, ws: client }) => {
        if (client !== ws) {
          client.send(JSON.stringify({ message: jsonData.message, from: jsonData.from }));
        }
      });
    }

    console.log(clients.map(({ data }) => data.id));
  });
});
