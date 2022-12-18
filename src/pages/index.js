import React, { useState, useEffect } from "react";
import { Router } from "@reach/router"


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

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


function BestStocks(){
  const [listLength, setListLength] = useState(11);
  return (
      <Row>
          <Col xs={12} className="mt-4">
              <h2 className="text-white">Best Stocks</h2>
          </Col>
          {
            stockList
              .sort(function (a, b){
                return (b.pctchange.replace("%", "")) - (a.pctchange.replace("%", "")) ;
              })
              .slice(0, listLength)
              .map((stock) => {
                return(
                <Col sm={6} md={6} lg={3} className="mt-4">
                  <Card className="h-100 d-flex text-white bg-success">
                    <Card.Body className="flex-column">
                      <Card.Title className="text-white"><h1>{stock.symbol}</h1></Card.Title>
                      <Card.Subtitle className="mb-2 text-white">
                        <h2>{stock.lastsale}</h2>
                      </Card.Subtitle>
                      <Card.Text>
                        <h3>+{stock.pctchange}</h3>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                )
            })
          }
          <Col sm={6} md={6} lg={3} className="mt-4">
            <Card className="h-100 d-flex text-white bg-dark">
              <Card.Body className="flex-column">
                <Card.Text>
                <h3 className = "text-center">Top Returns for Today</h3>
                <div className="d-grid gap-2">
                  <Button variant="light" size="lg"
                    onClick={() => setListLength(listLength+4)}>
                    See More
                  </Button>
                </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
  )
}

function WorstStocks(){
  return (
      <Row>
          <Col xs={12} className="mt-4">
              <h2 className="text-white">Worst Stocks</h2>
          </Col>
          {
            stockList
              .sort(function (a, b){
                return (a.pctchange.replace("%", "")) - (b.pctchange.replace("%", "")) ;
              })
              .slice(0, 4)
              .map((stock) => {
                return(
                <Col sm={6} md={6} lg={3} className="mt-4">
                  <Card className="h-100 d-flex text-white bg-danger">
                    <Card.Body className="flex-column">
                      <Card.Title className="text-white"><h1>{stock.symbol}</h1></Card.Title>
                      <Card.Subtitle className="mb-2 text-white">
                        <h2>{stock.lastsale}</h2>
                      </Card.Subtitle>
                      <Card.Text>
                        <h3>{stock.pctchange}</h3>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                )
            })
          }
      </Row>
  )
}

function HighVolumeStocks(){
  return (
      <Row>
          <Col xs={12} className="mt-4">
              <h2 className="text-white">Highest Volume</h2>
          </Col>
          {
            stockList
              .sort(function (a, b){
                return b.volume - a.volume ;
              })
              .slice(0, 16)
              .map((stock) => {
                const bgStringBase = "h-100 d-flex text-white"
                let bg = bgStringBase + " bg-warning";
                if(stock.pctchange.replace("%", "") > 0.5){
                   bg = bgStringBase + " bg-success";
                }
                if(stock.pctchange.replace("%", "") < -0.5){
                   bg = bgStringBase + " bg-danger";
                }
                return(
                <Col sm={6} md={6} lg={3} className="mt-4">
                  <Card className={bg}>
                    <Card.Body className="flex-column">
                      <Card.Title className="text-white"><h1>{stock.symbol}</h1></Card.Title>
                      <Card.Subtitle className="mb-2 text-white">
                        <h2>{stock.lastsale}</h2>
                      </Card.Subtitle>
                      <Card.Text>
                        <h3>{stock.pctchange}</h3>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                )
            })
          }
      </Row>
  )
}


function StockSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Container>
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
        </Row>
        <Row>
        {
          stockList
          .filter(
            (item) => 
            item.symbol.toLowerCase() == searchTerm.toLowerCase()
            || item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .sort(function (a, b){
            return ('' + a.symbol).localeCompare(b.symbol)
          })
          .slice(0, searchTerm ? 4 : 0)
          .map((stock) => {
            const bgStringBase = "h-100 d-flex text-white"
            let bg = bgStringBase + " bg-warning";
            if(stock.pctchange.replace("%", "") > 0.5){
               bg = bgStringBase + " bg-success";
            }
            if(stock.pctchange.replace("%", "") < -0.5){
               bg = bgStringBase + " bg-danger";
            }
            return(
            <Col sm={6} md={6} lg={3} className="mt-4">
              <Card className={bg}>
                <Card.Body className="flex-column">
                  <Card.Title className="text-white"><h1>{stock.symbol}</h1></Card.Title>
                  <Card.Subtitle className="mb-2 text-white">
                  </Card.Subtitle>
                  <Card.Text>
                    <h2>{stock.name}</h2>
                    <h2>{stock.lastsale}</h2>
                    <h3>{stock.pctchange}</h3>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            )
        })
        }
      </Row>
    </Container>
  )
}


function IntroContent(props) {
  if(props.page === 'index') {
    return (
      <p className = "text-white">Introducing StockVision, the website that uses the power of Artificial Intelligence (AI) to predict the stock market. StockVision uses sophisticated algorithms and data science to provide users with real-time stock market predictions. Our AI technology has been trained on a vast amount of historical market data, giving it the capability to analyze and understand the stock market on a deeper level. With StockVision, users can make more informed decisions about their investments and increase their chances of success. StockVision is fast, accurate, and easy-to-use, making it the perfect tool for both novice and experienced investors.</p>
    );
  }
  if(props.page === 'cost') {
    return (
      <p className = "text-white">
      Users can subscribe to our monthly membership plan for just $5/month. This subscription provides access to the full suite of features, including real-time stock market predictions, detailed analytics and insights, and a vibrant community of investors. It also includes unlimited access to our AI-powered platform, so you can make the most of your investments. Our membership plan is designed to help you get the most out of the stock market and increase your chances of success.</p>
    );
  }
  else{
    return (
      <p className = "text-white">StockVision is a comprehensive stock market prediction platform. Our AI technology is built on a robust platform that utilizes a variety of data sources to generate accurate predictions. We have integrated machine learning algorithms that continuously adjust the AI models to ensure that the predictions are always up to date. Additionally, we provide users with detailed analytics and insights into the stock market, allowing them to better understand the underlying trends and make more informed decisions. StockVision also has a community of investors, where users can collaborate and share their insights. With StockVision, you can take control of your investments and increase your chances of success.</p>
    );
  }
}

const Page = () => {
  let [page, setPage] = useState('index');
  return (
    <div className = "bg-dark min-vh-100">
      <Navigation />
      <Container className = "mt-4 ">
        <Row>
          <Col>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"/>
            </svg>
            <h1 className = "text-white mt-2 mb-4">Welcome to StockVision</h1>
          </Col>
        </Row>
        <Row>
          <Col>
          <Row>
            <Col>
              <a href="#about" className = "text-white"
                onClick={() => setPage('index')}>
                What is StockVision?
              </a>
            </Col>
            <Col>
              <a href="#how" className = "text-white"
                onClick={() => setPage('other')}>
                How does it work?
              </a>
            </Col>
            <Col>
              <a href="#cost" className = "text-white"
                onClick={() => setPage('cost')}>
                How much does it cost?
              </a>
            </Col>
            </Row>
          </Col>
          <IntroContent page={page} />
        </Row>
      </Container>
        <StockSearch/>
      <Container>
        <BestStocks/>
      </Container>
      <Container>
        <WorstStocks/>
      </Container>
      <Container>
        <HighVolumeStocks/>
      </Container>
      <Container>
        <Footer/>
      </Container>
    </div>
  );
};

export default Page;

export const Head = () => <title>Home Page</title>;
