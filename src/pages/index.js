import * as React from "react"

import { 
  Container, 
  Row, 
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Jumbotron,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function Navigation() {
  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="hello">Action</NavDropdown.Item>
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

function PageContent(props) {
  return (
    <Container>
      <Row>
        <Col>
          Hello world! {props.route}
        </Col>
      </Row>
    </Container>
  )
}

const IndexPage = () => {
  return (
    <div>
      <Navigation/>
      <PageContent route = "index"/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
