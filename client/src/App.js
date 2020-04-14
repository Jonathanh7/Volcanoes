import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Container from './Container'
import verifyUser from './services/Constants'


class App extends Component {
  constructor() {
    super();
  }
  

  render() {
    return (
      <div className="App">


      <Container /> 

      </div>
    );
  }
}

export default App;
