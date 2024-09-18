import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
const AboutMe = () => {
  return (
    <section id="about" className="p-5 bg-dark text-white text-center">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2>About Me</h2>
            <p className="lead">
              I am a web developer specializing in React and Node.js. I have a passion for building dynamic and responsive websites using the latest technologies.
            </p>
            <Button variant="primary" href="#projects">Check My Projects</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AboutMe