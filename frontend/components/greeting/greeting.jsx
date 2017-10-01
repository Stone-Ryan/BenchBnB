import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Greeting extends Component {
  constructor(props) {
    super(props)

    this.toggleGreeting = this.toggleGreeting.bind(this);
  }

  toggleGreeting(){
    const { logout, currentUser } = this.props;

    if (currentUser){
      return (
        <div>
          <p id='welcome-message'>Welcome back, {currentUser.username}</p>
          <button onClick={logout}>Log Out</button>
        </div>
      )
    }
    else {
      return (
        <div>
          <p id='welcome-stranger'>Welcome!</p>
          <Link to='/signup'>Sign Up</Link>
          <Link to='/login'>Log In</Link>
        </div>
      )
    }
  }

  render(){
    const { logout, currentUser } = this.props;

    return(
      <div>
        <span>
          {this.toggleGreeting()}
        </span>
      </div>
    )}
}

export default Greeting;
