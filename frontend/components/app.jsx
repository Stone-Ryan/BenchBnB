import React from 'react';

import {
  Switch,
  Route,
  Redirect,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div>
    <header>
      <Link to='/'>
        <h1>App component</h1>
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <AuthRoute path='/signup' component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
