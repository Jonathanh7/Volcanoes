import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Switch, Route, Link } from 'react-router-dom';
import { signOut } from "../services/Constants";

const VolcanoMenu = () => localStorage.getItem('authToken') ? <Nav.Link as={Link} to="/main">Volcanoes</Nav.Link> : null

export default function Header() {
  return (
   
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/signup">Sign Up </Nav.Link>
        <Nav.Link as={Link} to="/sign-out" onClick={signOut}>Sign Out </Nav.Link>
        <Nav.Link as={Link} to="/favorite">Favorites</Nav.Link>
        { <VolcanoMenu />}
      </Nav>
      <Navbar.Text className="text-center">
        Volcanic Escapades
        </Navbar.Text>
  </Navbar>

  )
}
