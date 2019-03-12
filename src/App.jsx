import React, { Component } from 'react';
import ChatBar from './ChatBar';
import Message from './Message';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <body>
        <NavBar />
        <Message />
        <ChatBar />
      </body>
    );
  }
}
export default App;
