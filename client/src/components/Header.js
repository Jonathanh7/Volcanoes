import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom';

export default function Header() {
  return (
   
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/signup">Sign Up </Nav.Link>
        <Nav.Link as={Link} to="/sign-out">Sign Out </Nav.Link>
      </Nav>
      <Navbar.Text className="text-center">
        Volcanic Escapades
        </Navbar.Text>
  </Navbar>

  )
}
