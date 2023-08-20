import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/logo1.png';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };

  const handleLanguageDropdownToggle = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleLanguageDropdownClose = () => {
    setIsLangDropdownOpen(false);
  };

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
            <NavDropdown
              title="Language"
              id="language-dropdown"
              show={isLangDropdownOpen}
              onToggle={handleLanguageDropdownToggle}
              onMouseLeave={handleLanguageDropdownClose}
            >
              <NavDropdown.Item href="#">Language 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Language 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Language 3</NavDropdown.Item>
              {/* Add more NavDropdown.Item for additional categories */}
            </NavDropdown>
            
            <NavDropdown
              title="Categories"
              id="categories-dropdown"
              show={isDropdownOpen}
              onToggle={handleDropdownToggle}
              onMouseLeave={handleDropdownClose}
            >
              <NavDropdown.Item href="#">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Category 3</NavDropdown.Item>
              {/* Add more NavDropdown.Item for additional categories */}
            </NavDropdown>


            <Nav.Link as={Link} to="/sign_in" className="nav-link">Login</Nav.Link>
            <Nav.Link as={Link} to="/sign_up" className="nav-link">Sign Up</Nav.Link>
            <Nav.Link href="#" className="nav-link">Post Ad</Nav.Link>
            <Nav.Link href="#" className="nav-link">Request Post</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;