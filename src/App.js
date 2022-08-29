import './App.css';
import React from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';
import Store from './components/Store';

function App() {
  return (
     
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/Store" component={Store} />
          <Redirect from="/" to="/signup" />
        </Switch>
      </div>

  );
}

export default App;
