import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const messages = this.props.messages.map(msg =>
      <Message key={msg.id} msg={msg} username={msg.username} />
    )

    return (
      <div>
        <div> {messages} </div>
      </div>
    );
  };
}
export default MessageList;