import React from "react";
// import BGanimation from "./BGanimation"
import NavBar from "./NavBar";
import Footer from "./Footer";

// images
import logo from "../images/gif_logo.gif";
import resume from "../images/resume.svg";

// bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

// projects

import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";

export default function Main() {
  return (
    <>
    {/* <BGanimation /> */}
    <Container fluid className="w-75 p-5" style={{"position":"relative","z-index":"200"}}>
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
            className=" w-100"
            alt=""
          />
        </Col>
        <Col lg className="d-flex justify-content-center">
          <img
            src={resume}
            className="img-fluid justify-content-center p-3"
            style={{height:"200",width:"auto"}}
            alt=""
          />
        </Col>
        <Col lg className=" p-5 d-flex justify-content-center">
          
          <Stack gap={3}>
          <h1 className="text-center">Projects</h1>
            <div className="border text-center"><Project1/></div>
            <div className="border text-center"><Project2/></div>
            <div className="border text-center"><Project3/></div>
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
    <Footer/>
    </>
  );
}
