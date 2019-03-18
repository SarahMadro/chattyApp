import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';
const uuidv4 = require('uuid/v4');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: { username: 'Anonymous' },
      messages: [],
      userCount: 0
    };
    this.addMessage = this.addMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  //sends message to server
  addMessage = (value) => {
    const newMessage = {
      id: uuidv4(),
      username: this.state.currentUser.username,
      type: 'postMessage',
      content: value
    };
    this.socket.send(JSON.stringify(newMessage));
  }

  //changes name an sends notification
  onNameChange = (event) => {
    if (event.target.value !== this.state.currentUser.username) {
      const currentName = this.state.currentUser.username;
      const newName = event.target.value;
      const userChange = {
        id: uuidv4(),
        type: 'postNotification',
        content: currentName + ' has changed their name to ' + newName
      };
      this.socket.send(JSON.stringify(userChange));
      this.setState({ currentUser: { username: event.target.value } })
    }
  }

  handleChange(event) {
    this.setState({ currentUser: { username: event.target.value } })
  };

  //recieve messages from server
  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001')

    this.socket.onmessage = ((event) => {
      const parsedData = JSON.parse(event.data);

      switch (parsedData.type) {

        //posts messages from users in order
        case 'postNotification':
        case 'postMessage':
          this.setState({ messages: this.state.messages.concat(parsedData) });
          console.log('POSTMSG', parsedData);
          break;

        //counts online users
        case 'countUsers':
          this.setState({ userCount: parsedData.content });
          break;
      }
    })
  };

  //renders all other components
  render() {

    let { userCount, messages, currentUser } = this.state;
    let { onNameChange, addMessage, handleChange } = this;

    return (
      <div>
        <NavBar userCount={userCount} />

        <MessageList messages={messages} />

        <ChatBar currentUser={currentUser.username} onNameChange={onNameChange} addMessage={addMessage} handleChange={handleChange} />
      </div>
    )
  };
};
export default App;
