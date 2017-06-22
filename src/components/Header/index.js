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
            <a href="/"><img src="https://s3-us-west-2.amazonaws.com/kendrickdamnproject/kendrick+lamar+damn/kdot-icon.png"/></a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#aboutMe">/about</NavItem>
            <NavItem eventKey={2} href="https://dribbble.com/shots/3550308-DAMN/attachments/789463" alt="#" target="_blank" id="art-link">/art</NavItem>
            <NavDropdown 
              eventKey={3}
              title="/albums"
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1} href="#section80">Section.80</MenuItem>
              <MenuItem eventKey={3.2} href="#madd">Good Kid, M.A.A.D. City</MenuItem>
              <MenuItem eventKey={3.3} href="#pimp">To Pimp a Butterfly</MenuItem>
              <MenuItem eventKey={3.4} href="#damn">DAMN.</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;