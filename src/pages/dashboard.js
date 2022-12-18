import React, { useState, useEffect } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Form,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "../components/Navigation";

import stockList from "../data/stocks.json";

function TopStocks(){
    return (
        <Row>
            <Col xs={12} className="mt-4">
                <h2 className="display-2">Top Stocks</h2>
            </Col>
            <Form className="mt-4">
              <Row >
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option value="day">One Day</option>
                    <option value="week">One Week</option>
                    <option value="month">One Month</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Select aria-label="Default select example">
                    <option value="prediction">Prediction</option>
                    <option value="prediction">Performance</option>
                  </Form.Select>
                </Col>
              </Row>
            </Form>
            {
                stockList
                .sort(function (a, b){
                  return (b.pctchange.replace("%", "")) - (a.pctchange.replace("%", "")) ;
                })
                .slice(0, 8)
                .map((stock) => {
                  return(
                  <Col md={6} lg={3} className="mt-4">
                    <Card className="h-100 d-flex text-white bg-success">
                      <Card.Body className="flex-column">
                        <Card.Title className="text-white">{stock.symbol}</Card.Title>
                        <Card.Subtitle className="mb-2 text-white">
                          {stock.name}
                        </Card.Subtitle>
                        <Card.Text>
                          <h1>{stock.pctchange}</h1>
                        </Card.Text>
                        <Card.Link href="#" className="text-white">View Stock</Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                  )
                })
            }
        </Row>
    )
}

function BottomStocks(){
  return (
    <Row>
        <Col xs={12} className="mt-4">
            <h2 className="display-2">Bottom Stocks</h2>
        </Col>
        <Col xs={12} className="mt-2">
          <Col xs={4} className="mt-2">
            <Form.Select aria-label="Default select example">
              <option value="day">One Day</option>
              <option value="week">One Week</option>
              <option value="month">One Month</option>
            </Form.Select>
          </Col>
        </Col>
        {
            stockList
            .sort(function (a, b){
              return (a.pctchange.replace("%", "")) - (b.pctchange.replace("%", "")) ;
            })
            .slice(0, 8)
            .map((stock) => {
              return(
              <Col md={6} lg={3} className="mt-4">
                <Card className="h-100 d-flex text-white bg-danger">
                  <Card.Body className="flex-column">
                    <Card.Title className="text-white">{stock.symbol}</Card.Title>
                    <Card.Subtitle className="mb-2 text-white">
                      {stock.name}
                    </Card.Subtitle>
                    <Card.Text>
                      <h1>{stock.pctchange}</h1>
                    </Card.Text>
                    <Card.Link href="#" className="text-white">View Stock</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              )
            })
        }
    </Row>
)
}


function PageContent(props) {
  return (
    <Container className="mb-4">
        <Col xs={12} className="mt-4 display-4">
            <h1 className="display-1">Dashboard</h1>
        </Col>
      <TopStocks />
      <BottomStocks />
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
