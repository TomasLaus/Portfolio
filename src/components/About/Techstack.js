import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiSass,
  DiLess,
  DiGit,
  DiPostgresql,
  DiJqueryLogo,
  DiCss3
} from "react-icons/di";
import {SiFirebase, SiRedux, SiBootstrap, SiTailwindcss, SiNpm, SiTypescript } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <small style={{fontSize: "10px", display: 'block' }}>JavaScript</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <small style={{fontSize: "10px", display: 'block' }}>NodeJS</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql/>
        <small style={{fontSize: "10px", display: 'block' }}>PostgreSQL</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <small style={{fontSize: "10px", display: 'block' }}>React</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
        <small style={{fontSize: "10px", display: 'block' }}>Redux</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <small style={{fontSize: "10px", display: 'block' }}>Git</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <small style={{fontSize: "10px", display: 'block' }}>Firebase</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
        <small style={{fontSize: "10px", display: 'block' }}>JQuery</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <small style={{fontSize: "10px", display: 'block' }}>Tailwind CSS</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
        <small style={{fontSize: "10px", display: 'block' }}>Sass</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLess />
        <small style={{fontSize: "10px", display: 'block' }}>Less</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <small style={{fontSize: "10px", display: 'block' }}>CSS</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
        <small style={{fontSize: "10px", display: 'block' }}>NPM</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <small style={{fontSize: "10px", display: 'block' }}>Bootstrap</small>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <small style={{fontSize: "10px", display: 'block' }}>Typescript</small>
      </Col>
    </Row>
  );
}

export default Techstack;
