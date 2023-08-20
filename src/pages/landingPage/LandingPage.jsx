import React from 'react';
import { Container, Row, Col, Button, Form, Dropdown } from 'react-bootstrap';
import Header from '../../components/header/Header.jsx';
import styles from './LandingPage.module.css';
import CatogoriesPage from '../categoryPage/CatogoriesPage.jsx';
import About from '../about/About.jsx';
import Search from '../../components/searchbar/Search.jsx';
import ProvinceDropdown from '../../components/dropdownList/DropdownList.jsx';

function LandingPage() {
  return (
    <div>
      <Header />
      <div className={`${styles.landingPage} py-2 pb-4`}>
        <Container>
          <Row className="justify-content-center d">
            <Col md={6} className="text-center mt-4">
              <Search />
            </Col>
            <Col md={3} className="text-center mt-4">
              <ProvinceDropdown />
            </Col>
          </Row>
        </Container>
      </div>
      <CatogoriesPage />
      <About />
    </div>
  );
}

export default LandingPage;