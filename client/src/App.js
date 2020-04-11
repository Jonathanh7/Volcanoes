import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Container from './Container'


class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Container /> 

      </div>
    );
  }
}

export default App;
