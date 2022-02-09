import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about" style={{ backgroundColor: '#181818'}}>
      <Container >
        <Row>
          <Col md={8} className="home-about-description" style={{ margin: '0 auto'}}>
            <h1 style={{ fontSize: "2.6em"}}>
              LET ME <span className="red"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web applications with <b className="red"> Javascript / Reactjs / Nodejs/ PostgreSQL </b>  and some other cool libraries and frameworks.
              <br />
              <br />
            </p>
          </Col>
         
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="red">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TomasLaus"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tomaslaus/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tomaslaus/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
