import React from 'react';

function Message(props) {
  return (
    < div className="message" >
      <span className="message-username">{props.msg.username}</span>
      <span className="message-content" > I won't be impressed with technology until I can download food.</span>
    </div >
  )
}

export default Message;