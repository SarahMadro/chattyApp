import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';
import NavBar from './NavBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: { username: "anonymous" },
      messages: [
        {
          type: "incomingMessage",
          id: 1,
          content: "I won't be impressed with technology until I can download food.",
          username: "Anonymous1"
        },
        {
          type: "incomingNotification",
          id: 2,
          content: "Anonymous1 changed their name to nomnom",
        },
        {
          type: "incomingMessage",
          id: 3,
          content: "I wouldn't want to download Kraft Dinner. I'd be scared of cheese packet loss.",
          username: "Anonymous2"
        },
        {
          type: "incomingMessage",
          id: 4,
          content: "...",
          username: "nomnom"
        },
        {
          type: "incomingMessage",
          id: 5,
          content: "I'd love to download a fried egg, but I'm afraid encryption would scramble it",
          username: "Anonymous2"
        },
        {
          type: "incomingMessage",
          id: 6,
          content: "This isn't funny. You're not funny",
          username: "nomnom"
        },
        {
          type: "incomingNotification",
          id: 7,
          content: "Anonymous2 changed their name to NotFunny",
        },
      ]
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
      id: this.generateRandomId(),
      username: 'sarah',
      content: value
    };
    this.setState({ messages: this.state.messages.concat(newMessage) })

  }

  render() {
    const { name } = this.state;
    console.log('state', this.state)
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
