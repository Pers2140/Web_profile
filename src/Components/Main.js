import React from "react";
import NavBar from "./NavBar";

// images
import logo from "../images/gif_logo.gif";
import resume from "../images/resume.svg";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

export default function Main() {
  return (
    <Container fluid className="w-75 p-5 ">
      <NavBar />
      <Row>
        <Col md={12}>
          <h1 className="d-flex justify-content-center">Test Heading</h1>
          <br />
        </Col>
      </Row>
      <Row className="gx-5">
        <Col lg className="d-flex justify-content-center">
          <img
            src={logo}
            className=" d-flex justify-content-center img-fluid"
            alt=""
          />
        </Col>
        <Col lg className="d-flex justify-content-center">
          <img
            src={resume}
            className="img-fluid justify-content-center"
            alt=""
          />
        </Col>
        <Col lg className=" p-5 d-flex justify-content-center">
          
          <Stack gap={3}>
          <h1 className="text-center">Projects</h1>
            <div className="border text-center">First item</div>
            <div className="border text-center">Second item</div>
            <div className="border text-center">Third item</div>
          </Stack>
        </Col>
      </Row>
      <Row className="gx-5">
        <Col md={6}>
          <p className="p-5 d-flex justify-content-center text-center">
            I am a technician/designer on board The Allure of the Seas. I
            maintain serveral Konica 3070s/3080s printing presses while keeping
            track/order items for the printshop's inventory. I also help design
            and update the ship's compasses (daily activities,shows etc).
          </p>
          <br />
        </Col>
        <Col md={6}>
          <p className="p-5 d-flex justify-content-center text-center">
            I am a technician/designer on board The Allure of the Seas. I
            maintain serveral Konica 3070s/3080s printing presses while keeping
            track/order items for the printshop's inventory. I also help design
            and update the ship's compasses (daily activities,shows etc).
          </p>
          <br />
        </Col>
      </Row>
    </Container>
  );
}
