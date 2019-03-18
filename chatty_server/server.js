// server.js

const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
  // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({
  server
});

//counts number of users/clients
function updateUserList() {
  let message = {
    type: 'countUsers',
    content: wss.clients.size
  };
  console.log(`Connected users: ${message.content}`)
  wss.broadcast(message);
}

//sends data to all connected users
wss.broadcast = function broadcast(message) {
  wss.clients.forEach((client => {
    if (client.readyState === 1) {
      console.log('all connected users');
      client.send(JSON.stringify(message))
    }
  }));
};

//connects to server and updates user count
wss.on('connection', (ws) => {

  //on connection, update users
  console.log('Clients connected');
  updateUserList();

  //parses incoming message
  ws.on('message', function incoming(message) {
    const parsedMsg = JSON.parse(message)
    console.log('received', parsedMsg);

    //sends messages out to clients if they are online
    switch (parsedMsg.type) {

      case 'postMessage':
      case 'postNotification':
        wss.broadcast(parsedMsg)
        break;

      default:
        console.log('Can not send message');
        break;
    }
  });

  ws.on('close', () => {
    console.log('User left convorsation');
    updateUserList();
  })
});