import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap/lib';
import './header.css';

const NavbarInstance = (
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
        <NavItem eventKey={2} href="#">about</NavItem>
        <NavDropdown eventKey={3} title="albums" id="basic-nav-dropdown">
			<MenuItem eventKey={3.1}>Section.80</MenuItem>
			<MenuItem eventKey={3.2}>Good Kid, M.A.A.D. City</MenuItem>
			<MenuItem eventKey={3.3}>To Pimp a Butterfly</MenuItem>
			<MenuItem divider />
			<MenuItem eventKey={3.3}>DAMN.</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

class Header extends Component {
  render() {
    return (
		NavbarInstance
    );
  }
}

export default Header;