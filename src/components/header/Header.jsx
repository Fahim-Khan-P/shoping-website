import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/logo1.png';

const Header = () => {
  return (
    <Navbar expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top me-2" />
          Bazar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-flex gap-4">
            <Nav.Link href="#" className="nav-link">Login</Nav.Link>
            <Nav.Link href="#" className="nav-link">Signup</Nav.Link>
            <Nav.Link href="#" className="nav-link">Post Ad</Nav.Link>
            <Nav.Link href="#" className="nav-link">Request Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;