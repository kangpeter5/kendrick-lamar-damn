import React, { Component } from 'react';
import { 
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem 
  } from 'react-bootstrap/lib';
import About from '../About';
import './header.css';

class Header extends Component {
  render() {
    return (
		  <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/home">KDOT</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/home">/home</NavItem>
            <NavItem eventKey={2} href="#aboutMe">/about</NavItem>
            <NavItem eventKey={3} href="https://dribbble.com/shots/3550308-DAMN/attachments/789463" alt="#" target="_blank" id="art-link">/art</NavItem>
            <NavDropdown 
              eventKey={4}
              title="/albums"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={4.1} href="#section80">Section.80</MenuItem>
              <MenuItem eventKey={4.2} href="#madd">Good Kid, M.A.A.D. City</MenuItem>
              <MenuItem eventKey={4.3} href="#pimp">To Pimp a Butterfly</MenuItem>
              <MenuItem eventKey={4.3} href="#damn">DAMN.</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;