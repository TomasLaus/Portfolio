import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
} from "react-icons/si";
import { SiWindows } from "react-icons/si"
import { IoLogoVercel } from "react-icons/io5"

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
        <small style={{fontSize: "10px", display: 'block' }}>Windows</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <small style={{fontSize: "10px", display: 'block' }}>Visual studio code</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
        <small style={{fontSize: "10px", display: 'block' }}>Vercel</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <small style={{fontSize: "10px", display: 'block' }}>Postman</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <small style={{fontSize: "10px", display: 'block' }}>Heroku</small>
      </Col>
    </Row>
  );
}

export default Toolstack;
