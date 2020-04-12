import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';
import { loginUser, registerUser } from './services/Constants'

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      formData: {
        email: '',
        password: ''
      },
      loggedIn:false,
    }
  }

  handleChange = (e) => {
    console.log("bread")
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }
  handleLogin = async (e) => {
    console.log("Kangaroo")
    e.preventDefault()
    const currentUser = await loginUser(this.state.formData)
    this.setState({
      currentUser,
      loggedIn:true
    })
}
  handleRegister = async (e) => {
    e.preventDefault()
    const currentUser = await registerUser(this.state.formData)
    this.setState({
      currentUser
    })
  }
  

  render() {
    console.log(this.state.loggedIn)
const australia = this.state.loggedIn ? <Redirect to="/main" /> : null

    return (
      <div className="contain">
        {australia}
        <Switch>
          <Route path="/" exact />
          <Route path="/login" render={() => (
            <Login
            handleChange = {this.handleChange}
            handleLogin = {this.handleLogin}
            />
            
          )} />
          <Route path="/signup" render={() => (
            <Signup
              handleRegister={this.handleRegister}
              handleLogin={this.handleLogin}
              handleChange={this.handleChange}
            />
          )
          } />
        </Switch>
      </div>
    );
  }
}
