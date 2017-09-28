import React from 'react';
import ReactDOM from 'react-dom';

//testing
import { signup, login, logout } from './util/session_api_util';
//end testing

document.addEventListener('DOMContentLoaded', () => {
  
  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Bench BnB</h1>, root)
});
