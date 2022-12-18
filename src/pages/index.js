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

import Navigation from "../components/Navigation";

function PageContent(props) {
  return (
    <Container>
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
