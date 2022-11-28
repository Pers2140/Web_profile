import React from "react";
import NavBar from "./NavBar"

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export default function Main() {
  return (
    <Container fluid className="w-75 p-5">
    <NavBar />
      <Row>
        <Col md={12}>
            <h1 className="d-flex justify-content-center">Test Heading</h1>
        </Col>
      </Row>
      <Row >
        <Col lg className="">
        
        </Col>
      </Row>
    </Container>
  );
}
