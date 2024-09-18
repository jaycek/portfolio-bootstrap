import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
const Navigation = () => {
  return (
    <Navbar expand="md" className="justify-content-between p-3">
      <Navbar.Brand href="#home">
        <img
          src="vite.svg" // You can replace this with your logo path
          alt="Logo"
          width="40"
        />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#mentorship" className="mr-3">
          Mentorship
        </Nav.Link>
        <Button variant="outline-primary">Say Hello</Button>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
