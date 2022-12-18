
import React from "react";

import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function Navigation() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            StockVision
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }