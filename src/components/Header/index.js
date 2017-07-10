import React, { Component } from 'react';
import { 
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem 
  } from 'react-bootstrap/lib';
import './header.css';

class Header extends Component {
  render() {
    return (
		  <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src="http://i.imgur.com/SUqWTlc.png" alt="K-DOT" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="https://dribbble.com/shots/3550308-DAMN/attachments/789463" alt="#" target="_blank">/art</NavItem>
            <NavDropdown 
              eventKey={2}
              title="/albums"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={2.1} href="#section80">Section.80</MenuItem>
              <MenuItem eventKey={2.2} href="#madd">Good Kid, M.A.A.D. City</MenuItem>
              <MenuItem eventKey={2.3} href="#pimp">To Pimp a Butterfly</MenuItem>
              <MenuItem eventKey={2.4} href="#damn">DAMN.</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;