import React, { Component } from 'react'
import { readAllVolcano } from '../services/Constants'
import { Link, Route } from 'react-router-dom'; 
import Details from './Details'
import { Card, ListGroup } from 'react-bootstrap'

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
      return (
        <Card bg={'secondary'} style={{ width: '18rem' }}>
        <ListGroup variant="flush">
        <Link to={`/main/${volcanoes.id}`} >
          <h2 key={volcanoes.id}className="names">{volcanoes.name}</h2>
            </Link>
            </ListGroup>
        </Card>
      )
    }) : <div></div>
      
    return (
      <>
      <Route exact path="/main" render={ ()=> 
        <div className="landing">
          <h1 className="main-title">Volcanoes To Visit</h1>
          {lava}
        </div>
      } /> 
      <Route exact path="/main/:id" render={(props) =>
          <Details
            volcanos={this.state.result}
            {...props}
          />
      } />
        </>
    )
  }
}

