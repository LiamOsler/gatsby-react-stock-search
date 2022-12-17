import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  NavDropdown,
  Card,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import stockList from "../data/stocks.json";
import keyDescription from "../data/keys.json";

function StockSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Row>
      <Col xs={12} className="mt-4">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Find a Stock"
            aria-label="Stock Name or Symbol"
            aria-describedby="basic-addon2"
            onChange={e => setSearchTerm(e.target.value)}
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </Col>
      {
      stockList
        .filter(
          (item) => 
          item.symbol.toLowerCase() == searchTerm.toLowerCase()
          || item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((stock) => {
          return (
            <Col sm={6} lg={4} className="mt-2">
              <Card className="h-100 d-flex">
                <Card.Body className="flex-column">
                  <Card.Title>{stock.symbol}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {stock.name}
                  </Card.Subtitle>
                  <Card.Text>
                    {Object.keys(stock).map((key) => {
                      if (
                        key !== "symbol" &&
                        key !== "name" &&
                        key !== "url" &&
                        stock[key] != ""
                      ) {
                        return (
                          <div>
                            <span>{keyDescription[key]}: </span>
                            <span>{stock[key]}</span>
                          </div>
                        );
                      }
                    })}
                  </Card.Text>
                  <Card.Link href="#">Add to portfolio</Card.Link>
                  <Card.Link href="#">View Stock</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}

function Navigation() {
  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="/">Stock Viewer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/test">Action</NavDropdown.Item>
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
      <StockSearch />
    </Container>
  );
}

const IndexPage = () => {
  return (
    <div>
      <Navigation />
      <PageContent route="index" />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
