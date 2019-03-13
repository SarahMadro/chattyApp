import React, { Component } from 'react';

export class Message extends Component {
  render() {
    console.log('props', this.props);
    return (
      < div className="message" >
        <span className="message-username">{this.props.msg.username}</span>
        <span className="message-content" > {this.props.msg.content}</span>
      </div >
    )
  }
}

export default Message;