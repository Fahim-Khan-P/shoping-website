import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Categories.css';
import CategoryCard from '../../components/category/categoryCard/CategoryCard.jsx';

function CategoriesPage() {
  return (
    <Container>
    <h4 className="text-center my-4">Categories</h4>
    <Row className="g-4 d-flex justify-content-center align-items-center mb-4">
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={6} sm={6} md={3} lg={1} className="ml-1 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      
    </Row>
  </Container>
  );
}

export default CategoriesPage;