import React from "react";

import {
  Container,
  Row,
  Col,
  ListGroup
} from "react-bootstrap";

export default function Footer() {
    return (
        <Row className = "mt-4">
            <Col className = "text-white">
                <h5>StockVision</h5>
                <p>Our goal is to provide everyone with the tools and resources they need to make smart, informed investment decisions. With our AI-powered platform, users can access real-time stock market predictions, detailed analytics and insights, and a vibrant community of investors. Get started today and take control of your investments with StockVision.</p>
            </Col>
            <Col lg = {3}>
                <ListGroup  className = "text-white bg-dark">
                    <ListGroup.Item className = "bg-dark"><a href = "#" className = "text-white">Acknowledgements</a></ListGroup.Item>
                    <ListGroup.Item className = "bg-dark"><a href = "#" className = "text-white">Terms of Service</a></ListGroup.Item>
                    <ListGroup.Item className = "bg-dark"><a href = "#" className = "text-white">Contact</a></ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
  }