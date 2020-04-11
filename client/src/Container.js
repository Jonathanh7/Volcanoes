import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

export default class Container extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contain">
        <Switch>
          <Route path="/" exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}
