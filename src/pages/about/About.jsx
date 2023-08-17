import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col lg={6} className="d-flex flex-column justify-content-center">
            <h1 className="mb-4">About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae magna vel sem lobortis lobortis.
              Quisque at turpis sed sem lacinia sodales. Suspendisse eu nunc nec metus rutrum dapibus vel vitae ex.
            </p>
            <p>
              Ut et leo ut turpis pretium elementum. Sed ac purus ac leo facilisis fermentum. Integer tristique
              consectetur urna, id sagittis justo facilisis ut.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;