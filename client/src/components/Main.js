import React, { Component } from 'react'
import { readAllVolcano } from '../services/Constants'

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      volcanic: ""
    }
  }
  handleSubmit = async () => {
    const inspired = await readAllVolcano();
    this.setState({
      result: inspired
    });
  }
  
  componentDidMount = async () => {
    this.handleSubmit();
  }

  render() {
    const { result } = this.state
    const lava = this.state.result ? result.map((volcanoes) => {
      return(
        <div>{volcanoes.name}</div>
      )
    }) : <div></div>
      
    return (
      <div className="landing">
        <h1 className="main-title">Volcanoes To Visit</h1>
        {lava}
      </div>
    )
  }
}

