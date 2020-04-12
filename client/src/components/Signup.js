import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { registerUser } from "../services/Constants";

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }



  render(props) {
    return (
      <Form onSubmit={this.props.handleRegister} className="login-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" onChange={this.props.handleChange} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" onChange={this.props.handleChange} type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-lg btn-block">
          Sign Up
        </Button>
      </Form>
    );
  }
}
