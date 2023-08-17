import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryCard from '../../components/category/categoryCard/CategoryCard.jsx';

function CategoriesPage() {
  return (
    <Container>
    <h4 className="text-center my-4">Categories</h4>
    <Row className="g-4 d-flex justify-content-center align-items-center">
      <Col xs={12} sm={7} md={4} lg={2} className="m-2 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
      <Col xs={12} sm={7} md={4} lg={2} className="m-3 d-flex justify-content-center">
        <CategoryCard />
      </Col>
    </Row>
  </Container>
  );
}

export default CategoriesPage;