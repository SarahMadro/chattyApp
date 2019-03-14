import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
const uuidv4 = require('uuid/v4');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: { username: 'sarah' },
      currentContent: '',
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
  };

  generateRandomId() {
    let r = Math.random().toString(36).substring(7);
    return r;
  };

  addMessage = (value) => {
    console.log('value', value);
    const newMessage = {
      id: uuidv4(),
      username: '',
      content: value
    };
    this.socket.send(JSON.stringify(newMessage));
    this.setState({ messages: this.state.messages.concat(newMessage) })
  }

  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001')

    this.socket.addEventListener('message', (message) => {
      this.socket.onmessage = ((event) => {
        const parsedData = JSON.parse(event.data);
        console.log(parsedData);
      })
    })
  };

  render() {
    return (
      <div>
        <NavBar />

        <MessageList messages={this.state.messages} />

        <ChatBar currentUser={this.state.name} addMessage={this.addMessage} />
      </div>
    )
  };
};
export default App;
