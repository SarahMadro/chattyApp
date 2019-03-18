import React, { Component } from 'react';

export class NavBar extends Component {
  render() {

    return (
      <header>
        <div className="navbar">
          <div className='navbar-usercount'>{this.props.userCount} connected </div>
          <div className='navbar-brand'>Chatty</div>
        </div>
      </header>
    )
  }
}
export default NavBar;

