import React, { Component } from 'react';

import {
  Navbar,
  Nav,
} from 'react-bootstrap';

class AppNavbar extends Component {
  constructor() {
    super();
    this.state = {
      title: 'navtitle',
    }
  }


  render() {
    return (
      <>
        <Navbar className="navbar-dark" bg="dark" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">github</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default AppNavbar;