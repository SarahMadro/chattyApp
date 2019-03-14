import React, { Component } from 'react';

export class ChatBar extends Component {

  onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newMessage = event.target.value;
      this.props.addMessage(newMessage);
    }
  }
  onChange = (event) => {
    if (event.key === 'Enter') {
      const newMessage = event.target.value;
      this.props.addMessage(newMessage);
    }
  }

  render() {

    return (
      <footer>
        <div className='chatbar'>
          <textArea className="chatbar-username" placeholder="Username" onChange={this.onChange} value={this.props.username} />
          <textArea className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={this.onKeyDown} />
        </div>
      </footer>
    )
  }
}
export default ChatBar;
