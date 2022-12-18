
import React from "react";

import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function Navigation() {
    return (
      <Navbar bg="light" expand="xl">
        <Container>
          <Navbar.Brand href="/">StockVision</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Search</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }