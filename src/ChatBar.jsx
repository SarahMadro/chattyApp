import React, { Component } from 'react';

export class ChatBar extends Component {

  onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newMessage = event.target.value;
      this.props.addMessage(newMessage);
      event.target.value = '';
    }
  }

  render() {

    return (
      <footer>
        <div className='chatbar'>
          <input className="chatbar-username" placeholder="Username" onBlur={this.props.onNameChange} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={this.onKeyDown} />
        </div>
      </footer>
    )
  }
}
export default ChatBar;
