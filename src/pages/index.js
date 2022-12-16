import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import { 
  Container, 
  Row, 
  Col,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';

function Navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const IndexPage = () => {
  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>

      </Row>
    </Container>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
