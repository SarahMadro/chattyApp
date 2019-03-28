ChattyApp!
=====================

Lightweight single-page chat app built with ReactJS in Node. The client-side app communicates with a server via WebSockets for multi-user real-time updates.

### ScreenShot

!['Screenshot of Chatty Message App :)'] (https://github.com/SarahMadro/chattyApp/blob/master/Screen%20Shot%202019-03-17%20at%205.01.05%20PM.png)

### Dependencies

* React
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
* UUID
* Express
* WS

### Installation

Installation and Startup:
The repository contains both the front-end application in chatty-app/ and the server in chatty-app/chatty_server/. After cloning the repository, install dependencies:

chatty-app/ $ npm i
...
chatty-app/chatty_server $ npm i
Start both servers:

chatty-app/ $ npm start  // (localhost:3000)
...
chatty-app/chatty_server $ npm start  // (localhost:3001)
Then connect to the client in your browser at: http://localhost:3000/

### Project Requirements

Core Project Requirements
When any connected user sends a chat message, all connected users receive and display the message
When any connected user changes their name, all connected users are notified of the name change
Notifications are styled differently from chat messages
Header will display the count of connected users
When the number of connected users changes, this count will be updated for all connected users
