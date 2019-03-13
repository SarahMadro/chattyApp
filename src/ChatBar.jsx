import React, { Component } from 'react';
// import Message from './Message.jsx';

export class ChatBar extends Component {


  onKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newTaskInput = event.target.value;
      this.props.addMessage(newTaskInput);
    }
  }

  render() {

    return (
      <footer>
        <div className='chatbar'>
          <input className="chatbar-username" placeholder={this.props.currentUser.name} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={this.onKeyDown} />
        </div>
      </footer>
    )
  }
}
export default ChatBar;