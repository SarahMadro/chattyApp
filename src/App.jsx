import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
import { each } from 'bluebird';
const uuidv4 = require('uuid/v4');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: { username: 'Anonymous' },
      messages: []
    };
    this.addMessage = this.addMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  addMessage = (value) => {
    console.log('value', value);
    const newMessage = {
      id: uuidv4(),
      username: this.state.currentUser.username,
      content: value
    };
    this.socket.send(JSON.stringify(newMessage));
    this.setState({ messages: this.state.messages.concat(newMessage) })
  }

  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001')

    this.socket.onmessage = ((event) => {
      const parsedData = JSON.parse(event.data);
      console.log(parsedData);

      this.setState({ messages: this.state.messages.concat({ ...parsedData, id: uuidv4() }) })
    })
  };

  handleChange(event) {
    this.setState({ currentUser: { username: event.target.value } })
  };


  render() {
    return (
      <div>
        <NavBar />

        <MessageList messages={this.state.messages} />

        <ChatBar currentUser={this.state.currentUser.username} addMessage={this.addMessage} handleChange={this.handleChange} />
      </div>
    )
  };
};
export default App;
