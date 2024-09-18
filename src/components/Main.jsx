import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Main = () => {
  return (
    <Container className="text-center my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4">Designer, Front-end Developer & Mentor</h1>
          <p className="lead">
            I design and code beautifully simple things, and I love what I do.
          </p>
          <Image
            src="female_web_developer_avatar.jpeg" // Replace with avatar path
            roundedCircle
            width="150"
            className="my-3"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
